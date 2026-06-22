---
source_url: "https://vault-portal.thoughtmachine.net/additional-product-offerings/latest/EN/vault-bridge/api/overview/permission_scopes"
title: "Permission Scopes"
scraped_at: "2026-06-17T15:54:18.236Z"
images: 0
---

# Permission Scopes

By default, JSON Web Tokens (JWTs) used in API requests are authorised based on the API scopes within the JWT. Scopes can be specified either within the `scope` or `scp` claims.

The following table provides the full list of Vault Bridge Scopes and the API endpoints they are associated with.

 
| Scope | Endpoints |
| --- | --- |
| 
bridge.app\_bundles:read

 | 

GET /app-bundle/\*

 |
| 

bridge.app\_versions:read

 | 

GET /api/v1/app-versions  
GET /api/v1/app-versions/\*  
GET /api/v1/app-versions:batchGet

 |
| 

bridge.app\_versions:write

 | 

POST /api/v1/app-versions

 |
| 

bridge.apps:read

 | 

GET /api/v1/apps  
GET /api/v1/apps/\*  
GET /api/v1/apps:batchGet

 |
| 

bridge.apps:write

 | 

PUT /api/v1/apps/\*

 |
| 

bridge.credentials:read

 | 

GET /api/v1/credentials  
GET /api/v1/credentials/\*  
GET /api/v1/credentials:batchGet

 |
| 

bridge.credentials:write

 | 

POST /api/v1/credentials  
PUT /api/v1/credentials/\*

 |
| 

bridge.customer\_mastery.fields:read

 | 

GET /api/v1beta/customer-mastery/fields

 |
| 

bridge.customer\_mastery.parties:read

 | 

GET /api/v1beta/customer-mastery/parties  
GET /api/v1beta/customer-mastery/parties:batchGet  
POST /api/v1beta/customer-mastery/parties:search

 |
| 

bridge.customer\_mastery.parties:write

 | 

POST /api/v1beta/customer-mastery/parties  
PUT /api/v1beta/customer-mastery/parties/\*

 |
| 

bridge.customer\_mastery.party\_template\_versions:read

 | 

GET /api/v1beta/customer-mastery/party-template-versions  
GET /api/v1beta/customer-mastery/party-template-versions/\*:usage  
GET /api/v1beta/customer-mastery/party-template-versions:batchGet  
GET /api/v1beta/customer-mastery/party-template-versions:batchGetUsage  
POST /api/v1beta/customer-mastery/party-template-versions:validate

 |
| 

bridge.customer\_mastery.party\_template\_versions:write

 | 

POST /api/v1beta/customer-mastery/party-template-versions

 |
| 

bridge.customer\_mastery.party\_templates:read

 | 

GET /api/v1beta/customer-mastery/party-templates  
GET /api/v1beta/customer-mastery/party-templates/\*:usage  
GET /api/v1beta/customer-mastery/party-templates:batchGet

 |
| 

bridge.customer\_mastery.party\_templates:write

 | 

POST /api/v1beta/customer-mastery/party-templates

 |
| 

bridge.customer\_mastery.relationship\_types:read

 | 

GET /api/v1beta/customer-mastery/relationship-types  
GET /api/v1beta/customer-mastery/relationship-types:batchGet

 |
| 

bridge.customer\_mastery.relationship\_types:write

 | 

POST /api/v1beta/customer-mastery/relationship-types

 |
| 

bridge.customer\_mastery.relationships:read

 | 

GET /api/v1beta/customer-mastery/relationships  
GET /api/v1beta/customer-mastery/relationships:batchGet

 |
| 

bridge.customer\_mastery.relationships:write

 | 

POST /api/v1beta/customer-mastery/relationships  
PUT /api/v1beta/customer-mastery/relationships/\*

 |
| 

bridge.external\_system\_versions:read

 | 

GET /api/v1/external-system-versions  
GET /api/v1/external-system-versions/\*  
GET /api/v1/external-system-versions:batchGet

 |
