# @datafire/microsoft_cognitiveservices_training

Client library for Custom Vision Training Client

## Installation and Usage
```bash
npm install --save @datafire/microsoft_cognitiveservices_training
```
```js
let microsoft_cognitiveservices_training = require('@datafire/microsoft_cognitiveservices_training').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### GetDomains
Get a list of the available domains.


```js
microsoft_cognitiveservices_training.GetDomains({
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * Training-Key **required** `string`: API key.

#### Output
* output `array`
  * items [Domain](#domain)

### GetDomain
Get information about a specific domain.


```js
microsoft_cognitiveservices_training.GetDomain({
  "domainId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * domainId **required** `string`: The id of the domain to get information about.
  * Training-Key **required** `string`: API key.

#### Output
* output [Domain](#domain)

### GetProjects
Get your projects.


```js
microsoft_cognitiveservices_training.GetProjects({
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * Training-Key **required** `string`: API key.

#### Output
* output `array`
  * items [Project](#project)

### CreateProject
Create a project.


```js
microsoft_cognitiveservices_training.CreateProject({
  "name": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the project.
  * description `string`: The description of the project.
  * domainId `string`: The id of the domain to use for this project. Defaults to General.
  * classificationType `string` (values: Multiclass, Multilabel): The type of classifier to create for this project.
  * targetExportPlatforms `array`: List of platforms the trained model is intending exporting to.
  * Training-Key **required** `string`: API key.

#### Output
* output [Project](#project)

### DeleteProject
Delete a specific project.


```js
microsoft_cognitiveservices_training.DeleteProject({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * Training-Key **required** `string`: API key.

#### Output
*Output schema unknown*

### GetProject
Get a specific project.


```js
microsoft_cognitiveservices_training.GetProject({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The id of the project to get.
  * Training-Key **required** `string`: API key.

#### Output
* output [Project](#project)

### UpdateProject
Update a specific project.


```js
microsoft_cognitiveservices_training.UpdateProject({
  "projectId": "",
  "Training-Key": "",
  "body": {
    "name": "",
    "description": "",
    "settings": {}
  }
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The id of the project to update.
  * Training-Key **required** `string`: API key.
  * body **required** [Project](#project)

#### Output
* output [Project](#project)

### DeleteImages
Delete images from the set of training images.


```js
microsoft_cognitiveservices_training.DeleteImages({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * imageIds `array`: Ids of the images to be deleted. Limited to 256 images per batch.
  * allImages `boolean`: Flag to specify delete all images, specify this flag or a list of images. Using this flag will return a 202 response to indicate the images are being deleted.
  * allIterations `boolean`: Removes these images from all iterations, not just the current workspace. Using this flag will return a 202 response to indicate the images are being deleted.
  * Training-Key **required** `string`: API key.

#### Output
*Output schema unknown*

### CreateImagesFromData
This API accepts body content as multipart/form-data and application/octet-stream. When using multipart
multiple image files can be sent at once, with a maximum of 64 files


```js
microsoft_cognitiveservices_training.CreateImagesFromData({
  "projectId": "",
  "Training-Key": "",
  "imageData": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * tagIds `array`: The tags ids with which to tag each image. Limited to 20.
  * Training-Key **required** `string`: API key.
  * imageData **required** `string`: Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 6MB.

#### Output
* output [ImageCreateSummary](#imagecreatesummary)

### CreateImagesFromFiles
This API accepts a batch of files, and optionally tags, to create images. There is a limit of 64 images and 20 tags.


```js
microsoft_cognitiveservices_training.CreateImagesFromFiles({
  "projectId": "",
  "Training-Key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * Training-Key **required** `string`: API key.
  * body **required** [ImageFileCreateBatch](#imagefilecreatebatch)

#### Output
* output [ImageCreateSummary](#imagecreatesummary)

### GetImagesByIds
This API will return a set of Images for the specified tags and optionally iteration. If no iteration is specified the
current workspace is used.


```js
microsoft_cognitiveservices_training.GetImagesByIds({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * imageIds `array`: The list of image ids to retrieve. Limited to 256.
  * iterationId `string`: The iteration id. Defaults to workspace.
  * Training-Key **required** `string`: API key.

#### Output
* output `array`
  * items [Image](#image)

### CreateImagesFromPredictions
This API creates a batch of images from predicted images specified. There is a limit of 64 images and 20 tags.


```js
microsoft_cognitiveservices_training.CreateImagesFromPredictions({
  "projectId": "",
  "Training-Key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * Training-Key **required** `string`: API key.
  * body **required** [ImageIdCreateBatch](#imageidcreatebatch)

#### Output
* output [ImageCreateSummary](#imagecreatesummary)

### DeleteImageRegions
Delete a set of image regions.


```js
microsoft_cognitiveservices_training.DeleteImageRegions({
  "projectId": "",
  "regionIds": [],
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * regionIds **required** `array`: Regions to delete. Limited to 64.
  * Training-Key **required** `string`: API key.

#### Output
*Output schema unknown*

### CreateImageRegions
This API accepts a batch of image regions, and optionally tags, to update existing images with region information.
There is a limit of 64 entries in the batch.


```js
microsoft_cognitiveservices_training.CreateImageRegions({
  "projectId": "",
  "Training-Key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * Training-Key **required** `string`: API key.
  * body **required** [ImageRegionCreateBatch](#imageregioncreatebatch)

#### Output
* output [ImageRegionCreateSummary](#imageregioncreatesummary)

### QuerySuggestedImages
This API will fetch untagged images filtered by suggested tags Ids. It returns an empty array if no images are found.


```js
microsoft_cognitiveservices_training.QuerySuggestedImages({
  "projectId": "",
  "iterationId": "",
  "Training-Key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId **required** `string`: IterationId to use for the suggested tags and regions.
  * Training-Key **required** `string`: API key.
  * body **required** [SuggestedTagAndRegionQueryToken](#suggestedtagandregionquerytoken)

#### Output
* output [SuggestedTagAndRegionQuery](#suggestedtagandregionquery)

### QuerySuggestedImageCount
This API takes in tagIds to get count of untagged images per suggested tags for a given threshold.


```js
microsoft_cognitiveservices_training.QuerySuggestedImageCount({
  "projectId": "",
  "iterationId": "",
  "Training-Key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId **required** `string`: IterationId to use for the suggested tags and regions.
  * Training-Key **required** `string`: API key.
  * body **required** [TagFilter](#tagfilter)

#### Output
* output `object`

### GetTaggedImages
This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.
The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned


```js
microsoft_cognitiveservices_training.GetTaggedImages({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId `string`: The iteration id. Defaults to workspace.
  * tagIds `array`: A list of tags ids to filter the images. Defaults to all tagged images when null. Limited to 20.
  * orderBy `string` (values: Newest, Oldest): The ordering. Defaults to newest.
  * take `integer`: Maximum number of images to return. Defaults to 50, limited to 256.
  * skip `integer`: Number of images to skip before beginning the image batch. Defaults to 0.
  * Training-Key **required** `string`: API key.

#### Output
* output `array`
  * items [Image](#image)

### GetTaggedImageCount
The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned


```js
microsoft_cognitiveservices_training.GetTaggedImageCount({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId `string`: The iteration id. Defaults to workspace.
  * tagIds `array`: A list of tags ids to filter the images to count. Defaults to all tags when null.
  * Training-Key **required** `string`: API key.

#### Output
* output `integer`

### DeleteImageTags
Remove a set of tags from a set of images.


```js
microsoft_cognitiveservices_training.DeleteImageTags({
  "projectId": "",
  "imageIds": [],
  "tagIds": [],
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * imageIds **required** `array`: Image ids. Limited to 64 images.
  * tagIds **required** `array`: Tags to be deleted from the specified images. Limited to 20 tags.
  * Training-Key **required** `string`: API key.

#### Output
*Output schema unknown*

### CreateImageTags
Associate a set of images with a set of tags.


```js
microsoft_cognitiveservices_training.CreateImageTags({
  "projectId": "",
  "Training-Key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * Training-Key **required** `string`: API key.
  * body **required** [ImageTagCreateBatch](#imagetagcreatebatch)

#### Output
* output [ImageTagCreateSummary](#imagetagcreatesummary)

### GetUntaggedImages
This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.


```js
microsoft_cognitiveservices_training.GetUntaggedImages({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId `string`: The iteration id. Defaults to workspace.
  * orderBy `string` (values: Newest, Oldest): The ordering. Defaults to newest.
  * take `integer`: Maximum number of images to return. Defaults to 50, limited to 256.
  * skip `integer`: Number of images to skip before beginning the image batch. Defaults to 0.
  * Training-Key **required** `string`: API key.

#### Output
* output `array`
  * items [Image](#image)

### GetUntaggedImageCount
This API returns the images which have no tags for a given project and optionally an iteration. If no iteration is specified the
current workspace is used.


```js
microsoft_cognitiveservices_training.GetUntaggedImageCount({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId `string`: The iteration id. Defaults to workspace.
  * Training-Key **required** `string`: API key.

#### Output
* output `integer`

### CreateImagesFromUrls
This API accepts a batch of urls, and optionally tags, to create images. There is a limit of 64 images and 20 tags.


```js
microsoft_cognitiveservices_training.CreateImagesFromUrls({
  "projectId": "",
  "Training-Key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * Training-Key **required** `string`: API key.
  * body **required** [ImageUrlCreateBatch](#imageurlcreatebatch)

#### Output
* output [ImageCreateSummary](#imagecreatesummary)

### GetImageRegionProposals
This API will get region proposals for an image along with confidences for the region. It returns an empty array if no proposals are found.


```js
microsoft_cognitiveservices_training.GetImageRegionProposals({
  "projectId": "",
  "imageId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * imageId **required** `string`: The image id.
  * Training-Key **required** `string`: API key.

#### Output
* output [ImageRegionProposal](#imageregionproposal)

### GetIterations
Get iterations for the project.


```js
microsoft_cognitiveservices_training.GetIterations({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * Training-Key **required** `string`: API key.

#### Output
* output `array`
  * items [Iteration](#iteration)

### DeleteIteration
Delete a specific iteration of a project.


```js
microsoft_cognitiveservices_training.DeleteIteration({
  "projectId": "",
  "iterationId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId **required** `string`: The iteration id.
  * Training-Key **required** `string`: API key.

#### Output
*Output schema unknown*

### GetIteration
Get a specific iteration.


```js
microsoft_cognitiveservices_training.GetIteration({
  "projectId": "",
  "iterationId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The id of the project the iteration belongs to.
  * iterationId **required** `string`: The id of the iteration to get.
  * Training-Key **required** `string`: API key.

#### Output
* output [Iteration](#iteration)

### UpdateIteration
Update a specific iteration.


```js
microsoft_cognitiveservices_training.UpdateIteration({
  "projectId": "",
  "iterationId": "",
  "Training-Key": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project id.
  * iterationId **required** `string`: Iteration id.
  * Training-Key **required** `string`: API key.
  * body **required** [Iteration](#iteration)

#### Output
* output [Iteration](#iteration)

### GetExports
Get the list of exports for a specific iteration.


```js
microsoft_cognitiveservices_training.GetExports({
  "projectId": "",
  "iterationId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId **required** `string`: The iteration id.
  * Training-Key **required** `string`: API key.

#### Output
* output `array`
  * items [Export](#export)

### ExportIteration
Export a trained iteration.


```js
microsoft_cognitiveservices_training.ExportIteration({
  "projectId": "",
  "iterationId": "",
  "platform": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId **required** `string`: The iteration id.
  * platform **required** `string` (values: CoreML, TensorFlow, DockerFile, ONNX, VAIDK): The target platform.
  * flavor `string` (values: Linux, Windows, ONNX10, ONNX12, ARM, TensorFlowNormal, TensorFlowLite): The flavor of the target platform.
  * Training-Key **required** `string`: API key.

#### Output
* output [Export](#export)

### GetIterationPerformance
Get detailed performance information about an iteration.


```js
microsoft_cognitiveservices_training.GetIterationPerformance({
  "projectId": "",
  "iterationId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The id of the project the iteration belongs to.
  * iterationId **required** `string`: The id of the iteration to get.
  * threshold `number`: The threshold used to determine true predictions.
  * overlapThreshold `number`: If applicable, the bounding box overlap threshold used to determine true predictions.
  * Training-Key **required** `string`: API key.

#### Output
* output [IterationPerformance](#iterationperformance)

### GetImagePerformances
This API supports batching and range selection. By default it will only return first 50 images matching images.
Use the {take} and {skip} parameters to control how many images to return in a given batch.
The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned


```js
microsoft_cognitiveservices_training.GetImagePerformances({
  "projectId": "",
  "iterationId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId **required** `string`: The iteration id. Defaults to workspace.
  * tagIds `array`: A list of tags ids to filter the images. Defaults to all tagged images when null. Limited to 20.
  * orderBy `string` (values: Newest, Oldest): The ordering. Defaults to newest.
  * take `integer`: Maximum number of images to return. Defaults to 50, limited to 256.
  * skip `integer`: Number of images to skip before beginning the image batch. Defaults to 0.
  * Training-Key **required** `string`: API key.

#### Output
* output `array`
  * items [ImagePerformance](#imageperformance)

### GetImagePerformanceCount
The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
"Cat" tags, then only images tagged with Dog and/or Cat will be returned


```js
microsoft_cognitiveservices_training.GetImagePerformanceCount({
  "projectId": "",
  "iterationId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId **required** `string`: The iteration id. Defaults to workspace.
  * tagIds `array`: A list of tags ids to filter the images to count. Defaults to all tags when null.
  * Training-Key **required** `string`: API key.

#### Output
* output `integer`

### UnpublishIteration
Unpublish a specific iteration.


```js
microsoft_cognitiveservices_training.UnpublishIteration({
  "projectId": "",
  "iterationId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId **required** `string`: The iteration id.
  * Training-Key **required** `string`: API key.

#### Output
*Output schema unknown*

### PublishIteration
Publish a specific iteration.


```js
microsoft_cognitiveservices_training.PublishIteration({
  "projectId": "",
  "iterationId": "",
  "publishName": "",
  "predictionId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId **required** `string`: The iteration id.
  * publishName **required** `string`: The name to give the published iteration.
  * predictionId **required** `string`: The id of the prediction resource to publish to.
  * Training-Key **required** `string`: API key.

#### Output
* output `boolean`

### DeletePrediction
Delete a set of predicted images and their associated prediction results.


```js
microsoft_cognitiveservices_training.DeletePrediction({
  "projectId": "",
  "ids": [],
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * ids **required** `array`: The prediction ids. Limited to 64.
  * Training-Key **required** `string`: API key.

#### Output
*Output schema unknown*

### QueryPredictions
Get images that were sent to your prediction endpoint.


```js
microsoft_cognitiveservices_training.QueryPredictions({
  "projectId": "",
  "Training-Key": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * Training-Key **required** `string`: API key.
  * body **required** [PredictionQueryToken](#predictionquerytoken)

#### Output
* output [PredictionQueryResult](#predictionqueryresult)

### QuickTestImage
Quick test an image.


```js
microsoft_cognitiveservices_training.QuickTestImage({
  "projectId": "",
  "Training-Key": "",
  "imageData": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId `string`: Optional. Specifies the id of a particular iteration to evaluate against.
  * store `boolean`: Optional. Specifies whether or not to store the result of this prediction. The default is true, to store.
  * Training-Key **required** `string`: API key.
  * imageData **required** `string`: Binary image data. Supported formats are JPEG, GIF, PNG, and BMP. Supports images up to 6MB.

#### Output
* output [ImagePrediction](#imageprediction)

### QuickTestImageUrl
Quick test an image url.


```js
microsoft_cognitiveservices_training.QuickTestImageUrl({
  "projectId": "",
  "Training-Key": "",
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project to evaluate against.
  * iterationId `string`: Optional. Specifies the id of a particular iteration to evaluate against.
  * store `boolean`: Optional. Specifies whether or not to store the result of this prediction. The default is true, to store.
  * Training-Key **required** `string`: API key.
  * body **required** [ImageUrl](#imageurl)

#### Output
* output [ImagePrediction](#imageprediction)

### GetTags
Get the tags for a given project and iteration.


```js
microsoft_cognitiveservices_training.GetTags({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId `string`: The iteration id. Defaults to workspace.
  * Training-Key **required** `string`: API key.

#### Output
* output `array`
  * items [Tag](#tag)

### CreateTag
Create a tag for the project.


```js
microsoft_cognitiveservices_training.CreateTag({
  "projectId": "",
  "name": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * name **required** `string`: The tag name.
  * description `string`: Optional description for the tag.
  * type `string` (values: Regular, Negative): Optional type for the tag.
  * Training-Key **required** `string`: API key.

#### Output
* output [Tag](#tag)

### DeleteTag
Delete a tag from the project.


```js
microsoft_cognitiveservices_training.DeleteTag({
  "projectId": "",
  "tagId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * tagId **required** `string`: Id of the tag to be deleted.
  * Training-Key **required** `string`: API key.

#### Output
*Output schema unknown*

### GetTag
Get information about a specific tag.


```js
microsoft_cognitiveservices_training.GetTag({
  "projectId": "",
  "tagId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project this tag belongs to.
  * tagId **required** `string`: The tag id.
  * iterationId `string`: The iteration to retrieve this tag from. Optional, defaults to current training set.
  * Training-Key **required** `string`: API key.

#### Output
* output [Tag](#tag)

### UpdateTag
Update a tag.


```js
microsoft_cognitiveservices_training.UpdateTag({
  "projectId": "",
  "tagId": "",
  "Training-Key": "",
  "body": {
    "name": "",
    "description": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * tagId **required** `string`: The id of the target tag.
  * Training-Key **required** `string`: API key.
  * body **required** [Tag](#tag)

#### Output
* output [Tag](#tag)

### SuggestTagsAndRegions
This API will get suggested tags and regions for an array/batch of untagged images along with confidences for the tags. It returns an empty array if no tags are found.
There is a limit of 64 images in the batch.


```js
microsoft_cognitiveservices_training.SuggestTagsAndRegions({
  "projectId": "",
  "iterationId": "",
  "imageIds": [],
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * iterationId **required** `string`: IterationId to use for tag and region suggestion.
  * imageIds **required** `array`: Array of image ids tag suggestion are needed for. Use GetUntaggedImages API to get imageIds.
  * Training-Key **required** `string`: API key.

#### Output
* output `array`
  * items [SuggestedTagAndRegion](#suggestedtagandregion)

### TrainProject
Queues project for training.


```js
microsoft_cognitiveservices_training.TrainProject({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id.
  * trainingType `string` (values: Regular, Advanced): The type of training to use to train the project (default: Regular).
  * reservedBudgetInHours `integer`: The number of hours reserved as budget for training (if applicable).
  * forceTrain `boolean`: Whether to force train even if dataset and configuration does not change (default: false).
  * notificationEmailAddress `string`: The email address to send notification to when training finishes (default: null).
  * Training-Key **required** `string`: API key.

#### Output
* output [Iteration](#iteration)



## Definitions

### BoundingBox
* BoundingBox `object`: Bounding box that defines a region of an image.
  * height **required** `number`: Height.
  * left **required** `number`: Coordinate of the left boundary.
  * top **required** `number`: Coordinate of the top boundary.
  * width **required** `number`: Width.

### CustomVisionError
* CustomVisionError `object`
  * code **required** `string` (values: NoError, BadRequest, BadRequestExceededBatchSize, BadRequestNotSupported, BadRequestInvalidIds, BadRequestProjectName, BadRequestProjectNameNotUnique, BadRequestProjectDescription, BadRequestProjectUnknownDomain, BadRequestProjectUnknownClassification, BadRequestProjectUnsupportedDomainTypeChange, BadRequestProjectUnsupportedExportPlatform, BadRequestProjectImagePreprocessingSettings, BadRequestIterationName, BadRequestIterationNameNotUnique, BadRequestIterationDescription, BadRequestIterationIsNotTrained, BadRequestWorkspaceCannotBeModified, BadRequestWorkspaceNotDeletable, BadRequestTagName, BadRequestTagNameNotUnique, BadRequestTagDescription, BadRequestTagType, BadRequestMultipleNegativeTag, BadRequestImageTags, BadRequestImageRegions, BadRequestNegativeAndRegularTagOnSameImage, BadRequestRequiredParamIsNull, BadRequestIterationIsPublished, BadRequestInvalidPublishName, BadRequestInvalidPublishTarget, BadRequestUnpublishFailed, BadRequestIterationNotPublished, BadRequestSubscriptionApi, BadRequestExceedProjectLimit, BadRequestExceedIterationPerProjectLimit, BadRequestExceedTagPerProjectLimit, BadRequestExceedTagPerImageLimit, BadRequestExceededQuota, BadRequestCannotMigrateProjectWithName, BadRequestNotLimitedTrial, BadRequestImageBatch, BadRequestImageStream, BadRequestImageUrl, BadRequestImageFormat, BadRequestImageSizeBytes, BadRequestImageExceededCount, BadRequestTrainingNotNeeded, BadRequestTrainingNotNeededButTrainingPipelineUpdated, BadRequestTrainingValidationFailed, BadRequestClassificationTrainingValidationFailed, BadRequestMultiClassClassificationTrainingValidationFailed, BadRequestMultiLabelClassificationTrainingValidationFailed, BadRequestDetectionTrainingValidationFailed, BadRequestTrainingAlreadyInProgress, BadRequestDetectionTrainingNotAllowNegativeTag, BadRequestInvalidEmailAddress, BadRequestDomainNotSupportedForAdvancedTraining, BadRequestExportPlatformNotSupportedForAdvancedTraining, BadRequestReservedBudgetInHoursNotEnoughForAdvancedTraining, BadRequestExportValidationFailed, BadRequestExportAlreadyInProgress, BadRequestPredictionIdsMissing, BadRequestPredictionIdsExceededCount, BadRequestPredictionTagsExceededCount, BadRequestPredictionResultsExceededCount, BadRequestPredictionInvalidApplicationName, BadRequestPredictionInvalidQueryParameters, BadRequestInvalid, UnsupportedMediaType, Forbidden, ForbiddenUser, ForbiddenUserResource, ForbiddenUserSignupDisabled, ForbiddenUserSignupAllowanceExceeded, ForbiddenUserDoesNotExist, ForbiddenUserDisabled, ForbiddenUserInsufficientCapability, ForbiddenDRModeEnabled, ForbiddenInvalid, NotFound, NotFoundProject, NotFoundProjectDefaultIteration, NotFoundIteration, NotFoundIterationPerformance, NotFoundTag, NotFoundImage, NotFoundDomain, NotFoundApimSubscription, NotFoundInvalid, Conflict, ConflictInvalid, ErrorUnknown, ErrorProjectInvalidWorkspace, ErrorProjectInvalidPipelineConfiguration, ErrorProjectInvalidDomain, ErrorProjectTrainingRequestFailed, ErrorProjectExportRequestFailed, ErrorFeaturizationServiceUnavailable, ErrorFeaturizationQueueTimeout, ErrorFeaturizationInvalidFeaturizer, ErrorFeaturizationAugmentationUnavailable, ErrorFeaturizationUnrecognizedJob, ErrorFeaturizationAugmentationError, ErrorExporterInvalidPlatform, ErrorExporterInvalidFeaturizer, ErrorExporterInvalidClassifier, ErrorPredictionServiceUnavailable, ErrorPredictionModelNotFound, ErrorPredictionModelNotCached, ErrorPrediction, ErrorPredictionStorage, ErrorRegionProposal, ErrorInvalid): The error code.
  * message **required** `string`: A message explaining the error reported by the service.

### Domain
* Domain `object`
  * enabled `boolean`
  * exportable `boolean`
  * id `string`
  * name `string`
  * type `string` (values: Classification, ObjectDetection)

### Export
* Export `object`
  * downloadUri `string`: URI used to download the model.
  * flavor `string` (values: Linux, Windows, ONNX10, ONNX12, ARM, TensorFlowNormal, TensorFlowLite): Flavor of the export.
  * newerVersionAvailable `boolean`: Indicates an updated version of the export package is available and should be re-exported for the latest changes.
  * platform `string` (values: CoreML, TensorFlow, DockerFile, ONNX, VAIDK): Platform of the export.
  * status `string` (values: Exporting, Failed, Done): Status of the export.

### Image
* Image `object`: Image model to be sent as JSON.
  * tags `array`: Tags associated with this image.
    * items [ImageTag](#imagetag)
  * created `string`: Date the image was created.
  * height `integer`: Height of the image.
  * id `string`: Id of the image.
  * originalImageUri `string`: The URI to the original uploaded image.
  * regions `array`: Regions associated with this image.
    * items [ImageRegion](#imageregion)
  * resizedImageUri `string`: The URI to the (resized) image used for training.
  * thumbnailUri `string`: The URI to the thumbnail of the original image.
  * width `integer`: Width of the image.

### ImageCreateResult
* ImageCreateResult `object`
  * image [Image](#image)
  * sourceUrl `string`: Source URL of the image.
  * status `string` (values: OK, OKDuplicate, ErrorSource, ErrorImageFormat, ErrorImageSize, ErrorStorage, ErrorLimitExceed, ErrorTagLimitExceed, ErrorRegionLimitExceed, ErrorUnknown, ErrorNegativeAndRegularTagOnSameImage): Status of the image creation.

### ImageCreateSummary
* ImageCreateSummary `object`
  * images `array`: List of the image creation results.
    * items [ImageCreateResult](#imagecreateresult)
  * isBatchSuccessful `boolean`: True if all of the images in the batch were created successfully, otherwise false.

### ImageFileCreateBatch
* ImageFileCreateBatch `object`
  * images `array`
    * items [ImageFileCreateEntry](#imagefilecreateentry)
  * tagIds `array`
    * items `string`

### ImageFileCreateEntry
* ImageFileCreateEntry `object`
  * contents `string`
  * name `string`
  * regions `array`
    * items [Region](#region)
  * tagIds `array`
    * items `string`

### ImageIdCreateBatch
* ImageIdCreateBatch `object`
  * images `array`
    * items [ImageIdCreateEntry](#imageidcreateentry)
  * tagIds `array`
    * items `string`

### ImageIdCreateEntry
* ImageIdCreateEntry `object`
  * id `string`: Id of the image.
  * regions `array`
    * items [Region](#region)
  * tagIds `array`
    * items `string`

### ImagePerformance
* ImagePerformance `object`: Image performance model.
  * tags `array`
    * items [ImageTag](#imagetag)
  * created `string`
  * height `integer`
  * id `string`
  * imageUri `string`
  * predictions `array`
    * items [Prediction](#prediction)
  * regions `array`
    * items [ImageRegion](#imageregion)
  * thumbnailUri `string`
  * width `integer`

### ImagePrediction
* ImagePrediction `object`: Result of an image prediction request.
  * created `string`: Date this prediction was created.
  * id `string`: Prediction Id.
  * iteration `string`: Iteration Id.
  * predictions `array`: List of predictions.
    * items [Prediction](#prediction)
  * project `string`: Project Id.

### ImageProcessingSettings
* ImageProcessingSettings `object`: Represents image preprocessing settings used by image augmentation.
  * augmentationMethods `object`: Gets or sets enabled image transforms. The key corresponds to the transform name. If value is set to true, then correspondent transform is enabled. Otherwise this transform will not be used.

### ImageRegion
* ImageRegion `object`
  * created `string`
  * height **required** `number`: Height.
  * left **required** `number`: Coordinate of the left boundary.
  * regionId `string`
  * tagId **required** `string`: Id of the tag associated with this region.
  * tagName `string`
  * top **required** `number`: Coordinate of the top boundary.
  * width **required** `number`: Width.

### ImageRegionCreateBatch
* ImageRegionCreateBatch `object`: Batch of image region information to create.
  * regions `array`
    * items [ImageRegionCreateEntry](#imageregioncreateentry)

### ImageRegionCreateEntry
* ImageRegionCreateEntry `object`: Entry associating a region to an image.
  * height **required** `number`: Height.
  * imageId **required** `string`: Id of the image.
  * left **required** `number`: Coordinate of the left boundary.
  * tagId **required** `string`: Id of the tag associated with this region.
  * top **required** `number`: Coordinate of the top boundary.
  * width **required** `number`: Width.

### ImageRegionCreateResult
* ImageRegionCreateResult `object`
  * created `string`
  * height **required** `number`: Height.
  * imageId `string`
  * left **required** `number`: Coordinate of the left boundary.
  * regionId `string`
  * tagId **required** `string`: Id of the tag associated with this region.
  * tagName `string`
  * top **required** `number`: Coordinate of the top boundary.
  * width **required** `number`: Width.

### ImageRegionCreateSummary
* ImageRegionCreateSummary `object`
  * created `array`
    * items [ImageRegionCreateResult](#imageregioncreateresult)
  * duplicated `array`
    * items [ImageRegionCreateEntry](#imageregioncreateentry)
  * exceeded `array`
    * items [ImageRegionCreateEntry](#imageregioncreateentry)

### ImageRegionProposal
* ImageRegionProposal `object`
  * imageId `string`
  * projectId `string`
  * proposals `array`
    * items [RegionProposal](#regionproposal)

### ImageTag
* ImageTag `object`
  * created `string`
  * tagId `string`
  * tagName `string`

### ImageTagCreateBatch
* ImageTagCreateBatch `object`: Batch of image tags.
  * tags `array`: Image Tag entries to include in this batch.
    * items [ImageTagCreateEntry](#imagetagcreateentry)

### ImageTagCreateEntry
* ImageTagCreateEntry `object`: Entry associating a tag to an image.
  * imageId `string`: Id of the image.
  * tagId `string`: Id of the tag.

### ImageTagCreateSummary
* ImageTagCreateSummary `object`
  * created `array`
    * items [ImageTagCreateEntry](#imagetagcreateentry)
  * duplicated `array`
    * items [ImageTagCreateEntry](#imagetagcreateentry)
  * exceeded `array`
    * items [ImageTagCreateEntry](#imagetagcreateentry)

### ImageUrl
* ImageUrl `object`: Image url.
  * url **required** `string`: Url of the image.

### ImageUrlCreateBatch
* ImageUrlCreateBatch `object`
  * images `array`
    * items [ImageUrlCreateEntry](#imageurlcreateentry)
  * tagIds `array`
    * items `string`

### ImageUrlCreateEntry
* ImageUrlCreateEntry `object`
  * regions `array`
    * items [Region](#region)
  * tagIds `array`
    * items `string`
  * url **required** `string`: Url of the image.

### Iteration
* Iteration `object`: Iteration model to be sent over JSON.
  * classificationType `string` (values: Multiclass, Multilabel): Gets the classification type of the project.
  * created `string`: Gets the time this iteration was completed.
  * domainId `string`: Get or sets a guid of the domain the iteration has been trained on.
  * exportable `boolean`: Whether the iteration can be exported to another format for download.
  * exportableTo `array`: A set of platforms this iteration can export to.
    * items `string` (values: CoreML, TensorFlow, DockerFile, ONNX, VAIDK)
  * id `string`: Gets the id of the iteration.
  * lastModified `string`: Gets the time this iteration was last modified.
  * name **required** `string`: Gets or sets the name of the iteration.
  * originalPublishResourceId `string`: Resource Provider Id this iteration was originally published to.
  * projectId `string`: Gets the project id of the iteration.
  * publishName `string`: Name of the published model.
  * reservedBudgetInHours `integer`: Gets the reserved advanced training budget for the iteration.
  * status `string`: Gets the current iteration status.
  * trainedAt `string`: Gets the time this iteration was last modified.
  * trainingTimeInMinutes `integer`: Gets the training time for the iteration.
  * trainingType `string` (values: Regular, Advanced): Gets the training type of the iteration.

### IterationPerformance
* IterationPerformance `object`: Represents the detailed performance data for a trained iteration.
  * averagePrecision `number`: Gets the average precision when applicable.
  * perTagPerformance `array`: Gets the per-tag performance details for this iteration.
    * items [TagPerformance](#tagperformance)
  * precision `number`: Gets the precision.
  * precisionStdDeviation `number`: Gets the standard deviation for the precision.
  * recall `number`: Gets the recall.
  * recallStdDeviation `number`: Gets the standard deviation for the recall.

### Prediction
* Prediction `object`: Prediction result.
  * boundingBox [BoundingBox](#boundingbox)
  * probability `number`: Probability of the tag.
  * tagId `string`: Id of the predicted tag.
  * tagName `string`: Name of the predicted tag.

### PredictionQueryResult
* PredictionQueryResult `object`: Query result of the prediction images that were sent to your prediction endpoint.
  * results `array`: Result of an prediction request.
    * items [StoredImagePrediction](#storedimageprediction)
  * token [PredictionQueryToken](#predictionquerytoken)

### PredictionQueryTag
* PredictionQueryTag `object`
  * id `string`
  * maxThreshold `number`
  * minThreshold `number`

### PredictionQueryToken
* PredictionQueryToken `object`
  * tags `array`
    * items [PredictionQueryTag](#predictionquerytag)
  * application `string`
  * continuation `string`
  * endTime `string`
  * iterationId `string`
  * maxCount `integer`
  * orderBy `string` (values: Newest, Oldest, Suggested)
  * session `string`
  * startTime `string`

### Project
* Project `object`: Represents a project.
  * created `string`: Gets the date this project was created.
  * description **required** `string`: Gets or sets the description of the project.
  * drModeEnabled `boolean`: Gets if the Disaster Recovery (DR) mode is on, indicating the project is temporarily read-only.
  * id `string`: Gets the project id.
  * lastModified `string`: Gets the date this project was last modified.
  * name **required** `string`: Gets or sets the name of the project.
  * settings **required** [ProjectSettings](#projectsettings)
  * thumbnailUri `string`: Gets the thumbnail url representing the image.

### ProjectSettings
* ProjectSettings `object`: Represents settings associated with a project.
  * classificationType `string` (values: Multiclass, Multilabel): Gets or sets the classification type of the project.
  * detectionParameters `string`: Detection parameters in use, if any.
  * domainId `string`: Gets or sets the id of the Domain to use with this project.
  * imageProcessingSettings [ImageProcessingSettings](#imageprocessingsettings)
  * targetExportPlatforms `array`: A list of ExportPlatform that the trained model should be able to support.
    * items `string` (values: CoreML, TensorFlow, DockerFile, ONNX, VAIDK)
  * useNegativeSet `boolean`: Indicates if negative set is being used.

### Region
* Region `object`
  * height **required** `number`: Height.
  * left **required** `number`: Coordinate of the left boundary.
  * tagId **required** `string`: Id of the tag associated with this region.
  * top **required** `number`: Coordinate of the top boundary.
  * width **required** `number`: Width.

### RegionProposal
* RegionProposal `object`
  * boundingBox [BoundingBox](#boundingbox)
  * confidence `number`

### StoredImagePrediction
* StoredImagePrediction `object`: Result of an image prediction request.
  * created `string`: Date this prediction was created.
  * domain `string`: Domain used for the prediction.
  * id `string`: Prediction Id.
  * iteration `string`: Iteration Id.
  * originalImageUri `string`: The URI to the original prediction image.
  * predictions `array`: List of predictions.
    * items [Prediction](#prediction)
  * project `string`: Project Id.
  * resizedImageUri `string`: The URI to the (resized) prediction image.
  * thumbnailUri `string`: The URI to the thumbnail of the original prediction image.

### StoredSuggestedTagAndRegion
* StoredSuggestedTagAndRegion `object`: Result of a suggested tags and regions request of the untagged image.
  * created `string`: Date this prediction was created.
  * domain `string`: Domain used for the prediction.
  * height `integer`: Height of the resized image.
  * id `string`: Prediction Id.
  * iteration `string`: Iteration Id.
  * originalImageUri `string`: The URI to the original prediction image.
  * predictionUncertainty `number`: Uncertainty (entropy) of suggested tags or regions per image.
  * predictions `array`: List of predictions.
    * items [Prediction](#prediction)
  * project `string`: Project Id.
  * resizedImageUri `string`: The URI to the (resized) prediction image.
  * thumbnailUri `string`: The URI to the thumbnail of the original prediction image.
  * width `integer`: Width of the resized image.

### SuggestedTagAndRegion
* SuggestedTagAndRegion `object`: Result of a suggested tags and regions request.
  * created `string`: Date this prediction was created.
  * id `string`: Prediction Id.
  * iteration `string`: Iteration Id.
  * predictionUncertainty `number`: Uncertainty (entropy) of suggested tags or regions per image.
  * predictions `array`: List of predictions.
    * items [Prediction](#prediction)
  * project `string`: Project Id.

### SuggestedTagAndRegionQuery
* SuggestedTagAndRegionQuery `object`: The array of result images and token containing session and continuation Ids for the next query.
  * results `array`: Result of a suggested tags and regions request of the untagged image.
    * items [StoredSuggestedTagAndRegion](#storedsuggestedtagandregion)
  * token [SuggestedTagAndRegionQueryToken](#suggestedtagandregionquerytoken)

### SuggestedTagAndRegionQueryToken
* SuggestedTagAndRegionQueryToken `object`: Contains properties we need to fetch suggested tags for. For the first call, Session and continuation set to null.
  * continuation `string`: Continuation Id for database pagination. Initially null but later used to paginate.
  * maxCount `integer`: Maximum number of results you want to be returned in the response.
  * session `string`: SessionId for database query. Initially set to null but later used to paginate.
  * sortBy `string` (values: UncertaintyAscending, UncertaintyDescending): OrderBy. Ordering mechanism for your results.
  * tagIds `array`: Existing TagIds in project to filter suggested tags on.
    * items `string`
  * threshold `number`: Confidence threshold to filter suggested tags on.

### Tag
* Tag `object`: Represents a Tag.
  * description **required** `string`: Gets or sets the description of the tag.
  * id `string`: Gets the Tag ID.
  * imageCount `integer`: Gets the number of images with this tag.
  * name **required** `string`: Gets or sets the name of the tag.
  * type **required** `string` (values: Regular, Negative): Gets or sets the type of the tag.

### TagFilter
* TagFilter `object`: Model that query for counting of images whose suggested tags match given tags and their probability are greater than or equal to the given threshold.
  * tagIds `array`: Existing TagIds in project to get suggested tags count for.
    * items `string`
  * threshold `number`: Confidence threshold to filter suggested tags on.

### TagPerformance
* TagPerformance `object`: Represents performance data for a particular tag in a trained iteration.
  * averagePrecision `number`: Gets the average precision when applicable.
  * id `string`
  * name `string`
  * precision `number`: Gets the precision.
  * precisionStdDeviation `number`: Gets the standard deviation for the precision.
  * recall `number`: Gets the recall.
  * recallStdDeviation `number`: Gets the standard deviation for the recall.


