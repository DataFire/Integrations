# @datafire/google_dialogflow

Client library for Dialogflow API

## Installation and Usage
```bash
npm install --save @datafire/google_dialogflow
```
```js
let google_dialogflow = require('@datafire/google_dialogflow').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Builds conversational interfaces (for example, chatbots, and voice-powered apps and devices).

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_dialogflow.oauthCallback({
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
google_dialogflow.oauthRefresh(null, context)
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

### dialogflow.projects.locations.securitySettings.delete
Deletes the specified SecuritySettings.


```js
google_dialogflow.dialogflow.projects.locations.securitySettings.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the SecuritySettings to delete. Format: `projects//locations//securitySettings/`.
  * force `boolean`: This field has no effect for webhook not being used. For webhooks that are used by pages/flows/transition route groups: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the webhook, as well as any references to the webhook (i.e. Webhook and tagin fulfillments that point to this webhook will be removed).
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleProtobufEmpty](#googleprotobufempty)

### dialogflow.projects.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_dialogflow.dialogflow.projects.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
  * languageCode `string`: The language to retrieve the intent for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### dialogflow.projects.locations.securitySettings.patch
Updates the specified SecuritySettings.


```js
google_dialogflow.dialogflow.projects.locations.securitySettings.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the settings. Format: `projects//locations//securitySettings/`.
  * updateMask `string`: Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
  * body [GoogleCloudDialogflowCxV3beta1SecuritySettings](#googleclouddialogflowcxv3beta1securitysettings)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1SecuritySettings](#googleclouddialogflowcxv3beta1securitysettings)

### dialogflow.projects.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_dialogflow.dialogflow.projects.operations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation's parent resource.
  * filter `string`: The standard list filter.
  * pageSize `integer`: The standard list page size.
  * pageToken `string`: The standard list page token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleLongrunningListOperationsResponse](#googlelongrunninglistoperationsresponse)

### dialogflow.projects.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.


```js
google_dialogflow.dialogflow.projects.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleProtobufEmpty](#googleprotobufempty)

### dialogflow.projects.locations.agents.export
Exports the specified agent to a binary file.


```js
google_dialogflow.dialogflow.projects.locations.agents.export({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the agent to export. Format: `projects//locations//agents/`.
  * body [GoogleCloudDialogflowCxV3beta1ExportAgentRequest](#googleclouddialogflowcxv3beta1exportagentrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### dialogflow.projects.locations.agents.flows.versions.load
Loads a specified version to draft version.


```js
google_dialogflow.dialogflow.projects.locations.agents.flows.versions.load({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The Version to be loaded to draft version. Format: `projects//locations//agents//flows//versions/`.
  * body [GoogleCloudDialogflowCxV3beta1LoadVersionRequest](#googleclouddialogflowcxv3beta1loadversionrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### dialogflow.projects.locations.agents.environments.lookupEnvironmentHistory
Looks up the history of the specified Environment.


```js
google_dialogflow.dialogflow.projects.locations.agents.environments.lookupEnvironmentHistory({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the environment to look up the history for. Format: `projects//locations//agents//environments/`.
  * pageSize `integer`: The maximum number of items to return in a single page. By default 100 and at most 1000.
  * pageToken `string`: The next_page_token value returned from a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse](#googleclouddialogflowcxv3beta1lookupenvironmenthistoryresponse)

### dialogflow.projects.locations.agents.restore
Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed.


```js
google_dialogflow.dialogflow.projects.locations.agents.restore({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the agent to restore into. Format: `projects//locations//agents/`.
  * body [GoogleCloudDialogflowCxV3beta1RestoreAgentRequest](#googleclouddialogflowcxv3beta1restoreagentrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### dialogflow.projects.locations.agents.flows.train
Trains the specified flow. Note that only the flow in 'draft' environment is trained.


```js
google_dialogflow.dialogflow.projects.locations.agents.flows.train({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The flow to train. Format: `projects//locations//agents//flows/`.
  * body [GoogleCloudDialogflowCxV3beta1TrainFlowRequest](#googleclouddialogflowcxv3beta1trainflowrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### dialogflow.projects.locations.agents.list
Returns the list of all agents in the specified location.


```js
google_dialogflow.dialogflow.projects.locations.agents.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The location to list all agents for. Format: `projects//locations/`.
  * pageSize `integer`: The maximum number of items to return in a single page. By default 100 and at most 1000.
  * pageToken `string`: The next_page_token value returned from a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1ListAgentsResponse](#googleclouddialogflowcxv3beta1listagentsresponse)

### dialogflow.projects.locations.agents.create
Creates an agent in the specified location.


```js
google_dialogflow.dialogflow.projects.locations.agents.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The location to create a agent for. Format: `projects//locations/`.
  * body [GoogleCloudDialogflowCxV3beta1Agent](#googleclouddialogflowcxv3beta1agent)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1Agent](#googleclouddialogflowcxv3beta1agent)

### dialogflow.projects.locations.agents.sessions.entityTypes.list
Returns the list of all session entity types in the specified session.


```js
google_dialogflow.dialogflow.projects.locations.agents.sessions.entityTypes.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The session to list all session entity types from. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
  * pageSize `integer`: The maximum number of items to return in a single page. By default 100 and at most 1000.
  * pageToken `string`: The next_page_token value returned from a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse](#googleclouddialogflowcxv3beta1listsessionentitytypesresponse)

### dialogflow.projects.locations.agents.sessions.entityTypes.create
Creates a session entity type. If the specified session entity type already exists, overrides the session entity type.


```js
google_dialogflow.dialogflow.projects.locations.agents.sessions.entityTypes.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The session to create a session entity type for. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
  * languageCode `string`: The language of the following fields in `entity_type`: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
  * body [GoogleCloudDialogflowCxV3beta1SessionEntityType](#googleclouddialogflowcxv3beta1sessionentitytype)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1SessionEntityType](#googleclouddialogflowcxv3beta1sessionentitytype)

### dialogflow.projects.locations.agents.environments.list
Returns the list of all environments in the specified Agent.


```js
google_dialogflow.dialogflow.projects.locations.agents.environments.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The Agent to list all environments for. Format: `projects//locations//agents/`.
  * pageSize `integer`: The maximum number of items to return in a single page. By default 20 and at most 100.
  * pageToken `string`: The next_page_token value returned from a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse](#googleclouddialogflowcxv3beta1listenvironmentsresponse)

### dialogflow.projects.locations.agents.environments.create
Creates an Environment in the specified Agent.


```js
google_dialogflow.dialogflow.projects.locations.agents.environments.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The Agent to create an Environment for. Format: `projects//locations//agents/`.
  * body [GoogleCloudDialogflowCxV3beta1Environment](#googleclouddialogflowcxv3beta1environment)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### dialogflow.projects.locations.agents.flows.list
Returns the list of all flows in the specified agent.


```js
google_dialogflow.dialogflow.projects.locations.agents.flows.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The agent containing the flows. Format: `projects//locations//agents/`.
  * languageCode `string`: The language to list flows for. The following fields are language dependent: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.messages` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
  * pageSize `integer`: The maximum number of items to return in a single page. By default 100 and at most 1000.
  * pageToken `string`: The next_page_token value returned from a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1ListFlowsResponse](#googleclouddialogflowcxv3beta1listflowsresponse)

### dialogflow.projects.locations.agents.flows.create
Creates a flow in the specified agent.


```js
google_dialogflow.dialogflow.projects.locations.agents.flows.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The agent to create a flow for. Format: `projects//locations//agents/`.
  * languageCode `string`: The language of the following fields in `flow`: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.messages` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
  * body [GoogleCloudDialogflowCxV3beta1Flow](#googleclouddialogflowcxv3beta1flow)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1Flow](#googleclouddialogflowcxv3beta1flow)

### dialogflow.projects.locations.agents.intents.list
Returns the list of all intents in the specified agent.


```js
google_dialogflow.dialogflow.projects.locations.agents.intents.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The agent to list all intents for. Format: `projects//locations//agents/`.
  * intentView `string` (values: INTENT_VIEW_UNSPECIFIED, INTENT_VIEW_PARTIAL, INTENT_VIEW_FULL): The resource view to apply to the returned intent.
  * languageCode `string`: The language to list intents for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
  * pageSize `integer`: The maximum number of items to return in a single page. By default 100 and at most 1000.
  * pageToken `string`: The next_page_token value returned from a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1ListIntentsResponse](#googleclouddialogflowcxv3beta1listintentsresponse)

### dialogflow.projects.locations.agents.intents.create
Creates an intent in the specified agent.


```js
google_dialogflow.dialogflow.projects.locations.agents.intents.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The agent to create an intent for. Format: `projects//locations//agents/`.
  * languageCode `string`: The language of the following fields in `intent`: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
  * body [GoogleCloudDialogflowCxV3beta1Intent](#googleclouddialogflowcxv3beta1intent)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1Intent](#googleclouddialogflowcxv3beta1intent)

### dialogflow.projects.locations.agents.flows.pages.list
Returns the list of all pages in the specified flow.


```js
google_dialogflow.dialogflow.projects.locations.agents.flows.pages.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The flow to list all pages for. Format: `projects//locations//agents//flows/`.
  * languageCode `string`: The language to list pages for. The following fields are language dependent: * `Page.entry_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_route_groups.transition_routes.trigger_fulfillment.messages` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
  * pageSize `integer`: The maximum number of items to return in a single page. By default 100 and at most 1000.
  * pageToken `string`: The next_page_token value returned from a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1ListPagesResponse](#googleclouddialogflowcxv3beta1listpagesresponse)

### dialogflow.projects.locations.agents.flows.pages.create
Creates a page in the specified flow.


```js
google_dialogflow.dialogflow.projects.locations.agents.flows.pages.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The flow to create a page for. Format: `projects//locations//agents//flows/`.
  * languageCode `string`: The language of the following fields in `page`: * `Page.entry_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_route_groups.transition_routes.trigger_fulfillment.messages` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
  * body [GoogleCloudDialogflowCxV3beta1Page](#googleclouddialogflowcxv3beta1page)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1Page](#googleclouddialogflowcxv3beta1page)

### dialogflow.projects.locations.securitySettings.list
Returns the list of all security settings in the specified location.


```js
google_dialogflow.dialogflow.projects.locations.securitySettings.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The location to list all security settings for. Format: `projects//locations/`.
  * pageSize `integer`: The maximum number of items to return in a single page. By default 20 and at most 100.
  * pageToken `string`: The next_page_token value returned from a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse](#googleclouddialogflowcxv3beta1listsecuritysettingsresponse)

### dialogflow.projects.locations.securitySettings.create
Create security settings in the specified location.


```js
google_dialogflow.dialogflow.projects.locations.securitySettings.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The location to create an SecuritySettings for. Format: `projects//locations/`.
  * body [GoogleCloudDialogflowCxV3beta1SecuritySettings](#googleclouddialogflowcxv3beta1securitysettings)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1SecuritySettings](#googleclouddialogflowcxv3beta1securitysettings)

### dialogflow.projects.locations.agents.flows.transitionRouteGroups.list
Returns the list of all transition route groups in the specified flow.


```js
google_dialogflow.dialogflow.projects.locations.agents.flows.transitionRouteGroups.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The flow to list all transition route groups for. Format: `projects//locations//agents//flows/`.
  * languageCode `string`: The language to list transition route groups for. The field `messages` in TransitionRoute is language dependent. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
  * pageSize `integer`: The maximum number of items to return in a single page. By default 100 and at most 1000.
  * pageToken `string`: The next_page_token value returned from a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse](#googleclouddialogflowcxv3beta1listtransitionroutegroupsresponse)

### dialogflow.projects.locations.agents.flows.transitionRouteGroups.create
Creates an TransitionRouteGroup in the specified flow.


```js
google_dialogflow.dialogflow.projects.locations.agents.flows.transitionRouteGroups.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The flow to create an TransitionRouteGroup for. Format: `projects//locations//agents//flows/`.
  * languageCode `string`: The language to list transition route groups for. The field `messages` in TransitionRoute is language dependent. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
  * body [GoogleCloudDialogflowCxV3beta1TransitionRouteGroup](#googleclouddialogflowcxv3beta1transitionroutegroup)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1TransitionRouteGroup](#googleclouddialogflowcxv3beta1transitionroutegroup)

### dialogflow.projects.locations.agents.flows.versions.list
Returns the list of all versions in the specified Flow.


```js
google_dialogflow.dialogflow.projects.locations.agents.flows.versions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The Flow to list all versions for. Format: `projects//locations//agents//flows/`.
  * pageSize `integer`: The maximum number of items to return in a single page. By default 20 and at most 100.
  * pageToken `string`: The next_page_token value returned from a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1ListVersionsResponse](#googleclouddialogflowcxv3beta1listversionsresponse)

### dialogflow.projects.locations.agents.flows.versions.create
Creates a Version in the specified Flow.


```js
google_dialogflow.dialogflow.projects.locations.agents.flows.versions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The Flow to create an Version for. Format: `projects//locations//agents//flows/`.
  * body [GoogleCloudDialogflowCxV3beta1Version](#googleclouddialogflowcxv3beta1version)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### dialogflow.projects.locations.agents.webhooks.list
Returns the list of all webhooks in the specified agent.


```js
google_dialogflow.dialogflow.projects.locations.agents.webhooks.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The agent to list all webhooks for. Format: `projects//locations//agents/`.
  * pageSize `integer`: The maximum number of items to return in a single page. By default 100 and at most 1000.
  * pageToken `string`: The next_page_token value returned from a previous list request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1ListWebhooksResponse](#googleclouddialogflowcxv3beta1listwebhooksresponse)

### dialogflow.projects.locations.agents.webhooks.create
Creates a webhook in the specified agent.


```js
google_dialogflow.dialogflow.projects.locations.agents.webhooks.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The agent to create a webhook for. Format: `projects//locations//agents/`.
  * body [GoogleCloudDialogflowCxV3beta1Webhook](#googleclouddialogflowcxv3beta1webhook)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1Webhook](#googleclouddialogflowcxv3beta1webhook)

### dialogflow.projects.locations.agents.sessions.detectIntent
Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).


```js
google_dialogflow.dialogflow.projects.locations.agents.sessions.detectIntent({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
  * body [GoogleCloudDialogflowCxV3beta1DetectIntentRequest](#googleclouddialogflowcxv3beta1detectintentrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1DetectIntentResponse](#googleclouddialogflowcxv3beta1detectintentresponse)

### dialogflow.projects.locations.agents.sessions.fulfillIntent
Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.


```js
google_dialogflow.dialogflow.projects.locations.agents.sessions.fulfillIntent({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
  * body [GoogleCloudDialogflowCxV3beta1FulfillIntentRequest](#googleclouddialogflowcxv3beta1fulfillintentrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1FulfillIntentResponse](#googleclouddialogflowcxv3beta1fulfillintentresponse)

### dialogflow.projects.locations.agents.sessions.matchIntent
Returns preliminary intent match results, doesn't change the session status.


```js
google_dialogflow.dialogflow.projects.locations.agents.sessions.matchIntent({
  "session": ""
}, context)
```

#### Input
* input `object`
  * session **required** `string`: Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
  * body [GoogleCloudDialogflowCxV3beta1MatchIntentRequest](#googleclouddialogflowcxv3beta1matchintentrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleCloudDialogflowCxV3beta1MatchIntentResponse](#googleclouddialogflowcxv3beta1matchintentresponse)



## Definitions

### GoogleCloudDialogflowCxV3CreateVersionOperationMetadata
* GoogleCloudDialogflowCxV3CreateVersionOperationMetadata `object`: Metadata associated with the long running operation for Versions.CreateVersion.
  * version `string`: Name of the created version. Format: `projects//locations//agents//flows//versions/`.

### GoogleCloudDialogflowCxV3ExportAgentResponse
* GoogleCloudDialogflowCxV3ExportAgentResponse `object`: The response message for Agents.ExportAgent.
  * agentContent `string`: Uncompressed raw byte content for agent.
  * agentUri `string`: The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in ExportAgentRequest.

### GoogleCloudDialogflowCxV3PageInfo
* GoogleCloudDialogflowCxV3PageInfo `object`: Represents page information communicated to and from the webhook.
  * currentPage `string`: Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the current page. Format: `projects//locations//agents//flows//pages/`.
  * formInfo [GoogleCloudDialogflowCxV3PageInfoFormInfo](#googleclouddialogflowcxv3pageinfoforminfo)

### GoogleCloudDialogflowCxV3PageInfoFormInfo
* GoogleCloudDialogflowCxV3PageInfoFormInfo `object`: Represents form information.
  * parameterInfo `array`: Optional for both WebhookRequest and WebhookResponse. The parameters contained in the form. Note that the webhook cannot add or remove any form parameter.
    * items [GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo](#googleclouddialogflowcxv3pageinfoforminfoparameterinfo)

### GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo
* GoogleCloudDialogflowCxV3PageInfoFormInfoParameterInfo `object`: Represents parameter information.
  * displayName `string`: Always present for WebhookRequest. Required for WebhookResponse. The human-readable name of the parameter, unique within the form. This field cannot be modified by the webhook.
  * justCollected `boolean`: Optional for WebhookRequest. Ignored for WebhookResponse. Indicates if the parameter value was just collected on the last conversation turn.
  * required `boolean`: Optional for both WebhookRequest and WebhookResponse. Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes.
  * state `string` (values: PARAMETER_STATE_UNSPECIFIED, EMPTY, INVALID, FILLED): Always present for WebhookRequest. Required for WebhookResponse. The state of the parameter. This field can be set to INVALID by the webhook to invalidate the parameter; other values set by the webhook will be ignored.

### GoogleCloudDialogflowCxV3ResponseMessage
* GoogleCloudDialogflowCxV3ResponseMessage `object`: Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
  * conversationSuccess [GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess](#googleclouddialogflowcxv3responsemessageconversationsuccess)
  * endInteraction [GoogleCloudDialogflowCxV3ResponseMessageEndInteraction](#googleclouddialogflowcxv3responsemessageendinteraction)
  * liveAgentHandoff [GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff](#googleclouddialogflowcxv3responsemessageliveagenthandoff)
  * mixedAudio [GoogleCloudDialogflowCxV3ResponseMessageMixedAudio](#googleclouddialogflowcxv3responsemessagemixedaudio)
  * outputAudioText [GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText](#googleclouddialogflowcxv3responsemessageoutputaudiotext)
  * payload `object`: Returns a response containing a custom, platform-specific payload.
  * playAudio [GoogleCloudDialogflowCxV3ResponseMessagePlayAudio](#googleclouddialogflowcxv3responsemessageplayaudio)
  * text [GoogleCloudDialogflowCxV3ResponseMessageText](#googleclouddialogflowcxv3responsemessagetext)

### GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess
* GoogleCloudDialogflowCxV3ResponseMessageConversationSuccess `object`: Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue.
  * metadata `object`: Custom metadata. Dialogflow doesn't impose any structure on this.

### GoogleCloudDialogflowCxV3ResponseMessageEndInteraction
* GoogleCloudDialogflowCxV3ResponseMessageEndInteraction `object`: Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user.

### GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff
* GoogleCloudDialogflowCxV3ResponseMessageLiveAgentHandoff `object`: Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human.
  * metadata `object`: Custom metadata for your handoff procedure. Dialogflow doesn't impose any structure on this.

### GoogleCloudDialogflowCxV3ResponseMessageMixedAudio
* GoogleCloudDialogflowCxV3ResponseMessageMixedAudio `object`: Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user.
  * segments `array`: Segments this audio response is composed of.
    * items [GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment](#googleclouddialogflowcxv3responsemessagemixedaudiosegment)

### GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment
* GoogleCloudDialogflowCxV3ResponseMessageMixedAudioSegment `object`: Represents one segment of audio.
  * allowPlaybackInterruption `boolean`: Output only. Whether the playback of this segment can be interrupted by the end user's speech and the client should then start the next Dialogflow request.
  * audio `string`: Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request.
  * uri `string`: Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it.

### GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText
* GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText `object`: A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
  * allowPlaybackInterruption `boolean`: Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
  * ssml `string`: The SSML text to be synthesized. For more information, see [SSML](/speech/text-to-speech/docs/ssml).
  * text `string`: The raw text to be synthesized.

### GoogleCloudDialogflowCxV3ResponseMessagePlayAudio
* GoogleCloudDialogflowCxV3ResponseMessagePlayAudio `object`: Specifies an audio clip to be played by the client as part of the response.
  * allowPlaybackInterruption `boolean`: Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
  * audioUri `string`: Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.

### GoogleCloudDialogflowCxV3ResponseMessageText
* GoogleCloudDialogflowCxV3ResponseMessageText `object`: The text response message.
  * allowPlaybackInterruption `boolean`: Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
  * text `array`: Required. A collection of text responses.
    * items `string`

### GoogleCloudDialogflowCxV3SessionInfo
* GoogleCloudDialogflowCxV3SessionInfo `object`: Represents session information communicated to and from the webhook.
  * parameters `object`: Optional for WebhookRequest. Optional for WebhookResponse. All parameters collected from forms and intents during the session. Parameters can be created, updated, or removed by the webhook. To remove a parameter from the session, the webhook should explicitly set the parameter value to null in WebhookResponse. The map is keyed by parameters' display names.
  * session `string`: Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the session. This field can be used by the webhook to identify a user. Format: `projects//locations//agents//sessions/`.

### GoogleCloudDialogflowCxV3WebhookRequest
* GoogleCloudDialogflowCxV3WebhookRequest `object`: The request message for a webhook call.
  * detectIntentResponseId `string`: Always present. The unique identifier of the DetectIntentResponse that will be returned to the API caller.
  * fulfillmentInfo [GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo](#googleclouddialogflowcxv3webhookrequestfulfillmentinfo)
  * intentInfo [GoogleCloudDialogflowCxV3WebhookRequestIntentInfo](#googleclouddialogflowcxv3webhookrequestintentinfo)
  * messages `array`: The list of rich message responses to present to the user. Webhook can choose to append or replace this list in WebhookResponse.fulfillment_response;
    * items [GoogleCloudDialogflowCxV3ResponseMessage](#googleclouddialogflowcxv3responsemessage)
  * pageInfo [GoogleCloudDialogflowCxV3PageInfo](#googleclouddialogflowcxv3pageinfo)
  * payload `object`: Custom data set in QueryParameters.payload.
  * sessionInfo [GoogleCloudDialogflowCxV3SessionInfo](#googleclouddialogflowcxv3sessioninfo)

### GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo
* GoogleCloudDialogflowCxV3WebhookRequestFulfillmentInfo `object`: Represents fulfillment information communicated to the webhook.
  * tag `string`: Always present. The tag used to identify which fulfillment is being called.

### GoogleCloudDialogflowCxV3WebhookRequestIntentInfo
* GoogleCloudDialogflowCxV3WebhookRequestIntentInfo `object`: Represents intent information communicated to the webhook.
  * parameters `object`: Parameters identified as a result of intent matching. This is a map of the name of the identified parameter to the value of the parameter identified from the user's utterance. All parameters defined in the matched intent that are identified will be surfaced here.
  * lastMatchedIntent `string`: Always present. The unique identifier of the last matched intent. Format: `projects//locations//agents//intents/`.

### GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue
* GoogleCloudDialogflowCxV3WebhookRequestIntentInfoIntentParameterValue `object`: Represents a value for an intent parameter.
  * originalValue `string`: Always present. Original text value extracted from user utterance.

### GoogleCloudDialogflowCxV3WebhookResponse
* GoogleCloudDialogflowCxV3WebhookResponse `object`: The response message for a webhook call.
  * fulfillmentResponse [GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse](#googleclouddialogflowcxv3webhookresponsefulfillmentresponse)
  * pageInfo [GoogleCloudDialogflowCxV3PageInfo](#googleclouddialogflowcxv3pageinfo)
  * payload `object`: Value to append directly to QueryResult.webhook_payloads.
  * sessionInfo [GoogleCloudDialogflowCxV3SessionInfo](#googleclouddialogflowcxv3sessioninfo)
  * targetFlow `string`: The target flow to transition to. Format: `projects//locations//agents//flows/`.
  * targetPage `string`: The target page to transition to. Format: `projects//locations//agents//flows//pages/`.

### GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse
* GoogleCloudDialogflowCxV3WebhookResponseFulfillmentResponse `object`: Represents a fulfillment response to the user.
  * mergeBehavior `string` (values: MERGE_BEHAVIOR_UNSPECIFIED, APPEND, REPLACE): Merge behavior for `messages`.
  * messages `array`: The list of rich message responses to present to the user.
    * items [GoogleCloudDialogflowCxV3ResponseMessage](#googleclouddialogflowcxv3responsemessage)

### GoogleCloudDialogflowCxV3beta1Agent
* GoogleCloudDialogflowCxV3beta1Agent `object`: Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way. After you create an agent, you can add Intents, Entity Types, Flows, Fulfillments, Webhooks, and so on to manage the conversation flows..
  * avatarUri `string`: The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted [Web Demo](https://cloud.google.com/dialogflow/docs/integrations/web-demo) integration.
  * defaultLanguageCode `string`: Immutable. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. This field cannot be set by the Agents.UpdateAgent method.
  * description `string`: The description of the agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  * displayName `string`: Required. The human-readable name of the agent, unique within the location.
  * enableSpellCorrection `boolean`: Indicates if automatic spell correction is enabled in detect intent requests.
  * enableStackdriverLogging `boolean`: Indicates if stackdriver logging is enabled for the agent.
  * name `string`: The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: `projects//locations//agents/`.
  * speechToTextSettings [GoogleCloudDialogflowCxV3beta1SpeechToTextSettings](#googleclouddialogflowcxv3beta1speechtotextsettings)
  * startFlow `string`: Immutable. Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: `projects//locations//agents//flows/`.
  * timeZone `string`: Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

### GoogleCloudDialogflowCxV3beta1AudioInput
* GoogleCloudDialogflowCxV3beta1AudioInput `object`: Represents the natural speech audio to be processed.
  * audio `string`: The natural language speech audio to be processed. A single request can contain up to 1 minute of speech audio data. The transcribed text cannot contain more than 256 bytes. For non-streaming audio detect intent, both `config` and `audio` must be provided. For streaming audio detect intent, `config` must be provided in the first request and `audio` must be provided in all following requests.
  * config [GoogleCloudDialogflowCxV3beta1InputAudioConfig](#googleclouddialogflowcxv3beta1inputaudioconfig)

### GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata
* GoogleCloudDialogflowCxV3beta1CreateVersionOperationMetadata `object`: Metadata associated with the long running operation for Versions.CreateVersion.
  * version `string`: Name of the created version. Format: `projects//locations//agents//flows//versions/`.

### GoogleCloudDialogflowCxV3beta1DetectIntentRequest
* GoogleCloudDialogflowCxV3beta1DetectIntentRequest `object`: The request to detect user's intent.
  * outputAudioConfig [GoogleCloudDialogflowCxV3beta1OutputAudioConfig](#googleclouddialogflowcxv3beta1outputaudioconfig)
  * queryInput [GoogleCloudDialogflowCxV3beta1QueryInput](#googleclouddialogflowcxv3beta1queryinput)
  * queryParams [GoogleCloudDialogflowCxV3beta1QueryParameters](#googleclouddialogflowcxv3beta1queryparameters)

### GoogleCloudDialogflowCxV3beta1DetectIntentResponse
* GoogleCloudDialogflowCxV3beta1DetectIntentResponse `object`: The message returned from the DetectIntent method.
  * outputAudio `string`: The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the `query_result.response_messages` field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content.
  * outputAudioConfig [GoogleCloudDialogflowCxV3beta1OutputAudioConfig](#googleclouddialogflowcxv3beta1outputaudioconfig)
  * queryResult [GoogleCloudDialogflowCxV3beta1QueryResult](#googleclouddialogflowcxv3beta1queryresult)
  * responseId `string`: Output only. The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues.

### GoogleCloudDialogflowCxV3beta1DtmfInput
* GoogleCloudDialogflowCxV3beta1DtmfInput `object`: Represents the input for dtmf event.
  * digits `string`: The dtmf digits.
  * finishDigit `string`: The finish digit (if any).

### GoogleCloudDialogflowCxV3beta1EntityType
* GoogleCloudDialogflowCxV3beta1EntityType `object`: Entities are extracted from user input and represent parameters that are meaningful to your application. For example, a date range, a proper name such as a geographic location or landmark, and so on. Entities represent actionable data for your application. When you define an entity, you can also include synonyms that all map to that entity. For example, "soft drink", "soda", "pop", and so on. There are three types of entities: * **System** - entities that are defined by the Dialogflow API for common data types such as date, time, currency, and so on. A system entity is represented by the `EntityType` type. * **Custom** - entities that are defined by you that represent actionable data that is meaningful to your application. For example, you could define a `pizza.sauce` entity for red or white pizza sauce, a `pizza.cheese` entity for the different types of cheese on a pizza, a `pizza.topping` entity for different toppings, and so on. A custom entity is represented by the `EntityType` type. * **User** - entities that are built for an individual user such as favorites, preferences, playlists, and so on. A user entity is represented by the SessionEntityType type. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).
  * autoExpansionMode `string` (values: AUTO_EXPANSION_MODE_UNSPECIFIED, AUTO_EXPANSION_MODE_DEFAULT): Indicates whether the entity type can be automatically expanded.
  * displayName `string`: Required. The human-readable name of the entity type, unique within the agent.
  * enableFuzzyExtraction `boolean`: Enables fuzzy entity extraction during classification.
  * entities `array`: The collection of entity entries associated with the entity type.
    * items [GoogleCloudDialogflowCxV3beta1EntityTypeEntity](#googleclouddialogflowcxv3beta1entitytypeentity)
  * excludedPhrases `array`: Collection of exceptional words and phrases that shouldn't be matched. For example, if you have a size entity type with entry `giant`(an adjective), you might consider adding `giants`(a noun) as an exclusion. If the kind of entity type is `KIND_MAP`, then the phrases specified by entities and excluded phrases should be mutually exclusive.
    * items [GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase](#googleclouddialogflowcxv3beta1entitytypeexcludedphrase)
  * kind `string` (values: KIND_UNSPECIFIED, KIND_MAP, KIND_LIST, KIND_REGEXP): Required. Indicates the kind of entity type.
  * name `string`: The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType. Format: `projects//locations//agents//entityTypes/`.

### GoogleCloudDialogflowCxV3beta1EntityTypeEntity
* GoogleCloudDialogflowCxV3beta1EntityTypeEntity `object`: An **entity entry** for an associated entity type. Next Id = 8
  * synonyms `array`: Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*. For `KIND_LIST` entity types: * This collection must contain exactly one synonym equal to `value`.
    * items `string`
  * value `string`: Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A canonical value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases).

### GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase
* GoogleCloudDialogflowCxV3beta1EntityTypeExcludedPhrase `object`: An excluded entity phrase that should not be matched.
  * value `string`: Required. The word or phrase to be excluded.

### GoogleCloudDialogflowCxV3beta1Environment
* GoogleCloudDialogflowCxV3beta1Environment `object`: Represents an environment for an agent. You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for testing, development, production, etc.
  * description `string`: The human-readable description of the environment. The maximum length is 500 characters. If exceeded, the request is rejected.
  * displayName `string`: Required. The human-readable name of the environment (unique in an agent). Limit of 64 characters.
  * name `string`: The name of the environment. Format: `projects//locations//agents//environments/`.
  * updateTime `string`: Output only. Update time of this environment.
  * versionConfigs `array`: Required. A list of configurations for flow versions. You should include version configs for all flows that are reachable from `Start Flow` in the agent. Otherwise, an error will be returned.
    * items [GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig](#googleclouddialogflowcxv3beta1environmentversionconfig)

### GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig
* GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig `object`: Configuration for the version.
  * version `string`: Required. Format: projects//locations//agents//flows//versions/.

### GoogleCloudDialogflowCxV3beta1EventHandler
* GoogleCloudDialogflowCxV3beta1EventHandler `object`: An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
  * event `string`: Required. The name of the event to handle.
  * name `string`: Output only. The unique identifier of this event handler.
  * targetFlow `string`: The target flow to transition to. Format: `projects//locations//agents//flows/`.
  * targetPage `string`: The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
  * triggerFulfillment [GoogleCloudDialogflowCxV3beta1Fulfillment](#googleclouddialogflowcxv3beta1fulfillment)

### GoogleCloudDialogflowCxV3beta1EventInput
* GoogleCloudDialogflowCxV3beta1EventInput `object`: Represents the event to trigger.
  * event `string`: Name of the event.

### GoogleCloudDialogflowCxV3beta1ExportAgentRequest
* GoogleCloudDialogflowCxV3beta1ExportAgentRequest `object`: The request message for Agents.ExportAgent.
  * agentUri `string`: Optional. The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to export the agent to. The format of this URI must be `gs:///`. If left unspecified, the serialized agent is returned inline.

### GoogleCloudDialogflowCxV3beta1ExportAgentResponse
* GoogleCloudDialogflowCxV3beta1ExportAgentResponse `object`: The response message for Agents.ExportAgent.
  * agentContent `string`: Uncompressed raw byte content for agent.
  * agentUri `string`: The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in ExportAgentRequest.

### GoogleCloudDialogflowCxV3beta1Flow
* GoogleCloudDialogflowCxV3beta1Flow `object`: Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
  * description `string`: The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.
  * displayName `string`: Required. The human-readable name of the flow.
  * eventHandlers `array`: A flow's event handlers serve two purposes: * They are responsible for handling events (e.g. no match, webhook errors) in the flow. * They are inherited by every page's event handlers, which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow. Unlike transition_routes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored.
    * items [GoogleCloudDialogflowCxV3beta1EventHandler](#googleclouddialogflowcxv3beta1eventhandler)
  * name `string`: The unique identifier of the flow. Format: `projects//locations//agents//flows/`.
  * nluSettings [GoogleCloudDialogflowCxV3beta1NluSettings](#googleclouddialogflowcxv3beta1nlusettings)
  * transitionRoutes `array`: A flow's transition routes serve two purposes: * They are responsible for matching the user's first utterances in the flow. * They are inherited by every page's transition routes and can support use cases such as the user saying "help" or "can I talk to a human?", which can be handled in a common way regardless of the current page. Transition routes defined in the page have higher priority than those defined in the flow. TransitionRoutes are evalauted in the following order: * TransitionRoutes with intent specified.. * TransitionRoutes with only condition specified. TransitionRoutes with intent specified are inherited by pages in the flow.
    * items [GoogleCloudDialogflowCxV3beta1TransitionRoute](#googleclouddialogflowcxv3beta1transitionroute)

### GoogleCloudDialogflowCxV3beta1Form
* GoogleCloudDialogflowCxV3beta1Form `object`: A form is a data model that groups related parameters that can be collected from the user. The process in which the agent prompts the user and collects parameter values from the user is called form filling. A form can be added to a page. When form filling is done, the filled parameters will be written to the session.
  * parameters `array`: Parameters to collect from the user.
    * items [GoogleCloudDialogflowCxV3beta1FormParameter](#googleclouddialogflowcxv3beta1formparameter)

### GoogleCloudDialogflowCxV3beta1FormParameter
* GoogleCloudDialogflowCxV3beta1FormParameter `object`: Represents a form parameter.
  * displayName `string`: Required. The human-readable name of the parameter, unique within the form.
  * entityType `string`: Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types.
  * fillBehavior [GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior](#googleclouddialogflowcxv3beta1formparameterfillbehavior)
  * isList `boolean`: Indicates whether the parameter represents a list of values.
  * redact `boolean`: Indicates whether the parameter content is logged in text and audio. If it is set to true, the parameter content will be replaced to parameter name in both request and response. The default value is false.
  * required `boolean`: Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes.

### GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior
* GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior `object`: Configuration for how the filling of a parameter should be handled.
  * initialPromptFulfillment [GoogleCloudDialogflowCxV3beta1Fulfillment](#googleclouddialogflowcxv3beta1fulfillment)
  * repromptEventHandlers `array`: The handlers for parameter-level events, used to provide reprompt for the parameter or transition to a different page/flow. The supported events are: * `sys.no-match-`, where N can be from 1 to 6 * `sys.no-match-default` * `sys.no-input-`, where N can be from 1 to 6 * `sys.no-input-default` * `sys.invalid-parameter` `initial_prompt_fulfillment` provides the first prompt for the parameter. If the user's response does not fill the parameter, a no-match/no-input event will be triggered, and the fulfillment associated with the `sys.no-match-1`/`sys.no-input-1` handler (if defined) will be called to provide a prompt. The `sys.no-match-2`/`sys.no-input-2` handler (if defined) will respond to the next no-match/no-input event, and so on. A `sys.no-match-default` or `sys.no-input-default` handler will be used to handle all following no-match/no-input events after all numbered no-match/no-input handlers for the parameter are consumed. A `sys.invalid-parameter` handler can be defined to handle the case where the parameter values have been `invalidated` by webhook. For example, if the user's response fill the parameter, however the parameter was invalidated by webhook, the fulfillment associated with the `sys.invalid-parameter` handler (if defined) will be called to provide a prompt. If the event handler for the corresponding event can't be found on the parameter, `initial_prompt_fulfillment` will be re-prompted.
    * items [GoogleCloudDialogflowCxV3beta1EventHandler](#googleclouddialogflowcxv3beta1eventhandler)

### GoogleCloudDialogflowCxV3beta1FulfillIntentRequest
* GoogleCloudDialogflowCxV3beta1FulfillIntentRequest `object`: Request of FulfillIntent
  * match [GoogleCloudDialogflowCxV3beta1Match](#googleclouddialogflowcxv3beta1match)
  * matchIntentRequest [GoogleCloudDialogflowCxV3beta1MatchIntentRequest](#googleclouddialogflowcxv3beta1matchintentrequest)
  * outputAudioConfig [GoogleCloudDialogflowCxV3beta1OutputAudioConfig](#googleclouddialogflowcxv3beta1outputaudioconfig)

### GoogleCloudDialogflowCxV3beta1FulfillIntentResponse
* GoogleCloudDialogflowCxV3beta1FulfillIntentResponse `object`: Response of FulfillIntent
  * outputAudio `string`: The audio data bytes encoded as specified in the request. Note: The output audio is generated based on the values of default platform text responses found in the `query_result.response_messages` field. If multiple default text responses exist, they will be concatenated when generating audio. If no default platform text responses exist, the generated audio content will be empty. In some scenarios, multiple output audio fields may be present in the response structure. In these cases, only the top-most-level audio output has content.
  * outputAudioConfig [GoogleCloudDialogflowCxV3beta1OutputAudioConfig](#googleclouddialogflowcxv3beta1outputaudioconfig)
  * queryResult [GoogleCloudDialogflowCxV3beta1QueryResult](#googleclouddialogflowcxv3beta1queryresult)
  * responseId `string`: Output only. The unique identifier of the response. It can be used to locate a response in the training example set or for reporting issues.

### GoogleCloudDialogflowCxV3beta1Fulfillment
* GoogleCloudDialogflowCxV3beta1Fulfillment `object`: A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
  * conditionalCases `array`: Conditional cases for this fulfillment.
    * items [GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases](#googleclouddialogflowcxv3beta1fulfillmentconditionalcases)
  * messages `array`: The list of rich message responses to present to the user.
    * items [GoogleCloudDialogflowCxV3beta1ResponseMessage](#googleclouddialogflowcxv3beta1responsemessage)
  * setParameterActions `array`: Set parameter values before executing the webhook.
    * items [GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction](#googleclouddialogflowcxv3beta1fulfillmentsetparameteraction)
  * tag `string`: The tag used by the webhook to identify which fulfillment is being called. This field is required if `webhook` is specified.
  * webhook `string`: The webhook to call. Format: `projects//locations//agents//webhooks/`.

### GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases
* GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases `object`: A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
  * cases `array`: A list of cascading if-else conditions.
    * items [GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase](#googleclouddialogflowcxv3beta1fulfillmentconditionalcasescase)

### GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase
* GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase `object`: Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
  * caseContent `array`: A list of case content.
    * items [GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent](#googleclouddialogflowcxv3beta1fulfillmentconditionalcasescasecasecontent)
  * condition `string`: The condition to activate and select this case. Empty means the condition is always true. The condition is evaluated against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition).

### GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent
* GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent `object`: The list of messages or conditional cases to activate for this case.
  * additionalCases [GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases](#googleclouddialogflowcxv3beta1fulfillmentconditionalcases)
  * message [GoogleCloudDialogflowCxV3beta1ResponseMessage](#googleclouddialogflowcxv3beta1responsemessage)

### GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction
* GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction `object`: Setting a parameter value.
  * parameter `string`: Display name of the parameter.

### GoogleCloudDialogflowCxV3beta1InputAudioConfig
* GoogleCloudDialogflowCxV3beta1InputAudioConfig `object`: Instructs the speech recognizer on how to process the audio content.
  * audioEncoding `string` (values: AUDIO_ENCODING_UNSPECIFIED, AUDIO_ENCODING_LINEAR_16, AUDIO_ENCODING_FLAC, AUDIO_ENCODING_MULAW, AUDIO_ENCODING_AMR, AUDIO_ENCODING_AMR_WB, AUDIO_ENCODING_OGG_OPUS, AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE): Required. Audio encoding of the audio content to process.
  * enableWordInfo `boolean`: Optional. If `true`, Dialogflow returns SpeechWordInfo in StreamingRecognitionResult with information about the recognized speech words, e.g. start and end time offsets. If false or unspecified, Speech doesn't return any word-level information.
  * model `string`: Optional. Which Speech model to select for the given request. Select the model best suited to your domain to get best results. If a model is not explicitly specified, then we auto-select a model based on the parameters in the InputAudioConfig. If enhanced speech model is enabled for the agent and an enhanced version of the specified model for the language does not exist, then the speech is recognized using the standard version of the specified model. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics#select-model) for more details.
  * modelVariant `string` (values: SPEECH_MODEL_VARIANT_UNSPECIFIED, USE_BEST_AVAILABLE, USE_STANDARD, USE_ENHANCED): Optional. Which variant of the Speech model to use.
  * phraseHints `array`: Optional. A list of strings containing words and phrases that the speech recognizer should recognize with higher likelihood. See [the Cloud Speech documentation](https://cloud.google.com/speech-to-text/docs/basics#phrase-hints) for more details.
    * items `string`
  * sampleRateHertz `integer`: Sample rate (in Hertz) of the audio content sent in the query. Refer to [Cloud Speech API documentation](https://cloud.google.com/speech-to-text/docs/basics) for more details.
  * singleUtterance `boolean`: Optional. If `false` (default), recognition does not cease until the client closes the stream. If `true`, the recognizer will detect a single spoken utterance in input audio. Recognition ceases when it detects the audio's voice has stopped or paused. In this case, once a detected intent is received, the client should close the stream and start a new request with a new stream as needed. Note: This setting is relevant only for streaming methods.

### GoogleCloudDialogflowCxV3beta1Intent
* GoogleCloudDialogflowCxV3beta1Intent `object`: An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
  * parameters `array`: The collection of parameters associated with the intent.
    * items [GoogleCloudDialogflowCxV3beta1IntentParameter](#googleclouddialogflowcxv3beta1intentparameter)
  * description `string`: Optional. Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.
  * displayName `string`: Required. The human-readable name of the intent, unique within the agent.
  * isFallback `boolean`: Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
  * labels `object`: Optional. The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes. Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys-contextual" means the intent is a contextual intent.
  * name `string`: The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`.
  * priority `integer`: The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
  * trainingPhrases `array`: The collection of training phrases the agent is trained on to identify the intent.
    * items [GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase](#googleclouddialogflowcxv3beta1intenttrainingphrase)

### GoogleCloudDialogflowCxV3beta1IntentInput
* GoogleCloudDialogflowCxV3beta1IntentInput `object`: Represents the intent to trigger programmatically rather than as a result of natural language processing.
  * intent `string`: Required. The unique identifier of the intent. Format: `projects//locations//agents//intents/`.

### GoogleCloudDialogflowCxV3beta1IntentParameter
* GoogleCloudDialogflowCxV3beta1IntentParameter `object`: Represents an intent parameter.
  * entityType `string`: Required. The entity type of the parameter. Format: `projects/-/locations/-/agents/-/entityTypes/` for system entity types (for example, `projects/-/locations/-/agents/-/entityTypes/sys.date`), or `projects//locations//agents//entityTypes/` for developer entity types.
  * id `string`: Required. The unique identifier of the parameter. This field is used by training phrases to annotate their parts.
  * isList `boolean`: Indicates whether the parameter represents a list of values.
  * redact `boolean`: Indicates whether the parameter content is logged in text and audio. If it is set to true, the parameter content will be replaced to parameter id in both request and response. The default value is false.

### GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase
* GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase `object`: Represents an example that the agent is trained on to identify the intent.
  * id `string`: Output only. The unique identifier of the training phrase.
  * parts `array`: Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `parameter_id` field is set.
    * items [GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart](#googleclouddialogflowcxv3beta1intenttrainingphrasepart)
  * repeatCount `integer`: Indicates how many times this example was added to the intent.

### GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart
* GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart `object`: Represents a part of a training phrase.
  * parameterId `string`: The parameter used to annotate this part of the training phrase. This field is required for annotated parts of the training phrase.
  * text `string`: Required. The text for this part.

### GoogleCloudDialogflowCxV3beta1ListAgentsResponse
* GoogleCloudDialogflowCxV3beta1ListAgentsResponse `object`: The response message for Agents.ListAgents.
  * agents `array`: The list of agents. There will be a maximum number of items returned based on the page_size field in the request.
    * items [GoogleCloudDialogflowCxV3beta1Agent](#googleclouddialogflowcxv3beta1agent)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse
* GoogleCloudDialogflowCxV3beta1ListEntityTypesResponse `object`: The response message for EntityTypes.ListEntityTypes.
  * entityTypes `array`: The list of entity types. There will be a maximum number of items returned based on the page_size field in the request.
    * items [GoogleCloudDialogflowCxV3beta1EntityType](#googleclouddialogflowcxv3beta1entitytype)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse
* GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse `object`: The response message for Environments.ListEnvironments.
  * environments `array`: The list of environments. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
    * items [GoogleCloudDialogflowCxV3beta1Environment](#googleclouddialogflowcxv3beta1environment)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### GoogleCloudDialogflowCxV3beta1ListFlowsResponse
* GoogleCloudDialogflowCxV3beta1ListFlowsResponse `object`: The response message for Flows.ListFlows.
  * flows `array`: The list of flows. There will be a maximum number of items returned based on the page_size field in the request.
    * items [GoogleCloudDialogflowCxV3beta1Flow](#googleclouddialogflowcxv3beta1flow)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### GoogleCloudDialogflowCxV3beta1ListIntentsResponse
* GoogleCloudDialogflowCxV3beta1ListIntentsResponse `object`: The response message for Intents.ListIntents.
  * intents `array`: The list of intents. There will be a maximum number of items returned based on the page_size field in the request.
    * items [GoogleCloudDialogflowCxV3beta1Intent](#googleclouddialogflowcxv3beta1intent)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### GoogleCloudDialogflowCxV3beta1ListPagesResponse
* GoogleCloudDialogflowCxV3beta1ListPagesResponse `object`: The response message for Pages.ListPages.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * pages `array`: The list of pages. There will be a maximum number of items returned based on the page_size field in the request.
    * items [GoogleCloudDialogflowCxV3beta1Page](#googleclouddialogflowcxv3beta1page)

### GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse
* GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse `object`: The response message for SecuritySettings.ListSecuritySettings.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * securitySettings `array`: The list of security settings.
    * items [GoogleCloudDialogflowCxV3beta1SecuritySettings](#googleclouddialogflowcxv3beta1securitysettings)

### GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse
* GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse `object`: The response message for SessionEntityTypes.ListSessionEntityTypes.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * sessionEntityTypes `array`: The list of session entity types. There will be a maximum number of items returned based on the page_size field in the request.
    * items [GoogleCloudDialogflowCxV3beta1SessionEntityType](#googleclouddialogflowcxv3beta1sessionentitytype)

### GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse
* GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse `object`: The response message for TransitionRouteGroups.ListTransitionRouteGroups.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * transitionRouteGroups `array`: The list of transition route groups. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
    * items [GoogleCloudDialogflowCxV3beta1TransitionRouteGroup](#googleclouddialogflowcxv3beta1transitionroutegroup)

### GoogleCloudDialogflowCxV3beta1ListVersionsResponse
* GoogleCloudDialogflowCxV3beta1ListVersionsResponse `object`: The response message for Versions.ListVersions.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * versions `array`: A list of versions. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
    * items [GoogleCloudDialogflowCxV3beta1Version](#googleclouddialogflowcxv3beta1version)

### GoogleCloudDialogflowCxV3beta1ListWebhooksResponse
* GoogleCloudDialogflowCxV3beta1ListWebhooksResponse `object`: The response message for Webhooks.ListWebhooks.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * webhooks `array`: The list of webhooks. There will be a maximum number of items returned based on the page_size field in the request.
    * items [GoogleCloudDialogflowCxV3beta1Webhook](#googleclouddialogflowcxv3beta1webhook)

### GoogleCloudDialogflowCxV3beta1LoadVersionRequest
* GoogleCloudDialogflowCxV3beta1LoadVersionRequest `object`: The request message for Versions.LoadVersion.
  * allowOverrideAgentResources `boolean`: This field is used to prevent accidental overwrite of other agent resources in the draft version, which can potentially impact other flow's behavior. If `allow_override_agent_resources` is false, conflicted agent-level resources will not be overridden (i.e. intents, entities, webhooks).

### GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse
* GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse `object`: The response message for Environments.LookupEnvironmentHistory.
  * environments `array`: Represents a list of snapshots for an environment. Time of the snapshots is stored in `update_time`.
    * items [GoogleCloudDialogflowCxV3beta1Environment](#googleclouddialogflowcxv3beta1environment)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### GoogleCloudDialogflowCxV3beta1Match
* GoogleCloudDialogflowCxV3beta1Match `object`: Represents one match result of MatchIntent.
  * parameters `object`: The collection of parameters extracted from the query. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
  * confidence `number`: The confidence of this match. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation.
  * event `string`: The event that matched the query. Only filled for `EVENT` match type.
  * intent [GoogleCloudDialogflowCxV3beta1Intent](#googleclouddialogflowcxv3beta1intent)
  * matchType `string` (values: MATCH_TYPE_UNSPECIFIED, INTENT, DIRECT_INTENT, PARAMETER_FILLING, NO_MATCH, NO_INPUT, EVENT): Type of this Match.
  * resolvedInput `string`: Final text input which was matched during MatchIntent. This value can be different from original input sent in request because of spelling correction or other processing.

### GoogleCloudDialogflowCxV3beta1MatchIntentRequest
* GoogleCloudDialogflowCxV3beta1MatchIntentRequest `object`: Request of MatchIntent.
  * queryInput [GoogleCloudDialogflowCxV3beta1QueryInput](#googleclouddialogflowcxv3beta1queryinput)
  * queryParams [GoogleCloudDialogflowCxV3beta1QueryParameters](#googleclouddialogflowcxv3beta1queryparameters)

### GoogleCloudDialogflowCxV3beta1MatchIntentResponse
* GoogleCloudDialogflowCxV3beta1MatchIntentResponse `object`: Response of MatchIntent.
  * currentPage [GoogleCloudDialogflowCxV3beta1Page](#googleclouddialogflowcxv3beta1page)
  * matches `array`: Match results, if more than one, ordered descendingly by the confidence we have that the particular intent matches the query.
    * items [GoogleCloudDialogflowCxV3beta1Match](#googleclouddialogflowcxv3beta1match)
  * text `string`: If natural language text was provided as input, this field will contain a copy of the text.
  * transcript `string`: If natural language speech audio was provided as input, this field will contain the trascript for the audio.
  * triggerEvent `string`: If an event was provided as input, this field will contain a copy of the event name.
  * triggerIntent `string`: If an intent was provided as input, this field will contain a copy of the intent identifier.

### GoogleCloudDialogflowCxV3beta1NluSettings
* GoogleCloudDialogflowCxV3beta1NluSettings `object`: Settings related to NLU.
  * classificationThreshold `number`: To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.
  * modelTrainingMode `string` (values: MODEL_TRAINING_MODE_UNSPECIFIED, MODEL_TRAINING_MODE_AUTOMATIC, MODEL_TRAINING_MODE_MANUAL): Indicates NLU model training mode.
  * modelType `string` (values: MODEL_TYPE_UNSPECIFIED, MODEL_TYPE_STANDARD, MODEL_TYPE_ADVANCED): Indicates the type of NLU model.

### GoogleCloudDialogflowCxV3beta1OutputAudioConfig
* GoogleCloudDialogflowCxV3beta1OutputAudioConfig `object`: Instructs the speech synthesizer how to generate the output audio content.
  * audioEncoding `string` (values: OUTPUT_AUDIO_ENCODING_UNSPECIFIED, OUTPUT_AUDIO_ENCODING_LINEAR_16, OUTPUT_AUDIO_ENCODING_MP3, OUTPUT_AUDIO_ENCODING_MP3_64_KBPS, OUTPUT_AUDIO_ENCODING_OGG_OPUS, OUTPUT_AUDIO_ENCODING_MULAW): Required. Audio encoding of the synthesized audio content.
  * sampleRateHertz `integer`: Optional. The synthesis sample rate (in hertz) for this audio. If not provided, then the synthesizer will use the default sample rate based on the audio encoding. If this is different from the voice's natural sample rate, then the synthesizer will honor this request by converting to the desired sample rate (which might result in worse audio quality).
  * synthesizeSpeechConfig [GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig](#googleclouddialogflowcxv3beta1synthesizespeechconfig)

### GoogleCloudDialogflowCxV3beta1Page
* GoogleCloudDialogflowCxV3beta1Page `object`: A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
  * displayName `string`: Required. The human-readable name of the page, unique within the agent.
  * entryFulfillment [GoogleCloudDialogflowCxV3beta1Fulfillment](#googleclouddialogflowcxv3beta1fulfillment)
  * eventHandlers `array`: Handlers associated with the page to handle events such as webhook errors, no match or no input.
    * items [GoogleCloudDialogflowCxV3beta1EventHandler](#googleclouddialogflowcxv3beta1eventhandler)
  * form [GoogleCloudDialogflowCxV3beta1Form](#googleclouddialogflowcxv3beta1form)
  * name `string`: The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`.
  * transitionRouteGroups `array`: Ordered list of `TransitionRouteGroups` associated with the page. Transition route groups must be unique within a page. * If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -> page's transition route group -> flow's transition routes. * If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence. Format:`projects//locations//agents//flows//transitionRouteGroups/`.
    * items `string`
  * transitionRoutes `array`: A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow. When we are in a certain page, the TransitionRoutes are evalauted in the following order: * TransitionRoutes defined in the page with intent specified. * TransitionRoutes defined in the transition route groups. * TransitionRoutes defined in flow with intent specified. * TransitionRoutes defined in the page with only condition specified.
    * items [GoogleCloudDialogflowCxV3beta1TransitionRoute](#googleclouddialogflowcxv3beta1transitionroute)

### GoogleCloudDialogflowCxV3beta1PageInfo
* GoogleCloudDialogflowCxV3beta1PageInfo `object`: Represents page information communicated to and from the webhook.
  * currentPage `string`: Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the current page. Format: `projects//locations//agents//flows//pages/`.
  * formInfo [GoogleCloudDialogflowCxV3beta1PageInfoFormInfo](#googleclouddialogflowcxv3beta1pageinfoforminfo)

### GoogleCloudDialogflowCxV3beta1PageInfoFormInfo
* GoogleCloudDialogflowCxV3beta1PageInfoFormInfo `object`: Represents form information.
  * parameterInfo `array`: Optional for both WebhookRequest and WebhookResponse. The parameters contained in the form. Note that the webhook cannot add or remove any form parameter.
    * items [GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo](#googleclouddialogflowcxv3beta1pageinfoforminfoparameterinfo)

### GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo
* GoogleCloudDialogflowCxV3beta1PageInfoFormInfoParameterInfo `object`: Represents parameter information.
  * displayName `string`: Always present for WebhookRequest. Required for WebhookResponse. The human-readable name of the parameter, unique within the form. This field cannot be modified by the webhook.
  * justCollected `boolean`: Optional for WebhookRequest. Ignored for WebhookResponse. Indicates if the parameter value was just collected on the last conversation turn.
  * required `boolean`: Optional for both WebhookRequest and WebhookResponse. Indicates whether the parameter is required. Optional parameters will not trigger prompts; however, they are filled if the user specifies them. Required parameters must be filled before form filling concludes.
  * state `string` (values: PARAMETER_STATE_UNSPECIFIED, EMPTY, INVALID, FILLED): Always present for WebhookRequest. Required for WebhookResponse. The state of the parameter. This field can be set to INVALID by the webhook to invalidate the parameter; other values set by the webhook will be ignored.

### GoogleCloudDialogflowCxV3beta1QueryInput
* GoogleCloudDialogflowCxV3beta1QueryInput `object`: Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered. 
  * audio [GoogleCloudDialogflowCxV3beta1AudioInput](#googleclouddialogflowcxv3beta1audioinput)
  * dtmf [GoogleCloudDialogflowCxV3beta1DtmfInput](#googleclouddialogflowcxv3beta1dtmfinput)
  * event [GoogleCloudDialogflowCxV3beta1EventInput](#googleclouddialogflowcxv3beta1eventinput)
  * intent [GoogleCloudDialogflowCxV3beta1IntentInput](#googleclouddialogflowcxv3beta1intentinput)
  * languageCode `string`: Required. The language of the input. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
  * text [GoogleCloudDialogflowCxV3beta1TextInput](#googleclouddialogflowcxv3beta1textinput)

### GoogleCloudDialogflowCxV3beta1QueryParameters
* GoogleCloudDialogflowCxV3beta1QueryParameters `object`: Represents the parameters of a conversational query.
  * parameters `object`: Additional parameters to be put into session parameters. To remove a parameter from the session, clients should explicitly set the parameter value to null. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
  * analyzeQueryTextSentiment `boolean`: Configures whether sentiment analysis should be performed. If not provided, sentiment analysis is not performed.
  * geoLocation [GoogleTypeLatLng](#googletypelatlng)
  * payload `object`: This field can be used to pass custom data into the webhook associated with the agent. Arbitrary JSON objects are supported.
  * sessionEntityTypes `array`: Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session of this query.
    * items [GoogleCloudDialogflowCxV3beta1SessionEntityType](#googleclouddialogflowcxv3beta1sessionentitytype)
  * timeZone `string`: The time zone of this conversational query from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. If not provided, the time zone specified in the agent is used.
  * webhookHeaders `object`: This field can be used to pass HTTP headers for a webhook call. These headers will be sent to webhook along with the headers that have been configured through Dialogflow web console. The headers defined within this field will overwrite the headers configured through Dialogflow console if there is a conflict. Header names are case-insensitive. Google's specified headers are not allowed. Including: "Host", "Content-Length", "Connection", "From", "User-Agent", "Accept-Encoding", "If-Modified-Since", "If-None-Match", "X-Forwarded-For", etc.

### GoogleCloudDialogflowCxV3beta1QueryResult
* GoogleCloudDialogflowCxV3beta1QueryResult `object`: Represents the result of a conversational query.
  * parameters `object`: The collected session parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
  * currentPage [GoogleCloudDialogflowCxV3beta1Page](#googleclouddialogflowcxv3beta1page)
  * diagnosticInfo `object`: The free-form diagnostic info. For example, this field could contain webhook call latency. The string keys of the Struct's fields map can change without notice.
  * intent [GoogleCloudDialogflowCxV3beta1Intent](#googleclouddialogflowcxv3beta1intent)
  * intentDetectionConfidence `number`: The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. This field is deprecated, please use QueryResult.match instead.
  * languageCode `string`: The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
  * match [GoogleCloudDialogflowCxV3beta1Match](#googleclouddialogflowcxv3beta1match)
  * responseMessages `array`: The list of rich messages returned to the client. Responses vary from simple text messages to more sophisticated, structured payloads used to drive complex logic.
    * items [GoogleCloudDialogflowCxV3beta1ResponseMessage](#googleclouddialogflowcxv3beta1responsemessage)
  * sentimentAnalysisResult [GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult](#googleclouddialogflowcxv3beta1sentimentanalysisresult)
  * text `string`: If natural language text was provided as input, this field will contain a copy of the text.
  * transcript `string`: If natural language speech audio was provided as input, this field will contain the trascript for the audio.
  * triggerEvent `string`: If an event was provided as input, this field will contain the name of the event.
  * triggerIntent `string`: If an intent was provided as input, this field will contain a copy of the intent identifier.
  * webhookPayloads `array`: The list of webhook payload in WebhookResponse.payload, in the order of call sequence. If some webhook call fails or doesn't return any payload, an empty `Struct` would be used instead.
    * items `object`
  * webhookStatuses `array`: The list of webhook call status in the order of call sequence.
    * items [GoogleRpcStatus](#googlerpcstatus)

### GoogleCloudDialogflowCxV3beta1ResponseMessage
* GoogleCloudDialogflowCxV3beta1ResponseMessage `object`: Represents a response message that can be returned by a conversational agent. Response messages are also used for output audio synthesis. The approach is as follows: * If at least one OutputAudioText response is present, then all OutputAudioText responses are linearly concatenated, and the result is used for output audio synthesis. * If the OutputAudioText responses are a mixture of text and SSML, then the concatenated result is treated as SSML; otherwise, the result is treated as either text or SSML as appropriate. The agent designer should ideally use either text or SSML consistently throughout the bot design. * Otherwise, all Text responses are linearly concatenated, and the result is used for output audio synthesis. This approach allows for more sophisticated user experience scenarios, where the text displayed to the user may differ from what is heard.
  * conversationSuccess [GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess](#googleclouddialogflowcxv3beta1responsemessageconversationsuccess)
  * endInteraction [GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction](#googleclouddialogflowcxv3beta1responsemessageendinteraction)
  * liveAgentHandoff [GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff](#googleclouddialogflowcxv3beta1responsemessageliveagenthandoff)
  * mixedAudio [GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio](#googleclouddialogflowcxv3beta1responsemessagemixedaudio)
  * outputAudioText [GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText](#googleclouddialogflowcxv3beta1responsemessageoutputaudiotext)
  * payload `object`: Returns a response containing a custom, platform-specific payload.
  * playAudio [GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio](#googleclouddialogflowcxv3beta1responsemessageplayaudio)
  * text [GoogleCloudDialogflowCxV3beta1ResponseMessageText](#googleclouddialogflowcxv3beta1responsemessagetext)

### GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess
* GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess `object`: Indicates that the conversation succeeded, i.e., the bot handled the issue that the customer talked to it about. Dialogflow only uses this to determine which conversations should be counted as successful and doesn't process the metadata in this message in any way. Note that Dialogflow also considers conversations that get to the conversation end page as successful even if they don't return ConversationSuccess. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates that the conversation succeeded. * In a webhook response when you determine that you handled the customer issue.
  * metadata `object`: Custom metadata. Dialogflow doesn't impose any structure on this.

### GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction
* GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction `object`: Indicates that interaction with the Dialogflow agent has ended. This message is generated by Dialogflow only and not supposed to be defined by the user.

### GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff
* GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff `object`: Indicates that the conversation should be handed off to a live agent. Dialogflow only uses this to determine which conversations were handed off to a human agent for measurement purposes. What else to do with this signal is up to you and your handoff procedures. You may set this, for example: * In the entry_fulfillment of a Page if entering the page indicates something went extremely wrong in the conversation. * In a webhook response when you determine that the customer issue can only be handled by a human.
  * metadata `object`: Custom metadata for your handoff procedure. Dialogflow doesn't impose any structure on this.

### GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio
* GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio `object`: Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs. The external URIs are specified via play_audio. This message is generated by Dialogflow only and not supposed to be defined by the user.
  * segments `array`: Segments this audio response is composed of.
    * items [GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment](#googleclouddialogflowcxv3beta1responsemessagemixedaudiosegment)

### GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment
* GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment `object`: Represents one segment of audio.
  * allowPlaybackInterruption `boolean`: Output only. Whether the playback of this segment can be interrupted by the end user's speech and the client should then start the next Dialogflow request.
  * audio `string`: Raw audio synthesized from the Dialogflow agent's response using the output config specified in the request.
  * uri `string`: Client-specific URI that points to an audio clip accessible to the client. Dialogflow does not impose any validation on it.

### GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText
* GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText `object`: A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
  * allowPlaybackInterruption `boolean`: Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
  * ssml `string`: The SSML text to be synthesized. For more information, see [SSML](/speech/text-to-speech/docs/ssml).
  * text `string`: The raw text to be synthesized.

### GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio
* GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio `object`: Specifies an audio clip to be played by the client as part of the response.
  * allowPlaybackInterruption `boolean`: Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
  * audioUri `string`: Required. URI of the audio clip. Dialogflow does not impose any validation on this value. It is specific to the client that reads it.

### GoogleCloudDialogflowCxV3beta1ResponseMessageText
* GoogleCloudDialogflowCxV3beta1ResponseMessageText `object`: The text response message.
  * allowPlaybackInterruption `boolean`: Output only. Whether the playback of this message can be interrupted by the end user's speech and the client can then starts the next Dialogflow request.
  * text `array`: Required. A collection of text responses.
    * items `string`

### GoogleCloudDialogflowCxV3beta1RestoreAgentRequest
* GoogleCloudDialogflowCxV3beta1RestoreAgentRequest `object`: The request message for Agents.RestoreAgent.
  * agentContent `string`: Uncompressed raw byte content for agent.
  * agentUri `string`: The [Google Cloud Storage](https://cloud.google.com/storage/docs/) URI to restore agent from. The format of this URI must be `gs:///`.

### GoogleCloudDialogflowCxV3beta1SecuritySettings
* GoogleCloudDialogflowCxV3beta1SecuritySettings `object`: Represents the settings related to security issues, such as data redaction and data retention. It may take hours for updates on the settings to propagate to all the related components and take effect.
  * displayName `string`: Required. The human-readable name of the security settings, unique within the location.
  * inspectTemplate `string`: DLP inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. The template name will have one of the following formats: `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`
  * name `string`: Required. Resource name of the settings. Format: `projects//locations//securitySettings/`.
  * purgeDataTypes `array`: List of types of data to remove when retention settings triggers purge.
    * items `string` (values: PURGE_DATA_TYPE_UNSPECIFIED, DIALOGFLOW_HISTORY)
  * redactionScope `string` (values: REDACTION_SCOPE_UNSPECIFIED, REDACT_DISK_STORAGE): Defines on what data we apply redaction. Note that we don't redact data to which we don't have access, e.g., Stackdriver logs.
  * redactionStrategy `string` (values: REDACTION_STRATEGY_UNSPECIFIED, REDACT_WITH_SERVICE): Strategy that defines how we do redaction.
  * retentionWindowDays `integer`: Retains the data for the specified number of days. User must Set a value lower than Dialogflow's default 30d TTL. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use Dialogflow's default TTL.

### GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult
* GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult `object`: The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral.
  * magnitude `number`: A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
  * score `number`: Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).

### GoogleCloudDialogflowCxV3beta1SessionEntityType
* GoogleCloudDialogflowCxV3beta1SessionEntityType `object`: Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as "custom entity types"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).
  * entities `array`: Required. The collection of entities to override or supplement the custom entity type.
    * items [GoogleCloudDialogflowCxV3beta1EntityTypeEntity](#googleclouddialogflowcxv3beta1entitytypeentity)
  * entityOverrideMode `string` (values: ENTITY_OVERRIDE_MODE_UNSPECIFIED, ENTITY_OVERRIDE_MODE_OVERRIDE, ENTITY_OVERRIDE_MODE_SUPPLEMENT): Required. Indicates whether the additional data should override or supplement the custom entity type definition.
  * name `string`: Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.

### GoogleCloudDialogflowCxV3beta1SessionInfo
* GoogleCloudDialogflowCxV3beta1SessionInfo `object`: Represents session information communicated to and from the webhook.
  * parameters `object`: Optional for WebhookRequest. Optional for WebhookResponse. All parameters collected from forms and intents during the session. Parameters can be created, updated, or removed by the webhook. To remove a parameter from the session, the webhook should explicitly set the parameter value to null in WebhookResponse. The map is keyed by parameters' display names.
  * session `string`: Always present for WebhookRequest. Ignored for WebhookResponse. The unique identifier of the session. This field can be used by the webhook to identify a user. Format: `projects//locations//agents//sessions/`.

### GoogleCloudDialogflowCxV3beta1SpeechToTextSettings
* GoogleCloudDialogflowCxV3beta1SpeechToTextSettings `object`: Settings related to speech recognition.
  * enableSpeechAdaptation `boolean`: Whether to use speech adaptation for speech recognition.

### GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig
* GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig `object`: Configuration of how speech should be synthesized.
  * effectsProfileId `array`: Optional. An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. Effects are applied on top of each other in the order they are given.
    * items `string`
  * pitch `number`: Optional. Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.
  * speakingRate `number`: Optional. Speaking rate/speed, in the range [0.25, 4.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. If unset(0.0), defaults to the native 1.0 speed. Any other values < 0.25 or > 4.0 will return an error.
  * voice [GoogleCloudDialogflowCxV3beta1VoiceSelectionParams](#googleclouddialogflowcxv3beta1voiceselectionparams)
  * volumeGainDb `number`: Optional. Volume gain (in dB) of the normal native volume supported by the specific voice, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.

### GoogleCloudDialogflowCxV3beta1TextInput
* GoogleCloudDialogflowCxV3beta1TextInput `object`: Represents the natural language text to be processed.
  * text `string`: Required. The UTF-8 encoded natural language text to be processed. Text length must not exceed 256 characters.

### GoogleCloudDialogflowCxV3beta1TrainFlowRequest
* GoogleCloudDialogflowCxV3beta1TrainFlowRequest `object`: The request message for Flows.TrainFlow.

### GoogleCloudDialogflowCxV3beta1TransitionRoute
* GoogleCloudDialogflowCxV3beta1TransitionRoute `object`: A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
  * condition `string`: The condition to evaluate against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled.
  * intent `string`: The unique identifier of an Intent. Format: `projects//locations//agents//intents/`. Indicates that the transition can only happen when the given intent is matched. At least one of `intent` or `condition` must be specified. When both `intent` and `condition` are specified, the transition can only happen when both are fulfilled.
  * name `string`: Output only. The unique identifier of this transition route.
  * targetFlow `string`: The target flow to transition to. Format: `projects//locations//agents//flows/`.
  * targetPage `string`: The target page to transition to. Format: `projects//locations//agents//flows//pages/`.
  * triggerFulfillment [GoogleCloudDialogflowCxV3beta1Fulfillment](#googleclouddialogflowcxv3beta1fulfillment)

### GoogleCloudDialogflowCxV3beta1TransitionRouteGroup
* GoogleCloudDialogflowCxV3beta1TransitionRouteGroup `object`: An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
  * displayName `string`: Required. The human-readable name of the transition route group, unique within the Agent. The display name can be no longer than 30 characters.
  * name `string`: The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/`.
  * transitionRoutes `array`: Transition routes associated with the TransitionRouteGroup. Duplicate transition routes (i.e. using the same `intent`) are not allowed. Note that the `name` field is not used in the transition route group scope.
    * items [GoogleCloudDialogflowCxV3beta1TransitionRoute](#googleclouddialogflowcxv3beta1transitionroute)

### GoogleCloudDialogflowCxV3beta1Version
* GoogleCloudDialogflowCxV3beta1Version `object`: Represents a version of a flow.
  * createTime `string`: Output only. Create time of the version.
  * description `string`: The description of the version. The maximum length is 500 characters. If exceeded, the request is rejected.
  * displayName `string`: Required. The human-readable name of the version. Limit of 64 characters.
  * name `string`: Format: projects//locations//agents//flows//versions/. Version ID is a self-increasing number generated by Dialogflow upon version creation.
  * nluSettings [GoogleCloudDialogflowCxV3beta1NluSettings](#googleclouddialogflowcxv3beta1nlusettings)
  * state `string` (values: STATE_UNSPECIFIED, RUNNING, SUCCEEDED, FAILED): Output only. The state of this version. This field is read-only and cannot be set by create and update methods.

### GoogleCloudDialogflowCxV3beta1VoiceSelectionParams
* GoogleCloudDialogflowCxV3beta1VoiceSelectionParams `object`: Description of which voice to use for speech synthesis.
  * name `string`: Optional. The name of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and ssml_gender.
  * ssmlGender `string` (values: SSML_VOICE_GENDER_UNSPECIFIED, SSML_VOICE_GENDER_MALE, SSML_VOICE_GENDER_FEMALE, SSML_VOICE_GENDER_NEUTRAL): Optional. The preferred gender of the voice. If not set, the service will choose a voice based on the other parameters such as language_code and name. Note that this is only a preference, not requirement. If a voice of the appropriate gender is not available, the synthesizer should substitute a voice with a different gender rather than failing the request.

### GoogleCloudDialogflowCxV3beta1Webhook
* GoogleCloudDialogflowCxV3beta1Webhook `object`: Webhooks host the developer's business logic. During a session, webhooks allow the developer to use the data extracted by Dialogflow's natural language processing to generate dynamic responses, validate collected data, or trigger actions on the backend.
  * disabled `boolean`: Indicates whether the webhook is disabled.
  * displayName `string`: Required. The human-readable name of the webhook, unique within the agent.
  * genericWebService [GoogleCloudDialogflowCxV3beta1WebhookGenericWebService](#googleclouddialogflowcxv3beta1webhookgenericwebservice)
  * name `string`: The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`.
  * timeout `string`: Webhook execution timeout. Execution is considered failed if Dialogflow doesn't receive a response from webhook at the end of the timeout period. Defaults to 5 seconds, maximum allowed timeout is 30 seconds.

### GoogleCloudDialogflowCxV3beta1WebhookGenericWebService
* GoogleCloudDialogflowCxV3beta1WebhookGenericWebService `object`: Represents configuration for a generic web service.
  * password `string`: The password for HTTP Basic authentication.
  * requestHeaders `object`: The HTTP request headers to send together with webhook requests.
  * uri `string`: Required. The webhook URI for receiving POST requests. It must use https protocol.
  * username `string`: The user name for HTTP Basic authentication.

### GoogleCloudDialogflowCxV3beta1WebhookRequest
* GoogleCloudDialogflowCxV3beta1WebhookRequest `object`: The request message for a webhook call.
  * detectIntentResponseId `string`: Always present. The unique identifier of the DetectIntentResponse that will be returned to the API caller.
  * fulfillmentInfo [GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo](#googleclouddialogflowcxv3beta1webhookrequestfulfillmentinfo)
  * intentInfo [GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo](#googleclouddialogflowcxv3beta1webhookrequestintentinfo)
  * messages `array`: The list of rich message responses to present to the user. Webhook can choose to append or replace this list in WebhookResponse.fulfillment_response;
    * items [GoogleCloudDialogflowCxV3beta1ResponseMessage](#googleclouddialogflowcxv3beta1responsemessage)
  * pageInfo [GoogleCloudDialogflowCxV3beta1PageInfo](#googleclouddialogflowcxv3beta1pageinfo)
  * payload `object`: Custom data set in QueryParameters.payload.
  * sessionInfo [GoogleCloudDialogflowCxV3beta1SessionInfo](#googleclouddialogflowcxv3beta1sessioninfo)

### GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo
* GoogleCloudDialogflowCxV3beta1WebhookRequestFulfillmentInfo `object`: Represents fulfillment information communicated to the webhook.
  * tag `string`: Always present. The tag used to identify which fulfillment is being called.

### GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo
* GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfo `object`: Represents intent information communicated to the webhook.
  * parameters `object`: Parameters identified as a result of intent matching. This is a map of the name of the identified parameter to the value of the parameter identified from the user's utterance. All parameters defined in the matched intent that are identified will be surfaced here.
  * lastMatchedIntent `string`: Always present. The unique identifier of the last matched intent. Format: `projects//locations//agents//intents/`.

### GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue
* GoogleCloudDialogflowCxV3beta1WebhookRequestIntentInfoIntentParameterValue `object`: Represents a value for an intent parameter.
  * originalValue `string`: Always present. Original text value extracted from user utterance.

### GoogleCloudDialogflowCxV3beta1WebhookResponse
* GoogleCloudDialogflowCxV3beta1WebhookResponse `object`: The response message for a webhook call.
  * fulfillmentResponse [GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse](#googleclouddialogflowcxv3beta1webhookresponsefulfillmentresponse)
  * pageInfo [GoogleCloudDialogflowCxV3beta1PageInfo](#googleclouddialogflowcxv3beta1pageinfo)
  * payload `object`: Value to append directly to QueryResult.webhook_payloads.
  * sessionInfo [GoogleCloudDialogflowCxV3beta1SessionInfo](#googleclouddialogflowcxv3beta1sessioninfo)
  * targetFlow `string`: The target flow to transition to. Format: `projects//locations//agents//flows/`.
  * targetPage `string`: The target page to transition to. Format: `projects//locations//agents//flows//pages/`.

### GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse
* GoogleCloudDialogflowCxV3beta1WebhookResponseFulfillmentResponse `object`: Represents a fulfillment response to the user.
  * mergeBehavior `string` (values: MERGE_BEHAVIOR_UNSPECIFIED, APPEND, REPLACE): Merge behavior for `messages`.
  * messages `array`: The list of rich message responses to present to the user.
    * items [GoogleCloudDialogflowCxV3beta1ResponseMessage](#googleclouddialogflowcxv3beta1responsemessage)

### GoogleCloudDialogflowV2AnnotatedMessagePart
* GoogleCloudDialogflowV2AnnotatedMessagePart `object`: Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end.
  * entityType `string`: The [Dialogflow system entity type](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. If this is empty, Dialogflow could not annotate the phrase part with a system entity.
  * text `string`: A part of a message possibly annotated with an entity.

### GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse
* GoogleCloudDialogflowV2BatchUpdateEntityTypesResponse `object`: The response message for EntityTypes.BatchUpdateEntityTypes.
  * entityTypes `array`: The collection of updated or created entity types.
    * items [GoogleCloudDialogflowV2EntityType](#googleclouddialogflowv2entitytype)

### GoogleCloudDialogflowV2BatchUpdateIntentsResponse
* GoogleCloudDialogflowV2BatchUpdateIntentsResponse `object`: The response message for Intents.BatchUpdateIntents.
  * intents `array`: The collection of updated or created intents.
    * items [GoogleCloudDialogflowV2Intent](#googleclouddialogflowv2intent)

### GoogleCloudDialogflowV2Context
* GoogleCloudDialogflowV2Context `object`: Dialogflow contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview).
  * parameters `object`: Optional. The collection of parameters associated with this context. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
  * lifespanCount `integer`: Optional. The number of conversational query requests after which the context expires. The default is `0`. If set to `0`, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
  * name `string`: Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`

### GoogleCloudDialogflowV2ConversationEvent
* GoogleCloudDialogflowV2ConversationEvent `object`: Represents a notification sent to Pub/Sub subscribers for conversation lifecycle events.
  * conversation `string`: The unique identifier of the conversation this notification refers to. Format: `projects//conversations/`.
  * errorStatus [GoogleRpcStatus](#googlerpcstatus)
  * newMessagePayload [GoogleCloudDialogflowV2Message](#googleclouddialogflowv2message)
  * type `string` (values: TYPE_UNSPECIFIED, CONVERSATION_STARTED, CONVERSATION_FINISHED, HUMAN_INTERVENTION_NEEDED, NEW_MESSAGE, UNRECOVERABLE_ERROR): The type of the event that this notification refers to.

### GoogleCloudDialogflowV2EntityType
* GoogleCloudDialogflowV2EntityType `object`: Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
  * autoExpansionMode `string` (values: AUTO_EXPANSION_MODE_UNSPECIFIED, AUTO_EXPANSION_MODE_DEFAULT): Optional. Indicates whether the entity type can be automatically expanded.
  * displayName `string`: Required. The name of the entity type.
  * enableFuzzyExtraction `boolean`: Optional. Enables fuzzy entity extraction during classification.
  * entities `array`: Optional. The collection of entity entries associated with the entity type.
    * items [GoogleCloudDialogflowV2EntityTypeEntity](#googleclouddialogflowv2entitytypeentity)
  * kind `string` (values: KIND_UNSPECIFIED, KIND_MAP, KIND_LIST, KIND_REGEXP): Required. Indicates the kind of entity type.
  * name `string`: The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects//agent/entityTypes/`.

### GoogleCloudDialogflowV2EntityTypeEntity
* GoogleCloudDialogflowV2EntityTypeEntity `object`: An **entity entry** for an associated entity type.
  * synonyms `array`: Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*. For `KIND_LIST` entity types: * This collection must contain exactly one synonym equal to `value`.
    * items `string`
  * value `string`: Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A reference value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases).

### GoogleCloudDialogflowV2EventInput
* GoogleCloudDialogflowV2EventInput `object`: Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`.
  * parameters `object`: The collection of parameters associated with the event. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
  * languageCode `string`: Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
  * name `string`: Required. The unique identifier of the event.

### GoogleCloudDialogflowV2ExportAgentResponse
* GoogleCloudDialogflowV2ExportAgentResponse `object`: The response message for Agents.ExportAgent.
  * agentContent `string`: Zip compressed raw byte content for agent.
  * agentUri `string`: The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`.

### GoogleCloudDialogflowV2Intent
* GoogleCloudDialogflowV2Intent `object`: An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
  * parameters `array`: Optional. The collection of parameters associated with the intent.
    * items [GoogleCloudDialogflowV2IntentParameter](#googleclouddialogflowv2intentparameter)
  * action `string`: Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces.
  * defaultResponsePlatforms `array`: Optional. The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform).
    * items `string` (values: PLATFORM_UNSPECIFIED, FACEBOOK, SLACK, TELEGRAM, KIK, SKYPE, LINE, VIBER, ACTIONS_ON_GOOGLE, GOOGLE_HANGOUTS)
  * displayName `string`: Required. The name of this intent.
  * events `array`: Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent. Event names are limited to 150 characters.
    * items `string`
  * followupIntentInfo `array`: Read-only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output.
    * items [GoogleCloudDialogflowV2IntentFollowupIntentInfo](#googleclouddialogflowv2intentfollowupintentinfo)
  * inputContextNames `array`: Optional. The list of context names required for this intent to be triggered. Format: `projects//agent/sessions/-/contexts/`.
    * items `string`
  * isFallback `boolean`: Optional. Indicates whether this is a fallback intent.
  * messages `array`: Optional. The collection of rich messages corresponding to the `Response` field in the Dialogflow console.
    * items [GoogleCloudDialogflowV2IntentMessage](#googleclouddialogflowv2intentmessage)
  * mlDisabled `boolean`: Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off.
  * name `string`: Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects//agent/intents/`.
  * outputContexts `array`: Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the `lifespan_count` to 0 will reset the context when the intent is matched. Format: `projects//agent/sessions/-/contexts/`.
    * items [GoogleCloudDialogflowV2Context](#googleclouddialogflowv2context)
  * parentFollowupIntentName `string`: Read-only after creation. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent. It identifies the parent followup intent. Format: `projects//agent/intents/`.
  * priority `integer`: Optional. The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
  * resetContexts `boolean`: Optional. Indicates whether to delete all contexts in the current session when this intent is matched.
  * rootFollowupIntentName `string`: Read-only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. We populate this field only in the output. Format: `projects//agent/intents/`.
  * trainingPhrases `array`: Optional. The collection of examples that the agent is trained on.
    * items [GoogleCloudDialogflowV2IntentTrainingPhrase](#googleclouddialogflowv2intenttrainingphrase)
  * webhookState `string` (values: WEBHOOK_STATE_UNSPECIFIED, WEBHOOK_STATE_ENABLED, WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING): Optional. Indicates whether webhooks are enabled for the intent.

### GoogleCloudDialogflowV2IntentFollowupIntentInfo
* GoogleCloudDialogflowV2IntentFollowupIntentInfo `object`: Represents a single followup intent in the chain.
  * followupIntentName `string`: The unique identifier of the followup intent. Format: `projects//agent/intents/`.
  * parentFollowupIntentName `string`: The unique identifier of the followup intent's parent. Format: `projects//agent/intents/`.

### GoogleCloudDialogflowV2IntentMessage
* GoogleCloudDialogflowV2IntentMessage `object`: A rich response message. Corresponds to the intent `Response` field in the Dialogflow console. For more information, see [Rich response messages](https://cloud.google.com/dialogflow/docs/intents-rich-messages).
  * basicCard [GoogleCloudDialogflowV2IntentMessageBasicCard](#googleclouddialogflowv2intentmessagebasiccard)
  * browseCarouselCard [GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard](#googleclouddialogflowv2intentmessagebrowsecarouselcard)
  * card [GoogleCloudDialogflowV2IntentMessageCard](#googleclouddialogflowv2intentmessagecard)
  * carouselSelect [GoogleCloudDialogflowV2IntentMessageCarouselSelect](#googleclouddialogflowv2intentmessagecarouselselect)
  * image [GoogleCloudDialogflowV2IntentMessageImage](#googleclouddialogflowv2intentmessageimage)
  * linkOutSuggestion [GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion](#googleclouddialogflowv2intentmessagelinkoutsuggestion)
  * listSelect [GoogleCloudDialogflowV2IntentMessageListSelect](#googleclouddialogflowv2intentmessagelistselect)
  * mediaContent [GoogleCloudDialogflowV2IntentMessageMediaContent](#googleclouddialogflowv2intentmessagemediacontent)
  * payload `object`: A custom platform-specific response.
  * platform `string` (values: PLATFORM_UNSPECIFIED, FACEBOOK, SLACK, TELEGRAM, KIK, SKYPE, LINE, VIBER, ACTIONS_ON_GOOGLE, GOOGLE_HANGOUTS): Optional. The platform that this message is intended for.
  * quickReplies [GoogleCloudDialogflowV2IntentMessageQuickReplies](#googleclouddialogflowv2intentmessagequickreplies)
  * simpleResponses [GoogleCloudDialogflowV2IntentMessageSimpleResponses](#googleclouddialogflowv2intentmessagesimpleresponses)
  * suggestions [GoogleCloudDialogflowV2IntentMessageSuggestions](#googleclouddialogflowv2intentmessagesuggestions)
  * tableCard [GoogleCloudDialogflowV2IntentMessageTableCard](#googleclouddialogflowv2intentmessagetablecard)
  * text [GoogleCloudDialogflowV2IntentMessageText](#googleclouddialogflowv2intentmessagetext)

### GoogleCloudDialogflowV2IntentMessageBasicCard
* GoogleCloudDialogflowV2IntentMessageBasicCard `object`: The basic card message. Useful for displaying information.
  * buttons `array`: Optional. The collection of card buttons.
    * items [GoogleCloudDialogflowV2IntentMessageBasicCardButton](#googleclouddialogflowv2intentmessagebasiccardbutton)
  * formattedText `string`: Required, unless image is present. The body text of the card.
  * image [GoogleCloudDialogflowV2IntentMessageImage](#googleclouddialogflowv2intentmessageimage)
  * subtitle `string`: Optional. The subtitle of the card.
  * title `string`: Optional. The title of the card.

### GoogleCloudDialogflowV2IntentMessageBasicCardButton
* GoogleCloudDialogflowV2IntentMessageBasicCardButton `object`: The button object that appears at the bottom of a card.
  * openUriAction [GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction](#googleclouddialogflowv2intentmessagebasiccardbuttonopenuriaction)
  * title `string`: Required. The title of the button.

### GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction
* GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction `object`: Opens the given URI.
  * uri `string`: Required. The HTTP or HTTPS scheme URI.

### GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard
* GoogleCloudDialogflowV2IntentMessageBrowseCarouselCard `object`: Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
  * imageDisplayOptions `string` (values: IMAGE_DISPLAY_OPTIONS_UNSPECIFIED, GRAY, WHITE, CROPPED, BLURRED_BACKGROUND): Optional. Settings for displaying the image. Applies to every image in items.
  * items `array`: Required. List of items in the Browse Carousel Card. Minimum of two items, maximum of ten.
    * items [GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem](#googleclouddialogflowv2intentmessagebrowsecarouselcardbrowsecarouselcarditem)

### GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem
* GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItem `object`: Browsing carousel tile
  * description `string`: Optional. Description of the carousel item. Maximum of four lines of text.
  * footer `string`: Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text.
  * image [GoogleCloudDialogflowV2IntentMessageImage](#googleclouddialogflowv2intentmessageimage)
  * openUriAction [GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction](#googleclouddialogflowv2intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction)
  * title `string`: Required. Title of the carousel item. Maximum of two lines of text.

### GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction
* GoogleCloudDialogflowV2IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction `object`: Actions on Google action to open a given url.
  * url `string`: Required. URL
  * urlTypeHint `string` (values: URL_TYPE_HINT_UNSPECIFIED, AMP_ACTION, AMP_CONTENT): Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser.

### GoogleCloudDialogflowV2IntentMessageCard
* GoogleCloudDialogflowV2IntentMessageCard `object`: The card response message.
  * buttons `array`: Optional. The collection of card buttons.
    * items [GoogleCloudDialogflowV2IntentMessageCardButton](#googleclouddialogflowv2intentmessagecardbutton)
  * imageUri `string`: Optional. The public URI to an image file for the card.
  * subtitle `string`: Optional. The subtitle of the card.
  * title `string`: Optional. The title of the card.

### GoogleCloudDialogflowV2IntentMessageCardButton
* GoogleCloudDialogflowV2IntentMessageCardButton `object`: Contains information about a button.
  * postback `string`: Optional. The text to send back to the Dialogflow API or a URI to open.
  * text `string`: Optional. The text to show on the button.

### GoogleCloudDialogflowV2IntentMessageCarouselSelect
* GoogleCloudDialogflowV2IntentMessageCarouselSelect `object`: The card for presenting a carousel of options to select from.
  * items `array`: Required. Carousel items.
    * items [GoogleCloudDialogflowV2IntentMessageCarouselSelectItem](#googleclouddialogflowv2intentmessagecarouselselectitem)

### GoogleCloudDialogflowV2IntentMessageCarouselSelectItem
* GoogleCloudDialogflowV2IntentMessageCarouselSelectItem `object`: An item in the carousel.
  * info [GoogleCloudDialogflowV2IntentMessageSelectItemInfo](#googleclouddialogflowv2intentmessageselectiteminfo)
  * description `string`: Optional. The body text of the card.
  * image [GoogleCloudDialogflowV2IntentMessageImage](#googleclouddialogflowv2intentmessageimage)
  * title `string`: Required. Title of the carousel item.

### GoogleCloudDialogflowV2IntentMessageColumnProperties
* GoogleCloudDialogflowV2IntentMessageColumnProperties `object`: Column properties for TableCard.
  * header `string`: Required. Column heading.
  * horizontalAlignment `string` (values: HORIZONTAL_ALIGNMENT_UNSPECIFIED, LEADING, CENTER, TRAILING): Optional. Defines text alignment for all cells in this column.

### GoogleCloudDialogflowV2IntentMessageImage
* GoogleCloudDialogflowV2IntentMessageImage `object`: The image response message.
  * accessibilityText `string`: Optional. A text description of the image to be used for accessibility, e.g., screen readers.
  * imageUri `string`: Optional. The public URI to an image file.

### GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion
* GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion `object`: The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
  * destinationName `string`: Required. The name of the app or site this chip is linking to.
  * uri `string`: Required. The URI of the app or site to open when the user taps the suggestion chip.

### GoogleCloudDialogflowV2IntentMessageListSelect
* GoogleCloudDialogflowV2IntentMessageListSelect `object`: The card for presenting a list of options to select from.
  * items `array`: Required. List items.
    * items [GoogleCloudDialogflowV2IntentMessageListSelectItem](#googleclouddialogflowv2intentmessagelistselectitem)
  * subtitle `string`: Optional. Subtitle of the list.
  * title `string`: Optional. The overall title of the list.

### GoogleCloudDialogflowV2IntentMessageListSelectItem
* GoogleCloudDialogflowV2IntentMessageListSelectItem `object`: An item in the list.
  * info [GoogleCloudDialogflowV2IntentMessageSelectItemInfo](#googleclouddialogflowv2intentmessageselectiteminfo)
  * description `string`: Optional. The main text describing the item.
  * image [GoogleCloudDialogflowV2IntentMessageImage](#googleclouddialogflowv2intentmessageimage)
  * title `string`: Required. The title of the list item.

### GoogleCloudDialogflowV2IntentMessageMediaContent
* GoogleCloudDialogflowV2IntentMessageMediaContent `object`: The media content card for Actions on Google.
  * mediaObjects `array`: Required. List of media objects.
    * items [GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject](#googleclouddialogflowv2intentmessagemediacontentresponsemediaobject)
  * mediaType `string` (values: RESPONSE_MEDIA_TYPE_UNSPECIFIED, AUDIO): Optional. What type of media is the content (ie "audio").

### GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject
* GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject `object`: Response media object for media content card.
  * contentUrl `string`: Required. Url where the media is stored.
  * description `string`: Optional. Description of media card.
  * icon [GoogleCloudDialogflowV2IntentMessageImage](#googleclouddialogflowv2intentmessageimage)
  * largeImage [GoogleCloudDialogflowV2IntentMessageImage](#googleclouddialogflowv2intentmessageimage)
  * name `string`: Required. Name of media card.

### GoogleCloudDialogflowV2IntentMessageQuickReplies
* GoogleCloudDialogflowV2IntentMessageQuickReplies `object`: The quick replies response message.
  * quickReplies `array`: Optional. The collection of quick replies.
    * items `string`
  * title `string`: Optional. The title of the collection of quick replies.

### GoogleCloudDialogflowV2IntentMessageSelectItemInfo
* GoogleCloudDialogflowV2IntentMessageSelectItemInfo `object`: Additional info about the select item for when it is triggered in a dialog.
  * key `string`: Required. A unique key that will be sent back to the agent if this response is given.
  * synonyms `array`: Optional. A list of synonyms that can also be used to trigger this item in dialog.
    * items `string`

### GoogleCloudDialogflowV2IntentMessageSimpleResponse
* GoogleCloudDialogflowV2IntentMessageSimpleResponse `object`: The simple response message containing speech or text.
  * displayText `string`: Optional. The text to display.
  * ssml `string`: One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech.
  * textToSpeech `string`: One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml.

### GoogleCloudDialogflowV2IntentMessageSimpleResponses
* GoogleCloudDialogflowV2IntentMessageSimpleResponses `object`: The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
  * simpleResponses `array`: Required. The list of simple responses.
    * items [GoogleCloudDialogflowV2IntentMessageSimpleResponse](#googleclouddialogflowv2intentmessagesimpleresponse)

### GoogleCloudDialogflowV2IntentMessageSuggestion
* GoogleCloudDialogflowV2IntentMessageSuggestion `object`: The suggestion chip message that the user can tap to quickly post a reply to the conversation.
  * title `string`: Required. The text shown the in the suggestion chip.

### GoogleCloudDialogflowV2IntentMessageSuggestions
* GoogleCloudDialogflowV2IntentMessageSuggestions `object`: The collection of suggestions.
  * suggestions `array`: Required. The list of suggested replies.
    * items [GoogleCloudDialogflowV2IntentMessageSuggestion](#googleclouddialogflowv2intentmessagesuggestion)

### GoogleCloudDialogflowV2IntentMessageTableCard
* GoogleCloudDialogflowV2IntentMessageTableCard `object`: Table card for Actions on Google.
  * buttons `array`: Optional. List of buttons for the card.
    * items [GoogleCloudDialogflowV2IntentMessageBasicCardButton](#googleclouddialogflowv2intentmessagebasiccardbutton)
  * columnProperties `array`: Optional. Display properties for the columns in this table.
    * items [GoogleCloudDialogflowV2IntentMessageColumnProperties](#googleclouddialogflowv2intentmessagecolumnproperties)
  * image [GoogleCloudDialogflowV2IntentMessageImage](#googleclouddialogflowv2intentmessageimage)
  * rows `array`: Optional. Rows in this table of data.
    * items [GoogleCloudDialogflowV2IntentMessageTableCardRow](#googleclouddialogflowv2intentmessagetablecardrow)
  * subtitle `string`: Optional. Subtitle to the title.
  * title `string`: Required. Title of the card.

### GoogleCloudDialogflowV2IntentMessageTableCardCell
* GoogleCloudDialogflowV2IntentMessageTableCardCell `object`: Cell of TableCardRow.
  * text `string`: Required. Text in this cell.

### GoogleCloudDialogflowV2IntentMessageTableCardRow
* GoogleCloudDialogflowV2IntentMessageTableCardRow `object`: Row of TableCard.
  * cells `array`: Optional. List of cells that make up this row.
    * items [GoogleCloudDialogflowV2IntentMessageTableCardCell](#googleclouddialogflowv2intentmessagetablecardcell)
  * dividerAfter `boolean`: Optional. Whether to add a visual divider after this row.

### GoogleCloudDialogflowV2IntentMessageText
* GoogleCloudDialogflowV2IntentMessageText `object`: The text response message.
  * text `array`: Optional. The collection of the agent's responses.
    * items `string`

### GoogleCloudDialogflowV2IntentParameter
* GoogleCloudDialogflowV2IntentParameter `object`: Represents intent parameters.
  * defaultValue `string`: Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`.
  * displayName `string`: Required. The name of the parameter.
  * entityTypeDisplayName `string`: Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided.
  * isList `boolean`: Optional. Indicates whether the parameter represents a list of values.
  * mandatory `boolean`: Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value.
  * name `string`: The unique identifier of this parameter.
  * prompts `array`: Optional. The collection of prompts that the agent can present to the user in order to collect a value for the parameter.
    * items `string`
  * value `string`: Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as `#context_name.parameter_name`.

### GoogleCloudDialogflowV2IntentTrainingPhrase
* GoogleCloudDialogflowV2IntentTrainingPhrase `object`: Represents an example that the agent is trained on.
  * name `string`: Output only. The unique identifier of this training phrase.
  * parts `array`: Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `entity_type`, `alias`, and `user_defined` fields are all set.
    * items [GoogleCloudDialogflowV2IntentTrainingPhrasePart](#googleclouddialogflowv2intenttrainingphrasepart)
  * timesAddedCount `integer`: Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
  * type `string` (values: TYPE_UNSPECIFIED, EXAMPLE, TEMPLATE): Required. The type of the training phrase.

### GoogleCloudDialogflowV2IntentTrainingPhrasePart
* GoogleCloudDialogflowV2IntentTrainingPhrasePart `object`: Represents a part of a training phrase.
  * alias `string`: Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase.
  * entityType `string`: Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase.
  * text `string`: Required. The text for this part.
  * userDefined `boolean`: Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true.

### GoogleCloudDialogflowV2Message
* GoogleCloudDialogflowV2Message `object`: Represents a message posted into a conversation.
  * content `string`: Required. The message content.
  * createTime `string`: Output only. The time when the message was created.
  * languageCode `string`: Optional. The message language. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
  * messageAnnotation [GoogleCloudDialogflowV2MessageAnnotation](#googleclouddialogflowv2messageannotation)
  * name `string`: The unique identifier of the message. Format: `projects//locations//conversations//messages/`.
  * participant `string`: Output only. The participant that sends this message.
  * participantRole `string` (values: ROLE_UNSPECIFIED, HUMAN_AGENT, AUTOMATED_AGENT, END_USER): Output only. The role of the participant.

### GoogleCloudDialogflowV2MessageAnnotation
* GoogleCloudDialogflowV2MessageAnnotation `object`: Represents the result of annotation for the message.
  * containEntities `boolean`: Indicates whether the text message contains entities.
  * parts `array`: The collection of annotated message parts ordered by their position in the message. You can recover the annotated message by concatenating [AnnotatedMessagePart.text].
    * items [GoogleCloudDialogflowV2AnnotatedMessagePart](#googleclouddialogflowv2annotatedmessagepart)

### GoogleCloudDialogflowV2OriginalDetectIntentRequest
* GoogleCloudDialogflowV2OriginalDetectIntentRequest `object`: Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call.
  * payload `object`: Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: { "telephony": { "caller_id": "+18558363987" } } Note: The caller ID field (`caller_id`) will be redacted for Trial Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Essentials Edition agents.
  * source `string`: The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers.
  * version `string`: Optional. The version of the protocol used for this request. This field is AoG-specific.

### GoogleCloudDialogflowV2QueryResult
* GoogleCloudDialogflowV2QueryResult `object`: Represents the result of conversational query or event processing.
  * parameters `object`: The collection of extracted parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
  * action `string`: The action name from the matched intent.
  * allRequiredParamsPresent `boolean`: This field is set to: - `false` if the matched intent has required parameters and not all of the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the matched intent doesn't contain any required parameters.
  * diagnosticInfo `object`: Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain: - webhook call latency - webhook errors
  * fulfillmentMessages `array`: The collection of rich messages to present to the user.
    * items [GoogleCloudDialogflowV2IntentMessage](#googleclouddialogflowv2intentmessage)
  * fulfillmentText `string`: The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred.
  * intent [GoogleCloudDialogflowV2Intent](#googleclouddialogflowv2intent)
  * intentDetectionConfidence `number`: The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
  * languageCode `string`: The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
  * outputContexts `array`: The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `.original` containing the original parameter values before the query.
    * items [GoogleCloudDialogflowV2Context](#googleclouddialogflowv2context)
  * queryText `string`: The original conversational query text: - If natural language text was provided as input, `query_text` contains a copy of the input. - If natural language speech audio was provided as input, `query_text` contains the speech recognition result. If speech recognizer produced multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, `query_text` will contain the corrected user input.
  * sentimentAnalysisResult [GoogleCloudDialogflowV2SentimentAnalysisResult](#googleclouddialogflowv2sentimentanalysisresult)
  * speechRecognitionConfidence `number`: The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set. This field is not guaranteed to be accurate or set. In particular this field isn't set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
  * webhookPayload `object`: If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response.
  * webhookSource `string`: If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response.

### GoogleCloudDialogflowV2Sentiment
* GoogleCloudDialogflowV2Sentiment `object`: The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
  * magnitude `number`: A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
  * score `number`: Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).

### GoogleCloudDialogflowV2SentimentAnalysisResult
* GoogleCloudDialogflowV2SentimentAnalysisResult `object`: The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config
  * queryTextSentiment [GoogleCloudDialogflowV2Sentiment](#googleclouddialogflowv2sentiment)

### GoogleCloudDialogflowV2SessionEntityType
* GoogleCloudDialogflowV2SessionEntityType `object`: A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
  * entities `array`: Required. The collection of entities associated with this session entity type.
    * items [GoogleCloudDialogflowV2EntityTypeEntity](#googleclouddialogflowv2entitytypeentity)
  * entityOverrideMode `string` (values: ENTITY_OVERRIDE_MODE_UNSPECIFIED, ENTITY_OVERRIDE_MODE_OVERRIDE, ENTITY_OVERRIDE_MODE_SUPPLEMENT): Required. Indicates whether the additional data should override or supplement the custom entity type definition.
  * name `string`: Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.

### GoogleCloudDialogflowV2WebhookRequest
* GoogleCloudDialogflowV2WebhookRequest `object`: The request message for a webhook call.
  * originalDetectIntentRequest [GoogleCloudDialogflowV2OriginalDetectIntentRequest](#googleclouddialogflowv2originaldetectintentrequest)
  * queryResult [GoogleCloudDialogflowV2QueryResult](#googleclouddialogflowv2queryresult)
  * responseId `string`: The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`.
  * session `string`: The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`.

### GoogleCloudDialogflowV2WebhookResponse
* GoogleCloudDialogflowV2WebhookResponse `object`: The response message for a webhook call. This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error: - Use `""` for empty strings - Use `{}` or `null` for empty objects - Use `[]` or `null` for empty arrays For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json).
  * followupEventInput [GoogleCloudDialogflowV2EventInput](#googleclouddialogflowv2eventinput)
  * fulfillmentMessages `array`: Optional. The rich response messages intended for the end-user. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_messages sent to the integration or API caller.
    * items [GoogleCloudDialogflowV2IntentMessage](#googleclouddialogflowv2intentmessage)
  * fulfillmentText `string`: Optional. The text response message intended for the end-user. It is recommended to use `fulfillment_messages.text.text[0]` instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller.
  * outputContexts `array`: Optional. The collection of output contexts that will overwrite currently active contexts for the session and reset their lifespans. When provided, Dialogflow uses this field to populate QueryResult.output_contexts sent to the integration or API caller.
    * items [GoogleCloudDialogflowV2Context](#googleclouddialogflowv2context)
  * payload `object`: Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json)
  * sessionEntityTypes `array`: Optional. Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session. Setting this data from a webhook overwrites the session entity types that have been set using `detectIntent`, `streamingDetectIntent` or SessionEntityType management methods.
    * items [GoogleCloudDialogflowV2SessionEntityType](#googleclouddialogflowv2sessionentitytype)
  * source `string`: Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller.

### GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse
* GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesResponse `object`: The response message for EntityTypes.BatchUpdateEntityTypes.
  * entityTypes `array`: The collection of updated or created entity types.
    * items [GoogleCloudDialogflowV2beta1EntityType](#googleclouddialogflowv2beta1entitytype)

### GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse
* GoogleCloudDialogflowV2beta1BatchUpdateIntentsResponse `object`: The response message for Intents.BatchUpdateIntents.
  * intents `array`: The collection of updated or created intents.
    * items [GoogleCloudDialogflowV2beta1Intent](#googleclouddialogflowv2beta1intent)

### GoogleCloudDialogflowV2beta1Context
* GoogleCloudDialogflowV2beta1Context `object`: Dialogflow contexts are similar to natural language context. If a person says to you "they are orange", you need context in order to understand what "they" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview).
  * parameters `object`: Optional. The collection of parameters associated with this context. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
  * lifespanCount `integer`: Optional. The number of conversational query requests after which the context expires. The default is `0`. If set to `0`, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries.
  * name `string`: Required. The unique identifier of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, The `Context ID` is always converted to lowercase, may only contain characters in a-zA-Z0-9_-% and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`

### GoogleCloudDialogflowV2beta1EntityType
* GoogleCloudDialogflowV2beta1EntityType `object`: Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
  * autoExpansionMode `string` (values: AUTO_EXPANSION_MODE_UNSPECIFIED, AUTO_EXPANSION_MODE_DEFAULT): Optional. Indicates whether the entity type can be automatically expanded.
  * displayName `string`: Required. The name of the entity type.
  * enableFuzzyExtraction `boolean`: Optional. Enables fuzzy entity extraction during classification.
  * entities `array`: Optional. The collection of entity entries associated with the entity type.
    * items [GoogleCloudDialogflowV2beta1EntityTypeEntity](#googleclouddialogflowv2beta1entitytypeentity)
  * kind `string` (values: KIND_UNSPECIFIED, KIND_MAP, KIND_LIST, KIND_REGEXP): Required. Indicates the kind of entity type.
  * name `string`: The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`

### GoogleCloudDialogflowV2beta1EntityTypeEntity
* GoogleCloudDialogflowV2beta1EntityTypeEntity `object`: An **entity entry** for an associated entity type.
  * synonyms `array`: Required. A collection of value synonyms. For example, if the entity type is *vegetable*, and `value` is *scallions*, a synonym could be *green onions*. For `KIND_LIST` entity types: * This collection must contain exactly one synonym equal to `value`.
    * items `string`
  * value `string`: Required. The primary value associated with this entity entry. For example, if the entity type is *vegetable*, the value could be *scallions*. For `KIND_MAP` entity types: * A reference value to be used in place of synonyms. For `KIND_LIST` entity types: * A string that can contain references to other entity types (with or without aliases).

### GoogleCloudDialogflowV2beta1EventInput
* GoogleCloudDialogflowV2beta1EventInput `object`: Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `"Hello #welcome_event.name! What can I do for you today?"`.
  * parameters `object`: The collection of parameters associated with the event. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
  * languageCode `string`: Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language.
  * name `string`: Required. The unique identifier of the event.

### GoogleCloudDialogflowV2beta1ExportAgentResponse
* GoogleCloudDialogflowV2beta1ExportAgentResponse `object`: The response message for Agents.ExportAgent.
  * agentContent `string`: Zip compressed raw byte content for agent.
  * agentUri `string`: The URI to a file containing the exported agent. This field is populated only if `agent_uri` is specified in `ExportAgentRequest`.

### GoogleCloudDialogflowV2beta1Intent
* GoogleCloudDialogflowV2beta1Intent `object`: An intent categorizes an end-user's intention for one conversation turn. For each agent, you define many intents, where your combined intents can handle a complete conversation. When an end-user writes or says something, referred to as an end-user expression or end-user input, Dialogflow matches the end-user input to the best intent in your agent. Matching an intent is also known as intent classification. For more information, see the [intent guide](https://cloud.google.com/dialogflow/docs/intents-overview).
  * parameters `array`: Optional. The collection of parameters associated with the intent.
    * items [GoogleCloudDialogflowV2beta1IntentParameter](#googleclouddialogflowv2beta1intentparameter)
  * action `string`: Optional. The name of the action associated with the intent. Note: The action name must not contain whitespaces.
  * defaultResponsePlatforms `array`: Optional. The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform).
    * items `string` (values: PLATFORM_UNSPECIFIED, FACEBOOK, SLACK, TELEGRAM, KIK, SKYPE, LINE, VIBER, ACTIONS_ON_GOOGLE, TELEPHONY, GOOGLE_HANGOUTS)
  * displayName `string`: Required. The name of this intent.
  * endInteraction `boolean`: Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false.
  * events `array`: Optional. The collection of event names that trigger the intent. If the collection of input contexts is not empty, all of the contexts must be present in the active user session for an event to trigger this intent. Event names are limited to 150 characters.
    * items `string`
  * followupIntentInfo `array`: Output only. Information about all followup intents that have this intent as a direct or indirect parent. We populate this field only in the output.
    * items [GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo](#googleclouddialogflowv2beta1intentfollowupintentinfo)
  * inputContextNames `array`: Optional. The list of context names required for this intent to be triggered. Formats: - `projects//agent/sessions/-/contexts/` - `projects//locations//agent/sessions/-/contexts/`
    * items `string`
  * isFallback `boolean`: Optional. Indicates whether this is a fallback intent.
  * messages `array`: Optional. The collection of rich messages corresponding to the `Response` field in the Dialogflow console.
    * items [GoogleCloudDialogflowV2beta1IntentMessage](#googleclouddialogflowv2beta1intentmessage)
  * mlDisabled `boolean`: Optional. Indicates whether Machine Learning is disabled for the intent. Note: If `ml_disabled` setting is set to true, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off.
  * mlEnabled `boolean`: Optional. Indicates whether Machine Learning is enabled for the intent. Note: If `ml_enabled` setting is set to false, then this intent is not taken into account during inference in `ML ONLY` match mode. Also, auto-markup in the UI is turned off. DEPRECATED! Please use `ml_disabled` field instead. NOTE: If both `ml_enabled` and `ml_disabled` are either not set or false, then the default value is determined as follows: - Before April 15th, 2018 the default is: ml_enabled = false / ml_disabled = true. - After April 15th, 2018 the default is: ml_enabled = true / ml_disabled = false.
  * name `string`: Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Supported formats: - `projects//agent/intents/` - `projects//locations//agent/intents/`
  * outputContexts `array`: Optional. The collection of contexts that are activated when the intent is matched. Context messages in this collection should not set the parameters field. Setting the `lifespan_count` to 0 will reset the context when the intent is matched. Format: `projects//agent/sessions/-/contexts/`.
    * items [GoogleCloudDialogflowV2beta1Context](#googleclouddialogflowv2beta1context)
  * parentFollowupIntentName `string`: Optional. The unique identifier of the parent intent in the chain of followup intents. You can set this field when creating an intent, for example with CreateIntent or BatchUpdateIntents, in order to make this intent a followup intent. It identifies the parent followup intent. Format: `projects//agent/intents/`.
  * priority `integer`: Optional. The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
  * resetContexts `boolean`: Optional. Indicates whether to delete all contexts in the current session when this intent is matched.
  * rootFollowupIntentName `string`: Output only. The unique identifier of the root intent in the chain of followup intents. It identifies the correct followup intents chain for this intent. Format: `projects//agent/intents/`.
  * trainingPhrases `array`: Optional. The collection of examples that the agent is trained on.
    * items [GoogleCloudDialogflowV2beta1IntentTrainingPhrase](#googleclouddialogflowv2beta1intenttrainingphrase)
  * webhookState `string` (values: WEBHOOK_STATE_UNSPECIFIED, WEBHOOK_STATE_ENABLED, WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING): Optional. Indicates whether webhooks are enabled for the intent.

### GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo
* GoogleCloudDialogflowV2beta1IntentFollowupIntentInfo `object`: Represents a single followup intent in the chain.
  * followupIntentName `string`: The unique identifier of the followup intent. Format: `projects//agent/intents/`.
  * parentFollowupIntentName `string`: The unique identifier of the followup intent's parent. Format: `projects//agent/intents/`.

### GoogleCloudDialogflowV2beta1IntentMessage
* GoogleCloudDialogflowV2beta1IntentMessage `object`: Corresponds to the `Response` field in the Dialogflow console.
  * basicCard [GoogleCloudDialogflowV2beta1IntentMessageBasicCard](#googleclouddialogflowv2beta1intentmessagebasiccard)
  * browseCarouselCard [GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard](#googleclouddialogflowv2beta1intentmessagebrowsecarouselcard)
  * card [GoogleCloudDialogflowV2beta1IntentMessageCard](#googleclouddialogflowv2beta1intentmessagecard)
  * carouselSelect [GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect](#googleclouddialogflowv2beta1intentmessagecarouselselect)
  * image [GoogleCloudDialogflowV2beta1IntentMessageImage](#googleclouddialogflowv2beta1intentmessageimage)
  * linkOutSuggestion [GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion](#googleclouddialogflowv2beta1intentmessagelinkoutsuggestion)
  * listSelect [GoogleCloudDialogflowV2beta1IntentMessageListSelect](#googleclouddialogflowv2beta1intentmessagelistselect)
  * mediaContent [GoogleCloudDialogflowV2beta1IntentMessageMediaContent](#googleclouddialogflowv2beta1intentmessagemediacontent)
  * payload `object`: A custom platform-specific response.
  * platform `string` (values: PLATFORM_UNSPECIFIED, FACEBOOK, SLACK, TELEGRAM, KIK, SKYPE, LINE, VIBER, ACTIONS_ON_GOOGLE, TELEPHONY, GOOGLE_HANGOUTS): Optional. The platform that this message is intended for.
  * quickReplies [GoogleCloudDialogflowV2beta1IntentMessageQuickReplies](#googleclouddialogflowv2beta1intentmessagequickreplies)
  * rbmCarouselRichCard [GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard](#googleclouddialogflowv2beta1intentmessagerbmcarouselcard)
  * rbmStandaloneRichCard [GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard](#googleclouddialogflowv2beta1intentmessagerbmstandalonecard)
  * rbmText [GoogleCloudDialogflowV2beta1IntentMessageRbmText](#googleclouddialogflowv2beta1intentmessagerbmtext)
  * simpleResponses [GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses](#googleclouddialogflowv2beta1intentmessagesimpleresponses)
  * suggestions [GoogleCloudDialogflowV2beta1IntentMessageSuggestions](#googleclouddialogflowv2beta1intentmessagesuggestions)
  * tableCard [GoogleCloudDialogflowV2beta1IntentMessageTableCard](#googleclouddialogflowv2beta1intentmessagetablecard)
  * telephonyPlayAudio [GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio](#googleclouddialogflowv2beta1intentmessagetelephonyplayaudio)
  * telephonySynthesizeSpeech [GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech](#googleclouddialogflowv2beta1intentmessagetelephonysynthesizespeech)
  * telephonyTransferCall [GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall](#googleclouddialogflowv2beta1intentmessagetelephonytransfercall)
  * text [GoogleCloudDialogflowV2beta1IntentMessageText](#googleclouddialogflowv2beta1intentmessagetext)

### GoogleCloudDialogflowV2beta1IntentMessageBasicCard
* GoogleCloudDialogflowV2beta1IntentMessageBasicCard `object`: The basic card message. Useful for displaying information.
  * buttons `array`: Optional. The collection of card buttons.
    * items [GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton](#googleclouddialogflowv2beta1intentmessagebasiccardbutton)
  * formattedText `string`: Required, unless image is present. The body text of the card.
  * image [GoogleCloudDialogflowV2beta1IntentMessageImage](#googleclouddialogflowv2beta1intentmessageimage)
  * subtitle `string`: Optional. The subtitle of the card.
  * title `string`: Optional. The title of the card.

### GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton
* GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton `object`: The button object that appears at the bottom of a card.
  * openUriAction [GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction](#googleclouddialogflowv2beta1intentmessagebasiccardbuttonopenuriaction)
  * title `string`: Required. The title of the button.

### GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction
* GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction `object`: Opens the given URI.
  * uri `string`: Required. The HTTP or HTTPS scheme URI.

### GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard
* GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCard `object`: Browse Carousel Card for Actions on Google. https://developers.google.com/actions/assistant/responses#browsing_carousel
  * imageDisplayOptions `string` (values: IMAGE_DISPLAY_OPTIONS_UNSPECIFIED, GRAY, WHITE, CROPPED, BLURRED_BACKGROUND): Optional. Settings for displaying the image. Applies to every image in items.
  * items `array`: Required. List of items in the Browse Carousel Card. Minimum of two items, maximum of ten.
    * items [GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem](#googleclouddialogflowv2beta1intentmessagebrowsecarouselcardbrowsecarouselcarditem)

### GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem
* GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItem `object`: Browsing carousel tile
  * description `string`: Optional. Description of the carousel item. Maximum of four lines of text.
  * footer `string`: Optional. Text that appears at the bottom of the Browse Carousel Card. Maximum of one line of text.
  * image [GoogleCloudDialogflowV2beta1IntentMessageImage](#googleclouddialogflowv2beta1intentmessageimage)
  * openUriAction [GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction](#googleclouddialogflowv2beta1intentmessagebrowsecarouselcardbrowsecarouselcarditemopenurlaction)
  * title `string`: Required. Title of the carousel item. Maximum of two lines of text.

### GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction
* GoogleCloudDialogflowV2beta1IntentMessageBrowseCarouselCardBrowseCarouselCardItemOpenUrlAction `object`: Actions on Google action to open a given url.
  * url `string`: Required. URL
  * urlTypeHint `string` (values: URL_TYPE_HINT_UNSPECIFIED, AMP_ACTION, AMP_CONTENT): Optional. Specifies the type of viewer that is used when opening the URL. Defaults to opening via web browser.

### GoogleCloudDialogflowV2beta1IntentMessageCard
* GoogleCloudDialogflowV2beta1IntentMessageCard `object`: The card response message.
  * buttons `array`: Optional. The collection of card buttons.
    * items [GoogleCloudDialogflowV2beta1IntentMessageCardButton](#googleclouddialogflowv2beta1intentmessagecardbutton)
  * imageUri `string`: Optional. The public URI to an image file for the card.
  * subtitle `string`: Optional. The subtitle of the card.
  * title `string`: Optional. The title of the card.

### GoogleCloudDialogflowV2beta1IntentMessageCardButton
* GoogleCloudDialogflowV2beta1IntentMessageCardButton `object`: Optional. Contains information about a button.
  * postback `string`: Optional. The text to send back to the Dialogflow API or a URI to open.
  * text `string`: Optional. The text to show on the button.

### GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect
* GoogleCloudDialogflowV2beta1IntentMessageCarouselSelect `object`: The card for presenting a carousel of options to select from.
  * items `array`: Required. Carousel items.
    * items [GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem](#googleclouddialogflowv2beta1intentmessagecarouselselectitem)

### GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem
* GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem `object`: An item in the carousel.
  * info [GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo](#googleclouddialogflowv2beta1intentmessageselectiteminfo)
  * description `string`: Optional. The body text of the card.
  * image [GoogleCloudDialogflowV2beta1IntentMessageImage](#googleclouddialogflowv2beta1intentmessageimage)
  * title `string`: Required. Title of the carousel item.

### GoogleCloudDialogflowV2beta1IntentMessageColumnProperties
* GoogleCloudDialogflowV2beta1IntentMessageColumnProperties `object`: Column properties for TableCard.
  * header `string`: Required. Column heading.
  * horizontalAlignment `string` (values: HORIZONTAL_ALIGNMENT_UNSPECIFIED, LEADING, CENTER, TRAILING): Optional. Defines text alignment for all cells in this column.

### GoogleCloudDialogflowV2beta1IntentMessageImage
* GoogleCloudDialogflowV2beta1IntentMessageImage `object`: The image response message.
  * accessibilityText `string`: A text description of the image to be used for accessibility, e.g., screen readers. Required if image_uri is set for CarouselSelect.
  * imageUri `string`: Optional. The public URI to an image file.

### GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion
* GoogleCloudDialogflowV2beta1IntentMessageLinkOutSuggestion `object`: The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
  * destinationName `string`: Required. The name of the app or site this chip is linking to.
  * uri `string`: Required. The URI of the app or site to open when the user taps the suggestion chip.

### GoogleCloudDialogflowV2beta1IntentMessageListSelect
* GoogleCloudDialogflowV2beta1IntentMessageListSelect `object`: The card for presenting a list of options to select from.
  * items `array`: Required. List items.
    * items [GoogleCloudDialogflowV2beta1IntentMessageListSelectItem](#googleclouddialogflowv2beta1intentmessagelistselectitem)
  * subtitle `string`: Optional. Subtitle of the list.
  * title `string`: Optional. The overall title of the list.

### GoogleCloudDialogflowV2beta1IntentMessageListSelectItem
* GoogleCloudDialogflowV2beta1IntentMessageListSelectItem `object`: An item in the list.
  * info [GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo](#googleclouddialogflowv2beta1intentmessageselectiteminfo)
  * description `string`: Optional. The main text describing the item.
  * image [GoogleCloudDialogflowV2beta1IntentMessageImage](#googleclouddialogflowv2beta1intentmessageimage)
  * title `string`: Required. The title of the list item.

### GoogleCloudDialogflowV2beta1IntentMessageMediaContent
* GoogleCloudDialogflowV2beta1IntentMessageMediaContent `object`: The media content card for Actions on Google.
  * mediaObjects `array`: Required. List of media objects.
    * items [GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject](#googleclouddialogflowv2beta1intentmessagemediacontentresponsemediaobject)
  * mediaType `string` (values: RESPONSE_MEDIA_TYPE_UNSPECIFIED, AUDIO): Optional. What type of media is the content (ie "audio").

### GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject
* GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject `object`: Response media object for media content card.
  * contentUrl `string`: Required. Url where the media is stored.
  * description `string`: Optional. Description of media card.
  * icon [GoogleCloudDialogflowV2beta1IntentMessageImage](#googleclouddialogflowv2beta1intentmessageimage)
  * largeImage [GoogleCloudDialogflowV2beta1IntentMessageImage](#googleclouddialogflowv2beta1intentmessageimage)
  * name `string`: Required. Name of media card.

### GoogleCloudDialogflowV2beta1IntentMessageQuickReplies
* GoogleCloudDialogflowV2beta1IntentMessageQuickReplies `object`: The quick replies response message.
  * quickReplies `array`: Optional. The collection of quick replies.
    * items `string`
  * title `string`: Optional. The title of the collection of quick replies.

### GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent
* GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent `object`: Rich Business Messaging (RBM) Card content
  * description `string`: Optional. Description of the card (at most 2000 bytes). At least one of the title, description or media must be set.
  * media [GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia](#googleclouddialogflowv2beta1intentmessagerbmcardcontentrbmmedia)
  * suggestions `array`: Optional. List of suggestions to include in the card.
    * items [GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion](#googleclouddialogflowv2beta1intentmessagerbmsuggestion)
  * title `string`: Optional. Title of the card (at most 200 bytes). At least one of the title, description or media must be set.

### GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia
* GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia `object`: Rich Business Messaging (RBM) Media displayed in Cards The following media-types are currently supported: Image Types * image/jpeg * image/jpg' * image/gif * image/png Video Types * video/h263 * video/m4v * video/mp4 * video/mpeg * video/mpeg4 * video/webm
  * fileUri `string`: Required. Publicly reachable URI of the file. The RBM platform determines the MIME type of the file from the content-type field in the HTTP headers when the platform fetches the file. The content-type field must be present and accurate in the HTTP response from the URL.
  * height `string` (values: HEIGHT_UNSPECIFIED, SHORT, MEDIUM, TALL): Required for cards with vertical orientation. The height of the media within a rich card with a vertical layout. For a standalone card with horizontal layout, height is not customizable, and this field is ignored.
  * thumbnailUri `string`: Optional. Publicly reachable URI of the thumbnail.If you don't provide a thumbnail URI, the RBM platform displays a blank placeholder thumbnail until the user's device downloads the file. Depending on the user's setting, the file may not download automatically and may require the user to tap a download button.

### GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard
* GoogleCloudDialogflowV2beta1IntentMessageRbmCarouselCard `object`: Carousel Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. If you want to show a single card with more control over the layout, please use RbmStandaloneCard instead.
  * cardContents `array`: Required. The cards in the carousel. A carousel must have at least 2 cards and at most 10.
    * items [GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent](#googleclouddialogflowv2beta1intentmessagerbmcardcontent)
  * cardWidth `string` (values: CARD_WIDTH_UNSPECIFIED, SMALL, MEDIUM): Required. The width of the cards in the carousel.

### GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard
* GoogleCloudDialogflowV2beta1IntentMessageRbmStandaloneCard `object`: Standalone Rich Business Messaging (RBM) rich card. Rich cards allow you to respond to users with more vivid content, e.g. with media and suggestions. You can group multiple rich cards into one using RbmCarouselCard but carousel cards will give you less control over the card layout.
  * cardContent [GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent](#googleclouddialogflowv2beta1intentmessagerbmcardcontent)
  * cardOrientation `string` (values: CARD_ORIENTATION_UNSPECIFIED, HORIZONTAL, VERTICAL): Required. Orientation of the card.
  * thumbnailImageAlignment `string` (values: THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED, LEFT, RIGHT): Required if orientation is horizontal. Image preview alignment for standalone cards with horizontal layout.

### GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction
* GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction `object`: Rich Business Messaging (RBM) suggested client-side action that the user can choose from the card.
  * dial [GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial](#googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactiondial)
  * openUrl [GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri](#googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactionopenuri)
  * postbackData `string`: Opaque payload that the Dialogflow receives in a user event when the user taps the suggested action. This data will be also forwarded to webhook to allow performing custom business logic.
  * shareLocation [GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation](#googleclouddialogflowv2beta1intentmessagerbmsuggestedactionrbmsuggestedactionsharelocation)
  * text `string`: Text to display alongside the action.

### GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial
* GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionDial `object`: Opens the user's default dialer app with the specified phone number but does not dial automatically.
  * phoneNumber `string`: Required. The phone number to fill in the default dialer app. This field should be in [E.164](https://en.wikipedia.org/wiki/E.164) format. An example of a correctly formatted phone number: +15556767888.

### GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri
* GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionOpenUri `object`: Opens the user's default web browser app to the specified uri If the user has an app installed that is registered as the default handler for the URL, then this app will be opened instead, and its icon will be used in the suggested action UI.
  * uri `string`: Required. The uri to open on the user device

### GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation
* GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedActionRbmSuggestedActionShareLocation `object`: Opens the device's location chooser so the user can pick a location to send back to the agent.

### GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply
* GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply `object`: Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response.
  * postbackData `string`: Opaque payload that the Dialogflow receives in a user event when the user taps the suggested reply. This data will be also forwarded to webhook to allow performing custom business logic.
  * text `string`: Suggested reply text.

### GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion
* GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion `object`: Rich Business Messaging (RBM) suggestion. Suggestions allow user to easily select/click a predefined response or perform an action (like opening a web uri).
  * action [GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction](#googleclouddialogflowv2beta1intentmessagerbmsuggestedaction)
  * reply [GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply](#googleclouddialogflowv2beta1intentmessagerbmsuggestedreply)

### GoogleCloudDialogflowV2beta1IntentMessageRbmText
* GoogleCloudDialogflowV2beta1IntentMessageRbmText `object`: Rich Business Messaging (RBM) text response with suggestions.
  * rbmSuggestion `array`: Optional. One or more suggestions to show to the user.
    * items [GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion](#googleclouddialogflowv2beta1intentmessagerbmsuggestion)
  * text `string`: Required. Text sent and displayed to the user.

### GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo
* GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo `object`: Additional info about the select item for when it is triggered in a dialog.
  * key `string`: Required. A unique key that will be sent back to the agent if this response is given.
  * synonyms `array`: Optional. A list of synonyms that can also be used to trigger this item in dialog.
    * items `string`

### GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse
* GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse `object`: The simple response message containing speech or text.
  * displayText `string`: Optional. The text to display.
  * ssml `string`: One of text_to_speech or ssml must be provided. Structured spoken response to the user in the SSML format. Mutually exclusive with text_to_speech.
  * textToSpeech `string`: One of text_to_speech or ssml must be provided. The plain text of the speech output. Mutually exclusive with ssml.

### GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses
* GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses `object`: The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
  * simpleResponses `array`: Required. The list of simple responses.
    * items [GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse](#googleclouddialogflowv2beta1intentmessagesimpleresponse)

### GoogleCloudDialogflowV2beta1IntentMessageSuggestion
* GoogleCloudDialogflowV2beta1IntentMessageSuggestion `object`: The suggestion chip message that the user can tap to quickly post a reply to the conversation.
  * title `string`: Required. The text shown the in the suggestion chip.

### GoogleCloudDialogflowV2beta1IntentMessageSuggestions
* GoogleCloudDialogflowV2beta1IntentMessageSuggestions `object`: The collection of suggestions.
  * suggestions `array`: Required. The list of suggested replies.
    * items [GoogleCloudDialogflowV2beta1IntentMessageSuggestion](#googleclouddialogflowv2beta1intentmessagesuggestion)

### GoogleCloudDialogflowV2beta1IntentMessageTableCard
* GoogleCloudDialogflowV2beta1IntentMessageTableCard `object`: Table card for Actions on Google.
  * buttons `array`: Optional. List of buttons for the card.
    * items [GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton](#googleclouddialogflowv2beta1intentmessagebasiccardbutton)
  * columnProperties `array`: Optional. Display properties for the columns in this table.
    * items [GoogleCloudDialogflowV2beta1IntentMessageColumnProperties](#googleclouddialogflowv2beta1intentmessagecolumnproperties)
  * image [GoogleCloudDialogflowV2beta1IntentMessageImage](#googleclouddialogflowv2beta1intentmessageimage)
  * rows `array`: Optional. Rows in this table of data.
    * items [GoogleCloudDialogflowV2beta1IntentMessageTableCardRow](#googleclouddialogflowv2beta1intentmessagetablecardrow)
  * subtitle `string`: Optional. Subtitle to the title.
  * title `string`: Required. Title of the card.

### GoogleCloudDialogflowV2beta1IntentMessageTableCardCell
* GoogleCloudDialogflowV2beta1IntentMessageTableCardCell `object`: Cell of TableCardRow.
  * text `string`: Required. Text in this cell.

### GoogleCloudDialogflowV2beta1IntentMessageTableCardRow
* GoogleCloudDialogflowV2beta1IntentMessageTableCardRow `object`: Row of TableCard.
  * cells `array`: Optional. List of cells that make up this row.
    * items [GoogleCloudDialogflowV2beta1IntentMessageTableCardCell](#googleclouddialogflowv2beta1intentmessagetablecardcell)
  * dividerAfter `boolean`: Optional. Whether to add a visual divider after this row.

### GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio
* GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio `object`: Plays audio from a file in Telephony Gateway.
  * audioUri `string`: Required. URI to a Google Cloud Storage object containing the audio to play, e.g., "gs://bucket/object". The object must contain a single channel (mono) of linear PCM audio (2 bytes / sample) at 8kHz. This object must be readable by the `service-@gcp-sa-dialogflow.iam.gserviceaccount.com` service account where is the number of the Telephony Gateway project (usually the same as the Dialogflow agent project). If the Google Cloud Storage bucket is in the Telephony Gateway project, this permission is added by default when enabling the Dialogflow V2 API. For audio from other sources, consider using the `TelephonySynthesizeSpeech` message with SSML.

### GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech
* GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech `object`: Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway. Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config.
  * ssml `string`: The SSML to be synthesized. For more information, see [SSML](https://developers.google.com/actions/reference/ssml).
  * text `string`: The raw text to be synthesized.

### GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall
* GoogleCloudDialogflowV2beta1IntentMessageTelephonyTransferCall `object`: Transfers the call in Telephony Gateway.
  * phoneNumber `string`: Required. The phone number to transfer the call to in [E.164 format](https://en.wikipedia.org/wiki/E.164). We currently only allow transferring to US numbers (+1xxxyyyzzzz).

### GoogleCloudDialogflowV2beta1IntentMessageText
* GoogleCloudDialogflowV2beta1IntentMessageText `object`: The text response message.
  * text `array`: Optional. The collection of the agent's responses.
    * items `string`

### GoogleCloudDialogflowV2beta1IntentParameter
* GoogleCloudDialogflowV2beta1IntentParameter `object`: Represents intent parameters.
  * defaultValue `string`: Optional. The default value to use when the `value` yields an empty result. Default values can be extracted from contexts by using the following syntax: `#context_name.parameter_name`.
  * displayName `string`: Required. The name of the parameter.
  * entityTypeDisplayName `string`: Optional. The name of the entity type, prefixed with `@`, that describes values of the parameter. If the parameter is required, this must be provided.
  * isList `boolean`: Optional. Indicates whether the parameter represents a list of values.
  * mandatory `boolean`: Optional. Indicates whether the parameter is required. That is, whether the intent cannot be completed without collecting the parameter value.
  * name `string`: The unique identifier of this parameter.
  * prompts `array`: Optional. The collection of prompts that the agent can present to the user in order to collect a value for the parameter.
    * items `string`
  * value `string`: Optional. The definition of the parameter value. It can be: - a constant string, - a parameter value defined as `$parameter_name`, - an original parameter value defined as `$parameter_name.original`, - a parameter value from some context defined as `#context_name.parameter_name`.

### GoogleCloudDialogflowV2beta1IntentTrainingPhrase
* GoogleCloudDialogflowV2beta1IntentTrainingPhrase `object`: Represents an example that the agent is trained on.
  * name `string`: Output only. The unique identifier of this training phrase.
  * parts `array`: Required. The ordered list of training phrase parts. The parts are concatenated in order to form the training phrase. Note: The API does not automatically annotate training phrases like the Dialogflow Console does. Note: Do not forget to include whitespace at part boundaries, so the training phrase is well formatted when the parts are concatenated. If the training phrase does not need to be annotated with parameters, you just need a single part with only the Part.text field set. If you want to annotate the training phrase, you must create multiple parts, where the fields of each part are populated in one of two ways: - `Part.text` is set to a part of the phrase that has no parameters. - `Part.text` is set to a part of the phrase that you want to annotate, and the `entity_type`, `alias`, and `user_defined` fields are all set.
    * items [GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart](#googleclouddialogflowv2beta1intenttrainingphrasepart)
  * timesAddedCount `integer`: Optional. Indicates how many times this example was added to the intent. Each time a developer adds an existing sample by editing an intent or training, this counter is increased.
  * type `string` (values: TYPE_UNSPECIFIED, EXAMPLE, TEMPLATE): Required. The type of the training phrase.

### GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart
* GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart `object`: Represents a part of a training phrase.
  * alias `string`: Optional. The parameter name for the value extracted from the annotated part of the example. This field is required for annotated parts of the training phrase.
  * entityType `string`: Optional. The entity type name prefixed with `@`. This field is required for annotated parts of the training phrase.
  * text `string`: Required. The text for this part.
  * userDefined `boolean`: Optional. Indicates whether the text was manually annotated. This field is set to true when the Dialogflow Console is used to manually annotate the part. When creating an annotated part with the API, you must set this to true.

### GoogleCloudDialogflowV2beta1KnowledgeAnswers
* GoogleCloudDialogflowV2beta1KnowledgeAnswers `object`: Represents the result of querying a Knowledge base.
  * answers `array`: A list of answers from Knowledge Connector.
    * items [GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer](#googleclouddialogflowv2beta1knowledgeanswersanswer)

### GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer
* GoogleCloudDialogflowV2beta1KnowledgeAnswersAnswer `object`: An answer from Knowledge Connector.
  * answer `string`: The piece of text from the `source` knowledge base document that answers this conversational query.
  * faqQuestion `string`: The corresponding FAQ question if the answer was extracted from a FAQ Document, empty otherwise.
  * matchConfidence `number`: The system's confidence score that this Knowledge answer is a good match for this conversational query. The range is from 0.0 (completely uncertain) to 1.0 (completely certain). Note: The confidence score is likely to vary somewhat (possibly even for identical requests), as the underlying model is under constant improvement. It may be deprecated in the future. We recommend using `match_confidence_level` which should be generally more stable.
  * matchConfidenceLevel `string` (values: MATCH_CONFIDENCE_LEVEL_UNSPECIFIED, LOW, MEDIUM, HIGH): The system's confidence level that this knowledge answer is a good match for this conversational query. NOTE: The confidence level for a given `` pair may change without notice, as it depends on models that are constantly being improved. However, it will change less frequently than the confidence score below, and should be preferred for referencing the quality of an answer.
  * source `string`: Indicates which Knowledge Document this answer was extracted from. Format: `projects//knowledgeBases//documents/`.

### GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata
* GoogleCloudDialogflowV2beta1KnowledgeOperationMetadata `object`: Metadata in google::longrunning::Operation for Knowledge operations.
  * state `string` (values: STATE_UNSPECIFIED, PENDING, RUNNING, DONE): Required. Output only. The current state of this operation.

### GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest
* GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest `object`: Represents the contents of the original request that was passed to the `[Streaming]DetectIntent` call.
  * payload `object`: Optional. This field is set to the value of the `QueryParameters.payload` field passed in the request. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: { "telephony": { "caller_id": "+18558363987" } } Note: The caller ID field (`caller_id`) will be redacted for Trial Edition agents and populated with the caller ID in [E.164 format](https://en.wikipedia.org/wiki/E.164) for Essentials Edition agents.
  * source `string`: The source of this request, e.g., `google`, `facebook`, `slack`. It is set by Dialogflow-owned servers.
  * version `string`: Optional. The version of the protocol used for this request. This field is AoG-specific.

### GoogleCloudDialogflowV2beta1QueryResult
* GoogleCloudDialogflowV2beta1QueryResult `object`: Represents the result of conversational query or event processing.
  * parameters `object`: The collection of extracted parameters. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: - MapKey type: string - MapKey value: parameter name - MapValue type: - If parameter's entity type is a composite entity: map - Else: string or number, depending on parameter value type - MapValue value: - If parameter's entity type is a composite entity: map from composite entity property names to property values - Else: parameter value
  * action `string`: The action name from the matched intent.
  * allRequiredParamsPresent `boolean`: This field is set to: - `false` if the matched intent has required parameters and not all of the required parameter values have been collected. - `true` if all required parameter values have been collected, or if the matched intent doesn't contain any required parameters.
  * diagnosticInfo `object`: Free-form diagnostic information for the associated detect intent request. The fields of this data can change without notice, so you should not write code that depends on its structure. The data may contain: - webhook call latency - webhook errors
  * fulfillmentMessages `array`: The collection of rich messages to present to the user.
    * items [GoogleCloudDialogflowV2beta1IntentMessage](#googleclouddialogflowv2beta1intentmessage)
  * fulfillmentText `string`: The text to be pronounced to the user or shown on the screen. Note: This is a legacy field, `fulfillment_messages` should be preferred.
  * intent [GoogleCloudDialogflowV2beta1Intent](#googleclouddialogflowv2beta1intent)
  * intentDetectionConfidence `number`: The intent detection confidence. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation. If there are `multiple knowledge_answers` messages, this value is set to the greatest `knowledgeAnswers.match_confidence` value in the list.
  * knowledgeAnswers [GoogleCloudDialogflowV2beta1KnowledgeAnswers](#googleclouddialogflowv2beta1knowledgeanswers)
  * languageCode `string`: The language that was triggered during intent detection. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.
  * outputContexts `array`: The collection of output contexts. If applicable, `output_contexts.parameters` contains entries with name `.original` containing the original parameter values before the query.
    * items [GoogleCloudDialogflowV2beta1Context](#googleclouddialogflowv2beta1context)
  * queryText `string`: The original conversational query text: - If natural language text was provided as input, `query_text` contains a copy of the input. - If natural language speech audio was provided as input, `query_text` contains the speech recognition result. If speech recognizer produced multiple alternatives, a particular one is picked. - If automatic spell correction is enabled, `query_text` will contain the corrected user input.
  * sentimentAnalysisResult [GoogleCloudDialogflowV2beta1SentimentAnalysisResult](#googleclouddialogflowv2beta1sentimentanalysisresult)
  * speechRecognitionConfidence `number`: The Speech recognition confidence between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. The default of 0.0 is a sentinel value indicating that confidence was not set. This field is not guaranteed to be accurate or set. In particular this field isn't set for StreamingDetectIntent since the streaming endpoint has separate confidence estimates per portion of the audio in StreamingRecognitionResult.
  * webhookPayload `object`: If the query was fulfilled by a webhook call, this field is set to the value of the `payload` field returned in the webhook response.
  * webhookSource `string`: If the query was fulfilled by a webhook call, this field is set to the value of the `source` field returned in the webhook response.

### GoogleCloudDialogflowV2beta1Sentiment
* GoogleCloudDialogflowV2beta1Sentiment `object`: The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
  * magnitude `number`: A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative).
  * score `number`: Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).

### GoogleCloudDialogflowV2beta1SentimentAnalysisResult
* GoogleCloudDialogflowV2beta1SentimentAnalysisResult `object`: The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config
  * queryTextSentiment [GoogleCloudDialogflowV2beta1Sentiment](#googleclouddialogflowv2beta1sentiment)

### GoogleCloudDialogflowV2beta1SessionEntityType
* GoogleCloudDialogflowV2beta1SessionEntityType `object`: A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
  * entities `array`: Required. The collection of entities associated with this session entity type.
    * items [GoogleCloudDialogflowV2beta1EntityTypeEntity](#googleclouddialogflowv2beta1entitytypeentity)
  * entityOverrideMode `string` (values: ENTITY_OVERRIDE_MODE_UNSPECIFIED, ENTITY_OVERRIDE_MODE_OVERRIDE, ENTITY_OVERRIDE_MODE_SUPPLEMENT): Required. Indicates whether the additional data should override or supplement the custom entity type definition.
  * name `string`: Required. The unique identifier of this session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.

### GoogleCloudDialogflowV2beta1WebhookRequest
* GoogleCloudDialogflowV2beta1WebhookRequest `object`: The request message for a webhook call.
  * alternativeQueryResults `array`: Alternative query results from KnowledgeService.
    * items [GoogleCloudDialogflowV2beta1QueryResult](#googleclouddialogflowv2beta1queryresult)
  * originalDetectIntentRequest [GoogleCloudDialogflowV2beta1OriginalDetectIntentRequest](#googleclouddialogflowv2beta1originaldetectintentrequest)
  * queryResult [GoogleCloudDialogflowV2beta1QueryResult](#googleclouddialogflowv2beta1queryresult)
  * responseId `string`: The unique identifier of the response. Contains the same value as `[Streaming]DetectIntentResponse.response_id`.
  * session `string`: The unique identifier of detectIntent request session. Can be used to identify end-user inside webhook implementation. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`,

### GoogleCloudDialogflowV2beta1WebhookResponse
* GoogleCloudDialogflowV2beta1WebhookResponse `object`: The response message for a webhook call. This response is validated by the Dialogflow server. If validation fails, an error will be returned in the QueryResult.diagnostic_info field. Setting JSON fields to an empty value with the wrong type is a common error. To avoid this error: - Use `""` for empty strings - Use `{}` or `null` for empty objects - Use `[]` or `null` for empty arrays For more information, see the [Protocol Buffers Language Guide](https://developers.google.com/protocol-buffers/docs/proto3#json).
  * endInteraction `boolean`: Optional. Indicates that this intent ends an interaction. Some integrations (e.g., Actions on Google or Dialogflow phone gateway) use this information to close interaction with an end user. Default is false.
  * followupEventInput [GoogleCloudDialogflowV2beta1EventInput](#googleclouddialogflowv2beta1eventinput)
  * fulfillmentMessages `array`: Optional. The rich response messages intended for the end-user. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_messages sent to the integration or API caller.
    * items [GoogleCloudDialogflowV2beta1IntentMessage](#googleclouddialogflowv2beta1intentmessage)
  * fulfillmentText `string`: Optional. The text response message intended for the end-user. It is recommended to use `fulfillment_messages.text.text[0]` instead. When provided, Dialogflow uses this field to populate QueryResult.fulfillment_text sent to the integration or API caller.
  * outputContexts `array`: Optional. The collection of output contexts that will overwrite currently active contexts for the session and reset their lifespans. When provided, Dialogflow uses this field to populate QueryResult.output_contexts sent to the integration or API caller.
    * items [GoogleCloudDialogflowV2beta1Context](#googleclouddialogflowv2beta1context)
  * payload `object`: Optional. This field can be used to pass custom data from your webhook to the integration or API caller. Arbitrary JSON objects are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_payload sent to the integration or API caller. This field is also used by the [Google Assistant integration](https://cloud.google.com/dialogflow/docs/integrations/aog) for rich response messages. See the format definition at [Google Assistant Dialogflow webhook format](https://developers.google.com/assistant/actions/build/json/dialogflow-webhook-json)
  * sessionEntityTypes `array`: Optional. Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session. Setting this data from a webhook overwrites the session entity types that have been set using `detectIntent`, `streamingDetectIntent` or SessionEntityType management methods.
    * items [GoogleCloudDialogflowV2beta1SessionEntityType](#googleclouddialogflowv2beta1sessionentitytype)
  * source `string`: Optional. A custom field used to identify the webhook source. Arbitrary strings are supported. When provided, Dialogflow uses this field to populate QueryResult.webhook_source sent to the integration or API caller.

### GoogleLongrunningListOperationsResponse
* GoogleLongrunningListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [GoogleLongrunningOperation](#googlelongrunningoperation)

### GoogleLongrunningOperation
* GoogleLongrunningOperation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [GoogleRpcStatus](#googlerpcstatus)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### GoogleProtobufEmpty
* GoogleProtobufEmpty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### GoogleRpcStatus
* GoogleRpcStatus `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### GoogleTypeLatLng
* GoogleTypeLatLng `object`: An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.
  * latitude `number`: The latitude in degrees. It must be in the range [-90.0, +90.0].
  * longitude `number`: The longitude in degrees. It must be in the range [-180.0, +180.0].


