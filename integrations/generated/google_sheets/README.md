# @datafire/google_sheets

Client library for Google Sheets

## Installation and Usage
```bash
npm install --save @datafire/google_sheets
```
```js
let google_sheets = require('@datafire/google_sheets').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
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
google_sheets.oauthRefresh(null, context)
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

### spreadsheets.create
Creates a spreadsheet, returning the newly created spreadsheet.


```js
google_sheets.spreadsheets.create({}, context)
```

#### Input
* input `object`
  * body [Spreadsheet](#spreadsheet)
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Spreadsheet](#spreadsheet)

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

#### Input
* input `object`
  * spreadsheetId **required** `string`: The spreadsheet to request.
  * ranges `array`: The ranges to retrieve from the spreadsheet.
  * includeGridData `boolean`: True if grid data should be returned.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Spreadsheet](#spreadsheet)

### spreadsheets.developerMetadata.get
Returns the developer metadata with the specified ID.
The caller must specify the spreadsheet ID and the developer metadata's
unique metadataId.


```js
google_sheets.spreadsheets.developerMetadata.get({
  "metadataId": 0,
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * metadataId **required** `integer`: The ID of the developer metadata to retrieve.
  * spreadsheetId **required** `string`: The ID of the spreadsheet to retrieve metadata from.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [DeveloperMetadata](#developermetadata)

### spreadsheets.developerMetadata.search
Returns all developer metadata matching the specified DataFilter.
If the provided DataFilter represents a DeveloperMetadataLookup object,
this will return all DeveloperMetadata entries selected by it. If the
DataFilter represents a location in a spreadsheet, this will return all
developer metadata associated with locations intersecting that region.


```js
google_sheets.spreadsheets.developerMetadata.search({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * body [SearchDeveloperMetadataRequest](#searchdevelopermetadatarequest)
  * spreadsheetId **required** `string`: The ID of the spreadsheet to retrieve metadata from.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [SearchDeveloperMetadataResponse](#searchdevelopermetadataresponse)

### spreadsheets.sheets.copyTo
Copies a single sheet from a spreadsheet to another spreadsheet.
Returns the properties of the newly created sheet.


```js
google_sheets.spreadsheets.sheets.copyTo({
  "spreadsheetId": "",
  "sheetId": 0
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet containing the sheet to copy.
  * sheetId **required** `integer`: The ID of the sheet to copy.
  * body [CopySheetToAnotherSpreadsheetRequest](#copysheettoanotherspreadsheetrequest)
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [SheetProperties](#sheetproperties)

### spreadsheets.values.get
Returns a range of values from a spreadsheet.
The caller must specify the spreadsheet ID and a range.


```js
google_sheets.spreadsheets.values.get({
  "spreadsheetId": "",
  "range": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to retrieve data from.
  * range **required** `string`: The A1 notation of the values to retrieve.
  * majorDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The major dimension that results should use.
  * valueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): How values should be represented in the output.
  * dateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): How dates, times, and durations should be represented in the output.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ValueRange](#valuerange)

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

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * range **required** `string`: The A1 notation of the values to update.
  * responseValueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): Determines how values in the response should be rendered.
  * valueInputOption `string` (values: INPUT_VALUE_OPTION_UNSPECIFIED, RAW, USER_ENTERED): How the input data should be interpreted.
  * responseDateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): Determines how dates, times, and durations in the response should be
  * includeValuesInResponse `boolean`: Determines if the update response should include the values
  * body [ValueRange](#valuerange)
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [UpdateValuesResponse](#updatevaluesresponse)

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

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * range **required** `string`: The A1 notation of a range to search for a logical table of data.
  * includeValuesInResponse `boolean`: Determines if the update response should include the values
  * responseValueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): Determines how values in the response should be rendered.
  * insertDataOption `string` (values: OVERWRITE, INSERT_ROWS): How the input data should be inserted.
  * valueInputOption `string` (values: INPUT_VALUE_OPTION_UNSPECIFIED, RAW, USER_ENTERED): How the input data should be interpreted.
  * responseDateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): Determines how dates, times, and durations in the response should be
  * body [ValueRange](#valuerange)
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [AppendValuesResponse](#appendvaluesresponse)

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

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * range **required** `string`: The A1 notation of the values to clear.
  * body [ClearValuesRequest](#clearvaluesrequest)
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ClearValuesResponse](#clearvaluesresponse)

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

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * body [BatchClearValuesRequest](#batchclearvaluesrequest)
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BatchClearValuesResponse](#batchclearvaluesresponse)

### spreadsheets.values.batchClearByDataFilter
Clears one or more ranges of values from a spreadsheet.
The caller must specify the spreadsheet ID and one or more
DataFilters. Ranges matching any of the specified data
filters will be cleared.  Only values are cleared -- all other properties
of the cell (such as formatting, data validation, etc..) are kept.


```js
google_sheets.spreadsheets.values.batchClearByDataFilter({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * body [BatchClearValuesByDataFilterRequest](#batchclearvaluesbydatafilterrequest)
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BatchClearValuesByDataFilterResponse](#batchclearvaluesbydatafilterresponse)

### spreadsheets.values.batchGet
Returns one or more ranges of values from a spreadsheet.
The caller must specify the spreadsheet ID and one or more ranges.


```js
google_sheets.spreadsheets.values.batchGet({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to retrieve data from.
  * valueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): How values should be represented in the output.
  * dateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): How dates, times, and durations should be represented in the output.
  * ranges `array`: The A1 notation of the values to retrieve.
  * majorDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The major dimension that results should use.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BatchGetValuesResponse](#batchgetvaluesresponse)

### spreadsheets.values.batchGetByDataFilter
Returns one or more ranges of values that match the specified data filters.
The caller must specify the spreadsheet ID and one or more
DataFilters.  Ranges that match any of the data filters in
the request will be returned.


```js
google_sheets.spreadsheets.values.batchGetByDataFilter({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * body [BatchGetValuesByDataFilterRequest](#batchgetvaluesbydatafilterrequest)
  * spreadsheetId **required** `string`: The ID of the spreadsheet to retrieve data from.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BatchGetValuesByDataFilterResponse](#batchgetvaluesbydatafilterresponse)

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

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * body [BatchUpdateValuesRequest](#batchupdatevaluesrequest)
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BatchUpdateValuesResponse](#batchupdatevaluesresponse)

### spreadsheets.values.batchUpdateByDataFilter
Sets values in one or more ranges of a spreadsheet.
The caller must specify the spreadsheet ID,
a valueInputOption, and one or more
DataFilterValueRanges.


```js
google_sheets.spreadsheets.values.batchUpdateByDataFilter({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * body [BatchUpdateValuesByDataFilterRequest](#batchupdatevaluesbydatafilterrequest)
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BatchUpdateValuesByDataFilterResponse](#batchupdatevaluesbydatafilterresponse)

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

#### Input
* input `object`
  * spreadsheetId **required** `string`: The spreadsheet to apply the updates to.
  * body [BatchUpdateSpreadsheetRequest](#batchupdatespreadsheetrequest)
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * fields `string`: Selector specifying which fields to include in a partial response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * access_token `string`: OAuth access token.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BatchUpdateSpreadsheetResponse](#batchupdatespreadsheetresponse)

### spreadsheets.getByDataFilter
Returns the spreadsheet at the given ID.
The caller must specify the spreadsheet ID.

This method differs from GetSpreadsheet in that it allows selecting
which subsets of spreadsheet data to return by specifying a
dataFilters parameter.
Multiple DataFilters can be specified.  Specifying one or
more data filters will return the portions of the spreadsheet that
intersect ranges matched by any of the filters.

By default, data within grids will not be returned.
You can include grid data one of two ways:

* Specify a field mask listing your desired fields using the `fields` URL
parameter in HTTP

* Set the includeGridData
parameter to true.  If a field mask is set, the `includeGridData`
parameter is ignored

For large spreadsheets, it is recommended to retrieve only the specific
fields of the spreadsheet that you want.


```js
google_sheets.spreadsheets.getByDataFilter({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * body [GetSpreadsheetByDataFilterRequest](#getspreadsheetbydatafilterrequest)
  * spreadsheetId **required** `string`: The spreadsheet to request.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Spreadsheet](#spreadsheet)



## Definitions

### AddBandingRequest
* AddBandingRequest `object`: Adds a new banded range to the spreadsheet.
  * bandedRange [BandedRange](#bandedrange)

### AddBandingResponse
* AddBandingResponse `object`: The result of adding a banded range.
  * bandedRange [BandedRange](#bandedrange)

### AddChartRequest
* AddChartRequest `object`: Adds a chart to a sheet in the spreadsheet.
  * chart [EmbeddedChart](#embeddedchart)

### AddChartResponse
* AddChartResponse `object`: The result of adding a chart to a spreadsheet.
  * chart [EmbeddedChart](#embeddedchart)

### AddConditionalFormatRuleRequest
* AddConditionalFormatRuleRequest `object`: Adds a new conditional format rule at the given index.
  * index `integer`: The zero-based index where the rule should be inserted.
  * rule [ConditionalFormatRule](#conditionalformatrule)

### AddFilterViewRequest
* AddFilterViewRequest `object`: Adds a filter view.
  * filter [FilterView](#filterview)

### AddFilterViewResponse
* AddFilterViewResponse `object`: The result of adding a filter view.
  * filter [FilterView](#filterview)

### AddNamedRangeRequest
* AddNamedRangeRequest `object`: Adds a named range to the spreadsheet.
  * namedRange [NamedRange](#namedrange)

### AddNamedRangeResponse
* AddNamedRangeResponse `object`: The result of adding a named range.
  * namedRange [NamedRange](#namedrange)

### AddProtectedRangeRequest
* AddProtectedRangeRequest `object`: Adds a new protected range.
  * protectedRange [ProtectedRange](#protectedrange)

### AddProtectedRangeResponse
* AddProtectedRangeResponse `object`: The result of adding a new protected range.
  * protectedRange [ProtectedRange](#protectedrange)

### AddSheetRequest
* AddSheetRequest `object`: Adds a new sheet.
  * properties [SheetProperties](#sheetproperties)

### AddSheetResponse
* AddSheetResponse `object`: The result of adding a sheet.
  * properties [SheetProperties](#sheetproperties)

### AppendCellsRequest
* AppendCellsRequest `object`: Adds new cells after the last row with data in a sheet,
  * fields `string`: The fields of CellData that should be updated.
  * rows `array`: The data to append.
    * items [RowData](#rowdata)
  * sheetId `integer`: The sheet ID to append the data to.

### AppendDimensionRequest
* AppendDimensionRequest `object`: Appends rows or columns to the end of a sheet.
  * dimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): Whether rows or columns should be appended.
  * length `integer`: The number of rows or columns to append.
  * sheetId `integer`: The sheet to append rows or columns to.

### AppendValuesResponse
* AppendValuesResponse `object`: The response when updating a range of values in a spreadsheet.
  * spreadsheetId `string`: The spreadsheet the updates were applied to.
  * tableRange `string`: The range (in A1 notation) of the table that values are being appended to
  * updates [UpdateValuesResponse](#updatevaluesresponse)

### AutoFillRequest
* AutoFillRequest `object`: Fills in more data based on existing data.
  * range [GridRange](#gridrange)
  * sourceAndDestination [SourceAndDestination](#sourceanddestination)
  * useAlternateSeries `boolean`: True if we should generate data with the "alternate" series.

### AutoResizeDimensionsRequest
* AutoResizeDimensionsRequest `object`: Automatically resizes one or more dimensions based on the contents
  * dimensions [DimensionRange](#dimensionrange)

### BandedRange
* BandedRange `object`: A banded (alternating colors) range in a sheet.
  * bandedRangeId `integer`: The id of the banded range.
  * columnProperties [BandingProperties](#bandingproperties)
  * range [GridRange](#gridrange)
  * rowProperties [BandingProperties](#bandingproperties)

### BandingProperties
* BandingProperties `object`: Properties referring a single dimension (either row or column). If both
  * firstBandColor [Color](#color)
  * footerColor [Color](#color)
  * headerColor [Color](#color)
  * secondBandColor [Color](#color)

### BasicChartAxis
* BasicChartAxis `object`: An axis of the chart.
  * format [TextFormat](#textformat)
  * position `string` (values: BASIC_CHART_AXIS_POSITION_UNSPECIFIED, BOTTOM_AXIS, LEFT_AXIS, RIGHT_AXIS): The position of this axis.
  * title `string`: The title of this axis. If set, this overrides any title inferred
  * titleTextPosition [TextPosition](#textposition)

### BasicChartDomain
* BasicChartDomain `object`: The domain of a chart.
  * domain [ChartData](#chartdata)
  * reversed `boolean`: True to reverse the order of the domain values (horizontal axis).

### BasicChartSeries
* BasicChartSeries `object`: A single series of data in a chart.
  * series [ChartData](#chartdata)
  * targetAxis `string` (values: BASIC_CHART_AXIS_POSITION_UNSPECIFIED, BOTTOM_AXIS, LEFT_AXIS, RIGHT_AXIS): The minor axis that will specify the range of values for this series.
  * type `string` (values: BASIC_CHART_TYPE_UNSPECIFIED, BAR, LINE, AREA, COLUMN, SCATTER, COMBO, STEPPED_AREA): The type of this series. Valid only if the

### BasicChartSpec
* BasicChartSpec `object`: The specification for a basic chart.  See BasicChartType for the list
  * axis `array`: The axis on the chart.
    * items [BasicChartAxis](#basicchartaxis)
  * chartType `string` (values: BASIC_CHART_TYPE_UNSPECIFIED, BAR, LINE, AREA, COLUMN, SCATTER, COMBO, STEPPED_AREA): The type of the chart.
  * compareMode `string` (values: BASIC_CHART_COMPARE_MODE_UNSPECIFIED, DATUM, CATEGORY): The behavior of tooltips and data highlighting when hovering on data and
  * domains `array`: The domain of data this is charting.
    * items [BasicChartDomain](#basicchartdomain)
  * headerCount `integer`: The number of rows or columns in the data that are "headers".
  * interpolateNulls `boolean`: If some values in a series are missing, gaps may appear in the chart (e.g,
  * legendPosition `string` (values: BASIC_CHART_LEGEND_POSITION_UNSPECIFIED, BOTTOM_LEGEND, LEFT_LEGEND, RIGHT_LEGEND, TOP_LEGEND, NO_LEGEND): The position of the chart legend.
  * lineSmoothing `boolean`: Gets whether all lines should be rendered smooth or straight by default.
  * series `array`: The data this chart is visualizing.
    * items [BasicChartSeries](#basicchartseries)
  * stackedType `string` (values: BASIC_CHART_STACKED_TYPE_UNSPECIFIED, NOT_STACKED, STACKED, PERCENT_STACKED): The stacked type for charts that support vertical stacking.
  * threeDimensional `boolean`: True to make the chart 3D.

### BasicFilter
* BasicFilter `object`: The default filter associated with a sheet.
  * criteria `object`: The criteria for showing/hiding values per column.
  * range [GridRange](#gridrange)
  * sortSpecs `array`: The sort order per column. Later specifications are used when values
    * items [SortSpec](#sortspec)

### BatchClearValuesByDataFilterRequest
* BatchClearValuesByDataFilterRequest `object`: The request for clearing more than one range selected by a
  * dataFilters `array`: The DataFilters used to determine which ranges to clear.
    * items [DataFilter](#datafilter)

### BatchClearValuesByDataFilterResponse
* BatchClearValuesByDataFilterResponse `object`: The response when clearing a range of values selected with
  * clearedRanges `array`: The ranges that were cleared, in A1 notation.
    * items `string`
  * spreadsheetId `string`: The spreadsheet the updates were applied to.

### BatchClearValuesRequest
* BatchClearValuesRequest `object`: The request for clearing more than one range of values in a spreadsheet.
  * ranges `array`: The ranges to clear, in A1 notation.
    * items `string`

### BatchClearValuesResponse
* BatchClearValuesResponse `object`: The response when clearing a range of values in a spreadsheet.
  * clearedRanges `array`: The ranges that were cleared, in A1 notation.
    * items `string`
  * spreadsheetId `string`: The spreadsheet the updates were applied to.

### BatchGetValuesByDataFilterRequest
* BatchGetValuesByDataFilterRequest `object`: The request for retrieving a range of values in a spreadsheet selected by a
  * dataFilters `array`: The data filters used to match the ranges of values to retrieve.  Ranges
    * items [DataFilter](#datafilter)
  * dateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): How dates, times, and durations should be represented in the output.
  * majorDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The major dimension that results should use.
  * valueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): How values should be represented in the output.

### BatchGetValuesByDataFilterResponse
* BatchGetValuesByDataFilterResponse `object`: The response when retrieving more than one range of values in a spreadsheet
  * spreadsheetId `string`: The ID of the spreadsheet the data was retrieved from.
  * valueRanges `array`: The requested values with the list of data filters that matched them.
    * items [MatchedValueRange](#matchedvaluerange)

### BatchGetValuesResponse
* BatchGetValuesResponse `object`: The response when retrieving more than one range of values in a spreadsheet.
  * spreadsheetId `string`: The ID of the spreadsheet the data was retrieved from.
  * valueRanges `array`: The requested values. The order of the ValueRanges is the same as the
    * items [ValueRange](#valuerange)

### BatchUpdateSpreadsheetRequest
* BatchUpdateSpreadsheetRequest `object`: The request for updating any aspect of a spreadsheet.
  * includeSpreadsheetInResponse `boolean`: Determines if the update response should include the spreadsheet
  * requests `array`: A list of updates to apply to the spreadsheet.
    * items [Request](#request)
  * responseIncludeGridData `boolean`: True if grid data should be returned. Meaningful only if
  * responseRanges `array`: Limits the ranges included in the response spreadsheet.
    * items `string`

### BatchUpdateSpreadsheetResponse
* BatchUpdateSpreadsheetResponse `object`: The reply for batch updating a spreadsheet.
  * replies `array`: The reply of the updates.  This maps 1:1 with the updates, although
    * items [Response](#response)
  * spreadsheetId `string`: The spreadsheet the updates were applied to.
  * updatedSpreadsheet [Spreadsheet](#spreadsheet)

### BatchUpdateValuesByDataFilterRequest
* BatchUpdateValuesByDataFilterRequest `object`: The request for updating more than one range of values in a spreadsheet.
  * data `array`: The new values to apply to the spreadsheet.  If more than one range is
    * items [DataFilterValueRange](#datafiltervaluerange)
  * includeValuesInResponse `boolean`: Determines if the update response should include the values
  * responseDateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): Determines how dates, times, and durations in the response should be
  * responseValueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): Determines how values in the response should be rendered.
  * valueInputOption `string` (values: INPUT_VALUE_OPTION_UNSPECIFIED, RAW, USER_ENTERED): How the input data should be interpreted.

### BatchUpdateValuesByDataFilterResponse
* BatchUpdateValuesByDataFilterResponse `object`: The response when updating a range of values in a spreadsheet.
  * responses `array`: The response for each range updated.
    * items [UpdateValuesByDataFilterResponse](#updatevaluesbydatafilterresponse)
  * spreadsheetId `string`: The spreadsheet the updates were applied to.
  * totalUpdatedCells `integer`: The total number of cells updated.
  * totalUpdatedColumns `integer`: The total number of columns where at least one cell in the column was
  * totalUpdatedRows `integer`: The total number of rows where at least one cell in the row was updated.
  * totalUpdatedSheets `integer`: The total number of sheets where at least one cell in the sheet was

### BatchUpdateValuesRequest
* BatchUpdateValuesRequest `object`: The request for updating more than one range of values in a spreadsheet.
  * data `array`: The new values to apply to the spreadsheet.
    * items [ValueRange](#valuerange)
  * includeValuesInResponse `boolean`: Determines if the update response should include the values
  * responseDateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): Determines how dates, times, and durations in the response should be
  * responseValueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): Determines how values in the response should be rendered.
  * valueInputOption `string` (values: INPUT_VALUE_OPTION_UNSPECIFIED, RAW, USER_ENTERED): How the input data should be interpreted.

### BatchUpdateValuesResponse
* BatchUpdateValuesResponse `object`: The response when updating a range of values in a spreadsheet.
  * responses `array`: One UpdateValuesResponse per requested range, in the same order as
    * items [UpdateValuesResponse](#updatevaluesresponse)
  * spreadsheetId `string`: The spreadsheet the updates were applied to.
  * totalUpdatedCells `integer`: The total number of cells updated.
  * totalUpdatedColumns `integer`: The total number of columns where at least one cell in the column was
  * totalUpdatedRows `integer`: The total number of rows where at least one cell in the row was updated.
  * totalUpdatedSheets `integer`: The total number of sheets where at least one cell in the sheet was

### BooleanCondition
* BooleanCondition `object`: A condition that can evaluate to true or false.
  * type `string` (values: CONDITION_TYPE_UNSPECIFIED, NUMBER_GREATER, NUMBER_GREATER_THAN_EQ, NUMBER_LESS, NUMBER_LESS_THAN_EQ, NUMBER_EQ, NUMBER_NOT_EQ, NUMBER_BETWEEN, NUMBER_NOT_BETWEEN, TEXT_CONTAINS, TEXT_NOT_CONTAINS, TEXT_STARTS_WITH, TEXT_ENDS_WITH, TEXT_EQ, TEXT_IS_EMAIL, TEXT_IS_URL, DATE_EQ, DATE_BEFORE, DATE_AFTER, DATE_ON_OR_BEFORE, DATE_ON_OR_AFTER, DATE_BETWEEN, DATE_NOT_BETWEEN, DATE_IS_VALID, ONE_OF_RANGE, ONE_OF_LIST, BLANK, NOT_BLANK, CUSTOM_FORMULA): The type of condition.
  * values `array`: The values of the condition. The number of supported values depends
    * items [ConditionValue](#conditionvalue)

### BooleanRule
* BooleanRule `object`: A rule that may or may not match, depending on the condition.
  * condition [BooleanCondition](#booleancondition)
  * format [CellFormat](#cellformat)

### Border
* Border `object`: A border along a cell.
  * color [Color](#color)
  * style `string` (values: STYLE_UNSPECIFIED, DOTTED, DASHED, SOLID, SOLID_MEDIUM, SOLID_THICK, NONE, DOUBLE): The style of the border.
  * width `integer`: The width of the border, in pixels.

### Borders
* Borders `object`: The borders of the cell.
  * bottom [Border](#border)
  * left [Border](#border)
  * right [Border](#border)
  * top [Border](#border)

### BubbleChartSpec
* BubbleChartSpec `object`: A <a href="/chart/interactive/docs/gallery/bubblechart">bubble chart</a>.
  * bubbleBorderColor [Color](#color)
  * bubbleLabels [ChartData](#chartdata)
  * bubbleMaxRadiusSize `integer`: The max radius size of the bubbles, in pixels.
  * bubbleMinRadiusSize `integer`: The minimum radius size of the bubbles, in pixels.
  * bubbleOpacity `number`: The opacity of the bubbles between 0 and 1.0.
  * bubbleSizes [ChartData](#chartdata)
  * bubbleTextStyle [TextFormat](#textformat)
  * domain [ChartData](#chartdata)
  * groupIds [ChartData](#chartdata)
  * legendPosition `string` (values: BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED, BOTTOM_LEGEND, LEFT_LEGEND, RIGHT_LEGEND, TOP_LEGEND, NO_LEGEND, INSIDE_LEGEND): Where the legend of the chart should be drawn.
  * series [ChartData](#chartdata)

### CandlestickChartSpec
* CandlestickChartSpec `object`: A <a href="/chart/interactive/docs/gallery/candlestickchart">candlestick chart</a>.
  * data `array`: The Candlestick chart data.
    * items [CandlestickData](#candlestickdata)
  * domain [CandlestickDomain](#candlestickdomain)

### CandlestickData
* CandlestickData `object`: The Candlestick chart data, each containing the low, open, close, and high
  * closeSeries [CandlestickSeries](#candlestickseries)
  * highSeries [CandlestickSeries](#candlestickseries)
  * lowSeries [CandlestickSeries](#candlestickseries)
  * openSeries [CandlestickSeries](#candlestickseries)

### CandlestickDomain
* CandlestickDomain `object`: The domain of a CandlestickChart.
  * data [ChartData](#chartdata)
  * reversed `boolean`: True to reverse the order of the domain values (horizontal axis).

### CandlestickSeries
* CandlestickSeries `object`: The series of a CandlestickData.
  * data [ChartData](#chartdata)

### CellData
* CellData `object`: Data about a specific cell.
  * dataValidation [DataValidationRule](#datavalidationrule)
  * effectiveFormat [CellFormat](#cellformat)
  * effectiveValue [ExtendedValue](#extendedvalue)
  * formattedValue `string`: The formatted value of the cell.
  * hyperlink `string`: A hyperlink this cell points to, if any.
  * note `string`: Any note on the cell.
  * pivotTable [PivotTable](#pivottable)
  * textFormatRuns `array`: Runs of rich text applied to subsections of the cell.  Runs are only valid
    * items [TextFormatRun](#textformatrun)
  * userEnteredFormat [CellFormat](#cellformat)
  * userEnteredValue [ExtendedValue](#extendedvalue)

### CellFormat
* CellFormat `object`: The format of a cell.
  * backgroundColor [Color](#color)
  * borders [Borders](#borders)
  * horizontalAlignment `string` (values: HORIZONTAL_ALIGN_UNSPECIFIED, LEFT, CENTER, RIGHT): The horizontal alignment of the value in the cell.
  * hyperlinkDisplayType `string` (values: HYPERLINK_DISPLAY_TYPE_UNSPECIFIED, LINKED, PLAIN_TEXT): How a hyperlink, if it exists, should be displayed in the cell.
  * numberFormat [NumberFormat](#numberformat)
  * padding [Padding](#padding)
  * textDirection `string` (values: TEXT_DIRECTION_UNSPECIFIED, LEFT_TO_RIGHT, RIGHT_TO_LEFT): The direction of the text in the cell.
  * textFormat [TextFormat](#textformat)
  * textRotation [TextRotation](#textrotation)
  * verticalAlignment `string` (values: VERTICAL_ALIGN_UNSPECIFIED, TOP, MIDDLE, BOTTOM): The vertical alignment of the value in the cell.
  * wrapStrategy `string` (values: WRAP_STRATEGY_UNSPECIFIED, OVERFLOW_CELL, LEGACY_WRAP, CLIP, WRAP): The wrap strategy for the value in the cell.

### ChartData
* ChartData `object`: The data included in a domain or series.
  * sourceRange [ChartSourceRange](#chartsourcerange)

### ChartSourceRange
* ChartSourceRange `object`: Source ranges for a chart.
  * sources `array`: The ranges of data for a series or domain.
    * items [GridRange](#gridrange)

### ChartSpec
* ChartSpec `object`: The specifications of a chart.
  * altText `string`: The alternative text that describes the chart.  This is often used
  * backgroundColor [Color](#color)
  * basicChart [BasicChartSpec](#basicchartspec)
  * bubbleChart [BubbleChartSpec](#bubblechartspec)
  * candlestickChart [CandlestickChartSpec](#candlestickchartspec)
  * fontName `string`: The name of the font to use by default for all chart text (e.g. title,
  * hiddenDimensionStrategy `string` (values: CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED, SKIP_HIDDEN_ROWS_AND_COLUMNS, SKIP_HIDDEN_ROWS, SKIP_HIDDEN_COLUMNS, SHOW_ALL): Determines how the charts will use hidden rows or columns.
  * histogramChart [HistogramChartSpec](#histogramchartspec)
  * maximized `boolean`: True to make a chart fill the entire space in which it's rendered with
  * orgChart [OrgChartSpec](#orgchartspec)
  * pieChart [PieChartSpec](#piechartspec)
  * subtitle `string`: The subtitle of the chart.
  * subtitleTextFormat [TextFormat](#textformat)
  * subtitleTextPosition [TextPosition](#textposition)
  * title `string`: The title of the chart.
  * titleTextFormat [TextFormat](#textformat)
  * titleTextPosition [TextPosition](#textposition)

### ClearBasicFilterRequest
* ClearBasicFilterRequest `object`: Clears the basic filter, if any exists on the sheet.
  * sheetId `integer`: The sheet ID on which the basic filter should be cleared.

### ClearValuesRequest
* ClearValuesRequest `object`: The request for clearing a range of values in a spreadsheet.

### ClearValuesResponse
* ClearValuesResponse `object`: The response when clearing a range of values in a spreadsheet.
  * clearedRange `string`: The range (in A1 notation) that was cleared.
  * spreadsheetId `string`: The spreadsheet the updates were applied to.

### Color
* Color `object`: Represents a color in the RGBA color space. This representation is designed
  * alpha `number`: The fraction of this color that should be applied to the pixel. That is,
  * blue `number`: The amount of blue in the color as a value in the interval [0, 1].
  * green `number`: The amount of green in the color as a value in the interval [0, 1].
  * red `number`: The amount of red in the color as a value in the interval [0, 1].

### ConditionValue
* ConditionValue `object`: The value of the condition.
  * relativeDate `string` (values: RELATIVE_DATE_UNSPECIFIED, PAST_YEAR, PAST_MONTH, PAST_WEEK, YESTERDAY, TODAY, TOMORROW): A relative date (based on the current date).
  * userEnteredValue `string`: A value the condition is based on.

### ConditionalFormatRule
* ConditionalFormatRule `object`: A rule describing a conditional format.
  * booleanRule [BooleanRule](#booleanrule)
  * gradientRule [GradientRule](#gradientrule)
  * ranges `array`: The ranges that will be formatted if the condition is true.
    * items [GridRange](#gridrange)

### CopyPasteRequest
* CopyPasteRequest `object`: Copies data from the source to the destination.
  * destination [GridRange](#gridrange)
  * pasteOrientation `string` (values: NORMAL, TRANSPOSE): How that data should be oriented when pasting.
  * pasteType `string` (values: PASTE_NORMAL, PASTE_VALUES, PASTE_FORMAT, PASTE_NO_BORDERS, PASTE_FORMULA, PASTE_DATA_VALIDATION, PASTE_CONDITIONAL_FORMATTING): What kind of data to paste.
  * source [GridRange](#gridrange)

### CopySheetToAnotherSpreadsheetRequest
* CopySheetToAnotherSpreadsheetRequest `object`: The request to copy a sheet across spreadsheets.
  * destinationSpreadsheetId `string`: The ID of the spreadsheet to copy the sheet to.

### CreateDeveloperMetadataRequest
* CreateDeveloperMetadataRequest `object`: A request to create developer metadata.
  * developerMetadata [DeveloperMetadata](#developermetadata)

### CreateDeveloperMetadataResponse
* CreateDeveloperMetadataResponse `object`: The response from creating developer metadata.
  * developerMetadata [DeveloperMetadata](#developermetadata)

### CutPasteRequest
* CutPasteRequest `object`: Moves data from the source to the destination.
  * destination [GridCoordinate](#gridcoordinate)
  * pasteType `string` (values: PASTE_NORMAL, PASTE_VALUES, PASTE_FORMAT, PASTE_NO_BORDERS, PASTE_FORMULA, PASTE_DATA_VALIDATION, PASTE_CONDITIONAL_FORMATTING): What kind of data to paste.  All the source data will be cut, regardless
  * source [GridRange](#gridrange)

### DataFilter
* DataFilter `object`: Filter that describes what data should be selected or returned from a
  * a1Range `string`: Selects data that matches the specified A1 range.
  * developerMetadataLookup [DeveloperMetadataLookup](#developermetadatalookup)
  * gridRange [GridRange](#gridrange)

### DataFilterValueRange
* DataFilterValueRange `object`: A range of values whose location is specified by a DataFilter.
  * dataFilter [DataFilter](#datafilter)
  * majorDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The major dimension of the values.
  * values `array`: The data to be written.  If the provided values exceed any of the ranges
    * items `array`


### DataValidationRule
* DataValidationRule `object`: A data validation rule.
  * condition [BooleanCondition](#booleancondition)
  * inputMessage `string`: A message to show the user when adding data to the cell.
  * showCustomUi `boolean`: True if the UI should be customized based on the kind of condition.
  * strict `boolean`: True if invalid data should be rejected.

### DeleteBandingRequest
* DeleteBandingRequest `object`: Removes the banded range with the given ID from the spreadsheet.
  * bandedRangeId `integer`: The ID of the banded range to delete.

### DeleteConditionalFormatRuleRequest
* DeleteConditionalFormatRuleRequest `object`: Deletes a conditional format rule at the given index.
  * index `integer`: The zero-based index of the rule to be deleted.
  * sheetId `integer`: The sheet the rule is being deleted from.

### DeleteConditionalFormatRuleResponse
* DeleteConditionalFormatRuleResponse `object`: The result of deleting a conditional format rule.
  * rule [ConditionalFormatRule](#conditionalformatrule)

### DeleteDeveloperMetadataRequest
* DeleteDeveloperMetadataRequest `object`: A request to delete developer metadata.
  * dataFilter [DataFilter](#datafilter)

### DeleteDeveloperMetadataResponse
* DeleteDeveloperMetadataResponse `object`: The response from deleting developer metadata.
  * deletedDeveloperMetadata `array`: The metadata that was deleted.
    * items [DeveloperMetadata](#developermetadata)

### DeleteDimensionRequest
* DeleteDimensionRequest `object`: Deletes the dimensions from the sheet.
  * range [DimensionRange](#dimensionrange)

### DeleteEmbeddedObjectRequest
* DeleteEmbeddedObjectRequest `object`: Deletes the embedded object with the given ID.
  * objectId `integer`: The ID of the embedded object to delete.

### DeleteFilterViewRequest
* DeleteFilterViewRequest `object`: Deletes a particular filter view.
  * filterId `integer`: The ID of the filter to delete.

### DeleteNamedRangeRequest
* DeleteNamedRangeRequest `object`: Removes the named range with the given ID from the spreadsheet.
  * namedRangeId `string`: The ID of the named range to delete.

### DeleteProtectedRangeRequest
* DeleteProtectedRangeRequest `object`: Deletes the protected range with the given ID.
  * protectedRangeId `integer`: The ID of the protected range to delete.

### DeleteRangeRequest
* DeleteRangeRequest `object`: Deletes a range of cells, shifting other cells into the deleted area.
  * range [GridRange](#gridrange)
  * shiftDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The dimension from which deleted cells will be replaced with.

### DeleteSheetRequest
* DeleteSheetRequest `object`: Deletes the requested sheet.
  * sheetId `integer`: The ID of the sheet to delete.

### DeveloperMetadata
* DeveloperMetadata `object`: Developer metadata associated with a location or object in a spreadsheet.
  * location [DeveloperMetadataLocation](#developermetadatalocation)
  * metadataId `integer`: The spreadsheet-scoped unique ID that identifies the metadata. IDs may be
  * metadataKey `string`: The metadata key. There may be multiple metadata in a spreadsheet with the
  * metadataValue `string`: Data associated with the metadata's key.
  * visibility `string` (values: DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED, DOCUMENT, PROJECT): The metadata visibility.  Developer metadata must always have a visibility

### DeveloperMetadataLocation
* DeveloperMetadataLocation `object`: A location where metadata may be associated in a spreadsheet.
  * dimensionRange [DimensionRange](#dimensionrange)
  * locationType `string` (values: DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED, ROW, COLUMN, SHEET, SPREADSHEET): The type of location this object represents.  This field is read-only.
  * sheetId `integer`: The ID of the sheet when metadata is associated with an entire sheet.
  * spreadsheet `boolean`: True when metadata is associated with an entire spreadsheet.

### DeveloperMetadataLookup
* DeveloperMetadataLookup `object`: Selects DeveloperMetadata that matches all of the specified fields.  For
  * locationMatchingStrategy `string` (values: DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED, EXACT_LOCATION, INTERSECTING_LOCATION): Determines how this lookup matches the location.  If this field is
  * locationType `string` (values: DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED, ROW, COLUMN, SHEET, SPREADSHEET): Limits the selected developer metadata to those entries which are
  * metadataId `integer`: Limits the selected developer metadata to that which has a matching
  * metadataKey `string`: Limits the selected developer metadata to that which has a matching
  * metadataLocation [DeveloperMetadataLocation](#developermetadatalocation)
  * metadataValue `string`: Limits the selected developer metadata to that which has a matching
  * visibility `string` (values: DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED, DOCUMENT, PROJECT): Limits the selected developer metadata to that which has a matching

### DimensionProperties
* DimensionProperties `object`: Properties about a dimension.
  * developerMetadata `array`: The developer metadata associated with a single row or column.
    * items [DeveloperMetadata](#developermetadata)
  * hiddenByFilter `boolean`: True if this dimension is being filtered.
  * hiddenByUser `boolean`: True if this dimension is explicitly hidden.
  * pixelSize `integer`: The height (if a row) or width (if a column) of the dimension in pixels.

### DimensionRange
* DimensionRange `object`: A range along a single dimension on a sheet.
  * dimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The dimension of the span.
  * endIndex `integer`: The end (exclusive) of the span, or not set if unbounded.
  * sheetId `integer`: The sheet this span is on.
  * startIndex `integer`: The start (inclusive) of the span, or not set if unbounded.

### DuplicateFilterViewRequest
* DuplicateFilterViewRequest `object`: Duplicates a particular filter view.
  * filterId `integer`: The ID of the filter being duplicated.

### DuplicateFilterViewResponse
* DuplicateFilterViewResponse `object`: The result of a filter view being duplicated.
  * filter [FilterView](#filterview)

### DuplicateSheetRequest
* DuplicateSheetRequest `object`: Duplicates the contents of a sheet.
  * insertSheetIndex `integer`: The zero-based index where the new sheet should be inserted.
  * newSheetId `integer`: If set, the ID of the new sheet. If not set, an ID is chosen.
  * newSheetName `string`: The name of the new sheet.  If empty, a new name is chosen for you.
  * sourceSheetId `integer`: The sheet to duplicate.

### DuplicateSheetResponse
* DuplicateSheetResponse `object`: The result of duplicating a sheet.
  * properties [SheetProperties](#sheetproperties)

### Editors
* Editors `object`: The editors of a protected range.
  * domainUsersCanEdit `boolean`: True if anyone in the document's domain has edit access to the protected
  * groups `array`: The email addresses of groups with edit access to the protected range.
    * items `string`
  * users `array`: The email addresses of users with edit access to the protected range.
    * items `string`

### EmbeddedChart
* EmbeddedChart `object`: A chart embedded in a sheet.
  * chartId `integer`: The ID of the chart.
  * position [EmbeddedObjectPosition](#embeddedobjectposition)
  * spec [ChartSpec](#chartspec)

### EmbeddedObjectPosition
* EmbeddedObjectPosition `object`: The position of an embedded object such as a chart.
  * newSheet `boolean`: If true, the embedded object will be put on a new sheet whose ID
  * overlayPosition [OverlayPosition](#overlayposition)
  * sheetId `integer`: The sheet this is on. Set only if the embedded object

### ErrorValue
* ErrorValue `object`: An error in a cell.
  * message `string`: A message with more information about the error
  * type `string` (values: ERROR_TYPE_UNSPECIFIED, ERROR, NULL_VALUE, DIVIDE_BY_ZERO, VALUE, REF, NAME, NUM, N_A, LOADING): The type of error.

### ExtendedValue
* ExtendedValue `object`: The kinds of value that a cell in a spreadsheet can have.
  * boolValue `boolean`: Represents a boolean value.
  * errorValue [ErrorValue](#errorvalue)
  * formulaValue `string`: Represents a formula.
  * numberValue `number`: Represents a double value.
  * stringValue `string`: Represents a string value.

### FilterCriteria
* FilterCriteria `object`: Criteria for showing/hiding rows in a filter or filter view.
  * condition [BooleanCondition](#booleancondition)
  * hiddenValues `array`: Values that should be hidden.
    * items `string`

### FilterView
* FilterView `object`: A filter view.
  * criteria `object`: The criteria for showing/hiding values per column.
  * filterViewId `integer`: The ID of the filter view.
  * namedRangeId `string`: The named range this filter view is backed by, if any.
  * range [GridRange](#gridrange)
  * sortSpecs `array`: The sort order per column. Later specifications are used when values
    * items [SortSpec](#sortspec)
  * title `string`: The name of the filter view.

### FindReplaceRequest
* FindReplaceRequest `object`: Finds and replaces data in cells over a range, sheet, or all sheets.
  * allSheets `boolean`: True to find/replace over all sheets.
  * find `string`: The value to search.
  * includeFormulas `boolean`: True if the search should include cells with formulas.
  * matchCase `boolean`: True if the search is case sensitive.
  * matchEntireCell `boolean`: True if the find value should match the entire cell.
  * range [GridRange](#gridrange)
  * replacement `string`: The value to use as the replacement.
  * searchByRegex `boolean`: True if the find value is a regex.
  * sheetId `integer`: The sheet to find/replace over.

### FindReplaceResponse
* FindReplaceResponse `object`: The result of the find/replace.
  * formulasChanged `integer`: The number of formula cells changed.
  * occurrencesChanged `integer`: The number of occurrences (possibly multiple within a cell) changed.
  * rowsChanged `integer`: The number of rows changed.
  * sheetsChanged `integer`: The number of sheets changed.
  * valuesChanged `integer`: The number of non-formula cells changed.

### GetSpreadsheetByDataFilterRequest
* GetSpreadsheetByDataFilterRequest `object`: The request for retrieving a Spreadsheet.
  * dataFilters `array`: The DataFilters used to select which ranges to retrieve from
    * items [DataFilter](#datafilter)
  * includeGridData `boolean`: True if grid data should be returned.

### GradientRule
* GradientRule `object`: A rule that applies a gradient color scale format, based on
  * maxpoint [InterpolationPoint](#interpolationpoint)
  * midpoint [InterpolationPoint](#interpolationpoint)
  * minpoint [InterpolationPoint](#interpolationpoint)

### GridCoordinate
* GridCoordinate `object`: A coordinate in a sheet.
  * columnIndex `integer`: The column index of the coordinate.
  * rowIndex `integer`: The row index of the coordinate.
  * sheetId `integer`: The sheet this coordinate is on.

### GridData
* GridData `object`: Data in the grid, as well as metadata about the dimensions.
  * columnMetadata `array`: Metadata about the requested columns in the grid, starting with the column
    * items [DimensionProperties](#dimensionproperties)
  * rowData `array`: The data in the grid, one entry per row,
    * items [RowData](#rowdata)
  * rowMetadata `array`: Metadata about the requested rows in the grid, starting with the row
    * items [DimensionProperties](#dimensionproperties)
  * startColumn `integer`: The first column this GridData refers to, zero-based.
  * startRow `integer`: The first row this GridData refers to, zero-based.

### GridProperties
* GridProperties `object`: Properties of a grid.
  * columnCount `integer`: The number of columns in the grid.
  * frozenColumnCount `integer`: The number of columns that are frozen in the grid.
  * frozenRowCount `integer`: The number of rows that are frozen in the grid.
  * hideGridlines `boolean`: True if the grid isn't showing gridlines in the UI.
  * rowCount `integer`: The number of rows in the grid.

### GridRange
* GridRange `object`: A range on a sheet.
  * endColumnIndex `integer`: The end column (exclusive) of the range, or not set if unbounded.
  * endRowIndex `integer`: The end row (exclusive) of the range, or not set if unbounded.
  * sheetId `integer`: The sheet this range is on.
  * startColumnIndex `integer`: The start column (inclusive) of the range, or not set if unbounded.
  * startRowIndex `integer`: The start row (inclusive) of the range, or not set if unbounded.

### HistogramChartSpec
* HistogramChartSpec `object`: A <a href="/chart/interactive/docs/gallery/histogram">histogram chart</a>.
  * bucketSize `number`: By default the bucket size (the range of values stacked in a single
  * legendPosition `string` (values: HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED, BOTTOM_LEGEND, LEFT_LEGEND, RIGHT_LEGEND, TOP_LEGEND, NO_LEGEND, INSIDE_LEGEND): The position of the chart legend.
  * outlierPercentile `number`: The outlier percentile is used to ensure that outliers do not adversely
  * series `array`: The series for a histogram may be either a single series of values to be
    * items [HistogramSeries](#histogramseries)
  * showItemDividers `boolean`: Whether horizontal divider lines should be displayed between items in each

### HistogramSeries
* HistogramSeries `object`: A histogram series containing the series color and data.
  * barColor [Color](#color)
  * data [ChartData](#chartdata)

### InsertDimensionRequest
* InsertDimensionRequest `object`: Inserts rows or columns in a sheet at a particular index.
  * inheritFromBefore `boolean`: Whether dimension properties should be extended from the dimensions
  * range [DimensionRange](#dimensionrange)

### InsertRangeRequest
* InsertRangeRequest `object`: Inserts cells into a range, shifting the existing cells over or down.
  * range [GridRange](#gridrange)
  * shiftDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The dimension which will be shifted when inserting cells.

### InterpolationPoint
* InterpolationPoint `object`: A single interpolation point on a gradient conditional format.
  * color [Color](#color)
  * type `string` (values: INTERPOLATION_POINT_TYPE_UNSPECIFIED, MIN, MAX, NUMBER, PERCENT, PERCENTILE): How the value should be interpreted.
  * value `string`: The value this interpolation point uses.  May be a formula.

### IterativeCalculationSettings
* IterativeCalculationSettings `object`: Settings to control how circular dependencies are resolved with iterative
  * convergenceThreshold `number`: When iterative calculation is enabled and successive results differ by
  * maxIterations `integer`: When iterative calculation is enabled, the maximum number of calculation

### MatchedDeveloperMetadata
* MatchedDeveloperMetadata `object`: A developer metadata entry and the data filters specified in the original
  * dataFilters `array`: All filters matching the returned developer metadata.
    * items [DataFilter](#datafilter)
  * developerMetadata [DeveloperMetadata](#developermetadata)

### MatchedValueRange
* MatchedValueRange `object`: A value range that was matched by one or more data filers.
  * dataFilters `array`: The DataFilters from the request that matched the range of
    * items [DataFilter](#datafilter)
  * valueRange [ValueRange](#valuerange)

### MergeCellsRequest
* MergeCellsRequest `object`: Merges all cells in the range.
  * mergeType `string` (values: MERGE_ALL, MERGE_COLUMNS, MERGE_ROWS): How the cells should be merged.
  * range [GridRange](#gridrange)

### MoveDimensionRequest
* MoveDimensionRequest `object`: Moves one or more rows or columns.
  * destinationIndex `integer`: The zero-based start index of where to move the source data to,
  * source [DimensionRange](#dimensionrange)

### NamedRange
* NamedRange `object`: A named range.
  * name `string`: The name of the named range.
  * namedRangeId `string`: The ID of the named range.
  * range [GridRange](#gridrange)

### NumberFormat
* NumberFormat `object`: The number format of a cell.
  * pattern `string`: Pattern string used for formatting.  If not set, a default pattern based on
  * type `string` (values: NUMBER_FORMAT_TYPE_UNSPECIFIED, TEXT, NUMBER, PERCENT, CURRENCY, DATE, TIME, DATE_TIME, SCIENTIFIC): The type of the number format.

### OrgChartSpec
* OrgChartSpec `object`: An <a href="/chart/interactive/docs/gallery/orgchart">org chart</a>.
  * labels [ChartData](#chartdata)
  * nodeColor [Color](#color)
  * nodeSize `string` (values: ORG_CHART_LABEL_SIZE_UNSPECIFIED, SMALL, MEDIUM, LARGE): The size of the org chart nodes.
  * parentLabels [ChartData](#chartdata)
  * selectedNodeColor [Color](#color)
  * tooltips [ChartData](#chartdata)

### OverlayPosition
* OverlayPosition `object`: The location an object is overlaid on top of a grid.
  * anchorCell [GridCoordinate](#gridcoordinate)
  * heightPixels `integer`: The height of the object, in pixels. Defaults to 371.
  * offsetXPixels `integer`: The horizontal offset, in pixels, that the object is offset
  * offsetYPixels `integer`: The vertical offset, in pixels, that the object is offset
  * widthPixels `integer`: The width of the object, in pixels. Defaults to 600.

### Padding
* Padding `object`: The amount of padding around the cell, in pixels.
  * bottom `integer`: The bottom padding of the cell.
  * left `integer`: The left padding of the cell.
  * right `integer`: The right padding of the cell.
  * top `integer`: The top padding of the cell.

### PasteDataRequest
* PasteDataRequest `object`: Inserts data into the spreadsheet starting at the specified coordinate.
  * coordinate [GridCoordinate](#gridcoordinate)
  * data `string`: The data to insert.
  * delimiter `string`: The delimiter in the data.
  * html `boolean`: True if the data is HTML.
  * type `string` (values: PASTE_NORMAL, PASTE_VALUES, PASTE_FORMAT, PASTE_NO_BORDERS, PASTE_FORMULA, PASTE_DATA_VALIDATION, PASTE_CONDITIONAL_FORMATTING): How the data should be pasted.

### PieChartSpec
* PieChartSpec `object`: A <a href="/chart/interactive/docs/gallery/piechart">pie chart</a>.
  * domain [ChartData](#chartdata)
  * legendPosition `string` (values: PIE_CHART_LEGEND_POSITION_UNSPECIFIED, BOTTOM_LEGEND, LEFT_LEGEND, RIGHT_LEGEND, TOP_LEGEND, NO_LEGEND, LABELED_LEGEND): Where the legend of the pie chart should be drawn.
  * pieHole `number`: The size of the hole in the pie chart.
  * series [ChartData](#chartdata)
  * threeDimensional `boolean`: True if the pie is three dimensional.

### PivotFilterCriteria
* PivotFilterCriteria `object`: Criteria for showing/hiding rows in a pivot table.
  * visibleValues `array`: Values that should be included.  Values not listed here are excluded.
    * items `string`

### PivotGroup
* PivotGroup `object`: A single grouping (either row or column) in a pivot table.
  * showTotals `boolean`: True if the pivot table should include the totals for this grouping.
  * sortOrder `string` (values: SORT_ORDER_UNSPECIFIED, ASCENDING, DESCENDING): The order the values in this group should be sorted.
  * sourceColumnOffset `integer`: The column offset of the source range that this grouping is based on.
  * valueBucket [PivotGroupSortValueBucket](#pivotgroupsortvaluebucket)
  * valueMetadata `array`: Metadata about values in the grouping.
    * items [PivotGroupValueMetadata](#pivotgroupvaluemetadata)

### PivotGroupSortValueBucket
* PivotGroupSortValueBucket `object`: Information about which values in a pivot group should be used for sorting.
  * buckets `array`: Determines the bucket from which values are chosen to sort.
    * items [ExtendedValue](#extendedvalue)
  * valuesIndex `integer`: The offset in the PivotTable.values list which the values in this

### PivotGroupValueMetadata
* PivotGroupValueMetadata `object`: Metadata about a value in a pivot grouping.
  * collapsed `boolean`: True if the data corresponding to the value is collapsed.
  * value [ExtendedValue](#extendedvalue)

### PivotTable
* PivotTable `object`: A pivot table.
  * columns `array`: Each column grouping in the pivot table.
    * items [PivotGroup](#pivotgroup)
  * criteria `object`: An optional mapping of filters per source column offset.
  * rows `array`: Each row grouping in the pivot table.
    * items [PivotGroup](#pivotgroup)
  * source [GridRange](#gridrange)
  * valueLayout `string` (values: HORIZONTAL, VERTICAL): Whether values should be listed horizontally (as columns)
  * values `array`: A list of values to include in the pivot table.
    * items [PivotValue](#pivotvalue)

### PivotValue
* PivotValue `object`: The definition of how a value in a pivot table should be calculated.
  * formula `string`: A custom formula to calculate the value.  The formula must start
  * name `string`: A name to use for the value.
  * sourceColumnOffset `integer`: The column offset of the source range that this value reads from.
  * summarizeFunction `string` (values: PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED, SUM, COUNTA, COUNT, COUNTUNIQUE, AVERAGE, MAX, MIN, MEDIAN, PRODUCT, STDEV, STDEVP, VAR, VARP, CUSTOM): A function to summarize the value.

### ProtectedRange
* ProtectedRange `object`: A protected range.
  * description `string`: The description of this protected range.
  * editors [Editors](#editors)
  * namedRangeId `string`: The named range this protected range is backed by, if any.
  * protectedRangeId `integer`: The ID of the protected range.
  * range [GridRange](#gridrange)
  * requestingUserCanEdit `boolean`: True if the user who requested this protected range can edit the
  * unprotectedRanges `array`: The list of unprotected ranges within a protected sheet.
    * items [GridRange](#gridrange)
  * warningOnly `boolean`: True if this protected range will show a warning when editing.

### RandomizeRangeRequest
* RandomizeRangeRequest `object`: Randomizes the order of the rows in a range.
  * range [GridRange](#gridrange)

### RepeatCellRequest
* RepeatCellRequest `object`: Updates all cells in the range to the values in the given Cell object.
  * cell [CellData](#celldata)
  * fields `string`: The fields that should be updated.  At least one field must be specified.
  * range [GridRange](#gridrange)

### Request
* Request `object`: A single kind of update to apply to a spreadsheet.
  * addBanding [AddBandingRequest](#addbandingrequest)
  * addChart [AddChartRequest](#addchartrequest)
  * addConditionalFormatRule [AddConditionalFormatRuleRequest](#addconditionalformatrulerequest)
  * addFilterView [AddFilterViewRequest](#addfilterviewrequest)
  * addNamedRange [AddNamedRangeRequest](#addnamedrangerequest)
  * addProtectedRange [AddProtectedRangeRequest](#addprotectedrangerequest)
  * addSheet [AddSheetRequest](#addsheetrequest)
  * appendCells [AppendCellsRequest](#appendcellsrequest)
  * appendDimension [AppendDimensionRequest](#appenddimensionrequest)
  * autoFill [AutoFillRequest](#autofillrequest)
  * autoResizeDimensions [AutoResizeDimensionsRequest](#autoresizedimensionsrequest)
  * clearBasicFilter [ClearBasicFilterRequest](#clearbasicfilterrequest)
  * copyPaste [CopyPasteRequest](#copypasterequest)
  * createDeveloperMetadata [CreateDeveloperMetadataRequest](#createdevelopermetadatarequest)
  * cutPaste [CutPasteRequest](#cutpasterequest)
  * deleteBanding [DeleteBandingRequest](#deletebandingrequest)
  * deleteConditionalFormatRule [DeleteConditionalFormatRuleRequest](#deleteconditionalformatrulerequest)
  * deleteDeveloperMetadata [DeleteDeveloperMetadataRequest](#deletedevelopermetadatarequest)
  * deleteDimension [DeleteDimensionRequest](#deletedimensionrequest)
  * deleteEmbeddedObject [DeleteEmbeddedObjectRequest](#deleteembeddedobjectrequest)
  * deleteFilterView [DeleteFilterViewRequest](#deletefilterviewrequest)
  * deleteNamedRange [DeleteNamedRangeRequest](#deletenamedrangerequest)
  * deleteProtectedRange [DeleteProtectedRangeRequest](#deleteprotectedrangerequest)
  * deleteRange [DeleteRangeRequest](#deleterangerequest)
  * deleteSheet [DeleteSheetRequest](#deletesheetrequest)
  * duplicateFilterView [DuplicateFilterViewRequest](#duplicatefilterviewrequest)
  * duplicateSheet [DuplicateSheetRequest](#duplicatesheetrequest)
  * findReplace [FindReplaceRequest](#findreplacerequest)
  * insertDimension [InsertDimensionRequest](#insertdimensionrequest)
  * insertRange [InsertRangeRequest](#insertrangerequest)
  * mergeCells [MergeCellsRequest](#mergecellsrequest)
  * moveDimension [MoveDimensionRequest](#movedimensionrequest)
  * pasteData [PasteDataRequest](#pastedatarequest)
  * randomizeRange [RandomizeRangeRequest](#randomizerangerequest)
  * repeatCell [RepeatCellRequest](#repeatcellrequest)
  * setBasicFilter [SetBasicFilterRequest](#setbasicfilterrequest)
  * setDataValidation [SetDataValidationRequest](#setdatavalidationrequest)
  * sortRange [SortRangeRequest](#sortrangerequest)
  * textToColumns [TextToColumnsRequest](#texttocolumnsrequest)
  * unmergeCells [UnmergeCellsRequest](#unmergecellsrequest)
  * updateBanding [UpdateBandingRequest](#updatebandingrequest)
  * updateBorders [UpdateBordersRequest](#updatebordersrequest)
  * updateCells [UpdateCellsRequest](#updatecellsrequest)
  * updateChartSpec [UpdateChartSpecRequest](#updatechartspecrequest)
  * updateConditionalFormatRule [UpdateConditionalFormatRuleRequest](#updateconditionalformatrulerequest)
  * updateDeveloperMetadata [UpdateDeveloperMetadataRequest](#updatedevelopermetadatarequest)
  * updateDimensionProperties [UpdateDimensionPropertiesRequest](#updatedimensionpropertiesrequest)
  * updateEmbeddedObjectPosition [UpdateEmbeddedObjectPositionRequest](#updateembeddedobjectpositionrequest)
  * updateFilterView [UpdateFilterViewRequest](#updatefilterviewrequest)
  * updateNamedRange [UpdateNamedRangeRequest](#updatenamedrangerequest)
  * updateProtectedRange [UpdateProtectedRangeRequest](#updateprotectedrangerequest)
  * updateSheetProperties [UpdateSheetPropertiesRequest](#updatesheetpropertiesrequest)
  * updateSpreadsheetProperties [UpdateSpreadsheetPropertiesRequest](#updatespreadsheetpropertiesrequest)

### Response
* Response `object`: A single response from an update.
  * addBanding [AddBandingResponse](#addbandingresponse)
  * addChart [AddChartResponse](#addchartresponse)
  * addFilterView [AddFilterViewResponse](#addfilterviewresponse)
  * addNamedRange [AddNamedRangeResponse](#addnamedrangeresponse)
  * addProtectedRange [AddProtectedRangeResponse](#addprotectedrangeresponse)
  * addSheet [AddSheetResponse](#addsheetresponse)
  * createDeveloperMetadata [CreateDeveloperMetadataResponse](#createdevelopermetadataresponse)
  * deleteConditionalFormatRule [DeleteConditionalFormatRuleResponse](#deleteconditionalformatruleresponse)
  * deleteDeveloperMetadata [DeleteDeveloperMetadataResponse](#deletedevelopermetadataresponse)
  * duplicateFilterView [DuplicateFilterViewResponse](#duplicatefilterviewresponse)
  * duplicateSheet [DuplicateSheetResponse](#duplicatesheetresponse)
  * findReplace [FindReplaceResponse](#findreplaceresponse)
  * updateConditionalFormatRule [UpdateConditionalFormatRuleResponse](#updateconditionalformatruleresponse)
  * updateDeveloperMetadata [UpdateDeveloperMetadataResponse](#updatedevelopermetadataresponse)
  * updateEmbeddedObjectPosition [UpdateEmbeddedObjectPositionResponse](#updateembeddedobjectpositionresponse)

### RowData
* RowData `object`: Data about each cell in a row.
  * values `array`: The values in the row, one per column.
    * items [CellData](#celldata)

### SearchDeveloperMetadataRequest
* SearchDeveloperMetadataRequest `object`: A request to retrieve all developer metadata matching the set of specified
  * dataFilters `array`: The data filters describing the criteria used to determine which
    * items [DataFilter](#datafilter)

### SearchDeveloperMetadataResponse
* SearchDeveloperMetadataResponse `object`: A reply to a developer metadata search request.
  * matchedDeveloperMetadata `array`: The metadata matching the criteria of the search request.
    * items [MatchedDeveloperMetadata](#matcheddevelopermetadata)

### SetBasicFilterRequest
* SetBasicFilterRequest `object`: Sets the basic filter associated with a sheet.
  * filter [BasicFilter](#basicfilter)

### SetDataValidationRequest
* SetDataValidationRequest `object`: Sets a data validation rule to every cell in the range.
  * range [GridRange](#gridrange)
  * rule [DataValidationRule](#datavalidationrule)

### Sheet
* Sheet `object`: A sheet in a spreadsheet.
  * bandedRanges `array`: The banded (i.e. alternating colors) ranges on this sheet.
    * items [BandedRange](#bandedrange)
  * basicFilter [BasicFilter](#basicfilter)
  * charts `array`: The specifications of every chart on this sheet.
    * items [EmbeddedChart](#embeddedchart)
  * conditionalFormats `array`: The conditional format rules in this sheet.
    * items [ConditionalFormatRule](#conditionalformatrule)
  * data `array`: Data in the grid, if this is a grid sheet.
    * items [GridData](#griddata)
  * developerMetadata `array`: The developer metadata associated with a sheet.
    * items [DeveloperMetadata](#developermetadata)
  * filterViews `array`: The filter views in this sheet.
    * items [FilterView](#filterview)
  * merges `array`: The ranges that are merged together.
    * items [GridRange](#gridrange)
  * properties [SheetProperties](#sheetproperties)
  * protectedRanges `array`: The protected ranges in this sheet.
    * items [ProtectedRange](#protectedrange)

### SheetProperties
* SheetProperties `object`: Properties of a sheet.
  * gridProperties [GridProperties](#gridproperties)
  * hidden `boolean`: True if the sheet is hidden in the UI, false if it's visible.
  * index `integer`: The index of the sheet within the spreadsheet.
  * rightToLeft `boolean`: True if the sheet is an RTL sheet instead of an LTR sheet.
  * sheetId `integer`: The ID of the sheet. Must be non-negative.
  * sheetType `string` (values: SHEET_TYPE_UNSPECIFIED, GRID, OBJECT): The type of sheet. Defaults to GRID.
  * tabColor [Color](#color)
  * title `string`: The name of the sheet.

### SortRangeRequest
* SortRangeRequest `object`: Sorts data in rows based on a sort order per column.
  * range [GridRange](#gridrange)
  * sortSpecs `array`: The sort order per column. Later specifications are used when values
    * items [SortSpec](#sortspec)

### SortSpec
* SortSpec `object`: A sort order associated with a specific column or row.
  * dimensionIndex `integer`: The dimension the sort should be applied to.
  * sortOrder `string` (values: SORT_ORDER_UNSPECIFIED, ASCENDING, DESCENDING): The order data should be sorted.

### SourceAndDestination
* SourceAndDestination `object`: A combination of a source range and how to extend that source.
  * dimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The dimension that data should be filled into.
  * fillLength `integer`: The number of rows or columns that data should be filled into.
  * source [GridRange](#gridrange)

### Spreadsheet
* Spreadsheet `object`: Resource that represents a spreadsheet.
  * developerMetadata `array`: The developer metadata associated with a spreadsheet.
    * items [DeveloperMetadata](#developermetadata)
  * namedRanges `array`: The named ranges defined in a spreadsheet.
    * items [NamedRange](#namedrange)
  * properties [SpreadsheetProperties](#spreadsheetproperties)
  * sheets `array`: The sheets that are part of a spreadsheet.
    * items [Sheet](#sheet)
  * spreadsheetId `string`: The ID of the spreadsheet.
  * spreadsheetUrl `string`: The url of the spreadsheet.

### SpreadsheetProperties
* SpreadsheetProperties `object`: Properties of a spreadsheet.
  * autoRecalc `string` (values: RECALCULATION_INTERVAL_UNSPECIFIED, ON_CHANGE, MINUTE, HOUR): The amount of time to wait before volatile functions are recalculated.
  * defaultFormat [CellFormat](#cellformat)
  * iterativeCalculationSettings [IterativeCalculationSettings](#iterativecalculationsettings)
  * locale `string`: The locale of the spreadsheet in one of the following formats:
  * timeZone `string`: The time zone of the spreadsheet, in CLDR format such as
  * title `string`: The title of the spreadsheet.

### TextFormat
* TextFormat `object`: The format of a run of text in a cell.
  * bold `boolean`: True if the text is bold.
  * fontFamily `string`: The font family.
  * fontSize `integer`: The size of the font.
  * foregroundColor [Color](#color)
  * italic `boolean`: True if the text is italicized.
  * strikethrough `boolean`: True if the text has a strikethrough.
  * underline `boolean`: True if the text is underlined.

### TextFormatRun
* TextFormatRun `object`: A run of a text format. The format of this run continues until the start
  * format [TextFormat](#textformat)
  * startIndex `integer`: The character index where this run starts.

### TextPosition
* TextPosition `object`: Position settings for text.
  * horizontalAlignment `string` (values: HORIZONTAL_ALIGN_UNSPECIFIED, LEFT, CENTER, RIGHT): Horizontal alignment setting for the piece of text.

### TextRotation
* TextRotation `object`: The rotation applied to text in a cell.
  * angle `integer`: The angle between the standard orientation and the desired orientation.
  * vertical `boolean`: If true, text reads top to bottom, but the orientation of individual

### TextToColumnsRequest
* TextToColumnsRequest `object`: Splits a column of text into multiple columns,
  * delimiter `string`: The delimiter to use. Used only if delimiterType is
  * delimiterType `string` (values: DELIMITER_TYPE_UNSPECIFIED, COMMA, SEMICOLON, PERIOD, SPACE, CUSTOM): The delimiter type to use.
  * source [GridRange](#gridrange)

### UnmergeCellsRequest
* UnmergeCellsRequest `object`: Unmerges cells in the given range.
  * range [GridRange](#gridrange)

### UpdateBandingRequest
* UpdateBandingRequest `object`: Updates properties of the supplied banded range.
  * bandedRange [BandedRange](#bandedrange)
  * fields `string`: The fields that should be updated.  At least one field must be specified.

### UpdateBordersRequest
* UpdateBordersRequest `object`: Updates the borders of a range.
  * bottom [Border](#border)
  * innerHorizontal [Border](#border)
  * innerVertical [Border](#border)
  * left [Border](#border)
  * range [GridRange](#gridrange)
  * right [Border](#border)
  * top [Border](#border)

### UpdateCellsRequest
* UpdateCellsRequest `object`: Updates all cells in a range with new data.
  * fields `string`: The fields of CellData that should be updated.
  * range [GridRange](#gridrange)
  * rows `array`: The data to write.
    * items [RowData](#rowdata)
  * start [GridCoordinate](#gridcoordinate)

### UpdateChartSpecRequest
* UpdateChartSpecRequest `object`: Updates a chart's specifications.
  * chartId `integer`: The ID of the chart to update.
  * spec [ChartSpec](#chartspec)

### UpdateConditionalFormatRuleRequest
* UpdateConditionalFormatRuleRequest `object`: Updates a conditional format rule at the given index,
  * index `integer`: The zero-based index of the rule that should be replaced or moved.
  * newIndex `integer`: The zero-based new index the rule should end up at.
  * rule [ConditionalFormatRule](#conditionalformatrule)
  * sheetId `integer`: The sheet of the rule to move.  Required if new_index is set,

### UpdateConditionalFormatRuleResponse
* UpdateConditionalFormatRuleResponse `object`: The result of updating a conditional format rule.
  * newIndex `integer`: The index of the new rule.
  * newRule [ConditionalFormatRule](#conditionalformatrule)
  * oldIndex `integer`: The old index of the rule. Not set if a rule was replaced
  * oldRule [ConditionalFormatRule](#conditionalformatrule)

### UpdateDeveloperMetadataRequest
* UpdateDeveloperMetadataRequest `object`: A request to update properties of developer metadata.
  * dataFilters `array`: The filters matching the developer metadata entries to update.
    * items [DataFilter](#datafilter)
  * developerMetadata [DeveloperMetadata](#developermetadata)
  * fields `string`: The fields that should be updated.  At least one field must be specified.

### UpdateDeveloperMetadataResponse
* UpdateDeveloperMetadataResponse `object`: The response from updating developer metadata.
  * developerMetadata `array`: The updated developer metadata.
    * items [DeveloperMetadata](#developermetadata)

### UpdateDimensionPropertiesRequest
* UpdateDimensionPropertiesRequest `object`: Updates properties of dimensions within the specified range.
  * fields `string`: The fields that should be updated.  At least one field must be specified.
  * properties [DimensionProperties](#dimensionproperties)
  * range [DimensionRange](#dimensionrange)

### UpdateEmbeddedObjectPositionRequest
* UpdateEmbeddedObjectPositionRequest `object`: Update an embedded object's position (such as a moving or resizing a
  * fields `string`: The fields of OverlayPosition
  * newPosition [EmbeddedObjectPosition](#embeddedobjectposition)
  * objectId `integer`: The ID of the object to moved.

### UpdateEmbeddedObjectPositionResponse
* UpdateEmbeddedObjectPositionResponse `object`: The result of updating an embedded object's position.
  * position [EmbeddedObjectPosition](#embeddedobjectposition)

### UpdateFilterViewRequest
* UpdateFilterViewRequest `object`: Updates properties of the filter view.
  * fields `string`: The fields that should be updated.  At least one field must be specified.
  * filter [FilterView](#filterview)

### UpdateNamedRangeRequest
* UpdateNamedRangeRequest `object`: Updates properties of the named range with the specified
  * fields `string`: The fields that should be updated.  At least one field must be specified.
  * namedRange [NamedRange](#namedrange)

### UpdateProtectedRangeRequest
* UpdateProtectedRangeRequest `object`: Updates an existing protected range with the specified
  * fields `string`: The fields that should be updated.  At least one field must be specified.
  * protectedRange [ProtectedRange](#protectedrange)

### UpdateSheetPropertiesRequest
* UpdateSheetPropertiesRequest `object`: Updates properties of the sheet with the specified
  * fields `string`: The fields that should be updated.  At least one field must be specified.
  * properties [SheetProperties](#sheetproperties)

### UpdateSpreadsheetPropertiesRequest
* UpdateSpreadsheetPropertiesRequest `object`: Updates properties of a spreadsheet.
  * fields `string`: The fields that should be updated.  At least one field must be specified.
  * properties [SpreadsheetProperties](#spreadsheetproperties)

### UpdateValuesByDataFilterResponse
* UpdateValuesByDataFilterResponse `object`: The response when updating a range of values by a data filter in a
  * dataFilter [DataFilter](#datafilter)
  * updatedCells `integer`: The number of cells updated.
  * updatedColumns `integer`: The number of columns where at least one cell in the column was updated.
  * updatedData [ValueRange](#valuerange)
  * updatedRange `string`: The range (in A1 notation) that updates were applied to.
  * updatedRows `integer`: The number of rows where at least one cell in the row was updated.

### UpdateValuesResponse
* UpdateValuesResponse `object`: The response when updating a range of values in a spreadsheet.
  * spreadsheetId `string`: The spreadsheet the updates were applied to.
  * updatedCells `integer`: The number of cells updated.
  * updatedColumns `integer`: The number of columns where at least one cell in the column was updated.
  * updatedData [ValueRange](#valuerange)
  * updatedRange `string`: The range (in A1 notation) that updates were applied to.
  * updatedRows `integer`: The number of rows where at least one cell in the row was updated.

### ValueRange
* ValueRange `object`: Data within a range of the spreadsheet.
  * majorDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The major dimension of the values.
  * range `string`: The range the values cover, in A1 notation.
  * values `array`: The data that was read or to be written.  This is an array of arrays,
    * items `array`



