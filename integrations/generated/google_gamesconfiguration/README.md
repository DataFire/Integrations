# @datafire/google_gamesconfiguration

Client library for Google Play Game Services Publishing

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

google_gamesconfiguration.achievementConfigurations.delete({
  "achievementId": ""
}).then(data => {
  console.log(data);
});
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

### achievementConfigurations.delete
Delete the achievement configuration with the given ID.


```js
google_gamesconfiguration.achievementConfigurations.delete({
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
*Output schema unknown*

### achievementConfigurations.get
Retrieves the metadata of the achievement configuration with the given ID.


```js
google_gamesconfiguration.achievementConfigurations.get({
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
* output [AchievementConfiguration](#achievementconfiguration)

### achievementConfigurations.patch
Update the metadata of the achievement configuration with the given ID. This method supports patch semantics.


```js
google_gamesconfiguration.achievementConfigurations.patch({
  "achievementId": ""
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * body [AchievementConfiguration](#achievementconfiguration)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AchievementConfiguration](#achievementconfiguration)

### achievementConfigurations.update
Update the metadata of the achievement configuration with the given ID.


```js
google_gamesconfiguration.achievementConfigurations.update({
  "achievementId": ""
}, context)
```

#### Input
* input `object`
  * achievementId **required** `string`: The ID of the achievement used by this method.
  * body [AchievementConfiguration](#achievementconfiguration)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AchievementConfiguration](#achievementconfiguration)

### achievementConfigurations.list
Returns a list of the achievement configurations in this application.


```js
google_gamesconfiguration.achievementConfigurations.list({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * maxResults `integer`: The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AchievementConfigurationListResponse](#achievementconfigurationlistresponse)

### achievementConfigurations.insert
Insert a new achievement configuration in this application.


```js
google_gamesconfiguration.achievementConfigurations.insert({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * body [AchievementConfiguration](#achievementconfiguration)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AchievementConfiguration](#achievementconfiguration)

### leaderboardConfigurations.list
Returns a list of the leaderboard configurations in this application.


```js
google_gamesconfiguration.leaderboardConfigurations.list({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * maxResults `integer`: The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified maxResults.
  * pageToken `string`: The token returned by the previous request.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LeaderboardConfigurationListResponse](#leaderboardconfigurationlistresponse)

### leaderboardConfigurations.insert
Insert a new leaderboard configuration in this application.


```js
google_gamesconfiguration.leaderboardConfigurations.insert({
  "applicationId": ""
}, context)
```

#### Input
* input `object`
  * applicationId **required** `string`: The application ID from the Google Play developer console.
  * body [LeaderboardConfiguration](#leaderboardconfiguration)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LeaderboardConfiguration](#leaderboardconfiguration)

### imageConfigurations.upload
Uploads an image for a resource with the given ID and image type.


```js
google_gamesconfiguration.imageConfigurations.upload({
  "resourceId": "",
  "imageType": ""
}, context)
```

#### Input
* input `object`
  * resourceId **required** `string`: The ID of the resource used by this method.
  * imageType **required** `string` (values: ACHIEVEMENT_ICON, LEADERBOARD_ICON): Selects which image in a resource for this method.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ImageConfiguration](#imageconfiguration)

### leaderboardConfigurations.delete
Delete the leaderboard configuration with the given ID.


```js
google_gamesconfiguration.leaderboardConfigurations.delete({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### leaderboardConfigurations.get
Retrieves the metadata of the leaderboard configuration with the given ID.


```js
google_gamesconfiguration.leaderboardConfigurations.get({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LeaderboardConfiguration](#leaderboardconfiguration)

### leaderboardConfigurations.patch
Update the metadata of the leaderboard configuration with the given ID. This method supports patch semantics.


```js
google_gamesconfiguration.leaderboardConfigurations.patch({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * body [LeaderboardConfiguration](#leaderboardconfiguration)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LeaderboardConfiguration](#leaderboardconfiguration)

### leaderboardConfigurations.update
Update the metadata of the leaderboard configuration with the given ID.


```js
google_gamesconfiguration.leaderboardConfigurations.update({
  "leaderboardId": ""
}, context)
```

#### Input
* input `object`
  * leaderboardId **required** `string`: The ID of the leaderboard.
  * body [LeaderboardConfiguration](#leaderboardconfiguration)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [LeaderboardConfiguration](#leaderboardconfiguration)



## Definitions

### AchievementConfiguration
* AchievementConfiguration `object`: This is a JSON template for an achievement configuration resource.
  * achievementType `string`: The type of the achievement.
  * draft [AchievementConfigurationDetail](#achievementconfigurationdetail)
  * id `string`: The ID of the achievement.
  * initialState `string`: The initial state of the achievement.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#achievementConfiguration.
  * published [AchievementConfigurationDetail](#achievementconfigurationdetail)
  * stepsToUnlock `integer`: Steps to unlock. Only applicable to incremental achievements.
  * token `string`: The token for this resource.

### AchievementConfigurationDetail
* AchievementConfigurationDetail `object`: This is a JSON template for an achievement configuration detail.
  * description [LocalizedStringBundle](#localizedstringbundle)
  * iconUrl `string`: The icon url of this achievement. Writes to this field are ignored.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#achievementConfigurationDetail.
  * name [LocalizedStringBundle](#localizedstringbundle)
  * pointValue `integer`: Point value for the achievement.
  * sortRank `integer`: The sort rank of this achievement. Writes to this field are ignored.

### AchievementConfigurationListResponse
* AchievementConfigurationListResponse `object`: This is a JSON template for a ListConfigurations response.
  * items `array`: The achievement configurations.
    * items [AchievementConfiguration](#achievementconfiguration)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#achievementConfigurationListResponse.
  * nextPageToken `string`: The pagination token for the next page of results.

### GamesNumberAffixConfiguration
* GamesNumberAffixConfiguration `object`: This is a JSON template for a number affix resource.
  * few [LocalizedStringBundle](#localizedstringbundle)
  * many [LocalizedStringBundle](#localizedstringbundle)
  * one [LocalizedStringBundle](#localizedstringbundle)
  * other [LocalizedStringBundle](#localizedstringbundle)
  * two [LocalizedStringBundle](#localizedstringbundle)
  * zero [LocalizedStringBundle](#localizedstringbundle)

### GamesNumberFormatConfiguration
* GamesNumberFormatConfiguration `object`: This is a JSON template for a number format resource.
  * currencyCode `string`: The curreny code string. Only used for CURRENCY format type.
  * numDecimalPlaces `integer`: The number of decimal places for number. Only used for NUMERIC format type.
  * numberFormatType `string`: The formatting for the number.
  * suffix [GamesNumberAffixConfiguration](#gamesnumberaffixconfiguration)

### ImageConfiguration
* ImageConfiguration `object`: This is a JSON template for an image configuration resource.
  * imageType `string`: The image type for the image.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#imageConfiguration.
  * resourceId `string`: The resource ID of resource which the image belongs to.
  * url `string`: The url for this image.

### LeaderboardConfiguration
* LeaderboardConfiguration `object`: This is a JSON template for an leaderboard configuration resource.
  * draft [LeaderboardConfigurationDetail](#leaderboardconfigurationdetail)
  * id `string`: The ID of the leaderboard.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#leaderboardConfiguration.
  * published [LeaderboardConfigurationDetail](#leaderboardconfigurationdetail)
  * scoreMax `string`: Maximum score that can be posted to this leaderboard.
  * scoreMin `string`: Minimum score that can be posted to this leaderboard.
  * scoreOrder `string`: The type of the leaderboard.
  * token `string`: The token for this resource.

### LeaderboardConfigurationDetail
* LeaderboardConfigurationDetail `object`: This is a JSON template for a leaderboard configuration detail.
  * iconUrl `string`: The icon url of this leaderboard. Writes to this field are ignored.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#leaderboardConfigurationDetail.
  * name [LocalizedStringBundle](#localizedstringbundle)
  * scoreFormat [GamesNumberFormatConfiguration](#gamesnumberformatconfiguration)
  * sortRank `integer`: The sort rank of this leaderboard. Writes to this field are ignored.

### LeaderboardConfigurationListResponse
* LeaderboardConfigurationListResponse `object`: This is a JSON template for a ListConfigurations response.
  * items `array`: The leaderboard configurations.
    * items [LeaderboardConfiguration](#leaderboardconfiguration)
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardConfigurationListResponse.
  * nextPageToken `string`: The pagination token for the next page of results.

### LocalizedString
* LocalizedString `object`: This is a JSON template for a localized string resource.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#localizedString.
  * locale `string`: The locale string.
  * value `string`: The string value.

### LocalizedStringBundle
* LocalizedStringBundle `object`: This is a JSON template for a localized string bundle resource.
  * kind `string`: Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#localizedStringBundle.
  * translations `array`: The locale strings.
    * items [LocalizedString](#localizedstring)


