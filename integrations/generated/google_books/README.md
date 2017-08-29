# @datafire/google_books

Client library for Books

## Installation and Usage
```bash
npm install --save datafire @datafire/google_books
```

```js
let datafire = require('datafire');
let google_books = require('@datafire/google_books').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_books.volumes.useruploaded.list({}).then(data => {
  console.log(data);
})
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_books.oauthRefresh(null, context)
```


### cloudloading.addBook



```js
google_books.cloudloading.addBook({}, context)
```

#### Parameters
* drive_document_id (string) - A drive document id. The upload_client_token must not be set.
* mime_type (string) - The document MIME type. It can be set only if the drive_document_id is set.
* name (string) - The document name. It can be set only if the drive_document_id is set.
* upload_client_token (string)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### cloudloading.deleteBook
Remove the book and its contents


```js
google_books.cloudloading.deleteBook({
  "volumeId": ""
}, context)
```

#### Parameters
* volumeId (string) **required** - The id of the book to be removed.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### cloudloading.updateBook



```js
google_books.cloudloading.updateBook({}, context)
```

#### Parameters
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### dictionary.listOfflineMetadata
Returns a list of offline dictionary metadata available


```js
google_books.dictionary.listOfflineMetadata({
  "cpksver": ""
}, context)
```

#### Parameters
* cpksver (string) **required** - The device/version ID from which to request the data.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### myconfig.getUserSettings
Gets the current settings for the user.


```js
google_books.myconfig.getUserSettings({}, context)
```

#### Parameters
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### myconfig.releaseDownloadAccess
Release downloaded content access restriction.


```js
google_books.myconfig.releaseDownloadAccess({
  "volumeIds": [],
  "cpksver": ""
}, context)
```

#### Parameters
* volumeIds (array) **required** - The volume(s) to release restrictions for.
* cpksver (string) **required** - The device/version ID from which to release the restriction.
* locale (string) - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### myconfig.requestAccess
Request concurrent and download access restrictions.


```js
google_books.myconfig.requestAccess({
  "source": "",
  "volumeId": "",
  "nonce": "",
  "cpksver": ""
}, context)
```

#### Parameters
* source (string) **required** - String to identify the originator of this request.
* volumeId (string) **required** - The volume to request concurrent/download restrictions for.
* nonce (string) **required** - The client nonce value.
* cpksver (string) **required** - The device/version ID from which to request the restrictions.
* licenseTypes (string) - The type of access license to request. If not specified, the default is BOTH.
* locale (string) - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### myconfig.syncVolumeLicenses
Request downloaded content access for specified volumes on the My eBooks shelf.


```js
google_books.myconfig.syncVolumeLicenses({
  "source": "",
  "nonce": "",
  "cpksver": ""
}, context)
```

#### Parameters
* source (string) **required** - String to identify the originator of this request.
* nonce (string) **required** - The client nonce value.
* cpksver (string) **required** - The device/version ID from which to release the restriction.
* features (array) - List of features supported by the client, i.e., 'RENTALS'
* includeNonComicsSeries (boolean) - Set to true to include non-comics series. Defaults to false.
* locale (string) - ISO-639-1, ISO-3166-1 codes for message localization, i.e. en_US.
* showPreorders (boolean) - Set to true to show pre-ordered books. Defaults to false.
* volumeIds (array) - The volume(s) to request download restrictions for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### myconfig.updateUserSettings
Sets the settings for the user. If a sub-object is specified, it will overwrite the existing sub-object stored in the server. Unspecified sub-objects will retain the existing value.


```js
google_books.myconfig.updateUserSettings({}, context)
```

#### Parameters
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.annotations.list
Retrieves a list of annotations, possibly filtered.


```js
google_books.mylibrary.annotations.list({}, context)
```

#### Parameters
* contentVersion (string) - The content version for the requested volume.
* layerId (string) - The layer ID to limit annotation by.
* layerIds (array) - The layer ID(s) to limit annotation by.
* maxResults (integer) - Maximum number of results to return
* pageToken (string) - The value of the nextToken from the previous page.
* showDeleted (boolean) - Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
* source (string) - String to identify the originator of this request.
* updatedMax (string) - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
* updatedMin (string) - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
* volumeId (string) - The volume to restrict annotations to.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.annotations.insert
Inserts a new annotation.


