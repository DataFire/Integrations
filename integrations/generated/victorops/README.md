# @datafire/victorops

Client library for VictorOps

## Installation and Usage
```bash
npm install --save @datafire/victorops
```
```js
let victorops = require('@datafire/victorops').create();

victorops.api_public.v1.alerts.uuid.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": "",
  "uuid": ""
}).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * uuid **required** `string`: The VictorOps uuid of the alert

#### Output
* output [GetAlertResponse](#getalertresponse)

### api_public.v1.incidents.get
Get a list of the currently open, acknowledged and recently resolved incidents.
This API may be called a maximum of 6 times per minute.



```js
victorops.api_public.v1.incidents.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": ""
}, context)
```

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key

#### Output
* output [ActiveIncidentList](#activeincidentlist)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * body **required** [CreateIncidentRequest](#createincidentrequest)

#### Output
* output [CreatedIncident](#createdincident)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * body **required** [AckOrResolveRequest](#ackorresolverequest)

#### Output
* output [AckOrResolveResponse](#ackorresolveresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * body **required** [AckOrResolveByUserRequest](#ackorresolvebyuserrequest)

#### Output
* output [AckOrResolveResponse](#ackorresolveresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * body **required** [AckOrResolveByUserRequest](#ackorresolvebyuserrequest)

#### Output
* output [AckOrResolveResponse](#ackorresolveresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * body **required** [AckOrResolveRequest](#ackorresolverequest)

#### Output
* output [AckOrResolveResponse](#ackorresolveresponse)

### api_public.v1.org.routing_keys.get
Retrieves a list of routing keys and associated teams.
This API may be called a maximum of once a minute.


```js
victorops.api_public.v1.org.routing_keys.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": ""
}, context)
```

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key

#### Output
* output [ListRoutingKeysResponse](#listroutingkeysresponse)

### api_public.v1.team.get
Get a list of teams for your organization.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.team.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": ""
}, context)
```

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key

