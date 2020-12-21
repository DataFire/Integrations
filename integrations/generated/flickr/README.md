# @datafire/flickr

Client library for Flickr API Schema

## Installation and Usage
```bash
npm install --save @datafire/flickr
```
```js
let flickr = require('@datafire/flickr').create();

.then(data => {
  console.log(data);
});
```

## Description

A subset of Flickr's API defined in Swagger format.

## Actions

### getAccessToken
Returns an access token


```js
flickr.getAccessToken({
  "oauth_consumer_key": "",
  "oauth_nonce": "",
  "oauth_timestamp": "",
  "oauth_signature_method": "",
  "oauth_version": "",
  "oauth_signature": "",
  "oauth_verifier": "",
  "oauth_token": ""
}, context)
```

#### Input
* input `object`
  * oauth_consumer_key **required** `string`
  * oauth_nonce **required** `string`
  * oauth_timestamp **required** `string`
  * oauth_signature_method **required** `string`
  * oauth_version **required** `string`
  * oauth_signature **required** `string`
  * oauth_verifier **required** `string`
  * oauth_token **required** `string`

#### Output
* output `string`

### getRequestToken
Returns an oauth token and oauth token secret


```js
flickr.getRequestToken({
  "oauth_consumer_key": "",
  "oauth_nonce": "",
  "oauth_timestamp": "",
  "oauth_signature_method": "",
  "oauth_version": "",
  "oauth_signature": "",
  "oauth_callback": ""
}, context)
```

#### Input
* input `object`
  * oauth_consumer_key **required** `string`
  * oauth_nonce **required** `string`
  * oauth_timestamp **required** `string`
  * oauth_signature_method **required** `string`
  * oauth_version **required** `string`
  * oauth_signature **required** `string`
  * oauth_callback **required** `string`

#### Output
* output `string`

### getFavoritesContextByID
Returns next and previous favorites for a photo in a user's favorites


