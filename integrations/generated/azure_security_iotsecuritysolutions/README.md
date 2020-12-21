# @datafire/azure_security_iotsecuritysolutions

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_iotsecuritysolutions
```
```js
let azure_security_iotsecuritysolutions = require('@datafire/azure_security_iotsecuritysolutions').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### IotSecuritySolution_ListBySubscription
Use this method to get the list of IoT Security solutions by subscription.


```js
azure_security_iotsecuritysolutions.IotSecuritySolution_ListBySubscription({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * $filter `string`: Filter the IoT Security solution with OData syntax. Supports filtering by iotHubs.

#### Output
* output [IoTSecuritySolutionsList](#iotsecuritysolutionslist)

### IotSecuritySolution_ListByResourceGroup
Use this method to get the list IoT Security solutions organized by resource group.


```js
azure_security_iotsecuritysolutions.IotSecuritySolution_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * $filter `string`: Filter the IoT Security solution with OData syntax. Supports filtering by iotHubs.

#### Output
* output [IoTSecuritySolutionsList](#iotsecuritysolutionslist)

### IotSecuritySolution_Delete
Use this method to delete yours IoT Security solution


```js
azure_security_iotsecuritysolutions.IotSecuritySolution_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * solutionName **required** `string`: The name of the IoT Security solution.

#### Output
*Output schema unknown*

### IotSecuritySolution_Get
User this method to get details of a specific IoT Security solution based on solution name


```js
azure_security_iotsecuritysolutions.IotSecuritySolution_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * solutionName **required** `string`: The name of the IoT Security solution.

#### Output
* output [IoTSecuritySolutionModel](#iotsecuritysolutionmodel)

### IotSecuritySolution_Update
Use this method to update existing IoT Security solution tags or user defined resources. To update other fields use the CreateOrUpdate method.


```js
azure_security_iotsecuritysolutions.IotSecuritySolution_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": "",
  "updateIotSecuritySolutionData": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * solutionName **required** `string`: The name of the IoT Security solution.
  * updateIotSecuritySolutionData **required** [UpdateIotSecuritySolutionData](#updateiotsecuritysolutiondata)

#### Output
* output [IoTSecuritySolutionModel](#iotsecuritysolutionmodel)

### IotSecuritySolution_CreateOrUpdate
Use this method to create or update yours IoT Security solution


```js
azure_security_iotsecuritysolutions.IotSecuritySolution_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": "",
  "iotSecuritySolutionData": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * solutionName **required** `string`: The name of the IoT Security solution.
  * iotSecuritySolutionData **required** [IoTSecuritySolutionModel](#iotsecuritysolutionmodel)

#### Output
* output [IoTSecuritySolutionModel](#iotsecuritysolutionmodel)



## Definitions

### IoTSecuritySolutionModel
* IoTSecuritySolutionModel `object`: IoT Security solution configuration and resource information.
  * location `string`: The resource location.
  * properties [IoTSecuritySolutionProperties](#iotsecuritysolutionproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * tags `object`: Resource tags

### IoTSecuritySolutionProperties
* IoTSecuritySolutionProperties `object`: Security Solution setting data
  * autoDiscoveredResources `array`: List of resources that were automatically discovered as relevant to the security solution.
    * items `string`
  * disabledDataSources `array`: Disabled data sources. Disabling these data sources compromises the system.
    * items `string` (values: TwinData)
  * displayName **required** `string`: Resource display name.
  * export `array`: List of additional options for exporting to workspace data.
    * items `string` (values: RawEvents)
  * iotHubs **required** `array`: IoT Hub resource IDs
    * items `string`
  * recommendationsConfiguration [RecommendationConfigurationList](#recommendationconfigurationlist)
  * status `string` (values: Enabled, Disabled): Status of the IoT Security solution.
  * unmaskedIpLoggingStatus `string` (values: Disabled, Enabled): Unmasked IP address logging status
  * userDefinedResources [UserDefinedResourcesProperties](#userdefinedresourcesproperties)
  * workspace **required** `string`: Workspace resource ID

### IoTSecuritySolutionsList
* IoTSecuritySolutionsList `object`: List of IoT Security solutions.
  * nextLink `string`: The URI to fetch the next page.
  * value **required** `array`: List of IoT Security solutions
    * items [IoTSecuritySolutionModel](#iotsecuritysolutionmodel)

### RecommendationConfigurationList
* RecommendationConfigurationList `array`: List of the configuration status for each recommendation type.
  * items [RecommendationConfigurationProperties](#recommendationconfigurationproperties)

### RecommendationConfigurationProperties
* RecommendationConfigurationProperties `object`: The type of IoT Security recommendation.
  * name `string`
  * recommendationType **required** `string` (values: IoT_ACRAuthentication, IoT_AgentSendsUnutilizedMessages, IoT_Baseline, IoT_EdgeHubMemOptimize, IoT_EdgeLoggingOptions, IoT_InconsistentModuleSettings, IoT_InstallAgent, IoT_IPFilter_DenyAll, IoT_IPFilter_PermissiveRule, IoT_OpenPorts, IoT_PermissiveFirewallPolicy, IoT_PermissiveInputFirewallRules, IoT_PermissiveOutputFirewallRules, IoT_PrivilegedDockerOptions, IoT_SharedCredentials, IoT_VulnerableTLSCipherSuite): The type of IoT Security recommendation.
  * status **required** `string` (values: Disabled, Enabled): Recommendation status. When the recommendation status is disabled recommendations are not generated.

### TagsResource
* TagsResource `object`: A container holding only the Tags for a resource, allowing the user to update the tags.
  * tags `object`: Resource tags

### UpdateIoTSecuritySolutionProperties
* UpdateIoTSecuritySolutionProperties `object`: Update Security Solution setting data
  * recommendationsConfiguration [RecommendationConfigurationList](#recommendationconfigurationlist)
  * userDefinedResources [UserDefinedResourcesProperties](#userdefinedresourcesproperties)

### UpdateIotSecuritySolutionData
* UpdateIotSecuritySolutionData `object`
  * properties [UpdateIoTSecuritySolutionProperties](#updateiotsecuritysolutionproperties)
  * tags `object`: Resource tags

### UserDefinedResourcesProperties
* UserDefinedResourcesProperties `object`: Properties of the IoT Security solution's user defined resources.
  * query **required** `string`: Azure Resource Graph query which represents the security solution's user defined resources. Required to start with "where type != "Microsoft.Devices/IotHubs""
  * querySubscriptions **required** `array`: List of Azure subscription ids on which the user defined resources query should be executed.
    * items `string`


