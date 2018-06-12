# @datafire/setlist_fm

Client library for setlist.fm

## Installation and Usage
```bash
npm install --save @datafire/setlist_fm
```
```js
let setlist_fm = require('@datafire/setlist_fm').create();

setlist_fm.resource__1.0_search_venues_getVenues_GET({}).then(data => {
  console.log(data);
});
```

## Description

<p>
The setlist.fm API has been designed to give you easy access to setlist data in order to build fancy websites and
other applications. Before starting to use the API, be sure to ...
<ol>
<li>... understand how setlist.fm works (the <a href="https://www.setlist.fm/faq">FAQ</a> and the
<a href="https://www.setlist.fm/guidelines">Guidelines</a> are a good starting point),</li>
<li>... read this documentation carefully and</li>
<li>... <a href="https://www.setlist.fm/settings/api">apply for an API key</a> (link for logged in users only) - if
you're no registered user yet, then <a href="https://www.setlist.fm/signup">register first</a> (it's free).</li>
</ol>
</p>
<p>
If this documentation isn't enough or if you've got other things you'd like to tell us about the API, visit the
<a href="https://www.setlist.fm/forum/setlistfm/setlistfm-api">API Forum</a>.
</p>
<p>
Note that the setlist.fm API is, according to the <a href="https://www.setlist.fm/help/api-terms">API terms of
service</a>, only free for non-commercial projects. If you're interested in using the API for commercial purposes,
<a href="https://www.setlist.fm/contact">contact us</a>.
</p>

<h2>About this Service</h2>
<p>
This service provides methods to get both setlists and components of setlists such as artists, cities, countries or
venues.
</p>

<h2>Supported Content Types</h2>
<p>
The REST service currently supports XML (default) and JSON content.
</p>
<p>
To receive a JSON response, set the <code>Accept</code>
<a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.1">header</a> to <em>application/json</em>.
</p>

<h2>Internationalization</h2>
<p>
<small>(Please note that this is an experimental feature and does not work for all cities!)</small>
</p>
<p>
Most of the featured methods honor the <code>Accept-Language</code>
<a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.4">header</a>. This header is used for
localizing cities and countries. The default language is English (en), but you can provide any of the languages
Spanish (es), French (fr), German (de), Portuguese (pt), Turkish (tr), Italian (it) or Polish (pl).
</p>
<p>
E.g. if you search a setlist for a concert that took place in Vienna and you pass &quot;de&quot; as header, you'll
get <em>&quot;Wien, &Ouml;sterreich&quot;</em> instead of <em>&quot;Vienna, Austria&quot;</em>.<br/>
This also works if you use a different language than the country's native language.
</p>
<p>
E.g. for a concert in New York, you'll get <em>&quot;Nueva York, Estados Unidos&quot;</em> instead of <em>&quot;New
York, United States&quot;</em> if you pass &quot;es&quot; as language.
</p>

<h2>API Keys</h2>

API keys (<a href="https://www.setlist.fm/settings/api">application form</a>) must be included in the request with
the <code>x-api-key</code> header.

<h2>Version History</h2>
<table class="table table-bordered table-versions">
<thead>
<tr>
<th>Version</th>
<th>Docs</th>
<th>End of Service</th>
</tr>
</thead> <tbody>
<tr>
<td><strong>1.0</strong></td>
<td><a href="/docs/1.0">Docs</a></td>
<td>-</li>
</tr>
<tr>
<td><strong>0.1</strong></td>
<td></td>
<td>December 31, 2017</li>
</tr>
</tbody>
</table>

## Actions

### resource__1.0_artist__mbid__getArtist_GET
<p>
Returns an artist for a given Musicbrainz MBID
</p>


```js
setlist_fm.resource__1.0_artist__mbid__getArtist_GET({
  "mbid": ""
}, context)
```

#### Input
* input `object`
  * mbid **required** `string`: a Musicbrainz MBID, e.g. 0bfba3d3-6a04-4779-bb0a-df07df5b0558

