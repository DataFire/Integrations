# @datafire/heroku

Client library for Heroku

## Installation and Usage
```bash
npm install --save @datafire/heroku
```
```js
let heroku = require('@datafire/heroku').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

heroku.addons.get({}).then(data => {
  console.log(data);
})
```

## Description

Manage your Heroku apps, configs, collaborators & resources

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
heroku.oauthCallback({
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
heroku.oauthRefresh(null, context)
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

### addons.get
List all available addons.


```js
heroku.addons.get({
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.

#### Output
*Output schema unknown*

### apps.app.addons.get
List addons installed on an app.


```js
heroku.apps.app.addons.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.app.addons.addon.post
Install an addon to an app.


```js
heroku.apps.app.addons.addon.post({
  "Accept": "",
  "app": "",
  "addon": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.
  * addon **required** `string`: the addon name.

#### Output
*Output schema unknown*

### apps.app.addons.addon.put
Upgrade an addon to an app.


```js
heroku.apps.app.addons.addon.put({
  "Accept": "",
  "app": "",
  "addon": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.
  * addon **required** `string`: the addon name.

#### Output
*Output schema unknown*

### apps.app.addons.addon.delete
Uninstall an addon from an app.


```js
heroku.apps.app.addons.addon.delete({
  "Accept": "",
  "app": "",
  "addon": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.
  * addon **required** `string`: the addon name.

#### Output
*Output schema unknown*

### apps.get
List apps.


```js
heroku.apps.get({
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.

#### Output
*Output schema unknown*

### apps.post
Create an app.


```js
heroku.apps.post({
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.

#### Output
*Output schema unknown*

### apps.name.get
Get info for an app.


```js
heroku.apps.name.get({
  "Accept": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * name **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.name.delete
Destroy an app.


```js
heroku.apps.name.delete({
  "Accept": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * name **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.app.collaborators.get
List collaborators for an app.


```js
heroku.apps.app.collaborators.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.app.collaborators.email.delete
Remove a collaborator from an app.


```js
heroku.apps.app.collaborators.email.delete({
  "Accept": "",
  "app": "",
  "email": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.
  * email **required** `string`: The email of the user to remove as a collaborator.

#### Output
*Output schema unknown*

### apps.app.config_vars.get
List config vars for an app.


```js
heroku.apps.app.config_vars.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.app.config_vars.put
Add config vars to an app.


```js
heroku.apps.app.config_vars.put({
  "Accept": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.app.config_vars.key.delete
Remove a config var from an app.


```js
heroku.apps.app.config_vars.key.delete({
  "Accept": "",
  "app": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.
  * key **required** `string`: The config var to remove.

#### Output
*Output schema unknown*

### apps.app.domains.get
List domains for an app.


```js
heroku.apps.app.domains.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.app.domains.domain_name.delete
Remove a domain from an app.


```js
heroku.apps.app.domains.domain_name.delete({
  "Accept": "",
  "app": "",
  "domain_name": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.
  * domain_name **required** `string`: The domain to remove.

#### Output
*Output schema unknown*

### user.keys.get
List SSH keys.


```js
heroku.user.keys.get({
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.

#### Output
*Output schema unknown*

### user.keys.post
Associate an SSH key with this account.


```js
heroku.user.keys.post({
  "Accept": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.

#### Output
*Output schema unknown*

### user.keys.key.delete
Remove an SSH key from this account.


```js
heroku.user.keys.key.delete({
  "Accept": "",
  "key": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * key **required** `string`: The username@hostname description field of the key.

#### Output
*Output schema unknown*

### apps.app.logs.get
Get logs for an app.


```js
heroku.apps.app.logs.get({
  "Accept": "",
  "app": "",
  "logplex": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.
  * logplex **required** `string`: Use logplex to stream logs (always true).
  * num `integer`: The number of lines to display.
  * ps `string`: Only display logs from a given process.
  * source `string`: Only display logs from a given source.
  * tail `string`: 1: continually stream logs - <blank>: display only num logs

#### Output
*Output schema unknown*

### apps.app.ps.get
List processes for an app.


```js
heroku.apps.app.ps.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.app.ps.post
Run a one-off process.


```js
heroku.apps.app.ps.post({
  "Accept": "",
  "command": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * command **required** `string`: The command to run.
  * attach `string`: true: use rendezvous to access stdin/stdout - <blank>: stream process output to the application log
  * app **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.app.ps.restart.post
Restart processes of an app. Specify either ps or type to restart only the specified processes. Leave both blank to restart the entire app.


```js
heroku.apps.app.ps.restart.post({
  "Accept": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.
  * ps `string`: The name of a process to restart.
  * type `string`: The type of process to restart.

#### Output
*Output schema unknown*

### apps.app.ps.stop.post
Stop processes of an app. Specify either ps or type to stop the specified processes.


```js
heroku.apps.app.ps.stop.post({
  "Accept": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.app.ps.scale.post
Scale processes of an app.


```js
heroku.apps.app.ps.scale.post({
  "Accept": "",
  "app": "",
  "type": "",
  "qty": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.
  * type **required** `string`: The type of process to scale.
  * qty **required** `string`: The desired number of processes of this type.

#### Output
*Output schema unknown*

### apps.app.releases.get
List releases for an app.


```js
heroku.apps.app.releases.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.app.releases.post
Rollback to a release.


```js
heroku.apps.app.releases.post({
  "Accept": "",
  "rollback": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * rollback **required** `string`: The release to which to roll back.
  * app **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.app.releases.release.get
Get info for a release.


```js
heroku.apps.app.releases.release.get({
  "Accept": "",
  "app": "",
  "release": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.
  * release **required** `string`: The release name.

#### Output
*Output schema unknown*

### apps.app.stack.get
List available stacks for an app.


```js
heroku.apps.app.stack.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.

#### Output
*Output schema unknown*

### apps.app.stack.put
Migrate an app to a new stack.


```js
heroku.apps.app.stack.put({
  "Accept": "",
  "app": ""
}, context)
```

#### Input
* input `object`
  * Accept **required** `string` (values: application/json, application/xml): Content type.
  * app **required** `string`: The app name.

#### Output
*Output schema unknown*



## Definitions

** No definitions **
