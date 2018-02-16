# @datafire/azure_advisor

Client library for AdvisorManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_advisor
```
```js
let azure_advisor = require('@datafire/azure_advisor').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_advisor.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

REST APIs for Azure Advisor

## Actions

### Operations_List
Lists all the available Advisor REST API operations.


```js
azure_advisor.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [OperationEntityListResult](#operationentitylistresult)

### Configurations_ListBySubscription
Retrieve Azure Advisor configurations and also retrieve configurations of contained resource groups.


```js
azure_advisor.Configurations_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API to be used with the client request.
  * subscriptionId **required** `string`: The Azure subscription ID.

#### Output
* output [ConfigurationListResult](#configurationlistresult)

### Configurations_CreateInSubscription
Create/Overwrite Azure Advisor configuration and also delete all configurations of contained resource groups.


```js
azure_advisor.Configurations_CreateInSubscription({
  "api-version": "",
  "configContract": {},
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API to be used with the client request.
  * configContract **required** [ConfigData](#configdata)
  * subscriptionId **required** `string`: The Azure subscription ID.

#### Output
*Output schema unknown*

### Recommendations_Generate
Initiates the recommendation generation or computation process for a subscription. This operation is asynchronous. The generated recommendations are stored in a cache in the Advisor service.


```js
azure_advisor.Recommendations_Generate({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
*Output schema unknown*

### Recommendations_GetGenerateStatus
Retrieves the status of the recommendation computation or generation process. Invoke this API after calling the generation recommendation. The URI of this API is returned in the Location field of the response header.


```js
azure_advisor.Recommendations_GetGenerateStatus({
  "subscriptionId": "",
  "operationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID.
  * operationId **required** `string`: The operation ID, which can be found from the Location field in the generate recommendation response header.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
*Output schema unknown*

### Recommendations_List
Obtains cached recommendations for a subscription. The recommendations are generated or computed by invoking generateRecommendations.


```js
azure_advisor.Recommendations_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The version of the API to be used with the client request.
  * $filter `string`: The filter to apply to the recommendations.
  * $top `integer`: The number of recommendations per page if a paged version of this API is being used.
  * $skipToken `string`: The page-continuation token to use with a paged version of this API.

#### Output
* output [ResourceRecommendationBaseListResult](#resourcerecommendationbaselistresult)

### Suppressions_List
Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.


```js
azure_advisor.Suppressions_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription ID.
  * api-version **required** `string`: The version of the API to be used with the client request.
  * $top `integer`: The number of suppressions per page if a paged version of this API is being used.
  * $skipToken `string`: The page-continuation token to use with a paged version of this API.

#### Output
* output [SuppressionContractListResult](#suppressioncontractlistresult)

### Configurations_ListByResourceGroup
Retrieve Azure Advisor configurations.


```js
azure_advisor.Configurations_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroup": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API to be used with the client request.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceGroup **required** `string`: The name of the Azure resource group.

#### Output
* output [ConfigurationListResult](#configurationlistresult)

### Configurations_CreateInResourceGroup
Create/Overwrite Azure Advisor configuration.


```js
azure_advisor.Configurations_CreateInResourceGroup({
  "api-version": "",
  "configContract": {},
  "subscriptionId": "",
  "resourceGroup": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The version of the API to be used with the client request.
  * configContract **required** [ConfigData](#configdata)
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceGroup **required** `string`: The name of the Azure resource group.

#### Output
*Output schema unknown*

### Recommendations_Get
Obtains details of a cached recommendation.


```js
azure_advisor.Recommendations_Get({
  "resourceUri": "",
  "recommendationId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
  * recommendationId **required** `string`: The recommendation ID.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [ResourceRecommendationBase](#resourcerecommendationbase)

### Suppressions_Delete
Enables the activation of a snoozed or dismissed recommendation. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.


```js
azure_advisor.Suppressions_Delete({
  "resourceUri": "",
  "recommendationId": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
  * recommendationId **required** `string`: The recommendation ID.
  * name **required** `string`: The name of the suppression.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
*Output schema unknown*

### Suppressions_Get
Obtains the details of a suppression.


```js
azure_advisor.Suppressions_Get({
  "resourceUri": "",
  "recommendationId": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
  * recommendationId **required** `string`: The recommendation ID.
  * name **required** `string`: The name of the suppression.
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [SuppressionContract](#suppressioncontract)

### Suppressions_Create
Enables the snoozed or dismissed attribute of a recommendation. The snoozed or dismissed attribute is referred to as a suppression. Use this API to create or update the snoozed or dismissed status of a recommendation.


```js
azure_advisor.Suppressions_Create({
  "resourceUri": "",
  "recommendationId": "",
  "name": "",
  "suppressionContract": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceUri **required** `string`: The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
  * recommendationId **required** `string`: The recommendation ID.
  * name **required** `string`: The name of the suppression.
  * suppressionContract **required** [SuppressionContract](#suppressioncontract)
  * api-version **required** `string`: The version of the API to be used with the client request.

#### Output
* output [SuppressionContract](#suppressioncontract)



## Definitions

### ARMErrorResponseBody
* ARMErrorResponseBody `object`: ARM error response body.
  * code `string`: Gets or sets the string that can be used to programmatically identify the error.
  * message `string`: Gets or sets the string that describes the error in detail and provides debugging information.

### ConfigData
* ConfigData `object`: The Advisor configuration data structure.
  * id `string`: The resource Id of the configuration resource.
  * name `string`: The name of the configuration resource.
  * properties `object`: The list of property name/value pairs.
    * exclude `boolean`: Exclude the resource from Advisor evaluations. Valid values: False (default) or True.
    * low_cpu_threshold `string`: Minimum percentage threshold for Advisor low CPU utilization evaluation. Valid only for subscriptions. Valid values: 5 (default), 10, 15 or 20.
  * type `string`: The type of the configuration resource.

### ConfigurationListResult
* ConfigurationListResult `object`: The list of Advisor configurations.
  * nextLink `string`: The link used to get the next page of configurations.
  * value `array`: The list of configurations.
    * items [ConfigData](#configdata)

### OperationDisplayInfo
* OperationDisplayInfo `object`: The operation supported by Advisor.
  * description `string`: The description of the operation.
  * operation `string`: The action that users can perform, based on their permission level.
  * provider `string`: Service provider: Microsoft Advisor.
  * resource `string`: Resource on which the operation is performed.

### OperationEntity
* OperationEntity `object`: The operation supported by Advisor.
  * display [OperationDisplayInfo](#operationdisplayinfo)
  * name `string`: Operation name: {provider}/{resource}/{operation}.

### OperationEntityListResult
* OperationEntityListResult `object`: The list of Advisor operations.
  * nextLink `string`: The link used to get the next page of operations.
  * value `array`: The list of operations.
    * items [OperationEntity](#operationentity)

### RecommendationProperties
* RecommendationProperties `object`: The properties of the recommendation.
  * category `string` (values: HighAvailability, Security, Performance, Cost): The category of the recommendation.
  * impact `string` (values: High, Medium, Low): The business impact of the recommendation.
  * impactedField `string`: The resource type identified by Advisor.
  * impactedValue `string`: The resource identified by Advisor.
  * lastUpdated `string`: The most recent time that Advisor checked the validity of the recommendation.
  * metadata `object`: The recommendation metadata.
  * recommendationTypeId `string`: The recommendation-type GUID.
  * risk `string` (values: Error, Warning, None): The potential risk of not implementing the recommendation.
  * shortDescription [ShortDescription](#shortdescription)
  * suppressionIds `array`: The list of snoozed and dismissed rules for the recommendation.
    * items `string`

### Resource
* Resource `object`: An Azure resource.
  * id `string`: The resource ID.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ResourceRecommendationBase
* ResourceRecommendationBase `object`: Advisor Recommendation.
  * properties [RecommendationProperties](#recommendationproperties)
  * id `string`: The resource ID.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### ResourceRecommendationBaseListResult
* ResourceRecommendationBaseListResult `object`: The list of Advisor recommendations.
  * nextLink `string`: The link used to get the next page of recommendations.
  * value `array`: The list of recommendations.
    * items [ResourceRecommendationBase](#resourcerecommendationbase)

### ShortDescription
* ShortDescription `object`: A summary of the recommendation.
  * problem `string`: The issue or opportunity identified by the recommendation.
  * solution `string`: The remediation action suggested by the recommendation.

### SuppressionContract
* SuppressionContract `object`: The details of the snoozed or dismissed rule; for example, the duration, name, and GUID associated with the rule.
  * properties [SuppressionProperties](#suppressionproperties)
  * id `string`: The resource ID.
  * name `string`: The name of the resource.
  * type `string`: The type of the resource.

### SuppressionContractListResult
* SuppressionContractListResult `object`: The list of Advisor suppressions.
  * nextLink `string`: The link used to get the next page of suppressions.
  * value `array`: The list of suppressions.
    * items [SuppressionContract](#suppressioncontract)

### SuppressionProperties
* SuppressionProperties `object`: The properties of the suppression.
  * suppressionId `string`: The GUID of the suppression.
  * ttl `string`: The duration for which the suppression is valid.


