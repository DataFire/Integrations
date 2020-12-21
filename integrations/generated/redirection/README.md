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

.then(data => {
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
  * source `string`
  * target `string`
  * statusCode `string`
  * referrer `string`
  * userAgent `string`
  * userAgentType `string`
  * simplifiedUserAgent `string`
  * ruleId `string`
  * instanceName `string`
  * excludeUrls `string`
  * excludeEmptyReferrer `string`
  * createdAt_gt `string`
  * createdAt_gte `string`
  * createdAt_lt `string`
  * createdAt_lte `string`
  * statusCode_gt `string`
  * statusCode_gte `string`
  * statusCode_lt `string`
  * statusCode_lte `string`

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

### getCrawlUrlCollection
Retrieves the collection of CrawlUrl resources.


```js
redirection.getCrawlUrlCollection({}, context)
```

#### Input
* input `object`
  * page `integer`: The collection page number

#### Output
* output `array`
  * items [CrawlUrl-Read](#crawlurl-read)

### getCrawlUrlItem
Retrieves a CrawlUrl resource.


```js
redirection.getCrawlUrlItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [CrawlUrl-Read](#crawlurl-read)

### getCrawlCollection
Retrieves the collection of Crawl resources.


```js
redirection.getCrawlCollection({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`
  * firstUrl `string`
  * sort[createdAt] `string`
  * page `integer`: The collection page number

#### Output
* output `array`
  * items [Crawl-Read](#crawl-read)

### postCrawlCollection
Creates a Crawl resource.


```js
redirection.postCrawlCollection({}, context)
```

#### Input
* input `object`
  * crawl [Crawl-Write](#crawl-write)

#### Output
* output [Crawl](#crawl)

### getCrawlItem
Retrieves a Crawl resource.


```js
redirection.getCrawlItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Crawl-ReadDetails](#crawl-readdetails)

### cancelCrawlItem
Creates a Crawl resource.


```js
redirection.cancelCrawlItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * crawl [Crawl](#crawl)

#### Output
* output [Crawl-ReadDetails](#crawl-readdetails)

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
  * sort[id] `string`
  * sort[viewCount] `string`

#### Output
* output `array`
  * items [Rule-Read](#rule-read)

### postImpactRuleChangeCollection
Creates a ImpactRuleChange resource.


```js
redirection.postImpactRuleChangeCollection({}, context)
```

#### Input
* input `object`
  * impactRuleChange [ImpactRuleChange-Write](#impactrulechange-write)

#### Output
* output [ImpactRuleChange-Read](#impactrulechange-read)

### getImpactRuleChangeItem
Retrieves a ImpactRuleChange resource.


```js
redirection.getImpactRuleChangeItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [ImpactRuleChange-Read](#impactrulechange-read)

### postImpactSmartListCollection
Creates a ImpactSmartList resource.


```js
redirection.postImpactSmartListCollection({}, context)
```

#### Input
* input `object`
  * impactSmartList [ImpactSmartList-Write](#impactsmartlist-write)

#### Output
* output [ImpactSmartList-Read](#impactsmartlist-read)

### getImpactSmartListItem
Retrieves a ImpactSmartList resource.


```js
redirection.getImpactSmartListItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [ImpactSmartList-Read](#impactsmartlist-read)

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
  * page `integer`: The collection page number

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
redirection.getInstanceCollection({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`

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

### loggingInstanceItem
Replaces the Instance resource.


```js
redirection.loggingInstanceItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * instance [Instance-Write](#instance-write)

#### Output
* output [Instance-Read](#instance-read)

### liveInstanceItem
Replaces the Instance resource.


```js
redirection.liveInstanceItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * instance [Instance-Write](#instance-write)

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
* output [Invitation-Read](#invitation-read)

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
  * source `string`
  * target `string`
  * statusCode `string`
  * referrer `string`
  * userAgent `string`
  * userAgentType `string`
  * simplifiedUserAgent `string`
  * ruleId `string`
  * instanceName `string`
  * excludeUrls `string`
  * excludeEmptyReferrer `string`
  * createdAt_gt `string`
  * createdAt_gte `string`
  * createdAt_lt `string`
  * createdAt_lte `string`
  * statusCode_gt `string`
  * statusCode_gte `string`
  * statusCode_lt `string`
  * statusCode_lte `string`

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

### postMatchingUrlCollection
Creates a MatchingUrl resource.


```js
redirection.postMatchingUrlCollection({}, context)
```

#### Input
* input `object`
  * matchingUrl [MatchingUrl-Write](#matchingurl-write)

#### Output
* output [MatchingUrl-Read](#matchingurl-read)

### getMatchingUrlItem
Retrieves a MatchingUrl resource.


```js
redirection.getMatchingUrlItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [MatchingUrl-Read](#matchingurl-read)

### getNotificationCollection
Retrieves the collection of Notification resources.


```js
redirection.getNotificationCollection({}, context)
```

#### Input
* input `object`
  * page `integer`: The collection page number

#### Output
* output `array`
  * items [Notification-Read](#notification-read)

### getNotificationItem
Retrieves a Notification resource.


```js
redirection.getNotificationItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [Notification-Read](#notification-read)

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

### getProjectCollection
Retrieves the collection of Project resources.


```js
redirection.getProjectCollection(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Project-List](#project-list)

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
  * createdAt[before] `string`
  * createdAt[strictly_before] `string`
  * createdAt[after] `string`
  * createdAt[strictly_after] `string`
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
* output [PublishHistory-Read](#publishhistory-read)

### getRuleChangeCollection
Retrieves the collection of RuleChange resources.


```js
redirection.getRuleChangeCollection({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`
  * page `integer`: The collection page number

#### Output
* output `array`
  * items [RuleChange-Read](#rulechange-read)

### postRuleChangeCollection
Creates a RuleChange resource.


```js
redirection.postRuleChangeCollection({}, context)
```

#### Input
* input `object`
  * ruleChange [RuleChange-Write](#rulechange-write)

#### Output
* output [RuleChange-Read](#rulechange-read)

### deleteRuleChangeItem
Removes the RuleChange resource.


```js
redirection.deleteRuleChangeItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

### getRuleChangeItem
Retrieves a RuleChange resource.


```js
redirection.getRuleChangeItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [RuleChange-Read](#rulechange-read)

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
* output [RuleSetVersion-Read](#rulesetversion-read)

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
* output [RuleSetVersion-Read](#rulesetversion-read)

### getRuleStatisticCollection
Retrieves the collection of RuleStatistic resources.


```js
redirection.getRuleStatisticCollection({
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`

#### Output
* output `array`
  * items [RuleStatistic](#rulestatistic)

### getRuleStatisticItem
Retrieves a RuleStatistic resource.


```js
redirection.getRuleStatisticItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [RuleStatistic](#rulestatistic)

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
  * sort[id] `string`
  * sort[viewCount] `string`
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

### getSmartListCollection
Retrieves the collection of SmartList resources.


```js
redirection.getSmartListCollection(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [SmartList](#smartlist)

### getSmartListItem
Retrieves a SmartList resource.


```js
redirection.getSmartListItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [SmartList](#smartlist)

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

### deleteUserItem
Removes the User resource.


```js
redirection.deleteUserItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
*Output schema unknown*

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
  * fixed `boolean`
  * lastOccurrenceAt `string`
  * ruleId `string`
  * statusCode `integer`
  * viewCount `integer`

### Crawl
* Crawl `object`
  * archived `boolean`
  * author [User](#user)
  * createdAt `string`
  * currentConcurrency `integer`
  * error `string`
  * finishedAt `string`
  * firstUrl `string`
  * id `string`
  * marking `array`
    * items `string`
  * stats `array`
    * items `string`
  * trigger `string`
  * updatedAt `string`

### Crawl-Read
* Crawl-Read `object`
  * archived `boolean`
  * author [User-Read](#user-read)
  * createdAt `string`
  * error `string`
  * finishedAt `string`
  * firstUrl `string`
  * id `string`
  * stats `array`
    * items `string`
  * trigger `string`
  * updatedAt `string`

### Crawl-ReadDetails
* Crawl-ReadDetails `object`
  * archived `boolean`
  * author [User-ReadDetails](#user-readdetails)
  * createdAt `string`
  * error `string`
  * finishedAt `string`
  * firstUrl `string`
  * id `string`
  * stats `array`
    * items `string`
  * trigger `string`
  * updatedAt `string`

### Crawl-Write
* Crawl-Write `object`
  * concurrency **required** `integer`
  * headers `array`
    * items `string`
  * maxDepth **required** `integer`
  * maxDuration **required** `integer`
  * maxUrls **required** `integer`
  * otherDomains `array`
    * items `string`
  * project **required** `string`
  * sslCheckingDisabled **required** `boolean`
  * subdomainIncluded **required** `boolean`

### CrawlUrl-Read
* CrawlUrl-Read `object`
  * urlsTo `string`

### ExplainUrl
* ExplainUrl `object`
  * id `string`
  * project **required** `string`
  * url **required** `string`

### ExplainUrl-Write
* ExplainUrl-Write `object`
  * project **required** `string`
  * url **required** `string`

### ForgotPasswordRequest
* ForgotPasswordRequest `object`
  * email **required** `string`

### ImpactRuleChange-Read
* ImpactRuleChange-Read `object`

### ImpactRuleChange-Write
* ImpactRuleChange-Write `object`
  * project **required** `string`
  * ruleChange **required** `string`

### ImpactSmartList-Read
* ImpactSmartList-Read `object`

### ImpactSmartList-Write
* ImpactSmartList-Write `object`
  * project **required** `string`
  * smartListId **required** `string`
  * smartListVersion `string`

### Import-Read
* Import-Read `object`
  * author `string`
  * completedAt `string`
  * errorCount `integer`
  * id `string`
  * importDuration `integer`
  * message `string`
  * project **required** `string`
  * startedAt `string`
  * successCount `integer`
  * updatedAt `string`

### Import-Write
* Import-Write `object`
  * project **required** `string`

### Instance-Read
* Instance-Read `object`
  * agentDuration `integer`
  * agentVersion `string`
  * agentVersionStatus `string`
  * config `string`
  * createdAt `string`
  * gone `boolean`
  * id `string`
  * lastCompletedAt `string`
  * lastStartedAt `string`
  * live `boolean`
  * logging `boolean`
  * logsLastFlushedAt `string`
  * message `string`
  * misconfigured `boolean`
  * name **required** `string`
  * rulesCount `integer`
  * rulesHash `string`
  * stale `boolean`
  * status `integer`
  * updatedAt `string`

### Instance-Write
* Instance-Write `object`
  * agentDuration `integer`
  * message `string`
  * rulesCount `integer`
  * rulesHash `string`

### Invitation
* Invitation `object`
  * createdAt `string`
  * email `string`
  * id `string`

### Invitation-Read
* Invitation-Read `object`
  * createdAt `string`
  * email `string`
  * id `string`

### Invitation-Write
* Invitation-Write `object`
  * email **required** `string`
  * target **required** `string`

### Log-Read
* Log-Read `object`
  * createdAt `string`
  * fixed `boolean`
  * fixedByVersions `array`
    * items `string`
  * fromSmartList `boolean`
  * notFixedByVersions `array`
    * items `string`
  * proxy `string`
  * ruleId `string`
  * smartList `string`

### Marker
* Marker `object`
  * id `string`
  * maximumOccurrence `integer`
  * minimumOccurrence `integer`
  * name **required** `string`
  * options `array`
    * items `string`
  * regex `string`
  * transformers `array`
    * items `string`
  * type **required** `string`

### Marker-Read
* Marker-Read `object`
  * maximumOccurrence `integer`
  * minimumOccurrence `integer`
  * name **required** `string`
  * options `array`
    * items `string`
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

### MatchingUrl-Read
* MatchingUrl-Read `object`

### MatchingUrl-Write
* MatchingUrl-Write `object`
  * project `string`
  * ruleChange `string`

### Notification-Read
* Notification-Read `object`
  * createdAt `string`
  * id `string`
  * message `string`
  * updatedAt `string`

### Organization
* Organization `object`
  * createdAt `string`
  * id `string`
  * name **required** `string`
  * projects `array`
    * items [Project](#project)
  * slug `string`
  * updatedAt `string`
  * userOrganizations `array`
    * items [UserOrganization](#userorganization)

### Organization-CreationWrite
* Organization-CreationWrite `object`

### Organization-List
* Organization-List `object`
  * name **required** `string`
  * slug `string`

### Organization-Read
* Organization-Read `object`
  * id `string`
  * name **required** `string`
  * slug `string`

### Organization-Write
* Organization-Write `object`
  * name **required** `string`

### Project
* Project `object`
  * complexRulesCount `integer`
  * complexRulesUpdatedAt `string`
  * configuration `array`
    * items `string`
  * createdAt `string`
  * currentVersion [RuleSetVersion](#rulesetversion)
  * id `string`
  * ignoreProjectTypes `array`
    * items `string`
  * isPublishing `boolean`
  * name **required** `string`
  * onboardingCompletedDemos `array`
    * items `string`
  * organization [Organization](#organization)
  * plan `integer`
  * rulesHash `string`
  * slug `string`
  * straightRulesCount `integer`
  * straightRulesUpdatedAt `string`
  * token `string`
  * updatedAt `string`
  * userProjects `array`
    * items [UserProject](#userproject)
  * usersFlattened `array`
    * items [UserProjectFlattened](#userprojectflattened)
  * workingVersion [RuleSetVersion](#rulesetversion)

### Project-CreationWrite
* Project-CreationWrite `object`
  * ignoreProjectTypes `array`
    * items `string`
  * name **required** `string`
  * onboardingCompletedDemos `array`
    * items `string`
  * organization [Organization-CreationWrite](#organization-creationwrite)

### Project-List
* Project-List `object`
  * id `string`
  * name **required** `string`
  * organization [Organization-List](#organization-list)
  * slug `string`
  * token `string`

### Project-Read
* Project-Read `object`
  * complexRulesCount `integer`
  * complexRulesUpdatedAt `string`
  * configuration `array`
    * items `string`
  * createdAt `string`
  * currentVersion [RuleSetVersion-Read](#rulesetversion-read)
  * id `string`
  * ignoreProjectTypes `array`
    * items `string`
  * isPublishing `boolean`
  * name **required** `string`
  * onboardingCompletedDemos `array`
    * items `string`
  * organization [Organization-Read](#organization-read)
  * plan `integer`
  * rulesHash `string`
  * slug `string`
  * straightRulesCount `integer`
  * straightRulesUpdatedAt `string`
  * token `string`
  * updatedAt `string`
  * userProjects `array`
    * items [UserProject-Read](#userproject-read)
  * usersFlattened `array`
    * items [UserProjectFlattened-Read](#userprojectflattened-read)
  * workingVersion [RuleSetVersion-Read](#rulesetversion-read)

### Project-Write
* Project-Write `object`
  * ignoreProjectTypes `array`
    * items `string`
  * name **required** `string`
  * onboardingCompletedDemos `array`
    * items `string`

### PublishHistory-Read
* PublishHistory-Read `object`
  * added `integer`
  * author [User-Read](#user-read)
  * createdAt `string`
  * deleted `integer`
  * id `string`
  * summary `string`
  * type `string`
  * updated `integer`
  * version [RuleSetVersion-Read](#rulesetversion-read)

### Rule-Read
* Rule-Read `object`
  * actions `array`
    * items `string`
  * changes `array`
    * items [RuleChange-Read](#rulechange-read)
  * currentChange [RuleChange-Read](#rulechange-read)
  * examples `array`
    * items `string`
  * formattedSource `string`
  * id `string`
  * markers `array`
    * items [Marker-Read](#marker-read)
  * matchOnResponseStatus `integer`
  * rank `integer`
  * source `string`
  * updatedAt `string`
  * viewCount `integer`

### RuleChange-Read
* RuleChange-Read `object`
  * action **required** `string`
  * actions `array`
    * items `string`
  * author [User-Read](#user-read)
  * createdAt `string`
  * examples `array`
    * items `string`
  * formattedSource `string`
  * id `string`
  * markers `array`
    * items [Marker-Read](#marker-read)
  * matchOnResponseStatus `integer`
  * rank **required** `integer`
  * ruleId `string`
  * source **required** `string`

### RuleChange-Write
* RuleChange-Write `object`
  * action **required** `string`
  * actions `array`
    * items `string`
  * examples `array`
    * items `string`
  * formattedSource `string`
  * markers `array`
    * items [Marker-Write](#marker-write)
  * matchOnResponseStatus `integer`
  * rank **required** `integer`
  * ruleId `string`
  * source **required** `string`

### RuleSetVersion
* RuleSetVersion `object`
  * createdAt `string`
  * current `boolean`
  * id `string`
  * isSnapshot `boolean`
  * mergedRulesCount `integer`
  * name `string`
  * publishedAt `string`
  * working `boolean`

### RuleSetVersion-Read
* RuleSetVersion-Read `object`
  * createdAt `string`
  * current `boolean`
  * id `string`
  * isSnapshot `boolean`
  * mergedRulesCount `integer`
  * name `string`
  * publishedAt `string`
  * working `boolean`

### RuleStatistic
* RuleStatistic `object`
  * id `string`
  * stats `string`

### SmartList
* SmartList `object`
  * defaultVersion `string`
  * description `string`
  * id `string`
  * name `string`
  * rules `string`
  * versions `array`
    * items `string`

### User
* User `object`
  * defaultOrganization [Organization](#organization)
  * email **required** `string`
  * id `string`
  * name **required** `string`
  * newEmail `string`
  * newEmailToken `string`
  * newEmailTokenExpiredAt `string`
  * password `string`
  * plainPassword `string`
  * projectsFlattened `array`
    * items `string`
  * superAdmin `boolean`
  * updatedAt `string`
  * userOrganizations `array`
    * items [UserOrganization](#userorganization)
  * userProjects `array`
    * items `string`

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
  * name **required** `string`

### User-ReadDetails
* User-ReadDetails `object`
  * name **required** `string`

### UserOrganization
* UserOrganization `object`
  * functionalRoles **required** `array`
    * items `string`
  * id `string`
  * organization `string`
  * user `string`

### UserOrganization-CreationWrite
* UserOrganization-CreationWrite `object`
  * functionalRoles **required** `array`
    * items `string`
  * organization `string`
  * user `string`

### UserOrganization-Read
* UserOrganization-Read `object`
  * functionalRoles **required** `array`
    * items `string`
  * id `string`
  * organization `string`
  * user `string`

### UserOrganization-Write
* UserOrganization-Write `object`
  * functionalRoles **required** `array`
    * items `string`

### UserProject
* UserProject `object`
  * functionalRoles **required** `array`
    * items `string`
  * id `string`
  * project **required** `string`
  * user **required** `string`

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
  * user **required** `string`

### UserProject-Write
* UserProject-Write `object`
  * functionalRoles **required** `array`
    * items `string`

### UserProjectFlattened
* UserProjectFlattened `object`
  * functionalRoles `array`
    * items `string`
  * project `string`
  * user `string`

### UserProjectFlattened-Read
* UserProjectFlattened-Read `object`
  * functionalRoles `array`
    * items `string`
  * user `string`


