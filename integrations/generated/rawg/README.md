# @datafire/rawg

Client library for RAWG Video Games Database API

## Installation and Usage
```bash
npm install --save @datafire/rawg
```
```js
let rawg = require('@datafire/rawg').create();

.then(data => {
  console.log(data);
});
```

## Description


The largest open video games database.

### Why build on RAWG
- More than 350,000 games for 50 platforms including mobiles.
- Rich metadata: tags, genres, developers, publishers, individual creators, official websites, release dates,
Metacritic ratings.
- Where to buy: links to digital distribution services
- Similar games based on visual similarity.
- Player activity data: Steam average playtime and RAWG player counts and ratings.
- Actively developing and constantly getting better by user contribution and our algorithms.

### Terms of Use
- Free for personal use as long as you attribute RAWG as the source of the data and/or images and add an active
hyperlink from every page where the data of RAWG is used.
- Free for commercial use for startups and hobby projects with not more than 100,000 monthly active users or 500,000
page views per month. If your project is larger than that, email us at [api@rawg.io](mailto:api@rawg.io) for
commercial terms.
- No cloning. It would not be cool if you used our API to launch a clone of RAWG. We know it is not always easy
to say what is a duplicate and what isn't. Drop us a line at [api@rawg.io](mailto:api@rawg.io) if you are in doubt,
and we will talk it through.
- You must include an API key with every request. The key can be obtained at https://rawg.io/apidocs.
If you don’t provide it, we may ban your requests.

