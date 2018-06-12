# @datafire/azure_applicationinsights_componentannotations_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_componentannotations_api
```
```js
let azure_applicationinsights_componentannotations_api = require('@datafire/azure_applicationinsights_componentannotations_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_applicationinsights_componentannotations_api.Annotations_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "start": "",
  "end": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure Application Insights client for Annotations for a component.

## Actions

### Annotations_List
Gets the list of annotations for a component for given time range


```js
azure_applicationinsights_componentannotations_api.Annotations_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "start": "",
  "end": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * start **required** `string`: The start time to query from for annotations, cannot be older than 90 days from current date.
  * end **required** `string`: The end time to query for annotations.

#### Output
* output `array`
  * items [Annotation](#annotation)

### Annotations_Create
Create an Annotation of an Application Insights component.


```js
azure_applicationinsights_componentannotations_api.Annotations_Create({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "AnnotationProperties": {}
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * AnnotationProperties **required** [Annotation](#annotation)

#### Output
* output `array`
  * items [Annotation](#annotation)

### Annotations_Delete
Delete an Annotation of an Application Insights component.


```js
azure_applicationinsights_componentannotations_api.Annotations_Delete({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "annotationId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * annotationId **required** `string`: The unique annotation ID. This is unique within a Application Insights component.

#### Output
*Output schema unknown*

### Annotations_Get
Get the annotation for given id.


```js
azure_applicationinsights_componentannotations_api.Annotations_Get({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "annotationId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * annotationId **required** `string`: The unique annotation ID. This is unique within a Application Insights component.

#### Output
* output `array`
  * items [Annotation](#annotation)



## Definitions

### Annotation
* Annotation `object`: Annotation associated with an application insights resource.
  * AnnotationName `string`: Name of annotation
  * Category `string`: Category of annotation, free form
  * EventTime `string`: Time when event occurred
  * Id `string`: Unique Id for annotation
  * Properties `string`: Serialized JSON object for detailed properties
  * RelatedAnnotation `string`: Related parent annotation if any

### AnnotationError
* AnnotationError `object`: Error associated with trying to create annotation with Id that already exist
  * code `string`: Error detail code and explanation
  * innererror [InnerError](#innererror)
  * message `string`: Error message

### InnerError
* InnerError `object`: Inner error
  * diagnosticcontext `string`: Provides correlation for request
  * time `string`: Request time


