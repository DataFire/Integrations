# @datafire/google_replicapool

Client library for Google Compute Engine Instance Group Manager

## Installation and Usage
```bash
npm install --save @datafire/google_replicapool
```
```js
let google_replicapool = require('@datafire/google_replicapool').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_replicapool.instanceGroupManagers.list({}).then(data => {
  console.log(data);
})
```

## Description

[Deprecated. Please use Instance Group Manager in Compute API] Provides groups of homogenous Compute Engine instances.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_replicapool.oauthCallback({
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
google_replicapool.oauthRefresh(null, context)
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

### instanceGroupManagers.list
Retrieves the list of Instance Group Manager resources contained within the specified zone.


```js
google_replicapool.instanceGroupManagers.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * zone **required** `string`: The name of the zone in which the instance group manager resides.
  * filter `string`: Optional. Filter expression for filtering listed resources.
  * maxResults `integer`: Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
  * pageToken `string`: Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceGroupManagerList](#instancegroupmanagerlist)

### instanceGroupManagers.insert
Creates an instance group manager, as well as the instance group and the specified number of instances.


```js
google_replicapool.instanceGroupManagers.insert({
  "project": "",
  "zone": "",
  "size": 0
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * zone **required** `string`: The name of the zone in which the instance group manager resides.
  * size **required** `integer`: Number of instances that should exist.
  * body [InstanceGroupManager](#instancegroupmanager)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.delete
Deletes the instance group manager and all instances contained within. If you'd like to delete the manager without deleting the instances, you must first abandon the instances to remove them from the group.


```js
google_replicapool.instanceGroupManagers.delete({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * zone **required** `string`: The name of the zone in which the instance group manager resides.
  * instanceGroupManager **required** `string`: Name of the Instance Group Manager resource to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.get
Returns the specified Instance Group Manager resource.


```js
google_replicapool.instanceGroupManagers.get({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * zone **required** `string`: The name of the zone in which the instance group manager resides.
  * instanceGroupManager **required** `string`: Name of the instance resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InstanceGroupManager](#instancegroupmanager)

### instanceGroupManagers.abandonInstances
Removes the specified instances from the managed instance group, and from any target pools of which they were members, without deleting the instances.


```js
google_replicapool.instanceGroupManagers.abandonInstances({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * zone **required** `string`: The name of the zone in which the instance group manager resides.
  * instanceGroupManager **required** `string`: The name of the instance group manager.
  * body [InstanceGroupManagersAbandonInstancesRequest](#instancegroupmanagersabandoninstancesrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.deleteInstances
Deletes the specified instances. The instances are deleted, then removed from the instance group and any target pools of which they were a member. The targetSize of the instance group manager is reduced by the number of instances deleted.


```js
google_replicapool.instanceGroupManagers.deleteInstances({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * zone **required** `string`: The name of the zone in which the instance group manager resides.
  * instanceGroupManager **required** `string`: The name of the instance group manager.
  * body [InstanceGroupManagersDeleteInstancesRequest](#instancegroupmanagersdeleteinstancesrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.recreateInstances
Recreates the specified instances. The instances are deleted, then recreated using the instance group manager's current instance template.


```js
google_replicapool.instanceGroupManagers.recreateInstances({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * zone **required** `string`: The name of the zone in which the instance group manager resides.
  * instanceGroupManager **required** `string`: The name of the instance group manager.
  * body [InstanceGroupManagersRecreateInstancesRequest](#instancegroupmanagersrecreateinstancesrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.resize
Resizes the managed instance group up or down. If resized up, new instances are created using the current instance template. If resized down, instances are removed in the order outlined in Resizing a managed instance group.


```js
google_replicapool.instanceGroupManagers.resize({
  "project": "",
  "zone": "",
  "instanceGroupManager": "",
  "size": 0
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * zone **required** `string`: The name of the zone in which the instance group manager resides.
  * instanceGroupManager **required** `string`: The name of the instance group manager.
  * size **required** `integer`: Number of instances that should exist in this Instance Group Manager.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.setInstanceTemplate
Sets the instance template to use when creating new instances in this group. Existing instances are not affected.


```js
google_replicapool.instanceGroupManagers.setInstanceTemplate({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * zone **required** `string`: The name of the zone in which the instance group manager resides.
  * instanceGroupManager **required** `string`: The name of the instance group manager.
  * body [InstanceGroupManagersSetInstanceTemplateRequest](#instancegroupmanagerssetinstancetemplaterequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### instanceGroupManagers.setTargetPools
Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.


```js
google_replicapool.instanceGroupManagers.setTargetPools({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * zone **required** `string`: The name of the zone in which the instance group manager resides.
  * instanceGroupManager **required** `string`: The name of the instance group manager.
  * body [InstanceGroupManagersSetTargetPoolsRequest](#instancegroupmanagerssettargetpoolsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)

### zoneOperations.list
Retrieves the list of operation resources contained within the specified zone.


```js
google_replicapool.zoneOperations.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Name of the project scoping this request.
  * zone **required** `string`: Name of the zone scoping this request.
  * filter `string`: Optional. Filter expression for filtering listed resources.
  * maxResults `integer`: Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
  * pageToken `string`: Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OperationList](#operationlist)

### zoneOperations.get
Retrieves the specified zone-specific operation resource.


```js
google_replicapool.zoneOperations.get({
  "project": "",
  "zone": "",
  "operation": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Name of the project scoping this request.
  * zone **required** `string`: Name of the zone scoping this request.
  * operation **required** `string`: Name of the operation resource to return.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Operation](#operation)



## Definitions

### InstanceGroupManager
* InstanceGroupManager `object`: An Instance Group Manager resource.
  * autoHealingPolicies `array`: The autohealing policy for this managed instance group. You can specify only one value.
    * items [ReplicaPoolAutoHealingPolicy](#replicapoolautohealingpolicy)
  * baseInstanceName `string`: The base instance name to use for instances in this group. The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.
  * creationTimestamp `string`: [Output only] The time the instance group manager was created, in RFC3339 text format.
  * currentSize `integer`: [Output only] The number of instances that currently exist and are a part of this group. This includes instances that are starting but are not yet RUNNING, and instances that are in the process of being deleted or abandoned.
  * description `string`: An optional textual description of the instance group manager.
  * fingerprint `string`: [Output only] Fingerprint of the instance group manager. This field is used for optimistic locking. An up-to-date fingerprint must be provided in order to modify the Instance Group Manager resource.
  * group `string`: [Output only] The full URL of the instance group created by the manager. This group contains all of the instances being managed, and cannot contain non-managed instances.
  * id `string`: [Output only] A server-assigned unique identifier for the resource.
  * instanceTemplate `string`: The full URL to an instance template from which all new instances will be created.
  * kind `string`: [Output only] The resource type. Always replicapool#instanceGroupManager.
  * name `string`: The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.
  * selfLink `string`: [Output only] The fully qualified URL for this resource.
  * targetPools `array`: The full URL of all target pools to which new instances in the group are added. Updating the target pool values does not affect existing instances.
    * items `string`
  * targetSize `integer`: [Output only] The number of instances that the manager is attempting to maintain. Deleting or abandoning instances affects this number, as does resizing the group.

### InstanceGroupManagerList
* InstanceGroupManagerList `object`
  * id `string`: Unique identifier for the resource; defined by the server (output only).
  * items `array`: A list of instance resources.
    * items [InstanceGroupManager](#instancegroupmanager)
  * kind `string`: Type of resource.
  * nextPageToken `string`: A token used to continue a truncated list request (output only).
  * selfLink `string`: Server defined URL for this resource (output only).

### InstanceGroupManagersAbandonInstancesRequest
* InstanceGroupManagersAbandonInstancesRequest `object`
  * instances `array`: The names of one or more instances to abandon. For example:
    * items `string`

### InstanceGroupManagersDeleteInstancesRequest
* InstanceGroupManagersDeleteInstancesRequest `object`
  * instances `array`: Names of instances to delete.
    * items `string`

### InstanceGroupManagersRecreateInstancesRequest
* InstanceGroupManagersRecreateInstancesRequest `object`
  * instances `array`: The names of one or more instances to recreate. For example:
    * items `string`

### InstanceGroupManagersSetInstanceTemplateRequest
* InstanceGroupManagersSetInstanceTemplateRequest `object`
  * instanceTemplate `string`: The full URL to an Instance Template from which all new instances will be created.

### InstanceGroupManagersSetTargetPoolsRequest
* InstanceGroupManagersSetTargetPoolsRequest `object`
  * fingerprint `string`: The current fingerprint of the Instance Group Manager resource. If this does not match the server-side fingerprint of the resource, then the request will be rejected.
  * targetPools `array`: A list of fully-qualified URLs to existing Target Pool resources. New instances in the Instance Group Manager will be added to the specified target pools; existing instances are not affected.
    * items `string`

### Operation
* Operation `object`: An operation resource, used to manage asynchronous API requests.
  * clientOperationId `string`: [Output only] An optional identifier specified by the client when the mutation was initiated. Must be unique for all operation resources in the project.
  * creationTimestamp `string`: [Output Only] The time that this operation was requested, in RFC3339 text format.
  * endTime `string`: [Output Only] The time that this operation was completed, in RFC3339 text format.
  * error `object`: [Output Only] If errors occurred during processing of this operation, this field will be populated.
    * errors `array`: [Output Only] The array of errors encountered while processing this operation.
      * items `object`
        * code `string`: [Output Only] The error type identifier for this error.
        * location `string`: [Output Only] Indicates the field in the request which caused the error. This property is optional.
        * message `string`: [Output Only] An optional, human-readable error message.
  * httpErrorMessage `string`: [Output only] If operation fails, the HTTP error message returned.
  * httpErrorStatusCode `integer`: [Output only] If operation fails, the HTTP error status code returned.
  * id `string`: [Output Only] Unique identifier for the resource, generated by the server.
  * insertTime `string`: [Output Only] The time that this operation was requested, in RFC3339 text format.
  * kind `string`: [Output only] Type of the resource.
  * name `string`: [Output Only] Name of the resource.
  * operationType `string`: [Output only] Type of the operation. Operations include insert, update, and delete.
  * progress `integer`: [Output only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess at when the operation will be complete. This number should be monotonically increasing as the operation progresses.
  * region `string`: [Output Only] URL of the region where the operation resides. Only available when performing regional operations.
  * selfLink `string`: [Output Only] Server-defined fully-qualified URL for this resource.
  * startTime `string`: [Output Only] The time that this operation was started by the server, in RFC3339 text format.
  * status `string` (values: DONE, PENDING, RUNNING): [Output Only] Status of the operation.
  * statusMessage `string`: [Output Only] An optional textual description of the current status of the operation.
  * targetId `string`: [Output Only] Unique target ID which identifies a particular incarnation of the target.
  * targetLink `string`: [Output only] URL of the resource the operation is mutating.
  * user `string`: [Output Only] User who requested the operation, for example: user@example.com.
  * warnings `array`: [Output Only] If there are issues with this operation, a warning is returned.
    * items `object`
      * code `string` (values: DEPRECATED_RESOURCE_USED, DISK_SIZE_LARGER_THAN_IMAGE_SIZE, INJECTED_KERNELS_DEPRECATED, NEXT_HOP_ADDRESS_NOT_ASSIGNED, NEXT_HOP_CANNOT_IP_FORWARD, NEXT_HOP_INSTANCE_NOT_FOUND, NEXT_HOP_INSTANCE_NOT_ON_NETWORK, NEXT_HOP_NOT_RUNNING, NO_RESULTS_ON_PAGE, REQUIRED_TOS_AGREEMENT, RESOURCE_NOT_DELETED, SINGLE_INSTANCE_PROPERTY_TEMPLATE, UNREACHABLE): [Output only] The warning type identifier for this warning.
      * data `array`: [Output only] Metadata for this warning in key:value format.
        * items `object`
          * key `string`: [Output Only] Metadata key for this warning.
          * value `string`: [Output Only] Metadata value for this warning.
      * message `string`: [Output only] Optional human-readable details for this warning.
  * zone `string`: [Output Only] URL of the zone where the operation resides. Only available when performing per-zone operations.

### OperationList
* OperationList `object`
  * id `string`: Unique identifier for the resource; defined by the server (output only).
  * items `array`: The operation resources.
    * items [Operation](#operation)
  * kind `string`: Type of resource.
  * nextPageToken `string`: A token used to continue a truncated list request (output only).
  * selfLink `string`: Server defined URL for this resource (output only).

### ReplicaPoolAutoHealingPolicy
* ReplicaPoolAutoHealingPolicy `object`
  * actionType `string` (values: REBOOT, RECREATE): The action to perform when an instance becomes unhealthy. Possible values are RECREATE or REBOOT. RECREATE replaces an unhealthy instance with a new instance that is based on the instance template for this managed instance group. REBOOT performs a soft reboot on an instance. If the instance cannot reboot, the instance performs a hard restart.
  * healthCheck `string`: The URL for the HealthCheck that signals autohealing.


