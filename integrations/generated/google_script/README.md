# @datafire/google_script

Client library for Google Apps Script Execution

## Installation and Usage
```bash
npm install --save datafire @datafire/google_script
```

```js
let datafire = require('datafire');
let google_script = require('@datafire/google_script').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_script: account,
  }
})

google_script.scripts.run({}, context).then(data => {
  console.log(data);
})
```

## Description
Executes Google Apps Script projects.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_script.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_script.oauthRefresh(null, context)
```


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

#### Parameters
* scriptId (string) **required** - The project key of the script to be executed. To find the project key, open
* body (object) - A request to run the function in a script. The script is identified by the
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.

