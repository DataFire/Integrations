# @datafire/urbanairship

Client library for Urban Airship

## Installation and Usage
```bash
npm install --save datafire @datafire/urbanairship
```

```js
let datafire = require('datafire');
let urbanairship = require('@datafire/urbanairship').create();

urbanairship.apids.get({}).then(data => {
  console.log(data);
})
```

## Description
The Urban Airship's API powers mobile applications with push, rich push, in-app purchases and subscription services.

## Actions
### device_tokens.token.put
Registers a device token.


```js
urbanairship.device_tokens.token.put({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - Device tokens should be represented as an uppercase string, 64 characters long, without spaces or other separators. An example device token is: FE66489F304DC75B8D6E8200DFF8A456E8DAEACEC428B427E9518741C92C6660.

### device_tokens.token.get
Gets a device token’s alias.


```js
urbanairship.device_tokens.token.get({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - Device tokens should be represented as an uppercase string, 64 characters long, without spaces or other separators. An example device token is: FE66489F304DC75B8D6E8200DFF8A456E8DAEACEC428B427E9518741C92C6660.

### device_tokens.token.delete
Marks the device token as inactive. No notifications will be delivered to it until a PUT is executed again. The DELETE returns HTTP 204 No Content, and needs no payload. When a token is deleted in this manner, any alias or tags will be cleared.


```js
urbanairship.device_tokens.token.delete({
  "token": ""
}, context)
```

#### Parameters
* token (string) **required** - Device tokens should be represented as an uppercase string, 64 characters long, without spaces or other separators. An example device token is: FE66489F304DC75B8D6E8200DFF8A456E8DAEACEC428B427E9518741C92C6660.

### push.post
Sends a push message to one or more users. Only one of aliases, tags, or device_pins is required, but they can be mixed and matched as much as you’d like.


```js
urbanairship.push.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.

### push.scheduled.notification.delete
Cancels a scheduled notification.  A successful delete will have an HTTP status code of 204. If the scheduled notification does not exist, has already been successfully deleted, or was sent, the status code will be 404.


```js
urbanairship.push.scheduled.notification.delete({
  "notification": ""
}, context)
```

#### Parameters
* notification (string) **required** - Scheduled notification ID.

### push.scheduled.post
Bulk deletes scheduled notifications. If you include URLs or aliases for scheduled notifications that don’t exist or have already been sent, they will be ignored. Any device token in the cancel_device_tokens payload will have every notification that is sent to it removed. This will not prevent it from receiving scheduled notifications to tags or broadcast messages.


```js
urbanairship.push.scheduled.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.

### push.scheduled.alias.alias.put
Changes a scheduled notification alias. Aliases for scheduled notifications are unique per Urban Airship application, so you might want to hash the aliases with a device ID or use some other mechanism to ensure uniqueness. The only other limit is that they must be 255 characters or less.


```js
urbanairship.push.scheduled.alias.alias.put({
  "Content-Type": "",
  "alias": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* alias (string) **required** - Scheduled notification alias.

### push.scheduled.alias.alias.delete
Deletes a scheduled notification alias.  If you attempt to schedule an aliased scheduled notification with an alias that already exists for your application, it will overwrite the existing one.


```js
urbanairship.push.scheduled.alias.alias.delete({
  "alias": ""
}, context)
```

#### Parameters
* alias (string) **required** - Scheduled notification alias.

### push.batch.post
Sends a push message to all the listed PINs. Each item in the list can contain 0 or many device_pins and 0 or many aliases or tags, and the blackberry payload is in the same format as for individual pushes.


```js
urbanairship.push.batch.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.

### push.broadcast.post
Sends a push message to all active APIDs (Broadcast). Important: The maximum message size is 1024 bytes. This is calculated as the UTF-8 lengths of alert and extra fields together.


```js
urbanairship.push.broadcast.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.

### push.stats.get
Returns hourly message counts for your application. By default, results are returned in JSON. For CSV, either add the header:Accept:text/csv or append &format=csv to the query string. Times are in UTC, and data is provided for each push platform (currently: iOS, BlackBerry, Android, and C2DM, in that order). The statistics system is updated every 15 minutes, so the final count for an hour will be done at the latest 15 minutes after the hour is done.


```js
urbanairship.push.stats.get({
  "start": "",
  "end": ""
}, context)
```

#### Parameters
* start (string) **required** - Start date in UTC format. Example: 2009-06-22.
* end (string) **required** - End date in UTC format. Example: 2009-06-22+06:00.
* format (string) - Response format.

### device_tokens.get
Gets information about all of your device tokens. If your application has a large number of device tokens, we’ll paginate the request for you. By default, we paginate at 5000 device tokens. You can receive the next page simply by retrieving the URL from "next_page" - in this way it is easy to export all of your device tokens and all their data.


```js
urbanairship.device_tokens.get({}, context)
```

#### Parameters
* page (integer) - The page number.
* limit (integer) - The total items to return. By default, we paginate at 5000 device tokens.

### device_tokens.count.get
Gets the number of device tokens you have registered.


```js
urbanairship.device_tokens.count.get(null, context)
```


### device_tokens.feedback.get
Gets what device tokens are now invalid. Apple informs us when a push notification is sent to a device that can’t receive it because the application has been uninstalled. We mark the device token as inactive and immediately stop sending notifications to that device. Once a day is a good interval for querying the feedback service, but you can do it more often to save on bandwidth from unnecessary notifications. In the response, what does marked_inactive_on mean? Apple sends a timestamp for each device token returned via the feedback service. Since a device can be off the network for a while, this can be a point in the recent past. In order to make this API work smoothly for you, we record the timestamp we marked as inactive. This means you only need to query for data since the last time you queried. Once a day is a good timeframe, or once a week for very small or infrequently used applications. A few times a day is good for applications with heavy use.


```js
urbanairship.device_tokens.feedback.get({
  "since": ""
}, context)
```

#### Parameters
* since (string) **required** - Since timestamp in ISO 8601 format. Example: 2012-03-01+13:00:00.

### apids.apid.put
Registers an APID. Unlike registration for iOS and BlackBerry applications, basic registration tying an APID to your application happens automatically. The registration API can be used to set aliases or tags. This returns HTTP 200 OK for any updates. Registering without any body is a no-op. Not including the alias field will clear it. To clear the list of tags, set it to the empty list []. If you are registering an APID to be used with C2DM, you will also need to include a C2DM registration ID.


```js
urbanairship.apids.apid.put({
  "Content-Type": "",
  "apid": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* apid (string) **required** - An APID (Android Push ID) is the Urban Airship ID of a device to which a message can be pushed.

### apids.apid.get
Gets APID information.


```js
urbanairship.apids.apid.get({
  "apid": ""
}, context)
```

#### Parameters
* apid (string) **required** - An APID (Android Push ID) is the Urban Airship ID of a device to which a message can be pushed.

### apids.apid.delete
Marks an APID as invalid. No notifications will be delivered to it until it re-registers.


```js
urbanairship.apids.apid.delete({
  "apid": ""
}, context)
```

#### Parameters
* apid (string) **required** - An APID (Android Push ID) is the Urban Airship ID of a device to which a message can be pushed.

### apids.get
Gets APIDs. You can control how many APIDs are returned at a time by using the limit GET argument. The maximum limit is 5000.


```js
urbanairship.apids.get({}, context)
```

#### Parameters
* start (integer) - APID from where to start from.
* limit (integer) - Control how many APIDs are returned at a time. The maximum limit is 5000.

### device_pins.pin.put
Registers a BlackBerry PIN. This is optional, but recommended, for BlackBerry push messages. This returns HTTP 201 Created for the first registration and 200 OK for any updates. If you wish to include additional information about a device pin, for instance an alias or tags, include a JSON payload along with this request. Not including one of these keys removes it from the device pin.


```js
urbanairship.device_pins.pin.put({
  "Content-Type": "",
  "pin": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* pin (string) **required** - A BlackBerry PIN. Device PINs should be 8 character strings, without spaces.

### device_pins.pin.get
Gets Device PIN information.


```js
urbanairship.device_pins.pin.get({
  "pin": ""
}, context)
```

#### Parameters
* pin (string) **required** - A BlackBerry PIN. Device PINs should be 8 character strings, without spaces.

### device_pins.pin.delete
Marks a PIN as inactive. No notifications will be delivered to it until a PUT is executed again.


```js
urbanairship.device_pins.pin.delete({
  "pin": ""
}, context)
```

#### Parameters
* pin (string) **required** - A BlackBerry PIN. Device PINs should be 8 character strings, without spaces.

### user.post
Creates a new user and returns the credentials.


```js
urbanairship.user.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.

### user.user_id.put
Changes properties of an user - for example, changing or adding an email address.


```js
urbanairship.user.user_id.put({
  "Content-Type": "",
  "user_id": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* user_id (string) **required** - User ID.

### user.user_id.delete
Deletes an user.


```js
urbanairship.user.user_id.delete({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - User ID.

### user.user_id.get
Retrieves an user’s subscription information.


```js
urbanairship.user.user_id.get({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - User ID.

### user.user_id.creds.reset.post
Changes the password of an user.


```js
urbanairship.user.user_id.creds.reset.post({
  "Content-Type": "",
  "user_id": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* user_id (string) **required** - User ID.

### airmail.send.post
Sends a message. All fields except message are optional, but at least one of tags, users or aliases must be specified. Much like the push API, we have a batch API call that can make sending multiple messages easier. It’s located at /api/airmail/send/batch/ and accepts a list of messages in the same format as the standard push call.


```js
urbanairship.airmail.send.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.

### airmail.send.broadcast.post
Sends a message to all users (broadcast). Only message is required. The message will be sent out to every registered user. Badge numbers will be handled automatically as long as the push key is present.


```js
urbanairship.airmail.send.broadcast.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.

### user.user_id.messages.get
Returns a list of messages and some metadata about them. It will also include some metadata about the user.


```js
urbanairship.user.user_id.messages.get({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user ID.
* full_list (string) - Get the full message included in this list (which might take a while to download).
* since (string) - Return only new items. Example: since=some_message_id will return all messages sent after the message ID of some_message_id.

### user.user_id.messages.unread.get
Returns a list of unread message IDs and their URLs.


```js
urbanairship.user.user_id.messages.unread.get({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user ID.

### user.user_id.messages.unread.post
Marks multiple messages as read at once. If a message has already been marked as read, it will be silently skipped.


```js
urbanairship.user.user_id.messages.unread.post({
  "Content-Type": "",
  "user_id": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* user_id (string) **required** - The user ID.

### user.user_id.messages.message.message_id.get
Gets a message.


```js
urbanairship.user.user_id.messages.message.message_id.get({
  "user_id": "",
  "message_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user ID.
* message_id (string) **required** - The message ID.

### user.user_id.messages.message.message_id.delete
Deletes a message.


```js
urbanairship.user.user_id.messages.message.message_id.delete({
  "user_id": "",
  "message_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user ID.
* message_id (string) **required** - The message ID.

### user.user_id.messages.message.message_id.body.get
Gets a message's body.


```js
urbanairship.user.user_id.messages.message.message_id.body.get({
  "user_id": "",
  "message_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user ID.
* message_id (string) **required** - The message ID.

### user.user_id.messages.message.message_id.read.post
Marks a message as read.


```js
urbanairship.user.user_id.messages.message.message_id.read.post({
  "user_id": "",
  "message_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - The user ID.
* message_id (string) **required** - The message ID.

### user.user_id.messages.delete.post
Deletes multiple messages at once. If a message has already been deleted, it will be silently skipped.


```js
urbanairship.user.user_id.messages.delete.post({
  "Content-Type": "",
  "user_id": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* user_id (string) **required** - The user ID.

### app.content.get
Gets the store inventory.


```js
urbanairship.app.content.get(null, context)
```


### app.content.product_id.download.post
Returns a temporary URL where the client can download the content. In the payload, the receipt string is the receipt data from the purchase. It should be unaltered from how Apple delivers it to your application.udid is an optional field to help identify a particular user’s purchases, which can aid debugging. It should always be a hash of the UDID, not the actual UDID, to ensure compliance with Apple’s TOS. The optional version field should be the StoreFront library version, or custom if you’re building your own.


```js
urbanairship.app.content.product_id.download.post({
  "Content-Type": "",
  "product_id": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* product_id (string) **required** - The product ID.

### app.updates.post
Checks for updates. It can be useful on application launch to compare a list of installed updates with our server to see if there are any updates to be had for the content.


```js
urbanairship.app.updates.post({
  "Content-Type": "",
  "product_id": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* product_id (string) **required** - The product ID.

### user.recover.post
Uses the user’s email address as a way to restore subscription content across devices.


```js
urbanairship.user.recover.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.

### user.recover.id.get
Checks the recovery status.


```js
urbanairship.user.recover.id.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - ID of the user’s account recovery.

### user.user_id.available_subscriptions.get
Retrieves subscription options.


```js
urbanairship.user.user_id.available_subscriptions.get({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - User ID.

### user.user_id.subscriptions.subscription_key.purchase.post
Adds a new subscription.


```js
urbanairship.user.user_id.subscriptions.subscription_key.purchase.post({
  "Content-Type": "",
  "user_id": "",
  "subscription_key": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* user_id (string) **required** - User ID.
* subscription_key (string) **required** - Subscription Key.

### user.user_id.subscription_content.get
Returns a list of available content.


```js
urbanairship.user.user_id.subscription_content.get({
  "user_id": ""
}, context)
```

#### Parameters
* user_id (string) **required** - User ID.

### user.user_id.subscriptions.content.content_id.download.post
Downloads the content.


```js
urbanairship.user.user_id.subscriptions.content.content_id.download.post({
  "Content-Type": "",
  "user_id": "",
  "content_id": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* user_id (string) **required** - User ID.
* content_id (string) **required** - Content ID.

### feeds.post
Creates a new feed item.


```js
urbanairship.feeds.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.

### feeds.get
Gets a list of feeds.


```js
urbanairship.feeds.get(null, context)
```


### feeds.feed_id.get
Returns information about a particular feed.


```js
urbanairship.feeds.feed_id.get({
  "feed_id": ""
}, context)
```

#### Parameters
* feed_id (string) **required** - A particular feed.

### feeds.feed_id.put
Updates a feed.


```js
urbanairship.feeds.feed_id.put({
  "Content-Type": "",
  "feed_id": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* feed_id (string) **required** - A particular feed.

### feeds.feed_id.delete
Deletes a feed.


```js
urbanairship.feeds.feed_id.delete({
  "feed_id": ""
}, context)
```

#### Parameters
* feed_id (string) **required** - A particular feed.

### tags.get
Returns all the tags that you have created.


```js
urbanairship.tags.get(null, context)
```


### tags.tag.put
Deletes a tag.


```js
urbanairship.tags.tag.put({
  "tag": ""
}, context)
```

#### Parameters
* tag (string) **required** - Tags can be of any format you wish, but we recommend that they be URL-safe in order to make less work for you. The maximum length of a tag is 128 characters.

### tags.tag.post
Modifies device tokens on a tag.


```js
urbanairship.tags.tag.post({
  "Content-Type": "",
  "tag": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* tag (string) **required** - Tags can be of any format you wish, but we recommend that they be URL-safe in order to make less work for you. The maximum length of a tag is 128 characters.

### device_tokens.device_token.tags.get
Gets tags for a specific device token.


```js
urbanairship.device_tokens.device_token.tags.get({
  "device_token": ""
}, context)
```

#### Parameters
* device_token (string) **required** - A specific device token.

### device_tokens.device_token.tags.tag.put
Creates a tag and associate it with the specific device token.


```js
urbanairship.device_tokens.device_token.tags.tag.put({
  "device_token": "",
  "tag": ""
}, context)
```

#### Parameters
* device_token (string) **required** - A specific device token.
* tag (string) **required** - Tags can be of any format you wish, but we recommend that they be URL-safe in order to make less work for you. The maximum length of a tag is 128 characters.

### device_tokens.device_token.tags.tag.delete
Removes a single tag from a device token.


```js
urbanairship.device_tokens.device_token.tags.tag.delete({
  "device_token": "",
  "tag": ""
}, context)
```

#### Parameters
* device_token (string) **required** - A specific device token.
* tag (string) **required** - Tags can be of any format you wish, but we recommend that they be URL-safe in order to make less work for you. The maximum length of a tag is 128 characters.

### partner.apps.get
List applications.


```js
urbanairship.partner.apps.get(null, context)
```


### partner.apps.post
Adds a new application.


```js
urbanairship.partner.apps.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.

### partner.apps.app_id.put
Updates an application.


```js
urbanairship.partner.apps.app_id.put({
  "Content-Type": "",
  "app_id": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Content type.
* app_id (string) **required** - A specific application.

