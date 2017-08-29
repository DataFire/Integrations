# @datafire/box_token

Client library for Box 2.0 OAuth2 Token

## Installation and Usage
```bash
npm install --save datafire @datafire/box_token
```

```js
let datafire = require('datafire');
let box_token = require('@datafire/box_token').create();

box_token.revokeToken({}).then(data => {
  console.log(data);
})
```

## Description
The Box Token API provides methods to retrieve an access token and revoke an access token. An access token is a data string that enables Box to verify that a request belongs to an authorized session. In the normal order of operations you will being by requesting authentication from the Box.

## Actions
### revokeToken
This is the URL of the Box revoke endpoint, the endpoint that revokes access tokens, or to put it another way, the endpoint that ends sessions, logging users out.


```js
box_token.revokeToken({
  "token": "",
  "client_id": "",
  "client_secret": ""
}, context)
```

#### Parameters
* token (string) **required**
* client_id (string) **required** - The client ID of the application requesting authentication.
* client_secret (string) **required** - The client secret of the application requesting authentication.

### generateAccessToken
This is the URL of the Box token endpoint, the endpoint that returns access tokens. An access token is a data string that enables Box to verify that a request belongs to an authorized session.


```js
box_token.generateAccessToken({
  "grant_type": "",
  "client_id": "",
  "client_secret": ""
}, context)
```

#### Parameters
* grant_type (string) **required**
* code (string) - The authorization code returned by Box in response to a successfull authentication request.
* client_id (string) **required** - The client ID of the application requesting authentication.
* client_secret (string) **required** - The client secret of the application requesting authentication.
* refresh_token (string) - The refresh_token that is used to get the new access_token
* subject_token (string) - This is the primary/secondary application token you will exchange for the file token.
* subject_token_type (string) - The subject token type is urn:ietf:params:oauth:token-type:access_token
* resource (string) - Full url path to the file that the token should be generated for example, https://api.box.com/2.0/files/{file_id}
* actor_token (string) - Full url path to the file that the token should be generated for example, https://api.box.com/2.0/files/{file_id}
* actor_token_type (string) - Full url path to the file that the token should be generated for example, https://api.box.com/2.0/files/{file_id}

