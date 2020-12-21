# @datafire/azure_resourcegraph_graphquery

Client library for Azure Resource Graph Query

## Installation and Usage
```bash
npm install --save @datafire/azure_resourcegraph_graphquery
```
```js
let azure_resourcegraph_graphquery = require('@datafire/azure_resourcegraph_graphquery').create({
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

Azure Resource Graph Query API Reference

## Actions

### GraphQuery_List
Get all graph queries defined within a specified subscription and resource group.


```js
azure_resourcegraph_graphquery.GraphQuery_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GraphQueryListResult](#graphquerylistresult)

### GraphQuery_Delete
Delete a graph query.


```js
azure_resourcegraph_graphquery.GraphQuery_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceName **required** `string`: The name of the Graph Query resource.
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### GraphQuery_Get
Get a single graph query by its resourceName.


```js
azure_resourcegraph_graphquery.GraphQuery_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceName **required** `string`: The name of the Graph Query resource.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [GraphQueryResource](#graphqueryresource)

### GraphQuery_Update
Updates a graph query that has already been added.


```js
azure_resourcegraph_graphquery.GraphQuery_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": "",
  "body": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceName **required** `string`: The name of the Graph Query resource.
  * api-version **required** `string`: Client Api Version.
  * body **required** [GraphQueryUpdateParameters](#graphqueryupdateparameters)

#### Output
* output [GraphQueryResource](#graphqueryresource)

### GraphQuery_CreateOrUpdate
Create a new graph query.


```js
azure_resourcegraph_graphquery.GraphQuery_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": "",
  "properties": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription Id.
  * resourceGroupName **required** `string`: The name of the resource group.
  * resourceName **required** `string`: The name of the Graph Query resource.
  * api-version **required** `string`: Client Api Version.
  * properties **required** [GraphQueryResource](#graphqueryresource)

#### Output
* output [GraphQueryResource](#graphqueryresource)



## Definitions

### ErrorFieldContract
* ErrorFieldContract `object`: Error Field contract.
  * code `string`: Property level error code.
  * message `string`: Human-readable representation of property-level error.
  * target `string`: Property name.

### GraphQueryError
* GraphQueryError `object`: Error message body that will indicate why the operation failed.
  * code `string`: Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response.
  * details `array`: The list of invalid fields send in request, in case of validation error.
    * items [ErrorFieldContract](#errorfieldcontract)
  * message `string`: Human-readable representation of the error.

### GraphQueryListResult
* GraphQueryListResult `object`: Graph query list result.
  * nextLink `string`: URL to fetch the next set of queries.
  * value `array`: An array of graph queries.
    * items [GraphQueryResource](#graphqueryresource)

### GraphQueryProperties
* GraphQueryProperties `object`: Properties that contain a graph query.
  * description `string`: The description of a graph query.
  * query **required** `string`: KQL query that will be graph.
  * resultKind `string` (values: basic): Enum indicating a type of graph query.
  * timeModified `string`: Date and time in UTC of the last modification that was made to this graph query definition.

### GraphQueryPropertiesUpdateParameters
* GraphQueryPropertiesUpdateParameters `object`: Properties that contain a workbook for PATCH operation.
  * description `string`: The description of a graph query.
  * query `string`: KQL query that will be graph.

### GraphQueryResource
* GraphQueryResource `object`: Graph Query entity definition.
  * properties [GraphQueryProperties](#graphqueryproperties)
  * eTag `string`: This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict.
  * id `string`: Azure resource Id
  * name `string`: Azure resource name. This is GUID value. The display name should be assigned within properties field.
  * tags `object`: Resource tags
  * type `string`: Azure resource type

### GraphQueryUpdateParameters
* GraphQueryUpdateParameters `object`: The parameters that can be provided when updating workbook properties properties.
  * eTag `string`: This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict.
  * properties [GraphQueryPropertiesUpdateParameters](#graphquerypropertiesupdateparameters)
  * tags `object`: Resource tags

### Resource
* Resource `object`: An azure resource object
  * eTag `string`: This will be used to handle Optimistic Concurrency. If not present, it will always overwrite the existing resource without checking conflict.
  * id `string`: Azure resource Id
  * name `string`: Azure resource name. This is GUID value. The display name should be assigned within properties field.
  * tags `object`: Resource tags
  * type `string`: Azure resource type


