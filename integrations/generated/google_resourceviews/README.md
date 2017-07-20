# @datafire/google_resourceviews

Client library for Google Compute Engine Instance Groups

## Installation and Usage
```bash
npm install --save datafire @datafire/google_resourceviews
```

```js
let datafire = require('datafire');
let google_resourceviews = require('@datafire/google_resourceviews').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_resourceviews: account,
  }
})

google_resourceviews.zoneOperations.list({}, context).then(data => {
  console.log(data);
})
```

## Description
The Resource View API allows users to create and manage logical sets of Google Compute Engine instances.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_resourceviews.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_resourceviews.oauthRefresh(null, context)
```


### zoneOperations.list
Retrieves the list of operation resources contained within the specified zone.


```js
google_resourceviews.zoneOperations.list({
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
google_resourceviews.zoneOperations.get({
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

### zoneViews.list
List resource views.


```js
google_resourceviews.zoneViews.list({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - The project name of the resource view.
* zone (string) **required** - The zone name of the resource view.
* maxResults (integer) - Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
* pageToken (string) - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zoneViews.insert
Create a resource view.


```js
google_resourceviews.zoneViews.insert({
  "project": "",
  "zone": ""
}, context)
```

#### Parameters
* project (string) **required** - The project name of the resource view.
* zone (string) **required** - The zone name of the resource view.
* body (object) - The resource view object.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zoneViews.delete
Delete a resource view.


```js
google_resourceviews.zoneViews.delete({
  "project": "",
  "zone": "",
  "resourceView": ""
}, context)
```

#### Parameters
* project (string) **required** - The project name of the resource view.
* zone (string) **required** - The zone name of the resource view.
* resourceView (string) **required** - The name of the resource view.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zoneViews.get
Get the information of a zonal resource view.


```js
google_resourceviews.zoneViews.get({
  "project": "",
  "zone": "",
  "resourceView": ""
}, context)
```

#### Parameters
* project (string) **required** - The project name of the resource view.
* zone (string) **required** - The zone name of the resource view.
* resourceView (string) **required** - The name of the resource view.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zoneViews.addResources
Add resources to the view.


```js
google_resourceviews.zoneViews.addResources({
  "project": "",
  "zone": "",
  "resourceView": ""
}, context)
```

#### Parameters
* project (string) **required** - The project name of the resource view.
* zone (string) **required** - The zone name of the resource view.
* resourceView (string) **required** - The name of the resource view.
* body (object) - The request to add resources to the resource view.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zoneViews.getService
Get the service information of a resource view or a resource.


```js
google_resourceviews.zoneViews.getService({
  "project": "",
  "zone": "",
  "resourceView": ""
}, context)
```

#### Parameters
* project (string) **required** - The project name of the resource view.
* zone (string) **required** - The zone name of the resource view.
* resourceView (string) **required** - The name of the resource view.
* resourceName (string) - The name of the resource if user wants to get the service information of the resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zoneViews.removeResources
Remove resources from the view.


```js
google_resourceviews.zoneViews.removeResources({
  "project": "",
  "zone": "",
  "resourceView": ""
}, context)
```

#### Parameters
* project (string) **required** - The project name of the resource view.
* zone (string) **required** - The zone name of the resource view.
* resourceView (string) **required** - The name of the resource view.
* body (object) - The request to remove resources from the resource view.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zoneViews.listResources
List the resources of the resource view.


```js
google_resourceviews.zoneViews.listResources({
  "project": "",
  "zone": "",
  "resourceView": ""
}, context)
```

#### Parameters
* project (string) **required** - The project name of the resource view.
* zone (string) **required** - The zone name of the resource view.
* resourceView (string) **required** - The name of the resource view.
* format (string) - The requested format of the return value. It can be URL or URL_PORT. A JSON object will be included in the response based on the format. The default format is NONE, which results in no JSON in the response.
* listState (string) - The state of the instance to list. By default, it lists all instances.
* maxResults (integer) - Maximum count of results to be returned. Acceptable values are 0 to 5000, inclusive. (Default: 5000)
* pageToken (string) - Specifies a nextPageToken returned by a previous list request. This token can be used to request the next page of results from a previous list request.
* serviceName (string) - The service name to return in the response. It is optional and if it is not set, all the service end points will be returned.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### zoneViews.setService
Update the service information of a resource view or a resource.


```js
google_resourceviews.zoneViews.setService({
  "project": "",
  "zone": "",
  "resourceView": ""
}, context)
```

#### Parameters
* project (string) **required** - The project name of the resource view.
* zone (string) **required** - The zone name of the resource view.
* resourceView (string) **required** - The name of the resource view.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

