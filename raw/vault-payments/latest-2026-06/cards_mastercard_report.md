---
source_url: "https://vault-portal.thoughtmachine.net/vault-payments/latest/EN/cards/mastercard/report"
title: "Clearing Cycle Summary reports"
scraped_at: "2026-06-17T05:11:53.385Z"
images: 0
---

# Clearing Cycle Summary reports

chat\_bubble

Currently it is not available to retrieve the reports in the sandbox environment

Mastercard provides optional Clearing Cycle Summary reports generated once per clearing cycle by the Global Clearing Management System (GCMS). The reports provide customers with an additional reconciliation tool by providing specific clearing totals summarised by clearing cycle in reconciliation currency. The reports are transmitted using bulk type T140.

Retrieve a list of the T140 reports that are currently available with a call to `GET /api/v1/files?page_size={page_size}&file_types=T140`:

The response should look like this:

Using the file id from the previous response, retrieve the pre-signed url of the report in order to download it by using `GET /api/v1/files/{file_id}`:

The response should look like this:

Use the pre\_signed\_url from the response to download the report: