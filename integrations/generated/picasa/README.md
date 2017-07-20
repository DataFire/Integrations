# @datafire/picasa
Create buttons to export images from Picasa into other apps and services. (Active but deprecated by Google)

## Operation: feed.api.user.userID.get
Returns a feed of comments on a userID's photos.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GData-Version": {
      "type": "string",
      "description": "The API version. Current version is 2."
    },
    "userID": {
      "type": "string",
      "description": "The Picasa User ID. The string \"default\" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used."
    },
    "kind": {
      "type": "string",
      "description": "Picasa Web Albums-specific query parameter for kind queries.\nApplicable values:\n- album: Feed includes some or all of the albums the specified user has in their gallery. Which albums are returned depends on the visibility value specified.   User-based feed\n- photo: Feed includes the photos in an album (album-based), recent photos uploaded by a user (user-based) or photos uploaded by all users (community search).   Album-based, user-based and community search feeds\n- comment: Feed includes the comments that have been made on a photo.  Photo-based and user-based feeds\n- tag: Includes all tags associated with the specified user, album, or photo. For user-based and album-based feeds, the tags include a weight value indicating how often they occurred.    User-based, album-based, and photo-based feeds\n- user: Feed includes entries representing users.",
      "enum": [
        "album",
        "photo",
        "comment",
        "tag",
        "user"
      ]
    },
    "access": {
      "type": "string",
      "description": "Visibility parameter.\nApplicable values:\n- all: Shows all data, both public and private. Requires authentication. Default for the owner, and only the owner can specify this value.\n- private: Shows only private data.    Requires authentication. Only the owner can specify this value.\n- public: Shows only public data. Does not require authentication. Most often used by an authenticated user to see only the publicly visible photos, corresponding to \"View My Public Gallery\" in the Picasa Web Albums GUI.\n- visible: Shows all data the user has access to, including both all public photos or albums and any photos or albums that the owner has explicitly given the authenticated user rights to (using ACLs).   Does not require authentication. Default for unauthenticated requests and for non-owners. For unauthenticated requests, this is the same as public. For authenticated non-owners, this returns the data that the owner has given them access to. For authenticated requests from the owner, this is the same as all.",
      "enum": [
        "all",
        "private",
        "public",
        "visible"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.\nApplicable values:\n- rss: returns an RSS 2.0 result feed (for reads only). When you request data from a service in RSS format, the service supplies a feed (or other representation of the resource) in RSS format. If there's no equivalent RSS property for a given Data API property, the service uses the Atom property, labeling it with an appropriate namespace to indicate that it's an extension to RSS.\n- json: returns a JSON representation of the feed. More information\n- json-in-script: Requests a response that wraps JSON in a script tag. More information\n- atom-in-script: Requests an Atom response that wraps an XML string in a script tag.\n- rss-in-script: Requests an RSS response that wraps an XML string in a script tag.\n- atom-service: Requests an Atom service document that describes the feed.",
      "enum": [
        "rss",
        "json",
        "json-in-script",
        "atom-in-script",
        "rss-in-script",
        "atom-service"
      ]
    },
    "bbox": {
      "type": "string",
      "description": "Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north."
    },
    "fields": {
      "type": "string",
      "description": "Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.\nFor example:\nhttp://www.example.com/feeds?fields=link,entry(@gd:etag,id,updated,link[@rel='edit']))\nWhen it receives this request, the server returns a response that contains only only link and entry elements for the feed. In addition, the entry elements returned are partial entries that contain only ETag, ID, updated, and edit link relations.\nThe fields value must be URL encoded, as with all query parameter values. This parameter is currently an experimental feature."
    },
    "imgmax": {
      "type": "string",
      "description": "Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below."
    },
    "l": {
      "type": "string",
      "description": "Named search of geo data. Searches for data in the named location. An example location would be London."
    },
    "max-results": {
      "type": "string",
      "description": "Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed."
    },
    "prettyprint": {
      "type": "string",
      "description": "Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false"
    },
    "start-index": {
      "type": "string",
      "description": "1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries."
    },
    "tag": {
      "type": "string",
      "description": "Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag."
    },
    "thumbsize": {
      "type": "string",
      "description": "Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below."
    }
  },
  "additionalProperties": false,
  "required": [
    "GData-Version",
    "userID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: feed.api.user.userID.post
Creates an album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GData-Version": {
      "type": "string",
      "description": "The API version. Current version is 2."
    },
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "userID": {
      "type": "string",
      "description": "The Picasa User ID. The string \"default\" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used."
    },
    "kind": {
      "type": "string",
      "description": "Picasa Web Albums-specific query parameter for kind queries.\nApplicable values:\n- album: Feed includes some or all of the albums the specified user has in their gallery. Which albums are returned depends on the visibility value specified.   User-based feed\n- photo: Feed includes the photos in an album (album-based), recent photos uploaded by a user (user-based) or photos uploaded by all users (community search).   Album-based, user-based and community search feeds\n- comment: Feed includes the comments that have been made on a photo.  Photo-based and user-based feeds\n- tag: Includes all tags associated with the specified user, album, or photo. For user-based and album-based feeds, the tags include a weight value indicating how often they occurred.    User-based, album-based, and photo-based feeds\n- user: Feed includes entries representing users.",
      "enum": [
        "album",
        "photo",
        "comment",
        "tag",
        "user"
      ]
    },
    "access": {
      "type": "string",
      "description": "Visibility parameter.\nApplicable values:\n- all: Shows all data, both public and private. Requires authentication. Default for the owner, and only the owner can specify this value.\n- private: Shows only private data.    Requires authentication. Only the owner can specify this value.\n- public: Shows only public data. Does not require authentication. Most often used by an authenticated user to see only the publicly visible photos, corresponding to \"View My Public Gallery\" in the Picasa Web Albums GUI.\n- visible: Shows all data the user has access to, including both all public photos or albums and any photos or albums that the owner has explicitly given the authenticated user rights to (using ACLs).   Does not require authentication. Default for unauthenticated requests and for non-owners. For unauthenticated requests, this is the same as public. For authenticated non-owners, this returns the data that the owner has given them access to. For authenticated requests from the owner, this is the same as all.",
      "enum": [
        "all",
        "private",
        "public",
        "visible"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.\nApplicable values:\n- rss: returns an RSS 2.0 result feed (for reads only). When you request data from a service in RSS format, the service supplies a feed (or other representation of the resource) in RSS format. If there's no equivalent RSS property for a given Data API property, the service uses the Atom property, labeling it with an appropriate namespace to indicate that it's an extension to RSS.\n- json: returns a JSON representation of the feed. More information\n- json-in-script: Requests a response that wraps JSON in a script tag. More information\n- atom-in-script: Requests an Atom response that wraps an XML string in a script tag.\n- rss-in-script: Requests an RSS response that wraps an XML string in a script tag.\n- atom-service: Requests an Atom service document that describes the feed.",
      "enum": [
        "rss",
        "json",
        "json-in-script",
        "atom-in-script",
        "rss-in-script",
        "atom-service"
      ]
    },
    "bbox": {
      "type": "string",
      "description": "Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north."
    },
    "fields": {
      "type": "string",
      "description": "Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.\nFor example:\nhttp://www.example.com/feeds?fields=link,entry(@gd:etag,id,updated,link[@rel='edit']))\nWhen it receives this request, the server returns a response that contains only only link and entry elements for the feed. In addition, the entry elements returned are partial entries that contain only ETag, ID, updated, and edit link relations.\nThe fields value must be URL encoded, as with all query parameter values. This parameter is currently an experimental feature."
    },
    "imgmax": {
      "type": "string",
      "description": "Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below."
    },
    "l": {
      "type": "string",
      "description": "Named search of geo data. Searches for data in the named location. An example location would be London."
    },
    "max-results": {
      "type": "string",
      "description": "Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed."
    },
    "prettyprint": {
      "type": "string",
      "description": "Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false"
    },
    "start-index": {
      "type": "string",
      "description": "1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries."
    },
    "tag": {
      "type": "string",
      "description": "Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag."
    },
    "thumbsize": {
      "type": "string",
      "description": "Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below."
    }
  },
  "additionalProperties": false,
  "required": [
    "GData-Version",
    "Content-Type",
    "userID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: feed.api.user.userID.albumid.albumID.get
Searches for all photos in albumID belonging to userID that are tagged with the specified comma-separated tags.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GData-Version": {
      "type": "string",
      "description": "The API version. Current version is 2."
    },
    "userID": {
      "type": "string",
      "description": "The Picasa User ID. The string \"default\" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used."
    },
    "albumID": {
      "type": "string",
      "description": "The album ID."
    },
    "kind": {
      "type": "string",
      "description": "Picasa Web Albums-specific query parameter for kind queries.\nApplicable values:\n- album: Feed includes some or all of the albums the specified user has in their gallery. Which albums are returned depends on the visibility value specified.   User-based feed\n- photo: Feed includes the photos in an album (album-based), recent photos uploaded by a user (user-based) or photos uploaded by all users (community search).   Album-based, user-based and community search feeds\n- comment: Feed includes the comments that have been made on a photo.  Photo-based and user-based feeds\n- tag: Includes all tags associated with the specified user, album, or photo. For user-based and album-based feeds, the tags include a weight value indicating how often they occurred.    User-based, album-based, and photo-based feeds\n- user: Feed includes entries representing users.",
      "enum": [
        "album",
        "photo",
        "comment",
        "tag",
        "user"
      ]
    },
    "access": {
      "type": "string",
      "description": "Visibility parameter.\nApplicable values:\n- all: Shows all data, both public and private. Requires authentication. Default for the owner, and only the owner can specify this value.\n- private: Shows only private data.    Requires authentication. Only the owner can specify this value.\n- public: Shows only public data. Does not require authentication. Most often used by an authenticated user to see only the publicly visible photos, corresponding to \"View My Public Gallery\" in the Picasa Web Albums GUI.\n- visible: Shows all data the user has access to, including both all public photos or albums and any photos or albums that the owner has explicitly given the authenticated user rights to (using ACLs).   Does not require authentication. Default for unauthenticated requests and for non-owners. For unauthenticated requests, this is the same as public. For authenticated non-owners, this returns the data that the owner has given them access to. For authenticated requests from the owner, this is the same as all.",
      "enum": [
        "all",
        "private",
        "public",
        "visible"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.\nApplicable values:\n- rss: returns an RSS 2.0 result feed (for reads only). When you request data from a service in RSS format, the service supplies a feed (or other representation of the resource) in RSS format. If there's no equivalent RSS property for a given Data API property, the service uses the Atom property, labeling it with an appropriate namespace to indicate that it's an extension to RSS.\n- json: returns a JSON representation of the feed. More information\n- json-in-script: Requests a response that wraps JSON in a script tag. More information\n- atom-in-script: Requests an Atom response that wraps an XML string in a script tag.\n- rss-in-script: Requests an RSS response that wraps an XML string in a script tag.\n- atom-service: Requests an Atom service document that describes the feed.",
      "enum": [
        "rss",
        "json",
        "json-in-script",
        "atom-in-script",
        "rss-in-script",
        "atom-service"
      ]
    },
    "bbox": {
      "type": "string",
      "description": "Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north."
    },
    "fields": {
      "type": "string",
      "description": "Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.\nFor example:\nhttp://www.example.com/feeds?fields=link,entry(@gd:etag,id,updated,link[@rel='edit']))\nWhen it receives this request, the server returns a response that contains only only link and entry elements for the feed. In addition, the entry elements returned are partial entries that contain only ETag, ID, updated, and edit link relations.\nThe fields value must be URL encoded, as with all query parameter values. This parameter is currently an experimental feature."
    },
    "imgmax": {
      "type": "string",
      "description": "Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below."
    },
    "l": {
      "type": "string",
      "description": "Named search of geo data. Searches for data in the named location. An example location would be London."
    },
    "max-results": {
      "type": "string",
      "description": "Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed."
    },
    "prettyprint": {
      "type": "string",
      "description": "Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false"
    },
    "start-index": {
      "type": "string",
      "description": "1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries."
    },
    "tag": {
      "type": "string",
      "description": "Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag."
    },
    "thumbsize": {
      "type": "string",
      "description": "Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below."
    }
  },
  "additionalProperties": false,
  "required": [
    "GData-Version",
    "userID",
    "albumID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: feed.api.user.userID.albumid.albumID.post
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GData-Version": {
      "type": "string",
      "description": "The API version. Current version is 2."
    },
    "Content-Type": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "multipart/related; boundary=\"END_OF_PART\"",
        "image/bmp",
        "image/gif",
        "image/jpeg",
        "image/png",
        "video/3gpp",
        "video/avi",
        "video/quicktime",
        "video/mp4",
        "video/mpeg",
        "video/mpeg4",
        "video/msvideo",
        "video/x-ms-asf",
        "video/x-ms-wmv",
        "video/x-msvideo"
      ]
    },
    "MIME-version": {
      "type": "string",
      "description": "MIME version."
    },
    "Slug": {
      "type": "string",
      "description": "When posting a photo without metadata, one could specify a filename for Picasa Web Albums to use for the photo using this parameter. Not specifying a Slug causes the server to use a default title for the image. When posting with metadata, use the <title> element within the request body for the filename you want to use for the image."
    },
    "userID": {
      "type": "string",
      "description": "The Picasa User ID. The string \"default\" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used."
    },
    "albumID": {
      "type": "string",
      "description": "The album ID."
    },
    "kind": {
      "type": "string",
      "description": "Picasa Web Albums-specific query parameter for kind queries.\nApplicable values:\n- album: Feed includes some or all of the albums the specified user has in their gallery. Which albums are returned depends on the visibility value specified.   User-based feed\n- photo: Feed includes the photos in an album (album-based), recent photos uploaded by a user (user-based) or photos uploaded by all users (community search).   Album-based, user-based and community search feeds\n- comment: Feed includes the comments that have been made on a photo.  Photo-based and user-based feeds\n- tag: Includes all tags associated with the specified user, album, or photo. For user-based and album-based feeds, the tags include a weight value indicating how often they occurred.    User-based, album-based, and photo-based feeds\n- user: Feed includes entries representing users.",
      "enum": [
        "album",
        "photo",
        "comment",
        "tag",
        "user"
      ]
    },
    "access": {
      "type": "string",
      "description": "Visibility parameter.\nApplicable values:\n- all: Shows all data, both public and private. Requires authentication. Default for the owner, and only the owner can specify this value.\n- private: Shows only private data.    Requires authentication. Only the owner can specify this value.\n- public: Shows only public data. Does not require authentication. Most often used by an authenticated user to see only the publicly visible photos, corresponding to \"View My Public Gallery\" in the Picasa Web Albums GUI.\n- visible: Shows all data the user has access to, including both all public photos or albums and any photos or albums that the owner has explicitly given the authenticated user rights to (using ACLs).   Does not require authentication. Default for unauthenticated requests and for non-owners. For unauthenticated requests, this is the same as public. For authenticated non-owners, this returns the data that the owner has given them access to. For authenticated requests from the owner, this is the same as all.",
      "enum": [
        "all",
        "private",
        "public",
        "visible"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.\nApplicable values:\n- rss: returns an RSS 2.0 result feed (for reads only). When you request data from a service in RSS format, the service supplies a feed (or other representation of the resource) in RSS format. If there's no equivalent RSS property for a given Data API property, the service uses the Atom property, labeling it with an appropriate namespace to indicate that it's an extension to RSS.\n- json: returns a JSON representation of the feed. More information\n- json-in-script: Requests a response that wraps JSON in a script tag. More information\n- atom-in-script: Requests an Atom response that wraps an XML string in a script tag.\n- rss-in-script: Requests an RSS response that wraps an XML string in a script tag.\n- atom-service: Requests an Atom service document that describes the feed.",
      "enum": [
        "rss",
        "json",
        "json-in-script",
        "atom-in-script",
        "rss-in-script",
        "atom-service"
      ]
    },
    "bbox": {
      "type": "string",
      "description": "Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north."
    },
    "fields": {
      "type": "string",
      "description": "Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.\nFor example:\nhttp://www.example.com/feeds?fields=link,entry(@gd:etag,id,updated,link[@rel='edit']))\nWhen it receives this request, the server returns a response that contains only only link and entry elements for the feed. In addition, the entry elements returned are partial entries that contain only ETag, ID, updated, and edit link relations.\nThe fields value must be URL encoded, as with all query parameter values. This parameter is currently an experimental feature."
    },
    "imgmax": {
      "type": "string",
      "description": "Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below."
    },
    "l": {
      "type": "string",
      "description": "Named search of geo data. Searches for data in the named location. An example location would be London."
    },
    "max-results": {
      "type": "string",
      "description": "Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed."
    },
    "prettyprint": {
      "type": "string",
      "description": "Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false"
    },
    "start-index": {
      "type": "string",
      "description": "1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries."
    },
    "tag": {
      "type": "string",
      "description": "Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag."
    },
    "thumbsize": {
      "type": "string",
      "description": "Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below."
    }
  },
  "additionalProperties": false,
  "required": [
    "GData-Version",
    "Content-Type",
    "userID",
    "albumID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: entry.api.user.userID.albumid.albumID.put
Modifies an album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GData-Version": {
      "type": "string",
      "description": "The API version. Current version is 2."
    },
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "If-Match": {
      "type": "string",
      "description": "To make sure that your update doesn't overwrite another client's changes, include an HTTP If-Match header that contains the original album's ETag value. You can determine the original album's ETag value by examining the <entry> element's gd:etag attribute. If you want to update the album regardless of whether someone else has updated it since you retrieved it, then use If-Match: * and don't include the ETag."
    },
    "userID": {
      "type": "string",
      "description": "The Picasa User ID. The string \"default\" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used."
    },
    "albumID": {
      "type": "string",
      "description": "The album ID."
    },
    "tok": {
      "type": "string",
      "description": "Authorization Key."
    },
    "authkey": {
      "type": "string",
      "description": "Authorization Key."
    }
  },
  "additionalProperties": false,
  "required": [
    "GData-Version",
    "Content-Type",
    "If-Match",
    "userID",
    "albumID",
    "tok",
    "authkey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: entry.api.user.userID.albumid.albumID.delete
Deletes an album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GData-Version": {
      "type": "string",
      "description": "The API version. Current version is 2."
    },
    "If-Match": {
      "type": "string",
      "description": "If you want to make sure that you don't delete an album that has been changed by another client since you retrieved it, include an HTTP If-Match header that contains the original album's ETag value. You can determine the original album's ETag value by examining the <entry> element's gd:etag attribute. If you want to delete the album regardless of whether someone else has updated it since you retrieved it, then use If-Match: * and don't include the ETag. (In this case, you don't need to retrieve the album before deleting it.)"
    },
    "userID": {
      "type": "string",
      "description": "The Picasa User ID. The string \"default\" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used."
    },
    "albumID": {
      "type": "string",
      "description": "The album ID."
    },
    "tok": {
      "type": "string",
      "description": "Authorization Key."
    },
    "authkey": {
      "type": "string",
      "description": "Authorization Key."
    }
  },
  "additionalProperties": false,
  "required": [
    "GData-Version",
    "If-Match",
    "userID",
    "albumID",
    "tok",
    "authkey"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: feed.api.user.userID.albumid.albumID.photoid.photoID.get
Retrieves a feed of the comments on the photo identified by photoID, inside of the album with ID albumID, owned by the user userID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GData-Version": {
      "type": "string",
      "description": "The API version. Current version is 2."
    },
    "userID": {
      "type": "string",
      "description": "The Picasa User ID. The string \"default\" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used."
    },
    "albumID": {
      "type": "string",
      "description": "The album ID."
    },
    "photoID": {
      "type": "string",
      "description": "The photo ID."
    },
    "kind": {
      "type": "string",
      "description": "Picasa Web Albums-specific query parameter for kind queries.\nApplicable values:\n- album: Feed includes some or all of the albums the specified user has in their gallery. Which albums are returned depends on the visibility value specified.   User-based feed\n- photo: Feed includes the photos in an album (album-based), recent photos uploaded by a user (user-based) or photos uploaded by all users (community search).   Album-based, user-based and community search feeds\n- comment: Feed includes the comments that have been made on a photo.  Photo-based and user-based feeds\n- tag: Includes all tags associated with the specified user, album, or photo. For user-based and album-based feeds, the tags include a weight value indicating how often they occurred.    User-based, album-based, and photo-based feeds\n- user: Feed includes entries representing users.",
      "enum": [
        "album",
        "photo",
        "comment",
        "tag",
        "user"
      ]
    },
    "access": {
      "type": "string",
      "description": "Visibility parameter.\nApplicable values:\n- all: Shows all data, both public and private. Requires authentication. Default for the owner, and only the owner can specify this value.\n- private: Shows only private data.    Requires authentication. Only the owner can specify this value.\n- public: Shows only public data. Does not require authentication. Most often used by an authenticated user to see only the publicly visible photos, corresponding to \"View My Public Gallery\" in the Picasa Web Albums GUI.\n- visible: Shows all data the user has access to, including both all public photos or albums and any photos or albums that the owner has explicitly given the authenticated user rights to (using ACLs).   Does not require authentication. Default for unauthenticated requests and for non-owners. For unauthenticated requests, this is the same as public. For authenticated non-owners, this returns the data that the owner has given them access to. For authenticated requests from the owner, this is the same as all.",
      "enum": [
        "all",
        "private",
        "public",
        "visible"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.\nApplicable values:\n- rss: returns an RSS 2.0 result feed (for reads only). When you request data from a service in RSS format, the service supplies a feed (or other representation of the resource) in RSS format. If there's no equivalent RSS property for a given Data API property, the service uses the Atom property, labeling it with an appropriate namespace to indicate that it's an extension to RSS.\n- json: returns a JSON representation of the feed. More information\n- json-in-script: Requests a response that wraps JSON in a script tag. More information\n- atom-in-script: Requests an Atom response that wraps an XML string in a script tag.\n- rss-in-script: Requests an RSS response that wraps an XML string in a script tag.\n- atom-service: Requests an Atom service document that describes the feed.",
      "enum": [
        "rss",
        "json",
        "json-in-script",
        "atom-in-script",
        "rss-in-script",
        "atom-service"
      ]
    },
    "bbox": {
      "type": "string",
      "description": "Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north."
    },
    "fields": {
      "type": "string",
      "description": "Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.\nFor example:\nhttp://www.example.com/feeds?fields=link,entry(@gd:etag,id,updated,link[@rel='edit']))\nWhen it receives this request, the server returns a response that contains only only link and entry elements for the feed. In addition, the entry elements returned are partial entries that contain only ETag, ID, updated, and edit link relations.\nThe fields value must be URL encoded, as with all query parameter values. This parameter is currently an experimental feature."
    },
    "imgmax": {
      "type": "string",
      "description": "Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below."
    },
    "l": {
      "type": "string",
      "description": "Named search of geo data. Searches for data in the named location. An example location would be London."
    },
    "max-results": {
      "type": "string",
      "description": "Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed."
    },
    "prettyprint": {
      "type": "string",
      "description": "Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false"
    },
    "start-index": {
      "type": "string",
      "description": "1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries."
    },
    "tag": {
      "type": "string",
      "description": "Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag."
    },
    "thumbsize": {
      "type": "string",
      "description": "Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below."
    }
  },
  "additionalProperties": false,
  "required": [
    "GData-Version",
    "userID",
    "albumID",
    "photoID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: feed.api.user.userID.albumid.albumID.photoid.photoID.post
Adds a comment to the photo identified by photoID in the album with ID albumID owned by userID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GData-Version": {
      "type": "string",
      "description": "The API version. Current version is 2."
    },
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "userID": {
      "type": "string",
      "description": "The Picasa User ID. The string \"default\" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used."
    },
    "albumID": {
      "type": "string",
      "description": "The album ID."
    },
    "photoID": {
      "type": "string",
      "description": "The photo ID."
    },
    "kind": {
      "type": "string",
      "description": "Picasa Web Albums-specific query parameter for kind queries.\nApplicable values:\n- album: Feed includes some or all of the albums the specified user has in their gallery. Which albums are returned depends on the visibility value specified.   User-based feed\n- photo: Feed includes the photos in an album (album-based), recent photos uploaded by a user (user-based) or photos uploaded by all users (community search).   Album-based, user-based and community search feeds\n- comment: Feed includes the comments that have been made on a photo.  Photo-based and user-based feeds\n- tag: Includes all tags associated with the specified user, album, or photo. For user-based and album-based feeds, the tags include a weight value indicating how often they occurred.    User-based, album-based, and photo-based feeds\n- user: Feed includes entries representing users.",
      "enum": [
        "album",
        "photo",
        "comment",
        "tag",
        "user"
      ]
    },
    "access": {
      "type": "string",
      "description": "Visibility parameter.\nApplicable values:\n- all: Shows all data, both public and private. Requires authentication. Default for the owner, and only the owner can specify this value.\n- private: Shows only private data.    Requires authentication. Only the owner can specify this value.\n- public: Shows only public data. Does not require authentication. Most often used by an authenticated user to see only the publicly visible photos, corresponding to \"View My Public Gallery\" in the Picasa Web Albums GUI.\n- visible: Shows all data the user has access to, including both all public photos or albums and any photos or albums that the owner has explicitly given the authenticated user rights to (using ACLs).   Does not require authentication. Default for unauthenticated requests and for non-owners. For unauthenticated requests, this is the same as public. For authenticated non-owners, this returns the data that the owner has given them access to. For authenticated requests from the owner, this is the same as all.",
      "enum": [
        "all",
        "private",
        "public",
        "visible"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.\nApplicable values:\n- rss: returns an RSS 2.0 result feed (for reads only). When you request data from a service in RSS format, the service supplies a feed (or other representation of the resource) in RSS format. If there's no equivalent RSS property for a given Data API property, the service uses the Atom property, labeling it with an appropriate namespace to indicate that it's an extension to RSS.\n- json: returns a JSON representation of the feed. More information\n- json-in-script: Requests a response that wraps JSON in a script tag. More information\n- atom-in-script: Requests an Atom response that wraps an XML string in a script tag.\n- rss-in-script: Requests an RSS response that wraps an XML string in a script tag.\n- atom-service: Requests an Atom service document that describes the feed.",
      "enum": [
        "rss",
        "json",
        "json-in-script",
        "atom-in-script",
        "rss-in-script",
        "atom-service"
      ]
    },
    "bbox": {
      "type": "string",
      "description": "Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north."
    },
    "fields": {
      "type": "string",
      "description": "Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.\nFor example:\nhttp://www.example.com/feeds?fields=link,entry(@gd:etag,id,updated,link[@rel='edit']))\nWhen it receives this request, the server returns a response that contains only only link and entry elements for the feed. In addition, the entry elements returned are partial entries that contain only ETag, ID, updated, and edit link relations.\nThe fields value must be URL encoded, as with all query parameter values. This parameter is currently an experimental feature."
    },
    "imgmax": {
      "type": "string",
      "description": "Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below."
    },
    "l": {
      "type": "string",
      "description": "Named search of geo data. Searches for data in the named location. An example location would be London."
    },
    "max-results": {
      "type": "string",
      "description": "Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed."
    },
    "prettyprint": {
      "type": "string",
      "description": "Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false"
    },
    "start-index": {
      "type": "string",
      "description": "1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries."
    },
    "tag": {
      "type": "string",
      "description": "Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag."
    },
    "thumbsize": {
      "type": "string",
      "description": "Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below."
    }
  },
  "additionalProperties": false,
  "required": [
    "GData-Version",
    "Content-Type",
    "userID",
    "albumID",
    "photoID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: media.api.user.userID.albumid.albumID.photoid.photoID.put
Replaces the binary image data for a photo. Include in the request body the replacement image data, in the same format that you used to do the POST without metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GData-Version": {
      "type": "string",
      "description": "The API version. Current version is 2."
    },
    "Content-Type": {
      "type": "string",
      "description": "Content type.",
      "enum": [
        "image/bmp",
        "image/gif",
        "image/jpeg",
        "image/png"
      ]
    },
    "If-Match": {
      "type": "string",
      "description": "To make sure that your update doesn't overwrite another client's changes, include an HTTP If-Match header that contains the original album's ETag value. You can determine the original album's ETag value by examining the <entry> element's gd:etag attribute. If you want to update the album regardless of whether someone else has updated it since you retrieved it, then use If-Match: * and don't include the ETag."
    }
  },
  "additionalProperties": false,
  "required": [
    "GData-Version",
    "Content-Type",
    "If-Match"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: entry.api.user.userID.albumid.albumID.photoid.photoID.put
Replaces only the photo's metadata (and not the image itself). Must provide in the request body the updated metadata, in the form of an <atom:entry> element containing image metadata. The photo itself is not re-sent to the server.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "If-Match": {
      "type": "string",
      "description": "To make sure that your update doesn't overwrite another client's changes, include an HTTP If-Match header that contains the original album's ETag value. You can determine the original album's ETag value by examining the <entry> element's gd:etag attribute. If you want to update the album regardless of whether someone else has updated it since you retrieved it, then use If-Match: * and don't include the ETag."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "If-Match"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: entry.api.user.userID.albumid.albumID.photoid.photoID.delete
Deletes a photo and its metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "If-Match": {
      "type": "string",
      "description": "To make sure that your update doesn't overwrite another client's changes, include an HTTP If-Match header that contains the original album's ETag value. You can determine the original album's ETag value by examining the <entry> element's gd:etag attribute. If you want to update the album regardless of whether someone else has updated it since you retrieved it, then use If-Match: * and don't include the ETag."
    }
  },
  "additionalProperties": false,
  "required": [
    "If-Match"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: entry.api.user.userID.albumid.albumID.photoid.photoID.tag.tagID.delete
Deletes the tag tagID on the photo identified by photoID, inside of the album with ID albumID, owned by the user userID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GData-Version": {
      "type": "string",
      "description": "The API version. Current version is 2."
    },
    "userID": {
      "type": "string",
      "description": "The Picasa User ID. The string \"default\" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used."
    },
    "albumID": {
      "type": "string",
      "description": "The album ID."
    },
    "photoID": {
      "type": "string",
      "description": "The photo ID."
    },
    "tagID": {
      "type": "string",
      "description": "The tag ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "GData-Version",
    "userID",
    "albumID",
    "photoID",
    "tagID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: entry.api.user.userID.albumid.albumID.photoid.photoID.commentid.commentID.delete
Deletes a comment commentID on the photo identified by photoID, inside of the album with ID albumID, owned by the user userID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GData-Version": {
      "type": "string",
      "description": "The API version. Current version is 2."
    },
    "userID": {
      "type": "string",
      "description": "The Picasa User ID. The string \"default\" can be used in place of a real user ID, in which case the ID of the user whose credentials authenticated the request is used."
    },
    "albumID": {
      "type": "string",
      "description": "The album ID."
    },
    "photoID": {
      "type": "string",
      "description": "The photo ID."
    },
    "tagID": {
      "type": "string",
      "description": "The tag ID."
    },
    "commentID": {
      "type": "string",
      "description": "The comment ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "GData-Version",
    "userID",
    "albumID",
    "photoID",
    "tagID",
    "commentID"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: feed.api.all.get
Searches photos uploaded by other users, as long as they are in a public album.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "GData-Version": {
      "type": "string",
      "description": "The API version. Current version is 2."
    },
    "q": {
      "type": "string",
      "description": "Full-text query string. When creating a query, list search terms separated by spaces, in the form q=term1 term2 term3. (As with all of the query parameter values, the spaces must be URL encoded.) The service returns all entries that match all of the search terms (like using AND between terms). Like Google's web search, a service searches on complete words (and related words with the same stem), not substrings.\nTo search for an exact phrase, enclose the phrase in quotation marks: q=\"exact phrase\". To exclude entries that match a given term, use the form q=-term. The search is case-insensitive.\nExample: to search for all entries that contain the exact phrase \"Elizabeth Bennet\" and the word \"Darcy\" but don't contain the word \"Austen\", use the following query: ?q=\"Elizabeth Bennet\" Darcy -Austen"
    },
    "kind": {
      "type": "string",
      "description": "Picasa Web Albums-specific query parameter for kind queries.\nApplicable values:\n- album: Feed includes some or all of the albums the specified user has in their gallery. Which albums are returned depends on the visibility value specified.   User-based feed\n- photo: Feed includes the photos in an album (album-based), recent photos uploaded by a user (user-based) or photos uploaded by all users (community search).   Album-based, user-based and community search feeds\n- comment: Feed includes the comments that have been made on a photo.  Photo-based and user-based feeds\n- tag: Includes all tags associated with the specified user, album, or photo. For user-based and album-based feeds, the tags include a weight value indicating how often they occurred.    User-based, album-based, and photo-based feeds\n- user: Feed includes entries representing users.",
      "enum": [
        "album",
        "photo",
        "comment",
        "tag",
        "user"
      ]
    },
    "access": {
      "type": "string",
      "description": "Visibility parameter.\nApplicable values:\n- all: Shows all data, both public and private. Requires authentication. Default for the owner, and only the owner can specify this value.\n- private: Shows only private data.    Requires authentication. Only the owner can specify this value.\n- public: Shows only public data. Does not require authentication. Most often used by an authenticated user to see only the publicly visible photos, corresponding to \"View My Public Gallery\" in the Picasa Web Albums GUI.\n- visible: Shows all data the user has access to, including both all public photos or albums and any photos or albums that the owner has explicitly given the authenticated user rights to (using ACLs).   Does not require authentication. Default for unauthenticated requests and for non-owners. For unauthenticated requests, this is the same as public. For authenticated non-owners, this returns the data that the owner has given them access to. For authenticated requests from the owner, this is the same as all.",
      "enum": [
        "all",
        "private",
        "public",
        "visible"
      ]
    },
    "alt": {
      "type": "string",
      "description": "Alternative representation type. If you don't specify an alt parameter, the service returns an Atom feed. This is equivalent to alt=atom.\nApplicable values:\n- rss: returns an RSS 2.0 result feed (for reads only). When you request data from a service in RSS format, the service supplies a feed (or other representation of the resource) in RSS format. If there's no equivalent RSS property for a given Data API property, the service uses the Atom property, labeling it with an appropriate namespace to indicate that it's an extension to RSS.\n- json: returns a JSON representation of the feed. More information\n- json-in-script: Requests a response that wraps JSON in a script tag. More information\n- atom-in-script: Requests an Atom response that wraps an XML string in a script tag.\n- rss-in-script: Requests an RSS response that wraps an XML string in a script tag.\n- atom-service: Requests an Atom service document that describes the feed.",
      "enum": [
        "rss",
        "json",
        "json-in-script",
        "atom-in-script",
        "rss-in-script",
        "atom-service"
      ]
    },
    "bbox": {
      "type": "string",
      "description": "Bounding-box search of geo coordinates. Searches for data in the specified bounding box. The coordinates should be in the following order: west, south, east, north."
    },
    "fields": {
      "type": "string",
      "description": "Response filter Returns only the requested portions of the resource representation, for improved performance and efficiency, rather than the full resource representation.\nFor example:\nhttp://www.example.com/feeds?fields=link,entry(@gd:etag,id,updated,link[@rel='edit']))\nWhen it receives this request, the server returns a response that contains only only link and entry elements for the feed. In addition, the entry elements returned are partial entries that contain only ETag, ID, updated, and edit link relations.\nThe fields value must be URL encoded, as with all query parameter values. This parameter is currently an experimental feature."
    },
    "imgmax": {
      "type": "string",
      "description": "Image size parameter. Valid with album or photo kinds; specifies what image size to use for the media:content. Only a single value may be specified. Refer to the list of valid values below."
    },
    "l": {
      "type": "string",
      "description": "Named search of geo data. Searches for data in the named location. An example location would be London."
    },
    "max-results": {
      "type": "string",
      "description": "Maximum number of results to be retrieved. For any service that has a default max-results value (to limit default feed size), you can specify a very large number if you want to receive the entire feed."
    },
    "prettyprint": {
      "type": "string",
      "description": "Returns an XML response with identations and line breaks. If prettyprint=true, the XML returned by the server will be human readable (pretty printed). Default: false"
    },
    "start-index": {
      "type": "string",
      "description": "1-based index of the first result to be retrieved. Note that this isn't a general cursoring mechanism. If you first send a query with ?start-index=1&max-results=10 and then send another query with ?start-index=11&max-results=10, the service cannot guarantee that the results are equivalent to ?start-index=1&max-results=20, because insertions and deletions could have taken place in between the two queries."
    },
    "tag": {
      "type": "string",
      "description": "Tag filter parameter. Filters photos in the user-based and album-based feeds by the specified tag."
    },
    "thumbsize": {
      "type": "string",
      "description": "Thumbnail size parameter. Valid with album or photo kinds; specifies what image size to use for thumbnails. Multiple values may be specified using a comma-delimited list. If multiple values are specified, multiple media:thumbnail elements will be returned in the feed. Refer to the list of valid values below."
    }
  },
  "additionalProperties": false,
  "required": [
    "GData-Version",
    "q"
  ]
}
```
### Output Schema
```json
{}
```
