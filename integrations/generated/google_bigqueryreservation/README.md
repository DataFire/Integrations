# @datafire/google_bigqueryreservation

Client library for BigQuery Reservation API

## Installation and Usage
```bash
npm install --save @datafire/google_bigqueryreservation
```
```js
let google_bigqueryreservation = require('@datafire/google_bigqueryreservation').create({
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

A service to modify your BigQuery flat-rate reservations.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_bigqueryreservation.oauthCallback({
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
google_bigqueryreservation.oauthRefresh(null, context)
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

### bigqueryreservation.projects.locations.reservations.assignments.delete
Deletes a assignment. No expansion will happen. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, deletion of the `` assignment won't affect the other assignment ``. After said deletion, queries from `project1` will still use `res1` while queries from `project2` will switch to use on-demand mode.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.reservations.assignments.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Name of the resource, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`
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

### bigqueryreservation.projects.locations.reservations.get
Returns information about the reservation.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.reservations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. Resource name of the reservation to retrieve. E.g., `projects/myproject/locations/US/reservations/team1-prod`
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
* output [Reservation](#reservation)

### bigqueryreservation.projects.locations.reservations.patch
Updates an existing reservation resource.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.reservations.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the reservation, e.g., `projects/*/locations/*/reservations/team1-prod`.
  * updateMask `string`: Standard field mask for the set of fields to be updated.
  * body [Reservation](#reservation)
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
* output [Reservation](#reservation)

### bigqueryreservation.projects.locations.reservations.assignments.move
Moves an assignment under a new reservation. This differs from removing an existing assignment and recreating a new one by providing a transactional change that ensures an assignee always has an associated reservation.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.reservations.assignments.move({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name of the assignment, e.g. `projects/myproject/locations/US/reservations/team1-prod/assignments/123`
  * body [MoveAssignmentRequest](#moveassignmentrequest)
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
* output [Assignment](#assignment)

### bigqueryreservation.projects.locations.capacityCommitments.split
Splits capacity commitment to two commitments of the same plan and `commitment_end_time`. A common use case is to enable downgrading commitments. For example, in order to downgrade from 10000 slots to 8000, you might split a 10000 capacity commitment into commitments of 2000 and 8000. Then, you would change the plan of the first one to `FLEX` and then delete it.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.capacityCommitments.split({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The resource name e.g.,: `projects/myproject/locations/US/capacityCommitments/123`
  * body [SplitCapacityCommitmentRequest](#splitcapacitycommitmentrequest)
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
* output [SplitCapacityCommitmentResponse](#splitcapacitycommitmentresponse)

### bigqueryreservation.projects.locations.reservations.assignments.list
Lists assignments. Only explicitly created assignments will be returned. Example: * Organization `organizationA` contains two projects, `project1` and `project2`. * Reservation `res1` exists and was created previously. * CreateAssignment was used previously to define the following associations between entities and reservations: `` and `` In this example, ListAssignments will just return the above two assignments for reservation `res1`, and no expansion/merge will happen. The wildcard "-" can be used for reservations in the request. In that case all assignments belongs to the specified project and location will be listed. **Note** "-" cannot be used for projects nor locations.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.reservations.assignments.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name e.g.: `projects/myproject/locations/US/reservations/team1-prod` Or: `projects/myproject/locations/US/reservations/-`
  * pageSize `integer`: The maximum number of items to return.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any.
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
* output [ListAssignmentsResponse](#listassignmentsresponse)

### bigqueryreservation.projects.locations.reservations.assignments.create
Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. Currently a resource (project, folder, organization) can only have one assignment per each (job_type, location) combination, and that reservation will be used for all jobs of the matching type. Different assignments can be created on different levels of the projects, folders or organization hierarchy. During query execution, the assignment is looked up at the project, folder and organization levels in that order. The first assignment found is applied to the query. When creating assignments, it does not matter if other assignments exist at higher levels. Example: * The organization `organizationA` contains two projects, `project1` and `project2`. * Assignments for all three entities (`organizationA`, `project1`, and `project2`) could all be created and mapped to the same or different reservations. Returns `google.rpc.Code.PERMISSION_DENIED` if user does not have 'bigquery.admin' permissions on the project using the reservation and the project that owns this reservation. Returns `google.rpc.Code.INVALID_ARGUMENT` when location of the assignment does not match location of the reservation.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.reservations.assignments.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name of the assignment E.g. `projects/myproject/locations/US/reservations/team1-prod`
  * body [Assignment](#assignment)
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
* output [Assignment](#assignment)

### bigqueryreservation.projects.locations.capacityCommitments.list
Lists all the capacity commitments for the admin project.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.capacityCommitments.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
  * pageSize `integer`: The maximum number of items to return.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any.
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
* output [ListCapacityCommitmentsResponse](#listcapacitycommitmentsresponse)

### bigqueryreservation.projects.locations.capacityCommitments.create
Creates a new capacity commitment resource.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.capacityCommitments.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Resource name of the parent reservation. E.g., `projects/myproject/locations/US`
  * enforceSingleAdminProjectPerOrg `boolean`: If true, fail the request if another project in the organization has a capacity commitment.
  * body [CapacityCommitment](#capacitycommitment)
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
* output [CapacityCommitment](#capacitycommitment)

### bigqueryreservation.projects.locations.capacityCommitments.merge
Merges capacity commitments of the same plan into a single commitment. The resulting capacity commitment has the greater commitment_end_time out of the to-be-merged capacity commitments. Attempting to merge capacity commitments of different plan will fail with the error code `google.rpc.Code.FAILED_PRECONDITION`.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.capacityCommitments.merge({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Parent resource that identifies admin project and location e.g., `projects/myproject/locations/us`
  * body [MergeCapacityCommitmentsRequest](#mergecapacitycommitmentsrequest)
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
* output [CapacityCommitment](#capacitycommitment)

### bigqueryreservation.projects.locations.reservations.list
Lists all the reservations for the project in the specified location.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.reservations.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The parent resource name containing project and location, e.g.: `projects/myproject/locations/US`
  * filter `string`: Can be used to filter out reservations based on names, capacity, etc, e.g.: filter="reservation.slot_capacity > 200" filter="reservation.name = \"*dev/*\"" Advanced filtering syntax can be [here](https://cloud.google.com/logging/docs/view/advanced-filters).
  * pageSize `integer`: The maximum number of items to return.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any.
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
* output [ListReservationsResponse](#listreservationsresponse)

### bigqueryreservation.projects.locations.reservations.create
Creates a new reservation resource.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.reservations.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. Project, location. E.g., `projects/myproject/locations/US`
  * reservationId `string`: The reservation ID. This field must only contain lower case alphanumeric characters or dash. Max length is 64 characters.
  * body [Reservation](#reservation)
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
* output [Reservation](#reservation)

### bigqueryreservation.projects.locations.searchAssignments
Looks up assignments for a specified resource for a particular region. If the request is about a project: 1. Assignments created on the project will be returned if they exist. 2. Otherwise assignments created on the closest ancestor will be returned. 3. Assignments for different JobTypes will all be returned. The same logic applies if the request is about a folder. If the request is about an organization, then assignments created on the organization will be returned (organization doesn't have ancestors). Comparing to ListAssignments, there are some behavior differences: 1. permission on the assignee will be verified in this API. 2. Hierarchy lookup (project->folder->organization) happens in this API. 3. Parent here is `projects/*/locations/*`, instead of `projects/*/locations/*reservations/*`. **Note** "-" cannot be used for projects nor locations.


```js
google_bigqueryreservation.bigqueryreservation.projects.locations.searchAssignments({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The resource name of the admin project(containing project and location), e.g.: `projects/myproject/locations/US`.
  * pageSize `integer`: The maximum number of items to return.
  * pageToken `string`: The next_page_token value returned from a previous List request, if any.
  * query `string`: Please specify resource name as assignee in the query. Examples: * `assignee=projects/myproject` * `assignee=folders/123` * `assignee=organizations/456`
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
* output [SearchAssignmentsResponse](#searchassignmentsresponse)



## Definitions

### Assignment
* Assignment `object`: A Assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
  * assignee `string`: The resource which will use the reservation. E.g. `projects/myproject`, `folders/123`, or `organizations/456`.
  * jobType `string` (values: JOB_TYPE_UNSPECIFIED, PIPELINE, QUERY, ML_EXTERNAL): Which type of jobs will use the reservation.
  * name `string`: Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`.
  * state `string` (values: STATE_UNSPECIFIED, PENDING, ACTIVE): Output only. State of the assignment.

### BiReservation
* BiReservation `object`: Represents a BI Reservation.
  * name `string`: The resource name of the singleton BI reservation. Reservation names have the form `projects/{project_id}/locations/{location_id}/bireservation`.
  * size `string`: Size of a reservation, in bytes.
  * updateTime `string`: Output only. The last update timestamp of a reservation.

### CapacityCommitment
* CapacityCommitment `object`: Capacity commitment is a way to purchase compute capacity for BigQuery jobs (in the form of slots) with some committed period of usage. Annual commitments renew by default. Commitments can be removed after their commitment end time passes. In order to remove annual commitment, its plan needs to be changed to monthly or flex first. A capacity commitment resource exists as a child resource of the admin project.
  * commitmentEndTime `string`: Output only. The end of the current commitment period. It is applicable only for ACTIVE capacity commitments.
  * commitmentStartTime `string`: Output only. The start of the current commitment period. It is applicable only for ACTIVE capacity commitments.
  * failureStatus [Status](#status)
  * name `string`: Output only. The resource name of the capacity commitment, e.g., `projects/myproject/locations/US/capacityCommitments/123`
  * plan `string` (values: COMMITMENT_PLAN_UNSPECIFIED, FLEX, TRIAL, MONTHLY, ANNUAL): Capacity commitment commitment plan.
  * renewalPlan `string` (values: COMMITMENT_PLAN_UNSPECIFIED, FLEX, TRIAL, MONTHLY, ANNUAL): The plan this capacity commitment is converted to after commitment_end_time passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for ANNUAL commitments.
  * slotCount `string`: Number of slots in this commitment.
  * state `string` (values: STATE_UNSPECIFIED, PENDING, ACTIVE, FAILED): Output only. State of the commitment.

### CreateSlotPoolMetadata
* CreateSlotPoolMetadata `object`: The metadata for operation returned from ReservationService.CreateSlotPool.
  * slotPool `string`: Resource name of the slot pool that is being created. E.g., projects/myproject/locations/us-central1/reservations/foo/slotPools/123

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### ListAssignmentsResponse
* ListAssignmentsResponse `object`: The response for ReservationService.ListAssignments.
  * assignments `array`: List of assignments visible to the user.
    * items [Assignment](#assignment)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### ListCapacityCommitmentsResponse
* ListCapacityCommitmentsResponse `object`: The response for ReservationService.ListCapacityCommitments.
  * capacityCommitments `array`: List of capacity commitments visible to the user.
    * items [CapacityCommitment](#capacitycommitment)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### ListReservationsResponse
* ListReservationsResponse `object`: The response for ReservationService.ListReservations.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * reservations `array`: List of reservations visible to the user.
    * items [Reservation](#reservation)

### MergeCapacityCommitmentsRequest
* MergeCapacityCommitmentsRequest `object`: The request for ReservationService.MergeCapacityCommitments.
  * capacityCommitmentIds `array`: Ids of capacity commitments to merge. These capacity commitments must exist under admin project and location specified in the parent. ID is the last portion of capacity commitment name e.g., 'abc' for projects/myproject/locations/US/capacityCommitments/abc
    * items `string`

### MoveAssignmentRequest
* MoveAssignmentRequest `object`: The request for ReservationService.MoveAssignment. **Note**: "bigquery.reservationAssignments.create" permission is required on the destination_id. **Note**: "bigquery.reservationAssignments.create" and "bigquery.reservationAssignments.delete" permission are required on the related assignee.
  * destinationId `string`: The new reservation ID, e.g.: `projects/myotherproject/locations/US/reservations/team2-prod`

### Reservation
* Reservation `object`: A reservation is a mechanism used to guarantee slots to users.
  * creationTime `string`: Output only. Creation time of the reservation.
  * ignoreIdleSlots `boolean`: If false, any query using this reservation will use idle slots from other reservations within the same admin project. If true, a query using this reservation will execute with the slot capacity specified above at most.
  * name `string`: The resource name of the reservation, e.g., `projects/*/locations/*/reservations/team1-prod`.
  * slotCapacity `string`: Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the unit of parallelism. Queries using this reservation might use more slots during runtime if ignore_idle_slots is set to false. If the new reservation's slot capacity exceed the parent's slot capacity or if total slot capacity of the new reservation and its siblings exceeds the parent's slot capacity, the request will fail with `google.rpc.Code.RESOURCE_EXHAUSTED`.
  * updateTime `string`: Output only. Last update time of the reservation.

### SearchAssignmentsResponse
* SearchAssignmentsResponse `object`: The response for ReservationService.SearchAssignments.
  * assignments `array`: List of assignments visible to the user.
    * items [Assignment](#assignment)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### SplitCapacityCommitmentRequest
* SplitCapacityCommitmentRequest `object`: The request for ReservationService.SplitCapacityCommitment.
  * slotCount `string`: Number of slots in the capacity commitment after the split.

### SplitCapacityCommitmentResponse
* SplitCapacityCommitmentResponse `object`: The response for ReservationService.SplitCapacityCommitment.
  * first [CapacityCommitment](#capacitycommitment)
  * second [CapacityCommitment](#capacitycommitment)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.


