# @datafire/azure_msi_managedidentity

Client library for ManagedServiceIdentityClient

## Installation and Usage
```bash
npm install --save @datafire/azure_msi_managedidentity
```
```js
let azure_msi_managedidentity = require('@datafire/azure_msi_managedidentity').create({
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

The Managed Service Identity Client.

## Actions

### Operations_List
Lists available operations for the Microsoft.ManagedIdentity provider


```js
azure_msi_managedidentity.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of API to invoke.

#### Output
* output [OperationListResult](#operationlistresult)

### UserAssignedIdentities_ListBySubscription
Lists all the userAssignedIdentities available under the specified subscription.


```js
azure_msi_managedidentity.UserAssignedIdentities_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Id of the Subscription to which the identity belongs.
  * api-version **required** `string`: Version of API to invoke.

#### Output
* output [UserAssignedIdentitiesListResult](#userassignedidentitieslistresult)

### UserAssignedIdentities_ListByResourceGroup
Lists all the userAssignedIdentities available under the specified ResourceGroup.


```js
azure_msi_managedidentity.UserAssignedIdentities_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Id of the Subscription to which the identity belongs.
  * resourceGroupName **required** `string`: The name of the Resource Group to which the identity belongs.
  * api-version **required** `string`: Version of API to invoke.

#### Output
* output [UserAssignedIdentitiesListResult](#userassignedidentitieslistresult)

### UserAssignedIdentities_Delete
Deletes the identity.


```js
azure_msi_managedidentity.UserAssignedIdentities_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Id of the Subscription to which the identity belongs.
  * resourceGroupName **required** `string`: The name of the Resource Group to which the identity belongs.
  * resourceName **required** `string`: The name of the identity resource.
  * api-version **required** `string`: Version of API to invoke.

#### Output
*Output schema unknown*

### UserAssignedIdentities_Get
Gets the identity.


```js
azure_msi_managedidentity.UserAssignedIdentities_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Id of the Subscription to which the identity belongs.
  * resourceGroupName **required** `string`: The name of the Resource Group to which the identity belongs.
  * resourceName **required** `string`: The name of the identity resource.
  * api-version **required** `string`: Version of API to invoke.

#### Output
* output [Identity](#identity)

### UserAssignedIdentities_Update
Update an identity in the specified subscription and resource group.


```js
azure_msi_managedidentity.UserAssignedIdentities_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Id of the Subscription to which the identity belongs.
  * resourceGroupName **required** `string`: The name of the Resource Group to which the identity belongs.
  * resourceName **required** `string`: The name of the identity resource.
  * api-version **required** `string`: Version of API to invoke.
  * parameters **required** [Identity](#identity)

#### Output
* output [Identity](#identity)

### UserAssignedIdentities_CreateOrUpdate
Create or update an identity in the specified subscription and resource group.


```js
azure_msi_managedidentity.UserAssignedIdentities_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "resourceName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Id of the Subscription to which the identity belongs.
  * resourceGroupName **required** `string`: The name of the Resource Group to which the identity belongs.
  * resourceName **required** `string`: The name of the identity resource.
  * api-version **required** `string`: Version of API to invoke.
  * parameters **required** [Identity](#identity)

#### Output
* output [Identity](#identity)



## Definitions

### CloudError
* CloudError `object`: An error response from the ManagedServiceIdentity service.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: An error response from the ManagedServiceIdentity service.
  * code `string`: An identifier for the error.
  * details `array`: A list of additional details about the error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message describing the error, intended to be suitable for display in a user interface.
  * target `string`: The target of the particular error. For example, the name of the property in error.

### Identity
* Identity `object`: Describes an identity resource.
  * id `string`: The id of the created identity.
  * location `string`: The Azure region where the identity lives.
  * name `string`: The name of the created identity.
  * properties [IdentityProperties](#identityproperties)
  * tags `object`: Resource tags
  * type `string` (values: Microsoft.ManagedIdentity/userAssignedIdentities): The type of resource i.e. Microsoft.ManagedIdentity/userAssignedIdentities

### IdentityProperties
* Identity properties. `object`: The properties associated with the identity.
  * clientId `string`: The id of the app associated with the identity. This is a random generated UUID by MSI.
  * clientSecretUrl `string`:  The ManagedServiceIdentity DataPlane URL that can be queried to obtain the identity credentials. If identity is user assigned, then the clientSecretUrl will not be present in the response, otherwise it will be present.
  * principalId `string`: The id of the service principal object associated with the created identity.
  * tenantId `string`: The id of the tenant which the identity belongs to.

### Operation
* Microsoft.ManagedIdentity Operation. `object`: Operation supported by the Microsoft.ManagedIdentity REST API.
  * display [OperationDisplay](#operationdisplay)
  * name `string`: The name of the REST Operation. This is of the format {provider}/{resource}/{operation}.

### OperationDisplay
* Operation Display. `object`: The object that describes the operation.
  * description `string`: A description of the operation.
  * operation `string`: The type of operation. For example: read, write, delete.
  * provider `string`: Friendly name of the resource provider.
  * resource `string`: The resource type on which the operation is performed.

### OperationListResult
* Operations List. `object`: A list of operations supported by Microsoft.ManagedIdentity Resource Provider.
  * nextLink `string`: The url to get the next page of results, if any.
  * value `array`: A list of operations supported by Microsoft.ManagedIdentity Resource Provider.
    * items [Operation](#operation)

### UserAssignedIdentitiesListResult
* UserAssignedIdentitiesListResult `object`: Values returned by the List operation.
  * nextLink `string`: The url to get the next page of results, if any.
  * value `array`: The collection of userAssignedIdentities returned by the listing operation.
    * items [Identity](#identity)


