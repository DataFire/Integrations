# @datafire/azure_customer_insights

Client library for CustomerInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_customer_insights
```
```js
let azure_customer_insights = require('@datafire/azure_customer_insights').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_customer_insights.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Azure Customer Insights management API provides a RESTful set of web services that interact with Azure Customer Insights service to manage your resources. The API has entities that capture the relationship between an end user and the Azure Customer Insights service.

## Actions

### Operations_List
Lists all of the available Customer Insights REST API operations.


```js
azure_customer_insights.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)

### Hubs_List
Gets all hubs in the specified subscription.


```js
azure_customer_insights.Hubs_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [HubListResult](#hublistresult)

### Hubs_ListByResourceGroup
Gets all the hubs in a resource group.


```js
azure_customer_insights.Hubs_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [HubListResult](#hublistresult)

### Hubs_Delete
Deletes the specified hub.


```js
azure_customer_insights.Hubs_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Hubs_Get
Gets information about the specified hub.


```js
azure_customer_insights.Hubs_Get({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Hub](#hub)

### Hubs_Update
Updates a Hub.


```js
azure_customer_insights.Hubs_Update({
  "resourceGroupName": "",
  "hubName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the Hub.
  * parameters **required** [Hub](#hub)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Hub](#hub)

### Hubs_CreateOrUpdate
Creates a hub, or updates an existing hub.


```js
azure_customer_insights.Hubs_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the Hub.
  * parameters **required** [Hub](#hub)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [Hub](#hub)

### AuthorizationPolicies_ListByHub
Gets all the authorization policies in a specified hub.


```js
azure_customer_insights.AuthorizationPolicies_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationPolicyListResult](#authorizationpolicylistresult)

### AuthorizationPolicies_Get
Gets an authorization policy in the hub.


```js
azure_customer_insights.AuthorizationPolicies_Get({
  "resourceGroupName": "",
  "hubName": "",
  "authorizationPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * authorizationPolicyName **required** `string`: The name of the policy.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationPolicyResourceFormat](#authorizationpolicyresourceformat)

### AuthorizationPolicies_CreateOrUpdate
Creates an authorization policy or updates an existing authorization policy.


```js
azure_customer_insights.AuthorizationPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "authorizationPolicyName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * authorizationPolicyName **required** `string`: The name of the policy.
  * parameters **required** [AuthorizationPolicyResourceFormat](#authorizationpolicyresourceformat)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationPolicyResourceFormat](#authorizationpolicyresourceformat)

### AuthorizationPolicies_RegeneratePrimaryKey
Regenerates the primary policy key of the specified authorization policy.


```js
azure_customer_insights.AuthorizationPolicies_RegeneratePrimaryKey({
  "resourceGroupName": "",
  "hubName": "",
  "authorizationPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * authorizationPolicyName **required** `string`: The name of the policy.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationPolicy](#authorizationpolicy)

### AuthorizationPolicies_RegenerateSecondaryKey
Regenerates the secondary policy key of the specified authorization policy.


```js
azure_customer_insights.AuthorizationPolicies_RegenerateSecondaryKey({
  "resourceGroupName": "",
  "hubName": "",
  "authorizationPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * authorizationPolicyName **required** `string`: The name of the policy.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [AuthorizationPolicy](#authorizationpolicy)

### Connectors_ListByHub
Gets all the connectors in the specified hub.


```js
azure_customer_insights.Connectors_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectorListResult](#connectorlistresult)

### Connectors_Delete
Deletes a connector in the hub.


```js
azure_customer_insights.Connectors_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * connectorName **required** `string`: The name of the connector.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Connectors_Get
Gets a connector in the hub.


```js
azure_customer_insights.Connectors_Get({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * connectorName **required** `string`: The name of the connector.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectorResourceFormat](#connectorresourceformat)

### Connectors_CreateOrUpdate
Creates a connector or updates an existing connector in the hub.


```js
azure_customer_insights.Connectors_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * connectorName **required** `string`: The name of the connector.
  * parameters **required** [ConnectorResourceFormat](#connectorresourceformat)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectorResourceFormat](#connectorresourceformat)

### ConnectorMappings_ListByConnector
Gets all the connector mappings in the specified connector.


```js
azure_customer_insights.ConnectorMappings_ListByConnector({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * connectorName **required** `string`: The name of the connector.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectorMappingListResult](#connectormappinglistresult)

### ConnectorMappings_Delete
Deletes a connector mapping in the connector.


```js
azure_customer_insights.ConnectorMappings_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "mappingName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * connectorName **required** `string`: The name of the connector.
  * mappingName **required** `string`: The name of the connector mapping.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### ConnectorMappings_Get
Gets a connector mapping in the connector.


```js
azure_customer_insights.ConnectorMappings_Get({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "mappingName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * connectorName **required** `string`: The name of the connector.
  * mappingName **required** `string`: The name of the connector mapping.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectorMappingResourceFormat](#connectormappingresourceformat)

### ConnectorMappings_CreateOrUpdate
Creates a connector mapping or updates an existing connector mapping in the connector.


```js
azure_customer_insights.ConnectorMappings_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "mappingName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * connectorName **required** `string`: The name of the connector.
  * mappingName **required** `string`: The name of the connector mapping.
  * parameters **required** [ConnectorMappingResourceFormat](#connectormappingresourceformat)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ConnectorMappingResourceFormat](#connectormappingresourceformat)

### Images_GetUploadUrlForData
Gets data image upload URL.


```js
azure_customer_insights.Images_GetUploadUrlForData({
  "resourceGroupName": "",
  "hubName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * parameters **required** [GetImageUploadUrlInput](#getimageuploadurlinput)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ImageDefinition](#imagedefinition)

### Images_GetUploadUrlForEntityType
Gets entity type (profile or interaction) image upload URL.


```js
azure_customer_insights.Images_GetUploadUrlForEntityType({
  "resourceGroupName": "",
  "hubName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * parameters **required** [GetImageUploadUrlInput](#getimageuploadurlinput)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ImageDefinition](#imagedefinition)

### Interactions_ListByHub
Gets all interactions in the hub.


```js
azure_customer_insights.Interactions_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * locale-code `string`: Locale of interaction to retrieve, default is en-us.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [InteractionListResult](#interactionlistresult)

### Interactions_Get
Gets information about the specified interaction.


```js
azure_customer_insights.Interactions_Get({
  "resourceGroupName": "",
  "hubName": "",
  "interactionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * interactionName **required** `string`: The name of the interaction.
  * locale-code `string`: Locale of interaction to retrieve, default is en-us.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [InteractionResourceFormat](#interactionresourceformat)

### Interactions_CreateOrUpdate
Creates an interaction or updates an existing interaction within a hub.


```js
azure_customer_insights.Interactions_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "interactionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * interactionName **required** `string`: The name of the interaction.
  * parameters **required** [InteractionResourceFormat](#interactionresourceformat)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [InteractionResourceFormat](#interactionresourceformat)

### Interactions_SuggestRelationshipLinks
Suggests relationships to create relationship links.


```js
azure_customer_insights.Interactions_SuggestRelationshipLinks({
  "resourceGroupName": "",
  "hubName": "",
  "interactionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * interactionName **required** `string`: The name of the interaction.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [SuggestRelationshipLinksResponse](#suggestrelationshiplinksresponse)

### Kpi_ListByHub
Gets all the KPIs in the specified hub.


```js
azure_customer_insights.Kpi_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [KpiListResult](#kpilistresult)

### Kpi_Delete
Deletes a KPI in the hub.


```js
azure_customer_insights.Kpi_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "kpiName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * kpiName **required** `string`: The name of the KPI.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Kpi_Get
Gets a KPI in the hub.


```js
azure_customer_insights.Kpi_Get({
  "resourceGroupName": "",
  "hubName": "",
  "kpiName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * kpiName **required** `string`: The name of the KPI.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [KpiResourceFormat](#kpiresourceformat)

### Kpi_CreateOrUpdate
Creates a KPI or updates an existing KPI in the hub.


```js
azure_customer_insights.Kpi_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "kpiName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * kpiName **required** `string`: The name of the KPI.
  * parameters **required** [KpiResourceFormat](#kpiresourceformat)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [KpiResourceFormat](#kpiresourceformat)

### Kpi_Reprocess
Reprocesses the Kpi values of the specified KPI.


```js
azure_customer_insights.Kpi_Reprocess({
  "resourceGroupName": "",
  "hubName": "",
  "kpiName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * kpiName **required** `string`: The name of the KPI.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Links_ListByHub
Gets all the links in the specified hub.


```js
azure_customer_insights.Links_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LinkListResult](#linklistresult)

### Links_Delete
Deletes a link in the hub.


```js
azure_customer_insights.Links_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "linkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * linkName **required** `string`: The name of the link.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Links_Get
Gets a link in the hub.


```js
azure_customer_insights.Links_Get({
  "resourceGroupName": "",
  "hubName": "",
  "linkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * linkName **required** `string`: The name of the link.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LinkResourceFormat](#linkresourceformat)

### Links_CreateOrUpdate
Creates a link or updates an existing link in the hub.


```js
azure_customer_insights.Links_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "linkName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * linkName **required** `string`: The name of the link.
  * parameters **required** [LinkResourceFormat](#linkresourceformat)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [LinkResourceFormat](#linkresourceformat)

### Predictions_ListByHub
Gets all the predictions in the specified hub.


```js
azure_customer_insights.Predictions_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PredictionListResult](#predictionlistresult)

### Predictions_Delete
Deletes a Prediction in the hub.


```js
azure_customer_insights.Predictions_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "predictionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * predictionName **required** `string`: The name of the Prediction.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Predictions_Get
Gets a Prediction in the hub.


```js
azure_customer_insights.Predictions_Get({
  "resourceGroupName": "",
  "hubName": "",
  "predictionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * predictionName **required** `string`: The name of the Prediction.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PredictionResourceFormat](#predictionresourceformat)

### Predictions_CreateOrUpdate
Creates a Prediction or updates an existing Prediction in the hub.


```js
azure_customer_insights.Predictions_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "predictionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * predictionName **required** `string`: The name of the Prediction.
  * parameters **required** [PredictionResourceFormat](#predictionresourceformat)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PredictionResourceFormat](#predictionresourceformat)

### Predictions_GetModelStatus
Gets model status of the prediction.


```js
azure_customer_insights.Predictions_GetModelStatus({
  "resourceGroupName": "",
  "hubName": "",
  "predictionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * predictionName **required** `string`: The name of the Prediction.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PredictionModelStatus](#predictionmodelstatus)

### Predictions_GetTrainingResults
Gets training results.


```js
azure_customer_insights.Predictions_GetTrainingResults({
  "resourceGroupName": "",
  "hubName": "",
  "predictionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * predictionName **required** `string`: The name of the Prediction.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [PredictionTrainingResults](#predictiontrainingresults)

### Predictions_ModelStatus
Creates or updates the model status of prediction.


```js
azure_customer_insights.Predictions_ModelStatus({
  "resourceGroupName": "",
  "hubName": "",
  "predictionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * predictionName **required** `string`: The name of the Prediction.
  * parameters **required** [PredictionModelStatus](#predictionmodelstatus)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Profiles_ListByHub
Gets all profile in the hub.


```js
azure_customer_insights.Profiles_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * locale-code `string`: Locale of profile to retrieve, default is en-us.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ProfileListResult](#profilelistresult)

### Profiles_Delete
Deletes a profile within a hub


```js
azure_customer_insights.Profiles_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "profileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * profileName **required** `string`: The name of the profile.
  * locale-code `string`: Locale of profile to retrieve, default is en-us.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Profiles_Get
Gets information about the specified profile.


```js
azure_customer_insights.Profiles_Get({
  "resourceGroupName": "",
  "hubName": "",
  "profileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * profileName **required** `string`: The name of the profile.
  * locale-code `string`: Locale of profile to retrieve, default is en-us.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ProfileResourceFormat](#profileresourceformat)

### Profiles_CreateOrUpdate
Creates a profile within a Hub, or updates an existing profile.


```js
azure_customer_insights.Profiles_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "profileName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * profileName **required** `string`: The name of the profile.
  * parameters **required** [ProfileResourceFormat](#profileresourceformat)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ProfileResourceFormat](#profileresourceformat)

### Profiles_GetEnrichingKpis
Gets the KPIs that enrich the profile Type identified by the supplied name. Enrichment happens through participants of the Interaction on an Interaction KPI and through Relationships for Profile KPIs.


```js
azure_customer_insights.Profiles_GetEnrichingKpis({
  "resourceGroupName": "",
  "hubName": "",
  "profileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * profileName **required** `string`: The name of the profile.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output `array`
  * items [KpiDefinition](#kpidefinition)

### RelationshipLinks_ListByHub
Gets all relationship links in the hub.


```js
azure_customer_insights.RelationshipLinks_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelationshipLinkListResult](#relationshiplinklistresult)

### RelationshipLinks_Delete
Deletes a relationship link within a hub.


```js
azure_customer_insights.RelationshipLinks_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "relationshipLinkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * relationshipLinkName **required** `string`: The name of the relationship.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### RelationshipLinks_Get
Gets information about the specified relationship Link.


```js
azure_customer_insights.RelationshipLinks_Get({
  "resourceGroupName": "",
  "hubName": "",
  "relationshipLinkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * relationshipLinkName **required** `string`: The name of the relationship link.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelationshipLinkResourceFormat](#relationshiplinkresourceformat)

### RelationshipLinks_CreateOrUpdate
Creates a relationship link or updates an existing relationship link within a hub.


```js
azure_customer_insights.RelationshipLinks_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "relationshipLinkName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * relationshipLinkName **required** `string`: The name of the relationship link.
  * parameters **required** [RelationshipLinkResourceFormat](#relationshiplinkresourceformat)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelationshipLinkResourceFormat](#relationshiplinkresourceformat)

### Relationships_ListByHub
Gets all relationships in the hub.


```js
azure_customer_insights.Relationships_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelationshipListResult](#relationshiplistresult)

### Relationships_Delete
Deletes a relationship within a hub.


```js
azure_customer_insights.Relationships_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "relationshipName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * relationshipName **required** `string`: The name of the relationship.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### Relationships_Get
Gets information about the specified relationship.


```js
azure_customer_insights.Relationships_Get({
  "resourceGroupName": "",
  "hubName": "",
  "relationshipName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * relationshipName **required** `string`: The name of the relationship.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelationshipResourceFormat](#relationshipresourceformat)

### Relationships_CreateOrUpdate
Creates a relationship or updates an existing relationship within a hub.


```js
azure_customer_insights.Relationships_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "relationshipName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * relationshipName **required** `string`: The name of the Relationship.
  * parameters **required** [RelationshipResourceFormat](#relationshipresourceformat)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RelationshipResourceFormat](#relationshipresourceformat)

### RoleAssignments_ListByHub
Gets all the role assignments for the specified hub.


```js
azure_customer_insights.RoleAssignments_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RoleAssignmentListResult](#roleassignmentlistresult)

### RoleAssignments_Delete
Deletes the role assignment in the hub.


```js
azure_customer_insights.RoleAssignments_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "assignmentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * assignmentName **required** `string`: The name of the role assignment.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
*Output schema unknown*

### RoleAssignments_Get
Gets the role assignment in the hub.


```js
azure_customer_insights.RoleAssignments_Get({
  "resourceGroupName": "",
  "hubName": "",
  "assignmentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * assignmentName **required** `string`: The name of the role assignment.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RoleAssignmentResourceFormat](#roleassignmentresourceformat)

### RoleAssignments_CreateOrUpdate
Creates or updates a role assignment in the hub.


```js
azure_customer_insights.RoleAssignments_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "assignmentName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * assignmentName **required** `string`: The assignment name
  * parameters **required** [RoleAssignmentResourceFormat](#roleassignmentresourceformat)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RoleAssignmentResourceFormat](#roleassignmentresourceformat)

### Roles_ListByHub
Gets all the roles for the hub.


```js
azure_customer_insights.Roles_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [RoleListResult](#rolelistresult)

### Views_ListByHub
Gets all available views for given user in the specified hub.


```js
azure_customer_insights.Views_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * userId **required** `string`: The user ID. Use * to retreive hub level views.

#### Output
* output [ViewListResult](#viewlistresult)

### Views_Delete
Deletes a view in the specified hub.


```js
azure_customer_insights.Views_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "viewName": "",
  "api-version": "",
  "subscriptionId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * viewName **required** `string`: The name of the view.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * userId **required** `string`: The user ID. Use * to retreive hub level view.

#### Output
*Output schema unknown*

### Views_Get
Gets a view in the hub.


```js
azure_customer_insights.Views_Get({
  "resourceGroupName": "",
  "hubName": "",
  "viewName": "",
  "api-version": "",
  "subscriptionId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * viewName **required** `string`: The name of the view.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * userId **required** `string`: The user ID. Use * to retreive hub level view.

#### Output
* output [ViewResourceFormat](#viewresourceformat)

### Views_CreateOrUpdate
Creates a view or updates an exisiting view in the hub.


```js
azure_customer_insights.Views_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "viewName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * viewName **required** `string`: The name of the view.
  * parameters **required** [ViewResourceFormat](#viewresourceformat)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [ViewResourceFormat](#viewresourceformat)

### WidgetTypes_ListByHub
Gets all available widget types in the specified hub.


```js
azure_customer_insights.WidgetTypes_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [WidgetTypeListResult](#widgettypelistresult)

### WidgetTypes_Get
Gets a widget type in the specified hub.


```js
azure_customer_insights.WidgetTypes_Get({
  "resourceGroupName": "",
  "hubName": "",
  "widgetTypeName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * hubName **required** `string`: The name of the hub.
  * widgetTypeName **required** `string`: The name of the widget type.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [WidgetTypeResourceFormat](#widgettyperesourceformat)



## Definitions

### AssignmentPrincipal
* AssignmentPrincipal `object`: The AssignmentPrincipal
  * principalId **required** `string`: The principal id being assigned to.
  * principalMetadata `object`: Other metadata for the principal.
  * principalType **required** `string`: The Type of the principal ID.

### AuthorizationPolicy
* AuthorizationPolicy `object`: The authorization policy.
  * permissions **required** `array`: The permissions associated with the policy.
    * items [PermissionTypes](#permissiontypes)
  * policyName `string`: Name of the policy.
  * primaryKey `string`: Primary key assiciated with the policy.
  * secondaryKey `string`: Secondary key assiciated with the policy.

### AuthorizationPolicyListResult
* AuthorizationPolicyListResult `object`: The response of list authorization policy operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [AuthorizationPolicyResourceFormat](#authorizationpolicyresourceformat)

### AuthorizationPolicyResourceFormat
* AuthorizationPolicyResourceFormat `object`: The authorization policy resource format.
  * properties [AuthorizationPolicy](#authorizationpolicy)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### AzureBlobConnectorProperties
* AzureBlobConnectorProperties `object`: The Azure Blob connector properties.
  * connectionKeyVaultUrl **required** `string`: The connection KeyVault URL.

### CanonicalProfileDefinition
* CanonicalProfileDefinition `object`: Definition of canonical profile.
  * canonicalProfileId `integer`: Canonical profile ID.
  * properties `array`: Properties of the canonical profile.
    * items `object`: The definition of a canonical profile property.
      * profileName `string`: Profile name.
      * profilePropertyName `string`: Property name of profile.
      * rank `integer`: The rank.
      * type `string` (values: Numeric, Categorical, DerivedCategorical, DerivedNumeric): Type of canonical property value.
      * value `string`: Value of the canonical property.

### Connector
* Connector `object`: Properties of connector.
  * connectorId `integer`: ID of the connector.
  * connectorName `string`: Name of the connector.
  * connectorProperties **required** `object`: The connector properties.
  * connectorType **required** [ConnectorType](#connectortype)
  * created `string`: The created time.
  * description `string`: Description of the connector.
  * displayName `string`: Display name of the connector.
  * isInternal `boolean`: If this is an internal connector.
  * lastModified `string`: The last monified time.
  * state `string` (values: Creating, Created, Ready, Expiring, Deleting, Failed): State of connector.
  * tenantId `string`: The hub name.

### ConnectorListResult
* ConnectorListResult `object`: The response of list connector operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [ConnectorResourceFormat](#connectorresourceformat)

### ConnectorMapping
* ConnectorMapping `object`: The connector mapping definition.
  * connectorMappingName `string`: The connector mapping name
  * connectorName `string`: The connector name.
  * connectorType [ConnectorType](#connectortype)
  * created `string`: The created time.
  * dataFormatId `string`: The DataFormat ID.
  * description `string`: The description of the connector mapping.
  * displayName `string`: Display name for the connector mapping.
  * entityType **required** `string` (values: None, Profile, Interaction, Relationship): Defines which entity type the file should map to.
  * entityTypeName **required** `string`: The mapping entity name.
  * lastModified `string`: The last monified time.
  * mappingProperties **required** [ConnectorMappingProperties](#connectormappingproperties)
  * nextRunTime `string`: The next run time based on customer's settings.
  * runId `string`: The RunId.
  * state `string` (values: Creating, Created, Failed, Ready, Running, Stopped, Expiring): State of connector mapping.
  * tenantId `string`: The hub name.

### ConnectorMappingAvailability
* ConnectorMappingAvailability `object`: Connector mapping property availability.
  * frequency `string` (values: Minute, Hour, Day, Week, Month): The frequency to update.
  * interval **required** `integer`: The interval of the given frequency to use.

### ConnectorMappingCompleteOperation
* ConnectorMappingCompleteOperation `object`: The complete operation.
  * completionOperationType `string` (values: DoNothing, DeleteFile, MoveFile): The type of completion operation.
  * destinationFolder `string`: The destination folder where files will be moved to once the import is done.

### ConnectorMappingErrorManagement
* ConnectorMappingErrorManagement `object`: The error mangement.
  * errorLimit `integer`: The error limit allowed while importing data.
  * errorManagementType **required** `string` (values: RejectAndContinue, StopImport, RejectUntilLimit): The type of error management to use for the mapping.

### ConnectorMappingFormat
* ConnectorMappingFormat `object`: Connector mapping property format.
  * acceptLanguage `string`: The oData language.
  * arraySeparator `string`: Character separating array elements.
  * columnDelimiter `string`: The character that signifies a break between columns.
  * formatType **required** `string` (values: TextFormat): The type mapping format.
  * quoteCharacter `string`: Quote character, used to indicate enquoted fields.
  * quoteEscapeCharacter `string`: Escape character for quotes, can be the same as the quoteCharacter.

### ConnectorMappingListResult
* ConnectorMappingListResult `object`: The response of list connector mapping operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [ConnectorMappingResourceFormat](#connectormappingresourceformat)

### ConnectorMappingProperties
* ConnectorMappingProperties `object`: The connector mapping properties.
  * availability **required** [ConnectorMappingAvailability](#connectormappingavailability)
  * completeOperation **required** [ConnectorMappingCompleteOperation](#connectormappingcompleteoperation)
  * errorManagement **required** [ConnectorMappingErrorManagement](#connectormappingerrormanagement)
  * fileFilter `string`: The file filter for the mapping.
  * folderPath `string`: The folder path for the mapping.
  * format **required** [ConnectorMappingFormat](#connectormappingformat)
  * hasHeader `boolean`: If the file contains a header or not.
  * structure **required** `array`: Ingestion mapping information at property level.
    * items [ConnectorMappingStructure](#connectormappingstructure)

### ConnectorMappingResourceFormat
* ConnectorMappingResourceFormat `object`: The c onnector mapping resource format.
  * properties [ConnectorMapping](#connectormapping)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ConnectorMappingStructure
* ConnectorMappingStructure `object`: Connector mapping property structure.
  * columnName **required** `string`: The column name of the import file.
  * customFormatSpecifier `string`: Custom format specifier for input parsing.
  * isEncrypted `boolean`: Indicates if the column is encrypted.
  * propertyName **required** `string`: The property name of the mapping entity.

### ConnectorResourceFormat
* ConnectorResourceFormat `object`: The connector resource format.
  * properties [Connector](#connector)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ConnectorType
* ConnectorType `string` (values: None, CRM, AzureBlob, Salesforce, ExchangeOnline, Outbound): Type of connector.

### CrmConnectorEntities
* CrmConnectorEntities `object`: The CRM connector entities.
  * displayName `string`: The display name.
  * isProfile `boolean`: Indicating whether this is profile.
  * logicalName **required** `string`: The logical name.

### CrmConnectorProperties
* CrmConnectorProperties `object`: The CRM connector properties.
  * accessToken `string`: The access token.
  * connectionString `string`: The connection string.
  * entities **required** `array`: The entities like account, contact, opportunity.
    * items [CrmConnectorEntities](#crmconnectorentities)
  * organizationId **required** `string`: The organization ID.
  * organizationUrl **required** `string`: The organization URL.

### DataSource
* DataSource `object`: Data Source is a way for us to know the source of instances. A single type can have data coming in from multiple places. In activities we use this to determine precedence rules.
  * dataSourceReferenceId `string`: The data source reference id.
  * dataSourceType `string` (values: Connector, LinkInteraction, SystemDefault): The data source type.
  * id `integer`: The data source ID.
  * name `string`: The data source name
  * status `string` (values: None, Active, Deleted): The data source status.

### DataSourcePrecedence
* DataSourcePrecedence `object`: The data source precedence is a way to know the precedence of each data source.
  * dataSource [DataSource](#datasource)
  * precedence `integer`: the precedence value.

### EnrichingKpi
* EnrichingKpi: The enriching KPI definition.
  * aliases `array`: The aliases.
    * items [KpiAlias](#kpialias)
  * calculationWindow **required** `string` (values: Lifetime, Hour, Day, Week, Month): The calculation window.
  * calculationWindowFieldName `string`: Name of calculation window field.
  * description `object`: Localized description for the KPI.
  * displayName `object`: Localized display name for the KPI.
  * entityType **required** `string` (values: None, Profile, Interaction, Relationship): The mapping entity type.
  * entityTypeName **required** `string`: The mapping entity name.
  * expression **required** `string`: The computation expression for the KPI.
  * extracts `array`: The KPI extracts.
    * items [KpiExtract](#kpiextract)
  * filter `string`: The filter expression for the KPI.
  * function **required** `string` (values: Sum, Avg, Min, Max, Last, Count, None, CountDistinct): The computation function for the KPI.
  * groupBy `array`: the group by properties for the KPI.
    * items `string`
  * groupByMetadata `array`: The KPI GroupByMetadata.
    * items [KpiGroupByMetadata](#kpigroupbymetadata)
  * kpiName `string`: The KPI name.
  * participantProfilesMetadata `array`: The participant profiles.
    * items [KpiParticipantProfilesMetadata](#kpiparticipantprofilesmetadata)
  * provisioningState [ProvisioningState](#provisioningstate)
  * tenantId `string`: The hub name.
  * thresHolds [KpiThresholds](#kpithresholds)
  * unit `string`: The unit of measurement for the KPI.

### EntityTypeDefinition
* EntityTypeDefinition `object`: Describes an entity.
  * apiEntitySetName `string`: The api entity set name. This becomes the odata entity set name for the entity Type being refered in this object.
  * entityType `string` (values: None, Profile, Interaction, Relationship): Type of entity.
  * fields `array`: The properties of the Profile.
    * items [PropertyDefinition](#propertydefinition)
  * instancesCount `integer`: The instance count.
  * lastChangedUtc `string`: The last changed time for the type definition.
  * provisioningState [ProvisioningState](#provisioningstate)
  * schemaItemTypeLink `string`: The schema org link. This helps ACI identify and suggest semantic models.
  * tenantId `string`: The hub name.
  * timestampFieldName `string`: The timestamp property name. Represents the time when the interaction or profile update happened.
  * typeName `string`: The name of the entity.
  * attributes `object`: The attributes for the Type.
  * description `object`: Localized descriptions for the property.
  * displayName `object`: Localized display names for the property.
  * largeImage `string`: Large Image associated with the Property or EntityType.
  * localizedAttributes `object`: Any custom localized attributes for the Type.
  * mediumImage `string`: Medium Image associated with the Property or EntityType.
  * smallImage `string`: Small Image associated with the Property or EntityType.

### GetImageUploadUrlInput
* GetImageUploadUrlInput `object`: Input type for getting image upload url.
  * entityType `string`: Type of entity. Can be Profile or Interaction.
  * entityTypeName `string`: Name of the entity type.
  * relativePath `string`: Relative path of the image.

### Hub
* Hub `object`: Hub resource.
  * properties [HubPropertiesFormat](#hubpropertiesformat)
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### HubBillingInfoFormat
* HubBillingInfoFormat `object`: Hub billing info.
  * maxUnits `integer`: The maximum number of units can be used.  One unit is 10,000 Profiles and 100,000 Interactions.
  * minUnits `integer`: The minimum number of units will be billed. One unit is 10,000 Profiles and 100,000 Interactions.
  * skuName `string`: The sku name.

### HubListResult
* HubListResult `object`: Response of list hub operation.
  * nextLink `string`: Link for next set of results.
  * value `array`: Results of the list operation.
    * items [Hub](#hub)

### HubPropertiesFormat
* HubPropertiesFormat `object`: Properties of hub.
  * apiEndpoint `string`: API endpoint URL of the hub.
  * hubBillingInfo [HubBillingInfoFormat](#hubbillinginfoformat)
  * provisioningState `string`: Provisioning state of the hub.
  * tenantFeatures `integer`: The bit flags for enabled hub features. Bit 0 is set to 1 indicates graph is enabled, or disabled if set to 0. Bit 1 is set to 1 indicates the hub is disabled, or enabled if set to 0.
  * webEndpoint `string`: Web endpoint URL of the hub.

### ImageDefinition
* ImageDefinition `object`: The image definition.
  * contentUrl `string`: Content URL for the image blob.
  * imageExists `boolean`: Whether image exists already.
  * relativePath `string`: Relative path of the image.

### InteractionListResult
* InteractionListResult `object`: The response of list interaction operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [InteractionResourceFormat](#interactionresourceformat)

### InteractionResourceFormat
* InteractionResourceFormat `object`: The interaction resource format.
  * properties [InteractionTypeDefinition](#interactiontypedefinition)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### InteractionTypeDefinition
* InteractionTypeDefinition `object`: The Interaction Type Definition
  * dataSourcePrecedenceRules `array`: This is specific to interactions modeled as activities. Data sources are used to determine where data is stored and also in precedence rules.
    * items [DataSourcePrecedence](#datasourceprecedence)
  * defaultDataSource [DataSource](#datasource)
  * idPropertyNames `array`: The id property names. Properties which uniquely identify an interaction instance.
    * items `string`
  * isActivity `boolean`: An interaction can be tagged as an activity only during create. This enables the interaction to be editable and can enable merging of properties from multiple data sources based on precedence, which is defined at a link level.
  * participantProfiles `array`: Profiles that participated in the interaction.
    * items [Participant](#participant)
  * primaryParticipantProfilePropertyName `string`: The primary participant property name for an interaction ,This is used to logically represent the agent of the interaction, Specify the participant name here from ParticipantName.
  * apiEntitySetName `string`: The api entity set name. This becomes the odata entity set name for the entity Type being refered in this object.
  * entityType `string` (values: None, Profile, Interaction, Relationship): Type of entity.
  * fields `array`: The properties of the Profile.
    * items [PropertyDefinition](#propertydefinition)
  * instancesCount `integer`: The instance count.
  * lastChangedUtc `string`: The last changed time for the type definition.
  * provisioningState [ProvisioningState](#provisioningstate)
  * schemaItemTypeLink `string`: The schema org link. This helps ACI identify and suggest semantic models.
  * tenantId `string`: The hub name.
  * timestampFieldName `string`: The timestamp property name. Represents the time when the interaction or profile update happened.
  * typeName `string`: The name of the entity.
  * attributes `object`: The attributes for the Type.
  * description `object`: Localized descriptions for the property.
  * displayName `object`: Localized display names for the property.
  * largeImage `string`: Large Image associated with the Property or EntityType.
  * localizedAttributes `object`: Any custom localized attributes for the Type.
  * mediumImage `string`: Medium Image associated with the Property or EntityType.
  * smallImage `string`: Small Image associated with the Property or EntityType.

### KpiAlias
* KpiAlias `object`: The KPI alias.
  * aliasName **required** `string`: KPI alias name.
  * expression **required** `string`: The expression.

### KpiDefinition
* KpiDefinition `object`: Defines the KPI Threshold limits.
  * aliases `array`: The aliases.
    * items [KpiAlias](#kpialias)
  * calculationWindow **required** `string` (values: Lifetime, Hour, Day, Week, Month): The calculation window.
  * calculationWindowFieldName `string`: Name of calculation window field.
  * description `object`: Localized description for the KPI.
  * displayName `object`: Localized display name for the KPI.
  * entityType **required** `string` (values: None, Profile, Interaction, Relationship): The mapping entity type.
  * entityTypeName **required** `string`: The mapping entity name.
  * expression **required** `string`: The computation expression for the KPI.
  * extracts `array`: The KPI extracts.
    * items [KpiExtract](#kpiextract)
  * filter `string`: The filter expression for the KPI.
  * function **required** `string` (values: Sum, Avg, Min, Max, Last, Count, None, CountDistinct): The computation function for the KPI.
  * groupBy `array`: the group by properties for the KPI.
    * items `string`
  * groupByMetadata `array`: The KPI GroupByMetadata.
    * items [KpiGroupByMetadata](#kpigroupbymetadata)
  * kpiName `string`: The KPI name.
  * participantProfilesMetadata `array`: The participant profiles.
    * items [KpiParticipantProfilesMetadata](#kpiparticipantprofilesmetadata)
  * provisioningState [ProvisioningState](#provisioningstate)
  * tenantId `string`: The hub name.
  * thresHolds [KpiThresholds](#kpithresholds)
  * unit `string`: The unit of measurement for the KPI.

### KpiExtract
* KpiExtract `object`: The KPI extract.
  * expression **required** `string`: The expression.
  * extractName **required** `string`: KPI extract name.

### KpiGroupByMetadata
* KpiGroupByMetadata `object`: The KPI GroupBy field metadata.
  * displayName `object`: The display name.
  * fieldName `string`: The name of the field.
  * fieldType `string`: The type of the field.

### KpiListResult
* KpiListResult `object`: The response of list KPI operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [KpiResourceFormat](#kpiresourceformat)

### KpiParticipantProfilesMetadata
* KpiParticipantProfilesMetadata `object`: The KPI participant profile metadata.
  * typeName **required** `string`: Name of the type.

### KpiResourceFormat
* KpiResourceFormat `object`: The KPI resource format.
  * properties [KpiDefinition](#kpidefinition)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### KpiThresholds
* KpiThresholds `object`: Defines the KPI Threshold limits.
  * increasingKpi **required** `boolean`: Whether or not the KPI is an increasing KPI.
  * lowerLimit **required** `number`: The lower threshold limit.
  * upperLimit **required** `number`: The upper threshold limit.

### LinkDefinition
* LinkDefinition `object`: The definition of Link.
  * description `object`: Localized descriptions for the Link.
  * displayName `object`: Localized display name for the Link.
  * linkName `string`: The link name.
  * mappings `array`: The set of properties mappings between the source and target Types.
    * items [TypePropertiesMapping](#typepropertiesmapping)
  * operationType `string` (values: Upsert, Delete): Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only.
  * participantPropertyReferences **required** `array`: The properties that represent the participating profile.
    * items [ParticipantPropertyReference](#participantpropertyreference)
  * provisioningState [ProvisioningState](#provisioningstate)
  * referenceOnly `boolean`: Indicating whether the link is reference only link. This flag is ingored if the Mappings are defined. If the mappings are not defined and it is set to true, links processing will not create or update profiles.
  * sourceEntityType **required** `string` (values: None, Profile, Interaction, Relationship): Type of source entity.
  * sourceEntityTypeName **required** `string`: Name of the source Entity Type.
  * targetEntityType **required** `string` (values: None, Profile, Interaction, Relationship): Type of target entity.
  * targetEntityTypeName **required** `string`: Name of the target Entity Type.
  * tenantId `string`: The hub name.

### LinkListResult
* LinkListResult `object`: The response of list link operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [LinkResourceFormat](#linkresourceformat)

### LinkResourceFormat
* LinkResourceFormat `object`: The link resource format.
  * properties [LinkDefinition](#linkdefinition)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### MetadataDefinitionBase
* MetadataDefinitionBase `object`: The Metadata definition base.
  * attributes `object`: The attributes for the Type.
  * description `object`: Localized descriptions for the property.
  * displayName `object`: Localized display names for the property.
  * largeImage `string`: Large Image associated with the Property or EntityType.
  * localizedAttributes `object`: Any custom localized attributes for the Type.
  * mediumImage `string`: Medium Image associated with the Property or EntityType.
  * smallImage `string`: Small Image associated with the Property or EntityType.

### Operation
* Operation `object`: A Customer Insights REST API operation
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.CustomerInsights
    * resource `string`: Resource on which the operation is performed: Invoice, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: Result of the request to list Customer Insights operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Customer Insights operations supported by the Microsoft.CustomerInsights resource provider.
    * items [Operation](#operation)

### Participant
* Participant `object`: Describes a profile type participating in an interaction.
  * description `object`: Localized descriptions.
  * displayName `object`: Localized display name.
  * participantName **required** `string`: Participant name.
  * participantPropertyReferences **required** `array`: The property references.
    * items [ParticipantPropertyReference](#participantpropertyreference)
  * profileTypeName **required** `string`: Profile type name.
  * role `string`: The role that the participant is playing in the interaction.

### ParticipantProfilePropertyReference
* ParticipantProfilePropertyReference `object`: The participant profile property reference.
  * interactionPropertyName **required** `string`: The source interaction property that maps to the target profile property.
  * profilePropertyName **required** `string`: The target profile property that maps to the source interaction property.

### ParticipantPropertyReference
* ParticipantPropertyReference `object`: The participant property reference.
  * sourcePropertyName **required** `string`: The source property that maps to the target property.
  * targetPropertyName **required** `string`: The target property that maps to the source property.

### PermissionTypes
* PermissionTypes `string` (values: Read, Write, Manage): Supported permission types.

### Prediction
* Prediction `object`: The prediction definition.
  * autoAnalyze **required** `boolean`: Whether do auto analyze.
  * description `object`: Description of the prediction.
  * displayName `object`: Display name of the prediction.
  * grades `array`: The prediction grades.
    * items `object`: The definition of a prediction grade.
      * gradeName `string`: Name of the grade.
      * maxScoreThreshold `integer`: Maximum score threshold.
      * minScoreThreshold `integer`: Minimum score threshold.
  * involvedInteractionTypes `array`: Interaction types involved in the prediction.
    * items `string`
  * involvedKpiTypes `array`: KPI types involved in the prediction.
    * items `string`
  * involvedRelationships `array`: Relationships involved in the prediction.
    * items `string`
  * mappings **required** `object`: Definition of the link mapping of prediction.
    * grade **required** `string`: The grade of the link mapping.
    * reason **required** `string`: The reason of the link mapping.
    * score **required** `string`: The score of the link mapping.
  * negativeOutcomeExpression **required** `string`: Negative outcome expression.
  * positiveOutcomeExpression **required** `string`: Positive outcome expression.
  * predictionName `string`: Name of the prediction.
  * primaryProfileType **required** `string`: Primary profile type.
  * provisioningState [ProvisioningState](#provisioningstate)
  * scopeExpression **required** `string`: Scope expression.
  * scoreLabel **required** `string`: Score label.
  * systemGeneratedEntities `object`: System generated entities.
    * generatedInteractionTypes `array`: Generated interaction types.
      * items `string`
    * generatedKpis `object`: Generated KPIs.
    * generatedLinks `array`: Generated links.
      * items `string`
  * tenantId `string`: The hub name.

### PredictionDistributionDefinition
* PredictionDistributionDefinition `object`: The definition of the prediction distribution.
  * distributions `array`: Distributions of the prediction.
    * items `object`: The definition of a prediction distribution.
      * negatives `integer`: Number of negatives.
      * negativesAboveThreshold `integer`: Number of negatives above threshold.
      * positives `integer`: Number of positives.
      * positivesAboveThreshold `integer`: Number of positives above threshold.
      * scoreThreshold `integer`: Score threshold.
  * totalNegatives `integer`: Total negatives in the distribution.
  * totalPositives `integer`: Total positive in the distribution.

### PredictionListResult
* PredictionListResult `object`: The response of list predictions operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [PredictionResourceFormat](#predictionresourceformat)

### PredictionModelStatus
* PredictionModelStatus `object`: The prediction model status.
  * message `string`: The model status message.
  * modelVersion `string`: Version of the model.
  * predictionGuidId `string`: The prediction GUID ID.
  * predictionName `string`: The prediction name.
  * signalsUsed `integer`: The singnas used.
  * status **required** `string` (values: New, Provisioning, ProvisioningFailed, PendingDiscovering, Discovering, PendingFeaturing, Featuring, FeaturingFailed, PendingTraining, Training, TrainingFailed, Evaluating, EvaluatingFailed, PendingModelConfirmation, Active, Deleted, HumanIntervention, Failed): Prediction model life cycle.  When prediction is in PendingModelConfirmation status, it is allowed to update the status to PendingFeaturing or Active through API.
  * tenantId `string`: The hub name.
  * testSetCount `integer`: Count of the test set.
  * trainingAccuracy `integer`: The training accuracy.
  * trainingSetCount `integer`: Count of the training set.
  * validationSetCount `integer`: Count of the validation set.

### PredictionResourceFormat
* PredictionResourceFormat `object`: The prediction resource format.
  * properties [Prediction](#prediction)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### PredictionTrainingResults
* PredictionTrainingResults `object`: The training results of the prediction.
  * canonicalProfiles `array`: Canonical profiles.
    * items [CanonicalProfileDefinition](#canonicalprofiledefinition)
  * predictionDistribution [PredictionDistributionDefinition](#predictiondistributiondefinition)
  * primaryProfileInstanceCount `integer`: Instance count of the primary profile.
  * scoreName `string`: Score name.
  * tenantId `string`: The hub name.

### ProfileEnumValidValuesFormat
* ProfileEnumValidValuesFormat `object`: Valid enum values in case of an enum property.
  * localizedValueNames `object`: Localized names of the enum member.
  * value `integer`: The integer value of the enum member.

### ProfileListResult
* ProfileListResult `object`: The response of list profile operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [ProfileResourceFormat](#profileresourceformat)

### ProfileResourceFormat
* ProfileResourceFormat `object`: The profile resource format.
  * properties [ProfileTypeDefinition](#profiletypedefinition)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### ProfileTypeDefinition
* ProfileTypeDefinition `object`: The profile type definition.
  * strongIds `array`: The strong IDs.
    * items [StrongId](#strongid)
  * apiEntitySetName `string`: The api entity set name. This becomes the odata entity set name for the entity Type being refered in this object.
  * entityType `string` (values: None, Profile, Interaction, Relationship): Type of entity.
  * fields `array`: The properties of the Profile.
    * items [PropertyDefinition](#propertydefinition)
  * instancesCount `integer`: The instance count.
  * lastChangedUtc `string`: The last changed time for the type definition.
  * provisioningState [ProvisioningState](#provisioningstate)
  * schemaItemTypeLink `string`: The schema org link. This helps ACI identify and suggest semantic models.
  * tenantId `string`: The hub name.
  * timestampFieldName `string`: The timestamp property name. Represents the time when the interaction or profile update happened.
  * typeName `string`: The name of the entity.
  * attributes `object`: The attributes for the Type.
  * description `object`: Localized descriptions for the property.
  * displayName `object`: Localized display names for the property.
  * largeImage `string`: Large Image associated with the Property or EntityType.
  * localizedAttributes `object`: Any custom localized attributes for the Type.
  * mediumImage `string`: Medium Image associated with the Property or EntityType.
  * smallImage `string`: Small Image associated with the Property or EntityType.

### PropertyDefinition
* PropertyDefinition `object`: Property definition.
  * arrayValueSeparator `string`: Array value separator for properties with isArray set.
  * dataSourcePrecedenceRules `array`: This is specific to interactions modeled as activities. Data sources are used to determine where data is stored and also in precedence rules.
    * items [DataSourcePrecedence](#datasourceprecedence)
  * enumValidValues `array`: Describes valid values for an enum property.
    * items [ProfileEnumValidValuesFormat](#profileenumvalidvaluesformat)
  * fieldName **required** `string`: Name of the property.
  * fieldType **required** `string`: Type of the property.
  * isArray `boolean`: Indicates if the property is actually an array of the fieldType above on the data api.
  * isAvailableInGraph `boolean`: Whether property is available in graph or not.
  * isEnum `boolean`: Indicates if the property is an enum.
  * isFlagEnum `boolean`: Indicates if the property is an flag enum.
  * isImage `boolean`: Whether the property is an Image.
  * isLocalizedString `boolean`: Whether the property is a localized string.
  * isName `boolean`: Whether the property is a name or a part of name.
  * isRequired `boolean`: Whether property value is required on instances, IsRequired field only for Intercation. Profile Instance will not check for required field.
  * maxLength `integer`: Max length of string. Used only if type is string.
  * propertyId `string`: The ID associated with the property.
  * schemaItemPropLink `string`: URL encoded schema.org item prop link for the property.

### ProvisioningState
* ProvisioningState `string` (values: Provisioning, Succeeded, Expiring, Deleting, HumanIntervention, Failed): Provisioning state.

### ProxyResource
* ProxyResource `object`: Common properties of proxy resource.
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RelationshipDefinition
* RelationshipDefinition `object`: The definition of Relationship.
  * cardinality `string` (values: OneToOne, OneToMany, ManyToMany): The Relationship Cardinality.
  * description `object`: Localized descriptions for the Relationship.
  * displayName `object`: Localized display name for the Relationship.
  * expiryDateTimeUtc `string`: The expiry date time in UTC.
  * fields `array`: The properties of the Relationship.
    * items [PropertyDefinition](#propertydefinition)
  * lookupMappings `array`: Optional property to be used to map fields in profile to their strong ids in related profile.
    * items [RelationshipTypeMapping](#relationshiptypemapping)
  * profileType **required** `string`: Profile type.
  * provisioningState [ProvisioningState](#provisioningstate)
  * relatedProfileType **required** `string`: Related profile being referenced.
  * relationshipGuidId `string`: The relationship guid id.
  * relationshipName `string`: The Relationship name.
  * tenantId `string`: The hub name.

### RelationshipLinkDefinition
* RelationshipLinkDefinition `object`: The definition of relationship link.
  * description `object`: Localized descriptions for the Relationship Link.
  * displayName `object`: Localized display name for the Relationship Link.
  * interactionType **required** `string`: The InteractionType associated with the Relationship Link.
  * linkName `string`: The name of the Relationship Link.
  * mappings `array`: The mappings between Interaction and Relationship fields.
    * items [RelationshipLinkFieldMapping](#relationshiplinkfieldmapping)
  * profilePropertyReferences **required** `array`: The property references for the Profile of the Relationship.
    * items [ParticipantProfilePropertyReference](#participantprofilepropertyreference)
  * provisioningState [ProvisioningState](#provisioningstate)
  * relatedProfilePropertyReferences **required** `array`: The property references for the Related Profile of the Relationship.
    * items [ParticipantProfilePropertyReference](#participantprofilepropertyreference)
  * relationshipGuidId `string`: The relationship guid id.
  * relationshipName **required** `string`: The Relationship associated with the Link.
  * tenantId `string`: The hub name.

### RelationshipLinkFieldMapping
* RelationshipLinkFieldMapping `object`: The fields mapping for Relationships.
  * interactionFieldName **required** `string`: The field name on the Interaction Type.
  * linkType `string` (values: UpdateAlways, CopyIfNull): Link type.
  * relationshipFieldName **required** `string`: The field name on the Relationship metadata.

### RelationshipLinkListResult
* RelationshipLinkListResult `object`: The response of list relationship link operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [RelationshipLinkResourceFormat](#relationshiplinkresourceformat)

### RelationshipLinkResourceFormat
* RelationshipLinkResourceFormat `object`: The relationship link resource format.
  * properties [RelationshipLinkDefinition](#relationshiplinkdefinition)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RelationshipListResult
* RelationshipListResult `object`: The response of list relationship operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [RelationshipResourceFormat](#relationshipresourceformat)

### RelationshipResourceFormat
* RelationshipResourceFormat `object`: The relationship resource format.
  * properties [RelationshipDefinition](#relationshipdefinition)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RelationshipTypeFieldMapping
* RelationshipTypeFieldMapping `object`: Map a field of profile to its corresponding StrongId in Related Profile.
  * profileFieldName **required** `string`: Specifies the fieldName in profile.
  * relatedProfileKeyProperty **required** `string`: Specifies the KeyProperty (from StrongId) of the related profile.

### RelationshipTypeMapping
* RelationshipTypeMapping `object`: Maps fields in Profile to their corresponding StrongIds in Related Profile.
  * fieldMappings **required** `array`: Maps a profile property with the StrongId of related profile. This is an array to support StrongIds that are composite key as well.
    * items [RelationshipTypeFieldMapping](#relationshiptypefieldmapping)

### RelationshipsLookup
* RelationshipsLookup `object`: The definition of suggested relationship for the type.
  * existingRelationshipName `string`: The name of existing Relationship.
  * profileName `string`: The relationship profile.
  * profilePropertyReferences `array`: The property references for the profile type.
    * items [ParticipantProfilePropertyReference](#participantprofilepropertyreference)
  * relatedProfileName `string`: The related profile.
  * relatedProfilePropertyReferences `array`: The property references for the related profile type.
    * items [ParticipantProfilePropertyReference](#participantprofilepropertyreference)

### Resource
* Resource `object`: Common properties of Azure resource.
  * id `string`: Resource ID.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ResourceSetDescription
* ResourceSetDescription `object`: The resource set description.
  * elements `array`: The elements included in the set.
    * items `string`
  * exceptions `array`: The elements that are not included in the set, in case elements contains '*' indicating 'all'.
    * items `string`

### Role
* Role `object`: The Role definition.
  * description `string`: The description of the role.
  * roleName `string`: The role name.

### RoleAssignment
* RoleAssignment `object`: The Role Assignment definition.
  * assignmentName `string`: The name of the metadata object.
  * conflationPolicies [ResourceSetDescription](#resourcesetdescription)
  * connectors [ResourceSetDescription](#resourcesetdescription)
  * description `object`: Localized description for the metadata.
  * displayName `object`: Localized display names for the metadata.
  * interactions [ResourceSetDescription](#resourcesetdescription)
  * kpis [ResourceSetDescription](#resourcesetdescription)
  * links [ResourceSetDescription](#resourcesetdescription)
  * principals **required** `array`: The principals being assigned to.
    * items [AssignmentPrincipal](#assignmentprincipal)
  * profiles [ResourceSetDescription](#resourcesetdescription)
  * provisioningState [ProvisioningState](#provisioningstate)
  * relationshipLinks [ResourceSetDescription](#resourcesetdescription)
  * relationships [ResourceSetDescription](#resourcesetdescription)
  * role **required** `string` (values: Admin, Reader, ManageAdmin, ManageReader, DataAdmin, DataReader): Type of roles.
  * roleAssignments [ResourceSetDescription](#resourcesetdescription)
  * sasPolicies [ResourceSetDescription](#resourcesetdescription)
  * segments [ResourceSetDescription](#resourcesetdescription)
  * tenantId `string`: The hub name.
  * views [ResourceSetDescription](#resourcesetdescription)
  * widgetTypes [ResourceSetDescription](#resourcesetdescription)

### RoleAssignmentListResult
* RoleAssignmentListResult `object`: The response of list role assignment operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [RoleAssignmentResourceFormat](#roleassignmentresourceformat)

### RoleAssignmentResourceFormat
* RoleAssignmentResourceFormat `object`: The Role Assignment resource format.
  * properties [RoleAssignment](#roleassignment)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### RoleListResult
* RoleListResult `object`: The response of list role assignment operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [RoleResourceFormat](#roleresourceformat)

### RoleResourceFormat
* RoleResourceFormat `object`: The role resource format.
  * properties [Role](#role)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### SalesforceConnectorProperties
* SalesforceConnectorProperties `object`: The Salesforce connector properties.
  * salesforcetables **required** `array`: The Salesforce tables.
    * items [SalesforceTable](#salesforcetable)
  * usersetting **required** [SalesforceDiscoverSetting](#salesforcediscoversetting)

### SalesforceDiscoverSetting
* SalesforceDiscoverSetting `object`: Salesforce discover setting.
  * salesforceConnectionStringSecretUrl **required** `string`: The salesforce connection string secret URL.

### SalesforceTable
* SalesforceTable `object`: Salesforce table.
  * isProfile `string`: Indicating whether this instance is profile.
  * tableCategory **required** `string`: The table category.
  * tableName **required** `string`: The name of the table.
  * tableRemarks `string`: The table remarks.
  * tableSchema **required** `string`: The table schema.

### StrongId
* StrongId `object`: Property/Properties which represent a unique ID.
  * description `object`: Localized descriptions.
  * displayName `object`: Localized display name.
  * keyPropertyNames **required** `array`: The properties which make up the unique ID.
    * items `string`
  * strongIdName **required** `string`: The Name identifying the strong ID.

### SuggestRelationshipLinksResponse
* SuggestRelationshipLinksResponse `object`: The response of suggest relationship links operation.
  * interactionName `string`: The interaction name.
  * suggestedRelationships `array`: Suggested relationships for the type.
    * items [RelationshipsLookup](#relationshipslookup)

### TypePropertiesMapping
* TypePropertiesMapping `object`: Metadata for a Link's property mapping.
  * linkType `string` (values: UpdateAlways, CopyIfNull): Link type.
  * sourcePropertyName **required** `string`:  Property name on the source Entity Type.
  * targetPropertyName **required** `string`: Property name on the target Entity Type.

### View
* View `object`: The view in Customer 360 web application.
  * changed `string`: Date time when view was last modified.
  * created `string`: Date time when view was created.
  * definition **required** `string`: View definition.
  * displayName `object`: Localized display name for the view.
  * tenantId `string`: the hub name.
  * userId `string`: the user ID.
  * viewName `string`: Name of the view.

### ViewListResult
* ViewListResult `object`: The response of list view operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [ViewResourceFormat](#viewresourceformat)

### ViewResourceFormat
* ViewResourceFormat `object`: The view resource format.
  * properties [View](#view)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.

### WidgetType
* WidgetType `object`: Definition of WidgetType.
  * changed `string`: Date time when widget type was last modified.
  * created `string`: Date time when widget type was created.
  * definition **required** `string`: Definition for widget type.
  * description `string`: Description for widget type.
  * displayName `object`: Localized display name for the widget type.
  * imageUrl `string`: The image URL.
  * tenantId `string`: The hub name.
  * widgetTypeName `string`: Name of the widget type.
  * widgetVersion `string`: The widget version.

### WidgetTypeListResult
* WidgetTypeListResult `object`: The response of list widget type operation.
  * nextLink `string`: Link to the next set of results.
  * value `array`: Results of the list operation.
    * items [WidgetTypeResourceFormat](#widgettyperesourceformat)

### WidgetTypeResourceFormat
* WidgetTypeResourceFormat `object`: The WidgetTypeResourceFormat
  * properties [WidgetType](#widgettype)
  * id `string`: Resource ID.
  * name `string`: Resource name.
  * type `string`: Resource type.


