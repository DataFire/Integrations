# @datafire/spinitron

Client library for Spinitron v2

## Installation and Usage
```bash
npm install --save @datafire/spinitron
```
```js
let spinitron = require('@datafire/spinitron').create({
  Bearer: ""
});

spinitron.spins.get({}).then(data => {
  console.log(data);
});
```

## Description

Maximum limit is 200. Default limit is 20.

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
  * live `boolean`: Only when automation params are configured with the "Pass through" mode.
  * start `string`
  * duration `integer`
  * artist **required** `string`
  * release `string`
  * label `string`
  * genre `string`
  * song **required** `string`
  * composer `string`
  * isrc `string`

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
* Persona `object`
  * _links `object`
    * self [Link](#link)
    * shows `array`
      * items [Link](#link)
  * bio `string`
  * email `string`
  * id `integer`
  * image `string`
  * name `string`
  * since `string`: Year
  * website `string`

### Playlist
* Playlist `object`
  * _links `object`
    * persona [Link](#link)
    * self [Link](#link)
    * show [Link](#link)
    * spins [Link](#link)
  * automation `boolean`
  * category `string`
  * description `string`
  * duration `integer`: Duration in seconds
  * end `string`: UTC datetime, ISO-8601.
  * episode_description `string`
  * episode_name `string`
  * hide_dj `boolean`
  * id `integer`
  * image `string`
  * persona_id `integer`
  * show_id `integer`
  * since `string`
  * start `string`: UTC datetime, ISO-8601.
  * timezone `string`
  * title `string`
  * url `string`

### Show
* Show `object`
  * _links `object`
    * personas `array`
      * items [Link](#link)
    * playlists [Link](#link)
    * self [Link](#link)
  * category `string`
  * description `string`
  * duration `integer`: Duration in seconds
  * end `string`: UTC datetime, ISO-8601.
  * hide_dj `boolean`
  * id `integer`
  * image `string`
  * one_off `boolean`
  * since `string`: Year
  * start `string`: UTC datetime, ISO-8601.
  * timezone `string`
  * title `string`
  * url `string`

### Spin
* Spin `object`
  * _links `object`
    * playlist [Link](#link)
    * self [Link](#link)
  * artist `string`
  * composer `string`
  * duration `integer`: Duration in seconds
  * end `string`: UTC datetime, ISO-8601.
  * genre `string`
  * id `integer`
  * isrc `string`
  * label `string`
  * note `string`
  * playlist_id `integer`
  * release `string`
  * song `string`
  * start `string`: UTC datetime, ISO-8601.
  * timezone `string`

### ValidationError
* ValidationError `object`
  * field `string`
  * message `string`


