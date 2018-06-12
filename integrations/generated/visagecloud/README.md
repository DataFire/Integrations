# @datafire/visagecloud

Client library for VisageCloud

## Installation and Usage
```bash
npm install --save @datafire/visagecloud
```
```js
let visagecloud = require('@datafire/visagecloud').create();

visagecloud.getAccountByAccessKeyUsingGET({
  "accessKey": "",
  "secretKey": ""
}).then(data => {
  console.log(data);
});
```

## Description

Face search, recognition & classification API. Just make a call to our REST API each time your app needs to access face recognition and classification capabilities.

## Actions

### getAccountByAccessKeyUsingGET
Get account information by accessKey and secretKey


```js
visagecloud.getAccountByAccessKeyUsingGET({
  "accessKey": "",
  "secretKey": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: accessKey
  * secretKey **required** `string`: secretKey

#### Output
* output [RestResponse](#restresponse)

### getBillingPerAccountUsingGET
Get billing information by accessKey and secretKey


```js
visagecloud.getBillingPerAccountUsingGET({
  "accessKey": "",
  "secretKey": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: accessKey
  * secretKey **required** `string`: secretKey
  * startDateTime `string`: startDateTime
  * endDateTime `string`: endDateTime
  * dateTemplate `string`: dateTemplate

#### Output
* output [RestResponse](#restresponse)

### changePasswordUsingPOST
Change password for an account using old password


```js
visagecloud.changePasswordUsingPOST({
  "email": "",
  "oldPassword": "",
  "newPassword": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`: email
  * oldPassword **required** `string`: oldPassword
  * newPassword **required** `string`: newPassword

#### Output
* output [RestResponse](#restresponse)

### loginWithEmailUsingPOST
Get account information including accessKey and secretKey by email and password


```js
visagecloud.loginWithEmailUsingPOST({
  "email": "",
  "password": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`: email
  * password **required** `string`: password

#### Output
* output [RestResponse](#restresponse)

### compareFacesUsingGET
Compare several faces identified by faceHash, without depending on mapping faces to profiles


```js
visagecloud.compareFacesUsingGET({
  "accessKey": "",
  "secretKey": "",
  "faceHashes": []
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * faceHashes **required** `array`: The IDs of the faces which you want compared, comma-separated
  * showDetails `boolean`: Show details

#### Output
* output [RestResponse](#restresponse)

### performAnalysisUsingPOST
Perform detection on a given picture or picture URL


```js
visagecloud.performAnalysisUsingPOST({
  "accessKey": "",
  "secretKey": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * storeAnalysisPicture `boolean`: Boolean value indicating whether you want the picture of the analysis to be stored for later retrieval
  * storeFacePictures `boolean`: Boolean value indicating whether you want the faces inside the picture to be stored for later retrieval
  * storeResult `boolean`: Boolean value indicating whether you want the result of the analysis to be stored
  * retentionTime `integer`: How many seconds the results should be retained in stoarage?
  * pictureURL `string`: The URL of the picture, assuming it is served by a third party server. Server should be accesible from the Internet or through another netwoek by VisageCloud infrastructure
  * picture `string`: The multipart/form-data version of the image, in case a direct upload is used. At least one of picture or pictureURL must be present
  * algorithmVersion `string` (values: V1, V2): Algorithm version (V2 is more performant but not backward compatible)
  * skipEXIF `boolean`: Skip EXIF rotation procesing
  * waitForPictureUpload `boolean`: Waits until the picture is successfully uploaded, before returning the response back the the client
  * filters `array`: [For advanced users only] Change feature filters for robustness of feature extraction. Tweaking this parameter may affect per
  * options `string`: [For advanced users only] Options for preprocessing of image.

#### Output
* output [RestResponse](#restresponse)

### retriveLatestUsingGET
Retrieve the last *count* operations per current account


```js
visagecloud.retriveLatestUsingGET({
  "accessKey": "",
  "secretKey": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * count `integer`: How many records to retrieve at a time

#### Output
* output [RestResponse](#restresponse)

### performRecognitionUsingPOST
Perform labeled recognition on a given picture or picture URL


```js
visagecloud.performRecognitionUsingPOST({
  "accessKey": "",
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * storeAnalysisPicture `boolean`: Boolean value indicating whether you want the picture of the analysis to be stored for later retrieval
  * storeFacePictures `boolean`: Boolean value indicating whether you want the faces inside the picture to be stored for later retrieval
  * storeResult `boolean`: Boolean value indicating whether you want the result of the analysis to be stored
  * retentionTime `integer`: How many seconds the results should be retained in stoarage?
  * collectionId **required** `string`: Uniquely identified collection that can store multiple profiles
  * labels `array`: Labels associated with the given picture or picture URL
  * attributeFilters `array` (values: NO_FILTER, GENDER_FILTER, AGE_GROUP_FILTER): Filters that will be applied on the recognition operation
  * pictureURL `string`: The URL of the picture
  * picture `string`: The picture itself
  * algorithmVersion `string` (values: V1, V2): Algorithm version (V2 is more performant but not backward compatible)
  * skipEXIF rotation processing `boolean`: Skip EXIF rotation procesing
  * waitForPictureUpload `boolean`: Waits until the picture is successfully uploaded, before returning the response back the the client
  * filters `array`: [For advanced users only] Change feature filters for robustness of feature extraction. Tweaking this parameter may affect per
  * options `string`: [For advanced users only] Options for preprocessing of image.

#### Output
* output [RestResponse](#restresponse)

### retrieveAnalysisUsingGET
Retrieve a complete analysis object including both detection and recognition information


```js
visagecloud.retrieveAnalysisUsingGET({
  "accessKey": "",
  "secretKey": "",
  "analysisId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * analysisId **required** `string`: The ID of the analysis for which the data will be retrieved

#### Output
* output [RestResponse](#restresponse)

### counterUsingPOST
Count individuals in streams or collections


```js
visagecloud.counterUsingPOST({
  "accessKey": "",
  "secretKey": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * collectionIds `array`: Collection ids
  * streamIds `array`: Stream Ids
  * startDateTime `string`: startDateTime
  * endDateTime `string`: endDateTime
  * visitDuration `integer`: visitDuration
  * maxIterations `integer`: maxIterations
  * maxBatchIterations `integer`: maxBatchIterations
  * minNeighborsMergedPerIteration `integer`: minNeighborsMergedPerIteration
  * mergingStep `number`: mergingStep
  * shuffling `boolean`: shuffling

#### Output
* output [RestResponse](#restresponse)

### presenceTimeseriesUsingPOST
Show audience (based on number of occurrences of each person) breakdown per declared attribute (age, gender).


```js
visagecloud.presenceTimeseriesUsingPOST({
  "accessKey": "",
  "secretKey": "",
  "attributes": []
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * streamIds `array`: Stream Ids
  * startDateTime `string`: startDateTime
  * endDateTime `string`: endDateTime
  * step `integer`: step
  * attributes **required** `array`: attributes

#### Output
* output [RestResponse](#restresponse)

### presenceTotalUsingPOST
Show presence (based on number of occurences of each face) breakdown per declared attribute (age, gender)


```js
visagecloud.presenceTotalUsingPOST({
  "accessKey": "",
  "secretKey": "",
  "streamIds": [],
  "attributes": []
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * streamIds **required** `array`: Stream Ids
  * startDateTime `string`: startDateTime
  * endDateTime `string`: endDateTime
  * attributes **required** `array`: attributes

#### Output
* output [RestResponse](#restresponse)

### removeClassiferUsingDELETE
Delete existing classifier


```js
visagecloud.removeClassiferUsingDELETE({
  "accessKey": "",
  "secretKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * id **required** `string`: The id of the classifier that will be removed

#### Output
* output [RestResponse](#restresponse)

### getClassiferFullUsingGET
Get classifier full


```js
visagecloud.getClassiferFullUsingGET({
  "accessKey": "",
  "secretKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * id **required** `string`: The id of the classifier that you want the status for

#### Output
* output [RestResponse](#restresponse)

### addSVMClassifierUsingPOST
Create new SVM classifier with given name


```js
visagecloud.addSVMClassifierUsingPOST({
  "accessKey": "",
  "secretKey": "",
  "name": "",
  "collectionIds": [],
  "classificationAttributeName": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * name **required** `string`: The name of the SVM classifier that will be created
  * collectionIds **required** `array`: Collection ids
  * preprocessor `string`: Preprocessor
  * classificationAttributeName **required** `string`: Classification attribute name
  * considerViewPoints `boolean`: Consider view point
  * seed `integer`: Seed for divididing training and evaluation sets
  * trainingRatio `number`: Training ratio
  * probabilityParameter `integer`: Probability parameter
  * gammaParameter `number`: Gamma parameter
  * nuParameter `number`: Nu parameter
  * cParameter `number`: c parameter
  * svmTypeParameter `integer`: SVM type parameter
  * kernelTypeParameter `integer`: Kernel type parameter
  * cacheSizeParameter `number`: Cache size parameter
  * epsParameter `number`: Eps parameter

#### Output
* output [RestResponse](#restresponse)

### getClassiferStatusUsingGET
Get classifer status


```js
visagecloud.getClassiferStatusUsingGET({
  "accessKey": "",
  "secretKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * id **required** `string`: The id of the classifier that you want the status for

#### Output
* output [RestResponse](#restresponse)

### getAllCollectionsUsingGET
Retrieve all collections


```js
visagecloud.getAllCollectionsUsingGET({
  "accessKey": "",
  "secretKey": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud

#### Output
* output [RestResponse](#restresponse)

### addCollectionUsingPOST
Create new empty collection with given name


```js
visagecloud.addCollectionUsingPOST({
  "accessKey": "",
  "secretKey": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * name **required** `string`: The name of the collection that will be created
  * preload `boolean`: Defined whether to preload collection
  * evictable `boolean`: Defined whether the collection can be evicted
  * purposes `array` (values: FEATURES, LANDMARKS, ATTRIBUTES): The newly declared purposes of the collection

#### Output
* output [RestResponse](#restresponse)

### getAllCollections2UsingGET
Retrieve all collections


```js
visagecloud.getAllCollections2UsingGET({
  "accessKey": "",
  "secretKey": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud

#### Output
* output [RestResponse](#restresponse)

### deleteCollection2UsingDELETE
Delete existing collection with associated profiles and faces.


```js
visagecloud.deleteCollection2UsingDELETE({
  "accessKey": "",
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * collectionId **required** `string`: The id of the collection that will be removed

#### Output
* output [RestResponse](#restresponse)

### getCollection2UsingGET
Retrieve existing collection content


```js
visagecloud.getCollection2UsingGET({
  "accessKey": "",
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * collectionId **required** `string`: The id of the collection for which the data will be retrieved

#### Output
* output [RestResponse](#restresponse)

### addCollection2UsingPOST
Create new empty collection with given name


```js
visagecloud.addCollection2UsingPOST({
  "accessKey": "",
  "secretKey": "",
  "collectionName": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * collectionName **required** `string`: The name of the collection that will be created
  * preload `boolean`: Defined whether to preload collection
  * evictable `boolean`: Defined whether the collection can be evicted
  * purposes `array` (values: FEATURES, LANDMARKS, ATTRIBUTES): The newly declared purposes of the collection

#### Output
* output [RestResponse](#restresponse)

### exportCSVUsingGET
Retrieve collection content for data analysis.


```js
visagecloud.exportCSVUsingGET({
  "accessKey": "",
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * collectionId **required** `string`: The id of the collection for which the data will be retrieved

#### Output
* output [StreamingResponseBody](#streamingresponsebody)

### repurposeCollectionUsingPUT
Change purpose of existing collection


```js
visagecloud.repurposeCollectionUsingPUT({
  "accessKey": "",
  "secretKey": "",
  "collectionId": "",
  "purposes": []
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * collectionId **required** `string`: The id of the collection for which the data will be retrieved
  * purposes **required** `array` (values: FEATURES, LANDMARKS, ATTRIBUTES): The newly declared purposes of the collection

#### Output
* output [RestResponse](#restresponse)

### deleteCollectionUsingDELETE
Delete existing collection with associated profiles and faces.


```js
visagecloud.deleteCollectionUsingDELETE({
  "accessKey": "",
  "secretKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * id **required** `string`: The id of the collection that will be removed

#### Output
* output [RestResponse](#restresponse)

### getCollectionUsingGET
Retrieve existing collection content


```js
visagecloud.getCollectionUsingGET({
  "accessKey": "",
  "secretKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * id **required** `string`: The id of the collection for which the data will be retrieved

#### Output
* output [RestResponse](#restresponse)

### updateCollectionUsingPATCH
Update an existing collection with a given id


```js
visagecloud.updateCollectionUsingPATCH({
  "accessKey": "",
  "secretKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * name `string`: The name of the collection that will be updated
  * purposes `array` (values: FEATURES, LANDMARKS, ATTRIBUTES): The newly declared purposes of the collection
  * id **required** `string`: The id of the collection that will be updated

#### Output
* output [RestResponse](#restresponse)

### updateCollection2UsingPOST
Update an existing collection with a given id


```js
visagecloud.updateCollection2UsingPOST({
  "accessKey": "",
  "secretKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * name `string`: The name of the collection that will be updated
  * purposes `array` (values: FEATURES, LANDMARKS, ATTRIBUTES): The newly declared purposes of the collection
  * id **required** `string`: The id of the collection that will be updated

#### Output
* output [RestResponse](#restresponse)

### getAllCollectionProfilesUsingGET
Gets all the profiles associated to a collection


```js
visagecloud.getAllCollectionProfilesUsingGET({
  "accessKey": "",
  "secretKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * id **required** `string`: The collection that contains the profile

#### Output
* output [RestResponse](#restresponse)

### removeClassificationAttributesFromProfileUsingDELETE
Removes classification attributes from a profile


```js
visagecloud.removeClassificationAttributesFromProfileUsingDELETE({
  "accessKey": "",
  "secretKey": "",
  "profileId": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * profileId **required** `string`: The profile associated with the classification attributes
  * collectionId **required** `string`: The collection that contains the profile

#### Output
* output [RestResponse](#restresponse)

### getClassificationAttributesFromProfileUsingGET
Gets classification attributes from a profile


```js
visagecloud.getClassificationAttributesFromProfileUsingGET({
  "accessKey": "",
  "secretKey": "",
  "profileId": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * profileId **required** `string`: The profile associated with the classification attributes
  * collectionId **required** `string`: The collection that contains the profile

#### Output
* output [RestResponse](#restresponse)

### mapClassificationAttributesToProfileUsingPUT
Maps classification attributes to a profile


```js
visagecloud.mapClassificationAttributesToProfileUsingPUT({
  "accessKey": "",
  "secretKey": "",
  "profileId": "",
  "collectionId": "",
  "classificationAttributes": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * profileId **required** `string`: The profile associated with the classification attributes
  * collectionId **required** `string`: The collection that contains the profile
  * classificationAttributes **required** `string`: Comma separated key:value classification attributes

#### Output
* output [RestResponse](#restresponse)

### getProfileEnrollmentStatusUsingGET
Gets the enrollment status of a profile: information on whether it is suitable for authentication.


```js
visagecloud.getProfileEnrollmentStatusUsingGET({
  "accessKey": "",
  "secretKey": "",
  "profileId": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * profileId **required** `string`: The profile that contains the faces
  * collectionId **required** `string`: The collection that contains the profile

#### Output
* output [RestResponse](#restresponse)

### removeFacesFromProfileUsingDELETE
Removes (unmaps) a list of faces, identified by faceHashes, from a profile, identified by profileId


```js
visagecloud.removeFacesFromProfileUsingDELETE({
  "accessKey": "",
  "secretKey": "",
  "faceHashes": "",
  "profileId": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * faceHashes **required** `string`: Comma separated face hashes, that will be removed from a profile
  * profileId **required** `string`: The profile that contains the face
  * collectionId **required** `string`: The collection that contains the profile

#### Output
* output [RestResponse](#restresponse)

### getFacesFromProfileUsingGET
Gets all the faceHashes associated to a profile


```js
visagecloud.getFacesFromProfileUsingGET({
  "accessKey": "",
  "secretKey": "",
  "profileId": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * profileId **required** `string`: The profile that contains the faces
  * collectionId **required** `string`: The collection that contains the profile

#### Output
* output [RestResponse](#restresponse)

### mapFacesToProfileUsingPOST
Adds (maps) a list of faces, identified by faceHashes, to a profile, identified by profileId


```js
visagecloud.mapFacesToProfileUsingPOST({
  "accessKey": "",
  "secretKey": "",
  "faceHashes": "",
  "profileId": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * faceHashes **required** `string`: Comma separated face hashes, that will be associated to a profile
  * profileId **required** `string`: The profile that will store the face
  * collectionId **required** `string`: The collection that contains the profile

#### Output
* output [RestResponse](#restresponse)

### deleteProfile2UsingDELETE
Deletes a profile and unmaps all its faces


```js
visagecloud.deleteProfile2UsingDELETE({
  "accessKey": "",
  "secretKey": "",
  "collectionId": "",
  "profileId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * collectionId **required** `string`: Uniquely identified collection that can store multiple profiles
  * profileId **required** `string`: The profile id (provide this if you don't have the externalId

#### Output
* output [RestResponse](#restresponse)

### addProfileUsingPOST
Creates a new profile with no faces associated to it (empty profile)


```js
visagecloud.addProfileUsingPOST({
  "accessKey": "",
  "secretKey": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * collectionId **required** `string`: Uniquely identified collection that can store multiple profiles
  * externalId `string`: External reference to additional information you don’t want to share with VisageCloud
  * screenName `string`: Human-readable label for the profile
  * labels `array`: Allows you to do finer filtering in face recognition
  * classificationAttributes `string`: Comma separated key:value classification attributes
  * details `string`: Comma separated key:value details of profile

#### Output
* output [RestResponse](#restresponse)

### deleteProfileUsingDELETE
Deletes a profile and unmaps all its faces


```js
visagecloud.deleteProfileUsingDELETE({
  "accessKey": "",
  "secretKey": "",
  "collectionId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * collectionId **required** `string`: Uniquely identified collection that can store multiple profiles
  * id **required** `string`: The profile id (provide this if you don't have the externalId

#### Output
* output [RestResponse](#restresponse)

### getProfileUsingGET
Retrieves a profile


```js
visagecloud.getProfileUsingGET({
  "accessKey": "",
  "secretKey": "",
  "collectionId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * collectionId **required** `string`: Uniquely identified collection that can store multiple profiles
  * withFaces `string`: Retrieves the profile with all its associated faces
  * id **required** `string`: The profile id (provide this if you don't have the externalId

#### Output
* output [RestResponse](#restresponse)

### updateProfileUsingPATCH
Update an existing profile with a given id


```js
visagecloud.updateProfileUsingPATCH({
  "accessKey": "",
  "secretKey": "",
  "id": "",
  "collectionId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * id **required** `string`: The id of the profile that will be updated
  * collectionId **required** `string`: Uniquely identified collection that can store multiple profiles
  * externalId `string`: External reference to additional information you don’t want to share with VisageCloud
  * screenName `string`: Human-readable label for the profile
  * labels `array`: Allows you to do finer filtering in face recognition
  * classificationAttributes `string`: Comma separated key:value classification attributes
  * details `string`: Comma separated key:value details of profile

#### Output
* output [RestResponse](#restresponse)

### streamsByAccountUsingGET
Show status of all streams from account


```js
visagecloud.streamsByAccountUsingGET({
  "accessKey": "",
  "secretKey": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud

#### Output
* output [RestResponse](#restresponse)

### getLastNAttedanceUsingGET
Get last N recognized individuals from stream


```js
visagecloud.getLastNAttedanceUsingGET({
  "accessKey": "",
  "secretKey": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * streamIds `array`: The id of the stream for which the frames will be retrieved
  * count `integer`: How many frames to retrieve at a time

#### Output
* output [RestResponse](#restresponse)

### cleanupStreamUsingPATCH
Cleanup frames older than specified timeframe


```js
visagecloud.cleanupStreamUsingPATCH({
  "accessKey": "",
  "secretKey": "",
  "streamId": "",
  "interval": 0
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * streamId **required** `string`: The id of the stream that will be stopped
  * interval **required** `integer`: Frames older than interval (seconds) will be cleaned up

#### Output
* output [RestResponse](#restresponse)

### getFrameImageUsingGET
Get individual frame image


```js
visagecloud.getFrameImageUsingGET({
  "accessKey": "",
  "secretKey": "",
  "streamId": "",
  "timestamp": 0
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * streamId **required** `string`: The id of the stream for which the frames will be retrieved
  * timestamp **required** `integer`: Timestamp of frame to retrieve

#### Output
* output `array`
  * items `string`

### getLastNFramesUsingGET
Get last processed N frames from stream


```js
visagecloud.getLastNFramesUsingGET({
  "accessKey": "",
  "secretKey": "",
  "streamId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey or readOnlyKey provided by VisageCloud
  * streamId **required** `string`: The id of the stream for which the frames will be retrieved
  * count `integer`: How many frames to retrieve at a time
  * collectionId `string`: The collection id you want to run recognition against
  * labels `array`: Labels associated with the given picture or picture URL
  * attributeFilters `array` (values: NO_FILTER, GENDER_FILTER, AGE_GROUP_FILTER): Filters that will be applied on the recognition operation

#### Output
* output [RestResponse](#restresponse)

### startStreamUsingPATCH
Start existing stream


```js
visagecloud.startStreamUsingPATCH({
  "accessKey": "",
  "secretKey": "",
  "streamId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * streamId **required** `string`: The id of the stream that will be started

#### Output
* output [RestResponse](#restresponse)

### stopStreamUsingPATCH
Stop existing stream


```js
visagecloud.stopStreamUsingPATCH({
  "accessKey": "",
  "secretKey": "",
  "streamId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * streamId **required** `string`: The id of the stream that will be stopped

#### Output
* output [RestResponse](#restresponse)

### addStreamUsingPOST
Create new stream with given name


```js
visagecloud.addStreamUsingPOST({
  "accessKey": "",
  "secretKey": "",
  "name": "",
  "url": "",
  "attributes": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * name **required** `string`: The name of the stream that will be created
  * url **required** `string`: The url of the stream
  * method `string` (values: WEBRTC_PULL, WEBRTC_PUSH, INGESTION_ENDPOINT): Streaming method
  * username `string`: Username
  * password `string`: Password
  * skipFramesWithNoFaces `boolean`: Boolean value indicating whether you want the original picture to be stored for later retrieval
  * retentionTime `integer`: Number of seconds for frames to be kept. Default is 605000s (7 days)
  * storeOriginalFrames `boolean`: Boolean value indicating whether you want the original picture to be stored for later retrieval
  * storeAttendanceFaces `boolean`: Boolean value indicating whether you want to store permanently store faces clippings of the recognized faces
  * storeAttendanceFrames `boolean`: Boolean value indicating whether you want to store permanently store frames with a recognized face in them
  * isActive `boolean`: Boolean value indicating whether the stream is currently active or not
  * associatedCollections `array`: List of collection ids which will be used to measure attendance
  * attributes **required** `string`: Attributes of the stream

#### Output
* output [RestResponse](#restresponse)

### removeStreamUsingDELETE
Delete existing stream


```js
visagecloud.removeStreamUsingDELETE({
  "accessKey": "",
  "secretKey": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * id **required** `string`: The id of the stream that will be removed

#### Output
* output [RestResponse](#restresponse)

### getStreamUsingGET
Get an existing stream with a given ID


```js
visagecloud.getStreamUsingGET({
  "accessKey": "",
  "secretKey": "",
  "streamId": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * streamId **required** `string`: The id of the stream for which the data will be retrieved

#### Output
* output [RestResponse](#restresponse)

### updateStreamUsingPATCH
Update an existing stream with a given ID


```js
visagecloud.updateStreamUsingPATCH({
  "accessKey": "",
  "secretKey": "",
  "streamId": "",
  "attributes": ""
}, context)
```

#### Input
* input `object`
  * accessKey **required** `string`: The accessKey provided by VisageCloud
  * secretKey **required** `string`: The secretKey provided by VisageCloud
  * streamId **required** `string`: The id of the stream that will be updated
  * retentionTime `integer`: Number of seconds for frames to be kept. Default is 605000 seconds (7 days)
  * storeOriginalFrames `boolean`: Boolean value indicating whether you want the original picture to be stored for later retrieval
  * associatedCollections `array`: List of collection ids which will be used to measure attendance
  * attributes **required** `string`: Attributes of the stream
  * storeAttendanceFaces `boolean`: Boolean value indicating whether you want to store permanently store faces clippings of the recognized faces
  * storeAttendanceFrames `boolean`: Boolean value indicating whether you want to store permanently store frames with a recognized face in them

#### Output
* output [RestResponse](#restresponse)



## Definitions

### RestResponse
* RestResponse `object`
  * message `string`
  * payload `object`
  * status `string`

### StreamingResponseBody
* StreamingResponseBody `object`


