# @datafire/google_groupsmigration

Client library for Groups Migration

## Installation and Usage
```bash
npm install --save datafire @datafire/google_groupsmigration
```

```js
let datafire = require('datafire');
let google_groupsmigration = require('@datafire/google_groupsmigration').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_groupsmigration.archive.insert({}).then(data => {
  console.log(data);
})
```

## Description
Groups Migration Api.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_groupsmigration.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_groupsmigration.oauthRefresh(null, context)
```


### archive.insert
Inserts a new mail into the archive of the Google group.


```js
google_groupsmigration.archive.insert({
  "groupId": ""
}, context)
```

#### Parameters
* groupId (string) **required** - The group ID
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

