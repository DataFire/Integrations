# @datafire/amazonaws_frauddetector

Client library for Amazon Fraud Detector

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_frauddetector
```
```js
let amazonaws_frauddetector = require('@datafire/amazonaws_frauddetector').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This is the Amazon Fraud Detector API Reference. This guide is for developers who need detailed information about Amazon Fraud Detector API actions, data types, and errors. For more information about Amazon Fraud Detector features, see the <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/">Amazon Fraud Detector User Guide</a>.

## Actions

### BatchCreateVariable



```js
amazonaws_frauddetector.BatchCreateVariable({
  "variableEntries": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * variableEntries **required**
    * items [VariableEntry](#variableentry)

#### Output
* output [BatchCreateVariableResult](#batchcreatevariableresult)

### BatchGetVariable



```js
amazonaws_frauddetector.BatchGetVariable({
  "names": null
}, context)
```

#### Input
* input `object`
  * names **required**
    * items [string](#string)

#### Output
* output [BatchGetVariableResult](#batchgetvariableresult)

### CreateDetectorVersion



```js
amazonaws_frauddetector.CreateDetectorVersion({
  "detectorId": null,
  "rules": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * description
  * detectorId **required**
  * externalModelEndpoints
    * items [string](#string)
  * modelVersions
    * items [ModelVersion](#modelversion)
  * ruleExecutionMode
  * rules **required**
    * items [Rule](#rule)

#### Output
* output [CreateDetectorVersionResult](#createdetectorversionresult)

### CreateModel



```js
amazonaws_frauddetector.CreateModel({
  "modelId": null,
  "modelType": null,
  "eventTypeName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * description
  * eventTypeName **required**
  * modelId **required**
  * modelType **required**

#### Output
* output [CreateModelResult](#createmodelresult)

### CreateModelVersion



```js
amazonaws_frauddetector.CreateModelVersion({
  "modelId": null,
  "modelType": null,
  "trainingDataSource": null,
  "trainingDataSchema": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * externalEventsDetail
    * dataAccessRoleArn **required**
    * dataLocation **required**
  * modelId **required**
  * modelType **required**
  * trainingDataSchema **required**
    * labelSchema **required** [LabelSchema](#labelschema)
    * modelVariables **required**
      * items [string](#string)
  * trainingDataSource **required**

#### Output
* output [CreateModelVersionResult](#createmodelversionresult)

### CreateRule



```js
amazonaws_frauddetector.CreateRule({
  "ruleId": null,
  "detectorId": null,
  "expression": null,
  "language": null,
  "outcomes": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * description
  * detectorId **required**
  * expression **required**
  * language **required**
  * outcomes **required**
    * items [string](#string)
  * ruleId **required**

#### Output
* output [CreateRuleResult](#createruleresult)

### CreateVariable



```js
amazonaws_frauddetector.CreateVariable({
  "name": null,
  "dataType": null,
  "dataSource": null,
  "defaultValue": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * dataSource **required**
  * dataType **required**
  * defaultValue **required**
  * description
  * name **required**
  * variableType

#### Output
* output [CreateVariableResult](#createvariableresult)

### DeleteDetector



```js
amazonaws_frauddetector.DeleteDetector({
  "detectorId": null
}, context)
```

#### Input
* input `object`
  * detectorId **required**

#### Output
* output [DeleteDetectorResult](#deletedetectorresult)

### DeleteDetectorVersion



```js
amazonaws_frauddetector.DeleteDetectorVersion({
  "detectorId": null,
  "detectorVersionId": null
}, context)
```

#### Input
* input `object`
  * detectorId **required**
  * detectorVersionId **required**

#### Output
* output [DeleteDetectorVersionResult](#deletedetectorversionresult)

### DeleteEntityType



```js
amazonaws_frauddetector.DeleteEntityType({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**

#### Output
* output [DeleteEntityTypeResult](#deleteentitytyperesult)

### DeleteEvent



```js
amazonaws_frauddetector.DeleteEvent({
  "eventId": null,
  "eventTypeName": null
}, context)
```

#### Input
* input `object`
  * eventId **required**
  * eventTypeName **required**

#### Output
* output [DeleteEventResult](#deleteeventresult)

### DeleteEventType



```js
amazonaws_frauddetector.DeleteEventType({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**

#### Output
* output [DeleteEventTypeResult](#deleteeventtyperesult)

### DeleteExternalModel



```js
amazonaws_frauddetector.DeleteExternalModel({
  "modelEndpoint": null
}, context)
```

#### Input
* input `object`
  * modelEndpoint **required**

#### Output
* output [DeleteExternalModelResult](#deleteexternalmodelresult)

### DeleteLabel



```js
amazonaws_frauddetector.DeleteLabel({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**

#### Output
* output [DeleteLabelResult](#deletelabelresult)

### DeleteModel



```js
amazonaws_frauddetector.DeleteModel({
  "modelId": null,
  "modelType": null
}, context)
```

#### Input
* input `object`
  * modelId **required**
  * modelType **required**

#### Output
* output [DeleteModelResult](#deletemodelresult)

### DeleteModelVersion



```js
amazonaws_frauddetector.DeleteModelVersion({
  "modelId": null,
  "modelType": null,
  "modelVersionNumber": null
}, context)
```

#### Input
* input `object`
  * modelId **required**
  * modelType **required**
  * modelVersionNumber **required**

#### Output
* output [DeleteModelVersionResult](#deletemodelversionresult)

### DeleteOutcome



```js
amazonaws_frauddetector.DeleteOutcome({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**

#### Output
* output [DeleteOutcomeResult](#deleteoutcomeresult)

### DeleteRule



```js
amazonaws_frauddetector.DeleteRule({
  "rule": {
    "detectorId": null,
    "ruleId": null,
    "ruleVersion": null
  }
}, context)
```

#### Input
* input `object`
  * rule **required** [Rule](#rule)

#### Output
* output [DeleteRuleResult](#deleteruleresult)

### DeleteVariable



```js
amazonaws_frauddetector.DeleteVariable({
  "name": null
}, context)
```

#### Input
* input `object`
  * name **required**

#### Output
* output [DeleteVariableResult](#deletevariableresult)

### DescribeDetector



```js
amazonaws_frauddetector.DescribeDetector({
  "detectorId": null
}, context)
```

#### Input
* input `object`
  * detectorId **required**
  * maxResults
  * nextToken

#### Output
* output [DescribeDetectorResult](#describedetectorresult)

### DescribeModelVersions



```js
amazonaws_frauddetector.DescribeModelVersions({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * modelId
  * modelType
  * modelVersionNumber
  * nextToken

#### Output
* output [DescribeModelVersionsResult](#describemodelversionsresult)

### GetDetectorVersion



```js
amazonaws_frauddetector.GetDetectorVersion({
  "detectorId": null,
  "detectorVersionId": null
}, context)
```

#### Input
* input `object`
  * detectorId **required**
  * detectorVersionId **required**

#### Output
* output [GetDetectorVersionResult](#getdetectorversionresult)

### GetDetectors



```js
amazonaws_frauddetector.GetDetectors({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * detectorId
  * maxResults
  * nextToken

#### Output
* output [GetDetectorsResult](#getdetectorsresult)

### GetEntityTypes



```js
amazonaws_frauddetector.GetEntityTypes({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * name
  * nextToken

#### Output
* output [GetEntityTypesResult](#getentitytypesresult)

### GetEventPrediction



```js
amazonaws_frauddetector.GetEventPrediction({
  "detectorId": null,
  "eventId": null,
  "eventTypeName": null,
  "entities": null,
  "eventTimestamp": null,
  "eventVariables": null
}, context)
```

#### Input
* input `object`
  * detectorId **required**
  * detectorVersionId
  * entities **required**
    * items [Entity](#entity)
  * eventId **required**
  * eventTimestamp **required**
  * eventTypeName **required**
  * eventVariables **required**
  * externalModelEndpointDataBlobs

#### Output
* output [GetEventPredictionResult](#geteventpredictionresult)

### GetEventTypes



```js
amazonaws_frauddetector.GetEventTypes({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * name
  * nextToken

#### Output
* output [GetEventTypesResult](#geteventtypesresult)

### GetExternalModels



```js
amazonaws_frauddetector.GetExternalModels({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * modelEndpoint
  * nextToken

#### Output
* output [GetExternalModelsResult](#getexternalmodelsresult)

### GetKMSEncryptionKey



```js
amazonaws_frauddetector.GetKMSEncryptionKey({}, context)
```

#### Input
* input `object`

#### Output
* output [GetKMSEncryptionKeyResult](#getkmsencryptionkeyresult)

### GetLabels



```js
amazonaws_frauddetector.GetLabels({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * name
  * nextToken

#### Output
* output [GetLabelsResult](#getlabelsresult)

### GetModelVersion



```js
amazonaws_frauddetector.GetModelVersion({
  "modelId": null,
  "modelType": null,
  "modelVersionNumber": null
}, context)
```

#### Input
* input `object`
  * modelId **required**
  * modelType **required**
  * modelVersionNumber **required**

#### Output
* output [GetModelVersionResult](#getmodelversionresult)

### GetModels



```js
amazonaws_frauddetector.GetModels({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * modelId
  * modelType
  * nextToken

#### Output
* output [GetModelsResult](#getmodelsresult)

### GetOutcomes



```js
amazonaws_frauddetector.GetOutcomes({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * name
  * nextToken

#### Output
* output [GetOutcomesResult](#getoutcomesresult)

### GetRules



```js
amazonaws_frauddetector.GetRules({
  "detectorId": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * detectorId **required**
  * maxResults
  * nextToken
  * ruleId
  * ruleVersion

#### Output
* output [GetRulesResult](#getrulesresult)

### GetVariables



```js
amazonaws_frauddetector.GetVariables({}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * name
  * nextToken

#### Output
* output [GetVariablesResult](#getvariablesresult)

### ListTagsForResource



```js
amazonaws_frauddetector.ListTagsForResource({
  "resourceARN": null
}, context)
```

#### Input
* input `object`
  * maxResults `string`
  * nextToken `string`
  * maxResults
  * nextToken
  * resourceARN **required**

#### Output
* output [ListTagsForResourceResult](#listtagsforresourceresult)

### PutDetector



```js
amazonaws_frauddetector.PutDetector({
  "detectorId": null,
  "eventTypeName": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * description
  * detectorId **required**
  * eventTypeName **required**

#### Output
* output [PutDetectorResult](#putdetectorresult)

### PutEntityType



```js
amazonaws_frauddetector.PutEntityType({
  "name": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * description
  * name **required**

#### Output
* output [PutEntityTypeResult](#putentitytyperesult)

### PutEventType



```js
amazonaws_frauddetector.PutEventType({
  "name": null,
  "eventVariables": null,
  "entityTypes": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * description
  * entityTypes **required**
    * items [string](#string)
  * eventVariables **required**
    * items [string](#string)
  * labels
    * items [string](#string)
  * name **required**

#### Output
* output [PutEventTypeResult](#puteventtyperesult)

### PutExternalModel



```js
amazonaws_frauddetector.PutExternalModel({
  "modelEndpoint": null,
  "modelSource": null,
  "invokeModelEndpointRoleArn": null,
  "inputConfiguration": null,
  "outputConfiguration": null,
  "modelEndpointStatus": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * inputConfiguration **required**
    * csvInputTemplate
    * eventTypeName
    * format
    * jsonInputTemplate
    * useEventVariables **required**
  * invokeModelEndpointRoleArn **required**
  * modelEndpoint **required**
  * modelEndpointStatus **required**
  * modelSource **required**
  * outputConfiguration **required**
    * csvIndexToVariableMap
    * format **required**
    * jsonKeyToVariableMap

#### Output
* output [PutExternalModelResult](#putexternalmodelresult)

### PutKMSEncryptionKey



```js
amazonaws_frauddetector.PutKMSEncryptionKey({
  "kmsEncryptionKeyArn": null
}, context)
```

#### Input
* input `object`
  * kmsEncryptionKeyArn **required**

#### Output
* output [PutKMSEncryptionKeyResult](#putkmsencryptionkeyresult)

### PutLabel



```js
amazonaws_frauddetector.PutLabel({
  "name": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * description
  * name **required**

#### Output
* output [PutLabelResult](#putlabelresult)

### PutOutcome



```js
amazonaws_frauddetector.PutOutcome({
  "name": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * description
  * name **required**

#### Output
* output [PutOutcomeResult](#putoutcomeresult)

### TagResource



```js
amazonaws_frauddetector.TagResource({
  "resourceARN": null,
  "tags": null
}, context)
```

#### Input
* input `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceARN **required**

#### Output
* output [TagResourceResult](#tagresourceresult)

### UntagResource



```js
amazonaws_frauddetector.UntagResource({
  "resourceARN": null,
  "tagKeys": null
}, context)
```

#### Input
* input `object`
  * resourceARN **required**
  * tagKeys **required**
    * items [tagKey](#tagkey)

#### Output
* output [UntagResourceResult](#untagresourceresult)

### UpdateDetectorVersion



```js
amazonaws_frauddetector.UpdateDetectorVersion({
  "detectorId": null,
  "detectorVersionId": null,
  "externalModelEndpoints": null,
  "rules": null
}, context)
```

#### Input
* input `object`
  * description
  * detectorId **required**
  * detectorVersionId **required**
  * externalModelEndpoints **required**
    * items [string](#string)
  * modelVersions
    * items [ModelVersion](#modelversion)
  * ruleExecutionMode
  * rules **required**
    * items [Rule](#rule)

#### Output
* output [UpdateDetectorVersionResult](#updatedetectorversionresult)

### UpdateDetectorVersionMetadata



```js
amazonaws_frauddetector.UpdateDetectorVersionMetadata({
  "detectorId": null,
  "detectorVersionId": null,
  "description": null
}, context)
```

#### Input
* input `object`
  * description **required**
  * detectorId **required**
  * detectorVersionId **required**

#### Output
* output [UpdateDetectorVersionMetadataResult](#updatedetectorversionmetadataresult)

### UpdateDetectorVersionStatus



```js
amazonaws_frauddetector.UpdateDetectorVersionStatus({
  "detectorId": null,
  "detectorVersionId": null,
  "status": null
}, context)
```

#### Input
* input `object`
  * detectorId **required**
  * detectorVersionId **required**
  * status **required**

#### Output
* output [UpdateDetectorVersionStatusResult](#updatedetectorversionstatusresult)

### UpdateModel



```js
amazonaws_frauddetector.UpdateModel({
  "modelId": null,
  "modelType": null
}, context)
```

#### Input
* input `object`
  * description
  * modelId **required**
  * modelType **required**

#### Output
* output [UpdateModelResult](#updatemodelresult)

### UpdateModelVersion



```js
amazonaws_frauddetector.UpdateModelVersion({
  "modelId": null,
  "modelType": null,
  "majorVersionNumber": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * externalEventsDetail
    * dataAccessRoleArn **required**
    * dataLocation **required**
  * majorVersionNumber **required**
  * modelId **required**
  * modelType **required**

#### Output
* output [UpdateModelVersionResult](#updatemodelversionresult)

### UpdateModelVersionStatus



```js
amazonaws_frauddetector.UpdateModelVersionStatus({
  "modelId": null,
  "modelType": null,
  "modelVersionNumber": null,
  "status": null
}, context)
```

#### Input
* input `object`
  * modelId **required**
  * modelType **required**
  * modelVersionNumber **required**
  * status **required**

#### Output
* output [UpdateModelVersionStatusResult](#updatemodelversionstatusresult)

### UpdateRuleMetadata



```js
amazonaws_frauddetector.UpdateRuleMetadata({
  "rule": null,
  "description": null
}, context)
```

#### Input
* input `object`
  * description **required**
  * rule **required**
    * detectorId **required**
    * ruleId **required**
    * ruleVersion **required**

#### Output
* output [UpdateRuleMetadataResult](#updaterulemetadataresult)

### UpdateRuleVersion



```js
amazonaws_frauddetector.UpdateRuleVersion({
  "rule": null,
  "expression": null,
  "language": null,
  "outcomes": null
}, context)
```

#### Input
* input `object`
  * tags
    * items [Tag](#tag)
  * description
  * expression **required**
  * language **required**
  * outcomes **required**
    * items [string](#string)
  * rule **required**
    * detectorId **required**
    * ruleId **required**
    * ruleVersion **required**

#### Output
* output [UpdateRuleVersionResult](#updateruleversionresult)

### UpdateVariable



```js
amazonaws_frauddetector.UpdateVariable({
  "name": null
}, context)
```

#### Input
* input `object`
  * defaultValue
  * description
  * name **required**
  * variableType

#### Output
* output [UpdateVariableResult](#updatevariableresult)



## Definitions

### AccessDeniedException


### BatchCreateVariableError
* BatchCreateVariableError `object`: Provides the error of the batch create variable API.
  * code
  * message
  * name

### BatchCreateVariableErrorList
* BatchCreateVariableErrorList `array`
  * items [BatchCreateVariableError](#batchcreatevariableerror)

### BatchCreateVariableRequest
* BatchCreateVariableRequest `object`
  * tags
    * items [Tag](#tag)
  * variableEntries **required**
    * items [VariableEntry](#variableentry)

### BatchCreateVariableResult
* BatchCreateVariableResult `object`
  * errors
    * items [BatchCreateVariableError](#batchcreatevariableerror)

### BatchGetVariableError
* BatchGetVariableError `object`: Provides the error of the batch get variable API.
  * code
  * message
  * name

### BatchGetVariableErrorList
* BatchGetVariableErrorList `array`
  * items [BatchGetVariableError](#batchgetvariableerror)

### BatchGetVariableRequest
* BatchGetVariableRequest `object`
  * names **required**
    * items [string](#string)

### BatchGetVariableResult
* BatchGetVariableResult `object`
  * errors
    * items [BatchGetVariableError](#batchgetvariableerror)
  * variables
    * items [Variable](#variable)

### ConflictException


### CreateDetectorVersionRequest
* CreateDetectorVersionRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * detectorId **required**
  * externalModelEndpoints
    * items [string](#string)
  * modelVersions
    * items [ModelVersion](#modelversion)
  * ruleExecutionMode
  * rules **required**
    * items [Rule](#rule)

### CreateDetectorVersionResult
* CreateDetectorVersionResult `object`
  * detectorId
  * detectorVersionId
  * status

### CreateModelRequest
* CreateModelRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * eventTypeName **required**
  * modelId **required**
  * modelType **required**

### CreateModelResult
* CreateModelResult `object`

### CreateModelVersionRequest
* CreateModelVersionRequest `object`
  * tags
    * items [Tag](#tag)
  * externalEventsDetail
    * dataAccessRoleArn **required**
    * dataLocation **required**
  * modelId **required**
  * modelType **required**
  * trainingDataSchema **required**
    * labelSchema **required** [LabelSchema](#labelschema)
    * modelVariables **required**
      * items [string](#string)
  * trainingDataSource **required**

### CreateModelVersionResult
* CreateModelVersionResult `object`
  * modelId
  * modelType
  * modelVersionNumber
  * status

### CreateRuleRequest
* CreateRuleRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * detectorId **required**
  * expression **required**
  * language **required**
  * outcomes **required**
    * items [string](#string)
  * ruleId **required**

### CreateRuleResult
* CreateRuleResult `object`
  * rule
    * detectorId **required**
    * ruleId **required**
    * ruleVersion **required**

### CreateVariableRequest
* CreateVariableRequest `object`
  * tags
    * items [Tag](#tag)
  * dataSource **required**
  * dataType **required**
  * defaultValue **required**
  * description
  * name **required**
  * variableType

### CreateVariableResult
* CreateVariableResult `object`

### CsvIndexToVariableMap
* CsvIndexToVariableMap `object`

### DataSource
* DataSource `string` (values: EVENT, MODEL_SCORE, EXTERNAL_MODEL_SCORE)

### DataType
* DataType `string` (values: STRING, INTEGER, FLOAT, BOOLEAN)

### DataValidationMetrics
* DataValidationMetrics `object`: The model training validation messages.
  * fieldLevelMessages
    * items [FieldValidationMessage](#fieldvalidationmessage)
  * fileLevelMessages
    * items [FileValidationMessage](#filevalidationmessage)

### DeleteDetectorRequest
* DeleteDetectorRequest `object`
  * detectorId **required**

### DeleteDetectorResult
* DeleteDetectorResult `object`

### DeleteDetectorVersionRequest
* DeleteDetectorVersionRequest `object`
  * detectorId **required**
  * detectorVersionId **required**

### DeleteDetectorVersionResult
* DeleteDetectorVersionResult `object`

### DeleteEntityTypeRequest
* DeleteEntityTypeRequest `object`
  * name **required**

### DeleteEntityTypeResult
* DeleteEntityTypeResult `object`

### DeleteEventRequest
* DeleteEventRequest `object`
  * eventId **required**
  * eventTypeName **required**

### DeleteEventResult
* DeleteEventResult `object`

### DeleteEventTypeRequest
* DeleteEventTypeRequest `object`
  * name **required**

### DeleteEventTypeResult
* DeleteEventTypeResult `object`

### DeleteExternalModelRequest
* DeleteExternalModelRequest `object`
  * modelEndpoint **required**

### DeleteExternalModelResult
* DeleteExternalModelResult `object`

### DeleteLabelRequest
* DeleteLabelRequest `object`
  * name **required**

### DeleteLabelResult
* DeleteLabelResult `object`

### DeleteModelRequest
* DeleteModelRequest `object`
  * modelId **required**
  * modelType **required**

### DeleteModelResult
* DeleteModelResult `object`

### DeleteModelVersionRequest
* DeleteModelVersionRequest `object`
  * modelId **required**
  * modelType **required**
  * modelVersionNumber **required**

### DeleteModelVersionResult
* DeleteModelVersionResult `object`

### DeleteOutcomeRequest
* DeleteOutcomeRequest `object`
  * name **required**

### DeleteOutcomeResult
* DeleteOutcomeResult `object`

### DeleteRuleRequest
* DeleteRuleRequest `object`
  * rule **required** [Rule](#rule)

### DeleteRuleResult
* DeleteRuleResult `object`

### DeleteVariableRequest
* DeleteVariableRequest `object`
  * name **required**

### DeleteVariableResult
* DeleteVariableResult `object`

### DescribeDetectorRequest
* DescribeDetectorRequest `object`
  * detectorId **required**
  * maxResults
  * nextToken

### DescribeDetectorResult
* DescribeDetectorResult `object`
  * arn
  * detectorId
  * detectorVersionSummaries
    * items [DetectorVersionSummary](#detectorversionsummary)
  * nextToken

### DescribeModelVersionsRequest
* DescribeModelVersionsRequest `object`
  * maxResults
  * modelId
  * modelType
  * modelVersionNumber
  * nextToken

### DescribeModelVersionsResult
* DescribeModelVersionsResult `object`
  * modelVersionDetails
    * items [ModelVersionDetail](#modelversiondetail)
  * nextToken

### Detector
* Detector `object`: The detector.
  * arn
  * createdTime
  * description
  * detectorId
  * eventTypeName
  * lastUpdatedTime

### DetectorList
* DetectorList `array`
  * items [Detector](#detector)

### DetectorVersionMaxResults
* DetectorVersionMaxResults `integer`

### DetectorVersionStatus
* DetectorVersionStatus `string` (values: DRAFT, ACTIVE, INACTIVE)

### DetectorVersionSummary
* DetectorVersionSummary `object`: The summary of the detector version.
  * description
  * detectorVersionId
  * lastUpdatedTime
  * status

### DetectorVersionSummaryList
* DetectorVersionSummaryList `array`
  * items [DetectorVersionSummary](#detectorversionsummary)

### DetectorsMaxResults
* DetectorsMaxResults `integer`

### Entity
* Entity `object`: The entity details. 
  * entityId **required**
  * entityType **required**

### EntityType
* EntityType `object`: The entity type details.
  * arn
  * createdTime
  * description
  * lastUpdatedTime
  * name

### EventType
* EventType `object`: The event type details.
  * arn
  * createdTime
  * description
  * entityTypes
    * items [string](#string)
  * eventVariables
    * items [string](#string)
  * labels
    * items [string](#string)
  * lastUpdatedTime
  * name

### EventVariableMap
* EventVariableMap `object`

### ExternalEventsDetail
* ExternalEventsDetail `object`: Details for the external events data used for model version training.
  * dataAccessRoleArn **required**
  * dataLocation **required**

### ExternalModel
* ExternalModel `object`: The Amazon SageMaker model.
  * arn
  * createdTime
  * inputConfiguration
    * csvInputTemplate
    * eventTypeName
    * format
    * jsonInputTemplate
    * useEventVariables **required**
  * invokeModelEndpointRoleArn
  * lastUpdatedTime
  * modelEndpoint
  * modelEndpointStatus
  * modelSource
  * outputConfiguration
    * csvIndexToVariableMap
    * format **required**
    * jsonKeyToVariableMap

### ExternalModelEndpointDataBlobMap
* ExternalModelEndpointDataBlobMap `object`

### ExternalModelList
* ExternalModelList `array`
  * items [ExternalModel](#externalmodel)

### ExternalModelsMaxResults
* ExternalModelsMaxResults `integer`

### FieldValidationMessage
* FieldValidationMessage `object`: The message details.
  * content
  * fieldName
  * identifier
  * title
  * type

### FileValidationMessage
* FileValidationMessage `object`: The message details.
  * content
  * title
  * type

### GetDetectorVersionRequest
* GetDetectorVersionRequest `object`
  * detectorId **required**
  * detectorVersionId **required**

### GetDetectorVersionResult
* GetDetectorVersionResult `object`
  * arn
  * createdTime
  * description
  * detectorId
  * detectorVersionId
  * externalModelEndpoints
    * items [string](#string)
  * lastUpdatedTime
  * modelVersions
    * items [ModelVersion](#modelversion)
  * ruleExecutionMode
  * rules
    * items [Rule](#rule)
  * status

### GetDetectorsRequest
* GetDetectorsRequest `object`
  * detectorId
  * maxResults
  * nextToken

### GetDetectorsResult
* GetDetectorsResult `object`
  * detectors
    * items [Detector](#detector)
  * nextToken

### GetEntityTypesRequest
* GetEntityTypesRequest `object`
  * maxResults
  * name
  * nextToken

### GetEntityTypesResult
* GetEntityTypesResult `object`
  * entityTypes
    * items [EntityType](#entitytype)
  * nextToken

### GetEventPredictionRequest
* GetEventPredictionRequest `object`
  * detectorId **required**
  * detectorVersionId
  * entities **required**
    * items [Entity](#entity)
  * eventId **required**
  * eventTimestamp **required**
  * eventTypeName **required**
  * eventVariables **required**
  * externalModelEndpointDataBlobs

### GetEventPredictionResult
* GetEventPredictionResult `object`
  * modelScores
    * items [ModelScores](#modelscores)
  * ruleResults
    * items [RuleResult](#ruleresult)

### GetEventTypesRequest
* GetEventTypesRequest `object`
  * maxResults
  * name
  * nextToken

### GetEventTypesResult
* GetEventTypesResult `object`
  * eventTypes
    * items [EventType](#eventtype)
  * nextToken

### GetExternalModelsRequest
* GetExternalModelsRequest `object`
  * maxResults
  * modelEndpoint
  * nextToken

### GetExternalModelsResult
* GetExternalModelsResult `object`
  * externalModels
    * items [ExternalModel](#externalmodel)
  * nextToken

### GetKMSEncryptionKeyResult
* GetKMSEncryptionKeyResult `object`
  * kmsKey
    * kmsEncryptionKeyArn

### GetLabelsRequest
* GetLabelsRequest `object`
  * maxResults
  * name
  * nextToken

### GetLabelsResult
* GetLabelsResult `object`
  * labels
    * items [Label](#label)
  * nextToken

### GetModelVersionRequest
* GetModelVersionRequest `object`
  * modelId **required**
  * modelType **required**
  * modelVersionNumber **required**

### GetModelVersionResult
* GetModelVersionResult `object`
  * arn
  * externalEventsDetail
    * dataAccessRoleArn **required**
    * dataLocation **required**
  * modelId
  * modelType
  * modelVersionNumber
  * status
  * trainingDataSchema
    * labelSchema **required** [LabelSchema](#labelschema)
    * modelVariables **required**
      * items [string](#string)
  * trainingDataSource

### GetModelsRequest
* GetModelsRequest `object`
  * maxResults
  * modelId
  * modelType
  * nextToken

### GetModelsResult
* GetModelsResult `object`
  * models
    * items [Model](#model)
  * nextToken

### GetOutcomesRequest
* GetOutcomesRequest `object`
  * maxResults
  * name
  * nextToken

### GetOutcomesResult
* GetOutcomesResult `object`
  * nextToken
  * outcomes
    * items [Outcome](#outcome)

### GetRulesRequest
* GetRulesRequest `object`
  * detectorId **required**
  * maxResults
  * nextToken
  * ruleId
  * ruleVersion

### GetRulesResult
* GetRulesResult `object`
  * nextToken
  * ruleDetails
    * items [RuleDetail](#ruledetail)

### GetVariablesRequest
* GetVariablesRequest `object`
  * maxResults
  * name
  * nextToken

### GetVariablesResult
* GetVariablesResult `object`
  * nextToken
  * variables
    * items [Variable](#variable)

### InternalServerException


### JsonKeyToVariableMap
* JsonKeyToVariableMap `object`

### KMSKey
* KMSKey `object`: The KMS key details.
  * kmsEncryptionKeyArn

### KmsEncryptionKeyArn
* KmsEncryptionKeyArn `string`

### Label
* Label `object`: The label details.
  * arn
  * createdTime
  * description
  * lastUpdatedTime
  * name

### LabelSchema
* LabelSchema `object`: The label schema.
  * labelMapper **required**

### Language
* Language `string` (values: DETECTORPL)

### ListOfModelScores
* ListOfModelScores `array`
  * items [ModelScores](#modelscores)

### ListOfModelVersions
* ListOfModelVersions `array`
  * items [ModelVersion](#modelversion)

### ListOfRuleResults
* ListOfRuleResults `array`
  * items [RuleResult](#ruleresult)

### ListOfStrings
* ListOfStrings `array`
  * items [string](#string)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * maxResults
  * nextToken
  * resourceARN **required**

### ListTagsForResourceResult
* ListTagsForResourceResult `object`
  * tags
    * items [Tag](#tag)
  * nextToken

### MetricDataPoint
* MetricDataPoint `object`: Model performance metrics data points.
  * fpr
  * precision
  * threshold
  * tpr

### Model
* Model `object`: The model.
  * arn
  * createdTime
  * description
  * eventTypeName
  * lastUpdatedTime
  * modelId
  * modelType

### ModelEndpointDataBlob
* ModelEndpointDataBlob `object`: A pre-formed Amazon SageMaker model input you can include if your detector version includes an imported Amazon SageMaker model endpoint with pass-through input configuration.
  * byteBuffer
  * contentType

### ModelEndpointStatus
* ModelEndpointStatus `string` (values: ASSOCIATED, DISSOCIATED)

### ModelInputConfiguration
* ModelInputConfiguration `object`: The Amazon SageMaker model input configuration.
  * csvInputTemplate
  * eventTypeName
  * format
  * jsonInputTemplate
  * useEventVariables **required**

### ModelInputDataFormat
* ModelInputDataFormat `string` (values: TEXT_CSV, APPLICATION_JSON)

### ModelOutputConfiguration
* ModelOutputConfiguration `object`: Provides the Amazon Sagemaker model output configuration.
  * csvIndexToVariableMap
  * format **required**
  * jsonKeyToVariableMap

### ModelOutputDataFormat
* ModelOutputDataFormat `string` (values: TEXT_CSV, APPLICATION_JSONLINES)

### ModelPredictionMap
* ModelPredictionMap `object`

### ModelScores
* ModelScores `object`: The fraud prediction scores.
  * modelVersion
    * arn
    * modelId **required**
    * modelType **required**
    * modelVersionNumber **required**
  * scores

### ModelSource
* ModelSource `string` (values: SAGEMAKER)

### ModelTypeEnum
* ModelTypeEnum `string` (values: ONLINE_FRAUD_INSIGHTS)

### ModelVersion
* ModelVersion `object`: The model version.
  * arn
  * modelId **required**
  * modelType **required**
  * modelVersionNumber **required**

### ModelVersionDetail
* ModelVersionDetail `object`: The details of the model version.
  * arn
  * createdTime
  * externalEventsDetail
    * dataAccessRoleArn **required**
    * dataLocation **required**
  * lastUpdatedTime
  * modelId
  * modelType
  * modelVersionNumber
  * status
  * trainingDataSchema
    * labelSchema **required** [LabelSchema](#labelschema)
    * modelVariables **required**
      * items [string](#string)
  * trainingDataSource
  * trainingResult
    * dataValidationMetrics
      * fieldLevelMessages
        * items [FieldValidationMessage](#fieldvalidationmessage)
      * fileLevelMessages
        * items [FileValidationMessage](#filevalidationmessage)
    * trainingMetrics
      * auc
      * metricDataPoints
        * items [MetricDataPoint](#metricdatapoint)

### ModelVersionStatus
* ModelVersionStatus `string` (values: ACTIVE, INACTIVE)

### NameList
* NameList `array`
  * items [string](#string)

### NonEmptyListOfStrings
* NonEmptyListOfStrings `array`
  * items [string](#string)

### Outcome
* Outcome `object`: The outcome.
  * arn
  * createdTime
  * description
  * lastUpdatedTime
  * name

### OutcomeList
* OutcomeList `array`
  * items [Outcome](#outcome)

### OutcomesMaxResults
* OutcomesMaxResults `integer`

### PutDetectorRequest
* PutDetectorRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * detectorId **required**
  * eventTypeName **required**

### PutDetectorResult
* PutDetectorResult `object`

### PutEntityTypeRequest
* PutEntityTypeRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * name **required**

### PutEntityTypeResult
* PutEntityTypeResult `object`

### PutEventTypeRequest
* PutEventTypeRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * entityTypes **required**
    * items [string](#string)
  * eventVariables **required**
    * items [string](#string)
  * labels
    * items [string](#string)
  * name **required**

### PutEventTypeResult
* PutEventTypeResult `object`

### PutExternalModelRequest
* PutExternalModelRequest `object`
  * tags
    * items [Tag](#tag)
  * inputConfiguration **required**
    * csvInputTemplate
    * eventTypeName
    * format
    * jsonInputTemplate
    * useEventVariables **required**
  * invokeModelEndpointRoleArn **required**
  * modelEndpoint **required**
  * modelEndpointStatus **required**
  * modelSource **required**
  * outputConfiguration **required**
    * csvIndexToVariableMap
    * format **required**
    * jsonKeyToVariableMap

### PutExternalModelResult
* PutExternalModelResult `object`

### PutKMSEncryptionKeyRequest
* PutKMSEncryptionKeyRequest `object`
  * kmsEncryptionKeyArn **required**

### PutKMSEncryptionKeyResult
* PutKMSEncryptionKeyResult `object`

### PutLabelRequest
* PutLabelRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * name **required**

### PutLabelResult
* PutLabelResult `object`

### PutOutcomeRequest
* PutOutcomeRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * name **required**

### PutOutcomeResult
* PutOutcomeResult `object`

### ResourceNotFoundException


### Rule
* Rule `object`: A rule.
  * detectorId **required**
  * ruleId **required**
  * ruleVersion **required**

### RuleDetail
* RuleDetail `object`: The details of the rule.
  * arn
  * createdTime
  * description
  * detectorId
  * expression
  * language
  * lastUpdatedTime
  * outcomes
    * items [string](#string)
  * ruleId
  * ruleVersion

### RuleDetailList
* RuleDetailList `array`
  * items [RuleDetail](#ruledetail)

### RuleExecutionMode
* RuleExecutionMode `string` (values: ALL_MATCHED, FIRST_MATCHED)

### RuleList
* RuleList `array`
  * items [Rule](#rule)

### RuleResult
* RuleResult `object`: The rule results.
  * outcomes
    * items [string](#string)
  * ruleId

### RulesMaxResults
* RulesMaxResults `integer`

### Tag
* Tag `object`: A key and value pair. 
  * key **required**
  * value **required**

### TagResourceRequest
* TagResourceRequest `object`
  * tags **required**
    * items [Tag](#tag)
  * resourceARN **required**

### TagResourceResult
* TagResourceResult `object`

### TagsMaxResults
* TagsMaxResults `integer`

### ThrottlingException


### TrainingDataSchema
* TrainingDataSchema `object`: The training data schema.
  * labelSchema **required** [LabelSchema](#labelschema)
  * modelVariables **required**
    * items [string](#string)

### TrainingDataSourceEnum
* TrainingDataSourceEnum `string` (values: EXTERNAL_EVENTS)

### TrainingMetrics
* TrainingMetrics `object`: The training metric details.
  * auc
  * metricDataPoints
    * items [MetricDataPoint](#metricdatapoint)

### TrainingResult
* TrainingResult `object`: The training result details.
  * dataValidationMetrics
    * fieldLevelMessages
      * items [FieldValidationMessage](#fieldvalidationmessage)
    * fileLevelMessages
      * items [FileValidationMessage](#filevalidationmessage)
  * trainingMetrics
    * auc
    * metricDataPoints
      * items [MetricDataPoint](#metricdatapoint)

### UntagResourceRequest
* UntagResourceRequest `object`
  * resourceARN **required**
  * tagKeys **required**
    * items [tagKey](#tagkey)

### UntagResourceResult
* UntagResourceResult `object`

### UpdateDetectorVersionMetadataRequest
* UpdateDetectorVersionMetadataRequest `object`
  * description **required**
  * detectorId **required**
  * detectorVersionId **required**

### UpdateDetectorVersionMetadataResult
* UpdateDetectorVersionMetadataResult `object`

### UpdateDetectorVersionRequest
* UpdateDetectorVersionRequest `object`
  * description
  * detectorId **required**
  * detectorVersionId **required**
  * externalModelEndpoints **required**
    * items [string](#string)
  * modelVersions
    * items [ModelVersion](#modelversion)
  * ruleExecutionMode
  * rules **required**
    * items [Rule](#rule)

### UpdateDetectorVersionResult
* UpdateDetectorVersionResult `object`

### UpdateDetectorVersionStatusRequest
* UpdateDetectorVersionStatusRequest `object`
  * detectorId **required**
  * detectorVersionId **required**
  * status **required**

### UpdateDetectorVersionStatusResult
* UpdateDetectorVersionStatusResult `object`

### UpdateModelRequest
* UpdateModelRequest `object`
  * description
  * modelId **required**
  * modelType **required**

### UpdateModelResult
* UpdateModelResult `object`

### UpdateModelVersionRequest
* UpdateModelVersionRequest `object`
  * tags
    * items [Tag](#tag)
  * externalEventsDetail
    * dataAccessRoleArn **required**
    * dataLocation **required**
  * majorVersionNumber **required**
  * modelId **required**
  * modelType **required**

### UpdateModelVersionResult
* UpdateModelVersionResult `object`
  * modelId
  * modelType
  * modelVersionNumber
  * status

### UpdateModelVersionStatusRequest
* UpdateModelVersionStatusRequest `object`
  * modelId **required**
  * modelType **required**
  * modelVersionNumber **required**
  * status **required**

### UpdateModelVersionStatusResult
* UpdateModelVersionStatusResult `object`

### UpdateRuleMetadataRequest
* UpdateRuleMetadataRequest `object`
  * description **required**
  * rule **required**
    * detectorId **required**
    * ruleId **required**
    * ruleVersion **required**

### UpdateRuleMetadataResult
* UpdateRuleMetadataResult `object`

### UpdateRuleVersionRequest
* UpdateRuleVersionRequest `object`
  * tags
    * items [Tag](#tag)
  * description
  * expression **required**
  * language **required**
  * outcomes **required**
    * items [string](#string)
  * rule **required**
    * detectorId **required**
    * ruleId **required**
    * ruleVersion **required**

### UpdateRuleVersionResult
* UpdateRuleVersionResult `object`
  * rule
    * detectorId **required**
    * ruleId **required**
    * ruleVersion **required**

### UpdateVariableRequest
* UpdateVariableRequest `object`
  * defaultValue
  * description
  * name **required**
  * variableType

### UpdateVariableResult
* UpdateVariableResult `object`

### UseEventVariables
* UseEventVariables `boolean`

### ValidationException


### Variable
* Variable `object`: The variable.
  * arn
  * createdTime
  * dataSource
  * dataType
  * defaultValue
  * description
  * lastUpdatedTime
  * name
  * variableType

### VariableEntry
* VariableEntry `object`: A variable in the list of variables for the batch create variable request.
  * dataSource
  * dataType
  * defaultValue
  * description
  * name
  * variableType

### VariableEntryList
* VariableEntryList `array`
  * items [VariableEntry](#variableentry)

### VariableList
* VariableList `array`
  * items [Variable](#variable)

### VariablesMaxResults
* VariablesMaxResults `integer`

### blob
* blob `string`

### contentType
* contentType `string`

### description
* description `string`

### entityTypeList
* entityTypeList `array`
  * items [EntityType](#entitytype)

### entityTypesMaxResults
* entityTypesMaxResults `integer`

### eventTypeList
* eventTypeList `array`
  * items [EventType](#eventtype)

### eventTypesMaxResults
* eventTypesMaxResults `integer`

### fieldValidationMessageList
* fieldValidationMessageList `array`
  * items [FieldValidationMessage](#fieldvalidationmessage)

### fileValidationMessageList
* fileValidationMessageList `array`
  * items [FileValidationMessage](#filevalidationmessage)

### float
* float `number`

### floatVersionString
* floatVersionString `string`

### fraudDetectorArn
* fraudDetectorArn `string`

### iamRoleArn
* iamRoleArn `string`

### identifier
* identifier `string`

### integer
* integer `integer`

### labelList
* labelList `array`
  * items [Label](#label)

### labelMapper
* labelMapper `object`

### labelsMaxResults
* labelsMaxResults `integer`

### listOfEntities
* listOfEntities `array`
  * items [Entity](#entity)

### metricDataPointsList
* metricDataPointsList `array`
  * items [MetricDataPoint](#metricdatapoint)

### modelIdentifier
* modelIdentifier `string`

### modelList
* modelList `array`
  * items [Model](#model)

### modelVersionDetailList
* modelVersionDetailList `array`
  * items [ModelVersionDetail](#modelversiondetail)

### modelsMaxPageSize
* modelsMaxPageSize `integer`

### nonEmptyString
* nonEmptyString `string`

### ruleExpression
* ruleExpression `string`

### s3BucketLocation
* s3BucketLocation `string`

### sageMakerEndpointIdentifier
* sageMakerEndpointIdentifier `string`

### string
* string `string`

### tagKey
* tagKey `string`

### tagKeyList
* tagKeyList `array`
  * items [tagKey](#tagkey)

### tagList
* tagList `array`
  * items [Tag](#tag)

### tagValue
* tagValue `string`

### time
* time `string`

### variableName
* variableName `string`

### variableValue
* variableValue `string`

### wholeNumberVersionString
* wholeNumberVersionString `string`