```js
google_books.mylibrary.annotations.insert({}, context)
```

#### Parameters
* annotationId (string) - The ID for the annotation to insert.
* body (object)
* country (string) - ISO-3166-1 code to override the IP-based location.
* showOnlySummaryInResponse (boolean) - Requests that only the summary of the specified layer be provided in the response.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.annotations.summary
Gets the summary of specified layers.


```js
google_books.mylibrary.annotations.summary({
  "layerIds": [],
  "volumeId": ""
}, context)
```

#### Parameters
* layerIds (array) **required** - Array of layer IDs to get the summary for.
* volumeId (string) **required** - Volume id to get the summary for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.annotations.delete
Deletes an annotation.


```js
google_books.mylibrary.annotations.delete({
  "annotationId": ""
}, context)
```

#### Parameters
* annotationId (string) **required** - The ID for the annotation to delete.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.annotations.update
Updates an existing annotation.


```js
google_books.mylibrary.annotations.update({
  "annotationId": ""
}, context)
```

#### Parameters
* annotationId (string) **required** - The ID for the annotation to update.
* source (string) - String to identify the originator of this request.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.bookshelves.list
Retrieves a list of bookshelves belonging to the authenticated user.


```js
google_books.mylibrary.bookshelves.list({}, context)
```

#### Parameters
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.bookshelves.get
Retrieves metadata for a specific bookshelf belonging to the authenticated user.


```js
google_books.mylibrary.bookshelves.get({
  "shelf": ""
}, context)
```

#### Parameters
* shelf (string) **required** - ID of bookshelf to retrieve.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.bookshelves.addVolume
Adds a volume to a bookshelf.


```js
google_books.mylibrary.bookshelves.addVolume({
  "shelf": "",
  "volumeId": ""
}, context)
```

#### Parameters
* shelf (string) **required** - ID of bookshelf to which to add a volume.
* volumeId (string) **required** - ID of volume to add.
* reason (string) - The reason for which the book is added to the library.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.bookshelves.clearVolumes
Clears all volumes from a bookshelf.


```js
google_books.mylibrary.bookshelves.clearVolumes({
  "shelf": ""
}, context)
```

#### Parameters
* shelf (string) **required** - ID of bookshelf from which to remove a volume.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.bookshelves.moveVolume
Moves a volume within a bookshelf.


```js
google_books.mylibrary.bookshelves.moveVolume({
  "shelf": "",
  "volumeId": "",
  "volumePosition": 0
}, context)
```

#### Parameters
* shelf (string) **required** - ID of bookshelf with the volume.
* volumeId (string) **required** - ID of volume to move.
* volumePosition (integer) **required** - Position on shelf to move the item (0 puts the item before the current first item, 1 puts it between the first and the second and so on.)
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.bookshelves.removeVolume
Removes a volume from a bookshelf.


```js
google_books.mylibrary.bookshelves.removeVolume({
  "shelf": "",
  "volumeId": ""
}, context)
```

#### Parameters
* shelf (string) **required** - ID of bookshelf from which to remove a volume.
* volumeId (string) **required** - ID of volume to remove.
* reason (string) - The reason for which the book is removed from the library.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.bookshelves.volumes.list
Gets volume information for volumes on a bookshelf.


```js
google_books.mylibrary.bookshelves.volumes.list({
  "shelf": ""
}, context)
```

#### Parameters
* shelf (string) **required** - The bookshelf ID or name retrieve volumes for.
* country (string) - ISO-3166-1 code to override the IP-based location.
* maxResults (integer) - Maximum number of results to return
* projection (string) - Restrict information returned to a set of selected fields.
* q (string) - Full-text search query string in this bookshelf.
* showPreorders (boolean) - Set to true to show pre-ordered books. Defaults to false.
* source (string) - String to identify the originator of this request.
* startIndex (integer) - Index of the first element to return (starts at 0)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.readingpositions.get
Retrieves my reading position information for a volume.


```js
google_books.mylibrary.readingpositions.get({
  "volumeId": ""
}, context)
```

