# @datafire/twitter

Client library for Twitter

## Installation and Usage
```bash
npm install --save @datafire/twitter
```
```js
let twitter = require('@datafire/twitter').create({
  consumer_key: "",
  consumer_secret: "",
  token: "",
  token_secret: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### account.settings.get
Returns settings (including
current trend, geo and sleep time information) for the authenticating user.


```js
twitter.account.settings.get({}, context)
```

#### Input
* input `object`
  * trend_location_woeid `string`: The Yahoo! Where On Earth ID to use as the user's default trend location. Global information is
  * sleep_time_enabled `string`: When set to true, t or 1, will enable sleep time for the user. Sleep time is the time when push or
  * start_sleep_time `string`: The hour that sleep time should begin if it is enabled. The value for this parameter should be
  * end_sleep_time `string`: The hour that sleep time should end if it is enabled. The value for this parameter should be
  * time_zone `string`: The timezone dates and times should be displayed in for the user. The timezone must be one of the
  * lang `string`: The language which Twitter should render in for this user. The language must be specified by the

#### Output
*Output schema unknown*

### account.settings.post
Updates the
authenticating user's settings.


```js
twitter.account.settings.post({}, context)
```

#### Input
* input `object`
  * trend_location_woeid `string`: The Yahoo! Where On Earth ID to use as the user's default trend location. Global information is
  * sleep_time_enabled `string`: When set to true, t or 1, will enable sleep time for the user. Sleep time is the time when push or
  * start_sleep_time `string`: The hour that sleep time should begin if it is enabled. The value for this parameter should be
  * end_sleep_time `string`: The hour that sleep time should end if it is enabled. The value for this parameter should be
  * time_zone `string`: The timezone dates and times should be displayed in for the user. The timezone must be one of the
  * lang `string`: The language which Twitter should render in for this user. The language must be specified by the

#### Output
*Output schema unknown*

### account.update_delivery_device
Sets which
device Twitter delivers updates to for the authenticating user. Sending none as the device parameter
will disable SMS updates.


```js
twitter.account.update_delivery_device({
  "device": ""
}, context)
```

#### Input
* input `object`
  * device **required** `string`: Must be one of: sms, none.
  * include_entities `string`: When set to either true, t or 1, each tweet will include a node called "entities,". This node

#### Output
*Output schema unknown*

### account.update_profile
Sets values that
users are able to set under the Account tab of their settings page. Only the parameters specified
will be updated.


```js
twitter.account.update_profile({}, context)
```

#### Input
* input `object`
  * name `string`: Full name associated with the profile. Maximum of 20 characters.
  * url `string`: URL associated with the profile. Will be prepended with "http://" if not present. Maximum of 100
  * location `string`: The city or country describing where the user of the account is located. The contents are not
  * description `string`: A description of the user owning the account. Maximum of 160 characters.
  * include_entities `string`: The entities node will not be included when set to false.
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.

#### Output
*Output schema unknown*

### accounts.update_profile_background_image
Updates the authenticating user's profile background image. This method can also be used to enable
or disable the profile background image. Although each parameter is marked as optional, at least one
of image, tile or use must be provided when making this request.


```js
twitter.accounts.update_profile_background_image({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: Content type header
  * tile `string`: Whether or not to tile the background image. If set to true, t or 1 the background image will
  * use `string`: Determines whether to display the profile background image or not. When set to true, t or 1 the
  * include_entities `string`: The entities node will not be included when set to false.
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.

#### Output
*Output schema unknown*

### accounts.update_profile_colors
Sets one or
more hex values that control the color scheme of the authenticating user's profile page on
twitter.com.
Each parameter's value must be a valid hexidecimal value, and may be either three or six characters
(ex: #fff or #ffffff).


```js
twitter.accounts.update_profile_colors({}, context)
```

#### Input
* input `object`
  * profile_background_color `string`: Profile background color. Example Values: 3D3D3D
  * profile_link_color `string`: Profile link color.Example Values: 0000FF
  * profile_sidebar_border_color `string`: Profile sidebar's border color. Example Values: 0F0F0F
  * profile_sidebar_fill_color `string`: Profile sidebar's background color. Example Values: 00FF00
  * profile_text_color `string`: Profile text color. Example Values: 000000
  * include_entities `string`: The entities node will not be included when set to false. Example Values: false
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.

#### Output
*Output schema unknown*

### accounts.update_profile_image
Updates the
authenticating user's profile image. Note that this method expects raw multipart data, not a URL to
an image. This method asynchronously processes the uploaded file before updating the user's profile
image URL. You can either update your local cache the next time you request the user's information,
or, at least 5 seconds after uploading the image, ask for the updated URL using GET
users/profile_image/:screen_name
(https://dev.twitter.com/docs/api/1/get/users/profile_image/:screen_name).


```js
twitter.accounts.update_profile_image({
  "Content-Type": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: Content type header
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.

#### Output
*Output schema unknown*

### application.rate_limit_status
Returns the
current rate limits for
methods belonging to the specified resource families.

Each 1.1 API resource belongs to a "resource family" which is indicated in its method documentation.
You can typically determine a method's resource family from the first component of the path after
the resource version.

This method responds with a map of methods belonging to the families specified by the resources
parameter, the current remaining uses for each of those resources within the current rate limiting
window, and its expiration time in epoch time. It also includes a rate_limit_context field that
indicates the current access token context.

You may also issue requests to this method without any parameters to receive a map of all rate
limited GET methods. If your application only uses a few of methods, please explicitly provide a
resources parameter with the specified resource families you work with.


```js
twitter.application.rate_limit_status({}, context)
```

#### Input
* input `object`
  * resources `string`: A comma-separated list of resource families you want to know the current rate limit disposition

#### Output
*Output schema unknown*

### blocks.create
Blocks the specified user from
following the authenticating user. In addition the blocked user will not show in the authenticating
users mentions or timeline (unless retweeted by another user). If a follow or friend relationship
exists it is destroyed.


```js
twitter.blocks.create({}, context)
```

#### Input
* input `object`
  * include_entities `string`: The entities node will not be included when set to false.
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.

#### Output
*Output schema unknown*

### blocks.destroy
Un-blocks the user specified
in the ID parameter for the authenticating user. Returns the un-blocked user in the requested format
when successful. If relationships existed before the block was instated, they will not be restored.


```js
twitter.blocks.destroy({}, context)
```

#### Input
* input `object`
  * include_entities `string`: The entities node will not be included when set to false.
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.

#### Output
*Output schema unknown*

### blocks.ids
Returns an array of numeric user
ids the authenticating user is blocking.


```js
twitter.blocks.ids({}, context)
```

#### Input
* input `object`
  * stringify_ids `string`: Many programming environments will not consume our ids due to their size. Provide this option to
  * cursor `string`: Causes the list of blocked users to be broken into pages of no more than 5000 IDs at a time. The

#### Output
*Output schema unknown*

### blocks.list
Allows one to enable or
disable retweets and device notifications from the specified user.


```js
twitter.blocks.list({}, context)
```

#### Input
* input `object`
  * include_entities `string`: The entities node will not be included when set to false. Example Values: false
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.
  * cursor `string`: Causes the list of blocked users to be broken into pages of no more than 5000 IDs at a time. The

#### Output
*Output schema unknown*

### direct_messages
Returns the 20 most recent
direct messages sent to the authenticating user. Includes detailed information about the sender and
recipient user. You can request up to 200 direct messages per call, up to a maximum of 800 incoming
DMs.

Important: This method requires an access token with RWD (read, write and direct message)
permissions.
Consult The Application Permission Model for more information.


```js
twitter.direct_messages({}, context)
```

#### Input
* input `object`
  * count `string`: Specifies the number of direct messages to try and retrieve, up to a maximum of 200. The value of
  * since_id `string`: Returns results with an ID greater than (that is, more recent than) the specified ID. There are
  * max_id `string`: Returns results with an ID less than (that is, older than) or equal to the specified ID.
  * include_entities `string`: The entities node will not be included when set to false.
  * page `string`: Specifies the page of results to retrieve.
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.

#### Output
*Output schema unknown*

### direct_messages.destroy
Destroys the direct
message specified in the required ID parameter. The authenticating user must be the recipient of the
specified direct message.

Important: This method requires an access token with RWD (read, write and direct message)
permissions.
Consult The Application Permission Model for more information.


```js
twitter.direct_messages.destroy({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the direct message to delete.
  * include_entities `string`: The entities node will not be included when set to false.

#### Output
*Output schema unknown*

### direct_messages.new
Sends a new direct
message to the specified user from the authenticating user. Requires both the user and text
parameters and must be a POST. Returns the sent message in the requested format if successful.


```js
twitter.direct_messages.new({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: The text of your direct message. Be sure to URL encode as necessary, and keep the message under 140

#### Output
*Output schema unknown*

### direct_messages.sent
Returns the 20 most
recent direct messages sent by the authenticating user. Includes detailed information about the
sender and recipient user. You can request up to 200 direct messages per call, up to a maximum of
800 outgoing DMs.

Important: This method requires an access token with RWD (read, write and direct message)
permissions. Consult The Application Permission Model for more information.


```js
twitter.direct_messages.sent({}, context)
```

#### Input
* input `object`
  * count `string`: Specifies the number of direct messages to try and retrieve, up to a maximum of 200. The value of
  * since_id `string`: Returns results with an ID greater than (that is, more recent than) the specified ID. There are
  * max_id `string`: Returns results with an ID less than (that is, older than) or equal to the specified ID.
  * include_entities `string`: The entities node will not be included when set to false.
  * page `string`: Specifies the page of results to retrieve.

#### Output
*Output schema unknown*

### direct_messages.show
Returns a single direct
message, specified by an id parameter. Like the /1.1/direct_messages.format request, this method
will include the user objects of the sender and recipient.

Important: This method requires an access token with RWD (read, write and direct message)
permissions.
Consult The Application Permission Model for more information.


```js
twitter.direct_messages.show({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the direct message.

#### Output
*Output schema unknown*

### favorites.create
Favorites the status
specified in the ID parameter as the authenticating user. Returns the favorite status when
successful.

This process invoked by this method is asynchronous. The immediately returned status may not
indicate the resultant favorited status of the tweet. A 200 OK response from this method will
indicate whether the intended action was successful or not.


```js
twitter.favorites.create({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The numerical ID of the desired status.
  * include_entities `string`: The entities node will be omitted when set to false.

#### Output
*Output schema unknown*

### favorites.destroy
Un-favorites the status
specified in the ID parameter as the authenticating user. Returns the un-favorited status in the
requested format when successful.

This process invoked by this method is asynchronous. The immediately returned status may not
indicate the resultant favorited status of the tweet. A 200 OK response from this method will
indicate whether the intended action was successful or not.


```js
twitter.favorites.destroy({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The numerical ID of the desired status.
  * include_entities `string`: The entities node will be omitted when set to false.

#### Output
*Output schema unknown*

### favorites.list
Returns the 20 most recent
Tweets favorited by the authenticating or specified user.


```js
twitter.favorites.list({}, context)
```

#### Input
* input `object`
  * count `string`: Specifies the number of records to retrieve. Must be less than or equal to 200. Defaults to 20.
  * since_id `string`: Returns results with an ID greater than (that is, more recent than) the specified ID. There are
  * max_id `string`: Returns results with an ID less than (that is, older than) or equal to the specified ID.
  * include_entities `string`: The entities node will be omitted when set to false.

#### Output
*Output schema unknown*

### followers.ids
Returns a cursored collection
of user IDs for every user following the specified user.

At this time, results are ordered with the most recent following first — however, this ordering is
subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000
user IDs and multiple "pages" of results can be navigated through using the next_cursor value in
subsequent requests. See Using cursors to navigate collections for more information.

This method is especially powerful when used in conjunction with GET users/lookup, a method that
allows you to convert user IDs into full user objects in bulk.


```js
twitter.followers.ids({}, context)
```

#### Input
* input `object`
  * stringify_ids `string`: Many programming environments will not consume our Tweet ids due to their size. Provide this option
  * cursor `string`: Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The

#### Output
*Output schema unknown*

### friends.ids
Returns a cursored collection of
user IDs for every user the specified user is following (otherwise known as their "friends").

At this time, results are ordered with the most recent following first — however, this ordering is
subject to unannounced change and eventual consistency issues. Results are given in groups of 5,000
user IDs and multiple "pages" of results can be navigated through using the next_cursor value in
subsequent requests. See Using cursors to navigate collections for more information.

This method is especially powerful when used in conjunction with GET users/lookup, a method that
allows you to convert user IDs into full user objects in bulk.


```js
twitter.friends.ids({}, context)
```

#### Input
* input `object`
  * stringify_ids `string`: Many programming environments will not consume our Tweet ids due to their size. Provide this option
  * cursor `string`: Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The

#### Output
*Output schema unknown*

### friendships.create
Allows the authenticating
users to follow the user specified in the ID parameter.

Returns the befriended user in the requested format when successful. Returns a string describing the
failure condition when unsuccessful. If you are already friends with the user a HTTP 403 may be
returned, though for performance reasons you may get a 200 OK message even if the friendship already
exists.

Actions taken in this method are asynchronous and changes will be eventually consistent.


```js
twitter.friendships.create({}, context)
```

#### Input
* input `object`
  * follow `string`: Enable notifications for the target user. Example Values: true

#### Output
*Output schema unknown*

### friendships.destroy
Allows the
authenticating
user to unfollow the user specified in the ID parameter.

Returns the unfollowed user in the requested format when successful. Returns a string describing the
failure condition when unsuccessful.

Actions taken in this method are asynchronous and changes will be eventually consistent.


```js
twitter.friendships.destroy(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### friendships.incoming
Returns the
relationships
of the authenticating user to the comma-separated list of up to 100 screen_names or user_ids
provided. Values for connections can be: following, following_requested, followed_by, none.


```js
twitter.friendships.incoming({}, context)
```

#### Input
* input `object`
  * stringify_ids `string`: Many programming environments will not consume our Tweet ids due to their size. Provide this option
  * cursor `string`: Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The

#### Output
*Output schema unknown*

### friendships.lookup
Returns the relationships
of the authenticating user to the comma-separated list of up to 100 screen_names or user_ids
provided. Values for connections can be: following, following_requested, followed_by, none.


```js
twitter.friendships.lookup(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### friendships.outgoing
Returns a collection of
numeric IDs for every protected user for whom the authenticating user has a pending follow request.


```js
twitter.friendships.outgoing({}, context)
```

#### Input
* input `object`
  * stringify_ids `string`: Many programming environments will not consume our Tweet ids due to their size. Provide this option
  * cursor `string`: Causes the list of connections to be broken into pages of no more than 5000 IDs at a time. The

#### Output
*Output schema unknown*

### friendships.show
Returns detailed information
about the relationship between two arbitrary users.


```js
twitter.friendships.show({
  "target_id": "",
  "target_screen_name": ""
}, context)
```

#### Input
* input `object`
  * source_id `string`: The user_id of the subject user.
  * source_screen_name `string`: The screen_name of the subject user.
  * target_id **required** `string`: The user_id of the target user.
  * target_screen_name **required** `string`: The screen_name of the target user.

#### Output
*Output schema unknown*

### friendships.update
Allows one to enable or
disable retweets and device notifications from the specified user.


```js
twitter.friendships.update({
  "device": "",
  "retweets": ""
}, context)
```

#### Input
* input `object`
  * device **required** `string`: Enable/disable device notifications from the target user. Example Values: true, false
  * retweets **required** `string`: Enable/disable retweets from the target user. Example Values: true, false

#### Output
*Output schema unknown*

### geo.place_id
Returns all the
information about a known place.Example Values: df51dec6f4ee2b2c


```js
twitter.geo.place_id({
  "place_id": ""
}, context)
```

#### Input
* input `object`
  * place_id **required** `string`: A place in the world. These IDs can be retrieved from geo/reverse_geocode.

#### Output
*Output schema unknown*

### geo.places
Creates a new place object at the
given latitude and longitude.

Before creating a place you need to query GET geo/similar_places with the latitude, longitude and
name of the place you wish to create. The query will return an array of places which are similar to
the one you wish to create, and a token. If the place you wish to create isn't in the returned array
you can use the token with this method to create a new one.


```js
twitter.geo.places({}, context)
```

#### Input
* input `object`
  * attribute:street_address `string`: This parameter searches for places which have this given street address. There are other
  * callback `string`: If supplied, the response will use the JSONP format with a callback of the given name.

#### Output
*Output schema unknown*

### geo.reverse_geocode
Given a latitude and a
longitude, searches for up to 20 places that can be used as a place_id when updating a status.

This request is an informative call and will deliver generalized results about geography


```js
twitter.geo.reverse_geocode({
  "lat": "",
  "long": ""
}, context)
```

#### Input
* input `object`
  * lat **required** `string`: The latitude to search around. This parameter will be ignored unless it is inside the range -90.0
  * long **required** `string`: The longitude to search around. The valid ranges for longitude is -180.0 to +180.0 (East is
  * accuracy `string`: A hint on the "region" in which to search. If a number, then this is a radius in meters, but it can
  * granularity `string`: This is the minimal granularity of place types to return and must be one of: poi, neighborhood,
  * max_results `string`: A hint as to the number of results to return. This does not guarantee that the number of results
  * callback `string`: If supplied, the response will use the JSONP format with a callback of the given name.

#### Output
*Output schema unknown*

### geo.search
Search for places that can be
attached to a statuses/update. Given a latitude and a longitude pair, an IP address, or a name, this
request will return a list of all the valid places that can be used as the place_id when updating a
status.

Conceptually, a query can be made from the user's location, retrieve a list of places, have the user
validate the location he or she is at, and then send the ID of this location with a call to POST
statuses/update.

This is the recommended method to use find places that can be attached to statuses/update. Unlike
GET geo/reverse_geocode which provides raw data access, this endpoint can potentially re-order
places with regards to the user who is authenticated. This approach is also preferred for
interactive place matching with the user.


```js
twitter.geo.search({}, context)
```

#### Input
* input `object`
  * accuracy `string`: A hint on the "region" in which to search. If a number, then this is a radius in meters, but it can
  * granularity `string`: This is the minimal granularity of place types to return and must be one of: poi, neighborhood,
  * contained_within `string`: This is the place_id which you would like to restrict the search results to. Setting this value
  * attribute:street_address `string`: This parameter searches for places which have this given street address. There are other
  * callback `string`: If supplied, the response will use the JSONP format with a callback of the given name.

#### Output
*Output schema unknown*

### geo.similar_places
Locates places near the
given coordinates which are similar in name.

Conceptually you would use this method to get a list of known places to choose from first. Then, if
the desired place doesn't exist, make a request to POST geo/place to create a new one.

The token contained in the response is the token needed to be able to create a new place.


```js
twitter.geo.similar_places({}, context)
```

#### Input
* input `object`
  * contained_within `string`: This is the place_id which you would like to restrict the search results to. Setting this value
  * attribute:street_address `string`: This parameter searches for places which have this given street address. There are other
  * callback `string`: If supplied, the response will use the JSONP format with a callback of the given name.

#### Output
*Output schema unknown*

### help.configurations
Returns the current
configuration used by Twitter including twitter.com slugs which are not usernames, maximum photo
resolutions, and t.co URL lengths.

It is recommended applications request this endpoint when they are loaded, but no more than once a
day.


```js
twitter.help.configurations(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### help.languages
Returns the list of languages
supported by Twitter along with their ISO 639-1 code. The ISO 639-1 code is the two letter value to
use if you include lang with any of your requests.


```js
twitter.help.languages(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### help.privacy
Returns Twitter's Privacy Policy


```js
twitter.help.privacy(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### help.tos
Returns the Twitter Terms of Service
in the requested format. These are not the same as the Developer Rules of the Road.


```js
twitter.help.tos(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### lists.create
Creates a new list for the
authenticated user. Note that you can't create more than 20 lists per account.


```js
twitter.lists.create({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The name for the list.A list's name must start with a letter and can consist only of 25 or fewer
  * mode `string`: Whether your list is public or private. Values can be public or private. If no mode is specified
  * description `string`: The description to give the list.

#### Output
*Output schema unknown*

### lists.destroy
Deletes the specified list.
The authenticated user must own the list to be able to destroy it.


```js
twitter.lists.destroy({}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.

#### Output
*Output schema unknown*

### lists.list
Returns all lists the
authenticating or specified user subscribes to, including their own. The user is specified using the
user_id or screen_name parameters. If no user is given, the authenticating user is used.

This method used to be GET lists in version 1.0 of the API and has been renamed for consistency with
other call.


```js
twitter.lists.list({
  "screen_name": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * screen_name **required** `string`: The screen name of the user for whom to return results for. Helpful for disambiguating when a valid
  * user_id **required** `string`: The ID of the user for whom to return results for. Helpful for disambiguating when a valid user ID

#### Output
*Output schema unknown*

### lists.members
Returns the members of the
specified list. Private list members will only be shown if the authenticated user owns the specified
list.


```js
twitter.lists.members({}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.
  * include_entities `string`: The entities node will be disincluded when set to false.
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.
  * cursor `string`: Causes the collection of list members to be broken into "pages" of somewhat consistent size. If no

#### Output
*Output schema unknown*

### lists.members.create
Add a member to a list.
The authenticated user must own the list to be able to add members to it. Note that lists can't have
more than 500 members.


```js
twitter.lists.members.create({}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.

#### Output
*Output schema unknown*

### lists.members.create_all
Adds multiple
members to a list, by specifying a comma-separated list of member ids or screen names. The
authenticated user must own the list to be able to add members to it. Note that lists can't have
more than 500 members, and you are limited to adding up to 100 members to a list at a time with this
method.

Please note that there can be issues with lists that rapidly remove and add memberships. Take care
when using these methods such that you are not too rapidly switching between removals and adds on
the same list.


```js
twitter.lists.members.create_all({}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.
  * user_id `string`: A comma separated list of user IDs, up to 100 are allowed in a single request.
  * screen_name `string`: A comma separated list of screen names, up to 100 are allowed in a single request.

#### Output
*Output schema unknown*

### lists.members.destroy
Removes the specified
member from the list. The authenticated user must be the list's owner to remove members from the
list.


```js
twitter.lists.members.destroy({
  "list_id": "",
  "slug": ""
}, context)
```

#### Input
* input `object`
  * list_id **required** `string`: The numerical id of the list.
  * slug **required** `string`: You can identify a list by its slug instead of its numerical id. If you decide to do so, note
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.
  * user_id `string`: The ID of the user to remove from the list. Helpful for disambiguating when a valid user ID is also
  * screen_name `string`: The screen name of the user for whom to remove from the list. Helpful for disambiguating when a

#### Output
*Output schema unknown*

### lists.members.destroy_all
Removes multiple
members from a list, by specifying a comma-separated list of member ids or screen names. The
authenticated user must own the list to be able to remove members from it. Note that lists can't
have more than 500 members, and you are limited to removing up to 100 members to a list at a time
with this method.

Please note that there can be issues with lists that rapidly remove and add memberships. Take care
when using these methods such that you are not too rapidly switching between removals and adds on
the same list.


```js
twitter.lists.members.destroy_all({}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.
  * screen_name `string`: A comma separated list of screen names, up to 100 are allowed in a single request.
  * user_id `string`: A comma separated list of user IDs, up to 100 are allowed in a single request.

#### Output
*Output schema unknown*

### lists.members.show
Check if the specified
user is a member of the specified list.


```js
twitter.lists.members.show({}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.
  * include_entities `string`: When set to either true, t or 1, each tweet will include a node called "entities". This node offers
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.

#### Output
*Output schema unknown*

### lists.memberships
Returns the lists the
specified user has been added to. If user_id or screen_name are not provided the memberships for the
authenticating user are returned.


```js
twitter.lists.memberships({}, context)
```

#### Input
* input `object`
  * user_id `string`: The ID of the user for whom to return results for. Helpful for disambiguating when a valid user ID
  * screen_name `string`: The screen name of the user for whom to return results for. Helpful for disambiguating when a valid
  * cursor `string`: Breaks the results into pages. A single page contains 20 lists. Provide a value of -1 to begin
  * filter_to_owned_lists `string`: When set to true, t or 1, will return just lists the authenticating user owns, and the user

#### Output
*Output schema unknown*

### lists.show
Returns the specified list.
Private lists will only be shown if the authenticated user owns the specified list.


```js
twitter.lists.show({}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.

#### Output
*Output schema unknown*

### lists.statuses
Returns tweet timeline for
members of the specified list. Retweets are included by default. You can use the include_rts=false
parameter to omit retweet objects.


```js
twitter.lists.statuses({
  "include_rts": ""
}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.
  * since_id `string`: Returns results with an ID greater than (that is, more recent than) the specified ID. There are
  * max_id `string`: Returns results with an ID less than (that is, older than) or equal to the specified ID.
  * count `string`: Specifies the number of results to retrieve per "page.
  * include_entities `string`: Entities are ON by default in API 1.1, each tweet includes a node called "entities". This node
  * include_rts **required** `string`: When set to either true, t or 1, the list timeline will contain native retweets (if they exist) in

#### Output
*Output schema unknown*

### lists.subscribers
Returns the subscribers of
the specified list. Private list subscribers will only be shown if the authenticated user owns the
specified list.


```js
twitter.lists.subscribers({}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.
  * cursor `string`: Breaks the results into pages. A single page contains 20 lists. Provide a value of -1 to begin
  * include_entities `string`: When set to either true, t or 1, each tweet will include a node called "entities". This node offers
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.

#### Output
*Output schema unknown*

### lists.subscribers.create
Subscribes the
authenticated user to the specified list.


```js
twitter.lists.subscribers.create({}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.

#### Output
*Output schema unknown*

### lists.subscribers.destroy
Unsubscribes the
authenticated user from the specified list.


```js
twitter.lists.subscribers.destroy({}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.

#### Output
*Output schema unknown*

### lists.subscribers.show
Check if the specified
user is a subscriber of the specified list. Returns the user if they are subscriber.


```js
twitter.lists.subscribers.show({}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.
  * include_entities `string`: When set to either true, t or 1, each tweet will include a node called "entities". This node offers
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.

#### Output
*Output schema unknown*

### lists.subscriptions
Obtain a collection of
the lists the specified user is subscribed to, 20 lists per page by default. Does not include the
user's own lists.


```js
twitter.lists.subscriptions({}, context)
```

#### Input
* input `object`
  * count `string`: The amount of results to return per page. Defaults to 20. Maximum of 1,000 when using cursors.
  * cursor `string`: Breaks the results into pages. A single page contains 20 lists. Provide a value of -1 to begin

#### Output
*Output schema unknown*

### lists.update
Updates the specified list. The
authenticated user must own the list to be able to update it.


```js
twitter.lists.update({}, context)
```

#### Input
* input `object`
  * owner_screen_name `string`: The screen name of the user who owns the list being requested by a slug.
  * owner_id `string`: The user ID of the user who owns the list being requested by a slug.
  * name `string`: The name for the list.
  * mode `string`: Whether your list is public or private. Values can be public or private. If no mode is specified
  * description `string`: The description to give the list.

#### Output
*Output schema unknown*

### saved_searches.create
Create a new saved
search for the authenticated user. A user may only have 25 saved searches.


```js
twitter.saved_searches.create({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: The query of the search the user would like to save.

#### Output
*Output schema unknown*

### saved_searches.destroy
Destroys a
saved
search for the authenticating user. The authenticating user must be the owner of saved search id
being destroyed.


```js
twitter.saved_searches.destroy({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the saved search.

#### Output
*Output schema unknown*

### saved_searches.list
Returns the authenticated
user's saved search queries.


```js
twitter.saved_searches.list(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### savedsearchesid
Returns the
authenticated user's saved search queries.


```js
twitter.savedsearchesid({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the saved search.

#### Output
*Output schema unknown*

### search.tweets
Returns a collection of
relevant Tweets matching a specified query.

Please note that Twitter's search service and, by extension, the Search API is not meant to be an
exhaustive source of Tweets. Not all Tweets will be indexed or made available via the search
interface.

In API v1.1, the response format of the Search API has been improved to return Tweet objects more
similar to the objects you'll find across the REST API and platform. You may need to tolerate some
inconsistencies and variance in perspectival values (fields that pertain to the perspective of the
authenticating user) and embedded user objects.


```js
twitter.search.tweets({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: A UTF-8, URL-encoded search query of 1,000 characters maximum, including operators. Queries may
  * geocode `string`: Returns tweets by users located within a given radius of the given latitude/longitude. The location
  * lang `string`: Restricts tweets to the given language, given by an ISO 639-1 code. Language detection is
  * locale `string`: Specify the language of the query you are sending (only ja is currently effective). This is
  * result_type `string`: Optional. Specifies what type of search results you would prefer to receive. The current default is
  * count `string`: The number of tweets to return per page, up to a maximum of 100. Defaults to 15. This was formerly
  * until `string`: Returns tweets generated before the given date. Date should be formatted as YYYY-MM-DD. Keep in
  * since_id `string`: Returns results with an ID greater than (that is, more recent than) the specified ID. There are
  * max_id `string`: Returns results with an ID less than (that is, older than) or equal to the specified ID. Example
  * include_entities `string`: The entities node will be disincluded when set to false. Example Values: false
  * callback `string`: If supplied, the response will use the JSONP format with a callback of the given name. The

#### Output
*Output schema unknown*

### statuses.destroy
Destroys the status
specified by the required ID parameter. The authenticating user must be the author of the specified
status. Returns the destroyed status if successful.


```js
twitter.statuses.destroy({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The numerical ID of the desired status.
  * trim_user `string`: When set to either true, t or 1, each tweet returned in a timeline will include a user object

#### Output
*Output schema unknown*

### statuses.home_timeline
Returns a collection
of the most recent Tweets and retweets posted by the authenticating user and the users they follow.
The home timeline is central to how most users interact with the Twitter service.

Up to 800 Tweets are obtainable on the home timeline. It is more volatile for users that follow many
users or follow users who tweet frequently.


```js
twitter.statuses.home_timeline({}, context)
```

#### Input
* input `object`
  * count `integer`: Specifies the number of records to retrieve. Must be less than or equal to 200.
  * max_id `integer`: Returns results with an ID less than (that is, older than) or equal to the specified ID.
  * since_id `integer`: Returns results with an ID greater than (that is, more recent than) the specified ID. There are
  * trim_user `string`: When set to either true, t or 1, each tweet returned in a timeline will include a user object
  * exclude_replies `string`: This parameter will prevent replies from appearing in the returned timeline. Using exclude_replies
  * contributor_details `string`: This parameter enhances the contributors element of the status response to include the screen_name

#### Output
*Output schema unknown*

### statuses.mentions.timeline
Returns the 20
most recent mentions (tweets containing a users's @screen_name) for the authenticating user.The
timeline returned is the equivalent of the one seen when you view your mentions on twitter.com.This
method can only return up to 800 statuses.This method will include retweets in the JSON response
regardless of whether the include_rts parameter is set.


```js
twitter.statuses.mentions.timeline({}, context)
```

#### Input
* input `object`
  * count `integer`: Specifies the number of tweets to try and retrieve, up to a maximum of 200. The value of count is
  * since_id `integer`: Returns results with an ID greater than (that is, more recent than) the specified ID. There are
  * max_id `integer`: Returns results with an ID less than (that is, older than) or equal to the specified ID.
  * trim_user `string`: When set to either true, t or 1, each tweet returned in a timeline will include a user object
  * contributor_details `string`: This parameter enhances the contributors element of the status response to include the screen_name
  * include_entities `boolean`: The entities node will be disincluded when set to false.

#### Output
*Output schema unknown*

### statuses.oembed
Returns information allowing
the creation of an embedded representation of a Tweet on third party sites. See the oEmbed
specification (http://oembed.com) for information about the response format. Either the id or url
parameters must be specified in a request, it is not necessary to include both. While this endpoint
allows a bit of customization for the final appearance of the embedded Tweet, be aware that the
appearance of the rendered Tweet may change over time to be consistent with Twitter's Display
Guidelines (https://dev.twitter.com/terms/display-guidelines). Do not rely on any class or id
parameters to stay constant in the returned markup.


```js
twitter.statuses.oembed({}, context)
```

#### Input
* input `object`
  * maxwidth `integer`: The maximum width in pixels that the embed should be rendered at. This value is constrained to be
  * hide_media `string`: Specifies whether the embedded Tweet should automatically expand images which were uploaded via
  * hide_thread `string`: Specifies whether the embedded Tweet should automatically show the original message in the case
  * omit_script `string`: Specifies whether the embedded Tweet HTML should include a
  * align `string` (values: left, right, center, none): Specifies whether the embedded Tweet should be left aligned, right aligned, or centered in the
  * related `string`: A value for the TWT related parameter, as described in Web Intents
  * lang `string`: Language code for the rendered embed. This will affect the text and localization of the rendered

#### Output
*Output schema unknown*

### statusesretweetid
Retweets a tweet.
Returns
the original tweet with retweet details embedded.


```js
twitter.statusesretweetid({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The numerical ID of the desired status.
  * trim_user `string`: When set to either true, t or 1, each tweet returned in a timeline will include a user object

#### Output
*Output schema unknown*

### statuses.retweets
Returns up to 100 of
the
first retweets of a given tweet.


```js
twitter.statuses.retweets({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The numerical ID of the desired status.
  * count `string`: Specifies the number of records to retrieve. Must be less than or equal to 100.
  * trim_user `string`: When set to either true, t or 1, each tweet returned in a timeline will include a user object

#### Output
*Output schema unknown*

### statuses.show
Returns a single status,
specified by the id parameter below. The status's author will be returned inline.


```js
twitter.statuses.show({
  "id": "",
  "id_query": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * id_query **required** `string`: The numerical ID of the desired status.
  * trim_user `string`: When set to either true, t or 1, each tweet returned in a timeline will include a user object
  * include_my_retweet `string`: When set to either true, t or 1, any Tweets returned that have been retweeted by the authenticating
  * include_entities `string`: The entities node will be disincluded when set to false.

#### Output
*Output schema unknown*

### statuses.update
Updates the authenticating
user's status, also known as tweeting. To upload an image to accompany the tweet, use POST
statuses/update_with_media (https://dev.twitter.com/docs/api/1/post/statuses/update_with_media). For
each update attempt, the update text is compared with the authenticating user's recent tweets. Any
attempt that would result in duplication will be blocked, resulting in a 403 error. Therefore, a
user cannot submit the same status twice in a row. While not rate limited by the API a user is
limited in the number of tweets they can create at a time. If the number of updates posted by the
user reaches the current allowed limit this method will return an HTTP 403 error.


```js
twitter.statuses.update({
  "status": ""
}, context)
```

#### Input
* input `object`
  * status **required** `string`: The text of your status update, typically up to 140 characters. URL encode as necessary. t.co link
  * in_reply_to_status_id `string`: The ID of an existing status that the update is in reply to. Note: This parameter will be ignored
  * lat `string`: The latitude of the location this tweet refers to. This parameter will be ignored unless it is
  * long `string`: The longitude of the location this tweet refers to. The valid ranges for longitude is -180.0 to
  * place_id `string`: A place in the world. These IDs can be retrieved from GET geo/reverse_geocode
  * display_coordinates `string` (values: false, true, ): Whether or not to put a pin on the exact coordinates a tweet has been sent from.
  * trim_user `string`: When set to either true, t or 1, each tweet returned in a timeline will include a user object

#### Output
*Output schema unknown*

### statuses.update_with_media
Updates the
authenticating user's status and attaches media for upload. Unlike POST statuses/update
(https://dev.twitter.com/docs/api/1.1/post/statuses/update), this method expects raw multipart data.
Your POST request's Content-Type should be set to multipart/form-data with the media[] parameter.
The Tweet text will be rewritten to include the media URL(s), which will reduce the number of
characters allowed in the Tweet text. If the URL(s) cannot be appended without text truncation, the
tweet will be rejected and this method will return an HTTP 403 error. Important: Make sure that
you're using upload.twitter.com as your host while posting statuses with media. It is strongly
recommended to use SSL with this method.


```js
twitter.statuses.update_with_media({
  "Content-Type": "",
  "status": "",
  "media": ""
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: Content type.
  * status **required** `string`: The text of your status update. URL encode as necessary. t.co link wrapping
  * media **required** `string`: Up to max_media_per_upload files may be specified in the request, each named media[]. Supported
  * possibly_sensitive `string`: Set to true for content which may not be suitable for every audience.
  * in_reply_to_status_id `string`: The ID of an existing status that the update is in reply to. Note: This parameter will be ignored
  * lat `string`: The latitude of the location this tweet refers to. This parameter will be ignored unless it is
  * long `string`: The longitude of the location this tweet refers to. The valid ranges for longitude is -180.0 to
  * place_id `string`: A place in the world identified by a Twitter place ID. Place IDs can be retrieved from
  * display_coordinates `string`: Whether or not to put a pin on the exact coordinates a tweet has been sent from.

#### Output
*Output schema unknown*

### statuses.user_timeline
Returns the 20 most
recent statuses posted by the authenticating user. It is also possible to request another user's
timeline by using the screen_name or user_id parameter. The other users timeline will only be
visible if they are not protected, or if the authenticating user's follow request was accepted by
the protected user. The timeline returned is the equivalent of the one seen when you view a user's
profile on twitter.com. This method can only return up to 3,200 of a user's most recent statuses.
Native retweets of other statuses by the user is included in this total, regardless of whether
include_rts is specified when requesting this resource. This method will not include retweets in the
XML and JSON responses unless the include_rts parameter is set. The RSS and Atom responses will
always include retweets as statuses prefixed with RT, regardless of provided parameters. Always
specify either an user_id or screen_name when requesting a user timeline.


```js
twitter.statuses.user_timeline({}, context)
```

#### Input
* input `object`
  * count `integer`: Specifies the number of tweets to try and retrieve, up to a maximum of 200. The value of count is
  * since_id `integer`: Returns results with an ID greater than (that is, more recent than) the specified ID. There are
  * max_id `integer`: Returns results with an ID less than (that is, older than) or equal to the specified ID.
  * trim_user `string`: When set to either true, t or 1, each tweet returned in a timeline will include a user object
  * exclude_replies `boolean`: This parameter will prevent replies from appearing in the returned timeline. Using exclude_replies
  * contributor_details `boolean`: This parameter enhances the contributors element of the status response to include the screen_name
  * include_rts `boolean`: When set to false, the timeline will strip any native retweets (though they will still count toward

#### Output
*Output schema unknown*

### trends.available
Returns the locations that
Twitter has trending topic information for.

The response is an array of "locations" that encode the location's WOEID and some other
human-readable information such as a canonical name and country the location belongs in.

A WOEID is a Yahoo! Where On Earth ID.


```js
twitter.trends.available(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### trends.closest
Returns the locations that
Twitter has trending topic information for, closest to a specified location.

The response is an array of "locations" that encode the location's WOEID and some other
human-readable information such as a canonical name and country the location belongs in.

A WOEID is a Yahoo! Where On Earth ID.


```js
twitter.trends.closest({}, context)
```

#### Input
* input `object`
  * lat `string`: If provided with a long parameter the available trend locations will be sorted by distance, nearest
  * long `string`: If provided with a lat parameter the available trend locations will be sorted by distance, nearest

#### Output
*Output schema unknown*

### trends.place
Returns the top 10 trending
topics for a specific WOEID, if trending information is available for it.

The response is an array of "trend" objects that encode the name of the trending topic, the query
parameter that can be used to search for the topic on Twitter Search, and the Twitter Search URL.

This information is cached for 5 minutes. Requesting more frequently than that will not return any
more data, and will count against your rate limit usage.


```js
twitter.trends.place({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The Yahoo! Where On Earth ID of the location to return trending information for. Global information
  * exclude `string`: Setting this equal to hashtags will remove all hashtags from the trends list.

#### Output
*Output schema unknown*

### users.contributees
Returns a collection of
users that the specified user can contribute to.


```js
twitter.users.contributees({}, context)
```

#### Input
* input `object`
  * include_entities `string`: The entities node will be disincluded when set to false. Example Values: false
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.

#### Output
*Output schema unknown*

### users.contributors
Returns a collection of
users who can contribute to the specified account.


```js
twitter.users.contributors({}, context)
```

#### Input
* input `object`
  * include_entities `string`: The entities node will be disincluded when set to false. Example Values: false
  * skip_status `string`: When set to either true, t or 1 statuses will not be included in the returned user objects.

#### Output
*Output schema unknown*

### users.lookup
Returns fully-hydrated user
objects for up to 100 users per request, as specified by comma-separated values passed to the
user_id and/or screen_name parameters.

This method is especially useful when used in conjunction with collections of user IDs returned from
GET friends/ids and GET followers/ids.

GET users/show is used to retrieve a single user object.


```js
twitter.users.lookup({}, context)
```

#### Input
* input `object`
  * screen_name `string`: A comma separated list of screen names, up to 100 are allowed in a single request. You are strongly
  * user_id `string`: A comma separated list of user IDs, up to 100 are allowed in a single request. You are strongly
  * include_entities `string`: The entities node that may appear within embedded statuses will be disincluded when set to false.

#### Output
*Output schema unknown*

### users.report_spam
The user
specified in the id is blocked by the authenticated user and reported as a spammer.


```js
twitter.users.report_spam(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### users.search
Provides a simple,
relevance-based search interface to public user accounts on Twitter. Try querying by topical
interest, full name, company name, location, or other criteria. Exact match searches are not
supported.

Only the first 1,000 matching results are available.


```js
twitter.users.search({
  "q": ""
}, context)
```

#### Input
* input `object`
  * q **required** `string`: The search query to run against people search.
  * page `string`: Specifies the page of results to retrieve.
  * count `string`: The number of potential user results to retrieve per page. This value has a maximum of 20.
  * include_entities `string`: The entities node will be disincluded when set to false.

#### Output
*Output schema unknown*

### users.show
Returns a variety of information
about the user specified by the required user_id or screen_name parameter. The author's most recent
Tweet will be returned inline when possible.

GET users/lookup is used to retrieve a bulk collection of user objects.


```js
twitter.users.show({
  "screen_name": "",
  "user_id": ""
}, context)
```

#### Input
* input `object`
  * screen_name **required** `string`: The screen name of the user for whom to return results for. Either a id or screen_name is required
  * user_id **required** `string`: The ID of the user for whom to return results for. Either an id or screen_name is required for this
  * include_entities `string`: The entities node will be disincluded when set to false.

#### Output
*Output schema unknown*

### users.suggestions
Access to Twitter's
suggested user list. This returns the list of suggested user categories. The category can be used in
GET users/suggestions/:slug to get the users in that category.


```js
twitter.users.suggestions({}, context)
```

#### Input
* input `object`
  * lang `string`: Restricts the suggested categories to the requested language. The language must be specified by the

#### Output
*Output schema unknown*

### users.suggestions.slug
Access the users in
a given category of the Twitter suggested user list. It is recommended that applications cache this
data for no more than one hour.


```js
twitter.users.suggestions.slug({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: The short name of list or a category
  * lang `string`: Restricts the suggested categories to the requested language. The language must be specified by the

#### Output
*Output schema unknown*

### users.suggestionsslugmembers
Access the
users in a given category of the Twitter suggested user list and return their most recent status if
they are not a protected user.


```js
twitter.users.suggestionsslugmembers({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: The short name of list or a category

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
