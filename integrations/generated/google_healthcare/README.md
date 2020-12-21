# @datafire/google_healthcare

Client library for Cloud Healthcare API

## Installation and Usage
```bash
npm install --save @datafire/google_healthcare
```
```js
let google_healthcare = require('@datafire/google_healthcare').create({
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

Manage, store, and access healthcare data in Google Cloud Platform.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_healthcare.oauthCallback({
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
google_healthcare.oauthRefresh(null, context)
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

### healthcare.projects.locations.datasets.hl7V2Stores.messages.delete
Deletes an HL7v2 message.


```js
google_healthcare.healthcare.projects.locations.datasets.hl7V2Stores.messages.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the HL7v2 message to delete.
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

### healthcare.projects.locations.datasets.operations.get
Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.


```js
google_healthcare.healthcare.projects.locations.datasets.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
  * view `string` (values: MESSAGE_VIEW_UNSPECIFIED, RAW_ONLY, PARSED_ONLY, FULL, BASIC): Specifies which parts of the Message resource to return in the response. When unspecified, equivalent to FULL.
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

### healthcare.projects.locations.datasets.hl7V2Stores.messages.patch
Update the message. The contents of the message in Message.data and data extracted from the contents such as Message.create_time cannot be altered. Only the Message.labels field is allowed to be updated. The labels in the request are merged with the existing set of labels. Existing labels with the same keys are updated.


```js
google_healthcare.healthcare.projects.locations.datasets.hl7V2Stores.messages.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name of the Message, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.
  * updateMask `string`: The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
  * body [Message](#message)
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
* output [Message](#message)

### healthcare.projects.locations.datasets.fhirStores.fhir.update
Updates the entire contents of a resource. Implements the FHIR standard update interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#update), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#update), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#update)). If the specified resource does not exist and the FHIR store has enable_update_create set, creates the resource with the client-specified ID. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. The resource must contain an `id` element having an identical value to the ID in the REST path of the request. On success, the response body will contain a JSON-encoded representation of the updated resource, including the server-assigned version ID. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `update`, see [Updating a FHIR resource](/healthcare/docs/how-tos/fhir-resources#updating_a_fhir_resource).


```js
google_healthcare.healthcare.projects.locations.datasets.fhirStores.fhir.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the resource to update.
  * body [HttpBody](#httpbody)
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
* output [HttpBody](#httpbody)

### v1.name._everything.get
Retrieves a Patient resource and resources related to that patient. Implements the FHIR extended operation Patient-everything ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/patient-operations.html#everything), [STU3](http://hl7.org/implement/standards/fhir/STU3/patient-operations.html#everything), [R4](http://hl7.org/implement/standards/fhir/R4/patient-operations.html#everything)). On success, the response body will contain a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the operation. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The resources in scope for the response are: * The patient resource itself. * All the resources directly referenced by the patient resource. * Resources directly referencing the patient resource that meet the inclusion criteria. The inclusion criteria are based on the membership rules in the patient compartment definition ([DSTU2](http://hl7.org/fhir/DSTU2/compartment-patient.html), [STU3](http://www.hl7.org/fhir/stu3/compartmentdefinition-patient.html), [R4](http://hl7.org/fhir/R4/compartmentdefinition-patient.html)), which details the eligible resource types and referencing search parameters. For samples that show how to call `Patient-everything`, see [Getting all patient compartment resources](/healthcare/docs/how-tos/fhir-resources#getting_all_patient_compartment_resources).


```js
google_healthcare.v1.name._everything.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the `Patient` resource for which the information is required.
  * _count `integer`: Maximum number of resources in a page. If not specified, 100 is used. May not be larger than 1000.
  * _page_token `string`: Used to retrieve the next or previous page of results when using pagination. Set `_page_token` to the value of _page_token set in next or previous page links' url. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next". Omit `_page_token` if no previous request has been made.
  * _since `string`: If provided, only resources updated after this time are returned. The time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz. For example, `2015-02-07T13:28:17.239+02:00` or `2017-01-01T00:00:00Z`. The time must be specified to the second and include a time zone.
  * _type `string`: String of comma-delimited FHIR resource types. If provided, only resources of the specified resource type(s) are returned.
  * end `string`: The response includes records prior to the end date. If no end date is provided, all records subsequent to the start date are in scope.
  * start `string`: The response includes records subsequent to the start date. If no start date is provided, all records prior to the end date are in scope.
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
* output [HttpBody](#httpbody)

### v1.name._purge.delete
Deletes all the historical versions of a resource (excluding the current version) from the FHIR store. To remove all versions of a resource, first delete the current version and then call this method. This is not a FHIR standard operation. For samples that show how to call `Resource-purge`, see [Deleting historical versions of a FHIR resource](/healthcare/docs/how-tos/fhir-resources#deleting_historical_versions_of_a_fhir_resource).


```js
google_healthcare.v1.name._purge.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the resource to purge.
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

### healthcare.projects.locations.datasets.fhirStores.fhir.history
Lists all the versions of a resource (including the current version and deleted versions) from the FHIR store. Implements the per-resource form of the FHIR standard history interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#history), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#history), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#history)). On success, the response body will contain a JSON-encoded representation of a `Bundle` resource of type `history`, containing the version history sorted from most recent to oldest versions. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `history`, see [Listing FHIR resource versions](/healthcare/docs/how-tos/fhir-resources#listing_fhir_resource_versions).


```js
google_healthcare.healthcare.projects.locations.datasets.fhirStores.fhir.history({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the resource to retrieve.
  * _at `string`: Only include resource versions that were current at some point during the time period specified in the date time value. The date parameter format is yyyy-mm-ddThh:mm:ss[Z|(+|-)hh:mm] Clients may specify any of the following: * An entire year: `_at=2019` * An entire month: `_at=2019-01` * A specific day: `_at=2019-01-20` * A specific second: `_at=2018-12-31T23:59:58Z`
  * _count `integer`: The maximum number of search results on a page. If not specified, 100 is used. May not be larger than 1000.
  * _page_token `string`: Used to retrieve the first, previous, next, or last page of resource versions when using pagination. Value should be set to the value of `_page_token` set in next or previous page links' URLs. Next and previous page are returned in the response bundle's links field, where `link.relation` is "previous" or "next". Omit `_page_token` if no previous request has been made.
  * _since `string`: Only include resource versions that were created at or after the given instant in time. The instant in time uses the format YYYY-MM-DDThh:mm:ss.sss+zz:zz (for example 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z). The time must be specified to the second and include a time zone.
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
* output [HttpBody](#httpbody)

### healthcare.projects.locations.datasets.fhirStores.fhir.capabilities
Gets the FHIR capability statement ([STU3](http://hl7.org/implement/standards/fhir/STU3/capabilitystatement.html), [R4](http://hl7.org/implement/standards/fhir/R4/capabilitystatement.html)), or the [conformance statement](http://hl7.org/implement/standards/fhir/DSTU2/conformance.html) in the DSTU2 case for the store, which contains a description of functionality supported by the server. Implements the FHIR standard capabilities interaction ([STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#capabilities), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#capabilities)), or the [conformance interaction](http://hl7.org/implement/standards/fhir/DSTU2/http.html#conformance) in the DSTU2 case. On success, the response body will contain a JSON-encoded representation of a `CapabilityStatement` resource.


```js
google_healthcare.healthcare.projects.locations.datasets.fhirStores.fhir.capabilities({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the FHIR store to retrieve the capabilities for.
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
* output [HttpBody](#httpbody)

### healthcare.projects.locations.list
Lists information about the supported locations for this service.


```js
google_healthcare.healthcare.projects.locations.list({
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

### healthcare.projects.locations.datasets.operations.list
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.


```js
google_healthcare.healthcare.projects.locations.datasets.operations.list({
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
* output [ListOperationsResponse](#listoperationsresponse)

### healthcare.projects.locations.datasets.operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.


```js
google_healthcare.healthcare.projects.locations.datasets.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * body [CancelOperationRequest](#canceloperationrequest)
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

### healthcare.projects.locations.datasets.fhirStores.export
Export resources from the FHIR store to the specified destination. This method returns an Operation that can be used to track the status of the export by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing logs](/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type ExportResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.


```js
google_healthcare.healthcare.projects.locations.datasets.fhirStores.export({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the FHIR store to export resource from, in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
  * body [ExportResourcesRequest](#exportresourcesrequest)
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

### healthcare.projects.locations.datasets.fhirStores.import
Imports resources to the FHIR store by loading data from the specified sources. This method is optimized to load large quantities of data using import semantics that ignore some FHIR store configuration options and are not suitable for all use cases. It is primarily intended to load data into an empty FHIR store that is not being used by other clients. In cases where this method is not appropriate, consider using ExecuteBundle to load data. Every resource in the input must contain a client-supplied ID. Each resource is stored using the supplied ID regardless of the enable_update_create setting on the FHIR store. The import process does not enforce referential integrity, regardless of the disable_referential_integrity setting on the FHIR store. This allows the import of resources with arbitrary interdependencies without considering grouping or ordering, but if the input data contains invalid references or if some resources fail to be imported, the FHIR store might be left in a state that violates referential integrity. The import process does not trigger Pub/Sub notification or BigQuery streaming update, regardless of how those are configured on the FHIR store. If a resource with the specified ID already exists, the most recent version of the resource is overwritten without creating a new historical version, regardless of the disable_resource_versioning setting on the FHIR store. If transient failures occur during the import, it's possible that successfully imported resources will be overwritten more than once. The import operation is idempotent unless the input data contains multiple valid resources with the same ID but different contents. In that case, after the import completes, the store contains exactly one resource with that ID but there is no ordering guarantee on which version of the contents it will have. The operation result counters do not count duplicate IDs as an error and count one success for each resource in the input, which might result in a success count larger than the number of resources in the FHIR store. This often occurs when importing data organized in bundles produced by Patient-everything where each bundle contains its own copy of a resource such as Practitioner that might be referred to by many patients. If some resources fail to import, for example due to parsing errors, successfully imported resources are not rolled back. The location and format of the input data is specified by the parameters in ImportResourcesRequest. Note that if no format is specified, this method assumes the `BUNDLE` format. When using the `BUNDLE` format this method ignores the `Bundle.type` field, except that `history` bundles are rejected, and does not apply any of the bundle processing semantics for batch or transaction bundles. Unlike in ExecuteBundle, transaction bundles are not executed as a single transaction and bundle-internal references are not rewritten. The bundle is treated as a collection of resources to be written as provided in `Bundle.entry.resource`, ignoring `Bundle.entry.request`. As an example, this allows the import of `searchset` bundles produced by a FHIR search or Patient-everything operation. This method returns an Operation that can be used to track the status of the import by calling GetOperation. Immediate fatal errors appear in the error field, errors are also logged to Cloud Logging (see [Viewing logs](/healthcare/docs/how-tos/logging)). Otherwise, when the operation finishes, a detailed response of type ImportResourcesResponse is returned in the response field. The metadata field type for this operation is OperationMetadata.


```js
google_healthcare.healthcare.projects.locations.datasets.fhirStores.import({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the FHIR store to import FHIR resources to, in the format of `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
  * body [ImportResourcesRequest](#importresourcesrequest)
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

### healthcare.projects.locations.datasets.list
Lists the health datasets in the current project.


```js
google_healthcare.healthcare.projects.locations.datasets.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the project whose datasets should be listed. For example, `projects/{project_id}/locations/{location_id}`.
  * pageSize `integer`: The maximum number of items to return. If not specified, 100 is used. May not be larger than 1000.
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
* output [ListDatasetsResponse](#listdatasetsresponse)

### healthcare.projects.locations.datasets.create
Creates a new health dataset. Results are returned through the Operation interface which returns either an `Operation.response` which contains a Dataset or `Operation.error`. The metadata field type is OperationMetadata.


```js
google_healthcare.healthcare.projects.locations.datasets.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the project where the server creates the dataset. For example, `projects/{project_id}/locations/{location_id}`.
  * datasetId `string`: The ID of the dataset that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
  * body [Dataset](#dataset)
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

### healthcare.projects.locations.datasets.dicomStores.list
Lists the DICOM stores in the given dataset.


```js
google_healthcare.healthcare.projects.locations.datasets.dicomStores.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Name of the dataset.
  * filter `string`: Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported. For example, `labels.key=value`.
  * pageSize `integer`: Limit on the number of DICOM stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.
  * pageToken `string`: The next_page_token value returned from the previous List request, if any.
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
* output [ListDicomStoresResponse](#listdicomstoresresponse)

### healthcare.projects.locations.datasets.dicomStores.create
Creates a new DICOM store within the parent dataset.


```js
google_healthcare.healthcare.projects.locations.datasets.dicomStores.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the dataset this DICOM store belongs to.
  * dicomStoreId `string`: The ID of the DICOM store that is being created. Any string value up to 256 characters in length.
  * body [DicomStore](#dicomstore)
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
* output [DicomStore](#dicomstore)

### healthcare.projects.locations.datasets.dicomStores.studies.series.instances.delete
DeleteInstance deletes an instance associated with the given study, series, and SOP Instance UID. Delete requests are equivalent to the GET requests specified in the Retrieve transaction. Study and series search results can take a few seconds to be updated after an instance is deleted using DeleteInstance. For samples that show how to call DeleteInstance, see [Deleting a study, series, or instance](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#deleting_a_study_series_or_instance).


```js
google_healthcare.healthcare.projects.locations.datasets.dicomStores.studies.series.instances.delete({
  "parent": "",
  "dicomWebPath": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
  * dicomWebPath **required** `string`: The path of the DeleteInstance request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}`.
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

### healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered
RetrieveRenderedFrames returns instances associated with the given study, series, SOP Instance UID and frame numbers in an acceptable Rendered Media Type. See [RetrieveTransaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.4). For details on the implementation of RetrieveRenderedFrames, see [Rendered resources](https://cloud.google.com/healthcare/docs/dicom#rendered_resources) in the Cloud Healthcare API conformance statement. For samples that show how to call RetrieveRenderedFrames, see [Retrieving consumer image formats](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#retrieving_consumer_image_formats).


```js
google_healthcare.healthcare.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered({
  "parent": "",
  "dicomWebPath": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
  * dicomWebPath **required** `string`: The path of the RetrieveRenderedFrames DICOMweb request. For example, `studies/{study_uid}/series/{series_uid}/instances/{instance_uid}/frames/{frame_list}/rendered`.
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
* output [HttpBody](#httpbody)

### healthcare.projects.locations.datasets.dicomStores.studies.storeInstances
StoreInstances stores DICOM instances associated with study instance unique identifiers (SUID). See [Store Transaction] (http://dicom.nema.org/medical/dicom/current/output/html/part18.html#sect_10.5). For details on the implementation of StoreInstances, see [Store transaction](https://cloud.google.com/healthcare/docs/dicom#store_transaction) in the Cloud Healthcare API conformance statement. For samples that show how to call StoreInstances, see [Storing DICOM data](https://cloud.google.com/healthcare/docs/how-tos/dicomweb#storing_dicom_data).


```js
google_healthcare.healthcare.projects.locations.datasets.dicomStores.studies.storeInstances({
  "parent": "",
  "dicomWebPath": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the DICOM store that is being accessed. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
  * dicomWebPath **required** `string`: The path of the StoreInstances DICOMweb request. For example, `studies/[{study_uid}]`. Note that the `study_uid` is optional.
  * body [HttpBody](#httpbody)
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
* output [HttpBody](#httpbody)

### healthcare.projects.locations.datasets.fhirStores.fhir.executeBundle
Executes all the requests in the given Bundle. Implements the FHIR standard batch/transaction interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#transaction), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#transaction), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#transaction)). Supports all interactions within a bundle, except search. This method accepts Bundles of type `batch` and `transaction`, processing them according to the batch processing rules ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.1), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.1), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#brules)) and transaction processing rules ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#2.1.0.16.2), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#2.21.0.17.2), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#trules)). The request body must contain a JSON-encoded FHIR `Bundle` resource, and the request headers must contain `Content-Type: application/fhir+json`. For a batch bundle or a successful transaction the response body will contain a JSON-encoded representation of a `Bundle` resource of type `batch-response` or `transaction-response` containing one entry for each entry in the request, with the outcome of processing the entry. In the case of an error for a transaction bundle, the response body will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `executeBundle`, see [Managing FHIR resources using FHIR bundles](/healthcare/docs/how-tos/fhir-bundles).


```js
google_healthcare.healthcare.projects.locations.datasets.fhirStores.fhir.executeBundle({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Name of the FHIR store in which this bundle will be executed.
  * body [HttpBody](#httpbody)
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
* output [HttpBody](#httpbody)

### healthcare.projects.locations.datasets.fhirStores.fhir.search
Searches for resources in the given FHIR store according to criteria specified as query parameters. Implements the FHIR standard search interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#search), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#search), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#search)) using the search semantics described in the FHIR Search specification ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/search.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/search.html), [R4](http://hl7.org/implement/standards/fhir/R4/search.html)). Supports three methods of search defined by the specification: * `GET [base]?[parameters]` to search across all resources. * `GET [base]/[type]?[parameters]` to search resources of a specified type. * `POST [base]/[type]/_search?[parameters]` as an alternate form having the same semantics as the `GET` method. The `GET` methods do not support compartment searches. The `POST` method does not support `application/x-www-form-urlencoded` search parameters. On success, the response body will contain a JSON-encoded representation of a `Bundle` resource of type `searchset`, containing the results of the search. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. The server's capability statement, retrieved through capabilities, indicates what search parameters are supported on each FHIR resource. A list of all search parameters defined by the specification can be found in the FHIR Search Parameter Registry ([STU3](http://hl7.org/implement/standards/fhir/STU3/searchparameter-registry.html), [R4](http://hl7.org/implement/standards/fhir/R4/searchparameter-registry.html)). FHIR search parameters for DSTU2 can be found on each resource's definition page. Supported search modifiers: `:missing`, `:exact`, `:contains`, `:text`, `:in`, `:not-in`, `:above`, `:below`, `:[type]`, `:not`, and `:recurse`. Supported search result parameters: `_sort`, `_count`, `_include`, `_revinclude`, `_summary=text`, `_summary=data`, and `_elements`. The maximum number of search results returned defaults to 100, which can be overridden by the `_count` parameter up to a maximum limit of 1000. If there are additional results, the returned `Bundle` will contain pagination links. Resources with a total size larger than 5MB or a field count larger than 50,000 might not be fully searchable as the server might trim its generated search index in those cases. Note: FHIR resources are indexed asynchronously, so there might be a slight delay between the time a resource is created or changes and when the change is reflected in search results. For samples and detailed information, see [Searching for FHIR resources](/healthcare/docs/how-tos/fhir-search) and [Advanced FHIR search features](/healthcare/docs/how-tos/fhir-advanced-search).


```js
google_healthcare.healthcare.projects.locations.datasets.fhirStores.fhir.search({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Name of the FHIR store to retrieve resources from.
  * body [SearchResourcesRequest](#searchresourcesrequest)
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
* output [HttpBody](#httpbody)

### healthcare.projects.locations.datasets.fhirStores.fhir.create
Creates a FHIR resource. Implements the FHIR standard create interaction ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/http.html#create), [STU3](http://hl7.org/implement/standards/fhir/STU3/http.html#create), [R4](http://hl7.org/implement/standards/fhir/R4/http.html#create)), which creates a new resource with a server-assigned resource ID. The request body must contain a JSON-encoded FHIR resource, and the request headers must contain `Content-Type: application/fhir+json`. On success, the response body will contain a JSON-encoded representation of the resource as it was created on the server, including the server-assigned resource ID and version ID. Errors generated by the FHIR store will contain a JSON-encoded `OperationOutcome` resource describing the reason for the error. If the request cannot be mapped to a valid API method on a FHIR store, a generic GCP error might be returned instead. For samples that show how to call `create`, see [Creating a FHIR resource](/healthcare/docs/how-tos/fhir-resources#creating_a_fhir_resource).


```js
google_healthcare.healthcare.projects.locations.datasets.fhirStores.fhir.create({
  "parent": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the FHIR store this resource belongs to.
  * type **required** `string`: The FHIR resource type to create, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)). Must match the resource type in the provided content.
  * body [HttpBody](#httpbody)
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
* output [HttpBody](#httpbody)

### healthcare.projects.locations.datasets.fhirStores.list
Lists the FHIR stores in the given dataset.


```js
google_healthcare.healthcare.projects.locations.datasets.fhirStores.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Name of the dataset.
  * filter `string`: Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported, for example `labels.key=value`.
  * pageSize `integer`: Limit on the number of FHIR stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.
  * pageToken `string`: The next_page_token value returned from the previous List request, if any.
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
* output [ListFhirStoresResponse](#listfhirstoresresponse)

### healthcare.projects.locations.datasets.fhirStores.create
Creates a new FHIR store within the parent dataset.


```js
google_healthcare.healthcare.projects.locations.datasets.fhirStores.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the dataset this FHIR store belongs to.
  * fhirStoreId `string`: The ID of the FHIR store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
  * body [FhirStore](#fhirstore)
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
* output [FhirStore](#fhirstore)

### healthcare.projects.locations.datasets.hl7V2Stores.list
Lists the HL7v2 stores in the given dataset.


```js
google_healthcare.healthcare.projects.locations.datasets.hl7V2Stores.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Name of the dataset.
  * filter `string`: Restricts stores returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Only filtering on labels is supported. For example, `labels.key=value`.
  * pageSize `integer`: Limit on the number of HL7v2 stores to return in a single response. If not specified, 100 is used. May not be larger than 1000.
  * pageToken `string`: The next_page_token value returned from the previous List request, if any.
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
* output [ListHl7V2StoresResponse](#listhl7v2storesresponse)

### healthcare.projects.locations.datasets.hl7V2Stores.create
Creates a new HL7v2 store within the parent dataset.


```js
google_healthcare.healthcare.projects.locations.datasets.hl7V2Stores.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the dataset this HL7v2 store belongs to.
  * hl7V2StoreId `string`: The ID of the HL7v2 store that is being created. The string must match the following regex: `[\p{L}\p{N}_\-\.]{1,256}`.
  * body [Hl7V2Store](#hl7v2store)
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
* output [Hl7V2Store](#hl7v2store)

### healthcare.projects.locations.datasets.hl7V2Stores.messages.list
Lists all the messages in the given HL7v2 store with support for filtering. Note: HL7v2 messages are indexed asynchronously, so there might be a slight delay between the time a message is created and when it can be found through a filter.


```js
google_healthcare.healthcare.projects.locations.datasets.hl7V2Stores.messages.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Name of the HL7v2 store to retrieve messages from.
  * filter `string`: Restricts messages returned to those matching a filter. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings Fields/functions available for filtering are: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. * `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. * `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`.
  * orderBy `string`: Orders messages returned by the specified order_by clause. Syntax: https://cloud.google.com/apis/design/design_patterns#sorting_order Fields available for ordering are: * `send_time`
  * pageSize `integer`: Limit on the number of messages to return in a single response. If not specified, 100 is used. May not be larger than 1000.
  * pageToken `string`: The next_page_token value returned from the previous List request, if any.
  * view `string` (values: MESSAGE_VIEW_UNSPECIFIED, RAW_ONLY, PARSED_ONLY, FULL, BASIC): Specifies the parts of the Message to return in the response. When unspecified, equivalent to BASIC. Setting this to anything other than BASIC with a `page_size` larger than the default can generate a large response, which impacts the performance of this method.
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
* output [ListMessagesResponse](#listmessagesresponse)

### healthcare.projects.locations.datasets.hl7V2Stores.messages.create
Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Cloud Pub/Sub topic configured in projects.locations.datasets.hl7V2Stores.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Cloud Pub/Sub topic, the adapter transmits the message when a notification is received.


```js
google_healthcare.healthcare.projects.locations.datasets.hl7V2Stores.messages.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the dataset this message belongs to.
  * body [CreateMessageRequest](#createmessagerequest)
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
* output [Message](#message)

### healthcare.projects.locations.datasets.hl7V2Stores.messages.ingest
Parses and stores an HL7v2 message. This method triggers an asynchronous notification to any Cloud Pub/Sub topic configured in projects.locations.datasets.hl7V2Stores.Hl7V2NotificationConfig, if the filtering matches the message. If an MLLP adapter is configured to listen to a Cloud Pub/Sub topic, the adapter transmits the message when a notification is received. This method also generates a response containing an HL7v2 acknowledgement (`ACK`) message when successful or a negative acknowledgement (`NACK`) message in case of error, suitable for replying to HL7v2 interface systems that expect these acknowledgements.


```js
google_healthcare.healthcare.projects.locations.datasets.hl7V2Stores.messages.ingest({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: The name of the HL7v2 store this message belongs to.
  * body [IngestMessageRequest](#ingestmessagerequest)
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
* output [IngestMessageResponse](#ingestmessageresponse)

### healthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy
Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.


```js
google_healthcare.healthcare.projects.locations.datasets.hl7V2Stores.getIamPolicy({
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

### healthcare.projects.locations.datasets.hl7V2Stores.setIamPolicy
Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.


```js
google_healthcare.healthcare.projects.locations.datasets.hl7V2Stores.setIamPolicy({
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

### healthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions
Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.


```js
google_healthcare.healthcare.projects.locations.datasets.hl7V2Stores.testIamPermissions({
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

### healthcare.projects.locations.datasets.deidentify
Creates a new dataset containing de-identified data from the source dataset. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifySummary. If errors occur, error is set. The LRO result may still be successful if de-identification fails for some DICOM instances. The new de-identified dataset will not contain these failed resources. Failed resource totals are tracked in Operation.metadata. Error details are also logged to Cloud Logging. For more information, see [Viewing logs](/healthcare/docs/how-tos/logging).


```js
google_healthcare.healthcare.projects.locations.datasets.deidentify({
  "sourceDataset": ""
}, context)
```

#### Input
* input `object`
  * sourceDataset **required** `string`: Source dataset resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
  * body [DeidentifyDatasetRequest](#deidentifydatasetrequest)
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

### healthcare.projects.locations.datasets.fhirStores.deidentify
De-identifies data from the source store and writes it to the destination store. The metadata field type is OperationMetadata. If the request is successful, the response field type is DeidentifyFhirStoreSummary. If errors occur, error is set. Error details are also logged to Cloud Logging (see [Viewing logs](/healthcare/docs/how-tos/logging)).


```js
google_healthcare.healthcare.projects.locations.datasets.fhirStores.deidentify({
  "sourceStore": ""
}, context)
```

#### Input
* input `object`
  * sourceStore **required** `string`: Source FHIR store resource name. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
  * body [DeidentifyFhirStoreRequest](#deidentifyfhirstorerequest)
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

### Binding
* Binding `object`: Associates `members` with a `role`.
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### CharacterMaskConfig
* CharacterMaskConfig `object`: Mask a string by replacing its characters with a fixed character.
  * maskingCharacter `string`: Character to mask the sensitive values. If not supplied, defaults to "*".

### CreateMessageRequest
* CreateMessageRequest `object`: Creates a new message.
  * message [Message](#message)

### CryptoHashConfig
* CryptoHashConfig `object`: Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output (for example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`).
  * cryptoKey `string`: An AES 128/192/256 bit key. Causes the hash to be computed based on this key. A default key is generated for each Deidentify operation and is used wherever crypto_key is not specified.

### Dataset
* Dataset `object`: A message representing a health dataset. A health dataset represents a collection of healthcare data pertaining to one or more patients. This may include multiple modalities of healthcare data, such as electronic medical records or medical imaging data.
  * name `string`: Resource name of the dataset, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}`.
  * timeZone `string`: The default timezone used by this dataset. Must be a either a valid IANA time zone name such as "America/New_York" or empty, which defaults to UTC. This is used for parsing times in resources, such as HL7 messages, where no explicit timezone is specified.

### DateShiftConfig
* DateShiftConfig `object`: Shift a date forward or backward in time by a random amount which is consistent for a given patient and crypto key combination.
  * cryptoKey `string`: An AES 128/192/256 bit key. Causes the shift to be computed based on this key and the patient ID. A default key is generated for each Deidentify operation and is used wherever crypto_key is not specified.

### DeidentifyConfig
* DeidentifyConfig `object`: Configures de-id options specific to different types of content. Each submessage customizes the handling of an https://tools.ietf.org/html/rfc6838 media type or subtype. Configs are applied in a nested manner at runtime.
  * dicom [DicomConfig](#dicomconfig)
  * fhir [FhirConfig](#fhirconfig)
  * image [ImageConfig](#imageconfig)
  * text [TextConfig](#textconfig)

### DeidentifyDatasetRequest
* DeidentifyDatasetRequest `object`: Redacts identifying information from the specified dataset.
  * config [DeidentifyConfig](#deidentifyconfig)
  * destinationDataset `string`: The name of the dataset resource to create and write the redacted data to. * The destination dataset must not exist. * The destination dataset must be in the same project and location as the source dataset. De-identifying data across multiple projects or locations is not supported.

### DeidentifyDicomStoreRequest
* DeidentifyDicomStoreRequest `object`: Creates a new DICOM store with sensitive information de-identified.
  * config [DeidentifyConfig](#deidentifyconfig)
  * destinationStore `string`: The name of the DICOM store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same project. De-identifying data across multiple projects is not supported. * The destination DICOM store must not exist. * The caller must have the necessary permissions to create the destination DICOM store.
  * filterConfig [DicomFilterConfig](#dicomfilterconfig)

### DeidentifyFhirStoreRequest
* DeidentifyFhirStoreRequest `object`: Creates a new FHIR store with sensitive information de-identified.
  * config [DeidentifyConfig](#deidentifyconfig)
  * destinationStore `string`: The name of the FHIR store to create and write the redacted data to. For example, `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`. * The destination dataset must exist. * The source dataset and destination dataset must both reside in the same project. De-identifying data across multiple projects is not supported. * The destination FHIR store must exist. * The caller must have the healthcare.fhirResources.update permission to write to the destination FHIR store.
  * resourceFilter [FhirFilter](#fhirfilter)

### DeidentifySummary
* DeidentifySummary `object`: Contains a summary of the Deidentify operation.

### DicomConfig
* DicomConfig `object`: Specifies the parameters needed for de-identification of DICOM stores.
  * filterProfile `string` (values: TAG_FILTER_PROFILE_UNSPECIFIED, MINIMAL_KEEP_LIST_PROFILE, ATTRIBUTE_CONFIDENTIALITY_BASIC_PROFILE, KEEP_ALL_PROFILE, DEIDENTIFY_TAG_CONTENTS): Tag filtering profile that determines which tags to keep/remove.
  * keepList [TagFilterList](#tagfilterlist)
  * removeList [TagFilterList](#tagfilterlist)
  * skipIdRedaction `boolean`: If true, skip replacing StudyInstanceUID, SeriesInstanceUID, SOPInstanceUID, and MediaStorageSOPInstanceUID and leave them untouched. The Cloud Healthcare API regenerates these UIDs by default based on the DICOM Standard's reasoning: "Whilst these UIDs cannot be mapped directly to an individual out of context, given access to the original images, or to a database of the original images containing the UIDs, it would be possible to recover the individual's identity." http://dicom.nema.org/medical/dicom/current/output/chtml/part15/sect_E.3.9.html

### DicomFilterConfig
* DicomFilterConfig `object`: Specifies the filter configuration for DICOM resources.
  * resourcePathsGcsUri `string`: The Cloud Storage location of the filter configuration file. The `gcs_uri` must be in the format `gs://bucket/path/to/object`. The filter configuration file must contain a list of resource paths separated by newline characters (\n or \r\n). Each resource path must be in the format "/studies/{studyUID}[/series/{seriesUID}[/instances/{instanceUID}]]" The Cloud Healthcare API service account must have the `roles/storage.objectViewer` Cloud IAM role for this Cloud Storage location.

### DicomStore
* DicomStore `object`: Represents a DICOM store.
  * labels `object`: User-supplied key-value pairs used to organize DICOM stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.
  * name `string`: Resource name of the DICOM store, of the form `projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/dicomStores/{dicom_store_id}`.
  * notificationConfig [NotificationConfig](#notificationconfig)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### ExportDicomDataRequest
* ExportDicomDataRequest `object`: Exports data from the specified DICOM store. If a given resource, such as a DICOM object with the same SOPInstance UID, already exists in the output, it is overwritten with the version in the source dataset. Exported DICOM data persists when the DICOM store from which it was exported is deleted.
  * bigqueryDestination [GoogleCloudHealthcareV1DicomBigQueryDestination](#googlecloudhealthcarev1dicombigquerydestination)
  * gcsDestination [GoogleCloudHealthcareV1DicomGcsDestination](#googlecloudhealthcarev1dicomgcsdestination)

### ExportDicomDataResponse
* ExportDicomDataResponse `object`: Returns additional information in regards to a completed DICOM store export.

### ExportResourcesRequest
* ExportResourcesRequest `object`: Request to export resources.
  * bigqueryDestination [GoogleCloudHealthcareV1FhirBigQueryDestination](#googlecloudhealthcarev1fhirbigquerydestination)
  * gcsDestination [GoogleCloudHealthcareV1FhirGcsDestination](#googlecloudhealthcarev1fhirgcsdestination)

### ExportResourcesResponse
* ExportResourcesResponse `object`: Response when all resources export successfully. This structure is included in the response to describe the detailed outcome after the operation finishes successfully.

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### FhirConfig
* FhirConfig `object`: Specifies how to handle de-identification of a FHIR store.
  * fieldMetadataList `array`: Specifies FHIR paths to match and how to transform them. Any field that is not matched by a FieldMetadata is passed through to the output dataset unmodified. All extensions are removed in the output.
    * items [FieldMetadata](#fieldmetadata)

### FhirFilter
* FhirFilter `object`: Filter configuration.
  * resources [Resources](#resources)

### FhirStore
* FhirStore `object`: Represents a FHIR store.
  * disableReferentialIntegrity `boolean`: Immutable. Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store creation. The default value is false, meaning that the API enforces referential integrity and fails the requests that result in inconsistent state in the FHIR store. When this field is set to true, the API skips referential integrity checks. Consequently, operations that rely on references, such as GetPatientEverything, do not return all the results if broken references exist.
  * disableResourceVersioning `boolean`: Immutable. Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation of FHIR store. If set to false, which is the default behavior, all write operations cause historical versions to be recorded automatically. The historical versions can be fetched through the history APIs, but cannot be updated. If set to true, no historical versions are kept. The server sends errors for attempts to read the historical versions.
  * enableUpdateCreate `boolean`: Whether this FHIR store has the [updateCreate capability](https://www.hl7.org/fhir/capabilitystatement-definitions.html#CapabilityStatement.rest.resource.updateCreate). This determines if the client can use an Update operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through the Create operation and attempts to update a non-existent resource return errors. Be careful with the audit logs if client-specified resource IDs contain sensitive data such as patient identifiers, those IDs are part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub notifications.
  * labels `object`: User-supplied key-value pairs used to organize FHIR stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.
  * name `string`: Output only. Resource name of the FHIR store, of the form `projects/{project_id}/datasets/{dataset_id}/fhirStores/{fhir_store_id}`.
  * notificationConfig [NotificationConfig](#notificationconfig)
  * streamConfigs `array`: A list of streaming configs that configure the destinations of streaming export for every resource mutation in this FHIR store. Each store is allowed to have up to 10 streaming configs. After a new config is added, the next resource mutation is streamed to the new location in addition to the existing ones. When a location is removed from the list, the server stops streaming to that location. Before adding a new config, you must add the required [`bigquery.dataEditor`](https://cloud.google.com/bigquery/docs/access-control#bigquery.dataEditor) role to your project's **Cloud Healthcare Service Agent** [service account](https://cloud.google.com/iam/docs/service-accounts). Some lag (typically on the order of dozens of seconds) is expected before the results show up in the streaming destination.
    * items [StreamConfig](#streamconfig)
  * version `string` (values: VERSION_UNSPECIFIED, DSTU2, STU3, R4): Immutable. The FHIR specification version that this FHIR store supports natively. This field is immutable after store creation. Requests are rejected if they contain FHIR resources of a different version. Version is required for every FHIR store.

### FieldMetadata
* FieldMetadata `object`: Specifies FHIR paths to match, and how to handle de-identification of matching fields.
  * paths `array`: List of paths to FHIR fields to be redacted. Each path is a period-separated list where each component is either a field name or FHIR type name, for example: Patient, HumanName. For "choice" types (those defined in the FHIR spec with the form: field[x]) we use two separate components. For example, "deceasedAge.unit" is matched by "Deceased.Age.unit". Supported types are: AdministrativeGenderCode, Code, Date, DateTime, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml. Base64Binary is also supported, but may only be kept as-is or have all the content removed.
    * items `string`
  * action `string` (values: ACTION_UNSPECIFIED, TRANSFORM, INSPECT_AND_TRANSFORM, DO_NOT_TRANSFORM): Deidentify action for one field.

### GoogleCloudHealthcareV1DeidentifyDeidentifyDicomStoreSummary
* GoogleCloudHealthcareV1DeidentifyDeidentifyDicomStoreSummary `object`: Contains a summary of the DeidentifyDicomStore operation.

### GoogleCloudHealthcareV1DeidentifyDeidentifyFhirStoreSummary
* GoogleCloudHealthcareV1DeidentifyDeidentifyFhirStoreSummary `object`: Contains a summary of the DeidentifyFhirStore operation.

### GoogleCloudHealthcareV1DicomBigQueryDestination
* GoogleCloudHealthcareV1DicomBigQueryDestination `object`: The BigQuery table where the server writes the output.
  * force `boolean`: If the destination table already exists and this flag is `TRUE`, the table is overwritten by the contents of the DICOM store. If the flag is not set and the destination table already exists, the export call returns an error.
  * tableUri `string`: BigQuery URI to a table, up to 2000 characters long, in the format `bq://projectId.bqDatasetId.tableId`

### GoogleCloudHealthcareV1DicomGcsDestination
* GoogleCloudHealthcareV1DicomGcsDestination `object`: The Cloud Storage location where the server writes the output and the export configuration.
  * mimeType `string`: MIME types supported by DICOM spec. Each file is written in the following format: `.../{study_id}/{series_id}/{instance_id}[/{frame_number}].{extension}` The frame_number component exists only for multi-frame instances. Supported MIME types are consistent with supported formats in DICOMweb: https://cloud.google.com/healthcare/docs/dicom#retrieve_transaction. Specifically, the following are supported: - application/dicom; transfer-syntax=1.2.840.10008.1.2.1 (uncompressed DICOM) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.50 (DICOM with embedded JPEG Baseline) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.90 (DICOM with embedded JPEG 2000 Lossless Only) - application/dicom; transfer-syntax=1.2.840.10008.1.2.4.91 (DICOM with embedded JPEG 2000) - application/dicom; transfer-syntax=* (DICOM with no transcoding) - application/octet-stream; transfer-syntax=1.2.840.10008.1.2.1 (raw uncompressed PixelData) - application/octet-stream; transfer-syntax=* (raw PixelData in whatever format it was uploaded in) - image/jpeg; transfer-syntax=1.2.840.10008.1.2.4.50 (Consumer JPEG) - image/png The following extensions are used for output files: - application/dicom -> .dcm - image/jpeg -> .jpg - image/png -> .png - application/octet-stream -> no extension If unspecified, the instances are exported in the original DICOM format they were uploaded in.
  * uriPrefix `string`: The Cloud Storage destination to export to. URI for a Cloud Storage directory where the server writes the result files, in the format `gs://{bucket-id}/{path/to/destination/dir}`). If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`.

### GoogleCloudHealthcareV1DicomGcsSource
* GoogleCloudHealthcareV1DicomGcsSource `object`: Specifies the configuration for importing data from Cloud Storage.
  * uri `string`: Points to a Cloud Storage URI containing file(s) with content only. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: '*' to match 0 or more non-separator characters '**' to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .dcm), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.dcm` imports all files with .dcm extensions in `my-directory/` and its sub-directories. '?' to match 1 character All other URI formats are invalid. Files matching the wildcard are expected to contain content only, no metadata.

### GoogleCloudHealthcareV1FhirBigQueryDestination
* GoogleCloudHealthcareV1FhirBigQueryDestination `object`: The configuration for exporting to BigQuery.
  * datasetUri `string`: BigQuery URI to an existing dataset, up to 2000 characters long, in the format `bq://projectId.bqDatasetId`.
  * force `boolean`: If this flag is `TRUE`, all tables are deleted from the dataset before the new exported tables are written. If the flag is not set and the destination dataset contains tables, the export call returns an error.
  * schemaConfig [SchemaConfig](#schemaconfig)

### GoogleCloudHealthcareV1FhirGcsDestination
* GoogleCloudHealthcareV1FhirGcsDestination `object`: The configuration for exporting to Cloud Storage.
  * uriPrefix `string`: URI for a Cloud Storage directory where result files should be written, in the format of `gs://{bucket-id}/{path/to/destination/dir}`. If there is no trailing slash, the service appends one when composing the object path. The user is responsible for creating the Cloud Storage bucket referenced in `uri_prefix`.

### GoogleCloudHealthcareV1FhirGcsSource
* GoogleCloudHealthcareV1FhirGcsSource `object`: Specifies the configuration for importing data from Cloud Storage.
  * uri `string`: Points to a Cloud Storage URI containing file(s) to import. The URI must be in the following format: `gs://{bucket_id}/{object_id}`. The URI can include wildcards in `object_id` and thus identify multiple files. Supported wildcards: * `*` to match 0 or more non-separator characters * `**` to match 0 or more characters (including separators). Must be used at the end of a path and with no other wildcards in the path. Can also be used with a file extension (such as .ndjson), which imports all files with the extension in the specified directory and its sub-directories. For example, `gs://my-bucket/my-directory/**.ndjson` imports all files with `.ndjson` extensions in `my-directory/` and its sub-directories. * `?` to match 1 character Files matching the wildcard are expected to contain content only, no metadata.

### Hl7V2NotificationConfig
* Hl7V2NotificationConfig `object`: Specifies where and whether to send notifications upon changes to a data store.
  * filter `string`: Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings The following fields and functions are available for filtering: * `message_type`, from the MSH-9.1 field. For example, `NOT message_type = "ADT"`. * `send_date` or `sendDate`, the YYYY-MM-DD date the message was sent in the dataset's time_zone, from the MSH-7 segment. For example, `send_date < "2017-01-02"`. * `send_time`, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, `send_time < "2017-01-02T00:00:00-05:00"`. * `send_facility`, the care center that the message came from, from the MSH-4 segment. For example, `send_facility = "ABC"`. * `PatientId(value, type)`, which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, `PatientId("123456", "MRN")`. * `labels.x`, a string value of the label with key `x` as set using the Message.labels map. For example, `labels."priority"="high"`. The operator `:*` can be used to assert the existence of a label. For example, `labels."priority":*`.
  * pubsubTopic `string`: The [Cloud Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. The notification is a `PubsubMessage` with the following fields: * `PubsubMessage.Data` contains the resource name. * `PubsubMessage.MessageId` is the ID of this notification. It's guaranteed to be unique within the topic. * `PubsubMessage.PublishTime` is the time when the message was published. Note that notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. The Cloud Healthcare API service account, service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com, must have publisher permissions on the given Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification cannot be published to Cloud Pub/Sub, errors are logged to Cloud Logging. For more information, see [Viewing error logs in Cloud Logging](/healthcare/docs/how-tos/logging)).

### Hl7V2Store
* Hl7V2Store `object`: Represents an HL7v2 store.
  * labels `object`: User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.
  * name `string`: Resource name of the HL7v2 store, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7v2_store_id}`.
  * notificationConfigs `array`: A list of notification configs. Each configuration uses a filter to determine whether to publish a message (both Ingest & Create) on the corresponding notification destination. Only the message name is sent as part of the notification. Supplied by the client.
    * items [Hl7V2NotificationConfig](#hl7v2notificationconfig)
  * parserConfig [ParserConfig](#parserconfig)
  * rejectDuplicateMessage `boolean`: Determines whether to reject duplicate messages. A duplicate message is a message with the same raw bytes as a message that has already been ingested/created in this HL7v2 store. The default value is false, meaning that the store accepts the duplicate messages and it also returns the same ACK message in the IngestMessageResponse as has been returned previously. Note that only one resource is created in the store. When this field is set to true, CreateMessage/IngestMessage requests with a duplicate message will be rejected by the store, and IngestMessageErrorDetail returns a NACK message upon rejection.

### HttpBody
* HttpBody `object`: Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
  * contentType `string`: The HTTP Content-Type header value specifying the content type of the body.
  * data `string`: The HTTP request/response body as raw binary.
  * extensions `array`: Application specific response metadata. Must be set in the first response for streaming APIs.
    * items `object`

### ImageConfig
* ImageConfig `object`: Specifies how to handle de-identification of image pixels.
  * textRedactionMode `string` (values: TEXT_REDACTION_MODE_UNSPECIFIED, REDACT_ALL_TEXT, REDACT_SENSITIVE_TEXT, REDACT_NO_TEXT): Determines how to redact text from image.

### ImportDicomDataRequest
* ImportDicomDataRequest `object`: Imports data into the specified DICOM store. Returns an error if any of the files to import are not DICOM files. This API accepts duplicate DICOM instances by ignoring the newly-pushed instance. It does not overwrite.
  * gcsSource [GoogleCloudHealthcareV1DicomGcsSource](#googlecloudhealthcarev1dicomgcssource)

### ImportDicomDataResponse
* ImportDicomDataResponse `object`: Returns additional information in regards to a completed DICOM store import.

### ImportResourcesRequest
* ImportResourcesRequest `object`: Request to import resources.
  * contentStructure `string` (values: CONTENT_STRUCTURE_UNSPECIFIED, BUNDLE, RESOURCE, BUNDLE_PRETTY, RESOURCE_PRETTY): The content structure in the source location. If not specified, the server treats the input source files as BUNDLE.
  * gcsSource [GoogleCloudHealthcareV1FhirGcsSource](#googlecloudhealthcarev1fhirgcssource)

### ImportResourcesResponse
* ImportResourcesResponse `object`: Final response of importing resources. This structure is included in the response to describe the detailed outcome after the operation finishes successfully.

### InfoTypeTransformation
* InfoTypeTransformation `object`: A transformation to apply to text that is identified as a specific info_type.
  * characterMaskConfig [CharacterMaskConfig](#charactermaskconfig)
  * cryptoHashConfig [CryptoHashConfig](#cryptohashconfig)
  * dateShiftConfig [DateShiftConfig](#dateshiftconfig)
  * infoTypes `array`: InfoTypes to apply this transformation to. If this is not specified, the transformation applies to any info_type.
    * items `string`
  * redactConfig [RedactConfig](#redactconfig)
  * replaceWithInfoTypeConfig [ReplaceWithInfoTypeConfig](#replacewithinfotypeconfig)

### IngestMessageRequest
* IngestMessageRequest `object`: Ingests a message into the specified HL7v2 store.
  * message [Message](#message)

### IngestMessageResponse
* IngestMessageResponse `object`: Acknowledges that a message has been ingested into the specified HL7v2 store.
  * hl7Ack `string`: HL7v2 ACK message.
  * message [Message](#message)

### ListDatasetsResponse
* ListDatasetsResponse `object`: Lists the available datasets.
  * datasets `array`: The first page of datasets.
    * items [Dataset](#dataset)
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.

### ListDicomStoresResponse
* ListDicomStoresResponse `object`: Lists the DICOM stores in the given dataset.
  * dicomStores `array`: The returned DICOM stores. Won't be more DICOM stores than the value of page_size in the request.
    * items [DicomStore](#dicomstore)
  * nextPageToken `string`: Token to retrieve the next page of results or empty if there are no more results in the list.

### ListFhirStoresResponse
* ListFhirStoresResponse `object`: Lists the FHIR stores in the given dataset.
  * fhirStores `array`: The returned FHIR stores. Won't be more FHIR stores than the value of page_size in the request.
    * items [FhirStore](#fhirstore)
  * nextPageToken `string`: Token to retrieve the next page of results or empty if there are no more results in the list.

### ListHl7V2StoresResponse
* ListHl7V2StoresResponse `object`: Lists the HL7v2 stores in the given dataset.
  * hl7V2Stores `array`: The returned HL7v2 stores. Won't be more HL7v2 stores than the value of page_size in the request.
    * items [Hl7V2Store](#hl7v2store)
  * nextPageToken `string`: Token to retrieve the next page of results or empty if there are no more results in the list.

### ListLocationsResponse
* ListLocationsResponse `object`: The response message for Locations.ListLocations.
  * locations `array`: A list of locations that matches the specified filter in the request.
    * items [Location](#location)
  * nextPageToken `string`: The standard List next-page token.

### ListMessagesResponse
* ListMessagesResponse `object`: Lists the messages in the specified HL7v2 store.
  * hl7V2Messages `array`: The returned Messages. Won't be more Messages than the value of page_size in the request. See view for populated fields.
    * items [Message](#message)
  * nextPageToken `string`: Token to retrieve the next page of results or empty if there are no more results in the list.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### Location
* Location `object`: A resource that represents Google Cloud Platform location.
  * displayName `string`: The friendly name for this location, typically a nearby city name. For example, "Tokyo".
  * labels `object`: Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}
  * locationId `string`: The canonical id for this location. For example: `"us-east1"`.
  * metadata `object`: Service-specific metadata. For example the available capacity at the given location.
  * name `string`: Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`

### Message
* Message `object`: A complete HL7v2 message. See [Introduction to HL7 Standards] (https://www.hl7.org/implement/standards/index.cfm?ref=common) for details on the standard.
  * createTime `string`: Output only. The datetime when the message was created. Set by the server.
  * data `string`: Raw message bytes.
  * labels `object`: User-supplied key-value pairs used to organize HL7v2 stores. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \p{Ll}\p{Lo}{0,62} Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.
  * messageType `string`: The message type for this message. MSH-9.1.
  * name `string`: Resource name of the Message, of the form `projects/{project_id}/datasets/{dataset_id}/hl7V2Stores/{hl7_v2_store_id}/messages/{message_id}`. Assigned by the server.
  * parsedData [ParsedData](#parseddata)
  * patientIds `array`: All patient IDs listed in the PID-2, PID-3, and PID-4 segments of this message.
    * items [PatientId](#patientid)
  * sendFacility `string`: The hospital that this message came from. MSH-4.
  * sendTime `string`: The datetime the sending application sent this message. MSH-7.

### NotificationConfig
* NotificationConfig `object`: Specifies where to send notifications upon changes to a data store.
  * pubsubTopic `string`: The [Cloud Pub/Sub](https://cloud.google.com/pubsub/docs/) topic that notifications of changes are published on. Supplied by the client. PubsubMessage.Data contains the resource name. PubsubMessage.MessageId is the ID of this message. It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message was published. Notifications are only sent if the topic is non-empty. [Topic names](https://cloud.google.com/pubsub/docs/overview#names) must be scoped to a project. Cloud Healthcare API service account must have publisher permissions on the given Cloud Pub/Sub topic. Not having adequate permissions causes the calls that send notifications to fail. If a notification can't be published to Cloud Pub/Sub, errors are logged to Cloud Logging (see [Viewing logs](/healthcare/docs/how-tos/logging)). If the number of errors exceeds a certain rate, some aren't submitted. Note that not all operations trigger notifications, see [Configuring Pub/Sub notifications](https://cloud.google.com/healthcare/docs/how-tos/pubsub) for specific details.

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### OperationMetadata
* OperationMetadata `object`: OperationMetadata provides information about the operation execution. Returned in the long-running operation's metadata field.
  * apiMethodName `string`: The name of the API method that initiated the operation.
  * cancelRequested `boolean`: Specifies if cancellation was requested for the operation.
  * counter [ProgressCounter](#progresscounter)
  * createTime `string`: The time at which the operation was created by the API.
  * endTime `string`: The time at which execution was completed.
  * logsUrl `string`: A link to audit and error logs in the log viewer. Error logs are generated only by some operations, listed at [Viewing logs](/healthcare/docs/how-tos/logging).

### ParsedData
* ParsedData `object`: The content of a HL7v2 message in a structured format.
  * segments `array`
    * items [Segment](#segment)

### ParserConfig
* ParserConfig `object`: The configuration for the parser. It determines how the server parses the messages.
  * allowNullHeader `boolean`: Determines whether messages with no header are allowed.
  * segmentTerminator `string`: Byte(s) to use as the segment terminator. If this is unset, '\r' is used as segment terminator.

### PatientId
* PatientId `object`: A patient identifier and associated type.
  * type `string`: ID type. For example, MRN or NHS.
  * value `string`: The patient's unique identifier.

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * auditConfigs `array`: Specifies cloud audit logging configuration for this policy.
    * items [AuditConfig](#auditconfig)
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### ProgressCounter
* ProgressCounter `object`: ProgressCounter provides counters to describe an operation's progress.
  * failure `string`: The number of units that failed in the operation.
  * pending `string`: The number of units that are pending in the operation.
  * success `string`: The number of units that succeeded in the operation.

### RedactConfig
* RedactConfig `object`: Define how to redact sensitive values. Default behaviour is erase. For example, "My name is Jane." becomes "My name is ."

### ReplaceWithInfoTypeConfig
* ReplaceWithInfoTypeConfig `object`: When using the INSPECT_AND_TRANSFORM action, each match is replaced with the name of the info_type. For example, "My name is Jane" becomes "My name is [PERSON_NAME]." The TRANSFORM action is equivalent to redacting.

### Resources
* Resources `object`: A list of FHIR resources.
  * resources `array`: List of resources IDs. For example, "Patient/1234".
    * items `string`

### SchemaConfig
* SchemaConfig `object`: Configuration for the FHIR BigQuery schema. Determines how the server generates the schema.
  * recursiveStructureDepth `string`: The depth for all recursive structures in the output analytics schema. For example, `concept` in the CodeSystem resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called `concept.concept` but not `concept.concept.concept`. If not specified or set to 0, the server will use the default value 2. The maximum depth allowed is 5.
  * schemaType `string` (values: SCHEMA_TYPE_UNSPECIFIED, ANALYTICS): Specifies the output schema type. Schema type is required.

### SearchResourcesRequest
* SearchResourcesRequest `object`: Request to search the resources in the specified FHIR store.
  * resourceType `string`: The FHIR resource type to search, such as Patient or Observation. For a complete list, see the FHIR Resource Index ([DSTU2](http://hl7.org/implement/standards/fhir/DSTU2/resourcelist.html), [STU3](http://hl7.org/implement/standards/fhir/STU3/resourcelist.html), [R4](http://hl7.org/implement/standards/fhir/R4/resourcelist.html)).

### Segment
* Segment `object`: A segment in a structured format.
  * fields `object`: A mapping from the positional location to the value. The key string uses zero-based indexes separated by dots to identify Fields, components and sub-components. A bracket notation is also used to identify different instances of a repeated field. Regex for key: (\d+)(\[\d+\])?(.\d+)?(.\d+)? Examples of (key, value) pairs: * (0.1, "hemoglobin") denotes that the first component of Field 0 has the value "hemoglobin". * (1.1.2, "CBC") denotes that the second sub-component of the first component of Field 1 has the value "CBC". * (1[0].1, "HbA1c") denotes that the first component of the first Instance of Field 1, which is repeated, has the value "HbA1c".
  * segmentId `string`: A string that indicates the type of segment. For example, EVN or PID.
  * setId `string`: Set ID for segments that can be in a set. This can be empty if it's missing or isn't applicable.

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)
  * updateMask `string`: OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### StreamConfig
* StreamConfig `object`: Contains configuration for streaming FHIR export.
  * bigqueryDestination [GoogleCloudHealthcareV1FhirBigQueryDestination](#googlecloudhealthcarev1fhirbigquerydestination)
  * resourceTypes `array`: Supply a FHIR resource type (such as "Patient" or "Observation"). See https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats an empty list as an intent to stream all the supported resource types in this FHIR store.
    * items `string`

### TagFilterList
* TagFilterList `object`: List of tags to be filtered.
  * tags `array`: Tags to be filtered. Tags must be DICOM Data Elements, File Meta Elements, or Directory Structuring Elements, as defined at: http://dicom.nema.org/medical/dicom/current/output/html/part06.html#table_6-1,. They may be provided by "Keyword" or "Tag". For example "PatientID", "00100010".
    * items `string`

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### TextConfig
* TextConfig `object`
  * transformations `array`: The transformations to apply to the detected data.
    * items [InfoTypeTransformation](#infotypetransformation)


