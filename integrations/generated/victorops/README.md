# @datafire/victorops
This API allows you to interact with the VictorOps platform in various ways. Your account may be limited
to a total number of API calls per month. Also, some of these API calls have rate limits.

NOTE: In this documentation when creating a sample curl request (clicking the TRY IT OUT! button), in some API
viewing interfaces, the '@' in an email address may be encoded. Please note that the REST endpoints will not
process the encoded version. Make sure that the encoded character '%40' is changed to its unencoded form before
submitting the curl request.


## Operation: api_public.v1.alerts.batch.post
Retrieve the details of multiple alerts that were sent VictorOps by you.

This API may be called a maximum of 6 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "body": {
      "$ref": "#/definitions/CreateBatchAlertRequestPayload"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AlertBatchResponse"
}
```
## Operation: api_public.v1.alerts.uuid.get
Retrieve the details of an alert that was sent VictorOps by you.

This API may be called a maximum of 6 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "uuid": {
      "type": "string",
      "description": "The VictorOps uuid of the alert"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "uuid"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GetAlertResponse"
}
```
## Operation: api_public.v1.incidents.get
Get a list of the currently open, acknowledged and recently resolved incidents.
This API may be called a maximum of 6 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ActiveIncidentList"
}
```
## Operation: api_public.v1.incidents.post
Create a new incident.

This call replicates the function of our
<a href="https://help.victorops.com/knowledge-base/manual-incident-creation/">manual incident creation process</a>
Monitoring tools and custom integrations
should be configured using our
<a href="https://help.victorops.com/knowledge-base/victorops-restendpoint-integration/">REST Endpoint</a>

This API may be called a maximum of 6 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "body": {
      "$ref": "#/definitions/CreateIncidentRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CreatedIncident"
}
```
## Operation: api_public.v1.incidents.ack.patch
The incident(s) must be currently open.  The user supplied must be a valid VictorOps user and a member of your organization.

This API may be called a maximum of 6 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "body": {
      "$ref": "#/definitions/AckOrResolveRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AckOrResolveResponse"
}
```
## Operation: api_public.v1.incidents.byUser.ack.patch
The incident(s) must be currently open.  The user supplied must be a valid VictorOps user and a member of your organization.

This API may be called a maximum of 6 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "body": {
      "$ref": "#/definitions/AckOrResolveByUserRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AckOrResolveResponse"
}
```
## Operation: api_public.v1.incidents.byUser.resolve.patch
The incident(s) must be currently open.  The user supplied must be a valid VictorOps user and a member of your organization.

