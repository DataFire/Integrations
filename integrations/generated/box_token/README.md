# @datafire/box_token
The Box Token API provides methods to retrieve an access token and revoke an access token. An access token is a data string that enables Box to verify that a request belongs to an authorized session. In the normal order of operations you will being by requesting authentication from the Box.

## Operation: revokeToken
This is the URL of the Box revoke endpoint, the endpoint that revokes access tokens, or to put it another way, the endpoint that ends sessions, logging users out.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string"
    },
    "client_id": {
      "type": "string",
      "description": "The client ID of the application requesting authentication."
    },
    "client_secret": {
      "type": "string",
      "description": "The client secret of the application requesting authentication."
    }
  },
  "additionalProperties": false,
  "required": [
    "token",
    "client_id",
    "client_secret"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: generateAccessToken
This is the URL of the Box token endpoint, the endpoint that returns access tokens. An access token is a data string that enables Box to verify that a request belongs to an authorized session.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "grant_type": {
      "type": "string"
    },
    "code": {
      "type": "string",
      "description": "The authorization code returned by Box in response to a successfull authentication request."
    },
    "client_id": {
      "type": "string",
      "description": "The client ID of the application requesting authentication."
    },
    "client_secret": {
      "type": "string",
      "description": "The client secret of the application requesting authentication."
    },
    "refresh_token": {
      "type": "string",
      "description": "The refresh_token that is used to get the new access_token"
    },
    "subject_token": {
      "type": "string",
      "description": "This is the primary/secondary application token you will exchange for the file token."
    },
    "subject_token_type": {
      "type": "string",
      "description": "The subject token type is urn:ietf:params:oauth:token-type:access_token"
    },
    "resource": {
      "type": "string",
      "description": "Full url path to the file that the token should be generated for example, https://api.box.com/2.0/files/{file_id}"
    },
    "actor_token": {
      "type": "string",
      "description": "Full url path to the file that the token should be generated for example, https://api.box.com/2.0/files/{file_id}"
    },
    "actor_token_type": {
      "type": "string",
      "description": "Full url path to the file that the token should be generated for example, https://api.box.com/2.0/files/{file_id}",
      "enum": [
        "urn:ietf:params:oauth:token-type:id_token"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "grant_type",
    "client_id",
    "client_secret"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AccessToken"
}
```
