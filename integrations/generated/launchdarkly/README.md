# @datafire/launchdarkly

Client library for LaunchDarkly REST API

## Installation and Usage
```bash
npm install --save @datafire/launchdarkly
```
```js
let launchdarkly = require('@datafire/launchdarkly').create({
  Token: ""
});

.then(data => {
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

### getRelayProxyConfigs
Returns a list of relay proxy configurations in the account.


```js
launchdarkly.getRelayProxyConfigs(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [RelayProxyConfigs](#relayproxyconfigs)

### postRelayAutoConfig
Create a new relay proxy config.


```js
launchdarkly.postRelayAutoConfig({
  "relayProxyConfigBody": {}
}, context)
```

#### Input
* input `object`
  * relayProxyConfigBody **required** `object`
    * name `string`: A human-friendly name for the relay proxy configuration
    * policy `array`
      * items [Policy](#policy)

#### Output
* output [RelayProxyConfig](#relayproxyconfig)

### deleteRelayProxyConfig
Delete a relay proxy configuration by ID.


```js
launchdarkly.deleteRelayProxyConfig({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The relay proxy configuration ID

#### Output
*Output schema unknown*

### getRelayProxyConfig
Get a single relay proxy configuration by ID.


```js
launchdarkly.getRelayProxyConfig({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The relay proxy configuration ID

#### Output
* output [RelayProxyConfig](#relayproxyconfig)

### patchRelayProxyConfig
Modify a relay proxy configuration by ID.


```js
launchdarkly.patchRelayProxyConfig({
  "id": "",
  "patchDelta": []
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The relay proxy configuration ID
  * patchDelta **required** `array`
    * items [PatchOperation](#patchoperation)

#### Output
* output [RelayProxyConfig](#relayproxyconfig)

### resetRelayProxyConfig
Reset a relay proxy configuration's secret key with an optional expiry time for the old key.


```js
launchdarkly.resetRelayProxyConfig({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The relay proxy configuration ID
  * expiry `integer`: An expiration time for the old relay proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the relay proxy configuration will expire immediately

#### Output
* output [RelayProxyConfig](#relayproxyconfig)

### getAuditLogEntries
Get a list of all audit log entries. The query parameters allow you to restrict the returned results by date ranges, resource specifiers, or a full-text search query.


```js
launchdarkly.getAuditLogEntries({}, context)
```

#### Input
* input `object`
  * before `integer`: A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have before this timestamp.
  * after `integer`: A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have occurred after this timestamp.
  * q `string`: Text to search for. You can search for the full or partial name of the resource involved or full or partial email address of the member who made the change.
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

### getDestinations
Returns a list of all data export destinations.


```js
launchdarkly.getDestinations(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Destinations](#destinations)

### postDestination
Create a new data export destination


```js
launchdarkly.postDestination({
  "projectKey": "",
  "environmentKey": "",
  "destinationBody": {
    "name": "",
    "kind": "",
    "config": {}
  }
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * destinationBody **required** `object`
    * config **required** `object`: destination-specific configuration.
    * kind **required** `string` (values: google-pubsub, kinesis, mparticle, segment): The data export destination type. Available choices are kinesis, google-pubsub, mparticle, or segment.
    * name **required** `string`: A human-readable name for your data export destination.
    * on `boolean`: Whether the data export destination is on or not.

#### Output
* output [Destination](#destination)

### deleteDestination
Get a single data export destination by ID


```js
launchdarkly.deleteDestination({
  "projectKey": "",
  "environmentKey": "",
  "destinationId": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * destinationId **required** `string`: The data export destination ID.

#### Output
*Output schema unknown*

### getDestination
Get a single data export destination by ID


```js
launchdarkly.getDestination({
  "projectKey": "",
  "environmentKey": "",
  "destinationId": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * destinationId **required** `string`: The data export destination ID.

#### Output
* output [Destination](#destination)

### patchDestination
Perform a partial update to a data export destination.


```js
launchdarkly.patchDestination({
  "projectKey": "",
  "environmentKey": "",
  "destinationId": "",
  "PatchOnly": []
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * destinationId **required** `string`: The data export destination ID.
  * PatchOnly **required** `array`
    * items [PatchOperation](#patchoperation)

#### Output
* output [Destination](#destination)

### getFeatureFlagStatusAcrossEnvironments
Get the status for a particular feature flag across environments


```js
launchdarkly.getFeatureFlagStatusAcrossEnvironments({
  "projectKey": "",
  "featureFlagKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.

#### Output
* output [FeatureFlagStatusAcrossEnvironments](#featureflagstatusacrossenvironments)

### getFeatureFlagStatuses
Get a list of statuses for all feature flags. The status includes the last time the feature flag was requested, as well as the state of the flag.


```js
launchdarkly.getFeatureFlagStatuses({
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

### getFeatureFlagStatus
Get the status for a particular feature flag.


```js
launchdarkly.getFeatureFlagStatus({
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
  * env `array`: By default, each feature will include configurations for each environment. You can filter environments with the env query parameter. For example, setting env=["production"] will restrict the returned configurations to just your production environment.
  * summary `boolean`: By default in api version >= 1, flags will _not_ include their list of prerequisites, targets or rules.  Set summary=0 to include these fields for each flag returned.
  * archived `boolean`: When set to 1, only archived flags will be included in the list of flags returned.  By default, archived flags are not included in the list of flags.
  * limit `number`: The number of objects to return. Defaults to -1, which returns everything.
  * offset `number`: Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first 10 items and then return the next limit items.
  * filter `string`: A comma-separated list of filters. Each filter is of the form field:value.
  * sort `string`: A comma-separated list of fields to sort by. A field prefixed by a - will be sorted in descending order.
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
    * clientSideAvailability [ClientSideAvailability](#clientsideavailability)
    * defaults [Defaults](#defaults)
    * description `string`: A description of the feature flag.
    * includeInSnippet `boolean`: Whether or not this flag should be made available to the client-side JavaScript SDK.
    * key **required** `string`: A unique key that will be used to reference the flag in your code.
    * name **required** `string`: A human-friendly name for the feature flag. Remember to note if this flag is intended to be temporary or permanent.
    * tags `array`: Tags for the feature flag.
      * items `string`
    * temporary `boolean`: Whether or not the flag is a temporary flag.
    * variations **required** `array`: An array of possible variations for the flag.
      * items [Variation](#variation)
  * clone `string`: The key of the feature flag to be cloned. The key identifies the flag in your code.  For example, setting clone=flagKey will copy the full targeting configuration for all environments (including on/off state) from the original flag to the new flag.

#### Output
* output [FeatureFlag](#featureflag)

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
  * env `array`: By default, each feature will include configurations for each environment. You can filter environments with the env query parameter. For example, setting env=["production"] will restrict the returned configurations to just your production environment.

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
      * items [PatchOperation](#patchoperation)

#### Output
* output [FeatureFlag](#featureflag)

### copyFeatureFlag
Copies the feature flag configuration from one environment to the same feature flag in another environment.


```js
launchdarkly.copyFeatureFlag({
  "projectKey": "",
  "featureFlagKey": "",
  "featureFlagCopyBody": {}
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.
  * featureFlagCopyBody **required** `object`
    * comment `string`: comment will be included in audit log item for change.
    * excludedActions `array`: Define the parts of the flag configuration that will not be copied.
      * items [CopyActions](#copyactions)
    * includedActions `array`: Define the parts of the flag configuration that will be copied.
      * items [CopyActions](#copyactions)
    * source [FeatureFlagCopyObject](#featureflagcopyobject)
    * target [FeatureFlagCopyObject](#featureflagcopyobject)

#### Output
* output [FeatureFlag](#featureflag)

### getExpiringUserTargets
Get expiring user targets for feature flag


```js
launchdarkly.getExpiringUserTargets({
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
* output [UserTargetingExpirationForFlags](#usertargetingexpirationforflags)

### patchExpiringUserTargets
Update, add, or delete expiring user targets on feature flag


```js
launchdarkly.patchExpiringUserTargets({
  "projectKey": "",
  "environmentKey": "",
  "featureFlagKey": "",
  "SemanticPatchWithComment": {}
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.
  * SemanticPatchWithComment **required** `object`
    * items [SemanticPatchOperation](#semanticpatchoperation)

#### Output
* output [UserTargetingExpirationForFlags](#usertargetingexpirationforflags)

### getIntegrations
Get a list of all configured audit log event integrations associated with this account.


```js
launchdarkly.getIntegrations(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Integrations](#integrations)

### getIntegrationSubscriptions
Get a list of all configured integrations of a given kind.


```js
launchdarkly.getIntegrationSubscriptions({
  "integrationKey": ""
}, context)
```

#### Input
* input `object`
  * integrationKey **required** `string`: The key used to specify the integration kind.

#### Output
* output [Integration](#integration)

### postIntegrationSubscription
Create a new integration subscription of a given kind.


```js
launchdarkly.postIntegrationSubscription({
  "integrationKey": "",
  "subscriptionBody": {
    "name": "",
    "config": {}
  }
}, context)
```

#### Input
* input `object`
  * integrationKey **required** `string`: The key used to specify the integration kind.
  * subscriptionBody **required** `object`
    * config **required** `object`: Integration-specific configuration fields.
    * name **required** `string`: A human-readable name for your subscription configuration.
    * on `boolean`: Whether the integration subscription is active or not.
    * statements `array`
      * items [Statement](#statement)
    * tags `array`: Tags for the integration subscription.
      * items `string`

#### Output
* output [IntegrationSubscription](#integrationsubscription)

### deleteIntegrationSubscription
Delete an integration subscription by ID.


```js
launchdarkly.deleteIntegrationSubscription({
  "integrationKey": "",
  "integrationId": ""
}, context)
```

#### Input
* input `object`
  * integrationKey **required** `string`: The key used to specify the integration kind.
  * integrationId **required** `string`: The integration ID.

#### Output
*Output schema unknown*

### getIntegrationSubscription
Get a single integration subscription by ID.


```js
launchdarkly.getIntegrationSubscription({
  "integrationKey": "",
  "integrationId": ""
}, context)
```

#### Input
* input `object`
  * integrationKey **required** `string`: The key used to specify the integration kind.
  * integrationId **required** `string`: The integration ID.

#### Output
* output [IntegrationSubscription](#integrationsubscription)

### patchIntegrationSubscription
Modify an integration subscription by ID.


```js
launchdarkly.patchIntegrationSubscription({
  "integrationKey": "",
  "integrationId": "",
  "patchDelta": []
}, context)
```

#### Input
* input `object`
  * integrationKey **required** `string`: The key used to specify the integration kind.
  * integrationId **required** `string`: The integration ID.
  * patchDelta **required** `array`
    * items [PatchOperation](#patchoperation)

#### Output
* output [IntegrationSubscription](#integrationsubscription)

### getMembers
Returns a list of all members in the account.


```js
launchdarkly.getMembers({}, context)
```

#### Input
* input `object`
  * limit `number`: The number of objects to return. Defaults to -1, which returns everything.
  * offset `number`: Where to start in the list. This is for use with pagination. For example, an offset of 10 would skip the first 10 items and then return the next limit items.
  * filter `string`: A comma-separated list of filters. Each filter is of the form field:value.
  * sort `string`: A comma-separated list of fields to sort by. A field prefixed by a - will be sorted in descending order.

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
        * items `string`: The 20-hexdigit id or the key for a custom role.
      * email **required** `string`
      * firstName `string`
      * inlineRole `array`
        * items [Statement](#statement)
      * lastName `string`
      * role [Role](#role)

#### Output
* output [Members](#members)

### getMe
Get the current team member associated with the token


```js
launchdarkly.getMe(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Member](#member)

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
    * items [PatchOperation](#patchoperation)

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
    * defaultClientSideAvailability [ClientSideAvailability](#clientsideavailability)
    * environments `array`
      * items [EnvironmentPost](#environmentpost)
    * includeInSnippetByDefault `boolean`
    * key **required** `string`
    * name **required** `string`
    * tags `array`
      * items `string`

#### Output
* output [Project](#project)

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
    * items [PatchOperation](#patchoperation)

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
  * environmentBody **required** [EnvironmentPost](#environmentpost)

#### Output
* output [Environment](#environment)

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
    * items [PatchOperation](#patchoperation)

#### Output
* output [Environment](#environment)

### resetEnvironmentSDKKey
Reset an environment's SDK key with an optional expiry time for the old key.


```js
launchdarkly.resetEnvironmentSDKKey({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * expiry `integer`: An expiration time for the old environment SDK key, expressed as a Unix epoch time in milliseconds. By default, the key will expire immediately.

#### Output
* output [Environment](#environment)

### resetEnvironmentMobileKey
Reset an environment's mobile key. The optional expiry for the old key is deprecated for this endpoint, so the old key will always expire immediately.


```js
launchdarkly.resetEnvironmentMobileKey({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * expiry `integer`: The expiry parameter is deprecated for this endpoint, so the old mobile key will always expire immediately. This parameter will be removed in an upcoming major API client version.

#### Output
* output [Environment](#environment)

### getFeatureFlagChangeRequest
Get a single change request for a feature flag


```js
launchdarkly.getFeatureFlagChangeRequest({
  "projectKey": "",
  "featureFlagKey": "",
  "environmentKey": "",
  "featureFlagChangeRequestId": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * featureFlagChangeRequestId **required** `string`: The feature flag change request ID

#### Output
* output [FeatureFlagChangeRequests](#featureflagchangerequests)

### postApplyFeatureFlagChangeRequest
Apply change request for a feature flag


```js
launchdarkly.postApplyFeatureFlagChangeRequest({
  "projectKey": "",
  "featureFlagKey": "",
  "environmentKey": "",
  "featureFlagChangeRequestId": "",
  "featureFlagChangeRequestApplyConfigBody": {}
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * featureFlagChangeRequestId **required** `string`: The feature flag change request ID
  * featureFlagChangeRequestApplyConfigBody **required** `object`
    * comment `string`: comment will be included in audit log item for change.

#### Output
* output [FeatureFlagChangeRequests](#featureflagchangerequests)

### postReviewFeatureFlagChangeRequest
Review change request for a feature flag


```js
launchdarkly.postReviewFeatureFlagChangeRequest({
  "projectKey": "",
  "featureFlagKey": "",
  "environmentKey": "",
  "featureFlagChangeRequestId": "",
  "featureFlagChangeRequestReviewConfigBody": {
    "kind": ""
  }
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * featureFlagChangeRequestId **required** `string`: The feature flag change request ID
  * featureFlagChangeRequestReviewConfigBody **required** `object`
    * comment `string`: comment will be included in audit log item for change.
    * kind **required** `string` (values: approve, decline): Either approve or decline change request

#### Output
* output [FeatureFlagChangeRequests](#featureflagchangerequests)

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
    * key **required** `string`: The 20-hexdigit id or the key for a custom role.
    * name **required** `string`: Name of the custom role.
    * policy **required** `array`
      * items [Policy](#policy)

#### Output
* output [CustomRole](#customrole)

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
    * items [PatchOperation](#patchoperation)

#### Output
* output [CustomRole](#customrole)

### getUserSegments
Get a list of all user segments in the given project.


```js
launchdarkly.getUserSegments({
  "projectKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * tag `string`: Filter by tag. A tag can be used to group flags across projects.

#### Output
* output [UserSegments](#usersegments)

### postUserSegment
Creates a new user segment.


```js
launchdarkly.postUserSegment({
  "projectKey": "",
  "environmentKey": "",
  "userSegmentBody": {
    "name": "",
    "key": ""
  }
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userSegmentBody **required** `object`
    * description `string`: A description for the user segment.
    * key **required** `string`: A unique key that will be used to reference the user segment in feature flags.
    * name **required** `string`: A human-friendly name for the user segment.
    * tags `array`: Tags for the user segment.
      * items `string`
    * unbounded `boolean`: Controls whether this segment can support unlimited numbers of users. Requires the beta API and additional setup. Include/exclude lists in this payload are not used in unbounded segments.

#### Output
* output [UserSegment](#usersegment)

### deleteUserSegment
Delete a user segment.


```js
launchdarkly.deleteUserSegment({
  "projectKey": "",
  "environmentKey": "",
  "userSegmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userSegmentKey **required** `string`: The user segment's key. The key identifies the user segment in your code.

#### Output
*Output schema unknown*

### getUserSegment
Get a single user segment by key.


```js
launchdarkly.getUserSegment({
  "projectKey": "",
  "environmentKey": "",
  "userSegmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userSegmentKey **required** `string`: The user segment's key. The key identifies the user segment in your code.

#### Output
* output [UserSegment](#usersegment)

### patchUserSegment
Perform a partial update to a user segment.


```js
launchdarkly.patchUserSegment({
  "projectKey": "",
  "environmentKey": "",
  "userSegmentKey": "",
  "PatchOnly": []
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userSegmentKey **required** `string`: The user segment's key. The key identifies the user segment in your code.
  * PatchOnly **required** `array`
    * items [PatchOperation](#patchoperation)

#### Output
* output [UserSegment](#usersegment)

### updatedUnboundedSegmentTargets
Update targets included or excluded in an unbounded segment


```js
launchdarkly.updatedUnboundedSegmentTargets({
  "projectKey": "",
  "environmentKey": "",
  "userSegmentKey": "",
  "unboundedSegmentTargetsBody": {}
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userSegmentKey **required** `string`: The user segment's key. The key identifies the user segment in your code.
  * unboundedSegmentTargetsBody **required** `object`
    * excluded [UnboundedSegmentTargetChanges](#unboundedsegmenttargetchanges)
    * included [UnboundedSegmentTargetChanges](#unboundedsegmenttargetchanges)

#### Output
*Output schema unknown*

### getExpiringUserTargetsOnSegment
Get expiring user targets for user segment


```js
launchdarkly.getExpiringUserTargetsOnSegment({
  "projectKey": "",
  "environmentKey": "",
  "userSegmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userSegmentKey **required** `string`: The user segment's key. The key identifies the user segment in your code.

#### Output
* output [UserTargetingExpirationForSegment](#usertargetingexpirationforsegment)

### patchExpiringUserTargetsOnSegment
Update, add, or delete expiring user targets on user segment


```js
launchdarkly.patchExpiringUserTargetsOnSegment({
  "projectKey": "",
  "environmentKey": "",
  "userSegmentKey": "",
  "SemanticPatchWithComment": {}
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userSegmentKey **required** `string`: The user segment's key. The key identifies the user segment in your code.
  * SemanticPatchWithComment **required** `object`
    * items [SemanticPatchOperation](#semanticpatchoperation)

#### Output
* output [UserTargetingExpirationForSegment](#usertargetingexpirationforsegment)

### getTokens
Returns a list of tokens in the account.


```js
launchdarkly.getTokens({}, context)
```

#### Input
* input `object`
  * showAll `boolean`: If set to true, and the authentication access token has the "Admin" role, personal access tokens for all members will be retrieved.

#### Output
* output [Tokens](#tokens)

### postToken
Create a new token.


```js
launchdarkly.postToken({
  "tokenBody": {}
}, context)
```

#### Input
* input `object`
  * tokenBody **required** `object`
    * customRoleIds `array`: A list of custom role IDs to use as access limits for the access token
      * items `string`
    * defaultApiVersion `integer`: The default API version for this token
    * inlineRole `array`
      * items [Statement](#statement)
    * name `string`: A human-friendly name for the access token
    * role `string`: The name of a built-in role for the token
    * serviceToken `boolean`: Whether the token will be a service token https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens

#### Output
* output [Token](#token)

### deleteToken
Delete an access token by ID.


```js
launchdarkly.deleteToken({
  "tokenId": ""
}, context)
```

#### Input
* input `object`
  * tokenId **required** `string`: The access token ID.

#### Output
*Output schema unknown*

### getToken
Get a single access token by ID.


```js
launchdarkly.getToken({
  "tokenId": ""
}, context)
```

#### Input
* input `object`
  * tokenId **required** `string`: The access token ID.

#### Output
* output [Token](#token)

### patchToken
Modify an access token by ID.


```js
launchdarkly.patchToken({
  "tokenId": "",
  "patchDelta": []
}, context)
```

#### Input
* input `object`
  * tokenId **required** `string`: The access token ID.
  * patchDelta **required** `array`
    * items [PatchOperation](#patchoperation)

#### Output
* output [Token](#token)

### resetToken
Reset an access token's secret key with an optional expiry time for the old key.


```js
launchdarkly.resetToken({
  "tokenId": ""
}, context)
```

#### Input
* input `object`
  * tokenId **required** `string`: The access token ID.
  * expiry `integer`: An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By default, the token will expire immediately.

#### Output
* output [Token](#token)

### getUsage
Returns of the usage endpoints available.


```js
launchdarkly.getUsage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Usage](#usage)

### getEvaluations
Get events usage by event id and the feature flag key.


```js
launchdarkly.getEvaluations({
  "envId": "",
  "flagKey": ""
}, context)
```

#### Input
* input `object`
  * envId **required** `string`: The environment id for the flag evaluations in question.
  * flagKey **required** `string`: The key of the flag we want metrics for.

#### Output
* output [StreamSDKVersion](#streamsdkversion)

### getEvents
Get events usage endpoints.


```js
launchdarkly.getEvents(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Events](#events)

### getEvent
Get events usage by event type.


```js
launchdarkly.getEvent({
  "type": ""
}, context)
```

#### Input
* input `object`
  * type **required** `string`: The type of event we would like to track.

#### Output
* output [StreamSDKVersion](#streamsdkversion)

### getMAU
Get monthly active user data.


```js
launchdarkly.getMAU(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [MAU](#mau)

### getMAUByCategory
Get monthly active user data by category.


```js
launchdarkly.getMAUByCategory(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [MAUbyCategory](#maubycategory)

### getStreams
Returns a list of all streams.


```js
launchdarkly.getStreams(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Streams](#streams)

### getStream
Get a stream endpoint and return timeseries data.


```js
launchdarkly.getStream({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string`: The source of where the stream comes from.

#### Output
* output [Stream](#stream)

### getStreamBySDK
Get a stream timeseries data by source show sdk version metadata.


```js
launchdarkly.getStreamBySDK({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string`: The source of where the stream comes from.

#### Output
* output [StreamBySDK](#streambysdk)

### getStreamSDKVersion
Get a stream timeseries data by source and show all sdk version associated.


```js
launchdarkly.getStreamSDKVersion({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string`: The source of where the stream comes from.

#### Output
* output [StreamSDKVersion](#streamsdkversion)

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
  * limit `integer`: Pagination limit.
  * offset `integer`: Specifies the first item to return in the collection.
  * after `integer`: A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have occurred after this timestamp.

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
  * limit `integer`: Pagination limit.
  * h `string`: This parameter is required when following "next" links.
  * scrollId `string`: This parameter is required when following "next" links.

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

### getExpiringUserTargetsForUser
Get expiring dates on flags for user


```js
launchdarkly.getExpiringUserTargetsForUser({
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
* output [UserTargetingExpirationOnFlagsForUser](#usertargetingexpirationonflagsforuser)

### patchExpiringUserTargetsForFlags
Update, add, or delete expiring user targets for a single user on all flags


```js
launchdarkly.patchExpiringUserTargetsForFlags({
  "projectKey": "",
  "environmentKey": "",
  "userKey": "",
  "SemanticPatchWithComment": {}
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * userKey **required** `string`: The user's key.
  * SemanticPatchWithComment **required** `object`
    * items [SemanticPatchOperation](#semanticpatchoperation)

#### Output
* output [UserTargetingExpirationOnFlagsForUser](#usertargetingexpirationonflagsforuser)

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
    * name `string`: The name of the webhook.
    * on **required** `boolean`: Whether this webhook is enabled or not.
    * secret `string`: If sign is true, and the secret attribute is omitted, LaunchDarkly will automatically generate a secret for you.
    * sign **required** `boolean`: If sign is false, the webhook will not include a signature header, and the secret can be omitted.
    * statements `array`
      * items [Statement](#statement)
    * tags `array`: Tags for the webhook.
      * items `string`
    * url **required** `string`: The URL of the remote webhook.

#### Output
* output [Webhook](#webhook)

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
    * items [PatchOperation](#patchoperation)

#### Output
* output [Webhook](#webhook)

### getFeatureFlagChangeRequests
Get all change requests for a feature flag


```js
launchdarkly.getFeatureFlagChangeRequests({
  "projectKey": "",
  "featureFlagKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.

#### Output
* output [FeatureFlagChangeRequests](#featureflagchangerequests)

### postFeatureFlagChangeRequest



```js
launchdarkly.postFeatureFlagChangeRequest({
  "projectKey": "",
  "featureFlagKey": "",
  "environmentKey": ""
}, context)
```

#### Input
* input `object`
  * projectKey **required** `string`: The project key, used to tie the flags together under one project so they can be managed together.
  * featureFlagKey **required** `string`: The feature flag's key. The key identifies the flag in your code.
  * environmentKey **required** `string`: The environment key, used to tie together flag configuration and users under one environment so they can be managed together.
  * featureFlagChangeRequestConfigBody `object`
    * comment `string`: comment will be included in audit log item for change.
    * description **required** `string`: A name that describes the changes you would like to apply to a feature flag configuration
    * instructions **required** [SemanticPatchInstruction](#semanticpatchinstruction)
    * notifyMemberIds **required** `array`
      * items `string`

#### Output
* output [FeatureFlagChangeRequest](#featureflagchangerequest)



## Definitions

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
  * _id `string`
  * attribute `string`
  * negate `boolean`
  * op `string`
  * values `array`
    * items `object`

### ClientSideAvailability
* ClientSideAvailability `object`
  * usingEnvironmentId `boolean`: When set to true, this flag will be available to SDKs using the client-side id.
  * usingMobileKey `boolean`: When set to true, this flag will be available to SDKS using a mobile key.

### CopyActions
* CopyActions `string` (values: updateOn, updatePrerequisites, updateTargets, updateRules, updateFallthrough, updateOffVariation)

### CustomProperty
* CustomProperty `object`: A name and value describing a custom property.
  * name **required** `string`: The name of the property.
  * value `array`: Values for this property.
    * items `string`

### CustomPropertyValues
* CustomPropertyValues `array`: Values for this property.
  * items `string`

### CustomRole
* CustomRole `object`
  * _id [Id](#id)
  * _links [Links](#links)
  * description `string`: Description of the custom role.
  * key `string`: The 20-hexdigit id or the key for a custom role.
  * name `string`: Name of the custom role.
  * policy `array`
    * items [Policy](#policy)

### CustomRoles
* CustomRoles `object`
  * _links [Links](#links)
  * items `array`
    * items [CustomRole](#customrole)

### Defaults
* Defaults `object`: Default values to be used when a new environment is created.
  * offVariation **required** `integer`: The index of the variation to be served when a flag is off.
  * onVariation **required** `integer`: The index of the variation to be served when a flag's targeting is on (default variation).

### Destination
* Destination `object`
  * _id `string`: Unique destination ID.
  * _links [Links](#links)
  * config `object`: destination-specific configuration.
  * kind `string` (values: google-pubsub, kinesis, mparticle, segment): Destination type ("google-pubsub", "kinesis", "mparticle", or "segment")
  * name `string`: The destination name
  * on `boolean`: Whether the data export destination is on or not.
  * version `integer`

### DestinationAmazonKinesis
* DestinationAmazonKinesis `object`
  * region `string`
  * roleArn `string`
  * streamName `string`

### DestinationGooglePubSub
* DestinationGooglePubSub `object`
  * project `string`
  * topic `string`

### DestinationMParticle
* DestinationMParticle `object`
  * apiKey `string`
  * environment `string`
  * secret `string`
  * userIdentity `string`

### DestinationSegment
* DestinationSegment `object`
  * writeKey `string`

### Destinations
* Destinations `object`
  * _links [Links](#links)
  * items `array`
    * items [Destination](#destination)

### Environment
* Environment `object`
  * _id [Id](#id)
  * _links [Links](#links)
  * apiKey `string`: The SDK key for backend LaunchDarkly SDKs.
  * color `string`: The swatch color for the environment.
  * confirmChanges `boolean`: Determines if this environment requires confirmation for flag and segment changes.
  * defaultTrackEvents `boolean`: Set to true to send detailed event information for new flags.
  * defaultTtl `number`: The default TTL.
  * key `string`: The key for the environment.
  * mobileKey `string`: The SDK key for mobile LaunchDarkly SDKs.
  * name `string`: The name of the environment.
  * requireComments `boolean`: Determines if this environment requires comments for flag and segment changes.
  * secureMode `boolean`: Determines if this environment is in safe mode.
  * tags `array`: An array of tags for this environment.
    * items `string`

### EnvironmentPost
* EnvironmentPost `object`
  * color **required** `string`: A color swatch (as an RGB hex value with no leading '#', e.g. C8C8C8).
  * confirmChanges `boolean`: Determines if this environment requires confirmation for flag and segment changes.
  * defaultTrackEvents `boolean`: Set to true to send detailed event information for newly created flags.
  * defaultTtl `number`: The default TTL for the new environment.
  * key **required** `string`: A project-unique key for the new environment.
  * name **required** `string`: The name of the new environment.
  * requireComments `boolean`: Determines if this environment requires comments for flag and segment changes.
  * secureMode `boolean`: Determines whether the environment is in secure mode.
  * tags `array`: An array of tags for this environment.
    * items `string`

### EvaluationUsageError
* EvaluationUsageError `object`
  * code `string`
  * message `string`

### Events
* Events `object`
  * links [UsageLinks](#usagelinks)

### Fallthrough
* Fallthrough `object`
  * rollout [Rollout](#rollout)
  * variation `integer`

### FeatureFlag
* FeatureFlag `object`
  * _links [Links](#links)
  * _maintainer [Member](#member)
  * _version `integer`
  * archived `boolean`: Whether or not this flag is archived.
  * archivedDate `integer`: A unix epoch time in milliseconds specifying the archived time of this flag.
  * clientSideAvailability [ClientSideAvailability](#clientsideavailability)
  * creationDate `integer`: A unix epoch time in milliseconds specifying the creation time of this flag.
  * customProperties `object`: A mapping of keys to CustomProperty entries.
  * defaults [Defaults](#defaults)
  * description `string`: Description of the feature flag.
  * environments `object`
  * goalIds `array`: An array goals from all environments associated with this feature flag
    * items `string`
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

### FeatureFlagChangeRequest
* FeatureFlagChangeRequest `object`
  * _id [Id](#id)
  * _version `integer`
  * allReviews `array`
    * items [FeatureFlagChangeRequestReview](#featureflagchangerequestreview)
  * appliedByMemberID `string`: The id of the member that applied the change request
  * appliedDate `integer`: A unix epoch time in milliseconds specifying the date the change request was applied
  * creationDate `integer`: A unix epoch time in milliseconds specifying the date the change request was requested
  * currentReviewsByMemberId [FeatureFlagChangeRequestReview](#featureflagchangerequestreview)
  * instructions [SemanticPatchInstruction](#semanticpatchinstruction)
  * notifyMemberIds `array`
    * items `string`
  * requestorId `string`: The id of the member that requested the change
  * reviewStatus [FeatureFlagChangeRequestReviewStatus](#featureflagchangerequestreviewstatus)
  * status `string` (values: pending, completed, failed): | Name     | Description |

### FeatureFlagChangeRequestReview
* FeatureFlagChangeRequestReview `object`
  * _id [Id](#id)
  * creationDate `integer`: A unix epoch time in milliseconds specifying the date the change request was reviewed
  * kind [FeatureFlagChangeRequestReviewStatus](#featureflagchangerequestreviewstatus)
  * memberId [Id](#id)

### FeatureFlagChangeRequestReviewStatus
* FeatureFlagChangeRequestReviewStatus `string` (values: pending, approved, declined): | Name     | Description |

### FeatureFlagChangeRequests
* FeatureFlagChangeRequests `object`
  * _links [Links](#links)
  * items `array`
    * items [FeatureFlagChangeRequest](#featureflagchangerequest)

### FeatureFlagConfig
* FeatureFlagConfig `object`
  * _environmentName `string`
  * _site [Site](#site)
  * archived `boolean`
  * fallthrough [Fallthrough](#fallthrough)
  * lastModified `integer`
  * offVariation `integer`
  * on `boolean`
  * prerequisites `array`
    * items [Prerequisite](#prerequisite)
  * rules `array`
    * items [Rule](#rule)
  * salt `string`
  * sel `string`
  * targets `array`
    * items [Target](#target)
  * trackEvents `boolean`: Set to true to send detailed event information for this flag.
  * trackEventsFallthrough `boolean`: Set to true to send detailed event information when targeting is enabled but no individual targeting rule is matched.
  * version `integer`

### FeatureFlagCopyObject
* FeatureFlagCopyObject `object`
  * currentVersion `integer`: If the latest version of the flag matches provided version it will copy, otherwise it will return a conflict.
  * key **required** `string`: The environment key to be used.

### FeatureFlagScheduledChange
* FeatureFlagScheduledChange `object`
  * _id `string`
  * _version `integer`
  * executionDate `integer`: A unix epoch time in milliseconds specifying the date the scheduled changes will be applied
  * instructions [SemanticPatchInstruction](#semanticpatchinstruction)

### FeatureFlagScheduledChanges
* FeatureFlagScheduledChanges `object`
  * _links [Links](#links)
  * items `array`
    * items [FeatureFlagScheduledChange](#featureflagscheduledchange)

### FeatureFlagScheduledChangesConflicts
* FeatureFlagScheduledChangesConflicts `object`
  * instructions `array`
    * items `object`
      * conflicts `array`
        * items [ScheduledChangesFeatureFlagConflict](#scheduledchangesfeatureflagconflict)
      * kind `string`: The name of the modification you would like to perform on a resource.

### FeatureFlagStatus
* FeatureFlagStatus `object`
  * _links [Links](#links)
  * default `object`
  * lastRequested `string`
  * name `string` (values: new, active, inactive, launched): | Name     | Description |

### FeatureFlagStatusAcrossEnvironments
* FeatureFlagStatusAcrossEnvironments `object`
  * _links [Links](#links)
  * environments `object`
  * key `string`

### FeatureFlagStatusForQueriedEnvironment
* FeatureFlagStatusForQueriedEnvironment `object`
  * default `object`
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
  * totalCount `number`

### FlagListItem
* FlagListItem `object`
  * _links [Links](#links)
  * _site [Site](#site)
  * key `string`
  * name `string`

### HierarchicalLinks
* HierarchicalLinks `object`
  * parent [Link](#link)
  * self [Link](#link)

### Id
* Id `string`: The unique resource id.

### Integration
* Integration `object`
  * _links `object`
    * self [Link](#link)
  * items `array`
    * items [IntegrationSubscription](#integrationsubscription)

### IntegrationSubscription
* IntegrationSubscription `object`
  * _id [Id](#id)
  * _links [HierarchicalLinks](#hierarchicallinks)
  * _status `object`
    * errorCount `integer`
    * lastSuccess `integer`: A unix epoch time in milliseconds specifying the last time this integration was successfully used.
    * successCount `integer`
  * config `object`: A key-value mapping of configuration fields.
  * kind `string`: The type of integration associated with this configuration.
  * name `string`: The user-defined name associated with this configuration.
  * on `boolean`: Whether or not the integration is currently active.
  * statements `array`
    * items [Statement](#statement)
  * tags `array`: An array of tags for this integration configuration.
    * items `string`

### Integrations
* Integrations `object`
  * _links `object`: A mapping of integration types to their respective API endpoints.
  * items `array`
    * items [IntegrationSubscription](#integrationsubscription)

### Link
* Link `object`
  * href `string`
  * type `string`

### Links
* Links `object`
  * next [Link](#link)
  * self [Link](#link)

### MAU
* MAU `object`
  * _links [UsageLinks](#usagelinks)
  * metadata `array`
    * items [StreamBySDKLinksMetadata](#streambysdklinksmetadata)
  * series `array`
    * items [StreamUsageSeries](#streamusageseries)

### MAUMetadata
* MAUMetadata `object`

### MAUbyCategory
* MAUbyCategory `object`
  * _links [StreamBySDKLinks](#streambysdklinks)
  * metadata `array`
    * items [MAUMetadata](#maumetadata)
  * series `array`
    * items [StreamUsageSeries](#streamusageseries)

### Member
* Member `object`
  * _id [Id](#id)
  * _links [Links](#links)
  * _pendingInvite `boolean`
  * _verified `boolean`
  * customRoles `array`
    * items [Id](#id)
  * email `string`
  * firstName `string`
  * isBeta `boolean`
  * lastName `string`
  * role [Role](#role)

### Members
* Members `object`
  * _links [Links](#links)
  * items `array`
    * items [Member](#member)
  * totalCount `number`

### PatchOperation
* PatchOperation `object`
  * op **required** `string`
  * path **required** `string`
  * value **required** `object`

### Policy
* Policy `object`
  * actions `array`
    * items `string`: An action to perform on a resource.
  * effect `string`: Effect of the policy - allow or deny.
  * notActions `array`: Targeted actions will be those actions NOT in this list. The "actions" field must be empty to use this field.
    * items `string`: An action to perform on a resource.
  * notResources `array`: Targeted resource will be those resources NOT in this list. The "resources`" field must be empty to use this field.
    * items `string`: A resource specifier string
  * resources `array`
    * items `string`: A resource specifier string

### Prerequisite
* Prerequisite `object`
  * key `string`
  * variation `integer`

### Project
* Project `object`
  * _id [Id](#id)
  * _links [Links](#links)
  * defaultClientSideAvailability [ClientSideAvailability](#clientsideavailability)
  * environments `array`
    * items [Environment](#environment)
  * includeInSnippetByDefault `boolean`
  * key `string`
  * name `string`
  * tags `array`: An array of tags for this project.
    * items `string`

### Projects
* Projects `object`
  * _links [Links](#links)
  * items `array`
    * items [Project](#project)

### RelayProxyConfig
* RelayProxyConfig `object`
  * _creator **required** [Member](#member)
  * _id **required** [Id](#id)
  * creationDate **required** `integer`: A unix epoch time in milliseconds specifying the creation time of this relay proxy configuration
  * displayKey **required** `string`: The last 4 digits of the unique secret key for this relay proxy configuration
  * fullKey `string`: Full secret key. Only included if creating or resetting the relay proxy configuration
  * lastModified **required** `integer`: A unix epoch time in milliseconds specifying the last time this relay proxy configuration was modified
  * name **required** `string`: A human-friendly name for the relay proxy configuration
  * policy **required** `array`
    * items [Policy](#policy)

### RelayProxyConfigs
* RelayProxyConfigs `object`
  * items `array`
    * items [RelayProxyConfig](#relayproxyconfig)

### Role
* Role `string` (values: writer, reader, admin, owner)

### Rollout
* Rollout `object`
  * bucketBy `string`
  * variations `array`
    * items [WeightedVariation](#weightedvariation)

### Rule
* Rule `object`
  * _id `string`
  * clauses `array`
    * items [Clause](#clause)
  * description `string`
  * rollout [Rollout](#rollout)
  * trackEvents `boolean`
  * variation `integer`

### ScheduledChangesFeatureFlagConflict
* ScheduledChangesFeatureFlagConflict `object`
  * _id `string`: Feature flag scheduled change id this change will conflict with
  * reason `string`: Feature flag scheduled change conflict reason

### SemanticPatchInstruction
* SemanticPatchInstruction `array`
  * items `object`
    * kind `string`: The name of the modification you would like to perform on a resource.

### SemanticPatchOperation
* SemanticPatchOperation `object`
  * comment `string`
  * instructions **required** [SemanticPatchInstruction](#semanticpatchinstruction)

### Site
* Site `object`
  * href `string`
  * type `string`

### Statement
* Statement `object`
  * actions `array`
    * items `string`: An action to perform on a resource.
  * effect `string` (values: allow, deny)
  * notActions `array`: Targeted actions will be those actions NOT in this list. The "actions" field must be empty to use this field.
    * items `string`: An action to perform on a resource.
  * notResources `array`: Targeted resource will be those resources NOT in this list. The "resources`" field must be empty to use this field.
    * items `string`: A resource specifier string
  * resources `array`
    * items `string`: A resource specifier string

### Stream
* Stream `object`
  * _links [StreamUsageLinks](#streamusagelinks)
  * metadata `array`
    * items [StreamUsageMetadata](#streamusagemetadata)
  * series `array`
    * items [StreamUsageSeries](#streamusageseries)

### StreamBySDK
* StreamBySDK `object`
  * _links [StreamBySDKLinks](#streambysdklinks)
  * metadata `array`
    * items [StreamBySDKLinksMetadata](#streambysdklinksmetadata)
  * series `array`
    * items [StreamUsageSeries](#streamusageseries)

### StreamBySDKLinks
* StreamBySDKLinks `object`
  * parent [Link](#link)
  * self [Link](#link)

### StreamBySDKLinksMetadata
* StreamBySDKLinksMetadata `object`
  * sdk `string`
  * source `string`
  * version `string`

### StreamLinks
* StreamLinks `object`
  * parent [Link](#link)
  * self [Link](#link)
  * subseries `array`: Links to endpoints that are in the request path.
    * items [Link](#link)

### StreamSDKVersion
* StreamSDKVersion `object`
  * _links [StreamBySDKLinks](#streambysdklinks)
  * sdkVersions `array`
    * items [StreamSDKVersionData](#streamsdkversiondata)

### StreamSDKVersionData
* StreamSDKVersionData `object`
  * sdk `string`: The language of the sdk
  * version `string`: The version of the sdk

### StreamUsageError
* StreamUsageError `object`
  * code `string`
  * message `string`

### StreamUsageLinks
* StreamUsageLinks `object`
  * parent [Link](#link)
  * self [Link](#link)
  * subseries `array`: The following links that are in the response.
    * items [Link](#link)

### StreamUsageMetadata
* StreamUsageMetadata `object`
  * sdk `string`: The language of the sdk
  * source `string`
  * version `string`: The version of the SDK

### StreamUsageSeries
* StreamUsageSeries `object`
  * 0 `integer`: A key corresponding to a time series data point.
  * time `integer`: A unix epoch time in milliseconds specifying the creation time of this flag.

### Streams
* Streams `object`
  * _links [StreamUsageLinks](#streamusagelinks)

### Target
* Target `object`
  * values `array`
    * items `string`
  * variation `integer`

### Token
* Token `object`
  * _id [Id](#id)
  * _links [Links](#links)
  * _member [Member](#member)
  * creationDate `integer`: A unix epoch time in milliseconds specifying the creation time of this access token.
  * customRoleIds `array`: A list of custom role IDs to use as access limits for the access token
    * items `string`
  * defaultApiVersion `integer`: The default API version for this token
  * inlineRole `array`
    * items [Statement](#statement)
  * lastModified `integer`: A unix epoch time in milliseconds specifying the last time this access token was modified.
  * lastUsed `integer`: A unix epoch time in milliseconds specifying the last time this access token was used to authorize access to the LaunchDarkly REST API.
  * memberId [Id](#id)
  * name `string`: A human-friendly name for the access token
  * ownerId [Id](#id)
  * role `string`: The name of a built-in role for the token
  * serviceToken `boolean`: Whether the token will be a service token https://docs.launchdarkly.com/home/account-security/api-access-tokens#service-tokens
  * token `string`: The last 4 digits of the unique secret key for this access token. If creating or resetting the token, this will be the full token secret.

### Tokens
* Tokens `object`
  * _links [Links](#links)
  * items `array`
    * items [Token](#token)

### UnboundedSegmentTargetChanges
* UnboundedSegmentTargetChanges `object`
  * add `array`: Users to add to this list of targets
    * items `string`
  * remove `array`: Users to remove from this list of targets
    * items `string`

### Usage
* Usage `object`
  * _links [UsageLinks](#usagelinks)
  * series `array`
    * items [StreamUsageSeries](#streamusageseries)

### UsageError
* UsageError `object`
  * message `string`

### UsageLinks
* UsageLinks `object`
  * parent [Link](#link)
  * self [Link](#link)
  * subseries `array`: The following links that are in the response.
    * items [Link](#link)

### User
* User `object`
  * anonymous `boolean`
  * avatar `string`
  * country `string`
  * custom `object`
  * email `string`
  * firstName `string`
  * ip `string`
  * key `string`
  * lastName `string`
  * name `string`
  * secondary `string`

### UserFlagSetting
* UserFlagSetting `object`
  * _links [Links](#links)
  * _value `boolean`: The most important attribute in the response. The _value is the current setting for the user. For a boolean feature toggle, this will be true, false, or null if there is no defined fallthrough value.
  * setting `boolean`: The setting attribute indicates whether you've explicitly targeted this user to receive a particular variation. For example, if you have explicitly turned off a feature toggle for a user, setting will be false. A setting of null means that you haven't assigned that user to a specific variation.

### UserFlagSettings
* UserFlagSettings `object`
  * _links [Links](#links)
  * items `object`

### UserRecord
* UserRecord `object`
  * avatar `string`
  * environmentId `string`
  * lastPing `string`
  * ownerId [Id](#id)
  * user [User](#user)

### UserSegment
* UserSegment `object`
  * _flags `array`
    * items [FlagListItem](#flaglistitem)
  * _links [Links](#links)
  * creationDate **required** `integer`: A unix epoch time in milliseconds specifying the creation time of this flag.
  * description `string`: Description of the user segment.
  * excluded `array`: An array of user keys that should not be included in this segment, unless they are also listed in "included".
    * items `string`
  * included `array`: An array of user keys that are included in this segment.
    * items `string`
  * key **required** `string`: Unique identifier for the user segment.
  * name **required** `string`: Name of the user segment.
  * rules `array`: An array of rules that can cause a user to be included in this segment.
    * items [UserSegmentRule](#usersegmentrule)
  * tags `array`: An array of tags for this user segment.
    * items `string`
  * unbounded `boolean`: Controls whether this segment can support unlimited numbers of users. Requires the beta API and additional setup. Include/exclude lists in this payload are not used in unbounded segments.
  * version `integer`

### UserSegmentRule
* UserSegmentRule `object`
  * bucketBy `string`
  * clauses `array`
    * items [Clause](#clause)
  * weight `integer`

### UserSegments
* UserSegments `object`
  * _links [Links](#links)
  * items `array`
    * items [UserSegment](#usersegment)

### UserTargetingExpirationForFlag
* UserTargetingExpirationForFlag `object`
  * _id `string`
  * _links [Links](#links)
  * _resourceId [UserTargetingExpirationResourceIdForFlag](#usertargetingexpirationresourceidforflag)
  * _version `integer`
  * expirationDate `integer`: Unix epoch time in milliseconds specifying the expiration date
  * userKey `string`: Unique identifier for the user
  * variationId `string`: the ID of the variation that the user is targeted on a flag

### UserTargetingExpirationForFlags
* UserTargetingExpirationForFlags `object`
  * _links [Links](#links)
  * items `array`
    * items [UserTargetingExpirationForFlag](#usertargetingexpirationforflag)

### UserTargetingExpirationForSegment
* UserTargetingExpirationForSegment `object`
  * _id `string`
  * _links [Links](#links)
  * _resourceId [UserTargetingExpirationResourceIdForFlag](#usertargetingexpirationresourceidforflag)
  * _version `integer`
  * expirationDate `integer`: Unix epoch time in milliseconds specifying the expiration date
  * targetType `string`: either the included or excluded variation that the user is targeted on a segment
  * userKey `string`: Unique identifier for the user

### UserTargetingExpirationOnFlagsForUser
* UserTargetingExpirationOnFlagsForUser `object`
  * _links [Links](#links)
  * items `array`
    * items [UserTargetingExpirationForFlag](#usertargetingexpirationforflag)

### UserTargetingExpirationResourceIdForFlag
* UserTargetingExpirationResourceIdForFlag `object`
  * environmentKey `string`
  * flagKey `string`
  * key `string`
  * kind `string`
  * projectKey `string`

### Users
* Users `object`
  * _links [Links](#links)
  * items `array`
    * items [UserRecord](#userrecord)
  * totalCount `number`

### Variation
* Variation `object`
  * _id `string`
  * description `string`
  * name `string`
  * value **required** `object`

### Webhook
* Webhook `object`
  * _id [Id](#id)
  * _links [Links](#links)
  * name `string`: The name of the webhook.
  * on `boolean`: Whether this webhook is enabled or not.
  * secret `string`: If defined, the webhooks post request will include a X-LD-Signature header whose value will contain an HMAC SHA256 hex digest of the webhook payload, using the secret as the key.
  * statements `array`
    * items [Statement](#statement)
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


