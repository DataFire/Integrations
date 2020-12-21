# @datafire/google_apigee

Client library for Apigee API

## Installation and Usage
```bash
npm install --save @datafire/google_apigee
```
```js
let google_apigee = require('@datafire/google_apigee').create({
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

Use the Apigee API to programmatically develop and manage APIs with a set of RESTful operations. Develop and secure API proxies, deploy and undeploy API proxy revisions, monitor APIs, configure environments, manage users, and more. Get started using the APIs. *Note:* This product is available as a free trial for a time period of 60 days.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_apigee.oauthCallback({
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
google_apigee.oauthRefresh(null, context)
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

### apigee.organizations.create
Creates an Apigee organization. See [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).


```js
google_apigee.apigee.organizations.create({}, context)
```

#### Input
* input `object`
  * parent `string`: Required. Name of the GCP project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: `projects/`
  * body [GoogleCloudApigeeV1Organization](#googlecloudapigeev1organization)
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

### apigee.organizations.instances.reportStatus
Reports the latest status for a runtime instance.


```js
google_apigee.apigee.organizations.instances.reportStatus({
  "instance": ""
}, context)
```

#### Input
* input `object`
  * instance **required** `string`: The name of the instance reporting this status. For SaaS the request will be rejected if no instance exists under this name. Format is organizations/{org}/instances/{instance}
  * body [GoogleCloudApigeeV1ReportInstanceStatusRequest](#googlecloudapigeev1reportinstancestatusrequest)
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
* output [GoogleCloudApigeeV1ReportInstanceStatusResponse](#googlecloudapigeev1reportinstancestatusresponse)

### apigee.organizations.sites.apicategories.delete
Deletes a category from the portal.


```js
google_apigee.apigee.organizations.sites.apicategories.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`
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
* output [GoogleCloudApigeeV1ApiResponseWrapper](#googlecloudapigeev1apiresponsewrapper)

### apigee.organizations.sites.apicategories.get
Gets a category on the portal.


```js
google_apigee.apigee.organizations.sites.apicategories.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`
  * format `string` (values: INGRESS_CONFIG_VIEW_UNSPECIFIED, BASIC, FULL): Specify `bundle` to export the contents of the shared flow bundle. Otherwise, the bundle metadata is returned.
  * envgroupHostname `string`: Required. The hostname for which the interactive query will be executed.
  * filter `string`: Enables drill-down on specific dimension values.
  * limit `string`: This parameter is used to limit the number of result items. Default and the max value is 14400.
  * offset `string`: Use offset with limit to enable pagination of results. For example, to display results 11-20, set limit to '10' and offset to '10'.
  * realtime `boolean`: Legacy field: not used anymore.
  * select `string`: Required. The select parameter contains a comma separated list of metrics. E.g. sum(message_count),sum(error_count)
  * sort `string`: This parameter specifies if the sort order should be ascending or descending Supported values are DESC and ASC.
  * sortby `string`: Comma separated list of columns to sort the final result.
  * timeRange `string`: Required. Time interval for the interactive query. Time range is specified as start~end. E.g 04/15/2017 00:00~05/15/2017 23:59.
  * timeUnit `string`: A value of second, minute, hour, day, week, month. Time Unit specifies the granularity of metrics returned.
  * topk `string`: Take 'top k' results from results, for example, to return the top 5 results 'topk=5'.
  * tsAscending `boolean`: Lists timestamps in ascending order if set to true. Recommend setting this value to true if you are using sortby with sort=DESC.
  * tzo `string`: This parameters contains the timezone offset value.
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
* output [GoogleCloudApigeeV1ApiCategory](#googlecloudapigeev1apicategory)

### apigee.organizations.sites.apicategories.patch
Updates a category on the portal.


```js
google_apigee.apigee.organizations.sites.apicategories.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`
  * replaceRepeatedFields `boolean`: Boolean flag that specifies whether to replace existing values in the debug mask when doing an update. Set to true to replace existing values. The default behavior is to append the values (false).
  * updateMask `string`: Field debug mask to support partial updates.
  * body [GoogleCloudApigeeV1ApiCategoryData](#googlecloudapigeev1apicategorydata)
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
* output [GoogleCloudApigeeV1ApiCategory](#googlecloudapigeev1apicategory)

### apigee.organizations.sharedflows.revisions.updateSharedFlowRevision
Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.


```js
google_apigee.apigee.organizations.sharedflows.revisions.updateSharedFlowRevision({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the shared flow revision to update. Must be of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}/revisions/{revision_id}`
  * validate `boolean`: Ignored. All uploads are validated regardless of the value of this field. It is kept for compatibility with existing APIs. Must be `true` or `false` if provided.
  * body [GoogleApiHttpBody](#googleapihttpbody)
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
* output [GoogleCloudApigeeV1SharedFlowRevision](#googlecloudapigeev1sharedflowrevision)

### apigee.organizations.reports.update
Update an existing custom report definition


```js
google_apigee.apigee.organizations.reports.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Custom Report name of the form: `organizations/{organization_id}/reports/{report_name}`
  * ignoreExpiryValidation `boolean`: Required. If `true`, no expiry validation will be performed.
  * ignoreNewlineValidation `boolean`: If `true`, do not throw an error when the file contains a chain with no newline between each certificate. By default, a newline is needed between each certificate in a chain.
  * body [GoogleCloudApigeeV1CustomReport](#googlecloudapigeev1customreport)
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
* output [GoogleCloudApigeeV1CustomReport](#googlecloudapigeev1customreport)

### apigee.organizations.developers.apps.attributes
Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.


```js
google_apigee.apigee.organizations.developers.apps.attributes({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}`
  * body [GoogleCloudApigeeV1Attributes](#googlecloudapigeev1attributes)
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
* output [GoogleCloudApigeeV1Attributes](#googlecloudapigeev1attributes)

### apigee.organizations.environments.keystores.aliases.getCertificate
Gets the certificate from an alias in PEM-encoded form.


```js
google_apigee.apigee.organizations.environments.keystores.aliases.getCertificate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the alias. Must be of the form `organizations/{organization}/environments/{environment}/keystores/{keystore}/aliases/{alias}`.
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
* output [GoogleApiHttpBody](#googleapihttpbody)

### apigee.organizations.environments.keystores.aliases.csr
Generates a PKCS #10 Certificate Signing Request for the private key in an alias.


```js
google_apigee.apigee.organizations.environments.keystores.aliases.csr({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the alias. Must be of the form `organizations/{organization}/environments/{environment}/keystores/{keystore}/aliases/{alias}`.
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
* output [GoogleApiHttpBody](#googleapihttpbody)

### apigee.organizations.environments.apis.revisions.debugsessions.deleteData
Deletes the data from a debug session. This does not cancel the debug session or prevent further data from being collected if the session is still active in runtime pods.


```js
google_apigee.apigee.organizations.environments.apis.revisions.debugsessions.deleteData({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the debug session to delete. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}/debugsessions/{debugsession}`.
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

### apigee.organizations.environments.sharedflows.revisions.undeploy
Undeploys a shared flow revision from an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.undeploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`


```js
google_apigee.apigee.organizations.environments.sharedflows.revisions.undeploy({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the shared flow revision to undeploy in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}`
  * sequencedRollout `boolean`: If true, a best-effort attempt will be made to remove the environment group routing rules corresponding to this deployment before removing the deployment from the runtime. This is likely to be a rare use case; it is only needed when the intended effect of undeploying this proxy is to cause the traffic it currently handles to be rerouted to some other existing proxy in the environment group. The GenerateUndeployChangeReport API may be used to examine routing changes before issuing the undeployment request, and its response will indicate if a sequenced rollout is recommended for the undeployment.
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

### apigee.organizations.environments.sharedflows.revisions.getDeployments
Gets the deployment of a shared flow revision and actual state reported by runtime pods.


```js
google_apigee.apigee.organizations.environments.sharedflows.revisions.getDeployments({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name representing a shared flow in an environment in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}`
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
* output [GoogleCloudApigeeV1Deployment](#googlecloudapigeev1deployment)

### apigee.organizations.environments.sharedflows.revisions.deploy
Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.deploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`


```js
google_apigee.apigee.organizations.environments.sharedflows.revisions.deploy({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the shared flow revision to deploy in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}`
  * override `boolean`: Flag that specifies whether to force the deployment of the new revision over the currently deployed revision by overriding conflict checks. If an existing shared flow revision is deployed, to ensure seamless deployment with no downtime, set this parameter to `true`. In this case, hybrid deploys the new revision fully before undeploying the existing revision. If set to `false`, you must undeploy the existing revision before deploying the new revision.
  * sequencedRollout `boolean`: If true, a best-effort attempt will be made to roll out the routing rules corresponding to this deployment and the environment changes to add this deployment in a safe order. This reduces the risk of downtime that could be caused by changing the environment group's routing before the new destination for the affected traffic is ready to receive it. This should only be necessary if the new deployment will be capturing traffic from another environment under a shared environment group or if traffic will be rerouted to a different environment due to a basepath removal. The GenerateDeployChangeReport API may be used to examine routing changes before issuing the deployment request, and its response will indicate if a sequenced rollout is recommended for the deployment.
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
* output [GoogleCloudApigeeV1Deployment](#googlecloudapigeev1deployment)

### apigee.organizations.environments.apis.revisions.deployments.generateDeployChangeReport
Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateDeployChangeReport`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`


```js
google_apigee.apigee.organizations.environments.apis.revisions.deployments.generateDeployChangeReport({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}`
  * override `boolean`: Flag that specifies whether to force the deployment of the new revision over the currently deployed revision by overriding conflict checks.
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
* output [GoogleCloudApigeeV1DeploymentChangeReport](#googlecloudapigeev1deploymentchangereport)

### apigee.organizations.environments.apis.revisions.deployments.generateUndeployChangeReport
Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateUndeployChangeReport`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`


```js
google_apigee.apigee.organizations.environments.apis.revisions.deployments.generateUndeployChangeReport({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}`
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
* output [GoogleCloudApigeeV1DeploymentChangeReport](#googlecloudapigeev1deploymentchangereport)

### apigee.organizations.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_apigee.apigee.organizations.operations.list({
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

### apigee.organizations.instances.natAddresses.activate
Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. **Note:** Not supported for Apigee hybrid.


```js
google_apigee.apigee.organizations.instances.natAddresses.activate({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the nat address. Use the following structure in your request: `organizations/{org}/instances/{instances}/natAddresses/{nataddress}``
  * body [GoogleCloudApigeeV1ActivateNatAddressRequest](#googlecloudapigeev1activatenataddressrequest)
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

### apigee.organizations.getSyncAuthorization
Lists the service accounts with the permissions required to allow the Synchronizer to download environment data from the control plane. An ETag is returned in the response to `getSyncAuthorization`. Pass that ETag when calling [setSyncAuthorization](setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.


```js
google_apigee.apigee.organizations.getSyncAuthorization({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`
  * body [GoogleCloudApigeeV1GetSyncAuthorizationRequest](#googlecloudapigeev1getsyncauthorizationrequest)
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
* output [GoogleCloudApigeeV1SyncAuthorization](#googlecloudapigeev1syncauthorization)

### apigee.organizations.setSyncAuthorization
Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling `setSyncAuthorization` to ensure that you are updating the correct version. To get an ETag, call [getSyncAuthorization](getSyncAuthorization). If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.


```js
google_apigee.apigee.organizations.setSyncAuthorization({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`
  * body [GoogleCloudApigeeV1SyncAuthorization](#googlecloudapigeev1syncauthorization)
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
* output [GoogleCloudApigeeV1SyncAuthorization](#googlecloudapigeev1syncauthorization)

### apigee.organizations.list
Lists the Apigee organizations and associated GCP projects that you have permission to access. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).


```js
google_apigee.apigee.organizations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Use the following structure in your request: `organizations`
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
* output [GoogleCloudApigeeV1ListOrganizationsResponse](#googlecloudapigeev1listorganizationsresponse)

### apigee.organizations.environments.keystores.aliases.create
Creates an alias from a key, certificate pair. The structure of the request is controlled by the `format` query parameter: * `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. The request must have `Content-Type: multipart/form-data` and include fields `keyFile` and `certFile`. If uploading to a truststore, omit `keyFile`. A `password` field should be provided for encrypted keys. * `pkcs12` - A PKCS12 file is uploaded. The request must have `Content-Type: multipart/form-data` with the file provided in the `file` field and a `password` field if the file is encrypted. * `selfsignedcert` - A new private key and certificate are generated. The request must have `Content-Type: application/json` and a body of CertificateGenerationSpec.


```js
google_apigee.apigee.organizations.environments.keystores.aliases.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the keystore. Must be of the form `organizations/{organization}/environments/{environment}/keystores/{keystore}`.
  * _password `string`: DEPRECATED: For improved security, send the password in the body instead of using this query param. To send it in the body, use a multipart/form-data part with name "password". The password for the private key file, if it exists.
  * alias `string`: The alias for the key, certificate pair. Values must match regular expression `[\w\s-.]{1,255}`. This must be provided for all formats except 'selfsignedcert'; self-signed certs may specify the alias in either this parameter or the JSON body.
  * format `string`: Required. The format of the data. Must be either `selfsignedcert`, `keycertfile`, or `pkcs12`.
  * ignoreExpiryValidation `boolean`: If `true`, no expiry validation will be performed.
  * ignoreNewlineValidation `boolean`: If `true`, do not throw an error when the file contains a chain with no newline between each certificate. By default, a newline is needed between each certificate in a chain.
  * body [GoogleApiHttpBody](#googleapihttpbody)
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
* output [GoogleCloudApigeeV1Alias](#googlecloudapigeev1alias)

### apigee.organizations.analytics.datastores.list
List Datastores


```js
google_apigee.apigee.organizations.analytics.datastores.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent organization name. Must be of the form `organizations/{org}`.
  * targetType `string`: Optional. TargetType is used to fetch all Datastores that match the type
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
* output [GoogleCloudApigeeV1ListDatastoresResponse](#googlecloudapigeev1listdatastoresresponse)

### apigee.organizations.analytics.datastores.create
Create a Datastore for an org


```js
google_apigee.apigee.organizations.analytics.datastores.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent organization name. Must be of the form `organizations/{org}`.
  * body [GoogleCloudApigeeV1Datastore](#googlecloudapigeev1datastore)
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
* output [GoogleCloudApigeeV1Datastore](#googlecloudapigeev1datastore)

### apigee.organizations.analytics.datastores.test
Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage


```js
google_apigee.apigee.organizations.analytics.datastores.test({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent organization name Must be of the form `organizations/{org}`
  * body [GoogleCloudApigeeV1Datastore](#googlecloudapigeev1datastore)
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
* output [GoogleCloudApigeeV1TestDatastoreResponse](#googlecloudapigeev1testdatastoreresponse)

### apigee.organizations.environments.analytics.exports.list
Lists the details and status of all analytics export jobs belonging to the parent organization and environment.


```js
google_apigee.apigee.organizations.environments.analytics.exports.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Names of the parent organization and environment. Must be of the form `organizations/{org}/environments/{env}`.
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
* output [GoogleCloudApigeeV1ListExportsResponse](#googlecloudapigeev1listexportsresponse)

### apigee.organizations.environments.analytics.exports.create
Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the `state` value of "enqueued".


```js
google_apigee.apigee.organizations.environments.analytics.exports.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Names of the parent organization and environment. Must be of the form `organizations/{org}/environments/{env}`.
  * body [GoogleCloudApigeeV1ExportRequest](#googlecloudapigeev1exportrequest)
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
* output [GoogleCloudApigeeV1Export](#googlecloudapigeev1export)

### apigee.organizations.sites.apicategories.list
Lists the categories on the portal.


```js
google_apigee.apigee.organizations.sites.apicategories.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}`
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
* output [GoogleCloudApigeeV1ListApiCategoriesResponse](#googlecloudapigeev1listapicategoriesresponse)

### apigee.organizations.sites.apicategories.create
Creates a new category on the portal.


```js
google_apigee.apigee.organizations.sites.apicategories.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}`
  * body [GoogleCloudApigeeV1ApiCategoryData](#googlecloudapigeev1apicategorydata)
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
* output [GoogleCloudApigeeV1ApiCategory](#googlecloudapigeev1apicategory)

### apigee.organizations.apiproducts.list
Lists all API product names for an organization. Filter the list by passing an `attributename` and `attibutevalue`. The limit on the number of API products returned by the API is 1000. You can paginate the list of API products returned using the `startKey` and `count` query parameters.


```js
google_apigee.apigee.organizations.apiproducts.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization. Use the following structure in your request: `organizations/{org}`
  * attributename `string`: Name of the attribute used to filter the search.
  * attributevalue `string`: Value of the attribute used to filter the search.
  * count `string`: Enter the number of API products you want returned in the API call. The limit is 1000.
  * expand `boolean`: Flag that specifies whether to expand the results. Set to `true` to get expanded details about each API.
  * startKey `string`: Gets a list of API products starting with a specific API product in the list. For example, if you're returning 50 API products at a time (using the `count` query parameter), you can view products 50-99 by entering the name of the 50th API product in the first API (without using `startKey`). Product name is case sensitive.
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
* output [GoogleCloudApigeeV1ListApiProductsResponse](#googlecloudapigeev1listapiproductsresponse)

### apigee.organizations.apiproducts.create
Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on-the-fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer grained API products, defining different sets of API resources for each API product. **WARNING:** - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?


```js
google_apigee.apigee.organizations.apiproducts.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization in which the API product will be created. Use the following structure in your request: `organizations/{org}`
  * body [GoogleCloudApigeeV1ApiProduct](#googlecloudapigeev1apiproduct)
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
* output [GoogleCloudApigeeV1ApiProduct](#googlecloudapigeev1apiproduct)

### apigee.organizations.apis.list
Lists the names of all API proxies in an organization. The names returned correspond to the names defined in the configuration files for each API proxy.


```js
google_apigee.apigee.organizations.apis.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization in the following format: `organizations/{org}`
  * includeMetaData `boolean`: Flag that specifies whether to include API proxy metadata in the response.
  * includeRevisions `boolean`: Flag that specifies whether to include a list of revisions in the response.
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
* output [GoogleCloudApigeeV1ListApiProxiesResponse](#googlecloudapigeev1listapiproxiesresponse)

### apigee.organizations.apis.create
Creates an API proxy. The API proxy created will not be accessible at runtime until it is deployed to an environment. Create a new API proxy by setting the `name` query parameter to the name of the API proxy. Import an API proxy configuration bundle stored in zip format on your local machine to your organization by doing the following: * Set the `name` query parameter to the name of the API proxy. * Set the `action` query parameter to `import`. * Set the `Content-Type` header to `multipart/form-data`. * Pass as a file the name of API proxy configuration bundle stored in zip format on your local machine using the `file` form field. **Note**: To validate the API proxy configuration bundle only without importing it, set the `action` query parameter to `validate`. When importing an API proxy configuration bundle, if the API proxy does not exist, it will be created. If the API proxy exists, then a new revision is created. Invalid API proxy configurations are rejected, and a list of validation errors is returned to the client.


```js
google_apigee.apigee.organizations.apis.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization in the following format: `organizations/{org}`
  * action `string`: Action to perform when importing an API proxy configuration bundle. Set this parameter to one of the following values: * `import` to import the API proxy configuration bundle. * `validate` to validate the API proxy configuration bundle without importing it.
  * name `string`: Name of the API proxy. Restrict the characters used to: A-Za-z0-9._-
  * validate `boolean`: Ignored. All uploads are validated regardless of the value of this field. Maintained for compatibility with Apigee Edge API.
  * body [GoogleApiHttpBody](#googleapihttpbody)
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
* output [GoogleCloudApigeeV1ApiProxyRevision](#googlecloudapigeev1apiproxyrevision)

### apigee.organizations.developers.apps.list
Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the `startKey` and `count` query parameters.


```js
google_apigee.apigee.organizations.developers.apps.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
  * count `string`: Number of developer apps to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000.
  * expand `boolean`: Optional. Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters.
  * shallowExpand `boolean`: Optional. Specifies whether to expand the results in shallow mode. Set to `true` to expand the results in shallow mode.
  * startKey `string`: **Note**: Must be used in conjunction with the `count` parameter. Name of the developer app from which to start displaying the list of developer apps. For example, if you're returning 50 developer apps at a time (using the `count` query parameter), you can view developer apps 50-99 by entering the name of the 50th developer app. The developer app name is case sensitive.
  * includeCred `boolean`: Optional. Flag that specifies whether to include credentials in the response.
  * keyStatus `string`: Optional. Key status of the app. Valid values include `approved` or `revoked`. Defaults to `approved`.
  * rows `string`: Optional. Maximum number of app IDs to return. Defaults to 10000.
  * status `string`: Optional. Filter by the status of the app. Valid values are `approved` or `revoked`. Defaults to `approved`.
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
* output [GoogleCloudApigeeV1ListDeveloperAppsResponse](#googlecloudapigeev1listdeveloperappsresponse)

### apigee.organizations.developers.apps.create
Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls. The `DisplayName` (set as an attribute) appears in the UI. If you don't set the `DisplayName` attribute, the `name` appears in the UI.


```js
google_apigee.apigee.organizations.developers.apps.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`
  * body [GoogleCloudApigeeV1DeveloperApp](#googlecloudapigeev1developerapp)
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
* output [GoogleCloudApigeeV1DeveloperApp](#googlecloudapigeev1developerapp)

### apigee.organizations.instances.attachments.list
Lists all attachments to an instance. **Note:** Not supported for Apigee hybrid.


```js
google_apigee.apigee.organizations.instances.attachments.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization. Use the following structure in your request: `organizations/{org}/instances/{instance}`
  * pageSize `integer`: Maximum number of instance attachments to return. Defaults to 25.
  * pageToken `string`: Page token, returned by a previous ListInstanceAttachments call, that you can use to retrieve the next page of content.
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
* output [GoogleCloudApigeeV1ListInstanceAttachmentsResponse](#googlecloudapigeev1listinstanceattachmentsresponse)

### apigee.organizations.instances.attachments.create
Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.


```js
google_apigee.apigee.organizations.instances.attachments.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`.
  * body [GoogleCloudApigeeV1InstanceAttachment](#googlecloudapigeev1instanceattachment)
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

### apigee.organizations.developers.attributes.list
Returns a list of all developer attributes.


```js
google_apigee.apigee.organizations.developers.attributes.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Email address of the developer for which attributes are being listed in the following format: `organizations/{org}/developers/{developer_email}`
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
* output [GoogleCloudApigeeV1Attributes](#googlecloudapigeev1attributes)

### apigee.organizations.developers.attributes
Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.


```js
google_apigee.apigee.organizations.developers.attributes({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Email address of the developer for which attributes are being updated in the following format: `organizations/{org}/developers/{developer_email}`
  * body [GoogleCloudApigeeV1Attributes](#googlecloudapigeev1attributes)
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
* output [GoogleCloudApigeeV1Attributes](#googlecloudapigeev1attributes)

### apigee.organizations.instances.canaryevaluations.create
Creates a new canary evaluation for an organization.


```js
google_apigee.apigee.organizations.instances.canaryevaluations.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization. Use the following structure in your request: `organizations/{org}/instances/{instance}`.
  * body [GoogleCloudApigeeV1CanaryEvaluation](#googlecloudapigeev1canaryevaluation)
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

### apigee.organizations.datacollectors.list
Lists all data collectors.


```js
google_apigee.apigee.organizations.datacollectors.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization for which to list data collectors in the following format: `organizations/{org}`.
  * pageSize `integer`: Maximum number of data collectors to return. The page size defaults to 25.
  * pageToken `string`: Page token, returned from a previous ListDataCollectors call, that you can use to retrieve the next page.
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
* output [GoogleCloudApigeeV1ListDataCollectorsResponse](#googlecloudapigeev1listdatacollectorsresponse)

### apigee.organizations.datacollectors.create
Creates a new data collector.


```js
google_apigee.apigee.organizations.datacollectors.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization in which to create the data collector in the following format: `organizations/{org}`.
  * dataCollectorId `string`: ID of the data collector. Overrides any ID in the data collector resource. Must begin with `dc_`.
  * body [GoogleCloudApigeeV1DataCollector](#googlecloudapigeev1datacollector)
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
* output [GoogleCloudApigeeV1DataCollector](#googlecloudapigeev1datacollector)

### apigee.organizations.environments.apis.revisions.debugsessions.list
Lists debug sessions that are currently active in the given API Proxy revision.


```js
google_apigee.apigee.organizations.environments.apis.revisions.debugsessions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the API Proxy revision deployment for which to list debug sessions. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}`.
  * pageSize `integer`: Maximum number of debug sessions to return. The page size defaults to 25.
  * pageToken `string`: Page token, returned from a previous ListDebugSessions call, that you can use to retrieve the next page.
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
* output [GoogleCloudApigeeV1ListDebugSessionsResponse](#googlecloudapigeev1listdebugsessionsresponse)

### apigee.organizations.environments.apis.revisions.debugsessions.create
Creates a debug session for a deployed API Proxy revision.


```js
google_apigee.apigee.organizations.environments.apis.revisions.debugsessions.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the API Proxy revision deployment for which to create the DebugSession. Must be of the form `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}`.
  * timeout `string`: Optional. The time in seconds after which this DebugSession should end. A timeout specified in DebugSession will overwrite this value.
  * body [GoogleCloudApigeeV1DebugSession](#googlecloudapigeev1debugsession)
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
* output [GoogleCloudApigeeV1DebugSession](#googlecloudapigeev1debugsession)

### apigee.organizations.sharedflows.revisions.deployments.list
Lists all deployments of a shared flow revision.


```js
google_apigee.apigee.organizations.sharedflows.revisions.deployments.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the API proxy revision for which to return deployment information in the following format: `organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}`.
  * sharedFlows `boolean`: Optional. Flag that specifies whether to return shared flow or API proxy deployments. Set to `true` to return shared flow deployments; set to `false` to return API proxy deployments. Defaults to `false`.
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
* output [GoogleCloudApigeeV1ListDeploymentsResponse](#googlecloudapigeev1listdeploymentsresponse)

### apigee.organizations.developers.list
Lists all developers in an organization by email address. By default, the response does not include company developers. Set the `includeCompany` query parameter to `true` to include company developers. **Note**: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the `startKey` and `count` query parameters.


```js
google_apigee.apigee.organizations.developers.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`.
  * app `string`: Optional. List only Developers that are associated with the app. Note that start_key, count are not applicable for this filter criteria.
  * count `string`: Optional. Number of developers to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000.
  * expand `boolean`: Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters.
  * ids `string`: Optional. List of IDs to include, separated by commas.
  * includeCompany `boolean`: Flag that specifies whether to include company details in the response.
  * startKey `string`: **Note**: Must be used in conjunction with the `count` parameter. Email address of the developer from which to start displaying the list of developers. For example, if the an unfiltered list returns: ``` westley@example.com fezzik@example.com buttercup@example.com ``` and your `startKey` is `fezzik@example.com`, the list returned will be ``` fezzik@example.com buttercup@example.com ```
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
* output [GoogleCloudApigeeV1ListOfDevelopersResponse](#googlecloudapigeev1listofdevelopersresponse)

### apigee.organizations.developers.create
Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as `active`. To change the developer status, use the SetDeveloperStatus API.


```js
google_apigee.apigee.organizations.developers.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the Apigee organization in which the developer is created. Use the following structure in your request: `organizations/{org}`.
  * body [GoogleCloudApigeeV1Developer](#googlecloudapigeev1developer)
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
* output [GoogleCloudApigeeV1Developer](#googlecloudapigeev1developer)

### apigee.organizations.envgroups.list
Lists all environment groups.


```js
google_apigee.apigee.organizations.envgroups.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization for which to list environment groups in the following format: `organizations/{org}`.
  * pageSize `integer`: Maximum number of environment groups to return. The page size defaults to 25.
  * pageToken `string`: Page token, returned from a previous ListEnvironmentGroups call, that you can use to retrieve the next page.
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
* output [GoogleCloudApigeeV1ListEnvironmentGroupsResponse](#googlecloudapigeev1listenvironmentgroupsresponse)

### apigee.organizations.envgroups.create
Creates a new environment group.


```js
google_apigee.apigee.organizations.envgroups.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization in which to create the environment group in the following format: `organizations/{org}`.
  * name `string`: ID of the environment group. Overrides any ID in the environment_group resource.
  * body [GoogleCloudApigeeV1EnvironmentGroup](#googlecloudapigeev1environmentgroup)
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

### apigee.organizations.environments.create
Creates an environment in an organization.


```js
google_apigee.apigee.organizations.environments.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization in which the environment will be created. Use the following structure in your request: `organizations/{org}`
  * name `string`: Optional. Name of the environment. Alternatively, the name may be specified in the request body in the name field.
  * body [GoogleCloudApigeeV1Environment](#googlecloudapigeev1environment)
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

### apigee.organizations.hostQueries.list
Return a list of Asynchronous Queries at host level.


```js
google_apigee.apigee.organizations.hostQueries.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name. Must be of the form `organizations/{org}`.
  * dataset `string`: Filter response list by dataset. Example: `api`, `mint`
  * envgroupHostname `string`: Required. Filter response list by hostname.
  * from `string`: Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.
  * inclQueriesWithoutReport `string`: Flag to include asynchronous queries that don't have a report denifition.
  * status `string`: Filter response list by asynchronous query status.
  * submittedBy `string`: Filter response list by user who submitted queries.
  * to `string`: Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.
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
* output [GoogleCloudApigeeV1ListAsyncQueriesResponse](#googlecloudapigeev1listasyncqueriesresponse)

### apigee.organizations.hostQueries.create
Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.


```js
google_apigee.apigee.organizations.hostQueries.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name. Must be of the form `organizations/{org}`.
  * body [GoogleCloudApigeeV1Query](#googlecloudapigeev1query)
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
* output [GoogleCloudApigeeV1AsyncQuery](#googlecloudapigeev1asyncquery)

### apigee.organizations.instances.list
Lists all Apigee runtime instances for the organization. **Note:** Not supported for Apigee hybrid.


```js
google_apigee.apigee.organizations.instances.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization. Use the following structure in your request: `organizations/{org}`.
  * pageSize `integer`: Maximum number of instances to return. Defaults to 25.
  * pageToken `string`: Page token, returned from a previous ListInstances call, that you can use to retrieve the next page of content.
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
* output [GoogleCloudApigeeV1ListInstancesResponse](#googlecloudapigeev1listinstancesresponse)

### apigee.organizations.instances.create
Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. **Note:** Not supported for Apigee hybrid.


```js
google_apigee.apigee.organizations.instances.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the organization. Use the following structure in your request: `organizations/{org}`.
  * body [GoogleCloudApigeeV1Instance](#googlecloudapigeev1instance)
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

### apigee.organizations.developers.apps.keys.create
Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee hybrid from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API.


```js
google_apigee.apigee.organizations.developers.apps.keys.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps`
  * body [GoogleCloudApigeeV1DeveloperAppKey](#googlecloudapigeev1developerappkey)
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
* output [GoogleCloudApigeeV1DeveloperAppKey](#googlecloudapigeev1developerappkey)

### apigee.organizations.developers.apps.keys.create.create
Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee hybrid from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API.


```js
google_apigee.apigee.organizations.developers.apps.keys.create.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps`
  * body [GoogleCloudApigeeV1DeveloperAppKey](#googlecloudapigeev1developerappkey)
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
* output [GoogleCloudApigeeV1DeveloperAppKey](#googlecloudapigeev1developerappkey)

### apigee.organizations.environments.keystores.create
Creates a keystore or truststore: * Keystore: Contains certificates and their associated keys. * Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.


```js
google_apigee.apigee.organizations.environments.keystores.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the environment in which to create the keystore. Must be of the form `organizations/{organization}/environments/{environment}`.
  * name `string`: Optional. Overrides the value in Keystore.
  * body [GoogleCloudApigeeV1Keystore](#googlecloudapigeev1keystore)
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
* output [GoogleCloudApigeeV1Keystore](#googlecloudapigeev1keystore)

### apigee.organizations.keyvaluemaps.create
Creates a key value map in an organization.


```js
google_apigee.apigee.organizations.keyvaluemaps.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the organization in which to create the key value map file. Must be of the form `organizations/{organization}`.
  * body [GoogleCloudApigeeV1KeyValueMap](#googlecloudapigeev1keyvaluemap)
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
* output [GoogleCloudApigeeV1KeyValueMap](#googlecloudapigeev1keyvaluemap)

### apigee.organizations.instances.natAddresses.list
Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.


```js
google_apigee.apigee.organizations.instances.natAddresses.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`
  * pageSize `integer`: Maximum number of natAddresses to return. Defaults to 25.
  * pageToken `string`: Page token, returned from a previous ListNatAddresses call, that you can use to retrieve the next page of content.
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
* output [GoogleCloudApigeeV1ListNatAddressesResponse](#googlecloudapigeev1listnataddressesresponse)

### apigee.organizations.instances.natAddresses.create
Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. **Note:** Not supported for Apigee hybrid.


```js
google_apigee.apigee.organizations.instances.natAddresses.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`
  * body [GoogleCloudApigeeV1NatAddress](#googlecloudapigeev1nataddress)
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

### apigee.organizations.environments.queries.list
Return a list of Asynchronous Queries


```js
google_apigee.apigee.organizations.environments.queries.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.
  * dataset `string`: Filter response list by dataset. Example: `api`, `mint`
  * from `string`: Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.
  * inclQueriesWithoutReport `string`: Flag to include asynchronous queries that don't have a report denifition.
  * status `string`: Filter response list by asynchronous query status.
  * submittedBy `string`: Filter response list by user who submitted queries.
  * to `string`: Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.
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
* output [GoogleCloudApigeeV1ListAsyncQueriesResponse](#googlecloudapigeev1listasyncqueriesresponse)

### apigee.organizations.environments.queries.create
Submit a query to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.


```js
google_apigee.apigee.organizations.environments.queries.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.
  * body [GoogleCloudApigeeV1Query](#googlecloudapigeev1query)
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
* output [GoogleCloudApigeeV1AsyncQuery](#googlecloudapigeev1asyncquery)

### apigee.organizations.environments.references.create
Creates a Reference in the specified environment.


```js
google_apigee.apigee.organizations.environments.references.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent environment name under which the Reference will be created. Must be of the form `organizations/{org}/environments/{env}`.
  * body [GoogleCloudApigeeV1Reference](#googlecloudapigeev1reference)
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
* output [GoogleCloudApigeeV1Reference](#googlecloudapigeev1reference)

### apigee.organizations.reports.list
Return a list of Custom Reports


```js
google_apigee.apigee.organizations.reports.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent organization name under which the API product will be listed `organizations/{organization_id}/reports`
  * expand `boolean`: Set to 'true' to get expanded details about each custom report.
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
* output [GoogleCloudApigeeV1ListCustomReportsResponse](#googlecloudapigeev1listcustomreportsresponse)

### apigee.organizations.reports.create
Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.


```js
google_apigee.apigee.organizations.reports.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent organization name under which the Custom Report will be created. Must be of the form: `organizations/{organization_id}/reports`
  * body [GoogleCloudApigeeV1CustomReport](#googlecloudapigeev1customreport)
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
* output [GoogleCloudApigeeV1CustomReport](#googlecloudapigeev1customreport)

### apigee.organizations.environments.resourcefiles.list
Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).


```js
google_apigee.apigee.organizations.environments.resourcefiles.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the environment in which to list resource files in the following format: `organizations/{org}/environments/{env}`.
  * type `string`: Optional. Type of resource files to list. {{ resource_file_type }}
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
* output [GoogleCloudApigeeV1ListEnvironmentResourcesResponse](#googlecloudapigeev1listenvironmentresourcesresponse)

### apigee.organizations.environments.resourcefiles.create
Creates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).


```js
google_apigee.apigee.organizations.environments.resourcefiles.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the environment in which to create the resource file in the following format: `organizations/{org}/environments/{env}`.
  * name `string`: Required. Name of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}
  * type `string`: Required. Resource file type. {{ resource_file_type }}
  * body [GoogleApiHttpBody](#googleapihttpbody)
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
* output [GoogleCloudApigeeV1ResourceFile](#googlecloudapigeev1resourcefile)

### apigee.organizations.environments.resourcefiles.listEnvironmentResources
Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).


```js
google_apigee.apigee.organizations.environments.resourcefiles.listEnvironmentResources({
  "parent": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the environment in which to list resource files in the following format: `organizations/{org}/environments/{env}`.
  * type **required** `string`: Optional. Type of resource files to list. {{ resource_file_type }}
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
* output [GoogleCloudApigeeV1ListEnvironmentResourcesResponse](#googlecloudapigeev1listenvironmentresourcesresponse)

### apigee.organizations.environments.resourcefiles.delete
Deletes a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).


```js
google_apigee.apigee.organizations.environments.resourcefiles.delete({
  "parent": "",
  "type": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.
  * type **required** `string`: Required. Resource file type. {{ resource_file_type }}
  * name **required** `string`: Required. ID of the resource file to delete. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}
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
* output [GoogleCloudApigeeV1ResourceFile](#googlecloudapigeev1resourcefile)

### apigee.organizations.environments.resourcefiles.get
Gets the contents of a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).


```js
google_apigee.apigee.organizations.environments.resourcefiles.get({
  "parent": "",
  "type": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.
  * type **required** `string`: Required. Resource file type. {{ resource_file_type }}
  * name **required** `string`: Required. ID of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}
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
* output [GoogleApiHttpBody](#googleapihttpbody)

### apigee.organizations.environments.resourcefiles.update
Updates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).


```js
google_apigee.apigee.organizations.environments.resourcefiles.update({
  "parent": "",
  "type": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.
  * type **required** `string`: Required. Resource file type. {{ resource_file_type }}
  * name **required** `string`: Required. ID of the resource file to update. Must match the regular expression: [a-zA-Z0-9:/\\!@#$%^&{}\[\]()+\-=,.~'` ]{1,255}
  * body [GoogleApiHttpBody](#googleapihttpbody)
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
* output [GoogleCloudApigeeV1ResourceFile](#googlecloudapigeev1resourcefile)

### apigee.organizations.sharedflows.list
Lists all shared flows in the organization.


```js
google_apigee.apigee.organizations.sharedflows.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent organization under which to get shared flows. Must be of the form: `organizations/{organization_id}`
  * includeMetaData `boolean`: Indicates whether to include shared flow metadata in the response.
  * includeRevisions `boolean`: Indicates whether to include a list of revisions in the response.
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
* output [GoogleCloudApigeeV1ListSharedFlowsResponse](#googlecloudapigeev1listsharedflowsresponse)

### apigee.organizations.sharedflows.create
Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.


```js
google_apigee.apigee.organizations.sharedflows.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the parent organization under which to create the shared flow. Must be of the form: `organizations/{organization_id}`
  * action `string`: Required. Must be set to either `import` or `validate`.
  * name `string`: Required. The name to give the shared flow
  * body [GoogleApiHttpBody](#googleapihttpbody)
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
* output [GoogleCloudApigeeV1SharedFlowRevision](#googlecloudapigeev1sharedflowrevision)

### apigee.organizations.environments.targetservers.create
Creates a TargetServer in the specified environment.


```js
google_apigee.apigee.organizations.environments.targetservers.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent environment name under which the TargetServer will be created. Must be of the form `organizations/{org}/environments/{env}`.
  * name `string`: Optional. The ID to give the TargetServer. This will overwrite the value in TargetServer.
  * body [GoogleCloudApigeeV1TargetServer](#googlecloudapigeev1targetserver)
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
* output [GoogleCloudApigeeV1TargetServer](#googlecloudapigeev1targetserver)

### apigee.organizations.environments.subscribe
Creates a subscription for the environment's Pub/Sub topic. The server will assign a random name for this subscription. The "name" and "push_config" must *not* be specified.


```js
google_apigee.apigee.organizations.environments.subscribe({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`
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
* output [GoogleCloudApigeeV1Subscription](#googlecloudapigeev1subscription)

### apigee.organizations.environments.unsubscribe
Deletes a subscription for the environment's Pub/Sub topic.


```js
google_apigee.apigee.organizations.environments.unsubscribe({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`
  * body [GoogleCloudApigeeV1Subscription](#googlecloudapigeev1subscription)
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

### apigee.projects.provisionOrganization
Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial organizations for a free Apigee trial.


```js
google_apigee.apigee.projects.provisionOrganization({
  "project": ""
}, context)
```

#### Input
* input `object`
  * project **required** `string`: Required. Name of the GCP project with which to associate the Apigee organization.
  * body [GoogleCloudApigeeV1ProvisionOrganizationRequest](#googlecloudapigeev1provisionorganizationrequest)
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

### apigee.organizations.environments.getIamPolicy
Gets the IAM policy on an environment. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.getIamPolicy` permission to call this API.


```js
google_apigee.apigee.organizations.environments.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
  * options.requestedPolicyVersion `integer`: Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
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
* output [GoogleIamV1Policy](#googleiamv1policy)

### apigee.organizations.environments.setIamPolicy
Sets the IAM policy on an environment, if the policy already exists it will be replaced. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.setIamPolicy` permission to call this API.


```js
google_apigee.apigee.organizations.environments.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
  * body [GoogleIamV1SetIamPolicyRequest](#googleiamv1setiampolicyrequest)
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
* output [GoogleIamV1Policy](#googleiamv1policy)

### apigee.organizations.environments.testIamPermissions
Tests the permissions of a user on an environment, and returns a subset of permissions that the user has on the environment. If the environment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).


```js
google_apigee.apigee.organizations.environments.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
  * body [GoogleIamV1TestIamPermissionsRequest](#googleiamv1testiampermissionsrequest)
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
* output [GoogleIamV1TestIamPermissionsResponse](#googleiamv1testiampermissionsresponse)



## Definitions

### GoogleApiHttpBody
* GoogleApiHttpBody `object`: Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
  * contentType `string`: The HTTP Content-Type header value specifying the content type of the body.
  * data `string`: The HTTP request/response body as raw binary.
  * extensions `array`: Application specific response metadata. Must be set in the first response for streaming APIs.
    * items `object`

### GoogleCloudApigeeV1Access
* GoogleCloudApigeeV1Access `object`
  * Get [GoogleCloudApigeeV1AccessGet](#googlecloudapigeev1accessget)
  * Remove [GoogleCloudApigeeV1AccessRemove](#googlecloudapigeev1accessremove)
  * Set [GoogleCloudApigeeV1AccessSet](#googlecloudapigeev1accessset)

### GoogleCloudApigeeV1AccessGet
* GoogleCloudApigeeV1AccessGet `object`: Get action. For example, "Get" : { "name" : "target.name", "value" : "default" }
  * name `string`
  * value `string`

### GoogleCloudApigeeV1AccessRemove
* GoogleCloudApigeeV1AccessRemove `object`: Remove action. For example, "Remove" : { "name" : "target.name", "success" : true }
  * name `string`
  * success `boolean`

### GoogleCloudApigeeV1AccessSet
* GoogleCloudApigeeV1AccessSet `object`: Set action. For example, "Set" : { "name" : "target.name", "success" : true, "value" : "default" }
  * name `string`
  * success `boolean`
  * value `string`

### GoogleCloudApigeeV1ActivateNatAddressRequest
* GoogleCloudApigeeV1ActivateNatAddressRequest `object`: Request for ActivateNatAddressRequest. Activate the nat address request.

### GoogleCloudApigeeV1Alias
* GoogleCloudApigeeV1Alias `object`: A reference to a certificate or key, certificate pair.
  * alias `string`: The resource ID for this alias. Values must match regular expression `[^/]{1,255}`.
  * certsInfo [GoogleCloudApigeeV1Certificate](#googlecloudapigeev1certificate)
  * type `string` (values: ALIAS_TYPE_UNSPECIFIED, CERT, KEY_CERT): The type of alias.

### GoogleCloudApigeeV1AliasRevisionConfig
* GoogleCloudApigeeV1AliasRevisionConfig `object`
  * location `string`: Location of the alias file. For example, a Google Cloud Storage URI.
  * name `string`: Name of the alias revision included in the keystore in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}/revisions/{rev}`
  * type `string` (values: ALIAS_TYPE_UNSPECIFIED, CERT, KEY_CERT)

### GoogleCloudApigeeV1ApiCategory
* GoogleCloudApigeeV1ApiCategory `object`: the Api category resource wrapped with response status, error_code etc.
  * data [GoogleCloudApigeeV1ApiCategoryData](#googlecloudapigeev1apicategorydata)
  * errorCode `string`: ID that can be used to find errors in the log files.
  * message `string`: Description of the operation.
  * requestId `string`: ID that can be used to find request details in the log files.
  * status `string`: Status of the operation.

### GoogleCloudApigeeV1ApiCategoryData
* GoogleCloudApigeeV1ApiCategoryData `object`: the Api category resource.
  * id `string`: ID of the category (a UUID).
  * name `string`: Name of the category.
  * siteId `string`: Name of the portal.
  * updateTime `string`: Time the category was last modified in milliseconds since epoch.

### GoogleCloudApigeeV1ApiProduct
* GoogleCloudApigeeV1ApiProduct `object`
  * apiResources `array`
    * items `string`
  * approvalType `string`: Flag that specifies how API keys are approved to access the APIs defined by the API product. If set to `manual`, the consumer key is generated and returned in "pending" state. In this case, the API keys won't work until they have been explicitly approved. If set to `auto`, the consumer key is generated and returned in "approved" state and can be used immediately. **Note:** Typically, `auto` is used to provide access to free or trial API products that provide limited quota or capabilities.
  * attributes `array`: Array of attributes that may be used to extend the default API product profile with customer-specific metadata. You can specify a maximum of 18 attributes. Use this property to specify the access level of the API product as either `public`, `private`, or `internal`. Only products marked `public` are available to developers in the Apigee developer portal. For example, you can set a product to `internal` while it is in development and then change access to `public` when it is ready to release on the portal. API products marked as `private` do not appear on the portal, but can be accessed by external developers.
    * items [GoogleCloudApigeeV1Attribute](#googlecloudapigeev1attribute)
  * createdAt `string`: Response only. Creation time of this environment as milliseconds since epoch.
  * description `string`: Description of the API product. Include key information about the API product that is not captured by other fields. Comma-separated list of API resources to be bundled in the API product. By default, the resource paths are mapped from the `proxy.pathsuffix` variable. The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the `apiResources` element is defined to be `/forecastrss` and the base path defined for the API proxy is `/weather`, then only requests to `/weather/forecastrss` are permitted by the API product. You can select a specific path, or you can select all subpaths with the following wildcard: - `/**`: Indicates that all sub-URIs are included. - `/*` : Indicates that only URIs one level down are included. By default, / supports the same resources as /** as well as the base path defined by the API proxy. For example, if the base path of the API proxy is `/v1/weatherapikey`, then the API product supports requests to `/v1/weatherapikey` and to any sub-URIs, such as `/v1/weatherapikey/forecastrss`, `/v1/weatherapikey/region/CA`, and so on. For more information, see Managing API products.
  * displayName `string`: Name displayed in the UI or developer portal to developers registering for API access.
  * environments `array`: Comma-separated list of environment names to which the API product is bound. Requests to environments that are not listed are rejected. By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment. This setting is used, for example, to prevent resources associated with API proxies in `prod` from being accessed by API proxies deployed in `test`.
    * items `string`
  * lastModifiedAt `string`: Response only. Modified time of this environment as milliseconds since epoch.
  * name `string`: Internal name of the API product. Characters you can use in the name are restricted to: `A-Z0-9._\-$ %`. **Note:** The internal name cannot be edited when updating the API product.
  * operationGroup [GoogleCloudApigeeV1OperationGroup](#googlecloudapigeev1operationgroup)
  * proxies `array`: Comma-separated list of API proxy names to which this API product is bound. By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies. Apigee rejects requests to API proxies that are not listed. **Note:** The API proxy names must already exist in the specified environment as they will be validated upon creation.
    * items `string`
  * quota `string`: Number of request messages permitted per app by this API product for the specified `quotaInterval` and `quotaTimeUnit`. For example, a `quota` of 50, for a `quotaInterval` of 12 and a `quotaTimeUnit` of hours means 50 requests are allowed every 12 hours.
  * quotaInterval `string`: Time interval over which the number of request messages is calculated.
  * quotaTimeUnit `string`: Time unit defined for the `quotaInterval`. Valid values include `minute`, `hour`, `day`, or `month`.
  * scopes `array`: Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.
    * items `string`

### GoogleCloudApigeeV1ApiProductRef
* GoogleCloudApigeeV1ApiProductRef `object`
  * apiproduct `string`: Name of the API product.
  * status `string`: Status of the API product.

### GoogleCloudApigeeV1ApiProxy
* GoogleCloudApigeeV1ApiProxy `object`: Metadata describing the API proxy
  * latestRevisionId `string`: The id of the most recently created revision for this api proxy.
  * metaData [GoogleCloudApigeeV1EntityMetadata](#googlecloudapigeev1entitymetadata)
  * name `string`: Name of the API proxy.
  * revision `array`: List of revisons defined for the API proxy.
    * items `string`

### GoogleCloudApigeeV1ApiProxyRevision
* GoogleCloudApigeeV1ApiProxyRevision `object`: API proxy revision.
  * basepaths `array`: Base URL of the API proxy.
    * items `string`
  * configurationVersion [GoogleCloudApigeeV1ConfigVersion](#googlecloudapigeev1configversion)
  * contextInfo `string`: Revision number, app name, and organization for the API proxy.
  * createdAt `string`: Time that the API proxy revision was created in milliseconds since epoch.
  * description `string`: Description of the API proxy revision.
  * displayName `string`: Human-readable name of the API proxy.
  * entityMetaDataAsProperties `object`: Metadata describing the API proxy revision as a key-value map.
  * lastModifiedAt `string`: Time that the API proxy revision was last modified in milliseconds since epoch.
  * name `string`: Name of the API proxy.
  * policies `array`: List of policy names included in the API proxy revision..
    * items `string`
  * proxies `array`: List of proxy names included in the API proxy revision.
    * items `string`
  * proxyEndpoints `array`: List of ProxyEndpoints in the `/proxies` directory of the API proxy. Typically, this element is included only when the API proxy was created using the Edge UI. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy.
    * items `string`
  * resourceFiles [GoogleCloudApigeeV1ResourceFiles](#googlecloudapigeev1resourcefiles)
  * resources `array`: List of the resources included in the API proxy revision formatted as "{type}://{name}".
    * items `string`
  * revision `string`: API proxy revision.
  * sharedFlows `array`: List of the shared flows included in the API proxy revision.
    * items `string`
  * spec `string`: OpenAPI Specification that is associated with the API proxy. The value is set to a URL or to a path in the specification store.
  * targetEndpoints `array`: List of TargetEndpoints in the `/targets` directory of the API proxy. Typically, this element is included only when the API proxy was created using the Edge UI. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy.
    * items `string`
  * targetServers `array`: List of TargetServers referenced in any TargetEndpoint in the API proxy. Typically, you will see this element only when the API proxy was created using the Edge UI. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy.
    * items `string`
  * targets `array`: List of the targets included in the API proxy revision.
    * items `string`
  * teams `array`: List of the teams included in the API proxy revision.
    * items `string`
  * type `string`: Type. Set to `Application`. Maintained for compatibility with the Apigee Edge API.

### GoogleCloudApigeeV1ApiResponseWrapper
* GoogleCloudApigeeV1ApiResponseWrapper `object`
  * errorCode `string`: ID that can be used to find errors in the log files.
  * message `string`: Description of the operation.
  * requestId `string`: ID that can be used to find request details in the log files.
  * status `string`: Status of the operation.

### GoogleCloudApigeeV1App
* GoogleCloudApigeeV1App `object`
  * apiProducts `array`: List of API products associated with the app.
    * items [GoogleCloudApigeeV1ApiProductRef](#googlecloudapigeev1apiproductref)
  * appId `string`: ID of the app.
  * attributes `array`: List of attributes.
    * items [GoogleCloudApigeeV1Attribute](#googlecloudapigeev1attribute)
  * callbackUrl `string`: Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to apps.
  * companyName `string`: Name of the company that owns the app.
  * createdAt `string`: Output only. Unix time when the app was created.
  * credentials `array`: Output only. Set of credentials for the app. Credentials are API key/secret pairs associated with API products.
    * items [GoogleCloudApigeeV1Credential](#googlecloudapigeev1credential)
  * developerId `string`: ID of the developer.
  * keyExpiresIn `string`: Duration, in milliseconds, of the consumer key that will be generated for the app. The default value, -1, indicates an infinite validity period. Once set, the expiration can't be updated. json key: keyExpiresIn
  * lastModifiedAt `string`: Output only. Last modified time as milliseconds since epoch.
  * name `string`: Name of the app.
  * scopes `array`: Scopes to apply to the app. The specified scope names must already exist on the API product that you associate with the app.
    * items `string`
  * status `string`: Status of the credential.

### GoogleCloudApigeeV1AsyncQuery
* GoogleCloudApigeeV1AsyncQuery `object`
  * created `string`: Creation time of the query.
  * envgroupHostname `string`: Hostname is available only when query is executed at host level.
  * error `string`: Error is set when query fails.
  * executionTime `string`: ExecutionTime is available only after the query is completed.
  * name `string`: Asynchronous Query Name.
  * queryParams [GoogleCloudApigeeV1QueryMetadata](#googlecloudapigeev1querymetadata)
  * reportDefinitionId `string`: Asynchronous Report ID.
  * result [GoogleCloudApigeeV1AsyncQueryResult](#googlecloudapigeev1asyncqueryresult)
  * resultFileSize `string`: ResultFileSize is available only after the query is completed.
  * resultRows `string`: ResultRows is available only after the query is completed.
  * self `string`: Self link of the query. Example: `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` or following format if query is running at host level: `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`
  * state `string`: Query state could be "enqueued", "running", "completed", "failed".
  * updated `string`: Last updated timestamp for the query.

### GoogleCloudApigeeV1AsyncQueryResult
* GoogleCloudApigeeV1AsyncQueryResult `object`
  * expires `string`: Query result will be unaccessable after this time.
  * self `string`: Self link of the query results. Example: `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` or following format if query is running at host level: `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result`

### GoogleCloudApigeeV1AsyncQueryResultView
* GoogleCloudApigeeV1AsyncQueryResultView `object`
  * code `integer`: Error code when there is a failure.
  * error `string`: Error message when there is a failure.
  * metadata [GoogleCloudApigeeV1QueryMetadata](#googlecloudapigeev1querymetadata)
  * rows `array`: Rows of query result. Each row is a JSON object. Example: {sum(message_count): 1, developer_app: "(not set)",…}
  * state `string`: State of retrieving ResultView.

### GoogleCloudApigeeV1Attribute
* GoogleCloudApigeeV1Attribute `object`: Key-value pair to store extra metadata.
  * name `string`: API key of the attribute.
  * value `string`: Value of the attribute.

### GoogleCloudApigeeV1Attributes
* GoogleCloudApigeeV1Attributes `object`
  * attribute `array`: List of attributes.
    * items [GoogleCloudApigeeV1Attribute](#googlecloudapigeev1attribute)

### GoogleCloudApigeeV1CanaryEvaluation
* GoogleCloudApigeeV1CanaryEvaluation `object`: CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests.
  * control `string`: Required. The stable version that is serving requests.
  * createTime `string`: Output only. Create time of the canary evaluation.
  * endTime `string`: Required. End time for the evaluation's analysis.
  * metricLabels [GoogleCloudApigeeV1CanaryEvaluationMetricLabels](#googlecloudapigeev1canaryevaluationmetriclabels)
  * name `string`: Output only. Name of the canary evalution.
  * startTime `string`: Required. Start time for the canary evaluation's analysis.
  * state `string` (values: STATE_UNSPECIFIED, RUNNING, SUCCEEDED): Output only. The current state of the canary evaluation.
  * treatment `string`: Required. The newer version that is serving requests.
  * verdict `string` (values: VERDICT_UNSPECIFIED, NONE, FAIL, PASS): Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL.

### GoogleCloudApigeeV1CanaryEvaluationMetricLabels
* GoogleCloudApigeeV1CanaryEvaluationMetricLabels `object`: Labels that can be used to filter Apigee metrics.
  * env `string`: The environment ID associated with the metrics.
  * instance_id `string`: Required. The instance ID associated with the metrics. In Apigee Hybrid, the value is configured during installation.
  * location `string`: Required. The location associated with the metrics.

### GoogleCloudApigeeV1CertInfo
* GoogleCloudApigeeV1CertInfo `object`: An X.509 certificate as defined in RFC 5280.
  * basicConstraints `string`: The X.509 basic constraints extension.
  * expiryDate `string`: The X.509 validity / notAfter in milliseconds since the epoch.
  * isValid `string`: "Yes" if certificate is valid, "No" if expired and "Not yet" if not yet valid.
  * issuer `string`: The X.509 issuer.
  * publicKey `string`: The public key component of the X.509 subject public key info.
  * serialNumber `string`: The X.509 serial number.
  * sigAlgName `string`: The X.509 signatureAlgorithm.
  * subject `string`: The X.509 subject.
  * subjectAlternativeNames `array`: The X.509 subject alternative names (SANs) extension.
    * items `string`
  * validFrom `string`: The X.509 validity / notBefore in milliseconds since the epoch.
  * version `integer`: The X.509 version.

### GoogleCloudApigeeV1Certificate
* GoogleCloudApigeeV1Certificate `object`
  * certInfo `array`: The chain of certificates under this name.
    * items [GoogleCloudApigeeV1CertInfo](#googlecloudapigeev1certinfo)

### GoogleCloudApigeeV1CommonNameConfig
* GoogleCloudApigeeV1CommonNameConfig `object`
  * matchWildCards `boolean`
  * name `string`

### GoogleCloudApigeeV1ConfigVersion
* GoogleCloudApigeeV1ConfigVersion `object`: Version of the API proxy configuration schema. Currently, only 4.0 is supported.
  * majorVersion `integer`: Major version of the API proxy configuration schema.
  * minorVersion `integer`: Minor version of the API proxy configuration schema.

### GoogleCloudApigeeV1Credential
* GoogleCloudApigeeV1Credential `object`
  * apiProducts `array`: List of API products this credential can be used for.
    * items [GoogleCloudApigeeV1ApiProductRef](#googlecloudapigeev1apiproductref)
  * attributes `array`: List of attributes associated with this credential.
    * items [GoogleCloudApigeeV1Attribute](#googlecloudapigeev1attribute)
  * consumerKey `string`: Consumer key.
  * consumerSecret `string`: Secret key.
  * expiresAt `string`: Time the credential will expire in milliseconds since epoch.
  * issuedAt `string`: Time the credential was issued in milliseconds since epoch.
  * scopes `array`: List of scopes to apply to the app. Specified scopes must already exist on the API product that you associate with the app.
    * items `string`
  * status `string`: Status of the credential.

### GoogleCloudApigeeV1CustomReport
* GoogleCloudApigeeV1CustomReport `object`
  * tags `array`: Legacy field: not used. This field contains a list of tags associated with custom report
    * items `string`
  * chartType `string`: This field contains the chart type for the report
  * comments `array`: Legacy field: not used. This field contains a list of comments associated with custom report
    * items `string`
  * createdAt `string`: Output only. Unix time when the app was created json key: createdAt
  * dimensions `array`: This contains the list of dimensions for the report
    * items `string`
  * displayName `string`: This is the display name for the report
  * environment `string`: Output only. Environment name
  * filter `string`: This field contains the filter expression
  * fromTime `string`: Legacy field: not used. Contains the from time for the report
  * lastModifiedAt `string`: Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt
  * lastViewedAt `string`: Output only. Last viewed time of this entity as milliseconds since epoch
  * limit `string`: Legacy field: not used This field contains the limit for the result retrieved
  * metrics `array`: Required. This contains the list of metrics
    * items [GoogleCloudApigeeV1CustomReportMetric](#googlecloudapigeev1customreportmetric)
  * name `string`: Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id
  * offset `string`: Legacy field: not used. This field contains the offset for the data
  * organization `string`: Output only. Organization name
  * properties `array`: This field contains report properties such as ui metadata etc.
    * items [GoogleCloudApigeeV1ReportProperty](#googlecloudapigeev1reportproperty)
  * sortByCols `array`: Legacy field: not used much. Contains the list of sort by columns
    * items `string`
  * sortOrder `string`: Legacy field: not used much. Contains the sort order for the sort columns
  * timeUnit `string`: This field contains the time unit of aggregation for the report
  * toTime `string`: Legacy field: not used. Contains the end time for the report
  * topk `string`: Legacy field: not used. This field contains the top k parameter value for restricting the result

### GoogleCloudApigeeV1CustomReportMetric
* GoogleCloudApigeeV1CustomReportMetric `object`: This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum
  * function `string`: aggregate function
  * name `string`: name of the metric

### GoogleCloudApigeeV1DataCollector
* GoogleCloudApigeeV1DataCollector `object`: Data collector configuration.
  * createdAt `string`: Output only. The time at which the data collector was created in milliseconds since the epoch.
  * description `string`: A description of the data collector.
  * lastModifiedAt `string`: Output only. The time at which the Data Collector was last updated in milliseconds since the epoch.
  * name `string`: ID of the data collector. Must begin with `dc_`.
  * type `string` (values: TYPE_UNSPECIFIED, INTEGER, FLOAT, STRING, BOOLEAN, DATETIME): Immutable. The type of data this data collector will collect.

### GoogleCloudApigeeV1DataCollectorConfig
* GoogleCloudApigeeV1DataCollectorConfig `object`: Data collector and its configuration.
  * name `string`: Name of the data collector in the following format: `organizations/{org}/datacollectors/{datacollector}`
  * type `string` (values: TYPE_UNSPECIFIED, INTEGER, FLOAT, STRING, BOOLEAN, DATETIME): Data type accepted by the data collector.

### GoogleCloudApigeeV1Datastore
* GoogleCloudApigeeV1Datastore `object`: The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
  * createTime `string`: Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z
  * datastoreConfig [GoogleCloudApigeeV1DatastoreConfig](#googlecloudapigeev1datastoreconfig)
  * displayName `string`: Required. Display name in UI
  * lastUpdateTime `string`: Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z
  * org `string`: Output only. Organization that the datastore belongs to
  * self `string`: Output only. Resource link of Datastore. Example: `/organizations/{org}/analytics/datastores/{uuid}`
  * targetType `string`: Destination storage type. Supported types `gcs` or `bigquery`.

### GoogleCloudApigeeV1DatastoreConfig
* GoogleCloudApigeeV1DatastoreConfig `object`: Configuration detail for datastore
  * bucketName `string`: Name of the Cloud Storage bucket. Required for `gcs` target_type.
  * datasetName `string`: BigQuery dataset name Required for `bigquery` target_type.
  * path `string`: Path of Cloud Storage bucket Required for `gcs` target_type.
  * projectId `string`: Required. GCP project in which the datastore exists
  * tablePrefix `string`: Prefix of BigQuery table Required for `bigquery` target_type.

### GoogleCloudApigeeV1DateRange
* GoogleCloudApigeeV1DateRange `object`: Date range of the data to export.
  * end `string`: Required. End date (exclusive) of the data to export in the format `yyyy-mm-dd`. The date range ends at 00:00:00 UTC on the end date- which will not be in the output.
  * start `string`: Required. Start date of the data to export in the format `yyyy-mm-dd`. The date range begins at 00:00:00 UTC on the start date.

### GoogleCloudApigeeV1DebugMask
* GoogleCloudApigeeV1DebugMask `object`
  * faultJSONPaths `array`: List of JSON paths that specify the JSON elements to be filtered from JSON payloads in error flows.
    * items `string`
  * faultXPaths `array`: List of XPaths that specify the XML elements to be filtered from XML payloads in error flows.
    * items `string`
  * name `string`: Name of the debug mask.
  * namespaces `object`: Map of namespaces to URIs.
  * requestJSONPaths `array`: List of JSON paths that specify the JSON elements to be filtered from JSON request message payloads.
    * items `string`
  * requestXPaths `array`: List of XPaths that specify the XML elements to be filtered from XML request message payloads.
    * items `string`
  * responseJSONPaths `array`: List of JSON paths that specify the JSON elements to be filtered from JSON response message payloads.
    * items `string`
  * responseXPaths `array`: List of XPaths that specify the XML elements to be filtered from XML response message payloads.
    * items `string`
  * variables `array`: List of variables that should be masked from the debug output.
    * items `string`

### GoogleCloudApigeeV1DebugSession
* GoogleCloudApigeeV1DebugSession `object`
  * count `integer`: Optional. The number of request to be traced. Min = 1, Max = 15, Default = 10.
  * filter `string`: Optional. A conditional statement which is evaluated against the request message to determine if it should be traced. Syntax matches that of on API Proxy bundle flow Condition.
  * name `string`: A unique ID for this DebugSession.
  * timeout `string`: Optional. The time in seconds after which this DebugSession should end. This value will override the value in query param, if both are provided.
  * tracesize `integer`: Optional. The maximum number of bytes captured from the response payload. Min = 0, Max = 5120, Default = 5120.
  * validity `integer`: Optional. The length of time, in seconds, that this debug session is valid, starting from when it's received in the control plane. Min = 1, Max = 15, Default = 10.

### GoogleCloudApigeeV1DebugSessionTransaction
* GoogleCloudApigeeV1DebugSessionTransaction `object`: A transaction contains all of the debug information of the entire message flow of an API call processed by the runtime plane. The information is collected and recorded at critical points of the message flow in the runtime apiproxy.
  * completed `boolean`: Flag indicating whether a transaction is completed or not
  * point `array`: List of debug data collected by runtime plane at various defined points in the flow.
    * items [GoogleCloudApigeeV1Point](#googlecloudapigeev1point)

### GoogleCloudApigeeV1DeleteCustomReportResponse
* GoogleCloudApigeeV1DeleteCustomReportResponse `object`
  * message `string`: The response contains only a message field.

### GoogleCloudApigeeV1Deployment
* GoogleCloudApigeeV1Deployment `object`
  * apiProxy `string`: API proxy.
  * deployStartTime `string`: Time the API proxy was marked `deployed` in the control plane in millisconds since epoch.
  * environment `string`: Environment.
  * errors `array`: Errors reported for this deployment. Populated only when state == ERROR. This field is not populated in List APIs.
    * items [GoogleRpcStatus](#googlerpcstatus)
  * instances `array`: Status reported by each runtime instance. This field is not populated in List APIs.
    * items [GoogleCloudApigeeV1InstanceDeploymentStatus](#googlecloudapigeev1instancedeploymentstatus)
  * pods `array`: Status reported by runtime pods. This field is not populated for List APIs.
    * items [GoogleCloudApigeeV1PodStatus](#googlecloudapigeev1podstatus)
  * revision `string`: API proxy revision.
  * routeConflicts `array`: Conflicts in the desired state routing configuration. The presence of conflicts does not cause the state to be ERROR, but it will mean that some of the deployments basepaths are not routed to its environment. If the conflicts change, the state will transition to PROGRESSING until the latest configuration is rolled out to all instances. This field is not populated in List APIs.
    * items [GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict](#googlecloudapigeev1deploymentchangereportroutingconflict)
  * state `string` (values: RUNTIME_STATE_UNSPECIFIED, READY, PROGRESSING, ERROR): Current state of the deployment. This field is not populated in List APIs.

### GoogleCloudApigeeV1DeploymentChangeReport
* GoogleCloudApigeeV1DeploymentChangeReport `object`: Response for GenerateDeployChangeReport and GenerateUndeployChangeReport. This report contains any validation failures that would cause the deployment to be rejected, as well changes and conflicts in routing that may occur due to the new deployment. The existence of a routing warning does not necessarily imply that the deployment request is bad, if the desired state of the deployment request is to effect a routing change. The primary purposes of the routing messages are: 1) To inform users of routing changes that may have an effect on traffic currently being routed to other existing deployments. 2) To warn users if some basepath in the proxy will not receive traffic due to an existing deployment having already claimed that basepath. The presence of routing conflicts/changes will not cause non-dry-run DeployApiProxy/UndeployApiProxy requests to be rejected.
  * routingChanges `array`: All routing changes that may result from a deployment request.
    * items [GoogleCloudApigeeV1DeploymentChangeReportRoutingChange](#googlecloudapigeev1deploymentchangereportroutingchange)
  * routingConflicts `array`: All basepath conflicts detected for a deployment request.
    * items [GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict](#googlecloudapigeev1deploymentchangereportroutingconflict)
  * validationErrors [GoogleRpcPreconditionFailure](#googlerpcpreconditionfailure)

### GoogleCloudApigeeV1DeploymentChangeReportRoutingChange
* GoogleCloudApigeeV1DeploymentChangeReportRoutingChange `object`: Describes a potential routing change that may occur as a result of some deployment operation.
  * description `string`: A human-readable description of this routing change.
  * environmentGroup `string`: The name of the environment group affected by this routing change.
  * fromDeployment [GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment](#googlecloudapigeev1deploymentchangereportroutingdeployment)
  * shouldSequenceRollout `boolean`: True if using sequenced rollout would make this routing change safer. Note: this does not necessarily imply that automated sequenced rollout mode is supported for the operation.
  * toDeployment [GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment](#googlecloudapigeev1deploymentchangereportroutingdeployment)

### GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict
* GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict `object`: Describes a routing conflict that may cause a deployment not to receive traffic at some basepath.
  * conflictingDeployment [GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment](#googlecloudapigeev1deploymentchangereportroutingdeployment)
  * description `string`: A human-readable description of this conflict.
  * environmentGroup `string`: The name of the environment group in which this conflict exists.

### GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment
* GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment `object`: A tuple representing a basepath and the deployment containing it.
  * apiProxy `string`: The name of the deployed proxy revision containing the basepath.
  * basepath `string`: The basepath receiving traffic.
  * environment `string`: The name of the environment in which the proxy is deployed.
  * revision `string`: The name of the deployed proxy revision containing the basepath.

### GoogleCloudApigeeV1DeploymentConfig
* GoogleCloudApigeeV1DeploymentConfig `object`
  * basePath `string`: Base path where the application will be hosted. Defaults to "/".
  * attributes `object`: Additional key-value metadata for the deployment.
  * location `string`: Location of the API proxy bundle as a URI.
  * name `string`: Name of the API or shared flow revision to be deployed in the following format: `organizations/{org}/apis/{api}/revisions/{rev}` or `organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}`
  * proxyUid `string`: Unique ID of the API proxy revision.
  * uid `string`: Unique ID. The ID will only change if the deployment is deleted and recreated.

### GoogleCloudApigeeV1Developer
* GoogleCloudApigeeV1Developer `object`
  * accessType `string`: Access type.
  * appFamily `string`: Developer app family.
  * apps `array`: List of apps associated with the developer.
    * items `string`
  * attributes `array`: Optional. Developer attributes (name/value pairs). The custom attribute limit is 18.
    * items [GoogleCloudApigeeV1Attribute](#googlecloudapigeev1attribute)
  * companies `array`: List of companies associated with the developer.
    * items `string`
  * createdAt `string`: Output only. Time at which the developer was created in milliseconds since epoch.
  * developerId `string`: ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same over time.
  * email `string`: Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid.
  * firstName `string`: Required. First name of the developer.
  * lastModifiedAt `string`: Output only. Time at which the developer was last modified in milliseconds since epoch.
  * lastName `string`: Required. Last name of the developer.
  * organizationName `string`: Output only. Name of the Apigee organization in which the developer resides.
  * status `string`: Output only. Status of the developer. Valid values are `active` and `inactive`.
  * userName `string`: Required. User name of the developer. Not used by Apigee hybrid.

### GoogleCloudApigeeV1DeveloperApp
* GoogleCloudApigeeV1DeveloperApp `object`
  * apiProducts `array`: List of API products associated with the developer app.
    * items `string`
  * appFamily `string`: Developer app family.
  * appId `string`: ID of the developer app.
  * attributes `array`: List of attributes for the developer app.
    * items [GoogleCloudApigeeV1Attribute](#googlecloudapigeev1attribute)
  * callbackUrl `string`: Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.
  * createdAt `string`: Output only. Time the developer app was created in milliseconds since epoch.
  * credentials `array`: Output only. Set of credentials for the developer app consisting of the consumer key/secret pairs associated with the API products.
    * items [GoogleCloudApigeeV1Credential](#googlecloudapigeev1credential)
  * developerId `string`: ID of the developer.
  * keyExpiresIn `string`: Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.
  * lastModifiedAt `string`: Output only. Time the developer app was modified in milliseconds since epoch.
  * name `string`: Name of the developer app.
  * scopes `array`: Scopes to apply to the developer app. The specified scopes must already exist for the API product that you associate with the developer app.
    * items `string`
  * status `string`: Status of the credential. Valid values include `approved` or `revoked`.

### GoogleCloudApigeeV1DeveloperAppKey
* GoogleCloudApigeeV1DeveloperAppKey `object`
  * apiProducts `array`: List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created.
  * attributes `array`: List of attributes associated with the credential.
    * items [GoogleCloudApigeeV1Attribute](#googlecloudapigeev1attribute)
  * consumerKey `string`: Consumer key.
  * consumerSecret `string`: Secret key.
  * expiresAt `string`: Time the developer app expires in milliseconds since epoch.
  * issuedAt `string`: Time the developer app was created in milliseconds since epoch.
  * scopes `array`: Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.
    * items `string`
  * status `string`: Status of the credential. Valid values include `approved` or `revoked`.

### GoogleCloudApigeeV1DimensionMetric
* GoogleCloudApigeeV1DimensionMetric `object`: This message type encapsulates a metric grouped by dimension.
  * metrics `array`: This field contains a list of metrics.
    * items [GoogleCloudApigeeV1Metric](#googlecloudapigeev1metric)
  * name `string`: This field contains the name of the dimension.

### GoogleCloudApigeeV1EntityMetadata
* GoogleCloudApigeeV1EntityMetadata `object`: Metadata common to many entities in this API.
  * createdAt `string`: Time at which the API proxy was created, in milliseconds since epoch.
  * lastModifiedAt `string`: Time at which the API proxy was most recently modified, in milliseconds since epoch.
  * subType `string`: The type of entity described

### GoogleCloudApigeeV1Environment
* GoogleCloudApigeeV1Environment `object`
  * createdAt `string`: Output only. Creation time of this environment as milliseconds since epoch.
  * description `string`: Optional. Description of the environment.
  * displayName `string`: Optional. Display name for this environment.
  * lastModifiedAt `string`: Output only. Last modification time of this environment as milliseconds since epoch.
  * name `string`: Required. Name of the environment. Values must match the regular expression `^[.\\p{Alnum}-_]{1,255}$`
  * properties [GoogleCloudApigeeV1Properties](#googlecloudapigeev1properties)

### GoogleCloudApigeeV1EnvironmentConfig
* GoogleCloudApigeeV1EnvironmentConfig `object`
  * createTime `string`: Time that the environment configuration was created.
  * dataCollectors `array`: List of data collectors used by the deployments in the environment.
    * items [GoogleCloudApigeeV1DataCollectorConfig](#googlecloudapigeev1datacollectorconfig)
  * debugMask [GoogleCloudApigeeV1DebugMask](#googlecloudapigeev1debugmask)
  * deployments `array`: List of deployments in the environment.
    * items [GoogleCloudApigeeV1DeploymentConfig](#googlecloudapigeev1deploymentconfig)
  * featureFlags `object`: Feature flags inherited from the organization and environment.
  * flowhooks `array`: List of flow hooks in the environment.
    * items [GoogleCloudApigeeV1FlowHookConfig](#googlecloudapigeev1flowhookconfig)
  * keystores `array`: List of keystores in the environment.
    * items [GoogleCloudApigeeV1KeystoreConfig](#googlecloudapigeev1keystoreconfig)
  * name `string`: Name of the environment configuration in the following format: `organizations/{org}/environments/{env}/configs/{config}`
  * provider `string`: Used by the Control plane to add context information to help detect the source of the document during diagnostics and debugging.
  * pubsubTopic `string`: Name of the PubSub topic for the environment.
  * resourceReferences `array`: List of resource references in the environment.
    * items [GoogleCloudApigeeV1ReferenceConfig](#googlecloudapigeev1referenceconfig)
  * resources `array`: List of resource versions in the environment.
    * items [GoogleCloudApigeeV1ResourceConfig](#googlecloudapigeev1resourceconfig)
  * revisionId `string`: Revision ID of the environment configuration. The higher the value, the more recently the configuration was deployed.
  * sequenceNumber `string`: DEPRECATED: Use revision_id.
  * targets `array`: List of target servers in the environment. Disabled target servers are not displayed.
    * items [GoogleCloudApigeeV1TargetServerConfig](#googlecloudapigeev1targetserverconfig)
  * traceConfig [GoogleCloudApigeeV1RuntimeTraceConfig](#googlecloudapigeev1runtimetraceconfig)
  * uid `string`: Unique ID for the environment configuration. The ID will only change if the environment is deleted and recreated.

### GoogleCloudApigeeV1EnvironmentGroup
* GoogleCloudApigeeV1EnvironmentGroup `object`: EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.
  * createdAt `string`: Output only. The time at which the environment group was created as milliseconds since epoch.
  * hostnames `array`: Required. Host names for this environment group.
    * items `string`
  * lastModifiedAt `string`: Output only. The time at which the environment group was last updated as milliseconds since epoch.
  * name `string`: ID of the environment group.

### GoogleCloudApigeeV1EnvironmentGroupAttachment
* GoogleCloudApigeeV1EnvironmentGroupAttachment `object`: EnvironmentGroupAttachment is a resource which defines an attachment of an environment to an environment group.
  * createdAt `string`: Output only. The time at which the environment group attachment was created as milliseconds since epoch.
  * environment `string`: Required. ID of the attached environment.
  * name `string`: ID of the environment group attachment.

### GoogleCloudApigeeV1EnvironmentGroupConfig
* GoogleCloudApigeeV1EnvironmentGroupConfig `object`: EnvironmentGroupConfig is a revisioned snapshot of an EnvironmentGroup and its associated routing rules.
  * hostnames `array`: Host names for the environment group.
    * items `string`
  * name `string`: Name of the environment group in the following format: `organizations/{org}/envgroups/{envgroup}`.
  * revisionId `string`: Revision id that defines the ordering of the EnvironmentGroupConfig resource. The higher the revision, the more recently the configuration was deployed.
  * routingRules `array`: Ordered list of routing rules defining how traffic to this environment group's hostnames should be routed to different environments.
    * items [GoogleCloudApigeeV1RoutingRule](#googlecloudapigeev1routingrule)
  * uid `string`: A unique id for the environment group config that will only change if the environment group is deleted and recreated.

### GoogleCloudApigeeV1Export
* GoogleCloudApigeeV1Export `object`: Details of an export job.
  * created `string`: Output only. Time the export job was created.
  * datastoreName `string`: Name of the datastore that is the destination of the export job [datastore]
  * description `string`: Description of the export job.
  * error `string`: Output only. Error is set when export fails
  * executionTime `string`: Output only. Execution time for this export job. If the job is still in progress, it will be set to the amount of time that has elapsed since`created`, in seconds. Else, it will set to (`updated` - `created`), in seconds.
  * name `string`: Display name of the export job.
  * self `string`: Output only. Self link of the export job. A URI that can be used to retrieve the status of an export job. Example: `/organizations/myorg/environments/myenv/analytics/exports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`
  * state `string`: Output only. Status of the export job. Valid values include `enqueued`, `running`, `completed`, and `failed`.
  * updated `string`: Output only. Time the export job was last updated.

### GoogleCloudApigeeV1ExportRequest
* GoogleCloudApigeeV1ExportRequest `object`: Request body for [CreateExportRequest]
  * csvDelimiter `string`: Optional. Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\t`).
  * datastoreName `string`: Required. Name of the preconfigured datastore.
  * dateRange [GoogleCloudApigeeV1DateRange](#googlecloudapigeev1daterange)
  * description `string`: Optional. Description of the export job.
  * name `string`: Required. Display name of the export job.
  * outputFormat `string`: Optional. Output format of the export. Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the `csvDelimiter` property.

### GoogleCloudApigeeV1FlowHook
* GoogleCloudApigeeV1FlowHook `object`
  * continueOnError `boolean`: Optional. Flag that specifies whether execution should continue if the flow hook throws an exception. Set to `true` to continue execution. Set to `false` to stop execution if the flow hook throws an exception.Defaults to `true`.
  * description `string`: Description of the flow hook.
  * flowHookPoint `string`: Output only. Where in the API call flow the flow hook is invoked. Must be one of `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, or `PostTargetFlowHook`.
  * sharedFlow `string`: Shared flow attached to this flow hook, or empty if there is none attached.

### GoogleCloudApigeeV1FlowHookConfig
* GoogleCloudApigeeV1FlowHookConfig `object`
  * continueOnError `boolean`: Flag that specifies whether the flow should abort after an error in the flow hook. Defaults to `true` (continue on error).
  * name `string`: Name of the flow hook in the following format: `organizations/{org}/environments/{env}/flowhooks/{point}`. Valid `point` values include: `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, and `PostTargetFlowHook`
  * sharedFlowName `string`: Name of the shared flow to invoke in the following format: `organizations/{org}/sharedflows/{sharedflow}`

### GoogleCloudApigeeV1GetSyncAuthorizationRequest
* GoogleCloudApigeeV1GetSyncAuthorizationRequest `object`: Request for GetSyncAuthorization.

### GoogleCloudApigeeV1IngressConfig
* GoogleCloudApigeeV1IngressConfig `object`
  * environmentGroups `array`: List of environment groups in the organization.
    * items [GoogleCloudApigeeV1EnvironmentGroupConfig](#googlecloudapigeev1environmentgroupconfig)
  * name `string`: Name of the resource in the following format: `organizations/{org}/deployedIngressConfig`.
  * revisionCreateTime `string`: Time at which the IngressConfig revision was created.
  * revisionId `string`: Revision id that defines the ordering on IngressConfig resources. The higher the revision, the more recently the configuration was deployed.
  * uid `string`: A unique id for the ingress config that will only change if the organization is deleted and recreated.

### GoogleCloudApigeeV1Instance
* GoogleCloudApigeeV1Instance `object`: Apigee runtime instance.
  * host `string`: Output only. Hostname or IP address of the exposed Apigee endpoint used by clients to connect to the service.
  * createdAt `string`: Output only. Time the instance was created in milliseconds since epoch.
  * description `string`: Optional. Description of the instance.
  * diskEncryptionKeyName `string`: Optional. Customer Managed Encryption Key (CMEK) used for disk & volume encryption.
  * displayName `string`: Optional. Display name for the instance.
  * lastModifiedAt `string`: Output only. Time the instance was last modified in milliseconds since epoch.
  * location `string`: Required. Compute Engine location where the instance resides.
  * name `string`: Required. Resource ID of the instance. Values must match the regular expression `^a-z{0,30}[a-z\d]$`.
  * port `string`: Output only. Port number of the exposed Apigee endpoint.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, ACTIVE, DELETING): Output only. State of the instance. Values other than ACTIVE means the resource is not ready to use.

### GoogleCloudApigeeV1InstanceAttachment
* GoogleCloudApigeeV1InstanceAttachment `object`: InstanceAttachment represents the installation of an environment onto an instance.
  * createdAt `string`: Output only. Time the attachment was created in milliseconds since epoch.
  * environment `string`: ID of the attached environment.
  * name `string`: Output only. ID of the attachment.

### GoogleCloudApigeeV1InstanceDeploymentStatus
* GoogleCloudApigeeV1InstanceDeploymentStatus `object`: The status of a deployment as reported by a single instance.
  * deployedRevisions `array`: Revisions currently deployed in MPs.
    * items [GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision](#googlecloudapigeev1instancedeploymentstatusdeployedrevision)
  * deployedRoutes `array`: The current routes deployed in the ingress routing table. A route which is missing will appear in missing_routes.
    * items [GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute](#googlecloudapigeev1instancedeploymentstatusdeployedroute)
  * instance `string`: ID of the instance reporting the status.

### GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision
* GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision `object`: Revisions deployed in the MPs.
  * percentage `integer`: The percentage of MP replicas reporting this revision
  * revision `string`: The proxy revision reported as deployed.

### GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute
* GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute `object`: A route deployed in the ingress routing table.
  * basepath `string`: The basepath in the routing table.
  * envgroup `string`: The envgroup where this route is installed.
  * environment `string`: The destination environment. This will be empty if the route is not yet reported.
  * percentage `integer`: The percentage of ingress replicas reporting this route.

### GoogleCloudApigeeV1KeyAliasReference
* GoogleCloudApigeeV1KeyAliasReference `object`
  * aliasId `string`: Alias ID. Must exist in the keystore referred to by the reference.
  * reference `string`: Reference name in the following format: `organizations/{org}/environments/{env}/references/{reference}`

### GoogleCloudApigeeV1KeyValueMap
* GoogleCloudApigeeV1KeyValueMap `object`: A collection of key, value string pairs
  * encrypted `boolean`: Optional. If `true` entry values will be encrypted.
  * name `string`: Required. The id of the key value map.

### GoogleCloudApigeeV1Keystore
* GoogleCloudApigeeV1Keystore `object`: A datastore for Certificates and Aliases
  * aliases `array`: Output only. The aliases in this keystore.
    * items `string`
  * name `string`: Required. The resource ID for this keystore. Values must match the regular expression `[\w[:space:]-.]{1,255}`.

### GoogleCloudApigeeV1KeystoreConfig
* GoogleCloudApigeeV1KeystoreConfig `object`
  * aliases `array`: Aliases in the keystore.
    * items [GoogleCloudApigeeV1AliasRevisionConfig](#googlecloudapigeev1aliasrevisionconfig)
  * name `string`: Resource name in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}`

### GoogleCloudApigeeV1ListApiCategoriesResponse
* GoogleCloudApigeeV1ListApiCategoriesResponse `object`: the response for ListApiCategoriesRequest.
  * data `array`: Details of categories.
    * items [GoogleCloudApigeeV1ApiCategoryData](#googlecloudapigeev1apicategorydata)
  * errorCode `string`: ID that can be used to find errors in the log files.
  * message `string`: Description of the operation.
  * requestId `string`: ID that can be used to find request details in the log files.
  * status `string`: Status of the operation.

### GoogleCloudApigeeV1ListApiProductsResponse
* GoogleCloudApigeeV1ListApiProductsResponse `object`
  * apiProduct `array`: Lists all API product names defined for an organization.
    * items [GoogleCloudApigeeV1ApiProduct](#googlecloudapigeev1apiproduct)

### GoogleCloudApigeeV1ListApiProxiesResponse
* GoogleCloudApigeeV1ListApiProxiesResponse `object`
  * proxies `array`
    * items [GoogleCloudApigeeV1ApiProxy](#googlecloudapigeev1apiproxy)

### GoogleCloudApigeeV1ListAppsResponse
* GoogleCloudApigeeV1ListAppsResponse `object`
  * app `array`
    * items [GoogleCloudApigeeV1App](#googlecloudapigeev1app)

### GoogleCloudApigeeV1ListAsyncQueriesResponse
* GoogleCloudApigeeV1ListAsyncQueriesResponse `object`: The response for ListAsyncQueries.
  * queries `array`: The asynchronous queries belong to requested resource name.
    * items [GoogleCloudApigeeV1AsyncQuery](#googlecloudapigeev1asyncquery)

### GoogleCloudApigeeV1ListCustomReportsResponse
* GoogleCloudApigeeV1ListCustomReportsResponse `object`: This message encapsulates a list of custom report definitions
  * qualifier `array`
    * items [GoogleCloudApigeeV1CustomReport](#googlecloudapigeev1customreport)

### GoogleCloudApigeeV1ListDataCollectorsResponse
* GoogleCloudApigeeV1ListDataCollectorsResponse `object`: Response for ListDataCollectors.
  * dataCollectors `array`: Data collectors in the specified organization.
    * items [GoogleCloudApigeeV1DataCollector](#googlecloudapigeev1datacollector)
  * nextPageToken `string`: Page token that you can include in a ListDataCollectors request to retrieve the next page. If omitted, no subsequent pages exist.

### GoogleCloudApigeeV1ListDatastoresResponse
* GoogleCloudApigeeV1ListDatastoresResponse `object`: The response for ListDatastores
  * datastores `array`: A list of datastores
    * items [GoogleCloudApigeeV1Datastore](#googlecloudapigeev1datastore)

### GoogleCloudApigeeV1ListDebugSessionsResponse
* GoogleCloudApigeeV1ListDebugSessionsResponse `object`
  * nextPageToken `string`: Page token that you can include in a ListDebugSessionsRequest to retrieve the next page. If omitted, no subsequent pages exist.
  * sessions `array`: Session info that includes debug session ID and the first transaction creation timestamp.
    * items [GoogleCloudApigeeV1Session](#googlecloudapigeev1session)

### GoogleCloudApigeeV1ListDeploymentsResponse
* GoogleCloudApigeeV1ListDeploymentsResponse `object`
  * deployments `array`: List of deployments.
    * items [GoogleCloudApigeeV1Deployment](#googlecloudapigeev1deployment)

### GoogleCloudApigeeV1ListDeveloperAppsResponse
* GoogleCloudApigeeV1ListDeveloperAppsResponse `object`
  * app `array`: List of developer apps and their credentials.
    * items [GoogleCloudApigeeV1DeveloperApp](#googlecloudapigeev1developerapp)

### GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse
* GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse `object`: Response for ListEnvironmentGroupAttachments.
  * environmentGroupAttachments `array`: EnvironmentGroupAttachments for the specified environment group.
    * items [GoogleCloudApigeeV1EnvironmentGroupAttachment](#googlecloudapigeev1environmentgroupattachment)
  * nextPageToken `string`: Page token that you can include in a ListEnvironmentGroupAttachments request to retrieve the next page. If omitted, no subsequent pages exist.

### GoogleCloudApigeeV1ListEnvironmentGroupsResponse
* GoogleCloudApigeeV1ListEnvironmentGroupsResponse `object`: Response for ListEnvironmentGroups.
  * environmentGroups `array`: EnvironmentGroups in the specified organization.
    * items [GoogleCloudApigeeV1EnvironmentGroup](#googlecloudapigeev1environmentgroup)
  * nextPageToken `string`: Page token that you can include in a ListEnvironmentGroups request to retrieve the next page. If omitted, no subsequent pages exist.

### GoogleCloudApigeeV1ListEnvironmentResourcesResponse
* GoogleCloudApigeeV1ListEnvironmentResourcesResponse `object`: Response for ListEnvironmentResources
  * resourceFile `array`: List of resources files.
    * items [GoogleCloudApigeeV1ResourceFile](#googlecloudapigeev1resourcefile)

### GoogleCloudApigeeV1ListExportsResponse
* GoogleCloudApigeeV1ListExportsResponse `object`: The response for ListExports
  * exports `array`: Details of the export jobs.
    * items [GoogleCloudApigeeV1Export](#googlecloudapigeev1export)

### GoogleCloudApigeeV1ListHybridIssuersResponse
* GoogleCloudApigeeV1ListHybridIssuersResponse `object`
  * issuers `array`: Lists of hybrid services and its trusted issuer email ids.
    * items [GoogleCloudApigeeV1ServiceIssuersMapping](#googlecloudapigeev1serviceissuersmapping)

### GoogleCloudApigeeV1ListInstanceAttachmentsResponse
* GoogleCloudApigeeV1ListInstanceAttachmentsResponse `object`: Response for ListInstanceAttachments.
  * attachments `array`: Attachments for the instance.
    * items [GoogleCloudApigeeV1InstanceAttachment](#googlecloudapigeev1instanceattachment)
  * nextPageToken `string`: Page token that you can include in a ListInstanceAttachments request to retrieve the next page of content. If omitted, no subsequent pages exist.

### GoogleCloudApigeeV1ListInstancesResponse
* GoogleCloudApigeeV1ListInstancesResponse `object`: Response for ListInstances.
  * instances `array`: Instances in the specified organization.
    * items [GoogleCloudApigeeV1Instance](#googlecloudapigeev1instance)
  * nextPageToken `string`: Page token that you can include in a ListInstance request to retrieve the next page of content. If omitted, no subsequent pages exist.

### GoogleCloudApigeeV1ListNatAddressesResponse
* GoogleCloudApigeeV1ListNatAddressesResponse `object`: Response for ListNatAddresses.
  * natAddresses `array`: List of NAT Addresses for the instance.
    * items [GoogleCloudApigeeV1NatAddress](#googlecloudapigeev1nataddress)
  * nextPageToken `string`: Page token that you can include in a ListNatAddresses request to retrieve the next page of content. If omitted, no subsequent pages exist.

### GoogleCloudApigeeV1ListOfDevelopersResponse
* GoogleCloudApigeeV1ListOfDevelopersResponse `object`
  * developer `array`: List of developers.
    * items [GoogleCloudApigeeV1Developer](#googlecloudapigeev1developer)

### GoogleCloudApigeeV1ListOrganizationsResponse
* GoogleCloudApigeeV1ListOrganizationsResponse `object`
  * organizations `array`: List of Apigee organizations and associated GCP projects.
    * items [GoogleCloudApigeeV1OrganizationProjectMapping](#googlecloudapigeev1organizationprojectmapping)

### GoogleCloudApigeeV1ListSharedFlowsResponse
* GoogleCloudApigeeV1ListSharedFlowsResponse `object`
  * sharedFlows `array`
    * items [GoogleCloudApigeeV1SharedFlow](#googlecloudapigeev1sharedflow)

### GoogleCloudApigeeV1Metadata
* GoogleCloudApigeeV1Metadata `object`: This message type encapsulates additional information about query execution.
  * errors `array`: List of error messages as strings.
    * items `string`
  * notices `array`: List of additional information such as data source, if result was truncated etc. E.g "notices": [ "Source:Postgres", "PG Host:uappg0rw.e2e.apigeeks.net", "query served by:4b64601e-40de-4eb1-bfb9-eeee7ac929ed", "Table used: edge.api.uapgroup2.agg_api" ]
    * items `string`

### GoogleCloudApigeeV1Metric
* GoogleCloudApigeeV1Metric `object`: This message type encapsulates the metric data point. Example: { "name": "sum(message_count)", "values" : [ { "timestamp": 1549004400000, "value": "39.0" }, { "timestamp" : 1548997200000, "value" : "0.0" } ] } or { "name": "sum(message_count)", "values" : ["39.0"] }
  * name `string`: This field contains the metric name.
  * values `array`: List of metric values. Possible value format: "values":["39.0"] or "values":[ { "value": "39.0", "timestamp": 1232434354} ]

### GoogleCloudApigeeV1NatAddress
* GoogleCloudApigeeV1NatAddress `object`: Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.
  * ipAddress `string`: Required. The static IPV4 address.
  * name `string`: Required. Resource ID of the NAT address.
  * state `string` (values: STATE_UNSPECIFIED, CREATING, RESERVED, ACTIVE, DELETING): Required. State of the nat address.

### GoogleCloudApigeeV1Operation
* GoogleCloudApigeeV1Operation `object`: Operation represents the pairing of REST resource path and the actions (verbs) allowed on the resource path.
  * methods `array`: methods refers to the REST verbs as in https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html. When none specified, all verb types are allowed.
    * items `string`
  * resource `string`: Required. resource represents REST resource path associated with the proxy/remote service.

### GoogleCloudApigeeV1OperationConfig
* GoogleCloudApigeeV1OperationConfig `object`: OperationConfig binds the resources in a proxy or remote service with the allowed REST methods and its associated quota enforcement.
  * apiSource `string`: Required. API proxy or remote service name with which the resources, methods, and quota are associated.
  * attributes `array`: Custom attributes associated with the operation.
    * items [GoogleCloudApigeeV1Attribute](#googlecloudapigeev1attribute)
  * operations `array`: List of resource/method pairs for the proxy/remote service, upon which quota will applied. **Note**: Currently, you can specify only a single resource/method pair. The call will fail if more than one resource/method pair is provided.
    * items [GoogleCloudApigeeV1Operation](#googlecloudapigeev1operation)
  * quota [GoogleCloudApigeeV1Quota](#googlecloudapigeev1quota)

### GoogleCloudApigeeV1OperationGroup
* GoogleCloudApigeeV1OperationGroup `object`: List of operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.
  * operationConfigType `string`: Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid values are `proxy` or `remoteservice`. Defaults to `proxy`. Set to `proxy` when Apigee API proxies are associated with the API product. Set to `remoteservice` when non-Apigee proxies like Istio-Envoy are associated with the API product.
  * operationConfigs `array`: Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product.
    * items [GoogleCloudApigeeV1OperationConfig](#googlecloudapigeev1operationconfig)

### GoogleCloudApigeeV1OperationMetadata
* GoogleCloudApigeeV1OperationMetadata `object`: Metadata describing an Operation.
  * operationType `string` (values: OPERATION_TYPE_UNSPECIFIED, INSERT, DELETE, UPDATE)
  * state `string` (values: STATE_UNSPECIFIED, NOT_STARTED, IN_PROGRESS, FINISHED)
  * targetResourceName `string`: Name of the resource for which the operation is operating on.

### GoogleCloudApigeeV1OptimizedStats
* GoogleCloudApigeeV1OptimizedStats `object`
  * Response [GoogleCloudApigeeV1OptimizedStatsResponse](#googlecloudapigeev1optimizedstatsresponse)

### GoogleCloudApigeeV1OptimizedStatsNode
* GoogleCloudApigeeV1OptimizedStatsNode `object`: This message type encapsulates a data node as represented below: { "identifier": { "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] } ] } OR { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] } Depending on whether a dimension is present in the query or not the data node type can be a simple metric value or dimension identifier with list of metrics.
  * data `array`

### GoogleCloudApigeeV1OptimizedStatsResponse
* GoogleCloudApigeeV1OptimizedStatsResponse `object`: This message type encapsulates a response format for Js Optimized Scenario.
  * TimeUnit `array`: This field contains a list of time unit values. Time unit refers to an epoch timestamp value.
    * items `string`
  * metaData [GoogleCloudApigeeV1Metadata](#googlecloudapigeev1metadata)
  * resultTruncated `boolean`: This ia a boolean field to indicate if the results were truncated based on the limit parameter.
  * stats [GoogleCloudApigeeV1OptimizedStatsNode](#googlecloudapigeev1optimizedstatsnode)

### GoogleCloudApigeeV1Organization
* GoogleCloudApigeeV1Organization `object`
  * analyticsRegion `string`: Required. Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
  * attributes `array`: Not used by Apigee.
    * items `string`
  * authorizedNetwork `string`: Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType] is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default". **Note:** Not supported for Apigee hybrid.
  * caCertificate `string`: Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when [RuntimeType] is CLOUD.
  * createdAt `string`: Output only. Time that the Apigee organization was created in milliseconds since epoch.
  * customerName `string`: Not used by Apigee.
  * description `string`: Description of the Apigee organization.
  * displayName `string`
  * environments `array`: Output only. List of environments in the Apigee organization.
    * items `string`
  * lastModifiedAt `string`: Output only. Time that the Apigee organization was last modified in milliseconds since epoch.
  * name `string`: Output only. Name of the Apigee organization.
  * projectId `string`: The project ID associated with the Apigee organization.
  * properties [GoogleCloudApigeeV1Properties](#googlecloudapigeev1properties)
  * runtimeDatabaseEncryptionKeyName `string`: Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. If not specified, a Google-Managed encryption key will be used. Valid only when [RuntimeType] is CLOUD. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". **Note:** Not supported for Apigee hybrid.
  * runtimeType `string` (values: RUNTIME_TYPE_UNSPECIFIED, CLOUD, HYBRID): Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.
  * subscriptionType `string` (values: SUBSCRIPTION_TYPE_UNSPECIFIED, PAID, TRIAL): Output only. Subscription type of the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased). See [Apigee pricing](https://cloud.google.com/apigee/pricing/).
  * type `string` (values: TYPE_UNSPECIFIED, TYPE_TRIAL, TYPE_PAID, TYPE_INTERNAL): Not used by Apigee.

### GoogleCloudApigeeV1OrganizationProjectMapping
* GoogleCloudApigeeV1OrganizationProjectMapping `object`
  * organization `string`: Name of the Apigee organization.
  * projectIds `array`: List of GCP projects associated with the Apigee organization.
    * items `string`

### GoogleCloudApigeeV1PodStatus
* GoogleCloudApigeeV1PodStatus `object`
  * appVersion `string`: Version of the application running in the pod.
  * deploymentStatus `string`: Status of the deployment. Valid values include: - `deployed`: Successful. - `error` : Failed. - `pending` : Pod has not yet reported on the deployment.
  * deploymentStatusTime `string`: Time the deployment status was reported in milliseconds since epoch.
  * deploymentTime `string`: Time the proxy was deployed in milliseconds since epoch.
  * podName `string`: Name of the pod which is reporting the status.
  * podStatus `string`: Overall status of the pod (not this specific deployment). Valid values include: - `active`: Up to date. - `stale` : Recently out of date. Pods that have not reported status in a long time are excluded from the output.
  * podStatusTime `string`: Time the pod status was reported in milliseconds since epoch.
  * statusCode `string`: Code associated with the deployment status.
  * statusCodeDetails `string`: Human-readable message associated with the status code.

### GoogleCloudApigeeV1Point
* GoogleCloudApigeeV1Point `object`: Point is a group of information collected by runtime plane at critical points of the message flow of the processed API request. This is a list of supported point IDs, categorized to three major buckets. For each category, debug points that we are currently supporting are listed below: - Flow status debug points: StateChange FlowInfo Condition Execution DebugMask Error - Flow control debug points: FlowCallout Paused Resumed FlowReturn BreakFlow Error - Runtime debug points: ScriptExecutor FlowCalloutStepDefinition CustomTarget StepDefinition Oauth2ServicePoint RaiseFault NodeJS The detail information of the given debug point is stored in a list of results.
  * id `string`: Name of a step in the transaction.
  * results `array`: List of results extracted from a given debug point.
    * items [GoogleCloudApigeeV1Result](#googlecloudapigeev1result)

### GoogleCloudApigeeV1Properties
* GoogleCloudApigeeV1Properties `object`: Message for compatibility with legacy Edge specification for Java Properties object in JSON.
  * property `array`: List of all properties in the object
    * items [GoogleCloudApigeeV1Property](#googlecloudapigeev1property)

### GoogleCloudApigeeV1Property
* GoogleCloudApigeeV1Property `object`: A single property entry in the Properties message.
  * name `string`: The property key
  * value `string`: The property value

### GoogleCloudApigeeV1ProvisionOrganizationRequest
* GoogleCloudApigeeV1ProvisionOrganizationRequest `object`: Request for ProvisionOrganization.
  * analyticsRegion `string`: Primary Cloud Platform region for analytics data storage. For valid values, see [Create an organization](https://docs.apigee.com/hybrid/latest/precog-provision). Defaults to us-west1.
  * authorizedNetwork `string`: Name of the customer project's VPC network. If provided, the network needs to be peered through Service Networking. If none is provided, the organization will have access only to the public internet.
  * runtimeLocation `string`: Cloud Platform location for the runtime instance. Defaults to us-west1-a.

### GoogleCloudApigeeV1Query
* GoogleCloudApigeeV1Query `object`
  * csvDelimiter `string`: Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\t`).
  * dimensions `array`: A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions
    * items `string`
  * envgroupHostname `string`: Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostAsyncQuery where analytics data will be grouped by organization and hostname.
  * filter `string`: Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax
  * groupByTimeUnit `string`: Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.
  * limit `integer`: Maximum number of rows that can be returned in the result.
  * metrics `array`: A list of Metrics.
    * items [GoogleCloudApigeeV1QueryMetric](#googlecloudapigeev1querymetric)
  * name `string`: Asynchronous Query Name.
  * outputFormat `string`: Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property.
  * reportDefinitionId `string`: Asynchronous Report ID.

### GoogleCloudApigeeV1QueryMetadata
* GoogleCloudApigeeV1QueryMetadata `object`
  * dimensions `array`: Dimensions of the AsyncQuery.
    * items `string`
  * endTimestamp `string`: End timestamp of the query range.
  * metrics `array`: Metrics of the AsyncQuery. Example: ["name:message_count,func:sum,alias:sum_message_count"]
    * items `string`
  * outputFormat `string`: Output format.
  * startTimestamp `string`: Start timestamp of the query range.
  * timeUnit `string`: Query GroupBy time unit.

### GoogleCloudApigeeV1QueryMetric
* GoogleCloudApigeeV1QueryMetric `object`: More info about Metric: https://docs.apigee.com/api-platform/analytics/analytics-reference#metrics
  * alias `string`: Alias for the metric. Alias will be used to replace metric name in query results.
  * function `string`: Aggregation function: avg, min, max, or sum.
  * name `string`: Required. Metric name.
  * operator `string`: One of `+`, `-`, `/`, `%`, `*`.
  * value `string`: Operand value should be provided when operator is set.

### GoogleCloudApigeeV1Quota
* GoogleCloudApigeeV1Quota `object`: Quota contains the essential parameters needed that can be applied on a proxy/remote service, resources and methods combination associated with this API product. While setting of Quota is optional, setting it prevents requests from exceeding the provisioned parameters.
  * interval `string`: Required. Time interval over which the number of request messages is calculated.
  * limit `string`: Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.
  * timeUnit `string`: Time unit defined for the `interval`. Valid values include `minute`, `hour`, `day`, or `month`. If `limit` and `interval` are valid, the default value is `hour`; otherwise, the default is null.

### GoogleCloudApigeeV1Reference
* GoogleCloudApigeeV1Reference `object`: A Reference configuration. References must refer to a keystore that also exists in the parent environment.
  * description `string`: Optional. A human-readable description of this reference.
  * name `string`: Required. The resource id of this reference. Values must match the regular expression [\w\s\-.]+.
  * refers `string`: Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resource_type.
  * resourceType `string`: The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.

### GoogleCloudApigeeV1ReferenceConfig
* GoogleCloudApigeeV1ReferenceConfig `object`
  * name `string`: Name of the reference in the following format: `organizations/{org}/environments/{env}/references/{reference}`
  * resourceName `string`: Name of the referenced resource in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` Only references to keystore resources are supported.

### GoogleCloudApigeeV1ReportInstanceStatusRequest
* GoogleCloudApigeeV1ReportInstanceStatusRequest `object`: Request for ReportInstanceStatus.
  * instanceUid `string`: A unique ID for the instance which is guaranteed to be unique in case the user installs multiple hybrid runtimes with the same instance ID.
  * reportTime `string`: The time the report was generated in the runtime. Used to prevent an old status from overwriting a newer one. An instance should space out it's status reports so that clock skew does not play a factor.
  * resources `array`: Status for config resources
    * items [GoogleCloudApigeeV1ResourceStatus](#googlecloudapigeev1resourcestatus)

### GoogleCloudApigeeV1ReportInstanceStatusResponse
* GoogleCloudApigeeV1ReportInstanceStatusResponse `object`: Placeholder for future enhancements to status reporting protocol

### GoogleCloudApigeeV1ReportProperty
* GoogleCloudApigeeV1ReportProperty `object`
  * property `string`: name of the property
  * value `array`: property values
    * items [GoogleCloudApigeeV1Attribute](#googlecloudapigeev1attribute)

### GoogleCloudApigeeV1ResourceConfig
* GoogleCloudApigeeV1ResourceConfig `object`
  * location `string`: Location of the resource as a URI.
  * name `string`: Resource name in the following format: `organizations/{org}/environments/{env}/resourcefiles/{type}/{file}/revisions/{rev}` Only environment-scoped resource files are supported.

### GoogleCloudApigeeV1ResourceFile
* GoogleCloudApigeeV1ResourceFile `object`: Metadata about a resource file.
  * name `string`: ID of the resource file.
  * type `string`: Resource file type. {{ resource_file_type }}

### GoogleCloudApigeeV1ResourceFiles
* GoogleCloudApigeeV1ResourceFiles `object`: List of resource files.
  * resourceFile `array`: List of resource files.
    * items [GoogleCloudApigeeV1ResourceFile](#googlecloudapigeev1resourcefile)

### GoogleCloudApigeeV1ResourceStatus
* GoogleCloudApigeeV1ResourceStatus `object`: The status of a resource loaded in the runtime.
  * resource `string`: The resource name. Currently only two resources are supported: EnvironmentGroup - organizations/{org}/envgroups/{envgroup} EnvironmentConfig - organizations/{org}/environments/{environment}/deployedConfig
  * revisions `array`: Revisions of the resource currently deployed in the instance.
    * items [GoogleCloudApigeeV1RevisionStatus](#googlecloudapigeev1revisionstatus)
  * totalReplicas `integer`: The total number of replicas that should have this resource.
  * uid `string`: The uid of the resource. In the unexpected case that the instance has multiple uids for the same name, they should be reported under separate ResourceStatuses.

### GoogleCloudApigeeV1Result
* GoogleCloudApigeeV1Result `object`: Result is short for "action result", could be different types identified by "action_result" field. Supported types: 1. DebugInfo : generic debug info collected by runtime recorded as a list of properties. For example, the contents could be virtual host info, state change result, or execution metadata. Required fields : properties, timestamp 2. RequestMessage: information of a http request. Contains headers, request URI and http methods type.Required fields : headers, uri, verb 3. ResponseMessage: information of a http response. Contains headers, reason phrase and http status code. Required fields : headers, reasonPhrase, statusCode 4. ErrorMessage: information of a http error message. Contains detail error message, reason phrase and status code. Required fields : content, headers, reasonPhrase, statusCode 5. VariableAccess: a list of variable access actions, can be Get, Set and Remove. Required fields : accessList
  * ActionResult `string`: Type of the action result. Can be one of the five: DebugInfo, RequestMessage, ResponseMessage, ErrorMessage, VariableAccess
  * accessList `array`: A list of variable access actions agaist the api proxy. Supported values: Get, Set, Remove.
    * items [GoogleCloudApigeeV1Access](#googlecloudapigeev1access)
  * content `string`: Error message content. for example, "content" : "{\"fault\":{\"faultstring\":\"API timed out\",\"detail\":{\"errorcode\":\"flow.APITimedOut\"}}}"
  * headers `array`: A list of HTTP headers. for example, '"headers" : [ { "name" : "Content-Length", "value" : "83" }, { "name" : "Content-Type", "value" : "application/json" } ]'
    * items [GoogleCloudApigeeV1Property](#googlecloudapigeev1property)
  * properties [GoogleCloudApigeeV1Properties](#googlecloudapigeev1properties)
  * reasonPhrase `string`: HTTP response phrase
  * statusCode `string`: HTTP response code
  * timestamp `string`: Timestamp of when the result is recorded. Its format is dd-mm-yy hh:mm:ss:xxx. For example, `"timestamp" : "12-08-19 00:31:59:960"`
  * uRI `string`: The relative path of the api proxy. for example, `"uRI" : "/iloveapis"`
  * verb `string`: HTTP method verb

### GoogleCloudApigeeV1RevisionStatus
* GoogleCloudApigeeV1RevisionStatus `object`: The status of a specific resource revision.
  * errors `array`: Errors reported when attempting to load this revision.
    * items [GoogleCloudApigeeV1UpdateError](#googlecloudapigeev1updateerror)
  * jsonSpec `string`: The json content of the resource revision.
  * replicas `integer`: The number of replicas that have successfully loaded this revision.
  * revisionId `string`: The revision of the resource.

### GoogleCloudApigeeV1RoutingRule
* GoogleCloudApigeeV1RoutingRule `object`
  * basepath `string`: URI path prefix used to route to the specified environment. May contain one or more wildcards. For example, path segments consisting of a single `*` character will match any string.
  * envGroupRevision `string`: The env group config revision_id when this rule was added or last updated. This value is set when the rule is created and will only update if the the environment_id changes. It is used to determine if the runtime is up to date with respect to this rule. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.
  * environment `string`: Name of an environment bound to the environment group in the following format: `organizations/{org}/environments/{env}`.
  * receiver `string`: The resource name of the proxy revision that is receiving this basepath in the following format: `organizations/{org}/apis/{api}/revisions/{rev}`. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.
  * updateTime `string`: The unix timestamp when this rule was updated. This is updated whenever env_group_revision is updated. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.

### GoogleCloudApigeeV1RuntimeTraceConfig
* GoogleCloudApigeeV1RuntimeTraceConfig `object`: NEXT ID: 8 RuntimeTraceConfig defines the configurations for distributed trace in an environment.
  * endpoint `string`: Endpoint of the exporter.
  * exporter `string` (values: EXPORTER_UNSPECIFIED, JAEGER, CLOUD_TRACE): Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters.
  * name `string`: Name of the trace config in the following format: `organizations/{org}/environment/{env}/traceConfig`
  * overrides `array`: List of trace configuration overrides for spicific API proxies.
    * items [GoogleCloudApigeeV1RuntimeTraceConfigOverride](#googlecloudapigeev1runtimetraceconfigoverride)
  * revisionCreateTime `string`: The timestamp that the revision was created or updated.
  * revisionId `string`: Revision number which can be used by the runtime to detect if the trace config has changed between two versions.
  * samplingConfig [GoogleCloudApigeeV1RuntimeTraceSamplingConfig](#googlecloudapigeev1runtimetracesamplingconfig)

### GoogleCloudApigeeV1RuntimeTraceConfigOverride
* GoogleCloudApigeeV1RuntimeTraceConfigOverride `object`: NEXT ID: 7 Trace configuration override for a specific API proxy in an environment.
  * apiProxy `string`: Name of the API proxy that will have its trace configuration overridden following format: `organizations/{org}/apis/{api}`
  * name `string`: Name of the trace config override in the following format: `organizations/{org}/environment/{env}/traceConfig/overrides/{override}`
  * revisionCreateTime `string`: The timestamp that the revision was created or updated.
  * revisionId `string`: Revision number which can be used by the runtime to detect if the trace config override has changed between two versions.
  * samplingConfig [GoogleCloudApigeeV1RuntimeTraceSamplingConfig](#googlecloudapigeev1runtimetracesamplingconfig)
  * uid `string`: Unique ID for the configuration override. The ID will only change if the override is deleted and recreated. Corresponds to name's "override" field.

### GoogleCloudApigeeV1RuntimeTraceSamplingConfig
* GoogleCloudApigeeV1RuntimeTraceSamplingConfig `object`: NEXT ID: 3 RuntimeTraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs.
  * sampler `string` (values: SAMPLER_UNSPECIFIED, OFF, PROBABILITY): Sampler of distributed tracing. OFF is the default value.
  * samplingRate `number`: Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.

### GoogleCloudApigeeV1Schema
* GoogleCloudApigeeV1Schema `object`: Response for Schema call
  * dimensions `array`: List of schema fiels grouped as dimensions.
    * items [GoogleCloudApigeeV1SchemaSchemaElement](#googlecloudapigeev1schemaschemaelement)
  * meta `array`: Additional metadata associated with schema. This is a legacy field and usually consists of an empty array of strings.
    * items `string`
  * metrics `array`: List of schema fields grouped as dimensions. These are fields that can be used with an aggregate function such as sum, avg, min, max.
    * items [GoogleCloudApigeeV1SchemaSchemaElement](#googlecloudapigeev1schemaschemaelement)

### GoogleCloudApigeeV1SchemaSchemaElement
* GoogleCloudApigeeV1SchemaSchemaElement `object`: Message type for the schema element
  * name `string`: Name of the field
  * properties [GoogleCloudApigeeV1SchemaSchemaProperty](#googlecloudapigeev1schemaschemaproperty)

### GoogleCloudApigeeV1SchemaSchemaProperty
* GoogleCloudApigeeV1SchemaSchemaProperty `object`: Message type for schema property
  * createTime `string`: Creation time of the field
  * custom `string`: Custom is a flag signifying if the field was provided as part of the standard dataset or a custom field created by the customer
  * type `string`: Data type of the field.

### GoogleCloudApigeeV1ServiceIssuersMapping
* GoogleCloudApigeeV1ServiceIssuersMapping `object`
  * emailIds `array`: List of trusted issuer email ids.
    * items `string`
  * service `string`: String indicating the Apigee service name.

### GoogleCloudApigeeV1Session
* GoogleCloudApigeeV1Session `object`: Session carries the debug session id and its creation time.
  * id `string`: The debug session ID.
  * timestampMs `string`: The first transaction creation timestamp in millisecond, recoreded by UAP.

### GoogleCloudApigeeV1SharedFlow
* GoogleCloudApigeeV1SharedFlow `object`: The metadata describing a shared flow
  * latestRevisionId `string`: The id of the most recently created revision for this shared flow.
  * metaData [GoogleCloudApigeeV1EntityMetadata](#googlecloudapigeev1entitymetadata)
  * name `string`: The ID of the shared flow.
  * revision `array`: A list of revisions of this shared flow.
    * items `string`

### GoogleCloudApigeeV1SharedFlowRevision
* GoogleCloudApigeeV1SharedFlowRevision `object`: The metadata describing a shared flow revision.
  * configurationVersion [GoogleCloudApigeeV1ConfigVersion](#googlecloudapigeev1configversion)
  * contextInfo `string`: A textual description of the shared flow revision.
  * createdAt `string`: Time at which this shared flow revision was created, in milliseconds since epoch.
  * description `string`: Description of the shared flow revision.
  * displayName `string`: The human readable name of this shared flow.
  * entityMetaDataAsProperties `object`: A Key-Value map of metadata about this shared flow revision.
  * lastModifiedAt `string`: Time at which this shared flow revision was most recently modified, in milliseconds since epoch.
  * name `string`: The resource ID of the parent shared flow.
  * policies `array`: A list of policy names included in this shared flow revision.
    * items `string`
  * resourceFiles [GoogleCloudApigeeV1ResourceFiles](#googlecloudapigeev1resourcefiles)
  * resources `array`: A list of the resources included in this shared flow revision formatted as "{type}://{name}".
    * items `string`
  * revision `string`: The resource ID of this revision.
  * sharedFlows `array`: A list of the shared flow names included in this shared flow revision.
    * items `string`
  * type `string`: The string "Application"

### GoogleCloudApigeeV1Stats
* GoogleCloudApigeeV1Stats `object`: This message type encapsulates a stats response.
  * environments `array`: This field contains a list of query results on environment level.
    * items [GoogleCloudApigeeV1StatsEnvironmentStats](#googlecloudapigeev1statsenvironmentstats)
  * hosts `array`: This field contains a list of query results grouped by host.
    * items [GoogleCloudApigeeV1StatsHostStats](#googlecloudapigeev1statshoststats)
  * metaData [GoogleCloudApigeeV1Metadata](#googlecloudapigeev1metadata)

### GoogleCloudApigeeV1StatsEnvironmentStats
* GoogleCloudApigeeV1StatsEnvironmentStats `object`: This message type encapsulates the environment wrapper: "environments": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.52056245E8" ] } ], "name": "prod" } ]
  * dimensions `array`: This field contains the list of metrics grouped under dimensions.
    * items [GoogleCloudApigeeV1DimensionMetric](#googlecloudapigeev1dimensionmetric)
  * metrics `array`: In the final response, only one of the following fields will be present based on the dimensions provided. If no dimensions are provided, then only a top level metrics is provided. If dimensions are included, then there will be a top level dimensions field under environments which will contain metrics values and the dimension name. Example: "environments": [ { "dimensions": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.14049521E8" ] } ], "name": "nit_proxy" } ], "name": "prod" } ] OR "environments": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.19026331E8" ] } ], "name": "prod" } ] This field contains the list of metric values.
    * items [GoogleCloudApigeeV1Metric](#googlecloudapigeev1metric)
  * name `string`

### GoogleCloudApigeeV1StatsHostStats
* GoogleCloudApigeeV1StatsHostStats `object`: This message type encapsulates the hostname wrapper: "hosts": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.52056245E8" ] } ], "name": "example.com" } ]
  * dimensions `array`: This field contains the list of metrics grouped under dimensions.
    * items [GoogleCloudApigeeV1DimensionMetric](#googlecloudapigeev1dimensionmetric)
  * metrics `array`: In the final response, only one of the following fields will be present based on the dimensions provided. If no dimensions are provided, then only a top level metrics is provided. If dimensions are included, then there will be a top level dimensions field under hostnames which will contain metrics values and the dimension name. Example: "hosts": [ { "dimensions": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.14049521E8" ] } ], "name": "nit_proxy" } ], "name": "example.com" } ] OR "hosts": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.19026331E8" ] } ], "name": "example.com" } ] This field contains the list of metric values.
    * items [GoogleCloudApigeeV1Metric](#googlecloudapigeev1metric)
  * name `string`: This field contains the hostname used in query.

### GoogleCloudApigeeV1Subscription
* GoogleCloudApigeeV1Subscription `object`: Pub/Sub subscription of an environment.
  * name `string`: Full name of the Pub/Sub subcription. Use the following structure in your request: `subscription "projects/foo/subscription/bar"`

### GoogleCloudApigeeV1SyncAuthorization
* GoogleCloudApigeeV1SyncAuthorization `object`
  * etag `string`: Entity tag (ETag) used for optimistic concurrency control as a way to help prevent simultaneous updates from overwriting each other. For example, when you call [getSyncAuthorization](organizations/getSyncAuthorization) an ETag is returned in the response. Pass that ETag when calling the [setSyncAuthorization](organizations/setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. **Note**: We strongly recommend that you use the ETag in the read-modify-write cycle to avoid race conditions.
  * identities `array`: Required. Array of service accounts to grant access to control plane resources, each specified using the following format: `serviceAccount:` service-account-name. The service-account-name is formatted like an email address. For example: `my-synchronizer-manager-service_account@my_project_id.iam.gserviceaccount.com` You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one. The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts).
    * items `string`

### GoogleCloudApigeeV1TargetServer
* GoogleCloudApigeeV1TargetServer `object`: TargetServer configuration. TargetServers are used to decouple a proxy's TargetEndpoint HTTPTargetConnections from concrete URLs for backend services.
  * host `string`: Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123.
  * description `string`: Optional. A human-readable description of this TargetServer.
  * isEnabled `boolean`: Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.
  * name `string`: Required. The resource id of this target server. Values must match the regular expression 
  * port `integer`: Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.
  * sSLInfo [GoogleCloudApigeeV1TlsInfo](#googlecloudapigeev1tlsinfo)

### GoogleCloudApigeeV1TargetServerConfig
* GoogleCloudApigeeV1TargetServerConfig `object`
  * host `string`: Host name of the target server.
  * name `string`: Target server revision name in the following format: `organizations/{org}/environments/{env}/targetservers/{targetserver}/revisions/{rev}`
  * port `integer`: Port number for the target server.
  * tlsInfo [GoogleCloudApigeeV1TlsInfoConfig](#googlecloudapigeev1tlsinfoconfig)

### GoogleCloudApigeeV1TestDatastoreResponse
* GoogleCloudApigeeV1TestDatastoreResponse `object`: The response for TestDatastore
  * error `string`: Output only. Error message of test connection failure
  * state `string`: Output only. It could be `completed` or `failed`

### GoogleCloudApigeeV1TlsInfo
* GoogleCloudApigeeV1TlsInfo `object`: TLS configuration information for VirtualHosts and TargetServers.
  * ciphers `array`: The SSL/TLS cipher suites to be used. Must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites
    * items `string`
  * clientAuthEnabled `boolean`: Optional. Enables two-way TLS.
  * commonName [GoogleCloudApigeeV1TlsInfoCommonName](#googlecloudapigeev1tlsinfocommonname)
  * enabled `boolean`: Required. Enables TLS. If false, neither one-way nor two-way TLS will be enabled.
  * ignoreValidationErrors `boolean`: If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.
  * keyAlias `string`: Required if `client_auth_enabled` is true. The resource ID for the alias containing the private key and cert.
  * keyStore `string`: Required if `client_auth_enabled` is true. The resource ID of the keystore. References not yet supported.
  * protocols `array`: The TLS versioins to be used.
    * items `string`
  * trustStore `string`: The resource ID of the truststore. References not yet supported.

### GoogleCloudApigeeV1TlsInfoCommonName
* GoogleCloudApigeeV1TlsInfoCommonName `object`
  * value `string`: The TLS Common Name string of the certificate.
  * wildcardMatch `boolean`: Indicates whether the cert should be matched against as a wildcard cert.

### GoogleCloudApigeeV1TlsInfoConfig
* GoogleCloudApigeeV1TlsInfoConfig `object`
  * ciphers `array`: List of ciphers that are granted access.
    * items `string`
  * clientAuthEnabled `boolean`: Flag that specifies whether client-side authentication is enabled for the target server. Enables two-way TLS.
  * commonName [GoogleCloudApigeeV1CommonNameConfig](#googlecloudapigeev1commonnameconfig)
  * enabled `boolean`: Flag that specifies whether one-way TLS is enabled. Set to `true` to enable one-way TLS.
  * ignoreValidationErrors `boolean`: Flag that specifies whether to ignore TLS certificate validation errors. Set to `true` to ignore errors.
  * keyAlias `string`: Name of the alias used for client-side authentication in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`
  * keyAliasReference [GoogleCloudApigeeV1KeyAliasReference](#googlecloudapigeev1keyaliasreference)
  * protocols `array`: List of TLS protocols that are granted access.
    * items `string`
  * trustStore `string`: Name of the keystore or keystore reference containing trusted certificates for the server in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` or `organizations/{org}/environments/{env}/references/{reference}`

### GoogleCloudApigeeV1UpdateError
* GoogleCloudApigeeV1UpdateError `object`: Details on why a resource update failed in the runtime.
  * code `string` (values: OK, CANCELLED, UNKNOWN, INVALID_ARGUMENT, DEADLINE_EXCEEDED, NOT_FOUND, ALREADY_EXISTS, PERMISSION_DENIED, UNAUTHENTICATED, RESOURCE_EXHAUSTED, FAILED_PRECONDITION, ABORTED, OUT_OF_RANGE, UNIMPLEMENTED, INTERNAL, UNAVAILABLE, DATA_LOSS): Status code.
  * message `string`: User-friendly error message.
  * resource `string`: The sub resource specific to this error (e.g. a proxy deployed within the EnvironmentConfig). If empty the error refers to the top level resource.
  * type `string`: A string that uniquely identifies the type of error. This provides a more reliable means to deduplicate errors across revisions and instances.

### GoogleIamV1AuditConfig
* GoogleIamV1AuditConfig `object`: Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [GoogleIamV1AuditLogConfig](#googleiamv1auditlogconfig)
  * service `string`: Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.

### GoogleIamV1AuditLogConfig
* GoogleIamV1AuditLogConfig `object`: Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
    * items `string`
  * logType `string` (values: LOG_TYPE_UNSPECIFIED, ADMIN_READ, DATA_WRITE, DATA_READ): The log type that this config enables.

### GoogleIamV1Binding
* GoogleIamV1Binding `object`: Associates `members` with a `role`.
  * condition [GoogleTypeExpr](#googletypeexpr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### GoogleIamV1Policy
* GoogleIamV1Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [GoogleIamV1AuditConfig](#googleiamv1auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [GoogleIamV1Binding](#googleiamv1binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### GoogleIamV1SetIamPolicyRequest
* GoogleIamV1SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [GoogleIamV1Policy](#googleiamv1policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`

### GoogleIamV1TestIamPermissionsRequest
* GoogleIamV1TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### GoogleIamV1TestIamPermissionsResponse
* GoogleIamV1TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

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

### GoogleRpcPreconditionFailure
* GoogleRpcPreconditionFailure `object`: Describes what preconditions have failed. For example, if an RPC failed because it required the Terms of Service to be acknowledged, it could list the terms of service violation in the PreconditionFailure message.
  * violations `array`: Describes all precondition violations.
    * items [GoogleRpcPreconditionFailureViolation](#googlerpcpreconditionfailureviolation)

### GoogleRpcPreconditionFailureViolation
* GoogleRpcPreconditionFailureViolation `object`: A message type used to describe a single precondition failure.
  * description `string`: A description of how the precondition failed. Developers can use this description to understand how to fix the failure. For example: "Terms of service not accepted".
  * subject `string`: The subject, relative to the type, that failed. For example, "google.com/cloud" relative to the "TOS" type would indicate which terms of service is being referenced.
  * type `string`: The type of PreconditionFailure. We recommend using a service-specific enum type to define the supported precondition violation subjects. For example, "TOS" for "Terms of Service violation".

### GoogleRpcStatus
* GoogleRpcStatus `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### GoogleTypeExpr
* GoogleTypeExpr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.


