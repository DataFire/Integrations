# @datafire/google_servicemanagement

Client library for Google Service Management

## Installation and Usage
```bash
npm install --save datafire @datafire/google_servicemanagement
```

```js
let datafire = require('datafire');
let google_servicemanagement = require('@datafire/google_servicemanagement').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_servicemanagement.services.generateConfigReport({}).then(data => {
  console.log(data);
})
```

## Description
Google Service Management allows service producers to publish their services on Google Cloud Platform so that they can be discovered and used by service consumers.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_servicemanagement.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_servicemanagement.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### operations.list
Lists service operations that match the specified filter in the request.


```js
google_servicemanagement.operations.list({}, context)
```

#### Parameters
* filter (string) - A string for filtering Operations.
* name (string) - Not used.
* pageToken (string) - The standard list page token.
* pageSize (integer) - The maximum number of operations to return. If unspecified, defaults to
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.list
Lists managed services.

Returns all public services. For authenticated users, also returns all
services the calling user has "servicemanagement.services.get" permission
for.

**BETA:** If the caller specifies the `consumer_id`, it returns only the
services enabled on the consumer. The `consumer_id` must have the format
of "project:{PROJECT-ID}".


```js
google_servicemanagement.services.list({}, context)
```

#### Parameters
* pageToken (string) - Token identifying which result to start with; returned by a previous list
* pageSize (integer) - Requested size of the next page of data.
* producerProjectId (string) - Include services produced by the specified project.
* consumerId (string) - Include services consumed by the specified consumer.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.create
Creates a new managed service.
Please note one producer project can own no more than 20 services.

Operation<response: ManagedService>


```js
google_servicemanagement.services.create({}, context)
```

#### Parameters
* body (object) - The full representation of a Service that is managed by
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.delete
Deletes a managed service. This method will change the service to the
`Soft-Delete` state for 30 days. Within this period, service producers may
call UndeleteService to restore the service.
After 30 days, the service will be permanently deleted.

Operation<response: google.protobuf.Empty>


