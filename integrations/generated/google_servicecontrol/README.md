# @datafire/google_servicecontrol

Client library for Service Control API

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

.then(data => {
  console.log(data);
});
```

## Description

Provides admission control and telemetry reporting for services integrated with Service Infrastructure. 

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

### servicecontrol.services.check
Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service Infrastructure](/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the operation is executed. For more information, see [Admission Control](/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).


```js
google_servicecontrol.servicecontrol.services.check({
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
  * body [CheckRequest](#checkrequest)
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
* output [CheckResponse](#checkresponse)

### servicecontrol.services.report
Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service Infrastructure](/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more information, see [Telemetry Reporting](/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).


```js
google_servicecontrol.servicecontrol.services.report({
  "serviceName": ""
}, context)
```

#### Input
* input `object`
  * serviceName **required** `string`: The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
  * body [ReportRequest](#reportrequest)
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
* output [ReportResponse](#reportresponse)



## Definitions

### Api
* Api `object`: This message defines attributes associated with API operations, such as a network API request. The terminology is based on the conventions used by Google APIs, Istio, and OpenAPI.
  * operation `string`: The API operation name. For gRPC requests, it is the fully qualified API method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI requests, it is the `operationId`, such as "getPet".
  * protocol `string`: The API protocol used for sending the request, such as "http", "https", "grpc", or "internal".
  * service `string`: The API service name. It is a logical identifier for a networked API, such as "pubsub.googleapis.com". The naming syntax depends on the API management system being used for handling the request.
  * version `string`: The API version associated with the API operation above, such as "v1" or "v1alpha1".

### AttributeContext
* AttributeContext `object`: This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system.
  * api [Api](#api)
  * destination [Peer](#peer)
  * extensions `array`: Supports extensions for advanced use cases, such as logs and metrics.
    * items `object`
  * origin [Peer](#peer)
  * request [Request](#request)
  * resource [Resource](#resource)
  * response [Response](#response)
  * source [Peer](#peer)

### AuditLog
* AuditLog `object`: Common audit log format for Google Cloud Platform API operations. 
  * authenticationInfo [AuthenticationInfo](#authenticationinfo)
  * authorizationInfo `array`: Authorization information. If there are multiple resources or permissions involved, then there is one AuthorizationInfo element for each {resource, permission} tuple.
    * items [AuthorizationInfo](#authorizationinfo)
  * metadata `object`: Other service-specific data about the request, response, and other information associated with the current audited event.
  * methodName `string`: The name of the service method or operation. For API calls, this should be the name of the API method. For example, "google.cloud.bigquery.v2.TableService.InsertTable" "google.logging.v2.ConfigServiceV2.CreateSink"
  * numResponseItems `string`: The number of items returned from a List or Query API method, if applicable.
  * request `object`: The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
  * requestMetadata [RequestMetadata](#requestmetadata)
  * resourceLocation [ResourceLocation](#resourcelocation)
  * resourceName `string`: The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name. For example: "projects/PROJECT_ID/zones/us-central1-a/instances" "projects/PROJECT_ID/datasets/DATASET_ID"
  * resourceOriginalState `object`: The resource's original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all changed fields, except those that are already been included in `request`, `response`, `metadata` or `service_data` fields. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
  * response `object`: The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
  * serviceData `object`: Deprecated. Use the `metadata` field instead. Other service-specific data about the request, response, and other activities.
  * serviceName `string`: The name of the API service performing the operation. For example, `"compute.googleapis.com"`.
  * status [Status](#status)

### Auth
* Auth `object`: This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards.
  * accessLevels `array`: A list of access level resource names that allow resources to be accessed by authenticated requester. It is part of Secure GCP processing for the incoming request. An access level string has the format: "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}" Example: "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
    * items `string`
  * audiences `array`: The intended audience(s) for this authentication information. Reflects the audience (`aud`) claim within a JWT. The audience value(s) depends on the `issuer`, but typically include one or more of the following pieces of information: * The services intended to receive the credential. For example, ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"]. * A set of service-based scopes. For example, ["https://www.googleapis.com/auth/cloud-platform"]. * The client id of an app, such as the Firebase project id for JWTs from Firebase Auth. Consult the documentation for the credential issuer to determine the information provided.
    * items `string`
  * claims `object`: Structured claims presented with the credential. JWTs include `{key: value}` pairs for standard and private claims. The following is a subset of the standard required and optional claims that would typically be presented for a Google-based JWT: {'iss': 'accounts.google.com', 'sub': '113289723416554971153', 'aud': ['123456789012', 'pubsub.googleapis.com'], 'azp': '123456789012.apps.googleusercontent.com', 'email': 'jsmith@example.com', 'iat': 1353601026, 'exp': 1353604926} SAML assertions are similarly specified, but with an identity provider dependent structure.
  * presenter `string`: The authorized presenter of the credential. Reflects the optional Authorized Presenter (`azp`) claim within a JWT or the OAuth client id. For example, a Google Cloud Platform client id looks as follows: "123456789012.apps.googleusercontent.com".
  * principal `string`: The authenticated principal. Reflects the issuer (`iss`) and subject (`sub`) claims within a JWT. The issuer and subject should be `/` delimited, with `/` percent-encoded within the subject fragment. For Google accounts, the principal format is: "https://accounts.google.com/{id}"

### AuthenticationInfo
* AuthenticationInfo `object`: Authentication information for the operation.
  * authoritySelector `string`: The authority selector specified by the requestor, if any. It is not guaranteed that the principal was allowed to use this authority.
  * principalEmail `string`: The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id).
  * principalSubject `string`: String representation of identity of requesting party. Populated for both first and third party identities.
  * serviceAccountDelegationInfo `array`: Identity delegation history of an authenticated service account that makes the request. It contains information on the real authorities that try to access GCP resources by delegating on a service account. When multiple authorities present, they are guaranteed to be sorted based on the original ordering of the identity delegation events.
    * items [ServiceAccountDelegationInfo](#serviceaccountdelegationinfo)
  * serviceAccountKeyName `string`: The name of the service account key used to create or exchange credentials for authenticating the service account making the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}"
  * thirdPartyPrincipal `object`: The third party identification (if any) of the authenticated user making the request. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.

### AuthorizationInfo
* AuthorizationInfo `object`: Authorization information for the operation.
  * granted `boolean`: Whether or not authorization for `resource` and `permission` was granted.
  * permission `string`: The required IAM permission.
  * resource `string`: The resource being accessed, as a REST-style string. For example: bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID
  * resourceAttributes [Resource](#resource)

### CheckRequest
* CheckRequest `object`: Request message for the Check method.
  * attributes [AttributeContext](#attributecontext)
  * resources `array`: Describes the resources and the policies applied to each resource.
    * items [ResourceInfo](#resourceinfo)
  * serviceConfigId `string`: Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration.

### CheckResponse
* CheckResponse `object`: Response message for the Check method.
  * headers `object`: Returns a set of request contexts generated from the `CheckRequest`.
  * status [Status](#status)

### FirstPartyPrincipal
* FirstPartyPrincipal `object`: First party identity principal.
  * principalEmail `string`: The email address of a Google account. .
  * serviceMetadata `object`: Metadata about the service that uses the service account. .

### Peer
* Peer `object`: This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.
  * ip `string`: The IP address of the peer.
  * labels `object`: The labels associated with the peer.
  * port `string`: The network port of the peer.
  * principal `string`: The identity of this peer. Similar to `Request.auth.principal`, but relative to the peer instead of the request. For example, the idenity associated with a load balancer that forwared the request.
  * regionCode `string`: The CLDR country/region code associated with the above IP address. If the IP address is private, the `region_code` should reflect the physical location where this peer is running.

### ReportRequest
* ReportRequest `object`: Request message for the Report method.
  * operations `array`: Describes the list of operations to be reported. Each operation is represented as an AttributeContext, and contains all attributes around an API access.
    * items [AttributeContext](#attributecontext)
  * serviceConfigId `string`: Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest configuration.

### ReportResponse
* ReportResponse `object`: Response message for the Report method. If the request contains any invalid data, the server returns an RPC error.

### Request
* Request `object`: This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request.
  * host `string`: The HTTP request `Host` header value.
  * auth [Auth](#auth)
  * headers `object`: The HTTP request headers. If multiple headers share the same key, they must be merged according to the HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive.
  * id `string`: The unique ID for a request, which can be propagated to downstream systems. The ID should have low probability of collision within a single day for a specific service.
  * method `string`: The HTTP request method, such as `GET`, `POST`.
  * path `string`: The HTTP URL path.
  * protocol `string`: The network protocol used with the request, such as "http/1.1", "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for details.
  * query `string`: The HTTP URL query in the format of `name1=value1&name2=value2`, as it appears in the first line of the HTTP request. No decoding is performed.
  * reason `string`: A special parameter for request reason. It is used by security systems to associate auditing information with a request.
  * scheme `string`: The HTTP URL scheme, such as `http` and `https`.
  * size `string`: The HTTP request size in bytes. If unknown, it must be -1.
  * time `string`: The timestamp when the `destination` service receives the first byte of the request.

### RequestMetadata
* RequestMetadata `object`: Metadata about the request.
  * callerIp `string`: The IP address of the caller. For caller from internet, this will be public IPv4 or IPv6 address. For caller from a Compute Engine VM with external IP address, this will be the VM's external IP address. For caller from a Compute Engine VM without external IP address, if the VM is in the same organization (or project) as the accessed resource, `caller_ip` will be the VM's internal IPv4 address, otherwise the `caller_ip` will be redacted to "gce-internal-ip". See https://cloud.google.com/compute/docs/vpc/ for more information.
  * callerNetwork `string`: The network of the caller. Set only if the network host project is part of the same GCP organization (or project) as the accessed resource. See https://cloud.google.com/compute/docs/vpc/ for more information. This is a scheme-less URI full resource name. For example: "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID"
  * callerSuppliedUserAgent `string`: The user agent of the caller. This information is not authenticated and should be treated accordingly. For example: + `google-api-python-client/1.4.0`: The request was made by the Google API client for Python. + `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`: The request was made by the Google Cloud SDK CLI (gcloud). + `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`: The request was made from the `my-project` App Engine app. NOLINT
  * destinationAttributes [Peer](#peer)
  * requestAttributes [Request](#request)

### Resource
* Resource `object`: This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service.
  * annotations `object`: Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  * createTime `string`: Output only. The timestamp when the resource was created. This may be either the time creation was initiated or when it was completed.
  * deleteTime `string`: Output only. The timestamp when the resource was deleted. If the resource is not deleted, this must be empty.
  * displayName `string`: Mutable. The display name set by clients. Must be <= 63 characters.
  * etag `string`: Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written.
  * labels `object`: The labels or tags on the resource, such as AWS resource tags and Kubernetes resource labels.
  * name `string`: The stable identifier (name) of a resource on the `service`. A resource can be logically identified as "//{resource.service}/{resource.name}". The differences between a resource name and a URI are: * Resource name is a logical identifier, independent of network protocol and API version. For example, `//pubsub.googleapis.com/projects/123/topics/news-feed`. * URI often includes protocol and version information, so it can be used directly by applications. For example, `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`. See https://cloud.google.com/apis/design/resource_names for details.
  * service `string`: The name of the service that this resource belongs to, such as `pubsub.googleapis.com`. The service may be different from the DNS hostname that actually serves the request.
  * type `string`: The type of the resource. The syntax is platform-specific because different platforms define their resources differently. For Google APIs, the type format must be "{service}/{kind}".
  * uid `string`: The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
  * updateTime `string`: Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value.

### ResourceInfo
* ResourceInfo `object`: Describes a resource referenced in the request.
  * name `string`: The name of the resource referenced in the request.
  * permission `string`: The resource permission needed for this request. The format must be "{service}/{plural}.{verb}".
  * type `string`: The resource type in the format of "{service}/{kind}".

### ResourceLocation
* ResourceLocation `object`: Location information about a resource.
  * currentLocations `array`: The locations of a resource after the execution of the operation. Requests to create or delete a location based resource must populate the 'current_locations' field and not the 'original_locations' field. For example: "europe-west1-a" "us-east1" "nam3"
    * items `string`
  * originalLocations `array`: The locations of a resource prior to the execution of the operation. Requests that mutate the resource's location must populate both the 'original_locations' as well as the 'current_locations' fields. For example: "europe-west1-a" "us-east1" "nam3"
    * items `string`

### Response
* Response `object`: This message defines attributes for a typical network response. It generally models semantics of an HTTP response.
  * code `string`: The HTTP response status code, such as `200` and `404`.
  * headers `object`: The HTTP response headers. If multiple headers share the same key, they must be merged according to HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive.
  * size `string`: The HTTP response size in bytes. If unknown, it must be -1.
  * time `string`: The timestamp when the `destination` service generates the first byte of the response.

### ServiceAccountDelegationInfo
* ServiceAccountDelegationInfo `object`: Identity delegation history of an authenticated service account.
  * firstPartyPrincipal [FirstPartyPrincipal](#firstpartyprincipal)
  * principalSubject `string`: A string representing the principal_subject associated with the identity. See go/3pical for more info on how principal_subject is formatted.
  * thirdPartyPrincipal [ThirdPartyPrincipal](#thirdpartyprincipal)

### SpanContext
* SpanContext `object`: The context of a span, attached to Exemplars in Distribution values during aggregation. It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID]
  * spanName `string`: The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### ThirdPartyPrincipal
* ThirdPartyPrincipal `object`: Third party identity principal.
  * thirdPartyClaims `object`: Metadata about third party identity.


