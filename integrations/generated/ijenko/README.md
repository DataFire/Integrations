# @datafire/ijenko

Client library for IoE² IoT API - to create end-user applications

## Installation and Usage
```bash
npm install --save datafire @datafire/ijenko
```

```js
let datafire = require('datafire');
let ijenko = require('@datafire/ijenko').create({
  Token in Access-Token header: "",
  Token in query: "",
});

ijenko.Me.places({}).then(data => {
  console.log(data);
})
```

## Description


## Actions
### Account.changePassword
Set a new password for the account.

**Note**: requires full access to the *Account*.



```js
ijenko.Account.changePassword({
  "changePasswordInfo": {
    "oldPassword": "",
    "newPassword": ""
  }
}, context)
```

#### Parameters
* changePasswordInfo (object) **required**

### Account.places
List the *Places* of the account.

**Note:** requires full access to the *Account*.



```js
ijenko.Account.places(null, context)
```


### Account.newPlace
Create a new *Place*.

**Note:** requires full access to the *Account*.



```js
ijenko.Account.newPlace({}, context)
```

#### Parameters
* place (object)

### Account.tokens
List the active *Tokens* on the account.

**Note:** requires full access to the *Account*.



```js
ijenko.Account.tokens(null, context)
```


### Account.revokeToken
Revoke the given *Token*.

**Note:** requires full access to the *Account*.



```js
ijenko.Account.revokeToken({
  "tokenId": ""
}, context)
```

#### Parameters
* tokenId (string) **required** - Identifier of the token

### Account.users
Get the list of *Users* of this *Account*.


```js
ijenko.Account.users({}, context)
```

#### Parameters
* embed-metadata (array) - Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.

### Account.newUser
Add a *User*.

**Note**: requires full access to the *Account*.



```js
ijenko.Account.newUser({
  "userInfo": {
    "email": "",
    "name": "",
    "locale": ""
  }
}, context)
```

#### Parameters
* userInfo (object) **required**

### Account.deleteUser
Delete a *User* from this *Account*, and revoke all his/her *Tokens*.

**Note**: requires full access to the *Account*.



