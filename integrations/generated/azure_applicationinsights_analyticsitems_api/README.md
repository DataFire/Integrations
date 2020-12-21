# @datafire/azure_applicationinsights_analyticsitems_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_analyticsitems_api
```
```js
let azure_applicationinsights_analyticsitems_api = require('@datafire/azure_applicationinsights_analyticsitems_api').create({
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

Azure Application Insights client for saved items.

## Actions

### AnalyticsItems_List
Gets a list of Analytics Items defined within an Application Insights component.


```js
azure_applicationinsights_analyticsitems_api.AnalyticsItems_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "scopePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * scopePath **required** `string` (values: analyticsItems, myanalyticsItems): Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
  * api-version **required** `string`: The API version to use for this operation.
  * scope `string` (values: shared, user): Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
  * type `string` (values: none, query, function, folder, recent): Enum indicating the type of the Analytics item.
  * includeContent `boolean`: Flag indicating whether or not to return the content of each applicable item. If false, only return the item information.

#### Output
* output `array`
  * items [ApplicationInsightsComponentAnalyticsItem](#applicationinsightscomponentanalyticsitem)

### AnalyticsItems_Delete
Deletes a specific Analytics Items defined within an Application Insights component.


```js
azure_applicationinsights_analyticsitems_api.AnalyticsItems_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "scopePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * scopePath **required** `string` (values: analyticsItems, myanalyticsItems): Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
  * api-version **required** `string`: The API version to use for this operation.
  * id `string`: The Id of a specific item defined in the Application Insights component
  * name `string`: The name of a specific item defined in the Application Insights component

#### Output
*Output schema unknown*

### AnalyticsItems_Get
Gets a specific Analytics Items defined within an Application Insights component.


```js
azure_applicationinsights_analyticsitems_api.AnalyticsItems_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "scopePath": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * scopePath **required** `string` (values: analyticsItems, myanalyticsItems): Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
  * api-version **required** `string`: The API version to use for this operation.
  * id `string`: The Id of a specific item defined in the Application Insights component
  * name `string`: The name of a specific item defined in the Application Insights component

#### Output
* output [ApplicationInsightsComponentAnalyticsItem](#applicationinsightscomponentanalyticsitem)

### AnalyticsItems_Put
Adds or Updates a specific Analytics Item within an Application Insights component.


```js
azure_applicationinsights_analyticsitems_api.AnalyticsItems_Put({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "scopePath": "",
  "api-version": "",
  "itemProperties": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The ID of the target subscription.
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * scopePath **required** `string` (values: analyticsItems, myanalyticsItems): Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
  * api-version **required** `string`: The API version to use for this operation.
  * overrideItem `boolean`: Flag indicating whether or not to force save an item. This allows overriding an item if it already exists.
  * itemProperties **required** [ApplicationInsightsComponentAnalyticsItem](#applicationinsightscomponentanalyticsitem)

#### Output
* output [ApplicationInsightsComponentAnalyticsItem](#applicationinsightscomponentanalyticsitem)



## Definitions

### ApplicationInsightsComponentAnalyticsItem
* ApplicationInsightsComponentAnalyticsItem `object`: Properties that define an Analytics item that is associated to an Application Insights component.
  * Content `string`: The content of this item
  * Id `string`: Internally assigned unique id of the item definition.
  * Name `string`: The user-defined name of the item.
  * Properties [ApplicationInsightsComponentAnalyticsItemProperties](#applicationinsightscomponentanalyticsitemproperties)
  * Scope `string` (values: shared, user): Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
  * TimeCreated `string`: Date and time in UTC when this item was created.
  * TimeModified `string`: Date and time in UTC of the last modification that was made to this item.
  * Type `string` (values: query, function, folder, recent): Enum indicating the type of the Analytics item.
  * Version `string`: This instance's version of the data model. This can change as new features are added.

### ApplicationInsightsComponentAnalyticsItemProperties
* ApplicationInsightsComponentAnalyticsItemProperties `object`: A set of properties that can be defined in the context of a specific item type. Each type may have its own properties.
  * functionAlias `string`: A function alias, used when the type of the item is Function


