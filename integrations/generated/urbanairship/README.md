# @datafire/urbanairship
The Urban Airship's API powers mobile applications with push, rich push, in-app purchases and subscription services.

## Operation: device_tokens.token.put
Registers a device token.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "Device tokens should be represented as an uppercase string, 64 characters long, without spaces or other separators. An example device token is: FE66489F304DC75B8D6E8200DFF8A456E8DAEACEC428B427E9518741C92C6660."
    }
  },
  "additionalProperties": false,
  "required": [
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: device_tokens.token.get
Gets a device token’s alias.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "Device tokens should be represented as an uppercase string, 64 characters long, without spaces or other separators. An example device token is: FE66489F304DC75B8D6E8200DFF8A456E8DAEACEC428B427E9518741C92C6660."
    }
  },
  "additionalProperties": false,
  "required": [
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: device_tokens.token.delete
Marks the device token as inactive. No notifications will be delivered to it until a PUT is executed again. The DELETE returns HTTP 204 No Content, and needs no payload. When a token is deleted in this manner, any alias or tags will be cleared.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string",
      "description": "Device tokens should be represented as an uppercase string, 64 characters long, without spaces or other separators. An example device token is: FE66489F304DC75B8D6E8200DFF8A456E8DAEACEC428B427E9518741C92C6660."
    }
  },
  "additionalProperties": false,
  "required": [
    "token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: push.post
Sends a push message to one or more users. Only one of aliases, tags, or device_pins is required, but they can be mixed and matched as much as you’d like.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: push.scheduled.notification.delete
Cancels a scheduled notification.  A successful delete will have an HTTP status code of 204. If the scheduled notification does not exist, has already been successfully deleted, or was sent, the status code will be 404.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "notification": {
      "type": "string",
      "description": "Scheduled notification ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "notification"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: push.scheduled.post
Bulk deletes scheduled notifications. If you include URLs or aliases for scheduled notifications that don’t exist or have already been sent, they will be ignored. Any device token in the cancel_device_tokens payload will have every notification that is sent to it removed. This will not prevent it from receiving scheduled notifications to tags or broadcast messages.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: push.scheduled.alias.alias.put
Changes a scheduled notification alias. Aliases for scheduled notifications are unique per Urban Airship application, so you might want to hash the aliases with a device ID or use some other mechanism to ensure uniqueness. The only other limit is that they must be 255 characters or less.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "alias": {
      "type": "string",
      "description": "Scheduled notification alias."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "alias"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: push.scheduled.alias.alias.delete
Deletes a scheduled notification alias.  If you attempt to schedule an aliased scheduled notification with an alias that already exists for your application, it will overwrite the existing one.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "alias": {
      "type": "string",
      "description": "Scheduled notification alias."
    }
  },
  "additionalProperties": false,
  "required": [
    "alias"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: push.batch.post
Sends a push message to all the listed PINs. Each item in the list can contain 0 or many device_pins and 0 or many aliases or tags, and the blackberry payload is in the same format as for individual pushes.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: push.broadcast.post
Sends a push message to all active APIDs (Broadcast). Important: The maximum message size is 1024 bytes. This is calculated as the UTF-8 lengths of alert and extra fields together.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: push.stats.get
Returns hourly message counts for your application. By default, results are returned in JSON. For CSV, either add the header:Accept:text/csv or append &format=csv to the query string. Times are in UTC, and data is provided for each push platform (currently: iOS, BlackBerry, Android, and C2DM, in that order). The statistics system is updated every 15 minutes, so the final count for an hour will be done at the latest 15 minutes after the hour is done.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "start": {
      "type": "string",
      "description": "Start date in UTC format. Example: 2009-06-22."
    },
    "end": {
      "type": "string",
      "description": "End date in UTC format. Example: 2009-06-22+06:00."
    },
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "csv"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "start",
    "end"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: device_tokens.get
Gets information about all of your device tokens. If your application has a large number of device tokens, we’ll paginate the request for you. By default, we paginate at 5000 device tokens. You can receive the next page simply by retrieving the URL from "next_page" - in this way it is easy to export all of your device tokens and all their data.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer",
      "description": "The page number."
    },
    "limit": {
      "type": "integer",
      "description": "The total items to return. By default, we paginate at 5000 device tokens."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: device_tokens.count.get
Gets the number of device tokens you have registered.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: device_tokens.feedback.get
Gets what device tokens are now invalid. Apple informs us when a push notification is sent to a device that can’t receive it because the application has been uninstalled. We mark the device token as inactive and immediately stop sending notifications to that device. Once a day is a good interval for querying the feedback service, but you can do it more often to save on bandwidth from unnecessary notifications. In the response, what does marked_inactive_on mean? Apple sends a timestamp for each device token returned via the feedback service. Since a device can be off the network for a while, this can be a point in the recent past. In order to make this API work smoothly for you, we record the timestamp we marked as inactive. This means you only need to query for data since the last time you queried. Once a day is a good timeframe, or once a week for very small or infrequently used applications. A few times a day is good for applications with heavy use.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "since": {
      "type": "string",
      "description": "Since timestamp in ISO 8601 format. Example: 2012-03-01+13:00:00."
    }
  },
  "additionalProperties": false,
  "required": [
    "since"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apids.apid.put
Registers an APID. Unlike registration for iOS and BlackBerry applications, basic registration tying an APID to your application happens automatically. The registration API can be used to set aliases or tags. This returns HTTP 200 OK for any updates. Registering without any body is a no-op. Not including the alias field will clear it. To clear the list of tags, set it to the empty list []. If you are registering an APID to be used with C2DM, you will also need to include a C2DM registration ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "apid": {
      "type": "string",
      "description": "An APID (Android Push ID) is the Urban Airship ID of a device to which a message can be pushed."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "apid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apids.apid.get
Gets APID information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apid": {
      "type": "string",
      "description": "An APID (Android Push ID) is the Urban Airship ID of a device to which a message can be pushed."
    }
  },
  "additionalProperties": false,
  "required": [
    "apid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apids.apid.delete
Marks an APID as invalid. No notifications will be delivered to it until it re-registers.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "apid": {
      "type": "string",
      "description": "An APID (Android Push ID) is the Urban Airship ID of a device to which a message can be pushed."
    }
  },
  "additionalProperties": false,
  "required": [
    "apid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: apids.get
Gets APIDs. You can control how many APIDs are returned at a time by using the limit GET argument. The maximum limit is 5000.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "start": {
      "type": "integer",
      "description": "APID from where to start from."
    },
    "limit": {
      "type": "integer",
      "description": "Control how many APIDs are returned at a time. The maximum limit is 5000."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: device_pins.pin.put
Registers a BlackBerry PIN. This is optional, but recommended, for BlackBerry push messages. This returns HTTP 201 Created for the first registration and 200 OK for any updates. If you wish to include additional information about a device pin, for instance an alias or tags, include a JSON payload along with this request. Not including one of these keys removes it from the device pin.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "pin": {
      "type": "string",
      "description": "A BlackBerry PIN. Device PINs should be 8 character strings, without spaces."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "pin"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: device_pins.pin.get
Gets Device PIN information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pin": {
      "type": "string",
      "description": "A BlackBerry PIN. Device PINs should be 8 character strings, without spaces."
    }
  },
  "additionalProperties": false,
  "required": [
    "pin"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: device_pins.pin.delete
Marks a PIN as inactive. No notifications will be delivered to it until a PUT is executed again.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pin": {
      "type": "string",
      "description": "A BlackBerry PIN. Device PINs should be 8 character strings, without spaces."
    }
  },
  "additionalProperties": false,
  "required": [
    "pin"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.post
Creates a new user and returns the credentials.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.put
Changes properties of an user - for example, changing or adding an email address.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "user_id": {
      "type": "string",
      "description": "User ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.delete
Deletes an user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "User ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.get
Retrieves an user’s subscription information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "User ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.creds.reset.post
Changes the password of an user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "user_id": {
      "type": "string",
      "description": "User ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: airmail.send.post
Sends a message. All fields except message are optional, but at least one of tags, users or aliases must be specified. Much like the push API, we have a batch API call that can make sending multiple messages easier. It’s located at /api/airmail/send/batch/ and accepts a list of messages in the same format as the standard push call.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: airmail.send.broadcast.post
Sends a message to all users (broadcast). Only message is required. The message will be sent out to every registered user. Badge numbers will be handled automatically as long as the push key is present.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.messages.get
Returns a list of messages and some metadata about them. It will also include some metadata about the user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user ID."
    },
    "full_list": {
      "type": "string",
      "description": "Get the full message included in this list (which might take a while to download)."
    },
    "since": {
      "type": "string",
      "description": "Return only new items. Example: since=some_message_id will return all messages sent after the message ID of some_message_id."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.messages.unread.get
Returns a list of unread message IDs and their URLs.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.messages.unread.post
Marks multiple messages as read at once. If a message has already been marked as read, it will be silently skipped.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "user_id": {
      "type": "string",
      "description": "The user ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.messages.message.message_id.get
Gets a message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user ID."
    },
    "message_id": {
      "type": "string",
      "description": "The message ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "message_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.messages.message.message_id.delete
Deletes a message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user ID."
    },
    "message_id": {
      "type": "string",
      "description": "The message ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "message_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.messages.message.message_id.body.get
Gets a message's body.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user ID."
    },
    "message_id": {
      "type": "string",
      "description": "The message ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "message_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.messages.message.message_id.read.post
Marks a message as read.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "The user ID."
    },
    "message_id": {
      "type": "string",
      "description": "The message ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "message_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.messages.delete.post
Deletes multiple messages at once. If a message has already been deleted, it will be silently skipped.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "user_id": {
      "type": "string",
      "description": "The user ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: app.content.get
Gets the store inventory.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: app.content.product_id.download.post
Returns a temporary URL where the client can download the content. In the payload, the receipt string is the receipt data from the purchase. It should be unaltered from how Apple delivers it to your application.udid is an optional field to help identify a particular user’s purchases, which can aid debugging. It should always be a hash of the UDID, not the actual UDID, to ensure compliance with Apple’s TOS. The optional version field should be the StoreFront library version, or custom if you’re building your own.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "product_id": {
      "type": "string",
      "description": "The product ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "product_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: app.updates.post
Checks for updates. It can be useful on application launch to compare a list of installed updates with our server to see if there are any updates to be had for the content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "product_id": {
      "type": "string",
      "description": "The product ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "product_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.recover.post
Uses the user’s email address as a way to restore subscription content across devices.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.recover.id.get
Checks the recovery status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "ID of the user’s account recovery."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.available_subscriptions.get
Retrieves subscription options.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "User ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.subscriptions.subscription_key.purchase.post
Adds a new subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "user_id": {
      "type": "string",
      "description": "User ID."
    },
    "subscription_key": {
      "type": "string",
      "description": "Subscription Key."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "user_id",
    "subscription_key"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.subscription_content.get
Returns a list of available content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string",
      "description": "User ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.user_id.subscriptions.content.content_id.download.post
Downloads the content.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "user_id": {
      "type": "string",
      "description": "User ID."
    },
    "content_id": {
      "type": "string",
      "description": "Content ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "user_id",
    "content_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: feeds.post
Creates a new feed item.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: feeds.get
Gets a list of feeds.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: feeds.feed_id.get
Returns information about a particular feed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "feed_id": {
      "type": "string",
      "description": "A particular feed."
    }
  },
  "additionalProperties": false,
  "required": [
    "feed_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: feeds.feed_id.put
Updates a feed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "feed_id": {
      "type": "string",
      "description": "A particular feed."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "feed_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: feeds.feed_id.delete
Deletes a feed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "feed_id": {
      "type": "string",
      "description": "A particular feed."
    }
  },
  "additionalProperties": false,
  "required": [
    "feed_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tags.get
Returns all the tags that you have created.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: tags.tag.put
Deletes a tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tag": {
      "type": "string",
      "description": "Tags can be of any format you wish, but we recommend that they be URL-safe in order to make less work for you. The maximum length of a tag is 128 characters."
    }
  },
  "additionalProperties": false,
  "required": [
    "tag"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: tags.tag.post
Modifies device tokens on a tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "tag": {
      "type": "string",
      "description": "Tags can be of any format you wish, but we recommend that they be URL-safe in order to make less work for you. The maximum length of a tag is 128 characters."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "tag"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: device_tokens.device_token.tags.get
Gets tags for a specific device token.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "device_token": {
      "type": "string",
      "description": "A specific device token."
    }
  },
  "additionalProperties": false,
  "required": [
    "device_token"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: device_tokens.device_token.tags.tag.put
Creates a tag and associate it with the specific device token.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "device_token": {
      "type": "string",
      "description": "A specific device token."
    },
    "tag": {
      "type": "string",
      "description": "Tags can be of any format you wish, but we recommend that they be URL-safe in order to make less work for you. The maximum length of a tag is 128 characters."
    }
  },
  "additionalProperties": false,
  "required": [
    "device_token",
    "tag"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: device_tokens.device_token.tags.tag.delete
Removes a single tag from a device token.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "device_token": {
      "type": "string",
      "description": "A specific device token."
    },
    "tag": {
      "type": "string",
      "description": "Tags can be of any format you wish, but we recommend that they be URL-safe in order to make less work for you. The maximum length of a tag is 128 characters."
    }
  },
  "additionalProperties": false,
  "required": [
    "device_token",
    "tag"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: partner.apps.get
List applications.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: partner.apps.post
Adds a new application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: partner.apps.app_id.put
Updates an application.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    },
    "app_id": {
      "type": "string",
      "description": "A specific application."
    }
  },
  "additionalProperties": false,
  "required": [
    "Content-Type",
    "app_id"
  ]
}
```
### Output Schema
```json
{}
```
