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

launchdarkly.getAuditLogEntries({}).then(data => {
  console.log(data);
});
```

## Description

Build custom integrations with the LaunchDarkly REST API

## Actions

### getRoot
You can issue a GET request to the root resource to find all of the resource categories supported by the API.


```js
launchdarkly.getRoot(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Links](#links)

### getAuditLogEntries
Get a list of all audit log entries. The query parameters allow you to restrict the returned results by date ranges, resource specifiers, or a full-text search query.


```js
launchdarkly.getAuditLogEntries({}, context)
```

#### Input
* input `object`
  * before `number`: A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have before this timestamp.
  * after `number`: A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have occured after this timestamp.
  * q `string`: Text to search for. You can search for the full or partial name of the resource involved or fullpartial email address of the member who made the change.
  * limit `number`: A limit on the number of audit log entries to be returned, between 1 and 20.
  * spec `string`: A resource specifier, allowing you to filter audit log listings by resource.

#### Output
* output [AuditLogEntries](#auditlogentries)

### getAuditLogEntry
Use this endpoint to fetch a single audit log entry by its resouce ID.


```js
launchdarkly.getAuditLogEntry({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The resource ID.

#### Output
* output [AuditLogEntry](#auditlogentry)

### getFeatureFlagStatus
Get a list of statuses for all feature flags. The status includes the last time the feature flag was requested, as well as the state of the flag.


```js
launchdarkly.getFeatureFlagStatus({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

#### Output
* output [FeatureFlagStatuses](#featureflagstatuses)

### getFeatureFlagStatuses
Get the status for a particular feature flag.


```js
launchdarkly.getFeatureFlagStatuses({
  "projectKey": "",
  "environmentKey": "",
  "featureFlagKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.

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
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * env `string`: By default, each feature will include configurations for each environment. You can filter environments with the env query parameter. For example, setting env=production will restrict the returned configurations to just your production environment.
  * tag `string`: Filter by tag. A tag can be used to group flags across projects.

#### Output
* output [FeatureFlags](#featureflags)

### postFeatureFlag
Creates a new feature flag.


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
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * featureFlagBody **required** `object`
    * includeInSnippet `boolean`: Whether or not this flag should be made available to the client-side JavaScript SDK.
    * key **required** `string`: A unique key that will be used to reference the flag in your code.
    * name **required** `string`: A human-friendly name for the feature flag. Remember to note if this flag is intended to be temporary or permanent.
    * tags `array`: Tags for the feature flag.
      * items `string`
    * temporary `boolean`: Whether or not the flag is a temporary flag.
    * variations **required** `array`: An array of possible variations for the flag.
      * items [Variation](#variation)

#### Output
*Output schema unknown*

### deleteFeatureFlag
Delete a feature flag in all environments. Be careful-- only delete feature flags that are no longer being used by your application.


```js
launchdarkly.deleteFeatureFlag({
  "projectKey": "",
  "featureFlagKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.

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
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.
  * env `string`: By default, each feature will include configurations for each environment. You can filter environments with the env query parameter. For example, setting env=production will restrict the returned configurations to just your production environment.

#### Output
* output [FeatureFlag](#featureflag)

### patchFeatureFlag
Perform a partial update to a feature.


```js
launchdarkly.patchFeatureFlag({
  "projectKey": "",
  "featureFlagKey": "",
  "patchComment": {}
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.
  * patchComment **required** `object`
    * comment `string`
    * patch `array`
      * items `object`
        * op **required** `string`
        * path **required** `string`
        * value **required** `string`

#### Output
* output [FeatureFlag](#featureflag)

### getMembers
Returns a list of all members in the account.


```js
launchdarkly.getMembers(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Members](#members)

### postMembers
Invite new members.


```js
launchdarkly.postMembers({
  "membersBody": []
}, context)
```

#### Input
* input `object`
  * membersBody **required** `array`
    * items `object`
      * customRoles `array`
        * items [CustomRoleKeyOrId](#customrolekeyorid)
      * email **required** `string`
      * firstName `string`
      * inlineRole [Statements](#statements)
      * lastName `string`
      * role [NonOwnerRole](#nonownerrole)

#### Output
*Output schema unknown*

### deleteMember
Delete a team member by ID.


```js
launchdarkly.deleteMember({
  "memberId": ""
}, context)
```

#### Input
* input `object`
  * memberId **required** `string`: The member ID.

#### Output
*Output schema unknown*

### getMember
Get a single team member by ID.


```js
launchdarkly.getMember({
  "memberId": ""
}, context)
```

#### Input
* input `object`
  * memberId **required** `string`: The member ID.

#### Output
* output [Member](#member)

### patchMember
Modify a team member by ID.


```js
launchdarkly.patchMember({
  "memberId": "",
  "patchDelta": []
}, context)
```

#### Input
* input `object`
  * memberId **required** `string`: The member ID.
  * patchDelta **required** `array`
    * items `object`
      * op **required** `string`
      * path **required** `string`
      * value **required** `boolean`

#### Output
* output [Member](#member)

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
Create a new project with the given key and name.


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
Delete a project by key. Caution-- deleting a project will delete all associated environments and feature flags. You cannot delete the last project in an account.


```js
launchdarkly.deleteProject({
  "projectKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.

#### Output
*Output schema unknown*

### getProject
Fetch a single project by key.


```js
launchdarkly.getProject({
  "projectKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.

#### Output
* output [Project](#project)

### patchProject
Modify a project by ID.


```js
launchdarkly.patchProject({
  "projectKey": "",
  "patchDelta": []
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * patchDelta **required** `array`
    * items `object`
      * op **required** `string`
      * path **required** `string`
      * value **required** `boolean`

#### Output
* output [Project](#project)

### postEnvironment
Create a new environment in a specified project with a given name, key, and swatch color.


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
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentBody **required** `object`
    * color **required** `string`: A color swatch (as an RGB hex value with no leading '#', e.g. C8C8C8).
    * defaultTtl `number`: The default TTL for the new environment.
    * key **required** `string`: A project-unique key for the new environment.
    * name **required** `string`: The name of the new environment.

#### Output
*Output schema unknown*

### deleteEnvironment
Delete an environment in a specific project.


```js
launchdarkly.deleteEnvironment({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

#### Output
*Output schema unknown*

### getEnvironment
Get an environment given a project and key.


```js
launchdarkly.getEnvironment({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

#### Output
* output [Environment](#environment)

### patchEnvironment
Modify an environment by ID.


```js
launchdarkly.patchEnvironment({
  "projectKey": "",
  "environmentKey": "",
  "patchDelta": []
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * patchDelta **required** `array`
    * items `object`
      * op **required** `string`
      * path **required** `string`
      * value **required** `boolean`

#### Output
* output [Environment](#environment)

### getCustomRoles
Return a complete list of custom roles.


```js
launchdarkly.getCustomRoles(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CustomRoles](#customroles)

### postCustomRole
Create a new custom role.


```js
launchdarkly.postCustomRole({
  "customRoleBody": {
    "name": "",
    "key": "",
    "policy": []
  }
}, context)
```

#### Input
* input `object`
  * customRoleBody **required** `object`
    * description `string`: Description of the custom role.
    * key **required** [CustomRoleKeyOrId](#customrolekeyorid)
    * name **required** `string`: Name of the custom role.
    * policy **required** `array`
      * items [Policy](#policy)

#### Output
*Output schema unknown*

### deleteCustomRole
Delete a custom role by key.


```js
launchdarkly.deleteCustomRole({
  "customRoleKey": ""
}, context)
```

#### Input
* input `object`
  * customRoleKey **required** `string`: The custom role key.

#### Output
*Output schema unknown*

### getCustomRole
Get one custom role by key.


```js
launchdarkly.getCustomRole({
  "customRoleKey": ""
}, context)
```

#### Input
* input `object`
  * customRoleKey **required** `string`: The custom role key.

#### Output
* output [CustomRole](#customrole)

### patchCustomRole
Modify a custom role by key.


```js
launchdarkly.patchCustomRole({
  "customRoleKey": "",
  "patchDelta": []
}, context)
```

#### Input
* input `object`
  * customRoleKey **required** `string`: The custom role key.
  * patchDelta **required** `array`
    * items `object`
      * op **required** `string`
      * path **required** `string`
      * value **required** `boolean`

#### Output
* output [CustomRole](#customrole)

### getSearchUsers
Search users in LaunchDarkly based on their last active date, or a search query. It should not be used to enumerate all users in LaunchDarkly-- use the List users API resource.


```js
launchdarkly.getSearchUsers({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * q `string`: Search query.
  * limit `number`: Pagination limit.
  * offset `number`: Specifies the first item to return in the collection.
  * after `number`: A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have occured after this timestamp.

#### Output
* output [Users](#users)

### getUsers
List all users in the environment. Includes the total count of users. In each page, there will be up to 'limit' users returned (default 20). This is useful for exporting all users in the system for further analysis. Paginated collections will include a next link containing a URL with the next set of elements in the collection.


```js
launchdarkly.getUsers({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * limit `number`: Pagination limit.

#### Output
* output [Users](#users)

### deleteUser
Delete a user by ID.


```js
launchdarkly.deleteUser({
  "projectKey": "",
  "environmentKey": "",
  "userKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userKey **required** `string`: The user's key.

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
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userKey **required** `string`: The user's key.

#### Output
* output [User](#user)

### getUserFlagSettings
Fetch a single flag setting for a user by key.


```js
launchdarkly.getUserFlagSettings({
  "projectKey": "",
  "environmentKey": "",
  "userKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userKey **required** `string`: The user's key.

#### Output
* output [UserFlagSettings](#userflagsettings)

### getUserFlagSetting
Fetch a single flag setting for a user by key.


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
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userKey **required** `string`: The user's key.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.

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
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userKey **required** `string`: The user's key.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.
  * userSettingsBody **required** `object`
    * setting `boolean`: The variation value to set for the user. Must match the variation type of the flag.

#### Output
*Output schema unknown*

### getWebhooks
Fetch a list of all webhooks.


```js
launchdarkly.getWebhooks(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Webhooks](#webhooks)

### postWebhook
Create a webhook.


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
    * on **required** `boolean`: Whether this webhook is enabled or not.
    * secret `string`: If sign is true, and the secret attribute is omitted, LaunchDarkly will automatically generate a secret for you.
    * sign **required** `boolean`: If sign is false, the webhook will not include a signature header, and the secret can be omitted.
    * url **required** `string`: The URL of the remote webhook.

#### Output
*Output schema unknown*

### deleteWebhook
Delete a webhook by ID.


```js
launchdarkly.deleteWebhook({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The resource ID.

#### Output
*Output schema unknown*

### getWebhook
Get a webhook by ID.


```js
launchdarkly.getWebhook({
  "resourceId": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The resource ID.

#### Output
* output [Webhook](#webhook)

### patchWebhook
Modify a webhook by ID.


```js
launchdarkly.patchWebhook({
  "resourceId": "",
  "patchDelta": []
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The resource ID.
  * patchDelta **required** `array`
    * items `object`
      * op **required** `string`
      * path **required** `string`
      * value **required** `boolean`

#### Output
* output [Webhook](#webhook)



## Definitions

### Action
* Action `string`: An action to perform on a resource.

### Actions
* Actions `array`
  * items [Action](#action)

### AuditLogEntries
* AuditLogEntries `object`
  * _links [Links](#links)
  * items `array`
    * items [AuditLogEntry](#auditlogentry)

### AuditLogEntry
* AuditLogEntry `object`
  * _id [Id](#id)
  * _links [Links](#links)
  * comment `string`
  * date `integer`
  * description `string`
  * kind `string`
  * member [Member](#member)
  * name `string`
  * shortDescription `string`
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

### CustomRole
* CustomRole `object`
  * _id [Id](#id)
  * _links [Links](#links)
  * description `string`: Description of the custom role.
  * key [CustomRoleKeyOrId](#customrolekeyorid)
  * name `string`: Name of the custom role.
  * policy `array`
    * items [Policy](#policy)

### CustomRoleKeyOrId
* CustomRoleKeyOrId `string`: The 20-hexdigit id or the key for a custom role.

### CustomRoles
* CustomRoles `object`
  * _links [Links](#links)
  * items [CustomRole](#customrole)

### Environment
* Environment `object`
  * _id `string`: The unique id for the environment.
  * _links [Links](#links)
  * apiKey `string`: The SDK key for backend LaunchDarkly SDKs.
  * color `string`: The swatch color for the environment.
  * defaultTtl `number`: The default TTL.
  * key `string`: The key for the environment.
  * mobileKey `string`: The SDK key for mobile LaunchDarkly SDKs.
  * name `string`: The name of the environment.
  * secureMode `boolean`: Determines if this environment is in safe mode.

### FeatureFlag
* FeatureFlag `object`
  * _links [Links](#links)
  * _maintainer [Member](#member)
  * creationDate `number`: A unix epoch time in milliseconds specifying the creation time of this flag.
  * environments `object`
  * includeInSnippet `boolean`
  * key `string`
  * kind `string`: Whether the feature flag is a boolean flag or multivariate.
  * maintainerId `string`: The ID of the member that should maintain this flag.
  * name `string`: Name of the feature flag.
  * tags `array`: An array of tags for this feature flag.
    * items `string`
  * temporary `boolean`: Whether or not this flag is temporary.
  * variations `array`: The variations for this feature flag.
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
  * name `string` (values: new, active, inactive, launched): | Name     | Description |

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

### Id
* Id `string`: The unique resource id.

### Link
* Link `object`
  * href `string`
  * type `string`

### Links
* Links `object`
  * self [Link](#link)

### Member
* Member `object`
  * _id [Id](#id)
  * _links [Links](#links)
  * _pendingInvite `boolean`
  * customRoles `array`
    * items [Id](#id)
  * email `string`
  * isBeta `boolean`
  * role [Role](#role)

### Members
* Members `object`
  * _links [Links](#links)
  * items [Member](#member)

### NonOwnerRole
* NonOwnerRole `string` (values: writer, reader, admin)

### Policy
* Policy `object`
  * actions [Actions](#actions)
  * effect `string`: Effect of the policy - allow or deny.
  * resources [Resources](#resources)

### Project
* Project `object`
  * _links [Links](#links)
  * items `array`
    * items [Environment](#environment)

### Projects
* Projects `object`
  * _id [Id](#id)
  * _links [Links](#links)
  * items `array`
    * items [Project](#project)
  * key `string`
  * name `string`

### Resource
* Resource `string`: A resource specifier string

### Resources
* Resources `array`
  * items [Resource](#resource)

### Role
* Role `string` (values: writer, reader, admin, owner)

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

### Statement
* Statement `object`
  * actions [Actions](#actions)
  * effect `string` (values: allow, deny)
  * notactions [Actions](#actions)
  * notresources [Resources](#resources)
  * resources [Resources](#resources)

### Statements
* Statements `array`
  * items [Statement](#statement)

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
  * ownerId [Id](#id)
  * user `object`

### UserFlagSetting
* UserFlagSetting `object`
  * _links [Links](#links)
  * _value `boolean`: The most important attribute in the response. The _value is the current setting for the user. For a boolean feature toggle, this will be true, false, or null if there is no defined fallthrough value.
  * setting `boolean`: The setting attribute indicates whether you've explicitly targeted this user to receive a particular variation. For example, if you have explicitly turned off a feature toggle for a user, setting will be false. A setting of null means that you haven't assigned that user to a specific variation.

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
  * value **required** `boolean`

### Webhook
* Webhook `object`
  * _id [Id](#id)
  * _links [Links](#links)
  * on `boolean`: Whether this webhook is enabled or not.
  * secret `string`: If defined, the webhooks post request will include a X-LD-Signature header whose value will contain an HMAC SHA256 hex digest of the webhook payload, using the secret as the key.
  * tags `array`: Tags assigned to this webhook.
    * items `string`
  * url `string`: The URL of the remote webhook.

### Webhooks
* Webhooks `object`
  * _links [Links](#links)
  * items `array`
    * items [Webhook](#webhook)

### WeightedVariation
* WeightedVariation `object`
  * variation `integer`
  * weight `integer`


