# @datafire/azure_devops

Client library for Azure DevOps

## Installation and Usage
```bash
npm install --save @datafire/azure_devops
```
```js
let azure_devops = require('@datafire/azure_devops').create({
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

Azure DevOps Resource Provider

## Actions

### Operations_List
Lists all the operations supported by Microsoft.DevOps resource provider.


```js
azure_devops.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version to be used with the HTTP request.

#### Output
* output [OperationListResult](#operationlistresult)

### PipelineTemplateDefinitions_List
Lists all pipeline templates which can be used to configure an Azure Pipeline.


```js
azure_devops.PipelineTemplateDefinitions_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version to be used with the HTTP request.

#### Output
* output [PipelineTemplateDefinitionListResult](#pipelinetemplatedefinitionlistresult)

### Pipelines_ListBySubscription
Lists all Azure Pipelines under the specified subscription.


```js
azure_devops.Pipelines_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * api-version **required** `string`: API version to be used with the HTTP request.

#### Output
* output [PipelineListResult](#pipelinelistresult)

### Pipelines_ListByResourceGroup
Lists all Azure Pipelines under the specified resource group.


```js
azure_devops.Pipelines_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * api-version **required** `string`: API version to be used with the HTTP request.

#### Output
* output [PipelineListResult](#pipelinelistresult)

### Pipelines_Delete
Deletes an Azure Pipeline.


```js
azure_devops.Pipelines_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "pipelineName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * api-version **required** `string`: API version to be used with the HTTP request.
  * pipelineName **required** `string`: The name of the Azure Pipeline resource.

#### Output
*Output schema unknown*

### Pipelines_Get
Gets an existing Azure Pipeline.


```js
azure_devops.Pipelines_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "pipelineName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * api-version **required** `string`: API version to be used with the HTTP request.
  * pipelineName **required** `string`: The name of the Azure Pipeline resource in ARM.

#### Output
* output [Pipeline](#pipeline)

### Pipelines_Update
Updates the properties of an Azure Pipeline. Currently, only tags can be updated.


```js
azure_devops.Pipelines_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "pipelineName": "",
  "updateOperationParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * api-version **required** `string`: API version to be used with the HTTP request.
  * pipelineName **required** `string`: The name of the Azure Pipeline resource.
  * updateOperationParameters **required** [PipelineUpdateParameters](#pipelineupdateparameters)

#### Output
* output [Pipeline](#pipeline)

### Pipelines_CreateOrUpdate
Creates or updates an Azure Pipeline.


```js
azure_devops.Pipelines_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "pipelineName": "",
  "createOperationParameters": {
    "properties": {
      "organization": {
        "name": ""
      },
      "project": {
        "name": ""
      },
      "bootstrapConfiguration": {
        "template": {
          "id": ""
        }
      }
    }
  }
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Unique identifier of the Azure subscription. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
  * resourceGroupName **required** `string`: Name of the resource group within the Azure subscription.
  * api-version **required** `string`: API version to be used with the HTTP request.
  * pipelineName **required** `string`: The name of the Azure Pipeline resource in ARM.
  * createOperationParameters **required** [Pipeline](#pipeline)

#### Output
* output [Pipeline](#pipeline)



## Definitions

### Authorization
* Authorization `object`: Authorization info used to access a resource (like code repository).
  * authorizationType **required** `string` (values: personalAccessToken): Type of authorization.
  * parameters `object`: Authorization parameters corresponding to the authorization type.

### BootstrapConfiguration
* BootstrapConfiguration `object`: Configuration used to bootstrap a Pipeline.
  * repository [CodeRepository](#coderepository)
  * template **required** [PipelineTemplate](#pipelinetemplate)

### CloudError
* CloudError `object`: An error response from the Pipelines Resource Provider.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the Pipelines Resource Provider.
  * code `string`: An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error or the method where the error occurred.

### CodeRepository
* CodeRepository `object`: Repository containing the source code for a pipeline.
  * authorization [Authorization](#authorization)
  * defaultBranch **required** `string`: Default branch used to configure Continuous Integration (CI) in the pipeline.
  * id **required** `string`: Unique immutable identifier of the code repository.
  * properties `object`: Repository-specific properties.
  * repositoryType **required** `string` (values: gitHub, vstsGit): Type of code repository.

### InputDescriptor
* InputDescriptor `object`: Representation of a pipeline template input parameter.
  * description `string`: Description of the input parameter.
  * id **required** `string`: Identifier of the input parameter.
  * possibleValues `array`: List of possible values for the input parameter.
    * items [InputValue](#inputvalue)
  * type **required** `string` (values: String, SecureString, Int, Bool, Authorization): Data type of the value of the input parameter.

### InputValue
* InputValue `object`: Representation of a pipeline template input parameter value.
  * displayValue `string`: Description of the input parameter value.
  * value `string`: Value of an input parameter.

### Operation
* Operation `object`: Properties of an Operation.
  * display [OperationDisplayValue](#operationdisplayvalue)
  * isDataAction `string`: Indicates whether the operation applies to data-plane.
  * name `string`: Name of the operation.

### OperationDisplayValue
* OperationDisplayValue `object`: Display information of an operation.
  * description `string`: Friendly description of the operation.
  * operation `string`: Friendly name of the operation.
  * provider `string`: Friendly name of the resource provider.
  * resource `string`: Friendly name of the resource type the operation applies to.

### OperationListResult
* OperationListResult `object`: Result of a request to list all operations supported by Microsoft.DevOps resource provider.
  * nextLink `string`: The URL to get the next set of operations, if there are any.
  * value `array`: List of operations supported by Microsoft.DevOps resource provider.
    * items [Operation](#operation)

### OrganizationReference
* OrganizationReference `object`: Reference to an Azure DevOps Organization.
  * id `string`: Unique immutable identifier for the Azure DevOps Organization.
  * name **required** `string`: Name of the Azure DevOps Organization.

### Pipeline
* Pipeline `object`: Azure DevOps Pipeline used to configure Continuous Integration (CI) & Continuous Delivery (CD) for Azure resources.
  * properties **required** [PipelineProperties](#pipelineproperties)
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource Tags
  * type `string`: Resource Type

### PipelineListResult
* PipelineListResult `object`: Result of a request to list all Azure Pipelines under a given scope.
  * nextLink `string`: URL to get the next set of Pipelines, if there are any.
  * value `array`: List of pipelines.
    * items [Pipeline](#pipeline)

### PipelineProperties
* PipelineProperties `object`: Custom properties of a Pipeline.
  * bootstrapConfiguration **required** [BootstrapConfiguration](#bootstrapconfiguration)
  * organization **required** [OrganizationReference](#organizationreference)
  * pipelineId `integer`: Unique identifier of the Azure Pipeline within the Azure DevOps Project.
  * project **required** [ProjectReference](#projectreference)

### PipelineTemplate
* PipelineTemplate `object`: Template used to bootstrap the pipeline.
  * id **required** `string`: Unique identifier of the pipeline template.
  * parameters `object`: Dictionary of input parameters used in the pipeline template.

### PipelineTemplateDefinition
* PipelineTemplateDefinition `object`: Definition of a pipeline template.
  * description `string`: Description of the pipeline enabled by the template.
  * id **required** `string`: Unique identifier of the pipeline template.
  * inputs `array`: List of input parameters required by the template to create a pipeline.
    * items [InputDescriptor](#inputdescriptor)

### PipelineTemplateDefinitionListResult
* PipelineTemplateDefinitionListResult `object`: Result of a request to list all pipeline template definitions.
  * nextLink `string`: The URL to get the next set of pipeline template definitions, if there are any.
  * value `array`: List of pipeline template definitions.
    * items [PipelineTemplateDefinition](#pipelinetemplatedefinition)

### PipelineUpdateParameters
* PipelineUpdateParameters `object`: Request payload used to update an existing Azure Pipeline.
  * tags `object`: Dictionary of key-value pairs to be set as tags on the Azure Pipeline. This will overwrite any existing tags.

### ProjectReference
* ProjectReference `object`: Reference to an Azure DevOps Project.
  * id `string`: Unique immutable identifier of the Azure DevOps Project.
  * name **required** `string`: Name of the Azure DevOps Project.

### Resource
* Resource `object`: An Azure Resource Manager (ARM) resource.
  * id `string`: Resource Id
  * location `string`: Resource Location
  * name `string`: Resource Name
  * tags `object`: Resource Tags
  * type `string`: Resource Type