| 

bridge.external\_system\_versions:write

 | 

POST /api/v1/external-system-versions

 |
| 

bridge.external\_systems:read

 | 

GET /api/v1/external-systems  
GET /api/v1/external-systems/\*  
GET /api/v1/external-systems:batchGet

 |
| 

bridge.external\_systems:write

 | 

POST /api/v1/external-systems  
PUT /api/v1/external-systems/\*

 |
| 

bridge.integration\_configs:read

 | 

GET /api/v1/integration-configs  
GET /api/v1/integration-configs/\*  
GET /api/v1/integration-configs:batchGet

 |
| 

bridge.integration\_configs:write

 | 

POST /api/v1/integration-configs  
PUT /api/v1/integration-configs/\*

 |
| 

bridge.integrations\_proxy:execute

 | 

/api/proxy/\*/\*  
/api/proxy/\*/\*/\*\*

 |
| 

bridge.roles:read

 | 

GET /api/v1/roles  
GET /api/v1/roles:batchGet

 |
| 

bridge.roles:write

 | 

POST /api/v1/roles  
PUT /api/v1/roles/\*

 |
| 

bridge:execute

 | 

/api/proxy/\*/\*  
/api/proxy/\*/\*/\*\*

 |
| 

bridge:read

 | 

GET /api/v1/app-versions  
GET /api/v1/app-versions/\*  
GET /api/v1/app-versions:batchGet  
GET /api/v1/apps  
GET /api/v1/apps/\*  
GET /api/v1/apps:batchGet  
GET /api/v1/credentials  
GET /api/v1/credentials/\*  
GET /api/v1/credentials:batchGet  
GET /api/v1/external-system-versions  
GET /api/v1/external-system-versions/\*  
GET /api/v1/external-system-versions:batchGet  
GET /api/v1/external-systems  
GET /api/v1/external-systems/\*  
GET /api/v1/external-systems:batchGet  
GET /api/v1/integration-configs  
GET /api/v1/integration-configs/\*  
GET /api/v1/integration-configs:batchGet  
GET /api/v1beta/customer-mastery/fields  
GET /api/v1beta/customer-mastery/parties  
GET /api/v1beta/customer-mastery/parties:batchGet  
GET /api/v1beta/customer-mastery/party-template-versions  
GET /api/v1beta/customer-mastery/party-template-versions/\*:usage  
GET /api/v1beta/customer-mastery/party-template-versions:batchGet  
GET /api/v1beta/customer-mastery/party-template-versions:batchGetUsage  
GET /api/v1beta/customer-mastery/party-templates  
GET /api/v1beta/customer-mastery/party-templates/\*:usage  
GET /api/v1beta/customer-mastery/party-templates:batchGet  
GET /api/v1beta/customer-mastery/relationship-types  
GET /api/v1beta/customer-mastery/relationship-types:batchGet  
GET /api/v1beta/customer-mastery/relationships  
GET /api/v1beta/customer-mastery/relationships:batchGet  
GET /app-bundle/\*  
POST /api/v1beta/customer-mastery/parties:search  
POST /api/v1beta/customer-mastery/party-template-versions:validate

 |
| 

bridge:write

 | 

POST /api/v1/app-versions  
POST /api/v1/credentials  
POST /api/v1/external-system-versions  
POST /api/v1/external-systems  
POST /api/v1/integration-configs  
POST /api/v1beta/customer-mastery/parties  
POST /api/v1beta/customer-mastery/party-template-versions  
POST /api/v1beta/customer-mastery/party-templates  
POST /api/v1beta/customer-mastery/relationship-types  
POST /api/v1beta/customer-mastery/relationships  
PUT /api/v1/apps/\*  
PUT /api/v1/credentials/\*  
PUT /api/v1/external-systems/\*  
PUT /api/v1/integration-configs/\*  
PUT /api/v1beta/customer-mastery/parties/\*  
PUT /api/v1beta/customer-mastery/relationships/\*

 |