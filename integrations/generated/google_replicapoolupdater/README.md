# @datafire/google_replicapoolupdater

Client library for Google Compute Engine Instance Group Updater

## Installation and Usage
```bash
npm install --save datafire @datafire/google_replicapoolupdater
```

```js
let datafire = require('datafire');
let google_replicapoolupdater = require('@datafire/google_replicapoolupdater').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_replicapoolupdater.zoneOperations.list({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_replicapoolupdater.oauthRefresh(null, context)
```


### zoneOperations.list
Retrieves the list of Operation resources contained within the specified zone.


```js
google_replicapoolupdater.zoneOperations.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - Name of the project scoping this request.
* zone (string) **required** - Name of the zone scoping this request.
* filter (string) - Optional. Filter expression for filtering listed resources.
* maxResults (integer) - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
* pageToken (string) - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zoneOperations.get
Retrieves the specified zone-specific operation resource.


```js
google_replicapoolupdater.zoneOperations.get({
  "project": "",
  "zone": "",
  "operation": ""
}, context)
```

#### Parameters
* project (string) **required** - Name of the project scoping this request.
* zone (string) **required** - Name of the zone scoping this request.
* operation (string) **required** - Name of the operation resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rollingUpdates.list
Lists recent updates for a given managed instance group, in reverse chronological order and paginated format.


```js
google_replicapoolupdater.rollingUpdates.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the update's target resides.
* filter (string) - Optional. Filter expression for filtering listed resources.
* maxResults (integer) - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
* pageToken (string) - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rollingUpdates.insert
Inserts and starts a new update.


```js
google_replicapoolupdater.rollingUpdates.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the update's target resides.
* body (object) - The following represents a resource describing a single update (rollout) of a group of instances to the given template.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rollingUpdates.get
Returns information about an update.


```js
google_replicapoolupdater.rollingUpdates.get({
  "project": "",
  "zone": "",
  "rollingUpdate": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the update's target resides.
* rollingUpdate (string) **required** - The name of the update.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rollingUpdates.cancel
Cancels an update. The update must be PAUSED before it can be cancelled. This has no effect if the update is already CANCELLED.


```js
google_replicapoolupdater.rollingUpdates.cancel({
  "project": "",
  "zone": "",
  "rollingUpdate": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the update's target resides.
* rollingUpdate (string) **required** - The name of the update.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rollingUpdates.listInstanceUpdates
Lists the current status for each instance within a given update.


```js
google_replicapoolupdater.rollingUpdates.listInstanceUpdates({
  "project": "",
  "zone": "",
  "rollingUpdate": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the update's target resides.
* rollingUpdate (string) **required** - The name of the update.
* filter (string) - Optional. Filter expression for filtering listed resources.
* maxResults (integer) - Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
* pageToken (string) - Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rollingUpdates.pause
Pauses the update in state from ROLLING_FORWARD or ROLLING_BACK. Has no effect if invoked when the state of the update is PAUSED.


```js
google_replicapoolupdater.rollingUpdates.pause({
  "project": "",
  "zone": "",
  "rollingUpdate": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the update's target resides.
* rollingUpdate (string) **required** - The name of the update.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rollingUpdates.resume
Continues an update in PAUSED state. Has no effect if invoked when the state of the update is ROLLED_OUT.


```js
google_replicapoolupdater.rollingUpdates.resume({
  "project": "",
  "zone": "",
  "rollingUpdate": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the update's target resides.
* rollingUpdate (string) **required** - The name of the update.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### rollingUpdates.rollback
Rolls back the update in state from ROLLING_FORWARD or PAUSED. Has no effect if invoked when the state of the update is ROLLED_BACK.


```js
google_replicapoolupdater.rollingUpdates.rollback({
  "project": "",
  "zone": "",
  "rollingUpdate": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the update's target resides.
* rollingUpdate (string) **required** - The name of the update.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

