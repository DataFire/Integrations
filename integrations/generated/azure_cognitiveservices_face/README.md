# @datafire/azure_cognitiveservices_face

Client library for Face Client

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_face
```
```js
let azure_cognitiveservices_face = require('@datafire/azure_cognitiveservices_face').create({
  apim_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

An API for face detection, verification, and identification.

## Actions

### Face_DetectWithUrl
Detect human faces in an image, return face rectangles, and optionally with faceIds, landmarks, and attributes.<br />
* No image will be stored. Only the extracted face feature will be stored on server. The faceId is an identifier of the face feature and will be used in [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239), [Face - Verify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a), and [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237). The stored face feature(s) will expire and be deleted 24 hours after the original detection call.
* Optional parameters include faceId, landmarks, and attributes. Attributes include age, gender, headPose, smile, facialHair, glasses, emotion, hair, makeup, occlusion, accessories, blur, exposure and noise. Some of the results returned for specific attributes may not be highly accurate.
* JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
* Up to 100 faces can be returned for an image. Faces are ranked by face rectangle size from large to small.
* For optimal results when querying [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239), [Face - Verify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a), and [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237) ('returnFaceId' is true), please use faces that are: frontal, clear, and with a minimum size of 200x200 pixels (100 pixels between eyes).
* The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
* Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
  | Model | Recommended use-case(s) |
  | ---------- | -------- |
  | 'detection_01': | The default detection model for [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |
  | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |

* Different 'recognitionModel' values are provided. If follow-up operations like Verify, Identify, Find Similar are needed, please specify the recognition model with 'recognitionModel' parameter. The default value for 'recognitionModel' is 'recognition_01', if latest model needed, please explicitly specify the model you need in this parameter. Once specified, the detected faceIds will be associated with the specified recognition model. More details, please refer to [How to specify a recognition model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-recognition-model)
  | Model | Recommended use-case(s) |
  | ---------- | -------- |
  | 'recognition_01': | The default recognition model for [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236). All those faceIds created before 2019 March are bonded with this recognition model. |
  | 'recognition_02': | Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'. |


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
  * recognitionModel `string` (values: recognition_01, recognition_02): Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds, (Large)FaceList or (Large)PersonGroup. A recognition model name can be provided when performing Face - Detect or (Large)FaceList - Create or (Large)PersonGroup - Create. The default value is 'recognition_01', if latest model needed, please explicitly specify the model you need.
  * returnRecognitionModel `boolean`: A value indicating whether the operation should return 'recognitionModel' in response.
  * detectionModel `string` (values: detection_01, detection_02): Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it.

#### Output
* output [DetectedFaces](#detectedfaces)

### FaceList_List
List face lists’ faceListId, name, userData and recognitionModel. <br /> 
To get face information inside faceList use [FaceList - Get](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524c)



```js
azure_cognitiveservices_face.FaceList_List({}, context)
```

#### Input
* input `object`
  * returnRecognitionModel `boolean`: A value indicating whether the operation should return 'recognitionModel' in response.

#### Output
* output [FaceLists](#facelists)

### FaceList_Delete
Delete a specified face list.


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
Retrieve a face list’s faceListId, name, userData, recognitionModel and faces in the face list.



```js
azure_cognitiveservices_face.FaceList_Get({
  "faceListId": ""
}, context)
```

#### Input
* input `object`
  * faceListId **required** `string`: Id referencing a particular face list.
  * returnRecognitionModel `boolean`: A value indicating whether the operation should return 'recognitionModel' in response.

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
Create an empty face list with user-specified faceListId, name, an optional userData and recognitionModel. Up to 64 face lists are allowed in one subscription.
<br /> Face list is a list of faces, up to 1,000 faces, and used by [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237).
<br /> After creation, user should use [FaceList - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395250) to import the faces. No image will be stored. Only the extracted face features are stored on server until [FaceList - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524f) is called.
<br /> Find Similar is used for scenario like finding celebrity-like faces, similar face filtering, or as a light way face identification. But if the actual use is to identify person, please use [PersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244) / [LargePersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d) and [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239).
<br /> Please consider [LargeFaceList](/docs/services/563879b61984550e40cbbe8d/operations/5a157b68d2de3616c086f2cc) when the face number is large. It can support up to 1,000,000 faces.
<br />'recognitionModel' should be specified to associate with this face list. The default value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly specify the model you need in this parameter. New faces that are added to an existing face list will use the recognition model that's already associated with the collection. Existing face features in a face list can't be updated to features extracted by another version of recognition model.
* 'recognition_01': The default recognition model for [FaceList- Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524b). All those face lists created before 2019 March are bonded with this recognition model.
* 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'.


```js
azure_cognitiveservices_face.FaceList_Create({
  "faceListId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * faceListId **required** `string`: Id referencing a particular face list.
  * body **required** [MetaDataContract](#metadatacontract)

#### Output
*Output schema unknown*

### FaceList_AddFaceFromUrl
Add a face to a specified face list, up to 1,000 faces.
<br /> To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [FaceList - Delete Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395251) or [FaceList - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524f) is called.
<br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236).
* Higher face image quality means better detection and recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
* JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
* "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided "targetFace" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully.
* Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures.
* Adding/deleting faces to/from a same face list are processed sequentially and to/from different face lists are in parallel.
* The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
* Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
  | Model | Recommended use-case(s) |
  | ---------- | -------- |
  | 'detection_01': | The default detection model for [FaceList - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395250). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |
  | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |


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
  * detectionModel `string` (values: detection_01, detection_02): Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it.

#### Output
* output [PersistedFace](#persistedface)

### FaceList_DeleteFace
Delete a face from a face list by specified faceListId and persistedFaceId.
<br /> Adding/deleting faces to/from a same face list are processed sequentially and to/from different face lists are in parallel.


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
Given query face's faceId, to search the similar-looking faces from a faceId array, a face list or a large face list. faceId array contains the faces created by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), which will expire 24 hours after creation. A "faceListId" is created by [FaceList - Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039524b) containing persistedFaceIds that will not expire. And a "largeFaceListId" is created by [LargeFaceList - Create](/docs/services/563879b61984550e40cbbe8d/operations/5a157b68d2de3616c086f2cc) containing persistedFaceIds that will also not expire. Depending on the input the returned similar faces list contains faceIds or persistedFaceIds ranked by similarity.
<br/>Find similar has two working modes, "matchPerson" and "matchFace". "matchPerson" is the default mode that it tries to find faces of the same person as possible by using internal same-person thresholds. It is useful to find a known person's other photos. Note that an empty list will be returned if no faces pass the internal thresholds. "matchFace" mode ignores same-person thresholds and returns ranked similar faces anyway, even the similarity is low. It can be used in the cases like searching celebrity-looking faces.
<br/>The 'recognitionModel' associated with the query face's faceId should be the same as the 'recognitionModel' used by the target faceId array, face list or large face list.



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
Divide candidate faces into groups based on face similarity.<br />
* The output is one or more disjointed face groups and a messyGroup. A face group contains faces that have similar looking, often of the same person. Face groups are ranked by group size, i.e. number of faces. Notice that faces belonging to a same person might be split into several groups in the result.
* MessyGroup is a special face group containing faces that cannot find any similar counterpart face from original faces. The messyGroup will not appear in the result if all faces found their counterparts.
* Group API needs at least 2 candidate faces and 1000 at most. We suggest to try [Face - Verify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523a) when you only have 2 candidate faces.
* The 'recognitionModel' associated with the query faces' faceIds should be the same.



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
1-to-many identification to find the closest matches of the specific query person face from a person group or large person group.
<br/> For each face in the faceIds array, Face Identify will compute similarities between the query face and all the faces in the person group (given by personGroupId) or large person group (given by largePersonGroupId), and return candidate person(s) for that face ranked by similarity confidence. The person group/large person group should be trained to make it ready for identification. See more in [PersonGroup - Train](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249) and [LargePersonGroup - Train](/docs/services/563879b61984550e40cbbe8d/operations/599ae2d16ac60f11b48b5aa4).
<br/>
 
Remarks:<br />
* The algorithm allows more than one face to be identified independently at the same request, but no more than 10 faces.
* Each person in the person group/large person group could have more than one face, but no more than 248 faces.
* Higher face image quality means better identification precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
* Number of candidates returned is restricted by maxNumOfCandidatesReturned and confidenceThreshold. If no person is identified, the returned candidates will be an empty array.
* Try [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237) when you need to find similar faces from a face list/large face list instead of a person group/large person group.
* The 'recognitionModel' associated with the query faces' faceIds should be the same as the 'recognitionModel' used by the target person group or large person group.



```js
azure_cognitiveservices_face.Face_Identify({
  "body": {
    "faceIds": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [IdentifyRequest](#identifyrequest)

#### Output
* output [IdentifyResults](#identifyresults)

### LargeFaceList_List
List large face lists’ information of largeFaceListId, name, userData and recognitionModel. <br /> 
To get face information inside largeFaceList use [LargeFaceList Face - Get](/docs/services/563879b61984550e40cbbe8d/operations/5a158cf2d2de3616c086f2d5)<br />
* Large face lists are stored in alphabetical order of largeFaceListId.
* "start" parameter (string, optional) is a user-provided largeFaceListId value that returned entries have larger ids by string comparison. "start" set to empty to indicate return from the first item.
* "top" parameter (int, optional) specifies the number of entries to return. A maximal of 1000 entries can be returned in one call. To fetch more, you can specify "start" with the last returned entry’s Id of the current call.
<br />
For example, total 5 large person lists: "list1", ..., "list5".
<br /> "start=&top=" will return all 5 lists.
<br /> "start=&top=2" will return "list1", "list2".
<br /> "start=list2&top=3" will return "list3", "list4", "list5".



```js
azure_cognitiveservices_face.LargeFaceList_List({}, context)
```

#### Input
* input `object`
  * returnRecognitionModel `boolean`: A value indicating whether the operation should return 'recognitionModel' in response.

#### Output
* output [LargeFaceLists](#largefacelists)

### LargeFaceList_Delete
Delete a specified large face list.


```js
azure_cognitiveservices_face.LargeFaceList_Delete({
  "largeFaceListId": ""
}, context)
```

#### Input
* input `object`
  * largeFaceListId **required** `string`: Id referencing a particular large face list.

#### Output
*Output schema unknown*

### LargeFaceList_Get
Retrieve a large face list’s largeFaceListId, name, userData and recognitionModel.


```js
azure_cognitiveservices_face.LargeFaceList_Get({
  "largeFaceListId": ""
}, context)
```

#### Input
* input `object`
  * largeFaceListId **required** `string`: Id referencing a particular large face list.
  * returnRecognitionModel `boolean`: A value indicating whether the operation should return 'recognitionModel' in response.

#### Output
* output [LargeFaceList](#largefacelist)

### LargeFaceList_Update
Update information of a large face list.


```js
azure_cognitiveservices_face.LargeFaceList_Update({
  "largeFaceListId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * largeFaceListId **required** `string`: Id referencing a particular large face list.
  * body **required** [NameAndUserDataContract](#nameanduserdatacontract)

#### Output
*Output schema unknown*

### LargeFaceList_Create
Create an empty large face list with user-specified largeFaceListId, name, an optional userData and recognitionModel.
<br /> Large face list is a list of faces, up to 1,000,000 faces, and used by [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237).
<br /> After creation, user should use [LargeFaceList Face - Add](/docs/services/563879b61984550e40cbbe8d/operations/5a158c10d2de3616c086f2d3) to import the faces and [LargeFaceList - Train](/docs/services/563879b61984550e40cbbe8d/operations/5a158422d2de3616c086f2d1) to make it ready for [Face - Find Similar](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395237). No image will be stored. Only the extracted face features are stored on server until [LargeFaceList - Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a1580d5d2de3616c086f2cd) is called.
<br /> Find Similar is used for scenario like finding celebrity-like faces, similar face filtering, or as a light way face identification. But if the actual use is to identify person, please use [PersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244) / [LargePersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d) and [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239).
<br/>'recognitionModel' should be specified to associate with this large face list. The default value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly specify the model you need in this parameter. New faces that are added to an existing large face list will use the recognition model that's already associated with the collection. Existing face features in a large face list can't be updated to features extracted by another version of recognition model.
* 'recognition_01': The default recognition model for [LargeFaceList- Create](/docs/services/563879b61984550e40cbbe8d/operations/5a157b68d2de3616c086f2cc). All those large face lists created before 2019 March are bonded with this recognition model.
* 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'.

Large face list quota:
* Free-tier subscription quota: 64 large face lists.
* S0-tier subscription quota: 1,000,000 large face lists.


```js
azure_cognitiveservices_face.LargeFaceList_Create({
  "largeFaceListId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * largeFaceListId **required** `string`: Id referencing a particular large face list.
  * body **required** [MetaDataContract](#metadatacontract)

#### Output
*Output schema unknown*

### LargeFaceList_ListFaces
List all faces in a large face list, and retrieve face information (including userData and persistedFaceIds of registered faces of the face).


```js
azure_cognitiveservices_face.LargeFaceList_ListFaces({
  "largeFaceListId": ""
}, context)
```

#### Input
* input `object`
  * largeFaceListId **required** `string`: Id referencing a particular large face list.
  * start `string`: Starting face id to return (used to list a range of faces).
  * top `integer`: Number of faces to return starting with the face id indicated by the 'start' parameter.

#### Output
* output [PersistedFaces](#persistedfaces)

### LargeFaceList_AddFaceFromUrl
Add a face to a specified large face list, up to 1,000,000 faces.
<br /> To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [LargeFaceList Face - Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a158c8ad2de3616c086f2d4) or [LargeFaceList - Delete](/docs/services/563879b61984550e40cbbe8d/operations/5a1580d5d2de3616c086f2cd) is called.
<br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236).
* Higher face image quality means better recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
* JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
* "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided "targetFace" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully.
* Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures.
* Adding/deleting faces to/from a same face list are processed sequentially and to/from different face lists are in parallel.
* The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
* Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
  | Model | Recommended use-case(s) |
  | ---------- | -------- |
  | 'detection_01': | The default detection model for [LargeFaceList - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/5a158c10d2de3616c086f2d3). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |
  | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |

Quota:
* Free-tier subscription quota: 1,000 faces per large face list.
* S0-tier subscription quota: 1,000,000 faces per large face list.


```js
azure_cognitiveservices_face.LargeFaceList_AddFaceFromUrl({
  "largeFaceListId": "",
  "ImageUrl": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * largeFaceListId **required** `string`: Id referencing a particular large face list.
  * userData `string`: User-specified data about the face for any purpose. The maximum length is 1KB.
  * targetFace `array`: A face rectangle to specify the target face to be added to a person in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image.
  * ImageUrl **required** `object`
    * url **required** `string`: Publicly reachable URL of an image
  * detectionModel `string` (values: detection_01, detection_02): Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it.

#### Output
* output [PersistedFace](#persistedface)

### LargeFaceList_DeleteFace
Delete a face from a large face list by specified largeFaceListId and persistedFaceId.
<br /> Adding/deleting faces to/from a same large face list are processed sequentially and to/from different large face lists are in parallel.


```js
azure_cognitiveservices_face.LargeFaceList_DeleteFace({
  "largeFaceListId": "",
  "persistedFaceId": ""
}, context)
```

#### Input
* input `object`
  * largeFaceListId **required** `string`: Id referencing a particular large face list.
  * persistedFaceId **required** `string`: Id referencing a particular persistedFaceId of an existing face.

#### Output
*Output schema unknown*

### LargeFaceList_GetFace
Retrieve information about a persisted face (specified by persistedFaceId and its belonging largeFaceListId).


```js
azure_cognitiveservices_face.LargeFaceList_GetFace({
  "largeFaceListId": "",
  "persistedFaceId": ""
}, context)
```

#### Input
* input `object`
  * largeFaceListId **required** `string`: Id referencing a particular large face list.
  * persistedFaceId **required** `string`: Id referencing a particular persistedFaceId of an existing face.

#### Output
* output [PersistedFace](#persistedface)

### LargeFaceList_UpdateFace
Update a persisted face's userData field.


```js
azure_cognitiveservices_face.LargeFaceList_UpdateFace({
  "largeFaceListId": "",
  "persistedFaceId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * largeFaceListId **required** `string`: Id referencing a particular large face list.
  * persistedFaceId **required** `string`: Id referencing a particular persistedFaceId of an existing face.
  * body **required** [UpdateFaceRequest](#updatefacerequest)

#### Output
*Output schema unknown*

### LargeFaceList_Train
Queue a large face list training task, the training task may not be started immediately.


```js
azure_cognitiveservices_face.LargeFaceList_Train({
  "largeFaceListId": ""
}, context)
```

#### Input
* input `object`
  * largeFaceListId **required** `string`: Id referencing a particular large face list.

#### Output
*Output schema unknown*

### LargeFaceList_GetTrainingStatus
Retrieve the training status of a large face list (completed or ongoing).


```js
azure_cognitiveservices_face.LargeFaceList_GetTrainingStatus({
  "largeFaceListId": ""
}, context)
```

#### Input
* input `object`
  * largeFaceListId **required** `string`: Id referencing a particular large face list.

#### Output
* output [TrainingStatus](#trainingstatus)

### LargePersonGroup_List
List all existing large person groups’ largePersonGroupId, name, userData and recognitionModel.<br />
* Large person groups are stored in alphabetical order of largePersonGroupId.
* "start" parameter (string, optional) is a user-provided largePersonGroupId value that returned entries have larger ids by string comparison. "start" set to empty to indicate return from the first item.
* "top" parameter (int, optional) specifies the number of entries to return. A maximal of 1000 entries can be returned in one call. To fetch more, you can specify "start" with the last returned entry’s Id of the current call.
<br />
For example, total 5 large person groups: "group1", ..., "group5".
<br /> "start=&top=" will return all 5 groups.
<br /> "start=&top=2" will return "group1", "group2".
<br /> "start=group2&top=3" will return "group3", "group4", "group5".



```js
azure_cognitiveservices_face.LargePersonGroup_List({}, context)
```

#### Input
* input `object`
  * start `string`: List large person groups from the least largePersonGroupId greater than the "start".
  * top `integer`: The number of large person groups to list.
  * returnRecognitionModel `boolean`: A value indicating whether the operation should return 'recognitionModel' in response.

#### Output
* output [LargePersonGroups](#largepersongroups)

### LargePersonGroup_Delete
Delete an existing large person group. Persisted face features of all people in the large person group will also be deleted.


```js
azure_cognitiveservices_face.LargePersonGroup_Delete({
  "largePersonGroupId": ""
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.

#### Output
*Output schema unknown*

### LargePersonGroup_Get
Retrieve the information of a large person group, including its name, userData and recognitionModel. This API returns large person group information only, use [LargePersonGroup Person - List](/docs/services/563879b61984550e40cbbe8d/operations/599adda06ac60f11b48b5aa1) instead to retrieve person information under the large person group.



```js
azure_cognitiveservices_face.LargePersonGroup_Get({
  "largePersonGroupId": ""
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.
  * returnRecognitionModel `boolean`: A value indicating whether the operation should return 'recognitionModel' in response.

#### Output
* output [LargePersonGroup](#largepersongroup)

### LargePersonGroup_Update
Update an existing large person group's display name and userData. The properties which does not appear in request body will not be updated.


```js
azure_cognitiveservices_face.LargePersonGroup_Update({
  "largePersonGroupId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.
  * body **required** [NameAndUserDataContract](#nameanduserdatacontract)

#### Output
*Output schema unknown*

### LargePersonGroup_Create
Create a new large person group with user-specified largePersonGroupId, name, an optional userData and recognitionModel.
<br /> A large person group is the container of the uploaded person data, including face recognition feature, and up to 1,000,000
people.
<br /> After creation, use [LargePersonGroup Person - Create](/docs/services/563879b61984550e40cbbe8d/operations/599adcba3a7b9412a4d53f40) to add person into the group, and call [LargePersonGroup - Train](/docs/services/563879b61984550e40cbbe8d/operations/599ae2d16ac60f11b48b5aa4) to get this group ready for [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239).
<br /> No image will be stored. Only the person's extracted face features and userData will be stored on server until [LargePersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599ade5c6ac60f11b48b5aa2) or [LargePersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599adc216ac60f11b48b5a9f) is called.
<br/>'recognitionModel' should be specified to associate with this large person group. The default value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly specify the model you need in this parameter. New faces that are added to an existing large person group will use the recognition model that's already associated with the collection. Existing face features in a large person group can't be updated to features extracted by another version of recognition model.
* 'recognition_01': The default recognition model for [LargePersonGroup - Create](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d). All those large person groups created before 2019 March are bonded with this recognition model.
* 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'.

Large person group quota:
* Free-tier subscription quota: 1,000 large person groups.
* S0-tier subscription quota: 1,000,000 large person groups.


```js
azure_cognitiveservices_face.LargePersonGroup_Create({
  "largePersonGroupId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.
  * body **required** [MetaDataContract](#metadatacontract)

#### Output
*Output schema unknown*

### LargePersonGroupPerson_List
List all persons in a large person group, and retrieve person information (including personId, name, userData and persistedFaceIds of registered faces of the person).


```js
azure_cognitiveservices_face.LargePersonGroupPerson_List({
  "largePersonGroupId": ""
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.
  * start `string`: Starting person id to return (used to list a range of persons).
  * top `integer`: Number of persons to return starting with the person id indicated by the 'start' parameter.

#### Output
* output [Persons](#persons)

### LargePersonGroupPerson_Create
Create a new person in a specified large person group.


```js
azure_cognitiveservices_face.LargePersonGroupPerson_Create({
  "largePersonGroupId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.
  * body **required** [NameAndUserDataContract](#nameanduserdatacontract)

#### Output
* output [Person](#person)

### LargePersonGroupPerson_Delete
Delete an existing person from a large person group. The persistedFaceId, userData, person name and face feature in the person entry will all be deleted.


```js
azure_cognitiveservices_face.LargePersonGroupPerson_Delete({
  "largePersonGroupId": "",
  "personId": ""
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.
  * personId **required** `string`: Id referencing a particular person.

#### Output
*Output schema unknown*

### LargePersonGroupPerson_Get
Retrieve a person's name and userData, and the persisted faceIds representing the registered person face feature.


```js
azure_cognitiveservices_face.LargePersonGroupPerson_Get({
  "largePersonGroupId": "",
  "personId": ""
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.
  * personId **required** `string`: Id referencing a particular person.

#### Output
* output [Person](#person)

### LargePersonGroupPerson_Update
Update name or userData of a person.


```js
azure_cognitiveservices_face.LargePersonGroupPerson_Update({
  "largePersonGroupId": "",
  "personId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.
  * personId **required** `string`: Id referencing a particular person.
  * body **required** [NameAndUserDataContract](#nameanduserdatacontract)

#### Output
*Output schema unknown*

### LargePersonGroupPerson_AddFaceFromUrl
Add a face to a person into a large person group for face identification or verification. To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [LargePersonGroup PersonFace - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599ae2966ac60f11b48b5aa3), [LargePersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599ade5c6ac60f11b48b5aa2) or [LargePersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/599adc216ac60f11b48b5a9f) is called.
<br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236).
* Higher face image quality means better recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
* Each person entry can hold up to 248 faces.
* JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
* "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided "targetFace" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully.
* Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures.
* Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.
* The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
* Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
  | Model | Recommended use-case(s) |
  | ---------- | -------- |
  | 'detection_01': | The default detection model for [LargePersonGroup Person - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/599adf2a3a7b9412a4d53f42). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |
  | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |


```js
azure_cognitiveservices_face.LargePersonGroupPerson_AddFaceFromUrl({
  "largePersonGroupId": "",
  "personId": "",
  "ImageUrl": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.
  * personId **required** `string`: Id referencing a particular person.
  * userData `string`: User-specified data about the face for any purpose. The maximum length is 1KB.
  * targetFace `array`: A face rectangle to specify the target face to be added to a person in the format of "targetFace=left,top,width,height". E.g. "targetFace=10,10,100,100". If there is more than one face in the image, targetFace is required to specify which face to add. No targetFace means there is only one face detected in the entire image.
  * ImageUrl **required** `object`
    * url **required** `string`: Publicly reachable URL of an image
  * detectionModel `string` (values: detection_01, detection_02): Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it.

#### Output
* output [PersistedFace](#persistedface)

### LargePersonGroupPerson_DeleteFace
Delete a face from a person in a large person group by specified largePersonGroupId, personId and persistedFaceId.
<br /> Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.


```js
azure_cognitiveservices_face.LargePersonGroupPerson_DeleteFace({
  "largePersonGroupId": "",
  "personId": "",
  "persistedFaceId": ""
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.
  * personId **required** `string`: Id referencing a particular person.
  * persistedFaceId **required** `string`: Id referencing a particular persistedFaceId of an existing face.

#### Output
*Output schema unknown*

### LargePersonGroupPerson_GetFace
Retrieve information about a persisted face (specified by persistedFaceId, personId and its belonging largePersonGroupId).


```js
azure_cognitiveservices_face.LargePersonGroupPerson_GetFace({
  "largePersonGroupId": "",
  "personId": "",
  "persistedFaceId": ""
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.
  * personId **required** `string`: Id referencing a particular person.
  * persistedFaceId **required** `string`: Id referencing a particular persistedFaceId of an existing face.

#### Output
* output [PersistedFace](#persistedface)

### LargePersonGroupPerson_UpdateFace
Update a person persisted face's userData field.


```js
azure_cognitiveservices_face.LargePersonGroupPerson_UpdateFace({
  "largePersonGroupId": "",
  "personId": "",
  "persistedFaceId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.
  * personId **required** `string`: Id referencing a particular person.
  * persistedFaceId **required** `string`: Id referencing a particular persistedFaceId of an existing face.
  * body **required** [UpdateFaceRequest](#updatefacerequest)

#### Output
*Output schema unknown*

### LargePersonGroup_Train
Queue a large person group training task, the training task may not be started immediately.


```js
azure_cognitiveservices_face.LargePersonGroup_Train({
  "largePersonGroupId": ""
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.

#### Output
*Output schema unknown*

### LargePersonGroup_GetTrainingStatus
Retrieve the training status of a large person group (completed or ongoing).


```js
azure_cognitiveservices_face.LargePersonGroup_GetTrainingStatus({
  "largePersonGroupId": ""
}, context)
```

#### Input
* input `object`
  * largePersonGroupId **required** `string`: Id referencing a particular large person group.

#### Output
* output [TrainingStatus](#trainingstatus)

### Snapshot_GetOperationStatus
Retrieve the status of a take/apply snapshot operation.


```js
azure_cognitiveservices_face.Snapshot_GetOperationStatus({
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * operationId **required** `string`: Id referencing a particular take/apply snapshot operation.

#### Output
* output [OperationStatus](#operationstatus)

### PersonGroup_List
List person groups’ personGroupId, name, userData and recognitionModel.<br />
* Person groups are stored in alphabetical order of personGroupId.
* "start" parameter (string, optional) is a user-provided personGroupId value that returned entries have larger ids by string comparison. "start" set to empty to indicate return from the first item.
* "top" parameter (int, optional) specifies the number of entries to return. A maximal of 1000 entries can be returned in one call. To fetch more, you can specify "start" with the last returned entry’s Id of the current call.
<br />
For example, total 5 person groups: "group1", ..., "group5".
<br /> "start=&top=" will return all 5 groups.
<br /> "start=&top=2" will return "group1", "group2".
<br /> "start=group2&top=3" will return "group3", "group4", "group5".



```js
azure_cognitiveservices_face.PersonGroup_List({}, context)
```

#### Input
* input `object`
  * start `string`: List person groups from the least personGroupId greater than the "start".
  * top `integer`: The number of person groups to list.
  * returnRecognitionModel `boolean`: A value indicating whether the operation should return 'recognitionModel' in response.

#### Output
* output [PersonGroups](#persongroups)

### PersonGroup_Delete
Delete an existing person group. Persisted face features of all people in the person group will also be deleted.


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
Retrieve person group name, userData and recognitionModel. To get person information under this personGroup, use [PersonGroup Person - List](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395241).


```js
azure_cognitiveservices_face.PersonGroup_Get({
  "personGroupId": ""
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * returnRecognitionModel `boolean`: A value indicating whether the operation should return 'recognitionModel' in response.

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
Create a new person group with specified personGroupId, name, user-provided userData and recognitionModel.
<br /> A person group is the container of the uploaded person data, including face recognition features.
<br /> After creation, use [PersonGroup Person - Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523c) to add persons into the group, and then call [PersonGroup - Train](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395249) to get this group ready for [Face - Identify](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395239).
<br /> No image will be stored. Only the person's extracted face features and userData will be stored on server until [PersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523d) or [PersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395245) is called.
<br/>'recognitionModel' should be specified to associate with this person group. The default value for 'recognitionModel' is 'recognition_01', if the latest model needed, please explicitly specify the model you need in this parameter. New faces that are added to an existing person group will use the recognition model that's already associated with the collection. Existing face features in a person group can't be updated to features extracted by another version of recognition model.
* 'recognition_01': The default recognition model for [PersonGroup - Create](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395244). All those person groups created before 2019 March are bonded with this recognition model.
* 'recognition_02': Recognition model released in 2019 March. 'recognition_02' is recommended since its overall accuracy is improved compared with 'recognition_01'.

Person group quota:
* Free-tier subscription quota: 1,000 person groups. Each holds up to 1,000 persons.
* S0-tier subscription quota: 1,000,000 person groups. Each holds up to 10,000 persons.
* to handle larger scale face identification problem, please consider using [LargePersonGroup](/docs/services/563879b61984550e40cbbe8d/operations/599acdee6ac60f11b48b5a9d).


```js
azure_cognitiveservices_face.PersonGroup_Create({
  "personGroupId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * personGroupId **required** `string`: Id referencing a particular person group.
  * body **required** [MetaDataContract](#metadatacontract)

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
Delete an existing person from a person group. The persistedFaceId, userData, person name and face feature in the person entry will all be deleted.


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

### PersonGroupPerson_AddFaceFromUrl
Add a face to a person into a person group for face identification or verification. To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [PersonGroup PersonFace - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523e), [PersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523d) or [PersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395245) is called.
<br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236).
*   Higher face image quality means better recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
*   Each person entry can hold up to 248 faces.
*   JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
*   "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided "targetFace" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully.
*   Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures.
*   Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.
* The minimum detectable face size is 36x36 pixels in an image no larger than 1920x1080 pixels. Images with dimensions higher than 1920x1080 pixels will need a proportionally larger minimum face size.
* Different 'detectionModel' values can be provided. To use and compare different detection models, please refer to [How to specify a detection model](https://docs.microsoft.com/en-us/azure/cognitive-services/face/face-api-how-to-topics/specify-detection-model)
  | Model | Recommended use-case(s) |
  | ---------- | -------- |
  | 'detection_01': | The default detection model for [PersonGroup Person - Add Face](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523b). Recommend for near frontal face detection. For scenarios with exceptionally large angle (head-pose) faces, occluded faces or wrong image orientation, the faces in such cases may not be detected. |
  | 'detection_02': | Detection model released in 2019 May with improved accuracy especially on small, side and blurry faces. |


```js
azure_cognitiveservices_face.PersonGroupPerson_AddFaceFromUrl({
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
  * detectionModel `string` (values: detection_01, detection_02): Name of detection model. Detection model is used to detect faces in the submitted image. A detection model name can be provided when performing Face - Detect or (Large)FaceList - Add Face or (Large)PersonGroup - Add Face. The default value is 'detection_01', if another model is needed, please explicitly specify it.

#### Output
* output [PersistedFace](#persistedface)

### PersonGroupPerson_DeleteFace
Delete a face from a person in a person group by specified personGroupId, personId and persistedFaceId.
<br /> Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.


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
Add a face to a person into a person group for face identification or verification. To deal with an image contains multiple faces, input face can be specified as an image with a targetFace rectangle. It returns a persistedFaceId representing the added face. No image will be stored. Only the extracted face feature will be stored on server until [PersonGroup PersonFace - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523e), [PersonGroup Person - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f3039523d) or [PersonGroup - Delete](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395245) is called.
<br /> Note persistedFaceId is different from faceId generated by [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236).
* Higher face image quality means better recognition precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
* Each person entry can hold up to 248 faces.
* JPEG, PNG, GIF (the first frame), and BMP format are supported. The allowed image file size is from 1KB to 6MB.
* "targetFace" rectangle should contain one face. Zero or multiple faces will be regarded as an error. If the provided "targetFace" rectangle is not returned from [Face - Detect](/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236), there’s no guarantee to detect and add the face successfully.
* Out of detectable face size (36x36 - 4096x4096 pixels), large head-pose, or large occlusions will cause failures.
* Adding/deleting faces to/from a same person will be processed sequentially. Adding/deleting faces to/from different persons are processed in parallel.


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
  * body **required** [UpdateFaceRequest](#updatefacerequest)

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

### Snapshot_List
List all accessible snapshots with related information, including snapshots that were taken by the user, or snapshots to be applied to the user (subscription id was included in the applyScope in Snapshot - Take).


```js
azure_cognitiveservices_face.Snapshot_List({}, context)
```

#### Input
* input `object`
  * type `string` (values: FaceList, LargeFaceList, LargePersonGroup, PersonGroup): User specified object type as a search filter.
  * applyScope `array`: User specified snapshot apply scopes as a search filter. ApplyScope is an array of the target Azure subscription ids for the snapshot, specified by the user who created the snapshot by Snapshot - Take.

#### Output
* output [Snapshots](#snapshots)

### Snapshot_Take
Submit an operation to take a snapshot of face list, large face list, person group or large person group, with user-specified snapshot type, source object id, apply scope and an optional user data.<br />
The snapshot interfaces are for users to backup and restore their face data from one face subscription to another, inside same region or across regions. The workflow contains two phases, user first calls Snapshot - Take to create a copy of the source object and store it as a snapshot, then calls Snapshot - Apply to paste the snapshot to target subscription. The snapshots are stored in a centralized location (per Azure instance), so that they can be applied cross accounts and regions.<br />
Taking snapshot is an asynchronous operation. An operation id can be obtained from the "Operation-Location" field in response header, to be used in OperationStatus - Get for tracking the progress of creating the snapshot. The snapshot id will be included in the "resourceLocation" field in OperationStatus - Get response when the operation status is "succeeded".<br />
Snapshot taking time depends on the number of person and face entries in the source object. It could be in seconds, or up to several hours for 1,000,000 persons with multiple faces.<br />
Snapshots will be automatically expired and cleaned in 48 hours after it is created by Snapshot - Take. User can delete the snapshot using Snapshot - Delete by themselves any time before expiration.<br />
Taking snapshot for a certain object will not block any other operations against the object. All read-only operations (Get/List and Identify/FindSimilar/Verify) can be conducted as usual. For all writable operations, including Add/Update/Delete the source object or its persons/faces and Train, they are not blocked but not recommended because writable updates may not be reflected on the snapshot during its taking. After snapshot taking is completed, all readable and writable operations can work as normal. Snapshot will also include the training results of the source object, which means target subscription the snapshot applied to does not need re-train the target object before calling Identify/FindSimilar.<br />
* Free-tier subscription quota: 100 take operations per month.
* S0-tier subscription quota: 100 take operations per day.


```js
azure_cognitiveservices_face.Snapshot_Take({
  "body": {
    "type": "",
    "objectId": "",
    "applyScope": []
  }
}, context)
```

#### Input
* input `object`
  * body **required** [TakeSnapshotRequest](#takesnapshotrequest)

#### Output
*Output schema unknown*

### Snapshot_Delete
Delete an existing snapshot according to the snapshotId. All object data and information in the snapshot will also be deleted. Only the source subscription who took the snapshot can delete the snapshot. If the user does not delete a snapshot with this API, the snapshot will still be automatically deleted in 48 hours after creation.


```js
azure_cognitiveservices_face.Snapshot_Delete({
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * snapshotId **required** `string`: Id referencing a particular snapshot.

#### Output
*Output schema unknown*

### Snapshot_Get
Retrieve information about a snapshot. Snapshot is only accessible to the source subscription who took it, and target subscriptions included in the applyScope in Snapshot - Take.


```js
azure_cognitiveservices_face.Snapshot_Get({
  "snapshotId": ""
}, context)
```

#### Input
* input `object`
  * snapshotId **required** `string`: Id referencing a particular snapshot.

#### Output
* output [Snapshot](#snapshot)

### Snapshot_Update
Update the information of a snapshot. Only the source subscription who took the snapshot can update the snapshot.


```js
azure_cognitiveservices_face.Snapshot_Update({
  "snapshotId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * snapshotId **required** `string`: Id referencing a particular snapshot.
  * body **required** [UpdateSnapshotRequest](#updatesnapshotrequest)

#### Output
*Output schema unknown*

### Snapshot_Apply
Submit an operation to apply a snapshot to current subscription. For each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it.<br />
The snapshot interfaces are for users to backup and restore their face data from one face subscription to another, inside same region or across regions. The workflow contains two phases, user first calls Snapshot - Take to create a copy of the source object and store it as a snapshot, then calls Snapshot - Apply to paste the snapshot to target subscription. The snapshots are stored in a centralized location (per Azure instance), so that they can be applied cross accounts and regions.<br />
Applying snapshot is an asynchronous operation. An operation id can be obtained from the "Operation-Location" field in response header, to be used in OperationStatus - Get for tracking the progress of applying the snapshot. The target object id will be included in the "resourceLocation" field in OperationStatus - Get response when the operation status is "succeeded".<br />
Snapshot applying time depends on the number of person and face entries in the snapshot object. It could be in seconds, or up to 1 hour for 1,000,000 persons with multiple faces.<br />
Snapshots will be automatically expired and cleaned in 48 hours after it is created by Snapshot - Take. So the target subscription is required to apply the snapshot in 48 hours since its creation.<br />
Applying a snapshot will not block any other operations against the target object, however it is not recommended because the correctness cannot be guaranteed during snapshot applying. After snapshot applying is completed, all operations towards the target object can work as normal. Snapshot also includes the training results of the source object, which means target subscription the snapshot applied to does not need re-train the target object before calling Identify/FindSimilar.<br />
One snapshot can be applied multiple times in parallel, while currently only CreateNew apply mode is supported, which means the apply operation will fail if target subscription already contains an object of same type and using the same objectId. Users can specify the "objectId" in request body to avoid such conflicts.<br />
* Free-tier subscription quota: 100 apply operations per month.
* S0-tier subscription quota: 100 apply operations per day.


```js
azure_cognitiveservices_face.Snapshot_Apply({
  "snapshotId": "",
  "body": {
    "objectId": ""
  }
}, context)
```

#### Input
* input `object`
  * snapshotId **required** `string`: Id referencing a particular snapshot.
  * body **required** [ApplySnapshotRequest](#applysnapshotrequest)

#### Output
*Output schema unknown*

### Face_VerifyFaceToFace
Verify whether two faces belong to a same person or whether one face belongs to a person.
<br/>
Remarks:<br />
* Higher face image quality means better identification precision. Please consider high-quality faces: frontal, clear, and face size is 200x200 pixels (100 pixels between eyes) or bigger.
* For the scenarios that are sensitive to accuracy please make your own judgment.
* The 'recognitionModel' associated with the query faces' faceIds should be the same as the 'recognitionModel' used by the target face, person group or large person group.



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

### ApplyScope
* ApplyScope `array`: Array of the target Face subscription ids for the snapshot, specified by the user who created the snapshot when calling Snapshot - Take. For each snapshot, only subscriptions included in the applyScope of Snapshot - Take can apply it.
  * items `string`

### ApplySnapshotRequest
* ApplySnapshotRequest `object`: Request body for applying snapshot operation.
  * mode `string` (values: CreateNew): Snapshot applying mode. Currently only CreateNew is supported, which means the apply operation will fail if target subscription already contains an object of same type and using the same objectId. Users can specify the "objectId" in request body to avoid such conflicts.
  * objectId **required** `string`: User specified target object id to be created from the snapshot.

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
  * recognitionModel [RecognitionModel](#recognitionmodel)

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
  * gender `string` (values: male, female): Possible gender of the face.
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
  * persistedFaces [PersistedFaces](#persistedfaces)
  * recognitionModel [RecognitionModel](#recognitionmodel)
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
  * faceIds `array`: An array of candidate faceIds. All of them are created by Face - Detect and the faceIds will expire 24 hours after the detection call. The number of faceIds is limited to 1000. Parameter faceListId, largeFaceListId and faceIds should not be provided at the same time.
    * items `string`
  * faceListId `string`: An existing user-specified unique candidate face list, created in Face List - Create a Face List. Face list contains a set of persistedFaceIds which are persisted and will never expire. Parameter faceListId, largeFaceListId and faceIds should not be provided at the same time.
  * largeFaceListId `string`: An existing user-specified unique candidate large face list, created in LargeFaceList - Create. Large face list contains a set of persistedFaceIds which are persisted and will never expire. Parameter faceListId, largeFaceListId and faceIds should not be provided at the same time.
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
  * largePersonGroupId `string`: LargePersonGroupId of the target large person group, created by LargePersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time.
  * maxNumOfCandidatesReturned `integer`: The range of maxNumOfCandidatesReturned is between 1 and 5 (default is 1).
  * personGroupId `string`: PersonGroupId of the target person group, created by PersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time.

### IdentifyResult
* IdentifyResult `object`: Response body for identify face operation.
  * candidates **required** `array`: Identified person candidates for that face (ranked by confidence). Array size should be no larger than input maxNumOfCandidatesReturned. If no person is identified, will return an empty array.
    * items [IdentifyCandidate](#identifycandidate)
  * faceId **required** `string`: FaceId of the query face

### IdentifyResults
* IdentifyResults `array`
  * items [IdentifyResult](#identifyresult)

### LargeFaceList
* LargeFaceList `object`: Large face list object.
  * largeFaceListId **required** `string`: LargeFaceListId of the target large face list.
  * recognitionModel [RecognitionModel](#recognitionmodel)
  * name `string`: User defined name, maximum length is 128.
  * userData `string`: User specified data. Length should not exceed 16KB.

### LargeFaceLists
* LargeFaceLists `array`: An array of large face list results, with fields of largeFaceListId, name and userData
  * items [LargeFaceList](#largefacelist)

### LargePersonGroup
* LargePersonGroup `object`: Large person group object.
  * largePersonGroupId **required** `string`: LargePersonGroupId of the target large person groups
  * recognitionModel [RecognitionModel](#recognitionmodel)
  * name `string`: User defined name, maximum length is 128.
  * userData `string`: User specified data. Length should not exceed 16KB.

### LargePersonGroups
* LargePersonGroups `array`: An array of large person groups.
  * items [LargePersonGroup](#largepersongroup)

### Level
* Level `number`: A number ranging from 0 to 1 indicating the intensity level associated with a property.

### Makeup
* Makeup `object`: Properties describing present makeups on a given face.
  * eyeMakeup `boolean`: A boolean value describing whether eye makeup is present on a face.
  * lipMakeup `boolean`: A boolean value describing whether lip makeup is present on a face.

### MetaDataContract
* MetaDataContract `object`: A combination of user defined name and user specified data and recognition model name for largePersonGroup/personGroup, and largeFaceList/faceList.
  * recognitionModel [RecognitionModel](#recognitionmodel)
  * name `string`: User defined name, maximum length is 128.
  * userData `string`: User specified data. Length should not exceed 16KB.

### NameAndUserDataContract
* NameAndUserDataContract `object`: A combination of user defined name and user specified data for the person, largePersonGroup/personGroup, and largeFaceList/faceList.
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

### OperationStatus
* OperationStatus `object`: Operation status object. Operation refers to the asynchronous backend task including taking a snapshot and applying a snapshot.
  * createdTime **required** `string`: A combined UTC date and time string that describes the time when the operation (take or apply a snapshot) is requested. E.g. 2018-12-25T11:41:02.2331413Z.
  * lastActionTime `string`: A combined UTC date and time string that describes the last time the operation (take or apply a snapshot) is actively migrating data. The lastActionTime will keep increasing until the operation finishes. E.g. 2018-12-25T11:51:27.8705696Z.
  * message `string`: Show failure message when operation fails (omitted when operation succeeds).
  * resourceLocation `string`: When the operation succeeds successfully, for snapshot taking operation the snapshot id will be included in this field, and for snapshot applying operation, the path to get the target object will be returned in this field.
  * status **required** `string` (values: notstarted, running, succeeded, failed): Operation status: notstarted, running, succeeded, failed. If the operation is requested and waiting to perform, the status is notstarted. If the operation is ongoing in backend, the status is running. Status succeeded means the operation is completed successfully, specifically for snapshot taking operation, it illustrates the snapshot is well taken and ready to apply, and for snapshot applying operation, it presents the target object has finished creating by the snapshot and ready to be used. Status failed is often caused by editing the source object while taking the snapshot or editing the target object while applying the snapshot before completion, see the field "message" to check the failure reason.

### PersistedFace
* PersistedFace `object`: PersonFace object.
  * persistedFaceId **required** `string`: The persistedFaceId of the target face, which is persisted and will not expire. Different from faceId created by Face - Detect and will expire in 24 hours after the detection call.
  * userData `string`: User-provided data attached to the face. The size limit is 1KB.

### PersistedFaces
* PersistedFaces `array`: An array of persisted faces within the face list or large face list.
  * items [PersistedFace](#persistedface)

### Person
* Person `object`: Person object.
  * persistedFaceIds `array`: PersistedFaceIds of registered faces in the person. These persistedFaceIds are returned from Person - Add a Person Face, and will not expire.
    * items `string`
  * personId **required** `string`: PersonId of the target face list.
  * name `string`: User defined name, maximum length is 128.
  * userData `string`: User specified data. Length should not exceed 16KB.

### PersonGroup
* PersonGroup `object`: Person group object.
  * personGroupId **required** `string`: PersonGroupId of the target person group.
  * recognitionModel [RecognitionModel](#recognitionmodel)
  * name `string`: User defined name, maximum length is 128.
  * userData `string`: User specified data. Length should not exceed 16KB.

### PersonGroups
* PersonGroups `array`: An array of person groups.
  * items [PersonGroup](#persongroup)

### Persons
* Persons `array`: An array of Persons.
  * items [Person](#person)

### RecognitionModel
* RecognitionModel `string` (values: recognition_01, recognition_02): Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds, (Large)FaceList or (Large)PersonGroup. A recognition model name can be provided when performing Face - Detect or (Large)FaceList - Create or (Large)PersonGroup - Create. The default value is 'recognition_01', if latest model needed, please explicitly specify the model you need.

### SimilarFace
* SimilarFace `object`: Response body for find similar face operation.
  * confidence **required** [Confidence](#confidence)
  * faceId `string`: FaceId of candidate face when find by faceIds. faceId is created by Face - Detect and will expire 24 hours after the detection call
  * persistedFaceId `string`: PersistedFaceId of candidate face when find by faceListId. persistedFaceId in face list is persisted and will not expire. As showed in below response

### SimilarFaces
* SimilarFaces `array`
  * items [SimilarFace](#similarface)

### Snapshot
* Snapshot `object`: Snapshot object.
  * account **required** `string`: Azure Cognitive Service Face account id of the subscriber who created the snapshot by Snapshot - Take.
  * applyScope **required** [ApplyScope](#applyscope)
  * createdTime **required** `string`: A combined UTC date and time string that describes the created time of the snapshot. E.g. 2018-12-25T11:41:02.2331413Z.
  * id **required** `string`: Snapshot id.
  * lastUpdateTime **required** `string`: A combined UTC date and time string that describes the last time when the snapshot was created or updated by Snapshot - Update. E.g. 2018-12-25T11:51:27.8705696Z.
  * type **required** `string` (values: FaceList, LargeFaceList, LargePersonGroup, PersonGroup): Type of the source object in the snapshot, specified by the subscriber who created the snapshot when calling Snapshot - Take. Currently FaceList, PersonGroup, LargeFaceList and LargePersonGroup are supported.
  * userData `string`: User specified data about the snapshot for any purpose. Length should not exceed 16KB.

### Snapshots
* Snapshots `array`: An array of snapshots.
  * items [Snapshot](#snapshot)

### TakeSnapshotRequest
* TakeSnapshotRequest `object`: Request body for taking snapshot operation.
  * applyScope **required** [ApplyScope](#applyscope)
  * objectId **required** `string`: User specified source object id to take snapshot from.
  * type **required** `string` (values: FaceList, LargeFaceList, LargePersonGroup, PersonGroup): User specified type for the source object to take snapshot from. Currently FaceList, PersonGroup, LargeFaceList and LargePersonGroup are supported.
  * userData `string`: User specified data about the snapshot for any purpose. Length should not exceed 16KB.

### TrainingStatus
* TrainingStatus `object`: Training status object.
  * createdDateTime **required** `string`: A combined UTC date and time string that describes the created time of the person group, large person group or large face list.
  * lastActionDateTime `string`: A combined UTC date and time string that describes the last modify time of the person group, large person group or large face list, could be null value when the group is not successfully trained.
  * lastSuccessfulTrainingDateTime `string`: A combined UTC date and time string that describes the last successful training time of the person group, large person group or large face list.
  * message `string`: Show failure message when training failed (omitted when training succeed).
  * status **required** `string` (values: nonstarted, running, succeeded, failed): Training status: notstarted, running, succeeded, failed. If the training process is waiting to perform, the status is notstarted. If the training is ongoing, the status is running. Status succeed means this person group or large person group is ready for Face - Identify, or this large face list is ready for Face - Find Similar. Status failed is often caused by no person or no persisted face exist in the person group or large person group, or no persisted face exist in the large face list.

### UpdateFaceRequest
* UpdateFaceRequest `object`: Request to update face data.
  * userData `string`: User-provided data attached to the face. The size limit is 1KB.

### UpdateSnapshotRequest
* UpdateSnapshotRequest `object`: Request body for updating a snapshot, with a combination of user defined apply scope and user specified data.
  * applyScope [ApplyScope](#applyscope)
  * userData `string`: User specified data about the snapshot for any purpose. Length should not exceed 16KB.

### VerifyFaceToFaceRequest
* VerifyFaceToFaceRequest `object`: Request body for face to face verification.
  * faceId1 **required** `string`: FaceId of the first face, comes from Face - Detect
  * faceId2 **required** `string`: FaceId of the second face, comes from Face - Detect

### VerifyFaceToPersonRequest
* VerifyFaceToPersonRequest `object`: Request body for face to person verification.
  * faceId **required** `string`: FaceId of the face, comes from Face - Detect
  * largePersonGroupId `string`: Using existing largePersonGroupId and personId for fast loading a specified person. largePersonGroupId is created in LargePersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time.
  * personGroupId `string`: Using existing personGroupId and personId for fast loading a specified person. personGroupId is created in PersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time.
  * personId **required** `string`: Specify a certain person in a person group or a large person group. personId is created in PersonGroup Person - Create or LargePersonGroup Person - Create.

### VerifyResult
* VerifyResult `object`: Result of the verify operation.
  * confidence **required** [Confidence](#confidence)
  * isIdentical **required** `boolean`: True if the two faces belong to the same person or the face belongs to the person, otherwise false.


