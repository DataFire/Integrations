# @datafire/picasa

Client library for Picasa

## Installation and Usage
```bash
npm install --save @datafire/picasa
```
```js
let picasa = require('@datafire/picasa').create();

.then(data => {
  console.log(data);
});
```

## Description

Create buttons to export images from Picasa into other apps and services. (Active but deprecated by Google)

## Actions

### feed.api.user.userID.get
Returns a feed of comments on a userID's photos.


```js
picasa.feed.api.user.userID.get({
  "GData-Version": "",
  "userID": ""
}, context)
```

#### Input
* input `object`
  * GData-Version **required** `string`: The API version. Current version is 2.
  * userID **required** `string`: The Picasa User ID. The string "default" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used.
  * kind `string` (values: album, photo, comment, tag, user): Picasa Web Albums-specific query parameter for kind queries.
  * access `string` (values: all, private, public, visible): Visibility parameter.
  * alt `string` (values: rss, json, json-in-script, atom-in-script, rss-in-script, atom-service): Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.
  * bbox `string`: Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north.
  * fields `string`: Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.
  * imgmax `string`: Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below.
  * l `string`: Named search of geo data. Searches for data in the named location. An example location would be London.
  * max-results `string`: Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed.
  * prettyprint `string`: Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false
  * start-index `string`: 1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries.
  * tag `string`: Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag.
  * thumbsize `string`: Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below.

#### Output
*Output schema unknown*

### feed.api.user.userID.post
Creates an album.


```js
picasa.feed.api.user.userID.post({
  "GData-Version": "",
  "Content-Type": "",
  "userID": ""
}, context)
```

#### Input
* input `object`
  * GData-Version **required** `string`: The API version. Current version is 2.
  * Content-Type **required** `string`: Content type.
  * userID **required** `string`: The Picasa User ID. The string "default" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used.
  * kind `string` (values: album, photo, comment, tag, user): Picasa Web Albums-specific query parameter for kind queries.
  * access `string` (values: all, private, public, visible): Visibility parameter.
  * alt `string` (values: rss, json, json-in-script, atom-in-script, rss-in-script, atom-service): Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.
  * bbox `string`: Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north.
  * fields `string`: Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.
  * imgmax `string`: Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below.
  * l `string`: Named search of geo data. Searches for data in the named location. An example location would be London.
  * max-results `string`: Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed.
  * prettyprint `string`: Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false
  * start-index `string`: 1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries.
  * tag `string`: Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag.
  * thumbsize `string`: Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below.

#### Output
*Output schema unknown*

### feed.api.user.userID.albumid.albumID.get
Searches for all photos in albumID belonging to userID that are tagged with the specified comma-separated tags.


```js
picasa.feed.api.user.userID.albumid.albumID.get({
  "GData-Version": "",
  "userID": "",
  "albumID": ""
}, context)
```

#### Input
* input `object`
  * GData-Version **required** `string`: The API version. Current version is 2.
  * userID **required** `string`: The Picasa User ID. The string "default" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used.
  * albumID **required** `string`: The album ID.
  * kind `string` (values: album, photo, comment, tag, user): Picasa Web Albums-specific query parameter for kind queries.
  * access `string` (values: all, private, public, visible): Visibility parameter.
  * alt `string` (values: rss, json, json-in-script, atom-in-script, rss-in-script, atom-service): Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.
  * bbox `string`: Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north.
  * fields `string`: Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.
  * imgmax `string`: Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below.
  * l `string`: Named search of geo data. Searches for data in the named location. An example location would be London.
  * max-results `string`: Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed.
  * prettyprint `string`: Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false
  * start-index `string`: 1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries.
  * tag `string`: Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag.
  * thumbsize `string`: Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below.

#### Output
*Output schema unknown*

### feed.api.user.userID.albumid.albumID.post
There are two ways to add a photo to an album using the Data API:
Upload the binary image data along with its metadata. To do this, use MIME content type "multipart/related"; send photo metadata in one part of the POST body, and binary-encoded image data in another part. This is the preferred approach.
Upload the binary image data without the metadata.
While all photos appearing on the Picasa Web Albums site are in the JPEG format, photos of any of the following types can be uploaded using the API:
- image/bmp
- image/gif
- image/jpeg
- image/png

