# @datafire/winning_email
The Winning Email API allows you to access our services from your applications. Contact us if you need help with anything, or require access to something we don't yet offer. The API overview is available <a href='/api/v1/docs' target='_blank'>here</a>.

## Operation: emailBooster
With our API, you can access the same results available through the Winning Email website, but in a raw, JSON, format, that you can use however you wish in your application. Read more about Email Booster <a href='/email-booster/' target='_blank'>here</a>.<br><br><strong>Input Parameters</strong><br>If <strong>source</strong> provided, then all other inputs are ignored. Otherwise, <strong>subject</strong> AND one or both of <strong>html</strong> and <strong>text</strong> are required.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "subject": {
      "type": "string",
      "description": "email subject"
    },
    "html": {
      "type": "string",
      "description": "html body"
    },
    "text": {
      "type": "string",
      "description": "plain text body"
    },
    "source": {
      "type": "string",
      "description": "raw source"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "properties": {
    "message": {
      "type": "string"
    },
    "report": {
      "$ref": "#/definitions/Report"
    },
    "status": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: rateLimitStatus
Check how many API queries you've used, and what your limit is.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "message": {
      "type": "string"
    },
    "services": {
      "items": {
        "$ref": "#/definitions/Service"
      },
      "type": "array"
    },
    "status": {
      "type": "integer"
    }
  },
  "type": "object"
}
```
## Operation: status
Check the status of the Winning Email API.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "message": {
      "type": "string"
    },
    "status": {
      "type": "integer"
    },
    "uptime": {
      "format": "double",
      "type": "number"
    }
  },
  "type": "object"
}
```
