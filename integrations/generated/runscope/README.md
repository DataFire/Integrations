# @datafire/runscope

Client library for Runscope

## Installation and Usage
```bash
npm install --save @datafire/runscope
```
```js
let runscope = require('@datafire/runscope').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

runscope.account.get({}).then(data => {
  console.log(data);
})
```

## Description

Manage Runscope programmatically.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
runscope.oauthCallback({
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
runscope.oauthRefresh(null, context)
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

### account.get
Information about the authorized account.


```js
runscope.account.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data [Account](#account)
  * meta [Meta](#meta)

### buckets.get
Returns a list of buckets.


```js
runscope.buckets.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * data `array`
    * items [Bucket](#bucket)
  * meta [Meta](#meta)

### buckets.post
Create a new bucket


```js
runscope.buckets.post({
  "NewBucket": null
}, context)
```

#### Input
* input `object`
  * NewBucket **required** [NewBucket](#newbucket)

#### Output
* output [Bucket](#bucket)

### buckets.bucketKey.delete
Delete a single bucket resource.


```js
runscope.buckets.bucketKey.delete({
  "bucketKey": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket

#### Output
*Output schema unknown*

### buckets.bucketKey.get
Returns a single bucket resource.


```js
runscope.buckets.bucketKey.get({
  "bucketKey": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket

#### Output
* output [Bucket](#bucket)

### buckets.bucketKey.environments.get
Returns list of shared environments for a specified bucket.


```js
runscope.buckets.bucketKey.environments.get({
  "bucketKey": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket

#### Output
*Output schema unknown*

### buckets.bucketKey.environments.post
Create new shared environment.


```js
runscope.buckets.bucketKey.environments.post({
  "bucketKey": "",
  "NewEnvironment": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * NewEnvironment **required** [Environment](#environment)

#### Output
*Output schema unknown*

### buckets.bucketKey.environments.environmentId.put
Update the details of a shared environment.


```js
runscope.buckets.bucketKey.environments.environmentId.put({
  "bucketKey": "",
  "environmentId": "",
  "ModifiedEnvironment": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * environmentId **required** `string`: Unique identifier for a test environment
  * ModifiedEnvironment **required** [Environment](#environment)

#### Output
*Output schema unknown*

### buckets.bucketKey.errors.get
Retrieve a list of error messages in a bucket


```js
runscope.buckets.bucketKey.errors.get({
  "bucketKey": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * count `integer`: Maxiumum number of messages to return. Default 50, max 1000.
  * since `integer`: Only return messages after the given Unix timestamp
  * before `integer`: Only return messages before the given Unix timestamp

#### Output
*Output schema unknown*

### buckets.bucketKey.messages.delete
Clear a bucket (remove all messages).


```js
runscope.buckets.bucketKey.messages.delete({
  "bucketKey": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket

#### Output
*Output schema unknown*

### buckets.bucketKey.messages.get
Retrieve a list of messages in a bucket


```js
runscope.buckets.bucketKey.messages.get({
  "bucketKey": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * count `integer`: Maxiumum number of messages to return. Default 50, max 1000.
  * since `integer`: Only return messages after the given Unix timestamp
  * before `integer`: Only return messages before the given Unix timestamp

#### Output
*Output schema unknown*

### buckets.bucketKey.messages.post
Create a message


```js
runscope.buckets.bucketKey.messages.post({
  "bucketKey": "",
  "NewMessage": null
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * NewMessage **required** [NewMessage](#newmessage)

#### Output
* output `object`
  * data `array`
    * items `object`
      * error `object`: An object representing errors for this item. Only present if status is error, otherwise this will be null.
        * code `integer`: A numeric error code for the specific problem we encountered with this message. (error status only)
        * message `string`: A description of the problem we encountered with this message. (error status only)
        * more_info `string`: A link to more help about the warning. (error status only)
      * status `string`: One of the following: success, error, or warning.
      * unique_identifier `string`: If the message had a unique_identifier, it will be returned in this field, to help match the responses to the messages that were submitted.
      * uuid `string`: This message's Runscope-generated ID.
      * warning `object`: An object representing warnings (non-fatal warnings) for this item. Only present if status is warning, otherwise this will be null.
        * code `integer`: A numeric error code for the specific problem we encountered with this message. (warning status only)
        * message `string`: A description of the problem we encountered with this message. (warning status only)
        * more_info `string`: A link to more help about the warning. (warning status only)
  * meta `object`
    * error_count `integer`
    * succcess_count `integer`
    * warning_count `integer`

### buckets.bucketKey.messages.messageId.get
Retrieve the details for a single message.


```js
runscope.buckets.bucketKey.messages.messageId.get({
  "bucketKey": "",
  "messageId": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * messageId **required** `string`: The unique identifier for this message

#### Output
*Output schema unknown*

### buckets.bucketKey.tests.get
Returns a list of tests.


```js
runscope.buckets.bucketKey.tests.get({
  "bucketKey": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket

#### Output
* output `object`
  * data `array`
    * items [Test](#test)
  * meta [Meta](#meta)

### buckets.bucketKey.tests.post
Create a test.


```js
runscope.buckets.bucketKey.tests.post({
  "bucketKey": "",
  "NewTest": null
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * NewTest **required** [Test](#test)

#### Output
* output `object`
  * data `array`
    * items [Test](#test)
  * meta [Meta](#meta)

### buckets.bucketKey.tests.testId.delete
Delete a test, including all steps, schedules, test-specific environments and results.


```js
runscope.buckets.bucketKey.tests.testId.delete({
  "bucketKey": "",
  "testId": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * testId **required** `string`: Unique identifier for a test

#### Output
*Output schema unknown*

### buckets.bucketKey.tests.testId.get
Retrieve the details of a given test by ID.


```js
runscope.buckets.bucketKey.tests.testId.get({
  "bucketKey": "",
  "testId": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * testId **required** `string`: Unique identifier for a test

#### Output
* output [TestDetail](#testdetail)

### buckets.bucketKey.tests.testId.put
Modify a test's name, description, default environment and its steps. To modify other individual properties of a test, make requests to the steps, environments, and schedules subresources of the test.


```js
runscope.buckets.bucketKey.tests.testId.put({
  "bucketKey": "",
  "testId": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * testId **required** `string`: Unique identifier for a test

#### Output
* output [TestDetail](#testdetail)

### buckets.bucketKey.tests.testId.environments.get
Return details of the test's environments (only those that belong to the specified test)


```js
runscope.buckets.bucketKey.tests.testId.environments.get({
  "bucketKey": "",
  "testId": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * testId **required** `string`: Unique identifier for a test

#### Output
* output `object`
  * data `array`
    * items [Environment](#environment)
  * meta [Meta](#meta)

### buckets.bucketKey.tests.testId.environments.post
Create new test environment.


```js
runscope.buckets.bucketKey.tests.testId.environments.post({
  "bucketKey": "",
  "testId": "",
  "NewEnvironment": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * testId **required** `string`: Unique identifier for a test
  * NewEnvironment **required** [Environment](#environment)

#### Output
*Output schema unknown*

### buckets.bucketKey.tests.testId.environments.environmentId.put
Update the details of a test environment.


```js
runscope.buckets.bucketKey.tests.testId.environments.environmentId.put({
  "bucketKey": "",
  "testId": "",
  "environmentId": "",
  "ModifiedEnvironment": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * testId **required** `string`: Unique identifier for a test
  * environmentId **required** `string`: Unique identifier for a test environment
  * ModifiedEnvironment **required** [Environment](#environment)

#### Output
*Output schema unknown*

### buckets.bucketKey.tests.testId.metrics.get
Return details of the test metrics for the specified timeframe.


```js
runscope.buckets.bucketKey.tests.testId.metrics.get({
  "bucketKey": "",
  "testId": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * testId **required** `string`: Unique identifier for a test

#### Output
* output [Metrics](#metrics)

### buckets.bucketKey.tests.testId.steps.get
List test steps for a test.


```js
runscope.buckets.bucketKey.tests.testId.steps.get({
  "bucketKey": "",
  "testId": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * testId **required** `string`: Unique identifier for a test

#### Output
*Output schema unknown*

### buckets.bucketKey.tests.testId.steps.post
Add new test step.


```js
runscope.buckets.bucketKey.tests.testId.steps.post({
  "bucketKey": "",
  "testId": "",
  "TestStep": null
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * testId **required** `string`: Unique identifier for a test
  * TestStep **required** [TestStep](#teststep)

#### Output
*Output schema unknown*

### buckets.bucketKey.tests.testId.steps.stepId.delete
Delete a step from a test.


```js
runscope.buckets.bucketKey.tests.testId.steps.stepId.delete({
  "bucketKey": "",
  "testId": "",
  "stepId": ""
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * testId **required** `string`: Unique identifier for a test
  * stepId **required** `string`: Unique identifier for a test step

#### Output
*Output schema unknown*

### buckets.bucketKey.tests.testId.steps.stepId.put
Update the details of a single test step.


```js
runscope.buckets.bucketKey.tests.testId.steps.stepId.put({
  "bucketKey": "",
  "testId": "",
  "stepId": "",
  "TestStep": null
}, context)
```

#### Input
* input `object`
  * bucketKey **required** `string`: Unique identifier for a bucket
  * testId **required** `string`: Unique identifier for a test
  * stepId **required** `string`: Unique identifier for a test step
  * TestStep **required** [TestStep](#teststep)

#### Output
*Output schema unknown*

### teams.teamId.agents.get
List currently connected agents associated with a given team.


```js
runscope.teams.teamId.agents.get({
  "teamId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: Unique identifier for team

#### Output
* output `array`
  * items [Agent](#agent)

### teams.teamId.integrations.get
Returns a list of integrations configured for the team.


```js
runscope.teams.teamId.integrations.get({
  "teamId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: Unique identifier for team

#### Output
* output `object`
  * data `array`
    * items [Integration](#integration)
  * meta [Meta](#meta)

### teams.teamId.people.get
List people and integrations associated with a given team.


```js
runscope.teams.teamId.people.get({
  "teamId": ""
}, context)
```

#### Input
* input `object`
  * teamId **required** `string`: Unique identifier for team

#### Output
* output `array`
  * items [Account](#account)



## Definitions

### Account
* Account `object`
  * email `string`: The email address for this account. Only present if authorized with the account:email scope.
  * id `string`: The unique identifier for this account.
  * name `string`: The name of the person for this account.
  * teams `array`
    * items [Team](#team)

### Agent
* Agent `object`
  * agent_id `string`: The unique identifier for this agent.
  * name `string`: The name of the agent set in the configuration file or with the command line flag.
  * version `string`: The version for this agent.

### Assertion
* Assertion `object`
  * comparison `string`
  * source `string`
  * value `string`

### Bucket
* Bucket `object`
  * auth_token `string`: Bucket auth token if set, otherwise this value is null.
  * collections_url `string`
  * default `boolean`: True if this bucket is the 'default' for a team. Default buckets cannot be deleted.
  * key `string`: The unique identifier used to address a bucket.
  * messages_url `string`
  * name `string`: The name of this bucket as displayed in your dashboard.
  * team [Team](#team)
  * tests_url `string`
  * trigger_url `string`
  * verify_ssl `boolean`: True if this bucket is configured to verify ssl for requests made to it.

### Environment
* Environment `object`
  * auth `string`
  * client_certificate `string`
  * emails `object`
  * exported_at `integer`
  * headers `object`
  * id `string`: The unique identifier for this environment.
  * initial_script_hash `string`
  * initial_variables `object`
  * integrations `array`: The list of integrations for this environment.
    * items [Integration](#integration)
  * name **required** `string`: Name of this environment.
  * parent_environment_id `string`
  * preserve_cookies `boolean`
  * regions `array`: An array of the region codes that this environment is using.
    * items `string`
  * remote_agents `array`
    * items [Agent](#agent)
  * retry_on_failure `boolean`
  * script `string`
  * script_library `array`: The list of ids for scripts, part of the script libraries, being used for this environment.
    * items `string`
  * stop_on_failure `boolean`: Stop executing the test after the first failed step.
  * test_id `string`: The unique identifier for this test.
  * verify_ssl `boolean`: Validate all SSL certificates on any HTTPS connections.
  * version `string`
  * webhooks `string`

### Error
* Error `object`
  * code `integer`
  * fields `string`
  * message `string`

### Error400
* Error400 `object`
  * error `string`
  * message `string`
  * more_info `string`
  * status `integer`

### Integration
* Integration `object`
  * description `string`
  * id `string`
  * type `string`
  * uuid `string`

### Meta
* Meta `object`
  * status `string`: Success or failure status of call.

### Metrics
* Metrics `object`
  * changes_from_last_period `object`: The changes in average response time compared to the last period.
  * environment_uuid `string`: The environment_uuid that filters this request.
  * region `string`: The region that filters this request.
  * response_times `array`: The list of response times based on the timeframe of the request.
    * items `object`
      * avg_response_time_ms `integer`: The average response time in miliseconds for all the requests for this test in this time interval.
      * success_ratio `integer`: 1 if there's a successful request in this time interval, or 0 if there isn't.
      * timestamp `integer`: The timestamp in Unix format for the specified timeframe.
  * this_time_period `object`: The average response time for different percentiles for the request in the requested timeframe.
  * timeframe `string`: The timeframe that filters this request.

### NewBucket
* NewBucket `object`
  * name **required** `string`: Name of this bucket
  * team_id **required** `string`: Unique identifier for the team to create this bucket for.

### NewMessage
* NewMessage `object`
  * request `object`
    * body `string`: HTTP request body (most commonly used for POST and PUT requests). If the
    * body_encoding `string`: If the request body was encoded with Base64, this field should be present and set to 
    * form `string`: JSON object of set of form fields included in a POST request. 
    * headers `string`: JSON object of header keys and values -- with values as a string or an array of strings.
    * method `string`: HTTP method name (GET, POST, PUT, HEAD, OPTIONS, PATCH, DELETE, etc.)
    * timestamp `number`: Unix timestamp indicating when the request was made.
    * url `string`: Full URL of the request, including URL querystring parameters.
  * response `object`
    * body `string`: HTTP response body. If the response body contains binary data that cannot be
    * body_encoding `string`: If the request body was encoded with Base64, this field should be present and set to 
    * headers `string`: JSON object of header keys and values -- with values as a string or an array of strings.
    * reason `string`: Textual description of HTTP status code. This will be set automatically if not 
    * response_time `number`: Length of time it took to receive the response, in seconds.
    * status `integer`: HTTP status code returned in the response.
    * timestamp `number`: Unix timestamp indicating when the request was made.

### Schedule
* Schedule `object`
  * environment_id `string`
  * exported_at `integer`
  * id `string`
  * interval `string`
  * note `string`
  * version `string`

### StandardError
* StandardError `object`
  * data `object`
  * error [Error400](#error400)
  * meta [Meta](#meta)

### Team
* Team `object`
  * id `string`: The unique identifier for this team.
  * name `string`: The name of this team.

### Test
* Test `object`
  * created_at `integer`: The date the test was created in seconds (Unix time stamp format).
  * created_by `object`
    * email `string`
    * id `string`
    * name `string`
  * default_environment_id `string`
  * description `string`: The description for the test.
  * id `string`
  * last_run `object`
  * name **required** `string`: The name for the test.
  * trigger_url `string`

### TestDetail
* TestDetail
  * environments [Environment](#environment)
  * exported_at `integer`
  * last_run `object`
  * schedules `array`
    * items [Schedule](#schedule)
  * steps `array`
    * items `object`
  * version `string`
  * created_at `integer`: The date the test was created in seconds (Unix time stamp format).
  * created_by `object`
    * email `string`
    * id `string`
    * name `string`
  * default_environment_id `string`
  * description `string`: The description for the test.
  * id `string`
  * last_run `object`
  * name **required** `string`: The name for the test.
  * trigger_url `string`

### TestStep
* TestStep `object`
  * step_type `string`: Type of test step -- request, pause, condition, ghost-inspector, or subtest.

### TestStepRequest
* TestStepRequest
  * assertions `array`: A list of assertions to apply to the HTTP response from this request.
    * items [Assertion](#assertion)
  * auth `object`: An authentication object with either basic, oauth1, or client_certificate credentials for authenticating this request.
  * before_scripts `array`: A list of pre-request scripts to run before this request.
    * items `string`
  * body `string`: A string to use as the body of the request.
  * form `object`: An object with keys as form post parameter names matched to their values. Values can either be a single string or an array of strings.
  * headers `object`: An object with keys as header names matched to their values. Values can either be a single string or an array of strings.
  * method `string`: The HTTP method for this request step. E.g. GET, POST, PUT, DELETE, etc.
  * note `string`: A description or note for this request step.
  * scripts `array`: A list of post-response scripts to run after this request.
    * items `string`
  * url `string`: The URL to make a request to for this step. This may contain both query string parameters and variables.
  * variables `array`: A list of variables to extract out of the HTTP response from this request.
    * items [Variable](#variable)
  * step_type `string`: Type of test step -- request, pause, condition, ghost-inspector, or subtest.

### Variable
* Variable `object`
  * name `string`
  * property `string`
  * source `string`


