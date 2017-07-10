# @datafire/posty
The posty_API is the core element of the posty softwarestack. It is developed to administrate a mailserver based on Postfix and Dovecot. It offers an easy REST interface which can be used in own applications or with the posty client applications, posty_CLI and posty_webUI.

## Operation: api.v1.domains.json.get
Returns all available domains

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.json.post
Create new domain

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.json.delete
Delete the specified domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.json.get
Returns the information to the specified domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.json.put
Update the specified domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.aliases.json.get
Returns all aliases for the specified domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.aliases.json.post
Create new domain alias

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.aliases.alias_name.json.delete
Delete the specified domain alias

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    },
    "alias_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name",
    "alias_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.aliases.alias_name.json.get
Returns the information to the specified domain alias

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    },
    "alias_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name",
    "alias_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.aliases.alias_name.json.put
Update the specified domain alias

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    },
    "alias_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name",
    "alias_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.users.json.get
Returns all users for the specified domain

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.users.json.post
Create new user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.users.user_name.json.delete
Delete the specified user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    },
    "user_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name",
    "user_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.users.user_name.json.get
Returns the information to the specified user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    },
    "user_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name",
    "user_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.users.user_name.json.put
Update the specified user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    },
    "user_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name",
    "user_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.users.user_name.aliases.json.get
Returns all aliases for the specified user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    },
    "user_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name",
    "user_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.users.user_name.aliases.json.post
Create new user alias

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    },
    "user_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name",
    "user_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.users.user_name.aliases.alias_name.json.delete
Delete the specified user alias

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    },
    "user_name": {
      "type": "string"
    },
    "alias_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name",
    "user_name",
    "alias_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.users.user_name.aliases.alias_name.json.get
Returns the information to the specified user alias

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    },
    "user_name": {
      "type": "string"
    },
    "alias_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name",
    "user_name",
    "alias_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.domains.domain_name.users.user_name.aliases.alias_name.json.put
Update the specified user alias

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain_name": {
      "type": "string"
    },
    "user_name": {
      "type": "string"
    },
    "alias_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain_name",
    "user_name",
    "alias_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.summary.json.get
Returns a summary of all Resources

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: api.v1.swagger_doc.json.get
Swagger compatible API description

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: api.v1.swagger_doc.name.json.get
Swagger compatible API description for specific API

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Resource name of mounted API"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.transports.json.get
Returns all available transports

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: api.v1.transports.json.post
Create new transport

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: api.v1.transports.transport_name.json.delete
Delete the specified transport

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "transport_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "transport_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.transports.transport_name.json.get
Returns the information to the specified transport

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "transport_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "transport_name"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api.v1.transports.transport_name.json.put
Update the specified transport

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "transport_name": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "transport_name"
  ]
}
```
### Output Schema
```json
{}
```
