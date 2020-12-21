# @datafire/azure_powerbiembedded

Client library for Power BI Embedded Management Client

## Installation and Usage
```bash
npm install --save @datafire/azure_powerbiembedded
```
```js
let azure_powerbiembedded = require('@datafire/azure_powerbiembedded').create();

.then(data => {
  console.log(data);
});
```

## Description

Client to manage your Power BI Embedded workspace collections and retrieve workspaces.

## Actions

### getAvailableOperations
Indicates which operations can be performed by the Power BI Resource Provider.


```js
azure_powerbiembedded.getAvailableOperations({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationList](#operationlist)

### WorkspaceCollections_checkNameAvailability
Verify the specified Power BI Workspace Collection name is valid and not already in use.


```js
azure_powerbiembedded.WorkspaceCollections_checkNameAvailability({
  "subscriptionId": "",
  "location": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * location **required** `string`: Azure location
  * api-version **required** `string`: Client Api Version.
  * body **required** [CheckNameRequest](#checknamerequest)

#### Output
* output [CheckNameResponse](#checknameresponse)

### WorkspaceCollections_listBySubscription
Retrieves all existing Power BI workspace collections in the specified subscription.


```js
azure_powerbiembedded.WorkspaceCollections_listBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [WorkspaceCollectionList](#workspacecollectionlist)

### WorkspaceCollections_migrate
Migrates an existing Power BI Workspace Collection to a different resource group and/or subscription.


```js
azure_powerbiembedded.WorkspaceCollections_migrate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Azure resource group
  * api-version **required** `string`: Client Api Version.
  * body **required** [MigrateWorkspaceCollectionRequest](#migrateworkspacecollectionrequest)

#### Output
*Output schema unknown*

### WorkspaceCollections_listByResourceGroup
Retrieves all existing Power BI workspace collections in the specified resource group.


```js
azure_powerbiembedded.WorkspaceCollections_listByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Azure resource group
  * api-version **required** `string`: Client Api Version.

#### Output
* output [WorkspaceCollectionList](#workspacecollectionlist)

### WorkspaceCollections_delete
Delete a Power BI Workspace Collection.


```js
azure_powerbiembedded.WorkspaceCollections_delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Azure resource group
  * workspaceCollectionName **required** `string`: Power BI Embedded Workspace Collection name
  * api-version **required** `string`: Client Api Version.

#### Output
*Output schema unknown*

### WorkspaceCollections_getByName
Retrieves an existing Power BI Workspace Collection.


```js
azure_powerbiembedded.WorkspaceCollections_getByName({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Azure resource group
  * workspaceCollectionName **required** `string`: Power BI Embedded Workspace Collection name
  * api-version **required** `string`: Client Api Version.

#### Output
* output [WorkspaceCollection](#workspacecollection)

### WorkspaceCollections_update
Update an existing Power BI Workspace Collection with the specified properties.


```js
azure_powerbiembedded.WorkspaceCollections_update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Azure resource group
  * workspaceCollectionName **required** `string`: Power BI Embedded Workspace Collection name
  * api-version **required** `string`: Client Api Version.
  * body **required** [UpdateWorkspaceCollectionRequest](#updateworkspacecollectionrequest)

#### Output
* output [WorkspaceCollection](#workspacecollection)

### WorkspaceCollections_create
Creates a new Power BI Workspace Collection with the specified properties. A Power BI Workspace Collection contains one or more workspaces, and can be used to provision keys that provide API access to those workspaces.


```js
azure_powerbiembedded.WorkspaceCollections_create({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Azure resource group
  * workspaceCollectionName **required** `string`: Power BI Embedded Workspace Collection name
  * api-version **required** `string`: Client Api Version.
  * body **required** [CreateWorkspaceCollectionRequest](#createworkspacecollectionrequest)

#### Output
* output [WorkspaceCollection](#workspacecollection)

### WorkspaceCollections_getAccessKeys
Retrieves the primary and secondary access keys for the specified Power BI Workspace Collection.


```js
azure_powerbiembedded.WorkspaceCollections_getAccessKeys({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Azure resource group
  * workspaceCollectionName **required** `string`: Power BI Embedded Workspace Collection name
  * api-version **required** `string`: Client Api Version.

#### Output
* output [WorkspaceCollectionAccessKeys](#workspacecollectionaccesskeys)

### WorkspaceCollections_regenerateKey
Regenerates the primary or secondary access key for the specified Power BI Workspace Collection.


```js
azure_powerbiembedded.WorkspaceCollections_regenerateKey({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Azure resource group
  * workspaceCollectionName **required** `string`: Power BI Embedded Workspace Collection name
  * api-version **required** `string`: Client Api Version.
  * body **required** [WorkspaceCollectionAccessKey](#workspacecollectionaccesskey)

#### Output
* output [WorkspaceCollectionAccessKeys](#workspacecollectionaccesskeys)

### Workspaces_List
Retrieves all existing Power BI workspaces in the specified workspace collection.


```js
azure_powerbiembedded.Workspaces_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceCollectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: Azure resource group
  * workspaceCollectionName **required** `string`: Power BI Embedded Workspace Collection name
  * api-version **required** `string`: Client Api Version.

#### Output
* output [WorkspaceList](#workspacelist)



## Definitions

### AzureSku
* AzureSku `object`
  * name **required** `string` (values: S1): SKU name
  * tier **required** `string` (values: Standard): SKU tier

### CheckNameRequest
* CheckNameRequest `object`
  * name `string`: Workspace collection name
  * type `string`: Resource type

### CheckNameResponse
* CheckNameResponse `object`
  * message `string`: Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated.
  * nameAvailable `boolean`: Specifies a Boolean value that indicates whether the specified Power BI Workspace Collection name is available to use.
  * reason `string` (values: Unavailable, Invalid): Reason why the workspace collection name cannot be used.

### CreateWorkspaceCollectionRequest
* CreateWorkspaceCollectionRequest `object`
  * location `string`: Azure location
  * sku [AzureSku](#azuresku)
  * tags `object`

### Display
* Display `object`
  * description `string`: The localized friendly description for the operation as shown to the user. This description should be thorough, yet concise. It will be used in tool-tips and detailed views.
  * operation `string`: The localized friendly name for the operation as shown to the user. This name should be concise (to fit in drop downs), but clear (self-documenting). Use Title Casing and include the entity/resource to which it applies.
  * origin `string`: The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX. Default value is 'user,system'
  * provider `string`: The localized friendly form of the resource provider name. This form is also expected to include the publisher/company responsible. Use Title Casing. Begin with "Microsoft" for 1st party services.
  * resource `string`: The localized friendly form of the resource type related to this action/operation. This form should match the public documentation for the resource provider. Use Title Casing. For examples, refer to the "name" section.

### Error
* Error `object`
  * code `string`
  * details `array`
    * items [ErrorDetail](#errordetail)
  * message `string`
  * target `string`

### ErrorDetail
* ErrorDetail `object`
  * code `string`
  * message `string`
  * target `string`

### MigrateWorkspaceCollectionRequest
* MigrateWorkspaceCollectionRequest `object`
  * resources `array`
    * items `string`
  * targetResourceGroup `string`: Name of the resource group the Power BI workspace collections will be migrated to.

### Operation
* Operation `object`
  * display [Display](#display)
  * name `string`: The name of the operation being performed on this particular object. This name should match the action name that appears in RBAC / the event service.

### OperationList
* OperationList `object`
  * value `array`
    * items [Operation](#operation)

### UpdateWorkspaceCollectionRequest
* UpdateWorkspaceCollectionRequest `object`
  * sku [AzureSku](#azuresku)
  * tags `object`

### Workspace
* Workspace `object`
  * id `string`: Workspace id
  * name `string`: Workspace name
  * properties `object`: Property bag
  * type `string`: Resource type

### WorkspaceCollection
* WorkspaceCollection `object`
  * id `string`: Resource id
  * location `string`: Azure location
  * name `string`: Workspace collection name
  * properties `object`: Properties
  * sku [AzureSku](#azuresku)
  * tags `object`
  * type `string`: Resource type

### WorkspaceCollectionAccessKey
* WorkspaceCollectionAccessKey `object`
  * keyName `string` (values: key1, key2): Key name

### WorkspaceCollectionAccessKeys
* WorkspaceCollectionAccessKeys `object`
  * key1 `string`: Access key 1
  * key2 `string`: Access key 2

### WorkspaceCollectionList
* WorkspaceCollectionList `object`
  * value `array`
    * items [WorkspaceCollection](#workspacecollection)

### WorkspaceList
* WorkspaceList `object`
  * value `array`
    * items [Workspace](#workspace)


