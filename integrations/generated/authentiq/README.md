# @datafire/authentiq

Client library for Authentiq Connect API

## Installation and Usage
```bash
npm install --save @datafire/authentiq
```
```js
let authentiq = require('@datafire/authentiq').create({
  client_registration_token: "",
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
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
authentiq.oauthRefresh(null, context)
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

### authorize
Start a session with Authentiq Connect to authenticate a user.

```
GET https://connect.authentiq.io/authorize?client_id=<your-client-id>&response_type=code+id_token&scope=openid+email&redirect_uri=<your-redirect-uri>&state=0123456789
```

This endpoint also supports the POST method.



```js
authentiq.authorize({
  "client_id": "",
  "response_type": "",
  "scope": "",
  "redirect_uri": "",
  "state": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: A client ID obtained from the [Dashboard](https://dashboard.authentiq.com/).
  * response_type **required** `string`: The OIDC response type to use for this authentication flow. Valid choices are `code`, `id_token`, `token`, `token id_token`, `code id_token` `code token` and `code token id_token`, but a client can be configured with a more restricted set.
  * scope **required** `string`: The space-separated identity claims to request from the end-user. Always include `openid` as a scope for compatibility with OIDC.
  * redirect_uri **required** `string`: The location to redirect to after (un)successful authentication. See OIDC for the parameters passed in the query string (`response_mode=query`) or as fragments (`response_mode=fragment`). Unless the client is in test-mode this must be one of the registered redirect URLs.
  * state **required** `string`: An opaque string that will be passed back to the redirect URL and therefore can be used to communicate client side state and prevent CSRF attacks.
  * response_mode `string`: Whether to append parameters to the redirect URL in the query string (`query`) or as fragments (`fragment`). This option usually has a sensible default for each of the response types.
  * nonce `string`: An nonce provided by the client (and opaque to Authentiq Connect) that will be included in any ID Token generated for this session. Clients should use the nonce to mitigate replay attacks.
  * display `string`: The authentication display mode, which can be one of `page`, `popup` or `modal`. Defaults to `page`.
  * prompt `string`: Space-delimited, case sensitive list of ASCII string values that specifies whether the Authorization Server prompts the End-User for reauthentication and consent. The supported values are: `none`, `login`, `consent`. If `consent` the end-user is asked to (re)confirm what claims they share. Use `none` to check for an active session.
  * max_age `integer`: Specifies the allowable elapsed time in seconds since the last time the end-user was actively authenticated.
  * ui_locales `string`: Specifies the preferred language to use on the authorization page, as a space-separated list of BCP47 language tags. Ignored at the moment.

#### Output
*Output schema unknown*

### client
Retrieve a list of clients.



```js
authentiq.client(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Client](#client)

### createClient
Register a new client with this Authentiq Connect provider.

This endpoint is compatible with [OIDC's Client Registration](http://openid.net/specs/openid-connect-registration-1_0.html) extension.



```js
authentiq.createClient({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [Client](#client)

#### Output
*Output schema unknown*

### clientClient_id
Delete a previously registered client.



```js
authentiq.clientClient_id({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: Client identifier

#### Output
*Output schema unknown*

### getClient
Retrieve the configuration of a previously registered client.



```js
authentiq.getClient({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: Client identifier

#### Output
* output [Client](#client)

### updateClient
Update the configuration of a previously registered client.



```js
authentiq.updateClient({
  "client_id": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: Client identifier
  * body **required** [Client](#client)

#### Output
* output [Client](#client)

### token
Exchange en authorization code for an ID Token or Access Token.

This endpoint supports both `client_secret_basic` (default) and `client_secret_basic` authentication methods, as specified by the client's `token_endpoint_auth_method`.



```js
authentiq.token({
  "client_id": "",
  "client_secret": "",
  "grant_type": "",
  "code": "",
  "redirect_uri": ""
}, context)
```

#### Input
* input `object`
  * Authorization `string`: HTTP Basic authorization header.
  * client_id **required** `string`: The registered client ID.
  * client_secret **required** `string`: The registered client ID secret.
  * grant_type **required** `string`: The authorization grant type, must be `authorization_code`.
  * code **required** `string`: The authorization code previously obtained from the Authentication endpoint.
  * redirect_uri **required** `string`: The redirect URL that was used previously with the Authentication endpoint.

#### Output
* output [Token](#token)

### userInfo
Use this endpoint to retrieve a user's profile in case you are unable to parse an ID Token or you've not already obtained enough details from the ID Token via the Token Endpoint.



```js
authentiq.userInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserInfo](#userinfo)

### authorizeIframe
An OpenID Connect Session Management iframe to facilitate e.g. single sign-on or remote logouts.

The iframe implements the OIDC postMessage-based [change notification protocol](http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification) via which a client can receive notifications about session state changes.



```js
authentiq.authorizeIframe({
  "client_id": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: Client identifier

#### Output
*Output schema unknown*



## Definitions

### Address
* Address `object`: OIDC Address structure
  * country `string`
  * locality `string`
  * postal_code `string`
  * region `string`
  * street_address `string`

### Client
* Client `object`: Client object
  * application_type `string`
  * client_id `string`
  * client_name **required** `string`
  * client_uri **required** `string`
  * contacts `array`
    * items `string`
  * default_max_age `integer`
  * default_scopes `array`
    * items `string`
  * grant_types `array`
    * items `string`
  * logo_uri `string`
  * policy_uri `string`
  * redirect_uris `array`
    * items `string`
  * response_types `array`
    * items `string`
  * tos_uri `string`

### OAuth2Error
* OAuth2Error `object`: Error Response defined as in Section 5.2 of OAuth 2.0 [RFC6749].
  * error **required** `string`
  * error_description `string`

### ProblemDetail
* ProblemDetail `object`: HTTP Problem Detail
  * detail `string`: Human-readable explanation specific to this occurrence of the problem.
  * status **required** `integer`: The HTTP status code for this occurrence of the problem.
  * title `string`: Human-readable summary of the problem type.
  * type **required** `string`

### Session
* Session `object`: Session object
  * authenticated_at `string`
  * client_id `string`
  * client_name `string`
  * client_uri `string`
  * concluded_at `string`
  * connected_at `string`
  * contacts `array`
    * items `string`
  * created_at `string`
  * deleted_at `string`
  * logo_uri `string`
  * nonce `string`
  * policy_uri `string`
  * redirect_uri `string`
  * response_mode `string`
  * response_type `string`
  * scopes `array`
    * items `string`
  * scopes_optional `array`
    * items `string`
  * scopes_required `array`
    * items `string`
  * scopes_seen `array`
    * items `string`
  * scopes_signed `array`
    * items `string`
  * session_id `string`
  * session_state `string`
  * session_uri `string`
  * sub `string`
  * tokens_seen `array`
    * items `string`
  * tos_uri `string`
  * version `integer`

### Token
* Token `object`: Successful token response
  * access_token `string`: The access token issued by the authorization server.
  * expires_at `integer`: The time the access token will expire in seconds since epoch.
  * expires_in `integer`: The lifetime in seconds of the access token.
  * id_token `string`: ID Token value associated with the authenticated session.
  * refresh_token `string`: The refresh token issued to the client, if any.
  * scope `string`: The scope of the granted tokens.
  * token_type **required** `string`

### UserInfo
* UserInfo `object`: OIDC UserInfo structure
  * address [Address](#address)
  * aq:location `object`: Geolocation structure
    * address [Address](#address)
    * latitude `number`
    * longitude `number`
  * email `string`
  * email_verified `boolean`
  * family_name `string`
  * given_name `string`
  * name `string`
  * phone_number `string`
  * phone_number_verified `boolean`
  * sub **required** `string`