This API may be called a maximum of 6 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "body": {
      "$ref": "#/definitions/AckOrResolveByUserRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AckOrResolveResponse"
}
```
## Operation: api_public.v1.incidents.resolve.patch
The incident(s) must be currently open.  The user supplied must be a valid VictorOps user and a member of your organization.

This API may be called a maximum of 6 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "body": {
      "$ref": "#/definitions/AckOrResolveRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AckOrResolveResponse"
}
```
## Operation: api_public.v1.team.get
Get a list of teams for your organization.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListTeamResponse"
}
```
## Operation: api_public.v1.team.post
Add a team to your organization.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "body": {
      "$ref": "#/definitions/AddTeamPayload"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AddTeamResponse"
}
```
## Operation: api_public.v1.team.team.delete
Remove a team from your organization.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "team": {
      "type": "string",
      "description": "The VictorOps team to be deleted"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "team"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api_public.v1.team.team.get
Get the information for the specified team.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "team": {
      "type": "string",
      "description": "The VictorOps team to fetch"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "team"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AddTeamResponse"
}
```
## Operation: api_public.v1.team.team.put
Update the designated team

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "team": {
      "type": "string",
      "description": "The VictorOps team to be updated"
    },
    "body": {
      "$ref": "#/definitions/AddTeamPayload"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "team",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AddTeamResponse"
}
```
## Operation: api_public.v1.team.team.members.get
Get the members for the specified team.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "team": {
      "type": "string",
      "description": "The VictorOps team to fetch"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "team"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListTeamMembersResponse"
}
```
## Operation: api_public.v1.team.team.members.post
Add a team member to your team.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "team": {
      "type": "string",
      "description": "The VictorOps team to fetch"
    },
    "body": {
      "$ref": "#/definitions/AddTeamMemberPayload"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "team",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListTeamMembersResponse"
}
```
## Operation: api_public.v1.team.team.members.user.delete
Remove a team from your organization.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "team": {
      "type": "string",
      "description": "The VictorOps team to be deleted"
    },
    "user": {
      "type": "string",
      "description": "The team member username"
    },
    "body": {
      "$ref": "#/definitions/RemoveTeamMemberPayload"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "team",
    "user",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api_public.v1.team.team.oncall.schedule.get
Get the on-call schedule for a user for all teams, including on-call overrides.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "team": {
      "type": "string",
      "description": "The VictorOps team 'slug'"
    },
    "daysForward": {
      "type": "number",
      "description": "Days to include in returned schedule (30 max)",
      "maximum": 30,
      "minimum": 0
    },
    "daysSkip": {
      "type": "number",
      "description": "Days to skip before computing schedule to return (90 max)",
      "maximum": 90,
      "minimum": 0
    },
    "step": {
      "type": "number",
      "description": "Step of escalation policy (3 max)",
      "maximum": 3,
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "team"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OnCallAndOverrides"
}
```
## Operation: api_public.v1.team.team.oncall.user.patch
Replaces a currently on-call user on the team with another.

This API may be called a maximum of 6 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "body": {
      "$ref": "#/definitions/TakeRequest"
    },
    "team": {
      "type": "string",
      "description": "The VictorOps team 'slug'"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "body",
    "team"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/TakeResult"
}
```
## Operation: api_public.v1.user.get
Get a list of users for your organization.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListUserResponse"
}
```
## Operation: api_public.v1.user.post
Add a user to your organization.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "body": {
      "$ref": "#/definitions/AddUserPayload"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AddUserResponse"
}
```
## Operation: api_public.v1.user.user.delete
Remove a user from your organization.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user to be deleted"
    },
    "body": {
      "$ref": "#/definitions/DeleteUserPayload"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: api_public.v1.user.user.get
Get the information for the specified user.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user to fetch"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AddUserResponse"
}
```
## Operation: api_public.v1.user.user.put
Update the designated user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user to be updated"
    },
    "body": {
      "$ref": "#/definitions/AddUserPayload"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AddUserResponse"
}
```
## Operation: api_public.v1.user.user.contact_methods.get
Get the contact methods for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "devices": {
      "items": {
        "$ref": "#/definitions/ContactDevice"
      },
      "type": "array"
    },
    "emails": {
      "items": {
        "$ref": "#/definitions/UserContact"
      },
      "type": "array"
    },
    "phones": {
      "items": {
        "$ref": "#/definitions/UserContact"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: api_public.v1.user.user.contact_methods.devices.get
Get the contact methods for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ContactDevice"
  },
  "type": "array"
}
```
## Operation: api_public.v1.user.user.contact_methods.devices.contactId.delete
Delete a contact device for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    },
    "contactId": {
      "type": "string",
      "description": "The unique contact identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "contactId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContactDevice"
}
```
## Operation: api_public.v1.user.user.contact_methods.devices.contactId.get
Get the indicated contact device for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    },
    "contactId": {
      "type": "string",
      "description": "The unique contact identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "contactId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ContactDevice"
  },
  "type": "array"
}
```
## Operation: api_public.v1.user.user.contact_methods.devices.contactId.put
Update a contact device for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    },
    "contactId": {
      "type": "string",
      "description": "The unique contact identifier"
    },
    "body": {
      "$ref": "#/definitions/ContactDeviceAdd"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "contactId",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContactDevice"
}
```
## Operation: api_public.v1.user.user.contact_methods.emails.get
Get the contact emails for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserContact"
  },
  "type": "array"
}
```
## Operation: api_public.v1.user.user.contact_methods.emails.post
Create a contact email for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    },
    "body": {
      "$ref": "#/definitions/ContactEmailAdd"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserContact"
}
```
## Operation: api_public.v1.user.user.contact_methods.emails.contactId.delete
Delete the indicated contact email for the user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    },
    "contactId": {
      "type": "string",
      "description": "The unique contact identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "contactId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserContact"
}
```
## Operation: api_public.v1.user.user.contact_methods.emails.contactId.get
Get the indicated contact email for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    },
    "contactId": {
      "type": "string",
      "description": "The unique contact identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "contactId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserContact"
  },
  "type": "array"
}
```
## Operation: api_public.v1.user.user.contact_methods.emails.contactId.put
Update the indicated contact email for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    },
    "contactId": {
      "type": "string",
      "description": "The unique contact identifier"
    },
    "body": {
      "$ref": "#/definitions/ContactEmailAdd"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "contactId",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserContact"
}
```
## Operation: api_public.v1.user.user.contact_methods.phones.get
Get the contact phones for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserContact"
  },
  "type": "array"
}
```
## Operation: api_public.v1.user.user.contact_methods.phones.post
Create a contact phone for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    },
    "body": {
      "$ref": "#/definitions/ContactPhoneAdd"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserContact"
}
```
## Operation: api_public.v1.user.user.contact_methods.phones.contactId.delete
Delete the indicated contact phone for the user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    },
    "contactId": {
      "type": "string",
      "description": "The unique contact identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "contactId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserContact"
}
```
## Operation: api_public.v1.user.user.contact_methods.phones.contactId.get
Get the indicated contact phone for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    },
    "contactId": {
      "type": "string",
      "description": "The unique contact identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "contactId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/UserContact"
  },
  "type": "array"
}
```
## Operation: api_public.v1.user.user.contact_methods.phones.contactId.put
Update the indicated contact phone for a user

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    },
    "contactId": {
      "type": "string",
      "description": "The unique contact identifier"
    },
    "body": {
      "$ref": "#/definitions/ContactPhoneAdd"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user",
    "contactId",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserContact"
}
```
## Operation: api_public.v1.user.user.oncall.schedule.get
Get the on-call schedule for a user for all teams, including on-call overrides.

