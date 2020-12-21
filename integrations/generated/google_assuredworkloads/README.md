# @datafire/google_assuredworkloads

Client library for Assured Workloads API

## Installation and Usage
```bash
npm install --save @datafire/google_assuredworkloads
```
```js
let google_assuredworkloads = require('@datafire/google_assuredworkloads').create({
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



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_assuredworkloads.oauthCallback({
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
google_assuredworkloads.oauthRefresh(null, context)
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

### assuredworkloads.organizations.locations.workloads.delete
Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.


```js
google_assuredworkloads.assuredworkloads.organizations.locations.workloads.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id}
  * etag `string`: Optional. The etag of the workload. If this is provided, it must match the server's etag.
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

### assuredworkloads.organizations.locations.workloads.get
Gets Assured Workload associated with a CRM Node


```js
google_assuredworkloads.assuredworkloads.organizations.locations.workloads.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the Workload to fetch. This is the workloads's relative path in the API, formatted as "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
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
* output [GoogleCloudAssuredworkloadsV1Workload](#googlecloudassuredworkloadsv1workload)

### assuredworkloads.organizations.locations.workloads.patch
Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.


```js
google_assuredworkloads.assuredworkloads.organizations.locations.workloads.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.
  * updateMask `string`: Required. The list of fields to be updated.
  * body [GoogleCloudAssuredworkloadsV1Workload](#googlecloudassuredworkloadsv1workload)
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
* output [GoogleCloudAssuredworkloadsV1Workload](#googlecloudassuredworkloadsv1workload)

### assuredworkloads.organizations.locations.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_assuredworkloads.assuredworkloads.organizations.locations.operations.list({
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

### assuredworkloads.organizations.locations.workloads.list
Lists Assured Workloads under a CRM Node.


```js
google_assuredworkloads.assuredworkloads.organizations.locations.workloads.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id}/locations/{location}`.
  * filter `string`: A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported.
  * pageSize `integer`: Page size.
  * pageToken `string`: Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests.
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
* output [GoogleCloudAssuredworkloadsV1ListWorkloadsResponse](#googlecloudassuredworkloadsv1listworkloadsresponse)

### assuredworkloads.organizations.locations.workloads.create
Creates Assured Workload.


```js
google_assuredworkloads.assuredworkloads.organizations.locations.workloads.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id}/locations/{location_id}`.
  * externalId `string`: Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the identifier will add a label to the workload and contained projects with the identifier as the value.
  * body [GoogleCloudAssuredworkloadsV1Workload](#googlecloudassuredworkloadsv1workload)
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



## Definitions

### GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata
* GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata `object`: Operation metadata to give request details of CreateWorkload.
  * complianceRegime `string` (values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE): Optional. Compliance controls that should be applied to the resources managed by the workload.
  * createTime `string`: Optional. Time when the operation was created.
  * displayName `string`: Optional. The display name of the workload.
  * parent `string`: Optional. The parent of the workload.

### GoogleCloudAssuredworkloadsV1ListWorkloadsResponse
* GoogleCloudAssuredworkloadsV1ListWorkloadsResponse `object`: Response of ListWorkloads endpoint.
  * nextPageToken `string`: The next page token. Return empty if reached the last page.
  * workloads `array`: List of Workloads under a given parent.
    * items [GoogleCloudAssuredworkloadsV1Workload](#googlecloudassuredworkloadsv1workload)

### GoogleCloudAssuredworkloadsV1Workload
* GoogleCloudAssuredworkloadsV1Workload `object`: An Workload object for managing highly regulated workloads of cloud customers.
  * billingAccount `string`: Required. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
  * complianceRegime `string` (values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE): Required. Immutable. Compliance Regime associated with this workload.
  * createTime `string`: Output only. Immutable. The Workload creation timestamp.
  * displayName `string`: Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
  * etag `string`: Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.
  * kmsSettings [GoogleCloudAssuredworkloadsV1WorkloadKMSSettings](#googlecloudassuredworkloadsv1workloadkmssettings)
  * labels `object`: Optional. Labels applied to the workload.
  * name `string`: Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.
  * provisionedResourcesParent `string`: Input only. The parent resource for the resources managed by this Assured Workload. May be either an organization or a folder. Must be the same or a child of the Workload parent. If not specified all resources are created under the Workload parent. Formats: folders/{folder_id} organizations/{organization_id}
  * resources `array`: Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.
    * items [GoogleCloudAssuredworkloadsV1WorkloadResourceInfo](#googlecloudassuredworkloadsv1workloadresourceinfo)

### GoogleCloudAssuredworkloadsV1WorkloadKMSSettings
* GoogleCloudAssuredworkloadsV1WorkloadKMSSettings `object`: Settings specific to the Key Management Service.
  * nextRotationTime `string`: Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.
  * rotationPeriod `string`: Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.

### GoogleCloudAssuredworkloadsV1WorkloadResourceInfo
* GoogleCloudAssuredworkloadsV1WorkloadResourceInfo `object`: Represent the resources that are children of this Workload.
  * resourceId `string`: Resource identifier. For a project this represents project_number.
  * resourceType `string` (values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT): Indicates the type of resource.

### GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata
* GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata `object`: Operation metadata to give request details of CreateWorkload.
  * complianceRegime `string` (values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE): Optional. Compliance controls that should be applied to the resources managed by the workload.
  * createTime `string`: Optional. Time when the operation was created.
  * displayName `string`: Optional. The display name of the workload.
  * parent `string`: Optional. The parent of the workload.

### GoogleCloudAssuredworkloadsV1beta1Workload
* GoogleCloudAssuredworkloadsV1beta1Workload `object`: An Workload object for managing highly regulated workloads of cloud customers.
  * billingAccount `string`: Required. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
  * cjisSettings [GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings](#googlecloudassuredworkloadsv1beta1workloadcjissettings)
  * complianceRegime `string` (values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE): Required. Immutable. Compliance Regime associated with this workload.
  * createTime `string`: Output only. Immutable. The Workload creation timestamp.
  * displayName `string`: Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
  * etag `string`: Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations.
  * fedrampHighSettings [GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings](#googlecloudassuredworkloadsv1beta1workloadfedramphighsettings)
  * fedrampModerateSettings [GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings](#googlecloudassuredworkloadsv1beta1workloadfedrampmoderatesettings)
  * il4Settings [GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings](#googlecloudassuredworkloadsv1beta1workloadil4settings)
  * kmsSettings [GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings](#googlecloudassuredworkloadsv1beta1workloadkmssettings)
  * labels `object`: Optional. Labels applied to the workload.
  * name `string`: Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only.
  * provisionedResourcesParent `string`: Input only. The parent resource for the resources managed by this Assured Workload. May be either an organization or a folder. Must be the same or a child of the Workload parent. If not specified all resources are created under the Workload parent. Formats: folders/{folder_id} organizations/{organization_id}
  * resources `array`: Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation will fail. Always read only.
    * items [GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo](#googlecloudassuredworkloadsv1beta1workloadresourceinfo)

### GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings
* GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings `object`: Settings specific to resources needed for CJIS.
  * kmsSettings [GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings](#googlecloudassuredworkloadsv1beta1workloadkmssettings)

### GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings
* GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings `object`: Settings specific to resources needed for FedRAMP High.
  * kmsSettings [GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings](#googlecloudassuredworkloadsv1beta1workloadkmssettings)

### GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings
* GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings `object`: Settings specific to resources needed for FedRAMP Moderate.
  * kmsSettings [GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings](#googlecloudassuredworkloadsv1beta1workloadkmssettings)

### GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings
* GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings `object`: Settings specific to resources needed for IL4.
  * kmsSettings [GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings](#googlecloudassuredworkloadsv1beta1workloadkmssettings)

### GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings
* GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings `object`: Settings specific to the Key Management Service.
  * nextRotationTime `string`: Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.
  * rotationPeriod `string`: Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.

### GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo
* GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo `object`: Represent the resources that are children of this Workload.
  * resourceId `string`: Resource identifier. For a project this represents project_number.
  * resourceType `string` (values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT): Indicates the type of resource.

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


