# @datafire/azure_managementgroups_management

Client library for Management Groups

## Installation and Usage
```bash
npm install --save @datafire/azure_managementgroups_management
```
```js
let azure_managementgroups_management = require('@datafire/azure_managementgroups_management').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_managementgroups_management.CheckNameAvailability({
  "api-version": "",
  "checkNameAvailabilityRequest": {}
}).then(data => {
  console.log(data);
});
```

## Description

The Azure Management Groups API enables consolidation of multiple 
subscriptions/resources into an organizational hierarchy and centrally 
manage access control, policies, alerting and reporting for those resources.


## Actions

### CheckNameAvailability
Checks if the specified management group name is valid and unique


```js
azure_managementgroups_management.CheckNameAvailability({
  "api-version": "",
  "checkNameAvailabilityRequest": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.
  * checkNameAvailabilityRequest **required** [CheckNameAvailabilityRequest](#checknameavailabilityrequest)

#### Output
* output [CheckNameAvailabilityResult](#checknameavailabilityresult)

### Entities_List
List all entities (Management Groups, Subscriptions, etc.) for the authenticated user.



```js
azure_managementgroups_management.Entities_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.
  * $skiptoken `string`: Page continuation token is only used if a previous operation returned a partial result. 
  * groupName `string`: A filter which allows the call to be filtered for a specific group.
  * Cache-Control `string`: Indicates that the request shouldn't utilize any caches.

