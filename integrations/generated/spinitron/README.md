# @datafire/spinitron

Client library for Spinitron v2 API

## Installation and Usage
```bash
npm install --save @datafire/spinitron
```
```js
let spinitron = require('@datafire/spinitron').create({
  accessToken: "",
  httpBearer: ""
});

.then(data => {
  console.log(data);
});
```

## Description

## Notes

**Tutorial demo** using this API is at [https://spinitron.com/v2-api-demo/](https://spinitron.com/v2-api-demo/). For web integration using iframes and/or JavaScript instead of an API, see [https://spinitron.github.io/v2-web-integration/](https://spinitron.github.io/v2-web-integration/).

**Your API key** is found in the Spinitron web app. Log in to Spinitron and go to *Automation & API* in the *Admin* menu.

**Authenticate** by presenting your API key using either HTTP Bearer Authorization
(preferred)

    curl -H 'Authorization: Bearer YOURAPIKEY' 'https://spinitron.com/api/spins'

or in the query parameter `access-token` (less secure owing to webserver
log files)

    curl 'https://spinitron.com/api/spins?access-token=YOURAPIKEY'

**Limit** per page of results is 20 by default and miximally 200.

**Try it out** below works to
generate example cURL requests but not to get responses from Spinitron. We
do not accept queries sent from web browsers. Copy-paste the cURL commands
and run them from your computer.

**Cache** the data you get from the API if you are using it in web or mobile integration. It's not ok to query the API on *every* page request you serve. The [demo](https://spinitron.com/v2-api-demo/) shows how easy it can be to implement a file cache.

An extension to this API with access to all stations for partner applications is available. Contact us.


## Actions

### personas.get
Get Personas


```js
spinitron.personas.get({}, context)
```

#### Input
* input `object`
  * name `string`: Filter by Persona name
  * count `integer`: Amount of items to return
  * page `integer`: Offset, used together with count
  * fields `array`: Allows to select only needed fields
  * expand `array`: Allows to select extra fields

#### Output
* output
  * _links `object`
    * self [Link](#link)
  * _meta [Pagination](#pagination)
  * items `array`
    * items [Persona](#persona)

### personas.id.get
Get Persona by id


```js
spinitron.personas.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * fields `array`: Allows to select only needed fields
  * expand `array`: Allows to select extra fields

#### Output
* output [Persona](#persona)

### playlists.get
Get Playlists optionally filtered by a datetime range.
Only past Playlists will be returned (with allowed tolerance equals 1 hour in future).

Ordered chronologically from newest to oldest.



```js
spinitron.playlists.get({}, context)
```

#### Input
* input `object`
  * start `string`: The datetime starting from items must be returned. Maximum 1 hour in future.
  * end `string`: The ending datetime. Maximum 1 hour in future.
  * show_id `integer`: Filter by show
  * persona_id `integer`: Filter by persona
  * count `integer`: Amount of items to return
  * page `integer`: Offset, used together with count
  * fields `array`: Allows to select only needed fields
  * expand `array`: Allows to select extra fields

#### Output
* output
  * _links `object`
    * self [Link](#link)
  * _meta [Pagination](#pagination)
  * items `array`
    * items [Playlist](#playlist)

### playlists.id.get
The response object represents the playlist specified by {id}.

Status 404 is returned if a playlist with {id} does not exist or if it does but starts in the future (with allowed tolerance equals 1 hour in future).



```js
spinitron.playlists.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * fields `array`: Allows to select only needed fields
  * expand `array`: Allows to select extra fields

#### Output
* output [Playlist](#playlist)

### shows.get
**Terminology**: Spinitron defines a *show* as a radio program. A show can have one or more *schedules*,
each of which may specify either an *occurence* or a *repetition*, which represents a set of occurences.
Thus scheduled shows have occurences that, for example, may be displayed in a calendar.

In the response, `items` is an array of objects representing occurences of scheduled shows.

You may optionally filter `items` to a datetime *range* by including in the request {start} and/or {end}
parameters, both of which must be no more than one hour in the past. An occurence starting at {end} is
included in the reponse.

`itmes` can include occurences that begin *or* end within the filter range. A show that goes on air before
{start} appears in `items` if it ends *after* but not *at* {start}. An occurence starting at or before {end}
is included.

If the request omits the {start} parameter, the server sets its value to the current time so that the filter
range's start is always defined. If the request specifies {end} then the requested range is *bounded*,
otherwise it is *unbounded*.

For a bounded request, `items` includes *every* occurence of all shows occuring in the range. The only
difference between objects in `items` representing a given show will be the `start` field value.

For an unbounded request, `items` includes *only one* occurence per show, specifically, the
next occurrence after {start} of all shows occuring after {start}.

Use an unbounded request to get a straight list all shows. Use a bounded request to get a calendar/agenda
of shows expanded into occurrences by thir shedules and repetitions.

Objects in `items` are ordered first by `datetime` and then by `id`.



```js
spinitron.shows.get({}, context)
```

#### Input
* input `object`
  * start `string`: The datetime starting from items must be returned. Maximum 1 hour in past.
  * end `string`: The ending datetime. Maximum 1 hour in past.
  * count `integer`: Amount of items to return
  * page `integer`: Offset, used together with count
  * fields `array`: Allows to select only needed fields
  * expand `array`: Allows to select extra fields

#### Output
* output
  * _links `object`
    * self [Link](#link)
  * _meta [Pagination](#pagination)
  * items `array`
    * items [Show](#show)

### shows.id.get
The response object represents the next occurence of the show specified by {id}.

Status 404 is returned if a show with {id} does not exist or if it does but all its scheduled occurences elapsed in the past.



```js
spinitron.shows.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * fields `array`: Allows to select only needed fields
  * expand `array`: Allows to select extra fields

#### Output
* output [Show](#show)

### spins.get
Get Spins optionally filtered by a datetime range. Only past Spins will be returned.



```js
spinitron.spins.get({}, context)
```

#### Input
* input `object`
  * start `string`: The datetime starting from items must be returned.
  * end `string`: The ending datetime.
  * playlist_id `integer`: Filter by playlist
  * show_id `integer`: Filter by show
  * count `integer`: Amount of items to return
  * page `integer`: Offset, used together with count
  * fields `array`: Allows to select only needed fields
  * expand `array`: Allows to select extra fields

#### Output
* output
  * _links `object`
    * self [Link](#link)
  * _meta [Pagination](#pagination)
  * items `array`
    * items [Spin](#spin)

### spins.post
An endpoint for automation systems to log spins into the spin table.


```js
spinitron.spins.post({
  "artist": "",
  "song": ""
}, context)
```

#### Input
* input `object`
  * artist **required** `string`
  * composer `string`
  * duration `integer`
  * genre `string`
  * isrc `string`
  * label `string`
  * live `boolean`: Only when automation params are configured with the "Pass through" mode.
  * release `string`
  * song **required** `string`
  * start `string`

#### Output
* output [Spin](#spin)

### spins.id.get
Get a Spin by id


```js
spinitron.spins.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`
  * fields `array`: Allows to select only needed fields
  * expand `array`: Allows to select extra fields

#### Output
* output [Spin](#spin)



## Definitions

### BaseIndexResponse
* BaseIndexResponse `object`
  * _links `object`
    * self [Link](#link)
  * _meta [Pagination](#pagination)

### Error
* Error `object`
  * code `integer`
  * message `string`
  * name `string`
  * status `integer`
  * type `string`

### Link
* Link `object`
  * href `string`

### Pagination
* Pagination `object`
  * currentPage `integer`
  * pageCount `integer`
  * perPage `integer`
  * totalCount `integer`

### Persona
* Persona `object`: The `Persona` object describes a radio DJ/host. One person can have multiple personas
  * _links `object`
    * self [Link](#link)
    * shows `array`
      * items [Link](#link)
  * bio `string`: HTML-formatted biography
  * email `string`: DJ/host's email address
  * id `integer`
  * image `string`
  * name `string`: On-air DJ/host name
  * since `integer`: Since what year has the DJ/host been at the station?
  * website `string`: URL to web site for the DJ/host

### Playlist
* Playlist `object`
  * _links `object`
    * persona [Link](#link)
    * self [Link](#link)
    * show [Link](#link)
    * spins [Link](#link)
  * automation `boolean`: Was the playlist created playlists created by a radio station automation system?
  * category `string`: Program/show category
  * description `string`: HTML-formatted description of the playlist or program/show
  * duration `integer`: Duration in seconds
  * end `string`: UTC datetime ISO-8601
  * episode_description `string`: HTML-formatted description of the episode
  * episode_name `string`: Title of this episode of the program/show
  * hide_dj `boolean`: Should the client application hide information about the playlist's DJ/host?
  * id `integer`
  * image `string`
  * persona_id `integer`
  * show_id `integer`
  * since `integer`: Since what year has the program/show existed?
  * start `string`: UTC datetime ISO-8601
  * timezone `string`: Station's time zone
  * title `string`: Program/show title
  * url `string`: URL to web site for the playlist or program/show

### Show
* Show `object`: A `Show` object describes one occurrence of a radio program. A result set may contain multiple occurrences of the same show with difference `start` and `end` values.
  * _links `object`
    * personas `array`
      * items [Link](#link)
    * playlists [Link](#link)
    * self [Link](#link)
  * category `string`: Program/show category
  * description `string`: HTML-formatted description of the playlist or program/show
  * duration `integer`: Duration in seconds
  * end `string`: UTC datetime ISO-8601
  * hide_dj `boolean`: Should the client application hide information about the show's DJs/hosts?
  * id `integer`
  * image `string`
  * one_off `boolean`: Is the show a one-off in the schedule instead of repeating?
  * since `integer`: Since what year has the program/show existed?
  * start `string`: UTC datetime ISO-8601
  * timezone `string`: Station's time zone
  * title `string`: Program/show title
  * url `string`: URL to web site for the program/show

### Spin
* Spin `object`
  * _links `object`
    * playlist [Link](#link)
    * self [Link](#link)
  * artist `string`
  * artist-custom `string`: Station-specific custom field relating to the song's artist
  * catalog-number `string`: Reference number in the record label's catalog
  * classical `boolean`: Is the track's metadata schema "classical" rather than "popular"?
  * composer `string`
  * conductor `string`: For classical music, conducor of the ensemble
  * duration `integer`: Duration in seconds
  * end `string`: UTC datetime ISO-8601
  * ensemble `string`: For classical music, orchestra, performing ensemble, choir, etc.
  * genre `string`
  * id `integer`
  * image `string`: Cover art
  * isrc `string`
  * iswc `string`
  * label `string`: Record label, i.e. publisher of the sound recording
  * label-custom `string`: Station-specific custom field relating to the record label
  * local `boolean`: Is the artist local to the station?
  * medium `string`: Media format in which the sound recording was reased
  * new `boolean`: Is this a recent release?
  * note `string`: HTML-formatted DJ annotation of the spin, can include images etc.
  * performers `string`: For classical music, featured performing artists, e.g. soloists
  * playlist_id `integer`
  * release `string`
  * release-custom `string`: Station-specific custom field relating to the release
  * released `integer`: Year of initial release
  * request `boolean`: Was the spin requested by a listener?
  * song `string`: Title of the song or track
  * start `string`: UTC datetime ISO-8601
  * timezone `string`: Station's time zone
  * upc `string`: Universal Product Code of the release
  * va `boolean`: Is it a "Various Artists" release?
  * work `string`: For classical music, the main compositional work the track (see `song` field) belongs to

### ValidationError
* ValidationError `object`
  * field `string`
  * message `string`


