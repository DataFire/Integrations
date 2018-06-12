# @datafire/azure_cognitiveservices_face

Client library for Face

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_face
```
```js
let azure_cognitiveservices_face = require('@datafire/azure_cognitiveservices_face').create({
  apim_key: ""
});

azure_cognitiveservices_face.PersonGroup_List({}).then(data => {
  console.log(data);
});
```

## Description

An API for face detection, verification, and identification.

## Actions

### Face_DetectWithUrl
Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.


```js
azure_cognitiveservices_face.Face_DetectWithUrl({
  "ImageUrl": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * returnFaceId `boolean`: A value indicating whether the operation should return faceIds of detected faces.
  * returnFaceLandmarks `boolean`: A value indicating whether the operation should return landmarks of the detected faces.
  * returnFaceAttributes `array`: Analyze and return the one or more specified face attributes in the comma-separated string like "returnFaceAttributes=age,gender". Supported face attributes include age, gender, headPose, smile, facialHair, glasses and emotion. Note that each face attribute analysis has additional computational and time cost.
  * ImageUrl **required** `object`
    * url **required** `string`: Publicly reachable URL of an image

#### Output
* output [DetectedFaces](#detectedfaces)

### FaceList_List
Retrieve information about all existing face lists. Only faceListId, name and userData will be returned.


```js
azure_cognitiveservices_face.FaceList_List(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [FaceLists](#facelists)

### FaceList_Delete
Delete an existing face list according to faceListId. Persisted face images in the face list will also be deleted.


```js
azure_cognitiveservices_face.FaceList_Delete({
  "faceListId": ""
}, context)
```

#### Input
* input `object`
  * faceListId **required** `string`: Id referencing a particular face list.

#### Output
*Output schema unknown*

### FaceList_Get
Retrieve a face list's information.


```js
azure_cognitiveservices_face.FaceList_Get({
  "faceListId": ""
}, context)
```

#### Input
* input `object`
  * faceListId **required** `string`: Id referencing a particular face list.

#### Output
* output [FaceList](#facelist)

### FaceList_Update
Update information of a face list.


```js
azure_cognitiveservices_face.FaceList_Update({
  "faceListId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * faceListId **required** `string`: Id referencing a particular face list.
  * body **required** [NameAndUserDataContract](#nameanduserdatacontract)

#### Output
*Output schema unknown*

### FaceList_Create
Create an empty face list. Up to 64 face lists are allowed to exist in one subscription.


```js
azure_cognitiveservices_face.FaceList_Create({
  "faceListId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * faceListId **required** `string`: Id referencing a particular face list.
  * body **required** [NameAndUserDataContract](#nameanduserdatacontract)

#### Output
*Output schema unknown*

### FaceList_AddFaceFromUrl
Add a face to a face list. The input face is specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face, and persistedFaceId will not expire.


```js
azure_cognitiveservices_face.FaceList_AddFaceFromUrl({
  "faceListId": "",
  "ImageUrl": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * faceListId **required** `string`: Id referencing a particular face list.
  * userData `string`: User-specified data about the face for any purpose. The maximum length is 1KB.
  * targetFace `array`: A face rectangle to specify the target face to be added to a person in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image.
  * ImageUrl **required** `object`
    * url **required** `string`: Publicly reachable URL of an image

#### Output
* output [PersistedFace](#persistedface)

### FaceList_DeleteFace
Delete an existing face from a face list (given by a persisitedFaceId and a faceListId). Persisted image related to the face will also be deleted.


```js
azure_cognitiveservices_face.FaceList_DeleteFace({
  "faceListId": "",
  "persistedFaceId": ""
}, context)
```

#### Input
* input `object`
  * faceListId **required** `string`: Id referencing a particular face list.
  * persistedFaceId **required** `string`: Id referencing a particular persistedFaceId of an existing face.

#### Output
*Output schema unknown*

### Face_FindSimilar
Given query face's faceId, find the similar-looking faces from a faceId array or a faceListId.


```js
azure_cognitiveservices_face.Face_FindSimilar({
  "body": {
    "faceId": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [FindSimilarRequest](#findsimilarrequest)

#### Output
* output [SimilarFaces](#similarfaces)

### Face_Group
Divide candidate faces into groups based on face similarity.


```js
azure_cognitiveservices_face.Face_Group({
  "body": {
    "faceIds": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [GroupRequest](#grouprequest)

#### Output
* output [GroupResult](#groupresult)

### Face_Identify
Identify unknown faces from a person group.


```js
azure_cognitiveservices_face.Face_Identify({
  "body": {
    "personGroupId": "",
    "faceIds": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [IdentifyRequest](#identifyrequest)

#### Output
* output [IdentifyResults](#identifyresults)

### PersonGroup_List
List person groups and their information.


```js
azure_cognitiveservices_face.PersonGroup_List({}, context)
```

#### Input
* input `object`
  * start `string`: List person groups from the least personGroupId greater than the "start".
  * top `integer`: The number of person groups to list.

#### Output
* output [PersonGroups](#persongroups)

### PersonGroup_Delete
Delete an existing person group. Persisted face images of all people in the person group will also be deleted.


```js
azure_cognitiveservices_face.PersonGroup_Delete({
  "personGroupId": ""
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.

#### Output
*Output schema unknown*

### PersonGroup_Get
Retrieve the information of a person group, including its name and userData.


```js
azure_cognitiveservices_face.PersonGroup_Get({
  "personGroupId": ""
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.

#### Output
* output [PersonGroup](#persongroup)

### PersonGroup_Update
Update an existing person group's display name and userData. The properties which does not appear in request body will not be updated.


```js
azure_cognitiveservices_face.PersonGroup_Update({
  "personGroupId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * body **required** [NameAndUserDataContract](#nameanduserdatacontract)

#### Output
*Output schema unknown*

### PersonGroup_Create
Create a new person group with specified personGroupId, name and user-provided userData.


```js
azure_cognitiveservices_face.PersonGroup_Create({
  "personGroupId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * body **required** [NameAndUserDataContract](#nameanduserdatacontract)

#### Output
*Output schema unknown*

### PersonGroupPerson_List
List all persons in a person group, and retrieve person information (including personId, name, userData and persistedFaceIds of registered faces of the person).


```js
azure_cognitiveservices_face.PersonGroupPerson_List({
  "personGroupId": ""
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * start `string`: Starting person id to return (used to list a range of persons).
  * top `integer`: Number of persons to return starting with the person id indicated by the 'start' parameter.

#### Output
* output [Persons](#persons)

### PersonGroupPerson_Create
Create a new person in a specified person group.


```js
azure_cognitiveservices_face.PersonGroupPerson_Create({
  "personGroupId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * body **required** [NameAndUserDataContract](#nameanduserdatacontract)

#### Output
* output [Person](#person)

### PersonGroupPerson_Delete
Delete an existing person from a person group. Persisted face images of the person will also be deleted.


```js
azure_cognitiveservices_face.PersonGroupPerson_Delete({
  "personGroupId": "",
  "personId": ""
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * personId **required** `string`: Id referencing a particular person.

#### Output
*Output schema unknown*

### PersonGroupPerson_Get
Retrieve a person's information, including registered persisted faces, name and userData.


```js
azure_cognitiveservices_face.PersonGroupPerson_Get({
  "personGroupId": "",
  "personId": ""
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * personId **required** `string`: Id referencing a particular person.

#### Output
* output [Person](#person)

### PersonGroupPerson_Update
Update name or userData of a person.


```js
azure_cognitiveservices_face.PersonGroupPerson_Update({
  "personGroupId": "",
  "personId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * personId **required** `string`: Id referencing a particular person.
  * body **required** [NameAndUserDataContract](#nameanduserdatacontract)

#### Output
*Output schema unknown*

### PersonGroupPerson_AddPersonFaceFromUrl
Add a representative face to a person for identification. The input face is specified as an image with a targetFace rectangle.


```js
azure_cognitiveservices_face.PersonGroupPerson_AddPersonFaceFromUrl({
  "personGroupId": "",
  "personId": "",
  "ImageUrl": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * personId **required** `string`: Id referencing a particular person.
  * userData `string`: User-specified data about the face for any purpose. The maximum length is 1KB.
  * targetFace `array`: A face rectangle to specify the target face to be added to a person in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image.
  * ImageUrl **required** `object`
    * url **required** `string`: Publicly reachable URL of an image

#### Output
* output [PersistedFace](#persistedface)

### PersonGroupPerson_DeleteFace
Delete a face from a person. Relative image for the persisted face will also be deleted.


```js
azure_cognitiveservices_face.PersonGroupPerson_DeleteFace({
  "personGroupId": "",
  "personId": "",
  "persistedFaceId": ""
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * personId **required** `string`: Id referencing a particular person.
  * persistedFaceId **required** `string`: Id referencing a particular persistedFaceId of an existing face.

#### Output
*Output schema unknown*

### PersonGroupPerson_GetFace
Retrieve information about a persisted face (specified by persistedFaceId, personId and its belonging personGroupId).


```js
azure_cognitiveservices_face.PersonGroupPerson_GetFace({
  "personGroupId": "",
  "personId": "",
  "persistedFaceId": ""
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * personId **required** `string`: Id referencing a particular person.
  * persistedFaceId **required** `string`: Id referencing a particular persistedFaceId of an existing face.

#### Output
* output [PersistedFace](#persistedface)

### PersonGroupPerson_UpdateFace
Update a person persisted face's userData field.


```js
azure_cognitiveservices_face.PersonGroupPerson_UpdateFace({
  "personGroupId": "",
  "personId": "",
  "persistedFaceId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * personId **required** `string`: Id referencing a particular person.
  * persistedFaceId **required** `string`: Id referencing a particular persistedFaceId of an existing face.
  * body **required** [UpdatePersonFaceRequest](#updatepersonfacerequest)

#### Output
*Output schema unknown*

### PersonGroup_Train
Queue a person group training task, the training task may not be started immediately.


```js
azure_cognitiveservices_face.PersonGroup_Train({
  "personGroupId": ""
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.

#### Output
*Output schema unknown*

### PersonGroup_GetTrainingStatus
Retrieve the training status of a person group (completed or ongoing).


```js
azure_cognitiveservices_face.PersonGroup_GetTrainingStatus({
  "personGroupId": ""
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.

#### Output
* output [TrainingStatus](#trainingstatus)

### Face_VerifyFaceToFace
Verify whether two faces belong to a same person or whether one face belongs to a person.


```js
azure_cognitiveservices_face.Face_VerifyFaceToFace({
  "body": {
    "faceId1": "",
    "faceId2": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [VerifyFaceToFaceRequest](#verifyfacetofacerequest)

#### Output
* output [VerifyResult](#verifyresult)



## Definitions

### APIError
* APIError `object`: Error information returned by the API
  * error [Error](#error)

### Accessories
* Accessories `array`: Properties describing any accessories on a given face.
  * items [Accessory](#accessory)

### Accessory
* Accessory `object`: Accessory item and corresponding confidence level.
  * confidence [Confidence](#confidence)
  * type `string` (values: headWear, glasses, mask): Type of an accessory

### Blur
* Blur `object`: Properties describing any presence of blur within the image.
  * blurLevel `string` (values: Low, Medium, High): An enum value indicating level of blurriness.
  * value [Level](#level)

### Confidence
* Confidence `number`: A number ranging from 0 to 1 indicating a level of confidence associated with a property.

### Coordinate
* Coordinate `object`: Coordinates within an image
  * x **required** `number`: The horizontal component, in pixels.
  * y **required** `number`: The vertical component, in pixels.

### DetectedFace
* DetectedFace `object`: Detected Face object.
  * faceAttributes [FaceAttributes](#faceattributes)
  * faceId `string`
  * faceLandmarks [FaceLandmarks](#facelandmarks)
  * faceRectangle **required** [FaceRectangle](#facerectangle)

### DetectedFaces
* DetectedFaces `array`
  * items [DetectedFace](#detectedface)

### Emotion
* Emotion `object`: Properties describing facial emotion in form of confidence ranging from 0 to 1.
  * anger [Confidence](#confidence)
  * contempt [Confidence](#confidence)
  * disgust [Confidence](#confidence)
  * fear [Confidence](#confidence)
  * happiness [Confidence](#confidence)
  * neutral [Confidence](#confidence)
  * sadness [Confidence](#confidence)
  * surprise [Confidence](#confidence)

### Error
* Error `object`: Error body.
  * code `string`
  * message `string`

### Exposure
* Exposure `object`: Properties describing exposure level of the image.
  * exposureLevel `string` (values: UnderExposure, GoodExposure, OverExposure): An enum value indicating level of exposure.
  * value [Level](#level)

### FaceAttributes
* FaceAttributes `object`: Face Attributes
  * accessories [Accessories](#accessories)
  * age `number`: Age in years
  * blur [Blur](#blur)
  * emotion [Emotion](#emotion)
  * exposure [Exposure](#exposure)
  * facialHair [FacialHair](#facialhair)
  * gender `string` (values: male, female, genderless): Possible gender of the face.
  * glasses `string` (values: noGlasses, readingGlasses, sunglasses, swimmingGoggles): Glasses type if any of the face.
  * hair [Hair](#hair)
  * headPose [HeadPose](#headpose)
  * makeup [Makeup](#makeup)
  * noise [Noise](#noise)
  * occlusion [Occlusion](#occlusion)
  * smile [Level](#level)

### FaceLandmarks
* FaceLandmarks `object`: A collection of 27-point face landmarks pointing to the important positions of face components.
  * eyeLeftBottom [Coordinate](#coordinate)
  * eyeLeftInner [Coordinate](#coordinate)
  * eyeLeftOuter [Coordinate](#coordinate)
  * eyeLeftTop [Coordinate](#coordinate)
  * eyeRightBottom [Coordinate](#coordinate)
  * eyeRightInner [Coordinate](#coordinate)
  * eyeRightOuter [Coordinate](#coordinate)
  * eyeRightTop [Coordinate](#coordinate)
  * eyebrowLeftInner [Coordinate](#coordinate)
  * eyebrowLeftOuter [Coordinate](#coordinate)
  * eyebrowRightInner [Coordinate](#coordinate)
  * eyebrowRightOuter [Coordinate](#coordinate)
  * mouthLeft [Coordinate](#coordinate)
  * mouthRight [Coordinate](#coordinate)
  * noseLeftAlarOutTip [Coordinate](#coordinate)
  * noseLeftAlarTop [Coordinate](#coordinate)
  * noseRightAlarOutTip [Coordinate](#coordinate)
  * noseRightAlarTop [Coordinate](#coordinate)
  * noseRootLeft [Coordinate](#coordinate)
  * noseRootRight [Coordinate](#coordinate)
  * noseTip [Coordinate](#coordinate)
  * pupilLeft [Coordinate](#coordinate)
  * pupilRight [Coordinate](#coordinate)
  * underLipBottom [Coordinate](#coordinate)
  * underLipTop [Coordinate](#coordinate)
  * upperLipBottom [Coordinate](#coordinate)
  * upperLipTop [Coordinate](#coordinate)

### FaceList
* FaceList `object`: Face list object.
  * faceListId **required** `string`: FaceListId of the target face list.
  * persistedFaces `array`: Persisted faces within the face list.
    * items [PersistedFace](#persistedface)
  * name `string`: User defined name, maximum length is 128.
  * userData `string`: User specified data. Length should not exceed 16KB.

### FaceLists
* FaceLists `array`: An array of face list results, with fields of faceListId, name and userData
  * items [FaceList](#facelist)

### FaceRectangle
* FaceRectangle `object`: A rectangle within which a face can be found
  * height **required** `integer`: The height of the rectangle, in pixels.
  * left **required** `integer`: The distance from the left edge if the image to the left edge of the rectangle, in pixels.
  * top **required** `integer`: The distance from the top edge if the image to the top edge of the rectangle, in pixels.
  * width **required** `integer`: The width of the rectangle, in pixels.

### FacialHair
* FacialHair `object`: Properties describing facial hair attributes.
  * beard [Confidence](#confidence)
  * moustache [Confidence](#confidence)
  * sideburns [Confidence](#confidence)

### FindSimilarRequest
* FindSimilarRequest `object`: Request body for find similar operation.
  * faceId **required** `string`: FaceId of the query face. User needs to call Face - Detect first to get a valid faceId. Note that this faceId is not persisted and will expire 24 hours after the detection call
  * faceIds `array`: An array of candidate faceIds. All of them are created by Face - Detect and the faceIds will expire 24 hours after the detection call.
    * items `string`
  * faceListId `string`: An existing user-specified unique candidate face list, created in Face List - Create a Face List. Face list contains a set of persistedFaceIds which are persisted and will never expire. Parameter faceListId and faceIds should not be provided at the same time
  * maxNumOfCandidatesReturned `integer`: The number of top similar faces returned. The valid range is [1, 1000].
  * mode `string` (values: matchPerson, matchFace): Similar face searching mode. It can be "matchPerson" or "matchFace".

### GroupRequest
* GroupRequest `object`: Request body for group request.
  * faceIds **required** `array`: Array of candidate faceId created by Face - Detect. The maximum is 1000 faces
    * items `string`

### GroupResult
* GroupResult `object`: An array of face groups based on face similarity.
  * groups **required** `array`: A partition of the original faces based on face similarity. Groups are ranked by number of faces
    * items `array`
      * items `string`
  * messyGroup `array`: Face ids array of faces that cannot find any similar faces from original faces.
    * items `string`

### Hair
* Hair `object`: Properties describing hair attributes.
  * bald [Confidence](#confidence)
  * hairColor [HairColors](#haircolors)
  * invisible `boolean`: A boolean value describing whether the hair is visible in the image.

### HairColor
* HairColor `object`: Hair color and associated confidence
  * color `string` (values: unknown, white, gray, blond, brown, red, black, other): Name of the hair color.
  * confidence [Confidence](#confidence)

### HairColors
* HairColors `array`
  * items [HairColor](#haircolor)

### HeadPose
* HeadPose `object`: Properties indicating head pose of the face.
  * pitch `number`
  * roll `number`
  * yaw `number`

### IdentifyCandidate
* IdentifyCandidate `object`: All possible faces that may qualify.
  * confidence **required** [Confidence](#confidence)
  * personId **required** `string`: Id of candidate

### IdentifyRequest
* IdentifyRequest `object`: Request body for identify face operation.
  * confidenceThreshold [Confidence](#confidence)
  * faceIds **required** `array`: Array of query faces faceIds, created by the Face - Detect. Each of the faces are identified independently. The valid number of faceIds is between [1, 10].
    * items `string`
  * maxNumOfCandidatesReturned `integer`: The range of maxNumOfCandidatesReturned is between 1 and 5 (default is 1).
  * personGroupId **required** `string`: PersonGroupId of the target person group, created by PersonGroups.Create

### IdentifyResult
* IdentifyResult `object`: Response body for identify face operation.
  * candidates **required** `array`: Identified person candidates for that face (ranked by confidence). Array size should be no larger than input maxNumOfCandidatesReturned. If no person is identified, will return an empty array.
    * items [IdentifyCandidate](#identifycandidate)
  * faceId **required** `string`: FaceId of the query face

### IdentifyResults
* IdentifyResults `array`
  * items [IdentifyResult](#identifyresult)

### Level
* Level `number`: A number ranging from 0 to 1 indicating the intensity level associated with a property.

### Makeup
* Makeup `object`: Properties describing present makeups on a given face.
  * eyeMakeup `boolean`: A boolean value describing whether eye makeup is present on a face.
  * lipMakeup `boolean`: A boolean value describing whether lip makeup is present on a face.

### NameAndUserDataContract
* NameAndUserDataContract `object`: A combination of user defined name and user specified data for the person, personGroup, and faceList
  * name `string`: User defined name, maximum length is 128.
  * userData `string`: User specified data. Length should not exceed 16KB.

### Noise
* Noise `object`: Properties describing noise level of the image.
  * noiseLevel `string` (values: Low, Medium, High): An enum value indicating level of noise.
  * value [Level](#level)

### Occlusion
* Occlusion `object`: Properties describing occlusions on a given face.
  * eyeOccluded `boolean`: A boolean value indicating whether eyes are occluded.
  * foreheadOccluded `boolean`: A boolean value indicating whether forehead is occluded.
  * mouthOccluded `boolean`: A boolean value indicating whether the mouth is occluded.

### PersistedFace
* PersistedFace `object`: PersonFace object.
  * persistedFaceId **required** `string`: The persistedFaceId of the target face, which is persisted and will not expire. Different from faceId created by Face - Detect and will expire in 24 hours after the detection call.
  * userData `string`: User-provided data attached to the face. The size limit is 1KB.

### Person
* Person `object`: Person object.
  * persistedFaceIds `array`: PersistedFaceIds of registered faces in the person. These persistedFaceIds are returned from Person - Add a Person Face, and will not expire.
    * items `string`
  * personId **required** `string`: PersonId of the target face list.
  * name `string`: User defined name, maximum length is 128.
  * userData `string`: User specified data. Length should not exceed 16KB.

### PersonGroup
* PersonGroup `object`: Person group object.
  * personGroupId **required** `string`: PersonGroupId of the existing person groups.
  * name `string`: User defined name, maximum length is 128.
  * userData `string`: User specified data. Length should not exceed 16KB.

### PersonGroups
* PersonGroups `array`: An array of person groups.
  * items [PersonGroup](#persongroup)

### Persons
* Persons `array`: An array of Persons.
  * items [Person](#person)

### SimilarFace
* SimilarFace `object`: Response body for find similar face operation.
  * confidence **required** [Confidence](#confidence)
  * faceId `string`: FaceId of candidate face when find by faceIds. faceId is created by Face - Detect and will expire 24 hours after the detection call
  * persistedFaceId `string`: PersistedFaceId of candidate face when find by faceListId. persistedFaceId in face list is persisted and will not expire. As showed in below response

### SimilarFaces
* SimilarFaces `array`
  * items [SimilarFace](#similarface)

### TrainingStatus
* TrainingStatus `object`: Training status object.
  * createdDateTime **required** `string`: A combined UTC date and time string that describes person group created time.
  * lastActionDateTime `string`: Person group last modify time in the UTC, could be null value when the person group is not successfully trained.
  * message `string`: Show failure message when training failed (omitted when training succeed).
  * status **required** `string` (values: nonstarted, running, succeeded, failed): Training status: notstarted, running, succeeded, failed. If the training process is waiting to perform, the status is notstarted. If the training is ongoing, the status is running. Status succeed means this person group is ready for Face - Identify. Status failed is often caused by no person or no persisted face exist in the person group

### UpdatePersonFaceRequest
* UpdatePersonFaceRequest `object`: Request to update person face data.
  * userData `string`: User-provided data attached to the face. The size limit is 1KB.

### VerifyFaceToFaceRequest
* VerifyFaceToFaceRequest `object`: Request body for verify operation.
  * faceId1 **required** `string`: FaceId of the first face, comes from Face - Detect
  * faceId2 **required** `string`: FaceId of the second face, comes from Face - Detect

### VerifyFaceToPersonRequest
* VerifyFaceToPersonRequest `object`: Request body for verify operation.
  * faceId **required** `string`: FaceId the face, comes from Face - Detect
  * personGroupId **required** `string`: Using existing personGroupId and personId for fast loading a specified person. personGroupId is created in Person Groups.Create.
  * personId **required** `string`: Specify a certain person in a person group. personId is created in Persons.Create.

### VerifyResult
* VerifyResult `object`: Result of the verify operation.
  * confidence **required** [Confidence](#confidence)
  * isIdentical **required** `boolean`: True if the two faces belong to the same person or the face belongs to the person, otherwise false.


