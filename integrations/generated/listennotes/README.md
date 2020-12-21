# @datafire/listennotes

Client library for Listen API: Podcast Search & Directory API

## Installation and Usage
```bash
npm install --save @datafire/listennotes
```
```js
let listennotes = require('@datafire/listennotes').create();

.then(data => {
  console.log(data);
});
```

## Description

Simple & no-nonsense podcast search & directory API. Search all podcasts and episodes by people, places, or topics.


## Actions

### getBestPodcasts
Get a list of curated best podcasts by genre. You can get the genre ids from `GET /genres` endpoint.
This endpoint returns same data as https://www.listennotes.com/best-podcasts/



```js
listennotes.getBestPodcasts({
  "X-ListenAPI-Key": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * genre_id `string`: You can get the id from `GET /genres`. If not specified, it'll be the overall best podcasts, which can be considered as a special genre.
  * page `integer`: Page number of those podcasts in this genre.
  * region `string`: Filter best podcasts by country/region. You can get the supported country codes from `GET /regions`.
  * safe_mode `integer` (values: 0, 1): Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.

#### Output
* output [BestPodcastsResponse](#bestpodcastsresponse)

### getCuratedPodcasts
A bunch of curated lists from online media. For each list, you'll get basic info of up to 5 podcasts. To get detailed meta data of all podcasts in a specific list, you need to use `GET /curated_podcasts/{id}`. We add new curated lists to the database on a daily basis.



```js
listennotes.getCuratedPodcasts({
  "X-ListenAPI-Key": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * page `integer`: Page number of curated lists.

#### Output
* output [GetCuratedPodcastsResponse](#getcuratedpodcastsresponse)

### getCuratedPodcastById
Get detailed meta data of all podcasts in a specific curated list.
This endpoint returns same data as https://www.listennotes.com/curated-podcasts/



```js
listennotes.getCuratedPodcastById({
  "X-ListenAPI-Key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * id **required** `string`: id for a specific curated list of podcasts. You can get the id from the response of `GET /search?type=curated` or `GET /curated_podcasts`.

#### Output
* output [CuratedListFull](#curatedlistfull)

### getEpisodesInBatch
Batch fetch basic meta data for up to 10 episodes. This endpoint could be used to implement custom playlists for individual episodes. For detailed meta data of an individual episode, you need to use `GET /episodes/{id}`. This endpoint is available only in the PRO plan.



```js
listennotes.getEpisodesInBatch({
  "X-ListenAPI-Key": "",
  "ids": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * ids **required** `string`: Comma-separated list of episode ids.

#### Output
* output [GetEpisodesInBatchResponse](#getepisodesinbatchresponse)

### getEpisodeById
Fetch detailed meta data for a specific episode.


```js
listennotes.getEpisodeById({
  "X-ListenAPI-Key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * id **required** `string`: id for a specific episode. You can get episode id from using other endpoints, e.g., `GET /search`...

#### Output
* output [EpisodeFull](#episodefull)

### getEpisodeRecommendations
Fetch up to 8 episode recommendations based on the given episode id.


```js
listennotes.getEpisodeRecommendations({
  "X-ListenAPI-Key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * id **required** `string`: Episode id.
  * safe_mode `integer` (values: 0, 1): Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.

#### Output
* output [GetEpisodeRecommendationsResponse](#getepisoderecommendationsresponse)

### getGenres
Get a list of podcast genres that are supported in Listen Notes.
The genre id can be passed to other endpoints as a parameter to get podcasts in a specific genre,
e.g., `GET /best_podcasts`, `GET /search`...
You may want to cache the list of genres on the client side.



```js
listennotes.getGenres({
  "X-ListenAPI-Key": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * top_level_only `integer` (values: 0, 1): Just show top level genres? If 1, yes, just show top level genres. If 0, no, show all genres.

#### Output
* output [GetGenresResponse](#getgenresresponse)

### justListen
Recently published episodes are more likely to be fetched. Good luck!


```js
listennotes.justListen({
  "X-ListenAPI-Key": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api

#### Output
* output [EpisodeSimple](#episodesimple)

### getLanguages
Get a list of languages that are supported in Listen Notes database. You can use the language string as query parameter in `GET /search`.



```js
listennotes.getLanguages({
  "X-ListenAPI-Key": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api

#### Output
* output [GetLanguagesResponse](#getlanguagesresponse)

### getPlaylists
This endpoint returns same data as listennotes.com/listen under your account.
You can use the **page** parameter to do pagination and fetch more playlists.



```js
listennotes.getPlaylists({
  "X-ListenAPI-Key": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * sort `string` (values: recent_added_first, oldest_added_first, name_a_to_z, name_z_to_a): How do you want to sort playlists?
  * page `integer`: Page number of playlists.

#### Output
* output [PlaylistsResponse](#playlistsresponse)

### getPlaylistById
A playlist can be an episode list (i.e., all items are episodes) or a podcast list (i.e., all items are podcasts),
which is essentially the same as those created via listennotes.com/listen/.
This endpoint fetches a list of items (i.e., episodes or podcasts) in the playlist.
You can use the **last_pub_date_ms** parameter to do pagination and fetch more items.
A playlist can be **public** (discoverable on ListenNotes.com),
**unlisted** (accessible to anyone who knows the playlist id),
or **private** (accessible to its owner).
You can fetch all playlists created by you, and **public** / **unlisted** playlists created by others.



```js
listennotes.getPlaylistById({
  "X-ListenAPI-Key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * id **required** `string`: Playlist id (always 11 characters, e.g., m1pe7z60bsw).
  * type `string` (values: episode_list, podcast_list): The type of this playlist, which should be either **episode_list** or **podcast_list**.
  * last_timestamp_ms `integer`: For playlist items pagination.
  * sort `string` (values: recent_added_first, oldest_added_first, recent_published_first, oldest_published_first): How do you want to sort playlist items?

#### Output
* output [PlaylistResponse](#playlistresponse)

### getPodcastsInBatch
Batch fetch basic meta data for up to 10 podcasts.
This endpoint could be used to build something like OPML import,
allowing users to import a bunch of podcasts via rss urls.
For detailed meta data (including episodes) of an individual podcast, you need to use `GET /podcasts/{id}`. This endpoint is available only in the PRO plan.



```js
listennotes.getPodcastsInBatch({
  "X-ListenAPI-Key": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * ids `string`: Comma-separated list of podcast ids.
  * itunes_ids `string`: Comma-separated itunes ids.
  * next_episode_pub_date `integer`: For latest episodes pagination. It's the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 10 episodes.
  * rsses `string`: Comma-separated rss urls.
  * show_latest_episodes `integer` (values: 0, 1): Whether or not to fetch up to 10 latest episodes from these podcasts, sorted by pub_date. 1 is yes, and 0 is no.

#### Output
* output [GetPodcastsInBatchResponse](#getpodcastsinbatchresponse)

### submitPodcast
Podcast hosting services can use this endpoint to help your users directly submit a new podcast to Listen Notes database. If the podcast doesn't exist in the database, "status" in the response will be "in review", and we'll review it within 12 hours. If the podcast exists, "status" in the response will be "found". You can use `POST /podcasts` to check if multiple podcasts exist in the database. If you want to get a notification once the podcast is accepted, you can either specify the "email" parameter or configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks



```js
listennotes.submitPodcast({
  "X-ListenAPI-Key": "",
  "rss": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * email `string`: A valid email address. If **email** is specified, then we'll notify this email address once the podcast is accepted.
  * rss **required** `string`: A valid podcast rss url.

#### Output
* output [SubmitPodcastResponse](#submitpodcastresponse)

### deletePodcastById
Podcast hosting services can use this endpoint to streamline the process of podcast deletion on behave of their users (podcasters). We will review the deletion request within 12 hours. If the podcast is already deleted, the "status" field in the response will be "deleted". Otherwise, the status field will be "in review". If you want to get a notification once the podcast is deleted, you can configure a webhook url in the dashboard: listennotes.com/api/dashboard/#webhooks



```js
listennotes.deletePodcastById({
  "X-ListenAPI-Key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * id **required** `string`: Podcast id. You can get podcast id from using other endpoints, e.g., `GET /search`, `GET /best_podcasts`...
  * reason `string`: The reason why this podcast should be deleted, e.g., copyright violation, the podcaster wants to delete it... You can put "testing" here to indicate that you are testing this endpoint, so we will not actually delete the podcast.

#### Output
* output [DeletePodcastResponse](#deletepodcastresponse)

### getPodcastById
Fetch detailed meta data and episodes for a specific podcast (up to 10 episodes each time).
You can use the **next_episode_pub_date** parameter to do pagination and fetch more episodes.



```js
listennotes.getPodcastById({
  "X-ListenAPI-Key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * id **required** `string`: Podcast id. You can get podcast id from using other endpoints, e.g., `GET /search`, `GET /best_podcasts`...
  * next_episode_pub_date `integer`: For episodes pagination. It's the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 10 episodes or oldest 10 episodes, depending on the value of the **sort** parameter.
  * sort `string` (values: recent_first, oldest_first): How do you want to sort the episodes of this podcast?

#### Output
* output [PodcastFull](#podcastfull)

### getPodcastRecommendations
Fetch up to 8 podcast recommendations based on the given podcast id.


```js
listennotes.getPodcastRecommendations({
  "X-ListenAPI-Key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * id **required** `string`: Podcast id.
  * safe_mode `integer` (values: 0, 1): Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.

#### Output
* output [GetPodcastRecommendationsResponse](#getpodcastrecommendationsresponse)

### getRegions
It returns a dictionary of country codes (e.g., us, gb...) & country names (United States, United Kingdom...). The country code is used in the query parameter **region** of `GET /best_podcasts`.



```js
listennotes.getRegions({
  "X-ListenAPI-Key": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api

#### Output
* output [GetRegionsResponse](#getregionsresponse)

### search
Full-text search on episodes, podcasts, or curated lists of podcasts.


```js
listennotes.search({
  "X-ListenAPI-Key": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * q **required** `string`: Search term, e.g., person, place, topic... You can use double quotes to do verbatim match, e.g., "game of thrones". Otherwise, it's fuzzy search.
  * sort_by_date `integer` (values: 0, 1): Sort by date or not? If 0, then sort by relevance. If 1, then sort by date.
  * type `string` (values: episode, podcast, curated): What type of contents do you want to search for? 
  * offset `integer`: Offset for search results, for pagination. You'll use **next_offset** from response for this parameter.
  * len_min `integer`: Minimum audio length in minutes. Applicable only when type parameter is **episode**.
  * len_max `integer`: Maximum audio length in minutes. Applicable only when type parameter is **episode**.
  * episode_count_min `integer`: Minimum number of episodes. Applicable only when type parameter is **podcast**.
  * episode_count_max `integer`: Maximum number of episodes. Applicable only when type parameter is **podcast**.
  * genre_ids `string`: A comma-delimited string of a list of genre ids. If not specified, then all genres are included. You can find the id and the name of all genres from `GET /genres`. It works only when **type** is *episode* or *podcast*.
  * published_before `integer`: Only show episodes/podcasts/curated lists published before this timestamp (in milliseconds). If **published_before** & **published_after** are used at the same time, **published_before** should be bigger than **published_after**.
  * published_after `integer`: Only show episodes/podcasts/curated lists published after this timestamp (in milliseconds). If **published_before** & **published_after** are used at the same time, **published_before** should be bigger than **published_after**.
  * only_in `string`: A comma-delimited string to search only in specific fields. Allowed values are title, description, author, and audio. If not specified, then search every fields.
  * language `string`: Limit search results to a specific language. If not specified, it'll be any language. You can get a list of supported languages from `GET /languages`. It works only when **type** is *episode* or *podcast*.
  * region `string`: Limit search results to a specific region (e.g., us, gb, in...). If not specified, it'll be any region. You can get the supported country codes from `GET /regions`. It works only when **type** is *episode* or *podcast*.
  * ocid `string`: A podcast id (the **podcast_id** field in response). This parameter is to limit search results in a specific podcast. It works only when **type** is *episode*.
  * ncid `string`: A podcast id (the **podcast_id** field in response). This parameter is to exclude search results from a specific podcast. It works only when **type** is *episode*.
  * safe_mode `integer` (values: 0, 1): Whether or not to exclude podcasts/episodes with explicit language. 1 is yes and 0 is no. It works only when **type** is *episode* or *podcast*.

#### Output
* output [SearchResponse](#searchresponse)

### typeahead
Suggest search terms, podcast genres, and podcasts.


```js
listennotes.typeahead({
  "X-ListenAPI-Key": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * X-ListenAPI-Key **required** `string`: Get API Key on listennotes.com/api
  * q **required** `string`: Search term, e.g., person, place, topic... You can use double quotes to do verbatim match, e.g., "game of thrones". Otherwise, it's fuzzy search.
  * show_podcasts `integer` (values: 0, 1): Autosuggest podcasts. This only searches podcast title and publisher and returns very limited info of 5 podcasts. 1 is yes, 0 is no. It's a bit slow to autosuggest podcasts, so we turn it off by default. If show_podcasts=1, you can also pass iTunes id (e.g., 474722933) to the q parameter to fetch podcast meta data.
  * show_genres `integer` (values: 0, 1): Whether or not to autosuggest genres. 1 is yes, 0 is no.
  * safe_mode `integer` (values: 0, 1): Whether or not to exclude podcasts/episodes with explicit language. 1 is yes and 0 is no. It works only when **show_podcasts** is *1*.

#### Output
* output [TypeaheadResponse](#typeaheadresponse)



## Definitions

### AudioField
* AudioField `string`: Audio url of this episode, which can be played directly.

### AudioLengthSecField
* AudioLengthSecField `integer`: Audio length of this episode. In seconds.

### BestPodcastsLNUrlField
* BestPodcastsLNUrlField `string`: Url of the list of best podcasts on [ListenNotes.com](https://www.ListenNotes.com).

### BestPodcastsResponse
* BestPodcastsResponse `object`
  * has_next **required** `boolean`
  * has_previous **required** `boolean`
  * id **required** `integer`: The id of this genre
  * listennotes_url **required** [BestPodcastsLNUrlField](#bestpodcastslnurlfield)
  * name **required** `string`: This genre's name.
  * next_page_number **required** `integer`
  * page_number **required** `integer`
  * parent_id **required** `integer`: The id of parent genre.
  * podcasts **required** `array`
    * items [PodcastSimple](#podcastsimple)
  * previous_page_number **required** `integer`
  * total **required** `integer`

### CountryField
* CountryField `string`: The country where this podcast is produced.

### CuratedDescriptionField
* CuratedDescriptionField `string`: This curated list's description.

### CuratedIdField
* CuratedIdField `string`: Curated list id.

### CuratedLNUrlField
* CuratedLNUrlField `string`: The url of this curated list on [ListenNotes.com](https://www.ListenNotes.com).

### CuratedListFull
* CuratedListFull `object`
  * description [CuratedDescriptionField](#curateddescriptionfield)
  * id [CuratedIdField](#curatedidfield)
  * listennotes_url [CuratedLNUrlField](#curatedlnurlfield)
  * podcasts `array`: Complete meta data of all podcasts in this curated list.
    * items [PodcastSimple](#podcastsimple)
  * pub_date_ms [CuratedPubDateMsField](#curatedpubdatemsfield)
  * source_domain [CuratedSourceDomainField](#curatedsourcedomainfield)
  * source_url [CuratedSourceUrlField](#curatedsourceurlfield)
  * title [CuratedNameField](#curatednamefield)

### CuratedListSearchResult
* CuratedListSearchResult `object`: When **type** is *curated*.
  * description_highlighted `string`: Highlighted segment of this curated list's description
  * description_original `string`: Plain text of this curated list's description
  * id [CuratedIdField](#curatedidfield)
  * listennotes_url [CuratedLNUrlField](#curatedlnurlfield)
  * podcasts `array`: Up to 5 podcasts in this curated list.
    * items [PodcastMinimum](#podcastminimum)
  * pub_date_ms [CuratedPubDateMsField](#curatedpubdatemsfield)
  * source_domain [CuratedSourceDomainField](#curatedsourcedomainfield)
  * source_url [CuratedSourceUrlField](#curatedsourceurlfield)
  * title_highlighted `string`: Highlighted segment of this curated list's title
  * title_original `string`: Plain text of this curated list's title

### CuratedListSimple
* CuratedListSimple `object`
  * description [CuratedDescriptionField](#curateddescriptionfield)
  * id [CuratedIdField](#curatedidfield)
  * listennotes_url [CuratedLNUrlField](#curatedlnurlfield)
  * podcasts `array`: Minimum meta data of up to 5 podcasts in this curated list.
    * items [PodcastMinimum](#podcastminimum)
  * pub_date_ms [CuratedPubDateMsField](#curatedpubdatemsfield)
  * source_domain [CuratedSourceDomainField](#curatedsourcedomainfield)
  * source_url [CuratedSourceUrlField](#curatedsourceurlfield)
  * title [CuratedNameField](#curatednamefield)

### CuratedNameField
* CuratedNameField `string`: Curated list name.

### CuratedPubDateMsField
* CuratedPubDateMsField `integer`: Published date of this curated list. In milliseconds.

### CuratedSourceDomainField
* CuratedSourceDomainField `string`: The domain name of the source of this curated list.

### CuratedSourceUrlField
* CuratedSourceUrlField `string`: Url of the source of this curated list.

### CustomAudio
* CustomAudio `object`: A custom audio in a playlist, which is a type of playlist item.
  * audio `string`: Audio url, which can be played directly.
  * audio_length_sec `integer`: Audio length in seconds.
  * image `string`: High resolution image url of this custom audio.
  * pub_date_ms `integer`: Published date (in milliseconds) of this custom audio.
  * thumbnail `string`: Low resolution image url of this custom audio.
  * title `string`: Custom audio title.

### DeletePodcastResponse
* DeletePodcastResponse `object`
  * status **required** `string` (values: deleted, in review): The status of this podcast deletion request.

### DeletedItem
* DeletedItem `object`: A deleted episode or podcast.
  * error `string`: Why this episode or podcast is deleted?
  * id `string`: Episode id or podcast id.
  * status `string`: The status of this episode or podcast. For now, the only possible value is **deleted**.
  * title `string`: Episode title or podcast title.

### EarliestPubDateMsField
* EarliestPubDateMsField `integer`: The published date of the oldest episode of this podcast. In milliseconds

### EmailField
* EmailField `string`: The email of this podcast's producer. This field is available only in the PRO plan.

### EpisodeDescriptionField
* EpisodeDescriptionField `string`: Html of this episode's full description

### EpisodeFull
* EpisodeFull `object`
  * audio [AudioField](#audiofield)
  * audio_length_sec [AudioLengthSecField](#audiolengthsecfield)
  * description [EpisodeDescriptionField](#episodedescriptionfield)
  * explicit_content [ExplicitField](#explicitfield)
  * id [EpisodeIdField](#episodeidfield)
  * image [EpisodeImageField](#episodeimagefield)
  * link [LinkField](#linkfield)
  * listennotes_edit_url [EpisodeLNEditUrlField](#episodelnediturlfield)
  * listennotes_url [EpisodeLNUrlField](#episodelnurlfield)
  * maybe_audio_invalid [MaybeAudioInvalidField](#maybeaudioinvalidfield)
  * podcast [PodcastSimple](#podcastsimple)
  * pub_date_ms [EpisodePubDateMsField](#episodepubdatemsfield)
  * thumbnail [EpisodeThumbnailField](#episodethumbnailfield)
  * title [EpisodeNameField](#episodenamefield)

### EpisodeIdField
* EpisodeIdField `string`: Episode id.

### EpisodeImageField
* EpisodeImageField `string`: Image url for this episode.

### EpisodeLNEditUrlField
* EpisodeLNEditUrlField `string`: Edit url of this episode where you can update the audio url if you find the audio is broken.

### EpisodeLNUrlField
* EpisodeLNUrlField `string`: The url of this episode on [ListenNotes.com](https://www.ListenNotes.com).

### EpisodeMinimum
* EpisodeMinimum `object`
  * audio [AudioField](#audiofield)
  * audio_length_sec [AudioLengthSecField](#audiolengthsecfield)
  * description [EpisodeDescriptionField](#episodedescriptionfield)
  * explicit_content [ExplicitField](#explicitfield)
  * id [EpisodeIdField](#episodeidfield)
  * image [ImageField](#imagefield)
  * link [LinkField](#linkfield)
  * listennotes_edit_url [EpisodeLNEditUrlField](#episodelnediturlfield)
  * listennotes_url [EpisodeLNUrlField](#episodelnurlfield)
  * maybe_audio_invalid [MaybeAudioInvalidField](#maybeaudioinvalidfield)
  * pub_date_ms [EpisodePubDateMsField](#episodepubdatemsfield)
  * thumbnail [ThumbnailField](#thumbnailfield)
  * title [EpisodeNameField](#episodenamefield)

### EpisodeNameField
* EpisodeNameField `string`: Episode name.

### EpisodePubDateMsField
* EpisodePubDateMsField `integer`: Published date for this episode. In millisecond.

### EpisodeSearchResult
* EpisodeSearchResult `object`: When **type** is *episode*.
  * audio [AudioField](#audiofield)
  * audio_length_sec [AudioLengthSecField](#audiolengthsecfield)
  * description_highlighted `string`: Highlighted segment of this episode's description
  * description_original `string`: Plain text of this episode's description
  * explicit_content [ExplicitField](#explicitfield)
  * id [EpisodeIdField](#episodeidfield)
  * image [EpisodeImageField](#episodeimagefield)
  * itunes_id [iTunesIdField](#itunesidfield)
  * link [LinkField](#linkfield)
  * listennotes_url [EpisodeLNUrlField](#episodelnurlfield)
  * podcast `object`: The podcast that this episode belongs to.
    * genre_ids [GenreIdsField](#genreidsfield)
    * id [PodcastIdField](#podcastidfield)
    * image [ImageField](#imagefield)
    * listen_score [ListenScoreField](#listenscorefield)
    * listen_score_global_rank [ListenScoreGlobalRankField](#listenscoreglobalrankfield)
    * listennotes_url [PodcastLNUrlField](#podcastlnurlfield)
    * publisher_highlighted [PublisherHighlightedField](#publisherhighlightedfield)
    * publisher_original [PublisherOriginalField](#publisheroriginalfield)
    * thumbnail [ThumbnailField](#thumbnailfield)
    * title_highlighted [PodcastTitleHighlightedField](#podcasttitlehighlightedfield)
    * title_original [PodcastTitleOriginalField](#podcasttitleoriginalfield)
  * pub_date_ms [EpisodePubDateMsField](#episodepubdatemsfield)
  * rss [RssField](#rssfield)
  * thumbnail [EpisodeThumbnailField](#episodethumbnailfield)
  * title_highlighted `string`: Highlighted segment of this episode's title
  * title_original `string`: Plain text of this episode' title
  * transcripts_highlighted `array`: Up to 2 highlighted segments of the audio transcript of this episode.
    * items `string`

### EpisodeSimple
* EpisodeSimple `object`
  * audio [AudioField](#audiofield)
  * audio_length_sec [AudioLengthSecField](#audiolengthsecfield)
  * description [EpisodeDescriptionField](#episodedescriptionfield)
  * explicit_content [ExplicitField](#explicitfield)
  * id [EpisodeIdField](#episodeidfield)
  * image [EpisodeImageField](#episodeimagefield)
  * link [LinkField](#linkfield)
  * listennotes_edit_url [EpisodeLNEditUrlField](#episodelnediturlfield)
  * listennotes_url [EpisodeLNUrlField](#episodelnurlfield)
  * maybe_audio_invalid [MaybeAudioInvalidField](#maybeaudioinvalidfield)
  * podcast [PodcastMinimum](#podcastminimum)
  * pub_date_ms [EpisodePubDateMsField](#episodepubdatemsfield)
  * thumbnail [EpisodeThumbnailField](#episodethumbnailfield)
  * title [EpisodeNameField](#episodenamefield)

### EpisodeThumbnailField
* EpisodeThumbnailField `string`: Thumbnail image (300x300) url for this episode.

### ExplicitField
* ExplicitField `boolean`: Whether this podcast contains explicit language.

### Genre
* Genre `object`
  * id `integer`: Genre id
  * name `string`: Genre name.
  * parent_id `integer`: Parent genre id.

### GenreIdsField
* GenreIdsField `array`
  * items `integer`: Genre ids.

### GetCuratedPodcastsResponse
* GetCuratedPodcastsResponse `object`
  * curated_lists **required** `array`
    * items [CuratedListSimple](#curatedlistsimple)
  * has_next **required** `boolean`
  * has_previous **required** `boolean`
  * next_page_number **required** `integer`
  * page_number **required** `integer`
  * previous_page_number **required** `integer`
  * total **required** `integer`

### GetEpisodeRecommendationsResponse
* GetEpisodeRecommendationsResponse `object`
  * recommendations **required** `array`
    * items [EpisodeSimple](#episodesimple)

### GetEpisodesInBatchForm
* GetEpisodesInBatchForm `object`
  * ids **required** `string`: Comma-separated list of episode ids.

### GetEpisodesInBatchResponse
* GetEpisodesInBatchResponse `object`
  * episodes **required** `array`
    * items [EpisodeSimple](#episodesimple)

### GetGenresResponse
* GetGenresResponse `object`
  * genres **required** `array`
    * items [Genre](#genre)

### GetLanguagesResponse
* GetLanguagesResponse `object`
  * languages **required** `array`
    * items `string`

### GetPodcastRecommendationsResponse
* GetPodcastRecommendationsResponse `object`
  * recommendations **required** `array`
    * items [PodcastSimple](#podcastsimple)

### GetPodcastsInBatchForm
* GetPodcastsInBatchForm `object`
  * ids `string`: Comma-separated list of podcast ids.
  * itunes_ids `string`: Comma-separated itunes ids.
  * next_episode_pub_date `integer`: For latest episodes pagination. It's the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 10 episodes.
  * rsses `string`: Comma-separated rss urls.
  * show_latest_episodes `integer` (values: 0, 1): Whether or not to fetch up to 10 latest episodes from these podcasts, sorted by pub_date. 1 is yes, and 0 is no.

### GetPodcastsInBatchResponse
* GetPodcastsInBatchResponse `object`
  * latest_episodes `array`: Up to 10 latest episodes from these podcasts, sorted by **pub_date**. This field shows up only when **show_latest_episodes** is 1.
    * items [EpisodeSimple](#episodesimple)
  * podcasts **required** `array`
    * items [PodcastSimple](#podcastsimple)

### GetRegionsResponse
* GetRegionsResponse `object`
  * regions **required** `object`

### ImageField
* ImageField `string`: Image url for this podcast's artwork. If you are using PRO plan, then it's

### IsClaimedField
* IsClaimedField `boolean`: Whether this podcast is claimed by its producer on [ListenNotes.com](https://www.ListenNotes.com).

### LanguageField
* LanguageField `string`: The language of this podcast. You can get all supported languages from `GET /languages`.

### LatestPubDateMsField
* LatestPubDateMsField `integer`: The published date of the latest episode of this podcast. In milliseconds

### LinkField
* LinkField `string`: Web link of this episode.

### ListenScoreField
* ListenScoreField `integer`: The estimated popularity score of a podcast compared to all other rss-based public podcasts in the world on a scale from 0 to 100.

### ListenScoreGlobalRankField
* ListenScoreGlobalRankField `string`: The estimated popularity ranking of a podcast compared to all other rss-based public podcasts in the world.

### MaybeAudioInvalidField
* MaybeAudioInvalidField `boolean`: Whether or not this episode's audio is invalid. Podcasters may delete the original audio.

### NextEpisodePubDateField
* NextEpisodePubDateField `integer`: Passed to the **next_episode_pub_date** parameter of `GET /podcasts/{id}` to paginate through episodes of that podcast.

### PlaylistDescriptionField
* PlaylistDescriptionField `string`: Playlist description.

### PlaylistIdField
* PlaylistIdField `string`: A 11-character playlist id.

### PlaylistImageField
* PlaylistImageField `string`: High resolution image url of the playlist.

### PlaylistItem
* PlaylistItem `object`: An item in a playlist
  * added_at_ms `integer`: Timestamp (in milliseconds) when this item is added.
  * id `integer`: Playlist item id.
  * notes `string`: Notes for this item.
  * type `string` (values: episode, custom_audio, podcast): The type of this playlist item.

### PlaylistLastTimestampMsField
* PlaylistLastTimestampMsField `integer`: Passed to the **last_timestamp_ms** parameter of `GET /playlists/{id}` to paginate through items of that playlist.

### PlaylistListennotesUrlField
* PlaylistListennotesUrlField `string`: The url of this playlist on ListenNotes.com.

### PlaylistNameField
* PlaylistNameField `string`: Playlist name.

### PlaylistResponse
* PlaylistResponse `object`
  * description [PlaylistDescriptionField](#playlistdescriptionfield)
  * id [PlaylistIdField](#playlistidfield)
  * image [PlaylistImageField](#playlistimagefield)
  * items `array`: A list of playlist items.
    * items [PlaylistItem](#playlistitem)
  * last_timestamp_ms [PlaylistLastTimestampMsField](#playlistlasttimestampmsfield)
  * listennotes_url [PlaylistListennotesUrlField](#playlistlistennotesurlfield)
  * name [PlaylistNameField](#playlistnamefield)
  * thumbnail [PlaylistThumbnailField](#playlistthumbnailfield)
  * total `integer`: Total number of items in this playlist.
  * type `string` (values: episode_list, podcast_list): The type of this playlist, which should be either **episode_list** or **podcast_list**.
  * visibility [PlaylistVisibilityField](#playlistvisibilityfield)

### PlaylistThumbnailField
* PlaylistThumbnailField `string`: Low resolution image url of the playlist.

### PlaylistVisibilityField
* PlaylistVisibilityField `string` (values: public, unlisted, private): Visibility of this playlist.

### PlaylistsResponse
* PlaylistsResponse `object`
  * has_next `boolean`
  * has_previous `boolean`
  * next_page_number `integer`
  * page_number `integer`
  * playlists `array`
    * items `object`: A playlist
      * description [PlaylistDescriptionField](#playlistdescriptionfield)
      * episode_count `integer`: The number of episodes (including custom audio) in this playlist.
      * id [PlaylistIdField](#playlistidfield)
      * image [PlaylistImageField](#playlistimagefield)
      * last_timestamp_ms [PlaylistLastTimestampMsField](#playlistlasttimestampmsfield)
      * listennotes_url [PlaylistListennotesUrlField](#playlistlistennotesurlfield)
      * name [PlaylistNameField](#playlistnamefield)
      * podcast_count `integer`: The number of podcasts in this playlist.
      * thumbnail [PlaylistThumbnailField](#playlistthumbnailfield)
      * visibility [PlaylistVisibilityField](#playlistvisibilityfield)
  * previous_page_number `integer`
  * total `integer`

### PodcastDescriptionField
* PodcastDescriptionField `string`: Html of this episode's full description

### PodcastExtraField
* PodcastExtraField `object`
  * facebook_handle `string`: Facebook username affiliated with this podcast
  * google_url `string`: Google Podcasts url for this podcast
  * instagram_handle `string`: Instagram username affiliated with this podcast
  * linkedin_url `string`: LinkedIn url affiliated with this podcast
  * patreon_handle `string`: Patreon username affiliated with this podcast
  * spotify_url `string`: Spotify url for this podcast
  * twitter_handle `string`: Twitter username affiliated with this podcast
  * url1 `string`: Url affiliated with this podcast
  * url2 `string`: Url affiliated with this podcast
  * url3 `string`: Url affiliated with this podcast
  * wechat_handle `string`: WeChat username affiliated with this podcast
  * youtube_url `string`: YouTube url affiliated with this podcast

### PodcastFull
* PodcastFull `object`
  * country [CountryField](#countryfield)
  * description [PodcastDescriptionField](#podcastdescriptionfield)
  * earliest_pub_date_ms [EarliestPubDateMsField](#earliestpubdatemsfield)
  * email [EmailField](#emailfield)
  * episodes `array`
    * items [EpisodeMinimum](#episodeminimum)
  * explicit_content [ExplicitField](#explicitfield)
  * extra [PodcastExtraField](#podcastextrafield)
  * genre_ids [GenreIdsField](#genreidsfield)
  * id [PodcastIdField](#podcastidfield)
  * image [ImageField](#imagefield)
  * is_claimed [IsClaimedField](#isclaimedfield)
  * itunes_id [iTunesIdField](#itunesidfield)
  * language [LanguageField](#languagefield)
  * latest_pub_date_ms [LatestPubDateMsField](#latestpubdatemsfield)
  * listen_score [ListenScoreField](#listenscorefield)
  * listen_score_global_rank [ListenScoreGlobalRankField](#listenscoreglobalrankfield)
  * listennotes_url [PodcastLNUrlField](#podcastlnurlfield)
  * looking_for [PodcastLookingForField](#podcastlookingforfield)
  * next_episode_pub_date [NextEpisodePubDateField](#nextepisodepubdatefield)
  * publisher [PublisherField](#publisherfield)
  * rss [RssField](#rssfield)
  * thumbnail [ThumbnailField](#thumbnailfield)
  * title [PodcastNameField](#podcastnamefield)
  * total_episodes [TotalEpisodesField](#totalepisodesfield)
  * type [PodcastTypeField](#podcasttypefield)
  * website [WebsiteField](#websitefield)

### PodcastIdField
* PodcastIdField `string`: Podcast id.

### PodcastLNUrlField
* PodcastLNUrlField `string`: The url of this podcast on [ListenNotes.com](https://www.ListenNotes.com).

### PodcastLookingForField
* PodcastLookingForField `object`
  * cohosts `boolean`: Whether this podcast is looking for cohosts.
  * cross_promotion `boolean`: Whether this podcast is looking for cross promotion opportunities with other podcasts.
  * guests `boolean`: Whether this podcast is looking for guests.
  * sponsors `boolean`: Whether this podcast is looking for sponsors.

### PodcastMinimum
* PodcastMinimum `object`
  * id [PodcastIdField](#podcastidfield)
  * image [ImageField](#imagefield)
  * listen_score [ListenScoreField](#listenscorefield)
  * listen_score_global_rank [ListenScoreGlobalRankField](#listenscoreglobalrankfield)
  * listennotes_url [PodcastLNUrlField](#podcastlnurlfield)
  * publisher [PublisherField](#publisherfield)
  * thumbnail [ThumbnailField](#thumbnailfield)
  * title [PodcastNameField](#podcastnamefield)

### PodcastNameField
* PodcastNameField `string`: Podcast name.

### PodcastSearchResult
* PodcastSearchResult `object`: When **type** is *podcast*.
  * description_highlighted `string`: Highlighted segment of podcast description
  * description_original `string`: Plain text of podcast description
  * earliest_pub_date_ms [EarliestPubDateMsField](#earliestpubdatemsfield)
  * email [EmailField](#emailfield)
  * explicit_content [ExplicitField](#explicitfield)
  * genre_ids [GenreIdsField](#genreidsfield)
  * id [PodcastIdField](#podcastidfield)
  * image [ImageField](#imagefield)
  * itunes_id [iTunesIdField](#itunesidfield)
  * latest_pub_date_ms [LatestPubDateMsField](#latestpubdatemsfield)
  * listen_score [ListenScoreField](#listenscorefield)
  * listen_score_global_rank [ListenScoreGlobalRankField](#listenscoreglobalrankfield)
  * listennotes_url [PodcastLNUrlField](#podcastlnurlfield)
  * publisher_highlighted [PublisherHighlightedField](#publisherhighlightedfield)
  * publisher_original [PublisherOriginalField](#publisheroriginalfield)
  * rss [RssField](#rssfield)
  * thumbnail [ThumbnailField](#thumbnailfield)
  * title_highlighted [PodcastTitleHighlightedField](#podcasttitlehighlightedfield)
  * title_original [PodcastTitleOriginalField](#podcasttitleoriginalfield)
  * total_episodes [TotalEpisodesField](#totalepisodesfield)
  * website [WebsiteField](#websitefield)

### PodcastSimple
* PodcastSimple `object`
  * country [CountryField](#countryfield)
  * description [PodcastDescriptionField](#podcastdescriptionfield)
  * earliest_pub_date_ms [EarliestPubDateMsField](#earliestpubdatemsfield)
  * email [EmailField](#emailfield)
  * explicit_content [ExplicitField](#explicitfield)
  * extra [PodcastExtraField](#podcastextrafield)
  * genre_ids [GenreIdsField](#genreidsfield)
  * id [PodcastIdField](#podcastidfield)
  * image [ImageField](#imagefield)
  * is_claimed [IsClaimedField](#isclaimedfield)
  * itunes_id [iTunesIdField](#itunesidfield)
  * language [LanguageField](#languagefield)
  * latest_pub_date_ms [LatestPubDateMsField](#latestpubdatemsfield)
  * listen_score [ListenScoreField](#listenscorefield)
  * listen_score_global_rank [ListenScoreGlobalRankField](#listenscoreglobalrankfield)
  * listennotes_url [PodcastLNUrlField](#podcastlnurlfield)
  * looking_for [PodcastLookingForField](#podcastlookingforfield)
  * publisher [PublisherField](#publisherfield)
  * rss [RssField](#rssfield)
  * thumbnail [ThumbnailField](#thumbnailfield)
  * title [PodcastNameField](#podcastnamefield)
  * total_episodes [TotalEpisodesField](#totalepisodesfield)
  * type [PodcastTypeField](#podcasttypefield)
  * website [WebsiteField](#websitefield)

### PodcastTitleHighlightedField
* PodcastTitleHighlightedField `string`: Highlighted segment of podcast name.

### PodcastTitleOriginalField
* PodcastTitleOriginalField `string`: Plain text of podcast name.

### PodcastTypeField
* PodcastTypeField `string` (values: episodic, serial): The type of this podcast - episodic or serial.

### PodcastTypeaheadResult
* PodcastTypeaheadResult `object`
  * explicit_content [ExplicitField](#explicitfield)
  * id [PodcastIdField](#podcastidfield)
  * image [ImageField](#imagefield)
  * publisher_highlighted [PublisherHighlightedField](#publisherhighlightedfield)
  * publisher_original [PublisherOriginalField](#publisheroriginalfield)
  * thumbnail [ThumbnailField](#thumbnailfield)
  * title_highlighted [PodcastTitleHighlightedField](#podcasttitlehighlightedfield)
  * title_original [PodcastTitleOriginalField](#podcasttitleoriginalfield)

### PublisherField
* PublisherField `string`: Podcast publisher name.

### PublisherHighlightedField
* PublisherHighlightedField `string`: Highlighted segment of this podcast's publisher name.

### PublisherOriginalField
* PublisherOriginalField `string`: Plain text of this podcast's publisher name.

### RssField
* RssField `string`: RSS url of this podcast. This field is available only in the PRO plan.

### SearchResponse
* SearchResponse `object`
  * count `integer`: The number of search results in this page.
  * next_offset `integer`: Pass this value to the **offset** parameter to do pagination of search results.
  * results `array`: A list of search results.
  * took `number`: The time it took to fetch these search results. In seconds.
  * total `integer`: The total number of search results.

### SubmitPodcastForm
* SubmitPodcastForm `object`
  * email `string`: A valid email address. If **email** is specified, then we'll notify this email address once the podcast is accepted.
  * rss **required** `string`: A valid podcast rss url.

### SubmitPodcastResponse
* SubmitPodcastResponse `object`
  * podcast **required** [PodcastMinimum](#podcastminimum)
  * status **required** `string` (values: found, in review): The status of this submission.

### ThumbnailField
* ThumbnailField `string`: Thumbnail image url for this podcast's artwork (300x300).

### TotalEpisodesField
* TotalEpisodesField `integer`: Total number of episodes in this podcast.

### TypeaheadResponse
* TypeaheadResponse `object`
  * genres `array`: Genre suggestions. It'll show up when the **show_genres** parameter is *1*.
    * items [Genre](#genre)
  * podcasts `array`: Podcast suggestions. It'll show up when the **show_podcasts** parameter is 1.
    * items [PodcastTypeaheadResult](#podcasttypeaheadresult)
  * terms **required** `array`: Search term suggestions.
    * items `string`

### WebsiteField
* WebsiteField `string`: Website url of this podcast.

### iTunesIdField
* iTunesIdField `integer`: iTunes id for this podcast.


