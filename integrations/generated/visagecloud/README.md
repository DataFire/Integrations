# @datafire/visagecloud

Client library for VisageCloud

## Installation and Usage
```bash
npm install --save datafire @datafire/visagecloud
```

```js
let datafire = require('datafire');
let visagecloud = require('@datafire/visagecloud').actions;

let account = {
  accessKey: "",
}
let context = new datafire.Context({
  accounts: {
    visagecloud: account,
  }
})


visagecloud.performAnalysisUsingPOST({}, context).then(data => {
  console.log(data);
})
```

## Description
Face search, recognition & classification API. Just make a call to our REST API each time your app needs to access face recognition and classification capabilities.

## Actions
### performAnalysisUsingPOST
Perform detection on a given picture or picture URL


```js
visagecloud.performAnalysisUsingPOST({
  "secretKey": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* storePicture (boolean) - Boolean value indicating whether you want the original picture to be stored for later retrieval
* pictureURL (string) - The URL of the picture, assuming it is served by a third party server. Server should be accesible from the Internet or through another netwoek by VisageCloud infrastructure
* picture (string) - The multipart/form-data version of the image, in case a direct upload is used. At least one of picture or pictureURL must be present

### retriveLatestUsingGET
Retrieve the last *count* operations per current account


```js
visagecloud.retriveLatestUsingGET({
  "secretKey": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* count (integer) - How many records to retrieve at a time

### performRecognitionUsingPOST
Perform labeled recognition on a given picture or picture URL


```js
visagecloud.performRecognitionUsingPOST({
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* storePicture (boolean) - Boolean value indicating whether you want the original picture to be stored for later retrieval
* collectionId (string) **required** - Uniquely identified collection that can store multiple profiles
* labels (array) - Labels associated with the given picture or picture URL
* attributeFilters (array) - Filters that will be applied on the recognition operation
* pictureURL (string) - The URL of the picture
* picture (string) - The picture itself

### retrieveAnalysisUsingGET
Retrieve a complete analysis object including both detection and recognition information


```js
visagecloud.retrieveAnalysisUsingGET({
  "secretKey": "",
  "analysisId": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* analysisId (string) **required** - The ID of the analysis for which the data will be retrieved

### getAllCollectionsUsingGET
Retrieve all collections


```js
visagecloud.getAllCollectionsUsingGET({
  "secretKey": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud

### removeFaceFromProfileUsingDELETE
Delete existing collection


```js
visagecloud.removeFaceFromProfileUsingDELETE({
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* collectionId (string) **required** - The id of the collection that will be removed

### getProfilesFromCollectionUsingGET
Retrieve existing collection content


```js
visagecloud.getProfilesFromCollectionUsingGET({
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* collectionId (string) **required** - The id of the collection for which the data will be retrieved

### addCollectionUsingPOST
Create new empty collection with given name


```js
visagecloud.addCollectionUsingPOST({
  "secretKey": "",
  "collectionName": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* collectionName (string) **required** - The name of the collection that will be created

### getProfileEnrollmentStatusUsingGET
Gets the enrollment status of a profile: information on whether it is suitable for authentication.


```js
visagecloud.getProfileEnrollmentStatusUsingGET({
  "secretKey": "",
  "profileId": "",
  "collectionId": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* profileId (string) **required** - The profile that contains the faces
* collectionId (string) **required** - The collection that contains the profile

### removeFaceFromProfileUsingDELETE_1
Removes (unmaps) a face, identified by faceHash, from a profile, identified by profileId


```js
visagecloud.removeFaceFromProfileUsingDELETE_1({
  "secretKey": "",
  "faceHash": "",
  "profileId": "",
  "collectionId": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* faceHash (string) **required** - The face that will be removed from a profile
* profileId (string) **required** - The profile that contains the face
* collectionId (string) **required** - The collection that contains the profile

### getFacesFromProfileUsingGET
Gets all the faceHashes associated to a profile


```js
visagecloud.getFacesFromProfileUsingGET({
  "secretKey": "",
  "profileId": "",
  "collectionId": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* profileId (string) **required** - The profile that contains the faces
* collectionId (string) **required** - The collection that contains the profile

### mapFaceToProfileUsingPOST
Adds (maps) a face, identified by faceHash, to a profile, identified by profileId


```js
visagecloud.mapFaceToProfileUsingPOST({
  "secretKey": "",
  "faceHash": "",
  "profileId": "",
  "collectionId": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* faceHash (string) **required** - The face that will be added to a profile
* profileId (string) **required** - The profile that will store the face
* collectionId (string) **required** - The collection that contains the profile

### addProfileUsingPOST
Creates a new profile with no faces associated to it (empty profile)


```js
visagecloud.addProfileUsingPOST({
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* collectionId (string) **required** - Uniquely identified collection that can store multiple profiles
* externalId (string) - External reference to additional information you don’t want to share with VisageCloud
* screenName (string) - Human-readable label for the profile
* labels (array) - Allows you to do finer filtering in face recognition

### getLastNFramesUsingGET
Get last processed N frames from stream


```js
visagecloud.getLastNFramesUsingGET({
  "secretKey": "",
  "streamId": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* streamId (string) **required** - The id of the stream for which the frames will be retrieved
* count (integer) - How many frames to retrieve at a time

### startStreamUsingPATCH
Start existing stream


```js
visagecloud.startStreamUsingPATCH({
  "secretKey": "",
  "id": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* id (string) **required** - The id of the stream that will be started

### stopStreamUsingPATCH
Stop existing stream


```js
visagecloud.stopStreamUsingPATCH({
  "secretKey": "",
  "id": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* id (string) **required** - The id of the stream that will be stopped

### removeStreamUsingDELETE
Delete existing stream


```js
visagecloud.removeStreamUsingDELETE({
  "secretKey": "",
  "id": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* id (string) **required** - The id of the stream that will be removed

### addStreamUsingPOST
Create new stream with given name


```js
visagecloud.addStreamUsingPOST({
  "secretKey": "",
  "name": "",
  "url": "",
  "username": "",
  "password": ""
}, context)
```

#### Parameters
* secretKey (string) **required** - The secretKey or readOnlyKey provided by VisageCloud
* name (string) **required** - The name of the stream that will be created
* url (string) **required** - The url of the stream
* method (string) - Streaming method
* username (string) **required** - Username
* password (string) **required** - Password
* storeOriginalFrames (boolean) - Boolean value indicating whether you want the original picture to be stored for later retrieval
* isActive (boolean) - Boolean value indicating whether the stream is currently active or not

