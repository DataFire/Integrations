# @datafire/google_streetviewpublish

Client library for Street View Publish

## Installation and Usage
```bash
npm install --save @datafire/google_streetviewpublish
```
```js
let google_streetviewpublish = require('@datafire/google_streetviewpublish').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
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
google_streetviewpublish.oauthRefresh(null, context)
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

#### Input
* input `object`
  * body [Photo](#photo)
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
* output [Photo](#photo)

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

#### Input
* input `object`
  * body [Photo](#photo)
  * id **required** `string`: Required. A unique identifier for a photo.
  * updateMask `string`: Mask that identifies fields on the photo metadata to update.
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
* output [Photo](#photo)

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

#### Input
* input `object`
  * photoId **required** `string`: Required. ID of the Photo.
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
* output [Empty](#empty)

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

#### Input
* input `object`
  * photoId **required** `string`: Required. ID of the Photo.
  * view `string` (values: BASIC, INCLUDE_DOWNLOAD_URL): Specifies if a download URL for the photo bytes should be returned in the
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
* output [Photo](#photo)

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

#### Input
* input `object`
  * body [Empty](#empty)
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
* output [UploadRef](#uploadref)

### photos.list
Lists all the Photos that belong to
the user.


```js
google_streetviewpublish.photos.list({}, context)
```

#### Input
* input `object`
  * filter `string`: The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`.
  * pageSize `integer`: The maximum number of photos to return.
  * pageToken `string`: The
  * view `string` (values: BASIC, INCLUDE_DOWNLOAD_URL): Specifies if a download URL for the photos bytes should be returned in the
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
* output [ListPhotosResponse](#listphotosresponse)

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

#### Input
* input `object`
  * body [BatchDeletePhotosRequest](#batchdeletephotosrequest)
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
* output [BatchDeletePhotosResponse](#batchdeletephotosresponse)

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

#### Input
* input `object`
  * photoIds `array`: Required. IDs of the Photos. For HTTP
  * view `string` (values: BASIC, INCLUDE_DOWNLOAD_URL): Specifies if a download URL for the photo bytes should be returned in the
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
* output [BatchGetPhotosResponse](#batchgetphotosresponse)

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

#### Input
* input `object`
  * body [BatchUpdatePhotosRequest](#batchupdatephotosrequest)
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
* output [BatchUpdatePhotosResponse](#batchupdatephotosresponse)



## Definitions

### BatchDeletePhotosRequest
* BatchDeletePhotosRequest `object`: Request to delete multiple Photos.
  * photoIds `array`: Required. IDs of the Photos. For HTTP
    * items `string`

### BatchDeletePhotosResponse
* BatchDeletePhotosResponse `object`: Response to batch delete of one or more
  * status `array`: The status for the operation to delete a single
    * items [Status](#status)

### BatchGetPhotosResponse
* BatchGetPhotosResponse `object`: Response to batch get of Photos.
  * results `array`: List of results for each individual
    * items [PhotoResponse](#photoresponse)

### BatchUpdatePhotosRequest
* BatchUpdatePhotosRequest `object`: Request to update the metadata of photos.
  * updatePhotoRequests `array`: Required. List of
    * items [UpdatePhotoRequest](#updatephotorequest)

### BatchUpdatePhotosResponse
* BatchUpdatePhotosResponse `object`: Response to batch update of metadata of one or more
  * results `array`: List of results for each individual
    * items [PhotoResponse](#photoresponse)

### Connection
* Connection `object`: A connection is the link from a source photo to a destination photo.
  * target [PhotoId](#photoid)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### LatLng
* LatLng `object`: An object representing a latitude/longitude pair. This is expressed as a pair
  * latitude `number`: The latitude in degrees. It must be in the range [-90.0, +90.0].
  * longitude `number`: The longitude in degrees. It must be in the range [-180.0, +180.0].

### Level
* Level `object`: Level information containing level number and its corresponding name.
  * name `string`: Required. A name assigned to this Level, restricted to 3 characters.
  * number `number`: Floor number, used for ordering. 0 indicates the ground level, 1 indicates

### ListPhotosResponse
* ListPhotosResponse `object`: Response to list all photos that belong to a user.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more
  * photos `array`: List of photos. The maximum number of items returned is based on the
    * items [Photo](#photo)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a
  * done `boolean`: If the value is `false`, it means the operation is still in progress.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation.  It typically
  * name `string`: The server-assigned name, which is only unique within the same service that
  * response `object`: The normal response of the operation in case of success.  If the original

### Photo
* Photo `object`: Photo is used to store 360 photos along with photo metadata.
  * captureTime `string`: Absolute time when the photo was captured.
  * connections `array`: Connections to other photos. A connection represents the link from this
    * items [Connection](#connection)
  * downloadUrl `string`: Output only. The download URL for the photo bytes. This field is set only
  * photoId [PhotoId](#photoid)
  * places `array`: Places where this photo belongs.
    * items [Place](#place)
  * pose [Pose](#pose)
  * shareLink `string`: Output only. The share link for the photo.
  * thumbnailUrl `string`: Output only. The thumbnail URL for showing a preview of the given photo.
  * uploadReference [UploadRef](#uploadref)
  * viewCount `string`: Output only. View count of the photo.

### PhotoId
* PhotoId `object`: Identifier for a Photo.
  * id `string`: Required. A unique identifier for a photo.

### PhotoResponse
* PhotoResponse `object`: Response payload for a single
  * photo [Photo](#photo)
  * status [Status](#status)

### Place
* Place `object`: Place metadata for an entity.
  * placeId `string`: Place identifier, as described in

### Pose
* Pose `object`: Raw pose measurement for an entity.
  * altitude `number`: Altitude of the pose in meters above WGS84 ellipsoid.
  * heading `number`: Compass heading, measured at the center of the photo in degrees clockwise
  * latLngPair [LatLng](#latlng)
  * level [Level](#level)
  * pitch `number`: Pitch, measured at the center of the photo in degrees. Value must be >=-90
  * roll `number`: Roll, measured in degrees. Value must be >= 0 and <360. A value of 0

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details.  There is a common set of
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any

### UpdatePhotoRequest
* UpdatePhotoRequest `object`: Request to update the metadata of a
  * photo [Photo](#photo)
  * updateMask `string`: Mask that identifies fields on the photo metadata to update.

### UploadRef
* UploadRef `object`: Upload reference for media files.
  * uploadUrl `string`: Required. An upload reference should be unique for each user. It follows