#### Parameters
* volumeId (string) **required** - ID of volume for which to retrieve a reading position.
* contentVersion (string) - Volume content version for which this reading position is requested.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mylibrary.readingpositions.setPosition
Sets my reading position information for a volume.


```js
google_books.mylibrary.readingpositions.setPosition({
  "volumeId": "",
  "timestamp": "",
  "position": ""
}, context)
```

#### Parameters
* volumeId (string) **required** - ID of volume for which to update the reading position.
* timestamp (string) **required** - RFC 3339 UTC format timestamp associated with this reading position.
* position (string) **required** - Position string for the new volume reading position.
* action (string) - Action that caused this reading position to be set.
* contentVersion (string) - Volume content version for which this reading position applies.
* deviceCookie (string) - Random persistent device cookie optional on set position.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### notification.get
Returns notification details for a given notification id.


```js
google_books.notification.get({
  "notification_id": ""
}, context)
```

#### Parameters
* notification_id (string) **required** - String to identify the notification.
* locale (string) - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating notification title and body.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### onboarding.listCategories
List categories for onboarding experience.


```js
google_books.onboarding.listCategories({}, context)
```

#### Parameters
* locale (string) - ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### onboarding.listCategoryVolumes
List available volumes under categories for onboarding experience.


```js
google_books.onboarding.listCategoryVolumes({}, context)
```

#### Parameters
* categoryId (array) - List of category ids requested.
* locale (string) - ISO-639-1 language and ISO-3166-1 country code. Default is en-US if unset.
* maxAllowedMaturityRating (string) - The maximum allowed maturity rating of returned volumes. Books with a higher maturity rating are filtered out.
* pageSize (integer) - Number of maximum results per page to be included in the response.
* pageToken (string) - The value of the nextToken from the previous page.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### personalizedstream.get
Returns a stream of personalized book clusters


```js
google_books.personalizedstream.get({}, context)
```

#### Parameters
* locale (string) - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
* maxAllowedMaturityRating (string) - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### promooffer.accept



```js
google_books.promooffer.accept({}, context)
```

#### Parameters
* androidId (string) - device android_id
* device (string) - device device
* manufacturer (string) - device manufacturer
* model (string) - device model
* offerId (string)
* product (string) - device product
* serial (string) - device serial
* volumeId (string) - Volume id to exercise the offer
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### promooffer.dismiss



```js
google_books.promooffer.dismiss({}, context)
```

#### Parameters
* androidId (string) - device android_id
* device (string) - device device
* manufacturer (string) - device manufacturer
* model (string) - device model
* offerId (string) - Offer to dimiss
* product (string) - device product
* serial (string) - device serial
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### promooffer.get
Returns a list of promo offers available to the user


```js
google_books.promooffer.get({}, context)
```

#### Parameters
* androidId (string) - device android_id
* device (string) - device device
* manufacturer (string) - device manufacturer
* model (string) - device model
* product (string) - device product
* serial (string) - device serial
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### series.get
Returns Series metadata for the given series ids.


```js
google_books.series.get({
  "series_id": []
}, context)
```

#### Parameters
* series_id (array) **required** - String that identifies the series
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### series.membership.get
Returns Series membership data given the series id.


```js
google_books.series.membership.get({
  "series_id": ""
}, context)
```

#### Parameters
* series_id (string) **required** - String that identifies the series
* page_size (integer) - Number of maximum results per page to be included in the response.
* page_token (string) - The value of the nextToken from the previous page.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### bookshelves.list
Retrieves a list of public bookshelves for the specified user.


