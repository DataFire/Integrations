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

.then(data => {
  console.log(data);
});
```

## Description

The Google Play games service allows developers to enhance games with social leaderboards, achievements, game state, sign-in with Google, and more.

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

### games.achievementDefinitions.list
Lists all the achievement definitions for your application.


```js
google_games.games.achievementDefinitions.list({}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`.
  * pageToken `string`: The token returned by the previous request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AchievementDefinitionsListResponse](#achievementdefinitionslistresponse)

### games.achievements.updateMultiple
Updates multiple achievements for the currently authenticated player.


```js
google_games.games.achievements.updateMultiple({}, context)
```

#### Input
* input `object`
  * body [AchievementUpdateMultipleRequest](#achievementupdatemultiplerequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AchievementUpdateMultipleResponse](#achievementupdatemultipleresponse)

### games.achievements.increment
Increments the steps of the achievement with the given ID for the currently authenticated player.


```js
google_games.games.achievements.increment({
  "achievementId": "",
  "stepsToIncrement": 0
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * stepsToIncrement **required** `integer`: The number of steps to increment.
  * requestId `string`: A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AchievementIncrementResponse](#achievementincrementresponse)

### games.achievements.reveal
Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.


```js
google_games.games.achievements.reveal({
  "achievementId": ""
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AchievementRevealResponse](#achievementrevealresponse)

### games.achievements.setStepsAtLeast
Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.


```js
google_games.games.achievements.setStepsAtLeast({
  "achievementId": "",
  "steps": 0
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * steps **required** `integer`: The minimum value to set the steps to.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AchievementSetStepsAtLeastResponse](#achievementsetstepsatleastresponse)

### games.achievements.unlock
Unlocks this achievement for the currently authenticated player.


```js
google_games.games.achievements.unlock({
  "achievementId": ""
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AchievementUnlockResponse](#achievementunlockresponse)

### games.applications.getEndPoint
Returns a URL for the requested end point type.


```js
google_games.games.applications.getEndPoint({}, context)
```

#### Input
* input `object`
  * applicationId `string`: The application ID from the Google Play developer console.
  * endPointType `string` (values: END_POINT_TYPE_UNSPECIFIED, PROFILE_CREATION, PROFILE_SETTINGS): Type of endpoint being requested.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [EndPoint](#endpoint)

### games.applications.played
Indicate that the currently authenticated user is playing your application.


```js
google_games.games.applications.played({}, context)
```

#### Input
* input `object`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
*Output schema unknown*

### games.applications.get
Retrieves the metadata of the application with the given ID. If the requested application is not available for the specified `platformType`, the returned response will not include any instance data.


```js
google_games.games.applications.get({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * language `string`: The preferred language to use for strings returned by this method.
  * platformType `string` (values: PLATFORM_TYPE_UNSPECIFIED, ANDROID, IOS, WEB_APP): Restrict application details returned to the specific platform.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Application](#application)

### games.applications.verify
Verifies the auth token provided with this request is for the application with the specified ID, and returns the ID of the player it was granted for.


```js
google_games.games.applications.verify({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ApplicationVerifyResponse](#applicationverifyresponse)

### games.events.listDefinitions
Returns a list of the event definitions in this application.


```js
google_games.games.events.listDefinitions({}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified `maxResults`.
  * pageToken `string`: The token returned by the previous request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [EventDefinitionListResponse](#eventdefinitionlistresponse)

### games.events.listByPlayer
Returns a list showing the current progress on events in this application for the currently authenticated user.


```js
google_games.games.events.listByPlayer({}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PlayerEventListResponse](#playereventlistresponse)

### games.events.record
Records a batch of changes to the number of times events have occurred for the currently authenticated user of this application.


```js
google_games.games.events.record({}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * body [EventRecordRequest](#eventrecordrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [EventUpdateResponse](#eventupdateresponse)

### games.leaderboards.list
Lists all the leaderboard metadata for your application.


```js
google_games.games.leaderboards.list({}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified `maxResults`.
  * pageToken `string`: The token returned by the previous request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LeaderboardListResponse](#leaderboardlistresponse)

### games.scores.submitMultiple
Submits multiple scores to leaderboards.


```js
google_games.games.scores.submitMultiple({}, context)
```

#### Input
* input `object`
  * language `string`: The preferred language to use for strings returned by this method.
  * body [PlayerScoreSubmissionList](#playerscoresubmissionlist)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PlayerScoreListResponse](#playerscorelistresponse)

### games.leaderboards.get
Retrieves the metadata of the leaderboard with the given ID.


```js
google_games.games.leaderboards.get({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * language `string`: The preferred language to use for strings returned by this method.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Leaderboard](#leaderboard)

### games.scores.submit
Submits a score to the specified leaderboard.


```js
google_games.games.scores.submit({
  "leaderboardId": "",
  "score": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * score **required** `string`: The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
  * language `string`: The preferred language to use for strings returned by this method.
  * scoreTag `string`: Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PlayerScoreResponse](#playerscoreresponse)

### games.scores.list
Lists the scores in a leaderboard, starting from the top.


```js
google_games.games.scores.list({
  "leaderboardId": "",
  "collection": "",
  "timeSpan": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * collection **required** `string` (values: SCORE_COLLECTION_UNSPECIFIED, PUBLIC, SOCIAL, FRIENDS): The collection of scores you're requesting.
  * timeSpan **required** `string` (values: SCORE_TIME_SPAN_UNSPECIFIED, ALL_TIME, WEEKLY, DAILY): The time span for the scores and ranks you're requesting.
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
  * pageToken `string`: The token returned by the previous request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LeaderboardScores](#leaderboardscores)

### games.scores.listWindow
Lists the scores in a leaderboard around (and including) a player's score.


```js
google_games.games.scores.listWindow({
  "leaderboardId": "",
  "collection": "",
  "timeSpan": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * collection **required** `string` (values: SCORE_COLLECTION_UNSPECIFIED, PUBLIC, SOCIAL, FRIENDS): The collection of scores you're requesting.
  * timeSpan **required** `string` (values: SCORE_TIME_SPAN_UNSPECIFIED, ALL_TIME, WEEKLY, DAILY): The time span for the scores and ranks you're requesting.
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
  * pageToken `string`: The token returned by the previous request.
  * resultsAbove `integer`: The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
  * returnTopIfAbsent `boolean`: True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [LeaderboardScores](#leaderboardscores)

### games.metagame.getMetagameConfig
Return the metagame configuration data for the calling application.


```js
google_games.games.metagame.getMetagameConfig({}, context)
```

#### Input
* input `object`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [MetagameConfig](#metagameconfig)

### games.players.list
Get the collection of players for the currently authenticated user.


```js
google_games.games.players.list({
  "collection": ""
}, context)
```

#### Input
* input `object`
  * collection **required** `string` (values: CONNECTED, VISIBLE, FRIENDS_ALL): Collection of players being retrieved
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`.
  * pageToken `string`: The token returned by the previous request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PlayerListResponse](#playerlistresponse)

### games.players.get
Retrieves the Player resource with the given ID. To retrieve the player for the currently authenticated user, set `playerId` to `me`.


```js
google_games.games.players.get({
  "playerId": ""
}, context)
```

#### Input
* input `object`
  * playerId **required** `string`: A player ID. A value of `me` may be used in place of the authenticated player's ID.
  * language `string`: The preferred language to use for strings returned by this method.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Player](#player)

### games.achievements.list
Lists the progress for all your application's achievements for the currently authenticated player.


```js
google_games.games.achievements.list({
  "playerId": ""
}, context)
```

#### Input
* input `object`
  * playerId **required** `string`: A player ID. A value of `me` may be used in place of the authenticated player's ID.
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified `maxResults`.
  * pageToken `string`: The token returned by the previous request.
  * state `string` (values: ALL, HIDDEN, REVEALED, UNLOCKED): Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PlayerAchievementListResponse](#playerachievementlistresponse)

### games.metagame.listCategoriesByPlayer
List play data aggregated per category for the player corresponding to `playerId`.


```js
google_games.games.metagame.listCategoriesByPlayer({
  "playerId": "",
  "collection": ""
}, context)
```

#### Input
* input `object`
  * playerId **required** `string`: A player ID. A value of `me` may be used in place of the authenticated player's ID.
  * collection **required** `string` (values: COLLECTION_UNSPECIFIED, ALL): The collection of categories for which data will be returned.
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified `maxResults`.
  * pageToken `string`: The token returned by the previous request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CategoryListResponse](#categorylistresponse)

### games.scores.get
Get high scores, and optionally ranks, in leaderboards for the currently authenticated player. For a specific time span, `leaderboardId` can be set to `ALL` to retrieve data for all leaderboards in a given time span. `NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in the same request; only one parameter may be set to 'ALL'.


```js
google_games.games.scores.get({
  "playerId": "",
  "leaderboardId": "",
  "timeSpan": ""
}, context)
```

#### Input
* input `object`
  * playerId **required** `string`: A player ID. A value of `me` may be used in place of the authenticated player's ID.
  * leaderboardId **required** `string`: The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
  * timeSpan **required** `string` (values: SCORE_TIME_SPAN_UNSPECIFIED, ALL, ALL_TIME, WEEKLY, DAILY): The time span for the scores and ranks you're requesting.
  * includeRankType `string` (values: INCLUDE_RANK_TYPE_UNSPECIFIED, ALL, PUBLIC, SOCIAL, FRIENDS): The types of ranks to return. If the parameter is omitted, no ranks will be returned.
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified `maxResults`.
  * pageToken `string`: The token returned by the previous request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [PlayerLeaderboardScoreListResponse](#playerleaderboardscorelistresponse)

### games.snapshots.list
Retrieves a list of snapshots created by your application for the player corresponding to the player ID.


```js
google_games.games.snapshots.list({
  "playerId": ""
}, context)
```

#### Input
* input `object`
  * playerId **required** `string`: A player ID. A value of `me` may be used in place of the authenticated player's ID.
  * language `string`: The preferred language to use for strings returned by this method.
  * maxResults `integer`: The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified `maxResults`.
  * pageToken `string`: The token returned by the previous request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SnapshotListResponse](#snapshotlistresponse)

### games.revisions.check
Checks whether the games client is out of date.


```js
google_games.games.revisions.check({
  "clientRevision": ""
}, context)
```

#### Input
* input `object`
  * clientRevision **required** `string`: The revision of the client SDK used by your application. Format: `[PLATFORM_TYPE]:[VERSION_NUMBER]`. Possible values of `PLATFORM_TYPE` are: * `ANDROID` - Client is running the Android SDK. * `IOS` - Client is running the iOS SDK. * `WEB_APP` - Client is running as a Web App.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [RevisionCheckResponse](#revisioncheckresponse)

### games.snapshots.get
Retrieves the metadata for a given snapshot ID.


```js
google_games.games.snapshots.get({
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * snapshotId **required** `string`: The ID of the snapshot.
  * language `string`: The preferred language to use for strings returned by this method.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Snapshot](#snapshot)

### games.snapshotsExtended.resolveSnapshotHead
Resolves any potential conflicts according to the resolution policy specified in the request and returns the snapshot head after the resolution.


```js
google_games.games.snapshotsExtended.resolveSnapshotHead({
  "snapshotName": ""
}, context)
```

#### Input
* input `object`
  * snapshotName **required** `string`: Required. Name of the snapshot.
  * body [ResolveSnapshotHeadRequest](#resolvesnapshotheadrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ResolveSnapshotHeadResponse](#resolvesnapshotheadresponse)

### games.stats.get
Returns engagement and spend statistics in this application for the currently authenticated user.


```js
google_games.games.stats.get({}, context)
```

#### Input
* input `object`
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StatsResponse](#statsresponse)



## Definitions

### AchievementDefinition
* AchievementDefinition `object`: An achievement definition object.
  * achievementType `string` (values: ACHIEVEMENT_TYPE_UNSPECIFIED, STANDARD, INCREMENTAL): The type of the achievement.
  * description `string`: The description of the achievement.
  * experiencePoints `string`: Experience points which will be earned when unlocking this achievement.
  * formattedTotalSteps `string`: The total steps for an incremental achievement as a string.
  * id `string`: The ID of the achievement.
  * initialState `string` (values: INITIAL_ACHIEVEMENT_STATE_UNSPECIFIED, HIDDEN, REVEALED, UNLOCKED): The initial state of the achievement.
  * isRevealedIconUrlDefault `boolean`: Indicates whether the revealed icon image being returned is a default image, or is provided by the game.
  * isUnlockedIconUrlDefault `boolean`: Indicates whether the unlocked icon image being returned is a default image, or is game-provided.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementDefinition`.
  * name `string`: The name of the achievement.
  * revealedIconUrl `string`: The image URL for the revealed achievement icon.
  * totalSteps `integer`: The total steps for an incremental achievement.
  * unlockedIconUrl `string`: The image URL for the unlocked achievement icon.

### AchievementDefinitionsListResponse
* AchievementDefinitionsListResponse `object`: A list of achievement definition objects.
  * items `array`: The achievement definitions.
    * items [AchievementDefinition](#achievementdefinition)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementDefinitionsListResponse`.
  * nextPageToken `string`: Token corresponding to the next page of results.

### AchievementIncrementResponse
* AchievementIncrementResponse `object`: An achievement increment response
  * currentSteps `integer`: The current steps recorded for this incremental achievement.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementIncrementResponse`.
  * newlyUnlocked `boolean`: Whether the current steps for the achievement has reached the number of steps required to unlock.

### AchievementRevealResponse
* AchievementRevealResponse `object`: An achievement reveal response
  * currentState `string` (values: REVEAL_ACHIEVEMENT_STATE_UNSPECIFIED, REVEALED, UNLOCKED): The current state of the achievement for which a reveal was attempted. This might be `UNLOCKED` if the achievement was already unlocked.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementRevealResponse`.

### AchievementSetStepsAtLeastResponse
* AchievementSetStepsAtLeastResponse `object`: An achievement set steps at least response.
  * currentSteps `integer`: The current steps recorded for this incremental achievement.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementSetStepsAtLeastResponse`.
  * newlyUnlocked `boolean`: Whether the current steps for the achievement has reached the number of steps required to unlock.

### AchievementUnlockResponse
* AchievementUnlockResponse `object`: An achievement unlock response
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUnlockResponse`.
  * newlyUnlocked `boolean`: Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).

### AchievementUpdateMultipleRequest
* AchievementUpdateMultipleRequest `object`: A list of achievement update requests.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleRequest`.
  * updates `array`: The individual achievement update requests.
    * items [AchievementUpdateRequest](#achievementupdaterequest)

### AchievementUpdateMultipleResponse
* AchievementUpdateMultipleResponse `object`: Response message for UpdateMultipleAchievements rpc.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleResponse`.
  * updatedAchievements `array`: The updated state of the achievements.
    * items [AchievementUpdateResponse](#achievementupdateresponse)

### AchievementUpdateRequest
* AchievementUpdateRequest `object`: A request to update an achievement.
  * achievementId `string`: The achievement this update is being applied to.
  * incrementPayload [GamesAchievementIncrement](#gamesachievementincrement)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateRequest`.
  * setStepsAtLeastPayload [GamesAchievementSetStepsAtLeast](#gamesachievementsetstepsatleast)
  * updateType `string` (values: ACHIEVEMENT_UPDATE_TYPE_UNSPECIFIED, REVEAL, UNLOCK, INCREMENT, SET_STEPS_AT_LEAST): The type of update being applied.

### AchievementUpdateResponse
* AchievementUpdateResponse `object`: An updated achievement.
  * achievementId `string`: The achievement this update is was applied to.
  * currentState `string` (values: UPDATED_ACHIEVEMENT_STATE_UNSPECIFIED, HIDDEN, REVEALED, UNLOCKED): The current state of the achievement.
  * currentSteps `integer`: The current steps recorded for this achievement if it is incremental.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateResponse`.
  * newlyUnlocked `boolean`: Whether this achievement was newly unlocked (that is, whether the unlock request for the achievement was the first for the player).
  * updateOccurred `boolean`: Whether the requested updates actually affected the achievement.

### Application
* Application `object`: The Application resource.
  * achievement_count `integer`: The number of achievements visible to the currently authenticated player.
  * assets `array`: The assets of the application.
    * items [ImageAsset](#imageasset)
  * author `string`: The author of the application.
  * category [ApplicationCategory](#applicationcategory)
  * description `string`: The description of the application.
  * enabledFeatures `array`: A list of features that have been enabled for the application.
    * items `string` (values: APPLICATION_FEATURE_UNSPECIFIED, SNAPSHOTS)
  * id `string`: The ID of the application.
  * instances `array`: The instances of the application.
    * items [Instance](#instance)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#application`.
  * lastUpdatedTimestamp `string`: The last updated timestamp of the application.
  * leaderboard_count `integer`: The number of leaderboards visible to the currently authenticated player.
  * name `string`: The name of the application.
  * themeColor `string`: A hint to the client UI for what color to use as an app-themed color. The color is given as an RGB triplet (e.g. "E0E0E0").

### ApplicationCategory
* ApplicationCategory `object`: An application category object.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#applicationCategory`.
  * primary `string`: The primary category.
  * secondary `string`: The secondary category.

### ApplicationVerifyResponse
* ApplicationVerifyResponse `object`: A third party application verification response resource.
  * alternate_player_id `string`: An alternate ID that was once used for the player that was issued the auth token used in this request. (This field is not normally populated.)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#applicationVerifyResponse`.
  * player_id `string`: The ID of the player that was issued the auth token used in this request.

### Category
* Category `object`: Data related to individual game categories.
  * category `string`: The category name.
  * experiencePoints `string`: Experience points earned in this category.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#category`.

### CategoryListResponse
* CategoryListResponse `object`: A third party list metagame categories response.
  * items `array`: The list of categories with usage data.
    * items [Category](#category)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#categoryListResponse`.
  * nextPageToken `string`: Token corresponding to the next page of results.

### EndPoint
* EndPoint `object`: Container for a URL end point of the requested type.
  * url `string`: A URL suitable for loading in a web browser for the requested endpoint.

### EventBatchRecordFailure
* EventBatchRecordFailure `object`: A batch update failure resource.
  * failureCause `string` (values: EVENT_FAILURE_CAUSE_UNSPECIFIED, TOO_LARGE, TIME_PERIOD_EXPIRED, TIME_PERIOD_SHORT, TIME_PERIOD_LONG, ALREADY_UPDATED, RECORD_RATE_HIGH): The cause for the update failure.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#eventBatchRecordFailure`.
  * range [EventPeriodRange](#eventperiodrange)

### EventChild
* EventChild `object`: An event child relationship resource.
  * childId `string`: The ID of the child event.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#eventChild`.

### EventDefinition
* EventDefinition `object`: An event definition resource.
  * childEvents `array`: A list of events that are a child of this event.
    * items [EventChild](#eventchild)
  * description `string`: Description of what this event represents.
  * displayName `string`: The name to display for the event.
  * id `string`: The ID of the event.
  * imageUrl `string`: The base URL for the image that represents the event.
  * isDefaultImageUrl `boolean`: Indicates whether the icon image being returned is a default image, or is game-provided.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#eventDefinition`.
  * visibility `string` (values: EVENT_VISIBILITY_UNSPECIFIED, REVEALED, HIDDEN): The visibility of event being tracked in this definition.

### EventDefinitionListResponse
* EventDefinitionListResponse `object`: A ListDefinitions response.
  * items `array`: The event definitions.
    * items [EventDefinition](#eventdefinition)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#eventDefinitionListResponse`.
  * nextPageToken `string`: The pagination token for the next page of results.

### EventPeriodRange
* EventPeriodRange `object`: An event period time range.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#eventPeriodRange`.
  * periodEndMillis `string`: The time when this update period ends, in millis, since 1970 UTC (Unix Epoch).
  * periodStartMillis `string`: The time when this update period begins, in millis, since 1970 UTC (Unix Epoch).

### EventPeriodUpdate
* EventPeriodUpdate `object`: An event period update resource.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#eventPeriodUpdate`.
  * timePeriod [EventPeriodRange](#eventperiodrange)
  * updates `array`: The updates being made for this time period.
    * items [EventUpdateRequest](#eventupdaterequest)

### EventRecordFailure
* EventRecordFailure `object`: An event update failure resource.
  * eventId `string`: The ID of the event that was not updated.
  * failureCause `string` (values: EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED, NOT_FOUND, INVALID_UPDATE_VALUE): The cause for the update failure.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordFailure`.

### EventRecordRequest
* EventRecordRequest `object`: An event period update resource.
  * currentTimeMillis `string`: The current time when this update was sent, in milliseconds, since 1970 UTC (Unix Epoch).
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#eventRecordRequest`.
  * requestId `string`: The request ID used to identify this attempt to record events.
  * timePeriods `array`: A list of the time period updates being made in this request.
    * items [EventPeriodUpdate](#eventperiodupdate)

### EventUpdateRequest
* EventUpdateRequest `object`: An event period update resource.
  * definitionId `string`: The ID of the event being modified in this update.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateRequest`.
  * updateCount `string`: The number of times this event occurred in this time period.

### EventUpdateResponse
* EventUpdateResponse `object`: An event period update resource.
  * batchFailures `array`: Any batch-wide failures which occurred applying updates.
    * items [EventBatchRecordFailure](#eventbatchrecordfailure)
  * eventFailures `array`: Any failures updating a particular event.
    * items [EventRecordFailure](#eventrecordfailure)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#eventUpdateResponse`.
  * playerEvents `array`: The current status of any updated events
    * items [PlayerEvent](#playerevent)

### GamesAchievementIncrement
* GamesAchievementIncrement `object`: The payload to request to increment an achievement.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementIncrement`.
  * requestId `string`: The requestId associated with an increment to an achievement.
  * steps `integer`: The number of steps to be incremented.

### GamesAchievementSetStepsAtLeast
* GamesAchievementSetStepsAtLeast `object`: The payload to request to increment an achievement.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#GamesAchievementSetStepsAtLeast`.
  * steps `integer`: The minimum number of steps for the achievement to be set to.

### ImageAsset
* ImageAsset `object`: An image asset object.
  * height `integer`: The height of the asset.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#imageAsset`.
  * name `string`: The name of the asset.
  * url `string`: The URL of the asset.
  * width `integer`: The width of the asset.

### Instance
* Instance `object`: The Instance resource.
  * acquisitionUri `string`: URI which shows where a user can acquire this instance.
  * androidInstance [InstanceAndroidDetails](#instanceandroiddetails)
  * iosInstance [InstanceIosDetails](#instanceiosdetails)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#instance`.
  * name `string`: Localized display name.
  * platformType `string` (values: PLATFORM_TYPE_UNSPECIFIED, ANDROID, IOS, WEB_APP): The platform type.
  * realtimePlay `boolean`: Flag to show if this game instance supports realtime play.
  * turnBasedPlay `boolean`: Flag to show if this game instance supports turn based play.
  * webInstance [InstanceWebDetails](#instancewebdetails)

### InstanceAndroidDetails
* InstanceAndroidDetails `object`: The Android instance details resource.
  * enablePiracyCheck `boolean`: Flag indicating whether the anti-piracy check is enabled.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceAndroidDetails`.
  * packageName `string`: Android package name which maps to Google Play URL.
  * preferred `boolean`: Indicates that this instance is the default for new installations.

### InstanceIosDetails
* InstanceIosDetails `object`: The iOS details resource.
  * bundleIdentifier `string`: Bundle identifier.
  * itunesAppId `string`: iTunes App ID.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceIosDetails`.
  * preferredForIpad `boolean`: Indicates that this instance is the default for new installations on iPad devices.
  * preferredForIphone `boolean`: Indicates that this instance is the default for new installations on iPhone devices.
  * supportIpad `boolean`: Flag to indicate if this instance supports iPad.
  * supportIphone `boolean`: Flag to indicate if this instance supports iPhone.

### InstanceWebDetails
* InstanceWebDetails `object`: The Web details resource.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#instanceWebDetails`.
  * launchUrl `string`: Launch URL for the game.
  * preferred `boolean`: Indicates that this instance is the default for new installations.

### Leaderboard
* Leaderboard `object`: The Leaderboard resource.
  * iconUrl `string`: The icon for the leaderboard.
  * id `string`: The leaderboard ID.
  * isIconUrlDefault `boolean`: Indicates whether the icon image being returned is a default image, or is game-provided.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboard`.
  * name `string`: The name of the leaderboard.
  * order `string` (values: SCORE_ORDER_UNSPECIFIED, LARGER_IS_BETTER, SMALLER_IS_BETTER): How scores are ordered.

### LeaderboardEntry
* LeaderboardEntry `object`: The Leaderboard Entry resource.
  * formattedScore `string`: The localized string for the numerical value of this score.
  * formattedScoreRank `string`: The localized string for the rank of this score for this leaderboard.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardEntry`.
  * player [Player](#player)
  * scoreRank `string`: The rank of this score for this leaderboard.
  * scoreTag `string`: Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
  * scoreValue `string`: The numerical value of this score.
  * timeSpan `string` (values: SCORE_TIME_SPAN_UNSPECIFIED, ALL_TIME, WEEKLY, DAILY): The time span of this high score.
  * writeTimestampMillis `string`: The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.

### LeaderboardListResponse
* LeaderboardListResponse `object`: A list of leaderboard objects.
  * items `array`: The leaderboards.
    * items [Leaderboard](#leaderboard)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardListResponse`.
  * nextPageToken `string`: Token corresponding to the next page of results.

### LeaderboardScoreRank
* LeaderboardScoreRank `object`: A score rank in a leaderboard.
  * formattedNumScores `string`: The number of scores in the leaderboard as a string.
  * formattedRank `string`: The rank in the leaderboard as a string.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardScoreRank`.
  * numScores `string`: The number of scores in the leaderboard.
  * rank `string`: The rank in the leaderboard.

### LeaderboardScores
* LeaderboardScores `object`: A ListScores response.
  * items `array`: The scores in the leaderboard.
    * items [LeaderboardEntry](#leaderboardentry)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#leaderboardScores`.
  * nextPageToken `string`: The pagination token for the next page of results.
  * numScores `string`: The total number of scores in the leaderboard.
  * playerScore [LeaderboardEntry](#leaderboardentry)
  * prevPageToken `string`: The pagination token for the previous page of results.

### MetagameConfig
* MetagameConfig `object`: The metagame config resource
  * currentVersion `integer`: Current version of the metagame configuration data. When this data is updated, the version number will be increased by one.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#metagameConfig`.
  * playerLevels `array`: The list of player levels.
    * items [PlayerLevel](#playerlevel)

### Player
* Player `object`: A Player resource.
  * avatarImageUrl `string`: The base URL for the image that represents the player.
  * bannerUrlLandscape `string`: The url to the landscape mode player banner image.
  * bannerUrlPortrait `string`: The url to the portrait mode player banner image.
  * displayName `string`: The name to display for the player.
  * experienceInfo [PlayerExperienceInfo](#playerexperienceinfo)
  * friendStatus `string` (values: FRIEND_STATUS_UNSPECIFIED, NO_RELATIONSHIP, FRIEND): The friend status of the given player, relative to the requester. This is unset if the player is not sharing their friends list with the game.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#player`
  * name `object`: A representation of the individual components of the name.
    * familyName `string`: The family name of this player. In some places, this is known as the last name.
    * givenName `string`: The given name of this player. In some places, this is known as the first name.
  * originalPlayerId `string`: The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs.
  * playerId `string`: The ID of the player.
  * profileSettings [ProfileSettings](#profilesettings)
  * title `string`: The player's title rewarded for their game activities.

### PlayerAchievement
* PlayerAchievement `object`: An achievement object.
  * achievementState `string` (values: STATE_UNSPECIFIED, HIDDEN, REVEALED, UNLOCKED): The state of the achievement.
  * currentSteps `integer`: The current steps for an incremental achievement.
  * experiencePoints `string`: Experience points earned for the achievement. This field is absent for achievements that have not yet been unlocked and 0 for achievements that have been unlocked by testers but that are unpublished.
  * formattedCurrentStepsString `string`: The current steps for an incremental achievement as a string.
  * id `string`: The ID of the achievement.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerAchievement`.
  * lastUpdatedTimestamp `string`: The timestamp of the last modification to this achievement's state.

### PlayerAchievementListResponse
* PlayerAchievementListResponse `object`: A list of achievement objects.
  * items `array`: The achievements.
    * items [PlayerAchievement](#playerachievement)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerAchievementListResponse`.
  * nextPageToken `string`: Token corresponding to the next page of results.

### PlayerEvent
* PlayerEvent `object`: An event status resource.
  * definitionId `string`: The ID of the event definition.
  * formattedNumEvents `string`: The current number of times this event has occurred, as a string. The formatting of this string depends on the configuration of your event in the Play Games Developer Console.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerEvent`.
  * numEvents `string`: The current number of times this event has occurred.
  * playerId `string`: The ID of the player.

### PlayerEventListResponse
* PlayerEventListResponse `object`: A ListByPlayer response.
  * items `array`: The player events.
    * items [PlayerEvent](#playerevent)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerEventListResponse`.
  * nextPageToken `string`: The pagination token for the next page of results.

### PlayerExperienceInfo
* PlayerExperienceInfo `object`: 1P/3P metadata about the player's experience.
  * currentExperiencePoints `string`: The current number of experience points for the player.
  * currentLevel [PlayerLevel](#playerlevel)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerExperienceInfo`.
  * lastLevelUpTimestampMillis `string`: The timestamp when the player was leveled up, in millis since Unix epoch UTC.
  * nextLevel [PlayerLevel](#playerlevel)

### PlayerLeaderboardScore
* PlayerLeaderboardScore `object`: A player leaderboard score object.
  * friendsRank [LeaderboardScoreRank](#leaderboardscorerank)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLeaderboardScore`.
  * leaderboard_id `string`: The ID of the leaderboard this score is in.
  * publicRank [LeaderboardScoreRank](#leaderboardscorerank)
  * scoreString `string`: The formatted value of this score.
  * scoreTag `string`: Additional information about the score. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
  * scoreValue `string`: The numerical value of this score.
  * socialRank [LeaderboardScoreRank](#leaderboardscorerank)
  * timeSpan `string` (values: SCORE_TIME_SPAN_UNSPECIFIED, ALL_TIME, WEEKLY, DAILY): The time span of this score.
  * writeTimestamp `string`: The timestamp at which this score was recorded, in milliseconds since the epoch in UTC.

### PlayerLeaderboardScoreListResponse
* PlayerLeaderboardScoreListResponse `object`: A list of player leaderboard scores.
  * items `array`: The leaderboard scores.
    * items [PlayerLeaderboardScore](#playerleaderboardscore)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLeaderboardScoreListResponse`.
  * nextPageToken `string`: The pagination token for the next page of results.
  * player [Player](#player)

### PlayerLevel
* PlayerLevel `object`: 1P/3P metadata about a user's level.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerLevel`.
  * level `integer`: The level for the user.
  * maxExperiencePoints `string`: The maximum experience points for this level.
  * minExperiencePoints `string`: The minimum experience points for this level.

### PlayerListResponse
* PlayerListResponse `object`: A third party player list response.
  * items `array`: The players.
    * items [Player](#player)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerListResponse`.
  * nextPageToken `string`: Token corresponding to the next page of results.

### PlayerScore
* PlayerScore `object`: A player score.
  * formattedScore `string`: The formatted score for this player score.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScore`.
  * score `string`: The numerical value for this player score.
  * scoreTag `string`: Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
  * timeSpan `string` (values: SCORE_TIME_SPAN_UNSPECIFIED, ALL_TIME, WEEKLY, DAILY): The time span for this player score.

### PlayerScoreListResponse
* PlayerScoreListResponse `object`: A list of score submission statuses.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreListResponse`.
  * submittedScores `array`: The score submissions statuses.
    * items [PlayerScoreResponse](#playerscoreresponse)

### PlayerScoreResponse
* PlayerScoreResponse `object`: A list of leaderboard entry resources.
  * beatenScoreTimeSpans `array`: The time spans where the submitted score is better than the existing score for that time span.
    * items `string` (values: SCORE_TIME_SPAN_UNSPECIFIED, ALL_TIME, WEEKLY, DAILY)
  * formattedScore `string`: The formatted value of the submitted score.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreResponse`.
  * leaderboardId `string`: The leaderboard ID that this score was submitted to.
  * scoreTag `string`: Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
  * unbeatenScores `array`: The scores in time spans that have not been beaten. As an example, the submitted score may be better than the player's `DAILY` score, but not better than the player's scores for the `WEEKLY` or `ALL_TIME` time spans.
    * items [PlayerScore](#playerscore)

### PlayerScoreSubmissionList
* PlayerScoreSubmissionList `object`: A list of score submission requests.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreSubmissionList`.
  * scores `array`: The score submissions.
    * items [ScoreSubmission](#scoresubmission)

### ProfileSettings
* ProfileSettings `object`: Profile settings
  * friendsListVisibility `string` (values: FRIENDS_LIST_VISIBILITY_UNSPECIFIED, VISIBLE, REQUEST_REQUIRED, UNAVAILABLE)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#profileSettings`.
  * profileVisible `boolean`: Whether the player's profile is visible to the currently signed in player.

### ResolveSnapshotHeadRequest
* ResolveSnapshotHeadRequest `object`: Request for ResolveSnapshotHead RPC.
  * resolutionPolicy `string` (values: RESOLUTION_POLICY_UNSPECIFIED, USE_HEAD, LONGEST_PLAYTIME, MOST_RECENTLY_MODIFIED, HIGHEST_PROGRESS, NO_AUTOMATIC_RESOLUTION): Required. The automatic resolution policy. All conflicts are resolved in chronological order, starting from the/ least recent. If the comparison metric is equal for the tentative head and the conflict, the head wins.

### ResolveSnapshotHeadResponse
* ResolveSnapshotHeadResponse `object`: Response for ResolveSnapshotHead RPC.
  * snapshot [SnapshotExtended](#snapshotextended)

### RevisionCheckResponse
* RevisionCheckResponse `object`: A third party checking a revision response.
  * apiVersion `string`: The version of the API this client revision should use when calling API methods.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#revisionCheckResponse`.
  * revisionStatus `string` (values: REVISION_STATUS_UNSPECIFIED, OK, DEPRECATED, INVALID): The result of the revision check.

### ScoreSubmission
* ScoreSubmission `object`: A request to submit a score to leaderboards.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#scoreSubmission`.
  * leaderboardId `string`: The leaderboard this score is being submitted to.
  * score `string`: The new score being submitted.
  * scoreTag `string`: Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
  * signature `string`: Signature Values will contain URI-safe characters as defined by section 2.3 of RFC 3986.

### Snapshot
* Snapshot `object`: An snapshot object.
  * coverImage [SnapshotImage](#snapshotimage)
  * description `string`: The description of this snapshot.
  * driveId `string`: The ID of the file underlying this snapshot in the Drive API. Only present if the snapshot is a view on a Drive file and the file is owned by the caller.
  * durationMillis `string`: The duration associated with this snapshot, in millis.
  * id `string`: The ID of the snapshot.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshot`.
  * lastModifiedMillis `string`: The timestamp (in millis since Unix epoch) of the last modification to this snapshot.
  * progressValue `string`: The progress value (64-bit integer set by developer) associated with this snapshot.
  * title `string`: The title of this snapshot.
  * type `string` (values: SNAPSHOT_TYPE_UNSPECIFIED, SAVE_GAME): The type of this snapshot.
  * uniqueName `string`: The unique name provided when the snapshot was created.

### SnapshotCoverImageResource
* SnapshotCoverImageResource `object`: Identifies a snapshot cover image resource. The image is provided by the game.
  * contentHash `string`: Output only. Hash-like weak identifier of the uploaded image bytes, consistent per player per application. The content hash for a given resource will not change if the binary data hasn't changed. Except in very rare circumstances, the content_hash for matching binary data will be the same within a given player and application.
  * downloadUrl `string`: Output only. A URL the client can use to download the image. May vary across requests, and only guaranteed to be valid for a short time after it is returned.
  * height `integer`: The height of the image in pixels.
  * mimeType `string`: The MIME type of the image.
  * resourceId `string`: The ID of the image resource. It's guaranteed that if two IDs are equal then the contents are equal as well. It's not guaranteed that two identical blobs coming from separate uploads have the same ID. The resource ID can only be used within the application, user and resource type it was originally returned for. For example, it's not possible to use SnapshotDataResource's resource ID as the resource_id of a SnapshotCoverImageResource, even if the blob is a valid image file.
  * width `integer`: The width of the image in pixels.

### SnapshotDataResource
* SnapshotDataResource `object`: Identifies a snapshot data resource. The data is provided by the game.
  * contentHash `string`: Output only. Hash-like weak identifier of the uploaded blob bytes, consistent per player per application. The content hash for a given resource will not change if the binary data hasn't changed. Except in very rare circumstances, the content_hash for matching binary data will be the same within a given player and application.
  * downloadUrl `string`: Output only. A URL that the client can use to download the blob. May vary across requests, and only guaranteed to be valid for a short time after it is returned.
  * resourceId `string`: The ID of the blob resource. It's guaranteed that if two IDs are equal then the contents are equal as well. It's not guaranteed that two identical blobs coming from separate uploads have the same resource ID. The resource ID can only be used within the application, user and resource type it was originally returned for. For example, it's not possible to use SnapshotDataResource's resource ID as the resource_id of a SnapshotCoverImageResource, even if the blob is a valid image file.
  * size `string`: Output only. Size of the saved game blob in bytes.

### SnapshotExtended
* SnapshotExtended `object`: A snapshot represents a saved game state referred to using the developer-provided snapshot_name. The set of attributes and binary data for a specific state is called a revision. Each revision is itself immutable, and referred to by a snapshot revision id. At any time, a snapshot has a "head" revision, and updates are made against that revision. If a snapshot update is received that isn't against the current head revision, then instead of changing the head revision it will result in a conflicting revision that must be specifically resolved.
  * conflictingRevisions `array`: A list of conflicting revisions. Only set if explicitly requested (e.g. using a field mask or a request flag), or if the RPC guarantees that this field is set. The conflicting revisions are sorted chronologically by their server creation time (oldest first). If there are too many conflicting revisions to return all of them in a single request this will only contain the first batch. In such case, the presented conflicting revisions must be resolved first in order to fetch the next batch.
    * items [SnapshotRevision](#snapshotrevision)
  * hasConflictingRevisions `boolean`: An indicator whether the snapshot has any conflicting revisions or not. Always set.
  * headRevision [SnapshotRevision](#snapshotrevision)
  * snapshotName `string`: An identifier of the snapshot, developer-specified. It must match the pattern [0-9a-zA-Z-._~]{1,100}.

### SnapshotImage
* SnapshotImage `object`: An image of a snapshot.
  * height `integer`: The height of the image.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshotImage`.
  * mime_type `string`: The MIME type of the image.
  * url `string`: The URL of the image. This URL may be invalidated at any time and should not be cached.
  * width `integer`: The width of the image.

### SnapshotListResponse
* SnapshotListResponse `object`: A third party list snapshots response.
  * items `array`: The snapshots.
    * items [Snapshot](#snapshot)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#snapshotListResponse`.
  * nextPageToken `string`: Token corresponding to the next page of results. If there are no more results, the token is omitted.

### SnapshotMetadata
* SnapshotMetadata `object`: Metadata about a snapshot revision. Snapshot metadata is immutable - a metadata change corresponds to a new snapshot revision.
  * description `string`: The description of this snapshot.
  * deviceName `string`: The device that created the current revision.
  * gameplayDuration `string`: The duration associated with this snapshot. Values with sub-millisecond precision can be rounded or trimmed to the closest millisecond.
  * lastModifyTime `string`: The timestamp of the last modification to this snapshot as provided by the client. Values with sub-millisecond precision can be rounded or trimmed to the closest millisecond.
  * progressValue `string`: The progress value (64-bit integer set by developer) associated with this snapshot.

### SnapshotRevision
* SnapshotRevision `object`: A Snapshot revision resource. Snapshot revisions are immutable.
  * blob [SnapshotDataResource](#snapshotdataresource)
  * coverImage [SnapshotCoverImageResource](#snapshotcoverimageresource)
  * id `string`: Output only. A server generated identifier of the snapshot revision.
  * metadata [SnapshotMetadata](#snapshotmetadata)

### StatsResponse
* StatsResponse `object`: A third party stats resource.
  * avg_session_length_minutes `number`: Average session length in minutes of the player. E.g., 1, 30, 60, ... . Not populated if there is not enough information.
  * churn_probability `number`: The probability of the player not returning to play the game in the next day. E.g., 0, 0.1, 0.5, ..., 1.0. Not populated if there is not enough information.
  * days_since_last_played `integer`: Number of days since the player last played this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information.
  * high_spender_probability `number`: The probability of the player going to spend beyond a threshold amount of money. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `games#statsResponse`.
  * num_purchases `integer`: Number of in-app purchases made by the player in this game. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information.
  * num_sessions `integer`: The approximate number of sessions of the player within the last 28 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 1, 5, 10, ... . Not populated if there is not enough information.
  * num_sessions_percentile `number`: The approximation of the sessions percentile of the player within the last 30 days, where a session begins when the player is connected to Play Games Services and ends when they are disconnected. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information.
  * spend_percentile `number`: The approximate spend percentile of the player in this game. E.g., 0, 0.25, 0.5, 0.75. Not populated if there is not enough information.
  * spend_probability `number`: The probability of the player going to spend the game in the next seven days. E.g., 0, 0.25, 0.50, 0.75. Not populated if there is not enough information.
  * total_spend_next_28_days `number`: The predicted amount of money that the player going to spend in the next 28 days. E.g., 1, 30, 60, ... . Not populated if there is not enough information.


