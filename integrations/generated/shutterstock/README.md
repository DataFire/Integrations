# @datafire/shutterstock

Client library for Shutterstock API Explorer

## Installation and Usage
```bash
npm install --save @datafire/shutterstock
```
```js
let shutterstock = require('@datafire/shutterstock').create({
  username: "",
  password: "",
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

The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
shutterstock.oauthCallback({
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
shutterstock.oauthRefresh(null, context)
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

### getTrackList
This endpoint lists information about one or more audio tracks, including the description and publication date.


```js
shutterstock.getTrackList({
  "id": []
}, context)
```

#### Input
* input `object`
  * id **required** `array`: One or more audio IDs
  * view `string` (values: minimal, full): Amount of detail to render in the response

#### Output
* output [AudioDataList](#audiodatalist)

### getSoundboxList
This endpoint lists your collections of audio tracks and their basic attributes.


```js
shutterstock.getSoundboxList({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number
  * per_page `integer`: Number of results per page

#### Output
* output [CollectionDataList](#collectiondatalist)

### createSoundbox
This endpoint creates one or more collections (soundboxes). To add tracks, use `POST /v2/audio/collections/{id}/items`.


```js
shutterstock.createSoundbox({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CollectionCreateRequest](#collectioncreaterequest)

#### Output
* output [CollectionCreateResponse](#collectioncreateresponse)

### deleteSoundbox
This endpoint deletes a collection.


```js
shutterstock.deleteSoundbox({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID

#### Output
*Output schema unknown*

### getSoundbox
This endpoint gets more detailed information about a collection, including the number of items in it and when it was last updated. To get the tracks in collections, use `GET /v2/audio/collections/{id}/items`.


```js
shutterstock.getSoundbox({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID

#### Output
* output [Collection](#collection)

### renameSoundbox
This endpoint sets a new name for a collection.


```js
shutterstock.renameSoundbox({
  "id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID
  * body **required** [CollectionUpdateRequest](#collectionupdaterequest)

#### Output
*Output schema unknown*

### deleteSoundboxItems
This endpoint removes one or more tracks from a collection.


```js
shutterstock.deleteSoundboxItems({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID
  * item_id `array`: One or more item IDs to remove from the collection

#### Output
*Output schema unknown*

### getSoundboxItems
This endpoint lists the IDs of tracks in a collection and the date that each was added.


```js
shutterstock.getSoundboxItems({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID
  * page `integer`: Page number
  * per_page `integer`: Number of results per page
  * sort `string` (values: newest, oldest): Sort order

#### Output
* output [CollectionItemDataList](#collectionitemdatalist)

### addSoundboxItems
This endpoint adds one or more tracks to a collection by track IDs.


```js
shutterstock.addSoundboxItems({
  "id": "",
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID
  * body **required** [CollectionItemRequest](#collectionitemrequest)

#### Output
*Output schema unknown*

### getGenres
This endpoint returns a list of all audio genres.


```js
shutterstock.getGenres(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [GenreList](#genrelist)

### getInstruments
This endpoint returns a list of all audio instruments.


```js
shutterstock.getInstruments(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [InstrumentList](#instrumentlist)

### getAudioLicenseList
This endpoint lists existing licenses. You can filter the results according to the track ID to see if you have an existing license for a specific track.


```js
shutterstock.getAudioLicenseList({}, context)
```

#### Input
* input `object`
  * audio_id `string`: Show licenses for the specified track ID

#### Output
* output [DownloadHistoryDataList](#downloadhistorydatalist)

### licenseTrack
This endpoint gets licenses for one or more tracks.


```js
shutterstock.licenseTrack({
  "body": {
    "audio": []
  }
}, context)
```

#### Input
* input `object`
  * license `string` (values: audio_standard, audio_enhanced, audio_platform, premier_music_basic, premier_music_extended, premier_music_pro, premier_music_comp): License type
  * search_id `string`: The ID of the search that led to licensing this track
  * body **required** [LicenseAudioRequest](#licenseaudiorequest)

#### Output
* output [LicenseAudioResultDataList](#licenseaudioresultdatalist)

### downloadTracks
This endpoint redownloads tracks that you have already received a license for.


```js
shutterstock.downloadTracks({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: License ID

#### Output
* output [Url](#url)

### getMoods
This endpoint returns a list of all audio moods.


```js
shutterstock.getMoods(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [MoodList](#moodlist)

### searchAudio
This endpoint searches for tracks. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter.


```js
shutterstock.searchAudio({}, context)
```

#### Input
* input `object`
  * artists `array`: Show tracks with one of the specified artist names or IDs
  * bpm `integer`: (Deprecated; use bpm_from and bpm_to instead) Show tracks with the specified beats per minute
  * bpm_from `integer`: Show tracks with the specified beats per minute or faster
  * bpm_to `integer`: Show tracks with the specified beats per minute or slower
  * duration `integer`: Show tracks with the specified duration (seconds)
  * duration_from `integer`: Show tracks with the specified duration or longer (seconds)
  * duration_to `integer`: Show tracks with the specified duration or shorter (seconds)
  * genre `array`: Show tracks with each of the specified genres; to get the list of genres, use `GET /v2/audio/genres`
  * is_instrumental `boolean`: Show instrumental music only
  * instruments `array`: Show tracks with each of the specified instruments; to get the list of instruments, use `GET /v2/audio/instruments`
  * moods `array`: Show tracks with each of the specified moods; to get the list of moods, use `GET /v2/audio/moods`
  * page `integer`: Page number
  * per_page `integer`: Number of results per page
  * query `string`: One or more search terms separated by spaces
  * sort `string` (values: score, ranking_all, artist, title, bpm, freshness, duration): Sort by
  * sort_order `string` (values: asc, desc): Sort order, asc or desc
  * vocal_description `string`: Show tracks with the specified vocal description (male, female)
  * view `string` (values: minimal, full): Amount of detail to render in the response
  * fields `string`: Fields to display in the response; see the documentation for the fields parameter in the overview section
  * library `string` (values: shutterstock, premier): Which library to search
  * language `string`: Which language to search in

#### Output
* output [AudioSearchResults](#audiosearchresults)

### getTrack
This endpoint shows information about a track, including its genres, instruments, and other attributes.


```js
shutterstock.getTrack({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Audio track ID
  * view `string` (values: minimal, full): Amount of detail to render in the response

#### Output
* output [Audio](#audio)

### getContributorList
This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.


```js
shutterstock.getContributorList({
  "id": []
}, context)
```

#### Input
* input `object`
  * id **required** `array`: One or more contributor IDs

#### Output
* output [ContributorProfileDataList](#contributorprofiledatalist)

### getContributor
This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.


```js
shutterstock.getContributor({
  "contributor_id": ""
}, context)
```

#### Input
* input `object`
  * contributor_id **required** `string`: Contributor ID

#### Output
* output [ContributorProfile](#contributorprofile)

### getContributorCollectionsList
This endpoint lists collections based on contributor ID.


```js
shutterstock.getContributorCollectionsList({
  "contributor_id": ""
}, context)
```

#### Input
* input `object`
  * contributor_id **required** `string`: Contributor ID
  * sort `string` (values: newest, last_updated, item_count): Sort order

#### Output
* output [CollectionDataList](#collectiondatalist)

### getContributorCollections
This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.


```js
shutterstock.getContributorCollections({
  "contributor_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * contributor_id **required** `string`: Contributor ID
  * id **required** `string`: Collection ID that belongs to the contributor

#### Output
* output [Collection](#collection)

### getContributorCollectionItems
This endpoint lists the IDs of items in a contributor's collection and the date that each was added.


```js
shutterstock.getContributorCollectionItems({
  "contributor_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * contributor_id **required** `string`: Contributor ID
  * id **required** `string`: Collection ID that belongs to the contributor
  * page `integer`: Page number
  * per_page `integer`: Number of results per page
  * sort `string` (values: newest, oldest): Sort order

#### Output
* output [CollectionItemDataList](#collectionitemdatalist)

### uploadImage
This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.


```js
shutterstock.uploadImage({
  "body": {
    "base64_image": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ImageCreateRequest](#imagecreaterequest)

#### Output
* output `object`: Computer vision image upload information
  * upload_id **required** `string`

### getSimilarImages
This endpoint returns images that are visually similar to an image that you specify or upload.


```js
shutterstock.getSimilarImages({
  "asset_id": ""
}, context)
```

#### Input
* input `object`
  * asset_id **required** `string`: The asset ID or upload ID to find similar videos for
  * language `string` (values: cs, da, de, en, es, fi, fr, hu, it, ja, ko, nb, nl, pl, pt, ru, sv, th, tr, zh, zh-Hant): Language for the keywords and categories in the response
  * page `integer`: Page number
  * per_page `integer`: Number of results per page, defaults to 20
  * view `string` (values: minimal, full): Amount of detail to render in the response

#### Output
* output [ImageSearchResults](#imagesearchresults)

### getSimilarVideos
This endpoint returns videos that are visually similar to an image that you specify or upload.


```js
shutterstock.getSimilarVideos({
  "asset_id": ""
}, context)
```

#### Input
* input `object`
  * asset_id **required** `string`: The asset ID or upload ID to find similar videos for
  * language `string` (values: cs, da, de, en, es, fi, fr, hu, it, ja, ko, nb, nl, pl, pt, ru, sv, th, tr, zh, zh-Hant): Language for the keywords and categories in the response
  * page `integer`: Page number
  * per_page `integer`: Number of results per page, defaults to 20
  * view `string` (values: minimal, full): Amount of detail to render in the response

#### Output
* output [VideoSearchResults](#videosearchresults)

### licenseEditorialImage
This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license.


```js
shutterstock.licenseEditorialImage({
  "body": {
    "country": "",
    "editorial": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [LicenseEditorialContentRequest](#licenseeditorialcontentrequest)

#### Output
* output [LicenseEditorialContentResultDataList](#licenseeditorialcontentresultdatalist)

### getEditorialLivefeedList
Get editorial livefeed list


```js
shutterstock.getEditorialLivefeedList({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`: Returns only livefeeds that are available for distribution in a certain country; specify with 3-letter ISO 3166-1 alpha-3 country code such as USA or DEU
  * page `integer`: Page number
  * per_page `integer`: Number of results per page, defaults to 20

#### Output
* output [EditorialLivefeedList](#editoriallivefeedlist)

### getEditorialLivefeed
Get editorial livefeed


```js
shutterstock.getEditorialLivefeed({
  "id": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Editorial livefeed ID; must be an URI encoded string
  * country **required** `string`: Returns only if the livefeed is available for distribution in a certain country; specify with 3-letter ISO 3166-1 alpha-3 country code such as USA or DEU

#### Output
* output [EditorialLivefeed](#editoriallivefeed)

### getEditorialLivefeedItems
Get editorial livefeed items


```js
shutterstock.getEditorialLivefeedItems({
  "id": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Editorial livefeed ID; must be an URI encoded string
  * country **required** `string`: Returns only if the livefeed items are available for distribution in a certain country; specify with 3-letter ISO 3166-1 alpha-3 country code such as USA or DEU

#### Output
* output [EditorialContentDataList](#editorialcontentdatalist)

### searchEditorial
This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.


```js
shutterstock.searchEditorial({
  "country": ""
}, context)
```

#### Input
* input `object`
  * query `string`: One or more search terms separated by spaces
  * sort `string` (values: relevant, newest, oldest): Sort by
  * category `string`: Show editorial content within a certain editorial category; specify by category name
  * country **required** `string`: Show only editorial content that is available for distribution in a certain country; specify with 3-letter ISO 3166-1 alpha-3 country code such as USA or DEU
  * supplier_code `array`: Show only editorial content from certain suppliers
  * date_start `string`: Show only editorial content generated on or after a specific date, in the format of YYYY-MM-DD
  * date_end `string`: Show only editorial content generated on or before a specific date, in the format of YYYY-MM-DD
  * per_page `integer`: Number of results per page, defaults to 20
  * cursor `string`: The cursor of the page with which to start fetching results; this cursor is returned from previous requests

#### Output
* output [EditorialSearchResults](#editorialsearchresults)

### getEditorialImage
This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.


```js
shutterstock.getEditorialImage({
  "id": "",
  "country": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Editorial ID
  * country **required** `string`: Returns only if the content is available for distribution in a certain country; specify with 3-letter ISO 3166-1 alpha-3 country code such as USA or DEU

#### Output
* output [EditorialContent](#editorialcontent)

### getImageList
This endpoint lists information about one or more images, including the available sizes.


```js
shutterstock.getImageList({
  "id": []
}, context)
```

#### Input
* input `object`
  * id **required** `array`: One or more image IDs
  * view `string` (values: minimal, full): Amount of detail to render in the response

#### Output
* output [ImageDataList](#imagedatalist)

### uploadEphemeralImage
Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.


```js
shutterstock.uploadEphemeralImage({
  "body": {
    "base64_image": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [ImageCreateRequest](#imagecreaterequest)

#### Output
* output [ImageCreateResponse](#imagecreateresponse)

### getImageCategories
This endpoint lists the categories (Shutterstock-assigned genres) that images can belong to.


```js
shutterstock.getImageCategories({}, context)
```

#### Input
* input `object`
  * language `string` (values: cs, da, de, en, es, fi, fr, hu, it, ja, ko, nb, nl, pl, pt, ru, sv, th, tr, zh, zh-Hant): Language for the keywords and categories in the response

#### Output
* output [CategoryDataList](#categorydatalist)

### getLightboxList
This endpoint lists your collections of images and their basic attributes.


```js
shutterstock.getLightboxList({}, context)
```

#### Input
* input `object`
  * embed `array`: Which sharing information to include in the response, such as a URL to the collection
  * page `integer`: Page number
  * per_page `integer`: Number of results per page, defaults to 100

#### Output
* output [CollectionDataList](#collectiondatalist)

### createLightbox
This endpoint creates one or more image collections (lightboxes). To add images to the collections, use `POST /v2/images/collections/{id}/items`.


```js
shutterstock.createLightbox({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CollectionCreateRequest](#collectioncreaterequest)

#### Output
*Output schema unknown*

### getFeaturedLightboxList
This endpoint lists featured collections of specific types and a name and cover image for each collection.


```js
shutterstock.getFeaturedLightboxList({}, context)
```

#### Input
* input `object`
  * embed `string` (values: share_url): Which sharing information to include in the response, such as a URL to the collection
  * type `array`: The types of collections to return
  * asset_hint `string` (values: 1x, 2x): Cover image size, defaults to 1x

#### Output
* output [FeaturedCollectionDataList](#featuredcollectiondatalist)

### getFeaturedLightbox
This endpoint gets more detailed information about a featured collection, including its cover image and timestamps for its creation and most recent update. To get the images, use `GET /v2/images/collections/featured/{id}/items`.


```js
shutterstock.getFeaturedLightbox({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID
  * embed `string` (values: share_url): Which sharing information to include in the response, such as a URL to the collection
  * asset_hint `string` (values: 1x, 2x): Cover image size, defaults to 1x

#### Output
* output [FeaturedCollection](#featuredcollection)

### getFeaturedLightboxItems
This endpoint lists the IDs of images in a featured collection and the date that each was added.


```js
shutterstock.getFeaturedLightboxItems({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID
  * page `integer`: Page number
  * per_page `integer`: Number of results per page, defaults to 100

#### Output
* output [CollectionItemDataList](#collectionitemdatalist)

### deleteLightbox
This endpoint deletes an image collection.


```js
shutterstock.deleteLightbox({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID

#### Output
*Output schema unknown*

### getLightbox
This endpoint gets more detailed information about a collection, including its cover image and timestamps for its creation and most recent update. To get the images in collections, use `GET /v2/images/collections/{id}/items`.


```js
shutterstock.getLightbox({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID
  * embed `array`: Which sharing information to include in the response, such as a URL to the collection
  * share_code `string`: Code to retrieve a shared collection

#### Output
* output [Collection](#collection)

### renameLightbox
This endpoint sets a new name for an image collection.


```js
shutterstock.renameLightbox({
  "id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID
  * body **required** [CollectionUpdateRequest](#collectionupdaterequest)

#### Output
*Output schema unknown*

### deleteLightboxItems
This endpoint removes one or more images from a collection.


```js
shutterstock.deleteLightboxItems({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID
  * item_id `array`: One or more image IDs to remove from the collection

#### Output
*Output schema unknown*

### getLightboxItems
This endpoint lists the IDs of images in a collection and the date that each was added.


```js
shutterstock.getLightboxItems({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID
  * share_code `string`: Code to retrieve the contents of a shared collection
  * page `integer`: Page number
  * per_page `integer`: Number of results per page, defaults to 100

#### Output
* output [CollectionItemDataList](#collectionitemdatalist)

### addLightboxItems
This endpoint adds one or more images to a collection by image IDs.


```js
shutterstock.addLightboxItems({
  "id": "",
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Collection ID
  * body **required** [CollectionItemRequest](#collectionitemrequest)

#### Output
*Output schema unknown*

### getImageLicenseList
This endpoint lists existing licenses. You can filter the results according to the type of license or the image ID.


```js
shutterstock.getImageLicenseList({}, context)
```

#### Input
* input `object`
  * image_id `string`: Show licenses for the specified image ID
  * license `string`: Show images that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
  * page `integer`: Page number
  * per_page `integer`: Number of results per page, defaults to 20
  * sort `string` (values: newest, oldest): Sort order

#### Output
* output [DownloadHistoryDataList](#downloadhistorydatalist)

### licenseImages
This endpoint gets licenses for one or more images. You must specify the image IDs in the body parameter and other details like the format, size, and subscription ID either in the query parameter or with each image ID in the body parameter. Values in the body parameter override values in the query parameters.


```js
shutterstock.licenseImages({
  "body": {
    "images": []
  }
}, context)
```

#### Input
* input `object`
  * subscription_id `string`: Subscription ID to use to license the image
  * format `string` (values: eps, jpg): Image format, defaults to jpg
  * size `string` (values: small, medium, huge, vector): Image size
  * search_id `string`: Search ID that was provided in the results of an image search
  * body **required** [LicenseImageRequest](#licenseimagerequest)

#### Output
* output [LicenseImageResultDataList](#licenseimageresultdatalist)

### downloadImage
This endpoint redownloads images that you have already received a license for.


```js
shutterstock.downloadImage({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: License ID
  * body **required** [RedownloadImage](#redownloadimage)

#### Output
* output [Url](#url)

### getImageRecommendations
This endpoint returns images that customers put in the same collection as the specified image IDs.


```js
shutterstock.getImageRecommendations({
  "id": []
}, context)
```

#### Input
* input `object`
  * id **required** `array`: Image IDs
  * max_items `integer`: Maximum number of results returned in the response
  * safe `boolean`: Restrict results to safe images

#### Output
* output [RecommendationDataList](#recommendationdatalist)

### searchImages
This endpoint searches for images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT. Free API accounts show results only from a limited library of media, not the full Shutterstock media library. Also, the number of search fields they can use in a request is limited.


```js
shutterstock.searchImages({}, context)
```

#### Input
* input `object`
  * added_date `string`: Show images added on the specified date, in the format YYYY-MM-DD
  * added_date_start `string`: Show images added on or after the specified date, in the format YYYY-MM-DD
  * added_date_end `string`: Show images added before the specified date, in the format YYYY-MM-DD
  * category `string`: Show images with the specified Shutterstock-defined category; specify a category name or ID
  * color `string`: Specify a hexadecimal color in the format '4F21EA'; the API groups it into one of 15 color categories and returns images that primarily use that color category
  * contributor `array`: Show images with the specified contributor names or IDs, allows multiple
  * contributor_country `array`: Show images from contributors in one or more specified countries by 2-letter ISO 3166-1 alpha-2 country code, such as DE or US
  * height `integer`: (Deprecated; use height_from and height_to instead) Show images with the specified height
  * height_from `integer`: Show images with the specified height or larger, in pixels
  * height_to `integer`: Show images with the specified height or smaller, in pixels
  * image_type `array`: Show images of the specified type
  * language `string` (values: cs, da, de, en, es, fi, fr, hu, it, ja, ko, nb, nl, pl, pt, ru, sv, th, tr, zh, zh-Hant): Set query and result language (uses Accept-Language header if not set)
  * license `array`: Show only images with the specified license
  * model `array`: Show image results with the specified model IDs
  * orientation `string` (values: horizontal, vertical): Show image results with horizontal or vertical orientation
  * page `integer`: Page number
  * per_page `integer`: Number of results per page, defaults to 20
  * people_model_released `boolean`: Show images of people with a signed model release
  * people_age `string` (values: infants, children, teenagers, 20s, 30s, 40s, 50s, 60s, older): Show images that feature people of the specified age category
  * people_ethnicity `string` (values: african, african_american, black, brazilian, chinese, caucasian, east_asian, hispanic, japanese, middle_eastern, native_american, pacific_islander, south_asian, southeast_asian, other): Show images with people of the specified ethnicity
  * people_gender `string` (values: male, female, both): Show images with people of the specified gender
  * people_number `integer`: Show images with the specified number of people
  * query `string`: One or more search terms separated by spaces; you can use NOT to filter out images that match a term
  * safe `boolean`: Enable or disable safe search
  * sort `string` (values: newest, popular, relevance, random): Sort by
  * spellcheck_query `boolean`: Spellcheck the search query and return results on suggested spellings
  * view `string` (values: minimal, full): Amount of detail to render in the response
  * width `integer`: (Deprecated; use width_from and width_to instead) Show images with the specified width
  * width_from `integer`: Show images with the specified width or larger, in pixels
  * width_to `integer`: Show images with the specified width or smaller, in pixels

#### Output
* output [ImageSearchResults](#imagesearchresults)

### getUpdatedImages
This endpoint lists images that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show images that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.


```js
shutterstock.getUpdatedImages({}, context)
```

#### Input
* input `object`
  * type `array` (values: addition, deletion, edit): Show images that were added, deleted, or edited; by default, the endpoint returns images that were updated in any of these ways
  * start_date `string`: Show images updated on or after the specified date, in the format YYYY-MM-DD
  * end_date `string`: Show images updated before the specified date, in the format YYYY-MM-DD
  * interval `string`: Show images updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows images that were updated in the hour preceding the request
  * page `integer`: Page number
  * per_page `integer`: Number of results per page, defaults to 100
  * sort `string` (values: newest, oldest): Sort order

#### Output
* output [UpdatedMediaDataList](#updatedmediadatalist)

### getImage
This endpoint shows information about an image, including a URL to a preview image and the sizes that it is available in.


```js
shutterstock.getImage({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Image ID
  * language `string` (values: cs, da, de, en, es, fi, fr, hu, it, ja, ko, nb, nl, pl, pt, ru, sv, th, tr, zh, zh-Hant): Language for the keywords and categories in the response
  * view `string` (values: minimal, full): Amount of detail to render in the response

#### Output
* output [Image](#image)

### getSimilarImages
This endpoint returns images that are visually similar to an image that you specify.


```js
shutterstock.getSimilarImages({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Image ID
  * language `string` (values: cs, da, de, en, es, fi, fr, hu, it, ja, ko, nb, nl, pl, pt, ru, sv, th, tr, zh, zh-Hant): Language for the keywords and categories in the response
  * page `integer`: Page number
  * per_page `integer`: Number of results per page, defaults to 20
  * view `string` (values: minimal, full): Amount of detail to render in the response

#### Output
* output [ImageSearchResults](#imagesearchresults)

### createAccessToken
This endpoint returns an access token for the specified user and with the specified scopes. The token does not expire until the user changes their password. The body parameters must be encoded as form data.


```js
shutterstock.createAccessToken({}, context)
```

#### Input
* input `object`
  * body `object`
    * client_id **required** `string`: Client ID (Consumer Key) of your application
    * client_secret `string`: Client Secret (Consumer Secret) of your application
    * code `string`: Response code from the /oauth/authorize flow; required if grant_type=authorization_code
    * expires `boolean`: Whether or not the token expires, expiring tokens come with a refresh_token to renew the access_token
    * grant_type **required** `string` (values: authorization_code, client_credentials, refresh_token): Grant type: authorization_code generates user tokens, client_credentials generates short-lived client grants
    * realm `string` (values: customer, contributor): User type to be authorized (usually 'customer')

#### Output
* output [OauthAccessTokenResponse](#oauthaccesstokenresponse)

### authorize
This endpoint returns a redirect URI (in the 'Location' header) that the customer uses to authorize your application and, together with POST /v2/oauth/access_token, generate an access token that represents that authorization.


```js
shutterstock.authorize({
  "client_id": "",
  "redirect_uri": "",
  "response_type": "",
  "state": ""
}, context)
```

#### Input
* input `object`
  * client_id **required** `string`: Client ID (Consumer Key) of your application
  * realm `string` (values: customer, contributor): User type to be authorized (usually 'customer')
  * redirect_uri **required** `string`: The callback URI to send the request to after authorization; must use a host name that is registered with your application
  * response_type **required** `string` (values: code): Type of temporary authorization code that will be used to generate an access code; the only valid value is 'code'
  * scope `string`: Space-separated list of scopes to be authorized
  * state **required** `string`: Unique value used by the calling app to verify the request

#### Output
*Output schema unknown*

### echo
Echo text


```js
shutterstock.echo({}, context)
```

#### Input
* input `object`
  * text `string`: Text to echo

#### Output
* output [TestEcho](#testecho)

### validate
Validate input


```js
shutterstock.validate({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Integer ID
  * tag `array`: List of tags
  * user-agent `string`: User agent

#### Output
* output [TestValidate](#testvalidate)

### getUser
Get user details


```js
shutterstock.getUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserDetails](#userdetails)

### getAccessToken
Get access token details


```js
shutterstock.getAccessToken(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AccessTokenDetails](#accesstokendetails)

### getUserSubsciptionList
List user subscriptions


```js
shutterstock.getUserSubsciptionList(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SubscriptionDataList](#subscriptiondatalist)

### getVideoList
This endpoint lists information about one or more videos, including the aspect ratio and URLs to previews.


```js
shutterstock.getVideoList({
  "id": []
}, context)
```

#### Input
* input `object`
  * id **required** `array`: One or more video IDs
  * view `string` (values: minimal, full): Amount of detail to render in the response

#### Output
* output [VideoDataList](#videodatalist)

### getVideoCategories
This endpoint lists the categories (Shutterstock-assigned genres) that videos can belong to.


```js
shutterstock.getVideoCategories({}, context)
```

#### Input
* input `object`
  * language `string` (values: cs, da, de, en, es, fi, fr, hu, it, ja, ko, nb, nl, pl, pt, ru, sv, th, tr, zh, zh-Hant): Language for the keywords and categories in the response

#### Output
* output [CategoryDataList](#categorydatalist)

### getClipboxList
This endpoint lists your collections of videos and their basic attributes.


```js
shutterstock.getClipboxList({}, context)
```

#### Input
* input `object`
  * page `integer`: Page number
  * per_page `integer`: Number of results per page

#### Output
* output [CollectionDataList](#collectiondatalist)

### createClipbox
This endpoint creates one or more collections (clipboxes). To add videos to collections, use `POST /v2/videos/collections/{id}/items`.


```js
shutterstock.createClipbox({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [CollectionCreateRequest](#collectioncreaterequest)

#### Output
* output [CollectionCreateResponse](#collectioncreateresponse)

### deleteClipbox
This endpoint deletes a collection.


```js
shutterstock.deleteClipbox({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the collection to delete

#### Output
*Output schema unknown*

### getClipbox
This endpoint gets more detailed information about a collection, including the timestamp for its creation and the number of videos in it. To get the videos in collections, use GET /v2/videos/collections/{id}/items.


```js
shutterstock.getClipbox({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the collection to return

#### Output
* output [Collection](#collection)

### renameClipbox
This endpoint sets a new name for a collection.


```js
shutterstock.renameClipbox({
  "id": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the collection to rename
  * body **required** [CollectionUpdateRequest](#collectionupdaterequest)

#### Output
*Output schema unknown*

### deleteClipboxItems
This endpoint removes one or more videos from a collection.


```js
shutterstock.deleteClipboxItems({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the Collection from which items will be deleted
  * item_id `array`: One or more video IDs to remove from the collection

#### Output
*Output schema unknown*

### getClipboxItems
This endpoint lists the IDs of videos in a collection and the date that each was added.


```js
shutterstock.getClipboxItems({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the Collection whose items are to be returned
  * page `integer`: Page number
  * per_page `integer`: Number of results per page
  * sort `string` (values: newest, oldest): Sort order

#### Output
* output [CollectionItemDataList](#collectionitemdatalist)

### addClipboxItems
This endpoint adds one or more videos to a collection by video IDs.


```js
shutterstock.addClipboxItems({
  "id": "",
  "body": {
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the collection to which items should be added
  * body **required** [CollectionItemRequest](#collectionitemrequest)

#### Output
*Output schema unknown*

### getVideoLicenseList
This endpoint lists existing licenses. You can filter the results according to the type of license or the video ID.


```js
shutterstock.getVideoLicenseList({}, context)
```

#### Input
* input `object`
  * video_id `string`: Show licenses for the specified video ID
  * license `string`: Show videos that are available with the specified license, such as `standard` or `enhanced`; prepending a `-` sign excludes results from that license
  * page `integer`: Page number
  * per_page `integer`: Number of results per page
  * sort `string` (values: newest, oldest): Sort by oldest or newest videos first

#### Output
* output [DownloadHistoryDataList](#downloadhistorydatalist)

### licenseVideos
This endpoint gets licenses for one or more videos. You must specify the video IDs in the body parameter and the size and subscription ID either in the query parameter or with each video ID in the body parameter. Values in the body parameter override values in the query parameters.


```js
shutterstock.licenseVideos({
  "body": {
    "videos": []
  }
}, context)
```

#### Input
* input `object`
  * subscription_id `string`: The subscription ID to use for licensing
  * size `string` (values: web, sd, hd, 4k): The size of the video to license
  * search_id `string`: The Search ID that led to this licensing event
  * body **required** [LicenseVideoRequest](#licensevideorequest)

#### Output
* output [LicenseVideoResultDataList](#licensevideoresultdatalist)

### downloadVideos
This endpoint redownloads videos that you have already received a license for.


```js
shutterstock.downloadVideos({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The license ID of the item to (re)download
  * body **required** [RedownloadVideo](#redownloadvideo)

#### Output
* output [Url](#url)

### searchVideos
This endpoint searches for videos. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the `query` parameter by prefixing the term with NOT.


```js
shutterstock.searchVideos({}, context)
```

#### Input
* input `object`
  * added_date `string`: Show videos added on the specified date, in the format YYYY-MM-DD
  * added_date_start `string`: Show videos added on or after the specified date, in the format YYYY-MM-DD
  * added_date_end `string`: Show videos added before the specified date, in the format YYYY-MM-DD
  * aspect_ratio `string` (values: 43, 169, nonstandard): Show videos with the specified aspect ratio
  * category `string`: Show videos with the specified Shutterstock-defined category; specify a category name or ID
  * contributor `array`: Show videos with the specified artist names or IDs
  * contributor_country `array`: Show videos from contributors in one or more specified countries by 2-letter ISO 3166-1 alpha-2 country code, such as DE or US
  * duration `integer`: (Deprecated; use duration_from and duration_to instead) Show videos with the specified duration (seconds)
  * duration_from `integer`: Show videos with the specified duration or longer (seconds)
  * duration_to `integer`: Show videos with the specified duration or shorter (seconds)
  * fps `number`: (Deprecated; use fps_from and fps_to instead) Show videos with the specified frames per second
  * fps_from `number`: Show videos with the specified frames per second or more
  * fps_to `number`: Show videos with the specified frames per second or fewer
  * language `string` (values: cs, da, de, en, es, fi, fr, hu, it, ja, ko, nb, nl, pl, pt, ru, sv, th, tr, zh, zh-Hant): Set query and result language (uses Accept-Language header if not set)
  * license `array`: Show only videos with the specified license or licenses
  * model `array`: Show videos with each of the specified models
  * page `integer`: Page number
  * per_page `integer`: Number of results per page
  * people_age `string` (values: infants, children, teenagers, 20s, 30s, 40s, 50s, 60s, older): Show videos that feature people of the specified age range
  * people_ethnicity `string` (values: african, african_american, black, brazilian, chinese, caucasian, east_asian, hispanic, japanese, middle_eastern, native_american, pacific_islander, south_asian, southeast_asian, other): Show videos with people of the specified ethnicity
  * people_gender `string` (values: male, female, both): Show videos with people with the specified gender
  * people_number `integer`: Show videos with the specified number of people
  * people_model_released `boolean`: Show only videos of people with a signed model release
  * query `string`: One or more search terms separated by spaces; you can use NOT to filter out videos that match a term
  * resolution `string` (values: 4k, standard_definition, high_definition): Show videos with the specified resolution
  * safe `boolean`: Enable or disable safe search
  * sort `string` (values: newest, popular, relevance, random): Sort by one of these categories
  * view `string` (values: minimal, full): Amount of detail to render in the response

#### Output
* output [VideoSearchResults](#videosearchresults)

### getUpdatedVideos
This endpoint lists videos that have been updated in the specified time period to update content management systems (CMS) or digital asset management (DAM) systems. In most cases, use the `interval` parameter to show videos that were updated recently, but you can also use the `start_date` and `end_date` parameters to specify a range of no more than three days. Do not use the `interval` parameter with either `start_date` or `end_date`.


```js
shutterstock.getUpdatedVideos({}, context)
```

#### Input
* input `object`
  * start_date `string`: Show videos updated on or after the specified date, in the format YYYY-MM-DD
  * end_date `string`: Show videos updated before the specified date, in the format YYYY-MM-DD
  * interval `string`: Show videos updated in the specified time period, where the time period is an interval (like SQL INTERVAL) such as 1 DAY, 6 HOUR, or 30 MINUTE; the default is 1 HOUR, which shows videos that were updated in the hour preceding the request
  * page `integer`: Page number
  * per_page `integer`: Number of results per page
  * sort `string` (values: newest, oldest): Sort by oldest or newest videos first

#### Output
* output [UpdatedMediaDataList](#updatedmediadatalist)

### getVideo
This endpoint shows information about a video, including URLs to previews and the sizes that it is available in.


```js
shutterstock.getVideo({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Video ID
  * language `string` (values: cs, da, de, en, es, fi, fr, hu, it, ja, ko, nb, nl, pl, pt, ru, sv, th, tr, zh, zh-Hant): Language for the keywords and categories in the response
  * view `string` (values: minimal, full): Amount of detail to render in the response

#### Output
* output [Video](#video)

### getSimilarVideos
This endpoint searches for videos that are similar to a video that you specify.


```js
shutterstock.getSimilarVideos({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of a video for which similar videos should be returned
  * language `string` (values: cs, da, de, en, es, fi, fr, hu, it, ja, ko, nb, nl, pl, pt, ru, sv, th, tr, zh, zh-Hant): Language for the keywords and categories in the response
  * page `integer`: Page number
  * per_page `integer`: Number of results per page
  * view `string` (values: minimal, full): Amount of detail to render in the response

#### Output
* output [VideoSearchResults](#videosearchresults)



## Definitions

### AccessTokenDetails
* AccessTokenDetails `object`: Access token details that are currently associated with this user
  * client_id `string`: Client ID that is associated with the user
  * contributor_id `string`: Contributor ID that is associated with the user
  * customer_id `string`: Customer ID that is associated with the user
  * expires_in `integer`: Number of seconds until the access token expires; no expiration if this value is null
  * organization_id `string`: Organization ID that is associated with the user
  * realm `string` (values: customer, contributor): Type of access token
  * scopes `array`: Scopes that this access token provides when used as authentication
    * items `string`
  * user_id `string`: User ID that is associated with the user
  * username `string`: User name that is associated with the user

### Album
* Album `object`: Album metadata
  * id **required** `string`: The album ID
  * title **required** `string`: The album title

### Allotment
* Allotment `object`: Allotment
  * downloads_left `integer`: Number of licenses remaining in the subscription
  * downloads_limit `integer`: Total number of licenses available to this subscription
  * end_time `string`: Date the subscription ends, in the format YYYY-MM-ddTHH:mm:ssZ
  * start_time `string`: Date the subscription started, in the format YYYY-MM-ddTHH:mm:ssZ

### Artist
* Artist `object`: Artist metadata
  * name **required** `string`: The artist's name

### Audio
* Audio `object`: Audio metadata
  * added_date `string`: Date this track was added to the Shutterstock library, in the format: YYYY-MM-DD
  * affiliate_url `string`: Affiliate referral link; appears only for registered affiliate partners
  * album [Album](#album)
  * artists `array`: List of artists
    * items [Artist](#artist)
  * assets [AudioAssets](#audioassets)
  * bpm `integer`: BPM (beats per minute) of this track
  * contributor **required** [Contributor](#contributor)
  * deleted_time `string`
  * description `string`: Description of this track
  * duration `integer`: Duration of this track in seconds
  * genres `array`: List of all genres for this track
    * items `string`: Genre that is associated with this track
  * id **required** `string`: Shutterstock ID of this track
  * instruments `array`: List of all instruments that appear in this track
    * items `string`: Instrument that appears in this track
  * is_adult `boolean`: Whether or not this track contains adult content
  * is_instrumental `boolean`: Whether or not this track is purely instrumental (lacking lyrics)
  * isrc `string`
  * keywords `array`: List of all keywords for this track
    * items `string`: Keyword for this track
  * language `string`: Language of this track's lyrics
  * lyrics `string`: Lyrics of this track
  * media_type **required** `string`: Media type of this track; should always be "audio"
  * model_releases `array`: List of all model releases for this track
    * items [ModelRelease](#modelrelease)
  * moods `array`: List of all moods of this track
    * items `string`: Mood of this track
  * published_time `string`: Time this track was published, in the format YYYY-MM-DDThh:mm:ssZ
  * recording_version `string`: Recording version of this track
  * releases `array`: List of all releases of this track
    * items `string`: Release of this track
  * similar_artists `array`: List of all similar artists of this track
    * items [Artist](#artist)
  * submitted_time `string`: Time this track was submitted, in the format YYYY-MM-DDThh:mm:ssZ
  * title `string`: Title of this track
  * updated_time `string`: Time this track was last updated, in the format YYYY-MM-DDThh:mm:ssZ
  * url `string`: Link to track information page; included only for certain accounts
  * vocal_description `string`: Vocal description of this track

### AudioAssetDetails
* AudioAssetDetails `object`: Audio asset metadata
  * file_size `integer`: File size of the track
  * url `string`: URL the track is available at

### AudioAssets
* AudioAssets `object`: Audio assets
  * album_art [AudioAssetDetails](#audioassetdetails)
  * clean_audio [AudioAssetDetails](#audioassetdetails)
  * original_audio [AudioAssetDetails](#audioassetdetails)
  * preview_mp3 [AudioAssetDetails](#audioassetdetails)
  * preview_ogg [AudioAssetDetails](#audioassetdetails)
  * waveform [AudioAssetDetails](#audioassetdetails)

### AudioDataList
* AudioDataList `object`: List of tracks
  * data `array`: Tracks
    * items [Audio](#audio)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: Current page that is returned
  * per_page `integer`: Number of results per page
  * total_count `integer`: Total count of all results across all pages

### AudioSearchResults
* AudioSearchResults `object`: Audio search results
  * data **required** `array`: List of tracks
    * items [Audio](#audio)
  * message `string`: Server-generated message, if any
  * page `integer`: Current page that is returned
  * per_page `integer`: Number of results per page
  * search_id **required** `string`: ID of the search
  * total_count **required** `integer`: Total count of all results across all pages

### AuthorizeResponse
* AuthorizeResponse `object`: Response to Authorize requests
  * body **required** `string`: HTML redirect URL that contains the application authorization 'code'

### Category
* Category `object`: Category information
  * id `string`: Category ID
  * name `string`: Category name

### CategoryDataList
* CategoryDataList `object`: List of categories
  * data `array`: Categories
    * items [Category](#category)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: The current page of results
  * per_page `integer`: The number of results per page
  * total_count `integer`: The total number of results across all pages

### Collection
* Collection `object`: Collection metadata
  * cover_item [CollectionItem](#collectionitem)
  * created_time `string`: When the collection was created
  * id **required** `string`: The collection ID
  * items_updated_time `string`: The last time this collection's items were updated
  * name **required** `string`: The name of the collection
  * share_code `string`: A code that can be used to share the collection (optional)
  * share_url `string`: The browser URL that can be used to share the collection (optional)
  * total_item_count **required** `integer`: The number of items in the collection
  * updated_time `string`: The last time the collection was update (other than changes to the items in it)

### CollectionCreateRequest
* CollectionCreateRequest `object`: Collection creation request
  * name **required** `string`: The name of the collection

### CollectionCreateResponse
* CollectionCreateResponse `object`: Create collection response
  * id **required** `string`: ID of the new collection

### CollectionDataList
* CollectionDataList `object`: List of collections
  * data `array`: Collections
    * items [Collection](#collection)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: The current page of results
  * per_page `integer`: The number of results per page
  * total_count `integer`: The total number of results across all pages

### CollectionItem
* CollectionItem `object`: Collection item metadata
  * added_time `string`: The date the item was added to the collection
  * id **required** `string`: ID of the item
  * media_type `string`: The media type of the item, such as image, video, or audio

### CollectionItemDataList
* CollectionItemDataList `object`: List of collections
  * data `array`: Collections
    * items [CollectionItem](#collectionitem)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: The current page of results
  * per_page `integer`: The number of results per page
  * total_count `integer`: The total number of results across all pages

### CollectionItemRequest
* CollectionItemRequest `object`: Request to get the list of collection items
  * items **required** `array`: List of items
    * items [CollectionItem](#collectionitem)

### CollectionUpdateRequest
* CollectionUpdateRequest `object`: Collection update request
  * name **required** `string`: The new name of the collection

### Contributor
* Contributor `object`: Contributor
  * id **required** `string`: ID of the contributor

### ContributorProfile
* ContributorProfile `object`: Contributor profile
  * about `string`: Short description of the contributors' library
  * contributor_type `array`: Type of content that the contributor specializes in (photographer, illustrator, etc)
    * items `string`
  * display_name `string`: Preferred name to be displayed for the contributor
  * equipment `array`: List of equipment used by the contributor (Canon EOS 5D Mark II, etc)
    * items `string`
  * id **required** `string`: Contributor ID
  * location `string`: 2-letter ISO 3166-1 alpha-2 country code representing the contributors' locale, such as DE or US
  * portfolio_url `string`: Web URL for the contributors' profile
  * social_media [ContributorProfileSocialMedia](#contributorprofilesocialmedia)
  * styles `array`: List of styles that the contributor specializes in (lifestyle, mixed media, etc)
    * items `string`
  * subjects `array`: Generic list of subjects for contributors' work (food_and_drink, holiday, people, etc)
    * items `string`
  * website `string`: Personal website for the contributor

### ContributorProfileDataList
* ContributorProfileDataList `object`: List of contributor profiles
  * data `array`: Conributor profiles
    * items [ContributorProfile](#contributorprofile)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Error message
  * page `integer`: Page of response
  * per_page `integer`: Number of contributors per page
  * total_count `integer`: Total count of contributors for this request

### ContributorProfileSocialMedia
* ContributorProfileSocialMedia `object`: Contributor profile on social media
  * facebook `string`: Facebook link for contributor
  * google_plus `string`: Google+ link for contributor
  * linkedin `string`: LinkedIn link for contributor
  * pinterest `string`: Pinterest page for contributor
  * tumblr `string`: Tumblr link for contributor
  * twitter `string`: Twitter link for contributor

### Cookie
* Cookie `object`: Cookie object
  * name **required** `string`: The name of the cookie
  * value **required** `string`: The value of the cookie

### DownloadHistory
* DownloadHistory `object`: Information about a downloaded media item. Applicable for all media types, only one of 'audio', 'image' or 'video' will be in a single DownloadHistory object
  * audio [DownloadHistoryMediaDetails](#downloadhistorymediadetails)
  * download_time **required** `string`: Date the media was downloaded the first time, in the format YYYY-MM-DDThh:mm:ssZ
  * id **required** `string`: ID of the download
  * image [DownloadHistoryMediaDetails](#downloadhistorymediadetails)
  * is_downloadable `boolean`: Specifies if the media is downloadable via its respective downloads endpoint
  * license **required** `string`: The name of the license of this download
  * metadata `object`: The metadata that was passed in the original licensing request
  * subscription_id `string`: ID of the subscription used to perform this download
  * user [DownloadHistoryUserDetails](#downloadhistoryuserdetails)
  * video [DownloadHistoryMediaDetails](#downloadhistorymediadetails)

### DownloadHistoryDataList
* DownloadHistoryDataList `object`: List of download events
  * data `array`: Download events
    * items [DownloadHistory](#downloadhistory)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: The current page of results
  * per_page `integer`: The number of results per page
  * total_count `integer`: The total number of results across all pages

### DownloadHistoryFormatDetails
* DownloadHistoryFormatDetails `object`: Information about the format of the download
  * format `string`: The format of the downloaded media
  * size `string`: The size of the downloaded media

### DownloadHistoryMediaDetails
* DownloadHistoryMediaDetails `object`: Information about the downloaded media
  * format [DownloadHistoryFormatDetails](#downloadhistoryformatdetails)
  * id **required** `string`: ID of the download history media details

### DownloadHistoryUserDetails
* DownloadHistoryUserDetails `object`: Information about a user
  * username **required** `string`: The name of the user who downloaded the item

### EditorialAssets
* EditorialAssets `object`: Asset information, including size and thumbnail URLs
  * medium_jpg [ImageSizeDetails](#imagesizedetails)
  * original [ImageSizeDetails](#imagesizedetails)
  * small_jpg [ImageSizeDetails](#imagesizedetails)
  * thumb_170 [Thumbnail](#thumbnail)
  * thumb_220 [Thumbnail](#thumbnail)
  * watermark_1500 [Thumbnail](#thumbnail)
  * watermark_450 [Thumbnail](#thumbnail)

### EditorialCategory
* EditorialCategory `object`: Editorial category names
  * name `string`

### EditorialContent
* EditorialContent `object`: Metadata about editorial content
  * aspect `number`
  * assets [EditorialAssets](#editorialassets)
  * byline `string`
  * caption `string`
  * categories `array`: List of categories
    * items [EditorialCategory](#editorialcategory)
  * date_taken `string`
  * description `string`
  * id **required** `string`
  * keywords `array`
    * items `string`
  * title `string`

### EditorialContentDataList
* EditorialContentDataList `object`: List of editorial items
  * data `array`: Editorial items
    * items [EditorialContent](#editorialcontent)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Optional error message
  * page `integer`: Current page of the response
  * per_page `integer`: Number of results per page
  * total_count `integer`: Total count of all results

### EditorialCoverItem
* EditorialCoverItem `object`: Cover image for editorial livefeed
  * height `integer`
  * id **required** `string`
  * url **required** `string`
  * width `integer`

### EditorialLivefeed
* EditorialLivefeed `object`: Metadata about editorial livefeed
  * cover_item [EditorialCoverItem](#editorialcoveritem)
  * created_time `string`: When the livefeed was initially created
  * id **required** `string`: Livefeed ID
  * name **required** `string`: Name of the livefeed
  * total_item_count **required** `integer`: Total count of items in the livefeed

### EditorialLivefeedList
* EditorialLivefeedList `object`: List of editorial livefeeds
  * data **required** `array`: Editorial livefeeds
    * items [EditorialLivefeed](#editoriallivefeed)
  * message `string`: Optional error message
  * page `integer`: Current page of the response
  * per_page `integer`: Number of results per page
  * total_count **required** `integer`: Total count of all results

### EditorialSearchResults
* EditorialSearchResults `object`: Editorial search results
  * data **required** `array`: Editorial items
    * items [EditorialContent](#editorialcontent)
  * message `string`: Optional error message
  * next `string`: Cursor value that represents the next page of results
  * page `integer`: Current page of the response
  * per_page `integer`: Number of results per page
  * prev `string`: Cursor value that represents the previous page of results
  * search_id `string`: Unique identifier for the search request
  * total_count **required** `integer`: Total count of all results

### Error
* Error `object`: Error object
  * code `string`: The error code of this error
  * data `string`: Debugging information about the error
  * items `array`: A list of items that produced the error
    * items `object`
  * message **required** `string`: Specific details about this error
  * path `string`: Internal code reference to the source of the error

### FeaturedCollection
* FeaturedCollection `object`: Featured collection metadata
  * cover_item [FeaturedCollectionCoverItem](#featuredcollectioncoveritem)
  * created_time `string`: Date that the collection was created, format in YYYY-MM-DDThh:mm:ssT
  * hero_item [FeaturedCollectionCoverItem](#featuredcollectioncoveritem)
  * id **required** `string`: Collection ID
  * items_updated_time `string`: Date that an item in the collection was last added or removed, in the format YYYY-MM-DDThh:mm:ssZ
  * name **required** `string`: Name of the collection
  * share_url `string`: Unique share url for the collection
  * total_item_count **required** `integer`: Total number of items in the collection
  * updated_time `string`: Date that the collection was last modified, in the format YYYY-MM-DDThh:mm:ssZ

### FeaturedCollectionCoverItem
* FeaturedCollectionCoverItem `object`: Featured collection cover item metadata
  * url **required** `string`: URL of the collection cover item

### FeaturedCollectionDataList
* FeaturedCollectionDataList `object`: List of featured collections
  * data `array`: Featured collections
    * items [FeaturedCollection](#featuredcollection)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: Current page that is returned
  * per_page `integer`: Number of results per page
  * total_count `integer`: Total count of all results across all pages

### GenreList
* GenreList `object`: List of genres
  * data **required** `array`: List of genres
    * items `string`

### Image
* Image `object`: Information about an image
  * added_date `string`: Date that the image was added by the contributor, in the format YYYY-MM-DD
  * affiliate_url `string`: Affiliate referral link; appears only for registered affiliate partners
  * aspect `number`: Aspect ratio of the image
  * assets [ImageAssets](#imageassets)
  * categories `array`: Categories that this image is a part of
    * items [Category](#category)
  * contributor **required** [Contributor](#contributor)
  * description `string`: Detailed description of the image
  * has_model_release `boolean`: Indicates whether there are model releases for the image
  * has_property_release `boolean`: Indicates whether there are property releases for the image
  * id **required** `string`: Image ID
  * image_type `string`: Type of image
  * is_adult `boolean`: Whether or not this image contains adult content
  * is_editorial `boolean`: Whether or not this image is editorial content
  * is_illustration `boolean`: Whether or not this image is an illustration
  * keywords `array`: Keywords associated with the content of this image
    * items `string`
  * media_type **required** `string`: Media type of this image, should always be "image"
  * model_releases `array`: List of model releases
    * items [ModelRelease](#modelrelease)
  * models `array`: List of models
    * items [Model](#model)
  * releases `array`: List of all releases of this image
    * items `string`
  * url `string`: Link to image information page; included only for certain accounts

### ImageAssets
* ImageAssets `object`: Image asset information
  * huge_jpg [ImageSizeDetails](#imagesizedetails)
  * huge_tiff [ImageSizeDetails](#imagesizedetails)
  * large_thumb [Thumbnail](#thumbnail)
  * medium_jpg [ImageSizeDetails](#imagesizedetails)
  * preview [Thumbnail](#thumbnail)
  * preview_1000 [Thumbnail](#thumbnail)
  * preview_1500 [Thumbnail](#thumbnail)
  * small_jpg [ImageSizeDetails](#imagesizedetails)
  * small_thumb [Thumbnail](#thumbnail)
  * supersize_jpg [ImageSizeDetails](#imagesizedetails)
  * supersize_tiff [ImageSizeDetails](#imagesizedetails)
  * vector_eps [ImageSizeDetails](#imagesizedetails)

### ImageCreateRequest
* ImageCreateRequest `object`: Image data for upload
  * base64_image **required** `string`: A Base64 encoded jpeg or png

### ImageCreateResponse
* ImageCreateResponse `object`: Image upload information
  * id **required** `string`

### ImageDataList
* ImageDataList `object`: List of images
  * data `array`: Images
    * items [Image](#image)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: Current page that is returned
  * per_page `integer`: Number of results per page
  * total_count `integer`: Total count of all results across all pages

### ImageSearchResults
* ImageSearchResults `object`: Image search results
  * data **required** `array`: List of images
    * items [Image](#image)
  * message `string`: Server-generated message, if any
  * page `integer`: Current page that is returned
  * per_page `integer`: Number of results per page
  * search_id **required** `string`: Unique identifier for the search request
  * spellcheck_info `object`: Returns information if search phrase has potentially been mistyped or another query would lead to better search results
  * total_count **required** `integer`: Total count of all results across all pages

### ImageSizeDetails
* ImageSizeDetails `object`: Image size information
  * display_name `string`: Display name of this image size
  * dpi `integer`
  * file_size `integer`: File size (in bytes) of this image size
  * format `string`: Format of this image size
  * height `integer`: Height of this image size
  * is_licensable `boolean`: Whether or not this image can be licensed in this image size
  * width `integer`: Width of this image size

### InstrumentList
* InstrumentList `object`: List of instruments
  * data **required** `array`: List of instruments
    * items `string`

### Language
* language `string` (values: cs, da, de, en, es, fi, fr, hu, it, ja, ko, nb, nl, pl, pt, ru, sv, th, tr, zh, zh-Hant): Language code

### LicenseAudio
* LicenseAudio `object`: An audio licensing item
  * audio_id **required** `string`: ID of the track being licensed
  * license `string` (values: audio_standard, audio_enhanced, audio_platform, premier_music_basic, premier_music_extended, premier_music_pro, premier_music_comp): Type of license
  * search_id `string`: ID of the search that led to this licensing event

### LicenseAudioRequest
* LicenseAudioRequest `object`: License audio tracks
  * audio **required** `array`: List of audio tracks to license
    * items [LicenseAudio](#licenseaudio)

### LicenseAudioResult
* LicenseAudioResult `object`: The response to a licensing request for an audio track
  * audio_id **required** `string`: ID of the track that was licensed
  * download [Url](#url)
  * error `string`: Error information if applicable

### LicenseAudioResultDataList
* LicenseAudioResultDataList `object`: List of audio license results
  * data `array`: License results
    * items [LicenseAudioResult](#licenseaudioresult)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: Current page that is returned
  * per_page `integer`: Number of results per page
  * total_count `integer`: Total count of all results across all pages

### LicenseEditorialContent
* LicenseEditorialContent `object`: Individual editorial content to license
  * editorial_id **required** `string`: Editorial ID
  * license **required** `string`: License agreement to use for licensing
  * metadata [LicenseRequestMetadata](#licenserequestmetadata)
  * size `string` (values: small, medium, original): Asset size to download, default is original

### LicenseEditorialContentRequest
* LicenseEditorialContentRequest `object`: License editorial content request
  * country **required** `string`: 3-letter ISO 3166-1 alpha-3 country code for where the editorial content will be distributed; this mandatory value is used for rights checks
  * editorial **required** `array`: Editorial content to license
    * items [LicenseEditorialContent](#licenseeditorialcontent)

### LicenseEditorialContentResult
* LicenseEditorialContentResult `object`: The response to a licensing request for editorial content
  * allotment_charge `integer`: For pre-paid plans, how many allotments were used for the item license
  * download [Url](#url)
  * editorial_id **required** `string`: Editorial ID
  * error `string`

### LicenseEditorialContentResultDataList
* LicenseEditorialContentResultDataList `object`: List of editorial license results
  * data `array`: License results
    * items [LicenseEditorialContentResult](#licenseeditorialcontentresult)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Optional error message
  * page `integer`: Current page of the response
  * per_page `integer`: Number of results per page
  * total_count `integer`: Total count of all results

### LicenseFormat
* LicenseFormat `object`: A description of a license
  * description `string`: Description of the license
  * format `string`: Format or extension of the media, such as mpeg for videos or jpeg for images
  * media_type `string` (values: image, video, audio, editorial): Media type of the license
  * min_resolution `integer`: Width of the media, in pixels, allowed by this license
  * size `string`: Keyword that details the size of the media, such as hd or sd for video, huge or vector for images

### LicenseImage
* LicenseImage `object`: Data required to license an image
  * auth_cookie [Cookie](#cookie)
  * editorial_acknowledgement `boolean`: Set to true to acknowledge the editorial agreement
  * format `string` (values: jpg, eps): Image format to download
  * image_id **required** `string`: Image ID
  * metadata [LicenseRequestMetadata](#licenserequestmetadata)
  * price `number`: For revenue-sharing transactions, the final cost to the end customer
  * search_id `string`: ID of the search that led to this licensing transaction
  * show_modal `boolean`: (Deprecated)
  * size `string` (values: small, medium, huge, vector): Image size to download
  * subscription_id `string`: ID of the subscription to use for the download.
  * verification_code `string`: (Deprecated)

### LicenseImageRequest
* LicenseImageRequest `object`: Image license request data
  * images **required** `array`: Images to create licenses for
    * items [LicenseImage](#licenseimage)

### LicenseImageResult
* LicenseImageResult `object`: The response to a licensing request for an image
  * allotment_charge `integer`: Number of allotments that this licensing event used
  * download [Url](#url)
  * error `string`: Error message, appears only if there was an error
  * image_id **required** `string`: Image ID that was licensed
  * price [Price](#price)

### LicenseImageResultDataList
* LicenseImageResultDataList `object`: List of information about licensed images
  * data `array`: License results
    * items [LicenseImageResult](#licenseimageresult)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: Current page that is returned
  * per_page `integer`: Number of results per page
  * total_count `integer`: Total count of all results across all pages

### LicenseRequestMetadata
* LicenseRequestMetadata `object`: Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder

### LicenseVideo
* LicenseVideo `object`: Data required to license a video
  * auth_cookie [Cookie](#cookie)
  * editorial_acknowledgement `boolean`: Whether or not this item is editorial content
  * metadata [LicenseRequestMetadata](#licenserequestmetadata)
  * price `number`: Retail price amount; only for rev-share partners
  * search_id `string`: ID of the search that led to this licensing event
  * show_modal `boolean`: (Deprecated)
  * size `string` (values: web, sd, hd, 4k): Size of the video being licensed
  * subscription_id `string`: ID of the subscription used for this license
  * video_id **required** `string`: ID of the video being licensed

### LicenseVideoRequest
* LicenseVideoRequest `object`: List of videos to license
  * videos **required** `array`: Videos to license
    * items [LicenseVideo](#licensevideo)

### LicenseVideoResult
* LicenseVideoResult `object`: The response to a licensing request for a video
  * allotment_charge `integer`: Number of allotments that this licensing event used
  * download [Url](#url)
  * error `string`: Potential error that occurred during licensing
  * price [Price](#price)
  * video_id **required** `string`: ID of the video that was licensed

### LicenseVideoResultDataList
* LicenseVideoResultDataList `object`: List of license results
  * data `array`: License results
    * items [LicenseVideoResult](#licensevideoresult)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: Current page that is returned
  * per_page `integer`: Number of results per page
  * total_count `integer`: Total count of all results across all pages

### Model
* Model `object`: Model
  * id **required** `string`: ID of the model

### ModelRelease
* ModelRelease `object`: Model and property release metadata
  * id `string`: ID of the model or property release

### MoodList
* MoodList `object`: List of moods
  * data **required** `array`: List of moods
    * items `string`

### OauthAccessTokenResponse
* OauthAccessTokenResponse `object`: Access token response to client apps
  * access_token **required** `string`: Access token that can be used for future requests
  * expires_in `integer`: Number of seconds before token expires, only present for expiring tokens
  * refresh_token `string`: A refresh token that can be used to renew the access_token when it expires, only present for expiring tokens
  * token_type **required** `string`: Type of token
  * user_token `string`: Metadata about the access_token, only present for expiring tokens

### Price
* Price `object`: Price
  * local_amount `number`: Dollar amount of the calculated rev-share price in the currency local_currency
  * local_currency `string`: Currency of the rev-share price that was calculated

### Recommendation
* Recommendation `object`: Media Recommendation
  * id **required** `string`: Media ID

### RecommendationDataList
* RecommendationDataList `object`: List of recommended images
  * data `array`: Recommended images
    * items [Recommendation](#recommendation)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: Current page that is returned
  * per_page `integer`: Number of results per page
  * total_count `integer`: Total count of all results across all pages

### RedownloadImage
* RedownloadImage `object`: Data required to redownload an image
  * auth_cookie [Cookie](#cookie)
  * show_modal `boolean`: (Deprecated)
  * size `string` (values: small, medium, huge, supersize): Size of the image
  * verification_code `string`: (Deprecated)

### RedownloadVideo
* RedownloadVideo `object`: Data required to redownload a video
  * auth_cookie [Cookie](#cookie)
  * show_modal `boolean`: (Deprecated)
  * verification_code `string`: The verification code to use to redownload the video

### Subscription
* Subscription `object`: Subscription
  * allotment [Allotment](#allotment)
  * description `string`: Description of the subscription
  * expiration_time `string`: Date the subscription ends, in the format YYYY-MM-ddTHH:mm:ssZ
  * formats `array`: List of formats that are licensable for the subscription
    * items [LicenseFormat](#licenseformat)
  * id **required** `string`: Unique internal identifier for the subscription
  * license `string`: Internal identifier for the type of subscription
  * metadata [SubscriptionMetadata](#subscriptionmetadata)
  * price_per_download [Price](#price)

### SubscriptionDataList
* SubscriptionDataList `object`: List of subscriptions
  * data `array`: Subscriptions retrieved from this user
    * items [Subscription](#subscription)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Optional error message
  * page `integer`: Current page that is being queried
  * per_page `integer`: Amount of subscriptions to show per page
  * total_count `integer`: Total number of subscriptions for this user

### SubscriptionMetadata
* SubscriptionMetadata `object`: Subscription Metadata

### TestEcho
* TestEcho `object`: Text to echo in the response
  * text `string`

### TestValidate
* TestValidate `object`: Validation results
  * header [TestValidateHeader](#testvalidateheader)
  * query [TestValidateQuery](#testvalidatequery)

### TestValidateHeader
* TestValidateHeader `object`: Validation results
  * user-agent `string`: User agent to expect in the response

### TestValidateQuery
* TestValidateQuery `object`: Validation results
  * id **required** `integer`: Integer ID that was passed in the request
  * tag `array`: List of tags that were passed in the request
    * items `string`

### Thumbnail
* Thumbnail `object`: Image thumbnail information
  * height **required** `integer`: Height in pixels of the image thumbnail
  * url **required** `string`: Direct URL to the image
  * width **required** `integer`: Width in pixels of the image thumbnail

### UpdatedMedia
* UpdatedMedia `object`: Information about a piece of updated media
  * id **required** `string`: ID of the media
  * updated_time **required** `string`: Date that the media was updated
  * updates **required** `array`: Types of updates that were made to the piece of media
    * items `string`

### UpdatedMediaDataList
* UpdatedMediaDataList `object`: List of updated media
  * data `array`: Updated media items
    * items [UpdatedMedia](#updatedmedia)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: Current page that is returned
  * per_page `integer`: Number of results per page
  * total_count `integer`: Total count of all results across all pages

### Url
* Url `object`: URL Object
  * url **required** `string`: URL that can be used to download the unwatermarked, licensed asset

### Urls
* Urls `object`: URLs object
  * urls **required** `array`: List of URLs
    * items `string`

### UserDetails
* UserDetails `object`: User details
  * contributor_id `string`: Unique internal identifier of the user, as a contributor
  * customer_id `string`: Unique internal identifier of the user, as a purchaser
  * email `string`: Email address of the user
  * first_name `string`: First name of the user
  * full_name `string`: Full name including first, middle, and last name of the user
  * id `string`: Unique internal identifier for the user, not tied to contributor or purchasing customer
  * is_premier `boolean`: True if the user has access to the Premier collection, false otherwise
  * is_premier_parent `boolean`: True if the user has access to the Premier collection and also has child users
  * language `string`: Main language of the user account
  * last_name `string`: Last name of the user
  * only_enhanced_license `boolean`: True if the user has an enterprise license, false otherwise
  * only_sensitive_use `boolean`: True if the user has access to sensitive use only, false otherwise
  * organization_id `string`: Unique internal identifier for the user's organization, specific to Premier users
  * premier_permissions `array`: List of permissions allowed through the Premier client
    * items `string`
  * username `string`: User name associated to the user

### Video
* Video `object`: Information about a video
  * added_date `string`: Date this video was added to the Shutterstock library, in the format YYYY-MM-DD
  * affiliate_url `string`: Affiliate referral link; appears only for registered affiliate partners
  * aspect `number`: Aspect ratio of this video in decimal format
  * aspect_ratio `string`: Aspect ratio of the video
  * assets [VideoAssets](#videoassets)
  * categories `array`: List of categories
    * items [Category](#category)
  * contributor **required** [Contributor](#contributor)
  * description `string`: Description of this video
  * duration `number`: Duration of this video, in seconds
  * has_model_release `boolean`: Whether or not this video has been released for use by the model appearing in it
  * has_property_release `boolean`: Whether or not this video has received a release to show the landmark or property appearing in it
  * id **required** `string`: ID of the video
  * is_adult `boolean`: Whether or not this video contains adult content
  * is_editorial `boolean`: Whether or not this video is editorial content
  * keywords `array`: Keywords associated with the content of this video
    * items `string`
  * media_type **required** `string`: Media type of this video, should always be "video"
  * models `array`: List of models in this video
    * items [Model](#model)
  * url `string`: Link to video information page; included only for certain accounts

### VideoAssets
* VideoAssets `object`: Video asset information
  * 4k [VideoSizeDetails](#videosizedetails)
  * hd [VideoSizeDetails](#videosizedetails)
  * preview_jpg [Url](#url)
  * preview_mp4 [Url](#url)
  * preview_webm [Url](#url)
  * sd [VideoSizeDetails](#videosizedetails)
  * thumb_jpg [Url](#url)
  * thumb_jpgs [Urls](#urls)
  * thumb_mp4 [Url](#url)
  * thumb_webm [Url](#url)
  * web [VideoSizeDetails](#videosizedetails)

### VideoDataList
* VideoDataList `object`: List of videos
  * data `array`: Videos
    * items [Video](#video)
  * errors `array`: Error list; appears only if there was an error
    * items [Error](#error)
  * message `string`: Server-generated message, if any
  * page `integer`: Current page that is returned
  * per_page `integer`: Number of results per page
  * total_count `integer`: Total count of all results across all pages

### VideoSearchResults
* VideoSearchResults `object`: Video search results
  * data **required** `array`: List of videos
    * items [Video](#video)
  * message `string`: Server-generated message, if any
  * page `integer`: Current page that is returned
  * per_page `integer`: Number of results per page
  * total_count **required** `integer`: Total count of all results across all pages

### VideoSizeDetails
* VideoSizeDetails `object`: Video asset information
  * display_name `string`: Display name of this video size
  * file_size `integer`: File size (in bytes) of this video size
  * format `string`: Format of this video size
  * fps `number`: Frames per second of this video size
  * height `integer`: Height of this video size
  * is_licensable `boolean`: Whether or not videos can be licensed in this video size
  * width `integer`: Width of this video size


