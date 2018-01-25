# @datafire/bufferapp

Client library for Bufferapp

## Installation and Usage
```bash
npm install --save @datafire/bufferapp
```
```js
let bufferapp = require('@datafire/bufferapp').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

bufferapp.info.configuration.json.get(null).then(data => {
  console.log(data);
});
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

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
bufferapp.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### info.configuration.json.get
Returns an object with the current configuration that Buffer is using, including supported services, their icons and the varying limits of character and schedules.


```js
bufferapp.info.configuration.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [configuration](#configuration)

### links.shares.json.get
Returns an object with a the numbers of shares a link has had using Buffer.


```js
bufferapp.links.shares.json.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: URL-encoded URL of the page for which the number of shares is requested.

#### Output
* output [shares](#shares)

### profiles.id.schedules.update.json.post
"Set the posting schedules for the specified social media profile.



```js
bufferapp.profiles.id.schedules.update.json.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [success](#success)

### profiles.id.schedules.json.get
Returns details of the posting schedules associated with a social media profile.


```js
bufferapp.profiles.id.schedules.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [schedules](#schedules)

### profiles.id.updates.pending.json.get
"Returns an array of updates that are currently in the buffer for an individual social media profile.



```js
bufferapp.profiles.id.updates.pending.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * page `integer`: Specifies the page of status updates to receive. If not specified the first page of results will be returned.
  * count `integer`: Specifies the number of status updates to receive. If provided, must be between 1 and 100.
  * since `string`: Specifies a unix timestamp which only status updates created after this time will be retrieved.
  * utc `boolean`: If utc is set times will be returned relative to UTC rather than the users associated timezone.

#### Output
* output [updates-array](#updates-array)

### profiles.id.updates.reorder.json.post
Edit the order at which statuses for the specified social media profile will be sent out of the buffer.



```js
bufferapp.profiles.id.updates.reorder.json.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [shuffle](#shuffle)

### profiles.id.updates.sent.json.get
Returns an array of updates that have been sent from the buffer for an individual social media profile.



```js
bufferapp.profiles.id.updates.sent.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * page `integer`: Specifies the page of status updates to receive. If not specified the first page of results will be returned.
  * count `integer`: Specifies the number of status updates to receive. If provided, must be between 1 and 100.
  * since `string`: Specifies a unix timestamp which only status updates created after this time will be retrieved.
  * utc `boolean`: If utc is set times will be returned relative to UTC rather than the users associated timezone.

#### Output
* output [updates-array](#updates-array)

### profiles.id.updates.shuffle.json.post
Randomize the order at which statuses for the specified social media profile will be sent out of the buffer.



```js
bufferapp.profiles.id.updates.shuffle.json.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [shuffle](#shuffle)

### profiles.id.json.get
Returns details of the single specified social media profile.


```js
bufferapp.profiles.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [profile](#profile)

### profiles.json.get
Returns an array of social media profiles connected to a users account.


```js
bufferapp.profiles.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [profiles](#profiles)

### updates.create.json.post
Create one or more new status updates.



```js
bufferapp.updates.create.json.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [newUpdate](#newupdate)

### updates.id.destroy.json.post
Permanently delete an existing status update.


```js
bufferapp.updates.id.destroy.json.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [success](#success)

### updates.id.interactions.json.get
Returns the detailed information on individual interactions with the social media update such as favorites, retweets and likes.



```js
bufferapp.updates.id.interactions.json.get({
  "id": "",
  "event": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * event **required** `string`: Specifies a type of event to be retrieved, for example "retweet", "like", "comment", "mention" or "reshare". They can also be plural (e.g., "reshares"). Plurality has no effect other than visual semantics. See /info/configuration for more information on supported interaction events.
  * page `integer`: Specifies the page of status updates to receive. If not specified the first page of results will be returned.
  * count `integer`: Specifies the number of status updates to receive. If provided, must be between 1 and 100.

#### Output
* output [interactions](#interactions)

### updates.id.move_to_top.json.post
Move an existing status update to the top of the queue and recalculate times for all updates in the queue. Returns the update with its new posting time.


```js
bufferapp.updates.id.move_to_top.json.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [update](#update)

### updates.id.share.json.post
Immediately shares a single pending update and recalculates times for updates remaining in the queue.


```js
bufferapp.updates.id.share.json.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [success](#success)

### updates.id.update.json.post
Edit an existing, individual status update.



```js
bufferapp.updates.id.update.json.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [individual-update](#individual-update)

### updates.id.json.get
Returns a single social media update.


```js
bufferapp.updates.id.json.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [update](#update)

### user.json.get
Returns a single user.


```js
bufferapp.user.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [user](#user)



## Definitions

### configuration
* configuration `object`
  * media `object`
    * picture_filetypes `array`
      * items `string`
    * picture_size_max `number`
    * picture_size_min `number`
  * services `object`
    * appdotnet `object`
      * types `object`
        * profile `object`
          * character_limit `number`
          * icons `object`
            * 16 `string`
            * 32 `string`
            * 64 `string`
          * link_attachments `boolean`
          * name `string`
          * schedule_limit `number`
          * supported_interactions `array`

      * urls `object`
        * hashtag `string`
        * user `string`
    * facebook `object`
      * types `object`
        * group `object`
          * character_limit `number`
          * icons `object`
            * 16 `string`
            * 32 `string`
            * 64 `string`
          * link_attachments `boolean`
          * name `string`
          * schedule_limit `number`
          * supported_interactions `array`
            * items `string`
        * page `object`
          * character_limit `number`
          * icons `object`
            * 16 `string`
            * 32 `string`
            * 64 `string`
          * link_attachments `boolean`
          * name `string`
          * schedule_limit `number`
          * supported_interactions `array`
            * items `string`
        * profile `object`
          * character_limit `number`
          * icons `object`
            * 16 `string`
            * 32 `string`
            * 64 `string`
          * link_attachments `boolean`
          * name `string`
          * schedule_limit `number`
          * supported_interactions `array`
            * items `string`
      * urls `object`
        * user `string`
    * google `object`
      * types `object`
        * page `object`
          * character_limit `number`
          * icons `object`
            * 16 `string`
            * 32 `string`
            * 64 `string`
          * link_attachments `boolean`
          * name `string`
          * schedule_limit `number`
          * supported_interactions `array`
            * items `string`
        * profile `object`
          * character_limit `number`
          * icons `object`
            * 16 `string`
            * 32 `string`
            * 64 `string`
          * link_attachments `boolean`
          * name `string`
          * schedule_limit `number`
          * supported_interactions `array`
            * items `string`
      * urls `object`
        * user `string`
    * linkedin `object`
      * types `object`
        * group `object`
          * character_limit `number`
          * icons `object`
            * 16 `string`
            * 32 `string`
            * 64 `string`
          * link_attachments `boolean`
          * name `string`
          * schedule_limit `number`
          * supported_interactions `array`
            * items `string`
        * page `object`
          * character_limit `number`
          * icons `object`
            * 16 `string`
            * 32 `string`
            * 64 `string`
          * link_attachments `boolean`
          * name `string`
          * schedule_limit `number`
          * supported_interactions `array`
            * items `string`
        * profile `object`
          * character_limit `number`
          * icons `object`
            * 16 `string`
            * 32 `string`
            * 64 `string`
          * link_attachments `boolean`
          * name `string`
          * schedule_limit `number`
          * supported_interactions `array`
            * items `string`
      * urls `object`
        * user `string`
    * twitter `object`
      * types `object`
        * profile `object`
          * character_limit `number`
          * icons `object`
            * 16 `string`
            * 32 `string`
            * 64 `string`
          * link_attachments `boolean`
          * name `string`
          * schedule_limit `number`
          * supported_interactions `array`
            * items `string`
      * urls `object`
        * cashtag `string`
        * hashtag `string`
        * user `string`

### individual-update
* individual-update `object`
  * buffer_count `number`
  * buffer_percentage `number`
  * success `boolean`
  * update `object`
    * client_id `string`
    * created_at `number`
    * day `string`
    * due_at `number`
    * due_time `string`
    * id `string`
    * media `object`
      * description `string`
      * link `string`
      * title `string`
    * profile_id `string`
    * profile_service `string`
    * status `string`
    * text `string`
    * text_formatted `string`
    * user_id `string`
    * via `string`

### interactions
* interactions `object`
  * interactions `array`
    * items `object`
      * _id `string`
      * created_at `number`
      * event `string`
      * id `string`
      * interaction_id `string`
      * user `object`
        * avatar `string`
        * avatar_https `string`
        * followers `number`
        * twitter_id `string`
        * username `string`
  * total `number`

### newUpdate
* newUpdate `object`
  * buffer_count `number`
  * buffer_percentage `number`
  * success `boolean`
  * updates `array`
    * items `object`
      * created_at `number`
      * day `string`
      * due_at `number`
      * due_time `string`
      * id `string`
      * media `object`
        * description `string`
        * link `string`
        * title `string`
      * profile_id `string`
      * profile_service `string`
      * status `string`
      * text `string`
      * text_formatted `string`
      * user_id `string`
      * via `string`

### profile
* profile `object`
  * avatar `string`
  * created_at `number`
  * default `boolean`
  * formatted_username `string`
  * id `string`
  * schedules `array`
    * items `object`
      * days `array`
        * items `string`
      * times `array`
        * items `string`
  * service `string`
  * service_id `string`
  * service_username `string`
  * statistics `object`
    * followers `number`
  * team_members `array`
    * items `string`
  * timezone `string`
  * user_id `string`

### profiles
* profiles `array`
  * items `object`
    * _id `string`
    * avatar `string`
    * avatar_https `string`
    * counts `object`
      * daily_suggestions `number`
      * drafts `number`
      * pending `number`
      * sent `number`
    * cover_photo `string`
    * default `boolean`
    * disabled_features `array`

    * disconnected `string`
    * formatted_service `string`
    * formatted_username `string`
    * has_used_suggestions `boolean`
    * id `string`
    * schedules `array`
      * items `object`
        * days `array`
          * items `string`
        * times `array`

    * service `string`
    * service_id `string`
    * service_type `string`
    * service_username `string`
    * shortener `object`
      * domain `string`
    * statistics `object`
      * connections `number`
    * timezone `string`
    * user_id `string`
    * utm_tracking `string`
    * verb `string`

### reorder
* reorder `object`
  * success `boolean`
  * updates `array`
    * items `object`
      * created_at `number`
      * day `string`
      * due_at `number`
      * due_time `string`
      * id `string`
      * profile_id `string`
      * profile_service `string`
      * status `string`
      * text `string`
      * text_formatted `string`
      * user_id `string`
      * via `string`

### schedules
* schedules `object`
  * days `array`
    * items `string`
  * times `array`
    * items `string`

### schedules-update
* schedules-update `object`
  * success `boolean`

### share
* share `object`
  * success `boolean`

### shares
* shares `object`
  * shares `number`

### shuffle
* shuffle `object`
  * success `boolean`
  * updates `array`
    * items `object`
      * created_at `number`
      * day `string`
      * due_at `number`
      * due_time `string`
      * id `string`
      * profile_id `string`
      * profile_service `string`
      * status `string`
      * text `string`
      * text_formatted `string`
      * user_id `string`
      * via `string`

### success
* success `object`
  * success `boolean`

### update
* update `object`
  * created_at `number`
  * day `string`
  * due_at `number`
  * due_time `string`
  * id `string`
  * profile_id `string`
  * profile_service `string`
  * sent_at `number`
  * service_update_id `string`
  * statistics `object`
    * clicks `number`
    * favorites `number`
    * mentions `number`
    * reach `number`
    * retweets `number`
  * status `string`
  * text `string`
  * text_formatted `string`
  * user_id `string`
  * via `string`

### updates-array
* updates-array `object`
  * total `number`
  * updates `array`
    * items `object`
      * created_at `number`
      * day `string`
      * due_at `number`
      * due_time `string`
      * id `string`
      * profile_id `string`
      * profile_service `string`
      * status `string`
      * text `string`
      * text_formatted `string`
      * user_id `string`
      * via `string`

### user
* user `object`
  * _id `string`
  * activity_at `number`
  * created_at `number`
  * id `string`
  * plan `string`
  * referral_link `string`
  * referral_token `string`
  * secret_email `string`
  * timezone `string`


