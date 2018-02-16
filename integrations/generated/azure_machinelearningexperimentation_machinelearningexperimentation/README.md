# @datafire/azure_machinelearningexperimentation_machinelearningexperimentation

Client library for ML Team Account Management Client

## Installation and Usage
```bash
npm install --save @datafire/azure_machinelearningexperimentation_machinelearningexperimentation
```
```js
let azure_machinelearningexperimentation_machinelearningexperimentation = require('@datafire/azure_machinelearningexperimentation_machinelearningexperimentation').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_machinelearningexperimentation_machinelearningexperimentation.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

These APIs allow end users to operate on Azure Machine Learning Team Account resources. They support CRUD operations for Azure Machine Learning Team Accounts.

## Actions

### Operations_List
Lists all of the available Azure Machine Learning Team Accounts REST API operations.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.

#### Output
* output [OperationListResult](#operationlistresult)

### Accounts_List
Lists all the available machine learning team accounts under the specified subscription.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Accounts_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.

#### Output
* output [AccountListResult](#accountlistresult)

### Accounts_ListByResourceGroup
Lists all the available machine learning team accounts under the specified resource group.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Accounts_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.

#### Output
* output [AccountListResult](#accountlistresult)

### Accounts_Delete
Deletes a machine learning team account.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Accounts_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.
  * accountName **required** `string`: The name of the machine learning team account.

#### Output
*Output schema unknown*

### Accounts_Get
Gets the properties of the specified machine learning team account.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Accounts_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.
  * accountName **required** `string`: The name of the machine learning team account.

#### Output
* output [Account](#account)

### Accounts_Update
Updates a machine learning team account with the specified parameters.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Accounts_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.
  * accountName **required** `string`: The name of the machine learning team account.
  * parameters **required** [AccountUpdateParameters](#accountupdateparameters)

#### Output
* output [Account](#account)

### Accounts_CreateOrUpdate
Creates or updates a team account with the specified parameters.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Accounts_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.
  * accountName **required** `string`: The name of the machine learning team account.
  * parameters **required** [Account](#account)

#### Output
* output [Account](#account)

### Workspaces_ListByAccounts
Lists all the available machine learning workspaces under the specified team account.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Workspaces_ListByAccounts({
  "api-version": "",
  "subscriptionId": "",
  "accountName": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * accountName **required** `string`: The name of the machine learning team account.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.

#### Output
* output [WorkspaceListResult](#workspacelistresult)

### Workspaces_Delete
Deletes a machine learning workspace.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Workspaces_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.
  * accountName **required** `string`: The name of the machine learning team account.
  * workspaceName **required** `string`: The name of the machine learning team account workspace.

#### Output
*Output schema unknown*

### Workspaces_Get
Gets the properties of the specified machine learning workspace.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Workspaces_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "workspaceName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.
  * accountName **required** `string`: The name of the machine learning team account.
  * workspaceName **required** `string`: The name of the machine learning team account workspace.

#### Output
* output [Workspace](#workspace)

### Workspaces_Update
Updates a machine learning workspace with the specified parameters.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Workspaces_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "workspaceName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.
  * accountName **required** `string`: The name of the machine learning team account.
  * workspaceName **required** `string`: The name of the machine learning team account workspace.
  * parameters **required** [WorkspaceUpdateParameters](#workspaceupdateparameters)

#### Output
* output [Workspace](#workspace)

### Workspaces_CreateOrUpdate
Creates or updates a machine learning workspace with the specified parameters.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Workspaces_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "workspaceName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.
  * accountName **required** `string`: The name of the machine learning team account.
  * workspaceName **required** `string`: The name of the machine learning team account workspace.
  * parameters **required** [Workspace](#workspace)

#### Output
* output [Workspace](#workspace)

### Projects_Delete
Deletes a project.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Projects_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "workspaceName": "",
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.
  * accountName **required** `string`: The name of the machine learning team account.
  * workspaceName **required** `string`: The name of the machine learning team account workspace.
  * projectName **required** `string`: The name of the machine learning project under a team account workspace.

#### Output
*Output schema unknown*

### Projects_Get
Gets the properties of the specified machine learning project.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Projects_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "workspaceName": "",
  "projectName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.
  * accountName **required** `string`: The name of the machine learning team account.
  * workspaceName **required** `string`: The name of the machine learning team account workspace.
  * projectName **required** `string`: The name of the machine learning project under a team account workspace.

#### Output
* output [Project](#project)

### Projects_Update
Updates a project with the specified parameters.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Projects_Update({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "workspaceName": "",
  "projectName": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.
  * accountName **required** `string`: The name of the machine learning team account.
  * workspaceName **required** `string`: The name of the machine learning team account workspace.
  * projectName **required** `string`: The name of the machine learning project under a team account workspace.
  * parameters **required** [ProjectUpdateParameters](#projectupdateparameters)

#### Output
* output [Project](#project)

### Projects_CreateOrUpdate
Creates or updates a project with the specified parameters.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Projects_CreateOrUpdate({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "accountName": "",
  "workspaceName": "",
  "projectName": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.
  * accountName **required** `string`: The name of the machine learning team account.
  * workspaceName **required** `string`: The name of the machine learning team account workspace.
  * projectName **required** `string`: The name of the machine learning project under a team account workspace.
  * parameters **required** [Project](#project)

#### Output
* output [Project](#project)

### Projects_ListByWorkspace
Lists all the available machine learning projects under the specified workspace.


```js
azure_machinelearningexperimentation_machinelearningexperimentation.Projects_ListByWorkspace({
  "api-version": "",
  "subscriptionId": "",
  "accountName": "",
  "workspaceName": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: The client API version.
  * subscriptionId **required** `string`: The Microsoft Azure subscription ID.
  * accountName **required** `string`: The name of the machine learning team account.
  * workspaceName **required** `string`: The name of the machine learning team account workspace.
  * resourceGroupName **required** `string`: The name of the resource group to which the machine learning team account belongs.

#### Output
* output [ProjectListResult](#projectlistresult)



## Definitions

### Account
* Account `object`: An object that represents a machine learning team account.
  * properties [AccountProperties](#accountproperties)
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### AccountListResult
* AccountListResult `object`: The result of a request to list machine learning team accounts.
  * nextLink `string`: The URI that can be used to request the next list of machine learning team accounts.
  * value `array`: The list of machine learning team accounts. Since this list may be incomplete, the nextLink field should be used to request the next list of machine learning team accounts.
    * items [Account](#account)

### AccountProperties
* AccountProperties `object`: The properties of a machine learning team account.
  * accountId `string`: The immutable id associated with this team account.
  * creationDate `string`: The creation date of the machine learning team account in ISO8601 format.
  * description `string`: The description of this workspace.
  * discoveryUri `string`: The uri for this machine learning team account.
  * friendlyName `string`: The friendly name for this workspace. This will be the workspace name in the arm id when the workspace object gets created
  * keyVaultId **required** `string`: The fully qualified arm id of the user key vault.
  * provisioningState `string` (values: Creating, Succeeded, Updating, Deleting, Failed): The current deployment state of team account resource. The provisioningState is to indicate states for resource provisioning.
  * seats `string`: The no of users/seats who can access this team account. This property defines the charge on the team account.
  * storageAccount **required** [StorageAccountProperties](#storageaccountproperties)
  * vsoAccountId **required** `string`: The fully qualified arm id of the vso account to be used for this team account.

### AccountPropertiesUpdateParameters
* AccountPropertiesUpdateParameters `object`: The parameters for updating the properties of a machine learning team account.
  * description `string`: The description of this workspace.
  * friendlyName `string`: The friendly name for this workspace. This will be the workspace name in the arm id when the workspace object gets created
  * seats `string`: The no of users/seats who can access this team account. This property defines the charge on the team account.
  * storageAccountKey `string`: The key for storage account associated with this team account

### AccountUpdateParameters
* AccountUpdateParameters `object`: The parameters for updating a machine learning team account.
  * properties [AccountPropertiesUpdateParameters](#accountpropertiesupdateparameters)
  * tags `object`: The resource tags for the machine learning team account.

### ErrorResponse
* ErrorResponse `object`: The error response send when an operation fails.
  * code **required** `string`: error code
  * message **required** `string`: error message

### Operation
* Operation `object`: Azure Machine Learning team account REST API operation
  * display `object`: Display name of operation
    * description `string`: The description for the operation.
    * operation `string`: The operation that users can perform.
    * provider `string`: The resource provider name: Microsoft.MachineLearningExperimentation
    * resource `string`: The resource on which the operation is performed.
  * name `string`: Operation name: {provider}/{resource}/{operation}

### OperationListResult
* OperationListResult `object`: An array of operations supported by the resource provider.
  * value `array`: List of AML team account operations supported by the AML team account resource provider.
    * items [Operation](#operation)

### Project
* Project `object`: An object that represents a machine learning project.
  * properties [ProjectProperties](#projectproperties)
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### ProjectListResult
* ProjectListResult `object`: The result of a request to list projects.
  * nextLink `string`: The URI that can be used to request the next list of projects.
  * value `array`: The list of projects. Since this list may be incomplete, the nextLink field should be used to request the next list of projects.
    * items [Project](#project)

### ProjectProperties
* ProjectProperties `object`: The properties of a machine learning project.
  * accountId `string`: The immutable id of the team account which contains this project.
  * creationDate `string`: The creation date of the project in ISO8601 format.
  * description `string`: The description of this project.
  * friendlyName **required** `string`: The friendly name for this project.
  * gitrepo `string`: The reference to git repo for this project.
  * projectId `string`: The immutable id of this project.
  * provisioningState `string` (values: Creating, Succeeded, Updating, Deleting, Failed): The current deployment state of project resource. The provisioningState is to indicate states for resource provisioning.
  * workspaceId `string`: The immutable id of the workspace which contains this project.

### ProjectPropertiesUpdateParameters
* ProjectPropertiesUpdateParameters `object`: The parameters for updating the properties of a project.
  * description `string`: The description of this project.
  * friendlyName `string`: The friendly name for this project.
  * gitrepo `string`: The reference to git repo for this project.

### ProjectUpdateParameters
* ProjectUpdateParameters `object`: The parameters for updating a machine learning project.
  * properties [ProjectPropertiesUpdateParameters](#projectpropertiesupdateparameters)
  * tags `object`: The resource tags for the machine learning project.

### Resource
* Resource `object`: An Azure resource.
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### StorageAccountProperties
* StorageAccountProperties `object`: The properties of a storage account for a machine learning team account.
  * accessKey **required** `string`: The access key to the storage account.
  * storageAccountId **required** `string`: The fully qualified arm Id of the storage account.

### Workspace
* Workspace `object`: An object that represents a machine learning team account workspace.
  * properties [WorkspaceProperties](#workspaceproperties)
  * id `string`: The resource ID.
  * location **required** `string`: The location of the resource. This cannot be changed after the resource is created.
  * name `string`: The name of the resource.
  * tags `object`: The tags of the resource.
  * type `string`: The type of the resource.

### WorkspaceListResult
* WorkspaceListResult `object`: The result of a request to list machine learning team account workspaces.
  * nextLink `string`: The URI that can be used to request the next list of machine learning workspaces.
  * value `array`: The list of machine learning team account workspaces. Since this list may be incomplete, the nextLink field should be used to request the next list of machine learning team accounts.
    * items [Workspace](#workspace)

### WorkspaceProperties
* WorkspaceProperties `object`: The properties of a machine learning team account workspace.
  * accountId `string`: The immutable id of the team account which contains this workspace.
  * creationDate `string`: The creation date of the machine learning workspace in ISO8601 format.
  * description `string`: The description of this workspace.
  * friendlyName **required** `string`: The friendly name for this workspace. This will be the workspace name in the arm id when the workspace object gets created
  * provisioningState `string` (values: Creating, Succeeded, Updating, Deleting, Failed): The current deployment state of team account workspace resource. The provisioningState is to indicate states for resource provisioning.
  * workspaceId `string`: The immutable id of this workspace.

### WorkspacePropertiesUpdateParameters
* WorkspacePropertiesUpdateParameters `object`: The parameters for updating the properties of a machine learning team account workspace.
  * description `string`: Description for this workspace.
  * friendlyName `string`: Friendly name of this workspace.

### WorkspaceUpdateParameters
* WorkspaceUpdateParameters `object`: The parameters for updating a machine learning team account workspace.
  * properties [WorkspacePropertiesUpdateParameters](#workspacepropertiesupdateparameters)
  * tags `object`: The resource tags for the machine learning team account workspace.


