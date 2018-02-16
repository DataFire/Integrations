# @datafire/azure_resources_locks

Client library for ManagementLockClient

## Installation and Usage
```bash
npm install --save @datafire/azure_resources_locks
```
```js
let azure_resources_locks = require('@datafire/azure_resources_locks').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_resources_locks.ManagementLocks_ListAtSubscriptionLevel({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

Azure resources can be locked to prevent other users in your organization from deleting or modifying resources.

## Actions

### ManagementLocks_ListAtSubscriptionLevel
Gets all the management locks for a subscription.


```js
azure_resources_locks.ManagementLocks_ListAtSubscriptionLevel({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $filter `string`: The filter to apply on the operation.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ManagementLockListResult](#managementlocklistresult)

### ManagementLocks_DeleteAtSubscriptionLevel
To delete management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.


```js
azure_resources_locks.ManagementLocks_DeleteAtSubscriptionLevel({
  "lockName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * lockName **required** `string`: The name of lock to delete.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### ManagementLocks_GetAtSubscriptionLevel
Gets a management lock at the subscription level.


```js
azure_resources_locks.ManagementLocks_GetAtSubscriptionLevel({
  "lockName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * lockName **required** `string`: The name of the lock to get.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ManagementLockObject](#managementlockobject)

### ManagementLocks_CreateOrUpdateAtSubscriptionLevel
When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.


```js
azure_resources_locks.ManagementLocks_CreateOrUpdateAtSubscriptionLevel({
  "lockName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * lockName **required** `string`: The name of lock. The lock name can be a maximum of 260 characters. It cannot contain <, > %, &, :, \, ?, /, or any control characters.
  * parameters **required** [ManagementLockObject](#managementlockobject)
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ManagementLockObject](#managementlockobject)

### ManagementLocks_ListAtResourceGroupLevel
Gets all the management locks for a resource group.


```js
azure_resources_locks.ManagementLocks_ListAtResourceGroupLevel({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the locks to get.
  * $filter `string`: The filter to apply on the operation.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ManagementLockListResult](#managementlocklistresult)

### ManagementLocks_DeleteAtResourceGroupLevel
To delete management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.


```js
azure_resources_locks.ManagementLocks_DeleteAtResourceGroupLevel({
  "resourceGroupName": "",
  "lockName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the lock.
  * lockName **required** `string`: The name of lock to delete.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### ManagementLocks_GetAtResourceGroupLevel
Gets a management lock at the resource group level.


```js
azure_resources_locks.ManagementLocks_GetAtResourceGroupLevel({
  "resourceGroupName": "",
  "lockName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the locked resource group.
  * lockName **required** `string`: The name of the lock to get.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ManagementLockObject](#managementlockobject)

### ManagementLocks_CreateOrUpdateAtResourceGroupLevel
When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.


```js
azure_resources_locks.ManagementLocks_CreateOrUpdateAtResourceGroupLevel({
  "resourceGroupName": "",
  "lockName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group to lock.
  * lockName **required** `string`: The lock name. The lock name can be a maximum of 260 characters. It cannot contain <, > %, &, :, \, ?, /, or any control characters.
  * parameters **required** [ManagementLockObject](#managementlockobject)
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ManagementLockObject](#managementlockobject)

### ManagementLocks_ListAtResourceLevel
Gets all the management locks for a resource or any level below resource.


```js
azure_resources_locks.ManagementLocks_ListAtResourceLevel({
  "resourceGroupName": "",
  "resourceProviderNamespace": "",
  "parentResourcePath": "",
  "resourceType": "",
  "resourceName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the locked resource. The name is case insensitive.
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * parentResourcePath **required** `string`: The parent resource identity.
  * resourceType **required** `string`: The resource type of the locked resource.
  * resourceName **required** `string`: The name of the locked resource.
  * $filter `string`: The filter to apply on the operation.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ManagementLockListResult](#managementlocklistresult)

### ManagementLocks_DeleteAtResourceLevel
To delete management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.


```js
azure_resources_locks.ManagementLocks_DeleteAtResourceLevel({
  "resourceGroupName": "",
  "resourceProviderNamespace": "",
  "parentResourcePath": "",
  "resourceType": "",
  "resourceName": "",
  "lockName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the resource with the lock to delete. 
  * resourceProviderNamespace **required** `string`: The resource provider namespace of the resource with the lock to delete.
  * parentResourcePath **required** `string`: The parent resource identity.
  * resourceType **required** `string`: The resource type of the resource with the lock to delete.
  * resourceName **required** `string`: The name of the resource with the lock to delete.
  * lockName **required** `string`: The name of the lock to delete.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
*Output schema unknown*

### ManagementLocks_GetAtResourceLevel
Get the management lock of a resource or any level below resource.


```js
azure_resources_locks.ManagementLocks_GetAtResourceLevel({
  "resourceGroupName": "",
  "resourceProviderNamespace": "",
  "parentResourcePath": "",
  "resourceType": "",
  "resourceName": "",
  "lockName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group. 
  * resourceProviderNamespace **required** `string`: The namespace of the resource provider.
  * parentResourcePath **required** `string`: An extra path parameter needed in some services, like SQL Databases.
  * resourceType **required** `string`: The type of the resource.
  * resourceName **required** `string`: The name of the resource.
  * lockName **required** `string`: The name of lock.
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ManagementLockObject](#managementlockobject)

### ManagementLocks_CreateOrUpdateAtResourceLevel
When you apply a lock at a parent scope, all child resources inherit the same lock. To create management locks, you must have access to Microsoft.Authorization/* or Microsoft.Authorization/locks/* actions. Of the built-in roles, only Owner and User Access Administrator are granted those actions.


```js
azure_resources_locks.ManagementLocks_CreateOrUpdateAtResourceLevel({
  "resourceGroupName": "",
  "resourceProviderNamespace": "",
  "parentResourcePath": "",
  "resourceType": "",
  "resourceName": "",
  "lockName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group containing the resource to lock. 
  * resourceProviderNamespace **required** `string`: The resource provider namespace of the resource to lock.
  * parentResourcePath **required** `string`: The parent resource identity.
  * resourceType **required** `string`: The resource type of the resource to lock.
  * resourceName **required** `string`: The name of the resource to lock.
  * lockName **required** `string`: The name of lock. The lock name can be a maximum of 260 characters. It cannot contain <, > %, &, :, \, ?, /, or any control characters.
  * parameters **required** [ManagementLockObject](#managementlockobject)
  * api-version **required** `string`: The API version to use for the operation.
  * subscriptionId **required** `string`: The ID of the target subscription.

#### Output
* output [ManagementLockObject](#managementlockobject)

### ManagementLocks_DeleteByScope
Delete a management lock by scope.


```js
azure_resources_locks.ManagementLocks_DeleteByScope({
  "scope": "",
  "lockName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope for the lock. 
  * lockName **required** `string`: The name of lock.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
*Output schema unknown*

### ManagementLocks_GetByScope
Get a management lock by scope.


```js
azure_resources_locks.ManagementLocks_GetByScope({
  "scope": "",
  "lockName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope for the lock. 
  * lockName **required** `string`: The name of lock.
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [ManagementLockObject](#managementlockobject)

### ManagementLocks_CreateOrUpdateByScope
Create or update a management lock by scope.


```js
azure_resources_locks.ManagementLocks_CreateOrUpdateByScope({
  "scope": "",
  "lockName": "",
  "parameters": null,
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * scope **required** `string`: The scope for the lock. When providing a scope for the assignment, use '/subscriptions/{subscriptionId}' for subscriptions, '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}' for resource groups, and '/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePathIfPresent}/{resourceType}/{resourceName}' for resources.
  * lockName **required** `string`: The name of lock.
  * parameters **required** [ManagementLockObject](#managementlockobject)
  * api-version **required** `string`: The API version to use for the operation.

#### Output
* output [ManagementLockObject](#managementlockobject)



## Definitions

### ManagementLockListResult
* ManagementLockListResult `object`: The list of locks.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The list of locks.
    * items [ManagementLockObject](#managementlockobject)

### ManagementLockObject
* ManagementLockObject `object`: The lock information.
  * id `string`: The resource ID of the lock.
  * name `string`: The name of the lock.
  * properties **required** [ManagementLockProperties](#managementlockproperties)
  * type `string`: The resource type of the lock - Microsoft.Authorization/locks.

### ManagementLockOwner
* ManagementLockOwner `object`: Lock owner properties.
  * applicationId `string`: The application ID of the lock owner.

### ManagementLockProperties
* ManagementLockProperties `object`: The lock properties.
  * level **required** `string` (values: NotSpecified, CanNotDelete, ReadOnly): The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
  * notes `string`: Notes about the lock. Maximum of 512 characters.
  * owners `array`: The owners of the lock.
    * items [ManagementLockOwner](#managementlockowner)


