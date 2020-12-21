# @datafire/box_token

Client library for Box 2.0 OAuth2 Token

## Installation and Usage
```bash
npm install --save @datafire/box_token
```
```js
let box_token = require('@datafire/box_token').create();

.then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * token **required** `string`
  * client_id **required** `string`: The client ID of the application requesting authentication.
  * client_secret **required** `string`: The client secret of the application requesting authentication.

#### Output
*Output schema unknown*

### generateAccessToken
This is the URL of the Box token endpoint, the endpoint that returns access tokens. An access token is a data string that enables Box to verify that a request belongs to an authorized session.


```js
box_token.generateAccessToken({
  "grant_type": "",
  "client_id": "",
  "client_secret": ""
}, context)
```

#### Input
* input `object`
  * grant_type **required** `string`
  * code `string`: The authorization code returned by Box in response to a successfull authentication request.
  * client_id **required** `string`: The client ID of the application requesting authentication.
  * client_secret **required** `string`: The client secret of the application requesting authentication.
  * refresh_token `string`: The refresh_token that is used to get the new access_token
  * subject_token `string`: This is the primary/secondary application token you will exchange for the file token.
  * subject_token_type `string`: The subject token type is urn:ietf:params:oauth:token-type:access_token
  * resource `string`: Full url path to the file that the token should be generated for example, https://api.box.com/2.0/files/{file_id}
  * actor_token `string`: Full url path to the file that the token should be generated for example, https://api.box.com/2.0/files/{file_id}
  * actor_token_type `string` (values: urn:ietf:params:oauth:token-type:id_token): Full url path to the file that the token should be generated for example, https://api.box.com/2.0/files/{file_id}

#### Output
* output [AccessToken](#accesstoken)



## Definitions

### AccessToken
* Access token response `object`
  * access_token `string`
  * expires_in `integer`
  * issued_token_type `string`
  * refresh_token `string`
  * restricted_to `array`
    * items [RestrictedTo](#restrictedto)
  * token_type `string` (values: bearer)

### FileReference
* FileReference `object`: It references either a file or a folder
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * etag `string`: A unique string identifying the version of this folder.
  * name `string`: The name of the folder.
  * sequence_id `string`: A unique ID for use with the /events endpoint.
  * sha1 `string`: The sha1 hash of this file.

### ItemReference
* ItemReference `object`: It references either a file or a folder
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)
  * etag `string`: A unique string identifying the version of this folder.
  * name `string`: The name of the folder.
  * sequence_id `string`: A unique ID for use with the /events endpoint.

### OAuthError
* OAuthError `object`
  * error `string`
  * error_description `string`
  * error_uri `string`
  * state `string`

### Reference
* Reference `object`
  * id `string`
  * type `string` (values: folder, file, user, file_version, lock, collaboration, comment, task, web_link, collection, task_assignment, event, realtime_server, webhook_event, webhook, enterprise, invite, email_alias, group, group_membership, device_pinner, retention_policy, retention_policy_assignment, file_version_retention, legal_hold_policy, legal_hold_policy_assignment, legal_hold, upload_session)

### RestrictedTo
* RestrictedTo `object`
  * object [FileReference](#filereference)
  * scope `string`


