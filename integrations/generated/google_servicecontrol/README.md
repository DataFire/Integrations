# @datafire/google_servicecontrol

Client library for Service Control

## Installation and Usage
```bash
npm install --save @datafire/google_servicecontrol
```
```js
let google_servicecontrol = require('@datafire/google_servicecontrol').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_servicecontrol.services.allocateQuota({
  "serviceName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Google Service Control provides control plane functionality to managed services, such as logging, monitoring, and status checks.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_servicecontrol.oauthCallback({
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
google_servicecontrol.oauthRefresh(null, context)
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

### services.allocateQuota
Attempts to allocate quota for the specified consumer. It should be called
before the operation is executed.

This method requires the `servicemanagement.services.quota`
permission on the specified service. For more information, see
[Cloud IAM](https://cloud.google.com/iam).

**NOTE:** The client **must** fail-open on server errors `INTERNAL`,
`UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system
reliability, the server may inject these errors to prohibit any hard
dependency on the quota functionality.


```js
google_servicecontrol.services.allocateQuota({
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * body [AllocateQuotaRequest](#allocatequotarequest)
  * serviceName **required** `string`: Name of the service as specified in the service configuration. For example,
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [AllocateQuotaResponse](#allocatequotaresponse)

### services.check
Checks whether an operation on a service should be allowed to proceed
based on the configuration of the service and related policies. It must be
called before the operation is executed.

If feasible, the client should cache the check results and reuse them for
60 seconds. In case of any server errors, the client should rely on the
cached results for much longer time to avoid outage.
WARNING: There is general 60s delay for the configuration and policy
propagation, therefore callers MUST NOT depend on the `Check` method having
the latest policy information.

NOTE: the CheckRequest has the size limit of 64KB.

This method requires the `servicemanagement.services.check` permission
on the specified service. For more information, see
[Cloud IAM](https://cloud.google.com/iam).


```js
google_servicecontrol.services.check({
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * body [CheckRequest](#checkrequest)
  * serviceName **required** `string`: The service name as specified in its service configuration. For example,
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [CheckResponse](#checkresponse)

### services.endReconciliation
Signals the quota controller that service ends the ongoing usage
reconciliation.

This method requires the `servicemanagement.services.quota`
permission on the specified service. For more information, see
[Google Cloud IAM](https://cloud.google.com/iam).


```js
google_servicecontrol.services.endReconciliation({
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * body [EndReconciliationRequest](#endreconciliationrequest)
  * serviceName **required** `string`: Name of the service as specified in the service configuration. For example,
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [EndReconciliationResponse](#endreconciliationresponse)

### services.releaseQuota
Releases previously allocated quota done through AllocateQuota method.

This method requires the `servicemanagement.services.quota`
permission on the specified service. For more information, see
[Cloud IAM](https://cloud.google.com/iam).


**NOTE:** The client **must** fail-open on server errors `INTERNAL`,
`UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system
reliability, the server may inject these errors to prohibit any hard
dependency on the quota functionality.


```js
google_servicecontrol.services.releaseQuota({
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * body [ReleaseQuotaRequest](#releasequotarequest)
  * serviceName **required** `string`: Name of the service as specified in the service configuration. For example,
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ReleaseQuotaResponse](#releasequotaresponse)

### services.report
Reports operation results to Google Service Control, such as logs and
metrics. It should be called after an operation is completed.

If feasible, the client should aggregate reporting data for up to 5
seconds to reduce API traffic. Limiting aggregation to 5 seconds is to
reduce data loss during client crashes. Clients should carefully choose
the aggregation time window to avoid data loss risk more than 0.01%
for business and compliance reasons.

NOTE: the ReportRequest has the size limit of 1MB.

This method requires the `servicemanagement.services.report` permission
on the specified service. For more information, see
[Google Cloud IAM](https://cloud.google.com/iam).


```js
google_servicecontrol.services.report({
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * body [ReportRequest](#reportrequest)
  * serviceName **required** `string`: The service name as specified in its service configuration. For example,
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ReportResponse](#reportresponse)

### services.startReconciliation
Unlike rate quota, allocation quota does not get refilled periodically.
So, it is possible that the quota usage as seen by the service differs from
what the One Platform considers the usage is. This is expected to happen
only rarely, but over time this can accumulate. Services can invoke
StartReconciliation and EndReconciliation to correct this usage drift, as
described below:
1. Service sends StartReconciliation with a timestamp in future for each
   metric that needs to be reconciled. The timestamp being in future allows
   to account for in-flight AllocateQuota and ReleaseQuota requests for the
   same metric.
2. One Platform records this timestamp and starts tracking subsequent
   AllocateQuota and ReleaseQuota requests until EndReconciliation is
   called.
3. At or after the time specified in the StartReconciliation, service
   sends EndReconciliation with the usage that needs to be reconciled to.
4. One Platform adjusts its own record of usage for that metric to the
   value specified in EndReconciliation by taking in to account any
   allocation or release between StartReconciliation and EndReconciliation.

Signals the quota controller that the service wants to perform a usage
reconciliation as specified in the request.

This method requires the `servicemanagement.services.quota`
permission on the specified service. For more information, see
[Google Cloud IAM](https://cloud.google.com/iam).


```js
google_servicecontrol.services.startReconciliation({
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * body [StartReconciliationRequest](#startreconciliationrequest)
  * serviceName **required** `string`: Name of the service as specified in the service configuration. For example,
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [StartReconciliationResponse](#startreconciliationresponse)



## Definitions

### AllocateInfo
* AllocateInfo `object`
  * unusedArguments `array`: A list of label keys that were unused by the server in processing the
    * items `string`

### AllocateQuotaRequest
* AllocateQuotaRequest `object`: Request message for the AllocateQuota method.
  * allocateOperation [QuotaOperation](#quotaoperation)
  * serviceConfigId `string`: Specifies which version of service configuration should be used to process

### AllocateQuotaResponse
* AllocateQuotaResponse `object`: Response message for the AllocateQuota method.
  * allocateErrors `array`: Indicates the decision of the allocate.
    * items [QuotaError](#quotaerror)
  * allocateInfo [AllocateInfo](#allocateinfo)
  * operationId `string`: The same operation_id value used in the AllocateQuotaRequest. Used for
  * quotaMetrics `array`: Quota metrics to indicate the result of allocation. Depending on the
    * items [MetricValueSet](#metricvalueset)
  * serviceConfigId `string`: ID of the actual config used to process the request.

### AuditLog
* AuditLog `object`: Common audit log format for Google Cloud Platform API operations.
  * authenticationInfo [AuthenticationInfo](#authenticationinfo)
  * authorizationInfo `array`: Authorization information. If there are multiple
    * items [AuthorizationInfo](#authorizationinfo)
  * metadata `object`: Other service-specific data about the request, response, and other
  * methodName `string`: The name of the service method or operation.
  * numResponseItems `string`: The number of items returned from a List or Query API method,
  * request `object`: The operation request. This may not include all request parameters,
  * requestMetadata [RequestMetadata](#requestmetadata)
  * resourceName `string`: The resource or collection that is the target of the operation.
  * response `object`: The operation response. This may not include all response elements,
  * serviceData `object`: Deprecated, use `metadata` field instead.
  * serviceName `string`: The name of the API service performing the operation. For example,
  * status [Status](#status)

### AuthenticationInfo
* AuthenticationInfo `object`: Authentication information for the operation.
  * authoritySelector `string`: The authority selector specified by the requestor, if any.
  * principalEmail `string`: The email address of the authenticated user (or service account on behalf
  * thirdPartyPrincipal `object`: The third party identification (if any) of the authenticated user making

### AuthorizationInfo
* AuthorizationInfo `object`: Authorization information for the operation.
  * granted `boolean`: Whether or not authorization for `resource` and `permission`
  * permission `string`: The required IAM permission.
  * resource `string`: The resource being accessed, as a REST-style string. For example:

### CheckError
* CheckError `object`: Defines the errors to be returned in
  * code `string` (values: ERROR_CODE_UNSPECIFIED, NOT_FOUND, PERMISSION_DENIED, RESOURCE_EXHAUSTED, BUDGET_EXCEEDED, DENIAL_OF_SERVICE_DETECTED, LOAD_SHEDDING, ABUSER_DETECTED, SERVICE_NOT_ACTIVATED, VISIBILITY_DENIED, BILLING_DISABLED, PROJECT_DELETED, PROJECT_INVALID, IP_ADDRESS_BLOCKED, REFERER_BLOCKED, CLIENT_APP_BLOCKED, API_TARGET_BLOCKED, API_KEY_INVALID, API_KEY_EXPIRED, API_KEY_NOT_FOUND, SPATULA_HEADER_INVALID, LOAS_ROLE_INVALID, NO_LOAS_PROJECT, LOAS_PROJECT_DISABLED, SECURITY_POLICY_VIOLATED, INVALID_CREDENTIAL, NAMESPACE_LOOKUP_UNAVAILABLE, SERVICE_STATUS_UNAVAILABLE, BILLING_STATUS_UNAVAILABLE, QUOTA_CHECK_UNAVAILABLE, LOAS_PROJECT_LOOKUP_UNAVAILABLE, CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE, SECURITY_POLICY_BACKEND_UNAVAILABLE): The error code.
  * detail `string`: Free-form text providing details on the error cause of the error.
  * subject `string`: Subject to whom this error applies. See the specific code enum for more

### CheckInfo
* CheckInfo `object`: Contains additional information about the check operation.
  * consumerInfo [ConsumerInfo](#consumerinfo)
  * unusedArguments `array`: A list of fields and label keys that are ignored by the server.
    * items `string`

### CheckRequest
* CheckRequest `object`: Request message for the Check method.
  * operation [Operation](#operation)
  * requestProjectSettings `boolean`: Requests the project settings to be returned as part of the check response.
  * serviceConfigId `string`: Specifies which version of service configuration should be used to process
  * skipActivationCheck `boolean`: Indicates if service activation check should be skipped for this request.

### CheckResponse
* CheckResponse `object`: Response message for the Check method.
  * checkErrors `array`: Indicate the decision of the check.
    * items [CheckError](#checkerror)
  * checkInfo [CheckInfo](#checkinfo)
  * operationId `string`: The same operation_id value used in the CheckRequest.
  * quotaInfo [QuotaInfo](#quotainfo)
  * serviceConfigId `string`: The actual config id used to process the request.

### ConsumerInfo
* ConsumerInfo `object`: `ConsumerInfo` provides information about the consumer project.
  * projectNumber `string`: The Google cloud project number, e.g. 1234567890. A value of 0 indicates

### Distribution
* Distribution `object`: Distribution represents a frequency distribution of double-valued sample
  * bucketCounts `array`: The number of samples in each histogram bucket. `bucket_counts` are
    * items `string`
  * count `string`: The total number of samples in the distribution. Must be >= 0.
  * explicitBuckets [ExplicitBuckets](#explicitbuckets)
  * exponentialBuckets [ExponentialBuckets](#exponentialbuckets)
  * linearBuckets [LinearBuckets](#linearbuckets)
  * maximum `number`: The maximum of the population of values. Ignored if `count` is zero.
  * mean `number`: The arithmetic mean of the samples in the distribution. If `count` is
  * minimum `number`: The minimum of the population of values. Ignored if `count` is zero.
  * sumOfSquaredDeviation `number`: The sum of squared deviations from the mean:

### EndReconciliationRequest
* EndReconciliationRequest `object`: Request message for QuotaController.EndReconciliation.
  * reconciliationOperation [QuotaOperation](#quotaoperation)
  * serviceConfigId `string`: Specifies which version of service configuration should be used to process

### EndReconciliationResponse
* EndReconciliationResponse `object`: Response message for QuotaController.EndReconciliation.
  * operationId `string`: The same operation_id value used in the EndReconciliationRequest. Used for
  * quotaMetrics `array`: Metric values as tracked by One Platform before the adjustment was made.
    * items [MetricValueSet](#metricvalueset)
  * reconciliationErrors `array`: Indicates the decision of the reconciliation end.
    * items [QuotaError](#quotaerror)
  * serviceConfigId `string`: ID of the actual config used to process the request.

### ExplicitBuckets
* ExplicitBuckets `object`: Describing buckets with arbitrary user-provided width.
  * bounds `array`: 'bound' is a list of strictly increasing boundaries between
    * items `number`

### ExponentialBuckets
* ExponentialBuckets `object`: Describing buckets with exponentially growing width.
  * growthFactor `number`: The i'th exponential bucket covers the interval
  * numFiniteBuckets `integer`: The number of finite buckets. With the underflow and overflow buckets,
  * scale `number`: The i'th exponential bucket covers the interval

### LinearBuckets
* LinearBuckets `object`: Describing buckets with constant width.
  * numFiniteBuckets `integer`: The number of finite buckets. With the underflow and overflow buckets,
  * offset `number`: The i'th linear bucket covers the interval
  * width `number`: The i'th linear bucket covers the interval

### LogEntry
* LogEntry `object`: An individual log entry.
  * insertId `string`: A unique ID for the log entry used for deduplication. If omitted,
  * labels `object`: A set of user-defined (key, value) data that provides additional
  * name `string`: Required. The log to which this log entry belongs. Examples: `"syslog"`,
  * protoPayload `object`: The log entry payload, represented as a protocol buffer that is
  * severity `string` (values: DEFAULT, DEBUG, INFO, NOTICE, WARNING, ERROR, CRITICAL, ALERT, EMERGENCY): The severity of the log entry. The default value is
  * structPayload `object`: The log entry payload, represented as a structure that
  * textPayload `string`: The log entry payload, represented as a Unicode string (UTF-8).
  * timestamp `string`: The time the event described by the log entry occurred. If

### MetricValue
* MetricValue `object`: Represents a single metric value.
  * boolValue `boolean`: A boolean value.
  * distributionValue [Distribution](#distribution)
  * doubleValue `number`: A double precision floating point value.
  * endTime `string`: The end of the time period over which this metric value's measurement
  * int64Value `string`: A signed 64-bit integer value.
  * labels `object`: The labels describing the metric value.
  * moneyValue [Money](#money)
  * startTime `string`: The start of the time period over which this metric value's measurement
  * stringValue `string`: A text string value.

### MetricValueSet
* MetricValueSet `object`: Represents a set of metric values in the same metric.
  * metricName `string`: The metric name defined in the service configuration.
  * metricValues `array`: The values in this metric.
    * items [MetricValue](#metricvalue)

### Money
* Money `object`: Represents an amount of money with its currency type.
  * currencyCode `string`: The 3-letter currency code defined in ISO 4217.
  * nanos `integer`: Number of nano (10^-9) units of the amount.
  * units `string`: The whole units of the amount.

### Operation
* Operation `object`: Represents information regarding an operation.
  * consumerId `string`: Identity of the consumer who is using the service.
  * endTime `string`: End time of the operation.
  * importance `string` (values: LOW, HIGH, DEBUG): DO NOT USE. This is an experimental field.
  * labels `object`: Labels describing the operation. Only the following labels are allowed:
  * logEntries `array`: Represents information to be logged.
    * items [LogEntry](#logentry)
  * metricValueSets `array`: Represents information about this operation. Each MetricValueSet
    * items [MetricValueSet](#metricvalueset)
  * operationId `string`: Identity of the operation. This must be unique within the scope of the
  * operationName `string`: Fully qualified name of the operation. Reserved for future use.
  * quotaProperties [QuotaProperties](#quotaproperties)
  * resourceContainer `string`: DO NOT USE. This field is deprecated, use "resources" field instead.
  * resources `array`: The resources that are involved in the operation.
    * items [ResourceInfo](#resourceinfo)
  * startTime `string`: Required. Start time of the operation.
  * userLabels `object`: User defined labels for the resource that this operation is associated

### QuotaError
* QuotaError `object`: Represents error information for QuotaOperation.
  * code `string` (values: UNSPECIFIED, RESOURCE_EXHAUSTED, OUT_OF_RANGE, BILLING_NOT_ACTIVE, PROJECT_DELETED, API_KEY_INVALID, API_KEY_EXPIRED, SPATULA_HEADER_INVALID, LOAS_ROLE_INVALID, NO_LOAS_PROJECT, PROJECT_STATUS_UNAVAILABLE, SERVICE_STATUS_UNAVAILABLE, BILLING_STATUS_UNAVAILABLE, QUOTA_SYSTEM_UNAVAILABLE): Error code.
  * description `string`: Free-form text that provides details on the cause of the error.
  * subject `string`: Subject to whom this error applies. See the specific enum for more details

### QuotaInfo
* QuotaInfo `object`: Contains the quota information for a quota check response.
  * limitExceeded `array`: Quota Metrics that have exceeded quota limits.
    * items `string`
  * quotaConsumed `object`: Map of quota group name to the actual number of tokens consumed. If the
  * quotaMetrics `array`: Quota metrics to indicate the usage. Depending on the check request, one or
    * items [MetricValueSet](#metricvalueset)

### QuotaOperation
* QuotaOperation `object`: Represents information regarding a quota operation.
  * consumerId `string`: Identity of the consumer for whom this quota operation is being performed.
  * labels `object`: Labels describing the operation.
  * methodName `string`: Fully qualified name of the API method for which this quota operation is
  * operationId `string`: Identity of the operation. This is expected to be unique within the scope
  * quotaMetrics `array`: Represents information about this operation. Each MetricValueSet
    * items [MetricValueSet](#metricvalueset)
  * quotaMode `string` (values: UNSPECIFIED, NORMAL, BEST_EFFORT, CHECK_ONLY): Quota mode for this operation.

### QuotaProperties
* QuotaProperties `object`: Represents the properties needed for quota operations.
  * quotaMode `string` (values: ACQUIRE, ACQUIRE_BEST_EFFORT, CHECK, RELEASE): Quota mode for this operation.

### ReleaseQuotaRequest
* ReleaseQuotaRequest `object`: Request message for the ReleaseQuota method.
  * releaseOperation [QuotaOperation](#quotaoperation)
  * serviceConfigId `string`: Specifies which version of service configuration should be used to process

### ReleaseQuotaResponse
* ReleaseQuotaResponse `object`: Response message for the ReleaseQuota method.
  * operationId `string`: The same operation_id value used in the ReleaseQuotaRequest. Used for
  * quotaMetrics `array`: Quota metrics to indicate the result of release. Depending on the
    * items [MetricValueSet](#metricvalueset)
  * releaseErrors `array`: Indicates the decision of the release.
    * items [QuotaError](#quotaerror)
  * serviceConfigId `string`: ID of the actual config used to process the request.

### ReportError
* ReportError `object`: Represents the processing error of one Operation in the request.
  * operationId `string`: The Operation.operation_id value from the request.
  * status [Status](#status)

### ReportInfo
* ReportInfo `object`: Contains additional info about the report operation.
  * operationId `string`: The Operation.operation_id value from the request.
  * quotaInfo [QuotaInfo](#quotainfo)

### ReportRequest
* ReportRequest `object`: Request message for the Report method.
  * operations `array`: Operations to be reported.
    * items [Operation](#operation)
  * serviceConfigId `string`: Specifies which version of service config should be used to process the

### ReportResponse
* ReportResponse `object`: Response message for the Report method.
  * reportErrors `array`: Partial failures, one for each `Operation` in the request that failed
    * items [ReportError](#reporterror)
  * reportInfos `array`: Quota usage for each quota release `Operation` request.
    * items [ReportInfo](#reportinfo)
  * serviceConfigId `string`: The actual config id used to process the request.

### RequestMetadata
* RequestMetadata `object`: Metadata about the request.
  * callerIp `string`: The IP address of the caller.
  * callerNetwork `string`: The network of the caller.
  * callerSuppliedUserAgent `string`: The user agent of the caller.

### ResourceInfo
* ResourceInfo `object`: Describes a resource associated with this operation.
  * resourceContainer `string`: The identifier of the parent of this resource instance.
  * resourceName `string`: Name of the resource. This is used for auditing purposes.

### StartReconciliationRequest
* StartReconciliationRequest `object`: Request message for QuotaController.StartReconciliation.
  * reconciliationOperation [QuotaOperation](#quotaoperation)
  * serviceConfigId `string`: Specifies which version of service configuration should be used to process

### StartReconciliationResponse
* StartReconciliationResponse `object`: Response message for QuotaController.StartReconciliation.
  * operationId `string`: The same operation_id value used in the StartReconciliationRequest. Used
  * quotaMetrics `array`: Metric values as tracked by One Platform before the start of
    * items [MetricValueSet](#metricvalueset)
  * reconciliationErrors `array`: Indicates the decision of the reconciliation start.
    * items [QuotaError](#quotaerror)
  * serviceConfigId `string`: ID of the actual config used to process the request.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any


