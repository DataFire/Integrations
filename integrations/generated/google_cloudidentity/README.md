# @datafire/google_cloudidentity

Client library for Cloud Identity API

## Installation and Usage
```bash
npm install --save @datafire/google_cloudidentity
```
```js
let google_cloudidentity = require('@datafire/google_cloudidentity').create({
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

API for provisioning and managing identity resources.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudidentity.oauthCallback({
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
google_cloudidentity.oauthRefresh(null, context)
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

### cloudidentity.devices.list
Lists/Searches devices.


```js
google_cloudidentity.cloudidentity.devices.list({}, context)
```

#### Input
* input `object`
  * customer `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer.
  * filter `string`: Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character.
  * orderBy `string`: Optional. Order specification for devices in the response. Only one of the following field names may be used to specify the order: `create_time`, `last_sync_time`, `model`, `os_version`, `device_type` and `serial_number`. `desc` may be specified optionally to specify results to be sorted in descending order. Default order is ascending.
  * pageSize `integer`: Optional. The maximum number of Devices to return. If unspecified, at most 20 Devices will be returned. The maximum value is 100; values above 100 will be coerced to 100.
  * pageToken `string`: Optional. A page token, received from a previous `ListDevices` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDevices` must match the call that provided the page token.
  * view `string` (values: VIEW_UNSPECIFIED, COMPANY_INVENTORY, USER_ASSIGNED_DEVICES): Optional. The view to use for the List request.
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
* output [ListDevicesResponse](#listdevicesresponse)

### cloudidentity.devices.create
Creates a device. Only company-owned device may be created. **Note**: This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium


```js
google_cloudidentity.cloudidentity.devices.create({}, context)
```

#### Input
* input `object`
  * body [CreateDeviceRequest](#createdevicerequest)
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
* output [Operation](#operation)

### cloudidentity.groups.list
Lists the `Group`s under a customer or namespace.


```js
google_cloudidentity.cloudidentity.groups.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `View.BASIC` and to 50 for `View.FULL`. Must not be greater than 1000 for `View.BASIC` or 500 for `View.FULL`.
  * pageToken `string`: The `next_page_token` value returned from a previous list request, if any.
  * parent `string`: Required. The parent resource under which to list all `Group`s. Must be of the form `identitysources/{identity_source_id}` for external- identity-mapped groups or `customers/{customer_id}` for Google Groups.
  * view `string` (values: VIEW_UNSPECIFIED, BASIC, FULL): The level of detail to be returned. If unspecified, defaults to `View.BASIC`.
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
* output [ListGroupsResponse](#listgroupsresponse)

### cloudidentity.groups.create
Creates a `Group`.


```js
google_cloudidentity.cloudidentity.groups.create({}, context)
```

#### Input
* input `object`
  * initialGroupConfig `string` (values: INITIAL_GROUP_CONFIG_UNSPECIFIED, WITH_INITIAL_OWNER, EMPTY): Required. The initial configuration option for the `Group`.
  * body [Group](#group)
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
* output [Operation](#operation)

### cloudidentity.groups.lookup
Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.


```js
google_cloudidentity.cloudidentity.groups.lookup({}, context)
```

#### Input
* input `object`
  * groupKey.id `string`: The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
  * groupKey.namespace `string`: The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}.
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
* output [LookupGroupNameResponse](#lookupgroupnameresponse)

### cloudidentity.groups.search
Searches for `Group`s matching a specified query.


```js
google_cloudidentity.cloudidentity.groups.search({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.
  * pageToken `string`: The `next_page_token` value returned from a previous search request, if any.
  * query `string`: Required. The search query. Must be specified in [Common Expression Language](https://opensource.google/projects/cel). May only contain equality operators on the parent and inclusion operators on labels (e.g., `parent == 'customers/{customer_id}' && 'cloudidentity.googleapis.com/groups.discussion_forum' in labels`).
  * view `string` (values: BASIC, FULL): The level of detail to be returned. If unspecified, defaults to `View.BASIC`.
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
* output [SearchGroupsResponse](#searchgroupsresponse)

### cloudidentity.groups.memberships.delete
Deletes a `Membership`.


```js
google_cloudidentity.cloudidentity.groups.memberships.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to delete. Must be of the form `groups/{group_id}/memberships/{membership_id}`.
  * customer `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
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
* output [Operation](#operation)

### cloudidentity.groups.memberships.get
Retrieves a `Membership`.


```js
google_cloudidentity.cloudidentity.groups.memberships.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` to retrieve. Must be of the form `groups/{group_id}/memberships/{membership_id}`.
  * customer `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
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
* output [Membership](#membership)

### cloudidentity.groups.patch
Updates a `Group`.


```js
google_cloudidentity.cloudidentity.groups.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`.
  * updateMask `string`: Required. The fully-qualified names of fields to update. May only contain the following fields: `display_name`, `description`.
  * body [Group](#group)
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
* output [Operation](#operation)

### cloudidentity.devices.deviceUsers.approve
Approves device to access user data.


```js
google_cloudidentity.cloudidentity.devices.deviceUsers.approve({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
  * body [ApproveDeviceUserRequest](#approvedeviceuserrequest)
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
* output [Operation](#operation)

### cloudidentity.devices.deviceUsers.block
Blocks device from accessing user data


```js
google_cloudidentity.cloudidentity.devices.deviceUsers.block({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
  * body [BlockDeviceUserRequest](#blockdeviceuserrequest)
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
* output [Operation](#operation)

### cloudidentity.devices.deviceUsers.cancelWipe
Cancels an unfinished user account wipe. This operation can be used to cancel device wipe in the gap between the wipe operation returning success and the device being wiped.


```js
google_cloudidentity.cloudidentity.devices.deviceUsers.cancelWipe({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
  * body [CancelWipeDeviceUserRequest](#cancelwipedeviceuserrequest)
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
* output [Operation](#operation)

### cloudidentity.groups.memberships.modifyMembershipRoles
Modifies the `MembershipRole`s of a `Membership`.


```js
google_cloudidentity.cloudidentity.groups.memberships.modifyMembershipRoles({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership` whose roles are to be modified. Must be of the form `groups/{group_id}/memberships/{membership_id}`.
  * body [ModifyMembershipRolesRequest](#modifymembershiprolesrequest)
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
* output [ModifyMembershipRolesResponse](#modifymembershiprolesresponse)

### cloudidentity.devices.deviceUsers.wipe
Wipes the user's account on a device.


```js
google_cloudidentity.cloudidentity.devices.deviceUsers.wipe({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}/deviceUsers/{device_user_id}`, where device_id is the unique ID assigned to the Device, and device_user_id is the unique ID assigned to the User.
  * body [WipeDeviceUserRequest](#wipedeviceuserrequest)
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
* output [Operation](#operation)

### cloudidentity.devices.deviceUsers.list
Lists/Searches DeviceUsers.


```js
google_cloudidentity.cloudidentity.devices.deviceUsers.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. To list all DeviceUsers, set this to "devices/-". To list all DeviceUsers owned by a device, set this to the resource name of the device. Format: devices/{device}
  * customer `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
  * filter `string`: Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to [Mobile device search fields](https://developers.google.com/admin-sdk/directory/v1/search-operators). Multiple search fields are separated by the space character.
  * orderBy `string`: Optional. Order specification for devices in the response.
  * pageSize `integer`: Optional. The maximum number of DeviceUsers to return. If unspecified, at most 5 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
  * pageToken `string`: Optional. A page token, received from a previous `ListDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBooks` must match the call that provided the page token.
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
* output [ListDeviceUsersResponse](#listdeviceusersresponse)

### cloudidentity.groups.memberships.list
Lists the `Membership`s within a `Group`.


```js
google_cloudidentity.cloudidentity.groups.memberships.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group_id}`.
  * pageSize `integer`: The maximum number of results to return. Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a `next_page_token`. If unspecified, defaults to 200 for `GroupView.BASIC` and to 50 for `GroupView.FULL`. Must not be greater than 1000 for `GroupView.BASIC` or 500 for `GroupView.FULL`.
  * pageToken `string`: The `next_page_token` value returned from a previous search request, if any.
  * view `string` (values: BASIC, FULL): The level of detail to be returned. If unspecified, defaults to `MembershipView.BASIC`.
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
* output [ListMembershipsResponse](#listmembershipsresponse)

### cloudidentity.groups.memberships.create
Creates a `Membership`.


```js
google_cloudidentity.cloudidentity.groups.memberships.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent `Group` resource under which to create the `Membership`. Must be of the form `groups/{group_id}`.
  * body [Membership](#membership)
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
* output [Operation](#operation)

### cloudidentity.groups.memberships.checkTransitiveMembership
Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.


```js
google_cloudidentity.cloudidentity.groups.memberships.checkTransitiveMembership({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to check the transitive membership in. Format: `groups/{group_id}`, where `group_id` is the unique id assigned to the Group to which the Membership belongs to.
  * query `string`: Required. A CEL expression that MUST include member specification. This is a `required` field. Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value'`
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
* output [CheckTransitiveMembershipResponse](#checktransitivemembershipresponse)

### cloudidentity.groups.memberships.getMembershipGraph
Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.


```js
google_cloudidentity.cloudidentity.groups.memberships.getMembershipGraph({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group to which the Membership belongs to. group_id can be a wildcard collection id "-". When a group_id is specified, the membership graph will be constrained to paths between the member (defined in the query) and the parent. If a wildcard collection is provided, all membership paths connected to the member will be returned.
  * query `string`: Required. A CEL expression that MUST include member specification AND label(s). Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value' && in labels`
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
* output [Operation](#operation)

### cloudidentity.groups.memberships.lookup
Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.


```js
google_cloudidentity.cloudidentity.groups.memberships.lookup({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent `Group` resource under which to lookup the `Membership` name. Must be of the form `groups/{group_id}`.
  * memberKey.id `string`: The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
  * memberKey.namespace `string`: The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}.
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
* output [LookupMembershipNameResponse](#lookupmembershipnameresponse)

### cloudidentity.groups.memberships.searchTransitiveGroups
Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.


```js
google_cloudidentity.cloudidentity.groups.memberships.searchTransitiveGroups({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is always '-' as this API will search across all groups for a given member.
  * pageSize `integer`: The default page size is 200 (max 1000).
  * pageToken `string`: The next_page_token value returned from a previous list request, if any.
  * query `string`: Required. A CEL expression that MUST include member specification AND label(s). This is a `required` field. Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Certain groups are uniquely identified by both a 'member_key_id' and a 'member_key_namespace', which requires an additional query input: 'member_key_namespace'. Example query: `member_key_id == 'member_key_id_value' && in labels`
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
* output [SearchTransitiveGroupsResponse](#searchtransitivegroupsresponse)

### cloudidentity.groups.memberships.searchTransitiveMemberships
Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.


```js
google_cloudidentity.cloudidentity.groups.memberships.searchTransitiveMemberships({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: [Resource name](https://cloud.google.com/apis/design/resource_names) of the group to search transitive memberships in. Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to the Group.
  * pageSize `integer`: The default page size is 200 (max 1000).
  * pageToken `string`: The next_page_token value returned from a previous list request, if any.
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
* output [SearchTransitiveMembershipsResponse](#searchtransitivemembershipsresponse)

### cloudidentity.devices.deviceUsers.lookup
Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request. This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND. Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified. - iOS: No properties need to be passed, the caller's credentials are sufficient to identify the corresponding DeviceUser. - Android: Specifying the 'android_id' field is required. - Desktop: Specifying the 'raw_resource_id' field is required.


```js
google_cloudidentity.cloudidentity.devices.deviceUsers.lookup({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Must be set to "devices/-/deviceUsers" to search across all DeviceUser belonging to the user.
  * androidId `string`: Android Id returned by [Settings.Secure#ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID).
  * pageSize `integer`: The maximum number of DeviceUsers to return. If unspecified, at most 20 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
  * pageToken `string`: A page token, received from a previous `LookupDeviceUsers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `LookupDeviceUsers` must match the call that provided the page token.
  * rawResourceId `string`: Raw Resource Id used by Google Endpoint Verification. If the user is enrolled into Google Endpoint Verification, this id will be saved as the 'device_resource_id' field in the following platform dependent files. Mac: ~/.secureConnect/context_aware_config.json Windows: C:\Users\%USERPROFILE%\.secureConnect\context_aware_config.json Linux: ~/.secureConnect/context_aware_config.json
  * userId `string`: The user whose DeviceUser's resource name will be fetched. Must be set to 'me' to fetch the DeviceUser's resource name for the calling user.
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
* output [LookupSelfDeviceUsersResponse](#lookupselfdeviceusersresponse)



## Definitions

### AndroidAttributes
* AndroidAttributes `object`: Resource representing the Android specific attributes of a Device.
  * enabledUnknownSources `boolean`: Whether applications from unknown sources can be installed on device.
  * ownerProfileAccount `boolean`: Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles.
  * ownershipPrivilege `string` (values: OWNERSHIP_PRIVILEGE_UNSPECIFIED, DEVICE_ADMINISTRATOR, PROFILE_OWNER, DEVICE_OWNER): Ownership privileges on device.
  * supportsWorkProfile `boolean`: Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy.

### ApproveDeviceUserRequest
* ApproveDeviceUserRequest `object`: Request message for approving the device to access user data.
  * customer `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.

### ApproveDeviceUserResponse
* ApproveDeviceUserResponse `object`: Response message for approving the device to access user data.
  * deviceUser [DeviceUser](#deviceuser)

### BlockDeviceUserRequest
* BlockDeviceUserRequest `object`: Request message for blocking account on device.
  * customer `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.

### BlockDeviceUserResponse
* BlockDeviceUserResponse `object`: Response message for blocking the device from accessing user data.
  * deviceUser [DeviceUser](#deviceuser)

### CancelWipeDeviceRequest
* CancelWipeDeviceRequest `object`: Request message for cancelling an unfinished device wipe.
  * customer `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.

### CancelWipeDeviceResponse
* CancelWipeDeviceResponse `object`: Response message for cancelling an unfinished device wipe.
  * device [Device](#device)

### CancelWipeDeviceUserRequest
* CancelWipeDeviceUserRequest `object`: Request message for cancelling an unfinished user account wipe.
  * customer `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.

### CancelWipeDeviceUserResponse
* CancelWipeDeviceUserResponse `object`: Response message for cancelling an unfinished user account wipe.
  * deviceUser [DeviceUser](#deviceuser)

### CheckTransitiveMembershipResponse
* CheckTransitiveMembershipResponse `object`: The response message for MembershipsService.CheckTransitiveMembership.
  * hasMembership `boolean`: Response does not include the possible roles of a member since the behavior of this rpc is not all-or-nothing unlike the other rpcs. So, it may not be possible to list all the roles definitively, due to possible lack of authorization in some of the paths.

### ClientState
* ClientState `object`: Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users
  * assetTags `array`: The caller can specify asset tags for this resource
    * items `string`
  * complianceState `string` (values: COMPLIANCE_STATE_UNSPECIFIED, COMPLIANT, NON_COMPLIANT): The compliance state of the resource as specified by the API client.
  * createTime `string`: Output only. The time the client state data was created.
  * customId `string`: This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field.
  * etag `string`: The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest
  * healthScore `string` (values: HEALTH_SCORE_UNSPECIFIED, VERY_POOR, POOR, NEUTRAL, GOOD, VERY_GOOD): The Health score of the resource
  * keyValuePairs `object`: The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map.
  * lastUpdateTime `string`: Output only. The time the client state data was last updated.
  * managed `string` (values: MANAGED_STATE_UNSPECIFIED, MANAGED, UNMANAGED): The management state of the resource as specified by the API client.
  * name `string`: Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}`, where partner_id corresponds to the partner storing the data.
  * ownerType `string` (values: OWNER_TYPE_UNSPECIFIED, OWNER_TYPE_CUSTOMER, OWNER_TYPE_PARTNER): Output only. The owner of the ClientState
  * scoreReason `string`: A descriptive cause of the health score.

### CreateDeviceRequest
* CreateDeviceRequest `object`: Request message for creating a Company Owned device.
  * customer `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.
  * device [Device](#device)

### CustomAttributeValue
* CustomAttributeValue `object`: Additional custom attribute values may be one of these types
  * boolValue `boolean`: Represents a boolean value.
  * numberValue `number`: Represents a double value.
  * stringValue `string`: Represents a string value.

### Device
* Device `object`: A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
  * androidSpecificAttributes [AndroidAttributes](#androidattributes)
  * assetTag `string`: Asset tag of the device.
  * basebandVersion `string`: Output only. Baseband version of the device.
  * bootloaderVersion `string`: Output only. Device bootloader version. Example: 0.6.7.
  * brand `string`: Output only. Device brand. Example: Samsung.
  * buildNumber `string`: Output only. Build number of the device.
  * compromisedState `string` (values: COMPROMISED_STATE_UNSPECIFIED, COMPROMISED, UNCOMPROMISED): Output only. Represents whether the Device is compromised.
  * createTime `string`: Output only. When the Company-Owned device was imported. This field is empty for BYOD devices.
  * deviceType `string` (values: DEVICE_TYPE_UNSPECIFIED, ANDROID, IOS, GOOGLE_SYNC, WINDOWS, MAC_OS, LINUX, CHROME_OS): Output only. Type of device.
  * enabledDeveloperOptions `boolean`: Output only. Whether developer options is enabled on device.
  * enabledUsbDebugging `boolean`: Output only. Whether USB debugging is enabled on device.
  * encryptionState `string` (values: ENCRYPTION_STATE_UNSPECIFIED, UNSUPPORTED_BY_DEVICE, ENCRYPTED, NOT_ENCRYPTED): Output only. Device encryption state.
  * imei `string`: Output only. IMEI number of device if GSM device; empty otherwise.
  * kernelVersion `string`: Output only. Kernel version of the device.
  * lastSyncTime `string`: Most recent time when device synced with this service.
  * managementState `string` (values: MANAGEMENT_STATE_UNSPECIFIED, APPROVED, BLOCKED, PENDING, UNPROVISIONED, WIPING, WIPED): Output only. Management state of the device
  * manufacturer `string`: Output only. Device manufacturer. Example: Motorola.
  * meid `string`: Output only. MEID number of device if CDMA device; empty otherwise.
  * model `string`: Output only. Model name of device. Example: Pixel 3.
  * name `string`: Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique id assigned to the Device.
  * networkOperator `string`: Output only. Mobile or network operator of device, if available.
  * osVersion `string`: Output only. OS version of the device. Example: Android 8.1.0.
  * otherAccounts `array`: Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account's domain has only one account. Examples: "com.example", "xyz.com".
    * items `string`
  * ownerType `string` (values: DEVICE_OWNERSHIP_UNSPECIFIED, COMPANY, BYOD): Output only. Whether the device is owned by the company or an individual
  * releaseVersion `string`: Output only. OS release version. Example: 6.0.
  * securityPatchTime `string`: Output only. OS security patch update time on device.
  * serialNumber `string`: Serial Number of device. Example: HT82V1A01076.
  * wifiMacAddresses `array`: WiFi MAC addresses of device.
    * items `string`

### DeviceUser
* DeviceUser `object`: Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
  * compromisedState `string` (values: COMPROMISED_STATE_UNSPECIFIED, COMPROMISED, NOT_COMPROMISED): Compromised State of the DeviceUser object
  * createTime `string`: When the user first signed in to the device
  * firstSyncTime `string`: Output only. Most recent time when user registered with this service.
  * languageCode `string`: Output only. Default locale used on device, in IETF BCP-47 format.
  * lastSyncTime `string`: Output only. Last time when user synced with policies.
  * managementState `string` (values: MANAGEMENT_STATE_UNSPECIFIED, WIPING, WIPED, APPROVED, BLOCKED, PENDING_APPROVAL, UNENROLLED): Output only. Management state of the user on the device.
  * name `string`: Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device_id}/deviceUsers/{user_id}`, where user_id is the ID of the user associated with the user session.
  * passwordState `string` (values: PASSWORD_STATE_UNSPECIFIED, PASSWORD_SET, PASSWORD_NOT_SET): Password state of the DeviceUser object
  * userAgent `string`: Output only. User agent on the device for this specific user
  * userEmail `string`: Email address of the user registered on the device.

### DynamicGroupMetadata
* DynamicGroupMetadata `object`: Dynamic group metadata like queries and status.
  * queries `array`: Memberships will be the union of all queries. Only one entry with USER resource is currently supported.
    * items [DynamicGroupQuery](#dynamicgroupquery)
  * status [DynamicGroupStatus](#dynamicgroupstatus)

### DynamicGroupQuery
* DynamicGroupQuery `object`: Defines a query on a resource.
  * query `string`: Query that determines the memberships of the dynamic group. Examples: All users with at least one `organizations.department` of engineering. `user.organizations.exists(org, org.department=='engineering')` All users with at least one location that has `area` of `foo` and `building_id` of `bar`. `user.locations.exists(loc, loc.area=='foo' && loc.building_id=='bar')`
  * resourceType `string` (values: RESOURCE_TYPE_UNSPECIFIED, USER)

### DynamicGroupStatus
* DynamicGroupStatus `object`: The current status of a dynamic group along with timestamp.
  * status `string` (values: STATUS_UNSPECIFIED, UP_TO_DATE, UPDATING_MEMBERSHIPS): Status of the dynamic group.
  * statusTime `string`: The latest time at which the dynamic group is guaranteed to be in the given status. If status is `UP_TO_DATE`, the latest time at which the dynamic group was confirmed to be up-to-date. If status is `UPDATING_MEMBERSHIPS`, the time at which dynamic group was created.

### EntityKey
* EntityKey `object`: A unique identifier for an entity in the Cloud Identity Groups API. An entity can represent either a group with an optional `namespace` or a user without a `namespace`. The combination of `id` and `namespace` must be unique; however, the same `id` can be used with different `namespace`s.
  * id `string`: The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
  * namespace `string`: The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}.

### ExpiryDetail
* ExpiryDetail `object`: The `MembershipRole` expiry details.
  * expireTime `string`: The time at which the `MembershipRole` will expire.

### GetMembershipGraphResponse
* GetMembershipGraphResponse `object`: The response message for MembershipsService.GetMembershipGraph.
  * adjacencyList `array`: The membership graph's path information represented as an adjacency list.
    * items [MembershipAdjacencyList](#membershipadjacencylist)
  * groups `array`: The resources representing each group in the adjacency list. Each group in this list can be correlated to a 'group' of the MembershipAdjacencyList using the 'name' of the Group resource.
    * items [Group](#group)

### GoogleAppsCloudidentityDevicesV1AndroidAttributes
* GoogleAppsCloudidentityDevicesV1AndroidAttributes `object`: Resource representing the Android specific attributes of a Device.
  * enabledUnknownSources `boolean`: Whether applications from unknown sources can be installed on device.
  * ownerProfileAccount `boolean`: Whether this account is on an owner/primary profile. For phones, only true for owner profiles. Android 4+ devices can have secondary or restricted user profiles.
  * ownershipPrivilege `string` (values: OWNERSHIP_PRIVILEGE_UNSPECIFIED, DEVICE_ADMINISTRATOR, PROFILE_OWNER, DEVICE_OWNER): Ownership privileges on device.
  * supportsWorkProfile `boolean`: Whether device supports Android work profiles. If false, this service will not block access to corp data even if an administrator turns on the "Enforce Work Profile" policy.

### GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse
* GoogleAppsCloudidentityDevicesV1ApproveDeviceUserResponse `object`: Response message for approving the device to access user data.
  * deviceUser [GoogleAppsCloudidentityDevicesV1DeviceUser](#googleappscloudidentitydevicesv1deviceuser)

### GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse
* GoogleAppsCloudidentityDevicesV1BlockDeviceUserResponse `object`: Response message for blocking the device from accessing user data.
  * deviceUser [GoogleAppsCloudidentityDevicesV1DeviceUser](#googleappscloudidentitydevicesv1deviceuser)

### GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse
* GoogleAppsCloudidentityDevicesV1CancelWipeDeviceResponse `object`: Response message for cancelling an unfinished device wipe.
  * device [GoogleAppsCloudidentityDevicesV1Device](#googleappscloudidentitydevicesv1device)

### GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse
* GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserResponse `object`: Response message for cancelling an unfinished user account wipe.
  * deviceUser [GoogleAppsCloudidentityDevicesV1DeviceUser](#googleappscloudidentitydevicesv1deviceuser)

### GoogleAppsCloudidentityDevicesV1ClientState
* GoogleAppsCloudidentityDevicesV1ClientState `object`: Represents the state associated with an API client calling the Devices API. Resource representing ClientState and supports updates from API users
  * assetTags `array`: The caller can specify asset tags for this resource
    * items `string`
  * complianceState `string` (values: COMPLIANCE_STATE_UNSPECIFIED, COMPLIANT, NON_COMPLIANT): The compliance state of the resource as specified by the API client.
  * createTime `string`: Output only. The time the client state data was created.
  * customId `string`: This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field.
  * etag `string`: The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest
  * healthScore `string` (values: HEALTH_SCORE_UNSPECIFIED, VERY_POOR, POOR, NEUTRAL, GOOD, VERY_GOOD): The Health score of the resource. The Health score is the callers specification of the condition of the device from a usability point of view. For example, a third-party device management provider may specify a health score based on its compliance with organizational policies.
  * keyValuePairs `object`: The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map.
  * lastUpdateTime `string`: Output only. The time the client state data was last updated.
  * managed `string` (values: MANAGED_STATE_UNSPECIFIED, MANAGED, UNMANAGED): The management state of the resource as specified by the API client.
  * name `string`: Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the ClientState in format: `devices/{device_id}/deviceUsers/{device_user_id}/clientState/{partner_id}`, where partner_id corresponds to the partner storing the data. For partners belonging to the "BeyondCorp Alliance", this is the partner ID specified to you by Google. For all other callers, this is a string of the form: `{customer_id}-suffix`, where `customer_id` is your customer ID. The *suffix* is any string the caller specifies. This string will be displayed verbatim in the administration console. This suffix is used in setting up Custom Access Levels in Context-Aware Access. Your organization's customer ID can be obtained from the URL: `GET https://www.googleapis.com/admin/directory/v1/customers/my_customer` The `id` field in the response contains the customer ID starting with the letter 'C'. The customer ID to be used in this API is the string after the letter 'C' (not including 'C')
  * ownerType `string` (values: OWNER_TYPE_UNSPECIFIED, OWNER_TYPE_CUSTOMER, OWNER_TYPE_PARTNER): Output only. The owner of the ClientState
  * scoreReason `string`: A descriptive cause of the health score.

### GoogleAppsCloudidentityDevicesV1CustomAttributeValue
* GoogleAppsCloudidentityDevicesV1CustomAttributeValue `object`: Additional custom attribute values may be one of these types
  * boolValue `boolean`: Represents a boolean value.
  * numberValue `number`: Represents a double value.
  * stringValue `string`: Represents a string value.

### GoogleAppsCloudidentityDevicesV1Device
* GoogleAppsCloudidentityDevicesV1Device `object`:  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
  * androidSpecificAttributes [GoogleAppsCloudidentityDevicesV1AndroidAttributes](#googleappscloudidentitydevicesv1androidattributes)
  * assetTag `string`: Asset tag of the device.
  * basebandVersion `string`: Output only. Baseband version of the device.
  * bootloaderVersion `string`: Output only. Device bootloader version. Example: 0.6.7.
  * brand `string`: Output only. Device brand. Example: Samsung.
  * buildNumber `string`: Output only. Build number of the device.
  * compromisedState `string` (values: COMPROMISED_STATE_UNSPECIFIED, COMPROMISED, UNCOMPROMISED): Output only. Represents whether the Device is compromised.
  * createTime `string`: Output only. When the Company-Owned device was imported. This field is empty for BYOD devices.
  * deviceType `string` (values: DEVICE_TYPE_UNSPECIFIED, ANDROID, IOS, GOOGLE_SYNC, WINDOWS, MAC_OS, LINUX, CHROME_OS): Output only. Type of device.
  * enabledDeveloperOptions `boolean`: Output only. Whether developer options is enabled on device.
  * enabledUsbDebugging `boolean`: Output only. Whether USB debugging is enabled on device.
  * encryptionState `string` (values: ENCRYPTION_STATE_UNSPECIFIED, UNSUPPORTED_BY_DEVICE, ENCRYPTED, NOT_ENCRYPTED): Output only. Device encryption state.
  * imei `string`: Output only. IMEI number of device if GSM device; empty otherwise.
  * kernelVersion `string`: Output only. Kernel version of the device.
  * lastSyncTime `string`: Most recent time when device synced with this service.
  * managementState `string` (values: MANAGEMENT_STATE_UNSPECIFIED, APPROVED, BLOCKED, PENDING, UNPROVISIONED, WIPING, WIPED): Output only. Management state of the device
  * manufacturer `string`: Output only. Device manufacturer. Example: Motorola.
  * meid `string`: Output only. MEID number of device if CDMA device; empty otherwise.
  * model `string`: Output only. Model name of device. Example: Pixel 3.
  * name `string`: Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: `devices/{device_id}`, where device_id is the unique id assigned to the Device.
  * networkOperator `string`: Output only. Mobile or network operator of device, if available.
  * osVersion `string`: Output only. OS version of the device. Example: Android 8.1.0.
  * otherAccounts `array`: Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account's domain has only one account. Examples: "com.example", "xyz.com".
    * items `string`
  * ownerType `string` (values: DEVICE_OWNERSHIP_UNSPECIFIED, COMPANY, BYOD): Output only. Whether the device is owned by the company or an individual
  * releaseVersion `string`: Output only. OS release version. Example: 6.0.
  * securityPatchTime `string`: Output only. OS security patch update time on device.
  * serialNumber `string`: Serial Number of device. Example: HT82V1A01076.
  * wifiMacAddresses `array`: WiFi MAC addresses of device.
    * items `string`

### GoogleAppsCloudidentityDevicesV1DeviceUser
* GoogleAppsCloudidentityDevicesV1DeviceUser `object`: Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
  * compromisedState `string` (values: COMPROMISED_STATE_UNSPECIFIED, COMPROMISED, NOT_COMPROMISED): Compromised State of the DeviceUser object
  * createTime `string`: When the user first signed in to the device
  * firstSyncTime `string`: Output only. Most recent time when user registered with this service.
  * languageCode `string`: Output only. Default locale used on device, in IETF BCP-47 format.
  * lastSyncTime `string`: Output only. Last time when user synced with policies.
  * managementState `string` (values: MANAGEMENT_STATE_UNSPECIFIED, WIPING, WIPED, APPROVED, BLOCKED, PENDING_APPROVAL, UNENROLLED): Output only. Management state of the user on the device.
  * name `string`: Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the DeviceUser in format: `devices/{device_id}/deviceUsers/{user_id}`, where user_id is the ID of the user associated with the user session.
  * passwordState `string` (values: PASSWORD_STATE_UNSPECIFIED, PASSWORD_SET, PASSWORD_NOT_SET): Password state of the DeviceUser object
  * userAgent `string`: Output only. User agent on the device for this specific user
  * userEmail `string`: Email address of the user registered on the device.

### GoogleAppsCloudidentityDevicesV1WipeDeviceResponse
* GoogleAppsCloudidentityDevicesV1WipeDeviceResponse `object`: Response message for wiping all data on the device.
  * device [GoogleAppsCloudidentityDevicesV1Device](#googleappscloudidentitydevicesv1device)

### GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse
* GoogleAppsCloudidentityDevicesV1WipeDeviceUserResponse `object`: Response message for wiping the user's account from the device.
  * deviceUser [GoogleAppsCloudidentityDevicesV1DeviceUser](#googleappscloudidentitydevicesv1deviceuser)

### Group
* Group `object`: A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.
  * additionalGroupKeys `array`: Additional entity key aliases for a Group.
    * items [EntityKey](#entitykey)
  * createTime `string`: Output only. The time when the `Group` was created.
  * description `string`: An extended description to help users determine the purpose of a `Group`. Must not be longer than 4,096 characters.
  * displayName `string`: The display name of the `Group`.
  * dynamicGroupMetadata [DynamicGroupMetadata](#dynamicgroupmetadata)
  * groupKey [EntityKey](#entitykey)
  * labels `object`: Required. One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. Google Groups are the default type of group and have a label with a key of `cloudidentity.googleapis.com/groups.discussion_forum` and an empty value. Existing Google Groups can have an additional label with a key of `cloudidentity.googleapis.com/groups.security` and an empty value added to them. **This is an immutable change and the security label cannot be removed once added.** Dynamic groups have a label with a key of `cloudidentity.googleapis.com/groups.dynamic`. Identity-mapped groups for Cloud Search have a label with a key of `system/groups/external` and an empty value. Examples: {"cloudidentity.googleapis.com/groups.discussion_forum": ""} or {"system/groups/external": ""}.
  * name `string`: Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`.
  * parent `string`: Required. Immutable. The resource name of the entity under which this `Group` resides in the Cloud Identity resource hierarchy. Must be of the form `identitysources/{identity_source_id}` for external- identity-mapped groups or `customers/{customer_id}` for Google Groups.
  * updateTime `string`: Output only. The time when the `Group` was last updated.

### GroupRelation
* GroupRelation `object`: Message representing a transitive group of a user or a group.
  * displayName `string`: Display name for this group.
  * group `string`: Resource name for this group.
  * groupKey [EntityKey](#entitykey)
  * labels `object`: Labels for Group resource.
  * relationType `string` (values: RELATION_TYPE_UNSPECIFIED, DIRECT, INDIRECT, DIRECT_AND_INDIRECT): The relation between the member and the transitive group.
  * roles `array`: Membership roles of the member for the group.
    * items [TransitiveMembershipRole](#transitivemembershiprole)

### ListClientStatesResponse
* ListClientStatesResponse `object`: Response message that is returned in LRO result of ListClientStates Operation.
  * clientStates `array`: Client states meeting the list restrictions.
    * items [ClientState](#clientstate)
  * nextPageToken `string`: Token to retrieve the next page of results. Empty if there are no more results.

### ListDeviceUsersResponse
* ListDeviceUsersResponse `object`: Response message that is returned from the ListDeviceUsers method.
  * deviceUsers `array`: Devices meeting the list restrictions.
    * items [DeviceUser](#deviceuser)
  * nextPageToken `string`: Token to retrieve the next page of results. Empty if there are no more results.

### ListDevicesResponse
* ListDevicesResponse `object`: Response message that is returned from the ListDevices method.
  * devices `array`: Devices meeting the list restrictions.
    * items [Device](#device)
  * nextPageToken `string`: Token to retrieve the next page of results. Empty if there are no more results.

### ListGroupsResponse
* ListGroupsResponse `object`: The response message for GroupsService.ListGroups.
  * groups `array`: The `Group`s under the specified `parent`.
    * items [Group](#group)
  * nextPageToken `string`: A continuation token to retrieve the next page of results, or empty if there are no more results available.

### ListMembershipsResponse
* ListMembershipsResponse `object`: The response message for MembershipsService.ListMemberships.
  * memberships `array`: The `Membership`s under the specified `parent`.
    * items [Membership](#membership)
  * nextPageToken `string`: A continuation token to retrieve the next page of results, or empty if there are no more results available.

### LookupGroupNameResponse
* LookupGroupNameResponse `object`: The response message for GroupsService.LookupGroupName.
  * name `string`: Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Group`.

### LookupMembershipNameResponse
* LookupMembershipNameResponse `object`: The response message for MembershipsService.LookupMembershipName.
  * name `string`: The [resource name](https://cloud.google.com/apis/design/resource_names) of the looked-up `Membership`. Must be of the form `groups/{group_id}/memberships/{membership_id}`.

### LookupSelfDeviceUsersResponse
* LookupSelfDeviceUsersResponse `object`: Response containing resource names of the DeviceUsers associated with the caller's credentials.
  * customer `string`: The obfuscated customer Id that may be passed back to other Devices API methods such as List, Get, etc.
  * names `array`: [Resource names](https://cloud.google.com/apis/design/resource_names) of the DeviceUsers in the format: `devices/{device_id}/deviceUsers/{user_resource_id}`, where device_id is the unique ID assigned to a Device and user_resource_id is the unique user ID
    * items `string`
  * nextPageToken `string`: Token to retrieve the next page of results. Empty if there are no more results.

### MemberRelation
* MemberRelation `object`: Message representing a transitive membership of a group.
  * member `string`: Resource name for this member if member is a GROUP, otherwise it is empty.
  * preferredMemberKey `array`: Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace.
    * items [EntityKey](#entitykey)
  * relationType `string` (values: RELATION_TYPE_UNSPECIFIED, DIRECT, INDIRECT, DIRECT_AND_INDIRECT): The relation between the group and the transitive member.
  * roles `array`: The membership role details (i.e name of role and expiry time).
    * items [TransitiveMembershipRole](#transitivemembershiprole)

### Membership
* Membership `object`: A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a "member".
  * createTime `string`: Output only. The time when the `Membership` was created.
  * memberKey [EntityKey](#entitykey)
  * name `string`: Output only. The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Membership`. Shall be of the form `groups/{group_id}/memberships/{membership_id}`.
  * preferredMemberKey [EntityKey](#entitykey)
  * roles `array`: The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.
    * items [MembershipRole](#membershiprole)
  * type `string` (values: TYPE_UNSPECIFIED, USER, SERVICE_ACCOUNT, GROUP, OTHER): Output only. The type of the membership.
  * updateTime `string`: Output only. The time when the `Membership` was last updated.

### MembershipAdjacencyList
* MembershipAdjacencyList `object`: Membership graph's path information as an adjacency list.
  * edges `array`: Each edge contains information about the member that belongs to this group. Note: Fields returned here will help identify the specific Membership resource (e.g name, preferred_member_key and role), but may not be a comprehensive list of all fields.
    * items [Membership](#membership)
  * group `string`: Resource name of the group that the members belong to.

### MembershipRole
* MembershipRole `object`: A membership role within the Cloud Identity Groups API. A `MembershipRole` defines the privileges granted to a `Membership`.
  * expiryDetail [ExpiryDetail](#expirydetail)
  * name `string`: The name of the `MembershipRole`. Must be one of `OWNER`, `MANAGER`, `MEMBER`.

### ModifyMembershipRolesRequest
* ModifyMembershipRolesRequest `object`: The request message for MembershipsService.ModifyMembershipRoles.
  * addRoles `array`: The `MembershipRole`s to be added. Adding or removing roles in the same request as updating roles is not supported. Must not be set if `update_roles_params` is set.
    * items [MembershipRole](#membershiprole)
  * removeRoles `array`: The `name`s of the `MembershipRole`s to be removed. Adding or removing roles in the same request as updating roles is not supported. It is not possible to remove the `MEMBER` `MembershipRole`. If you wish to delete a `Membership`, call MembershipsService.DeleteMembership instead. Must not contain `MEMBER`. Must not be set if `update_roles_params` is set.
    * items `string`
  * updateRolesParams `array`: The `MembershipRole`s to be updated. Updating roles in the same request as adding or removing roles is not supported. Must not be set if either `add_roles` or `remove_roles` is set.
    * items [UpdateMembershipRolesParams](#updatemembershiprolesparams)

### ModifyMembershipRolesResponse
* ModifyMembershipRolesResponse `object`: The response message for MembershipsService.ModifyMembershipRoles.
  * membership [Membership](#membership)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### SearchGroupsResponse
* SearchGroupsResponse `object`: The response message for GroupsService.SearchGroups.
  * groups `array`: The `Group`s that match the search query.
    * items [Group](#group)
  * nextPageToken `string`: A continuation token to retrieve the next page of results, or empty if there are no more results available.

### SearchTransitiveGroupsResponse
* SearchTransitiveGroupsResponse `object`: The response message for MembershipsService.SearchTransitiveGroups.
  * memberships `array`: List of transitive groups satisfying the query.
    * items [GroupRelation](#grouprelation)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results available for listing.

### SearchTransitiveMembershipsResponse
* SearchTransitiveMembershipsResponse `object`: The response message for MembershipsService.SearchTransitiveMemberships.
  * memberships `array`: List of transitive members satisfying the query.
    * items [MemberRelation](#memberrelation)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TransitiveMembershipRole
* TransitiveMembershipRole `object`: Message representing the role of a TransitiveMembership.
  * role `string`: TransitiveMembershipRole in string format. Currently supported TransitiveMembershipRoles: `"MEMBER"`, `"OWNER"`, and `"MANAGER"`.

### UpdateMembershipRolesParams
* UpdateMembershipRolesParams `object`: The details of an update to a `MembershipRole`.
  * fieldMask `string`: The fully-qualified names of fields to update. May only contain the field `expiry_detail`.
  * membershipRole [MembershipRole](#membershiprole)

### WipeDeviceRequest
* WipeDeviceRequest `object`: Request message for wiping all data on the device.
  * customer `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.

### WipeDeviceResponse
* WipeDeviceResponse `object`: Response message for wiping all data on the device.
  * device [Device](#device)

### WipeDeviceUserRequest
* WipeDeviceUserRequest `object`: Request message for starting an account wipe on device.
  * customer `string`: Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you're using this API for your own organization, use `customers/my_customer` If you're using this API to manage another organization, use `customers/{customer_id}`, where customer_id is the customer to whom the device belongs.

### WipeDeviceUserResponse
* WipeDeviceUserResponse `object`: Response message for wiping the user's account from the device.
  * deviceUser [DeviceUser](#deviceuser)


