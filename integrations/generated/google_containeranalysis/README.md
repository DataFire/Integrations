# @datafire/google_containeranalysis

Client library for Container Analysis API

## Installation and Usage
```bash
npm install --save @datafire/google_containeranalysis
```
```js
let google_containeranalysis = require('@datafire/google_containeranalysis').create({
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

An implementation of the Grafeas API, which stores, and enables querying and retrieval of critical metadata about all of your software artifacts.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_containeranalysis.oauthCallback({
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
google_containeranalysis.oauthRefresh(null, context)
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

### containeranalysis.projects.occurrences.delete
Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.


```js
google_containeranalysis.containeranalysis.projects.occurrences.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
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

### containeranalysis.projects.scanConfigs.get
Gets the specified scan configuration.


```js
google_containeranalysis.containeranalysis.projects.scanConfigs.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the scan configuration in the form of `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
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
* output [ScanConfig](#scanconfig)

### containeranalysis.projects.occurrences.patch
Updates the specified occurrence.


```js
google_containeranalysis.containeranalysis.projects.occurrences.patch({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
  * updateMask `string`: The fields to update.
  * body [Occurrence](#occurrence)
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
* output [Occurrence](#occurrence)

### containeranalysis.projects.scanConfigs.update
Updates the specified scan configuration.


```js
google_containeranalysis.containeranalysis.projects.scanConfigs.update({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the scan configuration in the form of `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
  * body [ScanConfig](#scanconfig)
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
* output [ScanConfig](#scanconfig)

### containeranalysis.projects.occurrences.getNotes
Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.


```js
google_containeranalysis.containeranalysis.projects.occurrences.getNotes({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
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
* output [Note](#note)

### containeranalysis.projects.notes.occurrences.list
Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.


```js
google_containeranalysis.containeranalysis.projects.notes.occurrences.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
  * filter `string`: The filter expression.
  * pageSize `integer`: Number of occurrences to return in the list.
  * pageToken `string`: Token to provide to skip to a particular spot in the list.
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
* output [ListNoteOccurrencesResponse](#listnoteoccurrencesresponse)

### containeranalysis.projects.notes.list
Lists notes for the specified project.


```js
google_containeranalysis.containeranalysis.projects.notes.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`.
  * filter `string`: The filter expression.
  * pageSize `integer`: Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
  * pageToken `string`: Token to provide to skip to a particular spot in the list.
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
* output [ListNotesResponse](#listnotesresponse)

### containeranalysis.projects.notes.create
Creates a new note.


```js
google_containeranalysis.containeranalysis.projects.notes.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created.
  * noteId `string`: Required. The ID to use for this note.
  * body [Note](#note)
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
* output [Note](#note)

### containeranalysis.projects.notes.batchCreate
Creates new notes in batch.


```js
google_containeranalysis.containeranalysis.projects.notes.batchCreate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created.
  * body [BatchCreateNotesRequest](#batchcreatenotesrequest)
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
* output [BatchCreateNotesResponse](#batchcreatenotesresponse)

### containeranalysis.projects.occurrences.list
Lists occurrences for the specified project.


```js
google_containeranalysis.containeranalysis.projects.occurrences.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`.
  * filter `string`: The filter expression.
  * pageSize `integer`: Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20.
  * pageToken `string`: Token to provide to skip to a particular spot in the list.
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
* output [ListOccurrencesResponse](#listoccurrencesresponse)

### containeranalysis.projects.occurrences.create
Creates a new occurrence.


```js
google_containeranalysis.containeranalysis.projects.occurrences.create({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created.
  * body [Occurrence](#occurrence)
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
* output [Occurrence](#occurrence)

### containeranalysis.projects.occurrences.batchCreate
Creates new occurrences in batch.


```js
google_containeranalysis.containeranalysis.projects.occurrences.batchCreate({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created.
  * body [BatchCreateOccurrencesRequest](#batchcreateoccurrencesrequest)
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
* output [BatchCreateOccurrencesResponse](#batchcreateoccurrencesresponse)

### containeranalysis.projects.occurrences.getVulnerabilitySummary
Gets a summary of the number and severity of occurrences.


```js
google_containeranalysis.containeranalysis.projects.occurrences.getVulnerabilitySummary({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`.
  * filter `string`: The filter expression.
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
* output [VulnerabilityOccurrencesSummary](#vulnerabilityoccurrencessummary)

### containeranalysis.projects.scanConfigs.list
Lists scan configurations for the specified project.


```js
google_containeranalysis.containeranalysis.projects.scanConfigs.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * parent **required** `string`: Required. The name of the project to list scan configurations for in the form of `projects/[PROJECT_ID]`.
  * filter `string`: Required. The filter expression.
  * pageSize `integer`: The number of scan configs to return in the list.
  * pageToken `string`: Token to provide to skip to a particular spot in the list.
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
* output [ListScanConfigsResponse](#listscanconfigsresponse)

### containeranalysis.projects.occurrences.getIamPolicy
Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.


```js
google_containeranalysis.containeranalysis.projects.occurrences.getIamPolicy({
  "resource": ""
}, context)
```

#### Input
* input `object`
  * resource **required** `string`: REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
  * body [GetIamPolicyRequest](#getiampolicyrequest)
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

### containeranalysis.projects.occurrences.setIamPolicy
Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.


```js
google_containeranalysis.containeranalysis.projects.occurrences.setIamPolicy({
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

### containeranalysis.projects.occurrences.testIamPermissions
Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.


```js
google_containeranalysis.containeranalysis.projects.occurrences.testIamPermissions({
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



## Definitions

### AliasContext
* AliasContext `object`: An alias to a repo revision.
  * kind `string` (values: KIND_UNSPECIFIED, FIXED, MOVABLE, OTHER): The alias kind.
  * name `string`: The alias name.

### Artifact
* Artifact `object`: Artifact describes a build product.
  * checksum `string`: Hash or checksum value of a binary, or Docker Registry 2.0 digest of a container.
  * id `string`: Artifact ID, if any; for container images, this will be a URL by digest like `gcr.io/projectID/imagename@sha256:123456`.
  * names `array`: Related artifact names. This may be the path to a binary or jar file, or in the case of a container build, the name used to push the container image to Google Container Registry, as presented to `docker push`. Note that a single Artifact ID can have multiple names, for example if two tags are applied to one image.
    * items `string`

### ArtifactHashes
* ArtifactHashes `object`: Defines a hash object for use in Materials and Products.
  * sha256 `string`

### ArtifactRule
* ArtifactRule `object`: Defines an object to declare an in-toto artifact rule
  * artifactRule `array`
    * items `string`

### Attestation
* Attestation `object`: Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for look-up (how to find this attestation if you already know the authority and artifact to be verified) and intent (which authority was this attestation intended to sign for).
  * genericSignedAttestation [GenericSignedAttestation](#genericsignedattestation)
  * pgpSignedAttestation [PgpSignedAttestation](#pgpsignedattestation)

### Authority
* Authority `object`: Note kind that represents a logical attestation "role" or "authority". For example, an organization might have one `Authority` for "QA" and one for "build". This note is intended to act strictly as a grouping mechanism for the attached occurrences (Attestations). This grouping mechanism also provides a security boundary, since IAM ACLs gate the ability for a principle to attach an occurrence to a given note. It also provides a single point of lookup to find all attached attestation occurrences, even if they don't all live in the same project.
  * hint [Hint](#hint)

### Basis
* Basis `object`: Basis describes the base image portion (Note) of the DockerImage relationship. Linked occurrences are derived from this or an equivalent image via: FROM Or an equivalent reference, e.g. a tag of the resource_url.
  * fingerprint [Fingerprint](#fingerprint)
  * resourceUrl `string`: Required. Immutable. The resource_url for the resource representing the basis of associated occurrence images.

### BatchCreateNotesRequest
* BatchCreateNotesRequest `object`: Request to create notes in batch.
  * notes `object`: Required. The notes to create, the key is expected to be the note ID. Max allowed length is 1000.

### BatchCreateNotesResponse
* BatchCreateNotesResponse `object`: Response for creating notes in batch.
  * notes `array`: The notes that were created.
    * items [Note](#note)

### BatchCreateOccurrencesRequest
* BatchCreateOccurrencesRequest `object`: Request to create occurrences in batch.
  * occurrences `array`: Required. The occurrences to create. Max allowed length is 1000.
    * items [Occurrence](#occurrence)

### BatchCreateOccurrencesResponse
* BatchCreateOccurrencesResponse `object`: Response for creating occurrences in batch.
  * occurrences `array`: The occurrences that were created.
    * items [Occurrence](#occurrence)

### Binding
* Binding `object`: Associates `members` with a `role`.
  * condition [Expr](#expr)
  * members `array`: Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. 
    * items `string`
  * role `string`: Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.

### Build
* Build `object`: Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.
  * builderVersion `string`: Required. Immutable. Version of the builder which produced this build.
  * signature [BuildSignature](#buildsignature)

### BuildProvenance
* BuildProvenance `object`: Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
  * buildOptions `object`: Special options applied to this build. This is a catch-all field where build providers can enter any desired additional details.
  * builderVersion `string`: Version string of the builder at the time this build was executed.
  * builtArtifacts `array`: Output of the build.
    * items [Artifact](#artifact)
  * commands `array`: Commands requested by the build.
    * items [Command](#command)
  * createTime `string`: Time at which the build was created.
  * creator `string`: E-mail address of the user who initiated this build. Note that this was the user's e-mail address at the time the build was initiated; this address may not represent the same end-user for all time.
  * endTime `string`: Time at which execution of the build was finished.
  * id `string`: Required. Unique identifier of the build.
  * logsUri `string`: URI where any logs for this provenance were written.
  * projectId `string`: ID of the project.
  * sourceProvenance [Source](#source)
  * startTime `string`: Time at which execution of the build was started.
  * triggerId `string`: Trigger identifier if the build was triggered automatically; empty if not.

### BuildSignature
* BuildSignature `object`: Message encapsulating the signature of the verified build.
  * keyId `string`: An ID for the key used to sign. This could be either an ID for the key stored in `public_key` (such as the ID or fingerprint for a PGP key, or the CN for a cert), or a reference to an external key (such as a reference to a key in Cloud Key Management Service).
  * keyType `string` (values: KEY_TYPE_UNSPECIFIED, PGP_ASCII_ARMORED, PKIX_PEM): The type of the key, either stored in `public_key` or referenced in `key_id`.
  * publicKey `string`: Public key of the builder which can be used to verify that the related findings are valid and unchanged. If `key_type` is empty, this defaults to PEM encoded public keys. This field may be empty if `key_id` references an external key. For Cloud Build based signatures, this is a PEM encoded public key. To verify the Cloud Build signature, place the contents of this field into a file (public.pem). The signature field is base64-decoded into its binary representation in signature.bin, and the provenance bytes from `BuildDetails` are base64-decoded into a binary representation in signed.bin. OpenSSL can then verify the signature: `openssl sha256 -verify public.pem -signature signature.bin signed.bin`
  * signature `string`: Required. Signature of the related `BuildProvenance`. In JSON, this is base-64 encoded.

### ByProducts
* ByProducts `object`: Defines an object for the byproducts field in in-toto links. The suggested fields are "stderr", "stdout", and "return-value".
  * customValues `object`

### CVSSv3
* CVSSv3 `object`: Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document
  * attackComplexity `string` (values: ATTACK_COMPLEXITY_UNSPECIFIED, ATTACK_COMPLEXITY_LOW, ATTACK_COMPLEXITY_HIGH)
  * attackVector `string` (values: ATTACK_VECTOR_UNSPECIFIED, ATTACK_VECTOR_NETWORK, ATTACK_VECTOR_ADJACENT, ATTACK_VECTOR_LOCAL, ATTACK_VECTOR_PHYSICAL): Base Metrics Represents the intrinsic characteristics of a vulnerability that are constant over time and across user environments.
  * availabilityImpact `string` (values: IMPACT_UNSPECIFIED, IMPACT_HIGH, IMPACT_LOW, IMPACT_NONE)
  * baseScore `number`: The base score is a function of the base metric scores.
  * confidentialityImpact `string` (values: IMPACT_UNSPECIFIED, IMPACT_HIGH, IMPACT_LOW, IMPACT_NONE)
  * exploitabilityScore `number`
  * impactScore `number`
  * integrityImpact `string` (values: IMPACT_UNSPECIFIED, IMPACT_HIGH, IMPACT_LOW, IMPACT_NONE)
  * privilegesRequired `string` (values: PRIVILEGES_REQUIRED_UNSPECIFIED, PRIVILEGES_REQUIRED_NONE, PRIVILEGES_REQUIRED_LOW, PRIVILEGES_REQUIRED_HIGH)
  * scope `string` (values: SCOPE_UNSPECIFIED, SCOPE_UNCHANGED, SCOPE_CHANGED)
  * userInteraction `string` (values: USER_INTERACTION_UNSPECIFIED, USER_INTERACTION_NONE, USER_INTERACTION_REQUIRED)

### CloudRepoSourceContext
* CloudRepoSourceContext `object`: A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
  * aliasContext [AliasContext](#aliascontext)
  * repoId [RepoId](#repoid)
  * revisionId `string`: A revision ID.

### Command
* Command `object`: Command describes a step performed as part of the build pipeline.
  * args `array`: Command-line arguments used when executing this command.
    * items `string`
  * dir `string`: Working directory (relative to project source root) used when running this command.
  * env `array`: Environment variables set before running this command.
    * items `string`
  * id `string`: Optional unique identifier for this command, used in wait_for to reference this command as a dependency.
  * name `string`: Required. Name of the command, as presented on the command line, or if the command is packaged as a Docker container, as presented to `docker pull`.
  * waitFor `array`: The ID(s) of the command(s) that this command depends on.
    * items `string`

### Deployable
* Deployable `object`: An artifact that can be deployed in some runtime.
  * resourceUri `array`: Required. Resource URI for the artifact being deployed.
    * items `string`

### Deployment
* Deployment `object`: The period during which some deployable was active in a runtime.
  * address `string`: Address of the runtime element hosting this deployment.
  * config `string`: Configuration used to create this deployment.
  * deployTime `string`: Required. Beginning of the lifetime of this deployment.
  * platform `string` (values: PLATFORM_UNSPECIFIED, GKE, FLEX, CUSTOM): Platform hosting this deployment.
  * resourceUri `array`: Output only. Resource URI for the artifact being deployed taken from the deployable field with the same name.
    * items `string`
  * undeployTime `string`: End of the lifetime of this deployment.
  * userEmail `string`: Identity of the user that triggered this deployment.

### Derived
* Derived `object`: Derived describes the derived image portion (Occurrence) of the DockerImage relationship. This image would be produced from a Dockerfile with FROM .
  * baseResourceUrl `string`: Output only. This contains the base image URL for the derived image occurrence.
  * distance `integer`: Output only. The number of layers by which this image differs from the associated image basis.
  * fingerprint [Fingerprint](#fingerprint)
  * layerInfo `array`: This contains layer-specific metadata, if populated it has length "distance" and is ordered with [distance] being the layer immediately following the base image and [1] being the final layer.
    * items [Layer](#layer)

### Detail
* Detail `object`: Identifies all appearances of this vulnerability in the package for a specific distro/location. For example: glibc in cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2
  * cpeUri `string`: Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar.
  * description `string`: A vendor-specific description of this note.
  * fixedLocation [VulnerabilityLocation](#vulnerabilitylocation)
  * isObsolete `boolean`: Whether this detail is obsolete. Occurrences are expected not to point to obsolete details.
  * maxAffectedVersion [Version](#version)
  * minAffectedVersion [Version](#version)
  * package `string`: Required. The name of the package where the vulnerability was found.
  * packageType `string`: The type of package; whether native or non native(ruby gems, node.js packages etc).
  * severityName `string`: The severity (eg: distro assigned severity) for this vulnerability.
  * sourceUpdateTime `string`: The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.

### Details
* Details `object`: Details of an attestation occurrence.
  * attestation [Attestation](#attestation)

### Discovered
* Discovered `object`: Provides information about the analysis status of a discovered resource.
  * analysisStatus `string` (values: ANALYSIS_STATUS_UNSPECIFIED, PENDING, SCANNING, FINISHED_SUCCESS, FINISHED_FAILED, FINISHED_UNSUPPORTED): The status of discovery for the resource.
  * analysisStatusError [Status](#status)
  * continuousAnalysis `string` (values: CONTINUOUS_ANALYSIS_UNSPECIFIED, ACTIVE, INACTIVE): Whether the resource is continuously analyzed.
  * lastAnalysisTime `string`: The last time continuous analysis was done for this resource. Deprecated, do not use.

### Discovery
* Discovery `object`: A note that indicates a type of analysis a provider would perform. This note exists in a provider's project. A `Discovery` occurrence is created in a consumer's project at the start of analysis.
  * analysisKind `string` (values: NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, INTOTO): Required. Immutable. The kind of analysis that is handled by this discovery.

### Distribution
* Distribution `object`: This represents a particular channel of distribution for a given package. E.g., Debian's jessie-backports dpkg mirror.
  * architecture `string` (values: ARCHITECTURE_UNSPECIFIED, X86, X64): The CPU architecture for which packages in this distribution channel were built.
  * cpeUri `string`: Required. The cpe_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.
  * description `string`: The distribution channel-specific description of this package.
  * latestVersion [Version](#version)
  * maintainer `string`: A freeform string denoting the maintainer of this package.
  * url `string`: The distribution channel-specific homepage for this package.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### Environment
* Environment `object`: Defines an object for the environment field in in-toto links. The suggested fields are "variables", "filesystem", and "workdir".
  * customValues `object`

### Expr
* Expr `object`: Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
  * description `string`: Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * expression `string`: Textual representation of an expression in Common Expression Language syntax.
  * location `string`: Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * title `string`: Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

### FileHashes
* FileHashes `object`: Container message for hashes of byte content of files, used in source messages to verify integrity of source input to the build.
  * fileHash `array`: Required. Collection of file hashes.
    * items [Hash](#hash)

### Fingerprint
* Fingerprint `object`: A set of properties that uniquely identify a given Docker image.
  * v1Name `string`: Required. The layer ID of the final layer in the Docker image's v1 representation.
  * v2Blob `array`: Required. The ordered list of v2 blobs that represent a given image.
    * items `string`
  * v2Name `string`: Output only. The name of the image's v2 blobs computed via: [bottom] := v2_blobbottom := sha256(v2_blob[N] + " " + v2_name[N+1]) Only the name of the final blob is kept.

### FixableTotalByDigest
* FixableTotalByDigest `object`: Per resource and severity counts of fixable and total vulnerabilities.
  * fixableCount `string`: The number of fixable vulnerabilities associated with this resource.
  * resource [Resource](#resource)
  * severity `string` (values: SEVERITY_UNSPECIFIED, MINIMAL, LOW, MEDIUM, HIGH, CRITICAL): The severity for this count. SEVERITY_UNSPECIFIED indicates total across all severities.
  * totalCount `string`: The total number of vulnerabilities associated with this resource.

### GenericSignedAttestation
* GenericSignedAttestation `object`: An attestation wrapper that uses the Grafeas `Signature` message. This attestation must define the `serialized_payload` that the `signatures` verify and any metadata necessary to interpret that plaintext. The signatures should always be over the `serialized_payload` bytestring.
  * contentType `string` (values: CONTENT_TYPE_UNSPECIFIED, SIMPLE_SIGNING_JSON): Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema).
  * serializedPayload `string`: The serialized payload that is verified by one or more `signatures`. The encoding and semantic meaning of this payload must match what is set in `content_type`.
  * signatures `array`: One or more signatures over `serialized_payload`. Verifier implementations should consider this attestation message verified if at least one `signature` verifies `serialized_payload`. See `Signature` in common.proto for more details on signature structure and verification.
    * items [Signature](#signature)

### GerritSourceContext
* GerritSourceContext `object`: A SourceContext referring to a Gerrit project.
  * aliasContext [AliasContext](#aliascontext)
  * gerritProject `string`: The full project name within the host. Projects may be nested, so "project/subproject" is a valid project name. The "repo name" is the hostURI/project.
  * hostUri `string`: The URI of a running Gerrit instance.
  * revisionId `string`: A revision (commit) ID.

### GetIamPolicyRequest
* GetIamPolicyRequest `object`: Request message for `GetIamPolicy` method.
  * options [GetPolicyOptions](#getpolicyoptions)

### GetPolicyOptions
* GetPolicyOptions `object`: Encapsulates settings provided to GetIamPolicy.
  * requestedPolicyVersion `integer`: Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### GitSourceContext
* GitSourceContext `object`: A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).
  * revisionId `string`: Git commit hash.
  * url `string`: Git repository URL.

### GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata
* GoogleDevtoolsContaineranalysisV1alpha1OperationMetadata `object`: Metadata for all operations used and required for all operations that created by Container Analysis Providers
  * createTime `string`: Output only. The time this operation was created.
  * endTime `string`: Output only. The time that this operation was marked completed or failed.

### GrafeasV1beta1BuildDetails
* GrafeasV1beta1BuildDetails `object`: Details of a build occurrence.
  * provenance [BuildProvenance](#buildprovenance)
  * provenanceBytes `string`: Serialized JSON representation of the provenance, used in generating the build signature in the corresponding build note. After verifying the signature, `provenance_bytes` can be unmarshalled and compared to the provenance to confirm that it is unchanged. A base64-encoded string representation of the provenance bytes is used for the signature in order to interoperate with openssl which expects this format for signature verification. The serialized form is captured both to avoid ambiguity in how the provenance is marshalled to json as well to prevent incompatibilities with future changes.

### GrafeasV1beta1DeploymentDetails
* GrafeasV1beta1DeploymentDetails `object`: Details of a deployment occurrence.
  * deployment [Deployment](#deployment)

### GrafeasV1beta1DiscoveryDetails
* GrafeasV1beta1DiscoveryDetails `object`: Details of a discovery occurrence.
  * discovered [Discovered](#discovered)

### GrafeasV1beta1ImageDetails
* GrafeasV1beta1ImageDetails `object`: Details of an image occurrence.
  * derivedImage [Derived](#derived)

### GrafeasV1beta1IntotoArtifact
* GrafeasV1beta1IntotoArtifact `object`
  * hashes [ArtifactHashes](#artifacthashes)
  * resourceUri `string`

### GrafeasV1beta1IntotoDetails
* GrafeasV1beta1IntotoDetails `object`: This corresponds to a signed in-toto link - it is made up of one or more signatures and the in-toto link itself. This is used for occurrences of a Grafeas in-toto note.
  * signatures `array`
    * items [GrafeasV1beta1IntotoSignature](#grafeasv1beta1intotosignature)
  * signed [Link](#link)

### GrafeasV1beta1IntotoSignature
* GrafeasV1beta1IntotoSignature `object`: A signature object consists of the KeyID used and the signature itself.
  * keyid `string`
  * sig `string`

### GrafeasV1beta1PackageDetails
* GrafeasV1beta1PackageDetails `object`: Details of a package occurrence.
  * installation [Installation](#installation)

### GrafeasV1beta1VulnerabilityDetails
* GrafeasV1beta1VulnerabilityDetails `object`: Details of a vulnerability Occurrence.
  * cvssScore `number`: Output only. The CVSS score of this vulnerability. CVSS score is on a scale of 0-10 where 0 indicates low severity and 10 indicates high severity.
  * effectiveSeverity `string` (values: SEVERITY_UNSPECIFIED, MINIMAL, LOW, MEDIUM, HIGH, CRITICAL): The distro assigned severity for this vulnerability when it is available, and note provider assigned severity when distro has not yet assigned a severity for this vulnerability.
  * longDescription `string`: Output only. A detailed description of this vulnerability.
  * packageIssue `array`: Required. The set of affected locations and their fixes (if available) within the associated resource.
    * items [PackageIssue](#packageissue)
  * relatedUrls `array`: Output only. URLs related to this vulnerability.
    * items [RelatedUrl](#relatedurl)
  * severity `string` (values: SEVERITY_UNSPECIFIED, MINIMAL, LOW, MEDIUM, HIGH, CRITICAL): Output only. The note provider assigned Severity of the vulnerability.
  * shortDescription `string`: Output only. A one sentence description of this vulnerability.
  * type `string`: The type of package; whether native or non native(ruby gems, node.js packages etc)

### Hash
* Hash `object`: Container message for hash values.
  * type `string` (values: HASH_TYPE_UNSPECIFIED, SHA256): Required. The type of hash that was performed.
  * value `string`: Required. The hash value.

### Hint
* Hint `object`: This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from "readable" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify.
  * humanReadableName `string`: Required. The human readable name of this attestation authority, for example "qa".

### InToto
* InToto `object`: This contains the fields corresponding to the definition of a software supply chain step in an in-toto layout. This information goes into a Grafeas note.
  * expectedCommand `array`: This field contains the expected command used to perform the step.
    * items `string`
  * expectedMaterials `array`: The following fields contain in-toto artifact rules identifying the artifacts that enter this supply chain step, and exit the supply chain step, i.e. materials and products of the step.
    * items [ArtifactRule](#artifactrule)
  * expectedProducts `array`
    * items [ArtifactRule](#artifactrule)
  * signingKeys `array`: This field contains the public keys that can be used to verify the signatures on the step metadata.
    * items [SigningKey](#signingkey)
  * stepName `string`: This field identifies the name of the step in the supply chain.
  * threshold `string`: This field contains a value that indicates the minimum number of keys that need to be used to sign the step's in-toto link.

### Installation
* Installation `object`: This represents how a particular software package may be installed on a system.
  * location `array`: Required. All of the places within the filesystem versions of this package have been found.
    * items [Location](#location)
  * name `string`: Output only. The name of the installed package.

### KnowledgeBase
* KnowledgeBase `object`
  * name `string`: The KB name (generally of the form KB[0-9]+ i.e. KB123456).
  * url `string`: A link to the KB in the Windows update catalog - https://www.catalog.update.microsoft.com/

### Layer
* Layer `object`: Layer holds metadata specific to a layer of a Docker image.
  * arguments `string`: The recovered arguments to the Dockerfile directive.
  * directive `string` (values: DIRECTIVE_UNSPECIFIED, MAINTAINER, RUN, CMD, LABEL, EXPOSE, ENV, ADD, COPY, ENTRYPOINT, VOLUME, USER, WORKDIR, ARG, ONBUILD, STOPSIGNAL, HEALTHCHECK, SHELL): Required. The recovered Dockerfile directive used to construct this layer.

### Link
* Link `object`: This corresponds to an in-toto link.
  * byproducts [ByProducts](#byproducts)
  * command `array`: This field contains the full command executed for the step. This can also be empty if links are generated for operations that aren't directly mapped to a specific command. Each term in the command is an independent string in the list. An example of a command in the in-toto metadata field is: "command": ["git", "clone", "https://github.com/in-toto/demo-project.git"]
    * items `string`
  * environment [Environment](#environment)
  * materials `array`: Materials are the supply chain artifacts that go into the step and are used for the operation performed. The key of the map is the path of the artifact and the structure contains the recorded hash information. An example is: "materials": [ { "resource_uri": "foo/bar", "hashes": { "sha256": "ebebf...", : } } ]
    * items [GrafeasV1beta1IntotoArtifact](#grafeasv1beta1intotoartifact)
  * products `array`: Products are the supply chain artifacts generated as a result of the step. The structure is identical to that of materials.
    * items [GrafeasV1beta1IntotoArtifact](#grafeasv1beta1intotoartifact)

### ListNoteOccurrencesResponse
* ListNoteOccurrencesResponse `object`: Response for listing occurrences for a note.
  * nextPageToken `string`: Token to provide to skip to a particular spot in the list.
  * occurrences `array`: The occurrences attached to the specified note.
    * items [Occurrence](#occurrence)

### ListNotesResponse
* ListNotesResponse `object`: Response for listing notes.
  * nextPageToken `string`: The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.
  * notes `array`: The notes requested.
    * items [Note](#note)

### ListOccurrencesResponse
* ListOccurrencesResponse `object`: Response for listing occurrences.
  * nextPageToken `string`: The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.
  * occurrences `array`: The occurrences requested.
    * items [Occurrence](#occurrence)

### ListScanConfigsResponse
* ListScanConfigsResponse `object`: Response for listing scan configurations.
  * nextPageToken `string`: The next pagination token in the list response. It should be used as `page_token` for the following request. An empty value means no more results.
  * scanConfigs `array`: The scan configurations requested.
    * items [ScanConfig](#scanconfig)

### Location
* Location `object`: An occurrence of a particular package installation found within a system's filesystem. E.g., glibc was found in `/var/lib/dpkg/status`.
  * cpeUri `string`: Required. The CPE URI in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package.
  * path `string`: The path from which we gathered that this package/version is installed.
  * version [Version](#version)

### Note
* Note `object`: A type of analysis that can be done for a resource.
  * attestationAuthority [Authority](#authority)
  * baseImage [Basis](#basis)
  * build [Build](#build)
  * createTime `string`: Output only. The time this note was created. This field can be used as a filter in list requests.
  * deployable [Deployable](#deployable)
  * discovery [Discovery](#discovery)
  * expirationTime `string`: Time of expiration for this note. Empty if note does not expire.
  * intoto [InToto](#intoto)
  * kind `string` (values: NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, INTOTO): Output only. The type of analysis. This field can be used as a filter in list requests.
  * longDescription `string`: A detailed description of this note.
  * name `string`: Output only. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`.
  * package [Package](#package)
  * relatedNoteNames `array`: Other notes related to this note.
    * items `string`
  * relatedUrl `array`: URLs associated with this note.
    * items [RelatedUrl](#relatedurl)
  * shortDescription `string`: A one sentence description of this note.
  * updateTime `string`: Output only. The time this note was last updated. This field can be used as a filter in list requests.
  * vulnerability [Vulnerability](#vulnerability)

### Occurrence
* Occurrence `object`: An instance of an analysis type that has been found on a resource.
  * attestation [Details](#details)
  * build [GrafeasV1beta1BuildDetails](#grafeasv1beta1builddetails)
  * createTime `string`: Output only. The time this occurrence was created.
  * deployment [GrafeasV1beta1DeploymentDetails](#grafeasv1beta1deploymentdetails)
  * derivedImage [GrafeasV1beta1ImageDetails](#grafeasv1beta1imagedetails)
  * discovered [GrafeasV1beta1DiscoveryDetails](#grafeasv1beta1discoverydetails)
  * installation [GrafeasV1beta1PackageDetails](#grafeasv1beta1packagedetails)
  * intoto [GrafeasV1beta1IntotoDetails](#grafeasv1beta1intotodetails)
  * kind `string` (values: NOTE_KIND_UNSPECIFIED, VULNERABILITY, BUILD, IMAGE, PACKAGE, DEPLOYMENT, DISCOVERY, ATTESTATION, INTOTO): Output only. This explicitly denotes which of the occurrence details are specified. This field can be used as a filter in list requests.
  * name `string`: Output only. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.
  * noteName `string`: Required. Immutable. The analysis note associated with this occurrence, in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. This field can be used as a filter in list requests.
  * remediation `string`: A description of actions that can be taken to remedy the note.
  * resource [Resource](#resource)
  * updateTime `string`: Output only. The time this occurrence was last updated.
  * vulnerability [GrafeasV1beta1VulnerabilityDetails](#grafeasv1beta1vulnerabilitydetails)

### Package
* Package `object`: This represents a particular package that is distributed over various channels. E.g., glibc (aka libc6) is distributed by many, at various versions.
  * distribution `array`: The various channels by which a package is distributed.
    * items [Distribution](#distribution)
  * name `string`: Required. Immutable. The name of the package.

### PackageIssue
* PackageIssue `object`: This message wraps a location affected by a vulnerability and its associated fix (if one is available).
  * affectedLocation [VulnerabilityLocation](#vulnerabilitylocation)
  * fixedLocation [VulnerabilityLocation](#vulnerabilitylocation)
  * severityName `string`: Deprecated, use Details.effective_severity instead The severity (e.g., distro assigned severity) for this vulnerability.

### PgpSignedAttestation
* PgpSignedAttestation `object`: An attestation wrapper with a PGP-compatible signature. This message only supports `ATTACHED` signatures, where the payload that is signed is included alongside the signature itself in the same file.
  * contentType `string` (values: CONTENT_TYPE_UNSPECIFIED, SIMPLE_SIGNING_JSON): Type (for example schema) of the attestation payload that was signed. The verifier must ensure that the provided type is one that the verifier supports, and that the attestation payload is a valid instantiation of that type (for example by validating a JSON schema).
  * pgpKeyId `string`: The cryptographic fingerprint of the key used to generate the signature, as output by, e.g. `gpg --list-keys`. This should be the version 4, full 160-bit fingerprint, expressed as a 40 character hexidecimal string. See https://tools.ietf.org/html/rfc4880#section-12.2 for details. Implementations may choose to acknowledge "LONG", "SHORT", or other abbreviated key IDs, but only the full fingerprint is guaranteed to work. In gpg, the full fingerprint can be retrieved from the `fpr` field returned when calling --list-keys with --with-colons. For example: ``` gpg --with-colons --with-fingerprint --force-v4-certs \ --list-keys attester@example.com tru::1:1513631572:0:3:1:5 pub:...... fpr:::::::::24FF6481B76AC91E66A00AC657A93A81EF3AE6FB: ``` Above, the fingerprint is `24FF6481B76AC91E66A00AC657A93A81EF3AE6FB`.
  * signature `string`: Required. The raw content of the signature, as output by GNU Privacy Guard (GPG) or equivalent. Since this message only supports attached signatures, the payload that was signed must be attached. While the signature format supported is dependent on the verification implementation, currently only ASCII-armored (`--armor` to gpg), non-clearsigned (`--sign` rather than `--clearsign` to gpg) are supported. Concretely, `gpg --sign --armor --output=signature.gpg payload.json` will create the signature content expected in this field in `signature.gpg` for the `payload.json` attestation payload.

### Policy
* Policy `object`: An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members` to a single `role`. Members can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') - etag: BwWWja0YfJA= - version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
  * bindings `array`: Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one member.
    * items [Binding](#binding)
  * etag `string`: `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
  * version `integer`: Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).

### ProjectRepoId
* ProjectRepoId `object`: Selects a repo using a Google Cloud Platform project ID (e.g., winged-cargo-31) and a repo name within that project.
  * projectId `string`: The ID of the project.
  * repoName `string`: The name of the repo. Leave empty for the default repo.

### RelatedUrl
* RelatedUrl `object`: Metadata for any related URL information.
  * label `string`: Label to describe usage of the URL.
  * url `string`: Specific URL associated with the resource.

### RepoId
* RepoId `object`: A unique identifier for a Cloud Repo.
  * projectRepoId [ProjectRepoId](#projectrepoid)
  * uid `string`: A server-assigned, globally unique identifier.

### Resource
* Resource `object`: An entity that can have metadata. For example, a Docker image.
  * contentHash [Hash](#hash)
  * name `string`: Deprecated, do not use. Use uri instead. The name of the resource. For example, the name of a Docker image - "Debian".
  * uri `string`: Required. The unique URI of the resource. For example, `https://gcr.io/project/image@sha256:foo` for a Docker image.

### ScanConfig
* ScanConfig `object`: A scan configuration specifies whether Cloud components in a project have a particular type of analysis being run. For example, it can configure whether vulnerability scanning is being done on Docker images or not.
  * createTime `string`: Output only. The time this scan config was created.
  * description `string`: Output only. A human-readable description of what the scan configuration does.
  * enabled `boolean`: Whether the scan is enabled.
  * name `string`: Output only. The name of the scan configuration in the form of `projects/[PROJECT_ID]/scanConfigs/[SCAN_CONFIG_ID]`.
  * updateTime `string`: Output only. The time this scan config was last updated.

### SetIamPolicyRequest
* SetIamPolicyRequest `object`: Request message for `SetIamPolicy` method.
  * policy [Policy](#policy)

### Signature
* Signature `object`: Verifiers (e.g. Kritis implementations) MUST verify signatures with respect to the trust anchors defined in policy (e.g. a Kritis policy). Typically this means that the verifier has been configured with a map from `public_key_id` to public key material (and any required parameters, e.g. signing algorithm). In particular, verification implementations MUST NOT treat the signature `public_key_id` as anything more than a key lookup hint. The `public_key_id` DOES NOT validate or authenticate a public key; it only provides a mechanism for quickly selecting a public key ALREADY CONFIGURED on the verifier through a trusted channel. Verification implementations MUST reject signatures in any of the following circumstances: * The `public_key_id` is not recognized by the verifier. * The public key that `public_key_id` refers to does not verify the signature with respect to the payload. The `signature` contents SHOULD NOT be "attached" (where the payload is included with the serialized `signature` bytes). Verifiers MUST ignore any "attached" payload and only verify signatures with respect to explicitly provided payload (e.g. a `payload` field on the proto message that holds this Signature, or the canonical serialization of the proto message that holds this signature).
  * publicKeyId `string`: The identifier for the public key that verifies this signature. * The `public_key_id` is required. * The `public_key_id` SHOULD be an RFC3986 conformant URI. * When possible, the `public_key_id` SHOULD be an immutable reference, such as a cryptographic digest. Examples of valid `public_key_id`s: OpenPGP V4 public key fingerprint: * "openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA" See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr for more details on this scheme. RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization): * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" * "nih:///sha-256;703f68f42aba2c6de30f488a5ea122fef76324679c9bf89791ba95a1271589a5"
  * signature `string`: The content of the signature, an opaque bytestring. The payload that this signature verifies MUST be unambiguously provided with the Signature during verification. A wrapper message might provide the payload explicitly. Alternatively, a message might have a canonical serialization that can always be unambiguously computed to derive the payload.

### SigningKey
* SigningKey `object`: This defines the format used to record keys used in the software supply chain. An in-toto link is attested using one or more keys defined in the in-toto layout. An example of this is: { "key_id": "776a00e29f3559e0141b3b096f696abc6cfb0c657ab40f441132b345b0...", "key_type": "rsa", "public_key_value": "-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0B...", "key_scheme": "rsassa-pss-sha256" } The format for in-toto's key definition can be found in section 4.2 of the in-toto specification.
  * keyId `string`: key_id is an identifier for the signing key.
  * keyScheme `string`: This field contains the corresponding signature scheme. Eg: "rsassa-pss-sha256".
  * keyType `string`: This field identifies the specific signing method. Eg: "rsa", "ed25519", and "ecdsa".
  * publicKeyValue `string`: This field contains the actual public key.

### Source
* Source `object`: Source describes the location of the source used for the build.
  * additionalContexts `array`: If provided, some of the source code used for the build may be found in these locations, in the case where the source repository had multiple remotes or submodules. This list will not include the context specified in the context field.
    * items [SourceContext](#sourcecontext)
  * artifactStorageSourceUri `string`: If provided, the input binary artifacts for the build came from this location.
  * context [SourceContext](#sourcecontext)
  * fileHashes `object`: Hash(es) of the build source, which can be used to verify that the original source integrity was maintained in the build. The keys to this map are file paths used as build source and the values contain the hash values for those files. If the build source came in a single package such as a gzipped tarfile (.tar.gz), the FileHash will be for the single path to that file.

### SourceContext
* SourceContext `object`: A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
  * cloudRepo [CloudRepoSourceContext](#cloudreposourcecontext)
  * gerrit [GerritSourceContext](#gerritsourcecontext)
  * git [GitSourceContext](#gitsourcecontext)
  * labels `object`: Labels with user defined metadata.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### TestIamPermissionsRequest
* TestIamPermissionsRequest `object`: Request message for `TestIamPermissions` method.
  * permissions `array`: The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
    * items `string`

### TestIamPermissionsResponse
* TestIamPermissionsResponse `object`: Response message for `TestIamPermissions` method.
  * permissions `array`: A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
    * items `string`

### Version
* Version `object`: Version contains structured information about the version of a package.
  * epoch `integer`: Used to correct mistakes in the version numbering scheme.
  * kind `string` (values: VERSION_KIND_UNSPECIFIED, NORMAL, MINIMUM, MAXIMUM): Required. Distinguishes between sentinel MIN/MAX versions and normal versions.
  * name `string`: Required only when version kind is NORMAL. The main part of the version name.
  * revision `string`: The iteration of the package build from the above version.

### Vulnerability
* Vulnerability `object`: Vulnerability provides metadata about a security vulnerability in a Note.
  * cvssScore `number`: The CVSS score for this vulnerability.
  * cvssV3 [CVSSv3](#cvssv3)
  * details `array`: All information about the package to specifically identify this vulnerability. One entry per (version range and cpe_uri) the package vulnerability has manifested in.
    * items [Detail](#detail)
  * severity `string` (values: SEVERITY_UNSPECIFIED, MINIMAL, LOW, MEDIUM, HIGH, CRITICAL): Note provider assigned impact of the vulnerability.
  * sourceUpdateTime `string`: The time this information was last changed at the source. This is an upstream timestamp from the underlying information source - e.g. Ubuntu security tracker.
  * windowsDetails `array`: Windows details get their own format because the information format and model don't match a normal detail. Specifically Windows updates are done as patches, thus Windows vulnerabilities really are a missing package, rather than a package being at an incorrect version.
    * items [WindowsDetail](#windowsdetail)

### VulnerabilityLocation
* VulnerabilityLocation `object`: The location of the vulnerability.
  * cpeUri `string`: Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) format. Examples include distro or storage location for vulnerable jar.
  * package `string`: Required. The package being described.
  * version [Version](#version)

### VulnerabilityOccurrencesSummary
* VulnerabilityOccurrencesSummary `object`: A summary of how many vulnerability occurrences there are per resource and severity type.
  * counts `array`: A listing by resource of the number of fixable and total vulnerabilities.
    * items [FixableTotalByDigest](#fixabletotalbydigest)

### WindowsDetail
* WindowsDetail `object`
  * cpeUri `string`: Required. The CPE URI in [cpe format](https://cpe.mitre.org/specification/) in which the vulnerability manifests. Examples include distro or storage location for vulnerable jar.
  * description `string`: The description of the vulnerability.
  * fixingKbs `array`: Required. The names of the KBs which have hotfixes to mitigate this vulnerability. Note that there may be multiple hotfixes (and thus multiple KBs) that mitigate a given vulnerability. Currently any listed kb's presence is considered a fix.
    * items [KnowledgeBase](#knowledgebase)
  * name `string`: Required. The name of the vulnerability.


