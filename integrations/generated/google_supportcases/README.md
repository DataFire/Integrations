# @datafire/google_supportcases

Client library for Google Support Cases Private

## Installation and Usage
```bash
npm install --save @datafire/google_supportcases
```
```js
let google_supportcases = require('@datafire/google_supportcases').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_supportcases.youtube.transactions.refund({}).then(data => {
  console.log(data);
})
```

## Description

Support Cases API

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_supportcases.oauthCallback({
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
google_supportcases.oauthRefresh(null, context)
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

### agentActivities.list
Lists an agent activities.


```js
google_supportcases.agentActivities.list({}, context)
```

#### Input
* input `object`
  * caseId `string`
  * pageSize `integer`
  * pageToken `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListAgentActivitiesResponse](#listagentactivitiesresponse)

### agentActivities.create
Adds an agent activity.


```js
google_supportcases.agentActivities.create({}, context)
```

#### Input
* input `object`
  * body [CreateAgentActivityRequest](#createagentactivityrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AgentActivity](#agentactivity)

### agentActivities.createFromHelpCenterDeepLink
Creates an agent activity from a help center deep link.


```js
google_supportcases.agentActivities.createFromHelpCenterDeepLink({}, context)
```

#### Input
* input `object`
  * body [CreateFromHelpCenterDeepLinkRequest](#createfromhelpcenterdeeplinkrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AgentActivity](#agentactivity)

### agentSettings.list
List all agent settings.


```js
google_supportcases.agentSettings.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListAgentSettingsResponse](#listagentsettingsresponse)

### cases.getAgentUnreadCasesInfo
Gets information about unread cases for the calling agent. Only intended for use by the Cases frontend.


```js
google_supportcases.cases.getAgentUnreadCasesInfo({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetAgentUnreadCasesInfoResponse](#getagentunreadcasesinforesponse)

### cases.autoAssign
Auto assign a case to the calling user.


```js
google_supportcases.cases.autoAssign({}, context)
```

#### Input
* input `object`
  * body [AutoAssignRequest](#autoassignrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AutoAssignResponse](#autoassignresponse)

### cases.createNewCase
Creates a new case (Note this is not a true CRUD method as no resource is being passed in).


```js
google_supportcases.cases.createNewCase({}, context)
```

#### Input
* input `object`
  * body [CreateNewCaseRequest](#createnewcaserequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CreateNewCaseResponse](#createnewcaseresponse)

### cases.getAgentSearchCount
Gets the search count for cases associated with the calling agent, and begin sending Tango notifications when the count changes.


```js
google_supportcases.cases.getAgentSearchCount({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetAgentSearchCountResponse](#getagentsearchcountresponse)

### cases.listByAgent
Lists cases associated with the agent. Only intended for use by the Cases frontend.


```js
google_supportcases.cases.listByAgent({}, context)
```

#### Input
* input `object`
  * caseType `string` (values: ASSIGNED, RECENT, UNKNOWN_CASE_TYPE, WAITING)
  * pageSize `integer`
  * pageToken `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListCasesByAgentResponse](#listcasesbyagentresponse)

### cases.validateConsultForm
Validates that consult forms are properly configured.


```js
google_supportcases.cases.validateConsultForm({}, context)
```

#### Input
* input `object`
  * body [ValidateConsultFormRequest](#validateconsultformrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ValidateConsultFormResponse](#validateconsultformresponse)

### categoryInfos.batchGet
Batch gets category info. (Best effort, returns valid category infos only) Suppresses warning: GET requires method name starting with "Get" or "List"


```js
google_supportcases.categoryInfos.batchGet({}, context)
```

#### Input
* input `object`
  * names `array`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BatchGetCategoryInfosResponse](#batchgetcategoryinfosresponse)

### categoryInfos.listTopLevel
Lists gKMS top level category info.


```js
google_supportcases.categoryInfos.listTopLevel({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListTopLevelCategoryInfosResponse](#listtoplevelcategoryinfosresponse)

### categoryInfos.search
Searches category info. Suppresses warning: GET requires method name starting with "Get" or "List"


```js
google_supportcases.categoryInfos.search({}, context)
```

#### Input
* input `object`
  * baselineOnly `boolean`
  * filterByParentCategoryId `integer`
  * filterConsultCategories `boolean`
  * maximumResults `integer`
  * productIds `array`
  * query `string`
  * topCategoryPathNodeIds `array`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SearchCategoryInfosResponse](#searchcategoryinfosresponse)

### categoryInfos.searchMultiple
Searches multiple category info.


```js
google_supportcases.categoryInfos.searchMultiple({}, context)
```

#### Input
* input `object`
  * body [SearchMultipleCategoryInfosRequest](#searchmultiplecategoryinfosrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SearchCategoryInfosResponse](#searchcategoryinfosresponse)

### communications.list
Lists communications that match the filter.


```js
google_supportcases.communications.list({}, context)
```

#### Input
* input `object`
  * caseIds `array`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListCommunicationsResponse](#listcommunicationsresponse)

### communications.buildNewEmail
Builds an email template for the first email on a case.


```js
google_supportcases.communications.buildNewEmail({}, context)
```

#### Input
* input `object`
  * body [BuildNewEmailRequest](#buildnewemailrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BuildNewEmailResponse](#buildnewemailresponse)

### communications.buildReplyEmail
Builds an email template for a reply to an existing email.


```js
google_supportcases.communications.buildReplyEmail({}, context)
```

#### Input
* input `object`
  * body [BuildReplyEmailRequest](#buildreplyemailrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BuildReplyEmailResponse](#buildreplyemailresponse)

### communications.createConsultNote
Creates a draft note that replies to a consult note.


```js
google_supportcases.communications.createConsultNote({}, context)
```

#### Input
* input `object`
  * body [CreateConsultNoteRequest](#createconsultnoterequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CreateConsultNoteResponse](#createconsultnoteresponse)

### communications.createEmail
Creates a draft email and adds it to a case.


```js
google_supportcases.communications.createEmail({}, context)
```

#### Input
* input `object`
  * body [CreateEmailRequest](#createemailrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CreateEmailResponse](#createemailresponse)

### communications.createNote
Creates a note.


```js
google_supportcases.communications.createNote({}, context)
```

#### Input
* input `object`
  * body [CreateNoteRequest](#createnoterequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CreateNoteResponse](#createnoteresponse)

### communications.listRelated
Lists communications that are related to each other, including the communications on the requested case. Related communications include consult communications from target cases. Currently, only related communications from consult cases are supported.


```js
google_supportcases.communications.listRelated({}, context)
```

#### Input
* input `object`
  * caseId `string`
  * contextCaseId `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListRelatedCommunicationsResponse](#listrelatedcommunicationsresponse)

### communications.suggestReplyEmailHeaders
Suggests a set of email headers for an email reply to another email. Suppresses warning: GET requires method name starting with "Get" or "List"


```js
google_supportcases.communications.suggestReplyEmailHeaders({}, context)
```

#### Input
* input `object`
  * caseId `string`
  * messageId `string`
  * replyType `string` (values: REPLY, REPLY_ALL, UNKNOWN_REPLY_TYPE)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SuggestReplyEmailHeadersResponse](#suggestreplyemailheadersresponse)

### customerInteractions.list
List customer interactions.


```js
google_supportcases.customerInteractions.list({}, context)
```

#### Input
* input `object`
  * adwordsCid `string`
  * caseId `string`
  * channels `array`
  * emailAddress `string`
  * excludeCases `array`
  * pageSize `integer`
  * pageToken `string`
  * products `array`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListInteractionsResponse](#listinteractionsresponse)

### customerInteractions.summarize
Summary statistics about the cutomer's interaction history. Suppresses warning: GET requires method name starting with "Get" or "List"


```js
google_supportcases.customerInteractions.summarize({}, context)
```

#### Input
* input `object`
  * adwordsCid `string`
  * caseId `string`
  * emailAddress `string`
  * excludeCases `array`
  * startTime `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SummarizeResponse](#summarizeresponse)

### customerIssues.list
List issues and their resolutions for a customer.


```js
google_supportcases.customerIssues.list({}, context)
```

#### Input
* input `object`
  * caseId `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListCustomerIssuesResponse](#listcustomerissuesresponse)

### devices.list
List devices.


```js
google_supportcases.devices.list({}, context)
```

#### Input
* input `object`
  * caseId `string`
  * email `string`
  * excludeGoogleStoreOrders `boolean`
  * excludeRmaTypes `boolean`
  * pageSize `integer`
  * pageToken `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListDevicesResponse](#listdevicesresponse)

### devices.getById
Gets the specified device by any device ID.


```js
google_supportcases.devices.getById({}, context)
```

#### Input
* input `object`
  * caseId `string`
  * deviceId `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetByDeviceIdResponse](#getbydeviceidresponse)

### devices.updateOwner
Updates the owner of a device. Suppresses warning: GET requires method name starting with "Get" or "List"


```js
google_supportcases.devices.updateOwner({}, context)
```

#### Input
* input `object`
  * address.addressLine1 `string`
  * address.addressLine2 `string`
  * address.addressLine3 `string`
  * address.addressee `string`
  * address.city `string`
  * address.countryCode `string`
  * address.postalCode `string`
  * address.stateProvinceCode `string`
  * deviceId `string`
  * email `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateOwnerResponse](#updateownerresponse)

### giftCards.checkRedeemer
If the card is already redeemed by somebody else, customer can try a few users.


```js
google_supportcases.giftCards.checkRedeemer({}, context)
```

#### Input
* input `object`
  * body [CheckRedeemerRequest](#checkredeemerrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CheckRedeemerResponse](#checkredeemerresponse)

### giftCards.lookup
Finds a gift card based on its full redemption code or activation number. With full redemption code, returns redemption token on success.


```js
google_supportcases.giftCards.lookup({}, context)
```

#### Input
* input `object`
  * body [LookupGiftCardRequest](#lookupgiftcardrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LookupGiftCardResponse](#lookupgiftcardresponse)

### giftCards.redeem
Redeems a gift card to a customer using the redemption token.


```js
google_supportcases.giftCards.redeem({}, context)
```

#### Input
* input `object`
  * body [RedeemGiftCardRequest](#redeemgiftcardrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RedeemGiftCardResponse](#redeemgiftcardresponse)

### giftCards.verify
Verifies ownership of a damaged GC by checking if the activation number and partial redemption code are valid and refers to the same card. Returns the redemption token on success.


```js
google_supportcases.giftCards.verify({}, context)
```

#### Input
* input `object`
  * body [VerifyGiftCardRequest](#verifygiftcardrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [VerifyGiftCardResponse](#verifygiftcardresponse)

### ginlogs.logDataAccess
Logs data access.


```js
google_supportcases.ginlogs.logDataAccess({}, context)
```

#### Input
* input `object`
  * body [LogDataAccessRequest](#logdataaccessrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Empty](#empty)

### hardwareAuditor.orders.list
Lists hardware orders.


```js
google_supportcases.hardwareAuditor.orders.list({}, context)
```

#### Input
* input `object`
  * body [ListHardwareOrdersRequest](#listhardwareordersrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListHardwareOrdersResponse](#listhardwareordersresponse)

### hardwareOrders.hardwareSignals
Gets hardware signals based on the case and customer.


```js
google_supportcases.hardwareOrders.hardwareSignals({}, context)
```

#### Input
* input `object`
  * body [GetHardwareSignalsRequest](#gethardwaresignalsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetHardwareSignalsResponse](#gethardwaresignalsresponse)

### hardwareOrders.list
Lists hardware orders.


```js
google_supportcases.hardwareOrders.list({}, context)
```

#### Input
* input `object`
  * body [ListHardwareOrdersRequest](#listhardwareordersrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListHardwareOrdersResponse](#listhardwareordersresponse)

### hardwareOrders.listOtherDevices
Gets a user's devices that are not in the ListHardwareOrders result.


```js
google_supportcases.hardwareOrders.listOtherDevices({}, context)
```

#### Input
* input `object`
  * body [ListOtherDevicesRequest](#listotherdevicesrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListOtherDevicesResponse](#listotherdevicesresponse)

### opportunities.list
Lists opportunities.


```js
google_supportcases.opportunities.list({}, context)
```

#### Input
* input `object`
  * agentWhitelistedForApollo `boolean`
  * caseId `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListOpportunitiesResponse](#listopportunitiesresponse)

### opportunities.pitches.batchCreate
Batch creates pitches.


```js
google_supportcases.opportunities.pitches.batchCreate({}, context)
```

#### Input
* input `object`
  * body [BatchCreatePitchRequest](#batchcreatepitchrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BatchCreatePitchResponse](#batchcreatepitchresponse)

### play.digitalContent.orders.batchGet
Get a collection of orders.


```js
google_supportcases.play.digitalContent.orders.batchGet({}, context)
```

#### Input
* input `object`
  * body [GetOrdersRequest](#getordersrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetOrdersResponse](#getordersresponse)

### play.digitalContent.orders.refund
Refund orders.


```js
google_supportcases.play.digitalContent.orders.refund({}, context)
```

#### Input
* input `object`
  * body [RefundOrdersRequest](#refundordersrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RefundOrdersResponse](#refundordersresponse)

### play.digitalContent.orders.search
Search for orders.


```js
google_supportcases.play.digitalContent.orders.search({}, context)
```

#### Input
* input `object`
  * body [SearchOrdersRequest](#searchordersrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SearchOrdersResponse](#searchordersresponse)

### play.digitalContent.subscriptions.batchGet
Get a collection of subscriptions.


```js
google_supportcases.play.digitalContent.subscriptions.batchGet({}, context)
```

#### Input
* input `object`
  * body [GetSubscriptionsRequest](#getsubscriptionsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetSubscriptionsResponse](#getsubscriptionsresponse)

### play.digitalContent.subscriptions.cancel
Cancel subscription.


```js
google_supportcases.play.digitalContent.subscriptions.cancel({}, context)
```

#### Input
* input `object`
  * body [CancelSubscriptionRequest](#cancelsubscriptionrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CancelSubscriptionResponse](#cancelsubscriptionresponse)

### play.digitalContent.subscriptions.getCancellationStatus
Get cancellation status.


```js
google_supportcases.play.digitalContent.subscriptions.getCancellationStatus({}, context)
```

#### Input
* input `object`
  * body [GetCancellationStatusRequest](#getcancellationstatusrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetCancellationStatusResponse](#getcancellationstatusresponse)

### play.digitalContent.subscriptions.list
List subscriptions.


```js
google_supportcases.play.digitalContent.subscriptions.list({}, context)
```

#### Input
* input `object`
  * body [ListSubscriptionsRequest](#listsubscriptionsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListSubscriptionsResponse](#listsubscriptionsresponse)

### play.digitalContent.getRefundStatus
Get refund status.


```js
google_supportcases.play.digitalContent.getRefundStatus({}, context)
```

#### Input
* input `object`
  * body [GetRefundStatusRequest](#getrefundstatusrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetRefundStatusResponse](#getrefundstatusresponse)

### products.list
Lists products.


```js
google_supportcases.products.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListProductsResponse](#listproductsresponse)

### resolutions.list
Query for resolutions.


```js
google_supportcases.resolutions.list({}, context)
```

#### Input
* input `object`
  * autocompleteResults `boolean`
  * caseId `string`
  * pageSize `integer`
  * pageToken `string`
  * q `string`
  * resultsToken `string`
  * searchSessionId `string`
  * type `array`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListResolutionsResponse](#listresolutionsresponse)

### resolutions.cohorts.assign
Query and assign cohorts for this case.


```js
google_supportcases.resolutions.cohorts.assign({}, context)
```

#### Input
* input `object`
  * body [AssignCohortsRequest](#assigncohortsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AssignCohortsResponse](#assigncohortsresponse)

### resolutions.log
Log a resolution.


```js
google_supportcases.resolutions.log({}, context)
```

#### Input
* input `object`
  * body [LogResolutionRequest](#logresolutionrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Empty](#empty)

### resolutions.suggest
Suggest some resolutions to a case based on provided signals.


```js
google_supportcases.resolutions.suggest({}, context)
```

#### Input
* input `object`
  * body [SuggestResolutionsRequest](#suggestresolutionsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SuggestResolutionsResponse](#suggestresolutionsresponse)

### rma.save
Saves (Insert/Update) an RMA.


```js
google_supportcases.rma.save({}, context)
```

#### Input
* input `object`
  * body [SaveRmaRequest](#savermarequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SaveRmaResponse](#savermaresponse)

### rma.submit
DEPRECATED: Use SendRma instead. Submit an RMA.


```js
google_supportcases.rma.submit({}, context)
```

#### Input
* input `object`
  * body [SubmitRmaRequest](#submitrmarequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SubmitRmaResponse](#submitrmaresponse)

### rmas.list
Lists RMAs by Case ID and RMA state


```js
google_supportcases.rmas.list({}, context)
```

#### Input
* input `object`
  * caseId `string`
  * state `string` (values: RMA_CANCELLED, RMA_COMPLETED, RMA_INCOMPLETE, RMA_PENDING, RMA_SUBMITTED, UNKNOWN_RMA_STATE)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListRmasResponse](#listrmasresponse)

### rmas.createExchangeWithoutReturn
Sends merchandise without expecting a return.


```js
google_supportcases.rmas.createExchangeWithoutReturn({}, context)
```

#### Input
* input `object`
  * body [CreateExchangeWithoutReturnRequest](#createexchangewithoutreturnrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CreateExchangeWithoutReturnResponse](#createexchangewithoutreturnresponse)

### rmas.listBuyersRemorseCountryCodes
Lists two-character country codes valid for Buyer's Remorse RMAs.


```js
google_supportcases.rmas.listBuyersRemorseCountryCodes({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListBuyersRemorseCountryCodesResponse](#listbuyersremorsecountrycodesresponse)

### rmas.runWorkflow
DEPRECATED: Use RunRmaSteps instead. Run the given workflow for an RMA.


```js
google_supportcases.rmas.runWorkflow({}, context)
```

#### Input
* input `object`
  * body [RunWorkflowRequest](#runworkflowrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RunWorkflowResponse](#runworkflowresponse)

### rmas.send
Initiates a new RMA.


```js
google_supportcases.rmas.send({}, context)
```

#### Input
* input `object`
  * body [SendRmaRequest](#sendrmarequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SendRmaResponse](#sendrmaresponse)

### teams.getMyAssignStreamSearches
Gets assign-stream-enabled searches associated with the agent.


```js
google_supportcases.teams.getMyAssignStreamSearches({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetMyAssignStreamSearchesResponse](#getmyassignstreamsearchesresponse)

### troubleshooterSessions.create
Start a new troubleshooter session.


```js
google_supportcases.troubleshooterSessions.create({}, context)
```

#### Input
* input `object`
  * body [CreateTroubleshooterSessionRequest](#createtroubleshootersessionrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TroubleshooterSession](#troubleshootersession)

### troubleshooterSessions.listDevices
Lists devices on a customer's account.


```js
google_supportcases.troubleshooterSessions.listDevices({}, context)
```

#### Input
* input `object`
  * body [ListDevicesRequest](#listdevicesrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListDevicesResponse1](#listdevicesresponse1)

### troubleshooterSessions.listIssues
Lists issues.


```js
google_supportcases.troubleshooterSessions.listIssues({}, context)
```

#### Input
* input `object`
  * caseId `string`
  * issueId `string`
  * troubleshooterType `string` (values: NOE, PLAY_APPS, PLAY_PURCHASES, TROUBLESHOOTER_TYPE_NOT_SET)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListIssuesResponse](#listissuesresponse)

### troubleshooterSessions.listPurchasedApps
Lists purchased apps on a customer's account.


```js
google_supportcases.troubleshooterSessions.listPurchasedApps({}, context)
```

#### Input
* input `object`
  * body [ListPurchasedAppsRequest](#listpurchasedappsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListPurchasedAppsResponse](#listpurchasedappsresponse)

### troubleshooterSessions.listPurchasedBooks
Lists purchased books on a customer's account.


```js
google_supportcases.troubleshooterSessions.listPurchasedBooks({}, context)
```

#### Input
* input `object`
  * body [ListPurchasedBooksRequest](#listpurchasedbooksrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListPurchasedBooksResponse](#listpurchasedbooksresponse)

### troubleshooterSessions.listPurchasedVideos
Lists purchased videos on a customer's account.


```js
google_supportcases.troubleshooterSessions.listPurchasedVideos({}, context)
```

#### Input
* input `object`
  * body [ListPurchasedVideosRequest](#listpurchasedvideosrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListPurchasedVideosResponse](#listpurchasedvideosresponse)

### wallets.accounts.paymentInstruments.getHijackReviewsStatus
Retrieve status for Payment Method Hijack (PMH) reviews. This is a POST API because it takes in a sso_ticket.


```js
google_supportcases.wallets.accounts.paymentInstruments.getHijackReviewsStatus({}, context)
```

#### Input
* input `object`
  * body [GetPaymentMethodHijackReviewsStatusRequest](#getpaymentmethodhijackreviewsstatusrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetPaymentMethodHijackReviewsStatusResponse](#getpaymentmethodhijackreviewsstatusresponse)

### wallets.accounts.paymentInstruments.initiateHijackReviews
Initiate Payment Method Hijack (PMH) reviews.


```js
google_supportcases.wallets.accounts.paymentInstruments.initiateHijackReviews({}, context)
```

#### Input
* input `object`
  * body [InitiatePaymentMethodHijackReviewsRequest](#initiatepaymentmethodhijackreviewsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [InitiatePaymentMethodHijackReviewsResponse](#initiatepaymentmethodhijackreviewsresponse)

### wallets.accounts.getPaymentsInfo
Fetches Payments info, such as number of Payments accounts for the user.


```js
google_supportcases.wallets.accounts.getPaymentsInfo({}, context)
```

#### Input
* input `object`
  * body [GetPaymentsInfoRequest](#getpaymentsinforequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetPaymentsInfoResponse](#getpaymentsinforesponse)

### wallets.accounts.getReviewStatus
Fetches the review status of a wallet account. This is a POST API because it takes in a sso_ticket.


```js
google_supportcases.wallets.accounts.getReviewStatus({}, context)
```

#### Input
* input `object`
  * body [GetAccountReviewStatusRequest](#getaccountreviewstatusrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetAccountReviewStatusResponse](#getaccountreviewstatusresponse)

### wallets.accounts.getSignals
Fetches Wallet account signals for troubleshooting Wallet issues.


```js
google_supportcases.wallets.accounts.getSignals({}, context)
```

#### Input
* input `object`
  * accountSignals `array`
  * caseId `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetAccountSignalsResponse](#getaccountsignalsresponse)

### wallets.accounts.searchReviews
Initiates a review on the Wallet account. This is a POST API because it takes in a sso_ticket. This API could lead to a review escalation (increase in priority).


```js
google_supportcases.wallets.accounts.searchReviews({}, context)
```

#### Input
* input `object`
  * body [SearchAccountReviewsRequest](#searchaccountreviewsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SearchAccountReviewsResponse](#searchaccountreviewsresponse)

### wallets.bankAccountCountries
List supported Bank Account countries. Initially will only return supported Bank Account countries for Payment Method Hijacks (PMH). This is a POST API because it takes in a sso_ticket.


```js
google_supportcases.wallets.bankAccountCountries({}, context)
```

#### Input
* input `object`
  * body [ListBankAccountCountriesRequest](#listbankaccountcountriesrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListBankAccountCountriesResponse](#listbankaccountcountriesresponse)

### wallets.creditCardTypes
List supported Credit Card types. Initially will only return supported credit cards for Payment Method Hijacks (PMH). This is a POST API because it takes in a sso_ticket.


```js
google_supportcases.wallets.creditCardTypes({}, context)
```

#### Input
* input `object`
  * body [ListCreditCardTypesRequest](#listcreditcardtypesrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListCreditCardTypesResponse](#listcreditcardtypesresponse)

### wallets.paymentInstrumentTypeInfos.list
List supported payment instrument types. This API is not customer contextual.


```js
google_supportcases.wallets.paymentInstrumentTypeInfos.list({}, context)
```

#### Input
* input `object`
  * caseId `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListPaymentInstrumentTypeInfosResponse](#listpaymentinstrumenttypeinfosresponse)

### wallets.paymentInstruments.suggestIssuer
Fetches suggestions for payment(credit card, bank, direct carrier billing) issuers.


```js
google_supportcases.wallets.paymentInstruments.suggestIssuer({}, context)
```

#### Input
* input `object`
  * caseId `string`
  * includeDescription `boolean`
  * instrumentTypeToken `string`
  * searchKey `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SuggestPaymentInstrumentIssuerResponse](#suggestpaymentinstrumentissuerresponse)

### wallets.transactions
Query for transactions.


```js
google_supportcases.wallets.transactions({}, context)
```

#### Input
* input `object`
  * body [ListTransactionsRequest](#listtransactionsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListTransactionsResponse](#listtransactionsresponse)

### wallets.troubleshootAccount
Troubleshoots a Wallet account for issues.


```js
google_supportcases.wallets.troubleshootAccount({}, context)
```

#### Input
* input `object`
  * body [TroubleshootAccountRequest](#troubleshootaccountrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TroubleshootAccountResponse](#troubleshootaccountresponse)

### wallets.troubleshootTransaction
Troubleshoots a Wallet transaction for issues.


```js
google_supportcases.wallets.troubleshootTransaction({}, context)
```

#### Input
* input `object`
  * body [TroubleshootTransactionRequest](#troubleshoottransactionrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TroubleshootTransactionResponse](#troubleshoottransactionresponse)

### youtube.components.cancel
Cancel/Downgrade component(s).


```js
google_supportcases.youtube.components.cancel({}, context)
```

#### Input
* input `object`
  * body [CancelComponentsRequest](#cancelcomponentsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CancelComponentsResponse](#cancelcomponentsresponse)

### youtube.entitlements.cancel
Cancel entitlement.


```js
google_supportcases.youtube.entitlements.cancel({}, context)
```

#### Input
* input `object`
  * body [CancelEntitlementRequest](#cancelentitlementrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CancelEntitlementResponse](#cancelentitlementresponse)

### youtube.onetimepurchases
Gets a list of one time purchases.


```js
google_supportcases.youtube.onetimepurchases({}, context)
```

#### Input
* input `object`
  * body [GetOneTimePurchasesRequest](#getonetimepurchasesrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetOneTimePurchasesResponse](#getonetimepurchasesresponse)

### youtube.summary
Get Customer Summary Information for entitlements and refund history.


```js
google_supportcases.youtube.summary({}, context)
```

#### Input
* input `object`
  * body [GetCustomerSummaryRequest](#getcustomersummaryrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetCustomerSummaryResponse](#getcustomersummaryresponse)

### youtube.transactions.listByEntitlements
Get all transactions for entitlements.


```js
google_supportcases.youtube.transactions.listByEntitlements({}, context)
```

#### Input
* input `object`
  * body [ListTransactionsRequest1](#listtransactionsrequest1)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListTransactionsResponse1](#listtransactionsresponse1)

### youtube.transactions.refund
Refund a batch of transactions.


```js
google_supportcases.youtube.transactions.refund({}, context)
```

#### Input
* input `object`
  * body [RefundTransactionsRequest](#refundtransactionsrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RefundTransactionsResponse](#refundtransactionsresponse)

### communications.attachments.delete
Deletes an attachment from a draft.


```js
google_supportcases.communications.attachments.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * caseId `string`
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Empty](#empty)

### rmas.get
Gets the specified RMA.


```js
google_supportcases.rmas.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * caseId `string`
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Rma](#rma)

### cases.workflows.post
Creates a new workflow state on a case.


```js
google_supportcases.cases.workflows.post({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CreateWorkflowRequest](#createworkflowrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CasesWorkflow](#casesworkflow)

### cases.issue.updateProduct
Updates product for the specified case.


```js
google_supportcases.cases.issue.updateProduct({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateProductRequest](#updateproductrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Product](#product)

### cases.customer.billingAddresses
Lists customer billing addresses. Only intended for use by the Cases frontend.


```js
google_supportcases.cases.customer.billingAddresses({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [ListBillingAddressesRequest](#listbillingaddressesrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListBillingAddressesResponse](#listbillingaddressesresponse)

### cases.customer.shippingAddresses
Lists customer shipping addresses. Only intended for use by the Cases frontend.


```js
google_supportcases.cases.customer.shippingAddresses({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [ListShippingAddressesRequest](#listshippingaddressesrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListShippingAddressesResponse](#listshippingaddressesresponse)

### categoryInfos.properties.list
Lists all properties associated with a category info.


```js
google_supportcases.categoryInfos.properties.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListPropertiesResponse](#listpropertiesresponse)

### hardwareShipments.refunds
Lists refunds for a hardware order. Get by shipmentId: /v2/hardwareShipments/:


```js
google_supportcases.hardwareShipments.refunds({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [ListHardwareRefundsRequest](#listhardwarerefundsrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListHardwareRefundsResponse](#listhardwarerefundsresponse)

### cases.waitForConsult
Sets a case with an active consult case to IN_CONSULT state.


```js
google_supportcases.cases.waitForConsult({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [WaitForConsultRequest](#waitforconsultrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [WaitForConsultResponse](#waitforconsultresponse)

### cases.assign
Assigns the specified case.


```js
google_supportcases.cases.assign({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [AssignRequest](#assignrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AssignResponse](#assignresponse)

### cases.customer.authenticate
Authenticates a customer for a case.


```js
google_supportcases.cases.customer.authenticate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [AuthenticateRequest](#authenticaterequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AuthenticateResponse](#authenticateresponse)

### cases.attributes.batchUpdate
Updates attributes for a case in batch.


```js
google_supportcases.cases.attributes.batchUpdate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [BatchUpdateAttributesRequest](#batchupdateattributesrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BatchUpdateAttributesResponse](#batchupdateattributesresponse)

### cases.block
Indicate the specified case is blocked by a bug/case/legal order, etc.


```js
google_supportcases.cases.block({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [BlockRequest](#blockrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [BlockResponse](#blockresponse)

### cases.callBack
Makes a callback. Deauthenticates customer.


```js
google_supportcases.cases.callBack({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CallBackRequest](#callbackrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CallBackResponse](#callbackresponse)

### rmas.cancel
Cancel an RMA.


```js
google_supportcases.rmas.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CancelRmaRequest](#cancelrmarequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CancelRmaResponse](#cancelrmaresponse)

### rmas.cancelAuthHold
Cancels an auth hold for an advanced exchange RMA.


```js
google_supportcases.rmas.cancelAuthHold({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CancelAuthHoldRequest](#cancelauthholdrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Empty](#empty)

### communications.cancelSend
Cancel a pending send (for email only).


```js
google_supportcases.communications.cancelSend({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CancelSendRequest](#cancelsendrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Empty](#empty)

### cases.customer.checkWalletAccount
Check if a customer has a valid Wallet account. Suppresses warning: GET requires method name starting with "Get" or "List"


```js
google_supportcases.cases.customer.checkWalletAccount({
  "name": ""
}, context)
```

#### Input
* input `object`
  * email `string`
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CheckWalletAccountResponse](#checkwalletaccountresponse)

### cases.createNoteConsult
Creates a consult case via note channel for this case.


```js
google_supportcases.cases.createNoteConsult({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CreateNoteConsultCaseRequest](#createnoteconsultcaserequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CreateNoteConsultCaseResponse](#createnoteconsultcaseresponse)

### cases.createRealTimeConsult
Creates a consult case via RealTime channel for this case.


```js
google_supportcases.cases.createRealTimeConsult({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [CreateRealTimeConsultCaseRequest](#createrealtimeconsultcaserequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CreateRealTimeConsultCaseResponse](#createrealtimeconsultcaseresponse)

### cases.customer.deauthenticate
Deauthenticates a customer for a case.


```js
google_supportcases.cases.customer.deauthenticate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [DeauthenticateRequest](#deauthenticaterequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DeauthenticateResponse](#deauthenticateresponse)

### cases.dedupe
Deduplicates a case by closing duplicates cases.


```js
google_supportcases.cases.dedupe({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [DedupeRequest](#deduperequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DedupeResponse](#deduperesponse)

### communications.discardDraft
Discards a draft communication.


```js
google_supportcases.communications.discardDraft({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [DiscardDraftRequest](#discarddraftrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [DiscardDraftResponse](#discarddraftresponse)

### cases.escalate
Escalates a case.


```js
google_supportcases.cases.escalate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [EscalateRequest](#escalaterequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EscalateResponse](#escalateresponse)

### communications.finalizeConsultNote
Finalizes and sends a draft note for a consult case.


```js
google_supportcases.communications.finalizeConsultNote({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [FinalizeConsultNoteRequest](#finalizeconsultnoterequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [FinalizeConsultNoteResponse](#finalizeconsultnoteresponse)

### communications.finalizeNote
Finalize a note (a note cannot be updated after it is finalized).


```js
google_supportcases.communications.finalizeNote({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [FinalizeNoteRequest](#finalizenoterequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [FinalizeNoteResponse](#finalizenoteresponse)

### cases.finish
Sets the specified case to the finished state and triggers other finisher related workflows.


```js
google_supportcases.cases.finish({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [FinishRequest](#finishrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [FinishResponse](#finishresponse)

### cases.customer.getAuthenticationCreditCardTypes
Get credit card types for authentication.


```js
google_supportcases.cases.customer.getAuthenticationCreditCardTypes({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetAuthenticationCreditCardTypesRequest](#getauthenticationcreditcardtypesrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetAuthenticationCreditCardTypesResponse](#getauthenticationcreditcardtypesresponse)

### cases.customer.getAuthenticationQuestions
Get authentication options for a customer for a case.


```js
google_supportcases.cases.customer.getAuthenticationQuestions({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetAuthenticationQuestionsRequest](#getauthenticationquestionsrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetAuthenticationQuestionsResponse](#getauthenticationquestionsresponse)

### cases.customer.getAuthenticationResult
Get authentication status for a customer of a case.


```js
google_supportcases.cases.customer.getAuthenticationResult({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetAuthenticationResultRequest](#getauthenticationresultrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetAuthenticationResultResponse](#getauthenticationresultresponse)

### cases.customer.getBusinessListings
Gets the business listings for a customer.


```js
google_supportcases.cases.customer.getBusinessListings({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetBusinessListingsRequest](#getbusinesslistingsrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetBusinessListingsResponse](#getbusinesslistingsresponse)

### cases.getConsultSla
Calculates the SLA due by time that a new consult case would have.


```js
google_supportcases.cases.getConsultSla({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetConsultSlaRequest](#getconsultslarequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetConsultSlaResponse](#getconsultslaresponse)

### hardwareOrders.getDetail
Gets detail for a hardware order.


```js
google_supportcases.hardwareOrders.getDetail({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetHardwareOrderDetailRequest](#gethardwareorderdetailrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [HardwareOrderDetail](#hardwareorderdetail)

### products.getEscalationTargets
Gets the available escalation targets.


```js
google_supportcases.products.getEscalationTargets({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetEscalationTargetsResponse](#getescalationtargetsresponse)

### rmas.getLostStolenEligibility
Determines the eligibility of a lost/stolen RMA.


```js
google_supportcases.rmas.getLostStolenEligibility({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetLostStolenEligibilityRequest](#getloststoleneligibilityrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LostStolenEligibility](#loststoleneligibility)

### hardwareShipments.getLostStolenRefundEligibility
Gets lost stolen refund eligibility for account Get by shipmentId: /v2/hardwareShipments/:


```js
google_supportcases.hardwareShipments.getLostStolenRefundEligibility({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetLostStolenRefundEligibilityRequest](#getloststolenrefundeligibilityrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LostStolenRefundEligibility](#loststolenrefundeligibility)

### rmas.getMailingAddress
Get mailing address for an RMA


```js
google_supportcases.rmas.getMailingAddress({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetMailingAddressRequest](#getmailingaddressrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [MailingAddress](#mailingaddress)

### rmas.getOrderDetail
Gets an RMA's order detail.


```js
google_supportcases.rmas.getOrderDetail({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetRmaOrderDetailRequest](#getrmaorderdetailrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RmaOrderDetail](#rmaorderdetail)

### rmas.getReplacementDetail
Get details for a replacement device that is not associated with an order.


```js
google_supportcases.rmas.getReplacementDetail({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetReplacementDetailRequest](#getreplacementdetailrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ReplacementDetail](#replacementdetail)

### products.getRoutingTargets
Gets the available routing targets.


```js
google_supportcases.products.getRoutingTargets({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GetRoutingTargetsResponse](#getroutingtargetsresponse)

### hardwareShipments.getShippingAddress
--------- Begin of shipment Id based calls ----------------- Gets shipping address for a purchase Get by shipmentId: /v2/hardwareShipments/:


```js
google_supportcases.hardwareShipments.getShippingAddress({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetShippingAddressRequest](#getshippingaddressrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ShippingAddress](#shippingaddress)

### hardwareShipments.getShippingCustomerName
Gets the shipping customer name for a hardware order Get by shipmentId: /v2/hardwareShipments/:


```js
google_supportcases.hardwareShipments.getShippingCustomerName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetShippingCustomerNameRequest](#getshippingcustomernamerequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ShippingCustomerName](#shippingcustomername)

### hardwareShipments.getShippingCustomerPhoneNumber
Gets the shipping customer phone number for a hardware order Get by shipmentId: /v2/hardwareShipments/:


```js
google_supportcases.hardwareShipments.getShippingCustomerPhoneNumber({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GetShippingCustomerPhoneNumberRequest](#getshippingcustomerphonenumberrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ShippingCustomerPhoneNumber](#shippingcustomerphonenumber)

### categoryInfos.listChildren
Lists children category info.


```js
google_supportcases.categoryInfos.listChildren({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListChildrenCategoryInfosResponse](#listchildrencategoryinfosresponse)

### products.listSettings
Lists product settings for an agent.


```js
google_supportcases.products.listSettings({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * requestedSettingTypes `array`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ListSettingsResponse1](#listsettingsresponse1)

### troubleshooterSessions.log
Log troubleshooter activity.


```js
google_supportcases.troubleshooterSessions.log({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [LogTroubleshooterActivityRequest](#logtroubleshooteractivityrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Empty](#empty)

### rmas.markOriginalDeviceReceived
Marks an original device as received in a Standard Exchange.


```js
google_supportcases.rmas.markOriginalDeviceReceived({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [MarkOriginalDeviceReceivedRequest](#markoriginaldevicereceivedrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Empty](#empty)

### cases.needsInfo
Sets the specified case to the needs info state.


```js
google_supportcases.cases.needsInfo({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [NeedsInfoRequest](#needsinforequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [NeedsInfoResponse](#needsinforesponse)

### cases.offeredSolution
Sets the specified case to the solution offered state indicating that a previous communication was a "solution".


```js
google_supportcases.cases.offeredSolution({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [OfferedSolutionRequest](#offeredsolutionrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [OfferedSolutionResponse](#offeredsolutionresponse)

### cases.read
Marks a case as read by the calling agent if they are the assignee.


```js
google_supportcases.cases.read({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [ReadCaseRequest](#readcaserequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Empty](#empty)

### hardwareShipments.refund
Refunds a hardware shipment by shipment id.


```js
google_supportcases.hardwareShipments.refund({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [RefundHardwareOrderRequest](#refundhardwareorderrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RefundHardwareOrderResponse](#refundhardwareorderresponse)

### cases.release
Unassigns the specified case from the gaia user associated with this call.


```js
google_supportcases.cases.release({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [ReleaseRequest](#releaserequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ReleaseResponse](#releaseresponse)

### cases.route
Routes the specified case to another product or team.


```js
google_supportcases.cases.route({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [RouteRequest](#routerequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RouteResponse](#routeresponse)

### rmas.runRmaSteps
Run the given RMA workflow steps.


```js
google_supportcases.rmas.runRmaSteps({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [RunRmaStepsRequest](#runrmastepsrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RunRmaStepsResponse](#runrmastepsresponse)

### communications.send
Sends a draft email. This finalizes the email.


```js
google_supportcases.communications.send({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [SendEmailRequest](#sendemailrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SendEmailResponse](#sendemailresponse)

### cases.spam
Marks the specified case as spam.


```js
google_supportcases.cases.spam({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [SpamRequest](#spamrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SpamResponse](#spamresponse)

### cases.split
Move a case's communication into a new case.


```js
google_supportcases.cases.split({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [SplitRequest](#splitrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SplitResponse](#splitresponse)

### cases.suggestNewEmailHeaders
Suggests a set of headers (like from aliases) for a new email on a case. Suppresses warning: GET requires method name starting with "Get" or "List"


```js
google_supportcases.cases.suggestNewEmailHeaders({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SuggestNewEmailHeadersResponse](#suggestnewemailheadersresponse)

### cases.suggestNoteHeaders
Suggests a set of headers (like from aliases) for a note Suppresses warning: GET requires method name starting with "Get" or "List"


```js
google_supportcases.cases.suggestNoteHeaders({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SuggestNoteHeadersResponse](#suggestnoteheadersresponse)

### cases.take
Assigns the specified case to the gaia user associated with this call.


```js
google_supportcases.cases.take({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [TakeRequest](#takerequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TakeResponse](#takeresponse)

### cases.transfer
Transfers the specified case from the gaia user associated with this call to another user.


```js
google_supportcases.cases.transfer({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [TransferRequest](#transferrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TransferResponse](#transferresponse)

### troubleshooterSessions.troubleshootIssue
Troubleshoot issue.


```js
google_supportcases.troubleshooterSessions.troubleshootIssue({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [TroubleshootIssueRequest](#troubleshootissuerequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TroubleshootIssueResponse](#troubleshootissueresponse)

### cases.unassign
Unassigns the specified case from its current assignee. Note that this also moves the case to the UNASSIGNED state.


```js
google_supportcases.cases.unassign({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UnassignRequest](#unassignrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UnassignResponse](#unassignresponse)

### cases.unblock
Indicate the specified case is no longer blocked by a bug/case/ legal order, etc.


```js
google_supportcases.cases.unblock({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UnblockRequest](#unblockrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UnblockResponse](#unblockresponse)

### cases.unspam
Unmark the specified case as spam.


```js
google_supportcases.cases.unspam({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UnspamRequest](#unspamrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UnspamResponse](#unspamresponse)

### cases.attributes.update
Updates attributes for the specified case. Note: This call adds the attributes that are not present on the case to the case. If attribute is already present on the case, the value is replaced.


```js
google_supportcases.cases.attributes.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateAttributesRequest](#updateattributesrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateAttributesResponse](#updateattributesresponse)

### cases.workflows.update
Updates workflow state.


```js
google_supportcases.cases.workflows.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateWorkflowRequest](#updateworkflowrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CasesWorkflow](#casesworkflow)

### cases.issue.product.updateAgentCategories
Updates agent categories for the specified case. Note: This call replaces categories on the case by new categories passed in the request.


```js
google_supportcases.cases.issue.product.updateAgentCategories({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateAgentCategoriesRequest](#updateagentcategoriesrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateAgentCategoriesResponse](#updateagentcategoriesresponse)

### communications.updateConsultNote
Updates a draft consult note with new content.


```js
google_supportcases.communications.updateConsultNote({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateConsultNoteRequest](#updateconsultnoterequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateConsultNoteResponse](#updateconsultnoteresponse)

### cases.customer.updateContactEmail
Updates contact email for the specified case.


```js
google_supportcases.cases.customer.updateContactEmail({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateContactEmailRequest](#updatecontactemailrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateContactEmailResponse](#updatecontactemailresponse)

### cases.customer.updateContactName
Updates contact name for the specified case.


```js
google_supportcases.cases.customer.updateContactName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateContactNameRequest](#updatecontactnamerequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateContactNameResponse](#updatecontactnameresponse)

### cases.customer.updateCustomerAttributes
Updates customer attributes for the specified case.


```js
google_supportcases.cases.customer.updateCustomerAttributes({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateCustomerAttributesRequest](#updatecustomerattributesrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateCustomerAttributesResponse](#updatecustomerattributesresponse)

### cases.updateDisconnectedChannel
Updates disconnected channel for the specified case.


```js
google_supportcases.cases.updateDisconnectedChannel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateDisconnectedChannelRequest](#updatedisconnectedchannelrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Empty](#empty)

### cases.updateEligibleProgram
Update customer attributes indicating eligibility for opportunities.


```js
google_supportcases.cases.updateEligibleProgram({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateEligibleProgramRequest](#updateeligibleprogramrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateEligibleProgramResponse](#updateeligibleprogramresponse)

### communications.updateEmail
Updates a draft email.


```js
google_supportcases.communications.updateEmail({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateEmailRequest](#updateemailrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateEmailResponse](#updateemailresponse)

### cases.issue.updateLocale
Updates the case's issue locale.


```js
google_supportcases.cases.issue.updateLocale({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateLocaleRequest](#updatelocalerequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateLocaleResponse](#updatelocaleresponse)

### communications.updateNote
Updates a draft note.


```js
google_supportcases.communications.updateNote({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateNoteRequest](#updatenoterequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateNoteResponse](#updatenoteresponse)

### cases.issue.updateSummary
Updates case's issue summary.


```js
google_supportcases.cases.issue.updateSummary({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [UpdateSummaryRequest](#updatesummaryrequest)
  * name **required** `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UpdateSummaryResponse](#updatesummaryresponse)



## Definitions

### Account
* Account `object`
  * accountId `string`
  * productId `string`
  * productName `string`

### AccountLookupTool
* AccountLookupTool `object`
  * productId `string`
  * productName `string`
  * urlTemplate `string`

### AccountReview
* AccountReview `object`
  * reviewKey [ReviewKey](#reviewkey)
  * reviewState `string` (values: ASSIGNED, CLOSED, REVIEW_STATE_UNSPECIFIED, UNASSIGNED, UNKNOWN_REVIEW_STATE)
  * reviewType `string` (values: ACCOUNT_REVIEW_TYPE_UNSPECIFIED, AML, BVID_COMPLIANCE_FRAUD, ID_VERIFICATION_UNKNOWN_TYPE, LEGACY_HOLD_REVIEW, OFFLINE_SANCTIONS_COMPLIANCE_FRAUD, ONLINE_SANCTIONS, RISK_FRAUD)

### AccountSignalResult
* AccountSignalResult `object`
  * bvidDocsSubmissionStatus [CustomerDocsSubmissionStatus](#customerdocssubmissionstatus)
  * gaiaCheckoutServiceStatus `string` (values: GAIA_ACCOUNT_SERVICE_STATUS_DISABLED, GAIA_ACCOUNT_SERVICE_STATUS_REGISTERED, GAIA_ACCOUNT_SERVICE_STATUS_SUSPENDED, GAIA_ACCOUNT_SERVICE_STATUS_UNSPECIFIED)
  * hasPositiveWalletBalance `boolean`
  * isVip `boolean`
  * mostRecentTransactionType `string` (values: GOOGLE_PLAY, GOOGLE_STORE, P2P_RECEIVER, P2P_SENDER, TAP_AND_PAY, UNKNOWN_WALLET_TRANSACTION_TYPE, WALLET_CARD, YOUTUBE_PURCHASE)
  * offlineCheckDocsSubmissionStatus [CustomerDocsSubmissionStatus](#customerdocssubmissionstatus)
  * riskDocsSubmissionStatus [CustomerDocsSubmissionStatus](#customerdocssubmissionstatus)
  * sanctionsDocsSubmissionStatus [CustomerDocsSubmissionStatus](#customerdocssubmissionstatus)
  * type `string` (values: ACCOUNT_SIGNAL_TYPE_UNSPECIFIED, CUSTOMER_BVID_DOCS_SUBMISSION_STATUS, CUSTOMER_OFFLINE_CHECK_DOCS_SUBMISSION_STATUS, CUSTOMER_RISK_DOCS_SUBMISSION_STATUS, CUSTOMER_SANCTIONS_DOCS_SUBMISSION_STATUS, GAIA_ACCOUNT_CHECKOUT_SERVICE_STATUS, HAS_POSITIVE_WALLET_BALANCE, IS_VIP, MOST_RECENT_TRANSACTION_TYPE)

### Action
* Action `object`
  * cannedResponses [CannedResponseAction](#cannedresponseaction)
  * issueCategories [IssueCategoryAction](#issuecategoryaction)
  * nextState `string` (values: ASSIGNED, BLOCKED_BY, FINISHED, IN_CONSULT, NEED_INFO, NEW, SOLUTION_OFFERED, UNASSIGNED, UNKNOWN_CASE_STATE)

### Action1
* Action1 `object`
  * alertMessage `string`
  * consultAction [ConsultAction](#consultaction)
  * difmAction [DifmAction](#difmaction)
  * scriptId `integer`
  * showSummaryAction [ShowSummaryAction](#showsummaryaction)
  * transferAction [TransferAction](#transferaction)

### Address
* Address `object`
  * addressLine1 `string`
  * addressLine2 `string`
  * addressLine3 `string`
  * addressee `string`
  * city `string`
  * countryCode `string`
  * postalCode `string`
  * stateProvinceCode `string`

### AfterSendSetting
* AfterSendSetting `object`
  * stateAfterSend `string` (values: NEEDS_INFO, SOLUTION_OFFERED, UNKNOWN_STATE_AFTER_SEND)

### AgentActivity
* AgentActivity `object`
  * agentActivityId `string`
  * assignee [Assignee](#assignee)
  * caseId `string`
  * cohortMetadataCollection [CohortMetadataCollection](#cohortmetadatacollection)
  * description `string`
  * desktopScreenshareEvent [DesktopScreenshareEvent](#desktopscreenshareevent)
  * mobileScreenshareEvent [MobileScreenshareEvent](#mobilescreenshareevent)
  * phoneCall [PhoneCall](#phonecall)
  * pitch [Pitch](#pitch)
  * relation [Relation](#relation)
  * requestDeviceSignalsEvent [RequestDeviceSignalsEvent](#requestdevicesignalsevent)
  * resolutionOpened [ResolutionOpened](#resolutionopened)
  * startTime `string`

### AgentActivitySource
* AgentActivitySource `object`

### AgentSetting
* AgentSetting `object`
  * agentSettingId `string`
  * aliasInfo [AliasInfo](#aliasinfo)
  * defaultLocale `string`
  * defaultProductId `string`
  * employmentInfo [EmploymentInfo](#employmentinfo)
  * firstName `string`
  * focusInfo [FocusInfo](#focusinfo)
  * includeReassignedInAutoassign `boolean`
  * languageCode `string`
  * name `string`
  * phoneSetting [PhoneSetting](#phonesetting)
  * preferredName `string`
  * sidewinderRole [SidewinderRole](#sidewinderrole)
  * status `string` (values: ACTIVE, DELETED, INACTIVE, UNKNOWN_AGENT_STATUS)

### AgentTransfer
* AgentTransfer `object`
  * sourceAgent [Identity](#identity)
  * targetAgent [Identity](#identity)

### AgentUnreadCasesInfo
* AgentUnreadCasesInfo `object`
  * unreadCasesInfo `array`
    * items [UnreadCaseInfo](#unreadcaseinfo)

### AliasInfo
* AliasInfo `object`
  * externalName `string`
  * personalAlias `string`

### Answer
* Answer `object`
  * question `string` (values: DEVICE_TYPE, PURCHASED_APP_NAME, PURCHASED_BOOK_NAME, PURCHASED_VIDEO_NAME, QUESTION_NOT_SET)
  * skipReason `string` (values: DOES_NOT_KNOW, NOT_LISTED, SKIP_REASON_NOT_SET)
  * text `string`

### AnswerSet
* AnswerSet `object`
  * customerAnswers `array`
    * items [CustomerAnswer](#customeranswer)
  * questionSetType `string` (values: PAYMENT_METHOD_QUESTION_SET, PHONE_NUMBER_QUESTION_SET, POSTAL_CODE_QUESTION_SET, UNKNOWN_QUESTION_SET_TYPE)

### AssignCohortsRequest
* AssignCohortsRequest `object`
  * caseId `string`

### AssignCohortsResponse
* AssignCohortsResponse `object`
  * cohorts `array`
    * items [Cohort2](#cohort2)

### AssignRequest
* AssignRequest `object`
  * assignedByScreenPop `boolean`
  * emailAddress `string`

### AssignResponse
* AssignResponse `object`
  * case [Case](#case)

### Assignee
* Assignee `object`
  * displayName `string`
  * emailAddress `string`

### Assignee1
* Assignee1 `object`
  * displayName `string`
  * emailAddress `string`

### Assignee2
* Assignee2 `object`
  * ldap `string`
  * name `string`

### Attachment
* Attachment `object`
  * attachmentId `string`
  * communicationId `string`

### Attachment1
* Attachment1 `object`
  * attachmentId `string`
  * communicationId `string`

### AttachmentInfo
* AttachmentInfo `object`
  * attachmentId `string`
  * contentId `string`
  * fileName `string`
  * mimeType `string`

### Attribute
* Attribute `object`
  * attributeId `string`
  * attributeName `string`
  * description `string`
  * enumValue `array`
    * items [EnumValue](#enumvalue)
  * name `string`
  * valueType `string` (values: BOOL, DOUBLE, ENUM, INT, INT64, STRING, TIMESTAMP, UNKNOWN_VALUE_TYPE)

### Attribute1
* Attribute1 `object`
  * attributeId `string`
  * attributeName `string`
  * entries `array`
    * items [Entry](#entry)

### AuthenticateRequest
* AuthenticateRequest `object`
  * agentSsoCookie `string`
  * answerSets `array`
    * items [AnswerSet](#answerset)
  * customerEmail `string`

### AuthenticateResponse
* AuthenticateResponse `object`
  * customer [Customer](#customer)
  * result `string` (values: FAIL, PASS, PENDING, UNKNOWN_RESULT)
  * verificationResults `array`
    * items [VerificationResult](#verificationresult)

### Authentication
* Authentication `object`
  * authenticateTime `string`
  * channel `string` (values: AGENT, CLICK_TO_CALL, CUF, REALTIME, UNKNOWN_CHANNEL)
  * emailAddress `string`
  * result `string` (values: FAIL, PASS, PENDING, UNKNOWN_RESULT)

### AuthenticationBankAccount
* AuthenticationBankAccount `object`
  * bankAccountTypeDisplayName `string`
  * bankAccountTypeToken `string`

### AuthenticationCreditCard
* AuthenticationCreditCard `object`
  * creditCardDisplayName `string`
  * creditCardTypeToken `string`

### AuthenticationCreditCard1
* AuthenticationCreditCard1 `object`
  * creditCardDisplayName `string`
  * creditCardTypeToken `string`

### AuthenticationInfo
* AuthenticationInfo `object`
  * status `string` (values: FAILED, SUCCESS, UNKNOWN_AUTH_TYPE)

### AuthenticationSettings
* AuthenticationSettings `object`
  * authenticationSupported `boolean`
  * exemptFromAuthentication `boolean`

### AutoAssignRequest
* AutoAssignRequest `object`

### AutoAssignResponse
* AutoAssignResponse `object`
  * case [Case](#case)
  * searchName `string`

### AutocheckResult
* AutocheckResult `object`
  * autocheckId `string`
  * autocheckTime `string`
  * descriptionId `string`
  * scriptId `string`
  * status `string` (values: AUTOCHECK_STATUS_NOT_SET, ERROR, FAIL, NO, NOT_RUN, PASS, YES)

### AvailableQuestion
* AvailableQuestion `object`
  * authenticationCreditCards `array`
    * items [AuthenticationCreditCard1](#authenticationcreditcard1)
  * question `string` (values: BANK_ACCOUNT, CREDIT_CARD, DCB, PAYPAL, PHONE_NUMBER, PLAY_BALANCE, POSTAL_CODE, UNKNOWN_QUESTION, WALLET_BALANCE)
  * questionSources `array`
    * items [QuestionSource](#questionsource)
  * questionToken `string`

### BankAccount
* BankAccount `object`
  * accountSuffix `string`
  * bankAccountToken `string`
  * countryName `string`

### BankAccount1
* BankAccount1 `object`
  * accountNumberSuffix `string`
  * bankAccountTypeToken `string`

### BankAccountCountry
* BankAccountCountry `object`
  * bankAccountToken `string`
  * countryName `string`

### BatchCreatePitchRequest
* BatchCreatePitchRequest `object`
  * caseId `string`
  * eventId `string`
  * opportunityIds `array`
    * items `string`
  * pitches `array`
    * items [Pitch1](#pitch1)

### BatchCreatePitchResponse
* BatchCreatePitchResponse `object`
  * responses `array`
    * items [CreatePitchResponse](#createpitchresponse)

### BatchGetCategoryInfosResponse
* BatchGetCategoryInfosResponse `object`
  * categoryInfos `array`
    * items [CategoryInfo](#categoryinfo)

### BatchUpdateAttributesRequest
* BatchUpdateAttributesRequest `object`
  * attributes `array`
    * items [Attribute1](#attribute1)

### BatchUpdateAttributesResponse
* BatchUpdateAttributesResponse `object`
  * case [Case](#case)

### BlockRequest
* BlockRequest `object`
  * borgAlertId `string`
  * buganizerId `string`
  * orderId `string`
  * pcrId `integer`

### BlockResponse
* BlockResponse `object`
  * case [Case](#case)

### BuildNewEmailRequest
* BuildNewEmailRequest `object`
  * caseId `string`

### BuildNewEmailResponse
* BuildNewEmailResponse `object`
  * emailTemplate [Email](#email)
  * footerIds `array`
    * items `string`
  * headerIds `array`
    * items `string`

### BuildReplyEmailRequest
* BuildReplyEmailRequest `object`
  * caseId `string`
  * messageId `string`
  * replyType `string` (values: REPLY, REPLY_ALL, UNKNOWN_REPLY_TYPE)
  * timeZone `string`

### BuildReplyEmailResponse
* BuildReplyEmailResponse `object`
  * emailTemplate [Email](#email)

### Business
* Business `object`
  * address [Address](#address)
  * listingId `string`
  * name `string`

### CallBackRequest
* CallBackRequest `object`

### CallBackResponse
* CallBackResponse `object`
  * callbackStatus `string` (values: AGENT_BUSY, AGENT_HUNG_UP_EARLY, AGENT_NOT_ANSWERED, AGENT_NOT_CONNECTED, AGENT_NOT_LOGGED_IN, AUTHENTICATION_ERROR, CALLBACK_STATUS_UNSPECIFIED, CALL_CONNECTED, CALL_IN_PROGRESS, CUSTOMER_BUSY, CUSTOMER_NOT_ANSWERED, CUSTOMER_NOT_CONNECTED, INTERNAL_ERROR, INVALID_AGENT_SETTING, INVALID_CUSTOMER_NUMBER)
  * customer [Customer](#customer)

### Campaign
* Campaign `object`
  * campaignId `string`
  * campaignName `string`
  * rank `number`

### CancelAuthHoldRequest
* CancelAuthHoldRequest `object`
  * caseId `string`

### CancelComponentsRequest
* CancelComponentsRequest `object`
  * caseId `string`
  * componentTokens `array`
    * items `string`
  * reason `string` (values: CANCEL_REFUND_REASON_UNKNOWN, FEATURE_NOT_WORKING, FRIEND_OR_FAMILY_CHARGES, NO_LONGER_WANTED_REMORSE, PURCHASE_BY_ACCIDENT, SELF_SERVICE_REFUND, UNRECOGNIZED_CHARGES_PAYMENT_FRAUD)
  * revokeAccess `boolean`
  * ssoCookie `string`

### CancelComponentsResponse
* CancelComponentsResponse `object`
  * componentTokens `array`
    * items `string`
  * result `string` (values: ALREADY_CANCELED, APPROVED, CANCEL_RESULT_UNKNOWN, CANCEL_RETRIABLE, PERMANENT_CANCEL_FAILED)

### CancelEntitlementRequest
* CancelEntitlementRequest `object`
  * caseId `string`
  * entitlementToken `string`
  * entitlementTokens `array`
    * items `string`
  * reason `string` (values: CANCEL_REFUND_REASON_UNKNOWN, FEATURE_NOT_WORKING, FRIEND_OR_FAMILY_CHARGES, NO_LONGER_WANTED_REMORSE, PURCHASE_BY_ACCIDENT, SELF_SERVICE_REFUND, UNRECOGNIZED_CHARGES_PAYMENT_FRAUD)
  * revokeAccess `boolean`
  * ssoCookie `string`

### CancelEntitlementResponse
* CancelEntitlementResponse `object`
  * cancelResultInfo `array`
    * items [CancelResultInfo](#cancelresultinfo)
  * entitlementToken `string`
  * result `string` (values: ALREADY_CANCELED, APPROVED, CANCEL_RESULT_UNKNOWN, CANCEL_RETRIABLE, PERMANENT_CANCEL_FAILED)

### CancelHardwareOrderRequest
* CancelHardwareOrderRequest `object`
  * caseId `string`
  * ssoTicket `string`

### CancelHistorySummaryInfo
* CancelHistorySummaryInfo `object`
  * cancelResult `string` (values: ALREADY_CANCELED, APPROVED, CANCEL_RESULT_UNKNOWN, CANCEL_RETRIABLE, PERMANENT_CANCEL_FAILED)
  * numberOfCancels `integer`
  * productType `string` (values: BUNDLE, LIVE_EVENT, MOVIE, PRODUCT_TYPE_UNKNOWN, RED, SEASON, SHOW, UNPLUGGED)
  * revoke `boolean`

### CancelInfo
* CancelInfo `object`
  * cancelReason `string` (values: CANCEL_REASON_NOT_SET, INVALID_ADDRESS, OTHER, PAYMENT_ISSUE, USER_INITIATED, USER_REQUESTED)
  * cancelTime `string`

### CancelResultInfo
* CancelResultInfo `object`
  * entitlementToken `string`
  * result `string` (values: ALREADY_CANCELED, APPROVED, CANCEL_RESULT_UNKNOWN, CANCEL_RETRIABLE, PERMANENT_CANCEL_FAILED)

### CancelRmaRequest
* CancelRmaRequest `object`
  * caseId `string`
  * reason `string` (values: CANCEL_REASON_NOT_SET, CUSTOMER_CHANGED_MIND, FIX_AGENT_ERROR, OTHER)

### CancelRmaResponse
* CancelRmaResponse `object`
  * result `string` (values: CANCEL_RESULT_NOT_SET, SUCCESSFUL, UNSUCCESSFUL_CART_LINK_USED, UNSUCCESSFUL_NOT_PENDING, UNSUCCESSFUL_UNKNOWN)

### CancelSendRequest
* CancelSendRequest `object`
  * caseId `string`

### CancelSubscriptionRequest
* CancelSubscriptionRequest `object`
  * caseId `string`
  * customerEmail `string`
  * locale `string`
  * reason `string` (values: CANCEL_REASON_ACCIDENTAL_PURCHASE, CANCEL_REASON_DEFECTIVE, CANCEL_REASON_DID_NOT_RECEIVE, CANCEL_REASON_FRAUD, CANCEL_REASON_FRIENDLY_FRAUD, CANCEL_REASON_REMORSE, CANCEL_REASON_UNSPECIFIED)
  * ssoCookie `string`
  * subscription [Subscription](#subscription)

### CancelSubscriptionResponse
* CancelSubscriptionResponse `object`
  * cancelRejectionReason `string` (values: CANCEL_REJECTION_REASON_UNSPECIFIED, SUBSCRIPTION_IS_NOT_CANCELLABLE)

### CannedResponse
* CannedResponse `object`
  * kmsId `integer`
  * locale `string`
  * type `string` (values: CHAT, EMAIL, EMAIL_AND_CHAT, UNKNOWN_CHANNEL_TYPE)

### CannedResponse1
* CannedResponse1 `object`
  * kmsId `integer`
  * locale `string`
  * type `string` (values: CHAT, EMAIL, UNKNOWN_CHANNEL_TYPE)
  * url `string`

### CannedResponseAction
* CannedResponseAction `object`
  * cannedResponseIds `array`
    * items `integer`

### CardLookupCriteria
* CardLookupCriteria `object`
  * activationNumber `string`
  * redemptionCode `string`

### Case
* Case `object`
  * agentUpdateTimeMap `object`
  * assignee [Assignee1](#assignee1)
  * attributeMap `object`
  * caseId `string`
  * communicationInfo [CommunicationInfo](#communicationinfo)
  * createTime `string`
  * creator [Source](#source)
  * customer [Customer](#customer)
  * dueByTime `string`
  * issue [Issue](#issue)
  * name `string`
  * priority `integer`
  * relations `array`
    * items [Relation1](#relation1)
  * state `string` (values: ASSIGNED, BLOCKED_BY, FINISHED, IN_CONSULT, NEED_INFO, NEW, SOLUTION_OFFERED, UNASSIGNED, UNKNOWN_CASE_STATE)
  * transitionTime `string`
  * updateTime `string`
  * workflowInfo [WorkflowInfo](#workflowinfo)

### CaseData
* CaseData `object`
  * assignee [Assignee2](#assignee2)
  * caseId `string`
  * categories `array`
    * items [Category1](#category1)
  * productName `string`
  * state `string` (values: ASSIGNED, BLOCKED_BY, FINISHED, IN_CONSULT, NEED_INFO, NEW, SOLUTION_OFFERED, UNASSIGNED, UNKNOWN_CASE_STATE)

### CasesReviewKey
* CasesReviewKey `object`
  * review3Id `string`
  * reviewId `string`
  * targetUnderReview `string`
  * token `string`

### CasesTransactionIdentifier
* CasesTransactionIdentifier `object`
  * orderId `string`
  * transactionId `string`
  * transactionType `string` (values: GOOGLE_PLAY, GOOGLE_STORE, P2P_RECEIVER, P2P_SENDER, TAP_AND_PAY, UNKNOWN_WALLET_TRANSACTION_TYPE, WALLET_CARD, YOUTUBE_PURCHASE)

### CasesWorkflow
* CasesWorkflow `object`
  * hardwareOrderWorkflow [HardwareOrderWorkflow](#hardwareorderworkflow)
  * walletUnauthCharges [UnauthorizedChargesWorkflow](#unauthorizedchargesworkflow)

### Category
* Category `object`
  * isBaseline `boolean`
  * path [Path](#path)

### Category1
* Category1 `object`
  * isBaseline `boolean`
  * path [Path1](#path1)

### Category2
* Category2 `object`
  * nodes `array`
    * items [Node2](#node2)

### Category3
* Category3 `object`
  * nodes `array`
    * items [Node3](#node3)

### Category4
* Category4 `object`
  * nodes `array`
    * items [Node4](#node4)

### Category5
* Category5 `object`
  * nodes `array`
    * items [Node5](#node5)

### CategoryInfo
* CategoryInfo `object`
  * children `array`
    * items [CategoryInfo](#categoryinfo)
  * matchDetail [MatchDetail](#matchdetail)
  * name `string`
  * numChildren `integer`
  * pathIds `array`
    * items `integer`
  * pathNames `array`
    * items `string`

### CategoryPath
* CategoryPath `object`
  * pathIds `array`
    * items `integer`

### CategoryPath1
* CategoryPath1 `object`
  * nodes `array`
    * items `integer`

### ChannelCount
* ChannelCount `object`
  * channel `string` (values: ADOPTION, CHAT, EMAIL, GOAL, HANGOUT, INCENTIVE, MARKETING_EMAIL, MEETING, NOTE, PHONE, STUB, TRAX, UNKNOWN_EVENT_TYPE, WEB)
  * count `integer`

### Charge
* Charge `object`
  * chargeTime `string`
  * lineItems `array`
    * items [TransactionLineItem](#transactionlineitem)
  * localizedChargeTime [LocalizedTimestamp](#localizedtimestamp)
  * priceIncludesTax `boolean`
  * prorated `boolean`
  * totalAmount [Money](#money)

### Chat
* Chat `object`
  * chatPools `array`
    * items [ChatPool1](#chatpool1)

### Chat1
* Chat1 `object`
  * chatPools `array`
    * items [ChatPool2](#chatpool2)

### ChatMessage
* ChatMessage `object`
  * isAgent `boolean`
  * payload `string`
  * senderName `string`

### ChatPool
* ChatPool `object`
  * chatPoolId `string`
  * chatPoolName `string`

### ChatPool1
* ChatPool1 `object`
  * chatPoolId `string`
  * locale `string`

### ChatPool2
* ChatPool2 `object`
  * chatPoolId `string`
  * locale `string`

### ChatTransfer
* ChatTransfer `object`
  * sourceChatPool [ChatPool](#chatpool)
  * targetChatPool [ChatPool](#chatpool)

### CheckRedeemerRequest
* CheckRedeemerRequest `object`
  * activationNumber `string`
  * caseId `string`
  * emailToCheck `string`
  * redemptionCode `string`
  * ssoCookie `string`

### CheckRedeemerResponse
* CheckRedeemerResponse `object`
  * emailToCheck `string`
  * isRedeemer `boolean`

### CheckWalletAccountResponse
* CheckWalletAccountResponse `object`
  * hasValidWalletAccount `boolean`

### Cohort
* Cohort `object`
  * canonicalName `string`
  * displayName `string`
  * treatmentsId `string`

### Cohort1
* Cohort1 `object`
  * canonicalName `string`
  * displayName `string`
  * displayStateRestriction `string` (values: HIDE, NONE, SHOW, UNKNOWN_DISPLAY_STATE_RESTRICTION)

### Cohort2
* Cohort2 `object`
  * canonicalName `string`
  * displayName `string`
  * displayStateRestriction `string` (values: HIDE, NONE, SHOW, UNKNOWN_DISPLAY_STATE_RESTRICTION)
  * formId `string`
  * helpcenterName `string`
  * treatmentsId `string`

### CohortMetadataCollection
* CohortMetadataCollection `object`
  * cohort [Cohort](#cohort)
  * formMetadata [FormMetadata](#formmetadata)

### Communication
* Communication `object`
  * allowsCaseSplit `boolean`
  * attachments `array`
    * items [AttachmentInfo](#attachmentinfo)
  * authenticationInfo [AuthenticationInfo](#authenticationinfo)
  * caseId `string`
  * communicationId `string`
  * consultInfo [ConsultInfo](#consultinfo)
  * contentInfo [ContentInfo](#contentinfo)
  * draftInfo [DraftInfo](#draftinfo)
  * email [Email](#email)
  * escalationInfo [EscalationInfo](#escalationinfo)
  * form [Form](#form)
  * inResponseTo `string`
  * name `string`
  * note [Note](#note)
  * phoneInfo [PhoneInfo](#phoneinfo)
  * realTime [RealTime](#realtime)
  * recipients `array`
    * items [Identity](#identity)
  * routingInfo [RoutingInfo](#routinginfo)
  * sender [Identity](#identity)
  * source [Source](#source)
  * subject `string`
  * updateTime `string`

### CommunicationInfo
* CommunicationInfo `object`
  * lastClosedTime `string`
  * lastCommunicationTime `string`
  * lastIncomingEmailTime `string`
  * lastOutgoingCommunicationTime `string`
  * lastOutgoingEmailTime `string`
  * numCommunications `integer`
  * numConsults `integer`
  * numIncomingEmails `integer`
  * numOutgoingEmails `integer`

### ComponentData
* ComponentData `object`
  * components `array`
    * items [SubscriptionComponent](#subscriptioncomponent)

### ComponentToken
* ComponentToken `object`
  * token `string`

### ConsultAction
* ConsultAction `object`
  * consultDifm [DifmAction](#difmaction)
  * postConsultAnswerHelpCenter `string`
  * postConsultAnswerId `string`

### ConsultInfo
* ConsultInfo `object`

### ConsultSettings
* ConsultSettings `object`
  * topCategory [Category2](#category2)

### Contact
* Contact `object`
  * contactName `string`
  * emailAddress [EmailAddress](#emailaddress)

### ContactInfo
* ContactInfo `object`
  * callbackNumber [PhoneNumber](#phonenumber)
  * contactName `string`
  * emailAddress `string`

### ContentInfo
* ContentInfo `object`
  * bodyCrIds `array`
    * items `string`
  * footerCrIds `array`
    * items `string`
  * headerCrIds `array`
    * items `string`
  * helpcenterLinkIds `array`
    * items `string`

### CreateAgentActivityRequest
* CreateAgentActivityRequest `object`
  * agentActivity [AgentActivity](#agentactivity)

### CreateConsultNoteRequest
* CreateConsultNoteRequest `object`
  * body `string`
  * caseId `string`
  * inReplyTo `string`
  * isHtml `boolean`
  * subject `string`

### CreateConsultNoteResponse
* CreateConsultNoteResponse `object`
  * communication [Communication](#communication)

### CreateEmailRequest
* CreateEmailRequest `object`
  * afterSendSetting [AfterSendSetting](#aftersendsetting)
  * bccAddresses `array`
    * items `string`
  * body `string`
  * cannedResponseIds `array`
    * items `string`
  * caseId `string`
  * ccAddresses `array`
    * items `string`
  * footerIds `array`
    * items `string`
  * fromAddress `string`
  * headerIds `array`
    * items `string`
  * inReplyTo `string`
  * isHtml `boolean`
  * subject `string`
  * toAddresses `array`
    * items `string`

### CreateEmailResponse
* CreateEmailResponse `object`
  * communication [Communication](#communication)

### CreateExchangeWithoutReturnRequest
* CreateExchangeWithoutReturnRequest `object`
  * caseId `string`
  * device [LostStolenDevice](#loststolendevice)
  * shipment [LostStolenShipment](#loststolenshipment)
  * skipAddressValidation `boolean`
  * ssoCookie `string`
  * updatedAddress [MailingAddress](#mailingaddress)

### CreateExchangeWithoutReturnResponse
* CreateExchangeWithoutReturnResponse `object`
  * failureType `string` (values: FAILURE_TYPE_NOT_SET, FAILURE_TYPE_UNKNOWN, NOTES_INVALID, PHONE_NUMBER_INVALID, RMA_ALREADY_OPEN_FOR_ASSET, SHIPPING_ADDRESS_ADDRESSEE_INVALID, SHIPPING_ADDRESS_CITY_INVALID, SHIPPING_ADDRESS_COUNTRY_CODE_INVALID, SHIPPING_ADDRESS_INVALID, SHIPPING_ADDRESS_LINE_1_INVALID, SHIPPING_ADDRESS_LINE_2_INVALID, SHIPPING_ADDRESS_LINE_3_INVALID, SHIPPING_ADDRESS_POSTAL_CODE_INVALID, SHIPPING_ADDRESS_STATE_PROVINCE_CODE_INVALID, WALLET_ACCOUNT_REQUIRED)
  * failures `array`
    * items [RmaFailure](#rmafailure)
  * rmaNumber `array`
    * items `string`

### CreateFromHelpCenterDeepLinkRequest
* CreateFromHelpCenterDeepLinkRequest `object`
  * caseId `string`
  * url `string`

### CreateNewCaseRequest
* CreateNewCaseRequest `object`

### CreateNewCaseResponse
* CreateNewCaseResponse `object`
  * case [Case](#case)

### CreateNoteConsultCaseRequest
* CreateNoteConsultCaseRequest `object`
  * attachments `array`
    * items [Attachment](#attachment)
  * attributes `array`
    * items [Attribute1](#attribute1)
  * body `string`
  * consultFormId `string`
  * formFields `array`
    * items [FormField1](#formfield1)
  * issueCategory [Category3](#category3)
  * subject `string`
  * targetCaseCategories `array`
    * items [Category3](#category3)
  * targetTeamId `string`

### CreateNoteConsultCaseResponse
* CreateNoteConsultCaseResponse `object`
  * targetCaseId `string`

### CreateNoteRequest
* CreateNoteRequest `object`
  * body `string`
  * cannedResponseIds `array`
    * items `string`
  * caseId `string`
  * isHtml `boolean`
  * noteType `string` (values: PHONE, UNKNOWN_NOTE_TYPE, USER)
  * subject `string`

### CreateNoteResponse
* CreateNoteResponse `object`
  * communication [Communication](#communication)

### CreatePitchResponse
* CreatePitchResponse `object`
  * opportunityId `string`
  * pitchId [PitchId](#pitchid)
  * status [Status](#status)

### CreateRealTimeConsultCaseRequest
* CreateRealTimeConsultCaseRequest `object`
  * attachments `array`
    * items [Attachment1](#attachment1)
  * attributes `array`
    * items [Attribute1](#attribute1)
  * body `string`
  * chatPoolId `string`
  * consultFormId `string`
  * formFields `array`
    * items [FormField2](#formfield2)
  * issueCategory [Category4](#category4)
  * subject `string`
  * targetCaseCategories `array`
    * items [Category4](#category4)

### CreateRealTimeConsultCaseResponse
* CreateRealTimeConsultCaseResponse `object`
  * targetCaseId `string`

### CreateTroubleshooterSessionRequest
* CreateTroubleshooterSessionRequest `object`
  * caseId `string`
  * issueId `string`
  * ssoCookie `string`

### CreateWorkflowRequest
* CreateWorkflowRequest `object`
  * workflow [CasesWorkflow](#casesworkflow)

### CreditCard
* CreditCard `object`
  * billingName `string`
  * billingPostalCode `string`
  * cardNumberSuffix `string`
  * creditCardToken `string`
  * creditCardType [CreditCardType](#creditcardtype)

### CreditCard1
* CreditCard1 `object`
  * creditCardSuffix `string`
  * creditCardType `string` (values: AMEX, CARTES_BANCAIRES, DISCOVER, JCB, MASTERCARD, UKNOWN_AUTHENTICATION_CARD_TYPE, VISA)
  * creditCardTypeToken `string`

### CreditCardType
* CreditCardType `object`
  * backgroundUrl `string`
  * creditCardTypeToken `string`
  * description `string`
  * displayName `string`
  * logoUrl `string`

### Customer
* Customer `object`
  * attributeMap `object`
  * authentication [Authentication](#authentication)
  * cohorts `array`
    * items [Cohort1](#cohort1)
  * contact [ContactInfo](#contactinfo)
  * gaiaAccountStatus `string` (values: ACTIVE, DELETED, DISABLED, INVALID, PURGED, UNKNOWN_GAIA_ACCOUNT_STATUS)
  * profileImageUrl `string`
  * timezone [Timezone](#timezone)

### CustomerAnswer
* CustomerAnswer `object`
  * bankAccount [BankAccount1](#bankaccount1)
  * creditCard [CreditCard1](#creditcard1)
  * dcb [Dcb](#dcb)
  * paypal [Paypal1](#paypal1)
  * phoneNumber [PhoneNumber](#phonenumber)
  * playBalance [Money](#money)
  * postalCode `string`
  * questionToken `string`
  * walletBalance [Money](#money)

### CustomerDocsSubmissionStatus
* CustomerDocsSubmissionStatus `object`
  * hasSubmittedDocs `boolean`
  * submitTime `string`

### CustomerIssue
* CustomerIssue `object`
  * description `string`
  * displayName `string`
  * issueFailures `array`
    * items [IssueFailure](#issuefailure)
  * issueId `string`
  * issueStatus `string` (values: FAIL, ISSUE_STATUS_UNSPECIFIED, NOT_RUN, PASS)
  * rank `number`

### Date
* Date `object`
  * day `integer`
  * month `integer`
  * year `integer`

### Dcb
* Dcb `object`
  * phoneNumber `string`

### DeauthenticateRequest
* DeauthenticateRequest `object`
  * customerEmail `string`

### DeauthenticateResponse
* DeauthenticateResponse `object`
  * customer [Customer](#customer)

### DedupeRequest
* DedupeRequest `object`
  * duplicateCaseIds `array`
    * items `string`
  * reason `string`

### DedupeResponse
* DedupeResponse `object`
  * case [Case](#case)

### DeliveryInfo
* DeliveryInfo `object`
  * deliveryStatus `string` (values: FAILED, NOT_SCHEDULED, PENDING, SENT, UNKNOWN_DELIVERY_STATUS)

### DesktopScreenshareAcceptEvent
* DesktopScreenshareAcceptEvent `object`

### DesktopScreenshareAutoDeclineEvent
* DesktopScreenshareAutoDeclineEvent `object`
  * declineType `string` (values: NOT_SUPPORTED, UNKNOWN_AUTO_DECLINE_TYPE)

### DesktopScreenshareCancelEvent
* DesktopScreenshareCancelEvent `object`

### DesktopScreenshareCleanupEvent
* DesktopScreenshareCleanupEvent `object`

### DesktopScreenshareConnectEvent
* DesktopScreenshareConnectEvent `object`

### DesktopScreenshareDeclineEvent
* DesktopScreenshareDeclineEvent `object`

### DesktopScreenshareDisconnectEvent
* DesktopScreenshareDisconnectEvent `object`

### DesktopScreenshareEndEvent
* DesktopScreenshareEndEvent `object`
  * agentEnded `boolean`

### DesktopScreenshareEvent
* DesktopScreenshareEvent `object`
  * acceptEvent [DesktopScreenshareAcceptEvent](#desktopscreenshareacceptevent)
  * autoDeclineEvent [DesktopScreenshareAutoDeclineEvent](#desktopscreenshareautodeclineevent)
  * cancelEvent [DesktopScreenshareCancelEvent](#desktopscreensharecancelevent)
  * cleanupEvent [DesktopScreenshareCleanupEvent](#desktopscreensharecleanupevent)
  * connectEvent [DesktopScreenshareConnectEvent](#desktopscreenshareconnectevent)
  * declineEvent [DesktopScreenshareDeclineEvent](#desktopscreensharedeclineevent)
  * disconnectEvent [DesktopScreenshareDisconnectEvent](#desktopscreensharedisconnectevent)
  * endEvent [DesktopScreenshareEndEvent](#desktopscreenshareendevent)
  * initiateEvent [DesktopScreenshareInitiateEvent](#desktopscreenshareinitiateevent)
  * invitationId `string`
  * inviteEvent [DesktopScreenshareInviteEvent](#desktopscreenshareinviteevent)
  * joinEvent [DesktopScreenshareJoinEvent](#desktopscreensharejoinevent)
  * leaveEvent [DesktopScreenshareLeaveEvent](#desktopscreenshareleaveevent)
  * receivedEvent [DesktopScreenshareReceivedEvent](#desktopscreensharereceivedevent)
  * revivedEvent [DesktopScreenshareRevivedEvent](#desktopscreensharerevivedevent)
  * startingConnectEvent [DesktopScreenshareStartingConnectEvent](#desktopscreensharestartingconnectevent)

### DesktopScreenshareInitiateEvent
* DesktopScreenshareInitiateEvent `object`
  * screensharingState `string` (values: SUPPORTED, UNKNOWN, UNKNOWN_SCREENSHARING_STATE, UNSUPPORTED)

### DesktopScreenshareInviteEvent
* DesktopScreenshareInviteEvent `object`

### DesktopScreenshareJoinEvent
* DesktopScreenshareJoinEvent `object`
  * agentJoined `boolean`

### DesktopScreenshareLeaveEvent
* DesktopScreenshareLeaveEvent `object`
  * agentLeft `boolean`

### DesktopScreenshareReceivedEvent
* DesktopScreenshareReceivedEvent `object`

### DesktopScreenshareRevivedEvent
* DesktopScreenshareRevivedEvent `object`

### DesktopScreenshareStartingConnectEvent
* DesktopScreenshareStartingConnectEvent `object`

### Device
* Device `object`
  * actions `array`
    * items `string` (values: ADVANCED_EXCHANGE, EXCHANGE, EXCHANGE_WITHOUT_RETURN, REPAIR, RETURN, UNKNOWN_ACTION, WARRANTY_REFUND)
  * countryOfPurchase `string`
  * deviceClass `string` (values: CHROMEBOOK, UNKNOWN_DEVICE_CLASS)
  * deviceId `string`
  * displayName `string`
  * doaEndDate `string`
  * doaExpired `boolean`
  * exchangeGpn `string`
  * extendedWarrantyActive `boolean`
  * extendedWarrantyContractId `string`
  * extendedWarrantyEndDate `string`
  * extendedWarrantyExpired `boolean`
  * gpn `string`
  * hashedFullDeviceId `string`
  * noRmaTypeReason `string` (values: CONVERTED_TO_DASH_R, GOOGLE_SHOPPING_EXPRESS, NO_DATA_AVAILABLE, NO_LONGER_SUPPORTED, NO_RMA_REASON_SET, UNKNOWN_NO_RMA_REASON, UNSUPPORTED_3PR_DEVICE, WALK_IN_CENTERS_ONLY)
  * orderNumber `string`
  * pointOfPurchase `string` (values: BULK_ORDER, EVENT_GIVEAWAY, GOOGLER_GIFT, GOOGLE_PLAY, RETAIL, UNKNOWN_POINT_OF_PURCHASE)
  * purchaseDate `string`
  * remorseEndDate `string`
  * remorseExpired `boolean`
  * replacementDevices `array`
    * items [ReplacementDevice](#replacementdevice)
  * rmaTypes `array`
    * items [RmaType](#rmatype)
  * rmas `array`
    * items [DeviceRma](#devicerma)
  * shipDate `string`
  * shipmentId `string`
  * supportedBy3pr `boolean`
  * warrantyEndDate `string`
  * warrantyExpired `boolean`

### Device1
* Device1 `object`
  * action `string` (values: ADVANCED_EXCHANGE, EXCHANGE, EXCHANGE_WITHOUT_RETURN, REPAIR, RETURN, RMA_ACTION_NOT_SET, WARRANTY_REFUND)
  * deviceId `string`
  * displayName `string`
  * hashedFullDeviceId `string`
  * rmaNumber `string`
  * state `string` (values: RMA_CANCELLED, RMA_COMPLETED, RMA_INCOMPLETE, RMA_PENDING, RMA_STATE_NOT_SET, RMA_SUBMITTED)

### Device2
* Device2 `object`
  * androidId `string`
  * displayName `string`
  * imei `string`
  * lastUsedTime `string`
  * manufacturer `string`
  * modelName `string`
  * registrationTime `string`

### DeviceRma
* DeviceRma `object`
  * authHold `boolean`
  * availableFlows `array`
    * items `string` (values: GENERATE_PACKING_LABEL, GENERATE_REPLACEMENT_CART_LINK, GENERATE_SHIPPING_LABEL, SUBMIT_RMA, UNKNOWN_FLOW, UPDATE_ADDRESS_AND_SEND_SHIPPING_EMAIL)
  * cancelable `boolean`
  * identifier [RmaIdentifier](#rmaidentifier)
  * state `string` (values: RMA_CANCELLED, RMA_COMPLETED, RMA_INCOMPLETE, RMA_PENDING, RMA_SUBMITTED, UNKNOWN_RMA_STATE)

### DifmAction
* DifmAction `object`
  * difmId `integer`

### DirectCarrierBilling
* DirectCarrierBilling `object`
  * phoneNumber `string`

### DiscardDraftRequest
* DiscardDraftRequest `object`
  * caseId `string`

### DiscardDraftResponse
* DiscardDraftResponse `object`

### Docid
* Docid `object`
  * backend `string`
  * backendDocid `string`
  * type `string` (values: ANDROID_APK, ANDROID_APP, ANDROID_DEVELOPER, ANDROID_DYNAMIC_MODULE, ANDROID_IN_APP_ITEM, APK, APPS_RECS_TOPIC_METADATA, APPS_TOPIC, BADGE, BADGE_CONTAINER, BOOKS_EDITORIAL_ARTICLE, BOOKS_EXPLORE_ANNOUNCEMENT, BOOKS_EXPLORE_NEWSSTAND_POST, BOOKS_EXPLORE_YOUTUBE_VIDEO, BUNDLE, CHROME_APP, CLUSTER, CONTAINER, DOCUMENT_TYPE_UNSPECIFIED, DYNAMIC_ANDROID_IN_APP_ITEM, DYNAMIC_SUBSCRIPTION, EDITORIAL, ENTERTAINMENT_STORY, HARDWARE, HARDWARE_PROMOTION, HARDWARE_SHIPPING, LINK, MAGAZINE, MAGAZINE_ISSUE, MOVIES_PERSISTED_CLUSTER, MOVIE_PERSON, MUSIC_ACCESS, MUSIC_ADAPTIVE_HOME_CARD_IMAGE, MUSIC_ALBUM, MUSIC_ARTIST, MUSIC_AUDIO_AD, MUSIC_BROWSE_CATEGORY, MUSIC_CONCERT, MUSIC_NOW_MODULE_HEADING, MUSIC_PODCAST_EPISODE, MUSIC_PODCAST_SERIES, MUSIC_SITUATION, MUSIC_SONG, MUSIC_STATION, MUSIC_USER_PLAYLIST, MUSIC_VENUE, NEWS_EDITION, NEWS_ISSUE, OCEAN_AUDIOBOOK, OCEAN_AUTHOR, OCEAN_BOOK, OCEAN_BOOK_SERIES, PERSON, PLAY_BALANCE_TOP_UP, PLAY_STORED_VALUE, STREAM, SUBSCRIPTION, SUGGEST_CONTAINER, TALENT, TOPIC, TV_BROADCASTER, TV_EPISODE, TV_SEASON, TV_SHOW, VETTED_APP_FEATURE, VIDEO_DISTRIBUTOR, VOUCHER, YOUTUBE_MOVIE)

### DraftInfo
* DraftInfo `object`
  * transitionToState `string` (values: ASSIGNED, BLOCKED_BY, FINISHED, IN_CONSULT, NEED_INFO, NEW, SOLUTION_OFFERED, UNASSIGNED, UNKNOWN_CASE_STATE)

### Duplicate
* Duplicate `object`
  * sourceCaseId `string`
  * targetCaseId `string`

### EasterEggSettings
* EasterEggSettings `object`
  * disableBoostCard `boolean`

### Email
* Email `object`
  * body `string`
  * deliveryInfo [DeliveryInfo](#deliveryinfo)
  * headers [Headers](#headers)
  * isHtml `boolean`
  * type `string` (values: NEW, REPLY, REPLY_ALL, UNKNOWN_EMAIL_TYPE)

### Email1
* Email1 `object`
  * sla `string`

### Email2
* Email2 `object`
  * locale `array`
    * items `string`
  * sla `string`

### EmailAddress
* EmailAddress `object`
  * type `string` (values: EXTERNAL, PERSONAL_ALIAS, PRODUCT_ALIAS, TEAM_ALIAS, UNKNOWN_EMAIL_ADDRESS_TYPE)
  * value `string`

### EmploymentInfo
* EmploymentInfo `object`
  * employmentType `string`
  * location `string`
  * tvcStaffingPartner `string`

### Empty
* Empty `object`

### Entitlement
* Entitlement `object`
  * actions `array`
    * items `string` (values: CANCELABLE, ENTITLEMENT_ACTIONS_UNKNOWN, REVOKABLE)
  * badges `array`
    * items [EntitlementBadge](#entitlementbadge)
  * billingBackend `string` (values: BILLING, CDP, PAYMENT_BACKEND_UNDEFINED)
  * billingPeriod [Period](#period)
  * cancelTime `string`
  * componentData [ComponentData](#componentdata)
  * customerTimezone `string`
  * entitlementToken `string`
  * hasFuturePayments `boolean`
  * inFreeTrial `boolean`
  * isActive `boolean`
  * isCancelable `boolean`
  * isRevokable `boolean`
  * localizedCancelTime [LocalizedTimestamp](#localizedtimestamp)
  * localizedPurchaseTime [LocalizedTimestamp](#localizedtimestamp)
  * name `string`
  * orderId `string`
  * productType `string` (values: BUNDLE, LIVE_EVENT, MOVIE, PRODUCT_TYPE_UNKNOWN, RED, SEASON, SHOW, UNPLUGGED)
  * purchaseTime `string`
  * redSignals [RedSignals](#redsignals)
  * shmoovieSignals [ShmoovieSignals](#shmooviesignals)
  * state `string` (values: ACTIVE_NOT_RENEWING, ACTIVE_RENEWING, ENTITLEMENT_STATE_ERROR, ENTITLEMENT_STATE_UNKNOWN, INACTIVE)
  * unpluggedSignals [UnpluggedSignals](#unpluggedsignals)
  * url `string`
  * utcOffset `string`

### EntitlementBadge
* EntitlementBadge `object`
  * type `string` (values: FAMILY_HEAD, FAMILY_MEMBER, FREE_TRIAL, GRACE_PERIOD, IN_FREE_TRIAL, IOS, UNDEFINED)

### EntitlementComponent
* EntitlementComponent `object`
  * accessExpiryTime `string`
  * accessStartTime `string`
  * actions `array`
    * items `string` (values: CANCELABLE, ENTITLEMENT_ACTIONS_UNKNOWN, REVOKABLE)
  * cancelTime `string`
  * componentToken `string`
  * entitlementId `string`
  * hasFuturePayments `boolean`
  * introductoryPrice [Money](#money)
  * isActive `boolean`
  * isBasePackage `boolean`
  * isCancelable `boolean`
  * isRevokable `boolean`
  * itemId `string`
  * lineItemKey `array`
    * items `string`
  * localizedAccessExpiryTime [LocalizedTimestamp](#localizedtimestamp)
  * localizedAccessStartTime [LocalizedTimestamp](#localizedtimestamp)
  * localizedCancelTime [LocalizedTimestamp](#localizedtimestamp)
  * localizedTrialEndTime [LocalizedTimestamp](#localizedtimestamp)
  * monthlyPrice [Money](#money)
  * state `string` (values: ACTIVE_NOT_RENEWING, ACTIVE_RENEWING, ENTITLEMENT_STATE_ERROR, ENTITLEMENT_STATE_UNKNOWN, INACTIVE)
  * title `string`
  * trialEndTime `string`
  * trialPeriod [Period](#period)

### Entry
* Entry `object`
  * boolValue `boolean`
  * doubleValue `number`
  * enumValue `string`
  * int64Value `string`
  * intValue `integer`
  * sources `array`
    * items [Source](#source)
  * stringValue `string`
  * timeValue `string`

### EnumValue
* EnumValue `object`
  * displayValue `string`
  * value `string`

### EscalateRequest
* EscalateRequest `object`
  * escalationId `string`
  * locale `string`
  * productId `string`
  * reason `string`

### EscalateResponse
* EscalateResponse `object`
  * case [Case](#case)

### EscalateSettings
* EscalateSettings `object`

### EscalationInfo
* EscalationInfo `object`
  * agentTransfer [AgentTransfer](#agenttransfer)
  * chatTransfer [ChatTransfer](#chattransfer)
  * escalationTargetName `string`
  * localeTransfer [LocaleTransfer](#localetransfer)

### EscalationTarget
* EscalationTarget `object`
  * chat [Chat](#chat)
  * email [Email1](#email1)
  * targetId `string`
  * targetName `string`

### ExtendedWarrantyInfo
* ExtendedWarrantyInfo `object`
  * contractId `string`
  * lineItemId `integer`
  * price [Money](#money)

### ExternalToolSettings
* ExternalToolSettings `object`
  * accountLookupTools `array`
    * items [AccountLookupTool](#accountlookuptool)

### FinalizeConsultNoteRequest
* FinalizeConsultNoteRequest `object`
  * caseId `string`

### FinalizeConsultNoteResponse
* FinalizeConsultNoteResponse `object`
  * communication [Communication](#communication)

### FinalizeNoteRequest
* FinalizeNoteRequest `object`
  * caseId `string`

### FinalizeNoteResponse
* FinalizeNoteResponse `object`
  * communication [Communication](#communication)

### FinishRequest
* FinishRequest `object`

### FinishResponse
* FinishResponse `object`
  * case [Case](#case)

### FocusInfo
* FocusInfo `object`
  * profileImageUrl `string`

### Form
* Form `object`

### FormField
* FormField `object`
  * label `string`
  * name `string`
  * values `array`
    * items [FormFieldValue](#formfieldvalue)

### FormField1
* FormField1 `object`
  * formFieldDisplayValues `array`
    * items [FormFieldValue1](#formfieldvalue1)
  * formFieldLabel `string`
  * formFieldName `string`
  * formFieldValues `array`
    * items `string`

### FormField2
* FormField2 `object`
  * formFieldDisplayValues `array`
    * items [FormFieldValue2](#formfieldvalue2)
  * formFieldLabel `string`
  * formFieldName `string`
  * formFieldValues `array`
    * items `string`

### FormFieldValue
* FormFieldValue `object`
  * displayValue `string`
  * value `string`

### FormFieldValue1
* FormFieldValue1 `object`
  * displayValue `string`
  * value `string`

### FormFieldValue2
* FormFieldValue2 `object`
  * displayValue `string`
  * value `string`

### FormMetadata
* FormMetadata `object`
  * formFields `array`
    * items [FormField](#formfield)
  * formId `string`
  * helpcenterName `string`

### GetAccountReviewStatusRequest
* GetAccountReviewStatusRequest `object`
  * caseId `string`
  * reviewKey [ReviewKey](#reviewkey)
  * ssoCookie `string`

### GetAccountReviewStatusResponse
* GetAccountReviewStatusResponse `object`
  * reviewAction `string` (values: REVIEW_FIX_ACTION_UNSPECIFIED)
  * reviewKey [ReviewKey](#reviewkey)
  * reviewState `string` (values: ASSIGNED, CLOSED, REVIEW_STATE_UNSPECIFIED, UNASSIGNED, UNKNOWN_REVIEW_STATE)

### GetAccountSignalsResponse
* GetAccountSignalsResponse `object`
  * results `array`
    * items [AccountSignalResult](#accountsignalresult)

### GetAgentSearchCountResponse
* GetAgentSearchCountResponse `object`
  * searchCounts `array`
    * items [SearchCount](#searchcount)

### GetAgentUnreadCasesInfoResponse
* GetAgentUnreadCasesInfoResponse `object`
  * agentUnreadCasesInfo [AgentUnreadCasesInfo](#agentunreadcasesinfo)

### GetAuthenticationCreditCardTypesRequest
* GetAuthenticationCreditCardTypesRequest `object`
  * customerEmail `string`

### GetAuthenticationCreditCardTypesResponse
* GetAuthenticationCreditCardTypesResponse `object`
  * authenticationCreditCards `array`
    * items [AuthenticationCreditCard](#authenticationcreditcard)
  * creditCardTypes `array`
    * items `string` (values: AMEX, CARTES_BANCAIRES, DISCOVER, JCB, MASTERCARD, UKNOWN_AUTHENTICATION_CARD_TYPE, VISA)

### GetAuthenticationQuestionsRequest
* GetAuthenticationQuestionsRequest `object`
  * agentSsoCookie `string`
  * customerEmail `string`

### GetAuthenticationQuestionsResponse
* GetAuthenticationQuestionsResponse `object`
  * questionSets `array`
    * items [QuestionSet](#questionset)

### GetAuthenticationResultRequest
* GetAuthenticationResultRequest `object`
  * agentSsoCookie `string`
  * customerEmail `string`

### GetAuthenticationResultResponse
* GetAuthenticationResultResponse `object`
  * result `string` (values: FAIL, PASS, PENDING, UNKNOWN_RESULT)

### GetBusinessListingsRequest
* GetBusinessListingsRequest `object`
  * emailAddress `string`

### GetBusinessListingsResponse
* GetBusinessListingsResponse `object`
  * listings `array`
    * items [Business](#business)

### GetByDeviceIdResponse
* GetByDeviceIdResponse `object`
  * device [Device](#device)

### GetCancellationStatusRequest
* GetCancellationStatusRequest `object`
  * caseId `string`
  * ssoCookie `string`

### GetCancellationStatusResponse
* GetCancellationStatusResponse `object`
  * reason `string` (values: CANCEL_REASON_ACCIDENTAL_PURCHASE, CANCEL_REASON_DEFECTIVE, CANCEL_REASON_DID_NOT_RECEIVE, CANCEL_REASON_FRAUD, CANCEL_REASON_FRIENDLY_FRAUD, CANCEL_REASON_REMORSE, CANCEL_REASON_UNSPECIFIED)
  * subscription [Subscription](#subscription)

### GetConsultSlaRequest
* GetConsultSlaRequest `object`
  * channel `string` (values: NOTE, UNKNOWN_CHANNEL)
  * consultFormId `string`
  * dynamicAttributes `array`
    * items [Attribute1](#attribute1)
  * issueCategory [Category5](#category5)
  * targetCaseCategories `array`
    * items [Category5](#category5)

### GetConsultSlaResponse
* GetConsultSlaResponse `object`
  * dueByDuration `string`

### GetCustomerSummaryRequest
* GetCustomerSummaryRequest `object`
  * caseId `string`
  * disableEventHistory `boolean`
  * email `string`
  * historyCutoff `string`
  * lastNumberDays `string`
  * pageSize `integer`
  * pageToken `string`
  * productTypes `array`
    * items `string` (values: BUNDLE, LIVE_EVENT, MOVIE, PRODUCT_TYPE_UNKNOWN, RED, SEASON, SHOW, UNPLUGGED)
  * ssoCookie `string`

### GetCustomerSummaryResponse
* GetCustomerSummaryResponse `object`
  * cancelHistory `array`
    * items [CancelHistorySummaryInfo](#cancelhistorysummaryinfo)
  * entitlements `array`
    * items [Entitlement](#entitlement)
  * hasOneTimeContentPurchase `boolean`
  * nextPageToken `string`
  * offsetFromUtc `number`
  * oneTimeContentPurchaseCount `integer`
  * refundHistory `array`
    * items [RefundHistorySummaryInfo](#refundhistorysummaryinfo)
  * timezone `string`

### GetEscalationTargetsResponse
* GetEscalationTargetsResponse `object`
  * escalationTargets `array`
    * items [EscalationTarget](#escalationtarget)

### GetHardwareOrderDetailRequest
* GetHardwareOrderDetailRequest `object`
  * caseId `string`
  * ssoTicket `string`

### GetHardwareSignalsRequest
* GetHardwareSignalsRequest `object`
  * caseId `string`

### GetHardwareSignalsResponse
* GetHardwareSignalsResponse `object`
  * hasStandardExchange `boolean`

### GetLostStolenEligibilityRequest
* GetLostStolenEligibilityRequest `object`
  * caseId `string`
  * ssoTicket `string`

### GetLostStolenRefundEligibilityRequest
* GetLostStolenRefundEligibilityRequest `object`
  * caseId `string`
  * ssoTicket `string`

### GetMailingAddressRequest
* GetMailingAddressRequest `object`
  * caseId `string`
  * isRequiredAction `boolean`
  * ssoTicket `string`

### GetMyAssignStreamSearchesResponse
* GetMyAssignStreamSearchesResponse `object`
  * searches `array`
    * items [Search](#search)
  * teams `array`
    * items [Team](#team)

### GetOneTimePurchasesRequest
* GetOneTimePurchasesRequest `object`
  * caseId `string`
  * email `string`
  * pageSize `integer`
  * pageToken `string`
  * ssoCookie `string`

### GetOneTimePurchasesResponse
* GetOneTimePurchasesResponse `object`
  * nextPageToken `string`
  * purchases `array`
    * items [Purchase](#purchase)

### GetOrdersRequest
* GetOrdersRequest `object`
  * caseId `string`
  * customerEmail `string`
  * finskyPurchaseIds `array`
    * items `string`
  * locale `string`
  * ssoCookie `string`

### GetOrdersResponse
* GetOrdersResponse `object`
  * orders `array`
    * items [Order](#order)

### GetPaymentMethodHijackReviewsStatusRequest
* GetPaymentMethodHijackReviewsStatusRequest `object`
  * caseId `string`
  * reviewKeys `array`
    * items [ReviewKey](#reviewkey)
  * ssoCookie `string`

### GetPaymentMethodHijackReviewsStatusResponse
* GetPaymentMethodHijackReviewsStatusResponse `object`
  * allTransactions `array`
    * items [TransactionsSummary](#transactionssummary)
  * alreadyRefundedTransactions `array`
    * items [TransactionsSummary](#transactionssummary)
  * chargedBackTransactions `array`
    * items [TransactionsSummary](#transactionssummary)
  * newlyRefundedTransactions `array`
    * items [TransactionsSummary](#transactionssummary)
  * notFoundTransactions `array`
    * items [PaymentMethodHijackTransaction](#paymentmethodhijacktransaction)
  * notRefundedTransactions `array`
    * items [PaymentMethodHijackTransaction](#paymentmethodhijacktransaction)
  * resolvedTransactions `array`
    * items [TransactionsSummary](#transactionssummary)
  * reviewAgentLdaps `array`
    * items `string`
  * reviewKeys `array`
    * items [ReviewKey](#reviewkey)
  * state `string` (values: ASSIGNED, CLOSED, REVIEW_STATE_UNSPECIFIED, UNASSIGNED, UNKNOWN_REVIEW_STATE)
  * underReviewTransactions `array`
    * items [TransactionsSummary](#transactionssummary)

### GetPaymentsInfoRequest
* GetPaymentsInfoRequest `object`
  * agentSso `string`
  * caseId `string`

### GetPaymentsInfoResponse
* GetPaymentsInfoResponse `object`
  * paymentsInfo [PaymentsInfo](#paymentsinfo)

### GetPhoneSettingResponse
* GetPhoneSettingResponse `object`
  * phoneSetting [PhoneSetting](#phonesetting)

### GetRefundStatusRequest
* GetRefundStatusRequest `object`
  * caseId `string`
  * ssoCookie `string`

### GetRefundStatusResponse
* GetRefundStatusResponse `object`
  * approvedOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * approvedOrders `array`
    * items [Order](#order)
  * escalateOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * escalateOrders `array`
    * items [Order](#order)
  * failedOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * failedOrders `array`
    * items [Order](#order)
  * inProgress `boolean`
  * inProgressOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * inProgressOrders `array`
    * items [Order](#order)
  * optionalEscalateOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * optionalEscalateOrders `array`
    * items [Order](#order)
  * processLaterOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * processLaterOrders `array`
    * items [Order](#order)
  * refundReason `string` (values: ACCIDENTAL_PURCHASE, DEFECTIVE, DID_NOT_RECEIVE, FRAUD, FRIENDLY_FRAUD, REFUND_REASON_UNSPECIFIED, REMORSE)
  * rejectedOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * rejectedOrders `array`
    * items [Order](#order)
  * sidewinderRejectedOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)

### GetReplacementDetailRequest
* GetReplacementDetailRequest `object`
  * caseId `string`
  * ssoTicket `string`

### GetRmaOrderDetailRequest
* GetRmaOrderDetailRequest `object`
  * caseId `string`
  * ssoTicket `string`

### GetRoutingTargetsResponse
* GetRoutingTargetsResponse `object`
  * products `array`
    * items [Product2](#product2)

### GetShippingAddressRequest
* GetShippingAddressRequest `object`
  * caseId `string`
  * isRequiredAction `boolean`
  * ssoTicket `string`

### GetShippingCustomerNameRequest
* GetShippingCustomerNameRequest `object`
  * caseId `string`
  * ssoTicket `string`

### GetShippingCustomerPhoneNumberRequest
* GetShippingCustomerPhoneNumberRequest `object`
  * caseId `string`
  * ssoTicket `string`

### GetSubscriptionsRequest
* GetSubscriptionsRequest `object`
  * caseId `string`
  * customerEmail `string`
  * locale `string`
  * ssoCookie `string`
  * subscriptionIds `array`
    * items `string`

### GetSubscriptionsResponse
* GetSubscriptionsResponse `object`
  * subscriptions `array`
    * items [Subscription](#subscription)

### GiftCard
* GiftCard `object`
  * activationNumber `string`
  * amount [Money](#money)
  * redemptionDate [Date](#date)
  * redemptionToken [RedemptionToken](#redemptiontoken)
  * status `string` (values: ACTIVATED, CANCELED, CREATED, EXPIRED, GIFT_CARD_STATUS_UNSPECIFIED, REDEEMED)

### HardwareDiscount
* HardwareDiscount `object`
  * description `string`
  * totalAmount [Money](#money)

### HardwareId
* HardwareId `object`
  * esn `string`
  * imei `string`
  * macAddress `string`
  * meid `string`
  * serialNumber `string`
  * unknown `string`

### HardwareOrderDetail
* HardwareOrderDetail `object`
  * hasRefund `boolean`
  * orderId `string`
  * orderTime `string`
  * shipments `array`
    * items [HardwareShipment](#hardwareshipment)
  * taxAmount [Money](#money)
  * totalAmount [Money](#money)
  * totalAmountExcludingTax [Money](#money)

### HardwareOrderLineItem
* HardwareOrderLineItem `object`
  * description `string`
  * discounts `array`
    * items [HardwareDiscount](#hardwarediscount)
  * extendedWarrantyInfo [ExtendedWarrantyInfo](#extendedwarrantyinfo)
  * finskyLineNumber `integer`
  * hardwareId [HardwareId](#hardwareid)
  * hasRefund `boolean`
  * hashedFullHardwareId [HardwareId](#hardwareid)
  * lineItemId `string`
  * listPrice [Money](#money)
  * price [Money](#money)
  * productSku `string`
  * rmaInfo [RmaInfo](#rmainfo)
  * totalWithDiscountsWithoutTax [Money](#money)

### HardwareOrderLineItemRefund
* HardwareOrderLineItemRefund `object`
  * description `string`
  * hardwareId [HardwareId](#hardwareid)
  * lineItemId `string`
  * shipmentId `string`
  * shippingInfo [ShippingInfo](#shippinginfo)

### HardwareOrderListItem
* HardwareOrderListItem `object`
  * authHold `boolean`
  * orderId `string`
  * orderTime `string`
  * replacement `boolean`
  * rmaNumber `string`
  * summary `string`

### HardwareOrderRefund
* HardwareOrderRefund `object`

### HardwareOrderWorkflow
* HardwareOrderWorkflow `object`
  * hardwareShipmentInvestigation [HardwareShipmentInvestigation](#hardwareshipmentinvestigation)
  * state `string` (values: DEFAULT, IN_SHIPPING_SPECIALIST_CONSULT_FOR_LOST_STOLEN, SHIPPING_SPECIALIST_CONSULT_FOR_LOST_STOLEN_COMPLETE, STATE_UNSPECIFIED)

### HardwareRefund
* HardwareRefund `object`
  * lineItemRefund [HardwareOrderLineItemRefund](#hardwareorderlineitemrefund)
  * orderRefund [HardwareOrderRefund](#hardwareorderrefund)
  * paymentDetail [PaymentDetail](#paymentdetail)
  * refundActions `array`
    * items `string` (values: REFUND_ACTION_NOT_SET, SEND_REFUND_STATUS)
  * refundReason `string` (values: DELIVERY_RETURNED, EXTENDED_WARRANTY_CANCELATION, IN_BOX_ACCESSORIES, LOST_STOLEN, OTHER, PRICE_PROTECTION, REFUND_REASON_NOT_SET, RMA, SHIPPING, TAX_EXEMPT, UNDELIVERABLE)
  * refundRequestTime `string`
  * refundedTime `string`
  * shipmentRefund [HardwareShipmentRefund](#hardwareshipmentrefund)
  * status `string` (values: REFUNDED, REFUND_ERROR, REFUND_PENDING, REFUND_PENDING_RETURN, REFUND_PENDING_STUCK, STATUS_NOT_SET)
  * totalAmount [Money](#money)

### HardwareShipment
* HardwareShipment `object`
  * addressLastUpdated `string`
  * addressUpdateable `boolean`
  * authHold `boolean`
  * cancelInfo [CancelInfo](#cancelinfo)
  * financialStatus `string` (values: ABANDONED, ADDED, APPROVED, CANCELLED, CHARGED, CHARGED_BACK, CONFIRMED, DENIED, DISBURSED, EXPIRED, FAILED, FINANCIAL_STATUS_NOT_SET, INDETERMINATE, PENDING, REFUNDED, UNAVAILABLE, WAITING_FOR_CLIENT_RETRY)
  * lineItems `array`
    * items [HardwareOrderLineItem](#hardwareorderlineitem)
  * orderActions `array`
    * items `string` (values: CANCEL_EXTENDED_WARRANTY, CANCEL_ORDER, ESCALATE_CANCELED, HARDWARE_ORDER_ACTION_NOT_SET, INITIATE_RMA, INVESTIGATE_AUTH_HOLD, INVESTIGATE_CANCELED, INVESTIGATE_GOOGLE_FINANCING, INVESTIGATE_SHIPPING, REJECT_OR_RETURN, REVIEW_REFUND, REVIEW_RMA, REVIEW_RMA_REFUND, SEND_STATUS)
  * paymentDetail [PaymentDetail](#paymentdetail)
  * shipmentId `string`
  * shipmentNumber `integer`
  * shipmentState `string` (values: CANCEL, FC_TRANSFER, HARDWARE_SHIPMENT_STATE_NOT_SET, ON_HOLD_CHARGEABLE, ON_HOLD_QUANTITY, ON_HOLD_WAIT, READY_TO_SHIP, SENT, SHIPPED, SPLIT)
  * shippingInfo [ShippingInfo](#shippinginfo)
  * state `string` (values: CANCELED, HARDWARE_ORDER_STATE_NOT_SET, PROCESSING, SHIPPED)
  * stuckOrderAlert `string` (values: STUCK_INVENTORY, STUCK_ORDER_ALERT_NOT_SET, STUCK_PAYMENT, STUCK_PROCESSING, STUCK_TRANSIT)
  * totalAmount [Money](#money)

### HardwareShipmentInvestigation
* HardwareShipmentInvestigation `object`
  * isOrderFromStore `boolean`
  * issue `string`
  * orderId `string`
  * shipmentId `string`

### HardwareShipmentRefund
* HardwareShipmentRefund `object`
  * shipmentId `string`

### Headers
* Headers `object`
  * bccAddresses `array`
    * items `string`
  * ccAddresses `array`
    * items `string`
  * fromAddress `string`
  * inReplyTo `string`
  * subject `string`
  * toAddresses `array`
    * items `string`

### HelpCenterContent
* HelpCenterContent `object`
  * hcId `string`
  * helpCenter `string`
  * isPublic `boolean`
  * locale `string`
  * type `string` (values: ANSWER, TOPIC, TROUBLESHOOTER, UNKNOWN_CONTENT_TYPE, UNSUPPORTED_TYPE)
  * url `string`

### HelpCenterContent1
* HelpCenterContent1 `object`
  * contentId `string`
  * displayName `string`
  * helpCenter `string`
  * isPublic `boolean`
  * locale `string`
  * type `string` (values: ANSWER, TOPIC, TROUBLESHOOTER, UNKNOWN_CONTENT_TYPE, UNSUPPORTED_TYPE)
  * url `string`

### HelpCenterContent2
* HelpCenterContent2 `object`
  * hcId `string`
  * helpCenter `string`
  * isPublic `boolean`
  * locale `string`
  * type `string` (values: ANSWER, TOPIC, TROUBLESHOOTER, UNKNOWN_CONTENT_TYPE, UNSUPPORTED_TYPE)
  * url `string`

### HelpCenterContent3
* HelpCenterContent3 `object`
  * hcId `string`
  * helpCenter `string`
  * isPublic `boolean`
  * locale `string`
  * requirementTypes `array`
    * items `string` (values: INTERNET, OPERATE, REQUIREMENT_NOT_SET)
  * requirementsSnippetId `string`
  * title `string`
  * type `string` (values: ANSWER, TOPIC, TROUBLESHOOTER, UNKNOWN_CONTENT_TYPE, UNSUPPORTED_TYPE)
  * url `string`

### HelpCenterDeepLinkSource
* HelpCenterDeepLinkSource `object`

### Identity
* Identity `object`
  * displayName `string`
  * emailAddress `string`
  * profileImageUrl `string`
  * teamId `string`

### InitiatePaymentMethodHijackReviewsRequest
* InitiatePaymentMethodHijackReviewsRequest `object`
  * bankAccount [BankAccount](#bankaccount)
  * caseId `string`
  * creditCard [CreditCard](#creditcard)
  * dcb [DirectCarrierBilling](#directcarrierbilling)
  * instrumentIssuerToken `string`
  * paypal [Paypal](#paypal)
  * ssoCookie `string`
  * transactions `array`
    * items [PaymentMethodHijackTransaction](#paymentmethodhijacktransaction)

### InitiatePaymentMethodHijackReviewsResponse
* InitiatePaymentMethodHijackReviewsResponse `object`
  * result `string` (values: INITIATE_PAYMENT_METHOD_HIJACK_POSSIBLE_ACCOUNT_TAKEOVER, INITIATE_PAYMENT_METHOD_HIJACK_REVIEWS_CREATED, INITIATE_PAYMENT_METHOD_HIJACK_REVIEWS_NOT_FOUND, INITIATE_PAYMENT_METHOD_HIJACK_REVIEWS_NOT_UNIQUE, INITIATE_PAYMENT_METHOD_HIJACK_REVIEWS_RESOLVED, INITIATE_PAYMENT_METHOD_HIJACK_REVIEWS_RESULT_UNSPECIFIED)
  * reviewKeys `array`
    * items [ReviewKey](#reviewkey)

### Interaction
* Interaction `object`
  * caseData [CaseData](#casedata)
  * endTime `string`
  * eventTypes `array`
    * items `string` (values: ADOPTION, CHAT, EMAIL, GOAL, HANGOUT, INCENTIVE, MARKETING_EMAIL, MEETING, NOTE, PHONE, STUB, TRAX, UNKNOWN_EVENT_TYPE, WEB)
  * startTime `string`
  * summary `string`

### InteractionCount
* InteractionCount `object`
  * count `integer`
  * startTime `string`

### Issue
* Issue `object`
  * accounts `array`
    * items [Account](#account)
  * localeCode `string`
  * previewText `string`
  * product [Product](#product)
  * subProducts `array`
    * items [Product](#product)
  * summary `string`

### Issue1
* Issue1 `object`
  * categoryPath `string`
  * issueId `string`
  * partialCategoryPath `string`
  * title `string`
  * unresolvedDifmId `string`

### IssueCategoryAction
* IssueCategoryAction `object`
  * issueCategories `array`
    * items [CategoryPath1](#categorypath1)

### IssueCategorySettings
* IssueCategorySettings `object`
  * allowUncategorizedCases `boolean`
  * categoryRootName `string`
  * secondaryProductRequirementCategoryId `string`
  * subProductTopCategories `array`
    * items [Category2](#category2)
  * topCategory [Category2](#category2)

### IssueFailure
* IssueFailure `object`
  * difmId `string`
  * helpCenterContent [HelpCenterContent1](#helpcentercontent1)
  * reason `string`
  * reasonDescription `string`
  * supportLinks `array`
    * items [SupportLink](#supportlink)
  * targetId `string`
  * targetName `string`
  * targetType `string` (values: TARGET_TYPE_UNSPECIFIED, URL)

### LineItem
* LineItem `object`
  * description `string`
  * hardwareId `string`
  * hashedHardwareId `string`
  * productSku `string`
  * rmaAction `string` (values: ADVANCED_EXCHANGE, EXCHANGE, EXCHANGE_WITHOUT_RETURN, REPAIR, RETURN, UNKNOWN_ACTION, WARRANTY_REFUND)
  * rmaNumber `string`
  * unmaskedHardwareId `string`

### ListAgentActivitiesResponse
* ListAgentActivitiesResponse `object`
  * agentActivities `array`
    * items [AgentActivity](#agentactivity)
  * nextPageToken `string`

### ListAgentSettingsResponse
* ListAgentSettingsResponse `object`
  * agentSettings `array`
    * items [AgentSetting](#agentsetting)

### ListBankAccountCountriesRequest
* ListBankAccountCountriesRequest `object`
  * ssoCookie `string`

### ListBankAccountCountriesResponse
* ListBankAccountCountriesResponse `object`
  * bankAccountCountries `array`
    * items [BankAccountCountry](#bankaccountcountry)

### ListBillingAddressesRequest
* ListBillingAddressesRequest `object`
  * customerEmail `string`
  * ssoCookie `string`

### ListBillingAddressesResponse
* ListBillingAddressesResponse `object`
  * billingAddresses `array`
    * items [Address](#address)

### ListBuyersRemorseCountryCodesResponse
* ListBuyersRemorseCountryCodesResponse `object`
  * countryCodes `array`
    * items `string`

### ListCasesByAgentResponse
* ListCasesByAgentResponse `object`
  * cases `array`
    * items [Case](#case)
  * pageToken `string`
  * searchCount `integer`

### ListChildrenCategoryInfosResponse
* ListChildrenCategoryInfosResponse `object`
  * categoryInfos `array`
    * items [CategoryInfo](#categoryinfo)

### ListCommunicationsResponse
* ListCommunicationsResponse `object`
  * communications `array`
    * items [Communication](#communication)

### ListCreditCardTypesRequest
* ListCreditCardTypesRequest `object`
  * ssoCookie `string`

### ListCreditCardTypesResponse
* ListCreditCardTypesResponse `object`
  * creditCardTypes `array`
    * items [CreditCardType](#creditcardtype)

### ListCustomerIssuesResponse
* ListCustomerIssuesResponse `object`
  * customerIssues `array`
    * items [CustomerIssue](#customerissue)
  * supportLinks `array`
    * items [SupportLink](#supportlink)

### ListDevicesRequest
* ListDevicesRequest `object`
  * caseId `string`
  * ssoCookie `string`

### ListDevicesResponse
* ListDevicesResponse `object`
  * devices `array`
    * items [Device](#device)
  * nextPageToken `string`

### ListDevicesResponse1
* ListDevicesResponse1 `object`
  * devices `array`
    * items [Device2](#device2)

### ListHardwareOrdersRequest
* ListHardwareOrdersRequest `object`
  * caseId `string`
  * ssoTicket `string`

### ListHardwareOrdersResponse
* ListHardwareOrdersResponse `object`
  * items `array`
    * items [HardwareOrderListItem](#hardwareorderlistitem)

### ListHardwareRefundsRequest
* ListHardwareRefundsRequest `object`
  * caseId `string`
  * ssoTicket `string`

### ListHardwareRefundsResponse
* ListHardwareRefundsResponse `object`
  * refunds `array`
    * items [HardwareRefund](#hardwarerefund)

### ListInteractionsResponse
* ListInteractionsResponse `object`
  * interactions `array`
    * items [Interaction](#interaction)
  * nextPageToken `string`

### ListIssuesResponse
* ListIssuesResponse `object`
  * issues `array`
    * items [Issue1](#issue1)

### ListOpportunitiesResponse
* ListOpportunitiesResponse `object`
  * eventId `string`
  * ineligibleReasons `array`
    * items `string` (values: CASE_SIGNALS, OTHER, UNKNOWN_INELIGIBLE_REASON)
  * opportunities `array`
    * items [Opportunity1](#opportunity1)
  * program [Program1](#program1)

### ListOtherDevicesRequest
* ListOtherDevicesRequest `object`
  * caseId `string`
  * pageSize `integer`
  * pageToken `string`
  * ssoTicket `string`

### ListOtherDevicesResponse
* ListOtherDevicesResponse `object`
  * devices `array`
    * items [Device1](#device1)
  * nextPageToken `string`

### ListPaymentInstrumentTypeInfosResponse
* ListPaymentInstrumentTypeInfosResponse `object`
  * paymentInstrumentTypes `array`
    * items [PaymentInstrumentTypeInfo](#paymentinstrumenttypeinfo)

### ListProductsResponse
* ListProductsResponse `object`
  * allowedProductIds `array`
    * items `string`
  * products `array`
    * items [Product1](#product1)

### ListPropertiesResponse
* ListPropertiesResponse `object`
  * properties `array`
    * items [Property](#property)

### ListPurchasedAppsRequest
* ListPurchasedAppsRequest `object`
  * caseId `string`
  * filter `string`
  * ssoCookie `string`

### ListPurchasedAppsResponse
* ListPurchasedAppsResponse `object`
  * apps `array`
    * items [PurchasedApp](#purchasedapp)

### ListPurchasedBooksRequest
* ListPurchasedBooksRequest `object`
  * caseId `string`
  * filter `string`
  * ssoCookie `string`

### ListPurchasedBooksResponse
* ListPurchasedBooksResponse `object`
  * books `array`
    * items [PurchasedBook](#purchasedbook)

### ListPurchasedVideosRequest
* ListPurchasedVideosRequest `object`
  * caseId `string`
  * filter `string`
  * ssoCookie `string`

### ListPurchasedVideosResponse
* ListPurchasedVideosResponse `object`
  * videos `array`
    * items [PurchasedVideo](#purchasedvideo)

### ListRelatedCommunicationsResponse
* ListRelatedCommunicationsResponse `object`
  * relatedCommunications `array`
    * items [RelatedCommunications](#relatedcommunications)

### ListResolutionsResponse
* ListResolutionsResponse `object`
  * nextPageToken `string`
  * resolutions `array`
    * items [Resolution](#resolution)
  * resultsToken `string`

### ListRmasResponse
* ListRmasResponse `object`
  * rmas `array`
    * items [Rma](#rma)

### ListSettingsResponse
* ListSettingsResponse `object`
  * agentSetting [AgentSetting](#agentsetting)
  * searchSetting [SearchSetting](#searchsetting)

### ListSettingsResponse1
* ListSettingsResponse1 `object`
  * allowedProductIds `array`
    * items `string`
  * settings `array`
    * items [Settings](#settings)

### ListShippingAddressesRequest
* ListShippingAddressesRequest `object`
  * customerEmail `string`
  * ssoCookie `string`

### ListShippingAddressesResponse
* ListShippingAddressesResponse `object`
  * shippingAddresses `array`
    * items [Address](#address)

### ListSubscriptionsRequest
* ListSubscriptionsRequest `object`
  * caseId `string`
  * customerEmail `string`
  * locale `string`
  * ssoCookie `string`

### ListSubscriptionsResponse
* ListSubscriptionsResponse `object`
  * activeSubscriptions `array`
    * items [Subscription](#subscription)
  * inactiveSubscriptions `array`
    * items [Subscription](#subscription)

### ListTopLevelCategoryInfosResponse
* ListTopLevelCategoryInfosResponse `object`
  * categoryInfos `array`
    * items [CategoryInfo](#categoryinfo)
  * consultCategoryInfo [CategoryInfo](#categoryinfo)

### ListTransactionsRequest
* ListTransactionsRequest `object`
  * caseId `string`
  * email `string`
  * endAmount [Money](#money)
  * endDate `string`
  * instrumentLastFourCharacters `string`
  * pageSize `integer`
  * pageToken `string`
  * q `string`
  * queryId `string`
  * queryIds `array`
    * items `string`
  * ssoCookie `string`
  * startAmount [Money](#money)
  * startDate `string`
  * statuses `array`
    * items `string` (values: CANCELLED, CHARGED, CHARGED_BACK, DECLINED, OTHER_STATUS, PENDING, REFUNDED, REJECTED, UNKNOWN_WALLET_TRANSACTION_STATUS)

### ListTransactionsRequest1
* ListTransactionsRequest1 `object`
  * caseId `string`
  * email `string`
  * entitlementToken `string`
  * entitlementTokens `array`
    * items `string`
  * includeUpcomingCharges `boolean`
  * pageSize `integer`
  * pageToken `string`
  * productTypes `array`
    * items `string` (values: BUNDLE, LIVE_EVENT, MOVIE, PRODUCT_TYPE_UNKNOWN, RED, SEASON, SHOW, UNPLUGGED)
  * ssoCookie `string`
  * timezone `string`

### ListTransactionsResponse
* ListTransactionsResponse `object`
  * nextPageToken `string`
  * results `array`
    * items [WalletTransaction](#wallettransaction)

### ListTransactionsResponse1
* ListTransactionsResponse1 `object`
  * nextPageToken `string`
  * transactions `array`
    * items [Transaction](#transaction)
  * upcomingCharge `array`
    * items [Charge](#charge)

### LocaleTransfer
* LocaleTransfer `object`
  * sourceLocale `string`
  * targetLocale `string`

### LocalizedTimestamp
* LocalizedTimestamp `object`
  * timestamp `string`
  * timezone `string`
  * utcOffset `string`

### LogDataAccessRequest
* LogDataAccessRequest `object`
  * caseId `string`
  * event `string` (values: CLICK_TO_REVEAL_PHONE_NUMBER, DATA_ACCESS_EVENT_UNSPECIFIED)

### LogResolutionRequest
* LogResolutionRequest `object`
  * caseId `string`
  * resolutionEvent [ResolutionEvent](#resolutionevent)

### LogTroubleshooterActivityRequest
* LogTroubleshooterActivityRequest `object`
  * activity [ResolutionActivity](#resolutionactivity)
  * caseId `string`

### LookupGiftCardRequest
* LookupGiftCardRequest `object`
  * caseId `string`
  * lookupCriteria [CardLookupCriteria](#cardlookupcriteria)
  * ssoCookie `string`

### LookupGiftCardResponse
* LookupGiftCardResponse `object`
  * giftCard [GiftCard](#giftcard)

### LostStolenDevice
* LostStolenDevice `object`
  * deviceId `string`
  * deviceSku `string`
  * originalOrderId `string`
  * originalShipmentId `string`

### LostStolenEligibility
* LostStolenEligibility `object`
  * reasons `array`
    * items `string` (values: DEVICE_ACTIVATED, INELIGIBLE_REASON_NOT_SET, TOO_MANY_CLAIMS)

### LostStolenRefundEligibility
* LostStolenRefundEligibility `object`
  * isEligible `boolean`
  * reasons `array`
    * items `string` (values: DEVICE_ACTIVATED, INELIGIBLE_REASON_NOT_SET, TOO_MANY_CLAIMS)

### LostStolenShipment
* LostStolenShipment `object`
  * originalOrderId `string`
  * originalShipmentId `string`

### MailingAddress
* MailingAddress `object`
  * addressLine1 `string`
  * addressLine2 `string`
  * addressLine3 `string`
  * addressee `string`
  * city `string`
  * countryCode `string`
  * phoneNumber `string`
  * postalCode `string`
  * stateProvinceCode `string`

### MarkOriginalDeviceReceivedRequest
* MarkOriginalDeviceReceivedRequest `object`
  * caseId `string`
  * ssoCookie `string`

### MatchDetail
* MatchDetail `object`
  * matchPairs `array`
    * items [MatchPair](#matchpair)

### MatchPair
* MatchPair `object`
  * matchTypes `array`
    * items `string` (values: EXACT, PREFIX, SPELLING_CORRECTION, STEMMING, SYNONYM, UNKNOWN_MATCH_TYPE)
  * matchedTerm `string`
  * queryTerm `string`

### MobileScreenshareAcceptEvent
* MobileScreenshareAcceptEvent `object`

### MobileScreenshareAutoDeclineEvent
* MobileScreenshareAutoDeclineEvent `object`
  * declineType `string` (values: APP_UPDATE, EXISTING_INVITATION, NEWER_INVITATION, SAFE_MODE, UNKNOWN_AUTO_DECLINE_TYPE)

### MobileScreenshareCancelEvent
* MobileScreenshareCancelEvent `object`

### MobileScreenshareCleanupEvent
* MobileScreenshareCleanupEvent `object`

### MobileScreenshareConnectEvent
* MobileScreenshareConnectEvent `object`

### MobileScreenshareDeclineEvent
* MobileScreenshareDeclineEvent `object`

### MobileScreenshareDisconnectEvent
* MobileScreenshareDisconnectEvent `object`

### MobileScreenshareEndEvent
* MobileScreenshareEndEvent `object`
  * agentEnded `boolean`

### MobileScreenshareEvent
* MobileScreenshareEvent `object`
  * acceptEvent [MobileScreenshareAcceptEvent](#mobilescreenshareacceptevent)
  * autoDeclineEvent [MobileScreenshareAutoDeclineEvent](#mobilescreenshareautodeclineevent)
  * cancelEvent [MobileScreenshareCancelEvent](#mobilescreensharecancelevent)
  * cleanupEvent [MobileScreenshareCleanupEvent](#mobilescreensharecleanupevent)
  * connectEvent [MobileScreenshareConnectEvent](#mobilescreenshareconnectevent)
  * declineEvent [MobileScreenshareDeclineEvent](#mobilescreensharedeclineevent)
  * disconnectEvent [MobileScreenshareDisconnectEvent](#mobilescreensharedisconnectevent)
  * endEvent [MobileScreenshareEndEvent](#mobilescreenshareendevent)
  * initiateEvent [MobileScreenshareInitiateEvent](#mobilescreenshareinitiateevent)
  * invitationId `string`
  * inviteEvent [MobileScreenshareInviteEvent](#mobilescreenshareinviteevent)
  * receivedEvent [MobileScreenshareReceivedEvent](#mobilescreensharereceivedevent)
  * startingConnectEvent [MobileScreenshareStartingConnectEvent](#mobilescreensharestartingconnectevent)

### MobileScreenshareInitiateEvent
* MobileScreenshareInitiateEvent `object`

### MobileScreenshareInviteEvent
* MobileScreenshareInviteEvent `object`

### MobileScreenshareReceivedEvent
* MobileScreenshareReceivedEvent `object`

### MobileScreenshareStartingConnectEvent
* MobileScreenshareStartingConnectEvent `object`

### Money
* Money `object`
  * currencyCode `string`
  * nanos `integer`
  * units `string`

### NeedsInfoRequest
* NeedsInfoRequest `object`

### NeedsInfoResponse
* NeedsInfoResponse `object`
  * case [Case](#case)

### Node
* Node `object`
  * categoryId `integer`
  * categoryName `string`
  * isInvalid `boolean`

### Node1
* Node1 `object`
  * isValid `boolean`
  * name `string`
  * nodeId `integer`

### Node2
* Node2 `object`
  * categoryId `integer`

### Node3
* Node3 `object`
  * categoryId `integer`

### Node4
* Node4 `object`
  * categoryId `integer`

### Node5
* Node5 `object`
  * categoryId `integer`

### Note
* Note `object`
  * author [Identity](#identity)
  * inResponseTo `string`
  * isHtml `boolean`
  * noteType `string` (values: PHONE, RESOLUTION_EVENT, UNKNOWN_NOTE_TYPE, USER)
  * payload `string`
  * recipients `array`
    * items [Identity](#identity)
  * subject `string`

### OfferedSolutionRequest
* OfferedSolutionRequest `object`
  * communicationId `string`

### OfferedSolutionResponse
* OfferedSolutionResponse `object`
  * case [Case](#case)

### Opportunity
* Opportunity `object`
  * campaignName `string`
  * opportunityName `string`
  * opportunityType `string` (values: ACCOUNT_FEATURE_ADOPTION, CAMPAIGN_GOAL, UNKNOWN_OPPORTUNITY_TYPE)
  * points `integer`

### Opportunity1
* Opportunity1 `object`
  * campaigns `array`
    * items [Campaign](#campaign)
  * category `string`
  * id `string`
  * name `string`
  * opportunityType `string` (values: ACCOUNT_FEATURE_ADOPTION, CAMPAIGN_GOAL, UNKNOWN_OPPORTUNITY_TYPE)
  * points `integer`
  * rank `number`

### Order
* Order `object`
  * checkoutOrderId `string`
  * finskyPurchaseId `string`
  * isNotRefundable `boolean`
  * name `string`
  * orderId `string`
  * orderItems `array`
    * items [OrderItem](#orderitem)
  * orderValue [Money](#money)
  * paymentMethod `string` (values: ACCOUNTING, BILLING_ACCOUNT, CARD, CARRIER_BILLING, DIRECT_DEBIT, ELECTRONIC_FUNDS_TRANSFER, GIFT_CARD, MONETIZATION_CHANNEL, PAYMENT_METHOD_UNSPECIFIED, PAYPAL, PROXY_CARD, REDIRECT, STORED_VALUE, TERMS)
  * paymentState `string` (values: ADDED, CANCELLED, CANCELLING, CHARGEABLE, CHARGED, CHARGING, COMPING, CONTESTED, CONTESTING, ONE_SIDED_REFUNDED, ONE_SIDED_REFUNDING, PARTIAL_REFUNDING, PAYMENT_DECLINED, PAYMENT_STATE_UNSPECIFIED, PENDING, REFUNDED, REFUNDING, REJECTED, REVIEW, STUCK, UNRECOVERABLE)
  * purchaseTime `string`
  * vertical `string` (values: ANDROID_APPS, BOOKS, COMMERCE, DEVICES, MAGAZINES, MOVIES_AND_TV, MULTI_CONTAINER, MUSIC, VERTICAL_UNSPECIFIED)

### OrderItem
* OrderItem `object`
  * contentType `string`
  * itemId `string`
  * name `string`
  * offerType `string`
  * title `string`
  * vertical `string` (values: ANDROID_APPS, BOOKS, COMMERCE, DEVICES, MAGAZINES, MOVIES_AND_TV, MULTI_CONTAINER, MUSIC, VERTICAL_UNSPECIFIED)

### OrderRefundStatusInfo
* OrderRefundStatusInfo `object`
  * order [Order](#order)
  * statusMessage `string`

### Path
* Path `object`
  * nodes `array`
    * items [Node](#node)

### Path1
* Path1 `object`
  * nodes `array`
    * items [Node1](#node1)

### Path2
* Path2 `object`
  * categoryIds `array`
    * items `integer`

### PaymentDetail
* PaymentDetail `object`
  * instrumentDescription `string`
  * instrumentType `string` (values: BANK_ACCOUNT, BILLING_ACCOUNT, CARRIER_BILLING, CREDIT_CARD, FINANCING, GOOGLE_STANDARD_TOKENIZED, INSTRUMENT_TYPE_NOT_SET, MONETIZATION_CHANNEL, NETBANKING, PAYPAL, STORED_VALUE_CLOSED_LOOP_PLAY, STORED_VALUE_OPEN_LOOP)

### PaymentDetail1
* PaymentDetail1 `object`
  * instrumentDescription `string`

### PaymentInstrumentTypeInfo
* PaymentInstrumentTypeInfo `object`
  * instrumentDescription `string`
  * instrumentTypeToken `string`
  * type `string` (values: BANK_ACCOUNT, CARRIER_BILLING, CREDIT_CARD, OTHER, PAYMENT_METHOD_TYPE_UNSPECIFIED, PAYPAL)

### PaymentMethodHijackTransaction
* PaymentMethodHijackTransaction `object`
  * amount [Money](#money)
  * count `integer`
  * date [Date](#date)

### PaymentsInfo
* PaymentsInfo `object`
  * numPaymentsAccounts `integer`

### PaymentsSuggestion
* PaymentsSuggestion `object`
  * description `string`
  * displayName `string`
  * token `string`

### Paypal
* Paypal `object`
  * email `string`

### Paypal1
* Paypal1 `object`
  * account `string`

### Period
* Period `object`
  * count `integer`
  * units `string` (values: DAY, MONTH, UNITS_UNKNOWN, YEAR)

### PhoneCall
* PhoneCall `object`
  * callId `string`
  * countryCode `integer`
  * obfuscatedLineNumber `string`

### PhoneInfo
* PhoneInfo `object`
  * ucid `string`

### PhoneNumber
* PhoneNumber `object`
  * countryCode `integer`
  * countryCodeSource `string` (values: COUNTRY_CODE_SOURCE_UNSPECIFIED, FROM_DEFAULT_COUNTRY, FROM_NUMBER_WITHOUT_PLUS_SIGN, FROM_NUMBER_WITH_IDD, FROM_NUMBER_WITH_PLUS_SIGN)
  * extension `string`
  * isValid `boolean`
  * lineNumber `string`
  * nationalNumber `string`
  * numberOfLeadingZeros `integer`
  * preferredDomesticCarrierCode `string`
  * rawInput `string`

### PhoneSetting
* PhoneSetting `object`
  * agentId `string`
  * extension `string`
  * name `string`
  * region `string`

### PhysicalMailingAddress
* PhysicalMailingAddress `object`
  * addressLine1 `string`
  * addressLine2 `string`
  * addressLine3 `string`
  * addressee `string`
  * city `string`
  * countryCode `string`
  * phoneNumber `string`
  * postalCode `string`
  * stateProvinceCode `string`

### Pitch
* Pitch `object`
  * opportunities `array`
    * items [Opportunity](#opportunity)
  * opportunitiesDisplayType `string` (values: APOLLO, TRADITIONAL, UNKNOWN_OPPORTUNITIES_DISPLAY_TYPE)
  * program [Program](#program)
  * totalPoints `integer`

### Pitch1
* Pitch1 `object`
  * campaignIndex `integer`
  * id [PitchId](#pitchid)
  * opportunityIndex `integer`
  * opportunityType `string` (values: ACCOUNT_FEATURE_ADOPTION, CAMPAIGN_GOAL, UNKNOWN_OPPORTUNITY_TYPE)

### PitchId
* PitchId `object`
  * campaignId `string`
  * opportunityId `string`

### Product
* Product `object`
  * agentCategories `array`
    * items [Category](#category)
  * productId `string`
  * productName `string`
  * routingCategory [Category](#category)

### Product1
* Product1 `object`
  * displayName `string`
  * name `string`
  * productId `string`
  * productName `string`

### Product2
* Product2 `object`
  * isPinned `boolean`
  * locales `array`
    * items `string`
  * productId `string`
  * productName `string`
  * routingTargets `array`
    * items [RoutingTarget](#routingtarget)

### ProductCount
* ProductCount `object`
  * count `integer`
  * productName `string`

### ProductTransfer
* ProductTransfer `object`
  * sourceProduct [Product](#product)
  * targetProduct [Product](#product)

### Program
* Program `object`
  * programName `string`
  * targetPoints `integer`

### Program1
* Program1 `object`
  * name `string`
  * targetPoints `integer`

### Property
* Property `object`
  * name `string`
  * value `string`

### Purchase
* Purchase `object`
  * accessEndTime [LocalizedTimestamp](#localizedtimestamp)
  * cancelTime [LocalizedTimestamp](#localizedtimestamp)
  * eligibleForSelfServeRefund `boolean`
  * entitlementToken `string`
  * isPreorder `boolean`
  * isRefundable `boolean`
  * isRefunded `boolean`
  * isRevokable `boolean`
  * name `string`
  * orderId `string`
  * paymentDescription `string`
  * paymentMethod `string` (values: BANK_ACCOUNT, BILLING_ACCOUNT, CARRIER_BILLING, CREDIT_CARD, FINANCING, GOOGLE_STANDARD_TOKENIZED, MONETIZATION_CHANNEL, NETBANKING, PAYMENT_METHOD_UNKNOWN, PAYPAL, STORED_VALUE_CLOSED_LOOP_PLAY, STORED_VALUE_OPEN_LOOP)
  * productType `string` (values: BUNDLE, LIVE_EVENT, MOVIE, PRODUCT_TYPE_UNKNOWN, RED, SEASON, SHOW, UNPLUGGED)
  * purchaseTime [LocalizedTimestamp](#localizedtimestamp)
  * purchaseType `string` (values: PURCHASE, PURCHASE_TYPE_UNKNOWN, RENTAL)
  * qualityCap `string` (values: HD, SD, UHD, UNKNOWN_CAP)
  * source `string` (values: CONTENT_PURCHASE_SOURCE_UNKNOWN, GOOGLE_PLAY, YOUTUBE)
  * transactionAmount [Money](#money)
  * transactionStatus `string` (values: CANCELLED, CHARGED, CHARGED_BACK, DECLINED, OTHER_STATUS, PENDING, REFUNDED, REJECTED, TRANSACTION_STATUS_UNKNOWN)
  * transactionTime [LocalizedTimestamp](#localizedtimestamp)
  * transactionToken `string`
  * viewTime [LocalizedTimestamp](#localizedtimestamp)

### PurchasedApp
* PurchasedApp `object`
  * appId `string`
  * name `string`
  * purchaseTime `string`

### PurchasedBook
* PurchasedBook `object`
  * bookId `string`
  * name `string`
  * purchaseTime `string`

### PurchasedVideo
* PurchasedVideo `object`
  * name `string`
  * purchaseTime `string`
  * videoId `string`

### QuestionSet
* QuestionSet `object`
  * attemptsRemaining `integer`
  * authenticationBankAccounts `array`
    * items [AuthenticationBankAccount](#authenticationbankaccount)
  * authenticationCreditCards `array`
    * items [AuthenticationCreditCard1](#authenticationcreditcard1)
  * availableQuestions `array`
    * items `string` (values: BANK_ACCOUNT, CREDIT_CARD, DCB, PAYPAL, PHONE_NUMBER, PLAY_BALANCE, POSTAL_CODE, UNKNOWN_QUESTION, WALLET_BALANCE)
  * questionSetType `string` (values: PAYMENT_METHOD_QUESTION_SET, PHONE_NUMBER_QUESTION_SET, POSTAL_CODE_QUESTION_SET, UNKNOWN_QUESTION_SET_TYPE)
  * questions `array`
    * items [AvailableQuestion](#availablequestion)
  * result `string` (values: FAIL, PASS, PENDING, UNKNOWN_RESULT)
  * totalNumberOfAttempts `integer`

### QuestionSource
* QuestionSource `object`
  * questionSourceType `string` (values: FOCUS, PAYMENTS, UNKNOWN_QUESTION_SOURCE_TYPE)
  * token `string`

### QuickResponse
* QuickResponse `object`
  * quickResponseName `string`
  * value `string`

### ReadCaseRequest
* ReadCaseRequest `object`
  * readTime `string`

### RealTime
* RealTime `object`
  * attributeMap `object`
  * issue `string`
  * pool [RealTimePool](#realtimepool)
  * realTimeEvents `array`
    * items [RealTimeEvent](#realtimeevent)
  * requester [Identity](#identity)

### RealTimeEvent
* RealTimeEvent `object`
  * chatMessage [ChatMessage](#chatmessage)
  * createTime `string`

### RealTimePool
* RealTimePool `object`
  * poolId `string`
  * poolName `string`

### RealTimeSetting
* RealTimeSetting `object`
  * agentSettingId `string`
  * enableChatQueueSounds `boolean`
  * enableModalChatNotifications `boolean`
  * forceChatQueueNotifications `boolean`
  * gaiaRobotEntityId `string`
  * name `string`
  * plusPageEntityId `string`
  * quickResponses `array`
    * items [QuickResponse](#quickresponse)
  * realTimeSettingId `string`
  * supportIdentityType `string` (values: GAIA_ROBOT, PLUS_PAGE, UNKNOWN_SUPPORT_IDENTITY_TYPE)
  * switchCaseOnChatFocus `boolean`
  * useSupportIdentity `boolean`

### RecentlyViewedSource
* RecentlyViewedSource `object`

### RedSignals
* RedSignals `object`
  * source `string` (values: FAMILY_MEMBER, GOOGLE_PLAY, ITUNES, OTHER, RED_SOURCE_UNKNOWN, YOUTUBE)
  * subscriptionSignals [SubscriptionSignals](#subscriptionsignals)

### RedeemGiftCardRequest
* RedeemGiftCardRequest `object`
  * activationNumber `string`
  * caseId `string`
  * redemptionToken [RedemptionToken](#redemptiontoken)
  * ssoCookie `string`

### RedeemGiftCardResponse
* RedeemGiftCardResponse `object`
  * amountRedeemed [Money](#money)
  * availableBalance [Money](#money)
  * redemptionStatus `string` (values: CURRENCY_MISMATCH, CUSTOMER_CONTROLS_FORBID, EXCEEDS_BALANCE_LIMITS, MULTIPLE_PAYMENT_ACCOUNTS, NO_STORED_VALUE_INSTRUMENT, REDEMPTION_STATUS_UNSPECIFIED, SUCCESS)

### RedemptionToken
* RedemptionToken `object`
  * token `string`

### RefundDetail
* RefundDetail `object`
  * paymentDetail [PaymentDetail1](#paymentdetail1)
  * refundEntries `array`
    * items [RefundEntry](#refundentry)
  * refundReason `string` (values: DELIVERY_RETURNED, EXTENDED_WARRANTY_CANCELATION, IN_BOX_ACCESSORIES, LOST_STOLEN, OTHER, PRICE_PROTECTION, REFUND_REASON_NOT_SET, RMA, SHIPPING, TAX_EXEMPT, UNDELIVERABLE)
  * refundTotal [Money](#money)

### RefundEntry
* RefundEntry `object`
  * refundAmount [Money](#money)
  * refundDescription `string`
  * refundRequestTime `string`
  * refundTime `string`
  * status `string` (values: REFUNDED, REFUND_ERROR, REFUND_PENDING, REFUND_PENDING_RETURN, REFUND_PENDING_STUCK, STATUS_NOT_SET)

### RefundHardwareOrderRequest
* RefundHardwareOrderRequest `object`
  * caseId `string`
  * ssoTicket `string`

### RefundHardwareOrderResponse
* RefundHardwareOrderResponse `object`
  * reason `string` (values: FAILURE_REASON_NOT_SET, REQUEST_ALREADY_EXISTS)
  * refundId `string`

### RefundHistorySummaryInfo
* RefundHistorySummaryInfo `object`
  * numberOfRefunds `integer`
  * productType `string` (values: BUNDLE, LIVE_EVENT, MOVIE, PRODUCT_TYPE_UNKNOWN, RED, SEASON, SHOW, UNPLUGGED)
  * refundResult `string` (values: ALREADY_REFUNDED, DENIED_CUSTOMER_ABUSE, DENIED_FRAUD, DENIED_REFUND_EXCEEDS_COURTESY_LIMIT, ISSUED, PERMANENT_REFUND_FAILED, REFUND_RESULT_UNKNOWN, REFUND_RETRIABLE)

### RefundOrdersRequest
* RefundOrdersRequest `object`
  * caseId `string`
  * customerEmail `string`
  * orders `array`
    * items [Order](#order)
  * refundReason `string` (values: ACCIDENTAL_PURCHASE, DEFECTIVE, DID_NOT_RECEIVE, FRAUD, FRIENDLY_FRAUD, REFUND_REASON_UNSPECIFIED, REMORSE)
  * ssoCookie `string`

### RefundOrdersResponse
* RefundOrdersResponse `object`
  * approvedOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * approvedOrders `array`
    * items [Order](#order)
  * escalateOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * escalateOrders `array`
    * items [Order](#order)
  * failedOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * failedOrders `array`
    * items [Order](#order)
  * inProgress `boolean`
  * inProgressOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * inProgressOrders `array`
    * items [Order](#order)
  * optionalEscalateOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * optionalEscalateOrders `array`
    * items [Order](#order)
  * processLaterOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * processLaterOrders `array`
    * items [Order](#order)
  * rejectedOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)
  * rejectedOrders `array`
    * items [Order](#order)
  * sidewinderRejectedOrderInfos `array`
    * items [OrderRefundStatusInfo](#orderrefundstatusinfo)

### RefundTransactionsRequest
* RefundTransactionsRequest `object`
  * caseId `string`
  * forceRefund `boolean`
  * refundRequestEntries `array`
    * items [TransactionRefundRequestEntry](#transactionrefundrequestentry)
  * ssoCookie `string`

### RefundTransactionsResponse
* RefundTransactionsResponse `object`
  * refundStatuses `array`
    * items [TransactionRefundResponseStatus](#transactionrefundresponsestatus)

### RelatedCommunications
* RelatedCommunications `object`
  * caseId `string`
  * communications `array`
    * items [Communication](#communication)
  * relations `array`
    * items [Relation1](#relation1)
  * slaTime `string`
  * state `string` (values: ASSIGNED, BLOCKED_BY, FINISHED, IN_CONSULT, NEED_INFO, NEW, SOLUTION_OFFERED, UNASSIGNED, UNKNOWN_CASE_STATE)

### Relation
* Relation `object`
  * duplicate [Duplicate](#duplicate)

### Relation1
* Relation1 `object`
  * borgAlertId `string`
  * buganizerId `string`
  * caseId `string`
  * legalId `string`
  * orderId `string`
  * pcrId `integer`
  * sourceCaseId `string`
  * sourceCommunicationId `string`
  * spixerId `string`
  * state `string` (values: PENDING, RESOLVED, UNKNOWN_RELATION_STATUS)
  * type `string` (values: BLOCKING, CONSULT, DUPLICATE, SPLIT, UNKNOWN_RELATION_TYPE)
  * walletPaymentMethodHijackReviewIds [WalletPaymentMethodHijackReviewIds](#walletpaymentmethodhijackreviewids)
  * walletSignInReviewIds [WalletSignInReviewIds](#walletsigninreviewids)

### ReleaseRequest
* ReleaseRequest `object`

### ReleaseResponse
* ReleaseResponse `object`
  * case [Case](#case)

### ReplacementDetail
* ReplacementDetail `object`
  * shipments `array`
    * items [ReplacementShipment](#replacementshipment)

### ReplacementDevice
* ReplacementDevice `object`
  * countryCode `string`
  * countryExceptionEligible `boolean`
  * device `string`
  * gpn `string`
  * rmaType `string`

### ReplacementShipment
* ReplacementShipment `object`
  * actions `array`
    * items `string` (values: INITIATE_RMA, INVESTIGATE_AUTH_HOLD, INVESTIGATE_SHIPPING, REPLACEMENT_SHIPMENT_ACTION_NOT_SET, REVIEW_RMA, SEND_SHIPMENT_STATUS)
  * actualDeliveryTime `string`
  * actualShipDate [Date](#date)
  * carrierName `string`
  * estimatedDeliveryEndDate [Date](#date)
  * estimatedDeliveryStartDate [Date](#date)
  * isPastEstimatedDeliveryDate `boolean`
  * lastEventTime `string`
  * lineItems `array`
    * items [LineItem](#lineitem)
  * state `string` (values: DELIVERED, ERROR, IN_TRANSIT, NOT_SHIPPED, REPLACEMENT_SHIPMENT_STATE_NOT_SET, REPLACEMENT_SHIPMENT_STATE_UNKNOWN)
  * trackingNumber `string`
  * trackingUrl `string`

### RequestDeviceSignalsAcceptEvent
* RequestDeviceSignalsAcceptEvent `object`
  * deviceId `string`

### RequestDeviceSignalsCancelEvent
* RequestDeviceSignalsCancelEvent `object`

### RequestDeviceSignalsCleanupEvent
* RequestDeviceSignalsCleanupEvent `object`

### RequestDeviceSignalsDeclineEvent
* RequestDeviceSignalsDeclineEvent `object`

### RequestDeviceSignalsEvent
* RequestDeviceSignalsEvent `object`
  * acceptEvent [RequestDeviceSignalsAcceptEvent](#requestdevicesignalsacceptevent)
  * cancelEvent [RequestDeviceSignalsCancelEvent](#requestdevicesignalscancelevent)
  * cleanupEvent [RequestDeviceSignalsCleanupEvent](#requestdevicesignalscleanupevent)
  * declineEvent [RequestDeviceSignalsDeclineEvent](#requestdevicesignalsdeclineevent)
  * initiateEvent [RequestDeviceSignalsInitiateEvent](#requestdevicesignalsinitiateevent)
  * invitationId `string`
  * inviteEvent [RequestDeviceSignalsInviteEvent](#requestdevicesignalsinviteevent)
  * receivedEvent [RequestDeviceSignalsReceivedEvent](#requestdevicesignalsreceivedevent)
  * timeoutEvent [RequestDeviceSignalsTimeoutEvent](#requestdevicesignalstimeoutevent)

### RequestDeviceSignalsInitiateEvent
* RequestDeviceSignalsInitiateEvent `object`

### RequestDeviceSignalsInviteEvent
* RequestDeviceSignalsInviteEvent `object`

### RequestDeviceSignalsReceivedEvent
* RequestDeviceSignalsReceivedEvent `object`

### RequestDeviceSignalsTimeoutEvent
* RequestDeviceSignalsTimeoutEvent `object`

### Requirement
* Requirement `object`
  * requirementType `string` (values: INTERNET, OPERATE, REQUIREMENT_NOT_SET)
  * snippetId `string`

### Resolution
* Resolution `object`
  * cannedResponse [CannedResponse1](#cannedresponse1)
  * helpCenter [HelpCenterContent2](#helpcentercontent2)
  * matchReason `string`
  * matchTerms `array`
    * items `string`
  * postActions `array`
    * items [Action](#action)
  * preActions `array`
    * items [Action](#action)
  * score `integer`
  * snippet `string`
  * title `string`
  * troubleshooter [TroubleShooter](#troubleshooter)
  * workflow [Workflow1](#workflow1)

### Resolution1
* Resolution1 `object`
  * helpCenterContent [HelpCenterContent3](#helpcentercontent3)
  * score `number`
  * status `string` (values: ESCALATED, FAILED, RESOLUTION_STATUS_NOT_SET, SUCCEEDED)
  * workflowId `string`

### ResolutionActivity
* ResolutionActivity `object`
  * helpCenterArticleId `string`
  * status `string` (values: ESCALATED, FAILED, RESOLUTION_STATUS_NOT_SET, SUCCEEDED)
  * workflowId `string`

### ResolutionEvent
* ResolutionEvent `object`
  * articleId `string`
  * categories `array`
    * items [CategoryPath1](#categorypath1)
  * description `string`
  * resolutionId `string`
  * troubleshooterId `string`

### ResolutionOpened
* ResolutionOpened `object`
  * agentActivitySource [AgentActivitySource](#agentactivitysource)
  * cannedResponse [CannedResponse](#cannedresponse)
  * deepLinkSource [HelpCenterDeepLinkSource](#helpcenterdeeplinksource)
  * helpCenterContent [HelpCenterContent](#helpcentercontent)
  * recentlyViewedSource [RecentlyViewedSource](#recentlyviewedsource)
  * searchSource [ResolutionSearchSource](#resolutionsearchsource)
  * workflow [Workflow](#workflow)

### ResolutionSearchSource
* ResolutionSearchSource `object`
  * query `string`

### ReviewKey
* ReviewKey `object`
  * review3Id `string`
  * reviewId `string`
  * targetUnderReview `string`
  * token `string`

### Rma
* Rma `object`
  * addressUpdateable `boolean`
  * bizappSubmitted `boolean`
  * caseId `string`
  * deviceId `string`
  * emailAddress `string`
  * exchangeDeviceName `string`
  * exchangeGpn `string`
  * extendedWarrantyClaimId `string`
  * failureReason `string`
  * failureType `string` (values: FAILURE_TYPE_NOT_SET, FAILURE_TYPE_UNKNOWN, NOTES_INVALID, PHONE_NUMBER_INVALID, RMA_ALREADY_OPEN_FOR_ASSET, SHIPPING_ADDRESS_ADDRESSEE_INVALID, SHIPPING_ADDRESS_CITY_INVALID, SHIPPING_ADDRESS_COUNTRY_CODE_INVALID, SHIPPING_ADDRESS_INVALID, SHIPPING_ADDRESS_LINE_1_INVALID, SHIPPING_ADDRESS_LINE_2_INVALID, SHIPPING_ADDRESS_LINE_3_INVALID, SHIPPING_ADDRESS_POSTAL_CODE_INVALID, SHIPPING_ADDRESS_STATE_PROVINCE_CODE_INVALID, WALLET_ACCOUNT_REQUIRED)
  * failures `array`
    * items [RmaFailure](#rmafailure)
  * gpn `string`
  * name `string`
  * notes `string`
  * orderNumber `string`
  * packingLabelRequired `boolean`
  * reasonCodeIdentifier `string`
  * replacementCartLink `string`
  * rmaAction `string` (values: ADVANCED_EXCHANGE, EXCHANGE, EXCHANGE_WITHOUT_RETURN, REPAIR, RETURN, UNKNOWN_ACTION, WARRANTY_REFUND)
  * rmaCategory `string`
  * rmaId `string`
  * rmaNumber `string`
  * rmaSubcategory `string`
  * rmaType `string`
  * shipmentId `string`
  * shippingAddress [MailingAddress](#mailingaddress)
  * shippingLabelRequired `boolean`
  * shippingProvider `string` (values: FEDEX, UNKNOWN_SHIPPING_PROVIDER, UPS)
  * shippingTrackingNumber `string`
  * state `string` (values: RMA_CANCELLED, RMA_COMPLETED, RMA_INCOMPLETE, RMA_PENDING, RMA_SUBMITTED, UNKNOWN_RMA_STATE)
  * submitTime `string`
  * warrantyException `string`

### RmaCategory
* RmaCategory `object`
  * categoryName `string`
  * disabled `boolean`
  * reasonCodes `array`
    * items [RmaReasonCode](#rmareasoncode)
  * subcategories `array`
    * items `string`

### RmaDescription
* RmaDescription `object`
  * notes `string`
  * rmaAction `string` (values: ADVANCED_EXCHANGE, EXCHANGE, EXCHANGE_WITHOUT_RETURN, REPAIR, RETURN, UNKNOWN_ACTION, WARRANTY_REFUND)
  * rmaCategory `string`
  * rmaSubcategory `string`
  * rmaType `string`

### RmaDevice
* RmaDevice `object`
  * deviceId `string`
  * deviceName `string`
  * hashedFullDeviceId `string`
  * shipmentInfo [ShippingInfo1](#shippinginfo1)

### RmaFailure
* RmaFailure `object`
  * failureExceptionMessage `string`
  * failureType `string` (values: FAILURE_TYPE_NOT_SET, FAILURE_TYPE_UNKNOWN, NOTES_INVALID, PHONE_NUMBER_INVALID, RMA_ALREADY_OPEN_FOR_ASSET, SHIPPING_ADDRESS_ADDRESSEE_INVALID, SHIPPING_ADDRESS_CITY_INVALID, SHIPPING_ADDRESS_COUNTRY_CODE_INVALID, SHIPPING_ADDRESS_INVALID, SHIPPING_ADDRESS_LINE_1_INVALID, SHIPPING_ADDRESS_LINE_2_INVALID, SHIPPING_ADDRESS_LINE_3_INVALID, SHIPPING_ADDRESS_POSTAL_CODE_INVALID, SHIPPING_ADDRESS_STATE_PROVINCE_CODE_INVALID, WALLET_ACCOUNT_REQUIRED)
  * validationReason `string` (values: INVALID, TOO_LONG, VALIDATION_FAILURE_NOT_SET)

### RmaIdentifier
* RmaIdentifier `object`
  * rmaId `string`
  * rmaNumber `string`

### RmaInfo
* RmaInfo `object`
  * originalRmaNumber `string`
  * originalRmaState `string` (values: RMA_CANCELLED, RMA_COMPLETED, RMA_INCOMPLETE, RMA_PENDING, RMA_STATE_NOT_SET, RMA_SUBMITTED)
  * replacementRmaNumber `string`
  * rmaAction `string` (values: ADVANCED_EXCHANGE, EXCHANGE, EXCHANGE_WITHOUT_RETURN, REPAIR, RETURN, RMA_ACTION_NOT_SET, WARRANTY_REFUND)

### RmaOrderDetail
* RmaOrderDetail `object`
  * actions `array`
    * items `string` (values: ACTION_NOT_SET, CANCEL_AUTH_HOLD, CANCEL_RMA, MARK_ORIGINAL_DEVICE_RECEIVED_IN_STANDARD_EXCHANGE, OTHER_ACTIONS_REQUIRE_AUTH, REGENERATE_CART_LINK, RESEND_PACKING_LABEL, RESEND_SHIPPING_LABEL, SEND_STATUS)
  * authHold `boolean`
  * description [RmaDescription](#rmadescription)
  * originalDevice [RmaDevice](#rmadevice)
  * originalOrderId `string`
  * originalShipmentId `string`
  * refundDetails [RefundDetail](#refunddetail)
  * replacementDevice [RmaDevice](#rmadevice)
  * replacementOrderId `string`
  * replacementShipmentId `string`
  * status `string` (values: CANCEL_AUTH_HOLD_PENDING, CLOSED, PENDING_RETURN, RECEIVED_OLD_DEVICE, REFUND_PENDING, RMA_INCOMPLETE, STATUS_NOT_SET, STATUS_UNAVAILABLE)

### RmaReasonCode
* RmaReasonCode `object`
  * id `string`
  * subcategory `string`

### RmaType
* RmaType `object`
  * actions `array`
    * items `string` (values: ADVANCED_EXCHANGE, EXCHANGE, EXCHANGE_WITHOUT_RETURN, REPAIR, RETURN, UNKNOWN_ACTION, WARRANTY_REFUND)
  * rmaCategories `array`
    * items [RmaCategory](#rmacategory)
  * typeName `string`

### RouteRequest
* RouteRequest `object`
  * locale `string`
  * productId `string`
  * reason `string`
  * routingId `string`

### RouteResponse
* RouteResponse `object`
  * case [Case](#case)

### RoutingInfo
* RoutingInfo `object`
  * agentTransfer [AgentTransfer](#agenttransfer)
  * chatTransfer [ChatTransfer](#chattransfer)
  * localeTransfer [LocaleTransfer](#localetransfer)
  * productTransfer [ProductTransfer](#producttransfer)
  * routingTargetName `string`

### RoutingTarget
* RoutingTarget `object`
  * chat [Chat1](#chat1)
  * email [Email2](#email2)
  * targetId `string`
  * targetName `string`

### RunRmaStepsRequest
* RunRmaStepsRequest `object`
  * action `string` (values: ADVANCED_EXCHANGE, EXCHANGE, EXCHANGE_WITHOUT_RETURN, REPAIR, RETURN, UNKNOWN_ACTION, WARRANTY_REFUND)
  * caseId `string`
  * draftMessageId `string`
  * shippingAddress [MailingAddress](#mailingaddress)
  * skipAddressValidation `boolean`
  * ssoCookie `string`
  * steps `array`
    * items `string` (values: GENERATE_PACKING_LABEL_STEP, GENERATE_REPLACEMENT_CART_LINK_STEP, GENERATE_SHIPPING_LABEL_STEP, RMA_RUN_STEP_NOT_SET, UNKNOWN_RMA_STEP, UPDATE_ADDRESS_AND_SEND_SHIPPING_EMAIL_STEP)

### RunRmaStepsResponse
* RunRmaStepsResponse `object`
  * draftMessageId `string`
  * rma [Rma](#rma)

### RunWorkflowRequest
* RunWorkflowRequest `object`
  * caseId `string`
  * draftMessageId `string`
  * rmaId `string`
  * rmaNumber `string`
  * shippingAddress [MailingAddress](#mailingaddress)
  * ssoCookie `string`
  * steps `array`
    * items `string` (values: GENERATE_PACKING_LABEL, GENERATE_REPLACEMENT_CART_LINK, GENERATE_SHIPPING_LABEL, SUBMIT_RMA, UNKNOWN_FLOW, UPDATE_ADDRESS_AND_SEND_SHIPPING_EMAIL)

### RunWorkflowResponse
* RunWorkflowResponse `object`
  * result [WorkflowResult](#workflowresult)

### SaveRmaRequest
* SaveRmaRequest `object`
  * rma [Rma](#rma)

### SaveRmaResponse
* SaveRmaResponse `object`
  * rma [Rma](#rma)

### Search
* Search `object`
  * displayName `string`
  * name `string`
  * searchId `string`
  * teamId `string`

### SearchAccountReviewsRequest
* SearchAccountReviewsRequest `object`
  * caseId `string`
  * ssoCookie `string`

### SearchAccountReviewsResponse
* SearchAccountReviewsResponse `object`
  * review `array`
    * items [AccountReview](#accountreview)

### SearchCategoryInfosResponse
* SearchCategoryInfosResponse `object`
  * categoryInfos `array`
    * items [CategoryInfo](#categoryinfo)

### SearchCount
* SearchCount `object`
  * casesType `string` (values: ASSIGNED, UNKNOWN_CASE_TYPE, WAITING)
  * dueByStatus `string` (values: NONE, OVERDUE, UNKNOWN_DUE_BY_STATUS, URGENT)
  * searchCount `string`

### SearchMultipleCategoryInfosRequest
* SearchMultipleCategoryInfosRequest `object`
  * filterConsultCategories `boolean`
  * maximumResults `integer`
  * productIds `array`
    * items `string`
  * query `string`
  * topCategoryPaths `array`
    * items [CategoryPath](#categorypath)

### SearchOrdersRequest
* SearchOrdersRequest `object`
  * caseId `string`
  * customerEmail `string`
  * endAmount [Money](#money)
  * endDate `string`
  * includeFreeOrders `boolean`
  * instrumentLastFourCharacters `string`
  * locale `string`
  * pageSize `integer`
  * pageToken `string`
  * q `string`
  * queryId `string`
  * ssoCookie `string`
  * startAmount [Money](#money)
  * startDate `string`
  * subscriptionId `string`

### SearchOrdersResponse
* SearchOrdersResponse `object`
  * nextPageToken `string`
  * orders `array`
    * items [Order](#order)

### SearchSetting
* SearchSetting `object`
  * activeTeamSearches `array`
    * items [TeamSearches](#teamsearches)
  * disabledTeamSearches `array`
    * items [TeamSearches](#teamsearches)
  * enableAssignStream `boolean`
  * name `string`

### SendEmailRequest
* SendEmailRequest `object`
  * caseId `string`
  * sendDelay `string`

### SendEmailResponse
* SendEmailResponse `object`
  * communication [Communication](#communication)

### SendRmaRequest
* SendRmaRequest `object`
  * draftMessageId `string`
  * rma [Rma](#rma)
  * skipAddressValidation `boolean`
  * ssoCookie `string`

### SendRmaResponse
* SendRmaResponse `object`
  * draftMessageId `string`
  * rma [Rma](#rma)

### SetCallbackNumberRequest
* SetCallbackNumberRequest `object`
  * phoneNumber [PhoneNumber](#phonenumber)

### SetCallbackNumberResponse
* SetCallbackNumberResponse `object`

### Settings
* Settings `object`
  * authenticationSettings [AuthenticationSettings](#authenticationsettings)
  * consultSettings [ConsultSettings](#consultsettings)
  * displayName `string`
  * dueTimeCalculationMethod `string` (values: DUE_TIME_CALCULATION_METHOD_NOT_SET, RESOLUTION_TARGET, SLA)
  * easterEggSettings [EasterEggSettings](#eastereggsettings)
  * escalateSettings [EscalateSettings](#escalatesettings)
  * externalToolSettings [ExternalToolSettings](#externaltoolsettings)
  * feedbackProductId `string`
  * issueCategorySettings [IssueCategorySettings](#issuecategorysettings)
  * name `string`
  * productId `string`
  * productName `string`
  * supportedLocales `array`
    * items `string`

### ShippingAddress
* ShippingAddress `object`
  * address [PhysicalMailingAddress](#physicalmailingaddress)
  * addressLines `array`
    * items `string`

### ShippingCustomerName
* ShippingCustomerName `object`
  * customerName `string`

### ShippingCustomerPhoneNumber
* ShippingCustomerPhoneNumber `object`
  * phoneNumber `string`

### ShippingInfo
* ShippingInfo `object`
  * actualDeliveryTime `string`
  * actualShipDate [Date](#date)
  * carrierName `string`
  * estimatedDeliveryEndDate [Date](#date)
  * estimatedDeliveryStartDate [Date](#date)
  * estimatedShipDate [Date](#date)
  * isDelivered `boolean`
  * isPastEstimatedDeliveryDate `boolean`
  * lastEventTime `string`
  * shippingType `string` (values: BUDGET_GROUND, GROUND, INTERNATIONAL_PRIORITY, OVERNIGHT, SHIPPING_TYPE_NOT_SET, STANDARD, TWO_DAY_AIR)
  * totalAmount [Money](#money)
  * trackingNumber `string`

### ShippingInfo1
* ShippingInfo1 `object`
  * actualDeliveryTime `string`
  * actualShipDate [Date](#date)
  * carrierName `string`
  * estimatedDeliveryEndDate [Date](#date)
  * estimatedDeliveryStartDate [Date](#date)
  * estimatedShipDate [Date](#date)
  * shipmentState `string` (values: NOT_YET_SHIPPED, SHIPMENT_ERROR, SHIPPED, SHIPPING_INFO_STATE_NOT_SET)
  * trackingNumber `string`
  * trackingUrl `string`

### ShmoovieSignals
* ShmoovieSignals `object`
  * episode `string`
  * expireTimeFromPurchaseTime `string`
  * localizedExpireTimeFromPurchaseTime [LocalizedTimestamp](#localizedtimestamp)
  * localizedRentalExpireTime [LocalizedTimestamp](#localizedtimestamp)
  * localizedRentalStartWatchByTime [LocalizedTimestamp](#localizedtimestamp)
  * localizedRentalStartWatchTime [LocalizedTimestamp](#localizedtimestamp)
  * model `string` (values: PURCHASE, RENTAL, SELLING_MODEL_UNKNOWN)
  * price [Money](#money)
  * rentalExpireTime `string`
  * rentalStartWatchByTime `string`
  * rentalStartWatchTime `string`
  * season `string`
  * source `string` (values: GOOGLE_PLAY, SHMOOVIE_SOURCE_UNKNOWN, YOUTUBE)

### ShowSummaryAction
* ShowSummaryAction `object`
  * accountInfo `array`
    * items `string` (values: ACCOUNT_INFO_UNSPECIFIED, ALERT_REVIEW)
  * declinedTxCount `integer`
  * pendingTxCount `integer`
  * recentStartTime `string`
  * rejectedTxCount `integer`
  * searchContext `string`
  * transactionNotFoundDifmId `integer`
  * transactionNotFoundScriptId `integer`

### SidewinderRole
* SidewinderRole `object`
  * isOnsite `boolean`

### Source
* Source `object`
  * agentEmailAddress `string`
  * atlasProduct `string`
  * casesService `string` (values: BACKEND, CHAT, EMAIL_PROCESSOR, FINISHER, OUTBOX_SENDER, QUALITY_REVIEW_SELECTOR, UNKNOWN_CASES_SERVICE, WIPEOUT)
  * externalService `string` (values: CUF, MEDLEY, MOJO, UDS, UNKNOWN_EXTERNAL_SERVICE)
  * robotEmailAddress `string`
  * routingRuleId `string`

### SpamRequest
* SpamRequest `object`

### SpamResponse
* SpamResponse `object`
  * case [Case](#case)

### SplitRequest
* SplitRequest `object`
  * communicationId `string`

### SplitResponse
* SplitResponse `object`
  * sourceCase [Case](#case)
  * targetCase [Case](#case)

### SplitTender
* SplitTender `object`
  * amount [Money](#money)
  * instrument `string`
  * status `string` (values: CANCELLED, CHARGED, CHARGED_BACK, DECLINED, OTHER_STATUS, PENDING, REFUNDED, REJECTED, UNKNOWN_WALLET_TRANSACTION_STATUS)

### Status
* Status `object`
  * code `integer`
  * details `array`
    * items `object`
  * message `string`

### StepResult
* StepResult `object`
  * errorMessage `string`
  * status `string` (values: FAILED, NOT_PROCESSED, SUCCESSFUL, UNKNOWN_STEP_STATUS)
  * step `string` (values: GENERATE_PACKING_LABEL, GENERATE_REPLACEMENT_CART_LINK, GENERATE_SHIPPING_LABEL, SUBMIT_RMA, UNKNOWN_FLOW, UPDATE_ADDRESS_AND_SEND_SHIPPING_EMAIL)

### SubmitRmaRequest
* SubmitRmaRequest `object`
  * draftMessageId `string`
  * rma [Rma](#rma)
  * ssoCookie `string`

### SubmitRmaResponse
* SubmitRmaResponse `object`
  * draftMessageId `string`
  * isDraftMessageUpdated `boolean`
  * rma [Rma](#rma)

### Subscription
* Subscription `object`
  * amount [Money](#money)
  * billingPeriod `string` (values: BILLING_PERIOD_UNSPECIFIED, DAY, HOUR, MONTH, SEASONAL, SIX_MONTHS, THREE_MONTHS, WEEK, YEAR)
  * cancelDate `string`
  * docid [Docid](#docid)
  * firstChargedDate `string`
  * id `string`
  * isTrial `boolean`
  * offerType `string` (values: BUNDLED, GROUP_LICENSE, LICENSE, NONE, OFFER_TYPE_UNSPECIFIED, PREORDER, PURCHASE, PURCHASE_HIGH_DEF, RENTAL, RENTAL_HIGH_DEF, SAMPLE, SUBSCRIPTION, SUBSCRIPTION_CONTENT)
  * paymentDeclinedDate `string`
  * purchaseIds `array`
    * items `string`
  * renewDate `string`
  * state `string` (values: ACTIVE, CANCELED, EXPIRED, IN_GRACE_PERIOD, SUBSCRIPTION_STATE_UNSPECIFIED)
  * terminateDate `string`
  * title `string`
  * vertical `string` (values: ANDROID_APPS, BOOKS, COMMERCE, DEVICES, MAGAZINES, MOVIES_AND_TV, MULTI_CONTAINER, MUSIC, VERTICAL_UNSPECIFIED)

### SubscriptionComponent
* SubscriptionComponent `object`
  * componentData [ComponentData](#componentdata)
  * name `string`
  * token [ComponentToken](#componenttoken)

### SubscriptionSignals
* SubscriptionSignals `object`
  * featureExpireTime `string`
  * freeTrialPeriod [Period](#period)
  * introductoryPeriod [Period](#period)
  * introductoryPrice [Money](#money)
  * localizedFeatureExpireTime [LocalizedTimestamp](#localizedtimestamp)
  * localizedNextPaymentTime [LocalizedTimestamp](#localizedtimestamp)
  * nextPaymentTime `string`
  * pricePerMonth [Money](#money)

### SuggestNewEmailHeadersResponse
* SuggestNewEmailHeadersResponse `object`
  * fromHeaders `array`
    * items [Contact](#contact)
  * toHeaders `array`
    * items [Contact](#contact)

### SuggestNoteHeadersResponse
* SuggestNoteHeadersResponse `object`
  * fromHeaders `array`
    * items [Contact](#contact)
  * toHeaders `array`
    * items [Contact](#contact)

### SuggestPaymentInstrumentIssuerResponse
* SuggestPaymentInstrumentIssuerResponse `object`
  * suggestions `array`
    * items [PaymentsSuggestion](#paymentssuggestion)

### SuggestReplyEmailHeadersResponse
* SuggestReplyEmailHeadersResponse `object`
  * ccHeaders `array`
    * items [Contact](#contact)
  * fromHeaders `array`
    * items [Contact](#contact)
  * toHeaders `array`
    * items [Contact](#contact)

### SuggestResolutionsRequest
* SuggestResolutionsRequest `object`
  * caseId `string`

### SuggestResolutionsResponse
* SuggestResolutionsResponse `object`
  * resolutions `array`
    * items [SuggestedResolution](#suggestedresolution)

### SuggestedResolution
* SuggestedResolution `object`
  * id `string`
  * type `string` (values: CANNED_RESPONSE, EXTERNAL_HC, INTERNAL_HC, SUGGESTED_RESOLUTION_TYPE_UNSPECIFIED, TROUBLESHOOTER, WORKFLOW)

### SummarizeResponse
* SummarizeResponse `object`
  * adwordsCid `boolean`
  * emailAddress `boolean`
  * summary [Summary](#summary)

### Summary
* Summary `object`
  * casesByChannel `array`
    * items [ChannelCount](#channelcount)
  * casesByProduct `array`
    * items [ProductCount](#productcount)
  * mostRecentClosedCase [Interaction](#interaction)
  * mostRecentOpenCase [Interaction](#interaction)
  * openCases [InteractionCount](#interactioncount)
  * totalCases [InteractionCount](#interactioncount)

### SupportLink
* SupportLink `object`
  * displayName `string`
  * linkUrl `string`

### TakeRequest
* TakeRequest `object`

### TakeResponse
* TakeResponse `object`
  * case [Case](#case)

### Tax
* Tax `object`
  * amount [Money](#money)
  * type `string` (values: SALES_TAX, TELECOM_TAX, UNKNOWN_TAX)

### Team
* Team `object`
  * displayName `string`
  * name `string`
  * teamId `string`

### TeamSearches
* TeamSearches `object`
  * searchIds `array`
    * items `string`
  * teamId `string`

### Timezone
* Timezone `object`
  * utcOffset `integer`

### Transaction
* Transaction `object`
  * billingBackend `string` (values: BILLING, CDP, PAYMENT_BACKEND_UNDEFINED)
  * isProratedCharge `boolean`
  * isRefund `boolean`
  * isRefundable `boolean`
  * isRefunded `boolean`
  * lineItems `array`
    * items [TransactionLineItem](#transactionlineitem)
  * localizedRefundTime [LocalizedTimestamp](#localizedtimestamp)
  * localizedTransactionTime [LocalizedTimestamp](#localizedtimestamp)
  * name `string`
  * orderCode `string`
  * paymentDescription `string`
  * paymentMethod `string` (values: BANK_ACCOUNT, BILLING_ACCOUNT, CARRIER_BILLING, CREDIT_CARD, FINANCING, GOOGLE_STANDARD_TOKENIZED, MONETIZATION_CHANNEL, NETBANKING, PAYMENT_METHOD_UNKNOWN, PAYPAL, STORED_VALUE_CLOSED_LOOP_PLAY, STORED_VALUE_OPEN_LOOP)
  * refundReason `string` (values: CANCEL_REFUND_REASON_UNKNOWN, FEATURE_NOT_WORKING, FRIEND_OR_FAMILY_CHARGES, NO_LONGER_WANTED_REMORSE, PURCHASE_BY_ACCIDENT, SELF_SERVICE_REFUND, UNRECOGNIZED_CHARGES_PAYMENT_FRAUD)
  * refundTime `string`
  * state `string` (values: TRANSACTION_NOT_REFUNDABLE, TRANSACTION_REFUNDABLE, TRANSACTION_REFUNDED, TRANSACTION_STATE_UNKNOWN)
  * textDescription `string`
  * transactionAmount [Money](#money)
  * transactionId `string`
  * transactionStatus `string` (values: CANCELLED, CHARGED, CHARGED_BACK, DECLINED, OTHER_STATUS, PENDING, REFUNDED, REJECTED, TRANSACTION_STATUS_UNKNOWN)
  * transactionTime `string`
  * transactionToken `string`

### TransactionIdentifier
* TransactionIdentifier `object`
  * orderId `string`
  * transactionId `string`
  * transactionType `string` (values: GOOGLE_PLAY, GOOGLE_STORE, P2P_RECEIVER, P2P_SENDER, TAP_AND_PAY, UNKNOWN_WALLET_TRANSACTION_TYPE, WALLET_CARD, YOUTUBE_PURCHASE)
  * youtubeVideoId `string`

### TransactionLineItem
* TransactionLineItem `object`
  * componentKey `string`
  * description `string`
  * lineItemIndex `integer`
  * name `string`
  * price [Money](#money)
  * tax `array`
    * items [Tax](#tax)

### TransactionRefundRequestEntry
* TransactionRefundRequestEntry `object`
  * refundReason `string` (values: CANCEL_REFUND_REASON_UNKNOWN, FEATURE_NOT_WORKING, FRIEND_OR_FAMILY_CHARGES, NO_LONGER_WANTED_REMORSE, PURCHASE_BY_ACCIDENT, SELF_SERVICE_REFUND, UNRECOGNIZED_CHARGES_PAYMENT_FRAUD)
  * transactionTokens `array`
    * items `string`

### TransactionRefundResponseStatus
* TransactionRefundResponseStatus `object`
  * refundResult `string` (values: ALREADY_REFUNDED, DENIED_CUSTOMER_ABUSE, DENIED_FRAUD, DENIED_REFUND_EXCEEDS_COURTESY_LIMIT, ISSUED, PERMANENT_REFUND_FAILED, REFUND_RESULT_UNKNOWN, REFUND_RETRIABLE)
  * transactionToken `string`

### TransactionsSummary
* TransactionsSummary `object`
  * amount [Money](#money)
  * count `integer`

### TransferAction
* TransferAction `object`
  * resolutionId `integer`

### TransferRequest
* TransferRequest `object`
  * emailAddress `string`

### TransferResponse
* TransferResponse `object`
  * case [Case](#case)

### TroubleShooter
* TroubleShooter `object`
  * hcId `string`
  * helpCenter `string`
  * isPublic `boolean`
  * locale `string`
  * url `string`

### TroubleshootAccountRequest
* TroubleshootAccountRequest `object`
  * caseId `string`
  * email `string`
  * searchRecentStartTimestamp `string`
  * ssoCookie `string`

### TroubleshootAccountResponse
* TroubleshootAccountResponse `object`
  * action [Action1](#action1)

### TroubleshootIssueRequest
* TroubleshootIssueRequest `object`
  * answers `array`
    * items [Answer](#answer)
  * caseId `string`
  * ssoCookie `string`

### TroubleshootIssueResponse
* TroubleshootIssueResponse `object`
  * autocheckResults `array`
    * items [AutocheckResult](#autocheckresult)
  * issues `array`
    * items [Issue1](#issue1)
  * questions `array`
    * items `string` (values: DEVICE_TYPE, PURCHASED_APP_NAME, PURCHASED_BOOK_NAME, PURCHASED_VIDEO_NAME, QUESTION_NOT_SET)
  * requirements `array`
    * items [Requirement](#requirement)
  * resolutions `array`
    * items [Resolution1](#resolution1)

### TroubleshootTransactionRequest
* TroubleshootTransactionRequest `object`
  * caseId `string`
  * orderId `string`
  * searchContext `string`
  * ssoCookie `string`
  * transactionId `string`
  * transactionIdentifier [TransactionIdentifier](#transactionidentifier)
  * transactionType `string` (values: GOOGLE_PLAY, GOOGLE_STORE, P2P_RECEIVER, P2P_SENDER, TAP_AND_PAY, UNKNOWN_WALLET_TRANSACTION_TYPE, WALLET_CARD, YOUTUBE_PURCHASE)

### TroubleshootTransactionResponse
* TroubleshootTransactionResponse `object`
  * action [Action1](#action1)

### TroubleshooterSession
* TroubleshooterSession `object`
  * autocheckResults `array`
    * items [AutocheckResult](#autocheckresult)
  * caseId `string`
  * issueId `string`
  * questions `array`
    * items `string` (values: DEVICE_TYPE, PURCHASED_APP_NAME, PURCHASED_BOOK_NAME, PURCHASED_VIDEO_NAME, QUESTION_NOT_SET)
  * requirements `array`
    * items [Requirement](#requirement)
  * resolutions `array`
    * items [Resolution1](#resolution1)
  * sessionId `string`
  * subIssues `array`
    * items [Issue1](#issue1)

### UnassignRequest
* UnassignRequest `object`

### UnassignResponse
* UnassignResponse `object`
  * case [Case](#case)

### UnauthorizedChargesWorkflow
* UnauthorizedChargesWorkflow `object`
  * paymentMethodHijackReviewKeys `array`
    * items [CasesReviewKey](#casesreviewkey)
  * state `string` (values: ACCOUNT_TAKE_OVER_PLAYDC_REFUNDING, CANCELLED, COMPLETED, FRIENDLY_FRAUD_PLAYDC_REFUNDING, INITITIATED, PAYMENT_METHOD_HIJACK_REVIEWING, PAYMENT_METHOD_HIJACK_REVIEW_COMPLETED, STATE_UNSPECIFIED)
  * userTransactionIds `array`
    * items [CasesTransactionIdentifier](#casestransactionidentifier)

### UnblockRequest
* UnblockRequest `object`
  * borgAlertId `string`
  * buganizerId `string`
  * orderId `string`
  * pcrId `integer`

### UnblockResponse
* UnblockResponse `object`
  * case [Case](#case)

### UnpluggedSignals
* UnpluggedSignals `object`
  * components `array`
    * items [EntitlementComponent](#entitlementcomponent)
  * source `string` (values: FAMILY_MEMBER, INDIVIDUAL, ITUNES, OTHER, UNKNOWN)
  * subscriptionSignals [SubscriptionSignals](#subscriptionsignals)

### UnreadCaseInfo
* UnreadCaseInfo `object`
  * caseId `string`
  * isAssigned `boolean`
  * unreadTime `string`

### UnspamRequest
* UnspamRequest `object`

### UnspamResponse
* UnspamResponse `object`
  * case [Case](#case)

### UpdateAccountsRequest
* UpdateAccountsRequest `object`
  * accounts `array`
    * items [Account](#account)

### UpdateAccountsResponse
* UpdateAccountsResponse `object`
  * accounts `array`
    * items [Account](#account)

### UpdateAgentCategoriesRequest
* UpdateAgentCategoriesRequest `object`
  * paths `array`
    * items [Path2](#path2)

### UpdateAgentCategoriesResponse
* UpdateAgentCategoriesResponse `object`
  * product [Product](#product)
  * subProducts `array`
    * items [Product](#product)

### UpdateAttributesRequest
* UpdateAttributesRequest `object`
  * attributes `array`
    * items [Attribute1](#attribute1)

### UpdateAttributesResponse
* UpdateAttributesResponse `object`
  * case [Case](#case)

### UpdateConsultNoteRequest
* UpdateConsultNoteRequest `object`
  * body `string`
  * caseId `string`
  * inReplyTo `string`
  * isHtml `boolean`
  * subject `string`

### UpdateConsultNoteResponse
* UpdateConsultNoteResponse `object`
  * communication [Communication](#communication)

### UpdateContactEmailRequest
* UpdateContactEmailRequest `object`
  * contactEmail `string`

### UpdateContactEmailResponse
* UpdateContactEmailResponse `object`
  * customer [Customer](#customer)

### UpdateContactNameRequest
* UpdateContactNameRequest `object`
  * contactName `string`

### UpdateContactNameResponse
* UpdateContactNameResponse `object`
  * customer [Customer](#customer)

### UpdateCustomerAttributesRequest
* UpdateCustomerAttributesRequest `object`
  * adwordsExternalCid `string`
  * adwordsInternalCid `string`
  * emailAddress `string`
  * phoneNumber `string`

### UpdateCustomerAttributesResponse
* UpdateCustomerAttributesResponse `object`
  * customer [Customer](#customer)

### UpdateDisconnectedChannelRequest
* UpdateDisconnectedChannelRequest `object`
  * channel `string` (values: CHANNEL_UNSPECIFIED, CHAT, PHONE)

### UpdateEligibleProgramRequest
* UpdateEligibleProgramRequest `object`
  * programName `string`

### UpdateEligibleProgramResponse
* UpdateEligibleProgramResponse `object`
  * customer [Customer](#customer)

### UpdateEmailRequest
* UpdateEmailRequest `object`
  * afterSendSetting [AfterSendSetting](#aftersendsetting)
  * bccAddresses `array`
    * items `string`
  * body `string`
  * cannedResponseIds `array`
    * items `string`
  * caseId `string`
  * ccAddresses `array`
    * items `string`
  * footerIds `array`
    * items `string`
  * fromAddress `string`
  * headerIds `array`
    * items `string`
  * inReplyTo `string`
  * isHtml `boolean`
  * subject `string`
  * toAddresses `array`
    * items `string`

### UpdateEmailResponse
* UpdateEmailResponse `object`
  * communication [Communication](#communication)

### UpdateLocaleRequest
* UpdateLocaleRequest `object`
  * locale `string`

### UpdateLocaleResponse
* UpdateLocaleResponse `object`
  * issue [Issue](#issue)

### UpdateNoteRequest
* UpdateNoteRequest `object`
  * body `string`
  * cannedResponseIds `array`
    * items `string`
  * caseId `string`
  * isHtml `boolean`
  * noteType `string` (values: PHONE, UNKNOWN_NOTE_TYPE, USER)
  * subject `string`

### UpdateNoteResponse
* UpdateNoteResponse `object`
  * communication [Communication](#communication)

### UpdateOwnerResponse
* UpdateOwnerResponse `object`

### UpdateProductRequest
* UpdateProductRequest `object`
  * fieldMask `array`
    * items `string`
  * product [Product](#product)

### UpdateSummaryRequest
* UpdateSummaryRequest `object`
  * summary `string`

### UpdateSummaryResponse
* UpdateSummaryResponse `object`
  * issue [Issue](#issue)

### UpdateWorkflowRequest
* UpdateWorkflowRequest `object`
  * fieldMask `array`
    * items `string`
  * workflow [CasesWorkflow](#casesworkflow)

### ValidateConsultCategory
* ValidateConsultCategory `object`
  * nodes `array`
    * items [ValidateConsultNode](#validateconsultnode)

### ValidateConsultFormRequest
* ValidateConsultFormRequest `object`
  * consultFormHelpCenterName `string`
  * consultFormId `string`
  * originatingCategory [ValidateConsultCategory](#validateconsultcategory)
  * poolId `string`
  * productId `string`
  * targetCaseCategories `array`
    * items [ValidateConsultCategory](#validateconsultcategory)
  * teamId `string`

### ValidateConsultFormResponse
* ValidateConsultFormResponse `object`
  * validationErrors `array`
    * items `string` (values: CATEGORY, CONSULT_FORM, POOL, TEAM, VALIDATION_ERROR_NOT_SET)

### ValidateConsultNode
* ValidateConsultNode `object`
  * categoryId `integer`

### VerificationResult
* VerificationResult `object`
  * answerResults `array`
    * items `string` (values: FAILED, PASSED, UNABLE_TO_VERIFY, UNKNOWN_ANSWER_RESULT)
  * attemptsRemaining `integer`
  * questionSetType `string` (values: PAYMENT_METHOD_QUESTION_SET, PHONE_NUMBER_QUESTION_SET, POSTAL_CODE_QUESTION_SET, UNKNOWN_QUESTION_SET_TYPE)
  * verificationResults `array`
    * items [Status](#status)

### VerifyGiftCardRequest
* VerifyGiftCardRequest `object`
  * activationNumber `string`
  * caseId `string`
  * partialCode `string`
  * ssoCookie `string`

### VerifyGiftCardResponse
* VerifyGiftCardResponse `object`
  * redemptionToken [RedemptionToken](#redemptiontoken)

### WaitForConsultRequest
* WaitForConsultRequest `object`

### WaitForConsultResponse
* WaitForConsultResponse `object`
  * case [Case](#case)

### WalletPaymentMethodHijackReviewIds
* WalletPaymentMethodHijackReviewIds `object`
  * ids `array`
    * items `string`

### WalletSignInReviewIds
* WalletSignInReviewIds `object`
  * ids `array`
    * items `string`

### WalletTransaction
* WalletTransaction `object`
  * creationTime `string`
  * description `string`
  * instrument `string`
  * isAuthorizationHold `boolean`
  * originalAmount [Money](#money)
  * playSubscriptionId `string`
  * productLinks `array`
    * items `string`
  * productVertical `string` (values: DRIVE, FI, HARDWARE, PLAY_APPS, PLAY_BOOKS, PLAY_GIFT_CARDS, PLAY_MOVIES, PLAY_MUSIC, PLAY_NEWSSTAND, PRODUCT_VERTICAL_UNSPECIFIED, UNKNOWN, WALLET_ANDROID_PAY, WALLET_APP, WALLET_HANDS_FREE, YOUTUBE)
  * qualityCap `string` (values: HD, SD, UHD, UNKNOWN_QUALITY, VR)
  * splitTenders `array`
    * items [SplitTender](#splittender)
  * status `string` (values: CANCELLED, CHARGED, CHARGED_BACK, DECLINED, OTHER_STATUS, PENDING, REFUNDED, REJECTED, UNKNOWN_WALLET_TRANSACTION_STATUS)
  * transactionId [TransactionIdentifier](#transactionidentifier)

### Workflow
* Workflow `object`
  * troubleshooterType `string` (values: NOE, PLAY_APPS, PLAY_PURCHASES, TROUBLESHOOTER_TYPE_NOT_SET)
  * workflowId `string`

### Workflow1
* Workflow1 `object`
  * checkForDraft `boolean`
  * troubleshooterType `string` (values: NOE, PLAY_APPS, PLAY_PURCHASES, TROUBLESHOOTER_TYPE_NOT_SET)
  * url `string`
  * workflowId `string`

### WorkflowInfo
* WorkflowInfo `object`
  * workflowIds `array`
    * items `integer`

### WorkflowResult
* WorkflowResult `object`
  * draftMessageId `string`
  * rma [Rma](#rma)
  * stepResults `array`
    * items [StepResult](#stepresult)


