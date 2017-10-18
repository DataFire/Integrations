# @datafire/google_streetviewpublish

Client library for Street View Publish

## Installation and Usage
```bash
npm install --save datafire @datafire/google_streetviewpublish
```

```js
let datafire = require('datafire');
let google_streetviewpublish = require('@datafire/google_streetviewpublish').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_streetviewpublish.photos.batchUpdate({}).then(data => {
  console.log(data);
})
```

## Description
Publishes 360 photos to Google Maps, along with position, orientation, and connectivity metadata. Apps can offer an interface for positioning, connecting, and uploading user-generated Street View images.


## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_streetviewpublish.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_streetviewpublish.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### photo.create
After the client finishes uploading the photo with the returned
UploadRef,
CreatePhoto
publishes the uploaded Photo to
Street View on Google Maps.

Currently, the only way to set heading, pitch, and roll in CreatePhoto is
through the [Photo Sphere XMP
metadata](https://developers.google.com/streetview/spherical-metadata) in
the photo bytes. The `pose.heading`, `pose.pitch`, `pose.roll`,
`pose.altitude`, and `pose.level` fields in Pose are ignored for
CreatePhoto.

This method returns the following error codes:

* google.rpc.Code.INVALID_ARGUMENT if the request is malformed.
* google.rpc.Code.NOT_FOUND if the upload reference does not exist.
* google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the
storage limit.


```js
google_streetviewpublish.photo.create({}, context)
```

#### Parameters
* body (object) - Photo is used to store 360 photos along with photo metadata.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### photo.update
Updates the metadata of a Photo, such
as pose, place association, connections, etc. Changing the pixels of a
photo is not supported.

Only the fields specified in the
updateMask
field are used. If `updateMask` is not present, the update applies to all
fields.

<aside class="note"><b>Note:</b> To update
Pose.altitude,
Pose.latLngPair has to be
filled as well. Otherwise, the request will fail.</aside>

This method returns the following error codes:

* google.rpc.Code.PERMISSION_DENIED if the requesting user did not
create the requested photo.
* google.rpc.Code.INVALID_ARGUMENT if the request is malformed.
* google.rpc.Code.NOT_FOUND if the requested photo does not exist.


```js
google_streetviewpublish.photo.update({
  "id": ""
}, context)
```

#### Parameters
* body (object) - Photo is used to store 360 photos along with photo metadata.
* id (string) **required** - Required. A unique identifier for a photo.
* updateMask (string) - Mask that identifies fields on the photo metadata to update.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### photo.delete
Deletes a Photo and its metadata.

This method returns the following error codes:

* google.rpc.Code.PERMISSION_DENIED if the requesting user did not
create the requested photo.
* google.rpc.Code.NOT_FOUND if the photo ID does not exist.


```js
google_streetviewpublish.photo.delete({
  "photoId": ""
}, context)
```

#### Parameters
* photoId (string) **required** - Required. ID of the Photo.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### photo.get
Gets the metadata of the specified
Photo.

This method returns the following error codes:

* google.rpc.Code.PERMISSION_DENIED if the requesting user did not
create the requested Photo.
* google.rpc.Code.NOT_FOUND if the requested
Photo does not exist.


```js
google_streetviewpublish.photo.get({
  "photoId": ""
}, context)
```

#### Parameters
* photoId (string) **required** - Required. ID of the Photo.
* view (string) - Specifies if a download URL for the photo bytes should be returned in the
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### photo.startUpload
Creates an upload session to start uploading photo bytes. The upload URL of
the returned UploadRef is used to
upload the bytes for the Photo.

In addition to the photo requirements shown in
https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604,
the photo must also meet the following requirements:

* Photo Sphere XMP metadata must be included in the photo medadata. See
https://developers.google.com/streetview/spherical-metadata for the
required fields.
* The pixel size of the photo must meet the size requirements listed in
https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and
the photo must be a full 360 horizontally.

After the upload is complete, the
UploadRef is used with
CreatePhoto
to create the Photo object entry.


```js
google_streetviewpublish.photo.startUpload({}, context)
```

#### Parameters
* body (object) - A generic empty message that you can re-use to avoid defining duplicated
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### photos.list
Lists all the Photos that belong to
the user.


```js
google_streetviewpublish.photos.list({}, context)
```

#### Parameters
* filter (string) - The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`.
* pageSize (integer) - The maximum number of photos to return.
* pageToken (string) - The
* view (string) - Specifies if a download URL for the photos bytes should be returned in the
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### photos.batchDelete
Deletes a list of Photos and their
metadata.

Note that if
BatchDeletePhotos
fails, either critical fields are missing or there was an authentication
error. Even if
BatchDeletePhotos
succeeds, there may have been failures for single photos in the batch.
These failures will be specified in each
PhotoResponse.status
in
BatchDeletePhotosResponse.results.
See
DeletePhoto
for specific failures that can occur per photo.


```js
google_streetviewpublish.photos.batchDelete({}, context)
```

#### Parameters
* body (object) - Request to delete multiple Photos.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### photos.batchGet
Gets the metadata of the specified
Photo batch.

Note that if
BatchGetPhotos
fails, either critical fields are missing or there was an authentication
error. Even if
BatchGetPhotos
succeeds, there may have been failures for single photos in the batch.
These failures will be specified in each
PhotoResponse.status
in
BatchGetPhotosResponse.results.
See
GetPhoto
for specific failures that can occur per photo.


```js
google_streetviewpublish.photos.batchGet({}, context)
```

#### Parameters
* photoIds (array) - Required. IDs of the Photos. For HTTP
* view (string) - Specifies if a download URL for the photo bytes should be returned in the
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### photos.batchUpdate
Updates the metadata of Photos, such
as pose, place association, connections, etc. Changing the pixels of photos
is not supported.

Note that if
BatchUpdatePhotos
fails, either critical fields are missing or there was an authentication
error. Even if
BatchUpdatePhotos
succeeds, there may have been failures for single photos in the batch.
These failures will be specified in each
PhotoResponse.status
in
BatchUpdatePhotosResponse.results.
See
UpdatePhoto
for specific failures that can occur per photo.

Only the fields specified in
updateMask
field are used. If `updateMask` is not present, the update applies to all
fields.

<aside class="note"><b>Note:</b> To update
Pose.altitude,
Pose.latLngPair has to be
filled as well. Otherwise, the request will fail.</aside>


```js
google_streetviewpublish.photos.batchUpdate({}, context)
```

#### Parameters
* body (object) - Request to update the metadata of photos.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

