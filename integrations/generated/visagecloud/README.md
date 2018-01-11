# @datafire/visagecloud

Client library for VisageCloud

## Installation and Usage
```bash
npm install --save @datafire/visagecloud
```
```js
let visagecloud = require('@datafire/visagecloud').create({
  accessKey: ""
});

visagecloud.performAnalysisUsingPOST({}).then(data => {
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

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * storePicture `boolean`: Boolean value indicating whether you want the original picture to be stored for later retrieval
  * pictureURL `string`: The URL of the picture, assuming it is served by a third party server. Server should be accesible from the Internet or through another netwoek by VisageCloud infrastructure
  * picture `string`: The multipart/form-data version of the image, in case a direct upload is used. At least one of picture or pictureURL must be present

#### Output
* output [RestResponse](#restresponse)

### retriveLatestUsingGET
Retrieve the last *count* operations per current account


```js
visagecloud.retriveLatestUsingGET({
  "secretKey": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * count `integer`: How many records to retrieve at a time

#### Output
* output [RestResponse](#restresponse)

### performRecognitionUsingPOST
Perform labeled recognition on a given picture or picture URL


```js
visagecloud.performRecognitionUsingPOST({
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * storePicture `boolean`: Boolean value indicating whether you want the original picture to be stored for later retrieval
  * collectionId **required** `string`: Uniquely identified collection that can store multiple profiles
  * labels `array`: Labels associated with the given picture or picture URL
  * attributeFilters `array` (values: GENDER_FILTER, AGE_GROUP_FILTER): Filters that will be applied on the recognition operation
  * pictureURL `string`: The URL of the picture
  * picture `string`: The picture itself

#### Output
* output [RestResponse](#restresponse)

### retrieveAnalysisUsingGET
Retrieve a complete analysis object including both detection and recognition information


```js
visagecloud.retrieveAnalysisUsingGET({
  "secretKey": "",
  "analysisId": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * analysisId **required** `string`: The ID of the analysis for which the data will be retrieved

#### Output
* output [RestResponse](#restresponse)

### getAllCollectionsUsingGET
Retrieve all collections


```js
visagecloud.getAllCollectionsUsingGET({
  "secretKey": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud

#### Output
* output [RestResponse](#restresponse)

### removeFaceFromProfileUsingDELETE
Delete existing collection


```js
visagecloud.removeFaceFromProfileUsingDELETE({
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * collectionId **required** `string`: The id of the collection that will be removed

#### Output
* output [RestResponse](#restresponse)

### getProfilesFromCollectionUsingGET
Retrieve existing collection content


```js
visagecloud.getProfilesFromCollectionUsingGET({
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * collectionId **required** `string`: The id of the collection for which the data will be retrieved

#### Output
* output [RestResponse](#restresponse)

### addCollectionUsingPOST
Create new empty collection with given name


```js
visagecloud.addCollectionUsingPOST({
  "secretKey": "",
  "collectionName": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * collectionName **required** `string`: The name of the collection that will be created

#### Output
* output [RestResponse](#restresponse)

### getProfileEnrollmentStatusUsingGET
Gets the enrollment status of a profile: information on whether it is suitable for authentication.


```js
visagecloud.getProfileEnrollmentStatusUsingGET({
  "secretKey": "",
  "profileId": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * profileId **required** `string`: The profile that contains the faces
  * collectionId **required** `string`: The collection that contains the profile

#### Output
* output [RestResponse](#restresponse)

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

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * faceHash **required** `string`: The face that will be removed from a profile
  * profileId **required** `string`: The profile that contains the face
  * collectionId **required** `string`: The collection that contains the profile

#### Output
* output [RestResponse](#restresponse)

### getFacesFromProfileUsingGET
Gets all the faceHashes associated to a profile


```js
visagecloud.getFacesFromProfileUsingGET({
  "secretKey": "",
  "profileId": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * profileId **required** `string`: The profile that contains the faces
  * collectionId **required** `string`: The collection that contains the profile

#### Output
* output [RestResponse](#restresponse)

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

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * faceHash **required** `string`: The face that will be added to a profile
  * profileId **required** `string`: The profile that will store the face
  * collectionId **required** `string`: The collection that contains the profile

#### Output
* output [RestResponse](#restresponse)

### addProfileUsingPOST
Creates a new profile with no faces associated to it (empty profile)


```js
visagecloud.addProfileUsingPOST({
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * collectionId **required** `string`: Uniquely identified collection that can store multiple profiles
  * externalId `string`: External reference to additional information you don’t want to share with VisageCloud
  * screenName `string`: Human-readable label for the profile
  * labels `array`: Allows you to do finer filtering in face recognition

#### Output
* output [RestResponse](#restresponse)

### getLastNFramesUsingGET
Get last processed N frames from stream


```js
visagecloud.getLastNFramesUsingGET({
  "secretKey": "",
  "streamId": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * streamId **required** `string`: The id of the stream for which the frames will be retrieved
  * count `integer`: How many frames to retrieve at a time

#### Output
* output [RestResponse](#restresponse)

### startStreamUsingPATCH
Start existing stream


```js
visagecloud.startStreamUsingPATCH({
  "secretKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * id **required** `string`: The id of the stream that will be started

#### Output
* output [RestResponse](#restresponse)

### stopStreamUsingPATCH
Stop existing stream


```js
visagecloud.stopStreamUsingPATCH({
  "secretKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * id **required** `string`: The id of the stream that will be stopped

#### Output
* output [RestResponse](#restresponse)

### removeStreamUsingDELETE
Delete existing stream


```js
visagecloud.removeStreamUsingDELETE({
  "secretKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * id **required** `string`: The id of the stream that will be removed

#### Output
* output [RestResponse](#restresponse)

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

#### Input
* input `object`
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * name **required** `string`: The name of the stream that will be created
  * url **required** `string`: The url of the stream
  * method `string` (values: WEBRTC_PULL, WEBRTC_PUSH, SNAPSHOT_PULL): Streaming method
  * username **required** `string`: Username
  * password **required** `string`: Password
  * storeOriginalFrames `boolean`: Boolean value indicating whether you want the original picture to be stored for later retrieval
  * isActive `boolean`: Boolean value indicating whether the stream is currently active or not

#### Output
* output [RestResponse](#restresponse)



## Definitions

### RestResponse
* RestResponse `object`
  * message `string`
  * payload `object`
  * status `string`


