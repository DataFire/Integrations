# @datafire/google_appstate

Client library for Google App State

## Installation and Usage
```bash
npm install --save @datafire/google_appstate
```
```js
let google_appstate = require('@datafire/google_appstate').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_appstate.states.list({}).then(data => {
  console.log(data);
});
```

## Description

The Google App State API.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_appstate.oauthCallback({
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
google_appstate.oauthRefresh(null, context)
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

### states.list
Lists all the states keys, and optionally the state data.


```js
google_appstate.states.list({}, context)
```

#### Input
* input `object`
  * includeData `boolean`: Whether to include the full data in addition to the version number
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListResponse](#listresponse)

### states.delete
Deletes a key and the data associated with it. The key is removed and no longer counts against the key quota. Note that since this method is not safe in the face of concurrent modifications, it should only be used for development and testing purposes. Invoking this method in shipping code can result in data loss and data corruption.


```js
google_appstate.states.delete({
  "stateKey": 0
}, context)
```

#### Input
* input `object`
  * stateKey **required** `integer`: The key for the data to be retrieved.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### states.get
Retrieves the data corresponding to the passed key. If the key does not exist on the server, an HTTP 404 will be returned.


```js
google_appstate.states.get({
  "stateKey": 0
}, context)
```

#### Input
* input `object`
  * stateKey **required** `integer`: The key for the data to be retrieved.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetResponse](#getresponse)

### states.update
Update the data associated with the input key if and only if the passed version matches the currently stored version. This method is safe in the face of concurrent writes. Maximum per-key size is 128KB.


```js
google_appstate.states.update({
  "stateKey": 0
}, context)
```

#### Input
* input `object`
  * stateKey **required** `integer`: The key for the data to be retrieved.
  * currentStateVersion `string`: The version of the app state your application is attempting to update. If this does not match the current version, this method will return a conflict error. If there is no data stored on the server for this key, the update will succeed irrespective of the value of this parameter.
  * body [UpdateRequest](#updaterequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [WriteResult](#writeresult)

### states.clear
Clears (sets to empty) the data for the passed key if and only if the passed version matches the currently stored version. This method results in a conflict error on version mismatch.


```js
google_appstate.states.clear({
  "stateKey": 0
}, context)
```

#### Input
* input `object`
  * stateKey **required** `integer`: The key for the data to be retrieved.
  * currentDataVersion `string`: The version of the data to be cleared. Version strings are returned by the server.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [WriteResult](#writeresult)



## Definitions

### GetResponse
* GetResponse `object`: This is a JSON template for an app state resource.
  * currentStateVersion `string`: The current app state version.
  * data `string`: The requested data.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string appstate#getResponse.
  * stateKey `integer`: The key for the data.

### ListResponse
* ListResponse `object`: This is a JSON template to convert a list-response for app state.
  * items `array`: The app state data.
    * items [GetResponse](#getresponse)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string appstate#listResponse.
  * maximumKeyCount `integer`: The maximum number of keys allowed for this user.

### UpdateRequest
* UpdateRequest `object`: This is a JSON template for a requests which update app state
  * data `string`: The new app state data that your application is trying to update with.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string appstate#updateRequest.

### WriteResult
* WriteResult `object`: This is a JSON template for an app state write result.
  * currentStateVersion `string`: The version of the data for this key on the server.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string appstate#writeResult.
  * stateKey `integer`: The written key.


