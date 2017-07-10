# @datafire/visagecloud
Face search, recognition & classification API. Just make a call to our REST API each time your app needs to access face recognition and classification capabilities.

## Operation: performAnalysisUsingPOST
Perform detection on a given picture or picture URL

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "storePicture": {
      "type": "boolean",
      "description": "Boolean value indicating whether you want the original picture to be stored for later retrieval"
    },
    "pictureURL": {
      "type": "string",
      "description": "The URL of the picture, assuming it is served by a third party server. Server should be accesible from the Internet or through another netwoek by VisageCloud infrastructure"
    },
    "picture": {
      "type": "string",
      "description": "The multipart/form-data version of the image, in case a direct upload is used. At least one of picture or pictureURL must be present"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: retriveLatestUsingGET
Retrieve the last *count* operations per current account

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "count": {
      "type": "integer",
      "format": "int32",
      "description": "How many records to retrieve at a time"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: performRecognitionUsingPOST
Perform labeled recognition on a given picture or picture URL

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "storePicture": {
      "type": "boolean",
      "description": "Boolean value indicating whether you want the original picture to be stored for later retrieval"
    },
    "collectionId": {
      "type": "string",
      "description": "Uniquely identified collection that can store multiple profiles"
    },
    "labels": {
      "type": "array",
      "description": "Labels associated with the given picture or picture URL"
    },
    "attributeFilters": {
      "type": "array",
      "description": "Filters that will be applied on the recognition operation",
      "enum": [
        "GENDER_FILTER",
        "AGE_GROUP_FILTER"
      ]
    },
    "pictureURL": {
      "type": "string",
      "description": "The URL of the picture"
    },
    "picture": {
      "type": "string",
      "description": "The picture itself"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "collectionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: retrieveAnalysisUsingGET
Retrieve a complete analysis object including both detection and recognition information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "analysisId": {
      "type": "string",
      "description": "The ID of the analysis for which the data will be retrieved"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "analysisId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: getAllCollectionsUsingGET
Retrieve all collections

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: removeFaceFromProfileUsingDELETE
Delete existing collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "collectionId": {
      "type": "string",
      "description": "The id of the collection that will be removed"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "collectionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: getProfilesFromCollectionUsingGET
Retrieve existing collection content

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "collectionId": {
      "type": "string",
      "description": "The id of the collection for which the data will be retrieved"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "collectionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: addCollectionUsingPOST
Create new empty collection with given name

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "collectionName": {
      "type": "string",
      "description": "The name of the collection that will be created"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "collectionName"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: getProfileEnrollmentStatusUsingGET
Gets the enrollment status of a profile: information on whether it is suitable for authentication.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "profileId": {
      "type": "string",
      "description": "The profile that contains the faces"
    },
    "collectionId": {
      "type": "string",
      "description": "The collection that contains the profile"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "profileId",
    "collectionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: removeFaceFromProfileUsingDELETE_1
Removes (unmaps) a face, identified by faceHash, from a profile, identified by profileId

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "faceHash": {
      "type": "string",
      "description": "The face that will be removed from a profile"
    },
    "profileId": {
      "type": "string",
      "description": "The profile that contains the face"
    },
    "collectionId": {
      "type": "string",
      "description": "The collection that contains the profile"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "faceHash",
    "profileId",
    "collectionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: getFacesFromProfileUsingGET
Gets all the faceHashes associated to a profile

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "profileId": {
      "type": "string",
      "description": "The profile that contains the faces"
    },
    "collectionId": {
      "type": "string",
      "description": "The collection that contains the profile"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "profileId",
    "collectionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: mapFaceToProfileUsingPOST
Adds (maps) a face, identified by faceHash, to a profile, identified by profileId

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "faceHash": {
      "type": "string",
      "description": "The face that will be added to a profile"
    },
    "profileId": {
      "type": "string",
      "description": "The profile that will store the face"
    },
    "collectionId": {
      "type": "string",
      "description": "The collection that contains the profile"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "faceHash",
    "profileId",
    "collectionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: addProfileUsingPOST
Creates a new profile with no faces associated to it (empty profile)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "collectionId": {
      "type": "string",
      "description": "Uniquely identified collection that can store multiple profiles"
    },
    "externalId": {
      "type": "string",
      "description": "External reference to additional information you don’t want to share with VisageCloud"
    },
    "screenName": {
      "type": "string",
      "description": "Human-readable label for the profile"
    },
    "labels": {
      "type": "array",
      "description": "Allows you to do finer filtering in face recognition"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "collectionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: getLastNFramesUsingGET
Get last processed N frames from stream

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "streamId": {
      "type": "string",
      "description": "The id of the stream for which the frames will be retrieved"
    },
    "count": {
      "type": "integer",
      "format": "int32",
      "description": "How many frames to retrieve at a time"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "streamId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: startStreamUsingPATCH
Start existing stream

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "id": {
      "type": "string",
      "description": "The id of the stream that will be started"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: stopStreamUsingPATCH
Stop existing stream

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "id": {
      "type": "string",
      "description": "The id of the stream that will be stopped"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: removeStreamUsingDELETE
Delete existing stream

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "id": {
      "type": "string",
      "description": "The id of the stream that will be removed"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
## Operation: addStreamUsingPOST
Create new stream with given name

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "secretKey": {
      "type": "string",
      "description": "The secretKey or readOnlyKey provided by VisageCloud"
    },
    "name": {
      "type": "string",
      "description": "The name of the stream that will be created"
    },
    "url": {
      "type": "string",
      "description": "The url of the stream"
    },
    "method": {
      "type": "string",
      "description": "Streaming method",
      "enum": [
        "WEBRTC_PULL",
        "WEBRTC_PUSH",
        "SNAPSHOT_PULL"
      ]
    },
    "username": {
      "type": "string",
      "description": "Username"
    },
    "password": {
      "type": "string",
      "description": "Password"
    },
    "storeOriginalFrames": {
      "type": "boolean",
      "description": "Boolean value indicating whether you want the original picture to be stored for later retrieval"
    },
    "isActive": {
      "type": "boolean",
      "description": "Boolean value indicating whether the stream is currently active or not"
    }
  },
  "additionalProperties": false,
  "required": [
    "secretKey",
    "name",
    "url",
    "username",
    "password"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/RestResponse"
}
```
