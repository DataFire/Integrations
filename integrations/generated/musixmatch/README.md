# @datafire/musixmatch

Client library for Musixmatch API

## Installation and Usage
```bash
npm install --save @datafire/musixmatch
```
```js
let musixmatch = require('@datafire/musixmatch').create({
  key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Musixmatch lyrics API is a robust service that permits you to search and retrieve lyrics in the simplest possible way. It just works.

Include millions of licensed lyrics on your website or in your application legally.

The fastest, most powerful and legal way to display lyrics on your website or in your application.

#### Read musixmatch API Terms & Conditions and the Privacy Policy:
Before getting started, you must take a look at the [API Terms & Conditions](http://musixmatch.com/apiterms/) and the [Privacy Policy](https://developer.musixmatch.com/privacy). We’ve worked hard to make this service completely legal so that we are all protected from any foreseeable liability. Take the time to read this stuff.

#### Register for an API key:
All you need to do is [register](https://developer.musixmatch.com/signup) in order to get your API key, a mandatory parameter for most of our API calls. It’s your personal identifier and should be kept secret:

```
  https://api.musixmatch.com/ws/v1.1/track.get?apikey=YOUR_API_KEY
```
#### Integrate the musixmatch service with your web site or application
In the most common scenario you only need to implement two API calls: 
The first call is to match your catalog to ours using the [track.search](#!/Track/get_track_search) function and the second is to get the lyrics using the [track.lyrics.get](#!/Lyrics/get_track_lyrics_get) api. That’s it!

## API Methods
What does the musiXmatch API do?

The musiXmatch API allows you to read objects from our huge 100% licensed lyrics database.

To make your life easier we are providing you with one or more examples to show you how it could work in the wild. You’ll find both the API request and API response in all the available output formats for each API call. Follow the links below for the details.

The current API version is 1.1, the root URL is located at https://api.musixmatch.com/ws/1.1/

Supported input parameters can be found on the page [Input Parameters](https://developer.musixmatch.com/documentation/input-parameters). Use UTF-8 to encode arguments when calling API methods.

Every response includes a status_code. A list of all status codes can be consulted at [Status Codes](https://developer.musixmatch.com/documentation/status-codes).

## Music meta data
The musiXmatch api is built around lyrics, but there are many other data we provide through the api that can be used to improve every existent music service.

## Track
Inside the track object you can get the following extra information:

### TRACK RATING

The track rating is a score 0-100 identifying how popular is a song in musixmatch.

You can use this information to sort search results, like the most popular songs of an artist, of a music genre, of a lyrics language.

### INSTRUMENTAL AND EXPLICIT FLAGS

The instrumental flag identifies songs with music only, no lyrics.

The explicit flag identifies songs with explicit lyrics or explicit title. We're able to identify explicit words and set the flag for the most common languages.

### FAVOURITES

How many users have this song in their list of favourites.

Can be used to sort tracks by num favourite to identify more popular tracks within a set.

### MUSIC GENRE

The music genere of the song.

Can be used to group songs by genre, as input for similarity alghorithms, artist genre identification, navigate songs by genere, etc.

### SONG TITLES TRANSLATIONS

The track title, as translated in different lanauages, can be used to display the right writing for a given user, example:

LIES (Bigbang) becomes 在光化門 in chinese
HALLELUJAH (Bigbang) becomes ハレルヤ in japanese


## Artist
Inside the artist object you can get the following nice extra information:

### COMMENTS AND COUNTRY

An artist comment is a short snippet of text which can be mainly used for disambiguation.

The artist country is the born country of the artist/group

There are two perfect search result if you search by artist with the keyword "U2". Indeed there are two distinct music groups with this same name, one is the most known irish group of Bono Vox, the other is a less popular (world wide speaking) group from Japan.

Here's how you can made use of the artist comment in your search result page:

U2 (Irish rock band)
U2 (あきやまうに)
You can also show the artist country for even better disambiguation:

U2 (Irish rock band) from Ireland
U2 (あきやまうに) from Japan
ARTIST TRANSLATIONS

When you create a world wide music related service you have to take into consideration to display the artist name in the user's local language. These translation are also used as aliases to improve the search results.

Let's use PSY for this example.

Western people know him as PSY but korean want to see the original name 싸이.

Using the name translations provided by our api you can show to every user the writing they expect to see.

Furthermore, when you search for "psy gangnam style" or "싸이 gangnam style" with our search/match api you will still be able to find the song.

### ARTIST RATING

The artist rating is a score 0-100 identifying how popular is an artist in musixmatch.

You can use this information to build charts, for suggestions, to sort search results. In the example above about U2, we use the artist rating to show the irish band before the japanese one in our serp.

### ARTIST MUSIC GENRE

We provide one or more main artist genre, this information can be used to calculate similar artist, suggestions, or the filter a search by artist genre.



## Album
Inside the album object you can get the following nice extra information:

### ALBUM RATING

The album rating is a score 0-100 identifying how popular is an album in musixmatch.

You can use this information to sort search results, like the most popular albums of an artist.

### ALBUM RATING

The album rating is a score 0-100 identifying how popular is an album in musixmatch.

You can use this information to sort search results, like the most popular albums of an artist.

### ALBUM COPYRIGHT AND LABEL

For most of our albums we can provide extra information like for example:

Label: Universal-Island Records Ltd.
Copyright: (P) 2013 Rubyworks, under license to Columbia Records, a Division of Sony Music Entertainment.
ALBUM TYPE AND RELEASE DATE

The album official release date can be used to sort an artist's albums view starting by the most recent one.

Album can also be filtered or grouped by type: Single, Album, Compilation, Remix, Live. This can help to build an artist page with a more organized structure.

### ALBUM MUSIC GENRE

For most of the albums we provide two groups of music genres. Primary and secondary. This information can be used to help user navigate albums by genre.

An example could be:

Primary genere: POP
Secondary genre: K-POP or Mandopop


## Actions

### album.get.get



```js
musixmatch.album.get.get({
  "album_id": ""
}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * album_id **required** `string`: The musiXmatch album id

#### Output
* output `object`
  * message `object`
    * body `object`
      * album [Album](#album)
    * header `object`
      * execute_time `number`
      * status_code `number`

### album.tracks.get.get



```js
musixmatch.album.tracks.get.get({
  "album_id": ""
}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * album_id **required** `string`: The musiXmatch album id
  * f_has_lyrics `string`: When set, filter only contents with lyrics
  * page `number`: Define the page number for paginated results
  * page_size `number`: Define the page size for paginated results.Range is 1 to 100.

#### Output
* output `object`
  * message `object`
    * body `object`
      * track_list `array`: A list of tracks
        * items [Track](#track)
    * header `object`
      * available `number`
      * execute_time `number`
      * status_code `number`

### artist.albums.get.get



```js
musixmatch.artist.albums.get.get({
  "artist_id": ""
}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * artist_id **required** `string`: The musiXmatch artist id
  * s_release_date `string`: Sort by release date (asc|desc)
  * g_album_name `string`: Group by Album Name
  * page_size `number`: Define the page size for paginated results.Range is 1 to 100.
  * page `number`: Define the page number for paginated results

#### Output
* output `object`
  * message `object`
    * body `object`
      * album_list `array`: A list of albums
        * items `object`
          * album [Album](#album)
    * header `object`
      * available `number`
      * execute_time `number`
      * status_code `number`

### artist.get.get



```js
musixmatch.artist.get.get({
  "artist_id": ""
}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * artist_id **required** `string`: 	The musiXmatch artist id

#### Output
* output `object`
  * message `object`
    * body `object`
      * artist [Artist](#artist)
    * header `object`
      * execute_time `number`
      * status_code `number`

### artist.related.get.get



```js
musixmatch.artist.related.get.get({
  "artist_id": ""
}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * artist_id **required** `string`: The musiXmatch artist id
  * page_size `number`: Define the page size for paginated results.Range is 1 to 100.
  * page `number`: Define the page number for paginated results

#### Output
* output `object`
  * message `object`
    * body `object`
      * artist_list `array`: A list of artists
        * items `object`
          * artist [Artist](#artist)
    * header `object`
      * available `number`
      * execute_time `number`
      * status_code `number`

### artist.search.get



```js
musixmatch.artist.search.get({}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * q_artist `string`: The song artist
  * f_artist_id `number`: When set, filter by this artist id
  * page `number`: Define the page number for paginated results
  * page_size `number`: Define the page size for paginated results.Range is 1 to 100.

#### Output
* output `object`
  * message `object`
    * body `object`
      * artist_list `array`: A list of artists
        * items `object`
          * artist [Artist](#artist)
    * header `object`
      * available `number`
      * execute_time `number`
      * status_code `number`

### chart.artists.get.get



```js
musixmatch.chart.artists.get.get({}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * page `number`: Define the page number for paginated results
  * page_size `number`: Define the page size for paginated results.Range is 1 to 100.
  * country `string`: A valid ISO 3166 country code

#### Output
* output `object`
  * message `object`
    * body `object`
      * artist_list `array`: A list of artists
        * items `object`
          * artist [Artist](#artist)
    * header `object`
      * available `number`
      * execute_time `number`
      * status_code `number`

### chart.tracks.get.get



```js
musixmatch.chart.tracks.get.get({}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * page `number`: Define the page number for paginated results
  * page_size `number`: Define the page size for paginated results.Range is 1 to 100.
  * country `string`: A valid ISO 3166 country code
  * f_has_lyrics `string`: When set, filter only contents with lyrics

#### Output
* output `object`
  * message `object`
    * body `object`
      * track_list `array`: A list of tracks
        * items `object`
          * track [Track](#track)
    * header `object`
      * available `number`
      * execute_time `number`
      * status_code `number`

### matcher.lyrics.get.get



```js
musixmatch.matcher.lyrics.get.get({}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * q_track `string`: The song title
  * q_artist `string`: The song artist

#### Output
* output `object`
  * message `object`
    * body `object`
      * lyrics [Lyrics](#lyrics)
    * header `object`
      * execute_time `number`
      * status_code `number`

### matcher.subtitle.get.get



```js
musixmatch.matcher.subtitle.get.get({}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * q_track `string`: The song title
  * q_artist `string`: 	The song artist
  * f_subtitle_length `number`: Filter by subtitle length in seconds
  * f_subtitle_length_max_deviation `number`: Max deviation for a subtitle length in seconds

#### Output
* output `object`
  * message `object`
    * body `object`
      * subtitle [Subtitle](#subtitle)
    * header `object`
      * execute_time `number`
      * status_code `number`

### matcher.track.get.get



```js
musixmatch.matcher.track.get.get({}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * q_artist `string`: The song artist
  * q_track `string`: The song title
  * f_has_lyrics `number`: When set, filter only contents with lyrics
  * f_has_subtitle `number`: When set, filter only contents with subtitles

#### Output
* output `object`
  * message `object`
    * body `object`
      * track [Track](#track)
    * header `object`
      * execute_time `number`
      * status_code `number`

### track.get.get



```js
musixmatch.track.get.get({
  "track_id": ""
}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * track_id **required** `string`: The musiXmatch track id

#### Output
* output `object`
  * message `object`
    * body `object`
      * track [Track](#track)
    * header `object`
      * execute_time `number`
      * status_code `number`

### track.lyrics.get.get



```js
musixmatch.track.lyrics.get.get({
  "track_id": ""
}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * track_id **required** `string`: The musiXmatch track id

#### Output
* output `object`
  * message `object`
    * body `object`
      * lyrics [Lyrics](#lyrics)
    * header `object`
      * execute_time `number`
      * status_code `number`

### track.search.get



```js
musixmatch.track.search.get({}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * q_track `string`: The song title
  * q_artist `string`: The song artist
  * q_lyrics `string`: Any word in the lyrics
  * f_artist_id `number`: When set, filter by this artist id
  * f_music_genre_id `number`: When set, filter by this music category id
  * f_lyrics_language `number`: Filter by the lyrics language (en,it,..)
  * f_has_lyrics `number`: When set, filter only contents with lyrics
  * s_artist_rating `string`: Sort by our popularity index for artists (asc|desc)
  * s_track_rating `string`: Sort by our popularity index for tracks (asc|desc)
  * quorum_factor `number`: Search only a part of the given query string.Allowed range is (0.1 – 0.9)
  * page_size `number`: Define the page size for paginated results.Range is 1 to 100.
  * page `number`: Define the page number for paginated results

#### Output
* output `object`
  * message `object`
    * body `object`
      * track_list `array`: A list of tracks
        * items `object`
          * track [Track](#track)
    * header `object`
      * available `number`
      * execute_time `number`
      * status_code `number`

### track.snippet.get.get



```js
musixmatch.track.snippet.get.get({
  "track_id": ""
}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * track_id **required** `string`: The musiXmatch track id

#### Output
* output `object`
  * message `object`
    * body `object`
      * snippet [Snippet](#snippet)
    * header `object`
      * execute_time `number`
      * status_code `number`

### track.subtitle.get.get



```js
musixmatch.track.subtitle.get.get({
  "track_id": ""
}, context)
```

#### Input
* input `object`
  * format `string`: output format: json, jsonp, xml.
  * callback `string`: jsonp callback
  * track_id **required** `string`: The musiXmatch track id

#### Output
* output `object`
  * message `object`
    * body `object`
      * subtitle [Subtitle](#subtitle)
    * header `object`
      * execute_time `number`
      * status_code `number`



## Definitions

### Album
* a Album object `object`: a album of songs in the Musixmatch database.
  * album_copyright `string`
  * album_coverart_100x100 `string`
  * album_coverart_350x350 `string`
  * album_coverart_500x500 `string`
  * album_coverart_800x800 `string`
  * album_edit_url `string`
  * album_id `number`
  * album_label `string`
  * album_mbid `string`
  * album_name `string`
  * album_pline `string`
  * album_rating `number`
  * album_release_date `string`
  * album_release_type `string`
  * album_track_count `number`
  * album_vanity_id `string`
  * artist_id `number`
  * artist_name `string`
  * primary_genres `object`
    * music_genre_list `array`
      * items `object`
        * music_genre `object`
          * music_genre_id `number`
          * music_genre_name `string`
          * music_genre_name_extended `string`
          * music_genre_parent_id `number`
          * music_genre_vanity `string`
  * restricted `number`
  * secondary_genres `object`
    * music_genre_list `array`
      * items `string`
  * updated_time `string`

### Artist
* a Artist object `object`: a artist in the Musixmatch database.
  * artist_alias_list `array`
    * items `object`
      * artist_alias `string`
  * artist_comment `string`
  * artist_country `string`
  * artist_credits `object`
    * artist_list `array`
      * items `string`
  * artist_edit_url `string`
  * artist_id `number`
  * artist_mbid `string`
  * artist_name `string`
  * artist_name_translation_list `array`
    * items `object`
      * artist_name_translation `object`
        * language `string`
        * translation `string`
  * artist_rating `number`
  * artist_share_url `string`
  * artist_twitter_url `string`
  * artist_vanity_id `string`
  * managed `number`
  * primary_genres `object`
    * music_genre_list `array`
      * items `object`
        * music_genre `object`
          * music_genre_id `number`
          * music_genre_name `string`
          * music_genre_name_extended `string`
          * music_genre_parent_id `number`
          * music_genre_vanity `string`
  * restricted `number`
  * secondary_genres `object`
    * music_genre_list `array`
      * items `string`
  * updated_time `string`

### Lyrics
* a Lyrics object `object`: a Lyrics in the Musixmatch database.
  * action_requested `string`
  * can_edit `number`
  * explicit `number`
  * html_tracking_url `string`
  * instrumental `number`
  * locked `number`
  * lyrics_body `string`
  * lyrics_copyright `string`
  * lyrics_id `number`
  * lyrics_language `string`
  * lyrics_language_description `string`
  * pixel_tracking_url `string`
  * publisher_list `array`
    * items `string`
  * restricted `number`
  * script_tracking_url `string`
  * updated_time `string`
  * verified `number`
  * writer_list `array`
    * items `string`

### Snippet
* a Snippet object `object`: Snippet of lyrics text in the Musixmatch database.
  * html_tracking_url `string`
  * instrumental `number`
  * pixel_tracking_url `string`
  * restricted `number`
  * script_tracking_url `string`
  * snippet_body `string`
  * snippet_id `number`
  * snippet_language `string`
  * updated_time `string`

### Subtitle
* a Subtitle object `object`: a synchronized lyrics subtitle in the Musixmatch database.
  * html_tracking_url `string`
  * lyrics_copyright `string`
  * pixel_tracking_url `string`
  * publisher_list `array`
    * items `string`
  * restricted `number`
  * script_tracking_url `string`
  * subtitle_body `string`
  * subtitle_id `number`
  * subtitle_language `string`
  * subtitle_language_description `string`
  * subtitle_length `number`
  * updated_time `string`
  * writer_list `array`
    * items `string`

### Track
* a Track object `object`: a song in the Musixmatch database
  * album_coverart_100x100 `string`
  * album_coverart_350x350 `string`
  * album_coverart_500x500 `string`
  * album_coverart_800x800 `string`
  * album_id `number`
  * album_name `string`
  * artist_id `number`
  * artist_mbid `string`
  * artist_name `string`
  * commontrack_id `number`
  * commontrack_vanity_id `string`
  * explicit `number`
  * first_release_date `string`
  * has_lyrics `number`
  * has_subtitles `number`
  * instrumental `number`
  * lyrics_id `number`
  * num_favourite `number`
  * primary_genres `object`
    * music_genre_list `array`
      * items `object`
        * music_genre `object`
          * music_genre_id `number`
          * music_genre_name `string`
          * music_genre_name_extended `string`
          * music_genre_parent_id `number`
          * music_genre_vanity `string`
  * restricted `number`
  * secondary_genres `object`
    * music_genre_list `array`
      * items `object`
        * music_genre `object`
          * music_genre_id `number`
          * music_genre_name `string`
          * music_genre_name_extended `string`
          * music_genre_parent_id `number`
          * music_genre_vanity `string`
  * subtitle_id `number`
  * track_edit_url `string`
  * track_id `number`
  * track_isrc `string`
  * track_length `number`
  * track_mbid `string`
  * track_name `string`
  * track_name_translation_list `array`
    * items `string`
  * track_rating `number`
  * track_share_url `string`
  * track_soundcloud_id `number`
  * track_spotify_id `string`
  * track_xboxmusic_id `string`
  * updated_time `string`


