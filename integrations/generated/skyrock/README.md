# @datafire/skyrock
Interact with Skyrock.com features: blogs, profiles, messaging, 'what's new', friends & activities!

## Operation: message.reply_thread.format.post
Replies to a thread.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: message.create_thread.format.post
Creates a multi-recipient thread.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: message.send_message.format.post
Sends a message to a single recipient.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: message.delete_message.format.post
Deletes a message.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: message.delete_thread.format.post
Deletes a message thread.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: message.set_thread_as_read.format.post
Marks a message thread as read.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: message.get_thread.format.get
Returns a message thread (15 messages per page).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_thread": {
      "type": "integer",
      "description": "Message thread ID."
    },
    "page": {
      "type": "integer",
      "description": "Page number (optional)."
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id_thread"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: message.list_threads.format.get
Returns the authenticated user's message threads (15 threads per page).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "filter": {
      "type": "string",
      "description": "Thread selection filter (all/unread).",
      "enum": [
        "all",
        "unread"
      ]
    },
    "page": {
      "type": "integer",
      "description": "Page number (optional)."
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "filter"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: newsfeed.list_alerts_types.format.get
Returns descriptions of alerts types, for developer information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: newsfeed.list_alerts.format.get
Lists user's alerts (notifications).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: newsfeed.list_events_types.format.get
Returns descriptions of events types, for developer information.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: newsfeed.list_events.format.get
Lists events in the user's dash-board (eg. newsfeed).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "events_category": {
      "type": "string",
      "description": "Events category. Possible values: own (display own events), friends (display friends' events).",
      "enum": [
        "own",
        "friends"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "events_category"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: newsfeed.send_alert.format.post
Sends a free text as alert to the authenticated user's alerts (notifications). The message is not localized and should be send in the user language. Unlike events, alerts are personal.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: newsfeed.send_event.format.post
Sends a free text as event to the authenticated user's dash-board (eg. newsfeed). Events also appear in the dash-board of the user's friends. The message is not localized and should be send in the user language.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: mood.delete_mood.format.post
Deletes an user's mood.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: mood.set_mood.format.post
Sets an user's mood.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: mood.get_mood.format.get
Returns an user last mood.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: mood.list_moods.format.get
Returns an user's mood list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.get_tags_types.format.get
Returns user profile's tags types.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.get_tags.format.get
Returns an user profile's tags.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.set_tags.format.post
Sets an user profile's tags.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.get_property_values.format.get
Returns possible values for a given property. These properties can be set using set or set_config.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "property": {
      "type": "string",
      "description": "Property name. Possible values: gender, gender_preference, looks_for, status, town, country, department, occupation, place, personality, smoker, hair_color, eye_color, height, weight, block_friends, block_honors, block_groups, block_gifts, show_visits_counter, show_comments_counter, show_kiffs_counter, show_my_websites, show_mood, display_policy, allow_share, allow_facebook_like, allow_votes, allow_kiffs, default_page, show_me_page, show_news_page, show_photos_page, show_videos_page, allow_comments.",
      "enum": [
        "gender",
        "gender_preference",
        "looks_for",
        "status",
        "town",
        "country",
        "department",
        "occupation",
        "place",
        "personality",
        "smoker",
        "hair_color",
        "eye_color",
        "height",
        "weight",
        "block_friends",
        "block_honors",
        "block_groups",
        "block_gifts",
        "show_visits_counter",
        "show_comments_counter",
        "show_kiffs_counter",
        "show_my_websites",
        "show_mood",
        "display_policy",
        "allow_share",
        "allow_facebook_like",
        "allow_votes",
        "allow_kiffs",
        "default_page",
        "show_me_page",
        "show_news_page",
        "show_photos_page",
        "show_videos_page",
        "allow_comments"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "property"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.set_config.format.post
Sets informations about a profile's (see get_property_values for possible values to set).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.get_config.format.get
Returns settings about current user's profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.delete_picture.format.post
Deletes a picture.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.set_picture.format.post
Sets a picture's properties.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.get_picture.format.get
Returns a specified picture.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_album": {
      "type": "integer",
      "description": "Album ID."
    },
    "id_picture": {
      "type": "integer",
      "description": "Picture ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id_album",
    "id_picture"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.list_pictures.format.get
Returns the list of pictures associated with a profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    },
    "id_album": {
      "type": "integer",
      "description": "Album ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id_album"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.add_picture.format.post
Adds a picture to the profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.delete_album.format.post
Deletes an empty album. Main album (id_album = 1) cannot be deleted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.set_album.format.post
Sets an album's title.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.list_albums.format.get
Returns the list of albums associated with a profile. Main album has id_album = 1.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.add_album.format.post
Adds an album to the profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.set.format.post
Sets an user's profile public data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: profile.get.format.get
Returns an user's profile public data.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    },
    "output_format": {
      "type": "string",
      "description": "Defines which format to output, for specific rich text fields. Possible values: 'html' (default), 'bbcode'.",
      "enum": [
        "html",
        "bbcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.list_pictures.format.get
Returns the list of pictures from all blog's articles, paginated (35 pictures per page).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    },
    "page": {
      "type": "integer",
      "description": "Page number."
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.list_skins.format.get
Returns available skins.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.get_post_comment.format.get
Returns a post's comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    },
    "id_post": {
      "type": "integer",
      "description": "Post ID."
    },
    "id_comment": {
      "type": "integer",
      "description": "Post comment ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id_post",
    "id_comment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.list_post_comments.format.get
Lists a post's comments.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    },
    "id_post": {
      "type": "integer",
      "description": "Post ID."
    },
    "page": {
      "type": "integer",
      "description": "Page number."
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id_post"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.delete_post_media.format.post
Deletes a post's media.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.new_post_media.format.post
Associates media with a blog post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.list_post_medias.format.get
Returns a post's medias list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    },
    "id_post": {
      "type": "integer",
      "description": "Post ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id_post"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.delete_post.format.post
Deletes a blog post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.set_post.format.post
Edits a blog post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.get_post.format.get
Returns an user's blog post. Only online posts will be returned, unless authenticated user is its creator.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    },
    "id_post": {
      "type": "integer",
      "description": "Post ID."
    },
    "output_format": {
      "type": "string",
      "description": "Defines which format to output, for specific rich text fields. Possible values: 'html' (default), 'bbcode'.",
      "enum": [
        "html",
        "bbcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id_post"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.new_post.format.post
Creates a new blog post.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.list_offline_posts.format.get
Returns current user's blog posts list (offline only), paginated.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "page": {
      "type": "integer",
      "description": "Page number."
    },
    "with_secret": {
      "type": "boolean",
      "description": "Allow authenticated blog owner to show secret posts (false by default)."
    },
    "output_format": {
      "type": "string",
      "description": "Defines which format to output, for specific rich text fields. Possible values: 'html' (default), 'bbcode'.",
      "enum": [
        "html",
        "bbcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.list_posts.format.get
Returns an user's blog posts list (online only), paginated (10 articles per page).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    },
    "page": {
      "type": "integer",
      "description": "Page number."
    },
    "with_secret": {
      "type": "boolean",
      "description": "Allow authenticated blog owner to show secret posts (false by default)."
    },
    "output_format": {
      "type": "string",
      "description": "Defines which format to output, for specific rich text fields. Possible values: 'html' (default), 'bbcode'.",
      "enum": [
        "html",
        "bbcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.change_avatar.format.post
Changes authenticated user's blog avatar.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "Content-Type": {
      "type": "string",
      "description": "Content type."
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "Content-Type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.set.format.post
Sets authenticated user's blog data. Each parameter is optional, you can either set one or many at once.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: blog.get.format.get
Returns a blog public data. If the call is authenticated and username is not provided, the method returns data about the current user's Skyrock blog.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    },
    "output_format": {
      "type": "string",
      "description": "Defines which format to output, for specific rich text fields. Possible values: 'html' (default), 'bbcode'.",
      "enum": [
        "html",
        "bbcode"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.list_groups.format.get
List of user's groups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.remove_user_from_blacklist.format.post
Removes a user from the blacklist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.add_user_to_blacklist.format.post
Adds a user to the blacklist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.list_blacklist.format.get
List of users in blacklist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.get_counters.format.get
Returns current user counters.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.is_friend.format.get
Checks friend relation between two users.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user_1": {
      "type": "integer",
      "description": "First user ID."
    },
    "id_user_2": {
      "type": "integer",
      "description": "Second user ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "format",
    "id_user_1",
    "id_user_2"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.deny_friend_request.format.post
Denies a friend request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.accept_friend_request.format.post
Accepts a friend request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.list_friend_requests.format.get
List of friend requests.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.remove_from_friends.format.post
Removes a friend from the friend list.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.remove_from_best_friends.format.post
Removes a friend from the best friend list. The friend user should be a best friend of current user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.add_to_best_friends.format.post
Adds a friend to the best friend list. The friend user should be a friend of current user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.send_friend_request.format.post
Sends a friend request.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.list_online_friends.format.get
List of online friends.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.list_best_friends.format.get
List of best friends (paginated).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "page": {
      "type": "integer",
      "description": "Page number."
    },
    "order": {
      "type": "string",
      "description": "Results order. Possible values:\n- DEFAULT: default order.\n- ALPHA: sort alphabetically.\n- OLDEST_TO_NEWEST: sort by oldest to newest friends (by date of friendship).\n- NEWEST_TO_OLDEST: sort by newest to oldest friends (by date of friendship).\n- BEST_FIRST: default order, with best friends first.\n- BEST_LAST: default order, with best friends last."
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.list_friends_ids.format.get
List of friends ids (paginated).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "page": {
      "type": "integer",
      "description": "Page number."
    },
    "order": {
      "type": "string",
      "description": "Results order. Possible values:\n- DEFAULT: default order.\n- ALPHA: sort alphabetically.\n- OLDEST_TO_NEWEST: sort by oldest to newest friends (by date of friendship).\n- NEWEST_TO_OLDEST: sort by newest to oldest friends (by date of friendship).\n- BEST_FIRST: default order, with best friends first.\n- BEST_LAST: default order, with best friends last."
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.list_friends.format.get
List of friends (paginated).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    },
    "page": {
      "type": "integer",
      "description": "Page number."
    },
    "order": {
      "type": "string",
      "description": "Results order. Possible values:\n- DEFAULT: default order.\n- ALPHA: sort alphabetically.\n- OLDEST_TO_NEWEST: sort by oldest to newest friends (by date of friendship).\n- NEWEST_TO_OLDEST: sort by newest to oldest friends (by date of friendship).\n- BEST_FIRST: default order, with best friends first.\n- BEST_LAST: default order, with best friends last."
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: user.get.format.get
Returns an user's public data. If the call is authenticated and username is not provided, the method returns data about the current user's Skyrock account.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    },
    "id_user": {
      "type": "integer",
      "description": "User ID (optional if OAuthenticated)."
    },
    "username": {
      "type": "string",
      "description": "Username (optional if OAuthenticated)."
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: check_rate_limit.format.get
Returns the number of remaining queries (see http://en.skyrock.com/developer/documentation/api/#request-rate-limits). Calls to this method are not counted against the limits.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "description": "Response format.",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{}
```
