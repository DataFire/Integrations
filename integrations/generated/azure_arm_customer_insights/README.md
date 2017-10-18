# @datafire/azure_arm_customer_insights

Client library for CustomerInsightsManagementClient

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_customer_insights
```

```js
let datafire = require('datafire');
let azure_arm_customer_insights = require('@datafire/azure_arm_customer_insights').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

azure_arm_customer_insights.Hubs_List({}).then(data => {
  console.log(data);
})
```

## Description
The Azure Customer Insights management API provides a RESTful set of web services that interact with Azure Customer Insights service to manage your resources. The API has entities that capture the relationship between an end user and the Azure Customer Insights service.

## Actions
### Hubs_List
Gets all hubs in the specified subscription.


```js
azure_arm_customer_insights.Hubs_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Hubs_ListByResourceGroup
Gets all the hubs in a resource group.


```js
azure_arm_customer_insights.Hubs_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Hubs_Delete
Deletes the specified hub.


```js
azure_arm_customer_insights.Hubs_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Hubs_Get
Gets information about the specified hub.


```js
azure_arm_customer_insights.Hubs_Get({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Hubs_Update
Updates a Hub.


```js
azure_arm_customer_insights.Hubs_Update({
  "resourceGroupName": "",
  "hubName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the Hub.
* parameters (undefined) **required** - Hub resource.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Hubs_CreateOrUpdate
Creates a hub, or updates an existing hub.


```js
azure_arm_customer_insights.Hubs_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the Hub.
* parameters (undefined) **required** - Hub resource.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### AuthorizationPolicies_ListByHub
Gets all the authorization policies in a specified hub.


```js
azure_arm_customer_insights.AuthorizationPolicies_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### AuthorizationPolicies_Get
Gets an authorization policy in the hub.


```js
azure_arm_customer_insights.AuthorizationPolicies_Get({
  "resourceGroupName": "",
  "hubName": "",
  "authorizationPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* authorizationPolicyName (string) **required** - The name of the policy.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### AuthorizationPolicies_CreateOrUpdate
Creates an authorization policy or updates an existing authorization policy.


```js
azure_arm_customer_insights.AuthorizationPolicies_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "authorizationPolicyName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* authorizationPolicyName (string) **required** - The name of the policy.
* parameters (undefined) **required** - The authorization policy resource format.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### AuthorizationPolicies_RegeneratePrimaryKey
Regenerates the primary policy key of the specified authorization policy.


```js
azure_arm_customer_insights.AuthorizationPolicies_RegeneratePrimaryKey({
  "resourceGroupName": "",
  "hubName": "",
  "authorizationPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* authorizationPolicyName (string) **required** - The name of the policy.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### AuthorizationPolicies_RegenerateSecondaryKey
Regenerates the secondary policy key of the specified authorization policy.


```js
azure_arm_customer_insights.AuthorizationPolicies_RegenerateSecondaryKey({
  "resourceGroupName": "",
  "hubName": "",
  "authorizationPolicyName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* authorizationPolicyName (string) **required** - The name of the policy.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Connectors_ListByHub
Gets all the connectors in the specified hub.


```js
azure_arm_customer_insights.Connectors_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Connectors_Delete
Deletes a connector in the hub.


```js
azure_arm_customer_insights.Connectors_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* connectorName (string) **required** - The name of the connector.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Connectors_Get
Gets a connector in the hub.


```js
azure_arm_customer_insights.Connectors_Get({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* connectorName (string) **required** - The name of the connector.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Connectors_CreateOrUpdate
Creates a connector or updates an existing connector in the hub.


```js
azure_arm_customer_insights.Connectors_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* connectorName (string) **required** - The name of the connector.
* parameters (undefined) **required** - The connector resource format.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### ConnectorMappings_ListByConnector
Gets all the connector mappings in the specified connector.


```js
azure_arm_customer_insights.ConnectorMappings_ListByConnector({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* connectorName (string) **required** - The name of the connector.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### ConnectorMappings_Delete
Deletes a connector mapping in the connector.


```js
azure_arm_customer_insights.ConnectorMappings_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "mappingName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* connectorName (string) **required** - The name of the connector.
* mappingName (string) **required** - The name of the connector mapping.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### ConnectorMappings_Get
Gets a connector mapping in the connector.


```js
azure_arm_customer_insights.ConnectorMappings_Get({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "mappingName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* connectorName (string) **required** - The name of the connector.
* mappingName (string) **required** - The name of the connector mapping.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### ConnectorMappings_CreateOrUpdate
Creates a connector mapping or updates an existing connector mapping in the connector.


```js
azure_arm_customer_insights.ConnectorMappings_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "connectorName": "",
  "mappingName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* connectorName (string) **required** - The name of the connector.
* mappingName (string) **required** - The name of the connector mapping.
* parameters (undefined) **required** - The c onnector mapping resource format.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Images_GetUploadUrlForData
Gets data image upload URL.


```js
azure_arm_customer_insights.Images_GetUploadUrlForData({
  "resourceGroupName": "",
  "hubName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* parameters (undefined) **required** - Input type for getting image upload url.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Images_GetUploadUrlForEntityType
Gets entity type (profile or interaction) image upload URL.


```js
azure_arm_customer_insights.Images_GetUploadUrlForEntityType({
  "resourceGroupName": "",
  "hubName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* parameters (undefined) **required** - Input type for getting image upload url.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Interactions_ListByHub
Gets all interactions in the hub.


```js
azure_arm_customer_insights.Interactions_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* locale-code (string) - Locale of interaction to retrieve, default is en-us.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Interactions_Get
Gets information about the specified interaction.


```js
azure_arm_customer_insights.Interactions_Get({
  "resourceGroupName": "",
  "hubName": "",
  "interactionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* interactionName (string) **required** - The name of the interaction.
* locale-code (string) - Locale of interaction to retrieve, default is en-us.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Interactions_CreateOrUpdate
Creates an interaction or updates an existing interaction within a hub.


```js
azure_arm_customer_insights.Interactions_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "interactionName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* interactionName (string) **required** - The name of the interaction.
* parameters (undefined) **required** - The interaction resource format.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Interactions_SuggestRelationshipLinks
Suggests relationships to create relationship links.


```js
azure_arm_customer_insights.Interactions_SuggestRelationshipLinks({
  "resourceGroupName": "",
  "hubName": "",
  "interactionName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* interactionName (string) **required** - The name of the interaction.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Kpi_ListByHub
Gets all the KPIs in the specified hub.


```js
azure_arm_customer_insights.Kpi_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Kpi_Delete
Deletes a KPI in the hub.


```js
azure_arm_customer_insights.Kpi_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "kpiName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* kpiName (string) **required** - The name of the KPI.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Kpi_Get
Gets a KPI in the hub.


```js
azure_arm_customer_insights.Kpi_Get({
  "resourceGroupName": "",
  "hubName": "",
  "kpiName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* kpiName (string) **required** - The name of the KPI.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Kpi_CreateOrUpdate
Creates a KPI or updates an existing KPI in the hub.


```js
azure_arm_customer_insights.Kpi_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "kpiName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* kpiName (string) **required** - The name of the KPI.
* parameters (undefined) **required** - The KPI resource format.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Kpi_Reprocess
Reprocesses the Kpi values of the specified KPI.


```js
azure_arm_customer_insights.Kpi_Reprocess({
  "resourceGroupName": "",
  "hubName": "",
  "kpiName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* kpiName (string) **required** - The name of the KPI.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Links_ListByHub
Gets all the links in the specified hub.


```js
azure_arm_customer_insights.Links_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Links_Delete
Deletes a link in the hub.


```js
azure_arm_customer_insights.Links_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "linkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* linkName (string) **required** - The name of the link.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Links_Get
Gets a link in the hub.


```js
azure_arm_customer_insights.Links_Get({
  "resourceGroupName": "",
  "hubName": "",
  "linkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* linkName (string) **required** - The name of the link.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Links_CreateOrUpdate
Creates a link or updates an existing link in the hub.


```js
azure_arm_customer_insights.Links_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "linkName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* linkName (string) **required** - The name of the link.
* parameters (undefined) **required** - The link resource format.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Profiles_ListByHub
Gets all profile in the hub.


```js
azure_arm_customer_insights.Profiles_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* locale-code (string) - Locale of profile to retrieve, default is en-us.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Profiles_Delete
Deletes a profile within a hub


```js
azure_arm_customer_insights.Profiles_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "profileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* profileName (string) **required** - The name of the profile.
* locale-code (string) - Locale of profile to retrieve, default is en-us.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Profiles_Get
Gets information about the specified profile.


```js
azure_arm_customer_insights.Profiles_Get({
  "resourceGroupName": "",
  "hubName": "",
  "profileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* profileName (string) **required** - The name of the profile.
* locale-code (string) - Locale of profile to retrieve, default is en-us.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Profiles_CreateOrUpdate
Creates a profile within a Hub, or updates an existing profile.


```js
azure_arm_customer_insights.Profiles_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "profileName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* profileName (string) **required** - The name of the profile.
* parameters (undefined) **required** - The profile resource format.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Profiles_GetEnrichingKpis
Gets the KPIs that enrich the profile Type identified by the supplied name. Enrichment happens through participants of the Interaction on an Interaction KPI and through Relationships for Profile KPIs.


```js
azure_arm_customer_insights.Profiles_GetEnrichingKpis({
  "resourceGroupName": "",
  "hubName": "",
  "profileName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* profileName (string) **required** - The name of the profile.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### RelationshipLinks_ListByHub
Gets all relationship links in the hub.


```js
azure_arm_customer_insights.RelationshipLinks_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### RelationshipLinks_Delete
Deletes a relationship link within a hub.


```js
azure_arm_customer_insights.RelationshipLinks_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "relationshipLinkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* relationshipLinkName (string) **required** - The name of the relationship.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### RelationshipLinks_Get
Gets information about the specified relationship Link.


```js
azure_arm_customer_insights.RelationshipLinks_Get({
  "resourceGroupName": "",
  "hubName": "",
  "relationshipLinkName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* relationshipLinkName (string) **required** - The name of the relationship link.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### RelationshipLinks_CreateOrUpdate
Creates a relationship link or updates an existing relationship link within a hub.


```js
azure_arm_customer_insights.RelationshipLinks_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "relationshipLinkName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* relationshipLinkName (string) **required** - The name of the relationship link.
* parameters (undefined) **required** - The relationship link resource format.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Relationships_ListByHub
Gets all relationships in the hub.


```js
azure_arm_customer_insights.Relationships_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Relationships_Delete
Deletes a relationship within a hub.


```js
azure_arm_customer_insights.Relationships_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "relationshipName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* relationshipName (string) **required** - The name of the relationship.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Relationships_Get
Gets information about the specified relationship.


```js
azure_arm_customer_insights.Relationships_Get({
  "resourceGroupName": "",
  "hubName": "",
  "relationshipName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* relationshipName (string) **required** - The name of the relationship.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Relationships_CreateOrUpdate
Creates a relationship or updates an existing relationship within a hub.


```js
azure_arm_customer_insights.Relationships_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "relationshipName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* relationshipName (string) **required** - The name of the Relationship.
* parameters (undefined) **required** - The relationship resource format.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### RoleAssignments_ListByHub
Gets all the role assignments for the specified hub.


```js
azure_arm_customer_insights.RoleAssignments_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### RoleAssignments_Delete
Deletes the role assignment in the hub.


```js
azure_arm_customer_insights.RoleAssignments_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "assignmentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* assignmentName (string) **required** - The name of the role assignment.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### RoleAssignments_Get
Gets the role assignment in the hub.


```js
azure_arm_customer_insights.RoleAssignments_Get({
  "resourceGroupName": "",
  "hubName": "",
  "assignmentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* assignmentName (string) **required** - The name of the role assignment.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### RoleAssignments_CreateOrUpdate
Creates or updates a role assignment in the hub.


```js
azure_arm_customer_insights.RoleAssignments_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "assignmentName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* assignmentName (string) **required** - The assignment name
* parameters (undefined) **required** - The Role Assignment resource format.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Roles_ListByHub
Gets all the roles for the hub.


```js
azure_arm_customer_insights.Roles_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### Views_ListByHub
Gets all available views for given user in the specified hub.


```js
azure_arm_customer_insights.Views_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": "",
  "userId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* userId (string) **required** - The user ID. Use * to retreive hub level views.

### Views_Delete
Deletes a view in the specified hub.


```js
azure_arm_customer_insights.Views_Delete({
  "resourceGroupName": "",
  "hubName": "",
  "viewName": "",
  "api-version": "",
  "subscriptionId": "",
  "userId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* viewName (string) **required** - The name of the view.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* userId (string) **required** - The user ID. Use * to retreive hub level view.

### Views_Get
Gets a view in the hub.


```js
azure_arm_customer_insights.Views_Get({
  "resourceGroupName": "",
  "hubName": "",
  "viewName": "",
  "api-version": "",
  "subscriptionId": "",
  "userId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* viewName (string) **required** - The name of the view.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* userId (string) **required** - The user ID. Use * to retreive hub level view.

### Views_CreateOrUpdate
Creates a view or updates an exisiting view in the hub.


```js
azure_arm_customer_insights.Views_CreateOrUpdate({
  "resourceGroupName": "",
  "hubName": "",
  "viewName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* viewName (string) **required** - The name of the view.
* parameters (undefined) **required** - The view resource format.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### WidgetTypes_ListByHub
Gets all available widget types in the specified hub.


```js
azure_arm_customer_insights.WidgetTypes_ListByHub({
  "resourceGroupName": "",
  "hubName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

### WidgetTypes_Get
Gets a widget type in the specified hub.


```js
azure_arm_customer_insights.WidgetTypes_Get({
  "resourceGroupName": "",
  "hubName": "",
  "widgetTypeName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - The name of the resource group.
* hubName (string) **required** - The name of the hub.
* widgetTypeName (string) **required** - The name of the widget type.
* api-version (string) **required** - Client Api Version.
* subscriptionId (string) **required** - Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

