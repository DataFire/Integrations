# @datafire/google_plusdomains

Client library for Google+ Domains

## Installation and Usage
```bash
npm install --save @datafire/google_plusdomains
```
```js
let google_plusdomains = require('@datafire/google_plusdomains').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_plusdomains.activities.get({}).then(data => {
  console.log(data);
})
```

## Description

Builds on top of the Google+ platform for Google Apps Domains.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_plusdomains.oauthCallback({
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
google_plusdomains.oauthRefresh(null, context)
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

### activities.get
Get an activity.


```js
google_plusdomains.activities.get({
  "activityId": ""
}, context)
```

#### Input
* input `object`
  * activityId **required** `string`: The ID of the activity to get.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Activity](#activity)

### comments.list
List all of the comments for an activity.


```js
google_plusdomains.comments.list({
  "activityId": ""
}, context)
```

#### Input
* input `object`
  * activityId **required** `string`: The ID of the activity to get comments for.
  * maxResults `integer`: The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
  * pageToken `string`: The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
  * sortOrder `string` (values: ascending, descending): The order in which to sort the list of comments.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CommentFeed](#commentfeed)

### comments.insert
Create a new comment in reply to an activity.


```js
google_plusdomains.comments.insert({
  "activityId": ""
}, context)
```

#### Input
* input `object`
  * activityId **required** `string`: The ID of the activity to reply to.
  * body [Comment](#comment)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Comment](#comment)

### people.listByActivity
List all of the people in the specified collection for a particular activity.


```js
google_plusdomains.people.listByActivity({
  "activityId": "",
  "collection": ""
}, context)
```

#### Input
* input `object`
  * activityId **required** `string`: The ID of the activity to get the list of people for.
  * collection **required** `string` (values: plusoners, resharers, sharedto): The collection of people to list.
  * maxResults `integer`: The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
  * pageToken `string`: The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PeopleFeed](#peoplefeed)

### circles.remove
Delete a circle.


```js
google_plusdomains.circles.remove({
  "circleId": ""
}, context)
```

#### Input
* input `object`
  * circleId **required** `string`: The ID of the circle to delete.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### circles.get
Get a circle.


```js
google_plusdomains.circles.get({
  "circleId": ""
}, context)
```

#### Input
* input `object`
  * circleId **required** `string`: The ID of the circle to get.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Circle](#circle)

### circles.patch
Update a circle's description. This method supports patch semantics.


```js
google_plusdomains.circles.patch({
  "circleId": ""
}, context)
```

#### Input
* input `object`
  * circleId **required** `string`: The ID of the circle to update.
  * body [Circle](#circle)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Circle](#circle)

### circles.update
Update a circle's description.


```js
google_plusdomains.circles.update({
  "circleId": ""
}, context)
```

#### Input
* input `object`
  * circleId **required** `string`: The ID of the circle to update.
  * body [Circle](#circle)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Circle](#circle)

### circles.removePeople
Remove a person from a circle.


```js
google_plusdomains.circles.removePeople({
  "circleId": ""
}, context)
```

#### Input
* input `object`
  * circleId **required** `string`: The ID of the circle to remove the person from.
  * email `array`: Email of the people to add to the circle. Optional, can be repeated.
  * userId `array`: IDs of the people to remove from the circle. Optional, can be repeated.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### people.listByCircle
List all of the people who are members of a circle.


```js
google_plusdomains.people.listByCircle({
  "circleId": ""
}, context)
```

#### Input
* input `object`
  * circleId **required** `string`: The ID of the circle to get the members of.
  * maxResults `integer`: The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
  * pageToken `string`: The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PeopleFeed](#peoplefeed)

### circles.addPeople
Add a person to a circle. Google+ limits certain circle operations, including the number of circle adds. Learn More.


```js
google_plusdomains.circles.addPeople({
  "circleId": ""
}, context)
```

#### Input
* input `object`
  * circleId **required** `string`: The ID of the circle to add the person to.
  * email `array`: Email of the people to add to the circle. Optional, can be repeated.
  * userId `array`: IDs of the people to add to the circle. Optional, can be repeated.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Circle](#circle)

### comments.get
Get a comment.


```js
google_plusdomains.comments.get({
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`: The ID of the comment to get.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Comment](#comment)

### people.get
Get a person's profile.


```js
google_plusdomains.people.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Person](#person)

### activities.insert
Create a new activity for the authenticated user.


```js
google_plusdomains.activities.insert({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The ID of the user to create the activity on behalf of. Its value should be "me", to indicate the authenticated user.
  * preview `boolean`: If "true", extract the potential media attachments for a URL. The response will include all possible attachments for a URL, including video, photos, and articles based on the content of the page.
  * body [Activity](#activity)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Activity](#activity)

### activities.list
List all of the activities in the specified collection for a particular user.


```js
google_plusdomains.activities.list({
  "userId": "",
  "collection": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
  * collection **required** `string` (values: user): The collection of activities to list.
  * maxResults `integer`: The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
  * pageToken `string`: The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ActivityFeed](#activityfeed)

### audiences.list
List all of the audiences to which a user can share.


```js
google_plusdomains.audiences.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The ID of the user to get audiences for. The special value "me" can be used to indicate the authenticated user.
  * maxResults `integer`: The maximum number of circles to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
  * pageToken `string`: The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AudiencesFeed](#audiencesfeed)

### circles.list
List all of the circles for a user.


```js
google_plusdomains.circles.list({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The ID of the user to get circles for. The special value "me" can be used to indicate the authenticated user.
  * maxResults `integer`: The maximum number of circles to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
  * pageToken `string`: The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CircleFeed](#circlefeed)

### circles.insert
Create a new circle for the authenticated user.


```js
google_plusdomains.circles.insert({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The ID of the user to create the circle on behalf of. The value "me" can be used to indicate the authenticated user.
  * body [Circle](#circle)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Circle](#circle)

### media.insert
Add a new media item to an album. The current upload size limitations are 36MB for a photo and 1GB for a video. Uploads do not count against quota if photos are less than 2048 pixels on their longest side or videos are less than 15 minutes in length.


```js
google_plusdomains.media.insert({
  "userId": "",
  "collection": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The ID of the user to create the activity on behalf of.
  * collection **required** `string` (values: cloud)
  * body [Media](#media)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Media](#media)

### people.list
List all of the people in the specified collection.


```js
google_plusdomains.people.list({
  "userId": "",
  "collection": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
  * collection **required** `string` (values: circled): The collection of people to list.
  * maxResults `integer`: The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
  * orderBy `string` (values: alphabetical, best): The order to return people in.
  * pageToken `string`: The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PeopleFeed](#peoplefeed)



## Definitions

### Acl
* Acl `object`
  * description `string`: Description of the access granted, suitable for display.
  * domainRestricted `boolean`: Whether access is restricted to the domain.
  * items `array`: The list of access entries.
    * items [PlusDomainsAclentryResource](#plusdomainsaclentryresource)
  * kind `string`: Identifies this resource as a collection of access controls. Value: "plus#acl".

### Activity
* Activity `object`
  * access [Acl](#acl)
  * actor `object`: The person who performed this activity.
    * clientSpecificActorInfo `object`: Actor info specific to particular clients.
      * youtubeActorInfo `object`: Actor info specific to YouTube clients.
        * channelId `string`: ID of the YouTube channel owned by the Actor.
    * displayName `string`: The name of the actor, suitable for display.
    * id `string`: The ID of the actor's Person resource.
    * image `object`: The image representation of the actor.
      * url `string`: The URL of the actor's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.
    * name `object`: An object representation of the individual components of name.
      * familyName `string`: The family name ("last name") of the actor.
      * givenName `string`: The given name ("first name") of the actor.
    * url `string`: The link to the actor's Google profile.
    * verification `object`: Verification status of actor.
      * adHocVerified `string`: Verification for one-time or manual processes.
  * address `string`: Street address where this activity occurred.
  * annotation `string`: Additional content added by the person who shared this activity, applicable only when resharing an activity.
  * crosspostSource `string`: If this activity is a crosspost from another system, this property specifies the ID of the original activity.
  * etag `string`: ETag of this response for caching purposes.
  * geocode `string`: Latitude and longitude where this activity occurred. Format is latitude followed by longitude, space separated.
  * id `string`: The ID of this activity.
  * kind `string`: Identifies this resource as an activity. Value: "plus#activity".
  * location [Place](#place)
  * object `object`: The object of this activity.
    * actor `object`: If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.
      * clientSpecificActorInfo `object`: Actor info specific to particular clients.
        * youtubeActorInfo `object`: Actor info specific to YouTube clients.
          * channelId `string`: ID of the YouTube channel owned by the Actor.
      * displayName `string`: The original actor's name, which is suitable for display.
      * id `string`: ID of the original actor.
      * image `object`: The image representation of the original actor.
        * url `string`: A URL that points to a thumbnail photo of the original actor.
      * url `string`: A link to the original actor's Google profile.
      * verification `object`: Verification status of actor.
        * adHocVerified `string`: Verification for one-time or manual processes.
    * attachments `array`: The media objects attached to this activity.
      * items `object`
        * content `string`: If the attachment is an article, this property contains a snippet of text from the article. It can also include descriptions for other types.
        * displayName `string`: The title of the attachment, such as a photo caption or an article title.
        * embed `object`: If the attachment is a video, the embeddable link.
          * type `string`: Media type of the link.
          * url `string`: URL of the link.
        * fullImage `object`: The full image URL for photo attachments.
          * height `integer`: The height, in pixels, of the linked resource.
          * type `string`: Media type of the link.
          * url `string`: URL of the image.
          * width `integer`: The width, in pixels, of the linked resource.
        * id `string`: The ID of the attachment.
        * image `object`: The preview image for photos or videos.
          * height `integer`: The height, in pixels, of the linked resource.
          * type `string`: Media type of the link.
          * url `string`: Image URL.
          * width `integer`: The width, in pixels, of the linked resource.
        * objectType `string`: The type of media object. Possible values include, but are not limited to, the following values:  
        * previewThumbnails `array`: When previewing, these are the optional thumbnails for the post. When posting an article, choose one by setting the attachment.image.url property. If you don't choose one, one will be chosen for you.
          * items `object`
            * url `string`: URL of the thumbnail image.
        * thumbnails `array`: If the attachment is an album, this property is a list of potential additional thumbnails from the album.
          * items `object`
            * description `string`: Potential name of the thumbnail.
            * image `object`: Image resource.
              * height `integer`: The height, in pixels, of the linked resource.
              * type `string`: Media type of the link.
              * url `string`: Image url.
              * width `integer`: The width, in pixels, of the linked resource.
            * url `string`: URL of the webpage containing the image.
        * url `string`: The link to the attachment, which should be of type text/html.
    * content `string`: The HTML-formatted content, which is suitable for display.
    * id `string`: The ID of the object. When resharing an activity, this is the ID of the activity that is being reshared.
    * objectType `string`: The type of the object. Possible values include, but are not limited to, the following values:  
    * originalContent `string`: The content (text) as provided by the author, which is stored without any HTML formatting. When creating or updating an activity, this value must be supplied as plain text in the request.
    * plusoners `object`: People who +1'd this activity.
      * selfLink `string`: The URL for the collection of people who +1'd this activity.
      * totalItems `integer`: Total number of people who +1'd this activity.
    * replies `object`: Comments in reply to this activity.
      * selfLink `string`: The URL for the collection of comments in reply to this activity.
      * totalItems `integer`: Total number of comments on this activity.
    * resharers `object`: People who reshared this activity.
      * selfLink `string`: The URL for the collection of resharers.
      * totalItems `integer`: Total number of people who reshared this activity.
    * statusForViewer `object`: Status of the activity as seen by the viewer.
      * canComment `boolean`: Whether the viewer can comment on the activity.
      * canPlusone `boolean`: Whether the viewer can +1 the activity.
      * canUpdate `boolean`: Whether the viewer can edit or delete the activity.
      * isPlusOned `boolean`: Whether the viewer has +1'd the activity.
      * resharingDisabled `boolean`: Whether reshares are disabled for the activity.
    * url `string`: The URL that points to the linked resource.
  * placeId `string`: ID of the place where this activity occurred.
  * placeName `string`: Name of the place where this activity occurred.
  * provider `object`: The service provider that initially published this activity.
    * title `string`: Name of the service provider.
  * published `string`: The time at which this activity was initially published. Formatted as an RFC 3339 timestamp.
  * radius `string`: Radius, in meters, of the region where this activity occurred, centered at the latitude and longitude identified in geocode.
  * title `string`: Title of this activity.
  * updated `string`: The time at which this activity was last updated. Formatted as an RFC 3339 timestamp.
  * url `string`: The link to this activity.
  * verb `string`: This activity's verb, which indicates the action that was performed. Possible values include, but are not limited to, the following values:  

### ActivityFeed
* ActivityFeed `object`
  * etag `string`: ETag of this response for caching purposes.
  * id `string`: The ID of this collection of activities. Deprecated.
  * items `array`: The activities in this page of results.
    * items [Activity](#activity)
  * kind `string`: Identifies this resource as a collection of activities. Value: "plus#activityFeed".
  * nextLink `string`: Link to the next page of activities.
  * nextPageToken `string`: The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
  * selfLink `string`: Link to this activity resource.
  * title `string`: The title of this collection of activities, which is a truncated portion of the content.
  * updated `string`: The time at which this collection of activities was last updated. Formatted as an RFC 3339 timestamp.

### Audience
* Audience `object`
  * etag `string`: ETag of this response for caching purposes.
  * item [PlusDomainsAclentryResource](#plusdomainsaclentryresource)
  * kind `string`: Identifies this resource as an audience. Value: "plus#audience".
  * memberCount `integer`: The number of people in this circle. This only applies if entity_type is CIRCLE.
  * visibility `string`: The circle members' visibility as chosen by the owner of the circle. This only applies for items with "item.type" equals "circle". Possible values are:  

### AudiencesFeed
* AudiencesFeed `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The audiences in this result.
    * items [Audience](#audience)
  * kind `string`: Identifies this resource as a collection of audiences. Value: "plus#audienceFeed".
  * nextPageToken `string`: The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
  * totalItems `integer`: The total number of ACL entries. The number of entries in this response may be smaller due to paging.

### Circle
* Circle `object`
  * description `string`: The description of this circle.
  * displayName `string`: The circle name.
  * etag `string`: ETag of this response for caching purposes.
  * id `string`: The ID of the circle.
  * kind `string`: Identifies this resource as a circle. Value: "plus#circle".
  * people `object`: The people in this circle.
    * totalItems `integer`: The total number of people in this circle.
  * selfLink `string`: Link to this circle resource

### CircleFeed
* CircleFeed `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The circles in this page of results.
    * items [Circle](#circle)
  * kind `string`: Identifies this resource as a collection of circles. Value: "plus#circleFeed".
  * nextLink `string`: Link to the next page of circles.
  * nextPageToken `string`: The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
  * selfLink `string`: Link to this page of circles.
  * title `string`: The title of this list of resources.
  * totalItems `integer`: The total number of circles. The number of circles in this response may be smaller due to paging.

### Comment
* Comment `object`
  * actor `object`: The person who posted this comment.
    * clientSpecificActorInfo `object`: Actor info specific to particular clients.
      * youtubeActorInfo `object`: Actor info specific to YouTube clients.
        * channelId `string`: ID of the YouTube channel owned by the Actor.
    * displayName `string`: The name of this actor, suitable for display.
    * id `string`: The ID of the actor.
    * image `object`: The image representation of this actor.
      * url `string`: The URL of the actor's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.
    * url `string`: A link to the Person resource for this actor.
    * verification `object`: Verification status of actor.
      * adHocVerified `string`: Verification for one-time or manual processes.
  * etag `string`: ETag of this response for caching purposes.
  * id `string`: The ID of this comment.
  * inReplyTo `array`: The activity this comment replied to.
    * items `object`
      * id `string`: The ID of the activity.
      * url `string`: The URL of the activity.
  * kind `string`: Identifies this resource as a comment. Value: "plus#comment".
  * object `object`: The object of this comment.
    * content `string`: The HTML-formatted content, suitable for display.
    * objectType `string`: The object type of this comment. Possible values are:  
    * originalContent `string`: The content (text) as provided by the author, stored without any HTML formatting. When creating or updating a comment, this value must be supplied as plain text in the request.
  * plusoners `object`: People who +1'd this comment.
    * totalItems `integer`: Total number of people who +1'd this comment.
  * published `string`: The time at which this comment was initially published. Formatted as an RFC 3339 timestamp.
  * selfLink `string`: Link to this comment resource.
  * updated `string`: The time at which this comment was last updated. Formatted as an RFC 3339 timestamp.
  * verb `string`: This comment's verb, indicating what action was performed. Possible values are:  

### CommentFeed
* CommentFeed `object`
  * etag `string`: ETag of this response for caching purposes.
  * id `string`: The ID of this collection of comments.
  * items `array`: The comments in this page of results.
    * items [Comment](#comment)
  * kind `string`: Identifies this resource as a collection of comments. Value: "plus#commentFeed".
  * nextLink `string`: Link to the next page of activities.
  * nextPageToken `string`: The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
  * title `string`: The title of this collection of comments.
  * updated `string`: The time at which this collection of comments was last updated. Formatted as an RFC 3339 timestamp.

### Media
* Media `object`
  * author `object`: The person who uploaded this media.
    * displayName `string`: The author's name.
    * id `string`: ID of the author.
    * image `object`: The author's Google profile image.
      * url `string`: The URL of the author's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.
    * url `string`: A link to the author's Google profile.
  * displayName `string`: The display name for this media.
  * etag `string`: ETag of this response for caching purposes.
  * exif `object`: Exif information of the media item.
    * time `string`: The time the media was captured. Formatted as an RFC 3339 timestamp.
  * height `integer`: The height in pixels of the original image.
  * id `string`: ID of this media, which is generated by the API.
  * kind `string`: The type of resource.
  * mediaCreatedTime `string`: The time at which this media was originally created in UTC. Formatted as an RFC 3339 timestamp that matches this example: 2010-11-25T14:30:27.655Z
  * mediaUrl `string`: The URL of this photo or video's still image.
  * published `string`: The time at which this media was uploaded. Formatted as an RFC 3339 timestamp.
  * sizeBytes `string`: The size in bytes of this video.
  * streams `array`: The list of video streams for this video. There might be several different streams available for a single video, either Flash or MPEG, of various sizes
    * items [Videostream](#videostream)
  * summary `string`: A description, or caption, for this media.
  * updated `string`: The time at which this media was last updated. This includes changes to media metadata. Formatted as an RFC 3339 timestamp.
  * url `string`: The URL for the page that hosts this media.
  * videoDuration `string`: The duration in milliseconds of this video.
  * videoStatus `string`: The encoding status of this video. Possible values are:  
  * width `integer`: The width in pixels of the original image.

### PeopleFeed
* PeopleFeed `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The people in this page of results. Each item includes the id, displayName, image, and url for the person. To retrieve additional profile data, see the people.get method.
    * items [Person](#person)
  * kind `string`: Identifies this resource as a collection of people. Value: "plus#peopleFeed".
  * nextPageToken `string`: The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
  * selfLink `string`: Link to this resource.
  * title `string`: The title of this collection of people.
  * totalItems `integer`: The total number of people available in this list. The number of people in a response might be smaller due to paging. This might not be set for all collections.

### Person
* Person `object`
  * aboutMe `string`: A short biography for this person.
  * birthday `string`: The person's date of birth, represented as YYYY-MM-DD.
  * braggingRights `string`: The "bragging rights" line of this person.
  * circledByCount `integer`: For followers who are visible, the number of people who have added this person or page to a circle.
  * cover `object`: The cover photo content.
    * coverInfo `object`: Extra information about the cover photo.
      * leftImageOffset `integer`: The difference between the left position of the cover image and the actual displayed cover image. Only valid for banner layout.
      * topImageOffset `integer`: The difference between the top position of the cover image and the actual displayed cover image. Only valid for banner layout.
    * coverPhoto `object`: The person's primary cover image.
      * height `integer`: The height of the image.
      * url `string`: The URL of the image.
      * width `integer`: The width of the image.
    * layout `string`: The layout of the cover art. Possible values include, but are not limited to, the following values:  
  * currentLocation `string`: (this field is not currently used)
  * displayName `string`: The name of this person, which is suitable for display.
  * domain `string`: The hosted domain name for the user's Google Apps account. For instance, example.com. The plus.profile.emails.read or email scope is needed to get this domain name.
  * emails `array`: A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address.
    * items `object`
      * type `string`: The type of address. Possible values include, but are not limited to, the following values:  
      * value `string`: The email address.
  * etag `string`: ETag of this response for caching purposes.
  * gender `string`: The person's gender. Possible values include, but are not limited to, the following values:  
  * id `string`: The ID of this person.
  * image `object`: The representation of the person's profile photo.
    * isDefault `boolean`: Whether the person's profile photo is the default one
    * url `string`: The URL of the person's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.
  * isPlusUser `boolean`: Whether this user has signed up for Google+.
  * kind `string`: Identifies this resource as a person. Value: "plus#person".
  * name `object`: An object representation of the individual components of a person's name.
    * familyName `string`: The family name (last name) of this person.
    * formatted `string`: The full name of this person, including middle names, suffixes, etc.
    * givenName `string`: The given name (first name) of this person.
    * honorificPrefix `string`: The honorific prefixes (such as "Dr." or "Mrs.") for this person.
    * honorificSuffix `string`: The honorific suffixes (such as "Jr.") for this person.
    * middleName `string`: The middle name of this person.
  * nickname `string`: The nickname of this person.
  * objectType `string`: Type of person within Google+. Possible values include, but are not limited to, the following values:  
  * occupation `string`: The occupation of this person.
  * organizations `array`: A list of current or past organizations with which this person is associated.
    * items `object`
      * department `string`: The department within the organization. Deprecated.
      * description `string`: A short description of the person's role in this organization. Deprecated.
      * endDate `string`: The date that the person left this organization.
      * location `string`: The location of this organization. Deprecated.
      * name `string`: The name of the organization.
      * primary `boolean`: If "true", indicates this organization is the person's primary one, which is typically interpreted as the current one.
      * startDate `string`: The date that the person joined this organization.
      * title `string`: The person's job title or role within the organization.
      * type `string`: The type of organization. Possible values include, but are not limited to, the following values:  
  * placesLived `array`: A list of places where this person has lived.
    * items `object`
      * primary `boolean`: If "true", this place of residence is this person's primary residence.
      * value `string`: A place where this person has lived. For example: "Seattle, WA", "Near Toronto".
  * plusOneCount `integer`: If a Google+ Page, the number of people who have +1'd this page.
  * relationshipStatus `string`: The person's relationship status. Possible values include, but are not limited to, the following values:  
  * skills `string`: The person's skills.
  * tagline `string`: The brief description (tagline) of this person.
  * url `string`: The URL of this person's profile.
  * urls `array`: A list of URLs for this person.
    * items `object`
      * label `string`: The label of the URL.
      * type `string`: The type of URL. Possible values include, but are not limited to, the following values:  
      * value `string`: The URL value.
  * verified `boolean`: Whether the person or Google+ Page has been verified.

### Place
* Place `object`
  * address `object`: The physical address of the place.
    * formatted `string`: The formatted address for display.
  * displayName `string`: The display name of the place.
  * id `string`: The id of the place.
  * kind `string`: Identifies this resource as a place. Value: "plus#place".
  * position `object`: The position of the place.
    * latitude `number`: The latitude of this position.
    * longitude `number`: The longitude of this position.

### PlusDomainsAclentryResource
* PlusDomainsAclentryResource `object`
  * displayName `string`: A descriptive name for this entry. Suitable for display.
  * id `string`: The ID of the entry. For entries of type "person" or "circle", this is the ID of the resource. For other types, this property is not set.
  * type `string`: The type of entry describing to whom access is granted. Possible values are:  

### Videostream
* Videostream `object`
  * height `integer`: The height, in pixels, of the video resource.
  * type `string`: MIME type of the video stream.
  * url `string`: URL of the video stream.
  * width `integer`: The width, in pixels, of the video resource.


