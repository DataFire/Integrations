# @datafire/azure_streamanalytics_transformations

Client library for StreamAnalyticsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_streamanalytics_transformations
```
```js
let azure_streamanalytics_transformations = require('@datafire/azure_streamanalytics_transformations').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_streamanalytics_transformations.Transformations_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "transformationName": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Transformations_Get
Gets details about the specified transformation.


```js
azure_streamanalytics_transformations.Transformations_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "transformationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * transformationName **required** `string`: The name of the transformation.

#### Output
* output [Transformation](#transformation)

### Transformations_Update
Updates an existing transformation under an existing streaming job. This can be used to partially update (ie. update one or two properties) a transformation without affecting the rest the job or transformation definition.


```js
azure_streamanalytics_transformations.Transformations_Update({
  "transformation": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "transformationName": ""
}, context)
```

#### Input
* input `object`
  * transformation **required** [Transformation](#transformation)
  * If-Match `string`: The ETag of the transformation. Omit this value to always overwrite the current transformation. Specify the last-seen ETag value to prevent accidentally overwritting concurrent changes.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * transformationName **required** `string`: The name of the transformation.

#### Output
* output [Transformation](#transformation)

### Transformations_CreateOrReplace
Creates a transformation or replaces an already existing transformation under an existing streaming job.


```js
azure_streamanalytics_transformations.Transformations_CreateOrReplace({
  "transformation": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "transformationName": ""
}, context)
```

#### Input
* input `object`
  * transformation **required** [Transformation](#transformation)
  * If-Match `string`: The ETag of the transformation. Omit this value to always overwrite the current transformation. Specify the last-seen ETag value to prevent accidentally overwritting concurrent changes.
  * If-None-Match `string`: Set to '*' to allow a new transformation to be created, but to prevent updating an existing transformation. Other values will result in a 412 Pre-condition Failed response.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * transformationName **required** `string`: The name of the transformation.

#### Output
* output [Transformation](#transformation)



## Definitions

### SubResource
* SubResource `object`: The base sub-resource model definition.
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### Transformation
* Transformation `object`: A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job.
  * properties [TransformationProperties](#transformationproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### TransformationProperties
* TransformationProperties `object`: The properties that are associated with a transformation.
  * etag `string`: The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
  * query `string`: Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests.
  * streamingUnits `integer`: Specifies the number of streaming units that the streaming job uses.


