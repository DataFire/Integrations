# @datafire/google_discovery

Client library for APIs Discovery Service

## Installation and Usage
```bash
npm install --save datafire @datafire/google_discovery
```

```js
let datafire = require('datafire');
let google_discovery = require('@datafire/google_discovery').create();

google_discovery.apis.list({}).then(data => {
  console.log(data);
})
```

## Description
Provides information about other Google APIs, such as what APIs are available, the resource, and method details for each API.

## Actions
### apis.list
Retrieve the list of APIs supported at this endpoint.


```js
google_discovery.apis.list({}, context)
```

#### Parameters
* name (string) - Only include APIs with the given name.
* preferred (boolean) - Return only the preferred version of an API.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### apis.getRest
Retrieve the description of a particular version of an api.


```js
google_discovery.apis.getRest({
  "api": "",
  "version": ""
}, context)
```

#### Parameters
* api (string) **required** - The name of the API.
* version (string) **required** - The version of the API.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

