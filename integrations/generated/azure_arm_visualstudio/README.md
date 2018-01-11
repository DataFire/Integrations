# @datafire/azure_arm_visualstudio

Client library for Visual Studio Resource Provider Client

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_visualstudio
```
```js
let azure_arm_visualstudio = require('@datafire/azure_arm_visualstudio').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_arm_visualstudio.Operations_List({}).then(data => {
  console.log(data);
})
```

## Description

Use these APIs to manage Visual Studio Team Services resources through the Azure Resource Manager. All task operations conform to the HTTP/1.1 protocol specification and each operation returns an x-ms-request-id header that can be used to obtain information about the request. You must make sure that requests made to these resources are secure. For more information, see https://docs.microsoft.com/en-us/rest/api/index.

## Actions

### Operations_List
Gets the details of all operations possible on the Microsoft.VisualStudio resource provider.


```js
azure_arm_visualstudio.Operations_List(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OperationListResult](#operationlistresult)

### Accounts_CheckNameAvailability
Checks if the specified Visual Studio Team Services account name is available. Resource name can be either an account name or an account name and PUID.


```js
azure_arm_visualstudio.Accounts_CheckNameAvailability({
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

### Accounts_ListByResourceGroup
Gets all Visual Studio Team Services account resources under the resource group linked to the specified Azure subscription.


```js
azure_arm_visualstudio.Accounts_ListByResourceGroup({
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
azure_arm_visualstudio.Extensions_ListByAccount({
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
azure_arm_visualstudio.Extensions_Delete({
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
azure_arm_visualstudio.Extensions_Get({
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
azure_arm_visualstudio.Extensions_Update({
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
azure_arm_visualstudio.Extensions_Create({
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
azure_arm_visualstudio.Accounts_Delete({
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
azure_arm_visualstudio.Accounts_Get({
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
azure_arm_visualstudio.Accounts_CreateOrUpdate({
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

### CheckNameAvailabilityParameter
* CheckNameAvailabilityParameter `object`: The body of a POST request to check name availability.
  * resourceName `string`: The name of the resource to check availability for.
  * resourceType `string`: The type of resource to check availability for.

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: The response to a name availability request.
  * message `string`: The message describing the detailed reason.
  * nameAvailable `boolean`: The value which indicates whether the provided name is available.

### ExtensionResource
* ExtensionResource `object`: The response to an extension resource GET request.
  * plan [ExtensionResourcePlan](#extensionresourceplan)
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

### Resource
* Resource `object`: A generic Azure Resource Manager resource.
  * id `string`: Unique identifier of the resource.
  * location `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.


