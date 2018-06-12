# @datafire/google_books

Client library for Books

## Installation and Usage
```bash
npm install --save @datafire/google_books
```
```js
let google_books = require('@datafire/google_books').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_books.volumes.useruploaded.list({}).then(data => {
  console.log(data);
});
```

## Description

Searches for books and manages your Google Books library.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_books.oauthCallback({
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
google_books.oauthRefresh(null, context)
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

### cloudloading.addBook



```js
google_books.cloudloading.addBook({}, context)
```

#### Input
* input `object`
  * drive_document_id `string`: A drive document id. The upload_client_token must not be set.
  * mime_type `string`: The document MIME type. It can be set only if the drive_document_id is set.
  * name `string`: The document name. It can be set only if the drive_document_id is set.
  * upload_client_token `string`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [BooksCloudloadingResource](#bookscloudloadingresource)

### cloudloading.deleteBook
Remove the book and its contents


```js
google_books.cloudloading.deleteBook({
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * volumeId **required** `string`: The id of the book to be removed.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### cloudloading.updateBook



```js
google_books.cloudloading.updateBook({}, context)
```

#### Input
* input `object`
  * body [BooksCloudloadingResource](#bookscloudloadingresource)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [BooksCloudloadingResource](#bookscloudloadingresource)

### dictionary.listOfflineMetadata
Returns a list of offline dictionary metadata available


```js
google_books.dictionary.listOfflineMetadata({
  "cpksver": ""
}, context)
```

#### Input
* input `object`
  * cpksver **required** `string`: The device/version ID from which to request the data.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Metadata](#metadata)

### familysharing.getFamilyInfo
Gets information regarding the family that the user is part of.


```js
google_books.familysharing.getFamilyInfo({}, context)
```

#### Input
* input `object`
  * source `string`: String to identify the originator of this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [FamilyInfo](#familyinfo)

### familysharing.share
Initiates sharing of the content with the user's family. Empty response indicates success.


```js
google_books.familysharing.share({}, context)
```

#### Input
* input `object`
  * docId `string`: The docid to share.
  * source `string`: String to identify the originator of this request.
  * volumeId `string`: The volume to share.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### familysharing.unshare
Initiates revoking content that has already been shared with the user's family. Empty response indicates success.


```js
google_books.familysharing.unshare({}, context)
```

#### Input
* input `object`
  * docId `string`: The docid to unshare.
  * source `string`: String to identify the originator of this request.
  * volumeId `string`: The volume to unshare.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### myconfig.getUserSettings
Gets the current settings for the user.


```js
google_books.myconfig.getUserSettings({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Usersettings](#usersettings)

### myconfig.releaseDownloadAccess
Release downloaded content access restriction.


```js
google_books.myconfig.releaseDownloadAccess({
  "cpksver": "",
  "volumeIds": []
}, context)
```

#### Input
* input `object`
  * cpksver **required** `string`: The device/version ID from which to release the restriction.
  * locale `string`: ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
  * source `string`: String to identify the originator of this request.
  * volumeIds **required** `array`: The volume(s) to release restrictions for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [DownloadAccesses](#downloadaccesses)

### myconfig.requestAccess
Request concurrent and download access restrictions.


```js
google_books.myconfig.requestAccess({
  "cpksver": "",
  "nonce": "",
  "source": "",
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * cpksver **required** `string`: The device/version ID from which to request the restrictions.
  * licenseTypes `string` (values: BOTH, CONCURRENT, DOWNLOAD): The type of access license to request. If not specified, the default is BOTH.
  * locale `string`: ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
  * nonce **required** `string`: The client nonce value.
  * source **required** `string`: String to identify the originator of this request.
  * volumeId **required** `string`: The volume to request concurrent/download restrictions for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [RequestAccess](#requestaccess)

### myconfig.syncVolumeLicenses
Request downloaded content access for specified volumes on the My eBooks shelf.


```js
google_books.myconfig.syncVolumeLicenses({
  "cpksver": "",
  "nonce": "",
  "source": ""
}, context)
```

#### Input
* input `object`
  * cpksver **required** `string`: The device/version ID from which to release the restriction.
  * features `array`: List of features supported by the client, i.e., 'RENTALS'
  * includeNonComicsSeries `boolean`: Set to true to include non-comics series. Defaults to false.
  * locale `string`: ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
  * nonce **required** `string`: The client nonce value.
  * showPreorders `boolean`: Set to true to show pre-ordered books. Defaults to false.
  * source **required** `string`: String to identify the originator of this request.
  * volumeIds `array`: The volume(s) to request download restrictions for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Volumes](#volumes)

### myconfig.updateUserSettings
Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.


```js
google_books.myconfig.updateUserSettings({}, context)
```

#### Input
* input `object`
  * body [Usersettings](#usersettings)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Usersettings](#usersettings)

### mylibrary.annotations.list
Retrieves a list of annotations, possibly filtered.


```js
google_books.mylibrary.annotations.list({}, context)
```

#### Input
* input `object`
  * contentVersion `string`: The content version for the requested volume.
  * layerId `string`: The layer ID to limit annotation by.
  * layerIds `array`: The layer ID(s) to limit annotation by.
  * maxResults `integer`: Maximum number of results to return
  * pageToken `string`: The value of the nextToken from the previous page.
  * showDeleted `boolean`: Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
  * source `string`: String to identify the originator of this request.
  * updatedMax `string`: RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
  * updatedMin `string`: RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
  * volumeId `string`: The volume to restrict annotations to.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Annotations](#annotations)

### mylibrary.annotations.insert
Inserts a new annotation.


```js
google_books.mylibrary.annotations.insert({}, context)
```

#### Input
* input `object`
  * annotationId `string`: The ID for the annotation to insert.
  * body [Annotation](#annotation)
  * country `string`: ISO-3166-1 code to override the IP-based location.
  * showOnlySummaryInResponse `boolean`: Requests that only the summary of the specified layer be provided in the response.
  * source `string`: String to identify the originator of this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Annotation](#annotation)

### mylibrary.annotations.summary
Gets the summary of specified layers.


```js
google_books.mylibrary.annotations.summary({
  "layerIds": [],
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * layerIds **required** `array`: Array of layer IDs to get the summary for.
  * volumeId **required** `string`: Volume id to get the summary for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AnnotationsSummary](#annotationssummary)

### mylibrary.annotations.delete
Deletes an annotation.


```js
google_books.mylibrary.annotations.delete({
  "annotationId": ""
}, context)
```

#### Input
* input `object`
  * annotationId **required** `string`: The ID for the annotation to delete.
  * source `string`: String to identify the originator of this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### mylibrary.annotations.update
Updates an existing annotation.


```js
google_books.mylibrary.annotations.update({
  "annotationId": ""
}, context)
```

#### Input
* input `object`
  * annotationId **required** `string`: The ID for the annotation to update.
  * body [Annotation](#annotation)
  * source `string`: String to identify the originator of this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Annotation](#annotation)

### mylibrary.bookshelves.list
Retrieves a list of bookshelves belonging to the authenticated user.


```js
google_books.mylibrary.bookshelves.list({}, context)
```

#### Input
* input `object`
  * source `string`: String to identify the originator of this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Bookshelves](#bookshelves)

### mylibrary.bookshelves.get
Retrieves metadata for a specific bookshelf belonging to the authenticated user.


```js
google_books.mylibrary.bookshelves.get({
  "shelf": ""
}, context)
```

#### Input
* input `object`
  * shelf **required** `string`: ID of bookshelf to retrieve.
  * source `string`: String to identify the originator of this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Bookshelf](#bookshelf)

### mylibrary.bookshelves.addVolume
Adds a volume to a bookshelf.


```js
google_books.mylibrary.bookshelves.addVolume({
  "shelf": "",
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * reason `string` (values: IOS_PREX, IOS_SEARCH, ONBOARDING): The reason for which the book is added to the library.
  * shelf **required** `string`: ID of bookshelf to which to add a volume.
  * source `string`: String to identify the originator of this request.
  * volumeId **required** `string`: ID of volume to add.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### mylibrary.bookshelves.clearVolumes
Clears all volumes from a bookshelf.


```js
google_books.mylibrary.bookshelves.clearVolumes({
  "shelf": ""
}, context)
```

#### Input
* input `object`
  * shelf **required** `string`: ID of bookshelf from which to remove a volume.
  * source `string`: String to identify the originator of this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### mylibrary.bookshelves.moveVolume
Moves a volume within a bookshelf.


```js
google_books.mylibrary.bookshelves.moveVolume({
  "shelf": "",
  "volumeId": "",
  "volumePosition": 0
}, context)
```

#### Input
* input `object`
  * shelf **required** `string`: ID of bookshelf with the volume.
  * source `string`: String to identify the originator of this request.
  * volumeId **required** `string`: ID of volume to move.
  * volumePosition **required** `integer`: Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### mylibrary.bookshelves.removeVolume
Removes a volume from a bookshelf.


```js
google_books.mylibrary.bookshelves.removeVolume({
  "shelf": "",
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * reason `string` (values: ONBOARDING): The reason for which the book is removed from the library.
  * shelf **required** `string`: ID of bookshelf from which to remove a volume.
  * source `string`: String to identify the originator of this request.
  * volumeId **required** `string`: ID of volume to remove.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### mylibrary.bookshelves.volumes.list
Gets volume information for volumes on a bookshelf.


```js
google_books.mylibrary.bookshelves.volumes.list({
  "shelf": ""
}, context)
```

#### Input
* input `object`
  * country `string`: ISO-3166-1 code to override the IP-based location.
  * maxResults `integer`: Maximum number of results to return
  * projection `string` (values: full, lite): Restrict information returned to a set of selected fields.
  * q `string`: Full-text search query string in this bookshelf.
  * shelf **required** `string`: The bookshelf ID or name retrieve volumes for.
  * showPreorders `boolean`: Set to true to show pre-ordered books. Defaults to false.
  * source `string`: String to identify the originator of this request.
  * startIndex `integer`: Index of the first element to return (starts at 0)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Volumes](#volumes)

### mylibrary.readingpositions.get
Retrieves my reading position information for a volume.


```js
google_books.mylibrary.readingpositions.get({
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * contentVersion `string`: Volume content version for which this reading position is requested.
  * source `string`: String to identify the originator of this request.
  * volumeId **required** `string`: ID of volume for which to retrieve a reading position.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ReadingPosition](#readingposition)

### mylibrary.readingpositions.setPosition
Sets my reading position information for a volume.


```js
google_books.mylibrary.readingpositions.setPosition({
  "position": "",
  "timestamp": "",
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * action `string` (values: bookmark, chapter, next-page, prev-page, scroll, search): Action that caused this reading position to be set.
  * contentVersion `string`: Volume content version for which this reading position applies.
  * deviceCookie `string`: Random persistent device cookie optional on set position.
  * position **required** `string`: Position string for the new volume reading position.
  * source `string`: String to identify the originator of this request.
  * timestamp **required** `string`: RFC 3339 UTC format timestamp associated with this reading position.
  * volumeId **required** `string`: ID of volume for which to update the reading position.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### notification.get
Returns notification details for a given notification id.


```js
google_books.notification.get({
  "notification_id": ""
}, context)
```

#### Input
* input `object`
  * locale `string`: ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
  * notification_id **required** `string`: String to identify the notification.
  * source `string`: String to identify the originator of this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Notification](#notification)

### onboarding.listCategories
List categories for onboarding experience.


```js
google_books.onboarding.listCategories({}, context)
```

#### Input
* input `object`
  * locale `string`: ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Category](#category)

### onboarding.listCategoryVolumes
List available volumes under categories for onboarding experience.


```js
google_books.onboarding.listCategoryVolumes({}, context)
```

#### Input
* input `object`
  * categoryId `array`: List of category ids requested.
  * locale `string`: ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
  * maxAllowedMaturityRating `string` (values: mature, not-mature): The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
  * pageSize `integer`: Number of maximum results per page to be included in the response.
  * pageToken `string`: The value of the nextToken from the previous page.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Volume2](#volume2)

### personalizedstream.get
Returns a stream of personalized book clusters


```js
google_books.personalizedstream.get({}, context)
```

#### Input
* input `object`
  * locale `string`: ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
  * maxAllowedMaturityRating `string` (values: mature, not-mature): The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
  * source `string`: String to identify the originator of this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Discoveryclusters](#discoveryclusters)

### promooffer.accept



```js
google_books.promooffer.accept({}, context)
```

#### Input
* input `object`
  * androidId `string`: device android_id
  * device `string`: device device
  * manufacturer `string`: device manufacturer
  * model `string`: device model
  * offerId `string`
  * product `string`: device product
  * serial `string`: device serial
  * volumeId `string`: Volume id to exercise the offer
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### promooffer.dismiss



```js
google_books.promooffer.dismiss({}, context)
```

#### Input
* input `object`
  * androidId `string`: device android_id
  * device `string`: device device
  * manufacturer `string`: device manufacturer
  * model `string`: device model
  * offerId `string`: Offer to dimiss
  * product `string`: device product
  * serial `string`: device serial
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### promooffer.get
Returns a list of promo offers available to the user


```js
google_books.promooffer.get({}, context)
```

#### Input
* input `object`
  * androidId `string`: device android_id
  * device `string`: device device
  * manufacturer `string`: device manufacturer
  * model `string`: device model
  * product `string`: device product
  * serial `string`: device serial
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Offers](#offers)

### series.get
Returns Series metadata for the given series ids.


```js
google_books.series.get({
  "series_id": []
}, context)
```

#### Input
* input `object`
  * series_id **required** `array`: String that identifies the series
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Series](#series)

### series.membership.get
Returns Series membership data given the series id.


```js
google_books.series.membership.get({
  "series_id": ""
}, context)
```

#### Input
* input `object`
  * page_size `integer`: Number of maximum results per page to be included in the response.
  * page_token `string`: The value of the nextToken from the previous page.
  * series_id **required** `string`: String that identifies the series
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Seriesmembership](#seriesmembership)

### bookshelves.list
Retrieves a list of public bookshelves for the specified user.


```js
google_books.bookshelves.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * source `string`: String to identify the originator of this request.
  * userId **required** `string`: ID of user for whom to retrieve bookshelves.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Bookshelves](#bookshelves)

### bookshelves.get
Retrieves metadata for a specific bookshelf for the specified user.


```js
google_books.bookshelves.get({
  "shelf": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * shelf **required** `string`: ID of bookshelf to retrieve.
  * source `string`: String to identify the originator of this request.
  * userId **required** `string`: ID of user for whom to retrieve bookshelves.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Bookshelf](#bookshelf)

### bookshelves.volumes.list
Retrieves volumes in a specific bookshelf for the specified user.


```js
google_books.bookshelves.volumes.list({
  "shelf": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * maxResults `integer`: Maximum number of results to return
  * shelf **required** `string`: ID of bookshelf to retrieve volumes.
  * showPreorders `boolean`: Set to true to show pre-ordered books. Defaults to false.
  * source `string`: String to identify the originator of this request.
  * startIndex `integer`: Index of the first element to return (starts at 0)
  * userId **required** `string`: ID of user for whom to retrieve bookshelf volumes.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Volumes](#volumes)

### volumes.list
Performs a book search.


```js
google_books.volumes.list({
  "q": ""
}, context)
```

#### Input
* input `object`
  * download `string` (values: epub): Restrict to volumes by download availability.
  * filter `string` (values: ebooks, free-ebooks, full, paid-ebooks, partial): Filter search results.
  * langRestrict `string`: Restrict results to books with this language code.
  * libraryRestrict `string` (values: my-library, no-restrict): Restrict search to this user's library.
  * maxAllowedMaturityRating `string` (values: mature, not-mature): The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
  * maxResults `integer`: Maximum number of results to return.
  * orderBy `string` (values: newest, relevance): Sort search results.
  * partner `string`: Restrict and brand results for partner ID.
  * printType `string` (values: all, books, magazines): Restrict to books or magazines.
  * projection `string` (values: full, lite): Restrict information returned to a set of selected fields.
  * q **required** `string`: Full-text search query string.
  * showPreorders `boolean`: Set to true to show books available for preorder. Defaults to false.
  * source `string`: String to identify the originator of this request.
  * startIndex `integer`: Index of the first result to return (starts at 0)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Volumes](#volumes)

### volumes.mybooks.list
Return a list of books in My Library.


```js
google_books.volumes.mybooks.list({}, context)
```

#### Input
* input `object`
  * acquireMethod `array`: How the book was acquired
  * country `string`: ISO-3166-1 code to override the IP-based location.
  * locale `string`: ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
  * maxResults `integer`: Maximum number of results to return.
  * processingState `array`: The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
  * source `string`: String to identify the originator of this request.
  * startIndex `integer`: Index of the first result to return (starts at 0)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Volumes](#volumes)

### volumes.recommended.list
Return a list of recommended books for the current user.


```js
google_books.volumes.recommended.list({}, context)
```

#### Input
* input `object`
  * locale `string`: ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
  * maxAllowedMaturityRating `string` (values: mature, not-mature): The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
  * source `string`: String to identify the originator of this request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Volumes](#volumes)

### volumes.recommended.rate
Rate a recommended book for the current user.


```js
google_books.volumes.recommended.rate({
  "rating": "",
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * locale `string`: ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
  * rating **required** `string` (values: HAVE_IT, NOT_INTERESTED): Rating to be given to the volume.
  * source `string`: String to identify the originator of this request.
  * volumeId **required** `string`: ID of the source volume.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [BooksVolumesRecommendedRateResponse](#booksvolumesrecommendedrateresponse)

### volumes.useruploaded.list
Return a list of books uploaded by the current user.


```js
google_books.volumes.useruploaded.list({}, context)
```

#### Input
* input `object`
  * locale `string`: ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
  * maxResults `integer`: Maximum number of results to return.
  * processingState `array`: The processing state of the user uploaded volumes to be returned.
  * source `string`: String to identify the originator of this request.
  * startIndex `integer`: Index of the first result to return (starts at 0)
  * volumeId `array`: The ids of the volumes to be returned. If not specified all that match the processingState are returned.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Volumes](#volumes)

### volumes.get
Gets volume information for a single volume.


```js
google_books.volumes.get({
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * country `string`: ISO-3166-1 code to override the IP-based location.
  * includeNonComicsSeries `boolean`: Set to true to include non-comics series. Defaults to false.
  * partner `string`: Brand results for partner ID.
  * projection `string` (values: full, lite): Restrict information returned to a set of selected fields.
  * source `string`: String to identify the originator of this request.
  * user_library_consistent_read `boolean`
  * volumeId **required** `string`: ID of volume to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Volume](#volume)

### volumes.associated.list
Return a list of associated books.


```js
google_books.volumes.associated.list({
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * association `string` (values: end-of-sample, end-of-volume, related-for-play): Association type.
  * locale `string`: ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
  * maxAllowedMaturityRating `string` (values: mature, not-mature): The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
  * source `string`: String to identify the originator of this request.
  * volumeId **required** `string`: ID of the source volume.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Volumes](#volumes)

### layers.volumeAnnotations.list
Gets the volume annotations for a volume and layer.


```js
google_books.layers.volumeAnnotations.list({
  "contentVersion": "",
  "layerId": "",
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * contentVersion **required** `string`: The content version for the requested volume.
  * endOffset `string`: The end offset to end retrieving data from.
  * endPosition `string`: The end position to end retrieving data from.
  * layerId **required** `string`: The ID for the layer to get the annotations.
  * locale `string`: The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
  * maxResults `integer`: Maximum number of results to return
  * pageToken `string`: The value of the nextToken from the previous page.
  * showDeleted `boolean`: Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
  * source `string`: String to identify the originator of this request.
  * startOffset `string`: The start offset to start retrieving data from.
  * startPosition `string`: The start position to start retrieving data from.
  * updatedMax `string`: RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
  * updatedMin `string`: RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
  * volumeAnnotationsVersion `string`: The version of the volume annotations that you are requesting.
  * volumeId **required** `string`: The volume to retrieve annotations for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Volumeannotations](#volumeannotations)

### layers.volumeAnnotations.get
Gets the volume annotation.


```js
google_books.layers.volumeAnnotations.get({
  "annotationId": "",
  "layerId": "",
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * annotationId **required** `string`: The ID of the volume annotation to retrieve.
  * layerId **required** `string`: The ID for the layer to get the annotations.
  * locale `string`: The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
  * source `string`: String to identify the originator of this request.
  * volumeId **required** `string`: The volume to retrieve annotations for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Volumeannotation](#volumeannotation)

### layers.annotationData.list
Gets the annotation data for a volume and layer.


```js
google_books.layers.annotationData.list({
  "contentVersion": "",
  "layerId": "",
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * annotationDataId `array`: The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
  * contentVersion **required** `string`: The content version for the requested volume.
  * h `integer`: The requested pixel height for any images. If height is provided width must also be provided.
  * layerId **required** `string`: The ID for the layer to get the annotation data.
  * locale `string`: The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
  * maxResults `integer`: Maximum number of results to return
  * pageToken `string`: The value of the nextToken from the previous page.
  * scale `integer`: The requested scale for the image.
  * source `string`: String to identify the originator of this request.
  * updatedMax `string`: RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
  * updatedMin `string`: RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
  * volumeId **required** `string`: The volume to retrieve annotation data for.
  * w `integer`: The requested pixel width for any images. If width is provided height must also be provided.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Annotationsdata](#annotationsdata)

### layers.annotationData.get
Gets the annotation data.


```js
google_books.layers.annotationData.get({
  "annotationDataId": "",
  "contentVersion": "",
  "layerId": "",
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * allowWebDefinitions `boolean`: For the dictionary layer. Whether or not to allow web definitions.
  * annotationDataId **required** `string`: The ID of the annotation data to retrieve.
  * contentVersion **required** `string`: The content version for the volume you are trying to retrieve.
  * h `integer`: The requested pixel height for any images. If height is provided width must also be provided.
  * layerId **required** `string`: The ID for the layer to get the annotations.
  * locale `string`: The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
  * scale `integer`: The requested scale for the image.
  * source `string`: String to identify the originator of this request.
  * volumeId **required** `string`: The volume to retrieve annotations for.
  * w `integer`: The requested pixel width for any images. If width is provided height must also be provided.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Annotationdata](#annotationdata)

### layers.list
List the layer summaries for a volume.


```js
google_books.layers.list({
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * contentVersion `string`: The content version for the requested volume.
  * maxResults `integer`: Maximum number of results to return
  * pageToken `string`: The value of the nextToken from the previous page.
  * source `string`: String to identify the originator of this request.
  * volumeId **required** `string`: The volume to retrieve layers for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Layersummaries](#layersummaries)

### layers.get
Gets the layer summary for a volume.


```js
google_books.layers.get({
  "summaryId": "",
  "volumeId": ""
}, context)
```

#### Input
* input `object`
  * contentVersion `string`: The content version for the requested volume.
  * source `string`: String to identify the originator of this request.
  * summaryId **required** `string`: The ID for the layer to get the summary for.
  * volumeId **required** `string`: The volume to retrieve layers for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Layersummary](#layersummary)



## Definitions

### Annotation
* Annotation `object`
  * afterSelectedText `string`: Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.
  * beforeSelectedText `string`: Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.
  * clientVersionRanges `object`: Selection ranges sent from the client.
    * cfiRange [BooksAnnotationsRange](#booksannotationsrange)
    * contentVersion `string`: Content version the client sent in.
    * gbImageRange [BooksAnnotationsRange](#booksannotationsrange)
    * gbTextRange [BooksAnnotationsRange](#booksannotationsrange)
    * imageCfiRange [BooksAnnotationsRange](#booksannotationsrange)
  * created `string`: Timestamp for the created time of this annotation.
  * currentVersionRanges `object`: Selection ranges for the most recent content version.
    * cfiRange [BooksAnnotationsRange](#booksannotationsrange)
    * contentVersion `string`: Content version applicable to ranges below.
    * gbImageRange [BooksAnnotationsRange](#booksannotationsrange)
    * gbTextRange [BooksAnnotationsRange](#booksannotationsrange)
    * imageCfiRange [BooksAnnotationsRange](#booksannotationsrange)
  * data `string`: User-created data for this annotation.
  * deleted `boolean`: Indicates that this annotation is deleted.
  * highlightStyle `string`: The highlight style for this annotation.
  * id `string`: Id of this annotation, in the form of a GUID.
  * kind `string`: Resource type.
  * layerId `string`: The layer this annotation is for.
  * layerSummary `object`
    * allowedCharacterCount `integer`: Maximum allowed characters on this layer, especially for the "copy" layer.
    * limitType `string`: Type of limitation on this layer. "limited" or "unlimited" for the "copy" layer.
    * remainingCharacterCount `integer`: Remaining allowed characters on this layer, especially for the "copy" layer.
  * pageIds `array`: Pages that this annotation spans.
    * items `string`
  * selectedText `string`: Excerpt from the volume.
  * selfLink `string`: URL to this resource.
  * updated `string`: Timestamp for the last time this annotation was modified.
  * volumeId `string`: The volume that this annotation belongs to.

### Annotationdata
* Annotationdata `object`
  * annotationType `string`: The type of annotation this data is for.
  * encoded_data `string`: Base64 encoded data for this annotation data.
  * id `string`: Unique id for this annotation data.
  * kind `string`: Resource Type
  * layerId `string`: The Layer id for this data. *
  * selfLink `string`: URL for this resource. *
  * updated `string`: Timestamp for the last time this data was updated. (RFC 3339 UTC date-time format).
  * volumeId `string`: The volume id for this data. *

### Annotations
* Annotations `object`
  * items `array`: A list of annotations.
    * items [Annotation](#annotation)
  * kind `string`: Resource type.
  * nextPageToken `string`: Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
  * totalItems `integer`: Total number of annotations found. This may be greater than the number of notes returned in this response if results have been paginated.

### AnnotationsSummary
* AnnotationsSummary `object`
  * kind `string`
  * layers `array`
    * items `object`
      * allowedCharacterCount `integer`
      * layerId `string`
      * limitType `string`
      * remainingCharacterCount `integer`
      * updated `string`

### Annotationsdata
* Annotationsdata `object`
  * items `array`: A list of Annotation Data.
    * items [Annotationdata](#annotationdata)
  * kind `string`: Resource type
  * nextPageToken `string`: Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
  * totalItems `integer`: The total number of volume annotations found.

### BooksAnnotationsRange
* BooksAnnotationsRange `object`
  * endOffset `string`: The offset from the ending position.
  * endPosition `string`: The ending position for the range.
  * startOffset `string`: The offset from the starting position.
  * startPosition `string`: The starting position for the range.

### BooksCloudloadingResource
* BooksCloudloadingResource `object`
  * author `string`
  * processingState `string`
  * title `string`
  * volumeId `string`

### BooksVolumesRecommendedRateResponse
* BooksVolumesRecommendedRateResponse `object`
  * consistency_token `string`

### Bookshelf
* Bookshelf `object`
  * access `string`: Whether this bookshelf is PUBLIC or PRIVATE.
  * created `string`: Created time for this bookshelf (formatted UTC timestamp with millisecond resolution).
  * description `string`: Description of this bookshelf.
  * id `integer`: Id of this bookshelf, only unique by user.
  * kind `string`: Resource type for bookshelf metadata.
  * selfLink `string`: URL to this resource.
  * title `string`: Title of this bookshelf.
  * updated `string`: Last modified time of this bookshelf (formatted UTC timestamp with millisecond resolution).
  * volumeCount `integer`: Number of volumes in this bookshelf.
  * volumesLastUpdated `string`: Last time a volume was added or removed from this bookshelf (formatted UTC timestamp with millisecond resolution).

### Bookshelves
* Bookshelves `object`
  * items `array`: A list of bookshelves.
    * items [Bookshelf](#bookshelf)
  * kind `string`: Resource type.

### Category
* Category `object`
  * items `array`: A list of onboarding categories.
    * items `object`
      * badgeUrl `string`
      * categoryId `string`
      * name `string`
  * kind `string`: Resource type.

### ConcurrentAccessRestriction
* ConcurrentAccessRestriction `object`
  * deviceAllowed `boolean`: Whether access is granted for this (user, device, volume).
  * kind `string`: Resource type.
  * maxConcurrentDevices `integer`: The maximum number of concurrent access licenses for this volume.
  * message `string`: Error/warning message.
  * nonce `string`: Client nonce for verification. Download access and client-validation only.
  * reasonCode `string`: Error/warning reason code.
  * restricted `boolean`: Whether this volume has any concurrent access restrictions.
  * signature `string`: Response signature.
  * source `string`: Client app identifier for verification. Download access and client-validation only.
  * timeWindowSeconds `integer`: Time in seconds for license auto-expiration.
  * volumeId `string`: Identifies the volume for which this entry applies.

### Dictlayerdata
* Dictlayerdata `object`
  * common `object`
    * title `string`: The display title and localized canonical name to use when searching for this entity on Google search.
  * dict `object`
    * source `object`: The source, url and attribution for this dictionary data.
      * attribution `string`
      * url `string`
    * words `array`
      * items `object`
        * derivatives `array`
          * items `object`
            * source `object`
              * attribution `string`
              * url `string`
            * text `string`
        * examples `array`
          * items `object`
            * source `object`
              * attribution `string`
              * url `string`
            * text `string`
        * senses `array`
          * items `object`
            * conjugations `array`
              * items `object`
                * type `string`
                * value `string`
            * definitions `array`
              * items `object`
                * definition `string`
                * examples `array`
                  * items `object`
                    * source `object`
                      * attribution `string`
                      * url `string`
                    * text `string`
            * partOfSpeech `string`
            * pronunciation `string`
            * pronunciationUrl `string`
            * source `object`
              * attribution `string`
              * url `string`
            * syllabification `string`
            * synonyms `array`
              * items `object`
                * source `object`
                  * attribution `string`
                  * url `string`
                * text `string`
        * source `object`: The words with different meanings but not related words, e.g. "go" (game) and "go" (verb).
          * attribution `string`
          * url `string`
  * kind `string`

### Discoveryclusters
* Discoveryclusters `object`
  * clusters `array`
    * items `object`
      * banner_with_content_container `object`
        * fillColorArgb `string`
        * imageUrl `string`
        * maskColorArgb `string`
        * moreButtonText `string`
        * moreButtonUrl `string`
        * textColorArgb `string`
      * subTitle `string`
      * title `string`
      * totalVolumes `integer`
      * uid `string`
      * volumes `array`
        * items [Volume](#volume)
  * kind `string`: Resorce type.
  * totalClusters `integer`

### DownloadAccessRestriction
* DownloadAccessRestriction `object`
  * deviceAllowed `boolean`: If restricted, whether access is granted for this (user, device, volume).
  * downloadsAcquired `integer`: If restricted, the number of content download licenses already acquired (including the requesting client, if licensed).
  * justAcquired `boolean`: If deviceAllowed, whether access was just acquired with this request.
  * kind `string`: Resource type.
  * maxDownloadDevices `integer`: If restricted, the maximum number of content download licenses for this volume.
  * message `string`: Error/warning message.
  * nonce `string`: Client nonce for verification. Download access and client-validation only.
  * reasonCode `string`: Error/warning reason code. Additional codes may be added in the future. 0 OK 100 ACCESS_DENIED_PUBLISHER_LIMIT 101 ACCESS_DENIED_LIMIT 200 WARNING_USED_LAST_ACCESS
  * restricted `boolean`: Whether this volume has any download access restrictions.
  * signature `string`: Response signature.
  * source `string`: Client app identifier for verification. Download access and client-validation only.
  * volumeId `string`: Identifies the volume for which this entry applies.

### DownloadAccesses
* DownloadAccesses `object`
  * downloadAccessList `array`: A list of download access responses.
    * items [DownloadAccessRestriction](#downloadaccessrestriction)
  * kind `string`: Resource type.

### FamilyInfo
* FamilyInfo `object`
  * kind `string`: Resource type.
  * membership `object`: Family membership info of the user that made the request.
    * acquirePermission `string`: Restrictions on user buying and acquiring content.
    * ageGroup `string`: The age group of the user.
    * allowedMaturityRating `string`: The maximum allowed maturity rating for the user.
    * isInFamily `boolean`
    * role `string`: The role of the user in the family.

### Geolayerdata
* Geolayerdata `object`
  * common `object`
    * lang `string`: The language of the information url and description.
    * previewImageUrl `string`: The URL for the preview image information.
    * snippet `string`: The description for this location.
    * snippetUrl `string`: The URL for information for this location. Ex: wikipedia link.
    * title `string`: The display title and localized canonical name to use when searching for this entity on Google search.
  * geo `object`
    * boundary `array`: The boundary of the location as a set of loops containing pairs of latitude, longitude coordinates.
      * items `array`
        * items `object`
          * latitude `integer`
          * longitude `integer`
    * cachePolicy `string`: The cache policy active for this data. EX: UNRESTRICTED, RESTRICTED, NEVER
    * countryCode `string`: The country code of the location.
    * latitude `number`: The latitude of the location.
    * longitude `number`: The longitude of the location.
    * mapType `string`: The type of map that should be used for this location. EX: HYBRID, ROADMAP, SATELLITE, TERRAIN
    * viewport `object`: The viewport for showing this location. This is a latitude, longitude rectangle.
      * hi `object`
        * latitude `number`
        * longitude `number`
      * lo `object`
        * latitude `number`
        * longitude `number`
    * zoom `integer`: The Zoom level to use for the map. Zoom levels between 0 (the lowest zoom level, in which the entire world can be seen on one map) to 21+ (down to individual buildings). See: https://developers.google.com/maps/documentation/staticmaps/#Zoomlevels
  * kind `string`

### Layersummaries
* Layersummaries `object`
  * items `array`: A list of layer summary items.
    * items [Layersummary](#layersummary)
  * kind `string`: Resource type.
  * totalItems `integer`: The total number of layer summaries found.

### Layersummary
* Layersummary `object`
  * annotationCount `integer`: The number of annotations for this layer.
  * annotationTypes `array`: The list of annotation types contained for this layer.
    * items `string`
  * annotationsDataLink `string`: Link to get data for this annotation.
  * annotationsLink `string`: The link to get the annotations for this layer.
  * contentVersion `string`: The content version this resource is for.
  * dataCount `integer`: The number of data items for this layer.
  * id `string`: Unique id of this layer summary.
  * kind `string`: Resource Type
  * layerId `string`: The layer id for this summary.
  * selfLink `string`: URL to this resource.
  * updated `string`: Timestamp for the last time an item in this layer was updated. (RFC 3339 UTC date-time format).
  * volumeAnnotationsVersion `string`: The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately.
  * volumeId `string`: The volume id this resource is for.

### Metadata
* Metadata `object`
  * items `array`: A list of offline dictionary metadata.
    * items `object`
      * download_url `string`
      * encrypted_key `string`
      * language `string`
      * size `string`
      * version `string`
  * kind `string`: Resource type.

### Notification
* Notification `object`
  * body `string`
  * crmExperimentIds `array`: The list of crm experiment ids.
    * items `string`
  * doc_id `string`
  * doc_type `string`
  * dont_show_notification `boolean`
  * iconUrl `string`
  * kind `string`: Resource type.
  * notificationGroup `string`
  * notification_type `string`
  * pcampaign_id `string`
  * reason `string`
  * show_notification_settings_action `boolean`
  * targetUrl `string`
  * title `string`

### Offers
* Offers `object`
  * items `array`: A list of offers.
    * items `object`
      * artUrl `string`
      * gservicesKey `string`
      * id `string`
      * items `array`
        * items `object`
          * author `string`
          * canonicalVolumeLink `string`
          * coverUrl `string`
          * description `string`
          * title `string`
          * volumeId `string`
  * kind `string`: Resource type.

### ReadingPosition
* ReadingPosition `object`
  * epubCfiPosition `string`: Position in an EPUB as a CFI.
  * gbImagePosition `string`: Position in a volume for image-based content.
  * gbTextPosition `string`: Position in a volume for text-based content.
  * kind `string`: Resource type for a reading position.
  * pdfPosition `string`: Position in a PDF file.
  * updated `string`: Timestamp when this reading position was last updated (formatted UTC timestamp with millisecond resolution).
  * volumeId `string`: Volume id associated with this reading position.

### RequestAccess
* RequestAccess `object`
  * concurrentAccess [ConcurrentAccessRestriction](#concurrentaccessrestriction)
  * downloadAccess [DownloadAccessRestriction](#downloadaccessrestriction)
  * kind `string`: Resource type.

### Review
* Review `object`
  * author `object`: Author of this review.
    * displayName `string`: Name of this person.
  * content `string`: Review text.
  * date `string`: Date of this review.
  * fullTextUrl `string`: URL for the full review text, for reviews gathered from the web.
  * kind `string`: Resource type for a review.
  * rating `string`: Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED.
  * source `object`: Information regarding the source of this review, when the review is not from a Google Books user.
    * description `string`: Name of the source.
    * extraDescription `string`: Extra text about the source of the review.
    * url `string`: URL of the source of the review.
  * title `string`: Title for this review.
  * type `string`: Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER.
  * volumeId `string`: Volume that this review is for.

### Series
* Series `object`
  * kind `string`: Resource type.
  * series `array`
    * items `object`
      * bannerImageUrl `string`
      * imageUrl `string`
      * seriesId `string`
      * seriesType `string`
      * title `string`

### Seriesmembership
* Seriesmembership `object`
  * kind `string`: Resorce type.
  * member `array`
    * items [Volume](#volume)
  * nextPageToken `string`

### Usersettings
* Usersettings `object`
  * kind `string`: Resource type.
  * notesExport `object`: User settings in sub-objects, each for different purposes.
    * folderName `string`
    * isEnabled `boolean`
  * notification `object`
    * matchMyInterests `object`
      * opted_state `string`
    * moreFromAuthors `object`
      * opted_state `string`
    * moreFromSeries `object`
      * opted_state `string`
    * priceDrop `object`
      * opted_state `string`
    * rewardExpirations `object`
      * opted_state `string`

### Volume
* Volume `object`
  * accessInfo `object`: Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
    * accessViewStatus `string`: Combines the access and viewability of this volume into a single status field for this user. Values can be FULL_PURCHASED, FULL_PUBLIC_DOMAIN, SAMPLE or NONE. (In LITE projection.)
    * country `string`: The two-letter ISO_3166-1 country code for which this access information is valid. (In LITE projection.)
    * downloadAccess [DownloadAccessRestriction](#downloadaccessrestriction)
    * driveImportedContentLink `string`: URL to the Google Drive viewer if this volume is uploaded by the user by selecting the file from Google Drive.
    * embeddable `boolean`: Whether this volume can be embedded in a viewport using the Embedded Viewer API.
    * epub `object`: Information about epub content. (In LITE projection.)
      * acsTokenLink `string`: URL to retrieve ACS token for epub download. (In LITE projection.)
      * downloadLink `string`: URL to download epub. (In LITE projection.)
      * isAvailable `boolean`: Is a flowing text epub available either as public domain or for purchase. (In LITE projection.)
    * explicitOfflineLicenseManagement `boolean`: Whether this volume requires that the client explicitly request offline download license rather than have it done automatically when loading the content, if the client supports it.
    * pdf `object`: Information about pdf content. (In LITE projection.)
      * acsTokenLink `string`: URL to retrieve ACS token for pdf download. (In LITE projection.)
      * downloadLink `string`: URL to download pdf. (In LITE projection.)
      * isAvailable `boolean`: Is a scanned image pdf available either as public domain or for purchase. (In LITE projection.)
    * publicDomain `boolean`: Whether or not this book is public domain in the country listed above.
    * quoteSharingAllowed `boolean`: Whether quote sharing is allowed for this volume.
    * textToSpeechPermission `string`: Whether text-to-speech is permitted for this volume. Values can be ALLOWED, ALLOWED_FOR_ACCESSIBILITY, or NOT_ALLOWED.
    * viewOrderUrl `string`: For ordered but not yet processed orders, we give a URL that can be used to go to the appropriate Google Wallet page.
    * viewability `string`: The read access of a volume. Possible values are PARTIAL, ALL_PAGES, NO_PAGES or UNKNOWN. This value depends on the country listed above. A value of PARTIAL means that the publisher has allowed some portion of the volume to be viewed publicly, without purchase. This can apply to eBooks as well as non-eBooks. Public domain books will always have a value of ALL_PAGES.
    * webReaderLink `string`: URL to read this volume on the Google Books site. Link will not allow users to read non-viewable volumes.
  * etag `string`: Opaque identifier for a specific version of a volume resource. (In LITE projection)
  * id `string`: Unique identifier for a volume. (In LITE projection.)
  * kind `string`: Resource type for a volume. (In LITE projection.)
  * layerInfo `object`: What layers exist in this volume and high level information about them.
    * layers `array`: A layer should appear here if and only if the layer exists for this book.
      * items `object`
        * layerId `string`: The layer id of this layer (e.g. "geo").
        * volumeAnnotationsVersion `string`: The current version of this layer's volume annotations. Note that this version applies only to the data in the books.layers.volumeAnnotations.* responses. The actual annotation data is versioned separately.
  * recommendedInfo `object`: Recommendation related information for this volume.
    * explanation `string`: A text explaining why this volume is recommended.
  * saleInfo `object`: Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
    * buyLink `string`: URL to purchase this volume on the Google Books site. (In LITE projection)
    * country `string`: The two-letter ISO_3166-1 country code for which this sale information is valid. (In LITE projection.)
    * isEbook `boolean`: Whether or not this volume is an eBook (can be added to the My eBooks shelf).
    * listPrice `object`: Suggested retail price. (In LITE projection.)
      * amount `number`: Amount in the currency listed below. (In LITE projection.)
      * currencyCode `string`: An ISO 4217, three-letter currency code. (In LITE projection.)
    * offers `array`: Offers available for this volume (sales and rentals).
      * items `object`
        * finskyOfferType `integer`: The finsky offer type (e.g., PURCHASE=0 RENTAL=3)
        * giftable `boolean`: Indicates whether the offer is giftable.
        * listPrice `object`: Offer list (=undiscounted) price in Micros.
          * amountInMicros `number`
          * currencyCode `string`
        * rentalDuration `object`: The rental duration (for rental offers only).
          * count `number`
          * unit `string`
        * retailPrice `object`: Offer retail (=discounted) price in Micros
          * amountInMicros `number`
          * currencyCode `string`
    * onSaleDate `string`: The date on which this book is available for sale.
    * retailPrice `object`: The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.)
      * amount `number`: Amount in the currency listed below. (In LITE projection.)
      * currencyCode `string`: An ISO 4217, three-letter currency code. (In LITE projection.)
    * saleability `string`: Whether or not this book is available for sale or offered for free in the Google eBookstore for the country listed above. Possible values are FOR_SALE, FOR_RENTAL_ONLY, FOR_SALE_AND_RENTAL, FREE, NOT_FOR_SALE, or FOR_PREORDER.
  * searchInfo `object`: Search result information related to this volume.
    * textSnippet `string`: A text snippet containing the search query.
  * selfLink `string`: URL to this resource. (In LITE projection.)
  * userInfo `object`: User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
    * acquiredTime `string`: Timestamp when this volume was acquired by the user. (RFC 3339 UTC date-time format) Acquiring includes purchase, user upload, receiving family sharing, etc.
    * acquisitionType `integer`: How this volume was acquired.
    * copy `object`: Copy/Paste accounting information.
      * allowedCharacterCount `integer`
      * limitType `string`
      * remainingCharacterCount `integer`
      * updated `string`
    * entitlementType `integer`: Whether this volume is purchased, sample, pd download etc.
    * familySharing `object`: Information on the ability to share with the family.
      * familyRole `string`: The role of the user in the family.
      * isSharingAllowed `boolean`: Whether or not this volume can be shared with the family by the user. This includes sharing eligibility of both the volume and the user. If the value is true, the user can initiate a family sharing action.
      * isSharingDisabledByFop `boolean`: Whether or not sharing this volume is temporarily disabled due to issues with the Family Wallet.
    * isFamilySharedFromUser `boolean`: Whether or not the user shared this volume with the family.
    * isFamilySharedToUser `boolean`: Whether or not the user received this volume through family sharing.
    * isFamilySharingAllowed `boolean`: Deprecated: Replaced by familySharing.
    * isFamilySharingDisabledByFop `boolean`: Deprecated: Replaced by familySharing.
    * isInMyBooks `boolean`: Whether or not this volume is currently in "my books."
    * isPreordered `boolean`: Whether or not this volume was pre-ordered by the authenticated user making the request. (In LITE projection.)
    * isPurchased `boolean`: Whether or not this volume was purchased by the authenticated user making the request. (In LITE projection.)
    * isUploaded `boolean`: Whether or not this volume was user uploaded.
    * readingPosition [ReadingPosition](#readingposition)
    * rentalPeriod `object`: Period during this book is/was a valid rental.
      * endUtcSec `string`
      * startUtcSec `string`
    * rentalState `string`: Whether this book is an active or an expired rental.
    * review [Review](#review)
    * updated `string`: Timestamp when this volume was last modified by a user action, such as a reading position update, volume purchase or writing a review. (RFC 3339 UTC date-time format).
    * userUploadedVolumeInfo `object`
      * processingState `string`
  * volumeInfo `object`: General volume information.
    * allowAnonLogging `boolean`: Whether anonymous logging should be allowed.
    * authors `array`: The names of the authors and/or editors for this volume. (In LITE projection)
      * items `string`
    * averageRating `number`: The mean review rating for this volume. (min = 1.0, max = 5.0)
    * canonicalVolumeLink `string`: Canonical URL for a volume. (In LITE projection.)
    * categories `array`: A list of subject categories, such as "Fiction", "Suspense", etc.
      * items `string`
    * contentVersion `string`: An identifier for the version of the volume content (text & images). (In LITE projection)
    * description `string`: A synopsis of the volume. The text of the description is formatted in HTML and includes simple formatting elements, such as b, i, and br tags. (In LITE projection.)
    * dimensions `object`: Physical dimensions of this volume.
      * height `string`: Height or length of this volume (in cm).
      * thickness `string`: Thickness of this volume (in cm).
      * width `string`: Width of this volume (in cm).
    * imageLinks `object`: A list of image links for all the sizes that are available. (In LITE projection.)
      * extraLarge `string`: Image link for extra large size (width of ~1280 pixels). (In LITE projection)
      * large `string`: Image link for large size (width of ~800 pixels). (In LITE projection)
      * medium `string`: Image link for medium size (width of ~575 pixels). (In LITE projection)
      * small `string`: Image link for small size (width of ~300 pixels). (In LITE projection)
      * smallThumbnail `string`: Image link for small thumbnail size (width of ~80 pixels). (In LITE projection)
      * thumbnail `string`: Image link for thumbnail size (width of ~128 pixels). (In LITE projection)
    * industryIdentifiers `array`: Industry standard identifiers for this volume.
      * items `object`
        * identifier `string`: Industry specific volume identifier.
        * type `string`: Identifier type. Possible values are ISBN_10, ISBN_13, ISSN and OTHER.
    * infoLink `string`: URL to view information about this volume on the Google Books site. (In LITE projection)
    * language `string`: Best language for this volume (based on content). It is the two-letter ISO 639-1 code such as 'fr', 'en', etc.
    * mainCategory `string`: The main category to which this volume belongs. It will be the category from the categories list returned below that has the highest weight.
    * maturityRating `string`
    * pageCount `integer`: Total number of pages as per publisher metadata.
    * panelizationSummary `object`: A top-level summary of the panelization info in this volume.
      * containsEpubBubbles `boolean`
      * containsImageBubbles `boolean`
      * epubBubbleVersion `string`
      * imageBubbleVersion `string`
    * previewLink `string`: URL to preview this volume on the Google Books site.
    * printType `string`: Type of publication of this volume. Possible values are BOOK or MAGAZINE.
    * printedPageCount `integer`: Total number of printed pages in generated pdf representation.
    * publishedDate `string`: Date of publication. (In LITE projection.)
    * publisher `string`: Publisher of this volume. (In LITE projection.)
    * ratingsCount `integer`: The number of review ratings for this volume.
    * samplePageCount `integer`: Total number of sample pages as per publisher metadata.
    * seriesInfo [Volumeseriesinfo](#volumeseriesinfo)
    * subtitle `string`: Volume subtitle. (In LITE projection.)
    * title `string`: Volume title. (In LITE projection.)

### Volume2
* Volume2 `object`
  * items `array`: A list of volumes.
    * items [Volume](#volume)
  * kind `string`: Resource type.
  * nextPageToken `string`

### Volumeannotation
* Volumeannotation `object`
  * annotationDataId `string`: The annotation data id for this volume annotation.
  * annotationDataLink `string`: Link to get data for this annotation.
  * annotationType `string`: The type of annotation this is.
  * contentRanges `object`: The content ranges to identify the selected text.
    * cfiRange [BooksAnnotationsRange](#booksannotationsrange)
    * contentVersion `string`: Content version applicable to ranges below.
    * gbImageRange [BooksAnnotationsRange](#booksannotationsrange)
    * gbTextRange [BooksAnnotationsRange](#booksannotationsrange)
  * data `string`: Data for this annotation.
  * deleted `boolean`: Indicates that this annotation is deleted.
  * id `string`: Unique id of this volume annotation.
  * kind `string`: Resource Type
  * layerId `string`: The Layer this annotation is for.
  * pageIds `array`: Pages the annotation spans.
    * items `string`
  * selectedText `string`: Excerpt from the volume.
  * selfLink `string`: URL to this resource.
  * updated `string`: Timestamp for the last time this anntoation was updated. (RFC 3339 UTC date-time format).
  * volumeId `string`: The Volume this annotation is for.

### Volumeannotations
* Volumeannotations `object`
  * items `array`: A list of volume annotations.
    * items [Volumeannotation](#volumeannotation)
  * kind `string`: Resource type
  * nextPageToken `string`: Token to pass in for pagination for the next page. This will not be present if this request does not have more results.
  * totalItems `integer`: The total number of volume annotations found.
  * version `string`: The version string for all of the volume annotations in this layer (not just the ones in this response). Note: the version string doesn't apply to the annotation data, just the information in this response (e.g. the location of annotations in the book).

### Volumes
* Volumes `object`
  * items `array`: A list of volumes.
    * items [Volume](#volume)
  * kind `string`: Resource type.
  * totalItems `integer`: Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated.

### Volumeseriesinfo
* Volumeseriesinfo `object`
  * bookDisplayNumber `string`: The display number string. This should be used only for display purposes and the actual sequence should be inferred from the below orderNumber.
  * kind `string`: Resource type.
  * shortSeriesBookTitle `string`: Short book title in the context of the series.
  * volumeSeries `array`
    * items `object`
      * issue `array`: List of issues. Applicable only for Collection Edition and Omnibus.
        * items `object`
          * issueDisplayNumber `string`
          * issueOrderNumber `integer`
      * orderNumber `integer`: The book order number in the series.
      * seriesBookType `string`: The book type in the context of series. Examples - Single Issue, Collection Edition, etc.
      * seriesId `string`: The series id.


