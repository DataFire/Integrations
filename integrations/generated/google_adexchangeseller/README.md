# @datafire/google_adexchangeseller

Client library for Ad Exchange Seller

## Installation and Usage
```bash
npm install --save datafire @datafire/google_adexchangeseller
```

```js
let datafire = require('datafire');
let google_adexchangeseller = require('@datafire/google_adexchangeseller').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_adexchangeseller.accounts.list({}).then(data => {
  console.log(data);
})
```

## Description
Accesses the inventory of Ad Exchange seller users and generates reports.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_adexchangeseller.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_adexchangeseller.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### accounts.list
List all accounts available to this Ad Exchange account.


```js
google_adexchangeseller.accounts.list({}, context)
```

#### Parameters
* maxResults (integer) - The maximum number of accounts to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.get
Get information about the selected Ad Exchange account.


```js
google_adexchangeseller.accounts.get({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to get information about. Tip: 'myaccount' is a valid ID.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adclients.list
List all ad clients in this Ad Exchange account.


```js
google_adexchangeseller.accounts.adclients.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to which the ad client belongs.
* maxResults (integer) - The maximum number of ad clients to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.customchannels.list
List all custom channels in the specified ad client for this Ad Exchange account.


```js
google_adexchangeseller.accounts.customchannels.list({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to which the ad client belongs.
* adClientId (string) **required** - Ad client for which to list custom channels.
* maxResults (integer) - The maximum number of custom channels to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.customchannels.get
Get the specified custom channel from the specified ad client.


```js
google_adexchangeseller.accounts.customchannels.get({
  "accountId": "",
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to which the ad client belongs.
* adClientId (string) **required** - Ad client which contains the custom channel.
* customChannelId (string) **required** - Custom channel to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.urlchannels.list
List all URL channels in the specified ad client for this Ad Exchange account.


```js
google_adexchangeseller.accounts.urlchannels.list({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to which the ad client belongs.
* adClientId (string) **required** - Ad client for which to list URL channels.
* maxResults (integer) - The maximum number of URL channels to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.alerts.list
List the alerts for this Ad Exchange account.


```js
google_adexchangeseller.accounts.alerts.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account owning the alerts.
* locale (string) - The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.metadata.dimensions.list
List the metadata for the dimensions available to this AdExchange account.


```js
google_adexchangeseller.accounts.metadata.dimensions.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account with visibility to the dimensions.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.metadata.metrics.list
List the metadata for the metrics available to this AdExchange account.


```js
google_adexchangeseller.accounts.metadata.metrics.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account with visibility to the metrics.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.preferreddeals.list
List the preferred deals for this Ad Exchange account.


```js
google_adexchangeseller.accounts.preferreddeals.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account owning the deals.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.preferreddeals.get
Get information about the selected Ad Exchange Preferred Deal.


```js
google_adexchangeseller.accounts.preferreddeals.get({
  "accountId": "",
  "dealId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account owning the deal.
* dealId (string) **required** - Preferred deal to get information about.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.reports.generate
Generate an Ad Exchange report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.


```js
google_adexchangeseller.accounts.reports.generate({
  "accountId": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account which owns the generated report.
* startDate (string) **required** - Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
* endDate (string) **required** - End of the date range to report on in "YYYY-MM-DD" format, inclusive.
* dimension (array) - Dimensions to base the report on.
* filter (array) - Filters to be run on the report.
* locale (string) - Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
* maxResults (integer) - The maximum number of rows of report data to return.
* metric (array) - Numeric columns to include in the report.
* sort (array) - The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
* startIndex (integer) - Index of the first row of report data to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.reports.saved.list
List all saved reports in this Ad Exchange account.


```js
google_adexchangeseller.accounts.reports.saved.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account owning the saved reports.
* maxResults (integer) - The maximum number of saved reports to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.reports.saved.generate
Generate an Ad Exchange report based on the saved report ID sent in the query parameters.


```js
google_adexchangeseller.accounts.reports.saved.generate({
  "accountId": "",
  "savedReportId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account owning the saved report.
* savedReportId (string) **required** - The saved report to retrieve.
* locale (string) - Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
* maxResults (integer) - The maximum number of rows of report data to return.
* startIndex (integer) - Index of the first row of report data to return.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