```js
google_books.bookshelves.list({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - ID of user for whom to retrieve bookshelves.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### bookshelves.get
Retrieves metadata for a specific bookshelf for the specified user.


```js
google_books.bookshelves.get({
  "userId": "",
  "shelf": ""
}, context)
```

#### Parameters
* userId (string) **required** - ID of user for whom to retrieve bookshelves.
* shelf (string) **required** - ID of bookshelf to retrieve.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### bookshelves.volumes.list
Retrieves volumes in a specific bookshelf for the specified user.


```js
google_books.bookshelves.volumes.list({
  "userId": "",
  "shelf": ""
}, context)
```

#### Parameters
* userId (string) **required** - ID of user for whom to retrieve bookshelf volumes.
* shelf (string) **required** - ID of bookshelf to retrieve volumes.
* maxResults (integer) - Maximum number of results to return
* showPreorders (boolean) - Set to true to show pre-ordered books. Defaults to false.
* source (string) - String to identify the originator of this request.
* startIndex (integer) - Index of the first element to return (starts at 0)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### volumes.list
Performs a book search.


```js
google_books.volumes.list({
  "q": ""
}, context)
```

#### Parameters
* q (string) **required** - Full-text search query string.
* download (string) - Restrict to volumes by download availability.
* filter (string) - Filter search results.
* langRestrict (string) - Restrict results to books with this language code.
* libraryRestrict (string) - Restrict search to this user's library.
* maxAllowedMaturityRating (string) - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
* maxResults (integer) - Maximum number of results to return.
* orderBy (string) - Sort search results.
* partner (string) - Restrict and brand results for partner ID.
* printType (string) - Restrict to books or magazines.
* projection (string) - Restrict information returned to a set of selected fields.
* showPreorders (boolean) - Set to true to show books available for preorder. Defaults to false.
* source (string) - String to identify the originator of this request.
* startIndex (integer) - Index of the first result to return (starts at 0)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### volumes.mybooks.list
Return a list of books in My Library.


```js
google_books.volumes.mybooks.list({}, context)
```

#### Parameters
* acquireMethod (array) - How the book was acquired
* country (string) - ISO-3166-1 code to override the IP-based location.
* locale (string) - ISO-639-1 language and ISO-3166-1 country code. Ex:'en_US'. Used for generating recommendations.
* maxResults (integer) - Maximum number of results to return.
* processingState (array) - The processing state of the user uploaded volumes to be returned. Applicable only if the UPLOADED is specified in the acquireMethod.
* source (string) - String to identify the originator of this request.
* startIndex (integer) - Index of the first result to return (starts at 0)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### volumes.recommended.list
Return a list of recommended books for the current user.


```js
google_books.volumes.recommended.list({}, context)
```

#### Parameters
* locale (string) - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
* maxAllowedMaturityRating (string) - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### volumes.recommended.rate
Rate a recommended book for the current user.


```js
google_books.volumes.recommended.rate({
  "rating": "",
  "volumeId": ""
}, context)
```

#### Parameters
* rating (string) **required** - Rating to be given to the volume.
* volumeId (string) **required** - ID of the source volume.
* locale (string) - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### volumes.useruploaded.list
Return a list of books uploaded by the current user.


```js
google_books.volumes.useruploaded.list({}, context)
```

#### Parameters
* locale (string) - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
* maxResults (integer) - Maximum number of results to return.
* processingState (array) - The processing state of the user uploaded volumes to be returned.
* source (string) - String to identify the originator of this request.
* startIndex (integer) - Index of the first result to return (starts at 0)
* volumeId (array) - The ids of the volumes to be returned. If not specified all that match the processingState are returned.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### volumes.get
Gets volume information for a single volume.


```js
google_books.volumes.get({
  "volumeId": ""
}, context)
```

#### Parameters
* volumeId (string) **required** - ID of volume to retrieve.
* country (string) - ISO-3166-1 code to override the IP-based location.
* includeNonComicsSeries (boolean) - Set to true to include non-comics series. Defaults to false.
* partner (string) - Brand results for partner ID.
* projection (string) - Restrict information returned to a set of selected fields.
* source (string) - String to identify the originator of this request.
* user_library_consistent_read (boolean)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### volumes.associated.list
Return a list of associated books.


```js
google_books.volumes.associated.list({
  "volumeId": ""
}, context)
```

#### Parameters
* volumeId (string) **required** - ID of the source volume.
* association (string) - Association type.
* locale (string) - ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'. Used for generating recommendations.
* maxAllowedMaturityRating (string) - The maximum allowed maturity rating of returned recommendations. Books with a higher maturity rating are filtered out.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### layers.volumeAnnotations.list
Gets the volume annotations for a volume and layer.


```js
google_books.layers.volumeAnnotations.list({
  "volumeId": "",
  "layerId": "",
  "contentVersion": ""
}, context)
```

#### Parameters
* volumeId (string) **required** - The volume to retrieve annotations for.
* layerId (string) **required** - The ID for the layer to get the annotations.
* contentVersion (string) **required** - The content version for the requested volume.
* endOffset (string) - The end offset to end retrieving data from.
* endPosition (string) - The end position to end retrieving data from.
* locale (string) - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
* maxResults (integer) - Maximum number of results to return
* pageToken (string) - The value of the nextToken from the previous page.
* showDeleted (boolean) - Set to true to return deleted annotations. updatedMin must be in the request to use this. Defaults to false.
* source (string) - String to identify the originator of this request.
* startOffset (string) - The start offset to start retrieving data from.
* startPosition (string) - The start position to start retrieving data from.
* updatedMax (string) - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
* updatedMin (string) - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
* volumeAnnotationsVersion (string) - The version of the volume annotations that you are requesting.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### layers.volumeAnnotations.get
Gets the volume annotation.


```js
google_books.layers.volumeAnnotations.get({
  "volumeId": "",
  "layerId": "",
  "annotationId": ""
}, context)
```

#### Parameters
* volumeId (string) **required** - The volume to retrieve annotations for.
* layerId (string) **required** - The ID for the layer to get the annotations.
* annotationId (string) **required** - The ID of the volume annotation to retrieve.
* locale (string) - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### layers.annotationData.list
Gets the annotation data for a volume and layer.


```js
google_books.layers.annotationData.list({
  "volumeId": "",
  "layerId": "",
  "contentVersion": ""
}, context)
```

#### Parameters
* volumeId (string) **required** - The volume to retrieve annotation data for.
* layerId (string) **required** - The ID for the layer to get the annotation data.
* contentVersion (string) **required** - The content version for the requested volume.
* annotationDataId (array) - The list of Annotation Data Ids to retrieve. Pagination is ignored if this is set.
* h (integer) - The requested pixel height for any images. If height is provided width must also be provided.
* locale (string) - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
* maxResults (integer) - Maximum number of results to return
* pageToken (string) - The value of the nextToken from the previous page.
* scale (integer) - The requested scale for the image.
* source (string) - String to identify the originator of this request.
* updatedMax (string) - RFC 3339 timestamp to restrict to items updated prior to this timestamp (exclusive).
* updatedMin (string) - RFC 3339 timestamp to restrict to items updated since this timestamp (inclusive).
* w (integer) - The requested pixel width for any images. If width is provided height must also be provided.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### layers.annotationData.get
Gets the annotation data.


```js
google_books.layers.annotationData.get({
  "volumeId": "",
  "layerId": "",
  "annotationDataId": "",
  "contentVersion": ""
}, context)
```

#### Parameters
* volumeId (string) **required** - The volume to retrieve annotations for.
* layerId (string) **required** - The ID for the layer to get the annotations.
* annotationDataId (string) **required** - The ID of the annotation data to retrieve.
* contentVersion (string) **required** - The content version for the volume you are trying to retrieve.
* allowWebDefinitions (boolean) - For the dictionary layer. Whether or not to allow web definitions.
* h (integer) - The requested pixel height for any images. If height is provided width must also be provided.
* locale (string) - The locale information for the data. ISO-639-1 language and ISO-3166-1 country code. Ex: 'en_US'.
* scale (integer) - The requested scale for the image.
* source (string) - String to identify the originator of this request.
* w (integer) - The requested pixel width for any images. If width is provided height must also be provided.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### layers.list
List the layer summaries for a volume.


```js
google_books.layers.list({
  "volumeId": ""
}, context)
```

#### Parameters
* volumeId (string) **required** - The volume to retrieve layers for.
* contentVersion (string) - The content version for the requested volume.
* maxResults (integer) - Maximum number of results to return
* pageToken (string) - The value of the nextToken from the previous page.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### layers.get
Gets the layer summary for a volume.


```js
google_books.layers.get({
  "volumeId": "",
  "summaryId": ""
}, context)
```

#### Parameters
* volumeId (string) **required** - The volume to retrieve layers for.
* summaryId (string) **required** - The ID for the layer to get the summary for.
* contentVersion (string) - The content version for the requested volume.
* source (string) - String to identify the originator of this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

