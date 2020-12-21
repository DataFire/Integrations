# @datafire/google_smartdevicemanagement

Client library for Smart Device Management API

## Installation and Usage
```bash
npm install --save @datafire/google_smartdevicemanagement
```
```js
let google_smartdevicemanagement = require('@datafire/google_smartdevicemanagement').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Allow select enterprise partners to access, control, and manage Google and Nest devices programmatically.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_smartdevicemanagement.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_smartdevicemanagement.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### smartdevicemanagement.enterprises.structures.rooms.get
Gets a room managed by the enterprise.


```js
google_smartdevicemanagement.smartdevicemanagement.enterprises.structures.rooms.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123".
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleHomeEnterpriseSdmV1Room](#googlehomeenterprisesdmv1room)

### smartdevicemanagement.enterprises.devices.executeCommand
Executes a command to device managed by the enterprise.


```js
google_smartdevicemanagement.smartdevicemanagement.enterprises.devices.executeCommand({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the device requested. For example: "enterprises/XYZ/devices/123"
  * body [GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest](#googlehomeenterprisesdmv1executedevicecommandrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse](#googlehomeenterprisesdmv1executedevicecommandresponse)

### smartdevicemanagement.enterprises.devices.list
Lists devices managed by the enterprise.


```js
google_smartdevicemanagement.smartdevicemanagement.enterprises.devices.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent enterprise to list devices under. E.g. "enterprises/XYZ".
  * filter `string`: Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing'
  * pageSize `integer`: Optional requested page size. Server may return fewer devices than requested. If unspecified, server will pick an appropriate default.
  * pageToken `string`: Optional token of the page to retrieve.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleHomeEnterpriseSdmV1ListDevicesResponse](#googlehomeenterprisesdmv1listdevicesresponse)

### smartdevicemanagement.enterprises.structures.rooms.list
Lists rooms managed by the enterprise.


```js
google_smartdevicemanagement.smartdevicemanagement.enterprises.structures.rooms.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC".
  * pageSize `integer`: Requested page size. Server may return fewer rooms than requested. If unspecified, server will pick an appropriate default.
  * pageToken `string`: The token of the page to retrieve.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleHomeEnterpriseSdmV1ListRoomsResponse](#googlehomeenterprisesdmv1listroomsresponse)

### smartdevicemanagement.enterprises.structures.list
Lists structures managed by the enterprise.


```js
google_smartdevicemanagement.smartdevicemanagement.enterprises.structures.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent enterprise to list structures under. E.g. "enterprises/XYZ".
  * filter `string`: Optional filter to list structures.
  * pageSize `integer`: Requested page size. Server may return fewer structures than requested. If unspecified, server will pick an appropriate default.
  * pageToken `string`: The token of the page to retrieve.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleHomeEnterpriseSdmV1ListStructuresResponse](#googlehomeenterprisesdmv1liststructuresresponse)



## Definitions

### GoogleHomeEnterpriseSdmV1Device
* GoogleHomeEnterpriseSdmV1Device `object`: Device resource represents an instance of enterprise managed device in the property.
  * name `string`: Required. The resource name of the device. For example: "enterprises/XYZ/devices/123".
  * parentRelations `array`: Assignee details of the device.
    * items [GoogleHomeEnterpriseSdmV1ParentRelation](#googlehomeenterprisesdmv1parentrelation)
  * traits `object`: Output only. Device traits.
  * type `string`: Output only. Type of the device for general display purposes. For example: "THERMOSTAT". The device type should not be used to deduce or infer functionality of the actual device it is assigned to. Instead, use the returned traits for the device.

### GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest
* GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest `object`: Request message for SmartDeviceManagementService.ExecuteDeviceCommand
  * command `string`: The command name to execute, represented by the fully qualified protobuf message name.
  * params `object`: The command message to execute, represented as a Struct.

### GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse
* GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse `object`: Response message for SmartDeviceManagementService.ExecuteDeviceCommand
  * results `object`: The results of executing the command.

### GoogleHomeEnterpriseSdmV1ListDevicesResponse
* GoogleHomeEnterpriseSdmV1ListDevicesResponse `object`: Response message for SmartDeviceManagementService.ListDevices
  * devices `array`: The list of devices.
    * items [GoogleHomeEnterpriseSdmV1Device](#googlehomeenterprisesdmv1device)
  * nextPageToken `string`: The pagination token to retrieve the next page of results.

### GoogleHomeEnterpriseSdmV1ListRoomsResponse
* GoogleHomeEnterpriseSdmV1ListRoomsResponse `object`: Response message for SmartDeviceManagementService.ListRooms
  * nextPageToken `string`: The pagination token to retrieve the next page of results. If this field is omitted, there are no subsequent pages.
  * rooms `array`: The list of rooms.
    * items [GoogleHomeEnterpriseSdmV1Room](#googlehomeenterprisesdmv1room)

### GoogleHomeEnterpriseSdmV1ListStructuresResponse
* GoogleHomeEnterpriseSdmV1ListStructuresResponse `object`: Response message for SmartDeviceManagementService.ListStructures
  * nextPageToken `string`: The pagination token to retrieve the next page of results. If this field is omitted, there are no subsequent pages.
  * structures `array`: The list of structures.
    * items [GoogleHomeEnterpriseSdmV1Structure](#googlehomeenterprisesdmv1structure)

### GoogleHomeEnterpriseSdmV1ParentRelation
* GoogleHomeEnterpriseSdmV1ParentRelation `object`: Represents device relationships, for instance, structure/room to which the device is assigned to. For now this is only filled in the enterprise flow.
  * displayName `string`: Output only. The custom name of the relation -- e.g., structure/room where the device is assigned to.
  * parent `string`: Output only. The name of the relation -- e.g., structure/room where the device is assigned to. For example: "enterprises/XYZ/structures/ABC" or "enterprises/XYZ/structures/ABC/rooms/123"

### GoogleHomeEnterpriseSdmV1Room
* GoogleHomeEnterpriseSdmV1Room `object`: Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.
  * name `string`: Output only. The resource name of the room. For example: "enterprises/XYZ/structures/ABC/rooms/123".
  * traits `object`: Room traits.

### GoogleHomeEnterpriseSdmV1Structure
* GoogleHomeEnterpriseSdmV1Structure `object`: Structure resource represents an instance of enterprise managed home or hotel room.
  * name `string`: Output only. The resource name of the structure. For example: "enterprises/XYZ/structures/ABC".
  * traits `object`: Structure traits.


