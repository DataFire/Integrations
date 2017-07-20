# @datafire/bufferapp

Client library for Bufferapp

## Installation and Usage
```bash
npm install --save datafire @datafire/bufferapp
```

```js
let datafire = require('datafire');
let bufferapp = require('@datafire/bufferapp').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    bufferapp: account,
  }
})


bufferapp.info.configuration.json.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Social media management for marketers and agencies

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
bufferapp.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
bufferapp.oauthRefresh(null, context)
```


### info.configuration.json.get
Returns an object with the current configuration that Buffer is using, including supported services, their icons and the varying limits of character and schedules.


```js
bufferapp.info.configuration.json.get(null, context)
```


### links.shares.json.get
Returns an object with a the numbers of shares a link has had using Buffer.


```js
bufferapp.links.shares.json.get({
  "url": ""
}, context)
```

#### Parameters
* url (string) **required** - URL-encoded URL of the page for which the number of shares is requested.

### profiles.id.schedules.update.json.post
"Set the posting schedules for the specified social media profile.



```js
bufferapp.profiles.id.schedules.update.json.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### profiles.id.schedules.json.get
Returns details of the posting schedules associated with a social media profile.


```js
bufferapp.profiles.id.schedules.json.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### profiles.id.updates.pending.json.get
"Returns an array of updates that are currently in the buffer for an individual social media profile.



```js
bufferapp.profiles.id.updates.pending.json.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* page (integer) - Specifies the page of status updates to receive. If not specified the first page of results will be returned.
* count (integer) - Specifies the number of status updates to receive. If provided, must be between 1 and 100.
* since (string) - Specifies a unix timestamp which only status updates created after this time will be retrieved.
* utc (boolean) - If utc is set times will be returned relative to UTC rather than the users associated timezone.

### profiles.id.updates.reorder.json.post
Edit the order at which statuses for the specified social media profile will be sent out of the buffer.



```js
bufferapp.profiles.id.updates.reorder.json.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### profiles.id.updates.sent.json.get
Returns an array of updates that have been sent from the buffer for an individual social media profile.



```js
bufferapp.profiles.id.updates.sent.json.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**
* page (integer) - Specifies the page of status updates to receive. If not specified the first page of results will be returned.
* count (integer) - Specifies the number of status updates to receive. If provided, must be between 1 and 100.
* since (string) - Specifies a unix timestamp which only status updates created after this time will be retrieved.
* utc (boolean) - If utc is set times will be returned relative to UTC rather than the users associated timezone.

### profiles.id.updates.shuffle.json.post
Randomize the order at which statuses for the specified social media profile will be sent out of the buffer.



```js
bufferapp.profiles.id.updates.shuffle.json.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### profiles.id.json.get
Returns details of the single specified social media profile.


```js
bufferapp.profiles.id.json.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### profiles.json.get
Returns an array of social media profiles connected to a users account.


```js
bufferapp.profiles.json.get(null, context)
```


### updates.create.json.post
Create one or more new status updates.



```js
bufferapp.updates.create.json.post(null, context)
```


### updates.id.destroy.json.post
Permanently delete an existing status update.


```js
bufferapp.updates.id.destroy.json.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### updates.id.interactions.json.get
Returns the detailed information on individual interactions with the social media update such as favorites, retweets and likes.



```js
bufferapp.updates.id.interactions.json.get({
  "id": "",
  "event": ""
}, context)
```

#### Parameters
* id (string) **required**
* event (string) **required** - Specifies a type of event to be retrieved, for example "retweet", "like", "comment", "mention" or "reshare". They can also be plural (e.g., "reshares"). Plurality has no effect other than visual semantics. See /info/configuration for more information on supported interaction events.
* page (integer) - Specifies the page of status updates to receive. If not specified the first page of results will be returned.
* count (integer) - Specifies the number of status updates to receive. If provided, must be between 1 and 100.

### updates.id.move_to_top.json.post
Move an existing status update to the top of the queue and recalculate times for all updates in the queue. Returns the update with its new posting time.


```js
bufferapp.updates.id.move_to_top.json.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### updates.id.share.json.post
Immediately shares a single pending update and recalculates times for updates remaining in the queue.


```js
bufferapp.updates.id.share.json.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### updates.id.update.json.post
Edit an existing, individual status update.



```js
bufferapp.updates.id.update.json.post({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### updates.id.json.get
Returns a single social media update.


```js
bufferapp.updates.id.json.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### user.json.get
Returns a single user.


```js
bufferapp.user.json.get(null, context)
```


