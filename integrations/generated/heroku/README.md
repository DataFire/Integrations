# @datafire/heroku

Client library for Heroku

## Installation and Usage
```bash
npm install --save datafire @datafire/heroku
```

```js
let datafire = require('datafire');
let heroku = require('@datafire/heroku').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
heroku.oauthRefresh(null, context)
```


### addons.get
List all available addons.


```js
heroku.addons.get({
  "Accept": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.

### apps.app.addons.get
List addons installed on an app.


```js
heroku.apps.app.addons.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.

### apps.app.addons.addon.post
Install an addon to an app.


```js
heroku.apps.app.addons.addon.post({
  "Accept": "",
  "app": "",
  "addon": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.
* addon (string) **required** - the addon name.

### apps.app.addons.addon.put
Upgrade an addon to an app.


```js
heroku.apps.app.addons.addon.put({
  "Accept": "",
  "app": "",
  "addon": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.
* addon (string) **required** - the addon name.

### apps.app.addons.addon.delete
Uninstall an addon from an app.


```js
heroku.apps.app.addons.addon.delete({
  "Accept": "",
  "app": "",
  "addon": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.
* addon (string) **required** - the addon name.

### apps.get
List apps.


```js
heroku.apps.get({
  "Accept": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.

### apps.post
Create an app.


```js
heroku.apps.post({
  "Accept": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.

### apps.name.get
Get info for an app.


```js
heroku.apps.name.get({
  "Accept": "",
  "name": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* name (string) **required** - The app name.

### apps.name.delete
Destroy an app.


```js
heroku.apps.name.delete({
  "Accept": "",
  "name": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* name (string) **required** - The app name.

### apps.app.collaborators.get
List collaborators for an app.


```js
heroku.apps.app.collaborators.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.

### apps.app.collaborators.email.delete
Remove a collaborator from an app.


```js
heroku.apps.app.collaborators.email.delete({
  "Accept": "",
  "app": "",
  "email": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.
* email (string) **required** - The email of the user to remove as a collaborator.

### apps.app.config_vars.get
List config vars for an app.


```js
heroku.apps.app.config_vars.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.

### apps.app.config_vars.put
Add config vars to an app.


```js
heroku.apps.app.config_vars.put({
  "Accept": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.

### apps.app.config_vars.key.delete
Remove a config var from an app.


```js
heroku.apps.app.config_vars.key.delete({
  "Accept": "",
  "app": "",
  "key": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.
* key (string) **required** - The config var to remove.

### apps.app.domains.get
List domains for an app.


```js
heroku.apps.app.domains.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.

### apps.app.domains.domain_name.delete
Remove a domain from an app.


```js
heroku.apps.app.domains.domain_name.delete({
  "Accept": "",
  "app": "",
  "domain_name": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.
* domain_name (string) **required** - The domain to remove.

### user.keys.get
List SSH keys.


```js
heroku.user.keys.get({
  "Accept": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.

### user.keys.post
Associate an SSH key with this account.


```js
heroku.user.keys.post({
  "Accept": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.

### user.keys.key.delete
Remove an SSH key from this account.


```js
heroku.user.keys.key.delete({
  "Accept": "",
  "key": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* key (string) **required** - The username@hostname description field of the key.

### apps.app.logs.get
Get logs for an app.


```js
heroku.apps.app.logs.get({
  "Accept": "",
  "app": "",
  "logplex": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.
* logplex (string) **required** - Use logplex to stream logs (always true).
* num (integer) - The number of lines to display.
* ps (string) - Only display logs from a given process.
* source (string) - Only display logs from a given source.
* tail (string) - 1: continually stream logs - <blank>: display only num logs

### apps.app.ps.get
List processes for an app.


```js
heroku.apps.app.ps.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.

### apps.app.ps.post
Run a one-off process.


```js
heroku.apps.app.ps.post({
  "Accept": "",
  "command": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* command (string) **required** - The command to run.
* attach (string) - true: use rendezvous to access stdin/stdout - <blank>: stream process output to the application log
* app (string) **required** - The app name.

### apps.app.ps.restart.post
Restart processes of an app. Specify either ps or type to restart only the specified processes. Leave both blank to restart the entire app.


```js
heroku.apps.app.ps.restart.post({
  "Accept": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.
* ps (string) - The name of a process to restart.
* type (string) - The type of process to restart.

### apps.app.ps.stop.post
Stop processes of an app. Specify either ps or type to stop the specified processes.


```js
heroku.apps.app.ps.stop.post({
  "Accept": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.

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

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.
* type (string) **required** - The type of process to scale.
* qty (string) **required** - The desired number of processes of this type.

### apps.app.releases.get
List releases for an app.


```js
heroku.apps.app.releases.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.

### apps.app.releases.post
Rollback to a release.


```js
heroku.apps.app.releases.post({
  "Accept": "",
  "rollback": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* rollback (string) **required** - The release to which to roll back.
* app (string) **required** - The app name.

### apps.app.releases.release.get
Get info for a release.


```js
heroku.apps.app.releases.release.get({
  "Accept": "",
  "app": "",
  "release": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.
* release (string) **required** - The release name.

### apps.app.stack.get
List available stacks for an app.


```js
heroku.apps.app.stack.get({
  "Accept": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.

### apps.app.stack.put
Migrate an app to a new stack.


```js
heroku.apps.app.stack.put({
  "Accept": "",
  "app": ""
}, context)
```

#### Parameters
* Accept (string) **required** - Content type.
* app (string) **required** - The app name.

