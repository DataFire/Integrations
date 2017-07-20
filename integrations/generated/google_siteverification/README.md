# @datafire/google_siteverification

Client library for Google Site Verification

## Installation and Usage
```bash
npm install --save datafire @datafire/google_siteverification
```

```js
let datafire = require('datafire');
let google_siteverification = require('@datafire/google_siteverification').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_siteverification: account,
  }
})


google_siteverification.webResource.list({}, context).then(data => {
  console.log(data);
})
```

## Description
Verifies ownership of websites or domains with Google.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_siteverification.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_siteverification.oauthRefresh(null, context)
```


### webResource.getToken
Get a verification token for placing on a website or domain.


```js
google_siteverification.webResource.getToken({}, context)
```


### webResource.list
Get the list of your verified websites and domains.


```js
google_siteverification.webResource.list({}, context)
```


### webResource.insert
Attempt verification of a website or domain.


```js
google_siteverification.webResource.insert({
  "verificationMethod": ""
}, context)
```

#### Parameters
* verificationMethod (string) **required** - The method to use for verifying a site or domain.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### webResource.delete
Relinquish ownership of a website or domain.


```js
google_siteverification.webResource.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id of a verified site or domain.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### webResource.get
Get the most current data for a website or domain.


```js
google_siteverification.webResource.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id of a verified site or domain.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### webResource.patch
Modify the list of owners for your website or domain. This method supports patch semantics.


```js
google_siteverification.webResource.patch({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id of a verified site or domain.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### webResource.update
Modify the list of owners for your website or domain.


```js
google_siteverification.webResource.update({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - The id of a verified site or domain.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

