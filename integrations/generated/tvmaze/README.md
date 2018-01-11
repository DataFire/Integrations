# @datafire/tvmaze

Client library for TVmaze user

## Installation and Usage
```bash
npm install --save @datafire/tvmaze
```
```js
let tvmaze = require('@datafire/tvmaze').create({
  username: "",
  password: ""
});

tvmaze.user.votes.shows.get({}).then(data => {
  console.log(data);
})
```

## Description

Access to the user API is only possible for users with a [premium](http://www.tvmaze.com/premium) account. A user can only access their own user data.

Authentication uses HTTP Basic. Use the TVmaze username as authentication username, and the TVmaze API key as authentication password. Your API key can be found on your [dashboard](http://www.tvmaze.com/dashboard). To try out these API calls from this page, click the "Authorize" button on top and input your credentials.


## Actions

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

### EpisodeVote
* EpisodeVote `object`
  * episode_id `integer`
  * vote `integer`: The vote number
  * voted_at `integer`: Epoch timestamp for when the user voted for the episode

### MarkedEpisode
* MarkedEpisode `object`
  * episode_id `integer`
  * marked_at `integer`: Epoch timestamp for when the user watched the episode, or 0 for unknown.
  * type `integer` (values: 0, 1, 2): 0 for watched, 1 for acquired, 2 for skipped

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

### Webchannel
* Webchannel `object`

### WebchannelFollow
* WebchannelFollow `object`
  * _embedded `object`
    * webchannel [Webchannel](#webchannel)
  * webchannel_id `integer`


