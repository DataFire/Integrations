# @datafire/tvmaze

Client library for TVmaze user API

## Installation and Usage
```bash
npm install --save @datafire/tvmaze
```
```js
let tvmaze = require('@datafire/tvmaze').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Access to the user API is only possible for users with a [premium](http://www.tvmaze.com/premium) account. A user can only access their own user data.

Authentication uses HTTP Basic. Use the TVmaze username as authentication username, and the TVmaze API key as authentication password. Your API key can be found on your [dashboard](http://www.tvmaze.com/dashboard). To try out these API calls from this page, click the "Authorize" button on top and input your credentials.


## Actions

### auth.poll.post
Using the token acquired in the `start` endpoint, you can start polling this endpoint once every 10 seconds.

When the user has confirmed the authentication request on their end, this endpoint will return the user's API key that you can use in subsequent authenticated endpoints. Note that it'll do so only once, subsequent requests after the initial 200 response will return a 404.

For as long as the user did not yet confirm their authentication request, this endpoint will return a 403.



```js
tvmaze.auth.poll.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * token `string`

#### Output
* output `object`
  * apikey `string`: The user's API key
  * username `string`: The user's username

### auth.start.post
If you want to access the TVmaze API on behalf of a user without querying them for their password, use this endpoint.

To get started, send a POST request containing the user's email address. The response will contain a `token`, which you can use as input to the `poll` endpoint. The user will receive an email prompting them to confirm the authentication request.

Alternatively, if you expect the user to be logged in to TVmaze on the device they are currently interacting with, you can set `email_confirmation` to false and redirect them to the `confirm_url` URL. If they are logged in to TVmaze, they will be able to confirm the authentication request instantly.



```js
tvmaze.auth.start.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * email `string`: The user's email address
    * email_confirmation `boolean`: Whether to email the user a confirmation link

#### Output
* output `object`
  * confirm_url `string`: URL where the user can confirm the authentication request
  * token `string`: Authentication token to use in the `poll` endpoint

### auth.validate.get
If the credentials supplied as HTTP basic are valid, the user's level of premium - if any - is returned.


```js
tvmaze.auth.validate.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * premium `integer`: The user's premium level; 1 for Bronze, 2 for Silver, 3 for Gold; or 0 for none

### scrobble.episodes.post
This endpoint can be used by all users, even without premium


```js
tvmaze.scrobble.episodes.post({}, context)
```

