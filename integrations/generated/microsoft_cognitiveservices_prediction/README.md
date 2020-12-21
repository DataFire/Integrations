# @datafire/microsoft_cognitiveservices_prediction

Client library for Custom Vision Prediction Client

## Installation and Usage
```bash
npm install --save @datafire/microsoft_cognitiveservices_prediction
```
```js
let microsoft_cognitiveservices_prediction = require('@datafire/microsoft_cognitiveservices_prediction').create({
  apim_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### ClassifyImage
Classify an image and saves the result.


```js
microsoft_cognitiveservices_prediction.ClassifyImage({
  "projectId": "",
  "publishedName": "",
  "imageData": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * publishedName **required** `string`: Specifies the name of the model to evaluate against.
  * application `string`: Optional. Specifies the name of application using the endpoint.
  * imageData **required** `string`: Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 4MB.

#### Output
* output [ImagePrediction](#imageprediction)

### ClassifyImageWithNoStore
Classify an image without saving the result.


```js
microsoft_cognitiveservices_prediction.ClassifyImageWithNoStore({
  "projectId": "",
  "publishedName": "",
  "imageData": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * publishedName **required** `string`: Specifies the name of the model to evaluate against.
  * application `string`: Optional. Specifies the name of application using the endpoint.
  * imageData **required** `string`: Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 0MB.

#### Output
* output [ImagePrediction](#imageprediction)

### ClassifyImageUrl
Classify an image url and saves the result.


```js
microsoft_cognitiveservices_prediction.ClassifyImageUrl({
  "projectId": "",
  "publishedName": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * publishedName **required** `string`: Specifies the name of the model to evaluate against.
  * application `string`: Optional. Specifies the name of application using the endpoint.
  * body **required** [ImageUrl](#imageurl)

#### Output
* output [ImagePrediction](#imageprediction)

### ClassifyImageUrlWithNoStore
Classify an image url without saving the result.


```js
microsoft_cognitiveservices_prediction.ClassifyImageUrlWithNoStore({
  "projectId": "",
  "publishedName": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * publishedName **required** `string`: Specifies the name of the model to evaluate against.
  * application `string`: Optional. Specifies the name of application using the endpoint.
  * body **required** [ImageUrl](#imageurl)

#### Output
* output [ImagePrediction](#imageprediction)

### DetectImage
Detect objects in an image and saves the result.


```js
microsoft_cognitiveservices_prediction.DetectImage({
  "projectId": "",
  "publishedName": "",
  "imageData": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * publishedName **required** `string`: Specifies the name of the model to evaluate against.
  * application `string`: Optional. Specifies the name of application using the endpoint.
  * imageData **required** `string`: Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 4MB.

#### Output
* output [ImagePrediction](#imageprediction)

### DetectImageWithNoStore
Detect objects in an image without saving the result.


```js
microsoft_cognitiveservices_prediction.DetectImageWithNoStore({
  "projectId": "",
  "publishedName": "",
  "imageData": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * publishedName **required** `string`: Specifies the name of the model to evaluate against.
  * application `string`: Optional. Specifies the name of application using the endpoint.
  * imageData **required** `string`: Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 0MB.

#### Output
* output [ImagePrediction](#imageprediction)

### DetectImageUrl
Detect objects in an image url and saves the result.


```js
microsoft_cognitiveservices_prediction.DetectImageUrl({
  "projectId": "",
  "publishedName": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * publishedName **required** `string`: Specifies the name of the model to evaluate against.
  * application `string`: Optional. Specifies the name of application using the endpoint.
  * body **required** [ImageUrl](#imageurl)

#### Output
* output [ImagePrediction](#imageprediction)

### DetectImageUrlWithNoStore
Detect objects in an image url without saving the result.


```js
microsoft_cognitiveservices_prediction.DetectImageUrlWithNoStore({
  "projectId": "",
  "publishedName": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * publishedName **required** `string`: Specifies the name of the model to evaluate against.
  * application `string`: Optional. Specifies the name of application using the endpoint.
  * body **required** [ImageUrl](#imageurl)

#### Output
* output [ImagePrediction](#imageprediction)



## Definitions

### BoundingBox
* BoundingBox `object`: Bounding box that defines a region of an image.
  * height **required** `number`: Height.
  * left **required** `number`: Coordinate of the left boundary.
  * top **required** `number`: Coordinate of the top boundary.
  * width **required** `number`: Width.

### CustomVisionError
* CustomVisionError `object`
  * code **required** `string` (values: NoError, BadRequest, BadRequestExceededBatchSize, BadRequestNotSupported, BadRequestInvalidIds, BadRequestProjectName, BadRequestProjectNameNotUnique, BadRequestProjectDescription, BadRequestProjectUnknownDomain, BadRequestProjectUnknownClassification, BadRequestProjectUnsupportedDomainTypeChange, BadRequestProjectUnsupportedExportPlatform, BadRequestIterationName, BadRequestIterationNameNotUnique, BadRequestIterationDescription, BadRequestIterationIsNotTrained, BadRequestWorkspaceCannotBeModified, BadRequestWorkspaceNotDeletable, BadRequestTagName, BadRequestTagNameNotUnique, BadRequestTagDescription, BadRequestTagType, BadRequestMultipleNegativeTag, BadRequestImageTags, BadRequestImageRegions, BadRequestNegativeAndRegularTagOnSameImage, BadRequestRequiredParamIsNull, BadRequestIterationIsPublished, BadRequestInvalidPublishName, BadRequestInvalidPublishTarget, BadRequestUnpublishFailed, BadRequestSubscriptionApi, BadRequestExceedProjectLimit, BadRequestExceedIterationPerProjectLimit, BadRequestExceedTagPerProjectLimit, BadRequestExceedTagPerImageLimit, BadRequestExceededQuota, BadRequestCannotMigrateProjectWithName, BadRequestNotLimitedTrial, BadRequestImageBatch, BadRequestImageStream, BadRequestImageUrl, BadRequestImageFormat, BadRequestImageSizeBytes, BadRequestImageExceededCount, BadRequestTrainingNotNeeded, BadRequestTrainingNotNeededButTrainingPipelineUpdated, BadRequestTrainingValidationFailed, BadRequestClassificationTrainingValidationFailed, BadRequestMultiClassClassificationTrainingValidationFailed, BadRequestMultiLabelClassificationTrainingValidationFailed, BadRequestDetectionTrainingValidationFailed, BadRequestTrainingAlreadyInProgress, BadRequestDetectionTrainingNotAllowNegativeTag, BadRequestInvalidEmailAddress, BadRequestDomainNotSupportedForAdvancedTraining, BadRequestExportPlatformNotSupportedForAdvancedTraining, BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining, BadRequestExportValidationFailed, BadRequestExportAlreadyInProgress, BadRequestPredictionIdsMissing, BadRequestPredictionIdsExceededCount, BadRequestPredictionTagsExceededCount, BadRequestPredictionResultsExceededCount, BadRequestPredictionInvalidApplicationName, BadRequestPredictionInvalidQueryParameters, BadRequestInvalid, UnsupportedMediaType, Forbidden, ForbiddenUser, ForbiddenUserResource, ForbiddenUserSignupDisabled, ForbiddenUserSignupAllowanceExceeded, ForbiddenUserDoesNotExist, ForbiddenUserDisabled, ForbiddenUserInsufficientCapability, ForbiddenDRModeEnabled, ForbiddenInvalid, NotFound, NotFoundProject, NotFoundProjectDefaultIteration, NotFoundIteration, NotFoundIterationPerformance, NotFoundTag, NotFoundImage, NotFoundDomain, NotFoundApimSubscription, NotFoundInvalid, Conflict, ConflictInvalid, ErrorUnknown, ErrorProjectInvalidWorkspace, ErrorProjectInvalidPipelineConfiguration, ErrorProjectInvalidDomain, ErrorProjectTrainingRequestFailed, ErrorProjectExportRequestFailed, ErrorFeaturizationServiceUnavailable, ErrorFeaturizationQueueTimeout, ErrorFeaturizationInvalidFeaturizer, ErrorFeaturizationAugmentationUnavailable, ErrorFeaturizationUnrecognizedJob, ErrorFeaturizationAugmentationError, ErrorExporterInvalidPlatform, ErrorExporterInvalidFeaturizer, ErrorExporterInvalidClassifier, ErrorPredictionServiceUnavailable, ErrorPredictionModelNotFound, ErrorPredictionModelNotCached, ErrorPrediction, ErrorPredictionStorage, ErrorRegionProposal, ErrorInvalid): The error code.
  * message **required** `string`: A message explaining the error reported by the service.

### ImagePrediction
* ImagePrediction `object`: Result of an image prediction request.
  * created `string`: Date this prediction was created.
  * id `string`: Prediction Id.
  * iteration `string`: Iteration Id.
  * predictions `array`: List of predictions.
    * items [Prediction](#prediction)
  * project `string`: Project Id.

### ImageUrl
* ImageUrl `object`: Image url.
  * url **required** `string`: Url of the image.

### Prediction
* Prediction `object`: Prediction result.
  * boundingBox [BoundingBox](#boundingbox)
  * probability `number`: Probability of the tag.
  * tagId `string`: Id of the predicted tag.
  * tagName `string`: Name of the predicted tag.


