# @datafire/google_servicecontrol

Client library for Google Service Control

## Installation and Usage
```bash
npm install --save datafire @datafire/google_servicecontrol
```

```js
let datafire = require('datafire');
let google_servicecontrol = require('@datafire/google_servicecontrol').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_servicecontrol.services.allocateQuota({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_servicecontrol.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### services.allocateQuota
Attempts to allocate quota for the specified consumer. It should be called
before the operation is executed.

This method requires the `servicemanagement.services.quota`
permission on the specified service. For more information, see
[Google Cloud IAM](https://cloud.google.com/iam).

**NOTE:** the client code **must** fail-open if the server returns one
of the following quota errors:
-   `PROJECT_STATUS_UNAVAILABLE`
-   `SERVICE_STATUS_UNAVAILABLE`
-   `BILLING_STATUS_UNAVAILABLE`
-   `QUOTA_SYSTEM_UNAVAILABLE`

The server may inject above errors to prohibit any hard dependency
on the quota system.


```js
google_servicecontrol.services.allocateQuota({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - Name of the service as specified in the service configuration. For example,
* body (object) - Request message for the AllocateQuota method.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

### services.check
Checks an operation with Google Service Control to decide whether
the given operation should proceed. It should be called before the
operation is executed.

If feasible, the client should cache the check results and reuse them for
60 seconds. In case of server errors, the client can rely on the cached
results for longer time.

NOTE: the `CheckRequest` has the size limit of 64KB.

This method requires the `servicemanagement.services.check` permission
on the specified service. For more information, see
[Google Cloud IAM](https://cloud.google.com/iam).


```js
google_servicecontrol.services.check({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - The service name as specified in its service configuration. For example,
* body (object) - Request message for the Check method.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

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

#### Parameters
* serviceName (string) **required** - Name of the service as specified in the service configuration. For example,
* body (object)
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

### services.releaseQuota
Releases previously allocated quota done through AllocateQuota method.

This method requires the `servicemanagement.services.quota`
permission on the specified service. For more information, see
[Google Cloud IAM](https://cloud.google.com/iam).

**NOTE:** the client code **must** fail-open if the server returns one
of the following quota errors:
-   `PROJECT_STATUS_UNAVAILABLE`
-   `SERVICE_STATUS_UNAVAILABLE`
-   `BILLING_STATUS_UNAVAILABLE`
-   `QUOTA_SYSTEM_UNAVAILABLE`

The server may inject above errors to prohibit any hard dependency
on the quota system.


```js
google_servicecontrol.services.releaseQuota({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - Name of the service as specified in the service configuration. For example,
* body (object) - Request message for the ReleaseQuota method.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

### services.report
Reports operation results to Google Service Control, such as logs and
metrics. It should be called after an operation is completed.

If feasible, the client should aggregate reporting data for up to 5
seconds to reduce API traffic. Limiting aggregation to 5 seconds is to
reduce data loss during client crashes. Clients should carefully choose
the aggregation time window to avoid data loss risk more than 0.01%
for business and compliance reasons.

NOTE: the `ReportRequest` has the size limit of 1MB.

This method requires the `servicemanagement.services.report` permission
on the specified service. For more information, see
[Google Cloud IAM](https://cloud.google.com/iam).


```js
google_servicecontrol.services.report({
  "serviceName": ""
}, context)
```

#### Parameters
* serviceName (string) **required** - The service name as specified in its service configuration. For example,
* body (object) - Request message for the Report method.
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

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

#### Parameters
* serviceName (string) **required** - Name of the service as specified in the service configuration. For example,
* body (object)
* pp (boolean) - Pretty-print response.
* bearer_token (string) - OAuth bearer token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* callback (string) - JSONP
* $.xgafv (string) - V1 error format.
* alt (string) - Data format for response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* access_token (string) - OAuth access token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.

