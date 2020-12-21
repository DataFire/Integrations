# @datafire/google_serviceuser

Client library for Service User

## Installation and Usage
```bash
npm install --save @datafire/google_serviceuser
```
```js
let google_serviceuser = require('@datafire/google_serviceuser').create({
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

Enables services that service consumers want to use on Google Cloud Platform, lists the available or enabled services, or disables services that service consumers no longer use.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_serviceuser.oauthCallback({
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
google_serviceuser.oauthRefresh(null, context)
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

### services.search
Search available services.

When no filter is specified, returns all accessible services. For
authenticated users, also returns all services the calling user has
"servicemanagement.services.bind" permission for.


```js
google_serviceuser.services.search({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Requested size of the next page of data.
  * pageToken `string`: Token identifying which result to start with; returned by a previous list
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
* output [SearchServicesResponse](#searchservicesresponse)

### projects.services.disable
Disable a service so it can no longer be used with a
project. This prevents unintended usage that may cause unexpected billing
charges or security leaks.

Operation<response: google.protobuf.Empty>


```js
google_serviceuser.projects.services.disable({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [DisableServiceRequest](#disableservicerequest)
  * name **required** `string`: Name of the consumer and the service to disable for that consumer.
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
* output [Operation](#operation)

### projects.services.enable
Enable a service so it can be used with a project.
See [Cloud Auth Guide](https://cloud.google.com/docs/authentication) for
more information.

Operation<response: google.protobuf.Empty>


```js
google_serviceuser.projects.services.enable({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [EnableServiceRequest](#enableservicerequest)
  * name **required** `string`: Name of the consumer and the service to enable for that consumer.
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
* output [Operation](#operation)

### projects.services.list
List enabled services for the specified consumer.


```js
google_serviceuser.projects.services.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Requested size of the next page of data.
  * pageToken `string`: Token identifying which result to start with; returned by a previous list
  * parent **required** `string`: List enabled services for the specified parent.
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
* output [ListEnabledServicesResponse](#listenabledservicesresponse)



## Definitions

### Api
* Api `object`: Api is a light-weight descriptor for an API Interface.
  * methods `array`: The methods of this interface, in unspecified order.
    * items [Method](#method)
  * mixins `array`: Included interfaces. See Mixin.
    * items [Mixin](#mixin)
  * name `string`: The fully qualified name of this interface, including package name
  * options `array`: Any metadata attached to the interface.
    * items [Option](#option)
  * sourceContext [SourceContext](#sourcecontext)
  * syntax `string` (values: SYNTAX_PROTO2, SYNTAX_PROTO3): The source syntax of the service.
  * version `string`: A version string for this interface. If specified, must have the form

### AuthProvider
* AuthProvider `object`: Configuration for an anthentication provider, including support for
  * audiences `string`: The list of JWT
  * authorizationUrl `string`: Redirect URL if JWT token is required but no present or is expired.
  * id `string`: The unique identifier of the auth provider. It will be referred to by
  * issuer `string`: Identifies the principal that issued the JWT. See
  * jwksUri `string`: URL of the provider's public key set to validate signature of the JWT. See

### AuthRequirement
* AuthRequirement `object`: User-defined authentication requirements, including support for
  * audiences `string`: NOTE: This will be deprecated soon, once AuthProvider.audiences is
  * providerId `string`: id from authentication provider.

### Authentication
* Authentication `object`: `Authentication` defines the authentication configuration for an API.
  * providers `array`: Defines a set of authentication providers that a service supports.
    * items [AuthProvider](#authprovider)
  * rules `array`: A list of authentication rules that apply to individual API methods.
    * items [AuthenticationRule](#authenticationrule)

### AuthenticationRule
* AuthenticationRule `object`: Authentication rules for the service.
  * allowWithoutCredential `boolean`: If true, the service accepts API keys without any other credential.
  * customAuth [CustomAuthRequirements](#customauthrequirements)
  * oauth [OAuthRequirements](#oauthrequirements)
  * requirements `array`: Requirements for additional authentication providers.
    * items [AuthRequirement](#authrequirement)
  * selector `string`: Selects the methods to which this rule applies.

### AuthorizationConfig
* AuthorizationConfig `object`: Configuration of authorization.
  * provider `string`: The name of the authorization provider, such as

### Backend
* Backend `object`: `Backend` defines the backend configuration for a service.
  * rules `array`: A list of API backend rules that apply to individual API methods.
    * items [BackendRule](#backendrule)

### BackendRule
* BackendRule `object`: A backend rule provides configuration for an individual API element.
  * address `string`: The address of the API backend.
  * deadline `number`: The number of seconds to wait for a response from a request.  The default
  * minDeadline `number`: Minimum deadline in seconds needed for this method. Calls having deadline
  * selector `string`: Selects the methods to which this rule applies.

### Billing
* Billing `object`: Billing related configuration of the service.
  * consumerDestinations `array`: Billing configurations for sending metrics to the consumer project.
    * items [BillingDestination](#billingdestination)

### BillingDestination
* BillingDestination `object`: Configuration of a specific billing destination (Currently only support
  * metrics `array`: Names of the metrics to report to this billing destination.
    * items `string`
  * monitoredResource `string`: The monitored resource type. The type must be defined in

### Context
* Context `object`: `Context` defines which contexts an API requests.
  * rules `array`: A list of RPC context rules that apply to individual API methods.
    * items [ContextRule](#contextrule)

### ContextRule
* ContextRule `object`: A context rule provides information about the context for an individual API
  * allowedRequestExtensions `array`: A list of full type names or extension IDs of extensions allowed in grpc
    * items `string`
  * allowedResponseExtensions `array`: A list of full type names or extension IDs of extensions allowed in grpc
    * items `string`
  * provided `array`: A list of full type names of provided contexts.
    * items `string`
  * requested `array`: A list of full type names of requested contexts.
    * items `string`
  * selector `string`: Selects the methods to which this rule applies.

### Control
* Control `object`: Selects and configures the service controller used by the service.  The
  * environment `string`: The service control environment to use. If empty, no control plane

### CustomAuthRequirements
* CustomAuthRequirements `object`: Configuration for a custom authentication provider.
  * provider `string`: A configuration string containing connection information for the

### CustomError
* CustomError `object`: Customize service error responses.  For example, list any service
  * rules `array`: The list of custom error rules that apply to individual API messages.
    * items [CustomErrorRule](#customerrorrule)
  * types `array`: The list of custom error detail types, e.g. 'google.foo.v1.CustomError'.
    * items `string`

### CustomErrorRule
* CustomErrorRule `object`: A custom error rule.
  * isErrorType `boolean`: Mark this message as possible payload in error response.  Otherwise,
  * selector `string`: Selects messages to which this rule applies.

### CustomHttpPattern
* CustomHttpPattern `object`: A custom pattern is used for defining custom HTTP verb.
  * kind `string`: The name of this custom HTTP verb.
  * path `string`: The path matched by this custom verb.

### DisableServiceRequest
* DisableServiceRequest `object`: Request message for DisableService method.

### Documentation
* Documentation `object`: `Documentation` provides the information for describing a service.
  * documentationRootUrl `string`: The URL to the root of documentation.
  * overview `string`: Declares a single overview page. For example:
  * pages `array`: The top level pages for the documentation set.
    * items [Page](#page)
  * rules `array`: A list of documentation rules that apply to individual API elements.
    * items [DocumentationRule](#documentationrule)
  * summary `string`: A short summary of what the service does. Can only be provided by

### DocumentationRule
* DocumentationRule `object`: A documentation rule provides information about individual API elements.
  * deprecationDescription `string`: Deprecation description of the selected element(s). It can be provided if an
  * description `string`: Description of the selected API(s).
  * selector `string`: The selector is a comma-separated list of patterns. Each pattern is a

### EnableServiceRequest
* EnableServiceRequest `object`: Request message for EnableService method.

### Endpoint
* Endpoint `object`: `Endpoint` describes a network endpoint that serves a set of APIs.
  * aliases `array`: DEPRECATED: This field is no longer supported. Instead of using aliases,
    * items `string`
  * allowCors `boolean`: Allowing
  * features `array`: The list of features enabled on this endpoint.
    * items `string`
  * name `string`: The canonical name of this endpoint.
  * target `string`: The specification of an Internet routable address of API frontend that will

### Enum
* Enum `object`: Enum type definition.
  * enumvalue `array`: Enum value definitions.
    * items [EnumValue](#enumvalue)
  * name `string`: Enum type name.
  * options `array`: Protocol buffer options.
    * items [Option](#option)
  * sourceContext [SourceContext](#sourcecontext)
  * syntax `string` (values: SYNTAX_PROTO2, SYNTAX_PROTO3): The source syntax.

### EnumValue
* EnumValue `object`: Enum value definition.
  * name `string`: Enum value name.
  * number `integer`: Enum value number.
  * options `array`: Protocol buffer options.
    * items [Option](#option)

### Experimental
* Experimental `object`: Experimental service configuration. These configuration options can
  * authorization [AuthorizationConfig](#authorizationconfig)

### Field
* Field `object`: A single field of a message type.
  * cardinality `string` (values: CARDINALITY_UNKNOWN, CARDINALITY_OPTIONAL, CARDINALITY_REQUIRED, CARDINALITY_REPEATED): The field cardinality.
  * defaultValue `string`: The string value of the default value of this field. Proto2 syntax only.
  * jsonName `string`: The field JSON name.
  * kind `string` (values: TYPE_UNKNOWN, TYPE_DOUBLE, TYPE_FLOAT, TYPE_INT64, TYPE_UINT64, TYPE_INT32, TYPE_FIXED64, TYPE_FIXED32, TYPE_BOOL, TYPE_STRING, TYPE_GROUP, TYPE_MESSAGE, TYPE_BYTES, TYPE_UINT32, TYPE_ENUM, TYPE_SFIXED32, TYPE_SFIXED64, TYPE_SINT32, TYPE_SINT64): The field type.
  * name `string`: The field name.
  * number `integer`: The field number.
  * oneofIndex `integer`: The index of the field type in `Type.oneofs`, for message or enumeration
  * options `array`: The protocol buffer options.
    * items [Option](#option)
  * packed `boolean`: Whether to use alternative packed wire representation.
  * typeUrl `string`: The field type URL, without the scheme, for message or enumeration

### Http
* Http `object`: Defines the HTTP configuration for an API service. It contains a list of
  * fullyDecodeReservedExpansion `boolean`: When set to true, URL path parmeters will be fully URI-decoded except in
  * rules `array`: A list of HTTP configuration rules that apply to individual API methods.
    * items [HttpRule](#httprule)

### HttpRule
* HttpRule `object`: `HttpRule` defines the mapping of an RPC method to one or more HTTP
  * additionalBindings `array`: Additional HTTP bindings for the selector. Nested bindings must
    * items [HttpRule](#httprule)
  * body `string`: The name of the request field whose value is mapped to the HTTP body, or
  * custom [CustomHttpPattern](#customhttppattern)
  * delete `string`: Used for deleting a resource.
  * get `string`: Used for listing and getting information about resources.
  * mediaDownload [MediaDownload](#mediadownload)
  * mediaUpload [MediaUpload](#mediaupload)
  * patch `string`: Used for updating a resource.
  * post `string`: Used for creating a resource.
  * put `string`: Used for updating a resource.
  * selector `string`: Selects methods to which this rule applies.

### LabelDescriptor
* LabelDescriptor `object`: A description of a label.
  * description `string`: A human-readable description for the label.
  * key `string`: The label key.
  * valueType `string` (values: STRING, BOOL, INT64): The type of data that can be assigned to the label.

### ListEnabledServicesResponse
* ListEnabledServicesResponse `object`: Response message for `ListEnabledServices` method.
  * nextPageToken `string`: Token that can be passed to `ListEnabledServices` to resume a paginated
  * services `array`: Services enabled for the specified parent.
    * items [PublishedService](#publishedservice)

### LogDescriptor
* LogDescriptor `object`: A description of a log type. Example in YAML format:
  * description `string`: A human-readable description of this log. This information appears in
  * displayName `string`: The human-readable name for this log. This information appears on
  * labels `array`: The set of labels that are available to describe a specific log entry.
    * items [LabelDescriptor](#labeldescriptor)
  * name `string`: The name of the log. It must be less than 512 characters long and can

### Logging
* Logging `object`: Logging configuration of the service.
  * consumerDestinations `array`: Logging configurations for sending logs to the consumer project.
    * items [LoggingDestination](#loggingdestination)
  * producerDestinations `array`: Logging configurations for sending logs to the producer project.
    * items [LoggingDestination](#loggingdestination)

### LoggingDestination
* LoggingDestination `object`: Configuration of a specific logging destination (the producer project
  * logs `array`: Names of the logs to be sent to this destination. Each name must
    * items `string`
  * monitoredResource `string`: The monitored resource type. The type must be defined in the

### MediaDownload
* MediaDownload `object`: Defines the Media configuration for a service in case of a download.
  * completeNotification `boolean`: A boolean that determines whether a notification for the completion of a
  * downloadService `string`: DO NOT USE FIELDS BELOW THIS LINE UNTIL THIS WARNING IS REMOVED.
  * dropzone `string`: Name of the Scotty dropzone to use for the current API.
  * enabled `boolean`: Whether download is enabled.
  * maxDirectDownloadSize `string`: Optional maximum acceptable size for direct download.
  * useDirectDownload `boolean`: A boolean that determines if direct download from ESF should be used for

### MediaUpload
* MediaUpload `object`: Defines the Media configuration for a service in case of an upload.
  * completeNotification `boolean`: A boolean that determines whether a notification for the completion of an
  * dropzone `string`: Name of the Scotty dropzone to use for the current API.
  * enabled `boolean`: Whether upload is enabled.
  * maxSize `string`: Optional maximum acceptable size for an upload.
  * mimeTypes `array`: An array of mimetype patterns. Esf will only accept uploads that match one
    * items `string`
  * progressNotification `boolean`: Whether to receive a notification for progress changes of media upload.
  * startNotification `boolean`: Whether to receive a notification on the start of media upload.
  * uploadService `string`: DO NOT USE FIELDS BELOW THIS LINE UNTIL THIS WARNING IS REMOVED.

### Method
* Method `object`: Method represents a method of an API interface.
  * name `string`: The simple name of this method.
  * options `array`: Any metadata attached to the method.
    * items [Option](#option)
  * requestStreaming `boolean`: If true, the request is streamed.
  * requestTypeUrl `string`: A URL of the input message type.
  * responseStreaming `boolean`: If true, the response is streamed.
  * responseTypeUrl `string`: The URL of the output message type.
  * syntax `string` (values: SYNTAX_PROTO2, SYNTAX_PROTO3): The source syntax of this method.

### MetricDescriptor
* MetricDescriptor `object`: Defines a metric type and its schema. Once a metric descriptor is created,
  * description `string`: A detailed description of the metric, which can be used in documentation.
  * displayName `string`: A concise name for the metric, which can be displayed in user interfaces.
  * labels `array`: The set of labels that can be used to describe a specific
    * items [LabelDescriptor](#labeldescriptor)
  * metricKind `string` (values: METRIC_KIND_UNSPECIFIED, GAUGE, DELTA, CUMULATIVE): Whether the metric records instantaneous values, changes to a value, etc.
  * name `string`: The resource name of the metric descriptor.
  * type `string`: The metric type, including its DNS name prefix. The type is not
  * unit `string`: The unit in which the metric value is reported. It is only applicable
  * valueType `string` (values: VALUE_TYPE_UNSPECIFIED, BOOL, INT64, DOUBLE, STRING, DISTRIBUTION, MONEY): Whether the measurement is an integer, a floating-point number, etc.

### MetricRule
* MetricRule `object`: Bind API methods to metrics. Binding a method to a metric causes that
  * metricCosts `object`: Metrics to update when the selected methods are called, and the associated
  * selector `string`: Selects the methods to which this rule applies.

### Mixin
* Mixin `object`: Declares an API Interface to be included in this interface. The including
  * name `string`: The fully qualified name of the interface which is included.
  * root `string`: If non-empty specifies a path under which inherited HTTP paths

### MonitoredResourceDescriptor
* MonitoredResourceDescriptor `object`: An object that describes the schema of a MonitoredResource object using a
  * description `string`: Optional. A detailed description of the monitored resource type that might
  * displayName `string`: Optional. A concise name for the monitored resource type that might be
  * labels `array`: Required. A set of labels used to describe instances of this monitored
    * items [LabelDescriptor](#labeldescriptor)
  * name `string`: Optional. The resource name of the monitored resource descriptor:
  * type `string`: Required. The monitored resource type. For example, the type

### Monitoring
* Monitoring `object`: Monitoring configuration of the service.
  * consumerDestinations `array`: Monitoring configurations for sending metrics to the consumer project.
    * items [MonitoringDestination](#monitoringdestination)
  * producerDestinations `array`: Monitoring configurations for sending metrics to the producer project.
    * items [MonitoringDestination](#monitoringdestination)

### MonitoringDestination
* MonitoringDestination `object`: Configuration of a specific monitoring destination (the producer project
  * metrics `array`: Names of the metrics to report to this monitoring destination.
    * items `string`
  * monitoredResource `string`: The monitored resource type. The type must be defined in

### OAuthRequirements
* OAuthRequirements `object`: OAuth scopes are a way to define data and permissions on data. For example,
  * canonicalScopes `string`: The list of publicly documented OAuth scopes that are allowed access. An

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### OperationMetadata
* OperationMetadata `object`: The metadata associated with a long running operation resource.
  * progressPercentage `integer`: Percentage of completion of this operation, ranging from 0 to 100.
  * resourceNames `array`: The full name of the resources that this operation is directly
    * items `string`
  * startTime `string`: The start time of the operation.
  * steps `array`: Detailed status information for each step. The order is undetermined.
    * items [Step](#step)

### Option
* Option `object`: A protocol buffer option, which can be attached to a message, field,
  * name `string`: The option's name. For protobuf built-in options (options defined in
  * value `object`: The option's value packed in an Any message. If the value is a primitive,

### Page
* Page `object`: Represents a documentation page. A page can contain subpages to represent
  * content `string`: The Markdown content of the page. You can use <code>&#40;== include {path} ==&#41;</code>
  * name `string`: The name of the page. It will be used as an identity of the page to
  * subpages `array`: Subpages of this page. The order of subpages specified here will be
    * items [Page](#page)

### PublishedService
* PublishedService `object`: The published version of a Service that is managed by
  * name `string`: The resource name of the service.
  * service [Service](#service)

### Quota
* Quota `object`: Quota configuration helps to achieve fairness and budgeting in service
  * limits `array`: List of `QuotaLimit` definitions for the service.
    * items [QuotaLimit](#quotalimit)
  * metricRules `array`: List of `MetricRule` definitions, each one mapping a selected method to one
    * items [MetricRule](#metricrule)

### QuotaLimit
* QuotaLimit `object`: `QuotaLimit` defines a specific limit that applies over a specified duration
  * defaultLimit `string`: Default number of tokens that can be consumed during the specified
  * description `string`: Optional. User-visible, extended description for this quota limit.
  * displayName `string`: User-visible display name for this limit.
  * duration `string`: Duration of this limit in textual notation. Example: "100s", "24h", "1d".
  * freeTier `string`: Free tier value displayed in the Developers Console for this limit.
  * maxLimit `string`: Maximum number of tokens that can be consumed during the specified
  * metric `string`: The name of the metric this quota limit applies to. The quota limits with
  * name `string`: Name of the quota limit.
  * unit `string`: Specify the unit of the quota limit. It uses the same syntax as
  * values `object`: Tiered limit values. You must specify this as a key:value pair, with an

### SearchServicesResponse
* SearchServicesResponse `object`: Response message for SearchServices method.
  * nextPageToken `string`: Token that can be passed to `ListAvailableServices` to resume a paginated
  * services `array`: Services available publicly or available to the authenticated caller.
    * items [PublishedService](#publishedservice)

### Service
* Service `object`: `Service` is the root object of Google service configuration schema. It
  * apis `array`: A list of API interfaces exported by this service. Only the `name` field
    * items [Api](#api)
  * authentication [Authentication](#authentication)
  * backend [Backend](#backend)
  * billing [Billing](#billing)
  * configVersion `integer`: The semantic version of the service configuration. The config version
  * context [Context](#context)
  * control [Control](#control)
  * customError [CustomError](#customerror)
  * documentation [Documentation](#documentation)
  * endpoints `array`: Configuration for network endpoints.  If this is empty, then an endpoint
    * items [Endpoint](#endpoint)
  * enums `array`: A list of all enum types included in this API service.  Enums
    * items [Enum](#enum)
  * experimental [Experimental](#experimental)
  * http [Http](#http)
  * id `string`: A unique ID for a specific instance of this message, typically assigned
  * logging [Logging](#logging)
  * logs `array`: Defines the logs used by this service.
    * items [LogDescriptor](#logdescriptor)
  * metrics `array`: Defines the metrics used by this service.
    * items [MetricDescriptor](#metricdescriptor)
  * monitoredResources `array`: Defines the monitored resources used by this service. This is required
    * items [MonitoredResourceDescriptor](#monitoredresourcedescriptor)
  * monitoring [Monitoring](#monitoring)
  * name `string`: The DNS address at which this service is available,
  * producerProjectId `string`: The Google project that owns this service.
  * quota [Quota](#quota)
  * sourceInfo [SourceInfo](#sourceinfo)
  * systemParameters [SystemParameters](#systemparameters)
  * systemTypes `array`: A list of all proto message types included in this API service.
    * items [Type](#type)
  * title `string`: The product title for this service.
  * types `array`: A list of all proto message types included in this API service.
    * items [Type](#type)
  * usage [Usage](#usage)

### SourceContext
* SourceContext `object`: `SourceContext` represents information about the source of a
  * fileName `string`: The path-qualified name of the .proto file that contained the associated

### SourceInfo
* SourceInfo `object`: Source information used to create a Service Config
  * sourceFiles `array`: All files used during config generation.
    * items `object`

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### Step
* Step `object`: Represents the status of one operation step.
  * description `string`: The short description of the step.
  * status `string` (values: STATUS_UNSPECIFIED, DONE, NOT_STARTED, IN_PROGRESS, FAILED, CANCELLED): The status code.

### SystemParameter
* SystemParameter `object`: Define a parameter's name and location. The parameter may be passed as either
  * httpHeader `string`: Define the HTTP header name to use for the parameter. It is case
  * name `string`: Define the name of the parameter, such as "api_key" . It is case sensitive.
  * urlQueryParameter `string`: Define the URL query parameter name to use for the parameter. It is case

### SystemParameterRule
* SystemParameterRule `object`: Define a system parameter rule mapping system parameter definitions to
  * parameters `array`: Define parameters. Multiple names may be defined for a parameter.
    * items [SystemParameter](#systemparameter)
  * selector `string`: Selects the methods to which this rule applies. Use '*' to indicate all

### SystemParameters
* SystemParameters `object`: ### System parameter configuration
  * rules `array`: Define system parameters.
    * items [SystemParameterRule](#systemparameterrule)

### Type
* Type `object`: A protocol buffer message type.
  * fields `array`: The list of fields.
    * items [Field](#field)
  * name `string`: The fully qualified message name.
  * oneofs `array`: The list of types appearing in `oneof` definitions in this type.
    * items `string`
  * options `array`: The protocol buffer options.
    * items [Option](#option)
  * sourceContext [SourceContext](#sourcecontext)
  * syntax `string` (values: SYNTAX_PROTO2, SYNTAX_PROTO3): The source syntax.

### Usage
* Usage `object`: Configuration controlling usage of a service.
  * producerNotificationChannel `string`: The full resource name of a channel used for sending notifications to the
  * requirements `array`: Requirements that must be satisfied before a consumer project can use the
    * items `string`
  * rules `array`: A list of usage rules that apply to individual API methods.
    * items [UsageRule](#usagerule)

### UsageRule
* UsageRule `object`: Usage configuration rules for the service.
  * allowUnregisteredCalls `boolean`: If true, the selected method allows unregistered calls, e.g. calls
  * selector `string`: Selects the methods to which this rule applies. Use '*' to indicate all
  * skipServiceControl `boolean`: If true, the selected method should skip service control and the control


