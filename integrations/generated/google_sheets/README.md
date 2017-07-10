# @datafire/google_sheets
Reads and writes Google Sheets.

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: spreadsheets.create
Creates a spreadsheet, returning the newly created spreadsheet.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/Spreadsheet"
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Spreadsheet"
}
```
## Operation: spreadsheets.get
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "spreadsheetId": {
      "type": "string",
      "description": "The spreadsheet to request."
    },
    "ranges": {
      "type": "array",
      "description": "The ranges to retrieve from the spreadsheet."
    },
    "includeGridData": {
      "type": "boolean",
      "description": "True if grid data should be returned.\nThis parameter is ignored if a field mask was set in the request."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "spreadsheetId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Spreadsheet"
}
```
## Operation: spreadsheets.sheets.copyTo
Copies a single sheet from a spreadsheet to another spreadsheet.
Returns the properties of the newly created sheet.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "spreadsheetId": {
      "type": "string",
      "description": "The ID of the spreadsheet containing the sheet to copy."
    },
    "sheetId": {
      "type": "integer",
      "description": "The ID of the sheet to copy."
    },
    "body": {
      "$ref": "#/definitions/CopySheetToAnotherSpreadsheetRequest"
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "spreadsheetId",
    "sheetId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SheetProperties"
}
```
## Operation: spreadsheets.values.get
Returns a range of values from a spreadsheet.
The caller must specify the spreadsheet ID and a range.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "spreadsheetId": {
      "type": "string",
      "description": "The ID of the spreadsheet to retrieve data from."
    },
    "range": {
      "type": "string",
      "description": "The A1 notation of the values to retrieve."
    },
    "majorDimension": {
      "type": "string",
      "description": "The major dimension that results should use.\n\nFor example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`,\nthen requesting `range=A1:B2,majorDimension=ROWS` will return\n`[[1,2],[3,4]]`,\nwhereas requesting `range=A1:B2,majorDimension=COLUMNS` will return\n`[[1,3],[2,4]]`.",
      "enum": [
        "DIMENSION_UNSPECIFIED",
        "ROWS",
        "COLUMNS"
      ]
    },
    "valueRenderOption": {
      "type": "string",
      "description": "How values should be represented in the output.\nThe default render option is ValueRenderOption.FORMATTED_VALUE.",
      "enum": [
        "FORMATTED_VALUE",
        "UNFORMATTED_VALUE",
        "FORMULA"
      ]
    },
    "dateTimeRenderOption": {
      "type": "string",
      "description": "How dates, times, and durations should be represented in the output.\nThis is ignored if value_render_option is\nFORMATTED_VALUE.\nThe default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].",
      "enum": [
        "SERIAL_NUMBER",
        "FORMATTED_STRING"
      ]
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "spreadsheetId",
    "range"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ValueRange"
}
```
## Operation: spreadsheets.values.update
Sets values in a range of a spreadsheet.
The caller must specify the spreadsheet ID, range, and
a valueInputOption.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "spreadsheetId": {
      "type": "string",
      "description": "The ID of the spreadsheet to update."
    },
    "range": {
      "type": "string",
      "description": "The A1 notation of the values to update."
    },
    "responseValueRenderOption": {
      "type": "string",
      "description": "Determines how values in the response should be rendered.\nThe default render option is ValueRenderOption.FORMATTED_VALUE.",
      "enum": [
        "FORMATTED_VALUE",
        "UNFORMATTED_VALUE",
        "FORMULA"
      ]
    },
    "valueInputOption": {
      "type": "string",
      "description": "How the input data should be interpreted.",
      "enum": [
        "INPUT_VALUE_OPTION_UNSPECIFIED",
        "RAW",
        "USER_ENTERED"
      ]
    },
    "responseDateTimeRenderOption": {
      "type": "string",
      "description": "Determines how dates, times, and durations in the response should be\nrendered. This is ignored if response_value_render_option is\nFORMATTED_VALUE.\nThe default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].",
      "enum": [
        "SERIAL_NUMBER",
        "FORMATTED_STRING"
      ]
    },
    "includeValuesInResponse": {
      "type": "boolean",
      "description": "Determines if the update response should include the values\nof the cells that were updated. By default, responses\ndo not include the updated values.\nIf the range to write was larger than than the range actually written,\nthe response will include all values in the requested range (excluding\ntrailing empty rows and columns)."
    },
    "body": {
      "$ref": "#/definitions/ValueRange"
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "spreadsheetId",
    "range"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UpdateValuesResponse"
}
```
## Operation: spreadsheets.values.append
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "spreadsheetId": {
      "type": "string",
      "description": "The ID of the spreadsheet to update."
    },
    "range": {
      "type": "string",
      "description": "The A1 notation of a range to search for a logical table of data.\nValues will be appended after the last row of the table."
    },
    "includeValuesInResponse": {
      "type": "boolean",
      "description": "Determines if the update response should include the values\nof the cells that were appended. By default, responses\ndo not include the updated values."
    },
    "responseValueRenderOption": {
      "type": "string",
      "description": "Determines how values in the response should be rendered.\nThe default render option is ValueRenderOption.FORMATTED_VALUE.",
      "enum": [
        "FORMATTED_VALUE",
        "UNFORMATTED_VALUE",
        "FORMULA"
      ]
    },
    "insertDataOption": {
      "type": "string",
      "description": "How the input data should be inserted.",
      "enum": [
        "OVERWRITE",
        "INSERT_ROWS"
      ]
    },
    "valueInputOption": {
      "type": "string",
      "description": "How the input data should be interpreted.",
      "enum": [
        "INPUT_VALUE_OPTION_UNSPECIFIED",
        "RAW",
        "USER_ENTERED"
      ]
    },
    "responseDateTimeRenderOption": {
      "type": "string",
      "description": "Determines how dates, times, and durations in the response should be\nrendered. This is ignored if response_value_render_option is\nFORMATTED_VALUE.\nThe default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].",
      "enum": [
        "SERIAL_NUMBER",
        "FORMATTED_STRING"
      ]
    },
    "body": {
      "$ref": "#/definitions/ValueRange"
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "spreadsheetId",
    "range"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/AppendValuesResponse"
}
```
## Operation: spreadsheets.values.clear
Clears values from a spreadsheet.
The caller must specify the spreadsheet ID and range.
Only values are cleared -- all other properties of the cell (such as
formatting, data validation, etc..) are kept.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "spreadsheetId": {
      "type": "string",
      "description": "The ID of the spreadsheet to update."
    },
    "range": {
      "type": "string",
      "description": "The A1 notation of the values to clear."
    },
    "body": {
      "$ref": "#/definitions/ClearValuesRequest"
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "spreadsheetId",
    "range"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ClearValuesResponse"
}
```
## Operation: spreadsheets.values.batchClear
Clears one or more ranges of values from a spreadsheet.
The caller must specify the spreadsheet ID and one or more ranges.
Only values are cleared -- all other properties of the cell (such as
formatting, data validation, etc..) are kept.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "spreadsheetId": {
      "type": "string",
      "description": "The ID of the spreadsheet to update."
    },
    "body": {
      "$ref": "#/definitions/BatchClearValuesRequest"
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "spreadsheetId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BatchClearValuesResponse"
}
```
## Operation: spreadsheets.values.batchGet
Returns one or more ranges of values from a spreadsheet.
The caller must specify the spreadsheet ID and one or more ranges.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "spreadsheetId": {
      "type": "string",
      "description": "The ID of the spreadsheet to retrieve data from."
    },
    "valueRenderOption": {
      "type": "string",
      "description": "How values should be represented in the output.\nThe default render option is ValueRenderOption.FORMATTED_VALUE.",
      "enum": [
        "FORMATTED_VALUE",
        "UNFORMATTED_VALUE",
        "FORMULA"
      ]
    },
    "dateTimeRenderOption": {
      "type": "string",
      "description": "How dates, times, and durations should be represented in the output.\nThis is ignored if value_render_option is\nFORMATTED_VALUE.\nThe default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].",
      "enum": [
        "SERIAL_NUMBER",
        "FORMATTED_STRING"
      ]
    },
    "ranges": {
      "type": "array",
      "description": "The A1 notation of the values to retrieve."
    },
    "majorDimension": {
      "type": "string",
      "description": "The major dimension that results should use.\n\nFor example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`,\nthen requesting `range=A1:B2,majorDimension=ROWS` will return\n`[[1,2],[3,4]]`,\nwhereas requesting `range=A1:B2,majorDimension=COLUMNS` will return\n`[[1,3],[2,4]]`.",
      "enum": [
        "DIMENSION_UNSPECIFIED",
        "ROWS",
        "COLUMNS"
      ]
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "spreadsheetId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BatchGetValuesResponse"
}
```
## Operation: spreadsheets.values.batchUpdate
Sets values in one or more ranges of a spreadsheet.
The caller must specify the spreadsheet ID,
a valueInputOption, and one or more
ValueRanges.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "spreadsheetId": {
      "type": "string",
      "description": "The ID of the spreadsheet to update."
    },
    "body": {
      "$ref": "#/definitions/BatchUpdateValuesRequest"
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "spreadsheetId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BatchUpdateValuesResponse"
}
```
## Operation: spreadsheets.batchUpdate
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "spreadsheetId": {
      "type": "string",
      "description": "The spreadsheet to apply the updates to."
    },
    "body": {
      "$ref": "#/definitions/BatchUpdateSpreadsheetRequest"
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "spreadsheetId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BatchUpdateSpreadsheetResponse"
}
```
