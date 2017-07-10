# @datafire/zoomconnect
The world's greatest SMS API

## Operation: getBalance
Returns your account's credit balance

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceAccount"
}
```
## Operation: transfer
Transfers credits between two users in the same team. The <i>account email address</i> fields as well as the <i>number of credits to transfer</i> are required. 

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/WebServiceTransferCreditsRequest"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search
Find a user for a particular email address

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "searchEmail": {
      "type": "string",
      "description": "search by email address"
    }
  },
  "additionalProperties": false,
  "required": [
    "searchEmail"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceUsers"
}
```
## Operation: account.user.put
Creates a new sub-account in your team. The following fields are required <i>firstname, lastname, email address, contact number</i> and <i>password.</i>

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/WebServiceUser"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceUser"
}
```
## Operation: getUser
Gets a user from a given user id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "format": "int64",
      "description": "userId"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceUser"
}
```
## Operation: account.user.userId.post
Updates a sub-account in your team. The following fields can be updated <i>firstname, lastname, contact number</i> and <i>password.</i>

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "integer",
      "format": "int64",
      "description": "userId"
    },
    "body": {
      "$ref": "#/definitions/WebServiceUser"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceUser"
}
```
## Operation: contacts.all.get
Returns all contacts

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceContacts"
}
```
## Operation: contacts.create.post
Creates a  contact

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/WebServiceContact"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceContact"
}
```
## Operation: contacts.contactId.delete
Deletes a  contact

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contactId": {
      "type": "string",
      "description": "contactId"
    }
  },
  "additionalProperties": false,
  "required": [
    "contactId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: contacts.contactId.get
Returns details for a single contact

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contactId": {
      "type": "string",
      "description": "contactId"
    }
  },
  "additionalProperties": false,
  "required": [
    "contactId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceContact"
}
```
## Operation: contacts.contactId.post
Updates a  contact

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contactId": {
      "type": "string",
      "description": "contactId"
    },
    "body": {
      "$ref": "#/definitions/WebServiceContact"
    }
  },
  "additionalProperties": false,
  "required": [
    "contactId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceContact"
}
```
## Operation: contacts.contactId.addFromGroup.groupId.get
Remove a contact from a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contactId": {
      "type": "string",
      "description": "contactId"
    },
    "groupId": {
      "type": "string",
      "description": "groupId"
    }
  },
  "additionalProperties": false,
  "required": [
    "contactId",
    "groupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: contacts.contactId.addFromGroup.groupId.post
Remove a contact from a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contactId": {
      "type": "string",
      "description": "contactId"
    },
    "groupId": {
      "type": "string",
      "description": "groupId"
    }
  },
  "additionalProperties": false,
  "required": [
    "contactId",
    "groupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: contacts.contactId.addToGroup.groupId.get
Add a contact to a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contactId": {
      "type": "string",
      "description": "contactId"
    },
    "groupId": {
      "type": "string",
      "description": "groupId"
    }
  },
  "additionalProperties": false,
  "required": [
    "contactId",
    "groupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: contacts.contactId.addToGroup.groupId.post
Add a contact to a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contactId": {
      "type": "string",
      "description": "contactId"
    },
    "groupId": {
      "type": "string",
      "description": "groupId"
    }
  },
  "additionalProperties": false,
  "required": [
    "contactId",
    "groupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: context.lookup.get
Returns context information for a single provided

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceNumberContextLookupResponse"
}
```
## Operation: context.lookup.post
Returns context information for a single provided

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceNumberContextLookupResponse"
}
```
## Operation: groups.all.get
Returns all groups

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceGroups"
}
```
## Operation: groups.create.post
Create a  group

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/WebServiceGroup"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceGroup"
}
```
## Operation: groups.groupId.delete
Deletes a  group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "string",
      "description": "groupId"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: groups.groupId.get
Returns details for a single group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "string",
      "description": "groupId"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceGroup"
}
```
## Operation: groups.groupId.post
Update a  group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "string",
      "description": "groupId"
    },
    "body": {
      "$ref": "#/definitions/WebServiceGroup"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceGroup"
}
```
## Operation: groups.groupId.addContact.contactId.get
Add a contact to a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "string",
      "description": "groupId"
    },
    "contactId": {
      "type": "string",
      "description": "contactId"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId",
    "contactId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: groups.groupId.addContact.contactId.post
Add a contact to a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "string",
      "description": "groupId"
    },
    "contactId": {
      "type": "string",
      "description": "contactId"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId",
    "contactId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: groups.groupId.removeContact.contactId.get
Remove a contact from a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "string",
      "description": "groupId"
    },
    "contactId": {
      "type": "string",
      "description": "contactId"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId",
    "contactId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: groups.groupId.removeContact.contactId.post
Remove a contact from a group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "string",
      "description": "groupId"
    },
    "contactId": {
      "type": "string",
      "description": "contactId"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId",
    "contactId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: messages.all.get
Returns all messages

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "pageSize": {
      "type": "integer",
      "format": "int32",
      "description": "number of elements to return at a time"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "page number"
    },
    "type": {
      "type": "string",
      "description": "filter by message type",
      "enum": [
        "OUTBOUND",
        "INBOUND"
      ]
    },
    "status": {
      "type": "string",
      "description": "filter by message status",
      "enum": [
        "SCHEDULED",
        "UNKNOWN",
        "SENT",
        "FAILED",
        "FAILED_REFUNDED",
        "FAILED_OPTOUT",
        "DELIVERED",
        "RECEIVED"
      ]
    },
    "fromDateTimeSent": {
      "type": "string",
      "format": "date-time",
      "description": "date format: yyyyMMdd"
    },
    "toDateTimeSent": {
      "type": "string",
      "format": "date-time",
      "description": "date format: yyyyMMdd"
    },
    "fromDateTimeReceived": {
      "type": "string",
      "format": "date-time",
      "description": "date format: yyyyMMdd"
    },
    "toDateTimeReceived": {
      "type": "string",
      "format": "date-time",
      "description": "date format: yyyyMMdd"
    },
    "fromNumber": {
      "type": "string",
      "description": "phone number the message was sent from"
    },
    "toNumber": {
      "type": "string",
      "description": "phone number the message was sent to"
    },
    "message": {
      "type": "string",
      "description": "search matching message text"
    },
    "campaign": {
      "type": "string",
      "description": "search by campaign"
    },
    "dataField": {
      "type": "string",
      "description": "search by data field"
    },
    "deleted": {
      "type": "boolean",
      "description": "return only deleted / not deleted messages"
    },
    "read": {
      "type": "boolean",
      "description": "return only read / unread messages (inbox messages only)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceMessages"
}
```
## Operation: messages.messageId.delete
Deletes a  message

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "messageId"
    }
  },
  "additionalProperties": false,
  "required": [
    "messageId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: messages.messageId.get
Returns details for a single message

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "messageId"
    }
  },
  "additionalProperties": false,
  "required": [
    "messageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceMessage"
}
```
## Operation: messages.messageId.markRead.post
Marks a  message as read

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "messageId"
    }
  },
  "additionalProperties": false,
  "required": [
    "messageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceMessage"
}
```
## Operation: messages.messageId.markRead.put
Marks a  message as read

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "messageId"
    }
  },
  "additionalProperties": false,
  "required": [
    "messageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceMessage"
}
```
## Operation: messages.messageId.markUnread.post
Marks a  message as unread

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "messageId"
    }
  },
  "additionalProperties": false,
  "required": [
    "messageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceMessage"
}
```
## Operation: messages.messageId.markUnread.put
Marks a  message as unread

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "messageId": {
      "type": "string",
      "description": "messageId"
    }
  },
  "additionalProperties": false,
  "required": [
    "messageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceMessage"
}
```
## Operation: sms.send.get
Returns an example of the data to POST to send a single message.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceSendSmsRequest"
}
```
## Operation: sms.send.post
Sends a single message. The <i>recipientNumber</i> and <i>message</i> fields are required. All other fields are optional.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/WebServiceSendSmsRequest"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceSendSmsResponse"
}
```
## Operation: sms.send_bulk.get
Returns an example of the data to POST to send multiple messages in one transaction.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceSendSmsRequests"
}
```
## Operation: sms.send_bulk.post
Send multiple messages in one transaction.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/WebServiceSendSmsRequests"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceSendSmsResponses"
}
```
## Operation: sms.send_url_parameters.get
Send a single message using URL parameters.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipientNumber": {
      "type": "string",
      "description": "the phone number of the recipient to send to"
    },
    "message": {
      "type": "string",
      "description": "the message to send"
    },
    "dateToSend": {
      "type": "string",
      "format": "date-time",
      "description": "date format: yyyyMMddHHmm"
    },
    "campaign": {
      "type": "string",
      "description": "optional campaign name"
    },
    "dataField": {
      "type": "string",
      "description": "optional extra data"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipientNumber",
    "message"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: sms.send_url_parameters.post
Send a single message using URL parameters.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "recipientNumber": {
      "type": "string",
      "description": "the phone number of the recipient to send to"
    },
    "message": {
      "type": "string",
      "description": "the message to send"
    },
    "dateToSend": {
      "type": "string",
      "format": "date-time",
      "description": "date format: yyyyMMddHHmm"
    },
    "campaign": {
      "type": "string",
      "description": "optional campaign name"
    },
    "dataField": {
      "type": "string",
      "description": "optional extra data"
    }
  },
  "additionalProperties": false,
  "required": [
    "recipientNumber",
    "message"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: sms.send_url.token.get
Send a single message using your unique URL.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    },
    "recipientNumber": {
      "type": "string",
      "description": "the phone number of the recipient to send to"
    },
    "message": {
      "type": "string",
      "description": "the message to send"
    },
    "dateToSend": {
      "type": "string",
      "format": "date-time",
      "description": "date format: yyyyMMddHHmm"
    },
    "campaign": {
      "type": "string",
      "description": "optional campaign name"
    },
    "dataField": {
      "type": "string",
      "description": "optional extra data"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "recipientNumber",
    "message"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: sms.send_url.token.post
Send a single message using your unique URL.The <i>recipientNumber</i> and <i>message</i> parameters are required. All other parameters are optional.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "token"
    },
    "recipientNumber": {
      "type": "string",
      "description": "the phone number of the recipient to send to"
    },
    "message": {
      "type": "string",
      "description": "the message to send"
    },
    "dateToSend": {
      "type": "string",
      "format": "date-time",
      "description": "date format: yyyyMMddHHmm"
    },
    "campaign": {
      "type": "string",
      "description": "optional campaign name"
    },
    "dataField": {
      "type": "string",
      "description": "optional extra data"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "recipientNumber",
    "message"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: templates.all.get
Returns all templates

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceTemplates"
}
```
## Operation: templates.templateId.delete
Deletes a  template

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "templateId": {
      "type": "integer",
      "format": "int64",
      "description": "templateId"
    }
  },
  "additionalProperties": false,
  "required": [
    "templateId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: templates.templateId.get
Returns details for a single template

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "templateId": {
      "type": "integer",
      "format": "int64",
      "description": "templateId"
    }
  },
  "additionalProperties": false,
  "required": [
    "templateId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/WebServiceTemplate"
}
```
