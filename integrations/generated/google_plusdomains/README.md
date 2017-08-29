# @datafire/google_plusdomains

Client library for Google+ Domains

## Installation and Usage
```bash
npm install --save datafire @datafire/google_plusdomains
```

```js
let datafire = require('datafire');
let google_plusdomains = require('@datafire/google_plusdomains').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_plusdomains.oauthRefresh(null, context)
```


### activities.get
Get an activity.


```js
google_plusdomains.activities.get({
  "activityId": ""
}, context)
```

#### Parameters
* activityId (string) **required** - The ID of the activity to get.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.list
List all of the comments for an activity.


```js
google_plusdomains.comments.list({
  "activityId": ""
}, context)
```

#### Parameters
* activityId (string) **required** - The ID of the activity to get comments for.
* maxResults (integer) - The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
* pageToken (string) - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
* sortOrder (string) - The order in which to sort the list of comments.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.insert
Create a new comment in reply to an activity.


```js
google_plusdomains.comments.insert({
  "activityId": ""
}, context)
```

#### Parameters
* activityId (string) **required** - The ID of the activity to reply to.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### people.listByActivity
List all of the people in the specified collection for a particular activity.


```js
google_plusdomains.people.listByActivity({
  "activityId": "",
  "collection": ""
}, context)
```

#### Parameters
* activityId (string) **required** - The ID of the activity to get the list of people for.
* collection (string) **required** - The collection of people to list.
* maxResults (integer) - The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
* pageToken (string) - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### circles.remove
Delete a circle.


```js
google_plusdomains.circles.remove({
  "circleId": ""
}, context)
```

#### Parameters
* circleId (string) **required** - The ID of the circle to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### circles.get
Get a circle.


```js
google_plusdomains.circles.get({
  "circleId": ""
}, context)
```

#### Parameters
* circleId (string) **required** - The ID of the circle to get.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### circles.patch
Update a circle's description. This method supports patch semantics.


```js
google_plusdomains.circles.patch({
  "circleId": ""
}, context)
```

#### Parameters
* circleId (string) **required** - The ID of the circle to update.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### circles.update
Update a circle's description.


```js
google_plusdomains.circles.update({
  "circleId": ""
}, context)
```

#### Parameters
* circleId (string) **required** - The ID of the circle to update.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### circles.removePeople
Remove a person from a circle.


```js
google_plusdomains.circles.removePeople({
  "circleId": ""
}, context)
```

#### Parameters
* circleId (string) **required** - The ID of the circle to remove the person from.
* email (array) - Email of the people to add to the circle. Optional, can be repeated.
* userId (array) - IDs of the people to remove from the circle. Optional, can be repeated.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### people.listByCircle
List all of the people who are members of a circle.


```js
google_plusdomains.people.listByCircle({
  "circleId": ""
}, context)
```

#### Parameters
* circleId (string) **required** - The ID of the circle to get the members of.
* maxResults (integer) - The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
* pageToken (string) - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### circles.addPeople
Add a person to a circle. Google+ limits certain circle operations, including the number of circle adds. Learn More.


```js
google_plusdomains.circles.addPeople({
  "circleId": ""
}, context)
```

#### Parameters
* circleId (string) **required** - The ID of the circle to add the person to.
* email (array) - Email of the people to add to the circle. Optional, can be repeated.
* userId (array) - IDs of the people to add to the circle. Optional, can be repeated.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### comments.get
Get a comment.


```js
google_plusdomains.comments.get({
  "commentId": ""
}, context)
```

#### Parameters
* commentId (string) **required** - The ID of the comment to get.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### people.get
Get a person's profile.


```js
google_plusdomains.people.get({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### activities.insert
Create a new activity for the authenticated user.


```js
google_plusdomains.activities.insert({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The ID of the user to create the activity on behalf of. Its value should be "me", to indicate the authenticated user.
* preview (boolean) - If "true", extract the potential media attachments for a URL. The response will include all possible attachments for a URL, including video, photos, and articles based on the content of the page.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### activities.list
List all of the activities in the specified collection for a particular user.


```js
google_plusdomains.activities.list({
  "userId": "",
  "collection": ""
}, context)
```

#### Parameters
* userId (string) **required** - The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.
* collection (string) **required** - The collection of activities to list.
* maxResults (integer) - The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
* pageToken (string) - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### audiences.list
List all of the audiences to which a user can share.


```js
google_plusdomains.audiences.list({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The ID of the user to get audiences for. The special value "me" can be used to indicate the authenticated user.
* maxResults (integer) - The maximum number of circles to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
* pageToken (string) - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### circles.list
List all of the circles for a user.


```js
google_plusdomains.circles.list({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The ID of the user to get circles for. The special value "me" can be used to indicate the authenticated user.
* maxResults (integer) - The maximum number of circles to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
* pageToken (string) - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### circles.insert
Create a new circle for the authenticated user.


```js
google_plusdomains.circles.insert({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - The ID of the user to create the circle on behalf of. The value "me" can be used to indicate the authenticated user.
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### media.insert
Add a new media item to an album. The current upload size limitations are 36MB for a photo and 1GB for a video. Uploads do not count against quota if photos are less than 2048 pixels on their longest side or videos are less than 15 minutes in length.


```js
google_plusdomains.media.insert({
  "userId": "",
  "collection": ""
}, context)
```

#### Parameters
* userId (string) **required** - The ID of the user to create the activity on behalf of.
* collection (string) **required**
* body (object)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### people.list
List all of the people in the specified collection.


```js
google_plusdomains.people.list({
  "userId": "",
  "collection": ""
}, context)
```

#### Parameters
* userId (string) **required** - Get the collection of people for the person identified. Use "me" to indicate the authenticated user.
* collection (string) **required** - The collection of people to list.
* maxResults (integer) - The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
* orderBy (string) - The order to return people in.
* pageToken (string) - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

