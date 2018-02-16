# @datafire/azure_compute_swagger

Client library for ComputeManagementConvenienceClient

## Installation and Usage
```bash
npm install --save @datafire/azure_compute_swagger
```
```js
let azure_compute_swagger = require('@datafire/azure_compute_swagger').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_compute_swagger.VirtualMachines_QuickCreate({
  "resourceGroupName": "",
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### VirtualMachines_QuickCreate
Create a named template deployment using a template.


```js
azure_compute_swagger.VirtualMachines_QuickCreate({
  "resourceGroupName": "",
  "deploymentName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. The name is case insensitive.
  * deploymentName **required** `string`: The name of the deployment.
  * parameters [Deployment](#deployment)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [DeploymentExtended](#deploymentextended)



## Definitions

### BasicDependency
* BasicDependency `object`: Deployment dependency information.
  * id `string`: Gets or sets the ID of the dependency.
  * resourceName `string`: Gets or sets the dependency resource name.
  * resourceType `string`: Gets or sets the dependency resource type.

### Dependency
* Dependency `object`: Deployment dependency information.
  * dependsOn `array`: Gets the list of dependencies.
    * items [BasicDependency](#basicdependency)
  * id `string`: Gets or sets the ID of the dependency.
  * resourceName `string`: Gets or sets the dependency resource name.
  * resourceType `string`: Gets or sets the dependency resource type.

### Deployment
* Deployment `object`: Deployment operation parameters.
  * properties [DeploymentProperties](#deploymentproperties)

### DeploymentExtended
* DeploymentExtended `object`: Deployment information.
  * id `string`: Gets or sets the ID of the deployment.
  * name **required** `string`: Gets or sets the name of the deployment.
  * properties [DeploymentPropertiesExtended](#deploymentpropertiesextended)

### DeploymentParameters
* DeploymentParameters `object`
  * adminPassword `object`
    * value **required** `string`: Password for the Virtual Machine.
  * adminUsername `object`
    * value **required** `string`: Username for the Virtual Machine.
  * dnsLabelPrefix `object`
    * value **required** `string`: Unique DNS Name for the Public IP used to access the Virtual Machine.
  * osVersion `object`: Deployment operation parameters.
    * value **required** `string` (values: 12.04.5-LTS, 14.04.2-LTS, 15.10): The OS version for the VM. This will pick a fully patched image of this given OS version.

### DeploymentProperties
* DeploymentProperties `object`: Deployment properties.
  * mode **required** `string` (values: Incremental): Gets or sets the deployment mode.
  * parameters [DeploymentParameters](#deploymentparameters)
  * templateLink **required** [TemplateLink](#templatelink)

### DeploymentPropertiesExtended
* DeploymentPropertiesExtended `object`: Deployment properties with additional details.
  * correlationId `string`: Gets or sets the correlation ID of the deployment.
  * dependencies `array`: Gets the list of deployment dependencies.
    * items [Dependency](#dependency)
  * mode `string` (values: Incremental, Complete): Gets or sets the deployment mode.
  * outputs `object`: Gets or sets key/value pairs that represent deploymentoutput.
  * parameters `object`: Deployment parameters. Use only one of Parameters or ParametersLink.
  * parametersLink [ParametersLink](#parameterslink)
  * providers `array`: Gets the list of resource providers needed for the deployment.
    * items [Provider](#provider)
  * provisioningState `string`: Gets or sets the state of the provisioning.
  * template `object`: Gets or sets the template content. Use only one of Template or TemplateLink.
  * templateLink [TemplateLink](#templatelink)
  * timestamp `string`: Gets or sets the timestamp of the template deployment.

### ParametersLink
* ParametersLink `object`: Entity representing the reference to the deployment paramaters.
  * contentVersion `string`: If included it must match the ContentVersion in the template.
  * uri **required** `string`: URI referencing the template.

### Provider
* Provider `object`: Resource provider information.
  * id `string`: Gets or sets the provider id.
  * namespace `string`: Gets or sets the namespace of the provider.
  * registrationState `string`: Gets or sets the registration state of the provider.
  * resourceTypes `array`: Gets or sets the collection of provider resource types.
    * items [ProviderResourceType](#providerresourcetype)

### ProviderResourceType
* ProviderResourceType `object`: Resource type managed by the resource provider.
  * apiVersions `array`: Gets or sets the api version.
    * items `string`
  * locations `array`: Gets or sets the collection of locations where this resource type can be created in.
    * items `string`
  * properties `object`: Gets or sets the properties.
  * resourceType `string`: Gets or sets the resource type.

### TemplateLink
* TemplateLink `object`: Entity representing the reference to the template.
  * uri **required** `string` (values: https://raw.githubusercontent.com/stankovski/azure-rest-api-specs/master/arm-compute/quickstart-templates/vm-simple-linux.json): URI referencing the template.


