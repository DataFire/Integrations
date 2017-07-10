# @datafire/gettyimages
Build applications using the world's most powerful imagery

## Operation: AssetChanges_PutAssetChanges
Generates asset changes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Accept-Language parameter optional. Used to restrict the set of natural languages that are preferred as a response to the request."
    },
    "channel_id": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies the id of the channel for the asset data. Valid channel ids can be found in the results of the Get Partner Channel query."
    },
    "batch_size": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies the number of assets to return. The default is 10; maximum is 500."
    },
    "Authorization": {
      "type": "string",
      "description": "Authorization token required. Used for applying content access restrictions. Use one of the OAuth2 grants to auto-populate this value."
    }
  },
  "additionalProperties": false,
  "required": [
    "channel_id",
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AssetChanges"
}
```
## Operation: AssetChanges_DeleteAssetChanges
Confirm asset changes acknowledges receipt of asset changes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Accept-Language parameter optional. Used to restrict the set of natural languages that are preferred as a response to the request."
    },
    "change-set-id": {
      "type": "integer",
      "format": "int64",
      "description": "Specify the change-set-id associated with a transaction resource whose receipt you want to confirm."
    },
    "Authorization": {
      "type": "string",
      "description": "Authorization token required. Used for applying content access restrictions. Use one of the OAuth2 grants to auto-populate this value."
    }
  },
  "additionalProperties": false,
  "required": [
    "change-set-id",
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: AssetChanges_GetPartnerChannel
Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Accept-Language parameter optional. Used to restrict the set of natural languages that are preferred as a response to the request."
    },
    "Authorization": {
      "type": "string",
      "description": "Authorization token required. Used for applying content access restrictions. Use one of the OAuth2 grants to auto-populate this value."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PartnerChannelList"
}
```
## Operation: AssetRegistration_Register
Register a list of customer assets.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Authorization token required. Used for applying content access restrictions. Use one of the OAuth2 grants to auto-populate this value."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Accept-Language parameter optional. Used to restrict the set of natural languages that are preferred as a response to the request."
    },
    "request": {
      "$ref": "#/definitions/RegisterAssetsRequest"
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "request"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: Boards_GetAllBoards
<b>***BETA***</b> Get all boards that the user participates in

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Provide a header to specify the language of result values."
    },
    "board_relationship": {
      "type": "string",
      "description": "Search for boards the user owns or has been invited to as an editor.",
      "enum": [
        "owned",
        "invited"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Request results starting at a page number (default is 1)."
    },
    "page_size": {
      "type": "integer",
      "format": "int32",
      "description": "Request number of boards to return in each page. (default is 30)."
    },
    "sort_order": {
      "type": "string",
      "description": "Sort the list of boards by last update date or name. Defaults to date_last_updated_descending.",
      "enum": [
        "date_last_updated_descending",
        "date_last_updated_ascending",
        "name_ascending",
        "name_decending"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/board_list"
}
```
## Operation: Boards_CreateBoard
<b>***BETA***</b> Create a new board

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "new_board": {
      "$ref": "#/definitions/board_info"
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Provide a header to specify the language of result values."
    }
  },
  "additionalProperties": false,
  "required": [
    "new_board",
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/board_created"
}
```
## Operation: Boards_DeleteBoard
<b>***BETA***</b> Delete a board

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Provide a header to specify the language of result values."
    },
    "board_id": {
      "type": "string",
      "description": "Specify the board to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "board_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Boards_GetBoard
<b>***BETA***</b> Get assets and metadata for a specific board

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Provide a header to specify the language of result values."
    },
    "board_id": {
      "type": "string",
      "description": "Retrieve details for a specific board."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "board_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/board_detail"
}
```
## Operation: Boards_UpdateBoard
<b>***BETA***</b> Update a board

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "board_info": {
      "$ref": "#/definitions/board_info"
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Provide a header to specify the language of result values."
    },
    "board_id": {
      "type": "string",
      "description": "Specify the board to update."
    }
  },
  "additionalProperties": false,
  "required": [
    "board_info",
    "Authorization",
    "board_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Boards_RemoveAssets
<b>***BETA***</b> Remove assets from a board

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Provide a header to specify the language of result values."
    },
    "board_id": {
      "type": "string",
      "description": "Specify the board to remove assets from."
    },
    "asset_ids": {
      "type": "array",
      "description": "List the assets to be removed from the board."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "board_id",
    "asset_ids"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: Boards_AddAssets
<b>***BETA***</b> Add assets to a board

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "board_assets": {
      "items": {
        "$ref": "#/definitions/BoardAsset"
      },
      "type": "array"
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Provide a header to specify the language of result values."
    },
    "board_id": {
      "type": "string",
      "description": "Specify the board to add assets to."
    }
  },
  "additionalProperties": false,
  "required": [
    "board_assets",
    "Authorization",
    "board_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AddBoardAssetsResult"
}
```
## Operation: Boards_RemoveAsset
<b>***BETA***</b> Remove an asset from a board

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Provide a header to specify the language of result values."
    },
    "asset_id": {
      "type": "string",
      "description": "Specify the asset to remove from the board."
    },
    "board_id": {
      "type": "string",
      "description": "Specify the board to remove an asset from."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "asset_id",
    "board_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: Boards_AddAsset
<b>***BETA***</b> Add an asset to a board

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Provide a header to specify the language of result values."
    },
    "asset_id": {
      "type": "string",
      "description": "Specify the asset to add to the board. If it is already in the board's asset collection, no action is taken."
    },
    "board_id": {
      "type": "string",
      "description": "Specify the board to add an asset to."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "asset_id",
    "board_id"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: Boards_GetComments
<b>***BETA***</b> Get comments from a board

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Provide a header to specify the language of result values."
    },
    "board_id": {
      "type": "string",
      "description": "Specify the board to retrieve comments from."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "board_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comment_list"
}
```
## Operation: Boards_AddComment
<b>***BETA***</b> Add a comment to a board

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "comment": {
      "$ref": "#/definitions/comment_request"
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Provide a header to specify the language of result values."
    },
    "board_id": {
      "type": "string",
      "description": "Specify the board to add a comment to."
    }
  },
  "additionalProperties": false,
  "required": [
    "comment",
    "Authorization",
    "board_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/comment_created"
}
```
## Operation: Boards_DeleteComment
<b>***BETA***</b> Delete a comment from a board

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Provide a header to specify the language of result values."
    },
    "board_id": {
      "type": "string",
      "description": "Specify the board containing the comment to delete."
    },
    "comment_id": {
      "type": "string",
      "description": "Specify the comment to delete."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "board_id",
    "comment_id"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: Collections_GetCollections
Gets collections applicable for the customer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/collections"
}
```
## Operation: Countries_GetCountries
Gets countries codes and names.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/countries"
}
```
## Operation: Downloads_GetDownloads
Returns information about a customer's downloaded assets.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "company_downloads": {
      "type": "boolean",
      "description": "If specified, returns the list of previously downloaded images for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false."
    },
    "date_from": {
      "type": "string",
      "format": "date-time",
      "description": "If specified, select assets downloaded on or after this date. Dates should be submitted in ISO\r\n                8601 format (i.e., YYYY-MM-DD hh:mm:ss.sss). If time is omitted, midnight is assumed. Date/times are UTC."
    },
    "date_to": {
      "type": "string",
      "format": "date-time",
      "description": "If specified, select assets downloaded on or before this date. Dates should be submitted in ISO\r\n                8601 format (i.e., YYYY-MM-DD hh:mm:ss.sss). If time is omitted, midnight is assumed. Date/times are UTC."
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Identifies page to return. Default is 1."
    },
    "page_size": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies page size. Default is 30, maximum page_size is 100."
    },
    "product_type": {
      "type": "string",
      "description": "Specifies product type to be included in the previous download results.",
      "enum": [
        "easyaccess",
        "editorialsubscription",
        "imagepack",
        "premiumaccess",
        "royaltyfreesubscription",
        "creditpack"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/downloads_response"
}
```
## Operation: v3.downloads.images.id.post
The single step download call returns either a redirect or a response message with the URI to download the largest
                image available.
                Returns HTTP status code 303 Redirect to download URI or HTTP status code 200.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "download_details": {
      "$ref": "#/definitions/PremiumAccessDownloadData"
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "id": {
      "type": "string",
      "description": "Id of image to download."
    },
    "auto_download": {
      "type": "boolean",
      "description": "Specifies whether to auto-download the image. If true is specified, a 303 SeeOther status is returned with a\r\n                    Location header set to the location of the image.\r\n                    If false is specified, the download URI will be returned in the response message."
    },
    "file_type": {
      "type": "string",
      "description": "File Type expressed with three character file extension.",
      "enum": [
        "eps",
        "jpg"
      ]
    },
    "height": {
      "type": "string",
      "description": "Specifies the pixel height of the particular image to download.\r\n                    Available heights can be found in the images/{ids} response for the specific image.\r\n                    If left blank, it will return the largest available size."
    },
    "product_id": {
      "type": "integer",
      "format": "int32",
      "description": "Identifier of the instance for the selected product offering type."
    },
    "product_type": {
      "type": "string",
      "description": "Product type.",
      "enum": [
        "easyaccess",
        "editorialsubscription",
        "imagepack",
        "premiumaccess",
        "royaltyfreesubscription",
        "creditpack"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "download_details",
    "Authorization",
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: Downloads_PostVideoDownloads
The single step download call returns either a redirect or a response message with the URI to download the largest
                video available.
                Returns HTTP status code 303 Redirect to download URI or HTTP status code 200.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "id": {
      "type": "string",
      "description": "Id of video to download."
    },
    "auto_download": {
      "type": "boolean",
      "description": "Specifies whether to auto-download the video. If true is specified, a 303 SeeOther status is returned with a\r\n                    Location header set to the location of the video.\r\n                    If false is specified, the download URI will be returned in the response message."
    },
    "product_id": {
      "type": "integer",
      "format": "int32",
      "description": "Identifier of the instance for the selected product offering type."
    },
    "size": {
      "type": "string",
      "description": "Specifies the size to be downloaded."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization",
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: v3.downloads.id.post
The single step download call returns either a redirect or a response message with the URI to download the largest
                image available.
                Returns HTTP status code 303 Redirect to download URI or HTTP status code 200.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "download_details": {
      "$ref": "#/definitions/PremiumAccessDownloadData"
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "id": {
      "type": "string",
      "description": "Id of image to download."
    },
    "auto_download": {
      "type": "boolean",
      "description": "Specifies whether to auto-download the image. If true is specified, a 303 SeeOther status is returned with a\r\n                    Location header set to the location of the image.\r\n                    If false is specified, the download URI will be returned in the response message."
    },
    "file_type": {
      "type": "string",
      "description": "File Type expressed with three character file extension.",
      "enum": [
        "eps",
        "jpg"
      ]
    },
    "height": {
      "type": "string",
      "description": "Specifies the pixel height of the particular image to download.\r\n                    Available heights can be found in the images/{ids} response for the specific image.\r\n                    If left blank, it will return the largest available size."
    },
    "product_id": {
      "type": "integer",
      "format": "int32",
      "description": "Identifier of the instance for the selected product offering type."
    },
    "product_type": {
      "type": "string",
      "description": "Product type.",
      "enum": [
        "easyaccess",
        "editorialsubscription",
        "imagepack",
        "premiumaccess",
        "royaltyfreesubscription",
        "creditpack"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "download_details",
    "Authorization",
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: Events_GetBatch
Returns an array of event metadata

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "fields": {
      "type": "array",
      "description": "A comma separated list of fields to return in the response.",
      "enum": [
        "id",
        "child_event_count",
        "editorial_segments",
        "hero_image",
        "image_count",
        "location",
        "name",
        "start_date",
        "type"
      ]
    },
    "ids": {
      "type": "array",
      "description": "A comma separated list of event ids."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/events_result"
}
```
## Operation: Events_Get
Returns an array of event metadata

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "id": {
      "type": "integer",
      "format": "int32",
      "description": "An event id."
    },
    "fields": {
      "type": "array",
      "description": "A comma separated list of fields to return in the response.",
      "enum": [
        "id",
        "child_event_count",
        "editorial_segments",
        "hero_image",
        "image_count",
        "location",
        "name",
        "start_date",
        "type"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/event"
}
```
## Operation: Images_GetBatch
Get metadata for multiple images by supplying multiple image ids

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "ids": {
      "type": "array",
      "description": "Specifies one or more image ids to return. Use comma delimiter when requesting multiple ids."
    },
    "fields": {
      "type": "array",
      "description": "Specifies fields to return. Defaults to 'summary_set'.",
      "enum": [
        "allowed_use",
        "alternative_ids",
        "artist",
        "artist_title",
        "asset_family",
        "call_for_image",
        "caption",
        "city",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "comp",
        "copyright",
        "country",
        "credit_line",
        "date_camera_shot",
        "date_created",
        "date_submitted",
        "detail_set",
        "display_set",
        "download_sizes",
        "downloads",
        "editorial_segments",
        "editorial_source",
        "entity_details",
        "event_ids",
        "graphical_style",
        "id",
        "keywords",
        "largest_downloads",
        "license_model",
        "links",
        "max_dimensions",
        "orientation",
        "people",
        "prestige",
        "preview",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "state_province",
        "summary_set",
        "thumb",
        "title",
        "uri_oembed",
        "istock_licenses"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/images_detail"
}
```
## Operation: Images_Get
Get metadata for a single image by supplying one image id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "id": {
      "type": "string",
      "description": "An image id. For more than one image please use the /v3/images endpoint."
    },
    "fields": {
      "type": "array",
      "description": "Specifies fields to return. Defaults to 'summary_set'.",
      "enum": [
        "allowed_use",
        "alternative_ids",
        "artist",
        "artist_title",
        "asset_family",
        "call_for_image",
        "caption",
        "city",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "comp",
        "copyright",
        "country",
        "credit_line",
        "date_camera_shot",
        "date_created",
        "date_submitted",
        "detail_set",
        "display_set",
        "download_sizes",
        "downloads",
        "editorial_segments",
        "editorial_source",
        "entity_details",
        "event_ids",
        "graphical_style",
        "id",
        "keywords",
        "largest_downloads",
        "license_model",
        "links",
        "max_dimensions",
        "orientation",
        "people",
        "prestige",
        "preview",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "state_province",
        "summary_set",
        "thumb",
        "title",
        "uri_oembed",
        "istock_licenses"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/images_detail"
}
```
## Operation: Images_GetSimilarImages
Search for images similar to an image

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "id": {
      "type": "string",
      "description": "Identifies an existing image"
    },
    "fields": {
      "type": "array",
      "description": "Specifies fields to return. Defaults to 'summary_set'.",
      "enum": [
        "accessrestriction",
        "allowed_use",
        "alternative_ids",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "comp",
        "copyright",
        "date_camera_shot",
        "date_created",
        "detail_set",
        "display_set",
        "editorial_segments",
        "editorial_source",
        "entity_details",
        "event_ids",
        "graphical_style",
        "id",
        "keywords",
        "largest_downloads",
        "license_model",
        "max_dimensions",
        "orientation",
        "people",
        "prestige",
        "preview",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "summary_set",
        "thumb",
        "title",
        "uri_oembed",
        "istock_licenses"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Identifies page to return. Default is 1."
    },
    "page_size": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies page size. Default is 30, maximum page_size is 100."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: Products_GetProducts
Get Products

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "fields": {
      "type": "array",
      "description": "Comma separated list of fields. Allows product download requirements to be returned.",
      "enum": [
        "download_requirements"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ProductsResult"
}
```
## Operation: Purchases_GetPreviousAssetPurchases
Get Previously Purchased Images and Video

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "date_from": {
      "type": "string",
      "format": "date-time",
      "description": "If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD)."
    },
    "date_to": {
      "type": "string",
      "format": "date-time",
      "description": "If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD)."
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Identifies page to return. Default is 1."
    },
    "page_size": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies page size. Default is 75, maximum page_size is 100."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PreviousAssetPurchases"
}
```
## Operation: Purchases_GetPreviousPurchases
Get Previously Purchased Images

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "date_from": {
      "type": "string",
      "format": "date-time",
      "description": "If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD)."
    },
    "date_to": {
      "type": "string",
      "format": "date-time",
      "description": "If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD)."
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Identifies page to return. Default is 1."
    },
    "page_size": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies page size. Default is 75, maximum page_size is 100."
    }
  },
  "additionalProperties": false,
  "required": [
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PreviousPurchases"
}
```
## Operation: Search_GetEvents
Search for events

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "date_from": {
      "type": "string",
      "format": "date-time",
      "description": "Filters to events that start on or after this date. Use ISO 8601 format (e.g., 1999-12-31)."
    },
    "date_to": {
      "type": "string",
      "format": "date-time",
      "description": "Filters to events that start on or before this date. Use ISO 8601 format (e.g., 1999-12-31)."
    },
    "editorial_segment": {
      "type": "string",
      "description": "Filters to events with a matching editorial segment.",
      "enum": [
        "archival",
        "entertainment",
        "news",
        "publicity",
        "royalty",
        "sport"
      ]
    },
    "fields": {
      "type": "array",
      "description": "Specifies fields to return. Default set is 'id','name','start_date'.",
      "enum": [
        "id",
        "child_event_count",
        "editorial_segments",
        "hero_image",
        "image_count",
        "keywords",
        "location",
        "name",
        "start_date",
        "type"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Request results starting at a page number (default is 1)."
    },
    "page_size": {
      "type": "integer",
      "format": "int32",
      "description": "Request number of images to return in each page."
    },
    "phrase": {
      "type": "string",
      "description": "Filters to events related to this phrase"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/events_result"
}
```
## Operation: Search_GetImagesByPhrase
Search for both creative and editorial images

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "age_of_people": {
      "type": "array",
      "description": "Filter based on the age of individuals in an image.",
      "enum": [
        "newborn",
        "baby",
        "child",
        "teenager",
        "young_adult",
        "adult",
        "adults_only",
        "mature_adult",
        "senior_adult",
        "0-1_months",
        "2-5_months",
        "6-11_months",
        "12-17_months",
        "18-23_months",
        "2-3_years",
        "4-5_years",
        "6-7_years",
        "8-9_years",
        "10-11_years",
        "12-13_years",
        "14-15_years",
        "16-17_years",
        "18-19_years",
        "20-24_years",
        "20-29_years",
        "25-29_years",
        "30-34_years",
        "30-39_years",
        "35-39_years",
        "40-44_years",
        "40-49_years",
        "45-49_years",
        "50-54_years",
        "50-59_years",
        "55-59_years",
        "60-64_years",
        "60-69_years",
        "65-69_years",
        "70-79_years",
        "80-89_years",
        "90_plus_years",
        "100_over"
      ]
    },
    "artists": {
      "type": "string",
      "description": "Search for images by specific artists (free-text, comma-separated list of artists)."
    },
    "collection_codes": {
      "type": "array",
      "description": "Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type."
    },
    "collections_filter_type": {
      "type": "string",
      "description": "Provides searching based on specified collection(s).",
      "enum": [
        "include",
        "exclude"
      ]
    },
    "color": {
      "type": "string",
      "description": "Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244). Note: when specified, results will not contain editorial images."
    },
    "compositions": {
      "type": "array",
      "description": "Filter based on image composition.",
      "enum": [
        "abstract",
        "candid",
        "close_up",
        "copy_space",
        "cut_out",
        "full_frame",
        "full_length",
        "headshot",
        "looking_at_camera",
        "macro",
        "portrait",
        "sparse",
        "still_life",
        "three_quarter_length",
        "waist_up"
      ]
    },
    "embed_content_only": {
      "type": "boolean",
      "description": "Restrict search results to embeddable images. The default is false."
    },
    "ethnicity": {
      "type": "array",
      "description": "Filter search results based on the ethnicity of individuals in an image.",
      "enum": [
        "black",
        "caucasian",
        "east_asian",
        "hispanic_latino",
        "japanese",
        "middle_eastern",
        "mixed_race_person",
        "multiethnic_group",
        "native_american_first_nations",
        "pacific_islander",
        "south_asian",
        "southeast_asian"
      ]
    },
    "event_ids": {
      "type": "array",
      "description": "Filter based on specific events"
    },
    "exclude_nudity": {
      "type": "boolean",
      "description": "Excludes images containing nudity. The default is false."
    },
    "fields": {
      "type": "array",
      "description": "Specifies fields to return. Defaults to 'summary_set'.",
      "enum": [
        "accessrestriction",
        "allowed_use",
        "alternative_ids",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "comp",
        "copyright",
        "date_camera_shot",
        "date_created",
        "detail_set",
        "display_set",
        "editorial_segments",
        "editorial_source",
        "entity_details",
        "event_ids",
        "graphical_style",
        "id",
        "keywords",
        "largest_downloads",
        "license_model",
        "max_dimensions",
        "orientation",
        "people",
        "prestige",
        "preview",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "summary_set",
        "thumb",
        "title",
        "uri_oembed",
        "istock_licenses"
      ]
    },
    "file_types": {
      "type": "array",
      "description": "Return only images having a specific file type.",
      "enum": [
        "eps",
        "jpg"
      ]
    },
    "graphical_styles": {
      "type": "array",
      "description": "Filter based on graphical style of the image.",
      "enum": [
        "fine_art",
        "illustration",
        "photography"
      ]
    },
    "keyword_ids": {
      "type": "array",
      "description": "Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned."
    },
    "license_models": {
      "type": "array",
      "description": "Specifies the image licensing model(s).",
      "enum": [
        "rightsmanaged",
        "royaltyfree"
      ]
    },
    "minimum_size": {
      "type": "string",
      "description": "Filter based on minimum size requested.",
      "enum": [
        "x_small",
        "small",
        "medium",
        "large",
        "x_large",
        "xx_large"
      ]
    },
    "number_of_people": {
      "type": "array",
      "description": "Filter based on the number of people in the image.",
      "enum": [
        "none",
        "one",
        "two",
        "group"
      ]
    },
    "orientations": {
      "type": "array",
      "description": "Return only images with selected aspect ratios.",
      "enum": [
        "Horizontal",
        "Vertical",
        "Square",
        "PanoramicHorizontal",
        "PanoramicVertical"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Request results starting at a page number (default is 1)."
    },
    "page_size": {
      "type": "integer",
      "format": "int32",
      "description": "Request number of images to return in each page."
    },
    "phrase": {
      "type": "string",
      "description": "Search images using a search phrase."
    },
    "prestige_content_only": {
      "type": "boolean",
      "description": "Restrict search results to prestige images. The default is false."
    },
    "product_types": {
      "type": "array",
      "description": "Filter images to those having product types from the selected list.",
      "enum": [
        "easyaccess",
        "editorialsubscription",
        "imagepack",
        "premiumaccess",
        "royaltyfreesubscription",
        "creditpack"
      ]
    },
    "sort_order": {
      "type": "string",
      "description": "Select sort order of results.",
      "enum": [
        "best_match",
        "most_popular",
        "newest"
      ]
    },
    "specific_people": {
      "type": "array",
      "description": "Return only images associated with specific people (using a comma-delimited list)."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/image_search_results"
}
```
## Operation: Search_GetCreativeImagesByPhrase
Search for creative images only

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "age_of_people": {
      "type": "array",
      "description": "Filter based on the age of individuals in an image.",
      "enum": [
        "newborn",
        "baby",
        "child",
        "teenager",
        "young_adult",
        "adult",
        "adults_only",
        "mature_adult",
        "senior_adult",
        "0-1_months",
        "2-5_months",
        "6-11_months",
        "12-17_months",
        "18-23_months",
        "2-3_years",
        "4-5_years",
        "6-7_years",
        "8-9_years",
        "10-11_years",
        "12-13_years",
        "14-15_years",
        "16-17_years",
        "18-19_years",
        "20-24_years",
        "20-29_years",
        "25-29_years",
        "30-34_years",
        "30-39_years",
        "35-39_years",
        "40-44_years",
        "40-49_years",
        "45-49_years",
        "50-54_years",
        "50-59_years",
        "55-59_years",
        "60-64_years",
        "60-69_years",
        "65-69_years",
        "70-79_years",
        "80-89_years",
        "90_plus_years",
        "100_over"
      ]
    },
    "artists": {
      "type": "string",
      "description": "Search for images by specific artists (free-text, comma-separated list of artists)."
    },
    "collection_codes": {
      "type": "array",
      "description": "Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type."
    },
    "collections_filter_type": {
      "type": "string",
      "description": "Use to include or exclude collections from search.",
      "enum": [
        "include",
        "exclude"
      ]
    },
    "color": {
      "type": "string",
      "description": "Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244)."
    },
    "compositions": {
      "type": "array",
      "description": "Filter based on image composition.",
      "enum": [
        "abstract",
        "candid",
        "close_up",
        "copy_space",
        "cut_out",
        "full_frame",
        "full_length",
        "headshot",
        "looking_at_camera",
        "macro",
        "portrait",
        "sparse",
        "still_life",
        "three_quarter_length",
        "waist_up"
      ]
    },
    "embed_content_only": {
      "type": "boolean",
      "description": "Restrict search results to embeddable images. The default is false."
    },
    "ethnicity": {
      "type": "array",
      "description": "Filter search results based on the ethnicity of individuals in an image.",
      "enum": [
        "black",
        "caucasian",
        "east_asian",
        "hispanic_latino",
        "japanese",
        "middle_eastern",
        "mixed_race_person",
        "multiethnic_group",
        "native_american_first_nations",
        "pacific_islander",
        "south_asian",
        "southeast_asian"
      ]
    },
    "exclude_nudity": {
      "type": "boolean",
      "description": "Excludes images containing nudity. The default is false."
    },
    "fields": {
      "type": "array",
      "description": "Specifies fields to return. Defaults to 'summary_set'.",
      "enum": [
        "allowed_use",
        "alternative_ids",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "comp",
        "copyright",
        "date_camera_shot",
        "date_created",
        "detail_set",
        "display_set",
        "graphical_style",
        "id",
        "keywords",
        "largest_downloads",
        "license_model",
        "max_dimensions",
        "orientation",
        "prestige",
        "preview",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "summary_set",
        "thumb",
        "title",
        "uri_oembed",
        "istock_licenses"
      ]
    },
    "file_types": {
      "type": "array",
      "description": "Return only images having a specific file type.",
      "enum": [
        "eps",
        "jpg"
      ]
    },
    "graphical_styles": {
      "type": "array",
      "description": "Filter based on graphical style of the image.",
      "enum": [
        "fine_art",
        "illustration",
        "photography"
      ]
    },
    "keyword_ids": {
      "type": "array",
      "description": "Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned."
    },
    "license_models": {
      "type": "array",
      "description": "Specifies the image licensing model(s).",
      "enum": [
        "rightsmanaged",
        "royaltyfree"
      ]
    },
    "minimum_size": {
      "type": "string",
      "description": "Filter based on minimum size requested.",
      "enum": [
        "x_small",
        "small",
        "medium",
        "large",
        "x_large",
        "xx_large"
      ]
    },
    "number_of_people": {
      "type": "array",
      "description": "Filter based on the number of people in the image.",
      "enum": [
        "none",
        "one",
        "two",
        "group"
      ]
    },
    "orientations": {
      "type": "array",
      "description": "Return only images with selected aspect ratios.",
      "enum": [
        "Horizontal",
        "Vertical",
        "Square",
        "PanoramicHorizontal",
        "PanoramicVertical"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Request results starting at a page number (default is 1)."
    },
    "page_size": {
      "type": "integer",
      "format": "int32",
      "description": "Request number of images to return in each page."
    },
    "phrase": {
      "type": "string",
      "description": "Search images using a search phrase."
    },
    "prestige_content_only": {
      "type": "boolean",
      "description": "Restrict search results to prestige images. The default is false."
    },
    "product_types": {
      "type": "array",
      "description": "Filter images to those having product types from the selected list.",
      "enum": [
        "easyaccess",
        "editorialsubscription",
        "imagepack",
        "premiumaccess",
        "royaltyfreesubscription",
        "creditpack"
      ]
    },
    "sort_order": {
      "type": "string",
      "description": "Select sort order of results.",
      "enum": [
        "best_match",
        "most_popular",
        "newest"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/creative_image_search_results"
}
```
## Operation: Search_GetEditorialImagesByPhrase
Search for editorial images only

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "age_of_people": {
      "type": "array",
      "description": "Filter based on the age of individuals in an image.",
      "enum": [
        "newborn",
        "baby",
        "child",
        "teenager",
        "young_adult",
        "adult",
        "adults_only",
        "mature_adult",
        "senior_adult",
        "0-1_months",
        "2-5_months",
        "6-11_months",
        "12-17_months",
        "18-23_months",
        "2-3_years",
        "4-5_years",
        "6-7_years",
        "8-9_years",
        "10-11_years",
        "12-13_years",
        "14-15_years",
        "16-17_years",
        "18-19_years",
        "20-24_years",
        "20-29_years",
        "25-29_years",
        "30-34_years",
        "30-39_years",
        "35-39_years",
        "40-44_years",
        "40-49_years",
        "45-49_years",
        "50-54_years",
        "50-59_years",
        "55-59_years",
        "60-64_years",
        "60-69_years",
        "65-69_years",
        "70-79_years",
        "80-89_years",
        "90_plus_years",
        "100_over"
      ]
    },
    "artists": {
      "type": "string",
      "description": "Search for images by specific artists (free-text, comma-separated list of artists)."
    },
    "collection_codes": {
      "type": "array",
      "description": "Filter by collections (comma-separated list of collection codes). Include or exclude based on collections_filter_type."
    },
    "collections_filter_type": {
      "type": "string",
      "description": "Use to include or exclude collections from search.",
      "enum": [
        "include",
        "exclude"
      ]
    },
    "compositions": {
      "type": "array",
      "description": "Filter based on image composition.",
      "enum": [
        "abstract",
        "candid",
        "close_up",
        "copy_space",
        "cut_out",
        "full_frame",
        "full_length",
        "headshot",
        "looking_at_camera",
        "macro",
        "portrait",
        "sparse",
        "still_life",
        "three_quarter_length",
        "waist_up"
      ]
    },
    "date_from": {
      "type": "string",
      "format": "date-time",
      "description": "Return only images that are created on or after this date. Use ISO 8601 format (e.g., 1999-12-31)."
    },
    "date_to": {
      "type": "string",
      "format": "date-time",
      "description": "Return only images that are created on or before this date. Use ISO 8601 format (e.g., 1999-12-31)."
    },
    "editorial_segments": {
      "type": "array",
      "description": "Return only events with a matching editorial segment.",
      "enum": [
        "archival",
        "entertainment",
        "news",
        "publicity",
        "royalty",
        "sport"
      ]
    },
    "embed_content_only": {
      "type": "boolean",
      "description": "Restrict search results to embeddable images. The default is false."
    },
    "entity_uris": {
      "type": "array",
      "description": "specify linked data entity uri."
    },
    "ethnicity": {
      "type": "array",
      "description": "Filter search results based on the ethnicity of individuals in an image.",
      "enum": [
        "black",
        "caucasian",
        "east_asian",
        "hispanic_latino",
        "japanese",
        "middle_eastern",
        "mixed_race_person",
        "multiethnic_group",
        "native_american_first_nations",
        "pacific_islander",
        "south_asian",
        "southeast_asian"
      ]
    },
    "event_ids": {
      "type": "array",
      "description": "Filter based on specific events"
    },
    "exclude_nudity": {
      "type": "boolean",
      "description": "Excludes images containing nudity. The default is false."
    },
    "fields": {
      "type": "array",
      "description": "Specifies fields to return. Defaults to 'summary_set'.",
      "enum": [
        "allowed_use",
        "alternative_ids",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "comp",
        "copyright",
        "date_camera_shot",
        "date_created",
        "detail_set",
        "display_set",
        "editorial_segments",
        "editorial_source",
        "entity_details",
        "event_ids",
        "graphical_style",
        "id",
        "keywords",
        "largest_downloads",
        "license_model",
        "max_dimensions",
        "orientation",
        "people",
        "preview",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "summary_set",
        "thumb",
        "title",
        "uri_oembed"
      ]
    },
    "file_types": {
      "type": "array",
      "description": "Return only images having a specific file type.",
      "enum": [
        "eps",
        "jpg"
      ]
    },
    "graphical_styles": {
      "type": "array",
      "description": "Filter based on graphical style of the image.",
      "enum": [
        "photography",
        "illustration"
      ]
    },
    "keyword_ids": {
      "type": "array",
      "description": "Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned."
    },
    "minimum_quality_rank": {
      "type": "integer",
      "format": "int32",
      "description": "Filter search results based on minimum quality ranking. Possible values 1, 2, 3 with 1 being best."
    },
    "minimum_size": {
      "type": "string",
      "description": "Filter based on minimum size requested.",
      "enum": [
        "x_small",
        "small",
        "medium",
        "large",
        "x_large",
        "xx_large"
      ]
    },
    "number_of_people": {
      "type": "array",
      "description": "Filter based on the number of people in the image.",
      "enum": [
        "none",
        "one",
        "two",
        "group"
      ]
    },
    "orientations": {
      "type": "array",
      "description": "Return only images with selected aspect ratios.",
      "enum": [
        "Horizontal",
        "Vertical",
        "Square",
        "PanoramicHorizontal",
        "PanoramicVertical"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Request results starting at a page number (default is 1)."
    },
    "page_size": {
      "type": "integer",
      "format": "int32",
      "description": "Request number of images to return in each page."
    },
    "phrase": {
      "type": "string",
      "description": "Search images using a search phrase."
    },
    "product_types": {
      "type": "array",
      "description": "Filter images to those having product types from the selected list.",
      "enum": [
        "easyaccess",
        "editorialsubscription",
        "imagepack",
        "premiumaccess",
        "royaltyfreesubscription",
        "creditpack"
      ]
    },
    "sort_order": {
      "type": "string",
      "description": "Select sort order of results.",
      "enum": [
        "best_match",
        "most_popular",
        "newest",
        "oldest"
      ]
    },
    "specific_people": {
      "type": "array",
      "description": "Return only images associated with specific people (using a comma-delimited list)."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/editorial_image_search_results"
}
```
## Operation: Search_GetVideosByPhrase
Search for both creative and editorial videos

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "age_of_people": {
      "type": "array",
      "description": "Provides filtering according to the age of individuals in a video.",
      "enum": [
        "newborn",
        "baby",
        "child",
        "teenager",
        "young_adult",
        "adult",
        "adults_only",
        "mature_adult",
        "senior_adult",
        "0-1_months",
        "2-5_months",
        "6-11_months",
        "12-17_months",
        "18-23_months",
        "2-3_years",
        "4-5_years",
        "6-7_years",
        "8-9_years",
        "10-11_years",
        "12-13_years",
        "14-15_years",
        "16-17_years",
        "18-19_years",
        "20-24_years",
        "20-29_years",
        "25-29_years",
        "30-34_years",
        "30-39_years",
        "35-39_years",
        "40-44_years",
        "40-49_years",
        "45-49_years",
        "50-54_years",
        "50-59_years",
        "55-59_years",
        "60-64_years",
        "60-69_years",
        "65-69_years",
        "70-79_years",
        "80-89_years",
        "90_plus_years",
        "100_over"
      ]
    },
    "collection_codes": {
      "type": "array",
      "description": "Provides filtering by collection code."
    },
    "collections_filter_type": {
      "type": "string",
      "description": "Provides searching based on specified collection(s).",
      "enum": [
        "include",
        "exclude"
      ]
    },
    "exclude_nudity": {
      "type": "boolean",
      "description": "Excludes images containing nudity. The default is false."
    },
    "fields": {
      "type": "array",
      "description": "Specifies fields to return. Defaults to 'summary_set'.",
      "enum": [
        "allowed_use",
        "artist",
        "asset_family",
        "caption",
        "clip_length",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "comp",
        "copyright",
        "date_created",
        "detail_set",
        "display_set",
        "editorial_segments",
        "entity_details",
        "era",
        "id",
        "keywords",
        "largest_downloads",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "preview",
        "product_types",
        "referral_destinations",
        "shot_speed",
        "source",
        "summary_set",
        "thumb",
        "title",
        "istock_licenses"
      ]
    },
    "format_available": {
      "type": "string",
      "description": "Filters according to the digital video format available on a film asset.",
      "enum": [
        "sd",
        "hd",
        "4k"
      ]
    },
    "keyword_ids": {
      "type": "array",
      "description": "Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned."
    },
    "license_models": {
      "type": "array",
      "description": "Specifies the video licensing model(s).",
      "enum": [
        "rightsready",
        "royaltyfree"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Identifies page to return. Default is 1."
    },
    "page_size": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies page size. Default is 30, maximum page_size is 100."
    },
    "phrase": {
      "type": "string",
      "description": "Free-text search query."
    },
    "product_types": {
      "type": "array",
      "description": "Provides filtering by a list of product types.",
      "enum": [
        "easyaccess",
        "editorialsubscription",
        "imagepack",
        "premiumaccess",
        "royaltyfreesubscription",
        "creditpack"
      ]
    },
    "sort_order": {
      "type": "string",
      "description": "Allows sorting of results.",
      "enum": [
        "best_match",
        "most_popular",
        "newest",
        "oldest"
      ]
    },
    "specific_people": {
      "type": "array",
      "description": "Provides filtering by specific peoples' names."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/video_search_results"
}
```
## Operation: Search_GetCreativeVideosByPhrase
Search for creative videos

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "age_of_people": {
      "type": "array",
      "description": "Provides filtering according to the age of individuals in a video.",
      "enum": [
        "newborn",
        "baby",
        "child",
        "teenager",
        "young_adult",
        "adult",
        "adults_only",
        "mature_adult",
        "senior_adult",
        "0-1_months",
        "2-5_months",
        "6-11_months",
        "12-17_months",
        "18-23_months",
        "2-3_years",
        "4-5_years",
        "6-7_years",
        "8-9_years",
        "10-11_years",
        "12-13_years",
        "14-15_years",
        "16-17_years",
        "18-19_years",
        "20-24_years",
        "20-29_years",
        "25-29_years",
        "30-34_years",
        "30-39_years",
        "35-39_years",
        "40-44_years",
        "40-49_years",
        "45-49_years",
        "50-54_years",
        "50-59_years",
        "55-59_years",
        "60-64_years",
        "60-69_years",
        "65-69_years",
        "70-79_years",
        "80-89_years",
        "90_plus_years",
        "100_over"
      ]
    },
    "collection_codes": {
      "type": "array",
      "description": "Provides filtering by collection code."
    },
    "collections_filter_type": {
      "type": "string",
      "description": "Provides searching based on specified collection(s).",
      "enum": [
        "include",
        "exclude"
      ]
    },
    "exclude_nudity": {
      "type": "boolean",
      "description": "Excludes images containing nudity. The default is false."
    },
    "fields": {
      "type": "array",
      "description": "Specifies fields to return. Defaults to 'summary_set'.",
      "enum": [
        "allowed_use",
        "artist",
        "asset_family",
        "caption",
        "clip_length",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "comp",
        "copyright",
        "date_created",
        "detail_set",
        "display_set",
        "era",
        "id",
        "keywords",
        "largest_downloads",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "preview",
        "product_types",
        "referral_destinations",
        "shot_speed",
        "source",
        "summary_set",
        "thumb",
        "title"
      ]
    },
    "format_available": {
      "type": "string",
      "description": "Filters according to the digital video format available on a film asset.",
      "enum": [
        "sd",
        "hd",
        "4k"
      ]
    },
    "keyword_ids": {
      "type": "array",
      "description": "Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned."
    },
    "license_models": {
      "type": "array",
      "description": "Specifies the video licensing model(s).",
      "enum": [
        "rightsready",
        "royaltyfree"
      ]
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Identifies page to return. Default is 1."
    },
    "page_size": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies page size. Default is 30, maximum page_size is 100."
    },
    "phrase": {
      "type": "string",
      "description": "Free-text search query."
    },
    "product_types": {
      "type": "array",
      "description": "Allows filtering by a list of product types.",
      "enum": [
        "easyaccess",
        "editorialsubscription",
        "imagepack",
        "premiumaccess",
        "royaltyfreesubscription",
        "creditpack"
      ]
    },
    "sort_order": {
      "type": "string",
      "description": "Allows sorting of results.",
      "enum": [
        "best_match",
        "newest"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/creative_video_search_results"
}
```
## Operation: Search_GetEditorialVideosByPhrase
Search for editorial videos

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "age_of_people": {
      "type": "array",
      "description": "Provides filtering according to the age of individuals in a video.",
      "enum": [
        "newborn",
        "baby",
        "child",
        "teenager",
        "young_adult",
        "adult",
        "adults_only",
        "mature_adult",
        "senior_adult",
        "0-1_months",
        "2-5_months",
        "6-11_months",
        "12-17_months",
        "18-23_months",
        "2-3_years",
        "4-5_years",
        "6-7_years",
        "8-9_years",
        "10-11_years",
        "12-13_years",
        "14-15_years",
        "16-17_years",
        "18-19_years",
        "20-24_years",
        "20-29_years",
        "25-29_years",
        "30-34_years",
        "30-39_years",
        "35-39_years",
        "40-44_years",
        "40-49_years",
        "45-49_years",
        "50-54_years",
        "50-59_years",
        "55-59_years",
        "60-64_years",
        "60-69_years",
        "65-69_years",
        "70-79_years",
        "80-89_years",
        "90_plus_years",
        "100_over"
      ]
    },
    "collection_codes": {
      "type": "array",
      "description": "Provides filtering by collection code."
    },
    "collections_filter_type": {
      "type": "string",
      "description": "Provides searching based on specified collection(s).",
      "enum": [
        "include",
        "exclude"
      ]
    },
    "entity_uris": {
      "type": "array",
      "description": "specify link data entity uri."
    },
    "exclude_nudity": {
      "type": "boolean",
      "description": "Excludes images containing nudity. The default is false."
    },
    "fields": {
      "type": "array",
      "description": "Specifies fields to return. Defaults to 'summary_set'.",
      "enum": [
        "allowed_use",
        "artist",
        "asset_family",
        "caption",
        "clip_length",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "comp",
        "copyright",
        "date_created",
        "detail_set",
        "display_set",
        "editorial_segments",
        "entity_details",
        "era",
        "id",
        "keywords",
        "largest_downloads",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "preview",
        "product_types",
        "referral_destinations",
        "shot_speed",
        "source",
        "summary_set",
        "thumb",
        "title",
        "istock_licenses"
      ]
    },
    "format_available": {
      "type": "string",
      "description": "Filters according to the digital video format available on a film asset.",
      "enum": [
        "sd",
        "hd",
        "4k"
      ]
    },
    "keyword_ids": {
      "type": "array",
      "description": "Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned."
    },
    "page": {
      "type": "integer",
      "format": "int32",
      "description": "Identifies page to return. Default is 1."
    },
    "page_size": {
      "type": "integer",
      "format": "int32",
      "description": "Specifies page size. Default is 30, maximum page_size is 100."
    },
    "phrase": {
      "type": "string",
      "description": "Free-text search query."
    },
    "product_types": {
      "type": "array",
      "description": "Allows filtering by a list of product types.",
      "enum": [
        "easyaccess",
        "editorialsubscription",
        "imagepack",
        "premiumaccess",
        "royaltyfreesubscription",
        "creditpack"
      ]
    },
    "sort_order": {
      "type": "string",
      "description": "Allows sorting of results.",
      "enum": [
        "best_match",
        "most_popular",
        "newest",
        "oldest"
      ]
    },
    "specific_people": {
      "type": "array",
      "description": "Allows filtering by specific peoples' names."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/editorial_video_search_results"
}
```
## Operation: Usage_Put
Report usage of assets via a batch format.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Accept-Language parameter optional. Used to restrict the set of natural languages that are preferred as a response to the request."
    },
    "request": {
      "$ref": "#/definitions/report_usage_batch_request"
    },
    "id": {
      "type": "string",
      "description": "Specifies a unique batch transaction id to identify the report."
    },
    "Authorization": {
      "type": "string",
      "description": "Authorization token required. Used for applying content access restrictions. Use one of the OAuth2 grants to auto-populate this value."
    }
  },
  "additionalProperties": false,
  "required": [
    "request",
    "id",
    "Authorization"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/report_usage_batch_response"
}
```
## Operation: Videos_GetBatch
Get metadata for multiple videos by supplying multiple video ids

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "ids": {
      "type": "array",
      "description": "Specifies one or more video ids to return. Use comma delimiter when requesting multiple ids."
    },
    "fields": {
      "type": "array",
      "description": "Specifies fields to return. Defaults to 'summary_set'.",
      "enum": [
        "id",
        "allowed_use",
        "artist",
        "asset_family",
        "caption",
        "clip_length",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "copyright",
        "comp",
        "date_created",
        "detail_set",
        "display_set",
        "download_sizes",
        "downloads",
        "era",
        "editorial_segments",
        "entity_details",
        "keywords",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "preview",
        "product_types",
        "referral_destinations",
        "shot_speed",
        "source",
        "summary_set",
        "thumb",
        "title",
        "istock_licenses"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "ids"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/videos_detail"
}
```
## Operation: Videos_Get
Get metadata for a single video by supplying one video id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Accept-Language": {
      "type": "string",
      "description": "Specifies the language of result values."
    },
    "Authorization": {
      "type": "string",
      "description": "Provide access token in the format of 'Bearer {token}'."
    },
    "id": {
      "type": "string",
      "description": "A video id. For more than one video please use the /v3/video endpoint."
    },
    "fields": {
      "type": "array",
      "description": "comma delimited list of fields to retrive for the video",
      "enum": [
        "id",
        "allowed_use",
        "artist",
        "asset_family",
        "caption",
        "clip_length",
        "collection_code",
        "collection_id",
        "collection_name",
        "color_type",
        "copyright",
        "comp",
        "date_created",
        "detail_set",
        "display_set",
        "download_sizes",
        "downloads",
        "era",
        "editorial_segments",
        "entity_details",
        "keywords",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "preview",
        "product_types",
        "referral_destinations",
        "shot_speed",
        "source",
        "summary_set",
        "thumb",
        "title",
        "istock_licenses"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/video_detail"
}
```
