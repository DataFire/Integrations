# @datafire/hillbillysoftware_shinobi

Client library for shinobiapi

## Installation and Usage
```bash
npm install --save @datafire/hillbillysoftware_shinobi
```
```js
let hillbillysoftware_shinobi = require('@datafire/hillbillysoftware_shinobi').create();

hillbillysoftware_shinobi.Actor_Get({
  "accesstoken": "",
  "Query": ""
}).then(data => {
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

### ActorInShows_Get
Returns all shows queried actor/actress is or has been in


```js
hillbillysoftware_shinobi.ActorInShows_Get({
  "accesstoken": "",
  "Actor": ""
}, context)
```

#### Input
* input `object`
  * accesstoken **required** `string`
  * Actor **required** `string`

#### Output
* output `array`
  * items [TVShowActor](#tvshowactor)

### Crew_Get
Returns crew for queried show.


```js
hillbillysoftware_shinobi.Crew_Get({
  "AccessToken": "",
  "ShowName": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * ShowName **required** `string`

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
  * ID **required** `string`

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
  * Query **required** `string`
  * Strictmatch `boolean`

#### Output
* output `array`
  * items [Images](#images)

### MagnetsByDate_GetAsync
Gets available magnet hashes on passed date (yyyy-mm-dd)


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

### magnetsMovieByID_GetAsync
Try and find magnet links for queried movie.  Feature not available on free plan, please donate to be able to use this feature


```js
hillbillysoftware_shinobi.magnetsMovieByID_GetAsync({
  "AccessToken": "",
  "Movie": ""
}, context)
```

#### Input
* input `object`
  * AccessToken **required** `string`
  * Movie **required** `string`

#### Output
* output `array`
  * items [Magnets](#magnets)

### magnetsTVShowSearch_GetAsync
Returns results based on query, Feature not available on free plan, please donate to be able to use this feature.


```js
hillbillysoftware_shinobi.magnetsTVShowSearch_GetAsync({
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

### TVShowSearch_GetAsync
Returns results based on query, result set limited to 5 records


```js
hillbillysoftware_shinobi.TVShowSearch_GetAsync({
  "accesstoken": "",
  "query": ""
}, context)
```

#### Input
* input `object`
  * accesstoken **required** `string`
  * query **required** `string`

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

### Country
* Country `object`
  * Name `string`

### Crew
* Crew `object`
  * Name `string`
  * ShowName `string`
  * Type `string`

### Episode
* Episode `object`
  * Airdate `string`
  * Airtime `string`
  * EpisodeNo `string`
  * ImageHash `string`
  * Season `string`
  * Synopsis `string`
  * Title `string`
  * imdbID `string`
  * tvdbID `string`
  * tvmazeID `string`

### Images
* Images `object`
  * ID `string`
  * ImageURI `string`
  * imdbID `string`
  * isValidated `string`

### Links
* Links `object`
  * Magnet `string`
  * Title `string`

### Magnets
* Magnets `object`
  * Hash `string`
  * Name `string`
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
  * Urls `array`
    * items [Links](#links)

### Networks
* Networks `object`
  * Country `string`
  * Network `string`

### RatingItem
* RatingItem `object`
  * ID `string`
  * MetaCritics `string`
  * Name `string`
  * Rating `string`
  * RottenTomatoes `string`
  * TVMaze `string`
  * imdbID `string`

### TVInformation
* TVInformation `object`
  * EpisodeCount `string`
  * EpisodeRuntime `string`
  * ID `string`
  * ImdbID `string`
  * ReleaseYear `string`
  * Seasons `string`
  * ShowImage `string`
  * ShowStatus `string`
  * Synopsis `string`
  * Title `string`
  * Urls `array`
    * items [Links](#links)

### TVShowActor
* TVShowActor `object`
  * Name `string`
  * Role `string`
  * ShowID `string`
  * ShowName `string`

### Trailer
* Trailer `object`
  * Key `string`
  * MediaType `string`
  * Site `string`
  * TrailerName `string`
  * TrailerSize `string`
  * TrailerType `string`
  * YouTubeEmbeddedCode `string`
  * YouTubeURL `string`

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
  * ID `string`
  * Image `string`
  * Network `string`
  * PremiereDate `string`
  * Runtime `string`
  * ShowName `string`
  * Summary `string`
  * Title `string`


