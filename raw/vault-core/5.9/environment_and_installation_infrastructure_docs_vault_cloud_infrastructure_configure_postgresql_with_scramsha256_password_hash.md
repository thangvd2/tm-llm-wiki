---
source_url: "https://vault-portal.thoughtmachine.net/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configure_postgresql_with_scramsha256_password_hash"
title: "Configure PostgreSQL with SCRAM-SHA-256 password hash"
scraped_at: "2026-06-17T04:58:06.206Z"
images: 0
---

# Configure PostgreSQL with SCRAM-SHA-256 password hash

Bank-hosted

Vault Core is fully compatible with the SCRAM-SHA-256 password hashing method. This requires you to configure PostgreSQL with scram-sha-256 password hash.

## [](#summary_of_postgresql_with_scram_sha_256_configuration "Copy link to heading")Summary of PostgreSQL with SCRAM-SHA-256 configuration

1.  [Change the `password_encryption` parameter](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configure_postgresql_with_scramsha256_password_hash#change_the_password_encryption_parameter).
    

chat\_bubble

It is possible that managed services (such as RDS/CloudSQL) require a different configuration.

2.  [Regenerate the Vault Core passwords](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configure_postgresql_with_scramsha256_password_hash#regenerate_the_vault_passwords).
    
3.  [Change the authentication method in pg\_hba.conf](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configure_postgresql_with_scramsha256_password_hash#change_the_authentication_method_in_pg_hbaconf).
    

## [](#change_the_password_encryption_parameter "Copy link to heading")Change the password\_encryption parameter

Action the following steps to change the `password_encryption` parameter:

1.  Edit `postgresql.conf` and change the parameter to:
    
    ```
    \[source\]
    ----
    # postgresql.conf password\_encryption = scram-sha-256
    ----
    ```
    
2.  Run the following SQL statement to reload the configuration:
    
    ```
    \[source\]
    ----
    postgres=# SELECT pg\_reload\_conf();
    ----
    ```
    
3.  Examine the log file to see if the reload was successful, and check the new value via SQL:
    
    ```
    \[source\]
    ----
    postgres=# SHOW password\_encryption;
    ----
    ```
    

chat\_bubble

Even though you changed the parameter, the old `md5` passwords will still work as long as the authentication method setting in `pg_hba.conf` is `md5`.

## [](#regenerate_the_vault_passwords "Copy link to heading")Regenerate the Vault passwords

Once you have [changed and updated the `password_encryption` parameter](/vault-core/5-9/EN/environment_and_installation/infrastructure_docs/vault_cloud_infrastructure/configure_postgresql_with_scramsha256_password_hash#change_the_password_encryption_parameter), do the following:

1.  Re-run the Vault Installer. This re-creates the passwords for the users that Vault Core services have and uses the new hashing algorithm.
    
2.  Check that the Kubernetes jobs ending with `-db-init` have completed successfully. Once they have, this step is complete.
    

## [](#change_the_authentication_method_in_pg_hba_conf "Copy link to heading")Change the authentication method in pg\_hba.conf

chat\_bubble

This step is not strictly necessary because PostgreSQL uses SCRAM-SHA-256 authentication for SCRAM-SHA-256-hashed passwords, even if you set the authentication method to `md5` in `pg_hba.conf`. However, Thought Machine strongly recommends that you apply this change to ensure that passwords using the old md5 hashing method are not allowed.

Follow these steps to change the authentication method:

1.  Adapt `pg_hba.conf` by replacing the Vault Core relevant occurrences of `md5` with `scram-sha-256`. This prevents users who still have an old `md5` password from authenticating.
    

Example:

2.  Reload the configuration as described in the previous instructions.
    
3.  Check the log file or examine the view `pg_hba_file_rules` to see if the reload was successful.