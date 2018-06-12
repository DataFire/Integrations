# @datafire/azure_cognitiveservices_contentmoderator

Client library for Content Moderator Client

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_contentmoderator
```
```js
let azure_cognitiveservices_contentmoderator = require('@datafire/azure_cognitiveservices_contentmoderator').create({
  apim_key: ""
});

azure_cognitiveservices_contentmoderator.ImageModeration_Match({}).then(data => {
  console.log(data);
});
```

## Description

You use the API to scan your content as it is generated. Content Moderator then processes your content and sends the results along with relevant information either back to your systems or to the built-in review tool. You can use this information to take decisions e.g. take it down, send to human judge, etc.

When using the API, images need to have a minimum of 128 pixels and a maximum file size of 4MB. 
Text can be at most 1024 characters long. 
If the content passed to the text API or the image API exceeds the size limits, the API will return an error code that informs about the issue.

This API is currently available in:

* West US - westus.api.cognitive.microsoft.com
* East US 2 - eastus2.api.cognitive.microsoft.com
* West Central US - westcentralus.api.cognitive.microsoft.com
* West Europe - westeurope.api.cognitive.microsoft.com
* Southeast Asia - southeastasia.api.cognitive.microsoft.com .

## Actions

### ListManagementImageLists_GetAllImageLists
Gets all the Image Lists.


```js
azure_cognitiveservices_contentmoderator.ListManagementImageLists_GetAllImageLists(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ImageLists](#imagelists)

### ListManagementImageLists_Create
Creates an image list.


```js
azure_cognitiveservices_contentmoderator.ListManagementImageLists_Create({
  "Content-Type": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: The content type.
  * body **required** `object`
    * Description `string`: Description of the list.
    * Metadata `object`: Metadata of the list.
      * Key One `string`: Optional key value pair to describe your list.
      * Key Two `string`: Optional key value pair to describe your list.
    * Name `string`: Name of the list.

#### Output
* output [ImageList](#imagelist)

### ListManagementImageLists_Delete
Deletes image list with the list Id equal to list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementImageLists_Delete({
  "listId": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.

#### Output
* output `string`

### ListManagementImageLists_GetDetails
Returns the details of the image list with list Id equal to list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementImageLists_GetDetails({
  "listId": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.

#### Output
* output [ImageList](#imagelist)

### ListManagementImageLists_Update
Updates an image list with list Id equal to list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementImageLists_Update({
  "listId": "",
  "Content-Type": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.
  * Content-Type **required** `string`: The content type.
  * body **required** `object`
    * Description `string`: Description of the list.
    * Metadata `object`: Metadata of the list.
      * Key One `string`: Optional key value pair to describe your list.
      * Key Two `string`: Optional key value pair to describe your list.
    * Name `string`: Name of the list.

#### Output
* output [ImageList](#imagelist)

### ListManagementImageLists_RefreshIndex
Refreshes the index of the list with list Id equal to list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementImageLists_RefreshIndex({
  "listId": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.

#### Output
* output [RefreshIndex](#refreshindex)

### ListManagementImage_DeleteAllImages
Deletes all images from the list with list Id equal to list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementImage_DeleteAllImages({
  "listId": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.

#### Output
* output `string`

### ListManagementImage_GetAllImageIds
Gets all image Ids from the list with list Id equal to list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementImage_GetAllImageIds({
  "listId": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.

#### Output
* output [ImageIds](#imageids)

### ListManagementImage_AddImage
Add an image to the list with list Id equal to list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementImage_AddImage({
  "listId": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.
  * tag `integer`: Tag for the image.
  * label `string`: The image label.

#### Output
* output [Image](#image)

### ListManagementImage_DeleteImage
Deletes an image from the list with list Id and image Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementImage_DeleteImage({
  "listId": "",
  "ImageId": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.
  * ImageId **required** `string`: Id of the image.

#### Output
* output `string`

### ListManagementTermLists_GetAllTermLists
gets all the Term Lists


```js
azure_cognitiveservices_contentmoderator.ListManagementTermLists_GetAllTermLists(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [TermLists](#termlists)

### ListManagementTermLists_Create
Creates a Term List


```js
azure_cognitiveservices_contentmoderator.ListManagementTermLists_Create({
  "Content-Type": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: The content type.
  * body **required** `object`
    * Description `string`: Description of the list.
    * Metadata `object`: Metadata of the list.
      * Key One `string`: Optional key value pair to describe your list.
      * Key Two `string`: Optional key value pair to describe your list.
    * Name `string`: Name of the list.

#### Output
* output [TermList](#termlist)

### ListManagementTermLists_Delete
Deletes term list with the list Id equal to list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementTermLists_Delete({
  "listId": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.

#### Output
* output `string`

### ListManagementTermLists_GetDetails
Returns list Id details of the term list with list Id equal to list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementTermLists_GetDetails({
  "listId": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.

#### Output
* output [TermList](#termlist)

### ListManagementTermLists_Update
Updates an Term List.


```js
azure_cognitiveservices_contentmoderator.ListManagementTermLists_Update({
  "listId": "",
  "Content-Type": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.
  * Content-Type **required** `string`: The content type.
  * body **required** `object`
    * Description `string`: Description of the list.
    * Metadata `object`: Metadata of the list.
      * Key One `string`: Optional key value pair to describe your list.
      * Key Two `string`: Optional key value pair to describe your list.
    * Name `string`: Name of the list.

#### Output
* output [TermList](#termlist)

### ListManagementTermLists_RefreshIndex
Refreshes the index of the list with list Id equal to list ID passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementTermLists_RefreshIndex({
  "listId": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.
  * language **required** `string`: Language of the terms.

#### Output
* output [RefreshIndex](#refreshindex)

### ListManagementTerm_DeleteAllTerms
Deletes all terms from the list with list Id equal to the list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementTerm_DeleteAllTerms({
  "listId": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.
  * language **required** `string`: Language of the terms.

#### Output
* output `string`

### ListManagementTerm_GetAllTerms
Gets all terms from the list with list Id equal to the list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementTerm_GetAllTerms({
  "listId": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.
  * language **required** `string`: Language of the terms.
  * offset `integer`: The pagination start index.
  * limit `integer`: The max limit.

#### Output
* output [Terms](#terms)

### ListManagementTerm_DeleteTerm
Deletes a term from the list with list Id equal to the list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementTerm_DeleteTerm({
  "listId": "",
  "term": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.
  * term **required** `string`: Term to be deleted
  * language **required** `string`: Language of the terms.

#### Output
* output `string`

### ListManagementTerm_AddTerm
Add a term to the term list with list Id equal to list Id passed.


```js
azure_cognitiveservices_contentmoderator.ListManagementTerm_AddTerm({
  "listId": "",
  "term": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * listId **required** `string`: List Id of the image list.
  * term **required** `string`: Term to be deleted
  * language **required** `string`: Language of the terms.

#### Output
*Output schema unknown*

### ImageModeration_Evaluate
Returns probabilities of the image containing racy or adult content.


```js
azure_cognitiveservices_contentmoderator.ImageModeration_Evaluate({}, context)
```

#### Input
* input `object`
  * CacheImage `boolean`: Whether to retain the submitted image for future use; defaults to false if omitted.

#### Output
* output [Evaluate](#evaluate)

### ImageModeration_FindFaces
Returns the list of faces found.


```js
azure_cognitiveservices_contentmoderator.ImageModeration_FindFaces({}, context)
```

#### Input
* input `object`
  * CacheImage `boolean`: Whether to retain the submitted image for future use; defaults to false if omitted.

#### Output
* output [FoundFaces](#foundfaces)

### ImageModeration_Match
Fuzzily match an image against one of your custom Image Lists. You can create and manage your custom image lists using <a href="/docs/services/578ff44d2703741568569ab9/operations/578ff7b12703741568569abe">this</a> API. 

Returns ID and tags of matching image.<br/>
<br/>
Note: Refresh Index must be run on the corresponding Image List before additions and removals are reflected in the response.


```js
azure_cognitiveservices_contentmoderator.ImageModeration_Match({}, context)
```

#### Input
* input `object`
  * listId `string`: The list Id.
  * CacheImage `boolean`: Whether to retain the submitted image for future use; defaults to false if omitted.

#### Output
* output [MatchResponse](#matchresponse)

### ImageModeration_OCR
Returns any text found in the image for the language specified. If no language is specified in input then the detection defaults to English.


```js
azure_cognitiveservices_contentmoderator.ImageModeration_OCR({
  "language": ""
}, context)
```

#### Input
* input `object`
  * language **required** `string`: Language of the terms.
  * CacheImage `boolean`: Whether to retain the submitted image for future use; defaults to false if omitted.
  * enhanced `boolean`: When set to True, the image goes through additional processing to come with additional candidates.

#### Output
* output [OCR](#ocr)

### TextModeration_DetectLanguage
This operation will detect the language of given input content. Returns the <a href="http://www-01.sil.org/iso639-3/codes.asp">ISO 639-3 code</a> for the predominant language comprising the submitted text. Over 110 languages supported.


```js
azure_cognitiveservices_contentmoderator.TextModeration_DetectLanguage({
  "Content-Type": "",
  "Text Content": {}
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string` (values: text/plain, text/html, text/xml, text/markdown): The content type.
  * Text Content **required** `object`

#### Output
* output [DetectedLanguage](#detectedlanguage)

### TextModeration_ScreenText
Detects profanity in more than 100 languages and match against custom and shared blacklists.


```js
azure_cognitiveservices_contentmoderator.TextModeration_ScreenText({
  "Content-Type": "",
  "Text Content": {}
}, context)
```

#### Input
* input `object`
  * language `string`: Language of the text.
  * autocorrect `boolean`: Autocorrect text.
  * PII `boolean`: Detect personal identifiable information.
  * listId `string`: The list Id.
  * classify `boolean`: Classify input.
  * Content-Type **required** `string` (values: text/plain, text/html, text/xml, text/markdown): The content type.
  * Text Content **required** `object`

#### Output
* output [Screen](#screen)

### Reviews_CreateJob
A job Id will be returned for the content posted on this endpoint. 

Once the content is evaluated against the Workflow provided the review will be created or ignored based on the workflow expression.

<h3>CallBack Schemas </h3>

<p>
<h4>Job Completion CallBack Sample</h4><br/>

{<br/>
  "JobId": "<Job Id>,<br/>
  "ReviewId": "<Review Id, if the Job resulted in a Review to be created>",<br/>
  "WorkFlowId": "default",<br/>
  "Status": "<This will be one of Complete, InProgress, Error>",<br/>
  "ContentType": "Image",<br/>
  "ContentId": "<This is the ContentId that was specified on input>",<br/>
  "CallBackType": "Job",<br/>
  "Metadata": {<br/>
    "adultscore": "0.xxx",<br/>
    "a": "False",<br/>
    "racyscore": "0.xxx",<br/>
    "r": "True"<br/>
  }<br/>
}<br/>

</p>
<p>
<h4>Review Completion CallBack Sample</h4><br/>

{
  "ReviewId": "<Review Id>",<br/>
  "ModifiedOn": "2016-10-11T22:36:32.9934851Z",<br/>
  "ModifiedBy": "<Name of the Reviewer>",<br/>
  "CallBackType": "Review",<br/>
  "ContentId": "<The ContentId that was specified input>",<br/>
  "Metadata": {<br/>
    "adultscore": "0.xxx",
    "a": "False",<br/>
    "racyscore": "0.xxx",<br/>
    "r": "True"<br/>
  },<br/>
  "ReviewerResultTags": {<br/>
    "a": "False",<br/>
    "r": "True"<br/>
  }<br/>
}<br/>

</p>.


```js
azure_cognitiveservices_contentmoderator.Reviews_CreateJob({
  "teamName": "",
  "ContentType": "",
  "ContentId": "",
  "WorkflowName": "",
  "Content-Type": "",
  "Content": {
    "ContentValue": ""
  }
}, context)
```

#### Input
* input `object`
  * teamName **required** `string`: Your team name.
  * ContentType **required** `string` (values: Image, Text, Video): Image, Text or Video.
  * ContentId **required** `string`: Id/Name to identify the content submitted.
  * WorkflowName **required** `string`: Workflow Name that you want to invoke.
  * CallBackEndpoint `string`: Callback endpoint for posting the create job result.
  * Content-Type **required** `string` (values: application/json, image/jpeg): The content type.
  * Content **required** `object`
    * ContentValue **required** `string`: Content to evaluate for a job.

#### Output
* output [JobId](#jobid)

### Reviews_GetJobDetails
Get the Job Details for a Job Id.


```js
azure_cognitiveservices_contentmoderator.Reviews_GetJobDetails({
  "teamName": "",
  "JobId": ""
}, context)
```

#### Input
* input `object`
  * teamName **required** `string`: Your Team Name.
  * JobId **required** `string`: Id of the job.

#### Output
* output [Job](#job)

### Reviews_CreateReviews
The reviews created would show up for Reviewers on your team. As Reviewers complete reviewing, results of the Review would be POSTED (i.e. HTTP POST) on the specified CallBackEndpoint.

<h3>CallBack Schemas </h3>
<h4>Review Completion CallBack Sample</h4>
<p>
{<br/>
  "ReviewId": "<Review Id>",<br/>
  "ModifiedOn": "2016-10-11T22:36:32.9934851Z",<br/>
  "ModifiedBy": "<Name of the Reviewer>",<br/>
  "CallBackType": "Review",<br/>
  "ContentId": "<The ContentId that was specified input>",<br/>
  "Metadata": {<br/>
    "adultscore": "0.xxx",<br/>
    "a": "False",<br/>
    "racyscore": "0.xxx",<br/>
    "r": "True"<br/>
  },<br/>
  "ReviewerResultTags": {<br/>
    "a": "False",<br/>
    "r": "True"<br/>
  }<br/>
}<br/>

</p>.


```js
azure_cognitiveservices_contentmoderator.Reviews_CreateReviews({
  "UrlContentType": "",
  "teamName": "",
  "createReviewBody": []
}, context)
```

#### Input
* input `object`
  * UrlContentType **required** `string`: The content type.
  * teamName **required** `string`: Your team name.
  * subTeam `string`: SubTeam of your team, you want to assign the created review to.
  * createReviewBody **required** `array`: Schema of the body.
    * items `object`: Schema items of the body.
      * CallbackEndpoint `string`: Optional CallbackEndpoint.
      * Content **required** `string`: Content to review.
      * ContentId **required** `string`: Content Identifier.
      * Metadata `array`: Optional metadata details.
        * items `object`
          * Key **required** `string`: Your key parameter.
          * Value **required** `string`: Your value parameter.
      * Type **required** `string` (values: Image, Text): Type of the content.

#### Output
* output [ReviewList](#reviewlist)

### Reviews_GetReview
Returns review details for the review Id passed.


```js
azure_cognitiveservices_contentmoderator.Reviews_GetReview({
  "teamName": "",
  "reviewId": ""
}, context)
```

#### Input
* input `object`
  * teamName **required** `string`: Your Team Name.
  * reviewId **required** `string`: Id of the review.

#### Output
* output [Review](#review)

### Reviews_GetVideoFrames
The reviews created would show up for Reviewers on your team. As Reviewers complete reviewing, results of the Review would be POSTED (i.e. HTTP POST) on the specified CallBackEndpoint.

<h3>CallBack Schemas </h3>
<h4>Review Completion CallBack Sample</h4>
<p>
{<br/>
  "ReviewId": "<Review Id>",<br/>
  "ModifiedOn": "2016-10-11T22:36:32.9934851Z",<br/>
  "ModifiedBy": "<Name of the Reviewer>",<br/>
  "CallBackType": "Review",<br/>
  "ContentId": "<The ContentId that was specified input>",<br/>
  "Metadata": {<br/>
    "adultscore": "0.xxx",<br/>
    "a": "False",<br/>
    "racyscore": "0.xxx",<br/>
    "r": "True"<br/>
  },<br/>
  "ReviewerResultTags": {<br/>
    "a": "False",<br/>
    "r": "True"<br/>
  }<br/>
}<br/>

</p>.


```js
azure_cognitiveservices_contentmoderator.Reviews_GetVideoFrames({
  "teamName": "",
  "reviewId": ""
}, context)
```

#### Input
* input `object`
  * teamName **required** `string`: Your team name.
  * reviewId **required** `string`: Id of the review.
  * startSeed `integer`: Time stamp of the frame from where you want to start fetching the frames.
  * noOfRecords `integer`: Number of frames to fetch.
  * filter `string`: Get frames filtered by tags.

#### Output
* output [Frames](#frames)

### Reviews_AddVideoFrame
The reviews created would show up for Reviewers on your team. As Reviewers complete reviewing, results of the Review would be POSTED (i.e. HTTP POST) on the specified CallBackEndpoint.

<h3>CallBack Schemas </h3>
<h4>Review Completion CallBack Sample</h4>
<p>
{<br/>
  "ReviewId": "<Review Id>",<br/>
  "ModifiedOn": "2016-10-11T22:36:32.9934851Z",<br/>
  "ModifiedBy": "<Name of the Reviewer>",<br/>
  "CallBackType": "Review",<br/>
  "ContentId": "<The ContentId that was specified input>",<br/>
  "Metadata": {<br/>
    "adultscore": "0.xxx",<br/>
    "a": "False",<br/>
    "racyscore": "0.xxx",<br/>
    "r": "True"<br/>
  },<br/>
  "ReviewerResultTags": {<br/>
    "a": "False",<br/>
    "r": "True"<br/>
  }<br/>
}<br/>

</p>.


```js
azure_cognitiveservices_contentmoderator.Reviews_AddVideoFrame({
  "teamName": "",
  "reviewId": ""
}, context)
```

#### Input
* input `object`
  * teamName **required** `string`: Your team name.
  * reviewId **required** `string`: Id of the review.
  * timescale `integer`: Timescale of the video you are adding frames to.

#### Output
*Output schema unknown*

### Reviews_PublishVideoReview
Publish video review to make it available for review.


```js
azure_cognitiveservices_contentmoderator.Reviews_PublishVideoReview({
  "teamName": "",
  "reviewId": ""
}, context)
```

#### Input
* input `object`
  * teamName **required** `string`: Your team name.
  * reviewId **required** `string`: Id of the review.

#### Output
*Output schema unknown*

### Reviews_AddVideoTranscript
This API adds a transcript file (text version of all the words spoken in a video) to a video review. The file should be a valid WebVTT format.


```js
azure_cognitiveservices_contentmoderator.Reviews_AddVideoTranscript({
  "teamName": "",
  "reviewId": "",
  "Content-Type": "",
  "VTT file": {}
}, context)
```

#### Input
* input `object`
  * teamName **required** `string`: Your team name.
  * reviewId **required** `string`: Id of the review.
  * Content-Type **required** `string` (values: text/plain): The content type.
  * VTT file **required** `object`

#### Output
*Output schema unknown*

### Reviews_AddVideoTranscriptModerationResult
This API adds a transcript screen text result file for a video review. Transcript screen text result file is a result of Screen Text API . In order to generate transcript screen text result file , a transcript file has to be screened for profanity using Screen Text API.


```js
azure_cognitiveservices_contentmoderator.Reviews_AddVideoTranscriptModerationResult({
  "Content-Type": "",
  "teamName": "",
  "reviewId": "",
  "transcriptModerationBody": []
}, context)
```

#### Input
* input `object`
  * Content-Type **required** `string`: The content type.
  * teamName **required** `string`: Your team name.
  * reviewId **required** `string`: Id of the review.
  * transcriptModerationBody **required** `array`: Schema of the body.
    * items `object`: Schema items of the body.
      * Terms **required** `array`: Optional metadata details.
        * items `object`
          * Index **required** `integer`: Index of the word
          * Term **required** `string`: Detected word.
      * Timestamp **required** `string`: Timestamp of the image.

#### Output
*Output schema unknown*



## Definitions

### APIError
* APIError `object`: Error information returned by the API
  * Error [Error](#error)

### Address
* Address `object`: Address details.
  * Index `integer`: Index(Location) of the Address in the input text content.
  * Text `string`: Detected Address.

### Candidate
* Candidate `object`: OCR candidate text.
  * Confidence `number`: The confidence level.
  * Text `string`: The text found.

### Classification
* Classification `object`: The classification details of the text.
  * Category1 `object`: The category1 score details of the text. <a href="https://aka.ms/textClassifyCategories">Click here</a> for more details on category classification.
    * Score `number`: The category1 score.
  * Category2 `object`: The category2 score details of the text. <a href="https://aka.ms/textClassifyCategories">Click here</a> for more details on category classification.
    * Score `number`: The category2 score.
  * Category3 `object`: The category3 score details of the text. <a href="https://aka.ms/textClassifyCategories">Click here</a> for more details on category classification.
    * Score `number`: The category3 score.
  * ReviewRecommended `boolean`: The review recommended flag.

### DetectedLanguage
* DetectedLanguage `object`: Detect language result.
  * DetectedLanguage `string`: The detected language.
  * Status [Status](#status)
  * TrackingId `string`: The tracking id.

### DetectedTerms
* DetectedTerms `object`: Detected Terms details.
  * Index `integer`: Index(Location) of the detected profanity term in the input text content.
  * ListId `integer`: Matched Terms list Id.
  * OriginalIndex `integer`: Original Index(Location) of the detected profanity term in the input text content.
  * Term `string`: Detected profanity term.

### Email
* Email `object`: Email Address details.
  * Detected `string`: Detected Email Address from the input text content.
  * Index `integer`: Index(Location) of the Email address in the input text content.
  * SubType `string`: Subtype of the detected Email Address.
  * Text `string`: Email Address in the input text content.

### Error
* Error `object`: Error body.
  * Code `string`
  * Message `string`

### Evaluate
* Evaluate `object`: Evaluate response object.
  * AdultClassificationScore `number`: The adult classification score.
  * AdvancedInfo `array`: The advanced info.
    * items [KeyValuePair](#keyvaluepair)
  * CacheID `string`: The cache id.
  * IsImageAdultClassified `boolean`: Indicates if an image is classified as adult.
  * IsImageRacyClassified `boolean`: Indicates if the image is classified as racy.
  * RacyClassificationScore `number`: The racy classication score.
  * Result `boolean`: Evaluate result.
  * Status [Status](#status)
  * TrackingId `string`: The tracking id.

### Face
* Face `object`: Coordinates to the found face.
  * Bottom `integer`: The bottom coordinate.
  * Left `integer`: The left coordinate.
  * Right `integer`: The right coordinate.
  * Top `integer`: The top coordinate.

### FoundFaces
* FoundFaces `object`: Request object the contains found faces.
  * AdvancedInfo `array`: The advanced info.
    * items [KeyValuePair](#keyvaluepair)
  * CacheId `string`: The cache id.
  * Count `integer`: Number of faces found.
  * Faces `array`: The list of faces.
    * items [Face](#face)
  * Result `boolean`: True if result was found.
  * Status [Status](#status)
  * TrackingId `string`: The tracking id.

### Frame
* Frame `object`: Video frame property details.
  * FrameImage `string`: Frame image.
  * Metadata `array`: Array of KeyValue.
    * items [KeyValuePair](#keyvaluepair)
  * ReviewerResultTags `array`: Reviewer result tags.
    * items [Tag](#tag)
  * Timestamp `string`: Timestamp of the frame.

### Frames
* Frames `object`: The response for a Get Frames request.
  * ReviewId `string`: Id of the review.
  * VideoFrames `array`
    * items [Frame](#frame)

### IPA
* IPA `object`: IP Address details.
  * Index `integer`: Index(Location) of the IP Address in the input text content.
  * SubType `string`: Subtype of the detected IP Address.
  * Text `string`: Detected IP Address.

### Image
* Image `object`: Image Properties.
  * AdditionalInfo `array`: Advanced info list.
    * items `object`
      * Key `string`: Key parameter.
      * Value `string`: Value parameter.
  * ContentId `string`: Content Id.
  * Status [Status](#status)
  * TrackingId `string`: Tracking Id.

### ImageIds
* ImageIds `object`: Image Id properties.
  * ContentIds `array`: Id of the contents.
    * items `integer`
  * ContentSource `string`: Source of the content.
  * Status [Status](#status)
  * TrackingId `string`: Tracking Id.

### ImageList
* ImageList `object`: Image List Properties.
  * Description `string`: Description for image list.
  * Id `integer`: Image List Id.
  * Metadata `object`: Image List Metadata.
    * Key One `string`: Optional Key value pair to describe your list.
    * Key Two `string`: Optional Key value pair to describe your list.
  * Name `string`: Image List Name.

### ImageLists
* ImageLists `array`
  * items [ImageList](#imagelist)

### Job
* Job `object`: The Job object.
  * CallBackEndpoint `string`: The callback endpoint.
  * Id `string`: The job id.
  * JobExecutionReport `array`: Job execution report- Array of KeyValue pairs object.
    * items [JobExecutionReportDetails](#jobexecutionreportdetails)
  * ResultMetaData `array`: Array of KeyValue pairs.
    * items [KeyValuePair](#keyvaluepair)
  * ReviewId `string`: Review Id if one is created.
  * Status `string`: The status string (<Pending, Failed, Completed>).
  * TeamName `string`: The team name associated with the job.
  * Type `string`: Type of the content.
  * WorkflowId `string`: The Id of the workflow.

### JobExecutionReportDetails
* JobExecutionReportDetails `object`: Job Execution Report Values.
  * Msg `string`: Message details.
  * Ts `string`: Time details.

### JobId
* JobId `object`
  * JobId `string`: Id of the created job.

### JobListResult
* JobListResult `object`: The list of job ids.
  * Value `array`: The job id.
    * items `string`

### KeyValuePair
* KeyValuePair `object`: The key value pair object properties.
  * Key `string`: The key parameter.
  * Value `string`: The value parameter.

### Match
* Match `object`: The match details.
  * Label `string`: The label.
  * MatchId `integer`: The match id.
  * Score `number`: Confidence score of the image match.
  * Source `string`: The source.
  * Tags `array`: The tags for match details.
    * items `integer`

### MatchResponse
* MatchResponse `object`: The response for a Match request.
  * CacheID `string`: The cache id.
  * IsMatch `boolean`: Indicates if there is a match.
  * Matches `array`: The match details.
    * items [Match](#match)
  * Status [Status](#status)
  * TrackingId `string`: The tracking id.

### OCR
* OCR `object`: Contains the text found in image for the language specified.
  * CacheId `string`: The cache id.
  * Candidates `array`: The list of candidate text.
    * items [Candidate](#candidate)
  * Language `string`: The ISO 639-3 code.
  * Metadata `array`: Array of KeyValue.
    * items [KeyValuePair](#keyvaluepair)
  * Status [Status](#status)
  * Text `string`: The found text.
  * TrackingId `string`: The tracking id.

### PII
* PII `object`: Personal Identifier Information details.
  * Address `array`
    * items [Address](#address)
  * Email `array`
    * items [Email](#email)
  * IPA `array`
    * items [IPA](#ipa)
  * Phone `array`
    * items [Phone](#phone)
  * SSN `array`
    * items [SSN](#ssn)

### Phone
* Phone `object`: Phone Property details.
  * CountryCode `string`: CountryCode of the detected Phone number.
  * Index `integer`: Index(Location) of the Phone number in the input text content.
  * Text `string`: Detected Phone number.

### RefreshIndex
* RefreshIndex `object`: Refresh Index Response.
  * AdvancedInfo `array`: Advanced info list.
    * items `object`
      * Key One `string`: Key parameter to describe advanced info.
      * Key Two `string`: Key parameter to describe advanced info.
  * ContentSourceId `string`: Content source Id.
  * IsUpdateSuccess `boolean`: Update success status.
  * Status [Status](#status)
  * TrackingId `string`: Tracking Id.

### Review
* Review `object`: The Review object.
  * CallbackEndpoint `string`: The callback endpoint.
  * Content `string`: The content value.
  * ContentId `string`: Id of the content.
  * CreatedBy `string`: The reviewer name.
  * Metadata `array`: Array of KeyValue.
    * items [KeyValuePair](#keyvaluepair)
  * ReviewId `string`: Id of the review.
  * ReviewerResultTags `array`: Array of KeyValue with Reviewer set Tags.
    * items [KeyValuePair](#keyvaluepair)
  * Status `string`: The status string (<Pending, Complete>).
  * SubTeam `string`: Name of the subteam.
  * Type `string`: The type of content.

### ReviewList
* ReviewList `array`: The list of review ids.
  * items `string`

### SSN
* SSN `object`: Detected SSN details.
  * Index `integer`: Index(Location) of the SSN in the input text content.
  * Text `string`: Detected SSN in the input text content.

### Screen
* Screen `object`: The response for a Screen text request.
  * AutoCorrectedText `string`: The autocorrected text
  * Classification [Classification](#classification)
  * Language `string`: Language of the input text content.
  * Misrepresentation `array`: The misrepresentation text.
    * items `string`
  * NormalizedText `string`: The normalized text.
  * OriginalText `string`: The original text.
  * PII [PII](#pii)
  * Status [Status](#status)
  * Terms `array`
    * items [DetectedTerms](#detectedterms)
  * TrackingId `string`: Unique Content Moderator transaction Id.

### Status
* Status `object`: Status properties.
  * Code `integer`: Status code.
  * Description `string`: Status description.
  * Exception `string`: Exception status.

### Tag
* Tag `object`: Tag details.
  * Key `string`: The key parameter.
  * Value `string`: The value parameter.

### TermList
* TermList `object`: Term List  Properties.
  * Description `string`: Description for term list.
  * Id `integer`: Term list Id.
  * Metadata `object`: Term list metadata.
    * Key One `string`: Optional Key value pair to describe your list.
    * Key Two `string`: Optional Key value pair to describe your list.
  * Name `string`: Term list name.

### TermLists
* TermLists `array`
  * items [TermList](#termlist)

### Terms
* Terms `object`: Terms properties.
  * Data [TermsData](#termsdata)
  * Paging `object`: Paging details.
    * Limit `integer`: Limit details.
    * Offset `integer`: Offset details.
    * Returned `integer`: Returned text details.
    * Total `integer`: Total details.

### TermsData
* TermsData `object`: All term Id response properties.
  * Language `string`: Language of the terms.
  * Status [Status](#status)
  * Terms `array`: List of terms.
    * items [TermsInList](#termsinlist)
  * TrackingId `string`: Tracking Id.

### TermsInList
* TermsInList `object`: Terms in list Id passed.
  * Term `string`: Added term details.