A video is posted in the same way as a photo with metadata (Note: You cannot submit a video without metadata at this time, you must use a MIME multipart). Instead of an image MIME type you have to use an appropriate video MIME type (refer to http://code.google.com/intl/en/apis/picasaweb/docs/2.0/developers_guide_protocol.html#PostVideo).
The recognized video MIME types are:
- video/3gpp
- video/avi
- video/quicktime
- video/mp4
- video/mpeg
- video/mpeg4
- video/msvideo
- video/x-ms-asf
- video/x-ms-wmv
- video/x-msvideo


```js
picasa.feed.api.user.userID.albumid.albumID.post({
  "GData-Version": "",
  "Content-Type": "",
  "userID": "",
  "albumID": ""
}, context)
```

#### Input
* input `object`
  * GData-Version **required** `string`: The API version. Current version is 2.
  * Content-Type **required** `string` (values: multipart/related; boundary="END_OF_PART", image/bmp, image/gif, image/jpeg, image/png, video/3gpp, video/avi, video/quicktime, video/mp4, video/mpeg, video/mpeg4, video/msvideo, video/x-ms-asf, video/x-ms-wmv, video/x-msvideo): Content type.
  * MIME-version `string`: MIME version.
  * Slug `string`: When posting a photo without metadata, one could specify a filename for Picasa Web Albums to use for the photo using this parameter. Not specifying a Slug causes the server to use a default title for the image. When posting with metadata, use the <title> element within the request body for the filename you want to use for the image.
  * userID **required** `string`: The Picasa User ID. The string "default" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used.
  * albumID **required** `string`: The album ID.
  * kind `string` (values: album, photo, comment, tag, user): Picasa Web Albums-specific query parameter for kind queries.
  * access `string` (values: all, private, public, visible): Visibility parameter.
  * alt `string` (values: rss, json, json-in-script, atom-in-script, rss-in-script, atom-service): Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.
  * bbox `string`: Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north.
  * fields `string`: Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.
  * imgmax `string`: Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below.
  * l `string`: Named search of geo data. Searches for data in the named location. An example location would be London.
  * max-results `string`: Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed.
  * prettyprint `string`: Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false
  * start-index `string`: 1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries.
  * tag `string`: Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag.
  * thumbsize `string`: Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below.

#### Output
*Output schema unknown*

### entry.api.user.userID.albumid.albumID.put
Modifies an album.


```js
picasa.entry.api.user.userID.albumid.albumID.put({
  "GData-Version": "",
  "Content-Type": "",
  "If-Match": "",
  "userID": "",
  "albumID": "",
  "tok": "",
  "authkey": ""
}, context)
```

#### Input
* input `object`
  * GData-Version **required** `string`: The API version. Current version is 2.
  * Content-Type **required** `string`: Content type.
  * If-Match **required** `string`: To make sure that your update doesn't overwrite another client's changes, include an HTTP If-Match header that contains the original album's ETag value. You can determine the original album's ETag value by examining the <entry> element's gd:etag attribute. If you want to update the album regardless of whether someone else has updated it since you retrieved it, then use If-Match: * and don't include the ETag.
  * userID **required** `string`: The Picasa User ID. The string "default" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used.
  * albumID **required** `string`: The album ID.
  * tok **required** `string`: Authorization Key.
  * authkey **required** `string`: Authorization Key.

#### Output
*Output schema unknown*

### entry.api.user.userID.albumid.albumID.delete
Deletes an album.


```js
picasa.entry.api.user.userID.albumid.albumID.delete({
  "GData-Version": "",
  "If-Match": "",
  "userID": "",
  "albumID": "",
  "tok": "",
  "authkey": ""
}, context)
```

#### Input
* input `object`
  * GData-Version **required** `string`: The API version. Current version is 2.
  * If-Match **required** `string`: If you want to make sure that you don't delete an album that has been changed by another client since you retrieved it, include an HTTP If-Match header that contains the original album's ETag value. You can determine the original album's ETag value by examining the <entry> element's gd:etag attribute. If you want to delete the album regardless of whether someone else has updated it since you retrieved it, then use If-Match: * and don't include the ETag. (In this case, you don't need to retrieve the album before deleting it.)
  * userID **required** `string`: The Picasa User ID. The string "default" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used.
  * albumID **required** `string`: The album ID.
  * tok **required** `string`: Authorization Key.
  * authkey **required** `string`: Authorization Key.

