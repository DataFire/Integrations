# @datafire/google_homegraph

Client library for HomeGraph API

## Installation and Usage
```bash
npm install --save @datafire/google_homegraph
```
```js
let google_homegraph = require('@datafire/google_homegraph').create({
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



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_homegraph.oauthCallback({
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
google_homegraph.oauthRefresh(null, context)
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

### homegraph.devices.query
Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This request must be authorized using service account credentials from your Actions console project.


```js
google_homegraph.homegraph.devices.query({}, context)
```

#### Input
* input `object`
  * body [QueryRequest](#queryrequest)
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
* output [QueryResponse](#queryresponse)

### homegraph.devices.reportStateAndNotification
Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about the device. See [Implement Report State](https://developers.google.com/assistant/smarthome/develop/report-state) for more information. This method updates the device state according to its declared [traits](https://developers.google.com/assistant/smarthome/concepts/devices-traits). Publishing a new state value outside of these traits will result in an `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using service account credentials from your Actions console project.


```js
google_homegraph.homegraph.devices.reportStateAndNotification({}, context)
```

#### Input
* input `object`
  * body [ReportStateAndNotificationRequest](#reportstateandnotificationrequest)
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
* output [ReportStateAndNotificationResponse](#reportstateandnotificationresponse)

### homegraph.devices.requestSync
Requests Google to send an `action.devices.SYNC` [intent](https://developers.google.com/assistant/smarthome/reference/intent/sync) to your smart home Action to update device metadata for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials from your Actions console project.


```js
google_homegraph.homegraph.devices.requestSync({}, context)
```

#### Input
* input `object`
  * body [RequestSyncDevicesRequest](#requestsyncdevicesrequest)
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
* output [RequestSyncDevicesResponse](#requestsyncdevicesresponse)

### homegraph.devices.sync
Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized using service account credentials from your Actions console project.


```js
google_homegraph.homegraph.devices.sync({}, context)
```

#### Input
* input `object`
  * body [SyncRequest](#syncrequest)
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
* output [SyncResponse](#syncresponse)

### homegraph.agentUsers.delete
Unlinks the given third-party user from your smart home Action. All data related to this user will be deleted. For more details on how users link their accounts, see [fulfillment and authentication](https://developers.google.com/assistant/smarthome/concepts/fulfillment-authentication). The third-party user's identity is passed in via the `agent_user_id` (see DeleteAgentUserRequest). This request must be authorized using service account credentials from your Actions console project.


```js
google_homegraph.homegraph.agentUsers.delete({
  "agentUserId": ""
}, context)
```

#### Input
* input `object`
  * agentUserId **required** `string`: Required. Third-party user ID.
  * requestId `string`: Request ID used for debugging.
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
* output [Empty](#empty)



## Definitions

### AgentDeviceId
* AgentDeviceId `object`: Third-party device ID for one device.
  * id `string`: Third-party device ID.

### AgentOtherDeviceId
* AgentOtherDeviceId `object`: Alternate third-party device ID.
  * agentId `string`: Project ID for your smart home Action.
  * deviceId `string`: Unique third-party device ID.

### Device
* Device `object`: Third-party device definition.
  * attributes `object`: Attributes for the traits supported by the device.
  * customData `object`: Custom device attributes stored in Home Graph and provided to your smart home Action in each [QUERY](https://developers.google.com/assistant/smarthome/reference/intent/query) and [EXECUTE](https://developers.google.com/assistant/smarthome/reference/intent/execute) intent.
  * deviceInfo [DeviceInfo](#deviceinfo)
  * id `string`: Third-party device ID.
  * name [DeviceNames](#devicenames)
  * notificationSupportedByAgent `boolean`: Indicates whether your smart home Action will report notifications to Google for this device via ReportStateAndNotification. If your smart home Action enables users to control device notifications, you should update this field and call RequestSyncDevices.
  * otherDeviceIds `array`: Alternate IDs associated with this device. This is used to identify cloud synced devices enabled for [local fulfillment](https://developers.google.com/assistant/smarthome/concepts/local).
    * items [AgentOtherDeviceId](#agentotherdeviceid)
  * roomHint `string`: Suggested name for the room where this device is installed. Google attempts to use this value during user setup.
  * structureHint `string`: Suggested name for the structure where this device is installed. Google attempts to use this value during user setup.
  * traits `array`: Traits supported by the device. See [device traits](https://developers.google.com/assistant/smarthome/traits).
    * items `string`
  * type `string`: Hardware type of the device. See [device types](https://developers.google.com/assistant/smarthome/guides).
  * willReportState `boolean`: Indicates whether your smart home Action will report state of this device to Google via ReportStateAndNotification.

### DeviceInfo
* DeviceInfo `object`: Device information.
  * hwVersion `string`: Device hardware version.
  * manufacturer `string`: Device manufacturer.
  * model `string`: Device model.
  * swVersion `string`: Device software version.

### DeviceNames
* DeviceNames `object`: Identifiers used to describe the device.
  * defaultNames `array`: List of names provided by the manufacturer rather than the user, such as serial numbers, SKUs, etc.
    * items `string`
  * name `string`: Primary name of the device, generally provided by the user.
  * nicknames `array`: Additional names provided by the user for the device.
    * items `string`

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### QueryRequest
* QueryRequest `object`: Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.
  * agentUserId `string`: Required. Third-party user ID.
  * inputs `array`: Required. Inputs containing third-party device IDs for which to get the device states.
    * items [QueryRequestInput](#queryrequestinput)
  * requestId `string`: Request ID used for debugging.

### QueryRequestInput
* QueryRequestInput `object`: Device ID inputs to QueryRequest.
  * payload [QueryRequestPayload](#queryrequestpayload)

### QueryRequestPayload
* QueryRequestPayload `object`: Payload containing device IDs.
  * devices `array`: Third-party device IDs for which to get the device states.
    * items [AgentDeviceId](#agentdeviceid)

### QueryResponse
* QueryResponse `object`: Response type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call. This should follow the same format as the Google smart home `action.devices.QUERY` [response](https://developers.google.com/assistant/smarthome/reference/intent/query). # Example ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "devices": { "123": { "on": true, "online": true }, "456": { "on": true, "online": true, "brightness": 80, "color": { "name": "cerulean", "spectrumRGB": 31655 } } } } } ```
  * payload [QueryResponsePayload](#queryresponsepayload)
  * requestId `string`: Request ID used for debugging. Copied from the request.

### QueryResponsePayload
* QueryResponsePayload `object`: Payload containing device states information.
  * devices `object`: States of the devices. Map of third-party device ID to struct of device states.

### ReportStateAndNotificationDevice
* ReportStateAndNotificationDevice `object`: The states and notifications specific to a device.
  * notifications `object`: Notifications metadata for devices. See the **Device NOTIFICATIONS** section of the individual trait [reference guides](https://developers.google.com/assistant/smarthome/traits).
  * states `object`: States of devices to update. See the **Device STATES** section of the individual trait [reference guides](https://developers.google.com/assistant/smarthome/traits).

### ReportStateAndNotificationRequest
* ReportStateAndNotificationRequest `object`: Request type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. It may include states, notifications, or both. States and notifications are defined per `device_id` (for example, "123" and "456" in the following example). # Example ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "agentUserId": "1234", "payload": { "devices": { "states": { "123": { "on": true }, "456": { "on": true, "brightness": 10 } }, } } } ```
  * agentUserId `string`: Required. Third-party user ID.
  * eventId `string`: Unique identifier per event (for example, a doorbell press).
  * followUpToken `string`: Token to maintain state in the follow up notification response. Deprecated. See the [notifications guide](https://developers.google.com/assistant/smarthome/develop/notifications) for details on implementing follow up notifications.
  * payload [StateAndNotificationPayload](#stateandnotificationpayload)
  * requestId `string`: Request ID used for debugging.

### ReportStateAndNotificationResponse
* ReportStateAndNotificationResponse `object`: Response type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call.
  * requestId `string`: Request ID copied from ReportStateAndNotificationRequest.

### RequestSyncDevicesRequest
* RequestSyncDevicesRequest `object`: Request type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call.
  * agentUserId `string`: Required. Third-party user ID.
  * async `boolean`: Optional. If set, the request will be added to a queue and a response will be returned immediately. This enables concurrent requests for the given `agent_user_id`, but the caller will not receive any error responses.

### RequestSyncDevicesResponse
* RequestSyncDevicesResponse `object`: Response type for the [`RequestSyncDevices`](#google.home.graph.v1.HomeGraphApiService.RequestSyncDevices) call. Intentionally empty upon success. An HTTP response code is returned with more details upon failure.

### StateAndNotificationPayload
* StateAndNotificationPayload `object`: Payload containing the state and notification information for devices.
  * devices [ReportStateAndNotificationDevice](#reportstateandnotificationdevice)

### SyncRequest
* SyncRequest `object`: Request type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call.
  * agentUserId `string`: Required. Third-party user ID.
  * requestId `string`: Request ID used for debugging.

### SyncResponse
* SyncResponse `object`: Response type for the [`Sync`](#google.home.graph.v1.HomeGraphApiService.Sync) call. This should follow the same format as the Google smart home `action.devices.SYNC` [response](https://developers.google.com/assistant/smarthome/reference/intent/sync). # Example ```json { "requestId": "ff36a3cc-ec34-11e6-b1a0-64510650abcf", "payload": { "agentUserId": "1836.15267389", "devices": [{ "id": "123", "type": "action.devices.types.OUTLET", "traits": [ "action.devices.traits.OnOff" ], "name": { "defaultNames": ["My Outlet 1234"], "name": "Night light", "nicknames": ["wall plug"] }, "willReportState": false, "deviceInfo": { "manufacturer": "lights-out-inc", "model": "hs1234", "hwVersion": "3.2", "swVersion": "11.4" }, "customData": { "fooValue": 74, "barValue": true, "bazValue": "foo" } }] } } ```
  * payload [SyncResponsePayload](#syncresponsepayload)
  * requestId `string`: Request ID used for debugging. Copied from the request.

### SyncResponsePayload
* SyncResponsePayload `object`: Payload containing device information.
  * agentUserId `string`: Third-party user ID
  * devices `array`: Devices associated with the third-party user.
    * items [Device](#device)


