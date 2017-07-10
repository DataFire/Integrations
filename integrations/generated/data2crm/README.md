# @datafire/data2crm
<p>Make use of our in-depth documentation to get more information about the various functions of the service. Those willing to explore the mechanics of Data2CRM.API can test it in live regime using the short code samples.</p><p>Select CRM: <span id="docs-select-crm" style="font-weight: bold">Loading... please wait</span></p><p>Here are the API access keys:<br><b>X-API2CRM-USERKEY</b>: <span id="docs-user-key">e2a6379ab878ae7e58119d4ec842bf9c926e05b5</span><br><b>X-API2CRM-CRMKEY</b>: <span id="docs-crm-key">7ae5b17008fb414d84981191cf3b66a476ef8bef</span></p><p id="docs-crm-access">The CRM access details are:<br><b>URL</b>: <a id="docs-crm-url" href="https://login.salesforce.com/" target="_blank">https://login.salesforce.com/</a><br><b>E-mail / Username</b>: <span id="docs-crm-username">developers.data2crm.api+1@magneticone.com</span><br><b>Password</b>: <span id="docs-crm-password">data2crmapi123</span></p>

## Operation: getAccountCollection
Returns all accounts from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Account"
  },
  "type": "array"
}
```
## Operation: createAccountEntity
Add account into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/AccountCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountCreated"
}
```
## Operation: getAccountCountCollection
Count all accounts from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: getAccountDescribe
Returns describe for accounts

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Describe"
}
```
## Operation: deleteAccountEntity
Delete account information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "account_id": {
      "type": "string",
      "description": "Account Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "account_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getAccountEntity
Return account information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "account_id": {
      "type": "string",
      "description": "Account Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "account_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Account"
}
```
## Operation: updateAccountEntity
Update account information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "account_id": {
      "type": "string",
      "description": "Account Identifier"
    },
    "body": {
      "$ref": "#/definitions/AccountUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "account_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccountUpdated"
}
```
## Operation: getAttachmentCollection
Returns all attachments from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    },
    "parent_type": {
      "type": "string",
      "description": "Parent Type",
      "enum": [
        "account",
        "contact",
        "lead",
        "task",
        "user",
        "opportunity",
        "note"
      ]
    },
    "parent_id": {
      "type": "string",
      "description": "Parent Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Attachment"
  },
  "type": "array"
}
```
## Operation: createAttachmentEntity
Add attachment into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/AttachmentCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AttachmentCreated"
}
```
## Operation: getAttachmentCountCollection
Count all attachments from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: getAttachmentDescribe
Returns describe for attachments

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Describe"
}
```
## Operation: deleteAttachmentEntity
Delete attachment information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "attachment_id": {
      "type": "string",
      "description": "Attachment Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "attachment_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getAttachmentEntity
Return attachment information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "attachment_id": {
      "type": "string",
      "description": "Attachment Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "attachment_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Attachment"
}
```
## Operation: updateAttachmentEntity
Update attachment information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "attachment_id": {
      "type": "string",
      "description": "Attachment Identifier"
    },
    "body": {
      "$ref": "#/definitions/AttachmentUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "attachment_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AttachmentUpdated"
}
```
## Operation: getCallCollection
Returns all calls from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    },
    "parent_type": {
      "type": "string",
      "description": "Parent Type",
      "enum": [
        "account",
        "contact",
        "lead",
        "opportunity",
        "task",
        "user"
      ]
    },
    "parent_id": {
      "type": "string",
      "description": "Parent Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Call"
  },
  "type": "array"
}
```
## Operation: createCallEntity
Add call into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/CallCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CallCreated"
}
```
## Operation: getCallCountCollection
Count all calls from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: getCallDescribe
Returns describe for calls

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Describe"
}
```
## Operation: deleteCallEntity
Delete call information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "call_id": {
      "type": "string",
      "description": "Call Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "call_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCallEntity
Return call information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "call_id": {
      "type": "string",
      "description": "Call Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "call_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Call"
}
```
## Operation: updateCallEntity
Update call information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "call_id": {
      "type": "string",
      "description": "Call Identifier"
    },
    "body": {
      "$ref": "#/definitions/CallUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "call_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CallUpdated"
}
```
## Operation: getContactCollection
Returns all contacts from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Contact"
  },
  "type": "array"
}
```
## Operation: createContactEntity
Add contact into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/ContactCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContactCreated"
}
```
## Operation: getContactCountCollection
Count all contacts from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: getContactDescribe
Returns describe for contacts

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Describe"
}
```
## Operation: deleteContactEntity
Delete contact information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "contact_id": {
      "type": "string",
      "description": "Contact Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "contact_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getContactEntity
Return contact information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "contact_id": {
      "type": "string",
      "description": "Contact Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "contact_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Contact"
}
```
## Operation: updateContactEntity
Update contact information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "contact_id": {
      "type": "string",
      "description": "Contact Identifier"
    },
    "body": {
      "$ref": "#/definitions/ContactUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "contact_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContactUpdated"
}
```
## Operation: getCrmCollection
Returns all CRMs from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    },
    "type": {
      "type": "string",
      "description": "Type",
      "enum": [
        "Bitrix24",
        "SugarCRM",
        "SuiteCRM",
        "BPMOnline",
        "HubSpot",
        "vtiger",
        "OroCRM",
        "ZohoCRM",
        "Insightly",
        "Salesforce",
        "Solve360CRM",
        "HighriseHQ",
        "PipelineDeals",
        "Pipedrive",
        "CapsuleCRM",
        "Zurmo",
        "MicrosoftDynamics"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Crm"
  },
  "type": "array"
}
```
## Operation: createCrmEntity
Add CRM into the system<br><a href="http://www.data2crm.com/api/faqs/need-connect-crm-data2crm-api/" target="_blank">What do I need to connect a CRM to Data2CRM.API?</a>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "body": {
      "$ref": "#/definitions/CrmCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CrmCreated"
}
```
## Operation: getCrmCountCollection
Count all CRMs from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: deleteCrmEntity
Delete CRM information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "crm_id": {
      "type": "string",
      "description": "CRM Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "crm_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCrmEntity
Return CRM information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "crm_id": {
      "type": "string",
      "description": "CRM Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "crm_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Crm"
}
```
## Operation: updateCrmEntity
Update CRM information<br><a href="http://www.data2crm.com/api/faqs/need-connect-crm-data2crm-api/" target="_blank">What do I need to connect a CRM to Data2CRM.API?</a>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "crm_id": {
      "type": "string",
      "description": "CRM Identifier"
    },
    "body": {
      "$ref": "#/definitions/CrmUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "crm_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CrmUpdated"
}
```
## Operation: getCustomFieldCollection
Returns all custom field from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    },
    "entity": {
      "type": "string",
      "description": "Entity",
      "enum": [
        "account",
        "contact",
        "user",
        "opportunity",
        "task",
        "lead",
        "note",
        "attachment",
        "event",
        "email",
        "call",
        "meeting"
      ]
    },
    "label": {
      "type": "string",
      "description": "Label"
    },
    "name": {
      "type": "string",
      "description": "Name"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/CustomField"
  },
  "type": "array"
}
```
## Operation: createCustomFieldEntity
Add custom field into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/CustomFieldCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomFieldCreated"
}
```
## Operation: deleteCustomFieldEntity
Delete custom field information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "custom_field_id": {
      "type": "string",
      "description": "Custom Field Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "custom_field_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getCustomFieldEntity
Return custom field information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "custom_field_id": {
      "type": "string",
      "description": "Custom Field Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "custom_field_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomField"
}
```
## Operation: updateCustomFieldEntity
Update custom field information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "custom_field_id": {
      "type": "string",
      "description": "Custom Field Identifier"
    },
    "body": {
      "$ref": "#/definitions/CustomFieldUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "custom_field_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CustomFieldUpdated"
}
```
## Operation: getEmailCollection
Returns all emails from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    },
    "parent_type": {
      "type": "string",
      "description": "Parent Type",
      "enum": [
        "account",
        "opportunity",
        "contact",
        "lead",
        "user",
        "task"
      ]
    },
    "parent_id": {
      "type": "string",
      "description": "Parent Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Email"
  },
  "type": "array"
}
```
## Operation: createEmailEntity
Add email into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/EmailCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EmailCreated"
}
```
## Operation: getEmailCountCollection
Count all emails from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: getEmailDescribe
Returns describe for emails

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Describe"
}
```
## Operation: deleteEmailEntity
Delete email information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "email_id": {
      "type": "string",
      "description": "Email Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "email_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getEmailEntity
Return email information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "email_id": {
      "type": "string",
      "description": "Email Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "email_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Email"
}
```
## Operation: updateEmailEntity
Update email information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "email_id": {
      "type": "string",
      "description": "Email Identifier"
    },
    "body": {
      "$ref": "#/definitions/EmailUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "email_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EmailUpdated"
}
```
## Operation: getEventCollection
Returns all events from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    },
    "parent_type": {
      "type": "string",
      "description": "Parent Type",
      "enum": [
        "account",
        "contact",
        "lead",
        "opportunity",
        "task",
        "user"
      ]
    },
    "parent_id": {
      "type": "string",
      "description": "Parent Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Event"
  },
  "type": "array"
}
```
## Operation: createEventEntity
Add event into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/EventCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventCreated"
}
```
## Operation: getEventCountCollection
Count all events from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: getEventDescribe
Returns describe for events

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Describe"
}
```
## Operation: deleteEventEntity
Delete event information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "event_id": {
      "type": "string",
      "description": "Event Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "event_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getEventEntity
Return event information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "event_id": {
      "type": "string",
      "description": "Event Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "event_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Event"
}
```
## Operation: updateEventEntity
Update event information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "event_id": {
      "type": "string",
      "description": "Event Identifier"
    },
    "body": {
      "$ref": "#/definitions/EventUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "event_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EventUpdated"
}
```
## Operation: getLeadCollection
Returns all leads from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Lead"
  },
  "type": "array"
}
```
## Operation: createLeadEntity
Add lead into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/LeadCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeadCreated"
}
```
## Operation: getLeadCountCollection
Count all leads from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: getLeadDescribe
Returns describe for leads

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Describe"
}
```
## Operation: deleteLeadEntity
Delete lead information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "lead_id": {
      "type": "string",
      "description": "Lead Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "lead_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getLeadEntity
Return lead information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "lead_id": {
      "type": "string",
      "description": "Lead Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "lead_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Lead"
}
```
## Operation: updateLeadEntity
Update lead information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "lead_id": {
      "type": "string",
      "description": "Lead Identifier"
    },
    "body": {
      "$ref": "#/definitions/LeadUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "lead_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/LeadUpdated"
}
```
## Operation: getMeetingCollection
Returns all meetings from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    },
    "parent_type": {
      "type": "string",
      "description": "Parent Type",
      "enum": [
        "account",
        "contact",
        "lead",
        "opportunity",
        "user"
      ]
    },
    "parent_id": {
      "type": "string",
      "description": "Parent Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Meeting"
  },
  "type": "array"
}
```
## Operation: createMeetingEntity
Add meeting into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/MeetingCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MeetingCreated"
}
```
## Operation: getMeetingCountCollection
Count all meetings from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: getMeetingDescribe
Returns describe for meetings

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Describe"
}
```
## Operation: deleteMeetingEntity
Delete meeting information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "meeting_id": {
      "type": "string",
      "description": "Meeting Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "meeting_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getMeetingEntity
Return meeting information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "meeting_id": {
      "type": "string",
      "description": "Meeting Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "meeting_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Meeting"
}
```
## Operation: updateMeetingEntity
Update meeting information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "meeting_id": {
      "type": "string",
      "description": "Meeting Identifier"
    },
    "body": {
      "$ref": "#/definitions/MeetingUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "meeting_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MeetingUpdated"
}
```
## Operation: getNoteCollection
Returns all notes from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    },
    "parent_type": {
      "type": "string",
      "description": "Parent Type",
      "enum": [
        "account",
        "contact",
        "lead",
        "task",
        "user",
        "opportunity",
        "event"
      ]
    },
    "parent_id": {
      "type": "string",
      "description": "Parent Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Note"
  },
  "type": "array"
}
```
## Operation: createNoteEntity
Add note into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/NoteCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NoteCreated"
}
```
## Operation: getNoteCountCollection
Count all notes from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: getNoteDescribe
Returns describe for notes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Describe"
}
```
## Operation: deleteNoteEntity
Delete note information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "note_id": {
      "type": "string",
      "description": "Note Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "note_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getNoteEntity
Return note information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "note_id": {
      "type": "string",
      "description": "Note Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "note_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Note"
}
```
## Operation: updateNoteEntity
Update note information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "note_id": {
      "type": "string",
      "description": "Note Identifier"
    },
    "body": {
      "$ref": "#/definitions/NoteUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "note_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NoteUpdated"
}
```
## Operation: getOpportunityCollection
Returns all opportunities from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Opportunity"
  },
  "type": "array"
}
```
## Operation: createOpportunityEntity
Add opportunity into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/OpportunityCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OpportunityCreated"
}
```
## Operation: getOpportunityCountCollection
Count all opportunities from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: getOpportunityDescribe
Returns describe for opportunities

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Describe"
}
```
## Operation: deleteOpportunityEntity
Delete opportunity information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "opportunity_id": {
      "type": "string",
      "description": "Opportunity Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "opportunity_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getOpportunityEntity
Return opportunity information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "opportunity_id": {
      "type": "string",
      "description": "Opportunity Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "opportunity_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Opportunity"
}
```
## Operation: updateOpportunityEntity
Update opportunity information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "opportunity_id": {
      "type": "string",
      "description": "Opportunity Identifier"
    },
    "body": {
      "$ref": "#/definitions/OpportunityUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "opportunity_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OpportunityUpdated"
}
```
## Operation: getTaskCollection
Returns all tasks from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Task"
  },
  "type": "array"
}
```
## Operation: createTaskEntity
Add task into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/TaskCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TaskCreated"
}
```
## Operation: getTaskCountCollection
Count all tasks from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: getTaskDescribe
Returns describe for tasks

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Describe"
}
```
## Operation: deleteTaskEntity
Delete task information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "task_id": {
      "type": "string",
      "description": "Task Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "task_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getTaskEntity
Return task information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "task_id": {
      "type": "string",
      "description": "Task Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "task_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Task"
}
```
## Operation: updateTaskEntity
Update task information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "task_id": {
      "type": "string",
      "description": "Task Identifier"
    },
    "body": {
      "$ref": "#/definitions/TaskUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "task_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TaskUpdated"
}
```
## Operation: getUserCollection
Returns all users from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "X-API2CRM-DATA-ENABLE": {
      "type": "string",
      "description": "Data Enable",
      "enum": [
        "false",
        "true"
      ]
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Amount of results (default: 25)"
    },
    "offset": {
      "type": "integer",
      "format": "int32",
      "description": "Start from record (default: 0)"
    },
    "filter": {
      "type": "string",
      "description": "Filter"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/User"
  },
  "type": "array"
}
```
## Operation: createUserEntity
Add user into the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "body": {
      "$ref": "#/definitions/UserCreate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserCreated"
}
```
## Operation: getUserCountCollection
Count all users from the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Count"
}
```
## Operation: getUserDescribe
Returns describe for users

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Describe"
}
```
## Operation: deleteUserEntity
Delete user information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "user_id": {
      "type": "string",
      "description": "User Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getUserEntity
Return user information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "user_id": {
      "type": "string",
      "description": "User Identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "user_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/User"
}
```
## Operation: updateUserEntity
Update user information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-API2CRM-USERKEY": {
      "type": "string",
      "description": "User Key"
    },
    "X-API2CRM-CRMKEY": {
      "type": "string",
      "description": "CRM Key"
    },
    "user_id": {
      "type": "string",
      "description": "User Identifier"
    },
    "body": {
      "$ref": "#/definitions/UserUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-API2CRM-USERKEY",
    "X-API2CRM-CRMKEY",
    "user_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserUpdated"
}
```