#### Output
*Output schema unknown*

### feed.api.user.userID.albumid.albumID.photoid.photoID.get
Retrieves a feed of the comments on the photo identified by photoID, inside of the album with ID albumID, owned by the user userID.


```js
picasa.feed.api.user.userID.albumid.albumID.photoid.photoID.get({
  "GData-Version": "",
  "userID": "",
  "albumID": "",
  "photoID": ""
}, context)
```

#### Input
* input `object`
  * GData-Version **required** `string`: The API version. Current version is 2.
  * userID **required** `string`: The Picasa User ID. The string "default" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used.
  * albumID **required** `string`: The album ID.
  * photoID **required** `string`: The photo ID.
  * kind `string` (values: album, photo, comment, tag, user): Picasa Web Albums-specific query parameter for kind queries.
  * access `string` (values: all, private, public, visible): Visibility parameter.
  * alt `string` (values: rss, json, json-in-script, atom-in-script, rss-in-script, atom-service): Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.
  * bbox `string`: Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north.
  * fields `string`: Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.
  * imgmax `string`: Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below.
  * l `string`: Named search of geo data. Searches for data in the named location. An example location would be London.
  * max-results `string`: Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed.
  * prettyprint `string`: Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false
  * start-index `string`: 1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries.
  * tag `string`: Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag.
  * thumbsize `string`: Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below.

#### Output
*Output schema unknown*

### feed.api.user.userID.albumid.albumID.photoid.photoID.post
Adds a comment to the photo identified by photoID in the album with ID albumID owned by userID.


```js
picasa.feed.api.user.userID.albumid.albumID.photoid.photoID.post({
  "GData-Version": "",
  "Content-Type": "",
  "userID": "",
  "albumID": "",
  "photoID": ""
}, context)
```

#### Input
* input `object`
  * GData-Version **required** `string`: The API version. Current version is 2.
  * Content-Type **required** `string`: Content type.
  * userID **required** `string`: The Picasa User ID. The string "default" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used.
  * albumID **required** `string`: The album ID.
  * photoID **required** `string`: The photo ID.
  * kind `string` (values: album, photo, comment, tag, user): Picasa Web Albums-specific query parameter for kind queries.
  * access `string` (values: all, private, public, visible): Visibility parameter.
  * alt `string` (values: rss, json, json-in-script, atom-in-script, rss-in-script, atom-service): Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.
  * bbox `string`: Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north.
  * fields `string`: Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.
  * imgmax `string`: Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below.
  * l `string`: Named search of geo data. Searches for data in the named location. An example location would be London.
  * max-results `string`: Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed.
  * prettyprint `string`: Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false
  * start-index `string`: 1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries.
  * tag `string`: Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag.
  * thumbsize `string`: Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below.

#### Output
*Output schema unknown*

### media.api.user.userID.albumid.albumID.photoid.photoID.put
Replaces the binary image data for a photo. Include in the request body the replacement image data, in the same format that you used to do the POST without metadata.