__[Read more](https://rawg.io/apidocs)__.


## Actions

### creator_roles.get
Get a list of creator positions (jobs).


```js
rawg.creator_roles.get({}, context)
```

#### Input
* input `object`
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Position](#position)

### creators_list
Get a list of game creators.


```js
rawg.creators_list({}, context)
```

#### Input
* input `object`
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Person](#person)

### creators_read
Get details of the creator.


```js
rawg.creators_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Person.

#### Output
* output [PersonSingle](#personsingle)

### developers_list
Get a list of game developers.


```js
rawg.developers_list({}, context)
```

#### Input
* input `object`
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Developer](#developer)

### developers_read
Get details of the developer.


```js
rawg.developers_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Developer.

#### Output
* output [DeveloperSingle](#developersingle)

### games_list
Get a list of games.


```js
rawg.games_list({}, context)
```

#### Input
* input `object`
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.
  * search `string`: Search query.
  * parent_platforms `string`: Filter by parent platforms, for example: `1,2,3`.
  * platforms `string`: Filter by platforms, for example: `4,5`.
  * stores `string`: Filter by stores, for example: `5,6`.
  * developers `string`: Filter by developers, for example: `1612,18893` or `valve-software,feral-interactive`.
  * publishers `string`: Filter by publishers, for example: `354,20987` or `electronic-arts,microsoft-studios`.
  * genres `string`: Filter by genres, for example: `4,51` or `action,indie`.
  * tags `string`: Filter by tags, for example: `31,7` or `singleplayer,multiplayer`.
  * creators `string`: Filter by creators, for example: `78,28` or `cris-velasco,mike-morasky`.
  * dates `string`: Filter by a release date, for example: `2010-01-01,2018-12-31.1960-01-01,1969-12-31`.
  * updated `string`: Filter by an update date, for example: `2020-12-01,2020-12-31`.
  * platforms_count `integer`: Filter by platforms count, for example: `1`.
  * exclude_collection `integer`: Exclude games from a particular collection, for example: `123`.
  * exclude_additions `boolean`: Exclude additions.
  * exclude_parents `boolean`: Exclude games which have additions.
  * exclude_game_series `boolean`: Exclude games which included in a game series.
  * ordering `string`: Available fields: `name`, `released`, `added`, `created`, `updated`, `rating`. You can reverse the sort order adding a hyphen, for example: `-released`.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Game](#game)

### games_sitemap_read
Get The Sitemap Games list.


```js
rawg.games_sitemap_read({}, context)
```

#### Input
* input `object`
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [GameSingle](#gamesingle)

### games_additions_list
Get a list of DLC's for the game, GOTY and other editions, companion apps, etc.


```js
rawg.games_additions_list({
  "game_pk": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.
  * game_pk **required** `string`

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Game](#game)

### games.game_pk.development_team.get
Get a list of individual creators that were part of the development team.


```js
rawg.games.game_pk.development_team.get({
  "game_pk": ""
}, context)
```

#### Input
* input `object`
  * ordering `string`: Which field to use when ordering the results.
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.
  * game_pk **required** `string`

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [GamePersonList](#gamepersonlist)

### games.game_pk.game_series.get
Get a list of games that are part of the same series.


```js
rawg.games.game_pk.game_series.get({
  "game_pk": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.
  * game_pk **required** `string`

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Game](#game)

### games.game_pk.parent_games.get
Get a list of parent games for DLC's and editions.


```js
rawg.games.game_pk.parent_games.get({
  "game_pk": ""
}, context)
```

#### Input
* input `object`
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.
  * game_pk **required** `string`

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Game](#game)

### games_screenshots_list
Get screenshots for the game.


```js
rawg.games_screenshots_list({
  "game_pk": ""
}, context)
```

#### Input
* input `object`
  * ordering `string`: Which field to use when ordering the results.
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.
  * game_pk **required** `string`

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [ScreenShot](#screenshot)

### games_stores_list
Get links to the stores that sell the game.


```js
rawg.games_stores_list({
  "game_pk": ""
}, context)
```

#### Input
* input `object`
  * ordering `string`: Which field to use when ordering the results.
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.
  * game_pk **required** `string`

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [GameStoreFull](#gamestorefull)

### games_read
Get details of the game.


```js
rawg.games_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Game.

#### Output
* output [GameSingle](#gamesingle)

### games_achievements_read
Get a list of game achievements.


```js
rawg.games_achievements_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Game.

#### Output
* output [ParentAchievement](#parentachievement)

### games_movies_read
Get a list of game trailers.


```js
rawg.games_movies_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Game.

#### Output
* output [Movie](#movie)

### games_reddit_read
Get a list of most recent posts from the game's subreddit.


```js
rawg.games_reddit_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Game.

#### Output
* output [Reddit](#reddit)

### games_suggested_read
Get a list of visually similar games, available only for business and enterprise API users.


```js
rawg.games_suggested_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Game.

#### Output
* output [GameSingle](#gamesingle)

### games_twitch_read
Get streams on Twitch associated with the game, available only for business and enterprise API users.


```js
rawg.games_twitch_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Game.

#### Output
* output [Twitch](#twitch)

### games_youtube_read
Get videos from YouTube associated with the game, available only for business and enterprise API users.


```js
rawg.games_youtube_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Game.

#### Output
* output [Youtube](#youtube)

### genres_list
Get a list of video game genres.


```js
rawg.genres_list({}, context)
```

#### Input
* input `object`
  * ordering `string`: Which field to use when ordering the results.
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Genre](#genre)

### genres_read
Get details of the genre.


```js
rawg.genres_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Genre.

#### Output
* output [GenreSingle](#genresingle)

### platforms_list
Get a list of video game platforms.


```js
rawg.platforms_list({}, context)
```

#### Input
* input `object`
  * ordering `string`: Which field to use when ordering the results.
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Platform](#platform)

### platforms_lists_parents_list
For instance, for PS2 and PS4 the “parent platform” is PlayStation.


```js
rawg.platforms_lists_parents_list({}, context)
```

#### Input
* input `object`
  * ordering `string`: Which field to use when ordering the results.
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [PlatformParentSingle](#platformparentsingle)

### platforms_read
Get details of the platform.


```js
rawg.platforms_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Platform.

#### Output
* output [PlatformSingle](#platformsingle)

### publishers_list
Get a list of video game publishers.


```js
rawg.publishers_list({}, context)
```

#### Input
* input `object`
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Publisher](#publisher)

### publishers_read
Get details of the publisher.


```js
rawg.publishers_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Publisher.

#### Output
* output [PublisherSingle](#publishersingle)

### stores_list
Get a list of video game storefronts.


```js
rawg.stores_list({}, context)
```

#### Input
* input `object`
  * ordering `string`: Which field to use when ordering the results.
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Store](#store)

### stores_read
Get details of the store.


```js
rawg.stores_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Store.

#### Output
* output [StoreSingle](#storesingle)

### tags_list
Get a list of tags.


```js
rawg.tags_list({}, context)
```

#### Input
* input `object`
  * page `integer`: A page number within the paginated result set.
  * page_size `integer`: Number of results to return per page.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Tag](#tag)

### tags_read
Get details of the tag.


```js
rawg.tags_read({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: A unique integer value identifying this Tag.

#### Output
* output [TagSingle](#tagsingle)



## Definitions

### Developer
* Developer `object`
  * games_count `integer`
  * id `integer`
  * image_background `string`
  * name **required** `string`
  * slug `string`

### DeveloperSingle
* DeveloperSingle `object`
  * description `string`
  * games_count `integer`
  * id `integer`
  * image_background `string`
  * name **required** `string`
  * slug `string`

### Game
* Game `object`
  * added `integer`
  * added_by_status `object`
  * background_image `string`
  * esrb_rating `object`
    * id `integer`
    * name `string` (values: Everyone, Everyone 10+, Teen, Mature, Adults Only, Rating Pending)
    * slug `string` (values: everyone, everyone-10-plus, teen, mature, adults-only, rating-pending)
  * id `integer`
  * metacritic `integer`
  * name `string`
  * platforms `array`
    * items `object`
      * platform `object`
        * id `integer`
        * name `string`
        * slug `string`
      * released_at `string`
      * requirements `object`
        * minimum `string`
        * recommended `string`
  * playtime `integer`: in hours
  * rating **required** `number`
  * rating_top `integer`
  * ratings `object`
  * ratings_count `integer`
  * released `string`
  * reviews_text_count `string`
  * slug `string`
  * suggestions_count `integer`
  * tba `boolean`
  * updated `string`

### GamePersonList
* GamePersonList `object`
  * games_count `integer`
  * id `integer`
  * image `string`
  * image_background `string`
  * name **required** `string`
  * slug `string`

### GamePlatformMetacritic
* GamePlatformMetacritic `object`
  * metascore `integer`
  * url `string`

### GameSingle
* GameSingle `object`
  * achievements_count `integer`
  * added `integer`
  * added_by_status `object`
  * additions_count `integer`
  * alternative_names `array`
    * items `string`
  * background_image `string`
  * background_image_additional `string`
  * creators_count `integer`
  * description `string`
  * esrb_rating `object`
    * id `integer`
    * name `string` (values: Everyone, Everyone 10+, Teen, Mature, Adults Only, Rating Pending)
    * slug `string` (values: everyone, everyone-10-plus, teen, mature, adults-only, rating-pending)
  * game_series_count `integer`
  * id `integer`
  * metacritic `integer`
  * metacritic_platforms `array`
    * items [GamePlatformMetacritic](#gameplatformmetacritic)
  * metacritic_url `string`: For example "http://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt"
  * movies_count `integer`
  * name `string`
  * name_original `string`
  * parent_achievements_count `string`
  * parents_count `integer`
  * platforms `array`
    * items `object`
      * platform `object`
        * id `integer`
        * name `string`
        * slug `string`
      * released_at `string`
      * requirements `object`
        * minimum `string`
        * recommended `string`
  * playtime `integer`: in hours
  * rating **required** `number`
  * rating_top `integer`
  * ratings `object`
  * ratings_count `integer`
  * reactions `object`
  * reddit_count `integer`
  * reddit_description `string`
  * reddit_logo `string`
  * reddit_name `string`
  * reddit_url `string`: For example "https://www.reddit.com/r/uncharted/" or "uncharted"
  * released `string`
  * reviews_text_count `string`
  * screenshots_count `integer`
  * slug `string`
  * suggestions_count `integer`
  * tba `boolean`
  * twitch_count `string`
  * updated `string`
  * website `string`
  * youtube_count `string`

### GameStoreFull
* GameStoreFull `object`
  * game_id `string`
  * id `integer`
  * store_id `string`
  * url **required** `string`

### Genre
* Genre `object`
  * games_count `integer`
  * id `integer`
  * image_background `string`
  * name **required** `string`
  * slug `string`

### GenreSingle
* GenreSingle `object`
  * description `string`
  * games_count `integer`
  * id `integer`
  * image_background `string`
  * name **required** `string`
  * slug `string`

### Movie
* Movie `object`
  * data `object`
  * id `integer`
  * name `string`
  * preview `string`

### ParentAchievement
* ParentAchievement `object`
  * description `string`
  * id `integer`
  * image `string`
  * name `string`
  * percent `string`

### Person
* Person `object`
  * games_count `integer`
  * id `integer`
  * image `string`
  * image_background `string`
  * name **required** `string`
  * slug `string`

### PersonSingle
* PersonSingle `object`
  * description `string`
  * games_count `integer`
  * id `integer`
  * image `string`
  * image_background `string`
  * name **required** `string`
  * rating `string`
  * rating_top `integer`
  * reviews_count `integer`
  * slug `string`
  * updated `string`

### Platform
* Platform `object`
  * games_count `integer`
  * id `integer`
  * image `string`
  * image_background `string`
  * name **required** `string`
  * slug `string`
  * year_end `integer`
  * year_start `integer`

### PlatformParentSingle
* PlatformParentSingle `object`
  * id `integer`
  * name **required** `string`
  * platforms **required** `array`
    * items [Platform](#platform)
  * slug `string`

### PlatformSingle
* PlatformSingle `object`
  * description `string`
  * games_count `integer`
  * id `integer`
  * image `string`
  * image_background `string`
  * name **required** `string`
  * slug `string`
  * year_end `integer`
  * year_start `integer`

### Position
* Position `object`
  * id `integer`
  * name `string`
  * slug `string`

### Publisher
* Publisher `object`
  * games_count `integer`
  * id `integer`
  * image_background `string`
  * name **required** `string`
  * slug `string`

### PublisherSingle
* PublisherSingle `object`
  * description `string`
  * games_count `integer`
  * id `integer`
  * image_background `string`
  * name **required** `string`
  * slug `string`

### Reddit
* Reddit `object`
  * created `string`
  * id `integer`
  * image `string`
  * name `string`
  * text `string`
  * url `string`
  * username `string`
  * username_url `string`

### ScreenShot
* ScreenShot `object`
  * height `integer`
  * hidden `boolean`: Set image as hidden or visible.
  * id `integer`
  * image `string`: An image file with size up to 20 MB.
  * width `integer`

### Store
* Store `object`
  * domain `string`
  * games_count `integer`
  * id `integer`
  * image_background `string`
  * name **required** `string`
  * slug `string`

### StoreSingle
* StoreSingle `object`
  * description `string`
  * domain `string`
  * games_count `integer`
  * id `integer`
  * image_background `string`
  * name **required** `string`
  * slug `string`

### Tag
* Tag `object`
  * games_count `integer`
  * id `integer`
  * image_background `string`
  * language `string`
  * name **required** `string`
  * slug `string`

### TagSingle
* TagSingle `object`
  * description `string`
  * games_count `integer`
  * id `integer`
  * image_background `string`
  * name **required** `string`
  * slug `string`

### Twitch
* Twitch `object`
  * created `string`
  * description `string`
  * external_id `integer`
  * id `integer`
  * language `string`
  * name `string`
  * published `string`
  * thumbnail `string`
  * view_count `integer`

### Youtube
* Youtube `object`
  * channel_id `string`
  * channel_title `string`
  * comments_count `integer`
  * created `string`
  * description `string`
  * dislike_count `integer`
  * external_id `string`
  * favorite_count `integer`
  * id `integer`
  * like_count `integer`
  * name `string`
  * thumbnails `object`
  * view_count `integer`


