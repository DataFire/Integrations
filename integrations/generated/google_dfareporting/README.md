# @datafire/google_dfareporting

Client library for DCM/DFA Reporting And Trafficking

## Installation and Usage
```bash
npm install --save datafire @datafire/google_dfareporting
```

```js
let datafire = require('datafire');
let google_dfareporting = require('@datafire/google_dfareporting').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_dfareporting.userProfiles.list({}).then(data => {
  console.log(data);
})
```

## Description
Manages your DoubleClick Campaign Manager ad campaigns and reports.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_dfareporting.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_dfareporting.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### files.get
Retrieves a report file by its report ID and file ID. This method supports media download.


```js
google_dfareporting.files.get({
  "reportId": "",
  "fileId": ""
}, context)
```

#### Parameters
* reportId (string) **required** - The ID of the report.
* fileId (string) **required** - The ID of the report file.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userProfiles.list
Retrieves list of user profiles for a user.


```js
google_dfareporting.userProfiles.list({}, context)
```

#### Parameters
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userProfiles.get
Gets one user profile by ID.


```js
google_dfareporting.userProfiles.get({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - The user profile ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountActiveAdSummaries.get
Gets the account's active ad summary by account ID.


```js
google_dfareporting.accountActiveAdSummaries.get({
  "profileId": "",
  "summaryAccountId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* summaryAccountId (string) **required** - Account ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountPermissionGroups.list
Retrieves the list of account permission groups.


```js
google_dfareporting.accountPermissionGroups.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountPermissionGroups.get
Gets one account permission group by ID.


```js
google_dfareporting.accountPermissionGroups.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Account permission group ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountPermissions.list
Retrieves the list of account permissions.


```js
google_dfareporting.accountPermissions.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountPermissions.get
Gets one account permission by ID.


```js
google_dfareporting.accountPermissions.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Account permission ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountUserProfiles.list
Retrieves a list of account user profiles, possibly filtered. This method supports paging.


```js
google_dfareporting.accountUserProfiles.list({
  "profileId": ""
}, context)
```

#### Parameters
* active (boolean) - Select only active user profiles.
* ids (array) - Select only user profiles with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* subaccountId (string) - Select only user profiles with the specified subaccount ID.
* userRoleId (string) - Select only user profiles with the specified user role ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountUserProfiles.patch
Updates an existing account user profile. This method supports patch semantics.


```js
google_dfareporting.accountUserProfiles.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - User profile ID.
* body (object) - AccountUserProfiles contains properties of a DCM user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountUserProfiles.insert
Inserts a new account user profile.


```js
google_dfareporting.accountUserProfiles.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - AccountUserProfiles contains properties of a DCM user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountUserProfiles.update
Updates an existing account user profile.


```js
google_dfareporting.accountUserProfiles.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - AccountUserProfiles contains properties of a DCM user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accountUserProfiles.get
Gets one account user profile by ID.


```js
google_dfareporting.accountUserProfiles.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - User profile ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.list
Retrieves the list of accounts, possibly filtered. This method supports paging.


```js
google_dfareporting.accounts.list({
  "profileId": ""
}, context)
```

#### Parameters
* active (boolean) - Select only active accounts. Don't set this field to select both active and non-active accounts.
* ids (array) - Select only accounts with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.patch
Updates an existing account. This method supports patch semantics.


```js
google_dfareporting.accounts.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Account ID.
* body (object) - Contains properties of a DCM account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.update
Updates an existing account.


```js
google_dfareporting.accounts.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a DCM account.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.get
Gets one account by ID.


```js
google_dfareporting.accounts.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Account ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### ads.list
Retrieves a list of ads, possibly filtered. This method supports paging.


```js
google_dfareporting.ads.list({
  "profileId": ""
}, context)
```

#### Parameters
* active (boolean) - Select only active ads.
* advertiserId (string) - Select only ads with this advertiser ID.
* archived (boolean) - Select only archived ads.
* audienceSegmentIds (array) - Select only ads with these audience segment IDs.
* campaignIds (array) - Select only ads with these campaign IDs.
* compatibility (string) - Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.
* creativeIds (array) - Select only ads with these creative IDs assigned.
* creativeOptimizationConfigurationIds (array) - Select only ads with these creative optimization configuration IDs.
* dynamicClickTracker (boolean) - Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.
* ids (array) - Select only ads with these IDs.
* landingPageIds (array) - Select only ads with these landing page IDs.
* maxResults (integer) - Maximum number of results to return.
* overriddenEventTagId (string) - Select only ads with this event tag override ID.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* placementIds (array) - Select only ads with these placement IDs assigned.
* profileId (string) **required** - User profile ID associated with this request.
* remarketingListIds (array) - Select only ads whose list targeting expression use these remarketing list IDs.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".
* sizeIds (array) - Select only ads with these size IDs.
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* sslCompliant (boolean) - Select only ads that are SSL-compliant.
* sslRequired (boolean) - Select only ads that require SSL.
* type (array) - Select only ads with these types.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### ads.patch
Updates an existing ad. This method supports patch semantics.


```js
google_dfareporting.ads.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Ad ID.
* body (object) - Contains properties of a DCM ad.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### ads.insert
Inserts a new ad.


```js
google_dfareporting.ads.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a DCM ad.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### ads.update
Updates an existing ad.


```js
google_dfareporting.ads.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a DCM ad.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### ads.get
Gets one ad by ID.


```js
google_dfareporting.ads.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Ad ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### advertiserGroups.list
Retrieves a list of advertiser groups, possibly filtered. This method supports paging.


```js
google_dfareporting.advertiserGroups.list({
  "profileId": ""
}, context)
```

#### Parameters
* ids (array) - Select only advertiser groups with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### advertiserGroups.patch
Updates an existing advertiser group. This method supports patch semantics.


```js
google_dfareporting.advertiserGroups.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Advertiser group ID.
* body (object) - Groups advertisers together so that reports can be generated for the entire group at once.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### advertiserGroups.insert
Inserts a new advertiser group.


```js
google_dfareporting.advertiserGroups.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Groups advertisers together so that reports can be generated for the entire group at once.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### advertiserGroups.update
Updates an existing advertiser group.


```js
google_dfareporting.advertiserGroups.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Groups advertisers together so that reports can be generated for the entire group at once.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### advertiserGroups.delete
Deletes an existing advertiser group.


```js
google_dfareporting.advertiserGroups.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Advertiser group ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### advertiserGroups.get
Gets one advertiser group by ID.


```js
google_dfareporting.advertiserGroups.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Advertiser group ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### advertisers.list
Retrieves a list of advertisers, possibly filtered. This method supports paging.


```js
google_dfareporting.advertisers.list({
  "profileId": ""
}, context)
```

#### Parameters
* advertiserGroupIds (array) - Select only advertisers with these advertiser group IDs.
* floodlightConfigurationIds (array) - Select only advertisers with these floodlight configuration IDs.
* ids (array) - Select only advertisers with these IDs.
* includeAdvertisersWithoutGroupsOnly (boolean) - Select only advertisers which do not belong to any advertiser group.
* maxResults (integer) - Maximum number of results to return.
* onlyParent (boolean) - Select only advertisers which use another advertiser's floodlight configuration.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* status (string) - Select only advertisers with the specified status.
* subaccountId (string) - Select only advertisers with these subaccount IDs.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### advertisers.patch
Updates an existing advertiser. This method supports patch semantics.


```js
google_dfareporting.advertisers.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Advertiser ID.
* body (object) - Contains properties of a DCM advertiser.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### advertisers.insert
Inserts a new advertiser.


```js
google_dfareporting.advertisers.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a DCM advertiser.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### advertisers.update
Updates an existing advertiser.


```js
google_dfareporting.advertisers.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a DCM advertiser.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### advertisers.get
Gets one advertiser by ID.


```js
google_dfareporting.advertisers.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Advertiser ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### browsers.list
Retrieves a list of browsers.


```js
google_dfareporting.browsers.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### campaigns.list
Retrieves a list of campaigns, possibly filtered. This method supports paging.


```js
google_dfareporting.campaigns.list({
  "profileId": ""
}, context)
```

#### Parameters
* advertiserGroupIds (array) - Select only campaigns whose advertisers belong to these advertiser groups.
* advertiserIds (array) - Select only campaigns that belong to these advertisers.
* archived (boolean) - Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.
* atLeastOneOptimizationActivity (boolean) - Select only campaigns that have at least one optimization activity.
* excludedIds (array) - Exclude campaigns with these IDs.
* ids (array) - Select only campaigns with these IDs.
* maxResults (integer) - Maximum number of results to return.
* overriddenEventTagId (string) - Select only campaigns that have overridden this event tag ID.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* subaccountId (string) - Select only campaigns that belong to this subaccount.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### campaigns.patch
Updates an existing campaign. This method supports patch semantics.


```js
google_dfareporting.campaigns.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Campaign ID.
* body (object) - Contains properties of a DCM campaign.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### campaigns.insert
Inserts a new campaign.


```js
google_dfareporting.campaigns.insert({
  "profileId": "",
  "defaultLandingPageName": "",
  "defaultLandingPageUrl": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* defaultLandingPageName (string) **required** - Default landing page name for this new campaign. Must be less than 256 characters long.
* defaultLandingPageUrl (string) **required** - Default landing page URL for this new campaign.
* body (object) - Contains properties of a DCM campaign.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### campaigns.update
Updates an existing campaign.


```js
google_dfareporting.campaigns.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a DCM campaign.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### campaignCreativeAssociations.list
Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.


```js
google_dfareporting.campaignCreativeAssociations.list({
  "campaignId": "",
  "profileId": ""
}, context)
```

#### Parameters
* campaignId (string) **required** - Campaign ID in this association.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### campaignCreativeAssociations.insert
Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.


```js
google_dfareporting.campaignCreativeAssociations.insert({
  "profileId": "",
  "campaignId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* campaignId (string) **required** - Campaign ID in this association.
* body (object) - Identifies a creative which has been associated with a given campaign.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### landingPages.list
Retrieves the list of landing pages for the specified campaign.


```js
google_dfareporting.landingPages.list({
  "profileId": "",
  "campaignId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* campaignId (string) **required** - Landing page campaign ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### landingPages.patch
Updates an existing campaign landing page. This method supports patch semantics.


```js
google_dfareporting.landingPages.patch({
  "profileId": "",
  "campaignId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* campaignId (string) **required** - Landing page campaign ID.
* id (string) **required** - Landing page ID.
* body (object) - Contains information about where a user's browser is taken after the user clicks an ad.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### landingPages.insert
Inserts a new landing page for the specified campaign.


```js
google_dfareporting.landingPages.insert({
  "profileId": "",
  "campaignId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* campaignId (string) **required** - Landing page campaign ID.
* body (object) - Contains information about where a user's browser is taken after the user clicks an ad.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### landingPages.update
Updates an existing campaign landing page.


```js
google_dfareporting.landingPages.update({
  "profileId": "",
  "campaignId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* campaignId (string) **required** - Landing page campaign ID.
* body (object) - Contains information about where a user's browser is taken after the user clicks an ad.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### landingPages.delete
Deletes an existing campaign landing page.


```js
google_dfareporting.landingPages.delete({
  "profileId": "",
  "campaignId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* campaignId (string) **required** - Landing page campaign ID.
* id (string) **required** - Landing page ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### landingPages.get
Gets one campaign landing page by ID.


```js
google_dfareporting.landingPages.get({
  "profileId": "",
  "campaignId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* campaignId (string) **required** - Landing page campaign ID.
* id (string) **required** - Landing page ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### campaigns.get
Gets one campaign by ID.


```js
google_dfareporting.campaigns.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Campaign ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### changeLogs.list
Retrieves a list of change logs. This method supports paging.


```js
google_dfareporting.changeLogs.list({
  "profileId": ""
}, context)
```

#### Parameters
* action (string) - Select only change logs with the specified action.
* ids (array) - Select only change logs with these IDs.
* maxChangeTime (string) - Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
* maxResults (integer) - Maximum number of results to return.
* minChangeTime (string) - Select only change logs whose change time is before the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.
* objectIds (array) - Select only change logs with these object IDs.
* objectType (string) - Select only change logs with the specified object type.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Select only change logs whose object ID, user name, old or new values match the search string.
* userProfileIds (array) - Select only change logs with these user profile IDs.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### changeLogs.get
Gets one change log by ID.


```js
google_dfareporting.changeLogs.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Change log ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### cities.list
Retrieves a list of cities, possibly filtered.


```js
google_dfareporting.cities.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* countryDartIds (array) - Select only cities from these countries.
* dartIds (array) - Select only cities with these DART IDs.
* namePrefix (string) - Select only cities with names starting with this prefix.
* regionDartIds (array) - Select only cities from these regions.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### connectionTypes.list
Retrieves a list of connection types.


```js
google_dfareporting.connectionTypes.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### connectionTypes.get
Gets one connection type by ID.


```js
google_dfareporting.connectionTypes.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Connection type ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### contentCategories.list
Retrieves a list of content categories, possibly filtered. This method supports paging.


```js
google_dfareporting.contentCategories.list({
  "profileId": ""
}, context)
```

#### Parameters
* ids (array) - Select only content categories with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### contentCategories.patch
Updates an existing content category. This method supports patch semantics.


```js
google_dfareporting.contentCategories.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Content category ID.
* body (object) - Organizes placements according to the contents of their associated webpages.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### contentCategories.insert
Inserts a new content category.


```js
google_dfareporting.contentCategories.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Organizes placements according to the contents of their associated webpages.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### contentCategories.update
Updates an existing content category.


```js
google_dfareporting.contentCategories.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Organizes placements according to the contents of their associated webpages.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### contentCategories.delete
Deletes an existing content category.


```js
google_dfareporting.contentCategories.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Content category ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### contentCategories.get
Gets one content category by ID.


```js
google_dfareporting.contentCategories.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Content category ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### conversions.batchinsert
Inserts conversions.


```js
google_dfareporting.conversions.batchinsert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Insert Conversions Request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### countries.list
Retrieves a list of countries.


```js
google_dfareporting.countries.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### countries.get
Gets one country by ID.


```js
google_dfareporting.countries.get({
  "profileId": "",
  "dartId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* dartId (string) **required** - Country DART ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeAssets.insert
Inserts a new creative asset.


```js
google_dfareporting.creativeAssets.insert({
  "profileId": "",
  "advertiserId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* advertiserId (string) **required** - Advertiser ID of this creative. This is a required field.
* body (object) - CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeFields.list
Retrieves a list of creative fields, possibly filtered. This method supports paging.


```js
google_dfareporting.creativeFields.list({
  "profileId": ""
}, context)
```

#### Parameters
* advertiserIds (array) - Select only creative fields that belong to these advertisers.
* ids (array) - Select only creative fields with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeFields.patch
Updates an existing creative field. This method supports patch semantics.


```js
google_dfareporting.creativeFields.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Creative Field ID
* body (object) - Contains properties of a creative field.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeFields.insert
Inserts a new creative field.


```js
google_dfareporting.creativeFields.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a creative field.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeFields.update
Updates an existing creative field.


```js
google_dfareporting.creativeFields.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a creative field.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeFieldValues.list
Retrieves a list of creative field values, possibly filtered. This method supports paging.


```js
google_dfareporting.creativeFieldValues.list({
  "creativeFieldId": "",
  "profileId": ""
}, context)
```

#### Parameters
* creativeFieldId (string) **required** - Creative field ID for this creative field value.
* ids (array) - Select only creative field values with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeFieldValues.patch
Updates an existing creative field value. This method supports patch semantics.


```js
google_dfareporting.creativeFieldValues.patch({
  "profileId": "",
  "creativeFieldId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* creativeFieldId (string) **required** - Creative field ID for this creative field value.
* id (string) **required** - Creative Field Value ID
* body (object) - Contains properties of a creative field value.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeFieldValues.insert
Inserts a new creative field value.


```js
google_dfareporting.creativeFieldValues.insert({
  "profileId": "",
  "creativeFieldId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* creativeFieldId (string) **required** - Creative field ID for this creative field value.
* body (object) - Contains properties of a creative field value.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeFieldValues.update
Updates an existing creative field value.


```js
google_dfareporting.creativeFieldValues.update({
  "profileId": "",
  "creativeFieldId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* creativeFieldId (string) **required** - Creative field ID for this creative field value.
* body (object) - Contains properties of a creative field value.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeFieldValues.delete
Deletes an existing creative field value.


```js
google_dfareporting.creativeFieldValues.delete({
  "profileId": "",
  "creativeFieldId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* creativeFieldId (string) **required** - Creative field ID for this creative field value.
* id (string) **required** - Creative Field Value ID
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeFieldValues.get
Gets one creative field value by ID.


```js
google_dfareporting.creativeFieldValues.get({
  "profileId": "",
  "creativeFieldId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* creativeFieldId (string) **required** - Creative field ID for this creative field value.
* id (string) **required** - Creative Field Value ID
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeFields.delete
Deletes an existing creative field.


```js
google_dfareporting.creativeFields.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Creative Field ID
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeFields.get
Gets one creative field by ID.


```js
google_dfareporting.creativeFields.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Creative Field ID
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeGroups.list
Retrieves a list of creative groups, possibly filtered. This method supports paging.


```js
google_dfareporting.creativeGroups.list({
  "profileId": ""
}, context)
```

#### Parameters
* advertiserIds (array) - Select only creative groups that belong to these advertisers.
* groupNumber (integer) - Select only creative groups that belong to this subgroup.
* ids (array) - Select only creative groups with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeGroups.patch
Updates an existing creative group. This method supports patch semantics.


```js
google_dfareporting.creativeGroups.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Creative group ID.
* body (object) - Contains properties of a creative group.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeGroups.insert
Inserts a new creative group.


```js
google_dfareporting.creativeGroups.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a creative group.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeGroups.update
Updates an existing creative group.


```js
google_dfareporting.creativeGroups.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a creative group.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creativeGroups.get
Gets one creative group by ID.


```js
google_dfareporting.creativeGroups.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Creative group ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creatives.list
Retrieves a list of creatives, possibly filtered. This method supports paging.


```js
google_dfareporting.creatives.list({
  "profileId": ""
}, context)
```

#### Parameters
* active (boolean) - Select only active creatives. Leave blank to select active and inactive creatives.
* advertiserId (string) - Select only creatives with this advertiser ID.
* archived (boolean) - Select only archived creatives. Leave blank to select archived and unarchived creatives.
* campaignId (string) - Select only creatives with this campaign ID.
* companionCreativeIds (array) - Select only in-stream video creatives with these companion IDs.
* creativeFieldIds (array) - Select only creatives with these creative field IDs.
* ids (array) - Select only creatives with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* renderingIds (array) - Select only creatives with these rendering IDs.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".
* sizeIds (array) - Select only creatives with these size IDs.
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* studioCreativeId (string) - Select only creatives corresponding to this Studio creative ID.
* types (array) - Select only creatives with these creative types.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creatives.patch
Updates an existing creative. This method supports patch semantics.


```js
google_dfareporting.creatives.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Creative ID.
* body (object) - Contains properties of a Creative.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creatives.insert
Inserts a new creative.


```js
google_dfareporting.creatives.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a Creative.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creatives.update
Updates an existing creative.


```js
google_dfareporting.creatives.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a Creative.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### creatives.get
Gets one creative by ID.


```js
google_dfareporting.creatives.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Creative ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### dimensionValues.query
Retrieves list of report dimension values for a list of filters.


```js
google_dfareporting.dimensionValues.query({
  "profileId": ""
}, context)
```

#### Parameters
* body (object) - Represents a DimensionValuesRequest.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - The value of the nextToken from the previous result page.
* profileId (string) **required** - The DFA user profile ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### directorySiteContacts.list
Retrieves a list of directory site contacts, possibly filtered. This method supports paging.


```js
google_dfareporting.directorySiteContacts.list({
  "profileId": ""
}, context)
```

#### Parameters
* directorySiteIds (array) - Select only directory site contacts with these directory site IDs. This is a required field.
* ids (array) - Select only directory site contacts with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "directory site contact*2015" will return objects with names like "directory site contact June 2015", "directory site contact April 2015", or simply "directory site contact 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site contact" will match objects with name "my directory site contact", "directory site contact 2015", or simply "directory site contact".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### directorySiteContacts.get
Gets one directory site contact by ID.


```js
google_dfareporting.directorySiteContacts.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Directory site contact ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### directorySites.list
Retrieves a list of directory sites, possibly filtered. This method supports paging.


```js
google_dfareporting.directorySites.list({
  "profileId": ""
}, context)
```

#### Parameters
* acceptsInStreamVideoPlacements (boolean) - This search filter is no longer supported and will have no effect on the results returned.
* acceptsInterstitialPlacements (boolean) - This search filter is no longer supported and will have no effect on the results returned.
* acceptsPublisherPaidPlacements (boolean) - Select only directory sites that accept publisher paid placements. This field can be left blank.
* active (boolean) - Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.
* countryId (string) - Select only directory sites with this country ID.
* dfp_network_code (string) - Select only directory sites with this DFP network code.
* ids (array) - Select only directory sites with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* parentId (string) - Select only directory sites with this parent ID.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### directorySites.insert
Inserts a new directory site.


```js
google_dfareporting.directorySites.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### directorySites.get
Gets one directory site by ID.


```js
google_dfareporting.directorySites.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Directory site ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### dynamicTargetingKeys.list
Retrieves a list of dynamic targeting keys.


```js
google_dfareporting.dynamicTargetingKeys.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* advertiserId (string) - Select only dynamic targeting keys whose object has this advertiser ID.
* names (array) - Select only dynamic targeting keys exactly matching these names.
* objectId (string) - Select only dynamic targeting keys with this object ID.
* objectType (string) - Select only dynamic targeting keys with this object type.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### dynamicTargetingKeys.insert
Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.


```js
google_dfareporting.dynamicTargetingKeys.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with DoubleClick Studio dynamic creatives. Use these labels instead of numeric DCM IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### dynamicTargetingKeys.delete
Deletes an existing dynamic targeting key.


```js
google_dfareporting.dynamicTargetingKeys.delete({
  "profileId": "",
  "objectId": "",
  "name": "",
  "objectType": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* objectId (string) **required** - ID of the object of this dynamic targeting key. This is a required field.
* name (string) **required** - Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.
* objectType (string) **required** - Type of the object of this dynamic targeting key. This is a required field.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### eventTags.list
Retrieves a list of event tags, possibly filtered.


```js
google_dfareporting.eventTags.list({
  "profileId": ""
}, context)
```

#### Parameters
* adId (string) - Select only event tags that belong to this ad.
* advertiserId (string) - Select only event tags that belong to this advertiser.
* campaignId (string) - Select only event tags that belong to this campaign.
* definitionsOnly (boolean) - Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.
* enabled (boolean) - Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.
* eventTagTypes (array) - Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.
* ids (array) - Select only event tags with these IDs.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### eventTags.patch
Updates an existing event tag. This method supports patch semantics.


```js
google_dfareporting.eventTags.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Event tag ID.
* body (object) - Contains properties of an event tag.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### eventTags.insert
Inserts a new event tag.


```js
google_dfareporting.eventTags.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of an event tag.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### eventTags.update
Updates an existing event tag.


```js
google_dfareporting.eventTags.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of an event tag.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### eventTags.delete
Deletes an existing event tag.


```js
google_dfareporting.eventTags.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Event tag ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### eventTags.get
Gets one event tag by ID.


```js
google_dfareporting.eventTags.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Event tag ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### files.list
Lists files for a user profile.


```js
google_dfareporting.files.list({
  "profileId": ""
}, context)
```

#### Parameters
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - The value of the nextToken from the previous result page.
* profileId (string) **required** - The DFA profile ID.
* scope (string) - The scope that defines which results are returned.
* sortField (string) - The field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightActivities.list
Retrieves a list of floodlight activities, possibly filtered. This method supports paging.


```js
google_dfareporting.floodlightActivities.list({
  "profileId": ""
}, context)
```

#### Parameters
* advertiserId (string) - Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
* floodlightActivityGroupIds (array) - Select only floodlight activities with the specified floodlight activity group IDs.
* floodlightActivityGroupName (string) - Select only floodlight activities with the specified floodlight activity group name.
* floodlightActivityGroupTagString (string) - Select only floodlight activities with the specified floodlight activity group tag string.
* floodlightActivityGroupType (string) - Select only floodlight activities with the specified floodlight activity group type.
* floodlightConfigurationId (string) - Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
* ids (array) - Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* tagString (string) - Select only floodlight activities with the specified tag string.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightActivities.patch
Updates an existing floodlight activity. This method supports patch semantics.


```js
google_dfareporting.floodlightActivities.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Floodlight activity ID.
* body (object) - Contains properties of a Floodlight activity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightActivities.insert
Inserts a new floodlight activity.


```js
google_dfareporting.floodlightActivities.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a Floodlight activity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightActivities.update
Updates an existing floodlight activity.


```js
google_dfareporting.floodlightActivities.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a Floodlight activity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightActivities.generatetag
Generates a tag for a floodlight activity.


```js
google_dfareporting.floodlightActivities.generatetag({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* floodlightActivityId (string) - Floodlight activity ID for which we want to generate a tag.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightActivities.delete
Deletes an existing floodlight activity.


```js
google_dfareporting.floodlightActivities.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Floodlight activity ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightActivities.get
Gets one floodlight activity by ID.


```js
google_dfareporting.floodlightActivities.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Floodlight activity ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightActivityGroups.list
Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.


```js
google_dfareporting.floodlightActivityGroups.list({
  "profileId": ""
}, context)
```

#### Parameters
* advertiserId (string) - Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
* floodlightConfigurationId (string) - Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.
* ids (array) - Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* type (string) - Select only floodlight activity groups with the specified floodlight activity group type.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightActivityGroups.patch
Updates an existing floodlight activity group. This method supports patch semantics.


```js
google_dfareporting.floodlightActivityGroups.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Floodlight activity Group ID.
* body (object) - Contains properties of a Floodlight activity group.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightActivityGroups.insert
Inserts a new floodlight activity group.


```js
google_dfareporting.floodlightActivityGroups.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a Floodlight activity group.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightActivityGroups.update
Updates an existing floodlight activity group.


```js
google_dfareporting.floodlightActivityGroups.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a Floodlight activity group.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightActivityGroups.get
Gets one floodlight activity group by ID.


```js
google_dfareporting.floodlightActivityGroups.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Floodlight activity Group ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightConfigurations.list
Retrieves a list of floodlight configurations, possibly filtered.


```js
google_dfareporting.floodlightConfigurations.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* ids (array) - Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightConfigurations.patch
Updates an existing floodlight configuration. This method supports patch semantics.


```js
google_dfareporting.floodlightConfigurations.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Floodlight configuration ID.
* body (object) - Contains properties of a Floodlight configuration.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightConfigurations.update
Updates an existing floodlight configuration.


```js
google_dfareporting.floodlightConfigurations.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a Floodlight configuration.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### floodlightConfigurations.get
Gets one floodlight configuration by ID.


```js
google_dfareporting.floodlightConfigurations.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Floodlight configuration ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### languages.list
Retrieves a list of languages.


```js
google_dfareporting.languages.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### metros.list
Retrieves a list of metros.


```js
google_dfareporting.metros.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mobileCarriers.list
Retrieves a list of mobile carriers.


```js
google_dfareporting.mobileCarriers.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### mobileCarriers.get
Gets one mobile carrier by ID.


```js
google_dfareporting.mobileCarriers.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Mobile carrier ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### operatingSystemVersions.list
Retrieves a list of operating system versions.


```js
google_dfareporting.operatingSystemVersions.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### operatingSystemVersions.get
Gets one operating system version by ID.


```js
google_dfareporting.operatingSystemVersions.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Operating system version ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### operatingSystems.list
Retrieves a list of operating systems.


```js
google_dfareporting.operatingSystems.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### operatingSystems.get
Gets one operating system by DART ID.


```js
google_dfareporting.operatingSystems.get({
  "profileId": "",
  "dartId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* dartId (string) **required** - Operating system DART ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placementGroups.list
Retrieves a list of placement groups, possibly filtered. This method supports paging.


```js
google_dfareporting.placementGroups.list({
  "profileId": ""
}, context)
```

#### Parameters
* advertiserIds (array) - Select only placement groups that belong to these advertisers.
* archived (boolean) - Select only archived placements. Don't set this field to select both archived and non-archived placements.
* campaignIds (array) - Select only placement groups that belong to these campaigns.
* contentCategoryIds (array) - Select only placement groups that are associated with these content categories.
* directorySiteIds (array) - Select only placement groups that are associated with these directory sites.
* ids (array) - Select only placement groups with these IDs.
* maxEndDate (string) - Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
* maxResults (integer) - Maximum number of results to return.
* maxStartDate (string) - Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
* minEndDate (string) - Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
* minStartDate (string) - Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
* pageToken (string) - Value of the nextPageToken from the previous result page.
* placementGroupType (string) - Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.
* placementStrategyIds (array) - Select only placement groups that are associated with these placement strategies.
* pricingTypes (array) - Select only placement groups with these pricing types.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".
* siteIds (array) - Select only placement groups that are associated with these sites.
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placementGroups.patch
Updates an existing placement group. This method supports patch semantics.


```js
google_dfareporting.placementGroups.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Placement group ID.
* body (object) - Contains properties of a package or roadblock.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placementGroups.insert
Inserts a new placement group.


```js
google_dfareporting.placementGroups.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a package or roadblock.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placementGroups.update
Updates an existing placement group.


```js
google_dfareporting.placementGroups.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a package or roadblock.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placementGroups.get
Gets one placement group by ID.


```js
google_dfareporting.placementGroups.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Placement group ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placementStrategies.list
Retrieves a list of placement strategies, possibly filtered. This method supports paging.


```js
google_dfareporting.placementStrategies.list({
  "profileId": ""
}, context)
```

#### Parameters
* ids (array) - Select only placement strategies with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placementStrategies.patch
Updates an existing placement strategy. This method supports patch semantics.


```js
google_dfareporting.placementStrategies.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Placement strategy ID.
* body (object) - Contains properties of a placement strategy.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placementStrategies.insert
Inserts a new placement strategy.


```js
google_dfareporting.placementStrategies.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a placement strategy.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placementStrategies.update
Updates an existing placement strategy.


```js
google_dfareporting.placementStrategies.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a placement strategy.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placementStrategies.delete
Deletes an existing placement strategy.


```js
google_dfareporting.placementStrategies.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Placement strategy ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placementStrategies.get
Gets one placement strategy by ID.


```js
google_dfareporting.placementStrategies.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Placement strategy ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placements.list
Retrieves a list of placements, possibly filtered. This method supports paging.


```js
google_dfareporting.placements.list({
  "profileId": ""
}, context)
```

#### Parameters
* advertiserIds (array) - Select only placements that belong to these advertisers.
* archived (boolean) - Select only archived placements. Don't set this field to select both archived and non-archived placements.
* campaignIds (array) - Select only placements that belong to these campaigns.
* compatibilities (array) - Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.
* contentCategoryIds (array) - Select only placements that are associated with these content categories.
* directorySiteIds (array) - Select only placements that are associated with these directory sites.
* groupIds (array) - Select only placements that belong to these placement groups.
* ids (array) - Select only placements with these IDs.
* maxEndDate (string) - Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".
* maxResults (integer) - Maximum number of results to return.
* maxStartDate (string) - Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".
* minEndDate (string) - Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".
* minStartDate (string) - Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".
* pageToken (string) - Value of the nextPageToken from the previous result page.
* paymentSource (string) - Select only placements with this payment source.
* placementStrategyIds (array) - Select only placements that are associated with these placement strategies.
* pricingTypes (array) - Select only placements with these pricing types.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement".
* siteIds (array) - Select only placements that are associated with these sites.
* sizeIds (array) - Select only placements that are associated with these sizes.
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placements.patch
Updates an existing placement. This method supports patch semantics.


```js
google_dfareporting.placements.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Placement ID.
* body (object) - Contains properties of a placement.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placements.insert
Inserts a new placement.


```js
google_dfareporting.placements.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a placement.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placements.update
Updates an existing placement.


```js
google_dfareporting.placements.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a placement.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placements.generatetags
Generates tags for a placement.


```js
google_dfareporting.placements.generatetags({
  "profileId": ""
}, context)
```

#### Parameters
* campaignId (string) - Generate placements belonging to this campaign. This is a required field.
* placementIds (array) - Generate tags for these placements.
* profileId (string) **required** - User profile ID associated with this request.
* tagFormats (array) - Tag formats to generate for these placements.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### placements.get
Gets one placement by ID.


```js
google_dfareporting.placements.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Placement ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### platformTypes.list
Retrieves a list of platform types.


```js
google_dfareporting.platformTypes.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### platformTypes.get
Gets one platform type by ID.


```js
google_dfareporting.platformTypes.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Platform type ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### postalCodes.list
Retrieves a list of postal codes.


```js
google_dfareporting.postalCodes.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### postalCodes.get
Gets one postal code by ID.


```js
google_dfareporting.postalCodes.get({
  "profileId": "",
  "code": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* code (string) **required** - Postal code ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### projects.list
Retrieves a list of projects, possibly filtered. This method supports paging.


```js
google_dfareporting.projects.list({
  "profileId": ""
}, context)
```

#### Parameters
* advertiserIds (array) - Select only projects with these advertiser IDs.
* ids (array) - Select only projects with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### projects.get
Gets one project by ID.


```js
google_dfareporting.projects.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Project ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### inventoryItems.list
Retrieves a list of inventory items, possibly filtered. This method supports paging.


```js
google_dfareporting.inventoryItems.list({
  "profileId": "",
  "projectId": ""
}, context)
```

#### Parameters
* ids (array) - Select only inventory items with these IDs.
* inPlan (boolean) - Select only inventory items that are in plan.
* maxResults (integer) - Maximum number of results to return.
* orderId (array) - Select only inventory items that belong to specified orders.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* projectId (string) **required** - Project ID for order documents.
* siteId (array) - Select only inventory items that are associated with these sites.
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* type (string) - Select only inventory items with this type.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### inventoryItems.get
Gets one inventory item by ID.


```js
google_dfareporting.inventoryItems.get({
  "profileId": "",
  "projectId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* projectId (string) **required** - Project ID for order documents.
* id (string) **required** - Inventory item ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orderDocuments.list
Retrieves a list of order documents, possibly filtered. This method supports paging.


```js
google_dfareporting.orderDocuments.list({
  "profileId": "",
  "projectId": ""
}, context)
```

#### Parameters
* approved (boolean) - Select only order documents that have been approved by at least one user.
* ids (array) - Select only order documents with these IDs.
* maxResults (integer) - Maximum number of results to return.
* orderId (array) - Select only order documents for specified orders.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* projectId (string) **required** - Project ID for order documents.
* searchString (string) - Allows searching for order documents by name or ID. Wildcards (*) are allowed. For example, "orderdocument*2015" will return order documents with names like "orderdocument June 2015", "orderdocument April 2015", or simply "orderdocument 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "orderdocument" will match order documents with name "my orderdocument", "orderdocument 2015", or simply "orderdocument".
* siteId (array) - Select only order documents that are associated with these sites.
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orderDocuments.get
Gets one order document by ID.


```js
google_dfareporting.orderDocuments.get({
  "profileId": "",
  "projectId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* projectId (string) **required** - Project ID for order documents.
* id (string) **required** - Order document ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.list
Retrieves a list of orders, possibly filtered. This method supports paging.


```js
google_dfareporting.orders.list({
  "profileId": "",
  "projectId": ""
}, context)
```

#### Parameters
* ids (array) - Select only orders with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* projectId (string) **required** - Project ID for orders.
* searchString (string) - Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".
* siteId (array) - Select only orders that are associated with these site IDs.
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### orders.get
Gets one order by ID.


```js
google_dfareporting.orders.get({
  "profileId": "",
  "projectId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* projectId (string) **required** - Project ID for orders.
* id (string) **required** - Order ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### regions.list
Retrieves a list of regions.


```js
google_dfareporting.regions.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### remarketingListShares.patch
Updates an existing remarketing list share. This method supports patch semantics.


```js
google_dfareporting.remarketingListShares.patch({
  "profileId": "",
  "remarketingListId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* remarketingListId (string) **required** - Remarketing list ID.
* body (object) - Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### remarketingListShares.update
Updates an existing remarketing list share.


```js
google_dfareporting.remarketingListShares.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### remarketingListShares.get
Gets one remarketing list share by remarketing list ID.


```js
google_dfareporting.remarketingListShares.get({
  "profileId": "",
  "remarketingListId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* remarketingListId (string) **required** - Remarketing list ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### remarketingLists.list
Retrieves a list of remarketing lists, possibly filtered. This method supports paging.


```js
google_dfareporting.remarketingLists.list({
  "advertiserId": "",
  "profileId": ""
}, context)
```

#### Parameters
* active (boolean) - Select only active or only inactive remarketing lists.
* advertiserId (string) **required** - Select only remarketing lists owned by this advertiser.
* floodlightActivityId (string) - Select only remarketing lists that have this floodlight activity ID.
* maxResults (integer) - Maximum number of results to return.
* name (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### remarketingLists.patch
Updates an existing remarketing list. This method supports patch semantics.


```js
google_dfareporting.remarketingLists.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Remarketing list ID.
* body (object) - Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### remarketingLists.insert
Inserts a new remarketing list.


```js
google_dfareporting.remarketingLists.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### remarketingLists.update
Updates an existing remarketing list.


```js
google_dfareporting.remarketingLists.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### remarketingLists.get
Gets one remarketing list by ID.


```js
google_dfareporting.remarketingLists.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Remarketing list ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.list
Retrieves list of reports.


```js
google_dfareporting.reports.list({
  "profileId": ""
}, context)
```

#### Parameters
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - The value of the nextToken from the previous result page.
* profileId (string) **required** - The DFA user profile ID.
* scope (string) - The scope that defines which results are returned.
* sortField (string) - The field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.insert
Creates a report.


```js
google_dfareporting.reports.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - The DFA user profile ID.
* body (object) - Represents a Report resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.compatibleFields.query
Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.


```js
google_dfareporting.reports.compatibleFields.query({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - The DFA user profile ID.
* body (object) - Represents a Report resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.delete
Deletes a report by its ID.


```js
google_dfareporting.reports.delete({
  "profileId": "",
  "reportId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - The DFA user profile ID.
* reportId (string) **required** - The ID of the report.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.get
Retrieves a report by its ID.


```js
google_dfareporting.reports.get({
  "profileId": "",
  "reportId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - The DFA user profile ID.
* reportId (string) **required** - The ID of the report.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.patch
Updates a report. This method supports patch semantics.


```js
google_dfareporting.reports.patch({
  "profileId": "",
  "reportId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - The DFA user profile ID.
* reportId (string) **required** - The ID of the report.
* body (object) - Represents a Report resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.update
Updates a report.


```js
google_dfareporting.reports.update({
  "profileId": "",
  "reportId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - The DFA user profile ID.
* reportId (string) **required** - The ID of the report.
* body (object) - Represents a Report resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.files.list
Lists files for a report.


```js
google_dfareporting.reports.files.list({
  "profileId": "",
  "reportId": ""
}, context)
```

#### Parameters
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - The value of the nextToken from the previous result page.
* profileId (string) **required** - The DFA profile ID.
* reportId (string) **required** - The ID of the parent report.
* sortField (string) - The field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.files.get
Retrieves a report file. This method supports media download.


```js
google_dfareporting.reports.files.get({
  "profileId": "",
  "reportId": "",
  "fileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - The DFA profile ID.
* reportId (string) **required** - The ID of the report.
* fileId (string) **required** - The ID of the report file.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.run
Runs a report.


```js
google_dfareporting.reports.run({
  "profileId": "",
  "reportId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - The DFA profile ID.
* reportId (string) **required** - The ID of the report.
* synchronous (boolean) - If set and true, tries to run the report synchronously.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sites.list
Retrieves a list of sites, possibly filtered. This method supports paging.


```js
google_dfareporting.sites.list({
  "profileId": ""
}, context)
```

#### Parameters
* acceptsInStreamVideoPlacements (boolean) - This search filter is no longer supported and will have no effect on the results returned.
* acceptsInterstitialPlacements (boolean) - This search filter is no longer supported and will have no effect on the results returned.
* acceptsPublisherPaidPlacements (boolean) - Select only sites that accept publisher paid placements.
* adWordsSite (boolean) - Select only AdWords sites.
* approved (boolean) - Select only approved sites.
* campaignIds (array) - Select only sites with these campaign IDs.
* directorySiteIds (array) - Select only sites with these directory site IDs.
* ids (array) - Select only sites with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* subaccountId (string) - Select only sites with this subaccount ID.
* unmappedSite (boolean) - Select only sites that have not been mapped to a directory site.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sites.patch
Updates an existing site. This method supports patch semantics.


```js
google_dfareporting.sites.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Site ID.
* body (object) - Contains properties of a site.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sites.insert
Inserts a new site.


```js
google_dfareporting.sites.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a site.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sites.update
Updates an existing site.


```js
google_dfareporting.sites.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a site.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sites.get
Gets one site by ID.


```js
google_dfareporting.sites.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Site ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sizes.list
Retrieves a list of sizes, possibly filtered.


```js
google_dfareporting.sizes.list({
  "profileId": ""
}, context)
```

#### Parameters
* height (integer) - Select only sizes with this height.
* iabStandard (boolean) - Select only IAB standard sizes.
* ids (array) - Select only sizes with these IDs.
* profileId (string) **required** - User profile ID associated with this request.
* width (integer) - Select only sizes with this width.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sizes.insert
Inserts a new size.


```js
google_dfareporting.sizes.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Represents the dimensions of ads, placements, creatives, or creative assets.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### sizes.get
Gets one size by ID.


```js
google_dfareporting.sizes.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Size ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subaccounts.list
Gets a list of subaccounts, possibly filtered. This method supports paging.


```js
google_dfareporting.subaccounts.list({
  "profileId": ""
}, context)
```

#### Parameters
* ids (array) - Select only subaccounts with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subaccounts.patch
Updates an existing subaccount. This method supports patch semantics.


```js
google_dfareporting.subaccounts.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Subaccount ID.
* body (object) - Contains properties of a DCM subaccount.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subaccounts.insert
Inserts a new subaccount.


```js
google_dfareporting.subaccounts.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a DCM subaccount.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subaccounts.update
Updates an existing subaccount.


```js
google_dfareporting.subaccounts.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a DCM subaccount.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### subaccounts.get
Gets one subaccount by ID.


```js
google_dfareporting.subaccounts.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Subaccount ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetableRemarketingLists.list
Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.


```js
google_dfareporting.targetableRemarketingLists.list({
  "advertiserId": "",
  "profileId": ""
}, context)
```

#### Parameters
* active (boolean) - Select only active or only inactive targetable remarketing lists.
* advertiserId (string) **required** - Select only targetable remarketing lists targetable by these advertisers.
* maxResults (integer) - Maximum number of results to return.
* name (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetableRemarketingLists.get
Gets one remarketing list by ID.


```js
google_dfareporting.targetableRemarketingLists.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Remarketing list ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetingTemplates.list
Retrieves a list of targeting templates, optionally filtered. This method supports paging.


```js
google_dfareporting.targetingTemplates.list({
  "profileId": ""
}, context)
```

#### Parameters
* advertiserId (string) - Select only targeting templates with this advertiser ID.
* ids (array) - Select only targeting templates with these IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetingTemplates.patch
Updates an existing targeting template. This method supports patch semantics.


```js
google_dfareporting.targetingTemplates.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Targeting template ID.
* body (object) - Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetingTemplates.insert
Inserts a new targeting template.


```js
google_dfareporting.targetingTemplates.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetingTemplates.update
Updates an existing targeting template.


```js
google_dfareporting.targetingTemplates.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### targetingTemplates.get
Gets one targeting template by ID.


```js
google_dfareporting.targetingTemplates.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - Targeting template ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userRolePermissionGroups.list
Gets a list of all supported user role permission groups.


```js
google_dfareporting.userRolePermissionGroups.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userRolePermissionGroups.get
Gets one user role permission group by ID.


```js
google_dfareporting.userRolePermissionGroups.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - User role permission group ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userRolePermissions.list
Gets a list of user role permissions, possibly filtered.


```js
google_dfareporting.userRolePermissions.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* ids (array) - Select only user role permissions with these IDs.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userRolePermissions.get
Gets one user role permission by ID.


```js
google_dfareporting.userRolePermissions.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - User role permission ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userRoles.list
Retrieves a list of user roles, possibly filtered. This method supports paging.


```js
google_dfareporting.userRoles.list({
  "profileId": ""
}, context)
```

#### Parameters
* accountUserRoleOnly (boolean) - Select only account level user roles not associated with any specific subaccount.
* ids (array) - Select only user roles with the specified IDs.
* maxResults (integer) - Maximum number of results to return.
* pageToken (string) - Value of the nextPageToken from the previous result page.
* profileId (string) **required** - User profile ID associated with this request.
* searchString (string) - Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".
* sortField (string) - Field by which to sort the list.
* sortOrder (string) - Order of sorted results.
* subaccountId (string) - Select only user roles that belong to this subaccount.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userRoles.patch
Updates an existing user role. This method supports patch semantics.


```js
google_dfareporting.userRoles.patch({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - User role ID.
* body (object) - Contains properties of auser role, which is used to manage user access.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userRoles.insert
Inserts a new user role.


```js
google_dfareporting.userRoles.insert({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of auser role, which is used to manage user access.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userRoles.update
Updates an existing user role.


```js
google_dfareporting.userRoles.update({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* body (object) - Contains properties of auser role, which is used to manage user access.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userRoles.delete
Deletes an existing user role.


```js
google_dfareporting.userRoles.delete({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - User role ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### userRoles.get
Gets one user role by ID.


```js
google_dfareporting.userRoles.get({
  "profileId": "",
  "id": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (string) **required** - User role ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### videoFormats.list
Lists available video formats.


```js
google_dfareporting.videoFormats.list({
  "profileId": ""
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### videoFormats.get
Gets one video format by ID.


```js
google_dfareporting.videoFormats.get({
  "profileId": "",
  "id": 0
}, context)
```

#### Parameters
* profileId (string) **required** - User profile ID associated with this request.
* id (integer) **required** - Video format ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

