# @datafire/gettyimages

Client library for Getty Images

## Installation and Usage
```bash
npm install --save datafire @datafire/gettyimages
```

```js
let datafire = require('datafire');
let gettyimages = require('@datafire/gettyimages').actions;

let account = {
  Api-Key: "",
}
let context = new datafire.Context({
  accounts: {
    gettyimages: account,
  }
})


gettyimages.Search_GetEditorialVideosByPhrase({}, context).then(data => {
  console.log(data);
})
```

## Description
Build applications using the world's most powerful imagery

## Actions
### AssetChanges_PutAssetChanges
Generates asset changes.


```js
gettyimages.AssetChanges_PutAssetChanges({
  "channel_id": 0,
  "Authorization": ""
}, context)
```

#### Parameters
* Accept-Language (string) - Accept-Language parameter optional. Used to restrict the set of natural languages that are preferred as a response to the request.
* channel_id (integer) **required** - Specifies the id of the channel for the asset data. Valid channel ids can be found in the results of the Get Partner Channel query.
* batch_size (integer) - Specifies the number of assets to return. The default is 10; maximum is 500.
* Authorization (string) **required** - Authorization token required. Used for applying content access restrictions. Use one of the OAuth2 grants to auto-populate this value.

### AssetChanges_DeleteAssetChanges
Confirm asset changes acknowledges receipt of asset changes.


```js
gettyimages.AssetChanges_DeleteAssetChanges({
  "change-set-id": 0,
  "Authorization": ""
}, context)
```

#### Parameters
* Accept-Language (string) - Accept-Language parameter optional. Used to restrict the set of natural languages that are preferred as a response to the request.
* change-set-id (integer) **required** - Specify the change-set-id associated with a transaction resource whose receipt you want to confirm.
* Authorization (string) **required** - Authorization token required. Used for applying content access restrictions. Use one of the OAuth2 grants to auto-populate this value.

### AssetChanges_GetPartnerChannel
Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.


```js
gettyimages.AssetChanges_GetPartnerChannel({
  "Authorization": ""
}, context)
```

#### Parameters
* Accept-Language (string) - Accept-Language parameter optional. Used to restrict the set of natural languages that are preferred as a response to the request.
* Authorization (string) **required** - Authorization token required. Used for applying content access restrictions. Use one of the OAuth2 grants to auto-populate this value.

### AssetRegistration_Register
Register a list of customer assets.


```js
gettyimages.AssetRegistration_Register({
  "Authorization": "",
  "request": {}
}, context)
```

#### Parameters
* Authorization (string) **required** - Authorization token required. Used for applying content access restrictions. Use one of the OAuth2 grants to auto-populate this value.
* Accept-Language (string) - Accept-Language parameter optional. Used to restrict the set of natural languages that are preferred as a response to the request.
* request (object) **required** - Specify request containing the list of asset ids you want to register.

### Boards_GetAllBoards
<b>***BETA***</b> Get all boards that the user participates in


