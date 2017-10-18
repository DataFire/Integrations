# @datafire/launchdarkly

Client library for LaunchDarkly

## Installation and Usage
```bash
npm install --save datafire @datafire/launchdarkly
```

```js
let datafire = require('datafire');
let launchdarkly = require('@datafire/launchdarkly').create({
  Token: "",
});

launchdarkly.getRoot({}).then(data => {
  console.log(data);
})
```

## Description
Build custom integrations with the LaunchDarkly REST API

## Actions
### getRoot
Get the root resource


```js
launchdarkly.getRoot(null, context)
```

#### Parameters
*This action has no parameters*

### getAuditLogEntries
Fetch a list of all webhooks


```js
launchdarkly.getAuditLogEntries(null, context)
```

#### Parameters
*This action has no parameters*

### getAuditLogEntry
Get a webhook by ID


```js
launchdarkly.getAuditLogEntry({
  "resourceId": ""
}, context)
```

#### Parameters
* resourceId (string) **required** - The resource ID

### postEnvironment
Create an environment


```js
launchdarkly.postEnvironment({
  "projectKey": "",
  "environmentBody": {
    "name": "",
    "key": "",
    "color": ""
  }
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentBody (object) **required**

### deleteEnvironment
Delete an environment by ID


```js
launchdarkly.deleteEnvironment({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKey (string) **required** - The environment key

### getEnvironment
Get an environment by key.


```js
launchdarkly.getEnvironment({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKey (string) **required** - The environment key

### patchEnvironment
Modify an environment by ID


```js
launchdarkly.patchEnvironment({
  "projectKey": "",
  "environmentKey": "",
  "patchDelta": []
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKey (string) **required** - The environment key
* patchDelta (array) **required**

### getFeatureFlagStatus
Get a list of statuses for all feature flags


```js
launchdarkly.getFeatureFlagStatus({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKey (string) **required** - The environment key

### getFeatureFlagStatuses
Get a list of statuses for all feature flags


```js
launchdarkly.getFeatureFlagStatuses({
  "projectKey": "",
  "environmentKey": "",
  "featureFlagKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKey (string) **required** - The environment key
* featureFlagKey (string) **required** - The feature flag's key

### getFeatureFlags
Get a list of all features in the given project.


```js
launchdarkly.getFeatureFlags({
  "projectKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKeyQuery (string) - The environment key
* tag (string) - Filter by tag

### postFeatureFlag
Create a feature flag


```js
launchdarkly.postFeatureFlag({
  "projectKey": "",
  "featureFlagBody": {
    "name": "",
    "key": "",
    "variations": []
  }
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* featureFlagBody (object) **required**

### deleteFeatureFlag
Delete a feature flag by ID


```js
launchdarkly.deleteFeatureFlag({
  "projectKey": "",
  "featureFlagKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* featureFlagKey (string) **required** - The feature flag's key

### getFeatureFlag
Get a single feature flag by key.


```js
launchdarkly.getFeatureFlag({
  "projectKey": "",
  "featureFlagKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* featureFlagKey (string) **required** - The feature flag's key
* environmentKeyQuery (string) - The environment key

### patchFeatureFlag
Modify a feature flag by ID


```js
launchdarkly.patchFeatureFlag({
  "projectKey": "",
  "featureFlagKey": "",
  "patchDelta": []
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* featureFlagKey (string) **required** - The feature flag's key
* patchDelta (array) **required**

### getProjects
Returns a list of all projects in the account.


```js
launchdarkly.getProjects(null, context)
```

#### Parameters
*This action has no parameters*

### postProject
Create a project


```js
launchdarkly.postProject({
  "projectBody": {
    "name": "",
    "key": ""
  }
}, context)
```

#### Parameters
* projectBody (object) **required**

### deleteProject
Delete a project by ID


```js
launchdarkly.deleteProject({
  "projectKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key

### getProject
Get a project by key.


```js
launchdarkly.getProject({
  "projectKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key

### patchProject
Modify a project by ID


```js
launchdarkly.patchProject({
  "projectKey": "",
  "patchDelta": []
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* patchDelta (array) **required**

### getSearchUsers
Search users in LaunchDarkly based on their last active date, or a search query.


```js
launchdarkly.getSearchUsers({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKey (string) **required** - The environment key
* q (string) - Search query
* limit (number) - Pagination limit
* offset (number) - Specifies the first item to return in the collection
* after (number) - A unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag

### getUsers
List all users in the environment.


```js
launchdarkly.getUsers({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKey (string) **required** - The environment key
* limit (number) - Pagination limit

### deleteUser
Delete a user by ID


```js
launchdarkly.deleteUser({
  "projectKey": "",
  "environmentKey": "",
  "userKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKey (string) **required** - The environment key
* userKey (string) **required** - The user's key

### getUser
Get a user by key.


```js
launchdarkly.getUser({
  "projectKey": "",
  "environmentKey": "",
  "userKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKey (string) **required** - The environment key
* userKey (string) **required** - The user's key

### getUserFlagSettings
Lists the current flag settings for a given user.


```js
launchdarkly.getUserFlagSettings({
  "projectKey": "",
  "environmentKey": "",
  "userKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKey (string) **required** - The environment key
* userKey (string) **required** - The user's key

### getUserFlagSetting
Get a user by key.


```js
launchdarkly.getUserFlagSetting({
  "projectKey": "",
  "environmentKey": "",
  "userKey": "",
  "featureFlagKey": ""
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKey (string) **required** - The environment key
* userKey (string) **required** - The user's key
* featureFlagKey (string) **required** - The feature flag's key

### putFlagSetting
Specifically enable or disable a feature flag for a user based on their key.


```js
launchdarkly.putFlagSetting({
  "projectKey": "",
  "environmentKey": "",
  "userKey": "",
  "featureFlagKey": "",
  "userSettingsBody": {}
}, context)
```

#### Parameters
* projectKey (string) **required** - The project key
* environmentKey (string) **required** - The environment key
* userKey (string) **required** - The user's key
* featureFlagKey (string) **required** - The feature flag's key
* userSettingsBody (object) **required**

### getWebhooks
Fetch a list of all webhooks


```js
launchdarkly.getWebhooks(null, context)
```

#### Parameters
*This action has no parameters*

### postWebhook
Create a webhook


```js
launchdarkly.postWebhook({
  "webhookBody": {
    "url": "",
    "sign": true,
    "on": true
  }
}, context)
```

#### Parameters
* webhookBody (object) **required**

### deleteWebhook
Delete a webhook by ID


```js
launchdarkly.deleteWebhook({
  "resourceId": ""
}, context)
```

#### Parameters
* resourceId (string) **required** - The resource ID

### getWebhook
Get a webhook by ID


```js
launchdarkly.getWebhook({
  "resourceId": ""
}, context)
```

#### Parameters
* resourceId (string) **required** - The resource ID

### patchWebhook
Modify a webhook by ID


```js
launchdarkly.patchWebhook({
  "resourceId": "",
  "patchDelta": []
}, context)
```

#### Parameters
* resourceId (string) **required** - The resource ID
* patchDelta (array) **required**

