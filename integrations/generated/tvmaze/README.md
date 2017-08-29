# @datafire/tvmaze

Client library for TVmaze user

## Installation and Usage
```bash
npm install --save datafire @datafire/tvmaze
```

```js
let datafire = require('datafire');
let tvmaze = require('@datafire/tvmaze').create({
  username: "",
  password: "",
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

#### Parameters
* show_id (integer) - Only return episodes from this specific show

### user.episodes.episode_id.delete
Unmark an episode


```js
tvmaze.user.episodes.episode_id.delete({
  "episode_id": 0
}, context)
```

#### Parameters
* episode_id (integer) **required**

### user.episodes.episode_id.get
Check if an episode is marked


```js
tvmaze.user.episodes.episode_id.get({
  "episode_id": 0
}, context)
```

#### Parameters
* episode_id (integer) **required**

### user.episodes.episode_id.put
Set `marked_at` to `NULL` or leave it out to use the current time.


```js
tvmaze.user.episodes.episode_id.put({
  "episode_id": 0
}, context)
```

#### Parameters
* body (object)
* episode_id (integer) **required**

### user.follows.networks.get
List the followed networks


```js
tvmaze.user.follows.networks.get({}, context)
```

#### Parameters
* embed (string) - Embed full network info

### user.follows.networks.network_id.delete
Unfollow a network


```js
tvmaze.user.follows.networks.network_id.delete({
  "network_id": 0
}, context)
```

#### Parameters
* network_id (integer) **required**

### user.follows.networks.network_id.get
Check if a network is followed


```js
tvmaze.user.follows.networks.network_id.get({
  "network_id": 0
}, context)
```

#### Parameters
* network_id (integer) **required**

### user.follows.networks.network_id.put
Follow a network


```js
tvmaze.user.follows.networks.network_id.put({
  "network_id": 0
}, context)
```

#### Parameters
* network_id (integer) **required**

### user.follows.people.get
List the followed people


```js
tvmaze.user.follows.people.get({}, context)
```

#### Parameters
* embed (string) - Embed full person info

### user.follows.people.person_id.delete
Unfollow a person


```js
tvmaze.user.follows.people.person_id.delete({
  "person_id": 0
}, context)
```

#### Parameters
* person_id (integer) **required**

### user.follows.people.person_id.get
Check if a person is followed


```js
tvmaze.user.follows.people.person_id.get({
  "person_id": 0
}, context)
```

#### Parameters
* person_id (integer) **required**

### user.follows.people.person_id.put
Follow a person


```js
tvmaze.user.follows.people.person_id.put({
  "person_id": 0
}, context)
```

#### Parameters
* person_id (integer) **required**

### user.follows.shows.get
List the followed shows


```js
tvmaze.user.follows.shows.get({}, context)
```

#### Parameters
* embed (string) - Embed full show info

### user.follows.shows.show_id.delete
Unfollow a show


```js
tvmaze.user.follows.shows.show_id.delete({
  "show_id": 0
}, context)
```

#### Parameters
* show_id (integer) **required**

### user.follows.shows.show_id.get
Check if a show is followed


```js
tvmaze.user.follows.shows.show_id.get({
  "show_id": 0
}, context)
```

#### Parameters
* show_id (integer) **required**

### user.follows.shows.show_id.put
Follow a show


```js
tvmaze.user.follows.shows.show_id.put({
  "show_id": 0
}, context)
```

#### Parameters
* show_id (integer) **required**

### user.follows.webchannels.get
List the followed webchannels


```js
tvmaze.user.follows.webchannels.get({}, context)
```

#### Parameters
* embed (string) - Embed full webchannel info

### user.follows.webchannels.webchannel_id.delete
Unfollow a webchannel


```js
tvmaze.user.follows.webchannels.webchannel_id.delete({
  "webchannel_id": 0
}, context)
```

#### Parameters
* webchannel_id (integer) **required**

### user.follows.webchannels.webchannel_id.get
Check if a webchannel is followed


```js
tvmaze.user.follows.webchannels.webchannel_id.get({
  "webchannel_id": 0
}, context)
```

#### Parameters
* webchannel_id (integer) **required**

### user.follows.webchannels.webchannel_id.put
Follow a webchannel


```js
tvmaze.user.follows.webchannels.webchannel_id.put({
  "webchannel_id": 0
}, context)
```

#### Parameters
* webchannel_id (integer) **required**

### user.votes.episodes.get
List the episodes voted for


```js
tvmaze.user.votes.episodes.get(null, context)
```


### user.votes.episodes.episode_id.delete
Remove an episode vote


```js
tvmaze.user.votes.episodes.episode_id.delete({
  "episode_id": 0
}, context)
```

#### Parameters
* episode_id (integer) **required**

### user.votes.episodes.episode_id.get
Check if an episode is voted for


```js
tvmaze.user.votes.episodes.episode_id.get({
  "episode_id": 0
}, context)
```

#### Parameters
* episode_id (integer) **required**

### user.votes.episodes.episode_id.put
Vote for an episode


```js
tvmaze.user.votes.episodes.episode_id.put({
  "episode_id": 0
}, context)
```

#### Parameters
* body (object)
* episode_id (integer) **required**

### user.votes.shows.get
List the shows voted for


```js
tvmaze.user.votes.shows.get({}, context)
```

#### Parameters
* embed (string) - Embed full show info

### user.votes.shows.show_id.delete
Remove a show vote


```js
tvmaze.user.votes.shows.show_id.delete({
  "show_id": 0
}, context)
```

#### Parameters
* show_id (integer) **required**

### user.votes.shows.show_id.get
Check if a show is voted for


```js
tvmaze.user.votes.shows.show_id.get({
  "show_id": 0
}, context)
```

#### Parameters
* show_id (integer) **required**

### user.votes.shows.show_id.put
Set `voted_at` to `NULL` or leave it out to use the current time.


```js
tvmaze.user.votes.shows.show_id.put({
  "show_id": 0
}, context)
```

#### Parameters
* body (object)
* show_id (integer) **required**

