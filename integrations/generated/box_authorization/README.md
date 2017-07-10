# @datafire/box_authorization
The Box Authorization API gives you access to authenticate and authorize an application to work with the Box APIs

## Operation: authorize
The host for this api is account.box.com. This is the URL of the Box login endpoint. To begin the process of authenticating and authorizing an application to work with the Box APIs.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "response_type": {
      "type": "string",
      "enum": [
        "code"
      ]
    },
    "client_id": {
      "type": "string"
    },
    "redirect_uri": {
      "type": "string"
    },
    "state": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "response_type",
    "client_id",
    "redirect_uri",
    "state"
  ]
}
```
### Output Schema
```json
{}
```
