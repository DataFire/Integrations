# @datafire/inboxroute
MailSquad offers an affordable and super easy way to create, send and track delightful emails.

## Operation: contacts.get
Get a paged result of contacts from a list

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "listid": {
      "type": "string",
      "description": "Unique 16 characters ID of the contact list to get contacts of"
    },
    "offset": {
      "type": "integer",
      "description": "Skip that many records"
    },
    "limit": {
      "type": "integer",
      "description": "Maximum number of items in page"
    },
    "sort": {
      "type": "string",
      "description": "Property to sort by. Append '-' for descending order."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContactPage"
}
```
## Operation: contacts.lists.get
Get a paged result of contact lists.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "offset": {
      "type": "integer",
      "description": "Skip that many records"
    },
    "limit": {
      "type": "integer",
      "description": "Maximum number of items in page"
    },
    "sort": {
      "type": "string",
      "description": "Property to sort by. Append '-' for descending order."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContactListPage"
}
```
## Operation: contacts.lists.post
Add a new contact list

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "contactlist": {
      "$ref": "#/definitions/ContactListUpdate"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NewId"
}
```
## Operation: contacts.lists.listid.delete
Delete an existing contact list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listid": {
      "type": "string",
      "description": "Unique 16 characters ID of the contact list"
    }
  },
  "additionalProperties": false,
  "required": [
    "listid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: contacts.lists.listid.put
Update an existing contact list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listid": {
      "type": "string",
      "description": "Unique 16 characters ID of the contact list"
    },
    "contactlist": {
      "$ref": "#/definitions/ContactListUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "listid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: contacts.contactid.delete
Delete an existing contact

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contactid": {
      "type": "string",
      "description": "Unique 16 characters ID of the contact"
    }
  },
  "additionalProperties": false,
  "required": [
    "contactid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: contacts.contactid.put
Update an existing contact

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contactid": {
      "type": "string",
      "description": "Unique 16 characters ID of the contact"
    },
    "contact": {
      "$ref": "#/definitions/ContactUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "contactid",
    "contact"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: subscription.listid.post
Subscribe an email address to a list. This api call has the same behavior as
a regular subscribe form. However, single opt-in is allowed for system integration
purposes.

- If email address does not exist, a new contact will be added to the list.
- If email address exists custom fields will be updated and status will be put
  to unconfirmed or active depending of singleoptin value.
- If current status if Active, this operation will only update the custom fields.
- If singleoptin is true, no email confirmation will be sent. In that case,
  you must provide the subscribe's origin ip and confirmation date-time.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listid": {
      "type": "string",
      "description": "Unique 16 characters ID of the contact list"
    },
    "subscription": {
      "$ref": "#/definitions/SubscriptionRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "listid",
    "subscription"
  ]
}
```
### Output Schema
```json
{}
```
