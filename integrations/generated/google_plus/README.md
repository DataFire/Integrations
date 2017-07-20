# @datafire/google_plus

Client library for Google+

## Installation and Usage
```bash
npm install --save datafire @datafire/google_plus
```

```js
let datafire = require('datafire');
let google_plus = require('@datafire/google_plus').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_plus: account,
  }
})

google_plus.activities.search({}, context).then(data => {
  console.log(data);
})
```

## Description
Builds on top of the Google+ platform.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_plus.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_plus.oauthRefresh(null, context)
```


### activities.search
Search public activities.


```js
google_plus.activities.search({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - Full-text search query string.
* language (string) - Specify the preferred language to search with. See search language codes for available values.
* maxResults (integer) - The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
* orderBy (string) - Specifies how to order search results.
* pageToken (string) - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### activities.get
Get an activity.


```js
google_plus.activities.get({
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
google_plus.comments.list({
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

### people.listByActivity
List all of the people in the specified collection for a particular activity.


```js
google_plus.people.listByActivity({
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

### comments.get
Get a comment.


```js
google_plus.comments.get({
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

### people.search
Search all public profiles.


```js
google_plus.people.search({
  "query": ""
}, context)
```

#### Parameters
* query (string) **required** - Specify a query string for full text search of public text in all profiles.
* language (string) - Specify the preferred language to search with. See search language codes for available values.
* maxResults (integer) - The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.
* pageToken (string) - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### people.get
Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.


```js
google_plus.people.get({
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

### activities.list
List all of the activities in the specified collection for a particular user.


```js
google_plus.activities.list({
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

### people.list
List all of the people in the specified collection.


```js
google_plus.people.list({
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

