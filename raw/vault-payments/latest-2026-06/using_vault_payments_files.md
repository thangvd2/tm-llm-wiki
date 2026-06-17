---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/using_vault_payments/files"
title: "Files"
scraped_at: "2026-06-17T05:07:59.307Z"
images: 0
---

# Files

The `Files API` provides a way to store and retrieve any files in Vault Payments in a unified way. The files stored are treated as blobs; therefore, you should ensure data validation and sensitive data obfuscation are done before any data uploads.

Files can be referenced by other Vault Payments resources which includes:

-   [Instruction Batches](/vault-payments/latest/EN/using_vault_payments/instruction_batch_processing#uploading_an_instruction_file)
    
-   [Membership Directories](/vault-payments/latest/EN/using_vault_payments/membership_directories#uploading_membership_directories)
    

## [](#uploading_files "Copy link to heading")Uploading files

The `Files API` exposes an upload interface through the `multipart/form-data` content type. The request is made up of two parts:

-   attributes
    
    -   This is an escaped json string of the create file request, containing:
        
        -   request id: A UUID used to ensure the request is idempotent.
            
        -   file name: The name of the file. Can be filtered in a List query.
            
        -   file type: May be used to tag and group files. Can then be filtered in a List query.
            
        -   file description: The description of the file.
            
        
    
-   file
    
    -   The file itself
        
    

An example file upload request would be:

The response will be as shown below:

chat\_bubble

For security purposes, files with any one of the following extensions cannot be uploaded:

-   .asp
    
-   .aspx
    
-   .cgi
    
-   .css
    
-   .docx
    
-   .html
    
-   .js
    
-   .jsp
    
-   .pdf
    
-   .php
    
-   .pl
    
-   .rhtml
    
-   .shtml
    
-   .swf
    
-   .xhtml
    
-   .xlsx
    

Additionally, the content type of an uploaded file must be any one of the following:

-   application/xml
    
-   application/zip
    
-   text/plain
    
-   text/xml
    

## [](#retrieving_files "Copy link to heading")Retrieving files

### [](#getting_a_file "Copy link to heading")Getting a file

You can retrieve a file by its `id` through the GET endpoint:

The response will be as shown below:

The `pre_signed_url` can be used to access and download the retreived file.

### [](#listing_files "Copy link to heading")Listing files

The `name` and `type` of a file can be used as filters in a List request to get all files that match the provided filters.

An example List request would be:

The response will be as shown below: