# @datafire/microsoft_cognitiveservices_training

Client library for TrainingApi

## Installation and Usage
```bash
npm install --save @datafire/microsoft_cognitiveservices_training
```
```js
let microsoft_cognitiveservices_training = require('@datafire/microsoft_cognitiveservices_training').create();

microsoft_cognitiveservices_training.GetAccountInfo({
  "Training-Key": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### GetAccountInfo
Get basic information about your account


```js
microsoft_cognitiveservices_training.GetAccountInfo({
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * Training-Key **required** `string`

#### Output
* output [Account](#account)

### GetDomains
Get a list of the available domains


```js
microsoft_cognitiveservices_training.GetDomains({
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * Training-Key **required** `string`

#### Output
* output `array`
  * items [Domain](#domain)

### GetDomain
Get information about a specific domain


```js
microsoft_cognitiveservices_training.GetDomain({
  "domainId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * domainId **required** `string`: The id of the domain to get information about
  * Training-Key **required** `string`

#### Output
* output [Domain](#domain)

### GetProjects
Get your projects


```js
microsoft_cognitiveservices_training.GetProjects({
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * Training-Key **required** `string`

#### Output
* output `array`
  * items [Project](#project)

### CreateProject
Create a project


```js
microsoft_cognitiveservices_training.CreateProject({
  "name": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Name of the project
  * description `string`: The description of the project
  * domainId `string`: The id of the domain to use for this project. Defaults to General
  * Training-Key **required** `string`

#### Output
* output [Project](#project)

### DeleteProject
Delete a specific project


```js
microsoft_cognitiveservices_training.DeleteProject({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * Training-Key **required** `string`

#### Output
*Output schema unknown*

### GetProject
Get a specific project


```js
microsoft_cognitiveservices_training.GetProject({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The id of the project to get
  * Training-Key **required** `string`

#### Output
* output [Project](#project)

### UpdateProject
Update a specific project


```js
microsoft_cognitiveservices_training.UpdateProject({
  "projectId": "",
  "updatedProject": {},
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The id of the project to update
  * updatedProject **required** [Project](#project)
  * Training-Key **required** `string`

#### Output
* output [Project](#project)

### DeleteImages
Delete images from the set of training images


```js
microsoft_cognitiveservices_training.DeleteImages({
  "projectId": "",
  "imageIds": [],
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * imageIds **required** `array`: Ids of the images to be deleted. Limted to 256 images per batch
  * Training-Key **required** `string`

#### Output
*Output schema unknown*

### CreateImagesFromData
This API accepts body content as multipart/form-data and application/octet-stream. When using multipart
multiple image files can be sent at once, with a maximum of 64 files


```js
microsoft_cognitiveservices_training.CreateImagesFromData({
  "projectId": "",
  "imageData": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * tagIds `array`: The tags ids with which to tag each image. Limited to 20
  * imageData **required** `string`
  * Training-Key **required** `string`

#### Output
* output [ImageCreateSummary](#imagecreatesummary)

### CreateImagesFromFiles
Add the provided batch of images to the set of training images


```js
microsoft_cognitiveservices_training.CreateImagesFromFiles({
  "projectId": "",
  "batch": {},
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * batch **required** [ImageFileCreateBatch](#imagefilecreatebatch)
  * Training-Key **required** `string`

#### Output
* output [ImageCreateSummary](#imagecreatesummary)

### CreateImagesFromPredictions
Add the specified predicted images to the set of training images


```js
microsoft_cognitiveservices_training.CreateImagesFromPredictions({
  "projectId": "",
  "batch": {},
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * batch **required** [ImageIdCreateBatch](#imageidcreatebatch)
  * Training-Key **required** `string`

#### Output
* output [ImageCreateSummary](#imagecreatesummary)

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
  * projectId **required** `string`: The project id
  * iterationId `string`: The iteration id. Defaults to workspace
  * tagIds `array`: An list of tags ids to filter the images. Defaults to all tagged images when null. Limited to 20
  * orderBy `string` (values: Newest, Oldest): The ordering. Defaults to newest
  * take `integer`: Maximum number of images to return. Defaults to 50, limited to 256
  * skip `integer`: Number of images to skip before beginning the image batch. Defaults to 0
  * Training-Key **required** `string`

#### Output
* output `array`
  * items [Image](#image)

### DeleteImageTags
Remove a set of tags from a set of images


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
  * projectId **required** `string`: The project id
  * imageIds **required** `array`: Image ids. Limited to 64 images
  * tagIds **required** `array`: Tags to be deleted from the specified images. Limted to 20 tags
  * Training-Key **required** `string`

#### Output
*Output schema unknown*

### PostImageTags
Associate a set of images with a set of tags


```js
microsoft_cognitiveservices_training.PostImageTags({
  "projectId": "",
  "batch": {},
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * batch **required** [ImageTagCreateBatch](#imagetagcreatebatch)
  * Training-Key **required** `string`

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
  * projectId **required** `string`: The project id
  * iterationId `string`: The iteration id. Defaults to workspace
  * orderBy `string` (values: Newest, Oldest): The ordering. Defaults to newest
  * take `integer`: Maximum number of images to return. Defaults to 50, limited to 256
  * skip `integer`: Number of images to skip before beginning the image batch. Defaults to 0
  * Training-Key **required** `string`

#### Output
* output `array`
  * items [Image](#image)

### CreateImagesFromUrls
Add the provided images urls to the set of training images


```js
microsoft_cognitiveservices_training.CreateImagesFromUrls({
  "projectId": "",
  "batch": {},
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * batch **required** [ImageUrlCreateBatch](#imageurlcreatebatch)
  * Training-Key **required** `string`

#### Output
* output [ImageCreateSummary](#imagecreatesummary)

### GetIterations
Get iterations for the project


```js
microsoft_cognitiveservices_training.GetIterations({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * Training-Key **required** `string`

#### Output
* output `array`
  * items [Iteration](#iteration)

### DeleteIteration
Delete a specific iteration of a project


```js
microsoft_cognitiveservices_training.DeleteIteration({
  "projectId": "",
  "iterationId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * iterationId **required** `string`: The iteration id
  * Training-Key **required** `string`

#### Output
*Output schema unknown*

### GetIteration
Get a specific iteration


```js
microsoft_cognitiveservices_training.GetIteration({
  "projectId": "",
  "iterationId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The id of the project the iteration belongs to
  * iterationId **required** `string`: The id of the iteration to get
  * Training-Key **required** `string`

#### Output
* output [Iteration](#iteration)

### UpdateIteration
Update a specific iteration


```js
microsoft_cognitiveservices_training.UpdateIteration({
  "projectId": "",
  "iterationId": "",
  "updatedIteration": {},
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: Project id
  * iterationId **required** `string`: Iteration id
  * updatedIteration **required** [Iteration](#iteration)
  * Training-Key **required** `string`

#### Output
* output [Iteration](#iteration)

### GetExports
Get the list of exports for a specific iteration


```js
microsoft_cognitiveservices_training.GetExports({
  "projectId": "",
  "iterationId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * iterationId **required** `string`: The iteration id
  * Training-Key **required** `string`

#### Output
* output `array`
  * items [Export](#export)

### ExportIteration
Export a trained iteration


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
  * projectId **required** `string`: The project id
  * iterationId **required** `string`: The iteration id
  * platform **required** `string`: The target platform (coreml or tensorflow)
  * Training-Key **required** `string`

#### Output
* output [Export](#export)

### GetIterationPerformance
Get detailed performance information about a trained iteration


```js
microsoft_cognitiveservices_training.GetIterationPerformance({
  "projectId": "",
  "iterationId": "",
  "threshold": 0,
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * iterationId **required** `string`: The id of the trained iteration
  * threshold **required** `number`: The 0 to 1 threshold to determine positive prediction
  * Training-Key **required** `string`

#### Output
* output [IterationPerformance](#iterationperformance)

### DeletePrediction
Delete a set of predicted images and their associated prediction results


```js
microsoft_cognitiveservices_training.DeletePrediction({
  "projectId": "",
  "ids": [],
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * ids **required** `array`: The prediction ids. Limited to 64
  * Training-Key **required** `string`

#### Output
*Output schema unknown*

### QueryPredictionResults
Get images that were sent to your prediction endpoint


```js
microsoft_cognitiveservices_training.QueryPredictionResults({
  "projectId": "",
  "query": {},
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * query **required** [PredictionQueryToken](#predictionquerytoken)
  * Training-Key **required** `string`

#### Output
* output [PredictionQuery](#predictionquery)

### QuickTestImage
Quick test an image


```js
microsoft_cognitiveservices_training.QuickTestImage({
  "projectId": "",
  "imageData": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * iterationId `string`: Optional. Specifies the id of a particular iteration to evaluate against.
  * imageData **required** `string`
  * Training-Key **required** `string`

#### Output
* output [ImagePredictionResult](#imagepredictionresult)

### QuickTestImageUrl
Quick test an image url


```js
microsoft_cognitiveservices_training.QuickTestImageUrl({
  "projectId": "",
  "imageUrl": {},
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project to evaluate against
  * imageUrl **required** [ImageUrl](#imageurl)
  * iterationId `string`: Optional. Specifies the id of a particular iteration to evaluate against.
  * Training-Key **required** `string`

#### Output
* output [ImagePredictionResult](#imagepredictionresult)

### GetTags
Get the tags for a given project and iteration


```js
microsoft_cognitiveservices_training.GetTags({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * iterationId `string`: The iteration id. Defaults to workspace
  * Training-Key **required** `string`

#### Output
* output [TagList](#taglist)

### CreateTag
Create a tag for the project


```js
microsoft_cognitiveservices_training.CreateTag({
  "projectId": "",
  "name": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * name **required** `string`: The tag name
  * description `string`: Optional description for the tag
  * Training-Key **required** `string`

#### Output
* output [Tag](#tag)

### DeleteTag
Delete a tag from the project


```js
microsoft_cognitiveservices_training.DeleteTag({
  "projectId": "",
  "tagId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * tagId **required** `string`: Id of the tag to be deleted
  * Training-Key **required** `string`

#### Output
*Output schema unknown*

### GetTag
Get information about a specific tag


```js
microsoft_cognitiveservices_training.GetTag({
  "projectId": "",
  "tagId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project this tag belongs to
  * tagId **required** `string`: The tag id
  * iterationId `string`: The iteration to retrieve this tag from. Optional, defaults to current training set
  * Training-Key **required** `string`

#### Output
* output [Tag](#tag)

### UpdateTag
Update a tag


```js
microsoft_cognitiveservices_training.UpdateTag({
  "projectId": "",
  "tagId": "",
  "updatedTag": {},
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * tagId **required** `string`: The id of the target tag
  * updatedTag **required** [Tag](#tag)
  * Training-Key **required** `string`

#### Output
* output [Tag](#tag)

### TrainProject
Queues project for training


```js
microsoft_cognitiveservices_training.TrainProject({
  "projectId": "",
  "Training-Key": ""
}, context)
```

#### Input
* input `object`
  * projectId **required** `string`: The project id
  * Training-Key **required** `string`

#### Output
* output [Iteration](#iteration)



## Definitions

### Account
* Account `object`: Represents a user account
  * Email `string`: Gets the email associated with this account
  * Keys [ApiKeys](#apikeys)
  * Quotas [AccountQuota](#accountquota)
  * UserName `string`: Gets the name of the account owner

### AccountQuota
* AccountQuota `object`: Represents a set of quotas assocated with an account
  * PerProject `array`: Gets a list of quotas that apply per-project for each project
    * items [PerProjectQuota](#perprojectquota)
  * Predictions [Quota](#quota)
  * Projects [Quota](#quota)
  * Tier `string`: Gets the tier of user

### ApiKeys
* ApiKeys `object`
  * PredictionKeys [KeyPair](#keypair)
  * TrainingKeys [KeyPair](#keypair)

### Domain
* Domain `object`
  * Exportable `boolean`
  * Id `string`
  * Name `string`

### Export
* Export `object`
  * DownloadUri `string`
  * Platform `string` (values: CoreML, TensorFlow)
  * Status `string` (values: Exporting, Failed, Done)

### Image
* Image `object`: Image model to be sent as JSON
  * Created `string`
  * Height `integer`
  * Id `string`
  * ImageUri `string`
  * Predictions `array`
    * items [PredictionTag](#predictiontag)
  * Tags `array`
    * items [ImageTag](#imagetag)
  * ThumbnailUri `string`
  * Width `integer`

### ImageCreateResult
* ImageCreateResult `object`
  * Image [Image](#image)
  * SourceUrl `string`
  * Status `string` (values: OK, OKDuplicate, ErrorSource, ErrorImageFormat, ErrorImageSize, ErrorStorage, ErrorLimitExceed, ErrorTagLimitExceed, ErrorUnknown)

### ImageCreateSummary
* ImageCreateSummary `object`
  * Images `array`
    * items [ImageCreateResult](#imagecreateresult)
  * IsBatchSuccessful `boolean`

### ImageFileCreateBatch
* ImageFileCreateBatch `object`
  * Images `array`
    * items [ImageFileCreateEntry](#imagefilecreateentry)
  * TagIds `array`
    * items `string`

### ImageFileCreateEntry
* ImageFileCreateEntry `object`
  * Contents `string`
  * Name `string`
  * TagIds `array`
    * items `string`

### ImageIdCreateBatch
* ImageIdCreateBatch `object`
  * Images `array`
    * items [ImageIdCreateEntry](#imageidcreateentry)
  * TagIds `array`
    * items `string`

### ImageIdCreateEntry
* ImageIdCreateEntry `object`
  * Id `string`
  * TagIds `array`
    * items `string`

### ImagePredictionResult
* ImagePredictionResult `object`: result of an image prediction request
  * Created `string`
  * Id `string`
  * Iteration `string`
  * Predictions `array`
    * items [ImageTagPrediction](#imagetagprediction)
  * Project `string`

### ImageTag
* ImageTag `object`
  * Created `string`
  * TagId `string`

### ImageTagCreateBatch
* ImageTagCreateBatch `object`
  * Tags `array`
    * items [ImageTagCreateEntry](#imagetagcreateentry)

### ImageTagCreateEntry
* ImageTagCreateEntry `object`
  * ImageId `string`
  * TagId `string`

### ImageTagCreateSummary
* ImageTagCreateSummary `object`
  * Created `array`
    * items [ImageTagCreateEntry](#imagetagcreateentry)
  * Duplicated `array`
    * items [ImageTagCreateEntry](#imagetagcreateentry)
  * Exceeded `array`
    * items [ImageTagCreateEntry](#imagetagcreateentry)

### ImageTagPrediction
* ImageTagPrediction `object`
  * Probability `number`
  * Tag `string`
  * TagId `string`

### ImageUrl
* ImageUrl `object`
  * Url `string`

### ImageUrlCreateBatch
* ImageUrlCreateBatch `object`
  * Images `array`
    * items [ImageUrlCreateEntry](#imageurlcreateentry)
  * TagIds `array`
    * items `string`

### ImageUrlCreateEntry
* ImageUrlCreateEntry `object`
  * TagIds `array`
    * items `string`
  * Url `string`

### Iteration
* Iteration `object`: Iteration model to be sent over JSON
  * Created `string`: Gets the time this iteration was completed
  * DomainId `string`: Get or sets a guid of the domain the iteration has been trained on
  * Exportable `boolean`: Whether the iteration can be exported to another format for download
  * Id `string`: Gets the id of the iteration
  * IsDefault `boolean`: Gets or sets a value indicating whether the iteration is the default iteration for the project
  * LastModified `string`: Gets the time this iteration was last modified
  * Name `string`: Gets or sets the name of the iteration
  * ProjectId `string`: Gets the project id of the iteration
  * Status `string`: Gets the current iteration status
  * TrainedAt `string`: Gets the time this iteration was last modified

### IterationPerformance
* IterationPerformance `object`: Represents the detailed performance data for a trained iteration
  * PerTagPerformance `array`: Gets the per-tag performance details for this iteration
    * items [TagPerformance](#tagperformance)
  * Precision `number`: Gets the precision
  * PrecisionStdDeviation `number`: Gets the standard deviation for the precision
  * Recall `number`: Gets the recall
  * RecallStdDeviation `number`: Gets the standard deviation for the recall

### KeyPair
* KeyPair `object`
  * PrimaryKey `string`
  * SecondaryKey `string`

### PerProjectQuota
* PerProjectQuota `object`: Represents a set of quotas for a given project
  * Images [Quota](#quota)
  * Iterations [Quota](#quota)
  * ProjectId `string`: Gets the project id of the project this quota applies to
  * Tags [Quota](#quota)

### Prediction
* Prediction `object`: result of an image classification request
  * Created `string`
  * Id `string`
  * ImageUri `string`
  * Iteration `string`
  * Predictions `array`
    * items [PredictionTag](#predictiontag)
  * Project `string`
  * ThumbnailUri `string`

### PredictionQuery
* PredictionQuery `object`
  * Results `array`
    * items [Prediction](#prediction)
  * Token [PredictionQueryToken](#predictionquerytoken)

### PredictionQueryTag
* PredictionQueryTag `object`
  * Id `string`
  * MaxThreshold `number`
  * MinThreshold `number`

### PredictionQueryToken
* PredictionQueryToken `object`
  * Application `string`
  * Continuation `string`
  * EndTime `string`
  * IterationId `string`
  * MaxCount `integer`
  * OrderBy `string` (values: Newest, Oldest, Suggested)
  * Session `string`
  * StartTime `string`
  * Tags `array`
    * items [PredictionQueryTag](#predictionquerytag)

### PredictionTag
* PredictionTag `object`
  * Probability `number`
  * Tag `string`
  * TagId `string`

### Project
* Project `object`: Represents a project
  * Created `string`: Gets the date this project was created
  * CurrentIterationId `string`: Gets the current iteration id
  * Description `string`: Gets or sets the description of the project
  * Id `string`: Gets the project id
  * LastModified `string`: Gets the date this project was last modifed
  * Name `string`: Gets or sets the name of the project
  * Settings [ProjectSettings](#projectsettings)
  * ThumbnailUri `string`: Gets the thumbnail url representing the image

### ProjectSettings
* ProjectSettings `object`: Represents settings associated with a project
  * DomainId `string`: Gets or sets the id of the Domain to use with this project

### Quota
* Quota `object`: Represents a quota
  * TimeUntilReset `string`: Gets the time remaining until the quota resets. Null if this quota does not reset.
  * Total `integer`: The total allowable amount in the quota
  * Used `integer`: The amount of quota that has currently been used

### Tag
* Tag `object`: Represents a Tag
  * Description `string`: Gets or sets the description of the tag
  * Id `string`: Gets the Tag ID
  * ImageCount `integer`: Gets the number of images with this tag
  * Name `string`: Gets or sets the name of the tag

### TagList
* TagList `object`
  * Tags `array`
    * items [Tag](#tag)
  * TotalTaggedImages `integer`
  * TotalUntaggedImages `integer`

### TagPerformance
* TagPerformance `object`: Represents performance data for a particular tag in a trained iteration
  * Id `string`
  * Name `string`
  * Precision `number`: Gets the precision
  * PrecisionStdDeviation `number`: Gets the standard deviation for the precision
  * Recall `number`: Gets the recall
  * RecallStdDeviation `number`: Gets the standard deviation for the recall