This API may be called a maximum of 15 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "user": {
      "type": "string",
      "description": "The VictorOps user ID"
    },
    "daysForward": {
      "type": "number",
      "description": "Days to include in returned schedule (30 max)",
      "maximum": 30,
      "minimum": 0
    },
    "daysSkip": {
      "type": "number",
      "description": "Days to skip before computing schedule to return (90 max)",
      "maximum": 90,
      "minimum": 0
    },
    "step": {
      "type": "number",
      "description": "Step of escalation policy (3 max)",
      "maximum": 3,
      "minimum": 0
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "user"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/OnCallAndOverrides"
  },
  "type": "array"
}
```
## Operation: api_reporting.v1.incidents.get
Retrieve incident history for your company, searching over date ranges and with filtering options.  This is historical
data, and may be up to 15 minutes behind real-time incident data.  By default, only resolved incidents will be returned.

This API may be called a maximum of once a minute.

Incident requests are paginated with a offset and limit query string parameters.
  The query for incidents is run and offset records are skipped, after which limit records will be returned.

The default offset is 0 and the default limit is 20. The maximum value allowed for limit is 100.

On return, the total number of records available for that query will be returned in the payload as 'total'.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "offset": {
      "type": "number",
      "description": "The offset within the set of matching incidents"
    },
    "limit": {
      "type": "number",
      "description": "The maximum number of matching incidents to return (100 max)",
      "maximum": 100
    },
    "entityId": {
      "type": "string",
      "description": "The entity ID involved  This is the unique identifier for the entity causing the incident."
    },
    "incidentNumber": {
      "type": "string",
      "description": "The incident number as shown in VictorOps Multiple values and ranges are allowed: 4,5,20:50\n"
    },
    "startedAfter": {
      "type": "string",
      "description": "Return incidents started after this timestamp Specify the timestamp in ISO8601 format"
    },
    "startedBefore": {
      "type": "string",
      "description": "Find incidents started before this timestamp  Specify the timestamp in ISO8601 format"
    },
    "host": {
      "type": "string",
      "description": "The host involved in the incident Multiple values can be separated with commas."
    },
    "service": {
      "type": "string",
      "description": "The service involved in the incident (if any) Multiple values can be separated with commas."
    },
    "currentPhase": {
      "type": "string",
      "description": "The current phase of the incident \"resolved\", \"triggered\" or \"acknowledged\". Multiple values can be separated with commas."
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/IncidentList"
  },
  "type": "array"
}
```
## Operation: api_reporting.v1.team.team.oncall.log.get
Returns a log of user shift changes for the specified team. This is historical
data, and may be up to 15 minutes behind real-time log data.