```js
flickr.getFavoritesContextByID({
  "api_key": "",
  "photo_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * photo_id **required** `string`
  * user_id `string`

#### Output
* output `object`
  * count `object`
    * _content `string`
  * nextphoto [ContextPhoto](#contextphoto)
  * prevphoto [ContextPhoto](#contextphoto)
  * stat [Stat](#stat)

### getFavoritesByPersonID
Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.


```js
flickr.getFavoritesByPersonID({
  "api_key": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * user_id **required** `string`
  * min_fave_date `number`
  * max_fave_date `number`
  * page `number`
  * per_page `number`

#### Output
* output `object`
  * page `number`
  * pages `number`
  * perpage `number`
  * photos `array`
    * items [Photo](#photo)
  * total `number`

### getGalleryPhotosByID
Returns a list of photos in a gallery.


```js
flickr.getGalleryPhotosByID({
  "api_key": "",
  "gallery_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * gallery_id **required** `string`

#### Output
* output `object`
  * photos `array`
    * items [Photo](#photo)

### getGroupTopicRepliesByID
Get information on a group topic reply


```js
flickr.getGroupTopicRepliesByID({
  "api_key": "",
  "topic_id": "",
  "reply_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * group_id `string`
  * topic_id **required** `string`
  * reply_id **required** `string`

#### Output
* output `object`
  * reply [TopicReply](#topicreply)
  * stat [Stat](#stat)

### getGroupTopicByID
Get information about a group discussion topic


```js
flickr.getGroupTopicByID({
  "api_key": "",
  "topic_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * group_id `string`
  * topic_id **required** `string`

#### Output
* output `object`
  * stat [Stat](#stat)
  * topic [Topic](#topic)

### getGroupDiscussionsByID
Get a list of discussion topics in a group.


```js
flickr.getGroupDiscussionsByID({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * group_id `string`
  * page `number`
  * per_page `number`

#### Output
* output `object`
  * iconfarm `number`
  * iconserver `number`
  * ispoolmoderated `boolean`
  * lang `string`
  * members `number`
  * name `string`
  * page `number`
  * pages `number`
  * per_page `number`
  * privacy `number`
  * topics `array`
    * items [Topic](#topic)
  * total `number`

### getGroupByID
Get information about a group


```js
flickr.getGroupByID({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * group_id `string`
  * group_path_alias `string`
  * lang `string`

#### Output
* output `object`
  * group [Group](#group)
  * stat [Stat](#stat)

### rest_method_flickr.groups.pools.getContext.get
Returns next and previous photos for a photo in a group pool


```js
flickr.rest_method_flickr.groups.pools.getContext.get({
  "api_key": "",
  "photo_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * photo_id **required** `string`
  * group_id `string`

#### Output
* output `object`
  * count `object`
    * _content `string`
  * nextphoto [ContextPhoto](#contextphoto)
  * prevphoto [ContextPhoto](#contextphoto)
  * stat [Stat](#stat)

### rest_method_flickr.groups.pools.getPhotos.get
Returns a list of pool photos for a given group


```js
flickr.rest_method_flickr.groups.pools.getPhotos.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * group_id `string`

#### Output
* output `object`
  * photos `array`
    * items [Photo](#photo)

### getPersonByID
Returns a person


```js
flickr.getPersonByID({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * user_id `string`

#### Output
* output `object`
  * person [Person](#person)
  * stat [Stat](#stat)

### getMediaByPersonID
Return photos from the given user's photostream


```js
flickr.getMediaByPersonID({
  "api_key": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * user_id **required** `string`
  * safe_search `number`
  * min_upload_date `number`
  * max_upload_date `number`
  * min_taken_date `number`
  * max_taken_date `number`
  * content_type `number`
  * privacy_filter `number`
  * page `number`
  * per_page `number`

#### Output
* output `object`
  * page `number`
  * pages `number`
  * perpage `number`
  * photos `array`
    * items [Photo](#photo)
  * total `number`

### getPhotolistContextByID
Returns next and previous photos in a photo list


```js
flickr.getPhotolistContextByID({
  "api_key": "",
  "photo_id": "",
  "photolist_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * photo_id **required** `string`
  * photolist_id **required** `string`

#### Output
* output `object`
  * count `object`
    * _content `string`
  * nextphoto [ContextPhoto](#contextphoto)
  * prevphoto [ContextPhoto](#contextphoto)
  * stat [Stat](#stat)

### getPhotostreamContextByID
Returns next and previous photos for a photo in a photostream


```js
flickr.getPhotostreamContextByID({
  "api_key": "",
  "photo_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * photo_id **required** `string`

#### Output
* output `object`
  * count `object`
    * _content `string`
  * nextphoto [ContextPhoto](#contextphoto)
  * prevphoto [ContextPhoto](#contextphoto)
  * stat [Stat](#stat)

### getPhotoExifByID
Retrieves a list of EXIF/TIFF/GPS tags for a given photo. The calling user must have permission to view the photo.


```js
flickr.getPhotoExifByID({
  "api_key": "",
  "photo_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * photo_id **required** `string`
  * secret `string`

#### Output
* output `object`
  * photo `object`
    * camera `string`
    * exif `array`
      * items `object`
        * label `string`
        * raw `object`
          * _content `string`
        * tag `string`
        * tagspace `string`
        * tagspaceid `string`
    * farm `string`
    * id `string`
    * secret `string`
    * server `string`
  * stat [Stat](#stat)

### getPhotoByID
Returns a photo


```js
flickr.getPhotoByID({
  "api_key": "",
  "photo_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * photo_id **required** `string`

#### Output
* output `object`
  * photo [Photo](#photo)
  * stat [Stat](#stat)

### getPhotoSizesByID
Returns photo sizes


```js
flickr.getPhotoSizesByID({
  "api_key": "",
  "photo_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * photo_id **required** `string`

#### Output
* output `object`
  * sizes `object`
    * canblog `number`
    * candownload `number`
    * canprint `number`
    * sizes `array`
      * items [Size](#size)
  * stat [Stat](#stat)

### getLicenseByID
Fetches a list of available photo licenses for Flickr


```js
flickr.getLicenseByID({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`

#### Output
* output `object`
  * licenses `object`
    * license `array`
      * items `object`
        * id `integer`
        * name `string`
        * url `string`
  * stat [Stat](#stat)

### getMediaBySearch
Return a list of photos matching some criteria.


```js
flickr.getMediaBySearch({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * text `string`: A free text search. Photos who's title, description or tags contain the text will be returned. You can exclude results that match a term by prepending it with a - character.
  * tags `string`: A comma-delimited list of tags. Photos with one or more of the tags listed will be returned. You can exclude results that match a term by prepending it with a - character.
  * user_id `string`: The NSID of the user who's photo to search. If this parameter isn't passed then everybody's public photos will be searched. A value of "me" will search against the calling user's photos for authenticated calls.
  * min_upload_date `string`: Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.
  * max_upload_date `string`: Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime.
  * min_taken_date `string`: Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.
  * max_taken_date `string`: Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp.
  * license `string`: The license id for photos (for possible values see the flickr.photos.licenses.getInfo method). Multiple licenses may be comma-separated.
  * sort `string`: The order in which to sort returned photos. Deafults to date-posted-desc (unless you are doing a radial geo query, in which case the default sorting is by ascending distance from the point specified). The possible values are:
  * privacy_filter `number`: Return photos only matching a certain privacy level. This only applies when making an authenticated call to view photos you own. Valid values are:,
  * bbox `string`: A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched.
  * accuracy `string`: Recorded accuracy level of the location information. Current range is 1-16:
  * safe_search `number`: Safe search setting:
  * content_type `number`: Content Type setting:
  * machine_tags `string`: Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties : Find photos using the 'dc' namespace : "machine_tags" => "dc:" Find photos with a title in the 'dc' namespace : "machine_tags" => "dc:title=" Find photos titled "mr. camera" in the 'dc' namespace : "machine_tags" => "dc:title=\"mr. camera\" Find photos whose value is "mr. camera" : "machine_tags" => "*:*=\"mr. camera\"" Find photos that have a title, in any namespace : "machine_tags" => "*:title=" Find photos that have a title, in any namespace, whose value is "mr. camera" : "machine_tags" => "*:title=\"mr. camera\"" Find photos, in the 'dc' namespace whose value is "mr. camera" : "machine_tags" => "dc:*=\"mr. camera\"" Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. "AND" queries are limited to (16) machine tags. "OR" queries are limited to (8).
  * machine_tag_mode `string`: Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified.
  * group_id `string`: The id of a group who's pool to search. If specified, only matching photos posted to the group's pool will be returned.
  * contacts `string`: Search your contacts. Either 'all' or 'ff' for just friends and family. (Experimental)
  * woe_id `string`: A 32-bit identifier that uniquely represents spatial entities. (not used if bbox argument is present).
  * place_id `string`: A Flickr place id. (not used if bbox argument is present). Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
  * media `string`: Filter results by media type. Possible values are all (default), photos or videos
  * has_geo `string`: Any photo that has been geotagged, or if the value is "0" any photo that has not been geotagged. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
  * geo_context `string`: Geo context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to search for photos that were taken "indoors" or "outdoors". The current list of context IDs is: 0, not defined. 1, indoors. 2, outdoors. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
  * lat `string`: A valid latitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
  * lon `string`: A valid longitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against "parameterless searches" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).
  * radius `number`: A valid radius used for geo queries, greater than zero and less than 20 miles (or 32 kilometers), for use with point-based geo queries. The default value is 5 (km).
  * radius_units `string`: The unit of measure when doing radial geo queries. Valid options are "mi" (miles) and "km" (kilometers). The default is "km".
  * is_commons `boolean`: Limit the scope of the search to only photos that are part of the Flickr Commons project. Default is false.
  * in_gallery `boolean`: Limit the scope of the search to only photos that are in a gallery? Default is false, search all photos.
  * is_getty `boolean`: Limit the scope of the search to only photos that are for sale on Getty. Default is false.
  * per_page `number`: Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500.
  * page `number`: The page of results to return. If this argument is omitted, it defaults to 1.

#### Output
* output `object`
  * page `number`
  * pages `number`
  * perpage `number`
  * photos `array`
    * items [Photo](#photo)
  * total `number`

### getAlbumContextByID
Returns next and previous photos for a photo in a set


```js
flickr.getAlbumContextByID({
  "api_key": "",
  "photo_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * photo_id **required** `string`
  * photoset_id `string`

#### Output
* output `object`
  * count `object`
    * _content `string`
  * nextphoto [ContextPhoto](#contextphoto)
  * prevphoto [ContextPhoto](#contextphoto)
  * stat [Stat](#stat)

### getAlbumsByPersonID
Returns the albums belonging to the specified user


```js
flickr.getAlbumsByPersonID({
  "api_key": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * user_id **required** `string`
  * page `number`
  * per_page `number`

#### Output
* output `object`
  * page `number`
  * pages `number`
  * perpage `number`
  * photosets `array`
    * items [Album](#album)
  * total `number`

### getAlbumByID
Returns a list of photos in an album.


```js
flickr.getAlbumByID({
  "api_key": "",
  "photoset_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * photoset_id **required** `string`

#### Output
* output `object`
  * photoset `array`
    * items [Photo](#photo)

### echo
Echos the input parameters back in the response


```js
flickr.echo({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * echo `string`

#### Output
* output `object`
  * echo `object`
    * _content `string`

### uploadPhoto
Uploads a new photo to Flickr


```js
flickr.uploadPhoto({
  "api_key": "",
  "photo": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`
  * photo **required** `string`, `object`
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * title `string`
  * description `string`
  * tags `string`
  * is_public `string` (values: 0, 1)
  * is_friend `string` (values: 0, 1)
  * is_family `string` (values: 0, 1)
  * safety_level `string` (values: 1, 2, 3)
  * content_type `string` (values: 1, 2, 3)
  * hidden `string` (values: 1, 2)

#### Output
* output `object`



## Definitions

### Album
* Album `object`
  * can_comment `boolean`
  * count_comments `number`
  * count_views `number`
  * date_create `number`
  * date_update `number`
  * description `string`
  * farm `string`
  * id `string`
  * photos `number`
  * primary `string`
  * secret `string`
  * server `string`
  * title `string`
  * videos `number`

### ContextPhoto
* ContextPhoto `object`
  * farm `string`
  * id `string`
  * is_faved `boolean`
  * license `integer`
  * media `string`
  * owner `string`
  * safe `boolean`
  * secret `string`
  * server `string`
  * thumb `string`
  * title `string`
  * url `string`

### ContextPhotos
* ContextPhotos `object`
  * photos `array`
    * items [ContextPhoto](#contextphoto)

### Cover
* Cover `object`
  * farm `string`
  * id `string`
  * isfamily `boolean`
  * isfriend `boolean`
  * ispublic `boolean`
  * owner `string`
  * secret `string`
  * server `string`
  * title `string`
  * y `string`

### Group
* Group `object`
  * blast `object`
    * _content `string`
    * date_blast_added `string`
    * user_id `string`
  * cover [Cover](#cover)
  * coverphoto_farm `string`
  * coverphoto_server `string`
  * coverphoto_url [PhotoURLs](#photourls)
  * description `object`
    * _content `string`
  * iconfarm `string`
  * iconserver `string`
  * id `string`
  * is_admin `boolean`
  * is_member `boolean`
  * is_moderator `boolean`
  * ispoolmoderated `boolean`
  * lang `string`
  * members `object`
    * _content `string`
  * name `object`
    * _content `string`
  * path_alias `string`
  * pool_count `object`
    * _content `string`
  * pool_rows `integer`
  * privacy `object`
    * _content `string`
  * restrictions `object`
    * art_ok `boolean`
    * has_geo `boolean`
    * images_ok `boolean`
    * moderate_ok `boolean`
    * photos_ok `boolean`
    * restricted_ok `boolean`
    * safe_ok `boolean`
    * screens_ok `boolean`
    * videos_ok `boolean`
  * roles `object`
    * admin `string`
    * member `string`
    * moderator `string`
  * rules `object`
    * _content `string`
  * throttle `object`
    * count `integer`
    * mode `string`
    * remaining `string`
  * topic_count `object`
    * _content `string`

### Note
* Note `object`
  * description `string`

### Owner
* Owner `object`
  * iconfarm `string`
  * iconserver `string`
  * is_ad_free `boolean`
  * ispro `boolean`
  * location `string`
  * noindexfollow `boolean`
  * nsid `string`
  * path_alias `string`
  * realname `string`
  * username `string`

### Person
* Person `object`
  * can_buy_pro `boolean`
  * cover [Cover](#cover)
  * coverphoto [PhotoURLs](#photourls)
  * coverphoto_farm `string`
  * coverphoto_server `string`
  * description `object`
    * _content `string`
  * disable_keyboard_shortcuts `object`
    * _content `string`
  * expire `boolean`
  * has_stats `boolean`
  * iconfarm `string`
  * iconserver `string`
  * id `string`
  * is_ad_free `boolean`
  * ispro `boolean`
  * location `object`
    * _content `string`
  * mbox_sha1sum `object`
    * _content `string`
  * mobileurl `object`
    * _content `string`
  * nsid `string`
  * path_alias `string`
  * photos `object`
    * count `object`
      * _content `string`
    * firstdate `object`
      * _content `string`
    * firstdatetaken `object`
      * _content `string`
    * views `object`
      * _content `string`
  * photosurl `object`
    * _content `string`
  * profileurl `object`
    * _content `string`
  * realname `object`
    * _content `string`
  * timezone `object`
    * label `string`
    * offset `string`
    * timezone_id `string`
  * unread_messages `object`
    * _content `string`
  * user_secret `string`
  * username `object`
    * _content `string`
  * yintl `string`

### Photo
* Photo `object`
  * comments `object`
    * _content `string`
  * dates `object`
    * lastupdate `string`
    * posted `string`
    * taken `string`
    * takengranularity `string`
    * takenunknown `boolean`
  * dateuploaded `string`
  * description `object`
    * _content `string`
  * editability `object`
    * canaddmeta `boolean`
    * cancomment `boolean`
  * farm `string`
  * id `string`
  * isfavorite `boolean`
  * license `string`
  * media `string`
  * notes `object`
    * note `array`
      * items [Note](#note)
  * originalsecret `string`
  * owner [Owner](#owner)
  * people `object`
    * haspeople `boolean`
  * permissions `object`
    * permaddmeta `string`
    * permcomment `string`
  * publiceditability `object`
    * canaddmeta `boolean`
    * cancomment `boolean`
  * rotation `string`
  * safe `boolean`
  * safety_level `string`
  * secret `string`
  * server `string`
  * tags `object`
    * tag `array`
      * items [Tag](#tag)
  * title `object`
    * _content `string`
  * urls `object`
    * url `array`
      * items [URL](#url)
  * usage `object`
    * canblog `boolean`
    * candownload `boolean`
    * canprint `boolean`
    * canshare `boolean`
  * views `string`
  * visibility `object`
    * isfamily `boolean`
    * isfriend `boolean`
    * ispublic `boolean`

### PhotoURLs
* PhotoURLs `object`
  * h `string`
  * l `string`
  * s `string`
  * t `string`

### Size
* Size `object`
  * height `number`
  * label `string`
  * media `string`
  * source `string`
  * url `string`
  * width `number`

### Stat
* Stat `string`

### Tag
* Tag `object`
  * _content `string`
  * author `string`
  * authorname `string`
  * id `string`
  * machine_tag `boolean`
  * raw `string`

### Topic
* Topic `object`
  * author `string`
  * author_is_deleted `boolean`
  * author_path_alias `string`
  * authorname `string`
  * can_delete `boolean`
  * can_edit `boolean`
  * can_reply `boolean`
  * count_replies `integer`
  * datecreate `string`
  * datelastpost `string`
  * iconfarm `string`
  * iconserver `string`
  * id `string`
  * is_locked `boolean`
  * is_pro `boolean`
  * is_sticky `boolean`
  * last_reply `string`
  * lastedit `string`
  * message `object`
    * _content `string`
  * role `string`
  * subject `string`

### TopicReply
* TopicReply `object`
  * author `string`
  * author_is_deleted `boolean`
  * author_path_alias `string`
  * authorname `string`
  * can_delete `boolean`
  * can_edit `boolean`
  * datecreate `string`
  * iconfarm `string`
  * iconserver `string`
  * id `string`
  * is_pro `boolean`
  * lastedit `string`
  * message `object`
    * _content `string`

### URL
* URL `object`
  * _content `string`
  * type `string`


