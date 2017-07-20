# @datafire/circleci

Client library for CircleCI

## Installation and Usage
```bash
npm install --save datafire @datafire/circleci
```

```js
let datafire = require('datafire');
let circleci = require('@datafire/circleci').actions;

let account = {
  apikey: "",
}
let context = new datafire.Context({
  accounts: {
    circleci: account,
  }
})


circleci.recent_builds.get({}, context).then(data => {
  console.log(data);
})
```

## Description
The CircleCI API is a RESTful, fully-featured API that allows you to do almost anything in CircleCI.
You can access all information and trigger all actions.
The only thing we don’t provide access to is billing functions, which must be done from the CircleCI web UI.


## Actions
### me.get
Provides information about the signed in user.



```js
circleci.me.get(null, context)
```


### project.username.project.get
Build summary for each of the last 30 builds for a single git repo.



```js
circleci.project.username.project.get({
  "username": "",
  "project": ""
}, context)
```

#### Parameters
* limit (integer) - The number of builds to return. Maximum 100, defaults to 30.
* offset (integer) - The API returns builds starting from this offset, defaults to 0.
* filter (string) - Restricts which builds are returned.
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX

### project.username.project.post
Triggers a new build, returns a summary of the build.



```js
circleci.project.username.project.post({
  "username": "",
  "project": ""
}, context)
```

#### Parameters
* body (object)
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX

### project.username.project.build_cache.delete
Clears the cache for a project.



```js
circleci.project.username.project.build_cache.delete({
  "username": "",
  "project": ""
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX

### project.username.project.checkout_key.get
Lists checkout keys.



```js
circleci.project.username.project.checkout_key.get({
  "username": "",
  "project": ""
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX

### project.username.project.checkout_key.post
Creates a new checkout key.
Only usable with a user API token.



```js
circleci.project.username.project.checkout_key.post({
  "username": "",
  "project": ""
}, context)
```

#### Parameters
* type (string)
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX

### project.username.project.checkout_key.fingerprint.delete
Delete a checkout key.



```js
circleci.project.username.project.checkout_key.fingerprint.delete({
  "username": "",
  "project": "",
  "fingerprint": ""
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX
* fingerprint (string) **required** - XXXXXXXXXX

### project.username.project.checkout_key.fingerprint.get
Get a checkout key.



```js
circleci.project.username.project.checkout_key.fingerprint.get({
  "username": "",
  "project": "",
  "fingerprint": ""
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX
* fingerprint (string) **required** - XXXXXXXXXX

### project.username.project.envvar.get
Lists the environment variables for :project



```js
circleci.project.username.project.envvar.get({
  "username": "",
  "project": ""
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX

### project.username.project.envvar.post
Creates a new environment variable



```js
circleci.project.username.project.envvar.post({
  "username": "",
  "project": ""
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX

### project.username.project.envvar.name.delete
Deletes the environment variable named ':name'



```js
circleci.project.username.project.envvar.name.delete({
  "username": "",
  "project": "",
  "name": ""
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX
* name (string) **required** - XXXXXXXXXX

### project.username.project.envvar.name.get
Gets the hidden value of environment variable :name



```js
circleci.project.username.project.envvar.name.get({
  "username": "",
  "project": "",
  "name": ""
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX
* name (string) **required** - XXXXXXXXXX

### project.username.project.ssh_key.post
Create an ssh key used to access external systems that require SSH key-based authentication



```js
circleci.project.username.project.ssh_key.post({
  "Content-Type": "",
  "body": {},
  "username": "",
  "project": ""
}, context)
```

#### Parameters
* Content-Type (string) **required**
* body (object) **required**
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX

### project.username.project.tree.branch.post
Triggers a new build, returns a summary of the build.
Optional build parameters can be set using an experimental API.

Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)



```js
circleci.project.username.project.tree.branch.post({
  "username": "",
  "project": "",
  "branch": ""
}, context)
```

#### Parameters
* body (object)
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX
* branch (string) **required** - The branch name should be url-encoded.

### project.username.project.build_num.get
Full details for a single build. The response includes all of the fields from the build summary.
This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.



```js
circleci.project.username.project.build_num.get({
  "username": "",
  "project": "",
  "build_num": 0
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX
* build_num (integer) **required** - XXXXXXXXXX

### project.username.project.build_num.artifacts.get
List the artifacts produced by a given build.



```js
circleci.project.username.project.build_num.artifacts.get({
  "username": "",
  "project": "",
  "build_num": 0
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX
* build_num (integer) **required** - XXXXXXXXXX

### project.username.project.build_num.cancel.post
Cancels the build, returns a summary of the build.



```js
circleci.project.username.project.build_num.cancel.post({
  "username": "",
  "project": "",
  "build_num": 0
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX
* build_num (integer) **required** - XXXXXXXXXX

### project.username.project.build_num.retry.post
Retries the build, returns a summary of the new build.



```js
circleci.project.username.project.build_num.retry.post({
  "username": "",
  "project": "",
  "build_num": 0
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX
* build_num (integer) **required** - XXXXXXXXXX

### project.username.project.build_num.tests.get
Provides test metadata for a build
Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)



```js
circleci.project.username.project.build_num.tests.get({
  "username": "",
  "project": "",
  "build_num": 0
}, context)
```

#### Parameters
* username (string) **required** - XXXXXXXXX
* project (string) **required** - XXXXXXXXX
* build_num (integer) **required** - XXXXXXXXXX

### projects.get
List of all the projects you're following on CircleCI, with build information organized by branch.



```js
circleci.projects.get(null, context)
```


### recent_builds.get
Build summary for each of the last 30 recent builds, ordered by build_num.



```js
circleci.recent_builds.get({}, context)
```


### user.heroku_key.post
Adds your Heroku API key to CircleCI, takes apikey as form param name.



```js
circleci.user.heroku_key.post(null, context)
```


