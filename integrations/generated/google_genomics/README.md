# @datafire/google_genomics

Client library for Genomics

## Installation and Usage
```bash
npm install --save datafire @datafire/google_genomics
```

```js
let datafire = require('datafire');
let google_genomics = require('@datafire/google_genomics').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_genomics.variantsets.search({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_genomics.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

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

#### Parameters
* body (object) - An annotation describes a region of reference genome. The value of an
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object)
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### annotations.delete
Deletes an annotation. Caller must have WRITE permission for
the associated annotation set.


```js
google_genomics.annotations.delete({
  "annotationId": ""
}, context)
```

#### Parameters
* annotationId (string) **required** - The ID of the annotation to be deleted.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### annotations.get
Gets an annotation. Caller must have READ permission
for the associated annotation set.


```js
google_genomics.annotations.get({
  "annotationId": ""
}, context)
```

#### Parameters
* annotationId (string) **required** - The ID of the annotation to be retrieved.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### annotations.update
Updates an annotation. Caller must have
WRITE permission for the associated dataset.


```js
google_genomics.annotations.update({
  "annotationId": ""
}, context)
```

#### Parameters
* annotationId (string) **required** - The ID of the annotation to be updated.
* updateMask (string) - An optional mask specifying which fields to update. Mutable fields are
* body (object) - An annotation describes a region of reference genome. The value of an
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object)
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object) - An annotation set is a logical grouping of annotations that share consistent
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### annotationsets.search
Searches for annotation sets that match the given criteria. Annotation sets
are returned in an unspecified order. This order is consistent, such that
two queries for the same content (regardless of page size) yield annotation
sets in the same order across their respective streams of paginated
responses. Caller must have READ permission for the queried datasets.


```js
google_genomics.annotationsets.search({}, context)
```

#### Parameters
* body (object)
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### annotationsets.delete
Deletes an annotation set. Caller must have WRITE permission
for the associated annotation set.


```js
google_genomics.annotationsets.delete({
  "annotationSetId": ""
}, context)
```

#### Parameters
* annotationSetId (string) **required** - The ID of the annotation set to be deleted.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### annotationsets.get
Gets an annotation set. Caller must have READ permission for
the associated dataset.


```js
google_genomics.annotationsets.get({
  "annotationSetId": ""
}, context)
```

#### Parameters
* annotationSetId (string) **required** - The ID of the annotation set to be retrieved.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### annotationsets.update
Updates an annotation set. The update must respect all mutability
restrictions and other invariants described on the annotation set resource.
Caller must have WRITE permission for the associated dataset.


```js
google_genomics.annotationsets.update({
  "annotationSetId": ""
}, context)
```

#### Parameters
* annotationSetId (string) **required** - The ID of the annotation set to be updated.
* updateMask (string) - An optional mask specifying which fields to update. Mutable fields are
* body (object) - An annotation set is a logical grouping of annotations that share consistent
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### callsets.create
Creates a new call set.

For the definitions of call sets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.callsets.create({}, context)
```

#### Parameters
* body (object) - A call set is a collection of variant calls, typically for one sample. It
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object) - The call set search request.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* callSetId (string) **required** - The ID of the call set to be deleted.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* callSetId (string) **required** - The ID of the call set.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* callSetId (string) **required** - The ID of the call set to be updated.
* updateMask (string) - An optional mask specifying which fields to update. At this time, the only
* body (object) - A call set is a collection of variant calls, typically for one sample. It
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### datasets.list
Lists datasets within a project.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.datasets.list({}, context)
```

#### Parameters
* pageToken (string) - The continuation token, which is used to page through large result sets.
* pageSize (integer) - The maximum number of results to return in a single page. If unspecified,
* projectId (string) - Required. The Google Cloud project ID to list datasets for.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### datasets.create
Creates a new dataset.

For the definitions of datasets and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.datasets.create({}, context)
```

