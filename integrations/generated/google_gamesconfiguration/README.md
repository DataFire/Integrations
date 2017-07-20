# @datafire/google_gamesconfiguration

Client library for Google Play Game Services Publishing

## Installation and Usage
```bash
npm install --save datafire @datafire/google_gamesconfiguration
```

```js
let datafire = require('datafire');
let google_gamesconfiguration = require('@datafire/google_gamesconfiguration').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_gamesconfiguration: account,
  }
})


google_gamesconfiguration.achievementConfigurations.delete({}, context).then(data => {
  console.log(data);
})
```

## Description
The Publishing API for Google Play Game Services.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_gamesconfiguration.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_gamesconfiguration.oauthRefresh(null, context)
```


### achievementConfigurations.delete
Delete the achievement configuration with the given ID.


```js
google_gamesconfiguration.achievementConfigurations.delete({
  "achievementId": ""
}, context)
```

#### Parameters
* achievementId (string) **required** - The ID of the achievement used by this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### achievementConfigurations.get
Retrieves the metadata of the achievement configuration with the given ID.


```js
google_gamesconfiguration.achievementConfigurations.get({
  "achievementId": ""
}, context)
```

#### Parameters
* achievementId (string) **required** - The ID of the achievement used by this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### achievementConfigurations.patch
Update the metadata of the achievement configuration with the given ID. This method supports patch semantics.


```js
google_gamesconfiguration.achievementConfigurations.patch({
  "achievementId": ""
}, context)
```

#### Parameters
* achievementId (string) **required** - The ID of the achievement used by this method.
* body (object) - This is a JSON template for an achievement configuration resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### achievementConfigurations.update
Update the metadata of the achievement configuration with the given ID.


```js
google_gamesconfiguration.achievementConfigurations.update({
  "achievementId": ""
}, context)
```

#### Parameters
* achievementId (string) **required** - The ID of the achievement used by this method.
* body (object) - This is a JSON template for an achievement configuration resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### achievementConfigurations.list
Returns a list of the achievement configurations in this application.


```js
google_gamesconfiguration.achievementConfigurations.list({
  "applicationId": ""
}, context)
```

#### Parameters
* applicationId (string) **required** - The application ID from the Google Play developer console.
* maxResults (integer) - The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified maxResults.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### achievementConfigurations.insert
Insert a new achievement configuration in this application.


```js
google_gamesconfiguration.achievementConfigurations.insert({
  "applicationId": ""
}, context)
```

#### Parameters
* applicationId (string) **required** - The application ID from the Google Play developer console.
* body (object) - This is a JSON template for an achievement configuration resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### leaderboardConfigurations.list
Returns a list of the leaderboard configurations in this application.


```js
google_gamesconfiguration.leaderboardConfigurations.list({
  "applicationId": ""
}, context)
```

#### Parameters
* applicationId (string) **required** - The application ID from the Google Play developer console.
* maxResults (integer) - The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified maxResults.
* pageToken (string) - The token returned by the previous request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### leaderboardConfigurations.insert
Insert a new leaderboard configuration in this application.


```js
google_gamesconfiguration.leaderboardConfigurations.insert({
  "applicationId": ""
}, context)
```

#### Parameters
* applicationId (string) **required** - The application ID from the Google Play developer console.
* body (object) - This is a JSON template for an leaderboard configuration resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### imageConfigurations.upload
Uploads an image for a resource with the given ID and image type.


```js
google_gamesconfiguration.imageConfigurations.upload({
  "resourceId": "",
  "imageType": ""
}, context)
```

#### Parameters
* resourceId (string) **required** - The ID of the resource used by this method.
* imageType (string) **required** - Selects which image in a resource for this method.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### leaderboardConfigurations.delete
Delete the leaderboard configuration with the given ID.


```js
google_gamesconfiguration.leaderboardConfigurations.delete({
  "leaderboardId": ""
}, context)
```

#### Parameters
* leaderboardId (string) **required** - The ID of the leaderboard.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### leaderboardConfigurations.get
Retrieves the metadata of the leaderboard configuration with the given ID.


```js
google_gamesconfiguration.leaderboardConfigurations.get({
  "leaderboardId": ""
}, context)
```

#### Parameters
* leaderboardId (string) **required** - The ID of the leaderboard.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### leaderboardConfigurations.patch
Update the metadata of the leaderboard configuration with the given ID. This method supports patch semantics.


```js
google_gamesconfiguration.leaderboardConfigurations.patch({
  "leaderboardId": ""
}, context)
```

#### Parameters
* leaderboardId (string) **required** - The ID of the leaderboard.
* body (object) - This is a JSON template for an leaderboard configuration resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### leaderboardConfigurations.update
Update the metadata of the leaderboard configuration with the given ID.


```js
google_gamesconfiguration.leaderboardConfigurations.update({
  "leaderboardId": ""
}, context)
```

#### Parameters
* leaderboardId (string) **required** - The ID of the leaderboard.
* body (object) - This is a JSON template for an leaderboard configuration resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

