# @datafire/vocadb

Client library for VocaDB

## Installation and Usage
```bash
npm install --save @datafire/vocadb
```
```js
let vocadb = require('@datafire/vocadb').create();

vocadb.UserApi_GetNames({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### ActivityEntryApi_GetList
Entries are always returned sorted from newest to oldest.
            Activity for deleted entries is not returned.


```js
vocadb.ActivityEntryApi_GetList({}, context)
```

#### Input
* input `object`
  * before `string`: Filter to return activity entries only before this date. Optional, by default no filter.
  * since `string`: Filter to return activity entries only after this date. Optional, by default no filter.
  * userId `integer`: Filter by user Id. Optional, by default no filter.
  * editEvent `string` (values: Created, Updated, Deleted, Restored): Filter by entry edit event (either Created or Updated). Optional, by default no filter.
  * maxResults `integer`: Maximum number of results to return. Default 50. Maximum value 500.
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * fields `string` (values: None, ArchivedVersion, Entry): Optional fields.
  * entryFields `string` (values: None, AdditionalNames, Description, MainPicture, Names, PVs, Tags, WebLinks): Optional fields for entries.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference.

#### Output
* output [PartialFindResult[ActivityEntryForApiContract]](#partialfindresult[activityentryforapicontract])

### AlbumApi_GetList
Gets a page of albums.


```js
vocadb.AlbumApi_GetList({}, context)
```

#### Input
* input `object`
  * query `string`: Album name query (optional).
  * discTypes `string` (values: Unknown, Album, Single, EP, SplitAlbum, Compilation, Video, Artbook, Other): Disc type. By default nothing. Possible values are Album, Single, EP, SplitAlbum, Compilation, Video, Other. Note: only one type supported for now.
  * tagName `array`: Filter by tag name (optional). This filter can be specified multiple times.
  * tagId `array`: Filter by tag Id (optional). This filter can be specified multiple times.
  * childTags `boolean`: Include child tags, if the tags being filtered by have any.
  * artistId `array`: Filter by artist Id (optional).
  * artistParticipationStatus `string` (values: Everything, OnlyMainAlbums, OnlyCollaborations): Filter by artist participation status. Only valid if artistId is specified.
  * childVoicebanks `boolean`: Include child voicebanks, if the artist being filtered by has any.
  * includeMembers `boolean`: Include members of groups. This applies if {artistId} is a group.
  * barcode `string`: Filter by album barcode (optional).
  * status `string` (values: Draft, Finished, Approved, Locked): Filter by entry status (optional).
  * releaseDateAfter `string`: Filter by albums whose release date is after this date (inclusive).
  * releaseDateBefore `string`: Filter by albums whose release date is before this date (exclusive).
  * advancedFilters `array`: List of advanced filters (optional).
  * start `integer`: First item to be retrieved (optional, defaults to 0).
  * maxResults `integer`: Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * sort `string` (values: None, Name, ReleaseDate, ReleaseDateWithNulls, AdditionDate, RatingAverage, RatingTotal, NameThenReleaseDate, CollectionCount): Sort rule (optional, defaults to Name). 
  * preferAccurateMatches `boolean`: Whether the search should prefer accurate matches. 
  * deleted `boolean`: Whether to search for deleted entries. If this is true, only deleted entries will be returned.
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for artist name (optional, defaults to Exact).
  * fields `string` (values: None, AdditionalNames, Artists, Description, Discs, Identifiers, MainPicture, Names, PVs, ReleaseEvent, Tags, Tracks, WebLinks): Optional fields (optional). Possible values are artists, names, pvs, tags, tracks, webLinks.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [PartialFindResult[AlbumForApiContract]](#partialfindresult[albumforapicontract])

### AlbumApi_DeleteComment
Normal users can delete their own comments, moderators can delete all comments.
            Requires login.


```js
vocadb.AlbumApi_DeleteComment({
  "commentId": 0
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: ID of the comment to be deleted.

#### Output
*Output schema unknown*

### AlbumApi_PostEditComment
Normal users can edit their own comments, moderators can edit all comments.
            Requires login.


```js
vocadb.AlbumApi_PostEditComment({
  "commentId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: ID of the comment to be edited.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
*Output schema unknown*

### AlbumApi_GetNames
Gets a list of album names. Ideal for autocomplete boxes.


```js
vocadb.AlbumApi_GetNames({}, context)
```

#### Input
* input `object`
  * query `string`: Text query.
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Name match mode.
  * maxResults `integer`: Maximum number of results.

#### Output
* output `array`
  * items `string`

### AlbumApi_Delete
Deletes an album.


```js
vocadb.AlbumApi_Delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the album to be deleted.
  * notes `string`: Notes.

#### Output
*Output schema unknown*

### AlbumApi_GetOne
Gets an album by Id.


```js
vocadb.AlbumApi_GetOne({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Album Id (required).
  * fields `string` (values: None, AdditionalNames, Artists, Description, Discs, Identifiers, MainPicture, Names, PVs, ReleaseEvent, Tags, Tracks, WebLinks): Optional fields (optional). Possible values are artists, names, pvs, tags, tracks, webLinks.
  * songFields `string` (values: None, AdditionalNames, Albums, Artists, Lyrics, MainPicture, Names, PVs, ReleaseEvent, Tags, ThumbUrl, WebLinks): Optional fields for tracks, if included (optional).
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [AlbumForApiContract](#albumforapicontract)

### AlbumApi_GetComments
Pagination and sorting might be added later.


```js
vocadb.AlbumApi_GetComments({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the album whose comments to load.

#### Output
* output `array`
  * items [CommentForApiContract](#commentforapicontract)

### AlbumApi_PostNewComment
Posts a new comment.


```js
vocadb.AlbumApi_PostNewComment({
  "id": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the album for which to create the comment.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
* output [CommentForApiContract](#commentforapicontract)

### AlbumApi_GetTracks
Gets tracks for an album.


```js
vocadb.AlbumApi_GetTracks({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Album ID (required).
  * fields `string` (values: None, AdditionalNames, Albums, Artists, Lyrics, MainPicture, Names, PVs, ReleaseEvent, Tags, ThumbUrl, WebLinks): List of optional fields (optional). Possible values are Albums, Artists, Names, PVs, Tags, ThumbUrl, WebLinks.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output `array`
  * items [SongInAlbumForApiContract](#songinalbumforapicontract)

### AlbumApi_GetTracksFormatted
Gets tracks for an album formatted using the CSV format string.


```js
vocadb.AlbumApi_GetTracksFormatted({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Album ID.
  * field `array`: Field to be included, for example "featvocalists" or "url". Can be specified multiple times.
  * lang `string` (values: Default, Japanese, Romaji, English): Language preference.

#### Output
* output `array`
  * items `object`

### ArtistApi_GetList
Find artists.


```js
vocadb.ArtistApi_GetList({}, context)
```

#### Input
* input `object`
  * query `string`: Artist name query (optional).
  * artistTypes `string`: Filtered artist type (optional).
  * allowBaseVoicebanks `boolean`: Allow base voicebanks. If false, only root voicebanks will be allowed. Only affects voice synthesizers that can have base voicebanks.
  * tagName `array`: Filter by tag name (optional).
  * tagId `array`: Filter by tag Id (optional). This filter can be specified multiple times.
  * childTags `boolean`: Include child tags, if the tags being filtered by have any.
  * followedByUserId `integer`: Filter by user following the artists. By default there is no filtering.
  * status `string` (values: Draft, Finished, Approved, Locked): Filter by entry status (optional).
  * advancedFilters `array`: List of advanced filters (optional).
  * start `integer`: First item to be retrieved (optional, defaults to 0).
  * maxResults `integer`: Maximum number of results to be loaded (optional, defaults to 10, maximum of 100).
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * sort `string` (values: None, Name, AdditionDate, AdditionDateAsc, ReleaseDate, SongCount, SongRating, FollowerCount): Sort rule (optional, defaults to Name). Possible values are None, Name, AdditionDate, AdditionDateAsc.
  * preferAccurateMatches `boolean`: Whether the search should prefer accurate matches. 
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for artist name (optional, defaults to Exact).
  * fields `string` (values: None, AdditionalNames, ArtistLinks, ArtistLinksReverse, BaseVoicebank, Description, MainPicture, Names, Tags, WebLinks): List of optional fields (optional). Possible values are Description, Groups, Members, Names, Tags, WebLinks.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [PartialFindResult[ArtistForApiContract]](#partialfindresult[artistforapicontract])

### ArtistApi_DeleteComment
Normal users can delete their own comments, moderators can delete all comments.
            Requires login.


```js
vocadb.ArtistApi_DeleteComment({
  "commentId": 0
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: ID of the comment to be deleted.

#### Output
*Output schema unknown*

### ArtistApi_PostEditComment
Normal users can edit their own comments, moderators can edit all comments.
            Requires login.


```js
vocadb.ArtistApi_PostEditComment({
  "commentId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: ID of the comment to be edited.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
*Output schema unknown*

### ArtistApi_GetNames
Gets a list of artist names. Ideal for autocomplete boxes.


```js
vocadb.ArtistApi_GetNames({}, context)
```

#### Input
* input `object`
  * query `string`: Text query.
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Name match mode.
  * maxResults `integer`: Maximum number of results.

#### Output
* output `array`
  * items `string`

### ArtistApi_Delete
Deletes an artist.


```js
vocadb.ArtistApi_Delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the artist to be deleted.
  * notes `string`: Notes.

#### Output
*Output schema unknown*

### ArtistApi_GetOne
Gets an artist by Id.


```js
vocadb.ArtistApi_GetOne({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Artist ID (required).
  * fields `string` (values: None, AdditionalNames, ArtistLinks, ArtistLinksReverse, BaseVoicebank, Description, MainPicture, Names, Tags, WebLinks): List of optional fields (optional). Possible values are Description, Groups, Members, Names, Tags, WebLinks.
  * relations `string` (values: None, LatestAlbums, LatestEvents, LatestSongs, PopularAlbums, PopularSongs, All): List of artist relations (optional). Possible values are LatestAlbums, PopularAlbums, LatestSongs, PopularSongs, All
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [ArtistForApiContract](#artistforapicontract)

### ArtistApi_GetComments
Pagination and sorting might be added later.


```js
vocadb.ArtistApi_GetComments({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the artist whose comments to load.

#### Output
* output `array`
  * items [CommentForApiContract](#commentforapicontract)

### ArtistApi_PostNewComment
Posts a new comment.


```js
vocadb.ArtistApi_PostNewComment({
  "id": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the artist for which to create the comment.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
* output [CommentForApiContract](#commentforapicontract)

### CommentApi_GetComments
Gets a list of comments for an entry.


```js
vocadb.CommentApi_GetComments({
  "entryType": "",
  "entryId": 0
}, context)
```

#### Input
* input `object`
  * entryType **required** `string` (values: Undefined, Album, Artist, DiscussionTopic, PV, ReleaseEvent, ReleaseEventSeries, Song, SongList, Tag, User)
  * entryId **required** `integer`: ID of the entry whose comments to load.

#### Output
* output [PartialFindResult[CommentForApiContract]](#partialfindresult[commentforapicontract])

### CommentApi_PostNewComment
Posts a new comment.


```js
vocadb.CommentApi_PostNewComment({
  "entryType": "",
  "contract": {}
}, context)
```

#### Input
* input `object`
  * entryType **required** `string` (values: Undefined, Album, Artist, DiscussionTopic, PV, ReleaseEvent, ReleaseEventSeries, Song, SongList, Tag, User)
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
* output [CommentForApiContract](#commentforapicontract)

### CommentApi_DeleteComment
Normal users can delete their own comments, moderators can delete all comments.
            Requires login.


```js
vocadb.CommentApi_DeleteComment({
  "entryType": "",
  "commentId": 0
}, context)
```

#### Input
* input `object`
  * entryType **required** `string` (values: Undefined, Album, Artist, DiscussionTopic, PV, ReleaseEvent, ReleaseEventSeries, Song, SongList, Tag, User)
  * commentId **required** `integer`: ID of the comment to be deleted.

#### Output
*Output schema unknown*

### CommentApi_PostEditComment
Normal users can edit their own comments, moderators can edit all comments.
            Requires login.


```js
vocadb.CommentApi_PostEditComment({
  "entryType": "",
  "commentId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * entryType **required** `string` (values: Undefined, Album, Artist, DiscussionTopic, PV, ReleaseEvent, ReleaseEventSeries, Song, SongList, Tag, User)
  * commentId **required** `integer`: ID of the comment to be edited.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
*Output schema unknown*

### DiscussionApi_DeleteComment



```js
vocadb.DiscussionApi_DeleteComment({
  "commentId": 0
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`

#### Output
*Output schema unknown*

### DiscussionApi_PostEditComment



```js
vocadb.DiscussionApi_PostEditComment({
  "commentId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
*Output schema unknown*

### DiscussionApi_GetFolders



```js
vocadb.DiscussionApi_GetFolders({}, context)
```

#### Input
* input `object`
  * fields `string` (values: None, LastTopic, TopicCount)

#### Output
* output `array`
  * items [DiscussionFolderContract](#discussionfoldercontract)

### DiscussionApi_PostNewFolder



```js
vocadb.DiscussionApi_PostNewFolder({
  "contract": {}
}, context)
```

#### Input
* input `object`
  * contract **required** [DiscussionFolderContract](#discussionfoldercontract)

#### Output
* output [DiscussionFolderContract](#discussionfoldercontract)

### DiscussionApi_GetTopicsForFolder



```js
vocadb.DiscussionApi_GetTopicsForFolder({
  "folderId": 0
}, context)
```

#### Input
* input `object`
  * folderId **required** `integer`
  * fields `string` (values: None, Comments, CommentCount, Content, LastComment, All)

#### Output
* output `array`
  * items [DiscussionTopicContract](#discussiontopiccontract)

### DiscussionApi_PostNewTopic



```js
vocadb.DiscussionApi_PostNewTopic({
  "folderId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * folderId **required** `integer`
  * contract **required** [DiscussionTopicContract](#discussiontopiccontract)

#### Output
* output [DiscussionTopicContract](#discussiontopiccontract)

### DiscussionApi_GetTopics



```js
vocadb.DiscussionApi_GetTopics({}, context)
```

#### Input
* input `object`
  * folderId `integer`
  * start `integer`
  * maxResults `integer`
  * getTotalCount `boolean`
  * sort `string` (values: None, Name, DateCreated, LastCommentDate)
  * fields `string` (values: None, Comments, CommentCount, Content, LastComment, All)

#### Output
* output [PartialFindResult[DiscussionTopicContract]](#partialfindresult[discussiontopiccontract])

### DiscussionApi_DeleteTopic



```js
vocadb.DiscussionApi_DeleteTopic({
  "topicId": 0
}, context)
```

#### Input
* input `object`
  * topicId **required** `integer`

#### Output
*Output schema unknown*

### DiscussionApi_GetTopic



```js
vocadb.DiscussionApi_GetTopic({
  "topicId": 0
}, context)
```

#### Input
* input `object`
  * topicId **required** `integer`
  * fields `string` (values: None, Comments, CommentCount, Content, LastComment, All)

#### Output
* output [DiscussionTopicContract](#discussiontopiccontract)

### DiscussionApi_PostEditTopic



```js
vocadb.DiscussionApi_PostEditTopic({
  "topicId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * topicId **required** `integer`
  * contract **required** [DiscussionTopicContract](#discussiontopiccontract)

#### Output
*Output schema unknown*

### DiscussionApi_PostNewComment



```js
vocadb.DiscussionApi_PostNewComment({
  "topicId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * topicId **required** `integer`
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
* output [CommentForApiContract](#commentforapicontract)

### EntryApi_GetList
Find entries.


```js
vocadb.EntryApi_GetList({}, context)
```

#### Input
* input `object`
  * query `string`: Entry name query (optional).
  * tagName `array`: Filter by tag name (optional).
  * tagId `array`: Filter by tag Id (optional).
  * childTags `boolean`: Include child tags, if the tags being filtered by have any.
  * status `string` (values: Draft, Finished, Approved, Locked): Filter by entry status (optional).
  * start `integer`: First item to be retrieved (optional, defaults to 0).
  * maxResults `integer`: Maximum number of results to be loaded (optional, defaults to 10, maximum of 30).
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * sort `string` (values: None, Name, AdditionDate, ActivityDate): Sort rule (optional, defaults to Name). Possible values are None, Name, AdditionDate.
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for entry name (optional, defaults to Exact).
  * fields `string` (values: None, AdditionalNames, Description, MainPicture, Names, PVs, Tags, WebLinks): List of optional fields (optional). Possible values are Description, MainPicture, Names, Tags, WebLinks.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [PartialFindResult[EntryForApiContract]](#partialfindresult[entryforapicontract])

### EntryApi_GetNames
Gets a list of entry names. Ideal for autocomplete boxes.


```js
vocadb.EntryApi_GetNames({}, context)
```

#### Input
* input `object`
  * query `string`: Text query.
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Name match mode.
  * maxResults `integer`: Maximum number of results.

#### Output
* output `array`
  * items `string`

### PVApi_GetList
Gets a list of PVs for songs.


```js
vocadb.PVApi_GetList({}, context)
```

#### Input
* input `object`
  * author `string`: Uploader name (optional).
  * maxResults `integer`: Maximum number of results.
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [PartialFindResult[PVForSongContract]](#partialfindresult[pvforsongcontract])

### ReleaseEventSeriesApi_GetList
Gets a page of event series.


```js
vocadb.ReleaseEventSeriesApi_GetList({}, context)
```

#### Input
* input `object`
  * query `string`: Text query.
  * start `integer`: First item to be retrieved (optional).
  * maxResults `integer`: Maximum number of results to be loaded (optional).
  * getTotalCount `boolean`: Whether to load total number of items (optional).
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for event name (optional).
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [PartialFindResult[ReleaseEventSeriesContract]](#partialfindresult[releaseeventseriescontract])

### ReleaseEventSeriesApi_Delete
Deletes an event series.


```js
vocadb.ReleaseEventSeriesApi_Delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the series to be deleted.
  * notes `string`: Notes.

#### Output
*Output schema unknown*

### ReleaseEventApi_GetList
Gets a page of events.


```js
vocadb.ReleaseEventApi_GetList({}, context)
```

#### Input
* input `object`
  * query `string`: Event name query (optional).
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for event name (optional, defaults to Auto).
  * seriesId `integer`: Filter by series Id.
  * afterDate `string`: Filter by events after this date (inclusive).
  * beforeDate `string`: Filter by events before this date (exclusive).
  * category `string` (values: Unspecified, AlbumRelease, Anniversary, Club, Concert, Contest, Convention, Other): Filter by event category.
  * userCollectionId `integer`: Filter to include only events in user's events (interested or attending).
  * tagId `array`: Filter by one or more tag Ids (optional).
  * childTags `boolean`: Include child tags, if the tags being filtered by have any.
  * artistId `array`: Filter by artist Id.
  * childVoicebanks `boolean`: Include child voicebanks, if the artist being filtered by has any.
  * includeMembers `boolean`: Include members of groups. This applies if {artistId} is a group.
  * status `string` (values: Draft, Finished, Approved, Locked): Filter by entry status.
  * start `integer`: First item to be retrieved (optional, defaults to 0).
  * maxResults `integer`: Maximum number of results to be loaded (optional, defaults to 10).
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * sort `string` (values: None, Name, Date, AdditionDate, SeriesName): Sort rule (optional, defaults to Name). 
  * fields `string` (values: None, AdditionalNames, Artists, Description, MainPicture, Names, Series, SongList, WebLinks): Optional fields (optional). Possible values are Description, Series.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference.

#### Output
* output [PartialFindResult[ReleaseEventForApiContract]](#partialfindresult[releaseeventforapicontract])

### ReleaseEventApi_GetNames
Find event names by a part of name.
            
            Matching is done anywhere from the name.


```js
vocadb.ReleaseEventApi_GetNames({}, context)
```

#### Input
* input `object`
  * query `string`: Event name query, for example "Voc@loid".
  * maxResults `integer`: Maximum number of search results.

#### Output
* output `array`
  * items `string`

### ReleaseEventApi_GetAlbums
Gets a list of albums for a specific event.


```js
vocadb.ReleaseEventApi_GetAlbums({
  "eventId": 0
}, context)
```

#### Input
* input `object`
  * eventId **required** `integer`: Release event ID.
  * fields `string` (values: None, AdditionalNames, Artists, Description, Discs, Identifiers, MainPicture, Names, PVs, ReleaseEvent, Tags, Tracks, WebLinks): List of optional album fields.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference.

#### Output
* output `array`
  * items [AlbumForApiContract](#albumforapicontract)

### ReleaseEventApi_GetPublishedSongs
Gets a list of songs for a specific event.


```js
vocadb.ReleaseEventApi_GetPublishedSongs({
  "eventId": 0
}, context)
```

#### Input
* input `object`
  * eventId **required** `integer`: Event ID.
  * fields `string` (values: None, AdditionalNames, Albums, Artists, Lyrics, MainPicture, Names, PVs, ReleaseEvent, Tags, ThumbUrl, WebLinks): List of optional song fields.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference.

#### Output
* output `array`
  * items [SongForApiContract](#songforapicontract)

### ReleaseEventApi_PostReport
Creates a new report.


```js
vocadb.ReleaseEventApi_PostReport({
  "eventId": 0,
  "reportType": "",
  "notes": "",
  "versionNumber": 0
}, context)
```

#### Input
* input `object`
  * eventId **required** `integer`: Event to be reported.
  * reportType **required** `string` (values: InvalidInfo, Duplicate, Inappropriate, Other): Report type.
  * notes **required** `string`: Notes. Optional.
  * versionNumber **required** `integer`: Version to be reported. Optional.

#### Output
*Output schema unknown*

### ReleaseEventApi_Delete
Deletes an event.


```js
vocadb.ReleaseEventApi_Delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the event to be deleted.
  * notes `string`: Notes.
  * hardDelete `boolean`: If true, the entry is hard deleted. Hard deleted entries cannot be restored normally, but they will be moved to trash.

#### Output
*Output schema unknown*

### ReleaseEventApi_GetOne



```js
vocadb.ReleaseEventApi_GetOne({
  "id": 0,
  "fields": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * fields **required** `string` (values: None, AdditionalNames, Artists, Description, MainPicture, Names, Series, SongList, WebLinks)
  * lang `string` (values: Default, Japanese, Romaji, English)

#### Output
* output [ReleaseEventForApiContract](#releaseeventforapicontract)

### ResourcesApi_GetList
Gets a number of resource sets for a specific culture.


```js
vocadb.ResourcesApi_GetList({
  "cultureCode": "",
  "setNames": []
}, context)
```

#### Input
* input `object`
  * cultureCode **required** `string`: Culture code, for example "en-US" or "fi-FI".
  * setNames **required** `array`: Names of resource sets to be returned. More than one value can be specified. For example "artistTypeNames"

#### Output
* output `object`

### SongListApi_Post
Creates a song list.


```js
vocadb.SongListApi_Post({
  "list": {}
}, context)
```

#### Input
* input `object`
  * list **required** [SongListForEditContract](#songlistforeditcontract)

#### Output
* output `integer`

### SongListApi_DeleteComment
Normal users can delete their own comments, moderators can delete all comments.
            Requires login.


```js
vocadb.SongListApi_DeleteComment({
  "commentId": 0
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: ID of the comment to be deleted.

#### Output
*Output schema unknown*

### SongListApi_PostEditComment
Normal users can edit their own comments, moderators can edit all comments.
            Requires login.


```js
vocadb.SongListApi_PostEditComment({
  "commentId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: ID of the comment to be edited.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
*Output schema unknown*

### SongListApi_GetFeaturedLists
Gets a list of featured song lists.


```js
vocadb.SongListApi_GetFeaturedLists({}, context)
```

#### Input
* input `object`
  * query `string`: Song list name query (optional).
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for list name (optional, defaults to Auto).
  * featuredCategory `string` (values: Nothing, Concerts, VocaloidRanking, Pools, Other): Filter by a specific featured category. If empty, all categories are returned.
  * start `integer`: First item to be retrieved (optional, defaults to 0).
  * maxResults `integer`: Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * sort `string` (values: None, Name, Date, CreateDate): List sort rule. Possible values are Nothing, Date, CreateDate, Name.

#### Output
* output [PartialFindResult[SongListForApiContract]](#partialfindresult[songlistforapicontract])

### SongListApi_GetFeaturedListNames
Gets a list of featuedd list names. Ideal for autocomplete boxes.


```js
vocadb.SongListApi_GetFeaturedListNames({}, context)
```

#### Input
* input `object`
  * query `string`: Text query.
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Name match mode. Words is treated the same as Partial.
  * featuredCategory `string` (values: Nothing, Concerts, VocaloidRanking, Pools, Other): Filter by a specific featured category. If empty, all categories are returned.
  * maxResults `integer`: Maximum number of results.

#### Output
* output `array`
  * items `string`

### SongListApi_Delete
Deletes a song list.


```js
vocadb.SongListApi_Delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the list to be deleted.
  * notes `string`: Notes.
  * hardDelete `boolean`: If true, the entry is hard deleted. Hard deleted entries cannot be restored normally, but they will be moved to trash.

#### Output
*Output schema unknown*

### SongListApi_GetComments
Gets a list of comments for a song list.


```js
vocadb.SongListApi_GetComments({
  "listId": 0
}, context)
```

#### Input
* input `object`
  * listId **required** `integer`: ID of the list whose comments to load.

#### Output
* output [PartialFindResult[CommentForApiContract]](#partialfindresult[commentforapicontract])

### SongListApi_PostNewComment
Posts a new comment.


```js
vocadb.SongListApi_PostNewComment({
  "listId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * listId **required** `integer`: ID of the song list for which to create the comment.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
* output [CommentForApiContract](#commentforapicontract)

### SongListApi_GetSongs
Gets a list of songs in a song list.


```js
vocadb.SongListApi_GetSongs({
  "listId": 0
}, context)
```

#### Input
* input `object`
  * listId **required** `integer`: ID of the song list.
  * query `string`: Song name query (optional).
  * songTypes `string`: Filtered song types (optional).
  * pvServices `string` (values: Nothing, NicoNicoDouga, Youtube, SoundCloud, Vimeo, Piapro, Bilibili, File, LocalFile, Creofuga): Filter by one or more PV services (separated by commas). The song will pass the filter if it has a PV for any of the matched services.
  * tagId `array`: Filter by one or more tag Ids (optional).
  * artistId `array`: Filter by artist Id.
  * childVoicebanks `boolean`: Include child voicebanks, if the artist being filtered by has any.
  * advancedFilters `array`: List of advanced filters (optional).
  * start `integer`: First item to be retrieved (optional, defaults to 0).
  * maxResults `integer`: Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * sort `string` (values: None, Name, AdditionDate, PublishDate, FavoritedTimes, RatingScore): Song sort rule (optional, by default songs are sorted by song list order).
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for song name (optional, defaults to Auto).
  * fields `string` (values: None, AdditionalNames, Albums, Artists, Lyrics, MainPicture, Names, PVs, ReleaseEvent, Tags, ThumbUrl, WebLinks): List of optional fields (optional). Possible values are Albums, Artists, Names, PVs, Tags, ThumbUrl, WebLinks.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [PartialFindResult[SongInListForApiContract]](#partialfindresult[songinlistforapicontract])

### SongApi_GetList
Find songs.


```js
vocadb.SongApi_GetList({}, context)
```

#### Input
* input `object`
  * query `string`: Song name query (optional).
  * songTypes `string`: Filtered song types (optional). 
  * tagName `array`: Filter by one or more tag names (optional).
  * tagId `array`: Filter by one or more tag Ids (optional).
  * childTags `boolean`: Include child tags, if the tags being filtered by have any.
  * artistId `array`: Filter by artist Id.
  * artistParticipationStatus `string` (values: Everything, OnlyMainAlbums, OnlyCollaborations): Filter by artist participation status. Only valid if artistId is specified.
  * childVoicebanks `boolean`: Include child voicebanks, if the artist being filtered by has any.
  * includeMembers `boolean`: Include members of groups. This applies if {artistId} is a group.
  * onlyWithPvs `boolean`: Whether to only include songs with at least one PV.
  * pvServices `string` (values: Nothing, NicoNicoDouga, Youtube, SoundCloud, Vimeo, Piapro, Bilibili, File, LocalFile, Creofuga): Filter by one or more PV services (separated by commas). The song will pass the filter if it has a PV for any of the matched services.
  * since `integer`: Allow only entries that have been created at most this many hours ago. By default there is no filtering.
  * minScore `integer`: Minimum rating score. Optional.
  * userCollectionId `integer`: Filter by user's rated songs. By default there is no filtering.
  * status `string` (values: Draft, Finished, Approved, Locked): Filter by entry status (optional).
  * advancedFilters `array`: List of advanced filters (optional).
  * start `integer`: First item to be retrieved (optional, defaults to 0).
  * maxResults `integer`: Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * sort `string` (values: None, Name, AdditionDate, PublishDate, FavoritedTimes, RatingScore): Sort rule (optional, defaults to Name). Possible values are None, Name, AdditionDate, FavoritedTimes, RatingScore.
  * preferAccurateMatches `boolean`: Whether the search should prefer accurate matches. 
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for song name (optional, defaults to Exact).
  * fields `string` (values: None, AdditionalNames, Albums, Artists, Lyrics, MainPicture, Names, PVs, ReleaseEvent, Tags, ThumbUrl, WebLinks): List of optional fields (optional). Possible values are Albums, Artists, Names, PVs, Tags, ThumbUrl, WebLinks.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [PartialFindResult[SongForApiContract]](#partialfindresult[songforapicontract])

### SongApi_GetByPV
Gets a song by PV.


```js
vocadb.SongApi_GetByPV({
  "pvService": "",
  "pvId": ""
}, context)
```

#### Input
* input `object`
  * pvService **required** `string` (values: NicoNicoDouga, Youtube, SoundCloud, Vimeo, Piapro, Bilibili, File, LocalFile, Creofuga): PV service (required). Possible values are NicoNicoDouga, Youtube, SoundCloud, Vimeo, Piapro, Bilibili.
  * pvId **required** `string`: PV Id (required). For example sm123456.
  * fields `string` (values: None, AdditionalNames, Albums, Artists, Lyrics, MainPicture, Names, PVs, ReleaseEvent, Tags, ThumbUrl, WebLinks): List of optional fields (optional). Possible values are Albums, Artists, Names, PVs, Tags, ThumbUrl, WebLinks.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [SongForApiContract](#songforapicontract)

### SongApi_DeleteComment
Normal users can delete their own comments, moderators can delete all comments.
            Requires login.


```js
vocadb.SongApi_DeleteComment({
  "commentId": 0
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: ID of the comment to be deleted.

#### Output
*Output schema unknown*

### SongApi_PostEditComment
Normal users can edit their own comments, moderators can edit all comments.
            Requires login.


```js
vocadb.SongApi_PostEditComment({
  "commentId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: ID of the comment to be edited.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
*Output schema unknown*

### SongApi_GetLyrics
Output is cached. Specify song version as parameter to refresh.


```js
vocadb.SongApi_GetLyrics({
  "lyricsId": 0
}, context)
```

#### Input
* input `object`
  * lyricsId **required** `integer`: Lyrics ID.

#### Output
* output [LyricsForSongContract](#lyricsforsongcontract)

### SongApi_GetNames
Gets a list of song names. Ideal for autocomplete boxes.


```js
vocadb.SongApi_GetNames({}, context)
```

#### Input
* input `object`
  * query `string`: Text query.
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Name match mode.
  * maxResults `integer`: Maximum number of results.

#### Output
* output `array`
  * items `string`

### SongApi_GetTopSongs
Gets top rated songs.


```js
vocadb.SongApi_GetTopSongs({}, context)
```

#### Input
* input `object`
  * durationHours `integer`: Duration in hours from which to get songs.
  * startDate `string`: Lower bound of the date. Optional.
  * filterBy `string` (values: CreateDate, PublishDate, Popularity): Filtering mode.
  * vocalist `string` (values: Nothing, Vocaloid, UTAU, CeVIO): Vocalist selection.
  * maxResults `integer`: Maximum number of results to be loaded (optional).
  * fields `string` (values: None, AdditionalNames, Albums, Artists, Lyrics, MainPicture, Names, PVs, ReleaseEvent, Tags, ThumbUrl, WebLinks): Optional song fields to load.
  * languagePreference `string` (values: Default, Japanese, Romaji, English): Language preference.

#### Output
* output `array`
  * items [SongForApiContract](#songforapicontract)

### SongApi_Delete
Deletes a song.


```js
vocadb.SongApi_Delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the song to be deleted.
  * notes `string`: Notes.

#### Output
*Output schema unknown*

### SongApi_GetById
Gets a song by Id.


```js
vocadb.SongApi_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Song Id (required).
  * fields `string` (values: None, AdditionalNames, Albums, Artists, Lyrics, MainPicture, Names, PVs, ReleaseEvent, Tags, ThumbUrl, WebLinks): List of optional fields (optional). 
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [SongForApiContract](#songforapicontract)

### SongApi_GetComments
Pagination and sorting might be added later.


```js
vocadb.SongApi_GetComments({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the song whose comments to load.

#### Output
* output `array`
  * items [CommentForApiContract](#commentforapicontract)

### SongApi_PostNewComment
Posts a new comment.


```js
vocadb.SongApi_PostNewComment({
  "id": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the song for which to create the comment.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
* output [CommentForApiContract](#commentforapicontract)

### SongApi_GetDerived
Pagination and sorting might be added later.


```js
vocadb.SongApi_GetDerived({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Song Id (required).
  * fields `string` (values: None, AdditionalNames, Albums, Artists, Lyrics, MainPicture, Names, PVs, ReleaseEvent, Tags, ThumbUrl, WebLinks): List of optional fields (optional). 
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output `array`
  * items [SongForApiContract](#songforapicontract)

### SongApi_GetRatings
The result includes ratings and user information.
            For users who have requested not to make their ratings public, the user will be empty.


```js
vocadb.SongApi_GetRatings({
  "id": 0,
  "userFields": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Song ID.
  * userFields **required** `string` (values: None, KnownLanguages, MainPicture, OldUsernames): Optional fields for the users.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference.

#### Output
* output `array`
  * items [RatedSongForUserForApiContract](#ratedsongforuserforapicontract)

### SongApi_PostRating
If the user has already rated the song, any previous rating is replaced.
            Authorization cookie must be included.
            This API supports CORS.


```js
vocadb.SongApi_PostRating({
  "id": 0,
  "rating": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the song to be rated.
  * rating **required** [SongRatingContract](#songratingcontract)

#### Output
*Output schema unknown*

### SongApi_GetRelated
Gets related songs.


```js
vocadb.SongApi_GetRelated({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Song whose related songs are to be queried.
  * fields `string` (values: None, AdditionalNames, Albums, Artists, Lyrics, MainPicture, Names, PVs, ReleaseEvent, Tags, ThumbUrl, WebLinks): Optional song fields.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference.

#### Output
* output [RelatedSongsContract](#relatedsongscontract)

### TagApi_GetList
Find tags.


```js
vocadb.TagApi_GetList({}, context)
```

#### Input
* input `object`
  * query `string`: Tag name query (optional).
  * allowChildren `boolean`: Whether to allow child tags. If this is false, only root tags (that aren't children of any other tag) will be included.
  * categoryName `string`: Filter tags by category (optional). If specified, this must be an exact match (case insensitive).
  * start `integer`: First item to be retrieved (optional, defaults to 0).
  * maxResults `integer`: Maximum number of results to be loaded (optional, defaults to 10, maximum of 30).
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for song name (optional, defaults to Exact).
  * sort `string` (values: Nothing, Name, AdditionDate, UsageCount): Sort rule (optional, by default tags are sorted by name).Possible values are Name and UsageCount.
  * preferAccurateMatches `boolean`: Whether the search should prefer accurate matches. 
  * fields `string` (values: None, AdditionalNames, AliasedTo, Description, MainPicture, Names, Parent, RelatedTags, TranslatedDescription, WebLinks): List of optional fields (optional).
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).
  * target `string` (values: Nothing, Album, Artist, AlbumArtist, Event, Song, AlbumSong, ArtistSong, All)

#### Output
* output [PartialFindResult[TagForApiContract]](#partialfindresult[tagforapicontract])

### TagApi_PostNewTag
Creates a new tag.


```js
vocadb.TagApi_PostNewTag({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Tag English name. Tag names must be unique.

#### Output
* output [TagBaseContract](#tagbasecontract)

### TagApi_GetByName
DEPRECATED. Gets a tag by name.


```js
vocadb.TagApi_GetByName({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Tag name (required).
  * fields `string` (values: None, AdditionalNames, AliasedTo, Description, MainPicture, Names, Parent, RelatedTags, TranslatedDescription, WebLinks): List of optional fields (optional).
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [TagForApiContract](#tagforapicontract)

### TagApi_GetCategoryNamesList
Gets a list of tag category names.


```js
vocadb.TagApi_GetCategoryNamesList({}, context)
```

#### Input
* input `object`
  * query `string`
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words)

#### Output
* output `array`
  * items `string`

### TagApi_DeleteComment
Deletes a comment.
            Normal users can delete their own comments, moderators can delete all comments.
            Requires login.


```js
vocadb.TagApi_DeleteComment({
  "commentId": 0
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: ID of the comment to be deleted.

#### Output
*Output schema unknown*

### TagApi_PostEditComment
Updates a comment.
            Normal users can edit their own comments, moderators can edit all comments.
            Requires login.


```js
vocadb.TagApi_PostEditComment({
  "commentId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: ID of the comment to be edited.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
*Output schema unknown*

### TagApi_GetNames
Find tag names by a part of name.
            
            Matching is done anywhere from the name.


```js
vocadb.TagApi_GetNames({}, context)
```

#### Input
* input `object`
  * query `string`: Tag name query, for example "rock".
  * allowAliases `boolean`: Whether to find tags that are aliases of other tags as well. 
  * maxResults `integer`: Maximum number of search results.

#### Output
* output `array`
  * items `string`

### TagApi_GetTopTags
Gets the most common tags in a category.


```js
vocadb.TagApi_GetTopTags({}, context)
```

#### Input
* input `object`
  * categoryName `string`: Tag category, for example "Genres". Optional - if not specified, no filtering is done.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output `array`
  * items [TagBaseContract](#tagbasecontract)

### TagApi_Delete
Deletes a tag.


```js
vocadb.TagApi_Delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the tag to be deleted.
  * notes `string`: Notes (optional).
  * hardDelete `boolean`: If true, the entry is hard deleted. Hard deleted entries cannot be restored normally, but they will be moved to trash.

#### Output
*Output schema unknown*

### TagApi_GetById
Gets a tag by ID.


```js
vocadb.TagApi_GetById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Tag ID (required).
  * fields `string` (values: None, AdditionalNames, AliasedTo, Description, MainPicture, Names, Parent, RelatedTags, TranslatedDescription, WebLinks): List of optional fields (optional).
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [TagForApiContract](#tagforapicontract)

### TagApi_GetChildTags
Gets a list of child tags for a tag.
            Only direct children will be included.


```js
vocadb.TagApi_GetChildTags({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: ID of the tag whose children to load.
  * fields `string` (values: None, AdditionalNames, AliasedTo, Description, MainPicture, Names, Parent, RelatedTags, TranslatedDescription, WebLinks): List of optional fields (optional).
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output `array`
  * items [TagForApiContract](#tagforapicontract)

### TagApi_GetComments
Gets a list of comments for a tag.
            Note: pagination and sorting might be added later.


```js
vocadb.TagApi_GetComments({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: ID of the tag whose comments to load.

#### Output
* output [PartialFindResult[CommentForApiContract]](#partialfindresult[commentforapicontract])

### TagApi_PostNewComment
Posts a new comment.


```js
vocadb.TagApi_PostNewComment({
  "tagId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: ID of the tag for which to create the comment.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
* output [CommentForApiContract](#commentforapicontract)

### TagApi_PostReport
Creates a new report.


```js
vocadb.TagApi_PostReport({
  "tagId": 0,
  "reportType": "",
  "notes": "",
  "versionNumber": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`: Tag to be reported.
  * reportType **required** `string` (values: InvalidInfo, Duplicate, Inappropriate, Other): Report type.
  * notes **required** `string`: Notes. Optional.
  * versionNumber **required** `integer`: Version to be reported. Optional.

#### Output
*Output schema unknown*

### UserApi_GetList
Gets a list of users.


```js
vocadb.UserApi_GetList({}, context)
```

#### Input
* input `object`
  * query `string`: User name query (optional).
  * groups `string` (values: Nothing, Limited, Regular, Trusted, Moderator, Admin): Filter by user group. Only one value supported for now. Optional.
  * joinDateAfter `string`: Filter by users who joined after this date (inclusive).
  * joinDateBefore `string`: Filter by users who joined before this date (exclusive).
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Name match mode.
  * start `integer`: Index of the first entry to be loaded.
  * maxResults `integer`: Maximum number of results to be loaded.
  * getTotalCount `boolean`: Whether to get total number of results.
  * sort `string` (values: RegisterDate, Name, Group): Sort rule.
  * includeDisabled `boolean`: Whether to include disabled user accounts.
  * onlyVerified `boolean`: Whether to only include verified artists.
  * knowsLanguage `string`: Filter by known language (optional). This is the ISO 639-1 language code, for example "en" or "zh".
  * fields `string` (values: None, KnownLanguages, MainPicture, OldUsernames): Optional fields. Possible values are None and MainPicture. Optional.

#### Output
* output [PartialFindResult[UserForApiContract]](#partialfindresult[userforapicontract])

### UserApi_GetCurrent
Requires login information.
            This API supports CORS, and is restricted to specific origins.


```js
vocadb.UserApi_GetCurrent({}, context)
```

#### Input
* input `object`
  * fields `string` (values: None, KnownLanguages, MainPicture, OldUsernames): Optional fields.

#### Output
* output [UserForApiContract](#userforapicontract)

### UserApi_PostAlbumStatus
If the user has already rated the album, any previous rating is replaced.
            Authorization cookie must be included.


```js
vocadb.UserApi_PostAlbumStatus({
  "albumId": 0,
  "collectionStatus": "",
  "mediaType": "",
  "rating": 0
}, context)
```

#### Input
* input `object`
  * albumId **required** `integer`: ID of the album to be rated.
  * collectionStatus **required** `string` (values: Nothing, Wishlisted, Ordered, Owned): Collection status. Possible values are Nothing, Wishlisted, Ordered and Owned.
  * mediaType **required** `string` (values: PhysicalDisc, DigitalDownload, Other): Album media type. Possible values are PhysicalDisc, DigitalDownload and Other.
  * rating **required** `integer`: Rating to be given. Possible values are between 0 and 5.

#### Output
* output `string`

### UserApi_DeleteFollowedTag



```js
vocadb.UserApi_DeleteFollowedTag({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`

#### Output
*Output schema unknown*

### UserApi_PostFollowedTag



```js
vocadb.UserApi_PostFollowedTag({
  "tagId": 0
}, context)
```

#### Input
* input `object`
  * tagId **required** `integer`

#### Output
*Output schema unknown*

### UserApi_GetSongRatingForCurrent
Requires authentication.


```js
vocadb.UserApi_GetSongRatingForCurrent({
  "songId": 0
}, context)
```

#### Input
* input `object`
  * songId **required** `integer`: ID of the song whose rating is to be checked.

#### Output
* output `string` (values: Nothing, Dislike, Like, Favorite)

### UserApi_PostRefreshEntryEdit
Refresh entry edit status, indicating that the current user is still editing that entry.


```js
vocadb.UserApi_PostRefreshEntryEdit({
  "entryType": "",
  "entryId": 0
}, context)
```

#### Input
* input `object`
  * entryType **required** `string` (values: Undefined, Album, Artist, DiscussionTopic, PV, ReleaseEvent, ReleaseEventSeries, Song, SongList, Tag, User): Type of entry.
  * entryId **required** `integer`: Entry ID.

#### Output
*Output schema unknown*

### UserApi_PostSongTags
This can only be used to add tags - existing tags will not be removed. 
            Nothing will be done for tags that are already applied by the current user for the song.
            Authorization cookie is required.


```js
vocadb.UserApi_PostSongTags({
  "songId": 0,
  "tags": []
}, context)
```

#### Input
* input `object`
  * songId **required** `integer`: ID of the song to be tagged.
  * tags **required** `array`
    * items [TagBaseContract](#tagbasecontract)

#### Output
*Output schema unknown*

### UserApi_GetMessage
The message will be marked as read.
            User can only load messages from their own inbox.


```js
vocadb.UserApi_GetMessage({
  "messageId": 0
}, context)
```

#### Input
* input `object`
  * messageId **required** `integer`: ID of the message.

#### Output
* output [UserMessageContract](#usermessagecontract)

### UserApi_GetNames
Gets a list of user names. Ideal for autocomplete boxes.


```js
vocadb.UserApi_GetNames({}, context)
```

#### Input
* input `object`
  * query `string`: Text query.
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Name match mode. Words is treated the same as Partial.
  * maxResults `integer`: Maximum number of results.
  * includeDisabled `boolean`: Whether to include disabled user accounts. If false, disabled accounts are excluded.

#### Output
* output `array`
  * items `string`

### UserApi_DeleteProfileComment
Normal users can delete their own comments, moderators can delete all comments.
            Requires login.


```js
vocadb.UserApi_DeleteProfileComment({
  "commentId": 0
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: ID of the comment to be deleted.

#### Output
*Output schema unknown*

### UserApi_PostEditComment
Normal users can edit their own comments, moderators can edit all comments.
            Requires login.


```js
vocadb.UserApi_PostEditComment({
  "commentId": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * commentId **required** `integer`: ID of the comment to be edited.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
*Output schema unknown*

### UserApi_GetOne
Gets user by ID.


```js
vocadb.UserApi_GetOne({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: User ID.
  * fields `string` (values: None, KnownLanguages, MainPicture, OldUsernames): Optional fields.

#### Output
* output [UserForApiContract](#userforapicontract)

### UserApi_GetAlbumCollection
This includes albums that have been rated by the user as well as albums that the user has bought or wishlisted.
            Note that the user might have set his album ownership status and media type as private, in which case those properties are not included.


```js
vocadb.UserApi_GetAlbumCollection({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the user whose albums are to be browsed.
  * query `string`: Album name query (optional).
  * tagId `integer`: Filter by tag Id (optional).
  * tag `string`: Filter by tag (optional).
  * artistId `integer`: Filter by album artist (optional).
  * purchaseStatuses `string` (values: Nothing, Wishlisted, Ordered, Owned, All): Filter by a comma-separated list of purchase statuses (optional). Possible values are Nothing, Wishlisted, Ordered, Owned, and all combinations of these.
  * releaseEventId `integer`: Filter by release event. Optional.
  * albumTypes `string` (values: Unknown, Album, Single, EP, SplitAlbum, Compilation, Video, Artbook, Other): Filter by album type (optional).
  * advancedFilters `array`: List of advanced filters (optional).
  * start `integer`: First item to be retrieved (optional, defaults to 0).
  * maxResults `integer`: Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * sort `string` (values: None, Name, ReleaseDate, ReleaseDateWithNulls, AdditionDate, RatingAverage, RatingTotal, NameThenReleaseDate, CollectionCount): Sort rule (optional, defaults to Name). Possible values are None, Name, ReleaseDate, AdditionDate, RatingAverage, RatingTotal, CollectionCount.
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for album name (optional, defaults to Auto).
  * fields `string` (values: None, AdditionalNames, Artists, Description, Discs, Identifiers, MainPicture, Names, PVs, ReleaseEvent, Tags, Tracks, WebLinks): List of optional fields (optional). Possible values are Artists, MainPicture, Names, PVs, Tags, WebLinks.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [PartialFindResult[AlbumForUserForApiContract]](#partialfindresult[albumforuserforapicontract])

### UserApi_GetEvents
Gets a list of events a user has subscribed to.


```js
vocadb.UserApi_GetEvents({
  "id": 0,
  "relationshipType": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: User ID.
  * relationshipType **required** `string` (values: Interested, Attending): Type of event subscription.

#### Output
* output `array`
  * items [ReleaseEventForApiContract](#releaseeventforapicontract)

### UserApi_GetFollowedArtists
Gets a list of artists followed by a user.


```js
vocadb.UserApi_GetFollowedArtists({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the user whose followed artists are to be browsed.
  * query `string`: Artist name query (optional).
  * artistType `string` (values: Unknown, Circle, Label, Producer, Animator, Illustrator, Lyricist, Vocaloid, UTAU, CeVIO, OtherVoiceSynthesizer, OtherVocalist, OtherGroup, OtherIndividual, Utaite, Band): Filter by artist type.
  * start `integer`: First item to be retrieved (optional, defaults to 0).
  * maxResults `integer`: Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * sort `string` (values: None, Name, AdditionDate, AdditionDateAsc, ReleaseDate, SongCount, SongRating, FollowerCount): Sort rule (optional, defaults to Name). Possible values are None, Name, AdditionDate, AdditionDateAsc.
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for artist name (optional, defaults to Auto).
  * fields `string` (values: None, AdditionalNames, ArtistLinks, ArtistLinksReverse, BaseVoicebank, Description, MainPicture, Names, Tags, WebLinks): List of optional fields (optional). Possible values are Description, Groups, Members, Names, Tags, WebLinks.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [PartialFindResult[ArtistForUserForApiContract]](#partialfindresult[artistforuserforapicontract])

### UserApi_DeleteMessages
Deletes a list of user messages.


```js
vocadb.UserApi_DeleteMessages({
  "id": 0,
  "messageId": []
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the user whose messages to delete.
  * messageId **required** `array`: IDs of messages.

#### Output
*Output schema unknown*

### UserApi_GetMessages
Gets a list of messages.


```js
vocadb.UserApi_GetMessages({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: User ID. Must be the currently logged in user (loading messages for another user is not allowed).
  * inbox `string` (values: Nothing, Received, Sent, Notifications): Type of inbox. Possible values are Nothing (load all, default), Received, Sent, Notifications.
  * unread `boolean`: Whether to only load unread messages. Loading unread messages is only possible for received messages and notifications (not sent messages).
  * anotherUserId `integer`: Filter by id of the other user (either sender or receiver).
  * start `integer`: Index of the first entry to be loaded.
  * maxResults `integer`: Maximum number of results to be loaded.
  * getTotalCount `boolean`: Whether to get total number of results.

#### Output
* output [PartialFindResult[UserMessageContract]](#partialfindresult[usermessagecontract])

### UserApi_PostNewMessage
Creates a new message.


```js
vocadb.UserApi_PostNewMessage({
  "id": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: User ID. Must be logged in user.
  * contract **required** [UserMessageContract](#usermessagecontract)

#### Output
* output [UserMessageContract](#usermessagecontract)

### UserApi_GetProfileComments
Gets a list of comments posted on user's profile.


```js
vocadb.UserApi_GetProfileComments({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the user whose comments are to be retrieved.
  * start `integer`: Index of the first comment to be loaded.
  * maxResults `integer`: Maximum number of comments to load.
  * getTotalCount `boolean`: Whether to load the total number of comments.

#### Output
* output [PartialFindResult[CommentForApiContract]](#partialfindresult[commentforapicontract])

### UserApi_PostNewComment
Posts a new comment.


```js
vocadb.UserApi_PostNewComment({
  "id": 0,
  "contract": {}
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the user for whom to create the comment.
  * contract **required** [CommentForApiContract](#commentforapicontract)

#### Output
* output [CommentForApiContract](#commentforapicontract)

### UserApi_GetRatedSongs
Gets a list of songs rated by a user.


```js
vocadb.UserApi_GetRatedSongs({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the user whose songs are to be browsed.
  * query `string`: Song name query (optional).
  * tagName `string`: Filter by tag name (optional).
  * tagId `array`: Filter by tag Id (optional). This filter can be specified multiple times.
  * artistId `array`: Filter by song artist (optional).
  * childVoicebanks `boolean`: Include child voicebanks, if the artist being filtered by has any.
  * rating `string` (values: Nothing, Dislike, Like, Favorite): Filter songs by given rating (optional).
  * songListId `integer`: Filter songs by song list (optional).
  * groupByRating `boolean`: Group results by rating so that highest rated are first.
  * pvServices `string` (values: Nothing, NicoNicoDouga, Youtube, SoundCloud, Vimeo, Piapro, Bilibili, File, LocalFile, Creofuga): Filter by one or more PV services (separated by commas). The song will pass the filter if it has a PV for any of the matched services.
  * advancedFilters `array`: List of advanced filters (optional).
  * start `integer`: First item to be retrieved (optional, defaults to 0).
  * maxResults `integer`: Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * sort `string` (values: None, Name, AdditionDate, PublishDate, FavoritedTimes, RatingScore, RatingDate): Sort rule (optional, defaults to Name). Possible values are None, Name, AdditionDate, FavoritedTimes, RatingScore.
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for song name (optional, defaults to Auto).
  * fields `string` (values: None, AdditionalNames, Albums, Artists, Lyrics, MainPicture, Names, PVs, ReleaseEvent, Tags, ThumbUrl, WebLinks): List of optional fields (optional). Possible values are Albums, Artists, Names, PVs, Tags, ThumbUrl, WebLinks.
  * lang `string` (values: Default, Japanese, Romaji, English): Content language preference (optional).

#### Output
* output [PartialFindResult[RatedSongForUserForApiContract]](#partialfindresult[ratedsongforuserforapicontract])

### UserApi_GetSongRating
Gets a specific user's rating for a song.


```js
vocadb.UserApi_GetSongRating({
  "id": 0,
  "songId": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: User whose rating is to be checked.
  * songId **required** `integer`: ID of the song whose rating is to be checked.

#### Output
* output `string` (values: Nothing, Dislike, Like, Favorite)

### UserApi_PostSetting
Updates user setting.


```js
vocadb.UserApi_PostSetting({
  "id": 0,
  "settingName": "",
  "settingValue": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the user to be updated. This must match the current user OR be unspecified (or 0) if the user is not logged in.
  * settingName **required** `string`: Name of the setting to be updated, for example 'showChatBox'.
  * settingValue **required** `string`

#### Output
*Output schema unknown*

### UserApi_GetSongLists
Gets a list of song lists for a user.


```js
vocadb.UserApi_GetSongLists({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: User whose song lists are to be loaded.
  * query `string`: Song list name query (optional).
  * nameMatchMode `string` (values: Auto, Partial, StartsWith, Exact, Words): Match mode for song name (optional, defaults to Auto).
  * start `integer`: First item to be retrieved (optional, defaults to 0).
  * maxResults `integer`: Maximum number of results to be loaded (optional, defaults to 10, maximum of 50).
  * getTotalCount `boolean`: Whether to load total number of items (optional, default to false).
  * sort `string` (values: None, Name, Date, CreateDate): Sort option for the song lists. Possible values are None, Name, Date, CreateDate. Default is Name.
  * fields `string` (values: None, Description, MainPicture): List of optional fields.

#### Output
* output [PartialFindResult[SongListForApiContract]](#partialfindresult[songlistforapicontract])



## Definitions

### ActivityEntryForApiContract
* ActivityEntryForApiContract `object`
  * archivedVersion [ArchivedObjectVersionForApiContract](#archivedobjectversionforapicontract)
  * author [UserForApiContract](#userforapicontract)
  * createDate `string`
  * editEvent `string` (values: Created, Updated, Deleted, Restored)
  * entry [EntryForApiContract](#entryforapicontract)

### AdvancedSearchFilter
* AdvancedSearchFilter `object`
  * filterType `string` (values: Nothing, ArtistType, WebLink, HasUserAccount, RootVoicebank, VoiceProvider, HasStoreLink, HasTracks, NoCoverPicture, HasAlbum, HasOriginalMedia, HasMedia, HasMultipleVoicebanks, HasPublishDate, Lyrics, LyricsContent)
  * negate `boolean`
  * param `string`

### AlbumContract
* AlbumContract `object`
  * additionalNames `string`
  * artistString `string`
  * coverPictureMime `string`
  * createDate `string`
  * deleted `boolean`
  * discType `string` (values: Unknown, Album, Single, EP, SplitAlbum, Compilation, Video, Artbook, Other)
  * id `integer`
  * name `string`
  * ratingAverage `number`
  * ratingCount `integer`
  * releaseDate [OptionalDateTimeContract](#optionaldatetimecontract)
  * releaseEvent [ReleaseEventForApiContract](#releaseeventforapicontract)
  * status `string` (values: Draft, Finished, Approved, Locked)
  * version `integer`

### AlbumDiscPropertiesContract
* AlbumDiscPropertiesContract `object`
  * discNumber `integer`
  * id `integer`
  * mediaType `string` (values: Audio, Video)
  * name `string`

### AlbumForApiContract
* AlbumForApiContract `object`
  * additionalNames `string`
  * artistString `string`
  * artists `array`
    * items [ArtistForAlbumForApiContract](#artistforalbumforapicontract)
  * barcode `string`
  * catalogNumber `string`
  * createDate `string`
  * defaultName `string`
  * defaultNameLanguage `string` (values: Unspecified, Japanese, Romaji, English)
  * description `string`
  * discType `string` (values: Unknown, Album, Single, EP, SplitAlbum, Compilation, Video, Artbook, Other)
  * discs `array`
    * items [AlbumDiscPropertiesContract](#albumdiscpropertiescontract)
  * id `integer`
  * identifiers `array`
    * items [AlbumIdentifierContract](#albumidentifiercontract)
  * mainPicture [EntryThumbForApiContract](#entrythumbforapicontract)
  * mergedTo `integer`
  * name `string`
  * names `array`
    * items [LocalizedStringContract](#localizedstringcontract)
  * pvs `array`
    * items [PVContract](#pvcontract)
  * ratingAverage `number`
  * ratingCount `integer`
  * releaseDate [OptionalDateTimeContract](#optionaldatetimecontract)
  * releaseEvent [ReleaseEventForApiContract](#releaseeventforapicontract)
  * status `string` (values: Draft, Finished, Approved, Locked)
  * tags `array`
    * items [TagUsageForApiContract](#tagusageforapicontract)
  * tracks `array`
    * items [SongInAlbumForApiContract](#songinalbumforapicontract)
  * version `integer`
  * webLinks `array`
    * items [WebLinkForApiContract](#weblinkforapicontract)

### AlbumForUserForApiContract
* AlbumForUserForApiContract `object`
  * album [AlbumForApiContract](#albumforapicontract)
  * mediaType `string` (values: PhysicalDisc, DigitalDownload, Other)
  * purchaseStatus `string` (values: Nothing, Wishlisted, Ordered, Owned)
  * rating `integer`

### AlbumIdentifierContract
* AlbumIdentifierContract `object`
  * value `string`

### ArchivedObjectVersionForApiContract
* ArchivedObjectVersionForApiContract `object`
  * changedFields `array`
    * items `string`
  * id `integer`
  * notes `string`
  * version `integer`

### ArchivedWebLinkContract
* ArchivedWebLinkContract `object`
  * category `string` (values: Official, Commercial, Reference, Other)
  * description `string`
  * url `string`

### ArtistContract
* ArtistContract `object`
  * additionalNames `string`
  * artistType `string` (values: Unknown, Circle, Label, Producer, Animator, Illustrator, Lyricist, Vocaloid, UTAU, CeVIO, OtherVoiceSynthesizer, OtherVocalist, OtherGroup, OtherIndividual, Utaite, Band)
  * deleted `boolean`
  * id `integer`
  * name `string`
  * pictureMime `string`
  * releaseDate `string`
  * status `string` (values: Draft, Finished, Approved, Locked)
  * version `integer`

### ArtistForAlbumForApiContract
* ArtistForAlbumForApiContract `object`
  * artist [ArtistContract](#artistcontract)
  * categories `string` (values: Nothing, Vocalist, Producer, Animator, Label, Circle, Other, Band, Illustrator)
  * effectiveRoles `string` (values: Default, Animator, Arranger, Composer, Distributor, Illustrator, Instrumentalist, Lyricist, Mastering, Publisher, Vocalist, VoiceManipulator, Other, Mixer, Chorus, Encoder, VocalDataProvider)
  * isSupport `boolean`
  * name `string`
  * roles `string` (values: Default, Animator, Arranger, Composer, Distributor, Illustrator, Instrumentalist, Lyricist, Mastering, Publisher, Vocalist, VoiceManipulator, Other, Mixer, Chorus, Encoder, VocalDataProvider)

### ArtistForApiContract
* ArtistForApiContract `object`
  * additionalNames `string`
  * artistLinks `array`
    * items [ArtistForArtistForApiContract](#artistforartistforapicontract)
  * artistLinksReverse `array`
    * items [ArtistForArtistForApiContract](#artistforartistforapicontract)
  * artistType `string` (values: Unknown, Circle, Label, Producer, Animator, Illustrator, Lyricist, Vocaloid, UTAU, CeVIO, OtherVoiceSynthesizer, OtherVocalist, OtherGroup, OtherIndividual, Utaite, Band)
  * baseVoicebank [ArtistContract](#artistcontract)
  * createDate `string`
  * defaultName `string`
  * defaultNameLanguage `string` (values: Unspecified, Japanese, Romaji, English)
  * description `string`
  * id `integer`
  * mainPicture [EntryThumbForApiContract](#entrythumbforapicontract)
  * mergedTo `integer`
  * name `string`
  * names `array`
    * items [LocalizedStringContract](#localizedstringcontract)
  * pictureMime `string`
  * relations [ArtistRelationsForApi](#artistrelationsforapi)
  * releaseDate `string`
  * status `string` (values: Draft, Finished, Approved, Locked)
  * tags `array`
    * items [TagUsageForApiContract](#tagusageforapicontract)
  * version `integer`
  * webLinks `array`
    * items [WebLinkForApiContract](#weblinkforapicontract)

### ArtistForArtistForApiContract
* ArtistForArtistForApiContract `object`
  * artist [ArtistContract](#artistcontract)
  * linkType `string` (values: CharacterDesigner, Group, Illustrator, Manager, VoiceProvider)

### ArtistForEventContract
* ArtistForEventContract `object`
  * artist [ArtistContract](#artistcontract)
  * effectiveRoles `string` (values: Default, Dancer, DJ, Instrumentalist, Organizer, Promoter, VJ, Vocalist, VoiceManipulator, OtherPerformer, Other)
  * id `integer`
  * name `string`
  * roles `string` (values: Default, Dancer, DJ, Instrumentalist, Organizer, Promoter, VJ, Vocalist, VoiceManipulator, OtherPerformer, Other)

### ArtistForSongContract
* ArtistForSongContract `object`
  * artist [ArtistContract](#artistcontract)
  * categories `string` (values: Nothing, Vocalist, Producer, Animator, Label, Circle, Other, Band, Illustrator)
  * effectiveRoles `string` (values: Default, Animator, Arranger, Composer, Distributor, Illustrator, Instrumentalist, Lyricist, Mastering, Publisher, Vocalist, VoiceManipulator, Other, Mixer, Chorus, Encoder, VocalDataProvider)
  * id `integer`
  * isSupport `boolean`
  * name `string`
  * roles `string` (values: Default, Animator, Arranger, Composer, Distributor, Illustrator, Instrumentalist, Lyricist, Mastering, Publisher, Vocalist, VoiceManipulator, Other, Mixer, Chorus, Encoder, VocalDataProvider)

### ArtistForUserForApiContract
* ArtistForUserForApiContract `object`
  * artist [ArtistForApiContract](#artistforapicontract)

### ArtistRelationsForApi
* ArtistRelationsForApi `object`
  * latestAlbums `array`
    * items [AlbumContract](#albumcontract)
  * latestEvents `array`
    * items [ReleaseEventForApiContract](#releaseeventforapicontract)
  * latestSongs `array`
    * items [SongForApiContract](#songforapicontract)
  * popularAlbums `array`
    * items [AlbumContract](#albumcontract)
  * popularSongs `array`
    * items [SongForApiContract](#songforapicontract)

### CommentForApiContract
* CommentForApiContract `object`
  * author [UserForApiContract](#userforapicontract)
  * authorName `string`
  * created `string`
  * entry [EntryRefContract](#entryrefcontract)
  * id `integer`
  * message `string`

### DiscussionFolderContract
* DiscussionFolderContract `object`
  * description `string`
  * id `integer`
  * lastTopicAuthor [UserForApiContract](#userforapicontract)
  * lastTopicDate `string`
  * name `string`
  * topicCount `integer`

### DiscussionTopicContract
* DiscussionTopicContract `object`
  * author [UserForApiContract](#userforapicontract)
  * commentCount `integer`
  * comments `array`
    * items [CommentForApiContract](#commentforapicontract)
  * content `string`
  * created `string`
  * folderId `integer`
  * id `integer`
  * lastComment [CommentForApiContract](#commentforapicontract)
  * locked `boolean`
  * name `string`

### EnglishTranslatedStringContract
* EnglishTranslatedStringContract `object`
  * english `string`
  * original `string`

### EntryForApiContract
* EntryForApiContract `object`
  * activityDate `string`
  * additionalNames `string`
  * artistString `string`
  * artistType `string` (values: Unknown, Circle, Label, Producer, Animator, Illustrator, Lyricist, Vocaloid, UTAU, CeVIO, OtherVoiceSynthesizer, OtherVocalist, OtherGroup, OtherIndividual, Utaite, Band)
  * createDate `string`
  * defaultName `string`
  * defaultNameLanguage `string` (values: Unspecified, Japanese, Romaji, English)
  * description `string`
  * discType `string` (values: Unknown, Album, Single, EP, SplitAlbum, Compilation, Video, Artbook, Other)
  * entryType `string` (values: Undefined, Album, Artist, DiscussionTopic, PV, ReleaseEvent, ReleaseEventSeries, Song, SongList, Tag, User)
  * eventCategory `string` (values: Unspecified, AlbumRelease, Anniversary, Club, Concert, Contest, Convention, Other)
  * id `integer`
  * mainPicture [EntryThumbForApiContract](#entrythumbforapicontract)
  * name `string`
  * names `array`
    * items [LocalizedStringContract](#localizedstringcontract)
  * pVs `array`
    * items [PVContract](#pvcontract)
  * releaseEventSeriesName `string`
  * songListFeaturedCategory `string` (values: Nothing, Concerts, VocaloidRanking, Pools, Other)
  * songType `string` (values: Unspecified, Original, Remaster, Remix, Cover, Instrumental, Mashup, MusicPV, DramaPV, Live, Other)
  * status `string` (values: Draft, Finished, Approved, Locked)
  * tagCategoryName `string`
  * tags `array`
    * items [TagUsageForApiContract](#tagusageforapicontract)
  * urlSlug `string`
  * version `integer`
  * webLinks `array`
    * items [ArchivedWebLinkContract](#archivedweblinkcontract)

### EntryRefContract
* EntryRefContract `object`
  * entryType `string` (values: Undefined, Album, Artist, DiscussionTopic, PV, ReleaseEvent, ReleaseEventSeries, Song, SongList, Tag, User)
  * id `integer`

### EntryThumbContract
* EntryThumbContract `object`
  * entryType `string` (values: Undefined, Album, Artist, DiscussionTopic, PV, ReleaseEvent, ReleaseEventSeries, Song, SongList, Tag, User)
  * id `integer`
  * mime `string`
  * version `integer`

### EntryThumbForApiContract
* EntryThumbForApiContract `object`
  * urlSmallThumb `string`
  * urlThumb `string`
  * urlTinyThumb `string`

### LocalizedStringContract
* LocalizedStringContract `object`
  * language `string` (values: Unspecified, Japanese, Romaji, English)
  * value `string`

### LocalizedStringWithIdContract
* LocalizedStringWithIdContract `object`
  * id `integer`
  * language `string` (values: Unspecified, Japanese, Romaji, English)
  * value `string`

### LyricsForSongContract
* LyricsForSongContract `object`
  * cultureCode `string`
  * id `integer`
  * source `string`
  * translationType `string` (values: Original, Romanized, Translation)
  * url `string`
  * value `string`

### OldUsernameContract
* OldUsernameContract `object`
  * date `string`
  * oldName `string`

### OptionalDateTimeContract
* OptionalDateTimeContract `object`
  * day `integer`
  * formatted `string`
  * isEmpty `boolean`
  * month `integer`
  * year `integer`

### PVContract
* PVContract `object`
  * author `string`
  * createdBy `integer`
  * disabled `boolean`
  * extendedMetadata [PVExtendedMetadata](#pvextendedmetadata)
  * id `integer`
  * length `integer`
  * name `string`
  * publishDate `string`
  * pvId `string`
  * pvType `string` (values: Original, Reprint, Other)
  * service `string` (values: NicoNicoDouga, Youtube, SoundCloud, Vimeo, Piapro, Bilibili, File, LocalFile, Creofuga)
  * thumbUrl `string`
  * url `string`

### PVExtendedMetadata
* PVExtendedMetadata `object`
  * json `string`

### PVForSongContract
* PVForSongContract `object`
  * author `string`
  * createdBy `integer`
  * disabled `boolean`
  * extendedMetadata [PVExtendedMetadata](#pvextendedmetadata)
  * id `integer`
  * length `integer`
  * name `string`
  * publishDate `string`
  * pvId `string`
  * pvType `string` (values: Original, Reprint, Other)
  * service `string` (values: NicoNicoDouga, Youtube, SoundCloud, Vimeo, Piapro, Bilibili, File, LocalFile, Creofuga)
  * song [SongContract](#songcontract)
  * thumbUrl `string`
  * url `string`

### PartialFindResult[ActivityEntryForApiContract]
* PartialFindResult[ActivityEntryForApiContract] `object`
  * items `array`
    * items [ActivityEntryForApiContract](#activityentryforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[AlbumForApiContract]
* PartialFindResult[AlbumForApiContract] `object`
  * items `array`
    * items [AlbumForApiContract](#albumforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[AlbumForUserForApiContract]
* PartialFindResult[AlbumForUserForApiContract] `object`
  * items `array`
    * items [AlbumForUserForApiContract](#albumforuserforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[ArtistForApiContract]
* PartialFindResult[ArtistForApiContract] `object`
  * items `array`
    * items [ArtistForApiContract](#artistforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[ArtistForUserForApiContract]
* PartialFindResult[ArtistForUserForApiContract] `object`
  * items `array`
    * items [ArtistForUserForApiContract](#artistforuserforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[CommentForApiContract]
* PartialFindResult[CommentForApiContract] `object`
  * items `array`
    * items [CommentForApiContract](#commentforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[DiscussionTopicContract]
* PartialFindResult[DiscussionTopicContract] `object`
  * items `array`
    * items [DiscussionTopicContract](#discussiontopiccontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[EntryForApiContract]
* PartialFindResult[EntryForApiContract] `object`
  * items `array`
    * items [EntryForApiContract](#entryforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[PVForSongContract]
* PartialFindResult[PVForSongContract] `object`
  * items `array`
    * items [PVForSongContract](#pvforsongcontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[RatedSongForUserForApiContract]
* PartialFindResult[RatedSongForUserForApiContract] `object`
  * items `array`
    * items [RatedSongForUserForApiContract](#ratedsongforuserforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[ReleaseEventForApiContract]
* PartialFindResult[ReleaseEventForApiContract] `object`
  * items `array`
    * items [ReleaseEventForApiContract](#releaseeventforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[ReleaseEventSeriesContract]
* PartialFindResult[ReleaseEventSeriesContract] `object`
  * items `array`
    * items [ReleaseEventSeriesContract](#releaseeventseriescontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[SongForApiContract]
* PartialFindResult[SongForApiContract] `object`
  * items `array`
    * items [SongForApiContract](#songforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[SongInListForApiContract]
* PartialFindResult[SongInListForApiContract] `object`
  * items `array`
    * items [SongInListForApiContract](#songinlistforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[SongListForApiContract]
* PartialFindResult[SongListForApiContract] `object`
  * items `array`
    * items [SongListForApiContract](#songlistforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[TagForApiContract]
* PartialFindResult[TagForApiContract] `object`
  * items `array`
    * items [TagForApiContract](#tagforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[UserForApiContract]
* PartialFindResult[UserForApiContract] `object`
  * items `array`
    * items [UserForApiContract](#userforapicontract)
  * term `string`
  * totalCount `integer`

### PartialFindResult[UserMessageContract]
* PartialFindResult[UserMessageContract] `object`
  * items `array`
    * items [UserMessageContract](#usermessagecontract)
  * term `string`
  * totalCount `integer`

### RatedSongForUserForApiContract
* RatedSongForUserForApiContract `object`
  * date `string`
  * rating `string` (values: Nothing, Dislike, Like, Favorite)
  * song [SongForApiContract](#songforapicontract)
  * user [UserForApiContract](#userforapicontract)

### RelatedSongsContract
* RelatedSongsContract `object`
  * artistMatches `array`
    * items [SongForApiContract](#songforapicontract)
  * likeMatches `array`
    * items [SongForApiContract](#songforapicontract)
  * tagMatches `array`
    * items [SongForApiContract](#songforapicontract)

### ReleaseEventForApiContract
* ReleaseEventForApiContract `object`
  * additionalNames `string`
  * artists `array`
    * items [ArtistForEventContract](#artistforeventcontract)
  * category `string` (values: Unspecified, AlbumRelease, Anniversary, Club, Concert, Contest, Convention, Other)
  * date `string`
  * description `string`
  * endDate `string`
  * id `integer`
  * mainPicture [EntryThumbForApiContract](#entrythumbforapicontract)
  * name `string`
  * names `array`
    * items [LocalizedStringContract](#localizedstringcontract)
  * series [ReleaseEventSeriesContract](#releaseeventseriescontract)
  * seriesId `integer`
  * seriesNumber `integer`
  * seriesSuffix `string`
  * songList [SongListBaseContract](#songlistbasecontract)
  * status `string` (values: Draft, Finished, Approved, Locked)
  * urlSlug `string`
  * venueName `string`
  * version `integer`
  * webLinks `array`
    * items [WebLinkForApiContract](#weblinkforapicontract)

### ReleaseEventSeriesContract
* ReleaseEventSeriesContract `object`
  * additionalNames `string`
  * category `string` (values: Unspecified, AlbumRelease, Anniversary, Club, Concert, Contest, Convention, Other)
  * deleted `boolean`
  * description `string`
  * id `integer`
  * name `string`
  * pictureMime `string`
  * status `string` (values: Draft, Finished, Approved, Locked)
  * urlSlug `string`
  * version `integer`
  * webLinks `array`
    * items [WebLinkContract](#weblinkcontract)

### SongContract
* SongContract `object`
  * additionalNames `string`
  * artistString `string`
  * createDate `string`
  * deleted `boolean`
  * favoritedTimes `integer`
  * id `integer`
  * lengthSeconds `integer`
  * name `string`
  * nicoId `string`
  * publishDate `string`
  * pvServices `string` (values: Nothing, NicoNicoDouga, Youtube, SoundCloud, Vimeo, Piapro, Bilibili, File, LocalFile, Creofuga)
  * ratingScore `integer`
  * songType `string` (values: Unspecified, Original, Remaster, Remix, Cover, Instrumental, Mashup, MusicPV, DramaPV, Live, Other)
  * status `string` (values: Draft, Finished, Approved, Locked)
  * thumbUrl `string`
  * version `integer`

### SongForApiContract
* SongForApiContract `object`
  * additionalNames `string`
  * albums `array`
    * items [AlbumContract](#albumcontract)
  * artistString `string`
  * artists `array`
    * items [ArtistForSongContract](#artistforsongcontract)
  * createDate `string`
  * defaultName `string`
  * defaultNameLanguage `string` (values: Unspecified, Japanese, Romaji, English)
  * favoritedTimes `integer`
  * id `integer`
  * lengthSeconds `integer`
  * lyrics `array`
    * items [LyricsForSongContract](#lyricsforsongcontract)
  * mainPicture [EntryThumbForApiContract](#entrythumbforapicontract)
  * mergedTo `integer`
  * name `string`
  * names `array`
    * items [LocalizedStringContract](#localizedstringcontract)
  * originalVersionId `integer`
  * publishDate `string`
  * pvServices `string` (values: Nothing, NicoNicoDouga, Youtube, SoundCloud, Vimeo, Piapro, Bilibili, File, LocalFile, Creofuga)
  * pvs `array`
    * items [PVContract](#pvcontract)
  * ratingScore `integer`
  * releaseEvent [ReleaseEventForApiContract](#releaseeventforapicontract)
  * songType `string` (values: Unspecified, Original, Remaster, Remix, Cover, Instrumental, Mashup, MusicPV, DramaPV, Live, Other)
  * status `string` (values: Draft, Finished, Approved, Locked)
  * tags `array`
    * items [TagUsageForApiContract](#tagusageforapicontract)
  * thumbUrl `string`
  * version `integer`
  * webLinks `array`
    * items [WebLinkForApiContract](#weblinkforapicontract)

### SongInAlbumForApiContract
* SongInAlbumForApiContract `object`
  * discNumber `integer`
  * id `integer`
  * name `string`
  * song [SongForApiContract](#songforapicontract)
  * trackNumber `integer`

### SongInListEditContract
* SongInListEditContract `object`
  * notes `string`
  * order `integer`
  * song [SongForApiContract](#songforapicontract)
  * songInListId `integer`

### SongInListForApiContract
* SongInListForApiContract `object`
  * notes `string`
  * order `integer`
  * song [SongForApiContract](#songforapicontract)

### SongListBaseContract
* SongListBaseContract `object`
  * featuredCategory `string` (values: Nothing, Concerts, VocaloidRanking, Pools, Other)
  * id `integer`
  * name `string`

### SongListForApiContract
* SongListForApiContract `object`
  * author [UserForApiContract](#userforapicontract)
  * eventDate `string`
  * featuredCategory `string` (values: Nothing, Concerts, VocaloidRanking, Pools, Other)
  * id `integer`
  * mainPicture [EntryThumbForApiContract](#entrythumbforapicontract)
  * name `string`

### SongListForEditContract
* SongListForEditContract `object`
  * author [UserWithEmailContract](#userwithemailcontract)
  * canEdit `boolean`
  * deleted `boolean`
  * description `string`
  * eventDate `string`
  * featuredCategory `string` (values: Nothing, Concerts, VocaloidRanking, Pools, Other)
  * id `integer`
  * name `string`
  * songLinks `array`
    * items [SongInListEditContract](#songinlisteditcontract)
  * status `string` (values: Draft, Finished, Approved, Locked)
  * thumb [EntryThumbContract](#entrythumbcontract)
  * updateNotes `string`
  * version `integer`

### SongRatingContract
* SongRatingContract `object`
  * rating `string` (values: Nothing, Dislike, Like, Favorite)

### TagBaseContract
* TagBaseContract `object`
  * additionalNames `string`
  * id `integer`
  * name `string`
  * urlSlug `string`

### TagForApiContract
* TagForApiContract `object`
  * additionalNames `string`
  * aliasedTo [TagBaseContract](#tagbasecontract)
  * categoryName `string`
  * createDate `string`
  * defaultNameLanguage `string` (values: Unspecified, Japanese, Romaji, English)
  * description `string`
  * id `integer`
  * mainPicture [EntryThumbForApiContract](#entrythumbforapicontract)
  * name `string`
  * names `array`
    * items [LocalizedStringWithIdContract](#localizedstringwithidcontract)
  * parent [TagBaseContract](#tagbasecontract)
  * relatedTags `array`
    * items [TagBaseContract](#tagbasecontract)
  * status `string` (values: Draft, Finished, Approved, Locked)
  * targets `integer`
  * translatedDescription [EnglishTranslatedStringContract](#englishtranslatedstringcontract)
  * urlSlug `string`
  * usageCount `integer`
  * version `integer`
  * webLinks `array`
    * items [WebLinkForApiContract](#weblinkforapicontract)

### TagUsageForApiContract
* TagUsageForApiContract `object`
  * count `integer`
  * tag [TagBaseContract](#tagbasecontract)

### UserForApiContract
* UserForApiContract `object`
  * active `boolean`
  * groupId `string` (values: Nothing, Limited, Regular, Trusted, Moderator, Admin)
  * id `integer`
  * knownLanguages `array`
    * items [UserKnownLanguageContract](#userknownlanguagecontract)
  * mainPicture [EntryThumbForApiContract](#entrythumbforapicontract)
  * memberSince `string`
  * name `string`
  * oldUsernames `array`
    * items [OldUsernameContract](#oldusernamecontract)
  * verifiedArtist `boolean`

### UserKnownLanguageContract
* UserKnownLanguageContract `object`
  * cultureCode `string`
  * proficiency `string` (values: Nothing, Basics, Intermediate, Advanced, Native)

### UserMessageContract
* UserMessageContract `object`
  * body `string`
  * createdFormatted `string`
  * highPriority `boolean`
  * id `integer`
  * inbox `string` (values: Nothing, Received, Sent, Notifications)
  * read `boolean`
  * receiver [UserForApiContract](#userforapicontract)
  * sender [UserForApiContract](#userforapicontract)
  * subject `string`

### UserWithEmailContract
* UserWithEmailContract `object`
  * email `string`
  * id `integer`
  * name `string`

### WebLinkContract
* WebLinkContract `object`
  * category `string` (values: Official, Commercial, Reference, Other)
  * description `string`
  * descriptionOrUrl `string`
  * id `integer`
  * url `string`

### WebLinkForApiContract
* WebLinkForApiContract `object`
  * category `string` (values: Official, Commercial, Reference, Other)
  * description `string`
  * id `integer`
  * url `string`