#### Output
* output [EntityListResult](#entitylistresult)

### ManagementGroups_List
List management groups for the authenticated user.



```js
azure_managementgroups_management.ManagementGroups_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.
  * Cache-Control `string`: Indicates that the request shouldn't utilize any caches.
  * $skiptoken `string`: Page continuation token is only used if a previous operation returned a partial result. 

#### Output
* output [ManagementGroupListResult](#managementgrouplistresult)

### ManagementGroups_Delete
Delete management group.
If a management group contains child resources, the request will fail.



```js
azure_managementgroups_management.ManagementGroups_Delete({
  "groupId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: Management Group ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.
  * Cache-Control `string`: Indicates that the request shouldn't utilize any caches.

#### Output
* output [OperationResults](#operationresults)

### ManagementGroups_Get
Get the details of the management group.



```js
azure_managementgroups_management.ManagementGroups_Get({
  "groupId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: Management Group ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.
  * $expand `string` (values: children): The $expand=children query string parameter allows clients to request inclusion of children in the response payload.
  * $recurse `boolean`: The $recurse=true query string parameter allows clients to request inclusion of entire hierarchy in the response payload. Note that  $expand=children must be passed up if $recurse is set to true.
  * $filter `string`: A filter which allows the exclusion of subscriptions from results (i.e. '$filter=children.childType ne Subscription')
  * Cache-Control `string`: Indicates that the request shouldn't utilize any caches.

#### Output
* output [ManagementGroup](#managementgroup)

### ManagementGroups_Update
Update a management group.



```js
azure_managementgroups_management.ManagementGroups_Update({
  "groupId": "",
  "api-version": "",
  "patchGroupRequest": {}
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: Management Group ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.
  * Cache-Control `string`: Indicates that the request shouldn't utilize any caches.
  * patchGroupRequest **required** [PatchManagementGroupRequest](#patchmanagementgrouprequest)

#### Output
* output [ManagementGroup](#managementgroup)

### ManagementGroups_CreateOrUpdate
Create or update a management group.
If a management group is already created and a subsequent create request is issued with different properties, the management group properties will be updated.



```js
azure_managementgroups_management.ManagementGroups_CreateOrUpdate({
  "groupId": "",
  "api-version": "",
  "createManagementGroupRequest": {}
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: Management Group ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.
  * Cache-Control `string`: Indicates that the request shouldn't utilize any caches.
  * createManagementGroupRequest **required** [CreateManagementGroupRequest](#createmanagementgrouprequest)

#### Output
* output [ManagementGroup](#managementgroup)

### ManagementGroupSubscriptions_Delete
De-associates subscription from the management group.



```js
azure_managementgroups_management.ManagementGroupSubscriptions_Delete({
  "groupId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: Management Group ID.
  * subscriptionId **required** `string`: Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.
  * Cache-Control `string`: Indicates that the request shouldn't utilize any caches.

#### Output
*Output schema unknown*

### ManagementGroupSubscriptions_Create
Associates existing subscription with the management group.



```js
azure_managementgroups_management.ManagementGroupSubscriptions_Create({
  "groupId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: Management Group ID.
  * subscriptionId **required** `string`: Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.
  * Cache-Control `string`: Indicates that the request shouldn't utilize any caches.

#### Output
*Output schema unknown*

### Operations_List
Lists all of the available Management REST API operations.


```js
azure_managementgroups_management.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.

#### Output
* output [OperationListResult](#operationlistresult)



## Definitions

### CheckNameAvailabilityRequest
* CheckNameAvailabilityRequest `object`: Management group name availability check parameters.
  * name `string`: the name to check for availability
  * type `string` (values: /providers/Microsoft.Management/managementGroups): fully qualified resource type which includes provider namespace

### CheckNameAvailabilityResult
* CheckNameAvailabilityResult `object`: Describes the result of the request to check management group name availability.
  * message `string`: Required if nameAvailable == false. Localized. If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that is already in use, and direct them to select a different name.
  * nameAvailable `boolean`: Required. True indicates name is valid and available. False indicates the name is invalid, unavailable, or both.
  * reason `string` (values: Invalid, AlreadyExists): Required if nameAvailable == false. Invalid indicates the name provided does not match the resource provider's naming requirements (incorrect length, unsupported characters, etc.) AlreadyExists indicates that the name is already in use and is therefore unavailable.

### CreateManagementGroupChildInfo
* CreateManagementGroupChildInfo `object`: The child information of a management group used during creation.
  * children `array`: The list of children.
    * items [CreateManagementGroupChildInfo](#createmanagementgroupchildinfo)
  * displayName `string`: The friendly name of the child resource.
  * id `string`: The fully qualified ID for the child resource (management group or subscription).  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
  * name `string`: The name of the child entity.
  * roles `array`: The roles definitions associated with the management group.
    * items `string`
  * type [ManagementGroupChildType](#managementgroupchildtype)

### CreateManagementGroupDetails
* CreateManagementGroupDetails `object`: The details of a management group used during creation.
  * parent [CreateParentGroupInfo](#createparentgroupinfo)
  * updatedBy `string`: The identity of the principal or process that updated the object.
  * updatedTime `string`: The date and time when this object was last updated.
  * version `number`: The version number of the object.

### CreateManagementGroupProperties
* CreateManagementGroupProperties `object`: The generic properties of a management group used during creation.
  * children `array`: The list of children.
    * items [CreateManagementGroupChildInfo](#createmanagementgroupchildinfo)
  * details [CreateManagementGroupDetails](#createmanagementgroupdetails)
  * displayName `string`: The friendly name of the management group. If no value is passed then this  field will be set to the groupId.
  * roles `array`: The roles definitions associated with the management group.
    * items `string`
  * tenantId `string`: The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000

### CreateManagementGroupRequest
* CreateManagementGroupRequest `object`: Management group creation parameters.
  * id `string`: The fully qualified ID for the management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
  * name `string`: The name of the management group. For example, 00000000-0000-0000-0000-000000000000
  * properties [CreateManagementGroupProperties](#createmanagementgroupproperties)
  * type `string`: The type of the resource.  For example, /providers/Microsoft.Management/managementGroups

### CreateParentGroupInfo
* CreateParentGroupInfo `object`: (Optional) The ID of the parent management group used during creation.
  * displayName `string`: The friendly name of the parent management group.
  * id `string`: The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
  * name `string`: The name of the parent management group

### EntityHierarchyItem
* EntityHierarchyItem `object`: The management group details for the hierarchy view.
  * id `string`: The fully qualified ID for the management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
  * name `string`: The name of the management group. For example, 00000000-0000-0000-0000-000000000000
  * properties [EntityHierarchyItemProperties](#entityhierarchyitemproperties)
  * type `string`: The type of the resource.  For example, /providers/Microsoft.Management/managementGroups

### EntityHierarchyItemProperties
* EntityHierarchyItemProperties `object`: The generic properties of a management group.
  * children `array`: The list of children.
    * items [EntityHierarchyItem](#entityhierarchyitem)
  * displayName `string`: The friendly name of the management group.
  * permissions [Permissions](#permissions)

### EntityInfo
* EntityInfo `object`: The entity.
  * id `string`: The fully qualified ID for the entity.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
  * name `string`: The name of the entity. For example, 00000000-0000-0000-0000-000000000000
  * properties [EntityInfoProperties](#entityinfoproperties)
  * type `string`: The type of the resource. For example, /providers/Microsoft.Management/managementGroups

### EntityInfoProperties
* EntityInfoProperties `object`: The generic properties of an entity.
  * displayName `string`: The friendly name of the management group.
  * parent [EntityParentGroupInfo](#entityparentgroupinfo)
  * permissions [Permissions](#permissions)
  * tenantId `string`: The AAD Tenant ID associated with the entity. For example, 00000000-0000-0000-0000-000000000000

### EntityListResult
* EntityListResult `object`: Describes the result of the request to view entities.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The list of entities.
    * items [EntityInfo](#entityinfo)

### EntityParentGroupInfo
* EntityParentGroupInfo `object`: (Optional) The ID of the parent management group.
  * id `string`: The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000

### ErrorDetails
* ErrorDetails `object`: The details of the error.
  * code `string`: One of a server-defined set of error codes.
  * details `string`: A human-readable representation of the error's details.
  * message `string`: A human-readable representation of the error.

### ErrorResponse
* ErrorResponse `object`: The error object.
  * error [ErrorDetails](#errordetails)

### ManagementGroup
* ManagementGroup `object`: The management group details.
  * id `string`: The fully qualified ID for the management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
  * name `string`: The name of the management group. For example, 00000000-0000-0000-0000-000000000000
  * properties [ManagementGroupProperties](#managementgroupproperties)
  * type `string`: The type of the resource.  For example, /providers/Microsoft.Management/managementGroups

### ManagementGroupChildInfo
* ManagementGroupChildInfo `object`: The child information of a management group.
  * children `array`: The list of children.
    * items [ManagementGroupChildInfo](#managementgroupchildinfo)
  * displayName `string`: The friendly name of the child resource.
  * id `string`: The fully qualified ID for the child resource (management group or subscription).  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
  * name `string`: The name of the child entity.
  * roles `array`: The roles definitions associated with the management group.
    * items `string`
  * type [ManagementGroupChildType](#managementgroupchildtype)

### ManagementGroupChildType
* ManagementGroupChildType `string` (values: /providers/Microsoft.Management/managementGroups, /subscriptions): The type of child resource.

### ManagementGroupDetails
* ManagementGroupDetails `object`: The details of a management group.
  * parent [ParentGroupInfo](#parentgroupinfo)
  * updatedBy `string`: The identity of the principal or process that updated the object.
  * updatedTime `string`: The date and time when this object was last updated.
  * version `number`: The version number of the object.

### ManagementGroupInfo
* ManagementGroupInfo `object`: The management group resource.
  * id `string`: The fully qualified ID for the management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
  * name `string`: The name of the management group. For example, 00000000-0000-0000-0000-000000000000
  * properties [ManagementGroupInfoProperties](#managementgroupinfoproperties)
  * type `string`: The type of the resource. For example, /providers/Microsoft.Management/managementGroups

### ManagementGroupInfoProperties
* ManagementGroupInfoProperties `object`: The generic properties of a management group.
  * displayName `string`: The friendly name of the management group.
  * tenantId `string`: The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000

### ManagementGroupListResult
* ManagementGroupListResult `object`: Describes the result of the request to list management groups.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The list of management groups.
    * items [ManagementGroupInfo](#managementgroupinfo)

### ManagementGroupProperties
* ManagementGroupProperties `object`: The generic properties of a management group.
  * children `array`: The list of children.
    * items [ManagementGroupChildInfo](#managementgroupchildinfo)
  * details [ManagementGroupDetails](#managementgroupdetails)
  * displayName `string`: The friendly name of the management group.
  * roles `array`: The role definitions associated with the management group.
    * items `string`
  * tenantId `string`: The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000

### Operation
* Operation `object`: Operation supported by the Microsoft.Management resource provider.
  * display [OperationDisplayProperties](#operationdisplayproperties)
  * name `string`: Operation name: {provider}/{resource}/{operation}.

### OperationDisplayProperties
* OperationDisplayProperties `object`: The object that represents the operation.
  * description `string`: Operation description.
  * operation `string`: The operation that can be performed.
  * provider `string`: The name of the provider.
  * resource `string`: The resource on which the operation is performed.

### OperationListResult
* OperationListResult `object`: Describes the result of the request to list Microsoft.Management operations.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of operations supported by the Microsoft.Management resource provider.
    * items [Operation](#operation)

### OperationResults
* OperationResults `object`: The results of an asynchronous operation.
  * id `string`: The fully qualified ID for the management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
  * name `string`: The name of the management group. For example, 00000000-0000-0000-0000-000000000000
  * properties `object`
    * provisioningState [ProvisioningState](#provisioningstate)
  * type `string`: The type of the resource.  For example, /providers/Microsoft.Management/managementGroups

### ParentGroupInfo
* ParentGroupInfo `object`: (Optional) The ID of the parent management group.
  * displayName `string`: The friendly name of the parent management group.
  * id `string`: The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000
  * name `string`: The name of the parent management group

### PatchManagementGroupRequest
* PatchManagementGroupRequest `object`: Management group patch parameters.
  * displayName `string`: The friendly name of the management group.
  * parentId `string`: (Optional) The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000

### Permissions
* Permissions `string` (values: noaccess, view, edit, delete): The users specific permissions to this item.

### ProvisioningState
* Provisioning State `string` (values: Updating): The provisioning status.


