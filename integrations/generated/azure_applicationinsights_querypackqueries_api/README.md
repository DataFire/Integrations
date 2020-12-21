# @datafire/azure_applicationinsights_querypackqueries_api

Client library for Azure Log Analytics Query Packs

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_querypackqueries_api
```
```js
let azure_applicationinsights_querypackqueries_api = require('@datafire/azure_applicationinsights_querypackqueries_api').create({
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

Azure Log Analytics API reference for management of saved Queries within Query Packs.

## Actions

### Queries_List
Gets a list of Queries defined within a Log Analytics QueryPack.


```js
azure_applicationinsights_querypackqueries_api.Queries_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "queryPackName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * queryPackName **required** `string`: The name of the Log Analytics QueryPack resource.
  * api-version **required** `string`: The API version to use for this operation.
  * $top `integer`: Maximum items returned in page.
  * includeBody `boolean`: Flag indicating whether or not to return the body of each applicable query. If false, only return the query information.
  * $skipToken `string`: Base64 encoded token used to fetch the next page of items. Default is null.

#### Output
* output [LogAnalyticsQueryPackQueryListResult](#loganalyticsquerypackquerylistresult)

### Queries_Search
Search a list of Queries defined within a Log Analytics QueryPack according to given search properties.


```js
azure_applicationinsights_querypackqueries_api.Queries_Search({
  "subscriptionId": "",
  "resourceGroupName": "",
  "queryPackName": "",
  "api-version": "",
  "QuerySearchProperties": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * queryPackName **required** `string`: The name of the Log Analytics QueryPack resource.
  * api-version **required** `string`: The API version to use for this operation.
  * $top `integer`: Maximum items returned in page.
  * includeBody `boolean`: Flag indicating whether or not to return the body of each applicable query. If false, only return the query information.
  * $skipToken `string`: Base64 encoded token used to fetch the next page of items. Default is null.
  * QuerySearchProperties **required** [LogAnalyticsQueryPackQuerySearchProperties](#loganalyticsquerypackquerysearchproperties)

#### Output
* output [LogAnalyticsQueryPackQueryListResult](#loganalyticsquerypackquerylistresult)

### Queries_Delete
Deletes a specific Query defined within an Log Analytics QueryPack.


```js
azure_applicationinsights_querypackqueries_api.Queries_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "queryPackName": "",
  "queryId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * queryPackName **required** `string`: The name of the Log Analytics QueryPack resource.
  * queryId **required** `string`: The id of a specific query defined in the Log Analytics QueryPack
  * api-version **required** `string`: The API version to use for this operation.

#### Output
*Output schema unknown*

### Queries_Get
Gets a specific Log Analytics Query defined within a Log Analytics QueryPack.


```js
azure_applicationinsights_querypackqueries_api.Queries_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "queryPackName": "",
  "queryId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * queryPackName **required** `string`: The name of the Log Analytics QueryPack resource.
  * queryId **required** `string`: The id of a specific query defined in the Log Analytics QueryPack
  * api-version **required** `string`: The API version to use for this operation.

#### Output
* output [LogAnalyticsQueryPackQuery](#loganalyticsquerypackquery)

### Queries_Put
Adds or Updates a specific Query within a Log Analytics QueryPack.


```js
azure_applicationinsights_querypackqueries_api.Queries_Put({
  "subscriptionId": "",
  "resourceGroupName": "",
  "queryPackName": "",
  "queryId": "",
  "api-version": "",
  "QueryPayload": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * queryPackName **required** `string`: The name of the Log Analytics QueryPack resource.
  * queryId **required** `string`: The id of a specific query defined in the Log Analytics QueryPack
  * api-version **required** `string`: The API version to use for this operation.
  * QueryPayload **required** [LogAnalyticsQueryPackQuery](#loganalyticsquerypackquery)

#### Output
* output [LogAnalyticsQueryPackQuery](#loganalyticsquerypackquery)



## Definitions

### AzureResourceProperties
* AzureResourceProperties `object`: An Azure resource QueryPack-Query object
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### ErrorResponse
* ErrorResponse `object`: Describe the format of an Error response.
  * code `string`: Error code
  * message `string`: Error message indicating why the operation failed.

### LogAnalyticsQueryPackQuery
* LogAnalyticsQueryPackQuery `object`: A Log Analytics QueryPack-Query definition.
  * properties [LogAnalyticsQueryPackQueryProperties](#loganalyticsquerypackqueryproperties)
  * id `string`: Azure resource Id
  * name `string`: Azure resource name
  * type `string`: Azure resource type

### LogAnalyticsQueryPackQueryListResult
* LogAnalyticsQueryPackQueryListResult `object`: Describes the list of Log Analytics QueryPack-Query resources.
  * nextLink `string`: The URI to get the next set of Log Analytics QueryPack definitions if too many QueryPack-Queries where returned in the result set.
  * value **required** `array`: List of Log Analytics QueryPack Query definitions.
    * items [LogAnalyticsQueryPackQuery](#loganalyticsquerypackquery)

### LogAnalyticsQueryPackQueryProperties
* LogAnalyticsQueryPackQueryProperties `object`: Properties that define an Log Analytics QueryPack-Query resource.
  * author `string`: Object Id of user creating the query.
  * body **required** `string`: Body of the query.
  * categories `array`: Categories associated with the query.
    * items `string`
  * description `string`: Description of the query.
  * displayName **required** `string`: Unique display name for your query within the Query Pack.
  * labels `array`: Labels associated with the query.
    * items `string`
  * linkedResourceId `string`: Resource id associated with the query.
  * queryId `string`: The unique ID of your application. This field cannot be changed.
  * resourceTypes `array`: Resource Types associated with the query.
    * items `string`
  * timeCreated `string`: Creation Date for the Log Analytics Query, in ISO 8601 format.
  * timeModified `string`: Last modified date of the Log Analytics Query, in ISO 8601 format.

### LogAnalyticsQueryPackQuerySearchProperties
* LogAnalyticsQueryPackQuerySearchProperties `object`: Properties that define an Log Analytics QueryPack-Query search properties.
  * categories `array`: Categories associated with the query.
    * items `string`
  * labels `array`: Labels associated with the query.
    * items `string`
  * resourceTypes `array`: Resource Types associated with the query.
    * items `string`