#### Output
* output [json_Artist](#json_artist)

### resource__1.0_artist__mbid__setlists_getArtistSetlists_GET
<p>
Get a list of an artist's setlists.
</p>


```js
setlist_fm.resource__1.0_artist__mbid__setlists_getArtistSetlists_GET({
  "mbid": ""
}, context)
```

#### Input
* input `object`
  * mbid **required** `string`: the Musicbrainz MBID of the artist
  * p `integer`: the number of the result page

#### Output
* output [json_Setlists](#json_setlists)

### resource__1.0_city__geoId__getCity_GET
Get a city by its unique geoId.


```js
setlist_fm.resource__1.0_city__geoId__getCity_GET({
  "geoId": ""
}, context)
```

#### Input
* input `object`
  * geoId **required** `string`: the city's geoId

#### Output
* output [json_City](#json_city)

### resource__1.0_search_artists_getArtists_GET
Search for artists.


```js
setlist_fm.resource__1.0_search_artists_getArtists_GET({}, context)
```

#### Input
* input `object`
  * artistMbid `string`: the artist's Musicbrainz Identifier (mbid)
  * artistName `string`: the artist's name
  * artistTmid `integer`: the artist's Ticketmaster Identifier (tmid)
  * p `integer`: the number of the result page you'd like to have
  * sort `string`: the sort of the result, either sortName (default) or relevance

#### Output
* output [json_Artists](#json_artists)

### resource__1.0_search_cities_getCities_GET
Search for a city.


```js
setlist_fm.resource__1.0_search_cities_getCities_GET({}, context)
```

#### Input
* input `object`
  * country `string`: the city's country
  * name `string`: name of the city
  * p `integer`: the number of the result page you'd like to have
  * state `string`: state the city lies in
  * stateCode `string`: state code the city lies in

#### Output
* output [json_Cities](#json_cities)

### resource__1.0_search_countries_getCountries_GET
Get a complete list of all supported countries.


```js
setlist_fm.resource__1.0_search_countries_getCountries_GET(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [json_Countries](#json_countries)

### resource__1.0_search_setlists_getSetlists_GET
Search for setlists.


```js
setlist_fm.resource__1.0_search_setlists_getSetlists_GET({}, context)
```

#### Input
* input `object`
  * artistMbid `string`: the artist's Musicbrainz Identifier (mbid)
  * artistName `string`: the artist's name
  * artistTmid `integer`: the artist's Ticketmaster Identifier (tmid)
  * cityId `string`: the city's geoId
  * cityName `string`: the name of the city
  * countryCode `string`: the country code
  * date `string`: the date of the event (format dd-MM-yyyy)
  * lastFm `integer`: the event's Last.fm Event ID (deprecated)
  * lastUpdated `string`: the date and time (UTC) when this setlist was last updated (format yyyyMMddHHmmss) - either edited or
  * p `integer`: the number of the result page
  * state `string`: the state
  * stateCode `string`: the state code
  * tourName `string`
  * venueId `string`: the venue id
  * venueName `string`: the name of the venue
  * year `string`: the year of the event

#### Output
* output [json_Setlists](#json_setlists)

### resource__1.0_search_venues_getVenues_GET
Search for venues.


```js
setlist_fm.resource__1.0_search_venues_getVenues_GET({}, context)
```

#### Input
* input `object`
  * cityId `string`: the city's geoId
  * cityName `string`: name of the city where the venue is located
  * country `string`: the city's country
  * name `string`: name of the venue
  * p `integer`: the number of the result page you'd like to have
  * state `string`: the city's state
  * stateCode `string`: the city's state code

#### Output
* output [json_Venues](#json_venues)

### resource__1.0_setlist_version__versionId__getSetlistVersion_GET
<p>
Returns a setlist for the given versionId. The setlist returned isn't necessarily the most recent version. E.g.
if you pass the versionId of a setlist that got edited since you last accessed it, you'll get the same version as
last time.
</p>


```js
setlist_fm.resource__1.0_setlist_version__versionId__getSetlistVersion_GET({
  "versionId": ""
}, context)
```

#### Input
* input `object`
  * versionId **required** `string`: the version id

#### Output
* output [json_Setlist](#json_setlist)

### resource__1.0_setlist__setlistId__getSetlist_GET
<p>
Returns the current version of a setlist. E.g. if you pass the id of a setlist that got edited since you last
accessed it, you'll get the current version.
</p>


```js
setlist_fm.resource__1.0_setlist__setlistId__getSetlist_GET({
  "setlistId": ""
}, context)
```

#### Input
* input `object`
  * setlistId **required** `string`: the setlist id

#### Output
* output [json_Setlist](#json_setlist)

### resource__1.0_user__userId__getUser_GET
Get a user by userId.


```js
setlist_fm.resource__1.0_user__userId__getUser_GET({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: the user's userId

#### Output
* output [json_User](#json_user)

### resource__1.0_user__userId__attended_getUserAttendedSetlists_GET
<p>
Get a list of setlists of concerts attended by a user.
</p>


```js
setlist_fm.resource__1.0_user__userId__attended_getUserAttendedSetlists_GET({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: the user's userId
  * p `integer`: the number of the result page

#### Output
* output [json_Setlists](#json_setlists)

### resource__1.0_user__userId__edited_getUserEditedSetlists_GET
<p>
Get a list of setlists of concerts edited by a user. The list contains the current version, not the version
edited.
</p>


```js
setlist_fm.resource__1.0_user__userId__edited_getUserEditedSetlists_GET({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: the user's userId
  * p `integer`: the number of the result page

#### Output
* output [json_Setlists](#json_setlists)

### resource__1.0_venue__venueId__getVenue_GET
Get a venue by its unique id.


```js
setlist_fm.resource__1.0_venue__venueId__getVenue_GET({
  "venueId": ""
}, context)
```

#### Input
* input `object`
  * venueId **required** `string`: the venue's id

#### Output
* output [json_Venue](#json_venue)

### resource__1.0_venue__venueId__setlists_getVenueSetlists_GET
<p>
Get setlists for a specific venue.
</p>


```js
setlist_fm.resource__1.0_venue__venueId__setlists_getVenueSetlists_GET({
  "venueId": ""
}, context)
```

#### Input
* input `object`
  * venueId **required** `string`: the id of the venue
  * p `integer`: the number of the result page

#### Output
* output [json_Setlists](#json_setlists)



## Definitions

### json_Artist
* artist `object`: This class represents an artist. An artist is a musician or a group of musicians. Each artist has a definite
  * disambiguation `string`: disambiguation to distinguish between artists with same names
  * mbid `string`: unique Musicbrainz Identifier (MBID), e.g. <em>&quot;b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d&quot;</em>
  * name `string`: the artist's name, e.g. <em>&quot;The Beatles&quot;</em>
  * sortName `string`: the artist's sort name, e.g. <em>&quot;Beatles, The&quot;</em> or <em>&quot;Springsteen, Bruce&quot;</em>
  * tmid `number`: unique Ticket Master Identifier (TMID), e.g. <em>735610</em>
  * url `string`: the attribution url

### json_Artists
* artists `object`: A Result consisting of a list of artists.
  * artist `array`: result list of artists
    * items [json_Artist](#json_artist)
  * itemsPerPage `number`: the amount of items you get per page
  * page `number`: the current page. starts at 1
  * total `number`: the total amount of items matching the query

### json_Cities
* cities `object`: A Result consisting of a list of cities.
  * cities `array`: result list of cities
    * items [json_City](#json_city)
  * itemsPerPage `number`: the amount of items you get per page
  * page `number`: the current page. starts at 1
  * total `number`: the total amount of items matching the query

### json_City
* city `object`: This class represents a city where Venues are located. Most of the original city data was taken from
  * coords [json_Coords](#json_coords)
  * country [json_Country](#json_country)
  * id `string`: unique identifier
  * name `string`: the city's name, depending on the language valid values are e.g. <em>&quot;M&uuml;chen&quot;</em> or
  * state `string`: The name of city's state, e.g. <em>&quot;Bavaria&quot;</em> or <em>&quot;Florida&quot;</em>
  * stateCode `string`: The code of the city's state. For most countries this is a two-digit numeric code, with which the state can be

### json_Coords
* coords `object`: Coordinates of a point on the globe. Mostly used for Cities.
  * lat `number`: The latitude part of the coordinates.
  * long `number`: The longitude part of the coordinates.

### json_Countries
* countries `object`: A Result consisting of a list of countries.
  * country `array`: result list of countries
    * items [json_Country](#json_country)
  * itemsPerPage `number`: the amount of items you get per page
  * page `number`: the current page. starts at 1
  * total `number`: the total amount of items matching the query

### json_Country
* country `object`: This class represents a country on earth.
  * code `string`: The country's <a href= "http://www.iso.org/iso/english_country_names_and_code_elements" >ISO code</a>. E.g.
  * name `string`: The country's name. Can be a localized name - e.g. <em>&quot;Austria&quot;</em> or

### json_Error
* error `object`: Returned in case of an error.
  * code `number`: the HTTP status code
  * message `string`: an additional error message
  * status `string`: the HTTP status message
  * timestamp `string`: current timestamp

### json_Set
* set `object`: A setlist consists of different (at least one) sets. Sets can either be sets as defined in the
  * encore `number`: if the set is an encore, this is the number of the encore, starting with 1 for the first encore, 2 for the second
  * name `string`: the description/name of the set. E.g. <em>&quot;Acoustic set&quot;</em> or <em>&quot;Paul McCartney
  * song `array`: this set's songs
    * items [json_Song](#json_song)

### json_Setlist
* setlist `object`: Setlists, that's what it's all about. So if you're trying to use this API without knowing what a setlist is then
  * artist [json_Artist](#json_artist)
  * eventDate `string`: date of the concert in the format &quot;dd-MM-yyyy&quot;
  * id `string`: unique identifier
  * info `string`: additional information on the concert - see the <a href="https://www.setlist.fm/guidelines">setlist.fm
  * lastFmEventId `number`: the id this event has on <a href="http://last.fm/">last.fm</a> (deprecated)
  * lastUpdated `string`: date, time and time zone of the last update to this setlist in the format
  * set `array`: all sets of this setlist
    * items [json_Set](#json_set)
  * tour [json_Tour](#json_tour)
  * url `string`: the attribution url to which you have to link to wherever you use data from this setlist in your application
  * venue [json_Venue](#json_venue)
  * versionId `string`: unique identifier of the version

### json_Setlists
* setlists `object`: A Result consisting of a list of setlists.
  * itemsPerPage `number`: the amount of items you get per page
  * page `number`: the current page. starts at 1
  * setlist `array`: result list of setlists
    * items [json_Setlist](#json_setlist)
  * total `number`: the total amount of items matching the query

### json_Song
* song `object`: This class represents a song that is part of a Set.
  * cover [json_Artist](#json_artist)
  * info `string`: Special incidents or additional information about the way the song was performed at this specific concert. See
  * name `string`: The name of the song. E.g. <em>Yesterday</em> or <em>&quot;Wish You Were Here&quot;</em>
  * tape `boolean`: The song came from tape rather than being performed live. See the
  * with [json_Artist](#json_artist)

### json_Tour
* tour `object`: The tour a setlist was a part of.
  * name `string`: The name of the tour.

### json_User
* user `object`: This class represents a user.
  * about `string`
  * flickr `string`
  * fullname `string`
  * lastFm `string`
  * mySpace `string`
  * twitter `string`
  * url `string`
  * userId `string`
  * website `string`

### json_Venue
* venue `object`: Venues are places where concerts take place. They usually consist of a venue name and a city - but there are also
  * city [json_City](#json_city)
  * id `string`: unique identifier
  * name `string`: the name of the venue, usually without city and country. E.g. <em>&quot;Madison Square Garden&quot;</em> or
  * url `string`: the attribution url

### json_Venues
* venues `object`: A Result consisting of a list of venues.
  * itemsPerPage `number`: the amount of items you get per page
  * page `number`: the current page. starts at 1
  * total `number`: the total amount of items matching the query
  * venue `array`: result list of venues
    * items [json_Venue](#json_venue)

### xml_ns0_artist
* artist `object`: This class represents an artist. An artist is a musician or a group of musicians. Each artist has a definite
  * disambiguation `string`: disambiguation to distinguish between artists with same names
  * mbid `string`: unique Musicbrainz Identifier (MBID), e.g. <em>&quot;b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d&quot;</em>
  * name `string`: the artist's name, e.g. <em>&quot;The Beatles&quot;</em>
  * sortName `string`: the artist's sort name, e.g. <em>&quot;Beatles, The&quot;</em> or <em>&quot;Springsteen, Bruce&quot;</em>
  * tmid `number`: unique Ticket Master Identifier (TMID), e.g. <em>735610</em>
  * url `string`: the attribution url

### xml_ns0_artists
* artists `object`: A Result consisting of a list of artists.
  * itemsPerPage `number`: the amount of items you get per page
  * page `number`: the current page. starts at 1
  * total `number`: the total amount of items matching the query

### xml_ns0_cities
* cities `object`: A Result consisting of a list of cities.
  * itemsPerPage `number`: the amount of items you get per page
  * page `number`: the current page. starts at 1
  * total `number`: the total amount of items matching the query

### xml_ns0_city
* city `object`: This class represents a city where Venues are located. Most of the original city data was taken from
  * coords [xml_ns0_coords](#xml_ns0_coords)
  * country [xml_ns0_country](#xml_ns0_country)
  * id `string`: unique identifier
  * name `string`: the city's name, depending on the language valid values are e.g. <em>&quot;M&uuml;chen&quot;</em> or
  * state `string`: The name of city's state, e.g. <em>&quot;Bavaria&quot;</em> or <em>&quot;Florida&quot;</em>
  * stateCode `string`: The code of the city's state. For most countries this is a two-digit numeric code, with which the state can be

### xml_ns0_coords
* coords `object`: Coordinates of a point on the globe. Mostly used for Cities.
  * lat `number`: The latitude part of the coordinates.
  * long `number`: The longitude part of the coordinates.

### xml_ns0_countries
* countries `object`: A Result consisting of a list of countries.
  * itemsPerPage `number`: the amount of items you get per page
  * page `number`: the current page. starts at 1
  * total `number`: the total amount of items matching the query

### xml_ns0_country
* country `object`: This class represents a country on earth.
  * code `string`: The country's <a href= "http://www.iso.org/iso/english_country_names_and_code_elements" >ISO code</a>. E.g.
  * name `string`: The country's name. Can be a localized name - e.g. <em>&quot;Austria&quot;</em> or

### xml_ns0_error
* error `object`: Returned in case of an error.
  * code `number`: the HTTP status code
  * message `string`: an additional error message
  * status `string`: the HTTP status message
  * timestamp `string`: current timestamp

### xml_ns0_result
* result `object`: <p>
  * itemsPerPage `number`: the amount of items you get per page
  * page `number`: the current page. starts at 1
  * total `number`: the total amount of items matching the query

### xml_ns0_set
* set `object`: A setlist consists of different (at least one) sets. Sets can either be sets as defined in the
  * encore `number`: if the set is an encore, this is the number of the encore, starting with 1 for the first encore, 2 for the second
  * name `string`: the description/name of the set. E.g. <em>&quot;Acoustic set&quot;</em> or <em>&quot;Paul McCartney
  * song [xml_ns0_song](#xml_ns0_song)

### xml_ns0_setlist
* setlist `object`: Setlists, that's what it's all about. So if you're trying to use this API without knowing what a setlist is then
  * artist [xml_ns0_artist](#xml_ns0_artist)
  * eventDate `string`: date of the concert in the format &quot;dd-MM-yyyy&quot;
  * id `string`: unique identifier
  * info `string`: additional information on the concert - see the <a href="https://www.setlist.fm/guidelines">setlist.fm
  * lastFmEventId `number`: the id this event has on <a href="http://last.fm/">last.fm</a> (deprecated)
  * lastUpdated `string`: date, time and time zone of the last update to this setlist in the format
  * set [xml_ns0_set](#xml_ns0_set)
  * tour [xml_ns0_tour](#xml_ns0_tour)
  * url `string`: the attribution url to which you have to link to wherever you use data from this setlist in your application
  * venue [xml_ns0_venue](#xml_ns0_venue)
  * versionId `string`: unique identifier of the version

### xml_ns0_setlists
* setlists `object`: A Result consisting of a list of setlists.
  * itemsPerPage `number`: the amount of items you get per page
  * page `number`: the current page. starts at 1
  * total `number`: the total amount of items matching the query

### xml_ns0_song
* song `object`: This class represents a song that is part of a Set.
  * cover [xml_ns0_artist](#xml_ns0_artist)
  * info `string`: Special incidents or additional information about the way the song was performed at this specific concert. See
  * name `string`: The name of the song. E.g. <em>Yesterday</em> or <em>&quot;Wish You Were Here&quot;</em>
  * tape `boolean`: The song came from tape rather than being performed live. See the
  * with [xml_ns0_artist](#xml_ns0_artist)

### xml_ns0_tour
* tour `object`: The tour a setlist was a part of.
  * name `string`: The name of the tour.

### xml_ns0_user
* user `object`: This class represents a user.
  * about `string`
  * flickr `string`
  * fullname `string`
  * lastFm `string`
  * mySpace `string`
  * twitter `string`
  * url `string`
  * userId `string`
  * website `string`

### xml_ns0_venue
* venue `object`: Venues are places where concerts take place. They usually consist of a venue name and a city - but there are also
  * city [xml_ns0_city](#xml_ns0_city)
  * id `string`: unique identifier
  * name `string`: the name of the venue, usually without city and country. E.g. <em>&quot;Madison Square Garden&quot;</em> or
  * url `string`: the attribution url

### xml_ns0_venues
* venues `object`: A Result consisting of a list of venues.
  * itemsPerPage `number`: the amount of items you get per page
  * page `number`: the current page. starts at 1
  * total `number`: the total amount of items matching the query


