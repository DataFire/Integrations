# @datafire/google_games

Client library for Google Play Game Services

## Installation and Usage
```bash
npm install --save @datafire/google_games
```
```js
let google_games = require('@datafire/google_games').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_games.turnBasedMatches.sync({}).then(data => {
  console.log(data);
});
```

## Description

The API for Google Play Game Services.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_games.oauthCallback({
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
google_games.oauthRefresh(null, context)
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

### achievementDefinitions.list
Lists all the achievement definitions for your application.


```js
google_games.achievementDefinitions.list({}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AchievementDefinitionsListResponse](#achievementdefinitionslistresponse)

### achievements.updateMultiple
Updates multiple achievements for the currently authenticated player.


```js
google_games.achievements.updateMultiple({}, context)
```

#### Input
* input `object`
  * body [AchievementUpdateMultipleRequest](#achievementupdatemultiplerequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AchievementUpdateMultipleResponse](#achievementupdatemultipleresponse)

### achievements.increment
Increments the steps of the achievement with the given ID for the currently authenticated player.


```js
google_games.achievements.increment({
  "achievementId": "",
  "stepsToIncrement": 0
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * requestId `string`: A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
  * stepsToIncrement **required** `integer`: The number of steps to increment.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AchievementIncrementResponse](#achievementincrementresponse)

### achievements.reveal
Sets the state of the achievement with the given ID to REVEALED for the currently authenticated player.


```js
google_games.achievements.reveal({
  "achievementId": ""
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AchievementRevealResponse](#achievementrevealresponse)

### achievements.setStepsAtLeast
Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.


```js
google_games.achievements.setStepsAtLeast({
  "achievementId": "",
  "steps": 0
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * steps **required** `integer`: The minimum value to set the steps to.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AchievementSetStepsAtLeastResponse](#achievementsetstepsatleastresponse)

### achievements.unlock
Unlocks this achievement for the currently authenticated player.


```js
google_games.achievements.unlock({
  "achievementId": ""
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AchievementUnlockResponse](#achievementunlockresponse)

### applications.played
Indicate that the the currently authenticated user is playing your application.


```js
google_games.applications.played({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### applications.get
Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified platformType, the returned response will not include any instance data.


```js
google_games.applications.get({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * language `string`: The preferred language to use for strings returned by this method.
  * platformType `string` (values: ANDROID, IOS, WEB_APP): Restrict application details returned to the specific platform.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Application](#application)

### applications.verify
Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.


```js
google_games.applications.verify({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ApplicationVerifyResponse](#applicationverifyresponse)

### events.listDefinitions
Returns a list of the event definitions in this application.


```js
google_games.events.listDefinitions({}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EventDefinitionListResponse](#eventdefinitionlistresponse)

### events.listByPlayer
Returns a list showing the current progress on events in this application for the currently authenticated user.


```js
google_games.events.listByPlayer({}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PlayerEventListResponse](#playereventlistresponse)

### events.record
Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.


```js
google_games.events.record({}, context)
```

#### Input
* input `object`
  * body [EventRecordRequest](#eventrecordrequest)
  * language `string`: The preferred language to use for strings returned by this method.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EventUpdateResponse](#eventupdateresponse)

### leaderboards.list
Lists all the leaderboard metadata for your application.


```js
google_games.leaderboards.list({}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LeaderboardListResponse](#leaderboardlistresponse)

### scores.submitMultiple
Submits multiple scores to leaderboards.


```js
google_games.scores.submitMultiple({}, context)
```

#### Input
* input `object`
  * body [PlayerScoreSubmissionList](#playerscoresubmissionlist)
  * language `string`: The preferred language to use for strings returned by this method.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PlayerScoreListResponse](#playerscorelistresponse)

### leaderboards.get
Retrieves the metadata of the leaderboard with the given ID.


```js
google_games.leaderboards.get({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Leaderboard](#leaderboard)

### scores.submit
Submits a score to the specified leaderboard.


```js
google_games.scores.submit({
  "leaderboardId": "",
  "score": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * score **required** `string`: The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
  * scoreTag `string`: Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PlayerScoreResponse](#playerscoreresponse)

### scores.list
Lists the scores in a leaderboard, starting from the top.


```js
google_games.scores.list({
  "collection": "",
  "leaderboardId": "",
  "timeSpan": ""
}, context)
```

#### Input
* input `object`
  * collection **required** `string` (values: PUBLIC, SOCIAL, SOCIAL_1P): The collection of scores you're requesting.
  * language `string`: The preferred language to use for strings returned by this method.
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * maxResults `integer`: The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * timeSpan **required** `string` (values: ALL_TIME, DAILY, WEEKLY): The time span for the scores and ranks you're requesting.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LeaderboardScores](#leaderboardscores)

### scores.listWindow
Lists the scores in a leaderboard around (and including) a player's score.


```js
google_games.scores.listWindow({
  "collection": "",
  "leaderboardId": "",
  "timeSpan": ""
}, context)
```

#### Input
* input `object`
  * collection **required** `string` (values: PUBLIC, SOCIAL, SOCIAL_1P): The collection of scores you're requesting.
  * language `string`: The preferred language to use for strings returned by this method.
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * maxResults `integer`: The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * resultsAbove `integer`: The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
  * returnTopIfAbsent `boolean`: True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
  * timeSpan **required** `string` (values: ALL_TIME, DAILY, WEEKLY): The time span for the scores and ranks you're requesting.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LeaderboardScores](#leaderboardscores)

### metagame.getMetagameConfig
Return the metagame configuration data for the calling application.


```js
google_games.metagame.getMetagameConfig({}, context)
```

#### Input
* input `object`
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [MetagameConfig](#metagameconfig)

### players.list
Get the collection of players for the currently authenticated user.


```js
google_games.players.list({
  "collection": ""
}, context)
```

#### Input
* input `object`
  * collection **required** `string` (values: connected, playedWith, played_with, visible): Collection of players being retrieved
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PlayerListResponse](#playerlistresponse)

### players.get
Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set playerId to me.


```js
google_games.players.get({
  "playerId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * playerId **required** `string`: A player ID. A value of me may be used in place of the authenticated player's ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Player](#player)

### achievements.list
Lists the progress for all your application's achievements for the currently authenticated player.


```js
google_games.achievements.list({
  "playerId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * playerId **required** `string`: A player ID. A value of me may be used in place of the authenticated player's ID.
  * state `string` (values: ALL, HIDDEN, REVEALED, UNLOCKED): Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PlayerAchievementListResponse](#playerachievementlistresponse)

### metagame.listCategoriesByPlayer
List play data aggregated per category for the player corresponding to playerId.


```js
google_games.metagame.listCategoriesByPlayer({
  "collection": "",
  "playerId": ""
}, context)
```

#### Input
* input `object`
  * collection **required** `string` (values: all): The collection of categories for which data will be returned.
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * playerId **required** `string`: A player ID. A value of me may be used in place of the authenticated player's ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CategoryListResponse](#categorylistresponse)

### scores.get
Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, leaderboardId can be set to ALL to retrieve data for all leaderboards in a given time span.
NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.


```js
google_games.scores.get({
  "leaderboardId": "",
  "playerId": "",
  "timeSpan": ""
}, context)
```

#### Input
* input `object`
  * includeRankType `string` (values: ALL, PUBLIC, SOCIAL): The types of ranks to return. If the parameter is omitted, no ranks will be returned.
  * language `string`: The preferred language to use for strings returned by this method.
  * leaderboardId **required** `string`: The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
  * maxResults `integer`: The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * playerId **required** `string`: A player ID. A value of me may be used in place of the authenticated player's ID.
  * timeSpan **required** `string` (values: ALL, ALL_TIME, DAILY, WEEKLY): The time span for the scores and ranks you're requesting.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [PlayerLeaderboardScoreListResponse](#playerleaderboardscorelistresponse)

### quests.list
Get a list of quests for your application and the currently authenticated player.


```js
google_games.quests.list({
  "playerId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of quest resources to return in the response, used for paging. For any response, the actual number of quest resources returned may be less than the specified maxResults. Acceptable values are 1 to 50, inclusive. (Default: 50).
  * pageToken `string`: The token returned by the previous request.
  * playerId **required** `string`: A player ID. A value of me may be used in place of the authenticated player's ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [QuestListResponse](#questlistresponse)

### snapshots.list
Retrieves a list of snapshots created by your application for the player corresponding to the player ID.


```js
google_games.snapshots.list({
  "playerId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * playerId **required** `string`: A player ID. A value of me may be used in place of the authenticated player's ID.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [SnapshotListResponse](#snapshotlistresponse)

### pushtokens.update
Registers a push token for the current user and application.


```js
google_games.pushtokens.update({}, context)
```

#### Input
* input `object`
  * body [PushToken](#pushtoken)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### pushtokens.remove
Removes a push token for the current user and application. Removing a non-existent push token will report success.


```js
google_games.pushtokens.remove({}, context)
```

#### Input
* input `object`
  * body [PushTokenId](#pushtokenid)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### quests.accept
Indicates that the currently authorized user will participate in the quest.


```js
google_games.quests.accept({
  "questId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * questId **required** `string`: The ID of the quest.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Quest](#quest)

### questMilestones.claim
Report that a reward for the milestone corresponding to milestoneId for the quest corresponding to questId has been claimed by the currently authorized user.


```js
google_games.questMilestones.claim({
  "milestoneId": "",
  "questId": "",
  "requestId": ""
}, context)
```

#### Input
* input `object`
  * milestoneId **required** `string`: The ID of the milestone.
  * questId **required** `string`: The ID of the quest.
  * requestId **required** `string`: A numeric ID to ensure that the request is handled correctly across retries. Your client application must generate this ID randomly.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### revisions.check
Checks whether the games client is out of date.


```js
google_games.revisions.check({
  "clientRevision": ""
}, context)
```

#### Input
* input `object`
  * clientRevision **required** `string`: The revision of the client SDK used by your application. Format:
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RevisionCheckResponse](#revisioncheckresponse)

### rooms.list
Returns invitations to join rooms.


```js
google_games.rooms.list({}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of rooms to return in the response, used for paging. For any response, the actual number of rooms to return may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RoomList](#roomlist)

### rooms.create
Create a room. For internal use by the Games SDK only. Calling this method directly is unsupported.


```js
google_games.rooms.create({}, context)
```

#### Input
* input `object`
  * body [RoomCreateRequest](#roomcreaterequest)
  * language `string`: The preferred language to use for strings returned by this method.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Room](#room)

### rooms.get
Get the data for a room.


```js
google_games.rooms.get({
  "roomId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * roomId **required** `string`: The ID of the room.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Room](#room)

### rooms.decline
Decline an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.


```js
google_games.rooms.decline({
  "roomId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * roomId **required** `string`: The ID of the room.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Room](#room)

### rooms.dismiss
Dismiss an invitation to join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.


```js
google_games.rooms.dismiss({
  "roomId": ""
}, context)
```

#### Input
* input `object`
  * roomId **required** `string`: The ID of the room.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### rooms.join
Join a room. For internal use by the Games SDK only. Calling this method directly is unsupported.


```js
google_games.rooms.join({
  "roomId": ""
}, context)
```

#### Input
* input `object`
  * body [RoomJoinRequest](#roomjoinrequest)
  * language `string`: The preferred language to use for strings returned by this method.
  * roomId **required** `string`: The ID of the room.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Room](#room)

### rooms.leave
Leave a room. For internal use by the Games SDK only. Calling this method directly is unsupported.


```js
google_games.rooms.leave({
  "roomId": ""
}, context)
```

#### Input
* input `object`
  * body [RoomLeaveRequest](#roomleaverequest)
  * language `string`: The preferred language to use for strings returned by this method.
  * roomId **required** `string`: The ID of the room.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Room](#room)

### rooms.reportStatus
Updates sent by a client reporting the status of peers in a room. For internal use by the Games SDK only. Calling this method directly is unsupported.


```js
google_games.rooms.reportStatus({
  "roomId": ""
}, context)
```

#### Input
* input `object`
  * body [RoomP2PStatuses](#roomp2pstatuses)
  * language `string`: The preferred language to use for strings returned by this method.
  * roomId **required** `string`: The ID of the room.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RoomStatus](#roomstatus)

### snapshots.get
Retrieves the metadata for a given snapshot ID.


```js
google_games.snapshots.get({
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * snapshotId **required** `string`: The ID of the snapshot.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Snapshot](#snapshot)

### turnBasedMatches.list
Returns turn-based matches the player is or was involved in.


```js
google_games.turnBasedMatches.list({}, context)
```

#### Input
* input `object`
  * includeMatchData `boolean`: True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
  * language `string`: The preferred language to use for strings returned by this method.
  * maxCompletedMatches `integer`: The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
  * maxResults `integer`: The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TurnBasedMatchList](#turnbasedmatchlist)

### turnBasedMatches.create
Create a turn-based match.


```js
google_games.turnBasedMatches.create({}, context)
```

#### Input
* input `object`
  * body [TurnBasedMatchCreateRequest](#turnbasedmatchcreaterequest)
  * language `string`: The preferred language to use for strings returned by this method.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TurnBasedMatch](#turnbasedmatch)

### turnBasedMatches.sync
Returns turn-based matches the player is or was involved in that changed since the last sync call, with the least recent changes coming first. Matches that should be removed from the local cache will have a status of MATCH_DELETED.


```js
google_games.turnBasedMatches.sync({}, context)
```

#### Input
* input `object`
  * includeMatchData `boolean`: True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
  * language `string`: The preferred language to use for strings returned by this method.
  * maxCompletedMatches `integer`: The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
  * maxResults `integer`: The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TurnBasedMatchSync](#turnbasedmatchsync)

### turnBasedMatches.get
Get the data for a turn-based match.


```js
google_games.turnBasedMatches.get({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * includeMatchData `boolean`: Get match data along with metadata.
  * language `string`: The preferred language to use for strings returned by this method.
  * matchId **required** `string`: The ID of the match.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TurnBasedMatch](#turnbasedmatch)

### turnBasedMatches.cancel
Cancel a turn-based match.


```js
google_games.turnBasedMatches.cancel({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * matchId **required** `string`: The ID of the match.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### turnBasedMatches.decline
Decline an invitation to play a turn-based match.


```js
google_games.turnBasedMatches.decline({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * matchId **required** `string`: The ID of the match.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TurnBasedMatch](#turnbasedmatch)

### turnBasedMatches.dismiss
Dismiss a turn-based match from the match list. The match will no longer show up in the list and will not generate notifications.


```js
google_games.turnBasedMatches.dismiss({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * matchId **required** `string`: The ID of the match.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### turnBasedMatches.finish
Finish a turn-based match. Each player should make this call once, after all results are in. Only the player whose turn it is may make the first call to Finish, and can pass in the final match state.


```js
google_games.turnBasedMatches.finish({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * body [TurnBasedMatchResults](#turnbasedmatchresults)
  * language `string`: The preferred language to use for strings returned by this method.
  * matchId **required** `string`: The ID of the match.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TurnBasedMatch](#turnbasedmatch)

### turnBasedMatches.join
Join a turn-based match.


```js
google_games.turnBasedMatches.join({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * matchId **required** `string`: The ID of the match.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TurnBasedMatch](#turnbasedmatch)

### turnBasedMatches.leave
Leave a turn-based match when it is not the current player's turn, without canceling the match.


```js
google_games.turnBasedMatches.leave({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * matchId **required** `string`: The ID of the match.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TurnBasedMatch](#turnbasedmatch)

### turnBasedMatches.leaveTurn
Leave a turn-based match during the current player's turn, without canceling the match.


```js
google_games.turnBasedMatches.leaveTurn({
  "matchId": "",
  "matchVersion": 0
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * matchId **required** `string`: The ID of the match.
  * matchVersion **required** `integer`: The version of the match being updated.
  * pendingParticipantId `string`: The ID of another participant who should take their turn next. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TurnBasedMatch](#turnbasedmatch)

### turnBasedMatches.rematch
Create a rematch of a match that was previously completed, with the same participants. This can be called by only one player on a match still in their list; the player must have called Finish first. Returns the newly created match; it will be the caller's turn.


```js
google_games.turnBasedMatches.rematch({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * matchId **required** `string`: The ID of the match.
  * requestId `string`: A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TurnBasedMatchRematch](#turnbasedmatchrematch)

### turnBasedMatches.takeTurn
Commit the results of a player turn.


```js
google_games.turnBasedMatches.takeTurn({
  "matchId": ""
}, context)
```

#### Input
* input `object`
  * body [TurnBasedMatchTurn](#turnbasedmatchturn)
  * language `string`: The preferred language to use for strings returned by this method.
  * matchId **required** `string`: The ID of the match.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [TurnBasedMatch](#turnbasedmatch)



## Definitions

### AchievementDefinition
* AchievementDefinition `object`: This is a JSON template for an achievement definition object.
  * achievementType `string`: The type of the achievement.
  * description `string`: The description of the achievement.
  * experiencePoints `string`: Experience points which will be earned when unlocking this achievement.
  * formattedTotalSteps `string`: The total steps for an incremental achievement as a string.
  * id `string`: The ID of the achievement.
  * initialState `string`: The initial state of the achievement.
  * isRevealedIconUrlDefault `boolean`: Indicates whether the revealed icon image being returned is a default image, or is provided by the game.
  * isUnlockedIconUrlDefault `boolean`: Indicates whether the unlocked icon image being returned is a default image, or is game-provided.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#achievementDefinition.
  * name `string`: The name of the achievement.
  * revealedIconUrl `string`: The image URL for the revealed achievement icon.
  * totalSteps `integer`: The total steps for an incremental achievement.
  * unlockedIconUrl `string`: The image URL for the unlocked achievement icon.

### AchievementDefinitionsListResponse
* AchievementDefinitionsListResponse `object`: This is a JSON template for a list of achievement definition objects.
  * items `array`: The achievement definitions.
    * items [AchievementDefinition](#achievementdefinition)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#achievementDefinitionsListResponse.
  * nextPageToken `string`: Token corresponding to the next page of results.

### AchievementIncrementResponse
* AchievementIncrementResponse `object`: This is a JSON template for an achievement increment response
  * currentSteps `integer`: The current steps recorded for this incremental achievement.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#achievementIncrementResponse.
  * newlyUnlocked `boolean`: Whether the current steps for the achievement has reached the number of steps required to unlock.

### AchievementRevealResponse
* AchievementRevealResponse `object`: This is a JSON template for an achievement reveal response
  * currentState `string`: The current state of the achievement for which a reveal was attempted. This might be UNLOCKED if the achievement was already unlocked.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#achievementRevealResponse.

### AchievementSetStepsAtLeastResponse
* AchievementSetStepsAtLeastResponse `object`: This is a JSON template for an achievement set steps at least response.
  * currentSteps `integer`: The current steps recorded for this incremental achievement.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#achievementSetStepsAtLeastResponse.
  * newlyUnlocked `boolean`: Whether the the current steps for the achievement has reached the number of steps required to unlock.

### AchievementUnlockResponse
* AchievementUnlockResponse `object`: This is a JSON template for an achievement unlock response
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUnlockResponse.
  * newlyUnlocked `boolean`: Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).

### AchievementUpdateMultipleRequest
* AchievementUpdateMultipleRequest `object`: This is a JSON template for a list of achievement update requests.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateMultipleRequest.
  * updates `array`: The individual achievement update requests.
    * items [AchievementUpdateRequest](#achievementupdaterequest)

### AchievementUpdateMultipleResponse
* AchievementUpdateMultipleResponse `object`: This is a JSON template for an achievement unlock response.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateListResponse.
  * updatedAchievements `array`: The updated state of the achievements.
    * items [AchievementUpdateResponse](#achievementupdateresponse)

### AchievementUpdateRequest
* AchievementUpdateRequest `object`: This is a JSON template for a request to update an achievement.
  * achievementId `string`: The achievement this update is being applied to.
  * incrementPayload [GamesAchievementIncrement](#gamesachievementincrement)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateRequest.
  * setStepsAtLeastPayload [GamesAchievementSetStepsAtLeast](#gamesachievementsetstepsatleast)
  * updateType `string`: The type of update being applied.

### AchievementUpdateResponse
* AchievementUpdateResponse `object`: This is a JSON template for an achievement update response.
  * achievementId `string`: The achievement this update is was applied to.
  * currentState `string`: The current state of the achievement.
  * currentSteps `integer`: The current steps recorded for this achievement if it is incremental.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#achievementUpdateResponse.
  * newlyUnlocked `boolean`: Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).
  * updateOccurred `boolean`: Whether the requested updates actually affected the achievement.

### AggregateStats
* AggregateStats `object`: This is a JSON template for aggregate stats.
  * count `string`: The number of messages sent between a pair of peers.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#aggregateStats.
  * max `string`: The maximum amount.
  * min `string`: The minimum amount.
  * sum `string`: The total number of bytes sent for messages between a pair of peers.

### AnonymousPlayer
* AnonymousPlayer `object`: This is a JSON template for an anonymous player
  * avatarImageUrl `string`: The base URL for the image to display for the anonymous player.
  * displayName `string`: The name to display for the anonymous player.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#anonymousPlayer.

### Application
* Application `object`: This is a JSON template for the Application resource.
  * achievement_count `integer`: The number of achievements visible to the currently authenticated player.
  * assets `array`: The assets of the application.
    * items [ImageAsset](#imageasset)
  * author `string`: The author of the application.
  * category [ApplicationCategory](#applicationcategory)
  * description `string`: The description of the application.
  * enabledFeatures `array`: A list of features that have been enabled for the application.
    * items `string`
  * id `string`: The ID of the application.
  * instances `array`: The instances of the application.
    * items [Instance](#instance)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#application.
  * lastUpdatedTimestamp `string`: The last updated timestamp of the application.
  * leaderboard_count `integer`: The number of leaderboards visible to the currently authenticated player.
  * name `string`: The name of the application.
  * themeColor `string`: A hint to the client UI for what color to use as an app-themed color. The color is given as an RGB triplet (e.g. "E0E0E0").

### ApplicationCategory
* ApplicationCategory `object`: This is a JSON template for an application category object.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#applicationCategory.
  * primary `string`: The primary category.
  * secondary `string`: The secondary category.

### ApplicationVerifyResponse
* ApplicationVerifyResponse `object`: This is a JSON template for a third party application verification response resource.
  * alternate_player_id `string`: An alternate ID that was once used for the player that was issued the auth token used in this request. (This field is not normally populated.)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#applicationVerifyResponse.
  * player_id `string`: The ID of the player that was issued the auth token used in this request.

### Category
* Category `object`: This is a JSON template for data related to individual game categories.
  * category `string`: The category name.
  * experiencePoints `string`: Experience points earned in this category.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#category.

### CategoryListResponse
* CategoryListResponse `object`: This is a JSON template for a list of category data objects.
  * items `array`: The list of categories with usage data.
    * items [Category](#category)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#categoryListResponse.
  * nextPageToken `string`: Token corresponding to the next page of results.

### EventBatchRecordFailure
* EventBatchRecordFailure `object`: This is a JSON template for a batch update failure resource.
  * failureCause `string`: The cause for the update failure.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#eventBatchRecordFailure.
  * range [EventPeriodRange](#eventperiodrange)

### EventChild
* EventChild `object`: This is a JSON template for an event child relationship resource.
  * childId `string`: The ID of the child event.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#eventChild.

### EventDefinition
* EventDefinition `object`: This is a JSON template for an event definition resource.
  * childEvents `array`: A list of events that are a child of this event.
    * items [EventChild](#eventchild)
  * description `string`: Description of what this event represents.
  * displayName `string`: The name to display for the event.
  * id `string`: The ID of the event.
  * imageUrl `string`: The base URL for the image that represents the event.
  * isDefaultImageUrl `boolean`: Indicates whether the icon image being returned is a default image, or is game-provided.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#eventDefinition.
  * visibility `string`: The visibility of event being tracked in this definition.

### EventDefinitionListResponse
* EventDefinitionListResponse `object`: This is a JSON template for a ListDefinitions response.
  * items `array`: The event definitions.
    * items [EventDefinition](#eventdefinition)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#eventDefinitionListResponse.
  * nextPageToken `string`: The pagination token for the next page of results.

### EventPeriodRange
* EventPeriodRange `object`: This is a JSON template for an event period time range.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#eventPeriodRange.
  * periodEndMillis `string`: The time when this update period ends, in millis, since 1970 UTC (Unix Epoch).
  * periodStartMillis `string`: The time when this update period begins, in millis, since 1970 UTC (Unix Epoch).

### EventPeriodUpdate
* EventPeriodUpdate `object`: This is a JSON template for an event period update resource.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#eventPeriodUpdate.
  * timePeriod [EventPeriodRange](#eventperiodrange)
  * updates `array`: The updates being made for this time period.
    * items [EventUpdateRequest](#eventupdaterequest)

### EventRecordFailure
* EventRecordFailure `object`: This is a JSON template for an event update failure resource.
  * eventId `string`: The ID of the event that was not updated.
  * failureCause `string`: The cause for the update failure.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#eventRecordFailure.

### EventRecordRequest
* EventRecordRequest `object`: This is a JSON template for an event period update resource.
  * currentTimeMillis `string`: The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch).
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#eventRecordRequest.
  * requestId `string`: The request ID used to identify this attempt to record events.
  * timePeriods `array`: A list of the time period updates being made in this request.
    * items [EventPeriodUpdate](#eventperiodupdate)

### EventUpdateRequest
* EventUpdateRequest `object`: This is a JSON template for an event period update resource.
  * definitionId `string`: The ID of the event being modified in this update.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#eventUpdateRequest.
  * updateCount `string`: The number of times this event occurred in this time period.

### EventUpdateResponse
* EventUpdateResponse `object`: This is a JSON template for an event period update resource.
  * batchFailures `array`: Any batch-wide failures which occurred applying updates.
    * items [EventBatchRecordFailure](#eventbatchrecordfailure)
  * eventFailures `array`: Any failures updating a particular event.
    * items [EventRecordFailure](#eventrecordfailure)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#eventUpdateResponse.
  * playerEvents `array`: The current status of any updated events
    * items [PlayerEvent](#playerevent)

### GamesAchievementIncrement
* GamesAchievementIncrement `object`: This is a JSON template for the payload to request to increment an achievement.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#GamesAchievementIncrement.
  * requestId `string`: The requestId associated with an increment to an achievement.
  * steps `integer`: The number of steps to be incremented.

### GamesAchievementSetStepsAtLeast
* GamesAchievementSetStepsAtLeast `object`: This is a JSON template for the payload to request to increment an achievement.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#GamesAchievementSetStepsAtLeast.
  * steps `integer`: The minimum number of steps for the achievement to be set to.

### ImageAsset
* ImageAsset `object`: This is a JSON template for an image asset object.
  * height `integer`: The height of the asset.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#imageAsset.
  * name `string`: The name of the asset.
  * url `string`: The URL of the asset.
  * width `integer`: The width of the asset.

### Instance
* Instance `object`: This is a JSON template for the Instance resource.
  * acquisitionUri `string`: URI which shows where a user can acquire this instance.
  * androidInstance [InstanceAndroidDetails](#instanceandroiddetails)
  * iosInstance [InstanceIosDetails](#instanceiosdetails)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#instance.
  * name `string`: Localized display name.
  * platformType `string`: The platform type.
  * realtimePlay `boolean`: Flag to show if this game instance supports realtime play.
  * turnBasedPlay `boolean`: Flag to show if this game instance supports turn based play.
  * webInstance [InstanceWebDetails](#instancewebdetails)

### InstanceAndroidDetails
* InstanceAndroidDetails `object`: This is a JSON template for the Android instance details resource.
  * enablePiracyCheck `boolean`: Flag indicating whether the anti-piracy check is enabled.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#instanceAndroidDetails.
  * packageName `string`: Android package name which maps to Google Play URL.
  * preferred `boolean`: Indicates that this instance is the default for new installations.

### InstanceIosDetails
* InstanceIosDetails `object`: This is a JSON template for the iOS details resource.
  * bundleIdentifier `string`: Bundle identifier.
  * itunesAppId `string`: iTunes App ID.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#instanceIosDetails.
  * preferredForIpad `boolean`: Indicates that this instance is the default for new installations on iPad devices.
  * preferredForIphone `boolean`: Indicates that this instance is the default for new installations on iPhone devices.
  * supportIpad `boolean`: Flag to indicate if this instance supports iPad.
  * supportIphone `boolean`: Flag to indicate if this instance supports iPhone.

### InstanceWebDetails
* InstanceWebDetails `object`: This is a JSON template for the Web details resource.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#instanceWebDetails.
  * launchUrl `string`: Launch URL for the game.
  * preferred `boolean`: Indicates that this instance is the default for new installations.

### Leaderboard
* Leaderboard `object`: This is a JSON template for the Leaderboard resource.
  * iconUrl `string`: The icon for the leaderboard.
  * id `string`: The leaderboard ID.
  * isIconUrlDefault `boolean`: Indicates whether the icon image being returned is a default image, or is game-provided.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboard.
  * name `string`: The name of the leaderboard.
  * order `string`: How scores are ordered.

### LeaderboardEntry
* LeaderboardEntry `object`: This is a JSON template for the Leaderboard Entry resource.
  * formattedScore `string`: The localized string for the numerical value of this score.
  * formattedScoreRank `string`: The localized string for the rank of this score for this leaderboard.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardEntry.
  * player [Player](#player)
  * scoreRank `string`: The rank of this score for this leaderboard.
  * scoreTag `string`: Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
  * scoreValue `string`: The numerical value of this score.
  * timeSpan `string`: The time span of this high score.
  * writeTimestampMillis `string`: The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.

### LeaderboardListResponse
* LeaderboardListResponse `object`: This is a JSON template for a list of leaderboard objects.
  * items `array`: The leaderboards.
    * items [Leaderboard](#leaderboard)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardListResponse.
  * nextPageToken `string`: Token corresponding to the next page of results.

### LeaderboardScoreRank
* LeaderboardScoreRank `object`: This is a JSON template for a score rank in a leaderboard.
  * formattedNumScores `string`: The number of scores in the leaderboard as a string.
  * formattedRank `string`: The rank in the leaderboard as a string.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardScoreRank.
  * numScores `string`: The number of scores in the leaderboard.
  * rank `string`: The rank in the leaderboard.

### LeaderboardScores
* LeaderboardScores `object`: This is a JSON template for a ListScores response.
  * items `array`: The scores in the leaderboard.
    * items [LeaderboardEntry](#leaderboardentry)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardScores.
  * nextPageToken `string`: The pagination token for the next page of results.
  * numScores `string`: The total number of scores in the leaderboard.
  * playerScore [LeaderboardEntry](#leaderboardentry)
  * prevPageToken `string`: The pagination token for the previous page of results.

### MetagameConfig
* MetagameConfig `object`: This is a JSON template for the metagame config resource
  * currentVersion `integer`: Current version of the metagame configuration data. When this data is updated, the version number will be increased by one.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#metagameConfig.
  * playerLevels `array`: The list of player levels.
    * items [PlayerLevel](#playerlevel)

### NetworkDiagnostics
* NetworkDiagnostics `object`: This is a JSON template for network diagnostics reported for a client.
  * androidNetworkSubtype `integer`: The Android network subtype.
  * androidNetworkType `integer`: The Android network type.
  * iosNetworkType `integer`: iOS network type as defined in Reachability.h.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#networkDiagnostics.
  * networkOperatorCode `string`: The MCC+MNC code for the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperator() On iOS, see: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html
  * networkOperatorName `string`: The name of the carrier of the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperatorName() On iOS: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html#//apple_ref/occ/instp/CTCarrier/carrierName
  * registrationLatencyMillis `integer`: The amount of time in milliseconds it took for the client to establish a connection with the XMPP server.

### ParticipantResult
* ParticipantResult `object`: This is a JSON template for a result for a match participant.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#participantResult.
  * participantId `string`: The ID of the participant.
  * placing `integer`: The placement or ranking of the participant in the match results; a number from one to the number of participants in the match. Multiple participants may have the same placing value in case of a type.
  * result `string`: The result of the participant for this match.

### PeerChannelDiagnostics
* PeerChannelDiagnostics `object`: This is a JSON template for peer channel diagnostics.
  * bytesReceived [AggregateStats](#aggregatestats)
  * bytesSent [AggregateStats](#aggregatestats)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#peerChannelDiagnostics.
  * numMessagesLost `integer`: Number of messages lost.
  * numMessagesReceived `integer`: Number of messages received.
  * numMessagesSent `integer`: Number of messages sent.
  * numSendFailures `integer`: Number of send failures.
  * roundtripLatencyMillis [AggregateStats](#aggregatestats)

### PeerSessionDiagnostics
* PeerSessionDiagnostics `object`: This is a JSON template for peer session diagnostics.
  * connectedTimestampMillis `string`: Connected time in milliseconds.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#peerSessionDiagnostics.
  * participantId `string`: The participant ID of the peer.
  * reliableChannel [PeerChannelDiagnostics](#peerchanneldiagnostics)
  * unreliableChannel [PeerChannelDiagnostics](#peerchanneldiagnostics)

### Played
* Played `object`: This is a JSON template for metadata about a player playing a game with the currently authenticated user.
  * autoMatched `boolean`: True if the player was auto-matched with the currently authenticated user.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#played.
  * timeMillis `string`: The last time the player played the game in milliseconds since the epoch in UTC.

### Player
* Player `object`: This is a JSON template for a Player resource.
  * avatarImageUrl `string`: The base URL for the image that represents the player.
  * bannerUrlLandscape `string`: The url to the landscape mode player banner image.
  * bannerUrlPortrait `string`: The url to the portrait mode player banner image.
  * displayName `string`: The name to display for the player.
  * experienceInfo [PlayerExperienceInfo](#playerexperienceinfo)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#player.
  * lastPlayedWith [Played](#played)
  * name `object`: An object representation of the individual components of the player's name. For some players, these fields may not be present.
    * familyName `string`: The family name of this player. In some places, this is known as the last name.
    * givenName `string`: The given name of this player. In some places, this is known as the first name.
  * originalPlayerId `string`: The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs.
  * playerId `string`: The ID of the player.
  * profileSettings [ProfileSettings](#profilesettings)
  * title `string`: The player's title rewarded for their game activities.

### PlayerAchievement
* PlayerAchievement `object`: This is a JSON template for an achievement object.
  * achievementState `string`: The state of the achievement.
  * currentSteps `integer`: The current steps for an incremental achievement.
  * experiencePoints `string`: Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished.
  * formattedCurrentStepsString `string`: The current steps for an incremental achievement as a string.
  * id `string`: The ID of the achievement.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerAchievement.
  * lastUpdatedTimestamp `string`: The timestamp of the last modification to this achievement's state.

### PlayerAchievementListResponse
* PlayerAchievementListResponse `object`: This is a JSON template for a list of achievement objects.
  * items `array`: The achievements.
    * items [PlayerAchievement](#playerachievement)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerAchievementListResponse.
  * nextPageToken `string`: Token corresponding to the next page of results.

### PlayerEvent
* PlayerEvent `object`: This is a JSON template for an event status resource.
  * definitionId `string`: The ID of the event definition.
  * formattedNumEvents `string`: The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerEvent.
  * numEvents `string`: The current number of times this event has occurred.
  * playerId `string`: The ID of the player.

### PlayerEventListResponse
* PlayerEventListResponse `object`: This is a JSON template for a ListByPlayer response.
  * items `array`: The player events.
    * items [PlayerEvent](#playerevent)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerEventListResponse.
  * nextPageToken `string`: The pagination token for the next page of results.

### PlayerExperienceInfo
* PlayerExperienceInfo `object`: This is a JSON template for 1P/3P metadata about the player's experience.
  * currentExperiencePoints `string`: The current number of experience points for the player.
  * currentLevel [PlayerLevel](#playerlevel)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerExperienceInfo.
  * lastLevelUpTimestampMillis `string`: The timestamp when the player was leveled up, in millis since Unix epoch UTC.
  * nextLevel [PlayerLevel](#playerlevel)

### PlayerLeaderboardScore
* PlayerLeaderboardScore `object`: This is a JSON template for a player leaderboard score object.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerLeaderboardScore.
  * leaderboard_id `string`: The ID of the leaderboard this score is in.
  * publicRank [LeaderboardScoreRank](#leaderboardscorerank)
  * scoreString `string`: The formatted value of this score.
  * scoreTag `string`: Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
  * scoreValue `string`: The numerical value of this score.
  * socialRank [LeaderboardScoreRank](#leaderboardscorerank)
  * timeSpan `string`: The time span of this score.
  * writeTimestamp `string`: The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.

### PlayerLeaderboardScoreListResponse
* PlayerLeaderboardScoreListResponse `object`: This is a JSON template for a list of player leaderboard scores.
  * items `array`: The leaderboard scores.
    * items [PlayerLeaderboardScore](#playerleaderboardscore)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerLeaderboardScoreListResponse.
  * nextPageToken `string`: The pagination token for the next page of results.
  * player [Player](#player)

### PlayerLevel
* PlayerLevel `object`: This is a JSON template for 1P/3P metadata about a user's level.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerLevel.
  * level `integer`: The level for the user.
  * maxExperiencePoints `string`: The maximum experience points for this level.
  * minExperiencePoints `string`: The minimum experience points for this level.

### PlayerListResponse
* PlayerListResponse `object`: This is a JSON template for a third party player list response.
  * items `array`: The players.
    * items [Player](#player)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerListResponse.
  * nextPageToken `string`: Token corresponding to the next page of results.

### PlayerScore
* PlayerScore `object`: This is a JSON template for a player score.
  * formattedScore `string`: The formatted score for this player score.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerScore.
  * score `string`: The numerical value for this player score.
  * scoreTag `string`: Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
  * timeSpan `string`: The time span for this player score.

### PlayerScoreListResponse
* PlayerScoreListResponse `object`: This is a JSON template for a list of score submission statuses.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreListResponse.
  * submittedScores `array`: The score submissions statuses.
    * items [PlayerScoreResponse](#playerscoreresponse)

### PlayerScoreResponse
* PlayerScoreResponse `object`: This is a JSON template for a list of leaderboard entry resources.
  * beatenScoreTimeSpans `array`: The time spans where the submitted score is better than the existing score for that time span.
    * items `string`
  * formattedScore `string`: The formatted value of the submitted score.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreResponse.
  * leaderboardId `string`: The leaderboard ID that this score was submitted to.
  * scoreTag `string`: Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
  * unbeatenScores `array`: The scores in time spans that have not been beaten. As an example, the submitted score may be better than the player's DAILY score, but not better than the player's scores for the WEEKLY or ALL_TIME time spans.
    * items [PlayerScore](#playerscore)

### PlayerScoreSubmissionList
* PlayerScoreSubmissionList `object`: This is a JSON template for a list of score submission requests
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#playerScoreSubmissionList.
  * scores `array`: The score submissions.
    * items [ScoreSubmission](#scoresubmission)

### ProfileSettings
* ProfileSettings `object`: This is a JSON template for profile settings
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#profileSettings.
  * profileVisible `boolean`: The player's current profile visibility. This field is visible to both 1P and 3P APIs.

### PushToken
* PushToken `object`: This is a JSON template for a push token resource.
  * clientRevision `string`: The revision of the client SDK used by your application, in the same format that's used by revisions.check. Used to send backward compatible messages. Format: [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:  
  * id [PushTokenId](#pushtokenid)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#pushToken.
  * language `string`: The preferred language for notifications that are sent using this token.

### PushTokenId
* PushTokenId `object`: This is a JSON template for a push token ID resource.
  * ios `object`: A push token ID for iOS devices.
    * apns_device_token `string`: Device token supplied by an iOS system call to register for remote notifications. Encode this field as web-safe base64.
    * apns_environment `string`: Indicates whether this token should be used for the production or sandbox APNS server.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#pushTokenId.

### Quest
* Quest `object`: This is a JSON template for a Quest resource.
  * acceptedTimestampMillis `string`: The timestamp at which the user accepted the quest in milliseconds since the epoch in UTC. Only present if the player has accepted the quest.
  * applicationId `string`: The ID of the application this quest is part of.
  * bannerUrl `string`: The banner image URL for the quest.
  * description `string`: The description of the quest.
  * endTimestampMillis `string`: The timestamp at which the quest ceases to be active in milliseconds since the epoch in UTC.
  * iconUrl `string`: The icon image URL for the quest.
  * id `string`: The ID of the quest.
  * isDefaultBannerUrl `boolean`: Indicates whether the banner image being returned is a default image, or is game-provided.
  * isDefaultIconUrl `boolean`: Indicates whether the icon image being returned is a default image, or is game-provided.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#quest.
  * lastUpdatedTimestampMillis `string`: The timestamp at which the quest was last updated by the user in milliseconds since the epoch in UTC. Only present if the player has accepted the quest.
  * milestones `array`: The quest milestones.
    * items [QuestMilestone](#questmilestone)
  * name `string`: The name of the quest.
  * notifyTimestampMillis `string`: The timestamp at which the user should be notified that the quest will end soon in milliseconds since the epoch in UTC.
  * startTimestampMillis `string`: The timestamp at which the quest becomes active in milliseconds since the epoch in UTC.
  * state `string`: The state of the quest.

### QuestContribution
* QuestContribution `object`: This is a JSON template for a Quest Criterion Contribution resource.
  * formattedValue `string`: The formatted value of the contribution as a string. Format depends on the configuration for the associated event definition in the Play Games Developer Console.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#questContribution.
  * value `string`: The value of the contribution.

### QuestCriterion
* QuestCriterion `object`: This is a JSON template for a Quest Criterion resource.
  * completionContribution [QuestContribution](#questcontribution)
  * currentContribution [QuestContribution](#questcontribution)
  * eventId `string`: The ID of the event the criterion corresponds to.
  * initialPlayerProgress [QuestContribution](#questcontribution)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#questCriterion.

### QuestListResponse
* QuestListResponse `object`: This is a JSON template for a list of quest objects.
  * items `array`: The quests.
    * items [Quest](#quest)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#questListResponse.
  * nextPageToken `string`: Token corresponding to the next page of results.

### QuestMilestone
* QuestMilestone `object`: This is a JSON template for a Quest Milestone resource.
  * completionRewardData `string`: The completion reward data of the milestone, represented as a Base64-encoded string. This is a developer-specified binary blob with size between 0 and 2 KB before encoding.
  * criteria `array`: The criteria of the milestone.
    * items [QuestCriterion](#questcriterion)
  * id `string`: The milestone ID.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#questMilestone.
  * state `string`: The current state of the milestone.

### RevisionCheckResponse
* RevisionCheckResponse `object`: This is a JSON template for the result of checking a revision.
  * apiVersion `string`: The version of the API this client revision should use when calling API methods.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#revisionCheckResponse.
  * revisionStatus `string`: The result of the revision check.

### Room
* Room `object`: This is a JSON template for a room resource object.
  * applicationId `string`: The ID of the application being played.
  * autoMatchingCriteria [RoomAutoMatchingCriteria](#roomautomatchingcriteria)
  * autoMatchingStatus [RoomAutoMatchStatus](#roomautomatchstatus)
  * creationDetails [RoomModification](#roommodification)
  * description `string`: This short description is generated by our servers and worded relative to the player requesting the room. It is intended to be displayed when the room is shown in a list (that is, an invitation to a room.)
  * inviterId `string`: The ID of the participant that invited the user to the room. Not set if the user was not invited to the room.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#room.
  * lastUpdateDetails [RoomModification](#roommodification)
  * participants `array`: The participants involved in the room, along with their statuses. Includes participants who have left or declined invitations.
    * items [RoomParticipant](#roomparticipant)
  * roomId `string`: Globally unique ID for a room.
  * roomStatusVersion `integer`: The version of the room status: an increasing counter, used by the client to ignore out-of-order updates to room status.
  * status `string`: The status of the room.
  * variant `integer`: The variant / mode of the application being played; can be any integer value, or left blank.

### RoomAutoMatchStatus
* RoomAutoMatchStatus `object`: This is a JSON template for status of room automatching that is in progress.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomAutoMatchStatus.
  * waitEstimateSeconds `integer`: An estimate for the amount of time (in seconds) that auto-matching is expected to take to complete.

### RoomAutoMatchingCriteria
* RoomAutoMatchingCriteria `object`: This is a JSON template for a room auto-match criteria object.
  * exclusiveBitmask `string`: A bitmask indicating when auto-matches are valid. When ANDed with other exclusive bitmasks, the result must be zero. Can be used to support exclusive roles within a game.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomAutoMatchingCriteria.
  * maxAutoMatchingPlayers `integer`: The maximum number of players that should be added to the room by auto-matching.
  * minAutoMatchingPlayers `integer`: The minimum number of players that should be added to the room by auto-matching.

### RoomClientAddress
* RoomClientAddress `object`: This is a JSON template for the client address when setting up a room.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomClientAddress.
  * xmppAddress `string`: The XMPP address of the client on the Google Games XMPP network.

### RoomCreateRequest
* RoomCreateRequest `object`: This is a JSON template for a room creation request.
  * autoMatchingCriteria [RoomAutoMatchingCriteria](#roomautomatchingcriteria)
  * capabilities `array`: The capabilities that this client supports for realtime communication.
    * items `string`
  * clientAddress [RoomClientAddress](#roomclientaddress)
  * invitedPlayerIds `array`: The player IDs to invite to the room.
    * items `string`
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomCreateRequest.
  * networkDiagnostics [NetworkDiagnostics](#networkdiagnostics)
  * requestId `string`: A randomly generated numeric ID. This number is used at the server to ensure that the request is handled correctly across retries.
  * variant `integer`: The variant / mode of the application to be played. This can be any integer value, or left blank. You should use a small number of variants to keep the auto-matching pool as large as possible.

### RoomJoinRequest
* RoomJoinRequest `object`: This is a JSON template for a join room request.
  * capabilities `array`: The capabilities that this client supports for realtime communication.
    * items `string`
  * clientAddress [RoomClientAddress](#roomclientaddress)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomJoinRequest.
  * networkDiagnostics [NetworkDiagnostics](#networkdiagnostics)

### RoomLeaveDiagnostics
* RoomLeaveDiagnostics `object`: This is a JSON template for room leave diagnostics.
  * androidNetworkSubtype `integer`: Android network subtype. http://developer.android.com/reference/android/net/NetworkInfo.html#getSubtype()
  * androidNetworkType `integer`: Android network type. http://developer.android.com/reference/android/net/NetworkInfo.html#getType()
  * iosNetworkType `integer`: iOS network type as defined in Reachability.h.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomLeaveDiagnostics.
  * networkOperatorCode `string`: The MCC+MNC code for the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperator() On iOS, see: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html
  * networkOperatorName `string`: The name of the carrier of the client's network connection. On Android: http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperatorName() On iOS: https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html#//apple_ref/occ/instp/CTCarrier/carrierName
  * peerSession `array`: Diagnostics about all peer sessions.
    * items [PeerSessionDiagnostics](#peersessiondiagnostics)
  * socketsUsed `boolean`: Whether or not sockets were used.

### RoomLeaveRequest
* RoomLeaveRequest `object`: This is a JSON template for a leave room request.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomLeaveRequest.
  * leaveDiagnostics [RoomLeaveDiagnostics](#roomleavediagnostics)
  * reason `string`: Reason for leaving the match.

### RoomList
* RoomList `object`: This is a JSON template for a list of rooms.
  * items `array`: The rooms.
    * items [Room](#room)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomList.
  * nextPageToken `string`: The pagination token for the next page of results.

### RoomModification
* RoomModification `object`: This is a JSON template for room modification metadata.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomModification.
  * modifiedTimestampMillis `string`: The timestamp at which they modified the room, in milliseconds since the epoch in UTC.
  * participantId `string`: The ID of the participant that modified the room.

### RoomP2PStatus
* RoomP2PStatus `object`: This is a JSON template for an update on the status of a peer in a room.
  * connectionSetupLatencyMillis `integer`: The amount of time in milliseconds it took to establish connections with this peer.
  * error `string`: The error code in event of a failure.
  * error_reason `string`: More detailed diagnostic message returned in event of a failure.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomP2PStatus.
  * participantId `string`: The ID of the participant.
  * status `string`: The status of the peer in the room.
  * unreliableRoundtripLatencyMillis `integer`: The amount of time in milliseconds it took to send packets back and forth on the unreliable channel with this peer.

### RoomP2PStatuses
* RoomP2PStatuses `object`: This is a JSON template for an update on the status of peers in a room.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomP2PStatuses.
  * updates `array`: The updates for the peers.
    * items [RoomP2PStatus](#roomp2pstatus)

### RoomParticipant
* RoomParticipant `object`: This is a JSON template for a participant in a room.
  * autoMatched `boolean`: True if this participant was auto-matched with the requesting player.
  * autoMatchedPlayer [AnonymousPlayer](#anonymousplayer)
  * capabilities `array`: The capabilities which can be used when communicating with this participant.
    * items `string`
  * clientAddress [RoomClientAddress](#roomclientaddress)
  * connected `boolean`: True if this participant is in the fully connected set of peers in the room.
  * id `string`: An identifier for the participant in the scope of the room. Cannot be used to identify a player across rooms or in other contexts.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomParticipant.
  * leaveReason `string`: The reason the participant left the room; populated if the participant status is PARTICIPANT_LEFT.
  * player [Player](#player)
  * status `string`: The status of the participant with respect to the room.

### RoomStatus
* RoomStatus `object`: This is a JSON template for the status of a room that the player has joined.
  * autoMatchingStatus [RoomAutoMatchStatus](#roomautomatchstatus)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#roomStatus.
  * participants `array`: The participants involved in the room, along with their statuses. Includes participants who have left or declined invitations.
    * items [RoomParticipant](#roomparticipant)
  * roomId `string`: Globally unique ID for a room.
  * status `string`: The status of the room.
  * statusVersion `integer`: The version of the status for the room: an increasing counter, used by the client to ignore out-of-order updates to room status.

### ScoreSubmission
* ScoreSubmission `object`: This is a JSON template for a request to submit a score to leaderboards.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#scoreSubmission.
  * leaderboardId `string`: The leaderboard this score is being submitted to.
  * score `string`: The new score being submitted.
  * scoreTag `string`: Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
  * signature `string`: Signature Values will contain URI-safe characters as defined by section 2.3 of RFC 3986.

### Snapshot
* Snapshot `object`: This is a JSON template for an snapshot object.
  * coverImage [SnapshotImage](#snapshotimage)
  * description `string`: The description of this snapshot.
  * driveId `string`: The ID of the file underlying this snapshot in the Drive API. Only present if the snapshot is a view on a Drive file and the file is owned by the caller.
  * durationMillis `string`: The duration associated with this snapshot, in millis.
  * id `string`: The ID of the snapshot.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#snapshot.
  * lastModifiedMillis `string`: The timestamp (in millis since Unix epoch) of the last modification to this snapshot.
  * progressValue `string`: The progress value (64-bit integer set by developer) associated with this snapshot.
  * title `string`: The title of this snapshot.
  * type `string`: The type of this snapshot.
  * uniqueName `string`: The unique name provided when the snapshot was created.

### SnapshotImage
* SnapshotImage `object`: This is a JSON template for an image of a snapshot.
  * height `integer`: The height of the image.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#snapshotImage.
  * mime_type `string`: The MIME type of the image.
  * url `string`: The URL of the image. This URL may be invalidated at any time and should not be cached.
  * width `integer`: The width of the image.

### SnapshotListResponse
* SnapshotListResponse `object`: This is a JSON template for a list of snapshot objects.
  * items `array`: The snapshots.
    * items [Snapshot](#snapshot)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#snapshotListResponse.
  * nextPageToken `string`: Token corresponding to the next page of results. If there are no more results, the token is omitted.

### TurnBasedAutoMatchingCriteria
* TurnBasedAutoMatchingCriteria `object`: This is a JSON template for an turn-based auto-match criteria object.
  * exclusiveBitmask `string`: A bitmask indicating when auto-matches are valid. When ANDed with other exclusive bitmasks, the result must be zero. Can be used to support exclusive roles within a game.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedAutoMatchingCriteria.
  * maxAutoMatchingPlayers `integer`: The maximum number of players that should be added to the match by auto-matching.
  * minAutoMatchingPlayers `integer`: The minimum number of players that should be added to the match by auto-matching.

### TurnBasedMatch
* TurnBasedMatch `object`: This is a JSON template for a turn-based match resource object.
  * applicationId `string`: The ID of the application being played.
  * autoMatchingCriteria [TurnBasedAutoMatchingCriteria](#turnbasedautomatchingcriteria)
  * creationDetails [TurnBasedMatchModification](#turnbasedmatchmodification)
  * data [TurnBasedMatchData](#turnbasedmatchdata)
  * description `string`: This short description is generated by our servers based on turn state and is localized and worded relative to the player requesting the match. It is intended to be displayed when the match is shown in a list.
  * inviterId `string`: The ID of the participant that invited the user to the match. Not set if the user was not invited to the match.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatch.
  * lastUpdateDetails [TurnBasedMatchModification](#turnbasedmatchmodification)
  * matchId `string`: Globally unique ID for a turn-based match.
  * matchNumber `integer`: The number of the match in a chain of rematches. Will be set to 1 for the first match and incremented by 1 for each rematch.
  * matchVersion `integer`: The version of this match: an increasing counter, used to avoid out-of-date updates to the match.
  * participants `array`: The participants involved in the match, along with their statuses. Includes participants who have left or declined invitations.
    * items [TurnBasedMatchParticipant](#turnbasedmatchparticipant)
  * pendingParticipantId `string`: The ID of the participant that is taking a turn.
  * previousMatchData [TurnBasedMatchData](#turnbasedmatchdata)
  * rematchId `string`: The ID of a rematch of this match. Only set for completed matches that have been rematched.
  * results `array`: The results reported for this match.
    * items [ParticipantResult](#participantresult)
  * status `string`: The status of the match.
  * userMatchStatus `string`: The status of the current user in the match. Derived from the match type, match status, the user's participant status, and the pending participant for the match.
  * variant `integer`: The variant / mode of the application being played; can be any integer value, or left blank.
  * withParticipantId `string`: The ID of another participant in the match that can be used when describing the participants the user is playing with.

### TurnBasedMatchCreateRequest
* TurnBasedMatchCreateRequest `object`: This is a JSON template for a turn-based match creation request.
  * autoMatchingCriteria [TurnBasedAutoMatchingCriteria](#turnbasedautomatchingcriteria)
  * invitedPlayerIds `array`: The player ids to invite to the match.
    * items `string`
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchCreateRequest.
  * requestId `string`: A randomly generated numeric ID. This number is used at the server to ensure that the request is handled correctly across retries.
  * variant `integer`: The variant / mode of the application to be played. This can be any integer value, or left blank. You should use a small number of variants to keep the auto-matching pool as large as possible.

### TurnBasedMatchData
* TurnBasedMatchData `object`: This is a JSON template for a turn-based match data object.
  * data `string`: The byte representation of the data (limited to 128 kB), as a Base64-encoded string with the URL_SAFE encoding option.
  * dataAvailable `boolean`: True if this match has data available but it wasn't returned in a list response; fetching the match individually will retrieve this data.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchData.

### TurnBasedMatchDataRequest
* TurnBasedMatchDataRequest `object`: This is a JSON template for sending a turn-based match data object.
  * data `string`: The byte representation of the data (limited to 128 kB), as a Base64-encoded string with the URL_SAFE encoding option.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchDataRequest.

### TurnBasedMatchList
* TurnBasedMatchList `object`: This is a JSON template for a list of turn-based matches.
  * items `array`: The matches.
    * items [TurnBasedMatch](#turnbasedmatch)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchList.
  * nextPageToken `string`: The pagination token for the next page of results.

### TurnBasedMatchModification
* TurnBasedMatchModification `object`: This is a JSON template for turn-based match modification metadata.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchModification.
  * modifiedTimestampMillis `string`: The timestamp at which they modified the match, in milliseconds since the epoch in UTC.
  * participantId `string`: The ID of the participant that modified the match.

### TurnBasedMatchParticipant
* TurnBasedMatchParticipant `object`: This is a JSON template for a participant in a turn-based match.
  * autoMatched `boolean`: True if this participant was auto-matched with the requesting player.
  * autoMatchedPlayer [AnonymousPlayer](#anonymousplayer)
  * id `string`: An identifier for the participant in the scope of the match. Cannot be used to identify a player across matches or in other contexts.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchParticipant.
  * player [Player](#player)
  * status `string`: The status of the participant with respect to the match.

### TurnBasedMatchRematch
* TurnBasedMatchRematch `object`: This is a JSON template for a rematch response.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchRematch.
  * previousMatch [TurnBasedMatch](#turnbasedmatch)
  * rematch [TurnBasedMatch](#turnbasedmatch)

### TurnBasedMatchResults
* TurnBasedMatchResults `object`: This is a JSON template for a turn-based match results object.
  * data [TurnBasedMatchDataRequest](#turnbasedmatchdatarequest)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchResults.
  * matchVersion `integer`: The version of the match being updated.
  * results `array`: The match results for the participants in the match.
    * items [ParticipantResult](#participantresult)

### TurnBasedMatchSync
* TurnBasedMatchSync `object`: This is a JSON template for a list of turn-based matches returned from a sync.
  * items `array`: The matches.
    * items [TurnBasedMatch](#turnbasedmatch)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchSync.
  * moreAvailable `boolean`: True if there were more matches available to fetch at the time the response was generated (which were not returned due to page size limits.)
  * nextPageToken `string`: The pagination token for the next page of results.

### TurnBasedMatchTurn
* TurnBasedMatchTurn `object`: This is a JSON template for the object representing a turn.
  * data [TurnBasedMatchDataRequest](#turnbasedmatchdatarequest)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#turnBasedMatchTurn.
  * matchVersion `integer`: The version of this match: an increasing counter, used to avoid out-of-date updates to the match.
  * pendingParticipantId `string`: The ID of the participant who should take their turn next. May be set to the current player's participant ID to update match state without changing the turn. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
  * results `array`: The match results for the participants in the match.
    * items [ParticipantResult](#participantresult)


