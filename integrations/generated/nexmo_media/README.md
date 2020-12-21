# @datafire/nexmo_media

Client library for Media API

## Installation and Usage
```bash
npm install --save @datafire/nexmo_media
```
```js
let nexmo_media = require('@datafire/nexmo_media').create();

.then(data => {
  console.log(data);
});
```

## Description

The Media API can be used to query, download and delete media items such as audio files for use with other Nexmo APIs.

## Actions

### .get
Retrieve information about multiple media items with the ability to search and paginate.


```js
nexmo_media..get({}, context)
```

#### Input
* input `object`
  * order `string` (values: ascending, descending): The order of search results.
  * page_index `integer`: Which page to retrieve in pagination
  * page_size `integer`: How many items at most per page
  * start_time `string`: Retrieve results created on or after this timestap.
  * end_time `string`: Retrieve results created on or before this timestamp.

#### Output
* output `object`
  * _embedded `object`: A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields
    * media `array`
      * items [Media](#media)
  * _links `object`
    * first `object`
      * href `string`
    * last `object`
      * href `string`
    * self `object`
      * href `string`
  * count `integer`: The total number of records returned by your request.
  * page_index `integer`: The `page_index` used in your request.
  * page_size `integer`: The amount of records returned in this response.

### _id.delete
Delete a previously created media item by ID.


```js
nexmo_media._id.delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### _id.info.get
Retrieve information about a single media item


```js
nexmo_media._id.info.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Media](#media)

### _id.info.put
Update a previously created media item by ID.


```js
nexmo_media._id.info.put({}, context)
```

#### Input
* input `object`
  * description `string`: A description of the media file.
  * max_downloads_allowed `integer`: The maximum number of times the file may be downloaded. Unlimited when not provided.
  * metadata_primary `string`: A string containing metadata about the media file.
  * metadata_secondary `string`: A string containing further metadata about the media file.
  * mime_type `string`: The MIME type of the media file.
  * public `boolean`: Whether the item is publicly available without authentication.
  * title `string`: A string containing a title for the media file.

#### Output
*Output schema unknown*



## Definitions

### Media
* Media `object`
  * account_id `string`: The ID of your Nexmo account. This is the same as your API key.
  * etag `string`: An identifier for the content. This will change if the content of the file has been changed (i.e. if you upload a new version of the file). For more information see Wikipedia: [HTTP ETag](https://en.wikipedia.org/wiki/HTTP_ETag)
  * id `string`: A UUID representing the object.
  * max_downloads_allowed `integer`: The maximum number of times the file may be downloaded.
  * media_size `integer`: The size of the file in bytes
  * metadata_primary `string`: A user set string containing metadata about the media file.
  * metadata_secondary `string`: A user set string containing further metadata about the media file.
  * mime_type `string`: The IETF MIME type of the file.
  * original_file_name `string`: The filename of the object as it was originally uploaded.
  * public `boolean`: Whether the item is available for download without authentication.
  * store_id `string`: An internal identifier of how the file is stored.
  * time_created `string`: A timestamp for the time that the file was created
  * time_last_updated `string`: A timestamp for the time that the file was last modified
  * times_downloaded `integer`: The number of times the file has been downloaded.


