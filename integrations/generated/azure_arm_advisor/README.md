# @datafire/azure_arm_advisor

Client library for AdvisorManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_advisor
```

```js
let datafire = require('datafire');
let azure_arm_advisor = require('@datafire/azure_arm_advisor').actions;

let account = {
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
}
let context = new datafire.Context({
  accounts: {
    azure_arm_advisor: account,
  }
})

azure_arm_advisor.Operations_List({}, context).then(data => {
  console.log(data);
})
```

## Description
REST APIs for Azure Advisor

## Actions
### Operations_List
Lists all the available Advisor REST API operations.


```js
azure_arm_advisor.Operations_List({
  "api-version": ""
}, context)
```

#### Parameters
* api-version (string) **required** - The version of the API to be used with the client request.

### Recommendations_Generate
Initiates the recommendation generation or computation process for a subscription. This operation is asynchronous. The generated recommendations are stored in a cache in the Advisor service.


```js
azure_arm_advisor.Recommendations_Generate({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The Azure subscription ID.
* api-version (string) **required** - The version of the API to be used with the client request.

### Recommendations_GetGenerateRecommendationsStatus
Retrieves the status of the recommendation computation or generation process. Invoke this API after calling the generation recommendation. The URI of this API is returned in the Location field of the response header.


```js
azure_arm_advisor.Recommendations_GetGenerateRecommendationsStatus({
  "subscriptionId": "",
  "operationId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The Azure subscription ID.
* operationId (string) **required** - The operation ID, which can be found from the Location field in the generate recommendation response header.
* api-version (string) **required** - The version of the API to be used with the client request.

### Recommendations_List
Obtains cached recommendations for a subscription. The recommendations are generated or computed by invoking generateRecommendations.


```js
azure_arm_advisor.Recommendations_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The Azure subscription ID.
* api-version (string) **required** - The version of the API to be used with the client request.
* $filter (string) - The filter to apply to the recommendations.
* $top (integer) - The number of recommendations per page if a paged version of this API is being used.
* $skipToken (string) - The page-continuation token to use with a paged version of this API.

### Suppressions_List
Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.


```js
azure_arm_advisor.Suppressions_List({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The Azure subscription ID.
* api-version (string) **required** - The version of the API to be used with the client request.

### Recommendations_Get
Obtains details of a cached recommendation.


```js
azure_arm_advisor.Recommendations_Get({
  "resourceUri": "",
  "recommendationId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceUri (string) **required** - The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
* recommendationId (string) **required** - The recommendation ID.
* api-version (string) **required** - The version of the API to be used with the client request.

### Suppressions_Delete
Enables the activation of a snoozed or dismissed recommendation. The snoozed or dismissed attribute of a recommendation is referred to as a suppression.


```js
azure_arm_advisor.Suppressions_Delete({
  "resourceUri": "",
  "recommendationId": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceUri (string) **required** - The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
* recommendationId (string) **required** - The recommendation ID.
* name (string) **required** - The name of the suppression.
* api-version (string) **required** - The version of the API to be used with the client request.

### Suppressions_Get
Obtains the details of a suppression.


```js
azure_arm_advisor.Suppressions_Get({
  "resourceUri": "",
  "recommendationId": "",
  "name": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceUri (string) **required** - The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
* recommendationId (string) **required** - The recommendation ID.
* name (string) **required** - The name of the suppression.
* api-version (string) **required** - The version of the API to be used with the client request.

### Suppressions_Create
Enables the snoozed or dismissed attribute of a recommendation. The snoozed or dismissed attribute is referred to as a suppression. Use this API to create or update the snoozed or dismissed status of a recommendation.


```js
azure_arm_advisor.Suppressions_Create({
  "resourceUri": "",
  "recommendationId": "",
  "name": "",
  "suppressionContract": {},
  "api-version": ""
}, context)
```

#### Parameters
* resourceUri (string) **required** - The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
* recommendationId (string) **required** - The recommendation ID.
* name (string) **required** - The name of the suppression.
* suppressionContract (object) **required** - The details of the snoozed or dismissed rule; for example, the duration, name, and GUID associated with the rule.
* api-version (string) **required** - The version of the API to be used with the client request.

