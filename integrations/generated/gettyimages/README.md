# @datafire/gettyimages

Client library for Getty Images

## Installation and Usage
```bash
npm install --save @datafire/gettyimages
```
```js
let gettyimages = require('@datafire/gettyimages').create({
  "Api-Key": "",
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

Build applications using the world's most powerful imagery

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
gettyimages.oauthCallback({
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
gettyimages.oauthRefresh(null, context)
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

### v3.affiliates.search.images.get



```js
gettyimages.v3.affiliates.search.images.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * phrase `string`
  * style `string` (values: photography, vector)

#### Output
* output [AffiliateImageSearchResponse](#affiliateimagesearchresponse)

### v3.affiliates.search.videos.get



```js
gettyimages.v3.affiliates.search.videos.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * phrase `string`

#### Output
* output [AffiliateVideoSearchResponse](#affiliatevideosearchresponse)

### v3.artists.images.get
Search for images by a photographer


```js
gettyimages.v3.artists.images.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * artist_name `string`: Name of artist for desired images
  * fields `array`: Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.
  * page `integer`: Identifies page to return. Default page is 1.
  * page_size `integer`: Specifies page size. Default page_size is 10, maximum page_size is 100.

#### Output
*Output schema unknown*

### v3.artists.videos.get
Search for videos by a photographer


```js
gettyimages.v3.artists.videos.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * artist_name `string`: Name of artist for desired images
  * fields `array`: Comma separated list of fields. Allows restricting which fields are returned. If no fields are selected, the summary_set of fields are returned.
  * page `integer`: Identifies page to return. Default page is 1.
  * page_size `integer`: Specifies page size. Default page_size is 10, maximum page_size is 100.

#### Output
*Output schema unknown*

### v3.asset_changes.change_sets.put
# Asset Changes

Get notifications about new, updated or deleted assets.

##  Quickstart

You'll need an API key and an access token to use this resource. 

Notifications older than 60 days will be removed from partner channels.



```js
gettyimages.v3.asset_changes.change_sets.put({}, context)
```

#### Input
* input `object`
  * channel_id `integer`: Specifies the id of the channel for the asset data. Valid channel ids can be found in the results of the Get Partner Channel query.
  * batch_size `integer`: Specifies the number of assets to return. The default is 10; maximum is 500.

#### Output
* output [AssetChanges](#assetchanges)

### v3.asset_changes.change_sets.change_set_id.delete
# Delete Asset Changes

Confirm asset changes acknowledges receipt of asset changes (from the PUT asset changes endpoint).

##  Quickstart

You'll need an API key and an access token to use this resource.



```js
gettyimages.v3.asset_changes.change_sets.change_set_id.delete({
  "change-set-id": 0
}, context)
```

#### Input
* input `object`
  * change-set-id **required** `integer`: Specify the change-set-id associated with a transaction resource whose receipt you want to confirm.

#### Output
*Output schema unknown*

### v3.asset_changes.channels.get
# Get Partner Channels

Retrieves the channel data for the partner. This data can be used to populate the channel_id parameter in the Put Asset Changes query.

##  Quickstart

You'll need an API key and an access token to use this resource.

Partners who have a channel that has been removed should contact their sales representative to be set up again.




```js
gettyimages.v3.asset_changes.channels.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Channel](#channel)

### v3.asset_licensing.assetId.post
Endpoint for acquiring extended licenses with iStock credits for an asset.


```js
gettyimages.v3.asset_licensing.assetId.post({
  "assetId": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * assetId **required** `string`: Getty Images assetId - examples 520621493, 112301284
  * body [AcquireAssetLicensesRequest](#acquireassetlicensesrequest)

#### Output
* output [AssetLicensingResponse](#assetlicensingresponse)

### v3.boards.get
Get all boards that the user participates in


```js
gettyimages.v3.boards.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Request results starting at a page number (default is 1).
  * board_relationship `string` (values: owned, invited): Search for boards the user owns or has been invited to as an editor.
  * sort_order `string` (values: date_last_updated_descending, date_last_updated_ascending, name_ascending, name_decending): Sort the list of boards by last update date or name. Defaults to date_last_updated_descending.
  * pageSize `integer`: Request number of boards to return in each page. (default is 30).

#### Output
* output [BoardList](#boardlist)

### v3.boards.post
Create a new board


```js
gettyimages.v3.boards.post({}, context)
```

#### Input
* input `object`
  * body [BoardInfo](#boardinfo)

#### Output
* output [BoardCreated](#boardcreated)

### v3.boards.board_id.delete
Delete a board


```js
gettyimages.v3.boards.board_id.delete({
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * board_id **required** `string`: Specify the board to delete.

#### Output
*Output schema unknown*

### v3.boards.board_id.get
Get assets and metadata for a specific board


```js
gettyimages.v3.boards.board_id.get({
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * board_id **required** `string`: Retrieve details for a specific board.

#### Output
* output [BoardDetail](#boarddetail)

### v3.boards.board_id.put
Update a board


```js
gettyimages.v3.boards.board_id.put({
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * board_id **required** `string`: Specify the board to update.
  * body [BoardInfo](#boardinfo)

#### Output
*Output schema unknown*

### v3.boards.board_id.assets.delete
Remove assets from a board


```js
gettyimages.v3.boards.board_id.assets.delete({
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * board_id **required** `string`: Specify the board to remove assets from.
  * asset_ids `array`: List the assets to be removed from the board.

#### Output
*Output schema unknown*

### v3.boards.board_id.assets.put
Add assets to a board


```js
gettyimages.v3.boards.board_id.assets.put({
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * board_id **required** `string`: Specify the board to add assets to.
  * body `array`: List assets to add to the board.
    * items [BoardAsset](#boardasset)

#### Output
* output [AddBoardAssetsResult](#addboardassetsresult)

### v3.boards.board_id.assets.asset_id.delete
Remove an asset from a board


```js
gettyimages.v3.boards.board_id.assets.asset_id.delete({
  "board_id": "",
  "asset_id": ""
}, context)
```

#### Input
* input `object`
  * board_id **required** `string`: Specify the board to remove an asset from.
  * asset_id **required** `string`: Specify the asset to remove from the board.

#### Output
*Output schema unknown*

### v3.boards.board_id.assets.asset_id.put
Add an asset to a board


```js
gettyimages.v3.boards.board_id.assets.asset_id.put({
  "board_id": "",
  "asset_id": ""
}, context)
```

#### Input
* input `object`
  * board_id **required** `string`: Specify the board to add an asset to.
  * asset_id **required** `string`: Specify the asset to add to the board. If it is already in the board's asset collection, no action is taken.

#### Output
*Output schema unknown*

### v3.boards.board_id.comments.get
Get comments from a board


```js
gettyimages.v3.boards.board_id.comments.get({
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * board_id **required** `string`: Specify the board to retrieve comments from.

#### Output
* output [CommentsList](#commentslist)

### v3.boards.board_id.comments.post
Add a comment to a board


```js
gettyimages.v3.boards.board_id.comments.post({
  "board_id": ""
}, context)
```

#### Input
* input `object`
  * board_id **required** `string`: Specify the board to add a comment to.
  * body [CommentRequest](#commentrequest)

#### Output
* output [CommentCreated](#commentcreated)

### v3.boards.board_id.comments.comment_id.delete
Delete a comment from a board


```js
gettyimages.v3.boards.board_id.comments.comment_id.delete({
  "board_id": "",
  "comment_id": ""
}, context)
```

#### Input
* input `object`
  * board_id **required** `string`: Specify the board containing the comment to delete.
  * comment_id **required** `string`: Specify the comment to delete.

#### Output
*Output schema unknown*

### v3.collections.get
Use this endpoint to retrieve collections associated with your Getty Images account. To browse available collections see our [Image collections page]( http://www.gettyimages.com/creative-images/collections).

You'll need an API key and access token to use this resource.



```js
gettyimages.v3.collections.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.

#### Output
* output [CollectionsList](#collectionslist)

### v3.countries.get
Returns a list of country objects that contains country name, two letter ISO abbreviation and three letter ISO abbreviation.

You'll need an API key and access token to use this resource.



```js
gettyimages.v3.countries.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.

#### Output
* output [CountriesList](#countrieslist)

### v3.customers.current.get
Returns the first, middle and last name of the authenticated user.

You'll need an API key and access token to use this resource.
	
Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.



```js
gettyimages.v3.customers.current.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.

#### Output
* output [CustomerInfoResponse](#customerinforesponse)

### v3.downloads.get
Returns information about a customer's previously downloaded assets.

You'll need an API key and access token to use this resource.
 


	
This endpoint requires being a Getty Images customer to limit your results to only assets that you have a license to use, 
you need to also include an authorization token in the header of your request. 
Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens.



```js
gettyimages.v3.downloads.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * date_from `string`: If specified, selects assets downloaded on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD). 
  * date_to `string`: If specified, selects assets downloaded on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD)
  * use_time `boolean`: If specified, time values provided with date_to or date_from will be used. Time values should be appended to the date value in ISO 8601 format
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.
  * product_type `string` (values: easyaccess, editorialsubscription, imagepack, premiumaccess, royaltyfreesubscription)
  * company_downloads `boolean`: If specified, returns the list of previously downloaded images for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.

#### Output
* output [GetDownloadsResponse](#getdownloadsresponse)

### v3.downloads.images.id.post
Use this endpoint to generate download URLs and related data for images you are authorized to download.

Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.

The download limit for a given download period is covered in your product agreement established with Getty Images.

You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.

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
## Downloading Via the Returned URI

The URI returned by this call should be considered opaque and the format could change at any time.
In order to get the filename, length or file type, the response headers must be inspected. An example
response follows:

```
content-length: 33959979
content-type: image/jpeg
content-disposition: attachment; filename=GettyImages-1167612765.jpg
```

The `content-disposition` header must be parsed to get a usable filename.




```js
gettyimages.v3.downloads.images.id.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * id **required** `string`: <remarks>
  * auto_download `boolean`: <remarks>
  * file_type `string` (values: eps, jpg)
  * height `string`: <remarks>
  * product_id `integer`: <remarks>
  * product_type `string` (values: easyaccess, editorialsubscription, imagepack, premiumaccess, royaltyfreesubscription)
  * use_team_credits `boolean`: Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.
  * body [PremiumAccessDownloadData](#premiumaccessdownloaddata)

#### Output
*Output schema unknown*

### v3.downloads.videos.id.post
Use this endpoint to generate download URLs and related data for videos you are authorized to download.

Most product offerings have enforced periodic download limits such as monthly, weekly, and daily. When this operation executes, the count of allowed downloads is decremented by one for the product offering. Once the download limit is reached for a given product offering, no further downloads may be requested for that product offering until the next download period.

The download limit for a given download period is covered in your product agreement established with Getty Images.

You'll need an API key and a [Resource Owner Grant or Implicit Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.

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

## Downloading Via the Returned URI

The URI returned by this call should be considered opaque and the format could change at any time.
In order to get the filename, length or file type, the response headers must be inspected. An example
response follows:

```
content-length: 283925783
content-type: video/quicktime
content-disposition: attachment; filename=GettyImages-690773579.mov
```

The `content-disposition` header must be parsed to get a usable filename.



```js
gettyimages.v3.downloads.videos.id.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * id **required** `string`: <remarks>
  * auto_download `boolean`: <remarks>
  * size `string`: Specifies the size to be downloaded.
  * product_id `integer`: <remarks>
  * use_team_credits `boolean`: Specifies whether to download the image with iStock Team Credits. Only applicable to iStock API keys authenticated with a user that has Team Credits. Blank is the same as False.
  * body [PremiumAccessDownloadData](#premiumaccessdownloaddata)

#### Output
*Output schema unknown*

### v3.events.get
This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and
videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with 
an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content 
produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) 
will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
"Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". 

You'll need an API key and access token to use this resource.



```js
gettyimages.v3.events.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * ids `array`: A comma separated list of event ids.
  * fields `array`: A comma separated list of fields to return in the response.

#### Output
*Output schema unknown*

### v3.events.id.get
This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment 
photographers and videographers cover editorially relevant events occurring around the world.  
All images or video clips produced in association with an event, are assigned the same EventID. 
EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images 
brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be 
consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
"Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". 

You'll need an API key and access token to use this resource.



```js
gettyimages.v3.events.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * id **required** `integer`: An event id.
  * fields `array`: A comma separated list of fields to return in the response.

#### Output
*Output schema unknown*

### v3.images.get
This endpoint returns the detailed image metadata for all specified images.

You'll need an API key and access token to use this resource.

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
gettyimages.v3.images.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * ids `array`: Specifies one or more image ids to return. Use comma delimiter when requesting multiple ids.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field are estimates.

#### Output
* output [ImagesDetailResults](#imagesdetailresults)

### v3.images.id.get
This endpoint returns the detailed image metadata for a specified image.

You'll need an API key and access token to use this resource. 
 
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
gettyimages.v3.images.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * id **required** `string`: An image id. For more than one image please use the /v3/images endpoint.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'. NOTE: Bytes returned by 'download_sizes' field are estimates.

#### Output
* output [ImagesDetailResults](#imagesdetailresults)

### v3.images.id.downloadhistory.get
Returns information about a customer's download history for a specific asset


```js
gettyimages.v3.images.id.downloadhistory.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * id **required** `string`: An image id.
  * company_downloads `boolean`: If specified, returns the list of previously downloaded images for all users in your company.

#### Output
* output [AssetDownloadHistoryResults](#assetdownloadhistoryresults)

### v3.images.id.same_series.get
This endpoint will provide the list of images, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.

You'll need an API key and access token to use this resource.

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
gettyimages.v3.images.id.same_series.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * id **required** `string`: Identifies an existing image
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.

#### Output
* output [ImageSearchItemSearchResults](#imagesearchitemsearchresults)

### v3.images.id.similar.get
This endpoint will provide a list of images that are similar to the specified asset id.

You'll need an API key and access token to use this resource.

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
gettyimages.v3.images.id.similar.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * id **required** `string`: Identifies an existing image
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.

#### Output
* output [ImageSearchItemSearchResults](#imagesearchitemsearchresults)

### v3.orders.id.get
This endpoint returns detailed order metadata for a specified order.
Use of this endpoint requires configuration changes to your API key. 

You'll need an API key and access token to use this resource.


```js
gettyimages.v3.orders.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * id **required** `integer`: An order id.

#### Output
* output [OrderDetail](#orderdetail)

### v3.products.get
This endpoint returns all products available to the username used during authentication. As such, this endpoint requires the use of
a fully authorized access_token. The product data can then be used as search filters, restricting results to images from a specific product.

You'll need an API key and access token to use this resource.



```js
gettyimages.v3.products.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * fields `array`: Comma separated list of fields. Allows product download requirements to be returned.

#### Output
* output [ProductsResult](#productsresult)

### v3.purchased_assets.get
This endpoint returns a list of all assets purchased on gettyimages.com by the username used for authentication. 
Use of this endpoint requires configuration changes to your API key. Please contact your sales representative
to learn more.

You'll need an API key and access token to use this resource.



```js
gettyimages.v3.purchased_assets.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * date_to `string`: If specified, retrieves previous purchases on or before this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 75, maximum page_size is 100.
  * date_from `string`: If specified, retrieves previous purchases on or after this date. Dates should be submitted in ISO 8601 format (i.e., YYYY-MM-DD).
  * company_purchases `boolean`: If specified, returns the list of previously purchased assets for all users in your company. Your account must be enabled for this functionality. Contact your Getty Images account rep for more information. Default is false.

#### Output
* output [PreviousAssetPurchases](#previousassetpurchases)

### v3.search.events.get
Use this endpoint to search Getty Images news, sports and entertainment events. Getty Images photographers and videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with an event, are assigned the same EventID. EventIDs are part of the meta-data returned in Search Results. Only content produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week".   

You'll need an API key and access token to use this resource.


You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.



```js
gettyimages.v3.search.events.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * editorial_segment `string` (values: archival, entertainment, news, publicity, royalty, sport)
  * date_from `string`: Filters to events that start on or after this date. Use ISO 8601 format (e.g., 1999-12-31). Defaults to UTC unless otherwise specified.
  * date_to `string`: Filters to events that start on or before this date. Use ISO 8601 format (e.g., 1999-12-31). Defaults to UTC unless otherwise specified.
  * fields `array`: Specifies fields to return. Default set is 'id','name','start_date'.
  * page `integer`: Request results starting at a page number (default is 1, maximum is 50).
  * page_size `integer`: Request number of images to return in each page.
  * phrase `string`: Filters to events related to this phrase

#### Output
* output [EventsSearchResult](#eventssearchresult)

### v3.search.images.get
Use this endpoint to search over a blend of our contemporary stock photos, illustrations, archival images, editorial photos, illustrations and archival images. Because this draws from such a large diversity of content, the results will not be as relevant as when the more specific Creative or Editorial endpoints are used. Additionally, the response time for this endpoint is slower compared to that for Creative and Editorial-specific endpoints. For these reasons, it is highly recommended that those endpoints are used instead of this blended endpoint.

You'll need an API key and access token to use this resource.

You can show different information in the response by specifying values on the "fields" parameter (see details below).
You can search with only an API key, and that will give you search results that are equivalent to doing a search on the GettyImages.com site without being logged in (anonymous search).  If you are a Getty Images API customer and would like to ensure that your API searches return only assets that you have a license to use, you need to also include an authorization token in the header of your request.  Please consult our [Authorization FAQ](http://developers.gettyimages.com/en/authorization-faq.html) for more information on authorization tokens, and our [Authorization Workflows](https://github.com/gettyimages/gettyimages-api/blob/master/OAuth2Workflow.md) for code examples of getting a token.<br>
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
gettyimages.v3.search.images.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * age_of_people `array`: Filter based on the age of individuals in an image.
  * artists `string`: Search for images by specific artists (free-text, comma-separated list of artists).
  * collection_codes `array`: Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.
  * collections_filter_type `string` (values: include, exclude)
  * color `string`: Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244). Note: when specified, results will not contain editorial images.
  * compositions `array`: Filter based on image composition.
  * download_product `string`: Filters based on which product the asset will download against.
  * embed_content_only `boolean`: Restrict search results to embeddable images. The default is false.
  * event_ids `array`: Filter based on specific events
  * ethnicity `array`: Filter search results based on the ethnicity of individuals in an image.
  * exclude_nudity `boolean`: Excludes images containing nudity. The default is false.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * file_types `array`: Return only images having a specific file type.
  * graphical_styles `array`: Filter based on graphical style of the image.
  * graphical_styles_filter_type `string` (values: include, exclude)
  * include_related_searches `boolean`: Specifies whether or not to include related searches in the response. The default is false.
  * keyword_ids `array`: Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
  * minimum_size `string` (values: x_small, small, medium, large, x_large, xx_large, vector)
  * number_of_people `array`: Filter based on the number of people in the image.
  * orientations `array`: Return only images with selected aspect ratios.
  * page `integer`: Request results starting at a page number (default is 1).
  * page_size `integer`: Request number of images to return in each page.
  * phrase `string`: Search images using a search phrase.
  * sort_order `string` (values: best_match, most_popular, newest, random)
  * specific_people `array`: Return only images associated with specific people (using a comma-delimited list).

#### Output
* output [ImageSearchItemSearchResults](#imagesearchitemsearchresults)

### v3.search.images.creative.get
Use this endpoint to search our contemporary stock photos, illustrations and archival images.

You'll need an API key and access token to use this resource.
 
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
gettyimages.v3.search.images.creative.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * age_of_people `array`: Filter based on the age of individuals in an image.
  * artists `string`: Search for images by specific artists (free-text, comma-separated list of artists).
  * collection_codes `array`: Filter by collection codes (comma-separated list). Include or exclude based on collections_filter_type.
  * collections_filter_type `string` (values: include, exclude)
  * color `string`: Filter based on predominant color in an image. Use 6 character hexidecimal format (e.g., #002244).
  * compositions `array`: Filter based on image composition.
  * download_product `string`: Filters based on which product the asset will download against.
  * embed_content_only `boolean`: Restrict search results to embeddable images. The default is false.
  * ethnicity `array`: Filter search results based on the ethnicity of individuals in an image.
  * exclude_nudity `boolean`: Excludes images containing nudity. The default is false.
  * exclude_editorial_use_only `boolean`: Exclude images that are only available for editorial (non-commercial) use. Default value is false.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * file_types `array`: Return only images having a specific file type.
  * graphical_styles `array`: Filter based on graphical style of the image.
  * graphical_styles_filter_type `string` (values: include, exclude)
  * include_related_searches `boolean`: Specifies whether or not to include related searches in the response. The default is false.
  * keyword_ids `array`: Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
  * minimum_size `string` (values: x_small, small, medium, large, x_large, xx_large, vector)
  * number_of_people `array`: Filter based on the number of people in the image.
  * orientations `array`: Return only images with selected aspect ratios.
  * page `integer`: Request results starting at a page number (default is 1).
  * page_size `integer`: Request number of images to return in each page.
  * phrase `string`: Search images using a search phrase.
  * sort_order `string` (values: best_match, most_popular, newest, random)
  * facet_fields `array`: Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
  * include_facets `boolean`: Specifies whether or not to include facets in the result set. Default is "false".
  * facet_max_count `integer`: Specifies the maximum number of facets to return per type. Default is 300.

#### Output
* output [CreativeImageSearchResults](#creativeimagesearchresults)

### v3.search.images.creative.by_image.get
Allows searching for similar creative images by passing the URL to an existing image.

Before calling the search by image endpoint, an image must be uploaded to a specific AWS S3 bucket. The bucket name is `search-by-image.s3.amazonaws.com`.
For example, using cURL:
```sh
curl -i -X PUT https://search-by-image.s3.amazonaws.com/my-test-image.jpg -H "Content-Type: image/jpeg" --data-binary "@testimage.jpg"
```

Uploads can be overwritten if the names are the same, so using a prefix like the API Key, application name or company name is recommended. Uploads will expire from the bucket after 24 hours.

Once the image has been uploaded, use the full URL in the `image_url` parameter, e.g. `image_url=https://search-by-image.s3.amazonaws.com/my-test-image.jpg`.

<!-- TODO/HACK from https://app.clickup.com/t/8mfmv3 - Uncomment this if image_fingerprint ever comes back to be useful -->
<!-- Subsequent searches for the same image can be executed using the `image_fingerprint` that is returned by the initial search. -->



```js
gettyimages.v3.search.images.creative.by_image.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * image_url `string`: Specifies the location of the image to use in the search.
  * image_fingerprint `string`: CURRENTLY HAS NO EFFECT
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * product_types `array`: Filter images to those from one of your product types. 
  * page `integer`: Request results starting at a page number (default is 1).
  * page_size `integer`: Request number of images to return in each page.
  * facet_fields `array`: Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
  * facet_max_count `integer`: Specifies the maximum number of facets to return per type. Default is 300.
  * include_facets `boolean`: Specifies whether or not to include facets in the result set. Default is "false".

#### Output
* output [SearchByImageResourceResults](#searchbyimageresourceresults)

### v3.search.images.editorial.get
Use this endpoint to search our editorial stock photos, illustrations and archival images.  Editorial images represent newsworthy events or illustrate matters of general interest, such as news, sport and entertainment and are generally intended for editorial use.

You'll need an API key and access token to use this resource.

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
gettyimages.v3.search.images.editorial.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * age_of_people `array`: Filter based on the age of individuals in an image.
  * artists `string`: Search for images by specific artists (free-text, comma-separated list of artists).
  * collection_codes `array`: Filter by collections (comma-separated list of collection codes). Include or exclude based on collections_filter_type.
  * collections_filter_type `string` (values: include, exclude)
  * compositions `array`: Filter based on image composition.
  * download_product `string`: Filters based on which product the asset will download against.
  * editorial_segments `array`: Return only events with a matching editorial segment.
  * entity_uris `array`: specify linked data entity uri.
  * embed_content_only `boolean`: Restrict search results to embeddable images. The default is false.
  * date_from `string`: Return only images that are created on or after this date. Use ISO 8601 format (e.g., 1999-12-31).
  * date_to `string`: Return only images that are created on or before this date. Use ISO 8601 format (e.g., 1999-12-31).
  * event_ids `array`: Filter based on specific events
  * ethnicity `array`: Filter search results based on the ethnicity of individuals in an image.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * file_types `array`: Return only images having a specific file type.
  * graphical_styles `array`: Filter based on graphical style of the image.
  * graphical_styles_filter_type `string` (values: include, exclude)
  * include_related_searches `boolean`: Specifies whether or not to include related searches in the response. The default is false.
  * keyword_ids `array`: Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
  * minimum_size `string` (values: x_small, small, medium, large, x_large, xx_large, vector)
  * number_of_people `array`: Filter based on the number of people in the image.
  * orientations `array`: Return only images with selected aspect ratios.
  * page `integer`: Request results starting at a page number (default is 1).
  * page_size `integer`: Request number of images to return in each page.
  * phrase `string`: Search images using a search phrase.
  * sort_order `string` (values: best_match, most_popular, newest, oldest, random)
  * specific_people `array`: Return only images associated with specific people (using a comma-delimited list).
  * minimum_quality_rank `integer`: Filter search results based on minimum quality ranking. Possible values 1, 2, 3 with 1 being best.
  * facet_fields `array`: Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
  * include_facets `boolean`: Specifies whether or not to include facets in the result set. Default is "false".
  * facet_max_count `integer`: Specifies the maximum number of facets to return per type. Default is 300.

#### Output
* output [EditorialImageSearchResults](#editorialimagesearchresults)

### v3.search.videos.creative.get
Use this endpoint to search premium stock video, from archival film to contemporary 4K and HD footage.

You'll need an API key and access token to use this resource.

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
		"call_for_image",
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
gettyimages.v3.search.videos.creative.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * age_of_people `array`: Provides filtering according to the age of individuals in a video.
  * artists `string`: Search for images by specific artists (free-text, comma-separated list of artists).
  * collection_codes `array`: Provides filtering by collection code.
  * collections_filter_type `string` (values: include, exclude)
  * compositions `array`: Filter based on video composition.
  * download_product `string`: Filters based on which product the asset will download against.
  * format_available `string` (values: sd, hd, 4k, hd_web)
  * frame_rates `array`: Provides filtering by video frame rate (frames/second).
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * image_techniques `array`: Filter based on image technique.
  * include_related_searches `boolean`: Specifies whether or not to include related searches in the response. The default is false.
  * keyword_ids `array`: Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
  * license_models `array`: Specifies the video licensing model(s).
  * min_clip_length `integer`: Provides filtering by minimum length of video clip, in seconds
  * max_clip_length `integer`: Provides filtering by maximum length of video, in seconds
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.
  * phrase `string`: Free-text search query.
  * sort_order `string` (values: best_match, most_popular, newest, random)
  * release_status `string` (values: release_not_important, fully_released)
  * facet_fields `array`: Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
  * facet_max_count `integer`: Specifies the maximum number of facets to return per type. Default is 300.
  * include_facets `boolean`: Specifies whether or not to include facets in the result set. Default is "false".
  * viewpoints `array`: Filter based on viewpoint.

#### Output
* output [CreativeVideoSearchResults](#creativevideosearchresults)

### v3.search.videos.editorial.get
Use this endpoint to search current and archival video clips of celebrities, newsmakers, and events.

You'll need an API key and access token to use this resource.

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
		"call_for_image",
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
gettyimages.v3.search.videos.editorial.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * age_of_people `array`: Provides filtering according to the age of individuals in a video.
  * artists `string`: Search for images by specific artists (free-text, comma-separated list of artists).
  * collection_codes `array`: Provides filtering by collection code.
  * collections_filter_type `string` (values: include, exclude)
  * compositions `array`: Filter based on video composition.
  * download_product `string`: Filters based on which product the asset will download against.
  * editorial_video_types `array`: Allows filtering by types of video.
  * entity_uris `array`: specify link data entity uri.
  * specific_people `array`: Allows filtering by specific peoples' names.
  * format_available `string` (values: sd, hd, 4k, hd_web)
  * frame_rates `array`: Provides filtering by video frame rate (frames/second).
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * image_techniques `array`: Filter based on image technique.
  * include_related_searches `boolean`: Specifies whether or not to include related searches in the response. The default is false.
  * keyword_ids `array`: Return only images tagged with specific keyword(s). Specify using a comma-separated list of keyword Ids. If keyword Ids and phrase are both specified, only those images matching the query phrase which also contain the requested keyword(s) are returned.
  * min_clip_length `integer`: Provides filtering by minimum length of video clip, in seconds
  * max_clip_length `integer`: Provides filtering by maximum length of video clip, in seconds
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.
  * phrase `string`: Free-text search query.
  * sort_order `string` (values: best_match, most_popular, newest, oldest, random)
  * release_status `string` (values: release_not_important, fully_released)
  * facet_fields `array`: Specifies the facets to return in the response. Facets provide additional search parameters to refine your results.
  * include_facets `boolean`: Specifies whether or not to include facets in the result set. Default is "false".
  * facet_max_count `integer`: Specifies the maximum number of facets to return per type. Default is 300.
  * viewpoints `array`: Filter based on viewpoint.

#### Output
* output [EditorialVideoSearchResults](#editorialvideosearchresults)

### v3.usage_batches.id.put
# Report Usage

Use this endpoint to report the usages of a set of assets. The count of assets submitted in a single batch to this endpoint is limited to 1000. Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. In this case, you will need to remove the invalid asset Ids from the query request and re-submit the query.

##  Quickstart

You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key. 

_Note_: Date of use can be in any unambiguous date format.



```js
gettyimages.v3.usage_batches.id.put({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Specifies a unique batch transaction id to identify the report.
  * body [report_usage_batch_request](#report_usage_batch_request)

#### Output
* output [report_usage_batch_response](#report_usage_batch_response)

### v3.videos.get
Use this endpoint to return detailed video metadata for all the specified video ids.

You'll need an API key and access token to use this resource.

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
		"call_for_image",
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
gettyimages.v3.videos.get({}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * ids `array`: Specifies one or more video ids to return. Use comma delimiter when requesting multiple ids.
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.

#### Output
*Output schema unknown*

### v3.videos.id.get
Use this endpoint to return detailed video metadata for the specified video id.

You'll need an API key and access token to use this resource.

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
		"call_for_image",
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
gettyimages.v3.videos.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * id **required** `string`: A video id. For more than one video please use the /v3/video endpoint.
  * fields `array`: comma delimited list of fields to retrieve for the video

#### Output
*Output schema unknown*

### v3.videos.id.downloadhistory.get
Returns information about a customer's download history for a specific asset


```js
gettyimages.v3.videos.id.downloadhistory.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * id **required** `string`: An image id.
  * company_downloads `boolean`: If specified, returns the list of previously downloaded images for all users in your company.

#### Output
* output [AssetDownloadHistoryResults](#assetdownloadhistoryresults)

### v3.videos.id.same_series.get
This endpoint will provide the list of videos, if any exist, from the same series as the specified creative asset id. These images are typically from the same photo shoot. This functionality will not work for editorial assets.

You'll need an API key and access token to use this resource.

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
		"call_for_image",
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


```js
gettyimages.v3.videos.id.same_series.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * id **required** `string`: Identifies an existing video
  * fields `array`: Specifies fields to return. Defaults to 'summary_set'.
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.

#### Output
*Output schema unknown*

### v3.videos.id.similar.get
This endpoint will provide a list of videos that are similar to the specified asset id.

You'll need an API key and access token to use this resource.

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
		"call_for_image",
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


```js
gettyimages.v3.videos.id.similar.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string`: Provide a header to specify the language of result values. Supported values: en-GB, de, nl, fr, en-US, it, ja, pt-PT, es, sv, ko (creative assets only), pl (creative assets only), pt-BR, zh-HK (creative assets only), zh-TW (creative assets only), ru (creative assets only), tr.
  * id **required** `string`: A video id.
  * fields `array`: comma delimited list of fields to retrive for the videos
  * page `integer`: Identifies page to return. Default is 1.
  * page_size `integer`: Specifies page size. Default is 30, maximum page_size is 100.

#### Output
*Output schema unknown*



## Definitions

### AcquireAssetLicensesRequest
* AcquireAssetLicensesRequest `object`
  * LicenseTypes **required** `array`
    * items [ExtendedLicenses](#extendedlicenses)
  * UseTeamCredits `boolean`: Defaults to false.

### AddBoardAssetsResult
* AddBoardAssetsResult `object`
  * assets_added `array`
    * items [BoardAsset](#boardasset)
  * assets_not_added `array`
    * items `string`

### AffiliateImage
* AffiliateImage `object`
  * caption `string`
  * destination_url `string`
  * id `string`
  * preview_urls [AffiliateImageUrls](#affiliateimageurls)
  * title `string`

### AffiliateImageSearchResponse
* AffiliateImageSearchResponse `object`
  * auto_corrections [AutoCorrections](#autocorrections)
  * images `array`
    * items [AffiliateImage](#affiliateimage)

### AffiliateImageUrls
* AffiliateImageUrls `object`
  * large `string`
  * large_height `integer`
  * large_width `integer`
  * medium `string`
  * medium_height `integer`
  * medium_width `integer`
  * small `string`
  * small_height `integer`
  * small_width `integer`

### AffiliateSearchStyle
* AffiliateSearchStyle `string` (values: photography, vector)

### AffiliateVideo
* AffiliateVideo `object`
  * caption `string`
  * clip_length `string`
  * destination_url `string`
  * id `string`
  * preview_urls [AffiliateVideoUrls](#affiliatevideourls)
  * title `string`

### AffiliateVideoSearchResponse
* AffiliateVideoSearchResponse `object`
  * auto_corrections [AutoCorrections](#autocorrections)
  * videos `array`
    * items [AffiliateVideo](#affiliatevideo)

### AffiliateVideoUrls
* AffiliateVideoUrls `object`
  * large_motion `string`
  * large_still `string`
  * medium_still `string`
  * small_motion `string`
  * small_still `string`

### AgeOfPeopleFilterType
* AgeOfPeopleFilterType `string` (values: newborn, baby, child, teenager, young_adult, adult, adults_only, mature_adult, senior_adult, 0-1_months, 2-5_months, 6-11_months, 12-17_months, 18-23_months, 2-3_years, 4-5_years, 6-7_years, 8-9_years, 10-11_years, 12-13_years, 14-15_years, 16-17_years, 18-19_years, 20-24_years, 20-29_years, 25-29_years, 30-34_years, 30-39_years, 35-39_years, 40-44_years, 40-49_years, 45-49_years, 50-54_years, 50-59_years, 55-59_years, 60-64_years, 60-69_years, 65-69_years, 70-79_years, 80-89_years, 90_plus_years, 100_over)

### AllowedUse
* AllowedUse `object`
  * how_can_i_use_it `string`: Indicates how the asset can be used
  * release_info `string`: Indicates release status
  * usage_restrictions `array`: Indicates asset usage restriction, if any
    * items `string`

### Artist
* Artist `object`
  * name `string`

### ArtistsImageSearchFieldValues
* ArtistsImageSearchFieldValues `string` (values: id, allowed_use, alternative_ids, artist, asset_family, asset_type, call_for_image, caption, collection_id, collection_code, collection_name, comp, copyright, date_created, date_submitted, detail_set, display_set, editorial_segments, event_ids, graphical_style, high_res_comp, keywords, license_model, max_dimensions, mid_res_comp, orientation, preview, product_types, quality_rank, referral_destinations, summary_set, thumb, title)

### ArtistsVideoSearchFieldValues
* ArtistsVideoSearchFieldValues `string` (values: id, allowed_use, alternative_ids, artist, asset_family, asset_type, call_for_image, caption, clip_length, collection_id, collection_code, collection_name, comp, copyright, date_created, date_submitted, detail_set, display_set, editorial_segments, event_ids, graphical_style, high_res_comp, keywords, license_model, max_dimensions, mid_res_comp, orientation, preview, product_types, quality_rank, referral_destinations, summary_set, thumb, title)

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

### AssetDownloadHistoryResults
* AssetDownloadHistoryResults `object`
  * downloads `object`
  * id `string`

### AssetFamily
* AssetFamily `string` (values: NotSet, Editorial, Creative, Both)

### AssetIdFromOrder
* AssetIdFromOrder `object`
  * id `string`

### AssetLicenseName
* AssetLicenseName `string` (values: Standard, Multiseat, Unlimited, Resale, Indemnification)

### AssetLicensingResponse
* AssetLicensingResponse `object`
  * AcquiredLicenses `array`
    * items [AssetLicenseName](#assetlicensename)
  * CreditsUsed `integer`

### AssetType
* AssetType `string` (values: NotSet, Image, Film, Music)

### AutoCorrections
* AutoCorrections `object`
  * phrase `string`

### BlendedImageSortOrder
* BlendedImageSortOrder `string` (values: best_match, most_popular, newest, random)

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

### BoardRelationship
* BoardRelationship `string` (values: owned, invited)

### BoardSortOrder
* BoardSortOrder `string` (values: date_last_updated_descending, date_last_updated_ascending, name_ascending, name_decending)

### ChangedAssetDetail
* ChangedAssetDetail `object`
  * asset_changed_utc_datetime `string`: Contains the date of the asset change.
  * asset_lifecycle `string`: Contains the type of change this asset change is. (i.e. "New," "Updated" or "Deleted")
  * asset_type `string`: Contains the type of asset this asset change is (i.e. "Image").
  * id `string`: Contains the Id for the asset change.
  * uri `string`: Contains the asset download URL for assets with an AssetLifecycle of "New."

### Channel
* Channel `object`
  * AssetChangeType `string`
  * AssetFamily [AssetFamily](#assetfamily)
  * AssetType [AssetType](#assettype)
  * ChannelId `integer`
  * CreateDateUtc `string`
  * Metadata `string`
  * NotificationCount `integer`
  * OldestChangeNotificationDateUtc `string`

### Collaborator
* Collaborator `object`
  * first_name `string`
  * last_name `string`

### Collection
* Collection `object`
  * asset_family `string`
  * code `string`
  * id `integer`
  * license_model `string`
  * name `string`
  * product_types `array`
    * items `string`

### CollectionsFilterType
* CollectionsFilterType `string` (values: include, exclude)

### CollectionsList
* CollectionsList `object`
  * collections `array`
    * items [Collection](#collection)

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

### CompositionsFilterType
* CompositionsFilterType `string` (values: abstract, candid, close_up, copy_space, cut_out, full_frame, full_length, headshot, looking_at_camera, macro, portrait, sparse, still_life, three_quarter_length, waist_up)

### Contributor
* Contributor `object`: Contributor information for an image or video
  * display_name `string`: The contributor's display name
  * member_name `string`: The contributor's member name

### CountriesList
* CountriesList `object`
  * countries `array`
    * items [Country](#country)

### Country
* Country `object`
  * iso_alpha_2 `string`
  * iso_alpha_3 `string`
  * name `string`

### CreateImageSearchFacetsFields
* CreateImageSearchFacetsFields `string` (values: artists, locations)

### CreateVideoSearchFacetsFields
* CreateVideoSearchFacetsFields `string` (values: artists, locations)

### CreativeImageSearchResults
* CreativeImageSearchResults `object`
  * auto_corrections [AutoCorrections](#autocorrections)
  * images `array`
    * items [ImageSearchItemCreative](#imagesearchitemcreative)
  * related_searches `array`
    * items [RelatedSearch](#relatedsearch)
  * result_count `integer`

### CreativeImageSortOrder
* CreativeImageSortOrder `string` (values: best_match, most_popular, newest, random)

### CreativeImagesFieldValues
* CreativeImagesFieldValues `string` (values: allowed_use, alternative_ids, artist, asset_family, call_for_image, caption, collection_code, collection_id, collection_name, color_type, comp, copyright, date_camera_shot, date_created, date_submitted, detail_set, display_set, download_product, download_sizes, graphical_style, id, istock_collection, keywords, largest_downloads, license_model, max_dimensions, orientation, preview, product_types, quality_rank, referral_destinations, summary_set, thumb, title, uri_oembed)

### CreativeVideoSearchResults
* CreativeVideoSearchResults `object`
  * auto_corrections [AutoCorrections](#autocorrections)
  * facets [SearchFacetsResponse](#searchfacetsresponse)
  * related_searches `array`
    * items [RelatedSearch](#relatedsearch)
  * result_count `integer`
  * videos `array`
    * items [VideoSearchItem](#videosearchitem)

### CreativeVideoSortOrder
* CreativeVideoSortOrder `string` (values: best_match, most_popular, newest, random)

### CreativeVideosFieldValues
* CreativeVideosFieldValues `string` (values: allowed_use, artist, asset_family, call_for_image, caption, clip_length, collection_code, collection_id, collection_name, color_type, comp, copyright, date_created, date_submitted, detail_set, display_set, download_product, download_sizes, era, id, istock_collection, keywords, largest_downloads, license_model, mastered_to, originally_shot_on, object_name, preview, product_types, referral_destinations, shot_speed, source, summary_set, thumb, title)

### CuratedSet
* CuratedSet `object`
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

### CustomerInfoResponse
* CustomerInfoResponse `object`
  * first_name `string`
  * last_name `string`
  * middle_name `string`

### Dimensions
* Dimensions `object`
  * dpi `integer`
  * height `integer`
  * width `integer`

### DisplaySize
* DisplaySize `object`
  * name `string`
  * uri `string`

### Download
* Download `object`
  * agreement_name `string`
  * product_id `string`
  * product_type `string`
  * uri `string`

### DownloadDetails
* DownloadDetails `object`
  * download_notes `string`
  * project_code `string`

### DownloadFileType
* DownloadFileType `string` (values: eps, jpg)

### DownloadRequirements
* DownloadRequirements `object`
  * is_note_required `boolean`
  * is_project_code_required `boolean`
  * project_codes `array`
    * items `string`

### EditorialGraphicalStyle
* EditorialGraphicalStyle `string` (values: photography, illustration, vector)

### EditorialImageSearchFacetsFields
* EditorialImageSearchFacetsFields `string` (values: artists, events, locations, specific_people)

### EditorialImageSearchResults
* EditorialImageSearchResults `object`
  * images `array`
    * items [ImageSearchItemEditorial](#imagesearchitemeditorial)
  * related_searches `array`
    * items [RelatedSearch](#relatedsearch)
  * result_count `integer`

### EditorialImagesFieldValues
* EditorialImagesFieldValues `string` (values: allowed_use, alternative_ids, artist, asset_family, call_for_image, caption, collection_code, collection_id, collection_name, color_type, comp, copyright, date_camera_shot, date_created, date_submitted, detail_set, display_set, download_product, download_sizes, editorial_segments, editorial_source, entity_details, event_ids, graphical_style, id, keywords, largest_downloads, license_model, max_dimensions, orientation, people, preview, product_types, quality_rank, referral_destinations, summary_set, thumb, title, uri_oembed)

### EditorialSegmentContract
* EditorialSegmentContract `string` (values: archival, entertainment, news, publicity, royalty, sport)

### EditorialSource
* EditorialSource `object`
  * id `integer`

### EditorialVideoSearchFacetsFields
* EditorialVideoSearchFacetsFields `string` (values: artists, events, locations, specific_people)

### EditorialVideoSearchResults
* EditorialVideoSearchResults `object`
  * facets [SearchFacetsResponse](#searchfacetsresponse)
  * related_searches `array`
    * items [RelatedSearch](#relatedsearch)
  * result_count `integer`
  * videos `array`
    * items [VideoSearchItem](#videosearchitem)

### EditorialVideoType
* EditorialVideoType `string` (values: raw, produced)

### Entertainment
* Entertainment `object`
  * id `integer`
  * name `string`

### EthnicityFilterType
* EthnicityFilterType `string` (values: black, caucasian, east_asian, hispanic_latino, japanese, middle_eastern, mixed_race_person, multiethnic_group, native_american_first_nations, pacific_islander, south_asian, southeast_asian)

### Event
* Event `object`
  * child_event_count `integer`
  * editorial_segments `array`
    * items `string`
  * hero_image [HeroImage](#heroimage)
  * id `integer`
  * image_count `integer`
  * location [LocationEvent](#locationevent)
  * name `string`
  * start_date `string`

### EventDetailFieldValues
* EventDetailFieldValues `string` (values: id, child_event_count, editorial_segments, hero_image, image_count, location, name, start_date, type)

### EventFieldValues
* EventFieldValues `string` (values: id, child_event_count, editorial_segments, hero_image, image_count, keywords, location, name, start_date, type)

### EventsSearchResult
* EventsSearchResult `object`
  * events `array`
    * items [Event](#event)
  * result_count `integer`

### ExtendedLicenses
* ExtendedLicenses `string` (values: Multiseat, Unlimited, Resale, Indemnification)

### FacetEvent
* FacetEvent `object`
  * date `string`
  * id `integer`
  * name `string`

### GetDownloadsResponse
* GetDownloadsResponse `object`
  * downloads `array`
    * items [HistoricalDownload](#historicaldownload)
  * result_count `integer`

### GraphicalStyle
* GraphicalStyle `string` (values: fine_art, illustration, photography, vector)

### GraphicalStylesFilterType
* GraphicalStylesFilterType `string` (values: include, exclude)

### HeroImage
* HeroImage `object`
  * display_sizes `array`
    * items [HeroImageDisplaySize](#heroimagedisplaysize)
  * id `string`

### HeroImageDisplaySize
* HeroImageDisplaySize `object`
  * is_watermarked `boolean`
  * name `string`
  * uri `string`

### HistoricalDownload
* HistoricalDownload `object`
  * agreement_name `string`
  * asset_type `string`
  * date_downloaded `string`
  * dimensions [Dimensions](#dimensions)
  * download_details [DownloadDetails](#downloaddetails)
  * download_source `string`
  * id `string`
  * product_id `integer`
  * product_type `string`
  * size_name `string`
  * thumb_uri `string`
  * user [User](#user)

### IStockLicense
* IStockLicense `object`
  * credits `integer`
  * license_type [AssetLicenseName](#assetlicensename)

### ImageDetailFieldValues
* ImageDetailFieldValues `string` (values: allowed_use, alternative_ids, artist, artist_title, asset_family, call_for_image, caption, city, collection_code, collection_id, collection_name, color_type, comp, copyright, country, credit_line, date_camera_shot, date_created, date_submitted, detail_set, display_set, download_sizes, download_product, downloads, editorial_segments, editorial_source, entity_details, event_ids, graphical_style, id, istock_collection, istock_licenses, keywords, largest_downloads, license_model, links, max_dimensions, object_name, orientation, people, preview, product_types, quality_rank, referral_destinations, state_province, summary_set, thumb, title, uri_oembed)

### ImageSearchItem
* ImageSearchItem `object`
  * allowed_use [AllowedUse](#alloweduse)
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
    * items [ImageSearchItemDisplaySize](#imagesearchitemdisplaysize)
  * download_product `string`
  * editorial_segments `array`
    * items `string`
  * event_ids `array`
    * items `integer`
  * graphical_style `string`
  * id `string`
  * istock_licenses `array`
    * items [IStockLicense](#istocklicense)
  * keywords `array`
    * items [Keyword](#keyword)
  * largest_downloads `array`
    * items [Download](#download)
  * license_model `string`
  * max_dimensions [MaxDimensions](#maxdimensions)
  * orientation `string`
  * people `array`
    * items `string`
  * product_types `array`
    * items `string`
  * quality_rank `integer`
  * referral_destinations `array`
    * items [ReferralDestination](#referraldestination)
  * title `string`
  * uri_oembed `string`

### ImageSearchItemCreative
* ImageSearchItemCreative `object`
  * allowed_use [AllowedUse](#alloweduse)
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
    * items [ImageSearchItemDisplaySize](#imagesearchitemdisplaysize)
  * download_product `string`
  * graphical_style `string`
  * id `string`
  * keywords `array`
    * items [Keyword](#keyword)
  * largest_downloads `array`
    * items [Download](#download)
  * license_model `string`
  * max_dimensions [MaxDimensions](#maxdimensions)
  * orientation `string`
  * quality_rank `integer`
  * referral_destinations `array`
    * items [ReferralDestination](#referraldestination)
  * title `string`
  * uri_oembed `string`

### ImageSearchItemDisplaySize
* ImageSearchItemDisplaySize `object`
  * is_watermarked `boolean`
  * name `string`
  * uri `string`

### ImageSearchItemEditorial
* ImageSearchItemEditorial `object`
  * allowed_use [AllowedUse](#alloweduse)
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
    * items [ImageSearchItemDisplaySize](#imagesearchitemdisplaysize)
  * download_product `string`
  * editorial_segments `array`
    * items `string`
  * editorial_source [EditorialSource](#editorialsource)
  * event_ids `array`
    * items `integer`
  * graphical_style `string`
  * id `string`
  * keywords `array`
    * items [Keyword](#keyword)
  * largest_downloads `array`
    * items [Download](#download)
  * license_model `string`
  * max_dimensions [MaxDimensions](#maxdimensions)
  * orientation `string`
  * people `array`
    * items `string`
  * product_types `array`
    * items `string`
  * quality_rank `integer`
  * referral_destinations `array`
    * items [ReferralDestination](#referraldestination)
  * title `string`
  * uri_oembed `string`

### ImageSearchItemSearchResults
* ImageSearchItemSearchResults `object`
  * images `array`
    * items [ImageSearchItem](#imagesearchitem)
  * related_searches `array`
    * items [RelatedSearch](#relatedsearch)
  * result_count `integer`

### ImageTechniquesFilterType
* ImageTechniquesFilterType `string` (values: realtime, time_lapse, slow_motion, color, black_and_white, animation, selective_focus)

### ImagesDetailResults
* ImagesDetailResults `object`
  * images `object`
  * images_not_found `array`
    * items `string`

### ImagesFieldValues
* ImagesFieldValues `string` (values: accessrestriction, allowed_use, alternative_ids, artist, asset_family, call_for_image, caption, collection_code, collection_id, collection_name, color_type, comp, copyright, date_camera_shot, date_created, date_submitted, detail_set, display_set, download_product, download_sizes, editorial_segments, editorial_source, entity_details, event_ids, graphical_style, id, istock_collection, keywords, largest_downloads, license_model, max_dimensions, orientation, people, preview, product_types, quality_rank, referral_destinations, summary_set, thumb, title, uri_oembed)

### Keyword
* Keyword `object`
  * entity_types `array`
    * items `string`
  * entity_uris `array`
    * items `string`
  * keyword_id `string`
  * relevance `integer`
  * text `string`
  * type `string`

### LicenseModelImageRequest
* LicenseModelImageRequest `string` (values: rightsmanaged, royaltyfree)

### LicenseModelVideoRequest
* LicenseModelVideoRequest `string` (values: rightsready, royaltyfree)

### Links
* Links `object`
  * invitation `string`
  * share `string`

### Location
* Location `object`
  * id `integer`
  * name `string`

### LocationEvent
* LocationEvent `object`
  * city `string`
  * country `string`
  * state_province `string`
  * venue `string`

### LogLevel
* LogLevel `string` (values: Trace, Debug, Information, Warning, Error, Critical, None)

### MaxDimensions
* MaxDimensions `object`
  * height `integer`
  * width `integer`

### MemcachedLogEntry
* MemcachedLogEntry `object`
  * ExceptionMessage `string`
  * LogLevel [LogLevel](#loglevel)
  * Message `string`
  * Time `string`

### NumberOfPeopleFilterType
* NumberOfPeopleFilterType `string` (values: none, one, two, group)

### OrderDetail
* OrderDetail `object`
  * assets `array`
    * items [AssetIdFromOrder](#assetidfromorder)
  * end_client `string`
  * id `string`
  * invoice_number `string`
  * notes [OrderNotes](#ordernotes)
  * order_date `string`

### OrderNotes
* OrderNotes `object`
  * licensee_name `string`
  * ordered_by `string`
  * project_title `string`
  * purchase_order_number `string`

### OrientationRequest
* OrientationRequest `string` (values: horizontal, vertical, square, panoramic_horizontal, panoramic_vertical)

### OverageDetails
* OverageDetails `object`
  * count `integer`
  * limit `integer`
  * overages_reached `boolean`
  * remaining `integer`

### PremiumAccessDownloadData
* PremiumAccessDownloadData `object`
  * download_notes `string`
  * project_code `string`

### PreviousAssetPurchase
* PreviousAssetPurchase `object`
  * asset_id `string`
  * asset_type `string`
  * date_purchased `string`
  * download_uri `string`
  * file_size_in_bytes `string`
  * license_model `string`
  * order_id `string`
  * purchased_by `string`
  * size_name `string`
  * thumb_uri `string`

### PreviousAssetPurchases
* PreviousAssetPurchases `object`
  * previous_purchases `array`
    * items [PreviousAssetPurchase](#previousassetpurchase)
  * result_count `integer`

### PreviousPurchase
* PreviousPurchase `object`
  * date_purchased `string`
  * image_id `string`
  * license_model `string`
  * order_id `string`
  * thumb_uri `string`

### PreviousPurchases
* PreviousPurchases `object`
  * previous_purchases `array`
    * items [PreviousPurchase](#previouspurchase)
  * result_count `integer`

### Product
* Product `object`
  * agreement_name `string`
  * application_website `string`
  * credits_remaining `integer`
  * download_limit `integer`
  * download_limit_duration `string`
  * download_limit_reset_utc_date `string`
  * download_requirements [DownloadRequirements](#downloadrequirements)
  * downloads_remaining `integer`
  * expiration_utc_date `string`
  * id `integer`
  * imagepack_resolution `string`
  * name `string`
  * overage [OverageDetails](#overagedetails)
  * status [ProductStatus](#productstatus)
  * team_credits `integer`
  * type [ProductTypeResponse](#producttyperesponse)

### ProductFieldValues
* ProductFieldValues `string` (values: download_requirements)

### ProductStatus
* ProductStatus `string` (values: active, inactive)

### ProductStatusRequest
* ProductStatusRequest `string` (values: all, active, inactive)

### ProductTypeRequest
* ProductTypeRequest `string` (values: easyaccess, editorialsubscription, imagepack, premiumaccess, royaltyfreesubscription)

### ProductTypeResponse
* ProductTypeResponse `string` (values: easyaccess, editorialsubscription, imagepack, premiumaccess, royaltyfreesubscription, creditpack)

### ProductsResult
* ProductsResult `object`
  * products `array`
    * items [Product](#product)

### ReferralDestination
* ReferralDestination `object`
  * site_name `string`
  * uri `string`

### RelatedSearch
* RelatedSearch `object`
  * phrase `string`
  * url `string`

### ReleaseStatus
* ReleaseStatus `string` (values: release_not_important, fully_released)

### SearchByImageResourceResults
* SearchByImageResourceResults `object`
  * auto_corrections [AutoCorrections](#autocorrections)
  * facets [SearchFacetsResponse](#searchfacetsresponse)
  * image_fingerprint `string`
  * images `object`
  * related_searches `array`
    * items [RelatedSearch](#relatedsearch)
  * result_count `integer`

### SearchFacetsResponse
* SearchFacetsResponse `object`
  * artists `array`
    * items [Artist](#artist)
  * entertainment `array`
    * items [Entertainment](#entertainment)
  * events `array`
    * items [FacetEvent](#facetevent)
  * locations `array`
    * items [Location](#location)
  * specific_people `array`
    * items [SpecificPeople](#specificpeople)

### SearchFileType
* SearchFileType `string` (values: eps, jpg)

### SelfResult
* SelfResult `object`
  * email `string`
  * id `string`
  * name `string`

### SortOrder
* SortOrder `string` (values: best_match, most_popular, newest, oldest, random)

### SpecificPeople
* SpecificPeople `object`
  * id `integer`
  * name `string`

### TeeShirtSize
* TeeShirtSize `string` (values: x_small, small, medium, large, x_large, xx_large, vector)

### TerritoryRestriction
* TerritoryRestriction `object`
  * country_code `string`
  * description `string`
  * type `string`

### User
* User `object`
  * first_name `string`
  * last_name `string`
  * middle_name `string`
  * username `string`

### VideoDetailFieldValues
* VideoDetailFieldValues `string` (values: id, allowed_use, artist, asset_family, call_for_image, caption, clip_length, collection_code, collection_id, collection_name, color_type, copyright, comp, date_created, date_submitted, detail_set, display_set, download_sizes, download_product, downloads, era, editorial_segments, entity_details, keywords, license_model, mastered_to, originally_shot_on, object_name, preview, product_types, referral_destinations, shot_speed, source, summary_set, thumb, title, istock_licenses, istock_collection)

### VideoFormatsRequest
* VideoFormatsRequest `string` (values: sd, hd, 4k, hd_web)

### VideoFrameRates
* VideoFrameRates `string` (values: 23.98, 24, 25, 29.97, 30, 50, 59.94, 60)

### VideoSearchItem
* VideoSearchItem `object`
  * allowed_use [AllowedUse](#alloweduse)
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
    * items [VideoSearchItemDisplaySize](#videosearchitemdisplaysize)
  * download_product `string`
  * era `string`
  * id `string`
  * istock_licenses `array`
    * items [IStockLicense](#istocklicense)
  * keywords `array`
    * items [Keyword](#keyword)
  * largest_downloads `array`
    * items [Download](#download)
  * license_model `string`
  * mastered_to `string`
  * originally_shot_on `string`
  * product_types `array`
    * items `string`
  * referral_destinations `array`
    * items [ReferralDestination](#referraldestination)
  * shot_speed `string`
  * source `string`
  * title `string`

### VideoSearchItemDisplaySize
* VideoSearchItemDisplaySize `object`
  * aspect_ratio `string`
  * is_watermarked `boolean`
  * name `string`
  * uri `string`

### VideoSearchItemVideoSearchResults
* VideoSearchItemVideoSearchResults `object`
  * facets [SearchFacetsResponse](#searchfacetsresponse)
  * related_searches `array`
    * items [RelatedSearch](#relatedsearch)
  * result_count `integer`
  * videos `array`
    * items [VideoSearchItem](#videosearchitem)

### VideosFieldValues
* VideosFieldValues `string` (values: allowed_use, artist, asset_family, call_for_image, caption, clip_length, collection_code, collection_id, collection_name, color_type, comp, copyright, date_created, date_submitted, detail_set, display_set, download_product, download_sizes, editorial_segments, entity_details, era, id, istock_collection, keywords, largest_downloads, license_model, mastered_to, originally_shot_on, object_name, preview, product_types, referral_destinations, shot_speed, source, summary_set, thumb, title, istock_licenses)

### ViewpointsFilterType
* ViewpointsFilterType `string` (values: lockdown, panning, tracking_shot, aerial_view, high_angle_view, low_angle_view, tilt, point_of_view)

### asset_usage
* asset_usage `object`: Specifies the id, usage Quantity, and date of when an asset was used.
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


