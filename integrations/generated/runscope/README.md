# @datafire/runscope

Client library for Runscope

## Installation and Usage
```bash
npm install --save datafire @datafire/runscope
```

```js
let datafire = require('datafire');
let runscope = require('@datafire/runscope').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
runscope.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### account.get
Information about the authorized account.


```js
runscope.account.get(null, context)
```

#### Parameters
*This action has no parameters*

### buckets.get
Returns a list of buckets.


```js
runscope.buckets.get(null, context)
```

#### Parameters
*This action has no parameters*

### buckets.post
Create a new bucket


```js
runscope.buckets.post({
  "NewBucket": null
}, context)
```

#### Parameters
* NewBucket (undefined) **required**

### buckets.bucketKey.delete
Delete a single bucket resource.


```js
runscope.buckets.bucketKey.delete({
  "bucketKey": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket

### buckets.bucketKey.get
Returns a single bucket resource.


```js
runscope.buckets.bucketKey.get({
  "bucketKey": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket

### buckets.bucketKey.environments.get
Returns list of shared environments for a specified bucket.


```js
runscope.buckets.bucketKey.environments.get({
  "bucketKey": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket

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

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* NewEnvironment (object) **required**

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

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* environmentId (string) **required** - Unique identifier for a test environment
* ModifiedEnvironment (object) **required**

### buckets.bucketKey.errors.get
Retrieve a list of error messages in a bucket


```js
runscope.buckets.bucketKey.errors.get({
  "bucketKey": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* count (integer) - Maxiumum number of messages to return. Default 50, max 1000.
* since (integer) - Only return messages after the given Unix timestamp
* before (integer) - Only return messages before the given Unix timestamp

### buckets.bucketKey.messages.delete
Clear a bucket (remove all messages).


```js
runscope.buckets.bucketKey.messages.delete({
  "bucketKey": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket

### buckets.bucketKey.messages.get
Retrieve a list of messages in a bucket


```js
runscope.buckets.bucketKey.messages.get({
  "bucketKey": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* count (integer) - Maxiumum number of messages to return. Default 50, max 1000.
* since (integer) - Only return messages after the given Unix timestamp
* before (integer) - Only return messages before the given Unix timestamp

### buckets.bucketKey.messages.post
Create a message


```js
runscope.buckets.bucketKey.messages.post({
  "bucketKey": "",
  "NewMessage": null
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* NewMessage (undefined) **required**

### buckets.bucketKey.messages.messageId.get
Retrieve the details for a single message.


```js
runscope.buckets.bucketKey.messages.messageId.get({
  "bucketKey": "",
  "messageId": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* messageId (string) **required** - The unique identifier for this message

### buckets.bucketKey.tests.get
Returns a list of tests.


```js
runscope.buckets.bucketKey.tests.get({
  "bucketKey": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket

### buckets.bucketKey.tests.post
Create a test.


```js
runscope.buckets.bucketKey.tests.post({
  "bucketKey": "",
  "NewTest": null
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* NewTest (undefined) **required**

### buckets.bucketKey.tests.testId.delete
Delete a test, including all steps, schedules, test-specific environments and results.


```js
runscope.buckets.bucketKey.tests.testId.delete({
  "bucketKey": "",
  "testId": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* testId (string) **required** - Unique identifier for a test

### buckets.bucketKey.tests.testId.get
Retrieve the details of a given test by ID.


```js
runscope.buckets.bucketKey.tests.testId.get({
  "bucketKey": "",
  "testId": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* testId (string) **required** - Unique identifier for a test

### buckets.bucketKey.tests.testId.put
Modify a test's name, description, default environment and its steps. To modify other individual properties of a test, make requests to the steps, environments, and schedules subresources of the test.


```js
runscope.buckets.bucketKey.tests.testId.put({
  "bucketKey": "",
  "testId": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* testId (string) **required** - Unique identifier for a test

### buckets.bucketKey.tests.testId.environments.get
Return details of the test's environments (only those that belong to the specified test)


```js
runscope.buckets.bucketKey.tests.testId.environments.get({
  "bucketKey": "",
  "testId": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* testId (string) **required** - Unique identifier for a test

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

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* testId (string) **required** - Unique identifier for a test
* NewEnvironment (object) **required**

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

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* testId (string) **required** - Unique identifier for a test
* environmentId (string) **required** - Unique identifier for a test environment
* ModifiedEnvironment (object) **required**

### buckets.bucketKey.tests.testId.metrics.get
Return details of the test metrics for the specified timeframe.


```js
runscope.buckets.bucketKey.tests.testId.metrics.get({
  "bucketKey": "",
  "testId": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* testId (string) **required** - Unique identifier for a test

### buckets.bucketKey.tests.testId.steps.get
List test steps for a test.


```js
runscope.buckets.bucketKey.tests.testId.steps.get({
  "bucketKey": "",
  "testId": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* testId (string) **required** - Unique identifier for a test

### buckets.bucketKey.tests.testId.steps.post
Add new test step.


```js
runscope.buckets.bucketKey.tests.testId.steps.post({
  "bucketKey": "",
  "testId": "",
  "TestStep": null
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* testId (string) **required** - Unique identifier for a test
* TestStep (undefined) **required**

### buckets.bucketKey.tests.testId.steps.stepId.delete
Delete a step from a test.


```js
runscope.buckets.bucketKey.tests.testId.steps.stepId.delete({
  "bucketKey": "",
  "testId": "",
  "stepId": ""
}, context)
```

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* testId (string) **required** - Unique identifier for a test
* stepId (string) **required** - Unique identifier for a test step

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

#### Parameters
* bucketKey (string) **required** - Unique identifier for a bucket
* testId (string) **required** - Unique identifier for a test
* stepId (string) **required** - Unique identifier for a test step
* TestStep (undefined) **required**

### teams.teamId.agents.get
List currently connected agents associated with a given team.


```js
runscope.teams.teamId.agents.get({
  "teamId": ""
}, context)
```

#### Parameters
* teamId (string) **required** - Unique identifier for team

### teams.teamId.integrations.get
Returns a list of integrations configured for the team.


```js
runscope.teams.teamId.integrations.get({
  "teamId": ""
}, context)
```

#### Parameters
* teamId (string) **required** - Unique identifier for team

### teams.teamId.people.get
List people and integrations associated with a given team.


```js
runscope.teams.teamId.people.get({
  "teamId": ""
}, context)
```

#### Parameters
* teamId (string) **required** - Unique identifier for team

