# @datafire/google_adsense

Client library for AdSense Management API

## Installation and Usage
```bash
npm install --save @datafire/google_adsense
```
```js
let google_adsense = require('@datafire/google_adsense').create({
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

Accesses AdSense publishers' inventory and generates performance reports.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_adsense.oauthCallback({
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
google_adsense.oauthRefresh(null, context)
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

### adsense.accounts.list
List all accounts available to this AdSense account.


```js
google_adsense.adsense.accounts.list({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of accounts to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Accounts](#accounts)

### adsense.accounts.get
Get information about the selected AdSense account.


```js
google_adsense.adsense.accounts.get({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to get information about.
  * tree `boolean`: Whether the tree of sub accounts should be returned.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Account](#account)

### adsense.accounts.adclients.list
List all ad clients in the specified account.


```js
google_adsense.adsense.accounts.adclients.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account for which to list ad clients.
  * maxResults `integer`: The maximum number of ad clients to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdClients](#adclients)

### adsense.accounts.adclients.getAdCode
Get Auto ad code for a given ad client.


```js
google_adsense.adsense.accounts.adclients.getAdCode({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account which contains the ad client.
  * adClientId **required** `string`: Ad client to get the code for.
  * tagPartner `string`: Tag partner to include in the ad code snippet.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdCode](#adcode)

### adsense.accounts.adunits.list
List all ad units in the specified ad client for the specified account.


```js
google_adsense.adsense.accounts.adunits.list({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to which the ad client belongs.
  * adClientId **required** `string`: Ad client for which to list ad units.
  * includeInactive `boolean`: Whether to include inactive ad units. Default: true.
  * maxResults `integer`: The maximum number of ad units to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdUnits](#adunits)

### adsense.accounts.adunits.get
Gets the specified ad unit in the specified ad client for the specified account.


```js
google_adsense.adsense.accounts.adunits.get({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to which the ad client belongs.
  * adClientId **required** `string`: Ad client for which to get the ad unit.
  * adUnitId **required** `string`: Ad unit to retrieve.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdUnit](#adunit)

### adsense.accounts.adunits.getAdCode
Get ad code for the specified ad unit.


```js
google_adsense.adsense.accounts.adunits.getAdCode({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account which contains the ad client.
  * adClientId **required** `string`: Ad client with contains the ad unit.
  * adUnitId **required** `string`: Ad unit to get the code for.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdCode](#adcode)

### adsense.accounts.adunits.customchannels.list
List all custom channels which the specified ad unit belongs to.


```js
google_adsense.adsense.accounts.adunits.customchannels.list({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to which the ad client belongs.
  * adClientId **required** `string`: Ad client which contains the ad unit.
  * adUnitId **required** `string`: Ad unit for which to list custom channels.
  * maxResults `integer`: The maximum number of custom channels to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CustomChannels](#customchannels)

### adsense.accounts.customchannels.list
List all custom channels in the specified ad client for the specified account.


```js
google_adsense.adsense.accounts.customchannels.list({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to which the ad client belongs.
  * adClientId **required** `string`: Ad client for which to list custom channels.
  * maxResults `integer`: The maximum number of custom channels to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CustomChannels](#customchannels)

### adsense.accounts.customchannels.get
Get the specified custom channel from the specified ad client for the specified account.


```js
google_adsense.adsense.accounts.customchannels.get({
  "accountId": "",
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to which the ad client belongs.
  * adClientId **required** `string`: Ad client which contains the custom channel.
  * customChannelId **required** `string`: Custom channel to retrieve.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CustomChannel](#customchannel)

### adsense.accounts.customchannels.adunits.list
List all ad units in the specified custom channel.


```js
google_adsense.adsense.accounts.customchannels.adunits.list({
  "accountId": "",
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to which the ad client belongs.
  * adClientId **required** `string`: Ad client which contains the custom channel.
  * customChannelId **required** `string`: Custom channel for which to list ad units.
  * includeInactive `boolean`: Whether to include inactive ad units. Default: true.
  * maxResults `integer`: The maximum number of ad units to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdUnits](#adunits)

### adsense.accounts.urlchannels.list
List all URL channels in the specified ad client for the specified account.


```js
google_adsense.adsense.accounts.urlchannels.list({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to which the ad client belongs.
  * adClientId **required** `string`: Ad client for which to list URL channels.
  * maxResults `integer`: The maximum number of URL channels to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [UrlChannels](#urlchannels)

### adsense.accounts.alerts.list
List the alerts for the specified AdSense account.


```js
google_adsense.adsense.accounts.alerts.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account for which to retrieve the alerts.
  * locale `string`: The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Alerts](#alerts)

### adsense.accounts.alerts.delete
Dismiss (delete) the specified alert from the specified publisher AdSense account.


```js
google_adsense.adsense.accounts.alerts.delete({
  "accountId": "",
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account which contains the ad unit.
  * alertId **required** `string`: Alert to delete.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### adsense.accounts.payments.list
List the payments for the specified AdSense account.


```js
google_adsense.adsense.accounts.payments.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account for which to retrieve the payments.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Payments](#payments)

### adsense.accounts.reports.generate
Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.


```js
google_adsense.adsense.accounts.reports.generate({
  "accountId": "",
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account upon which to report.
  * startDate **required** `string`: Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
  * endDate **required** `string`: End of the date range to report on in "YYYY-MM-DD" format, inclusive.
  * currency `string`: Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
  * dimension `array`: Dimensions to base the report on.
  * filter `array`: Filters to be run on the report.
  * locale `string`: Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
  * maxResults `integer`: The maximum number of rows of report data to return.
  * metric `array`: Numeric columns to include in the report.
  * sort `array`: The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
  * startIndex `integer`: Index of the first row of report data to return.
  * useTimezoneReporting `boolean`: Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdsenseReportsGenerateResponse](#adsensereportsgenerateresponse)

### adsense.accounts.reports.saved.list
List all saved reports in the specified AdSense account.


```js
google_adsense.adsense.accounts.reports.saved.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to which the saved reports belong.
  * maxResults `integer`: The maximum number of saved reports to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SavedReports](#savedreports)

### adsense.accounts.reports.saved.generate
Generate an AdSense report based on the saved report ID sent in the query parameters.


```js
google_adsense.adsense.accounts.reports.saved.generate({
  "accountId": "",
  "savedReportId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to which the saved reports belong.
  * savedReportId **required** `string`: The saved report to retrieve.
  * locale `string`: Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
  * maxResults `integer`: The maximum number of rows of report data to return.
  * startIndex `integer`: Index of the first row of report data to return.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdsenseReportsGenerateResponse](#adsensereportsgenerateresponse)

### adsense.accounts.savedadstyles.list
List all saved ad styles in the specified account.


```js
google_adsense.adsense.accounts.savedadstyles.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account for which to list saved ad styles.
  * maxResults `integer`: The maximum number of saved ad styles to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SavedAdStyles](#savedadstyles)

### adsense.accounts.savedadstyles.get
List a specific saved ad style for the specified account.


```js
google_adsense.adsense.accounts.savedadstyles.get({
  "accountId": "",
  "savedAdStyleId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account for which to get the saved ad style.
  * savedAdStyleId **required** `string`: Saved ad style to retrieve.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SavedAdStyle](#savedadstyle)

### adsense.adclients.list
List all ad clients in this AdSense account.


```js
google_adsense.adsense.adclients.list({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of ad clients to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdClients](#adclients)

### adsense.adunits.list
List all ad units in the specified ad client for this AdSense account.


```js
google_adsense.adsense.adunits.list({
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client for which to list ad units.
  * includeInactive `boolean`: Whether to include inactive ad units. Default: true.
  * maxResults `integer`: The maximum number of ad units to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdUnits](#adunits)

### adsense.adunits.get
Gets the specified ad unit in the specified ad client.


```js
google_adsense.adsense.adunits.get({
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client for which to get the ad unit.
  * adUnitId **required** `string`: Ad unit to retrieve.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdUnit](#adunit)

### adsense.adunits.getAdCode
Get ad code for the specified ad unit.


```js
google_adsense.adsense.adunits.getAdCode({
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client with contains the ad unit.
  * adUnitId **required** `string`: Ad unit to get the code for.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdCode](#adcode)

### adsense.adunits.customchannels.list
List all custom channels which the specified ad unit belongs to.


```js
google_adsense.adsense.adunits.customchannels.list({
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client which contains the ad unit.
  * adUnitId **required** `string`: Ad unit for which to list custom channels.
  * maxResults `integer`: The maximum number of custom channels to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CustomChannels](#customchannels)

### adsense.customchannels.list
List all custom channels in the specified ad client for this AdSense account.


```js
google_adsense.adsense.customchannels.list({
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client for which to list custom channels.
  * maxResults `integer`: The maximum number of custom channels to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CustomChannels](#customchannels)

### adsense.customchannels.get
Get the specified custom channel from the specified ad client.


```js
google_adsense.adsense.customchannels.get({
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client which contains the custom channel.
  * customChannelId **required** `string`: Custom channel to retrieve.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CustomChannel](#customchannel)

### adsense.customchannels.adunits.list
List all ad units in the specified custom channel.


```js
google_adsense.adsense.customchannels.adunits.list({
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client which contains the custom channel.
  * customChannelId **required** `string`: Custom channel for which to list ad units.
  * includeInactive `boolean`: Whether to include inactive ad units. Default: true.
  * maxResults `integer`: The maximum number of ad units to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdUnits](#adunits)

### adsense.urlchannels.list
List all URL channels in the specified ad client for this AdSense account.


```js
google_adsense.adsense.urlchannels.list({
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client for which to list URL channels.
  * maxResults `integer`: The maximum number of URL channels to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [UrlChannels](#urlchannels)

### adsense.alerts.list
List the alerts for this AdSense account.


```js
google_adsense.adsense.alerts.list({}, context)
```

#### Input
* input `object`
  * locale `string`: The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Alerts](#alerts)

### adsense.alerts.delete
Dismiss (delete) the specified alert from the publisher's AdSense account.


```js
google_adsense.adsense.alerts.delete({
  "alertId": ""
}, context)
```

#### Input
* input `object`
  * alertId **required** `string`: Alert to delete.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
*Output schema unknown*

### adsense.metadata.dimensions.list
List the metadata for the dimensions available to this AdSense account.


```js
google_adsense.adsense.metadata.dimensions.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Metadata](#metadata)

### adsense.metadata.metrics.list
List the metadata for the metrics available to this AdSense account.


```js
google_adsense.adsense.metadata.metrics.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Metadata](#metadata)

### adsense.payments.list
List the payments for this AdSense account.


```js
google_adsense.adsense.payments.list({}, context)
```

#### Input
* input `object`
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Payments](#payments)

### adsense.reports.generate
Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.


```js
google_adsense.adsense.reports.generate({
  "startDate": "",
  "endDate": ""
}, context)
```

#### Input
* input `object`
  * startDate **required** `string`: Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
  * endDate **required** `string`: End of the date range to report on in "YYYY-MM-DD" format, inclusive.
  * accountId `array`: Accounts upon which to report.
  * currency `string`: Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
  * dimension `array`: Dimensions to base the report on.
  * filter `array`: Filters to be run on the report.
  * locale `string`: Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
  * maxResults `integer`: The maximum number of rows of report data to return.
  * metric `array`: Numeric columns to include in the report.
  * sort `array`: The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
  * startIndex `integer`: Index of the first row of report data to return.
  * useTimezoneReporting `boolean`: Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdsenseReportsGenerateResponse](#adsensereportsgenerateresponse)

### adsense.reports.saved.list
List all saved reports in this AdSense account.


```js
google_adsense.adsense.reports.saved.list({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of saved reports to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SavedReports](#savedreports)

### adsense.reports.saved.generate
Generate an AdSense report based on the saved report ID sent in the query parameters.


```js
google_adsense.adsense.reports.saved.generate({
  "savedReportId": ""
}, context)
```

#### Input
* input `object`
  * savedReportId **required** `string`: The saved report to retrieve.
  * locale `string`: Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
  * maxResults `integer`: The maximum number of rows of report data to return.
  * startIndex `integer`: Index of the first row of report data to return.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdsenseReportsGenerateResponse](#adsensereportsgenerateresponse)

### adsense.savedadstyles.list
List all saved ad styles in the user's account.


```js
google_adsense.adsense.savedadstyles.list({}, context)
```

#### Input
* input `object`
  * maxResults `integer`: The maximum number of saved ad styles to include in the response, used for paging.
  * pageToken `string`: A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SavedAdStyles](#savedadstyles)

### adsense.savedadstyles.get
Get a specific saved ad style from the user's account.


```js
google_adsense.adsense.savedadstyles.get({
  "savedAdStyleId": ""
}, context)
```

#### Input
* input `object`
  * savedAdStyleId **required** `string`: Saved ad style to retrieve.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [SavedAdStyle](#savedadstyle)



## Definitions

### Account
* Account `object`
  * creation_time `string`
  * id `string`: Unique identifier of this account.
  * kind `string`: Kind of resource this is, in this case adsense#account.
  * name `string`: Name of this account.
  * premium `boolean`: Whether this account is premium.
  * subAccounts `array`: Sub accounts of the this account.
    * items [Account](#account)
  * timezone `string`: AdSense timezone of this account.

### Accounts
* Accounts `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The accounts returned in this list response.
    * items [Account](#account)
  * kind `string`: Kind of list this is, in this case adsense#accounts.
  * nextPageToken `string`: Continuation token used to page through accounts. To retrieve the next page of results, set the next request's "pageToken" value to this.

### AdClient
* AdClient `object`
  * arcOptIn `boolean`: Whether this ad client is opted in to ARC.
  * id `string`: Unique identifier of this ad client.
  * kind `string`: Kind of resource this is, in this case adsense#adClient.
  * productCode `string`: This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
  * supportsReporting `boolean`: Whether this ad client supports being reported on.

### AdClients
* AdClients `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The ad clients returned in this list response.
    * items [AdClient](#adclient)
  * kind `string`: Kind of list this is, in this case adsense#adClients.
  * nextPageToken `string`: Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.

### AdCode
* AdCode `object`
  * adCode `string`: The Auto ad code snippet. The ad code snippet.
  * ampBody `string`: The AMP Auto ad code snippet that goes in the body of an AMP page.
  * ampHead `string`: The AMP Auto ad code snippet that goes in the head of an AMP page.
  * kind `string`: Kind this is, in this case adsense#adCode.

### AdStyle
* AdStyle `object`
  * colors `object`: The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
    * background `string`: The color of the ad background.
    * border `string`: The color of the ad border.
    * text `string`: The color of the ad text.
    * title `string`: The color of the ad title.
    * url `string`: The color of the ad url.
  * corners `string`: The style of the corners in the ad (deprecated: never populated, ignored).
  * font `object`: The font which is included in the style.
    * family `string`: The family of the font.
    * size `string`: The size of the font.
  * kind `string`: Kind this is, in this case adsense#adStyle.

### AdUnit
* AdUnit `object`
  * code `string`: Identity code of this ad unit, not necessarily unique across ad clients.
  * contentAdsSettings `object`: Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
    * backupOption `object`: The backup option to be used in instances where no ad is available.
      * color `string`: Color to use when type is set to COLOR.
      * type `string`: Type of the backup option. Possible values are BLANK, COLOR and URL.
      * url `string`: URL to use when type is set to URL.
    * size `string`: Size of this ad unit.
    * type `string`: Type of this ad unit.
  * customStyle [AdStyle](#adstyle)
  * feedAdsSettings `object`: Settings specific to feed ads (AFF) - deprecated.
    * adPosition `string`: The position of the ads relative to the feed entries.
    * frequency `integer`: The frequency at which ads should appear in the feed (i.e. every N entries).
    * minimumWordCount `integer`: The minimum length an entry should be in order to have attached ads.
    * type `string`: The type of ads which should appear.
  * id `string`: Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
  * kind `string`: Kind of resource this is, in this case adsense#adUnit.
  * mobileContentAdsSettings `object`: Settings specific to WAP mobile content ads (AFMC) - deprecated.
    * markupLanguage `string`: The markup language to use for this ad unit.
    * scriptingLanguage `string`: The scripting language to use for this ad unit.
    * size `string`: Size of this ad unit.
    * type `string`: Type of this ad unit.
  * name `string`: Name of this ad unit.
  * savedStyleId `string`: ID of the saved ad style which holds this ad unit's style information.
  * status `string`: Status of this ad unit. Possible values are:

### AdUnits
* AdUnits `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The ad units returned in this list response.
    * items [AdUnit](#adunit)
  * kind `string`: Kind of list this is, in this case adsense#adUnits.
  * nextPageToken `string`: Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.

### AdsenseReportsGenerateResponse
* AdsenseReportsGenerateResponse `object`
  * averages `array`: The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
    * items `string`
  * endDate `string`: The requested end date in yyyy-mm-dd format.
  * headers `array`: The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.
    * items `object`
      * currency `string`: The currency of this column. Only present if the header type is METRIC_CURRENCY.
      * name `string`: The name of the header.
      * type `string`: The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY.
  * kind `string`: Kind this is, in this case adsense#report.
  * rows `array`: The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
    * items `array`
      * items `string`
  * startDate `string`: The requested start date in yyyy-mm-dd format.
  * totalMatchedRows `string`: The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.
  * totals `array`: The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
    * items `string`
  * warnings `array`: Any warnings associated with generation of the report.
    * items `string`

### Alert
* Alert `object`
  * id `string`: Unique identifier of this alert. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
  * isDismissible `boolean`: Whether this alert can be dismissed.
  * kind `string`: Kind of resource this is, in this case adsense#alert.
  * message `string`: The localized alert message.
  * severity `string`: Severity of this alert. Possible values: INFO, WARNING, SEVERE.
  * type `string`: Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3, ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY, GRAYLISTED_PUBLISHER, API_HOLD.

### Alerts
* Alerts `object`
  * items `array`: The alerts returned in this list response.
    * items [Alert](#alert)
  * kind `string`: Kind of list this is, in this case adsense#alerts.

### CustomChannel
* CustomChannel `object`
  * code `string`: Code of this custom channel, not necessarily unique across ad clients.
  * id `string`: Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
  * kind `string`: Kind of resource this is, in this case adsense#customChannel.
  * name `string`: Name of this custom channel.
  * targetingInfo `object`: The targeting information of this custom channel, if activated.
    * adsAppearOn `string`: The name used to describe this channel externally.
    * description `string`: The external description of the channel.
    * location `string`: The locations in which ads appear. (Only valid for content and mobile content ads (deprecated)). Acceptable values for content ads are: TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT, MULTIPLE_LOCATIONS. Acceptable values for mobile content ads (deprecated) are: TOP, MIDDLE, BOTTOM, MULTIPLE_LOCATIONS.
    * siteLanguage `string`: The language of the sites ads will be displayed on.

### CustomChannels
* CustomChannels `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The custom channels returned in this list response.
    * items [CustomChannel](#customchannel)
  * kind `string`: Kind of list this is, in this case adsense#customChannels.
  * nextPageToken `string`: Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.

### Metadata
* Metadata `object`
  * items `array`
    * items [ReportingMetadataEntry](#reportingmetadataentry)
  * kind `string`: Kind of list this is, in this case adsense#metadata.

### Payment
* Payment `object`
  * id `string`: Unique identifier of this Payment.
  * kind `string`: Kind of resource this is, in this case adsense#payment.
  * paymentAmount `string`: The amount to be paid.
  * paymentAmountCurrencyCode `string`: The currency code for the amount to be paid.
  * paymentDate `string`: The date this payment was/will be credited to the user, or none if the payment threshold has not been met.

### Payments
* Payments `object`
  * items `array`: The list of Payments for the account. One or both of a) the account's most recent payment; and b) the account's upcoming payment.
    * items [Payment](#payment)
  * kind `string`: Kind of list this is, in this case adsense#payments.

### ReportingMetadataEntry
* ReportingMetadataEntry `object`
  * compatibleDimensions `array`: For metrics this is a list of dimension IDs which the metric is compatible with, for dimensions it is a list of compatibility groups the dimension belongs to.
    * items `string`
  * compatibleMetrics `array`: The names of the metrics the dimension or metric this reporting metadata entry describes is compatible with.
    * items `string`
  * id `string`: Unique identifier of this reporting metadata entry, corresponding to the name of the appropriate dimension or metric.
  * kind `string`: Kind of resource this is, in this case adsense#reportingMetadataEntry.
  * requiredDimensions `array`: The names of the dimensions which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.
    * items `string`
  * requiredMetrics `array`: The names of the metrics which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.
    * items `string`
  * supportedProducts `array`: The codes of the projects supported by the dimension or metric this reporting metadata entry describes.
    * items `string`

### SavedAdStyle
* SavedAdStyle `object`
  * adStyle [AdStyle](#adstyle)
  * id `string`: Unique identifier of this saved ad style. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
  * kind `string`: Kind of resource this is, in this case adsense#savedAdStyle.
  * name `string`: The user selected name of this SavedAdStyle.

### SavedAdStyles
* SavedAdStyles `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The saved ad styles returned in this list response.
    * items [SavedAdStyle](#savedadstyle)
  * kind `string`: Kind of list this is, in this case adsense#savedAdStyles.
  * nextPageToken `string`: Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.

### SavedReport
* SavedReport `object`
  * id `string`: Unique identifier of this saved report.
  * kind `string`: Kind of resource this is, in this case adsense#savedReport.
  * name `string`: This saved report's name.

### SavedReports
* SavedReports `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The saved reports returned in this list response.
    * items [SavedReport](#savedreport)
  * kind `string`: Kind of list this is, in this case adsense#savedReports.
  * nextPageToken `string`: Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's "pageToken" value to this.

### UrlChannel
* UrlChannel `object`
  * id `string`: Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
  * kind `string`: Kind of resource this is, in this case adsense#urlChannel.
  * urlPattern `string`: URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home

### UrlChannels
* UrlChannels `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The URL channels returned in this list response.
    * items [UrlChannel](#urlchannel)
  * kind `string`: Kind of list this is, in this case adsense#urlChannels.
  * nextPageToken `string`: Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.


