# @datafire/azure_visualstudio_csm

Client library for Visual Studio Resource Provider Client

## Installation and Usage
```bash
npm install --save @datafire/azure_visualstudio_csm
```
```js
let azure_visualstudio_csm = require('@datafire/azure_visualstudio_csm').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_visualstudio_csm.Operations_List(null).then(data => {
  console.log(data);
});
```

## Description

Use these APIs to manage Visual Studio Team Services resources through the Azure Resource Manager. All task operations conform to the HTTP/1.1 protocol specification and each operation returns an x-ms-request-id header that can be used to obtain information about the request. You must make sure that requests made to these resources are secure. For more information, see https://docs.microsoft.com/en-us/rest/api/index.

## Actions

### Operations_List
Gets the details of all operations possible on the Microsoft.VisualStudio resource provider.


```js
azure_visualstudio_csm.Operations_List(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OperationListResult](#operationlistresult)

### Accounts_CheckNameAvailability
Checks if the specified Visual Studio Team Services account name is available. Resource name can be either an account name or an account name and PUID.


```js
azure_visualstudio_csm.Accounts_CheckNameAvailability({
  "subscriptionId": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * body **required** [CheckNameAvailabilityParameter](#checknameavailabilityparameter)

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)

### Project_ListByAccountResource
Gets all Visual Studio Team Services project resources created in the specified Team Services account.


```js
azure_visualstudio_csm.Project_ListByAccountResource({
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
azure_visualstudio_csm.Projects_Get({
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
azure_visualstudio_csm.Projects_Update({
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

### Projects_Create
Creates a Team Services project in the collection with the specified name. 'VersionControlOption' and 'ProcessTemplateId' must be specified in the resource properties. Valid values for VersionControlOption: Git, Tfvc. Valid values for ProcessTemplateId: 6B724908-EF14-45CF-84F8-768B5384DA45, ADCC42AB-9882-485E-A3ED-7678F01F66BC, 27450541-8E31-4150-9947-DC59F998FC01 (these IDs correspond to Scrum, Agile, and CMMI process templates).


```js
azure_visualstudio_csm.Projects_Create({
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

### Accounts_ListByResourceGroup
Gets all Visual Studio Team Services account resources under the resource group linked to the specified Azure subscription.


```js
azure_visualstudio_csm.Accounts_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version

#### Output
* output [AccountResourceListResult](#accountresourcelistresult)

### Extensions_ListByAccount
Gets the details of the extension resources created within the resource group.


```js
azure_visualstudio_csm.Extensions_ListByAccount({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": "",
  "accountResourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * accountResourceName **required** `string`: The name of the Visual Studio Team Services account resource.

#### Output
* output [ExtensionResourceListResult](#extensionresourcelistresult)

### Extensions_Delete
Removes an extension resource registration for a Visual Studio Team Services account.


```js
azure_visualstudio_csm.Extensions_Delete({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": "",
  "accountResourceName": "",
  "extensionResourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * accountResourceName **required** `string`: The name of the Visual Studio Team Services account resource.
  * extensionResourceName **required** `string`: The name of the extension.

#### Output
*Output schema unknown*

### Extensions_Get
Gets the details of an extension associated with a Visual Studio Team Services account resource.


```js
azure_visualstudio_csm.Extensions_Get({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": "",
  "accountResourceName": "",
  "extensionResourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * accountResourceName **required** `string`: The name of the Visual Studio Team Services account resource.
  * extensionResourceName **required** `string`: The name of the extension.

#### Output
* output [ExtensionResource](#extensionresource)

### Extensions_Update
Updates an existing extension registration for the Visual Studio Team Services account.


```js
azure_visualstudio_csm.Extensions_Update({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": "",
  "body": {},
  "accountResourceName": "",
  "extensionResourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * body **required** [ExtensionResourceRequest](#extensionresourcerequest)
  * accountResourceName **required** `string`: The name of the Visual Studio Team Services account resource.
  * extensionResourceName **required** `string`: The name of the extension.

#### Output
* output [ExtensionResource](#extensionresource)

### Extensions_Create
Registers the extension with a Visual Studio Team Services account.


```js
azure_visualstudio_csm.Extensions_Create({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": "",
  "body": {},
  "accountResourceName": "",
  "extensionResourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * body **required** [ExtensionResourceRequest](#extensionresourcerequest)
  * accountResourceName **required** `string`: The name of the Visual Studio Team Services account resource.
  * extensionResourceName **required** `string`: The name of the extension.

#### Output
* output [ExtensionResource](#extensionresource)

### Accounts_Delete
Deletes a Visual Studio Team Services account resource.


```js
azure_visualstudio_csm.Accounts_Delete({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * resourceName **required** `string`: Name of the resource.

#### Output
*Output schema unknown*

### Accounts_Get
Gets the Visual Studio Team Services account resource details.


```js
azure_visualstudio_csm.Accounts_Get({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * resourceName **required** `string`: Name of the resource.

#### Output
* output [AccountResource](#accountresource)

### Accounts_CreateOrUpdate
Creates or updates a Visual Studio Team Services account resource.


```js
azure_visualstudio_csm.Accounts_CreateOrUpdate({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": "",
  "body": {},
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * subscriptionId **required** `string`: The Azure subscription identifier.
  * api-version **required** `string`: API Version
  * body **required** [AccountResourceRequest](#accountresourcerequest)
  * resourceName **required** `string`: Name of the resource.

#### Output
* output [AccountResource](#accountresource)



## Definitions

### AccountResource
* AccountResource `object`: The response to an account resource GET request.
  * properties `object`: Resource properties.
  * id `string`: Unique identifier of the resource.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### AccountResourceListResult
* AccountResourceListResult `object`: The response to an account resource list GET request.
  * value `array`: Array of resource details.
    * items [AccountResource](#accountresource)

### AccountResourceRequest
* AccountResourceRequest `object`: The body of a PUT request to modify a Visual Studio account resource.
  * accountName `string`: The account name.
  * location `string`: The Azure instance location.
  * operationType `string` (values: unknown, create, update, link): The type of the operation.
  * properties `object`: The custom properties of the resource.
  * tags `object`: The custom tags of the resource.

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

### CheckNameAvailabilityParameter
* CheckNameAvailabilityParameter `object`: The body of a POST request to check name availability.
  * resourceName `string`: The name of the resource to check availability for.
  * resourceType `string`: The type of resource to check availability for.

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: The response to a name availability request.
  * message `string`: The message describing the detailed reason.
  * nameAvailable `boolean`: The value which indicates whether the provided name is available.

### CodeRepository
* CodeRepository `object`: Defines a code repository.
  * authorizationReference `string`: Reference to the authorization info used to access the code repository. This value is used as a key into the global authorization details dictionary.
  * defaultBranch **required** `string`: Default branch for which continuous integration should be configured in the VSTS pipeline.
  * id **required** `string`: Unique identifier of the code repository.
  * properties `object`: Repository-specific properties.
  * repositoryType **required** `string` (values: gitHub, vstsGit): Type of code repository.

### CodeRepositoryApplicationSource
* CodeRepositoryApplicationSource `object`: Defines the source application, when it resides in a code repository.
  * repository **required** [CodeRepository](#coderepository)
  * applicationConfiguration `object`: Application specific properties.
  * applicationType **required** `string` (values: AspDotNet, AspDotNetCore, NodeJs): Type of application.
  * sourceType **required** `string` (values: CodeTemplate, CodeRepository): Type of application source.

### CodeTemplateApplicationSource
* CodeTemplateApplicationSource `object`: Defines the source application template.
  * applicationConfiguration `object`: Application specific properties.
  * applicationType **required** `string` (values: AspDotNet, AspDotNetCore, NodeJs): Type of application.
  * sourceType **required** `string` (values: CodeTemplate, CodeRepository): Type of application source.

### ExtensionResource
* ExtensionResource `object`: The response to an extension resource GET request.
  * plan [ExtensionResourcePlan](#extensionresourceplan)
  * properties `object`: Resource properties.
  * id `string`: Unique identifier of the resource.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ExtensionResourceListResult
* ExtensionResourceListResult `object`: The response to an extension resource list GET request.
  * value `array`: Array of extension resource details.
    * items [ExtensionResource](#extensionresource)

### ExtensionResourcePlan
* ExtensionResourcePlan `object`: Plan data for an extension resource.
  * name `string`: Name of the plan.
  * product `string`: Product name.
  * promotionCode `string`: Optional: the promotion code associated with the plan.
  * publisher `string`: Name of the extension publisher.
  * version `string`: A string that uniquely identifies the plan version.

### ExtensionResourceRequest
* ExtensionResourceRequest `object`: The body of an extension resource PUT request.
  * location `string`: The Azure region of the Visual Studio account associated with this request (i.e 'southcentralus'.)
  * plan [ExtensionResourcePlan](#extensionresourceplan)
  * properties `object`: A dictionary of extended properties. This property is currently unused.
  * tags `object`: A dictionary of user-defined tags to be stored with the extension resource.

### Operation
* Operation `object`: Properties of an operation supported by the resource provider.
  * display [OperationProperties](#operationproperties)
  * name `string`: The name of the resource operation.

### OperationListResult
* OperationListResult `object`: Container for a list of operations supported by a resource provider.
  * value `array`: A list of operations supported by a resource provider.
    * items [Operation](#operation)

### OperationProperties
* OperationProperties `object`: Properties of an operation supported by the resource provider.
  * description `string`: The description of the resource operation.
  * operation `string`: The operation name.
  * provider `string`: The provider name.
  * resource `string`: The resource name.

### PipelineTemplate
* PipelineTemplate `object`: Defines a VSTS pipeline template.
  * applicationSource **required** [ApplicationSource](#applicationsource)
  * applicationTarget **required** [ApplicationTarget](#applicationtarget)
  * authorizationDetails **required** `object`: Global dictionary of authorization details used by the pipeline, with a friendly name as key. Individual resource in the pipeline can reference to a specific authorization info using the friendly name.

### ProjectResource
* ProjectResource `object`: A Visual Studio Team Services project resource.
  * kind `string` (values: project, bootstrappedProject): Kind of project resource
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
  * bootstrapPipelineTemplate [PipelineTemplate](#pipelinetemplate)
  * ownerUpn `string`: Optional UPN of the owner, on-behalf-of whom the project is being created.
  * processTemplateId `string` (values: Scrum, Agile, Cmmi): Process template to use in the project.
  * tfsUniqueIdentifier `string`: Unique identifier of the VSTS project.
  * versionControlOption `string` (values: Git, Tfvc): Version control to use for the default repo created in the project.

### ProjectResourceUpdateParameters
* ProjectResourceUpdateParameters `object`: The parameters to update a project resource.
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


