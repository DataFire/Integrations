# @datafire/google_accesscontextmanager

Client library for Access Context Manager API

## Installation and Usage
```bash
npm install --save @datafire/google_accesscontextmanager
```
```js
let google_accesscontextmanager = require('@datafire/google_accesscontextmanager').create({
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

An API for setting attribute based access control to requests to GCP services.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_accesscontextmanager.oauthCallback({
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
google_accesscontextmanager.oauthRefresh(null, context)
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

### accesscontextmanager.accessPolicies.list
List all AccessPolicies under a container.


```js
google_accesscontextmanager.accesscontextmanager.accessPolicies.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Number of AccessPolicy instances to include in the list. Default 100.
  * pageToken `string`: Next page token for the next batch of AccessPolicy instances. Defaults to the first page of results.
  * parent `string`: Required. Resource name for the container to list AccessPolicy instances from. Format: `organizations/{org_id}`
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
* output [ListAccessPoliciesResponse](#listaccesspoliciesresponse)

### accesscontextmanager.accessPolicies.create
Create an `AccessPolicy`. Fails if this organization already has a `AccessPolicy`. The longrunning Operation will have a successful status once the `AccessPolicy` has propagated to long-lasting storage. Syntactic and basic semantic errors will be returned in `metadata` as a BadRequest proto.


```js
google_accesscontextmanager.accesscontextmanager.accessPolicies.create({}, context)
```

#### Input
* input `object`
  * body [AccessPolicy](#accesspolicy)
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
* output [Operation](#operation)

### accesscontextmanager.accessPolicies.servicePerimeters.delete
Delete a Service Perimeter by resource name. The longrunning operation from this RPC will have a successful status once the Service Perimeter has been removed from long-lasting storage.


```js
google_accesscontextmanager.accesscontextmanager.accessPolicies.servicePerimeters.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name for the Service Perimeter. Format: `accessPolicies/{policy_id}/servicePerimeters/{service_perimeter_id}`
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
* output [Operation](#operation)

### accesscontextmanager.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_accesscontextmanager.accesscontextmanager.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
  * accessLevelFormat `string` (values: LEVEL_FORMAT_UNSPECIFIED, AS_DEFINED, CEL): Whether to return `BasicLevels` in the Cloud Common Expression Language rather than as `BasicLevels`. Defaults to AS_DEFINED, where Access Levels are returned as `BasicLevels` or `CustomLevels` based on how they were created. If set to CEL, all Access Levels are returned as `CustomLevels`. In the CEL case, `BasicLevels` are translated to equivalent `CustomLevels`.
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
* output [Operation](#operation)

### accesscontextmanager.accessPolicies.servicePerimeters.patch
Update a Service Perimeter. The longrunning operation from this RPC will have a successful status once the changes to the Service Perimeter have propagated to long-lasting storage. Service Perimeter containing errors will result in an error response for the first error encountered.


```js
google_accesscontextmanager.accesscontextmanager.accessPolicies.servicePerimeters.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name for the ServicePerimeter. The `short_name` component must begin with a letter and only include alphanumeric and '_'. Format: `accessPolicies/{policy_id}/servicePerimeters/{short_name}`
  * updateMask `string`: Required. Mask to control which fields get updated. Must be non-empty.
  * body [ServicePerimeter](#serviceperimeter)
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
* output [Operation](#operation)

### accesscontextmanager.accessPolicies.accessLevels.list
List all Access Levels for an access policy.


```js
google_accesscontextmanager.accesscontextmanager.accessPolicies.accessLevels.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name for the access policy to list Access Levels from. Format: `accessPolicies/{policy_id}`
  * accessLevelFormat `string` (values: LEVEL_FORMAT_UNSPECIFIED, AS_DEFINED, CEL): Whether to return `BasicLevels` in the Cloud Common Expression language, as `CustomLevels`, rather than as `BasicLevels`. Defaults to returning `AccessLevels` in the format they were defined.
  * pageSize `integer`: Number of Access Levels to include in the list. Default 100.
  * pageToken `string`: Next page token for the next batch of Access Level instances. Defaults to the first page of results.
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
* output [ListAccessLevelsResponse](#listaccesslevelsresponse)

### accesscontextmanager.accessPolicies.accessLevels.create
Create an Access Level. The longrunning operation from this RPC will have a successful status once the Access Level has propagated to long-lasting storage. Access Levels containing errors will result in an error response for the first error encountered.


```js
google_accesscontextmanager.accesscontextmanager.accessPolicies.accessLevels.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name for the access policy which owns this Access Level. Format: `accessPolicies/{policy_id}`
  * body [AccessLevel](#accesslevel)
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
* output [Operation](#operation)

### accesscontextmanager.accessPolicies.servicePerimeters.list
List all Service Perimeters for an access policy.


```js
google_accesscontextmanager.accesscontextmanager.accessPolicies.servicePerimeters.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name for the access policy to list Service Perimeters from. Format: `accessPolicies/{policy_id}`
  * pageSize `integer`: Number of Service Perimeters to include in the list. Default 100.
  * pageToken `string`: Next page token for the next batch of Service Perimeter instances. Defaults to the first page of results.
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
* output [ListServicePerimetersResponse](#listserviceperimetersresponse)

### accesscontextmanager.accessPolicies.servicePerimeters.create
Create a Service Perimeter. The longrunning operation from this RPC will have a successful status once the Service Perimeter has propagated to long-lasting storage. Service Perimeters containing errors will result in an error response for the first error encountered.


```js
google_accesscontextmanager.accesscontextmanager.accessPolicies.servicePerimeters.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name for the access policy which owns this Service Perimeter. Format: `accessPolicies/{policy_id}`
  * body [ServicePerimeter](#serviceperimeter)
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
* output [Operation](#operation)



## Definitions

### AccessLevel
* AccessLevel `object`: An `AccessLevel` is a label that can be applied to requests to Google Cloud services, along with a list of requirements necessary for the label to be applied.
  * basic [BasicLevel](#basiclevel)
  * custom [CustomLevel](#customlevel)
  * description `string`: Description of the `AccessLevel` and its use. Does not affect behavior.
  * name `string`: Required. Resource name for the Access Level. The `short_name` component must begin with a letter and only include alphanumeric and '_'. Format: `accessPolicies/{policy_id}/accessLevels/{short_name}`. The maximum length // of the `short_name` component is 50 characters.
  * title `string`: Human readable title. Must be unique within the Policy.

### AccessPolicy
* AccessPolicy `object`: `AccessPolicy` is a container for `AccessLevels` (which define the necessary attributes to use Google Cloud services) and `ServicePerimeters` (which define regions of services able to freely pass data within a perimeter). An access policy is globally visible within an organization, and the restrictions it specifies apply to all projects within an organization.
  * name `string`: Output only. Resource name of the `AccessPolicy`. Format: `accessPolicies/{policy_id}`
  * parent `string`: Required. The parent of this `AccessPolicy` in the Cloud Resource Hierarchy. Currently immutable once created. Format: `organizations/{organization_id}`
  * title `string`: Required. Human readable title. Does not affect behavior.

### BasicLevel
* BasicLevel `object`: `BasicLevel` is an `AccessLevel` using a set of recommended features.
  * combiningFunction `string` (values: AND, OR): How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND.
  * conditions `array`: Required. A list of requirements for the `AccessLevel` to be granted.
    * items [Condition](#condition)

### Condition
* Condition `object`: A condition necessary for an `AccessLevel` to be granted. The Condition is an AND over its fields. So a Condition is true if: 1) the request IP is from one of the listed subnetworks AND 2) the originating device complies with the listed device policy AND 3) all listed access levels are granted AND 4) the request was sent at a time allowed by the DateTimeRestriction.
  * devicePolicy [DevicePolicy](#devicepolicy)
  * ipSubnetworks `array`: CIDR block IP subnetwork specification. May be IPv4 or IPv6. Note that for a CIDR IP address block, the specified IP address portion must be properly truncated (i.e. all the host bits must be zero) or the input is considered malformed. For example, "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly, for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32" is not. The originating IP of a request must be in one of the listed subnets in order for this Condition to be true. If empty, all IP addresses are allowed.
    * items `string`
  * members `array`: The request must be made by one of the provided user or service accounts. Groups are not supported. Syntax: `user:{emailid}` `serviceAccount:{emailid}` If not specified, a request may come from any user.
    * items `string`
  * negate `boolean`: Whether to negate the Condition. If true, the Condition becomes a NAND over its non-empty fields, each field must be false for the Condition overall to be satisfied. Defaults to false.
  * regions `array`: The request must originate from one of the provided countries/regions. Must be valid ISO 3166-1 alpha-2 codes.
    * items `string`
  * requiredAccessLevels `array`: A list of other access levels defined in the same `Policy`, referenced by resource name. Referencing an `AccessLevel` which does not exist is an error. All access levels listed must be granted for the Condition to be true. Example: "`accessPolicies/MY_POLICY/accessLevels/LEVEL_NAME"`
    * items `string`

### CustomLevel
* CustomLevel `object`: `CustomLevel` is an `AccessLevel` using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request. See CEL spec at: https://github.com/google/cel-spec
  * expr [Expr](#expr)

### DevicePolicy
* DevicePolicy `object`: `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.
  * allowedDeviceManagementLevels `array`: Allowed device management levels, an empty list allows all management levels.
    * items `string` (values: MANAGEMENT_UNSPECIFIED, NONE, BASIC, COMPLETE)
  * allowedEncryptionStatuses `array`: Allowed encryptions statuses, an empty list allows all statuses.
    * items `string` (values: ENCRYPTION_UNSPECIFIED, ENCRYPTION_UNSUPPORTED, UNENCRYPTED, ENCRYPTED)
  * osConstraints `array`: Allowed OS versions, an empty list allows all types and all versions.
    * items [OsConstraint](#osconstraint)
  * requireAdminApproval `boolean`: Whether the device needs to be approved by the customer admin.
  * requireCorpOwned `boolean`: Whether the device needs to be corp owned.
  * requireScreenlock `boolean`: Whether or not screenlock is required for the DevicePolicy to be true. Defaults to `false`.

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### ListAccessLevelsResponse
* ListAccessLevelsResponse `object`: A response to `ListAccessLevelsRequest`.
  * accessLevels `array`: List of the Access Level instances.
    * items [AccessLevel](#accesslevel)
  * nextPageToken `string`: The pagination token to retrieve the next page of results. If the value is empty, no further results remain.

### ListAccessPoliciesResponse
* ListAccessPoliciesResponse `object`: A response to `ListAccessPoliciesRequest`.
  * accessPolicies `array`: List of the AccessPolicy instances.
    * items [AccessPolicy](#accesspolicy)
  * nextPageToken `string`: The pagination token to retrieve the next page of results. If the value is empty, no further results remain.

### ListServicePerimetersResponse
* ListServicePerimetersResponse `object`: A response to `ListServicePerimetersRequest`.
  * nextPageToken `string`: The pagination token to retrieve the next page of results. If the value is empty, no further results remain.
  * servicePerimeters `array`: List of the Service Perimeter instances.
    * items [ServicePerimeter](#serviceperimeter)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### OsConstraint
* OsConstraint `object`: A restriction on the OS type and version of devices making requests.
  * minimumVersion `string`: The minimum allowed OS version. If not set, any version of this OS satisfies the constraint. Format: `"major.minor.patch"`. Examples: `"10.5.301"`, `"9.2.1"`.
  * osType `string` (values: OS_UNSPECIFIED, DESKTOP_MAC, DESKTOP_WINDOWS, DESKTOP_LINUX, DESKTOP_CHROME_OS, ANDROID, IOS): Required. The allowed OS type.
  * requireVerifiedChromeOs `boolean`: Only allows requests from devices with a verified Chrome OS. Verifications includes requirements that the device is enterprise-managed, conformant to domain policies, and the caller has permission to call the API targeted by the request.

### ServicePerimeter
* ServicePerimeter `object`: `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges.
  * description `string`: Description of the `ServicePerimeter` and its use. Does not affect behavior.
  * name `string`: Required. Resource name for the ServicePerimeter. The `short_name` component must begin with a letter and only include alphanumeric and '_'. Format: `accessPolicies/{policy_id}/servicePerimeters/{short_name}`
  * perimeterType `string` (values: PERIMETER_TYPE_REGULAR, PERIMETER_TYPE_BRIDGE): Perimeter type indicator. A single project is allowed to be a member of single regular perimeter, but multiple service perimeter bridges. A project cannot be a included in a perimeter bridge without being included in regular perimeter. For perimeter bridges, restricted/unrestricted service lists as well as access lists must be empty.
  * status [ServicePerimeterConfig](#serviceperimeterconfig)
  * title `string`: Human readable title. Must be unique within the Policy.

### ServicePerimeterConfig
* ServicePerimeterConfig `object`: `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
  * accessLevels `array`: A list of `AccessLevel` resource names that allow resources within the `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `"accessPolicies/MY_POLICY/accessLevels/MY_LEVEL"`. For Service Perimeter Bridge, must be empty.
    * items `string`
  * resources `array`: A list of Google Cloud resources that are inside of the service perimeter. Currently only projects are allowed. Format: `projects/{project_number}`
    * items `string`
  * restrictedServices `array`: Google Cloud services that are subject to the Service Perimeter restrictions. Must contain a list of services. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter's access restrictions.
    * items `string`
  * unrestrictedServices `array`: Google Cloud services that are not subject to the Service Perimeter restrictions. Deprecated. Must be set to a single wildcard "*". The wildcard means that unless explicitly specified by "restricted_services" list, any service is treated as unrestricted.
    * items `string`
  * vpcAccessibleServices [VpcAccessibleServices](#vpcaccessibleservices)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### VpcAccessibleServices
* VpcAccessibleServices `object`: Specifies how APIs are allowed to communicate within the Service Perimeter.
  * allowedServices `array`: The list of APIs usable within the Service Perimeter. Must be empty unless 'enable_restriction' is True. You can specify a list of individual services, as well as include the 'RESTRICTED-SERVICES' value, which automatically includes all of the services protected by the perimeter.
    * items `string`
  * enableRestriction `boolean`: Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed_services'.


