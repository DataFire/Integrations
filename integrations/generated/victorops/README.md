# @datafire/victorops

Client library for VictorOps

## Installation and Usage
```bash
npm install --save datafire @datafire/victorops
```

```js
let datafire = require('datafire');
let victorops = require('@datafire/victorops').create();

victorops.api_public.v1.alerts.uuid.get({}).then(data => {
  console.log(data);
})
```

## Description
This API allows you to interact with the VictorOps platform in various ways. Your account may be limited
to a total number of API calls per month. Also, some of these API calls have rate limits.

NOTE: In this documentation when creating a sample curl request (clicking the TRY IT OUT! button), in some API
viewing interfaces, the '@' in an email address may be encoded. Please note that the REST endpoints will not
process the encoded version. Make sure that the encoded character '%40' is changed to its unencoded form before
submitting the curl request.


## Actions
### api_public.v1.alerts.uuid.get
Retrieve the details of an alert that was sent VictorOps by you.

This API may be called a maximum of 6 times per minute.



```js
victorops.api_public.v1.alerts.uuid.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "uuid": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* uuid (string) **required** - The VictorOps uuid of the alert

### api_public.v1.incidents.get
Get a list of the currently open, acknowledged and recently resolved incidents.
This API may be called a maximum of 6 times per minute.



```js
victorops.api_public.v1.incidents.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key

### api_public.v1.incidents.post
Create a new incident.

This call replicates the function of our
<a href="https://help.victorops.com/knowledge-base/manual-incident-creation/">manual incident creation process</a>.
Monitoring tools and custom integrations
should be configured using our
<a href="https://help.victorops.com/knowledge-base/victorops-restendpoint-integration/">REST Endpoint</a>.

This API may be called a maximum of 6 times per minute.



