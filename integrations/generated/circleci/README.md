# @datafire/circleci

Client library for CircleCI REST API

## Installation and Usage
```bash
npm install --save @datafire/circleci
```
```js
let circleci = require('@datafire/circleci').create({
  apikey: ""
});

.then(data => {
  console.log(data);
});
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
  * body `string` (values: deploy-key, github-user-key)
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

### Artifact
* Artifact `object`
  * node_index `integer`
  * path `string`
  * pretty_path `string`
  * url `string`

### Artifacts
* Artifacts `array`
  * items [Artifact](#artifact)

### Aws
* Aws `object`
  * keypair `string`

### Build
* Build `object`
  * body `string`: commit message body
  * branch `string`
  * build_time_millis `integer`
  * build_url `string`
  * committer_email `string`
  * committer_name `string`
  * dont_build `string`: reason why we didn't build, if we didn't build
  * lifecycle [Lifecycle](#lifecycle)
  * previous [PreviousBuild](#previousbuild)
  * queued_at `string`: time build was queued
  * reponame `string`
  * retry_of `integer`: build_num of the build this is a retry of
  * start_time `string`: time build started
  * stop_time `string`: time build finished
  * subject `string`
  * username `string`
  * vcs_url `string`
  * why `string`: short string explaining the reason we built

### BuildDetail
* BuildDetail `object`: previous build
  * all_commit_details [CommitDetails](#commitdetails)
  * compare `string`
  * job_name `string`
  * previous_successful_build [PreviousBuild](#previousbuild)
  * retries `boolean`
  * ssh_enabled `boolean`
  * timedout `boolean`
  * usage_queued_at `string`
  * user [User](#user)

### BuildParameters
* BuildParameters `object`: Additional environment variables to inject into the build environment. A map of names to values.

### BuildSummary
* BuildSummary `object`
  * added_at `string`
  * build_num `integer`
  * outcome [Outcome](#outcome)
  * pushed_at `string`
  * status [Status](#status)
  * vcs_revision [Sha1](#sha1)

### Builds
* Builds `array`
  * items [Build](#build)

### CommitDetail
* CommitDetail `object`
  * author_date `string`
  * author_email `string`
  * author_login `string`
  * author_name `string`
  * body `string`
  * commit [Sha1](#sha1)
  * commit_url `string`
  * committer_date `string`
  * committer_email `string`
  * committer_login `string`
  * committer_name `string`
  * subject `string`

### CommitDetails
* CommitDetails `array`
  * items [CommitDetail](#commitdetail)

### Envvar
* Envvar `object`
  * name `string`
  * value `string`

### Envvars
* Envvars `array`
  * items [Envvar](#envvar)

### Key
* Key `object`
  * fingerprint `string`
  * preferred `boolean`
  * public_key `string`
  * time `string`: when the key was issued
  * type `string` (values: deploy-key, github-user-key): can be "deploy-key" or "github-user-key"

### Keys
* Keys `array`
  * items [Key](#key)

### Lifecycle
* Lifecycle `string` (values: queued, scheduled, not_run, not_running, running, finished)

### Outcome
* Outcome `string` (values: canceled, infrastructure_fail, timedout, failed, no_tests, success)

### Parallel
* Parallel `string`: The number of containers to use to run the build. Default is null and the project default is used.

### PreviousBuild
* PreviousBuild `object`: previous build
  * build_num `integer`
  * build_time_millis `integer`
  * status [Status](#status)

### Project
* Project `object`
  * aws [Aws](#aws)
  * branches `object`
  * campfire_notify_prefs [StringOrNull](#stringornull)
  * campfire_room [StringOrNull](#stringornull)
  * campfire_subdomain [StringOrNull](#stringornull)
  * campfire_token [StringOrNull](#stringornull)
  * compile `string`
  * default_branch `string`
  * dependencies `string`
  * extra `string`
  * feature_flags `object`
    * build-fork-prs `boolean`
    * fleet `boolean`
    * junit `boolean`
    * oss `boolean`
    * osx `boolean`
    * set-github-status `boolean`
    * trusty-beta `boolean`
  * flowdock_api_token [StringOrNull](#stringornull)
  * followed `boolean`
  * has_usable_key `boolean`
  * heroku_deploy_user [StringOrNull](#stringornull)
  * hipchat_api_token [StringOrNull](#stringornull)
  * hipchat_notify [StringOrNull](#stringornull)
  * hipchat_notify_prefs `string`
  * hipchat_room [StringOrNull](#stringornull)
  * irc_channel [StringOrNull](#stringornull)
  * irc_keyword [StringOrNull](#stringornull)
  * irc_notify_prefs [StringOrNull](#stringornull)
  * irc_password [StringOrNull](#stringornull)
  * irc_server [StringOrNull](#stringornull)
  * irc_username [StringOrNull](#stringornull)
  * language `string`
  * oss `boolean`
  * parallel `integer`
  * reponame `string`
  * scopes `array`
    * items [Scope](#scope)
  * setup `string`
  * slack_api_token [StringOrNull](#stringornull)
  * slack_channel [StringOrNull](#stringornull)
  * slack_channel_override [StringOrNull](#stringornull)
  * slack_notify_prefs [StringOrNull](#stringornull)
  * slack_subdomain [StringOrNull](#stringornull)
  * slack_webhook_url `string`
  * ssh_keys `array`
    * items `string`
  * test `string`
  * username `string`
  * vcs_type `string`
  * vcs_url `string`

### Projects
* Projects `array`
  * items [Project](#project)

### Revision
* Revision `string`: The specific revision to build.

### Scope
* Scope `string` (values: write-settings, view-builds, read-settings, trigger-builds, all, status, none)

### Sha1
* Sha1 `string`

### Status
* Status `string` (values: retried, canceled, infrastructure_fail, timedout, not_run, running, failed, queued, scheduled, not_running, no_tests, fixed, success)

### StringOrNull
* StringOrNull `string`

### Tag
* Tag `string`: The tag to build. Default is null. Cannot be used with revision parameter.

### Tests
* Tests `object`
  * tests `array`
    * items `object`
      * classname `string`
      * file `string`
      * message `string`
      * name `string`
      * result [Status](#status)
      * run_time `number`
      * source `string`

### User
* User `object`
  * admin `boolean`
  * all_emails `array`
    * items `string`
  * analytics_id `string`
  * avatar_url `string`
  * basic_email_prefs `string`
  * bitbucket `integer`
  * bitbucket_authorized `boolean`
  * containers `integer`
  * created_at `string`
  * days_left_in_trial `integer`
  * dev_admin `boolean`
  * enrolled_betas `array`
    * items `string`
  * github_id `integer`
  * github_oauth_scopes `array`
    * items `string`
  * gravatar_id `integer`
  * heroku_api_key `string`
  * in_beta_program `boolean`
  * login `string`
  * name `string`
  * organization_prefs `object`
  * parallelism `integer`
  * plan `string`
  * projects `object`
  * pusher_id `string`
  * selected_email `string`
  * sign_in_count `integer`
  * trial_end `string`


