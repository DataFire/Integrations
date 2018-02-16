# @datafire/google_poly

Client library for Poly

## Installation and Usage
```bash
npm install --save @datafire/google_poly
```
```js
let google_poly = require('@datafire/google_poly').create();

google_poly.assets.list({}).then(data => {
  console.log(data);
});
```

## Description

The Poly API provides read-only access to assets hosted on <a href="https://poly.google.com">poly.google.com</a>.


## Actions

### assets.list
Lists all public, remixable assets. These are assets with an access level of
PUBLIC and published under the
CC-By license.


```js
google_poly.assets.list({}, context)
```

#### Input
* input `object`
  * category `string`: Filter assets based on the specified category. Supported values are:
  * curated `boolean`: Return only assets that have been curated by the Poly team.
  * format `string`: Return only assets with the matching format. Acceptable values are:
  * keywords `string`: One or more search terms to be matched against all text that Poly has
  * maxComplexity `string` (values: COMPLEXITY_UNSPECIFIED, COMPLEX, MEDIUM, SIMPLE): Returns assets that are of the specified complexity or less. Defaults to
  * orderBy `string`: Specifies an ordering for assets. Acceptable values are:
  * pageSize `integer`: The maximum number of assets to be returned. This value must be between `1`
  * pageToken `string`: Specifies a continuation token from a previous search whose results were
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
* output [ListAssetsResponse](#listassetsresponse)

### assets.get
Returns detailed information about an asset given its name.
PRIVATE assets are returned only if
 the currently authenticated user (via OAuth token) is the author of the asset.


```js
google_poly.assets.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. An asset's name in the form `assets/{ASSET_ID}`.
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
* output [Asset](#asset)

### users.assets.list
Lists assets authored by the given user. Only the value 'me', representing
the currently-authenticated user, is supported. May include assets with an
access level of PRIVATE or
UNLISTED and assets which are
All Rights Reserved for the
currently-authenticated user.


```js
google_poly.users.assets.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * format `string`: Return only assets with the matching format. Acceptable values are:
  * name **required** `string`: A valid user id. Currently, only the special value 'me', representing the
  * orderBy `string`: Specifies an ordering for assets. Acceptable values are:
  * pageSize `integer`: The maximum number of assets to be returned. This value must be between `1`
  * pageToken `string`: Specifies a continuation token from a previous search whose results were
  * visibility `string` (values: VISIBILITY_UNSPECIFIED, PUBLISHED, PRIVATE): The visibility of the assets to be returned.
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
* output [ListUserAssetsResponse](#listuserassetsresponse)

### users.likedassets.list
Lists assets that the user has liked. Only the value 'me', representing
the currently-authenticated user, is supported. May include assets with an
access level of UNLISTED.


```js
google_poly.users.likedassets.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * format `string`: Return only assets with the matching format. Acceptable values are:
  * name **required** `string`: A valid user id. Currently, only the special value 'me', representing the
  * orderBy `string`: Specifies an ordering for assets. Acceptable values are:
  * pageSize `integer`: The maximum number of assets to be returned. This value must be between `1`
  * pageToken `string`: Specifies a continuation token from a previous search whose results were
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
* output [ListLikedAssetsResponse](#listlikedassetsresponse)



## Definitions

### Asset
* Asset `object`: Represents and describes an asset in the Poly library. An asset is a 3D model
  * authorName `string`: The author's publicly visible name. Use this name when giving credit to the
  * createTime `string`: For published assets, the time when the asset was published.
  * description `string`: The human-readable description, set by the asset's author.
  * displayName `string`: The human-readable name, set by the asset's author.
  * formats `array`: A list of Formats where each
    * items [Format](#format)
  * isCurated `boolean`: Whether this asset has been curated by the Poly team.
  * license `string` (values: UNKNOWN, CREATIVE_COMMONS_BY, ALL_RIGHTS_RESERVED): The license under which the author has made the asset available
  * metadata `string`: Application-defined opaque metadata for this asset. This field is only
  * name `string`: The unique identifier for the asset in the form:
  * presentationParams [PresentationParams](#presentationparams)
  * thumbnail [File](#file)
  * updateTime `string`: The time when the asset was last modified. For published assets, whose
  * visibility `string` (values: VISIBILITY_UNSPECIFIED, PRIVATE, UNLISTED, PUBLIC): The visibility of the asset and who can access it.

### File
* File `object`: Represents a file in Poly, which can be a root,
  * contentType `string`: The MIME content-type, such as `image/png`.
  * relativePath `string`: The path of the resource file relative to the root file.
  * url `string`: The URL where the file data can be retrieved.

### Format
* Format `object`: The same asset can be represented in different formats, for example,
  * formatComplexity [FormatComplexity](#formatcomplexity)
  * formatType `string`: A short string that identifies the format type of this representation.
  * resources `array`: A list of dependencies of the root element. May include, but is not
    * items [File](#file)
  * root [File](#file)

### FormatComplexity
* FormatComplexity `object`: Information on the complexity of this Format.
  * lodHint `integer`: A non-negative integer that represents the level of detail (LOD) of this
  * triangleCount `string`: The estimated number of triangles.

### ListAssetsResponse
* ListAssetsResponse `object`: A response message from a request to list.
  * assets `array`: A list of assets that match the criteria specified in the request.
    * items [Asset](#asset)
  * nextPageToken `string`: The continuation token for retrieving the next page. If empty,
  * totalSize `integer`: The total number of assets in the list, without pagination.

### ListLikedAssetsResponse
* ListLikedAssetsResponse `object`: A response message from a request to list.
  * assets `array`: A list of assets that match the criteria specified in the request.
    * items [Asset](#asset)
  * nextPageToken `string`: The continuation token for retrieving the next page. If empty,
  * totalSize `integer`: The total number of assets in the list, without pagination.

### ListUserAssetsResponse
* ListUserAssetsResponse `object`: A response message from a request to list.
  * nextPageToken `string`: The continuation token for retrieving the next page. If empty,
  * totalSize `integer`: The total number of assets in the list, without pagination.
  * userAssets `array`: A list of UserAssets matching the request.
    * items [UserAsset](#userasset)

### PresentationParams
* PresentationParams `object`: Hints for displaying the asset, based on information available when the asset
  * colorSpace `string` (values: UNKNOWN, LINEAR, GAMMA): The materials' diffuse/albedo color. This does not apply to vertex colors
  * orientingRotation [Quaternion](#quaternion)

### Quaternion
* Quaternion `object`: A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the
  * w `number`: The scalar component.
  * x `number`: The x component.
  * y `number`: The y component.
  * z `number`: The z component.

### UserAsset
* UserAsset `object`: Data about the user's asset.
  * asset [Asset](#asset)