```js
victorops.api_public.v1.incidents.post({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "body": {
    "summary": "",
    "details": "",
    "userName": "",
    "targets": []
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* body (object) **required**

### api_public.v1.incidents.ack.patch
The incident(s) must be currently open.  The user supplied must be a valid VictorOps user and a member of your organization.

This API may be called a maximum of 6 times per minute.



```js
victorops.api_public.v1.incidents.ack.patch({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "body": {
    "userName": "",
    "incidentNames": []
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* body (object) **required**

### api_public.v1.incidents.byUser.ack.patch
The incident(s) must be currently open.  The user supplied must be a valid VictorOps user and a member of your organization.

This API may be called a maximum of 6 times per minute.



```js
victorops.api_public.v1.incidents.byUser.ack.patch({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "body": {
    "userName": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* body (object) **required**

### api_public.v1.incidents.byUser.resolve.patch
The incident(s) must be currently open.  The user supplied must be a valid VictorOps user and a member of your organization.

This API may be called a maximum of 6 times per minute.



```js
victorops.api_public.v1.incidents.byUser.resolve.patch({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "body": {
    "userName": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* body (object) **required**

### api_public.v1.incidents.resolve.patch
The incident(s) must be currently open.  The user supplied must be a valid VictorOps user and a member of your organization.

This API may be called a maximum of 6 times per minute.



```js
victorops.api_public.v1.incidents.resolve.patch({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "body": {
    "userName": "",
    "incidentNames": []
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* body (object) **required**

### api_public.v1.org.routing_keys.get
Retrieves a list of routing keys and associated teams.
This API may be called a maximum of once a minute.


```js
victorops.api_public.v1.org.routing_keys.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key

### api_public.v1.team.get
Get a list of teams for your organization.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.team.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key

### api_public.v1.team.post
Add a team to your organization.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.team.post({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* body (object) **required** - The team information

### api_public.v1.team.team.delete
Remove a team from your organization.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.team.team.delete({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "team": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* team (string) **required** - The VictorOps team to be deleted

### api_public.v1.team.team.get
Get the information for the specified team.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.team.team.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "team": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* team (string) **required** - The VictorOps team to fetch

### api_public.v1.team.team.put
Update the designated team

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.team.team.put({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "team": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* team (string) **required** - The VictorOps team to be updated
* body (object) **required** - The team information

### api_public.v1.team.team.members.get
Get the members for the specified team.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.team.team.members.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "team": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* team (string) **required** - The VictorOps team to fetch

### api_public.v1.team.team.members.post
Add a team member to your team.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.team.team.members.post({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "team": "",
  "body": {
    "username": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* team (string) **required** - The VictorOps team to fetch
* body (object) **required** - The user information

### api_public.v1.team.team.members.user.delete
Remove a team from your organization.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.team.team.members.user.delete({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "team": "",
  "user": "",
  "body": {
    "replacement": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* team (string) **required** - The VictorOps team to be deleted
* user (string) **required** - The team member username
* body (object) **required** - The user information

### api_public.v1.team.team.oncall.schedule.get
Get the on-call schedule for a user for all teams, including on-call overrides.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.team.team.oncall.schedule.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "team": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* team (string) **required** - The VictorOps team 'slug'
* daysForward (number) - Days to include in returned schedule (30 max)
* daysSkip (number) - Days to skip before computing schedule to return (90 max)
* step (number) - Step of escalation policy (3 max)

### api_public.v1.team.team.oncall.user.patch
Replaces a currently on-call user on the team with another.

This API may be called a maximum of 6 times per minute.



```js
victorops.api_public.v1.team.team.oncall.user.patch({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "body": {
    "fromUser": "",
    "toUser": ""
  },
  "team": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* body (object) **required**
* team (string) **required** - The VictorOps team 'slug'

### api_public.v1.user.get
Get a list of users for your organization.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key

### api_public.v1.user.post
Add a user to your organization.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.post({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "body": {
    "firstName": "",
    "lastName": "",
    "username": "",
    "email": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* body (object) **required** - The user information

### api_public.v1.user.user.delete
Remove a user from your organization.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.delete({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "body": {
    "replacement": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user to be deleted
* body (object) **required** - The information about what to do with the deleted user

### api_public.v1.user.user.get
Get the information for the specified user.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user to fetch

### api_public.v1.user.user.put
Update the designated user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.put({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "body": {
    "firstName": "",
    "lastName": "",
    "username": "",
    "email": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user to be updated
* body (object) **required** - The user information

### api_public.v1.user.user.contact_methods.get
Get the contact methods for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID

### api_public.v1.user.user.contact_methods.devices.get
Get the contact methods for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.devices.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID

### api_public.v1.user.user.contact_methods.devices.contactId.delete
Delete a contact device for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.devices.contactId.delete({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "contactId": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID
* contactId (string) **required** - The unique contact identifier

### api_public.v1.user.user.contact_methods.devices.contactId.get
Get the indicated contact device for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.devices.contactId.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "contactId": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID
* contactId (string) **required** - The unique contact identifier

### api_public.v1.user.user.contact_methods.devices.contactId.put
Update a contact device for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.devices.contactId.put({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "contactId": "",
  "body": {}
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID
* contactId (string) **required** - The unique contact identifier
* body (object) **required** - The contact device

### api_public.v1.user.user.contact_methods.emails.get
Get the contact emails for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.emails.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID

### api_public.v1.user.user.contact_methods.emails.post
Create a contact email for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.emails.post({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "body": {
    "label": "",
    "email": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID
* body (object) **required** - The contact email

### api_public.v1.user.user.contact_methods.emails.contactId.delete
Delete the indicated contact email for the user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.emails.contactId.delete({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "contactId": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID
* contactId (string) **required** - The unique contact identifier

### api_public.v1.user.user.contact_methods.emails.contactId.get
Get the indicated contact email for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.emails.contactId.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "contactId": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID
* contactId (string) **required** - The unique contact identifier

### api_public.v1.user.user.contact_methods.emails.contactId.put
Update the indicated contact email for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.emails.contactId.put({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "contactId": "",
  "body": {
    "label": "",
    "email": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID
* contactId (string) **required** - The unique contact identifier
* body (object) **required** - The contact email

### api_public.v1.user.user.contact_methods.phones.get
Get the contact phones for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.phones.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID

### api_public.v1.user.user.contact_methods.phones.post
Create a contact phone for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.phones.post({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "body": {
    "label": "",
    "phone": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID
* body (object) **required** - The contact phone

### api_public.v1.user.user.contact_methods.phones.contactId.delete
Delete the indicated contact phone for the user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.phones.contactId.delete({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "contactId": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID
* contactId (string) **required** - The unique contact identifier

### api_public.v1.user.user.contact_methods.phones.contactId.get
Get the indicated contact phone for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.phones.contactId.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "contactId": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID
* contactId (string) **required** - The unique contact identifier

### api_public.v1.user.user.contact_methods.phones.contactId.put
Update the indicated contact phone for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.contact_methods.phones.contactId.put({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": "",
  "contactId": "",
  "body": {
    "label": "",
    "phone": ""
  }
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID
* contactId (string) **required** - The unique contact identifier
* body (object) **required** - The contact phone

### api_public.v1.user.user.oncall.schedule.get
Get the on-call schedule for a user for all teams, including on-call overrides.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.oncall.schedule.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID
* daysForward (number) - Days to include in returned schedule (30 max)
* daysSkip (number) - Days to skip before computing schedule to return (90 max)
* step (number) - Step of escalation policy (3 max)

### api_public.v1.user.user.policies.get
Get paging policies for a user

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.user.policies.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "user": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* user (string) **required** - The VictorOps user ID

### api_reporting.v1.incidents.get
Retrieve incident history for your company, searching over date ranges and with filtering options.  This is historical
data, and may be up to 15 minutes behind real-time incident data.  By default, only resolved incidents will be returned.

This API may be called a maximum of once a minute.

Incident requests are paginated with a offset and limit query string parameters.
  The query for incidents is run and offset records are skipped, after which limit records will be returned.

The default offset is 0 and the default limit is 20. The maximum value allowed for limit is 100.

On return, the total number of records available for that query will be returned in the payload as 'total'.



```js
victorops.api_reporting.v1.incidents.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* offset (number) - The offset within the set of matching incidents
* limit (number) - The maximum number of matching incidents to return (100 max)
* entityId (string) - The entity ID involved  This is the unique identifier for the entity causing the incident.
* incidentNumber (string) - The incident number as shown in VictorOps Multiple values and ranges are allowed: 4,5,20:50
* startedAfter (string) - Return incidents started after this timestamp Specify the timestamp in ISO8601 format
* startedBefore (string) - Find incidents started before this timestamp  Specify the timestamp in ISO8601 format
* host (string) - The host involved in the incident Multiple values can be separated with commas.
* service (string) - The service involved in the incident (if any) Multiple values can be separated with commas.
* currentPhase (string) - The current phase of the incident "resolved", "triggered" or "acknowledged". Multiple values can be separated with commas.

### api_reporting.v1.team.team.oncall.log.get
Returns a log of user shift changes for the specified team. This is historical
data, and may be up to 15 minutes behind real-time log data.

This API may be called a maximum of 6 times per minute.



```js
victorops.api_reporting.v1.team.team.oncall.log.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "team": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* team (string) **required** - The VictorOps team 'slug'
* start (string) - Return shift changes occurring after this timestamp. The default is the start of the day at midnight. Specify the timestamp in ISO8601 format
* end (string) - Return shift changes occurring before this timestamp. The default is the end of the day at 11:59:59. Specify the timestamp in ISO8601 format
* userName (string) - The VictorOps user ID. Return shift changes occurring during the interval specified for this user. Without this parameter, all relevant users (with respect to the specified interval) are returned

### api_reporting.v2.incidents.get
Retrieve incident history for your company, searching over date ranges and with filtering options.

This API may be called a maximum of once a minute.

Incident requests are paginated with a offset and limit query string parameters.
  The query for incidents is run and offset records are skipped, after which limit records will be returned.

The default offset is 0 and the default limit is 20. The maximum value allowed for limit is 100.

Unless specified otherwise with the parameter currentPhase, the response will only contain resolved incidents.

On return, the total number of records available for that query will be returned in the payload as 'total'.



```js
victorops.api_reporting.v2.incidents.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": ""
}, context)
```

#### Parameters
* X-VO-Api-Id (string) **required** - Your API ID
* X-VO-Api-Key (string) **required** - Your API Key
* offset (number) - The offset within the set of matching incidents
* limit (number) - The maximum number of matching incidents to return (100 max)
* entityId (string) - The entity ID involved  This is the unique identifier for the entity causing the incident.
* incidentNumber (string) - The incident number as shown in VictorOps Multiple values and ranges are allowed: 4,5,20:50
* startedAfter (string) - Return incidents started after this timestamp Specify the timestamp in ISO8601 format
* startedBefore (string) - Find incidents started before this timestamp  Specify the timestamp in ISO8601 format
* host (string) - The host involved in the incident Multiple values can be separated with commas.
* service (string) - The service involved in the incident (if any) Multiple values can be separated with commas.
* currentPhase (string) - The current phase of the incident "resolved", "triggered" or "acknowledged". Multiple values can be separated with commas. By default, response contains only "resolved" incidents
* routingKey (string) - The original routing of the incident

