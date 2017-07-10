# @datafire/6_dot_authentiqio_appspot


## Operation: key.delete
Revoke an Authentiq ID using email & phone.

If called with `email` and `phone` only, a verification code 
will be sent by email. Do a second call adding `code` to 
complete the revocation.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "primary email associated to Key (ID)"
    },
    "phone": {
      "type": "string",
      "description": "primary phone number, international representation"
    },
    "code": {
      "type": "string",
      "description": "verification code sent by email"
    }
  },
  "additionalProperties": false,
  "required": [
    "email",
    "phone"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "description": "pending or done",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: key.post
Register a new ID `JWT(sub, devtoken)`

v5: `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/AuthentiqID"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "secret": {
      "description": "revoke key",
      "type": "string"
    },
    "status": {
      "description": "registered",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: key.PK.delete
Revoke an Identity (Key) with a revocation secret

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PK": {
      "type": "string",
      "description": "Public Signing Key - Authentiq ID (43 chars)"
    },
    "secret": {
      "type": "string",
      "description": "revokation secret"
    }
  },
  "additionalProperties": false,
  "required": [
    "PK",
    "secret"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "description": "done",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: key.PK.get
Get public details of an Authentiq ID.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PK": {
      "type": "string",
      "description": "Public Signing Key - Authentiq ID (43 chars)"
    }
  },
  "additionalProperties": false,
  "required": [
    "PK"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "since": {
      "format": "date-time",
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "sub": {
      "description": "base64safe encoded public signing key",
      "type": "string"
    }
  },
  "title": "JWT",
  "type": "object"
}
```
## Operation: key.PK.head
HEAD info on Authentiq ID


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PK": {
      "type": "string",
      "description": "Public Signing Key - Authentiq ID (43 chars)"
    }
  },
  "additionalProperties": false,
  "required": [
    "PK"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: key.PK.post
update properties of an Authentiq ID.
(not operational in v4; use PUT for now)

v5: POST issuer-signed email & phone scopes in
a self-signed JWT

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PK": {
      "type": "string",
      "description": "Public Signing Key - Authentiq ID (43 chars)"
    },
    "body": {
      "$ref": "#/definitions/AuthentiqID"
    }
  },
  "additionalProperties": false,
  "required": [
    "PK",
    "body"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "description": "confirmed",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: key.PK.put
Update Authentiq ID by replacing the object.

v4: `JWT(sub,email,phone)` to bind email/phone hash; 

v5: POST issuer-signed email & phone scopes
and PUT to update registration `JWT(sub, pk, devtoken, ...)`

See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "PK": {
      "type": "string",
      "description": "Public Signing Key - Authentiq ID (43 chars)"
    },
    "body": {
      "$ref": "#/definitions/AuthentiqID"
    }
  },
  "additionalProperties": false,
  "required": [
    "PK",
    "body"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "description": "confirmed",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: login.post
push sign-in request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/PushToken"
    },
    "callback": {
      "type": "string",
      "description": "URI App will connect to"
    }
  },
  "additionalProperties": false,
  "required": [
    "body",
    "callback"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "description": "sent",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: scope.post
scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Claims"
    },
    "test": {
      "type": "integer",
      "description": "test only mode, using test issuer"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "job": {
      "description": "20-character ID",
      "type": "string"
    },
    "status": {
      "description": "waiting",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: scope.job.delete
delete a verification job

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "job": {
      "type": "string",
      "description": "Job ID (20 chars)"
    }
  },
  "additionalProperties": false,
  "required": [
    "job"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "description": "done",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: scope.job.get
get the status / current content of a verification job

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "job": {
      "type": "string",
      "description": "Job ID (20 chars)"
    }
  },
  "additionalProperties": false,
  "required": [
    "job"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "exp": {
      "type": "integer"
    },
    "field": {
      "type": "string"
    },
    "sub": {
      "description": "base64safe encoded public signing key",
      "type": "string"
    }
  },
  "title": "JWT",
  "type": "object"
}
```
## Operation: scope.job.head
HEAD to get the status of a verification job

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "job": {
      "type": "string",
      "description": "Job ID (20 chars)"
    }
  },
  "additionalProperties": false,
  "required": [
    "job"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: scope.job.post
this is a scope confirmation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "job": {
      "type": "string",
      "description": "Job ID (20 chars)"
    }
  },
  "additionalProperties": false,
  "required": [
    "job"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "status": {
      "description": "confirmed",
      "type": "string"
    }
  },
  "type": "object"
}
```
## Operation: scope.job.put
authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "job": {
      "type": "string",
      "description": "Job ID (20 chars)"
    }
  },
  "additionalProperties": false,
  "required": [
    "job"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "jwt": {
      "description": "result is JWT or JSON??",
      "type": "string"
    },
    "status": {
      "description": "ready",
      "type": "string"
    }
  },
  "type": "object"
}
```
