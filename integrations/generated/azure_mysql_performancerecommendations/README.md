# @datafire/azure_mysql_performancerecommendations

Client library for MySQLManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_mysql_performancerecommendations
```
```js
let azure_mysql_performancerecommendations = require('@datafire/azure_mysql_performancerecommendations').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Microsoft Azure management API provides create, read, update, and delete functionality for Azure MySQL resources including servers, databases, firewall rules, VNET rules, security alert policies, log files and configurations with new business model.

## Actions

### LocationBasedRecommendedActionSessionsOperationStatus_Get
Recommendation action session operation status.


```js
azure_mysql_performancerecommendations.LocationBasedRecommendedActionSessionsOperationStatus_Get({
  "api-version": "",
  "subscriptionId": "",
  "locationName": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * locationName **required** `string`: The name of the location.
  * operationId **required** `string`: The operation identifier.

#### Output
* output [RecommendedActionSessionsOperationStatus](#recommendedactionsessionsoperationstatus)

### LocationBasedRecommendedActionSessionsResult_List
Recommendation action session operation result.


```js
azure_mysql_performancerecommendations.LocationBasedRecommendedActionSessionsResult_List({
  "api-version": "",
  "subscriptionId": "",
  "locationName": "",
  "operationId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * locationName **required** `string`: The name of the location.
  * operationId **required** `string`: The operation identifier.

#### Output
* output [RecommendationActionsResultList](#recommendationactionsresultlist)

### Advisors_ListByServer
List recommendation action advisors.


```js
azure_mysql_performancerecommendations.Advisors_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serverName **required** `string`: The name of the server.

#### Output
* output [AdvisorsResultList](#advisorsresultlist)

### Advisors_Get
Get a recommendation action advisor.


```js
azure_mysql_performancerecommendations.Advisors_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "advisorName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serverName **required** `string`: The name of the server.
  * advisorName **required** `string`: The advisor name for recommendation action.

#### Output
* output [Advisor](#advisor)

### CreateRecommendedActionSession
Create recommendation action session for the advisor.


```js
azure_mysql_performancerecommendations.CreateRecommendedActionSession({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "advisorName": "",
  "databaseName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serverName **required** `string`: The name of the server.
  * advisorName **required** `string`: The advisor name for recommendation action.
  * databaseName **required** `string`: The name of the database.

#### Output
*Output schema unknown*

### RecommendedActions_ListByServer
Retrieve recommended actions from the advisor.


```js
azure_mysql_performancerecommendations.RecommendedActions_ListByServer({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "advisorName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serverName **required** `string`: The name of the server.
  * advisorName **required** `string`: The advisor name for recommendation action.
  * sessionId `string`: The recommendation action session identifier.

#### Output
* output [RecommendationActionsResultList](#recommendationactionsresultlist)

### RecommendedActions_Get
Retrieve recommended actions from the advisor.


```js
azure_mysql_performancerecommendations.RecommendedActions_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "serverName": "",
  "advisorName": "",
  "recommendedActionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The API version to use for this operation.
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * serverName **required** `string`: The name of the server.
  * advisorName **required** `string`: The advisor name for recommendation action.
  * recommendedActionName **required** `string`: The recommended action name.

#### Output
* output [RecommendationAction](#recommendationaction)



## Definitions

### Advisor
* Advisor `object`: Represents a recommendation action advisor.
  * properties [AdvisorProperties](#advisorproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### AdvisorProperties
* AdvisorProperties `object`: The properties of a recommendation action advisor.

### AdvisorsResultList
* AdvisorsResultList `object`: A list of query statistics.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: The list of recommendation action advisors.
    * items [Advisor](#advisor)

### RecommendationAction
* RecommendationAction `object`: Represents a Recommendation Action.
  * properties [RecommendationActionProperties](#recommendationactionproperties)
  * id `string`: Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
  * name `string`: The name of the resource
  * type `string`: The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.

### RecommendationActionProperties
* RecommendationActionProperties `object`: The properties of a recommendation action.
  * actionId `integer`: Recommendation action identifier.
  * advisorName `string`: Advisor name.
  * createdTime `string`: Recommendation action creation time.
  * details `object`: Recommendation action details.
  * expirationTime `string`: Recommendation action expiration time.
  * reason `string`: Recommendation action reason.
  * recommendationType `string`: Recommendation action type.
  * sessionId `string`: Recommendation action session identifier.

### RecommendationActionsResultList
* RecommendationActionsResultList `object`: A list of recommendation actions.
  * nextLink `string`: Link to retrieve next page of results.
  * value `array`: The list of recommendation action advisors.
    * items [RecommendationAction](#recommendationaction)

### RecommendedActionSessionsOperationStatus
* RecommendedActionSessionsOperationStatus `object`: Recommendation action session operation status.
  * name `string`: Operation identifier.
  * startTime `string`: Operation start time.
  * status `string`: Operation status.


