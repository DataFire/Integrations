# @datafire/google_analytics

Client library for Google Analytics

## Installation and Usage
```bash
npm install --save datafire @datafire/google_analytics
```

```js
let datafire = require('datafire');
let google_analytics = require('@datafire/google_analytics').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_analytics: account,
  }
})

google_analytics.provisioning.createAccountTicket({}, context).then(data => {
  console.log(data);
})
```

## Description
Views and manages your Google Analytics data.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_analytics.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_analytics.oauthRefresh(null, context)
```


### data.ga.get
Returns Analytics data for a view (profile).


```js
google_analytics.data.ga.get({
  "ids": "",
  "start-date": "",
  "end-date": "",
  "metrics": ""
}, context)
```

#### Parameters
* ids (string) **required** - Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
* start-date (string) **required** - Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
* end-date (string) **required** - End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
* metrics (string) **required** - A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
* dimensions (string) - A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
* filters (string) - A comma-separated list of dimension or metric filters to be applied to Analytics data.
* include-empty-rows (boolean) - The response will include empty rows if this parameter is set to true, the default is true
* max-results (integer) - The maximum number of entries to include in this feed.
* output (string) - The selected format for the response. Default format is JSON.
* samplingLevel (string) - The desired sampling level.
* segment (string) - An Analytics segment to be applied to data.
* sort (string) - A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
* start-index (integer) - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### data.mcf.get
Returns Analytics Multi-Channel Funnels data for a view (profile).


```js
google_analytics.data.mcf.get({
  "ids": "",
  "start-date": "",
  "end-date": "",
  "metrics": ""
}, context)
```

#### Parameters
* ids (string) **required** - Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
* start-date (string) **required** - Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
* end-date (string) **required** - End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
* metrics (string) **required** - A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
* dimensions (string) - A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
* filters (string) - A comma-separated list of dimension or metric filters to be applied to the Analytics data.
* max-results (integer) - The maximum number of entries to include in this feed.
* samplingLevel (string) - The desired sampling level.
* sort (string) - A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
* start-index (integer) - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### data.realtime.get
Returns real time data for a view (profile).


```js
google_analytics.data.realtime.get({
  "ids": "",
  "metrics": ""
}, context)
```

#### Parameters
* ids (string) **required** - Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
* metrics (string) **required** - A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
* dimensions (string) - A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
* filters (string) - A comma-separated list of dimension or metric filters to be applied to real time data.
* max-results (integer) - The maximum number of entries to include in this feed.
* sort (string) - A comma-separated list of dimensions or metrics that determine the sort order for real time data.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.accountSummaries.list
Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.


```js
google_analytics.management.accountSummaries.list({}, context)
```

#### Parameters
* max-results (integer) - The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.
* start-index (integer) - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.accounts.list
Lists all accounts to which the user has access.


```js
google_analytics.management.accounts.list({}, context)
```

#### Parameters
* max-results (integer) - The maximum number of accounts to include in this response.
* start-index (integer) - An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.accountUserLinks.list
Lists account-user links for a given account.


```js
google_analytics.management.accountUserLinks.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve the user links for.
* max-results (integer) - The maximum number of account-user links to include in this response.
* start-index (integer) - An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.accountUserLinks.insert
Adds a new user to the given account.


