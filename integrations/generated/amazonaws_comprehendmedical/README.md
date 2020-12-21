# @datafire/amazonaws_comprehendmedical

Client library for AWS Comprehend Medical

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_comprehendmedical
```
```js
let amazonaws_comprehendmedical = require('@datafire/amazonaws_comprehendmedical').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

 Amazon Comprehend Medical extracts structured information from unstructured clinical text. Use these actions to gain insight in your documents. 

## Actions

### DescribeEntitiesDetectionV2Job



```js
amazonaws_comprehendmedical.DescribeEntitiesDetectionV2Job({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribeEntitiesDetectionV2JobResponse](#describeentitiesdetectionv2jobresponse)

### DescribeICD10CMInferenceJob



```js
amazonaws_comprehendmedical.DescribeICD10CMInferenceJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribeICD10CMInferenceJobResponse](#describeicd10cminferencejobresponse)

### DescribePHIDetectionJob



```js
amazonaws_comprehendmedical.DescribePHIDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribePHIDetectionJobResponse](#describephidetectionjobresponse)

### DescribeRxNormInferenceJob



```js
amazonaws_comprehendmedical.DescribeRxNormInferenceJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [DescribeRxNormInferenceJobResponse](#describerxnorminferencejobresponse)

### DetectEntities



```js
amazonaws_comprehendmedical.DetectEntities({
  "Text": null
}, context)
```

#### Input
* input `object`
  * Text **required**

#### Output
* output [DetectEntitiesResponse](#detectentitiesresponse)

### DetectEntitiesV2



```js
amazonaws_comprehendmedical.DetectEntitiesV2({
  "Text": null
}, context)
```

#### Input
* input `object`
  * Text **required**

#### Output
* output [DetectEntitiesV2Response](#detectentitiesv2response)

### DetectPHI



```js
amazonaws_comprehendmedical.DetectPHI({
  "Text": null
}, context)
```

#### Input
* input `object`
  * Text **required**

#### Output
* output [DetectPHIResponse](#detectphiresponse)

### InferICD10CM



```js
amazonaws_comprehendmedical.InferICD10CM({
  "Text": null
}, context)
```

#### Input
* input `object`
  * Text **required**

#### Output
* output [InferICD10CMResponse](#infericd10cmresponse)

### InferRxNorm



```js
amazonaws_comprehendmedical.InferRxNorm({
  "Text": null
}, context)
```

#### Input
* input `object`
  * Text **required**

#### Output
* output [InferRxNormResponse](#inferrxnormresponse)

### ListEntitiesDetectionV2Jobs



```js
amazonaws_comprehendmedical.ListEntitiesDetectionV2Jobs({}, context)
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
* output [ListEntitiesDetectionV2JobsResponse](#listentitiesdetectionv2jobsresponse)

### ListICD10CMInferenceJobs



```js
amazonaws_comprehendmedical.ListICD10CMInferenceJobs({}, context)
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
* output [ListICD10CMInferenceJobsResponse](#listicd10cminferencejobsresponse)

### ListPHIDetectionJobs



```js
amazonaws_comprehendmedical.ListPHIDetectionJobs({}, context)
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
* output [ListPHIDetectionJobsResponse](#listphidetectionjobsresponse)

### ListRxNormInferenceJobs



```js
amazonaws_comprehendmedical.ListRxNormInferenceJobs({}, context)
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
* output [ListRxNormInferenceJobsResponse](#listrxnorminferencejobsresponse)

### StartEntitiesDetectionV2Job



```js
amazonaws_comprehendmedical.StartEntitiesDetectionV2Job({
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
    * S3Bucket **required**
    * S3Key
  * JobName
  * KMSKey
  * LanguageCode **required**
  * OutputDataConfig **required**
    * S3Bucket **required**
    * S3Key

#### Output
* output [StartEntitiesDetectionV2JobResponse](#startentitiesdetectionv2jobresponse)

### StartICD10CMInferenceJob



```js
amazonaws_comprehendmedical.StartICD10CMInferenceJob({
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
    * S3Bucket **required**
    * S3Key
  * JobName
  * KMSKey
  * LanguageCode **required**
  * OutputDataConfig **required**
    * S3Bucket **required**
    * S3Key

#### Output
* output [StartICD10CMInferenceJobResponse](#starticd10cminferencejobresponse)

### StartPHIDetectionJob



```js
amazonaws_comprehendmedical.StartPHIDetectionJob({
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
    * S3Bucket **required**
    * S3Key
  * JobName
  * KMSKey
  * LanguageCode **required**
  * OutputDataConfig **required**
    * S3Bucket **required**
    * S3Key

#### Output
* output [StartPHIDetectionJobResponse](#startphidetectionjobresponse)

### StartRxNormInferenceJob



```js
amazonaws_comprehendmedical.StartRxNormInferenceJob({
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
    * S3Bucket **required**
    * S3Key
  * JobName
  * KMSKey
  * LanguageCode **required**
  * OutputDataConfig **required**
    * S3Bucket **required**
    * S3Key

#### Output
* output [StartRxNormInferenceJobResponse](#startrxnorminferencejobresponse)

### StopEntitiesDetectionV2Job



```js
amazonaws_comprehendmedical.StopEntitiesDetectionV2Job({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [StopEntitiesDetectionV2JobResponse](#stopentitiesdetectionv2jobresponse)

### StopICD10CMInferenceJob



```js
amazonaws_comprehendmedical.StopICD10CMInferenceJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [StopICD10CMInferenceJobResponse](#stopicd10cminferencejobresponse)

### StopPHIDetectionJob



```js
amazonaws_comprehendmedical.StopPHIDetectionJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [StopPHIDetectionJobResponse](#stopphidetectionjobresponse)

### StopRxNormInferenceJob



```js
amazonaws_comprehendmedical.StopRxNormInferenceJob({
  "JobId": null
}, context)
```

#### Input
* input `object`
  * JobId **required**

#### Output
* output [StopRxNormInferenceJobResponse](#stoprxnorminferencejobresponse)



## Definitions

### AnyLengthString
* AnyLengthString `string`

### Attribute
* Attribute `object`:  An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text. 
  * BeginOffset
  * Category
  * EndOffset
  * Id
  * RelationshipScore
  * RelationshipType
  * Score
  * Text
  * Traits
    * items [Trait](#trait)
  * Type

### AttributeList
* AttributeList `array`
  * items [Attribute](#attribute)

### AttributeName
* AttributeName `string` (values: SIGN, SYMPTOM, DIAGNOSIS, NEGATION)

### BoundedLengthString
* BoundedLengthString `string`

### ClientRequestTokenString
* ClientRequestTokenString `string`

### ComprehendMedicalAsyncJobFilter
* ComprehendMedicalAsyncJobFilter `object`: Provides information for filtering a list of detection jobs.
  * JobName
  * JobStatus
  * SubmitTimeAfter
  * SubmitTimeBefore

### ComprehendMedicalAsyncJobProperties
* ComprehendMedicalAsyncJobProperties `object`: Provides information about a detection job.
  * DataAccessRoleArn
  * EndTime
  * ExpirationTime
  * InputDataConfig
    * S3Bucket **required**
    * S3Key
  * JobId
  * JobName
  * JobStatus
  * KMSKey
  * LanguageCode
  * ManifestFilePath
  * Message
  * ModelVersion
  * OutputDataConfig
    * S3Bucket **required**
    * S3Key
  * SubmitTime

### ComprehendMedicalAsyncJobPropertiesList
* ComprehendMedicalAsyncJobPropertiesList `array`
  * items [ComprehendMedicalAsyncJobProperties](#comprehendmedicalasyncjobproperties)

### DescribeEntitiesDetectionV2JobRequest
* DescribeEntitiesDetectionV2JobRequest `object`
  * JobId **required**

### DescribeEntitiesDetectionV2JobResponse
* DescribeEntitiesDetectionV2JobResponse `object`
  * ComprehendMedicalAsyncJobProperties
    * DataAccessRoleArn
    * EndTime
    * ExpirationTime
    * InputDataConfig
      * S3Bucket **required**
      * S3Key
    * JobId
    * JobName
    * JobStatus
    * KMSKey
    * LanguageCode
    * ManifestFilePath
    * Message
    * ModelVersion
    * OutputDataConfig
      * S3Bucket **required**
      * S3Key
    * SubmitTime

### DescribeICD10CMInferenceJobRequest
* DescribeICD10CMInferenceJobRequest `object`
  * JobId **required**

### DescribeICD10CMInferenceJobResponse
* DescribeICD10CMInferenceJobResponse `object`
  * ComprehendMedicalAsyncJobProperties
    * DataAccessRoleArn
    * EndTime
    * ExpirationTime
    * InputDataConfig
      * S3Bucket **required**
      * S3Key
    * JobId
    * JobName
    * JobStatus
    * KMSKey
    * LanguageCode
    * ManifestFilePath
    * Message
    * ModelVersion
    * OutputDataConfig
      * S3Bucket **required**
      * S3Key
    * SubmitTime

### DescribePHIDetectionJobRequest
* DescribePHIDetectionJobRequest `object`
  * JobId **required**

### DescribePHIDetectionJobResponse
* DescribePHIDetectionJobResponse `object`
  * ComprehendMedicalAsyncJobProperties
    * DataAccessRoleArn
    * EndTime
    * ExpirationTime
    * InputDataConfig
      * S3Bucket **required**
      * S3Key
    * JobId
    * JobName
    * JobStatus
    * KMSKey
    * LanguageCode
    * ManifestFilePath
    * Message
    * ModelVersion
    * OutputDataConfig
      * S3Bucket **required**
      * S3Key
    * SubmitTime

### DescribeRxNormInferenceJobRequest
* DescribeRxNormInferenceJobRequest `object`
  * JobId **required**

### DescribeRxNormInferenceJobResponse
* DescribeRxNormInferenceJobResponse `object`
  * ComprehendMedicalAsyncJobProperties
    * DataAccessRoleArn
    * EndTime
    * ExpirationTime
    * InputDataConfig
      * S3Bucket **required**
      * S3Key
    * JobId
    * JobName
    * JobStatus
    * KMSKey
    * LanguageCode
    * ManifestFilePath
    * Message
    * ModelVersion
    * OutputDataConfig
      * S3Bucket **required**
      * S3Key
    * SubmitTime

### DetectEntitiesRequest
* DetectEntitiesRequest `object`
  * Text **required**

### DetectEntitiesResponse
* DetectEntitiesResponse `object`
  * Entities **required**
    * items [Entity](#entity)
  * ModelVersion **required**
  * PaginationToken
  * UnmappedAttributes
    * items [UnmappedAttribute](#unmappedattribute)

### DetectEntitiesV2Request
* DetectEntitiesV2Request `object`
  * Text **required**

### DetectEntitiesV2Response
* DetectEntitiesV2Response `object`
  * Entities **required**
    * items [Entity](#entity)
  * ModelVersion **required**
  * PaginationToken
  * UnmappedAttributes
    * items [UnmappedAttribute](#unmappedattribute)

### DetectPHIRequest
* DetectPHIRequest `object`
  * Text **required**

### DetectPHIResponse
* DetectPHIResponse `object`
  * Entities **required**
    * items [Entity](#entity)
  * ModelVersion **required**
  * PaginationToken

### Entity
* Entity `object`:  Provides information about an extracted medical entity.
  * Attributes
    * items [Attribute](#attribute)
  * BeginOffset
  * Category
  * EndOffset
  * Id
  * Score
  * Text
  * Traits
    * items [Trait](#trait)
  * Type

### EntityList
* EntityList `array`
  * items [Entity](#entity)

### EntitySubType
* EntitySubType `string` (values: NAME, DOSAGE, ROUTE_OR_MODE, FORM, FREQUENCY, DURATION, GENERIC_NAME, BRAND_NAME, STRENGTH, RATE, ACUITY, TEST_NAME, TEST_VALUE, TEST_UNITS, PROCEDURE_NAME, TREATMENT_NAME, DATE, AGE, CONTACT_POINT, EMAIL, IDENTIFIER, URL, ADDRESS, PROFESSION, SYSTEM_ORGAN_SITE, DIRECTION, QUALITY, QUANTITY, TIME_EXPRESSION, TIME_TO_MEDICATION_NAME, TIME_TO_DX_NAME, TIME_TO_TEST_NAME, TIME_TO_PROCEDURE_NAME, TIME_TO_TREATMENT_NAME)

### EntityType
* EntityType `string` (values: MEDICATION, MEDICAL_CONDITION, PROTECTED_HEALTH_INFORMATION, TEST_TREATMENT_PROCEDURE, ANATOMY, TIME_EXPRESSION)

### Float
* Float `number`

### ICD10CMAttribute
* ICD10CMAttribute `object`: The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>.
  * BeginOffset
  * EndOffset
  * Id
  * RelationshipScore
  * Score
  * Text
  * Traits
    * items [ICD10CMTrait](#icd10cmtrait)
  * Type

### ICD10CMAttributeList
* ICD10CMAttributeList `array`
  * items [ICD10CMAttribute](#icd10cmattribute)

### ICD10CMAttributeType
* ICD10CMAttributeType `string` (values: ACUITY, DIRECTION, SYSTEM_ORGAN_SITE, QUALITY, QUANTITY)

### ICD10CMConcept
* ICD10CMConcept `object`:  The ICD-10-CM concepts that the entity could refer to, along with a score indicating the likelihood of the match.
  * Code
  * Description
  * Score

### ICD10CMConceptList
* ICD10CMConceptList `array`
  * items [ICD10CMConcept](#icd10cmconcept)

### ICD10CMEntity
* ICD10CMEntity `object`: The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. 
  * Attributes
    * items [ICD10CMAttribute](#icd10cmattribute)
  * BeginOffset
  * Category
  * EndOffset
  * ICD10CMConcepts
    * items [ICD10CMConcept](#icd10cmconcept)
  * Id
  * Score
  * Text
  * Traits
    * items [ICD10CMTrait](#icd10cmtrait)
  * Type

### ICD10CMEntityCategory
* ICD10CMEntityCategory `string` (values: MEDICAL_CONDITION)

### ICD10CMEntityList
* ICD10CMEntityList `array`
  * items [ICD10CMEntity](#icd10cmentity)

### ICD10CMEntityType
* ICD10CMEntityType `string` (values: DX_NAME)

### ICD10CMTrait
* ICD10CMTrait `object`: Contextual information for the entity. The traits recognized by InferICD10CM are <code>DIAGNOSIS</code>, <code>SIGN</code>, <code>SYMPTOM</code>, and <code>NEGATION</code>.
  * Name
  * Score

### ICD10CMTraitList
* ICD10CMTraitList `array`
  * items [ICD10CMTrait](#icd10cmtrait)

### ICD10CMTraitName
* ICD10CMTraitName `string` (values: NEGATION, DIAGNOSIS, SIGN, SYMPTOM)

### IamRoleArn
* IamRoleArn `string`

### InferICD10CMRequest
* InferICD10CMRequest `object`
  * Text **required**

### InferICD10CMResponse
* InferICD10CMResponse `object`
  * Entities **required**
    * items [ICD10CMEntity](#icd10cmentity)
  * ModelVersion
  * PaginationToken

### InferRxNormRequest
* InferRxNormRequest `object`
  * Text **required**

### InferRxNormResponse
* InferRxNormResponse `object`
  * Entities **required**
    * items [RxNormEntity](#rxnormentity)
  * ModelVersion
  * PaginationToken

### InputDataConfig
* InputDataConfig `object`: The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. See <a>batch-manifest</a> for more information. 
  * S3Bucket **required**
  * S3Key

### Integer
* Integer `integer`

### InternalServerException


### InvalidEncodingException


### InvalidRequestException


### JobId
* JobId `string`

### JobName
* JobName `string`

### JobStatus
* JobStatus `string` (values: SUBMITTED, IN_PROGRESS, COMPLETED, PARTIAL_SUCCESS, FAILED, STOP_REQUESTED, STOPPED)

### KMSKey
* KMSKey `string`

### LanguageCode
* LanguageCode `string` (values: en)

### ListEntitiesDetectionV2JobsRequest
* ListEntitiesDetectionV2JobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListEntitiesDetectionV2JobsResponse
* ListEntitiesDetectionV2JobsResponse `object`
  * ComprehendMedicalAsyncJobPropertiesList
    * items [ComprehendMedicalAsyncJobProperties](#comprehendmedicalasyncjobproperties)
  * NextToken

### ListICD10CMInferenceJobsRequest
* ListICD10CMInferenceJobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListICD10CMInferenceJobsResponse
* ListICD10CMInferenceJobsResponse `object`
  * ComprehendMedicalAsyncJobPropertiesList
    * items [ComprehendMedicalAsyncJobProperties](#comprehendmedicalasyncjobproperties)
  * NextToken

### ListPHIDetectionJobsRequest
* ListPHIDetectionJobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListPHIDetectionJobsResponse
* ListPHIDetectionJobsResponse `object`
  * ComprehendMedicalAsyncJobPropertiesList
    * items [ComprehendMedicalAsyncJobProperties](#comprehendmedicalasyncjobproperties)
  * NextToken

### ListRxNormInferenceJobsRequest
* ListRxNormInferenceJobsRequest `object`
  * Filter
    * JobName
    * JobStatus
    * SubmitTimeAfter
    * SubmitTimeBefore
  * MaxResults
  * NextToken

### ListRxNormInferenceJobsResponse
* ListRxNormInferenceJobsResponse `object`
  * ComprehendMedicalAsyncJobPropertiesList
    * items [ComprehendMedicalAsyncJobProperties](#comprehendmedicalasyncjobproperties)
  * NextToken

### ManifestFilePath
* ManifestFilePath `string`

### MaxResultsInteger
* MaxResultsInteger `integer`

### ModelVersion
* ModelVersion `string`

### OntologyLinkingBoundedLengthString
* OntologyLinkingBoundedLengthString `string`

### OutputDataConfig
* OutputDataConfig `object`: The output properties for a detection job.
  * S3Bucket **required**
  * S3Key

### RelationshipType
* RelationshipType `string` (values: EVERY, WITH_DOSAGE, ADMINISTERED_VIA, FOR, NEGATIVE, OVERLAP, DOSAGE, ROUTE_OR_MODE, FORM, FREQUENCY, DURATION, STRENGTH, RATE, ACUITY, TEST_VALUE, TEST_UNITS, DIRECTION, SYSTEM_ORGAN_SITE)

### ResourceNotFoundException


### RxNormAttribute
* RxNormAttribute `object`: The extracted attributes that relate to this entity. The attributes recognized by InferRxNorm are <code>DOSAGE</code>, <code>DURATION</code>, <code>FORM</code>, <code>FREQUENCY</code>, <code>RATE</code>, <code>ROUTE_OR_MODE</code>.
  * BeginOffset
  * EndOffset
  * Id
  * RelationshipScore
  * Score
  * Text
  * Traits
    * items [RxNormTrait](#rxnormtrait)
  * Type

### RxNormAttributeList
* RxNormAttributeList `array`
  * items [RxNormAttribute](#rxnormattribute)

### RxNormAttributeType
* RxNormAttributeType `string` (values: DOSAGE, DURATION, FORM, FREQUENCY, RATE, ROUTE_OR_MODE, STRENGTH)

### RxNormConcept
* RxNormConcept `object`: The RxNorm concept that the entity could refer to, along with a score indicating the likelihood of the match.
  * Code
  * Description
  * Score

### RxNormConceptList
* RxNormConceptList `array`
  * items [RxNormConcept](#rxnormconcept)

### RxNormEntity
* RxNormEntity `object`: The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. 
  * Attributes
    * items [RxNormAttribute](#rxnormattribute)
  * BeginOffset
  * Category
  * EndOffset
  * Id
  * RxNormConcepts
    * items [RxNormConcept](#rxnormconcept)
  * Score
  * Text
  * Traits
    * items [RxNormTrait](#rxnormtrait)
  * Type

### RxNormEntityCategory
* RxNormEntityCategory `string` (values: MEDICATION)

### RxNormEntityList
* RxNormEntityList `array`
  * items [RxNormEntity](#rxnormentity)

### RxNormEntityType
* RxNormEntityType `string` (values: BRAND_NAME, GENERIC_NAME)

### RxNormTrait
* RxNormTrait `object`: The contextual information for the entity. InferRxNorm recognizes the trait <code>NEGATION</code>, which is any indication that the patient is not taking a medication. 
  * Name
  * Score

### RxNormTraitList
* RxNormTraitList `array`
  * items [RxNormTrait](#rxnormtrait)

### RxNormTraitName
* RxNormTraitName `string` (values: NEGATION)

### S3Bucket
* S3Bucket `string`

### S3Key
* S3Key `string`

### ServiceUnavailableException


### StartEntitiesDetectionV2JobRequest
* StartEntitiesDetectionV2JobRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * S3Bucket **required**
    * S3Key
  * JobName
  * KMSKey
  * LanguageCode **required**
  * OutputDataConfig **required**
    * S3Bucket **required**
    * S3Key

### StartEntitiesDetectionV2JobResponse
* StartEntitiesDetectionV2JobResponse `object`
  * JobId

### StartICD10CMInferenceJobRequest
* StartICD10CMInferenceJobRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * S3Bucket **required**
    * S3Key
  * JobName
  * KMSKey
  * LanguageCode **required**
  * OutputDataConfig **required**
    * S3Bucket **required**
    * S3Key

### StartICD10CMInferenceJobResponse
* StartICD10CMInferenceJobResponse `object`
  * JobId

### StartPHIDetectionJobRequest
* StartPHIDetectionJobRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * S3Bucket **required**
    * S3Key
  * JobName
  * KMSKey
  * LanguageCode **required**
  * OutputDataConfig **required**
    * S3Bucket **required**
    * S3Key

### StartPHIDetectionJobResponse
* StartPHIDetectionJobResponse `object`
  * JobId

### StartRxNormInferenceJobRequest
* StartRxNormInferenceJobRequest `object`
  * ClientRequestToken
  * DataAccessRoleArn **required**
  * InputDataConfig **required**
    * S3Bucket **required**
    * S3Key
  * JobName
  * KMSKey
  * LanguageCode **required**
  * OutputDataConfig **required**
    * S3Bucket **required**
    * S3Key

### StartRxNormInferenceJobResponse
* StartRxNormInferenceJobResponse `object`
  * JobId

### StopEntitiesDetectionV2JobRequest
* StopEntitiesDetectionV2JobRequest `object`
  * JobId **required**

### StopEntitiesDetectionV2JobResponse
* StopEntitiesDetectionV2JobResponse `object`
  * JobId

### StopICD10CMInferenceJobRequest
* StopICD10CMInferenceJobRequest `object`
  * JobId **required**

### StopICD10CMInferenceJobResponse
* StopICD10CMInferenceJobResponse `object`
  * JobId

### StopPHIDetectionJobRequest
* StopPHIDetectionJobRequest `object`
  * JobId **required**

### StopPHIDetectionJobResponse
* StopPHIDetectionJobResponse `object`
  * JobId

### StopRxNormInferenceJobRequest
* StopRxNormInferenceJobRequest `object`
  * JobId **required**

### StopRxNormInferenceJobResponse
* StopRxNormInferenceJobResponse `object`
  * JobId

### String
* String `string`

### TextSizeLimitExceededException


### Timestamp
* Timestamp `string`

### TooManyRequestsException


### Trait
* Trait `object`:  Provides contextual information about the extracted entity. 
  * Name
  * Score

### TraitList
* TraitList `array`
  * items [Trait](#trait)

### UnmappedAttribute
* UnmappedAttribute `object`:  An attribute that we extracted, but were unable to relate to an entity. 
  * Attribute
    * BeginOffset
    * Category
    * EndOffset
    * Id
    * RelationshipScore
    * RelationshipType
    * Score
    * Text
    * Traits
      * items [Trait](#trait)
    * Type
  * Type

### UnmappedAttributeList
* UnmappedAttributeList `array`
  * items [UnmappedAttribute](#unmappedattribute)

### ValidationException



