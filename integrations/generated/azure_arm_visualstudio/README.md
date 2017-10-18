# @datafire/azure_arm_visualstudio

Client library for Visual Studio Resource Provider Client

## Installation and Usage
```bash
npm install --save datafire @datafire/azure_arm_visualstudio
```

```js
let datafire = require('datafire');
let azure_arm_visualstudio = require('@datafire/azure_arm_visualstudio').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
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

#### Parameters
*This action has no parameters*

### Accounts_CheckNameAvailability
Checks if the specified Visual Studio Team Services account name is available. Resource name can be either an account name or an account name and PUID.


```js
azure_arm_visualstudio.Accounts_CheckNameAvailability({
  "subscriptionId": "",
  "api-version": "",
  "body": {}
}, context)
```

#### Parameters
* subscriptionId (string) **required** - The Azure subscription identifier.
* api-version (string) **required** - API Version
* body (object) **required** - The body of a POST request to check name availability.

### Accounts_ListByResourceGroup
Gets all Visual Studio Team Services account resources under the resource group linked to the specified Azure subscription.


```js
azure_arm_visualstudio.Accounts_ListByResourceGroup({
  "resourceGroupName": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* subscriptionId (string) **required** - The Azure subscription identifier.
* api-version (string) **required** - API Version

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* subscriptionId (string) **required** - The Azure subscription identifier.
* api-version (string) **required** - API Version
* accountResourceName (string) **required** - The name of the Visual Studio Team Services account resource.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* subscriptionId (string) **required** - The Azure subscription identifier.
* api-version (string) **required** - API Version
* accountResourceName (string) **required** - The name of the Visual Studio Team Services account resource.
* extensionResourceName (string) **required** - The name of the extension.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* subscriptionId (string) **required** - The Azure subscription identifier.
* api-version (string) **required** - API Version
* accountResourceName (string) **required** - The name of the Visual Studio Team Services account resource.
* extensionResourceName (string) **required** - The name of the extension.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* subscriptionId (string) **required** - The Azure subscription identifier.
* api-version (string) **required** - API Version
* body (object) **required** - The body of an extension resource PUT request.
* accountResourceName (string) **required** - The name of the Visual Studio Team Services account resource.
* extensionResourceName (string) **required** - The name of the extension.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* subscriptionId (string) **required** - The Azure subscription identifier.
* api-version (string) **required** - API Version
* body (object) **required** - The body of an extension resource PUT request.
* accountResourceName (string) **required** - The name of the Visual Studio Team Services account resource.
* extensionResourceName (string) **required** - The name of the extension.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* subscriptionId (string) **required** - The Azure subscription identifier.
* api-version (string) **required** - API Version
* resourceName (string) **required** - Name of the resource.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* subscriptionId (string) **required** - The Azure subscription identifier.
* api-version (string) **required** - API Version
* resourceName (string) **required** - Name of the resource.

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

#### Parameters
* resourceGroupName (string) **required** - Name of the resource group within the Azure subscription.
* subscriptionId (string) **required** - The Azure subscription identifier.
* api-version (string) **required** - API Version
* body (object) **required** - The body of a PUT request to modify a Visual Studio account resource.
* resourceName (string) **required** - Name of the resource.

