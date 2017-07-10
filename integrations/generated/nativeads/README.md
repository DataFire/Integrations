# @datafire/nativeads
This is a Native Ads Publisher API it provides same functionality as Native Ads Publisher Account GUI.


## Operation: auth.default.login.post
Returns Native Ads Publisher API token

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Native Ads Publisher username"
    },
    "password": {
      "type": "string",
      "description": "Native Ads Publisher password"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "password"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/authResponse"
}
```
## Operation: publisher.reports.daily.get
Returns publisher statistics split by date

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "Native Ads Publisher API authentication token"
    },
    "startDate": {
      "type": "string",
      "format": "date",
      "description": "start date in format YYYY-MM-DD"
    },
    "endDate": {
      "type": "string",
      "format": "date",
      "description": "end date in format YYYY-MM-DD"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "maximum number of results per page"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "page number"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "startDate",
    "endDate",
    "limit",
    "page"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/reportsDailyResponse"
}
```
## Operation: publisher.reports.website.get
Returns publisher statistics split by website

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "Native Ads Publisher API authentication token"
    },
    "startDate": {
      "type": "string",
      "format": "date",
      "description": "start date in format YYYY-MM-DD"
    },
    "endDate": {
      "type": "string",
      "format": "date",
      "description": "end date in format YYYY-MM-DD"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "maximum number of results per page"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "page number"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "startDate",
    "endDate",
    "limit",
    "page"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/reportsWebsiteResponse"
}
```
## Operation: publisher.reports.widget.get
Returns publisher statistics split by widget

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "Native Ads Publisher API authentication token"
    },
    "startDate": {
      "type": "string",
      "format": "date",
      "description": "start date in format YYYY-MM-DD"
    },
    "endDate": {
      "type": "string",
      "format": "date",
      "description": "end date in format YYYY-MM-DD"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "maximum number of results per page"
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "page number"
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "startDate",
    "endDate",
    "limit",
    "page"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/reportsWidgetResponse"
}
```
