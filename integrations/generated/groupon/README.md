# @datafire/groupon
Put all those great ideas for Groupon improvements, extensions, and multiple-platform interfaces to work.

## Operation: status.format.get
Returns the status of Groupon's API and all the currently available versions of the API.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "json"
      ]
    },
    "client_id": {
      "type": "string"
    },
    "device_id": {
      "type": "string"
    },
    "user_agent": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: divisions.format.get
Returns the list of all launched divisions.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "json",
        "xml"
      ]
    },
    "client_id": {
      "type": "string"
    },
    "show": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "client_id",
    "show"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: groupon_says.format.get
Returns the list of recent (or random) Groupon Says commentaries.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "json",
        "xml"
      ]
    },
    "client_id": {
      "type": "string"
    },
    "limit": {
      "type": "string"
    },
    "random": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "client_id",
    "limit"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deals.id.format.get
Returns the detailed information about a specified deal.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "format": {
      "type": "string",
      "enum": [
        "json",
        "xml"
      ]
    },
    "client_id": {
      "type": "string"
    },
    "show": {
      "type": "string"
    },
    "email_address": {
      "type": "string"
    },
    "area": {
      "type": "string"
    },
    "referral_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "format",
    "client_id",
    "show"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deals.format.get
Returns an ordered list of deals that are currently launched for a specific division.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "json",
        "xml"
      ]
    },
    "client_id": {
      "type": "string"
    },
    "show": {
      "type": "string"
    },
    "email_address": {
      "type": "string"
    },
    "area": {
      "type": "string"
    },
    "lat": {
      "type": "string"
    },
    "lng": {
      "type": "string"
    },
    "radius": {
      "type": "string"
    },
    "division_id": {
      "type": "string"
    },
    "device_token": {
      "type": "string"
    },
    "subscriber_id ": {
      "type": "string"
    },
    "affiliate": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "client_id",
    "show"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: deals.deal_id.posts.format.get
Returns the lists of all the discussion posts for the specified deal.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "json",
        "xml"
      ]
    },
    "client_id": {
      "type": "string"
    },
    "deal_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "client_id",
    "deal_id"
  ]
}
```
### Output Schema
```json
{}
```
