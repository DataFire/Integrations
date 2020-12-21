# @datafire/google_run

Client library for Cloud Run Admin API

## Installation and Usage
```bash
npm install --save @datafire/google_run
```
```js
let google_run = require('@datafire/google_run').create({
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

Deploy and manage user provided container images that scale automatically based on HTTP traffic.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_run.oauthCallback({
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
google_run.oauthRefresh(null, context)
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

### run.namespaces.domainmappings.delete
Rpc to delete a domain mapping.


```js
google_run.run.namespaces.domainmappings.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the domain mapping being deleted. If needed, replace {namespace_id} with the project ID.
  * apiVersion `string`: Cloud Run currently ignores this parameter.
  * kind `string`: Cloud Run currently ignores this parameter.
  * orphanDependents `boolean`: Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
  * propagationPolicy `string`: Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
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
* output [Empty](#empty)

### run.namespaces.domainmappings.get
Rpc to get information about a domain mapping.


```js
google_run.run.namespaces.domainmappings.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the domain mapping being retrieved. If needed, replace {namespace_id} with the project ID.
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
* output [DomainMapping](#domainmapping)

### run.namespaces.authorizeddomains.list
RPC to list authorized domains.


```js
google_run.run.namespaces.authorizeddomains.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Name of the parent Application resource. Example: `apps/myapp`.
  * pageSize `integer`: Maximum results to return per page.
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListAuthorizedDomainsResponse](#listauthorizeddomainsresponse)

### run.namespaces.domainmappings.list
Rpc to list domain mappings.


```js
google_run.run.namespaces.domainmappings.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the domain mappings should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListDomainMappingsResponse](#listdomainmappingsresponse)

### run.namespaces.domainmappings.create
Creates a new domain mapping.


```js
google_run.run.namespaces.domainmappings.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number in which this domain mapping should be created.
  * body [DomainMapping](#domainmapping)
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
* output [DomainMapping](#domainmapping)

### run.namespaces.triggers.delete
Rpc to delete a trigger.


```js
google_run.run.namespaces.triggers.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the trigger being deleted. If needed, replace {namespace_id} with the project ID.
  * apiVersion `string`: Cloud Run currently ignores this parameter.
  * kind `string`: Cloud Run currently ignores this parameter.
  * propagationPolicy `string`: Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
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
* output [Empty](#empty)

### run.namespaces.triggers.get
Rpc to get information about a trigger.


```js
google_run.run.namespaces.triggers.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the trigger being retrieved. If needed, replace {namespace_id} with the project ID.
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
* output [Trigger](#trigger)

### run.namespaces.triggers.list
Rpc to list triggers.


```js
google_run.run.namespaces.triggers.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the triggers should be listed.
  * continue `string`: Optional. Encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListTriggersResponse](#listtriggersresponse)

### run.namespaces.triggers.create
Creates a new trigger.


```js
google_run.run.namespaces.triggers.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number in which this trigger should be created.
  * body [Trigger](#trigger)
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
* output [Trigger](#trigger)

### run.namespaces.cloudstoragesources.delete
Rpc to delete a cloudstoragesource.


```js
google_run.run.namespaces.cloudstoragesources.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the cloudstoragesource being deleted. If needed, replace {namespace_id} with the project ID.
  * apiVersion `string`: Cloud Run currently ignores this parameter.
  * kind `string`: Cloud Run currently ignores this parameter.
  * propagationPolicy `string`: Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
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
* output [Empty](#empty)

### run.namespaces.cloudstoragesources.get
Rpc to get information about a cloudstoragesource.


```js
google_run.run.namespaces.cloudstoragesources.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the cloudstoragesource being retrieved. If needed, replace {namespace_id} with the project ID.
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
* output [CloudStorageSource](#cloudstoragesource)

### run.namespaces.cloudstoragesources.replaceCloudStorageSource
Rpc to replace a cloudstoragesource. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.


```js
google_run.run.namespaces.cloudstoragesources.replaceCloudStorageSource({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the cloudstoragesource being retrieved. If needed, replace {namespace_id} with the project ID.
  * body [CloudStorageSource](#cloudstoragesource)
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
* output [CloudStorageSource](#cloudstoragesource)

### run.namespaces.cloudauditlogssources.list
Rpc to list cloudauditlogssources.


```js
google_run.run.namespaces.cloudauditlogssources.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the cloudauditlogssources should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListCloudAuditLogsSourcesResponse](#listcloudauditlogssourcesresponse)

### run.namespaces.cloudauditlogssources.create
Creates a new cloudauditlogssource.


```js
google_run.run.namespaces.cloudauditlogssources.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number in which this cloudauditlogssource should be created.
  * body [CloudAuditLogsSource](#cloudauditlogssource)
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
* output [CloudAuditLogsSource](#cloudauditlogssource)

### run.namespaces.cloudpubsubsources.list
Rpc to list cloudpubsubsources.


```js
google_run.run.namespaces.cloudpubsubsources.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the cloudpubsubsources should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListCloudPubSubSourcesResponse](#listcloudpubsubsourcesresponse)

### run.namespaces.cloudpubsubsources.create
Creates a new cloudpubsubsource.


```js
google_run.run.namespaces.cloudpubsubsources.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number in which this cloudpubsubsource should be created.
  * body [CloudPubSubSource](#cloudpubsubsource)
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
* output [CloudPubSubSource](#cloudpubsubsource)

### run.namespaces.cloudschedulersources.list
Rpc to list cloudschedulersources.


```js
google_run.run.namespaces.cloudschedulersources.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project ID or project number from which the cloudschedulersources should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListCloudSchedulerSourcesResponse](#listcloudschedulersourcesresponse)

### run.namespaces.cloudschedulersources.create
Creates a new cloudschedulersource.


```js
google_run.run.namespaces.cloudschedulersources.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project ID or project number in which this cloudschedulersource should be created.
  * body [CloudSchedulerSource](#cloudschedulersource)
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
* output [CloudSchedulerSource](#cloudschedulersource)

### run.namespaces.cloudstoragesources.list
Rpc to list cloudstoragesources.


```js
google_run.run.namespaces.cloudstoragesources.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project ID or project number from which the cloudstoragesources should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListCloudStorageSourcesResponse](#listcloudstoragesourcesresponse)

### run.namespaces.cloudstoragesources.create
Creates a new cloudstoragesource.


```js
google_run.run.namespaces.cloudstoragesources.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project ID or project number in which this cloudstoragesource should be created.
  * body [CloudStorageSource](#cloudstoragesource)
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
* output [CloudStorageSource](#cloudstoragesource)

### run.namespaces.services.delete
Rpc to delete a service. This will cause the Service to stop serving traffic and will delete the child entities like Routes, Configurations and Revisions.


```js
google_run.run.namespaces.services.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the service being deleted. If needed, replace {namespace_id} with the project ID.
  * apiVersion `string`: Cloud Run currently ignores this parameter.
  * kind `string`: Cloud Run currently ignores this parameter.
  * orphanDependents `boolean`: Deprecated. Specifies the cascade behavior on delete. Cloud Run only supports cascading behavior, so this must be false. This attribute is deprecated, and is now replaced with PropagationPolicy See https://github.com/kubernetes/kubernetes/issues/46659 for more info.
  * propagationPolicy `string`: Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
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
* output [Empty](#empty)

### run.namespaces.services.get
Rpc to get information about a service.


```js
google_run.run.namespaces.services.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the service being retrieved. If needed, replace {namespace_id} with the project ID.
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
* output [Service](#service)

### run.namespaces.services.replaceService
Rpc to replace a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.


```js
google_run.run.namespaces.services.replaceService({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the service being replaced. If needed, replace {namespace_id} with the project ID.
  * body [Service](#service)
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
* output [Service](#service)

### run.namespaces.configurations.list
Rpc to list configurations.


```js
google_run.run.namespaces.configurations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the configurations should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListConfigurationsResponse](#listconfigurationsresponse)

### run.namespaces.revisions.list
Rpc to list revisions.


```js
google_run.run.namespaces.revisions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the revisions should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListRevisionsResponse](#listrevisionsresponse)

### run.namespaces.routes.list
Rpc to list routes.


```js
google_run.run.namespaces.routes.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the routes should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListRoutesResponse](#listroutesresponse)

### run.namespaces.services.list
Rpc to list services.


```js
google_run.run.namespaces.services.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the services should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListServicesResponse](#listservicesresponse)

### run.namespaces.services.create
Rpc to create a service.


```js
google_run.run.namespaces.services.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number in which this service should be created.
  * body [Service](#service)
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
* output [Service](#service)

### run.projects.locations.triggers.delete
Rpc to delete a trigger.


```js
google_run.run.projects.locations.triggers.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the trigger being deleted. If needed, replace {namespace_id} with the project ID.
  * apiVersion `string`: Cloud Run currently ignores this parameter.
  * kind `string`: Cloud Run currently ignores this parameter.
  * propagationPolicy `string`: Specifies the propagation policy of delete. Cloud Run currently ignores this setting, and deletes in the background. Please see kubernetes.io/docs/concepts/workloads/controllers/garbage-collection/ for more information.
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
* output [Empty](#empty)

### run.projects.locations.triggers.get
Rpc to get information about a trigger.


```js
google_run.run.projects.locations.triggers.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the trigger being retrieved. If needed, replace {namespace_id} with the project ID.
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
* output [Trigger](#trigger)

### run.projects.locations.services.replaceService
Rpc to replace a service. Only the spec and metadata labels and annotations are modifiable. After the Update request, Cloud Run will work to make the 'status' match the requested 'spec'. May provide metadata.resourceVersion to enforce update from last read for optimistic concurrency control.


```js
google_run.run.projects.locations.services.replaceService({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the service being replaced. If needed, replace {namespace_id} with the project ID.
  * body [Service](#service)
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
* output [Service](#service)

### run.projects.locations.list
Lists information about the supported locations for this service.


```js
google_run.run.projects.locations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource that owns the locations collection, if applicable.
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
* output [ListLocationsResponse](#listlocationsresponse)

### run.projects.locations.authorizeddomains.list
RPC to list authorized domains.


```js
google_run.run.projects.locations.authorizeddomains.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Name of the parent Application resource. Example: `apps/myapp`.
  * pageSize `integer`: Maximum results to return per page.
  * pageToken `string`: Continuation token for fetching the next page of results.
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
* output [ListAuthorizedDomainsResponse](#listauthorizeddomainsresponse)

### run.projects.locations.cloudauditlogssources.list
Rpc to list cloudauditlogssources.


```js
google_run.run.projects.locations.cloudauditlogssources.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the cloudauditlogssources should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListCloudAuditLogsSourcesResponse](#listcloudauditlogssourcesresponse)

### run.projects.locations.cloudauditlogssources.create
Creates a new cloudauditlogssource.


```js
google_run.run.projects.locations.cloudauditlogssources.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number in which this cloudauditlogssource should be created.
  * body [CloudAuditLogsSource](#cloudauditlogssource)
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
* output [CloudAuditLogsSource](#cloudauditlogssource)

### run.projects.locations.cloudpubsubsources.list
Rpc to list cloudpubsubsources.


```js
google_run.run.projects.locations.cloudpubsubsources.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the cloudpubsubsources should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListCloudPubSubSourcesResponse](#listcloudpubsubsourcesresponse)

### run.projects.locations.cloudpubsubsources.create
Creates a new cloudpubsubsource.


```js
google_run.run.projects.locations.cloudpubsubsources.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number in which this cloudpubsubsource should be created.
  * body [CloudPubSubSource](#cloudpubsubsource)
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
* output [CloudPubSubSource](#cloudpubsubsource)

### run.projects.locations.cloudschedulersources.list
Rpc to list cloudschedulersources.


```js
google_run.run.projects.locations.cloudschedulersources.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project ID or project number from which the cloudschedulersources should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListCloudSchedulerSourcesResponse](#listcloudschedulersourcesresponse)

### run.projects.locations.cloudschedulersources.create
Creates a new cloudschedulersource.


```js
google_run.run.projects.locations.cloudschedulersources.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project ID or project number in which this cloudschedulersource should be created.
  * body [CloudSchedulerSource](#cloudschedulersource)
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
* output [CloudSchedulerSource](#cloudschedulersource)

### run.projects.locations.cloudstoragesources.list
Rpc to list cloudstoragesources.


```js
google_run.run.projects.locations.cloudstoragesources.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project ID or project number from which the cloudstoragesources should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListCloudStorageSourcesResponse](#listcloudstoragesourcesresponse)

### run.projects.locations.cloudstoragesources.create
Creates a new cloudstoragesource.


```js
google_run.run.projects.locations.cloudstoragesources.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The project ID or project number in which this cloudstoragesource should be created.
  * body [CloudStorageSource](#cloudstoragesource)
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
* output [CloudStorageSource](#cloudstoragesource)

### run.projects.locations.configurations.list
Rpc to list configurations.


```js
google_run.run.projects.locations.configurations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the configurations should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListConfigurationsResponse](#listconfigurationsresponse)

### run.projects.locations.domainmappings.list
Rpc to list domain mappings.


```js
google_run.run.projects.locations.domainmappings.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the domain mappings should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListDomainMappingsResponse](#listdomainmappingsresponse)

### run.projects.locations.domainmappings.create
Creates a new domain mapping.


```js
google_run.run.projects.locations.domainmappings.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number in which this domain mapping should be created.
  * body [DomainMapping](#domainmapping)
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
* output [DomainMapping](#domainmapping)

### run.projects.locations.revisions.list
Rpc to list revisions.


```js
google_run.run.projects.locations.revisions.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the revisions should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListRevisionsResponse](#listrevisionsresponse)

### run.projects.locations.routes.list
Rpc to list routes.


```js
google_run.run.projects.locations.routes.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the routes should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListRoutesResponse](#listroutesresponse)

### run.projects.locations.services.list
Rpc to list services.


```js
google_run.run.projects.locations.services.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the services should be listed.
  * continue `string`: Optional encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListServicesResponse](#listservicesresponse)

### run.projects.locations.services.create
Rpc to create a service.


```js
google_run.run.projects.locations.services.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number in which this service should be created.
  * body [Service](#service)
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
* output [Service](#service)

### run.projects.locations.triggers.list
Rpc to list triggers.


```js
google_run.run.projects.locations.triggers.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number from which the triggers should be listed.
  * continue `string`: Optional. Encoded string to continue paging.
  * fieldSelector `string`: Allows to filter resources based on a specific value for a field name. Send this in a query string format. i.e. 'metadata.name%3Dlorem'. Not currently used by Cloud Run.
  * includeUninitialized `boolean`: Not currently used by Cloud Run.
  * labelSelector `string`: Allows to filter resources based on a label. Supported operations are =, !=, exists, in, and notIn.
  * limit `integer`: The maximum number of records that should be returned.
  * resourceVersion `string`: The baseline resource version from which the list or watch operation should start. Not currently used by Cloud Run.
  * watch `boolean`: Flag that indicates that the client expects to watch this resource as well. Not currently used by Cloud Run.
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
* output [ListTriggersResponse](#listtriggersresponse)

### run.projects.locations.triggers.create
Creates a new trigger.


```js
google_run.run.projects.locations.triggers.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The project ID or project number in which this trigger should be created.
  * body [Trigger](#trigger)
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
* output [Trigger](#trigger)

### run.projects.locations.services.getIamPolicy
Get the IAM Access Control policy currently in effect for the given Cloud Run service. This result does not include any inherited policies.


```js
google_run.run.projects.locations.services.getIamPolicy({
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
* output [Policy](#policy)

### run.projects.locations.services.setIamPolicy
Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.


```js
google_run.run.projects.locations.services.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
  * body [SetIamPolicyRequest](#setiampolicyrequest)
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
* output [Policy](#policy)

### run.projects.locations.services.testIamPermissions
Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.


```js
google_run.run.projects.locations.services.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
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
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### Addressable
* Addressable `object`: Information for connecting over HTTP(s).
  * hostname `string`: Deprecated - use url instead.
  * url `string`

### AuditConfig
* AuditConfig `object`: Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.
  * auditLogConfigs `array`: The configuration for logging of each type of permission.
    * items [AuditLogConfig](#auditlogconfig)
  * service `string`: Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.

### AuditLogConfig
* AuditLogConfig `object`: Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging.
  * exemptedMembers `array`: Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.
    * items `string`
  * logType `string` (values: LOG_TYPE_UNSPECIFIED, ADMIN_READ, DATA_WRITE, DATA_READ): The log type that this config enables.

### AuthorizedDomain
* AuthorizedDomain `object`: A domain that a user has been authorized to administer. To authorize use of a domain, verify ownership via [Webmaster Central](https://www.google.com/webmasters/verification/home).
  * id `string`: Relative name of the domain authorized for use. Example: `example.com`.
  * name `string`: Read only. Full path to the `AuthorizedDomain` resource in the API. Example: `apps/myapp/authorizedDomains/example.com`.

### Binding
* Binding `object`: Associates `members` with a `role`.
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### Capabilities
* Capabilities `object`: Adds and removes POSIX capabilities from running containers.
  * add `array`: Added capabilities +optional
    * items `string`
  * drop `array`: Removed capabilities +optional
    * items `string`

### CloudAuditLogsSource
* CloudAuditLogsSource `object`
  * apiVersion `string`: The API version for this call such as "events.cloud.google.com/v1alpha1".
  * kind `string`: The kind of resource, in this case "CloudAuditLogsSource".
  * metadata [ObjectMeta](#objectmeta)
  * spec [CloudAuditLogsSourceSpec](#cloudauditlogssourcespec)
  * status [CloudAuditLogsSourceStatus](#cloudauditlogssourcestatus)

### CloudAuditLogsSourceSpec
* CloudAuditLogsSourceSpec `object`: The desired state of the CloudAuditLogsSource.
  * ceOverrides [CloudEventOverrides](#cloudeventoverrides)
  * methodName `string`: Required. The method name at the service API. This must match "methodName" in Cloud Audit Logs. Regex or Wildcards (*) are not supported. Example: "google.cloud.bigquery.job.create".
  * resourceName `string`: Optional. The resource specification. This must match "methodName" in Cloud Audit Logs. Regex or Wildcards (*) are not supported. Example: "projects/my-project/jobs/foo".
  * serviceAccountName `string`: Optional. Email address of the IAM service account associated with the source. The service account represents the identity of the source, and determines what permissions the source has. If not provided, the source will use the project's default service account.
  * serviceName `string`: Required. The GCP service name. This must match "serviceName" in Cloud Audit Logs. Regex or Wildcards (*) are not supported. Example: "bigquery.googleapis.com".
  * sink [Destination](#destination)

### CloudAuditLogsSourceStatus
* CloudAuditLogsSourceStatus `object`: CloudAuditLogsSourceStatus represents the current state of a CloudAuditLogsSource.
  * conditions `array`: Array of observed CloudAuditLogsSourceConditions, indicating the current state of the CloudAuditLogsSource.
    * items [Condition](#condition)
  * observedGeneration `integer`: ObservedGeneration is the 'Generation' of the CloudAuditLogsSource that was last processed by the controller.
  * sinkUri `string`: SinkURI is the current active sink URI that has been configured for the Source. +optional

### CloudEventOverrides
* CloudEventOverrides `object`: CloudEventOverrides defines arguments for a Source that control the output format of the CloudEvents produced by the Source.
  * extensions `object`: Extensions specify what attribute are added or overridden on the outbound event. Each `Extensions` key-value pair are set on the event as an attribute extension independently. +optional

### CloudPubSubSource
* CloudPubSubSource `object`
  * apiVersion `string`: The API version for this call such as "events.cloud.google.com/v1alpha1".
  * kind `string`: The kind of resource, in this case "CloudPubSubSource".
  * metadata [ObjectMeta](#objectmeta)
  * spec [CloudPubSubSourceSpec](#cloudpubsubsourcespec)
  * status [CloudPubSubSourceStatus](#cloudpubsubsourcestatus)

### CloudPubSubSourceSpec
* CloudPubSubSourceSpec `object`: The desired state of the CloudPubSubSource.
  * ackDeadline `string`: AckDeadline is the default maximum time after a subscriber receives a message before the subscriber should acknowledge the message. Defaults to 30 seconds ('30s'). +optional
  * ceOverrides [CloudEventOverrides](#cloudeventoverrides)
  * project `string`: Project is the ID of the Google Cloud Project that the CloudPubSubSource Topic exists in. If omitted, defaults to same as the cluster. +optional
  * pubsubSecret [SecretKeySelector](#secretkeyselector)
  * retainAckedMessages `boolean`: RetainAckedMessages defines whether to retain acknowledged messages. If true, acknowledged messages will not be expunged until they fall out of the RetentionDuration window.
  * retentionDuration `string`: RetentionDuration defines how long to retain messages in backlog, from the time of publish. If RetainAckedMessages is true, this duration affects the retention of acknowledged messages, otherwise only unacknowledged messages are retained. Cannot be longer than 7 days or shorter than 10 minutes. Defaults to 7 days ('7d'). +optional
  * secret [SecretKeySelector](#secretkeyselector)
  * sink [Destination](#destination)
  * topic `string`: Topic is the ID of the CloudPubSubSource Topic to Subscribe to. It must be in the form of the unique identifier within the project, not the entire name. E.g. it must be 'laconia', not 'projects/my-proj/topics/laconia'.

### CloudPubSubSourceStatus
* CloudPubSubSourceStatus `object`: CloudPubSubSourceStatus represents the current state of a CloudPubSubSource.
  * conditions `array`: Array of observed CloudPubSubSourceConditions, indicating the current state of the CloudPubSubSource.
    * items [Condition](#condition)
  * observedGeneration `integer`: ObservedGeneration is the 'Generation' of the CloudPubSubSource that was last processed by the controller.
  * sinkUri `string`: SinkURI is the current active sink URI that has been configured for the Source. +optional

### CloudSchedulerSource
* CloudSchedulerSource `object`: The CloudSchedulerSource resource.
  * apiVersion `string`: The API version for this call such as "events.cloud.google.com/v1alpha1".
  * kind `string`: The kind of resource, in this case "CloudSchedulerSource".
  * metadata [ObjectMeta](#objectmeta)
  * spec [CloudSchedulerSourceSpec](#cloudschedulersourcespec)
  * status [CloudSchedulerSourceStatus](#cloudschedulersourcestatus)

### CloudSchedulerSourceSpec
* CloudSchedulerSourceSpec `object`: The desired state of the CloudSchedulerSource.
  * ceOverrides [CloudEventOverrides](#cloudeventoverrides)
  * data `string`: Data to send in the payload of the Event.
  * location `string`: Location to create the Scheduler job in.
  * project `string`: Project is the ID of the Google Cloud Project that the CloudPubSubSource Topic exists in. If omitted, defaults to same as the cluster.
  * pubsubSecret [SecretKeySelector](#secretkeyselector)
  * schedule `string`: Schedule in cron format, for example: "* * * * *" would be run every minute.
  * secret [SecretKeySelector](#secretkeyselector)
  * sink [Destination](#destination)

### CloudSchedulerSourceStatus
* CloudSchedulerSourceStatus `object`: CloudSchedulerSourceStatus represents the current state of a CloudSchedulerSource.
  * conditions `array`: Array of observed CloudSchedulerSourceConditions, indicating the current state of the CloudSchedulerSource.
    * items [Condition](#condition)
  * observedGeneration `integer`: ObservedGeneration is the 'Generation' of the CloudSchedulerSource that was last processed by the controller.
  * sinkUri `string`: SinkURI is the current active sink URI that has been configured for the Source.

### CloudStorageSource
* CloudStorageSource `object`: The CloudStorageSource resource.
  * apiVersion `string`: The API version for this call such as "events.cloud.google.com/v1alpha1".
  * kind `string`: The kind of resource, in this case "CloudStorageSource".
  * metadata [ObjectMeta](#objectmeta)
  * spec [CloudStorageSourceSpec](#cloudstoragesourcespec)
  * status [CloudStorageSourceStatus](#cloudstoragesourcestatus)

### CloudStorageSourceSpec
* CloudStorageSourceSpec `object`: The desired state of the CloudStorageSource.
  * bucket `string`: Bucket to subscribe to.
  * ceOverrides [CloudEventOverrides](#cloudeventoverrides)
  * eventTypes `array`: EventTypes to subscribe to. If unspecified, then subscribe to all events.
    * items `string`
  * objectNamePrefix `string`: ObjectNamePrefix limits the notifications to objects with this prefix.
  * payloadFormat `string`: PayloadFormat specifies the contents of the message payload. See https://cloud.google.com/storage/docs/pubsub-notifications#payload.
  * project `string`: Project is the ID of the Google Cloud Project that the PubSub Topic exists in. If omitted, defaults to same as the cluster.
  * pubsubSecret [SecretKeySelector](#secretkeyselector)
  * secret [SecretKeySelector](#secretkeyselector)
  * serviceAccountName `string`: ServiceAccountName holds the name of the Kubernetes service account as which the underlying K8s resources should be run. If unspecified this will default to the "default" service account for the namespace in which the GCS exists.
  * sink [Destination](#destination)

### CloudStorageSourceStatus
* CloudStorageSourceStatus `object`: CloudStorageSourceStatus represents the current state of a CloudStorageSource.
  * conditions `array`: Array of observed CloudStorageSourceConditions, indicating the current state of the CloudStorageSource.
    * items [Condition](#condition)
  * observedGeneration `integer`: ObservedGeneration is the 'Generation' of the CloudStorageSource that was last processed by the controller.
  * sinkUri `string`: SinkURI is the current active sink URI that has been configured for the Source.

### Condition
* Condition `object`: Condition defines a generic condition for a Resource
  * lastTransitionTime `string`: Optional. Last time the condition transitioned from one status to another.
  * message `string`: Optional. Human readable message indicating details about the current status.
  * reason `string`: Optional. One-word CamelCase reason for the condition's last transition.
  * severity `string`: Optional. How to interpret failures of this condition, one of Error, Warning, Info
  * status `string`: Status of the condition, one of True, False, Unknown.
  * type `string`: type is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting Types common to all resources include: * "Ready": True when the Resource is ready.

### ConfigMapEnvSource
* ConfigMapEnvSource `object`: ConfigMapEnvSource selects a ConfigMap to populate the environment variables with. The contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.
  * localObjectReference [LocalObjectReference](#localobjectreference)
  * name `string`: Cloud Run fully managed: not supported Cloud Run for Anthos: supported The ConfigMap to select from.
  * optional `boolean`: Cloud Run fully managed: not supported Cloud Run for Anthos: supported Specify whether the ConfigMap must be defined +optional

### ConfigMapKeySelector
* ConfigMapKeySelector `object`: Cloud Run fully managed: not supported Cloud Run on GKE: supported Selects a key from a ConfigMap.
  * key `string`: Cloud Run fully managed: not supported Cloud Run on GKE: supported The key to select.
  * localObjectReference [LocalObjectReference](#localobjectreference)
  * name `string`: Cloud Run fully managed: not supported Cloud Run on GKE: supported The ConfigMap to select from.
  * optional `boolean`: Cloud Run fully managed: not supported Cloud Run on GKE: supported Specify whether the ConfigMap or its key must be defined +optional

### ConfigMapVolumeSource
* ConfigMapVolumeSource `object`: Adapts a ConfigMap into a volume. The contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths.
  * defaultMode `integer`: Mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * items `array`: If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional.
    * items [KeyToPath](#keytopath)
  * name `string`: Name of the config.
  * optional `boolean`: Specify whether the Secret or its keys must be defined.

### Configuration
* Configuration `object`: Configuration represents the "floating HEAD" of a linear history of Revisions, and optionally how the containers those revisions reference are built. Users create new Revisions by updating the Configuration's spec. The "latest created" revision's name is available under status, as is the "latest ready" revision's name. See also: https://github.com/knative/serving/blob/master/docs/spec/overview.md#configuration
  * apiVersion `string`: The API version for this call such as "serving.knative.dev/v1alpha1".
  * kind `string`: The kind of resource, in this case always "Configuration".
  * metadata [ObjectMeta](#objectmeta)
  * spec [ConfigurationSpec](#configurationspec)
  * status [ConfigurationStatus](#configurationstatus)

### ConfigurationCondition
* ConfigurationCondition `object`: ConfigurationCondition defines a readiness condition for a Configuration.
  * lastTransitionTime `string`: Last time the condition transitioned from one status to another. +optional
  * message `string`: Human-readable message indicating details about last transition. +optional
  * reason `string`: One-word CamelCase reason for the condition's last transition. +optional
  * severity `string`: How to interpret failures of this condition, one of Error, Warning, Info +optional
  * status `string`: Status of the condition, one of True, False, Unknown.
  * type `string`: ConfigurationConditionType is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting Types include:"Ready"

### ConfigurationSpec
* ConfigurationSpec `object`: ConfigurationSpec holds the desired state of the Configuration (from the client).
  * generation `integer`: Deprecated and not currently populated by Cloud Run. See metadata.generation instead, which is the sequence number containing the latest generation of the desired state. Read-only.
  * revisionTemplate [RevisionTemplate](#revisiontemplate)
  * template [RevisionTemplate](#revisiontemplate)

### ConfigurationStatus
* ConfigurationStatus `object`: ConfigurationStatus communicates the observed state of the Configuration (from the controller).
  * conditions `array`: Conditions communicates information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world.
    * items [ConfigurationCondition](#configurationcondition)
  * latestCreatedRevisionName `string`: LatestCreatedRevisionName is the last revision that was created from this Configuration. It might not be ready yet, for that use LatestReadyRevisionName.
  * latestReadyRevisionName `string`: LatestReadyRevisionName holds the name of the latest Revision stamped out from this Configuration that has had its "Ready" condition become "True".
  * observedGeneration `integer`: ObservedGeneration is the 'Generation' of the Configuration that was last processed by the controller. The observed generation is updated even if the controller failed to process the spec and create the Revision. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False.

### Container
* Container `object`: A single application container. This specifies both the container to run, the command to run in the container and the arguments to supply to it. Note that additional arguments may be supplied by the system to the container at runtime.
  * args `array`: Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell +optional
    * items `string`
  * command `array`: Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell +optional
    * items `string`
  * env `array`: List of environment variables to set in the container. Cannot be updated. +optional
    * items [EnvVar](#envvar)
  * envFrom `array`: List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated. +optional
    * items [EnvFromSource](#envfromsource)
  * image `string`: Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images
  * imagePullPolicy `string`: Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images +optional
  * lifecycle [Lifecycle](#lifecycle)
  * livenessProbe [Probe](#probe)
  * name `string`: Name of the container specified as a DNS_LABEL. Each container must have a unique name (DNS_LABEL). Cannot be updated.
  * ports `array`: List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated. +optional
    * items [ContainerPort](#containerport)
  * readinessProbe [Probe](#probe)
  * resources [ResourceRequirements](#resourcerequirements)
  * securityContext [SecurityContext](#securitycontext)
  * stdin `boolean`: Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false. +optional
  * stdinOnce `boolean`: Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false +optional
  * terminationMessagePath `string`: Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated. +optional
  * terminationMessagePolicy `string`: Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated. +optional
  * tty `boolean`: Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false. +optional
  * volumeDevices `array`: volumeDevices is the list of block devices to be used by the container. This is an alpha feature and may change in the future. +optional
    * items [VolumeDevice](#volumedevice)
  * volumeMounts `array`: Pod volumes to mount into the container's filesystem. Cannot be updated. +optional
    * items [VolumeMount](#volumemount)
  * workingDir `string`: Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated. +optional

### ContainerPort
* ContainerPort `object`: ContainerPort represents a network port in a single container.
  * containerPort `integer`: Number of port to expose on the pod's IP address. This must be a valid port number, 0 < x < 65536.
  * hostIP `string`: What host IP to bind the external port to. +optional
  * hostPort `integer`: Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. +optional
  * name `string`: If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. +optional
  * protocol `string`: Protocol for port. Must be UDP or TCP. Defaults to "TCP". +optional

### Destination
* Destination `object`
  * ref [ObjectReference](#objectreference)
  * uri `string`: URI is for direct URI Designations or used with the resulting URL from Addressable ObjectReference. If used with an ObjectReference, will be appended to the path of the resulting URL from the Addressable. + optional

### DomainMapping
* DomainMapping `object`: Resource to hold the state and status of a user's domain mapping. NOTE: This resource is currently in Beta.
  * apiVersion `string`: The API version for this call such as "domains.cloudrun.com/v1alpha1".
  * kind `string`: The kind of resource, in this case "DomainMapping".
  * metadata [ObjectMeta](#objectmeta)
  * spec [DomainMappingSpec](#domainmappingspec)
  * status [DomainMappingStatus](#domainmappingstatus)

### DomainMappingCondition
* DomainMappingCondition `object`: DomainMappingCondition contains state information for a DomainMapping.
  * lastTransitionTime `string`: Last time the condition transitioned from one status to another. +optional
  * message `string`: Human readable message indicating details about the current status. +optional
  * reason `string`: One-word CamelCase reason for the condition's current status. +optional
  * severity `string`: How to interpret failures of this condition, one of Error, Warning, Info +optional
  * status `string`: Status of the condition, one of True, False, Unknown.
  * type `string`: Type of domain mapping condition.

### DomainMappingSpec
* DomainMappingSpec `object`: The desired state of the Domain Mapping.
  * certificateMode `string` (values: CERTIFICATE_MODE_UNSPECIFIED, NONE, AUTOMATIC): The mode of the certificate.
  * forceOverride `boolean`: If set, the mapping will override any mapping set before this spec was set. It is recommended that the user leaves this empty to receive an error warning about a potential conflict and only set it once the respective UI has given such a warning.
  * routeName `string`: The name of the Knative Route that this DomainMapping applies to. The route must exist.

### DomainMappingStatus
* DomainMappingStatus `object`: The current state of the Domain Mapping.
  * conditions `array`: Array of observed DomainMappingConditions, indicating the current state of the DomainMapping.
    * items [DomainMappingCondition](#domainmappingcondition)
  * mappedRouteName `string`: The name of the route that the mapping currently points to.
  * observedGeneration `integer`: ObservedGeneration is the 'Generation' of the DomainMapping that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False.
  * resourceRecords `array`: The resource records required to configure this domain mapping. These records must be added to the domain's DNS configuration in order to serve the application via this domain mapping.
    * items [ResourceRecord](#resourcerecord)
  * url `string`: Cloud Run fully managed: not supported Cloud Run on GKE: supported Holds the URL that will serve the traffic of the DomainMapping. +optional

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### EnvFromSource
* EnvFromSource `object`: EnvFromSource represents the source of a set of ConfigMaps
  * configMapRef [ConfigMapEnvSource](#configmapenvsource)
  * prefix `string`: An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER. +optional
  * secretRef [SecretEnvSource](#secretenvsource)

### EnvVar
* EnvVar `object`: EnvVar represents an environment variable present in a Container.
  * name `string`: Name of the environment variable. Must be a C_IDENTIFIER.
  * value `string`: Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "". +optional
  * valueFrom [EnvVarSource](#envvarsource)

### EnvVarSource
* EnvVarSource `object`: Cloud Run fully managed: not supported Cloud Run on GKE: supported EnvVarSource represents a source for the value of an EnvVar.
  * configMapKeyRef [ConfigMapKeySelector](#configmapkeyselector)
  * secretKeyRef [SecretKeySelector](#secretkeyselector)

### ExecAction
* ExecAction `object`: ExecAction describes a "run in container" action.
  * command `array`: Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy. +optional
    * items `string`

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### HTTPGetAction
* HTTPGetAction `object`: HTTPGetAction describes an action based on HTTP Get requests.
  * host `string`: Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead. +optional
  * httpHeaders `array`: Custom headers to set in the request. HTTP allows repeated headers. +optional
    * items [HTTPHeader](#httpheader)
  * path `string`: Path to access on the HTTP server. +optional
  * port [IntOrString](#intorstring)
  * scheme `string`: Scheme to use for connecting to the host. Defaults to HTTP. +optional

### HTTPHeader
* HTTPHeader `object`: HTTPHeader describes a custom header to be used in HTTP probes
  * name `string`: The header field name
  * value `string`: The header field value

### Handler
* Handler `object`: Handler defines a specific action that should be taken
  * exec [ExecAction](#execaction)
  * httpGet [HTTPGetAction](#httpgetaction)
  * tcpSocket [TCPSocketAction](#tcpsocketaction)

### IntOrString
* IntOrString `object`: IntOrString is a type that can hold an int32 or a string. When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type. This allows you to have, for example, a JSON field that can accept a name or number.
  * intVal `integer`: The int value.
  * strVal `string`: The string value.
  * type `integer`: The type of the value.

### KeyToPath
* KeyToPath `object`: Maps a string key to a path within a volume.
  * key `string`: The key to project.
  * mode `integer`: Mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. +optional
  * path `string`: The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.

### Lifecycle
* Lifecycle `object`: Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.
  * postStart [Handler](#handler)
  * preStop [Handler](#handler)

### ListAuthorizedDomainsResponse
* ListAuthorizedDomainsResponse `object`: A list of Authorized Domains.
  * domains `array`: The authorized domains belonging to the user.
    * items [AuthorizedDomain](#authorizeddomain)
  * nextPageToken `string`: Continuation token for fetching the next page of results.

### ListCloudAuditLogsSourcesResponse
* ListCloudAuditLogsSourcesResponse `object`: ListCloudAuditLogsSourcesResponse is a list of CloudAuditLogsSource resources.
  * apiVersion `string`: The API version for this call such as "events.cloud.google.com/v1alpha1".
  * items `array`: List of CloudAuditLogsSources.
    * items [CloudAuditLogsSource](#cloudauditlogssource)
  * kind `string`: The kind of this resource, in this case "CloudAuditLogsSourceList".
  * metadata [ListMeta](#listmeta)
  * unreachable `array`: Locations that could not be reached.
    * items `string`

### ListCloudPubSubSourcesResponse
* ListCloudPubSubSourcesResponse `object`: ListCloudPubSubSourcesResponse is a list of CloudPubSubSource resources.
  * apiVersion `string`: The API version for this call such as "events.cloud.google.com/v1alpha1".
  * items `array`: List of CloudPubSubSources.
    * items [CloudPubSubSource](#cloudpubsubsource)
  * kind `string`: The kind of this resource, in this case "CloudPubSubSourceList".
  * metadata [ListMeta](#listmeta)
  * unreachable `array`: Locations that could not be reached.
    * items `string`

### ListCloudSchedulerSourcesResponse
* ListCloudSchedulerSourcesResponse `object`: ListCloudSchedulerSourcesResponse is a list of CloudSchedulerSource resources.
  * apiVersion `string`: The API version for this call such as "events.cloud.google.com/v1alpha1".
  * items `array`: List of CloudSchedulerSources.
    * items [CloudSchedulerSource](#cloudschedulersource)
  * kind `string`: The kind of this resource, in this case "CloudSchedulerSourceList".
  * metadata [ListMeta](#listmeta)
  * unreachable `array`: Locations that could not be reached.
    * items `string`

### ListCloudStorageSourcesResponse
* ListCloudStorageSourcesResponse `object`: ListCloudStorageSourcesResponse is a list of CloudStorageSource resources.
  * apiVersion `string`: The API version for this call such as "events.cloud.google.com/v1alpha1".
  * items `array`: List of CloudStorageSources.
    * items [CloudStorageSource](#cloudstoragesource)
  * kind `string`: The kind of this resource, in this case "CloudStorageSourceList".
  * metadata [ListMeta](#listmeta)
  * unreachable `array`: Locations that could not be reached.
    * items `string`

### ListConfigurationsResponse
* ListConfigurationsResponse `object`: ListConfigurationsResponse is a list of Configuration resources.
  * apiVersion `string`: The API version for this call such as "serving.knative.dev/v1alpha1".
  * items `array`: List of Configurations.
    * items [Configuration](#configuration)
  * kind `string`: The kind of this resource, in this case "ConfigurationList".
  * metadata [ListMeta](#listmeta)
  * unreachable `array`: Locations that could not be reached.
    * items `string`

### ListDomainMappingsResponse
* ListDomainMappingsResponse `object`: ListDomainMappingsResponse is a list of DomainMapping resources.
  * apiVersion `string`: The API version for this call such as "domains.cloudrun.com/v1alpha1".
  * items `array`: List of DomainMappings.
    * items [DomainMapping](#domainmapping)
  * kind `string`: The kind of this resource, in this case "DomainMappingList".
  * metadata [ListMeta](#listmeta)
  * unreachable `array`: Locations that could not be reached.
    * items `string`

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### ListMeta
* ListMeta `object`: ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
  * continue `string`: continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response.
  * resourceVersion `string`: String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency +optional
  * selfLink `string`: SelfLink is a URL representing this object. Populated by the system. Read-only. +optional

### ListRevisionsResponse
* ListRevisionsResponse `object`: ListRevisionsResponse is a list of Revision resources.
  * apiVersion `string`: The API version for this call such as "serving.knative.dev/v1alpha1".
  * items `array`: List of Revisions.
    * items [Revision](#revision)
  * kind `string`: The kind of this resource, in this case "RevisionList".
  * metadata [ListMeta](#listmeta)
  * unreachable `array`: Locations that could not be reached.
    * items `string`

### ListRoutesResponse
* ListRoutesResponse `object`: ListRoutesResponse is a list of Route resources.
  * apiVersion `string`: The API version for this call such as "serving.knative.dev/v1alpha1".
  * items `array`: List of Routes.
    * items [Route](#route)
  * kind `string`: The kind of this resource, in this case always "RouteList".
  * metadata [ListMeta](#listmeta)
  * unreachable `array`: Locations that could not be reached.
    * items `string`

### ListServicesResponse
* ListServicesResponse `object`: A list of Service resources.
  * apiVersion `string`: The API version for this call such as "serving.knative.dev/v1alpha1".
  * items `array`: List of Services.
    * items [Service](#service)
  * kind `string`: The kind of this resource, in this case "ServiceList".
  * metadata [ListMeta](#listmeta)
  * unreachable `array`: Locations that could not be reached.
    * items `string`

### ListTriggersResponse
* ListTriggersResponse `object`: ListTriggersResponse is a list of Trigger resources.
  * apiVersion `string`: The API version for this call such as "eventing.knative.dev/v1alpha1".
  * items `array`: List of Triggers.
    * items [Trigger](#trigger)
  * kind `string`: The kind of this resource, in this case "TriggerList".
  * metadata [ListMeta](#listmeta)
  * unreachable `array`: Locations that could not be reached.
    * items `string`

### LocalObjectReference
* LocalObjectReference `object`: LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.
  * name `string`: Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  * labels `object`: Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`

### ObjectMeta
* ObjectMeta `object`: ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
  * annotations `object`: Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations +optional
  * clusterName `string`: Not currently supported by Cloud Run. The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request. +optional
  * creationTimestamp `string`: CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC. Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata +optional
  * deletionGracePeriodSeconds `integer`: Not currently supported by Cloud Run. Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only. +optional
  * deletionTimestamp `string`: DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested. Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata +optional
  * finalizers `array`: Not currently supported by Cloud Run. Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. +optional +patchStrategy=merge
    * items `string`
  * generateName `string`: Not currently supported by Cloud Run. GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server. If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header). Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency +optional string generateName = 2;
  * generation `integer`: A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. +optional
  * labels `object`: Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and routes. More info: http://kubernetes.io/docs/user-guide/labels +optional
  * name `string`: Name must be unique within a namespace, within a Cloud Run region. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names +optional
  * namespace `string`: Namespace defines the space within each name must be unique, within a Cloud Run region. In Cloud Run the namespace must be equal to either the project ID or project number.
  * ownerReferences `array`: List of objects that own this object. If ALL objects in the list have been deleted, this object will be garbage collected. +optional
    * items [OwnerReference](#ownerreference)
  * resourceVersion `string`: An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources. Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency +optional
  * selfLink `string`: SelfLink is a URL representing this object. Populated by the system. Read-only. +optional string selfLink = 4;
  * uid `string`: UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations. Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids +optional

### ObjectReference
* ObjectReference `object`: ObjectReference contains enough information to let you inspect or modify the referred object.
  * apiVersion `string`: API version of the referent. +optional
  * fieldPath `string`: If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  * kind `string`: Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds +optional
  * name `string`: Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names +optional
  * namespace `string`: Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ +optional
  * resourceVersion `string`: Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency +optional
  * uid `string`: UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids +optional

### OwnerReference
* OwnerReference `object`: OwnerReference contains enough information to let you identify an owning object. Currently, an owning object must be in the same namespace, so there is no namespace field.
  * apiVersion `string`: API version of the referent.
  * blockOwnerDeletion `boolean`: If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned. +optional
  * controller `boolean`: If true, this reference points to the managing controller. +optional
  * kind `string`: Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
  * name `string`: Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * uid `string`: UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### Probe
* Probe `object`: Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.
  * failureThreshold `integer`: Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. +optional
  * handler [Handler](#handler)
  * initialDelaySeconds `integer`: Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional
  * periodSeconds `integer`: How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. +optional
  * successThreshold `integer`: Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness. Minimum value is 1. +optional
  * timeoutSeconds `integer`: Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes +optional

### Quantity
* Quantity `object`: The view model of a single quantity, e.g. "800 MiB". Corresponds to https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/generated.proto
  * string `string`: Stringified version of the quantity, e.g., "800 MiB".

### ResourceRecord
* ResourceRecord `object`: A DNS resource record.
  * name `string`: Relative name of the object affected by this record. Only applicable for `CNAME` records. Example: 'www'.
  * rrdata `string`: Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
  * type `string` (values: RECORD_TYPE_UNSPECIFIED, A, AAAA, CNAME): Resource record type. Example: `AAAA`.

### ResourceRequirements
* ResourceRequirements `object`: ResourceRequirements describes the compute resource requirements.
  * limits `object`: Limits describes the maximum amount of compute resources allowed. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
  * limitsInMap `object`: Limits describes the maximum amount of compute resources allowed. This is a temporary field created to migrate away from the map limits field. This is done to become compliant with k8s style API. This field is deprecated in favor of limits field.
  * requests `object`: Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
  * requestsInMap `object`: Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. This is a temporary field created to migrate away from the map requests field. This is done to become compliant with k8s style API. This field is deprecated in favor of requests field.

### Revision
* Revision `object`: Revision is an immutable snapshot of code and configuration. A revision references a container image. Revisions are created by updates to a Configuration. Cloud Run does not currently support referencing a build that is responsible for materializing the container image from source. See also: https://github.com/knative/serving/blob/master/docs/spec/overview.md#revision
  * apiVersion `string`: The API version for this call such as "serving.knative.dev/v1alpha1".
  * kind `string`: The kind of this resource, in this case "Revision".
  * metadata [ObjectMeta](#objectmeta)
  * spec [RevisionSpec](#revisionspec)
  * status [RevisionStatus](#revisionstatus)

### RevisionCondition
* RevisionCondition `object`: RevisionCondition defines a readiness condition for a Revision.
  * lastTransitionTime `string`: Last time the condition transitioned from one status to another. +optional
  * message `string`: Human readable message indicating details about the current status. +optional
  * reason `string`: One-word CamelCase reason for the condition's last transition. +optional
  * severity `string`: How to interpret failures of this condition, one of Error, Warning, Info +optional
  * status `string`: Status of the condition, one of True, False, Unknown.
  * type `string`: RevisionConditionType is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting Types include: * "Ready": True when the Revision is ready. * "ResourcesAvailable": True when underlying resources have been provisioned. * "ContainerHealthy": True when the Revision readiness check completes. * "Active": True when the Revision may receive traffic.

### RevisionSpec
* RevisionSpec `object`: RevisionSpec holds the desired state of the Revision (from the client).
  * concurrencyModel `string`: ConcurrencyModel specifies the desired concurrency model (Single or Multi) for the Revision. Defaults to Multi. Deprecated in favor of ContainerConcurrency. +optional
  * container [Container](#container)
  * containerConcurrency `integer`: (Optional) ContainerConcurrency specifies the maximum allowed in-flight (concurrent) requests per container instance of the Revision. Cloud Run fully managed: supported, defaults to 80 Cloud Run on GKE: supported, defaults to 0, which means concurrency to the application is not limited, and the system decides the target concurrency for the autoscaler.
  * containers `array`: Containers holds the single container that defines the unit of execution for this Revision. In the context of a Revision, we disallow a number of fields on this Container, including: name and lifecycle. In Cloud Run, only a single container may be provided.
    * items [Container](#container)
  * generation `integer`: Deprecated and not currently populated by Cloud Run. See metadata.generation instead, which is the sequence number containing the latest generation of the desired state. Read-only.
  * serviceAccountName `string`: Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.
  * servingState `string` (values: REVISION_SERVING_STATE_UNSPECIFIED, ACTIVE, RESERVE, RETIRED): ServingState holds a value describing the state the resources are in for this Revision. Users must not specify this when creating a revision. It is expected that the system will manipulate this based on routability and load. Populated by the system. Read-only.
  * timeoutSeconds `integer`: TimeoutSeconds holds the max duration the instance is allowed for responding to a request. Not currently used by Cloud Run.
  * volumes `array`
    * items [Volume](#volume)

### RevisionStatus
* RevisionStatus `object`: RevisionStatus communicates the observed state of the Revision (from the controller).
  * conditions `array`: Conditions communicates information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world. As a Revision is being prepared, it will incrementally update conditions "ResourcesAvailable", "ContainerHealthy", and "Active", which contribute to the overall "Ready" condition.
    * items [RevisionCondition](#revisioncondition)
  * imageDigest `string`: ImageDigest holds the resolved digest for the image specified within .Spec.Container.Image. The digest is resolved during the creation of Revision. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object.
  * logUrl `string`: Specifies the generated logging url for this particular revision based on the revision url template specified in the controller's config. +optional
  * observedGeneration `integer`: ObservedGeneration is the 'Generation' of the Revision that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation, and the Ready condition's status is True or False.
  * serviceName `string`: Not currently used by Cloud Run.

### RevisionTemplate
* RevisionTemplate `object`: RevisionTemplateSpec describes the data a revision should have when created from a template. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
  * metadata [ObjectMeta](#objectmeta)
  * spec [RevisionSpec](#revisionspec)

### Route
* Route `object`: Route is responsible for configuring ingress over a collection of Revisions. Some of the Revisions a Route distributes traffic over may be specified by referencing the Configuration responsible for creating them; in these cases the Route is additionally responsible for monitoring the Configuration for "latest ready" revision changes, and smoothly rolling out latest revisions. See also: https://github.com/knative/serving/blob/master/docs/spec/overview.md#route Cloud Run currently supports referencing a single Configuration to automatically deploy the "latest ready" Revision from that Configuration.
  * apiVersion `string`: The API version for this call such as "serving.knative.dev/v1alpha1".
  * kind `string`: The kind of this resource, in this case always "Route".
  * metadata [ObjectMeta](#objectmeta)
  * spec [RouteSpec](#routespec)
  * status [RouteStatus](#routestatus)

### RouteCondition
* RouteCondition `object`: RouteCondition defines a readiness condition for a Route.
  * lastTransitionTime `string`: Last time the condition transitioned from one status to another. +optional
  * message `string`: Human-readable message indicating details about last transition. +optional
  * reason `string`: One-word CamelCase reason for the condition's last transition. +optional
  * severity `string`: How to interpret failures of this condition, one of Error, Warning, Info +optional
  * status `string`: Status of the condition, one of "True", "False", "Unknown".
  * type `string`: RouteConditionType is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting Types include: "Ready".

### RouteSpec
* RouteSpec `object`: RouteSpec holds the desired state of the Route (from the client).
  * generation `integer`: Deprecated and not currently populated by Cloud Run. See metadata.generation instead, which is the sequence number containing the latest generation of the desired state. Read-only.
  * traffic `array`: Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations. Cloud Run currently supports a single configurationName.
    * items [TrafficTarget](#traffictarget)

### RouteStatus
* RouteStatus `object`: RouteStatus communicates the observed state of the Route (from the controller).
  * address [Addressable](#addressable)
  * conditions `array`: Conditions communicates information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world.
    * items [RouteCondition](#routecondition)
  * domain `string`: Deprecated - use url instead. Domain holds the top-level domain that will distribute traffic over the provided targets.
  * domainInternal `string`: Deprecated - use address instead. For Cloud Run, identifical to domain.
  * observedGeneration `integer`: ObservedGeneration is the 'Generation' of the Route that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False. Note that providing a trafficTarget that only has a configurationName will result in a Route that does not increment either its metadata.generation or its observedGeneration, as new "latest ready" revisions from the Configuration are processed without an update to the Route's spec.
  * traffic `array`: Traffic holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed.
    * items [TrafficTarget](#traffictarget)
  * url `string`: URL holds the url that will distribute traffic over the provided traffic targets. It generally has the form https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app

### SELinuxOptions
* SELinuxOptions `object`: SELinuxOptions are the labels to be applied to the container
  * level `string`: Level is SELinux level label that applies to the container. +optional
  * role `string`: Role is a SELinux role label that applies to the container. +optional
  * type `string`: Type is a SELinux type label that applies to the container. +optional
  * user `string`: User is a SELinux user label that applies to the container. +optional

### SecretEnvSource
* SecretEnvSource `object`: SecretEnvSource selects a Secret to populate the environment variables with. The contents of the target Secret's Data field will represent the key-value pairs as environment variables.
  * localObjectReference [LocalObjectReference](#localobjectreference)
  * name `string`: Cloud Run fully managed: not supported Cloud Run for Anthos: supported The Secret to select from.
  * optional `boolean`: Cloud Run fully managed: not supported Cloud Run for Anthos: supported Specify whether the Secret must be defined +optional

### SecretKeySelector
* SecretKeySelector `object`: Cloud Run fully managed: not supported Cloud Run on GKE: supported SecretKeySelector selects a key of a Secret.
  * key `string`: Cloud Run fully managed: not supported Cloud Run on GKE: supported The key of the secret to select from. Must be a valid secret key.
  * localObjectReference [LocalObjectReference](#localobjectreference)
  * name `string`: Cloud Run fully managed: not supported Cloud Run on GKE: supported The name of the secret in the pod's namespace to select from.
  * optional `boolean`: Cloud Run fully managed: not supported Cloud Run on GKE: supported Specify whether the Secret or its key must be defined +optional

### SecretVolumeSource
* SecretVolumeSource `object`: The contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names.
  * defaultMode `integer`: Mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  * items `array`: If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional.
    * items [KeyToPath](#keytopath)
  * optional `boolean`: Specify whether the Secret or its keys must be defined.
  * secretName `string`: Name of the secret in the container's namespace to use.

### SecurityContext
* SecurityContext `object`: SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence.
  * allowPrivilegeEscalation `boolean`: AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN +optional
  * capabilities [Capabilities](#capabilities)
  * privileged `boolean`: Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. +optional
  * readOnlyRootFilesystem `boolean`: Whether this container has a read-only root filesystem. Default is false. +optional
  * runAsGroup `integer`: The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
  * runAsNonRoot `boolean`: Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
  * runAsUser `integer`: The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. +optional
  * seLinuxOptions [SELinuxOptions](#selinuxoptions)

### Service
* Service `object`: Service acts as a top-level container that manages a set of Routes and Configurations which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership. Service acts only as an orchestrator of the underlying Routes and Configurations (much as a kubernetes Deployment orchestrates ReplicaSets). The Service's controller will track the statuses of its owned Configuration and Route, reflecting their statuses and conditions as its own. See also: https://github.com/knative/serving/blob/master/docs/spec/overview.md#service
  * apiVersion `string`: The API version for this call such as "serving.knative.dev/v1alpha1".
  * kind `string`: The kind of resource, in this case "Service".
  * metadata [ObjectMeta](#objectmeta)
  * spec [ServiceSpec](#servicespec)
  * status [ServiceStatus](#servicestatus)

### ServiceCondition
* ServiceCondition `object`: ServiceCondition defines a readiness condition for a Service.
  * lastTransitionTime `string`: Last time the condition transitioned from one status to another. +optional
  * message `string`: Human-readable message indicating details about last transition. +optional
  * reason `string`: One-word CamelCase reason for the condition's last transition. +optional
  * severity `string`: How to interpret failures of this condition, one of Error, Warning, Info +optional
  * status `string`: Status of the condition, one of True, False, Unknown.
  * type `string`: ServiceConditionType is used to communicate the status of the reconciliation process. See also: https://github.com/knative/serving/blob/master/docs/spec/errors.md#error-conditions-and-reporting Types include: "Ready", "ConfigurationsReady", and "RoutesReady". "Ready" will be true when the underlying Route and Configuration are ready.

### ServiceSpec
* ServiceSpec `object`: ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
  * generation `integer`: Deprecated and not currently populated by Cloud Run. See metadata.generation instead, which is the sequence number containing the latest generation of the desired state. Read-only.
  * manual [ServiceSpecManualType](#servicespecmanualtype)
  * pinned [ServiceSpecPinnedType](#servicespecpinnedtype)
  * release [ServiceSpecReleaseType](#servicespecreleasetype)
  * runLatest [ServiceSpecRunLatest](#servicespecrunlatest)
  * template [RevisionTemplate](#revisiontemplate)
  * traffic `array`: Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations.
    * items [TrafficTarget](#traffictarget)

### ServiceSpecManualType
* ServiceSpecManualType `object`: ServiceSpecManualType contains the options for configuring a manual service. See ServiceSpec for more details. Not currently supported by Cloud Run.

### ServiceSpecPinnedType
* ServiceSpecPinnedType `object`: ServiceSpecPinnedType Pins this service to a specific revision name. The revision must be owned by the configuration provided. Deprecated and not supported by Cloud Run.
  * configuration [ConfigurationSpec](#configurationspec)
  * revisionName `string`: The revision name to pin this service to until changed to a different service type.

### ServiceSpecReleaseType
* ServiceSpecReleaseType `object`: ServiceSpecReleaseType contains the options for slowly releasing revisions. See ServiceSpec for more details. Not currently supported by Cloud Run.
  * configuration [ConfigurationSpec](#configurationspec)
  * revisions `array`: Revisions is an ordered list of 1 or 2 revisions. The first is the current revision, and the second is the candidate revision. If a single revision is provided, traffic will be pinned at that revision. "@latest" is a shortcut for usage that refers to the latest created revision by the configuration.
    * items `string`
  * rolloutPercent `integer`: RolloutPercent is the percent of traffic that should be sent to the candidate revision, i.e. the 2nd revision in the revisions list. Valid values are between 0 and 99 inclusive.

### ServiceSpecRunLatest
* ServiceSpecRunLatest `object`: ServiceSpecRunLatest contains the options for always having a route to the latest configuration. See ServiceSpec for more details.
  * configuration [ConfigurationSpec](#configurationspec)

### ServiceStatus
* ServiceStatus `object`: The current state of the Service. Output only.
  * address [Addressable](#addressable)
  * conditions `array`: Conditions communicates information about ongoing/complete reconciliation processes that bring the "spec" inline with the observed state of the world.
    * items [ServiceCondition](#servicecondition)
  * domain `string`: From RouteStatus. Domain holds the top-level domain that will distribute traffic over the provided targets. It generally has the form https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app
  * latestCreatedRevisionName `string`: From ConfigurationStatus. LatestCreatedRevisionName is the last revision that was created from this Service's Configuration. It might not be ready yet, for that use LatestReadyRevisionName.
  * latestReadyRevisionName `string`: From ConfigurationStatus. LatestReadyRevisionName holds the name of the latest Revision stamped out from this Service's Configuration that has had its "Ready" condition become "True".
  * observedGeneration `integer`: ObservedGeneration is the 'Generation' of the Route that was last processed by the controller. Clients polling for completed reconciliation should poll until observedGeneration = metadata.generation and the Ready condition's status is True or False.
  * traffic `array`: From RouteStatus. Traffic holds the configured traffic distribution. These entries will always contain RevisionName references. When ConfigurationName appears in the spec, this will hold the LatestReadyRevisionName that we last observed.
    * items [TrafficTarget](#traffictarget)
  * url `string`: From RouteStatus. URL holds the url that will distribute traffic over the provided traffic targets. It generally has the form https://{route-hash}-{project-hash}-{cluster-level-suffix}.a.run.app

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`

### TCPSocketAction
* TCPSocketAction `object`: TCPSocketAction describes an action based on opening a socket
  * host `string`: Optional: Host name to connect to, defaults to the pod IP. +optional
  * port [IntOrString](#intorstring)

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### TrafficTarget
* TrafficTarget `object`: TrafficTarget holds a single entry of the routing table for a Route.
  * configurationName `string`: ConfigurationName of a configuration to whose latest revision we will send this portion of traffic. When the "status.latestReadyRevisionName" of the referenced configuration changes, we will automatically migrate traffic from the prior "latest ready" revision to the new one. This field is never set in Route's status, only its spec. This is mutually exclusive with RevisionName. Cloud Run currently supports a single ConfigurationName.
  * latestRevision `boolean`: LatestRevision may be optionally provided to indicate that the latest ready Revision of the Configuration should be used for this traffic target. When provided LatestRevision must be true if RevisionName is empty; it must be false when RevisionName is non-empty. +optional
  * name `string`: Name is optionally used to expose a dedicated hostname for referencing this target exclusively. Not currently supported by Cloud Run. +optional
  * percent `integer`: Percent specifies percent of the traffic to this Revision or Configuration. This defaults to zero if unspecified. Cloud Run currently requires 100 percent for a single ConfigurationName TrafficTarget entry.
  * revisionName `string`: RevisionName of a specific revision to which to send this portion of traffic. This is mutually exclusive with ConfigurationName. Providing RevisionName in spec is not currently supported by Cloud Run.
  * tag `string`: Tag is optionally used to expose a dedicated url for referencing this target exclusively. Not currently supported in Cloud Run. +optional
  * url `string`: Output only. URL displays the URL for accessing named traffic targets. URL is displayed in status, and is disallowed on spec. URL must contain a scheme (e.g. http://) and a hostname, but may not contain anything else (e.g. basic auth, url path, etc. Not currently supported in Cloud Run.

### Trigger
* Trigger `object`
  * apiVersion `string`: The API version for this call such as "eventing.knative.dev/v1alpha1".
  * kind `string`: The kind of resource, in this case "Trigger".
  * metadata [ObjectMeta](#objectmeta)
  * spec [TriggerSpec](#triggerspec)
  * status [TriggerStatus](#triggerstatus)

### TriggerCondition
* TriggerCondition `object`: TriggerCondition contains state information for an Trigger.
  * lastTransitionTime `string`: Optional. Last time the condition transitioned from one status to another.
  * message `string`: Optional. Human readable message indicating details about the current status.
  * reason `string`: Optional. One-word CamelCase reason for the condition's current status.
  * severity `string`: Optional. How to interpret failures of this condition, one of Error, Warning, Info
  * status `string`: Status of the condition, one of True, False, Unknown.
  * type `string`: Type of Trigger condition.

### TriggerFilter
* TriggerFilter `object`
  * attributes `object`: Optional. Attributes filters events by exact match on event context attributes. Each key in the map is compared with the equivalent key in the event context. An event passes the filter if all values are equal to the specified values. Nested context attributes are not supported as keys. Only string values are supported. Note that this field is optional in knative. In fully managed, 'type' attribute is required due to different broker implementation.

### TriggerSpec
* TriggerSpec `object`: The desired state of the Trigger.
  * broker `string`: Broker is the broker that this trigger receives events from. If not specified, will default to 'default'. Not currently supported by Cloud Run.
  * filter [TriggerFilter](#triggerfilter)
  * subscriber [Destination](#destination)

### TriggerStatus
* TriggerStatus `object`: TriggerStatus represents the current state of a Trigger.
  * conditions `array`: Array of observed TriggerConditions, indicating the current state of the Trigger.
    * items [TriggerCondition](#triggercondition)
  * observedGeneration `integer`: ObservedGeneration is the 'Generation' of the Trigger that was last processed by the controller.
  * subscriberUri `string`: SubscriberURI is the resolved URI of the receiver for this Trigger.

### Volume
* Volume `object`: Volume represents a named volume in a container.
  * configMap [ConfigMapVolumeSource](#configmapvolumesource)
  * name `string`: Volume's name.
  * secret [SecretVolumeSource](#secretvolumesource)

### VolumeDevice
* VolumeDevice `object`: volumeDevice describes a mapping of a raw block device within a container.
  * devicePath `string`: devicePath is the path inside of the container that the device will be mapped to.
  * name `string`: name must match the name of a persistentVolumeClaim in the pod

### VolumeMount
* VolumeMount `object`: VolumeMount describes a mounting of a Volume within a container.
  * mountPath `string`: Path within the container at which the volume should be mounted. Must not contain ':'.
  * mountPropagation `string`: mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationHostToContainer is used. This field is beta in 1.10. +optional
  * name `string`: This must match the Name of a Volume.
  * readOnly `boolean`: Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false. +optional
  * subPath `string`: Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root). +optional


