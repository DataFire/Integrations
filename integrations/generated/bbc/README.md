# @datafire/bbc

Client library for Radio & Music Services

## Installation and Usage
```bash
npm install --save @datafire/bbc
```
```js
let bbc = require('@datafire/bbc').create();

bbc.broadcasts.get({
  "X-API-Key": ""
}).then(data => {
  console.log(data);
});
```

## Description

We encapsulate Radio & Music business logic for iPlayer Radio and BBC Music products on all platforms. We add value by reliably providing the right blend of metadata needed by clients.

## Actions

### broadcasts.get
All broadcasts



```js
bbc.broadcasts.get({
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit
  * service_id `string`: Filter by Service ID. E.g. bbc_radio_fourfm
  * date `string`: Filter by date. E.g. 2016-06-17
  * sort `string` (values: start_at, -start_at, end_at, -end_at): Sort by provided query. E.g. 'start_at' sorts in ascending order, and '-start_at' sorts in descending order

#### Output
* output [BroadcastsResponse](#broadcastsresponse)

### broadcasts.latest.get
Broadcasts for the current day



```js
bbc.broadcasts.latest.get({
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit
  * service_id `string`: Filter by Service ID. E.g. bbc_radio_fourfm
  * on_air `string` (values: now, previous, next): Filter what is on air. E.g. 'now' returns current programme being broadcasted.
  * next `string`: Filter what will be on air next in minutes. E.g. '240' returns programmes broadcasted in the next four hurs
  * previous `string`: Filter what was on air previously in minutes. E.g. '240' returns programmes broadcasted in the previous four hurs
  * sort `string` (values: start_at, -start_at, end_at, -end_at): Sort by provided query. E.g. 'start_at' sorts in ascending order, and '-start_at' sorts in descending order

#### Output
* output [BroadcastsResponse](#broadcastsresponse)

### getBroadcastByPid
Find broadcast by PID



```js
bbc.getBroadcastByPid({
  "X-API-Key": "",
  "pid": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * pid **required** `string`: pid

#### Output
* output [BroadcastsResponse](#broadcastsresponse)

### categories.get
Retrieve Categories



```js
bbc.categories.get({
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * kind `string` (values: promoted): Filter by provided query. E.g. 'promoted' returns promoted categories

#### Output
* output [CategoriesResponse](#categoriesresponse)

### categories.id.get
Retrieve Categories by ID



```js
bbc.categories.id.get({
  "X-API-Key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * id **required** `string`: Retrieve information about the category. E.g. 'sport-football-europeanchampionship'

#### Output
* output [CategoriesResponse](#categoriesresponse)

### getCollectionMembers
Episodes and Clips from Collection



```js
bbc.getCollectionMembers({
  "X-API-Key": "",
  "pid": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * pid **required** `string`: pid
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [ProgrammesResponse](#programmesresponse)

### getExperienceHomepage
Homepage Experience



```js
bbc.getExperienceHomepage({
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY

#### Output
* output [ExperienceResponse](#experienceresponse)

### getMusicPopularArtists
List of Most Popular artists from BBC Music.



```js
bbc.getMusicPopularArtists({
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * since `string`: ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
  * until `string`: ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
  * decomposed `boolean`: In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [MusicPopularityArtists](#musicpopularityartists)

### getMusicPopularArtistById
Popularity Artist By Id



```js
bbc.getMusicPopularArtistById({
  "X-API-Key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * since `string`: ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
  * until `string`: ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
  * decomposed `boolean`: In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
  * id **required** `string`: MusicBrainz Id - Used to get single resource score

#### Output
* output [MusicPopularityArtists](#musicpopularityartists)

### getMusicPopularPlaylists
List of Most Popular playlists from BBC Music.



```js
bbc.getMusicPopularPlaylists({
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * since `string`: ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
  * until `string`: ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
  * decomposed `boolean`: In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [MusicPopularityPlaylists](#musicpopularityplaylists)

### getMusicPopularPlaylistById
Popular playlist by Id



```js
bbc.getMusicPopularPlaylistById({
  "X-API-Key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * since `string`: ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
  * until `string`: ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
  * decomposed `boolean`: In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
  * id **required** `string`: BBC Music Playlist Id - Used to get single resource score

#### Output
* output [MusicPopularityPlaylists](#musicpopularityplaylists)

### getMusicPopularTracks
List of popular tracks for BBC Music. Filter by time, network, artist, playlist or programme.



```js
bbc.getMusicPopularTracks({
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * since `string`: ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
  * until `string`: ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
  * network `string`: Return items with given Network ID
  * programme `string`: Items with given Programme Pid
  * artist `string`: MusicBrainz artist ID
  * decomposed `boolean`: In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [MusicPopularityTracks](#musicpopularitytracks)

### getMusicPopularTrackById
Popular Track for BBC Music



```js
bbc.getMusicPopularTrackById({
  "X-API-Key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * since `string`: ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
  * until `string`: ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
  * network `string`: Return items with given Network ID
  * programme `string`: Items with given Programme Pid
  * artist `string`: MusicBrainz artist ID
  * decomposed `boolean`: In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
  * id **required** `string`: BBC Music Track Id - Used to get single resource score

#### Output
* output [MusicPopularityTracks](#musicpopularitytracks)

### my.categories.follows.delete
Unfollow category


```js
bbc.my.categories.follows.delete({
  "Authorization": "",
  "X-API-Key": "",
  "Body": {
    "category_id": "",
    "platform": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-API-Key **required** `string`: API_KEY
  * Body **required** [Body_1](#body_1)

#### Output
*Output schema unknown*

### my.categories.follows.get
List of followed categories for a given user.



```js
bbc.my.categories.follows.get({
  "Authorization": "",
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [PersonalisedCategoriesResponse](#personalisedcategoriesresponse)

### my.categories.follows.post
Follow category


```js
bbc.my.categories.follows.post({
  "Authorization": "",
  "X-API-Key": "",
  "Body": {
    "category_id": "",
    "platform": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-API-Key **required** `string`: API_KEY
  * Body **required** [Body](#body)

#### Output
*Output schema unknown*

### getMusicExport
Returns status of all previous third party export actions for a given BBC Music user.



```js
bbc.getMusicExport({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [MusicExportJob](#musicexportjob)

### getMusicExportJobs
All items associated to a users export request



```js
bbc.getMusicExportJobs({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "over16": true
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * over16 **required** `boolean`: Boolean age check
  * vendor `string` (values: spotify, deezer, youtube, itunes): Specify Vendor Jobs

#### Output
* output [MusicExportJob](#musicexportjob)

### postMusicExportJob
Create Export Job for a user



```js
bbc.postMusicExportJob({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "over16": true,
  "body": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * over16 **required** `boolean`: Boolean age check
  * vendor `string` (values: spotify, deezer, youtube, itunes): Specify Vendor Jobs
  * body **required** `array`
    * items [MusicExportJob](#musicexportjob)

#### Output
* output [MusicExportSuccess](#musicexportsuccess)

### getMusicExportTracks
Retrieves vendor and status specific tracks



```js
bbc.getMusicExportTracks({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "over16": true
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * over16 **required** `boolean`: Boolean age check
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit
  * vendor `string` (values: spotify, deezer, youtube, itunes): Specify Vendor Tracks
  * status `string` (values: failed, done, pending): Specify Track status

#### Output
* output [MusicExportJob](#musicexportjob)

### getPersonalisedMusicFavourites
List of favourited tracks and clips for a given user for BBC Music.



```js
bbc.getPersonalisedMusicFavourites({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit
  * action `string` (values: favourited, unfavourited): Filters activities based on the type of action
  * music-data `boolean`: Omits music data from the response, defaults to true

#### Output
* output [PersonalisedMusicResponse](#personalisedmusicresponse)

### postPersonalisedMusicFavouritesBatch
Add multiple tracks and/or clips to a BBC Music user's favourites.

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.postPersonalisedMusicFavouritesBatch({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * body **required** `array`
    * items [PersonalisedMusicBatchRequest](#personalisedmusicbatchrequest)

#### Output
* output [PersonalisedMusicResponse](#personalisedmusicresponse)

### putPersonalisedMusicFavouritesBatch
Update tracks or clips from a BBC Music user favourites.

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.putPersonalisedMusicFavouritesBatch({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * body **required** `array`
    * items [PersonalisedMusicBatchRequest](#personalisedmusicbatchrequest)

#### Output
* output [PersonalisedMusicSuccess](#personalisedmusicsuccess)

### getPersonalisedMusicFavouritesByType
List of favourited tracks or clips for a given user for BBC Music.



```js
bbc.getPersonalisedMusicFavouritesByType({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: clips, tracks): Supported Music favourite types: Clips or Tracks
  * action `string` (values: favourited, unfavourited): Filters activities based on the type of action
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [PersonalisedMusicResponse](#personalisedmusicresponse)

### deletePersonalisedMusicFavouritesByTypeById
Delete track or clip from a BBC Music user favourites.



```js
bbc.deletePersonalisedMusicFavouritesByTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: clips, tracks): Supported Music favourite types: Clips or Tracks
  * id **required** `string`: Clip PID or Track ID

#### Output
* output [PersonalisedMusicSuccess](#personalisedmusicsuccess)

### getPersonalisedMusicFavouritesByTypeById
Check to see if a single track or clip entity is in a users favourites - determines UX of add button.



```js
bbc.getPersonalisedMusicFavouritesByTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: clips, tracks): Supported Music favourite types: Clips or Tracks
  * id **required** `string`: Clip PID or Track ID

#### Output
* output [PersonalisedMusicResponse](#personalisedmusicresponse)

### postPersonalisedMusicFavouritesByTypeById
Add track or clip to a BBC Music user favourites.

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.postPersonalisedMusicFavouritesByTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "id": "",
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: clips, tracks): Supported Music favourite types: Clips or Tracks
  * id **required** `string`: Clip PID or Track ID
  * body **required** [PersonalisedMusicRequest](#personalisedmusicrequest)

#### Output
* output [PersonalisedMusicResponse](#personalisedmusicresponse)

### putPersonalisedMusicFavouritesByTypeById
Update tracks or clips from a BBC Music user favourites.

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.putPersonalisedMusicFavouritesByTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "id": "",
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: clips, tracks): Supported Music favourite types: Clips or Tracks
  * id **required** `string`: Clip PID or Track ID
  * body **required** [PersonalisedMusicRequest](#personalisedmusicrequest)

#### Output
* output [PersonalisedMusicSuccess](#personalisedmusicsuccess)

### getPersonalisedMusicFollows
List of followed networks, categories, artists, playlists and genres for a given user for BBC Music.



```js
bbc.getPersonalisedMusicFollows({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * action `string` (values: followed, unfollowed): Filters activities based on the type of action
  * music-data `boolean`: Omits music data from the response, defaults to true
  * music_context `string` (values: events, ivote, music, musicplaylist, programmes, radio, unknown): Specify context to be passed to Music API
  * music_within_uk `boolean`: Specify location to be passed to Music API
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [PersonalisedMusicResponse](#personalisedmusicresponse)

### postPersonalisedMusicFollowsBatch
Add networks, categories, artists, playlists, networks, genres or services in a users follows

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.postPersonalisedMusicFollowsBatch({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * action `string` (values: followed, unfollowed): Filters activities based on the type of action
  * music-data `boolean`: Omits music data from the response, defaults to true
  * music_context `string` (values: events, ivote, music, musicplaylist, programmes, radio, unknown): Specify context to be passed to Music API
  * music_within_uk `boolean`: Specify location to be passed to Music API
  * body **required** `array`
    * items [PersonalisedMusicBatchRequest](#personalisedmusicbatchrequest)

#### Output
* output [PersonalisedMusicSuccess](#personalisedmusicsuccess)

### putPersonalisedMusicFollowsBatch
Update networks, categories, artists, playlists, networks, genres or services in a users follows

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.putPersonalisedMusicFollowsBatch({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * action `string` (values: followed, unfollowed): Filters activities based on the type of action
  * music-data `boolean`: Omits music data from the response, defaults to true
  * music_context `string` (values: events, ivote, music, musicplaylist, programmes, radio, unknown): Specify context to be passed to Music API
  * music_within_uk `boolean`: Specify location to be passed to Music API
  * body **required** `array`
    * items [PersonalisedMusicBatchRequest](#personalisedmusicbatchrequest)

#### Output
* output [PersonalisedMusicSuccess](#personalisedmusicsuccess)

### getPersonalisedMusicFollowsByType
List of followed networks, categories, artists, playlists, networks, genres, categories or services for a given BBC Music user.



```js
bbc.getPersonalisedMusicFollowsByType({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: playlists, services, networks, genres, categories, artists): Supported Music follows types: Playlists, Services, Genres & Artists
  * action `string` (values: followed, unfollowed): Filters activities based on the type of action
  * music-data `boolean`: Omits music data from the response, defaults to true
  * music_context `string` (values: events, ivote, music, musicplaylist, programmes, radio, unknown): Specify context to be passed to Music API
  * music_within_uk `boolean`: Specify location to be passed to Music API
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [PersonalisedMusicResponse](#personalisedmusicresponse)

### deletePersonalisedMusicFollowsByTypeById
Remove a single network, category, artist, playlist, network, genre or service entity is in a users follows



```js
bbc.deletePersonalisedMusicFollowsByTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: playlists, services, networks, genres, categories, artists): Supported Music follows types: Playlists, Services, Genres & Artists
  * id **required** `string`: Playlists, Services, Networks, Genres, Categories or Artists ID
  * music-data `boolean`: Omits music data from the response, defaults to true
  * music_context `string` (values: events, ivote, music, musicplaylist, programmes, radio, unknown): Specify context to be passed to Music API
  * music_within_uk `boolean`: Specify location to be passed to Music API

#### Output
* output [PersonalisedMusicSuccess](#personalisedmusicsuccess)

### getPersonalisedMusicFollowsByTypeById
Check to see if a single network, category, artist, playlist, network, genre or service entity is in a users follows - determines UX of add button.



```js
bbc.getPersonalisedMusicFollowsByTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: playlists, services, networks, genres, categories, artists): Supported Music follows types: Playlists, Services, Genres & Artists
  * id **required** `string`: Playlists, Services, Networks, Genres, Categories or Artists ID
  * music-data `boolean`: Omits music data from the response, defaults to true
  * music_context `string` (values: events, ivote, music, musicplaylist, programmes, radio, unknown): Specify context to be passed to Music API
  * music_within_uk `boolean`: Specify location to be passed to Music API

#### Output
* output [PersonalisedMusicResponse](#personalisedmusicresponse)

### postPersonalisedMusicFollowsByTypeById
Add a single network, category, artist, playlist, network, genre or service entity is in a users follows

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.postPersonalisedMusicFollowsByTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "id": "",
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: playlists, services, networks, genres, categories, artists): Supported Music follows types: Playlists, Services, Genres & Artists
  * id **required** `string`: Playlists, Services, Networks, Genres, Categories or Artists ID
  * music-data `boolean`: Omits music data from the response, defaults to true
  * music_context `string` (values: events, ivote, music, musicplaylist, programmes, radio, unknown): Specify context to be passed to Music API
  * music_within_uk `boolean`: Specify location to be passed to Music API
  * body **required** [PersonalisedMusicRequest](#personalisedmusicrequest)

#### Output
* output [PersonalisedMusicSuccess](#personalisedmusicsuccess)

### putPersonalisedMusicFollowsByTypeById
Update a single network, category, artist, playlist, network, genre or service entity is in a users follows

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.putPersonalisedMusicFollowsByTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "id": "",
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: playlists, services, networks, genres, categories, artists): Supported Music follows types: Playlists, Services, Genres & Artists
  * id **required** `string`: Playlists, Services, Networks, Genres, Categories or Artists ID
  * music-data `boolean`: Omits music data from the response, defaults to true
  * music_context `string` (values: events, ivote, music, musicplaylist, programmes, radio, unknown): Specify context to be passed to Music API
  * music_within_uk `boolean`: Specify location to be passed to Music API
  * body **required** [PersonalisedMusicRequest](#personalisedmusicrequest)

#### Output
* output [PersonalisedMusicSuccess](#personalisedmusicsuccess)

### deleteMusicPreferencesExport
Remove export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.



```js
bbc.deleteMusicPreferencesExport({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY

#### Output
* output [MusicExportSuccess](#musicexportsuccess)

### getMusicPreferencesExport
Returns export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.



```js
bbc.getMusicPreferencesExport({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY

#### Output
* output [MusicExportPreferencesResponse](#musicexportpreferencesresponse)

### postMusicPreferencesExport
Create export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.



```js
bbc.postMusicPreferencesExport({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "body": {
    "access_expires_at": "",
    "access_token": "",
    "add_plus_export": true,
    "authorization_code": "",
    "last_export": "",
    "legacy_state": "",
    "partner_id": "",
    "refresh_token": "",
    "terms": true,
    "vendor": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * body **required** [MusicExportPreferences](#musicexportpreferences)

#### Output
* output [MusicExportSuccess](#musicexportsuccess)

### deleteMusicPreferencesExportVendor
Remove Vendor specific export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.



```js
bbc.deleteMusicPreferencesExportVendor({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "vendor": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * vendor **required** `string` (values: spotify, deezer, youtube, itunes): Supported 3rd Party Vendor

#### Output
*Output schema unknown*

### getMusicPreferencesExportVendor
Returns vendor specific export preferences for a given BBC Music user.



```js
bbc.getMusicPreferencesExportVendor({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "vendor": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * vendor **required** `string` (values: spotify, deezer, youtube, itunes): Supported 3rd Party Vendor

#### Output
* output [MusicExportPreferencesResponse](#musicexportpreferencesresponse)

### postMusicPreferencesExportVendor
Create Vendor specific export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.



```js
bbc.postMusicPreferencesExportVendor({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "vendor": "",
  "body": {
    "access_expires_at": "",
    "access_token": "",
    "add_plus_export": true,
    "authorization_code": "",
    "last_export": "",
    "legacy_state": "",
    "partner_id": "",
    "refresh_token": "",
    "terms": true,
    "vendor": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * vendor **required** `string` (values: spotify, deezer, youtube, itunes): Supported 3rd Party Vendor
  * body **required** [MusicExportPreferences](#musicexportpreferences)

#### Output
*Output schema unknown*

### putMusicPreferencesExportVendor
Update vendor specific export preferences for a given BBC Music user.



```js
bbc.putMusicPreferencesExportVendor({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "vendor": "",
  "body": {
    "access_expires_at": "",
    "access_token": "",
    "add_plus_export": true,
    "authorization_code": "",
    "last_export": "",
    "legacy_state": "",
    "partner_id": "",
    "refresh_token": "",
    "terms": true,
    "vendor": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * vendor **required** `string` (values: spotify, deezer, youtube, itunes): Supported 3rd Party Vendor
  * body **required** [MusicExportPreferences](#musicexportpreferences)

#### Output
*Output schema unknown*

### my.networks.follows.delete
Unfollow network


```js
bbc.my.networks.follows.delete({
  "Authorization": "",
  "X-API-Key": "",
  "Body": {
    "platform": "",
    "service_id": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit
  * Body **required** [Body_3](#body_3)

#### Output
*Output schema unknown*

### my.networks.follows.get
List of followed networks for a given user.



```js
bbc.my.networks.follows.get({
  "Authorization": "",
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [PersonalisedNetworksResponse](#personalisednetworksresponse)

### my.networks.follows.post
Follow network


```js
bbc.my.networks.follows.post({
  "Authorization": "",
  "X-API-Key": "",
  "Body": {
    "platform": "",
    "service_id": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit
  * Body **required** [Body_2](#body_2)

#### Output
*Output schema unknown*

### my.plays.post
Write Play Event


```js
bbc.my.plays.post({
  "Authorization": "",
  "X-API-Key": "",
  "Body": {
    "action": "",
    "elapsed_time": 0,
    "pid": "",
    "resource_type": "",
    "version_pid": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-API-Key **required** `string`: API_KEY
  * Body **required** [Body_4](#body_4)

#### Output
*Output schema unknown*

### suggestContainer
Suggested Playspace Container



```js
bbc.suggestContainer({
  "Authorization": "",
  "X-API-Key": "",
  "previous_pid": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-API-Key **required** `string`: API_KEY
  * previous_pid **required** `string`: Clip or Episode PID of the previous or first content item in the Playspace stream.
  * previous_container `string`: Container ID of the previous container in the Playspace stream.

#### Output
* output [PlayspaceContainer](#playspacecontainer)

### getContainer
Playspace Container by ID



```js
bbc.getContainer({
  "Authorization": "",
  "X-API-Key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-API-Key **required** `string`: API_KEY
  * id **required** `string`: Playspace Container ID

#### Output
* output [PlayspaceContainer](#playspacecontainer)

### getRecommendations
Recommended Programmes from the Audience Platforms' Recomendations Service



```js
bbc.getRecommendations({
  "Authorization": "",
  "X-API-Key": "",
  "rights": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit
  * rights **required** `string` (values: web, mobile): Only return available results for the web/mobile.

#### Output
* output [ProgrammesResponse](#programmesresponse)

### getPersonalisedRadioFavourites
List of favourited episodes and clips for a given user for iPlayer Radio.

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification



```js
bbc.getPersonalisedRadioFavourites({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit
  * sort `string` (values: programme_titles, available_from_date, available_to_date): Sort order for Personalised Radio results
  * show_all_activity `boolean`: Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'

#### Output
* output [PersonalisedRadioResponse](#personalisedradioresponse)

### postPersonalisedRadioBatch
Add User favourites

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.postPersonalisedRadioBatch({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * body **required** `array`
    * items [PersonalisedRadioBatchRequest](#personalisedradiobatchrequest)

#### Output
* output [PersonalisedRadioSuccessResponse](#personalisedradiosuccessresponse)

### putPersonalisedRadioBatch
Update user favourites

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.putPersonalisedRadioBatch({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * body **required** `array`
    * items [PersonalisedRadioBatchRequest](#personalisedradiobatchrequest)

#### Output
* output [PersonalisedRadioSuccessResponse](#personalisedradiosuccessresponse)

### getPersonalisedRadioFavouritesByType
List of followed 'clips' or 'episode' items for a given iPlayer Radio user

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification



```js
bbc.getPersonalisedRadioFavouritesByType({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: clips, episodes): Supported Radio favourite types: Clips or Episodes
  * sort `string` (values: programme_titles, available_from_date, available_to_date): Sort order for Personalised Radio results
  * show_all_activity `boolean`: Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [PersonalisedRadioResponse](#personalisedradioresponse)

### deletePersonalisedRadioByActivityTypeById
Remove User favourite



```js
bbc.deletePersonalisedRadioByActivityTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "pid": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: clips, episodes): Supported Radio favourite types: Clips or Episodes
  * pid **required** `string`: pid

#### Output
* output [PersonalisedRadioSuccessResponse](#personalisedradiosuccessresponse)

### getPersonalisedRadioByActivityTypeById
Check to see if a single clip or episode entity is in a users favourites - determines UX of add button.

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification



```js
bbc.getPersonalisedRadioByActivityTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "pid": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: clips, episodes): Supported Radio favourite types: Clips or Episodes
  * pid **required** `string`: pid
  * show_all_activity `boolean`: Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'

#### Output
* output [PersonalisedRadioResponse](#personalisedradioresponse)

### postPersonalisedRadioByActivityTypeById
Add User favourite

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.postPersonalisedRadioByActivityTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "pid": "",
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: clips, episodes): Supported Radio favourite types: Clips or Episodes
  * pid **required** `string`: pid
  * body **required** [PersonalisedRadioRequest](#personalisedradiorequest)

#### Output
* output [PersonalisedRadioSuccessResponse](#personalisedradiosuccessresponse)

### putPersonalisedRadioByActivityTypeById
Update user favourite

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.putPersonalisedRadioByActivityTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "pid": "",
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: clips, episodes): Supported Radio favourite types: Clips or Episodes
  * pid **required** `string`: pid
  * body **required** [PersonalisedRadioRequest](#personalisedradiorequest)

#### Output
* output [PersonalisedRadioSuccessResponse](#personalisedradiosuccessresponse)

### getPersonalisedRadioFollows
List of favourited brands and series for a given user for iPlayer Radio.

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification



```js
bbc.getPersonalisedRadioFollows({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit
  * sort `string` (values: programme_titles, available_from_date, available_to_date): Sort order for Personalised Radio results
  * show_all_activity `boolean`: Include items which have been 'soft' unfollowed in response. I.e items with UAS type of 'unfollowed'

#### Output
* output [PersonalisedRadioResponse](#personalisedradioresponse)

### postPersonalisedRadioFollowsBatch
Add 'brand' or 'series' items to a users iPlayer Radio follows

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.postPersonalisedRadioFollowsBatch({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * body **required** `array`
    * items [PersonalisedRadioBatchRequest](#personalisedradiobatchrequest)

#### Output
* output [PersonalisedRadioSuccessResponse](#personalisedradiosuccessresponse)

### putPersonalisedRadioFollowsBatch
Update 'brands' or 'series' items from a users iPlayer Radio follows

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.putPersonalisedRadioFollowsBatch({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * body **required** `array`
    * items [PersonalisedRadioBatchRequest](#personalisedradiobatchrequest)

#### Output
* output [PersonalisedRadioSuccessResponse](#personalisedradiosuccessresponse)

### getPersonalisedRadioFollowsByType
List of followed 'brand' or 'series' items for a given iPlayer Radio user

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification



```js
bbc.getPersonalisedRadioFollowsByType({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: brands, series): Supported Radio follows types: Brands or Series
  * sort `string` (values: programme_titles, available_from_date, available_to_date): Sort order for Personalised Radio results
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit
  * show_all_activity `boolean`: Include items which have been 'soft' unfollowed in response. I.e items with UAS type of 'unfollowed'

#### Output
* output [PersonalisedRadioResponse](#personalisedradioresponse)

### deletePersonalisedRadioFollowsByTypeById
Remove 'brand' or 'series' items from a users iPlayer Radio follows



```js
bbc.deletePersonalisedRadioFollowsByTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "pid": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: brands, series): Supported Radio follows types: Brands or Series
  * pid **required** `string`: pid

#### Output
* output [PersonalisedRadioSuccessResponse](#personalisedradiosuccessresponse)

### getPersonalisedRadioFollowsByTypeById
Check to see if a single brand or series entity is in a users follows - determines UX of add button.



```js
bbc.getPersonalisedRadioFollowsByTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "pid": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: brands, series): Supported Radio follows types: Brands or Series
  * pid **required** `string`: pid

#### Output
* output [PersonalisedRadioResponse](#personalisedradioresponse)

### postPersonalisedRadioFollowsByTypeById
Add 'brand' or 'series' items from a users iPlayer Radio follows

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.postPersonalisedRadioFollowsByTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "pid": "",
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: brands, series): Supported Radio follows types: Brands or Series
  * pid **required** `string`: pid
  * body **required** [PersonalisedRadioRequest](#personalisedradiorequest)

#### Output
* output [PersonalisedRadioSuccessResponse](#personalisedradiosuccessresponse)

### putPersonalisedRadioFollowsByTypeById
Update 'brand' or 'series' items from a users iPlayer Radio follows

N.B. Any HTML tags submitted in metadata will be removed



```js
bbc.putPersonalisedRadioFollowsByTypeById({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": "",
  "type": "",
  "pid": "",
  "body": {
    "action": ""
  }
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * type **required** `string` (values: brands, series): Supported Radio follows types: Brands or Series
  * pid **required** `string`: pid
  * body **required** [PersonalisedRadioRequest](#personalisedradiorequest)

#### Output
* output [PersonalisedRadioSuccessResponse](#personalisedradiosuccessresponse)

### getPersonalisedRadioPlays
Returns mixed episode and clip plays for a given BBC iPlayer radio user.

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification



```js
bbc.getPersonalisedRadioPlays({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * Authorization **required** `string`: Bearer OAUTH_TOKEN
  * X-Authentication-Provider **required** `string`: Authentication type
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit
  * sort `string` (values: programme_titles, available_from_date, available_to_date): Sort order for Personalised Radio results
  * show_all_activity `boolean`: Include expired/unavailable items

#### Output
* output [PersonalisedRadioResponse](#personalisedradioresponse)

### getPodcasts
Retrieve all Podcasts



```js
bbc.getPodcasts({
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit
  * sort `string` (values: title, -title, available_from_date, -available_from_date): Sort order for Podcasts results
  * network `string`: Network Master Brand ID (mid)
  * network_url_key `string`: Network URL key
  * category `string`: Category ID
  * q `string`: Search query String
  * coverage `string` (values: local, national, regional): Local, National or Regional Coverage

#### Output
* output [PodcastsResponse](#podcastsresponse)

### getPodcastsFeatured
Retrieve featured podcasts



```js
bbc.getPodcastsFeatured({
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY

#### Output
* output [PodcastsFeaturedResponse](#podcastsfeaturedresponse)

### getPodcastByPid
Retrieve data about the podcast with the supplied PID



```js
bbc.getPodcastByPid({
  "X-API-Key": "",
  "pid": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * pid **required** `string`: pid
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [PodcastsResponse](#podcastsresponse)

### getPodcastEpisodes
Retrieve all episodes for a specific podcast



```js
bbc.getPodcastEpisodes({
  "X-API-Key": "",
  "pid": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * pid **required** `string`: pid
  * offset `integer`: Paginated results offset
  * limit `integer`: Paginated results limit

#### Output
* output [PodcastEpisodesResponse](#podcastepisodesresponse)

### getRadioNetworks
All iPlayer Radio networks - contains business logic for masterbrand and service relationships



```js
bbc.getRadioNetworks({
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * preset `boolean`: Returns all networks needed for iPlayer Radio responsive web navigation
  * international `boolean`: Returns all networks available internationally

#### Output
* output [NetworksResponse](#networksresponse)

### getPopularEpisodesClips
Retrieve Popular Episodes & Clips



```js
bbc.getPopularEpisodesClips({
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * type `string` (values: episode, clip, episode,clip): Programme type required. Accepts comma separated values
  * distinct `string` (values: tleo): Filter by deduplication rule. E.g. 'tleo' returns programmes with distinct top level episode objects
  * network `string`: Filter by network master brand ID (mid). Accepts comma separated values
  * network_url_key `string`: Filter by network URL key. Accepts comma separated values
  * category `string`: Filter by category. Accepts comma separated values
  * format `string`: Filter by format. Accepts comma separated values
  * group `string` (values: tv, radio, tv,radio): Filter by group. Accepts comma separated values
  * media_type `string` (values: audio, video, audio,video): Filter by programme media type. Accepts comma separated values
  * container `string`: Filter by container. Accepts any pid e.g. brand,series,episode
  * media_set `array` (values: pc, mobile-download, android-download-high, apple-ios-download-high, mobile-cellular-main, mobile-phone-main, iptv-all): Filter by media set name. Accepts comma separated combinations of the following: pc,mobile-download,android-download-high,apple-ios-download-high,mobile-cellular-main,mobile-phone-main,iptv-all
  * q `string`: Search query String

#### Output
* output [PopularResponse](#popularresponse)

### getRadioProgrammes
Provides a paginated list of programmes by PID (brand, series, episode and clip). Accepts various filters and sorting methods.

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining results as an array of Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification



```js
bbc.getRadioProgrammes({
  "X-API-Key": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * kind `string` (values: tleo): Filter by provided query. E.g. 'tleo' returns top level objects, ie. brands, orphaned series, and orphaned episodes
  * network `string`: Filter by network master brand ID (mid). Accepts comma separated values
  * network_url_key `string`: Filter by network URL key. Accepts comma separated values
  * category `string`: Filter by category id. Accepts comma separated values. See /category endpoint below for the type of response provided
  * sort `string` (values: available_from_date, -available_from_date, title, -title): Sort by provided query. E.g. 'title' sorts in ascending order, and -title sorts in descending order
  * container `string`: Filter by container. Accepts any brand or series pid
  * type `string` (values: brand, series, episode, clip, episode,clip): Filter by programme type. Accepts comma separated values

#### Output
* output [ProgrammesResponse](#programmesresponse)

### getRadioProgrammesByPid
Find programmes by PID (brand, series, episode and clip)

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining results as an array of Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification



```js
bbc.getRadioProgrammesByPid({
  "X-API-Key": "",
  "pid": ""
}, context)
```

#### Input
* input `object`
  * X-API-Key **required** `string`: API_KEY
  * pid **required** `string`: pid

#### Output
* output [ProgrammesResponse](#programmesresponse)



## Definitions

### AncestorSummary
* AncestorSummary `object`
  * ancestor_type **required** `string`
  * id **required** `string`
  * images **required** `array`
    * items [Image](#image)
  * titles **required** [AncestorTitles](#ancestortitles)
  * type **required** `string`

### AncestorTitles
* AncestorTitles `object`
  * title **required** `string`
  * type **required** `string`

### AvailableVersions
* AvailableVersions `object`
  * available **required** `string`
  * available_from_date **required** `string`
  * available_to_date **required** `string`
  * duration **required** `string`
  * has_guidance **required** `boolean`
  * media_set **required** `string`
  * type **required** `string`
  * version_pid **required** `string`
  * version_type **required** `string`

### Body
* Body `object`
  * category_id **required** `string`
  * platform **required** `string` (values: responsiveweb, app)

### Body_1
* Body_1 `object`
  * category_id **required** `string`
  * platform **required** `string` (values: responsiveweb, app)

### Body_2
* Body_2 `object`
  * platform **required** `string` (values: responsiveweb, app)
  * service_id **required** `string`

### Body_3
* Body_3 `object`
  * platform **required** `string` (values: responsiveweb, app)
  * service_id **required** `string`

### Body_4
* Body_4 `object`
  * action **required** `string` (values: started, ended, paused, heartbeat)
  * elapsed_time **required** `integer`
  * pid **required** `string`
  * resource_type **required** `string` (values: episode, clip)
  * version_pid **required** `string`

### BrandSummary
* BrandSummary `object`
  * available_versions `array`
    * items [AvailableVersions](#availableversions)
  * images **required** `array`
    * items [Image](#image)
  * latest_available_episodes **required** `array`
    * items [EpisodeSummary](#episodesummary)
  * network_summary **required** [NetworkSummary](#networksummary)
  * pid **required** `string`
  * short_synopsis **required** `string`
  * titles **required** [ProgrammeTitles](#programmetitles)
  * total_available_episodes **required** `integer`
  * type **required** `string` (values: brand_summary)

### Broadcast
* Broadcast `object`
  * duration **required** `integer`
  * end **required** `string`
  * is_audio_described **required** `boolean`
  * is_blanked **required** `boolean`
  * is_critical **required** `boolean`
  * is_live **required** `boolean`
  * is_repeat **required** `boolean`
  * is_webcast **required** `boolean`
  * pid **required** `string`
  * programme [ProgrammeSummary](#programmesummary)
  * service_id **required** `string`
  * start **required** `string`
  * type **required** `string`
  * version_pid **required** `string`

### BroadcastsResponse
* BroadcastsResponse `object`
  * $schema **required** `string`
  * limit **required** `integer`
  * offset **required** `integer`
  * results **required** `array`
    * items [Broadcast](#broadcast)
  * total **required** `integer`

### CategoriesResponse
* CategoriesResponse `object`
  * $schema **required** `string`
  * limit **required** `integer`
  * offset **required** `integer`
  * results **required** `array`
    * items [Category](#category)
  * total **required** `integer`

### Category
* Category `object`
  * category_type **required** `string`
  * child_categories **required** `array`
    * items [ChildCategory](#childcategory)
  * depth **required** `integer`
  * id **required** `string`
  * pip_id **required** `string`
  * title **required** `string`
  * type **required** `string`
  * url_key **required** `string`

### CategoryError
* CategoryError `object`
  * href **required** `string`
  * id **required** `string`
  * message **required** `string`
  * replied_at **required** `string`
  * status **required** `integer`

### CategoryErrorResponse
* CategoryErrorResponse `object`
  * $schema **required** `string`
  * errors **required** `array`
    * items [CategoryError](#categoryerror)

### CategorySummary
* CategorySummary `object`
  * category_type **required** `string`
  * id **required** `string`
  * key **required** `string`
  * title **required** `string`
  * type **required** `string`

### ChildCategory
* ChildCategory `object`
  * category_type **required** `string`
  * child_categories **required** `array`
    * items [ChildCategory](#childcategory)
  * depth **required** `integer`
  * id **required** `string`
  * pip_id **required** `string`
  * title **required** `string`
  * type **required** `string`
  * url_key **required** `string`

### ClipSummary
* ClipSummary `object`
  * ancestors **required** `array`
    * items [AncestorSummary](#ancestorsummary)
  * available_versions **required** `array`
    * items [AvailableVersions](#availableversions)
  * images **required** `array`
    * items [Image](#image)
  * media_type **required** `string`
  * network_summary **required** [NetworkSummary](#networksummary)
  * pid **required** `string`
  * release_date **required** `string`
  * short_synopsis **required** `string`
  * titles **required** [ProgrammeTitles](#programmetitles)
  * type **required** `string` (values: clip_summary)

### Contact
* Contact `object`
  * handle **required** `string`
  * name **required** `string`
  * service **required** `string`
  * url **required** `string`

### DateRange
* DateRange `object`
  * end **required** `string`
  * start **required** `string`

### DisplayModule
* DisplayModule `object`
  * description `string`
  * title `string`
  * type `string`
  * uri `string`

### Empty
* Empty `object`

### EpisodeSummary
* EpisodeSummary `object`
  * ancestors **required** `array`
    * items [AncestorSummary](#ancestorsummary)
  * available_versions **required** `array`
    * items [AvailableVersions](#availableversions)
  * images **required** `array`
    * items [Image](#image)
  * media_type **required** `string`
  * network_summary **required** [NetworkSummary](#networksummary)
  * pid **required** `string`
  * release_date **required** `string`
  * short_synopsis **required** `string`
  * titles **required** [ProgrammeTitles](#programmetitles)
  * type **required** `string` (values: episode_summary)

### Error
* Error `object`
  * href **required** `string`
  * id **required** `string`
  * message **required** `string`
  * replied_at **required** `string`

### ErrorResponse
* ErrorResponse `object`
  * $schema **required** `string`
  * errors **required** `array`
    * items [Error](#error)

### ExperienceResponse
* ExperienceResponse `object`
  * $schema **required** `string`
  * data **required** `array`
    * items [DisplayModule](#displaymodule)

### ExternalPartner
* ExternalPartner `object`
  * type **required** `string`
  * value **required** `string`

### Image
* Image `object`
  * id **required** `string`
  * image_type **required** `string`
  * template_url **required** `string`
  * type **required** `string`

### MetaData
* MetaData `object`
  * miscellaneous **required** [Miscellaneous](#miscellaneous)
  * origin **required** [Origin](#origin)
  * programme_type **required** `string`
  * type **required** `string`

### Miscellaneous
* Miscellaneous `object`
  * title **required** `string`

### MusicExportError
* MusicExportError `object`
  * message **required** `string`
  * replied_at **required** `integer`
  * status **required** `integer`

### MusicExportErrorResponse
* MusicExportErrorResponse `object`
  * errors **required** `array`
    * items [MusicExportError](#musicexporterror)
  * schema **required** `string`

### MusicExportJob
* MusicExportJob `object`
  * created_at **required** `string`
  * id **required** `string`
  * job_id **required** `string`
  * status **required** `string`
  * vendor **required** `string`

### MusicExportPreferences
* MusicExportPreferences `object`
  * access_expires_at **required** `string`
  * access_token **required** `string`
  * add_plus_export **required** `boolean`
  * authorization_code **required** `string`
  * last_export **required** `string`
  * legacy_state **required** `string`
  * partner_id **required** `string`
  * refresh_token **required** `string`
  * terms **required** `boolean`
  * vendor **required** `string`

### MusicExportPreferencesResponse
* MusicExportPreferencesResponse `object`
  * method **required** `string`
  * replied_at **required** `string`
  * results **required** `array`
    * items [MusicExportPreferences](#musicexportpreferences)
  * schema **required** `string`
  * total **required** `integer`

### MusicExportSuccess
* MusicExportSuccess `object`
  * method **required** `string`
  * replied_at **required** `string`
  * schema **required** `string`

### MusicPopularityArtist
* MusicPopularityArtist `object`
  * gid **required** `string`
  * id **required** `string`
  * imagePid **required** `string`
  * name **required** `string`
  * score **required** `integer`
  * sortName **required** `string`

### MusicPopularityArtists
* MusicPopularityArtists `object`
  * limit `integer`
  * method **required** `string`
  * offset `integer`
  * repliedAt **required** `string`
  * results **required** `array`
    * items [MusicPopularityArtist](#musicpopularityartist)
  * schema **required** `string`
  * total **required** `integer`

### MusicPopularityError
* MusicPopularityError `object`
  * errors `array`
    * items `string`
  * schema `string`

### MusicPopularityPlaylist
* MusicPopularityPlaylist `object`
  * categories **required** `array`
    * items `string`
  * commentsEnabled **required** `boolean`
  * description **required** `string`
  * externalPartners **required** `array`
    * items [ExternalPartner](#externalpartner)
  * genre **required** `string`
  * id **required** `string`
  * imagePid **required** `string`
  * imageUrl **required** `string`
  * kind **required** `string`
  * mood **required** `string`
  * oneOff **required** `boolean`
  * playlistPlaybackType **required** `string`
  * score **required** `integer`
  * serviceId **required** `string`
  * title **required** `string`
  * updatedAt **required** `string`
  * visibility **required** `string`
  * wideImagePid **required** `string`
  * wideImageUrl **required** `string`

### MusicPopularityPlaylists
* MusicPopularityPlaylists `object`
  * limit `integer`
  * method **required** `string`
  * offset `integer`
  * repliedAt **required** `string`
  * results **required** `array`
    * items [MusicPopularityPlaylist](#musicpopularityplaylist)
  * schema **required** `string`
  * total **required** `integer`

### MusicPopularityTrack
* MusicPopularityTrack `object`
  * album `string`
  * artistGid `string`
  * artistName `string`
  * artists `array`
    * items [MusicTrackArtist](#musictrackartist)
  * baseTitle `string`
  * classical `boolean`
  * id **required** `string`
  * mergedIds `array`
    * items `string`
  * preferredMultiplayRecordAudio [MusicRecordAudio](#musicrecordaudio)
  * preferredRecordAudio [MusicRecordAudio](#musicrecordaudio)
  * radioEdit `boolean`
  * recordAudio `array`
    * items [MusicRecordAudio](#musicrecordaudio)
  * recordImageHref `string`
  * recordImagePid `string`
  * score **required** `integer`
  * title `string`
  * type `string`

### MusicPopularityTracks
* MusicPopularityTracks `object`
  * limit `integer`
  * method **required** `string`
  * offset `integer`
  * repliedAt **required** `string`
  * results **required** `array`
    * items [MusicPopularityTrack](#musicpopularitytrack)
  * schema **required** `string`
  * total **required** `integer`

### MusicRecordAudio
* MusicRecordAudio `object`
  * audioType **required** `string`
  * duration **required** `integer`
  * identifier **required** `string`
  * resourceType **required** `string`

### MusicTrackArtist
* MusicTrackArtist `object`
  * gid **required** `string`
  * imagePid **required** `string`
  * name **required** `string`
  * role **required** `string`
  * sortName **required** `string`

### Network
* Network `object`
  * active **required** `boolean`
  * contacts **required** `array`
    * items [Contact](#contact)
  * date_ranges **required** `array`
    * items [DateRange](#daterange)
  * group **required** `string`
  * id **required** `string`
  * international **required** `boolean`
  * key **required** `string`
  * preset **required** `boolean`
  * promoted_category_summaries `array`
    * items [CategorySummary](#categorysummary)
  * services **required** `array`
    * items [Service](#service)
  * short_title **required** `string`
  * sort **required** `integer`
  * title **required** `string`
  * type **required** `string`

### NetworkSummary
* NetworkSummary `object`
  * active **required** `boolean`
  * group **required** `string`
  * id **required** `string`
  * key **required** `string`
  * titles **required** [NetworkTitles](#networktitles)
  * type **required** `string`

### NetworkTitles
* NetworkTitles `object`
  * long_title **required** `string`
  * short_title **required** `string`
  * type **required** `string`

### NetworksResponse
* NetworksResponse `object`
  * $schema **required** `string`
  * limit **required** `integer`
  * offset **required** `integer`
  * results **required** `array`
    * items [Network](#network)
  * total **required** `integer`

### Origin
* Origin `object`
  * type **required** `string`

### PersonalisedCategories
* PersonalisedCategories `object`
  * created **required** `string`
  * type **required** `string`

### PersonalisedCategoriesResponse
* PersonalisedCategoriesResponse `object`
  * $schema **required** `string`
  * limit **required** `integer`
  * offset **required** `integer`
  * total **required** `integer`

### PersonalisedMusicActivity
* PersonalisedMusicActivity `object`
  * action **required** `string`
  * activity **required** `string`
  * added_at **required** `string`
  * data **required** `array`
    * items [PersonalisedMusicData](#personalisedmusicdata)
  * domain **required** `string`
  * id **required** `string`
  * meta_data **required** [PersonalisedMusicMetaData](#personalisedmusicmetadata)
  * type **required** `string`
  * urn **required** `string`

### PersonalisedMusicArtist
* PersonalisedMusicArtist `object`
  * id `string`
  * images `array`
    * items [PersonalisedMusicImage](#personalisedmusicimage)
  * name `string`
  * role `string`

### PersonalisedMusicBatchRequest
* PersonalisedMusicBatchRequest `object`
  * action **required** `string`
  * added_at `string`
  * context `string`
  * domain **required** `string`
  * id **required** `string`
  * meta_data [PersonalisedMusicMetaData](#personalisedmusicmetadata)
  * type **required** `string`

### PersonalisedMusicClip
* PersonalisedMusicClip `object`
  * contributors `array`
    * items `string`
  * endDate `string`
  * entityType `string`
  * imageUrl `string`
  * masterbrandMid `string`
  * mediaType `string`
  * parentProgramme [PersonalisedMusicClipParentProgramme](#personalisedmusicclipparentprogramme)
  * pid `string`
  * startDate `string`
  * synopsis `string`
  * title `string`
  * version [PersonalisedMusicVersion](#personalisedmusicversion)

### PersonalisedMusicClipParentProgramme
* PersonalisedMusicClipParentProgramme `object`
  * entityType `string`
  * pid `string`
  * title `string`

### PersonalisedMusicData
* PersonalisedMusicData `object`
  * artist [PersonalisedMusicArtist](#personalisedmusicartist)
  * clip [PersonalisedMusicClip](#personalisedmusicclip)
  * genre [PersonalisedMusicGenre](#personalisedmusicgenre)
  * playlist [PersonalisedMusicPlaylist](#personalisedmusicplaylist)
  * service [PersonalisedMusicService](#personalisedmusicservice)
  * track [PersonalisedMusicTrack](#personalisedmusictrack)

### PersonalisedMusicError
* PersonalisedMusicError `object`
  * message **required** `string`
  * replied_at **required** `integer`
  * status **required** `integer`

### PersonalisedMusicErrorResponse
* PersonalisedMusicErrorResponse `object`
  * errors **required** `array`
    * items [PersonalisedMusicError](#personalisedmusicerror)
  * schema **required** `string`

### PersonalisedMusicGenre
* PersonalisedMusicGenre `object`
  * id `string`
  * key `string`
  * title `string`
  * type `string`

### PersonalisedMusicImage
* PersonalisedMusicImage `object`
  * format `string`
  * id `string`
  * type `string`

### PersonalisedMusicMetaData
* PersonalisedMusicMetaData `object`
  * key **required** `string`

### PersonalisedMusicPlaylist
* PersonalisedMusicPlaylist `object`
  * description `string`
  * images `array`
    * items [PersonalisedMusicImage](#personalisedmusicimage)
  * playback_type `string`
  * service_id `string`
  * title `string`
  * tracks [PersonalisedMusicTrack](#personalisedmusictrack)
  * type `string`
  * updated_at `string`
  * version [PersonalisedMusicPlaylistVersion](#personalisedmusicplaylistversion)

### PersonalisedMusicPlaylistVersion
* PersonalisedMusicPlaylistVersion `object`
  * duration `string`
  * expires_at `string`
  * id `string`
  * starts_at `string`
  * warnings **required** `array`
    * items `string`

### PersonalisedMusicRequest
* PersonalisedMusicRequest `object`
  * action **required** `string`
  * added_at `string`
  * context `string`
  * meta_data [PersonalisedMusicMetaData](#personalisedmusicmetadata)

### PersonalisedMusicResponse
* PersonalisedMusicResponse `object`
  * limit **required** `integer`
  * method **required** `string`
  * offset **required** `integer`
  * replied_at **required** `string`
  * results **required** `array`
    * items [PersonalisedMusicActivity](#personalisedmusicactivity)
  * schema **required** `string`
  * total **required** `integer`

### PersonalisedMusicService
* PersonalisedMusicService `object`
  * id `string`
  * key `string`
  * title `string`
  * type `string`

### PersonalisedMusicSuccess
* PersonalisedMusicSuccess `object`
  * method **required** `string`
  * replied_at **required** `string`
  * schema **required** `string`

### PersonalisedMusicTrack
* PersonalisedMusicTrack `object`
  * contributions **required** `array`
    * items [PersonalisedMusicTrackContribution](#personalisedmusictrackcontribution)
  * id **required** `string`
  * images **required** `array`
    * items [PersonalisedMusicTrackImage](#personalisedmusictrackimage)
  * media **required** `array`
    * items [PersonalisedMusicTrackMedia](#personalisedmusictrackmedia)
  * title **required** `string`
  * type **required** `string`
  * version **required** [PersonalisedMusicVersion](#personalisedmusicversion)

### PersonalisedMusicTrackContribution
* PersonalisedMusicTrackContribution `object`
  * id **required** `string`
  * images **required** `array`
    * items [PersonalisedMusicTrackImage](#personalisedmusictrackimage)
  * name **required** `string`
  * role **required** `string`

### PersonalisedMusicTrackImage
* PersonalisedMusicTrackImage `object`
  * format **required** `string`
  * id **required** `string`
  * type **required** `string`

### PersonalisedMusicTrackMedia
* PersonalisedMusicTrackMedia `object`
  * duration **required** `integer`
  * format **required** `string`
  * id **required** `string`
  * scope **required** `string`
  * source **required** `string`
  * type **required** `string`

### PersonalisedMusicVersion
* PersonalisedMusicVersion `object`
  * classical `boolean`
  * duration `string`
  * radio `boolean`
  * vpid `string`

### PersonalisedNetworks
* PersonalisedNetworks `object`
  * created **required** `string`
  * type **required** `string`

### PersonalisedNetworksResponse
* PersonalisedNetworksResponse `object`
  * $schema **required** `string`
  * limit **required** `integer`
  * offset **required** `integer`
  * results **required** `array`
    * items [PersonalisedNetworks](#personalisednetworks)
  * total **required** `integer`

### PersonalisedRadioActivity
* PersonalisedRadioActivity `object`
  * action **required** `string`
  * activity **required** `string`
  * added_at **required** `string`
  * data **required** [ProgrammeSummary](#programmesummary)
  * domain **required** `string`
  * id **required** `string`
  * metadata **required** [MetaData](#metadata)
  * type **required** `string`
  * uas_type **required** `string`
  * urn **required** `string`

### PersonalisedRadioBatchRequest
* PersonalisedRadioBatchRequest `object`
  * action **required** `string`
  * added_at `string`
  * context `string`
  * id `string`
  * metadata [PersonalisedRadioMetaData](#personalisedradiometadata)
  * type `string`

### PersonalisedRadioErrorResponse
* PersonalisedRadioErrorResponse `object`
  * $schema **required** `string`
  * errors **required** `array`
    * items [PersonalisedRadioErrorResponse_errors](#personalisedradioerrorresponse_errors)

### PersonalisedRadioErrorResponse_errors
* PersonalisedRadioErrorResponse_errors `object`
  * code **required** `string`
  * detail **required** `string`
  * href **required** `string`
  * id **required** `string`
  * status **required** `integer`
  * timestamp **required** `integer`
  * title **required** `string`

### PersonalisedRadioMetaData
* PersonalisedRadioMetaData `object`
  * key **required** `string`

### PersonalisedRadioRequest
* PersonalisedRadioRequest `object`
  * action **required** `string`
  * added_at `string`
  * context `string`
  * metadata [PersonalisedRadioMetaData](#personalisedradiometadata)

### PersonalisedRadioResponse
* PersonalisedRadioResponse `object`
  * $schema **required** `string`
  * limit **required** `integer`
  * method **required** `string`
  * offset **required** `integer`
  * replied_at **required** `string`
  * results **required** `array`
    * items [PersonalisedRadioActivity](#personalisedradioactivity)
  * total **required** `integer`

### PersonalisedRadioSuccessResponse
* PersonalisedRadioSuccessResponse `object`
  * $schema **required** `string`
  * method **required** `string`
  * replied_at **required** `string`

### PlayableItem
* PlayableItem `object`
  * description `string`
  * image_url `string`
  * pid `string`
  * title `string`
  * type `string`
  * version_pid `string`

### PlayspaceContainer
* PlayspaceContainer `object`
  * id `string`
  * members `array`
    * items [PlayableItem](#playableitem)
  * title `string`
  * type `string`

### Podcast
* Podcast `object`
  * category_summaries **required** `array`
    * items [CategorySummary](#categorysummary)
  * days_available **required** `integer`
  * entity_type **required** `string`
  * first_published_date **required** `string`
  * frequency **required** `string`
  * images **required** `array`
    * items [Image](#image)
  * latest_available_episodes **required** `array`
    * items [PodcastEpisodeSummary](#podcastepisodesummary)
  * network_summary **required** [NetworkSummary](#networksummary)
  * pid **required** `string`
  * rss_url **required** `string`
  * synopses **required** [PodcastSynopses](#podcastsynopses)
  * territory **required** `string`
  * titles **required** [ProgrammeTitles](#programmetitles)
  * total_available_episodes **required** `integer`
  * type **required** `string`
  * updated_at **required** `string`

### PodcastEpisodeSummary
* PodcastEpisodeSummary `object`
  * asset_url **required** `string`
  * available_versions **required** `array`
    * items [AvailableVersions](#availableversions)
  * images **required** `array`
    * items [Image](#image)
  * media_type **required** `string`
  * network_summary **required** [NetworkSummary](#networksummary)
  * pid **required** `string`
  * release_date **required** `string`
  * short_synopsis **required** `string`
  * titles **required** [ProgrammeTitles](#programmetitles)
  * type **required** `string`

### PodcastEpisodesResponse
* PodcastEpisodesResponse `object`
  * $schema **required** `string`
  * limit **required** `number`
  * offset **required** `number`
  * results **required** `array`
    * items [PodcastEpisodeSummary](#podcastepisodesummary)
  * total **required** `number`

### PodcastError
* PodcastError `object`
  * href `string`
  * id `string`
  * message `string`
  * replied_at `string`
  * status `number`

### PodcastErrorResponse
* PodcastErrorResponse `object`
  * $schema `string`
  * errors `array`
    * items [PodcastError](#podcasterror)

### PodcastSynopses
* PodcastSynopses `object`
  * long **required** `string`
  * medium **required** `string`
  * short **required** `string`
  * type **required** `string`

### PodcastsFeatured
* PodcastsFeatured `object`
  * featured_podcasts `array`
    * items [Podcast](#podcast)
  * title `string`
  * type `string`

### PodcastsFeaturedResponse
* PodcastsFeaturedResponse `object`
  * $schema **required** `string`
  * limit **required** `number`
  * offset **required** `number`
  * results **required** `array`
    * items [PodcastsFeatured](#podcastsfeatured)
  * total **required** `number`

### PodcastsResponse
* PodcastsResponse `object`
  * $schema **required** `string`
  * limit **required** `integer`
  * offset **required** `integer`
  * results **required** `array`
    * items [Podcast](#podcast)
  * total **required** `integer`

### PopularError
* PopularError `object`
  * href **required** `string`
  * id **required** `string`
  * message **required** `string`
  * replied_at **required** `string`
  * status **required** `integer`

### PopularErrorResponse
* PopularErrorResponse `object`
  * $schema **required** `string`
  * errors **required** `array`
    * items [PopularError](#popularerror)

### PopularItemSummary
* PopularItemSummary `object`
  * data **required** [ProgrammeSummary](#programmesummary)
  * id **required** `string`
  * score **required** `integer`
  * type **required** `string`

### PopularResponse
* PopularResponse `object`
  * $schema **required** `string`
  * limit **required** `integer`
  * offset **required** `integer`
  * results **required** `array`
    * items [PopularItemSummary](#popularitemsummary)
  * total **required** `integer`

### Programme
* Programme `object`
  * images **required** `array`
    * items [Image](#image)
  * latest_available_episodes `array`
    * items [EpisodeSummary](#episodesummary)
  * network_summary **required** [NetworkSummary](#networksummary)
  * pid **required** `string`
  * short_synopsis **required** `string`
  * titles **required** [ProgrammeTitles](#programmetitles)
  * total_available_episodes `integer`
  * type **required** `string` (values: brand_summary, series_summary, episode_summary, clip_summary)

### ProgrammeSummary
* ProgrammeSummary `object`
  * pid **required** `string`
  * type **required** `string` (values: brand_summary, series_summary, episode_summary, clip_summary)

### ProgrammeTitles
* ProgrammeTitles `object`
  * display_title `string`
  * entity_title `string`
  * primary_title `string`
  * secondary_title `string`
  * type **required** `string`

### ProgrammesResponse
* ProgrammesResponse `object`
  * $schema **required** `string`
  * limit **required** `integer`
  * offset **required** `integer`
  * results **required** `array`
    * items [ProgrammeSummary](#programmesummary)
  * total **required** `integer`

### RadioError
* RadioError `object`
  * code **required** `string`
  * detail **required** `string`
  * href **required** `string`
  * id **required** `string`
  * status **required** `integer`
  * timestamp **required** `integer`
  * title **required** `string`

### RadioErrorResponse
* RadioErrorResponse `object`
  * $schema **required** `string`
  * errors **required** `array`
    * items [RadioError](#radioerror)

### SeriesSummary
* SeriesSummary `object`
  * ancestors **required** `array`
    * items [AncestorSummary](#ancestorsummary)
  * images **required** `array`
    * items [Image](#image)
  * latest_available_episodes **required** `array`
    * items [EpisodeSummary](#episodesummary)
  * network_summary **required** [NetworkSummary](#networksummary)
  * pid **required** `string`
  * short_synopsis **required** `string`
  * titles **required** [ProgrammeTitles](#programmetitles)
  * total_available_episodes **required** `integer`
  * type **required** `string` (values: series_summary)

### Service
* Service `object`
  * active **required** `boolean`
  * coverage **required** `string`
  * date_ranges **required** `array`
    * items [DateRange](#daterange)
  * default **required** `boolean`
  * default_language **required** `string`
  * id **required** `string`
  * region **required** `string`
  * short_title **required** `string`
  * title **required** `string`
  * type **required** `string`