#### Output
* output [ListTeamResponse](#listteamresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * body **required** [AddTeamPayload](#addteampayload)

#### Output
* output [AddTeamResponse](#addteamresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * team **required** `string`: The VictorOps team to be deleted

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * team **required** `string`: The VictorOps team to fetch

#### Output
* output [AddTeamResponse](#addteamresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * team **required** `string`: The VictorOps team to be updated
  * body **required** [AddTeamPayload](#addteampayload)

#### Output
* output [AddTeamResponse](#addteamresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * team **required** `string`: The VictorOps team to fetch

#### Output
* output [ListTeamMembersResponse](#listteammembersresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * team **required** `string`: The VictorOps team to fetch
  * body **required** [AddTeamMemberPayload](#addteammemberpayload)

#### Output
* output [ListTeamMembersResponse](#listteammembersresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * team **required** `string`: The VictorOps team to be deleted
  * user **required** `string`: The team member username
  * body **required** [RemoveTeamMemberPayload](#removeteammemberpayload)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * team **required** `string`: The VictorOps team 'slug'
  * daysForward `number`: Days to include in returned schedule (30 max)
  * daysSkip `number`: Days to skip before computing schedule to return (90 max)
  * step `number`: Step of escalation policy (3 max)

#### Output
* output [OnCallAndOverrides](#oncallandoverrides)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * body **required** [TakeRequest](#takerequest)
  * team **required** `string`: The VictorOps team 'slug'

#### Output
* output [TakeResult](#takeresult)

### api_public.v1.user.get
Get a list of users for your organization.

This API may be called a maximum of 15 times per minute.



```js
victorops.api_public.v1.user.get({
  "X-VO-Api-Id": "",
  "X-VO-Api-Key": ""
}, context)
```

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key

#### Output
* output [ListUserResponse](#listuserresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * body **required** [AddUserPayload](#adduserpayload)

#### Output
* output [AddUserResponse](#adduserresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user to be deleted
  * body **required** [DeleteUserPayload](#deleteuserpayload)

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user to fetch

#### Output
* output [AddUserResponse](#adduserresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user to be updated
  * body **required** [AddUserPayload](#adduserpayload)

#### Output
* output [AddUserResponse](#adduserresponse)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID

#### Output
* output `object`
  * devices `array`
    * items [ContactDevice](#contactdevice)
  * emails `array`
    * items [UserContact](#usercontact)
  * phones `array`
    * items [UserContact](#usercontact)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID

#### Output
* output `array`
  * items [ContactDevice](#contactdevice)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID
  * contactId **required** `string`: The unique contact identifier

#### Output
* output [ContactDevice](#contactdevice)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID
  * contactId **required** `string`: The unique contact identifier

#### Output
* output `array`
  * items [ContactDevice](#contactdevice)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID
  * contactId **required** `string`: The unique contact identifier
  * body **required** [ContactDeviceAdd](#contactdeviceadd)

#### Output
* output [ContactDevice](#contactdevice)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID

#### Output
* output `array`
  * items [UserContact](#usercontact)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID
  * body **required** [ContactEmailAdd](#contactemailadd)

#### Output
* output [UserContact](#usercontact)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID
  * contactId **required** `string`: The unique contact identifier

#### Output
* output [UserContact](#usercontact)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID
  * contactId **required** `string`: The unique contact identifier

#### Output
* output `array`
  * items [UserContact](#usercontact)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID
  * contactId **required** `string`: The unique contact identifier
  * body **required** [ContactEmailAdd](#contactemailadd)

#### Output
* output [UserContact](#usercontact)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID

#### Output
* output `array`
  * items [UserContact](#usercontact)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID
  * body **required** [ContactPhoneAdd](#contactphoneadd)

#### Output
* output [UserContact](#usercontact)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID
  * contactId **required** `string`: The unique contact identifier

#### Output
* output [UserContact](#usercontact)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID
  * contactId **required** `string`: The unique contact identifier

#### Output
* output `array`
  * items [UserContact](#usercontact)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID
  * contactId **required** `string`: The unique contact identifier
  * body **required** [ContactPhoneAdd](#contactphoneadd)

#### Output
* output [UserContact](#usercontact)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID
  * daysForward `number`: Days to include in returned schedule (30 max)
  * daysSkip `number`: Days to skip before computing schedule to return (90 max)
  * step `number`: Step of escalation policy (3 max)

#### Output
* output `array`
  * items [OnCallAndOverrides](#oncallandoverrides)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * user **required** `string`: The VictorOps user ID

#### Output
* output [Policies](#policies)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * offset `number`: The offset within the set of matching incidents
  * limit `number`: The maximum number of matching incidents to return (100 max)
  * entityId `string`: The entity ID involved  This is the unique identifier for the entity causing the incident.
  * incidentNumber `string`: The incident number as shown in VictorOps Multiple values and ranges are allowed: 4,5,20:50
  * startedAfter `string`: Return incidents started after this timestamp Specify the timestamp in ISO8601 format
  * startedBefore `string`: Find incidents started before this timestamp  Specify the timestamp in ISO8601 format
  * host `string`: The host involved in the incident Multiple values can be separated with commas.
  * service `string`: The service involved in the incident (if any) Multiple values can be separated with commas.
  * currentPhase `string`: The current phase of the incident "resolved", "triggered" or "acknowledged". Multiple values can be separated with commas.

#### Output
* output `array`
  * items [IncidentList](#incidentlist)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * team **required** `string`: The VictorOps team 'slug'
  * start `string`: Return shift changes occurring after this timestamp. The default is the start of the day at midnight. Specify the timestamp in ISO8601 format
  * end `string`: Return shift changes occurring before this timestamp. The default is the end of the day at 11:59:59. Specify the timestamp in ISO8601 format
  * userName `string`: The VictorOps user ID. Return shift changes occurring during the interval specified for this user. Without this parameter, all relevant users (with respect to the specified interval) are returned

#### Output
* output [OnCallLog](#oncalllog)

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

#### Input
* input `object`
  * X-VO-Api-Id **required** `string`: Your API ID
  * X-VO-Api-Key **required** `string`: Your API Key
  * offset `number`: The offset within the set of matching incidents
  * limit `number`: The maximum number of matching incidents to return (100 max)
  * entityId `string`: The entity ID involved  This is the unique identifier for the entity causing the incident.
  * incidentNumber `string`: The incident number as shown in VictorOps Multiple values and ranges are allowed: 4,5,20:50
  * startedAfter `string`: Return incidents started after this timestamp Specify the timestamp in ISO8601 format
  * startedBefore `string`: Find incidents started before this timestamp  Specify the timestamp in ISO8601 format
  * host `string`: The host involved in the incident Multiple values can be separated with commas.
  * service `string`: The service involved in the incident (if any) Multiple values can be separated with commas.
  * currentPhase `string`: The current phase of the incident "resolved", "triggered" or "acknowledged". Multiple values can be separated with commas. By default, response contains only "resolved" incidents
  * routingKey `string`: The original routing of the incident

#### Output
* output [ActiveIncidentList](#activeincidentlist)



## Definitions

### AckOrResolveByUserRequest
* AckOrResolveByUserRequest `object`
  * message `string`
  * userName **required** `string`

### AckOrResolveRequest
* AckOrResolveRequest `object`
  * incidentNames **required** `array`
    * items `string`
  * message `string`
  * userName **required** `string`

### AckOrResolveResponse
* AckOrResolveResponse `object`: The results of ack/resolve for each incident
  * results `array`
    * items [AckOrResolveResult](#ackorresolveresult)

### AckOrResolveResult
* AckOrResolveResult `object`: The results of ack/resolve for a individual incident
  * cmdAccepted `boolean`
  * entityId `string`
  * incidentNumber `string`
  * message `string`

### AckUser
* AckUser `object`: A JSON object with first/last name and email of the user that acknowledged the incident.
  * email `string`
  * first `string`
  * last `string`

### ActiveIncidentInfo
* ActiveIncidentInfo `object`: Incidents contain the following fields (all should be considered optional)
  * alertCount `number`: The number of alerts received for this incident
  * currentPhase `string`: The current phase of the incident "resolved", "triggered" or "acknowledged".
  * entityId `string`: The unique identification of the entity being monitored that caused the incident
  * host `string`: The host on which the incident occurred
  * incidentNumber `string`: The VictorOps incident number
  * lastAlertId `string`: The unique id of the last alert for the incident
  * lastAlertTime `string`: The time of the last alert received for the incident
  * pagedTeams `array`: The teams that were paged for the incident
    * items `string`
  * pagedUsers `array`: The users that were paged for the incident.
    * items `string`
  * service `string`: The service name causing the incident (if any)
  * startTime `string`: The time the incident started
  * transitions `array`: Transitions of the incident state over time
    * items [IncidentTransition](#incidenttransition)

### ActiveIncidentList
* ActiveIncidentList `object`: The list of incidents in various states
  * incidents `array`: The incident data
    * items [ActiveIncidentInfo](#activeincidentinfo)

### AddTeamMemberPayload
* AddTeamMemberPayload `object`: The user information
  * username **required** `string`

### AddTeamPayload
* AddTeamPayload `object`: The team information
  * name **required** `string`

### AddTeamResponse
* AddTeamResponse `object`: Some info about the team
  * _membersUrl `string`
  * _selfUrl `string`
  * isDefaultTeam `boolean`
  * memberCount `number`
  * name `string`
  * slug `string`
  * version `number`

### AddUserPayload
* AddUserPayload `object`: The user information
  * admin `boolean`
  * email **required** `string`
  * expirationHours `number`: The validity duration for the invitatation/set password link sent to the added user.
  * firstName **required** `string`
  * lastName **required** `string`
  * username **required** `string`

### AddUserResponse
* AddUserResponse [V1User](#v1user)

### AlertBatchResponse
* AlertBatchResponse `object`: A collection of requested alerts
  * alerts `array`
    * items [GetAlertResponse](#getalertresponse)
  * requestId `string`
  * requestSize `integer`
  * responseSize `integer`

### AlertId
* AlertId `string`

### AlertRequest
* AlertRequest `object`
  * alertId **required** `string`

### AllOnCall
* AllOnCall `object`
  * teams `array`
    * items [AllOnCallTeamsResource](#alloncallteamsresource)
  * username `string`

### AllOnCallTeamsResource
* AllOnCallTeamsResource `object`
  * escalation_policy `array`
    * items [OnCallEscalationPolicyResource](#oncallescalationpolicyresource)
  * name `string`: Team name
  * slug `string`: Team slug

### ContactDevice
* ContactDevice `object`
  * _selfUrl `string`
  * deviceType `string`
  * extId `string`
  * label `string`

### ContactDeviceAdd
* ContactDeviceAdd `object`: The contact device
  * chat_escalation_sound `string`
  * device_label `string`
  * escalation_notification_sound `string`
  * resolved_notification_sound `string`

### ContactEmailAdd
* ContactEmailAdd `object`: The contact email
  * email **required** `string`
  * label **required** `string`
  * rank `integer`

### ContactPhoneAdd
* ContactPhoneAdd `object`: The contact phone
  * label **required** `string`
  * phone **required** `string`
  * rank `integer`

### CreateBatchAlertRequestPayload
* CreateBatchAlertRequestPayload `object`: A collection of IDs (uuid) for the alerts to be returned
  * alertIds `array`
    * items [AlertId](#alertid)

### CreateIncidentRequest
* CreateIncidentRequest `object`
  * details **required** `string`
  * summary **required** `string`
  * targets **required** `array`
    * items [IncidentTarget](#incidenttarget)
  * userName **required** `string`

### CreatedIncident
* CreatedIncident `object`
  * error `string`: An error message
  * incidentNumber `string`: The VictorOps incident number

### DeleteUserPayload
* DeleteUserPayload `object`: The information about what to do with the deleted user
  * replacement **required** `string`: The user to take the place of the deleted user in escalations

### GetAlertResponse
* GetAlertResponse `object`: Alert details. All fields should be considered optional.
  * ackAuthor `string`: The user that acknowledged the incident.
  * ackMsg `string`: A user entered comment for the acknowledgment.
  * entityDisplayName `string`: Used within VictorOps to display a human-readable name for the entity.
  * entityId `string`: Identifies the entity (host, service, etc.) this alert was about.
  * messageType `string`: The type of alert; INFO, WARNING, ACKNOWLEDGEMENT, CRITICAL, RECOVERY
  * monitoringTool `string`: The name of the monitoring system software (eg. nagios, icinga, sensu, etc.)
  * raw `string`: The full, raw alert details JSON string (i.e. parse the string into a JSON object)
  * stateMessage `string`: Any additional status information from the alert item.
  * stateStartTime `number`: The time this entity entered its current state (seconds since epoch).
  * timestamp `number`: Timestamp of the alert in seconds since epoch.

### IncidentInfo
* IncidentInfo `object`: Incidents contain the following fields (all should be considered optional)
  * ackTime `string`: The time of the last acknowledgment of the incident
  * ackUser [AckUser](#ackuser)
  * ackUserId `string`: The VictorOps user id of the user that acknowledged the incident
  * alertCount `number`: The number of alerts received for this incident
  * currentPhase `string`: The current phase of the incident "resolved", "triggered" or "acknowledged".
  * endTime `string`: The time the incident ended
  * entityDispName `string`: The display name of the entity causing the incident
  * entityId `string`: The unique identification of the entity being monitored that caused the incident
  * entityType `string`: The type of entity causing the incident (host/service)
  * host `string`: The host on which the incident occurred
  * incidentNumber `string`: The VictorOps incident number
  * lastAlertID `string`: The unique id of the last alert for the incident
  * lastAlertTime `string`: The time of the last alert received for the incident
  * service `string`: The service name causing the incident (if any)
  * startTime `string`: The time the incident started
  * teams `string`: The teams that were paged for the incident (comma separated).

### IncidentList
* IncidentList `object`: The results of an incident history request
  * incidents `array`: An array of incident objects matching the search
    * items [IncidentInfo](#incidentinfo)
  * limit `number`: The limit value passed in the request
  * offset `number`: The offset passed in the request
  * total `number`: The total number of incidents available for this search

### IncidentTarget
* IncidentTarget `object`
  * slug **required** `string`: User name or escalation policy slug
  * type **required** `string` (values: User, EscalationPolicy): Type of target

### IncidentTransition
* IncidentTransition `object`: A transition of incident state
  * alertId `string`: The unique alert ID that caused the transition
  * alertUrl `string`: A URL to retrieve the details of the alert that caused the transition
  * at `string`: The time of the transition
  * by `string`: The user that caused the transition (if any)
  * manually `boolean`: If the incident transition was caused by a person
  * message `string`: The message entered by that user (if any)
  * name `string`: The transition name

### ListRoutingKeysResponse
* ListRoutingKeysResponse `object`: Info about routing keys in the org
  * _selfUrl `string`
  * routingKeys `array`
    * items [RoutingKeyInfo](#routingkeyinfo)

### ListTeamMembersResponse
* ListTeamMembersResponse `object`: A list of members for the team
  * _selfUrl `string`
  * _teamUrl `string`
  * members `array`
    * items [TeamMember](#teammember)

### ListTeamResponse
* ListTeamResponse `array`: Some info about teams in the org
  * items `object`
    * _membersUrl `string`
    * _selfUrl `string`
    * isDefaultTeam `boolean`
    * memberCount `number`
    * name `string`
    * slug `string`
    * version `number`

### ListUserResponse
* ListUserResponse `object`: Some info about the user
  * _selfUrl `string`
  * users `array`
    * items [V1User](#v1user)

### OnCallAndOverrides
* OnCallAndOverrides `object`
  * overrides `array`
    * items [TeamScheduleOverlayResource](#teamscheduleoverlayresource)
  * schedule `array`
    * items [TeamScheduleResource](#teamscheduleresource)
  * team `string`

### OnCallEscalationPolicyResource
* OnCallEscalationPolicyResource `object`
  * id `integer`: Team ID
  * name `string`: Team name
  * slug `string`: Team slug

### OnCallInterval
* OnCallInterval `object`
  * duration `object`
    * hours `number`
    * minutes `number`
  * off `string`
  * on `string`

### OnCallLog
* OnCallLog `object`
  * end `string`
  * start `string`
  * teamSlug `string`
  * userLogs `array`
    * items [UserLog](#userlog)

### PagingPolicy
* PagingPolicy `object`: Paging policy fields
  * contactType `string`
  * extId `string`
  * order `integer`
  * timeout `integer`

### Policies
* Policies `object`: Paging policies accociated which this user
  * policies `array`
    * items [PagingPolicy](#pagingpolicy)
  * userId `integer`
  * username `string`

### RelLink
* RelLink `object`
  * href `string`
  * rel `string`

### RemoveTeamMemberPayload
* RemoveTeamMemberPayload `object`: The user information
  * replacement **required** `string`

### RoutingKeyInfo
* RoutingKeyInfo `object`: Routing keys contain the following fields
  * isDefault `boolean`
  * routingKey `string`
  * targets `array`
    * items [RoutingKeyTarget](#routingkeytarget)

### RoutingKeyTarget
* RoutingKeyTarget `object`: Routing key target
  * _teamUrl `string`
  * policyName `string`
  * policySlug `string`

### TakeRequest
* TakeRequest `object`
  * fromUser **required** `string`
  * toUser **required** `string`

### TakeResult
* TakeResult `object`
  * result `string`

### TeamMember
* TeamMember `object`: Some info about the user
  * firstName `string`
  * lastName `string`
  * username `string`
  * verified `string`: Whether or not this user has set their password (will always be false)
  * version `number`

### TeamScheduleOverlayResource
* TeamScheduleOverlayResource `object`
  * end `number`: The time the override is scheduled to end
  * orig `string`: The user scheduled on call (if any)
  * over `string`: The user overriding the scheduled on call user (if any)
  * start `number`: The time the override is scheduled to start

### TeamScheduleResource
* TeamScheduleResource `object`
  * oncall `string`: The user scheduled on call (if any)
  * overrideoncall `string`: The user overriding the scheduled on call user (if any)
  * policyType **required** `string`
  * rolls **required** `array`
    * items [TeamScheduleRollResource](#teamschedulerollresource)
  * rotationName `string`
  * shiftName `string`
  * shiftRoll `number`

### TeamScheduleRollResource
* TeamScheduleRollResource `object`
  * change **required** `number`: The time the period is scheduled to start
  * isRoll **required** `boolean`
  * oncall `string`: The user scheduled on call (if any)
  * until **required** `number`: The time the period is scheduled to end

### UserContact
* UserContact `object`
  * _selfUrl `string`
  * deviceType `string`
  * extId `string`
  * label `string`

### UserLog
* UserLog `object`
  * adjustedTotal `object`
    * hours `number`
    * minutes `number`
  * log `array`
    * items [OnCallInterval](#oncallinterval)
  * total `object`
    * hours `number`
    * minutes `number`
  * userId `string`

### V1User
* V1User `object`: Some info about the user
  * _selfUrl `string`
  * createdAt `string`
  * email `string`
  * firstName `string`
  * lastName `string`
  * passwordLastUpdated `string`
  * username `string`
  * verified `boolean`: Whether or not this user has set their password (will always be false)


