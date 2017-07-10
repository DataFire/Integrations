# @datafire/box_upload
The Box Uploads API allows users to add a new file or add a new file version in the same way as uploading file.

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
## Operation: uploadFile
Use the Uploads API to allow users to add a new file.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "file": {
      "type": "string",
      "description": "File to upload"
    },
    "attributes": {
      "type": "string",
      "description": "File attributes"
    }
  },
  "additionalProperties": false,
  "required": [
    "file",
    "attributes"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FileList"
}
```
## Operation: uploadFileVersion
This method is used to upload a new version of an existing file in a user’s account. 

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "FILE_ID": {
      "type": "string"
    },
    "If-Match": {
      "type": "string",
      "description": "This is in the ‘etag’ field of the file object"
    },
    "attributes": {
      "type": "string",
      "description": "File attributes"
    },
    "file": {
      "type": "string",
      "description": "File to upload"
    }
  },
  "additionalProperties": false,
  "required": [
    "FILE_ID",
    "file"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/FileList"
}
```
