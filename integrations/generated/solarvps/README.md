# @datafire/solarvps
This is the Solar VPS Public API. You can find more at http://www.solarvps.com

## Operation: contacts.get
Shows all contacts under the client account.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: dns.domain.get
Shows all your records for a specific domain. You can try example.com below.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "description": "Domain name you want to get records for"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: dns.domain.add.post
You can try example.com below. Types allowed are: A CNAME NS TXT MX SRV SPF

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "description": "Domain you want to add records for"
    },
    "name": {
      "type": "string",
      "description": "Fully qualified DNS name"
    },
    "type": {
      "type": "string",
      "description": "Type of DNS record"
    },
    "content": {
      "type": "string",
      "description": "Content for DNS record"
    },
    "ttl": {
      "type": "string",
      "description": "Time To Live for DNS record"
    },
    "prio": {
      "type": "string",
      "description": "Priority of DNS record"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain",
    "name",
    "type",
    "content",
    "ttl",
    "prio"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: dns.domain.delete.post
Shows all your records for a specific domain. You can try example.com below.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "description": "Domain name you want to get records for"
    },
    "id": {
      "type": "string",
      "description": "Id of the DNS Record"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: dns.domain.update.post
You can try example.com below.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "description": "Domain name to add record under"
    },
    "id": {
      "type": "string",
      "description": "Id of DNS record"
    },
    "name": {
      "type": "string",
      "description": "Fully qualified name for the DNS record"
    },
    "type": {
      "type": "string",
      "description": "Type for DNS record"
    },
    "content": {
      "type": "string",
      "description": "Content for the DNS Record"
    },
    "ttl": {
      "type": "string",
      "description": "Time To Live for DNS record"
    },
    "prio": {
      "type": "string",
      "description": "Priority of the DNS record"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain",
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: domains.get
Shows all your domains

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: domains.add.post
Adds domain to SolarVPS Distributed DNS

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "description": "Domain to add to SolarVPS Distributed DNS"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: domains.delete.post
Deletes domain from SolarVPS Distributed DNS

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "domain": {
      "type": "string",
      "description": "Domain to delete from SolarVPS Distributed DNS"
    }
  },
  "additionalProperties": false,
  "required": [
    "domain"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: key.generate.get
API Key is regenerated if it already exists

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Email address used to login to SolarSystem"
    },
    "password": {
      "type": "string",
      "description": "Password used to login to SolarSystem"
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
{}
```
## Operation: key.get.get
Gets the API Key for user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Email address used to login to SolarSystem"
    },
    "password": {
      "type": "string",
      "description": "Password used to login to SolarSystem"
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
{}
```
## Operation: pods.get
Shows all your pods

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: pods.podId.get
Shows details of a specific pod. Enter 1 below to see an example

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "podId": {
      "type": "number",
      "description": "Id of the pod you want to perform actions on"
    }
  },
  "additionalProperties": false,
  "required": [
    "podId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: pods.podId.ping.get
Returns the ping response from your server.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "podId": {
      "type": "number",
      "description": "Id of the pod you want to ping check"
    }
  },
  "additionalProperties": false,
  "required": [
    "podId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: pods.podId.action.get
Allowed actions are reboot, shutdown, boot

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "podId": {
      "type": "number",
      "description": "Id of the pod you want to perform actions on"
    },
    "action": {
      "type": "string",
      "description": "Action to perform on selected pod"
    }
  },
  "additionalProperties": false,
  "required": [
    "podId",
    "action"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: solarray.get
Shows all your monitors

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: solarray.critical.get
Shows all your critical notifications

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: tickets.get
Shows all your tickets

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: tickets.department.add.post
Available departments are support, billing, sales

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "department": {
      "type": "string",
      "description": "Department you want to open a ticket with"
    },
    "subject": {
      "type": "string",
      "description": "Subject of the ticket you are opening"
    },
    "contents": {
      "type": "string",
      "description": "Message reply being sent"
    }
  },
  "additionalProperties": false,
  "required": [
    "department",
    "subject",
    "contents"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tickets.ticketId.get
Shows all information of a specific ticketId

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ticketId": {
      "type": "number",
      "description": "TicketId you want to see"
    }
  },
  "additionalProperties": false,
  "required": [
    "ticketId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tickets.ticketid.update.post
Post a reply to a ticket

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ticketid": {
      "type": "number",
      "description": "TicketId of the ticket you want to post an update to"
    },
    "contents": {
      "type": "string",
      "description": "Message reply being sent"
    }
  },
  "additionalProperties": false,
  "required": [
    "ticketid",
    "contents"
  ]
}
```
### Output Schema
```json
{}
```
