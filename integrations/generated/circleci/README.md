# @datafire/circleci

Client library for CircleCI

## Installation and Usage
```bash
npm install --save @datafire/circleci
```
```js
let circleci = require('@datafire/circleci').create({
  apikey: ""
});

circleci.recent_builds.get({}).then(data => {
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

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### project.username.project.get
Build summary for each of the last 30 builds for a single git repo.



```js
circleci.project.username.project.get({
  "username": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * limit `integer`: The number of builds to return. Maximum 100, defaults to 30.
  * offset `integer`: The API returns builds starting from this offset, defaults to 0.
  * filter `string` (values: completed, successful, failed, running): Restricts which builds are returned.
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX

#### Output
* output [Builds](#builds)

### project.username.project.post
Triggers a new build, returns a summary of the build.



```js
circleci.project.username.project.post({
  "username": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * body `object`
    * build_parameters [BuildParameters](#buildparameters)
    * parallel [Parallel](#parallel)
    * revision [Revision](#revision)
    * tag [Tag](#tag)
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX

#### Output
* output [BuildSummary](#buildsummary)

### project.username.project.build_cache.delete
Clears the cache for a project.



```js
circleci.project.username.project.build_cache.delete({
  "username": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX

#### Output
* output `object`
  * status `string`

### project.username.project.checkout_key.get
Lists checkout keys.



```js
circleci.project.username.project.checkout_key.get({
  "username": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX

#### Output
* output [Keys](#keys)

### project.username.project.checkout_key.post
Creates a new checkout key.
Only usable with a user API token.



```js
circleci.project.username.project.checkout_key.post({
  "username": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * type `string` (values: deploy-key, github-user-key)
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX

#### Output
* output [Key](#key)

### project.username.project.checkout_key.fingerprint.delete
Delete a checkout key.



```js
circleci.project.username.project.checkout_key.fingerprint.delete({
  "username": "",
  "project": "",
  "fingerprint": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX
  * fingerprint **required** `string`: XXXXXXXXXX

#### Output
* output `object`
  * message `string` (values: OK)

### project.username.project.checkout_key.fingerprint.get
Get a checkout key.



```js
circleci.project.username.project.checkout_key.fingerprint.get({
  "username": "",
  "project": "",
  "fingerprint": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX
  * fingerprint **required** `string`: XXXXXXXXXX

#### Output
* output [Key](#key)

### project.username.project.envvar.get
Lists the environment variables for :project



```js
circleci.project.username.project.envvar.get({
  "username": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX

#### Output
* output [Envvars](#envvars)

### project.username.project.envvar.post
Creates a new environment variable



```js
circleci.project.username.project.envvar.post({
  "username": "",
  "project": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX

#### Output
* output [Envvar](#envvar)

### project.username.project.envvar.name.delete
Deletes the environment variable named ':name'



```js
circleci.project.username.project.envvar.name.delete({
  "username": "",
  "project": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX
  * name **required** `string`: XXXXXXXXXX

#### Output
* output `object`
  * message `string` (values: OK)

### project.username.project.envvar.name.get
Gets the hidden value of environment variable :name



```js
circleci.project.username.project.envvar.name.get({
  "username": "",
  "project": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX
  * name **required** `string`: XXXXXXXXXX

#### Output
* output [Envvar](#envvar)

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

#### Input
* input `object`
  * Content-Type **required** `string` (values: application/json)
  * body **required** `object`
    * hostname `string`
    * private_key `string`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX

#### Output
* output `object`
  * message `string`

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

#### Input
* input `object`
  * body `object`
    * build_parameters [BuildParameters](#buildparameters)
    * parallel [Parallel](#parallel)
    * revision [Revision](#revision)
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX
  * branch **required** `string`: The branch name should be url-encoded.

#### Output
* output [Build](#build)

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

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX
  * build_num **required** `integer`: XXXXXXXXXX

#### Output
* output [BuildDetail](#builddetail)

### project.username.project.build_num.artifacts.get
List the artifacts produced by a given build.



```js
circleci.project.username.project.build_num.artifacts.get({
  "username": "",
  "project": "",
  "build_num": 0
}, context)
```

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX
  * build_num **required** `integer`: XXXXXXXXXX

#### Output
* output [Artifacts](#artifacts)

### project.username.project.build_num.cancel.post
Cancels the build, returns a summary of the build.



```js
circleci.project.username.project.build_num.cancel.post({
  "username": "",
  "project": "",
  "build_num": 0
}, context)
```

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX
  * build_num **required** `integer`: XXXXXXXXXX

#### Output
* output [Build](#build)

### project.username.project.build_num.retry.post
Retries the build, returns a summary of the new build.



```js
circleci.project.username.project.build_num.retry.post({
  "username": "",
  "project": "",
  "build_num": 0
}, context)
```

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX
  * build_num **required** `integer`: XXXXXXXXXX

#### Output
* output [Build](#build)

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

#### Input
* input `object`
  * username **required** `string`: XXXXXXXXX
  * project **required** `string`: XXXXXXXXX
  * build_num **required** `integer`: XXXXXXXXXX

#### Output
* output [Tests](#tests)

### projects.get
List of all the projects you're following on CircleCI, with build information organized by branch.



```js
circleci.projects.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Projects](#projects)

### recent_builds.get
Build summary for each of the last 30 recent builds, ordered by build_num.



```js
circleci.recent_builds.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: The number of builds to return. Maximum 100, defaults to 30.
  * offset `integer`: The API returns builds starting from this offset, defaults to 0.

#### Output
* output [Builds](#builds)

### user.heroku_key.post
Adds your Heroku API key to CircleCI, takes apikey as form param name.



```js
circleci.user.heroku_key.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * message `string`



## Definitions

**This integration has no definitions**