#### Input
* input `object`
  * body `array`
    * items `object`
      * episode_id `integer`: The TVmaze episode ID
      * marked_at `integer`: Epoch timestamp for when the user watched the episode, or 0 for unknown.
      * type [MarkType](#marktype)

#### Output
* output [BulkResponse](#bulkresponse)

### scrobble.episodes.episode_id.put
This endpoint can be used by all users, even without premium


```js
tvmaze.scrobble.episodes.episode_id.put({
  "episode_id": 0
}, context)
```

#### Input
* input `object`
  * body [MarkedEpisode](#markedepisode)
  * episode_id **required** `integer`

#### Output
* output [MarkedEpisode](#markedepisode)

### scrobble.shows.post
To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.

This endpoint can be used by all users, even without premium.



```js
tvmaze.scrobble.shows.post({}, context)
```

#### Input
* input `object`
  * tvmaze_id `integer`: The show's TVmaze ID
  * thetvdb_id `integer`: The show's TheTVDB ID
  * imdb_id `integer`: The show's IMDB ID
  * body `array`
    * items `object`
      * airdate `string`: The episode airdate
      * episode `integer`: The episode number
      * marked_at `integer`: Epoch timestamp for when the user watched the episode, or 0 for unknown.
      * season `integer`: The season number
      * type [MarkType](#marktype)

#### Output
* output [BulkResponse](#bulkresponse)

### scrobble.shows.show_id.get
This endpoint can be used by all users, even without premium


```js
tvmaze.scrobble.shows.show_id.get({
  "show_id": 0
}, context)
```

#### Input
* input `object`
  * show_id **required** `integer`: ID of the target show
  * embed `string` (values: episode): Embed full episode info

#### Output
* output `array`
  * items [MarkedEpisode](#markedepisode)

### user.episodes.get
List the marked episodes


```js
tvmaze.user.episodes.get({}, context)
```

#### Input
* input `object`
  * show_id `integer`: Only return episodes from this specific show

#### Output
* output `array`
  * items [MarkedEpisode](#markedepisode)

### user.episodes.episode_id.delete
Unmark an episode


```js
tvmaze.user.episodes.episode_id.delete({
  "episode_id": 0
}, context)
```

#### Input
* input `object`
  * episode_id **required** `integer`

#### Output
*Output schema unknown*

### user.episodes.episode_id.get
Check if an episode is marked


```js
tvmaze.user.episodes.episode_id.get({
  "episode_id": 0
}, context)
```

#### Input
* input `object`
  * episode_id **required** `integer`

#### Output
* output [MarkedEpisode](#markedepisode)

### user.episodes.episode_id.put
Set `marked_at` to `NULL` or leave it out to use the current time.


```js
tvmaze.user.episodes.episode_id.put({
  "episode_id": 0
}, context)
```

#### Input
* input `object`
  * body [MarkedEpisode](#markedepisode)
  * episode_id **required** `integer`

#### Output
* output [MarkedEpisode](#markedepisode)

### user.follows.networks.get
List the followed networks


```js
tvmaze.user.follows.networks.get({}, context)
```

#### Input
* input `object`
  * embed `string` (values: network): Embed full network info

#### Output
* output `array`
  * items [NetworkFollow](#networkfollow)

### user.follows.networks.network_id.delete
Unfollow a network


```js
tvmaze.user.follows.networks.network_id.delete({
  "network_id": 0
}, context)
```

#### Input
* input `object`
  * network_id **required** `integer`

#### Output
*Output schema unknown*

### user.follows.networks.network_id.get
Check if a network is followed


```js
tvmaze.user.follows.networks.network_id.get({
  "network_id": 0
}, context)
```

#### Input
* input `object`
  * network_id **required** `integer`

#### Output
* output [NetworkFollow](#networkfollow)

### user.follows.networks.network_id.put
Follow a network


```js
tvmaze.user.follows.networks.network_id.put({
  "network_id": 0
}, context)
```

#### Input
* input `object`
  * network_id **required** `integer`

#### Output
* output [NetworkFollow](#networkfollow)

### user.follows.people.get
List the followed people


```js
tvmaze.user.follows.people.get({}, context)
```

#### Input
* input `object`
  * embed `string` (values: person): Embed full person info

#### Output
* output `array`
  * items [PersonFollow](#personfollow)

### user.follows.people.person_id.delete
Unfollow a person


```js
tvmaze.user.follows.people.person_id.delete({
  "person_id": 0
}, context)
```

#### Input
* input `object`
  * person_id **required** `integer`

#### Output
*Output schema unknown*

### user.follows.people.person_id.get
Check if a person is followed


```js
tvmaze.user.follows.people.person_id.get({
  "person_id": 0
}, context)
```

#### Input
* input `object`
  * person_id **required** `integer`

#### Output
* output [PersonFollow](#personfollow)

### user.follows.people.person_id.put
Follow a person


```js
tvmaze.user.follows.people.person_id.put({
  "person_id": 0
}, context)
```

#### Input
* input `object`
  * person_id **required** `integer`

#### Output
* output [PersonFollow](#personfollow)

### user.follows.shows.get
List the followed shows


```js
tvmaze.user.follows.shows.get({}, context)
```

#### Input
* input `object`
  * embed `string` (values: show): Embed full show info

#### Output
* output `array`
  * items [ShowFollow](#showfollow)

### user.follows.shows.show_id.delete
Unfollow a show


```js
tvmaze.user.follows.shows.show_id.delete({
  "show_id": 0
}, context)
```

#### Input
* input `object`
  * show_id **required** `integer`

#### Output
*Output schema unknown*

### user.follows.shows.show_id.get
Check if a show is followed


```js
tvmaze.user.follows.shows.show_id.get({
  "show_id": 0
}, context)
```

#### Input
* input `object`
  * show_id **required** `integer`

#### Output
* output [ShowFollow](#showfollow)

### user.follows.shows.show_id.put
Follow a show


```js
tvmaze.user.follows.shows.show_id.put({
  "show_id": 0
}, context)
```

#### Input
* input `object`
  * show_id **required** `integer`

#### Output
* output [ShowFollow](#showfollow)

### user.follows.webchannels.get
List the followed webchannels


```js
tvmaze.user.follows.webchannels.get({}, context)
```

#### Input
* input `object`
  * embed `string` (values: webchannel): Embed full webchannel info

#### Output
* output `array`
  * items [WebchannelFollow](#webchannelfollow)

### user.follows.webchannels.webchannel_id.delete
Unfollow a webchannel


```js
tvmaze.user.follows.webchannels.webchannel_id.delete({
  "webchannel_id": 0
}, context)
```

#### Input
* input `object`
  * webchannel_id **required** `integer`

#### Output
*Output schema unknown*

### user.follows.webchannels.webchannel_id.get
Check if a webchannel is followed


```js
tvmaze.user.follows.webchannels.webchannel_id.get({
  "webchannel_id": 0
}, context)
```

#### Input
* input `object`
  * webchannel_id **required** `integer`

#### Output
* output [WebchannelFollow](#webchannelfollow)

### user.follows.webchannels.webchannel_id.put
Follow a webchannel


```js
tvmaze.user.follows.webchannels.webchannel_id.put({
  "webchannel_id": 0
}, context)
```

#### Input
* input `object`
  * webchannel_id **required** `integer`

#### Output
* output [WebchannelFollow](#webchannelfollow)

### user.tags.get
List all tags


```js
tvmaze.user.tags.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Tag](#tag)

### user.tags.post
Create a new tag


```js
tvmaze.user.tags.post({}, context)
```

#### Input
* input `object`
  * body [Tag](#tag)

#### Output
* output [Tag](#tag)

### user.tags.tag_id.delete
Delete a specific tag


```js
tvmaze.user.tags.tag_id.delete({
  "tag_id": 0
}, context)
```

#### Input
* input `object`
  * tag_id **required** `integer`

#### Output
*Output schema unknown*

### user.tags.tag_id.patch
Update a specific tag


```js
tvmaze.user.tags.tag_id.patch({
  "tag_id": 0
}, context)
```

#### Input
* input `object`
  * tag_id **required** `integer`
  * body [Tag](#tag)

#### Output
* output [Tag](#tag)

### user.tags.tag_id.shows.get
List all shows under this tag


```js
tvmaze.user.tags.tag_id.shows.get({
  "tag_id": 0
}, context)
```

#### Input
* input `object`
  * tag_id **required** `integer`
  * embed `string` (values: show): Embed full show info

#### Output
* output `array`
  * items [TagInstance](#taginstance)

### user.tags.tag_id.shows.show_id.delete
Untag a show


```js
tvmaze.user.tags.tag_id.shows.show_id.delete({
  "tag_id": 0,
  "show_id": 0
}, context)
```

#### Input
* input `object`
  * tag_id **required** `integer`
  * show_id **required** `integer`

#### Output
*Output schema unknown*

### user.tags.tag_id.shows.show_id.put
Tag a show


```js
tvmaze.user.tags.tag_id.shows.show_id.put({
  "tag_id": 0,
  "show_id": 0
}, context)
```

#### Input
* input `object`
  * tag_id **required** `integer`
  * show_id **required** `integer`

#### Output
* output [TagInstance](#taginstance)

### user.votes.episodes.get
List the episodes voted for


```js
tvmaze.user.votes.episodes.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [EpisodeVote](#episodevote)

### user.votes.episodes.episode_id.delete
Remove an episode vote


```js
tvmaze.user.votes.episodes.episode_id.delete({
  "episode_id": 0
}, context)
```

#### Input
* input `object`
  * episode_id **required** `integer`

#### Output
*Output schema unknown*

### user.votes.episodes.episode_id.get
Check if an episode is voted for


```js
tvmaze.user.votes.episodes.episode_id.get({
  "episode_id": 0
}, context)
```

#### Input
* input `object`
  * episode_id **required** `integer`

#### Output
* output [EpisodeVote](#episodevote)

### user.votes.episodes.episode_id.put
Vote for an episode


```js
tvmaze.user.votes.episodes.episode_id.put({
  "episode_id": 0
}, context)
```

#### Input
* input `object`
  * body [EpisodeVote](#episodevote)
  * episode_id **required** `integer`

#### Output
* output [EpisodeVote](#episodevote)

### user.votes.shows.get
List the shows voted for


```js
tvmaze.user.votes.shows.get({}, context)
```

#### Input
* input `object`
  * embed `string` (values: show): Embed full show info

#### Output
* output `array`
  * items [ShowVote](#showvote)

### user.votes.shows.show_id.delete
Remove a show vote


```js
tvmaze.user.votes.shows.show_id.delete({
  "show_id": 0
}, context)
```

#### Input
* input `object`
  * show_id **required** `integer`

#### Output
*Output schema unknown*

### user.votes.shows.show_id.get
Check if a show is voted for


```js
tvmaze.user.votes.shows.show_id.get({
  "show_id": 0
}, context)
```

#### Input
* input `object`
  * show_id **required** `integer`

#### Output
* output [ShowVote](#showvote)

### user.votes.shows.show_id.put
Set `voted_at` to `NULL` or leave it out to use the current time.


```js
tvmaze.user.votes.shows.show_id.put({
  "show_id": 0
}, context)
```

#### Input
* input `object`
  * body [ShowVote](#showvote)
  * show_id **required** `integer`

#### Output
* output [ShowVote](#showvote)



## Definitions

### BulkResponse
* BulkResponse `array`: A list of responses to your bulk input, ordered the same as your input
  * items `object`
    * code `integer`: The HTTP code that corresponds to this item
    * errors `object`: A list of validation errors for this item (in case of error)
    * input `object`: The request data that belonged to this response (in case of error)
    * message `string`: A human-readable error message (in case of error)
    * result `object`: The resulting created/updated object (in case of success)

### Episode
* Episode `object`

### EpisodeVote
* EpisodeVote `object`
  * episode_id `integer`
  * vote `integer`: The vote number
  * voted_at `integer`: Epoch timestamp for when the user voted for the episode

### MarkType


### MarkedEpisode
* MarkedEpisode `object`
  * _embedded `object`
    * episode [Episode](#episode)
  * episode_id `integer`
  * marked_at `integer`: Epoch timestamp for when the user watched the episode, or 0 for unknown.
  * type [MarkType](#marktype)

### Network
* Network `object`

### NetworkFollow
* NetworkFollow `object`
  * _embedded `object`
    * network [Network](#network)
  * network_id `integer`

### Person
* Person `object`

### PersonFollow
* PersonFollow `object`
  * _embedded `object`
    * person [Person](#person)
  * person_id `integer`

### Show
* Show `object`

### ShowFollow
* ShowFollow `object`
  * _embedded `object`
    * show [Show](#show)
  * show_id `integer`

### ShowVote
* ShowVote `object`
  * show_id `integer`
  * vote `integer`: The vote number
  * voted_at `integer`: Epoch timestamp for when the user voted for the episode

### Tag
* Tag `object`
  * id `integer`
  * name `string`

### TagInstance
* TagInstance `object`
  * _embedded `object`
    * show [Show](#show)
  * show_id `integer`

### Webchannel
* Webchannel `object`

### WebchannelFollow
* WebchannelFollow `object`
  * _embedded `object`
    * webchannel [Webchannel](#webchannel)
  * webchannel_id `integer`


