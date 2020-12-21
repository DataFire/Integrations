# @datafire/google_accessapproval

Client library for Access Approval API

## Installation and Usage
```bash
npm install --save @datafire/google_accessapproval
```
```js
let google_accessapproval = require('@datafire/google_accessapproval').create({
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

An API for controlling access to data by Google personnel.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_accessapproval.oauthCallback({
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
google_accessapproval.oauthRefresh(null, context)
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

### accessapproval.projects.deleteAccessApprovalSettings
Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.


```js
google_accessapproval.accessapproval.projects.deleteAccessApprovalSettings({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the AccessApprovalSettings to delete.
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

### accessapproval.projects.approvalRequests.get
Gets an approval request. Returns NOT_FOUND if the request does not exist.


```js
google_accessapproval.accessapproval.projects.approvalRequests.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the approval request to retrieve.
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
* output [ApprovalRequest](#approvalrequest)

### accessapproval.projects.updateAccessApprovalSettings
Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.


```js
google_accessapproval.accessapproval.projects.updateAccessApprovalSettings({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings"
  * updateMask `string`: The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
  * body [AccessApprovalSettings](#accessapprovalsettings)
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
* output [AccessApprovalSettings](#accessapprovalsettings)

### accessapproval.projects.approvalRequests.approve
Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.


```js
google_accessapproval.accessapproval.projects.approvalRequests.approve({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the approval request to approve.
  * body [ApproveApprovalRequestMessage](#approveapprovalrequestmessage)
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
* output [ApprovalRequest](#approvalrequest)

### accessapproval.projects.approvalRequests.dismiss
Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.


```js
google_accessapproval.accessapproval.projects.approvalRequests.dismiss({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the ApprovalRequest to dismiss.
  * body [DismissApprovalRequestMessage](#dismissapprovalrequestmessage)
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
* output [ApprovalRequest](#approvalrequest)

### accessapproval.projects.approvalRequests.list
Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.


```js
google_accessapproval.accessapproval.projects.approvalRequests.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}".
  * filter `string`: A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that . are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests.
  * pageSize `integer`: Requested page size.
  * pageToken `string`: A token identifying the page of results to return.
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
* output [ListApprovalRequestsResponse](#listapprovalrequestsresponse)



## Definitions

### AccessApprovalSettings
* AccessApprovalSettings `object`: Settings on a Project/Folder/Organization related to Access Approval.
  * enrolledAncestor `boolean`: Output only. This field is read only (not settable via UpdateAccessAccessApprovalSettings method). If the field is true, that indicates that at least one service is enrolled for Access Approval in one or more ancestors of the Project or Folder (this field will always be unset for the organization since organizations do not have ancestors).
  * enrolledServices `array`: A list of Google Cloud Services for which the given resource has Access Approval enrolled. Access requests for the resource given by name against any of these services contained here will be required to have explicit approval. If name refers to an organization, enrollment can be done for individual services. If name refers to a folder or project, enrollment can only be done on an all or nothing basis. If a cloud_product is repeated in this list, the first entry will be honored and all following entries will be discarded. A maximum of 10 enrolled services will be enforced, to be expanded as the set of supported services is expanded.
    * items [EnrolledService](#enrolledservice)
  * name `string`: The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings"
  * notificationEmails `array`: A list of email addresses to which notifications relating to approval requests should be sent. Notifications relating to a resource will be sent to all emails in the settings of ancestor resources of that resource. A maximum of 50 email addresses are allowed.
    * items `string`

### AccessLocations
* AccessLocations `object`: Home office and physical location of the principal.
  * principalOfficeCountry `string`: The "home office" location of the principal. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location
  * principalPhysicalLocationCountry `string`: Physical location of the principal at the time of the access. A two-letter country code (ISO 3166-1 alpha-2), such as "US", "DE" or "GB" or a region code. In some limited situations Google systems may refer refer to a region code instead of a country code. Possible Region Codes: * ASI: Asia * EUR: Europe * OCE: Oceania * AFR: Africa * NAM: North America * SAM: South America * ANT: Antarctica * ANY: Any location

### AccessReason
* AccessReason `object`
  * detail `string`: More detail about certain reason types. See comments for each type above.
  * type `string` (values: TYPE_UNSPECIFIED, CUSTOMER_INITIATED_SUPPORT, GOOGLE_INITIATED_SERVICE, GOOGLE_INITIATED_REVIEW): Type of access justification.

### ApprovalRequest
* ApprovalRequest `object`: A request for the customer to approve access to a resource.
  * approve [ApproveDecision](#approvedecision)
  * dismiss [DismissDecision](#dismissdecision)
  * name `string`: The resource name of the request. Format is "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}".
  * requestTime `string`: The time at which approval was requested.
  * requestedExpiration `string`: The requested expiration for the approval. If the request is approved, access will be granted from the time of approval until the expiration time.
  * requestedLocations [AccessLocations](#accesslocations)
  * requestedReason [AccessReason](#accessreason)
  * requestedResourceName `string`: The resource for which approval is being requested. The format of the resource name is defined at https://cloud.google.com/apis/design/resource_names. The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification.
  * requestedResourceProperties [ResourceProperties](#resourceproperties)

### ApproveApprovalRequestMessage
* ApproveApprovalRequestMessage `object`: Request to approve an ApprovalRequest.
  * expireTime `string`: The expiration time of this approval.

### ApproveDecision
* ApproveDecision `object`: A decision that has been made to approve access to a resource.
  * approveTime `string`: The time at which approval was granted.
  * expireTime `string`: The time at which the approval expires.

### DismissApprovalRequestMessage
* DismissApprovalRequestMessage `object`: Request to dismiss an approval request.

### DismissDecision
* DismissDecision `object`: A decision that has been made to dismiss an approval request.
  * dismissTime `string`: The time at which the approval request was dismissed.
  * implicit `boolean`: This field will be true if the ApprovalRequest was implcitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time).

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### EnrolledService
* EnrolledService `object`: Represents the enrollment of a cloud resource into a specific service.
  * cloudProduct `string`: The product for which Access Approval will be enrolled. Allowed values are listed below (case-sensitive): * all * App Engine * BigQuery * Cloud Bigtable * Cloud Key Management Service * Compute Engine * Cloud Dataflow * Cloud Identity and Access Management * Cloud Pub/Sub * Cloud Storage * Persistent Disk Note: These values are supported as input for legacy purposes, but will not be returned from the API. * all * appengine.googleapis.com * bigquery.googleapis.com * bigtable.googleapis.com * cloudkms.googleapis.com * compute.googleapis.com * dataflow.googleapis.com * iam.googleapis.com * pubsub.googleapis.com * storage.googleapis.com Calls to UpdateAccessApprovalSettings using 'all' or any of the XXX.googleapis.com will be translated to the associated product name ('all', 'App Engine', etc.). Note: 'all' will enroll the resource in all products supported at both 'GA' and 'Preview' levels. More information about levels of support is available at https://cloud.google.com/access-approval/docs/supported-services
  * enrollmentLevel `string` (values: ENROLLMENT_LEVEL_UNSPECIFIED, BLOCK_ALL): The enrollment level of the service.

### ListApprovalRequestsResponse
* ListApprovalRequestsResponse `object`: Response to listing of ApprovalRequest objects.
  * approvalRequests `array`: Approval request details.
    * items [ApprovalRequest](#approvalrequest)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more.

### ResourceProperties
* ResourceProperties `object`: The properties associated with the resource of the request.
  * excludesDescendants `boolean`: Whether an approval will exclude the descendants of the resource being requested.


