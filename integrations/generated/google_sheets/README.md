# @datafire/google_sheets

Client library for Google Sheets API

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

.then(data => {
  console.log(data);
});
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

### sheets.spreadsheets.create
Creates a spreadsheet, returning the newly created spreadsheet.


```js
google_sheets.sheets.spreadsheets.create({}, context)
```

#### Input
* input `object`
  * body [Spreadsheet](#spreadsheet)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Spreadsheet](#spreadsheet)

### sheets.spreadsheets.get
Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids will not be returned. You can include grid data one of two ways: * Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, it is recommended to retrieve only the specific fields of the spreadsheet that you want. To retrieve only subsets of the spreadsheet, use the ranges URL parameter. Multiple ranges can be specified. Limiting the range will return only the portions of the spreadsheet that intersect the requested ranges. Ranges are specified using A1 notation.


```js
google_sheets.sheets.spreadsheets.get({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The spreadsheet to request.
  * includeGridData `boolean`: True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
  * ranges `array`: The ranges to retrieve from the spreadsheet.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Spreadsheet](#spreadsheet)

### sheets.spreadsheets.developerMetadata.get
Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.


```js
google_sheets.sheets.spreadsheets.developerMetadata.get({
  "spreadsheetId": "",
  "metadataId": 0
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to retrieve metadata from.
  * metadataId **required** `integer`: The ID of the developer metadata to retrieve.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [DeveloperMetadata](#developermetadata)

### sheets.spreadsheets.developerMetadata.search
Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.


```js
google_sheets.sheets.spreadsheets.developerMetadata.search({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to retrieve metadata from.
  * body [SearchDeveloperMetadataRequest](#searchdevelopermetadatarequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SearchDeveloperMetadataResponse](#searchdevelopermetadataresponse)

### sheets.spreadsheets.sheets.copyTo
Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.


```js
google_sheets.sheets.spreadsheets.sheets.copyTo({
  "spreadsheetId": "",
  "sheetId": 0
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet containing the sheet to copy.
  * sheetId **required** `integer`: The ID of the sheet to copy.
  * body [CopySheetToAnotherSpreadsheetRequest](#copysheettoanotherspreadsheetrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [SheetProperties](#sheetproperties)

### sheets.spreadsheets.values.get
Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.


```js
google_sheets.sheets.spreadsheets.values.get({
  "spreadsheetId": "",
  "range": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to retrieve data from.
  * range **required** `string`: The A1 notation of the values to retrieve.
  * dateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
  * majorDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
  * valueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ValueRange](#valuerange)

### sheets.spreadsheets.values.update
Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.


```js
google_sheets.sheets.spreadsheets.values.update({
  "spreadsheetId": "",
  "range": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * range **required** `string`: The A1 notation of the values to update.
  * includeValuesInResponse `boolean`: Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).
  * responseDateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is DateTimeRenderOption.SERIAL_NUMBER.
  * responseValueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): Determines how values in the response should be rendered. The default render option is ValueRenderOption.FORMATTED_VALUE.
  * valueInputOption `string` (values: INPUT_VALUE_OPTION_UNSPECIFIED, RAW, USER_ENTERED): How the input data should be interpreted.
  * body [ValueRange](#valuerange)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [UpdateValuesResponse](#updatevaluesresponse)

### sheets.spreadsheets.values.append
Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.


```js
google_sheets.sheets.spreadsheets.values.append({
  "spreadsheetId": "",
  "range": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * range **required** `string`: The A1 notation of a range to search for a logical table of data. Values are appended after the last row of the table.
  * includeValuesInResponse `boolean`: Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.
  * insertDataOption `string` (values: OVERWRITE, INSERT_ROWS): How the input data should be inserted.
  * responseDateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
  * responseValueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): Determines how values in the response should be rendered. The default render option is ValueRenderOption.FORMATTED_VALUE.
  * valueInputOption `string` (values: INPUT_VALUE_OPTION_UNSPECIFIED, RAW, USER_ENTERED): How the input data should be interpreted.
  * body [ValueRange](#valuerange)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [AppendValuesResponse](#appendvaluesresponse)

### sheets.spreadsheets.values.clear
Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.


```js
google_sheets.sheets.spreadsheets.values.clear({
  "spreadsheetId": "",
  "range": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * range **required** `string`: The A1 notation of the values to clear.
  * body [ClearValuesRequest](#clearvaluesrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ClearValuesResponse](#clearvaluesresponse)

### sheets.spreadsheets.values.batchClear
Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.


```js
google_sheets.sheets.spreadsheets.values.batchClear({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * body [BatchClearValuesRequest](#batchclearvaluesrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [BatchClearValuesResponse](#batchclearvaluesresponse)

### sheets.spreadsheets.values.batchClearByDataFilter
Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.


```js
google_sheets.sheets.spreadsheets.values.batchClearByDataFilter({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * body [BatchClearValuesByDataFilterRequest](#batchclearvaluesbydatafilterrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [BatchClearValuesByDataFilterResponse](#batchclearvaluesbydatafilterresponse)

### sheets.spreadsheets.values.batchGet
Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.


```js
google_sheets.sheets.spreadsheets.values.batchGet({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to retrieve data from.
  * dateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
  * majorDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
  * ranges `array`: The A1 notation of the values to retrieve.
  * valueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [BatchGetValuesResponse](#batchgetvaluesresponse)

### sheets.spreadsheets.values.batchGetByDataFilter
Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.


```js
google_sheets.sheets.spreadsheets.values.batchGetByDataFilter({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to retrieve data from.
  * body [BatchGetValuesByDataFilterRequest](#batchgetvaluesbydatafilterrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [BatchGetValuesByDataFilterResponse](#batchgetvaluesbydatafilterresponse)

### sheets.spreadsheets.values.batchUpdate
Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.


```js
google_sheets.sheets.spreadsheets.values.batchUpdate({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * body [BatchUpdateValuesRequest](#batchupdatevaluesrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [BatchUpdateValuesResponse](#batchupdatevaluesresponse)

### sheets.spreadsheets.values.batchUpdateByDataFilter
Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.


```js
google_sheets.sheets.spreadsheets.values.batchUpdateByDataFilter({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The ID of the spreadsheet to update.
  * body [BatchUpdateValuesByDataFilterRequest](#batchupdatevaluesbydatafilterrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [BatchUpdateValuesByDataFilterResponse](#batchupdatevaluesbydatafilterresponse)

### sheets.spreadsheets.batchUpdate
Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.


```js
google_sheets.sheets.spreadsheets.batchUpdate({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The spreadsheet to apply the updates to.
  * body [BatchUpdateSpreadsheetRequest](#batchupdatespreadsheetrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [BatchUpdateSpreadsheetResponse](#batchupdatespreadsheetresponse)

### sheets.spreadsheets.getByDataFilter
Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters will return the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids will not be returned. You can include grid data one of two ways: * Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, it is recommended to retrieve only the specific fields of the spreadsheet that you want.


```js
google_sheets.sheets.spreadsheets.getByDataFilter({
  "spreadsheetId": ""
}, context)
```

#### Input
* input `object`
  * spreadsheetId **required** `string`: The spreadsheet to request.
  * body [GetSpreadsheetByDataFilterRequest](#getspreadsheetbydatafilterrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

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
* AddConditionalFormatRuleRequest `object`: Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.
  * index `integer`: The zero-based index where the rule should be inserted.
  * rule [ConditionalFormatRule](#conditionalformatrule)

### AddDataSourceRequest
* AddDataSourceRequest `object`: Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an execution is triggered to refresh the sheet to read data from the data source. The request requires an additional `bigquery.readonly` OAuth scope.
  * dataSource [DataSource](#datasource)

### AddDataSourceResponse
* AddDataSourceResponse `object`: The result of adding a data source.
  * dataExecutionStatus [DataExecutionStatus](#dataexecutionstatus)
  * dataSource [DataSource](#datasource)

### AddDimensionGroupRequest
* AddDimensionGroupRequest `object`: Creates a group over the specified range. If the requested range is a superset of the range of an existing group G, then the depth of G is incremented and this new group G' has the depth of that group. For example, a group [C:D, depth 1] + [B:E] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range is a subset of the range of an existing group G, then the depth of the new group G' becomes one greater than the depth of G. For example, a group [B:E, depth 1] + [C:D] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range starts before and ends within, or starts within and ends after, the range of an existing group G, then the range of the existing group G becomes the union of the ranges, and the new group G' has depth one greater than the depth of G and range as the intersection of the ranges. For example, a group [B:D, depth 1] + [C:E] results in groups [B:E, depth 1] and [C:D, depth 2].
  * range [DimensionRange](#dimensionrange)

### AddDimensionGroupResponse
* AddDimensionGroupResponse `object`: The result of adding a group.
  * dimensionGroups `array`: All groups of a dimension after adding a group to that dimension.
    * items [DimensionGroup](#dimensiongroup)

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
* AddSheetRequest `object`: Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet.
  * properties [SheetProperties](#sheetproperties)

### AddSheetResponse
* AddSheetResponse `object`: The result of adding a sheet.
  * properties [SheetProperties](#sheetproperties)

### AddSlicerRequest
* AddSlicerRequest `object`: Adds a slicer to a sheet in the spreadsheet.
  * slicer [Slicer](#slicer)

### AddSlicerResponse
* AddSlicerResponse `object`: The result of adding a slicer to a spreadsheet.
  * slicer [Slicer](#slicer)

### AppendCellsRequest
* AppendCellsRequest `object`: Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.
  * fields `string`: The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field.
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
  * tableRange `string`: The range (in A1 notation) of the table that values are being appended to (before the values were appended). Empty if no table was found.
  * updates [UpdateValuesResponse](#updatevaluesresponse)

### AutoFillRequest
* AutoFillRequest `object`: Fills in more data based on existing data.
  * range [GridRange](#gridrange)
  * sourceAndDestination [SourceAndDestination](#sourceanddestination)
  * useAlternateSeries `boolean`: True if we should generate data with the "alternate" series. This differs based on the type and amount of source data.

### AutoResizeDimensionsRequest
* AutoResizeDimensionsRequest `object`: Automatically resizes one or more dimensions based on the contents of the cells in that dimension.
  * dataSourceSheetDimensions [DataSourceSheetDimensionRange](#datasourcesheetdimensionrange)
  * dimensions [DimensionRange](#dimensionrange)

### BandedRange
* BandedRange `object`: A banded (alternating colors) range in a sheet.
  * bandedRangeId `integer`: The id of the banded range.
  * columnProperties [BandingProperties](#bandingproperties)
  * range [GridRange](#gridrange)
  * rowProperties [BandingProperties](#bandingproperties)

### BandingProperties
* BandingProperties `object`: Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set.
  * firstBandColor [Color](#color)
  * firstBandColorStyle [ColorStyle](#colorstyle)
  * footerColor [Color](#color)
  * footerColorStyle [ColorStyle](#colorstyle)
  * headerColor [Color](#color)
  * headerColorStyle [ColorStyle](#colorstyle)
  * secondBandColor [Color](#color)
  * secondBandColorStyle [ColorStyle](#colorstyle)

### BaselineValueFormat
* BaselineValueFormat `object`: Formatting options for baseline value.
  * comparisonType `string` (values: COMPARISON_TYPE_UNDEFINED, ABSOLUTE_DIFFERENCE, PERCENTAGE_DIFFERENCE): The comparison type of key value with baseline value.
  * description `string`: Description which is appended after the baseline value. This field is optional.
  * negativeColor [Color](#color)
  * negativeColorStyle [ColorStyle](#colorstyle)
  * position [TextPosition](#textposition)
  * positiveColor [Color](#color)
  * positiveColorStyle [ColorStyle](#colorstyle)
  * textFormat [TextFormat](#textformat)

### BasicChartAxis
* BasicChartAxis `object`: An axis of the chart. A chart may not have more than one axis per axis position.
  * format [TextFormat](#textformat)
  * position `string` (values: BASIC_CHART_AXIS_POSITION_UNSPECIFIED, BOTTOM_AXIS, LEFT_AXIS, RIGHT_AXIS): The position of this axis.
  * title `string`: The title of this axis. If set, this overrides any title inferred from headers of the data.
  * titleTextPosition [TextPosition](#textposition)
  * viewWindowOptions [ChartAxisViewWindowOptions](#chartaxisviewwindowoptions)

### BasicChartDomain
* BasicChartDomain `object`: The domain of a chart. For example, if charting stock prices over time, this would be the date.
  * domain [ChartData](#chartdata)
  * reversed `boolean`: True to reverse the order of the domain values (horizontal axis).

### BasicChartSeries
* BasicChartSeries `object`: A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the "Open Price", "High Price", "Low Price" and "Close Price".
  * color [Color](#color)
  * colorStyle [ColorStyle](#colorstyle)
  * dataLabel [DataLabel](#datalabel)
  * lineStyle [LineStyle](#linestyle)
  * pointStyle [PointStyle](#pointstyle)
  * series [ChartData](#chartdata)
  * styleOverrides `array`: Style override settings for series data points.
    * items [BasicSeriesDataPointStyleOverride](#basicseriesdatapointstyleoverride)
  * targetAxis `string` (values: BASIC_CHART_AXIS_POSITION_UNSPECIFIED, BOTTOM_AXIS, LEFT_AXIS, RIGHT_AXIS): The minor axis that will specify the range of values for this series. For example, if charting stocks over time, the "Volume" series may want to be pinned to the right with the prices pinned to the left, because the scale of trading volume is different than the scale of prices. It is an error to specify an axis that isn't a valid minor axis for the chart's type.
  * type `string` (values: BASIC_CHART_TYPE_UNSPECIFIED, BAR, LINE, AREA, COLUMN, SCATTER, COMBO, STEPPED_AREA): The type of this series. Valid only if the chartType is COMBO. Different types will change the way the series is visualized. Only LINE, AREA, and COLUMN are supported.

### BasicChartSpec
* BasicChartSpec `object`: The specification for a basic chart. See BasicChartType for the list of charts this supports.
  * axis `array`: The axis on the chart.
    * items [BasicChartAxis](#basicchartaxis)
  * chartType `string` (values: BASIC_CHART_TYPE_UNSPECIFIED, BAR, LINE, AREA, COLUMN, SCATTER, COMBO, STEPPED_AREA): The type of the chart.
  * compareMode `string` (values: BASIC_CHART_COMPARE_MODE_UNSPECIFIED, DATUM, CATEGORY): The behavior of tooltips and data highlighting when hovering on data and chart area.
  * domains `array`: The domain of data this is charting. Only a single domain is supported.
    * items [BasicChartDomain](#basicchartdomain)
  * headerCount `integer`: The number of rows or columns in the data that are "headers". If not set, Google Sheets will guess how many rows are headers based on the data. (Note that BasicChartAxis.title may override the axis title inferred from the header values.)
  * interpolateNulls `boolean`: If some values in a series are missing, gaps may appear in the chart (e.g, segments of lines in a line chart will be missing). To eliminate these gaps set this to true. Applies to Line, Area, and Combo charts.
  * legendPosition `string` (values: BASIC_CHART_LEGEND_POSITION_UNSPECIFIED, BOTTOM_LEGEND, LEFT_LEGEND, RIGHT_LEGEND, TOP_LEGEND, NO_LEGEND): The position of the chart legend.
  * lineSmoothing `boolean`: Gets whether all lines should be rendered smooth or straight by default. Applies to Line charts.
  * series `array`: The data this chart is visualizing.
    * items [BasicChartSeries](#basicchartseries)
  * stackedType `string` (values: BASIC_CHART_STACKED_TYPE_UNSPECIFIED, NOT_STACKED, STACKED, PERCENT_STACKED): The stacked type for charts that support vertical stacking. Applies to Area, Bar, Column, Combo, and Stepped Area charts.
  * threeDimensional `boolean`: True to make the chart 3D. Applies to Bar and Column charts.
  * totalDataLabel [DataLabel](#datalabel)

### BasicFilter
* BasicFilter `object`: The default filter associated with a sheet.
  * criteria `object`: The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs.
  * filterSpecs `array`: The filter criteria per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence.
    * items [FilterSpec](#filterspec)
  * range [GridRange](#gridrange)
  * sortSpecs `array`: The sort order per column. Later specifications are used when values are equal in the earlier specifications.
    * items [SortSpec](#sortspec)

### BasicSeriesDataPointStyleOverride
* BasicSeriesDataPointStyleOverride `object`: Style override settings for a single series data point.
  * color [Color](#color)
  * colorStyle [ColorStyle](#colorstyle)
  * index `integer`: Zero based index of the series data point.
  * pointStyle [PointStyle](#pointstyle)

### BatchClearValuesByDataFilterRequest
* BatchClearValuesByDataFilterRequest `object`: The request for clearing more than one range selected by a DataFilter in a spreadsheet.
  * dataFilters `array`: The DataFilters used to determine which ranges to clear.
    * items [DataFilter](#datafilter)

### BatchClearValuesByDataFilterResponse
* BatchClearValuesByDataFilterResponse `object`: The response when clearing a range of values selected with DataFilters in a spreadsheet.
  * clearedRanges `array`: The ranges that were cleared, in A1 notation. If the requests are for an unbounded range or a ranger larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits.
    * items `string`
  * spreadsheetId `string`: The spreadsheet the updates were applied to.

### BatchClearValuesRequest
* BatchClearValuesRequest `object`: The request for clearing more than one range of values in a spreadsheet.
  * ranges `array`: The ranges to clear, in A1 notation.
    * items `string`

### BatchClearValuesResponse
* BatchClearValuesResponse `object`: The response when clearing a range of values in a spreadsheet.
  * clearedRanges `array`: The ranges that were cleared, in A1 notation. If the requests are for an unbounded range or a ranger larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits.
    * items `string`
  * spreadsheetId `string`: The spreadsheet the updates were applied to.

### BatchGetValuesByDataFilterRequest
* BatchGetValuesByDataFilterRequest `object`: The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters.
  * dataFilters `array`: The data filters used to match the ranges of values to retrieve. Ranges that match any of the specified data filters are included in the response.
    * items [DataFilter](#datafilter)
  * dateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
  * majorDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then a request that selects that range and sets `majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas a request that sets `majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
  * valueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.

### BatchGetValuesByDataFilterResponse
* BatchGetValuesByDataFilterResponse `object`: The response when retrieving more than one range of values in a spreadsheet selected by DataFilters.
  * spreadsheetId `string`: The ID of the spreadsheet the data was retrieved from.
  * valueRanges `array`: The requested values with the list of data filters that matched them.
    * items [MatchedValueRange](#matchedvaluerange)

### BatchGetValuesResponse
* BatchGetValuesResponse `object`: The response when retrieving more than one range of values in a spreadsheet.
  * spreadsheetId `string`: The ID of the spreadsheet the data was retrieved from.
  * valueRanges `array`: The requested values. The order of the ValueRanges is the same as the order of the requested ranges.
    * items [ValueRange](#valuerange)

### BatchUpdateSpreadsheetRequest
* BatchUpdateSpreadsheetRequest `object`: The request for updating any aspect of a spreadsheet.
  * includeSpreadsheetInResponse `boolean`: Determines if the update response should include the spreadsheet resource.
  * requests `array`: A list of updates to apply to the spreadsheet. Requests will be applied in the order they are specified. If any request is not valid, no requests will be applied.
    * items [Request](#request)
  * responseIncludeGridData `boolean`: True if grid data should be returned. Meaningful only if include_spreadsheet_in_response is 'true'. This parameter is ignored if a field mask was set in the request.
  * responseRanges `array`: Limits the ranges included in the response spreadsheet. Meaningful only if include_spreadsheet_in_response is 'true'.
    * items `string`

### BatchUpdateSpreadsheetResponse
* BatchUpdateSpreadsheetResponse `object`: The reply for batch updating a spreadsheet.
  * replies `array`: The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.
    * items [Response](#response)
  * spreadsheetId `string`: The spreadsheet the updates were applied to.
  * updatedSpreadsheet [Spreadsheet](#spreadsheet)

### BatchUpdateValuesByDataFilterRequest
* BatchUpdateValuesByDataFilterRequest `object`: The request for updating more than one range of values in a spreadsheet.
  * data `array`: The new values to apply to the spreadsheet. If more than one range is matched by the specified DataFilter the specified values are applied to all of those ranges.
    * items [DataFilterValueRange](#datafiltervaluerange)
  * includeValuesInResponse `boolean`: Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).
  * responseDateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is DateTimeRenderOption.SERIAL_NUMBER.
  * responseValueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): Determines how values in the response should be rendered. The default render option is ValueRenderOption.FORMATTED_VALUE.
  * valueInputOption `string` (values: INPUT_VALUE_OPTION_UNSPECIFIED, RAW, USER_ENTERED): How the input data should be interpreted.

### BatchUpdateValuesByDataFilterResponse
* BatchUpdateValuesByDataFilterResponse `object`: The response when updating a range of values in a spreadsheet.
  * responses `array`: The response for each range updated.
    * items [UpdateValuesByDataFilterResponse](#updatevaluesbydatafilterresponse)
  * spreadsheetId `string`: The spreadsheet the updates were applied to.
  * totalUpdatedCells `integer`: The total number of cells updated.
  * totalUpdatedColumns `integer`: The total number of columns where at least one cell in the column was updated.
  * totalUpdatedRows `integer`: The total number of rows where at least one cell in the row was updated.
  * totalUpdatedSheets `integer`: The total number of sheets where at least one cell in the sheet was updated.

### BatchUpdateValuesRequest
* BatchUpdateValuesRequest `object`: The request for updating more than one range of values in a spreadsheet.
  * data `array`: The new values to apply to the spreadsheet.
    * items [ValueRange](#valuerange)
  * includeValuesInResponse `boolean`: Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).
  * responseDateTimeRenderOption `string` (values: SERIAL_NUMBER, FORMATTED_STRING): Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is DateTimeRenderOption.SERIAL_NUMBER.
  * responseValueRenderOption `string` (values: FORMATTED_VALUE, UNFORMATTED_VALUE, FORMULA): Determines how values in the response should be rendered. The default render option is ValueRenderOption.FORMATTED_VALUE.
  * valueInputOption `string` (values: INPUT_VALUE_OPTION_UNSPECIFIED, RAW, USER_ENTERED): How the input data should be interpreted.

### BatchUpdateValuesResponse
* BatchUpdateValuesResponse `object`: The response when updating a range of values in a spreadsheet.
  * responses `array`: One UpdateValuesResponse per requested range, in the same order as the requests appeared.
    * items [UpdateValuesResponse](#updatevaluesresponse)
  * spreadsheetId `string`: The spreadsheet the updates were applied to.
  * totalUpdatedCells `integer`: The total number of cells updated.
  * totalUpdatedColumns `integer`: The total number of columns where at least one cell in the column was updated.
  * totalUpdatedRows `integer`: The total number of rows where at least one cell in the row was updated.
  * totalUpdatedSheets `integer`: The total number of sheets where at least one cell in the sheet was updated.

### BigQueryDataSourceSpec
* BigQueryDataSourceSpec `object`: The specification of a BigQuery data source that's connected to a sheet.
  * projectId `string`: The ID of a BigQuery enabled GCP project with a billing account attached. For any queries executed against the data source, the project is charged.
  * querySpec [BigQueryQuerySpec](#bigqueryqueryspec)
  * tableSpec [BigQueryTableSpec](#bigquerytablespec)

### BigQueryQuerySpec
* BigQueryQuerySpec `object`: Specifies a custom BigQuery query.
  * rawQuery `string`: The raw query string.

### BigQueryTableSpec
* BigQueryTableSpec `object`: Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) is allowed.
  * datasetId `string`: The BigQuery dataset id.
  * tableId `string`: The BigQuery table id.
  * tableProjectId `string`: The ID of a BigQuery project the table belongs to. If not specified, the project_id is assumed.

### BooleanCondition
* BooleanCondition `object`: A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters.
  * type `string` (values: CONDITION_TYPE_UNSPECIFIED, NUMBER_GREATER, NUMBER_GREATER_THAN_EQ, NUMBER_LESS, NUMBER_LESS_THAN_EQ, NUMBER_EQ, NUMBER_NOT_EQ, NUMBER_BETWEEN, NUMBER_NOT_BETWEEN, TEXT_CONTAINS, TEXT_NOT_CONTAINS, TEXT_STARTS_WITH, TEXT_ENDS_WITH, TEXT_EQ, TEXT_IS_EMAIL, TEXT_IS_URL, DATE_EQ, DATE_BEFORE, DATE_AFTER, DATE_ON_OR_BEFORE, DATE_ON_OR_AFTER, DATE_BETWEEN, DATE_NOT_BETWEEN, DATE_IS_VALID, ONE_OF_RANGE, ONE_OF_LIST, BLANK, NOT_BLANK, CUSTOM_FORMULA, BOOLEAN, TEXT_NOT_EQ, DATE_NOT_EQ): The type of condition.
  * values `array`: The values of the condition. The number of supported values depends on the condition type. Some support zero values, others one or two values, and ConditionType.ONE_OF_LIST supports an arbitrary number of values.
    * items [ConditionValue](#conditionvalue)

### BooleanRule
* BooleanRule `object`: A rule that may or may not match, depending on the condition.
  * condition [BooleanCondition](#booleancondition)
  * format [CellFormat](#cellformat)

### Border
* Border `object`: A border along a cell.
  * color [Color](#color)
  * colorStyle [ColorStyle](#colorstyle)
  * style `string` (values: STYLE_UNSPECIFIED, DOTTED, DASHED, SOLID, SOLID_MEDIUM, SOLID_THICK, NONE, DOUBLE): The style of the border.
  * width `integer`: The width of the border, in pixels. Deprecated; the width is determined by the "style" field.

### Borders
* Borders `object`: The borders of the cell.
  * bottom [Border](#border)
  * left [Border](#border)
  * right [Border](#border)
  * top [Border](#border)

### BubbleChartSpec
* BubbleChartSpec `object`: A bubble chart.
  * bubbleBorderColor [Color](#color)
  * bubbleBorderColorStyle [ColorStyle](#colorstyle)
  * bubbleLabels [ChartData](#chartdata)
  * bubbleMaxRadiusSize `integer`: The max radius size of the bubbles, in pixels. If specified, the field must be a positive value.
  * bubbleMinRadiusSize `integer`: The minimum radius size of the bubbles, in pixels. If specific, the field must be a positive value.
  * bubbleOpacity `number`: The opacity of the bubbles between 0 and 1.0. 0 is fully transparent and 1 is fully opaque.
  * bubbleSizes [ChartData](#chartdata)
  * bubbleTextStyle [TextFormat](#textformat)
  * domain [ChartData](#chartdata)
  * groupIds [ChartData](#chartdata)
  * legendPosition `string` (values: BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED, BOTTOM_LEGEND, LEFT_LEGEND, RIGHT_LEGEND, TOP_LEGEND, NO_LEGEND, INSIDE_LEGEND): Where the legend of the chart should be drawn.
  * series [ChartData](#chartdata)

### CandlestickChartSpec
* CandlestickChartSpec `object`: A candlestick chart.
  * data `array`: The Candlestick chart data. Only one CandlestickData is supported.
    * items [CandlestickData](#candlestickdata)
  * domain [CandlestickDomain](#candlestickdomain)

### CandlestickData
* CandlestickData `object`: The Candlestick chart data, each containing the low, open, close, and high values for a series.
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
  * dataSourceFormula [DataSourceFormula](#datasourceformula)
  * dataSourceTable [DataSourceTable](#datasourcetable)
  * dataValidation [DataValidationRule](#datavalidationrule)
  * effectiveFormat [CellFormat](#cellformat)
  * effectiveValue [ExtendedValue](#extendedvalue)
  * formattedValue `string`: The formatted value of the cell. This is the value as it's shown to the user. This field is read-only.
  * hyperlink `string`: A hyperlink this cell points to, if any. If the cell contains multiple hyperlinks, this field will be empty. This field is read-only. To set it, use a `=HYPERLINK` formula in the userEnteredValue.formulaValue field.
  * note `string`: Any note on the cell.
  * pivotTable [PivotTable](#pivottable)
  * textFormatRuns `array`: Runs of rich text applied to subsections of the cell. Runs are only valid on user entered strings, not formulas, bools, or numbers. Properties of a run start at a specific index in the text and continue until the next run. Runs will inherit the properties of the cell unless explicitly changed. When writing, the new runs will overwrite any prior runs. When writing a new user_entered_value, previous runs are erased.
    * items [TextFormatRun](#textformatrun)
  * userEnteredFormat [CellFormat](#cellformat)
  * userEnteredValue [ExtendedValue](#extendedvalue)

### CellFormat
* CellFormat `object`: The format of a cell.
  * backgroundColor [Color](#color)
  * backgroundColorStyle [ColorStyle](#colorstyle)
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

### ChartAxisViewWindowOptions
* ChartAxisViewWindowOptions `object`: The options that define a "view window" for a chart (such as the visible values in an axis).
  * viewWindowMax `number`: The maximum numeric value to be shown in this view window. If unset, will automatically determine a maximum value that looks good for the data.
  * viewWindowMin `number`: The minimum numeric value to be shown in this view window. If unset, will automatically determine a minimum value that looks good for the data.
  * viewWindowMode `string` (values: DEFAULT_VIEW_WINDOW_MODE, VIEW_WINDOW_MODE_UNSUPPORTED, EXPLICIT, PRETTY): The view window's mode.

### ChartCustomNumberFormatOptions
* ChartCustomNumberFormatOptions `object`: Custom number formatting options for chart attributes.
  * prefix `string`: Custom prefix to be prepended to the chart attribute. This field is optional.
  * suffix `string`: Custom suffix to be appended to the chart attribute. This field is optional.

### ChartData
* ChartData `object`: The data included in a domain or series.
  * aggregateType `string` (values: CHART_AGGREGATE_TYPE_UNSPECIFIED, AVERAGE, COUNT, MAX, MEDIAN, MIN, SUM): The aggregation type for the series of a data source chart. Not supported for regular charts.
  * columnReference [DataSourceColumnReference](#datasourcecolumnreference)
  * groupRule [ChartGroupRule](#chartgrouprule)
  * sourceRange [ChartSourceRange](#chartsourcerange)

### ChartDateTimeRule
* ChartDateTimeRule `object`: Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values.
  * type `string` (values: CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED, SECOND, MINUTE, HOUR, HOUR_MINUTE, HOUR_MINUTE_AMPM, DAY_OF_WEEK, DAY_OF_YEAR, DAY_OF_MONTH, DAY_MONTH, MONTH, QUARTER, YEAR, YEAR_MONTH, YEAR_QUARTER, YEAR_MONTH_DAY): The type of date-time grouping to apply.

### ChartGroupRule
* ChartGroupRule `object`: An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type.
  * dateTimeRule [ChartDateTimeRule](#chartdatetimerule)
  * histogramRule [ChartHistogramRule](#charthistogramrule)

### ChartHistogramRule
* ChartHistogramRule `object`: Allows you to organize numeric values in a source data column into buckets of constant size.
  * intervalSize `number`: The size of the buckets that are created. Must be positive.
  * maxValue `number`: The maximum value at which items are placed into buckets. Values greater than the maximum are grouped into a single bucket. If omitted, it is determined by the maximum item value.
  * minValue `number`: The minimum value at which items are placed into buckets. Values that are less than the minimum are grouped into a single bucket. If omitted, it is determined by the minimum item value.

### ChartSourceRange
* ChartSourceRange `object`: Source ranges for a chart.
  * sources `array`: The ranges of data for a series or domain. Exactly one dimension must have a length of 1, and all sources in the list must have the same dimension with length 1. The domain (if it exists) & all series must have the same number of source ranges. If using more than one source range, then the source range at a given offset must be in order and contiguous across the domain and series. For example, these are valid configurations: domain sources: A1:A5 series1 sources: B1:B5 series2 sources: D6:D10 domain sources: A1:A5, C10:C12 series1 sources: B1:B5, D10:D12 series2 sources: C1:C5, E10:E12
    * items [GridRange](#gridrange)

### ChartSpec
* ChartSpec `object`: The specifications of a chart.
  * altText `string`: The alternative text that describes the chart. This is often used for accessibility.
  * backgroundColor [Color](#color)
  * backgroundColorStyle [ColorStyle](#colorstyle)
  * basicChart [BasicChartSpec](#basicchartspec)
  * bubbleChart [BubbleChartSpec](#bubblechartspec)
  * candlestickChart [CandlestickChartSpec](#candlestickchartspec)
  * dataSourceChartProperties [DataSourceChartProperties](#datasourcechartproperties)
  * filterSpecs `array`: The filters applied to the source data of the chart. Only supported for data source charts.
    * items [FilterSpec](#filterspec)
  * fontName `string`: The name of the font to use by default for all chart text (e.g. title, axis labels, legend). If a font is specified for a specific part of the chart it will override this font name.
  * hiddenDimensionStrategy `string` (values: CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED, SKIP_HIDDEN_ROWS_AND_COLUMNS, SKIP_HIDDEN_ROWS, SKIP_HIDDEN_COLUMNS, SHOW_ALL): Determines how the charts will use hidden rows or columns.
  * histogramChart [HistogramChartSpec](#histogramchartspec)
  * maximized `boolean`: True to make a chart fill the entire space in which it's rendered with minimum padding. False to use the default padding. (Not applicable to Geo and Org charts.)
  * orgChart [OrgChartSpec](#orgchartspec)
  * pieChart [PieChartSpec](#piechartspec)
  * scorecardChart [ScorecardChartSpec](#scorecardchartspec)
  * sortSpecs `array`: The order to sort the chart data by. Only a single sort spec is supported. Only supported for data source charts.
    * items [SortSpec](#sortspec)
  * subtitle `string`: The subtitle of the chart.
  * subtitleTextFormat [TextFormat](#textformat)
  * subtitleTextPosition [TextPosition](#textposition)
  * title `string`: The title of the chart.
  * titleTextFormat [TextFormat](#textformat)
  * titleTextPosition [TextPosition](#textposition)
  * treemapChart [TreemapChartSpec](#treemapchartspec)
  * waterfallChart [WaterfallChartSpec](#waterfallchartspec)

### ClearBasicFilterRequest
* ClearBasicFilterRequest `object`: Clears the basic filter, if any exists on the sheet.
  * sheetId `integer`: The sheet ID on which the basic filter should be cleared.

### ClearValuesRequest
* ClearValuesRequest `object`: The request for clearing a range of values in a spreadsheet.

### ClearValuesResponse
* ClearValuesResponse `object`: The response when clearing a range of values in a spreadsheet.
  * clearedRange `string`: The range (in A1 notation) that was cleared. (If the request was for an unbounded range or a ranger larger than the bounds of the sheet, this will be the actual range that was cleared, bounded to the sheet's limits.)
  * spreadsheetId `string`: The spreadsheet the updates were applied to.

### Color
* Color `object`: Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to/from color representations in various languages over compactness; for example, the fields of this representation can be trivially provided to the constructor of "java.awt.Color" in Java; it can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha" method in iOS; and, with just a little work, it can be easily formatted into a CSS "rgba()" string in JavaScript, as well. Note: this proto does not carry information about the absolute color space that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB, DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color space. Note: when color equality needs to be decided, implementations, unless documented otherwise, will treat two colors to be equal if all their red, green, blue and alpha values each differ by at most 1e-5. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor_(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor_ = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...
  * alpha `number`: The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (this color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is to be rendered as a solid color (as if the alpha value had been explicitly given with a value of 1.0).
  * blue `number`: The amount of blue in the color as a value in the interval [0, 1].
  * green `number`: The amount of green in the color as a value in the interval [0, 1].
  * red `number`: The amount of red in the color as a value in the interval [0, 1].

### ColorStyle
* ColorStyle `object`: A color value.
  * rgbColor [Color](#color)
  * themeColor `string` (values: THEME_COLOR_TYPE_UNSPECIFIED, TEXT, BACKGROUND, ACCENT1, ACCENT2, ACCENT3, ACCENT4, ACCENT5, ACCENT6, LINK): Theme color.

### ConditionValue
* ConditionValue `object`: The value of the condition.
  * relativeDate `string` (values: RELATIVE_DATE_UNSPECIFIED, PAST_YEAR, PAST_MONTH, PAST_WEEK, YESTERDAY, TODAY, TOMORROW): A relative date (based on the current date). Valid only if the type is DATE_BEFORE, DATE_AFTER, DATE_ON_OR_BEFORE or DATE_ON_OR_AFTER. Relative dates are not supported in data validation. They are supported only in conditional formatting and conditional filters.
  * userEnteredValue `string`: A value the condition is based on. The value is parsed as if the user typed into a cell. Formulas are supported (and must begin with an `=` or a '+').

### ConditionalFormatRule
* ConditionalFormatRule `object`: A rule describing a conditional format.
  * booleanRule [BooleanRule](#booleanrule)
  * gradientRule [GradientRule](#gradientrule)
  * ranges `array`: The ranges that are formatted if the condition is true. All the ranges must be on the same grid.
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
  * pasteType `string` (values: PASTE_NORMAL, PASTE_VALUES, PASTE_FORMAT, PASTE_NO_BORDERS, PASTE_FORMULA, PASTE_DATA_VALIDATION, PASTE_CONDITIONAL_FORMATTING): What kind of data to paste. All the source data will be cut, regardless of what is pasted.
  * source [GridRange](#gridrange)

### DataExecutionStatus
* DataExecutionStatus `object`: The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects.
  * errorCode `string` (values: DATA_EXECUTION_ERROR_CODE_UNSPECIFIED, TIMED_OUT, TOO_MANY_ROWS, TOO_MANY_CELLS, ENGINE, PARAMETER_INVALID, UNSUPPORTED_DATA_TYPE, DUPLICATE_COLUMN_NAMES, INTERRUPTED, CONCURRENT_QUERY, OTHER, TOO_MANY_CHARS_PER_CELL, DATA_NOT_FOUND, PERMISSION_DENIED, MISSING_COLUMN_ALIAS, OBJECT_NOT_FOUND, OBJECT_IN_ERROR_STATE, OBJECT_SPEC_INVALID): The error code.
  * errorMessage `string`: The error message, which may be empty.
  * lastRefreshTime `string`: Gets the time the data last successfully refreshed.
  * state `string` (values: DATA_EXECUTION_STATE_UNSPECIFIED, NOT_STARTED, RUNNING, SUCCEEDED, FAILED): The state of the data execution.

### DataFilter
* DataFilter `object`: Filter that describes what data should be selected or returned from a request.
  * a1Range `string`: Selects data that matches the specified A1 range.
  * developerMetadataLookup [DeveloperMetadataLookup](#developermetadatalookup)
  * gridRange [GridRange](#gridrange)

### DataFilterValueRange
* DataFilterValueRange `object`: A range of values whose location is specified by a DataFilter.
  * dataFilter [DataFilter](#datafilter)
  * majorDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The major dimension of the values.
  * values `array`: The data to be written. If the provided values exceed any of the ranges matched by the data filter then the request fails. If the provided values are less than the matched ranges only the specified values are written, existing values in the matched ranges remain unaffected.
    * items `array`

### DataLabel
* DataLabel `object`: Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.
  * customLabelData [ChartData](#chartdata)
  * placement `string` (values: DATA_LABEL_PLACEMENT_UNSPECIFIED, CENTER, LEFT, RIGHT, ABOVE, BELOW, INSIDE_END, INSIDE_BASE, OUTSIDE_END): The placement of the data label relative to the labeled data.
  * textFormat [TextFormat](#textformat)
  * type `string` (values: DATA_LABEL_TYPE_UNSPECIFIED, NONE, DATA, CUSTOM): The type of the data label.

### DataSource
* DataSource `object`: Information about an external data source in the spreadsheet.
  * calculatedColumns `array`: All calculated columns in the data source.
    * items [DataSourceColumn](#datasourcecolumn)
  * dataSourceId `string`: The spreadsheet-scoped unique ID that identifies the data source. Example: 1080547365.
  * sheetId `integer`: The ID of the Sheet connected with the data source. The field cannot be changed once set. When creating a data source, an associated DATA_SOURCE sheet is also created, if the field is not specified, the ID of the created sheet will be randomly generated.
  * spec [DataSourceSpec](#datasourcespec)

### DataSourceChartProperties
* DataSourceChartProperties `object`: Properties of a data source chart.
  * dataExecutionStatus [DataExecutionStatus](#dataexecutionstatus)
  * dataSourceId `string`: ID of the data source that the chart is associated with.

### DataSourceColumn
* DataSourceColumn `object`: A column in a data source.
  * formula `string`: The formula of the calculated column.
  * reference [DataSourceColumnReference](#datasourcecolumnreference)

### DataSourceColumnReference
* DataSourceColumnReference `object`: An unique identifier that references a data source column.
  * name `string`: The display name of the column. It should be unique within a data source.

### DataSourceFormula
* DataSourceFormula `object`: A data source formula.
  * dataExecutionStatus [DataExecutionStatus](#dataexecutionstatus)
  * dataSourceId `string`: The ID of the data source the formula is associated with.

### DataSourceObjectReference
* DataSourceObjectReference `object`: Reference to a data source object.
  * chartId `integer`: References to a data source chart.
  * dataSourceFormulaCell [GridCoordinate](#gridcoordinate)
  * dataSourcePivotTableAnchorCell [GridCoordinate](#gridcoordinate)
  * dataSourceTableAnchorCell [GridCoordinate](#gridcoordinate)
  * sheetId `string`: References to a DATA_SOURCE sheet.

### DataSourceObjectReferences
* DataSourceObjectReferences `object`: A list of references to data source objects.
  * references `array`: The references.
    * items [DataSourceObjectReference](#datasourceobjectreference)

### DataSourceParameter
* DataSourceParameter `object`: A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query.
  * name `string`: Named parameter. Must be a legitimate identifier for the DataSource that supports it. For example, [BigQuery identifier](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#identifiers).
  * namedRangeId `string`: ID of a NamedRange. Its size must be 1x1.
  * range [GridRange](#gridrange)

### DataSourceRefreshDailySchedule
* DataSourceRefreshDailySchedule `object`: A schedule for data to refresh every day in a given time interval.
  * startTime [TimeOfDay](#timeofday)

### DataSourceRefreshMonthlySchedule
* DataSourceRefreshMonthlySchedule `object`: A monthly schedule for data to refresh on specific days in the month in a given time interval.
  * daysOfMonth `array`: Days of the month to refresh. Only 1-28 are supported, mapping to the 1st to the 28th day. At lesat one day must be specified.
    * items `integer`
  * startTime [TimeOfDay](#timeofday)

### DataSourceRefreshSchedule
* DataSourceRefreshSchedule `object`: Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8am , the refresh will take place between 8am and 12pm every day.
  * dailySchedule [DataSourceRefreshDailySchedule](#datasourcerefreshdailyschedule)
  * enabled `boolean`: True if the refresh schedule is enabled, or false otherwise.
  * monthlySchedule [DataSourceRefreshMonthlySchedule](#datasourcerefreshmonthlyschedule)
  * nextRun [Interval](#interval)
  * refreshScope `string` (values: DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED, ALL_DATA_SOURCES): The scope of the refresh. Must be ALL_DATA_SOURCES.
  * weeklySchedule [DataSourceRefreshWeeklySchedule](#datasourcerefreshweeklyschedule)

### DataSourceRefreshWeeklySchedule
* DataSourceRefreshWeeklySchedule `object`: A weekly schedule for data to refresh on specific days in a given time interval.
  * daysOfWeek `array`: Days of the week to refresh. At least one day must be specified.
    * items `string` (values: DAY_OF_WEEK_UNSPECIFIED, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY)
  * startTime [TimeOfDay](#timeofday)

### DataSourceSheetDimensionRange
* DataSourceSheetDimensionRange `object`: A range along a single dimension on a DATA_SOURCE sheet.
  * columnReferences `array`: The columns on the data source sheet.
    * items [DataSourceColumnReference](#datasourcecolumnreference)
  * sheetId `integer`: The ID of the data source sheet the range is on.

### DataSourceSheetProperties
* DataSourceSheetProperties `object`: Additional properties of a DATA_SOURCE sheet.
  * columns `array`: The columns displayed on the sheet, corresponding to the values in RowData.
    * items [DataSourceColumn](#datasourcecolumn)
  * dataExecutionStatus [DataExecutionStatus](#dataexecutionstatus)
  * dataSourceId `string`: ID of the DataSource the sheet is connected to.

### DataSourceSpec
* DataSourceSpec `object`: This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.
  * parameters `array`: The parameters of the data source, used when querying the data source.
    * items [DataSourceParameter](#datasourceparameter)
  * bigQuery [BigQueryDataSourceSpec](#bigquerydatasourcespec)

### DataSourceTable
* DataSourceTable `object`: A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor.
  * columnSelectionType `string` (values: DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED, SELECTED, SYNC_ALL): The type to select columns for the data source table. Defaults to SELECTED.
  * columns `array`: Columns selected for the data source table. The column_selection_type must be SELECTED.
    * items [DataSourceColumnReference](#datasourcecolumnreference)
  * dataExecutionStatus [DataExecutionStatus](#dataexecutionstatus)
  * dataSourceId `string`: The ID of the data source the data source table is associated with.
  * filterSpecs `array`: Filter specifications in the data source table.
    * items [FilterSpec](#filterspec)
  * rowLimit `integer`: The limit of rows to return. If not set, a default limit is applied. Please refer to the Sheets editor for the default and max limit.
  * sortSpecs `array`: Sort specifications in the data source table. The result of the data source table is sorted based on the sort specifications in order.
    * items [SortSpec](#sortspec)

### DataValidationRule
* DataValidationRule `object`: A data validation rule.
  * condition [BooleanCondition](#booleancondition)
  * inputMessage `string`: A message to show the user when adding data to the cell.
  * showCustomUi `boolean`: True if the UI should be customized based on the kind of condition. If true, "List" conditions will show a dropdown.
  * strict `boolean`: True if invalid data should be rejected.

### DateTimeRule
* DateTimeRule `object`: Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ | Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 | ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ | 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+
  * type `string` (values: DATE_TIME_RULE_TYPE_UNSPECIFIED, SECOND, MINUTE, HOUR, HOUR_MINUTE, HOUR_MINUTE_AMPM, DAY_OF_WEEK, DAY_OF_YEAR, DAY_OF_MONTH, DAY_MONTH, MONTH, QUARTER, YEAR, YEAR_MONTH, YEAR_QUARTER, YEAR_MONTH_DAY): The type of date-time grouping to apply.

### DeleteBandingRequest
* DeleteBandingRequest `object`: Removes the banded range with the given ID from the spreadsheet.
  * bandedRangeId `integer`: The ID of the banded range to delete.

### DeleteConditionalFormatRuleRequest
* DeleteConditionalFormatRuleRequest `object`: Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.
  * index `integer`: The zero-based index of the rule to be deleted.
  * sheetId `integer`: The sheet the rule is being deleted from.

### DeleteConditionalFormatRuleResponse
* DeleteConditionalFormatRuleResponse `object`: The result of deleting a conditional format rule.
  * rule [ConditionalFormatRule](#conditionalformatrule)

### DeleteDataSourceRequest
* DeleteDataSourceRequest `object`: Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects.
  * dataSourceId `string`: The ID of the data source to delete.

### DeleteDeveloperMetadataRequest
* DeleteDeveloperMetadataRequest `object`: A request to delete developer metadata.
  * dataFilter [DataFilter](#datafilter)

### DeleteDeveloperMetadataResponse
* DeleteDeveloperMetadataResponse `object`: The response from deleting developer metadata.
  * deletedDeveloperMetadata `array`: The metadata that was deleted.
    * items [DeveloperMetadata](#developermetadata)

### DeleteDimensionGroupRequest
* DeleteDimensionGroupRequest `object`: Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C.
  * range [DimensionRange](#dimensionrange)

### DeleteDimensionGroupResponse
* DeleteDimensionGroupResponse `object`: The result of deleting a group.
  * dimensionGroups `array`: All groups of a dimension after deleting a group from that dimension.
    * items [DimensionGroup](#dimensiongroup)

### DeleteDimensionRequest
* DeleteDimensionRequest `object`: Deletes the dimensions from the sheet.
  * range [DimensionRange](#dimensionrange)

### DeleteDuplicatesRequest
* DeleteDuplicatesRequest `object`: Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This request also removes duplicate rows hidden from view (for example, due to a filter). When removing duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range. Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each other in the range.
  * comparisonColumns `array`: The columns in the range to analyze for duplicate values. If no columns are selected then all columns are analyzed for duplicates.
    * items [DimensionRange](#dimensionrange)
  * range [GridRange](#gridrange)

### DeleteDuplicatesResponse
* DeleteDuplicatesResponse `object`: The result of removing duplicates in a range.
  * duplicatesRemovedCount `integer`: The number of duplicate rows removed.

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
  * shiftDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The dimension from which deleted cells will be replaced with. If ROWS, existing cells will be shifted upward to replace the deleted cells. If COLUMNS, existing cells will be shifted left to replace the deleted cells.

### DeleteSheetRequest
* DeleteSheetRequest `object`: Deletes the requested sheet.
  * sheetId `integer`: The ID of the sheet to delete. If the sheet is of SheetType.DATA_SOURCE type, the associated DataSource is also deleted.

### DeveloperMetadata
* DeveloperMetadata `object`: Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too.
  * location [DeveloperMetadataLocation](#developermetadatalocation)
  * metadataId `integer`: The spreadsheet-scoped unique ID that identifies the metadata. IDs may be specified when metadata is created, otherwise one will be randomly generated and assigned. Must be positive.
  * metadataKey `string`: The metadata key. There may be multiple metadata in a spreadsheet with the same key. Developer metadata must always have a key specified.
  * metadataValue `string`: Data associated with the metadata's key.
  * visibility `string` (values: DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED, DOCUMENT, PROJECT): The metadata visibility. Developer metadata must always have a visibility specified.

### DeveloperMetadataLocation
* DeveloperMetadataLocation `object`: A location where metadata may be associated in a spreadsheet.
  * dimensionRange [DimensionRange](#dimensionrange)
  * locationType `string` (values: DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED, ROW, COLUMN, SHEET, SPREADSHEET): The type of location this object represents. This field is read-only.
  * sheetId `integer`: The ID of the sheet when metadata is associated with an entire sheet.
  * spreadsheet `boolean`: True when metadata is associated with an entire spreadsheet.

### DeveloperMetadataLookup
* DeveloperMetadataLookup `object`: Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified.
  * locationMatchingStrategy `string` (values: DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED, EXACT_LOCATION, INTERSECTING_LOCATION): Determines how this lookup matches the location. If this field is specified as EXACT, only developer metadata associated on the exact location specified is matched. If this field is specified to INTERSECTING, developer metadata associated on intersecting locations is also matched. If left unspecified, this field assumes a default value of INTERSECTING. If this field is specified, a metadataLocation must also be specified.
  * locationType `string` (values: DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED, ROW, COLUMN, SHEET, SPREADSHEET): Limits the selected developer metadata to those entries which are associated with locations of the specified type. For example, when this field is specified as ROW this lookup only considers developer metadata associated on rows. If the field is left unspecified, all location types are considered. This field cannot be specified as SPREADSHEET when the locationMatchingStrategy is specified as INTERSECTING or when the metadataLocation is specified as a non-spreadsheet location: spreadsheet metadata cannot intersect any other developer metadata location. This field also must be left unspecified when the locationMatchingStrategy is specified as EXACT.
  * metadataId `integer`: Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_id.
  * metadataKey `string`: Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_key.
  * metadataLocation [DeveloperMetadataLocation](#developermetadatalocation)
  * metadataValue `string`: Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_value.
  * visibility `string` (values: DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED, DOCUMENT, PROJECT): Limits the selected developer metadata to that which has a matching DeveloperMetadata.visibility. If left unspecified, all developer metadata visibile to the requesting project is considered.

### DimensionGroup
* DimensionGroup `object`: A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet.
  * collapsed `boolean`: This field is true if this group is collapsed. A collapsed group remains collapsed if an overlapping group at a shallower depth is expanded. A true value does not imply that all dimensions within the group are hidden, since a dimension's visibility can change independently from this group property. However, when this property is updated, all dimensions within it are set to hidden if this field is true, or set to visible if this field is false.
  * depth `integer`: The depth of the group, representing how many groups have a range that wholly contains the range of this group.
  * range [DimensionRange](#dimensionrange)

### DimensionProperties
* DimensionProperties `object`: Properties about a dimension.
  * dataSourceColumnReference [DataSourceColumnReference](#datasourcecolumnreference)
  * developerMetadata `array`: The developer metadata associated with a single row or column.
    * items [DeveloperMetadata](#developermetadata)
  * hiddenByFilter `boolean`: True if this dimension is being filtered. This field is read-only.
  * hiddenByUser `boolean`: True if this dimension is explicitly hidden.
  * pixelSize `integer`: The height (if a row) or width (if a column) of the dimension in pixels.

### DimensionRange
* DimensionRange `object`: A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
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
  * insertSheetIndex `integer`: The zero-based index where the new sheet should be inserted. The index of all sheets after this are incremented.
  * newSheetId `integer`: If set, the ID of the new sheet. If not set, an ID is chosen. If set, the ID must not conflict with any existing sheet ID. If set, it must be non-negative.
  * newSheetName `string`: The name of the new sheet. If empty, a new name is chosen for you.
  * sourceSheetId `integer`: The sheet to duplicate. If the source sheet is of DATA_SOURCE type, its backing DataSource is also duplicated and associated with the new copy of the sheet. No data execution is triggered, the grid data of this sheet is also copied over but only available after the batch request completes.

### DuplicateSheetResponse
* DuplicateSheetResponse `object`: The result of duplicating a sheet.
  * properties [SheetProperties](#sheetproperties)

### Editors
* Editors `object`: The editors of a protected range.
  * domainUsersCanEdit `boolean`: True if anyone in the document's domain has edit access to the protected range. Domain protection is only supported on documents within a domain.
  * groups `array`: The email addresses of groups with edit access to the protected range.
    * items `string`
  * users `array`: The email addresses of users with edit access to the protected range.
    * items `string`

### EmbeddedChart
* EmbeddedChart `object`: A chart embedded in a sheet.
  * border [EmbeddedObjectBorder](#embeddedobjectborder)
  * chartId `integer`: The ID of the chart.
  * position [EmbeddedObjectPosition](#embeddedobjectposition)
  * spec [ChartSpec](#chartspec)

### EmbeddedObjectBorder
* EmbeddedObjectBorder `object`: A border along an embedded object.
  * color [Color](#color)
  * colorStyle [ColorStyle](#colorstyle)

### EmbeddedObjectPosition
* EmbeddedObjectPosition `object`: The position of an embedded object such as a chart.
  * newSheet `boolean`: If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing.
  * overlayPosition [OverlayPosition](#overlayposition)
  * sheetId `integer`: The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative.

### ErrorValue
* ErrorValue `object`: An error in a cell.
  * message `string`: A message with more information about the error (in the spreadsheet's locale).
  * type `string` (values: ERROR_TYPE_UNSPECIFIED, ERROR, NULL_VALUE, DIVIDE_BY_ZERO, VALUE, REF, NAME, NUM, N_A, LOADING): The type of error.

### ExtendedValue
* ExtendedValue `object`: The kinds of value that a cell in a spreadsheet can have.
  * boolValue `boolean`: Represents a boolean value.
  * errorValue [ErrorValue](#errorvalue)
  * formulaValue `string`: Represents a formula.
  * numberValue `number`: Represents a double value. Note: Dates, Times and DateTimes are represented as doubles in "serial number" format.
  * stringValue `string`: Represents a string value. Leading single quotes are not included. For example, if the user typed `'123` into the UI, this would be represented as a `stringValue` of `"123"`.

### FilterCriteria
* FilterCriteria `object`: Criteria for showing/hiding rows in a filter or filter view.
  * condition [BooleanCondition](#booleancondition)
  * hiddenValues `array`: Values that should be hidden.
    * items `string`
  * visibleBackgroundColor [Color](#color)
  * visibleBackgroundColorStyle [ColorStyle](#colorstyle)
  * visibleForegroundColor [Color](#color)
  * visibleForegroundColorStyle [ColorStyle](#colorstyle)

### FilterSpec
* FilterSpec `object`: The filter criteria associated with a specific column.
  * columnIndex `integer`: The column index.
  * dataSourceColumnReference [DataSourceColumnReference](#datasourcecolumnreference)
  * filterCriteria [FilterCriteria](#filtercriteria)

### FilterView
* FilterView `object`: A filter view.
  * criteria `object`: The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs.
  * filterSpecs `array`: The filter criteria for showing/hiding values per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence.
    * items [FilterSpec](#filterspec)
  * filterViewId `integer`: The ID of the filter view.
  * namedRangeId `string`: The named range this filter view is backed by, if any. When writing, only one of range or named_range_id may be set.
  * range [GridRange](#gridrange)
  * sortSpecs `array`: The sort order per column. Later specifications are used when values are equal in the earlier specifications.
    * items [SortSpec](#sortspec)
  * title `string`: The name of the filter view.

### FindReplaceRequest
* FindReplaceRequest `object`: Finds and replaces data in cells over a range, sheet, or all sheets.
  * allSheets `boolean`: True to find/replace over all sheets.
  * find `string`: The value to search.
  * includeFormulas `boolean`: True if the search should include cells with formulas. False to skip cells with formulas.
  * matchCase `boolean`: True if the search is case sensitive.
  * matchEntireCell `boolean`: True if the find value should match the entire cell.
  * range [GridRange](#gridrange)
  * replacement `string`: The value to use as the replacement.
  * searchByRegex `boolean`: True if the find value is a regex. The regular expression and replacement should follow Java regex rules at https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html. The replacement string is allowed to refer to capturing groups. For example, if one cell has the contents `"Google Sheets"` and another has `"Google Docs"`, then searching for `"o.* (.*)"` with a replacement of `"$1 Rocks"` would change the contents of the cells to `"GSheets Rocks"` and `"GDocs Rocks"` respectively.
  * sheetId `integer`: The sheet to find/replace over.

### FindReplaceResponse
* FindReplaceResponse `object`: The result of the find/replace.
  * formulasChanged `integer`: The number of formula cells changed.
  * occurrencesChanged `integer`: The number of occurrences (possibly multiple within a cell) changed. For example, if replacing `"e"` with `"o"` in `"Google Sheets"`, this would be `"3"` because `"Google Sheets"` -> `"Googlo Shoots"`.
  * rowsChanged `integer`: The number of rows changed.
  * sheetsChanged `integer`: The number of sheets changed.
  * valuesChanged `integer`: The number of non-formula cells changed.

### GetSpreadsheetByDataFilterRequest
* GetSpreadsheetByDataFilterRequest `object`: The request for retrieving a Spreadsheet.
  * dataFilters `array`: The DataFilters used to select which ranges to retrieve from the spreadsheet.
    * items [DataFilter](#datafilter)
  * includeGridData `boolean`: True if grid data should be returned. This parameter is ignored if a field mask was set in the request.

### GradientRule
* GradientRule `object`: A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.
  * maxpoint [InterpolationPoint](#interpolationpoint)
  * midpoint [InterpolationPoint](#interpolationpoint)
  * minpoint [InterpolationPoint](#interpolationpoint)

### GridCoordinate
* GridCoordinate `object`: A coordinate in a sheet. All indexes are zero-based.
  * columnIndex `integer`: The column index of the coordinate.
  * rowIndex `integer`: The row index of the coordinate.
  * sheetId `integer`: The sheet this coordinate is on.

### GridData
* GridData `object`: Data in the grid, as well as metadata about the dimensions.
  * columnMetadata `array`: Metadata about the requested columns in the grid, starting with the column in start_column.
    * items [DimensionProperties](#dimensionproperties)
  * rowData `array`: The data in the grid, one entry per row, starting with the row in startRow. The values in RowData will correspond to columns starting at start_column.
    * items [RowData](#rowdata)
  * rowMetadata `array`: Metadata about the requested rows in the grid, starting with the row in start_row.
    * items [DimensionProperties](#dimensionproperties)
  * startColumn `integer`: The first column this GridData refers to, zero-based.
  * startRow `integer`: The first row this GridData refers to, zero-based.

### GridProperties
* GridProperties `object`: Properties of a grid.
  * columnCount `integer`: The number of columns in the grid.
  * columnGroupControlAfter `boolean`: True if the column grouping control toggle is shown after the group.
  * frozenColumnCount `integer`: The number of columns that are frozen in the grid.
  * frozenRowCount `integer`: The number of rows that are frozen in the grid.
  * hideGridlines `boolean`: True if the grid isn't showing gridlines in the UI.
  * rowCount `integer`: The number of rows in the grid.
  * rowGroupControlAfter `boolean`: True if the row grouping control toggle is shown after the group.

### GridRange
* GridRange `object`: A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 0, then: `Sheet1!A1:A1 == sheet_id: 0, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 0, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 0, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 0, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id:0` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.
  * endColumnIndex `integer`: The end column (exclusive) of the range, or not set if unbounded.
  * endRowIndex `integer`: The end row (exclusive) of the range, or not set if unbounded.
  * sheetId `integer`: The sheet this range is on.
  * startColumnIndex `integer`: The start column (inclusive) of the range, or not set if unbounded.
  * startRowIndex `integer`: The start row (inclusive) of the range, or not set if unbounded.

### HistogramChartSpec
* HistogramChartSpec `object`: A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly.
  * bucketSize `number`: By default the bucket size (the range of values stacked in a single column) is chosen automatically, but it may be overridden here. E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc. Cannot be negative. This field is optional.
  * legendPosition `string` (values: HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED, BOTTOM_LEGEND, LEFT_LEGEND, RIGHT_LEGEND, TOP_LEGEND, NO_LEGEND, INSIDE_LEGEND): The position of the chart legend.
  * outlierPercentile `number`: The outlier percentile is used to ensure that outliers do not adversely affect the calculation of bucket sizes. For example, setting an outlier percentile of 0.05 indicates that the top and bottom 5% of values when calculating buckets. The values are still included in the chart, they will be added to the first or last buckets instead of their own buckets. Must be between 0.0 and 0.5.
  * series `array`: The series for a histogram may be either a single series of values to be bucketed or multiple series, each of the same length, containing the name of the series followed by the values to be bucketed for that series.
    * items [HistogramSeries](#histogramseries)
  * showItemDividers `boolean`: Whether horizontal divider lines should be displayed between items in each column.

### HistogramRule
* HistogramRule `object`: Allows you to organize the numeric values in a source data column into buckets of a constant size. All values from HistogramRule.start to HistogramRule.end are placed into groups of size HistogramRule.interval. In addition, all values below HistogramRule.start are placed in one group, and all values above HistogramRule.end are placed in another. Only HistogramRule.interval is required, though if HistogramRule.start and HistogramRule.end are both provided, HistogramRule.start must be less than HistogramRule.end. For example, a pivot table showing average purchase amount by age that has 50+ rows: +-----+-------------------+ | Age | AVERAGE of Amount | +-----+-------------------+ | 16 | $27.13 | | 17 | $5.24 | | 18 | $20.15 | ... +-----+-------------------+ could be turned into a pivot table that looks like the one below by applying a histogram group rule with a HistogramRule.start of 25, an HistogramRule.interval of 20, and an HistogramRule.end of 65. +-------------+-------------------+ | Grouped Age | AVERAGE of Amount | +-------------+-------------------+ | < 25 | $19.34 | | 25-45 | $31.43 | | 45-65 | $35.87 | | > 65 | $27.55 | +-------------+-------------------+ | Grand Total | $29.12 | +-------------+-------------------+
  * end `number`: The maximum value at which items are placed into buckets of constant size. Values above end are lumped into a single bucket. This field is optional.
  * interval `number`: The size of the buckets that are created. Must be positive.
  * start `number`: The minimum value at which items are placed into buckets of constant size. Values below start are lumped into a single bucket. This field is optional.

### HistogramSeries
* HistogramSeries `object`: A histogram series containing the series color and data.
  * barColor [Color](#color)
  * barColorStyle [ColorStyle](#colorstyle)
  * data [ChartData](#chartdata)

### InsertDimensionRequest
* InsertDimensionRequest `object`: Inserts rows or columns in a sheet at a particular index.
  * inheritFromBefore `boolean`: Whether dimension properties should be extended from the dimensions before or after the newly inserted dimensions. True to inherit from the dimensions before (in which case the start index must be greater than 0), and false to inherit from the dimensions after. For example, if row index 0 has red background and row index 1 has a green background, then inserting 2 rows at index 1 can inherit either the green or red background. If `inheritFromBefore` is true, the two new rows will be red (because the row before the insertion point was red), whereas if `inheritFromBefore` is false, the two new rows will be green (because the row after the insertion point was green).
  * range [DimensionRange](#dimensionrange)

### InsertRangeRequest
* InsertRangeRequest `object`: Inserts cells into a range, shifting the existing cells over or down.
  * range [GridRange](#gridrange)
  * shiftDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The dimension which will be shifted when inserting cells. If ROWS, existing cells will be shifted down. If COLUMNS, existing cells will be shifted right.

### InterpolationPoint
* InterpolationPoint `object`: A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.
  * color [Color](#color)
  * colorStyle [ColorStyle](#colorstyle)
  * type `string` (values: INTERPOLATION_POINT_TYPE_UNSPECIFIED, MIN, MAX, NUMBER, PERCENT, PERCENTILE): How the value should be interpreted.
  * value `string`: The value this interpolation point uses. May be a formula. Unused if type is MIN or MAX.

### Interval
* Interval `object`: Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
  * endTime `string`: Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
  * startTime `string`: Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.

### IterativeCalculationSettings
* IterativeCalculationSettings `object`: Settings to control how circular dependencies are resolved with iterative calculation.
  * convergenceThreshold `number`: When iterative calculation is enabled and successive results differ by less than this threshold value, the calculation rounds stop.
  * maxIterations `integer`: When iterative calculation is enabled, the maximum number of calculation rounds to perform.

### KeyValueFormat
* KeyValueFormat `object`: Formatting options for key value.
  * position [TextPosition](#textposition)
  * textFormat [TextFormat](#textformat)

### LineStyle
* LineStyle `object`: Properties that describe the style of a line.
  * type `string` (values: LINE_DASH_TYPE_UNSPECIFIED, INVISIBLE, CUSTOM, SOLID, DOTTED, MEDIUM_DASHED, MEDIUM_DASHED_DOTTED, LONG_DASHED, LONG_DASHED_DOTTED): The dash type of the line.
  * width `integer`: The thickness of the line, in px.

### ManualRule
* ManualRule `object`: Allows you to manually organize the values in a source data column into buckets with names of your choosing. For example, a pivot table that aggregates population by state: +-------+-------------------+ | State | SUM of Population | +-------+-------------------+ | AK | 0.7 | | AL | 4.8 | | AR | 2.9 | ... +-------+-------------------+ could be turned into a pivot table that aggregates population by time zone by providing a list of groups (for example, groupName = 'Central', items = ['AL', 'AR', 'IA', ...]) to a manual group rule. Note that a similar effect could be achieved by adding a time zone column to the source data and adjusting the pivot table. +-----------+-------------------+ | Time Zone | SUM of Population | +-----------+-------------------+ | Central | 106.3 | | Eastern | 151.9 | | Mountain | 17.4 | ... +-----------+-------------------+
  * groups `array`: The list of group names and the corresponding items from the source data that map to each group name.
    * items [ManualRuleGroup](#manualrulegroup)

### ManualRuleGroup
* ManualRuleGroup `object`: A group name and a list of items from the source data that should be placed in the group with this name.
  * groupName [ExtendedValue](#extendedvalue)
  * items `array`: The items in the source data that should be placed into this group. Each item may be a string, number, or boolean. Items may appear in at most one group within a given ManualRule. Items that do not appear in any group will appear on their own.
    * items [ExtendedValue](#extendedvalue)

### MatchedDeveloperMetadata
* MatchedDeveloperMetadata `object`: A developer metadata entry and the data filters specified in the original request that matched it.
  * dataFilters `array`: All filters matching the returned developer metadata.
    * items [DataFilter](#datafilter)
  * developerMetadata [DeveloperMetadata](#developermetadata)

### MatchedValueRange
* MatchedValueRange `object`: A value range that was matched by one or more data filers.
  * dataFilters `array`: The DataFilters from the request that matched the range of values.
    * items [DataFilter](#datafilter)
  * valueRange [ValueRange](#valuerange)

### MergeCellsRequest
* MergeCellsRequest `object`: Merges all cells in the range.
  * mergeType `string` (values: MERGE_ALL, MERGE_COLUMNS, MERGE_ROWS): How the cells should be merged.
  * range [GridRange](#gridrange)

### MoveDimensionRequest
* MoveDimensionRequest `object`: Moves one or more rows or columns.
  * destinationIndex `integer`: The zero-based start index of where to move the source data to, based on the coordinates *before* the source data is removed from the grid. Existing data will be shifted down or right (depending on the dimension) to make room for the moved dimensions. The source dimensions are removed from the grid, so the the data may end up in a different index than specified. For example, given `A1..A5` of `0, 1, 2, 3, 4` and wanting to move `"1"` and `"2"` to between `"3"` and `"4"`, the source would be `ROWS [1..3)`,and the destination index would be `"4"` (the zero-based index of row 5). The end result would be `A1..A5` of `0, 3, 1, 2, 4`.
  * source [DimensionRange](#dimensionrange)

### NamedRange
* NamedRange `object`: A named range.
  * name `string`: The name of the named range.
  * namedRangeId `string`: The ID of the named range.
  * range [GridRange](#gridrange)

### NumberFormat
* NumberFormat `object`: The number format of a cell.
  * pattern `string`: Pattern string used for formatting. If not set, a default pattern based on the user's locale will be used if necessary for the given type. See the [Date and Number Formats guide](/sheets/api/guides/formats) for more information about the supported patterns.
  * type `string` (values: NUMBER_FORMAT_TYPE_UNSPECIFIED, TEXT, NUMBER, PERCENT, CURRENCY, DATE, TIME, DATE_TIME, SCIENTIFIC): The type of the number format. When writing, this field must be set.

### OrgChartSpec
* OrgChartSpec `object`: An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales".
  * labels [ChartData](#chartdata)
  * nodeColor [Color](#color)
  * nodeColorStyle [ColorStyle](#colorstyle)
  * nodeSize `string` (values: ORG_CHART_LABEL_SIZE_UNSPECIFIED, SMALL, MEDIUM, LARGE): The size of the org chart nodes.
  * parentLabels [ChartData](#chartdata)
  * selectedNodeColor [Color](#color)
  * selectedNodeColorStyle [ColorStyle](#colorstyle)
  * tooltips [ChartData](#chartdata)

### OverlayPosition
* OverlayPosition `object`: The location an object is overlaid on top of a grid.
  * anchorCell [GridCoordinate](#gridcoordinate)
  * heightPixels `integer`: The height of the object, in pixels. Defaults to 371.
  * offsetXPixels `integer`: The horizontal offset, in pixels, that the object is offset from the anchor cell.
  * offsetYPixels `integer`: The vertical offset, in pixels, that the object is offset from the anchor cell.
  * widthPixels `integer`: The width of the object, in pixels. Defaults to 600.

### Padding
* Padding `object`: The amount of padding around the cell, in pixels. When updating padding, every field must be specified.
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
* PieChartSpec `object`: A pie chart.
  * domain [ChartData](#chartdata)
  * legendPosition `string` (values: PIE_CHART_LEGEND_POSITION_UNSPECIFIED, BOTTOM_LEGEND, LEFT_LEGEND, RIGHT_LEGEND, TOP_LEGEND, NO_LEGEND, LABELED_LEGEND): Where the legend of the pie chart should be drawn.
  * pieHole `number`: The size of the hole in the pie chart.
  * series [ChartData](#chartdata)
  * threeDimensional `boolean`: True if the pie is three dimensional.

### PivotFilterCriteria
* PivotFilterCriteria `object`: Criteria for showing/hiding rows in a pivot table.
  * condition [BooleanCondition](#booleancondition)
  * visibleByDefault `boolean`: Whether values are visible by default. If true, the visible_values are ignored, all values that meet condition (if specified) are shown. If false, values that are both in visible_values and meet condition are shown.
  * visibleValues `array`: Values that should be included. Values not listed here are excluded.
    * items `string`

### PivotFilterSpec
* PivotFilterSpec `object`: The pivot table filter criteria associated with a specific source column offset.
  * columnOffsetIndex `integer`: The column offset of the source range.
  * dataSourceColumnReference [DataSourceColumnReference](#datasourcecolumnreference)
  * filterCriteria [PivotFilterCriteria](#pivotfiltercriteria)

### PivotGroup
* PivotGroup `object`: A single grouping (either row or column) in a pivot table.
  * dataSourceColumnReference [DataSourceColumnReference](#datasourcecolumnreference)
  * groupLimit [PivotGroupLimit](#pivotgrouplimit)
  * groupRule [PivotGroupRule](#pivotgrouprule)
  * label `string`: The labels to use for the row/column groups which can be customized. For example, in the following pivot table, the row label is `Region` (which could be renamed to `State`) and the column label is `Product` (which could be renamed `Item`). Pivot tables created before December 2017 do not have header labels. If you'd like to add header labels to an existing pivot table, please delete the existing pivot table and then create a new pivot table with same parameters. +--------------+---------+-------+ | SUM of Units | Product | | | Region | Pen | Paper | +--------------+---------+-------+ | New York | 345 | 98 | | Oregon | 234 | 123 | | Tennessee | 531 | 415 | +--------------+---------+-------+ | Grand Total | 1110 | 636 | +--------------+---------+-------+
  * repeatHeadings `boolean`: True if the headings in this pivot group should be repeated. This is only valid for row groupings and is ignored by columns. By default, we minimize repitition of headings by not showing higher level headings where they are the same. For example, even though the third row below corresponds to "Q1 Mar", "Q1" is not shown because it is redundant with previous rows. Setting repeat_headings to true would cause "Q1" to be repeated for "Feb" and "Mar". +--------------+ | Q1 | Jan | | | Feb | | | Mar | +--------+-----+ | Q1 Total | +--------------+
  * showTotals `boolean`: True if the pivot table should include the totals for this grouping.
  * sortOrder `string` (values: SORT_ORDER_UNSPECIFIED, ASCENDING, DESCENDING): The order the values in this group should be sorted.
  * sourceColumnOffset `integer`: The column offset of the source range that this grouping is based on. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this group refers to column `C`, whereas the offset `1` would refer to column `D`.
  * valueBucket [PivotGroupSortValueBucket](#pivotgroupsortvaluebucket)
  * valueMetadata `array`: Metadata about values in the grouping.
    * items [PivotGroupValueMetadata](#pivotgroupvaluemetadata)

### PivotGroupLimit
* PivotGroupLimit `object`: The count limit on rows or columns in the pivot group.
  * applyOrder `integer`: The order in which the group limit is applied to the pivot table. Pivot group limits are applied from lower to higher order number. Order numbers are normalized to consecutive integers from 0. For write request, to fully customize the applying orders, all pivot group limits should have this field set with an unique number. Otherwise, the order is determined by the index in the PivotTable.rows list and then the PivotTable.columns list.
  * countLimit `integer`: The count limit.

### PivotGroupRule
* PivotGroupRule `object`: An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not.
  * dateTimeRule [DateTimeRule](#datetimerule)
  * histogramRule [HistogramRule](#histogramrule)
  * manualRule [ManualRule](#manualrule)

### PivotGroupSortValueBucket
* PivotGroupSortValueBucket `object`: Information about which values in a pivot group should be used for sorting.
  * buckets `array`: Determines the bucket from which values are chosen to sort. For example, in a pivot table with one row group & two column groups, the row group can list up to two values. The first value corresponds to a value within the first column group, and the second value corresponds to a value in the second column group. If no values are listed, this would indicate that the row should be sorted according to the "Grand Total" over the column groups. If a single value is listed, this would correspond to using the "Total" of that bucket.
    * items [ExtendedValue](#extendedvalue)
  * valuesIndex `integer`: The offset in the PivotTable.values list which the values in this grouping should be sorted by.

### PivotGroupValueMetadata
* PivotGroupValueMetadata `object`: Metadata about a value in a pivot grouping.
  * collapsed `boolean`: True if the data corresponding to the value is collapsed.
  * value [ExtendedValue](#extendedvalue)

### PivotTable
* PivotTable `object`: A pivot table.
  * columns `array`: Each column grouping in the pivot table.
    * items [PivotGroup](#pivotgroup)
  * criteria `object`: An optional mapping of filters per source column offset. The filters are applied before aggregating data into the pivot table. The map's key is the column offset of the source range that you want to filter, and the value is the criteria for that column. For example, if the source was `C10:E15`, a key of `0` will have the filter for column `C`, whereas the key `1` is for column `D`. This field is deprecated in favor of filter_specs.
  * dataExecutionStatus [DataExecutionStatus](#dataexecutionstatus)
  * dataSourceId `string`: The ID of the data source the pivot table is reading data from.
  * filterSpecs `array`: The filters applied to the source columns before aggregating data for the pivot table. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence.
    * items [PivotFilterSpec](#pivotfilterspec)
  * rows `array`: Each row grouping in the pivot table.
    * items [PivotGroup](#pivotgroup)
  * source [GridRange](#gridrange)
  * valueLayout `string` (values: HORIZONTAL, VERTICAL): Whether values should be listed horizontally (as columns) or vertically (as rows).
  * values `array`: A list of values to include in the pivot table.
    * items [PivotValue](#pivotvalue)

### PivotValue
* PivotValue `object`: The definition of how a value in a pivot table should be calculated.
  * calculatedDisplayType `string` (values: PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED, PERCENT_OF_ROW_TOTAL, PERCENT_OF_COLUMN_TOTAL, PERCENT_OF_GRAND_TOTAL): If specified, indicates that pivot values should be displayed as the result of a calculation with another pivot value. For example, if calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the pivot values are displayed as the percentage of the grand total. In the Sheets editor, this is referred to as "Show As" in the value section of a pivot table.
  * dataSourceColumnReference [DataSourceColumnReference](#datasourcecolumnreference)
  * formula `string`: A custom formula to calculate the value. The formula must start with an `=` character.
  * name `string`: A name to use for the value.
  * sourceColumnOffset `integer`: The column offset of the source range that this value reads from. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this value refers to column `C`, whereas the offset `1` would refer to column `D`.
  * summarizeFunction `string` (values: PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED, SUM, COUNTA, COUNT, COUNTUNIQUE, AVERAGE, MAX, MIN, MEDIAN, PRODUCT, STDEV, STDEVP, VAR, VARP, CUSTOM): A function to summarize the value. If formula is set, the only supported values are SUM and CUSTOM. If sourceColumnOffset is set, then `CUSTOM` is not supported.

### PointStyle
* PointStyle `object`: The style of a point on the chart.
  * shape `string` (values: POINT_SHAPE_UNSPECIFIED, CIRCLE, DIAMOND, HEXAGON, PENTAGON, SQUARE, STAR, TRIANGLE, X_MARK): The point shape. If empty or unspecified, a default shape is used.
  * size `number`: The point size. If empty, a default size is used.

### ProtectedRange
* ProtectedRange `object`: A protected range.
  * description `string`: The description of this protected range.
  * editors [Editors](#editors)
  * namedRangeId `string`: The named range this protected range is backed by, if any. When writing, only one of range or named_range_id may be set.
  * protectedRangeId `integer`: The ID of the protected range. This field is read-only.
  * range [GridRange](#gridrange)
  * requestingUserCanEdit `boolean`: True if the user who requested this protected range can edit the protected area. This field is read-only.
  * unprotectedRanges `array`: The list of unprotected ranges within a protected sheet. Unprotected ranges are only supported on protected sheets.
    * items [GridRange](#gridrange)
  * warningOnly `boolean`: True if this protected range will show a warning when editing. Warning-based protection means that every user can edit data in the protected range, except editing will prompt a warning asking the user to confirm the edit. When writing: if this field is true, then editors is ignored. Additionally, if this field is changed from true to false and the `editors` field is not set (nor included in the field mask), then the editors will be set to all the editors in the document.

### RandomizeRangeRequest
* RandomizeRangeRequest `object`: Randomizes the order of the rows in a range.
  * range [GridRange](#gridrange)

### RefreshDataSourceObjectExecutionStatus
* RefreshDataSourceObjectExecutionStatus `object`: The execution status of refreshing one data source object.
  * dataExecutionStatus [DataExecutionStatus](#dataexecutionstatus)
  * reference [DataSourceObjectReference](#datasourceobjectreference)

### RefreshDataSourceRequest
* RefreshDataSourceRequest `object`: Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly.
  * dataSourceId `string`: Reference to a DataSource. If specified, refreshes all associated data source objects for the data source.
  * force `boolean`: Refreshes the data source objects regardless of the current state. If not set and a referenced data source object was in error state, the refresh will fail immediately.
  * isAll `boolean`: Refreshes all existing data source objects in the spreadsheet.
  * references [DataSourceObjectReferences](#datasourceobjectreferences)

### RefreshDataSourceResponse
* RefreshDataSourceResponse `object`: The response from refreshing one or multiple data source objects.
  * statuses `array`: All the refresh status for the data source object references specified in the request. If is_all is specified, the field contains only those in failure status.
    * items [RefreshDataSourceObjectExecutionStatus](#refreshdatasourceobjectexecutionstatus)

### RepeatCellRequest
* RepeatCellRequest `object`: Updates all cells in the range to the values in the given Cell object. Only the fields listed in the fields field are updated; others are unchanged. If writing a cell with a formula, the formula's ranges will automatically increment for each field in the range. For example, if writing a cell with formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`. To keep the formula's ranges static, use the `$` indicator. For example, use the formula `=$A$1` to prevent both the row and the column from incrementing.
  * cell [CellData](#celldata)
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `cell` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
  * range [GridRange](#gridrange)

### Request
* Request `object`: A single kind of update to apply to a spreadsheet.
  * addBanding [AddBandingRequest](#addbandingrequest)
  * addChart [AddChartRequest](#addchartrequest)
  * addConditionalFormatRule [AddConditionalFormatRuleRequest](#addconditionalformatrulerequest)
  * addDataSource [AddDataSourceRequest](#adddatasourcerequest)
  * addDimensionGroup [AddDimensionGroupRequest](#adddimensiongrouprequest)
  * addFilterView [AddFilterViewRequest](#addfilterviewrequest)
  * addNamedRange [AddNamedRangeRequest](#addnamedrangerequest)
  * addProtectedRange [AddProtectedRangeRequest](#addprotectedrangerequest)
  * addSheet [AddSheetRequest](#addsheetrequest)
  * addSlicer [AddSlicerRequest](#addslicerrequest)
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
  * deleteDataSource [DeleteDataSourceRequest](#deletedatasourcerequest)
  * deleteDeveloperMetadata [DeleteDeveloperMetadataRequest](#deletedevelopermetadatarequest)
  * deleteDimension [DeleteDimensionRequest](#deletedimensionrequest)
  * deleteDimensionGroup [DeleteDimensionGroupRequest](#deletedimensiongrouprequest)
  * deleteDuplicates [DeleteDuplicatesRequest](#deleteduplicatesrequest)
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
  * refreshDataSource [RefreshDataSourceRequest](#refreshdatasourcerequest)
  * repeatCell [RepeatCellRequest](#repeatcellrequest)
  * setBasicFilter [SetBasicFilterRequest](#setbasicfilterrequest)
  * setDataValidation [SetDataValidationRequest](#setdatavalidationrequest)
  * sortRange [SortRangeRequest](#sortrangerequest)
  * textToColumns [TextToColumnsRequest](#texttocolumnsrequest)
  * trimWhitespace [TrimWhitespaceRequest](#trimwhitespacerequest)
  * unmergeCells [UnmergeCellsRequest](#unmergecellsrequest)
  * updateBanding [UpdateBandingRequest](#updatebandingrequest)
  * updateBorders [UpdateBordersRequest](#updatebordersrequest)
  * updateCells [UpdateCellsRequest](#updatecellsrequest)
  * updateChartSpec [UpdateChartSpecRequest](#updatechartspecrequest)
  * updateConditionalFormatRule [UpdateConditionalFormatRuleRequest](#updateconditionalformatrulerequest)
  * updateDataSource [UpdateDataSourceRequest](#updatedatasourcerequest)
  * updateDeveloperMetadata [UpdateDeveloperMetadataRequest](#updatedevelopermetadatarequest)
  * updateDimensionGroup [UpdateDimensionGroupRequest](#updatedimensiongrouprequest)
  * updateDimensionProperties [UpdateDimensionPropertiesRequest](#updatedimensionpropertiesrequest)
  * updateEmbeddedObjectBorder [UpdateEmbeddedObjectBorderRequest](#updateembeddedobjectborderrequest)
  * updateEmbeddedObjectPosition [UpdateEmbeddedObjectPositionRequest](#updateembeddedobjectpositionrequest)
  * updateFilterView [UpdateFilterViewRequest](#updatefilterviewrequest)
  * updateNamedRange [UpdateNamedRangeRequest](#updatenamedrangerequest)
  * updateProtectedRange [UpdateProtectedRangeRequest](#updateprotectedrangerequest)
  * updateSheetProperties [UpdateSheetPropertiesRequest](#updatesheetpropertiesrequest)
  * updateSlicerSpec [UpdateSlicerSpecRequest](#updateslicerspecrequest)
  * updateSpreadsheetProperties [UpdateSpreadsheetPropertiesRequest](#updatespreadsheetpropertiesrequest)

### Response
* Response `object`: A single response from an update.
  * addBanding [AddBandingResponse](#addbandingresponse)
  * addChart [AddChartResponse](#addchartresponse)
  * addDataSource [AddDataSourceResponse](#adddatasourceresponse)
  * addDimensionGroup [AddDimensionGroupResponse](#adddimensiongroupresponse)
  * addFilterView [AddFilterViewResponse](#addfilterviewresponse)
  * addNamedRange [AddNamedRangeResponse](#addnamedrangeresponse)
  * addProtectedRange [AddProtectedRangeResponse](#addprotectedrangeresponse)
  * addSheet [AddSheetResponse](#addsheetresponse)
  * addSlicer [AddSlicerResponse](#addslicerresponse)
  * createDeveloperMetadata [CreateDeveloperMetadataResponse](#createdevelopermetadataresponse)
  * deleteConditionalFormatRule [DeleteConditionalFormatRuleResponse](#deleteconditionalformatruleresponse)
  * deleteDeveloperMetadata [DeleteDeveloperMetadataResponse](#deletedevelopermetadataresponse)
  * deleteDimensionGroup [DeleteDimensionGroupResponse](#deletedimensiongroupresponse)
  * deleteDuplicates [DeleteDuplicatesResponse](#deleteduplicatesresponse)
  * duplicateFilterView [DuplicateFilterViewResponse](#duplicatefilterviewresponse)
  * duplicateSheet [DuplicateSheetResponse](#duplicatesheetresponse)
  * findReplace [FindReplaceResponse](#findreplaceresponse)
  * refreshDataSource [RefreshDataSourceResponse](#refreshdatasourceresponse)
  * trimWhitespace [TrimWhitespaceResponse](#trimwhitespaceresponse)
  * updateConditionalFormatRule [UpdateConditionalFormatRuleResponse](#updateconditionalformatruleresponse)
  * updateDataSource [UpdateDataSourceResponse](#updatedatasourceresponse)
  * updateDeveloperMetadata [UpdateDeveloperMetadataResponse](#updatedevelopermetadataresponse)
  * updateEmbeddedObjectPosition [UpdateEmbeddedObjectPositionResponse](#updateembeddedobjectpositionresponse)

### RowData
* RowData `object`: Data about each cell in a row.
  * values `array`: The values in the row, one per column.
    * items [CellData](#celldata)

### ScorecardChartSpec
* ScorecardChartSpec `object`: A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time.
  * aggregateType `string` (values: CHART_AGGREGATE_TYPE_UNSPECIFIED, AVERAGE, COUNT, MAX, MEDIAN, MIN, SUM): The aggregation type for key and baseline chart data in scorecard chart. This field is not supported for data source charts. Use the ChartData.aggregateType field of the key_value_data or baseline_value_data instead for data source charts. This field is optional.
  * baselineValueData [ChartData](#chartdata)
  * baselineValueFormat [BaselineValueFormat](#baselinevalueformat)
  * customFormatOptions [ChartCustomNumberFormatOptions](#chartcustomnumberformatoptions)
  * keyValueData [ChartData](#chartdata)
  * keyValueFormat [KeyValueFormat](#keyvalueformat)
  * numberFormatSource `string` (values: CHART_NUMBER_FORMAT_SOURCE_UNDEFINED, FROM_DATA, CUSTOM): The number format source used in the scorecard chart. This field is optional.
  * scaleFactor `number`: Value to scale scorecard key and baseline value. For example, a factor of 10 can be used to divide all values in the chart by 10. This field is optional.

### SearchDeveloperMetadataRequest
* SearchDeveloperMetadataRequest `object`: A request to retrieve all developer metadata matching the set of specified criteria.
  * dataFilters `array`: The data filters describing the criteria used to determine which DeveloperMetadata entries to return. DeveloperMetadata matching any of the specified filters are included in the response.
    * items [DataFilter](#datafilter)

### SearchDeveloperMetadataResponse
* SearchDeveloperMetadataResponse `object`: A reply to a developer metadata search request.
  * matchedDeveloperMetadata `array`: The metadata matching the criteria of the search request.
    * items [MatchedDeveloperMetadata](#matcheddevelopermetadata)

### SetBasicFilterRequest
* SetBasicFilterRequest `object`: Sets the basic filter associated with a sheet.
  * filter [BasicFilter](#basicfilter)

### SetDataValidationRequest
* SetDataValidationRequest `object`: Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified.
  * range [GridRange](#gridrange)
  * rule [DataValidationRule](#datavalidationrule)

### Sheet
* Sheet `object`: A sheet in a spreadsheet.
  * bandedRanges `array`: The banded (alternating colors) ranges on this sheet.
    * items [BandedRange](#bandedrange)
  * basicFilter [BasicFilter](#basicfilter)
  * charts `array`: The specifications of every chart on this sheet.
    * items [EmbeddedChart](#embeddedchart)
  * columnGroups `array`: All column groups on this sheet, ordered by increasing range start index, then by group depth.
    * items [DimensionGroup](#dimensiongroup)
  * conditionalFormats `array`: The conditional format rules in this sheet.
    * items [ConditionalFormatRule](#conditionalformatrule)
  * data `array`: Data in the grid, if this is a grid sheet. The number of GridData objects returned is dependent on the number of ranges requested on this sheet. For example, if this is representing `Sheet1`, and the spreadsheet was requested with ranges `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the first GridData will have a startRow/startColumn of `0`, while the second one will have `startRow 14` (zero-based row 15), and `startColumn 3` (zero-based column D). For a DATA_SOURCE sheet, you can not request a specific range, the GridData contains all the values.
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
  * rowGroups `array`: All row groups on this sheet, ordered by increasing range start index, then by group depth.
    * items [DimensionGroup](#dimensiongroup)
  * slicers `array`: The slicers on this sheet.
    * items [Slicer](#slicer)

### SheetProperties
* SheetProperties `object`: Properties of a sheet.
  * dataSourceSheetProperties [DataSourceSheetProperties](#datasourcesheetproperties)
  * gridProperties [GridProperties](#gridproperties)
  * hidden `boolean`: True if the sheet is hidden in the UI, false if it's visible.
  * index `integer`: The index of the sheet within the spreadsheet. When adding or updating sheet properties, if this field is excluded then the sheet is added or moved to the end of the sheet list. When updating sheet indices or inserting sheets, movement is considered in "before the move" indexes. For example, if there were 3 sheets (S1, S2, S3) in order to move S1 ahead of S2 the index would have to be set to 2. A sheet index update request is ignored if the requested index is identical to the sheets current index or if the requested new index is equal to the current sheet index + 1.
  * rightToLeft `boolean`: True if the sheet is an RTL sheet instead of an LTR sheet.
  * sheetId `integer`: The ID of the sheet. Must be non-negative. This field cannot be changed once set.
  * sheetType `string` (values: SHEET_TYPE_UNSPECIFIED, GRID, OBJECT, DATA_SOURCE): The type of sheet. Defaults to GRID. This field cannot be changed once set.
  * tabColor [Color](#color)
  * tabColorStyle [ColorStyle](#colorstyle)
  * title `string`: The name of the sheet.

### Slicer
* Slicer `object`: A slicer in a sheet.
  * position [EmbeddedObjectPosition](#embeddedobjectposition)
  * slicerId `integer`: The ID of the slicer.
  * spec [SlicerSpec](#slicerspec)

### SlicerSpec
* SlicerSpec `object`: The specifications of a slicer.
  * applyToPivotTables `boolean`: True if the filter should apply to pivot tables. If not set, default to `True`.
  * backgroundColor [Color](#color)
  * backgroundColorStyle [ColorStyle](#colorstyle)
  * columnIndex `integer`: The column index in the data table on which the filter is applied to.
  * dataRange [GridRange](#gridrange)
  * filterCriteria [FilterCriteria](#filtercriteria)
  * horizontalAlignment `string` (values: HORIZONTAL_ALIGN_UNSPECIFIED, LEFT, CENTER, RIGHT): The horizontal alignment of title in the slicer. If unspecified, defaults to `LEFT`
  * textFormat [TextFormat](#textformat)
  * title `string`: The title of the slicer.

### SortRangeRequest
* SortRangeRequest `object`: Sorts data in rows based on a sort order per column.
  * range [GridRange](#gridrange)
  * sortSpecs `array`: The sort order per column. Later specifications are used when values are equal in the earlier specifications.
    * items [SortSpec](#sortspec)

### SortSpec
* SortSpec `object`: A sort order associated with a specific column or row.
  * backgroundColor [Color](#color)
  * backgroundColorStyle [ColorStyle](#colorstyle)
  * dataSourceColumnReference [DataSourceColumnReference](#datasourcecolumnreference)
  * dimensionIndex `integer`: The dimension the sort should be applied to.
  * foregroundColor [Color](#color)
  * foregroundColorStyle [ColorStyle](#colorstyle)
  * sortOrder `string` (values: SORT_ORDER_UNSPECIFIED, ASCENDING, DESCENDING): The order data should be sorted.

### SourceAndDestination
* SourceAndDestination `object`: A combination of a source range and how to extend that source.
  * dimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The dimension that data should be filled into.
  * fillLength `integer`: The number of rows or columns that data should be filled into. Positive numbers expand beyond the last row or last column of the source. Negative numbers expand before the first row or first column of the source.
  * source [GridRange](#gridrange)

### Spreadsheet
* Spreadsheet `object`: Resource that represents a spreadsheet.
  * dataSourceSchedules `array`: Output only. A list of data source refresh schedules.
    * items [DataSourceRefreshSchedule](#datasourcerefreshschedule)
  * dataSources `array`: A list of external data sources connected with the spreadsheet.
    * items [DataSource](#datasource)
  * developerMetadata `array`: The developer metadata associated with a spreadsheet.
    * items [DeveloperMetadata](#developermetadata)
  * namedRanges `array`: The named ranges defined in a spreadsheet.
    * items [NamedRange](#namedrange)
  * properties [SpreadsheetProperties](#spreadsheetproperties)
  * sheets `array`: The sheets that are part of a spreadsheet.
    * items [Sheet](#sheet)
  * spreadsheetId `string`: The ID of the spreadsheet. This field is read-only.
  * spreadsheetUrl `string`: The url of the spreadsheet. This field is read-only.

### SpreadsheetProperties
* SpreadsheetProperties `object`: Properties of a spreadsheet.
  * autoRecalc `string` (values: RECALCULATION_INTERVAL_UNSPECIFIED, ON_CHANGE, MINUTE, HOUR): The amount of time to wait before volatile functions are recalculated.
  * defaultFormat [CellFormat](#cellformat)
  * iterativeCalculationSettings [IterativeCalculationSettings](#iterativecalculationsettings)
  * locale `string`: The locale of the spreadsheet in one of the following formats: * an ISO 639-1 language code such as `en` * an ISO 639-2 language code such as `fil`, if no 639-1 code exists * a combination of the ISO language code and country code, such as `en_US` Note: when updating this field, not all locales/languages are supported.
  * spreadsheetTheme [SpreadsheetTheme](#spreadsheettheme)
  * timeZone `string`: The time zone of the spreadsheet, in CLDR format such as `America/New_York`. If the time zone isn't recognized, this may be a custom time zone such as `GMT-07:00`.
  * title `string`: The title of the spreadsheet.

### SpreadsheetTheme
* SpreadsheetTheme `object`: Represents spreadsheet theme
  * primaryFontFamily `string`: Name of the primary font family.
  * themeColors `array`: The spreadsheet theme color pairs. To update you must provide all theme color pairs.
    * items [ThemeColorPair](#themecolorpair)

### TextFormat
* TextFormat `object`: The format of a run of text in a cell. Absent values indicate that the field isn't specified.
  * bold `boolean`: True if the text is bold.
  * fontFamily `string`: The font family.
  * fontSize `integer`: The size of the font.
  * foregroundColor [Color](#color)
  * foregroundColorStyle [ColorStyle](#colorstyle)
  * italic `boolean`: True if the text is italicized.
  * strikethrough `boolean`: True if the text has a strikethrough.
  * underline `boolean`: True if the text is underlined.

### TextFormatRun
* TextFormatRun `object`: A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.
  * format [TextFormat](#textformat)
  * startIndex `integer`: The character index where this run starts.

### TextPosition
* TextPosition `object`: Position settings for text.
  * horizontalAlignment `string` (values: HORIZONTAL_ALIGN_UNSPECIFIED, LEFT, CENTER, RIGHT): Horizontal alignment setting for the piece of text.

### TextRotation
* TextRotation `object`: The rotation applied to text in a cell.
  * angle `integer`: The angle between the standard orientation and the desired orientation. Measured in degrees. Valid values are between -90 and 90. Positive angles are angled upwards, negative are angled downwards. Note: For LTR text direction positive angles are in the counterclockwise direction, whereas for RTL they are in the clockwise direction
  * vertical `boolean`: If true, text reads top to bottom, but the orientation of individual characters is unchanged. For example: | V | | e | | r | | t | | i | | c | | a | | l |

### TextToColumnsRequest
* TextToColumnsRequest `object`: Splits a column of text into multiple columns, based on a delimiter in each cell.
  * delimiter `string`: The delimiter to use. Used only if delimiterType is CUSTOM.
  * delimiterType `string` (values: DELIMITER_TYPE_UNSPECIFIED, COMMA, SEMICOLON, PERIOD, SPACE, CUSTOM, AUTODETECT): The delimiter type to use.
  * source [GridRange](#gridrange)

### ThemeColorPair
* ThemeColorPair `object`: A pair mapping a spreadsheet theme color type to the concrete color it represents.
  * color [ColorStyle](#colorstyle)
  * colorType `string` (values: THEME_COLOR_TYPE_UNSPECIFIED, TEXT, BACKGROUND, ACCENT1, ACCENT2, ACCENT3, ACCENT4, ACCENT5, ACCENT6, LINK): The type of the spreadsheet theme color.

### TimeOfDay
* TimeOfDay `object`: Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
  * hours `integer`: Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * minutes `integer`: Minutes of hour of day. Must be from 0 to 59.
  * nanos `integer`: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

### TreemapChartColorScale
* TreemapChartColorScale `object`: A color scale for a treemap chart.
  * maxValueColor [Color](#color)
  * maxValueColorStyle [ColorStyle](#colorstyle)
  * midValueColor [Color](#color)
  * midValueColorStyle [ColorStyle](#colorstyle)
  * minValueColor [Color](#color)
  * minValueColorStyle [ColorStyle](#colorstyle)
  * noDataColor [Color](#color)
  * noDataColorStyle [ColorStyle](#colorstyle)

### TreemapChartSpec
* TreemapChartSpec `object`: A Treemap chart.
  * colorData [ChartData](#chartdata)
  * colorScale [TreemapChartColorScale](#treemapchartcolorscale)
  * headerColor [Color](#color)
  * headerColorStyle [ColorStyle](#colorstyle)
  * hideTooltips `boolean`: True to hide tooltips.
  * hintedLevels `integer`: The number of additional data levels beyond the labeled levels to be shown on the treemap chart. These levels are not interactive and are shown without their labels. Defaults to 0 if not specified.
  * labels [ChartData](#chartdata)
  * levels `integer`: The number of data levels to show on the treemap chart. These levels are interactive and are shown with their labels. Defaults to 2 if not specified.
  * maxValue `number`: The maximum possible data value. Cells with values greater than this will have the same color as cells with this value. If not specified, defaults to the actual maximum value from color_data, or the maximum value from size_data if color_data is not specified.
  * minValue `number`: The minimum possible data value. Cells with values less than this will have the same color as cells with this value. If not specified, defaults to the actual minimum value from color_data, or the minimum value from size_data if color_data is not specified.
  * parentLabels [ChartData](#chartdata)
  * sizeData [ChartData](#chartdata)
  * textFormat [TextFormat](#textformat)

### TrimWhitespaceRequest
* TrimWhitespaceRequest `object`: Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and isn't interpreted as a formula.
  * range [GridRange](#gridrange)

### TrimWhitespaceResponse
* TrimWhitespaceResponse `object`: The result of trimming whitespace in cells.
  * cellsChangedCount `integer`: The number of cells that were trimmed of whitespace.

### UnmergeCellsRequest
* UnmergeCellsRequest `object`: Unmerges cells in the given range.
  * range [GridRange](#gridrange)

### UpdateBandingRequest
* UpdateBandingRequest `object`: Updates properties of the supplied banded range.
  * bandedRange [BandedRange](#bandedrange)
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `bandedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.

### UpdateBordersRequest
* UpdateBordersRequest `object`: Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE.
  * bottom [Border](#border)
  * innerHorizontal [Border](#border)
  * innerVertical [Border](#border)
  * left [Border](#border)
  * range [GridRange](#gridrange)
  * right [Border](#border)
  * top [Border](#border)

### UpdateCellsRequest
* UpdateCellsRequest `object`: Updates all cells in a range with new data.
  * fields `string`: The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field.
  * range [GridRange](#gridrange)
  * rows `array`: The data to write.
    * items [RowData](#rowdata)
  * start [GridCoordinate](#gridcoordinate)

### UpdateChartSpecRequest
* UpdateChartSpecRequest `object`: Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.)
  * chartId `integer`: The ID of the chart to update.
  * spec [ChartSpec](#chartspec)

### UpdateConditionalFormatRuleRequest
* UpdateConditionalFormatRuleRequest `object`: Updates a conditional format rule at the given index, or moves a conditional format rule to another index.
  * index `integer`: The zero-based index of the rule that should be replaced or moved.
  * newIndex `integer`: The zero-based new index the rule should end up at.
  * rule [ConditionalFormatRule](#conditionalformatrule)
  * sheetId `integer`: The sheet of the rule to move. Required if new_index is set, unused otherwise.

### UpdateConditionalFormatRuleResponse
* UpdateConditionalFormatRuleResponse `object`: The result of updating a conditional format rule.
  * newIndex `integer`: The index of the new rule.
  * newRule [ConditionalFormatRule](#conditionalformatrule)
  * oldIndex `integer`: The old index of the rule. Not set if a rule was replaced (because it is the same as new_index).
  * oldRule [ConditionalFormatRule](#conditionalformatrule)

### UpdateDataSourceRequest
* UpdateDataSourceRequest `object`: Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope.
  * dataSource [DataSource](#datasource)
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `dataSource` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.

### UpdateDataSourceResponse
* UpdateDataSourceResponse `object`: The response from updating data source.
  * dataExecutionStatus [DataExecutionStatus](#dataexecutionstatus)
  * dataSource [DataSource](#datasource)

### UpdateDeveloperMetadataRequest
* UpdateDeveloperMetadataRequest `object`: A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update.
  * dataFilters `array`: The filters matching the developer metadata entries to update.
    * items [DataFilter](#datafilter)
  * developerMetadata [DeveloperMetadata](#developermetadata)
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `developerMetadata` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.

### UpdateDeveloperMetadataResponse
* UpdateDeveloperMetadataResponse `object`: The response from updating developer metadata.
  * developerMetadata `array`: The updated developer metadata.
    * items [DeveloperMetadata](#developermetadata)

### UpdateDimensionGroupRequest
* UpdateDimensionGroupRequest `object`: Updates the state of the specified group.
  * dimensionGroup [DimensionGroup](#dimensiongroup)
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `dimensionGroup` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.

### UpdateDimensionPropertiesRequest
* UpdateDimensionPropertiesRequest `object`: Updates properties of dimensions within the specified range.
  * dataSourceSheetRange [DataSourceSheetDimensionRange](#datasourcesheetdimensionrange)
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
  * properties [DimensionProperties](#dimensionproperties)
  * range [DimensionRange](#dimensionrange)

### UpdateEmbeddedObjectBorderRequest
* UpdateEmbeddedObjectBorderRequest `object`: Updates an embedded object's border property.
  * border [EmbeddedObjectBorder](#embeddedobjectborder)
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `border` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
  * objectId `integer`: The ID of the embedded object to update.

### UpdateEmbeddedObjectPositionRequest
* UpdateEmbeddedObjectPositionRequest `object`: Update an embedded object's position (such as a moving or resizing a chart or image).
  * fields `string`: The fields of OverlayPosition that should be updated when setting a new position. Used only if newPosition.overlayPosition is set, in which case at least one field must be specified. The root `newPosition.overlayPosition` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
  * newPosition [EmbeddedObjectPosition](#embeddedobjectposition)
  * objectId `integer`: The ID of the object to moved.

### UpdateEmbeddedObjectPositionResponse
* UpdateEmbeddedObjectPositionResponse `object`: The result of updating an embedded object's position.
  * position [EmbeddedObjectPosition](#embeddedobjectposition)

### UpdateFilterViewRequest
* UpdateFilterViewRequest `object`: Updates properties of the filter view.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `filter` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
  * filter [FilterView](#filterview)

### UpdateNamedRangeRequest
* UpdateNamedRangeRequest `object`: Updates properties of the named range with the specified namedRangeId.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `namedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
  * namedRange [NamedRange](#namedrange)

### UpdateProtectedRangeRequest
* UpdateProtectedRangeRequest `object`: Updates an existing protected range with the specified protectedRangeId.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `protectedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
  * protectedRange [ProtectedRange](#protectedrange)

### UpdateSheetPropertiesRequest
* UpdateSheetPropertiesRequest `object`: Updates properties of the sheet with the specified sheetId.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
  * properties [SheetProperties](#sheetproperties)

### UpdateSlicerSpecRequest
* UpdateSlicerSpecRequest `object`: Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root `SlicerSpec` is implied and should not be specified. A single "*"` can be used as short-hand for listing every field.
  * slicerId `integer`: The id of the slicer to update.
  * spec [SlicerSpec](#slicerspec)

### UpdateSpreadsheetPropertiesRequest
* UpdateSpreadsheetPropertiesRequest `object`: Updates properties of a spreadsheet.
  * fields `string`: The fields that should be updated. At least one field must be specified. The root 'properties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
  * properties [SpreadsheetProperties](#spreadsheetproperties)

### UpdateValuesByDataFilterResponse
* UpdateValuesByDataFilterResponse `object`: The response when updating a range of values by a data filter in a spreadsheet.
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
  * majorDimension `string` (values: DIMENSION_UNSPECIFIED, ROWS, COLUMNS): The major dimension of the values. For output, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`. For input, with `range=A1:B2,majorDimension=ROWS` then `[[1,2],[3,4]]` will set `A1=1,B1=2,A2=3,B2=4`. With `range=A1:B2,majorDimension=COLUMNS` then `[[1,2],[3,4]]` will set `A1=1,B1=3,A2=2,B2=4`. When writing, if this field is not set, it defaults to ROWS.
  * range `string`: The range the values cover, in A1 notation. For output, this range indicates the entire requested range, even though the values will exclude trailing rows and columns. When appending values, this field represents the range to search for a table, after which values will be appended.
  * values `array`: The data that was read or to be written. This is an array of arrays, the outer array representing all the data and each inner array representing a major dimension. Each item in the inner array corresponds with one cell. For output, empty trailing rows and columns will not be included. For input, supported value types are: bool, string, and double. Null values will be skipped. To set a cell to an empty value, set the string value to an empty string.
    * items `array`

### WaterfallChartColumnStyle
* WaterfallChartColumnStyle `object`: Styles for a waterfall chart column.
  * color [Color](#color)
  * colorStyle [ColorStyle](#colorstyle)
  * label `string`: The label of the column's legend.

### WaterfallChartCustomSubtotal
* WaterfallChartCustomSubtotal `object`: A custom subtotal column for a waterfall chart series.
  * dataIsSubtotal `boolean`: True if the data point at subtotal_index is the subtotal. If false, the subtotal will be computed and appear after the data point.
  * label `string`: A label for the subtotal column.
  * subtotalIndex `integer`: The 0-based index of a data point within the series. If data_is_subtotal is true, the data point at this index is the subtotal. Otherwise, the subtotal appears after the data point with this index. A series can have multiple subtotals at arbitrary indices, but subtotals do not affect the indices of the data points. For example, if a series has three data points, their indices will always be 0, 1, and 2, regardless of how many subtotals exist on the series or what data points they are associated with.

### WaterfallChartDomain
* WaterfallChartDomain `object`: The domain of a waterfall chart.
  * data [ChartData](#chartdata)
  * reversed `boolean`: True to reverse the order of the domain values (horizontal axis).

### WaterfallChartSeries
* WaterfallChartSeries `object`: A single series of data for a waterfall chart.
  * customSubtotals `array`: Custom subtotal columns appearing in this series. The order in which subtotals are defined is not significant. Only one subtotal may be defined for each data point.
    * items [WaterfallChartCustomSubtotal](#waterfallchartcustomsubtotal)
  * data [ChartData](#chartdata)
  * dataLabel [DataLabel](#datalabel)
  * hideTrailingSubtotal `boolean`: True to hide the subtotal column from the end of the series. By default, a subtotal column will appear at the end of each series. Setting this field to true will hide that subtotal column for this series.
  * negativeColumnsStyle [WaterfallChartColumnStyle](#waterfallchartcolumnstyle)
  * positiveColumnsStyle [WaterfallChartColumnStyle](#waterfallchartcolumnstyle)
  * subtotalColumnsStyle [WaterfallChartColumnStyle](#waterfallchartcolumnstyle)

### WaterfallChartSpec
* WaterfallChartSpec `object`: A waterfall chart.
  * connectorLineStyle [LineStyle](#linestyle)
  * domain [WaterfallChartDomain](#waterfallchartdomain)
  * firstValueIsTotal `boolean`: True to interpret the first value as a total.
  * hideConnectorLines `boolean`: True to hide connector lines between columns.
  * series `array`: The data this waterfall chart is visualizing.
    * items [WaterfallChartSeries](#waterfallchartseries)
  * stackedType `string` (values: WATERFALL_STACKED_TYPE_UNSPECIFIED, STACKED, SEQUENTIAL): The stacked type.
  * totalDataLabel [DataLabel](#datalabel)


