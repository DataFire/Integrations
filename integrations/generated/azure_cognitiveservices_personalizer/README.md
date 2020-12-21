# @datafire/azure_cognitiveservices_personalizer

Client library for Personalizer Client

## Installation and Usage
```bash
npm install --save @datafire/azure_cognitiveservices_personalizer
```
```js
let azure_cognitiveservices_personalizer = require('@datafire/azure_cognitiveservices_personalizer').create({
  apim_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Personalizer Service is an Azure Cognitive Service that makes it easy to target content and experiences without complex pre-analysis or cleanup of past data. Given a context and featurized content, the Personalizer Service returns which content item to show to users in rewardActionId. As rewards are sent in response to the use of rewardActionId, the reinforcement learning algorithm will improve the model and improve performance of future rank calls.

## Actions

### Policy_Reset
Resets the Learning settings of the Personalizer service to default.


```js
azure_cognitiveservices_personalizer.Policy_Reset(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PolicyContract](#policycontract)

### Policy_Get
Get the Learning settings currently used by the Personalizer service.


```js
azure_cognitiveservices_personalizer.Policy_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [PolicyContract](#policycontract)

### Policy_Update
Update the Learning settings that the Personalizer service will use to train models.


```js
azure_cognitiveservices_personalizer.Policy_Update({
  "policy": {
    "name": "",
    "arguments": ""
  }
}, context)
```

#### Input
* input `object`
  * policy **required** [PolicyContract](#policycontract)

#### Output
* output [PolicyContract](#policycontract)

### ServiceConfiguration_Get
Get the Personalizer service configuration.


```js
azure_cognitiveservices_personalizer.ServiceConfiguration_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ServiceConfiguration](#serviceconfiguration)

### ServiceConfiguration_Update
Update the Personalizer service configuration.


```js
azure_cognitiveservices_personalizer.ServiceConfiguration_Update({
  "config": {
    "rewardWaitTime": "",
    "defaultReward": 0,
    "rewardAggregation": "",
    "explorationPercentage": 0,
    "modelExportFrequency": "",
    "logRetentionDays": 0
  }
}, context)
```

#### Input
* input `object`
  * config **required** [ServiceConfiguration](#serviceconfiguration)

#### Output
* output [ServiceConfiguration](#serviceconfiguration)

### Evaluations_List
List all the submitted evaluations.


```js
azure_cognitiveservices_personalizer.Evaluations_List(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Evaluation](#evaluation)

### Evaluations_Create
Submit a new evaluation job.


```js
azure_cognitiveservices_personalizer.Evaluations_Create({
  "evaluation": {
    "name": "",
    "startTime": "",
    "endTime": "",
    "policies": []
  }
}, context)
```

#### Input
* input `object`
  * evaluation **required** [EvaluationContract](#evaluationcontract)

#### Output
* output [Evaluation](#evaluation)

### Evaluations_Delete
Delete the evaluation associated with the Id.


```js
azure_cognitiveservices_personalizer.Evaluations_Delete({
  "evaluationId": ""
}, context)
```

#### Input
* input `object`
  * evaluationId **required** `string`: Id of the evaluation to delete.

#### Output
*Output schema unknown*

### Evaluations_Get
Get the evaluation associated with the Id.


```js
azure_cognitiveservices_personalizer.Evaluations_Get({
  "evaluationId": ""
}, context)
```

#### Input
* input `object`
  * evaluationId **required** `string`: Id of the evaluation.

#### Output
* output [Evaluation](#evaluation)

### Events_Activate
Report that the specified event was actually displayed to the user and a reward should be expected for it


```js
azure_cognitiveservices_personalizer.Events_Activate({
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * eventId **required** `string`: The event ID this activation applies to.

#### Output
*Output schema unknown*

### Events_Reward
Report reward that resulted from using the action specified in rewardActionId for the specified event.


```js
azure_cognitiveservices_personalizer.Events_Reward({
  "eventId": "",
  "reward": {
    "value": 0
  }
}, context)
```

#### Input
* input `object`
  * eventId **required** `string`: The event id this reward applies to.
  * reward **required** [RewardRequest](#rewardrequest)

#### Output
*Output schema unknown*

### Log_Delete
Delete all generated logs.


```js
azure_cognitiveservices_personalizer.Log_Delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Log_GetProperties
Get properties of generated logs.


```js
azure_cognitiveservices_personalizer.Log_GetProperties(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [LogsProperties](#logsproperties)

### Model_Reset
Resets the model file generated by Personalizer service.


```js
azure_cognitiveservices_personalizer.Model_Reset(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### Model_Get
Get the model file generated by Personalizer service.


```js
azure_cognitiveservices_personalizer.Model_Get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `file`

### Model_GetProperties
Get properties of the model file generated by Personalizer service.


```js
azure_cognitiveservices_personalizer.Model_GetProperties(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ModelProperties](#modelproperties)

### Rank
Submit a Personalizer rank request, to get which of the provided actions should be used in the provided context.


```js
azure_cognitiveservices_personalizer.Rank({
  "rankRequest": {
    "actions": []
  }
}, context)
```

#### Input
* input `object`
  * rankRequest **required** [RankRequest](#rankrequest)

#### Output
* output [RankResponse](#rankresponse)



## Definitions

### ContainerStatus
* ContainerStatus `object`
  * apiStatus `string`
  * apiStatusMessage `string`
  * service `string`

### DateRange
* DateRange `object`
  * from `string`
  * to `string`

### ErrorResponse
* ErrorResponse `object`: Used to return an error to the client
  * error **required** [PersonalizerError](#personalizererror)

### Evaluation
* Evaluation `object`
  * endTime `string`
  * featureImportance `array`
    * items `array`
      * items `string`
  * id `string`
  * jobId `string`
  * name `string`
  * policyResults `array`
    * items [PolicyResult](#policyresult)
  * startTime `string`
  * status `string` (values: completed, pending, failed, notSubmitted)

### EvaluationContract
* EvaluationContract `object`: A counterfactual evaluation.
  * enableOfflineExperimentation `boolean`: True if the evaluation should explore for a more optimal Learning settings.
  * endTime **required** `string`: The end time of the evaluation.
  * name **required** `string`: The name of the evaluation.
  * policies **required** `array`: Additional Learning settings to evaluate.
    * items [PolicyContract](#policycontract)
  * startTime **required** `string`: The start time of the evaluation.

### InternalError
* InternalError `object`: An object containing more specific information than the parent object about the error.
  * code `string`: Detailed error code.
  * innererror [InternalError](#internalerror)

### LogsProperties
* LogsProperties `object`
  * dateRange
    * from `string`
    * to `string`

### ModelProperties
* ModelProperties `object`
  * creationTime `string`
  * lastModifiedTime `string`

### PersonalizerError
* PersonalizerError `object`: The error object.
  * code **required** `string` (values: BadRequest, ResourceNotFound, InternalServerError, InvalidServiceConfiguration, InvalidPolicyConfiguration, InvalidPolicyContract, InvalidEvaluationContract, InvalidRewardRequest, InvalidEventIdToActivate, InvalidRankRequest, InvalidExportLogsRequest, InvalidContainer, FrontEndNotFound, EvaluationNotFound, LogsPropertiesNotFound, RankNullResponse, UpdateConfigurationFailed, ModelResetFailed): High level error code.
  * details `array`: An array of details about specific errors that led to this reported error.
    * items [PersonalizerError](#personalizererror)
  * innerError [InternalError](#internalerror)
  * message **required** `string`: A message explaining the error reported by the service.
  * target `string`: Error source element.

### PolicyContract
* PolicyContract `object`: Learning settings specifying how to train the model.
  * arguments **required** `string`: Arguments of the Learning settings.
  * name **required** `string`: Name of the Learning settings.

### PolicyResult
* PolicyResult `object`
  * arguments `string`
  * name `string`
  * summary `array`
    * items [PolicyResultSummary](#policyresultsummary)
  * totalSummary
    * aggregateTimeWindow `string`
    * confidenceInterval `number`
    * ipsEstimatorDenominator `number`
    * ipsEstimatorNumerator `number`
    * nonZeroProbability `number`
    * snipsEstimatorDenominator `number`
    * sumOfSquares `number`
    * timeStamp `string`

### PolicyResultSummary
* PolicyResultSummary `object`
  * aggregateTimeWindow `string`
  * confidenceInterval `number`
  * ipsEstimatorDenominator `number`
  * ipsEstimatorNumerator `number`
  * nonZeroProbability `number`
  * snipsEstimatorDenominator `number`
  * sumOfSquares `number`
  * timeStamp `string`

### RankRequest
* RankRequest `object`: Request a set of actions to be ranked by the Personalizer service.
  * actions **required** `array`: The set of actions the Personalizer service can pick from.
    * items [RankableAction](#rankableaction)
  * contextFeatures `array`: Features of the context used for Personalizer as a
    * items `object`
  * deferActivation `boolean`: Send false if it is certain the rewardActionId in rank results will be shown to the user, therefore
  * eventId `string`: Optionally pass an eventId that uniquely identifies this Rank event.
  * excludedActions `array`: The set of action ids to exclude from ranking.
    * items `string`

### RankResponse
* RankResponse `object`: Returns which action to use as rewardActionId, and additional information about each action as a result of a Rank request.
  * eventId `string`: The eventId for the round trip from request to response.
  * ranking `array`: The calculated ranking for the current request.
    * items [RankedAction](#rankedaction)
  * rewardActionId `string`: The action chosen by the Personalizer service. This is the action your application should display, and for which to report the reward. This might not be the

### RankableAction
* RankableAction `object`: An action with it's associated features used for ranking.
  * features **required** `array`: List of dictionaries containing features.
    * items `object`
  * id **required** `string`: Id of the action.

### RankedAction
* RankedAction `object`: A ranked action with its resulting probability.
  * id `string`: Id of the action
  * probability `number`: Probability of the action

### RewardRequest
* RewardRequest `object`: Reward given to a rank response.
  * value **required** `number`: Reward to be assigned to an action. Value should be between -1 and 1 inclusive.

### ServiceConfiguration
* ServiceConfiguration `object`: The configuration of the service.
  * defaultReward **required** `number`: The reward given if a reward is not received within the specified wait time.
  * explorationPercentage **required** `number`: The percentage of rank responses that will use exploration.
  * logMirrorEnabled `boolean`: Flag indicates whether log mirroring is enabled.
  * logMirrorSasUri `string`: Azure storage account container SAS URI for log mirroring.
  * logRetentionDays **required** `integer`: Number of days historical logs are to be maintained. -1 implies the logs will never be deleted.
  * modelExportFrequency **required** `string`: Personalizer will start using the most updated trained model for online ranks automatically every specified time period.
  * rewardAggregation **required** `string`: The function used to process rewards, if multiple reward scores are received before rewardWaitTime is over.
  * rewardWaitTime **required** `string`: The time span waited until a request is marked with the default reward.


