# @datafire/google_replicapoolupdater

Client library for Google Compute Engine Instance Group Updater

## Installation and Usage
```bash
npm install --save @datafire/google_replicapoolupdater
```
```js
let google_replicapoolupdater = require('@datafire/google_replicapoolupdater').create({
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

[Deprecated. Please use compute.instanceGroupManagers.update method. replicapoolupdater API will be disabled after December 30th, 2016] Updates groups of Compute Engine instances.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_replicapoolupdater.oauthCallback({
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
google_replicapoolupdater.oauthRefresh(null, context)
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

### zoneOperations.list
Retrieves the list of Operation resources contained within the specified zone.


```js
google_replicapoolupdater.zoneOperations.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Optional. Filter expression for filtering listed resources.
  * maxResults `integer`: Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
  * pageToken `string`: Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
  * project **required** `string`: Name of the project scoping this request.
  * zone **required** `string`: Name of the zone scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [OperationList](#operationlist)

### zoneOperations.get
Retrieves the specified zone-specific operation resource.


```js
google_replicapoolupdater.zoneOperations.get({
  "operation": "",
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * operation **required** `string`: Name of the operation resource to return.
  * project **required** `string`: Name of the project scoping this request.
  * zone **required** `string`: Name of the zone scoping this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Operation](#operation)

### rollingUpdates.list
Lists recent updates for a given managed instance group, in reverse chronological order and paginated format.


```js
google_replicapoolupdater.rollingUpdates.list({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Optional. Filter expression for filtering listed resources.
  * maxResults `integer`: Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
  * pageToken `string`: Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
  * project **required** `string`: The Google Developers Console project name.
  * zone **required** `string`: The name of the zone in which the update's target resides.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [RollingUpdateList](#rollingupdatelist)

### rollingUpdates.insert
Inserts and starts a new update.


```js
google_replicapoolupdater.rollingUpdates.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * body [RollingUpdate](#rollingupdate)
  * project **required** `string`: The Google Developers Console project name.
  * zone **required** `string`: The name of the zone in which the update's target resides.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Operation](#operation)

### rollingUpdates.get
Returns information about an update.


```js
google_replicapoolupdater.rollingUpdates.get({
  "project": "",
  "rollingUpdate": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * rollingUpdate **required** `string`: The name of the update.
  * zone **required** `string`: The name of the zone in which the update's target resides.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [RollingUpdate](#rollingupdate)

### rollingUpdates.cancel
Cancels an update. The update must be PAUSED before it can be cancelled. This has no effect if the update is already CANCELLED.


```js
google_replicapoolupdater.rollingUpdates.cancel({
  "project": "",
  "rollingUpdate": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * rollingUpdate **required** `string`: The name of the update.
  * zone **required** `string`: The name of the zone in which the update's target resides.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Operation](#operation)

### rollingUpdates.listInstanceUpdates
Lists the current status for each instance within a given update.


```js
google_replicapoolupdater.rollingUpdates.listInstanceUpdates({
  "project": "",
  "rollingUpdate": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Optional. Filter expression for filtering listed resources.
  * maxResults `integer`: Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
  * pageToken `string`: Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
  * project **required** `string`: The Google Developers Console project name.
  * rollingUpdate **required** `string`: The name of the update.
  * zone **required** `string`: The name of the zone in which the update's target resides.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [InstanceUpdateList](#instanceupdatelist)

### rollingUpdates.pause
Pauses the update in state from ROLLING_FORWARD or ROLLING_BACK. Has no effect if invoked when the state of the update is PAUSED.


```js
google_replicapoolupdater.rollingUpdates.pause({
  "project": "",
  "rollingUpdate": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * rollingUpdate **required** `string`: The name of the update.
  * zone **required** `string`: The name of the zone in which the update's target resides.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Operation](#operation)

### rollingUpdates.resume
Continues an update in PAUSED state. Has no effect if invoked when the state of the update is ROLLED_OUT.


```js
google_replicapoolupdater.rollingUpdates.resume({
  "project": "",
  "rollingUpdate": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * rollingUpdate **required** `string`: The name of the update.
  * zone **required** `string`: The name of the zone in which the update's target resides.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Operation](#operation)

### rollingUpdates.rollback
Rolls back the update in state from ROLLING_FORWARD or PAUSED. Has no effect if invoked when the state of the update is ROLLED_BACK.


```js
google_replicapoolupdater.rollingUpdates.rollback({
  "project": "",
  "rollingUpdate": "",
  "zone": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: The Google Developers Console project name.
  * rollingUpdate **required** `string`: The name of the update.
  * zone **required** `string`: The name of the zone in which the update's target resides.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Operation](#operation)



## Definitions

### InstanceUpdate
* InstanceUpdate `object`: Update of a single instance.
  * error `object`: Errors that occurred during the instance update.
    * errors `array`: [Output Only] The array of errors encountered while processing this operation.
      * items `object`
        * code `string`: [Output Only] The error type identifier for this error.
        * location `string`: [Output Only] Indicates the field in the request that caused the error. This property is optional.
        * message `string`: [Output Only] An optional, human-readable error message.
  * instance `string`: Fully-qualified URL of the instance being updated.
  * status `string`: Status of the instance update. Possible values are:  

### InstanceUpdateList
* InstanceUpdateList `object`: Response returned by ListInstanceUpdates method.
  * items `array`: Collection of requested instance updates.
    * items [InstanceUpdate](#instanceupdate)
  * kind `string`: [Output Only] Type of the resource.
  * nextPageToken `string`: A token used to continue a truncated list request.
  * selfLink `string`: [Output Only] The fully qualified URL for the resource.

### Operation
* Operation `object`: An operation resource, used to manage asynchronous API requests.
  * clientOperationId `string`
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * endTime `string`
  * error `object`: [Output Only] If errors occurred during processing of this operation, this field will be populated.
    * errors `array`: [Output Only] The array of errors encountered while processing this operation.
      * items `object`
        * code `string`: [Output Only] The error type identifier for this error.
        * location `string`: [Output Only] Indicates the field in the request that caused the error. This property is optional.
        * message `string`: [Output Only] An optional, human-readable error message.
  * httpErrorMessage `string`
  * httpErrorStatusCode `integer`
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * insertTime `string`: [Output Only] The time that this operation was requested. This is in RFC 3339 format.
  * kind `string`: [Output Only] Type of the resource. Always replicapoolupdater#operation for Operation resources.
  * name `string`: [Output Only] Name of the resource.
  * operationType `string`
  * progress `integer`
  * region `string`: [Output Only] URL of the region where the operation resides.
  * selfLink `string`: [Output Only] The fully qualified URL for the resource.
  * startTime `string`: [Output Only] The time that this operation was started by the server. This is in RFC 3339 format.
  * status `string`: [Output Only] Status of the operation. Can be one of the following: "PENDING", "RUNNING", or "DONE".
  * statusMessage `string`: [Output Only] An optional textual description of the current status of the operation.
  * targetId `string`: [Output Only] Unique target id which identifies a particular incarnation of the target.
  * targetLink `string`: [Output Only] URL of the resource the operation is mutating.
  * user `string`
  * warnings `array`
    * items `object`
      * code `string`: [Output only] The warning type identifier for this warning.
      * data `array`: [Output only] Metadata for this warning in key:value format.
        * items `object`
          * key `string`: [Output Only] Metadata key for this warning.
          * value `string`: [Output Only] Metadata value for this warning.
      * message `string`: [Output only] Optional human-readable details for this warning.
  * zone `string`: [Output Only] URL of the zone where the operation resides.

### OperationList
* OperationList `object`: Contains a list of Operation resources.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * items `array`: [Output Only] The Operation resources.
    * items [Operation](#operation)
  * kind `string`: [Output Only] Type of resource. Always replicapoolupdater#operationList for OperationList resources.
  * nextPageToken `string`: [Output Only] A token used to continue a truncate.
  * selfLink `string`: [Output Only] The fully qualified URL for the resource.

### RollingUpdate
* RollingUpdate `object`: The following represents a resource describing a single update (rollout) of a group of instances to the given template.
  * actionType `string`: Specifies the action to take for each instance within the instance group. This can be RECREATE which will recreate each instance and is only available for managed instance groups. It can also be REBOOT which performs a soft reboot for each instance and is only available for regular (non-managed) instance groups.
  * creationTimestamp `string`: [Output Only] Creation timestamp in RFC3339 text format.
  * description `string`: An optional textual description of the resource; provided by the client when the resource is created.
  * error `object`: [Output Only] Errors that occurred during the rolling update.
    * errors `array`: [Output Only] The array of errors encountered while processing this operation.
      * items `object`
        * code `string`: [Output Only] The error type identifier for this error.
        * location `string`: [Output Only] Indicates the field in the request that caused the error. This property is optional.
        * message `string`: [Output Only] An optional, human-readable error message.
  * id `string`: [Output Only] Unique identifier for the resource; defined by the server.
  * instanceGroup `string`: Fully-qualified URL of an instance group being updated. Exactly one of instanceGroupManager and instanceGroup must be set.
  * instanceGroupManager `string`: Fully-qualified URL of an instance group manager being updated. Exactly one of instanceGroupManager and instanceGroup must be set.
  * instanceTemplate `string`: Fully-qualified URL of an instance template to apply.
  * kind `string`: [Output Only] Type of the resource.
  * oldInstanceTemplate `string`: Fully-qualified URL of the instance template encountered while starting the update.
  * policy `object`: Parameters of the update process.
    * autoPauseAfterInstances `integer`: Number of instances to update before the updater pauses the rolling update.
    * instanceStartupTimeoutSec `integer`: The maximum amount of time that the updater waits for a HEALTHY state after all of the update steps are complete. If the HEALTHY state is not received before the deadline, the instance update is considered a failure.
    * maxNumConcurrentInstances `integer`: The maximum number of instances that can be updated simultaneously. An instance update is considered complete only after the instance is restarted and initialized.
    * maxNumFailedInstances `integer`: The maximum number of instance updates that can fail before the group update is considered a failure. An instance update is considered failed if any of its update actions (e.g. Stop call on Instance resource in Rolling Reboot) failed with permanent failure, or if the instance is in an UNHEALTHY state after it finishes all of the update actions.
    * minInstanceUpdateTimeSec `integer`: The minimum amount of time that the updater spends to update each instance. Update time is the time it takes to complete all update actions (e.g. Stop call on Instance resource in Rolling Reboot), reboot, and initialize. If the instance update finishes early, the updater pauses for the remainder of the time before it starts the next instance update.
  * progress `integer`: [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of operations. This should not be used to guess at when the update will be complete. This number should be monotonically increasing as the update progresses.
  * selfLink `string`: [Output Only] The fully qualified URL for the resource.
  * status `string`: [Output Only] Status of the update. Possible values are:  
  * statusMessage `string`: [Output Only] An optional textual description of the current status of the update.
  * user `string`: [Output Only] User who requested the update, for example: user@example.com.

### RollingUpdateList
* RollingUpdateList `object`: Response returned by List method.
  * items `array`: Collection of requested updates.
    * items [RollingUpdate](#rollingupdate)
  * kind `string`: [Output Only] Type of the resource.
  * nextPageToken `string`: A token used to continue a truncated list request.
  * selfLink `string`: [Output Only] The fully qualified URL for the resource.


