# @datafire/google_adsense

Client library for AdSense Management

## Installation and Usage
```bash
npm install --save datafire @datafire/google_adsense
```

```js
let datafire = require('datafire');
let google_adsense = require('@datafire/google_adsense').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    google_adsense: account,
  }
})


google_adsense.savedadstyles.list({}, context).then(data => {
  console.log(data);
})
```

## Description
Accesses AdSense publishers' inventory and generates performance reports.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_adsense.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_adsense.oauthRefresh(null, context)
```


### accounts.list
List all accounts available to this AdSense account.


```js
google_adsense.accounts.list({}, context)
```


### accounts.get
Get information about the selected AdSense account.


```js
google_adsense.accounts.get({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to get information about.
* tree (boolean) - Whether the tree of sub accounts should be returned.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adclients.list
List all ad clients in the specified account.


```js
google_adsense.accounts.adclients.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account for which to list ad clients.
* maxResults (integer) - The maximum number of ad clients to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adunits.list
List all ad units in the specified ad client for the specified account.


```js
google_adsense.accounts.adunits.list({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to which the ad client belongs.
* adClientId (string) **required** - Ad client for which to list ad units.
* includeInactive (boolean) - Whether to include inactive ad units. Default: true.
* maxResults (integer) - The maximum number of ad units to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adunits.get
Gets the specified ad unit in the specified ad client for the specified account.


```js
google_adsense.accounts.adunits.get({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to which the ad client belongs.
* adClientId (string) **required** - Ad client for which to get the ad unit.
* adUnitId (string) **required** - Ad unit to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adunits.getAdCode
Get ad code for the specified ad unit.


```js
google_adsense.accounts.adunits.getAdCode({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account which contains the ad client.
* adClientId (string) **required** - Ad client with contains the ad unit.
* adUnitId (string) **required** - Ad unit to get the code for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.adunits.customchannels.list
List all custom channels which the specified ad unit belongs to.


```js
google_adsense.accounts.adunits.customchannels.list({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to which the ad client belongs.
* adClientId (string) **required** - Ad client which contains the ad unit.
* adUnitId (string) **required** - Ad unit for which to list custom channels.
* maxResults (integer) - The maximum number of custom channels to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.customchannels.list
List all custom channels in the specified ad client for the specified account.


```js
google_adsense.accounts.customchannels.list({
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
Get the specified custom channel from the specified ad client for the specified account.


```js
google_adsense.accounts.customchannels.get({
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

### accounts.customchannels.adunits.list
List all ad units in the specified custom channel.


```js
google_adsense.accounts.customchannels.adunits.list({
  "accountId": "",
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to which the ad client belongs.
* adClientId (string) **required** - Ad client which contains the custom channel.
* customChannelId (string) **required** - Custom channel for which to list ad units.
* includeInactive (boolean) - Whether to include inactive ad units. Default: true.
* maxResults (integer) - The maximum number of ad units to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.urlchannels.list
List all URL channels in the specified ad client for the specified account.


```js
google_adsense.accounts.urlchannels.list({
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
List the alerts for the specified AdSense account.


```js
google_adsense.accounts.alerts.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account for which to retrieve the alerts.
* locale (string) - The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.alerts.delete
Dismiss (delete) the specified alert from the specified publisher AdSense account.


```js
google_adsense.accounts.alerts.delete({
  "accountId": "",
  "alertId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account which contains the ad unit.
* alertId (string) **required** - Alert to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.payments.list
List the payments for the specified AdSense account.


```js
google_adsense.accounts.payments.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account for which to retrieve the payments.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.reports.generate
Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.


```js
google_adsense.accounts.reports.generate({
  "accountId": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account upon which to report.
* startDate (string) **required** - Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
* endDate (string) **required** - End of the date range to report on in "YYYY-MM-DD" format, inclusive.
* currency (string) - Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
* dimension (array) - Dimensions to base the report on.
* filter (array) - Filters to be run on the report.
* locale (string) - Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
* maxResults (integer) - The maximum number of rows of report data to return.
* metric (array) - Numeric columns to include in the report.
* sort (array) - The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
* startIndex (integer) - Index of the first row of report data to return.
* useTimezoneReporting (boolean) - Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.reports.saved.list
List all saved reports in the specified AdSense account.


```js
google_adsense.accounts.reports.saved.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to which the saved reports belong.
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
Generate an AdSense report based on the saved report ID sent in the query parameters.


```js
google_adsense.accounts.reports.saved.generate({
  "accountId": "",
  "savedReportId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account to which the saved reports belong.
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

### accounts.savedadstyles.list
List all saved ad styles in the specified account.


```js
google_adsense.accounts.savedadstyles.list({
  "accountId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account for which to list saved ad styles.
* maxResults (integer) - The maximum number of saved ad styles to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### accounts.savedadstyles.get
List a specific saved ad style for the specified account.


```js
google_adsense.accounts.savedadstyles.get({
  "accountId": "",
  "savedAdStyleId": ""
}, context)
```

#### Parameters
* accountId (string) **required** - Account for which to get the saved ad style.
* savedAdStyleId (string) **required** - Saved ad style to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### adclients.list
List all ad clients in this AdSense account.


```js
google_adsense.adclients.list({}, context)
```


### adunits.list
List all ad units in the specified ad client for this AdSense account.


```js
google_adsense.adunits.list({
  "adClientId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client for which to list ad units.
* includeInactive (boolean) - Whether to include inactive ad units. Default: true.
* maxResults (integer) - The maximum number of ad units to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### adunits.get
Gets the specified ad unit in the specified ad client.


```js
google_adsense.adunits.get({
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client for which to get the ad unit.
* adUnitId (string) **required** - Ad unit to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### adunits.getAdCode
Get ad code for the specified ad unit.


```js
google_adsense.adunits.getAdCode({
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client with contains the ad unit.
* adUnitId (string) **required** - Ad unit to get the code for.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### adunits.customchannels.list
List all custom channels which the specified ad unit belongs to.


```js
google_adsense.adunits.customchannels.list({
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client which contains the ad unit.
* adUnitId (string) **required** - Ad unit for which to list custom channels.
* maxResults (integer) - The maximum number of custom channels to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### customchannels.list
List all custom channels in the specified ad client for this AdSense account.


```js
google_adsense.customchannels.list({
  "adClientId": ""
}, context)
```

#### Parameters
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

### customchannels.get
Get the specified custom channel from the specified ad client.


```js
google_adsense.customchannels.get({
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client which contains the custom channel.
* customChannelId (string) **required** - Custom channel to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### customchannels.adunits.list
List all ad units in the specified custom channel.


```js
google_adsense.customchannels.adunits.list({
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Parameters
* adClientId (string) **required** - Ad client which contains the custom channel.
* customChannelId (string) **required** - Custom channel for which to list ad units.
* includeInactive (boolean) - Whether to include inactive ad units. Default: true.
* maxResults (integer) - The maximum number of ad units to include in the response, used for paging.
* pageToken (string) - A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### urlchannels.list
List all URL channels in the specified ad client for this AdSense account.


```js
google_adsense.urlchannels.list({
  "adClientId": ""
}, context)
```

#### Parameters
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

### alerts.list
List the alerts for this AdSense account.


```js
google_adsense.alerts.list({}, context)
```


### alerts.delete
Dismiss (delete) the specified alert from the publisher's AdSense account.


```js
google_adsense.alerts.delete({
  "alertId": ""
}, context)
```

#### Parameters
* alertId (string) **required** - Alert to delete.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### metadata.dimensions.list
List the metadata for the dimensions available to this AdSense account.


```js
google_adsense.metadata.dimensions.list({}, context)
```


### metadata.metrics.list
List the metadata for the metrics available to this AdSense account.


```js
google_adsense.metadata.metrics.list({}, context)
```


### payments.list
List the payments for this AdSense account.


```js
google_adsense.payments.list({}, context)
```


### reports.generate
Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.


```js
google_adsense.reports.generate({
  "startDate": "",
  "endDate": ""
}, context)
```

#### Parameters
* startDate (string) **required** - Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
* endDate (string) **required** - End of the date range to report on in "YYYY-MM-DD" format, inclusive.
* accountId (array) - Accounts upon which to report.
* currency (string) - Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
* dimension (array) - Dimensions to base the report on.
* filter (array) - Filters to be run on the report.
* locale (string) - Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
* maxResults (integer) - The maximum number of rows of report data to return.
* metric (array) - Numeric columns to include in the report.
* sort (array) - The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
* startIndex (integer) - Index of the first row of report data to return.
* useTimezoneReporting (boolean) - Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### reports.saved.list
List all saved reports in this AdSense account.


```js
google_adsense.reports.saved.list({}, context)
```


### reports.saved.generate
Generate an AdSense report based on the saved report ID sent in the query parameters.


```js
google_adsense.reports.saved.generate({
  "savedReportId": ""
}, context)
```

#### Parameters
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

### savedadstyles.list
List all saved ad styles in the user's account.


```js
google_adsense.savedadstyles.list({}, context)
```


### savedadstyles.get
Get a specific saved ad style from the user's account.


```js
google_adsense.savedadstyles.get({
  "savedAdStyleId": ""
}, context)
```

#### Parameters
* savedAdStyleId (string) **required** - Saved ad style to retrieve.
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

