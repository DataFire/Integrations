# @datafire/azure_applicationinsights_componentworkitemconfigs_api

Client library for ApplicationInsightsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_applicationinsights_componentworkitemconfigs_api
```
```js
let azure_applicationinsights_componentworkitemconfigs_api = require('@datafire/azure_applicationinsights_componentworkitemconfigs_api').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_applicationinsights_componentworkitemconfigs_api.WorkItemConfigurations_GetDefault({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure Application Insights client for work item configurations for a component.

## Actions

### WorkItemConfigurations_GetDefault
Gets default work item configurations that exist for the application


```js
azure_applicationinsights_componentworkitemconfigs_api.WorkItemConfigurations_GetDefault({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.

#### Output
* output [WorkItemConfiguration](#workitemconfiguration)

### WorkItemConfigurations_List
Gets the list work item configurations that exist for the application


```js
azure_applicationinsights_componentworkitemconfigs_api.WorkItemConfigurations_List({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.

#### Output
* output `array`
  * items [WorkItemConfiguration](#workitemconfiguration)

### WorkItemConfigurations_Create
Create a work item configuration for an Application Insights component.


```js
azure_applicationinsights_componentworkitemconfigs_api.WorkItemConfigurations_Create({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "WorkItemConfigurationProperties": {}
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * WorkItemConfigurationProperties **required** [WorkItemCreateConfiguration](#workitemcreateconfiguration)

#### Output
* output [WorkItemConfiguration](#workitemconfiguration)

### WorkItemConfigurations_Delete
Delete an workitem configuration of an Application Insights component.


```js
azure_applicationinsights_componentworkitemconfigs_api.WorkItemConfigurations_Delete({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": "",
  "resourceName": "",
  "workItemConfigId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: The Azure subscription ID.
  * resourceName **required** `string`: The name of the Application Insights component resource.
  * workItemConfigId **required** `string`: The unique work item configuration Id. This can be either friendly name of connector as defined in connector configuration

#### Output
*Output schema unknown*



## Definitions

### InnerError
* InnerError `object`: Inner error
  * diagnosticcontext `string`: Provides correlation for request
  * time `string`: Request time

### WorkItemConfiguration
* WorkItemConfiguration `object`: Work item configuration associated with an application insights resource.
  * ConfigDisplayName `string`: Configuration friendly name
  * ConfigProperties `string`: Serialized JSON object for detailed properties
  * ConnectorId `string`: Connector identifier where work item is created
  * Id `string`: Unique Id for work item
  * IsDefault `boolean`: Boolean value indicating whether configuration is default

### WorkItemConfigurationError
* WorkItemConfigurationError `object`: Error associated with trying to get work item configuration or configurations
  * code `string`: Error detail code and explanation
  * innererror [InnerError](#innererror)
  * message `string`: Error message

### WorkItemCreateConfiguration
* WorkItemCreateConfiguration `object`: Work item configuration creation payload
  * ConnectorDataConfiguration `string`: Serialized JSON object for detaile d properties
  * ConnectorId `string`: Unique connector id
  * ValidateOnly `boolean`: Boolean indicating validate only
  * WorkItemProperties `string`: Custom work item properties