```js
picasa.media.api.user.userID.albumid.albumID.photoid.photoID.put({
  "GData-Version": "",
  "Content-Type": "",
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * GData-Version **required** `string`: The API version. Current version is 2.
  * Content-Type **required** `string` (values: image/bmp, image/gif, image/jpeg, image/png): Content type.
  * If-Match **required** `string`: To make sure that your update doesn't overwrite another client's changes, include an HTTP If-Match header that contains the original album's ETag value. You can determine the original album's ETag value by examining the <entry> element's gd:etag attribute. If you want to update the album regardless of whether someone else has updated it since you retrieved it, then use If-Match: * and don't include the ETag.

#### Output
*Output schema unknown*

### entry.api.user.userID.albumid.albumID.photoid.photoID.put
Replaces only the photo's metadata (and not the image itself). Must provide in the request body the updated metadata, in the form of an <atom:entry> element containing image metadata. The photo itself is not re-sent to the server.


```js
picasa.entry.api.user.userID.albumid.albumID.photoid.photoID.put({
  "Content-Type": "",
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: Content type.
  * If-Match **required** `string`: To make sure that your update doesn't overwrite another client's changes, include an HTTP If-Match header that contains the original album's ETag value. You can determine the original album's ETag value by examining the <entry> element's gd:etag attribute. If you want to update the album regardless of whether someone else has updated it since you retrieved it, then use If-Match: * and don't include the ETag.

#### Output
*Output schema unknown*

### entry.api.user.userID.albumid.albumID.photoid.photoID.delete
Deletes a photo and its metadata.


```js
picasa.entry.api.user.userID.albumid.albumID.photoid.photoID.delete({
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * If-Match **required** `string`: To make sure that your update doesn't overwrite another client's changes, include an HTTP If-Match header that contains the original album's ETag value. You can determine the original album's ETag value by examining the <entry> element's gd:etag attribute. If you want to update the album regardless of whether someone else has updated it since you retrieved it, then use If-Match: * and don't include the ETag.

#### Output
*Output schema unknown*

### entry.api.user.userID.albumid.albumID.photoid.photoID.tag.tagID.delete
Deletes the tag tagID on the photo identified by photoID, inside of the album with ID albumID, owned by the user userID.


```js
picasa.entry.api.user.userID.albumid.albumID.photoid.photoID.tag.tagID.delete({
  "GData-Version": "",
  "userID": "",
  "albumID": "",
  "photoID": "",
  "tagID": ""
}, context)
```

#### Input
* input `object`
  * GData-Version **required** `string`: The API version. Current version is 2.
  * userID **required** `string`: The Picasa User ID. The string "default" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used.
  * albumID **required** `string`: The album ID.
  * photoID **required** `string`: The photo ID.
  * tagID **required** `string`: The tag ID.

#### Output
*Output schema unknown*

### entry.api.user.userID.albumid.albumID.photoid.photoID.commentid.commentID.delete
Deletes a comment commentID on the photo identified by photoID, inside of the album with ID albumID, owned by the user userID.


```js
picasa.entry.api.user.userID.albumid.albumID.photoid.photoID.commentid.commentID.delete({
  "GData-Version": "",
  "userID": "",
  "albumID": "",
  "photoID": "",
  "tagID": "",
  "commentID": ""
}, context)
```

#### Input
* input `object`
  * GData-Version **required** `string`: The API version. Current version is 2.
  * userID **required** `string`: The Picasa User ID. The string "default" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used.
  * albumID **required** `string`: The album ID.
  * photoID **required** `string`: The photo ID.
  * tagID **required** `string`: The tag ID.
  * commentID **required** `string`: The comment ID.

#### Output
*Output schema unknown*

### feed.api.all.get
Searches photos uploaded by other users, as long as they are in a public album.


```js
picasa.feed.api.all.get({
  "GData-Version": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * GData-Version **required** `string`: The API version. Current version is 2.
  * q **required** `string`: Full-text query string. When creating a query, list search terms separated by spaces, in the form q=term1 term2 term3. (As with all of the query parameter values, the spaces must be URL encoded.) The service returns all entries that match all of the search terms (like using AND between terms). Like Google's web search, a service searches on complete words (and related words with the same stem), not substrings.
  * kind `string` (values: album, photo, comment, tag, user): Picasa Web Albums-specific query parameter for kind queries.
  * access `string` (values: all, private, public, visible): Visibility parameter.
  * alt `string` (values: rss, json, json-in-script, atom-in-script, rss-in-script, atom-service): Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.
  * bbox `string`: Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north.
  * fields `string`: Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.
  * imgmax `string`: Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below.
  * l `string`: Named search of geo data. Searches for data in the named location. An example location would be London.
  * max-results `string`: Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed.
  * prettyprint `string`: Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false
  * start-index `string`: 1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries.
  * tag `string`: Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag.
  * thumbsize `string`: Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below.

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
