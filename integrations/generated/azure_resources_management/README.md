# @datafire/azure_resources_management

Client library for Management Groups

## Installation and Usage
```bash
npm install --save @datafire/azure_resources_management
```
```js
let azure_resources_management = require('@datafire/azure_resources_management').create({
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

The Azure Management Groups API enables consolidation of multiple 
subscriptions/resources into an organizational hierarchy and centrally 
manage access control, policies, alerting and reporting for those resources.


## Actions

### ManagementGroups_List
List management groups for the authenticated user.



```js
azure_resources_management.ManagementGroups_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-08-31-preview.
  * $skiptoken `string`: Page continuation token is only used if a previous operation returned a partial result. 

#### Output
* output [ManagementGroupListResult](#managementgrouplistresult)

### ManagementGroups_Get
Get the details of the management group.



```js
azure_resources_management.ManagementGroups_Get({
  "groupId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`: Management Group ID.
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-08-31-preview.
  * $expand `string` (values: children): The $expand=children query string parameter allows clients to request inclusion of children in the response payload.
  * $recurse `boolean`: The $recurse=true query string parameter allows clients to request inclusion of entire hierarchy in the response payload.

#### Output
* output [ManagementGroupWithHierarchy](#managementgroupwithhierarchy)

### Operations_List
Lists all of the available management REST API operations.


```js
azure_resources_management.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. The current version is 2017-08-31-preview.

#### Output
* output [OperationListResult](#operationlistresult)



## Definitions

### ErrorDetails
* ErrorDetails `object`: The details of the error.
  * code `string`: One of a server-defined set of error codes.
  * message `string`: A human-readable representation of the error.
  * target `string`: (Optional) The target of the error.

### ErrorResponse
* ErrorResponse `object`: The error object.
  * error [ErrorDetails](#errordetails)

### ManagementGroup
* ManagementGroup `object`: The management group details.
  * id `string`: The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000
  * name `string`: The name of the management group. E.g. 20000000-0000-0000-0000-000000000000
  * properties [ManagementGroupProperties](#managementgroupproperties)
  * type `string`: The type of the resource. E.g. /providers/Microsoft.Management/managementGroups

### ManagementGroupChildInfo
* ManagementGroupChildInfo `object`: The unique identifier (ID) of a management group.
  * childId `string`: The ID of the child resource (management group or subscription). E.g. /providers/Microsoft.Management/managementGroups/40000000-0000-0000-0000-000000000000
  * childType [ManagementGroupType](#managementgrouptype)
  * displayName `string`: The friendly name of the child resource.
  * tenantId `string`: (Optional) The AAD Tenant ID associated with the child resource.

### ManagementGroupDetailsProperties
* ManagementGroupDetailsProperties `object`: The details properties of a management group.
  * managementGroupType [ManagementGroupType](#managementgrouptype)
  * parent [ParentGroupInfo](#parentgroupinfo)
  * updatedBy `string`: The identity of the principal or process that updated the object.
  * updatedTime `string`: The date and time when this object was last updated.
  * version `number`: The version number of the object.

### ManagementGroupInfo
* ManagementGroupInfo `object`: The management group.
  * id `string`: The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000
  * name `string`: The name of the management group. E.g. 20000000-0000-0000-0000-000000000000
  * properties [ManagementGroupInfoProperties](#managementgroupinfoproperties)
  * type `string`: The type of the resource. E.g. /providers/Microsoft.Management/managementGroups

### ManagementGroupInfoProperties
* ManagementGroupInfoProperties `object`: The generic properties of a management group.
  * displayName `string`: The friendly name of the management group.
  * tenantId `string`: The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000

### ManagementGroupListResult
* ManagementGroupListResult `object`: The result of listing management groups.
  * nextLink `string`: The URL to the next page of results.
  * value `array`: The list of management groups.
    * items [ManagementGroupInfo](#managementgroupinfo)

### ManagementGroupProperties
* ManagementGroupProperties `object`: The generic properties of a management group.
  * details [ManagementGroupDetailsProperties](#managementgroupdetailsproperties)
  * displayName `string`: The friendly name of the management group.
  * tenantId `string`: The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000

### ManagementGroupPropertiesWithChildren
* ManagementGroupPropertiesWithChildren `object`: The generic properties of a management group.
  * children `array`: The list of children.
    * items [ManagementGroupChildInfo](#managementgroupchildinfo)
  * details [ManagementGroupDetailsProperties](#managementgroupdetailsproperties)
  * displayName `string`: The friendly name of the management group.
  * tenantId `string`: The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000

### ManagementGroupPropertiesWithHierarchy
* ManagementGroupPropertiesWithHierarchy `object`: The generic properties of a management group.
  * children `array`: The list of children.
    * items [ManagementGroupRecursiveChildInfo](#managementgrouprecursivechildinfo)
  * details [ManagementGroupDetailsProperties](#managementgroupdetailsproperties)
  * displayName `string`: The friendly name of the management group.
  * tenantId `string`: The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000

### ManagementGroupRecursiveChildInfo
* ManagementGroupRecursiveChildInfo `object`: The unique identifier (ID) of a management group.
  * childId `string`: The ID of the child resource (management group or subscription). E.g. /providers/Microsoft.Management/managementGroups/40000000-0000-0000-0000-000000000000
  * childType [ManagementGroupType](#managementgrouptype)
  * children `array`: The list of children.
    * items [ManagementGroupRecursiveChildInfo](#managementgrouprecursivechildinfo)
  * displayName `string`: The friendly name of the child resource.
  * tenantId `string`: (Optional) The AAD Tenant ID associated with the child resource.

### ManagementGroupType
* ManagementGroupType `string` (values: Enrollment, Department, Account, Subscription): (Optional) The type of the management group.

### ManagementGroupWithChildren
* ManagementGroupWithChildren `object`: The management group details.
  * id `string`: The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000
  * name `string`: The name of the management group. E.g. 20000000-0000-0000-0000-000000000000
  * properties [ManagementGroupPropertiesWithChildren](#managementgrouppropertieswithchildren)
  * type `string`: The type of the resource. E.g. /providers/Microsoft.Management/managementGroups

### ManagementGroupWithHierarchy
* ManagementGroupWithHierarchy `object`: The management group details.
  * id `string`: The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000
  * name `string`: The name of the management group. E.g. 20000000-0000-0000-0000-000000000000
  * properties [ManagementGroupPropertiesWithHierarchy](#managementgrouppropertieswithhierarchy)
  * type `string`: The type of the resource. E.g. /providers/Microsoft.Management/managementGroups

### Operation
* Operation `object`: A Management REST API operation.
  * display `object`: The object that represents the operation.
    * operation `string`: Operation type: Read, write, delete, etc.
    * provider `string`: Service provider: Microsoft.Management.
    * resource `string`: Resource on which the operation is performed: Invoice, etc.
  * name `string`: Operation name: {provider}/{resource}/{operation}.

### OperationListResult
* OperationListResult `object`: Result listing  operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of management operations supported by the Microsoft.Management resource provider.
    * items [Operation](#operation)

### ParentGroupInfo
* ParentGroupInfo `object`: (Optional) The ID of the parent management group.
  * displayName `string`: The friendly name of the management group.
  * parentId `string`: The ID of the parent management group. E.g. /providers/Microsoft.Management/managementGroups/30000000-0000-0000-0000-000000000000