```js
google_servicemanagement.services.delete({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - The name of the service.  See the [overview](/service-management/overview)
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.get
Gets a managed service. Authentication is required unless the service is
public.


```js
google_servicemanagement.services.get({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - The name of the service.  See the `ServiceManager` overview for naming
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.getConfig
Gets a service configuration (version) for a managed service.


```js
google_servicemanagement.services.getConfig({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - The name of the service.  See the [overview](/service-management/overview)
* view (string) - Specifies which parts of the Service Config should be returned in the
* configId (string) - The id of the service configuration resource.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.configs.list
Lists the history of the service configuration for a managed service,
from the newest to the oldest.


```js
google_servicemanagement.services.configs.list({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - The name of the service.  See the [overview](/service-management/overview)
* pageSize (integer) - The max number of items to include in the response list.
* pageToken (string) - The token of the page to retrieve.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.configs.create
Creates a new service configuration (version) for a managed service.
This method only stores the service configuration. To roll out the service
configuration to backend systems please call
CreateServiceRollout.


```js
google_servicemanagement.services.configs.create({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - The name of the service.  See the [overview](/service-management/overview)
* body (object) - `Service` is the root object of Google service configuration schema. It
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.configs.get
Gets a service configuration (version) for a managed service.


```js
google_servicemanagement.services.configs.get({
  "serviceName": "",
  "configId": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - The name of the service.  See the [overview](/service-management/overview)
* configId (string) **required** - The id of the service configuration resource.
* view (string) - Specifies which parts of the Service Config should be returned in the
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.configs.submit
Creates a new service configuration (version) for a managed service based
on
user-supplied configuration source files (for example: OpenAPI
Specification). This method stores the source configurations as well as the
generated service configuration. To rollout the service configuration to
other services,
please call CreateServiceRollout.

Operation<response: SubmitConfigSourceResponse>


```js
google_servicemanagement.services.configs.submit({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - The name of the service.  See the [overview](/service-management/overview)
* body (object) - Request message for SubmitConfigSource method.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.rollouts.list
Lists the history of the service configuration rollouts for a managed
service, from the newest to the oldest.


```js
google_servicemanagement.services.rollouts.list({
  "serviceName": ""
}, context)
```

#### Parameters
* filter (string) - Use `filter` to return subset of rollouts.
* pageSize (integer) - The max number of items to include in the response list.
* pageToken (string) - The token of the page to retrieve.
* serviceName (string) **required** - The name of the service.  See the [overview](/service-management/overview)
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.rollouts.create
Creates a new service configuration rollout. Based on rollout, the
Google Service Management will roll out the service configurations to
different backend services. For example, the logging configuration will be
pushed to Google Cloud Logging.

Please note that any previous pending and running Rollouts and associated
Operations will be automatically cancelled so that the latest Rollout will
not be blocked by previous Rollouts.

Operation<response: Rollout>


```js
google_servicemanagement.services.rollouts.create({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - The name of the service.  See the [overview](/service-management/overview)
* body (object) - A rollout resource that defines how service configuration versions are pushed
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.rollouts.get
Gets a service configuration rollout.


```js
google_servicemanagement.services.rollouts.get({
  "serviceName": "",
  "rolloutId": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - The name of the service.  See the [overview](/service-management/overview)
* rolloutId (string) **required** - The id of the rollout resource.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.disable
Disables a service for a project, so it can no longer be
be used for the project. It prevents accidental usage that may cause
unexpected billing charges or security leaks.

Operation<response: DisableServiceResponse>


```js
google_servicemanagement.services.disable({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - Name of the service to disable. Specifying an unknown service name
* body (object) - Request message for DisableService method.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.enable
Enables a service for a project, so it can be used
for the project. See
[Cloud Auth Guide](https://cloud.google.com/docs/authentication) for
more information.

Operation<response: EnableServiceResponse>


```js
google_servicemanagement.services.enable({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - Name of the service to enable. Specifying an unknown service name will
* body (object) - Request message for EnableService method.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.undelete
Revives a previously deleted managed service. The method restores the
service using the configuration at the time the service was deleted.
The target service must exist and must have been deleted within the
last 30 days.

Operation<response: UndeleteServiceResponse>


```js
google_servicemanagement.services.undelete({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - The name of the service. See the [overview](/service-management/overview)
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.generateConfigReport
Generates and returns a report (errors, warnings and changes from
existing configurations) associated with
GenerateConfigReportRequest.new_value

If GenerateConfigReportRequest.old_value is specified,
GenerateConfigReportRequest will contain a single ChangeReport based on the
comparison between GenerateConfigReportRequest.new_value and
GenerateConfigReportRequest.old_value.
If GenerateConfigReportRequest.old_value is not specified, this method
will compare GenerateConfigReportRequest.new_value with the last pushed
service configuration.


```js
google_servicemanagement.services.generateConfigReport({}, context)
```

#### Parameters
* body (object) - Request message for GenerateConfigReport method.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_servicemanagement.operations.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the operation resource.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.consumers.getIamPolicy
Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.


```js
google_servicemanagement.services.consumers.getIamPolicy({
  "resource": ""
}, context)
```

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy is being requested.
* body (object) - Request message for `GetIamPolicy` method.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.consumers.setIamPolicy
Sets the access control policy on the specified resource. Replaces any
existing policy.


```js
google_servicemanagement.services.consumers.setIamPolicy({
  "resource": ""
}, context)
```

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy is being specified.
* body (object) - Request message for `SetIamPolicy` method.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

### services.consumers.testIamPermissions
Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.


```js
google_servicemanagement.services.consumers.testIamPermissions({
  "resource": ""
}, context)
```

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which the policy detail is being requested.
* body (object) - Request message for `TestIamPermissions` method.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.

