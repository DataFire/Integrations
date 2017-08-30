# @datafire/google_groupssettings

Client library for Groups Settings

## Installation and Usage
```bash
npm install --save datafire @datafire/google_groupssettings
```

```js
let datafire = require('datafire');
let google_groupssettings = require('@datafire/google_groupssettings').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_groupssettings.groups.get({}).then(data => {
  console.log(data);
})
```

## Description
Lets you manage permission levels and related settings of a group.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_groupssettings.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_groupssettings.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### groups.get
Gets one resource by id.


```js
google_groupssettings.groups.get({
  "groupUniqueId": ""
}, context)
```

#### Parameters
* groupUniqueId (string) **required** - The resource ID
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### groups.patch
Updates an existing resource. This method supports patch semantics.


```js
google_groupssettings.groups.patch({
  "groupUniqueId": ""
}, context)
```

#### Parameters
* groupUniqueId (string) **required** - The resource ID
* body (object) - JSON template for Group resource
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### groups.update
Updates an existing resource.


```js
google_groupssettings.groups.update({
  "groupUniqueId": ""
}, context)
```

#### Parameters
* groupUniqueId (string) **required** - The resource ID
* body (object) - JSON template for Group resource
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

