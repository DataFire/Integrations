# @datafire/google_script

Client library for Google Apps Script

## Installation and Usage
```bash
npm install --save @datafire/google_script
```
```js
let google_script = require('@datafire/google_script').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_script.scripts.run({}).then(data => {
  console.log(data);
})
```

## Description

An API for managing and executing Google Apps Script projects.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_script.oauthCallback({
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
google_script.oauthRefresh(null, context)
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

### scripts.run
Runs a function in an Apps Script project. The project must be deployed
for use with the Apps Script Execution API.

This method requires authorization with an OAuth 2.0 token that includes at
least one of the scopes listed in the [Authorization](#authorization)
section; script projects that do not require authorization cannot be
executed through this API. To find the correct scopes to include in the
authentication token, open the project in the script editor, then select
**File > Project properties** and click the **Scopes** tab.


```js
google_script.scripts.run({
  "scriptId": ""
}, context)
```

#### Input
* input `object`
  * body [ExecutionRequest](#executionrequest)
  * scriptId **required** `string`: The script ID of the script to be executed. To find the script ID, open
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * callback `string`: JSONP
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [Operation](#operation)



## Definitions

### ExecutionError
* ExecutionError `object`: An object that provides information about the nature of an error in the Apps
  * errorMessage `string`: The error message thrown by Apps Script, usually localized into the user's
  * errorType `string`: The error type, for example `TypeError` or `ReferenceError`. If the error
  * scriptStackTraceElements `array`: An array of objects that provide a stack trace through the script to show
    * items [ScriptStackTraceElement](#scriptstacktraceelement)

### ExecutionRequest
* ExecutionRequest `object`: A request to run the function in a script. The script is identified by the
  * devMode `boolean`: If `true` and the user is an owner of the script, the script runs at the
  * function `string`: The name of the function to execute in the given script. The name does not
  * parameters `array`: The parameters to be passed to the function being executed. The object type

  * sessionState `string`: For Android add-ons only. An ID that represents the user's current session

### ExecutionResponse
* ExecutionResponse `object`: An object that provides the return value of a function executed through the

### Operation
* Operation `object`: The response will not arrive until the function finishes executing. The maximum runtime is listed in the guide to [limitations in Apps Script](https://developers.google.com/apps-script/guides/services/quotas#current_limitations).
  * done `boolean`: This field is only used with asynchronous executions and indicates whether or not the script execution has completed. A completed execution has a populated response field containing the `ExecutionResponse` from function that was executed.
  * error [Status](#status)
  * metadata `object`: This field is not used.
  * response `object`: If the script function returns successfully, this field will contain an `ExecutionResponse` object with the function's return value as the object's `result` field.

### ScriptStackTraceElement
* ScriptStackTraceElement `object`: A stack trace through the script that shows where the execution failed.
  * function `string`: The name of the function that failed.
  * lineNumber `integer`: The line number where the script failed.

### Status
* Status `object`: If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's `error` field will contain this `Status` object.
  * code `integer`: The status code. For this API, this value will always be 3, corresponding to an <code>INVALID_ARGUMENT</code> error.
  * details `array`: An array that contains a single `ExecutionError` object that provides information about the nature of the error.
    * items `object`
  * message `string`: A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the [`google.rpc.Status.details`](google.rpc.Status.details) field, or localized by the client.


