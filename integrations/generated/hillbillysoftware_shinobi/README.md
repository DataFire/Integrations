# @datafire/hillbillysoftware_shinobi

Client library for shinobiapi

## Installation and Usage
```bash
npm install --save @datafire/hillbillysoftware_shinobi
```
```js
let hillbillysoftware_shinobi = require('@datafire/hillbillysoftware_shinobi').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### Actor_Get
Returns data on queried actor/actress. Result set limited to 5 records


```js
hillbillysoftware_shinobi.Actor_Get({
  "accesstoken": "",
  "Query": ""
}, context)
```

#### Input
* input `object`
  * accesstoken **required** `string`
  * Query **required** `string`

#### Output
* output `array`
  * items [Actor](#actor)

### AddActor_Post
Add new actor or actress to database


```js
hillbillysoftware_shinobi.AddActor_Post({
  "Value": {}
}, context)
```

#### Input
* input `object`
  * Value **required** [ActorPost](#actorpost)

#### Output
* output [PostResult](#postresult)

### AddTVShow_Post
Add new show to database


```js
hillbillysoftware_shinobi.AddTVShow_Post({
  "Value": {}
}, context)
```

#### Input
* input `object`
  * Value **required** [TVInformationPost](#tvinformationpost)

#### Output
* output [PostResult](#postresult)

### AliasesByID_Get
Get known aliases for Movies or Television shows from passed imdbID


```js
hillbillysoftware_shinobi.AliasesByID_Get({
  "AccessToken": "",
  "imdbID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * imdbID **required** `string`

#### Output
* output `array`
  * items [Aliases](#aliases)

### Aliases_Get
Get known aliases for Movies or Television shows


```js
hillbillysoftware_shinobi.Aliases_Get({
  "AccessToken": "",
  "Title": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Title **required** `string`: Title of movie or television show

#### Output
* output `array`
  * items [Aliases](#aliases)

### AwardsbyWinner_Get
Gets all awards by nominiee


```js
hillbillysoftware_shinobi.AwardsbyWinner_Get({
  "AccessToken": "",
  "Nominee": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Nominee **required** `string`

#### Output
* output `array`
  * items [_Awards](#_awards)

### awards_Get
Gets all awards for requested year


```js
hillbillysoftware_shinobi.awards_Get({
  "Year": ""
}, context)
```

#### Input
* input `object`
  * Year **required** `string`

#### Output
* output `array`
  * items [_Awards](#_awards)

### ScheduleByDate_Get
Gets TV Schedule for selected data


```js
hillbillysoftware_shinobi.ScheduleByDate_Get({
  "AccessToken": "",
  "Date": "",
  "Country": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Date **required** `string`: date format year-month-day
  * Country **required** `string`: US / CA / NL / BE / DE / GB or FR

#### Output
* output `array`
  * items [schedule](#schedule)

### CalendarCountries_Get
Returns list of available countries in calendar database


```js
hillbillysoftware_shinobi.CalendarCountries_Get({
  "AccessToken": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`

#### Output
* output `array`
  * items [Country](#country)

### CalendarNetworks_Get
Gets a list of available networks


```js
hillbillysoftware_shinobi.CalendarNetworks_Get({
  "AccessToken": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`

#### Output
* output `array`
  * items [Networks](#networks)

### CalendarShowSeasons_Get
Returns list of seasons available in the calendar for show


```js
hillbillysoftware_shinobi.CalendarShowSeasons_Get({
  "AccessToken": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Name **required** `string`

#### Output
* output `array`
  * items [ShowSeasons](#showseasons)

### CalendarbyShownameSeason_Get
Get Calendar by showname and season


```js
hillbillysoftware_shinobi.CalendarbyShownameSeason_Get({
  "AccessToken": "",
  "Name": "",
  "Season": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Name **required** `string`
  * Season **required** `string`

#### Output
* output `array`
  * items [schedule](#schedule)

### CalendarByShowName_Get
Will return show schedule for queried showname and year


```js
hillbillysoftware_shinobi.CalendarByShowName_Get({
  "AccessToken": "",
  "Name": "",
  "Year": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Name **required** `string`
  * Year **required** `string`

#### Output
* output `array`
  * items [schedule](#schedule)

### CalendarToday_Get
Will return show schedule for today for all countries in database


```js
hillbillysoftware_shinobi.CalendarToday_Get({
  "AccessToken": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`

#### Output
* output `array`
  * items [schedule](#schedule)

### ActorInShows_Get
Returns all shows queried actor/actress is or has been in


```js
hillbillysoftware_shinobi.ActorInShows_Get({
  "AccessToken": "",
  "Actor": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Actor **required** `string`: Part of, or full name of actor

#### Output
* output `array`
  * items [TVShowActor](#tvshowactor)

### CastByActor_Get
Returns list of show actor is appearing in


```js
hillbillysoftware_shinobi.CastByActor_Get({
  "AccessToken": "",
  "Actor": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Actor **required** `string`: Full name of actor

#### Output
* output `array`
  * items [TVShowActor](#tvshowactor)

### ActorsInTVShow_Get
Returns all actors in queried tvshow


```js
hillbillysoftware_shinobi.ActorsInTVShow_Get({
  "accesstoken": "",
  "ShowName": ""
}, context)
```

#### Input
* input `object`
  * accesstoken **required** `string`
  * ShowName **required** `string`

#### Output
* output `array`
  * items [TVShowActor](#tvshowactor)

### CrewByID_Get
Get crew list by ID


```js
hillbillysoftware_shinobi.CrewByID_Get({
  "AccessToken": "",
  "ID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * ID **required** `string`: IMDBID, TVmazeID, or TVDBID

#### Output
* output `array`
  * items [Crew](#crew)

### CrewByPerson_Get
Gets list of productions searched person is/was involved in.


```js
hillbillysoftware_shinobi.CrewByPerson_Get({
  "AccessToken": "",
  "PersonName": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * PersonName **required** `string`

#### Output
* output `array`
  * items [Crew](#crew)

### CrewbyShowname_Get
Get crew list by showname


```js
hillbillysoftware_shinobi.CrewbyShowname_Get({
  "AccessToken": "",
  "ShowName": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * ShowName **required** `string`: Full exact showname

#### Output
* output `array`
  * items [Crew](#crew)

### Crew_Get
Returns crew for queried show.


```js
hillbillysoftware_shinobi.Crew_Get({
  "AccessToken": "",
  "Phrase": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Phrase **required** `string`: Part of, or full showname to search for

#### Output
* output `array`
  * items [Crew](#crew)

### EpisodesByID_Get
Gets all episodes for selected ID


```js
hillbillysoftware_shinobi.EpisodesByID_Get({
  "AccessToken": "",
  "ID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * ID **required** `string`: imdbID

#### Output
* output `array`
  * items [Episode](#episode)

### EpisodesBySeason_Get
Gets list of episodes for specified imdbID and Season number


```js
hillbillysoftware_shinobi.EpisodesBySeason_Get({
  "AccessToken": "",
  "ID": "",
  "Season": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * ID **required** `string`: imdbID
  * Season **required** `string`: Season number

#### Output
* output `array`
  * items [Episode](#episode)

### Episodes_Get
Gets all episodes for selected show


```js
hillbillysoftware_shinobi.Episodes_Get({
  "AccessToken": "",
  "Showname": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Showname **required** `string`

#### Output
* output `array`
  * items [Episode](#episode)

### EpisodesLastAvailableSeasonbyName_Get
Gets latest season number based on show name


```js
hillbillysoftware_shinobi.EpisodesLastAvailableSeasonbyName_Get({
  "AccessToken": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Name **required** `string`

#### Output
* output [LastAvailableSeason](#lastavailableseason)

### EpisodesLastAvailableSeason_Get
Returns last available season number in database, based on passed imdbID


```js
hillbillysoftware_shinobi.EpisodesLastAvailableSeason_Get({
  "AccessToken": "",
  "ID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * ID **required** `string`: imdbID

#### Output
* output [LastAvailableSeason](#lastavailableseason)

### EpisodesSeasonCount_Get
Returns number of available seasons and episodes


```js
hillbillysoftware_shinobi.EpisodesSeasonCount_Get({
  "AccessToken": "",
  "ID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * ID **required** `string`: imdbID

#### Output
* output [TVShowSeasons](#tvshowseasons)

### GetIMDBid_GetAsync
Gets list of avaiable IMDB ids from Movies and TV Show databases, you can use those to query other end points that need ID's


```js
hillbillysoftware_shinobi.GetIMDBid_GetAsync({
  "AccessToken": "",
  "Query": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Query **required** `string`

#### Output
* output `array`
  * items [imdbID](#imdbid)

### Images_Get
Get images available for movie/tv show with passed imdbID


```js
hillbillysoftware_shinobi.Images_Get({
  "AccessToken": "",
  "imdbID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * imdbID **required** `string`

#### Output
* output `array`
  * items [imdbImages](#imdbimages)

### ImageSearch_Get
Get images available for movie/tv show with passed query


```js
hillbillysoftware_shinobi.ImageSearch_Get({
  "Accesstoken": "",
  "Query": ""
}, context)
```

#### Input
* input `object`
  * Accesstoken **required** `string`
  * Query **required** `string`: Name or part of name from Movie or Show
  * Strictmatch `boolean`

#### Output
* output `array`
  * items [imdbImages](#imdbimages)

### MagnetsByDate_GetAsync
Gets available magnet hashes on passed date (yyyy-mm-dd).  Feature not available on free plan, please donate to be able to use this feature.


```js
hillbillysoftware_shinobi.MagnetsByDate_GetAsync({
  "AccessToken": "",
  "Date": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Date **required** `string`

#### Output
* output `array`
  * items [Magnets](#magnets)

### MagnetsByimdbID_GetAsync
Returns list of magnet hashes for passed IMDBID.  Feature not available on free plan, please donate to be able to use this feature.


```js
hillbillysoftware_shinobi.MagnetsByimdbID_GetAsync({
  "AccessToken": "",
  "imdbID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * imdbID **required** `string`: ID with or without tt prefix

#### Output
* output `array`
  * items [Magnets](#magnets)

### magnetsMovieByID_GetAsync
Try and find magnet links for queried movie.  Feature not available on free plan, please donate to be able to use this feature


```js
hillbillysoftware_shinobi.magnetsMovieByID_GetAsync({
  "AccessToken": "",
  "Query": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Query **required** `string`: Name or part of name of movie or tv show

#### Output
* output `array`
  * items [Magnets](#magnets)

### TVShowsearch_Get
Returns results based on query, Feature not available on free plan, please donate to be able to use this feature.


```js
hillbillysoftware_shinobi.TVShowsearch_Get({
  "AccessToken": "",
  "TVShow": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * TVShow **required** `string`

#### Output
* output `array`
  * items [Magnets](#magnets)

### MovieID_Get



```js
hillbillysoftware_shinobi.MovieID_Get({
  "accesstoken": "",
  "imdbID": ""
}, context)
```

#### Input
* input `object`
  * accesstoken **required** `string`
  * imdbID **required** `string`

#### Output
* output [MovieInformation](#movieinformation)

### MovieSearch_GetAsync
Searches for movies, result set limited to 5 records


```js
hillbillysoftware_shinobi.MovieSearch_GetAsync({
  "AccessToken": "",
  "Query": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Query **required** `string`

#### Output
* output `array`
  * items [MovieInformation](#movieinformation)

### musicAlbumArt_Get
Returns Albumart for passed AlbumID


```js
hillbillysoftware_shinobi.musicAlbumArt_Get({
  "AccessToken": "",
  "AlbumID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * AlbumID **required** `string`

#### Output
* output [AlbumArt](#albumart)

### musicCDCovers_Get
Gets CD art for passed MusicBrainzID


```js
hillbillysoftware_shinobi.musicCDCovers_Get({
  "AccessToken": "",
  "MBID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * MBID **required** `string`: MusicBrainzID

#### Output
* output `array`
  * items [CDCoverArt](#cdcoverart)

### MusicByMusicBrainz_Get
Get Artist / Band information on MusicBrainzID


```js
hillbillysoftware_shinobi.MusicByMusicBrainz_Get({
  "AccessToken": "",
  "MBID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * MBID **required** `string`: MusicBrainzID

#### Output
* output `array`
  * items [BandInfo](#bandinfo)

### musicAlbums_Get
Get albums from passed ArtistID


```js
hillbillysoftware_shinobi.musicAlbums_Get({
  "AccessToken": "",
  "ArtistID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * ArtistID **required** `string`: ID of artist or band to retrieve albums from

#### Output
* output `array`
  * items [BandAlbums](#bandalbums)

### musicCoverArt_Get
Retrieves artist / band Banner and logo based on ArtistID


```js
hillbillysoftware_shinobi.musicCoverArt_Get({
  "AccessToken": "",
  "ArtistID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * ArtistID **required** `string`: ArtistID of artist or band

#### Output
* output [ArtistArt](#artistart)

### musicCoverArtByName_Get
Retrieves artist / band Banner and logo based on artist or bandname


```js
hillbillysoftware_shinobi.musicCoverArtByName_Get({
  "AccessToken": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Name **required** `string`: Name of artist or band

#### Output
* output [ArtistArt](#artistart)

### musicArtistExtended_Get
Provides extended information, which includes all known albums and music videos of artist / band


```js
hillbillysoftware_shinobi.musicArtistExtended_Get({
  "AccessToken": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Name **required** `string`

#### Output
* output `array`
  * items [BandInfoExtended](#bandinfoextended)

### Music_Get
Get information about passed band name or artist


```js
hillbillysoftware_shinobi.Music_Get({
  "AccessToken": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Name **required** `string`: Name (or part) of band or artist name

#### Output
* output `array`
  * items [BandInfo](#bandinfo)

### musicLyricsbyAlbumID_Get
Returns all lyrics for requested AlbumID


```js
hillbillysoftware_shinobi.musicLyricsbyAlbumID_Get({
  "AccessToken": "",
  "AlbumID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * AlbumID **required** `string`

#### Output
* output `array`
  * items [Lyric](#lyric)

### musicLyrics_Get
Get lyrics for band or artist (record set limited to 25)


```js
hillbillysoftware_shinobi.musicLyrics_Get({
  "AccessToken": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Name **required** `string`: Name (or partial) of band or artist (record set limited to 25)

#### Output
* output `array`
  * items [Lyric](#lyric)

### musicLyricsBySong_Get
Get lyrics on song title


```js
hillbillysoftware_shinobi.musicLyricsBySong_Get({
  "AccessToken": "",
  "Song": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Song **required** `string`: Name or part of song name

#### Output
* output `array`
  * items [Lyric](#lyric)

### musicTracks_Get
Get all tracks from requested album


```js
hillbillysoftware_shinobi.musicTracks_Get({
  "AccessToken": "",
  "AlbumID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * AlbumID **required** `string`: AlbumID (can be retrieved via album endpoint)

#### Output
* output `array`
  * items [AlbumTracks](#albumtracks)

### MusiVideos_Get
Lists all videos available for this Artist / Band


```js
hillbillysoftware_shinobi.MusiVideos_Get({
  "AccessToken": "",
  "ArtistID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * ArtistID **required** `string`

#### Output
* output `array`
  * items [MusicVideo](#musicvideo)

### Rating_Get
Returns ratings from various resources(IMDB,Rotten Tomatoes, metaCritics, TVMaze etc) of passed IMDBid


```js
hillbillysoftware_shinobi.Rating_Get({
  "AccessToken": "",
  "imdbID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * imdbID **required** `string`

#### Output
* output [RatingItem](#ratingitem)

### RatingByName_Get



```js
hillbillysoftware_shinobi.RatingByName_Get({
  "AccessToken": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Name **required** `string`

#### Output
* output `array`
  * items [RatingItem](#ratingitem)

### ShowStatus_Get
Returns status of queried show (query can be IMDB, TVDB, or showname)


```js
hillbillysoftware_shinobi.ShowStatus_Get({
  "AccessToken": "",
  "Query": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Query **required** `string`: Query can be IMDB, TVDB, or Show name

#### Output
* output `array`
  * items [_ShowStatus](#_showstatus)

### TVShowID_Get
Returns TVShow information based on IMDBid


```js
hillbillysoftware_shinobi.TVShowID_Get({
  "accesstoken": "",
  "id": "",
  "imdbID": ""
}, context)
```

#### Input
* input `object`
  * accesstoken **required** `string`
  * id **required** `string`: imdbID of show you want info on
  * imdbID **required** `string`

#### Output
* output [TVInformation](#tvinformation)

### TVShowByName_Get
Returns results based on query, result set limited to 5 records


```js
hillbillysoftware_shinobi.TVShowByName_Get({
  "AccessToken": "",
  "Query": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Query **required** `string`

#### Output
* output `array`
  * items [TVInformation](#tvinformation)

### TrailersbyID_Get
Get Trailers for passed imdbID


```js
hillbillysoftware_shinobi.TrailersbyID_Get({
  "AccessToken": "",
  "imdbID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * imdbID **required** `string`

#### Output
* output `array`
  * items [Trailer](#trailer)

### TrailerCountByID_Get
Get trailer count for passed ID


```js
hillbillysoftware_shinobi.TrailerCountByID_Get({
  "AccessToken": "",
  "imdbID": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * imdbID **required** `string`

#### Output
* output [TrailerCount](#trailercount)

### TrailerCountByName_Get
Get trailer count for passed name (Movie title or TVShow name)


```js
hillbillysoftware_shinobi.TrailerCountByName_Get({
  "AccessToken": "",
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Name **required** `string`

#### Output
* output [TrailerCount](#trailercount)

### TrailerSearch_Get
Gets trailers by search phrase (limited to 10 records)


```js
hillbillysoftware_shinobi.TrailerSearch_Get({
  "AccessToken": "",
  "Phrase": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Phrase **required** `string`: Trailer you like to search for

#### Output
* output `array`
  * items [Trailer](#trailer)



## Definitions

### Actor
* Actor `object`
  * Bio `string`
  * BirthYear `string`
  * DeathYear `string`
  * Gender `string`
  * Name `string`
  * PopularityIndex `string`
  * ProfileImage `string`

### ActorPost
* ActorPost `object`
  * AccessToken `string`
  * Bio `string`
  * BirthYear `string`
  * DeathYear `string`
  * Gender `string`
  * Name `string`
  * PopularityIndex `string`
  * ProfileImage `string`

### AlbumArt
* AlbumArt `object`
  * AlbumID `string`
  * Albumname `string`
  * Art `string`

### AlbumTracks
* AlbumTracks `object`
  * AlbumID `string`
  * ArtistID `string`
  * Length `string`
  * TrackName `string`
  * TrackNo `string`

### Aliases
* Aliases `object`
  * Aka `string`
  * ExternalIDs `array`
    * items [ExternalIDs](#externalids)
  * Name `string`
  * OriginalName `string`

### ArtistArt
* ArtistArt `object`
  * ArtistID `string`
  * Banner `string`
  * Logo `string`
  * Name `string`

### BandAlbums
* BandAlbums `object`
  * AlbumArt `string`
  * AlbumID `string`
  * ArtistID `string`
  * Bibliography `string`
  * Label `string`
  * Name `string`
  * Releaseyear `string`

### BandInfo
* BandInfo `object`
  * ArtistID `string`
  * Banner `string`
  * Biography `string`
  * DisbandedYear `string`
  * FormationYear `string`
  * Genre `string`
  * Logo `string`
  * Members `string`
  * MusicBrainzID `string`
  * Name `string`
  * SocialMedia `string`
  * WebSite `string`

### BandInfoExtended
* BandInfoExtended `object`
  * Albums `array`
    * items [BandAlbums](#bandalbums)
  * ArtistID `string`
  * Banner `string`
  * Biography `string`
  * DisbandedYear `string`
  * FormationYear `string`
  * Genre `string`
  * Logo `string`
  * Members `string`
  * MusicBrainzID `string`
  * Name `string`
  * SocialMedia `string`
  * Videos `array`
    * items [MusicVideo](#musicvideo)
  * WebSite `string`

### CDCoverArt
* CDCoverArt `object`
  * CoverImage `string`
  * CoverThumbMedium `string`
  * CoverThumbSmall `string`
  * CoverType `string`
  * MusicBrainzID `string`

### Country
* Country `object`
  * Name `string`

### Crew
* Crew `object`
  * Externals `array`
    * items [ExternalIDs](#externalids)
  * Image `string`
  * Name `string`
  * ShowName `string`
  * Type `string`

### Episode
* Episode `object`
  * Airdate `string`
  * Airtime `string`
  * EpisodeNo `string`
  * Externals `array`
    * items [ExternalIDs](#externalids)
  * Image `string`
  * Season `string`
  * Synopsis `string`
  * Title `string`

### ExternalIDs
* ExternalIDs `object`
  * ID `string`
  * Name `string`

### LastAvailableSeason
* LastAvailableSeason `object`
  * Season `string`

### Lyric
* Lyric `object`
  * AlbumID `string`
  * Artist `string`
  * Lyrics `string`
  * Song `string`

### Magnets
* Magnets `object`
  * Externals `array`
    * items [ExternalIDs](#externalids)
  * FirstSeenDate `string`: Date this hash was first detected
  * Hash `string`: The actual hash you need to construct your magnet
  * Image `string`
  * Name `string`
  * Peers `string`: Number of Peers available at FirstSeenDate
  * Seeds `string`: Number of Seeds available at FirstSeenDate
  * Size `string`
  * Title `string`
  * Type `string`

### MovieInformation
* MovieInformation `object`
  * ID `string`
  * ImdbID `string`
  * ReleaseYear `string`
  * Runtime `string`
  * Synopsis `string`
  * Title `string`

### MusicVideo
* MusicVideo `object`
  * AlbumID `string`
  * ArtistID `string`
  * Decription `string`
  * Video `string`

### Networks
* Networks `object`
  * Country `string`
  * Network `string`

### PostResult
* PostResult `object`
  * Status `string`

### RatingItem
* RatingItem `object`
  * EpisoDate `string`
  * IMDB `string`
  * MetaCritics `string`
  * Name `string`
  * RottenTomatoes `string`
  * RottenTomatoesAudienceScore `string`
  * TVDB `string`
  * TVMaze `string`
  * Trakt `string`
  * imdbID `string`

### ShowSeasons
* ShowSeasons `object`
  * Year `string`

### TVInformation
* TVInformation `object`
  * EpisodeCount `string`
  * EpisodeRuntime `string`
  * Externals `array`
    * items [ExternalIDs](#externalids)
  * ID `string`
  * ReleaseYear `string`
  * Seasons `string`
  * ShowImage `string`
  * ShowStatus `string`
  * Synopsis `string`
  * Title `string`

### TVInformationPost
* TVInformationPost `object`
  * AccessToken `string`
  * EpisodeCount `string`
  * EpisodeRuntime `string`
  * Genres `string`
  * ImdbID `string`
  * PremierYear `string`
  * Seasons `string`
  * ShowImage `string`
  * ShowStatus `string`
  * Synopsis `string`
  * Title `string`

### TVShowActor
* TVShowActor `object`
  * Externals `array`
    * items [ExternalIDs](#externalids)
  * Image `string`
  * Name `string`
  * Role `string`
  * ShowName `string`

### TVShowSeasons
* TVShowSeasons `object`
  * Episodes `string`
  * Externals `array`
    * items [ExternalIDs](#externalids)
  * Seasons `string`
  * Showname `string`

### Trailer
* Trailer `object`
  * Episode `string`
  * Key `string`: Key for trailer, usually end part of uri for youtube links
  * MediaType `string`: Returns Media Type, either C (Channel) T (Television) or M (Movie)
  * Season `string`
  * Site `string`
  * TrailerName `string`
  * TrailerSize `string`
  * TrailerType `string`: Returns Trailer type (trailer, teaser, channel, episode,credits, clip etc)
  * YouTubeEmbeddedCode `string`
  * YouTubeURL `string`

### TrailerCount
* TrailerCount `object`
  * Count `integer`

### _Awards
* _Awards `object`
  * Category `string`
  * Nominee `string`
  * Type `string`
  * Winner `string`
  * Year `string`

### _ShowStatus
* _ShowStatus `object`
  * Enddate `string`
  * ID `string`
  * Title `string`
  * YearsOn `string`
  * imdbID `string`
  * status `string`
  * tvdbID `string`

### imdbID
* imdbID `object`
  * ID `string`
  * ShinobiID `string`
  * Title `string`
  * Type `string`

### imdbImages
* imdbImages `object`
  * Backdrops `array`
    * items `string`
  * Posters `array`
    * items `string`
  * Type `string`
  * imdbID `string`

### schedule
* schedule `object`
  * AirDate `string`
  * AirTime `string`
  * Country `string`
  * DaysOn `string`
  * Episode `string`
  * ID `string`
  * Image `string`
  * Network `string`
  * PremiereDate `string`
  * Runtime `string`
  * Season `string`
  * ShowName `string`
  * Summary `string`
  * Title `string`


