# @datafire/gettyimages

Client library for Getty Images

## Installation and Usage
```bash
npm install --save @datafire/gettyimages
```
```js
let gettyimages = require('@datafire/gettyimages').create({
  "Api-Key": ""
});

gettyimages.Search_GetEditorialVideosByPhrase({}).then(data => {
  console.log(data);
});
```

## Description

Build applications using the world's most powerful imagery

## Actions

### Artists_GetImagesByArtist
Search for images by a photographer


```js
gettyimages.Artists_GetImagesByArtist({
  "artist_name": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * artist_name **required** `string`: Name of artist for desired images
  * fields `array`: Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.
  * page `integer`: Identifies page to return. Default page is 1.
  * page_size `integer`: Specifies page size. Default page_size is 10, maximum page_size is 100.

#### Output
* output [GettyImages.Models.Artists.ImageSearchResults](#gettyimages.models.artists.imagesearchresults)

### Artists_GetVideosByArtist
Search for videos by a photographer


```js
gettyimages.Artists_GetVideosByArtist({
  "artist_name": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * artist_name **required** `string`: Name of artist for desired images
  * fields `array`: Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.
  * page `integer`: Identifies page to return. Default page is 1.
  * page_size `integer`: Specifies page size. Default page_size is 10, maximum page_size is 100.

#### Output
* output [GettyImages.Models.Artists.VideoSearchResults](#gettyimages.models.artists.videosearchresults)

### AssetChanges_PutAssetChanges
# Asset Changes

Get notifications about new, updated or deleted assets.

##  Quickstart

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 

    
Partner channels that have not been checked within the last 120 days will be removed and that partner will no longer be able 
to get change notifications from that channel.
Partners who would like to start using the Asset Changes API again after a period of dormancy should contact their sales
representative to be set up again.



```js
gettyimages.AssetChanges_PutAssetChanges({
  "Authorization": "",
  "channel_id": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * channel_id **required** `integer`: Specifies the id of the channel for the asset data. Valid channel ids can be found in the results of the Get Partner Channel query.
  * batch_size `integer`: Specifies the number of assets to return. The default is 10; maximum is 500.

#### Output
* output [AssetChanges](#assetchanges)

### AssetChanges_DeleteAssetChanges
# Delete Asset Changes

Confirm asset changes acknowledges receipt of asset changes (from the PUT asset changes endpoint).

##  Quickstart

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 



```js
gettyimages.AssetChanges_DeleteAssetChanges({
  "Authorization": "",
  "change-set-id": 0
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * change-set-id **required** `integer`

#### Output
*Output schema unknown*

### AssetChanges_GetPartnerChannel
# Get Partner Channels

Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.

##  Quickstart

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 

Only channels that have been queried in the last 120 days will be included in the list of channels.
Partners who have a channel that has been removed should contact their sales representative to be set up again.




```js
gettyimages.AssetChanges_GetPartnerChannel({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.

#### Output
* output [PartnerChannelList](#partnerchannellist)

### AssetRegistration_Register
# Register Assets

Registers a list of assets that a customer has stored in their system.

##  Quickstart

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 

_Note_: In the event of a successful query (response code 200) there will be nothing in the response body.






```js
gettyimages.AssetRegistration_Register({
  "request": {}
}, context)
```

#### Input
* input `object`
  * request **required** [RegisterAssetsRequest](#registerassetsrequest)

#### Output
* output [Object](#object)

### Boards_GetAllBoards
Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to retrieve all Boards available for a user.

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.



```js
gettyimages.Boards_GetAllBoards({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * board_relationship `string` (values: owned, invited): Search for boards the user owns or has been invited to as an editor.
  * page `integer`: Request results starting at a page number (default is 1).
  * pageSize `integer`: Request number of boards to return in each page. (default is 30).
  * sort_order `string` (values: date_last_updated_descending, date_last_updated_ascending, name_ascending, name_decending): Sort the list of boards by last update date or name. Defaults to date_last_updated_descending.

#### Output
* output [BoardList](#boardlist)

### Boards_CreateBoard
Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to create a Board by a specific id.

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

**NOTE:** *The input to this endpoint is not sanitized in any way, so it is the responsibility of the client to ensure that it is properly formatted and guards against malicious data (for example cross-site scripting attacks or HTML injection) when accessing the data.*



```js
gettyimages.Boards_CreateBoard({
  "new_board": {
    "name": ""
  },
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * new_board **required** [BoardInfo](#boardinfo)
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.

#### Output
* output [BoardCreated](#boardcreated)

### Boards_DeleteBoard
Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to delete a Board by a specific id.

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.




```js
gettyimages.Boards_DeleteBoard({
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * board_id **required** `string`

#### Output
*Output schema unknown*

### Boards_GetBoard
Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to retrieve a Board by a specific id.

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.



```js
gettyimages.Boards_GetBoard({
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * board_id **required** `string`

#### Output
* output [BoardDetail](#boarddetail)

### Boards_UpdateBoard
Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to update a Board by a specific id.

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

**NOTE:** *The input to this endpoint is not sanitized in any way, so it is the responsibility of the client to ensure that it is properly formatted and guards against malicious data (for example cross-site scripting attacks or HTML injection) when accessing the data.*



```js
gettyimages.Boards_UpdateBoard({
  "board_info": {
    "name": ""
  },
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * board_info **required** [BoardInfo](#boardinfo)
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * board_id **required** `string`

#### Output
*Output schema unknown*

### Boards_RemoveAssets
Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq).
Use this endpoint to remove a set of assets from a board.

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 



```js
gettyimages.Boards_RemoveAssets({
  "Authorization": "",
  "board_id": "",
  "asset_ids": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * board_id **required** `string`
  * asset_ids **required** `array`: List the assets to be removed from the board.

#### Output
*Output schema unknown*

### Boards_AddAssets
Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq).
Use this endpoint to add a set of assets to a board.

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 
	
	



```js
gettyimages.Boards_AddAssets({
  "board_assets": [],
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * board_assets **required** `array`
    * items [BoardAsset](#boardasset)
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * board_id **required** `string`

#### Output
* output [AddBoardAssetsResult](#addboardassetsresult)

### Boards_RemoveAsset
Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to remove an asset from a board.

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 



```js
gettyimages.Boards_RemoveAsset({
  "Authorization": "",
  "asset_id": "",
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * asset_id **required** `string`
  * board_id **required** `string`

#### Output
*Output schema unknown*

### Boards_AddAsset
Boards are where you collect, curate, collaborate on and manage photo and video assets in one place.
More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to add an asset to a board.

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 





```js
gettyimages.Boards_AddAsset({
  "Authorization": "",
  "asset_id": "",
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * asset_id **required** `string`
  * board_id **required** `string`

#### Output
* output [Object](#object)

### Boards_GetComments
Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq). Use this endpoint to retrieve all comments for a specific board.

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.



```js
gettyimages.Boards_GetComments({
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * board_id **required** `string`

#### Output
* output [CommentsList](#commentslist)

### Boards_AddComment
Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq).
Use this endpoint to add a comment to a board.

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 



```js
gettyimages.Boards_AddComment({
  "comment": {},
  "Authorization": "",
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * comment **required** [CommentRequest](#commentrequest)
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * board_id **required** `string`

#### Output
* output [CommentCreated](#commentcreated)

### Boards_DeleteComment
Boards are where you collect, curate, collaborate on and manage photo and video assets in one place. More information on the [Boards FAQ](http://www.gettyimages.com/boards/faq).
Use this endpoint to delete a comment from a board.

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 



```js
gettyimages.Boards_DeleteComment({
  "Authorization": "",
  "board_id": "",
  "comment_id": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * board_id **required** `string`
  * comment_id **required** `string`

#### Output
* output [Object](#object)

### Collections_GetCollections
Use this endpoint to retrieve collections associated with your Getty Images account. To browse available collections see our [Image collections page]( http://www.gettyimages.com/creative-images/collections).

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.



```js
gettyimages.Collections_GetCollections({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.

#### Output
* output [GettyImages.Models.Collections.CollectionsList](#gettyimages.models.collections.collectionslist)

### Countries_GetCountries
Returns a list of country objects that contains country name, two letter ISO abbreviation and three letter ISO abbreviation.

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.



```js
gettyimages.Countries_GetCountries({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.

#### Output
* output [GettyImages.Models.Countries.CountriesList](#gettyimages.models.countries.countrieslist)

### Downloads_GetDownloads
Returns information about a customer's previously downloaded assets.

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 
 
	
This endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use, 
you need to also include an authorization token in the header of your request. 
Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.



```js
gettyimages.Downloads_GetDownloads({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * company_downloads `boolean`: If specified, returns the list of previously downloaded images for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.
  * end_date `string`: If specified, select assets downloaded on or before this date. Dates should be submitted in ISO
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.
  * product_type `string` (values: easyaccess, editorialsubscription, imagepack, premiumaccess, royaltyfreesubscription, credit_pack): Specifies product type to be included in the previous download results. To get previous iStockPhoto credit downloads, credit_pack must be selected.
  * start_date `string`: If specified, select assets downloaded on or after this date. Dates should be submitted in ISO

#### Output
* output [GettyImages.Models.Downloads.GetDownloadsResponse](#gettyimages.models.downloads.getdownloadsresponse)

### Downloads_PostDownloads
Use this endpoint to generate download URLs and related data for images you are authorized to download.

Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.

The download limit for a given download period is covered in your product agreement established with Getty Images.

You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 

## Auto Downloads
The `auto_download` request query parameter specifies whether to automatically download the image.

If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).

Client Request:

```
https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=true
```

Server Response:

```
HTTP/1.1 303 See Other
Location: https://delivery.gettyimages.com/...
```

If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the image. 

Client Request:

```
https://api.gettyimages.com/v3/downloads/images/[asset_id]?auto_download=false
```

Server Response:

```
HTTP/1.1 200 OK
{
	"uri": "https://delivery.gettyimages.com/..."
}
```


```js
gettyimages.Downloads_PostDownloads({
  "Authorization": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * download_details [GettyImages.Models.Downloads.PremiumAccessDownloadData](#gettyimages.models.downloads.premiumaccessdownloaddata)
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * id **required** `string`: <remarks>
  * auto_download `boolean`: <remarks>
  * file_type `string` (values: eps, jpg): <remarks>
  * height `string`: <remarks>
  * product_id `integer`: <remarks>
  * product_type `string` (values: easyaccess, editorialsubscription, imagepack, premiumaccess, royaltyfreesubscription, credit_pack): <remarks>

#### Output
* output [System.Object](#system.object)

### Downloads_PostVideoDownloads
Use this endpoint to generate download URLs and related data for videos you are authorized to download.

Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.

The download limit for a given download period is covered in your product agreement established with Getty Images.

You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 

## Auto Downloads
The `auto_download` request query parameter specifies whether to automatically download the video.

If the `auto_download` request query parameter is set to _true_, the API will return an HTTP status code 303 *See Other*. Your client code will need to process this response and redirect to the URI specified in the *Location* header to enable you to automatically download the file. The redirection workflow follows the [HTTP 1.1 protocol](https://tools.ietf.org/html/rfc7231#section-6.4.4).

Client Request:

```
https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=true
```

Server Response:

```
HTTP/1.1 303 See Other
Location: https://delivery.gettyimages.com/...
```

If the `auto_download` request query parameter is set to false, the API will return a HTTP status code 200, along with the URI in the response body which can be used to download the video. 

Client Request:

```
https://api.gettyimages.com/v3/downloads/videos/[asset_id]?auto_download=false
```

Server Response:

```
HTTP/1.1 200 OK
{
	"uri": "https://delivery.gettyimages.com/..."
}
```


```js
gettyimages.Downloads_PostVideoDownloads({
  "Authorization": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * download_details [GettyImages.Models.Downloads.PremiumAccessDownloadData](#gettyimages.models.downloads.premiumaccessdownloaddata)
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * id **required** `string`: <remarks>
  * auto_download `boolean`: <remarks>
  * product_id `integer`: <remarks>
  * size `string`: Specifies the size to be downloaded.

#### Output
* output [System.Object](#system.object)

### Events_GetBatch
This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and
videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with 
an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content 
produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) 
will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
"Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". 

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 



```js
gettyimages.Events_GetBatch({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * fields `array`: A comma separated list of fields to return in the response.
  * ids `array`: A comma separated list of event ids.

#### Output
* output [GettyImages.Models.Events.EventsResult](#gettyimages.models.events.eventsresult)

### Events_Get
This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment 
photographers and videographers cover editorially relevant events occurring around the world.  
All images or video clips produced in association with an event, are assigned the same EventID. 
EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images 
brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be 
consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
"Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". 

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html)
page for more information on how to sign up for an API key. 



```js
gettyimages.Events_Get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * id **required** `integer`: An event id.
  * fields `array`: A comma separated list of fields to return in the response.

#### Output
* output [GettyImages.Models.Events.Event](#gettyimages.models.events.event)

### Images_GetBatch
This endpoint returns the detailed image metadata for all specified images. Due to a wide variety of available image resolutions,
the images are grouped into a handful of size categories for simplicity. 

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) 
page for more information on how to sign up for an API key. 

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build 
search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.

```
{
    "images":
    [
        "artist",
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.

```
{
    "images":
    [
        "allowed_use",
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
        "copyright", 
        "country", 
        "credit_line", 
        "date_created", 
        "date_submitted",
        "download_sizes", 
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "prestige",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "state_province", 
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
files that are most frequently used to build a UI displaying search results. The following fields are provided for every image 
in your result set when you include **display_set** in your request.

```
{
    "images":
    [
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ]
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.



```js
gettyimages.Images_GetBatch({
  "ids": []
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * ids **required** `array`: Specifies one or more image ids to return. Use comma delimiter when requesting multiple ids.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.

#### Output
* output [GettyImages.Models.Images.ImagesDetail](#gettyimages.models.images.imagesdetail)

### Images_Get
This endpoint returns the detailed image metadata for a specified image. Due to a wide variety of available image resolutions, 
the images are grouped into a handful of size categories for simplicity. 

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) 
page for more information on how to sign up for an API key. 
 
## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that
are often used to build search response results. The following fields are provided for every image in your
result set when you include **summary_set** in your request.

```
{
    "images":
    [
        "artist",
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are 
often used to build a detailed view of images. The following fields are provided for every image in your 
result set when you include **detail_set** in your request.

```
{
    "images":
    [
        "allowed_use",
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
        "copyright", 
        "country", 
        "credit_line", 
        "date_created", 
        "date_submitted",
        "download_sizes", 
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "prestige",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "state_province", 
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low
resolution files that are most frequently used to build a UI displaying search results. The following fields are provided 
for every image in your result set when you include **display_set** in your request.

```
{
    "images":
    [
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ]
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.



```js
gettyimages.Images_Get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * id **required** `string`: An image id. For more than one image please use the /v3/images endpoint.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.

#### Output
* output [GettyImages.Models.Images.ImagesDetail](#gettyimages.models.images.imagesdetail)

### Images_GetSimilarImages
This endpoint will search our asset database for images similar to the specified asset id. Due to a wide variety of available 
image resolutions, the images are grouped into a handful of size categories for simplicity. 

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) 
page for more information on how to sign up for an API key. 

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build
search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.

```
{
    "images":
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "display_sizes": 
        [
            {
                "name": "thumb"
            }
        ]
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.

```
{
    "images":
    [
        "allowed_use",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "copyright",
        "date_created",
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result
set when you include **display_set** in your request.

```
{
    "images":
    [
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ]
    ]
}
```


```js
gettyimages.Images_GetSimilarImages({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * id **required** `string`: Identifies an existing image
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.

#### Output
* output [GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem]](#gettyimages.models.search.searchresults[gettyimages.models.search.imagesearchitem])

### Products_GetProducts
This endpoint returns all products available to the username used during authentication. As such, this endpoint requires the use of
a fully authorized access_token. The product data can then be used as search filters, restricting results to images from a specific product.

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html)
page for more information on how to sign up for an API key.



```js
gettyimages.Products_GetProducts({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * fields `array`: Comma separated list of fields. Allows product download requirements to be returned.

#### Output
* output [GettyImages.Models.Products.ProductsResult](#gettyimages.models.products.productsresult)

### Purchases_GetPreviousAssetPurchases
This endpoint returns a list of all assets purchased on gettyimages.com by the username used for authentication. 
Use of this endpoint requires configuration changes to your API key. 
Please contact [developersupport@gettyimages.com](mailto:developersupport@gettyimages.com) to learn more.

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html)
page for more information on how to sign up for an API key.



```js
gettyimages.Purchases_GetPreviousAssetPurchases({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * end_date `string`: If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 75, maximum page_size is 100.
  * start_date `string`: If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).

#### Output
* output [GettyImages.Models.Purchases.PreviousAssetPurchases](#gettyimages.models.purchases.previousassetpurchases)

### Purchases_GetPreviousPurchases
This endpoint returns a list of all images purchased on gettyimages.com by the username used for authentication.
Use of this endpoint requires configuration changes to your API key. Please contact [developersupport@gettyimages.com](mailto:developersupport@gettyimages.com)
to learn more.

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html)
page for more information on how to sign up for an API key.



```js
gettyimages.Purchases_GetPreviousPurchases({
  "Authorization": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * end_date `string`: If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 75, maximum page_size is 100.
  * start_date `string`: If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).

#### Output
* output [GettyImages.Models.Purchases.PreviousPurchases](#gettyimages.models.purchases.previouspurchases)

### Search_GetEvents
Use this endpoint to search Getty Images news, sports and entertainment events. Getty Images photographers and videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with an event, are assigned the same EventID. EventIDs are part of the meta-data returned in Search Results. Only content produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".   

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.


You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.



```js
gettyimages.Search_GetEvents({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * date_from `string`: Filters to events that start on or after this date. Use ISO 8601 format (e.g., 1999-12-31).
  * date_to `string`: Filters to events that start on or before this date. Use ISO 8601 format (e.g., 1999-12-31).
  * editorial_segment `string` (values: archival, entertainment, news, publicity, royalty, sport): Filters to events with a matching editorial segment.
  * fields `array`: Specifies fields to return. Default set is 'id','name','start_date'.
  * page `integer`: Request results starting at a page number (default is 1, maximum is 50).
  * page_size `integer`: Request number of images to return in each page.
  * phrase `string`: Filters to events related to this phrase

#### Output
* output [GettyImages.Models.Search.EventsSearchResult](#gettyimages.models.search.eventssearchresult)

### Search_GetImagesByPhrase
Use this endpoint to search over a blend of our contemporary stock photos, illustrations, archival images, editorial photos, illustrations and archival images.  

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.


You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
To include your API token in the search request, add it to the headers as a Bearer token (example in curl):

	-H "Authorization: Bearer <your-token>"

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.

```
{
    "images": 
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "display_sizes": 
        [
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. 
The following fields are provided for every image in your result set when you include **detail_set** in your request.

```
{
    "images": 
    [
        "allowed_use",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "copyright",
        "date_created",
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "title"
    ]
]
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most 
frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set**
in your request.

```
{
    "images": 
    [
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ]
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.



```js
gettyimages.Search_GetImagesByPhrase({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * age_of_people `array`: Filter based on the age of individuals in an image.
  * artists `string`: Search for images by specific artists (free-text, comma-separated list of artists).
  * collection_codes `array`: Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.
  * collections_filter_type `string` (values: include, exclude): Provides searching based on specified collection(s).
  * color `string`: Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244). Note: when specified, results will not contain editorial images.
  * compositions `array`: Filter based on image composition.
  * embed_content_only `boolean`: Restrict search results to embeddable images. The default is false.
  * ethnicity `array`: Filter search results based on the ethnicity of individuals in an image.
  * event_ids `array`: Filter based on specific events
  * exclude_nudity `boolean`: Excludes images containing nudity. The default is false.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * file_types `array`: Return only images having a specific file type.
  * graphical_styles `array`: Filter based on graphical style of the image.
  * keyword_ids `array`: Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
  * license_models `array`: Specifies the image licensing model(s).
  * minimum_size `string` (values: x_small, small, medium, large, x_large, xx_large): Filter based on minimum size requested.
  * number_of_people `array`: Filter based on the number of people in the image.
  * orientations `array`: Return only images with selected aspect ratios.
  * page `integer`: Request results starting at a page number (default is 1).
  * page_size `integer`: Request number of images to return in each page.
  * phrase `string`: Search images using a search phrase.
  * prestige_content_only `boolean`: Restrict search results to prestige images. The default is false.
  * product_types `array`: Filter images to those from one of your product types. 
  * sort_order `string` (values: best_match, most_popular, newest): Select sort order of results.
  * specific_people `array`: Return only images associated with specific people (using a comma-delimited list).

#### Output
* output [GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem]](#gettyimages.models.search.searchresults[gettyimages.models.search.imagesearchitem])

### Search_GetCreativeImagesByPhrase
Use this endpoint to search our contemporary stock photos, illustrations and archival images.

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) 
page for more information on how to sign up for an API key. 
 
You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to 
build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.

```
{
    "images": 
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "display_sizes": 
        [
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to 
build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.

```
{
    "images": 
    [
        "allowed_use",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "copyright",
        "date_created",
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "title"
    ]
]
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution
files that are most frequently used to build a UI displaying search results. The following fields are provided for every image 
in your result set when you include **display_set** in your request.

```Go
{
    "images": 
    [
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ]
    ]
}
```



```js
gettyimages.Search_GetCreativeImagesByPhrase({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * age_of_people `array`: Filter based on the age of individuals in an image.
  * artists `string`: Search for images by specific artists (free-text, comma-separated list of artists).
  * collection_codes `array`: Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.
  * collections_filter_type `string` (values: include, exclude): Use to include or exclude collections from search.
  * color `string`: Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244).
  * compositions `array`: Filter based on image composition.
  * embed_content_only `boolean`: Restrict search results to embeddable images. The default is false.
  * ethnicity `array`: Filter search results based on the ethnicity of individuals in an image.
  * exclude_nudity `boolean`: Excludes images containing nudity. The default is false.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * file_types `array`: Return only images having a specific file type.
  * graphical_styles `array`: Filter based on graphical style of the image.
  * keyword_ids `array`: Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
  * license_models `array`: Specifies the image licensing model(s).
  * minimum_size `string` (values: x_small, small, medium, large, x_large, xx_large): Filter based on minimum size requested.
  * number_of_people `array`: Filter based on the number of people in the image.
  * orientations `array`: Return only images with selected aspect ratios.
  * page `integer`: Request results starting at a page number (default is 1).
  * page_size `integer`: Request number of images to return in each page.
  * phrase `string`: Search images using a search phrase.
  * prestige_content_only `boolean`: Restrict search results to prestige images. The default is false.
  * product_types `array`: Filter images to those from one of your product types. 
  * sort_order `string` (values: best_match, most_popular, newest): Select sort order of results.

#### Output
* output [GettyImages.Models.Search.CreativeImageSearchResults](#gettyimages.models.search.creativeimagesearchresults)

### Search_GetCreativeImagesByUrl
Allows searching for similar creative images by passing the URL to an existing image.

Before calling the search by image endpoint, an image must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
For example, using cURL:
```sh
curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"
```

Uploads can be overwritten if the names are the same, so using a prefix like the API Key, application name or company name would help keep that
from happening.

Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.

Subsequent searches for the same image can be executed using the `image_fingerprint` that is returned by the inital search.



```js
gettyimages.Search_GetCreativeImagesByUrl({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * image_fingerprint `string`: Specifies the fingerprint of the image to use in the search.
  * image_url `string`: Specifies the location of the image to use in the search.
  * page `integer`: Request results starting at a page number (default is 1).
  * page_size `integer`: Request number of images to return in each page.
  * product_types `array`: Filter images to those from one of your product types. 

#### Output
* output [System.Object](#system.object)

### Search_GetEditorialImagesByPhrase
Use this endpoint to search our editorial stock photos, illustrations and archival images.  Editorial images represent newsworthy events or illustrate matters of general interest, such as news, sport and entertainment and are generally intended for editorial use.

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) 
page for more information on how to sign up for an API key.

You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.
To include your API token in the search request, add it to the headers as a Bearer token (example in curl):

	-H "Authorization: Bearer <your-token>"

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every image in your result set when you include **summary_set** in your request.

```
{
    "images": 
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "display_sizes": 
        [
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "max_dimensions",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of images. The following fields are provided for every image in your result set when you include **detail_set** in your request.

```
{
    "images": 
    [
        "allowed_use",
        "artist",
        "asset_family",
        "call_for_image",
        "caption",
        "collection_code",
        "collection_id",
        "collection_name",
        "copyright",
        "date_created",
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "editorial_segments",
        "event_ids",
        "graphical_style",
        "license_model",
        "max_dimensions",
        "orientation",
        "product_types",
        "quality_rank",
        "referral_destinations",
        "title"
    ]
]
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every image in your result set when you include **display_set** in your request.

```
{
    "images": 
    [
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ]
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.



```js
gettyimages.Search_GetEditorialImagesByPhrase({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * age_of_people `array`: Filter based on the age of individuals in an image.
  * artists `string`: Search for images by specific artists (free-text, comma-separated list of artists).
  * collection_codes `array`: Filter by collections (comma-separated list of collection codes). Include or exclude based on collections_filter_type.
  * collections_filter_type `string` (values: include, exclude): Use to include or exclude collections from search.
  * compositions `array`: Filter based on image composition.
  * editorial_segments `array`: Return only events with a matching editorial segment.
  * embed_content_only `boolean`: Restrict search results to embeddable images. The default is false.
  * end_date `string`: Return only images that are created on or before this date. Use ISO 8601 format (e.g., 1999-12-31).
  * entity_uris `array`: specify linked data entity uri.
  * ethnicity `array`: Filter search results based on the ethnicity of individuals in an image.
  * event_ids `array`: Filter based on specific events
  * exclude_nudity `boolean`: Excludes images containing nudity. The default is false.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * file_types `array`: Return only images having a specific file type.
  * graphical_styles `array`: Filter based on graphical style of the image.
  * keyword_ids `array`: Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
  * minimum_quality_rank `integer`: Filter search results based on minimum quality ranking. Possible values 1, 2, 3 with 1 being best.
  * minimum_size `string` (values: x_small, small, medium, large, x_large, xx_large): Filter based on minimum size requested.
  * number_of_people `array`: Filter based on the number of people in the image.
  * orientations `array`: Return only images with selected aspect ratios.
  * page `integer`: Request results starting at a page number (default is 1).
  * page_size `integer`: Request number of images to return in each page.
  * phrase `string`: Search images using a search phrase.
  * product_types `array`: Filter images to those from one of your product types. 
  * sort_order `string` (values: best_match, most_popular, newest, oldest): Select sort order of results.
  * specific_people `array`: Return only images associated with specific people (using a comma-delimited list).
  * start_date `string`: Return only images that are created on or after this date. Use ISO 8601 format (e.g., 1999-12-31).

#### Output
* output [GettyImages.Models.Search.EditorialImageSearchResults](#gettyimages.models.search.editorialimagesearchresults)

### Search_GetVideosByPhrase
Use this endpoint to search over a blend of our premium stock, contemporary 4K and HD footage, celebrities, news, newsmakers, entertainment, events and archival videos.

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.


You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.

```
{
    "videos":
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_name",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.

```
{
    "videos":
    [
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
        "date_created",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "era",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "product_types",
        "shot_speed",
        "source",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.

```
{
    "videos":
    [
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ]
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.



```js
gettyimages.Search_GetVideosByPhrase({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * age_of_people `array`: Provides filtering according to the age of individuals in a video.
  * collection_codes `array`: Provides filtering by collection code.
  * collections_filter_type `string` (values: include, exclude): Provides searching based on specified collection(s).
  * editorial_video_types `array`: Allows filtering by types of video.
  * exclude_nudity `boolean`: Excludes images containing nudity. The default is false.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * format_available `string` (values: sd, hd, 4k): Filters according to the digital video format available on a film asset.
  * frame_rates `array`: Provides filtering by video frame rate (frames/second).
  * keyword_ids `array`: Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
  * license_models `array`: Specifies the video licensing model(s).
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.
  * phrase `string`: Free-text search query.
  * product_types `array`: Filter images to those from one of your product types. 
  * sort_order `string` (values: best_match, most_popular, newest, oldest): Allows sorting of results.
  * specific_people `array`: Provides filtering by specific peoples' names.

#### Output
* output [GettyImages.Models.Search.VideoSearchResults[GettyImages.Models.Artists.VideoSearchItem]](#gettyimages.models.search.videosearchresults[gettyimages.models.artists.videosearchitem])

### Search_GetCreativeVideosByPhrase
Use this endpoint to search premium stock video, from archival film to contemporary 4K and HD footage.

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html)
page for more information on how to sign up for an API key.

You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without
being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only 
assets that you have a license to use, you need to also include an authorization token in the header of your request.
Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search
response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.

```
{
    "videos": 
    [
        "asset_family", 
        "caption",
        "collection_code",
        "collection_name",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a 
detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.

```
{
    "videos": 
    [
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
        "date_created",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "era",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "product_types",
        "shot_speed",
        "source",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files 
that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result 
set when you include **display_set** in your request.

```
{
    "videos":
    [
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ]
    ]
}
```


```js
gettyimages.Search_GetCreativeVideosByPhrase({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * age_of_people `array`: Provides filtering according to the age of individuals in a video.
  * collection_codes `array`: Provides filtering by collection code.
  * collections_filter_type `string` (values: include, exclude): Provides searching based on specified collection(s).
  * exclude_nudity `boolean`: Excludes images containing nudity. The default is false.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * format_available `string` (values: sd, hd, 4k): Filters according to the digital video format available on a film asset.
  * frame_rates `array`: Provides filtering by video frame rate (frames/second).
  * keyword_ids `array`: Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
  * license_models `array`: Specifies the video licensing model(s).
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.
  * phrase `string`: Free-text search query.
  * product_types `array`: Filter images to those from one of your product types. 
  * sort_order `string` (values: best_match, most_popular, newest): Allows sorting of results.

#### Output
* output [GettyImages.Models.Search.CreativeVideoSearchResults](#gettyimages.models.search.creativevideosearchresults)

### Search_GetEditorialVideosByPhrase
Use this endpoint to search current and archival video clips of celebrities, newsmakers, and events.

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.

```
{
    "videos": 
    [
        "asset_family", 
        "caption",
        "collection_code",
        "collection_name",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.

```
{
    "videos": 
    [
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
        "date_created",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "era",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "product_types",
        "shot_speed",
        "source",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.

```
{
    "videos":
    [
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ]
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.



```js
gettyimages.Search_GetEditorialVideosByPhrase({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * age_of_people `array`: Provides filtering according to the age of individuals in a video.
  * collection_codes `array`: Provides filtering by collection code.
  * collections_filter_type `string` (values: include, exclude): Provides searching based on specified collection(s).
  * editorial_video_types `array`: Allows filtering by types of video.
  * entity_uris `array`: specify link data entity uri.
  * exclude_nudity `boolean`: Excludes images containing nudity. The default is false.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * format_available `string` (values: sd, hd, 4k): Filters according to the digital video format available on a film asset.
  * frame_rates `array`: Provides filtering by video frame rate (frames/second).
  * keyword_ids `array`: Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.
  * phrase `string`: Free-text search query.
  * product_types `array`: Filter images to those from one of your product types. 
  * sort_order `string` (values: best_match, most_popular, newest, oldest): Allows sorting of results.
  * specific_people `array`: Allows filtering by specific peoples' names.

#### Output
* output [GettyImages.Models.Search.EditorialVideoSearchResults](#gettyimages.models.search.editorialvideosearchresults)

### Usage_Put
# Report Usage

Use this endpoint to report the usages of a set of assets. The count of assets submitted in a single batch to this endpoint is limited to 1000. Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. In this case, you will need to remove the invalid asset Ids from the query request and re-submit the query.

##  Quickstart

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 


_Note_: Date of use can be in any unambiguous date format.



```js
gettyimages.Usage_Put({
  "request": {},
  "Authorization": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * request **required** [report_usage_batch_request](#report_usage_batch_request)
  * Authorization **required** `string`: Provide access token in the format of 'Bearer {token}'.
  * id **required** `string`: Specifies a unique batch transaction id to identify the report.

#### Output
* output [report_usage_batch_response](#report_usage_batch_response)

### Videos_GetBatch
Use this endpoint to return detailed video metadata for all the specified video ids.

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.

```
{
    "videos": 
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_name",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.

```
{
    "videos": 
    [
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
        "date_created",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "download_sizes",
        "era",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "product_types",
        "shot_speed",
        "source",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.

```
{
    "videos":
    [
        "display_sizes": 
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ]
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.



```js
gettyimages.Videos_GetBatch({
  "ids": []
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * ids **required** `array`: Specifies one or more video ids to return. Use comma delimiter when requesting multiple ids.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.

#### Output
* output [GettyImages.Models.Videos.VideosDetail](#gettyimages.models.videos.videosdetail)

### Videos_Get
Use this endpoint to return detailed video metadata for the specified video id.

You'll need an API key and access token to use this resource. Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.

You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.

## Working with Fields Sets

Fields sets are used in the **fields** request parameter to receive a suite of metadata fields. The following fields sets are available:

#### Summary Fields Set

The **summary_set** query string parameter fields value represents a small batch of metadata fields that are often used to build search response results. The following fields are provided for every video in your result set when you include **summary_set** in your request.

```
{
    "videos":
    [
        "asset_family",
        "caption",
        "collection_code",
        "collection_name",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "license_model",
        "title"
    ]
}
```

#### Detail Fields Set

The **detail_set** query string parameter fields value represents a large batch of metadata fields that are often used to build a detailed view of videos. The following fields are provided for every video in your result set when you include **detail_set** in your request.

```
{
    "videos":
    [
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
        "date_created",
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ],
        "download_sizes",
        "era",
        "license_model",
        "mastered_to",
        "originally_shot_on",
        "product_types",
        "shot_speed",
        "source",
        "title"
    ]
}
```

#### Display Fields Set

The **display_set** query string parameter fields value represents the fields that provide you with URLs for the low resolution files that are most frequently used to build a UI displaying search results. The following fields are provided for every video in your result set when you include **display_set** in your request.

```
{
    "videos":
    [
        "display_sizes":
        [
            {
                "name": "comp"
            },
            {
                "name": "preview"
            },
            {
                "name": "thumb"
            }
        ]
    ]
}
```

## Request Usage Considerations

- Specifying the "entity_details" response field can have significant performance implications. The field should be used only when necessary.



```js
gettyimages.Videos_Get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * id **required** `string`: A video id. For more than one video please use the /v3/video endpoint.
  * fields `array`: comma delimited list of fields to retrive for the video

#### Output
* output [GettyImages.Models.Videos.VideoDetail](#gettyimages.models.videos.videodetail)

### Videos_GetSimilarVideos
Get videos similar to a video by supplying one video id


```js
gettyimages.Videos_GetSimilarVideos({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values.
  * Authorization `string`: Provide access token in the format of 'Bearer {token}'.
  * id **required** `string`: A video id.
  * fields `array`: comma delimited list of fields to retrive for the videos
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.

#### Output
* output [GettyImages.Models.Artists.VideoSearchResults](#gettyimages.models.artists.videosearchresults)



## Definitions

### AddBoardAssetsResult
* AddBoardAssetsResult `object`
  * assets_added `array`
    * items [BoardAsset](#boardasset)
  * assets_not_added `array`
    * items `string`

### Asset
* Asset `object`
  * asset_type `string`
  * date_added `string`
  * display_sizes `array`
    * items [DisplaySize](#displaysize)
  * id `string`

### AssetChanges
* AssetChanges `object`
  * change_set_id `string`: Contains the identifier for the change-set resource. Passed into ConfirmAssetChanges requests to confirm receipt of the asset changes in the response.
  * changed_assets `array`: Contains a list of ChangedAssetList results for the query.
    * items [ChangedAssetDetail](#changedassetdetail)

### BoardAsset
* BoardAsset `object`
  * asset_id **required** `string`

### BoardCommentPermissions
* BoardCommentPermissions `object`
  * can_add_comment `boolean`

### BoardCreated
* BoardCreated `object`
  * id `string`

### BoardDetail
* BoardDetail `object`
  * asset_count `integer`
  * assets `array`
    * items [Asset](#asset)
  * comment_count `integer`
  * date_created `string`
  * date_last_updated `string`
  * description `string`
  * id `string`
  * links [Links](#links)
  * name `string`
  * permissions [BoardPermissions](#boardpermissions)

### BoardInfo
* BoardInfo `object`
  * description `string`
  * name **required** `string`

### BoardList
* BoardList `object`
  * board_count `integer`
  * boards `array`
    * items [BoardListBoard](#boardlistboard)

### BoardListBoard
* BoardListBoard `object`
  * asset_count `integer`
  * board_relationship `string`
  * date_created `string`
  * date_last_updated `string`
  * description `string`
  * hero_asset [Asset](#asset)
  * id `string`
  * name `string`

### BoardPermissions
* BoardPermissions `object`
  * can_add_assets `boolean`
  * can_delete_board `boolean`
  * can_invite_to_board `boolean`
  * can_remove_assets `boolean`
  * can_update_description `boolean`
  * can_update_name `boolean`

### ChangedAssetDetail
* ChangedAssetDetail `object`
  * asset_changed_utc_datetime `string`: Contains the date of the asset change.
  * asset_lifecycle `string`: Contains the type of change this asset change is. (i.e. "New," "Updated" or "Deleted")
  * asset_type `string`: Contains the type of asset this asset change is (i.e. "Image").
  * id `string`: Contains the Id for the asset change.
  * uri `string`: Contains the asset download URL for assets with an AssetLifecycle of "New."

### Collaborator
* Collaborator `object`
  * first_name `string`
  * last_name `string`

### Comment
* Comment `object`
  * created_by [Collaborator](#collaborator)
  * date_created `string`
  * id `string`
  * permissions [CommentPermissions](#commentpermissions)
  * text `string`

### CommentCreated
* CommentCreated `object`
  * id `string`

### CommentPermissions
* CommentPermissions `object`
  * can_delete_comment `boolean`

### CommentRequest
* CommentRequest `object`
  * text `string`

### CommentsList
* CommentsList `object`
  * comments `array`
    * items [Comment](#comment)
  * permissions [BoardCommentPermissions](#boardcommentpermissions)

### DisplaySize
* DisplaySize `object`
  * name `string`
  * uri `string`

### GettyImages.Models.AllowedUse
* GettyImages.Models.AllowedUse `object`
  * how_can_i_use_it `string`: Indicates how the asset can be used
  * release_info `string`: Indicates release status
  * usage_restrictions `array`: Indicates asset usage restriction, if any
    * items `string`

### GettyImages.Models.Artists.DisplaySize
* GettyImages.Models.Artists.DisplaySize `object`
  * aspect_ratio `string`
  * is_watermarked `boolean`
  * name `string`
  * uri `string`

### GettyImages.Models.Artists.ImageSearchItem
* GettyImages.Models.Artists.ImageSearchItem `object`
  * alternative_ids `object`
  * asset_family `string`
  * asset_type `string` (values: Image, Film)
  * caption `string`
  * collection_code `string`
  * collection_name `string`
  * date_submitted `string`
  * display_sizes `array`
    * items [GettyImages.Models.Artists.DisplaySize](#gettyimages.models.artists.displaysize)
  * id `string`
  * keywords `array`
    * items [GettyImages.Models.Artists.Keyword](#gettyimages.models.artists.keyword)
  * license_model `string`
  * title `string`

### GettyImages.Models.Artists.ImageSearchResults
* GettyImages.Models.Artists.ImageSearchResults `object`
  * images `array`
    * items [GettyImages.Models.Artists.ImageSearchItem](#gettyimages.models.artists.imagesearchitem)
  * result_count `integer`

### GettyImages.Models.Artists.Keyword
* GettyImages.Models.Artists.Keyword `object`
  * keyword_id `string`
  * text `string`
  * type `string`

### GettyImages.Models.Artists.VideoSearchItem
* GettyImages.Models.Artists.VideoSearchItem `object`
  * alternative_ids `object`
  * asset_family `string`
  * asset_type `string` (values: Image, Film)
  * caption `string`
  * collection_code `string`
  * collection_name `string`
  * date_submitted `string`
  * display_sizes `array`
    * items [GettyImages.Models.Artists.DisplaySize](#gettyimages.models.artists.displaysize)
  * id `string`
  * keywords `array`
    * items [GettyImages.Models.Artists.Keyword](#gettyimages.models.artists.keyword)
  * license_model `string`
  * title `string`

### GettyImages.Models.Artists.VideoSearchResults
* GettyImages.Models.Artists.VideoSearchResults `object`
  * result_count `integer`
  * videos `array`
    * items [GettyImages.Models.Artists.VideoSearchItem](#gettyimages.models.artists.videosearchitem)

### GettyImages.Models.Collections.Collection
* GettyImages.Models.Collections.Collection `object`
  * asset_family `string`
  * code `string`
  * id `integer`
  * license_model `string`
  * name `string`
  * product_types `array`
    * items `string`

### GettyImages.Models.Collections.CollectionsList
* GettyImages.Models.Collections.CollectionsList `object`
  * collections `array`
    * items [GettyImages.Models.Collections.Collection](#gettyimages.models.collections.collection)

### GettyImages.Models.Countries.CountriesList
* GettyImages.Models.Countries.CountriesList `object`
  * countries `array`
    * items [GettyImages.Models.Countries.Country](#gettyimages.models.countries.country)

### GettyImages.Models.Countries.Country
* GettyImages.Models.Countries.Country `object`
  * iso_alpha_2 `string`
  * iso_alpha_3 `string`
  * name `string`

### GettyImages.Models.CuratedSets.CuratedSet
* GettyImages.Models.CuratedSets.CuratedSet `object`
  * assets `array`
    * items `string`
  * date_created `string`
  * date_last_updated `string`
  * description `string`
  * hero_image_uri `string`
  * keywords `array`
    * items `string`
  * set_id `string`
  * title `string`

### GettyImages.Models.Customers.CustomerInfoResponse
* GettyImages.Models.Customers.CustomerInfoResponse `object`
  * email_address `string`
  * is_active `boolean`
  * user_name `string`

### GettyImages.Models.Download
* GettyImages.Models.Download `object`
  * agreement_name `string`
  * product_id `string`
  * product_type `string`
  * uri `string`

### GettyImages.Models.Downloads.GetDownloadsResponse
* GettyImages.Models.Downloads.GetDownloadsResponse `object`
  * downloads `array`
    * items [GettyImages.Models.Downloads.GetDownloadsResponse.Download](#gettyimages.models.downloads.getdownloadsresponse.download)
  * result_count `integer`

### GettyImages.Models.Downloads.GetDownloadsResponse.Download
* GettyImages.Models.Downloads.GetDownloadsResponse.Download `object`
  * agreement_name `string`
  * asset_type `string`
  * date_downloaded `string`
  * download_details [GettyImages.Models.Downloads.GetDownloadsResponse.DownloadDetails](#gettyimages.models.downloads.getdownloadsresponse.downloaddetails)
  * id `string`
  * product_type `string`
  * size_name `string`
  * thumb_uri `string`
  * user [GettyImages.Models.Downloads.User](#gettyimages.models.downloads.user)

### GettyImages.Models.Downloads.GetDownloadsResponse.DownloadDetails
* GettyImages.Models.Downloads.GetDownloadsResponse.DownloadDetails `object`
  * download_notes `string`
  * project_code `string`

### GettyImages.Models.Downloads.PremiumAccessDownloadData
* GettyImages.Models.Downloads.PremiumAccessDownloadData `object`
  * download_notes `string`
  * project_code `string`

### GettyImages.Models.Downloads.User
* GettyImages.Models.Downloads.User `object`
  * first_name `string`
  * last_name `string`
  * middle_name `string`
  * username `string`

### GettyImages.Models.Events.Event
* GettyImages.Models.Events.Event `object`
  * child_event_count `integer`
  * editorial_segments `array`
    * items `string`
  * hero_image [GettyImages.Models.HeroImage](#gettyimages.models.heroimage)
  * id `integer`
  * image_count `integer`
  * location [GettyImages.Models.LocationEvent](#gettyimages.models.locationevent)
  * name `string`
  * start_date `string`

### GettyImages.Models.Events.EventsResult
* GettyImages.Models.Events.EventsResult `object`
  * events `array`
    * items [GettyImages.Models.Events.Event](#gettyimages.models.events.event)
  * events_not_found `array`
    * items `integer`

### GettyImages.Models.HeroImage
* GettyImages.Models.HeroImage `object`
  * display_sizes `array`
    * items [GettyImages.Models.HeroImageDisplaySize](#gettyimages.models.heroimagedisplaysize)
  * id `string`

### GettyImages.Models.HeroImageDisplaySize
* GettyImages.Models.HeroImageDisplaySize `object`
  * is_watermarked `boolean`
  * name `string`
  * uri `string`

### GettyImages.Models.IStockLicense
* GettyImages.Models.IStockLicense `object`
  * credits `integer`
  * license_type `string`

### GettyImages.Models.Images.EditorialSource
* GettyImages.Models.Images.EditorialSource `object`
  * id `integer`
  * name `string`

### GettyImages.Models.Images.ImageDetail
* GettyImages.Models.Images.ImageDetail `object`
  * allowed_use [GettyImages.Models.AllowedUse](#gettyimages.models.alloweduse)
  * alternative_ids `object`
  * artist `string`
  * artist_title `string`
  * asset_family `string`
  * asset_type `string`
  * call_for_image `boolean`
  * caption `string`
  * city `string`
  * collection_code `string`
  * collection_id `integer`
  * collection_name `string`
  * color_type `string`
  * copyright `string`
  * country `string`
  * credit_line `string`
  * date_camera_shot `string`
  * date_created `string`
  * date_submitted `string`
  * display_sizes `array`
    * items [GettyImages.Models.Images.ImageDetailDisplaySize](#gettyimages.models.images.imagedetaildisplaysize)
  * download_sizes `array`
    * items [GettyImages.Models.Images.ImageDownloadSize](#gettyimages.models.images.imagedownloadsize)
  * editorial_segments `array`
    * items `string`
  * editorial_source [GettyImages.Models.Images.EditorialSource](#gettyimages.models.images.editorialsource)
  * event_ids `array`
    * items `integer`
  * graphical_style `string`
  * id `string`
  * istock_licenses `array`
    * items [GettyImages.Models.IStockLicense](#gettyimages.models.istocklicense)
  * keywords `array`
    * items [GettyImages.Models.Keyword](#gettyimages.models.keyword)
  * largest_downloads `array`
    * items [GettyImages.Models.Images.ImageDownloadSize](#gettyimages.models.images.imagedownloadsize)
  * license_model `string`
  * links `array`
    * items [GettyImages.Models.Images.Link](#gettyimages.models.images.link)
  * max_dimensions [GettyImages.Models.MaxDimensions](#gettyimages.models.maxdimensions)
  * orientation `string`
  * people `array`
    * items `string`
  * prestige `boolean`
  * product_types `array`
    * items `string`
  * quality_rank `integer`
  * referral_destinations `array`
    * items [GettyImages.Models.ReferralDestination](#gettyimages.models.referraldestination)
  * state_province `string`
  * title `string`
  * uri_oembed `string`

### GettyImages.Models.Images.ImageDetailDisplaySize
* GettyImages.Models.Images.ImageDetailDisplaySize `object`
  * height `integer`: Indicates the height in pixels
  * is_watermarked `boolean`: Indicates whether the image is watermarked.
  * name `string`: Identifies the name of the display size
  * uri `string`: Identifies the URI for the image
  * width `integer`: Indicates the width in pixels

### GettyImages.Models.Images.ImageDownloadAuthorization
* GettyImages.Models.Images.ImageDownloadAuthorization `object`
  * agreement_name `string`
  * product_id `string`
  * product_type `string`
  * uri `string`

### GettyImages.Models.Images.ImageDownloadSize
* GettyImages.Models.Images.ImageDownloadSize `object`
  * bytes `integer`
  * downloads `array`
    * items [GettyImages.Models.Images.ImageDownloadAuthorization](#gettyimages.models.images.imagedownloadauthorization)
  * height `integer`
  * media_type `string`
  * name `string` (values: x_small, small, medium, large, x_large, xx_large)
  * width `integer`

### GettyImages.Models.Images.ImagesDetail
* GettyImages.Models.Images.ImagesDetail `object`
  * images `array`
    * items [GettyImages.Models.Images.ImageDetail](#gettyimages.models.images.imagedetail)
  * images_not_found `array`
    * items `string`

### GettyImages.Models.Images.Link
* GettyImages.Models.Images.Link `object`
  * rel `string`
  * uri `string`

### GettyImages.Models.Keyword
* GettyImages.Models.Keyword `object`
  * entity_types `array`
    * items `string`
  * entity_uris `array`
    * items `string`
  * keyword_id `string`
  * relevance `integer`
  * text `string`
  * type `string`

### GettyImages.Models.LocationEvent
* GettyImages.Models.LocationEvent `object`
  * city `string`
  * country `string`
  * state_province `string`
  * venue `string`

### GettyImages.Models.MaxDimensions
* GettyImages.Models.MaxDimensions `object`
  * height `integer`
  * width `integer`

### GettyImages.Models.Products.DownloadRequirements
* GettyImages.Models.Products.DownloadRequirements `object`
  * is_note_required `boolean`
  * is_project_code_required `boolean`
  * project_codes `array`
    * items `string`

### GettyImages.Models.Products.OverageDetails
* GettyImages.Models.Products.OverageDetails `object`
  * count `integer`
  * limit `integer`
  * overages_reached `boolean`
  * remaining `integer`

### GettyImages.Models.Products.Product
* GettyImages.Models.Products.Product `object`
  * agreement_name `string`
  * application_website `string`
  * credits_remaining `integer`
  * download_limit `integer`
  * download_limit_duration `string`
  * download_limit_reset_utc_date `string`
  * download_requirements [GettyImages.Models.Products.DownloadRequirements](#gettyimages.models.products.downloadrequirements)
  * downloads_remaining `integer`
  * expiration_utc_date `string`
  * id `integer`
  * imagepack_resolution `string`
  * name `string`
  * overage [GettyImages.Models.Products.OverageDetails](#gettyimages.models.products.overagedetails)
  * premium_access_download_requirements [GettyImages.Models.Products.DownloadRequirements](#gettyimages.models.products.downloadrequirements)
  * status `string` (values: active, inactive)
  * type `string` (values: easyaccess, editorialsubscription, imagepack, premiumaccess, royaltyfreesubscription, creditpack)

### GettyImages.Models.Products.ProductsResult
* GettyImages.Models.Products.ProductsResult `object`
  * products `array`
    * items [GettyImages.Models.Products.Product](#gettyimages.models.products.product)

### GettyImages.Models.Purchases.PreviousAssetPurchase
* GettyImages.Models.Purchases.PreviousAssetPurchase `object`
  * asset_id `string`
  * asset_type `string`
  * date_purchased `string`
  * download_uri `string`
  * file_size_in_bytes `string`
  * license_model `string`
  * order_id `string`
  * size_name `string`
  * thumb_uri `string`

### GettyImages.Models.Purchases.PreviousAssetPurchases
* GettyImages.Models.Purchases.PreviousAssetPurchases `object`
  * previous_purchases `array`
    * items [GettyImages.Models.Purchases.PreviousAssetPurchase](#gettyimages.models.purchases.previousassetpurchase)
  * result_count `integer`

### GettyImages.Models.Purchases.PreviousPurchase
* GettyImages.Models.Purchases.PreviousPurchase `object`
  * date_purchased `string`
  * image_id `string`
  * license_model `string`
  * order_id `string`
  * thumb_uri `string`

### GettyImages.Models.Purchases.PreviousPurchases
* GettyImages.Models.Purchases.PreviousPurchases `object`
  * previous_purchases `array`
    * items [GettyImages.Models.Purchases.PreviousPurchase](#gettyimages.models.purchases.previouspurchase)
  * result_count `integer`

### GettyImages.Models.ReferralDestination
* GettyImages.Models.ReferralDestination `object`
  * site_name `string`
  * uri `string`

### GettyImages.Models.Search.CreativeImageSearchLightResults
* GettyImages.Models.Search.CreativeImageSearchLightResults `object`
  * images `array`
    * items [GettyImages.Models.Search.ImageSearchLightItemCreative](#gettyimages.models.search.imagesearchlightitemcreative)
  * result_count `integer`

### GettyImages.Models.Search.CreativeImageSearchResults
* GettyImages.Models.Search.CreativeImageSearchResults `object`
  * images `array`
    * items [GettyImages.Models.Search.ImageSearchItemCreative](#gettyimages.models.search.imagesearchitemcreative)
  * result_count `integer`

### GettyImages.Models.Search.CreativeVideoSearchResults
* GettyImages.Models.Search.CreativeVideoSearchResults `object`
  * result_count `integer`
  * videos `array`
    * items [GettyImages.Models.Search.VideoSearchItem](#gettyimages.models.search.videosearchitem)

### GettyImages.Models.Search.EditorialImageSearchResults
* GettyImages.Models.Search.EditorialImageSearchResults `object`
  * images `array`
    * items [GettyImages.Models.Search.ImageSearchItemEditorial](#gettyimages.models.search.imagesearchitemeditorial)
  * result_count `integer`

### GettyImages.Models.Search.EditorialSource
* GettyImages.Models.Search.EditorialSource `object`
  * id `integer`

### GettyImages.Models.Search.EditorialVideoSearchResults
* GettyImages.Models.Search.EditorialVideoSearchResults `object`
  * result_count `integer`
  * videos `array`
    * items [GettyImages.Models.Search.VideoSearchItem](#gettyimages.models.search.videosearchitem)

### GettyImages.Models.Search.EventsSearchResult
* GettyImages.Models.Search.EventsSearchResult `object`
  * events `array`
    * items [GettyImages.Models.Events.Event](#gettyimages.models.events.event)
  * result_count `integer`

### GettyImages.Models.Search.ImageSearchItem
* GettyImages.Models.Search.ImageSearchItem `object`
  * allowed_use [GettyImages.Models.AllowedUse](#gettyimages.models.alloweduse)
  * alternative_ids `object`
  * artist `string`
  * asset_family `string`
  * call_for_image `boolean`
  * caption `string`
  * collection_code `string`
  * collection_id `integer`
  * collection_name `string`
  * color_type `string`
  * copyright `string`
  * date_camera_shot `string`
  * date_created `string`
  * display_sizes `array`
    * items [GettyImages.Models.Search.ImageSearchItemDisplaySize](#gettyimages.models.search.imagesearchitemdisplaysize)
  * editorial_segments `array`
    * items `string`
  * event_ids `array`
    * items `integer`
  * graphical_style `string`
  * id `string`
  * istock_licenses `array`
    * items [GettyImages.Models.IStockLicense](#gettyimages.models.istocklicense)
  * keywords `array`
    * items [GettyImages.Models.Keyword](#gettyimages.models.keyword)
  * largest_downloads `array`
    * items [GettyImages.Models.Download](#gettyimages.models.download)
  * license_model `string`
  * max_dimensions [GettyImages.Models.MaxDimensions](#gettyimages.models.maxdimensions)
  * orientation `string`
  * people `array`
    * items `string`
  * prestige `boolean`
  * product_types `array`
    * items `string`
  * quality_rank `integer`
  * referral_destinations `array`
    * items [GettyImages.Models.ReferralDestination](#gettyimages.models.referraldestination)
  * title `string`
  * uri_oembed `string`

### GettyImages.Models.Search.ImageSearchItemCreative
* GettyImages.Models.Search.ImageSearchItemCreative `object`
  * allowed_use [GettyImages.Models.AllowedUse](#gettyimages.models.alloweduse)
  * alternative_ids `object`
  * artist `string`
  * asset_family `string`
  * call_for_image `boolean`
  * caption `string`
  * collection_code `string`
  * collection_id `integer`
  * collection_name `string`
  * color_type `string`
  * copyright `string`
  * date_camera_shot `string`
  * date_created `string`
  * display_sizes `array`
    * items [GettyImages.Models.Search.ImageSearchItemDisplaySize](#gettyimages.models.search.imagesearchitemdisplaysize)
  * graphical_style `string`
  * id `string`
  * keywords `array`
    * items [GettyImages.Models.Keyword](#gettyimages.models.keyword)
  * largest_downloads `array`
    * items [GettyImages.Models.Download](#gettyimages.models.download)
  * license_model `string`
  * max_dimensions [GettyImages.Models.MaxDimensions](#gettyimages.models.maxdimensions)
  * orientation `string`
  * prestige `boolean`
  * product_types `array`
    * items `string`
  * quality_rank `integer`
  * referral_destinations `array`
    * items [GettyImages.Models.ReferralDestination](#gettyimages.models.referraldestination)
  * title `string`
  * uri_oembed `string`

### GettyImages.Models.Search.ImageSearchItemDisplaySize
* GettyImages.Models.Search.ImageSearchItemDisplaySize `object`
  * is_watermarked `boolean`
  * name `string`
  * uri `string`

### GettyImages.Models.Search.ImageSearchItemEditorial
* GettyImages.Models.Search.ImageSearchItemEditorial `object`
  * allowed_use [GettyImages.Models.AllowedUse](#gettyimages.models.alloweduse)
  * alternative_ids `object`
  * artist `string`
  * asset_family `string`
  * call_for_image `boolean`
  * caption `string`
  * collection_code `string`
  * collection_id `integer`
  * collection_name `string`
  * color_type `string`
  * copyright `string`
  * date_camera_shot `string`
  * date_created `string`
  * display_sizes `array`
    * items [GettyImages.Models.Search.ImageSearchItemDisplaySize](#gettyimages.models.search.imagesearchitemdisplaysize)
  * editorial_segments `array`
    * items `string`
  * editorial_source [GettyImages.Models.Search.EditorialSource](#gettyimages.models.search.editorialsource)
  * event_ids `array`
    * items `integer`
  * graphical_style `string`
  * id `string`
  * keywords `array`
    * items [GettyImages.Models.Keyword](#gettyimages.models.keyword)
  * largest_downloads `array`
    * items [GettyImages.Models.Download](#gettyimages.models.download)
  * license_model `string`
  * max_dimensions [GettyImages.Models.MaxDimensions](#gettyimages.models.maxdimensions)
  * orientation `string`
  * people `array`
    * items `string`
  * product_types `array`
    * items `string`
  * quality_rank `integer`
  * referral_destinations `array`
    * items [GettyImages.Models.ReferralDestination](#gettyimages.models.referraldestination)
  * title `string`
  * uri_oembed `string`

### GettyImages.Models.Search.ImageSearchLightItemCreative
* GettyImages.Models.Search.ImageSearchLightItemCreative `object`
  * display_sizes `array`
    * items [GettyImages.Models.Search.ImageSearchItemDisplaySize](#gettyimages.models.search.imagesearchitemdisplaysize)
  * id `string`
  * title `string`

### GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem]
* GettyImages.Models.Search.SearchResults[GettyImages.Models.Search.ImageSearchItem] `object`
  * images `array`
    * items [GettyImages.Models.Search.ImageSearchItem](#gettyimages.models.search.imagesearchitem)
  * result_count `integer`

### GettyImages.Models.Search.VideoSearchItem
* GettyImages.Models.Search.VideoSearchItem `object`
  * allowed_use [GettyImages.Models.AllowedUse](#gettyimages.models.alloweduse)
  * artist `string`
  * asset_family `string`
  * caption `string`
  * clip_length `string`
  * collection_code `string`
  * collection_id `integer`
  * collection_name `string`
  * color_type `string`
  * copyright `string`
  * date_created `string`
  * display_sizes `array`
    * items [GettyImages.Models.Search.VideoSearchItemDisplaySize](#gettyimages.models.search.videosearchitemdisplaysize)
  * era `string`
  * id `string`
  * istock_licenses `array`
    * items [GettyImages.Models.IStockLicense](#gettyimages.models.istocklicense)
  * keywords `array`
    * items [GettyImages.Models.Keyword](#gettyimages.models.keyword)
  * largest_downloads `array`
    * items [GettyImages.Models.Download](#gettyimages.models.download)
  * license_model `string`
  * mastered_to `string`
  * originally_shot_on `string`
  * product_types `array`
    * items `string`
  * referral_destinations `array`
    * items [GettyImages.Models.ReferralDestination](#gettyimages.models.referraldestination)
  * shot_speed `string`
  * source `string`
  * title `string`

### GettyImages.Models.Search.VideoSearchItemDisplaySize
* GettyImages.Models.Search.VideoSearchItemDisplaySize `object`
  * aspect_ratio `string`
  * is_watermarked `boolean`
  * name `string`
  * uri `string`

### GettyImages.Models.Search.VideoSearchResults[GettyImages.Models.Artists.VideoSearchItem]
* GettyImages.Models.Search.VideoSearchResults[GettyImages.Models.Artists.VideoSearchItem] `object`
  * result_count `integer`
  * videos `array`
    * items [GettyImages.Models.Artists.VideoSearchItem](#gettyimages.models.artists.videosearchitem)

### GettyImages.Models.Videos.VideoDetail
* GettyImages.Models.Videos.VideoDetail `object`
  * allowed_use [GettyImages.Models.AllowedUse](#gettyimages.models.alloweduse)
  * artist `string`
  * asset_family `string`
  * caption `string`
  * clip_length `string`
  * collection_code `string`
  * collection_id `integer`
  * collection_name `string`
  * color_type `string`
  * copyright `string`
  * date_created `string`
  * display_sizes `array`
    * items [GettyImages.Models.Videos.VideoDetailDisplaySize](#gettyimages.models.videos.videodetaildisplaysize)
  * download_sizes `array`
    * items [GettyImages.Models.Videos.VideoDownloadSize](#gettyimages.models.videos.videodownloadsize)
  * editorial_segments `array`
    * items `string`
  * era `string`
  * id `string`
  * istock_licenses `array`
    * items [GettyImages.Models.IStockLicense](#gettyimages.models.istocklicense)
  * keywords `array`
    * items [GettyImages.Models.Keyword](#gettyimages.models.keyword)
  * license_model `string`
  * mastered_to `string`
  * originally_shot_on `string`
  * product_types `array`
    * items `string`
  * referral_destinations `array`
    * items [GettyImages.Models.ReferralDestination](#gettyimages.models.referraldestination)
  * shot_speed `string`
  * source `string`
  * title `string`

### GettyImages.Models.Videos.VideoDetailDisplaySize
* GettyImages.Models.Videos.VideoDetailDisplaySize `object`
  * aspect_ratio `string`: Identifies the URI for the image
  * is_watermarked `boolean`: Indicates whether the image is watermarked.
  * name `string`: Identifies the name of the display size
  * uri `string`: Identifies the URI for the image

### GettyImages.Models.Videos.VideoDownloadAuthorization
* GettyImages.Models.Videos.VideoDownloadAuthorization `object`
  * agreement_name `string`
  * product_id `string`
  * product_type `string`
  * uri `string`

### GettyImages.Models.Videos.VideoDownloadSize
* GettyImages.Models.Videos.VideoDownloadSize `object`
  * bit_depth `string`
  * broadcast_video_standard `string`
  * compression `string`
  * content_type `string`
  * description `string`
  * downloads `array`
    * items [GettyImages.Models.Videos.VideoDownloadAuthorization](#gettyimages.models.videos.videodownloadauthorization)
  * format `string`
  * frame_rate `number`
  * frame_size `string`
  * height `number`
  * interlaced `boolean`
  * name `string`
  * width `integer`

### GettyImages.Models.Videos.VideosDetail
* GettyImages.Models.Videos.VideosDetail `object`
  * videos `array`
    * items [GettyImages.Models.Videos.VideoDetail](#gettyimages.models.videos.videodetail)
  * videos_not_found `array`
    * items `string`

### GettyImages.Services.Core.SecurityToken
* GettyImages.Services.Core.SecurityToken `object`
  * ActAsSystemId `string`
  * AdminId `string`
  * AuthId `string`
  * ClientIP `string`
  * ClientId `string`
  * Created `string`
  * Expires `string`
  * RememberedUser `boolean`
  * RenewalEnds `string`
  * SecureOnly `boolean`
  * SystemId `string`
  * SystemRole `string` (values: CustomerFacing, Admin, Automation)
  * UserId `string`
  * VisitorId `string`

### Links
* Links `object`
  * invitation `string`
  * share `string`

### Object
* Object `object`

### PartnerChannel
* PartnerChannel `object`: partner_channel
  * asset_family `string`: Specifies the asset family for the channel (e.g. "editorial" or "creative")
  * channel_id `integer`: Specifies the identification number for the channel
  * channel_type `string`: Specifies the channel type (i.e. "New," "Updated" or "Deleted")
  * notification_count `integer`: Specifies the current count of notifications pending in the channel
  * start_date `string`

### PartnerChannelList
* PartnerChannelList `object`
  * channels `array`
    * items [PartnerChannel](#partnerchannel)

### RegisterAssetsRequest
* RegisterAssetsRequest `object`: Specify request containing the list of asset ids you want to register.
  * asset_ids `array`: Specifies the list of asset ids you want to register.
    * items `string`

### System.Object
* System.Object `object`

### asset_usage
* asset_usage `object`: Specifies the id, usage quantity, and date of when an asset was used.
  * asset_id `string`: Specifies the Id of the asset that was used.
  * quantity `integer`: Specifies the number of times the asset was used.
  * usage_date `string`: Identifies the date the asset was used, in ISO 8601 format (e.g., YYYY-MM-DD), time is not needed.

### report_usage_batch_request
* report_usage_batch_request `object`: Specifies the request information for the Batch Usages endpoint.
  * asset_usages `array`: Identifies the list of asset id, usage count and date of usage combinations to record.
    * items [asset_usage](#asset_usage)

### report_usage_batch_response
* report_usage_batch_response `object`: Specifies the response from the Batch Usages endpoint.
  * invalid_assets `array`: Identifies a list of asset ids submitted that did not match known Getty asset ids.
    * items `string`
  * total_asset_usages_processed `integer`: Specifies the number of asset usage records that were successfully recorded.


