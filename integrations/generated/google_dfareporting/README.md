# @datafire/google_dfareporting

Client library for Campaign Manager 360 API

## Installation and Usage
```bash
npm install --save @datafire/google_dfareporting
```
```js
let google_dfareporting = require('@datafire/google_dfareporting').create({
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

Manage your DoubleClick Campaign Manager ad campaigns and reports.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_dfareporting.oauthCallback({
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
google_dfareporting.oauthRefresh(null, context)
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

### dfareporting.files.get
Retrieves a report file by its report ID and file ID. This method supports media download.


```js
google_dfareporting.dfareporting.files.get({
  "reportId": "",
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * reportId **required** `string`: The ID of the report.
  * fileId **required** `string`: The ID of the report file.
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
* output [File](#file)

### dfareporting.userProfiles.list
Retrieves list of user profiles for a user.


```js
google_dfareporting.dfareporting.userProfiles.list({}, context)
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
* output [UserProfileList](#userprofilelist)

### dfareporting.userProfiles.get
Gets one user profile by ID.


```js
google_dfareporting.dfareporting.userProfiles.get({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The user profile ID.
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
* output [UserProfile](#userprofile)

### dfareporting.accountActiveAdSummaries.get
Gets the account's active ad summary by account ID.


```js
google_dfareporting.dfareporting.accountActiveAdSummaries.get({
  "profileId": "",
  "summaryAccountId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * summaryAccountId **required** `string`: Account ID.
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
* output [AccountActiveAdSummary](#accountactiveadsummary)

### dfareporting.accountPermissionGroups.list
Retrieves the list of account permission groups.


```js
google_dfareporting.dfareporting.accountPermissionGroups.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [AccountPermissionGroupsListResponse](#accountpermissiongroupslistresponse)

### dfareporting.accountPermissionGroups.get
Gets one account permission group by ID.


```js
google_dfareporting.dfareporting.accountPermissionGroups.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Account permission group ID.
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
* output [AccountPermissionGroup](#accountpermissiongroup)

### dfareporting.accountPermissions.list
Retrieves the list of account permissions.


```js
google_dfareporting.dfareporting.accountPermissions.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [AccountPermissionsListResponse](#accountpermissionslistresponse)

### dfareporting.accountPermissions.get
Gets one account permission by ID.


```js
google_dfareporting.dfareporting.accountPermissions.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Account permission ID.
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
* output [AccountPermission](#accountpermission)

### dfareporting.accountUserProfiles.list
Retrieves a list of account user profiles, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.accountUserProfiles.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * active `boolean`: Select only active user profiles.
  * ids `array`: Select only user profiles with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
  * subaccountId `string`: Select only user profiles with the specified subaccount ID.
  * userRoleId `string`: Select only user profiles with the specified user role ID.
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
* output [AccountUserProfilesListResponse](#accountuserprofileslistresponse)

### dfareporting.accountUserProfiles.patch
Updates an existing account user profile. This method supports patch semantics.


```js
google_dfareporting.dfareporting.accountUserProfiles.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: AccountUserProfile ID.
  * body [AccountUserProfile](#accountuserprofile)
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
* output [AccountUserProfile](#accountuserprofile)

### dfareporting.accountUserProfiles.insert
Inserts a new account user profile.


```js
google_dfareporting.dfareporting.accountUserProfiles.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [AccountUserProfile](#accountuserprofile)
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
* output [AccountUserProfile](#accountuserprofile)

### dfareporting.accountUserProfiles.update
Updates an existing account user profile.


```js
google_dfareporting.dfareporting.accountUserProfiles.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [AccountUserProfile](#accountuserprofile)
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
* output [AccountUserProfile](#accountuserprofile)

### dfareporting.accountUserProfiles.get
Gets one account user profile by ID.


```js
google_dfareporting.dfareporting.accountUserProfiles.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: User profile ID.
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
* output [AccountUserProfile](#accountuserprofile)

### dfareporting.accounts.list
Retrieves the list of accounts, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.accounts.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * active `boolean`: Select only active accounts. Don't set this field to select both active and non-active accounts.
  * ids `array`: Select only accounts with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [AccountsListResponse](#accountslistresponse)

### dfareporting.accounts.patch
Updates an existing account. This method supports patch semantics.


```js
google_dfareporting.dfareporting.accounts.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Account ID.
  * body [Account](#account)
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
* output [Account](#account)

### dfareporting.accounts.update
Updates an existing account.


```js
google_dfareporting.dfareporting.accounts.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Account](#account)
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
* output [Account](#account)

### dfareporting.accounts.get
Gets one account by ID.


```js
google_dfareporting.dfareporting.accounts.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Account ID.
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
* output [Account](#account)

### dfareporting.ads.list
Retrieves a list of ads, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.ads.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * active `boolean`: Select only active ads.
  * advertiserId `string`: Select only ads with this advertiser ID.
  * archived `boolean`: Select only archived ads.
  * audienceSegmentIds `array`: Select only ads with these audience segment IDs.
  * campaignIds `array`: Select only ads with these campaign IDs.
  * compatibility `string` (values: DISPLAY, DISPLAY_INTERSTITIAL, APP, APP_INTERSTITIAL, IN_STREAM_VIDEO, IN_STREAM_AUDIO): Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
  * creativeIds `array`: Select only ads with these creative IDs assigned.
  * creativeOptimizationConfigurationIds `array`: Select only ads with these creative optimization configuration IDs.
  * dynamicClickTracker `boolean`: Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
  * ids `array`: Select only ads with these IDs.
  * landingPageIds `array`: Select only ads with these landing page IDs.
  * maxResults `integer`: Maximum number of results to return.
  * overriddenEventTagId `string`: Select only ads with this event tag override ID.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * placementIds `array`: Select only ads with these placement IDs assigned.
  * remarketingListIds `array`: Select only ads whose list targeting expression use these remarketing list IDs.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
  * sizeIds `array`: Select only ads with these size IDs.
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
  * sslCompliant `boolean`: Select only ads that are SSL-compliant.
  * sslRequired `boolean`: Select only ads that require SSL.
  * type `array`: Select only ads with these types.
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
* output [AdsListResponse](#adslistresponse)

### dfareporting.ads.patch
Updates an existing ad. This method supports patch semantics.


```js
google_dfareporting.dfareporting.ads.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Ad ID.
  * body [Ad](#ad)
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
* output [Ad](#ad)

### dfareporting.ads.insert
Inserts a new ad.


```js
google_dfareporting.dfareporting.ads.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Ad](#ad)
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
* output [Ad](#ad)

### dfareporting.ads.update
Updates an existing ad.


```js
google_dfareporting.dfareporting.ads.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Ad](#ad)
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
* output [Ad](#ad)

### dfareporting.ads.get
Gets one ad by ID.


```js
google_dfareporting.dfareporting.ads.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Ad ID.
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
* output [Ad](#ad)

### dfareporting.advertiserGroups.list
Retrieves a list of advertiser groups, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.advertiserGroups.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * ids `array`: Select only advertiser groups with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [AdvertiserGroupsListResponse](#advertisergroupslistresponse)

### dfareporting.advertiserGroups.patch
Updates an existing advertiser group. This method supports patch semantics.


```js
google_dfareporting.dfareporting.advertiserGroups.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: AdvertiserGroup ID.
  * body [AdvertiserGroup](#advertisergroup)
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
* output [AdvertiserGroup](#advertisergroup)

### dfareporting.advertiserGroups.insert
Inserts a new advertiser group.


```js
google_dfareporting.dfareporting.advertiserGroups.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [AdvertiserGroup](#advertisergroup)
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
* output [AdvertiserGroup](#advertisergroup)

### dfareporting.advertiserGroups.update
Updates an existing advertiser group.


```js
google_dfareporting.dfareporting.advertiserGroups.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [AdvertiserGroup](#advertisergroup)
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
* output [AdvertiserGroup](#advertisergroup)

### dfareporting.advertiserGroups.delete
Deletes an existing advertiser group.


```js
google_dfareporting.dfareporting.advertiserGroups.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Advertiser group ID.
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

### dfareporting.advertiserGroups.get
Gets one advertiser group by ID.


```js
google_dfareporting.dfareporting.advertiserGroups.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Advertiser group ID.
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
* output [AdvertiserGroup](#advertisergroup)

### dfareporting.advertiserLandingPages.list
Retrieves a list of landing pages.


```js
google_dfareporting.dfareporting.advertiserLandingPages.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserIds `array`: Select only landing pages that belong to these advertisers.
  * archived `boolean`: Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages.
  * campaignIds `array`: Select only landing pages that are associated with these campaigns.
  * ids `array`: Select only landing pages with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, "landingpage*2017" will return landing pages with names like "landingpage July 2017", "landingpage March 2017", or simply "landingpage 2017". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "landingpage" will match campaigns with name "my landingpage", "landingpage 2015", or simply "landingpage".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
  * subaccountId `string`: Select only landing pages that belong to this subaccount.
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
* output [AdvertiserLandingPagesListResponse](#advertiserlandingpageslistresponse)

### dfareporting.advertiserLandingPages.patch
Updates an existing advertiser landing page. This method supports patch semantics.


```js
google_dfareporting.dfareporting.advertiserLandingPages.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: LandingPage ID.
  * body [LandingPage](#landingpage)
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
* output [LandingPage](#landingpage)

### dfareporting.advertiserLandingPages.insert
Inserts a new landing page.


```js
google_dfareporting.dfareporting.advertiserLandingPages.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [LandingPage](#landingpage)
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
* output [LandingPage](#landingpage)

### dfareporting.advertiserLandingPages.update
Updates an existing landing page.


```js
google_dfareporting.dfareporting.advertiserLandingPages.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [LandingPage](#landingpage)
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
* output [LandingPage](#landingpage)

### dfareporting.advertiserLandingPages.get
Gets one landing page by ID.


```js
google_dfareporting.dfareporting.advertiserLandingPages.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Landing page ID.
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
* output [LandingPage](#landingpage)

### dfareporting.advertisers.list
Retrieves a list of advertisers, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.advertisers.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserGroupIds `array`: Select only advertisers with these advertiser group IDs.
  * floodlightConfigurationIds `array`: Select only advertisers with these floodlight configuration IDs.
  * ids `array`: Select only advertisers with these IDs.
  * includeAdvertisersWithoutGroupsOnly `boolean`: Select only advertisers which do not belong to any advertiser group.
  * maxResults `integer`: Maximum number of results to return.
  * onlyParent `boolean`: Select only advertisers which use another advertiser's floodlight configuration.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser" .
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
  * status `string` (values: APPROVED, ON_HOLD): Select only advertisers with the specified status.
  * subaccountId `string`: Select only advertisers with these subaccount IDs.
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
* output [AdvertisersListResponse](#advertiserslistresponse)

### dfareporting.advertisers.patch
Updates an existing advertiser. This method supports patch semantics.


```js
google_dfareporting.dfareporting.advertisers.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Advertiser ID.
  * body [Advertiser](#advertiser)
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
* output [Advertiser](#advertiser)

### dfareporting.advertisers.insert
Inserts a new advertiser.


```js
google_dfareporting.dfareporting.advertisers.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Advertiser](#advertiser)
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
* output [Advertiser](#advertiser)

### dfareporting.advertisers.update
Updates an existing advertiser.


```js
google_dfareporting.dfareporting.advertisers.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Advertiser](#advertiser)
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
* output [Advertiser](#advertiser)

### dfareporting.advertisers.get
Gets one advertiser by ID.


```js
google_dfareporting.dfareporting.advertisers.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Advertiser ID.
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
* output [Advertiser](#advertiser)

### dfareporting.browsers.list
Retrieves a list of browsers.


```js
google_dfareporting.dfareporting.browsers.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [BrowsersListResponse](#browserslistresponse)

### dfareporting.campaigns.list
Retrieves a list of campaigns, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.campaigns.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserGroupIds `array`: Select only campaigns whose advertisers belong to these advertiser groups.
  * advertiserIds `array`: Select only campaigns that belong to these advertisers.
  * archived `boolean`: Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
  * atLeastOneOptimizationActivity `boolean`: Select only campaigns that have at least one optimization activity.
  * excludedIds `array`: Exclude campaigns with these IDs.
  * ids `array`: Select only campaigns with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * overriddenEventTagId `string`: Select only campaigns that have overridden this event tag ID.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
  * subaccountId `string`: Select only campaigns that belong to this subaccount.
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
* output [CampaignsListResponse](#campaignslistresponse)

### dfareporting.campaigns.patch
Updates an existing campaign. This method supports patch semantics.


```js
google_dfareporting.dfareporting.campaigns.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Campaign ID.
  * body [Campaign](#campaign)
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
* output [Campaign](#campaign)

### dfareporting.campaigns.insert
Inserts a new campaign.


```js
google_dfareporting.dfareporting.campaigns.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Campaign](#campaign)
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
* output [Campaign](#campaign)

### dfareporting.campaigns.update
Updates an existing campaign.


```js
google_dfareporting.dfareporting.campaigns.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Campaign](#campaign)
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
* output [Campaign](#campaign)

### dfareporting.campaignCreativeAssociations.list
Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.


```js
google_dfareporting.dfareporting.campaignCreativeAssociations.list({
  "profileId": "",
  "campaignId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * campaignId **required** `string`: Campaign ID in this association.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [CampaignCreativeAssociationsListResponse](#campaigncreativeassociationslistresponse)

### dfareporting.campaignCreativeAssociations.insert
Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.


```js
google_dfareporting.dfareporting.campaignCreativeAssociations.insert({
  "profileId": "",
  "campaignId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * campaignId **required** `string`: Campaign ID in this association.
  * body [CampaignCreativeAssociation](#campaigncreativeassociation)
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
* output [CampaignCreativeAssociation](#campaigncreativeassociation)

### dfareporting.campaigns.get
Gets one campaign by ID.


```js
google_dfareporting.dfareporting.campaigns.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Campaign ID.
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
* output [Campaign](#campaign)

### dfareporting.changeLogs.list
Retrieves a list of change logs. This method supports paging.


```js
google_dfareporting.dfareporting.changeLogs.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * action `string` (values: ACTION_CREATE, ACTION_UPDATE, ACTION_DELETE, ACTION_ENABLE, ACTION_DISABLE, ACTION_ADD, ACTION_REMOVE, ACTION_MARK_AS_DEFAULT, ACTION_ASSOCIATE, ACTION_ASSIGN, ACTION_UNASSIGN, ACTION_SEND, ACTION_LINK, ACTION_UNLINK, ACTION_PUSH, ACTION_EMAIL_TAGS, ACTION_SHARE): Select only change logs with the specified action.
  * ids `array`: Select only change logs with these IDs.
  * maxChangeTime `string`: Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
  * maxResults `integer`: Maximum number of results to return.
  * minChangeTime `string`: Select only change logs whose change time is after the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
  * objectIds `array`: Select only change logs with these object IDs.
  * objectType `string` (values: OBJECT_ADVERTISER, OBJECT_FLOODLIGHT_CONFIGURATION, OBJECT_AD, OBJECT_FLOODLIGHT_ACTVITY, OBJECT_CAMPAIGN, OBJECT_FLOODLIGHT_ACTIVITY_GROUP, OBJECT_CREATIVE, OBJECT_PLACEMENT, OBJECT_DFA_SITE, OBJECT_USER_ROLE, OBJECT_USER_PROFILE, OBJECT_ADVERTISER_GROUP, OBJECT_ACCOUNT, OBJECT_SUBACCOUNT, OBJECT_RICHMEDIA_CREATIVE, OBJECT_INSTREAM_CREATIVE, OBJECT_MEDIA_ORDER, OBJECT_CONTENT_CATEGORY, OBJECT_PLACEMENT_STRATEGY, OBJECT_SD_SITE, OBJECT_SIZE, OBJECT_CREATIVE_GROUP, OBJECT_CREATIVE_ASSET, OBJECT_USER_PROFILE_FILTER, OBJECT_LANDING_PAGE, OBJECT_CREATIVE_FIELD, OBJECT_REMARKETING_LIST, OBJECT_PROVIDED_LIST_CLIENT, OBJECT_EVENT_TAG, OBJECT_CREATIVE_BUNDLE, OBJECT_BILLING_ACCOUNT_GROUP, OBJECT_BILLING_FEATURE, OBJECT_RATE_CARD, OBJECT_ACCOUNT_BILLING_FEATURE, OBJECT_BILLING_MINIMUM_FEE, OBJECT_BILLING_PROFILE, OBJECT_PLAYSTORE_LINK, OBJECT_TARGETING_TEMPLATE, OBJECT_SEARCH_LIFT_STUDY, OBJECT_FLOODLIGHT_DV360_LINK): Select only change logs with the specified object type.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Select only change logs whose object ID, user name, old or new values match the search string.
  * userProfileIds `array`: Select only change logs with these user profile IDs.
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
* output [ChangeLogsListResponse](#changelogslistresponse)

### dfareporting.changeLogs.get
Gets one change log by ID.


```js
google_dfareporting.dfareporting.changeLogs.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Change log ID.
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
* output [ChangeLog](#changelog)

### dfareporting.cities.list
Retrieves a list of cities, possibly filtered.


```js
google_dfareporting.dfareporting.cities.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * countryDartIds `array`: Select only cities from these countries.
  * dartIds `array`: Select only cities with these DART IDs.
  * namePrefix `string`: Select only cities with names starting with this prefix.
  * regionDartIds `array`: Select only cities from these regions.
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
* output [CitiesListResponse](#citieslistresponse)

### dfareporting.connectionTypes.list
Retrieves a list of connection types.


```js
google_dfareporting.dfareporting.connectionTypes.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [ConnectionTypesListResponse](#connectiontypeslistresponse)

### dfareporting.connectionTypes.get
Gets one connection type by ID.


```js
google_dfareporting.dfareporting.connectionTypes.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Connection type ID.
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
* output [ConnectionType](#connectiontype)

### dfareporting.contentCategories.list
Retrieves a list of content categories, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.contentCategories.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * ids `array`: Select only content categories with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [ContentCategoriesListResponse](#contentcategorieslistresponse)

### dfareporting.contentCategories.patch
Updates an existing content category. This method supports patch semantics.


```js
google_dfareporting.dfareporting.contentCategories.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: ContentCategory ID.
  * body [ContentCategory](#contentcategory)
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
* output [ContentCategory](#contentcategory)

### dfareporting.contentCategories.insert
Inserts a new content category.


```js
google_dfareporting.dfareporting.contentCategories.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [ContentCategory](#contentcategory)
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
* output [ContentCategory](#contentcategory)

### dfareporting.contentCategories.update
Updates an existing content category.


```js
google_dfareporting.dfareporting.contentCategories.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [ContentCategory](#contentcategory)
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
* output [ContentCategory](#contentcategory)

### dfareporting.contentCategories.delete
Deletes an existing content category.


```js
google_dfareporting.dfareporting.contentCategories.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Content category ID.
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

### dfareporting.contentCategories.get
Gets one content category by ID.


```js
google_dfareporting.dfareporting.contentCategories.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Content category ID.
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
* output [ContentCategory](#contentcategory)

### dfareporting.conversions.batchinsert
Inserts conversions.


```js
google_dfareporting.dfareporting.conversions.batchinsert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [ConversionsBatchInsertRequest](#conversionsbatchinsertrequest)
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
* output [ConversionsBatchInsertResponse](#conversionsbatchinsertresponse)

### dfareporting.conversions.batchupdate
Updates existing conversions.


```js
google_dfareporting.dfareporting.conversions.batchupdate({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [ConversionsBatchUpdateRequest](#conversionsbatchupdaterequest)
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
* output [ConversionsBatchUpdateResponse](#conversionsbatchupdateresponse)

### dfareporting.countries.list
Retrieves a list of countries.


```js
google_dfareporting.dfareporting.countries.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [CountriesListResponse](#countrieslistresponse)

### dfareporting.countries.get
Gets one country by ID.


```js
google_dfareporting.dfareporting.countries.get({
  "profileId": "",
  "dartId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * dartId **required** `string`: Country DART ID.
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
* output [Country](#country)

### dfareporting.creativeAssets.insert
Inserts a new creative asset.


```js
google_dfareporting.dfareporting.creativeAssets.insert({
  "profileId": "",
  "advertiserId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserId **required** `string`: Advertiser ID of this creative. This is a required field.
  * body [CreativeAssetMetadata](#creativeassetmetadata)
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
* output [CreativeAssetMetadata](#creativeassetmetadata)

### dfareporting.creativeFields.list
Retrieves a list of creative fields, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.creativeFields.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserIds `array`: Select only creative fields that belong to these advertisers.
  * ids `array`: Select only creative fields with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [CreativeFieldsListResponse](#creativefieldslistresponse)

### dfareporting.creativeFields.patch
Updates an existing creative field. This method supports patch semantics.


```js
google_dfareporting.dfareporting.creativeFields.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: CreativeField ID.
  * body [CreativeField](#creativefield)
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
* output [CreativeField](#creativefield)

### dfareporting.creativeFields.insert
Inserts a new creative field.


```js
google_dfareporting.dfareporting.creativeFields.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [CreativeField](#creativefield)
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
* output [CreativeField](#creativefield)

### dfareporting.creativeFields.update
Updates an existing creative field.


```js
google_dfareporting.dfareporting.creativeFields.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [CreativeField](#creativefield)
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
* output [CreativeField](#creativefield)

### dfareporting.creativeFieldValues.list
Retrieves a list of creative field values, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.creativeFieldValues.list({
  "profileId": "",
  "creativeFieldId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * creativeFieldId **required** `string`: Creative field ID for this creative field value.
  * ids `array`: Select only creative field values with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
  * sortField `string` (values: ID, VALUE): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [CreativeFieldValuesListResponse](#creativefieldvalueslistresponse)

### dfareporting.creativeFieldValues.patch
Updates an existing creative field value. This method supports patch semantics.


```js
google_dfareporting.dfareporting.creativeFieldValues.patch({
  "profileId": "",
  "creativeFieldId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * creativeFieldId **required** `string`: CreativeField ID.
  * id **required** `string`: CreativeFieldValue ID.
  * body [CreativeFieldValue](#creativefieldvalue)
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
* output [CreativeFieldValue](#creativefieldvalue)

### dfareporting.creativeFieldValues.insert
Inserts a new creative field value.


```js
google_dfareporting.dfareporting.creativeFieldValues.insert({
  "profileId": "",
  "creativeFieldId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * creativeFieldId **required** `string`: Creative field ID for this creative field value.
  * body [CreativeFieldValue](#creativefieldvalue)
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
* output [CreativeFieldValue](#creativefieldvalue)

### dfareporting.creativeFieldValues.update
Updates an existing creative field value.


```js
google_dfareporting.dfareporting.creativeFieldValues.update({
  "profileId": "",
  "creativeFieldId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * creativeFieldId **required** `string`: Creative field ID for this creative field value.
  * body [CreativeFieldValue](#creativefieldvalue)
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
* output [CreativeFieldValue](#creativefieldvalue)

### dfareporting.creativeFieldValues.delete
Deletes an existing creative field value.


```js
google_dfareporting.dfareporting.creativeFieldValues.delete({
  "profileId": "",
  "creativeFieldId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * creativeFieldId **required** `string`: Creative field ID for this creative field value.
  * id **required** `string`: Creative Field Value ID
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

### dfareporting.creativeFieldValues.get
Gets one creative field value by ID.


```js
google_dfareporting.dfareporting.creativeFieldValues.get({
  "profileId": "",
  "creativeFieldId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * creativeFieldId **required** `string`: Creative field ID for this creative field value.
  * id **required** `string`: Creative Field Value ID
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
* output [CreativeFieldValue](#creativefieldvalue)

### dfareporting.creativeFields.delete
Deletes an existing creative field.


```js
google_dfareporting.dfareporting.creativeFields.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Creative Field ID
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

### dfareporting.creativeFields.get
Gets one creative field by ID.


```js
google_dfareporting.dfareporting.creativeFields.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Creative Field ID
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
* output [CreativeField](#creativefield)

### dfareporting.creativeGroups.list
Retrieves a list of creative groups, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.creativeGroups.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserIds `array`: Select only creative groups that belong to these advertisers.
  * groupNumber `integer`: Select only creative groups that belong to this subgroup.
  * ids `array`: Select only creative groups with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [CreativeGroupsListResponse](#creativegroupslistresponse)

### dfareporting.creativeGroups.patch
Updates an existing creative group. This method supports patch semantics.


```js
google_dfareporting.dfareporting.creativeGroups.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: CreativeGroup ID.
  * body [CreativeGroup](#creativegroup)
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
* output [CreativeGroup](#creativegroup)

### dfareporting.creativeGroups.insert
Inserts a new creative group.


```js
google_dfareporting.dfareporting.creativeGroups.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [CreativeGroup](#creativegroup)
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
* output [CreativeGroup](#creativegroup)

### dfareporting.creativeGroups.update
Updates an existing creative group.


```js
google_dfareporting.dfareporting.creativeGroups.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [CreativeGroup](#creativegroup)
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
* output [CreativeGroup](#creativegroup)

### dfareporting.creativeGroups.get
Gets one creative group by ID.


```js
google_dfareporting.dfareporting.creativeGroups.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Creative group ID.
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
* output [CreativeGroup](#creativegroup)

### dfareporting.creatives.list
Retrieves a list of creatives, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.creatives.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * active `boolean`: Select only active creatives. Leave blank to select active and inactive creatives.
  * advertiserId `string`: Select only creatives with this advertiser ID.
  * archived `boolean`: Select only archived creatives. Leave blank to select archived and unarchived creatives.
  * campaignId `string`: Select only creatives with this campaign ID.
  * companionCreativeIds `array`: Select only in-stream video creatives with these companion IDs.
  * creativeFieldIds `array`: Select only creatives with these creative field IDs.
  * ids `array`: Select only creatives with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * renderingIds `array`: Select only creatives with these rendering IDs.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
  * sizeIds `array`: Select only creatives with these size IDs.
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
  * studioCreativeId `string`: Select only creatives corresponding to this Studio creative ID.
  * types `array`: Select only creatives with these creative types.
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
* output [CreativesListResponse](#creativeslistresponse)

### dfareporting.creatives.patch
Updates an existing creative. This method supports patch semantics.


```js
google_dfareporting.dfareporting.creatives.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Creative ID.
  * body [Creative](#creative)
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
* output [Creative](#creative)

### dfareporting.creatives.insert
Inserts a new creative.


```js
google_dfareporting.dfareporting.creatives.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Creative](#creative)
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
* output [Creative](#creative)

### dfareporting.creatives.update
Updates an existing creative.


```js
google_dfareporting.dfareporting.creatives.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Creative](#creative)
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
* output [Creative](#creative)

### dfareporting.creatives.get
Gets one creative by ID.


```js
google_dfareporting.dfareporting.creatives.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Creative ID.
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
* output [Creative](#creative)

### dfareporting.customEvents.batchinsert
Inserts custom events.


```js
google_dfareporting.dfareporting.customEvents.batchinsert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [CustomEventsBatchInsertRequest](#customeventsbatchinsertrequest)
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
* output [CustomEventsBatchInsertResponse](#customeventsbatchinsertresponse)

### dfareporting.dimensionValues.query
Retrieves list of report dimension values for a list of filters.


```js
google_dfareporting.dfareporting.dimensionValues.query({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The Campaign Manager 360 user profile ID.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: The value of the nextToken from the previous result page.
  * body [DimensionValueRequest](#dimensionvaluerequest)
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
* output [DimensionValueList](#dimensionvaluelist)

### dfareporting.directorySites.list
Retrieves a list of directory sites, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.directorySites.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * acceptsInStreamVideoPlacements `boolean`: This search filter is no longer supported and will have no effect on the results returned.
  * acceptsInterstitialPlacements `boolean`: This search filter is no longer supported and will have no effect on the results returned.
  * acceptsPublisherPaidPlacements `boolean`: Select only directory sites that accept publisher paid placements. This field can be left blank.
  * active `boolean`: Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
  * dfpNetworkCode `string`: Select only directory sites with this Ad Manager network code.
  * ids `array`: Select only directory sites with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [DirectorySitesListResponse](#directorysiteslistresponse)

### dfareporting.directorySites.insert
Inserts a new directory site.


```js
google_dfareporting.dfareporting.directorySites.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [DirectorySite](#directorysite)
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
* output [DirectorySite](#directorysite)

### dfareporting.directorySites.get
Gets one directory site by ID.


```js
google_dfareporting.dfareporting.directorySites.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Directory site ID.
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
* output [DirectorySite](#directorysite)

### dfareporting.dynamicTargetingKeys.list
Retrieves a list of dynamic targeting keys.


```js
google_dfareporting.dfareporting.dynamicTargetingKeys.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserId `string`: Select only dynamic targeting keys whose object has this advertiser ID.
  * names `array`: Select only dynamic targeting keys exactly matching these names.
  * objectId `string`: Select only dynamic targeting keys with this object ID.
  * objectType `string` (values: OBJECT_ADVERTISER, OBJECT_AD, OBJECT_CREATIVE, OBJECT_PLACEMENT): Select only dynamic targeting keys with this object type.
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
* output [DynamicTargetingKeysListResponse](#dynamictargetingkeyslistresponse)

### dfareporting.dynamicTargetingKeys.insert
Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.


```js
google_dfareporting.dfareporting.dynamicTargetingKeys.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [DynamicTargetingKey](#dynamictargetingkey)
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
* output [DynamicTargetingKey](#dynamictargetingkey)

### dfareporting.dynamicTargetingKeys.delete
Deletes an existing dynamic targeting key.


```js
google_dfareporting.dfareporting.dynamicTargetingKeys.delete({
  "profileId": "",
  "objectId": "",
  "name": "",
  "objectType": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * objectId **required** `string`: ID of the object of this dynamic targeting key. This is a required field.
  * name **required** `string`: Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
  * objectType **required** `string` (values: OBJECT_ADVERTISER, OBJECT_AD, OBJECT_CREATIVE, OBJECT_PLACEMENT): Type of the object of this dynamic targeting key. This is a required field.
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

### dfareporting.eventTags.list
Retrieves a list of event tags, possibly filtered.


```js
google_dfareporting.dfareporting.eventTags.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * adId `string`: Select only event tags that belong to this ad.
  * advertiserId `string`: Select only event tags that belong to this advertiser.
  * campaignId `string`: Select only event tags that belong to this campaign.
  * definitionsOnly `boolean`: Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
  * enabled `boolean`: Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
  * eventTagTypes `array`: Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.
  * ids `array`: Select only event tags with these IDs.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [EventTagsListResponse](#eventtagslistresponse)

### dfareporting.eventTags.patch
Updates an existing event tag. This method supports patch semantics.


```js
google_dfareporting.dfareporting.eventTags.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: EventTag ID.
  * body [EventTag](#eventtag)
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
* output [EventTag](#eventtag)

### dfareporting.eventTags.insert
Inserts a new event tag.


```js
google_dfareporting.dfareporting.eventTags.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [EventTag](#eventtag)
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
* output [EventTag](#eventtag)

### dfareporting.eventTags.update
Updates an existing event tag.


```js
google_dfareporting.dfareporting.eventTags.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [EventTag](#eventtag)
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
* output [EventTag](#eventtag)

### dfareporting.eventTags.delete
Deletes an existing event tag.


```js
google_dfareporting.dfareporting.eventTags.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Event tag ID.
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

### dfareporting.eventTags.get
Gets one event tag by ID.


```js
google_dfareporting.dfareporting.eventTags.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Event tag ID.
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
* output [EventTag](#eventtag)

### dfareporting.files.list
Lists files for a user profile.


```js
google_dfareporting.dfareporting.files.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The Campaign Manager 360 user profile ID.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: The value of the nextToken from the previous result page.
  * scope `string` (values: ALL, MINE, SHARED_WITH_ME): The scope that defines which results are returned.
  * sortField `string` (values: ID, LAST_MODIFIED_TIME): The field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [FileList](#filelist)

### dfareporting.floodlightActivities.list
Retrieves a list of floodlight activities, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.floodlightActivities.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserId `string`: Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
  * floodlightActivityGroupIds `array`: Select only floodlight activities with the specified floodlight activity group IDs.
  * floodlightActivityGroupName `string`: Select only floodlight activities with the specified floodlight activity group name.
  * floodlightActivityGroupTagString `string`: Select only floodlight activities with the specified floodlight activity group tag string.
  * floodlightActivityGroupType `string` (values: COUNTER, SALE): Select only floodlight activities with the specified floodlight activity group type.
  * floodlightConfigurationId `string`: Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
  * ids `array`: Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
  * tagString `string`: Select only floodlight activities with the specified tag string.
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
* output [FloodlightActivitiesListResponse](#floodlightactivitieslistresponse)

### dfareporting.floodlightActivities.patch
Updates an existing floodlight activity. This method supports patch semantics.


```js
google_dfareporting.dfareporting.floodlightActivities.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: FloodlightActivity ID.
  * body [FloodlightActivity](#floodlightactivity)
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
* output [FloodlightActivity](#floodlightactivity)

### dfareporting.floodlightActivities.insert
Inserts a new floodlight activity.


```js
google_dfareporting.dfareporting.floodlightActivities.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [FloodlightActivity](#floodlightactivity)
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
* output [FloodlightActivity](#floodlightactivity)

### dfareporting.floodlightActivities.update
Updates an existing floodlight activity.


```js
google_dfareporting.dfareporting.floodlightActivities.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [FloodlightActivity](#floodlightactivity)
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
* output [FloodlightActivity](#floodlightactivity)

### dfareporting.floodlightActivities.generatetag
Generates a tag for a floodlight activity.


```js
google_dfareporting.dfareporting.floodlightActivities.generatetag({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * floodlightActivityId `string`: Floodlight activity ID for which we want to generate a tag.
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
* output [FloodlightActivitiesGenerateTagResponse](#floodlightactivitiesgeneratetagresponse)

### dfareporting.floodlightActivities.delete
Deletes an existing floodlight activity.


```js
google_dfareporting.dfareporting.floodlightActivities.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Floodlight activity ID.
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

### dfareporting.floodlightActivities.get
Gets one floodlight activity by ID.


```js
google_dfareporting.dfareporting.floodlightActivities.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Floodlight activity ID.
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
* output [FloodlightActivity](#floodlightactivity)

### dfareporting.floodlightActivityGroups.list
Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.floodlightActivityGroups.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserId `string`: Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
  * floodlightConfigurationId `string`: Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.
  * ids `array`: Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
  * type `string` (values: COUNTER, SALE): Select only floodlight activity groups with the specified floodlight activity group type.
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
* output [FloodlightActivityGroupsListResponse](#floodlightactivitygroupslistresponse)

### dfareporting.floodlightActivityGroups.patch
Updates an existing floodlight activity group. This method supports patch semantics.


```js
google_dfareporting.dfareporting.floodlightActivityGroups.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: FloodlightActivityGroup ID.
  * body [FloodlightActivityGroup](#floodlightactivitygroup)
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
* output [FloodlightActivityGroup](#floodlightactivitygroup)

### dfareporting.floodlightActivityGroups.insert
Inserts a new floodlight activity group.


```js
google_dfareporting.dfareporting.floodlightActivityGroups.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [FloodlightActivityGroup](#floodlightactivitygroup)
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
* output [FloodlightActivityGroup](#floodlightactivitygroup)

### dfareporting.floodlightActivityGroups.update
Updates an existing floodlight activity group.


```js
google_dfareporting.dfareporting.floodlightActivityGroups.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [FloodlightActivityGroup](#floodlightactivitygroup)
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
* output [FloodlightActivityGroup](#floodlightactivitygroup)

### dfareporting.floodlightActivityGroups.get
Gets one floodlight activity group by ID.


```js
google_dfareporting.dfareporting.floodlightActivityGroups.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Floodlight activity Group ID.
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
* output [FloodlightActivityGroup](#floodlightactivitygroup)

### dfareporting.floodlightConfigurations.list
Retrieves a list of floodlight configurations, possibly filtered.


```js
google_dfareporting.dfareporting.floodlightConfigurations.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * ids `array`: Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
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
* output [FloodlightConfigurationsListResponse](#floodlightconfigurationslistresponse)

### dfareporting.floodlightConfigurations.patch
Updates an existing floodlight configuration. This method supports patch semantics.


```js
google_dfareporting.dfareporting.floodlightConfigurations.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: FloodlightConfiguration ID.
  * body [FloodlightConfiguration](#floodlightconfiguration)
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
* output [FloodlightConfiguration](#floodlightconfiguration)

### dfareporting.floodlightConfigurations.update
Updates an existing floodlight configuration.


```js
google_dfareporting.dfareporting.floodlightConfigurations.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [FloodlightConfiguration](#floodlightconfiguration)
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
* output [FloodlightConfiguration](#floodlightconfiguration)

### dfareporting.floodlightConfigurations.get
Gets one floodlight configuration by ID.


```js
google_dfareporting.dfareporting.floodlightConfigurations.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Floodlight configuration ID.
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
* output [FloodlightConfiguration](#floodlightconfiguration)

### dfareporting.languages.list
Retrieves a list of languages.


```js
google_dfareporting.dfareporting.languages.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [LanguagesListResponse](#languageslistresponse)

### dfareporting.metros.list
Retrieves a list of metros.


```js
google_dfareporting.dfareporting.metros.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [MetrosListResponse](#metroslistresponse)

### dfareporting.mobileApps.list
Retrieves list of available mobile apps.


```js
google_dfareporting.dfareporting.mobileApps.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * directories `array`: Select only apps from these directories.
  * ids `array`: Select only apps with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app".
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
* output [MobileAppsListResponse](#mobileappslistresponse)

### dfareporting.mobileApps.get
Gets one mobile app by ID.


```js
google_dfareporting.dfareporting.mobileApps.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Mobile app ID.
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
* output [MobileApp](#mobileapp)

### dfareporting.mobileCarriers.list
Retrieves a list of mobile carriers.


```js
google_dfareporting.dfareporting.mobileCarriers.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [MobileCarriersListResponse](#mobilecarrierslistresponse)

### dfareporting.mobileCarriers.get
Gets one mobile carrier by ID.


```js
google_dfareporting.dfareporting.mobileCarriers.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Mobile carrier ID.
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
* output [MobileCarrier](#mobilecarrier)

### dfareporting.operatingSystemVersions.list
Retrieves a list of operating system versions.


```js
google_dfareporting.dfareporting.operatingSystemVersions.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [OperatingSystemVersionsListResponse](#operatingsystemversionslistresponse)

### dfareporting.operatingSystemVersions.get
Gets one operating system version by ID.


```js
google_dfareporting.dfareporting.operatingSystemVersions.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Operating system version ID.
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
* output [OperatingSystemVersion](#operatingsystemversion)

### dfareporting.operatingSystems.list
Retrieves a list of operating systems.


```js
google_dfareporting.dfareporting.operatingSystems.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [OperatingSystemsListResponse](#operatingsystemslistresponse)

### dfareporting.operatingSystems.get
Gets one operating system by DART ID.


```js
google_dfareporting.dfareporting.operatingSystems.get({
  "profileId": "",
  "dartId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * dartId **required** `string`: Operating system DART ID.
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
* output [OperatingSystem](#operatingsystem)

### dfareporting.placementGroups.list
Retrieves a list of placement groups, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.placementGroups.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserIds `array`: Select only placement groups that belong to these advertisers.
  * archived `boolean`: Select only archived placements. Don't set this field to select both archived and non-archived placements.
  * campaignIds `array`: Select only placement groups that belong to these campaigns.
  * contentCategoryIds `array`: Select only placement groups that are associated with these content categories.
  * directorySiteIds `array`: Select only placement groups that are associated with these directory sites.
  * ids `array`: Select only placement groups with these IDs.
  * maxEndDate `string`: Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
  * maxResults `integer`: Maximum number of results to return.
  * maxStartDate `string`: Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
  * minEndDate `string`: Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
  * minStartDate `string`: Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * placementGroupType `string` (values: PLACEMENT_PACKAGE, PLACEMENT_ROADBLOCK): Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
  * placementStrategyIds `array`: Select only placement groups that are associated with these placement strategies.
  * pricingTypes `array`: Select only placement groups with these pricing types.
  * searchString `string`: Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
  * siteIds `array`: Select only placement groups that are associated with these sites.
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [PlacementGroupsListResponse](#placementgroupslistresponse)

### dfareporting.placementGroups.patch
Updates an existing placement group. This method supports patch semantics.


```js
google_dfareporting.dfareporting.placementGroups.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: PlacementGroup ID.
  * body [PlacementGroup](#placementgroup)
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
* output [PlacementGroup](#placementgroup)

### dfareporting.placementGroups.insert
Inserts a new placement group.


```js
google_dfareporting.dfareporting.placementGroups.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [PlacementGroup](#placementgroup)
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
* output [PlacementGroup](#placementgroup)

### dfareporting.placementGroups.update
Updates an existing placement group.


```js
google_dfareporting.dfareporting.placementGroups.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [PlacementGroup](#placementgroup)
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
* output [PlacementGroup](#placementgroup)

### dfareporting.placementGroups.get
Gets one placement group by ID.


```js
google_dfareporting.dfareporting.placementGroups.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Placement group ID.
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
* output [PlacementGroup](#placementgroup)

### dfareporting.placementStrategies.list
Retrieves a list of placement strategies, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.placementStrategies.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * ids `array`: Select only placement strategies with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [PlacementStrategiesListResponse](#placementstrategieslistresponse)

### dfareporting.placementStrategies.patch
Updates an existing placement strategy. This method supports patch semantics.


```js
google_dfareporting.dfareporting.placementStrategies.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: PlacementStrategy ID.
  * body [PlacementStrategy](#placementstrategy)
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
* output [PlacementStrategy](#placementstrategy)

### dfareporting.placementStrategies.insert
Inserts a new placement strategy.


```js
google_dfareporting.dfareporting.placementStrategies.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [PlacementStrategy](#placementstrategy)
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
* output [PlacementStrategy](#placementstrategy)

### dfareporting.placementStrategies.update
Updates an existing placement strategy.


```js
google_dfareporting.dfareporting.placementStrategies.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [PlacementStrategy](#placementstrategy)
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
* output [PlacementStrategy](#placementstrategy)

### dfareporting.placementStrategies.delete
Deletes an existing placement strategy.


```js
google_dfareporting.dfareporting.placementStrategies.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Placement strategy ID.
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

### dfareporting.placementStrategies.get
Gets one placement strategy by ID.


```js
google_dfareporting.dfareporting.placementStrategies.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Placement strategy ID.
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
* output [PlacementStrategy](#placementstrategy)

### dfareporting.placements.list
Retrieves a list of placements, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.placements.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserIds `array`: Select only placements that belong to these advertisers.
  * archived `boolean`: Select only archived placements. Don't set this field to select both archived and non-archived placements.
  * campaignIds `array`: Select only placements that belong to these campaigns.
  * compatibilities `array`: Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
  * contentCategoryIds `array`: Select only placements that are associated with these content categories.
  * directorySiteIds `array`: Select only placements that are associated with these directory sites.
  * groupIds `array`: Select only placements that belong to these placement groups.
  * ids `array`: Select only placements with these IDs.
  * maxEndDate `string`: Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
  * maxResults `integer`: Maximum number of results to return.
  * maxStartDate `string`: Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
  * minEndDate `string`: Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
  * minStartDate `string`: Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * paymentSource `string` (values: PLACEMENT_AGENCY_PAID, PLACEMENT_PUBLISHER_PAID): Select only placements with this payment source.
  * placementStrategyIds `array`: Select only placements that are associated with these placement strategies.
  * pricingTypes `array`: Select only placements with these pricing types.
  * searchString `string`: Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement" .
  * siteIds `array`: Select only placements that are associated with these sites.
  * sizeIds `array`: Select only placements that are associated with these sizes.
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [PlacementsListResponse](#placementslistresponse)

### dfareporting.placements.patch
Updates an existing placement. This method supports patch semantics.


```js
google_dfareporting.dfareporting.placements.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Placement ID.
  * body [Placement](#placement)
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
* output [Placement](#placement)

### dfareporting.placements.insert
Inserts a new placement.


```js
google_dfareporting.dfareporting.placements.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Placement](#placement)
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
* output [Placement](#placement)

### dfareporting.placements.update
Updates an existing placement.


```js
google_dfareporting.dfareporting.placements.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Placement](#placement)
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
* output [Placement](#placement)

### dfareporting.placements.generatetags
Generates tags for a placement.


```js
google_dfareporting.dfareporting.placements.generatetags({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * campaignId `string`: Generate placements belonging to this campaign. This is a required field.
  * placementIds `array`: Generate tags for these placements.
  * tagFormats `array`: Tag formats to generate for these placements. *Note:* PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements.
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
* output [PlacementsGenerateTagsResponse](#placementsgeneratetagsresponse)

### dfareporting.placements.get
Gets one placement by ID.


```js
google_dfareporting.dfareporting.placements.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Placement ID.
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
* output [Placement](#placement)

### dfareporting.platformTypes.list
Retrieves a list of platform types.


```js
google_dfareporting.dfareporting.platformTypes.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [PlatformTypesListResponse](#platformtypeslistresponse)

### dfareporting.platformTypes.get
Gets one platform type by ID.


```js
google_dfareporting.dfareporting.platformTypes.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Platform type ID.
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
* output [PlatformType](#platformtype)

### dfareporting.postalCodes.list
Retrieves a list of postal codes.


```js
google_dfareporting.dfareporting.postalCodes.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [PostalCodesListResponse](#postalcodeslistresponse)

### dfareporting.postalCodes.get
Gets one postal code by ID.


```js
google_dfareporting.dfareporting.postalCodes.get({
  "profileId": "",
  "code": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * code **required** `string`: Postal code ID.
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
* output [PostalCode](#postalcode)

### dfareporting.projects.list
Retrieves a list of projects, possibly filtered. This method supports paging .


```js
google_dfareporting.dfareporting.projects.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserIds `array`: Select only projects with these advertiser IDs.
  * ids `array`: Select only projects with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [ProjectsListResponse](#projectslistresponse)

### dfareporting.projects.get
Gets one project by ID.


```js
google_dfareporting.dfareporting.projects.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Project ID.
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
* output [Project](#project)

### dfareporting.inventoryItems.list
Retrieves a list of inventory items, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.inventoryItems.list({
  "profileId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * projectId **required** `string`: Project ID for order documents.
  * ids `array`: Select only inventory items with these IDs.
  * inPlan `boolean`: Select only inventory items that are in plan.
  * maxResults `integer`: Maximum number of results to return.
  * orderId `array`: Select only inventory items that belong to specified orders.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * siteId `array`: Select only inventory items that are associated with these sites.
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
  * type `string` (values: PLANNING_PLACEMENT_TYPE_REGULAR, PLANNING_PLACEMENT_TYPE_CREDIT): Select only inventory items with this type.
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
* output [InventoryItemsListResponse](#inventoryitemslistresponse)

### dfareporting.inventoryItems.get
Gets one inventory item by ID.


```js
google_dfareporting.dfareporting.inventoryItems.get({
  "profileId": "",
  "projectId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * projectId **required** `string`: Project ID for order documents.
  * id **required** `string`: Inventory item ID.
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
* output [InventoryItem](#inventoryitem)

### dfareporting.orderDocuments.list
Retrieves a list of order documents, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.orderDocuments.list({
  "profileId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * projectId **required** `string`: Project ID for order documents.
  * approved `boolean`: Select only order documents that have been approved by at least one user.
  * ids `array`: Select only order documents with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * orderId `array`: Select only order documents for specified orders.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for order documents by name or ID. Wildcards (*) are allowed. For example, "orderdocument*2015" will return order documents with names like "orderdocument June 2015", "orderdocument April 2015", or simply "orderdocument 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "orderdocument" will match order documents with name "my orderdocument", "orderdocument 2015", or simply "orderdocument".
  * siteId `array`: Select only order documents that are associated with these sites.
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [OrderDocumentsListResponse](#orderdocumentslistresponse)

### dfareporting.orderDocuments.get
Gets one order document by ID.


```js
google_dfareporting.dfareporting.orderDocuments.get({
  "profileId": "",
  "projectId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * projectId **required** `string`: Project ID for order documents.
  * id **required** `string`: Order document ID.
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
* output [OrderDocument](#orderdocument)

### dfareporting.orders.list
Retrieves a list of orders, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.orders.list({
  "profileId": "",
  "projectId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * projectId **required** `string`: Project ID for orders.
  * ids `array`: Select only orders with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".
  * siteId `array`: Select only orders that are associated with these site IDs.
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [OrdersListResponse](#orderslistresponse)

### dfareporting.orders.get
Gets one order by ID.


```js
google_dfareporting.dfareporting.orders.get({
  "profileId": "",
  "projectId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * projectId **required** `string`: Project ID for orders.
  * id **required** `string`: Order ID.
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
* output [Order](#order)

### dfareporting.regions.list
Retrieves a list of regions.


```js
google_dfareporting.dfareporting.regions.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [RegionsListResponse](#regionslistresponse)

### dfareporting.remarketingListShares.patch
Updates an existing remarketing list share. This method supports patch semantics.


```js
google_dfareporting.dfareporting.remarketingListShares.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: RemarketingList ID.
  * body [RemarketingListShare](#remarketinglistshare)
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
* output [RemarketingListShare](#remarketinglistshare)

### dfareporting.remarketingListShares.update
Updates an existing remarketing list share.


```js
google_dfareporting.dfareporting.remarketingListShares.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [RemarketingListShare](#remarketinglistshare)
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
* output [RemarketingListShare](#remarketinglistshare)

### dfareporting.remarketingListShares.get
Gets one remarketing list share by remarketing list ID.


```js
google_dfareporting.dfareporting.remarketingListShares.get({
  "profileId": "",
  "remarketingListId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * remarketingListId **required** `string`: Remarketing list ID.
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
* output [RemarketingListShare](#remarketinglistshare)

### dfareporting.remarketingLists.list
Retrieves a list of remarketing lists, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.remarketingLists.list({
  "profileId": "",
  "advertiserId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserId **required** `string`: Select only remarketing lists owned by this advertiser.
  * active `boolean`: Select only active or only inactive remarketing lists.
  * floodlightActivityId `string`: Select only remarketing lists that have this floodlight activity ID.
  * maxResults `integer`: Maximum number of results to return.
  * name `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [RemarketingListsListResponse](#remarketinglistslistresponse)

### dfareporting.remarketingLists.patch
Updates an existing remarketing list. This method supports patch semantics.


```js
google_dfareporting.dfareporting.remarketingLists.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: RemarketingList ID.
  * body [RemarketingList](#remarketinglist)
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
* output [RemarketingList](#remarketinglist)

### dfareporting.remarketingLists.insert
Inserts a new remarketing list.


```js
google_dfareporting.dfareporting.remarketingLists.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [RemarketingList](#remarketinglist)
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
* output [RemarketingList](#remarketinglist)

### dfareporting.remarketingLists.update
Updates an existing remarketing list.


```js
google_dfareporting.dfareporting.remarketingLists.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [RemarketingList](#remarketinglist)
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
* output [RemarketingList](#remarketinglist)

### dfareporting.remarketingLists.get
Gets one remarketing list by ID.


```js
google_dfareporting.dfareporting.remarketingLists.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Remarketing list ID.
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
* output [RemarketingList](#remarketinglist)

### dfareporting.reports.list
Retrieves list of reports.


```js
google_dfareporting.dfareporting.reports.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The Campaign Manager 360 user profile ID.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: The value of the nextToken from the previous result page.
  * scope `string` (values: ALL, MINE): The scope that defines which results are returned.
  * sortField `string` (values: ID, LAST_MODIFIED_TIME, NAME): The field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [ReportList](#reportlist)

### dfareporting.reports.insert
Creates a report.


```js
google_dfareporting.dfareporting.reports.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The Campaign Manager 360 user profile ID.
  * body [Report](#report)
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
* output [Report](#report)

### dfareporting.reports.compatibleFields.query
Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.


```js
google_dfareporting.dfareporting.reports.compatibleFields.query({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The Campaign Manager 360 user profile ID.
  * body [Report](#report)
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
* output [CompatibleFields](#compatiblefields)

### dfareporting.reports.delete
Deletes a report by its ID.


```js
google_dfareporting.dfareporting.reports.delete({
  "profileId": "",
  "reportId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The Campaign Manager 360 user profile ID.
  * reportId **required** `string`: The ID of the report.
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

### dfareporting.reports.get
Retrieves a report by its ID.


```js
google_dfareporting.dfareporting.reports.get({
  "profileId": "",
  "reportId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The Campaign Manager 360 user profile ID.
  * reportId **required** `string`: The ID of the report.
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
* output [Report](#report)

### dfareporting.reports.patch
Updates an existing report. This method supports patch semantics.


```js
google_dfareporting.dfareporting.reports.patch({
  "profileId": "",
  "reportId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The DFA user profile ID.
  * reportId **required** `string`: The ID of the report.
  * body [Report](#report)
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
* output [Report](#report)

### dfareporting.reports.update
Updates a report.


```js
google_dfareporting.dfareporting.reports.update({
  "profileId": "",
  "reportId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The Campaign Manager 360 user profile ID.
  * reportId **required** `string`: The ID of the report.
  * body [Report](#report)
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
* output [Report](#report)

### dfareporting.reports.files.list
Lists files for a report.


```js
google_dfareporting.dfareporting.reports.files.list({
  "profileId": "",
  "reportId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The Campaign Manager 360 user profile ID.
  * reportId **required** `string`: The ID of the parent report.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: The value of the nextToken from the previous result page.
  * sortField `string` (values: ID, LAST_MODIFIED_TIME): The field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [FileList](#filelist)

### dfareporting.reports.files.get
Retrieves a report file by its report ID and file ID. This method supports media download.


```js
google_dfareporting.dfareporting.reports.files.get({
  "profileId": "",
  "reportId": "",
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The Campaign Manager 360 user profile ID.
  * reportId **required** `string`: The ID of the report.
  * fileId **required** `string`: The ID of the report file.
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
* output [File](#file)

### dfareporting.reports.run
Runs a report.


```js
google_dfareporting.dfareporting.reports.run({
  "profileId": "",
  "reportId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: The Campaign Manager 360 user profile ID.
  * reportId **required** `string`: The ID of the report.
  * synchronous `boolean`: If set and true, tries to run the report synchronously.
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
* output [File](#file)

### dfareporting.sites.list
Retrieves a list of sites, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.sites.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * acceptsInStreamVideoPlacements `boolean`: This search filter is no longer supported and will have no effect on the results returned.
  * acceptsInterstitialPlacements `boolean`: This search filter is no longer supported and will have no effect on the results returned.
  * acceptsPublisherPaidPlacements `boolean`: Select only sites that accept publisher paid placements.
  * adWordsSite `boolean`: Select only AdWords sites.
  * approved `boolean`: Select only approved sites.
  * campaignIds `array`: Select only sites with these campaign IDs.
  * directorySiteIds `array`: Select only sites with these directory site IDs.
  * ids `array`: Select only sites with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
  * subaccountId `string`: Select only sites with this subaccount ID.
  * unmappedSite `boolean`: Select only sites that have not been mapped to a directory site.
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
* output [SitesListResponse](#siteslistresponse)

### dfareporting.sites.patch
Updates an existing site. This method supports patch semantics.


```js
google_dfareporting.dfareporting.sites.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Site ID.
  * body [Site](#site)
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
* output [Site](#site)

### dfareporting.sites.insert
Inserts a new site.


```js
google_dfareporting.dfareporting.sites.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Site](#site)
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
* output [Site](#site)

### dfareporting.sites.update
Updates an existing site.


```js
google_dfareporting.dfareporting.sites.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Site](#site)
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
* output [Site](#site)

### dfareporting.sites.get
Gets one site by ID.


```js
google_dfareporting.dfareporting.sites.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Site ID.
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
* output [Site](#site)

### dfareporting.sizes.list
Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.


```js
google_dfareporting.dfareporting.sizes.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * height `integer`: Select only sizes with this height.
  * iabStandard `boolean`: Select only IAB standard sizes.
  * ids `array`: Select only sizes with these IDs.
  * width `integer`: Select only sizes with this width.
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
* output [SizesListResponse](#sizeslistresponse)

### dfareporting.sizes.insert
Inserts a new size.


```js
google_dfareporting.dfareporting.sizes.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Size](#size)
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
* output [Size](#size)

### dfareporting.sizes.get
Gets one size by ID.


```js
google_dfareporting.dfareporting.sizes.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Size ID.
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
* output [Size](#size)

### dfareporting.subaccounts.list
Gets a list of subaccounts, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.subaccounts.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * ids `array`: Select only subaccounts with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount" .
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [SubaccountsListResponse](#subaccountslistresponse)

### dfareporting.subaccounts.patch
Updates an existing subaccount. This method supports patch semantics.


```js
google_dfareporting.dfareporting.subaccounts.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Subaccount ID.
  * body [Subaccount](#subaccount)
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
* output [Subaccount](#subaccount)

### dfareporting.subaccounts.insert
Inserts a new subaccount.


```js
google_dfareporting.dfareporting.subaccounts.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Subaccount](#subaccount)
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
* output [Subaccount](#subaccount)

### dfareporting.subaccounts.update
Updates an existing subaccount.


```js
google_dfareporting.dfareporting.subaccounts.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [Subaccount](#subaccount)
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
* output [Subaccount](#subaccount)

### dfareporting.subaccounts.get
Gets one subaccount by ID.


```js
google_dfareporting.dfareporting.subaccounts.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Subaccount ID.
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
* output [Subaccount](#subaccount)

### dfareporting.targetableRemarketingLists.list
Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.targetableRemarketingLists.list({
  "profileId": "",
  "advertiserId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserId **required** `string`: Select only targetable remarketing lists targetable by these advertisers.
  * active `boolean`: Select only active or only inactive targetable remarketing lists.
  * maxResults `integer`: Maximum number of results to return.
  * name `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [TargetableRemarketingListsListResponse](#targetableremarketinglistslistresponse)

### dfareporting.targetableRemarketingLists.get
Gets one remarketing list by ID.


```js
google_dfareporting.dfareporting.targetableRemarketingLists.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Remarketing list ID.
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
* output [TargetableRemarketingList](#targetableremarketinglist)

### dfareporting.targetingTemplates.list
Retrieves a list of targeting templates, optionally filtered. This method supports paging.


```js
google_dfareporting.dfareporting.targetingTemplates.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * advertiserId `string`: Select only targeting templates with this advertiser ID.
  * ids `array`: Select only targeting templates with these IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
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
* output [TargetingTemplatesListResponse](#targetingtemplateslistresponse)

### dfareporting.targetingTemplates.patch
Updates an existing targeting template. This method supports patch semantics.


```js
google_dfareporting.dfareporting.targetingTemplates.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: TargetingTemplate ID.
  * body [TargetingTemplate](#targetingtemplate)
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
* output [TargetingTemplate](#targetingtemplate)

### dfareporting.targetingTemplates.insert
Inserts a new targeting template.


```js
google_dfareporting.dfareporting.targetingTemplates.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [TargetingTemplate](#targetingtemplate)
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
* output [TargetingTemplate](#targetingtemplate)

### dfareporting.targetingTemplates.update
Updates an existing targeting template.


```js
google_dfareporting.dfareporting.targetingTemplates.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [TargetingTemplate](#targetingtemplate)
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
* output [TargetingTemplate](#targetingtemplate)

### dfareporting.targetingTemplates.get
Gets one targeting template by ID.


```js
google_dfareporting.dfareporting.targetingTemplates.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: Targeting template ID.
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
* output [TargetingTemplate](#targetingtemplate)

### dfareporting.userRolePermissionGroups.list
Gets a list of all supported user role permission groups.


```js
google_dfareporting.dfareporting.userRolePermissionGroups.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [UserRolePermissionGroupsListResponse](#userrolepermissiongroupslistresponse)

### dfareporting.userRolePermissionGroups.get
Gets one user role permission group by ID.


```js
google_dfareporting.dfareporting.userRolePermissionGroups.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: User role permission group ID.
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
* output [UserRolePermissionGroup](#userrolepermissiongroup)

### dfareporting.userRolePermissions.list
Gets a list of user role permissions, possibly filtered.


```js
google_dfareporting.dfareporting.userRolePermissions.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * ids `array`: Select only user role permissions with these IDs.
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
* output [UserRolePermissionsListResponse](#userrolepermissionslistresponse)

### dfareporting.userRolePermissions.get
Gets one user role permission by ID.


```js
google_dfareporting.dfareporting.userRolePermissions.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: User role permission ID.
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
* output [UserRolePermission](#userrolepermission)

### dfareporting.userRoles.list
Retrieves a list of user roles, possibly filtered. This method supports paging.


```js
google_dfareporting.dfareporting.userRoles.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * accountUserRoleOnly `boolean`: Select only account level user roles not associated with any specific subaccount.
  * ids `array`: Select only user roles with the specified IDs.
  * maxResults `integer`: Maximum number of results to return.
  * pageToken `string`: Value of the nextPageToken from the previous result page.
  * searchString `string`: Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
  * sortField `string` (values: ID, NAME): Field by which to sort the list.
  * sortOrder `string` (values: ASCENDING, DESCENDING): Order of sorted results.
  * subaccountId `string`: Select only user roles that belong to this subaccount.
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
* output [UserRolesListResponse](#userroleslistresponse)

### dfareporting.userRoles.patch
Updates an existing user role. This method supports patch semantics.


```js
google_dfareporting.dfareporting.userRoles.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: UserRole ID.
  * body [UserRole](#userrole)
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
* output [UserRole](#userrole)

### dfareporting.userRoles.insert
Inserts a new user role.


```js
google_dfareporting.dfareporting.userRoles.insert({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [UserRole](#userrole)
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
* output [UserRole](#userrole)

### dfareporting.userRoles.update
Updates an existing user role.


```js
google_dfareporting.dfareporting.userRoles.update({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * body [UserRole](#userrole)
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
* output [UserRole](#userrole)

### dfareporting.userRoles.delete
Deletes an existing user role.


```js
google_dfareporting.dfareporting.userRoles.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: User role ID.
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

### dfareporting.userRoles.get
Gets one user role by ID.


```js
google_dfareporting.dfareporting.userRoles.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `string`: User role ID.
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
* output [UserRole](#userrole)

### dfareporting.videoFormats.list
Lists available video formats.


```js
google_dfareporting.dfareporting.videoFormats.list({
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
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
* output [VideoFormatsListResponse](#videoformatslistresponse)

### dfareporting.videoFormats.get
Gets one video format by ID.


```js
google_dfareporting.dfareporting.videoFormats.get({
  "profileId": "",
  "id": 0
}, context)
```

#### Input
* input `object`
  * profileId **required** `string`: User profile ID associated with this request.
  * id **required** `integer`: Video format ID.
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
* output [VideoFormat](#videoformat)



## Definitions

### Account
* Account `object`: Contains properties of a Campaign Manager account.
  * accountPermissionIds `array`: Account permissions assigned to this account.
    * items `string`
  * accountProfile `string` (values: ACCOUNT_PROFILE_BASIC, ACCOUNT_PROFILE_STANDARD): Profile for this account. This is a read-only field that can be left blank.
  * active `boolean`: Whether this account is active.
  * activeAdsLimitTier `string` (values: ACTIVE_ADS_TIER_40K, ACTIVE_ADS_TIER_75K, ACTIVE_ADS_TIER_100K, ACTIVE_ADS_TIER_200K, ACTIVE_ADS_TIER_300K, ACTIVE_ADS_TIER_500K, ACTIVE_ADS_TIER_750K, ACTIVE_ADS_TIER_1M): Maximum number of active ads allowed for this account.
  * activeViewOptOut `boolean`: Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions.
  * availablePermissionIds `array`: User role permissions available to the user roles of this account.
    * items `string`
  * countryId `string`: ID of the country associated with this account.
  * currencyId `string`: ID of currency associated with this account. This is a required field. Acceptable values are: - "1" for USD - "2" for GBP - "3" for ESP - "4" for SEK - "5" for CAD - "6" for JPY - "7" for DEM - "8" for AUD - "9" for FRF - "10" for ITL - "11" for DKK - "12" for NOK - "13" for FIM - "14" for ZAR - "15" for IEP - "16" for NLG - "17" for EUR - "18" for KRW - "19" for TWD - "20" for SGD - "21" for CNY - "22" for HKD - "23" for NZD - "24" for MYR - "25" for BRL - "26" for PTE - "28" for CLP - "29" for TRY - "30" for ARS - "31" for PEN - "32" for ILS - "33" for CHF - "34" for VEF - "35" for COP - "36" for GTQ - "37" for PLN - "39" for INR - "40" for THB - "41" for IDR - "42" for CZK - "43" for RON - "44" for HUF - "45" for RUB - "46" for AED - "47" for BGN - "48" for HRK - "49" for MXN - "50" for NGN - "51" for EGP 
  * defaultCreativeSizeId `string`: Default placement dimensions for this account.
  * description `string`: Description of this account.
  * id `string`: ID of this account. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#account".
  * locale `string`: Locale of this account. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional) 
  * maximumImageSize `string`: Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1.
  * name `string`: Name of this account. This is a required field, and must be less than 128 characters long and be globally unique.
  * nielsenOcrEnabled `boolean`: Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default.
  * reportsConfiguration [ReportsConfiguration](#reportsconfiguration)
  * shareReportsWithTwitter `boolean`: Share Path to Conversion reports with Twitter.
  * teaserSizeLimit `string`: File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive.

### AccountActiveAdSummary
* AccountActiveAdSummary `object`: Gets a summary of active ads in an account.
  * accountId `string`: ID of the account.
  * activeAds `string`: Ads that have been activated for the account
  * activeAdsLimitTier `string` (values: ACTIVE_ADS_TIER_40K, ACTIVE_ADS_TIER_75K, ACTIVE_ADS_TIER_100K, ACTIVE_ADS_TIER_200K, ACTIVE_ADS_TIER_300K, ACTIVE_ADS_TIER_500K, ACTIVE_ADS_TIER_750K, ACTIVE_ADS_TIER_1M): Maximum number of active ads allowed for the account.
  * availableAds `string`: Ads that can be activated for the account.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountActiveAdSummary".

### AccountPermission
* AccountPermission `object`: AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account.
  * accountProfiles `array`: Account profiles associated with this account permission. Possible values are: - "ACCOUNT_PROFILE_BASIC" - "ACCOUNT_PROFILE_STANDARD" 
    * items `string` (values: ACCOUNT_PROFILE_BASIC, ACCOUNT_PROFILE_STANDARD)
  * id `string`: ID of this account permission.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermission".
  * level `string` (values: USER, ADMINISTRATOR): Administrative level required to enable this account permission.
  * name `string`: Name of this account permission.
  * permissionGroupId `string`: Permission group of this account permission.

### AccountPermissionGroup
* AccountPermissionGroup `object`: AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account permissions.
  * id `string`: ID of this account permission group.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroup".
  * name `string`: Name of this account permission group.

### AccountPermissionGroupsListResponse
* AccountPermissionGroupsListResponse `object`: Account Permission Group List Response
  * accountPermissionGroups `array`: Account permission group collection.
    * items [AccountPermissionGroup](#accountpermissiongroup)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupsListResponse".

### AccountPermissionsListResponse
* AccountPermissionsListResponse `object`: Account Permission List Response
  * accountPermissions `array`: Account permission collection.
    * items [AccountPermission](#accountpermission)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionsListResponse".

### AccountUserProfile
* AccountUserProfile `object`: AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
  * accountId `string`: Account ID of the user profile. This is a read-only field that can be left blank.
  * active `boolean`: Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable.
  * advertiserFilter [ObjectFilter](#objectfilter)
  * campaignFilter [ObjectFilter](#objectfilter)
  * comments `string`: Comments for this user profile.
  * email `string`: Email of the user profile. The email addresss must be linked to a Google Account. This field is required on insertion and is read-only after insertion.
  * id `string`: ID of the user profile. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfile".
  * locale `string`: Locale of the user profile. This is a required field. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional) 
  * name `string`: Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any of the following characters: "&;<>"#%,".
  * siteFilter [ObjectFilter](#objectfilter)
  * subaccountId `string`: Subaccount ID of the user profile. This is a read-only field that can be left blank.
  * traffickerType `string` (values: INTERNAL_NON_TRAFFICKER, INTERNAL_TRAFFICKER, EXTERNAL_TRAFFICKER): Trafficker type of this user profile. This is a read-only field.
  * userAccessType `string` (values: NORMAL_USER, SUPER_USER, INTERNAL_ADMINISTRATOR, READ_ONLY_SUPER_USER): User type of the user profile. This is a read-only field that can be left blank.
  * userRoleFilter [ObjectFilter](#objectfilter)
  * userRoleId `string`: User role ID of the user profile. This is a required field.

### AccountUserProfilesListResponse
* AccountUserProfilesListResponse `object`: Account User Profile List Response
  * accountUserProfiles `array`: Account user profile collection.
    * items [AccountUserProfile](#accountuserprofile)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfilesListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### AccountsListResponse
* AccountsListResponse `object`: Account List Response
  * accounts `array`: Account collection.
    * items [Account](#account)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### Activities
* Activities `object`: Represents an activity group.
  * filters `array`: List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup".
    * items [DimensionValue](#dimensionvalue)
  * kind `string`: The kind of resource this is, in this case dfareporting#activities.
  * metricNames `array`: List of names of floodlight activity metrics.
    * items `string`

### Ad
* Ad `object`: Contains properties of a Campaign Manager ad.
  * accountId `string`: Account ID of this ad. This is a read-only field that can be left blank.
  * active `boolean`: Whether this ad is active. When true, archived must be false.
  * advertiserId `string`: Advertiser ID of this ad. This is a required field on insertion.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * archived `boolean`: Whether this ad is archived. When true, active must be false.
  * audienceSegmentId `string`: Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD.
  * campaignId `string`: Campaign ID of this ad. This is a required field on insertion.
  * campaignIdDimensionValue [DimensionValue](#dimensionvalue)
  * clickThroughUrl [ClickThroughUrl](#clickthroughurl)
  * clickThroughUrlSuffixProperties [ClickThroughUrlSuffixProperties](#clickthroughurlsuffixproperties)
  * comments `string`: Comments for this ad.
  * compatibility `string` (values: DISPLAY, DISPLAY_INTERSTITIAL, APP, APP_INTERSTITIAL, IN_STREAM_VIDEO, IN_STREAM_AUDIO): Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard.
  * createInfo [LastModifiedInfo](#lastmodifiedinfo)
  * creativeGroupAssignments `array`: Creative group assignments for this ad. Applicable when type is AD_SERVING_CLICK_TRACKER. Only one assignment per creative group number is allowed for a maximum of two assignments.
    * items [CreativeGroupAssignment](#creativegroupassignment)
  * creativeRotation [CreativeRotation](#creativerotation)
  * dayPartTargeting [DayPartTargeting](#dayparttargeting)
  * defaultClickThroughEventTagProperties [DefaultClickThroughEventTagProperties](#defaultclickthrougheventtagproperties)
  * deliverySchedule [DeliverySchedule](#deliveryschedule)
  * dynamicClickTracker `boolean`: Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field on insert, and is read-only after insert.
  * endTime `string`
  * eventTagOverrides `array`: Event tag overrides for this ad.
    * items [EventTagOverride](#eventtagoverride)
  * geoTargeting [GeoTargeting](#geotargeting)
  * id `string`: ID of this ad. This is a read-only, auto-generated field.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * keyValueTargetingExpression [KeyValueTargetingExpression](#keyvaluetargetingexpression)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#ad".
  * languageTargeting [LanguageTargeting](#languagetargeting)
  * lastModifiedInfo [LastModifiedInfo](#lastmodifiedinfo)
  * name `string`: Name of this ad. This is a required field and must be less than 256 characters long.
  * placementAssignments `array`: Placement assignments for this ad.
    * items [PlacementAssignment](#placementassignment)
  * remarketingListExpression [ListTargetingExpression](#listtargetingexpression)
  * size [Size](#size)
  * sslCompliant `boolean`: Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
  * sslRequired `boolean`: Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated.
  * startTime `string`
  * subaccountId `string`: Subaccount ID of this ad. This is a read-only field that can be left blank.
  * targetingTemplateId `string`: Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of dayPartTargeting, geoTargeting, keyValueTargetingExpression, languageTargeting, remarketingListExpression, or technologyTargeting are set. Applicable when type is AD_SERVING_STANDARD_AD.
  * technologyTargeting [TechnologyTargeting](#technologytargeting)
  * type `string` (values: AD_SERVING_STANDARD_AD, AD_SERVING_DEFAULT_AD, AD_SERVING_CLICK_TRACKER, AD_SERVING_TRACKING, AD_SERVING_BRAND_SAFE_AD): Type of ad. This is a required field on insertion. Note that default ads ( AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource).

### AdBlockingConfiguration
* AdBlockingConfiguration `object`: Campaign ad blocking settings.
  * clickThroughUrl `string`: Click-through URL used by brand-neutral ads. This is a required field when overrideClickThroughUrl is set to true.
  * creativeBundleId `string`: ID of a creative bundle to use for this campaign. If set, brand-neutral ads will select creatives from this bundle. Otherwise, a default transparent pixel will be used.
  * enabled `boolean`: Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings.
  * overrideClickThroughUrl `boolean`: Whether the brand-neutral ad's click-through URL comes from the campaign's creative bundle or the override URL. Must be set to true if ad blocking is enabled and no creative bundle is configured.

### AdSlot
* AdSlot `object`: Ad Slot
  * comment `string`: Comment for this ad slot.
  * compatibility `string` (values: DISPLAY, DISPLAY_INTERSTITIAL, APP, APP_INTERSTITIAL, IN_STREAM_VIDEO, IN_STREAM_AUDIO): Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
  * height `string`: Height of this ad slot.
  * linkedPlacementId `string`: ID of the placement from an external platform that is linked to this ad slot.
  * name `string`: Name of this ad slot.
  * paymentSourceType `string` (values: PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID, PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID): Payment source type of this ad slot.
  * primary `boolean`: Primary ad slot of a roadblock inventory item.
  * width `string`: Width of this ad slot.

### AdsListResponse
* AdsListResponse `object`: Ad List Response
  * ads `array`: Ad collection.
    * items [Ad](#ad)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#adsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### Advertiser
* Advertiser `object`: Contains properties of a Campaign Manager advertiser.
  * accountId `string`: Account ID of this advertiser.This is a read-only field that can be left blank.
  * advertiserGroupId `string`: ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for all advertisers in each group.
  * clickThroughUrlSuffix `string`: Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long.
  * defaultClickThroughEventTagId `string`: ID of the click-through event tag to apply by default to the landing pages of this advertiser's campaigns.
  * defaultEmail `string`: Default email address used in sender field for tag emails.
  * floodlightConfigurationId `string`: Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left blank. This field can be set to another advertiser's floodlight configuration ID in order to share that advertiser's floodlight configuration with this advertiser, so long as: - This advertiser's original floodlight configuration is not already associated with floodlight activities or floodlight activity groups. - This advertiser's original floodlight configuration is not already shared with another advertiser. 
  * floodlightConfigurationIdDimensionValue [DimensionValue](#dimensionvalue)
  * id `string`: ID of this advertiser. This is a read-only, auto-generated field.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiser".
  * name `string`: Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account.
  * originalFloodlightConfigurationId `string`: Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to originalFloodlightConfigurationId to unshare the advertiser's current floodlight configuration. You cannot unshare an advertiser's floodlight configuration if the shared configuration has activities associated with any campaign or placement.
  * status `string` (values: APPROVED, ON_HOLD): Status of this advertiser.
  * subaccountId `string`: Subaccount ID of this advertiser.This is a read-only field that can be left blank.
  * suspended `boolean`: Suspension status of this advertiser.

### AdvertiserGroup
* AdvertiserGroup `object`: Groups advertisers together so that reports can be generated for the entire group at once.
  * accountId `string`: Account ID of this advertiser group. This is a read-only field that can be left blank.
  * id `string`: ID of this advertiser group. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroup".
  * name `string`: Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same account.

### AdvertiserGroupsListResponse
* AdvertiserGroupsListResponse `object`: Advertiser Group List Response
  * advertiserGroups `array`: Advertiser group collection.
    * items [AdvertiserGroup](#advertisergroup)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### AdvertiserLandingPagesListResponse
* AdvertiserLandingPagesListResponse `object`: Landing Page List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserLandingPagesListResponse".
  * landingPages `array`: Landing page collection
    * items [LandingPage](#landingpage)
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### AdvertisersListResponse
* AdvertisersListResponse `object`: Advertiser List Response
  * advertisers `array`: Advertiser collection.
    * items [Advertiser](#advertiser)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### AudienceSegment
* AudienceSegment `object`: Audience Segment.
  * allocation `integer`: Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group. Acceptable values are 1 to 1000, inclusive.
  * id `string`: ID of this audience segment. This is a read-only, auto-generated field.
  * name `string`: Name of this audience segment. This is a required field and must be less than 65 characters long.

### AudienceSegmentGroup
* AudienceSegmentGroup `object`: Audience Segment Group.
  * audienceSegments `array`: Audience segments assigned to this group. The number of segments must be between 2 and 100.
    * items [AudienceSegment](#audiencesegment)
  * id `string`: ID of this audience segment group. This is a read-only, auto-generated field.
  * name `string`: Name of this audience segment group. This is a required field and must be less than 65 characters long.

### Browser
* Browser `object`: Contains information about a browser that can be targeted by ads.
  * browserVersionId `string`: ID referring to this grouping of browser and version numbers. This is the ID used for targeting.
  * dartId `string`: DART ID of this browser. This is the ID used when generating reports.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#browser".
  * majorVersion `string`: Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is.
  * minorVersion `string`: Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is.
  * name `string`: Name of this browser.

### BrowsersListResponse
* BrowsersListResponse `object`: Browser List Response
  * browsers `array`: Browser collection.
    * items [Browser](#browser)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#browsersListResponse".

### Campaign
* Campaign `object`: Contains properties of a Campaign Manager campaign.
  * accountId `string`: Account ID of this campaign. This is a read-only field that can be left blank.
  * adBlockingConfiguration [AdBlockingConfiguration](#adblockingconfiguration)
  * additionalCreativeOptimizationConfigurations `array`: Additional creative optimization configurations for the campaign.
    * items [CreativeOptimizationConfiguration](#creativeoptimizationconfiguration)
  * advertiserGroupId `string`: Advertiser group ID of the associated advertiser.
  * advertiserId `string`: Advertiser ID of this campaign. This is a required field.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * archived `boolean`: Whether this campaign has been archived.
  * audienceSegmentGroups `array`: Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups.
    * items [AudienceSegmentGroup](#audiencesegmentgroup)
  * billingInvoiceCode `string`: Billing invoice code included in the Campaign Manager client billing invoices associated with the campaign.
  * clickThroughUrlSuffixProperties [ClickThroughUrlSuffixProperties](#clickthroughurlsuffixproperties)
  * comment `string`: Arbitrary comments about this campaign. Must be less than 256 characters long.
  * createInfo [LastModifiedInfo](#lastmodifiedinfo)
  * creativeGroupIds `array`: List of creative group IDs that are assigned to the campaign.
    * items `string`
  * creativeOptimizationConfiguration [CreativeOptimizationConfiguration](#creativeoptimizationconfiguration)
  * defaultClickThroughEventTagProperties [DefaultClickThroughEventTagProperties](#defaultclickthrougheventtagproperties)
  * defaultLandingPageId `string`: The default landing page ID for this campaign.
  * endDate `string`
  * eventTagOverrides `array`: Overrides that can be used to activate or deactivate advertiser event tags.
    * items [EventTagOverride](#eventtagoverride)
  * externalId `string`: External ID for this campaign.
  * id `string`: ID of this campaign. This is a read-only auto-generated field.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaign".
  * lastModifiedInfo [LastModifiedInfo](#lastmodifiedinfo)
  * name `string`: Name of this campaign. This is a required field and must be less than 256 characters long and unique among campaigns of the same advertiser.
  * nielsenOcrEnabled `boolean`: Whether Nielsen reports are enabled for this campaign.
  * startDate `string`
  * subaccountId `string`: Subaccount ID of this campaign. This is a read-only field that can be left blank.
  * traffickerEmails `array`: Campaign trafficker contact emails.
    * items `string`

### CampaignCreativeAssociation
* CampaignCreativeAssociation `object`: Identifies a creative which has been associated with a given campaign.
  * creativeId `string`: ID of the creative associated with the campaign. This is a required field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociation".

### CampaignCreativeAssociationsListResponse
* CampaignCreativeAssociationsListResponse `object`: Campaign Creative Association List Response
  * campaignCreativeAssociations `array`: Campaign creative association collection
    * items [CampaignCreativeAssociation](#campaigncreativeassociation)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociationsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### CampaignManagerIds
* CampaignManagerIds `object`: Campaign Manager IDs related to the custom event.
  * adId `string`: Ad ID for Campaign Manager.
  * campaignId `string`: Campaign ID for Campaign Manager.
  * creativeId `string`: Creative ID for Campaign Manager.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignManagerIds".
  * placementId `string`: Placement ID for Campaign Manager.
  * siteId `string`: Site ID for Campaign Manager.

### CampaignsListResponse
* CampaignsListResponse `object`: Campaign List Response
  * campaigns `array`: Campaign collection.
    * items [Campaign](#campaign)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### ChangeLog
* ChangeLog `object`: Describes a change that a user has made to a resource.
  * accountId `string`: Account ID of the modified object.
  * action `string`: Action which caused the change.
  * changeTime `string`
  * fieldName `string`: Field name of the object which changed.
  * id `string`: ID of this change log.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLog".
  * newValue `string`: New value of the object field.
  * objectId `string`: ID of the object of this change log. The object could be a campaign, placement, ad, or other type.
  * objectType `string`: Object type of the change log.
  * oldValue `string`: Old value of the object field.
  * subaccountId `string`: Subaccount ID of the modified object.
  * transactionId `string`: Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share the same transactionId.
  * userProfileId `string`: ID of the user who modified the object.
  * userProfileName `string`: User profile name of the user who modified the object.

### ChangeLogsListResponse
* ChangeLogsListResponse `object`: Change Log List Response
  * changeLogs `array`: Change log collection.
    * items [ChangeLog](#changelog)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLogsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### ChannelGrouping
* ChannelGrouping `object`: Represents a DfaReporting channel grouping.
  * fallbackName `string`: ChannelGrouping fallback name.
  * kind `string`: The kind of resource this is, in this case dfareporting#channelGrouping.
  * name `string`: ChannelGrouping name.
  * rules `array`: The rules contained within this channel grouping.
    * items [ChannelGroupingRule](#channelgroupingrule)

### ChannelGroupingRule
* ChannelGroupingRule `object`: Represents a DfaReporting channel grouping rule.
  * disjunctiveMatchStatements `array`: The disjunctive match statements contained within this rule.
    * items [DisjunctiveMatchStatement](#disjunctivematchstatement)
  * kind `string`: The kind of resource this is, in this case dfareporting#channelGroupingRule.
  * name `string`: Rule name.

### CitiesListResponse
* CitiesListResponse `object`: City List Response
  * cities `array`: City collection.
    * items [City](#city)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#citiesListResponse".

### City
* City `object`: Contains information about a city that can be targeted by ads.
  * countryCode `string`: Country code of the country to which this city belongs.
  * countryDartId `string`: DART ID of the country to which this city belongs.
  * dartId `string`: DART ID of this city. This is the ID used for targeting and generating reports.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#city".
  * metroCode `string`: Metro region code of the metro region (DMA) to which this city belongs.
  * metroDmaId `string`: ID of the metro region (DMA) to which this city belongs.
  * name `string`: Name of this city.
  * regionCode `string`: Region code of the region to which this city belongs.
  * regionDartId `string`: DART ID of the region to which this city belongs.

### ClickTag
* ClickTag `object`: Creative Click Tag.
  * clickThroughUrl [CreativeClickThroughUrl](#creativeclickthroughurl)
  * eventName `string`: Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
  * name `string`: Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's creativeAssetId.name field.

### ClickThroughUrl
* ClickThroughUrl `object`: Click-through URL
  * computedClickThroughUrl `string`: Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If defaultLandingPage is enabled then the campaign's default landing page URL is assigned to this field. - If defaultLandingPage is not enabled and a landingPageId is specified then that landing page's URL is assigned to this field. - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field. 
  * customClickThroughUrl `string`: Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left unset.
  * defaultLandingPage `boolean`: Whether the campaign default landing page is used.
  * landingPageId `string`: ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false.

### ClickThroughUrlSuffixProperties
* ClickThroughUrlSuffixProperties `object`: Click Through URL Suffix settings.
  * clickThroughUrlSuffix `string`: Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long.
  * overrideInheritedSuffix `boolean`: Whether this entity should override the inherited click-through URL suffix with its own defined value.

### CompanionClickThroughOverride
* CompanionClickThroughOverride `object`: Companion Click-through override.
  * clickThroughUrl [ClickThroughUrl](#clickthroughurl)
  * creativeId `string`: ID of the creative for this companion click-through override.

### CompanionSetting
* CompanionSetting `object`: Companion Settings
  * companionsDisabled `boolean`: Whether companions are disabled for this placement.
  * enabledSizes `array`: Allowlist of companion sizes to be served to this placement. Set this list to null or empty to serve all companion sizes.
    * items [Size](#size)
  * imageOnly `boolean`: Whether to serve only static images as companions.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#companionSetting".

### CompatibleFields
* CompatibleFields `object`: Represents a response to the queryCompatibleFields method.
  * crossDimensionReachReportCompatibleFields [CrossDimensionReachReportCompatibleFields](#crossdimensionreachreportcompatiblefields)
  * floodlightReportCompatibleFields [FloodlightReportCompatibleFields](#floodlightreportcompatiblefields)
  * kind `string`: The kind of resource this is, in this case dfareporting#compatibleFields.
  * pathAttributionReportCompatibleFields [PathReportCompatibleFields](#pathreportcompatiblefields)
  * pathReportCompatibleFields [PathReportCompatibleFields](#pathreportcompatiblefields)
  * pathToConversionReportCompatibleFields [PathToConversionReportCompatibleFields](#pathtoconversionreportcompatiblefields)
  * reachReportCompatibleFields [ReachReportCompatibleFields](#reachreportcompatiblefields)
  * reportCompatibleFields [ReportCompatibleFields](#reportcompatiblefields)

### ConnectionType
* ConnectionType `object`: Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type to target mobile vs. broadband users.
  * id `string`: ID of this connection type.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionType".
  * name `string`: Name of this connection type.

### ConnectionTypesListResponse
* ConnectionTypesListResponse `object`: Connection Type List Response
  * connectionTypes `array`: Collection of connection types such as broadband and mobile.
    * items [ConnectionType](#connectiontype)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionTypesListResponse".

### ContentCategoriesListResponse
* ContentCategoriesListResponse `object`: Content Category List Response
  * contentCategories `array`: Content category collection.
    * items [ContentCategory](#contentcategory)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategoriesListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### ContentCategory
* ContentCategory `object`: Organizes placements according to the contents of their associated webpages.
  * accountId `string`: Account ID of this content category. This is a read-only field that can be left blank.
  * id `string`: ID of this content category. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategory".
  * name `string`: Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same account.

### Conversion
* Conversion `object`: A Conversion represents when a user successfully performs a desired action after seeing an ad.
  * childDirectedTreatment `boolean`: Whether this particular request may come from a user under the age of 13, under COPPA compliance.
  * customVariables `array`: Custom floodlight variables.
    * items [CustomFloodlightVariable](#customfloodlightvariable)
  * dclid `string`: The display click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId and gclid. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid is a required field.
  * encryptedUserId `string`: The alphanumeric encrypted user ID. When set, encryptionInfo should also be specified. This field is mutually exclusive with encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid and dclid. This or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid or dclid is a required field.
  * encryptedUserIdCandidates `array`: A list of the alphanumeric encrypted user IDs. Any user ID with exposure prior to the conversion timestamp will be used in the inserted conversion. If no such user ID is found then the conversion will be rejected with INVALID_ARGUMENT error. When set, encryptionInfo should also be specified. This field may only be used when calling batchinsert; it is not supported by batchupdate. This field is mutually exclusive with encryptedUserId, matchId, mobileDeviceId, gclid and dclid. This or encryptedUserId or matchId or mobileDeviceId or gclid or dclid is a required field.
    * items `string`
  * floodlightActivityId `string`: Floodlight Activity ID of this conversion. This is a required field.
  * floodlightConfigurationId `string`: Floodlight Configuration ID of this conversion. This is a required field.
  * gclid `string`: The Google click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId and dclid. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or dclid is a required field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversion".
  * limitAdTracking `boolean`: Whether Limit Ad Tracking is enabled. When set to true, the conversion will be used for reporting but not targeting. This will prevent remarketing.
  * matchId `string`: The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[],mobileDeviceId, gclid and dclid. This or encryptedUserId or encryptedUserIdCandidates[] or mobileDeviceId or gclid or dclid is a required field.
  * mobileDeviceId `string`: The mobile device ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, gclid and dclid. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or gclid or dclid is a required field.
  * nonPersonalizedAd `boolean`: Whether the conversion was for a non personalized ad.
  * ordinal `string`: The ordinal of the conversion. Use this field to control how conversions of the same user and day are de-duplicated. This is a required field.
  * quantity `string`: The quantity of the conversion.
  * timestampMicros `string`: The timestamp of conversion, in Unix epoch micros. This is a required field.
  * treatmentForUnderage `boolean`: Whether this particular request may come from a user under the age of 16 (may differ by country), under compliance with the European Union's General Data Protection Regulation (GDPR).
  * value `number`: The value of the conversion.

### ConversionError
* ConversionError `object`: The error code and description for a conversion that failed to insert or update.
  * code `string` (values: INVALID_ARGUMENT, INTERNAL, PERMISSION_DENIED, NOT_FOUND): The error code.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionError".
  * message `string`: A description of the error.

### ConversionStatus
* ConversionStatus `object`: The original conversion that was inserted or updated and whether there were any errors.
  * conversion [Conversion](#conversion)
  * errors `array`: A list of errors related to this conversion.
    * items [ConversionError](#conversionerror)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionStatus".

### ConversionsBatchInsertRequest
* ConversionsBatchInsertRequest `object`: Insert Conversions Request.
  * conversions `array`: The set of conversions to insert.
    * items [Conversion](#conversion)
  * encryptionInfo [EncryptionInfo](#encryptioninfo)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertRequest".

### ConversionsBatchInsertResponse
* ConversionsBatchInsertResponse `object`: Insert Conversions Response.
  * hasFailures `boolean`: Indicates that some or all conversions failed to insert.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertResponse".
  * status `array`: The insert status of each conversion. Statuses are returned in the same order that conversions are inserted.
    * items [ConversionStatus](#conversionstatus)

### ConversionsBatchUpdateRequest
* ConversionsBatchUpdateRequest `object`: Update Conversions Request.
  * conversions `array`: The set of conversions to update.
    * items [Conversion](#conversion)
  * encryptionInfo [EncryptionInfo](#encryptioninfo)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateRequest".

### ConversionsBatchUpdateResponse
* ConversionsBatchUpdateResponse `object`: Update Conversions Response.
  * hasFailures `boolean`: Indicates that some or all conversions failed to update.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateResponse".
  * status `array`: The update status of each conversion. Statuses are returned in the same order that conversions are updated.
    * items [ConversionStatus](#conversionstatus)

### CountriesListResponse
* CountriesListResponse `object`: Country List Response
  * countries `array`: Country collection.
    * items [Country](#country)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#countriesListResponse".

### Country
* Country `object`: Contains information about a country that can be targeted by ads.
  * countryCode `string`: Country code.
  * dartId `string`: DART ID of this country. This is the ID used for targeting and generating reports.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#country".
  * name `string`: Name of this country.
  * sslEnabled `boolean`: Whether ad serving supports secure servers in this country.

### Creative
* Creative `object`: Contains properties of a Creative.
  * accountId `string`: Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types.
  * active `boolean`: Whether the creative is active. Applicable to all creative types.
  * adParameters `string`: Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID.
  * adTagKeys `array`: Keywords for a Rich Media creative. Keywords let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use keywords to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
    * items `string`
  * additionalSizes `array`: Additional sizes associated with a responsive creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. Applicable to DISPLAY creatives when the primary asset type is HTML_IMAGE.
    * items [Size](#size)
  * advertiserId `string`: Advertiser ID of this creative. This is a required field. Applicable to all creative types.
  * allowScriptAccess `boolean`: Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be set to true on update. Applicable to the following creative types: FLASH_INPAGE.
  * archived `boolean`: Whether the creative is archived. Applicable to all creative types.
  * artworkType `string` (values: ARTWORK_TYPE_FLASH, ARTWORK_TYPE_HTML5, ARTWORK_TYPE_MIXED, ARTWORK_TYPE_IMAGE): Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
  * authoringSource `string` (values: CREATIVE_AUTHORING_SOURCE_DCM, CREATIVE_AUTHORING_SOURCE_DBM, CREATIVE_AUTHORING_SOURCE_STUDIO, CREATIVE_AUTHORING_SOURCE_GWD): Source application where creative was authored. Presently, only DBM authored creatives will have this field set. Applicable to all creative types.
  * authoringTool `string` (values: NINJA, SWIFFY): Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
  * autoAdvanceImages `boolean`: Whether images are automatically advanced for image gallery creatives. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY.
  * backgroundColor `string`: The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is displayed. Default is white. Applicable to the following creative types: FLASH_INPAGE.
  * backupImageClickThroughUrl [CreativeClickThroughUrl](#creativeclickthroughurl)
  * backupImageFeatures `array`: List of feature dependencies that will cause a backup image to be served if the browser that serves the ad does not support them. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative asset correctly. This field is initially auto-generated to contain all features detected by Campaign Manager for all the assets of this creative and can then be modified by the client. To reset this field, copy over all the creativeAssets' detected features. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
    * items `string` (values: CSS_FONT_FACE, CSS_BACKGROUND_SIZE, CSS_BORDER_IMAGE, CSS_BORDER_RADIUS, CSS_BOX_SHADOW, CSS_FLEX_BOX, CSS_HSLA, CSS_MULTIPLE_BGS, CSS_OPACITY, CSS_RGBA, CSS_TEXT_SHADOW, CSS_ANIMATIONS, CSS_COLUMNS, CSS_GENERATED_CONTENT, CSS_GRADIENTS, CSS_REFLECTIONS, CSS_TRANSFORMS, CSS_TRANSFORMS3D, CSS_TRANSITIONS, APPLICATION_CACHE, CANVAS, CANVAS_TEXT, DRAG_AND_DROP, HASH_CHANGE, HISTORY, AUDIO, VIDEO, INDEXED_DB, INPUT_ATTR_AUTOCOMPLETE, INPUT_ATTR_AUTOFOCUS, INPUT_ATTR_LIST, INPUT_ATTR_PLACEHOLDER, INPUT_ATTR_MAX, INPUT_ATTR_MIN, INPUT_ATTR_MULTIPLE, INPUT_ATTR_PATTERN, INPUT_ATTR_REQUIRED, INPUT_ATTR_STEP, INPUT_TYPE_SEARCH, INPUT_TYPE_TEL, INPUT_TYPE_URL, INPUT_TYPE_EMAIL, INPUT_TYPE_DATETIME, INPUT_TYPE_DATE, INPUT_TYPE_MONTH, INPUT_TYPE_WEEK, INPUT_TYPE_TIME, INPUT_TYPE_DATETIME_LOCAL, INPUT_TYPE_NUMBER, INPUT_TYPE_RANGE, INPUT_TYPE_COLOR, LOCAL_STORAGE, POST_MESSAGE, SESSION_STORAGE, WEB_SOCKETS, WEB_SQL_DATABASE, WEB_WORKERS, GEO_LOCATION, INLINE_SVG, SMIL, SVG_HREF, SVG_CLIP_PATHS, TOUCH, WEBGL, SVG_FILTERS, SVG_FE_IMAGE)
  * backupImageReportingLabel `string`: Reporting label used for HTML5 banner backup image. Applicable to the following creative types: DISPLAY when the primary asset type is not HTML_IMAGE.
  * backupImageTargetWindow [TargetWindow](#targetwindow)
  * clickTags `array`: Click tags of the creative. For DISPLAY, FLASH_INPAGE, and HTML5_BANNER creatives, this is a subset of detected click tags for the assets associated with this creative. After creating a flash asset, detected click tags will be returned in the creativeAssetMetadata. When inserting the creative, populate the creative clickTags field using the creativeAssetMetadata.clickTags field. For DISPLAY_IMAGE_GALLERY creatives, there should be exactly one entry in this list for each image creative asset. A click tag is matched with a corresponding creative asset by matching the clickTag.name field with the creativeAsset.assetIdentifier.name field. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
    * items [ClickTag](#clicktag)
  * commercialId `string`: Industry standard ID assigned to creative for reach and frequency. Applicable to INSTREAM_VIDEO_REDIRECT creatives.
  * companionCreatives `array`: List of companion creatives assigned to an in-Stream video creative. Acceptable values include IDs of existing flash and image creatives. Applicable to the following creative types: all VPAID, all INSTREAM_AUDIO and all INSTREAM_VIDEO with dynamicAssetSelection set to false.
    * items `string`
  * compatibility `array`: Compatibilities associated with this creative. This is a read-only field. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. Only pre-existing creatives may have these compatibilities since new creatives will either be assigned DISPLAY or DISPLAY_INTERSTITIAL instead. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. IN_STREAM_AUDIO refers to rendering in in-stream audio ads developed with the VAST standard. Applicable to all creative types. Acceptable values are: - "APP" - "APP_INTERSTITIAL" - "IN_STREAM_VIDEO" - "IN_STREAM_AUDIO" - "DISPLAY" - "DISPLAY_INTERSTITIAL" 
    * items `string` (values: DISPLAY, DISPLAY_INTERSTITIAL, APP, APP_INTERSTITIAL, IN_STREAM_VIDEO, IN_STREAM_AUDIO)
  * convertFlashToHtml5 `boolean`: Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by default and users can choose to disable it if they don't want the system to generate and use HTML5 asset for this creative. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
  * counterCustomEvents `array`: List of counter events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID.
    * items [CreativeCustomEvent](#creativecustomevent)
  * creativeAssetSelection [CreativeAssetSelection](#creativeassetselection)
  * creativeAssets `array`: Assets associated with a creative. Applicable to all but the following creative types: INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and REDIRECT
    * items [CreativeAsset](#creativeasset)
  * creativeFieldAssignments `array`: Creative field assignments for this creative. Applicable to all creative types.
    * items [CreativeFieldAssignment](#creativefieldassignment)
  * customKeyValues `array`: Custom key-values for a Rich Media creative. Key-values let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use key-values to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
    * items `string`
  * dynamicAssetSelection `boolean`: Set this to true to enable the use of rules to target individual assets in this creative. When set to true creativeAssetSelection must be set. This also controls asset-level companions. When this is true, companion creatives should be assigned to creative assets. Learn more. Applicable to INSTREAM_VIDEO creatives.
  * exitCustomEvents `array`: List of exit events configured for the creative. For DISPLAY and DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags, For DISPLAY, an event is also created from the backupImageReportingLabel. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
    * items [CreativeCustomEvent](#creativecustomevent)
  * fsCommand [FsCommand](#fscommand)
  * htmlCode `string`: HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is true. Applicable to the following creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA.
  * htmlCodeLocked `boolean`: Whether HTML code is generated by Campaign Manager or manually entered. Set to true to ignore changes to htmlCode. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER.
  * id `string`: ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#creative".
  * lastModifiedInfo [LastModifiedInfo](#lastmodifiedinfo)
  * latestTraffickedCreativeId `string`: Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
  * mediaDescription `string`: Description of the audio or video ad. Applicable to the following creative types: all INSTREAM_VIDEO, INSTREAM_AUDIO, and all VPAID.
  * mediaDuration `number`: Creative audio or video duration in seconds. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO, INSTREAM_AUDIO, all RICH_MEDIA, and all VPAID.
  * name `string`: Name of the creative. This is a required field and must be less than 256 characters long. Applicable to all creative types.
  * obaIcon [ObaIcon](#obaicon)
  * overrideCss `string`: Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA.
  * progressOffset [VideoOffset](#videooffset)
  * redirectUrl `string`: URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video redirect URL. The standard for a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST 2.0 or 3.0 call. This is a required field when applicable. Applicable to the following creative types: DISPLAY_REDIRECT, INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO_REDIRECT
  * renderingId `string`: ID of current rendering version. This is a read-only field. Applicable to all creative types.
  * renderingIdDimensionValue [DimensionValue](#dimensionvalue)
  * requiredFlashPluginVersion `string`: The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
  * requiredFlashVersion `integer`: The internal Flash version for this creative as calculated by Studio. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
  * size [Size](#size)
  * skipOffset [VideoOffset](#videooffset)
  * skippable `boolean`: Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID.
  * sslCompliant `boolean`: Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types.
  * sslOverride `boolean`: Whether creative should be treated as SSL compliant even if the system scan shows it's not. Applicable to all creative types.
  * studioAdvertiserId `string`: Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
  * studioCreativeId `string`: Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
  * studioTraffickedCreativeId `string`: Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
  * subaccountId `string`: Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types.
  * thirdPartyBackupImageImpressionsUrl `string`: Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA.
  * thirdPartyRichMediaImpressionsUrl `string`: Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA.
  * thirdPartyUrls `array`: Third-party URLs for tracking in-stream creative events. Applicable to the following creative types: all INSTREAM_VIDEO, all INSTREAM_AUDIO, and all VPAID.
    * items [ThirdPartyTrackingUrl](#thirdpartytrackingurl)
  * timerCustomEvents `array`: List of timer events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset is not HTML_IMAGE.
    * items [CreativeCustomEvent](#creativecustomevent)
  * totalFileSize `string`: Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.
  * type `string` (values: IMAGE, DISPLAY_REDIRECT, CUSTOM_DISPLAY, INTERNAL_REDIRECT, CUSTOM_DISPLAY_INTERSTITIAL, INTERSTITIAL_INTERNAL_REDIRECT, TRACKING_TEXT, RICH_MEDIA_DISPLAY_BANNER, RICH_MEDIA_INPAGE_FLOATING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_DISPLAY_INTERSTITIAL, RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL, RICH_MEDIA_MOBILE_IN_APP, FLASH_INPAGE, INSTREAM_VIDEO, VPAID_LINEAR_VIDEO, VPAID_NON_LINEAR_VIDEO, INSTREAM_VIDEO_REDIRECT, RICH_MEDIA_PEEL_DOWN, HTML5_BANNER, DISPLAY, DISPLAY_IMAGE_GALLERY, BRAND_SAFE_DEFAULT_INSTREAM_VIDEO, INSTREAM_AUDIO): Type of this creative. This is a required field. Applicable to all creative types. *Note:* FLASH_INPAGE, HTML5_BANNER, and IMAGE are only used for existing creatives. New creatives should use DISPLAY as a replacement for these types.
  * universalAdId [UniversalAdId](#universaladid)
  * version `integer`: The version number helps you keep track of multiple versions of your creative in your reports. The version number will always be auto-generated during insert operations to start at 1. For tracking creatives the version cannot be incremented and will always remain at 1. For all other creative types the version can be incremented only by 1 during update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich Media creative merging. Applicable to all creative types.

### CreativeAsset
* CreativeAsset `object`: Creative Asset.
  * actionScript3 `boolean`: Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
  * active `boolean`: Whether the video or audio asset is active. This is a read-only field for VPAID_NON_LINEAR_VIDEO assets. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
  * additionalSizes `array`: Additional sizes associated with this creative asset. HTML5 asset generated by compatible software such as GWD will be able to support more sizes this creative asset can render.
    * items [Size](#size)
  * alignment `string` (values: ALIGNMENT_TOP, ALIGNMENT_RIGHT, ALIGNMENT_BOTTOM, ALIGNMENT_LEFT): Possible alignments for an asset. This is a read-only field. Applicable to the following creative types: RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL .
  * artworkType `string` (values: ARTWORK_TYPE_FLASH, ARTWORK_TYPE_HTML5, ARTWORK_TYPE_MIXED, ARTWORK_TYPE_IMAGE): Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
  * assetIdentifier [CreativeAssetId](#creativeassetid)
  * audioBitRate `integer`: Audio stream bit rate in kbps. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
  * audioSampleRate `integer`: Audio sample bit rate in hertz. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
  * backupImageExit [CreativeCustomEvent](#creativecustomevent)
  * bitRate `integer`: Detected bit-rate for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
  * childAssetType `string` (values: CHILD_ASSET_TYPE_FLASH, CHILD_ASSET_TYPE_VIDEO, CHILD_ASSET_TYPE_IMAGE, CHILD_ASSET_TYPE_DATA): Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID.
  * collapsedSize [Size](#size)
  * companionCreativeIds `array`: List of companion creatives assigned to an in-stream video creative asset. Acceptable values include IDs of existing flash and image creatives. Applicable to INSTREAM_VIDEO creative type with dynamicAssetSelection set to true.
    * items `string`
  * customStartTimeValue `integer`: Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA. Value must be greater than or equal to 0.
  * detectedFeatures `array`: List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
    * items `string` (values: CSS_FONT_FACE, CSS_BACKGROUND_SIZE, CSS_BORDER_IMAGE, CSS_BORDER_RADIUS, CSS_BOX_SHADOW, CSS_FLEX_BOX, CSS_HSLA, CSS_MULTIPLE_BGS, CSS_OPACITY, CSS_RGBA, CSS_TEXT_SHADOW, CSS_ANIMATIONS, CSS_COLUMNS, CSS_GENERATED_CONTENT, CSS_GRADIENTS, CSS_REFLECTIONS, CSS_TRANSFORMS, CSS_TRANSFORMS3D, CSS_TRANSITIONS, APPLICATION_CACHE, CANVAS, CANVAS_TEXT, DRAG_AND_DROP, HASH_CHANGE, HISTORY, AUDIO, VIDEO, INDEXED_DB, INPUT_ATTR_AUTOCOMPLETE, INPUT_ATTR_AUTOFOCUS, INPUT_ATTR_LIST, INPUT_ATTR_PLACEHOLDER, INPUT_ATTR_MAX, INPUT_ATTR_MIN, INPUT_ATTR_MULTIPLE, INPUT_ATTR_PATTERN, INPUT_ATTR_REQUIRED, INPUT_ATTR_STEP, INPUT_TYPE_SEARCH, INPUT_TYPE_TEL, INPUT_TYPE_URL, INPUT_TYPE_EMAIL, INPUT_TYPE_DATETIME, INPUT_TYPE_DATE, INPUT_TYPE_MONTH, INPUT_TYPE_WEEK, INPUT_TYPE_TIME, INPUT_TYPE_DATETIME_LOCAL, INPUT_TYPE_NUMBER, INPUT_TYPE_RANGE, INPUT_TYPE_COLOR, LOCAL_STORAGE, POST_MESSAGE, SESSION_STORAGE, WEB_SOCKETS, WEB_SQL_DATABASE, WEB_WORKERS, GEO_LOCATION, INLINE_SVG, SMIL, SVG_HREF, SVG_CLIP_PATHS, TOUCH, WEBGL, SVG_FILTERS, SVG_FE_IMAGE)
  * displayType `string` (values: ASSET_DISPLAY_TYPE_INPAGE, ASSET_DISPLAY_TYPE_FLOATING, ASSET_DISPLAY_TYPE_OVERLAY, ASSET_DISPLAY_TYPE_EXPANDING, ASSET_DISPLAY_TYPE_FLASH_IN_FLASH, ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING, ASSET_DISPLAY_TYPE_PEEL_DOWN, ASSET_DISPLAY_TYPE_VPAID_LINEAR, ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR, ASSET_DISPLAY_TYPE_BACKDROP): Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
  * duration `integer`: Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID_LINEAR_VIDEO. Value must be greater than or equal to 1.
  * durationType `string` (values: ASSET_DURATION_TYPE_AUTO, ASSET_DURATION_TYPE_NONE, ASSET_DURATION_TYPE_CUSTOM): Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA.
  * expandedDimension [Size](#size)
  * fileSize `string`: File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
  * flashVersion `integer`: Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.
  * frameRate `number`: Video frame rate for video asset in frames per second. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
  * hideFlashObjects `boolean`: Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
  * hideSelectionBoxes `boolean`: Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA.
  * horizontallyLocked `boolean`: Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
  * id `string`: Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * mediaDuration `number`: Detected duration for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
  * mimeType `string`: Detected MIME type for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.
  * offset [OffsetPosition](#offsetposition)
  * orientation `string` (values: LANDSCAPE, PORTRAIT, SQUARE): Orientation of video asset. This is a read-only, auto-generated field.
  * originalBackup `boolean`: Whether the backup asset is original or changed by the user in Campaign Manager. Applicable to the following creative types: all RICH_MEDIA.
  * politeLoad `boolean`: Whether this asset is used as a polite load asset.
  * position [OffsetPosition](#offsetposition)
  * positionLeftUnit `string` (values: OFFSET_UNIT_PIXEL, OFFSET_UNIT_PERCENT, OFFSET_UNIT_PIXEL_FROM_CENTER): Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
  * positionTopUnit `string` (values: OFFSET_UNIT_PIXEL, OFFSET_UNIT_PERCENT, OFFSET_UNIT_PIXEL_FROM_CENTER): Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative types: all RICH_MEDIA.
  * progressiveServingUrl `string`: Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
  * pushdown `boolean`: Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable when the asset offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height.
  * pushdownDuration `number`: Pushdown duration in seconds for an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable when the asset pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. Acceptable values are 0 to 9.99, inclusive.
  * role `string` (values: PRIMARY, BACKUP_IMAGE, ADDITIONAL_IMAGE, ADDITIONAL_FLASH, PARENT_VIDEO, TRANSCODED_VIDEO, OTHER, ALTERNATE_VIDEO, PARENT_AUDIO, TRANSCODED_AUDIO): Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. This is a required field. PRIMARY applies to DISPLAY, FLASH_INPAGE, HTML5_BANNER, IMAGE, DISPLAY_IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and all VPAID creatives. BACKUP_IMAGE applies to FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives. OTHER refers to assets from sources other than Campaign Manager, such as Studio uploaded assets, applicable to all RICH_MEDIA and all VPAID creatives. PARENT_VIDEO refers to videos uploaded by the user in Campaign Manager and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. TRANSCODED_VIDEO refers to videos transcoded by Campaign Manager from PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. ALTERNATE_VIDEO refers to the Campaign Manager representation of child asset videos from Studio, and is applicable to VPAID_LINEAR_VIDEO creatives. These cannot be added or removed within Campaign Manager. For VPAID_LINEAR_VIDEO creatives, PARENT_VIDEO, TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID creative cannot be served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR_VIDEO creative. PARENT_AUDIO refers to audios uploaded by the user in Campaign Manager and is applicable to INSTREAM_AUDIO creatives. TRANSCODED_AUDIO refers to audios transcoded by Campaign Manager from PARENT_AUDIO assets and is applicable to INSTREAM_AUDIO creatives. 
  * size [Size](#size)
  * sslCompliant `boolean`: Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.
  * startTimeType `string` (values: ASSET_START_TIME_TYPE_NONE, ASSET_START_TIME_TYPE_CUSTOM): Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA.
  * streamingServingUrl `string`: Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.
  * transparency `boolean`: Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable to HTML5 assets.
  * verticallyLocked `boolean`: Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.
  * windowMode `string` (values: OPAQUE, WINDOW, TRANSPARENT): Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING.
  * zIndex `integer`: zIndex value of an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to assets whose displayType is NOT one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY. Acceptable values are -999999999 to 999999999, inclusive.
  * zipFilename `string`: File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.
  * zipFilesize `string`: Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.

### CreativeAssetId
* CreativeAssetId `object`: Creative Asset ID.
  * name `string`: Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed.
  * type `string` (values: IMAGE, FLASH, VIDEO, HTML, HTML_IMAGE, AUDIO): Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE.

### CreativeAssetMetadata
* CreativeAssetMetadata `object`: CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative.
  * assetIdentifier [CreativeAssetId](#creativeassetid)
  * clickTags `array`: List of detected click tags for assets. This is a read-only, auto-generated field. This field is empty for a rich media asset.
    * items [ClickTag](#clicktag)
  * counterCustomEvents `array`: List of counter events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset.
    * items [CreativeCustomEvent](#creativecustomevent)
  * detectedFeatures `array`: List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field.
    * items `string` (values: CSS_FONT_FACE, CSS_BACKGROUND_SIZE, CSS_BORDER_IMAGE, CSS_BORDER_RADIUS, CSS_BOX_SHADOW, CSS_FLEX_BOX, CSS_HSLA, CSS_MULTIPLE_BGS, CSS_OPACITY, CSS_RGBA, CSS_TEXT_SHADOW, CSS_ANIMATIONS, CSS_COLUMNS, CSS_GENERATED_CONTENT, CSS_GRADIENTS, CSS_REFLECTIONS, CSS_TRANSFORMS, CSS_TRANSFORMS3D, CSS_TRANSITIONS, APPLICATION_CACHE, CANVAS, CANVAS_TEXT, DRAG_AND_DROP, HASH_CHANGE, HISTORY, AUDIO, VIDEO, INDEXED_DB, INPUT_ATTR_AUTOCOMPLETE, INPUT_ATTR_AUTOFOCUS, INPUT_ATTR_LIST, INPUT_ATTR_PLACEHOLDER, INPUT_ATTR_MAX, INPUT_ATTR_MIN, INPUT_ATTR_MULTIPLE, INPUT_ATTR_PATTERN, INPUT_ATTR_REQUIRED, INPUT_ATTR_STEP, INPUT_TYPE_SEARCH, INPUT_TYPE_TEL, INPUT_TYPE_URL, INPUT_TYPE_EMAIL, INPUT_TYPE_DATETIME, INPUT_TYPE_DATE, INPUT_TYPE_MONTH, INPUT_TYPE_WEEK, INPUT_TYPE_TIME, INPUT_TYPE_DATETIME_LOCAL, INPUT_TYPE_NUMBER, INPUT_TYPE_RANGE, INPUT_TYPE_COLOR, LOCAL_STORAGE, POST_MESSAGE, SESSION_STORAGE, WEB_SOCKETS, WEB_SQL_DATABASE, WEB_WORKERS, GEO_LOCATION, INLINE_SVG, SMIL, SVG_HREF, SVG_CLIP_PATHS, TOUCH, WEBGL, SVG_FILTERS, SVG_FE_IMAGE)
  * exitCustomEvents `array`: List of exit events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset.
    * items [CreativeCustomEvent](#creativecustomevent)
  * id `string`: Numeric ID of the asset. This is a read-only, auto-generated field.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata".
  * richMedia `boolean`: True if the uploaded asset is a rich media asset. This is a read-only, auto-generated field.
  * timerCustomEvents `array`: List of timer events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset.
    * items [CreativeCustomEvent](#creativecustomevent)
  * warnedValidationRules `array`: Rules validated during code generation that generated a warning. This is a read-only, auto-generated field. Possible values are: - "ADMOB_REFERENCED" - "ASSET_FORMAT_UNSUPPORTED_DCM" - "ASSET_INVALID" - "CLICK_TAG_HARD_CODED" - "CLICK_TAG_INVALID" - "CLICK_TAG_IN_GWD" - "CLICK_TAG_MISSING" - "CLICK_TAG_MORE_THAN_ONE" - "CLICK_TAG_NON_TOP_LEVEL" - "COMPONENT_UNSUPPORTED_DCM" - "ENABLER_UNSUPPORTED_METHOD_DCM" - "EXTERNAL_FILE_REFERENCED" - "FILE_DETAIL_EMPTY" - "FILE_TYPE_INVALID" - "GWD_PROPERTIES_INVALID" - "HTML5_FEATURE_UNSUPPORTED" - "LINKED_FILE_NOT_FOUND" - "MAX_FLASH_VERSION_11" - "MRAID_REFERENCED" - "NOT_SSL_COMPLIANT" - "ORPHANED_ASSET" - "PRIMARY_HTML_MISSING" - "SVG_INVALID" - "ZIP_INVALID" 
    * items `string` (values: CLICK_TAG_NON_TOP_LEVEL, CLICK_TAG_MISSING, CLICK_TAG_MORE_THAN_ONE, CLICK_TAG_INVALID, ORPHANED_ASSET, PRIMARY_HTML_MISSING, EXTERNAL_FILE_REFERENCED, MRAID_REFERENCED, ADMOB_REFERENCED, FILE_TYPE_INVALID, ZIP_INVALID, LINKED_FILE_NOT_FOUND, MAX_FLASH_VERSION_11, NOT_SSL_COMPLIANT, FILE_DETAIL_EMPTY, ASSET_INVALID, GWD_PROPERTIES_INVALID, ENABLER_UNSUPPORTED_METHOD_DCM, ASSET_FORMAT_UNSUPPORTED_DCM, COMPONENT_UNSUPPORTED_DCM, HTML5_FEATURE_UNSUPPORTED, CLICK_TAG_IN_GWD, CLICK_TAG_HARD_CODED, SVG_INVALID)

### CreativeAssetSelection
* CreativeAssetSelection `object`: Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives.
  * defaultAssetId `string`: A creativeAssets[].id. This should refer to one of the parent assets in this creative, and will be served if none of the rules match. This is a required field.
  * rules `array`: Rules determine which asset will be served to a viewer. Rules will be evaluated in the order in which they are stored in this list. This list must contain at least one rule. Applicable to INSTREAM_VIDEO creatives.
    * items [Rule](#rule)

### CreativeAssignment
* CreativeAssignment `object`: Creative Assignment.
  * active `boolean`: Whether this creative assignment is active. When true, the creative will be included in the ad's rotation.
  * applyEventTags `boolean`: Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO.
  * clickThroughUrl [ClickThroughUrl](#clickthroughurl)
  * companionCreativeOverrides `array`: Companion creative overrides for this creative assignment. Applicable to video ads.
    * items [CompanionClickThroughOverride](#companionclickthroughoverride)
  * creativeGroupAssignments `array`: Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a maximum of two assignments.
    * items [CreativeGroupAssignment](#creativegroupassignment)
  * creativeId `string`: ID of the creative to be assigned. This is a required field.
  * creativeIdDimensionValue [DimensionValue](#dimensionvalue)
  * endTime `string`
  * richMediaExitOverrides `array`: Rich media exit overrides for this creative assignment. Applicable when the creative type is any of the following: - DISPLAY - RICH_MEDIA_INPAGE - RICH_MEDIA_INPAGE_FLOATING - RICH_MEDIA_IM_EXPAND - RICH_MEDIA_EXPANDING - RICH_MEDIA_INTERSTITIAL_FLOAT - RICH_MEDIA_MOBILE_IN_APP - RICH_MEDIA_MULTI_FLOATING - RICH_MEDIA_PEEL_DOWN - VPAID_LINEAR - VPAID_NON_LINEAR 
    * items [RichMediaExitOverride](#richmediaexitoverride)
  * sequence `integer`: Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL. Acceptable values are 1 to 65535, inclusive.
  * sslCompliant `boolean`: Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.
  * startTime `string`
  * weight `integer`: Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be greater than or equal to 1.

### CreativeClickThroughUrl
* CreativeClickThroughUrl `object`: Click-through URL
  * computedClickThroughUrl `string`: Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field. 
  * customClickThroughUrl `string`: Custom click-through URL. Applicable if the landingPageId field is left unset.
  * landingPageId `string`: ID of the landing page for the click-through URL.

### CreativeCustomEvent
* CreativeCustomEvent `object`: Creative Custom Event.
  * advertiserCustomEventId `string`: Unique ID of this event used by Reporting and Data Transfer. This is a read-only field.
  * advertiserCustomEventName `string`: User-entered name for the event.
  * advertiserCustomEventType `string` (values: ADVERTISER_EVENT_TIMER, ADVERTISER_EVENT_EXIT, ADVERTISER_EVENT_COUNTER): Type of the event. This is a read-only field.
  * artworkLabel `string`: Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion.
  * artworkType `string` (values: ARTWORK_TYPE_FLASH, ARTWORK_TYPE_HTML5, ARTWORK_TYPE_MIXED, ARTWORK_TYPE_IMAGE): Artwork type used by the creative.This is a read-only field.
  * exitClickThroughUrl [CreativeClickThroughUrl](#creativeclickthroughurl)
  * id `string`: ID of this event. This is a required field and should not be modified after insertion.
  * popupWindowProperties [PopupWindowProperties](#popupwindowproperties)
  * targetType `string` (values: TARGET_BLANK, TARGET_TOP, TARGET_SELF, TARGET_PARENT, TARGET_POPUP): Target type used by the event.
  * videoReportingId `string`: Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field.

### CreativeField
* CreativeField `object`: Contains properties of a creative field.
  * accountId `string`: Account ID of this creative field. This is a read-only field that can be left blank.
  * advertiserId `string`: Advertiser ID of this creative field. This is a required field on insertion.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * id `string`: ID of this creative field. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeField".
  * name `string`: Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same advertiser.
  * subaccountId `string`: Subaccount ID of this creative field. This is a read-only field that can be left blank.

### CreativeFieldAssignment
* CreativeFieldAssignment `object`: Creative Field Assignment.
  * creativeFieldId `string`: ID of the creative field.
  * creativeFieldValueId `string`: ID of the creative field value.

### CreativeFieldValue
* CreativeFieldValue `object`: Contains properties of a creative field value.
  * id `string`: ID of this creative field value. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValue".
  * value `string`: Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field.

### CreativeFieldValuesListResponse
* CreativeFieldValuesListResponse `object`: Creative Field Value List Response
  * creativeFieldValues `array`: Creative field value collection.
    * items [CreativeFieldValue](#creativefieldvalue)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValuesListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### CreativeFieldsListResponse
* CreativeFieldsListResponse `object`: Creative Field List Response
  * creativeFields `array`: Creative field collection.
    * items [CreativeField](#creativefield)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### CreativeGroup
* CreativeGroup `object`: Contains properties of a creative group.
  * accountId `string`: Account ID of this creative group. This is a read-only field that can be left blank.
  * advertiserId `string`: Advertiser ID of this creative group. This is a required field on insertion.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * groupNumber `integer`: Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily. This field is required on insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive.
  * id `string`: ID of this creative group. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroup".
  * name `string`: Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same advertiser.
  * subaccountId `string`: Subaccount ID of this creative group. This is a read-only field that can be left blank.

### CreativeGroupAssignment
* CreativeGroupAssignment `object`: Creative Group Assignment.
  * creativeGroupId `string`: ID of the creative group to be assigned.
  * creativeGroupNumber `string` (values: CREATIVE_GROUP_ONE, CREATIVE_GROUP_TWO): Creative group number of the creative group assignment.

### CreativeGroupsListResponse
* CreativeGroupsListResponse `object`: Creative Group List Response
  * creativeGroups `array`: Creative group collection.
    * items [CreativeGroup](#creativegroup)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroupsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### CreativeOptimizationConfiguration
* CreativeOptimizationConfiguration `object`: Creative optimization settings.
  * id `string`: ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns.
  * name `string`: Name of this creative optimization config. This is a required field and must be less than 129 characters long.
  * optimizationActivitys `array`: List of optimization activities associated with this configuration.
    * items [OptimizationActivity](#optimizationactivity)
  * optimizationModel `string` (values: CLICK, POST_CLICK, POST_IMPRESSION, POST_CLICK_AND_IMPRESSION, VIDEO_COMPLETION): Optimization model for this configuration.

### CreativeRotation
* CreativeRotation `object`: Creative Rotation.
  * creativeAssignments `array`: Creative assignments in this creative rotation.
    * items [CreativeAssignment](#creativeassignment)
  * creativeOptimizationConfigurationId `string`: Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad's campaign. If it is unset or set to 0, then the campaign's default optimization configuration will be used for this ad.
  * type `string` (values: CREATIVE_ROTATION_TYPE_SEQUENTIAL, CREATIVE_ROTATION_TYPE_RANDOM): Type of creative rotation. Can be used to specify whether to use sequential or random rotation.
  * weightCalculationStrategy `string` (values: WEIGHT_STRATEGY_EQUAL, WEIGHT_STRATEGY_CUSTOM, WEIGHT_STRATEGY_HIGHEST_CTR, WEIGHT_STRATEGY_OPTIMIZED): Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM.

### CreativesListResponse
* CreativesListResponse `object`: Creative List Response
  * creatives `array`: Creative collection.
    * items [Creative](#creative)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativesListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### CrossDimensionReachReportCompatibleFields
* CrossDimensionReachReportCompatibleFields `object`: Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".
  * breakdown `array`: Dimensions which are compatible to be selected in the "breakdown" section of the report.
    * items [Dimension](#dimension)
  * dimensionFilters `array`: Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
    * items [Dimension](#dimension)
  * kind `string`: The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields.
  * metrics `array`: Metrics which are compatible to be selected in the "metricNames" section of the report.
    * items [Metric](#metric)
  * overlapMetrics `array`: Metrics which are compatible to be selected in the "overlapMetricNames" section of the report.
    * items [Metric](#metric)

### CustomEvent
* CustomEvent `object`: Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an annotation on a first party impression, or an annotation on a first party click.
  * annotateClickEvent [CustomEventClickAnnotation](#customeventclickannotation)
  * annotateImpressionEvent [CustomEventImpressionAnnotation](#customeventimpressionannotation)
  * customVariables `array`: Custom variables associated with the event.
    * items [CustomVariable](#customvariable)
  * eventType `string` (values: UNKNOWN, INSERT, ANNOTATE): The type of event. If INSERT, the fields in insertEvent need to be populated. If ANNOTATE, the fields in either annotateClickEvent or annotateImpressionEvent need to be populated.
  * floodlightConfigurationId `string`: Floodlight configuration ID of the advertiser the event is linked to. This is a required field.
  * insertEvent [CustomEventInsert](#customeventinsert)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEvent".
  * ordinal `string`: The ordinal of this custom event. This is a required field.
  * timestampMicros `string`: The timestamp of this custom event, in Unix epoch micros. This is a required field.

### CustomEventClickAnnotation
* CustomEventClickAnnotation `object`: Annotate a click event.
  * gclid `string`: The Google click ID. Use this field to annotate the click associated with the gclid.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventClickAnnotation".

### CustomEventError
* CustomEventError `object`: The error code and description for a custom event that failed to insert.
  * code `string` (values: UNKNOWN, INVALID_ARGUMENT, INTERNAL, PERMISSION_DENIED, NOT_FOUND): The error code.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventError".
  * message `string`: A description of the error.

### CustomEventImpressionAnnotation
* CustomEventImpressionAnnotation `object`: Annotate an impression.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventImpressionAnnotation".
  * pathImpressionId `string`: The path impression ID. Use this field to annotate the impression associated with the pathImpressionId.

### CustomEventInsert
* CustomEventInsert `object`: Custom event to be inserted.
  * cmDimensions [CampaignManagerIds](#campaignmanagerids)
  * dv3Dimensions [DV3Ids](#dv3ids)
  * insertEventType `string` (values: UNKNOWN, IMPRESSION, CLICK): The type of event to insert.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventInsert".
  * matchId `string`: The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with mobileDeviceId, and at least one of the two fields is required.
  * mobileDeviceId `string`: The mobile device ID. This field is mutually exclusive with matchId, and at least one of the two fields is required.

### CustomEventStatus
* CustomEventStatus `object`: The original custom event that was inserted and whether there were any errors.
  * customEvent [CustomEvent](#customevent)
  * errors `array`: A list of errors related to this custom event.
    * items [CustomEventError](#customeventerror)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventStatus".

### CustomEventsBatchInsertRequest
* CustomEventsBatchInsertRequest `object`: Insert Custom Events Request.
  * customEvents `array`: The set of custom events to insert.
    * items [CustomEvent](#customevent)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventsBatchInsertRequest".

### CustomEventsBatchInsertResponse
* CustomEventsBatchInsertResponse `object`: Insert Custom Events Response.
  * hasFailures `boolean`: Indicates that some or all custom events failed to insert.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventsBatchInsertResponse".
  * status `array`: The insert status of each custom event. Statuses are returned in the same order that conversions are inserted.
    * items [CustomEventStatus](#customeventstatus)

### CustomFloodlightVariable
* CustomFloodlightVariable `object`: A custom floodlight variable.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#customFloodlightVariable".
  * type `string` (values: U1, U2, U3, U4, U5, U6, U7, U8, U9, U10, U11, U12, U13, U14, U15, U16, U17, U18, U19, U20, U21, U22, U23, U24, U25, U26, U27, U28, U29, U30, U31, U32, U33, U34, U35, U36, U37, U38, U39, U40, U41, U42, U43, U44, U45, U46, U47, U48, U49, U50, U51, U52, U53, U54, U55, U56, U57, U58, U59, U60, U61, U62, U63, U64, U65, U66, U67, U68, U69, U70, U71, U72, U73, U74, U75, U76, U77, U78, U79, U80, U81, U82, U83, U84, U85, U86, U87, U88, U89, U90, U91, U92, U93, U94, U95, U96, U97, U98, U99, U100): The type of custom floodlight variable to supply a value for. These map to the "u[1-20]=" in the tags.
  * value `string`: The value of the custom floodlight variable. The length of string must not exceed 50 characters.

### CustomRichMediaEvents
* CustomRichMediaEvents `object`: Represents a Custom Rich Media Events group.
  * filteredEventIds `array`: List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName.
    * items [DimensionValue](#dimensionvalue)
  * kind `string`: The kind of resource this is, in this case dfareporting#customRichMediaEvents.

### CustomVariable
* CustomVariable `object`: Custom variable.
  * index `string`: The index of the custom variable.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#customVariable".
  * value `string`: The value of the custom variable. The length of string must not exceed 50 characters.

### CustomViewabilityMetric
* CustomViewabilityMetric `object`: Custom Viewability Metric
  * configuration [CustomViewabilityMetricConfiguration](#customviewabilitymetricconfiguration)
  * id `string`: ID of the custom viewability metric.
  * name `string`: Name of the custom viewability metric.

### CustomViewabilityMetricConfiguration
* CustomViewabilityMetricConfiguration `object`: The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric.
  * audible `boolean`: Whether the video must be audible to count an impression.
  * timeMillis `integer`: The time in milliseconds the video must play for the Custom Viewability Metric to count an impression. If both this and timePercent are specified, the earlier of the two will be used.
  * timePercent `integer`: The percentage of video that must play for the Custom Viewability Metric to count an impression. If both this and timeMillis are specified, the earlier of the two will be used.
  * viewabilityPercent `integer`: The percentage of video that must be on screen for the Custom Viewability Metric to count an impression.

### DV3Ids
* DV3Ids `object`: DV360 IDs related to the custom event.
  * dvCampaignId `string`: Campaign ID for DV360.
  * dvCreativeId `string`: Creative ID for DV360.
  * dvInsertionOrderId `string`: Insertion Order ID for DV360.
  * dvLineItemId `string`: Line Item ID for DV360.
  * dvSiteId `string`: Site ID for DV360.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#dV3Ids".

### DateRange
* DateRange `object`: Represents a date range.
  * endDate `string`
  * kind `string`: The kind of resource this is, in this case dfareporting#dateRange.
  * relativeDateRange `string` (values: TODAY, YESTERDAY, WEEK_TO_DATE, MONTH_TO_DATE, QUARTER_TO_DATE, YEAR_TO_DATE, PREVIOUS_WEEK, PREVIOUS_MONTH, PREVIOUS_QUARTER, PREVIOUS_YEAR, LAST_7_DAYS, LAST_30_DAYS, LAST_90_DAYS, LAST_365_DAYS, LAST_24_MONTHS, LAST_14_DAYS, LAST_60_DAYS): The date range relative to the date of when the report is run.
  * startDate `string`

### DayPartTargeting
* DayPartTargeting `object`: Day Part Targeting.
  * daysOfWeek `array`: Days of the week when the ad will serve. Acceptable values are: - "SUNDAY" - "MONDAY" - "TUESDAY" - "WEDNESDAY" - "THURSDAY" - "FRIDAY" - "SATURDAY" 
    * items `string` (values: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY)
  * hoursOfDay `array`: Hours of the day when the ad will serve, where 0 is midnight to 1 AM and 23 is 11 PM to midnight. Can be specified with days of week, in which case the ad would serve during these hours on the specified days. For example if Monday, Wednesday, Friday are the days of week specified and 9-10am, 3-5pm (hours 9, 15, and 16) is specified, the ad would serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm. Acceptable values are 0 to 23, inclusive.
    * items `integer`
  * userLocalTime `boolean`: Whether or not to use the user's local time. If false, the America/New York time zone applies.

### DeepLink
* DeepLink `object`: Contains information about a landing page deep link.
  * appUrl `string`: The URL of the mobile app being linked to.
  * fallbackUrl `string`: The fallback URL. This URL will be served to users who do not have the mobile app installed.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#deepLink".
  * mobileApp [MobileApp](#mobileapp)
  * remarketingListIds `array`: Ads served to users on these remarketing lists will use this deep link. Applicable when mobileApp.directory is APPLE_APP_STORE.
    * items `string`

### DefaultClickThroughEventTagProperties
* DefaultClickThroughEventTagProperties `object`: Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further.
  * defaultClickThroughEventTagId `string`: ID of the click-through event tag to apply to all ads in this entity's scope.
  * overrideInheritedEventTag `boolean`: Whether this entity should override the inherited default click-through event tag with its own defined value.

### DeliverySchedule
* DeliverySchedule `object`: Delivery Schedule.
  * frequencyCap [FrequencyCap](#frequencycap)
  * hardCutoff `boolean`: Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it has reached its delivery goals.
  * impressionRatio `string`: Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then Campaign Manager will serve ad B three times as often as ad A. Acceptable values are 1 to 10, inclusive.
  * priority `string` (values: AD_PRIORITY_01, AD_PRIORITY_02, AD_PRIORITY_03, AD_PRIORITY_04, AD_PRIORITY_05, AD_PRIORITY_06, AD_PRIORITY_07, AD_PRIORITY_08, AD_PRIORITY_09, AD_PRIORITY_10, AD_PRIORITY_11, AD_PRIORITY_12, AD_PRIORITY_13, AD_PRIORITY_14, AD_PRIORITY_15, AD_PRIORITY_16): Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served.

### DfpSettings
* DfpSettings `object`: Google Ad Manager Settings
  * dfpNetworkCode `string`: Ad Manager network code for this directory site.
  * dfpNetworkName `string`: Ad Manager network name for this directory site.
  * programmaticPlacementAccepted `boolean`: Whether this directory site accepts programmatic placements.
  * pubPaidPlacementAccepted `boolean`: Whether this directory site accepts publisher-paid tags.
  * publisherPortalOnly `boolean`: Whether this directory site is available only via Publisher Portal.

### Dimension
* Dimension `object`: Represents a dimension.
  * kind `string`: The kind of resource this is, in this case dfareporting#dimension.
  * name `string`: The dimension name, e.g. dfa:advertiser

### DimensionFilter
* DimensionFilter `object`: Represents a dimension filter.
  * dimensionName `string`: The name of the dimension to filter.
  * kind `string`: The kind of resource this is, in this case dfareporting#dimensionFilter.
  * value `string`: The value of the dimension to filter.

### DimensionValue
* DimensionValue `object`: Represents a DimensionValue resource.
  * dimensionName `string`: The name of the dimension.
  * etag `string`: The eTag of this response for caching purposes.
  * id `string`: The ID associated with the value if available.
  * kind `string`: The kind of resource this is, in this case dfareporting#dimensionValue.
  * matchType `string` (values: EXACT, BEGINS_WITH, CONTAINS, WILDCARD_EXPRESSION): Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
  * value `string`: The value of the dimension.

### DimensionValueList
* DimensionValueList `object`: Represents the list of DimensionValue resources.
  * etag `string`: The eTag of this response for caching purposes.
  * items `array`: The dimension values returned in this response.
    * items [DimensionValue](#dimensionvalue)
  * kind `string`: The kind of list this is, in this case dfareporting#dimensionValueList.
  * nextPageToken `string`: Continuation token used to page through dimension values. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.

### DimensionValueRequest
* DimensionValueRequest `object`: Represents a DimensionValuesRequest.
  * dimensionName `string`: The name of the dimension for which values should be requested.
  * endDate `string`
  * filters `array`: The list of filters by which to filter values. The filters are ANDed.
    * items [DimensionFilter](#dimensionfilter)
  * kind `string`: The kind of request this is, in this case dfareporting#dimensionValueRequest .
  * startDate `string`

### DirectorySite
* DirectorySite `object`: DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
  * id `string`: ID of this directory site. This is a read-only, auto-generated field.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * inpageTagFormats `array`: Tag types for regular placements. Acceptable values are: - "STANDARD" - "IFRAME_JAVASCRIPT_INPAGE" - "INTERNAL_REDIRECT_INPAGE" - "JAVASCRIPT_INPAGE" 
    * items `string` (values: STANDARD, IFRAME_JAVASCRIPT_INPAGE, INTERNAL_REDIRECT_INPAGE, JAVASCRIPT_INPAGE)
  * interstitialTagFormats `array`: Tag types for interstitial placements. Acceptable values are: - "IFRAME_JAVASCRIPT_INTERSTITIAL" - "INTERNAL_REDIRECT_INTERSTITIAL" - "JAVASCRIPT_INTERSTITIAL" 
    * items `string` (values: IFRAME_JAVASCRIPT_INTERSTITIAL, INTERNAL_REDIRECT_INTERSTITIAL, JAVASCRIPT_INTERSTITIAL)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySite".
  * name `string`: Name of this directory site.
  * settings [DirectorySiteSettings](#directorysitesettings)
  * url `string`: URL of this directory site.

### DirectorySiteSettings
* DirectorySiteSettings `object`: Directory Site Settings
  * activeViewOptOut `boolean`: Whether this directory site has disabled active view creatives.
  * dfpSettings [DfpSettings](#dfpsettings)
  * instreamVideoPlacementAccepted `boolean`: Whether this site accepts in-stream video ads.
  * interstitialPlacementAccepted `boolean`: Whether this site accepts interstitial ads.

### DirectorySitesListResponse
* DirectorySitesListResponse `object`: Directory Site List Response
  * directorySites `array`: Directory site collection.
    * items [DirectorySite](#directorysite)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySitesListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### DisjunctiveMatchStatement
* DisjunctiveMatchStatement `object`: Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements.
  * eventFilters `array`: The event filters contained within this disjunctive match statement.
    * items [EventFilter](#eventfilter)
  * kind `string`: The kind of resource this is, in this case dfareporting#disjunctiveMatchStatement.

### DynamicTargetingKey
* DynamicTargetingKey `object`: Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKey".
  * name `string`: Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
  * objectId `string`: ID of the object of this dynamic targeting key. This is a required field.
  * objectType `string` (values: OBJECT_ADVERTISER, OBJECT_AD, OBJECT_CREATIVE, OBJECT_PLACEMENT): Type of the object of this dynamic targeting key. This is a required field.

### DynamicTargetingKeysListResponse
* DynamicTargetingKeysListResponse `object`: Dynamic Targeting Key List Response
  * dynamicTargetingKeys `array`: Dynamic targeting key collection.
    * items [DynamicTargetingKey](#dynamictargetingkey)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKeysListResponse".

### EncryptionInfo
* EncryptionInfo `object`: A description of how user IDs are encrypted.
  * encryptionEntityId `string`: The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer.
  * encryptionEntityType `string` (values: ENCRYPTION_ENTITY_TYPE_UNKNOWN, DCM_ACCOUNT, DCM_ADVERTISER, DBM_PARTNER, DBM_ADVERTISER, ADWORDS_CUSTOMER, DFP_NETWORK_CODE): The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer.
  * encryptionSource `string` (values: ENCRYPTION_SCOPE_UNKNOWN, AD_SERVING, DATA_TRANSFER): Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#encryptionInfo".

### EventFilter
* EventFilter `object`: Represents a DfaReporting event filter.
  * dimensionFilter [PathReportDimensionValue](#pathreportdimensionvalue)
  * kind `string`: The kind of resource this is, in this case dfareporting#eventFilter.

### EventTag
* EventTag `object`: Contains properties of an event tag.
  * accountId `string`: Account ID of this event tag. This is a read-only field that can be left blank.
  * advertiserId `string`: Advertiser ID of this event tag. This field or the campaignId field is required on insertion.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * campaignId `string`: Campaign ID of this event tag. This field or the advertiserId field is required on insertion.
  * campaignIdDimensionValue [DimensionValue](#dimensionvalue)
  * enabledByDefault `boolean`: Whether this event tag should be automatically enabled for all of the advertiser's campaigns and ads.
  * excludeFromAdxRequests `boolean`: Whether to remove this event tag from ads that are trafficked through Display & Video 360 to Ad Exchange. This may be useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network.
  * id `string`: ID of this event tag. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTag".
  * name `string`: Name of this event tag. This is a required field and must be less than 256 characters long.
  * siteFilterType `string` (values: WHITELIST, BLACKLIST): Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites.
  * siteIds `array`: Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a allowlist or blocklist filter.
    * items `string`
  * sslCompliant `boolean`: Whether this tag is SSL-compliant or not. This is a read-only field.
  * status `string` (values: ENABLED, DISABLED): Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field.
  * subaccountId `string`: Subaccount ID of this event tag. This is a read-only field that can be left blank.
  * type `string` (values: IMPRESSION_IMAGE_EVENT_TAG, IMPRESSION_JAVASCRIPT_EVENT_TAG, CLICK_THROUGH_EVENT_TAG): Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field.
  * url `string`: Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required on insertion.
  * urlEscapeLevels `integer`: Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through event tags as specified by the event tag type.

### EventTagOverride
* EventTagOverride `object`: Event tag override information.
  * enabled `boolean`: Whether this override is enabled.
  * id `string`: ID of this event tag override. This is a read-only, auto-generated field.

### EventTagsListResponse
* EventTagsListResponse `object`: Event Tag List Response
  * eventTags `array`: Event tag collection.
    * items [EventTag](#eventtag)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTagsListResponse".

### File
* File `object`: Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE".
  * dateRange [DateRange](#daterange)
  * etag `string`: Etag of this resource.
  * fileName `string`: The filename of the file.
  * format `string` (values: CSV, EXCEL): The output format of the report. Only available once the file is available.
  * id `string`: The unique ID of this report file.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#file".
  * lastModifiedTime `string`: The timestamp in milliseconds since epoch when this file was last modified.
  * reportId `string`: The ID of the report this file was generated from.
  * status `string` (values: PROCESSING, REPORT_AVAILABLE, FAILED, CANCELLED): The status of the report file.
  * urls `object`: The URLs where the completed report file can be downloaded.
    * apiUrl `string`: The URL for downloading the report data through the API.
    * browserUrl `string`: The URL for downloading the report data through a browser.

### FileList
* FileList `object`: List of files for a report.
  * etag `string`: Etag of this resource.
  * items `array`: The files returned in this response.
    * items [File](#file)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#fileList".
  * nextPageToken `string`: Continuation token used to page through files. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.

### Flight
* Flight `object`: Flight
  * endDate `string`
  * rateOrCost `string`: Rate or cost of this flight.
  * startDate `string`
  * units `string`: Units of this flight.

### FloodlightActivitiesGenerateTagResponse
* FloodlightActivitiesGenerateTagResponse `object`: Floodlight Activity GenerateTag Response
  * floodlightActivityTag `string`: Generated tag for this Floodlight activity. For global site tags, this is the event snippet.
  * globalSiteTagGlobalSnippet `string`: The global snippet section of a global site tag. The global site tag sets new cookies on your domain, which will store a unique identifier for a user or the ad click that brought the user to your site. Learn more.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesGenerateTagResponse".

### FloodlightActivitiesListResponse
* FloodlightActivitiesListResponse `object`: Floodlight Activity List Response
  * floodlightActivities `array`: Floodlight activity collection.
    * items [FloodlightActivity](#floodlightactivity)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### FloodlightActivity
* FloodlightActivity `object`: Contains properties of a Floodlight activity.
  * accountId `string`: Account ID of this floodlight activity. This is a read-only field that can be left blank.
  * advertiserId `string`: Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's advertiser or the existing activity's advertiser.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * attributionEnabled `boolean`: Whether the activity is enabled for attribution.
  * cacheBustingType `string` (values: JAVASCRIPT, ACTIVE_SERVER_PAGE, JSP, PHP, COLD_FUSION): Code type used for cache busting in the generated tag. Applicable only when floodlightActivityGroupType is COUNTER and countingMethod is STANDARD_COUNTING or UNIQUE_COUNTING.
  * countingMethod `string` (values: STANDARD_COUNTING, UNIQUE_COUNTING, SESSION_COUNTING, TRANSACTIONS_COUNTING, ITEMS_SOLD_COUNTING): Counting method for conversions for this floodlight activity. This is a required field.
  * defaultTags `array`: Dynamic floodlight tags.
    * items [FloodlightActivityDynamicTag](#floodlightactivitydynamictag)
  * expectedUrl `string`: URL where this tag will be deployed. If specified, must be less than 256 characters long.
  * floodlightActivityGroupId `string`: Floodlight activity group ID of this floodlight activity. This is a required field.
  * floodlightActivityGroupName `string`: Name of the associated floodlight activity group. This is a read-only field.
  * floodlightActivityGroupTagString `string`: Tag string of the associated floodlight activity group. This is a read-only field.
  * floodlightActivityGroupType `string` (values: COUNTER, SALE): Type of the associated floodlight activity group. This is a read-only field.
  * floodlightConfigurationId `string`: Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's floodlight configuration or from the existing activity's floodlight configuration.
  * floodlightConfigurationIdDimensionValue [DimensionValue](#dimensionvalue)
  * floodlightTagType `string` (values: IFRAME, IMAGE, GLOBAL_SITE_TAG): The type of Floodlight tag this activity will generate. This is a required field.
  * id `string`: ID of this floodlight activity. This is a read-only, auto-generated field.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivity".
  * name `string`: Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain quotes.
  * notes `string`: General notes or implementation instructions for the tag.
  * publisherTags `array`: Publisher dynamic floodlight tags.
    * items [FloodlightActivityPublisherDynamicTag](#floodlightactivitypublisherdynamictag)
  * secure `boolean`: Whether this tag should use SSL.
  * sslCompliant `boolean`: Whether the floodlight activity is SSL-compliant. This is a read-only field, its value detected by the system from the floodlight tags.
  * sslRequired `boolean`: Whether this floodlight activity must be SSL-compliant.
  * status `string` (values: ACTIVE, ARCHIVED_AND_DISABLED, ARCHIVED, DISABLED_POLICY): The status of the activity. This can only be set to ACTIVE or ARCHIVED_AND_DISABLED. The ARCHIVED status is no longer supported and cannot be set for Floodlight activities. The DISABLED_POLICY status indicates that a Floodlight activity is violating Google policy. Contact your account manager for more information.
  * subaccountId `string`: Subaccount ID of this floodlight activity. This is a read-only field that can be left blank.
  * tagFormat `string` (values: HTML, XHTML): Tag format type for the floodlight activity. If left blank, the tag format will default to HTML.
  * tagString `string`: Value of the cat= parameter in the floodlight tag, which the ad servers use to identify the activity. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activities of the same activity group. This field is read-only after insertion.
  * userDefinedVariableTypes `array`: List of the user-defined variables used by this conversion tag. These map to the "u[1-100]=" in the tags. Each of these can have a user defined type. Acceptable values are U1 to U100, inclusive. 
    * items `string` (values: U1, U2, U3, U4, U5, U6, U7, U8, U9, U10, U11, U12, U13, U14, U15, U16, U17, U18, U19, U20, U21, U22, U23, U24, U25, U26, U27, U28, U29, U30, U31, U32, U33, U34, U35, U36, U37, U38, U39, U40, U41, U42, U43, U44, U45, U46, U47, U48, U49, U50, U51, U52, U53, U54, U55, U56, U57, U58, U59, U60, U61, U62, U63, U64, U65, U66, U67, U68, U69, U70, U71, U72, U73, U74, U75, U76, U77, U78, U79, U80, U81, U82, U83, U84, U85, U86, U87, U88, U89, U90, U91, U92, U93, U94, U95, U96, U97, U98, U99, U100)

### FloodlightActivityDynamicTag
* FloodlightActivityDynamicTag `object`: Dynamic Tag
  * id `string`: ID of this dynamic tag. This is a read-only, auto-generated field.
  * name `string`: Name of this tag.
  * tag `string`: Tag code.

### FloodlightActivityGroup
* FloodlightActivityGroup `object`: Contains properties of a Floodlight activity group.
  * accountId `string`: Account ID of this floodlight activity group. This is a read-only field that can be left blank.
  * advertiserId `string`: Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration's advertiser or from the existing activity group's advertiser.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * floodlightConfigurationId `string`: Floodlight configuration ID of this floodlight activity group. This is a required field.
  * floodlightConfigurationIdDimensionValue [DimensionValue](#dimensionvalue)
  * id `string`: ID of this floodlight activity group. This is a read-only, auto-generated field.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroup".
  * name `string`: Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes.
  * subaccountId `string`: Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank.
  * tagString `string`: Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after insertion.
  * type `string` (values: COUNTER, SALE): Type of the floodlight activity group. This is a required field that is read-only after insertion.

### FloodlightActivityGroupsListResponse
* FloodlightActivityGroupsListResponse `object`: Floodlight Activity Group List Response
  * floodlightActivityGroups `array`: Floodlight activity group collection.
    * items [FloodlightActivityGroup](#floodlightactivitygroup)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroupsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### FloodlightActivityPublisherDynamicTag
* FloodlightActivityPublisherDynamicTag `object`: Publisher Dynamic Tag
  * clickThrough `boolean`: Whether this tag is applicable only for click-throughs.
  * directorySiteId `string`: Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated.
  * dynamicTag [FloodlightActivityDynamicTag](#floodlightactivitydynamictag)
  * siteId `string`: Site ID of this dynamic tag.
  * siteIdDimensionValue [DimensionValue](#dimensionvalue)
  * viewThrough `boolean`: Whether this tag is applicable only for view-throughs.

### FloodlightConfiguration
* FloodlightConfiguration `object`: Contains properties of a Floodlight configuration.
  * accountId `string`: Account ID of this floodlight configuration. This is a read-only field that can be left blank.
  * advertiserId `string`: Advertiser ID of the parent advertiser of this floodlight configuration.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * analyticsDataSharingEnabled `boolean`: Whether advertiser data is shared with Google Analytics.
  * customViewabilityMetric [CustomViewabilityMetric](#customviewabilitymetric)
  * exposureToConversionEnabled `boolean`: Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting.
  * firstDayOfWeek `string` (values: MONDAY, SUNDAY): Day that will be counted as the first day of the week in reports. This is a required field.
  * id `string`: ID of this floodlight configuration. This is a read-only, auto-generated field.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * inAppAttributionTrackingEnabled `boolean`: Whether in-app attribution tracking is enabled.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfiguration".
  * lookbackConfiguration [LookbackConfiguration](#lookbackconfiguration)
  * naturalSearchConversionAttributionOption `string` (values: EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION, INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION, INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION): Types of attribution options for natural search conversions.
  * omnitureSettings [OmnitureSettings](#omnituresettings)
  * subaccountId `string`: Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank.
  * tagSettings [TagSettings](#tagsettings)
  * thirdPartyAuthenticationTokens `array`: List of third-party authentication tokens enabled for this configuration.
    * items [ThirdPartyAuthenticationToken](#thirdpartyauthenticationtoken)
  * userDefinedVariableConfigurations `array`: List of user defined variables enabled for this configuration.
    * items [UserDefinedVariableConfiguration](#userdefinedvariableconfiguration)

### FloodlightConfigurationsListResponse
* FloodlightConfigurationsListResponse `object`: Floodlight Configuration List Response
  * floodlightConfigurations `array`: Floodlight configuration collection.
    * items [FloodlightConfiguration](#floodlightconfiguration)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfigurationsListResponse".

### FloodlightReportCompatibleFields
* FloodlightReportCompatibleFields `object`: Represents fields that are compatible to be selected for a report of type "FlOODLIGHT".
  * dimensionFilters `array`: Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
    * items [Dimension](#dimension)
  * dimensions `array`: Dimensions which are compatible to be selected in the "dimensions" section of the report.
    * items [Dimension](#dimension)
  * kind `string`: The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields.
  * metrics `array`: Metrics which are compatible to be selected in the "metricNames" section of the report.
    * items [Metric](#metric)

### FrequencyCap
* FrequencyCap `object`: Frequency Cap.
  * duration `string`: Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to 7776000, inclusive.
  * impressions `string`: Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15, inclusive.

### FsCommand
* FsCommand `object`: FsCommand.
  * left `integer`: Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
  * positionOption `string` (values: CENTERED, DISTANCE_FROM_TOP_LEFT_CORNER): Position in the browser where the window will open.
  * top `integer`: Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.
  * windowHeight `integer`: Height of the window.
  * windowWidth `integer`: Width of the window.

### GeoTargeting
* GeoTargeting `object`: Geographical Targeting.
  * cities `array`: Cities to be targeted. For each city only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a city, do not target or exclude the country of the city, and do not target the metro or region of the city.
    * items [City](#city)
  * countries `array`: Countries to be targeted or excluded from targeting, depending on the setting of the excludeCountries field. For each country only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting or excluding a country, do not target regions, cities, metros, or postal codes in the same country.
    * items [Country](#country)
  * excludeCountries `boolean`: Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to countries which will be targeted by the ad.
  * metros `array`: Metros to be targeted. For each metro only dmaId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a metro, do not target or exclude the country of the metro.
    * items [Metro](#metro)
  * postalCodes `array`: Postal codes to be targeted. For each postal code only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a postal code, do not target or exclude the country of the postal code.
    * items [PostalCode](#postalcode)
  * regions `array`: Regions to be targeted. For each region only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a region, do not target or exclude the country of the region.
    * items [Region](#region)

### InventoryItem
* InventoryItem `object`: Represents a buy from the Planning inventory store.
  * accountId `string`: Account ID of this inventory item.
  * adSlots `array`: Ad slots of this inventory item. If this inventory item represents a standalone placement, there will be exactly one ad slot. If this inventory item represents a placement group, there will be more than one ad slot, each representing one child placement in that placement group.
    * items [AdSlot](#adslot)
  * advertiserId `string`: Advertiser ID of this inventory item.
  * contentCategoryId `string`: Content category ID of this inventory item.
  * estimatedClickThroughRate `string`: Estimated click-through rate of this inventory item.
  * estimatedConversionRate `string`: Estimated conversion rate of this inventory item.
  * id `string`: ID of this inventory item.
  * inPlan `boolean`: Whether this inventory item is in plan.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItem".
  * lastModifiedInfo [LastModifiedInfo](#lastmodifiedinfo)
  * name `string`: Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For group inventory items, this can differ from the name of any of its ad slots.
  * negotiationChannelId `string`: Negotiation channel ID of this inventory item.
  * orderId `string`: Order ID of this inventory item.
  * placementStrategyId `string`: Placement strategy ID of this inventory item.
  * pricing [Pricing](#pricing)
  * projectId `string`: Project ID of this inventory item.
  * rfpId `string`: RFP ID of this inventory item.
  * siteId `string`: ID of the site this inventory item is associated with.
  * subaccountId `string`: Subaccount ID of this inventory item.
  * type `string` (values: PLANNING_PLACEMENT_TYPE_REGULAR, PLANNING_PLACEMENT_TYPE_CREDIT): Type of inventory item.

### InventoryItemsListResponse
* InventoryItemsListResponse `object`: Inventory item List Response
  * inventoryItems `array`: Inventory item collection
    * items [InventoryItem](#inventoryitem)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItemsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### KeyValueTargetingExpression
* KeyValueTargetingExpression `object`: Key Value Targeting Expression.
  * expression `string`: Keyword expression being targeted by the ad.

### LandingPage
* LandingPage `object`: Contains information about where a user's browser is taken after the user clicks an ad.
  * advertiserId `string`: Advertiser ID of this landing page. This is a required field.
  * archived `boolean`: Whether this landing page has been archived.
  * deepLinks `array`: Links that will direct the user to a mobile app, if installed.
    * items [DeepLink](#deeplink)
  * id `string`: ID of this landing page. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPage".
  * name `string`: Name of this landing page. This is a required field. It must be less than 256 characters long.
  * url `string`: URL of this landing page. This is a required field.

### Language
* Language `object`: Contains information about a language that can be targeted by ads.
  * id `string`: Language ID of this language. This is the ID used for targeting and generating reports.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#language".
  * languageCode `string`: Format of language code is an ISO 639 two-letter language code optionally followed by an underscore followed by an ISO 3166 code. Examples are "en" for English or "zh_CN" for Simplified Chinese.
  * name `string`: Name of this language.

### LanguageTargeting
* LanguageTargeting `object`: Language Targeting.
  * languages `array`: Languages that this ad targets. For each language only languageId is required. The other fields are populated automatically when the ad is inserted or updated.
    * items [Language](#language)

### LanguagesListResponse
* LanguagesListResponse `object`: Language List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#languagesListResponse".
  * languages `array`: Language collection.
    * items [Language](#language)

### LastModifiedInfo
* LastModifiedInfo `object`: Modification timestamp.
  * time `string`: Timestamp of the last change in milliseconds since epoch.

### ListPopulationClause
* ListPopulationClause `object`: A group clause made up of list population terms representing constraints joined by ORs.
  * terms `array`: Terms of this list population clause. Each clause is made up of list population terms representing constraints and are joined by ORs.
    * items [ListPopulationTerm](#listpopulationterm)

### ListPopulationRule
* ListPopulationRule `object`: Remarketing List Population Rule.
  * floodlightActivityId `string`: Floodlight activity ID associated with this rule. This field can be left blank.
  * floodlightActivityName `string`: Name of floodlight activity associated with this rule. This is a read-only, auto-generated field.
  * listPopulationClauses `array`: Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of list population terms which are joined by ORs.
    * items [ListPopulationClause](#listpopulationclause)

### ListPopulationTerm
* ListPopulationTerm `object`: Remarketing List Population Rule Term.
  * contains `boolean`: Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default.
  * negation `boolean`: Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
  * operator `string` (values: NUM_EQUALS, NUM_LESS_THAN, NUM_LESS_THAN_EQUAL, NUM_GREATER_THAN, NUM_GREATER_THAN_EQUAL, STRING_EQUALS, STRING_CONTAINS): Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
  * remarketingListId `string`: ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM.
  * type `string` (values: CUSTOM_VARIABLE_TERM, LIST_MEMBERSHIP_TERM, REFERRER_TERM): List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable.
  * value `string`: Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.
  * variableFriendlyName `string`: Friendly name of this term's variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM.
  * variableName `string`: Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or REFERRER_TERM.

### ListTargetingExpression
* ListTargetingExpression `object`: Remarketing List Targeting Expression.
  * expression `string`: Expression describing which lists are being targeted by the ad.

### LookbackConfiguration
* LookbackConfiguration `object`: Lookback configuration settings.
  * clickDuration `integer`: Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive.
  * postImpressionActivitiesDuration `integer`: Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive.

### Metric
* Metric `object`: Represents a metric.
  * kind `string`: The kind of resource this is, in this case dfareporting#metric.
  * name `string`: The metric name, e.g. dfa:impressions

### Metro
* Metro `object`: Contains information about a metro region that can be targeted by ads.
  * countryCode `string`: Country code of the country to which this metro region belongs.
  * countryDartId `string`: DART ID of the country to which this metro region belongs.
  * dartId `string`: DART ID of this metro region.
  * dmaId `string`: DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#metro".
  * metroCode `string`: Metro code of this metro region. This is equivalent to dma_id.
  * name `string`: Name of this metro region.

### MetrosListResponse
* MetrosListResponse `object`: Metro List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#metrosListResponse".
  * metros `array`: Metro collection.
    * items [Metro](#metro)

### MobileApp
* MobileApp `object`: Contains information about a mobile app. Used as a landing page deep link.
  * directory `string` (values: UNKNOWN, APPLE_APP_STORE, GOOGLE_PLAY_STORE): Mobile app directory.
  * id `string`: ID of this mobile app.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileApp".
  * publisherName `string`: Publisher name.
  * title `string`: Title of this mobile app.

### MobileAppsListResponse
* MobileAppsListResponse `object`: Mobile app List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileAppsListResponse".
  * mobileApps `array`: Mobile apps collection.
    * items [MobileApp](#mobileapp)
  * nextPageToken `string`: Pagination token to be used for the next list operation.

### MobileCarrier
* MobileCarrier `object`: Contains information about a mobile carrier that can be targeted by ads.
  * countryCode `string`: Country code of the country to which this mobile carrier belongs.
  * countryDartId `string`: DART ID of the country to which this mobile carrier belongs.
  * id `string`: ID of this mobile carrier.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarrier".
  * name `string`: Name of this mobile carrier.

### MobileCarriersListResponse
* MobileCarriersListResponse `object`: Mobile Carrier List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarriersListResponse".
  * mobileCarriers `array`: Mobile carrier collection.
    * items [MobileCarrier](#mobilecarrier)

### ObaIcon
* ObaIcon `object`: Online Behavioral Advertiser icon.
  * iconClickThroughUrl `string`: URL to redirect to when an OBA icon is clicked.
  * iconClickTrackingUrl `string`: URL to track click when an OBA icon is clicked.
  * iconViewTrackingUrl `string`: URL to track view when an OBA icon is clicked.
  * program `string`: Identifies the industry initiative that the icon supports. For example, AdChoices.
  * resourceUrl `string`: OBA icon resource URL. Campaign Manager only supports image and JavaScript icons. Learn more
  * size [Size](#size)
  * xPosition `string`: OBA icon x coordinate position. Accepted values are left or right.
  * yPosition `string`: OBA icon y coordinate position. Accepted values are top or bottom.

### ObjectFilter
* ObjectFilter `object`: Object Filter.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#objectFilter".
  * objectIds `array`: Applicable when status is ASSIGNED. The user has access to objects with these object IDs.
    * items `string`
  * status `string` (values: NONE, ASSIGNED, ALL): Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list.

### OffsetPosition
* OffsetPosition `object`: Offset Position.
  * left `integer`: Offset distance from left side of an asset or a window.
  * top `integer`: Offset distance from top side of an asset or a window.

### OmnitureSettings
* OmnitureSettings `object`: Omniture Integration Settings.
  * omnitureCostDataEnabled `boolean`: Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true.
  * omnitureIntegrationEnabled `boolean`: Whether Omniture integration is enabled. This property can be enabled only when the "Advanced Ad Serving" account setting is enabled.

### OperatingSystem
* OperatingSystem `object`: Contains information about an operating system that can be targeted by ads.
  * dartId `string`: DART ID of this operating system. This is the ID used for targeting.
  * desktop `boolean`: Whether this operating system is for desktop.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystem".
  * mobile `boolean`: Whether this operating system is for mobile.
  * name `string`: Name of this operating system.

### OperatingSystemVersion
* OperatingSystemVersion `object`: Contains information about a particular version of an operating system that can be targeted by ads.
  * id `string`: ID of this operating system version.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersion".
  * majorVersion `string`: Major version (leftmost number) of this operating system version.
  * minorVersion `string`: Minor version (number after the first dot) of this operating system version.
  * name `string`: Name of this operating system version.
  * operatingSystem [OperatingSystem](#operatingsystem)

### OperatingSystemVersionsListResponse
* OperatingSystemVersionsListResponse `object`: Operating System Version List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersionsListResponse".
  * operatingSystemVersions `array`: Operating system version collection.
    * items [OperatingSystemVersion](#operatingsystemversion)

### OperatingSystemsListResponse
* OperatingSystemsListResponse `object`: Operating System List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemsListResponse".
  * operatingSystems `array`: Operating system collection.
    * items [OperatingSystem](#operatingsystem)

### OptimizationActivity
* OptimizationActivity `object`: Creative optimization activity.
  * floodlightActivityId `string`: Floodlight activity ID of this optimization activity. This is a required field.
  * floodlightActivityIdDimensionValue [DimensionValue](#dimensionvalue)
  * weight `integer`: Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned to the other optimization activities. Value must be greater than or equal to 1.

### Order
* Order `object`: Describes properties of a Planning order.
  * accountId `string`: Account ID of this order.
  * advertiserId `string`: Advertiser ID of this order.
  * approverUserProfileIds `array`: IDs for users that have to approve documents created for this order.
    * items `string`
  * buyerInvoiceId `string`: Buyer invoice ID associated with this order.
  * buyerOrganizationName `string`: Name of the buyer organization.
  * comments `string`: Comments in this order.
  * contacts `array`: Contacts for this order.
    * items [OrderContact](#ordercontact)
  * id `string`: ID of this order. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#order".
  * lastModifiedInfo [LastModifiedInfo](#lastmodifiedinfo)
  * name `string`: Name of this order.
  * notes `string`: Notes of this order.
  * planningTermId `string`: ID of the terms and conditions template used in this order.
  * projectId `string`: Project ID of this order.
  * sellerOrderId `string`: Seller order ID associated with this order.
  * sellerOrganizationName `string`: Name of the seller organization.
  * siteId `array`: Site IDs this order is associated with.
    * items `string`
  * siteNames `array`: Free-form site names this order is associated with.
    * items `string`
  * subaccountId `string`: Subaccount ID of this order.
  * termsAndConditions `string`: Terms and conditions of this order.

### OrderContact
* OrderContact `object`: Contact of an order.
  * contactInfo `string`: Free-form information about this contact. It could be any information related to this contact in addition to type, title, name, and signature user profile ID.
  * contactName `string`: Name of this contact.
  * contactTitle `string`: Title of this contact.
  * contactType `string` (values: PLANNING_ORDER_CONTACT_BUYER_CONTACT, PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT, PLANNING_ORDER_CONTACT_SELLER_CONTACT): Type of this contact.
  * signatureUserProfileId `string`: ID of the user profile containing the signature that will be embedded into order documents.

### OrderDocument
* OrderDocument `object`: Contains properties of a Planning order document.
  * accountId `string`: Account ID of this order document.
  * advertiserId `string`: Advertiser ID of this order document.
  * amendedOrderDocumentId `string`: The amended order document ID of this order document. An order document can be created by optionally amending another order document so that the change history can be preserved.
  * approvedByUserProfileIds `array`: IDs of users who have approved this order document.
    * items `string`
  * cancelled `boolean`: Whether this order document is cancelled.
  * createdInfo [LastModifiedInfo](#lastmodifiedinfo)
  * effectiveDate `string`
  * id `string`: ID of this order document.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocument".
  * lastSentRecipients `array`: List of email addresses that received the last sent document.
    * items `string`
  * lastSentTime `string`
  * orderId `string`: ID of the order from which this order document is created.
  * projectId `string`: Project ID of this order document.
  * signed `boolean`: Whether this order document has been signed.
  * subaccountId `string`: Subaccount ID of this order document.
  * title `string`: Title of this order document.
  * type `string` (values: PLANNING_ORDER_TYPE_INSERTION_ORDER, PLANNING_ORDER_TYPE_CHANGE_ORDER): Type of this order document

### OrderDocumentsListResponse
* OrderDocumentsListResponse `object`: Order document List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocumentsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.
  * orderDocuments `array`: Order document collection
    * items [OrderDocument](#orderdocument)

### OrdersListResponse
* OrdersListResponse `object`: Order List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#ordersListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.
  * orders `array`: Order collection.
    * items [Order](#order)

### PathFilter
* PathFilter `object`: Represents a DfaReporting path filter.
  * eventFilters `array`: Event filters in path report.
    * items [EventFilter](#eventfilter)
  * kind `string`: The kind of resource this is, in this case dfareporting#pathFilter.
  * pathMatchPosition `string` (values: PATH_MATCH_POSITION_UNSPECIFIED, ANY, FIRST, LAST): Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.

### PathReportCompatibleFields
* PathReportCompatibleFields `object`: Represents fields that are compatible to be selected for a report of type "PATH".
  * channelGroupings `array`: Dimensions which are compatible to be selected in the "channelGroupings" section of the report.
    * items [Dimension](#dimension)
  * dimensions `array`: Dimensions which are compatible to be selected in the "dimensions" section of the report.
    * items [Dimension](#dimension)
  * kind `string`: The kind of resource this is, in this case dfareporting#pathReportCompatibleFields.
  * metrics `array`: Metrics which are compatible to be selected in the "metricNames" section of the report.
    * items [Metric](#metric)
  * pathFilters `array`: Dimensions which are compatible to be selected in the "pathFilters" section of the report.
    * items [Dimension](#dimension)

### PathReportDimensionValue
* PathReportDimensionValue `object`: Represents a PathReportDimensionValue resource.
  * dimensionName `string`: The name of the dimension.
  * ids `array`: The possible ID's associated with the value if available.
    * items `string`
  * kind `string`: The kind of resource this is, in this case dfareporting#pathReportDimensionValue.
  * matchType `string` (values: EXACT, BEGINS_WITH, CONTAINS, WILDCARD_EXPRESSION): Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.
  * values `array`: The possible values of the dimension.
    * items `string`

### PathToConversionReportCompatibleFields
* PathToConversionReportCompatibleFields `object`: Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION".
  * conversionDimensions `array`: Conversion dimensions which are compatible to be selected in the "conversionDimensions" section of the report.
    * items [Dimension](#dimension)
  * customFloodlightVariables `array`: Custom floodlight variables which are compatible to be selected in the "customFloodlightVariables" section of the report.
    * items [Dimension](#dimension)
  * kind `string`: The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields.
  * metrics `array`: Metrics which are compatible to be selected in the "metricNames" section of the report.
    * items [Metric](#metric)
  * perInteractionDimensions `array`: Per-interaction dimensions which are compatible to be selected in the "perInteractionDimensions" section of the report.
    * items [Dimension](#dimension)

### Placement
* Placement `object`: Contains properties of a placement.
  * accountId `string`: Account ID of this placement. This field can be left blank.
  * adBlockingOptOut `boolean`: Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take effect.
  * additionalSizes `array`: Additional sizes associated with this placement. When inserting or updating a placement, only the size ID field is used.
    * items [Size](#size)
  * advertiserId `string`: Advertiser ID of this placement. This field can be left blank.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * archived `boolean`: Whether this placement is archived.
  * campaignId `string`: Campaign ID of this placement. This field is a required field on insertion.
  * campaignIdDimensionValue [DimensionValue](#dimensionvalue)
  * comment `string`: Comments for this placement.
  * compatibility `string` (values: DISPLAY, DISPLAY_INTERSTITIAL, APP, APP_INTERSTITIAL, IN_STREAM_VIDEO, IN_STREAM_AUDIO): Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion.
  * contentCategoryId `string`: ID of the content category assigned to this placement.
  * createInfo [LastModifiedInfo](#lastmodifiedinfo)
  * directorySiteId `string`: Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.
  * directorySiteIdDimensionValue [DimensionValue](#dimensionvalue)
  * externalId `string`: External ID for this placement.
  * id `string`: ID of this placement. This is a read-only, auto-generated field.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * keyName `string`: Key name of this placement. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement".
  * lastModifiedInfo [LastModifiedInfo](#lastmodifiedinfo)
  * lookbackConfiguration [LookbackConfiguration](#lookbackconfiguration)
  * name `string`: Name of this placement.This is a required field and must be less than or equal to 256 characters long.
  * paymentApproved `boolean`: Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements.
  * paymentSource `string` (values: PLACEMENT_AGENCY_PAID, PLACEMENT_PUBLISHER_PAID): Payment source for this placement. This is a required field that is read-only after insertion.
  * placementGroupId `string`: ID of this placement's group, if applicable.
  * placementGroupIdDimensionValue [DimensionValue](#dimensionvalue)
  * placementStrategyId `string`: ID of the placement strategy assigned to this placement.
  * pricingSchedule [PricingSchedule](#pricingschedule)
  * primary `boolean`: Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock's primaryPlacementId field to the ID of this placement.
  * publisherUpdateInfo [LastModifiedInfo](#lastmodifiedinfo)
  * siteId `string`: Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.
  * siteIdDimensionValue [DimensionValue](#dimensionvalue)
  * size [Size](#size)
  * sslRequired `boolean`: Whether creatives assigned to this placement must be SSL-compliant.
  * status `string` (values: PENDING_REVIEW, PAYMENT_ACCEPTED, PAYMENT_REJECTED, ACKNOWLEDGE_REJECTION, ACKNOWLEDGE_ACCEPTANCE, DRAFT): Third-party placement status.
  * subaccountId `string`: Subaccount ID of this placement. This field can be left blank.
  * tagFormats `array`: Tag formats to generate for this placement. This field is required on insertion. Acceptable values are: - "PLACEMENT_TAG_STANDARD" - "PLACEMENT_TAG_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_IFRAME_ILAYER" - "PLACEMENT_TAG_INTERNAL_REDIRECT" - "PLACEMENT_TAG_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT" - "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT" - "PLACEMENT_TAG_CLICK_COMMANDS" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4" - "PLACEMENT_TAG_TRACKING" - "PLACEMENT_TAG_TRACKING_IFRAME" - "PLACEMENT_TAG_TRACKING_JAVASCRIPT" 
    * items `string` (values: PLACEMENT_TAG_STANDARD, PLACEMENT_TAG_IFRAME_JAVASCRIPT, PLACEMENT_TAG_IFRAME_ILAYER, PLACEMENT_TAG_INTERNAL_REDIRECT, PLACEMENT_TAG_JAVASCRIPT, PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT, PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT, PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT, PLACEMENT_TAG_CLICK_COMMANDS, PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH, PLACEMENT_TAG_TRACKING, PLACEMENT_TAG_TRACKING_IFRAME, PLACEMENT_TAG_TRACKING_JAVASCRIPT, PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3, PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY, PLACEMENT_TAG_JAVASCRIPT_LEGACY, PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY, PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY, PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4)
  * tagSetting [TagSetting](#tagsetting)
  * videoActiveViewOptOut `boolean`: Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from Verification and ActiveView.
  * videoSettings [VideoSettings](#videosettings)
  * vpaidAdapterChoice `string` (values: DEFAULT, FLASH, HTML5, BOTH): VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement. *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.

### PlacementAssignment
* PlacementAssignment `object`: Placement Assignment.
  * active `boolean`: Whether this placement assignment is active. When true, the placement will be included in the ad's rotation.
  * placementId `string`: ID of the placement to be assigned. This is a required field.
  * placementIdDimensionValue [DimensionValue](#dimensionvalue)
  * sslRequired `boolean`: Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated.

### PlacementGroup
* PlacementGroup `object`: Contains properties of a package or roadblock.
  * accountId `string`: Account ID of this placement group. This is a read-only field that can be left blank.
  * advertiserId `string`: Advertiser ID of this placement group. This is a required field on insertion.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * archived `boolean`: Whether this placement group is archived.
  * campaignId `string`: Campaign ID of this placement group. This field is required on insertion.
  * campaignIdDimensionValue [DimensionValue](#dimensionvalue)
  * childPlacementIds `array`: IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field.
    * items `string`
  * comment `string`: Comments for this placement group.
  * contentCategoryId `string`: ID of the content category assigned to this placement group.
  * createInfo [LastModifiedInfo](#lastmodifiedinfo)
  * directorySiteId `string`: Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
  * directorySiteIdDimensionValue [DimensionValue](#dimensionvalue)
  * externalId `string`: External ID for this placement.
  * id `string`: ID of this placement group. This is a read-only, auto-generated field.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup".
  * lastModifiedInfo [LastModifiedInfo](#lastmodifiedinfo)
  * name `string`: Name of this placement group. This is a required field and must be less than 256 characters long.
  * placementGroupType `string` (values: PLACEMENT_PACKAGE, PLACEMENT_ROADBLOCK): Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion.
  * placementStrategyId `string`: ID of the placement strategy assigned to this placement group.
  * pricingSchedule [PricingSchedule](#pricingschedule)
  * primaryPlacementId `string`: ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements.
  * primaryPlacementIdDimensionValue [DimensionValue](#dimensionvalue)
  * siteId `string`: Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
  * siteIdDimensionValue [DimensionValue](#dimensionvalue)
  * subaccountId `string`: Subaccount ID of this placement group. This is a read-only field that can be left blank.

### PlacementGroupsListResponse
* PlacementGroupsListResponse `object`: Placement Group List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroupsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.
  * placementGroups `array`: Placement group collection.
    * items [PlacementGroup](#placementgroup)

### PlacementStrategiesListResponse
* PlacementStrategiesListResponse `object`: Placement Strategy List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.
  * placementStrategies `array`: Placement strategy collection.
    * items [PlacementStrategy](#placementstrategy)

### PlacementStrategy
* PlacementStrategy `object`: Contains properties of a placement strategy.
  * accountId `string`: Account ID of this placement strategy.This is a read-only field that can be left blank.
  * id `string`: ID of this placement strategy. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategy".
  * name `string`: Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same account.

### PlacementTag
* PlacementTag `object`: Placement Tag
  * placementId `string`: Placement ID
  * tagDatas `array`: Tags generated for this placement.
    * items [TagData](#tagdata)

### PlacementsGenerateTagsResponse
* PlacementsGenerateTagsResponse `object`: Placement GenerateTags Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsGenerateTagsResponse".
  * placementTags `array`: Set of generated tags for the specified placements.
    * items [PlacementTag](#placementtag)

### PlacementsListResponse
* PlacementsListResponse `object`: Placement List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.
  * placements `array`: Placement collection.
    * items [Placement](#placement)

### PlatformType
* PlatformType `object`: Contains information about a platform type that can be targeted by ads.
  * id `string`: ID of this platform type.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformType".
  * name `string`: Name of this platform type.

### PlatformTypesListResponse
* PlatformTypesListResponse `object`: Platform Type List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformTypesListResponse".
  * platformTypes `array`: Platform type collection.
    * items [PlatformType](#platformtype)

### PopupWindowProperties
* PopupWindowProperties `object`: Popup Window Properties.
  * dimension [Size](#size)
  * offset [OffsetPosition](#offsetposition)
  * positionType `string` (values: CENTER, COORDINATES): Popup window position either centered or at specific coordinate.
  * showAddressBar `boolean`: Whether to display the browser address bar.
  * showMenuBar `boolean`: Whether to display the browser menu bar.
  * showScrollBar `boolean`: Whether to display the browser scroll bar.
  * showStatusBar `boolean`: Whether to display the browser status bar.
  * showToolBar `boolean`: Whether to display the browser tool bar.
  * title `string`: Title of popup window.

### PostalCode
* PostalCode `object`: Contains information about a postal code that can be targeted by ads.
  * code `string`: Postal code. This is equivalent to the id field.
  * countryCode `string`: Country code of the country to which this postal code belongs.
  * countryDartId `string`: DART ID of the country to which this postal code belongs.
  * id `string`: ID of this postal code.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCode".

### PostalCodesListResponse
* PostalCodesListResponse `object`: Postal Code List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCodesListResponse".
  * postalCodes `array`: Postal code collection.
    * items [PostalCode](#postalcode)

### Pricing
* Pricing `object`: Pricing Information
  * capCostType `string` (values: PLANNING_PLACEMENT_CAP_COST_TYPE_NONE, PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY, PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE): Cap cost type of this inventory item.
  * endDate `string`
  * flights `array`: Flights of this inventory item. A flight (a.k.a. pricing period) represents the inventory item pricing information for a specific period of time.
    * items [Flight](#flight)
  * groupType `string` (values: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE, PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK): Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary.
  * pricingType `string` (values: PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS, PLANNING_PLACEMENT_PRICING_TYPE_CPM, PLANNING_PLACEMENT_PRICING_TYPE_CLICKS, PLANNING_PLACEMENT_PRICING_TYPE_CPC, PLANNING_PLACEMENT_PRICING_TYPE_CPA, PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS, PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS, PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW): Pricing type of this inventory item.
  * startDate `string`

### PricingSchedule
* PricingSchedule `object`: Pricing Schedule
  * capCostOption `string` (values: CAP_COST_NONE, CAP_COST_MONTHLY, CAP_COST_CUMULATIVE): Placement cap cost option.
  * endDate `string`
  * flighted `boolean`: Whether this placement is flighted. If true, pricing periods will be computed automatically.
  * floodlightActivityId `string`: Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA.
  * pricingPeriods `array`: Pricing periods for this placement.
    * items [PricingSchedulePricingPeriod](#pricingschedulepricingperiod)
  * pricingType `string` (values: PRICING_TYPE_CPM, PRICING_TYPE_CPC, PRICING_TYPE_CPA, PRICING_TYPE_FLAT_RATE_IMPRESSIONS, PRICING_TYPE_FLAT_RATE_CLICKS, PRICING_TYPE_CPM_ACTIVEVIEW): Placement pricing type. This field is required on insertion.
  * startDate `string`
  * testingStartDate `string`

### PricingSchedulePricingPeriod
* PricingSchedulePricingPeriod `object`: Pricing Period
  * endDate `string`
  * pricingComment `string`: Comments for this pricing period.
  * rateOrCostNanos `string`: Rate or cost of this pricing period in nanos (i.e., multipled by 1000000000). Acceptable values are 0 to 1000000000000000000, inclusive.
  * startDate `string`
  * units `string`: Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive.

### Project
* Project `object`: Contains properties of a Planning project.
  * accountId `string`: Account ID of this project.
  * advertiserId `string`: Advertiser ID of this project.
  * audienceAgeGroup `string` (values: PLANNING_AUDIENCE_AGE_18_24, PLANNING_AUDIENCE_AGE_25_34, PLANNING_AUDIENCE_AGE_35_44, PLANNING_AUDIENCE_AGE_45_54, PLANNING_AUDIENCE_AGE_55_64, PLANNING_AUDIENCE_AGE_65_OR_MORE, PLANNING_AUDIENCE_AGE_UNKNOWN): Audience age group of this project.
  * audienceGender `string` (values: PLANNING_AUDIENCE_GENDER_MALE, PLANNING_AUDIENCE_GENDER_FEMALE): Audience gender of this project.
  * budget `string`: Budget of this project in the currency specified by the current account. The value stored in this field represents only the non-fractional amount. For example, for USD, the smallest value that can be represented by this field is 1 US dollar.
  * clientBillingCode `string`: Client billing code of this project.
  * clientName `string`: Name of the project client.
  * endDate `string`
  * id `string`: ID of this project. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#project".
  * lastModifiedInfo [LastModifiedInfo](#lastmodifiedinfo)
  * name `string`: Name of this project.
  * overview `string`: Overview of this project.
  * startDate `string`
  * subaccountId `string`: Subaccount ID of this project.
  * targetClicks `string`: Number of clicks that the advertiser is targeting.
  * targetConversions `string`: Number of conversions that the advertiser is targeting.
  * targetCpaNanos `string`: CPA that the advertiser is targeting.
  * targetCpcNanos `string`: CPC that the advertiser is targeting.
  * targetCpmActiveViewNanos `string`: vCPM from Active View that the advertiser is targeting.
  * targetCpmNanos `string`: CPM that the advertiser is targeting.
  * targetImpressions `string`: Number of impressions that the advertiser is targeting.

### ProjectsListResponse
* ProjectsListResponse `object`: Project List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#projectsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.
  * projects `array`: Project collection.
    * items [Project](#project)

### ReachReportCompatibleFields
* ReachReportCompatibleFields `object`: Represents fields that are compatible to be selected for a report of type "REACH".
  * dimensionFilters `array`: Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
    * items [Dimension](#dimension)
  * dimensions `array`: Dimensions which are compatible to be selected in the "dimensions" section of the report.
    * items [Dimension](#dimension)
  * kind `string`: The kind of resource this is, in this case dfareporting#reachReportCompatibleFields.
  * metrics `array`: Metrics which are compatible to be selected in the "metricNames" section of the report.
    * items [Metric](#metric)
  * pivotedActivityMetrics `array`: Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.
    * items [Metric](#metric)
  * reachByFrequencyMetrics `array`: Metrics which are compatible to be selected in the "reachByFrequencyMetricNames" section of the report.
    * items [Metric](#metric)

### Recipient
* Recipient `object`: Represents a recipient.
  * deliveryType `string` (values: LINK, ATTACHMENT): The delivery type for the recipient.
  * email `string`: The email address of the recipient.
  * kind `string`: The kind of resource this is, in this case dfareporting#recipient.

### Region
* Region `object`: Contains information about a region that can be targeted by ads.
  * countryCode `string`: Country code of the country to which this region belongs.
  * countryDartId `string`: DART ID of the country to which this region belongs.
  * dartId `string`: DART ID of this region.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#region".
  * name `string`: Name of this region.
  * regionCode `string`: Region code.

### RegionsListResponse
* RegionsListResponse `object`: Region List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#regionsListResponse".
  * regions `array`: Region collection.
    * items [Region](#region)

### RemarketingList
* RemarketingList `object`: Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.
  * accountId `string`: Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
  * active `boolean`: Whether this remarketing list is active.
  * advertiserId `string`: Dimension value for the advertiser ID that owns this remarketing list. This is a required field.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * description `string`: Remarketing list description.
  * id `string`: Remarketing list ID. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingList".
  * lifeSpan `string`: Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540, inclusive.
  * listPopulationRule [ListPopulationRule](#listpopulationrule)
  * listSize `string`: Number of users currently in the list. This is a read-only field.
  * listSource `string` (values: REMARKETING_LIST_SOURCE_OTHER, REMARKETING_LIST_SOURCE_ADX, REMARKETING_LIST_SOURCE_DFP, REMARKETING_LIST_SOURCE_XFP, REMARKETING_LIST_SOURCE_DFA, REMARKETING_LIST_SOURCE_GA, REMARKETING_LIST_SOURCE_YOUTUBE, REMARKETING_LIST_SOURCE_DBM, REMARKETING_LIST_SOURCE_GPLUS, REMARKETING_LIST_SOURCE_DMP, REMARKETING_LIST_SOURCE_PLAY_STORE): Product from which this remarketing list was originated.
  * name `string`: Name of the remarketing list. This is a required field. Must be no greater than 128 characters long.
  * subaccountId `string`: Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.

### RemarketingListShare
* RemarketingListShare `object`: Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListShare".
  * remarketingListId `string`: Remarketing list ID. This is a read-only, auto-generated field.
  * sharedAccountIds `array`: Accounts that the remarketing list is shared with.
    * items `string`
  * sharedAdvertiserIds `array`: Advertisers that the remarketing list is shared with.
    * items `string`

### RemarketingListsListResponse
* RemarketingListsListResponse `object`: Remarketing list response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.
  * remarketingLists `array`: Remarketing list collection.
    * items [RemarketingList](#remarketinglist)

### Report
* Report `object`: Represents a Report resource.
  * accountId `string`: The account ID to which this report belongs.
  * criteria `object`: The report criteria for a report of type "STANDARD".
    * activities [Activities](#activities)
    * customRichMediaEvents [CustomRichMediaEvents](#customrichmediaevents)
    * dateRange [DateRange](#daterange)
    * dimensionFilters `array`: The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
      * items [DimensionValue](#dimensionvalue)
    * dimensions `array`: The list of standard dimensions the report should include.
      * items [SortedDimension](#sorteddimension)
    * metricNames `array`: The list of names of metrics the report should include.
      * items `string`
  * crossDimensionReachCriteria `object`: The report criteria for a report of type "CROSS_DIMENSION_REACH".
    * breakdown `array`: The list of dimensions the report should include.
      * items [SortedDimension](#sorteddimension)
    * dateRange [DateRange](#daterange)
    * dimension `string` (values: ADVERTISER, CAMPAIGN, SITE_BY_ADVERTISER, SITE_BY_CAMPAIGN): The dimension option.
    * dimensionFilters `array`: The list of filters on which dimensions are filtered.
      * items [DimensionValue](#dimensionvalue)
    * metricNames `array`: The list of names of metrics the report should include.
      * items `string`
    * overlapMetricNames `array`: The list of names of overlap metrics the report should include.
      * items `string`
    * pivoted `boolean`: Whether the report is pivoted or not. Defaults to true.
  * delivery `object`: The report's email delivery settings.
    * emailOwner `boolean`: Whether the report should be emailed to the report owner.
    * emailOwnerDeliveryType `string` (values: LINK, ATTACHMENT): The type of delivery for the owner to receive, if enabled.
    * message `string`: The message to be sent with each email.
    * recipients `array`: The list of recipients to which to email the report.
      * items [Recipient](#recipient)
  * etag `string`: The eTag of this response for caching purposes.
  * fileName `string`: The filename used when generating report files for this report.
  * floodlightCriteria `object`: The report criteria for a report of type "FLOODLIGHT".
    * customRichMediaEvents `array`: The list of custom rich media events to include.
      * items [DimensionValue](#dimensionvalue)
    * dateRange [DateRange](#daterange)
    * dimensionFilters `array`: The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
      * items [DimensionValue](#dimensionvalue)
    * dimensions `array`: The list of dimensions the report should include.
      * items [SortedDimension](#sorteddimension)
    * floodlightConfigId [DimensionValue](#dimensionvalue)
    * metricNames `array`: The list of names of metrics the report should include.
      * items `string`
    * reportProperties `object`: The properties of the report.
      * includeAttributedIPConversions `boolean`: Include conversions that have no cookie, but do have an exposure path.
      * includeUnattributedCookieConversions `boolean`: Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window.
      * includeUnattributedIPConversions `boolean`: Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion.
  * format `string` (values: CSV, EXCEL): The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report's size exceeds the format's capabilities. "CSV" will then be the fallback format.
  * id `string`: The unique ID identifying this report resource.
  * kind `string`: The kind of resource this is, in this case dfareporting#report.
  * lastModifiedTime `string`: The timestamp (in milliseconds since epoch) of when this report was last modified.
  * name `string`: The name of the report.
  * ownerProfileId `string`: The user profile id of the owner of this report.
  * pathAttributionCriteria `object`: The report criteria for a report of type "PATH_ATTRIBUTION".
    * activityFilters `array`: The list of 'dfa:activity' values to filter on.
      * items [DimensionValue](#dimensionvalue)
    * customChannelGrouping [ChannelGrouping](#channelgrouping)
    * dateRange [DateRange](#daterange)
    * dimensions `array`: The list of dimensions the report should include.
      * items [SortedDimension](#sorteddimension)
    * floodlightConfigId [DimensionValue](#dimensionvalue)
    * metricNames `array`: The list of names of metrics the report should include.
      * items `string`
    * pathFilters `array`: Path Filters.
      * items [PathFilter](#pathfilter)
  * pathCriteria `object`: The report criteria for a report of type "PATH".
    * activityFilters `array`: The list of 'dfa:activity' values to filter on.
      * items [DimensionValue](#dimensionvalue)
    * customChannelGrouping [ChannelGrouping](#channelgrouping)
    * dateRange [DateRange](#daterange)
    * dimensions `array`: The list of dimensions the report should include.
      * items [SortedDimension](#sorteddimension)
    * floodlightConfigId [DimensionValue](#dimensionvalue)
    * metricNames `array`: The list of names of metrics the report should include.
      * items `string`
    * pathFilters `array`: Path Filters.
      * items [PathFilter](#pathfilter)
  * pathToConversionCriteria `object`: The report criteria for a report of type "PATH_TO_CONVERSION".
    * activityFilters `array`: The list of 'dfa:activity' values to filter on.
      * items [DimensionValue](#dimensionvalue)
    * conversionDimensions `array`: The list of conversion dimensions the report should include.
      * items [SortedDimension](#sorteddimension)
    * customFloodlightVariables `array`: The list of custom floodlight variables the report should include.
      * items [SortedDimension](#sorteddimension)
    * customRichMediaEvents `array`: The list of custom rich media events to include.
      * items [DimensionValue](#dimensionvalue)
    * dateRange [DateRange](#daterange)
    * floodlightConfigId [DimensionValue](#dimensionvalue)
    * metricNames `array`: The list of names of metrics the report should include.
      * items `string`
    * perInteractionDimensions `array`: The list of per interaction dimensions the report should include.
      * items [SortedDimension](#sorteddimension)
    * reportProperties `object`: The properties of the report.
      * clicksLookbackWindow `integer`: DFA checks to see if a click interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90.
      * impressionsLookbackWindow `integer`: DFA checks to see if an impression interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90.
      * includeAttributedIPConversions `boolean`: Deprecated: has no effect.
      * includeUnattributedCookieConversions `boolean`: Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window.
      * includeUnattributedIPConversions `boolean`: Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion.
      * maximumClickInteractions `integer`: The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report.
      * maximumImpressionInteractions `integer`: The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report.
      * maximumInteractionGap `integer`: The maximum amount of time that can take place between interactions (clicks or impressions) by the same user. Valid values: 1-90.
      * pivotOnInteractionPath `boolean`: Enable pivoting on interaction path.
  * reachCriteria `object`: The report criteria for a report of type "REACH".
    * activities [Activities](#activities)
    * customRichMediaEvents [CustomRichMediaEvents](#customrichmediaevents)
    * dateRange [DateRange](#daterange)
    * dimensionFilters `array`: The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.
      * items [DimensionValue](#dimensionvalue)
    * dimensions `array`: The list of dimensions the report should include.
      * items [SortedDimension](#sorteddimension)
    * enableAllDimensionCombinations `boolean`: Whether to enable all reach dimension combinations in the report. Defaults to false. If enabled, the date range of the report should be within the last 42 days.
    * metricNames `array`: The list of names of metrics the report should include.
      * items `string`
    * reachByFrequencyMetricNames `array`: The list of names of Reach By Frequency metrics the report should include.
      * items `string`
  * schedule `object`: The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not "TODAY".
    * active `boolean`: Whether the schedule is active or not. Must be set to either true or false.
    * every `integer`: Defines every how many days, weeks or months the report should be run. Needs to be set when "repeats" is either "DAILY", "WEEKLY" or "MONTHLY".
    * expirationDate `string`
    * repeats `string`: The interval for which the report is repeated. Note: - "DAILY" also requires field "every" to be set. - "WEEKLY" also requires fields "every" and "repeatsOnWeekDays" to be set. - "MONTHLY" also requires fields "every" and "runsOnDayOfMonth" to be set. 
    * repeatsOnWeekDays `array`: List of week days "WEEKLY" on which scheduled reports should run.
      * items `string` (values: SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY)
    * runsOnDayOfMonth `string` (values: DAY_OF_MONTH, WEEK_OF_MONTH): Enum to define for "MONTHLY" scheduled reports whether reports should be repeated on the same day of the month as "startDate" or the same day of the week of the month. Example: If 'startDate' is Monday, April 2nd 2012 (2012-04-02), "DAY_OF_MONTH" would run subsequent reports on the 2nd of every Month, and "WEEK_OF_MONTH" would run subsequent reports on the first Monday of the month.
    * startDate `string`
  * subAccountId `string`: The subaccount ID to which this report belongs if applicable.
  * type `string` (values: STANDARD, REACH, PATH_TO_CONVERSION, CROSS_DIMENSION_REACH, FLOODLIGHT, PATH, PATH_ATTRIBUTION): The type of the report.

### ReportCompatibleFields
* ReportCompatibleFields `object`: Represents fields that are compatible to be selected for a report of type "STANDARD".
  * dimensionFilters `array`: Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.
    * items [Dimension](#dimension)
  * dimensions `array`: Dimensions which are compatible to be selected in the "dimensions" section of the report.
    * items [Dimension](#dimension)
  * kind `string`: The kind of resource this is, in this case dfareporting#reportCompatibleFields.
  * metrics `array`: Metrics which are compatible to be selected in the "metricNames" section of the report.
    * items [Metric](#metric)
  * pivotedActivityMetrics `array`: Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.
    * items [Metric](#metric)

### ReportList
* ReportList `object`: Represents the list of reports.
  * etag `string`: The eTag of this response for caching purposes.
  * items `array`: The reports returned in this response.
    * items [Report](#report)
  * kind `string`: The kind of list this is, in this case dfareporting#reportList.
  * nextPageToken `string`: Continuation token used to page through reports. To retrieve the next page of results, set the next request's "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.

### ReportsConfiguration
* ReportsConfiguration `object`: Reporting Configuration
  * exposureToConversionEnabled `boolean`: Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting.
  * lookbackConfiguration [LookbackConfiguration](#lookbackconfiguration)
  * reportGenerationTimeZoneId `string`: Report generation time zone ID of this account. This is a required field that can only be changed by a superuser. Acceptable values are: - "1" for "America/New_York" - "2" for "Europe/London" - "3" for "Europe/Paris" - "4" for "Africa/Johannesburg" - "5" for "Asia/Jerusalem" - "6" for "Asia/Shanghai" - "7" for "Asia/Hong_Kong" - "8" for "Asia/Tokyo" - "9" for "Australia/Sydney" - "10" for "Asia/Dubai" - "11" for "America/Los_Angeles" - "12" for "Pacific/Auckland" - "13" for "America/Sao_Paulo" - "16" for "America/Asuncion" - "17" for "America/Chicago" - "18" for "America/Denver" - "19" for "America/St_Johns" - "20" for "Asia/Dhaka" - "21" for "Asia/Jakarta" - "22" for "Asia/Kabul" - "23" for "Asia/Karachi" - "24" for "Asia/Calcutta" - "25" for "Asia/Pyongyang" - "26" for "Asia/Rangoon" - "27" for "Atlantic/Cape_Verde" - "28" for "Atlantic/South_Georgia" - "29" for "Australia/Adelaide" - "30" for "Australia/Lord_Howe" - "31" for "Europe/Moscow" - "32" for "Pacific/Kiritimati" - "35" for "Pacific/Norfolk" - "36" for "Pacific/Tongatapu" 

### RichMediaExitOverride
* RichMediaExitOverride `object`: Rich Media Exit Override.
  * clickThroughUrl [ClickThroughUrl](#clickthroughurl)
  * enabled `boolean`: Whether to use the clickThroughUrl. If false, the creative-level exit will be used.
  * exitId `string`: ID for the override to refer to a specific exit in the creative.

### Rule
* Rule `object`: A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives.
  * assetId `string`: A creativeAssets[].id. This should refer to one of the parent assets in this creative. This is a required field.
  * name `string`: A user-friendly name for this rule. This is a required field.
  * targetingTemplateId `string`: A targeting template ID. The targeting from the targeting template will be used to determine whether this asset should be served. This is a required field.

### Site
* Site `object`: Contains properties of a site.
  * accountId `string`: Account ID of this site. This is a read-only field that can be left blank.
  * approved `boolean`: Whether this site is approved.
  * directorySiteId `string`: Directory site associated with this site. This is a required field that is read-only after insertion.
  * directorySiteIdDimensionValue [DimensionValue](#dimensionvalue)
  * id `string`: ID of this site. This is a read-only, auto-generated field.
  * idDimensionValue [DimensionValue](#dimensionvalue)
  * keyName `string`: Key name of this site. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#site".
  * name `string`: Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account.
  * siteContacts `array`: Site contacts.
    * items [SiteContact](#sitecontact)
  * siteSettings [SiteSettings](#sitesettings)
  * subaccountId `string`: Subaccount ID of this site. This is a read-only field that can be left blank.
  * videoSettings [SiteVideoSettings](#sitevideosettings)

### SiteCompanionSetting
* SiteCompanionSetting `object`: Companion Settings
  * companionsDisabled `boolean`: Whether companions are disabled for this site template.
  * enabledSizes `array`: Allowlist of companion sizes to be served via this site template. Set this list to null or empty to serve all companion sizes.
    * items [Size](#size)
  * imageOnly `boolean`: Whether to serve only static images as companions.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteCompanionSetting".

### SiteContact
* SiteContact `object`: Site Contact
  * address `string`: Address of this site contact.
  * contactType `string` (values: SALES_PERSON, TRAFFICKER): Site contact type.
  * email `string`: Email address of this site contact. This is a required field.
  * firstName `string`: First name of this site contact.
  * id `string`: ID of this site contact. This is a read-only, auto-generated field.
  * lastName `string`: Last name of this site contact.
  * phone `string`: Primary phone number of this site contact.
  * title `string`: Title or designation of this site contact.

### SiteSettings
* SiteSettings `object`: Site Settings
  * activeViewOptOut `boolean`: Whether active view creatives are disabled for this site.
  * adBlockingOptOut `boolean`: Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site, regardless of the individual placement settings. When false, the campaign and placement settings take effect.
  * disableNewCookie `boolean`: Whether new cookies are disabled for this site.
  * tagSetting [TagSetting](#tagsetting)
  * videoActiveViewOptOutTemplate `boolean`: Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created under this site. This value will be used to populate the placement.videoActiveViewOptOut field, when no value is specified for the new placement.
  * vpaidAdapterChoiceTemplate `string` (values: DEFAULT, FLASH, HTML5, BOTH): Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to the placement. The publisher's specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID creatives use the HTML5 adapter). *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.

### SiteSkippableSetting
* SiteSkippableSetting `object`: Skippable Settings
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteSkippableSetting".
  * progressOffset [VideoOffset](#videooffset)
  * skipOffset [VideoOffset](#videooffset)
  * skippable `boolean`: Whether the user can skip creatives served to this site. This will act as default for new placements created under this site.

### SiteTranscodeSetting
* SiteTranscodeSetting `object`: Transcode Settings
  * enabledVideoFormats `array`: Allowlist of video formats to be served to this site template. Set this list to null or empty to serve all video formats.
    * items `integer`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteTranscodeSetting".

### SiteVideoSettings
* SiteVideoSettings `object`: Video Settings
  * companionSettings [SiteCompanionSetting](#sitecompanionsetting)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteVideoSettings".
  * obaEnabled `boolean`: Whether OBA icons are enabled for this placement.
  * obaSettings [ObaIcon](#obaicon)
  * orientation `string` (values: ANY, LANDSCAPE, PORTRAIT): Orientation of a site template used for video. This will act as default for new placements created under this site.
  * skippableSettings [SiteSkippableSetting](#siteskippablesetting)
  * transcodeSettings [SiteTranscodeSetting](#sitetranscodesetting)

### SitesListResponse
* SitesListResponse `object`: Site List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#sitesListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.
  * sites `array`: Site collection.
    * items [Site](#site)

### Size
* Size `object`: Represents the dimensions of ads, placements, creatives, or creative assets.
  * height `integer`: Height of this size. Acceptable values are 0 to 32767, inclusive.
  * iab `boolean`: IAB standard size. This is a read-only, auto-generated field.
  * id `string`: ID of this size. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#size".
  * width `integer`: Width of this size. Acceptable values are 0 to 32767, inclusive.

### SizesListResponse
* SizesListResponse `object`: Size List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#sizesListResponse".
  * sizes `array`: Size collection.
    * items [Size](#size)

### SkippableSetting
* SkippableSetting `object`: Skippable Settings
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#skippableSetting".
  * progressOffset [VideoOffset](#videooffset)
  * skipOffset [VideoOffset](#videooffset)
  * skippable `boolean`: Whether the user can skip creatives served to this placement.

### SortedDimension
* SortedDimension `object`: Represents a sorted dimension.
  * kind `string`: The kind of resource this is, in this case dfareporting#sortedDimension.
  * name `string`: The name of the dimension.
  * sortOrder `string` (values: ASCENDING, DESCENDING): An optional sort order for the dimension column.

### Subaccount
* Subaccount `object`: Contains properties of a Campaign Manager subaccount.
  * accountId `string`: ID of the account that contains this subaccount. This is a read-only field that can be left blank.
  * availablePermissionIds `array`: IDs of the available user role permissions for this subaccount.
    * items `string`
  * id `string`: ID of this subaccount. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccount".
  * name `string`: Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account.

### SubaccountsListResponse
* SubaccountsListResponse `object`: Subaccount List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccountsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.
  * subaccounts `array`: Subaccount collection.
    * items [Subaccount](#subaccount)

### TagData
* TagData `object`: Placement Tag Data
  * adId `string`: Ad associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING.
  * clickTag `string`: Tag string to record a click.
  * creativeId `string`: Creative associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING.
  * format `string` (values: PLACEMENT_TAG_STANDARD, PLACEMENT_TAG_IFRAME_JAVASCRIPT, PLACEMENT_TAG_IFRAME_ILAYER, PLACEMENT_TAG_INTERNAL_REDIRECT, PLACEMENT_TAG_JAVASCRIPT, PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT, PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT, PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT, PLACEMENT_TAG_CLICK_COMMANDS, PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH, PLACEMENT_TAG_TRACKING, PLACEMENT_TAG_TRACKING_IFRAME, PLACEMENT_TAG_TRACKING_JAVASCRIPT, PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3, PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY, PLACEMENT_TAG_JAVASCRIPT_LEGACY, PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY, PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY, PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4): TagData tag format of this tag.
  * impressionTag `string`: Tag string for serving an ad.

### TagSetting
* TagSetting `object`: Tag Settings
  * additionalKeyValues `string`: Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for this field.
  * includeClickThroughUrls `boolean`: Whether static landing page URLs should be included in the tags. This setting applies only to placements.
  * includeClickTracking `boolean`: Whether click-tracking string should be included in the tags.
  * keywordOption `string` (values: PLACEHOLDER_WITH_LIST_OF_KEYWORDS, IGNORE, GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD): Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders.

### TagSettings
* TagSettings `object`: Dynamic and Image Tag Settings.
  * dynamicTagEnabled `boolean`: Whether dynamic floodlight tags are enabled.
  * imageTagEnabled `boolean`: Whether image tags are enabled.

### TargetWindow
* TargetWindow `object`: Target Window.
  * customHtml `string`: User-entered value.
  * targetWindowOption `string` (values: NEW_WINDOW, CURRENT_WINDOW, CUSTOM): Type of browser window for which the backup image of the flash creative can be displayed.

### TargetableRemarketingList
* TargetableRemarketingList `object`: Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to faciliate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource.
  * accountId `string`: Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.
  * active `boolean`: Whether this targetable remarketing list is active.
  * advertiserId `string`: Dimension value for the advertiser ID that owns this targetable remarketing list.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * description `string`: Targetable remarketing list description.
  * id `string`: Targetable remarketing list ID.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingList".
  * lifeSpan `string`: Number of days that a user should remain in the targetable remarketing list without an impression.
  * listSize `string`: Number of users currently in the list. This is a read-only field.
  * listSource `string` (values: REMARKETING_LIST_SOURCE_OTHER, REMARKETING_LIST_SOURCE_ADX, REMARKETING_LIST_SOURCE_DFP, REMARKETING_LIST_SOURCE_XFP, REMARKETING_LIST_SOURCE_DFA, REMARKETING_LIST_SOURCE_GA, REMARKETING_LIST_SOURCE_YOUTUBE, REMARKETING_LIST_SOURCE_DBM, REMARKETING_LIST_SOURCE_GPLUS, REMARKETING_LIST_SOURCE_DMP, REMARKETING_LIST_SOURCE_PLAY_STORE): Product from which this targetable remarketing list was originated.
  * name `string`: Name of the targetable remarketing list. Is no greater than 128 characters long.
  * subaccountId `string`: Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.

### TargetableRemarketingListsListResponse
* TargetableRemarketingListsListResponse `object`: Targetable remarketing list response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingListsListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.
  * targetableRemarketingLists `array`: Targetable remarketing list collection.
    * items [TargetableRemarketingList](#targetableremarketinglist)

### TargetingTemplate
* TargetingTemplate `object`: Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.
  * accountId `string`: Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert.
  * advertiserId `string`: Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert.
  * advertiserIdDimensionValue [DimensionValue](#dimensionvalue)
  * dayPartTargeting [DayPartTargeting](#dayparttargeting)
  * geoTargeting [GeoTargeting](#geotargeting)
  * id `string`: ID of this targeting template. This is a read-only, auto-generated field.
  * keyValueTargetingExpression [KeyValueTargetingExpression](#keyvaluetargetingexpression)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplate".
  * languageTargeting [LanguageTargeting](#languagetargeting)
  * listTargetingExpression [ListTargetingExpression](#listtargetingexpression)
  * name `string`: Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an advertiser.
  * subaccountId `string`: Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert.
  * technologyTargeting [TechnologyTargeting](#technologytargeting)

### TargetingTemplatesListResponse
* TargetingTemplatesListResponse `object`: Targeting Template List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplatesListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.
  * targetingTemplates `array`: Targeting template collection.
    * items [TargetingTemplate](#targetingtemplate)

### TechnologyTargeting
* TechnologyTargeting `object`: Technology Targeting.
  * browsers `array`: Browsers that this ad targets. For each browser either set browserVersionId or dartId along with the version numbers. If both are specified, only browserVersionId will be used. The other fields are populated automatically when the ad is inserted or updated.
    * items [Browser](#browser)
  * connectionTypes `array`: Connection types that this ad targets. For each connection type only id is required. The other fields are populated automatically when the ad is inserted or updated.
    * items [ConnectionType](#connectiontype)
  * mobileCarriers `array`: Mobile carriers that this ad targets. For each mobile carrier only id is required, and the other fields are populated automatically when the ad is inserted or updated. If targeting a mobile carrier, do not set targeting for any zip codes.
    * items [MobileCarrier](#mobilecarrier)
  * operatingSystemVersions `array`: Operating system versions that this ad targets. To target all versions, use operatingSystems. For each operating system version, only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system version, do not set targeting for the corresponding operating system in operatingSystems.
    * items [OperatingSystemVersion](#operatingsystemversion)
  * operatingSystems `array`: Operating systems that this ad targets. To target specific versions, use operatingSystemVersions. For each operating system only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system, do not set targeting for operating system versions for the same operating system.
    * items [OperatingSystem](#operatingsystem)
  * platformTypes `array`: Platform types that this ad targets. For example, desktop, mobile, or tablet. For each platform type, only id is required, and the other fields are populated automatically when the ad is inserted or updated.
    * items [PlatformType](#platformtype)

### ThirdPartyAuthenticationToken
* ThirdPartyAuthenticationToken `object`: Third Party Authentication Token
  * name `string`: Name of the third-party authentication token.
  * value `string`: Value of the third-party authentication token. This is a read-only, auto-generated field.

### ThirdPartyTrackingUrl
* ThirdPartyTrackingUrl `object`: Third-party Tracking URL.
  * thirdPartyUrlType `string` (values: IMPRESSION, CLICK_TRACKING, VIDEO_START, VIDEO_FIRST_QUARTILE, VIDEO_MIDPOINT, VIDEO_THIRD_QUARTILE, VIDEO_COMPLETE, VIDEO_MUTE, VIDEO_PAUSE, VIDEO_REWIND, VIDEO_FULLSCREEN, VIDEO_STOP, VIDEO_CUSTOM, SURVEY, RICH_MEDIA_IMPRESSION, RICH_MEDIA_RM_IMPRESSION, RICH_MEDIA_BACKUP_IMPRESSION, VIDEO_SKIP, VIDEO_PROGRESS): Third-party URL type for in-stream video and in-stream audio creatives.
  * url `string`: URL for the specified third-party URL type.

### TranscodeSetting
* TranscodeSetting `object`: Transcode Settings
  * enabledVideoFormats `array`: Allowlist of video formats to be served to this placement. Set this list to null or empty to serve all video formats.
    * items `integer`
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#transcodeSetting".

### UniversalAdId
* UniversalAdId `object`: A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID.
  * registry `string` (values: OTHER, AD_ID_OFFICIAL, CLEARCAST, DCM): Registry used for the Ad ID value.
  * value `string`: ID value for this creative. Only alphanumeric characters and the following symbols are valid: "_/\-". Maximum length is 64 characters. Read only when registry is DCM.

### UserDefinedVariableConfiguration
* UserDefinedVariableConfiguration `object`: User Defined Variable configuration.
  * dataType `string` (values: STRING, NUMBER): Data type for the variable. This is a required field.
  * reportName `string`: User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain the following characters: ""<>".
  * variableType `string` (values: U1, U2, U3, U4, U5, U6, U7, U8, U9, U10, U11, U12, U13, U14, U15, U16, U17, U18, U19, U20, U21, U22, U23, U24, U25, U26, U27, U28, U29, U30, U31, U32, U33, U34, U35, U36, U37, U38, U39, U40, U41, U42, U43, U44, U45, U46, U47, U48, U49, U50, U51, U52, U53, U54, U55, U56, U57, U58, U59, U60, U61, U62, U63, U64, U65, U66, U67, U68, U69, U70, U71, U72, U73, U74, U75, U76, U77, U78, U79, U80, U81, U82, U83, U84, U85, U86, U87, U88, U89, U90, U91, U92, U93, U94, U95, U96, U97, U98, U99, U100): Variable name in the tag. This is a required field.

### UserProfile
* UserProfile `object`: A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests. 
  * accountId `string`: The account ID to which this profile belongs.
  * accountName `string`: The account name this profile belongs to.
  * etag `string`: Etag of this resource.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfile".
  * profileId `string`: The unique ID of the user profile.
  * subAccountId `string`: The sub account ID this profile belongs to if applicable.
  * subAccountName `string`: The sub account name this profile belongs to if applicable.
  * userName `string`: The user name.

### UserProfileList
* UserProfileList `object`: Represents the list of user profiles.
  * etag `string`: Etag of this resource.
  * items `array`: The user profiles returned in this response.
    * items [UserProfile](#userprofile)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfileList".

### UserRole
* UserRole `object`: Contains properties of auser role, which is used to manage user access.
  * accountId `string`: Account ID of this user role. This is a read-only field that can be left blank.
  * defaultUserRole `boolean`: Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each default user role comes with a basic set of preassigned permissions.
  * id `string`: ID of this user role. This is a read-only, auto-generated field.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRole".
  * name `string`: Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles of the same account.
  * parentUserRoleId `string`: ID of the user role that this user role is based on or copied from. This is a required field.
  * permissions `array`: List of permissions associated with this user role.
    * items [UserRolePermission](#userrolepermission)
  * subaccountId `string`: Subaccount ID of this user role. This is a read-only field that can be left blank.

### UserRolePermission
* UserRolePermission `object`: Contains properties of a user role permission.
  * availability `string` (values: NOT_AVAILABLE_BY_DEFAULT, ACCOUNT_BY_DEFAULT, SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT, ACCOUNT_ALWAYS, SUBACCOUNT_AND_ACCOUNT_ALWAYS): Levels of availability for a user role permission.
  * id `string`: ID of this user role permission.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission".
  * name `string`: Name of this user role permission.
  * permissionGroupId `string`: ID of the permission group that this user role permission belongs to.

### UserRolePermissionGroup
* UserRolePermissionGroup `object`: Represents a grouping of related user role permissions.
  * id `string`: ID of this user role permission.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroup".
  * name `string`: Name of this user role permission group.

### UserRolePermissionGroupsListResponse
* UserRolePermissionGroupsListResponse `object`: User Role Permission Group List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroupsListResponse".
  * userRolePermissionGroups `array`: User role permission group collection.
    * items [UserRolePermissionGroup](#userrolepermissiongroup)

### UserRolePermissionsListResponse
* UserRolePermissionsListResponse `object`: User Role Permission List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionsListResponse".
  * userRolePermissions `array`: User role permission collection.
    * items [UserRolePermission](#userrolepermission)

### UserRolesListResponse
* UserRolesListResponse `object`: User Role List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolesListResponse".
  * nextPageToken `string`: Pagination token to be used for the next list operation.
  * userRoles `array`: User role collection.
    * items [UserRole](#userrole)

### VideoFormat
* VideoFormat `object`: Contains information about supported video formats.
  * fileType `string` (values: FLV, THREEGPP, MP4, WEBM, M3U8): File type of the video format.
  * id `integer`: ID of the video format.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormat".
  * resolution [Size](#size)
  * targetBitRate `integer`: The target bit rate of this video format.

### VideoFormatsListResponse
* VideoFormatsListResponse `object`: Video Format List Response
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormatsListResponse".
  * videoFormats `array`: Video format collection.
    * items [VideoFormat](#videoformat)

### VideoOffset
* VideoOffset `object`: Video Offset
  * offsetPercentage `integer`: Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100, inclusive.
  * offsetSeconds `integer`: Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive.

### VideoSettings
* VideoSettings `object`: Video Settings
  * companionSettings [CompanionSetting](#companionsetting)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoSettings".
  * obaEnabled `boolean`: Whether OBA icons are enabled for this placement.
  * obaSettings [ObaIcon](#obaicon)
  * orientation `string` (values: ANY, LANDSCAPE, PORTRAIT): Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation.
  * skippableSettings [SkippableSetting](#skippablesetting)
  * transcodeSettings [TranscodeSetting](#transcodesetting)