```js
gettyimages.Boards_GetAllBoards({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_relationship (string) - Search for boards the user owns or has been invited to as an editor.
* page (integer) - Request results starting at a page number (default is 1).
* page_size (integer) - Request number of boards to return in each page. (default is 30).
* sort_order (string) - Sort the list of boards by last update date or name. Defaults to date_last_updated_descending.

### Boards_CreateBoard
<b>***BETA***</b> Create a new board


```js
gettyimages.Boards_CreateBoard({
  "new_board": {},
  "Authorization": ""
}, context)
```

#### Parameters
* new_board (object) **required**
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.

### Boards_DeleteBoard
<b>***BETA***</b> Delete a board


```js
gettyimages.Boards_DeleteBoard({
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_id (string) **required** - Specify the board to delete.

### Boards_GetBoard
<b>***BETA***</b> Get assets and metadata for a specific board


```js
gettyimages.Boards_GetBoard({
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_id (string) **required** - Retrieve details for a specific board.

### Boards_UpdateBoard
<b>***BETA***</b> Update a board


```js
gettyimages.Boards_UpdateBoard({
  "board_info": {},
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Parameters
* board_info (object) **required**
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_id (string) **required** - Specify the board to update.

### Boards_RemoveAssets
<b>***BETA***</b> Remove assets from a board


```js
gettyimages.Boards_RemoveAssets({
  "Authorization": "",
  "board_id": "",
  "asset_ids": []
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_id (string) **required** - Specify the board to remove assets from.
* asset_ids (array) **required** - List the assets to be removed from the board.

### Boards_AddAssets
<b>***BETA***</b> Add assets to a board


```js
gettyimages.Boards_AddAssets({
  "board_assets": [],
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Parameters
* board_assets (array) **required**
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_id (string) **required** - Specify the board to add assets to.

### Boards_RemoveAsset
<b>***BETA***</b> Remove an asset from a board


```js
gettyimages.Boards_RemoveAsset({
  "Authorization": "",
  "asset_id": "",
  "board_id": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* asset_id (string) **required** - Specify the asset to remove from the board.
* board_id (string) **required** - Specify the board to remove an asset from.

### Boards_AddAsset
<b>***BETA***</b> Add an asset to a board


```js
gettyimages.Boards_AddAsset({
  "Authorization": "",
  "asset_id": "",
  "board_id": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* asset_id (string) **required** - Specify the asset to add to the board. If it is already in the board's asset collection, no action is taken.
* board_id (string) **required** - Specify the board to add an asset to.

### Boards_GetComments
<b>***BETA***</b> Get comments from a board


```js
gettyimages.Boards_GetComments({
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_id (string) **required** - Specify the board to retrieve comments from.

### Boards_AddComment
<b>***BETA***</b> Add a comment to a board


```js
gettyimages.Boards_AddComment({
  "comment": {},
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Parameters
* comment (object) **required**
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_id (string) **required** - Specify the board to add a comment to.

### Boards_DeleteComment
<b>***BETA***</b> Delete a comment from a board


```js
gettyimages.Boards_DeleteComment({
  "Authorization": "",
  "board_id": "",
  "comment_id": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_id (string) **required** - Specify the board containing the comment to delete.
* comment_id (string) **required** - Specify the comment to delete.

### Collections_GetCollections
Gets collections applicable for the customer.


```js
gettyimages.Collections_GetCollections({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Specifies the language of result values.

### Countries_GetCountries
Gets countries codes and names.


```js
gettyimages.Countries_GetCountries({}, context)
```


### Downloads_GetDownloads
Returns information about a customer's downloaded assets.


```js
gettyimages.Downloads_GetDownloads({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* company_downloads (boolean) - If specified, returns the list of previously downloaded images for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.
* date_from (string) - If specified, select assets downloaded on or after this date. Dates should be submitted in ISO
* date_to (string) - If specified, select assets downloaded on or before this date. Dates should be submitted in ISO
* page (integer) - Identifies page to return. Default is 1.
* page_size (integer) - Specifies page size. Default is 30, maximum page_size is 100.
* product_type (string) - Specifies product type to be included in the previous download results.

### v3.downloads.images.id.post
The single step download call returns either a redirect or a response message with the URI to download the largest
                image available.
                Returns HTTP status code 303 Redirect to download URI or HTTP status code 200.


```js
gettyimages.v3.downloads.images.id.post({
  "download_details": {},
  "Authorization": "",
  "id": ""
}, context)
```

#### Parameters
* download_details (object) **required**
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* id (string) **required** - Id of image to download.
* auto_download (boolean) - Specifies whether to auto-download the image. If true is specified, a 303 SeeOther status is returned with a
* file_type (string) - File Type expressed with three character file extension.
* height (string) - Specifies the pixel height of the particular image to download.
* product_id (integer) - Identifier of the instance for the selected product offering type.
* product_type (string) - Product type.

### Downloads_PostVideoDownloads
The single step download call returns either a redirect or a response message with the URI to download the largest
                video available.
                Returns HTTP status code 303 Redirect to download URI or HTTP status code 200.


```js
gettyimages.Downloads_PostVideoDownloads({
  "Authorization": "",
  "id": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* id (string) **required** - Id of video to download.
* auto_download (boolean) - Specifies whether to auto-download the video. If true is specified, a 303 SeeOther status is returned with a
* product_id (integer) - Identifier of the instance for the selected product offering type.
* size (string) - Specifies the size to be downloaded.

### v3.downloads.id.post
The single step download call returns either a redirect or a response message with the URI to download the largest
                image available.
                Returns HTTP status code 303 Redirect to download URI or HTTP status code 200.


```js
gettyimages.v3.downloads.id.post({
  "download_details": {},
  "Authorization": "",
  "id": ""
}, context)
```

#### Parameters
* download_details (object) **required**
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* id (string) **required** - Id of image to download.
* auto_download (boolean) - Specifies whether to auto-download the image. If true is specified, a 303 SeeOther status is returned with a
* file_type (string) - File Type expressed with three character file extension.
* height (string) - Specifies the pixel height of the particular image to download.
* product_id (integer) - Identifier of the instance for the selected product offering type.
* product_type (string) - Product type.

### Events_GetBatch
Returns an array of event metadata


```js
gettyimages.Events_GetBatch({}, context)
```


### Events_Get
Returns an array of event metadata


```js
gettyimages.Events_Get({
  "id": 0
}, context)
```

#### Parameters
* Accept-Language (string) - Specifies the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* id (integer) **required** - An event id.
* fields (array) - A comma separated list of fields to return in the response.

### Images_GetBatch
Get metadata for multiple images by supplying multiple image ids


```js
gettyimages.Images_GetBatch({
  "ids": []
}, context)
```

#### Parameters
* Accept-Language (string) - Specifies the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* ids (array) **required** - Specifies one or more image ids to return. Use comma delimiter when requesting multiple ids.
* fields (array) - Specifies fields to return. Defaults to 'summary_set'.

### Images_Get
Get metadata for a single image by supplying one image id


```js
gettyimages.Images_Get({
  "id": ""
}, context)
```

#### Parameters
* Accept-Language (string) - Specifies the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* id (string) **required** - An image id. For more than one image please use the /v3/images endpoint.
* fields (array) - Specifies fields to return. Defaults to 'summary_set'.

### Images_GetSimilarImages
Search for images similar to an image


```js
gettyimages.Images_GetSimilarImages({
  "id": ""
}, context)
```

#### Parameters
* Accept-Language (string) - Specifies the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* id (string) **required** - Identifies an existing image
* fields (array) - Specifies fields to return. Defaults to 'summary_set'.
* page (integer) - Identifies page to return. Default is 1.
* page_size (integer) - Specifies page size. Default is 30, maximum page_size is 100.

### Products_GetProducts
Get Products


```js
gettyimages.Products_GetProducts({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Specifies the language of result values.
* fields (array) - Comma separated list of fields. Allows product download requirements to be returned.

### Purchases_GetPreviousAssetPurchases
Get Previously Purchased Images and Video


```js
gettyimages.Purchases_GetPreviousAssetPurchases({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* date_from (string) - If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
* date_to (string) - If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
* page (integer) - Identifies page to return. Default is 1.
* page_size (integer) - Specifies page size. Default is 75, maximum page_size is 100.

### Purchases_GetPreviousPurchases
Get Previously Purchased Images


```js
gettyimages.Purchases_GetPreviousPurchases({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* date_from (string) - If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
* date_to (string) - If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
* page (integer) - Identifies page to return. Default is 1.
* page_size (integer) - Specifies page size. Default is 75, maximum page_size is 100.

### Search_GetEvents
Search for events


```js
gettyimages.Search_GetEvents({}, context)
```


### Search_GetImagesByPhrase
Search for both creative and editorial images


```js
gettyimages.Search_GetImagesByPhrase({}, context)
```


### Search_GetCreativeImagesByPhrase
Search for creative images only


```js
gettyimages.Search_GetCreativeImagesByPhrase({}, context)
```


### Search_GetEditorialImagesByPhrase
Search for editorial images only


```js
gettyimages.Search_GetEditorialImagesByPhrase({}, context)
```


### Search_GetVideosByPhrase
Search for both creative and editorial videos


```js
gettyimages.Search_GetVideosByPhrase({}, context)
```


### Search_GetCreativeVideosByPhrase
Search for creative videos


```js
gettyimages.Search_GetCreativeVideosByPhrase({}, context)
```


### Search_GetEditorialVideosByPhrase
Search for editorial videos


```js
gettyimages.Search_GetEditorialVideosByPhrase({}, context)
```


### Usage_Put
Report usage of assets via a batch format.


```js
gettyimages.Usage_Put({
  "request": {},
  "id": "",
  "Authorization": ""
}, context)
```

#### Parameters
* Accept-Language (string) - Accept-Language parameter optional. Used to restrict the set of natural languages that are preferred as a response to the request.
* request (object) **required** - Specifies the request information for the Batch Usages endpoint.
* id (string) **required** - Specifies a unique batch transaction id to identify the report.
* Authorization (string) **required** - Authorization token required. Used for applying content access restrictions. Use one of the OAuth2 grants to auto-populate this value.

### Videos_GetBatch
Get metadata for multiple videos by supplying multiple video ids


```js
gettyimages.Videos_GetBatch({
  "ids": []
}, context)
```

#### Parameters
* Accept-Language (string) - Specifies the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* ids (array) **required** - Specifies one or more video ids to return. Use comma delimiter when requesting multiple ids.
* fields (array) - Specifies fields to return. Defaults to 'summary_set'.

### Videos_Get
Get metadata for a single video by supplying one video id


```js
gettyimages.Videos_Get({
  "id": ""
}, context)
```

#### Parameters
* Accept-Language (string) - Specifies the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* id (string) **required** - A video id. For more than one video please use the /v3/video endpoint.
* fields (array) - comma delimited list of fields to retrive for the video

