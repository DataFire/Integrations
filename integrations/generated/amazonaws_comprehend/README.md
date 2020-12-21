# @datafire/amazonaws_comprehend

Client library for Amazon Comprehend

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_comprehend
```
```js
let amazonaws_comprehend = require('@datafire/amazonaws_comprehend').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Amazon Comprehend is an AWS service for gaining insight into the content of documents. Use these actions to determine the topics contained in your documents, the topics they discuss, the predominant sentiment expressed in them, the predominant language used, and more.

## Actions

### BatchDetectDominantLanguage



```js
amazonaws_comprehend.BatchDetectDominantLanguage({
  "TextList": null
}, context)
```

#### Input
* input `object`
  * TextList **required**
    * items [CustomerInputString](#customerinputstring)

#### Output
* output [BatchDetectDominantLanguageResponse](#batchdetectdominantlanguageresponse)

### BatchDetectEntities



```js
amazonaws_comprehend.BatchDetectEntities({
  "TextList": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * TextList **required**
    * items [CustomerInputString](#customerinputstring)

#### Output
* output [BatchDetectEntitiesResponse](#batchdetectentitiesresponse)

### BatchDetectKeyPhrases



```js
amazonaws_comprehend.BatchDetectKeyPhrases({
  "TextList": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * TextList **required**
    * items [CustomerInputString](#customerinputstring)

#### Output
* output [BatchDetectKeyPhrasesResponse](#batchdetectkeyphrasesresponse)

### BatchDetectSentiment



```js
amazonaws_comprehend.BatchDetectSentiment({
  "TextList": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * TextList **required**
    * items [CustomerInputString](#customerinputstring)

#### Output
* output [BatchDetectSentimentResponse](#batchdetectsentimentresponse)

### BatchDetectSyntax



```js
amazonaws_comprehend.BatchDetectSyntax({
  "TextList": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * TextList **required**
    * items [CustomerInputString](#customerinputstring)

#### Output
* output [BatchDetectSyntaxResponse](#batchdetectsyntaxresponse)

### ClassifyDocument



```js
amazonaws_comprehend.ClassifyDocument({
  "Text": null,
  "EndpointArn": null
}, context)
```

#### Input
* input `object`
  * EndpointArn **required**
  * Text **required**

#### Output
* output [ClassifyDocumentResponse](#classifydocumentresponse)

### CreateDocumentClassifier



```js
amazonaws_comprehend.CreateDocumentClassifier({
  "DocumentClassifierName": null,
  "DataAccessRoleArn": null,
  "InputDataConfig": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * DocumentClassifierName **required**
  * InputDataConfig **required**
    * AugmentedManifests
      * items [AugmentedManifestsListItem](#augmentedmanifestslistitem)
    * DataFormat
    * LabelDelimiter
    * S3Uri
  * LanguageCode **required**
  * Mode
  * OutputDataConfig
    * KmsKeyId
    * S3Uri
  * Tags
    * items [Tag](#tag)
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

#### Output
* output [CreateDocumentClassifierResponse](#createdocumentclassifierresponse)

### CreateEndpoint



```js
amazonaws_comprehend.CreateEndpoint({
  "EndpointName": null,
  "ModelArn": null,
  "DesiredInferenceUnits": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DesiredInferenceUnits **required**
  * EndpointName **required**
  * ModelArn **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateEndpointResponse](#createendpointresponse)

### CreateEntityRecognizer



```js
amazonaws_comprehend.CreateEntityRecognizer({
  "RecognizerName": null,
  "DataAccessRoleArn": null,
  "InputDataConfig": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * Annotations
      * S3Uri **required**
    * AugmentedManifests
      * items [AugmentedManifestsListItem](#augmentedmanifestslistitem)
    * DataFormat
    * Documents
      * S3Uri **required**
    * EntityList
      * S3Uri **required**
    * EntityTypes **required**
      * items [EntityTypesListItem](#entitytypeslistitem)
  * LanguageCode **required**
  * RecognizerName **required**
  * Tags
    * items [Tag](#tag)
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

#### Output
* output [CreateEntityRecognizerResponse](#createentityrecognizerresponse)

### DeleteDocumentClassifier



```js
amazonaws_comprehend.DeleteDocumentClassifier({
  "DocumentClassifierArn": null
}, context)
```

#### Input
* input `object`
  * DocumentClassifierArn **required**

#### Output
* output [DeleteDocumentClassifierResponse](#deletedocumentclassifierresponse)

### DeleteEndpoint



```js
amazonaws_comprehend.DeleteEndpoint({
  "EndpointArn": null
}, context)
```

#### Input
* input `object`
  * EndpointArn **required**

#### Output
* output [DeleteEndpointResponse](#deleteendpointresponse)

### DeleteEntityRecognizer



```js
amazonaws_comprehend.DeleteEntityRecognizer({
  "EntityRecognizerArn": null
}, context)
```

#### Input
* input `object`
  * EntityRecognizerArn **required**

#### Output
* output [DeleteEntityRecognizerResponse](#deleteentityrecognizerresponse)

### DescribeDocumentClassificationJob



```js
amazonaws_comprehend.DescribeDocumentClassificationJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribeDocumentClassificationJobResponse](#describedocumentclassificationjobresponse)

### DescribeDocumentClassifier



```js
amazonaws_comprehend.DescribeDocumentClassifier({
  "DocumentClassifierArn": null
}, context)
```

#### Input
* input `object`
  * DocumentClassifierArn **required**

#### Output
* output [DescribeDocumentClassifierResponse](#describedocumentclassifierresponse)

### DescribeDominantLanguageDetectionJob



```js
amazonaws_comprehend.DescribeDominantLanguageDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribeDominantLanguageDetectionJobResponse](#describedominantlanguagedetectionjobresponse)

### DescribeEndpoint



```js
amazonaws_comprehend.DescribeEndpoint({
  "EndpointArn": null
}, context)
```

#### Input
* input `object`
  * EndpointArn **required**

#### Output
* output [DescribeEndpointResponse](#describeendpointresponse)

### DescribeEntitiesDetectionJob



```js
amazonaws_comprehend.DescribeEntitiesDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribeEntitiesDetectionJobResponse](#describeentitiesdetectionjobresponse)

### DescribeEntityRecognizer



```js
amazonaws_comprehend.DescribeEntityRecognizer({
  "EntityRecognizerArn": null
}, context)
```

#### Input
* input `object`
  * EntityRecognizerArn **required**

#### Output
* output [DescribeEntityRecognizerResponse](#describeentityrecognizerresponse)

### DescribeEventsDetectionJob



```js
amazonaws_comprehend.DescribeEventsDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribeEventsDetectionJobResponse](#describeeventsdetectionjobresponse)

### DescribeKeyPhrasesDetectionJob



```js
amazonaws_comprehend.DescribeKeyPhrasesDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribeKeyPhrasesDetectionJobResponse](#describekeyphrasesdetectionjobresponse)

### DescribePiiEntitiesDetectionJob



```js
amazonaws_comprehend.DescribePiiEntitiesDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribePiiEntitiesDetectionJobResponse](#describepiientitiesdetectionjobresponse)

### DescribeSentimentDetectionJob



```js
amazonaws_comprehend.DescribeSentimentDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribeSentimentDetectionJobResponse](#describesentimentdetectionjobresponse)

### DescribeTopicsDetectionJob



```js
amazonaws_comprehend.DescribeTopicsDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribeTopicsDetectionJobResponse](#describetopicsdetectionjobresponse)

### DetectDominantLanguage



```js
amazonaws_comprehend.DetectDominantLanguage({
  "Text": null
}, context)
```

#### Input
* input `object`
  * Text **required**

#### Output
* output [DetectDominantLanguageResponse](#detectdominantlanguageresponse)

### DetectEntities



```js
amazonaws_comprehend.DetectEntities({
  "Text": null
}, context)
```

#### Input
* input `object`
  * EndpointArn
  * LanguageCode
  * Text **required**

#### Output
* output [DetectEntitiesResponse](#detectentitiesresponse)

### DetectKeyPhrases



```js
amazonaws_comprehend.DetectKeyPhrases({
  "Text": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * Text **required**

#### Output
* output [DetectKeyPhrasesResponse](#detectkeyphrasesresponse)

### DetectPiiEntities



```js
amazonaws_comprehend.DetectPiiEntities({
  "Text": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * Text **required**

#### Output
* output [DetectPiiEntitiesResponse](#detectpiientitiesresponse)

### DetectSentiment



```js
amazonaws_comprehend.DetectSentiment({
  "Text": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * Text **required**

#### Output
* output [DetectSentimentResponse](#detectsentimentresponse)

### DetectSyntax



```js
amazonaws_comprehend.DetectSyntax({
  "Text": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * LanguageCode **required**
  * Text **required**

#### Output
* output [DetectSyntaxResponse](#detectsyntaxresponse)

### ListDocumentClassificationJobs



```js
amazonaws_comprehend.ListDocumentClassificationJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

#### Output
* output [ListDocumentClassificationJobsResponse](#listdocumentclassificationjobsresponse)

### ListDocumentClassifiers



```js
amazonaws_comprehend.ListDocumentClassifiers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * Status
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

#### Output
* output [ListDocumentClassifiersResponse](#listdocumentclassifiersresponse)

### ListDominantLanguageDetectionJobs



```js
amazonaws_comprehend.ListDominantLanguageDetectionJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

#### Output
* output [ListDominantLanguageDetectionJobsResponse](#listdominantlanguagedetectionjobsresponse)

### ListEndpoints



```js
amazonaws_comprehend.ListEndpoints({}, context)
```

#### Input
* input `object`
  * Filter
    * CreationTimeAfter
    * CreationTimeBefore
    * ModelArn
    * Status
  * MaxResults
  * NextToken

#### Output
* output [ListEndpointsResponse](#listendpointsresponse)

### ListEntitiesDetectionJobs



```js
amazonaws_comprehend.ListEntitiesDetectionJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

#### Output
* output [ListEntitiesDetectionJobsResponse](#listentitiesdetectionjobsresponse)

### ListEntityRecognizers



```js
amazonaws_comprehend.ListEntityRecognizers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * Status
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

#### Output
* output [ListEntityRecognizersResponse](#listentityrecognizersresponse)

### ListEventsDetectionJobs



```js
amazonaws_comprehend.ListEventsDetectionJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

#### Output
* output [ListEventsDetectionJobsResponse](#listeventsdetectionjobsresponse)

### ListKeyPhrasesDetectionJobs



```js
amazonaws_comprehend.ListKeyPhrasesDetectionJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

#### Output
* output [ListKeyPhrasesDetectionJobsResponse](#listkeyphrasesdetectionjobsresponse)

### ListPiiEntitiesDetectionJobs



```js
amazonaws_comprehend.ListPiiEntitiesDetectionJobs({}, context)
```

#### Input
* input `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

#### Output
* output [ListPiiEntitiesDetectionJobsResponse](#listpiientitiesdetectionjobsresponse)

### ListSentimentDetectionJobs



```js
amazonaws_comprehend.ListSentimentDetectionJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

#### Output
* output [ListSentimentDetectionJobsResponse](#listsentimentdetectionjobsresponse)

### ListTagsForResource



```js
amazonaws_comprehend.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ListTopicsDetectionJobs



```js
amazonaws_comprehend.ListTopicsDetectionJobs({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

#### Output
* output [ListTopicsDetectionJobsResponse](#listtopicsdetectionjobsresponse)

### StartDocumentClassificationJob



```js
amazonaws_comprehend.StartDocumentClassificationJob({
  "DocumentClassifierArn": null,
  "InputDataConfig": null,
  "OutputDataConfig": null,
  "DataAccessRoleArn": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * DocumentClassifierArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

#### Output
* output [StartDocumentClassificationJobResponse](#startdocumentclassificationjobresponse)

### StartDominantLanguageDetectionJob



```js
amazonaws_comprehend.StartDominantLanguageDetectionJob({
  "InputDataConfig": null,
  "OutputDataConfig": null,
  "DataAccessRoleArn": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

#### Output
* output [StartDominantLanguageDetectionJobResponse](#startdominantlanguagedetectionjobresponse)

### StartEntitiesDetectionJob



```js
amazonaws_comprehend.StartEntitiesDetectionJob({
  "InputDataConfig": null,
  "OutputDataConfig": null,
  "DataAccessRoleArn": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * EntityRecognizerArn
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * LanguageCode **required**
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

#### Output
* output [StartEntitiesDetectionJobResponse](#startentitiesdetectionjobresponse)

### StartEventsDetectionJob



```js
amazonaws_comprehend.StartEventsDetectionJob({
  "InputDataConfig": null,
  "OutputDataConfig": null,
  "DataAccessRoleArn": null,
  "LanguageCode": null,
  "TargetEventTypes": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * LanguageCode **required**
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * TargetEventTypes **required**
    * items [EventTypeString](#eventtypestring)

#### Output
* output [StartEventsDetectionJobResponse](#starteventsdetectionjobresponse)

### StartKeyPhrasesDetectionJob



```js
amazonaws_comprehend.StartKeyPhrasesDetectionJob({
  "InputDataConfig": null,
  "OutputDataConfig": null,
  "DataAccessRoleArn": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * LanguageCode **required**
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

#### Output
* output [StartKeyPhrasesDetectionJobResponse](#startkeyphrasesdetectionjobresponse)

### StartPiiEntitiesDetectionJob



```js
amazonaws_comprehend.StartPiiEntitiesDetectionJob({
  "InputDataConfig": null,
  "OutputDataConfig": null,
  "Mode": null,
  "DataAccessRoleArn": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * LanguageCode **required**
  * Mode **required**
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * RedactionConfig
    * MaskCharacter
    * MaskMode
    * PiiEntityTypes
      * items [PiiEntityType](#piientitytype)

#### Output
* output [StartPiiEntitiesDetectionJobResponse](#startpiientitiesdetectionjobresponse)

### StartSentimentDetectionJob



```js
amazonaws_comprehend.StartSentimentDetectionJob({
  "InputDataConfig": null,
  "OutputDataConfig": null,
  "DataAccessRoleArn": null,
  "LanguageCode": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * LanguageCode **required**
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

#### Output
* output [StartSentimentDetectionJobResponse](#startsentimentdetectionjobresponse)

### StartTopicsDetectionJob



```js
amazonaws_comprehend.StartTopicsDetectionJob({
  "InputDataConfig": null,
  "OutputDataConfig": null,
  "DataAccessRoleArn": null
}, context)
```

#### Input
* input `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * NumberOfTopics
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

#### Output
* output [StartTopicsDetectionJobResponse](#starttopicsdetectionjobresponse)

### StopDominantLanguageDetectionJob



```js
amazonaws_comprehend.StopDominantLanguageDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [StopDominantLanguageDetectionJobResponse](#stopdominantlanguagedetectionjobresponse)

### StopEntitiesDetectionJob



```js
amazonaws_comprehend.StopEntitiesDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [StopEntitiesDetectionJobResponse](#stopentitiesdetectionjobresponse)

### StopEventsDetectionJob



```js
amazonaws_comprehend.StopEventsDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [StopEventsDetectionJobResponse](#stopeventsdetectionjobresponse)

### StopKeyPhrasesDetectionJob



```js
amazonaws_comprehend.StopKeyPhrasesDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [StopKeyPhrasesDetectionJobResponse](#stopkeyphrasesdetectionjobresponse)

### StopPiiEntitiesDetectionJob



```js
amazonaws_comprehend.StopPiiEntitiesDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [StopPiiEntitiesDetectionJobResponse](#stoppiientitiesdetectionjobresponse)

### StopSentimentDetectionJob



```js
amazonaws_comprehend.StopSentimentDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [StopSentimentDetectionJobResponse](#stopsentimentdetectionjobresponse)

### StopTrainingDocumentClassifier



```js
amazonaws_comprehend.StopTrainingDocumentClassifier({
  "DocumentClassifierArn": null
}, context)
```

#### Input
* input `object`
  * DocumentClassifierArn **required**

#### Output
* output [StopTrainingDocumentClassifierResponse](#stoptrainingdocumentclassifierresponse)

### StopTrainingEntityRecognizer



```js
amazonaws_comprehend.StopTrainingEntityRecognizer({
  "EntityRecognizerArn": null
}, context)
```

#### Input
* input `object`
  * EntityRecognizerArn **required**

#### Output
* output [StopTrainingEntityRecognizerResponse](#stoptrainingentityrecognizerresponse)

### TagResource



```js
amazonaws_comprehend.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_comprehend.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateEndpoint



```js
amazonaws_comprehend.UpdateEndpoint({
  "EndpointArn": null,
  "DesiredInferenceUnits": null
}, context)
```

#### Input
* input `object`
  * DesiredInferenceUnits **required**
  * EndpointArn **required**

#### Output
* output [UpdateEndpointResponse](#updateendpointresponse)



## Definitions

### AnyLengthString
* AnyLengthString `string`

### AttributeNamesList
* AttributeNamesList `array`
  * items [AttributeNamesListItem](#attributenameslistitem)

### AttributeNamesListItem
* AttributeNamesListItem `string`

### AugmentedManifestsListItem
* AugmentedManifestsListItem `object`: An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth.
  * AttributeNames **required**
    * items [AttributeNamesListItem](#attributenameslistitem)
  * S3Uri **required**

### BatchDetectDominantLanguageItemResult
* BatchDetectDominantLanguageItemResult `object`: The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
  * Index
  * Languages
    * items [DominantLanguage](#dominantlanguage)

### BatchDetectDominantLanguageRequest
* BatchDetectDominantLanguageRequest `object`
  * TextList **required**
    * items [CustomerInputString](#customerinputstring)

### BatchDetectDominantLanguageResponse
* BatchDetectDominantLanguageResponse `object`
  * ErrorList **required**
    * items [BatchItemError](#batchitemerror)
  * ResultList **required**
    * items [BatchDetectDominantLanguageItemResult](#batchdetectdominantlanguageitemresult)

### BatchDetectEntitiesItemResult
* BatchDetectEntitiesItemResult `object`: The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
  * Entities
    * items [Entity](#entity)
  * Index

### BatchDetectEntitiesRequest
* BatchDetectEntitiesRequest `object`
  * LanguageCode **required**
  * TextList **required**
    * items [CustomerInputString](#customerinputstring)

### BatchDetectEntitiesResponse
* BatchDetectEntitiesResponse `object`
  * ErrorList **required**
    * items [BatchItemError](#batchitemerror)
  * ResultList **required**
    * items [BatchDetectEntitiesItemResult](#batchdetectentitiesitemresult)

### BatchDetectKeyPhrasesItemResult
* BatchDetectKeyPhrasesItemResult `object`: The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
  * Index
  * KeyPhrases
    * items [KeyPhrase](#keyphrase)

### BatchDetectKeyPhrasesRequest
* BatchDetectKeyPhrasesRequest `object`
  * LanguageCode **required**
  * TextList **required**
    * items [CustomerInputString](#customerinputstring)

### BatchDetectKeyPhrasesResponse
* BatchDetectKeyPhrasesResponse `object`
  * ErrorList **required**
    * items [BatchItemError](#batchitemerror)
  * ResultList **required**
    * items [BatchDetectKeyPhrasesItemResult](#batchdetectkeyphrasesitemresult)

### BatchDetectSentimentItemResult
* BatchDetectSentimentItemResult `object`: The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation.
  * Index
  * Sentiment
  * SentimentScore
    * Mixed
    * Negative
    * Neutral
    * Positive

### BatchDetectSentimentRequest
* BatchDetectSentimentRequest `object`
  * LanguageCode **required**
  * TextList **required**
    * items [CustomerInputString](#customerinputstring)

### BatchDetectSentimentResponse
* BatchDetectSentimentResponse `object`
  * ErrorList **required**
    * items [BatchItemError](#batchitemerror)
  * ResultList **required**
    * items [BatchDetectSentimentItemResult](#batchdetectsentimentitemresult)

### BatchDetectSyntaxItemResult
* BatchDetectSyntaxItemResult `object`: The result of calling the operation. The operation returns one object that is successfully processed by the operation.
  * Index
  * SyntaxTokens
    * items [SyntaxToken](#syntaxtoken)

### BatchDetectSyntaxRequest
* BatchDetectSyntaxRequest `object`
  * LanguageCode **required**
  * TextList **required**
    * items [CustomerInputString](#customerinputstring)

### BatchDetectSyntaxResponse
* BatchDetectSyntaxResponse `object`
  * ErrorList **required**
    * items [BatchItemError](#batchitemerror)
  * ResultList **required**
    * items [BatchDetectSyntaxItemResult](#batchdetectsyntaxitemresult)

### BatchItemError
* BatchItemError `object`: Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error.
  * ErrorCode
  * ErrorMessage
  * Index

### BatchItemErrorList
* BatchItemErrorList `array`
  * items [BatchItemError](#batchitemerror)

### BatchSizeLimitExceededException


### ClassifierEvaluationMetrics
* ClassifierEvaluationMetrics `object`: Describes the result metrics for the test data associated with an documentation classifier.
  * Accuracy
  * F1Score
  * HammingLoss
  * MicroF1Score
  * MicroPrecision
  * MicroRecall
  * Precision
  * Recall

### ClassifierMetadata
* ClassifierMetadata `object`: Provides information about a document classifier.
  * EvaluationMetrics
    * Accuracy
    * F1Score
    * HammingLoss
    * MicroF1Score
    * MicroPrecision
    * MicroRecall
    * Precision
    * Recall
  * NumberOfLabels
  * NumberOfTestDocuments
  * NumberOfTrainedDocuments

### ClassifyDocumentRequest
* ClassifyDocumentRequest `object`
  * EndpointArn **required**
  * Text **required**

### ClassifyDocumentResponse
* ClassifyDocumentResponse `object`
  * Classes
    * items [DocumentClass](#documentclass)
  * Labels
    * items [DocumentLabel](#documentlabel)

### ClientRequestTokenString
* ClientRequestTokenString `string`

### ComprehendArn
* ComprehendArn `string`

### ComprehendArnName
* ComprehendArnName `string`

### ComprehendEndpointArn
* ComprehendEndpointArn `string`

### ComprehendEndpointName
* ComprehendEndpointName `string`

### ComprehendModelArn
* ComprehendModelArn `string`

### ConcurrentModificationException


### CreateDocumentClassifierRequest
* CreateDocumentClassifierRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * DocumentClassifierName **required**
  * InputDataConfig **required**
    * AugmentedManifests
      * items [AugmentedManifestsListItem](#augmentedmanifestslistitem)
    * DataFormat
    * LabelDelimiter
    * S3Uri
  * LanguageCode **required**
  * Mode
  * OutputDataConfig
    * KmsKeyId
    * S3Uri
  * Tags
    * items [Tag](#tag)
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### CreateDocumentClassifierResponse
* CreateDocumentClassifierResponse `object`
  * DocumentClassifierArn

### CreateEndpointRequest
* CreateEndpointRequest `object`
  * ClientRequestToken
  * DesiredInferenceUnits **required**
  * EndpointName **required**
  * ModelArn **required**
  * Tags
    * items [Tag](#tag)

### CreateEndpointResponse
* CreateEndpointResponse `object`
  * EndpointArn

### CreateEntityRecognizerRequest
* CreateEntityRecognizerRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * Annotations
      * S3Uri **required**
    * AugmentedManifests
      * items [AugmentedManifestsListItem](#augmentedmanifestslistitem)
    * DataFormat
    * Documents
      * S3Uri **required**
    * EntityList
      * S3Uri **required**
    * EntityTypes **required**
      * items [EntityTypesListItem](#entitytypeslistitem)
  * LanguageCode **required**
  * RecognizerName **required**
  * Tags
    * items [Tag](#tag)
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### CreateEntityRecognizerResponse
* CreateEntityRecognizerResponse `object`
  * EntityRecognizerArn

### CustomerInputString
* CustomerInputString `string`

### CustomerInputStringList
* CustomerInputStringList `array`
  * items [CustomerInputString](#customerinputstring)

### DeleteDocumentClassifierRequest
* DeleteDocumentClassifierRequest `object`
  * DocumentClassifierArn **required**

### DeleteDocumentClassifierResponse
* DeleteDocumentClassifierResponse `object`

### DeleteEndpointRequest
* DeleteEndpointRequest `object`
  * EndpointArn **required**

### DeleteEndpointResponse
* DeleteEndpointResponse `object`

### DeleteEntityRecognizerRequest
* DeleteEntityRecognizerRequest `object`
  * EntityRecognizerArn **required**

### DeleteEntityRecognizerResponse
* DeleteEntityRecognizerResponse `object`

### DescribeDocumentClassificationJobRequest
* DescribeDocumentClassificationJobRequest `object`
  * JobId **required**

### DescribeDocumentClassificationJobResponse
* DescribeDocumentClassificationJobResponse `object`
  * DocumentClassificationJobProperties
    * DataAccessRoleArn
    * DocumentClassifierArn
    * EndTime
    * InputDataConfig
      * InputFormat
      * S3Uri **required**
    * JobId
    * JobName
    * JobStatus
    * Message
    * OutputDataConfig
      * KmsKeyId
      * S3Uri **required**
    * SubmitTime
    * VolumeKmsKeyId
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)

### DescribeDocumentClassifierRequest
* DescribeDocumentClassifierRequest `object`
  * DocumentClassifierArn **required**

### DescribeDocumentClassifierResponse
* DescribeDocumentClassifierResponse `object`
  * DocumentClassifierProperties
    * ClassifierMetadata
      * EvaluationMetrics
        * Accuracy
        * F1Score
        * HammingLoss
        * MicroF1Score
        * MicroPrecision
        * MicroRecall
        * Precision
        * Recall
      * NumberOfLabels
      * NumberOfTestDocuments
      * NumberOfTrainedDocuments
    * DataAccessRoleArn
    * DocumentClassifierArn
    * EndTime
    * InputDataConfig
      * AugmentedManifests
        * items [AugmentedManifestsListItem](#augmentedmanifestslistitem)
      * DataFormat
      * LabelDelimiter
      * S3Uri
    * LanguageCode
    * Message
    * Mode
    * OutputDataConfig
      * KmsKeyId
      * S3Uri
    * Status
    * SubmitTime
    * TrainingEndTime
    * TrainingStartTime
    * VolumeKmsKeyId
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)

### DescribeDominantLanguageDetectionJobRequest
* DescribeDominantLanguageDetectionJobRequest `object`
  * JobId **required**

### DescribeDominantLanguageDetectionJobResponse
* DescribeDominantLanguageDetectionJobResponse `object`
  * DominantLanguageDetectionJobProperties
    * DataAccessRoleArn
    * EndTime
    * InputDataConfig
      * InputFormat
      * S3Uri **required**
    * JobId
    * JobName
    * JobStatus
    * Message
    * OutputDataConfig
      * KmsKeyId
      * S3Uri **required**
    * SubmitTime
    * VolumeKmsKeyId
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)

### DescribeEndpointRequest
* DescribeEndpointRequest `object`
  * EndpointArn **required**

### DescribeEndpointResponse
* DescribeEndpointResponse `object`
  * EndpointProperties
    * CreationTime
    * CurrentInferenceUnits
    * DesiredInferenceUnits
    * EndpointArn
    * LastModifiedTime
    * Message
    * ModelArn
    * Status

### DescribeEntitiesDetectionJobRequest
* DescribeEntitiesDetectionJobRequest `object`
  * JobId **required**

### DescribeEntitiesDetectionJobResponse
* DescribeEntitiesDetectionJobResponse `object`
  * EntitiesDetectionJobProperties
    * DataAccessRoleArn
    * EndTime
    * EntityRecognizerArn
    * InputDataConfig
      * InputFormat
      * S3Uri **required**
    * JobId
    * JobName
    * JobStatus
    * LanguageCode
    * Message
    * OutputDataConfig
      * KmsKeyId
      * S3Uri **required**
    * SubmitTime
    * VolumeKmsKeyId
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)

### DescribeEntityRecognizerRequest
* DescribeEntityRecognizerRequest `object`
  * EntityRecognizerArn **required**

### DescribeEntityRecognizerResponse
* DescribeEntityRecognizerResponse `object`
  * EntityRecognizerProperties
    * DataAccessRoleArn
    * EndTime
    * EntityRecognizerArn
    * InputDataConfig
      * Annotations
        * S3Uri **required**
      * AugmentedManifests
        * items [AugmentedManifestsListItem](#augmentedmanifestslistitem)
      * DataFormat
      * Documents
        * S3Uri **required**
      * EntityList
        * S3Uri **required**
      * EntityTypes **required**
        * items [EntityTypesListItem](#entitytypeslistitem)
    * LanguageCode
    * Message
    * RecognizerMetadata
      * EntityTypes
        * items [EntityRecognizerMetadataEntityTypesListItem](#entityrecognizermetadataentitytypeslistitem)
      * EvaluationMetrics
        * F1Score
        * Precision
        * Recall
      * NumberOfTestDocuments
      * NumberOfTrainedDocuments
    * Status
    * SubmitTime
    * TrainingEndTime
    * TrainingStartTime
    * VolumeKmsKeyId
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)

### DescribeEventsDetectionJobRequest
* DescribeEventsDetectionJobRequest `object`
  * JobId **required**

### DescribeEventsDetectionJobResponse
* DescribeEventsDetectionJobResponse `object`
  * EventsDetectionJobProperties
    * DataAccessRoleArn
    * EndTime
    * InputDataConfig
      * InputFormat
      * S3Uri **required**
    * JobId
    * JobName
    * JobStatus
    * LanguageCode
    * Message
    * OutputDataConfig
      * KmsKeyId
      * S3Uri **required**
    * SubmitTime
    * TargetEventTypes
      * items [EventTypeString](#eventtypestring)

### DescribeKeyPhrasesDetectionJobRequest
* DescribeKeyPhrasesDetectionJobRequest `object`
  * JobId **required**

### DescribeKeyPhrasesDetectionJobResponse
* DescribeKeyPhrasesDetectionJobResponse `object`
  * KeyPhrasesDetectionJobProperties
    * DataAccessRoleArn
    * EndTime
    * InputDataConfig
      * InputFormat
      * S3Uri **required**
    * JobId
    * JobName
    * JobStatus
    * LanguageCode
    * Message
    * OutputDataConfig
      * KmsKeyId
      * S3Uri **required**
    * SubmitTime
    * VolumeKmsKeyId
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)

### DescribePiiEntitiesDetectionJobRequest
* DescribePiiEntitiesDetectionJobRequest `object`
  * JobId **required**

### DescribePiiEntitiesDetectionJobResponse
* DescribePiiEntitiesDetectionJobResponse `object`
  * PiiEntitiesDetectionJobProperties [PiiEntitiesDetectionJobProperties](#piientitiesdetectionjobproperties)

### DescribeSentimentDetectionJobRequest
* DescribeSentimentDetectionJobRequest `object`
  * JobId **required**

### DescribeSentimentDetectionJobResponse
* DescribeSentimentDetectionJobResponse `object`
  * SentimentDetectionJobProperties
    * DataAccessRoleArn
    * EndTime
    * InputDataConfig
      * InputFormat
      * S3Uri **required**
    * JobId
    * JobName
    * JobStatus
    * LanguageCode
    * Message
    * OutputDataConfig
      * KmsKeyId
      * S3Uri **required**
    * SubmitTime
    * VolumeKmsKeyId
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)

### DescribeTopicsDetectionJobRequest
* DescribeTopicsDetectionJobRequest `object`
  * JobId **required**

### DescribeTopicsDetectionJobResponse
* DescribeTopicsDetectionJobResponse `object`
  * TopicsDetectionJobProperties
    * DataAccessRoleArn
    * EndTime
    * InputDataConfig
      * InputFormat
      * S3Uri **required**
    * JobId
    * JobName
    * JobStatus
    * Message
    * NumberOfTopics
    * OutputDataConfig
      * KmsKeyId
      * S3Uri **required**
    * SubmitTime
    * VolumeKmsKeyId
    * VpcConfig
      * SecurityGroupIds **required**
        * items [SecurityGroupId](#securitygroupid)
      * Subnets **required**
        * items [SubnetId](#subnetid)

### DetectDominantLanguageRequest
* DetectDominantLanguageRequest `object`
  * Text **required**

### DetectDominantLanguageResponse
* DetectDominantLanguageResponse `object`
  * Languages
    * items [DominantLanguage](#dominantlanguage)

### DetectEntitiesRequest
* DetectEntitiesRequest `object`
  * EndpointArn
  * LanguageCode
  * Text **required**

### DetectEntitiesResponse
* DetectEntitiesResponse `object`
  * Entities
    * items [Entity](#entity)

### DetectKeyPhrasesRequest
* DetectKeyPhrasesRequest `object`
  * LanguageCode **required**
  * Text **required**

### DetectKeyPhrasesResponse
* DetectKeyPhrasesResponse `object`
  * KeyPhrases
    * items [KeyPhrase](#keyphrase)

### DetectPiiEntitiesRequest
* DetectPiiEntitiesRequest `object`
  * LanguageCode **required**
  * Text **required**

### DetectPiiEntitiesResponse
* DetectPiiEntitiesResponse `object`
  * Entities
    * items [PiiEntity](#piientity)

### DetectSentimentRequest
* DetectSentimentRequest `object`
  * LanguageCode **required**
  * Text **required**

### DetectSentimentResponse
* DetectSentimentResponse `object`
  * Sentiment
  * SentimentScore
    * Mixed
    * Negative
    * Neutral
    * Positive

### DetectSyntaxRequest
* DetectSyntaxRequest `object`
  * LanguageCode **required**
  * Text **required**

### DetectSyntaxResponse
* DetectSyntaxResponse `object`
  * SyntaxTokens
    * items [SyntaxToken](#syntaxtoken)

### DocumentClass
* DocumentClass `object`: Specifies the class that categorizes the document being analyzed
  * Name
  * Score

### DocumentClassificationJobFilter
* DocumentClassificationJobFilter `object`: Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request.
  * JobName
  * JobStatus
  * SubmitTimeAfter
  * SubmitTimeBefore

### DocumentClassificationJobProperties
* DocumentClassificationJobProperties `object`: Provides information about a document classification job.
  * DataAccessRoleArn
  * DocumentClassifierArn
  * EndTime
  * InputDataConfig
    * InputFormat
    * S3Uri **required**
  * JobId
  * JobName
  * JobStatus
  * Message
  * OutputDataConfig
    * KmsKeyId
    * S3Uri **required**
  * SubmitTime
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### DocumentClassificationJobPropertiesList
* DocumentClassificationJobPropertiesList `array`
  * items [DocumentClassificationJobProperties](#documentclassificationjobproperties)

### DocumentClassifierArn
* DocumentClassifierArn `string`

### DocumentClassifierAugmentedManifestsList
* DocumentClassifierAugmentedManifestsList `array`
  * items [AugmentedManifestsListItem](#augmentedmanifestslistitem)

### DocumentClassifierDataFormat
* DocumentClassifierDataFormat `string` (values: COMPREHEND_CSV, AUGMENTED_MANIFEST)

### DocumentClassifierEndpointArn
* DocumentClassifierEndpointArn `string`

### DocumentClassifierFilter
* DocumentClassifierFilter `object`: Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the operation.
  * Status
  * SubmitTimeAfter
  * SubmitTimeBefore

### DocumentClassifierInputDataConfig
* DocumentClassifierInputDataConfig `object`: <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a>how-document-classification-training-data</a>. </p>
  * AugmentedManifests
    * items [AugmentedManifestsListItem](#augmentedmanifestslistitem)
  * DataFormat
  * LabelDelimiter
  * S3Uri

### DocumentClassifierMode
* DocumentClassifierMode `string` (values: MULTI_CLASS, MULTI_LABEL)

### DocumentClassifierOutputDataConfig
* DocumentClassifierOutputDataConfig `object`: Provides output results configuration parameters for custom classifier jobs. 
  * KmsKeyId
  * S3Uri

### DocumentClassifierProperties
* DocumentClassifierProperties `object`: Provides information about a document classifier.
  * ClassifierMetadata
    * EvaluationMetrics
      * Accuracy
      * F1Score
      * HammingLoss
      * MicroF1Score
      * MicroPrecision
      * MicroRecall
      * Precision
      * Recall
    * NumberOfLabels
    * NumberOfTestDocuments
    * NumberOfTrainedDocuments
  * DataAccessRoleArn
  * DocumentClassifierArn
  * EndTime
  * InputDataConfig
    * AugmentedManifests
      * items [AugmentedManifestsListItem](#augmentedmanifestslistitem)
    * DataFormat
    * LabelDelimiter
    * S3Uri
  * LanguageCode
  * Message
  * Mode
  * OutputDataConfig
    * KmsKeyId
    * S3Uri
  * Status
  * SubmitTime
  * TrainingEndTime
  * TrainingStartTime
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### DocumentClassifierPropertiesList
* DocumentClassifierPropertiesList `array`
  * items [DocumentClassifierProperties](#documentclassifierproperties)

### DocumentLabel
* DocumentLabel `object`: Specifies one of the label or labels that categorize the document being analyzed.
  * Name
  * Score

### DominantLanguage
* DominantLanguage `object`: Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection.
  * LanguageCode
  * Score

### DominantLanguageDetectionJobFilter
* DominantLanguageDetectionJobFilter `object`: Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.
  * JobName
  * JobStatus
  * SubmitTimeAfter
  * SubmitTimeBefore

### DominantLanguageDetectionJobProperties
* DominantLanguageDetectionJobProperties `object`: Provides information about a dominant language detection job.
  * DataAccessRoleArn
  * EndTime
  * InputDataConfig
    * InputFormat
    * S3Uri **required**
  * JobId
  * JobName
  * JobStatus
  * Message
  * OutputDataConfig
    * KmsKeyId
    * S3Uri **required**
  * SubmitTime
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### DominantLanguageDetectionJobPropertiesList
* DominantLanguageDetectionJobPropertiesList `array`
  * items [DominantLanguageDetectionJobProperties](#dominantlanguagedetectionjobproperties)

### Double
* Double `number`

### EndpointFilter
* EndpointFilter `object`: The filter used to determine which endpoints are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time. 
  * CreationTimeAfter
  * CreationTimeBefore
  * ModelArn
  * Status

### EndpointProperties
* EndpointProperties `object`: Specifies information about the specified endpoint.
  * CreationTime
  * CurrentInferenceUnits
  * DesiredInferenceUnits
  * EndpointArn
  * LastModifiedTime
  * Message
  * ModelArn
  * Status

### EndpointPropertiesList
* EndpointPropertiesList `array`
  * items [EndpointProperties](#endpointproperties)

### EndpointStatus
* EndpointStatus `string` (values: CREATING, DELETING, FAILED, IN_SERVICE, UPDATING)

### EntitiesDetectionJobFilter
* EntitiesDetectionJobFilter `object`: Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.
  * JobName
  * JobStatus
  * SubmitTimeAfter
  * SubmitTimeBefore

### EntitiesDetectionJobProperties
* EntitiesDetectionJobProperties `object`: Provides information about an entities detection job.
  * DataAccessRoleArn
  * EndTime
  * EntityRecognizerArn
  * InputDataConfig
    * InputFormat
    * S3Uri **required**
  * JobId
  * JobName
  * JobStatus
  * LanguageCode
  * Message
  * OutputDataConfig
    * KmsKeyId
    * S3Uri **required**
  * SubmitTime
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### EntitiesDetectionJobPropertiesList
* EntitiesDetectionJobPropertiesList `array`
  * items [EntitiesDetectionJobProperties](#entitiesdetectionjobproperties)

### Entity
* Entity `object`: <p>Provides information about an entity. </p> <p> </p>
  * BeginOffset
  * EndOffset
  * Score
  * Text
  * Type

### EntityRecognizerAnnotations
* EntityRecognizerAnnotations `object`: Describes the annotations associated with a entity recognizer.
  * S3Uri **required**

### EntityRecognizerArn
* EntityRecognizerArn `string`

### EntityRecognizerAugmentedManifestsList
* EntityRecognizerAugmentedManifestsList `array`
  * items [AugmentedManifestsListItem](#augmentedmanifestslistitem)

### EntityRecognizerDataFormat
* EntityRecognizerDataFormat `string` (values: COMPREHEND_CSV, AUGMENTED_MANIFEST)

### EntityRecognizerDocuments
* EntityRecognizerDocuments `object`: Describes the training documents submitted with an entity recognizer.
  * S3Uri **required**

### EntityRecognizerEndpointArn
* EntityRecognizerEndpointArn `string`

### EntityRecognizerEntityList
* EntityRecognizerEntityList `object`: Describes the entity recognizer submitted with an entity recognizer.
  * S3Uri **required**

### EntityRecognizerEvaluationMetrics
* EntityRecognizerEvaluationMetrics `object`: Detailed information about the accuracy of an entity recognizer. 
  * F1Score
  * Precision
  * Recall

### EntityRecognizerFilter
* EntityRecognizerFilter `object`: Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the operation./&gt;
  * Status
  * SubmitTimeAfter
  * SubmitTimeBefore

### EntityRecognizerInputDataConfig
* EntityRecognizerInputDataConfig `object`: Specifies the format and location of the input data.
  * Annotations
    * S3Uri **required**
  * AugmentedManifests
    * items [AugmentedManifestsListItem](#augmentedmanifestslistitem)
  * DataFormat
  * Documents
    * S3Uri **required**
  * EntityList
    * S3Uri **required**
  * EntityTypes **required**
    * items [EntityTypesListItem](#entitytypeslistitem)

### EntityRecognizerMetadata
* EntityRecognizerMetadata `object`: Detailed information about an entity recognizer.
  * EntityTypes
    * items [EntityRecognizerMetadataEntityTypesListItem](#entityrecognizermetadataentitytypeslistitem)
  * EvaluationMetrics
    * F1Score
    * Precision
    * Recall
  * NumberOfTestDocuments
  * NumberOfTrainedDocuments

### EntityRecognizerMetadataEntityTypesList
* EntityRecognizerMetadataEntityTypesList `array`
  * items [EntityRecognizerMetadataEntityTypesListItem](#entityrecognizermetadataentitytypeslistitem)

### EntityRecognizerMetadataEntityTypesListItem
* EntityRecognizerMetadataEntityTypesListItem `object`: Individual item from the list of entity types in the metadata of an entity recognizer.
  * EvaluationMetrics
    * F1Score
    * Precision
    * Recall
  * NumberOfTrainMentions
  * Type

### EntityRecognizerProperties
* EntityRecognizerProperties `object`: Describes information about an entity recognizer.
  * DataAccessRoleArn
  * EndTime
  * EntityRecognizerArn
  * InputDataConfig
    * Annotations
      * S3Uri **required**
    * AugmentedManifests
      * items [AugmentedManifestsListItem](#augmentedmanifestslistitem)
    * DataFormat
    * Documents
      * S3Uri **required**
    * EntityList
      * S3Uri **required**
    * EntityTypes **required**
      * items [EntityTypesListItem](#entitytypeslistitem)
  * LanguageCode
  * Message
  * RecognizerMetadata
    * EntityTypes
      * items [EntityRecognizerMetadataEntityTypesListItem](#entityrecognizermetadataentitytypeslistitem)
    * EvaluationMetrics
      * F1Score
      * Precision
      * Recall
    * NumberOfTestDocuments
    * NumberOfTrainedDocuments
  * Status
  * SubmitTime
  * TrainingEndTime
  * TrainingStartTime
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### EntityRecognizerPropertiesList
* EntityRecognizerPropertiesList `array`
  * items [EntityRecognizerProperties](#entityrecognizerproperties)

### EntityType
* EntityType `string` (values: PERSON, LOCATION, ORGANIZATION, COMMERCIAL_ITEM, EVENT, DATE, QUANTITY, TITLE, OTHER)

### EntityTypeName
* EntityTypeName `string`

### EntityTypesEvaluationMetrics
* EntityTypesEvaluationMetrics `object`: Detailed information about the accuracy of an entity recognizer for a specific entity type. 
  * F1Score
  * Precision
  * Recall

### EntityTypesList
* EntityTypesList `array`
  * items [EntityTypesListItem](#entitytypeslistitem)

### EntityTypesListItem
* EntityTypesListItem `object`: An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer.
  * Type **required**

### EventTypeString
* EventTypeString `string`

### EventsDetectionJobFilter
* EventsDetectionJobFilter `object`: Provides information for filtering a list of event detection jobs.
  * JobName
  * JobStatus
  * SubmitTimeAfter
  * SubmitTimeBefore

### EventsDetectionJobProperties
* EventsDetectionJobProperties `object`: Provides information about an events detection job.
  * DataAccessRoleArn
  * EndTime
  * InputDataConfig
    * InputFormat
    * S3Uri **required**
  * JobId
  * JobName
  * JobStatus
  * LanguageCode
  * Message
  * OutputDataConfig
    * KmsKeyId
    * S3Uri **required**
  * SubmitTime
  * TargetEventTypes
    * items [EventTypeString](#eventtypestring)

### EventsDetectionJobPropertiesList
* EventsDetectionJobPropertiesList `array`
  * items [EventsDetectionJobProperties](#eventsdetectionjobproperties)

### Float
* Float `number`

### IamRoleArn
* IamRoleArn `string`

### InferenceUnitsInteger
* InferenceUnitsInteger `integer`

### InputDataConfig
* InputDataConfig `object`: The input properties for a topic detection job.
  * InputFormat
  * S3Uri **required**

### InputFormat
* InputFormat `string` (values: ONE_DOC_PER_FILE, ONE_DOC_PER_LINE)

### Integer
* Integer `integer`

### InternalServerException


### InvalidFilterException


### InvalidRequestException


### JobId
* JobId `string`

### JobName
* JobName `string`

### JobNotFoundException


### JobStatus
* JobStatus `string` (values: SUBMITTED, IN_PROGRESS, COMPLETED, FAILED, STOP_REQUESTED, STOPPED)

### KeyPhrase
* KeyPhrase `object`: Describes a key noun phrase.
  * BeginOffset
  * EndOffset
  * Score
  * Text

### KeyPhrasesDetectionJobFilter
* KeyPhrasesDetectionJobFilter `object`: Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.
  * JobName
  * JobStatus
  * SubmitTimeAfter
  * SubmitTimeBefore

### KeyPhrasesDetectionJobProperties
* KeyPhrasesDetectionJobProperties `object`: Provides information about a key phrases detection job.
  * DataAccessRoleArn
  * EndTime
  * InputDataConfig
    * InputFormat
    * S3Uri **required**
  * JobId
  * JobName
  * JobStatus
  * LanguageCode
  * Message
  * OutputDataConfig
    * KmsKeyId
    * S3Uri **required**
  * SubmitTime
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### KeyPhrasesDetectionJobPropertiesList
* KeyPhrasesDetectionJobPropertiesList `array`
  * items [KeyPhrasesDetectionJobProperties](#keyphrasesdetectionjobproperties)

### KmsKeyId
* KmsKeyId `string`

### KmsKeyValidationException


### LabelDelimiter
* LabelDelimiter `string`

### LanguageCode
* LanguageCode `string` (values: en, es, fr, de, it, pt, ar, hi, ja, ko, zh, zh-TW)

### ListDocumentClassificationJobsRequest
* ListDocumentClassificationJobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListDocumentClassificationJobsResponse
* ListDocumentClassificationJobsResponse `object`
  * DocumentClassificationJobPropertiesList
    * items [DocumentClassificationJobProperties](#documentclassificationjobproperties)
  * NextToken

### ListDocumentClassifiersRequest
* ListDocumentClassifiersRequest `object`
  * Filter
    * Status
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListDocumentClassifiersResponse
* ListDocumentClassifiersResponse `object`
  * DocumentClassifierPropertiesList
    * items [DocumentClassifierProperties](#documentclassifierproperties)
  * NextToken

### ListDominantLanguageDetectionJobsRequest
* ListDominantLanguageDetectionJobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListDominantLanguageDetectionJobsResponse
* ListDominantLanguageDetectionJobsResponse `object`
  * DominantLanguageDetectionJobPropertiesList
    * items [DominantLanguageDetectionJobProperties](#dominantlanguagedetectionjobproperties)
  * NextToken

### ListEndpointsRequest
* ListEndpointsRequest `object`
  * Filter
    * CreationTimeAfter
    * CreationTimeBefore
    * ModelArn
    * Status
  * MaxResults
  * NextToken

### ListEndpointsResponse
* ListEndpointsResponse `object`
  * EndpointPropertiesList
    * items [EndpointProperties](#endpointproperties)
  * NextToken

### ListEntitiesDetectionJobsRequest
* ListEntitiesDetectionJobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListEntitiesDetectionJobsResponse
* ListEntitiesDetectionJobsResponse `object`
  * EntitiesDetectionJobPropertiesList
    * items [EntitiesDetectionJobProperties](#entitiesdetectionjobproperties)
  * NextToken

### ListEntityRecognizersRequest
* ListEntityRecognizersRequest `object`
  * Filter
    * Status
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListEntityRecognizersResponse
* ListEntityRecognizersResponse `object`
  * EntityRecognizerPropertiesList
    * items [EntityRecognizerProperties](#entityrecognizerproperties)
  * NextToken

### ListEventsDetectionJobsRequest
* ListEventsDetectionJobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListEventsDetectionJobsResponse
* ListEventsDetectionJobsResponse `object`
  * EventsDetectionJobPropertiesList
    * items [EventsDetectionJobProperties](#eventsdetectionjobproperties)
  * NextToken

### ListKeyPhrasesDetectionJobsRequest
* ListKeyPhrasesDetectionJobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListKeyPhrasesDetectionJobsResponse
* ListKeyPhrasesDetectionJobsResponse `object`
  * KeyPhrasesDetectionJobPropertiesList
    * items [KeyPhrasesDetectionJobProperties](#keyphrasesdetectionjobproperties)
  * NextToken

### ListOfClasses
* ListOfClasses `array`
  * items [DocumentClass](#documentclass)

### ListOfDetectDominantLanguageResult
* ListOfDetectDominantLanguageResult `array`
  * items [BatchDetectDominantLanguageItemResult](#batchdetectdominantlanguageitemresult)

### ListOfDetectEntitiesResult
* ListOfDetectEntitiesResult `array`
  * items [BatchDetectEntitiesItemResult](#batchdetectentitiesitemresult)

### ListOfDetectKeyPhrasesResult
* ListOfDetectKeyPhrasesResult `array`
  * items [BatchDetectKeyPhrasesItemResult](#batchdetectkeyphrasesitemresult)

### ListOfDetectSentimentResult
* ListOfDetectSentimentResult `array`
  * items [BatchDetectSentimentItemResult](#batchdetectsentimentitemresult)

### ListOfDetectSyntaxResult
* ListOfDetectSyntaxResult `array`
  * items [BatchDetectSyntaxItemResult](#batchdetectsyntaxitemresult)

### ListOfDominantLanguages
* ListOfDominantLanguages `array`
  * items [DominantLanguage](#dominantlanguage)

### ListOfEntities
* ListOfEntities `array`
  * items [Entity](#entity)

### ListOfKeyPhrases
* ListOfKeyPhrases `array`
  * items [KeyPhrase](#keyphrase)

### ListOfLabels
* ListOfLabels `array`
  * items [DocumentLabel](#documentlabel)

### ListOfPiiEntities
* ListOfPiiEntities `array`
  * items [PiiEntity](#piientity)

### ListOfPiiEntityTypes
* ListOfPiiEntityTypes `array`
  * items [PiiEntityType](#piientitytype)

### ListOfSyntaxTokens
* ListOfSyntaxTokens `array`
  * items [SyntaxToken](#syntaxtoken)

### ListPiiEntitiesDetectionJobsRequest
* ListPiiEntitiesDetectionJobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListPiiEntitiesDetectionJobsResponse
* ListPiiEntitiesDetectionJobsResponse `object`
  * NextToken
  * PiiEntitiesDetectionJobPropertiesList
    * items [PiiEntitiesDetectionJobProperties](#piientitiesdetectionjobproperties)

### ListSentimentDetectionJobsRequest
* ListSentimentDetectionJobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListSentimentDetectionJobsResponse
* ListSentimentDetectionJobsResponse `object`
  * NextToken
  * SentimentDetectionJobPropertiesList
    * items [SentimentDetectionJobProperties](#sentimentdetectionjobproperties)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * ResourceArn
  * Tags
    * items [Tag](#tag)

### ListTopicsDetectionJobsRequest
* ListTopicsDetectionJobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListTopicsDetectionJobsResponse
* ListTopicsDetectionJobsResponse `object`
  * NextToken
  * TopicsDetectionJobPropertiesList
    * items [TopicsDetectionJobProperties](#topicsdetectionjobproperties)

### MaskCharacter
* MaskCharacter `string`

### MaxResultsInteger
* MaxResultsInteger `integer`

### ModelStatus
* ModelStatus `string` (values: SUBMITTED, TRAINING, DELETING, STOP_REQUESTED, STOPPED, IN_ERROR, TRAINED)

### NumberOfTopicsInteger
* NumberOfTopicsInteger `integer`

### OutputDataConfig
* OutputDataConfig `object`: <p>Provides configuration parameters for the output of topic detection jobs.</p> <p/>
  * KmsKeyId
  * S3Uri **required**

### PartOfSpeechTag
* PartOfSpeechTag `object`: Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a>how-syntax</a>.
  * Score
  * Tag

### PartOfSpeechTagType
* PartOfSpeechTagType `string` (values: ADJ, ADP, ADV, AUX, CONJ, CCONJ, DET, INTJ, NOUN, NUM, O, PART, PRON, PROPN, PUNCT, SCONJ, SYM, VERB)

### PiiEntitiesDetectionJobFilter
* PiiEntitiesDetectionJobFilter `object`: Provides information for filtering a list of PII entity detection jobs.
  * JobName
  * JobStatus
  * SubmitTimeAfter
  * SubmitTimeBefore

### PiiEntitiesDetectionJobProperties
* PiiEntitiesDetectionJobProperties `object`: Provides information about a PII entities detection job.
  * DataAccessRoleArn
  * EndTime
  * InputDataConfig
    * InputFormat
    * S3Uri **required**
  * JobId
  * JobName
  * JobStatus
  * LanguageCode
  * Message
  * Mode
  * OutputDataConfig
    * KmsKeyId
    * S3Uri **required**
  * RedactionConfig
    * MaskCharacter
    * MaskMode
    * PiiEntityTypes
      * items [PiiEntityType](#piientitytype)
  * SubmitTime

### PiiEntitiesDetectionJobPropertiesList
* PiiEntitiesDetectionJobPropertiesList `array`
  * items [PiiEntitiesDetectionJobProperties](#piientitiesdetectionjobproperties)

### PiiEntitiesDetectionMaskMode
* PiiEntitiesDetectionMaskMode `string` (values: MASK, REPLACE_WITH_PII_ENTITY_TYPE)

### PiiEntitiesDetectionMode
* PiiEntitiesDetectionMode `string` (values: ONLY_REDACTION, ONLY_OFFSETS)

### PiiEntity
* PiiEntity `object`: Provides information about a PII entity.
  * BeginOffset
  * EndOffset
  * Score
  * Type

### PiiEntityType
* PiiEntityType `string` (values: BANK_ACCOUNT_NUMBER, BANK_ROUTING, CREDIT_DEBIT_NUMBER, CREDIT_DEBIT_CVV, CREDIT_DEBIT_EXPIRY, PIN, EMAIL, ADDRESS, NAME, PHONE, SSN, DATE_TIME, PASSPORT_NUMBER, DRIVER_ID, URL, AGE, USERNAME, PASSWORD, AWS_ACCESS_KEY, AWS_SECRET_KEY, IP_ADDRESS, MAC_ADDRESS, ALL)

### PiiOutputDataConfig
* PiiOutputDataConfig `object`: Provides configuration parameters for the output of PII entity detection jobs.
  * KmsKeyId
  * S3Uri **required**

### RedactionConfig
* RedactionConfig `object`: Provides configuration parameters for PII entity redaction.
  * MaskCharacter
  * MaskMode
  * PiiEntityTypes
    * items [PiiEntityType](#piientitytype)

### ResourceInUseException


### ResourceLimitExceededException


### ResourceNotFoundException


### ResourceUnavailableException


### S3Uri
* S3Uri `string`

### SecurityGroupId
* SecurityGroupId `string`

### SecurityGroupIds
* SecurityGroupIds `array`
  * items [SecurityGroupId](#securitygroupid)

### SentimentDetectionJobFilter
* SentimentDetectionJobFilter `object`: Provides information for filtering a list of dominant language detection jobs. For more information, see the operation.
  * JobName
  * JobStatus
  * SubmitTimeAfter
  * SubmitTimeBefore

### SentimentDetectionJobProperties
* SentimentDetectionJobProperties `object`: Provides information about a sentiment detection job.
  * DataAccessRoleArn
  * EndTime
  * InputDataConfig
    * InputFormat
    * S3Uri **required**
  * JobId
  * JobName
  * JobStatus
  * LanguageCode
  * Message
  * OutputDataConfig
    * KmsKeyId
    * S3Uri **required**
  * SubmitTime
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### SentimentDetectionJobPropertiesList
* SentimentDetectionJobPropertiesList `array`
  * items [SentimentDetectionJobProperties](#sentimentdetectionjobproperties)

### SentimentScore
* SentimentScore `object`: Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments.
  * Mixed
  * Negative
  * Neutral
  * Positive

### SentimentType
* SentimentType `string` (values: POSITIVE, NEGATIVE, NEUTRAL, MIXED)

### StartDocumentClassificationJobRequest
* StartDocumentClassificationJobRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * DocumentClassifierArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### StartDocumentClassificationJobResponse
* StartDocumentClassificationJobResponse `object`
  * JobId
  * JobStatus

### StartDominantLanguageDetectionJobRequest
* StartDominantLanguageDetectionJobRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### StartDominantLanguageDetectionJobResponse
* StartDominantLanguageDetectionJobResponse `object`
  * JobId
  * JobStatus

### StartEntitiesDetectionJobRequest
* StartEntitiesDetectionJobRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * EntityRecognizerArn
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * LanguageCode **required**
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### StartEntitiesDetectionJobResponse
* StartEntitiesDetectionJobResponse `object`
  * JobId
  * JobStatus

### StartEventsDetectionJobRequest
* StartEventsDetectionJobRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * LanguageCode **required**
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * TargetEventTypes **required**
    * items [EventTypeString](#eventtypestring)

### StartEventsDetectionJobResponse
* StartEventsDetectionJobResponse `object`
  * JobId
  * JobStatus

### StartKeyPhrasesDetectionJobRequest
* StartKeyPhrasesDetectionJobRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * LanguageCode **required**
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### StartKeyPhrasesDetectionJobResponse
* StartKeyPhrasesDetectionJobResponse `object`
  * JobId
  * JobStatus

### StartPiiEntitiesDetectionJobRequest
* StartPiiEntitiesDetectionJobRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * LanguageCode **required**
  * Mode **required**
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * RedactionConfig
    * MaskCharacter
    * MaskMode
    * PiiEntityTypes
      * items [PiiEntityType](#piientitytype)

### StartPiiEntitiesDetectionJobResponse
* StartPiiEntitiesDetectionJobResponse `object`
  * JobId
  * JobStatus

### StartSentimentDetectionJobRequest
* StartSentimentDetectionJobRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * LanguageCode **required**
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### StartSentimentDetectionJobResponse
* StartSentimentDetectionJobResponse `object`
  * JobId
  * JobStatus

### StartTopicsDetectionJobRequest
* StartTopicsDetectionJobRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * InputFormat
    * S3Uri **required**
  * JobName
  * NumberOfTopics
  * OutputDataConfig **required**
    * KmsKeyId
    * S3Uri **required**
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### StartTopicsDetectionJobResponse
* StartTopicsDetectionJobResponse `object`
  * JobId
  * JobStatus

### StopDominantLanguageDetectionJobRequest
* StopDominantLanguageDetectionJobRequest `object`
  * JobId **required**

### StopDominantLanguageDetectionJobResponse
* StopDominantLanguageDetectionJobResponse `object`
  * JobId
  * JobStatus

### StopEntitiesDetectionJobRequest
* StopEntitiesDetectionJobRequest `object`
  * JobId **required**

### StopEntitiesDetectionJobResponse
* StopEntitiesDetectionJobResponse `object`
  * JobId
  * JobStatus

### StopEventsDetectionJobRequest
* StopEventsDetectionJobRequest `object`
  * JobId **required**

### StopEventsDetectionJobResponse
* StopEventsDetectionJobResponse `object`
  * JobId
  * JobStatus

### StopKeyPhrasesDetectionJobRequest
* StopKeyPhrasesDetectionJobRequest `object`
  * JobId **required**

### StopKeyPhrasesDetectionJobResponse
* StopKeyPhrasesDetectionJobResponse `object`
  * JobId
  * JobStatus

### StopPiiEntitiesDetectionJobRequest
* StopPiiEntitiesDetectionJobRequest `object`
  * JobId **required**

### StopPiiEntitiesDetectionJobResponse
* StopPiiEntitiesDetectionJobResponse `object`
  * JobId
  * JobStatus

### StopSentimentDetectionJobRequest
* StopSentimentDetectionJobRequest `object`
  * JobId **required**

### StopSentimentDetectionJobResponse
* StopSentimentDetectionJobResponse `object`
  * JobId
  * JobStatus

### StopTrainingDocumentClassifierRequest
* StopTrainingDocumentClassifierRequest `object`
  * DocumentClassifierArn **required**

### StopTrainingDocumentClassifierResponse
* StopTrainingDocumentClassifierResponse `object`

### StopTrainingEntityRecognizerRequest
* StopTrainingEntityRecognizerRequest `object`
  * EntityRecognizerArn **required**

### StopTrainingEntityRecognizerResponse
* StopTrainingEntityRecognizerResponse `object`

### String
* String `string`

### SubnetId
* SubnetId `string`

### Subnets
* Subnets `array`
  * items [SubnetId](#subnetid)

### SyntaxLanguageCode
* SyntaxLanguageCode `string` (values: en, es, fr, de, it, pt)

### SyntaxToken
* SyntaxToken `object`: Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text.
  * BeginOffset
  * EndOffset
  * PartOfSpeech
    * Score
    * Tag
  * Text
  * TokenId

### Tag
* Tag `object`: A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department. 
  * Key **required**
  * Value

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TargetEventTypes
* TargetEventTypes `array`
  * items [EventTypeString](#eventtypestring)

### TextSizeLimitExceededException


### Timestamp
* Timestamp `string`

### TooManyRequestsException


### TooManyTagKeysException


### TooManyTagsException


### TopicsDetectionJobFilter
* TopicsDetectionJobFilter `object`: Provides information for filtering topic detection jobs. For more information, see .
  * JobName
  * JobStatus
  * SubmitTimeAfter
  * SubmitTimeBefore

### TopicsDetectionJobProperties
* TopicsDetectionJobProperties `object`: Provides information about a topic detection job.
  * DataAccessRoleArn
  * EndTime
  * InputDataConfig
    * InputFormat
    * S3Uri **required**
  * JobId
  * JobName
  * JobStatus
  * Message
  * NumberOfTopics
  * OutputDataConfig
    * KmsKeyId
    * S3Uri **required**
  * SubmitTime
  * VolumeKmsKeyId
  * VpcConfig
    * SecurityGroupIds **required**
      * items [SecurityGroupId](#securitygroupid)
    * Subnets **required**
      * items [SubnetId](#subnetid)

### TopicsDetectionJobPropertiesList
* TopicsDetectionJobPropertiesList `array`
  * items [TopicsDetectionJobProperties](#topicsdetectionjobproperties)

### UnsupportedLanguageException


### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateEndpointRequest
* UpdateEndpointRequest `object`
  * DesiredInferenceUnits **required**
  * EndpointArn **required**

### UpdateEndpointResponse
* UpdateEndpointResponse `object`

### VpcConfig
* VpcConfig `object`:  Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. 
  * SecurityGroupIds **required**
    * items [SecurityGroupId](#securitygroupid)
  * Subnets **required**
    * items [SubnetId](#subnetid)


