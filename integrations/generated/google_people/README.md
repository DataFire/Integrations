# @datafire/google_people

Client library for Google People

## Installation and Usage
```bash
npm install --save datafire @datafire/google_people
```

```js
let datafire = require('datafire');
let google_people = require('@datafire/google_people').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_people: account,
  }
})


google_people.people.getBatchGet({}, context).then(data => {
  console.log(data);
})
```

## Description
Provides access to information about profiles and contacts.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_people.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_people.oauthRefresh(null, context)
```


### people.getBatchGet
Provides information about a list of specific people by specifying a list
of requested resource names. Use `people/me` to indicate the authenticated
user.


```js
google_people.people.getBatchGet({}, context)
```


### people.get
Provides information about a person resource for a resource name. Use
`people/me` to indicate the authenticated user.


```js
google_people.people.get({
  "resourceName": ""
}, context)
```

#### Parameters
* resourceName (string) **required** - The resource name of the person to provide information about.
* requestMask.includeField (string) - Comma-separated list of fields to be included in the response. Omitting
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

### people.connections.list
Provides a list of the authenticated user's contacts merged with any
linked profiles.


```js
google_people.people.connections.list({
  "resourceName": ""
}, context)
```

#### Parameters
* resourceName (string) **required** - The resource name to return connections for. Only `people/me` is valid.
* requestSyncToken (boolean) - Whether the response should include a sync token, which can be used to get
* pageToken (string) - The token of the page to be returned.
* pageSize (integer) - The number of connections to include in the response. Valid values are
* requestMask.includeField (string) - Comma-separated list of fields to be included in the response. Omitting
* syncToken (string) - A sync token, returned by a previous call to `people.connections.list`.
* sortOrder (string) - The order in which the connections should be sorted. Defaults to
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.

