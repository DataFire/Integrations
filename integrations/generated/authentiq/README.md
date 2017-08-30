# @datafire/authentiq

Client library for Authentiq Connect

## Installation and Usage
```bash
npm install --save datafire @datafire/authentiq
```

```js
let datafire = require('datafire');
let authentiq = require('@datafire/authentiq').create({
  client_registration_token: "",
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

authentiq.authorize({}).then(data => {
  console.log(data);
})
```

## Description
Authentiq Connect OAuth 2.0 and OpenID Connect API reference.
Learn about [Authentiq ID](https://www.authentiq.com/) or check out the [Authentiq Connect](https://developers.authentiq.com) developer documentation.


## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
authentiq.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
authentiq.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### authorize
Start a session with Authentiq Connect and authenticate a user.

Example:

```
GET https://connect.authentiq.io/authorize?client_id=<your-client-id>&response_type=code+id_token&scope=openid+email&redirect_uri=<your-redirect-uri>&state=0123456789
```

This endpoint is compatible with OpenID Connect and also supports the POST method, in which case the parameters are passed as a form post.

See also:
  - [OAuth 2.0 Authorization Endpoint](http://tools.ietf.org/html/rfc6749#section-3.1)
  - [OIDC Authentication request](http://openid.net/specs/openid-connect-core-1_0.html#AuthRequest)
  - [OIDC Successful Authentication response](http://openid.net/specs/openid-connect-core-1_0.html#AuthResponse)
  - [OIDC Error Authentication response](http://openid.net/specs/openid-connect-core-1_0.html#AuthError)



```js
authentiq.authorize({
  "client_id": "",
  "response_type": "",
  "scope": "",
  "redirect_uri": "",
  "state": ""
}, context)
```

#### Parameters
* client_id (string) **required** - A client ID obtained from the [Dashboard](https://dashboard.authentiq.com/).
* response_type (string) **required** - The OIDC response type to use for this authentication flow. Valid choices are `code`, `id_token`, `token`, `token id_token`, `code id_token` `code token` and `code token id_token`, but a client can be configured with a more restricted set.
* scope (string) **required** - The space-separated identity claims to request from the end-user. Always include `openid` as a scope for compatibility with OIDC.
* redirect_uri (string) **required** - The location to redirect to after (un)successful authentication. See OIDC for the parameters passed in the query string (`response_mode=query`) or as fragments (`response_mode=fragment`). Unless the client is in test-mode this must be one of the registered redirect URLs.
* state (string) **required** - An opaque string that will be passed back to the redirect URL and therefore can be used to communicate client side state and prevent CSRF attacks.
* response_mode (string) - Whether to append parameters to the redirect URL in the query string (`query`) or as fragments (`fragment`). This option usually has a sensible default for each of the response types.
* nonce (string) - An nonce provided by the client (and opaque to Authentiq Connect) that will be included in any ID Token generated for this session. Clients should use the nonce to mitigate replay attacks.
* display (string) - The authentication display mode, which can be one of `page`, `popup` or `modal`. Defaults to `page`.
* prompt (string) - Space-delimited, case sensitive list of ASCII string values that specifies whether the Authorization Server prompts the End-User for reauthentication and consent. The supported values are: `none`, `login`, `consent`. If `consent` the end-user is asked to (re)confirm what claims they share. Use `none` to check for an active session.
* max_age (integer) - Specifies the allowable elapsed time in seconds since the last time the end-user was actively authenticated.
* ui_locales (string) - Specifies the preferred language to use on the authorization page, as a space-separated list of BCP47 language tags. Ignored at the moment.

### client
Retrieve a list of clients.



```js
authentiq.client(null, context)
```

#### Parameters
*This action has no parameters*

### createClient
Register a new client with this Authentiq Connect provider.

This endpoint is compatible with [OIDC's Client Registration](http://openid.net/specs/openid-connect-registration-1_0.html) extension.

See also:
- [OIDC Client Registration Endpoint](http://openid.net/specs/openid-connect-registration-1_0.html#ClientRegistration)



```js
authentiq.createClient({
  "body": null
}, context)
```

#### Parameters
* body (undefined) **required** - Client object

### clientClient_id
Delete a previously registered client.



```js
authentiq.clientClient_id({
  "client_id": ""
}, context)
```

#### Parameters
* client_id (string) **required** - Client identifier

### getClient
Retrieve the configuration of a previously registered client.

See also:
- [OIDC Client Configuration Endpoint](http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint)



```js
authentiq.getClient({
  "client_id": ""
}, context)
```

#### Parameters
* client_id (string) **required** - Client identifier

### updateClient
Update the configuration of a previously registered client.

See also:
- [OIDC Client Configuration Endpoint](http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint)



```js
authentiq.updateClient({
  "client_id": "",
  "body": null
}, context)
```

#### Parameters
* client_id (string) **required** - Client identifier
* body (undefined) **required** - Client object

### token
Exchange en authorization code for an ID Token or Access Token.

This endpoint supports both `client_secret_post` and `client_secret_basic` authenticatino methods, as specified by the client's `token_endpoint_auth_method`.

See also:
  - [OIDC Token Endpoint](http://openid.net/specs/openid-connect-core-1_0.html#TokenRequest)
  - [OIDC Successful Token response](http://openid.net/specs/openid-connect-core-1_0.html#TokenResponse)
  - [OIDC Token Error response](http://openid.net/specs/openid-connect-core-1_0.html#TokenError)



```js
authentiq.token({
  "client_id": "",
  "client_secret": "",
  "grant_type": "",
  "code": "",
  "redirect_uri": ""
}, context)
```

#### Parameters
* Authorization (string) - HTTP Basic authorization header.
* client_id (string) **required** - The registered client ID.
* client_secret (string) **required** - The registered client ID secret.
* grant_type (string) **required** - The authorization grant type, must be `authorization_code`.
* code (string) **required** - The authorization code previously obtained from the Authentication endpoint.
* redirect_uri (string) **required** - The redirect URL that was used previously with the Authentication endpoint.

### userInfo
Use this endpoint to retrieve a user's profile in case you've not already obtained enough details from the ID Token via the Token Endpoint.
 See also:
 - [OIDC UserInfo endpoint](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo)



```js
authentiq.userInfo(null, context)
```

#### Parameters
*This action has no parameters*

### authorizeIframe
An OpenID Connect Session Management iframe to facilitate e.g. single sign-on or remote logouts.

The iframe implements the OIDC postMessage-based [change notification protocol](http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification) via which a client can receive notifications about session state changes.

See also:
- [OIDC OP iframe](http://openid.net/specs/openid-connect-session-1_0.html#OPiframe)



```js
authentiq.authorizeIframe({
  "client_id": ""
}, context)
```

#### Parameters
* client_id (string) **required** - Client identifier

