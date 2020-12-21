# @datafire/google_poly

Client library for Poly API

## Installation and Usage
```bash
npm install --save @datafire/google_poly
```
```js
let google_poly = require('@datafire/google_poly').create();

.then(data => {
  console.log(data);
});
```

## Description

The Poly API provides read access to assets hosted on poly.google.com to all, and upload access to poly.google.com for whitelisted accounts. 

## Actions

### poly.assets.list
Lists all public, remixable assets. These are assets with an access level of PUBLIC and published under the CC-By license.


```js
google_poly.poly.assets.list({}, context)
```

#### Input
* input `object`
  * category `string`: Filter assets based on the specified category. Supported values are: `animals`, `architecture`, `art`, `food`, `nature`, `objects`, `people`, `scenes`, `technology`, and `transport`.
  * curated `boolean`: Return only assets that have been curated by the Poly team.
  * format `string`: Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
  * keywords `string`: One or more search terms to be matched against all text that Poly has indexed for assets, which includes display_name, description, and tags. Multiple keywords should be separated by spaces.
  * maxComplexity `string` (values: COMPLEXITY_UNSPECIFIED, COMPLEX, MEDIUM, SIMPLE): Returns assets that are of the specified complexity or less. Defaults to COMPLEX. For example, a request for MEDIUM assets also includes SIMPLE assets.
  * orderBy `string`: Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.
  * pageSize `integer`: The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
  * pageToken `string`: Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
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
* output [ListAssetsResponse](#listassetsresponse)

### poly.assets.get
Returns detailed information about an asset given its name. PRIVATE assets are returned only if the currently authenticated user (via OAuth token) is the author of the asset.


```js
google_poly.poly.assets.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Required. An asset's name in the form `assets/{ASSET_ID}`.
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
* output [Asset](#asset)

### poly.users.assets.list
Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.


```js
google_poly.poly.users.assets.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.
  * format `string`: Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
  * orderBy `string`: Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets based on a combination of popularity and other features.
  * pageSize `integer`: The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
  * pageToken `string`: Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
  * visibility `string` (values: VISIBILITY_UNSPECIFIED, PUBLISHED, PRIVATE): The visibility of the assets to be returned. Defaults to VISIBILITY_UNSPECIFIED which returns all assets.
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
* output [ListUserAssetsResponse](#listuserassetsresponse)

### poly.users.likedassets.list
Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.


```js
google_poly.poly.users.likedassets.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: A valid user id. Currently, only the special value 'me', representing the currently-authenticated user is supported. To use 'me', you must pass an OAuth token with the request.
  * format `string`: Return only assets with the matching format. Acceptable values are: `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
  * orderBy `string`: Specifies an ordering for assets. Acceptable values are: `BEST`, `NEWEST`, `OLDEST`, 'LIKED_TIME'. Defaults to `LIKED_TIME`, which ranks assets based on how recently they were liked.
  * pageSize `integer`: The maximum number of assets to be returned. This value must be between `1` and `100`. Defaults to `20`.
  * pageToken `string`: Specifies a continuation token from a previous search whose results were split into multiple pages. To get the next page, submit the same request specifying the value from next_page_token.
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
* output [ListLikedAssetsResponse](#listlikedassetsresponse)



## Definitions

### Asset
* Asset `object`: Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.
  * authorName `string`: The author's publicly visible name. Use this name when giving credit to the author. For more information, see [Licensing](/poly/discover/licensing).
  * createTime `string`: For published assets, the time when the asset was published. For unpublished assets, the time when the asset was created.
  * description `string`: The human-readable description, set by the asset's author.
  * displayName `string`: The human-readable name, set by the asset's author.
  * formats `array`: A list of Formats where each format describes one representation of the asset.
    * items [Format](#format)
  * isCurated `boolean`: Whether this asset has been curated by the Poly team.
  * license `string` (values: UNKNOWN, CREATIVE_COMMONS_BY, ALL_RIGHTS_RESERVED): The license under which the author has made the asset available for use, if any.
  * metadata `string`: Application-defined opaque metadata for this asset. This field is only returned when querying for the signed-in user's own assets, not for public assets. This string is limited to 1K chars. It is up to the creator of the asset to define the format for this string (for example, JSON).
  * name `string`: The unique identifier for the asset in the form: `assets/{ASSET_ID}`.
  * presentationParams [PresentationParams](#presentationparams)
  * remixInfo [RemixInfo](#remixinfo)
  * thumbnail [File](#file)
  * updateTime `string`: The time when the asset was last modified. For published assets, whose contents are immutable, the update time changes only when metadata properties, such as visibility, are updated.
  * visibility `string` (values: VISIBILITY_UNSPECIFIED, PRIVATE, UNLISTED, PUBLIC): The visibility of the asset and who can access it.

### AssetImportMessage
* AssetImportMessage `object`: A message generated by the asset import process.
  * code `string` (values: CODE_UNSPECIFIED, NO_IMPORTABLE_FILE, EMPTY_MODEL, OBJ_PARSE_ERROR, EXPIRED, IMAGE_ERROR, EXTRA_FILES_WITH_ARCHIVE, DEFAULT_MATERIALS, FATAL_ERROR, INVALID_ELEMENT_TYPE): The code associated with this message.
  * filePath `string`: An optional file path. Only present for those error codes that specify it.
  * imageError [ImageError](#imageerror)
  * objParseError [ObjParseError](#objparseerror)

### File
* File `object`: Represents a file in Poly, which can be a root, resource, or thumbnail file.
  * contentType `string`: The MIME content-type, such as `image/png`. For more information, see [MIME types](//developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
  * relativePath `string`: The path of the resource file relative to the root file. For root or thumbnail files, this is just the filename.
  * url `string`: The URL where the file data can be retrieved.

### Format
* Format `object`: The same asset can be represented in different formats, for example, a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file with its corresponding .glb binary data. A format refers to a specific representation of an asset and contains all information needed to retrieve and describe this representation.
  * formatComplexity [FormatComplexity](#formatcomplexity)
  * formatType `string`: A short string that identifies the format type of this representation. Possible values are: `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
  * resources `array`: A list of dependencies of the root element. May include, but is not limited to, materials, textures, and shader programs.
    * items [File](#file)
  * root [File](#file)

### FormatComplexity
* FormatComplexity `object`: Information on the complexity of this Format.
  * lodHint `integer`: A non-negative integer that represents the level of detail (LOD) of this format relative to other formats of the same asset with the same format_type. This hint allows you to sort formats from the most-detailed (0) to least-detailed (integers greater than 0).
  * triangleCount `string`: The estimated number of triangles.

### ImageError
* ImageError `object`: A message resulting from reading an image file.
  * code `string` (values: CODE_UNSPECIFIED, INVALID_IMAGE, IMAGE_TOO_BIG, WRONG_IMAGE_TYPE): The type of image error encountered. Optional for older image errors.
  * filePath `string`: The file path in the import of the image that was rejected.

### ListAssetsResponse
* ListAssetsResponse `object`: A response message from a request to list.
  * assets `array`: A list of assets that match the criteria specified in the request.
    * items [Asset](#asset)
  * nextPageToken `string`: The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.
  * totalSize `integer`: The total number of assets in the list, without pagination.

### ListLikedAssetsResponse
* ListLikedAssetsResponse `object`: A response message from a request to list.
  * assets `array`: A list of assets that match the criteria specified in the request.
    * items [Asset](#asset)
  * nextPageToken `string`: The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.
  * totalSize `integer`: The total number of assets in the list, without pagination.

### ListUserAssetsResponse
* ListUserAssetsResponse `object`: A response message from a request to list.
  * nextPageToken `string`: The continuation token for retrieving the next page. If empty, indicates that there are no more pages. To get the next page, submit the same request specifying this value as the page_token.
  * totalSize `integer`: The total number of assets in the list, without pagination.
  * userAssets `array`: A list of UserAssets matching the request.
    * items [UserAsset](#userasset)

### ObjParseError
* ObjParseError `object`: Details of an error resulting from parsing an OBJ file
  * code `string` (values: CODE_UNSPECIFIED, INCONSISTENT_VERTEX_REFS, INVALID_COMMAND, INVALID_NUMBER, INVALID_VERTEX_REF, MISSING_GEOMETRIC_VERTEX, MISSING_TOKEN, TOO_FEW_DIMENSIONS, TOO_FEW_VERTICES, TOO_MANY_DIMENSIONS, UNSUPPORTED_COMMAND, UNUSED_TOKENS, VERTEX_NOT_FOUND, NUMBER_OUT_OF_RANGE, INVALID_VALUE, INVALID_TEXTURE_OPTION, TOO_MANY_PROBLEMS, MISSING_FILE_NAME, FILE_NOT_FOUND, UNKNOWN_MATERIAL, NO_MATERIAL_DEFINED, INVALID_SMOOTHING_GROUP, MISSING_VERTEX_COLORS, FILE_SUBSTITUTION, LINE_TOO_LONG, INVALID_FILE_PATH): The type of problem found (required).
  * endIndex `integer`: The ending character index at which the problem was found.
  * filePath `string`: The file path in which the problem was found.
  * line `string`: The text of the line. Note that this may be truncated if the line was very long. This may not include the error if it occurs after line truncation.
  * lineNumber `integer`: Line number at which the problem was found.
  * startIndex `integer`: The starting character index at which the problem was found.

### PresentationParams
* PresentationParams `object`: Hints for displaying the asset, based on information available when the asset was uploaded.
  * backgroundColor `string`: A background color which could be used for displaying the 3D asset in a 'thumbnail' or 'palette' style view. Authors have the option to set this background color when publishing or editing their asset. This is represented as a six-digit hexademical triplet specifying the RGB components of the background color, e.g. #FF0000 for Red.
  * colorSpace `string` (values: UNKNOWN, LINEAR, GAMMA): The materials' diffuse/albedo color. This does not apply to vertex colors or texture maps.
  * orientingRotation [Quaternion](#quaternion)

### Quaternion
* Quaternion `object`: A [Quaternion](//en.wikipedia.org/wiki/Quaternion). Please note: if in the response you see "w: 1" and nothing else this is the default value of [0, 0, 0, 1] where x,y, and z are 0.
  * w `number`: The scalar component.
  * x `number`: The x component.
  * y `number`: The y component.
  * z `number`: The z component.

### RemixInfo
* RemixInfo `object`: Info about the sources of this asset (i.e. assets that were remixed to create this asset).
  * sourceAsset `array`: Resource ids for the sources of this remix, of the form: `assets/{ASSET_ID}`
    * items `string`

### StartAssetImportResponse
* StartAssetImportResponse `object`: A response message from a request to startImport. This is returned in the response field of the Operation.
  * assetId `string`: The id of newly created asset. If this is empty when the operation is complete it means the import failed. Please refer to the assetImportMessages field to understand what went wrong.
  * assetImportId `string`: The id of the asset import.
  * assetImportMessages `array`: The message from the asset import. This will contain any warnings (or - in the case of failure - errors) that occurred during import.
    * items [AssetImportMessage](#assetimportmessage)
  * publishUrl `string`: The publish URL for the asset.

### UserAsset
* UserAsset `object`: Data about the user's asset.
  * asset [Asset](#asset)


