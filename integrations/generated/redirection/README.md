# @datafire/redirection

Client library for redirection.io

## Installation and Usage
```bash
npm install --save @datafire/redirection
```
```js
let redirection = require('@datafire/redirection').create({
  apiKey: ""
});

redirection.postForgotPasswordRequestCollection({}).then(data => {
  console.log(data);
});
```

## Description

API documentation for redirection.io

## Actions

### postAgentFlushAggregateRequestCollection
Creates a AgentFlushAggregateRequest resource.


```js
redirection.postAgentFlushAggregateRequestCollection({}, context)
```

#### Input
* input `object`
  * agentFlushAggregateRequest [AgentFlushAggregateRequest](#agentflushaggregaterequest)

#### Output
* output [AgentFlushAggregateRequest](#agentflushaggregaterequest)

### agent_flush_requests.post
Creates a AgentFlushRequest resource.


```js
redirection.agent_flush_requests.post({}, context)
```

#### Input
* input `object`
  * agentFlushRequest [AgentFlushRequest](#agentflushrequest)

#### Output
* output [AgentFlushRequest](#agentflushrequest)

### postInstanceCollection
Creates a Instance resource.


```js
redirection.postInstanceCollection({}, context)
```

#### Input
* input `object`
  * instance [Instance-Write](#instance-write)

#### Output
* output [Instance-Read](#instance-read)

### putInstanceItem
Replaces the Instance resource.


```js
redirection.putInstanceItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * instance [Instance-Write](#instance-write)

#### Output
* output [Instance-Read](#instance-read)

### agent_rule_complexes.get
Retrieves the collection of Rule resources.


```js
redirection.agent_rule_complexes.get({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`

#### Output
* output `array`
  * items [Rule-Read](#rule-read)

### agent_rule_straights.get
Retrieves the collection of Rule resources.


```js
redirection.agent_rule_straights.get({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`

#### Output
* output `array`
  * items [Rule-Read](#rule-read)

### agentRuleCollection
Retrieves the collection of Rule resources.


```js
redirection.agentRuleCollection({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`

#### Output
* output `array`
  * items [Rule-Read](#rule-read)

### getAggregateLogCollection
Retrieves the collection of AggregateLog resources.


```js
redirection.getAggregateLogCollection({}, context)
```

#### Input
* input `object`
  * page `integer`: The collection page number
  * projectId `string`
  * createdAt `string`
  * createdAt_gt `string`
  * createdAt_gte `string`
  * createdAt_lt `string`
  * createdAt_lte `string`
  * source `string`
  * target `string`
  * statusCode `string`
  * referer `string`
  * simplifiedUserAgent `string`
  * userAgent `string`
  * ruleId `string`
  * instanceName `string`
  * excludeUrls `string`

#### Output
* output `array`
  * items [AggregateLog-Read](#aggregatelog-read)

### getAggregateLogItem
Retrieves a AggregateLog resource.


```js
redirection.getAggregateLogItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [AggregateLog-Read](#aggregatelog-read)

### postExplainUrlCollection
Creates a ExplainUrl resource.


```js
redirection.postExplainUrlCollection({}, context)
```

#### Input
* input `object`
  * explainUrl [ExplainUrl-Write](#explainurl-write)

#### Output
* output [ExplainUrl](#explainurl)

### getExplainUrlItem
Retrieves a ExplainUrl resource.


```js
redirection.getExplainUrlItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [ExplainUrl](#explainurl)

### exportRuleCollection
Retrieves the collection of Rule resources.


```js
redirection.exportRuleCollection({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * redirectCode `integer`
  * redirectCode[] `integer`
  * source.input `string`
  * isEnabled `boolean`
  * isEnabled[] `boolean`
  * target `string`
  * sort[id] `string`
  * sort[target] `string`
  * sort[viewCount] `string`
  * sort[source.input] `string`
  * sort[redirectCode] `string`
  * sort[isEnabled] `string`

#### Output
* output `array`
  * items [Rule-Read](#rule-read)

### getExportCollection
Retrieves the collection of Export resources.


```js
redirection.getExportCollection({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`

#### Output
* output `array`
  * items [Export-Read](#export-read)

### postExportCollection
Creates a Export resource.


```js
redirection.postExportCollection({}, context)
```

#### Input
* input `object`
  * export [Export-Write](#export-write)

#### Output
* output [Export-Read](#export-read)

### getExportItem
Retrieves a Export resource.


```js
redirection.getExportItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Export-Read](#export-read)

### postImpactRuleActionCollection
Creates a ImpactRuleAction resource.


```js
redirection.postImpactRuleActionCollection({}, context)
```

#### Input
* input `object`
  * impactRuleAction [ImpactRuleAction-Write](#impactruleaction-write)

#### Output
* output [ImpactRuleAction-Read](#impactruleaction-read)

### getImpactRuleActionItem
Retrieves a ImpactRuleAction resource.


```js
redirection.getImpactRuleActionItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [ImpactRuleAction](#impactruleaction)

### getImportCollection
Retrieves the collection of Import resources.


```js
redirection.getImportCollection({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`

#### Output
* output `array`
  * items [Import-Read](#import-read)

### postImportCollection
Creates a Import resource.


```js
redirection.postImportCollection({}, context)
```

#### Input
* input `object`
  * import [Import-Write](#import-write)

#### Output
* output [Import-Read](#import-read)

### getImportItem
Retrieves a Import resource.


```js
redirection.getImportItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Import-Read](#import-read)

### getInstanceCollection
Retrieves the collection of Instance resources.


```js
redirection.getInstanceCollection(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Instance-Read](#instance-read)

### getInstanceItem
Retrieves a Instance resource.


```js
redirection.getInstanceItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Instance-Read](#instance-read)

### getInvitationCollection
Retrieves the collection of Invitation resources.


```js
redirection.getInvitationCollection({
  "targetId": "",
  "targetType": ""
}, context)
```

#### Input
* input `object`
  * targetId **required** `string`
  * targetType **required** `string`

#### Output
* output `array`
  * items [Invitation-Read](#invitation-read)

### postInvitationCollection
Creates a Invitation resource.


```js
redirection.postInvitationCollection({}, context)
```

#### Input
* input `object`
  * invitation [Invitation-Write](#invitation-write)

#### Output
* output [Invitation-Read](#invitation-read)

### acceptInvitationItem
Creates a Invitation resource.


```js
redirection.acceptInvitationItem({
  "token": "",
  "invitation": {}
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The invitation acceptation token
  * invitation **required** [Invitation](#invitation)

#### Output
* output [Invitation](#invitation)

### deleteInvitationItem
Removes the Invitation resource.


```js
redirection.deleteInvitationItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getInvitationItem
Retrieves a Invitation resource.


```js
redirection.getInvitationItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Invitation-Read](#invitation-read)

### getLogCollection
Retrieves the collection of Log resources.


```js
redirection.getLogCollection({}, context)
```

#### Input
* input `object`
  * page `integer`: The collection page number
  * projectId `string`
  * createdAt `string`
  * createdAt_gt `string`
  * createdAt_gte `string`
  * createdAt_lt `string`
  * createdAt_lte `string`
  * source `string`
  * target `string`
  * statusCode `string`
  * referer `string`
  * simplifiedUserAgent `string`
  * userAgent `string`
  * ruleId `string`
  * instanceName `string`
  * excludeUrls `string`

#### Output
* output `array`
  * items [Log-Read](#log-read)

### getLogItem
Retrieves a Log resource.


```js
redirection.getLogItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Log-Read](#log-read)

### postMarkerCollection
Creates a Marker resource.


```js
redirection.postMarkerCollection({}, context)
```

#### Input
* input `object`
  * marker [Marker-Write](#marker-write)

#### Output
* output [Marker](#marker)

### deleteMarkerItem
Removes the Marker resource.


```js
redirection.deleteMarkerItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getMarkerItem
Retrieves a Marker resource.


```js
redirection.getMarkerItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Marker](#marker)

### putMarkerItem
Replaces the Marker resource.


```js
redirection.putMarkerItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * marker [Marker](#marker)

#### Output
* output [Marker](#marker)

### getOrganizationCollection
Retrieves the collection of Organization resources.


```js
redirection.getOrganizationCollection(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Organization-List](#organization-list)

### postOrganizationCollection
Creates a Organization resource.


```js
redirection.postOrganizationCollection({}, context)
```

#### Input
* input `object`
  * organization [Organization-Write](#organization-write)

#### Output
* output [Organization-Read](#organization-read)

### deleteOrganizationItem
Removes the Organization resource.


```js
redirection.deleteOrganizationItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getOrganizationItem
Retrieves a Organization resource.


```js
redirection.getOrganizationItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Organization-Read](#organization-read)

### putOrganizationItem
Replaces the Organization resource.


```js
redirection.putOrganizationItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * organization [Organization-Write](#organization-write)

#### Output
* output [Organization-Read](#organization-read)

### post_logs.post
Creates a AgentFlushRequest resource.


```js
redirection.post_logs.post({}, context)
```

#### Input
* input `object`
  * agentFlushRequest [AgentFlushRequest](#agentflushrequest)

#### Output
* output [AgentFlushRequest](#agentflushrequest)

### postProjectCollection
Creates a Project resource.


```js
redirection.postProjectCollection({}, context)
```

#### Input
* input `object`
  * project [Project-CreationWrite](#project-creationwrite)

#### Output
* output [Project-Read](#project-read)

### deleteProjectItem
Removes the Project resource.


```js
redirection.deleteProjectItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getProjectItem
Retrieves a Project resource.


```js
redirection.getProjectItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Project-Read](#project-read)

### putProjectItem
Replaces the Project resource.


```js
redirection.putProjectItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * project [Project-Write](#project-write)

#### Output
* output [Project-Read](#project-read)

### getPublishHistoryCollection
Retrieves the collection of PublishHistory resources.


```js
redirection.getPublishHistoryCollection({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * page `integer`: The collection page number

#### Output
* output `array`
  * items [PublishHistory-Read](#publishhistory-read)

### getPublishHistoryItem
Retrieves a PublishHistory resource.


```js
redirection.getPublishHistoryItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [PublishHistory](#publishhistory)

### getRuleActionCollection
Retrieves the collection of RuleAction resources.


```js
redirection.getRuleActionCollection({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`
  * page `integer`: The collection page number

#### Output
* output `array`
  * items [RuleAction-Read](#ruleaction-read)

### postRuleActionCollection
Creates a RuleAction resource.


```js
redirection.postRuleActionCollection({}, context)
```

#### Input
* input `object`
  * ruleAction [RuleAction-Write](#ruleaction-write)

#### Output
* output [RuleAction-Read](#ruleaction-read)

### deleteRuleActionItem
Removes the RuleAction resource.


```js
redirection.deleteRuleActionItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getRuleActionItem
Retrieves a RuleAction resource.


```js
redirection.getRuleActionItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [RuleAction-Read](#ruleaction-read)

### getRuleSetVersionCollection
Retrieves the collection of RuleSetVersion resources.


```js
redirection.getRuleSetVersionCollection({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * sort[createdAt] `string`
  * page `integer`: The collection page number

#### Output
* output `array`
  * items [RuleSetVersion-Read](#rulesetversion-read)

### getRuleSetVersionItem
Retrieves a RuleSetVersion resource.


```js
redirection.getRuleSetVersionItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [RuleSetVersion-Read](#rulesetversion-read)

### clearRuleSetVersionItem
Clear a version


```js
redirection.clearRuleSetVersionItem({
  "id": "",
  "ruleSetVersion": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the version
  * ruleSetVersion **required** [RuleSetVersion](#rulesetversion)

#### Output
* output [RuleSetVersion](#rulesetversion)

### publishRuleSetVersionItem
Publish a version


```js
redirection.publishRuleSetVersionItem({
  "id": "",
  "ruleSetVersion": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the version
  * ruleSetVersion **required** [RuleSetVersion](#rulesetversion)

#### Output
* output [RuleSetVersion](#rulesetversion)

### getRuleCollection
Retrieves the collection of Rule resources.


```js
redirection.getRuleCollection({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * redirectCode `integer`
  * redirectCode[] `integer`
  * source.input `string`
  * isEnabled `boolean`
  * isEnabled[] `boolean`
  * target `string`
  * sort[id] `string`
  * sort[target] `string`
  * sort[viewCount] `string`
  * sort[source.input] `string`
  * sort[redirectCode] `string`
  * sort[isEnabled] `string`
  * page `integer`: The collection page number

#### Output
* output `array`
  * items [Rule-Read](#rule-read)

### getRuleItem
Retrieves a Rule resource.


```js
redirection.getRuleItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Rule-Read](#rule-read)

### postUserOrganizationCollection
Creates a UserOrganization resource.


```js
redirection.postUserOrganizationCollection({}, context)
```

#### Input
* input `object`
  * userOrganization [UserOrganization-CreationWrite](#userorganization-creationwrite)

#### Output
* output [UserOrganization-Read](#userorganization-read)

### deleteUserOrganizationItem
Removes the UserOrganization resource.


```js
redirection.deleteUserOrganizationItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getUserOrganizationItem
Retrieves a UserOrganization resource.


```js
redirection.getUserOrganizationItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [UserOrganization-Read](#userorganization-read)

### putUserOrganizationItem
Replaces the UserOrganization resource.


```js
redirection.putUserOrganizationItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * userOrganization [UserOrganization-Write](#userorganization-write)

#### Output
* output [UserOrganization-Read](#userorganization-read)

### getUserProjectFlattenedItem
Retrieves a UserProjectFlattened resource.


```js
redirection.getUserProjectFlattenedItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [UserProjectFlattened-Read](#userprojectflattened-read)

### postUserProjectCollection
Creates a UserProject resource.


```js
redirection.postUserProjectCollection({}, context)
```

#### Input
* input `object`
  * userProject [UserProject-CreationWrite](#userproject-creationwrite)

#### Output
* output [UserProject-Read](#userproject-read)

### deleteUserProjectItem
Removes the UserProject resource.


```js
redirection.deleteUserProjectItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getUserProjectItem
Retrieves a UserProject resource.


```js
redirection.getUserProjectItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [UserProject-Read](#userproject-read)

### putUserProjectItem
Replaces the UserProject resource.


```js
redirection.putUserProjectItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * userProject [UserProject-Write](#userproject-write)

#### Output
* output [UserProject-Read](#userproject-read)

### getUserCollection
Retrieves the collection of User resources.


```js
redirection.getUserCollection({
  "organizationId": ""
}, context)
```

#### Input
* input `object`
  * organizationId **required** `string`
  * search `string`

#### Output
* output `array`
  * items [User-List](#user-list)

### postUserCollection
Creates a User resource.


```js
redirection.postUserCollection({}, context)
```

#### Input
* input `object`
  * user [User-CreationWrite](#user-creationwrite)

#### Output
* output [User-Read](#user-read)

### postForgotPasswordRequestCollection
Creates a ForgotPasswordRequest resource.


```js
redirection.postForgotPasswordRequestCollection({}, context)
```

#### Input
* input `object`
  * forgotPasswordRequest [ForgotPasswordRequest](#forgotpasswordrequest)

#### Output
* output [ForgotPasswordRequest](#forgotpasswordrequest)

### forgot_passwordUserItem
Replaces the User resource.


```js
redirection.forgot_passwordUserItem({
  "resetToken": ""
}, context)
```

#### Input
* input `object`
  * resetToken **required** `string`
  * user [User-Password](#user-password)

#### Output
* output [User-Read](#user-read)

### getUserItem
Retrieves a User resource.


```js
redirection.getUserItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [User-Read](#user-read)

### confirm_new_emailUserItem
Retrieves a User resource.


```js
redirection.confirm_new_emailUserItem({
  "id": "",
  "newEmailToken": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * newEmailToken **required** `string`

#### Output
* output [User-Read](#user-read)

### edit_emailUserItem
Replaces the User resource.


```js
redirection.edit_emailUserItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * user [User-EditInfo](#user-editinfo)

#### Output
* output [User-Read](#user-read)

### edit_infoUserItem
Replaces the User resource.


```js
redirection.edit_infoUserItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * user [User-EditInfo](#user-editinfo)

#### Output
* output [User-Read](#user-read)

### edit_passwordUserItem
Replaces the User resource.


```js
redirection.edit_passwordUserItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * user [User-EditInfo](#user-editinfo)

#### Output
* output [User-Read](#user-read)



## Definitions

### AgentFlushAggregateRequest
* AgentFlushAggregateRequest `object`

### AgentFlushRequest
* AgentFlushRequest `object`
  * instanceTime **required** `integer`
  * logs **required** `array`
    * items `string`

### AggregateLog-Read
* AggregateLog-Read `object`
  * lastOccurrenceAt `string`
  * ruleId `string`
  * statusCode `integer`

### ExplainUrl
* ExplainUrl `object`
  * project **required** `string`
  * url **required** `string`

### ExplainUrl-Write
* ExplainUrl-Write `object`
  * project **required** `string`
  * url **required** `string`

### Export-Read
* Export-Read `object`
  * author **required** `string`
  * completedAt `string`
  * exportDuration `integer`
  * filters `array`
    * items `string`
  * id `string`
  * itemsCount `integer`
  * location `string`
  * message `string`
  * project **required** `string`
  * sort `array`
    * items `string`
  * startedAt `string`
  * status `integer`
  * statusAsText `string`
  * typeAsText **required** `string`
  * updatedAt `string`

### Export-Write
* Export-Write `object`
  * filters `array`
    * items `string`
  * project **required** `string`
  * sort `array`
    * items `string`
  * typeAsText **required** `string`

### ForgotPasswordRequest
* ForgotPasswordRequest `object`
  * email **required** `string`

### ImpactRuleAction
* ImpactRuleAction `object`
  * project **required** `string`
  * ruleAction **required** `string`

### ImpactRuleAction-Read
* ImpactRuleAction-Read `object`

### ImpactRuleAction-Write
* ImpactRuleAction-Write `object`
  * project **required** `string`
  * ruleAction **required** `string`

### Import-Read
* Import-Read `object`
  * author **required** `string`
  * completedAt `string`
  * errorCount `integer`
  * id `string`
  * importDuration `integer`
  * message `string`
  * project **required** `string`
  * shouldEnable `boolean`
  * startedAt `string`
  * successCount `integer`
  * typeAsText **required** `string`
  * updatedAt `string`

### Import-Write
* Import-Write `object`
  * project **required** `string`
  * shouldEnable `boolean`
  * typeAsText **required** `string`

### Instance-Read
* Instance-Read `object`
  * agentDuration `integer`
  * agentVersion `string`
  * agentVersionStatus `string`
  * aggregatedLogsLastFlushedAt `string`
  * createdAt `string`
  * gone `boolean`
  * id `string`
  * lastCompletedAt `string`
  * lastStartedAt `string`
  * logging `boolean`
  * logsLastFlushedAt `string`
  * message `string`
  * misconfigured `boolean`
  * name **required** `string`
  * rulesCount `integer`
  * stale `boolean`
  * status `integer`
  * updatedAt `string`

### Instance-Write
* Instance-Write `object`
  * agentVersion `string`
  * misconfigured `boolean`
  * name **required** `string`

### Invitation
* Invitation `object`
  * accepted `boolean`
  * createdAt `string`
  * email `string`
  * id `string`
  * sender `string`
  * target `string`
  * targetId `string`
  * targetType `string`
  * token `string`

### Invitation-Read
* Invitation-Read `object`

### Invitation-Write
* Invitation-Write `object`
  * email **required** `string`
  * target **required** `string`

### Log-Read
* Log-Read `object`
  * createdAt `string`
  * ruleId `string`

### Marker
* Marker `object`
  * maximumOccurrence `integer`
  * minimumOccurrence `integer`
  * name **required** `string`
  * options `array`
    * items `string`
  * regex `string`
  * transformers `array`
    * items `string`
  * type **required** `string`

### Marker-Write
* Marker-Write `object`
  * maximumOccurrence `integer`
  * minimumOccurrence `integer`
  * name **required** `string`
  * options `array`
    * items `string`
  * transformers `array`
    * items `string`
  * type **required** `string`

### Organization-List
* Organization-List `object`
  * createdAt `string`
  * id `string`
  * name **required** `string`
  * projects `array`
    * items `string`
  * slug `string`
  * updatedAt `string`

### Organization-Read
* Organization-Read `object`
  * createdAt `string`
  * id `string`
  * name **required** `string`
  * projects `array`
    * items `string`
  * slug `string`
  * updatedAt `string`
  * userOrganizations `array`
    * items `string`

### Organization-Write
* Organization-Write `object`
  * name **required** `string`

### Project-CreationWrite
* Project-CreationWrite `object`
  * name **required** `string`
  * onboardingCompletedDemos `array`
    * items `string`
  * organization **required** `string`

### Project-Read
* Project-Read `object`
  * complexRulesCount `integer`
  * complexRulesUpdatedAt `string`
  * createdAt `string`
  * currentVersion `string`
  * id `string`
  * name **required** `string`
  * onboardingCompletedDemos `array`
    * items `string`
  * organization **required** `string`
  * plan **required** `integer`
  * slug `string`
  * straightRulesCount `integer`
  * straightRulesUpdatedAt `string`
  * token `string`
  * updatedAt `string`
  * userProjects `array`
    * items `string`
  * usersFlattened `array`
    * items `string`
  * workingVersion `string`

### Project-Write
* Project-Write `object`
  * name **required** `string`
  * onboardingCompletedDemos `array`
    * items `string`

### PublishHistory
* PublishHistory `object`
  * added `integer`
  * author `string`
  * createdAt `string`
  * deleted `integer`
  * id `string`
  * project `string`
  * summary `string`
  * type `string`
  * updated `integer`
  * version `string`

### PublishHistory-Read
* PublishHistory-Read `object`
  * added `integer`
  * author `string`
  * createdAt `string`
  * deleted `integer`
  * id `string`
  * summary `string`
  * type `string`
  * updated `integer`
  * version `string`

### Rule-Read
* Rule-Read `object`
  * actions `array`
    * items `string`
  * currentAction `string`
  * id `string`
  * isEnabled `boolean`
  * markers `array`
    * items `string`
  * rank `integer`
  * redirectCode `integer`
  * source `string`
  * target `string`
  * updatedAt `string`
  * viewCount `integer`

### RuleAction-Read
* RuleAction-Read `object`
  * action **required** `string`
  * author `string`
  * createdAt `string`
  * id `string`
  * isEnabled **required** `boolean`
  * markers `array`
    * items `string`
  * rank **required** `integer`
  * ruleId `string`
  * source **required** `string`
  * statusCode **required** `integer`
  * target `string`

### RuleAction-Write
* RuleAction-Write `object`
  * action **required** `string`
  * isEnabled **required** `boolean`
  * markers `array`
    * items `string`
  * rank **required** `integer`
  * ruleId `string`
  * source **required** `string`
  * statusCode **required** `integer`
  * target `string`

### RuleSetVersion
* RuleSetVersion `object`
  * actions `array`
    * items `string`
  * added `integer`
  * createdAt `string`
  * current `boolean`
  * deleted `integer`
  * histories `array`
    * items `string`
  * id `string`
  * isSnapshot `boolean`
  * lastAction `string`
  * name `string`
  * nexts `array`
    * items `string`
  * previous `string`
  * project `string`
  * publishedAt `string`
  * snapshot `boolean`
  * updated `integer`
  * working `boolean`

### RuleSetVersion-Read
* RuleSetVersion-Read `object`
  * createdAt `string`
  * current `boolean`
  * id `string`
  * isSnapshot `boolean`
  * name `string`
  * publishedAt `string`
  * working `boolean`

### User-CreationWrite
* User-CreationWrite `object`
  * email **required** `string`
  * name **required** `string`

### User-EditInfo
* User-EditInfo `object`
  * name **required** `string`

### User-List
* User-List `object`
  * email **required** `string`
  * id `string`
  * name **required** `string`

### User-Password
* User-Password `object`
  * plainPassword `string`

### User-Read
* User-Read `object`
  * defaultOrganization `string`
  * email **required** `string`
  * id `string`
  * name **required** `string`
  * userOrganizations `array`
    * items `string`

### UserOrganization-CreationWrite
* UserOrganization-CreationWrite `object`
  * functionalRoles **required** `array`
    * items `string`
  * organization **required** `string`
  * user **required** `string`

### UserOrganization-Read
* UserOrganization-Read `object`
  * functionalRoles **required** `array`
    * items `string`
  * id `string`
  * organization **required** `string`
  * user **required** `string`

### UserOrganization-Write
* UserOrganization-Write `object`
  * functionalRoles **required** `array`
    * items `string`

### UserProject-CreationWrite
* UserProject-CreationWrite `object`
  * functionalRoles **required** `array`
    * items `string`
  * project **required** `string`
  * user **required** `string`

### UserProject-Read
* UserProject-Read `object`
  * functionalRoles **required** `array`
    * items `string`
  * id `string`
  * project **required** `string`
  * user **required** `string`

### UserProject-Write
* UserProject-Write `object`
  * functionalRoles **required** `array`
    * items `string`

### UserProjectFlattened-Read
* UserProjectFlattened-Read `object`


