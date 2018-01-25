# @datafire/google_dlp

Client library for DLP

## Installation and Usage
```bash
npm install --save @datafire/google_dlp
```
```js
let google_dlp = require('@datafire/google_dlp').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_dlp.rootCategories.list({}).then(data => {
  console.log(data);
});
```

## Description

The Google Data Loss Prevention API provides methods for detection of privacy-sensitive fragments in text, images, and Google Cloud Platform storage repositories.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_dlp.oauthCallback({
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
google_dlp.oauthRefresh(null, context)
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

### content.deidentify
De-identifies potentially sensitive info from a list of strings.
This method has limits on input size and output size.


```js
google_dlp.content.deidentify({}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta1DeidentifyContentRequest](#googleprivacydlpv2beta1deidentifycontentrequest)
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
* output [GooglePrivacyDlpV2beta1DeidentifyContentResponse](#googleprivacydlpv2beta1deidentifycontentresponse)

### content.inspect
Finds potentially sensitive info in a list of strings.
This method has limits on input size, processing time, and output size.


```js
google_dlp.content.inspect({}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta1InspectContentRequest](#googleprivacydlpv2beta1inspectcontentrequest)
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
* output [GooglePrivacyDlpV2beta1InspectContentResponse](#googleprivacydlpv2beta1inspectcontentresponse)

### content.redact
Redacts potentially sensitive info from a list of strings.
This method has limits on input size, processing time, and output size.


```js
google_dlp.content.redact({}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta1RedactContentRequest](#googleprivacydlpv2beta1redactcontentrequest)
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
* output [GooglePrivacyDlpV2beta1RedactContentResponse](#googleprivacydlpv2beta1redactcontentresponse)

### dataSource.analyze
Schedules a job to compute risk analysis metrics over content in a Google
Cloud Platform repository.


```js
google_dlp.dataSource.analyze({}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta1AnalyzeDataSourceRiskRequest](#googleprivacydlpv2beta1analyzedatasourceriskrequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### inspect.operations.create
Schedules a job scanning content in a Google Cloud Platform data
repository.


```js
google_dlp.inspect.operations.create({}, context)
```

#### Input
* input `object`
  * body [GooglePrivacyDlpV2beta1CreateInspectOperationRequest](#googleprivacydlpv2beta1createinspectoperationrequest)
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### rootCategories.list
Returns the list of root categories of sensitive information.


```js
google_dlp.rootCategories.list({}, context)
```

#### Input
* input `object`
  * languageCode `string`: Optional language code for localized friendly category names.
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
* output [GooglePrivacyDlpV2beta1ListRootCategoriesResponse](#googleprivacydlpv2beta1listrootcategoriesresponse)

### rootCategories.infoTypes.list
Returns sensitive information types for given category.


```js
google_dlp.rootCategories.infoTypes.list({
  "category": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: Category name as returned by ListRootCategories.
  * languageCode `string`: Optional BCP-47 language code for localized info type friendly
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
* output [GooglePrivacyDlpV2beta1ListInfoTypesResponse](#googleprivacydlpv2beta1listinfotypesresponse)

### riskAnalysis.operations.delete
This method is not supported and the server returns `UNIMPLEMENTED`.


```js
google_dlp.riskAnalysis.operations.delete({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource to be deleted.
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
* output [GoogleProtobufEmpty](#googleprotobufempty)

### riskAnalysis.operations.get
Gets the latest state of a long-running operation.  Clients can use this
method to poll the operation result at intervals as recommended by the API
service.


```js
google_dlp.riskAnalysis.operations.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name of the operation resource.
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
* output [GoogleLongrunningOperation](#googlelongrunningoperation)

### inspect.results.findings.list
Returns list of results for given inspect operation result set id.


```js
google_dlp.inspect.results.findings.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * filter `string`: Restricts findings to items that match. Supports info_type and likelihood.
  * name **required** `string`: Identifier of the results set returned as metadata of
  * pageSize `integer`: Maximum number of results to return.
  * pageToken `string`: The value returned by the last `ListInspectFindingsResponse`; indicates
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
* output [GooglePrivacyDlpV2beta1ListInspectFindingsResponse](#googleprivacydlpv2beta1listinspectfindingsresponse)

### riskAnalysis.operations.cancel
Cancels an operation. Use the `inspect.operations.get` to check whether the cancellation succeeded or the operation completed despite cancellation.


```js
google_dlp.riskAnalysis.operations.cancel({
  "name": ""
}, context)
```

#### Input
* input `object`
  * body [GoogleLongrunningCancelOperationRequest](#googlelongrunningcanceloperationrequest)
  * name **required** `string`: The name of the operation resource to be cancelled.
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
* output [GoogleProtobufEmpty](#googleprotobufempty)



## Definitions

### GoogleLongrunningCancelOperationRequest
* GoogleLongrunningCancelOperationRequest `object`: The request message for Operations.CancelOperation.

### GoogleLongrunningListOperationsResponse
* GoogleLongrunningListOperationsResponse `object`: The response message for Operations.ListOperations.
  * nextPageToken `string`: The standard List next-page token.
  * operations `array`: A list of operations that matches the specified filter in the request.
    * items [GoogleLongrunningOperation](#googlelongrunningoperation)

### GoogleLongrunningOperation
* GoogleLongrunningOperation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [GoogleRpcStatus](#googlerpcstatus)
  * metadata `object`: This field will contain an InspectOperationMetadata object for `inspect.operations.create` or a RiskAnalysisOperationMetadata object for `dataSource.analyze`.  This will always be returned with the Operation.
  * name `string`: The server-assigned name. The `name` should have the format of `inspect/operations/<identifier>`.
  * response `object`: This field will contain an InspectOperationResult object for `inspect.operations.create` or a RiskAnalysisOperationResult object for `dataSource.analyze`.

### GooglePrivacyDlpV2beta1AnalyzeDataSourceRiskRequest
* GooglePrivacyDlpV2beta1AnalyzeDataSourceRiskRequest `object`: Request for creating a risk analysis operation.
  * privacyMetric [GooglePrivacyDlpV2beta1PrivacyMetric](#googleprivacydlpv2beta1privacymetric)
  * sourceTable [GooglePrivacyDlpV2beta1BigQueryTable](#googleprivacydlpv2beta1bigquerytable)

### GooglePrivacyDlpV2beta1BigQueryOptions
* GooglePrivacyDlpV2beta1BigQueryOptions `object`: Options defining BigQuery table and row identifiers.
  * identifyingFields `array`: References to fields uniquely identifying rows within the table.
    * items [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)
  * tableReference [GooglePrivacyDlpV2beta1BigQueryTable](#googleprivacydlpv2beta1bigquerytable)

### GooglePrivacyDlpV2beta1BigQueryTable
* GooglePrivacyDlpV2beta1BigQueryTable `object`: Message defining the location of a BigQuery table. A table is uniquely
  * datasetId `string`: Dataset ID of the table.
  * projectId `string`: The Google Cloud Platform project ID of the project containing the table.
  * tableId `string`: Name of the table.

### GooglePrivacyDlpV2beta1Bucket
* GooglePrivacyDlpV2beta1Bucket `object`: Buckets represented as ranges, along with replacement values. Ranges must
  * max [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)
  * min [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)
  * replacementValue [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)

### GooglePrivacyDlpV2beta1BucketingConfig
* GooglePrivacyDlpV2beta1BucketingConfig `object`: Generalization function that buckets values based on ranges. The ranges and
  * buckets `array`
    * items [GooglePrivacyDlpV2beta1Bucket](#googleprivacydlpv2beta1bucket)

### GooglePrivacyDlpV2beta1CategoricalStatsConfig
* GooglePrivacyDlpV2beta1CategoricalStatsConfig `object`: Compute numerical stats over an individual column, including
  * field [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)

### GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket
* GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket `object`: Histogram bucket of value frequencies in the column.
  * bucketSize `string`: Total number of records in this bucket.
  * bucketValues `array`: Sample of value frequencies in this bucket. The total number of
    * items [GooglePrivacyDlpV2beta1ValueFrequency](#googleprivacydlpv2beta1valuefrequency)
  * valueFrequencyLowerBound `string`: Lower bound on the value frequency of the values in this bucket.
  * valueFrequencyUpperBound `string`: Upper bound on the value frequency of the values in this bucket.

### GooglePrivacyDlpV2beta1CategoricalStatsResult
* GooglePrivacyDlpV2beta1CategoricalStatsResult `object`: Result of the categorical stats computation.
  * valueFrequencyHistogramBuckets `array`: Histogram of value frequencies in the column.
    * items [GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket](#googleprivacydlpv2beta1categoricalstatshistogrambucket)

### GooglePrivacyDlpV2beta1CategoryDescription
* GooglePrivacyDlpV2beta1CategoryDescription `object`: Info Type Category description.
  * displayName `string`: Human readable form of the category name.
  * name `string`: Internal name of the category.

### GooglePrivacyDlpV2beta1CharacterMaskConfig
* GooglePrivacyDlpV2beta1CharacterMaskConfig `object`: Partially mask a string by replacing a given number of characters with a
  * charactersToIgnore `array`: When masking a string, items in this list will be skipped when replacing.
    * items [GooglePrivacyDlpV2beta1CharsToIgnore](#googleprivacydlpv2beta1charstoignore)
  * maskingCharacter `string`: Character to mask the sensitive values&mdash;for example, "*" for an
  * numberToMask `integer`: Number of characters to mask. If not set, all matching chars will be
  * reverseOrder `boolean`: Mask characters in reverse order. For example, if `masking_character` is

### GooglePrivacyDlpV2beta1CharsToIgnore
* GooglePrivacyDlpV2beta1CharsToIgnore `object`: Characters to skip when doing deidentification of a value. These will be left
  * charactersToSkip `string`
  * commonCharactersToIgnore `string` (values: CHARACTER_GROUP_UNSPECIFIED, NUMERIC, ALPHA_UPPER_CASE, ALPHA_LOWER_CASE, PUNCTUATION, WHITESPACE)

### GooglePrivacyDlpV2beta1CloudStorageKey
* GooglePrivacyDlpV2beta1CloudStorageKey `object`: Record key for a finding in a Cloud Storage file.
  * filePath `string`: Path to the file.
  * startOffset `string`: Byte offset of the referenced data in the file.

### GooglePrivacyDlpV2beta1CloudStorageOptions
* GooglePrivacyDlpV2beta1CloudStorageOptions `object`: Options defining a file or a set of files (path ending with *) within
  * fileSet [GooglePrivacyDlpV2beta1FileSet](#googleprivacydlpv2beta1fileset)

### GooglePrivacyDlpV2beta1CloudStoragePath
* GooglePrivacyDlpV2beta1CloudStoragePath `object`: A location in Cloud Storage.
  * path `string`: The url, in the format of `gs://bucket/<path>`.

### GooglePrivacyDlpV2beta1Color
* GooglePrivacyDlpV2beta1Color `object`: Represents a color in the RGB color space.
  * blue `number`: The amount of blue in the color as a value in the interval [0, 1].
  * green `number`: The amount of green in the color as a value in the interval [0, 1].
  * red `number`: The amount of red in the color as a value in the interval [0, 1].

### GooglePrivacyDlpV2beta1Condition
* GooglePrivacyDlpV2beta1Condition `object`: The field type of `value` and `field` do not need to match to be
  * field [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)
  * operator `string` (values: RELATIONAL_OPERATOR_UNSPECIFIED, EQUAL_TO, NOT_EQUAL_TO, GREATER_THAN, LESS_THAN, GREATER_THAN_OR_EQUALS, LESS_THAN_OR_EQUALS, EXISTS): Operator used to compare the field or info type to the value. [required]
  * value [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)

### GooglePrivacyDlpV2beta1Conditions
* GooglePrivacyDlpV2beta1Conditions `object`
  * conditions `array`
    * items [GooglePrivacyDlpV2beta1Condition](#googleprivacydlpv2beta1condition)

### GooglePrivacyDlpV2beta1ContentItem
* GooglePrivacyDlpV2beta1ContentItem `object`: Container structure for the content to inspect.
  * data `string`: Content data to inspect or redact.
  * table [GooglePrivacyDlpV2beta1Table](#googleprivacydlpv2beta1table)
  * type `string`: Type of the content, as defined in Content-Type HTTP header.
  * value `string`: String data to inspect or redact.

### GooglePrivacyDlpV2beta1CreateInspectOperationRequest
* GooglePrivacyDlpV2beta1CreateInspectOperationRequest `object`: Request for scheduling a scan of a data subset from a Google Platform data
  * inspectConfig [GooglePrivacyDlpV2beta1InspectConfig](#googleprivacydlpv2beta1inspectconfig)
  * operationConfig [GooglePrivacyDlpV2beta1OperationConfig](#googleprivacydlpv2beta1operationconfig)
  * outputConfig [GooglePrivacyDlpV2beta1OutputStorageConfig](#googleprivacydlpv2beta1outputstorageconfig)
  * storageConfig [GooglePrivacyDlpV2beta1StorageConfig](#googleprivacydlpv2beta1storageconfig)

### GooglePrivacyDlpV2beta1CryptoHashConfig
* GooglePrivacyDlpV2beta1CryptoHashConfig `object`: Pseudonymization method that generates surrogates via cryptographic hashing.
  * cryptoKey [GooglePrivacyDlpV2beta1CryptoKey](#googleprivacydlpv2beta1cryptokey)

### GooglePrivacyDlpV2beta1CryptoKey
* GooglePrivacyDlpV2beta1CryptoKey `object`: This is a data encryption key (DEK) (as opposed to
  * kmsWrapped [GooglePrivacyDlpV2beta1KmsWrappedCryptoKey](#googleprivacydlpv2beta1kmswrappedcryptokey)
  * transient [GooglePrivacyDlpV2beta1TransientCryptoKey](#googleprivacydlpv2beta1transientcryptokey)
  * unwrapped [GooglePrivacyDlpV2beta1UnwrappedCryptoKey](#googleprivacydlpv2beta1unwrappedcryptokey)

### GooglePrivacyDlpV2beta1CryptoReplaceFfxFpeConfig
* GooglePrivacyDlpV2beta1CryptoReplaceFfxFpeConfig `object`: Replaces an identifier with a surrogate using FPE with the FFX
  * commonAlphabet `string` (values: FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED, NUMERIC, HEXADECIMAL, UPPER_CASE_ALPHA_NUMERIC, ALPHA_NUMERIC)
  * context [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)
  * cryptoKey [GooglePrivacyDlpV2beta1CryptoKey](#googleprivacydlpv2beta1cryptokey)
  * customAlphabet `string`: This is supported by mapping these to the alphanumeric characters
  * radix `integer`: The native way to select the alphabet. Must be in the range [2, 62].

### GooglePrivacyDlpV2beta1CustomInfoType
* GooglePrivacyDlpV2beta1CustomInfoType `object`: Custom information type provided by the user. Used to find domain-specific
  * dictionary [GooglePrivacyDlpV2beta1Dictionary](#googleprivacydlpv2beta1dictionary)
  * infoType [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)

### GooglePrivacyDlpV2beta1DatastoreKey
* GooglePrivacyDlpV2beta1DatastoreKey `object`: Record key for a finding in Cloud Datastore.
  * entityKey [GooglePrivacyDlpV2beta1Key](#googleprivacydlpv2beta1key)

### GooglePrivacyDlpV2beta1DatastoreOptions
* GooglePrivacyDlpV2beta1DatastoreOptions `object`: Options defining a data set within Google Cloud Datastore.
  * kind [GooglePrivacyDlpV2beta1KindExpression](#googleprivacydlpv2beta1kindexpression)
  * partitionId [GooglePrivacyDlpV2beta1PartitionId](#googleprivacydlpv2beta1partitionid)
  * projection `array`: Properties to scan. If none are specified, all properties will be scanned
    * items [GooglePrivacyDlpV2beta1Projection](#googleprivacydlpv2beta1projection)

### GooglePrivacyDlpV2beta1DeidentificationSummary
* GooglePrivacyDlpV2beta1DeidentificationSummary `object`: High level summary of deidentification.
  * transformationSummaries `array`: Transformations applied to the dataset.
    * items [GooglePrivacyDlpV2beta1TransformationSummary](#googleprivacydlpv2beta1transformationsummary)
  * transformedBytes `string`: Total size in bytes that were transformed in some way.

### GooglePrivacyDlpV2beta1DeidentifyConfig
* GooglePrivacyDlpV2beta1DeidentifyConfig `object`: The configuration that controls how the data will change.
  * infoTypeTransformations [GooglePrivacyDlpV2beta1InfoTypeTransformations](#googleprivacydlpv2beta1infotypetransformations)
  * recordTransformations [GooglePrivacyDlpV2beta1RecordTransformations](#googleprivacydlpv2beta1recordtransformations)

### GooglePrivacyDlpV2beta1DeidentifyContentRequest
* GooglePrivacyDlpV2beta1DeidentifyContentRequest `object`: Request to de-identify a list of items.
  * deidentifyConfig [GooglePrivacyDlpV2beta1DeidentifyConfig](#googleprivacydlpv2beta1deidentifyconfig)
  * inspectConfig [GooglePrivacyDlpV2beta1InspectConfig](#googleprivacydlpv2beta1inspectconfig)
  * items `array`: The list of items to inspect. Up to 100 are allowed per request.
    * items [GooglePrivacyDlpV2beta1ContentItem](#googleprivacydlpv2beta1contentitem)

### GooglePrivacyDlpV2beta1DeidentifyContentResponse
* GooglePrivacyDlpV2beta1DeidentifyContentResponse `object`: Results of de-identifying a list of items.
  * items `array`
    * items [GooglePrivacyDlpV2beta1ContentItem](#googleprivacydlpv2beta1contentitem)
  * summaries `array`: A review of the transformations that took place for each item.
    * items [GooglePrivacyDlpV2beta1DeidentificationSummary](#googleprivacydlpv2beta1deidentificationsummary)

### GooglePrivacyDlpV2beta1Dictionary
* GooglePrivacyDlpV2beta1Dictionary `object`: Custom information type based on a dictionary of words or phrases. This can
  * wordList [GooglePrivacyDlpV2beta1WordList](#googleprivacydlpv2beta1wordlist)

### GooglePrivacyDlpV2beta1EntityId
* GooglePrivacyDlpV2beta1EntityId `object`: An entity in a dataset is a field or set of fields that correspond to a
  * field [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)

### GooglePrivacyDlpV2beta1Expressions
* GooglePrivacyDlpV2beta1Expressions `object`: A collection of expressions
  * conditions [GooglePrivacyDlpV2beta1Conditions](#googleprivacydlpv2beta1conditions)
  * logicalOperator `string` (values: LOGICAL_OPERATOR_UNSPECIFIED, AND): The operator to apply to the result of conditions. Default and currently

### GooglePrivacyDlpV2beta1FieldId
* GooglePrivacyDlpV2beta1FieldId `object`: General identifier of a data field in a storage service.
  * columnName `string`: Name describing the field.

### GooglePrivacyDlpV2beta1FieldTransformation
* GooglePrivacyDlpV2beta1FieldTransformation `object`: The transformation to apply to the field.
  * condition [GooglePrivacyDlpV2beta1RecordCondition](#googleprivacydlpv2beta1recordcondition)
  * fields `array`: Input field(s) to apply the transformation to. [required]
    * items [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)
  * infoTypeTransformations [GooglePrivacyDlpV2beta1InfoTypeTransformations](#googleprivacydlpv2beta1infotypetransformations)
  * primitiveTransformation [GooglePrivacyDlpV2beta1PrimitiveTransformation](#googleprivacydlpv2beta1primitivetransformation)

### GooglePrivacyDlpV2beta1FileSet
* GooglePrivacyDlpV2beta1FileSet `object`: Set of files to scan.
  * url `string`: The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the

### GooglePrivacyDlpV2beta1Finding
* GooglePrivacyDlpV2beta1Finding `object`: Container structure describing a single finding within a string or image.
  * createTime `string`: Timestamp when finding was detected.
  * infoType [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)
  * likelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Estimate of how likely it is that the info_type is correct.
  * location [GooglePrivacyDlpV2beta1Location](#googleprivacydlpv2beta1location)
  * quote `string`: The specific string that may be potentially sensitive info.

### GooglePrivacyDlpV2beta1FixedSizeBucketingConfig
* GooglePrivacyDlpV2beta1FixedSizeBucketingConfig `object`: Buckets values based on fixed size ranges. The
  * bucketSize `number`: Size of each bucket (except for minimum and maximum buckets). So if
  * lowerBound [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)
  * upperBound [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)

### GooglePrivacyDlpV2beta1ImageLocation
* GooglePrivacyDlpV2beta1ImageLocation `object`: Bounding box encompassing detected text within an image.
  * height `integer`: Height of the bounding box in pixels.
  * left `integer`: Left coordinate of the bounding box. (0,0) is upper left.
  * top `integer`: Top coordinate of the bounding box. (0,0) is upper left.
  * width `integer`: Width of the bounding box in pixels.

### GooglePrivacyDlpV2beta1ImageRedactionConfig
* GooglePrivacyDlpV2beta1ImageRedactionConfig `object`: Configuration for determining how redaction of images should occur.
  * infoType [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)
  * redactAllText `boolean`: If true, all text found in the image, regardless whether it matches an
  * redactionColor [GooglePrivacyDlpV2beta1Color](#googleprivacydlpv2beta1color)

### GooglePrivacyDlpV2beta1InfoType
* GooglePrivacyDlpV2beta1InfoType `object`: Type of information detected by the API.
  * name `string`: Name of the information type.

### GooglePrivacyDlpV2beta1InfoTypeDescription
* GooglePrivacyDlpV2beta1InfoTypeDescription `object`: Description of the information type (infoType).
  * categories `array`: List of categories this infoType belongs to.
    * items [GooglePrivacyDlpV2beta1CategoryDescription](#googleprivacydlpv2beta1categorydescription)
  * displayName `string`: Human readable form of the infoType name.
  * name `string`: Internal name of the infoType.

### GooglePrivacyDlpV2beta1InfoTypeLimit
* GooglePrivacyDlpV2beta1InfoTypeLimit `object`: Max findings configuration per info type, per content item or long running
  * infoType [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)
  * maxFindings `integer`: Max findings limit for the given infoType.

### GooglePrivacyDlpV2beta1InfoTypeStatistics
* GooglePrivacyDlpV2beta1InfoTypeStatistics `object`: Statistics regarding a specific InfoType.
  * count `string`: Number of findings for this info type.
  * infoType [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)

### GooglePrivacyDlpV2beta1InfoTypeTransformation
* GooglePrivacyDlpV2beta1InfoTypeTransformation `object`: A transformation to apply to text that is identified as a specific
  * infoTypes `array`: Info types to apply the transformation to. Empty list will match all
    * items [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)
  * primitiveTransformation [GooglePrivacyDlpV2beta1PrimitiveTransformation](#googleprivacydlpv2beta1primitivetransformation)

### GooglePrivacyDlpV2beta1InfoTypeTransformations
* GooglePrivacyDlpV2beta1InfoTypeTransformations `object`: A type of transformation that will scan unstructured text and
  * transformations `array`: Transformation for each info type. Cannot specify more than one
    * items [GooglePrivacyDlpV2beta1InfoTypeTransformation](#googleprivacydlpv2beta1infotypetransformation)

### GooglePrivacyDlpV2beta1InspectConfig
* GooglePrivacyDlpV2beta1InspectConfig `object`: Configuration description of the scanning process.
  * customInfoTypes `array`: Custom info types provided by the user.
    * items [GooglePrivacyDlpV2beta1CustomInfoType](#googleprivacydlpv2beta1custominfotype)
  * excludeTypes `boolean`: When true, excludes type information of the findings.
  * includeQuote `boolean`: When true, a contextual quote from the data that triggered a finding is
  * infoTypeLimits `array`: Configuration of findings limit given for specified info types.
    * items [GooglePrivacyDlpV2beta1InfoTypeLimit](#googleprivacydlpv2beta1infotypelimit)
  * infoTypes `array`: Restricts what info_types to look for. The values must correspond to
    * items [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)
  * maxFindings `integer`: Limits the number of findings per content item or long running operation.
  * minLikelihood `string` (values: LIKELIHOOD_UNSPECIFIED, VERY_UNLIKELY, UNLIKELY, POSSIBLE, LIKELY, VERY_LIKELY): Only returns findings equal or above this threshold.

### GooglePrivacyDlpV2beta1InspectContentRequest
* GooglePrivacyDlpV2beta1InspectContentRequest `object`: Request to search for potentially sensitive info in a list of items.
  * inspectConfig [GooglePrivacyDlpV2beta1InspectConfig](#googleprivacydlpv2beta1inspectconfig)
  * items `array`: The list of items to inspect. Items in a single request are
    * items [GooglePrivacyDlpV2beta1ContentItem](#googleprivacydlpv2beta1contentitem)

### GooglePrivacyDlpV2beta1InspectContentResponse
* GooglePrivacyDlpV2beta1InspectContentResponse `object`: Results of inspecting a list of items.
  * results `array`: Each content_item from the request has a result in this list, in the
    * items [GooglePrivacyDlpV2beta1InspectResult](#googleprivacydlpv2beta1inspectresult)

### GooglePrivacyDlpV2beta1InspectOperationMetadata
* GooglePrivacyDlpV2beta1InspectOperationMetadata `object`: Metadata returned within GetOperation for an inspect request.
  * createTime `string`: The time which this request was started.
  * infoTypeStats `array`
    * items [GooglePrivacyDlpV2beta1InfoTypeStatistics](#googleprivacydlpv2beta1infotypestatistics)
  * processedBytes `string`: Total size in bytes that were processed.
  * requestInspectConfig [GooglePrivacyDlpV2beta1InspectConfig](#googleprivacydlpv2beta1inspectconfig)
  * requestOutputConfig [GooglePrivacyDlpV2beta1OutputStorageConfig](#googleprivacydlpv2beta1outputstorageconfig)
  * requestStorageConfig [GooglePrivacyDlpV2beta1StorageConfig](#googleprivacydlpv2beta1storageconfig)
  * totalEstimatedBytes `string`: Estimate of the number of bytes to process.

### GooglePrivacyDlpV2beta1InspectOperationResult
* GooglePrivacyDlpV2beta1InspectOperationResult `object`: The operational data.
  * name `string`: The server-assigned name, which is only unique within the same service that

### GooglePrivacyDlpV2beta1InspectResult
* GooglePrivacyDlpV2beta1InspectResult `object`: All the findings for a single scanned item.
  * findings `array`: List of findings for an item.
    * items [GooglePrivacyDlpV2beta1Finding](#googleprivacydlpv2beta1finding)
  * findingsTruncated `boolean`: If true, then this item might have more findings than were returned,

### GooglePrivacyDlpV2beta1KAnonymityConfig
* GooglePrivacyDlpV2beta1KAnonymityConfig `object`: k-anonymity metric, used for analysis of reidentification risk.
  * entityId [GooglePrivacyDlpV2beta1EntityId](#googleprivacydlpv2beta1entityid)
  * quasiIds `array`: Set of fields to compute k-anonymity over. When multiple fields are
    * items [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)

### GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass
* GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass `object`: The set of columns' values that share the same k-anonymity value.
  * equivalenceClassSize `string`: Size of the equivalence class, for example number of rows with the
  * quasiIdsValues `array`: Set of values defining the equivalence class. One value per
    * items [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)

### GooglePrivacyDlpV2beta1KAnonymityHistogramBucket
* GooglePrivacyDlpV2beta1KAnonymityHistogramBucket `object`: Histogram bucket of equivalence class sizes in the table.
  * bucketSize `string`: Total number of records in this bucket.
  * bucketValues `array`: Sample of equivalence classes in this bucket. The total number of
    * items [GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass](#googleprivacydlpv2beta1kanonymityequivalenceclass)
  * equivalenceClassSizeLowerBound `string`: Lower bound on the size of the equivalence classes in this bucket.
  * equivalenceClassSizeUpperBound `string`: Upper bound on the size of the equivalence classes in this bucket.

### GooglePrivacyDlpV2beta1KAnonymityResult
* GooglePrivacyDlpV2beta1KAnonymityResult `object`: Result of the k-anonymity computation.
  * equivalenceClassHistogramBuckets `array`: Histogram of k-anonymity equivalence classes.
    * items [GooglePrivacyDlpV2beta1KAnonymityHistogramBucket](#googleprivacydlpv2beta1kanonymityhistogrambucket)

### GooglePrivacyDlpV2beta1Key
* GooglePrivacyDlpV2beta1Key `object`: A unique identifier for a Datastore entity.
  * partitionId [GooglePrivacyDlpV2beta1PartitionId](#googleprivacydlpv2beta1partitionid)
  * path `array`: The entity path.
    * items [GooglePrivacyDlpV2beta1PathElement](#googleprivacydlpv2beta1pathelement)

### GooglePrivacyDlpV2beta1KindExpression
* GooglePrivacyDlpV2beta1KindExpression `object`: A representation of a Datastore kind.
  * name `string`: The name of the kind.

### GooglePrivacyDlpV2beta1KmsWrappedCryptoKey
* GooglePrivacyDlpV2beta1KmsWrappedCryptoKey `object`: Include to use an existing data crypto key wrapped by KMS.
  * cryptoKeyName `string`: The resource name of the KMS CryptoKey to use for unwrapping. [required]
  * wrappedKey `string`: The wrapped data crypto key. [required]

### GooglePrivacyDlpV2beta1LDiversityConfig
* GooglePrivacyDlpV2beta1LDiversityConfig `object`: l-diversity metric, used for analysis of reidentification risk.
  * quasiIds `array`: Set of quasi-identifiers indicating how equivalence classes are
    * items [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)
  * sensitiveAttribute [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)

### GooglePrivacyDlpV2beta1LDiversityEquivalenceClass
* GooglePrivacyDlpV2beta1LDiversityEquivalenceClass `object`: The set of columns' values that share the same l-diversity value.
  * equivalenceClassSize `string`: Size of the k-anonymity equivalence class.
  * numDistinctSensitiveValues `string`: Number of distinct sensitive values in this equivalence class.
  * quasiIdsValues `array`: Quasi-identifier values defining the k-anonymity equivalence
    * items [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)
  * topSensitiveValues `array`: Estimated frequencies of top sensitive values.
    * items [GooglePrivacyDlpV2beta1ValueFrequency](#googleprivacydlpv2beta1valuefrequency)

### GooglePrivacyDlpV2beta1LDiversityHistogramBucket
* GooglePrivacyDlpV2beta1LDiversityHistogramBucket `object`: Histogram bucket of sensitive value frequencies in the table.
  * bucketSize `string`: Total number of records in this bucket.
  * bucketValues `array`: Sample of equivalence classes in this bucket. The total number of
    * items [GooglePrivacyDlpV2beta1LDiversityEquivalenceClass](#googleprivacydlpv2beta1ldiversityequivalenceclass)
  * sensitiveValueFrequencyLowerBound `string`: Lower bound on the sensitive value frequencies of the equivalence
  * sensitiveValueFrequencyUpperBound `string`: Upper bound on the sensitive value frequencies of the equivalence

### GooglePrivacyDlpV2beta1LDiversityResult
* GooglePrivacyDlpV2beta1LDiversityResult `object`: Result of the l-diversity computation.
  * sensitiveValueFrequencyHistogramBuckets `array`: Histogram of l-diversity equivalence class sensitive value frequencies.
    * items [GooglePrivacyDlpV2beta1LDiversityHistogramBucket](#googleprivacydlpv2beta1ldiversityhistogrambucket)

### GooglePrivacyDlpV2beta1ListInfoTypesResponse
* GooglePrivacyDlpV2beta1ListInfoTypesResponse `object`: Response to the ListInfoTypes request.
  * infoTypes `array`: Set of sensitive info types belonging to a category.
    * items [GooglePrivacyDlpV2beta1InfoTypeDescription](#googleprivacydlpv2beta1infotypedescription)

### GooglePrivacyDlpV2beta1ListInspectFindingsResponse
* GooglePrivacyDlpV2beta1ListInspectFindingsResponse `object`: Response to the ListInspectFindings request.
  * nextPageToken `string`: If not empty, indicates that there may be more results that match the
  * result [GooglePrivacyDlpV2beta1InspectResult](#googleprivacydlpv2beta1inspectresult)

### GooglePrivacyDlpV2beta1ListRootCategoriesResponse
* GooglePrivacyDlpV2beta1ListRootCategoriesResponse `object`: Response for ListRootCategories request.
  * categories `array`: List of all into type categories supported by the API.
    * items [GooglePrivacyDlpV2beta1CategoryDescription](#googleprivacydlpv2beta1categorydescription)

### GooglePrivacyDlpV2beta1Location
* GooglePrivacyDlpV2beta1Location `object`: Specifies the location of a finding within its source item.
  * byteRange [GooglePrivacyDlpV2beta1Range](#googleprivacydlpv2beta1range)
  * codepointRange [GooglePrivacyDlpV2beta1Range](#googleprivacydlpv2beta1range)
  * fieldId [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)
  * imageBoxes `array`: Location within an image's pixels.
    * items [GooglePrivacyDlpV2beta1ImageLocation](#googleprivacydlpv2beta1imagelocation)
  * recordKey [GooglePrivacyDlpV2beta1RecordKey](#googleprivacydlpv2beta1recordkey)
  * tableLocation [GooglePrivacyDlpV2beta1TableLocation](#googleprivacydlpv2beta1tablelocation)

### GooglePrivacyDlpV2beta1NumericalStatsConfig
* GooglePrivacyDlpV2beta1NumericalStatsConfig `object`: Compute numerical stats over an individual column, including
  * field [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)

### GooglePrivacyDlpV2beta1NumericalStatsResult
* GooglePrivacyDlpV2beta1NumericalStatsResult `object`: Result of the numerical stats computation.
  * maxValue [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)
  * minValue [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)
  * quantileValues `array`: List of 99 values that partition the set of field values into 100 equal
    * items [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)

### GooglePrivacyDlpV2beta1OperationConfig
* GooglePrivacyDlpV2beta1OperationConfig `object`: Additional configuration for inspect long running operations.
  * maxItemFindings `string`: Max number of findings per file, Datastore entity, or database row.

### GooglePrivacyDlpV2beta1OutputStorageConfig
* GooglePrivacyDlpV2beta1OutputStorageConfig `object`: Cloud repository for storing output.
  * storagePath [GooglePrivacyDlpV2beta1CloudStoragePath](#googleprivacydlpv2beta1cloudstoragepath)
  * table [GooglePrivacyDlpV2beta1BigQueryTable](#googleprivacydlpv2beta1bigquerytable)

### GooglePrivacyDlpV2beta1PartitionId
* GooglePrivacyDlpV2beta1PartitionId `object`: Datastore partition ID.
  * namespaceId `string`: If not empty, the ID of the namespace to which the entities belong.
  * projectId `string`: The ID of the project to which the entities belong.

### GooglePrivacyDlpV2beta1PathElement
* GooglePrivacyDlpV2beta1PathElement `object`: A (kind, ID/name) pair used to construct a key path.
  * id `string`: The auto-allocated ID of the entity.
  * kind `string`: The kind of the entity.
  * name `string`: The name of the entity.

### GooglePrivacyDlpV2beta1PrimitiveTransformation
* GooglePrivacyDlpV2beta1PrimitiveTransformation `object`: A rule for transforming a value.
  * bucketingConfig [GooglePrivacyDlpV2beta1BucketingConfig](#googleprivacydlpv2beta1bucketingconfig)
  * characterMaskConfig [GooglePrivacyDlpV2beta1CharacterMaskConfig](#googleprivacydlpv2beta1charactermaskconfig)
  * cryptoHashConfig [GooglePrivacyDlpV2beta1CryptoHashConfig](#googleprivacydlpv2beta1cryptohashconfig)
  * cryptoReplaceFfxFpeConfig [GooglePrivacyDlpV2beta1CryptoReplaceFfxFpeConfig](#googleprivacydlpv2beta1cryptoreplaceffxfpeconfig)
  * fixedSizeBucketingConfig [GooglePrivacyDlpV2beta1FixedSizeBucketingConfig](#googleprivacydlpv2beta1fixedsizebucketingconfig)
  * redactConfig [GooglePrivacyDlpV2beta1RedactConfig](#googleprivacydlpv2beta1redactconfig)
  * replaceConfig [GooglePrivacyDlpV2beta1ReplaceValueConfig](#googleprivacydlpv2beta1replacevalueconfig)
  * replaceWithInfoTypeConfig [GooglePrivacyDlpV2beta1ReplaceWithInfoTypeConfig](#googleprivacydlpv2beta1replacewithinfotypeconfig)
  * timePartConfig [GooglePrivacyDlpV2beta1TimePartConfig](#googleprivacydlpv2beta1timepartconfig)

### GooglePrivacyDlpV2beta1PrivacyMetric
* GooglePrivacyDlpV2beta1PrivacyMetric `object`: Privacy metric to compute for reidentification risk analysis.
  * categoricalStatsConfig [GooglePrivacyDlpV2beta1CategoricalStatsConfig](#googleprivacydlpv2beta1categoricalstatsconfig)
  * kAnonymityConfig [GooglePrivacyDlpV2beta1KAnonymityConfig](#googleprivacydlpv2beta1kanonymityconfig)
  * lDiversityConfig [GooglePrivacyDlpV2beta1LDiversityConfig](#googleprivacydlpv2beta1ldiversityconfig)
  * numericalStatsConfig [GooglePrivacyDlpV2beta1NumericalStatsConfig](#googleprivacydlpv2beta1numericalstatsconfig)

### GooglePrivacyDlpV2beta1Projection
* GooglePrivacyDlpV2beta1Projection `object`: A representation of a Datastore property in a projection.
  * property [GooglePrivacyDlpV2beta1PropertyReference](#googleprivacydlpv2beta1propertyreference)

### GooglePrivacyDlpV2beta1PropertyReference
* GooglePrivacyDlpV2beta1PropertyReference `object`: A reference to a property relative to the Datastore kind expressions.
  * name `string`: The name of the property.

### GooglePrivacyDlpV2beta1Range
* GooglePrivacyDlpV2beta1Range `object`: Generic half-open interval [start, end)
  * end `string`: Index of the last character of the range (exclusive).
  * start `string`: Index of the first character of the range (inclusive).

### GooglePrivacyDlpV2beta1RecordCondition
* GooglePrivacyDlpV2beta1RecordCondition `object`: A condition for determining whether a transformation should be applied to
  * expressions [GooglePrivacyDlpV2beta1Expressions](#googleprivacydlpv2beta1expressions)

### GooglePrivacyDlpV2beta1RecordKey
* GooglePrivacyDlpV2beta1RecordKey `object`: Message for a unique key indicating a record that contains a finding.
  * cloudStorageKey [GooglePrivacyDlpV2beta1CloudStorageKey](#googleprivacydlpv2beta1cloudstoragekey)
  * datastoreKey [GooglePrivacyDlpV2beta1DatastoreKey](#googleprivacydlpv2beta1datastorekey)

### GooglePrivacyDlpV2beta1RecordSuppression
* GooglePrivacyDlpV2beta1RecordSuppression `object`: Configuration to suppress records whose suppression conditions evaluate to
  * condition [GooglePrivacyDlpV2beta1RecordCondition](#googleprivacydlpv2beta1recordcondition)

### GooglePrivacyDlpV2beta1RecordTransformations
* GooglePrivacyDlpV2beta1RecordTransformations `object`: A type of transformation that is applied over structured data such as a
  * fieldTransformations `array`: Transform the record by applying various field transformations.
    * items [GooglePrivacyDlpV2beta1FieldTransformation](#googleprivacydlpv2beta1fieldtransformation)
  * recordSuppressions `array`: Configuration defining which records get suppressed entirely. Records that
    * items [GooglePrivacyDlpV2beta1RecordSuppression](#googleprivacydlpv2beta1recordsuppression)

### GooglePrivacyDlpV2beta1RedactConfig
* GooglePrivacyDlpV2beta1RedactConfig `object`: Redact a given value. For example, if used with an `InfoTypeTransformation`

### GooglePrivacyDlpV2beta1RedactContentRequest
* GooglePrivacyDlpV2beta1RedactContentRequest `object`: Request to search for potentially sensitive info in a list of items
  * imageRedactionConfigs `array`: The configuration for specifying what content to redact from images.
    * items [GooglePrivacyDlpV2beta1ImageRedactionConfig](#googleprivacydlpv2beta1imageredactionconfig)
  * inspectConfig [GooglePrivacyDlpV2beta1InspectConfig](#googleprivacydlpv2beta1inspectconfig)
  * items `array`: The list of items to inspect. Up to 100 are allowed per request.
    * items [GooglePrivacyDlpV2beta1ContentItem](#googleprivacydlpv2beta1contentitem)
  * replaceConfigs `array`: The strings to replace findings text findings with. Must specify at least
    * items [GooglePrivacyDlpV2beta1ReplaceConfig](#googleprivacydlpv2beta1replaceconfig)

### GooglePrivacyDlpV2beta1RedactContentResponse
* GooglePrivacyDlpV2beta1RedactContentResponse `object`: Results of redacting a list of items.
  * items `array`: The redacted content.
    * items [GooglePrivacyDlpV2beta1ContentItem](#googleprivacydlpv2beta1contentitem)

### GooglePrivacyDlpV2beta1ReplaceConfig
* GooglePrivacyDlpV2beta1ReplaceConfig `object`
  * infoType [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)
  * replaceWith `string`: Content replacing sensitive information of given type. Max 256 chars.

### GooglePrivacyDlpV2beta1ReplaceValueConfig
* GooglePrivacyDlpV2beta1ReplaceValueConfig `object`: Replace each input value with a given `Value`.
  * newValue [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)

### GooglePrivacyDlpV2beta1ReplaceWithInfoTypeConfig
* GooglePrivacyDlpV2beta1ReplaceWithInfoTypeConfig `object`: Replace each matching finding with the name of the info_type.

### GooglePrivacyDlpV2beta1RiskAnalysisOperationMetadata
* GooglePrivacyDlpV2beta1RiskAnalysisOperationMetadata `object`: Metadata returned within the
  * createTime `string`: The time which this request was started.
  * requestedPrivacyMetric [GooglePrivacyDlpV2beta1PrivacyMetric](#googleprivacydlpv2beta1privacymetric)
  * requestedSourceTable [GooglePrivacyDlpV2beta1BigQueryTable](#googleprivacydlpv2beta1bigquerytable)

### GooglePrivacyDlpV2beta1RiskAnalysisOperationResult
* GooglePrivacyDlpV2beta1RiskAnalysisOperationResult `object`: Result of a risk analysis
  * categoricalStatsResult [GooglePrivacyDlpV2beta1CategoricalStatsResult](#googleprivacydlpv2beta1categoricalstatsresult)
  * kAnonymityResult [GooglePrivacyDlpV2beta1KAnonymityResult](#googleprivacydlpv2beta1kanonymityresult)
  * lDiversityResult [GooglePrivacyDlpV2beta1LDiversityResult](#googleprivacydlpv2beta1ldiversityresult)
  * numericalStatsResult [GooglePrivacyDlpV2beta1NumericalStatsResult](#googleprivacydlpv2beta1numericalstatsresult)

### GooglePrivacyDlpV2beta1Row
* GooglePrivacyDlpV2beta1Row `object`
  * values `array`
    * items [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)

### GooglePrivacyDlpV2beta1StorageConfig
* GooglePrivacyDlpV2beta1StorageConfig `object`: Shared message indicating Cloud storage type.
  * bigQueryOptions [GooglePrivacyDlpV2beta1BigQueryOptions](#googleprivacydlpv2beta1bigqueryoptions)
  * cloudStorageOptions [GooglePrivacyDlpV2beta1CloudStorageOptions](#googleprivacydlpv2beta1cloudstorageoptions)
  * datastoreOptions [GooglePrivacyDlpV2beta1DatastoreOptions](#googleprivacydlpv2beta1datastoreoptions)

### GooglePrivacyDlpV2beta1SummaryResult
* GooglePrivacyDlpV2beta1SummaryResult `object`: A collection that informs the user the number of times a particular
  * code `string` (values: TRANSFORMATION_RESULT_CODE_UNSPECIFIED, SUCCESS, ERROR)
  * count `string`
  * details `string`: A place for warnings or errors to show up if a transformation didn't

### GooglePrivacyDlpV2beta1Table
* GooglePrivacyDlpV2beta1Table `object`: Structured content to inspect. Up to 50,000 `Value`s per request allowed.
  * headers `array`
    * items [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)
  * rows `array`
    * items [GooglePrivacyDlpV2beta1Row](#googleprivacydlpv2beta1row)

### GooglePrivacyDlpV2beta1TableLocation
* GooglePrivacyDlpV2beta1TableLocation `object`: Location of a finding within a `ContentItem.Table`.
  * rowIndex `string`: The zero-based index of the row where the finding is located.

### GooglePrivacyDlpV2beta1TimePartConfig
* GooglePrivacyDlpV2beta1TimePartConfig `object`: For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a
  * partToExtract `string` (values: TIME_PART_UNSPECIFIED, YEAR, MONTH, DAY_OF_MONTH, DAY_OF_WEEK, WEEK_OF_YEAR, HOUR_OF_DAY)

### GooglePrivacyDlpV2beta1TransformationSummary
* GooglePrivacyDlpV2beta1TransformationSummary `object`: Summary of a single tranformation.
  * field [GooglePrivacyDlpV2beta1FieldId](#googleprivacydlpv2beta1fieldid)
  * fieldTransformations `array`: The field transformation that was applied. This list will contain
    * items [GooglePrivacyDlpV2beta1FieldTransformation](#googleprivacydlpv2beta1fieldtransformation)
  * infoType [GooglePrivacyDlpV2beta1InfoType](#googleprivacydlpv2beta1infotype)
  * recordSuppress [GooglePrivacyDlpV2beta1RecordSuppression](#googleprivacydlpv2beta1recordsuppression)
  * results `array`
    * items [GooglePrivacyDlpV2beta1SummaryResult](#googleprivacydlpv2beta1summaryresult)
  * transformation [GooglePrivacyDlpV2beta1PrimitiveTransformation](#googleprivacydlpv2beta1primitivetransformation)

### GooglePrivacyDlpV2beta1TransientCryptoKey
* GooglePrivacyDlpV2beta1TransientCryptoKey `object`: Use this to have a random data crypto key generated.
  * name `string`: Name of the key. [required]

### GooglePrivacyDlpV2beta1UnwrappedCryptoKey
* GooglePrivacyDlpV2beta1UnwrappedCryptoKey `object`: Using raw keys is prone to security risks due to accidentally
  * key `string`: The AES 128/192/256 bit key. [required]

### GooglePrivacyDlpV2beta1Value
* GooglePrivacyDlpV2beta1Value `object`: Set of primitive values supported by the system.
  * booleanValue `boolean`
  * dateValue [GoogleTypeDate](#googletypedate)
  * floatValue `number`
  * integerValue `string`
  * stringValue `string`
  * timeValue [GoogleTypeTimeOfDay](#googletypetimeofday)
  * timestampValue `string`

### GooglePrivacyDlpV2beta1ValueFrequency
* GooglePrivacyDlpV2beta1ValueFrequency `object`: A value of a field, including its frequency.
  * count `string`: How many times the value is contained in the field.
  * value [GooglePrivacyDlpV2beta1Value](#googleprivacydlpv2beta1value)

### GooglePrivacyDlpV2beta1WordList
* GooglePrivacyDlpV2beta1WordList `object`: Message defining a list of words or phrases to search for in the data.
  * words `array`: Words or phrases defining the dictionary. The dictionary must contain
    * items `string`

### GoogleProtobufEmpty
* GoogleProtobufEmpty `object`: A generic empty message that you can re-use to avoid defining duplicated

### GoogleRpcStatus
* GoogleRpcStatus `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### GoogleTypeDate
* GoogleTypeDate `object`: Represents a whole calendar date, e.g. date of birth. The time of day and
  * day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month, or 0
  * month `integer`: Month of year. Must be from 1 to 12.
  * year `integer`: Year of date. Must be from 1 to 9999, or 0 if specifying a date without

### GoogleTypeTimeOfDay
* GoogleTypeTimeOfDay `object`: Represents a time of day. The date and time zone are either not significant
  * hours `integer`: Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
  * minutes `integer`: Minutes of hour of day. Must be from 0 to 59.
  * nanos `integer`: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Seconds of minutes of the time. Must normally be from 0 to 59. An API may


