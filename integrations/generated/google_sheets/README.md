# @datafire/google_sheets

Client library for Google Sheets

## Installation and Usage
```bash
npm install --save datafire @datafire/google_sheets
```

```js
let datafire = require('datafire');
let google_sheets = require('@datafire/google_sheets').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_sheets.spreadsheets.create({}).then(data => {
  console.log(data);
})
```

## Description
Reads and writes Google Sheets.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_sheets.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_sheets.oauthRefresh(null, context)
```


### spreadsheets.create
Creates a spreadsheet, returning the newly created spreadsheet.


```js
google_sheets.spreadsheets.create({}, context)
```

#### Parameters
* body (object) - Resource that represents a spreadsheet.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### spreadsheets.get
Returns the spreadsheet at the given ID.
The caller must specify the spreadsheet ID.

By default, data within grids will not be returned.
You can include grid data one of two ways:

* Specify a field mask listing your desired fields using the `fields` URL
parameter in HTTP

* Set the includeGridData
URL parameter to true.  If a field mask is set, the `includeGridData`
parameter is ignored

For large spreadsheets, it is recommended to retrieve only the specific
fields of the spreadsheet that you want.

To retrieve only subsets of the spreadsheet, use the
ranges URL parameter.
Multiple ranges can be specified.  Limiting the range will
return only the portions of the spreadsheet that intersect the requested
ranges. Ranges are specified using A1 notation.


```js
google_sheets.spreadsheets.get({
  "spreadsheetId": ""
}, context)
```

#### Parameters
* spreadsheetId (string) **required** - The spreadsheet to request.
* ranges (array) - The ranges to retrieve from the spreadsheet.
* includeGridData (boolean) - True if grid data should be returned.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### spreadsheets.sheets.copyTo
Copies a single sheet from a spreadsheet to another spreadsheet.
Returns the properties of the newly created sheet.


```js
google_sheets.spreadsheets.sheets.copyTo({
  "spreadsheetId": "",
  "sheetId": 0
}, context)
```

#### Parameters
* spreadsheetId (string) **required** - The ID of the spreadsheet containing the sheet to copy.
* sheetId (integer) **required** - The ID of the sheet to copy.
* body (object) - The request to copy a sheet across spreadsheets.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### spreadsheets.values.get
Returns a range of values from a spreadsheet.
The caller must specify the spreadsheet ID and a range.


```js
google_sheets.spreadsheets.values.get({
  "spreadsheetId": "",
  "range": ""
}, context)
```

#### Parameters
* spreadsheetId (string) **required** - The ID of the spreadsheet to retrieve data from.
* range (string) **required** - The A1 notation of the values to retrieve.
* majorDimension (string) - The major dimension that results should use.
* valueRenderOption (string) - How values should be represented in the output.
* dateTimeRenderOption (string) - How dates, times, and durations should be represented in the output.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### spreadsheets.values.update
Sets values in a range of a spreadsheet.
The caller must specify the spreadsheet ID, range, and
a valueInputOption.


```js
google_sheets.spreadsheets.values.update({
  "spreadsheetId": "",
  "range": ""
}, context)
```

#### Parameters
* spreadsheetId (string) **required** - The ID of the spreadsheet to update.
* range (string) **required** - The A1 notation of the values to update.
* responseValueRenderOption (string) - Determines how values in the response should be rendered.
* valueInputOption (string) - How the input data should be interpreted.
* responseDateTimeRenderOption (string) - Determines how dates, times, and durations in the response should be
* includeValuesInResponse (boolean) - Determines if the update response should include the values
* body (object) - Data within a range of the spreadsheet.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### spreadsheets.values.append
Appends values to a spreadsheet. The input range is used to search for
existing data and find a "table" within that range. Values will be
appended to the next row of the table, starting with the first column of
the table. See the
[guide](/sheets/api/guides/values#appending_values)
and
[sample code](/sheets/api/samples/writing#append_values)
for specific details of how tables are detected and data is appended.

The caller must specify the spreadsheet ID, range, and
a valueInputOption.  The `valueInputOption` only
controls how the input data will be added to the sheet (column-wise or
row-wise), it does not influence what cell the data starts being written
to.


```js
google_sheets.spreadsheets.values.append({
  "spreadsheetId": "",
  "range": ""
}, context)
```

#### Parameters
* spreadsheetId (string) **required** - The ID of the spreadsheet to update.
* range (string) **required** - The A1 notation of a range to search for a logical table of data.
* includeValuesInResponse (boolean) - Determines if the update response should include the values
* responseValueRenderOption (string) - Determines how values in the response should be rendered.
* insertDataOption (string) - How the input data should be inserted.
* valueInputOption (string) - How the input data should be interpreted.
* responseDateTimeRenderOption (string) - Determines how dates, times, and durations in the response should be
* body (object) - Data within a range of the spreadsheet.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### spreadsheets.values.clear
Clears values from a spreadsheet.
The caller must specify the spreadsheet ID and range.
Only values are cleared -- all other properties of the cell (such as
formatting, data validation, etc..) are kept.


```js
google_sheets.spreadsheets.values.clear({
  "spreadsheetId": "",
  "range": ""
}, context)
```

#### Parameters
* spreadsheetId (string) **required** - The ID of the spreadsheet to update.
* range (string) **required** - The A1 notation of the values to clear.
* body (object) - The request for clearing a range of values in a spreadsheet.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### spreadsheets.values.batchClear
Clears one or more ranges of values from a spreadsheet.
The caller must specify the spreadsheet ID and one or more ranges.
Only values are cleared -- all other properties of the cell (such as
formatting, data validation, etc..) are kept.


```js
google_sheets.spreadsheets.values.batchClear({
  "spreadsheetId": ""
}, context)
```

#### Parameters
* spreadsheetId (string) **required** - The ID of the spreadsheet to update.
* body (object) - The request for clearing more than one range of values in a spreadsheet.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### spreadsheets.values.batchGet
Returns one or more ranges of values from a spreadsheet.
The caller must specify the spreadsheet ID and one or more ranges.


```js
google_sheets.spreadsheets.values.batchGet({
  "spreadsheetId": ""
}, context)
```

#### Parameters
* spreadsheetId (string) **required** - The ID of the spreadsheet to retrieve data from.
* valueRenderOption (string) - How values should be represented in the output.
* dateTimeRenderOption (string) - How dates, times, and durations should be represented in the output.
* ranges (array) - The A1 notation of the values to retrieve.
* majorDimension (string) - The major dimension that results should use.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### spreadsheets.values.batchUpdate
Sets values in one or more ranges of a spreadsheet.
The caller must specify the spreadsheet ID,
a valueInputOption, and one or more
ValueRanges.


```js
google_sheets.spreadsheets.values.batchUpdate({
  "spreadsheetId": ""
}, context)
```

#### Parameters
* spreadsheetId (string) **required** - The ID of the spreadsheet to update.
* body (object) - The request for updating more than one range of values in a spreadsheet.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### spreadsheets.batchUpdate
Applies one or more updates to the spreadsheet.

Each request is validated before
being applied. If any request is not valid then the entire request will
fail and nothing will be applied.

Some requests have replies to
give you some information about how
they are applied. The replies will mirror the requests.  For example,
if you applied 4 updates and the 3rd one had a reply, then the
response will have 2 empty replies, the actual reply, and another empty
reply, in that order.

Due to the collaborative nature of spreadsheets, it is not guaranteed that
the spreadsheet will reflect exactly your changes after this completes,
however it is guaranteed that the updates in the request will be
applied together atomically. Your changes may be altered with respect to
collaborator changes. If there are no collaborators, the spreadsheet
should reflect your changes.


```js
google_sheets.spreadsheets.batchUpdate({
  "spreadsheetId": ""
}, context)
```

#### Parameters
* spreadsheetId (string) **required** - The spreadsheet to apply the updates to.
* body (object) - The request for updating any aspect of a spreadsheet.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* fields (string) - Selector specifying which fields to include in a partial response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* alt (string) - Data format for response.
* access_token (string) - OAuth access token.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* oauth_token (string) - OAuth 2.0 token for the current user.
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

