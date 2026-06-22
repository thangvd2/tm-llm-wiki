---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/tutorials/encryption"
title: "Encryption"
scraped_at: "2026-06-17T15:50:10.109Z"
images: 0
---

# Encryption

From the sections above you will have used the `Clear Text Card Details` endpoint to retrieve a \`Card’s PCI DSS scoped information, such as PAN, in order to initiate payments. These endpoints are provided for your convenience during testing, and are not present in a production environment.

In production, several encryption protocols are in place to ensure PCI information transfer against Vault Payments is secure. In this tutorial you will see how you may retrieve sensitive card details and decrypt them. On the opposite side, you will have two exercises to encrypt sensitive details, in order to create an `Account Range` and update a PIN.

chat\_bubble

As this is a more challenging implementation journey, the sample code snippets are provided in multiple coding languages, to make it more accessible/ easier to spot problems. Different languages come with different encryption utilities which may impact how the data is represented throughout this journey. In general they are shown in one of the following types, somewhat interchangeably, whichever comes more naturally to the language specific utilities. - [Hex](https://en.wikipedia.org/wiki/Hexadecimal) - [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) - Binary (often the bytes conform to the [DER](https://en.wikipedia.org/wiki/X.690#DER_encoding) format)

Bash Go

In this tutorial you may use the following as `signing.pem`. Conceptually this corresponds to the `Client Verification Key`. The Sandbox is preconfigured as if the key exchange step has already been completed. It has knowledge of the public part of this key, which it will use to verify against your payload signature.

## [](#get_sensitive_card_details "Copy link to heading")Get sensitive Card Details

### [](#1_ephemeral_key_pair_generation_and_signature "Copy link to heading")1\. Ephemeral Key Pair Generation and Signature

First you would need to generate an ECC P-256 ephemeral key. You may then derive its public part, to initiate a public key exchange with Vault Payments. Vault Payments will be able to confirm the legitimacy of your request by examining your signature on this key.

chat\_bubble

To reduce PCI DSS scope, this ephemeral key may be generated on the client cardholder device, such as a website client or mobile app.

Bash Go

### [](#2_api_call "Copy link to heading")2\. API Call

Now you are ready to make the `Get Card Details` call. You may use any card ID that you have generated from the preceding tutorials, or the preconfigured one `7566e10d-ea3f-4862-91bf-b587242b7167`:

Sample response:

chat\_bubble

In a production setup, this is the point where the client integration would use the exchanged `Server Signing Key` against the `signature` from the `encryption_response` to confirm the payload has been encrypted by Vault Payments. For Sandbox purposes you may skip over this step.

Note that in the response, `card_id`, `psn`, and `expiration_timestamp` are unencrypted plaintexts, however `pan` and `security_code` are encrypted, as they fall under PCI DSS scope. To read those, you need to derive the shared key using the `encryption_response`.

Also note the ephemeral nature of the `encryption_response`: if you send the same request through, every section under `encryption_response` will be different. For best practice, the same should apply on the client side. A new ephemeral private/public key pair should be generated on each `GetCardDetails` call. Now you may derive the following (deterministic) samples using the `encryption_response` above.

### [](#3_shared_key_derivation "Copy link to heading")3\. Shared Key Derivation

Combine the server public key with the private key to derive a shared secret. This is a form of the [`Diffie-Hellman key exchange`](https://en.wikipedia.org/wiki/Elliptic-curve_Diffie%E2%80%93Hellman).

This will be used to construct the derived key suitable for the encryption needs over this channel.

Bash Go

You now have a `Derived Key` which may be used to decrypt the secure `pan` and `security_code` from the `GetCardDetailsResponse`. Through the principles of public key exchange, this is the same key that would have been derived on the Vault Payments side to encrypt the PCI DSS payload.

### [](#4_decrypting_sensitive_card_details "Copy link to heading")4\. Decrypting Sensitive Card Details

First note that both `pan` and `security_code` are given as 64 digit hex strings:

The first 32 digits make up an "initialisation vector", and the last 32 make up the encrypted payload.

Let’s decrypt the PAN.

Bash Go

Doing the same for `security_code` should yield `956`.

You should be able to see the same result under the `Cleartext Card Details` endpoint. This should demystify the cleartext endpoints: they implement exactly the same scheme as above to get to the final answer, so you get to sidestep all the encryption for convenience.

error

You may see that all the encryption above is underpinned by the secrecy of your private signing key, in other words the `Client Verification Key`. You must ensure it is securely stored and handled as this is how Vault Payments verifies you are authorised to retrieve sensitive cardholder details.

## [](#create_an_account_range "Copy link to heading")Create an Account Range

`Account Ranges` define valid PANs that may be created under a `Card Product`. They need to span your given BIN, and are 11 digits long. For example, a valid range for the BIN "55550000" would be "55550000000"<>"55550000001".

If your `Card Product` specifies PAN length to be "16", this account range will have a max capacity of 20000, as you could generate up to 20000 unique 16 digit PANs in the space `555500000000000X - 555500000019999X` (accounting for the check digit).

Account Range\`s fall under PCI DSS scope because together with the last 4 PAN digits, which are exposed on `Card` endpoint calls, they expose too much of the full PAN.

Following on from the [Get Sensitive Card Details](/vault-payments/latest/EN/cards/tutorials#get_sensitive_card_details) example, in this section you will find the command to create an `Account Range` as an exercise to encrypt payloads to Vault Payments.

### [](#points_of_note "Copy link to heading")Points of note

-   Before creating an `Account Range`, a corresponding `Bank` and `BIN` resources must have been created for you by Thought Machine.
    
-   You will now need to call `InitiateEncryptedSession` in order to complete the public key exchange, before sending through the actual "Create Account Range" request.
    
-   As part of the "Create Account Range" call, you will need to supply the `shared_key_id` received from the "Account Range Session" response. This is a unique one time correlation key linking to your session.
    
-   The AES-128-CBC algorithm encrypts blocks of 16 bytes at a time. Interpreting an `Account Range` as 11 raw bytes, you will need to append 5 null bytes (`\x00`) to this payload before passing it to the encryption command.
    
-   A random initialisation vector of length 16 bytes is required in the AES-128-CBC block cipher. In the [Get Sensitive Card Details](/vault-payments/latest/EN/cards/tutorials#get_sensitive_card_details) example, Vault Payments encrypts the cardholder details and therefore Vault Payments generates the initialisation vector and preprends it to the encryption payload. You will now need to generate your own initialisation vectors as part of your payload encryption, and prepend this to your request payload in the same way.
    
-   An `Account Range` creation call may fail if the supplied `Account Range` overlaps with an existing one, or if it lies on a BIN that your organisation does not own. Receiving these specific errors are acceptable for the purpose of this exercise, as it means Vault Payments was able to successfully decrypt your payload.
    

### [](#solution "Copy link to heading")Solution

#### [](#1_ephemeral_key_pair_generation_and_signature_2 "Copy link to heading")1\. Ephemeral Key Pair Generation and Signature

Identical as the step 1 in the [previous section](/vault-payments/latest/EN/cards/tutorials#get_sensitive_card_details).

#### [](#2_api_call_to_initiate_encrypted_session "Copy link to heading")2\. API Call to Initiate Encrypted Session

Sample response:

#### [](#3_shared_key_derivation_2 "Copy link to heading")3\. Shared Key Derivation

Assuming the same ephemeral private key from before (you should be generating a new one in practice!), you would yield:

-   Diffie-Hellman secret: `94dbc6aa33b779571de76b27a3f24181cf4ee2575698ff6d1ae331b76bca110c`
    
-   Marshalled public key: `04a992ba67b7d834cc8047dba458410371d4af64e7a9344fd6752eb585c174dfc9e6fd35023f0f050e31f6888bd0a3ffb0842f939865ea4e8b2b07dc3f3a9cdfac`
    
-   Derived shared key: `f617c85658a1f2dcfbbf70e31b264e9b`
    

#### [](#4_encrypt_account_range "Copy link to heading")4\. Encrypt Account Range

The following snippets assume a BIN of `55550000`, along with some other hardcoded values, to produce a deterministic result to help you debug where necessary. In practice, choosing this BIN will likely result in an error response from the Vault Payments endpoint, as this is probably different from the one provisioned against your organisation.

Bash Go

chat\_bubble

You should be able to use the decrypting steps earlier to reverse this operation to recover the plain text `Account Ranges`; this matches the mechanism implemented by the server endpoint.

#### [](#5_api_call_to_create_account_range "Copy link to heading")5\. API Call to Create Account Range

If you are successful, you would see the created `Account Range` from the response, with the PCI sensitive details omitted.

## [](#update_a_pin "Copy link to heading")Update a PIN

chat\_bubble

This tutorial is for the Mastercard integration. Vault Payments does not currently manage PINs in the Visa DPS integration.

This an encryption exercise for you to update a PIN. This is a little different from the \`\`Create an Account Range'' example, as you now need to work with a [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block/).

### [](#points_of_note_2 "Copy link to heading")Points of note

-   You first need an active [Card](/vault-payments/latest/EN/cards/tutorials#set_up_and_issue_a_virtual_card) as well as its cleartext PAN (Primary Account Number). You are free to use the [Cleartext Card Details](/vault-payments/latest/EN/cards/tutorials#step_1__get_card_details_in_clear_text) endpoint for this, but from the [preceding section](/vault-payments/latest/EN/cards/tutorials#get_sensitive_card_details) you should now have the knowledge to implement this process in a PCI DSS compliant way.
    
-   You need to decide on a new PIN, and encode it into a PIN block under the ISO 9564-1 Format 4 format. You may find [this Mastercard guide](https://developer.mastercard.com/card-issuance/documentation/pin-block-encryption-process/) a helpful reference.
    
-   Note that in PIN blocks, the padded PAN and PIN digits are represented as hexadecimal digits, thus as half-bytes when encrypting and decrypting the PIN block.
    
-   As opposed to the [Create an Account Range](/vault-payments/latest/EN/cards/tutorials#create_an_account_range) example, an initialisation vector is not required for this encryption scheme.
    
-   PINs that are too easily guessable are classed as weak. Vault Payments prevents updating to a PIN that is weak. For the sandbox, only the PINs `1234` and `1111` are considered weak and attempts to set one of these as a PIN will be rejected.
    

chat\_bubble

Similar to the [Get Sensitive Card Details](/vault-payments/latest/EN/cards/tutorials#get_sensitive_card_details) section, such a PIN update scheme is best implemented directly on the cardholder device, to limit PCI DSS scope.

### [](#solution_2 "Copy link to heading")Solution

#### [](#step_1_obtain_a_cleartext_pan "Copy link to heading")Step 1: Obtain a Cleartext PAN

You can do this as described in [this section](/vault-payments/latest/EN/cards/tutorials#step_1__get_card_details_in_clear_text). The following steps assume the returned PAN is `5373980293147592`.

#### [](#step_2_api_call_to_initiate_encrypted_session "Copy link to heading")Step 2: API call to initiate encrypted session

Assuming your client public key is stored in the variable `CLIENT_PUBLIC_KEY` and your signature in `SIGNATURE` you can initiate an encrypted session with the following API call:

Sample response:

#### [](#step_3_shared_key_derivation "Copy link to heading")Step 3: Shared key derivation

Assuming the same ephemeral private key from before (you should be generating a new one in practice!), you would yield:

-   Diffie-Hellman secret: `13333772134470593b597ac9e79b5d481dff5b60a2126306f8d79ed6434e5865`
    
-   Marshalled public key: `04120acb799624150ea725c6fe10e63e9cd87105a41bf1c51873249e3a7fa82f001af1abbb872d6071f6082c40c9b4b3a145470d2dfe8933b8b37c8591412437d5`
    
-   Derived shared key: `9ab92b881c3a84b5435a6bc96f0a6890`
    

#### [](#step_4_encode_pin_block "Copy link to heading")Step 4: Encode PIN block

Suppose the chosen PIN is `1397`. Encode it in ISO 9564-1 Format 4:

Bash Go

#### [](#step_6_api_call_to_update_pin "Copy link to heading")Step 6: API Call to Update PIN

UpdatePIN:

If this call was successful, you should receive an empty response (`{}`).

Upon calling the `CleartextPIN` or the PCI compliant `GetPIN` endpoints, you should be able to observe your selected cleartext PIN.