#### Parameters
* body (object) - A Dataset is a collection of genomic data.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* datasetId (string) **required** - The ID of the dataset to be deleted.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* datasetId (string) **required** - The ID of the dataset.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* datasetId (string) **required** - The ID of the dataset to be updated.
* updateMask (string) - An optional mask specifying which fields to update. At this time, the only
* body (object) - A Dataset is a collection of genomic data.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* datasetId (string) **required** - The ID of the dataset to be undeleted.
* body (object)
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object) - The read group set search request.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* readGroupSetId (string) **required** - The ID of the read group set to be deleted. The caller must have WRITE
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* readGroupSetId (string) **required** - The ID of the read group set.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* readGroupSetId (string) **required** - The ID of the read group set to be updated. The caller must have WRITE
* updateMask (string) - An optional mask specifying which fields to update. Supported fields:
* body (object) - A read group set is a logical collection of read groups, which are
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* readGroupSetId (string) **required** - Required. The ID of the read group set over which coverage is requested.
* end (string) - The end position of the range on the reference, 0-based exclusive. If
* pageToken (string) - The continuation token, which is used to page through large result sets.
* pageSize (integer) - The maximum number of results to return in a single page. If unspecified,
* start (string) - The start position of the range on the reference, 0-based inclusive. If
* targetBucketWidth (string) - The desired width of each reported coverage bucket in base pairs. This
* referenceName (string) - The name of the reference to query, within the reference set associated
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* readGroupSetId (string) **required** - Required. The ID of the read group set to export. The caller must have
* body (object) - The read group set export request.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object) - The read group set import request.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object) - The read search request.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object)
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* referenceId (string) **required** - The ID of the reference.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* referenceId (string) **required** - The ID of the reference.
* end (string) - The end position (0-based, exclusive) of this query. Defaults to the length
* pageToken (string) - The continuation token, which is used to page through large result sets.
* pageSize (integer) - The maximum number of bases to return in a single page. If unspecified,
* start (string) - The start position (0-based) of this query. Defaults to 0.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object)
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* referenceSetId (string) **required** - The ID of the reference set.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### variants.create
Creates a new variant.

For the definitions of variants and other genomics resources, see
[Fundamentals of Google
Genomics](https://cloud.google.com/genomics/fundamentals-of-google-genomics)


```js
google_genomics.variants.create({}, context)
```

#### Parameters
* body (object) - A variant represents a change in DNA sequence relative to a reference
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object) - The variant search request.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* variantId (string) **required** - The ID of the variant to be deleted.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* variantId (string) **required** - The ID of the variant.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* variantId (string) **required** - The ID of the variant to be updated.
* updateMask (string) - An optional mask specifying which fields to update. At this time, mutable
* body (object) - A variant represents a change in DNA sequence relative to a reference
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object) - The variant data import request.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object)
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object) - A variant set is a collection of call sets and variants. It contains summary
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* body (object) - The search variant sets request.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* variantSetId (string) **required** - The ID of the variant set to be deleted.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* variantSetId (string) **required** - Required. The ID of the variant set.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* variantSetId (string) **required** - The ID of the variant to be updated (must already exist).
* updateMask (string) - An optional mask specifying which fields to update. Supported fields:
* body (object) - A variant set is a collection of call sets and variants. It contains summary
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* variantSetId (string) **required** - Required. The ID of the variant set that contains variant data which
* body (object) - The variant data export request.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_genomics.operations.get({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the operation resource.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

### operations.cancel
Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation.


```js
google_genomics.operations.cancel({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required** - The name of the operation resource to be cancelled.
* body (object) - The request message for Operations.CancelOperation.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which policy is being specified. Format is
* body (object) - Request message for `GetIamPolicy` method.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which policy is being specified. Format is
* body (object) - Request message for `SetIamPolicy` method.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

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

#### Parameters
* resource (string) **required** - REQUIRED: The resource for which policy is being specified. Format is
* body (object) - Request message for `TestIamPermissions` method.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* fields (string) - Selector specifying which fields to include in a partial response.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").

