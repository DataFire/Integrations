# @datafire/google_youtubeanalytics

Client library for YouTube Analytics

## Installation and Usage
```bash
npm install --save @datafire/google_youtubeanalytics
```
```js
let google_youtubeanalytics = require('@datafire/google_youtubeanalytics').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_youtubeanalytics.groups.update({}).then(data => {
  console.log(data);
});
```

## Description

Retrieves your YouTube Analytics data.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_youtubeanalytics.oauthCallback({
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
google_youtubeanalytics.oauthRefresh(null, context)
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

### groupItems.delete
Removes an item from a group.


```js
google_youtubeanalytics.groupItems.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the YouTube group item ID for the group that is being deleted.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### groupItems.list
Returns a collection of group items that match the API request parameters.


```js
google_youtubeanalytics.groupItems.list({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: The id parameter specifies the unique ID of the group for which you want to retrieve group items.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GroupItemListResponse](#groupitemlistresponse)

### groupItems.insert
Creates a group item.


```js
google_youtubeanalytics.groupItems.insert({}, context)
```

#### Input
* input `object`
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * body [GroupItem](#groupitem)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GroupItem](#groupitem)

### groups.delete
Deletes a group.


```js
google_youtubeanalytics.groups.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id parameter specifies the YouTube group ID for the group that is being deleted.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
*Output schema unknown*

### groups.list
Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.


```js
google_youtubeanalytics.groups.list({}, context)
```

#### Input
* input `object`
  * id `string`: The id parameter specifies a comma-separated list of the YouTube group ID(s) for the resource(s) that are being retrieved. In a group resource, the id property specifies the group's YouTube group ID.
  * mine `boolean`: Set this parameter's value to true to instruct the API to only return groups owned by the authenticated user.
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * pageToken `string`: The pageToken parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identifies the next page that can be retrieved.
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [GroupListResponse](#grouplistresponse)

### groups.insert
Creates a group.


```js
google_youtubeanalytics.groups.insert({}, context)
```

#### Input
* input `object`
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * body [Group](#group)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Group](#group)

### groups.update
Modifies a group. For example, you could change a group's title.


```js
google_youtubeanalytics.groups.update({}, context)
```

#### Input
* input `object`
  * onBehalfOfContentOwner `string`: Note: This parameter is intended exclusively for YouTube content partners.
  * body [Group](#group)
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Group](#group)

### reports.query
Retrieve your YouTube Analytics reports.


```js
google_youtubeanalytics.reports.query({
  "ids": "",
  "start-date": "",
  "end-date": "",
  "metrics": ""
}, context)
```

#### Input
* input `object`
  * ids **required** `string`: Identifies the YouTube channel or content owner for which you are retrieving YouTube Analytics data.
  * start-date **required** `string`: The start date for fetching YouTube Analytics data. The value should be in YYYY-MM-DD format.
  * end-date **required** `string`: The end date for fetching YouTube Analytics data. The value should be in YYYY-MM-DD format.
  * metrics **required** `string`: A comma-separated list of YouTube Analytics metrics, such as views or likes,dislikes. See the Available Reports document for a list of the reports that you can retrieve and the metrics available in each report, and see the Metrics document for definitions of those metrics.
  * currency `string`: The currency to which financial metrics should be converted. The default is US Dollar (USD). If the result contains no financial metrics, this flag will be ignored. Responds with an error if the specified currency is not recognized.
  * dimensions `string`: A comma-separated list of YouTube Analytics dimensions, such as views or ageGroup,gender. See the Available Reports document for a list of the reports that you can retrieve and the dimensions used for those reports. Also see the Dimensions document for definitions of those dimensions.
  * filters `string`: A list of filters that should be applied when retrieving YouTube Analytics data. The Available Reports document identifies the dimensions that can be used to filter each report, and the Dimensions document defines those dimensions. If a request uses multiple filters, join them together with a semicolon (;), and the returned result table will satisfy both filters. For example, a filters parameter value of video==dMH0bHeiRNg;country==IT restricts the result set to include data for the given video in Italy.
  * include-historical-channel-data `boolean`: If set to true historical data (i.e. channel data from before the linking of the channel to the content owner) will be retrieved.
  * max-results `integer`: The maximum number of rows to include in the response.
  * sort `string`: A comma-separated list of dimensions or metrics that determine the sort order for YouTube Analytics data. By default the sort order is ascending. The '-' prefix causes descending sort order.
  * start-index `integer`: An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter (one-based, inclusive).
  * alt `string` (values: csv, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [ResultTable](#resulttable)



## Definitions

### Group
* Group `object`
  * contentDetails `object`
    * itemCount `string`
    * itemType `string`
  * etag `string`
  * id `string`
  * kind `string`
  * snippet `object`
    * publishedAt `string`
    * title `string`

### GroupItem
* GroupItem `object`
  * etag `string`
  * groupId `string`
  * id `string`
  * kind `string`
  * resource `object`
    * id `string`
    * kind `string`

### GroupItemListResponse
* GroupItemListResponse `object`: A paginated list of grouList resources returned in response to a youtubeAnalytics.groupApi.list request.
  * etag `string`
  * items `array`
    * items [GroupItem](#groupitem)
  * kind `string`

### GroupListResponse
* GroupListResponse `object`: A paginated list of grouList resources returned in response to a youtubeAnalytics.groupApi.list request.
  * etag `string`
  * items `array`
    * items [Group](#group)
  * kind `string`
  * nextPageToken `string`

### ResultTable
* ResultTable `object`: Contains a single result table. The table is returned as an array of rows that contain the values for the cells of the table. Depending on the metric or dimension, the cell can contain a string (video ID, country code) or a number (number of views or number of likes).
  * columnHeaders `array`: This value specifies information about the data returned in the rows fields. Each item in the columnHeaders list identifies a field returned in the rows value, which contains a list of comma-delimited data. The columnHeaders list will begin with the dimensions specified in the API request, which will be followed by the metrics specified in the API request. The order of both dimensions and metrics will match the ordering in the API request. For example, if the API request contains the parameters dimensions=ageGroup,gender&metrics=viewerPercentage, the API response will return columns in this order: ageGroup,gender,viewerPercentage.
    * items `object`
      * columnType `string`: The type of the column (DIMENSION or METRIC).
      * dataType `string`: The type of the data in the column (STRING, INTEGER, FLOAT, etc.).
      * name `string`: The name of the dimension or metric.
  * kind `string`: This value specifies the type of data included in the API response. For the query method, the kind property value will be youtubeAnalytics#resultTable.
  * rows `array`: The list contains all rows of the result table. Each item in the list is an array that contains comma-delimited data corresponding to a single row of data. The order of the comma-delimited data fields will match the order of the columns listed in the columnHeaders field. If no data is available for the given query, the rows element will be omitted from the response. The response for a query with the day dimension will not contain rows for the most recent days.
    * items `array`



