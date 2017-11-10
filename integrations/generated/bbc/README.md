# @datafire/bbc

Client library for Radio & Music Services

## Installation and Usage
```bash
npm install --save datafire @datafire/bbc
```

```js
let datafire = require('datafire');
let bbc = require('@datafire/bbc').create();

bbc.broadcasts.get({}).then(data => {
  console.log(data);
})
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

#### Parameters
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit
* service_id (string) - Filter by Service ID. E.g. bbc_radio_fourfm
* date (string) - Filter by date. E.g. 2016-06-17
* sort (string) - Sort by provided query. E.g. 'start_at' sorts in ascending order, and '-start_at' sorts in descending order

### broadcasts.latest.get
Broadcasts for the current day



```js
bbc.broadcasts.latest.get({
  "X-API-Key": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit
* service_id (string) - Filter by Service ID. E.g. bbc_radio_fourfm
* on_air (string) - Filter what is on air. E.g. 'now' returns current programme being broadcasted.
* next (string) - Filter what will be on air next in minutes. E.g. '240' returns programmes broadcasted in the next four hurs
* previous (string) - Filter what was on air previously in minutes. E.g. '240' returns programmes broadcasted in the previous four hurs
* sort (string) - Sort by provided query. E.g. 'start_at' sorts in ascending order, and '-start_at' sorts in descending order

### getBroadcastByPid
Find broadcast by PID



```js
bbc.getBroadcastByPid({
  "X-API-Key": "",
  "pid": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* pid (string) **required** - pid

### categories.get
Retrieve Categories



```js
bbc.categories.get({
  "X-API-Key": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* kind (string) - Filter by provided query. E.g. 'promoted' returns promoted categories

### categories.id.get
Retrieve Categories by ID



```js
bbc.categories.id.get({
  "X-API-Key": "",
  "id": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* id (string) **required** - Retrieve information about the category. E.g. 'sport-football-europeanchampionship'

### getCollectionMembers
Episodes and Clips from Collection



```js
bbc.getCollectionMembers({
  "X-API-Key": "",
  "pid": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* pid (string) **required** - pid
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

### getExperienceHomepage
Homepage Experience



```js
bbc.getExperienceHomepage({
  "X-API-Key": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY

### getMusicPopularArtists
List of Most Popular artists from BBC Music.



```js
bbc.getMusicPopularArtists({
  "X-API-Key": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* since (string) - ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
* until (string) - ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
* decomposed (boolean) - In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

### getMusicPopularArtistById
Popularity Artist By Id



```js
bbc.getMusicPopularArtistById({
  "X-API-Key": "",
  "id": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* since (string) - ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
* until (string) - ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
* decomposed (boolean) - In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
* id (string) **required** - MusicBrainz Id - Used to get single resource score

### getMusicPopularPlaylists
List of Most Popular playlists from BBC Music.



```js
bbc.getMusicPopularPlaylists({
  "X-API-Key": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* since (string) - ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
* until (string) - ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
* decomposed (boolean) - In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

### getMusicPopularPlaylistById
Popular playlist by Id



```js
bbc.getMusicPopularPlaylistById({
  "X-API-Key": "",
  "id": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* since (string) - ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
* until (string) - ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
* decomposed (boolean) - In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
* id (string) **required** - BBC Music Playlist Id - Used to get single resource score

### getMusicPopularTracks
List of popular tracks for BBC Music. Filter by time, network, artist, playlist or programme.



```js
bbc.getMusicPopularTracks({
  "X-API-Key": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* since (string) - ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
* until (string) - ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
* network (string) - Return items with given Network ID
* programme (string) - Items with given Programme Pid
* artist (string) - MusicBrainz artist ID
* decomposed (boolean) - In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

### getMusicPopularTrackById
Popular Track for BBC Music



```js
bbc.getMusicPopularTrackById({
  "X-API-Key": "",
  "id": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* since (string) - ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now
* until (string) - ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params
* network (string) - Return items with given Network ID
* programme (string) - Items with given Programme Pid
* artist (string) - MusicBrainz artist ID
* decomposed (boolean) - In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days
* id (string) **required** - BBC Music Track Id - Used to get single resource score

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-API-Key (string) **required** - API_KEY
* Body (object) **required**

### my.categories.follows.get
List of followed categories for a given user.



```js
bbc.my.categories.follows.get({
  "Authorization": "",
  "X-API-Key": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-API-Key (string) **required** - API_KEY
* Body (object) **required**

### getMusicExport
Returns status of all previous third party export actions for a given BBC Music user.



```js
bbc.getMusicExport({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* over16 (boolean) **required** - Boolean age check
* vendor (string) - Specify Vendor Jobs

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* over16 (boolean) **required** - Boolean age check
* vendor (string) - Specify Vendor Jobs
* body (array) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* over16 (boolean) **required** - Boolean age check
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit
* vendor (string) - Specify Vendor Tracks
* status (string) - Specify Track status

### getPersonalisedMusicFavourites
List of favourited tracks and clips for a given user for BBC Music.



```js
bbc.getPersonalisedMusicFavourites({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit
* action (string) - Filters activities based on the type of action
* music-data (boolean) - Omits music data from the response, defaults to true

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* body (array) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* body (array) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Music favourite types: Clips or Tracks
* action (string) - Filters activities based on the type of action
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Music favourite types: Clips or Tracks
* id (string) **required** - Clip PID or Track ID

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Music favourite types: Clips or Tracks
* id (string) **required** - Clip PID or Track ID

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Music favourite types: Clips or Tracks
* id (string) **required** - Clip PID or Track ID
* body (object) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Music favourite types: Clips or Tracks
* id (string) **required** - Clip PID or Track ID
* body (object) **required**

### getPersonalisedMusicFollows
List of followed networks, categories, artists, playlists and genres for a given user for BBC Music.



```js
bbc.getPersonalisedMusicFollows({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* action (string) - Filters activities based on the type of action
* music-data (boolean) - Omits music data from the response, defaults to true
* music_context (string) - Specify context to be passed to Music API
* music_within_uk (boolean) - Specify location to be passed to Music API
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* action (string) - Filters activities based on the type of action
* music-data (boolean) - Omits music data from the response, defaults to true
* music_context (string) - Specify context to be passed to Music API
* music_within_uk (boolean) - Specify location to be passed to Music API
* body (array) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* action (string) - Filters activities based on the type of action
* music-data (boolean) - Omits music data from the response, defaults to true
* music_context (string) - Specify context to be passed to Music API
* music_within_uk (boolean) - Specify location to be passed to Music API
* body (array) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Music follows types: Playlists, Services, Genres & Artists
* action (string) - Filters activities based on the type of action
* music-data (boolean) - Omits music data from the response, defaults to true
* music_context (string) - Specify context to be passed to Music API
* music_within_uk (boolean) - Specify location to be passed to Music API
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Music follows types: Playlists, Services, Genres & Artists
* id (string) **required** - Playlists, Services, Networks, Genres, Categories or Artists ID
* music-data (boolean) - Omits music data from the response, defaults to true
* music_context (string) - Specify context to be passed to Music API
* music_within_uk (boolean) - Specify location to be passed to Music API

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Music follows types: Playlists, Services, Genres & Artists
* id (string) **required** - Playlists, Services, Networks, Genres, Categories or Artists ID
* music-data (boolean) - Omits music data from the response, defaults to true
* music_context (string) - Specify context to be passed to Music API
* music_within_uk (boolean) - Specify location to be passed to Music API

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Music follows types: Playlists, Services, Genres & Artists
* id (string) **required** - Playlists, Services, Networks, Genres, Categories or Artists ID
* music-data (boolean) - Omits music data from the response, defaults to true
* music_context (string) - Specify context to be passed to Music API
* music_within_uk (boolean) - Specify location to be passed to Music API
* body (object) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Music follows types: Playlists, Services, Genres & Artists
* id (string) **required** - Playlists, Services, Networks, Genres, Categories or Artists ID
* music-data (boolean) - Omits music data from the response, defaults to true
* music_context (string) - Specify context to be passed to Music API
* music_within_uk (boolean) - Specify location to be passed to Music API
* body (object) **required**

### deleteMusicPreferencesExport
Remove export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.



```js
bbc.deleteMusicPreferencesExport({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY

### getMusicPreferencesExport
Returns export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.



```js
bbc.getMusicPreferencesExport({
  "Authorization": "",
  "X-Authentication-Provider": "",
  "X-API-Key": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* body (object) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* vendor (string) **required** - Supported 3rd Party Vendor

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* vendor (string) **required** - Supported 3rd Party Vendor

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* vendor (string) **required** - Supported 3rd Party Vendor
* body (object) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* vendor (string) **required** - Supported 3rd Party Vendor
* body (object) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit
* Body (object) **required**

### my.networks.follows.get
List of followed networks for a given user.



```js
bbc.my.networks.follows.get({
  "Authorization": "",
  "X-API-Key": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit
* Body (object) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-API-Key (string) **required** - API_KEY
* Body (object) **required**

### suggestContainer
Suggested Playspace Container



```js
bbc.suggestContainer({
  "Authorization": "",
  "X-API-Key": "",
  "previous_pid": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-API-Key (string) **required** - API_KEY
* previous_pid (string) **required** - Clip or Episode PID of the previous or first content item in the Playspace stream.
* previous_container (string) - Container ID of the previous container in the Playspace stream.

### getContainer
Playspace Container by ID



```js
bbc.getContainer({
  "Authorization": "",
  "X-API-Key": "",
  "id": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-API-Key (string) **required** - API_KEY
* id (string) **required** - Playspace Container ID

### getRecommendations
Recommended Programmes from the Audience Platforms' Recomendations Service



```js
bbc.getRecommendations({
  "Authorization": "",
  "X-API-Key": "",
  "rights": ""
}, context)
```

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit
* rights (string) **required** - Only return available results for the web/mobile.

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit
* sort (string) - Sort order for Personalised Radio results
* show_all_activity (boolean) - Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* body (array) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* body (array) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Radio favourite types: Clips or Episodes
* sort (string) - Sort order for Personalised Radio results
* show_all_activity (boolean) - Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Radio favourite types: Clips or Episodes
* pid (string) **required** - pid

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Radio favourite types: Clips or Episodes
* pid (string) **required** - pid
* show_all_activity (boolean) - Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Radio favourite types: Clips or Episodes
* pid (string) **required** - pid
* body (object) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Radio favourite types: Clips or Episodes
* pid (string) **required** - pid
* body (object) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit
* sort (string) - Sort order for Personalised Radio results
* show_all_activity (boolean) - Include items which have been 'soft' unfollowed in response. I.e items with UAS type of 'unfollowed'

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* body (array) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* body (array) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Radio follows types: Brands or Series
* sort (string) - Sort order for Personalised Radio results
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit
* show_all_activity (boolean) - Include items which have been 'soft' unfollowed in response. I.e items with UAS type of 'unfollowed'

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Radio follows types: Brands or Series
* pid (string) **required** - pid

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Radio follows types: Brands or Series
* pid (string) **required** - pid

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Radio follows types: Brands or Series
* pid (string) **required** - pid
* body (object) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* type (string) **required** - Supported Radio follows types: Brands or Series
* pid (string) **required** - pid
* body (object) **required**

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

#### Parameters
* Authorization (string) **required** - Bearer OAUTH_TOKEN
* X-Authentication-Provider (string) **required** - Authentication type
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit
* sort (string) - Sort order for Personalised Radio results
* show_all_activity (boolean) - Include expired/unavailable items

### getPodcasts
Retrieve all Podcasts



```js
bbc.getPodcasts({
  "X-API-Key": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit
* sort (string) - Sort order for Podcasts results
* network (string) - Network Master Brand ID (mid)
* network_url_key (string) - Network URL key
* category (string) - Category ID
* q (string) - Search query String
* coverage (string) - Local, National or Regional Coverage

### getPodcastsFeatured
Retrieve featured podcasts



```js
bbc.getPodcastsFeatured({
  "X-API-Key": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY

### getPodcastByPid
Retrieve data about the podcast with the supplied PID



```js
bbc.getPodcastByPid({
  "X-API-Key": "",
  "pid": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* pid (string) **required** - pid
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

### getPodcastEpisodes
Retrieve all episodes for a specific podcast



```js
bbc.getPodcastEpisodes({
  "X-API-Key": "",
  "pid": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* pid (string) **required** - pid
* offset (integer) - Paginated results offset
* limit (integer) - Paginated results limit

### getRadioNetworks
All iPlayer Radio networks - contains business logic for masterbrand and service relationships



```js
bbc.getRadioNetworks({
  "X-API-Key": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* preset (boolean) - Returns all networks needed for iPlayer Radio responsive web navigation
* international (boolean) - Returns all networks available internationally

### getPopularEpisodesClips
Retrieve Popular Episodes & Clips



```js
bbc.getPopularEpisodesClips({
  "X-API-Key": ""
}, context)
```

#### Parameters
* X-API-Key (string) **required** - API_KEY
* type (string) - Programme type required. Accepts comma separated values
* distinct (string) - Filter by deduplication rule. E.g. 'tleo' returns programmes with distinct top level episode objects
* network (string) - Filter by network master brand ID (mid). Accepts comma separated values
* network_url_key (string) - Filter by network URL key. Accepts comma separated values
* category (string) - Filter by category. Accepts comma separated values
* format (string) - Filter by format. Accepts comma separated values
* group (string) - Filter by group. Accepts comma separated values
* media_type (string) - Filter by programme media type. Accepts comma separated values
* container (string) - Filter by container. Accepts any pid e.g. brand,series,episode
* media_set (array) - Filter by media set name. Accepts comma separated combinations of the following: pc,mobile-download,android-download-high,apple-ios-download-high,mobile-cellular-main,mobile-phone-main,iptv-all
* q (string) - Search query String

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

#### Parameters
* X-API-Key (string) **required** - API_KEY
* kind (string) - Filter by provided query. E.g. 'tleo' returns top level objects, ie. brands, orphaned series, and orphaned episodes
* network (string) - Filter by network master brand ID (mid). Accepts comma separated values
* network_url_key (string) - Filter by network URL key. Accepts comma separated values
* category (string) - Filter by category id. Accepts comma separated values. See /category endpoint below for the type of response provided
* sort (string) - Sort by provided query. E.g. 'title' sorts in ascending order, and -title sorts in descending order
* container (string) - Filter by container. Accepts any brand or series pid
* type (string) - Filter by programme type. Accepts comma separated values

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

#### Parameters
* X-API-Key (string) **required** - API_KEY
* pid (string) **required** - pid

