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

.then(data => {
  console.log(data);
});
```

## Description

The Azure Management Groups API enables consolidation of multiple subscriptions/resources into an organizational hierarchy and centrally manage access control, policies, alerting and reporting for those resources.

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
  * $skiptoken `string`: Page continuation token is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.
  * $skip `integer`: Number of entities to skip over when retrieving results. Passing this in will override $skipToken.
  * $top `integer`: Number of elements to return when retrieving results. Passing this in will override $skipToken.
  * $select `string`: This parameter specifies the fields to include in the response. Can include any combination of Name,DisplayName,Type,ParentDisplayNameChain,ParentChain, e.g. '$select=Name,DisplayName,Type,ParentDisplayNameChain,ParentNameChain'. When specified the $select parameter can override select in $skipToken.
  * $search `string` (values: AllowedParents, AllowedChildren, ParentAndFirstLevelChildren, ParentOnly, ChildrenOnly): The $search parameter is used in conjunction with the $filter parameter to return three different outputs depending on the parameter passed in. With $search=AllowedParents the API will return the entity info of all groups that the requested entity will be able to reparent to as determined by the user's permissions. With $search=AllowedChildren the API will return the entity info of all entities that can be added as children of the requested entity. With $search=ParentAndFirstLevelChildren the API will return the parent and  first level of children that the user has either direct access to or indirect access via one of their descendants.
  * $filter `string`: The filter parameter allows you to filter on the name or display name fields. You can check for equality on the name field (e.g. name eq '{entityName}')  and you can check for substrings on either the name or display name fields(e.g. contains(name, '{substringToSearch}'), contains(displayName, '{substringToSearch')). Note that the '{entityName}' and '{substringToSearch}' fields are checked case insensitively.
  * $view `string` (values: FullHierarchy, GroupsOnly, SubscriptionsOnly, Audit): The view parameter allows clients to filter the type of data that is returned by the getEntities call.
  * groupName `string`: A filter which allows the get entities call to focus on a particular group (i.e. "$filter=name eq 'groupName'")
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
  * $skiptoken `string`: Page continuation token is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.

#### Output
* output [ManagementGroupListResult](#managementgrouplistresult)

### ManagementGroups_Delete
Delete management group. If a management group contains child resources, the request will fail.


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
Create or update a management group. If a management group is already created and a subsequent create request is issued with different properties, the management group properties will be updated.


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

### ManagementGroups_GetDescendants
List all entities that descend from a management group.



```js
azure_managementgroups_management.ManagementGroups_GetDescendants({
  "groupId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: Management Group ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.
  * $skiptoken `string`: Page continuation token is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.
  * $top `integer`: Number of elements to return when retrieving results. Passing this in will override $skipToken.

#### Output
* output [DescendantListResult](#descendantlistresult)

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

### StartTenantBackfill
Starts backfilling subscriptions for the Tenant.


```js
azure_managementgroups_management.StartTenantBackfill({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.

#### Output
* output [TenantBackfillStatusResult](#tenantbackfillstatusresult)

### TenantBackfillStatus
Gets tenant backfill status


```js
azure_managementgroups_management.TenantBackfillStatus({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2018-01-01-preview.

#### Output
* output [TenantBackfillStatusResult](#tenantbackfillstatusresult)



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

### DescendantInfo
* DescendantInfo `object`: The descendant.
  * id `string`: The fully qualified ID for the descendant.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000 or /subscriptions/0000000-0000-0000-0000-000000000000
  * name `string`: The name of the descendant. For example, 00000000-0000-0000-0000-000000000000
  * properties [DescendantInfoProperties](#descendantinfoproperties)
  * type `string`: The type of the resource. For example, /providers/Microsoft.Management/managementGroups or /subscriptions

### DescendantInfoProperties
* DescendantInfoProperties `object`: The generic properties of an descendant.
  * displayName `string`: The friendly name of the management group.
  * parent [DescendantParentGroupInfo](#descendantparentgroupinfo)

### DescendantListResult
* DescendantListResult `object`: Describes the result of the request to view descendants.
  * nextLink `string`: The URL to use for getting the next set of results.
  * value `array`: The list of descendants.
    * items [DescendantInfo](#descendantinfo)

### DescendantParentGroupInfo
* DescendantParentGroupInfo `object`: The ID of the parent management group.
  * id `string`: The fully qualified ID for the parent management group.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000

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
  * inheritedPermissions [Permissions](#permissions)
  * numberOfChildGroups `integer`: Number of child groups is the number of Groups that are exactly one level underneath the current Group.
  * numberOfChildren `integer`: Number of children is the number of Groups and Subscriptions that are exactly one level underneath the current Group.
  * numberOfDescendants `integer`
  * parent [EntityParentGroupInfo](#entityparentgroupinfo)
  * parentDisplayNameChain `array`: The parent display name chain from the root group to the immediate parent
    * items `string`
  * parentNameChain `array`: The parent name chain from the root group to the immediate parent
    * items `string`
  * permissions [Permissions](#permissions)
  * tenantId `string`: The AAD Tenant ID associated with the entity. For example, 00000000-0000-0000-0000-000000000000

### EntityListResult
* EntityListResult `object`: Describes the result of the request to view entities.
  * count `integer`: Total count of records that match the filter
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

### TenantBackfillStatusResult
* TenantBackfillStatusResult `object`: The tenant backfill status
  * status `string` (values: NotStarted, NotStartedButGroupsExist, Started, Failed, Cancelled, Completed): The status of the Tenant Backfill
  * tenantId `string`: The AAD Tenant ID associated with the management group. For example, 00000000-0000-0000-0000-000000000000


