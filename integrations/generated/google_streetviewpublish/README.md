# @datafire/google_streetviewpublish

Client library for Street View Publish API

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

.then(data => {
  console.log(data);
});
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

### streetviewpublish.photo.create
After the client finishes uploading the photo with the returned UploadRef, CreatePhoto publishes the uploaded Photo to Street View on Google Maps. Currently, the only way to set heading, pitch, and roll in CreatePhoto is through the [Photo Sphere XMP metadata](https://developers.google.com/streetview/spherical-metadata) in the photo bytes. CreatePhoto ignores the `pose.heading`, `pose.pitch`, `pose.roll`, `pose.altitude`, and `pose.level` fields in Pose. This method returns the following error codes: * google.rpc.Code.INVALID_ARGUMENT if the request is malformed or if the uploaded photo is not a 360 photo. * google.rpc.Code.NOT_FOUND if the upload reference does not exist. * google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the storage limit.


```js
google_streetviewpublish.streetviewpublish.photo.create({}, context)
```

#### Input
* input `object`
  * body [Photo](#photo)
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
* output [Photo](#photo)

### streetviewpublish.photo.update
Updates the metadata of a Photo, such as pose, place association, connections, etc. Changing the pixels of a photo is not supported. Only the fields specified in the updateMask field are used. If `updateMask` is not present, the update applies to all fields. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.INVALID_ARGUMENT if the request is malformed. * google.rpc.Code.NOT_FOUND if the requested photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.


```js
google_streetviewpublish.streetviewpublish.photo.update({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Required. A unique identifier for a photo.
  * updateMask `string`: Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.latLngPair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` *Note:* When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.
  * body [Photo](#photo)
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
* output [Photo](#photo)

### streetviewpublish.photo.delete
Deletes a Photo and its metadata. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested photo. * google.rpc.Code.NOT_FOUND if the photo ID does not exist.


```js
google_streetviewpublish.streetviewpublish.photo.delete({
  "photoId": ""
}, context)
```

#### Input
* input `object`
  * photoId **required** `string`: Required. ID of the Photo.
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

### streetviewpublish.photo.get
Gets the metadata of the specified Photo. This method returns the following error codes: * google.rpc.Code.PERMISSION_DENIED if the requesting user did not create the requested Photo. * google.rpc.Code.NOT_FOUND if the requested Photo does not exist. * google.rpc.Code.UNAVAILABLE if the requested Photo is still being indexed.


```js
google_streetviewpublish.streetviewpublish.photo.get({
  "photoId": ""
}, context)
```

#### Input
* input `object`
  * photoId **required** `string`: Required. ID of the Photo.
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
  * view `string` (values: BASIC, INCLUDE_DOWNLOAD_URL): Required. Specifies if a download URL for the photo bytes should be returned in the Photo response.
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
* output [Photo](#photo)

### streetviewpublish.photo.startUpload
Creates an upload session to start uploading photo bytes. The method uses the upload URL of the returned UploadRef to upload the bytes for the Photo. In addition to the photo requirements shown in https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, the photo must meet the following requirements: * Photo Sphere XMP metadata must be included in the photo metadata. See https://developers.google.com/streetview/spherical-metadata for the required fields. * The pixel size of the photo must meet the size requirements listed in https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and the photo must be a full 360 horizontally. After the upload completes, the method uses UploadRef with CreatePhoto to create the Photo object entry.


```js
google_streetviewpublish.streetviewpublish.photo.startUpload({}, context)
```

#### Input
* input `object`
  * body [Empty](#empty)
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
* output [UploadRef](#uploadref)

### streetviewpublish.photos.list
Lists all the Photos that belong to the user. *Note:* Recently created photos that are still being indexed are not returned in the response.


```js
google_streetviewpublish.streetviewpublish.photos.list({}, context)
```

#### Input
* input `object`
  * filter `string`: Required. The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`. The only filter supported at the moment is `placeId`.
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
  * pageSize `integer`: The maximum number of photos to return. `pageSize` must be non-negative. If `pageSize` is zero or is not provided, the default page size of 100 is used. The number of photos returned in the response may be less than `pageSize` if the number of photos that belong to the user is less than `pageSize`.
  * pageToken `string`: The nextPageToken value returned from a previous ListPhotos request, if any.
  * view `string` (values: BASIC, INCLUDE_DOWNLOAD_URL): Required. Specifies if a download URL for the photos bytes should be returned in the Photos response.
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
* output [ListPhotosResponse](#listphotosresponse)

### streetviewpublish.photos.batchDelete
Deletes a list of Photos and their metadata. Note that if BatchDeletePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchDeletePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchDeletePhotosResponse.results. See DeletePhoto for specific failures that can occur per photo.


```js
google_streetviewpublish.streetviewpublish.photos.batchDelete({}, context)
```

#### Input
* input `object`
  * body [BatchDeletePhotosRequest](#batchdeletephotosrequest)
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
* output [BatchDeletePhotosResponse](#batchdeletephotosresponse)

### streetviewpublish.photos.batchGet
Gets the metadata of the specified Photo batch. Note that if BatchGetPhotos fails, either critical fields are missing or there is an authentication error. Even if BatchGetPhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchGetPhotosResponse.results. See GetPhoto for specific failures that can occur per photo.


```js
google_streetviewpublish.streetviewpublish.photos.batchGet({}, context)
```

#### Input
* input `object`
  * languageCode `string`: The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. If language_code is unspecified, the user's language preference for Google services is used.
  * photoIds `array`: Required. IDs of the Photos. For HTTP GET requests, the URL query parameter should be `photoIds=&photoIds=&...`.
  * view `string` (values: BASIC, INCLUDE_DOWNLOAD_URL): Required. Specifies if a download URL for the photo bytes should be returned in the Photo response.
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
* output [BatchGetPhotosResponse](#batchgetphotosresponse)

### streetviewpublish.photos.batchUpdate
Updates the metadata of Photos, such as pose, place association, connections, etc. Changing the pixels of photos is not supported. Note that if BatchUpdatePhotos fails, either critical fields are missing or there is an authentication error. Even if BatchUpdatePhotos succeeds, individual photos in the batch may have failures. These failures are specified in each PhotoResponse.status in BatchUpdatePhotosResponse.results. See UpdatePhoto for specific failures that can occur per photo. Only the fields specified in updateMask field are used. If `updateMask` is not present, the update applies to all fields. The number of UpdatePhotoRequest messages in a BatchUpdatePhotosRequest must not exceed 20. *Note:* To update Pose.altitude, Pose.latLngPair has to be filled as well. Otherwise, the request will fail.


```js
google_streetviewpublish.streetviewpublish.photos.batchUpdate({}, context)
```

#### Input
* input `object`
  * body [BatchUpdatePhotosRequest](#batchupdatephotosrequest)
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
* output [BatchUpdatePhotosResponse](#batchupdatephotosresponse)



## Definitions

### BatchDeletePhotosRequest
* BatchDeletePhotosRequest `object`: Request to delete multiple Photos.
  * photoIds `array`: Required. IDs of the Photos. HTTP GET requests require the following syntax for the URL query parameter: `photoIds=&photoIds=&...`.
    * items `string`

### BatchDeletePhotosResponse
* BatchDeletePhotosResponse `object`: Response to batch delete of one or more Photos.
  * status `array`: The status for the operation to delete a single Photo in the batch request.
    * items [Status](#status)

### BatchGetPhotosResponse
* BatchGetPhotosResponse `object`: Response to batch get of Photos.
  * results `array`: List of results for each individual Photo requested, in the same order as the requests in BatchGetPhotos.
    * items [PhotoResponse](#photoresponse)

### BatchUpdatePhotosRequest
* BatchUpdatePhotosRequest `object`: Request to update the metadata of photos. Updating the pixels of photos is not supported.
  * updatePhotoRequests `array`: Required. List of UpdatePhotoRequests.
    * items [UpdatePhotoRequest](#updatephotorequest)

### BatchUpdatePhotosResponse
* BatchUpdatePhotosResponse `object`: Response to batch update of metadata of one or more Photos.
  * results `array`: List of results for each individual Photo updated, in the same order as the request.
    * items [PhotoResponse](#photoresponse)

### Connection
* Connection `object`: A connection is the link from a source photo to a destination photo.
  * target [PhotoId](#photoid)

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### LatLng
* LatLng `object`: An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.
  * latitude `number`: The latitude in degrees. It must be in the range [-90.0, +90.0].
  * longitude `number`: The longitude in degrees. It must be in the range [-180.0, +180.0].

### Level
* Level `object`: Level information containing level number and its corresponding name.
  * name `string`: Required. A name assigned to this Level, restricted to 3 characters. Consider how the elevator buttons would be labeled for this level if there was an elevator.
  * number `number`: Floor number, used for ordering. 0 indicates the ground level, 1 indicates the first level above ground level, -1 indicates the first level under ground level. Non-integer values are OK.

### ListPhotosResponse
* ListPhotosResponse `object`: Response to list all photos that belong to a user.
  * nextPageToken `string`: Token to retrieve the next page of results, or empty if there are no more results in the list.
  * photos `array`: List of photos. The pageSize field in the request determines the number of items returned.
    * items [Photo](#photo)

### Operation
* Operation `object`: This resource represents a long-running operation that is the result of a network API call.
  * done `boolean`: If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
  * error [Status](#status)
  * metadata `object`: Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
  * name `string`: The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.
  * response `object`: The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.

### Photo
* Photo `object`: Photo is used to store 360 photos along with photo metadata.
  * captureTime `string`: Absolute time when the photo was captured. When the photo has no exif timestamp, this is used to set a timestamp in the photo metadata.
  * connections `array`: Connections to other photos. A connection represents the link from this photo to another photo.
    * items [Connection](#connection)
  * downloadUrl `string`: Output only. The download URL for the photo bytes. This field is set only when GetPhotoRequest.view is set to PhotoView.INCLUDE_DOWNLOAD_URL.
  * mapsPublishStatus `string` (values: UNSPECIFIED_MAPS_PUBLISH_STATUS, PUBLISHED, REJECTED_UNKNOWN): Output only. Status in Google Maps, whether this photo was published or rejected. Not currently populated.
  * photoId [PhotoId](#photoid)
  * places `array`: Places where this photo belongs.
    * items [Place](#place)
  * pose [Pose](#pose)
  * shareLink `string`: Output only. The share link for the photo.
  * thumbnailUrl `string`: Output only. The thumbnail URL for showing a preview of the given photo.
  * transferStatus `string` (values: TRANSFER_STATUS_UNKNOWN, NEVER_TRANSFERRED, PENDING, COMPLETED, REJECTED, EXPIRED, CANCELLED, RECEIVED_VIA_TRANSFER): Output only. Status of rights transfer on this photo.
  * uploadReference [UploadRef](#uploadref)
  * viewCount `string`: Output only. View count of the photo.

### PhotoId
* PhotoId `object`: Identifier for a Photo.
  * id `string`: Required. A unique identifier for a photo.

### PhotoResponse
* PhotoResponse `object`: Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos.
  * photo [Photo](#photo)
  * status [Status](#status)

### Place
* Place `object`: Place metadata for an entity.
  * languageCode `string`: Output-only. The language_code that the name is localized with. This should be the language_code specified in the request, but may be a fallback.
  * name `string`: Output-only. The name of the place, localized to the language_code.
  * placeId `string`: Place identifier, as described in https://developers.google.com/places/place-id.

### Pose
* Pose `object`: Raw pose measurement for an entity.
  * accuracyMeters `number`: The estimated horizontal accuracy of this pose in meters with 68% confidence (one standard deviation). For example, on Android, this value is available from this method: https://developer.android.com/reference/android/location/Location#getAccuracy(). Other platforms have different methods of obtaining similar accuracy estimations.
  * altitude `number`: Altitude of the pose in meters above WGS84 ellipsoid. NaN indicates an unmeasured quantity.
  * heading `number`: Compass heading, measured at the center of the photo in degrees clockwise from North. Value must be >=0 and <360. NaN indicates an unmeasured quantity.
  * latLngPair [LatLng](#latlng)
  * level [Level](#level)
  * pitch `number`: Pitch, measured at the center of the photo in degrees. Value must be >=-90 and <= 90. A value of -90 means looking directly down, and a value of 90 means looking directly up. NaN indicates an unmeasured quantity.
  * roll `number`: Roll, measured in degrees. Value must be >= 0 and <360. A value of 0 means level with the horizon. NaN indicates an unmeasured quantity.

### Status
* Status `object`: The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
  * code `integer`: The status code, which should be an enum value of google.rpc.Code.
  * details `array`: A list of messages that carry the error details. There is a common set of message types for APIs to use.
    * items `object`
  * message `string`: A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.

### UpdatePhotoRequest
* UpdatePhotoRequest `object`: Request to update the metadata of a Photo. Updating the pixels of a photo is not supported.
  * photo [Photo](#photo)
  * updateMask `string`: Required. Mask that identifies fields on the photo metadata to update. If not present, the old Photo metadata is entirely replaced with the new Photo metadata in this request. The update fails if invalid fields are specified. Multiple fields can be specified in a comma-delimited list. The following fields are valid: * `pose.heading` * `pose.latLngPair` * `pose.pitch` * `pose.roll` * `pose.level` * `pose.altitude` * `connections` * `places` *Note:* When updateMask contains repeated fields, the entire set of repeated values get replaced with the new contents. For example, if updateMask contains `connections` and `UpdatePhotoRequest.photo.connections` is empty, all connections are removed.

### UploadRef
* UploadRef `object`: Upload reference for media files.
  * uploadUrl `string`: Required. An upload reference should be unique for each user. It follows the form: "https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}"


