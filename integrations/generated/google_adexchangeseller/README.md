# @datafire/google_adexchangeseller

Client library for Ad Exchange Seller

## Installation and Usage
```bash
npm install --save @datafire/google_adexchangeseller
```
```js
let google_adexchangeseller = require('@datafire/google_adexchangeseller').create({
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

Accesses the inventory of Ad Exchange seller users and generates reports.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_adexchangeseller.oauthCallback({
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
google_adexchangeseller.oauthRefresh(null, context)
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
List all accounts available to this Ad Exchange account.


```js
google_adexchangeseller.accounts.list({}, context)
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

### accounts.get
Get information about the selected Ad Exchange account.


```js
google_adexchangeseller.accounts.get({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to get information about. Tip: 'myaccount' is a valid ID.
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
List all ad clients in this Ad Exchange account.


```js
google_adexchangeseller.accounts.adclients.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account to which the ad client belongs.
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

### accounts.customchannels.list
List all custom channels in the specified ad client for this Ad Exchange account.


```js
google_adexchangeseller.accounts.customchannels.list({
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

### accounts.customchannels.get
Get the specified custom channel from the specified ad client.


```js
google_adexchangeseller.accounts.customchannels.get({
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

### accounts.urlchannels.list
List all URL channels in the specified ad client for this Ad Exchange account.


```js
google_adexchangeseller.accounts.urlchannels.list({
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

### accounts.alerts.list
List the alerts for this Ad Exchange account.


```js
google_adexchangeseller.accounts.alerts.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account owning the alerts.
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

### accounts.metadata.dimensions.list
List the metadata for the dimensions available to this AdExchange account.


```js
google_adexchangeseller.accounts.metadata.dimensions.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account with visibility to the dimensions.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Metadata](#metadata)

### accounts.metadata.metrics.list
List the metadata for the metrics available to this AdExchange account.


```js
google_adexchangeseller.accounts.metadata.metrics.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account with visibility to the metrics.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [Metadata](#metadata)

### accounts.preferreddeals.list
List the preferred deals for this Ad Exchange account.


```js
google_adexchangeseller.accounts.preferreddeals.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account owning the deals.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PreferredDeals](#preferreddeals)

### accounts.preferreddeals.get
Get information about the selected Ad Exchange Preferred Deal.


```js
google_adexchangeseller.accounts.preferreddeals.get({
  "accountId": "",
  "dealId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account owning the deal.
  * dealId **required** `string`: Preferred deal to get information about.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [PreferredDeal](#preferreddeal)

### accounts.reports.generate
Generate an Ad Exchange report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.


```js
google_adexchangeseller.accounts.reports.generate({
  "accountId": "",
  "endDate": "",
  "startDate": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account which owns the generated report.
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

### accounts.reports.saved.list
List all saved reports in this Ad Exchange account.


```js
google_adexchangeseller.accounts.reports.saved.list({
  "accountId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account owning the saved reports.
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

### accounts.reports.saved.generate
Generate an Ad Exchange report based on the saved report ID sent in the query parameters.


```js
google_adexchangeseller.accounts.reports.saved.generate({
  "accountId": "",
  "savedReportId": ""
}, context)
```

#### Input
* input `object`
  * accountId **required** `string`: Account owning the saved report.
  * locale `string`: Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
  * maxResults `integer`: The maximum number of rows of report data to return.
  * savedReportId **required** `string`: The saved report to retrieve.
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
  * kind `string`: Kind of resource this is, in this case adexchangeseller#account.
  * name `string`: Name of this account.

### Accounts
* Accounts `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The accounts returned in this list response.
    * items [Account](#account)
  * kind `string`: Kind of list this is, in this case adexchangeseller#accounts.
  * nextPageToken `string`: Continuation token used to page through accounts. To retrieve the next page of results, set the next request's "pageToken" value to this.

### AdClient
* AdClient `object`
  * arcOptIn `boolean`: Whether this ad client is opted in to ARC.
  * id `string`: Unique identifier of this ad client.
  * kind `string`: Kind of resource this is, in this case adexchangeseller#adClient.
  * productCode `string`: This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
  * supportsReporting `boolean`: Whether this ad client supports being reported on.

### AdClients
* AdClients `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The ad clients returned in this list response.
    * items [AdClient](#adclient)
  * kind `string`: Kind of list this is, in this case adexchangeseller#adClients.
  * nextPageToken `string`: Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.

### Alert
* Alert `object`
  * id `string`: Unique identifier of this alert. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
  * kind `string`: Kind of resource this is, in this case adexchangeseller#alert.
  * message `string`: The localized alert message.
  * severity `string`: Severity of this alert. Possible values: INFO, WARNING, SEVERE.
  * type `string`: Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3, ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY, GRAYLISTED_PUBLISHER, API_HOLD.

### Alerts
* Alerts `object`
  * items `array`: The alerts returned in this list response.
    * items [Alert](#alert)
  * kind `string`: Kind of list this is, in this case adexchangeseller#alerts.

### CustomChannel
* CustomChannel `object`
  * code `string`: Code of this custom channel, not necessarily unique across ad clients.
  * id `string`: Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
  * kind `string`: Kind of resource this is, in this case adexchangeseller#customChannel.
  * name `string`: Name of this custom channel.
  * targetingInfo `object`: The targeting information of this custom channel, if activated.
    * adsAppearOn `string`: The name used to describe this channel externally.
    * description `string`: The external description of the channel.
    * location `string`: The locations in which ads appear. (Only valid for content and mobile content ads). Acceptable values for content ads are: TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT, MULTIPLE_LOCATIONS. Acceptable values for mobile content ads are: TOP, MIDDLE, BOTTOM, MULTIPLE_LOCATIONS.
    * siteLanguage `string`: The language of the sites ads will be displayed on.

### CustomChannels
* CustomChannels `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The custom channels returned in this list response.
    * items [CustomChannel](#customchannel)
  * kind `string`: Kind of list this is, in this case adexchangeseller#customChannels.
  * nextPageToken `string`: Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.

### Metadata
* Metadata `object`
  * items `array`
    * items [ReportingMetadataEntry](#reportingmetadataentry)
  * kind `string`: Kind of list this is, in this case adexchangeseller#metadata.

### PreferredDeal
* PreferredDeal `object`
  * advertiserName `string`: The name of the advertiser this deal is for.
  * buyerNetworkName `string`: The name of the buyer network this deal is for.
  * currencyCode `string`: The currency code that applies to the fixed_cpm value. If not set then assumed to be USD.
  * endTime `string`: Time when this deal stops being active in seconds since the epoch (GMT). If not set then this deal is valid until manually disabled by the publisher.
  * fixedCpm `string`: The fixed price for this preferred deal. In cpm micros of currency according to currencyCode. If set, then this preferred deal is eligible for the fixed price tier of buying (highest priority, pay exactly the configured fixed price).
  * id `string`: Unique identifier of this preferred deal.
  * kind `string`: Kind of resource this is, in this case adexchangeseller#preferredDeal.
  * startTime `string`: Time when this deal becomes active in seconds since the epoch (GMT). If not set then this deal is active immediately upon creation.

### PreferredDeals
* PreferredDeals `object`
  * items `array`: The preferred deals returned in this list response.
    * items [PreferredDeal](#preferreddeal)
  * kind `string`: Kind of list this is, in this case adexchangeseller#preferredDeals.

### Report
* Report `object`
  * averages `array`: The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
    * items `string`
  * headers `array`: The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.
    * items `object`
      * currency `string`: The currency of this column. Only present if the header type is METRIC_CURRENCY.
      * name `string`: The name of the header.
      * type `string`: The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY.
  * kind `string`: Kind this is, in this case adexchangeseller#report.
  * rows `array`: The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.
    * items `array`
      * items `string`
  * totalMatchedRows `string`: The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.
  * totals `array`: The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
    * items `string`
  * warnings `array`: Any warnings associated with generation of the report.
    * items `string`

### ReportingMetadataEntry
* ReportingMetadataEntry `object`
  * compatibleDimensions `array`: For metrics this is a list of dimension IDs which the metric is compatible with, for dimensions it is a list of compatibility groups the dimension belongs to.
    * items `string`
  * compatibleMetrics `array`: The names of the metrics the dimension or metric this reporting metadata entry describes is compatible with.
    * items `string`
  * id `string`: Unique identifier of this reporting metadata entry, corresponding to the name of the appropriate dimension or metric.
  * kind `string`: Kind of resource this is, in this case adexchangeseller#reportingMetadataEntry.
  * requiredDimensions `array`: The names of the dimensions which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.
    * items `string`
  * requiredMetrics `array`: The names of the metrics which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.
    * items `string`
  * supportedProducts `array`: The codes of the projects supported by the dimension or metric this reporting metadata entry describes.
    * items `string`

### SavedReport
* SavedReport `object`
  * id `string`: Unique identifier of this saved report.
  * kind `string`: Kind of resource this is, in this case adexchangeseller#savedReport.
  * name `string`: This saved report's name.

### SavedReports
* SavedReports `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The saved reports returned in this list response.
    * items [SavedReport](#savedreport)
  * kind `string`: Kind of list this is, in this case adexchangeseller#savedReports.
  * nextPageToken `string`: Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's "pageToken" value to this.

### UrlChannel
* UrlChannel `object`
  * id `string`: Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
  * kind `string`: Kind of resource this is, in this case adexchangeseller#urlChannel.
  * urlPattern `string`: URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home

### UrlChannels
* UrlChannels `object`
  * etag `string`: ETag of this response for caching purposes.
  * items `array`: The URL channels returned in this list response.
    * items [UrlChannel](#urlchannel)
  * kind `string`: Kind of list this is, in this case adexchangeseller#urlChannels.
  * nextPageToken `string`: Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.


