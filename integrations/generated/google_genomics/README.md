# @datafire/google_genomics

Client library for Genomics

## Installation and Usage
```bash
npm install --save @datafire/google_genomics
```
```js
let google_genomics = require('@datafire/google_genomics').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_genomics.variantsets.search({}).then(data => {
  console.log(data);
});
```

## Description

Upload, process, query, and search Genomics data in the cloud.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_genomics.oauthCallback({
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
google_genomics.oauthRefresh(null, context)
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

### annotations.create
Creates a new annotation. Caller must have WRITE permission
for the associated annotation set.

The following fields are required:

* annotationSetId
* referenceName or
  referenceId

### Transcripts

For annotations of type TRANSCRIPT, the following fields of
transcript must be provided:

* exons.start
* exons.end

All other fields may be optionally specified, unless documented as being
server-generated (for example, the `id` field). The annotated
range must be no longer than 100Mbp (mega base pairs). See the
Annotation resource
for additional restrictions on each field.


```js
google_genomics.annotations.create({}, context)
```

#### Input
* input `object`
  * body [Annotation](#annotation)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Annotation](#annotation)

### annotations.search
Searches for annotations that match the given criteria. Results are
ordered by genomic coordinate (by reference sequence, then position).
Annotations with equivalent genomic coordinates are returned in an
unspecified order. This order is consistent, such that two queries for the
same content (regardless of page size) yield annotations in the same order
across their respective streams of paginated responses. Caller must have
READ permission for the queried annotation sets.


```js
google_genomics.annotations.search({}, context)
```

#### Input
* input `object`
  * body [SearchAnnotationsRequest](#searchannotationsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchAnnotationsResponse](#searchannotationsresponse)

### annotations.delete
Deletes an annotation. Caller must have WRITE permission for
the associated annotation set.


```js
google_genomics.annotations.delete({
  "annotationId": ""
}, context)
```

#### Input
* input `object`
  * annotationId **required** `string`: The ID of the annotation to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### annotations.get
Gets an annotation. Caller must have READ permission
for the associated annotation set.


```js
google_genomics.annotations.get({
  "annotationId": ""
}, context)
```

#### Input
* input `object`
  * annotationId **required** `string`: The ID of the annotation to be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Annotation](#annotation)

### annotations.update
Updates an annotation. Caller must have
WRITE permission for the associated dataset.


```js
google_genomics.annotations.update({
  "annotationId": ""
}, context)
```

#### Input
* input `object`
  * annotationId **required** `string`: The ID of the annotation to be updated.
  * updateMask `string`: An optional mask specifying which fields to update. Mutable fields are
  * body [Annotation](#annotation)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Annotation](#annotation)

### annotations.batchCreate
Creates one or more new annotations atomically. All annotations must
belong to the same annotation set. Caller must have WRITE
permission for this annotation set. For optimal performance, batch
positionally adjacent annotations together.

If the request has a systemic issue, such as an attempt to write to
an inaccessible annotation set, the entire RPC will fail accordingly. For
lesser data issues, when possible an error will be isolated to the
corresponding batch entry in the response; the remaining well formed
annotations will be created normally.

For details on the requirements for each individual annotation resource,
see
CreateAnnotation.


```js
google_genomics.annotations.batchCreate({}, context)
```

#### Input
* input `object`
  * body [BatchCreateAnnotationsRequest](#batchcreateannotationsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [BatchCreateAnnotationsResponse](#batchcreateannotationsresponse)

### annotationsets.create
Creates a new annotation set. Caller must have WRITE permission for the
associated dataset.

The following fields are required:

  * datasetId
  * referenceSetId

All other fields may be optionally specified, unless documented as being
server-generated (for example, the `id` field).


```js
google_genomics.annotationsets.create({}, context)
```

#### Input
* input `object`
  * body [AnnotationSet](#annotationset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AnnotationSet](#annotationset)

### annotationsets.search
Searches for annotation sets that match the given criteria. Annotation sets
are returned in an unspecified order. This order is consistent, such that
two queries for the same content (regardless of page size) yield annotation
sets in the same order across their respective streams of paginated
responses. Caller must have READ permission for the queried datasets.


```js
google_genomics.annotationsets.search({}, context)
```

#### Input
* input `object`
  * body [SearchAnnotationSetsRequest](#searchannotationsetsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchAnnotationSetsResponse](#searchannotationsetsresponse)

### annotationsets.delete
Deletes an annotation set. Caller must have WRITE permission
for the associated annotation set.


```js
google_genomics.annotationsets.delete({
  "annotationSetId": ""
}, context)
```

#### Input
* input `object`
  * annotationSetId **required** `string`: The ID of the annotation set to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### annotationsets.get
Gets an annotation set. Caller must have READ permission for
the associated dataset.


```js
google_genomics.annotationsets.get({
  "annotationSetId": ""
}, context)
```

#### Input
* input `object`
  * annotationSetId **required** `string`: The ID of the annotation set to be retrieved.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AnnotationSet](#annotationset)

### annotationsets.update
Updates an annotation set. The update must respect all mutability
restrictions and other invariants described on the annotation set resource.
Caller must have WRITE permission for the associated dataset.


```js
google_genomics.annotationsets.update({
  "annotationSetId": ""
}, context)
```

#### Input
* input `object`
  * annotationSetId **required** `string`: The ID of the annotation set to be updated.
  * updateMask `string`: An optional mask specifying which fields to update. Mutable fields are
  * body [AnnotationSet](#annotationset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AnnotationSet](#annotationset)

### callsets.create
Creates a new call set.

For the definitions of call sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.callsets.create({}, context)
```

#### Input
* input `object`
  * body [CallSet](#callset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CallSet](#callset)

### callsets.search
Gets a list of call sets matching the criteria.

For the definitions of call sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.searchCallSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L178).


```js
google_genomics.callsets.search({}, context)
```

#### Input
* input `object`
  * body [SearchCallSetsRequest](#searchcallsetsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchCallSetsResponse](#searchcallsetsresponse)

### callsets.delete
Deletes a call set.

For the definitions of call sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.callsets.delete({
  "callSetId": ""
}, context)
```

#### Input
* input `object`
  * callSetId **required** `string`: The ID of the call set to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### callsets.get
Gets a call set by ID.

For the definitions of call sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.callsets.get({
  "callSetId": ""
}, context)
```

#### Input
* input `object`
  * callSetId **required** `string`: The ID of the call set.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CallSet](#callset)

### callsets.patch
Updates a call set.

For the definitions of call sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

This method supports patch semantics.


```js
google_genomics.callsets.patch({
  "callSetId": ""
}, context)
```

#### Input
* input `object`
  * callSetId **required** `string`: The ID of the call set to be updated.
  * updateMask `string`: An optional mask specifying which fields to update. At this time, the only
  * body [CallSet](#callset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CallSet](#callset)

### datasets.list
Lists datasets within a project.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.datasets.list({}, context)
```

#### Input
* input `object`
  * pageToken `string`: The continuation token, which is used to page through large result sets.
  * pageSize `integer`: The maximum number of results to return in a single page. If unspecified,
  * projectId `string`: Required. The Google Cloud project ID to list datasets for.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListDatasetsResponse](#listdatasetsresponse)

### datasets.create
Creates a new dataset.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.datasets.create({}, context)
```

#### Input
* input `object`
  * body [Dataset](#dataset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Dataset](#dataset)

### datasets.delete
Deletes a dataset and all of its contents (all read group sets,
reference sets, variant sets, call sets, annotation sets, etc.)
This is reversible (up to one week after the deletion) via
the
datasets.undelete
operation.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.datasets.delete({
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * datasetId **required** `string`: The ID of the dataset to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### datasets.get
Gets a dataset by ID.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.datasets.get({
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * datasetId **required** `string`: The ID of the dataset.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Dataset](#dataset)

### datasets.patch
Updates a dataset.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

This method supports patch semantics.


```js
google_genomics.datasets.patch({
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * datasetId **required** `string`: The ID of the dataset to be updated.
  * updateMask `string`: An optional mask specifying which fields to update. At this time, the only
  * body [Dataset](#dataset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Dataset](#dataset)

### datasets.undelete
Undeletes a dataset by restoring a dataset which was deleted via this API.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

This operation is only possible for a week after the deletion occurred.


```js
google_genomics.datasets.undelete({
  "datasetId": ""
}, context)
```

#### Input
* input `object`
  * datasetId **required** `string`: The ID of the dataset to be undeleted.
  * body [UndeleteDatasetRequest](#undeletedatasetrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Dataset](#dataset)

### readgroupsets.search
Searches for read group sets matching the criteria.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.searchReadGroupSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L135).


```js
google_genomics.readgroupsets.search({}, context)
```

#### Input
* input `object`
  * body [SearchReadGroupSetsRequest](#searchreadgroupsetsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchReadGroupSetsResponse](#searchreadgroupsetsresponse)

### readgroupsets.delete
Deletes a read group set.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.readgroupsets.delete({
  "readGroupSetId": ""
}, context)
```

#### Input
* input `object`
  * readGroupSetId **required** `string`: The ID of the read group set to be deleted. The caller must have WRITE
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### readgroupsets.get
Gets a read group set by ID.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.readgroupsets.get({
  "readGroupSetId": ""
}, context)
```

#### Input
* input `object`
  * readGroupSetId **required** `string`: The ID of the read group set.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ReadGroupSet](#readgroupset)

### readgroupsets.patch
Updates a read group set.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

This method supports patch semantics.


```js
google_genomics.readgroupsets.patch({
  "readGroupSetId": ""
}, context)
```

#### Input
* input `object`
  * readGroupSetId **required** `string`: The ID of the read group set to be updated. The caller must have WRITE
  * updateMask `string`: An optional mask specifying which fields to update. Supported fields:
  * body [ReadGroupSet](#readgroupset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ReadGroupSet](#readgroupset)

### readgroupsets.coveragebuckets.list
Lists fixed width coverage buckets for a read group set, each of which
correspond to a range of a reference sequence. Each bucket summarizes
coverage information across its corresponding genomic range.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Coverage is defined as the number of reads which are aligned to a given
base in the reference sequence. Coverage buckets are available at several
precomputed bucket widths, enabling retrieval of various coverage 'zoom
levels'. The caller must have READ permissions for the target read group
set.


```js
google_genomics.readgroupsets.coveragebuckets.list({
  "readGroupSetId": ""
}, context)
```

#### Input
* input `object`
  * readGroupSetId **required** `string`: Required. The ID of the read group set over which coverage is requested.
  * end `string`: The end position of the range on the reference, 0-based exclusive. If
  * pageToken `string`: The continuation token, which is used to page through large result sets.
  * pageSize `integer`: The maximum number of results to return in a single page. If unspecified,
  * start `string`: The start position of the range on the reference, 0-based inclusive. If
  * targetBucketWidth `string`: The desired width of each reported coverage bucket in base pairs. This
  * referenceName `string`: The name of the reference to query, within the reference set associated
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListCoverageBucketsResponse](#listcoveragebucketsresponse)

### readgroupsets.export
Exports a read group set to a BAM file in Google Cloud Storage.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Note that currently there may be some differences between exported BAM
files and the original BAM file at the time of import. See
ImportReadGroupSets
for caveats.


```js
google_genomics.readgroupsets.export({
  "readGroupSetId": ""
}, context)
```

#### Input
* input `object`
  * readGroupSetId **required** `string`: Required. The ID of the read group set to export. The caller must have
  * body [ExportReadGroupSetRequest](#exportreadgroupsetrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### readgroupsets.import
Creates read group sets by asynchronously importing the provided
information.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

The caller must have WRITE permissions to the dataset.

## Notes on [BAM](https://samtools.github.io/hts-specs/SAMv1.pdf) import

- Tags will be converted to strings - tag types are not preserved
- Comments (`@CO`) in the input file header will not be preserved
- Original header order of references (`@SQ`) will not be preserved
- Any reverse stranded unmapped reads will be reverse complemented, and
their qualities (also the "BQ" and "OQ" tags, if any) will be reversed
- Unmapped reads will be stripped of positional information (reference name
and position)


```js
google_genomics.readgroupsets.import({}, context)
```

#### Input
* input `object`
  * body [ImportReadGroupSetsRequest](#importreadgroupsetsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### reads.search
Gets a list of reads for one or more read group sets.

For the definitions of read group sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Reads search operates over a genomic coordinate space of reference sequence
& position defined over the reference sequences to which the requested
read group sets are aligned.

If a target positional range is specified, search returns all reads whose
alignment to the reference genome overlap the range. A query which
specifies only read group set IDs yields all reads in those read group
sets, including unmapped reads.

All reads returned (including reads on subsequent pages) are ordered by
genomic coordinate (by reference sequence, then position). Reads with
equivalent genomic coordinates are returned in an unspecified order. This
order is consistent, such that two queries for the same content (regardless
of page size) yield reads in the same order across their respective streams
of paginated responses.

Implements
[GlobalAllianceApi.searchReads](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/readmethods.avdl#L85).


```js
google_genomics.reads.search({}, context)
```

#### Input
* input `object`
  * body [SearchReadsRequest](#searchreadsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchReadsResponse](#searchreadsresponse)

### references.search
Searches for references which match the given criteria.

For the definitions of references and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.searchReferences](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L146).


```js
google_genomics.references.search({}, context)
```

#### Input
* input `object`
  * body [SearchReferencesRequest](#searchreferencesrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchReferencesResponse](#searchreferencesresponse)

### references.get
Gets a reference.

For the definitions of references and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.getReference](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L158).


```js
google_genomics.references.get({
  "referenceId": ""
}, context)
```

#### Input
* input `object`
  * referenceId **required** `string`: The ID of the reference.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Reference](#reference)

### references.bases.list
Lists the bases in a reference, optionally restricted to a range.

For the definitions of references and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.getReferenceBases](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L221).


```js
google_genomics.references.bases.list({
  "referenceId": ""
}, context)
```

#### Input
* input `object`
  * referenceId **required** `string`: The ID of the reference.
  * end `string`: The end position (0-based, exclusive) of this query. Defaults to the length
  * pageToken `string`: The continuation token, which is used to page through large result sets.
  * pageSize `integer`: The maximum number of bases to return in a single page. If unspecified,
  * start `string`: The start position (0-based) of this query. Defaults to 0.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListBasesResponse](#listbasesresponse)

### referencesets.search
Searches for reference sets which match the given criteria.

For the definitions of references and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.searchReferenceSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L71)


```js
google_genomics.referencesets.search({}, context)
```

#### Input
* input `object`
  * body [SearchReferenceSetsRequest](#searchreferencesetsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchReferenceSetsResponse](#searchreferencesetsresponse)

### referencesets.get
Gets a reference set.

For the definitions of references and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.getReferenceSet](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/referencemethods.avdl#L83).


```js
google_genomics.referencesets.get({
  "referenceSetId": ""
}, context)
```

#### Input
* input `object`
  * referenceSetId **required** `string`: The ID of the reference set.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ReferenceSet](#referenceset)

### variants.create
Creates a new variant.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.variants.create({}, context)
```

#### Input
* input `object`
  * body [Variant](#variant)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Variant](#variant)

### variants.search
Gets a list of variants matching the criteria.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.searchVariants](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L126).


```js
google_genomics.variants.search({}, context)
```

#### Input
* input `object`
  * body [SearchVariantsRequest](#searchvariantsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchVariantsResponse](#searchvariantsresponse)

### variants.delete
Deletes a variant.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.variants.delete({
  "variantId": ""
}, context)
```

#### Input
* input `object`
  * variantId **required** `string`: The ID of the variant to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### variants.get
Gets a variant by ID.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.variants.get({
  "variantId": ""
}, context)
```

#### Input
* input `object`
  * variantId **required** `string`: The ID of the variant.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Variant](#variant)

### variants.patch
Updates a variant.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

This method supports patch semantics. Returns the modified variant without
its calls.


```js
google_genomics.variants.patch({
  "variantId": ""
}, context)
```

#### Input
* input `object`
  * variantId **required** `string`: The ID of the variant to be updated.
  * updateMask `string`: An optional mask specifying which fields to update. At this time, mutable
  * body [Variant](#variant)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Variant](#variant)

### variants.import
Creates variant data by asynchronously importing the provided information.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

The variants for import will be merged with any existing variant that
matches its reference sequence, start, end, reference bases, and
alternative bases. If no such variant exists, a new one will be created.

When variants are merged, the call information from the new variant
is added to the existing variant, and Variant info fields are merged
as specified in
infoMergeConfig.
As a special case, for single-sample VCF files, QUAL and FILTER fields will
be moved to the call level; these are sometimes interpreted in a
call-specific context.
Imported VCF headers are appended to the metadata already in a variant set.


```js
google_genomics.variants.import({}, context)
```

#### Input
* input `object`
  * body [ImportVariantsRequest](#importvariantsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### variants.merge
Merges the given variants with existing variants.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Each variant will be
merged with an existing variant that matches its reference sequence,
start, end, reference bases, and alternative bases. If no such variant
exists, a new one will be created.

When variants are merged, the call information from the new variant
is added to the existing variant. Variant info fields are merged as
specified in the
infoMergeConfig
field of the MergeVariantsRequest.

Please exercise caution when using this method!  It is easy to introduce
mistakes in existing variants and difficult to back out of them.  For
example,
suppose you were trying to merge a new variant with an existing one and
both
variants contain calls that belong to callsets with the same callset ID.

    // Existing variant - irrelevant fields trimmed for clarity
    {
        "variantSetId": "10473108253681171589",
        "referenceName": "1",
        "start": "10582",
        "referenceBases": "G",
        "alternateBases": [
            "A"
        ],
        "calls": [
            {
                "callSetId": "10473108253681171589-0",
                "callSetName": "CALLSET0",
                "genotype": [
                    0,
                    1
                ],
            }
        ]
    }

    // New variant with conflicting call information
    {
        "variantSetId": "10473108253681171589",
        "referenceName": "1",
        "start": "10582",
        "referenceBases": "G",
        "alternateBases": [
            "A"
        ],
        "calls": [
            {
                "callSetId": "10473108253681171589-0",
                "callSetName": "CALLSET0",
                "genotype": [
                    1,
                    1
                ],
            }
        ]
    }

The resulting merged variant would overwrite the existing calls with those
from the new variant:

    {
        "variantSetId": "10473108253681171589",
        "referenceName": "1",
        "start": "10582",
        "referenceBases": "G",
        "alternateBases": [
            "A"
        ],
        "calls": [
            {
                "callSetId": "10473108253681171589-0",
                "callSetName": "CALLSET0",
                "genotype": [
                    1,
                    1
                ],
            }
        ]
    }

This may be the desired outcome, but it is up to the user to determine if
if that is indeed the case.


```js
google_genomics.variants.merge({}, context)
```

#### Input
* input `object`
  * body [MergeVariantsRequest](#mergevariantsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### variantsets.create
Creates a new variant set.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

The provided variant set must have a valid `datasetId` set - all other
fields are optional. Note that the `id` field will be ignored, as this is
assigned by the server.


```js
google_genomics.variantsets.create({}, context)
```

#### Input
* input `object`
  * body [VariantSet](#variantset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [VariantSet](#variantset)

### variantsets.search
Returns a list of all variant sets matching search criteria.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

Implements
[GlobalAllianceApi.searchVariantSets](https://github.com/ga4gh/schemas/blob/v0.5.1/src/main/resources/avro/variantmethods.avdl#L49).


```js
google_genomics.variantsets.search({}, context)
```

#### Input
* input `object`
  * body [SearchVariantSetsRequest](#searchvariantsetsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchVariantSetsResponse](#searchvariantsetsresponse)

### variantsets.delete
Deletes a variant set including all variants, call sets, and calls within.
This is not reversible.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.variantsets.delete({
  "variantSetId": ""
}, context)
```

#### Input
* input `object`
  * variantSetId **required** `string`: The ID of the variant set to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### variantsets.get
Gets a variant set by ID.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.variantsets.get({
  "variantSetId": ""
}, context)
```

#### Input
* input `object`
  * variantSetId **required** `string`: Required. The ID of the variant set.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [VariantSet](#variantset)

### variantsets.patch
Updates a variant set using patch semantics.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.variantsets.patch({
  "variantSetId": ""
}, context)
```

#### Input
* input `object`
  * variantSetId **required** `string`: The ID of the variant to be updated (must already exist).
  * updateMask `string`: An optional mask specifying which fields to update. Supported fields:
  * body [VariantSet](#variantset)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [VariantSet](#variantset)

### variantsets.export
Exports variant set data to an external destination.

For the definitions of variant sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.variantsets.export({
  "variantSetId": ""
}, context)
```

#### Input
* input `object`
  * variantSetId **required** `string`: Required. The ID of the variant set that contains variant data which
  * body [ExportVariantSetRequest](#exportvariantsetrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Operation](#operation)

### operations.list
Lists operations that match the specified filter in the request.


```js
google_genomics.operations.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: A string for filtering Operations.
  * name **required** `string`: The name of the operation's parent resource.
  * pageSize `integer`: The maximum number of results to return. If unspecified, defaults to
  * pageToken `string`: The standard list page token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListOperationsResponse](#listoperationsresponse)

### operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation.


```js
google_genomics.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be cancelled.
  * body [CancelOperationRequest](#canceloperationrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### datasets.getIamPolicy
Gets the access control policy for the dataset. This is empty if the
policy or resource does not exist.

See <a href="/iam/docs/managing-policies#getting_a_policy">Getting a
Policy</a> for more information.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.datasets.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which policy is being specified. Format is
  * body [GetIamPolicyRequest](#getiampolicyrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Policy](#policy)

### datasets.setIamPolicy
Sets the access control policy on the specified dataset. Replaces any
existing policy.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)

See <a href="/iam/docs/managing-policies#setting_a_policy">Setting a
Policy</a> for more information.


```js
google_genomics.datasets.setIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which policy is being specified. Format is
  * body [SetIamPolicyRequest](#setiampolicyrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Policy](#policy)

### datasets.testIamPermissions
Returns permissions that a caller has on the specified resource.
See <a href="/iam/docs/managing-policies#testing_permissions">Testing
Permissions</a> for more information.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.datasets.testIamPermissions({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which policy is being specified. Format is
  * body [TestIamPermissionsRequest](#testiampermissionsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [TestIamPermissionsResponse](#testiampermissionsresponse)



## Definitions

### Annotation
* Annotation `object`: An annotation describes a region of reference genome. The value of an
  * annotationSetId `string`: The annotation set to which this annotation belongs.
  * end `string`: The end position of the range on the reference, 0-based exclusive.
  * id `string`: The server-generated annotation ID, unique across all annotations.
  * info `object`: A map of additional read alignment information. This must be of the form
  * name `string`: The display name of this annotation.
  * referenceId `string`: The ID of the Google Genomics reference associated with this range.
  * referenceName `string`: The display name corresponding to the reference specified by
  * reverseStrand `boolean`: Whether this range refers to the reverse strand, as opposed to the forward
  * start `string`: The start position of the range on the reference, 0-based inclusive.
  * transcript [Transcript](#transcript)
  * type `string` (values: ANNOTATION_TYPE_UNSPECIFIED, GENERIC, VARIANT, GENE, TRANSCRIPT): The data type for this annotation. Must match the containing annotation
  * variant [VariantAnnotation](#variantannotation)

### AnnotationSet
* AnnotationSet `object`: An annotation set is a logical grouping of annotations that share consistent
  * datasetId `string`: The dataset to which this annotation set belongs.
  * id `string`: The server-generated annotation set ID, unique across all annotation sets.
  * info `object`: A map of additional read alignment information. This must be of the form
  * name `string`: The display name for this annotation set.
  * referenceSetId `string`: The ID of the reference set that defines the coordinate space for this
  * sourceUri `string`: The source URI describing the file from which this annotation set was
  * type `string` (values: ANNOTATION_TYPE_UNSPECIFIED, GENERIC, VARIANT, GENE, TRANSCRIPT): The type of annotations contained within this set.

### BatchCreateAnnotationsRequest
* BatchCreateAnnotationsRequest `object`
  * annotations `array`: The annotations to be created. At most 4096 can be specified in a single
    * items [Annotation](#annotation)
  * requestId `string`: A unique request ID which enables the server to detect duplicated requests.

### BatchCreateAnnotationsResponse
* BatchCreateAnnotationsResponse `object`
  * entries `array`: The resulting per-annotation entries, ordered consistently with the
    * items [Entry](#entry)

### Binding
* Binding `object`: Associates `members` with a `role`.
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource.
    * items `string`
  * role `string`: Role that is assigned to `members`.

### CallSet
* CallSet `object`: A call set is a collection of variant calls, typically for one sample. It
  * created `string`: The date this call set was created in milliseconds from the epoch.
  * id `string`: The server-generated call set ID, unique across all call sets.
  * info `object`: A map of additional call set information. This must be of the form
  * name `string`: The call set name.
  * sampleId `string`: The sample ID this call set corresponds to.
  * variantSetIds `array`: The IDs of the variant sets this call set belongs to. This field must
    * items `string`

### CancelOperationRequest
* CancelOperationRequest `object`: The request message for Operations.CancelOperation.

### CigarUnit
* CigarUnit `object`: A single CIGAR operation.
  * operation `string` (values: OPERATION_UNSPECIFIED, ALIGNMENT_MATCH, INSERT, DELETE, SKIP, CLIP_SOFT, CLIP_HARD, PAD, SEQUENCE_MATCH, SEQUENCE_MISMATCH)
  * operationLength `string`: The number of genomic bases that the operation runs for. Required.
  * referenceSequence `string`: `referenceSequence` is only used at mismatches

### ClinicalCondition
* ClinicalCondition `object`
  * conceptId `string`: The MedGen concept id associated with this gene.
  * externalIds `array`: The set of external IDs for this condition.
    * items [ExternalId](#externalid)
  * names `array`: A set of names for the condition.
    * items `string`
  * omimId `string`: The OMIM id for this condition.

### CodingSequence
* CodingSequence `object`
  * end `string`: The end of the coding sequence on this annotation's reference sequence,
  * start `string`: The start of the coding sequence on this annotation's reference sequence,

### ComputeEngine
* ComputeEngine `object`: Describes a Compute Engine resource that is being managed by a running
  * diskNames `array`: The names of the disks that were created for this pipeline.
    * items `string`
  * instanceName `string`: The instance on which the operation is running.
  * machineType `string`: The machine type of the instance.
  * zone `string`: The availability zone in which the instance resides.

### CoverageBucket
* CoverageBucket `object`: A bucket over which read coverage has been precomputed. A bucket corresponds
  * meanCoverage `number`: The average number of reads which are aligned to each individual
  * range [Range](#range)

### Dataset
* Dataset `object`: A Dataset is a collection of genomic data.
  * createTime `string`: The time this dataset was created, in seconds from the epoch.
  * id `string`: The server-generated dataset ID, unique across all datasets.
  * name `string`: The dataset name.
  * projectId `string`: The Google Cloud project ID that this dataset belongs to.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### Entry
* Entry `object`
  * annotation [Annotation](#annotation)
  * status [Status](#status)

### Exon
* Exon `object`
  * end `string`: The end position of the exon on this annotation's reference sequence,
  * frame `integer`: The frame of this exon. Contains a value of 0, 1, or 2, which indicates
  * start `string`: The start position of the exon on this annotation's reference sequence,

### Experiment
* Experiment `object`
  * instrumentModel `string`: The instrument model used as part of this experiment. This maps to
  * libraryId `string`: A client-supplied library identifier; a library is a collection of DNA
  * platformUnit `string`: The platform unit used as part of this experiment, for example
  * sequencingCenter `string`: The sequencing center used as part of this experiment.

### ExportReadGroupSetRequest
* ExportReadGroupSetRequest `object`: The read group set export request.
  * exportUri `string`: Required. A Google Cloud Storage URI for the exported BAM file.
  * projectId `string`: Required. The Google Cloud project ID that owns this
  * referenceNames `array`: The reference names to export. If this is not specified, all reference
    * items `string`

### ExportVariantSetRequest
* ExportVariantSetRequest `object`: The variant data export request.
  * bigqueryDataset `string`: Required. The BigQuery dataset to export data to. This dataset must already
  * bigqueryTable `string`: Required. The BigQuery table to export data to.
  * callSetIds `array`: If provided, only variant call information from the specified call sets
    * items `string`
  * format `string` (values: FORMAT_UNSPECIFIED, FORMAT_BIGQUERY): The format for the exported data.
  * projectId `string`: Required. The Google Cloud project ID that owns the destination

### ExternalId
* ExternalId `object`
  * id `string`: The id used by the source of this data.
  * sourceName `string`: The name of the source of this data.

### GetIamPolicyRequest
* GetIamPolicyRequest `object`: Request message for `GetIamPolicy` method.

### ImportReadGroupSetsRequest
* ImportReadGroupSetsRequest `object`: The read group set import request.
  * datasetId `string`: Required. The ID of the dataset these read group sets will belong to. The
  * partitionStrategy `string` (values: PARTITION_STRATEGY_UNSPECIFIED, PER_FILE_PER_SAMPLE, MERGE_ALL): The partition strategy describes how read groups are partitioned into read
  * referenceSetId `string`: The reference set to which the imported read group sets are aligned to, if
  * sourceUris `array`: A list of URIs pointing at [BAM
    * items `string`

### ImportReadGroupSetsResponse
* ImportReadGroupSetsResponse `object`: The read group set import response.
  * readGroupSetIds `array`: IDs of the read group sets that were created.
    * items `string`

### ImportVariantsRequest
* ImportVariantsRequest `object`: The variant data import request.
  * format `string` (values: FORMAT_UNSPECIFIED, FORMAT_VCF, FORMAT_COMPLETE_GENOMICS): The format of the variant data being imported. If unspecified, defaults to
  * infoMergeConfig `object`: A mapping between info field keys and the InfoMergeOperations to
  * normalizeReferenceNames `boolean`: Convert reference names to the canonical representation.
  * sourceUris `array`: A list of URIs referencing variant files in Google Cloud Storage. URIs can
    * items `string`
  * variantSetId `string`: Required. The variant set to which variant data should be imported.

### ImportVariantsResponse
* ImportVariantsResponse `object`: The variant data import response.
  * callSetIds `array`: IDs of the call sets created during the import.
    * items `string`

### LinearAlignment
* LinearAlignment `object`: A linear alignment can be represented by one CIGAR string. Describes the
  * cigar `array`: Represents the local alignment of this sequence (alignment matches, indels,
    * items [CigarUnit](#cigarunit)
  * mappingQuality `integer`: The mapping quality of this alignment. Represents how likely
  * position [Position](#position)

### ListBasesResponse
* ListBasesResponse `object`
  * nextPageToken `string`: The continuation token, which is used to page through large result sets.
  * offset `string`: The offset position (0-based) of the given `sequence` from the
  * sequence `string`: A substring of the bases that make up this reference.

### ListCoverageBucketsResponse
* ListCoverageBucketsResponse `object`
  * bucketWidth `string`: The length of each coverage bucket in base pairs. Note that buckets at the
  * coverageBuckets `array`: The coverage buckets. The list of buckets is sparse; a bucket with 0
    * items [CoverageBucket](#coveragebucket)
  * nextPageToken `string`: The continuation token, which is used to page through large result sets.

### ListDatasetsResponse
* ListDatasetsResponse `object`: The dataset list response.
  * datasets `array`: The list of matching Datasets.
    * items [Dataset](#dataset)
  * nextPageToken `string`: The continuation token, which is used to page through large result sets.

### ListOperationsResponse
* ListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [Operation](#operation)

### MergeVariantsRequest
* MergeVariantsRequest `object`
  * infoMergeConfig `object`: A mapping between info field keys and the InfoMergeOperations to
  * variantSetId `string`: The destination variant set.
  * variants `array`: The variants to be merged with existing variants.
    * items [Variant](#variant)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: An OperationMetadata object. This will always be returned with the Operation.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. For example&#58; `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw`
  * response `object`: If importing ReadGroupSets, an ImportReadGroupSetsResponse is returned. If importing Variants, an ImportVariantsResponse is returned. For pipelines and exports, an Empty response is returned.

### OperationEvent
* OperationEvent `object`: An event that occurred during an Operation.
  * description `string`: Required description of event.
  * endTime `string`: Optional time of when event finished. An event can have a start time and no
  * startTime `string`: Optional time of when event started.

### OperationMetadata
* OperationMetadata `object`: Metadata describing an Operation.
  * clientId `string`: This field is deprecated. Use `labels` instead. Optionally provided by the
  * createTime `string`: The time at which the job was submitted to the Genomics service.
  * endTime `string`: The time at which the job stopped running.
  * events `array`: Optional event messages that were generated during the job's execution.
    * items [OperationEvent](#operationevent)
  * labels `object`: Optionally provided by the caller when submitting the request that creates
  * projectId `string`: The Google Cloud Project in which the job is scoped.
  * request `object`: The original request that started the operation. Note that this will be in
  * runtimeMetadata `object`: Runtime metadata on this Operation.
  * startTime `string`: The time at which the job began to run.

### Policy
* Policy `object`: Defines an Identity and Access Management (IAM) policy. It is used to
  * bindings `array`: Associates a list of `members` to a `role`.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help
  * version `integer`: Version of the `Policy`. The default version is 0.

### Position
* Position `object`: An abstraction for referring to a genomic position, in relation to some
  * position `string`: The 0-based offset from the start of the forward strand for that reference.
  * referenceName `string`: The name of the reference in whatever reference set is being used.
  * reverseStrand `boolean`: Whether this position is on the reverse strand, as opposed to the forward

### Program
* Program `object`
  * commandLine `string`: The command line used to run this program.
  * id `string`: The user specified locally unique ID of the program. Used along with
  * name `string`: The display name of the program. This is typically the colloquial name of
  * prevProgramId `string`: The ID of the program run before this one.
  * version `string`: The version of the program run.

### Range
* Range `object`: A 0-based half-open genomic coordinate range for search requests.
  * end `string`: The end position of the range on the reference, 0-based exclusive.
  * referenceName `string`: The reference sequence name, for example `chr1`,
  * start `string`: The start position of the range on the reference, 0-based inclusive.

### Read
* Read `object`: A read alignment describes a linear alignment of a string of DNA to a
  * alignedQuality `array`: The quality of the read sequence contained in this alignment record
    * items `integer`
  * alignedSequence `string`: The bases of the read sequence contained in this alignment record,
  * alignment [LinearAlignment](#linearalignment)
  * duplicateFragment `boolean`: The fragment is a PCR or optical duplicate (SAM flag 0x400).
  * failedVendorQualityChecks `boolean`: Whether this read did not pass filters, such as platform or vendor quality
  * fragmentLength `integer`: The observed length of the fragment, equivalent to TLEN in SAM.
  * fragmentName `string`: The fragment name. Equivalent to QNAME (query template name) in SAM.
  * id `string`: The server-generated read ID, unique across all reads. This is different
  * info `object`: A map of additional read alignment information. This must be of the form
  * nextMatePosition [Position](#position)
  * numberReads `integer`: The number of reads in the fragment (extension to SAM flag 0x1).
  * properPlacement `boolean`: The orientation and the distance between reads from the fragment are
  * readGroupId `string`: The ID of the read group this read belongs to. A read belongs to exactly
  * readGroupSetId `string`: The ID of the read group set this read belongs to. A read belongs to
  * readNumber `integer`: The read number in sequencing. 0-based and less than numberReads. This
  * secondaryAlignment `boolean`: Whether this alignment is secondary. Equivalent to SAM flag 0x100.
  * supplementaryAlignment `boolean`: Whether this alignment is supplementary. Equivalent to SAM flag 0x800.

### ReadGroup
* ReadGroup `object`: A read group is all the data that's processed the same way by the sequencer.
  * datasetId `string`: The dataset to which this read group belongs.
  * description `string`: A free-form text description of this read group.
  * experiment [Experiment](#experiment)
  * id `string`: The server-generated read group ID, unique for all read groups.
  * info `object`: A map of additional read group information. This must be of the form
  * name `string`: The read group name. This corresponds to the @RG ID field in the SAM spec.
  * predictedInsertSize `integer`: The predicted insert size of this read group. The insert size is the length
  * programs `array`: The programs used to generate this read group. Programs are always
    * items [Program](#program)
  * referenceSetId `string`: The reference set the reads in this read group are aligned to.
  * sampleId `string`: A client-supplied sample identifier for the reads in this read group.

### ReadGroupSet
* ReadGroupSet `object`: A read group set is a logical collection of read groups, which are
  * datasetId `string`: The dataset to which this read group set belongs.
  * filename `string`: The filename of the original source file for this read group set, if any.
  * id `string`: The server-generated read group set ID, unique for all read group sets.
  * info `object`: A map of additional read group set information.
  * name `string`: The read group set name. By default this will be initialized to the sample
  * readGroups `array`: The read groups in this set. There are typically 1-10 read groups in a read
    * items [ReadGroup](#readgroup)
  * referenceSetId `string`: The reference set to which the reads in this read group set are aligned.

### Reference
* Reference `object`: A reference is a canonical assembled DNA sequence, intended to act as a
  * id `string`: The server-generated reference ID, unique across all references.
  * length `string`: The length of this reference's sequence.
  * md5checksum `string`: MD5 of the upper-case sequence excluding all whitespace characters (this
  * name `string`: The name of this reference, for example `22`.
  * ncbiTaxonId `integer`: ID from http://www.ncbi.nlm.nih.gov/taxonomy. For example, 9606 for human.
  * sourceAccessions `array`: All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally
    * items `string`
  * sourceUri `string`: The URI from which the sequence was obtained. Typically specifies a FASTA

### ReferenceBound
* ReferenceBound `object`: ReferenceBound records an upper bound for the starting coordinate of
  * referenceName `string`: The name of the reference associated with this reference bound.
  * upperBound `string`: An upper bound (inclusive) on the starting coordinate of any

### ReferenceSet
* ReferenceSet `object`: A reference set is a set of references which typically comprise a reference
  * assemblyId `string`: Public id of this reference set, such as `GRCh37`.
  * description `string`: Free text description of this reference set.
  * id `string`: The server-generated reference set ID, unique across all reference sets.
  * md5checksum `string`: Order-independent MD5 checksum which identifies this reference set. The
  * ncbiTaxonId `integer`: ID from http://www.ncbi.nlm.nih.gov/taxonomy (for example, 9606 for human)
  * referenceIds `array`: The IDs of the reference objects that are part of this set.
    * items `string`
  * sourceAccessions `array`: All known corresponding accession IDs in INSDC (GenBank/ENA/DDBJ) ideally
    * items `string`
  * sourceUri `string`: The URI from which the references were obtained.

### RuntimeMetadata
* RuntimeMetadata `object`: Runtime metadata that will be populated in the
  * computeEngine [ComputeEngine](#computeengine)

### SearchAnnotationSetsRequest
* SearchAnnotationSetsRequest `object`
  * datasetIds `array`: Required. The dataset IDs to search within. Caller must have `READ` access
    * items `string`
  * name `string`: Only return annotations sets for which a substring of the name matches this
  * pageSize `integer`: The maximum number of results to return in a single page. If unspecified,
  * pageToken `string`: The continuation token, which is used to page through large result sets.
  * referenceSetId `string`: If specified, only annotation sets associated with the given reference set
  * types `array`: If specified, only annotation sets that have any of these types are
    * items `string` (values: ANNOTATION_TYPE_UNSPECIFIED, GENERIC, VARIANT, GENE, TRANSCRIPT)

### SearchAnnotationSetsResponse
* SearchAnnotationSetsResponse `object`
  * annotationSets `array`: The matching annotation sets.
    * items [AnnotationSet](#annotationset)
  * nextPageToken `string`: The continuation token, which is used to page through large result sets.

### SearchAnnotationsRequest
* SearchAnnotationsRequest `object`
  * annotationSetIds `array`: Required. The annotation sets to search within. The caller must have
    * items `string`
  * end `string`: The end position of the range on the reference, 0-based exclusive. If
  * pageSize `integer`: The maximum number of results to return in a single page. If unspecified,
  * pageToken `string`: The continuation token, which is used to page through large result sets.
  * referenceId `string`: The ID of the reference to query.
  * referenceName `string`: The name of the reference to query, within the reference set associated
  * start `string`: The start position of the range on the reference, 0-based inclusive. If

### SearchAnnotationsResponse
* SearchAnnotationsResponse `object`
  * annotations `array`: The matching annotations.
    * items [Annotation](#annotation)
  * nextPageToken `string`: The continuation token, which is used to page through large result sets.

### SearchCallSetsRequest
* SearchCallSetsRequest `object`: The call set search request.
  * name `string`: Only return call sets for which a substring of the name matches this
  * pageSize `integer`: The maximum number of results to return in a single page. If unspecified,
  * pageToken `string`: The continuation token, which is used to page through large result sets.
  * variantSetIds `array`: Restrict the query to call sets within the given variant sets. At least one
    * items `string`

### SearchCallSetsResponse
* SearchCallSetsResponse `object`: The call set search response.
  * callSets `array`: The list of matching call sets.
    * items [CallSet](#callset)
  * nextPageToken `string`: The continuation token, which is used to page through large result sets.

### SearchReadGroupSetsRequest
* SearchReadGroupSetsRequest `object`: The read group set search request.
  * datasetIds `array`: Restricts this query to read group sets within the given datasets. At least
    * items `string`
  * name `string`: Only return read group sets for which a substring of the name matches this
  * pageSize `integer`: The maximum number of results to return in a single page. If unspecified,
  * pageToken `string`: The continuation token, which is used to page through large result sets.

### SearchReadGroupSetsResponse
* SearchReadGroupSetsResponse `object`: The read group set search response.
  * nextPageToken `string`: The continuation token, which is used to page through large result sets.
  * readGroupSets `array`: The list of matching read group sets.
    * items [ReadGroupSet](#readgroupset)

### SearchReadsRequest
* SearchReadsRequest `object`: The read search request.
  * end `string`: The end position of the range on the reference, 0-based exclusive. If
  * pageSize `integer`: The maximum number of results to return in a single page. If unspecified,
  * pageToken `string`: The continuation token, which is used to page through large result sets.
  * readGroupIds `array`: The IDs of the read groups within which to search for reads. All specified
    * items `string`
  * readGroupSetIds `array`: The IDs of the read groups sets within which to search for reads. All
    * items `string`
  * referenceName `string`: The reference sequence name, for example `chr1`, `1`, or `chrX`. If set to
  * start `string`: The start position of the range on the reference, 0-based inclusive. If

### SearchReadsResponse
* SearchReadsResponse `object`: The read search response.
  * alignments `array`: The list of matching alignments sorted by mapped genomic coordinate,
    * items [Read](#read)
  * nextPageToken `string`: The continuation token, which is used to page through large result sets.

### SearchReferenceSetsRequest
* SearchReferenceSetsRequest `object`
  * accessions `array`: If present, return reference sets for which a prefix of any of
    * items `string`
  * assemblyId `string`: If present, return reference sets for which a substring of their
  * md5checksums `array`: If present, return reference sets for which the
    * items `string`
  * pageSize `integer`: The maximum number of results to return in a single page. If unspecified,
  * pageToken `string`: The continuation token, which is used to page through large result sets.

### SearchReferenceSetsResponse
* SearchReferenceSetsResponse `object`
  * nextPageToken `string`: The continuation token, which is used to page through large result sets.
  * referenceSets `array`: The matching references sets.
    * items [ReferenceSet](#referenceset)

### SearchReferencesRequest
* SearchReferencesRequest `object`
  * accessions `array`: If present, return references for which a prefix of any of
    * items `string`
  * md5checksums `array`: If present, return references for which the
    * items `string`
  * pageSize `integer`: The maximum number of results to return in a single page. If unspecified,
  * pageToken `string`: The continuation token, which is used to page through large result sets.
  * referenceSetId `string`: If present, return only references which belong to this reference set.

### SearchReferencesResponse
* SearchReferencesResponse `object`
  * nextPageToken `string`: The continuation token, which is used to page through large result sets.
  * references `array`: The matching references.
    * items [Reference](#reference)

### SearchVariantSetsRequest
* SearchVariantSetsRequest `object`: The search variant sets request.
  * datasetIds `array`: Exactly one dataset ID must be provided here. Only variant sets which
    * items `string`
  * pageSize `integer`: The maximum number of results to return in a single page. If unspecified,
  * pageToken `string`: The continuation token, which is used to page through large result sets.

### SearchVariantSetsResponse
* SearchVariantSetsResponse `object`: The search variant sets response.
  * nextPageToken `string`: The continuation token, which is used to page through large result sets.
  * variantSets `array`: The variant sets belonging to the requested dataset.
    * items [VariantSet](#variantset)

### SearchVariantsRequest
* SearchVariantsRequest `object`: The variant search request.
  * callSetIds `array`: Only return variant calls which belong to call sets with these ids.
    * items `string`
  * end `string`: The end of the window, 0-based exclusive. If unspecified or 0, defaults to
  * maxCalls `integer`: The maximum number of calls to return in a single page. Note that this
  * pageSize `integer`: The maximum number of variants to return in a single page. If unspecified,
  * pageToken `string`: The continuation token, which is used to page through large result sets.
  * referenceName `string`: Required. Only return variants in this reference sequence.
  * start `string`: The beginning of the window (0-based, inclusive) for which
  * variantName `string`: Only return variants which have exactly this name.
  * variantSetIds `array`: At most one variant set ID must be provided. Only variants from this
    * items `string`

### SearchVariantsResponse
* SearchVariantsResponse `object`: The variant search response.
  * nextPageToken `string`: The continuation token, which is used to page through large result sets.
  * variants `array`: The list of matching Variants.
    * items [Variant](#variant)

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: REQUIRED: The set of permissions to check for the 'resource'.
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is
    * items `string`

### Transcript
* Transcript `object`: A transcript represents the assertion that a particular region of the
  * codingSequence [CodingSequence](#codingsequence)
  * exons `array`: The <a href="http://en.wikipedia.org/wiki/Exon">exons</a> that compose
    * items [Exon](#exon)
  * geneId `string`: The annotation ID of the gene from which this transcript is transcribed.

### UndeleteDatasetRequest
* UndeleteDatasetRequest `object`

### Variant
* Variant `object`: A variant represents a change in DNA sequence relative to a reference
  * alternateBases `array`: The bases that appear instead of the reference bases.
    * items `string`
  * calls `array`: The variant calls for this particular variant. Each one represents the
    * items [VariantCall](#variantcall)
  * created `string`: The date this variant was created, in milliseconds from the epoch.
  * end `string`: The end position (0-based) of this variant. This corresponds to the first
  * filter `array`: A list of filters (normally quality filters) this variant has failed.
    * items `string`
  * id `string`: The server-generated variant ID, unique across all variants.
  * info `object`: A map of additional variant information. This must be of the form
  * names `array`: Names for the variant, for example a RefSNP ID.
    * items `string`
  * quality `number`: A measure of how likely this variant is to be real.
  * referenceBases `string`: The reference bases for this variant. They start at the given
  * referenceName `string`: The reference on which this variant occurs.
  * start `string`: The position at which this variant occurs (0-based).
  * variantSetId `string`: The ID of the variant set this variant belongs to.

### VariantAnnotation
* VariantAnnotation `object`
  * alternateBases `string`: The alternate allele for this variant. If multiple alternate alleles
  * clinicalSignificance `string` (values: CLINICAL_SIGNIFICANCE_UNSPECIFIED, CLINICAL_SIGNIFICANCE_OTHER, UNCERTAIN, BENIGN, LIKELY_BENIGN, LIKELY_PATHOGENIC, PATHOGENIC, DRUG_RESPONSE, HISTOCOMPATIBILITY, CONFERS_SENSITIVITY, RISK_FACTOR, ASSOCIATION, PROTECTIVE, MULTIPLE_REPORTED): Describes the clinical significance of a variant.
  * conditions `array`: The set of conditions associated with this variant.
    * items [ClinicalCondition](#clinicalcondition)
  * effect `string` (values: EFFECT_UNSPECIFIED, EFFECT_OTHER, FRAMESHIFT, FRAME_PRESERVING_INDEL, SYNONYMOUS_SNP, NONSYNONYMOUS_SNP, STOP_GAIN, STOP_LOSS, SPLICE_SITE_DISRUPTION): Effect of the variant on the coding sequence.
  * geneId `string`: Google annotation ID of the gene affected by this variant. This should
  * transcriptIds `array`: Google annotation IDs of the transcripts affected by this variant. These
    * items `string`
  * type `string` (values: TYPE_UNSPECIFIED, TYPE_OTHER, INSERTION, DELETION, SUBSTITUTION, SNP, STRUCTURAL, CNV): Type has been adapted from ClinVar's list of variant types.

### VariantCall
* VariantCall `object`: A call represents the determination of genotype with respect to a particular
  * callSetId `string`: The ID of the call set this variant call belongs to.
  * callSetName `string`: The name of the call set this variant call belongs to.
  * genotype `array`: The genotype of this variant call. Each value represents either the value
    * items `integer`
  * genotypeLikelihood `array`: The genotype likelihoods for this variant call. Each array entry
    * items `number`
  * info `object`: A map of additional variant call information. This must be of the form
  * phaseset `string`: If this field is present, this variant call's genotype ordering implies

### VariantSet
* VariantSet `object`: A variant set is a collection of call sets and variants. It contains summary
  * datasetId `string`: The dataset to which this variant set belongs.
  * description `string`: A textual description of this variant set.
  * id `string`: The server-generated variant set ID, unique across all variant sets.
  * metadata `array`: The metadata associated with this variant set.
    * items [VariantSetMetadata](#variantsetmetadata)
  * name `string`: User-specified, mutable name.
  * referenceBounds `array`: A list of all references used by the variants in a variant set
    * items [ReferenceBound](#referencebound)
  * referenceSetId `string`: The reference set to which the variant set is mapped. The reference set

### VariantSetMetadata
* VariantSetMetadata `object`: Metadata describes a single piece of variant call metadata.
  * description `string`: A textual description of this metadata.
  * id `string`: User-provided ID field, not enforced by this API.
  * info `object`: Remaining structured metadata key-value pairs. This must be of the form
  * key `string`: The top-level key.
  * number `string`: The number of values that can be included in a field described by this
  * type `string` (values: TYPE_UNSPECIFIED, INTEGER, FLOAT, FLAG, CHARACTER, STRING): The type of data. Possible types include: Integer, Float,
  * value `string`: The value field for simple metadata


