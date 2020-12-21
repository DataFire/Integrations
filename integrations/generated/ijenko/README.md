# @datafire/ijenko

Client library for IoE² IoT API - to create end-user applications

## Installation and Usage
```bash
npm install --save @datafire/ijenko
```
```js
let ijenko = require('@datafire/ijenko').create({
  "Token in Access-Token header": "",
  "Token in query": ""
});

.then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * changePasswordInfo **required** [AuthChangePassword](#authchangepassword)

#### Output
*Output schema unknown*

### Account.places
List the *Places* of the account.

**Note:** requires full access to the *Account*.



```js
ijenko.Account.places(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [PlaceItem](#placeitem)

### Account.newPlace
Create a new *Place*.

A *Device* (`class`: `MINT`, `address`: `0`) is automatically created and attached to the new *Place*.

**Note:** requires full access to the *Account*.



```js
ijenko.Account.newPlace({}, context)
```

#### Input
* input `object`
  * place [PlaceNew](#placenew)

#### Output
* output [PlaceCreated](#placecreated)

### Account.tokens
List the active *Tokens* on the account.

**Note:** requires full access to the *Account*.



```js
ijenko.Account.tokens(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [UserTokenItem](#usertokenitem)

### Account.revokeToken
Revoke the given *Token*.

**Note:** requires full access to the *Account*.



```js
ijenko.Account.revokeToken({
  "tokenId": ""
}, context)
```

#### Input
* input `object`
  * tokenId **required** `string`: Identifier of the token

#### Output
*Output schema unknown*

### Account.users
Get the list of *Users* of this *Account*.


```js
ijenko.Account.users({}, context)
```

#### Input
* input `object`
  * embed-metadata `array`: Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.

#### Output
* output `array`
  * items [UserItem](#useritem)

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

#### Input
* input `object`
  * userInfo **required** [UserNew](#usernew)

#### Output
* output [UserCreated](#usercreated)

### Account.deleteUser
Delete a *User* from this *Account*, and revoke all his/her *Tokens*.

**Note**: requires full access to the *Account*.



```js
ijenko.Account.deleteUser({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Unique identifier of a *User*.

#### Output
*Output schema unknown*

### Account.getUser
Get information about a *User* in the same *Account*.


```js
ijenko.Account.getUser({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Unique identifier of a *User*.

#### Output
* output [User](#user)

### Account.patchUser
Modify a *User*.

**Note**: requires full access to the *Account*.



```js
ijenko.Account.patchUser({
  "userPatch": {},
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userPatch **required** [UserPatch](#userpatch)
  * userId **required** `string`: Unique identifier of a *User*.

#### Output
*Output schema unknown*

### User.getMetadata
Get the metadata.


```js
ijenko.User.getMetadata({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Unique identifier of a *User*.

#### Output
* output [Metadata](#metadata)

### User.patchMetadata
Modify the metadata.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.



```js
ijenko.User.patchMetadata({
  "metadataPatch": {},
  "userId": ""
}, context)
```

#### Input
* input `object`
  * metadataPatch **required** [MetadataPatch](#metadatapatch)
  * userId **required** `string`: Unique identifier of a *User*.

#### Output
* output [Metadata](#metadata)

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

#### Input
* input `object`
  * loginInfo **required** [AuthLogin](#authlogin)

#### Output
* output [AuthTokens](#authtokens)

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

#### Input
* input `object`
  * refreshInfo **required** [AuthRefresh](#authrefresh)

#### Output
* output [AuthTokens](#authtokens)

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

#### Input
* input `object`
  * resetPasswordInfo **required** [AuthResetPassword](#authresetpassword)

#### Output
*Output schema unknown*

### AuthRevokeToken
Invalidate the authentication used for the request. The access token and the refresh token will be invalid after this request.
This request is typically called to implement logout.



```js
ijenko.AuthRevokeToken(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Devices.get
Get information about a *Device*.


```js
ijenko.Devices.get({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`: Unique identifier of a *Device*.

#### Output
* output [Device](#device)

### Devices.patch
Modify information about a *Device*: its name.



```js
ijenko.Devices.patch({
  "devicePatch": {},
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * devicePatch **required** [DevicePatch](#devicepatch)
  * deviceId **required** `string`: Unique identifier of a *Device*.

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * deviceId **required** `string`: Unique identifier of a *Device*.
  * functionalityInfo **required** [FunctionalityNew](#functionalitynew)

#### Output
* output [FunctionalityCreated](#functionalitycreated)

### Device.getMetadata
Get the metadata.


```js
ijenko.Device.getMetadata({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`: Unique identifier of a *Device*.

#### Output
* output [Metadata](#metadata)

### Device.patchMetadata
Modify the metadata.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.



```js
ijenko.Device.patchMetadata({
  "metadataPatch": {},
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * metadataPatch **required** [MetadataPatch](#metadatapatch)
  * deviceId **required** `string`: Unique identifier of a *Device*.

#### Output
* output [Metadata](#metadata)

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

#### Input
* input `object`
  * deviceId **required** `string`: Unique identifier of a *Device*.
  * action **required** `string`: Identifier of an *Action* inside a *Functionality*.
  * functionalities **required** `string`: Functionality selector: Functionality tags or functionality class (optionally, '@' followed by a endpoint in decimal) or '*' for all. Multiple values are separated by '|' and are interpreted as « OR ».
  * arguments **required** [ActionArgs](#actionargs)

#### Output
* output [ActionMultiResult](#actionmultiresult)

### Device.getTags
Get the tags of a *Device*.


```js
ijenko.Device.getTags({
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * deviceId **required** `string`: Unique identifier of a *Device*.

#### Output
* output [Tags](#tags)

### Device.patchTags
Modify the tags of a *Device*.


```js
ijenko.Device.patchTags({
  "tagsPatch": {},
  "deviceId": ""
}, context)
```

#### Input
* input `object`
  * tagsPatch **required** [TagsPatch](#tagspatch)
  * deviceId **required** `string`: Unique identifier of a *Device*.

#### Output
* output [Tags](#tags)

### Functionalities.get
Get the *Functionality*.


```js
ijenko.Functionalities.get({
  "functionalityId": ""
}, context)
```

#### Input
* input `object`
  * functionalityId **required** `string`: Unique identifier of a *Functionality*.

#### Output
* output [Functionality](#functionality)

### Functionality.patch
Modify information about a *Functionality*: its name.



```js
ijenko.Functionality.patch({
  "functionalityPatch": {},
  "functionalityId": ""
}, context)
```

#### Input
* input `object`
  * functionalityPatch **required** [FunctionalityPatch](#functionalitypatch)
  * functionalityId **required** `string`: Unique identifier of a *Functionality*.

#### Output
*Output schema unknown*

### Functionality.values
Get the values of multiple *Attributes* and their history.

If the `names` parameter is not given, all the attributes of the *Functionality*
are returned. As the list may be huge, this must be avoided.

If the `to` parameter is set, `from` must also be set.

If `from` is not set, only the last value is returned.

The `surround` parameter allows to ask also for one value beyond each interval boundaries.

The request may fail if too many values are asked.



```js
ijenko.Functionality.values({
  "functionalityId": ""
}, context)
```

#### Input
* input `object`
  * names `array`: One or multiple *Attribute* names separated by commas
  * from `string`: Beginning of the time interval.
  * to `string`: End of the interval. Default: now.
  * surround `boolean`: If true, return also one value before from and one value after to
  * functionalityId **required** `string`: Unique identifier of a *Functionality*.

#### Output
* output [AttributesValues](#attributesvalues)

### Functionality.value
Get the *Attribute* value and the last time when it changed.


```js
ijenko.Functionality.value({
  "functionalityId": "",
  "attributeName": ""
}, context)
```

#### Input
* input `object`
  * functionalityId **required** `string`: Unique identifier of a *Functionality*.
  * attributeName **required** `string`: Identifier of an *Attribute* inside a *Functionality*.

#### Output
* output [AttributeValue](#attributevalue)

### Functionality.set
Modify the value of the *Attribute*.


```js
ijenko.Functionality.set({
  "value": null,
  "functionalityId": "",
  "attributeName": ""
}, context)
```

#### Input
* input `object`
  * value **required** [AnyJSON](#anyjson)
  * functionalityId **required** `string`: Unique identifier of a *Functionality*.
  * attributeName **required** `string`: Identifier of an *Attribute* inside a *Functionality*.

#### Output
*Output schema unknown*

### Functionality.getMetadata
Get the metadata.


```js
ijenko.Functionality.getMetadata({
  "functionalityId": ""
}, context)
```

#### Input
* input `object`
  * functionalityId **required** `string`: Unique identifier of a *Functionality*.

#### Output
* output [Metadata](#metadata)

### Functionality.patchMetadata
Modify the metadata.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.



```js
ijenko.Functionality.patchMetadata({
  "metadataPatch": {},
  "functionalityId": ""
}, context)
```

#### Input
* input `object`
  * metadataPatch **required** [MetadataPatch](#metadatapatch)
  * functionalityId **required** `string`: Unique identifier of a *Functionality*.

#### Output
* output [Metadata](#metadata)

### Functionality.run
Run an action on the Functionality.



```js
ijenko.Functionality.run({
  "functionalityId": "",
  "action": "",
  "arguments": []
}, context)
```

#### Input
* input `object`
  * functionalityId **required** `string`: Unique identifier of a *Functionality*.
  * action **required** `string`: Identifier of an *Action* inside a *Functionality*.
  * arguments **required** [ActionArgs](#actionargs)

#### Output
* output [ActionResult](#actionresult)

### Functionality.getTags
Get the tags of a *Functionality*.


```js
ijenko.Functionality.getTags({
  "functionalityId": ""
}, context)
```

#### Input
* input `object`
  * functionalityId **required** `string`: Unique identifier of a *Functionality*.

#### Output
* output [Tags](#tags)

### Functionality.patchTags
Modify the tags of a *Functionality*.


```js
ijenko.Functionality.patchTags({
  "tagsPatch": {},
  "functionalityId": ""
}, context)
```

#### Input
* input `object`
  * tagsPatch **required** [TagsPatch](#tagspatch)
  * functionalityId **required** `string`: Unique identifier of a *Functionality*.

#### Output
* output [Tags](#tags)

### Me.get
Get information on the authenticated *User* who does the request.

The *login* property is returned only if the *User* is the administrator of
the *Account*.



```js
ijenko.Me.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserMe](#userme)

### Me.patch
Update *User* information (locale).



```js
ijenko.Me.patch({
  "userPatch": {}
}, context)
```

#### Input
* input `object`
  * userPatch **required** [UserMePatch](#usermepatch)

#### Output
*Output schema unknown*

### Notification.delete
Delete a *Notification*.



```js
ijenko.Notification.delete({
  "notificationId": ""
}, context)
```

#### Input
* input `object`
  * notificationId **required** `string`: Unique identifier of a *Notification*.

#### Output
*Output schema unknown*

### Notifications.get
Get information about a *Notification*.



```js
ijenko.Notifications.get({
  "notificationId": ""
}, context)
```

#### Input
* input `object`
  * notificationId **required** `string`: Unique identifier of a *Notification*.

#### Output
* output [Notification](#notification)

### Notification.patch
Modify a *Notification*.



```js
ijenko.Notification.patch({
  "notificationPatch": {},
  "notificationId": ""
}, context)
```

#### Input
* input `object`
  * notificationPatch **required** [NotificationPatch](#notificationpatch)
  * notificationId **required** `string`: Unique identifier of a *Notification*.

#### Output
*Output schema unknown*

### Notification.getMetadata
Get the metadata of the *Notification*.


```js
ijenko.Notification.getMetadata({
  "notificationId": ""
}, context)
```

#### Input
* input `object`
  * notificationId **required** `string`: Unique identifier of a *Notification*.

#### Output
* output [Metadata](#metadata)

### Notification.patchMetadata
Modify the metadata of a *Notification*.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.



```js
ijenko.Notification.patchMetadata({
  "metadataPatch": {},
  "notificationId": ""
}, context)
```

#### Input
* input `object`
  * metadataPatch **required** [MetadataPatch](#metadatapatch)
  * notificationId **required** `string`: Unique identifier of a *Notification*.

#### Output
* output [Metadata](#metadata)

### Me.places
List the *Places* to which the *Token* has access.


```js
ijenko.Me.places({}, context)
```

#### Input
* input `object`
  * embed-metadata `array`: Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.

#### Output
* output `array`
  * items [PlaceItem](#placeitem)

### Places.get
Get information about a *Place*.


```js
ijenko.Places.get({
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output [Place](#place)

### Place.patch
Change information about a *Place*.

**Note**: requires full access to the *Account*.



```js
ijenko.Place.patch({
  "placePatch": {},
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * placePatch **required** [PlacePatch](#placepatch)
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
*Output schema unknown*

### Place.buses
Get the list of *Buses* available on the gateway of this *Place*.
If `withPairing` is `true`, return only buses that allow device pairing (see `/places/{placeId}/buses/{busId}/pairing`).


```js
ijenko.Place.buses({
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * withPairing `boolean`: Filter out buses that have no pairing window
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output `array`
  * items [BusItem](#busitem)

### Place.pairing
Get the state of the pairing window of the *Bus*.

**Note**: requires full access to the *Account*.



```js
ijenko.Place.pairing({
  "placeId": "",
  "busId": ""
}, context)
```

#### Input
* input `object`
  * placeId **required** `string`: Unique identifier of a *Place*.
  * busId **required** `string`: Unique identifier of a *Bus*.

#### Output
* output [BusPairing](#buspairing)

### Place.openPairing
Open/Close the pairing window.

**Note**: requires full access to the *Account*.



```js
ijenko.Place.openPairing({
  "pairing": {
    "enabled": true
  },
  "placeId": "",
  "busId": ""
}, context)
```

#### Input
* input `object`
  * pairing **required** [BusPairing](#buspairing)
  * placeId **required** `string`: Unique identifier of a *Place*.
  * busId **required** `string`: Unique identifier of a *Bus*.

#### Output
* output [BusPairing](#buspairing)

### Place.devices
Get the list of *Devices* available in this *Place*.


```js
ijenko.Place.devices({
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * devices `string`: Devices selector. Device tags or device classes or device ids or '*' for any. Multiple values are separated by '|' and interpreted as « OR ».
  * embed-metadata `array`: Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output `array`
  * items [DeviceItem](#deviceitem)

### Place.Electricity.autonomy
Compute the autonomy rate of the *Place* on a time period.

`autonomy = 1 - (elec_drawn / elec_total_usage)`



```js
ijenko.Place.Electricity.autonomy({
  "when": "",
  "span": "",
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * when **required** `string`: A time part of the time span.
  * span **required** `string` (values: H, D, Wmo, Wsu, M, Y): Timespan: H (hour), D (day), Wmo (week starting on Monday), Wsu (week starting on Sunday), M (month), Y (year)
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output [ElectricityAutonomy](#electricityautonomy)

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
  "flows": [],
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * flows **required** `array`: Names of the flows requested
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output [ElectricityFlows](#electricityflows)

### Place.Electricity.getFlowsSetup
Get the mapping of functionalities to electricity flows.

A functionality is attached to *at most* one flow.



```js
ijenko.Place.Electricity.getFlowsSetup({
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output [ElectricityFlowsSetup](#electricityflowssetup)

### Place.Electricity.selfConsumption
Compute the self-consumption rate of the *Place* on a time period.

`selfConsumption = 1 - (elec_feed_in / elec_total_usage)`



```js
ijenko.Place.Electricity.selfConsumption({
  "when": "",
  "span": "",
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * when **required** `string`: A time part of the time span.
  * span **required** `string` (values: H, D, Wmo, Wsu, M, Y): Timespan: H (hour), D (day), Wmo (week starting on Monday), Wsu (week starting on Sunday), M (month), Y (year)
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output [ElectricitySelfConsumption](#electricityselfconsumption)

### Place.functionalities
Get the list of *Functionalities* available in this *Place*.


```js
ijenko.Place.functionalities({
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * embed-metadata `array`: Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.
  * placeId **required** `string`: Unique identifier of a *Place*.
  * devices `string`: Devices selector. Device tags or device classes or device ids or '*' for any. Multiple values are separated by '|' and interpreted as « OR ».
  * functionalities `string`: Functionality selector: Functionality tags or functionality class (optionally, '@' followed by a endpoint in decimal) or '*' for all. Multiple values are separated by '|' and are interpreted as « OR ».

#### Output
* output `array`
  * items [FunctionalityItem](#functionalityitem)

### Place.getMetadata
Get the metadata.


```js
ijenko.Place.getMetadata({
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output [Metadata](#metadata)

### Place.patchMetadata
Modify the metadata.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.



```js
ijenko.Place.patchMetadata({
  "metadataPatch": {},
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * metadataPatch **required** [MetadataPatch](#metadatapatch)
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output [Metadata](#metadata)

### Place.notifications
Get the list of *Notifications* available in this *Place*.


```js
ijenko.Place.notifications({
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * embed-metadata `array`: Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output `array`
  * items [NotificationItem](#notificationitem)

### Place.newNotification
Create a new *Notification*.


```js
ijenko.Place.newNotification({
  "notification": {
    "name": ""
  },
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * notification **required** [NotificationNew](#notificationnew)
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output [NotificationCreated](#notificationcreated)

### Place.programs
Get the list of *Programs* available in this *Place*.


```js
ijenko.Place.programs({
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * embed-metadata `array`: Request to include the given keys of metadata in the response. If a key doesn't exist on the resource it is ignored.
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output `array`
  * items [ProgramItem](#programitem)

### Place.newProgram
Create a new *Program*.

**Note**: requires full access to the *Account*.



```js
ijenko.Place.newProgram({
  "programInfo": {
    "name": "",
    "code": null
  },
  "placeId": ""
}, context)
```

#### Input
* input `object`
  * programInfo **required** [ProgramNew](#programnew)
  * placeId **required** `string`: Unique identifier of a *Place*.

#### Output
* output [ProgramCreated](#programcreated)

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

#### Input
* input `object`
  * placeId **required** `string`: Unique identifier of a *Place*.
  * action **required** `string`: Identifier of an *Action* inside a *Functionality*.
  * devices **required** `string`: Devices selector. Device tags or device classes or device ids or '*' for any. Multiple values are separated by '|' and interpreted as « OR ».
  * functionalities **required** `string`: Functionality selector: Functionality tags or functionality class (optionally, '@' followed by a endpoint in decimal) or '*' for all. Multiple values are separated by '|' and are interpreted as « OR ».
  * arguments **required** [ActionArgs](#actionargs)

#### Output
* output [ActionMultiResult](#actionmultiresult)

### Program.delete
Delete a *Program*.

**Note**: requires full access to the *Account*.



```js
ijenko.Program.delete({
  "programId": ""
}, context)
```

#### Input
* input `object`
  * programId **required** `string`: Unique identifier of a *Program*.

#### Output
*Output schema unknown*

### Programs.get
Get information about a *Program*.



```js
ijenko.Programs.get({
  "programId": ""
}, context)
```

#### Input
* input `object`
  * programId **required** `string`: Unique identifier of a *Program*.

#### Output
* output [Program](#program)

### Program.patch
Modify a *Program*:
- name
- status (enabled/disabled)
- code

**Note**: requires full access to the *Account*.



```js
ijenko.Program.patch({
  "programPatch": {},
  "programId": ""
}, context)
```

#### Input
* input `object`
  * programPatch **required** [ProgramPatch](#programpatch)
  * programId **required** `string`: Unique identifier of a *Program*.

#### Output
*Output schema unknown*

### Program.log
Get the execution history list of this *Program*.


```js
ijenko.Program.log({
  "from": "",
  "programId": ""
}, context)
```

#### Input
* input `object`
  * from **required** `string`: Beginning of the time interval.
  * to `string`: End of the interval. Default: now.
  * programId **required** `string`: Unique identifier of a *Program*.

#### Output
* output `array`
  * items [ProgramLog](#programlog)

### Program.getMetadata
Get the metadata of the *Program*.


```js
ijenko.Program.getMetadata({
  "programId": ""
}, context)
```

#### Input
* input `object`
  * programId **required** `string`: Unique identifier of a *Program*.

#### Output
* output [Metadata](#metadata)

### Program.patchMetadata
Modify the metadata of a *Program*.
Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.



```js
ijenko.Program.patchMetadata({
  "metadataPatch": {},
  "programId": ""
}, context)
```

#### Input
* input `object`
  * metadataPatch **required** [MetadataPatch](#metadatapatch)
  * programId **required** `string`: Unique identifier of a *Program*.

#### Output
* output [Metadata](#metadata)

### Program.run
Launch the *Program*.
The result will be available later in the run history.


```js
ijenko.Program.run({
  "programId": ""
}, context)
```

#### Input
* input `object`
  * programId **required** `string`: Unique identifier of a *Program*.

#### Output
*Output schema unknown*



## Definitions

### AccountId
* AccountId `string`: Unique identifier of the *Account*

### AccountLogin
* AccountLogin `string`

### ActionArgs
* ActionArgs `array`
  * items [AnyJSON](#anyjson)

### ActionMultiResult
* ActionMultiResult `array`
  * items [ActionResult](#actionresult)

### ActionName
* ActionName `string`

### ActionResult
* ActionResult `object`
  * functionality [FunctionalityId](#functionalityid)
  * result `array`
    * items [AnyJSON](#anyjson)
  * status **required** `integer`: Return code (HTTP status code)

### AnyJSON


### AppId
* AppId `string`

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `object`
  * value **required** [AnyJSON](#anyjson)
  * when **required** `string`

### AttributesValues
* AttributesValues `object`: Keys are attribute ids

### AuthChangePassword
* AuthChangePassword `object`
  * newPassword **required** [Password](#password)
  * oldPassword **required** [Password](#password)

### AuthLogin
* AuthLogin `object`
  * appId **required** [AppId](#appid)
  * login **required** `string`
  * password **required** [Password](#password)
  * ttl `integer`: Desired maximum life-time in seconds for the refresh token

### AuthRefresh
* AuthRefresh `object`
  * appId **required** [AppId](#appid)
  * refreshToken **required** `string`

### AuthResetPassword
* AuthResetPassword `object`
  * appId **required** [AppId](#appid)
  * email [UserEmail](#useremail)
  * login `string`

### AuthTokens
* AuthTokens `object`
  * accessToken **required** `string`
  * accessTokenExpires **required** `string`
  * refreshToken **required** `string`
  * refreshTokenExpires **required** `string`

### BusId
* BusId `string`

### BusItem
* BusItem `object`
  * functionality **required** [FunctionalityId](#functionalityid)
  * id **required** [BusId](#busid)
  * protocol **required** [BusProtocol](#busprotocol)

### BusPairing
* BusPairing `object`
  * duration `integer`: Duration of the pairing window.
  * enabled **required** `boolean`

### BusProtocol
* BusProtocol `string`

### CountryCode
* CountryCode `string`: Country code (ISO 3166-1 alpha-2)

### DefaultError
* DefaultError `object`: Any error.
  * code **required** `integer`
  * message **required** `string`

### Device
* Device `object`
  * address **required** [DeviceAddress](#deviceaddress)
  * attributes `object`: Each key is <FunctionalityClass>@<Endpoint>
  * class **required** [DeviceClass](#deviceclass)
  * functionalities **required** `array`
    * items [FunctionalityItem](#functionalityitem)
  * isOnline **required** `boolean`
  * manufacturer `string`
  * metadata [Metadata](#metadata)
  * model `string`
  * name `string`: Name of the device. User defined.
  * place **required** [PlaceId](#placeid)
  * protocol [BusProtocol](#busprotocol)
  * tags **required** `array`
    * items [DeviceTag](#devicetag)

### DeviceAddress
* DeviceAddress `string`

### DeviceClass
* DeviceClass `string`

### DeviceId
* DeviceId `string`: Unique identifier of the *Device*

### DeviceItem
* DeviceItem `object`
  * address **required** [DeviceAddress](#deviceaddress)
  * class **required** [DeviceClass](#deviceclass)
  * id **required** [DeviceId](#deviceid)
  * isOnline **required** `boolean`
  * metadata [MetadataSelected](#metadataselected)
  * name `string`: Name of the *Device* as defined by the user. Can be used for user interfaces.
  * place **required** [PlaceId](#placeid)
  * tags **required** `array`
    * items [DeviceTag](#devicetag)

### DevicePatch
* DevicePatch `object`
  * name `string`: Name of the *Device* as defined by the user. Can be used for user interfaces.

### DeviceTag
* DeviceTag `string`

### ElectricityAutonomy
* ElectricityAutonomy `object`
  * autonomy `number`: Average electricity autonomy in % (value in range [0, 1], rounded)
  * code **required** [ElectricityStatusCode](#electricitystatuscode)
  * from `string`
  * message `string`: Message for cases where computation is not possible (codes 200001, 200002)
  * to `string`

### ElectricityFlow
* ElectricityFlow `array`
  * items [ElectricityFunctionality](#electricityfunctionality)

### ElectricityFlowFormula
* ElectricityFlowFormula `array`
  * items [ElectricityFlowFunctionality](#electricityflowfunctionality)

### ElectricityFlowFunctionality
* ElectricityFlowFunctionality `object`
  * class **required** [FunctionalityClass](#functionalityclass)
  * factor **required** `integer`
  * flow **required** [ElectricityFlowName](#electricityflowname)
  * id **required** [FunctionalityId](#functionalityid)

### ElectricityFlowName
* ElectricityFlowName `string` (values: battery_charge, battery_discharge, battery_grid, elec_total_gen, elec_total_usage, elec_feed_in, elec_drawn, elec_local, elec_from_household, elec_to_pv, elec_usage): Name of an electricity flow

### ElectricityFlows
* ElectricityFlows `object`
  * code **required** [ElectricityStatusCode](#electricitystatuscode)
  * flows [ElectricityVirtualFlows](#electricityvirtualflows)
  * message [ElectricityStatusMessage](#electricitystatusmessage)
  * missing [ElectricityMissingFlows](#electricitymissingflows)

### ElectricityFlowsSetup
* ElectricityFlowsSetup `object`
  * battery_charge [ElectricityFlow](#electricityflow)
  * battery_discharge [ElectricityFlow](#electricityflow)
  * battery_grid [ElectricityFlow](#electricityflow)
  * elec_drawn [ElectricityFlow](#electricityflow)
  * elec_feed_in [ElectricityFlow](#electricityflow)
  * elec_from_household [ElectricityFlow](#electricityflow)
  * elec_local [ElectricityFlow](#electricityflow)
  * elec_to_pv [ElectricityFlow](#electricityflow)
  * elec_total_gen [ElectricityFlow](#electricityflow)
  * elec_total_usage [ElectricityFlow](#electricityflow)
  * elec_usage [ElectricityFlow](#electricityflow)

### ElectricityFunctionality
* ElectricityFunctionality `object`
  * class **required** [FunctionalityClass](#functionalityclass)
  * id **required** [FunctionalityId](#functionalityid)

### ElectricityMissingFlows
* ElectricityMissingFlows `object`: List of missing flows (not available either directly or indirectly)
  * battery_charge `boolean` (values: true)
  * battery_discharge `boolean` (values: true)
  * battery_grid `boolean` (values: true)
  * elec_drawn `boolean` (values: true)
  * elec_feed_in `boolean` (values: true)
  * elec_from_household `boolean` (values: true)
  * elec_local `boolean` (values: true)
  * elec_to_pv `boolean` (values: true)
  * elec_total_gen `boolean` (values: true)
  * elec_total_usage `boolean` (values: true)
  * elec_usage `boolean` (values: true)

### ElectricitySelfConsumption
* ElectricitySelfConsumption `object`
  * code **required** [ElectricityStatusCode](#electricitystatuscode)
  * from `string`
  * message `string`: Message for cases where computation is not possible (codes 200001, 200002)
  * selfConsumption `number`: Average self-consumption rate in % (value in range [0, 1], rounded)
  * to `string`

### ElectricityStatusCode
* ElectricityStatusCode `integer` (values: 200000, 200001, 200002): Status code. 200000 means OK. Other codes indicate full or partial failure.

### ElectricityStatusMessage
* ElectricityStatusMessage `string`: Message for cases where computation is not possible (codes 200001, 200002)

### ElectricityVirtualFlows
* ElectricityVirtualFlows `object`
  * battery_charge [ElectricityFlowFormula](#electricityflowformula)
  * battery_discharge [ElectricityFlowFormula](#electricityflowformula)
  * battery_grid [ElectricityFlowFormula](#electricityflowformula)
  * elec_drawn [ElectricityFlowFormula](#electricityflowformula)
  * elec_feed_in [ElectricityFlowFormula](#electricityflowformula)
  * elec_from_household [ElectricityFlowFormula](#electricityflowformula)
  * elec_local [ElectricityFlowFormula](#electricityflowformula)
  * elec_to_pv [ElectricityFlowFormula](#electricityflowformula)
  * elec_total_gen [ElectricityFlowFormula](#electricityflowformula)
  * elec_total_usage [ElectricityFlowFormula](#electricityflowformula)
  * elec_usage [ElectricityFlowFormula](#electricityflowformula)

### ErrorEntity
* ErrorEntity `object`: An error related to access to an entity (400, 403, 404, 410)
  * code **required** `integer`
  * message **required** `string`
  * resource **required** [ResourceRef](#resourceref)

### ErrorGatewayUnreachable
* ErrorGatewayUnreachable `object`: The gateway of the Place is not reachable.
  * code **required** `string` (values: 450)
  * message **required** `string`

### ErrorSubEntity
* ErrorSubEntity `object`: An error related to access to an sub-entity (400, 403, 404, 410)
  * code **required** `integer`
  * message **required** `string`
  * resource **required** `object`
    * entity **required** `string` (values: Action, Attribute, Bus)
    * href **required** `string`
    * id **required** `string`
    * parent `object`: Container resource.
      * entity **required** `string` (values: Place, Functionality)
      * id **required** `string`

### Functionality
* Functionality `object`
  * actions `array`
    * items [ActionName](#actionname)
  * attributes **required** `array`
    * items [AttributeName](#attributename)
  * class **required** [FunctionalityClass](#functionalityclass)
  * device **required** [DeviceId](#deviceid)
  * endpoint **required** [FunctionalityEndpoint](#functionalityendpoint)
  * metadata [Metadata](#metadata)
  * name [FunctionalityName](#functionalityname)
  * tags **required** `array`
    * items [FunctionalityTag](#functionalitytag)

### FunctionalityClass
* FunctionalityClass `string`

### FunctionalityCreated
* FunctionalityCreated `object`: A resource has been created. The `resource` property gives its reference.
  * code **required** `integer` (values: 201)
  * message **required** `string` (values: Functionality created)
  * resource **required** [FunctionalityResource](#functionalityresource)

### FunctionalityEndpoint
* FunctionalityEndpoint `integer`

### FunctionalityId
* FunctionalityId `string`: Unique identifier of the *Functionality*

### FunctionalityItem
* FunctionalityItem `object`
  * class **required** [FunctionalityClass](#functionalityclass)
  * device **required** [DeviceId](#deviceid)
  * endpoint **required** [FunctionalityEndpoint](#functionalityendpoint)
  * id **required** [FunctionalityId](#functionalityid)
  * metadata [MetadataSelected](#metadataselected)
  * name [FunctionalityName](#functionalityname)
  * tags `array`
    * items [FunctionalityTag](#functionalitytag)

### FunctionalityName
* FunctionalityName `string`: Free functionality name

### FunctionalityNew
* FunctionalityNew `object`
  * class **required** [FunctionalityClass](#functionalityclass)
  * endpoint **required** [FunctionalityEndpoint](#functionalityendpoint)
  * metadata [Metadata](#metadata)
  * name [FunctionalityName](#functionalityname)
  * tags `array`
    * items [FunctionalityTag](#functionalitytag)

### FunctionalityPatch
* FunctionalityPatch `object`
  * name [FunctionalityName](#functionalityname)

### FunctionalityResource
* FunctionalityResource `object`
  * entity **required** `string` (values: Functionality)
  * href **required** `string`
  * id **required** [FunctionalityId](#functionalityid)

### FunctionalityTag
* FunctionalityTag `string`

### Locale
* Locale `string`: Locale identifier (language, region). See https://tools.ietf.org/html/rfc5646 and https://www.iana.org/assignments/lang-subtags-templates/lang-subtags-templates.xhtml .

### Metadata
* Metadata `object`: Keys are limited to the same format as tags (up to 21 characters, [a-z0-9], starting with [a-z]). Values can be any JSON value.

### MetadataKey
* MetadataKey `string`

### MetadataPatch
* MetadataPatch `object`
  * add `object`: list of pairs key/value to add/replace
  * remove `array`: list of keys to remove
    * items [MetadataKey](#metadatakey)

### MetadataSelected
* MetadataSelected `object`: Subset of metadata attached to the resource selected using the 'embed-metadata' parameter

### Notification
* Notification `object`
  * data `object`
  * metadata [Metadata](#metadata)
  * name **required** `string`
  * place **required** [PlaceId](#placeid)
  * routing `string`

### NotificationCreated
* NotificationCreated `object`: A resource has been created. The `resource` property gives its reference.
  * code **required** `integer` (values: 201)
  * message **required** `string` (values: Notification created)
  * resource **required** [NotificationResource](#notificationresource)

### NotificationId
* NotificationId `string`: Unique identifier of the *Notification*

### NotificationItem
* NotificationItem `object`: Notification
  * id **required** [NotificationId](#notificationid)
  * metadata [MetadataSelected](#metadataselected)
  * name **required** `string`

### NotificationNew
* NotificationNew `object`
  * data `object`
  * metadata [Metadata](#metadata)
  * name **required** `string`
  * routing `string`

### NotificationPatch
* NotificationPatch `object`
  * data `object`
  * name `string`
  * routing `string`

### NotificationResource
* NotificationResource `object`
  * entity **required** `string` (values: Notification)
  * href **required** `string`
  * id **required** [NotificationId](#notificationid)

### Password
* Password `string`

### PhoneNumber
* PhoneNumber `string`: Phone number of the *User* in international format, for SMS notifications.

### Place
* Place `object`
  * account [AccountId](#accountid)
  * country **required** [CountryCode](#countrycode)
  * metadata [Metadata](#metadata)
  * name **required** `string`
  * timeZone **required** [TimeZone](#timezone)
  * zipCode **required** [ZipCode](#zipcode)

### PlaceCreated
* PlaceCreated `object`: A resource has been created. The `resource` property gives its reference.
  * code **required** `integer` (values: 201)
  * message **required** `string` (values: Place created)
  * resource **required** [PlaceResource](#placeresource)

### PlaceId
* PlaceId `string`: Unique identifier of the *Place*

### PlaceItem
* PlaceItem `object`
  * id **required** [PlaceId](#placeid)
  * name **required** `string`

### PlaceNew
* PlaceNew `object`
  * country **required** [CountryCode](#countrycode)
  * metadata [Metadata](#metadata)
  * name **required** `string`
  * timeZone **required** [TimeZone](#timezone)
  * zipCode **required** [ZipCode](#zipcode)

### PlacePatch
* PlacePatch `object`
  * country [CountryCode](#countrycode)
  * name `string`
  * timeZone [TimeZone](#timezone)
  * zipCode [ZipCode](#zipcode)

### PlaceResource
* PlaceResource `object`
  * entity **required** `string` (values: Place)
  * href **required** `string`
  * id **required** [PlaceId](#placeid)

### Program
* Program `object`
  * code **required** [AnyJSON](#anyjson)
  * enabled **required** `boolean`
  * metadata [Metadata](#metadata)
  * name **required** `string`
  * place [PlaceId](#placeid)

### ProgramCreated
* ProgramCreated `object`: A resource has been created. The `resource` property gives its reference.
  * code **required** `integer` (values: 201)
  * message **required** `string` (values: Program created)
  * resource **required** [ProgramResource](#programresource)

### ProgramId
* ProgramId `string`: Unique identifier of the *Program*

### ProgramItem
* ProgramItem `object`
  * enabled **required** `boolean`
  * id **required** [ProgramId](#programid)
  * metadata [MetadataSelected](#metadataselected)
  * name **required** `string`

### ProgramLog
* ProgramLog `object`
  * actions `array`
    * items [ActionResult](#actionresult)
  * errors `array`
    * items `string`
  * notifications `array`
    * items [NotificationId](#notificationid)
  * when **required** `string`

### ProgramNew
* ProgramNew `object`
  * code **required** [AnyJSON](#anyjson)
  * enabled `boolean`
  * metadata [Metadata](#metadata)
  * name **required** `string`

### ProgramPatch
* ProgramPatch `object`
  * code [AnyJSON](#anyjson)
  * enabled `boolean`
  * name `string`

### ProgramResource
* ProgramResource `object`
  * entity **required** `string` (values: Program)
  * href **required** `string`
  * id **required** [ProgramId](#programid)

### ResourceRef
* ResourceRef `object`
  * entity **required** `string` (values: Device, Functionality, Notification, Place, Program, User, Account, AccountsBase)
  * href **required** `string`
  * id **required** `string`

### Tag
* Tag `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### TagsPatch
* TagsPatch `object`
  * add `array`: list of tags to add
    * items [Tag](#tag)
  * remove `array`: list of tags to remove
    * items [Tag](#tag)

### TimeZone
* TimeZone `string`: A time zone name from the Time Zone Database at https://www.iana.org/time-zones

### TokenId
* TokenId `string`

### User
* User `object`
  * account [AccountId](#accountid)
  * canLogin **required** `boolean`: true if the user owning the account (can get tokens with /auth/login)
  * email **required** [UserEmail](#useremail)
  * locale **required** [Locale](#locale)
  * metadata [Metadata](#metadata)
  * name **required** `string`
  * phoneNumber [PhoneNumber](#phonenumber)

### UserCreated
* UserCreated `object`: A resource has been created. The `resource` property gives its reference.
  * code **required** `integer` (values: 201)
  * message **required** `string` (values: User created)
  * resource **required** [UserResource](#userresource)

### UserEmail
* UserEmail `string`

### UserId
* UserId `string`: Unique identifier of the *User*

### UserItem
* UserItem `object`
  * canLogin `boolean`: true if the user owning the account (can get tokens with /auth/login)
  * email **required** [UserEmail](#useremail)
  * id **required** [UserId](#userid)
  * locale **required** [Locale](#locale)
  * metadata [MetadataSelected](#metadataselected)
  * name **required** `string`
  * phoneNumber [PhoneNumber](#phonenumber)

### UserMe
* UserMe `object`
  * email **required** [UserEmail](#useremail)
  * id **required** [UserId](#userid)
  * locale **required** [Locale](#locale)
  * login [AccountLogin](#accountlogin)
  * metadata [Metadata](#metadata)
  * name **required** `string`
  * phoneNumber [PhoneNumber](#phonenumber)

### UserMePatch
* UserMePatch `object`
  * locale [Locale](#locale)

### UserNew
* UserNew `object`
  * email **required** [UserEmail](#useremail)
  * locale **required** [Locale](#locale)
  * metadata [Metadata](#metadata)
  * name **required** `string`
  * phoneNumber [PhoneNumber](#phonenumber)

### UserPatch
* UserPatch `object`
  * email [UserEmail](#useremail)
  * locale [Locale](#locale)
  * name `string`
  * phoneNumber [PhoneNumber](#phonenumber)

### UserResource
* UserResource `object`
  * entity **required** `string` (values: User)
  * href **required** `string`
  * id **required** [UserId](#userid)

### UserTokenItem
* UserTokenItem `object`: Token for User API access
  * appName **required** `string`: Application name
  * id **required** [TokenId](#tokenid)
  * lastUse `string`: Time of last use of the token to access the API. Updated at most every 15 minutes. If absent, the token has never been used.
  * places `array`: List of Places to which the User has access. If absent, it means any Place of the account are allowed.
    * items [PlaceItem](#placeitem)
  * refreshTokenExpires `string`: If absent, infinite validity.
  * self `boolean`: True if this token is the one used for this API request
  * user **required** [UserItem](#useritem)

### ZipCode
* ZipCode `string`: Postal code


