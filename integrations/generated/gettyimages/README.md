# @datafire/gettyimages

Client library for Getty Images

## Installation and Usage
```bash
npm install --save datafire @datafire/gettyimages
```

```js
let datafire = require('datafire');
let gettyimages = require('@datafire/gettyimages').create({
  Api-Key: "",
});

gettyimages.Search_GetEditorialVideosByPhrase({}).then(data => {
  console.log(data);
})
```

## Description
Build applications using the world's most powerful imagery

## Actions
### Artists_GetImagesByArtist
***BETA*** Search for images by a photographer


```js
gettyimages.Artists_GetImagesByArtist({
  "artist_name": ""
}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* artist_name (string) **required** - Name of artist for desired images
* fields (array) - Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.
* page (integer) - Identifies page to return. Default page is 1.
* page_size (integer) - Specifies page size. Default page_size is 10, maximum page_size is 100.

### Artists_GetVideosByArtist
***BETA*** Search for videos by a photographer


```js
gettyimages.Artists_GetVideosByArtist({
  "artist_name": ""
}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* artist_name (string) **required** - Name of artist for desired images
* fields (array) - Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.
* page (integer) - Identifies page to return. Default page is 1.
* page_size (integer) - Specifies page size. Default page_size is 10, maximum page_size is 100.

### AssetChanges_PutAssetChanges
Generates asset changes.


```js
gettyimages.AssetChanges_PutAssetChanges({
  "Authorization": "",
  "channel_id": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* channel_id (integer) **required** - Specifies the id of the channel for the asset data. Valid channel ids can be found in the results of the Get Partner Channel query.
* batch_size (integer) - Specifies the number of assets to return. The default is 10; maximum is 500.

### AssetChanges_DeleteAssetChanges
Confirm asset changes acknowledges receipt of asset changes.


```js
gettyimages.AssetChanges_DeleteAssetChanges({
  "Authorization": "",
  "change-set-id": 0
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* change-set-id (integer) **required**

### AssetChanges_GetPartnerChannel
Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.


```js
gettyimages.AssetChanges_GetPartnerChannel({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.

### AssetRegistration_Register
Register a list of customer assets.


```js
gettyimages.AssetRegistration_Register({
  "request": {}
}, context)
```

#### Parameters
* request (object) **required** - Specify request containing the list of asset ids you want to register.

### Boards_GetAllBoards
***BETA*** Get all boards that the user participates in


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
* pageSize (integer) - Request number of boards to return in each page. (default is 30).
* sort_order (string) - Sort the list of boards by last update date or name. Defaults to date_last_updated_descending.

### Boards_CreateBoard
***BETA*** Create a new board


```js
gettyimages.Boards_CreateBoard({
  "new_board": {
    "name": ""
  },
  "Authorization": ""
}, context)
```

#### Parameters
* new_board (object) **required**
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.

### Boards_DeleteBoard
***BETA*** Delete a board


```js
gettyimages.Boards_DeleteBoard({
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_id (string) **required**

### Boards_GetBoard
***BETA*** Get assets and metadata for a specific board


```js
gettyimages.Boards_GetBoard({
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_id (string) **required**

### Boards_UpdateBoard
***BETA*** Update a board


```js
gettyimages.Boards_UpdateBoard({
  "board_info": {
    "name": ""
  },
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Parameters
* board_info (object) **required**
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_id (string) **required**

### Boards_RemoveAssets
***BETA*** Remove assets from a board


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
* board_id (string) **required**
* asset_ids (array) **required** - List the assets to be removed from the board.

### Boards_AddAssets
***BETA*** Add assets to a board


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
* board_id (string) **required**

### Boards_RemoveAsset
***BETA*** Remove an asset from a board


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
* asset_id (string) **required**
* board_id (string) **required**

### Boards_AddAsset
***BETA*** Add an asset to a board


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
* asset_id (string) **required**
* board_id (string) **required**

### Boards_GetComments
***BETA*** Get comments from a board


```js
gettyimages.Boards_GetComments({
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* board_id (string) **required**

### Boards_AddComment
***BETA*** Add a comment to a board


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
* board_id (string) **required**

### Boards_DeleteComment
***BETA*** Delete a comment from a board


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
* board_id (string) **required**
* comment_id (string) **required**

### Collections_GetCollections
Gets collections applicable for the customer.


```js
gettyimages.Collections_GetCollections({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.

### Countries_GetCountries
Gets countries codes and names.


```js
gettyimages.Countries_GetCountries({}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.

### Downloads_GetDownloads
Returns information about a customer's downloaded assets.


```js
gettyimages.Downloads_GetDownloads({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* company_downloads (boolean) - If specified, returns the list of previously downloaded images for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.
* end_date (string) - If specified, select assets downloaded on or before this date. Dates should be submitted in ISO
* page (integer) - Identifies page to return. Default is 1.
* page_size (integer) - Specifies page size. Default is 30, maximum page_size is 100.
* product_type (string) - Specifies product type to be included in the previous download results. To get previous iStockPhoto credit downloads, credit_pack must be selected.
* start_date (string) - If specified, select assets downloaded on or after this date. Dates should be submitted in ISO

### Downloads_PostDownloads
The single step download call returns either a redirect or a response message with the URI to download the largest
                image available.
                Returns HTTP status code 303 Redirect to download URI or HTTP status code 200.


```js
gettyimages.Downloads_PostDownloads({
  "Authorization": "",
  "id": ""
}, context)
```

#### Parameters
* download_details (object)
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* id (string) **required** - <remarks>
* auto_download (boolean) - <remarks>
* file_type (string) - <remarks>
* height (string) - <remarks>
* product_id (integer) - <remarks>
* product_type (string) - <remarks>

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
* Accept-Language (string) - Provide a header to specify the language of result values.
* id (string) **required** - <remarks>
* auto_download (boolean) - <remarks>
* product_id (integer) - <remarks>
* size (string) - Specifies the size to be downloaded.

### Events_GetBatch
Returns an array of event metadata


```js
gettyimages.Events_GetBatch({}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* fields (array) - A comma separated list of fields to return in the response.
* ids (array) - A comma separated list of event ids.

### Events_Get
Returns an array of event metadata


```js
gettyimages.Events_Get({
  "id": 0
}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
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
* Accept-Language (string) - Provide a header to specify the language of result values.
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
* Accept-Language (string) - Provide a header to specify the language of result values.
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
* Accept-Language (string) - Provide a header to specify the language of result values.
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
* Accept-Language (string) - Provide a header to specify the language of result values.
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
* Accept-Language (string) - Provide a header to specify the language of result values.
* end_date (string) - If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
* page (integer) - Identifies page to return. Default is 1.
* page_size (integer) - Specifies page size. Default is 75, maximum page_size is 100.
* start_date (string) - If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).

### Purchases_GetPreviousPurchases
Get Previously Purchased Images


```js
gettyimages.Purchases_GetPreviousPurchases({
  "Authorization": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* Accept-Language (string) - Provide a header to specify the language of result values.
* end_date (string) - If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
* page (integer) - Identifies page to return. Default is 1.
* page_size (integer) - Specifies page size. Default is 75, maximum page_size is 100.
* start_date (string) - If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).

### Search_GetEvents
Search for events


```js
gettyimages.Search_GetEvents({}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* date_from (string) - Filters to events that start on or after this date. Use ISO 8601 format (e.g., 1999-12-31).
* date_to (string) - Filters to events that start on or before this date. Use ISO 8601 format (e.g., 1999-12-31).
* editorial_segment (string) - Filters to events with a matching editorial segment.
* fields (array) - Specifies fields to return. Default set is 'id','name','start_date'.
* page (integer) - Request results starting at a page number (default is 1, maximum is 50).
* page_size (integer) - Request number of images to return in each page.
* phrase (string) - Filters to events related to this phrase

### Search_GetImagesByPhrase
Search for both creative and editorial images


```js
gettyimages.Search_GetImagesByPhrase({}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* age_of_people (array) - Filter based on the age of individuals in an image.
* artists (string) - Search for images by specific artists (free-text, comma-separated list of artists).
* collection_codes (array) - Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.
* collections_filter_type (string) - Provides searching based on specified collection(s).
* color (string) - Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244). Note: when specified, results will not contain editorial images.
* compositions (array) - Filter based on image composition.
* embed_content_only (boolean) - Restrict search results to embeddable images. The default is false.
* ethnicity (array) - Filter search results based on the ethnicity of individuals in an image.
* event_ids (array) - Filter based on specific events
* exclude_nudity (boolean) - Excludes images containing nudity. The default is false.
* fields (array) - Specifies fields to return. Defaults to 'summary_set'.
* file_types (array) - Return only images having a specific file type.
* graphical_styles (array) - Filter based on graphical style of the image.
* keyword_ids (array) - Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
* license_models (array) - Specifies the image licensing model(s).
* minimum_size (string) - Filter based on minimum size requested.
* number_of_people (array) - Filter based on the number of people in the image.
* orientations (array) - Return only images with selected aspect ratios.
* page (integer) - Request results starting at a page number (default is 1).
* page_size (integer) - Request number of images to return in each page.
* phrase (string) - Search images using a search phrase.
* prestige_content_only (boolean) - Restrict search results to prestige images. The default is false.
* product_types (array) - Filter images to those having product types from the selected list.
* sort_order (string) - Select sort order of results.
* specific_people (array) - Return only images associated with specific people (using a comma-delimited list).

### Search_GetCreativeImagesByPhrase
Search for creative images only


```js
gettyimages.Search_GetCreativeImagesByPhrase({}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* age_of_people (array) - Filter based on the age of individuals in an image.
* artists (string) - Search for images by specific artists (free-text, comma-separated list of artists).
* collection_codes (array) - Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.
* collections_filter_type (string) - Use to include or exclude collections from search.
* color (string) - Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244).
* compositions (array) - Filter based on image composition.
* embed_content_only (boolean) - Restrict search results to embeddable images. The default is false.
* ethnicity (array) - Filter search results based on the ethnicity of individuals in an image.
* exclude_nudity (boolean) - Excludes images containing nudity. The default is false.
* fields (array) - Specifies fields to return. Defaults to 'summary_set'.
* file_types (array) - Return only images having a specific file type.
* graphical_styles (array) - Filter based on graphical style of the image.
* keyword_ids (array) - Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
* license_models (array) - Specifies the image licensing model(s).
* minimum_size (string) - Filter based on minimum size requested.
* number_of_people (array) - Filter based on the number of people in the image.
* orientations (array) - Return only images with selected aspect ratios.
* page (integer) - Request results starting at a page number (default is 1).
* page_size (integer) - Request number of images to return in each page.
* phrase (string) - Search images using a search phrase.
* prestige_content_only (boolean) - Restrict search results to prestige images. The default is false.
* product_types (array) - Filter images to those having product types from the selected list.
* sort_order (string) - Select sort order of results.

### Search_GetEditorialImagesByPhrase
Search for editorial images only


```js
gettyimages.Search_GetEditorialImagesByPhrase({}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* age_of_people (array) - Filter based on the age of individuals in an image.
* artists (string) - Search for images by specific artists (free-text, comma-separated list of artists).
* collection_codes (array) - Filter by collections (comma-separated list of collection codes). Include or exclude based on collections_filter_type.
* collections_filter_type (string) - Use to include or exclude collections from search.
* compositions (array) - Filter based on image composition.
* editorial_segments (array) - Return only events with a matching editorial segment.
* embed_content_only (boolean) - Restrict search results to embeddable images. The default is false.
* end_date (string) - Return only images that are created on or before this date. Use ISO 8601 format (e.g., 1999-12-31).
* entity_uris (array) - specify linked data entity uri.
* ethnicity (array) - Filter search results based on the ethnicity of individuals in an image.
* event_ids (array) - Filter based on specific events
* exclude_nudity (boolean) - Excludes images containing nudity. The default is false.
* fields (array) - Specifies fields to return. Defaults to 'summary_set'.
* file_types (array) - Return only images having a specific file type.
* graphical_styles (array) - Filter based on graphical style of the image.
* keyword_ids (array) - Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
* minimum_quality_rank (integer) - Filter search results based on minimum quality ranking. Possible values 1, 2, 3 with 1 being best.
* minimum_size (string) - Filter based on minimum size requested.
* number_of_people (array) - Filter based on the number of people in the image.
* orientations (array) - Return only images with selected aspect ratios.
* page (integer) - Request results starting at a page number (default is 1).
* page_size (integer) - Request number of images to return in each page.
* phrase (string) - Search images using a search phrase.
* product_types (array) - Filter images to those having product types from the selected list.
* sort_order (string) - Select sort order of results.
* specific_people (array) - Return only images associated with specific people (using a comma-delimited list).
* start_date (string) - Return only images that are created on or after this date. Use ISO 8601 format (e.g., 1999-12-31).

### Search_GetVideosByPhrase
Search for both creative and editorial videos


```js
gettyimages.Search_GetVideosByPhrase({}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* age_of_people (array) - Provides filtering according to the age of individuals in a video.
* collection_codes (array) - Provides filtering by collection code.
* collections_filter_type (string) - Provides searching based on specified collection(s).
* editorial_video_types (array) - Allows filtering by types of video.
* exclude_nudity (boolean) - Excludes images containing nudity. The default is false.
* fields (array) - Specifies fields to return. Defaults to 'summary_set'.
* format_available (string) - Filters according to the digital video format available on a film asset.
* frame_rates (array) - Provides filtering by video frame rate (frames/second).
* keyword_ids (array) - Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
* license_models (array) - Specifies the video licensing model(s).
* page (integer) - Identifies page to return. Default is 1.
* page_size (integer) - Specifies page size. Default is 30, maximum page_size is 100.
* phrase (string) - Free-text search query.
* product_types (array) - Provides filtering by a list of product types.
* sort_order (string) - Allows sorting of results.
* specific_people (array) - Provides filtering by specific peoples' names.

### Search_GetCreativeVideosByPhrase
Search for creative videos


```js
gettyimages.Search_GetCreativeVideosByPhrase({}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* age_of_people (array) - Provides filtering according to the age of individuals in a video.
* collection_codes (array) - Provides filtering by collection code.
* collections_filter_type (string) - Provides searching based on specified collection(s).
* exclude_nudity (boolean) - Excludes images containing nudity. The default is false.
* fields (array) - Specifies fields to return. Defaults to 'summary_set'.
* format_available (string) - Filters according to the digital video format available on a film asset.
* frame_rates (array) - Provides filtering by video frame rate (frames/second).
* keyword_ids (array) - Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
* license_models (array) - Specifies the video licensing model(s).
* page (integer) - Identifies page to return. Default is 1.
* page_size (integer) - Specifies page size. Default is 30, maximum page_size is 100.
* phrase (string) - Free-text search query.
* product_types (array) - Allows filtering by a list of product types.
* sort_order (string) - Allows sorting of results.

### Search_GetEditorialVideosByPhrase
Search for editorial videos


```js
gettyimages.Search_GetEditorialVideosByPhrase({}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* age_of_people (array) - Provides filtering according to the age of individuals in a video.
* collection_codes (array) - Provides filtering by collection code.
* collections_filter_type (string) - Provides searching based on specified collection(s).
* editorial_video_types (array) - Allows filtering by types of video.
* entity_uris (array) - specify link data entity uri.
* exclude_nudity (boolean) - Excludes images containing nudity. The default is false.
* fields (array) - Specifies fields to return. Defaults to 'summary_set'.
* format_available (string) - Filters according to the digital video format available on a film asset.
* frame_rates (array) - Provides filtering by video frame rate (frames/second).
* keyword_ids (array) - Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
* page (integer) - Identifies page to return. Default is 1.
* page_size (integer) - Specifies page size. Default is 30, maximum page_size is 100.
* phrase (string) - Free-text search query.
* product_types (array) - Allows filtering by a list of product types.
* sort_order (string) - Allows sorting of results.
* specific_people (array) - Allows filtering by specific peoples' names.

### Usage_Put
Report usage of assets via a batch format.


```js
gettyimages.Usage_Put({
  "request": {},
  "Authorization": "",
  "id": ""
}, context)
```

#### Parameters
* request (object) **required** - Specifies the request information for the Batch Usages endpoint.
* Authorization (string) **required** - Provide access token in the format of 'Bearer {token}'.
* id (string) **required** - Specifies a unique batch transaction id to identify the report.

### Videos_GetBatch
Get metadata for multiple videos by supplying multiple video ids


```js
gettyimages.Videos_GetBatch({
  "ids": []
}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
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
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* id (string) **required** - A video id. For more than one video please use the /v3/video endpoint.
* fields (array) - comma delimited list of fields to retrive for the video

### Videos_GetSimilarVideos
***BETA*** Get videos similar to a video by supplying one video id


```js
gettyimages.Videos_GetSimilarVideos({
  "id": ""
}, context)
```

#### Parameters
* Accept-Language (string) - Provide a header to specify the language of result values.
* Authorization (string) - Provide access token in the format of 'Bearer {token}'.
* id (string) **required** - A video id.
* fields (array) - comma delimited list of fields to retrive for the videos
* page (integer) - Identifies page to return. Default is 1.
* page_size (integer) - Specifies page size. Default is 30, maximum page_size is 100.

