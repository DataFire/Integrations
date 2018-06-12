# @datafire/google_adsensehost

Client library for AdSense Host

## Installation and Usage
```bash
npm install --save @datafire/google_adsensehost
```
```js
let google_adsensehost = require('@datafire/google_adsensehost').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_adsensehost.adclients.list({}).then(data => {
  console.log(data);
});
```

## Description

Generates performance reports, generates ad codes, and provides publisher management capabilities for AdSense Hosts.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_adsensehost.oauthCallback({
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
google_adsensehost.oauthRefresh(null, context)
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

### accounts.list
List hosted accounts associated with this AdSense account by ad client id.


```js
google_adsensehost.accounts.list({
  "filterAdClientId": []
}, context)
```

#### Input
* input `object`
  * filterAdClientId **required** `array`: Ad clients to list accounts for.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Accounts](#accounts)

### accounts.get
Get information about the selected associated AdSense account.


```js
google_adsensehost.accounts.get({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to get information about.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Account](#account)

### accounts.adclients.list
List all hosted ad clients in the specified hosted account.


```js
google_adsensehost.accounts.adclients.list({
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

### accounts.adclients.get
Get information about one of the ad clients in the specified publisher's AdSense account.


```js
google_adsensehost.accounts.adclients.get({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account which contains the ad client.
  * adClientId **required** `string`: Ad client to get.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdClient](#adclient)

### accounts.adunits.list
List all ad units in the specified publisher's AdSense account.


```js
google_adsensehost.accounts.adunits.list({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account which contains the ad client.
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

### accounts.adunits.patch
Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.


```js
google_adsensehost.accounts.adunits.patch({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account which contains the ad client.
  * adClientId **required** `string`: Ad client which contains the ad unit.
  * adUnitId **required** `string`: Ad unit to get.
  * body [AdUnit](#adunit)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdUnit](#adunit)

### accounts.adunits.insert
Insert the supplied ad unit into the specified publisher AdSense account.


```js
google_adsensehost.accounts.adunits.insert({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account which will contain the ad unit.
  * adClientId **required** `string`: Ad client into which to insert the ad unit.
  * body [AdUnit](#adunit)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdUnit](#adunit)

### accounts.adunits.update
Update the supplied ad unit in the specified publisher AdSense account.


```js
google_adsensehost.accounts.adunits.update({
  "accountId": "",
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account which contains the ad client.
  * adClientId **required** `string`: Ad client which contains the ad unit.
  * body [AdUnit](#adunit)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdUnit](#adunit)

### accounts.adunits.delete
Delete the specified ad unit from the specified publisher AdSense account.


```js
google_adsensehost.accounts.adunits.delete({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account which contains the ad unit.
  * adClientId **required** `string`: Ad client for which to get ad unit.
  * adUnitId **required** `string`: Ad unit to delete.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdUnit](#adunit)

### accounts.adunits.get
Get the specified host ad unit in this AdSense account.


```js
google_adsensehost.accounts.adunits.get({
  "accountId": "",
  "adClientId": "",
  "adUnitId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account which contains the ad unit.
  * adClientId **required** `string`: Ad client for which to get ad unit.
  * adUnitId **required** `string`: Ad unit to get.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdUnit](#adunit)

### accounts.adunits.getAdCode
Get ad code for the specified ad unit, attaching the specified host custom channels.


```js
google_adsensehost.accounts.adunits.getAdCode({
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
  * hostCustomChannelId `array`: Host custom channel to attach to the ad code.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdCode](#adcode)

### accounts.reports.generate
Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.


```js
google_adsensehost.accounts.reports.generate({
  "accountId": "",
  "endDate": "",
  "startDate": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Hosted account upon which to report.
  * dimension `array`: Dimensions to base the report on.
  * endDate **required** `string`: End of the date range to report on in "YYYY-MM-DD" format, inclusive.
  * filter `array`: Filters to be run on the report.
  * locale `string`: Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
  * maxResults `integer`: The maximum number of rows of report data to return.
  * metric `array`: Numeric columns to include in the report.
  * sort `array`: The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
  * startDate **required** `string`: Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
  * startIndex `integer`: Index of the first row of report data to return.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Report](#report)

### adclients.list
List all host ad clients in this AdSense account.


```js
google_adsensehost.adclients.list({}, context)
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

### adclients.get
Get information about one of the ad clients in the Host AdSense account.


```js
google_adsensehost.adclients.get({
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client to get.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AdClient](#adclient)

### customchannels.list
List all host custom channels in this AdSense account.


```js
google_adsensehost.customchannels.list({
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

### customchannels.patch
Update a custom channel in the host AdSense account. This method supports patch semantics.


```js
google_adsensehost.customchannels.patch({
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client in which the custom channel will be updated.
  * body [CustomChannel](#customchannel)
  * customChannelId **required** `string`: Custom channel to get.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CustomChannel](#customchannel)

### customchannels.insert
Add a new custom channel to the host AdSense account.


```js
google_adsensehost.customchannels.insert({
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client to which the new custom channel will be added.
  * body [CustomChannel](#customchannel)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CustomChannel](#customchannel)

### customchannels.update
Update a custom channel in the host AdSense account.


```js
google_adsensehost.customchannels.update({
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client in which the custom channel will be updated.
  * body [CustomChannel](#customchannel)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CustomChannel](#customchannel)

### customchannels.delete
Delete a specific custom channel from the host AdSense account.


```js
google_adsensehost.customchannels.delete({
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client from which to delete the custom channel.
  * customChannelId **required** `string`: Custom channel to delete.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CustomChannel](#customchannel)

### customchannels.get
Get a specific custom channel from the host AdSense account.


```js
google_adsensehost.customchannels.get({
  "adClientId": "",
  "customChannelId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client from which to get the custom channel.
  * customChannelId **required** `string`: Custom channel to get.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [CustomChannel](#customchannel)

### urlchannels.list
List all host URL channels in the host AdSense account.


```js
google_adsensehost.urlchannels.list({
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

### urlchannels.insert
Add a new URL channel to the host AdSense account.


```js
google_adsensehost.urlchannels.insert({
  "adClientId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client to which the new URL channel will be added.
  * body [UrlChannel](#urlchannel)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [UrlChannel](#urlchannel)

### urlchannels.delete
Delete a URL channel from the host AdSense account.


```js
google_adsensehost.urlchannels.delete({
  "adClientId": "",
  "urlChannelId": ""
}, context)
```

#### Input
* input `object`
  * adClientId **required** `string`: Ad client from which to delete the URL channel.
  * urlChannelId **required** `string`: URL channel to delete.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [UrlChannel](#urlchannel)

### associationsessions.start
Create an association session for initiating an association with an AdSense user.


```js
google_adsensehost.associationsessions.start({
  "productCode": [],
  "websiteUrl": ""
}, context)
```

#### Input
* input `object`
  * productCode **required** `array`: Products to associate with the user.
  * userLocale `string`: The preferred locale of the user.
  * websiteLocale `string`: The locale of the user's hosted website.
  * websiteUrl **required** `string`: The URL of the user's hosted website.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AssociationSession](#associationsession)

### associationsessions.verify
Verify an association session after the association callback returns from AdSense signup.


```js
google_adsensehost.associationsessions.verify({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`: The token returned to the association callback URL.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [AssociationSession](#associationsession)

### reports.generate
Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.


```js
google_adsensehost.reports.generate({
  "endDate": "",
  "startDate": ""
}, context)
```

#### Input
* input `object`
  * dimension `array`: Dimensions to base the report on.
  * endDate **required** `string`: End of the date range to report on in "YYYY-MM-DD" format, inclusive.
  * filter `array`: Filters to be run on the report.
  * locale `string`: Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
  * maxResults `integer`: The maximum number of rows of report data to return.
  * metric `array`: Numeric columns to include in the report.
  * sort `array`: The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
  * startDate **required** `string`: Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
  * startIndex `integer`: Index of the first row of report data to return.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Report](#report)



## Definitions

### Account
* Account `object`
  * id `string`: Unique identifier of this account.
  * kind `string`: Kind of resource this is, in this case adsensehost#account.
  * name `string`: Name of this account.
  * status `string`: Approval status of this account. One of: PENDING, APPROVED, DISABLED.

### Accounts
* Accounts `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The accounts returned in this list response.
    * items [Account](#account)
  * kind `string`: Kind of list this is, in this case adsensehost#accounts.

### AdClient
* AdClient `object`
  * arcOptIn `boolean`: Whether this ad client is opted in to ARC.
  * id `string`: Unique identifier of this ad client.
  * kind `string`: Kind of resource this is, in this case adsensehost#adClient.
  * productCode `string`: This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
  * supportsReporting `boolean`: Whether this ad client supports being reported on.

### AdClients
* AdClients `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The ad clients returned in this list response.
    * items [AdClient](#adclient)
  * kind `string`: Kind of list this is, in this case adsensehost#adClients.
  * nextPageToken `string`: Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.

### AdCode
* AdCode `object`
  * adCode `string`: The ad code snippet.
  * kind `string`: Kind this is, in this case adsensehost#adCode.

### AdStyle
* AdStyle `object`
  * colors `object`: The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
    * background `string`: The color of the ad background.
    * border `string`: The color of the ad border.
    * text `string`: The color of the ad text.
    * title `string`: The color of the ad title.
    * url `string`: The color of the ad url.
  * corners `string`: The style of the corners in the ad (deprecated: never populated, ignored).
  * font `object`: The font which is included in the style.
    * family `string`: The family of the font. Possible values are: ACCOUNT_DEFAULT_FAMILY, ADSENSE_DEFAULT_FAMILY, ARIAL, TIMES and VERDANA.
    * size `string`: The size of the font. Possible values are: ACCOUNT_DEFAULT_SIZE, ADSENSE_DEFAULT_SIZE, SMALL, MEDIUM and LARGE.
  * kind `string`: Kind this is, in this case adsensehost#adStyle.

### AdUnit
* AdUnit `object`
  * code `string`: Identity code of this ad unit, not necessarily unique across ad clients.
  * contentAdsSettings `object`: Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
    * backupOption `object`: The backup option to be used in instances where no ad is available.
      * color `string`: Color to use when type is set to COLOR. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
      * type `string`: Type of the backup option. Possible values are BLANK, COLOR and URL.
      * url `string`: URL to use when type is set to URL.
    * size `string`: Size of this ad unit. Size values are in the form SIZE_{width}_{height}.
    * type `string`: Type of this ad unit. Possible values are TEXT, TEXT_IMAGE, IMAGE and LINK.
  * customStyle [AdStyle](#adstyle)
  * id `string`: Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
  * kind `string`: Kind of resource this is, in this case adsensehost#adUnit.
  * mobileContentAdsSettings `object`: Settings specific to WAP mobile content ads (AFMC - deprecated).
    * markupLanguage `string`: The markup language to use for this ad unit.
    * scriptingLanguage `string`: The scripting language to use for this ad unit.
    * size `string`: Size of this ad unit.
    * type `string`: Type of this ad unit.
  * name `string`: Name of this ad unit.
  * status `string`: Status of this ad unit. Possible values are:

### AdUnits
* AdUnits `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The ad units returned in this list response.
    * items [AdUnit](#adunit)
  * kind `string`: Kind of list this is, in this case adsensehost#adUnits.
  * nextPageToken `string`: Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.

### AssociationSession
* AssociationSession `object`
  * accountId `string`: Hosted account id of the associated publisher after association. Present if status is ACCEPTED.
  * id `string`: Unique identifier of this association session.
  * kind `string`: Kind of resource this is, in this case adsensehost#associationSession.
  * productCodes `array`: The products to associate with the user. Options: AFC, AFG, AFV, AFS (deprecated), AFMC (deprecated)
    * items `string`
  * redirectUrl `string`: Redirect URL of this association session. Used to redirect users into the AdSense association flow.
  * status `string`: Status of the completed association, available once the association callback token has been verified. One of ACCEPTED, REJECTED, or ERROR.
  * userLocale `string`: The preferred locale of the user themselves when going through the AdSense association flow.
  * websiteLocale `string`: The locale of the user's hosted website.
  * websiteUrl `string`: The URL of the user's hosted website.

### CustomChannel
* CustomChannel `object`
  * code `string`: Code of this custom channel, not necessarily unique across ad clients.
  * id `string`: Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
  * kind `string`: Kind of resource this is, in this case adsensehost#customChannel.
  * name `string`: Name of this custom channel.

### CustomChannels
* CustomChannels `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The custom channels returned in this list response.
    * items [CustomChannel](#customchannel)
  * kind `string`: Kind of list this is, in this case adsensehost#customChannels.
  * nextPageToken `string`: Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.

### Report
* Report `object`
  * averages `array`: The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
    * items `string`
  * headers `array`: The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.
    * items `object`
      * currency `string`: The currency of this column. Only present if the header type is METRIC_CURRENCY.
      * name `string`: The name of the header.
      * type `string`: The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY.
  * kind `string`: Kind this is, in this case adsensehost#report.
  * rows `array`: The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
    * items `array`
      * items `string`
  * totalMatchedRows `string`: The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.
  * totals `array`: The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
    * items `string`
  * warnings `array`: Any warnings associated with generation of the report.
    * items `string`

### UrlChannel
* UrlChannel `object`
  * id `string`: Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
  * kind `string`: Kind of resource this is, in this case adsensehost#urlChannel.
  * urlPattern `string`: URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home

### UrlChannels
* UrlChannels `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The URL channels returned in this list response.
    * items [UrlChannel](#urlchannel)
  * kind `string`: Kind of list this is, in this case adsensehost#urlChannels.
  * nextPageToken `string`: Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.


