# @datafire/google_replicapool

Client library for Google Compute Engine Instance Group Manager

## Installation and Usage
```bash
npm install --save datafire @datafire/google_replicapool
```

```js
let datafire = require('datafire');
let google_replicapool = require('@datafire/google_replicapool').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_replicapool: account,
  }
})


google_replicapool.instanceGroupManagers.list({}, context).then(data => {
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_replicapool.oauthRefresh(null, context)
```


### instanceGroupManagers.list
Retrieves the list of Instance Group Manager resources contained within the specified zone.


```js
google_replicapool.instanceGroupManagers.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the instance group manager resides.
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

### instanceGroupManagers.insert
Creates an instance group manager, as well as the instance group and the specified number of instances.


```js
google_replicapool.instanceGroupManagers.insert({
  "project": "",
  "zone": "",
  "size": 0
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the instance group manager resides.
* size (integer) **required** - Number of instances that should exist.
* body (object) - An Instance Group Manager resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.delete
Deletes the instance group manager and all instances contained within. If you'd like to delete the manager without deleting the instances, you must first abandon the instances to remove them from the group.


```js
google_replicapool.instanceGroupManagers.delete({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the instance group manager resides.
* instanceGroupManager (string) **required** - Name of the Instance Group Manager resource to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.get
Returns the specified Instance Group Manager resource.


```js
google_replicapool.instanceGroupManagers.get({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the instance group manager resides.
* instanceGroupManager (string) **required** - Name of the instance resource to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.abandonInstances
Removes the specified instances from the managed instance group, and from any target pools of which they were members, without deleting the instances.


```js
google_replicapool.instanceGroupManagers.abandonInstances({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the instance group manager resides.
* instanceGroupManager (string) **required** - The name of the instance group manager.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.deleteInstances
Deletes the specified instances. The instances are deleted, then removed from the instance group and any target pools of which they were a member. The targetSize of the instance group manager is reduced by the number of instances deleted.


```js
google_replicapool.instanceGroupManagers.deleteInstances({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the instance group manager resides.
* instanceGroupManager (string) **required** - The name of the instance group manager.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.recreateInstances
Recreates the specified instances. The instances are deleted, then recreated using the instance group manager's current instance template.


```js
google_replicapool.instanceGroupManagers.recreateInstances({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the instance group manager resides.
* instanceGroupManager (string) **required** - The name of the instance group manager.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

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

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the instance group manager resides.
* instanceGroupManager (string) **required** - The name of the instance group manager.
* size (integer) **required** - Number of instances that should exist in this Instance Group Manager.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.setInstanceTemplate
Sets the instance template to use when creating new instances in this group. Existing instances are not affected.


```js
google_replicapool.instanceGroupManagers.setInstanceTemplate({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the instance group manager resides.
* instanceGroupManager (string) **required** - The name of the instance group manager.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### instanceGroupManagers.setTargetPools
Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.


```js
google_replicapool.instanceGroupManagers.setTargetPools({
  "project": "",
  "zone": "",
  "instanceGroupManager": ""
}, context)
```

#### Parameters
* project (string) **required** - The Google Developers Console project name.
* zone (string) **required** - The name of the zone in which the instance group manager resides.
* instanceGroupManager (string) **required** - The name of the instance group manager.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zoneOperations.list
Retrieves the list of operation resources contained within the specified zone.


```js
google_replicapool.zoneOperations.list({
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
google_replicapool.zoneOperations.get({
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