This API may be called a maximum of 6 times per minute.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "team": {
      "type": "string",
      "description": "The VictorOps team 'slug'"
    },
    "start": {
      "type": "string",
      "format": "date-time",
      "description": "Return shift changes occurring after this timestamp. The default is the start of the day at midnight. Specify the timestamp in ISO8601 format"
    },
    "end": {
      "type": "string",
      "format": "date-time",
      "description": "Return shift changes occurring before this timestamp. The default is the end of the day at 11:59:59. Specify the timestamp in ISO8601 format"
    },
    "userName": {
      "type": "string",
      "description": "The VictorOps user ID. Return shift changes occurring during the interval specified for this user. Without this parameter, all relevant users (with respect to the specified interval) are returned"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key",
    "team"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/OnCallLog"
}
```
## Operation: api_reporting.v2.incidents.get
Retrieve incident history for your company, searching over date ranges and with filtering options.

This API may be called a maximum of once a minute.

Incident requests are paginated with a offset and limit query string parameters.
  The query for incidents is run and offset records are skipped, after which limit records will be returned.

The default offset is 0 and the default limit is 20. The maximum value allowed for limit is 100.

On return, the total number of records available for that query will be returned in the payload as 'total'.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "X-VO-Api-Id": {
      "type": "string",
      "description": "Your API ID"
    },
    "X-VO-Api-Key": {
      "type": "string",
      "description": "Your API Key"
    },
    "offset": {
      "type": "number",
      "description": "The offset within the set of matching incidents"
    },
    "limit": {
      "type": "number",
      "description": "The maximum number of matching incidents to return (100 max)",
      "maximum": 100
    },
    "entityId": {
      "type": "string",
      "description": "The entity ID involved  This is the unique identifier for the entity causing the incident."
    },
    "incidentNumber": {
      "type": "string",
      "description": "The incident number as shown in VictorOps Multiple values and ranges are allowed: 4,5,20:50\n"
    },
    "startedAfter": {
      "type": "string",
      "description": "Return incidents started after this timestamp Specify the timestamp in ISO8601 format"
    },
    "startedBefore": {
      "type": "string",
      "description": "Find incidents started before this timestamp  Specify the timestamp in ISO8601 format"
    },
    "host": {
      "type": "string",
      "description": "The host involved in the incident Multiple values can be separated with commas."
    },
    "service": {
      "type": "string",
      "description": "The service involved in the incident (if any) Multiple values can be separated with commas."
    },
    "currentPhase": {
      "type": "string",
      "description": "The current phase of the incident \"resolved\", \"triggered\" or \"acknowledged\". Multiple values can be separated with commas."
    },
    "routingKey": {
      "type": "string",
      "description": "The original routing of the incident"
    }
  },
  "additionalProperties": false,
  "required": [
    "X-VO-Api-Id",
    "X-VO-Api-Key"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ActiveIncidentList"
}
```
