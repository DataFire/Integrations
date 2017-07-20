# @datafire/soundcloud

Client library for SoundCloud

## Installation and Usage
```bash
npm install --save datafire @datafire/soundcloud
```

```js
let datafire = require('datafire');
let soundcloud = require('@datafire/soundcloud').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    soundcloud: account,
  }
})


soundcloud.tracks.json.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Access, host, upload, and comment on audio.

## Actions
### tracks.json.get
Returns a collection of tracks


```js
soundcloud.tracks.json.get({
  "consumer_key": null,
  "title": "",
  "asset_data": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* title (string) **required**
* asset_data (string) **required**

### tracks.json.post
Uploads a track


```js
soundcloud.tracks.json.post({
  "title": "",
  "asset_data": ""
}, context)
```

#### Parameters
* title (string) **required**
* asset_data (string) **required**

### tracks.track_id.json.get
Returns a track by track id


```js
soundcloud.tracks.track_id.json.get({
  "consumer_key": null,
  "track_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* track_id (string) **required**

### tracks.track_id.json.put
Updates a given track


```js
soundcloud.tracks.track_id.json.put({
  "track_id": ""
}, context)
```

#### Parameters
* track_id (string) **required**

### tracks.track_id.json.delete
Deletes a given track


```js
soundcloud.tracks.track_id.json.delete({
  "track_id": ""
}, context)
```

#### Parameters
* track_id (string) **required**

### tracks.track_id.comments.json.get
Returns comments of a track by track id


```js
soundcloud.tracks.track_id.comments.json.get({
  "consumer_key": null,
  "track_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* track_id (string) **required**

### tracks.track_id.comments.json.post
Posts a comments to a track by track id


```js
soundcloud.tracks.track_id.comments.json.post({
  "track_id": ""
}, context)
```

#### Parameters
* track_id (string) **required**

### tracks.track_id.permissions.json.get
Returns all users with permission for a track by track id


```js
soundcloud.tracks.track_id.permissions.json.get({
  "consumer_key": null,
  "track_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* track_id (string) **required**

### tracks.track_id.permissions.json.put
Updates the list of permitted users for a track by track id


```js
soundcloud.tracks.track_id.permissions.json.put({
  "track_id": ""
}, context)
```

#### Parameters
* track_id (string) **required**

### tracks.track_id.secret_token.json.get
Returns the secret token for a track by track id. This resource can only be used by the track owner.


```js
soundcloud.tracks.track_id.secret_token.json.get({
  "track_id": ""
}, context)
```

#### Parameters
* track_id (string) **required**

### tracks.track_id.secret_token.json.put
Resets the secret token for a track by track id. The secret token can not be specified but will be randomly chosen on
          the server and returned. This resource can only be used by the track owner.


```js
soundcloud.tracks.track_id.secret_token.json.put({
  "track_id": ""
}, context)
```

#### Parameters
* track_id (string) **required**

### users.json.get
Returns a collection of users


```js
soundcloud.users.json.get({
  "consumer_key": null
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* q (string)

### users.user_id.json.get
Returns a user by user id


```js
soundcloud.users.user_id.json.get({
  "consumer_key": null,
  "user_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* user_id (string) **required**

### users.user_id.tracks.json.get
Returns a collection of tracks uploaded by user id


```js
soundcloud.users.user_id.tracks.json.get({
  "consumer_key": null,
  "user_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* user_id (string) **required**

### users.user_id.comments.json.get
Returns a collection of comments made by user id


```js
soundcloud.users.user_id.comments.json.get({
  "consumer_key": null,
  "user_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* user_id (string) **required**

### users.user_id.followings.json.get
Returns a collection of users the user with user id is following


```js
soundcloud.users.user_id.followings.json.get({
  "consumer_key": null,
  "user_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* user_id (string) **required**

### users.user_id.followings.contact_id.json.get
Checks if the user with the id contact_id is in the givens user's list of contacts.


```js
soundcloud.users.user_id.followings.contact_id.json.get({
  "consumer_key": null,
  "user_id": "",
  "contact_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* user_id (string) **required**
* contact_id (string) **required**

### users.user_id.followings.contact_id.json.put
Adds the user with the id contact_id to the givens user's list of contacts.


```js
soundcloud.users.user_id.followings.contact_id.json.put({
  "user_id": "",
  "contact_id": ""
}, context)
```

#### Parameters
* user_id (string) **required**
* contact_id (string) **required**

### users.user_id.followings.contact_id.json.delete
Removes the user with the id contact_id from the givens user's list of contacts.


```js
soundcloud.users.user_id.followings.contact_id.json.delete({
  "user_id": "",
  "contact_id": ""
}, context)
```

#### Parameters
* user_id (string) **required**
* contact_id (string) **required**

### users.user_id.followers.json.get
Returns a collection of users who follow the user with user id


```js
soundcloud.users.user_id.followers.json.get({
  "consumer_key": null,
  "user_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* user_id (string) **required**

### users.user_id.followers.contact_id.json.get
Checks if the user with contact_id is a follower of the given user.


```js
soundcloud.users.user_id.followers.contact_id.json.get({
  "consumer_key": null,
  "user_id": "",
  "contact_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* user_id (string) **required**
* contact_id (string) **required**

### users.user_id.favorites.json.get
Returns a collection of tracks favorited by the user with user id


```js
soundcloud.users.user_id.favorites.json.get({
  "consumer_key": null,
  "user_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* user_id (string) **required**

### users.user_id.favorites.track_id.json.put
Adds the given track to the given user's list of favorites.


```js
soundcloud.users.user_id.favorites.track_id.json.put({
  "user_id": "",
  "track_id": ""
}, context)
```

#### Parameters
* user_id (string) **required**
* track_id (string) **required**

### users.user_id.favorites.track_id.json.delete
Deletes the given track from the given user's list of favorites.


```js
soundcloud.users.user_id.favorites.track_id.json.delete({
  "user_id": "",
  "track_id": ""
}, context)
```

#### Parameters
* user_id (string) **required**
* track_id (string) **required**

### users.user_id.groups.json.get
Returns a collection of groups joined by user with user id


```js
soundcloud.users.user_id.groups.json.get({
  "consumer_key": null,
  "user_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* user_id (string) **required**

### users.user_id.playlists.json.get
Returns a collection of playlists created by user with user id


```js
soundcloud.users.user_id.playlists.json.get({
  "consumer_key": null,
  "user_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* user_id (string) **required**

### me.json.get
Returns the logged-in user


```js
soundcloud.me.json.get(null, context)
```


### me.json.put
Updates the logged-in user


```js
soundcloud.me.json.put(null, context)
```


### me.tracks.json.get
Returns a collection of tracks uploaded by logged-in user


```js
soundcloud.me.tracks.json.get(null, context)
```


### me.comments.json.get
Returns a collection of comments made by logged-in user


```js
soundcloud.me.comments.json.get(null, context)
```


### me.followings.json.get
Returns a collection of users the logged-in user is following


```js
soundcloud.me.followings.json.get(null, context)
```


### me.followings.contact_id.json.get
Checks if the user with the id contact_id is in the logged-in user's list of contacts.


```js
soundcloud.me.followings.contact_id.json.get({
  "contact_id": ""
}, context)
```

#### Parameters
* contact_id (string) **required**

### me.followings.contact_id.json.put
Adds the user with the id contact_id to the logged-in user's list of contacts.


```js
soundcloud.me.followings.contact_id.json.put({
  "contact_id": ""
}, context)
```

#### Parameters
* contact_id (string) **required**

### me.followings.contact_id.json.delete
Deletes the user with the id contact_id from the logged-in user's list of contacts.


```js
soundcloud.me.followings.contact_id.json.delete({
  "contact_id": ""
}, context)
```

#### Parameters
* contact_id (string) **required**

### me.followers.json.get
Returns a collection of users who follow the logged-in user


```js
soundcloud.me.followers.json.get(null, context)
```


### me.followers.contact_id.json.get
Checks if the user with the id contact_id is a follower of the logged-in user


```js
soundcloud.me.followers.contact_id.json.get({
  "contact_id": ""
}, context)
```

#### Parameters
* contact_id (string) **required**

### me.favorites.json.get
Returns a collection of tracks favorited by the logged-in user


```js
soundcloud.me.favorites.json.get(null, context)
```


### me.favorites.track_id.json.put
Adds the given track to the logged-in user's list of favorites.


```js
soundcloud.me.favorites.track_id.json.put({
  "track_id": ""
}, context)
```

#### Parameters
* track_id (string) **required**

### me.favorites.track_id.json.delete
Deletes the given track from the logged-in user's list of favorites.


```js
soundcloud.me.favorites.track_id.json.delete({
  "track_id": ""
}, context)
```

#### Parameters
* track_id (string) **required**

### me.groups.json.get
Returns a collection of groups joined by logged-in user


```js
soundcloud.me.groups.json.get(null, context)
```


### me.playlists.json.get
Returns a collection of playlists created by the logged-in user


```js
soundcloud.me.playlists.json.get(null, context)
```


### playlists.json.get
Returns a collection of playlists


```js
soundcloud.playlists.json.get({
  "consumer_key": null
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* q (string)
* filter (string)

### playlists.playlist_id.json.get
Returns a playlist by playlist id


```js
soundcloud.playlists.playlist_id.json.get({
  "consumer_key": null,
  "playlist_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* playlist_id (string) **required**

### groups.json.get
Returns a collection of groups


```js
soundcloud.groups.json.get({
  "consumer_key": null
}, context)
```

#### Parameters
* consumer_key (undefined) **required**

### groups.group_id.json.get
Returns a group by group id


```js
soundcloud.groups.group_id.json.get({
  "consumer_key": null,
  "playlist_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* playlist_id (string) **required**

### groups.group_id.users.json.get
Returns a combined collection of moderators, members and contributors of the group with group id


```js
soundcloud.groups.group_id.users.json.get({
  "consumer_key": null,
  "playlist_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* playlist_id (string) **required**

### groups.group_id.moderators.json.get
Returns a collection of moderators of the group with group id


```js
soundcloud.groups.group_id.moderators.json.get({
  "consumer_key": null,
  "playlist_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* playlist_id (string) **required**

### groups.group_id.members.json.get
Returns a collection of members of the group with group id


```js
soundcloud.groups.group_id.members.json.get({
  "consumer_key": null,
  "playlist_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* playlist_id (string) **required**

### groups.group_id.contributors.json.get
Returns a collection of contributors of the group with group id


```js
soundcloud.groups.group_id.contributors.json.get({
  "consumer_key": null,
  "playlist_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* playlist_id (string) **required**

### groups.group_id.tracks.json.get
Returns a collection of tracks contributed to the group with group id


```js
soundcloud.groups.group_id.tracks.json.get({
  "consumer_key": null,
  "playlist_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* playlist_id (string) **required**

### comments.comment_id.json.get
Returns a comment by comment id


```js
soundcloud.comments.comment_id.json.get({
  "consumer_key": null,
  "playlist_id": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* playlist_id (string) **required**

### resolve.json.get
Translates a website URI into an API URI


```js
soundcloud.resolve.json.get({
  "consumer_key": null,
  "url": ""
}, context)
```

#### Parameters
* consumer_key (undefined) **required**
* url (string) **required**

