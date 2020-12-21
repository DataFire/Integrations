# @datafire/anchore

Client library for Anchore Engine API Server

## Installation and Usage
```bash
npm install --save @datafire/anchore
```
```js
let anchore = require('@datafire/anchore').create();

.then(data => {
  console.log(data);
});
```

## Description

This is the Anchore Engine API. Provides the primary external API for users of the service.

## Actions

### ping
Simple status check


```js
anchore.ping(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `string`

### get_users_account
List the account for the authenticated user


```js
anchore.get_users_account(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Account](#account)

### list_accounts
List user summaries. Only available to the system admin user.


```js
anchore.list_accounts({}, context)
```

#### Input
* input `object`
  * state `string` (values: enabled, disabled, deleting): Filter accounts by state

#### Output
* output [AccountList](#accountlist)

### create_account
Create a new user. Only avaialble to admin user.


```js
anchore.create_account({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [AccountCreationRequest](#accountcreationrequest)

#### Output
* output [Account](#account)

### delete_account
Delete the specified account, only allowed if the account is in the disabled state. All users will be deleted along with the account and all resources will be garbage collected


```js
anchore.delete_account({
  "accountname": ""
}, context)
```

#### Input
* input `object`
  * accountname **required** `string`

#### Output
*Output schema unknown*

### get_account
Get info about an user. Only available to admin user. Uses the main user Id, not a username.


```js
anchore.get_account({
  "accountname": ""
}, context)
```

#### Input
* input `object`
  * accountname **required** `string`

#### Output
* output [Account](#account)

### update_account_state
Update the state of an account to either enabled or disabled. For deletion use the DELETE route


```js
anchore.update_account_state({
  "accountname": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * accountname **required** `string`
  * body **required** [AccountStatus](#accountstatus)

#### Output
* output [AccountStatus](#accountstatus)

### list_users
List accounts for the user


```js
anchore.list_users({
  "accountname": ""
}, context)
```

#### Input
* input `object`
  * accountname **required** `string`

#### Output
* output `array`: List of user credential records
  * items [User](#user)

### create_user
Create a new user


```js
anchore.create_user({
  "accountname": "",
  "body": {
    "username": "",
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * accountname **required** `string`
  * body **required** [UserCreationRequest](#usercreationrequest)

#### Output
* output [User](#user)

### delete_user
Delete a specific user credential by username of the credential. Cannot be the credential used to authenticate the request.


```js
anchore.delete_user({
  "accountname": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * accountname **required** `string`
  * username **required** `string`

#### Output
*Output schema unknown*

### get_account_user
Get a specific user in the specified account


```js
anchore.get_account_user({
  "accountname": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * accountname **required** `string`
  * username **required** `string`

#### Output
* output [User](#user)

### delete_user_credential
Delete a credential by type


```js
anchore.delete_user_credential({
  "accountname": "",
  "username": "",
  "credential_type": ""
}, context)
```

#### Input
* input `object`
  * accountname **required** `string`
  * username **required** `string`
  * credential_type **required** `string` (values: password)

#### Output
*Output schema unknown*

### list_user_credentials
Get current credential summary


```js
anchore.list_user_credentials({
  "accountname": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * accountname **required** `string`
  * username **required** `string`

#### Output
* output [CredentialList](#credentiallist)

### create_user_credential
add/replace credential


```js
anchore.create_user_credential({
  "accountname": "",
  "username": "",
  "body": {
    "type": "",
    "value": ""
  }
}, context)
```

#### Input
* input `object`
  * accountname **required** `string`
  * username **required** `string`
  * body **required** [AccessCredential](#accesscredential)

#### Output
* output [User](#user)

### list_archives



```js
anchore.list_archives(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ArchiveSummary](#archivesummary)

### list_analysis_archive



```js
anchore.list_analysis_archive(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ArchivedAnalyses](#archivedanalyses)

### archive_image_analysis



```js
anchore.archive_image_analysis({
  "body": []
}, context)
```

#### Input
* input `object`
  * body **required** [ImageAnalysisReferences](#imageanalysisreferences)

#### Output
* output [AddAnalysisArchiveResult](#addanalysisarchiveresult)

### delete_archived_analysis
Performs a synchronous archive deletion


```js
anchore.delete_archived_analysis({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * force `boolean`

#### Output
* output [ArchivedAnalysis](#archivedanalysis)

### get_archived_analysis
Returns the archive metadata record identifying the image and tags for the analysis in the archive.


```js
anchore.get_archived_analysis({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`: The image digest to identify the image analysis

#### Output
* output [ArchivedAnalysis](#archivedanalysis)

### list_analysis_archive_rules



```js
anchore.list_analysis_archive_rules({}, context)
```

#### Input
* input `object`
  * system_global `boolean`: If true include system global rules (owned by admin) even for non-admin users. Defaults to true if not set. Can be set to false to exclude globals

#### Output
* output [AnalysisArchiveRules](#analysisarchiverules)

### create_analysis_archive_rule



```js
anchore.create_analysis_archive_rule({
  "body": {
    "transition": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [AnalysisArchiveTransitionRule](#analysisarchivetransitionrule)

#### Output
* output [AnalysisArchiveTransitionRule](#analysisarchivetransitionrule)

### delete_analysis_archive_rule



```js
anchore.delete_analysis_archive_rule({
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * ruleId **required** `string`

#### Output
* output [AnalysisArchiveTransitionRule](#analysisarchivetransitionrule)

### get_analysis_archive_rule



```js
anchore.get_analysis_archive_rule({
  "ruleId": ""
}, context)
```

#### Input
* input `object`
  * ruleId **required** `string`

#### Output
* output [AnalysisArchiveTransitionRule](#analysisarchivetransitionrule)

### list_event_types
Returns list of event types in the category hierarchy


```js
anchore.list_event_types(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [EventTypesList](#eventtypeslist)

### delete_events
Delete all or a subset of events filtered using the optional query parameters


```js
anchore.delete_events({}, context)
```

#### Input
* input `object`
  * before `string`: Delete events that occurred before the timestamp
  * since `string`: Delete events that occurred after the timestamp
  * level `string`: Delete events that match the level - INFO or ERROR
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output `array`
  * items `string`

### list_events
Returns a paginated list of events in the descending order of their occurrence. Optional query parameters may be used for filtering results


```js
anchore.list_events({}, context)
```

#### Input
* input `object`
  * source_servicename `string`: Filter events by the originating service
  * source_hostid `string`: Filter events by the originating host ID
  * event_type `string`: Filter events by a prefix match on the event type (e.g. "user.image.")
  * resource_type `string`: Filter events by the type of resource - tag, imageDigest, repository etc
  * resource_id `string`: Filter events by the id of the resource
  * level `string`: Filter events by the level - INFO or ERROR
  * since `string`: Return events that occurred after the timestamp
  * before `string`: Return events that occurred before the timestamp
  * page `integer`: Pagination controls - return the nth page of results. Defaults to first page if left empty
  * limit `integer`: Number of events in the result set. Defaults to 100 if left empty
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [EventsList](#eventslist)

### delete_event
Delete an event by its event ID


```js
anchore.delete_event({
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * eventId **required** `string`: Event ID of the event to be deleted
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
*Output schema unknown*

### get_event
Lookup an event by its event ID


```js
anchore.get_event({
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * eventId **required** `string`: Event ID of the event for lookup
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [EventResponse](#eventresponse)

### health_check
Health check, returns 200 and no body if service is running


```js
anchore.health_check(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### delete_images_async
Delete analysis for image digests in the list asynchronously


```js
anchore.delete_images_async({
  "imageDigests": []
}, context)
```

#### Input
* input `object`
  * imageDigests **required** `array`
  * force `boolean`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [DeleteImageResponseList](#deleteimageresponselist)

### list_images
List all images visible to the user


```js
anchore.list_images({}, context)
```

#### Input
* input `object`
  * history `boolean`: Include image history in the response
  * fulltag `string`: Full docker-pull string to filter results by (e.g. docker.io/library/nginx:latest, or myhost.com:5000/testimages:v1.1.1)
  * image_status `string` (values: all, active, deleting): Filter by image_status value on the record. Default if omitted is 'active'.
  * analysis_status `string` (values: not_analyzed, analyzed, analyzing, analysis_failed): Filter by analysis_status value on the record.
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [AnchoreImageList](#anchoreimagelist)

### add_image
Creates a new analysis task that is executed asynchronously


```js
anchore.add_image({
  "body": {}
}, context)
```

#### Input
* input `object`
  * force `boolean`: Override any existing entry in the system
  * autosubscribe `boolean`: Instruct engine to automatically begin watching the added tag for updates from registry
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)
  * body **required** [ImageAnalysisRequest](#imageanalysisrequest)

#### Output
* output [AnchoreImageList](#anchoreimagelist)

### delete_image_by_imageId
Delete image by docker imageId


```js
anchore.delete_image_by_imageId({
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * force `boolean`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [DeleteImageResponse](#deleteimageresponse)

### get_image_by_imageId
Lookup image by docker imageId


```js
anchore.get_image_by_imageId({
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [AnchoreImageList](#anchoreimagelist)

### get_image_policy_check_by_imageId
Get the policy evaluation for the given image


```js
anchore.get_image_policy_check_by_imageId({
  "imageId": "",
  "tag": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * policyId `string`
  * tag **required** `string`
  * detail `boolean`
  * history `boolean`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [PolicyEvaluationList](#policyevaluationlist)

### list_image_content_by_imageid
List image content types


```js
anchore.list_image_content_by_imageid({
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output `array`
  * items `string`

### get_image_content_by_type_imageId_files
Get the content of an image by type files


```js
anchore.get_image_content_by_type_imageId_files({
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [ContentFilesResponse](#contentfilesresponse)

### get_image_content_by_type_imageId_javapackage
Get the content of an image by type java


```js
anchore.get_image_content_by_type_imageId_javapackage({
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [ContentJAVAPackageResponse](#contentjavapackageresponse)

### get_image_content_by_type_imageId
Get the content of an image by type


```js
anchore.get_image_content_by_type_imageId({
  "imageId": "",
  "ctype": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * ctype **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [ContentPackageResponse](#contentpackageresponse)

### get_image_vulnerability_types_by_imageId
Get vulnerability types


```js
anchore.get_image_vulnerability_types_by_imageId({
  "imageId": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output `array`
  * items `string` (values: all, os, non-os)

### get_image_vulnerabilities_by_type_imageId
Get vulnerabilities by type


```js
anchore.get_image_vulnerabilities_by_type_imageId({
  "imageId": "",
  "vtype": ""
}, context)
```

#### Input
* input `object`
  * imageId **required** `string`
  * vtype **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [VulnerabilityResponse](#vulnerabilityresponse)

### delete_image
Delete an image analysis


```js
anchore.delete_image({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * force `boolean`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [DeleteImageResponse](#deleteimageresponse)

### get_image
Get image metadata


```js
anchore.get_image({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [AnchoreImageList](#anchoreimagelist)

### list_file_content_search_results
Return a list of analyzer artifacts of the specified type


```js
anchore.list_file_content_search_results({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`

#### Output
* output [FileContentSearchList](#filecontentsearchlist)

### list_retrieved_files
Return a list of analyzer artifacts of the specified type


```js
anchore.list_retrieved_files({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`

#### Output
* output [RetrievedFileList](#retrievedfilelist)

### list_secret_search_results
Return a list of analyzer artifacts of the specified type


```js
anchore.list_secret_search_results({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`

#### Output
* output [SecretSearchList](#secretsearchlist)

### get_image_policy_check
Get the policy evaluation for the given image


```js
anchore.get_image_policy_check({
  "imageDigest": "",
  "tag": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * policyId `string`
  * tag **required** `string`
  * detail `boolean`
  * history `boolean`
  * interactive `boolean`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [PolicyEvaluationList](#policyevaluationlist)

### list_image_content
List image content types


```js
anchore.list_image_content({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output `array`
  * items `string`

### get_image_content_by_type_files
Get the content of an image by type files


```js
anchore.get_image_content_by_type_files({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [ContentFilesResponse](#contentfilesresponse)

### get_image_content_by_type_javapackage
Get the content of an image by type java


```js
anchore.get_image_content_by_type_javapackage({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [ContentJAVAPackageResponse](#contentjavapackageresponse)

### get_image_content_by_type_malware
Get the content of an image by type malware


```js
anchore.get_image_content_by_type_malware({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [ContentMalwareResponse](#contentmalwareresponse)

### get_image_content_by_type
Get the content of an image by type


```js
anchore.get_image_content_by_type({
  "imageDigest": "",
  "ctype": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * ctype **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [ContentPackageResponse](#contentpackageresponse)

### list_image_metadata
List image metadata types


```js
anchore.list_image_metadata({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output `array`
  * items `string`

### get_image_metadata_by_type
Get the metadata of an image by type


```js
anchore.get_image_metadata_by_type({
  "imageDigest": "",
  "mtype": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * mtype **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [MetadataResponse](#metadataresponse)

### get_image_vulnerability_types
Get vulnerability types


```js
anchore.get_image_vulnerability_types({
  "imageDigest": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output `array`
  * items `string` (values: all, os, non-os)

### get_image_vulnerabilities_by_type
Get vulnerabilities by type


```js
anchore.get_image_vulnerabilities_by_type({
  "imageDigest": "",
  "vtype": ""
}, context)
```

#### Input
* input `object`
  * imageDigest **required** `string`
  * vtype **required** `string`
  * force_refresh `boolean`
  * vendor_only `boolean`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [VulnerabilityResponse](#vulnerabilityresponse)

### import_image_archive
Import an anchore image tar.gz archive file.


```js
anchore.import_image_archive({
  "archive_file": ""
}, context)
```

#### Input
* input `object`
  * archive_file **required** `string`: anchore image tar archive.

#### Output
* output [AnchoreImageList](#anchoreimagelist)

### get_oauth_token
Request a jwt token for subsequent operations, this request is authenticated with normal HTTP auth


```js
anchore.get_oauth_token({}, context)
```

#### Input
* input `object`
  * client_id `string`: The type of client used for the OAuth token
  * grant_type `string`: OAuth Grant type for token
  * password `string`: Password for corresponding user
  * username `string`: User to assign OAuth token to

#### Output
* output [TokenResponse](#tokenresponse)

### list_policies
List all saved policy bundles


```js
anchore.list_policies({}, context)
```

#### Input
* input `object`
  * detail `boolean`: Include policy bundle detail in the form of the full bundle content for each entry
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [PolicyBundleList](#policybundlelist)

### add_policy
Adds a new policy bundle to the system


```js
anchore.add_policy({
  "body": {
    "id": "",
    "version": "",
    "policies": [],
    "mappings": []
  }
}, context)
```

#### Input
* input `object`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)
  * body **required** [PolicyBundle](#policybundle)

#### Output
* output [PolicyBundleRecord](#policybundlerecord)

### delete_policy
Delete the specified policy


```js
anchore.delete_policy({
  "policyId": ""
}, context)
```

#### Input
* input `object`
  * policyId **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
*Output schema unknown*

### get_policy
Get the policy bundle content


```js
anchore.get_policy({
  "policyId": ""
}, context)
```

#### Input
* input `object`
  * policyId **required** `string`
  * detail `boolean`: Include policy bundle detail in the form of the full bundle content for each entry
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [PolicyBundleList](#policybundlelist)

### update_policy
Update/replace and existing policy


```js
anchore.update_policy({
  "policyId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * policyId **required** `string`
  * active `boolean`: Mark policy as active
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)
  * body **required** [PolicyBundleRecord](#policybundlerecord)

#### Output
* output [PolicyBundleList](#policybundlelist)

### query_images_by_package
Filterable query interface to search for images containing specified package


```js
anchore.query_images_by_package({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of package to search for (e.g. sed)
  * package_type `string`: Type of package to filter on (e.g. dpkg)
  * version `string`: Version of named package to filter on (e.g. 4.4-1)
  * page `string`: The page of results to fetch. Pages start at 1
  * limit `integer`: Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [PaginatedImageList](#paginatedimagelist)

### query_images_by_vulnerability
Returns a listing of images and their respective packages vulnerable to the given vulnerability ID


```js
anchore.query_images_by_vulnerability({
  "vulnerability_id": ""
}, context)
```

#### Input
* input `object`
  * vulnerability_id **required** `string`: The ID of the vulnerability to search for within all images stored in anchore-engine (e.g. CVE-1999-0001)
  * namespace `string`: Filter results to images within the given vulnerability namespace (e.g. debian:8, ubuntu:14.04)
  * affected_package `string`: Filter results to images with vulnable packages with the given package name (e.g. libssl)
  * severity `string` (values: Unknown, Negligible, Low, Medium, High, Critical): Filter results to vulnerable package/vulnerability with the given severity
  * vendor_only `boolean`: Filter results to include only vulnerabilities that are not marked as invalid by upstream OS vendor data
  * page `integer`: The page of results to fetch. Pages start at 1
  * limit `integer`: Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [PaginatedVulnerableImageList](#paginatedvulnerableimagelist)

### query_vulnerabilities
List (w/filters) vulnerability records known by the system, with affected packages information if present


```js
anchore.query_vulnerabilities({
  "id": []
}, context)
```

#### Input
* input `object`
  * id **required** `array`: The ID of the vulnerability (e.g. CVE-1999-0001)
  * affected_package `string`: Filter results by specified package name (e.g. sed)
  * affected_package_version `string`: Filter results by specified package version (e.g. 4.4-1)
  * page `string`: The page of results to fetch. Pages start at 1
  * limit `integer`: Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page
  * namespace `array`: Namespace(s) to filter vulnerability records by

#### Output
* output [PaginatedVulnerabilityList](#paginatedvulnerabilitylist)

### list_registries
List all configured registries the system can/will watch


```js
anchore.list_registries({}, context)
```

#### Input
* input `object`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [RegistryConfigurationList](#registryconfigurationlist)

### create_registry
Adds a new registry to the system


```js
anchore.create_registry({
  "body": {}
}, context)
```

#### Input
* input `object`
  * validate `boolean`: flag to determine whether or not to validate registry/credential at registry add time
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)
  * body **required** [RegistryConfigurationRequest](#registryconfigurationrequest)

#### Output
* output [RegistryConfigurationList](#registryconfigurationlist)

### delete_registry
Delete a registry configuration record from the system. Does not remove any images.


```js
anchore.delete_registry({
  "registry": ""
}, context)
```

#### Input
* input `object`
  * registry **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
*Output schema unknown*

### get_registry
Get information on a specific registry


```js
anchore.get_registry({
  "registry": ""
}, context)
```

#### Input
* input `object`
  * registry **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [RegistryConfiguration](#registryconfiguration)

### update_registry
Replaces an existing registry record with the given record


```js
anchore.update_registry({
  "registry": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * registry **required** `string`
  * validate `boolean`: flag to determine whether or not to validate registry/credential at registry update time
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)
  * body **required** [RegistryConfigurationRequest](#registryconfigurationrequest)

#### Output
* output [RegistryConfigurationList](#registryconfigurationlist)

### add_repository
Add repository to watch


```js
anchore.add_repository({
  "repository": ""
}, context)
```

#### Input
* input `object`
  * repository **required** `string`: full repository to add e.g. docker.io/library/alpine
  * autosubscribe `boolean`: flag to enable/disable auto tag_update activation when new images from a repo are added
  * lookuptag `string`: use specified existing tag to perform repo scan (default is 'latest')
  * dryrun `boolean`: flag to return tags in the repository without actually watching the repository, default is false
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [SubscriptionList](#subscriptionlist)

### get_status
Get the API service status


```js
anchore.get_status(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [StatusResponse](#statusresponse)

### list_subscriptions
List all subscriptions


```js
anchore.list_subscriptions({}, context)
```

#### Input
* input `object`
  * subscription_key `string`: filter only subscriptions matching key
  * subscription_type `string`: filter only subscriptions matching type
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [SubscriptionList](#subscriptionlist)

### add_subscription
Create a new subscription to watch a tag and get notifications of changes


```js
anchore.add_subscription({
  "body": {}
}, context)
```

#### Input
* input `object`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)
  * body **required** [SubscriptionRequest](#subscriptionrequest)

#### Output
* output [SubscriptionList](#subscriptionlist)

### delete_subscription
Delete subscriptions of a specific type


```js
anchore.delete_subscription({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
*Output schema unknown*

### get_subscription
Get a specific subscription set


```js
anchore.get_subscription({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [SubscriptionList](#subscriptionlist)

### update_subscription
Update an existing and specific subscription


```js
anchore.update_subscription({
  "subscriptionId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)
  * body **required** [SubscriptionUpdate](#subscriptionupdate)

#### Output
* output [SubscriptionList](#subscriptionlist)

### list_imagetags
List all image tags visible to the user


```js
anchore.list_imagetags({}, context)
```

#### Input
* input `object`
  * image_status `array`: Filter images in one or more states such as active, deleting. Defaults to active images only if unspecified
  * x-anchore-account `string`: An account name to change the resource scope of the request to that account, if permissions allow (admin only)

#### Output
* output [AnchoreImageTagSummaryList](#anchoreimagetagsummarylist)

### get_service_detail
Get the system status including queue lengths


```js
anchore.get_service_detail(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SystemStatusResponse](#systemstatusresponse)

### describe_error_codes
Describe anchore engine error codes.


```js
anchore.describe_error_codes(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`: List of Error Code Descriptions
  * items [AnchoreErrorCode](#anchoreerrorcode)

### get_system_feeds
Return a list of feed and their groups along with update and record count information. This data reflects the state of the policy engine, not the upstream feed service itself.


```js
anchore.get_system_feeds(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [FeedMetadata](#feedmetadata)

### post_system_feeds
Execute a synchronous feed sync operation. The response will block until complete, then return the result summary.


```js
anchore.post_system_feeds({}, context)
```

#### Input
* input `object`
  * flush `boolean`: instruct system to flush existing data feeds records from anchore-engine
  * sync `boolean`: instruct system to re-sync data feeds

#### Output
* output [FeedSyncResults](#feedsyncresults)

### delete_feed
Delete the groups and data for the feed and disable the feed itself


```js
anchore.delete_feed({
  "feed": ""
}, context)
```

#### Input
* input `object`
  * feed **required** `string`

#### Output
*Output schema unknown*

### toggle_feed_enabled
Disable the feed so that it does not sync on subsequent sync operations


```js
anchore.toggle_feed_enabled({
  "feed": "",
  "enabled": true
}, context)
```

#### Input
* input `object`
  * feed **required** `string`
  * enabled **required** `boolean`

#### Output
* output [FeedMetadata](#feedmetadata)

### delete_feed_group
Delete the group data and disable the group itself


```js
anchore.delete_feed_group({
  "feed": "",
  "group": ""
}, context)
```

#### Input
* input `object`
  * feed **required** `string`
  * group **required** `string`

#### Output
*Output schema unknown*

### toggle_group_enabled
Disable a specific group within a feed to not sync


```js
anchore.toggle_group_enabled({
  "feed": "",
  "group": "",
  "enabled": true
}, context)
```

#### Input
* input `object`
  * feed **required** `string`
  * group **required** `string`
  * enabled **required** `boolean`

#### Output
* output `array`
  * items [FeedMetadata](#feedmetadata)

### describe_policy
Get the policy language spec for this service


```js
anchore.describe_policy(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`: List of Gate specifications
  * items [GateSpec](#gatespec)

### list_services
List system services


```js
anchore.list_services(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ServiceList](#servicelist)

### get_services_by_name
Get a service configuration and state


```js
anchore.get_services_by_name({
  "servicename": ""
}, context)
```

#### Input
* input `object`
  * servicename **required** `string`

#### Output
* output [ServiceList](#servicelist)

### delete_service
Delete the service config


```js
anchore.delete_service({
  "servicename": "",
  "hostid": ""
}, context)
```

#### Input
* input `object`
  * servicename **required** `string`
  * hostid **required** `string`

#### Output
*Output schema unknown*

### get_services_by_name_and_host
Get service config for a specific host


```js
anchore.get_services_by_name_and_host({
  "servicename": "",
  "hostid": ""
}, context)
```

#### Input
* input `object`
  * servicename **required** `string`
  * hostid **required** `string`

#### Output
* output [ServiceList](#servicelist)

### test_webhook
Loads the Webhook configuration for webhook_type, and sends the notification out as a test


```js
anchore.test_webhook({
  "webhook_type": ""
}, context)
```

#### Input
* input `object`
  * webhook_type **required** `string`: The Webhook Type that we should test
  * notification_type `string` (values: tag_update, analysis_update, vuln_update, policy_eval): What kind of Notification to send

#### Output
*Output schema unknown*

### get_user
List authenticated user info


```js
anchore.get_user(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### get_credentials
Get current credential summary


```js
anchore.get_credentials(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CredentialList](#credentiallist)

### add_credential
add/replace credential


```js
anchore.add_credential({
  "body": {
    "type": "",
    "value": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [AccessCredential](#accesscredential)

#### Output
* output [User](#user)

### version_check
Returns the version object for the service, including db schema version info


```js
anchore.version_check(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ServiceVersion](#serviceversion)



## Definitions

### AccessCredential
* AccessCredential `object`: A login credential mapped to a user identity. For password credentials, the username to present for Basic auth is the user's username from the user record
  * created_at `string`: The timestamp of creation of the credential
  * type **required** `string` (values: password): The type of credential
  * value **required** `string`: The credential value (e.g. the password)

### Account
* Account `object`: Account information
  * created_at `string`: The timestamp when the account was created
  * email `string`: Optional email address associated with the account
  * last_updated `string`: The timestamp of the last update to the account metadata itself (not users or creds)
  * name **required** `string`: The account identifier, not updatable after creation
  * state `string` (values: enabled, disabled, deleting): State of the account. Disabled accounts prevent member users from logging in, deleting accounts are disabled and pending deletion and will be removed once all owned resources are garbage collected by the system
  * type `string` (values: user, admin, service): The user type (admin vs user). If not specified in a POST request, 'user' is default

### AccountCreationRequest
* AccountCreationRequest `object`: An account to create/add to the system. If already exists will return 400.
  * email `string`: An optional email to associate with the account for contact purposes
  * name **required** `string`: The account name to use. This will identify the account and must be globally unique in the system.

### AccountList
* AccountList `array`
  * items [Account](#account)

### AccountStatus
* AccountStatus `object`: A summary of account status
  * state `string` (values: enabled, disabled): The status of the account

### AddAnalysisArchiveResult
* AddAnalysisArchiveResult `array`: List of analysis archive add results
  * items [AnalysisArchiveAddResult](#analysisarchiveaddresult)

### AnalysisArchiveAddResult
* AnalysisArchiveAddResult `object`: The result of adding a single digest to the archive
  * detail `string`: Details on the status, e.g. the error message
  * digest `string`: The image digest requested to be added
  * status `string` (values: archived, archiving, error): The status of the archive add operation. Typically either 'archived' or 'error'

### AnalysisArchiveRules
* AnalysisArchiveRules `array`: Rule set for automatic archiving of system objects and flushing of archived objects (permament delete).
  * items [AnalysisArchiveTransitionRule](#analysisarchivetransitionrule)

### AnalysisArchiveRulesSummary
* AnalysisArchiveRulesSummary `object`: Summary of the transition rule set
  * count `integer`: The number of rules for this account
  * last_updated `string`: The newest last_updated timestamp from the set of rules

### AnalysisArchiveSource
* AnalysisArchiveSource `object`: An image reference in the analysis archive for the purposes of loading analysis from the archive into th working set
  * digest **required** `string`: The image digest identify the analysis. Archived analyses are based on digest, tag records are restored as analysis is restored.

### AnalysisArchiveSummary
* AnalysisArchiveSummary `object`: A summarization of the analysis archive, including size, counts, etc. This archive stores image analysis only, never the actual image content or layers.
  * last_updated `string`: The timestamp of the most recent archived image
  * total_data_bytes `integer`: The total sum of all the bytes stored to the backing storage. Accounts for anchore-applied compression, but not compression by the underlying storage system.
  * total_image_count `integer`: The number of unique images (digests) in the archive
  * total_tag_count `integer`: The number of tag records (registry/repo:tag pull strings) in the archive. This may include repeated tags but will always have a unique tag->digest mapping per record.

### AnalysisArchiveTransitionHistory
* AnalysisArchiveTransitionHistory `object`: A rule for auto-archiving image analysis by time and/or tag-history
  * created_at `string`
  * imageDigest `string`
  * last_updated `string`
  * rule_id `string`
  * transition `string` (values: archive, delete)
  * transition_task_id `string`: The task that created & updated this entry

### AnalysisArchiveTransitionRule
* AnalysisArchiveTransitionRule `object`: A rule for auto-archiving image analysis by time and/or tag-history
  * analysis_age_days `integer`: Matches if the analysis is strictly older than this number of days
  * created_at `string`
  * exclude [AnalysisArchiveTransitionRuleExclude](#analysisarchivetransitionruleexclude)
  * last_updated `string`
  * max_images_per_account `integer`: This is the maximum number of image analyses an account can have. Can only be set on system_global rules
  * selector [ImageSelector](#imageselector)
  * system_global `boolean`: True if the rule applies to all accounts in the system. This is only available to admin users to update/modify, but all users with permission to list rules can see them
  * tag_versions_newer `integer`: Number of images mapped to the tag that are newer
  * transition **required** `string` (values: archive, delete): The type of transition to make. If "archive", then archive an image from the working set and remove it from the working set. If "delete", then match against archived images and delete from the archive if match.

### AnalysisArchiveTransitionRuleExclude
* AnalysisArchiveTransitionRuleExclude `object`: Which Images to exclude from auto-archiving logic
  * expiration_days `integer`: How long the image selected will be excluded from the archive transition
  * selector [ImageSelector](#imageselector)

### AnalysisUpdateEval
* AnalysisUpdateEval `object`: Evaluation Results for an entity (current or last)
  * analysis_status `string`
  * annotations `object`
  * image_digest `string`

### AnalysisUpdateNotification
* AnalysisUpdateNotification
  * created_at `integer`
  * dataId `string`
  * last_updated `integer`
  * max_tries `integer`
  * queueId `string`
  * record_state_key `string`
  * record_state_val `string`
  * tries `integer`
  * userId `string`
  * data [AnalysisUpdateNotificationData](#analysisupdatenotificationdata)

### AnalysisUpdateNotificationData
* AnalysisUpdateNotificationData
  * notification_type `string`
  * notification_user `string`
  * notification_user_email `string`
  * notification_payload [AnalysisUpdateNotificationPayload](#analysisupdatenotificationpayload)

### AnalysisUpdateNotificationPayload
* AnalysisUpdateNotificationPayload
  * notificationId `string`
  * subscription_key `string`
  * subscription_type `string`
  * userId `string`
  * annotations `object`: List of Corresponding Image Annotations
  * curr_eval [AnalysisUpdateEval](#analysisupdateeval)
  * last_eval [AnalysisUpdateEval](#analysisupdateeval)

### AnchoreErrorCode
* AnchoreErrorCode `object`: A description of an anchore error code (name, description)
  * description `string`: Description of the error code
  * name `string`: Error code name

### AnchoreImage
* AnchoreImage `object`: A unique image in the engine. May have multiple tags or references. Unique to an image content across registries or repositories.
  * analysis_status `string` (values: not_analyzed, analyzing, analyzed, analysis_failed): A state value for the current status of the analysis progress of the image
  * annotations `object`
  * created_at `string`
  * imageDigest `string`
  * image_content [ImageContent](#imagecontent)
  * image_detail `array`: Details specific to an image reference and type such as tag and image source
    * items [ImageDetail](#imagedetail)
  * image_status `string` (values: active, inactive, disabled): State of the image
  * last_updated `string`
  * userId `string`

### AnchoreImageList
* AnchoreImageList `array`: A list of Anchore Images
  * items [AnchoreImage](#anchoreimage)

### AnchoreImageTagSummary
* AnchoreImageTagSummary `object`: A unique image in the engine.
  * analysis_status `string`
  * analyzed_at `integer`
  * created_at `integer`
  * fulltag `string`
  * imageDigest `string`
  * imageId `string`
  * image_status `string`
  * parentDigest `string`
  * tag_detected_at `integer`

### AnchoreImageTagSummaryList
* AnchoreImageTagSummaryList `array`: a list of AnchoreImageTagSummary objects
  * items [AnchoreImageTagSummary](#anchoreimagetagsummary)

### ApiErrorResponse
* ApiErrorResponse `object`: Generic HTTP API error response
  * code `integer`
  * detail `object`: Details structure for additional information about the error if available. Content and structure will be error specific.
  * error_type `string`
  * message `string`

### ArchiveSummary
* ArchiveSummary `object`: A summarization of the available archives, a place to for long-term storage of audit, analysis, or other data to remove it from the system's working set but keep it available.
  * images [AnalysisArchiveSummary](#analysisarchivesummary)
  * rules [AnalysisArchiveRulesSummary](#analysisarchiverulessummary)

### ArchivedAnalyses
* ArchivedAnalyses `array`: List of archived analyses
  * items [ArchivedAnalysis](#archivedanalysis)

### ArchivedAnalysis
* ArchivedAnalysis `object`
  * analyzed_at `string`
  * annotations `object`: User provided annotations as key-value pairs
  * archive_size_bytes `integer`: The size, in bytes, of the analysis archive file
  * created_at `string`
  * imageDigest `string`: The image digest (digest of the manifest describing the image, per docker spec)
  * image_detail `array`: List of tags associated with the image digest
    * items [TagEntry](#tagentry)
  * last_updated `string`
  * parentDigest `string`: The digest of a parent manifest (for manifest-list images)
  * status `string` (values: archiving, archived, deleting, deleted): The archival status

### BaseNotificationData
* BaseNotificationData `object`: Every notification has a payload, which follows this basic structure
  * notification_type `string`
  * notification_user `string`
  * notification_user_email `string`

### CVSSV2Scores
* CVSSV2Scores `object`
  * base_score `number`
  * exploitability_score `number`
  * impact_score `number`

### CVSSV3Scores
* CVSSV3Scores `object`
  * base_score `number`
  * exploitability_score `number`
  * impact_score `number`

### ContentFilesResponse
* ContentFilesResponse `object`: File content listings from images
  * content `array`
    * items `object`
      * filename `string`
      * gid `integer`
      * linkdest `string`
      * mode `string`
      * sha256 `string`
      * size `integer`
      * type `string`
      * uid `integer`
  * content_type `string`
  * imageDigest `string`

### ContentJAVAPackageResponse
* ContentJAVAPackageResponse `object`: Java package content listings from images
  * content `array`
    * items `object`
      * implementation-version `string`
      * location `string`
      * maven-version `string`
      * origin `string`
      * package `string`
      * specification-version `string`
      * type `string`
  * content_type `string`
  * imageDigest `string`

### ContentMalwareResponse
* ContentMalwareResponse `object`: Malware listing response
  * content `array`: List of malware scan results, one per scanner configured to run
    * items [MalwareScan](#malwarescan)
  * content_type `string`
  * imageDigest `string`

### ContentPackageResponse
* ContentPackageResponse `object`: Package content listings from images
  * content `array`
    * items `object`
      * license `string`: Deprecated in favor of the 'licenses' field"
      * licenses `array`
        * items `string`
      * location `string`
      * origin `string`
      * package `string`
      * size `string`
      * type `string`
      * version `string`
  * content_type `string`
  * imageDigest `string`

### ContentResponse
* ContentResponse `object`: Generic wrapper for content listings from images
  * content `array`
    * items `object`
  * content_type `string`
  * imageDigest `string`

### CredentialList
* CredentialList `array`
  * items [AccessCredential](#accesscredential)

### DeleteImageResponse
* DeleteImageResponse `object`: Image deletion response containing status and details
  * detail `string`
  * digest **required** `string`
  * status **required** `string` (values: not_found, deleting, delete_failed): Current status of the image deletion

### DeleteImageResponseList
* DeleteImageResponseList `array`: A list of delete image responses
  * items [DeleteImageResponse](#deleteimageresponse)

### EventCategory
* EventCategory `object`: A collection of event subcategories
  * category `string`
  * description `string`
  * subcategories `array`
    * items [EventSubcategory](#eventsubcategory)

### EventDescription
* EventDescription `object`: A description of an event type
  * message `string`: The message associated with the event type
  * name `string`: The event type. The last component of the fully-qualified event_type (category.subcategory.event)
  * resource_type `string`: The type of resource this event is generated from
  * type `string`: The fully qualified event type as would be seen in the event payload

### EventResponse
* EventResponse `object`: A record of occurance of an asynchronous event triggered either by system or by user activity
  * created_at `string`
  * event `object`
    * category `string`
    * details `object`
    * level `string`
    * message `string`
    * resource `object`
      * id `string`
      * type `string`
      * user_id `string`
    * source `object`
      * base_url `string`
      * hostid `string`
      * request_id `string`
      * servicename `string`
    * timestamp `string`
    * type `string`
  * generated_uuid `string`

### EventSubcategory
* EventSubcategory `object`: A collection of events related to each other
  * description `string`
  * events `array`
    * items [EventDescription](#eventdescription)
  * name `string`

### EventTypesList
* EventTypesList `array`: Array of EventCategory objects
  * items [EventCategory](#eventcategory)

### EventsList
* EventsList `object`: Response envelope for paginated listing of events
  * item_count `integer`: Number of events in this page
  * next_page `boolean`: Boolean flag, True indicates there are more events and False otherwise
  * page `integer`: Page number of this result set
  * results `array`: List of events
    * items [EventResponse](#eventresponse)

### FeedGroupMetadata
* FeedGroupMetadata `object`
  * created_at `string`
  * last_sync `string`
  * name `string`
  * record_count `integer`

### FeedMetadata
* FeedMetadata `object`: Metadata on a single feed based on what the engine finds from querying the endpoints
  * created_at `string`: Date the metadata record was created in engine (first seen on source)
  * groups `array`
    * items [FeedGroupMetadata](#feedgroupmetadata)
  * last_full_sync `string`
  * name `string`: name of the feed
  * updated_at `string`: Date the metadata was last updated

### FeedSyncResult
* FeedSyncResult `object`: The result of a sync of a single feed
  * feed `string`: The name of the feed synced
  * groups `array`: Array of group sync results
    * items [GroupSyncResult](#groupsyncresult)
  * status `string` (values: success, failure): The result of the sync operations, either co
  * total_time_seconds `number`: The duratin, in seconds, of the sync of the feed, the sum of all the group syncs

### FeedSyncResults
* FeedSyncResults `array`: An array of feed sync summaries representing the result of an explicit feed sync operation
  * items [FeedSyncResult](#feedsyncresult)

### FileContentSearchList
* FileContentSearchList `array`: Simple array of RetrievedFileMetadata objects
  * items [FileContentSearchResult](#filecontentsearchresult)

### FileContentSearchResult
* FileContentSearchResult `object`: The retrieved file entry including content (b64 encoded)
  * matches `array`
    * items [RegexContentMatch](#regexcontentmatch)
  * path `string`

### GateSpec
* GateSpec `object`: A description of the set of gates available in this engine and the triggers and parameters supported
  * description `string`: Description of the gate
  * name `string`: Gate name, as it would appear in a policy document
  * state `string` (values: active, deprecated, eol): State of the gate and transitively all triggers it contains if not 'active'
  * superceded_by `string`: The name of another trigger that supercedes this on functionally if this is deprecated
  * triggers `array`: List of the triggers that can fire for this Gate
    * items [TriggerSpec](#triggerspec)

### GenericNotificationPayload
* GenericNotificationPayload `object`: Parent class for Notification Payloads
  * notificationId `string`
  * subscription_key `string`
  * subscription_type `string`
  * userId `string`

### GroupSyncResult
* GroupSyncResult `object`
  * group `string`: The name of the group
  * status `string` (values: success, failure)
  * total_time_seconds `number`: The duration of the group sync in seconds
  * updated_image_count `integer`: The number of images updated by the this group sync, across all accounts. This is typically only non-zero for vulnerability feeds which update images' vulnerability results during the sync.
  * updated_record_count `integer`: The number of feed data records synced down as either updates or new records

### ImageAnalysisReferences
* ImageAnalysisReferences `array`: List of image digests to archive
  * items `string`: Image digest

### ImageAnalysisReport
* ImageAnalysisReport `object`: Analysis report json to be imported

### ImageAnalysisRequest
* ImageAnalysisRequest `object`: A request to add an image to be watched and analyzed by the engine. Optionally include the dockerfile content. Either source, digest or tag must be present.
  * annotations `object`: Annotations to be associated with the added image in key/value form
  * created_at `string`: Optional override of the image creation time, only honored when both tag and digest are also supplied  e.g. 2018-10-17T18:14:00Z. Deprecated in favor of the 'source' field
  * digest `string`: A digest string for an image, maybe a pull string or just a digest. e.g. nginx@sha256:123 or sha256:abc123. If a pull string, it must have same regisry/repo as the tag field. Deprecated in favor of the 'source' field
  * dockerfile `string`: Base64 encoded content of the dockerfile for the image, if available. Deprecated in favor of the 'source' field.
  * image_type `string`: Optional. The type of image this is adding, defaults to "docker". This can be ommitted until multiple image types are supported.
  * source [ImageSource](#imagesource)
  * tag `string`: Full pullable tag reference for image. e.g. docker.io/nginx:latest. Deprecated in favor of the 'source' field

### ImageContent
* ImageContent `object`: A metadata content record for a specific image, containing different content type entries

### ImageDetail
* ImageDetail `object`: A metadata detail record for a specific image. Multiple detail records may map a single catalog image.
  * created_at `string`
  * dockerfile `string`
  * fulldigest `string`: Full docker-pullable digest string including the registry url and repository necessary get the image
  * fulltag `string`: Full docker-pullable tag string referencing the image
  * imageDigest `string`: The parent Anchore Image record to which this detail maps
  * imageId `string`
  * last_updated `string`
  * registry `string`
  * repo `string`
  * userId `string`

### ImageFilter
* ImageFilter `object`: Filter for an image list by id, tag, or digest, but not both
  * digest `string`
  * tag `string`

### ImageRef
* ImageRef `object`: A reference to an image
  * type **required** `string` (values: tag, digest, id)
  * value **required** `string`

### ImageReference
* ImageReference `object`: A summary of an image identity, including digest, id (if available), and any tags known to have ever been mapped to the digest
  * analyzed_at `string`: Timestamp, in rfc3339 format, indicating when the image state became 'analyzed' in Anchore Engine.
  * digest `string`: The image digest
  * id `string`: The image id if available
  * tag_history `array`
    * items [TagEntry](#tagentry)

### ImageSelectionRule
* ImageSelectionRule `object`
  * id `string`
  * image **required** [ImageRef](#imageref)
  * name **required** `string`
  * registry **required** `string`
  * repository **required** `string`

### ImageSelector
* ImageSelector `object`: A set of selection criteria to match an image by a tagged pullstring based on its components, with regex support in each field
  * registry `string`: The registry section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "docker.io"
  * repository `string`: The repository section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "anchore/anchore-engine"
  * tag `string`: The tag-only section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "latest"

### ImageSource
* ImageSource `object`: A set of analysis source types. Only one may be set in any given request.
  * archive [AnalysisArchiveSource](#analysisarchivesource)
  * digest [RegistryDigestSource](#registrydigestsource)
  * tag [RegistryTagSource](#registrytagsource)

### ImageWithPackages
* ImageWithPackages `object`: An image record that contains packages
  * image [ImageReference](#imagereference)
  * packages `array`
    * items [PackageReference](#packagereference)

### MalwareScan
* MalwareScan `object`: A single scan from a scanner
  * enabled `boolean`: Indicates if the scanner is enabled
  * findings `array`
    * items `object`
      * path `string`: A path for a file in the image's rootfs
      * signature `string`: The malware signature found at the path
  * metadata `object`: Open schema for scanner-specific metadata related to the scan result
  * scanner `string`: The name of the scanner that produced the finding

### MappingRule
* MappingRule `object`
  * id `string`
  * image **required** [ImageRef](#imageref)
  * name **required** `string`
  * policy_id `string`: Optional single policy to evalute, if set will override any value in policy_ids, for backwards compatibility. Generally, policy_ids should be used even with a array of length 1.
  * policy_ids `array`: List of policyIds to evaluate in order, to completion
    * items `string`: PolicyId to evaluate
  * registry **required** `string`
  * repository **required** `string`
  * whitelist_ids `array`
    * items `string`

### MetadataResponse
* MetadataResponse `object`: Generic wrapper for metadata listings from images
  * imageDigest `string`
  * metadata_type `string`

### NotificationBase
* NotificationBase `object`: base object for Notifications (every notification has this basic structure)
  * created_at `integer`
  * dataId `string`
  * last_updated `integer`
  * max_tries `integer`
  * queueId `string`
  * record_state_key `string`
  * record_state_val `string`
  * tries `integer`
  * userId `string`

### NvdDataList
* NvdDataList `array`: List of Nvd Data objects
  * items [NvdDataObject](#nvddataobject)

### NvdDataObject
* NvdDataObject `object`
  * cvss_v2 [CVSSV2Scores](#cvssv2scores)
  * cvss_v3 [CVSSV3Scores](#cvssv3scores)
  * id `string`: NVD Vulnerability ID

### PackageReference
* PackageReference `object`: A record of a software item which is vulnerable or carries a fix for a vulnerability
  * name `string`: Package name
  * type `string`: Package type (e.g. package, rpm, deb, apk, jar, npm, gem, ...)
  * version `string`: A version for the package. If null, then references all versions

### PaginatedImageList
* PaginatedImageList: Pagination wrapped list of images that match some filter
  * next_page `string`: True if additional pages exist (page + 1) or False if this is the last page
  * page `string`: The page number returned (should match the requested page query string param)
  * returned_count `integer`: The number of items sent in this response
  * images `array`
    * items [ImageWithPackages](#imagewithpackages)

### PaginatedVulnerabilityList
* PaginatedVulnerabilityList: A paginated listing of vulnerability records sorted by ID in descending order
  * next_page `string`: True if additional pages exist (page + 1) or False if this is the last page
  * page `string`: The page number returned (should match the requested page query string param)
  * returned_count `integer`: The number of items sent in this response
  * vulnerabilities `array`: The listing of matching vulnerabilities for the query subject to pagination
    * items [StandaloneVulnerability](#standalonevulnerability)

### PaginatedVulnerableImageList
* PaginatedVulnerableImageList: Pagination wrapped list of images with vulnerabilties that match some filter
  * next_page `string`: True if additional pages exist (page + 1) or False if this is the last page
  * page `string`: The page number returned (should match the requested page query string param)
  * returned_count `integer`: The number of items sent in this response
  * images `array`
    * items [VulnerableImage](#vulnerableimage)

### PaginationProperties
* PaginationProperties `object`: Properties for common pagination handling to be included in any wrapping object that needs pagination elements
  * next_page `string`: True if additional pages exist (page + 1) or False if this is the last page
  * page `string`: The page number returned (should match the requested page query string param)
  * returned_count `integer`: The number of items sent in this response

### Policy
* Policy `object`
  * comment `string`
  * id **required** `string`
  * name `string`
  * rules `array`
    * items [PolicyRule](#policyrule)
  * version **required** `string`

### PolicyBundle
* PolicyBundle `object`: A bundle containing a set of policies, whitelists, and rules for mapping them to specific images
  * blacklisted_images `array`: List of mapping rules that define which images should always result in a STOP/FAIL policy result regardless of policy content or presence in whitelisted_images
    * items [ImageSelectionRule](#imageselectionrule)
  * comment `string`: Description of the bundle, human readable
  * id **required** `string`: Id of the bundle
  * mappings **required** `array`: Mapping rules for defining which policy and whitelist(s) to apply to an image based on a match of the image tag or id. Evaluated in order.
    * items [MappingRule](#mappingrule)
  * name `string`: Human readable name for the bundle
  * policies **required** `array`: Policies which define the go/stop/warn status of an image using rule matches on image properties
    * items [Policy](#policy)
  * version **required** `string`: Version id for this bundle format
  * whitelisted_images `array`: List of mapping rules that define which images should always be passed (unless also on the blacklist), regardless of policy result.
    * items [ImageSelectionRule](#imageselectionrule)
  * whitelists `array`: Whitelists which define which policy matches to disregard explicitly in the final policy decision
    * items [Whitelist](#whitelist)

### PolicyBundleList
* PolicyBundleList `array`: List of PolicyBundleRecord objects
  * items [PolicyBundleRecord](#policybundlerecord)

### PolicyBundleRecord
* PolicyBundleRecord `object`: A policy bundle plus some metadata
  * active `boolean`: True if the bundle is currently defined to be used automatically
  * created_at `string`
  * last_updated `string`
  * policyId `string`: The bundle's identifier
  * policy_source `string`: Source location of where the policy bundle originated
  * policybundle [PolicyBundle](#policybundle)
  * userId `string`: UserId of the user that owns the bundle

### PolicyEvalNotification
* PolicyEvalNotification
  * created_at `integer`
  * dataId `string`
  * last_updated `integer`
  * max_tries `integer`
  * queueId `string`
  * record_state_key `string`
  * record_state_val `string`
  * tries `integer`
  * userId `string`
  * data [PolicyEvalNotificationData](#policyevalnotificationdata)

### PolicyEvalNotificationData
* PolicyEvalNotificationData
  * notification_type `string`
  * notification_user `string`
  * notification_user_email `string`
  * notification_payload [PolicyEvalNotificationPayload](#policyevalnotificationpayload)

### PolicyEvalNotificationPayload
* PolicyEvalNotificationPayload
  * notificationId `string`
  * subscription_key `string`
  * subscription_type `string`
  * userId `string`
  * annotations `object`: List of Corresponding Image Annotations
  * curr_eval `object`: The Current Policy Evaluation result
  * last_eval `object`: The Previous Policy Evaluation result

### PolicyEvaluation
* PolicyEvaluation `object`: Evaluation response object

### PolicyEvaluationList
* PolicyEvaluationList `array`: Evaluation response object
  * items [PolicyEvaluation](#policyevaluation)

### PolicyRule
* PolicyRule `object`: A rule that defines and decision value if the match is found true for a given image.
  * action **required** `string` (values: GO, STOP, WARN)
  * gate **required** `string`
  * id `string`
  * params `array`
    * items `object`
      * name **required** `string`
      * value **required** `string`
  * trigger **required** `string`

### RegexContentMatch
* RegexContentMatch `object`: Match of a named regex on a file
  * lines `array`: A list of line numbers in the file that matched the regex
    * items `integer`
  * name `string`: The name associated with the regular expression
  * regex `string`: The regular expression used for the match

### RegistryConfiguration
* RegistryConfiguration `object`: A registry entry describing the endpoint and credentials for a registry to pull images from
  * created_at `string`
  * last_upated `string`
  * registry `string`: hostname:port string for accessing the registry, as would be used in a docker pull operation
  * registry_name `string`: human readable name associated with registry record
  * registry_type `string`: Type of registry
  * registry_user `string`: Username portion of credential to use for this registry
  * registry_verify `boolean`: Use TLS/SSL verification for the registry URL
  * userId `string`: Engine user that owns this registry entry

### RegistryConfigurationList
* RegistryConfigurationList `array`: List of registry configurations
  * items [RegistryConfiguration](#registryconfiguration)

### RegistryConfigurationRequest
* RegistryConfigurationRequest `object`: A registry record describing the endpoint and credentials for a registry
  * registry `string`: hostname:port string for accessing the registry, as would be used in a docker pull operation. May include some or all of a repository and wildcards (e.g. docker.io/library/* or gcr.io/myproject/myrepository)
  * registry_name `string`: human readable name associated with registry record
  * registry_pass `string`: Password portion of credential to use for this registry
  * registry_type `string`: Type of registry
  * registry_user `string`: Username portion of credential to use for this registry
  * registry_verify `boolean`: Use TLS/SSL verification for the registry URL

### RegistryDigestSource
* RegistryDigestSource `object`: An image reference using a digest in a registry, includes some extra tag and timestamp info in addition to the pull string to allow proper tag history reconstruction.
  * creation_timestamp_override `string`: Optional override of the image creation time to support proper tag history construction in cases of out-of-order analysis compared to registry history for the tag
  * dockerfile `string`: Base64 encoded content of the dockerfile used to build the image, if available.
  * pullstring **required** `string`: A digest-based pullstring (e.g. docker.io/nginx@sha256:123abc)
  * tag **required** `string`: A valid docker tag reference (e.g. docker.io/nginx:latest) that will be associated with the image but not used to pull the image.

### RegistryTagSource
* RegistryTagSource `object`: An image reference using a tag in a registry, this is the most common source type.
  * dockerfile `string`: Base64 encoded content of the dockerfile used to build the image, if available.
  * pullstring **required** `string`: A docker pull string (e.g. docker.io/nginx:latest, or docker.io/nginx@sha256:abd) to retrieve the image

### RepositoryTagList
* RepositoryTagList `array`: List of discovered tags in a repository
  * items `string`

### RetrievedFile
* RetrievedFile `object`: The retrieved file entry including content (b64 encoded)
  * b64_content `string`
  * path `string`

### RetrievedFileList
* RetrievedFileList `array`: Simple array of RetrievedFileMetadata objects
  * items [RetrievedFile](#retrievedfile)

### SecretSearchList
* SecretSearchList `array`: Simple array of RetrievedFileMetadata objects
  * items [SecretSearchResult](#secretsearchresult)

### SecretSearchResult
* SecretSearchResult `object`: The retrieved file entry including content (b64 encoded)
  * matches `array`
    * items [RegexContentMatch](#regexcontentmatch)
  * path `string`

### Service
* Service `object`: A service status record
  * base_url `string`: The url to reach the service, including port as needed
  * hostid `string`: The unique id of the host on which the service is executing
  * service_detail [StatusResponse](#statusresponse)
  * servicename `string`: Registered service name
  * status `boolean`
  * status_message `string`: A state indicating the condition of the service. Normal operation is 'registered'
  * version `string`: The version of the service as reported by the service implementation on registration

### ServiceList
* ServiceList `array`: A list of service objects
  * items [Service](#service)

### ServiceVersion
* ServiceVersion `object`: Version information for a service
  * api `object`: Api Version string
    * version `string`: Semantic version of the api
  * db `object`
    * schema_version `string`: Semantic version of the db schema
  * service `object`
    * version `string`: Semantic Version string of the service implementation

### StandaloneVulnerability
* StandaloneVulnerability `object`: A single vulnerability record in a single namespace, the unique key is the combination of the id and namespace
  * affected_packages `array`: The array of packages (typically packages) that are vulnerable-to or provide fixes-for this vulnerability
    * items [PackageReference](#packagereference)
  * description `string`: Description of the vulnerability if available
  * id `string`: Vulnerability identifier. May be CVE-X, RHSA-X, etc. Not necessarily unique across namespaces
  * link `string`: URL for the upstream CVE record in the reporting source (e.g. ubuntu security tracker)
  * namespace `string`: The namespace for the vulnerability record to avoid conflicts for the same id in different distros or sources (e.g. deb vs ubuntu for same CVE)
  * nvd_data [NvdDataList](#nvddatalist)
  * references `array`: List of references including
    * items [VulnerabilityReference](#vulnerabilityreference)
  * severity `string` (values: Unknown, Negligible, Low, Medium, High, Critical): Severity label specific to the namepsace
  * vendor_data [VendorDataList](#vendordatalist)

### StatusResponse
* StatusResponse `object`: System status response
  * available `boolean`
  * busy `boolean`
  * db_version `string`
  * detail `object`
  * message `string`
  * up `boolean`
  * version `string`

### Subscription
* Subscription `object`: Subscription entry
  * active `boolean`: Is the subscription currently active
  * subscription_id `string`: the unique id for this subscription record
  * subscription_key `string`: The key value that the subscription references. E.g. a tag value or a repo name.
  * subscription_type `string`: The type of the subscription
  * subscription_value `string`: The value of the subscription target
  * userId `string`: The userId of the subscribed user

### SubscriptionList
* SubscriptionList `array`: List of subscriptions
  * items [Subscription](#subscription)

### SubscriptionRequest
* SubscriptionRequest `object`: A subscription entry to add to the system
  * subscription_key `string`
  * subscription_type `string`
  * subscription_value `string`

### SubscriptionUpdate
* SubscriptionUpdate `object`: A modification to a subscription entry to change its status or value
  * active `boolean`: Toggle the subscription processing on or off
  * subscription_value `string`: The new subscription value, e.g. the new tag to be subscribed to

### SystemStatusResponse
* SystemStatusResponse `object`: System status response
  * service_states [ServiceList](#servicelist)

### TagEntry
* TagEntry `object`: A docker-pullable tag value as well as deconstructed components
  * detected_at `string`: The timestamp at which the Anchore Engine detected this tag was mapped to the image digest. Does not necessarily indicate when the tag was actually pushed to the registry.
  * pullstring `string`: The pullable string for the tag. E.g. "docker.io/library/node:latest"
  * registry `string`: The registry hostname:port section of the pull string
  * repository `string`: The repository section of the pull string
  * tag `string`: The tag-only section of the pull string

### TagUpdateNotification
* TagUpdateNotification
  * created_at `integer`
  * dataId `string`
  * last_updated `integer`
  * max_tries `integer`
  * queueId `string`
  * record_state_key `string`
  * record_state_val `string`
  * tries `integer`
  * userId `string`
  * data [TagUpdateNotificationData](#tagupdatenotificationdata)

### TagUpdateNotificationData
* TagUpdateNotificationData
  * notification_type `string`
  * notification_user `string`
  * notification_user_email `string`
  * notification_payload [TagUpdateNotificationPayload](#tagupdatenotificationpayload)

### TagUpdateNotificationPayload
* TagUpdateNotificationPayload
  * notificationId `string`
  * subscription_key `string`
  * subscription_type `string`
  * userId `string`
  * annotations `object`: List of Corresponding Image Annotations
  * curr_eval `array`: A list containing the current image digest
  * last_eval `array`: A list containing the previous image digests

### TokenResponse
* TokenResponse `object`
  * token **required** `string`: The token content

### TriggerParamSpec
* TriggerParamSpec `object`
  * description `string`
  * example `string`: An example value for the parameter (encoded as a string if the parameter is an object or list type)
  * name `string`: Parameter name as it appears in policy document
  * required `boolean`: Is this a required parameter or optional
  * state `string` (values: active, deprecated, eol): State of the trigger parameter
  * superceded_by `string`: The name of another trigger that supercedes this on functionally if this is deprecated
  * validator `object`: If present, a definition for validation of input. Typically a jsonschema object that can be used to validate an input against.

### TriggerSpec
* TriggerSpec `object`: Definition of a trigger and its parameters
  * parameters `array`: The list of parameters that are valid for this trigger
    * items [TriggerParamSpec](#triggerparamspec)
  * description `string`: Trigger description for what it tests and when it will fire during evaluation
  * name `string`: Name of the trigger as it would appear in a policy document
  * state `string` (values: active, deprecated, eol): State of the trigger
  * superceded_by `string`: The name of another trigger that supercedes this on functionally if this is deprecated

### User
* User `object`: A username for authenticating with one or more types of credentials. User type defines the expected credentials allowed for the user. Native users have passwords, External users have no credential internally. Internal users are service/system users for inter-service communication.
  * created_at `string`: The timestampt the user record was created
  * last_updated `string`: The timestamp of the last update to this record
  * source `string`: If the user is external, this is the source that the user was initialized from. All other user types have this set to null
  * type `string` (values: native, internal, external): The user's type
  * username **required** `string`: The username to authenticate with

### UserCreationRequest
* UserCreationRequest `object`: A payload for creating a new user, includes the username and password in a single request
  * password **required** `string`: The initial password for the user, must be at least 6 characters, up to 128
  * username **required** `string`: The username to create

### UserList
* UserList `array`
  * items [User](#user)

### VendorDataList
* VendorDataList `array`: List of Vendor Data objects
  * items [VendorDataObject](#vendordataobject)

### VendorDataObject
* VendorDataObject `object`
  * cvss_v2 [CVSSV2Scores](#cvssv2scores)
  * cvss_v3 [CVSSV3Scores](#cvssv3scores)
  * id `string`: Vendor Vulnerability ID

### VulnDiffResult
* VulnDiffResult `object`: The results of the comparing two vulnerability records during an update
  * added `array`
  * removed `array`
  * updated `array`

### VulnUpdateNotification
* VulnUpdateNotification
  * created_at `integer`
  * dataId `string`
  * last_updated `integer`
  * max_tries `integer`
  * queueId `string`
  * record_state_key `string`
  * record_state_val `string`
  * tries `integer`
  * userId `string`
  * data [VulnUpdateNotificationData](#vulnupdatenotificationdata)

### VulnUpdateNotificationData
* VulnUpdateNotificationData
  * notification_type `string`
  * notification_user `string`
  * notification_user_email `string`
  * notification_payload [VulnUpdateNotificationPayload](#vulnupdatenotificationpayload)

### VulnUpdateNotificationPayload
* VulnUpdateNotificationPayload
  * notificationId `string`
  * subscription_key `string`
  * subscription_type `string`
  * userId `string`
  * annotations `object`: List of Corresponding Image Annotations
  * diff_vulnerability_result [VulnDiffResult](#vulndiffresult)
  * imageDigest `string`

### Vulnerability
* Vulnerability `object`
  * feed `string`: The name of the feed where vulnerability match was made
  * feed_group `string`: The name of the feed group where vulnerability match was made
  * fix `string`: The package containing a fix, if available
  * nvd_data [NvdDataList](#nvddatalist)
  * package `string`: The package name and version that are vulnerable in the image
  * package_cpe `string`: The CPE string (if applicable) describing the package to vulnerability match
  * package_name `string`: The name of the vulnerable package artifact
  * package_path `string`: The location (if applicable) of the vulnerable package in the container filesystem
  * package_type `string`: The type of vulnerable package
  * package_version `string`: The version of the vulnerable package artifact
  * severity `string`: The severity of the vulnerability
  * url `string`: The url for more information about the vulnerability
  * vendor_data [VendorDataList](#vendordatalist)
  * vuln `string`: The vulnerability identifier, such as CVE-2017-100, or RHSA-2017123

### VulnerabilityList
* VulnerabilityList `array`: List of Vulnerability objects
  * items [Vulnerability](#vulnerability)

### VulnerabilityReference
* VulnerabilityReference `object`: An external link/reference
  * tags `array`
    * items `string`
  * source `string`: The reference source
  * url `string`: The reference url

### VulnerabilityResponse
* VulnerabilityResponse `object`: envelope containing list of vulnerabilities
  * imageDigest `string`
  * vulnerabilities [VulnerabilityList](#vulnerabilitylist)
  * vulnerability_type `string`

### VulnerableImage
* VulnerableImage `object`: A record of an image vulnerable to some known vulnerability. Includes vulnerable package information
  * affected_packages `array`
    * items [VulnerablePackageReference](#vulnerablepackagereference)
  * image [ImageReference](#imagereference)

### VulnerablePackageReference
* VulnerablePackageReference `object`: A record of a software item which is vulnerable or carries a fix for a vulnerability
  * name `string`: Package name
  * namespace `string`: Vulnerability namespace of affected package
  * severity `string`: Severity of vulnerability affecting package
  * type `string`: Package type (e.g. package, rpm, deb, apk, jar, npm, gem, ...)
  * version `string`: A version for the package. If null, then references all versions

### Whitelist
* Whitelist `object`: A collection of whitelist items to match a policy evaluation against.
  * comment `string`
  * id **required** `string`
  * items `array`
    * items [WhitelistItem](#whitelistitem)
  * name `string`
  * version **required** `string`

### WhitelistItem
* WhitelistItem `object`: Identifies a specific gate and trigger match from a policy against an image and indicates it should be ignored in final policy decisions
  * expires_on `string`
  * gate **required** `string`
  * id `string`
  * trigger_id **required** `string`


