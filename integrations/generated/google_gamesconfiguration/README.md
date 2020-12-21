# @datafire/google_gamesconfiguration

Client library for Google Play Game Services Publishing API

## Installation and Usage
```bash
npm install --save @datafire/google_gamesconfiguration
```
```js
let google_gamesconfiguration = require('@datafire/google_gamesconfiguration').create({
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

The Google Play Game Services Publishing API allows developers to configure their games in Game Services.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_gamesconfiguration.oauthCallback({
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
google_gamesconfiguration.oauthRefresh(null, context)
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

### gamesConfiguration.achievementConfigurations.delete
Delete the achievement configuration with the given ID.


```js
google_gamesconfiguration.gamesConfiguration.achievementConfigurations.delete({
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
*Output schema unknown*

### gamesConfiguration.achievementConfigurations.get
Retrieves the metadata of the achievement configuration with the given ID.


```js
google_gamesconfiguration.gamesConfiguration.achievementConfigurations.get({
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
* output [AchievementConfiguration](#achievementconfiguration)

### gamesConfiguration.achievementConfigurations.update
Update the metadata of the achievement configuration with the given ID.


```js
google_gamesconfiguration.gamesConfiguration.achievementConfigurations.update({
  "achievementId": ""
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * body [AchievementConfiguration](#achievementconfiguration)
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
* output [AchievementConfiguration](#achievementconfiguration)

### gamesConfiguration.achievementConfigurations.list
Returns a list of the achievement configurations in this application.


```js
google_gamesconfiguration.gamesConfiguration.achievementConfigurations.list({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * maxResults `integer`: The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`.
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
* output [AchievementConfigurationListResponse](#achievementconfigurationlistresponse)

### gamesConfiguration.achievementConfigurations.insert
Insert a new achievement configuration in this application.


```js
google_gamesconfiguration.gamesConfiguration.achievementConfigurations.insert({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * body [AchievementConfiguration](#achievementconfiguration)
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
* output [AchievementConfiguration](#achievementconfiguration)

### gamesConfiguration.leaderboardConfigurations.list
Returns a list of the leaderboard configurations in this application.


```js
google_gamesconfiguration.gamesConfiguration.leaderboardConfigurations.list({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * maxResults `integer`: The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`.
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
* output [LeaderboardConfigurationListResponse](#leaderboardconfigurationlistresponse)

### gamesConfiguration.leaderboardConfigurations.insert
Insert a new leaderboard configuration in this application.


```js
google_gamesconfiguration.gamesConfiguration.leaderboardConfigurations.insert({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * body [LeaderboardConfiguration](#leaderboardconfiguration)
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
* output [LeaderboardConfiguration](#leaderboardconfiguration)

### gamesConfiguration.imageConfigurations.upload
Uploads an image for a resource with the given ID and image type.


```js
google_gamesconfiguration.gamesConfiguration.imageConfigurations.upload({
  "resourceId": "",
  "imageType": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The ID of the resource used by this method.
  * imageType **required** `string` (values: IMAGE_TYPE_UNSPECIFIED, ACHIEVEMENT_ICON, LEADERBOARD_ICON): Selects which image in a resource for this method.
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
* output [ImageConfiguration](#imageconfiguration)

### gamesConfiguration.leaderboardConfigurations.delete
Delete the leaderboard configuration with the given ID.


```js
google_gamesconfiguration.gamesConfiguration.leaderboardConfigurations.delete({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
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

### gamesConfiguration.leaderboardConfigurations.get
Retrieves the metadata of the leaderboard configuration with the given ID.


```js
google_gamesconfiguration.gamesConfiguration.leaderboardConfigurations.get({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
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
* output [LeaderboardConfiguration](#leaderboardconfiguration)

### gamesConfiguration.leaderboardConfigurations.update
Update the metadata of the leaderboard configuration with the given ID.


```js
google_gamesconfiguration.gamesConfiguration.leaderboardConfigurations.update({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * body [LeaderboardConfiguration](#leaderboardconfiguration)
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
* output [LeaderboardConfiguration](#leaderboardconfiguration)



## Definitions

### AchievementConfiguration
* AchievementConfiguration `object`: An achievement configuration resource.
  * achievementType `string` (values: ACHIEVEMENT_TYPE_UNSPECIFIED, STANDARD, INCREMENTAL): The type of the achievement.
  * draft [AchievementConfigurationDetail](#achievementconfigurationdetail)
  * id `string`: The ID of the achievement.
  * initialState `string` (values: INITIAL_STATE_UNSPECIFIED, HIDDEN, REVEALED): The initial state of the achievement.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfiguration`.
  * published [AchievementConfigurationDetail](#achievementconfigurationdetail)
  * stepsToUnlock `integer`: Steps to unlock. Only applicable to incremental achievements.
  * token `string`: The token for this resource.

### AchievementConfigurationDetail
* AchievementConfigurationDetail `object`: An achievement configuration detail.
  * description [LocalizedStringBundle](#localizedstringbundle)
  * iconUrl `string`: The icon url of this achievement. Writes to this field are ignored.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationDetail`.
  * name [LocalizedStringBundle](#localizedstringbundle)
  * pointValue `integer`: Point value for the achievement.
  * sortRank `integer`: The sort rank of this achievement. Writes to this field are ignored.

### AchievementConfigurationListResponse
* AchievementConfigurationListResponse `object`: A ListConfigurations response.
  * items `array`: The achievement configurations.
    * items [AchievementConfiguration](#achievementconfiguration)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationListResponse`.
  * nextPageToken `string`: The pagination token for the next page of results.

### GamesNumberAffixConfiguration
* GamesNumberAffixConfiguration `object`: A number affix resource.
  * few [LocalizedStringBundle](#localizedstringbundle)
  * many [LocalizedStringBundle](#localizedstringbundle)
  * one [LocalizedStringBundle](#localizedstringbundle)
  * other [LocalizedStringBundle](#localizedstringbundle)
  * two [LocalizedStringBundle](#localizedstringbundle)
  * zero [LocalizedStringBundle](#localizedstringbundle)

### GamesNumberFormatConfiguration
* GamesNumberFormatConfiguration `object`: A number format resource.
  * currencyCode `string`: The curreny code string. Only used for CURRENCY format type.
  * numDecimalPlaces `integer`: The number of decimal places for number. Only used for NUMERIC format type.
  * numberFormatType `string` (values: NUMBER_FORMAT_TYPE_UNSPECIFIED, NUMERIC, TIME_DURATION, CURRENCY): The formatting for the number.
  * suffix [GamesNumberAffixConfiguration](#gamesnumberaffixconfiguration)

### ImageConfiguration
* ImageConfiguration `object`: An image configuration resource.
  * imageType `string` (values: IMAGE_TYPE_UNSPECIFIED, ACHIEVEMENT_ICON, LEADERBOARD_ICON): The image type for the image.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#imageConfiguration`.
  * resourceId `string`: The resource ID of resource which the image belongs to.
  * url `string`: The url for this image.

### LeaderboardConfiguration
* LeaderboardConfiguration `object`: An leaderboard configuration resource.
  * draft [LeaderboardConfigurationDetail](#leaderboardconfigurationdetail)
  * id `string`: The ID of the leaderboard.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfiguration`.
  * published [LeaderboardConfigurationDetail](#leaderboardconfigurationdetail)
  * scoreMax `string`: Maximum score that can be posted to this leaderboard.
  * scoreMin `string`: Minimum score that can be posted to this leaderboard.
  * scoreOrder `string` (values: SCORE_ORDER_UNSPECIFIED, LARGER_IS_BETTER, SMALLER_IS_BETTER)
  * token `string`: The token for this resource.

### LeaderboardConfigurationDetail
* LeaderboardConfigurationDetail `object`: A leaderboard configuration detail.
  * iconUrl `string`: The icon url of this leaderboard. Writes to this field are ignored.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationDetail`.
  * name [LocalizedStringBundle](#localizedstringbundle)
  * scoreFormat [GamesNumberFormatConfiguration](#gamesnumberformatconfiguration)
  * sortRank `integer`: The sort rank of this leaderboard. Writes to this field are ignored.

### LeaderboardConfigurationListResponse
* LeaderboardConfigurationListResponse `object`: A ListConfigurations response.
  * items `array`: The leaderboard configurations.
    * items [LeaderboardConfiguration](#leaderboardconfiguration)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationListResponse`.
  * nextPageToken `string`: The pagination token for the next page of results.

### LocalizedString
* LocalizedString `object`: A localized string resource.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedString`.
  * locale `string`: The locale string.
  * value `string`: The string value.

### LocalizedStringBundle
* LocalizedStringBundle `object`: A localized string bundle resource.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedStringBundle`.
  * translations `array`: The locale strings.
    * items [LocalizedString](#localizedstring)


