# @datafire/launchdarkly

Client library for LaunchDarkly

## Installation and Usage
```bash
npm install --save @datafire/launchdarkly
```
```js
let launchdarkly = require('@datafire/launchdarkly').create({
  Token: ""
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

#### Input
*This action has no parameters*

#### Output
* output [Links](#links)

### getAuditLogEntries
Fetch a list of all webhooks


```js
launchdarkly.getAuditLogEntries(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AuditLogEntries](#auditlogentries)

### getAuditLogEntry
Get a webhook by ID


```js
launchdarkly.getAuditLogEntry({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The resource ID

#### Output
* output [AuditLogEntry](#auditlogentry)

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

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentBody **required** `object`
    * color **required** `string`: A color swatch (as an RGB hex value with no leading '#', e.g. C8C8C8)
    * defaultTtl `number`
    * key **required** `string`
    * name **required** `string`

#### Output
*Output schema unknown*

### deleteEnvironment
Delete an environment by ID


```js
launchdarkly.deleteEnvironment({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKey **required** `string`: The environment key

#### Output
*Output schema unknown*

### getEnvironment
Get an environment by key.


```js
launchdarkly.getEnvironment({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKey **required** `string`: The environment key

#### Output
* output [Environment](#environment)

### patchEnvironment
Modify an environment by ID


```js
launchdarkly.patchEnvironment({
  "projectKey": "",
  "environmentKey": "",
  "patchDelta": []
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKey **required** `string`: The environment key
  * patchDelta **required** `array`
    * items `object`
      * op **required** `string`
      * path **required** `string`
      * value **required** `object`

#### Output
*Output schema unknown*

### getFeatureFlagStatus
Get a list of statuses for all feature flags


```js
launchdarkly.getFeatureFlagStatus({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKey **required** `string`: The environment key

#### Output
* output [FeatureFlagStatuses](#featureflagstatuses)

### getFeatureFlagStatuses
Get a list of statuses for all feature flags


```js
launchdarkly.getFeatureFlagStatuses({
  "projectKey": "",
  "environmentKey": "",
  "featureFlagKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKey **required** `string`: The environment key
  * featureFlagKey **required** `string`: The feature flag's key

#### Output
* output [FeatureFlagStatus](#featureflagstatus)

### getFeatureFlags
Get a list of all features in the given project.


```js
launchdarkly.getFeatureFlags({
  "projectKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKeyQuery `string`: The environment key
  * tag `string`: Filter by tag

#### Output
* output [FeatureFlags](#featureflags)

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

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * featureFlagBody **required** `object`
    * includeInSnippet `boolean`: Whether or not this flag should be made available to the client-side JavaScript SDK
    * key **required** `string`: A unique key that will be used to reference the flag in your code
    * name **required** `string`: A human-friendly name for the feature flag. Remember to note if this flag is intended to be temporary or permanent.
    * tags `array`: Tags for the feature flag
      * items `string`
    * temporary `boolean`: Whether or not the flag is a temporary flag
    * variations **required** `array`: An array of possible variations for the flag.
      * items [Variation](#variation)

#### Output
*Output schema unknown*

### deleteFeatureFlag
Delete a feature flag by ID


```js
launchdarkly.deleteFeatureFlag({
  "projectKey": "",
  "featureFlagKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * featureFlagKey **required** `string`: The feature flag's key

#### Output
*Output schema unknown*

### getFeatureFlag
Get a single feature flag by key.


```js
launchdarkly.getFeatureFlag({
  "projectKey": "",
  "featureFlagKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * featureFlagKey **required** `string`: The feature flag's key
  * environmentKeyQuery `string`: The environment key

#### Output
* output [FeatureFlag](#featureflag)

### patchFeatureFlag
Modify a feature flag by ID


```js
launchdarkly.patchFeatureFlag({
  "projectKey": "",
  "featureFlagKey": "",
  "patchDelta": []
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * featureFlagKey **required** `string`: The feature flag's key
  * patchDelta **required** `array`
    * items `object`
      * op **required** `string`
      * path **required** `string`
      * value **required** `object`

#### Output
* output [FeatureFlag](#featureflag)

### getProjects
Returns a list of all projects in the account.


```js
launchdarkly.getProjects(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Projects](#projects)

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

#### Input
* input `object`
  * projectBody **required** `object`
    * key **required** `string`
    * name **required** `string`

#### Output
*Output schema unknown*

### deleteProject
Delete a project by ID


```js
launchdarkly.deleteProject({
  "projectKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key

#### Output
*Output schema unknown*

### getProject
Get a project by key.


```js
launchdarkly.getProject({
  "projectKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key

#### Output
* output [Project](#project)

### patchProject
Modify a project by ID


```js
launchdarkly.patchProject({
  "projectKey": "",
  "patchDelta": []
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * patchDelta **required** `array`
    * items `object`
      * op **required** `string`
      * path **required** `string`
      * value **required** `object`

#### Output
*Output schema unknown*

### getSearchUsers
Search users in LaunchDarkly based on their last active date, or a search query.


```js
launchdarkly.getSearchUsers({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKey **required** `string`: The environment key
  * q `string`: Search query
  * limit `number`: Pagination limit
  * offset `number`: Specifies the first item to return in the collection
  * after `number`: A unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag

#### Output
* output [Users](#users)

### getUsers
List all users in the environment.


```js
launchdarkly.getUsers({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKey **required** `string`: The environment key
  * limit `number`: Pagination limit

#### Output
* output [Users](#users)

### deleteUser
Delete a user by ID


```js
launchdarkly.deleteUser({
  "projectKey": "",
  "environmentKey": "",
  "userKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKey **required** `string`: The environment key
  * userKey **required** `string`: The user's key

#### Output
*Output schema unknown*

### getUser
Get a user by key.


```js
launchdarkly.getUser({
  "projectKey": "",
  "environmentKey": "",
  "userKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKey **required** `string`: The environment key
  * userKey **required** `string`: The user's key

#### Output
* output [User](#user)

### getUserFlagSettings
Lists the current flag settings for a given user.


```js
launchdarkly.getUserFlagSettings({
  "projectKey": "",
  "environmentKey": "",
  "userKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKey **required** `string`: The environment key
  * userKey **required** `string`: The user's key

#### Output
* output [UserFlagSettings](#userflagsettings)

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

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKey **required** `string`: The environment key
  * userKey **required** `string`: The user's key
  * featureFlagKey **required** `string`: The feature flag's key

#### Output
* output [UserFlagSetting](#userflagsetting)

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

#### Input
* input `object`
  * projectKey **required** `string`: The project key
  * environmentKey **required** `string`: The environment key
  * userKey **required** `string`: The user's key
  * featureFlagKey **required** `string`: The feature flag's key
  * userSettingsBody **required** `object`
    * setting `boolean`: The variation value to set for the user. Must match the variation type of the flag.

#### Output
*Output schema unknown*

### getWebhooks
Fetch a list of all webhooks


```js
launchdarkly.getWebhooks(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Webhooks](#webhooks)

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

#### Input
* input `object`
  * webhookBody **required** `object`
    * on **required** `boolean`
    * secret `string`
    * sign **required** `boolean`
    * url **required** `string`

#### Output
*Output schema unknown*

### deleteWebhook
Delete a webhook by ID


```js
launchdarkly.deleteWebhook({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The resource ID

#### Output
*Output schema unknown*

### getWebhook
Get a webhook by ID


```js
launchdarkly.getWebhook({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The resource ID

#### Output
* output [Webhook](#webhook)

### patchWebhook
Modify a webhook by ID


```js
launchdarkly.patchWebhook({
  "resourceId": "",
  "patchDelta": []
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The resource ID
  * patchDelta **required** `array`
    * items `object`
      * op **required** `string`
      * path **required** `string`
      * value **required** `object`

#### Output
* output [Webhook](#webhook)



## Definitions

### AuditLogEntries
* AuditLogEntries `object`
  * _links [Links](#links)
  * items `array`
    * items [AuditLogEntry](#auditlogentry)

### AuditLogEntry
* AuditLogEntry `object`
  * _id `string`
  * _links [Links](#links)
  * date `number`
  * description `string`
  * kind `string`
  * member [Member](#member)
  * name `string`
  * target `object`
    * _links [Links](#links)
    * name `string`
    * resources `array`
      * items `string`
  * title `string`
  * titleVerb `string`

### Clause
* Clause `object`
  * attribute `string`
  * negate `boolean`
  * op `string`
  * values `array`
    * items `string`

### Environment
* Environment `object`
  * _id `string`
  * _links [Links](#links)
  * apiKey `string`
  * color `string`
  * defaultTtl `number`
  * key `string`
  * mobileKey `string`
  * name `string`
  * secureMode `boolean`

### FeatureFlag
* FeatureFlag `object`
  * _links [Links](#links)
  * _maintainer [Member](#member)
  * creationDate `number`
  * environments `object`
  * includeInSnippet `boolean`
  * key `string`
  * kind `string`
  * maintainerId `string`
  * name `string`
  * tags `array`
    * items `string`
  * temporary `boolean`
  * variations `array`
    * items [Variation](#variation)

### FeatureFlagConfig
* FeatureFlagConfig `object`
  * archived `boolean`
  * fallthrough `object`
    * rollout [Rollout](#rollout)
    * variation `integer`
  * lastModified `integer`
  * on `boolean`
  * rules `array`
    * items [Rule](#rule)
  * salt `string`
  * sel `string`
  * targets `array`
    * items [Target](#target)
  * version `integer`

### FeatureFlagStatus
* FeatureFlagStatus `object`
  * _links [Links](#links)
  * default `boolean`
  * lastRequested `string`
  * name `string`

### FeatureFlagStatuses
* FeatureFlagStatuses `object`
  * _links [Links](#links)
  * items `array`
    * items [FeatureFlagStatus](#featureflagstatus)

### FeatureFlags
* FeatureFlags `object`
  * _links [Links](#links)
  * items `array`
    * items [FeatureFlag](#featureflag)

### Link
* Link `object`
  * href `string`
  * type `string`

### Links
* Links `object`
  * self [Link](#link)

### Member
* Member `object`
  * _id `string`
  * _links [Links](#links)
  * _pendingInvite `boolean`
  * customRoles `array`
    * items `string`
  * email `string`
  * isBeta `boolean`
  * role `string`

### Project
* Project `object`
  * _links [Links](#links)
  * items `array`
    * items [Environment](#environment)

### Projects
* Projects `object`
  * _id `string`
  * _links [Links](#links)
  * items `array`
    * items [Project](#project)
  * key `string`
  * name `string`

### Rollout
* Rollout `object`
  * variations `array`
    * items [WeightedVariation](#weightedvariation)

### Rule
* Rule `object`
  * clauses `array`
    * items [Clause](#clause)
  * rollout [Rollout](#rollout)
  * variation `integer`

### Target
* Target `object`
  * values `array`
    * items `string`
  * variation `integer`

### User
* User `object`
  * avatar `string`
  * environmentId `string`
  * lastPing `string`
  * ownerId `string`
  * user `object`

### UserFlagSetting
* UserFlagSetting `object`
  * _links [Links](#links)
  * _value `boolean`
  * setting `boolean`

### UserFlagSettings
* UserFlagSettings `object`
  * _links [Links](#links)
  * items `object`

### Users
* Users `object`
  * _links [Links](#links)
  * items `array`
    * items [User](#user)
  * totalCount `number`

### Variation
* Variation `object`
  * description `string`
  * name `string`
  * value **required** `object`

### Webhook
* Webhook `object`
  * _id `string`
  * _links [Links](#links)
  * on `boolean`
  * secret `string`
  * tags `array`
    * items `string`
  * url `string`

### Webhooks
* Webhooks `object`
  * _links [Links](#links)
  * items `array`
    * items [Webhook](#webhook)

### WeightedVariation
* WeightedVariation `object`
  * variation `integer`
  * weight `integer`


