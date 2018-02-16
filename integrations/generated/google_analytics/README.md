# @datafire/google_analytics

Client library for Google Analytics

## Installation and Usage
```bash
npm install --save @datafire/google_analytics
```
```js
let google_analytics = require('@datafire/google_analytics').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_analytics.provisioning.createAccountTicket({}).then(data => {
  console.log(data);
});
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
google_analytics.oauthRefresh(null, context)
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

### data.ga.get
Returns Analytics data for a view (profile).


```js
google_analytics.data.ga.get({
  "end-date": "",
  "ids": "",
  "metrics": "",
  "start-date": ""
}, context)
```

#### Input
* input `object`
  * dimensions `string`: A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'.
  * end-date **required** `string`: End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
  * filters `string`: A comma-separated list of dimension or metric filters to be applied to Analytics data.
  * ids **required** `string`: Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
  * include-empty-rows `boolean`: The response will include empty rows if this parameter is set to true, the default is true
  * max-results `integer`: The maximum number of entries to include in this feed.
  * metrics **required** `string`: A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
  * output `string` (values: dataTable, json): The selected format for the response. Default format is JSON.
  * samplingLevel `string` (values: DEFAULT, FASTER, HIGHER_PRECISION): The desired sampling level.
  * segment `string`: An Analytics segment to be applied to data.
  * sort `string`: A comma-separated list of dimensions or metrics that determine the sort order for Analytics data.
  * start-date **required** `string`: Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
  * start-index `integer`: An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GaData](#gadata)

### data.mcf.get
Returns Analytics Multi-Channel Funnels data for a view (profile).


```js
google_analytics.data.mcf.get({
  "end-date": "",
  "ids": "",
  "metrics": "",
  "start-date": ""
}, context)
```

#### Input
* input `object`
  * dimensions `string`: A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'.
  * end-date **required** `string`: End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
  * filters `string`: A comma-separated list of dimension or metric filters to be applied to the Analytics data.
  * ids **required** `string`: Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
  * max-results `integer`: The maximum number of entries to include in this feed.
  * metrics **required** `string`: A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
  * samplingLevel `string` (values: DEFAULT, FASTER, HIGHER_PRECISION): The desired sampling level.
  * sort `string`: A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data.
  * start-date **required** `string`: Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
  * start-index `integer`: An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [McfData](#mcfdata)

### data.realtime.get
Returns real time data for a view (profile).


```js
google_analytics.data.realtime.get({
  "ids": "",
  "metrics": ""
}, context)
```

#### Input
* input `object`
  * dimensions `string`: A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'.
  * filters `string`: A comma-separated list of dimension or metric filters to be applied to real time data.
  * ids **required** `string`: Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
  * max-results `integer`: The maximum number of entries to include in this feed.
  * metrics **required** `string`: A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
  * sort `string`: A comma-separated list of dimensions or metrics that determine the sort order for real time data.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RealtimeData](#realtimedata)

### management.accountSummaries.list
Lists account summaries (lightweight tree comprised of accounts/properties/profiles) to which the user has access.


```js
google_analytics.management.accountSummaries.list({}, context)
```

#### Input
* input `object`
  * max-results `integer`: The maximum number of account summaries to include in this response, where the largest acceptable value is 1000.
  * start-index `integer`: An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountSummaries](#accountsummaries)

### management.accounts.list
Lists all accounts to which the user has access.


```js
google_analytics.management.accounts.list({}, context)
```

#### Input
* input `object`
  * max-results `integer`: The maximum number of accounts to include in this response.
  * start-index `integer`: An index of the first account to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Accounts](#accounts)

### management.accountUserLinks.list
Lists account-user links for a given account.


```js
google_analytics.management.accountUserLinks.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve the user links for.
  * max-results `integer`: The maximum number of account-user links to include in this response.
  * start-index `integer`: An index of the first account-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityUserLinks](#entityuserlinks)

### management.accountUserLinks.insert
Adds a new user to the given account.


```js
google_analytics.management.accountUserLinks.insert({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to create the user link for.
  * body [EntityUserLink](#entityuserlink)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityUserLink](#entityuserlink)

### management.accountUserLinks.delete
Removes a user from the given account.


```js
google_analytics.management.accountUserLinks.delete({
  "accountId": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to delete the user link for.
  * linkId **required** `string`: Link ID to delete the user link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### management.accountUserLinks.update
Updates permissions for an existing user on the given account.


```js
google_analytics.management.accountUserLinks.update({
  "accountId": "",
  "linkId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to update the account-user link for.
  * body [EntityUserLink](#entityuserlink)
  * linkId **required** `string`: Link ID to update the account-user link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityUserLink](#entityuserlink)

### management.filters.list
Lists all filters for an account


```js
google_analytics.management.filters.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve filters for.
  * max-results `integer`: The maximum number of filters to include in this response.
  * start-index `integer`: An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Filters](#filters)

### management.filters.insert
Create a new filter.


```js
google_analytics.management.filters.insert({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to create filter for.
  * body [Filter](#filter)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Filter](#filter)

### management.filters.delete
Delete a filter.


```js
google_analytics.management.filters.delete({
  "accountId": "",
  "filterId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to delete the filter for.
  * filterId **required** `string`: ID of the filter to be deleted.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Filter](#filter)

### management.filters.get
Returns a filters to which the user has access.


```js
google_analytics.management.filters.get({
  "accountId": "",
  "filterId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve filters for.
  * filterId **required** `string`: Filter ID to retrieve filters for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Filter](#filter)

### management.filters.patch
Updates an existing filter. This method supports patch semantics.


```js
google_analytics.management.filters.patch({
  "accountId": "",
  "filterId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to which the filter belongs.
  * body [Filter](#filter)
  * filterId **required** `string`: ID of the filter to be updated.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Filter](#filter)

### management.filters.update
Updates an existing filter.


```js
google_analytics.management.filters.update({
  "accountId": "",
  "filterId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to which the filter belongs.
  * body [Filter](#filter)
  * filterId **required** `string`: ID of the filter to be updated.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Filter](#filter)

### management.webproperties.list
Lists web properties to which the user has access.


```js
google_analytics.management.webproperties.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve web properties for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
  * max-results `integer`: The maximum number of web properties to include in this response.
  * start-index `integer`: An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Webproperties](#webproperties)

### management.webproperties.insert
Create a new property if the account has fewer than 20 properties. Web properties are visible in the Google Analytics interface only if they have at least one profile.


```js
google_analytics.management.webproperties.insert({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to create the web property for.
  * body [Webproperty](#webproperty)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Webproperty](#webproperty)

### management.webproperties.get
Gets a web property to which the user has access.


```js
google_analytics.management.webproperties.get({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve the web property for.
  * webPropertyId **required** `string`: ID to retrieve the web property for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Webproperty](#webproperty)

### management.webproperties.patch
Updates an existing web property. This method supports patch semantics.


```js
google_analytics.management.webproperties.patch({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to which the web property belongs
  * body [Webproperty](#webproperty)
  * webPropertyId **required** `string`: Web property ID
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Webproperty](#webproperty)

### management.webproperties.update
Updates an existing web property.


```js
google_analytics.management.webproperties.update({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to which the web property belongs
  * body [Webproperty](#webproperty)
  * webPropertyId **required** `string`: Web property ID
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Webproperty](#webproperty)

### management.customDataSources.list
List custom data sources to which the user has access.


```js
google_analytics.management.customDataSources.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account Id for the custom data sources to retrieve.
  * max-results `integer`: The maximum number of custom data sources to include in this response.
  * start-index `integer`: A 1-based index of the first custom data source to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * webPropertyId **required** `string`: Web property Id for the custom data sources to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CustomDataSources](#customdatasources)

### management.uploads.deleteUploadData
Delete data associated with a previous upload.


```js
google_analytics.management.uploads.deleteUploadData({
  "accountId": "",
  "customDataSourceId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account Id for the uploads to be deleted.
  * body [AnalyticsDataimportDeleteUploadDataRequest](#analyticsdataimportdeleteuploaddatarequest)
  * customDataSourceId **required** `string`: Custom data source Id for the uploads to be deleted.
  * webPropertyId **required** `string`: Web property Id for the uploads to be deleted.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### management.uploads.list
List uploads to which the user has access.


```js
google_analytics.management.uploads.list({
  "accountId": "",
  "customDataSourceId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account Id for the uploads to retrieve.
  * customDataSourceId **required** `string`: Custom data source Id for uploads to retrieve.
  * max-results `integer`: The maximum number of uploads to include in this response.
  * start-index `integer`: A 1-based index of the first upload to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * webPropertyId **required** `string`: Web property Id for the uploads to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Uploads](#uploads)

### management.uploads.uploadData
Upload data for a custom data source.


```js
google_analytics.management.uploads.uploadData({
  "accountId": "",
  "customDataSourceId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account Id associated with the upload.
  * customDataSourceId **required** `string`: Custom data source Id to which the data being uploaded belongs.
  * webPropertyId **required** `string`: Web property UA-string associated with the upload.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Upload](#upload)

### management.uploads.get
List uploads to which the user has access.


```js
google_analytics.management.uploads.get({
  "accountId": "",
  "customDataSourceId": "",
  "uploadId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account Id for the upload to retrieve.
  * customDataSourceId **required** `string`: Custom data source Id for upload to retrieve.
  * uploadId **required** `string`: Upload Id to retrieve.
  * webPropertyId **required** `string`: Web property Id for the upload to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Upload](#upload)

### management.customDimensions.list
Lists custom dimensions to which the user has access.


```js
google_analytics.management.customDimensions.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID for the custom dimensions to retrieve.
  * max-results `integer`: The maximum number of custom dimensions to include in this response.
  * start-index `integer`: An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * webPropertyId **required** `string`: Web property ID for the custom dimensions to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CustomDimensions](#customdimensions)

### management.customDimensions.insert
Create a new custom dimension.


```js
google_analytics.management.customDimensions.insert({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID for the custom dimension to create.
  * body [CustomDimension](#customdimension)
  * webPropertyId **required** `string`: Web property ID for the custom dimension to create.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CustomDimension](#customdimension)

### management.customDimensions.get
Get a custom dimension to which the user has access.


```js
google_analytics.management.customDimensions.get({
  "accountId": "",
  "customDimensionId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID for the custom dimension to retrieve.
  * customDimensionId **required** `string`: The ID of the custom dimension to retrieve.
  * webPropertyId **required** `string`: Web property ID for the custom dimension to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CustomDimension](#customdimension)

### management.customDimensions.patch
Updates an existing custom dimension. This method supports patch semantics.


```js
google_analytics.management.customDimensions.patch({
  "accountId": "",
  "customDimensionId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID for the custom dimension to update.
  * body [CustomDimension](#customdimension)
  * customDimensionId **required** `string`: Custom dimension ID for the custom dimension to update.
  * ignoreCustomDataSourceLinks `boolean`: Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
  * webPropertyId **required** `string`: Web property ID for the custom dimension to update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CustomDimension](#customdimension)

### management.customDimensions.update
Updates an existing custom dimension.


```js
google_analytics.management.customDimensions.update({
  "accountId": "",
  "customDimensionId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID for the custom dimension to update.
  * body [CustomDimension](#customdimension)
  * customDimensionId **required** `string`: Custom dimension ID for the custom dimension to update.
  * ignoreCustomDataSourceLinks `boolean`: Force the update and ignore any warnings related to the custom dimension being linked to a custom data source / data set.
  * webPropertyId **required** `string`: Web property ID for the custom dimension to update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CustomDimension](#customdimension)

### management.customMetrics.list
Lists custom metrics to which the user has access.


```js
google_analytics.management.customMetrics.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID for the custom metrics to retrieve.
  * max-results `integer`: The maximum number of custom metrics to include in this response.
  * start-index `integer`: An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * webPropertyId **required** `string`: Web property ID for the custom metrics to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CustomMetrics](#custommetrics)

### management.customMetrics.insert
Create a new custom metric.


```js
google_analytics.management.customMetrics.insert({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID for the custom metric to create.
  * body [CustomMetric](#custommetric)
  * webPropertyId **required** `string`: Web property ID for the custom dimension to create.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CustomMetric](#custommetric)

### management.customMetrics.get
Get a custom metric to which the user has access.


```js
google_analytics.management.customMetrics.get({
  "accountId": "",
  "customMetricId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID for the custom metric to retrieve.
  * customMetricId **required** `string`: The ID of the custom metric to retrieve.
  * webPropertyId **required** `string`: Web property ID for the custom metric to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CustomMetric](#custommetric)

### management.customMetrics.patch
Updates an existing custom metric. This method supports patch semantics.


```js
google_analytics.management.customMetrics.patch({
  "accountId": "",
  "customMetricId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID for the custom metric to update.
  * body [CustomMetric](#custommetric)
  * customMetricId **required** `string`: Custom metric ID for the custom metric to update.
  * ignoreCustomDataSourceLinks `boolean`: Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
  * webPropertyId **required** `string`: Web property ID for the custom metric to update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CustomMetric](#custommetric)

### management.customMetrics.update
Updates an existing custom metric.


```js
google_analytics.management.customMetrics.update({
  "accountId": "",
  "customMetricId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID for the custom metric to update.
  * body [CustomMetric](#custommetric)
  * customMetricId **required** `string`: Custom metric ID for the custom metric to update.
  * ignoreCustomDataSourceLinks `boolean`: Force the update and ignore any warnings related to the custom metric being linked to a custom data source / data set.
  * webPropertyId **required** `string`: Web property ID for the custom metric to update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [CustomMetric](#custommetric)

### management.webPropertyAdWordsLinks.list
Lists webProperty-AdWords links for a given web property.


```js
google_analytics.management.webPropertyAdWordsLinks.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: ID of the account which the given web property belongs to.
  * max-results `integer`: The maximum number of webProperty-AdWords links to include in this response.
  * start-index `integer`: An index of the first webProperty-AdWords link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * webPropertyId **required** `string`: Web property ID to retrieve the AdWords links for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityAdWordsLinks](#entityadwordslinks)

### management.webPropertyAdWordsLinks.insert
Creates a webProperty-AdWords link.


```js
google_analytics.management.webPropertyAdWordsLinks.insert({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: ID of the Google Analytics account to create the link for.
  * body [EntityAdWordsLink](#entityadwordslink)
  * webPropertyId **required** `string`: Web property ID to create the link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityAdWordsLink](#entityadwordslink)

### management.webPropertyAdWordsLinks.delete
Deletes a web property-AdWords link.


```js
google_analytics.management.webPropertyAdWordsLinks.delete({
  "accountId": "",
  "webPropertyAdWordsLinkId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: ID of the account which the given web property belongs to.
  * webPropertyAdWordsLinkId **required** `string`: Web property AdWords link ID.
  * webPropertyId **required** `string`: Web property ID to delete the AdWords link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### management.webPropertyAdWordsLinks.get
Returns a web property-AdWords link to which the user has access.


```js
google_analytics.management.webPropertyAdWordsLinks.get({
  "accountId": "",
  "webPropertyAdWordsLinkId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: ID of the account which the given web property belongs to.
  * webPropertyAdWordsLinkId **required** `string`: Web property-AdWords link ID.
  * webPropertyId **required** `string`: Web property ID to retrieve the AdWords link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityAdWordsLink](#entityadwordslink)

### management.webPropertyAdWordsLinks.patch
Updates an existing webProperty-AdWords link. This method supports patch semantics.


```js
google_analytics.management.webPropertyAdWordsLinks.patch({
  "accountId": "",
  "webPropertyAdWordsLinkId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: ID of the account which the given web property belongs to.
  * body [EntityAdWordsLink](#entityadwordslink)
  * webPropertyAdWordsLinkId **required** `string`: Web property-AdWords link ID.
  * webPropertyId **required** `string`: Web property ID to retrieve the AdWords link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityAdWordsLink](#entityadwordslink)

### management.webPropertyAdWordsLinks.update
Updates an existing webProperty-AdWords link.


```js
google_analytics.management.webPropertyAdWordsLinks.update({
  "accountId": "",
  "webPropertyAdWordsLinkId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: ID of the account which the given web property belongs to.
  * body [EntityAdWordsLink](#entityadwordslink)
  * webPropertyAdWordsLinkId **required** `string`: Web property-AdWords link ID.
  * webPropertyId **required** `string`: Web property ID to retrieve the AdWords link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityAdWordsLink](#entityadwordslink)

### management.webpropertyUserLinks.list
Lists webProperty-user links for a given web property.


```js
google_analytics.management.webpropertyUserLinks.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID which the given web property belongs to.
  * max-results `integer`: The maximum number of webProperty-user Links to include in this response.
  * start-index `integer`: An index of the first webProperty-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * webPropertyId **required** `string`: Web Property ID for the webProperty-user links to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityUserLinks](#entityuserlinks)

### management.webpropertyUserLinks.insert
Adds a new user to the given web property.


```js
google_analytics.management.webpropertyUserLinks.insert({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to create the user link for.
  * body [EntityUserLink](#entityuserlink)
  * webPropertyId **required** `string`: Web Property ID to create the user link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityUserLink](#entityuserlink)

### management.webpropertyUserLinks.delete
Removes a user from the given web property.


```js
google_analytics.management.webpropertyUserLinks.delete({
  "accountId": "",
  "linkId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to delete the user link for.
  * linkId **required** `string`: Link ID to delete the user link for.
  * webPropertyId **required** `string`: Web Property ID to delete the user link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### management.webpropertyUserLinks.update
Updates permissions for an existing user on the given web property.


```js
google_analytics.management.webpropertyUserLinks.update({
  "accountId": "",
  "linkId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to update the account-user link for.
  * body [EntityUserLink](#entityuserlink)
  * linkId **required** `string`: Link ID to update the account-user link for.
  * webPropertyId **required** `string`: Web property ID to update the account-user link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityUserLink](#entityuserlink)

### management.profiles.list
Lists views (profiles) to which the user has access.


```js
google_analytics.management.profiles.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID for the view (profiles) to retrieve. Can either be a specific account ID or '~all', which refers to all the accounts to which the user has access.
  * max-results `integer`: The maximum number of views (profiles) to include in this response.
  * start-index `integer`: An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * webPropertyId **required** `string`: Web property ID for the views (profiles) to retrieve. Can either be a specific web property ID or '~all', which refers to all the web properties to which the user has access.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Profiles](#profiles)

### management.profiles.insert
Create a new view (profile).


```js
google_analytics.management.profiles.insert({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to create the view (profile) for.
  * body [Profile](#profile)
  * webPropertyId **required** `string`: Web property ID to create the view (profile) for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Profile](#profile)

### management.profiles.delete
Deletes a view (profile).


```js
google_analytics.management.profiles.delete({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to delete the view (profile) for.
  * profileId **required** `string`: ID of the view (profile) to be deleted.
  * webPropertyId **required** `string`: Web property ID to delete the view (profile) for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### management.profiles.get
Gets a view (profile) to which the user has access.


```js
google_analytics.management.profiles.get({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve the view (profile) for.
  * profileId **required** `string`: View (Profile) ID to retrieve the view (profile) for.
  * webPropertyId **required** `string`: Web property ID to retrieve the view (profile) for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Profile](#profile)

### management.profiles.patch
Updates an existing view (profile). This method supports patch semantics.


```js
google_analytics.management.profiles.patch({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to which the view (profile) belongs
  * body [Profile](#profile)
  * profileId **required** `string`: ID of the view (profile) to be updated.
  * webPropertyId **required** `string`: Web property ID to which the view (profile) belongs
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Profile](#profile)

### management.profiles.update
Updates an existing view (profile).


```js
google_analytics.management.profiles.update({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to which the view (profile) belongs
  * body [Profile](#profile)
  * profileId **required** `string`: ID of the view (profile) to be updated.
  * webPropertyId **required** `string`: Web property ID to which the view (profile) belongs
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Profile](#profile)

### management.profileUserLinks.list
Lists profile-user links for a given view (profile).


```js
google_analytics.management.profileUserLinks.list({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID which the given view (profile) belongs to.
  * max-results `integer`: The maximum number of profile-user links to include in this response.
  * profileId **required** `string`: View (Profile) ID to retrieve the profile-user links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
  * start-index `integer`: An index of the first profile-user link to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * webPropertyId **required** `string`: Web Property ID which the given view (profile) belongs to. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityUserLinks](#entityuserlinks)

### management.profileUserLinks.insert
Adds a new user to the given view (profile).


```js
google_analytics.management.profileUserLinks.insert({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to create the user link for.
  * body [EntityUserLink](#entityuserlink)
  * profileId **required** `string`: View (Profile) ID to create the user link for.
  * webPropertyId **required** `string`: Web Property ID to create the user link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityUserLink](#entityuserlink)

### management.profileUserLinks.delete
Removes a user from the given view (profile).


```js
google_analytics.management.profileUserLinks.delete({
  "accountId": "",
  "linkId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to delete the user link for.
  * linkId **required** `string`: Link ID to delete the user link for.
  * profileId **required** `string`: View (Profile) ID to delete the user link for.
  * webPropertyId **required** `string`: Web Property ID to delete the user link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### management.profileUserLinks.update
Updates permissions for an existing user on the given view (profile).


```js
google_analytics.management.profileUserLinks.update({
  "accountId": "",
  "linkId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to update the user link for.
  * body [EntityUserLink](#entityuserlink)
  * linkId **required** `string`: Link ID to update the user link for.
  * profileId **required** `string`: View (Profile ID) to update the user link for.
  * webPropertyId **required** `string`: Web Property ID to update the user link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [EntityUserLink](#entityuserlink)

### management.experiments.list
Lists experiments to which the user has access.


```js
google_analytics.management.experiments.list({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve experiments for.
  * max-results `integer`: The maximum number of experiments to include in this response.
  * profileId **required** `string`: View (Profile) ID to retrieve experiments for.
  * start-index `integer`: An index of the first experiment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * webPropertyId **required** `string`: Web property ID to retrieve experiments for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Experiments](#experiments)

### management.experiments.insert
Create a new experiment.


```js
google_analytics.management.experiments.insert({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to create the experiment for.
  * body [Experiment](#experiment)
  * profileId **required** `string`: View (Profile) ID to create the experiment for.
  * webPropertyId **required** `string`: Web property ID to create the experiment for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Experiment](#experiment)

### management.experiments.delete
Delete an experiment.


```js
google_analytics.management.experiments.delete({
  "accountId": "",
  "experimentId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to which the experiment belongs
  * experimentId **required** `string`: ID of the experiment to delete
  * profileId **required** `string`: View (Profile) ID to which the experiment belongs
  * webPropertyId **required** `string`: Web property ID to which the experiment belongs
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### management.experiments.get
Returns an experiment to which the user has access.


```js
google_analytics.management.experiments.get({
  "accountId": "",
  "experimentId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve the experiment for.
  * experimentId **required** `string`: Experiment ID to retrieve the experiment for.
  * profileId **required** `string`: View (Profile) ID to retrieve the experiment for.
  * webPropertyId **required** `string`: Web property ID to retrieve the experiment for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Experiment](#experiment)

### management.experiments.patch
Update an existing experiment. This method supports patch semantics.


```js
google_analytics.management.experiments.patch({
  "accountId": "",
  "experimentId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the experiment to update.
  * body [Experiment](#experiment)
  * experimentId **required** `string`: Experiment ID of the experiment to update.
  * profileId **required** `string`: View (Profile) ID of the experiment to update.
  * webPropertyId **required** `string`: Web property ID of the experiment to update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Experiment](#experiment)

### management.experiments.update
Update an existing experiment.


```js
google_analytics.management.experiments.update({
  "accountId": "",
  "experimentId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID of the experiment to update.
  * body [Experiment](#experiment)
  * experimentId **required** `string`: Experiment ID of the experiment to update.
  * profileId **required** `string`: View (Profile) ID of the experiment to update.
  * webPropertyId **required** `string`: Web property ID of the experiment to update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Experiment](#experiment)

### management.goals.list
Lists goals to which the user has access.


```js
google_analytics.management.goals.list({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve goals for. Can either be a specific account ID or '~all', which refers to all the accounts that user has access to.
  * max-results `integer`: The maximum number of goals to include in this response.
  * profileId **required** `string`: View (Profile) ID to retrieve goals for. Can either be a specific view (profile) ID or '~all', which refers to all the views (profiles) that user has access to.
  * start-index `integer`: An index of the first goal to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * webPropertyId **required** `string`: Web property ID to retrieve goals for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Goals](#goals)

### management.goals.insert
Create a new goal.


```js
google_analytics.management.goals.insert({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to create the goal for.
  * body [Goal](#goal)
  * profileId **required** `string`: View (Profile) ID to create the goal for.
  * webPropertyId **required** `string`: Web property ID to create the goal for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Goal](#goal)

### management.goals.get
Gets a goal to which the user has access.


```js
google_analytics.management.goals.get({
  "accountId": "",
  "goalId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve the goal for.
  * goalId **required** `string`: Goal ID to retrieve the goal for.
  * profileId **required** `string`: View (Profile) ID to retrieve the goal for.
  * webPropertyId **required** `string`: Web property ID to retrieve the goal for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Goal](#goal)

### management.goals.patch
Updates an existing goal. This method supports patch semantics.


```js
google_analytics.management.goals.patch({
  "accountId": "",
  "goalId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to update the goal.
  * body [Goal](#goal)
  * goalId **required** `string`: Index of the goal to be updated.
  * profileId **required** `string`: View (Profile) ID to update the goal.
  * webPropertyId **required** `string`: Web property ID to update the goal.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Goal](#goal)

### management.goals.update
Updates an existing goal.


```js
google_analytics.management.goals.update({
  "accountId": "",
  "goalId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to update the goal.
  * body [Goal](#goal)
  * goalId **required** `string`: Index of the goal to be updated.
  * profileId **required** `string`: View (Profile) ID to update the goal.
  * webPropertyId **required** `string`: Web property ID to update the goal.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Goal](#goal)

### management.profileFilterLinks.list
Lists all profile filter links for a profile.


```js
google_analytics.management.profileFilterLinks.list({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve profile filter links for.
  * max-results `integer`: The maximum number of profile filter links to include in this response.
  * profileId **required** `string`: Profile ID to retrieve filter links for. Can either be a specific profile ID or '~all', which refers to all the profiles that user has access to.
  * start-index `integer`: An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * webPropertyId **required** `string`: Web property Id for profile filter links for. Can either be a specific web property ID or '~all', which refers to all the web properties that user has access to.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProfileFilterLinks](#profilefilterlinks)

### management.profileFilterLinks.insert
Create a new profile filter link.


```js
google_analytics.management.profileFilterLinks.insert({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to create profile filter link for.
  * body [ProfileFilterLink](#profilefilterlink)
  * profileId **required** `string`: Profile ID to create filter link for.
  * webPropertyId **required** `string`: Web property Id to create profile filter link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProfileFilterLink](#profilefilterlink)

### management.profileFilterLinks.delete
Delete a profile filter link.


```js
google_analytics.management.profileFilterLinks.delete({
  "accountId": "",
  "linkId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to which the profile filter link belongs.
  * linkId **required** `string`: ID of the profile filter link to delete.
  * profileId **required** `string`: Profile ID to which the filter link belongs.
  * webPropertyId **required** `string`: Web property Id to which the profile filter link belongs.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### management.profileFilterLinks.get
Returns a single profile filter link.


```js
google_analytics.management.profileFilterLinks.get({
  "accountId": "",
  "linkId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve profile filter link for.
  * linkId **required** `string`: ID of the profile filter link.
  * profileId **required** `string`: Profile ID to retrieve filter link for.
  * webPropertyId **required** `string`: Web property Id to retrieve profile filter link for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProfileFilterLink](#profilefilterlink)

### management.profileFilterLinks.patch
Update an existing profile filter link. This method supports patch semantics.


```js
google_analytics.management.profileFilterLinks.patch({
  "accountId": "",
  "linkId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to which profile filter link belongs.
  * body [ProfileFilterLink](#profilefilterlink)
  * linkId **required** `string`: ID of the profile filter link to be updated.
  * profileId **required** `string`: Profile ID to which filter link belongs
  * webPropertyId **required** `string`: Web property Id to which profile filter link belongs
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProfileFilterLink](#profilefilterlink)

### management.profileFilterLinks.update
Update an existing profile filter link.


```js
google_analytics.management.profileFilterLinks.update({
  "accountId": "",
  "linkId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to which profile filter link belongs.
  * body [ProfileFilterLink](#profilefilterlink)
  * linkId **required** `string`: ID of the profile filter link to be updated.
  * profileId **required** `string`: Profile ID to which filter link belongs
  * webPropertyId **required** `string`: Web property Id to which profile filter link belongs
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ProfileFilterLink](#profilefilterlink)

### management.unsampledReports.list
Lists unsampled reports to which the user has access.


```js
google_analytics.management.unsampledReports.list({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve unsampled reports for. Must be a specific account ID, ~all is not supported.
  * max-results `integer`: The maximum number of unsampled reports to include in this response.
  * profileId **required** `string`: View (Profile) ID to retrieve unsampled reports for. Must be a specific view (profile) ID, ~all is not supported.
  * start-index `integer`: An index of the first unsampled report to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * webPropertyId **required** `string`: Web property ID to retrieve unsampled reports for. Must be a specific web property ID, ~all is not supported.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UnsampledReports](#unsampledreports)

### management.unsampledReports.insert
Create a new unsampled report.


```js
google_analytics.management.unsampledReports.insert({
  "accountId": "",
  "profileId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to create the unsampled report for.
  * body [UnsampledReport](#unsampledreport)
  * profileId **required** `string`: View (Profile) ID to create the unsampled report for.
  * webPropertyId **required** `string`: Web property ID to create the unsampled report for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UnsampledReport](#unsampledreport)

### management.unsampledReports.delete
Deletes an unsampled report.


```js
google_analytics.management.unsampledReports.delete({
  "accountId": "",
  "profileId": "",
  "unsampledReportId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to delete the unsampled report for.
  * profileId **required** `string`: View (Profile) ID to delete the unsampled report for.
  * unsampledReportId **required** `string`: ID of the unsampled report to be deleted.
  * webPropertyId **required** `string`: Web property ID to delete the unsampled reports for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### management.unsampledReports.get
Returns a single unsampled report.


```js
google_analytics.management.unsampledReports.get({
  "accountId": "",
  "profileId": "",
  "unsampledReportId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to retrieve unsampled report for.
  * profileId **required** `string`: View (Profile) ID to retrieve unsampled report for.
  * unsampledReportId **required** `string`: ID of the unsampled report to retrieve.
  * webPropertyId **required** `string`: Web property ID to retrieve unsampled reports for.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [UnsampledReport](#unsampledreport)

### management.remarketingAudience.list
Lists remarketing audiences to which the user has access.


```js
google_analytics.management.remarketingAudience.list({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID of the remarketing audiences to retrieve.
  * max-results `integer`: The maximum number of remarketing audiences to include in this response.
  * start-index `integer`: An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * type `string`
  * webPropertyId **required** `string`: The web property ID of the remarketing audiences to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RemarketingAudiences](#remarketingaudiences)

### management.remarketingAudience.insert
Creates a new remarketing audience.


```js
google_analytics.management.remarketingAudience.insert({
  "accountId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID for which to create the remarketing audience.
  * body [RemarketingAudience](#remarketingaudience)
  * webPropertyId **required** `string`: Web property ID for which to create the remarketing audience.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RemarketingAudience](#remarketingaudience)

### management.remarketingAudience.delete
Delete a remarketing audience.


```js
google_analytics.management.remarketingAudience.delete({
  "accountId": "",
  "remarketingAudienceId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account ID to which the remarketing audience belongs.
  * remarketingAudienceId **required** `string`: The ID of the remarketing audience to delete.
  * webPropertyId **required** `string`: Web property ID to which the remarketing audience belongs.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### management.remarketingAudience.get
Gets a remarketing audience to which the user has access.


```js
google_analytics.management.remarketingAudience.get({
  "accountId": "",
  "remarketingAudienceId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID of the remarketing audience to retrieve.
  * remarketingAudienceId **required** `string`: The ID of the remarketing audience to retrieve.
  * webPropertyId **required** `string`: The web property ID of the remarketing audience to retrieve.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RemarketingAudience](#remarketingaudience)

### management.remarketingAudience.patch
Updates an existing remarketing audience. This method supports patch semantics.


```js
google_analytics.management.remarketingAudience.patch({
  "accountId": "",
  "remarketingAudienceId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID of the remarketing audience to update.
  * body [RemarketingAudience](#remarketingaudience)
  * remarketingAudienceId **required** `string`: The ID of the remarketing audience to update.
  * webPropertyId **required** `string`: The web property ID of the remarketing audience to update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RemarketingAudience](#remarketingaudience)

### management.remarketingAudience.update
Updates an existing remarketing audience.


```js
google_analytics.management.remarketingAudience.update({
  "accountId": "",
  "remarketingAudienceId": "",
  "webPropertyId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: The account ID of the remarketing audience to update.
  * body [RemarketingAudience](#remarketingaudience)
  * remarketingAudienceId **required** `string`: The ID of the remarketing audience to update.
  * webPropertyId **required** `string`: The web property ID of the remarketing audience to update.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [RemarketingAudience](#remarketingaudience)

### management.segments.list
Lists segments to which the user has access.


```js
google_analytics.management.segments.list({}, context)
```

#### Input
* input `object`
  * max-results `integer`: The maximum number of segments to include in this response.
  * start-index `integer`: An index of the first segment to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Segments](#segments)

### metadata.columns.list
Lists all columns for a report type


```js
google_analytics.metadata.columns.list({
  "reportType": ""
}, context)
```

#### Input
* input `object`
  * reportType **required** `string`: Report type. Allowed Values: 'ga'. Where 'ga' corresponds to the Core Reporting API
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Columns](#columns)

### provisioning.createAccountTree
Provision account.


```js
google_analytics.provisioning.createAccountTree({}, context)
```

#### Input
* input `object`
  * body [AccountTreeRequest](#accounttreerequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountTreeResponse](#accounttreeresponse)

### provisioning.createAccountTicket
Creates an account ticket.


```js
google_analytics.provisioning.createAccountTicket({}, context)
```

#### Input
* input `object`
  * body [AccountTicket](#accountticket)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [AccountTicket](#accountticket)



## Definitions

### Account
* Account `object`: JSON template for Analytics account entry.
  * childLink `object`: Child link for an account entry. Points to the list of web properties for this account.
    * href `string`: Link to the list of web properties for this account.
    * type `string`: Type of the child link. Its value is "analytics#webproperties".
  * created `string`: Time the account was created.
  * id `string`: Account ID.
  * kind `string`: Resource type for Analytics account.
  * name `string`: Account name.
  * permissions `object`: Permissions the user has for this account.
    * effective `array`: All the permissions that the user has for this account. These include any implied permissions (e.g., EDIT implies VIEW).
      * items `string`
  * selfLink `string`: Link for this account.
  * starred `boolean`: Indicates whether this account is starred or not.
  * updated `string`: Time the account was last modified.

### AccountRef
* AccountRef `object`: JSON template for a linked account.
  * href `string`: Link for this account.
  * id `string`: Account ID.
  * kind `string`: Analytics account reference.
  * name `string`: Account name.

### AccountSummaries
* AccountSummaries `object`: An AccountSummary collection lists a summary of accounts, properties and views (profiles) to which the user has access. Each resource in the collection corresponds to a single AccountSummary.
  * items `array`: A list of AccountSummaries.
    * items [AccountSummary](#accountsummary)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this AccountSummary collection.
  * previousLink `string`: Link to previous page for this AccountSummary collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.
  * username `string`: Email ID of the authenticated user

### AccountSummary
* AccountSummary `object`: JSON template for an Analytics AccountSummary. An AccountSummary is a lightweight tree comprised of properties/profiles.
  * id `string`: Account ID.
  * kind `string`: Resource type for Analytics AccountSummary.
  * name `string`: Account name.
  * starred `boolean`: Indicates whether this account is starred or not.
  * webProperties `array`: List of web properties under this account.
    * items [WebPropertySummary](#webpropertysummary)

### AccountTicket
* AccountTicket `object`: JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
  * account [Account](#account)
  * id `string`: Account ticket ID used to access the account ticket.
  * kind `string`: Resource type for account ticket.
  * profile [Profile](#profile)
  * redirectUri `string`: Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in APIs console as a callback URL.
  * webproperty [Webproperty](#webproperty)

### AccountTreeRequest
* AccountTreeRequest `object`: JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields.
  * accountName `string`
  * accountSettings `object`
    * admobReporting `boolean`
    * sharingWithGoogleAnySales `boolean`
    * sharingWithGoogleProducts `boolean`
    * sharingWithGoogleSales `boolean`
    * sharingWithGoogleSupport `boolean`
    * sharingWithOthers `boolean`
  * kind `string`: Resource type for account ticket.
  * profileName `string`
  * timezone `string`
  * webpropertyName `string`
  * websiteUrl `string`

### AccountTreeResponse
* AccountTreeResponse `object`: JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).
  * account [Account](#account)
  * accountSettings `object`
    * admobReporting `boolean`
    * sharingWithGoogleAnySales `boolean`
    * sharingWithGoogleProducts `boolean`
    * sharingWithGoogleSales `boolean`
    * sharingWithGoogleSupport `boolean`
    * sharingWithOthers `boolean`
  * kind `string`: Resource type for account ticket.
  * profile [Profile](#profile)
  * webproperty [Webproperty](#webproperty)

### Accounts
* Accounts `object`: An account collection provides a list of Analytics accounts to which a user has access. The account collection is the entry point to all management information. Each resource in the collection corresponds to a single Analytics account.
  * items `array`: A list of accounts.
    * items [Account](#account)
  * itemsPerPage `integer`: The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Next link for this account collection.
  * previousLink `string`: Previous link for this account collection.
  * startIndex `integer`: The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.
  * username `string`: Email ID of the authenticated user

### AdWordsAccount
* AdWordsAccount `object`: JSON template for an AdWords account.
  * autoTaggingEnabled `boolean`: True if auto-tagging is enabled on the AdWords account. Read-only after the insert operation.
  * customerId `string`: Customer ID. This field is required when creating an AdWords link.
  * kind `string`: Resource type for AdWords account.

### AnalyticsDataimportDeleteUploadDataRequest
* AnalyticsDataimportDeleteUploadDataRequest `object`: Request template for the delete upload data request.
  * customDataImportUids `array`: A list of upload UIDs.
    * items `string`

### Column
* Column `object`: JSON template for a metadata column.
  * attributes `object`: Map of attribute name and value for this column.
  * id `string`: Column id.
  * kind `string`: Resource type for Analytics column.

### Columns
* Columns `object`: Lists columns (dimensions and metrics) for a particular report type.
  * attributeNames `array`: List of attributes names returned by columns.
    * items `string`
  * etag `string`: Etag of collection. This etag can be compared with the last response etag to check if response has changed.
  * items `array`: List of columns for a report type.
    * items [Column](#column)
  * kind `string`: Collection type.
  * totalResults `integer`: Total number of columns returned in the response.

### CustomDataSource
* CustomDataSource `object`: JSON template for an Analytics custom data source.
  * accountId `string`: Account ID to which this custom data source belongs.
  * childLink `object`
    * href `string`: Link to the list of daily uploads for this custom data source. Link to the list of uploads for this custom data source.
    * type `string`: Value is "analytics#dailyUploads". Value is "analytics#uploads".
  * created `string`: Time this custom data source was created.
  * description `string`: Description of custom data source.
  * id `string`: Custom data source ID.
  * importBehavior `string`
  * kind `string`: Resource type for Analytics custom data source.
  * name `string`: Name of this custom data source.
  * parentLink `object`: Parent link for this custom data source. Points to the web property to which this custom data source belongs.
    * href `string`: Link to the web property to which this custom data source belongs.
    * type `string`: Value is "analytics#webproperty".
  * profilesLinked `array`: IDs of views (profiles) linked to the custom data source.
    * items `string`
  * schema `array`: Collection of schema headers of the custom data source.
    * items `string`
  * selfLink `string`: Link for this Analytics custom data source.
  * type `string`: Type of the custom data source.
  * updated `string`: Time this custom data source was last modified.
  * uploadType `string`: Upload type of the custom data source.
  * webPropertyId `string`: Web property ID of the form UA-XXXXX-YY to which this custom data source belongs.

### CustomDataSources
* CustomDataSources `object`: Lists Analytics custom data sources to which the user has access. Each resource in the collection corresponds to a single Analytics custom data source.
  * items `array`: Collection of custom data sources.
    * items [CustomDataSource](#customdatasource)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this custom data source collection.
  * previousLink `string`: Link to previous page for this custom data source collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.
  * username `string`: Email ID of the authenticated user

### CustomDimension
* CustomDimension `object`: JSON template for Analytics Custom Dimension.
  * accountId `string`: Account ID.
  * active `boolean`: Boolean indicating whether the custom dimension is active.
  * created `string`: Time the custom dimension was created.
  * id `string`: Custom dimension ID.
  * index `integer`: Index of the custom dimension.
  * kind `string`: Kind value for a custom dimension. Set to "analytics#customDimension". It is a read-only field.
  * name `string`: Name of the custom dimension.
  * parentLink `object`: Parent link for the custom dimension. Points to the property to which the custom dimension belongs.
    * href `string`: Link to the property to which the custom dimension belongs.
    * type `string`: Type of the parent link. Set to "analytics#webproperty".
  * scope `string`: Scope of the custom dimension: HIT, SESSION, USER or PRODUCT.
  * selfLink `string`: Link for the custom dimension
  * updated `string`: Time the custom dimension was last modified.
  * webPropertyId `string`: Property ID.

### CustomDimensions
* CustomDimensions `object`: A custom dimension collection lists Analytics custom dimensions to which the user has access. Each resource in the collection corresponds to a single Analytics custom dimension.
  * items `array`: Collection of custom dimensions.
    * items [CustomDimension](#customdimension)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this custom dimension collection.
  * previousLink `string`: Link to previous page for this custom dimension collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.
  * username `string`: Email ID of the authenticated user

### CustomMetric
* CustomMetric `object`: JSON template for Analytics Custom Metric.
  * accountId `string`: Account ID.
  * active `boolean`: Boolean indicating whether the custom metric is active.
  * created `string`: Time the custom metric was created.
  * id `string`: Custom metric ID.
  * index `integer`: Index of the custom metric.
  * kind `string`: Kind value for a custom metric. Set to "analytics#customMetric". It is a read-only field.
  * max_value `string`: Max value of custom metric.
  * min_value `string`: Min value of custom metric.
  * name `string`: Name of the custom metric.
  * parentLink `object`: Parent link for the custom metric. Points to the property to which the custom metric belongs.
    * href `string`: Link to the property to which the custom metric belongs.
    * type `string`: Type of the parent link. Set to "analytics#webproperty".
  * scope `string`: Scope of the custom metric: HIT or PRODUCT.
  * selfLink `string`: Link for the custom metric
  * type `string`: Data type of custom metric.
  * updated `string`: Time the custom metric was last modified.
  * webPropertyId `string`: Property ID.

### CustomMetrics
* CustomMetrics `object`: A custom metric collection lists Analytics custom metrics to which the user has access. Each resource in the collection corresponds to a single Analytics custom metric.
  * items `array`: Collection of custom metrics.
    * items [CustomMetric](#custommetric)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this custom metric collection.
  * previousLink `string`: Link to previous page for this custom metric collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.
  * username `string`: Email ID of the authenticated user

### EntityAdWordsLink
* EntityAdWordsLink `object`: JSON template for Analytics Entity AdWords Link.
  * adWordsAccounts `array`: A list of AdWords client accounts. These cannot be MCC accounts. This field is required when creating an AdWords link. It cannot be empty.
    * items [AdWordsAccount](#adwordsaccount)
  * entity `object`: Web property being linked.
    * webPropertyRef [WebPropertyRef](#webpropertyref)
  * id `string`: Entity AdWords link ID
  * kind `string`: Resource type for entity AdWords link.
  * name `string`: Name of the link. This field is required when creating an AdWords link.
  * profileIds `array`: IDs of linked Views (Profiles) represented as strings.
    * items `string`
  * selfLink `string`: URL link for this Google Analytics - Google AdWords link.

### EntityAdWordsLinks
* EntityAdWordsLinks `object`: An entity AdWords link collection provides a list of GA-AdWords links Each resource in this collection corresponds to a single link.
  * items `array`: A list of entity AdWords links.
    * items [EntityAdWordsLink](#entityadwordslink)
  * itemsPerPage `integer`: The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Next link for this AdWords link collection.
  * previousLink `string`: Previous link for this AdWords link collection.
  * startIndex `integer`: The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.

### EntityUserLink
* EntityUserLink `object`: JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
  * entity `object`: Entity for this link. It can be an account, a web property, or a view (profile).
    * accountRef [AccountRef](#accountref)
    * profileRef [ProfileRef](#profileref)
    * webPropertyRef [WebPropertyRef](#webpropertyref)
  * id `string`: Entity user link ID
  * kind `string`: Resource type for entity user link.
  * permissions `object`: Permissions the user has for this entity.
    * effective `array`: Effective permissions represent all the permissions that a user has for this entity. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent entity. Effective permissions are read-only.
      * items `string`
    * local `array`: Permissions that a user has been assigned at this very level. Does not include any implied or inherited permissions. Local permissions are modifiable.
      * items `string`
  * selfLink `string`: Self link for this resource.
  * userRef [UserRef](#userref)

### EntityUserLinks
* EntityUserLinks `object`: An entity user link collection provides a list of Analytics ACL links Each resource in this collection corresponds to a single link.
  * items `array`: A list of entity user links.
    * items [EntityUserLink](#entityuserlink)
  * itemsPerPage `integer`: The maximum number of entries the response can contain, regardless of the actual number of entries returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Next link for this account collection.
  * previousLink `string`: Previous link for this account collection.
  * startIndex `integer`: The starting index of the entries, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.

### Experiment
* Experiment `object`: JSON template for Analytics experiment resource.
  * accountId `string`: Account ID to which this experiment belongs. This field is read-only.
  * created `string`: Time the experiment was created. This field is read-only.
  * description `string`: Notes about this experiment.
  * editableInGaUi `boolean`: If true, the end user will be able to edit the experiment via the Google Analytics user interface.
  * endTime `string`: The ending time of the experiment (the time the status changed from RUNNING to ENDED). This field is present only if the experiment has ended. This field is read-only.
  * equalWeighting `boolean`: Boolean specifying whether to distribute traffic evenly across all variations. If the value is False, content experiments follows the default behavior of adjusting traffic dynamically based on variation performance. Optional -- defaults to False. This field may not be changed for an experiment whose status is ENDED.
  * id `string`: Experiment ID. Required for patch and update. Disallowed for create.
  * internalWebPropertyId `string`: Internal ID for the web property to which this experiment belongs. This field is read-only.
  * kind `string`: Resource type for an Analytics experiment. This field is read-only.
  * minimumExperimentLengthInDays `integer`: An integer number in [3, 90]. Specifies the minimum length of the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
  * name `string`: Experiment name. This field may not be changed for an experiment whose status is ENDED. This field is required when creating an experiment.
  * objectiveMetric `string`: The metric that the experiment is optimizing. Valid values: "ga:goal(n)Completions", "ga:adsenseAdsClicks", "ga:adsenseAdsViewed", "ga:adsenseRevenue", "ga:bounces", "ga:pageviews", "ga:sessionDuration", "ga:transactions", "ga:transactionRevenue". This field is required if status is "RUNNING" and servingFramework is one of "REDIRECT" or "API".
  * optimizationType `string`: Whether the objectiveMetric should be minimized or maximized. Possible values: "MAXIMUM", "MINIMUM". Optional--defaults to "MAXIMUM". Cannot be specified without objectiveMetric. Cannot be modified when status is "RUNNING" or "ENDED".
  * parentLink `object`: Parent link for an experiment. Points to the view (profile) to which this experiment belongs.
    * href `string`: Link to the view (profile) to which this experiment belongs. This field is read-only.
    * type `string`: Value is "analytics#profile". This field is read-only.
  * profileId `string`: View (Profile) ID to which this experiment belongs. This field is read-only.
  * reasonExperimentEnded `string`: Why the experiment ended. Possible values: "STOPPED_BY_USER", "WINNER_FOUND", "EXPERIMENT_EXPIRED", "ENDED_WITH_NO_WINNER", "GOAL_OBJECTIVE_CHANGED". "ENDED_WITH_NO_WINNER" means that the experiment didn't expire but no winner was projected to be found. If the experiment status is changed via the API to ENDED this field is set to STOPPED_BY_USER. This field is read-only.
  * rewriteVariationUrlsAsOriginal `boolean`: Boolean specifying whether variations URLS are rewritten to match those of the original. This field may not be changed for an experiments whose status is ENDED.
  * selfLink `string`: Link for this experiment. This field is read-only.
  * servingFramework `string`: The framework used to serve the experiment variations and evaluate the results. One of:  
  * snippet `string`: The snippet of code to include on the control page(s). This field is read-only.
  * startTime `string`: The starting time of the experiment (the time the status changed from READY_TO_RUN to RUNNING). This field is present only if the experiment has started. This field is read-only.
  * status `string`: Experiment status. Possible values: "DRAFT", "READY_TO_RUN", "RUNNING", "ENDED". Experiments can be created in the "DRAFT", "READY_TO_RUN" or "RUNNING" state. This field is required when creating an experiment.
  * trafficCoverage `number`: A floating-point number in (0, 1]. Specifies the fraction of the traffic that participates in the experiment. Can be changed for a running experiment. This field may not be changed for an experiments whose status is ENDED.
  * updated `string`: Time the experiment was last modified. This field is read-only.
  * variations `array`: Array of variations. The first variation in the array is the original. The number of variations may not change once an experiment is in the RUNNING state. At least two variations are required before status can be set to RUNNING.
    * items `object`
      * name `string`: The name of the variation. This field is required when creating an experiment. This field may not be changed for an experiment whose status is ENDED.
      * status `string`: Status of the variation. Possible values: "ACTIVE", "INACTIVE". INACTIVE variations are not served. This field may not be changed for an experiment whose status is ENDED.
      * url `string`: The URL of the variation. This field may not be changed for an experiment whose status is RUNNING or ENDED.
      * weight `number`: Weight that this variation should receive. Only present if the experiment is running. This field is read-only.
      * won `boolean`: True if the experiment has ended and this variation performed (statistically) significantly better than the original. This field is read-only.
  * webPropertyId `string`: Web property ID to which this experiment belongs. The web property ID is of the form UA-XXXXX-YY. This field is read-only.
  * winnerConfidenceLevel `number`: A floating-point number in (0, 1). Specifies the necessary confidence level to choose a winner. This field may not be changed for an experiments whose status is ENDED.
  * winnerFound `boolean`: Boolean specifying whether a winner has been found for this experiment. This field is read-only.

### Experiments
* Experiments `object`: An experiment collection lists Analytics experiments to which the user has access. Each view (profile) can have a set of experiments. Each resource in the Experiment collection corresponds to a single Analytics experiment.
  * items `array`: A list of experiments.
    * items [Experiment](#experiment)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this experiment collection.
  * previousLink `string`: Link to previous page for this experiment collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of resources in the result.
  * username `string`: Email ID of the authenticated user

### Filter
* Filter `object`: JSON template for an Analytics account filter.
  * accountId `string`: Account ID to which this filter belongs.
  * advancedDetails `object`: Details for the filter of the type ADVANCED.
    * caseSensitive `boolean`: Indicates if the filter expressions are case sensitive.
    * extractA `string`: Expression to extract from field A.
    * extractB `string`: Expression to extract from field B.
    * fieldA `string`: Field A.
    * fieldAIndex `integer`: The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
    * fieldARequired `boolean`: Indicates if field A is required to match.
    * fieldB `string`: Field B.
    * fieldBIndex `integer`: The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
    * fieldBRequired `boolean`: Indicates if field B is required to match.
    * outputConstructor `string`: Expression used to construct the output value.
    * outputToField `string`: Output field.
    * outputToFieldIndex `integer`: The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
    * overrideOutputField `boolean`: Indicates if the existing value of the output field, if any, should be overridden by the output expression.
  * created `string`: Time this filter was created.
  * excludeDetails [FilterExpression](#filterexpression)
  * id `string`: Filter ID.
  * includeDetails [FilterExpression](#filterexpression)
  * kind `string`: Resource type for Analytics filter.
  * lowercaseDetails `object`: Details for the filter of the type LOWER.
    * field `string`: Field to use in the filter.
    * fieldIndex `integer`: The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
  * name `string`: Name of this filter.
  * parentLink `object`: Parent link for this filter. Points to the account to which this filter belongs.
    * href `string`: Link to the account to which this filter belongs.
    * type `string`: Value is "analytics#account".
  * searchAndReplaceDetails `object`: Details for the filter of the type SEARCH_AND_REPLACE.
    * caseSensitive `boolean`: Determines if the filter is case sensitive.
    * field `string`: Field to use in the filter.
    * fieldIndex `integer`: The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.
    * replaceString `string`: Term to replace the search term with.
    * searchString `string`: Term to search.
  * selfLink `string`: Link for this filter.
  * type `string`: Type of this filter. Possible values are INCLUDE, EXCLUDE, LOWERCASE, UPPERCASE, SEARCH_AND_REPLACE and ADVANCED.
  * updated `string`: Time this filter was last modified.
  * uppercaseDetails `object`: Details for the filter of the type UPPER.
    * field `string`: Field to use in the filter.
    * fieldIndex `integer`: The Index of the custom dimension. Required if field is a CUSTOM_DIMENSION.

### FilterExpression
* FilterExpression `object`: JSON template for an Analytics filter expression.
  * caseSensitive `boolean`: Determines if the filter is case sensitive.
  * expressionValue `string`: Filter expression value
  * field `string`: Field to filter. Possible values:  
  * fieldIndex `integer`: The Index of the custom dimension. Set only if the field is a is CUSTOM_DIMENSION.
  * kind `string`: Kind value for filter expression
  * matchType `string`: Match type for this filter. Possible values are BEGINS_WITH, EQUAL, ENDS_WITH, CONTAINS, or MATCHES. GEO_DOMAIN, GEO_IP_ADDRESS, PAGE_REQUEST_URI, or PAGE_HOSTNAME filters can use any match type; all other filters must use MATCHES.

### FilterRef
* FilterRef `object`: JSON template for a profile filter link.
  * accountId `string`: Account ID to which this filter belongs.
  * href `string`: Link for this filter.
  * id `string`: Filter ID.
  * kind `string`: Kind value for filter reference.
  * name `string`: Name of this filter.

### Filters
* Filters `object`: A filter collection lists filters created by users in an Analytics account. Each resource in the collection corresponds to a filter.
  * items `array`: A list of filters.
    * items [Filter](#filter)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this filter collection.
  * previousLink `string`: Link to previous page for this filter collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.
  * username `string`: Email ID of the authenticated user

### GaData
* GaData `object`: Analytics data for a given view (profile).
  * columnHeaders `array`: Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
    * items `object`
      * columnType `string`: Column Type. Either DIMENSION or METRIC.
      * dataType `string`: Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc.
      * name `string`: Column name.
  * containsSampledData `boolean`: Determines if Analytics data contains samples.
  * dataLastRefreshed `string`: The last refreshed time in seconds for Analytics data.
  * dataTable `object`
    * cols `array`
      * items `object`
        * id `string`
        * label `string`
        * type `string`
    * rows `array`
      * items `object`
        * c `array`
          * items `object`
            * v `string`
  * id `string`: Unique ID for this data response.
  * itemsPerPage `integer`: The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Resource type.
  * nextLink `string`: Link to next page for this Analytics data query.
  * previousLink `string`: Link to previous page for this Analytics data query.
  * profileInfo `object`: Information for the view (profile), for which the Analytics data was requested.
    * accountId `string`: Account ID to which this view (profile) belongs.
    * internalWebPropertyId `string`: Internal ID for the web property to which this view (profile) belongs.
    * profileId `string`: View (Profile) ID.
    * profileName `string`: View (Profile) name.
    * tableId `string`: Table ID for view (profile).
    * webPropertyId `string`: Web Property ID to which this view (profile) belongs.
  * query `object`: Analytics data request query parameters.
    * dimensions `string`: List of analytics dimensions.
    * end-date `string`: End date.
    * filters `string`: Comma-separated list of dimension or metric filters.
    * ids `string`: Unique table ID.
    * max-results `integer`: Maximum results per page.
    * metrics `array`: List of analytics metrics.
      * items `string`
    * samplingLevel `string`: Desired sampling level
    * segment `string`: Analytics advanced segment.
    * sort `array`: List of dimensions or metrics based on which Analytics data is sorted.
      * items `string`
    * start-date `string`: Start date.
    * start-index `integer`: Start index.
  * rows `array`: Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
    * items `array`
      * items `string`
  * sampleSize `string`: The number of samples used to calculate the result.
  * sampleSpace `string`: Total size of the sample space from which the samples were selected.
  * selfLink `string`: Link to this page.
  * totalResults `integer`: The total number of rows for the query, regardless of the number of rows in the response.
  * totalsForAllResults `object`: Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.

### Goal
* Goal `object`: JSON template for Analytics goal resource.
  * accountId `string`: Account ID to which this goal belongs.
  * active `boolean`: Determines whether this goal is active.
  * created `string`: Time this goal was created.
  * eventDetails `object`: Details for the goal of the type EVENT.
    * eventConditions `array`: List of event conditions.
      * items `object`
        * comparisonType `string`: Type of comparison. Possible values are LESS_THAN, GREATER_THAN or EQUAL.
        * comparisonValue `string`: Value used for this comparison.
        * expression `string`: Expression used for this match.
        * matchType `string`: Type of the match to be performed. Possible values are REGEXP, BEGINS_WITH, or EXACT.
        * type `string`: Type of this event condition. Possible values are CATEGORY, ACTION, LABEL, or VALUE.
    * useEventValue `boolean`: Determines if the event value should be used as the value for this goal.
  * id `string`: Goal ID.
  * internalWebPropertyId `string`: Internal ID for the web property to which this goal belongs.
  * kind `string`: Resource type for an Analytics goal.
  * name `string`: Goal name.
  * parentLink `object`: Parent link for a goal. Points to the view (profile) to which this goal belongs.
    * href `string`: Link to the view (profile) to which this goal belongs.
    * type `string`: Value is "analytics#profile".
  * profileId `string`: View (Profile) ID to which this goal belongs.
  * selfLink `string`: Link for this goal.
  * type `string`: Goal type. Possible values are URL_DESTINATION, VISIT_TIME_ON_SITE, VISIT_NUM_PAGES, AND EVENT.
  * updated `string`: Time this goal was last modified.
  * urlDestinationDetails `object`: Details for the goal of the type URL_DESTINATION.
    * caseSensitive `boolean`: Determines if the goal URL must exactly match the capitalization of visited URLs.
    * firstStepRequired `boolean`: Determines if the first step in this goal is required.
    * matchType `string`: Match type for the goal URL. Possible values are HEAD, EXACT, or REGEX.
    * steps `array`: List of steps configured for this goal funnel.
      * items `object`
        * name `string`: Step name.
        * number `integer`: Step number.
        * url `string`: URL for this step.
    * url `string`: URL for this goal.
  * value `number`: Goal value.
  * visitNumPagesDetails `object`: Details for the goal of the type VISIT_NUM_PAGES.
    * comparisonType `string`: Type of comparison. Possible values are LESS_THAN, GREATER_THAN, or EQUAL.
    * comparisonValue `string`: Value used for this comparison.
  * visitTimeOnSiteDetails `object`: Details for the goal of the type VISIT_TIME_ON_SITE.
    * comparisonType `string`: Type of comparison. Possible values are LESS_THAN or GREATER_THAN.
    * comparisonValue `string`: Value used for this comparison.
  * webPropertyId `string`: Web property ID to which this goal belongs. The web property ID is of the form UA-XXXXX-YY.

### Goals
* Goals `object`: A goal collection lists Analytics goals to which the user has access. Each view (profile) can have a set of goals. Each resource in the Goal collection corresponds to a single Analytics goal.
  * items `array`: A list of goals.
    * items [Goal](#goal)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this goal collection.
  * previousLink `string`: Link to previous page for this goal collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of resources in the result.
  * username `string`: Email ID of the authenticated user

### IncludeConditions
* IncludeConditions `object`: JSON template for an Analytics Remarketing Include Conditions.
  * daysToLookBack `integer`: The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience.
  * isSmartList `boolean`: Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577
  * kind `string`: Resource type for include conditions.
  * membershipDurationDays `integer`: Number of days (in the range 1 to 540) a user remains in the audience.
  * segment `string`: The segment condition that will cause a user to be added to an audience.

### LinkedForeignAccount
* LinkedForeignAccount `object`: JSON template for an Analytics Remarketing Audience Foreign Link.
  * accountId `string`: Account ID to which this linked foreign account belongs.
  * eligibleForSearch `boolean`: Boolean indicating whether this is eligible for search.
  * id `string`: Entity ad account link ID.
  * internalWebPropertyId `string`: Internal ID for the web property to which this linked foreign account belongs.
  * kind `string`: Resource type for linked foreign account.
  * linkedAccountId `string`: The foreign account ID. For example the an AdWords `linkedAccountId` has the following format XXX-XXX-XXXX.
  * remarketingAudienceId `string`: Remarketing audience ID to which this linked foreign account belongs.
  * status `string`: The status of this foreign account link.
  * type `string`: The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`.
  * webPropertyId `string`: Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs.

### McfData
* McfData `object`: Multi-Channel Funnels data for a given view (profile).
  * columnHeaders `array`: Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
    * items `object`
      * columnType `string`: Column Type. Either DIMENSION or METRIC.
      * dataType `string`: Data type. Dimension and metric values data types such as INTEGER, DOUBLE, CURRENCY, MCF_SEQUENCE etc.
      * name `string`: Column name.
  * containsSampledData `boolean`: Determines if the Analytics data contains sampled data.
  * id `string`: Unique ID for this data response.
  * itemsPerPage `integer`: The maximum number of rows the response can contain, regardless of the actual number of rows returned. Its value ranges from 1 to 10,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Resource type.
  * nextLink `string`: Link to next page for this Analytics data query.
  * previousLink `string`: Link to previous page for this Analytics data query.
  * profileInfo `object`: Information for the view (profile), for which the Analytics data was requested.
    * accountId `string`: Account ID to which this view (profile) belongs.
    * internalWebPropertyId `string`: Internal ID for the web property to which this view (profile) belongs.
    * profileId `string`: View (Profile) ID.
    * profileName `string`: View (Profile) name.
    * tableId `string`: Table ID for view (profile).
    * webPropertyId `string`: Web Property ID to which this view (profile) belongs.
  * query `object`: Analytics data request query parameters.
    * dimensions `string`: List of analytics dimensions.
    * end-date `string`: End date.
    * filters `string`: Comma-separated list of dimension or metric filters.
    * ids `string`: Unique table ID.
    * max-results `integer`: Maximum results per page.
    * metrics `array`: List of analytics metrics.
      * items `string`
    * samplingLevel `string`: Desired sampling level
    * segment `string`: Analytics advanced segment.
    * sort `array`: List of dimensions or metrics based on which Analytics data is sorted.
      * items `string`
    * start-date `string`: Start date.
    * start-index `integer`: Start index.
  * rows `array`: Analytics data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
    * items `array`
      * items `object`: A union object representing a dimension or metric value. Only one of "primitiveValue" or "conversionPathValue" attribute will be populated.
        * conversionPathValue `array`: A conversion path dimension value, containing a list of interactions with their attributes.
          * items `object`
            * interactionType `string`: Type of an interaction on conversion path. Such as CLICK, IMPRESSION etc.
            * nodeValue `string`: Node value of an interaction on conversion path. Such as source, medium etc.
        * primitiveValue `string`: A primitive dimension value. A primitive metric value.
  * sampleSize `string`: The number of samples used to calculate the result.
  * sampleSpace `string`: Total size of the sample space from which the samples were selected.
  * selfLink `string`: Link to this page.
  * totalResults `integer`: The total number of rows for the query, regardless of the number of rows in the response.
  * totalsForAllResults `object`: Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.

### Profile
* Profile `object`: JSON template for an Analytics view (profile).
  * accountId `string`: Account ID to which this view (profile) belongs.
  * botFilteringEnabled `boolean`: Indicates whether bot filtering is enabled for this view (profile).
  * childLink `object`: Child link for this view (profile). Points to the list of goals for this view (profile).
    * href `string`: Link to the list of goals for this view (profile).
    * type `string`: Value is "analytics#goals".
  * created `string`: Time this view (profile) was created.
  * currency `string`: The currency type associated with this view (profile), defaults to USD. The supported values are:
  * defaultPage `string`: Default page for this view (profile).
  * eCommerceTracking `boolean`: Indicates whether ecommerce tracking is enabled for this view (profile).
  * enhancedECommerceTracking `boolean`: Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled.
  * excludeQueryParameters `string`: The query parameters that are excluded from this view (profile).
  * id `string`: View (Profile) ID.
  * internalWebPropertyId `string`: Internal ID for the web property to which this view (profile) belongs.
  * kind `string`: Resource type for Analytics view (profile).
  * name `string`: Name of this view (profile).
  * parentLink `object`: Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
    * href `string`: Link to the web property to which this view (profile) belongs.
    * type `string`: Value is "analytics#webproperty".
  * permissions `object`: Permissions the user has for this view (profile).
    * effective `array`: All the permissions that the user has for this view (profile). These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent web property.
      * items `string`
  * selfLink `string`: Link for this view (profile).
  * siteSearchCategoryParameters `string`: Site search category parameters for this view (profile).
  * siteSearchQueryParameters `string`: The site search query parameters for this view (profile).
  * starred `boolean`: Indicates whether this view (profile) is starred or not.
  * stripSiteSearchCategoryParameters `boolean`: Whether or not Analytics will strip search category parameters from the URLs in your reports.
  * stripSiteSearchQueryParameters `boolean`: Whether or not Analytics will strip search query parameters from the URLs in your reports.
  * timezone `string`: Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database.
  * type `string`: View (Profile) type. Supported types: WEB or APP.
  * updated `string`: Time this view (profile) was last modified.
  * webPropertyId `string`: Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.
  * websiteUrl `string`: Website URL for this view (profile).

### ProfileFilterLink
* ProfileFilterLink `object`: JSON template for an Analytics profile filter link.
  * filterRef [FilterRef](#filterref)
  * id `string`: Profile filter link ID.
  * kind `string`: Resource type for Analytics filter.
  * profileRef [ProfileRef](#profileref)
  * rank `integer`: The rank of this profile filter link relative to the other filters linked to the same profile.
  * selfLink `string`: Link for this profile filter link.

### ProfileFilterLinks
* ProfileFilterLinks `object`: A profile filter link collection lists profile filter links between profiles and filters. Each resource in the collection corresponds to a profile filter link.
  * items `array`: A list of profile filter links.
    * items [ProfileFilterLink](#profilefilterlink)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1,000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this profile filter link collection.
  * previousLink `string`: Link to previous page for this profile filter link collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.
  * username `string`: Email ID of the authenticated user

### ProfileRef
* ProfileRef `object`: JSON template for a linked view (profile).
  * accountId `string`: Account ID to which this view (profile) belongs.
  * href `string`: Link for this view (profile).
  * id `string`: View (Profile) ID.
  * internalWebPropertyId `string`: Internal ID for the web property to which this view (profile) belongs.
  * kind `string`: Analytics view (profile) reference.
  * name `string`: Name of this view (profile).
  * webPropertyId `string`: Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs.

### ProfileSummary
* ProfileSummary `object`: JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile.
  * id `string`: View (profile) ID.
  * kind `string`: Resource type for Analytics ProfileSummary.
  * name `string`: View (profile) name.
  * starred `boolean`: Indicates whether this view (profile) is starred or not.
  * type `string`: View (Profile) type. Supported types: WEB or APP.

### Profiles
* Profiles `object`: A view (profile) collection lists Analytics views (profiles) to which the user has access. Each resource in the collection corresponds to a single Analytics view (profile).
  * items `array`: A list of views (profiles).
    * items [Profile](#profile)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this view (profile) collection.
  * previousLink `string`: Link to previous page for this view (profile) collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.
  * username `string`: Email ID of the authenticated user

### RealtimeData
* RealtimeData `object`: Real time data for a given view (profile).
  * columnHeaders `array`: Column headers that list dimension names followed by the metric names. The order of dimensions and metrics is same as specified in the request.
    * items `object`
      * columnType `string`: Column Type. Either DIMENSION or METRIC.
      * dataType `string`: Data type. Dimension column headers have only STRING as the data type. Metric column headers have data types for metric values such as INTEGER, DOUBLE, CURRENCY etc.
      * name `string`: Column name.
  * id `string`: Unique ID for this data response.
  * kind `string`: Resource type.
  * profileInfo `object`: Information for the view (profile), for which the real time data was requested.
    * accountId `string`: Account ID to which this view (profile) belongs.
    * internalWebPropertyId `string`: Internal ID for the web property to which this view (profile) belongs.
    * profileId `string`: View (Profile) ID.
    * profileName `string`: View (Profile) name.
    * tableId `string`: Table ID for view (profile).
    * webPropertyId `string`: Web Property ID to which this view (profile) belongs.
  * query `object`: Real time data request query parameters.
    * dimensions `string`: List of real time dimensions.
    * filters `string`: Comma-separated list of dimension or metric filters.
    * ids `string`: Unique table ID.
    * max-results `integer`: Maximum results per page.
    * metrics `array`: List of real time metrics.
      * items `string`
    * sort `array`: List of dimensions or metrics based on which real time data is sorted.
      * items `string`
  * rows `array`: Real time data rows, where each row contains a list of dimension values followed by the metric values. The order of dimensions and metrics is same as specified in the request.
    * items `array`
      * items `string`
  * selfLink `string`: Link to this page.
  * totalResults `integer`: The total number of rows for the query, regardless of the number of rows in the response.
  * totalsForAllResults `object`: Total values for the requested metrics over all the results, not just the results returned in this response. The order of the metric totals is same as the metric order specified in the request.

### RemarketingAudience
* RemarketingAudience `object`: JSON template for an Analytics remarketing audience.
  * accountId `string`: Account ID to which this remarketing audience belongs.
  * audienceDefinition `object`: The simple audience definition that will cause a user to be added to an audience.
    * includeConditions [IncludeConditions](#includeconditions)
  * audienceType `string`: The type of audience, either SIMPLE or STATE_BASED.
  * created `string`: Time this remarketing audience was created.
  * description `string`: The description of this remarketing audience.
  * id `string`: Remarketing Audience ID.
  * internalWebPropertyId `string`: Internal ID for the web property to which this remarketing audience belongs.
  * kind `string`: Collection type.
  * linkedAdAccounts `array`: The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently.
    * items [LinkedForeignAccount](#linkedforeignaccount)
  * linkedViews `array`: The views (profiles) that this remarketing audience is linked to.
    * items `string`
  * name `string`: The name of this remarketing audience.
  * stateBasedAudienceDefinition `object`: A state based audience definition that will cause a user to be added or removed from an audience.
    * excludeConditions `object`: Defines the conditions to exclude users from the audience.
      * exclusionDuration `string`: Whether to make the exclusion TEMPORARY or PERMANENT.
      * segment `string`: The segment condition that will cause a user to be removed from an audience.
    * includeConditions [IncludeConditions](#includeconditions)
  * updated `string`: Time this remarketing audience was last modified.
  * webPropertyId `string`: Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs.

### RemarketingAudiences
* RemarketingAudiences `object`: A remarketing audience collection lists Analytics remarketing audiences to which the user has access. Each resource in the collection corresponds to a single Analytics remarketing audience.
  * items `array`: A list of remarketing audiences.
    * items [RemarketingAudience](#remarketingaudience)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this remarketing audience collection.
  * previousLink `string`: Link to previous page for this view (profile) collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.
  * username `string`: Email ID of the authenticated user

### Segment
* Segment `object`: JSON template for an Analytics segment.
  * created `string`: Time the segment was created.
  * definition `string`: Segment definition.
  * id `string`: Segment ID.
  * kind `string`: Resource type for Analytics segment.
  * name `string`: Segment name.
  * segmentId `string`: Segment ID. Can be used with the 'segment' parameter in Core Reporting API.
  * selfLink `string`: Link for this segment.
  * type `string`: Type for a segment. Possible values are "BUILT_IN" or "CUSTOM".
  * updated `string`: Time the segment was last modified.

### Segments
* Segments `object`: An segment collection lists Analytics segments that the user has access to. Each resource in the collection corresponds to a single Analytics segment.
  * items `array`: A list of segments.
    * items [Segment](#segment)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type for segments.
  * nextLink `string`: Link to next page for this segment collection.
  * previousLink `string`: Link to previous page for this segment collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.
  * username `string`: Email ID of the authenticated user

### UnsampledReport
* UnsampledReport `object`: JSON template for Analytics unsampled report resource.
  * accountId `string`: Account ID to which this unsampled report belongs.
  * cloudStorageDownloadDetails `object`: Download details for a file stored in Google Cloud Storage.
    * bucketId `string`: Id of the bucket the file object is stored in.
    * objectId `string`: Id of the file object containing the report data.
  * created `string`: Time this unsampled report was created.
  * dimensions `string`: The dimensions for the unsampled report.
  * downloadType `string`: The type of download you need to use for the report data file. Possible values include `GOOGLE_DRIVE` and `GOOGLE_CLOUD_STORAGE`. If the value is `GOOGLE_DRIVE`, see the `driveDownloadDetails` field. If the value is `GOOGLE_CLOUD_STORAGE`, see the `cloudStorageDownloadDetails` field.
  * driveDownloadDetails `object`: Download details for a file stored in Google Drive.
    * documentId `string`: Id of the document/file containing the report data.
  * end-date `string`: The end date for the unsampled report.
  * filters `string`: The filters for the unsampled report.
  * id `string`: Unsampled report ID.
  * kind `string`: Resource type for an Analytics unsampled report.
  * metrics `string`: The metrics for the unsampled report.
  * profileId `string`: View (Profile) ID to which this unsampled report belongs.
  * segment `string`: The segment for the unsampled report.
  * selfLink `string`: Link for this unsampled report.
  * start-date `string`: The start date for the unsampled report.
  * status `string`: Status of this unsampled report. Possible values are PENDING, COMPLETED, or FAILED.
  * title `string`: Title of the unsampled report.
  * updated `string`: Time this unsampled report was last modified.
  * webPropertyId `string`: Web property ID to which this unsampled report belongs. The web property ID is of the form UA-XXXXX-YY.

### UnsampledReports
* UnsampledReports `object`: An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report.
  * items `array`: A list of unsampled reports.
    * items [UnsampledReport](#unsampledreport)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this unsampled report collection.
  * previousLink `string`: Link to previous page for this unsampled report collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of resources in the result.
  * username `string`: Email ID of the authenticated user

### Upload
* Upload `object`: Metadata returned for an upload operation.
  * accountId `string`: Account Id to which this upload belongs.
  * customDataSourceId `string`: Custom data source Id to which this data import belongs.
  * errors `array`: Data import errors collection.
    * items `string`
  * id `string`: A unique ID for this upload.
  * kind `string`: Resource type for Analytics upload.
  * status `string`: Upload status. Possible values: PENDING, COMPLETED, FAILED, DELETING, DELETED.
  * uploadTime `string`: Time this file is uploaded.

### Uploads
* Uploads `object`: Upload collection lists Analytics uploads to which the user has access. Each custom data source can have a set of uploads. Each resource in the upload collection corresponds to a single Analytics data upload.
  * items `array`: A list of uploads.
    * items [Upload](#upload)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this upload collection.
  * previousLink `string`: Link to previous page for this upload collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of resources in the result.

### UserRef
* UserRef `object`: JSON template for a user reference.
  * email `string`: Email ID of this user.
  * id `string`: User ID.
  * kind `string`

### WebPropertyRef
* WebPropertyRef `object`: JSON template for a web property reference.
  * accountId `string`: Account ID to which this web property belongs.
  * href `string`: Link for this web property.
  * id `string`: Web property ID of the form UA-XXXXX-YY.
  * internalWebPropertyId `string`: Internal ID for this web property.
  * kind `string`: Analytics web property reference.
  * name `string`: Name of this web property.

### WebPropertySummary
* WebPropertySummary `object`: JSON template for an Analytics WebPropertySummary. WebPropertySummary returns basic information (i.e., summary) for a web property.
  * id `string`: Web property ID of the form UA-XXXXX-YY.
  * internalWebPropertyId `string`: Internal ID for this web property.
  * kind `string`: Resource type for Analytics WebPropertySummary.
  * level `string`: Level for this web property. Possible values are STANDARD or PREMIUM.
  * name `string`: Web property name.
  * profiles `array`: List of profiles under this web property.
    * items [ProfileSummary](#profilesummary)
  * starred `boolean`: Indicates whether this web property is starred or not.
  * websiteUrl `string`: Website url for this web property.

### Webproperties
* Webproperties `object`: A web property collection lists Analytics web properties to which the user has access. Each resource in the collection corresponds to a single Analytics web property.
  * items `array`: A list of web properties.
    * items [Webproperty](#webproperty)
  * itemsPerPage `integer`: The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter.
  * kind `string`: Collection type.
  * nextLink `string`: Link to next page for this web property collection.
  * previousLink `string`: Link to previous page for this web property collection.
  * startIndex `integer`: The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter.
  * totalResults `integer`: The total number of results for the query, regardless of the number of results in the response.
  * username `string`: Email ID of the authenticated user

### Webproperty
* Webproperty `object`: JSON template for an Analytics web property.
  * accountId `string`: Account ID to which this web property belongs.
  * childLink `object`: Child link for this web property. Points to the list of views (profiles) for this web property.
    * href `string`: Link to the list of views (profiles) for this web property.
    * type `string`: Type of the parent link. Its value is "analytics#profiles".
  * created `string`: Time this web property was created.
  * defaultProfileId `string`: Default view (profile) ID.
  * id `string`: Web property ID of the form UA-XXXXX-YY.
  * industryVertical `string`: The industry vertical/category selected for this web property.
  * internalWebPropertyId `string`: Internal ID for this web property.
  * kind `string`: Resource type for Analytics WebProperty.
  * level `string`: Level for this web property. Possible values are STANDARD or PREMIUM.
  * name `string`: Name of this web property.
  * parentLink `object`: Parent link for this web property. Points to the account to which this web property belongs.
    * href `string`: Link to the account for this web property.
    * type `string`: Type of the parent link. Its value is "analytics#account".
  * permissions `object`: Permissions the user has for this web property.
    * effective `array`: All the permissions that the user has for this web property. These include any implied permissions (e.g., EDIT implies VIEW) or inherited permissions from the parent account.
      * items `string`
  * profileCount `integer`: View (Profile) count for this web property.
  * selfLink `string`: Link for this web property.
  * starred `boolean`: Indicates whether this web property is starred or not.
  * updated `string`: Time this web property was last modified.
  * websiteUrl `string`: Website url for this web property.