```js
ijenko.Account.deleteUser({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - Unique identifier of a *User*.

### Account.getUser
Get information about a *User* in the same *Account*.


```js
ijenko.Account.getUser({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - Unique identifier of a *User*.

### Account.patchUser
Modify a *User*.

**Note**: requires full access to the *Account*.



```js
ijenko.Account.patchUser({
  "userId": "",
  "userPatch": {}
}, context)
```

#### Parameters
* userId (string) **required** - Unique identifier of a *User*.
* userPatch (object) **required**

### User.getMetadata
Get the metadata.


```js
ijenko.User.getMetadata({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - Unique identifier of a *User*.

### User.patchMetadata
Modify the metadata.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.



```js
ijenko.User.patchMetadata({
  "userId": "",
  "metadataPatch": {}
}, context)
```

#### Parameters
* userId (string) **required** - Unique identifier of a *User*.
* metadataPatch (object) **required**

### AuthAccountLogin
Get an access+refresh tokens pair from login and password information.

The *access token* obtained with this request can then be used in
an `Access-Token` HTTP header or in a `token` URL query parameter
in requests that require authentication.

The *refresh token* can be used with `/auth/refresh` when the *access
token* expires to retrieve a new *access token*. The lifetime of the
refresh token is the maximum lifetime of this authentication request.

The default lifetime of the *refresh token* is defined by the `appId`
used. The `ttl` input parameter allows to request a *refresh token*
with a shorter lifetime.

To implement *logout*, use `/auth/revoke`.



```js
ijenko.AuthAccountLogin({
  "loginInfo": {
    "login": "",
    "password": "",
    "appId": ""
  }
}, context)
```

#### Parameters
* loginInfo (object) **required**

### AuthRefreshToken
Get a new *access token* using a valid *refresh token*.

This is a **replacement** of the *access token*: if an existing *access
token* was still not expired, it is invalidated.



```js
ijenko.AuthRefreshToken({
  "refreshInfo": {
    "refreshToken": "",
    "appId": ""
  }
}, context)
```

#### Parameters
* refreshInfo (object) **required**

### AuthResetPassword
Trigger the request of a new password.

The account administrator will receive an e-mail with an URL pointing to a form
to allow him/her to enter a new password.
The old password is still functional until a new one is submitted.

Either the login or e-mail of the account must be given.



```js
ijenko.AuthResetPassword({
  "resetPasswordInfo": {
    "appId": ""
  }
}, context)
```

#### Parameters
* resetPasswordInfo (object) **required**

### AuthRevokeToken
Invalidate the authentication used for the request. The access token and the refresh token will be invalid after this request.
This request is typically called to implement logout.



```js
ijenko.AuthRevokeToken(null, context)
```


### Devices.get
Get information about a *Device*.


```js
ijenko.Devices.get({
  "deviceId": ""
}, context)
```

#### Parameters
* deviceId (string) **required** - Unique identifier of a *Device*.

### Devices.patch
Modify information about a *Device*: its name.



```js
ijenko.Devices.patch({
  "deviceId": "",
  "devicePatch": {}
}, context)
```

#### Parameters
* deviceId (string) **required** - Unique identifier of a *Device*.
* devicePatch (object) **required**

### Device.addFunctionality
Add a *Functionality* to the device.

Required parameters are :
- functionality class
- endpoint

Each device class has its own restrictions on which Functionality classes can be added and on which endpoints.
Only a few devices allow to add Functionalities.

|Device class|Functionality class|Endpoints|
|------------|-------------------|---------|
|MINT        |CurrentPeriod      |1,2,3    |
|MINT        |ElectricityRates   |1,2,3    |
|MINT        |GenericRate        |1,2,3    |

**Note**: requires full access to the *Account*.



```js
ijenko.Device.addFunctionality({
  "deviceId": "",
  "functionalityInfo": {
    "class": "",
    "endpoint": 0
  }
}, context)
```

#### Parameters
* deviceId (string) **required** - Unique identifier of a *Device*.
* functionalityInfo (object) **required**

### Device.getMetadata
Get the metadata.


```js
ijenko.Device.getMetadata({
  "deviceId": ""
}, context)
```

#### Parameters
* deviceId (string) **required** - Unique identifier of a *Device*.

### Device.patchMetadata
Modify the metadata.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.



```js
ijenko.Device.patchMetadata({
  "deviceId": "",
  "metadataPatch": {}
}, context)
```

#### Parameters
* deviceId (string) **required** - Unique identifier of a *Device*.
* metadataPatch (object) **required**

### Device.run
Run an *Action* on zero, one or multiple Functionalities selected with tags.



```js
ijenko.Device.run({
  "deviceId": "",
  "action": "",
  "functionalities": "",
  "arguments": []
}, context)
```

#### Parameters
* deviceId (string) **required** - Unique identifier of a *Device*.
* action (string) **required** - Identifier of an *Action* inside a *Functionality*.
* functionalities (string) **required** - Functionality selector: Functionality tags or functionality class (optionally, '@' followed by a endpoint in decimal) or '*' for all. Multiple values are separated by '|' and are interpreted as « OR ».
* arguments (array) **required**

### Device.getTags
Get the tags of a *Device*.


```js
ijenko.Device.getTags({
  "deviceId": ""
}, context)
```

#### Parameters
* deviceId (string) **required** - Unique identifier of a *Device*.

### Device.patchTags
Modify the tags of a *Device*.


```js
ijenko.Device.patchTags({
  "deviceId": "",
  "tagsPatch": {}
}, context)
```

#### Parameters
* deviceId (string) **required** - Unique identifier of a *Device*.
* tagsPatch (object) **required**

### Functionalities.get
Get the *Functionality*.


```js
ijenko.Functionalities.get({
  "functionalityId": ""
}, context)
```

#### Parameters
* functionalityId (string) **required** - Unique identifier of a *Functionality*.

### Functionality.patch
Modify information about a *Functionality*: its name.



```js
ijenko.Functionality.patch({
  "functionalityId": "",
  "functionalityPatch": {}
}, context)
```

#### Parameters
* functionalityId (string) **required** - Unique identifier of a *Functionality*.
* functionalityPatch (object) **required**

### Functionality.values
Get the values of multiple *Attributes* and their history.

If the `names` parameter is not given, all the attributes of the *Functionality*
are returned. As the list may be huge, this must be avoided.

If the `to` parameter is set, `from` must also be set.

If `from` is not set, only the last value is returned.

The request may fail if too many values are asked.



```js
ijenko.Functionality.values({
  "functionalityId": ""
}, context)
```

#### Parameters
* functionalityId (string) **required** - Unique identifier of a *Functionality*.
* names (array) - One or multiple *Attribute* names separated by commas
* from (string) - Beginning of the time interval.
* to (string) - End of the interval. Default: now.

### Functionality.value
Get the *Attribute* value and the last time when it changed.


```js
ijenko.Functionality.value({
  "functionalityId": "",
  "attributeName": ""
}, context)
```

#### Parameters
* functionalityId (string) **required** - Unique identifier of a *Functionality*.
* attributeName (string) **required** - Identifier of an *Attribute* inside a *Functionality*.

### Functionality.set
Modify the value of the *Attribute*.


```js
ijenko.Functionality.set({
  "functionalityId": "",
  "attributeName": "",
  "value": null
}, context)
```

#### Parameters
* functionalityId (string) **required** - Unique identifier of a *Functionality*.
* attributeName (string) **required** - Identifier of an *Attribute* inside a *Functionality*.
* value (undefined) **required** - null/boolean/integer/number/string/object/array

### Functionality.getMetadata
Get the metadata.


```js
ijenko.Functionality.getMetadata({
  "functionalityId": ""
}, context)
```

#### Parameters
* functionalityId (string) **required** - Unique identifier of a *Functionality*.

### Functionality.patchMetadata
Modify the metadata.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.



```js
ijenko.Functionality.patchMetadata({
  "functionalityId": "",
  "metadataPatch": {}
}, context)
```

#### Parameters
* functionalityId (string) **required** - Unique identifier of a *Functionality*.
* metadataPatch (object) **required**

### Functionality.run
Run an action on the Functionality.



```js
ijenko.Functionality.run({
  "functionalityId": "",
  "action": "",
  "arguments": []
}, context)
```

#### Parameters
* functionalityId (string) **required** - Unique identifier of a *Functionality*.
* action (string) **required** - Identifier of an *Action* inside a *Functionality*.
* arguments (array) **required**

### Functionality.getTags
Get the tags of a *Functionality*.


```js
ijenko.Functionality.getTags({
  "functionalityId": ""
}, context)
```

#### Parameters
* functionalityId (string) **required** - Unique identifier of a *Functionality*.

### Functionality.patchTags
Modify the tags of a *Functionality*.


```js
ijenko.Functionality.patchTags({
  "functionalityId": "",
  "tagsPatch": {}
}, context)
```

#### Parameters
* functionalityId (string) **required** - Unique identifier of a *Functionality*.
* tagsPatch (object) **required**

### Me.get
Get information on the authenticated *User* who does the request.

The *login* property is returned only if the *User* is the administrator of
the *Account*.



```js
ijenko.Me.get(null, context)
```


### Me.patch
Update *User* information (locale).



```js
ijenko.Me.patch({
  "userPatch": {}
}, context)
```

#### Parameters
* userPatch (object) **required**

### Notification.delete
Delete a *Notification*.



```js
ijenko.Notification.delete({
  "notificationId": ""
}, context)
```

#### Parameters
* notificationId (string) **required** - Unique identifier of a *Notification*.

### Notifications.get
Get information about a *Notification*.



```js
ijenko.Notifications.get({
  "notificationId": ""
}, context)
```

#### Parameters
* notificationId (string) **required** - Unique identifier of a *Notification*.

### Notification.patch
Modify a *Notification*.



```js
ijenko.Notification.patch({
  "notificationId": "",
  "notificationPatch": {}
}, context)
```

#### Parameters
* notificationId (string) **required** - Unique identifier of a *Notification*.
* notificationPatch (object) **required**

### Notification.getMetadata
Get the metadata of the *Notification*.


```js
ijenko.Notification.getMetadata({
  "notificationId": ""
}, context)
```

#### Parameters
* notificationId (string) **required** - Unique identifier of a *Notification*.

### Notification.patchMetadata
Modify the metadata of a *Notification*.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.



```js
ijenko.Notification.patchMetadata({
  "notificationId": "",
  "metadataPatch": {}
}, context)
```

#### Parameters
* notificationId (string) **required** - Unique identifier of a *Notification*.
* metadataPatch (object) **required**

### Me.places
List the *Places* to which the *Token* has access.


```js
ijenko.Me.places({}, context)
```

#### Parameters
* embed-metadata (array) - Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.

### Places.get
Get information about a *Place*.


```js
ijenko.Places.get({
  "placeId": ""
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.

### Place.patch
Change information about a *Place*.

**Note**: requires full access to the *Account*.



```js
ijenko.Place.patch({
  "placeId": "",
  "placePatch": {}
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* placePatch (object) **required**

### Place.buses
Get the list of *Buses* available on the gateway of this *Place*.
If `withPairing` is `true`, return only buses that allow device pairing (see `/places/{placeId}/buses/{busId}/pairing`).


```js
ijenko.Place.buses({
  "placeId": ""
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* withPairing (boolean) - Filter out buses that have no pairing window

### Place.pairing
Get the state of the pairing window of the *Bus*.

**Note**: requires full access to the *Account*.



```js
ijenko.Place.pairing({
  "placeId": "",
  "busId": ""
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* busId (string) **required** - Unique identifier of a *Bus*.

### Place.openPairing
Open/Close the pairing window.

**Note**: requires full access to the *Account*.



```js
ijenko.Place.openPairing({
  "placeId": "",
  "busId": "",
  "pairing": {
    "enabled": true
  }
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* busId (string) **required** - Unique identifier of a *Bus*.
* pairing (object) **required**

### Place.devices
Get the list of *Devices* available in this *Place*.


```js
ijenko.Place.devices({
  "placeId": ""
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* devices (string) - Devices selector. Device tags or device classes or device ids or '*' for any. Multiple values are separated by '|' and interpreted as « OR ».
* embed-metadata (array) - Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.

### Place.Electricity.autonomy
Compute the autonomy rate of the *Place* on a time period.

`autonomy = 1 - (elec_drawn / elec_total_usage)`



```js
ijenko.Place.Electricity.autonomy({
  "placeId": "",
  "when": "",
  "span": ""
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* when (string) **required** - A time part of the time span.
* span (string) **required** - Timespan: H (hour), D (day), Wmo (week starting on Monday), Wsu (week starting on Sunday), M (month), Y (year)

### Place.Electricity.getFlows
Get the mapping of virtual electricity flows to functionalities.

Some rules are applied to expand the virtual flows using the concrete
flows available.

The `factor` tells how each energy value coming from a functionality
must be added with values from other functionality to compute the
energy of the virtual flow. Factors are usually `1` or `-1`.

The `code` property gives the result which may be partial:
- If all flows are available, `200000` is returned.
- If no flows are available (indicating that the place has no
  electricity functionality or that no functionality has been attached
  to a flow), the `code` is `200001`. The `missing` property contains
  all the requested flows.
- If some flows are missing, the `code` is `200002` and the `missing`
  property lists them.



```js
ijenko.Place.Electricity.getFlows({
  "placeId": "",
  "flows": []
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* flows (array) **required** - Names of the flows requested

### Place.Electricity.getFlowsSetup
Get the mapping of functionalities to electricity flows.

A functionality is attached to *at most* one flow.



```js
ijenko.Place.Electricity.getFlowsSetup({
  "placeId": ""
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.

### Place.Electricity.selfConsumption
Compute the self-consumption rate of the *Place* on a time period.

`selfConsumption = 1 - (elec_feed_in / elec_total_usage)`



```js
ijenko.Place.Electricity.selfConsumption({
  "placeId": "",
  "when": "",
  "span": ""
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* when (string) **required** - A time part of the time span.
* span (string) **required** - Timespan: H (hour), D (day), Wmo (week starting on Monday), Wsu (week starting on Sunday), M (month), Y (year)

### Place.functionalities
Get the list of *Functionalities* available in this *Place*.


```js
ijenko.Place.functionalities({
  "placeId": ""
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* devices (string) - Devices selector. Device tags or device classes or device ids or '*' for any. Multiple values are separated by '|' and interpreted as « OR ».
* functionalities (string) - Functionality selector: Functionality tags or functionality class (optionally, '@' followed by a endpoint in decimal) or '*' for all. Multiple values are separated by '|' and are interpreted as « OR ».
* embed-metadata (array) - Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.

### Place.getMetadata
Get the metadata.


```js
ijenko.Place.getMetadata({
  "placeId": ""
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.

### Place.patchMetadata
Modify the metadata.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.



```js
ijenko.Place.patchMetadata({
  "placeId": "",
  "metadataPatch": {}
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* metadataPatch (object) **required**

### Place.notifications
Get the list of *Notifications* available in this *Place*.


```js
ijenko.Place.notifications({
  "placeId": ""
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* embed-metadata (array) - Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.

### Place.newNotification
Create a new *Notification*.


```js
ijenko.Place.newNotification({
  "placeId": "",
  "notification": {
    "name": ""
  }
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* notification (object) **required**

### Place.programs
Get the list of *Programs* available in this *Place*.


```js
ijenko.Place.programs({
  "placeId": ""
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* embed-metadata (array) - Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.

### Place.newProgram
Create a new *Program*.

**Note**: requires full access to the *Account*.



```js
ijenko.Place.newProgram({
  "placeId": "",
  "programInfo": {
    "name": "",
    "code": null
  }
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* programInfo (object) **required**

### Place.run
Run an *Action* on zero, one or multiple *Functionalities* selected with tags.

*Device* and *Functionality* selection are combined with « AND ».

If no functionality is matched by the device/functionality selection, an empty array is returned.



```js
ijenko.Place.run({
  "placeId": "",
  "action": "",
  "devices": "",
  "functionalities": "",
  "arguments": []
}, context)
```

#### Parameters
* placeId (string) **required** - Unique identifier of a *Place*.
* action (string) **required** - Identifier of an *Action* inside a *Functionality*.
* devices (string) **required** - Devices selector. Device tags or device classes or device ids or '*' for any. Multiple values are separated by '|' and interpreted as « OR ».
* functionalities (string) **required** - Functionality selector: Functionality tags or functionality class (optionally, '@' followed by a endpoint in decimal) or '*' for all. Multiple values are separated by '|' and are interpreted as « OR ».
* arguments (array) **required**

### Program.delete
Delete a *Program*.

**Note**: requires full access to the *Account*.



```js
ijenko.Program.delete({
  "programId": ""
}, context)
```

#### Parameters
* programId (string) **required** - Unique identifier of a *Program*.

### Programs.get
Get information about a *Program*.



```js
ijenko.Programs.get({
  "programId": ""
}, context)
```

#### Parameters
* programId (string) **required** - Unique identifier of a *Program*.

### Program.patch
Modify a *Program*:
- name
- status (enabled/disabled)
- code

**Note**: requires full access to the *Account*.



```js
ijenko.Program.patch({
  "programId": "",
  "programPatch": {}
}, context)
```

#### Parameters
* programId (string) **required** - Unique identifier of a *Program*.
* programPatch (object) **required**

### Program.log
Get the execution history list of this *Program*.


```js
ijenko.Program.log({
  "programId": "",
  "from": ""
}, context)
```

#### Parameters
* programId (string) **required** - Unique identifier of a *Program*.
* from (string) **required** - Beginning of the time interval.
* to (string) - End of the interval. Default: now.

### Program.getMetadata
Get the metadata of the *Program*.


```js
ijenko.Program.getMetadata({
  "programId": ""
}, context)
```

#### Parameters
* programId (string) **required** - Unique identifier of a *Program*.

### Program.patchMetadata
Modify the metadata of a *Program*.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.



```js
ijenko.Program.patchMetadata({
  "programId": "",
  "metadataPatch": {}
}, context)
```

#### Parameters
* programId (string) **required** - Unique identifier of a *Program*.
* metadataPatch (object) **required**

### Program.run
Launch the *Program*.
The result will be available later in the run history.


```js
ijenko.Program.run({
  "programId": ""
}, context)
```

#### Parameters
* programId (string) **required** - Unique identifier of a *Program*.

