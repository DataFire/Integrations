# @datafire/authentiq
Authentiq Connect OAuth 2.0 and OpenID Connect API reference.
Learn about [Authentiq ID](https://www.authentiq.com/) or check out the [Authentiq Connect](https://developers.authentiq.com) developer documentation.


## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: authorize
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


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "client_id": {
      "type": "string",
      "description": "A client ID obtained from the [Dashboard](https://dashboard.authentiq.com/).\n"
    },
    "response_type": {
      "type": "string",
      "description": "The OIDC response type to use for this authentication flow. Valid choices are `code`, `id_token`, `token`, `token id_token`, `code id_token` `code token` and `code token id_token`, but a client can be configured with a more restricted set.\n"
    },
    "scope": {
      "type": "string",
      "description": "The space-separated identity claims to request from the end-user. Always include `openid` as a scope for compatibility with OIDC.\n"
    },
    "redirect_uri": {
      "type": "string",
      "description": "The location to redirect to after (un)successful authentication. See OIDC for the parameters passed in the query string (`response_mode=query`) or as fragments (`response_mode=fragment`). Unless the client is in test-mode this must be one of the registered redirect URLs.\n"
    },
    "state": {
      "type": "string",
      "description": "An opaque string that will be passed back to the redirect URL and therefore can be used to communicate client side state and prevent CSRF attacks.\n"
    },
    "response_mode": {
      "type": "string",
      "description": "Whether to append parameters to the redirect URL in the query string (`query`) or as fragments (`fragment`). This option usually has a sensible default for each of the response types.\n"
    },
    "nonce": {
      "type": "string",
      "description": "An nonce provided by the client (and opaque to Authentiq Connect) that will be included in any ID Token generated for this session. Clients should use the nonce to mitigate replay attacks.\n"
    },
    "display": {
      "type": "string",
      "description": "The authentication display mode, which can be one of `page`, `popup` or `modal`. Defaults to `page`.\n"
    },
    "prompt": {
      "type": "string",
      "description": "Space-delimited, case sensitive list of ASCII string values that specifies whether the Authorization Server prompts the End-User for reauthentication and consent. The supported values are: `none`, `login`, `consent`. If `consent` the end-user is asked to (re)confirm what claims they share. Use `none` to check for an active session.\n"
    },
    "max_age": {
      "type": "integer",
      "description": "Specifies the allowable elapsed time in seconds since the last time the end-user was actively authenticated.\n"
    },
    "ui_locales": {
      "type": "string",
      "description": "Specifies the preferred language to use on the authorization page, as a space-separated list of BCP47 language tags. Ignored at the moment.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "client_id",
    "response_type",
    "scope",
    "redirect_uri",
    "state"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: client
Retrieve a list of clients.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/Client"
  },
  "type": "array"
}
```
## Operation: createClient
Register a new client with this Authentiq Connect provider.

This endpoint is compatible with [OIDC's Client Registration](http://openid.net/specs/openid-connect-registration-1_0.html) extension.

See also:
- [OIDC Client Registration Endpoint](http://openid.net/specs/openid-connect-registration-1_0.html#ClientRegistration)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/Client"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: clientClient_id
Delete a previously registered client.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "client_id": {
      "type": "string",
      "description": "Client identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "client_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getClient
Retrieve the configuration of a previously registered client.

See also:
- [OIDC Client Configuration Endpoint](http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "client_id": {
      "type": "string",
      "description": "Client identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "client_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Client"
}
```
## Operation: updateClient
Update the configuration of a previously registered client.

See also:
- [OIDC Client Configuration Endpoint](http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "client_id": {
      "type": "string",
      "description": "Client identifier"
    },
    "body": {
      "$ref": "#/definitions/Client"
    }
  },
  "additionalProperties": false,
  "required": [
    "client_id",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Client"
}
```
## Operation: token
Exchange en authorization code for an ID Token or Access Token.

This endpoint supports both `client_secret_post` and `client_secret_basic` authenticatino methods, as specified by the client's `token_endpoint_auth_method`.

See also:
  - [OIDC Token Endpoint](http://openid.net/specs/openid-connect-core-1_0.html#TokenRequest)
  - [OIDC Successful Token response](http://openid.net/specs/openid-connect-core-1_0.html#TokenResponse)
  - [OIDC Token Error response](http://openid.net/specs/openid-connect-core-1_0.html#TokenError)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "HTTP Basic authorization header.\n"
    },
    "client_id": {
      "type": "string",
      "description": "The registered client ID.\n"
    },
    "client_secret": {
      "type": "string",
      "format": "password",
      "description": "The registered client ID secret.\n"
    },
    "grant_type": {
      "type": "string",
      "description": "The authorization grant type, must be `authorization_code`.\n"
    },
    "code": {
      "type": "string",
      "description": "The authorization code previously obtained from the Authentication endpoint.\n"
    },
    "redirect_uri": {
      "type": "string",
      "description": "The redirect URL that was used previously with the Authentication endpoint.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "client_id",
    "client_secret",
    "grant_type",
    "code",
    "redirect_uri"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Token"
}
```
## Operation: userInfo
Use this endpoint to retrieve a user's profile in case you've not already obtained enough details from the ID Token via the Token Endpoint.
 See also:
 - [OIDC UserInfo endpoint](http://openid.net/specs/openid-connect-core-1_0.html#UserInfo)


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserInfo"
}
```
## Operation: authorizeIframe
An OpenID Connect Session Management iframe to facilitate e.g. single sign-on or remote logouts.

The iframe implements the OIDC postMessage-based [change notification protocol](http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification) via which a client can receive notifications about session state changes.

See also:
- [OIDC OP iframe](http://openid.net/specs/openid-connect-session-1_0.html#OPiframe)


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "client_id": {
      "type": "string",
      "description": "Client identifier"
    }
  },
  "additionalProperties": false,
  "required": [
    "client_id"
  ]
}
```
### Output Schema
```json
{}
```