```js
google_analytics.management.accountUserLinks.insert({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to create the user link for.
* body (object) - JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.accountUserLinks.delete
Removes a user from the given account.


```js
google_analytics.management.accountUserLinks.delete({
  "accountId": "",
  "linkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to delete the user link for.
* linkId (string) **required** - Link ID to delete the user link for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.accountUserLinks.update
Updates permissions for an existing user on the given account.


```js
google_analytics.management.accountUserLinks.update({
  "accountId": "",
  "linkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to update the account-user link for.
* linkId (string) **required** - Link ID to update the account-user link for.
* body (object) - JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.filters.list
Lists all filters for an account


```js
google_analytics.management.filters.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve filters for.
* max-results (integer) - The maximum number of filters to include in this response.
* start-index (integer) - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.filters.insert
Create a new filter.


```js
google_analytics.management.filters.insert({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to create filter for.
* body (object) - JSON template for an Analytics account filter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.filters.delete
Delete a filter.


```js
google_analytics.management.filters.delete({
  "accountId": "",
  "filterId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to delete the filter for.
* filterId (string) **required** - ID of the filter to be deleted.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.filters.get
Returns a filters to which the user has access.


```js
google_analytics.management.filters.get({
  "accountId": "",
  "filterId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve filters for.
* filterId (string) **required** - Filter ID to retrieve filters for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.filters.patch
Updates an existing filter. This method supports patch semantics.


```js
google_analytics.management.filters.patch({
  "accountId": "",
  "filterId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to which the filter belongs.
* filterId (string) **required** - ID of the filter to be updated.
* body (object) - JSON template for an Analytics account filter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.filters.update
Updates an existing filter.


```js
google_analytics.management.filters.update({
  "accountId": "",
  "filterId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to which the filter belongs.
* filterId (string) **required** - ID of the filter to be updated.
* body (object) - JSON template for an Analytics account filter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webproperties.list
Lists web properties to which the user has access.


```js
google_analytics.management.webproperties.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
* max-results (integer) - The maximum number of web properties to include in this response.
* start-index (integer) - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webproperties.insert
Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.


```js
google_analytics.management.webproperties.insert({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to create the web property for.
* body (object) - JSON template for an Analytics web property.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webproperties.get
Gets a web property to which the user has access.


```js
google_analytics.management.webproperties.get({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve the web property for.
* webPropertyId (string) **required** - ID to retrieve the web property for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webproperties.patch
Updates an existing web property. This method supports patch semantics.


```js
google_analytics.management.webproperties.patch({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to which the web property belongs
* webPropertyId (string) **required** - Web property ID
* body (object) - JSON template for an Analytics web property.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webproperties.update
Updates an existing web property.


```js
google_analytics.management.webproperties.update({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to which the web property belongs
* webPropertyId (string) **required** - Web property ID
* body (object) - JSON template for an Analytics web property.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.customDataSources.list
List custom data sources to which the user has access.


```js
google_analytics.management.customDataSources.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account Id for the custom data sources to retrieve.
* webPropertyId (string) **required** - Web property Id for the custom data sources to retrieve.
* max-results (integer) - The maximum number of custom data sources to include in this response.
* start-index (integer) - A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.uploads.deleteUploadData
Delete data associated with a previous upload.


```js
google_analytics.management.uploads.deleteUploadData({
  "accountId": "",
  "webPropertyId": "",
  "customDataSourceId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account Id for the uploads to be deleted.
* webPropertyId (string) **required** - Web property Id for the uploads to be deleted.
* customDataSourceId (string) **required** - Custom data source Id for the uploads to be deleted.
* body (object) - Request template for the delete upload data request.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.uploads.list
List uploads to which the user has access.


```js
google_analytics.management.uploads.list({
  "accountId": "",
  "webPropertyId": "",
  "customDataSourceId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account Id for the uploads to retrieve.
* webPropertyId (string) **required** - Web property Id for the uploads to retrieve.
* customDataSourceId (string) **required** - Custom data source Id for uploads to retrieve.
* max-results (integer) - The maximum number of uploads to include in this response.
* start-index (integer) - A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.uploads.uploadData
Upload data for a custom data source.


```js
google_analytics.management.uploads.uploadData({
  "accountId": "",
  "webPropertyId": "",
  "customDataSourceId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account Id associated with the upload.
* webPropertyId (string) **required** - Web property UA-string associated with the upload.
* customDataSourceId (string) **required** - Custom data source Id to which the data being uploaded belongs.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.uploads.get
List uploads to which the user has access.


```js
google_analytics.management.uploads.get({
  "accountId": "",
  "webPropertyId": "",
  "customDataSourceId": "",
  "uploadId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account Id for the upload to retrieve.
* webPropertyId (string) **required** - Web property Id for the upload to retrieve.
* customDataSourceId (string) **required** - Custom data source Id for upload to retrieve.
* uploadId (string) **required** - Upload Id to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.customDimensions.list
Lists custom dimensions to which the user has access.


```js
google_analytics.management.customDimensions.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID for the custom dimensions to retrieve.
* webPropertyId (string) **required** - Web property ID for the custom dimensions to retrieve.
* max-results (integer) - The maximum number of custom dimensions to include in this response.
* start-index (integer) - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.customDimensions.insert
Create a new custom dimension.


```js
google_analytics.management.customDimensions.insert({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID for the custom dimension to create.
* webPropertyId (string) **required** - Web property ID for the custom dimension to create.
* body (object) - JSON template for Analytics Custom Dimension.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.customDimensions.get
Get a custom dimension to which the user has access.


```js
google_analytics.management.customDimensions.get({
  "accountId": "",
  "webPropertyId": "",
  "customDimensionId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID for the custom dimension to retrieve.
* webPropertyId (string) **required** - Web property ID for the custom dimension to retrieve.
* customDimensionId (string) **required** - The ID of the custom dimension to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.customDimensions.patch
Updates an existing custom dimension. This method supports patch semantics.


```js
google_analytics.management.customDimensions.patch({
  "accountId": "",
  "webPropertyId": "",
  "customDimensionId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID for the custom dimension to update.
* webPropertyId (string) **required** - Web property ID for the custom dimension to update.
* customDimensionId (string) **required** - Custom dimension ID for the custom dimension to update.
* ignoreCustomDataSourceLinks (boolean) - Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
* body (object) - JSON template for Analytics Custom Dimension.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.customDimensions.update
Updates an existing custom dimension.


```js
google_analytics.management.customDimensions.update({
  "accountId": "",
  "webPropertyId": "",
  "customDimensionId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID for the custom dimension to update.
* webPropertyId (string) **required** - Web property ID for the custom dimension to update.
* customDimensionId (string) **required** - Custom dimension ID for the custom dimension to update.
* ignoreCustomDataSourceLinks (boolean) - Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
* body (object) - JSON template for Analytics Custom Dimension.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.customMetrics.list
Lists custom metrics to which the user has access.


```js
google_analytics.management.customMetrics.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID for the custom metrics to retrieve.
* webPropertyId (string) **required** - Web property ID for the custom metrics to retrieve.
* max-results (integer) - The maximum number of custom metrics to include in this response.
* start-index (integer) - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.customMetrics.insert
Create a new custom metric.


```js
google_analytics.management.customMetrics.insert({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID for the custom metric to create.
* webPropertyId (string) **required** - Web property ID for the custom dimension to create.
* body (object) - JSON template for Analytics Custom Metric.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.customMetrics.get
Get a custom metric to which the user has access.


```js
google_analytics.management.customMetrics.get({
  "accountId": "",
  "webPropertyId": "",
  "customMetricId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID for the custom metric to retrieve.
* webPropertyId (string) **required** - Web property ID for the custom metric to retrieve.
* customMetricId (string) **required** - The ID of the custom metric to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.customMetrics.patch
Updates an existing custom metric. This method supports patch semantics.


```js
google_analytics.management.customMetrics.patch({
  "accountId": "",
  "webPropertyId": "",
  "customMetricId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID for the custom metric to update.
* webPropertyId (string) **required** - Web property ID for the custom metric to update.
* customMetricId (string) **required** - Custom metric ID for the custom metric to update.
* ignoreCustomDataSourceLinks (boolean) - Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
* body (object) - JSON template for Analytics Custom Metric.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.customMetrics.update
Updates an existing custom metric.


```js
google_analytics.management.customMetrics.update({
  "accountId": "",
  "webPropertyId": "",
  "customMetricId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID for the custom metric to update.
* webPropertyId (string) **required** - Web property ID for the custom metric to update.
* customMetricId (string) **required** - Custom metric ID for the custom metric to update.
* ignoreCustomDataSourceLinks (boolean) - Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
* body (object) - JSON template for Analytics Custom Metric.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webPropertyAdWordsLinks.list
Lists webProperty-AdWords links for a given web property.


```js
google_analytics.management.webPropertyAdWordsLinks.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - ID of the account which the given web property belongs to.
* webPropertyId (string) **required** - Web property ID to retrieve the AdWords links for.
* max-results (integer) - The maximum number of webProperty-AdWords links to include in this response.
* start-index (integer) - An index of the first webProperty-AdWords link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webPropertyAdWordsLinks.insert
Creates a webProperty-AdWords link.


```js
google_analytics.management.webPropertyAdWordsLinks.insert({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - ID of the Google Analytics account to create the link for.
* webPropertyId (string) **required** - Web property ID to create the link for.
* body (object) - JSON template for Analytics Entity AdWords Link.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webPropertyAdWordsLinks.delete
Deletes a web property-AdWords link.


```js
google_analytics.management.webPropertyAdWordsLinks.delete({
  "accountId": "",
  "webPropertyId": "",
  "webPropertyAdWordsLinkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - ID of the account which the given web property belongs to.
* webPropertyId (string) **required** - Web property ID to delete the AdWords link for.
* webPropertyAdWordsLinkId (string) **required** - Web property AdWords link ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webPropertyAdWordsLinks.get
Returns a web property-AdWords link to which the user has access.


```js
google_analytics.management.webPropertyAdWordsLinks.get({
  "accountId": "",
  "webPropertyId": "",
  "webPropertyAdWordsLinkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - ID of the account which the given web property belongs to.
* webPropertyId (string) **required** - Web property ID to retrieve the AdWords link for.
* webPropertyAdWordsLinkId (string) **required** - Web property-AdWords link ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webPropertyAdWordsLinks.patch
Updates an existing webProperty-AdWords link. This method supports patch semantics.


```js
google_analytics.management.webPropertyAdWordsLinks.patch({
  "accountId": "",
  "webPropertyId": "",
  "webPropertyAdWordsLinkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - ID of the account which the given web property belongs to.
* webPropertyId (string) **required** - Web property ID to retrieve the AdWords link for.
* webPropertyAdWordsLinkId (string) **required** - Web property-AdWords link ID.
* body (object) - JSON template for Analytics Entity AdWords Link.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webPropertyAdWordsLinks.update
Updates an existing webProperty-AdWords link.


```js
google_analytics.management.webPropertyAdWordsLinks.update({
  "accountId": "",
  "webPropertyId": "",
  "webPropertyAdWordsLinkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - ID of the account which the given web property belongs to.
* webPropertyId (string) **required** - Web property ID to retrieve the AdWords link for.
* webPropertyAdWordsLinkId (string) **required** - Web property-AdWords link ID.
* body (object) - JSON template for Analytics Entity AdWords Link.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webpropertyUserLinks.list
Lists webProperty-user links for a given web property.


```js
google_analytics.management.webpropertyUserLinks.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID which the given web property belongs to.
* webPropertyId (string) **required** - Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
* max-results (integer) - The maximum number of webProperty-user Links to include in this response.
* start-index (integer) - An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webpropertyUserLinks.insert
Adds a new user to the given web property.


```js
google_analytics.management.webpropertyUserLinks.insert({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to create the user link for.
* webPropertyId (string) **required** - Web Property ID to create the user link for.
* body (object) - JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webpropertyUserLinks.delete
Removes a user from the given web property.


```js
google_analytics.management.webpropertyUserLinks.delete({
  "accountId": "",
  "webPropertyId": "",
  "linkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to delete the user link for.
* webPropertyId (string) **required** - Web Property ID to delete the user link for.
* linkId (string) **required** - Link ID to delete the user link for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.webpropertyUserLinks.update
Updates permissions for an existing user on the given web property.


```js
google_analytics.management.webpropertyUserLinks.update({
  "accountId": "",
  "webPropertyId": "",
  "linkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to update the account-user link for.
* webPropertyId (string) **required** - Web property ID to update the account-user link for.
* linkId (string) **required** - Link ID to update the account-user link for.
* body (object) - JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profiles.list
Lists views (profiles) to which the user has access.


```js
google_analytics.management.profiles.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
* webPropertyId (string) **required** - Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
* max-results (integer) - The maximum number of views (profiles) to include in this response.
* start-index (integer) - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profiles.insert
Create a new view (profile).


```js
google_analytics.management.profiles.insert({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to create the view (profile) for.
* webPropertyId (string) **required** - Web property ID to create the view (profile) for.
* body (object) - JSON template for an Analytics view (profile).
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profiles.delete
Deletes a view (profile).


```js
google_analytics.management.profiles.delete({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to delete the view (profile) for.
* webPropertyId (string) **required** - Web property ID to delete the view (profile) for.
* profileId (string) **required** - ID of the view (profile) to be deleted.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profiles.get
Gets a view (profile) to which the user has access.


```js
google_analytics.management.profiles.get({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve the view (profile) for.
* webPropertyId (string) **required** - Web property ID to retrieve the view (profile) for.
* profileId (string) **required** - View (Profile) ID to retrieve the view (profile) for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profiles.patch
Updates an existing view (profile). This method supports patch semantics.


```js
google_analytics.management.profiles.patch({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to which the view (profile) belongs
* webPropertyId (string) **required** - Web property ID to which the view (profile) belongs
* profileId (string) **required** - ID of the view (profile) to be updated.
* body (object) - JSON template for an Analytics view (profile).
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profiles.update
Updates an existing view (profile).


```js
google_analytics.management.profiles.update({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to which the view (profile) belongs
* webPropertyId (string) **required** - Web property ID to which the view (profile) belongs
* profileId (string) **required** - ID of the view (profile) to be updated.
* body (object) - JSON template for an Analytics view (profile).
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profileUserLinks.list
Lists profile-user links for a given view (profile).


```js
google_analytics.management.profileUserLinks.list({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID which the given view (profile) belongs to.
* webPropertyId (string) **required** - Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
* profileId (string) **required** - View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
* max-results (integer) - The maximum number of profile-user links to include in this response.
* start-index (integer) - An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profileUserLinks.insert
Adds a new user to the given view (profile).


```js
google_analytics.management.profileUserLinks.insert({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to create the user link for.
* webPropertyId (string) **required** - Web Property ID to create the user link for.
* profileId (string) **required** - View (Profile) ID to create the user link for.
* body (object) - JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profileUserLinks.delete
Removes a user from the given view (profile).


```js
google_analytics.management.profileUserLinks.delete({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "linkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to delete the user link for.
* webPropertyId (string) **required** - Web Property ID to delete the user link for.
* profileId (string) **required** - View (Profile) ID to delete the user link for.
* linkId (string) **required** - Link ID to delete the user link for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profileUserLinks.update
Updates permissions for an existing user on the given view (profile).


```js
google_analytics.management.profileUserLinks.update({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "linkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to update the user link for.
* webPropertyId (string) **required** - Web Property ID to update the user link for.
* profileId (string) **required** - View (Profile ID) to update the user link for.
* linkId (string) **required** - Link ID to update the user link for.
* body (object) - JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.experiments.list
Lists experiments to which the user has access.


```js
google_analytics.management.experiments.list({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve experiments for.
* webPropertyId (string) **required** - Web property ID to retrieve experiments for.
* profileId (string) **required** - View (Profile) ID to retrieve experiments for.
* max-results (integer) - The maximum number of experiments to include in this response.
* start-index (integer) - An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.experiments.insert
Create a new experiment.


```js
google_analytics.management.experiments.insert({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to create the experiment for.
* webPropertyId (string) **required** - Web property ID to create the experiment for.
* profileId (string) **required** - View (Profile) ID to create the experiment for.
* body (object) - JSON template for Analytics experiment resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.experiments.delete
Delete an experiment.


```js
google_analytics.management.experiments.delete({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "experimentId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to which the experiment belongs
* webPropertyId (string) **required** - Web property ID to which the experiment belongs
* profileId (string) **required** - View (Profile) ID to which the experiment belongs
* experimentId (string) **required** - ID of the experiment to delete
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.experiments.get
Returns an experiment to which the user has access.


```js
google_analytics.management.experiments.get({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "experimentId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve the experiment for.
* webPropertyId (string) **required** - Web property ID to retrieve the experiment for.
* profileId (string) **required** - View (Profile) ID to retrieve the experiment for.
* experimentId (string) **required** - Experiment ID to retrieve the experiment for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.experiments.patch
Update an existing experiment. This method supports patch semantics.


```js
google_analytics.management.experiments.patch({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "experimentId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID of the experiment to update.
* webPropertyId (string) **required** - Web property ID of the experiment to update.
* profileId (string) **required** - View (Profile) ID of the experiment to update.
* experimentId (string) **required** - Experiment ID of the experiment to update.
* body (object) - JSON template for Analytics experiment resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.experiments.update
Update an existing experiment.


```js
google_analytics.management.experiments.update({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "experimentId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID of the experiment to update.
* webPropertyId (string) **required** - Web property ID of the experiment to update.
* profileId (string) **required** - View (Profile) ID of the experiment to update.
* experimentId (string) **required** - Experiment ID of the experiment to update.
* body (object) - JSON template for Analytics experiment resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.goals.list
Lists goals to which the user has access.


```js
google_analytics.management.goals.list({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
* webPropertyId (string) **required** - Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
* profileId (string) **required** - View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
* max-results (integer) - The maximum number of goals to include in this response.
* start-index (integer) - An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.goals.insert
Create a new goal.


```js
google_analytics.management.goals.insert({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to create the goal for.
* webPropertyId (string) **required** - Web property ID to create the goal for.
* profileId (string) **required** - View (Profile) ID to create the goal for.
* body (object) - JSON template for Analytics goal resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.goals.get
Gets a goal to which the user has access.


```js
google_analytics.management.goals.get({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "goalId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve the goal for.
* webPropertyId (string) **required** - Web property ID to retrieve the goal for.
* profileId (string) **required** - View (Profile) ID to retrieve the goal for.
* goalId (string) **required** - Goal ID to retrieve the goal for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.goals.patch
Updates an existing goal. This method supports patch semantics.


```js
google_analytics.management.goals.patch({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "goalId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to update the goal.
* webPropertyId (string) **required** - Web property ID to update the goal.
* profileId (string) **required** - View (Profile) ID to update the goal.
* goalId (string) **required** - Index of the goal to be updated.
* body (object) - JSON template for Analytics goal resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.goals.update
Updates an existing goal.


```js
google_analytics.management.goals.update({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "goalId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to update the goal.
* webPropertyId (string) **required** - Web property ID to update the goal.
* profileId (string) **required** - View (Profile) ID to update the goal.
* goalId (string) **required** - Index of the goal to be updated.
* body (object) - JSON template for Analytics goal resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profileFilterLinks.list
Lists all profile filter links for a profile.


```js
google_analytics.management.profileFilterLinks.list({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve profile filter links for.
* webPropertyId (string) **required** - Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
* profileId (string) **required** - Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
* max-results (integer) - The maximum number of profile filter links to include in this response.
* start-index (integer) - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profileFilterLinks.insert
Create a new profile filter link.


```js
google_analytics.management.profileFilterLinks.insert({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to create profile filter link for.
* webPropertyId (string) **required** - Web property Id to create profile filter link for.
* profileId (string) **required** - Profile ID to create filter link for.
* body (object) - JSON template for an Analytics profile filter link.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profileFilterLinks.delete
Delete a profile filter link.


```js
google_analytics.management.profileFilterLinks.delete({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "linkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to which the profile filter link belongs.
* webPropertyId (string) **required** - Web property Id to which the profile filter link belongs.
* profileId (string) **required** - Profile ID to which the filter link belongs.
* linkId (string) **required** - ID of the profile filter link to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profileFilterLinks.get
Returns a single profile filter link.


```js
google_analytics.management.profileFilterLinks.get({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "linkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve profile filter link for.
* webPropertyId (string) **required** - Web property Id to retrieve profile filter link for.
* profileId (string) **required** - Profile ID to retrieve filter link for.
* linkId (string) **required** - ID of the profile filter link.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profileFilterLinks.patch
Update an existing profile filter link. This method supports patch semantics.


```js
google_analytics.management.profileFilterLinks.patch({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "linkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to which profile filter link belongs.
* webPropertyId (string) **required** - Web property Id to which profile filter link belongs
* profileId (string) **required** - Profile ID to which filter link belongs
* linkId (string) **required** - ID of the profile filter link to be updated.
* body (object) - JSON template for an Analytics profile filter link.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.profileFilterLinks.update
Update an existing profile filter link.


```js
google_analytics.management.profileFilterLinks.update({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "linkId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to which profile filter link belongs.
* webPropertyId (string) **required** - Web property Id to which profile filter link belongs
* profileId (string) **required** - Profile ID to which filter link belongs
* linkId (string) **required** - ID of the profile filter link to be updated.
* body (object) - JSON template for an Analytics profile filter link.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.unsampledReports.list
Lists unsampled reports to which the user has access.


```js
google_analytics.management.unsampledReports.list({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
* webPropertyId (string) **required** - Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
* profileId (string) **required** - View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
* max-results (integer) - The maximum number of unsampled reports to include in this response.
* start-index (integer) - An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.unsampledReports.insert
Create a new unsampled report.


```js
google_analytics.management.unsampledReports.insert({
  "accountId": "",
  "webPropertyId": "",
  "profileId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to create the unsampled report for.
* webPropertyId (string) **required** - Web property ID to create the unsampled report for.
* profileId (string) **required** - View (Profile) ID to create the unsampled report for.
* body (object) - JSON template for Analytics unsampled report resource.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.unsampledReports.delete
Deletes an unsampled report.


```js
google_analytics.management.unsampledReports.delete({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "unsampledReportId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to delete the unsampled report for.
* webPropertyId (string) **required** - Web property ID to delete the unsampled reports for.
* profileId (string) **required** - View (Profile) ID to delete the unsampled report for.
* unsampledReportId (string) **required** - ID of the unsampled report to be deleted.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.unsampledReports.get
Returns a single unsampled report.


```js
google_analytics.management.unsampledReports.get({
  "accountId": "",
  "webPropertyId": "",
  "profileId": "",
  "unsampledReportId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to retrieve unsampled report for.
* webPropertyId (string) **required** - Web property ID to retrieve unsampled reports for.
* profileId (string) **required** - View (Profile) ID to retrieve unsampled report for.
* unsampledReportId (string) **required** - ID of the unsampled report to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.remarketingAudience.list
Lists remarketing audiences to which the user has access.


```js
google_analytics.management.remarketingAudience.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account ID of the remarketing audiences to retrieve.
* webPropertyId (string) **required** - The web property ID of the remarketing audiences to retrieve.
* max-results (integer) - The maximum number of remarketing audiences to include in this response.
* start-index (integer) - An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* type (string)
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.remarketingAudience.insert
Creates a new remarketing audience.


```js
google_analytics.management.remarketingAudience.insert({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account ID for which to create the remarketing audience.
* webPropertyId (string) **required** - Web property ID for which to create the remarketing audience.
* body (object) - JSON template for an Analytics remarketing audience.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.remarketingAudience.delete
Delete a remarketing audience.


```js
google_analytics.management.remarketingAudience.delete({
  "accountId": "",
  "remarketingAudienceId": "",
  "webPropertyId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account ID to which the remarketing audience belongs.
* remarketingAudienceId (string) **required** - The ID of the remarketing audience to delete.
* webPropertyId (string) **required** - Web property ID to which the remarketing audience belongs.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.remarketingAudience.get
Gets a remarketing audience to which the user has access.


```js
google_analytics.management.remarketingAudience.get({
  "accountId": "",
  "webPropertyId": "",
  "remarketingAudienceId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account ID of the remarketing audience to retrieve.
* webPropertyId (string) **required** - The web property ID of the remarketing audience to retrieve.
* remarketingAudienceId (string) **required** - The ID of the remarketing audience to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.remarketingAudience.patch
Updates an existing remarketing audience. This method supports patch semantics.


```js
google_analytics.management.remarketingAudience.patch({
  "accountId": "",
  "webPropertyId": "",
  "remarketingAudienceId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account ID of the remarketing audience to update.
* webPropertyId (string) **required** - The web property ID of the remarketing audience to update.
* remarketingAudienceId (string) **required** - The ID of the remarketing audience to update.
* body (object) - JSON template for an Analytics remarketing audience.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.remarketingAudience.update
Updates an existing remarketing audience.


```js
google_analytics.management.remarketingAudience.update({
  "accountId": "",
  "webPropertyId": "",
  "remarketingAudienceId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - The account ID of the remarketing audience to update.
* webPropertyId (string) **required** - The web property ID of the remarketing audience to update.
* remarketingAudienceId (string) **required** - The ID of the remarketing audience to update.
* body (object) - JSON template for an Analytics remarketing audience.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### management.segments.list
Lists segments to which the user has access.


```js
google_analytics.management.segments.list({}, context)
```

#### Parameters
* max-results (integer) - The maximum number of segments to include in this response.
* start-index (integer) - An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### metadata.columns.list
Lists all columns for a report type


```js
google_analytics.metadata.columns.list({
  "reportType": ""
}, context)
```

#### Parameters
* reportType (string) **required** - Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### provisioning.createAccountTicket
Creates an account ticket.


```js
google_analytics.provisioning.createAccountTicket({}, context)
```

#### Parameters
* body (object) - JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

