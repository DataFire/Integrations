# @datafire/azure_visualstudio_projects

Client library for Visual Studio Projects Resource Provider Client

## Installation and Usage
```bash
npm install --save @datafire/azure_visualstudio_projects
```
```js
let azure_visualstudio_projects = require('@datafire/azure_visualstudio_projects').create({
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

Use these APIs to manage Visual Studio Team Services resources through the Azure Resource Manager. All task operations conform to the HTTP/1.1 protocol specification and each operation returns an x-ms-request-id header that can be used to obtain information about the request. You must make sure that requests made to these resources are secure. For more information, see https://docs.microsoft.com/en-us/rest/api/index.

## Actions

### Projects_ListByAccountResource
Gets all Visual Studio Team Services project resources created in the specified Team Services account.


```js
azure_visualstudio_projects.Projects_ListByAccountResource({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": "",
  "rootResourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * rootResourceName **required** `string`: Name of the Team Services account.

#### Output
* output [ProjectResourceListResult](#projectresourcelistresult)

### Projects_Get
Gets the details of a Team Services project resource.


```js
azure_visualstudio_projects.Projects_Get({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": "",
  "rootResourceName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * rootResourceName **required** `string`: Name of the Team Services account.
  * resourceName **required** `string`: Name of the Team Services project.

#### Output
* output [ProjectResource](#projectresource)

### Projects_Update
Updates the tags of the specified Team Services project.


```js
azure_visualstudio_projects.Projects_Update({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": "",
  "body": {},
  "rootResourceName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * body **required** [ProjectResourceUpdateParameters](#projectresourceupdateparameters)
  * rootResourceName **required** `string`: Name of the Team Services account.
  * resourceName **required** `string`: Name of the Team Services project.

#### Output
* output [ProjectResource](#projectresource)

### Projects_CreateOrUpdate
Creates or updates a Team Services project in the collection with the specified name. 'VersionControlOption' and 'ProcessTemplateId' must be specified in the resource properties. Valid values for VersionControlOption: Git, Tfvc. Valid values for ProcessTemplateId: 6B724908-EF14-45CF-84F8-768B5384DA45, ADCC42AB-9882-485E-A3ED-7678F01F66BC, 27450541-8E31-4150-9947-DC59F998FC01 (these IDs correspond to Scrum, Agile, and CMMI process templates).


```js
azure_visualstudio_projects.Projects_CreateOrUpdate({
  "body": {},
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": "",
  "rootResourceName": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * body **required** [ProjectResource](#projectresource)
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * rootResourceName **required** `string`: Name of the Team Services account.
  * resourceName **required** `string`: Name of the Team Services project.
  * validating `string`: This parameter is ignored and should be set to an empty string.

#### Output
* output [ProjectResource](#projectresource)



## Definitions

### ApplicationSource
* ApplicationSource `object`: Defines the source application for a VSTS pipeline.
  * applicationConfiguration `object`: Application specific properties.
  * applicationType **required** `string` (values: AspDotNet, AspDotNetCore, NodeJs): Type of application.
  * sourceType **required** `string` (values: CodeTemplate, CodeRepository): Type of application source.

### ApplicationTarget
* ApplicationTarget `object`: Defines the target resources for a VSTS pipeline.
  * resources **required** `array`: List of target resources.
    * items [TargetResource](#targetresource)
  * targetType **required** `string` (values: WindowsAppService): Type of target.

### Authorization
* Authorization `object`: Defines the authorization type and its parameters.
  * authorizationType **required** `string` (values: authorizationToken, personalAccessToken): Type of authorization.
  * parameters `object`: Authorization parameters corresponding to the authorization type.

### CodeRepository
* CodeRepository `object`: Defines a code repository.
  * authorization [Authorization](#authorization)
  * defaultBranch **required** `string`: Default branch for which continuous integration should be configured in the VSTS pipeline.
  * id **required** `string`: Unique identifier of the code repository.
  * properties `object`: Repository-specific properties.
  * repositoryType **required** `string` (values: gitHub, vstsGit): Type of code repository.

### CodeRepositoryApplicationSource
* CodeRepositoryApplicationSource `object`: Defines the source application, when it resides in a code repository.
  * repository **required** [CodeRepositoryLegacy](#coderepositorylegacy)
  * applicationConfiguration `object`: Application specific properties.
  * applicationType **required** `string` (values: AspDotNet, AspDotNetCore, NodeJs): Type of application.
  * sourceType **required** `string` (values: CodeTemplate, CodeRepository): Type of application source.

### CodeRepositoryLegacy
* CodeRepositoryLegacy `object`: Defines a code repository.
  * authorizationReference `string`: Reference to the authorization info used to access the code repository. This value is used as a key into the global authorization details dictionary.
  * defaultBranch **required** `string`: Default branch for which continuous integration should be configured in the VSTS pipeline.
  * id **required** `string`: Unique identifier of the code repository.
  * properties `object`: Repository-specific properties.
  * repositoryType **required** `string` (values: gitHub, vstsGit): Type of code repository.

### CodeTemplateApplicationSource
* CodeTemplateApplicationSource `object`: Defines the source application template.
  * applicationConfiguration `object`: Application specific properties.
  * applicationType **required** `string` (values: AspDotNet, AspDotNetCore, NodeJs): Type of application.
  * sourceType **required** `string` (values: CodeTemplate, CodeRepository): Type of application source.

### PipelineBootstrapConfiguration
* PipelineBootstrapConfiguration `object`: Defines bootstrap configuration for a CI/CD pipeline.
  * name **required** `string`: Name of the bootstrap configuration.
  * repository [CodeRepository](#coderepository)
  * templateId **required** `string`: Identifier of the pipeline template used for configuring pipeline.
  * templateParameters `object`: Dictionary of inputs used for configuring pipeline. The keys for inputs are defined by pipeline template.

### PipelineTemplateLegacy
* PipelineTemplateLegacy `object`: Defines a VSTS pipeline template.
  * applicationSource **required** [ApplicationSource](#applicationsource)
  * applicationTarget **required** [ApplicationTarget](#applicationtarget)
  * authorizationDetails **required** `object`: Global dictionary of authorization details used by the pipeline, with a friendly name as key. Individual resource in the pipeline can reference to a specific authorization info using the friendly name.

### ProjectResource
* ProjectResource `object`: A Visual Studio Team Services project resource.
  * kind `string` (values: project, bootstrappedProject): Kind of project resource. A bootStrappedProject is a project which has additional bootstrap information to create a CI/CD pipeline in the project.
  * properties [ProjectResourceProperties](#projectresourceproperties)
  * id `string`: Unique identifier of the resource.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ProjectResourceListResult
* ProjectResourceListResult `object`: The response to a request to list Team Services project resources in a resource group/account.
  * value `array`: List of project resource details.
    * items [ProjectResource](#projectresource)

### ProjectResourceProperties
* ProjectResourceProperties `object`: Defines the custom properties of project resource.
  * bootstrapPipelineTemplate [PipelineTemplateLegacy](#pipelinetemplatelegacy)
  * ownerUpn `string`: Optional UPN of the owner, on-behalf-of whom the project is being created.
  * pipelineBootstrapConfigurations `array`: Bootstrap configuration for pipelines in Team Project.
    * items [PipelineBootstrapConfiguration](#pipelinebootstrapconfiguration)
  * processTemplateId `string` (values: Scrum, Agile, Cmmi): Process template to use in the project.
  * tfsUniqueIdentifier `string`: Unique identifier of the VSTS project.
  * versionControlOption `string` (values: Git, Tfvc): Version control to use for the default repo created in the project.

### ProjectResourceUpdateParameters
* ProjectResourceUpdateParameters `object`: The parameters to update a project resource.
  * properties `object`: Custom properties of project resource.
    * pipelineBootstrapConfigurations `array`: Bootstrap configurations for pipelines in Team Project.
      * items [PipelineBootstrapConfiguration](#pipelinebootstrapconfiguration)
  * tags `object`: The custom tags to be set on the resource.

### Resource
* Resource `object`: A generic Azure Resource Manager resource.
  * id `string`: Unique identifier of the resource.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### TargetResource
* TargetResource `object`: Defines a single resource used as target for a VSTS pipeline.
  * authorizationReference `string`: Reference to the authorization info used to access the target resource. This value is used as a key into the global authorization details dictionary.
  * id **required** `string`: Unique identifier of the target resource.
  * role **required** `string`: Role of the target resource.


