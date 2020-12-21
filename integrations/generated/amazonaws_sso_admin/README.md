# @datafire/amazonaws_sso_admin

Client library for AWS Single Sign-On Admin

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_sso_admin
```
```js
let amazonaws_sso_admin = require('@datafire/amazonaws_sso_admin').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### AttachManagedPolicyToPermissionSet



```js
amazonaws_sso_admin.AttachManagedPolicyToPermissionSet({
  "InstanceArn": null,
  "PermissionSetArn": null,
  "ManagedPolicyArn": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**
  * ManagedPolicyArn **required**
  * PermissionSetArn **required**

#### Output
* output [AttachManagedPolicyToPermissionSetResponse](#attachmanagedpolicytopermissionsetresponse)

### CreateAccountAssignment



```js
amazonaws_sso_admin.CreateAccountAssignment({
  "InstanceArn": null,
  "TargetId": null,
  "TargetType": null,
  "PermissionSetArn": null,
  "PrincipalType": null,
  "PrincipalId": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**
  * PermissionSetArn **required**
  * PrincipalId **required**
  * PrincipalType **required**
  * TargetId **required**
  * TargetType **required**

#### Output
* output [CreateAccountAssignmentResponse](#createaccountassignmentresponse)

### CreateInstanceAccessControlAttributeConfiguration



```js
amazonaws_sso_admin.CreateInstanceAccessControlAttributeConfiguration({
  "InstanceArn": null,
  "InstanceAccessControlAttributeConfiguration": null
}, context)
```

#### Input
* input `object`
  * InstanceAccessControlAttributeConfiguration **required**
    * AccessControlAttributes **required**
      * items [AccessControlAttribute](#accesscontrolattribute)
  * InstanceArn **required**

#### Output
* output [CreateInstanceAccessControlAttributeConfigurationResponse](#createinstanceaccesscontrolattributeconfigurationresponse)

### CreatePermissionSet



```js
amazonaws_sso_admin.CreatePermissionSet({
  "Name": null,
  "InstanceArn": null
}, context)
```

#### Input
* input `object`
  * Description
  * InstanceArn **required**
  * Name **required**
  * RelayState
  * SessionDuration
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreatePermissionSetResponse](#createpermissionsetresponse)

### DeleteAccountAssignment



```js
amazonaws_sso_admin.DeleteAccountAssignment({
  "InstanceArn": null,
  "TargetId": null,
  "TargetType": null,
  "PermissionSetArn": null,
  "PrincipalType": null,
  "PrincipalId": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**
  * PermissionSetArn **required**
  * PrincipalId **required**
  * PrincipalType **required**
  * TargetId **required**
  * TargetType **required**

#### Output
* output [DeleteAccountAssignmentResponse](#deleteaccountassignmentresponse)

### DeleteInlinePolicyFromPermissionSet



```js
amazonaws_sso_admin.DeleteInlinePolicyFromPermissionSet({
  "InstanceArn": null,
  "PermissionSetArn": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**
  * PermissionSetArn **required**

#### Output
* output [DeleteInlinePolicyFromPermissionSetResponse](#deleteinlinepolicyfrompermissionsetresponse)

### DeleteInstanceAccessControlAttributeConfiguration



```js
amazonaws_sso_admin.DeleteInstanceAccessControlAttributeConfiguration({
  "InstanceArn": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**

#### Output
* output [DeleteInstanceAccessControlAttributeConfigurationResponse](#deleteinstanceaccesscontrolattributeconfigurationresponse)

### DeletePermissionSet



```js
amazonaws_sso_admin.DeletePermissionSet({
  "InstanceArn": null,
  "PermissionSetArn": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**
  * PermissionSetArn **required**

#### Output
* output [DeletePermissionSetResponse](#deletepermissionsetresponse)

### DescribeAccountAssignmentCreationStatus



```js
amazonaws_sso_admin.DescribeAccountAssignmentCreationStatus({
  "InstanceArn": null,
  "AccountAssignmentCreationRequestId": null
}, context)
```

#### Input
* input `object`
  * AccountAssignmentCreationRequestId **required**
  * InstanceArn **required**

#### Output
* output [DescribeAccountAssignmentCreationStatusResponse](#describeaccountassignmentcreationstatusresponse)

### DescribeAccountAssignmentDeletionStatus



```js
amazonaws_sso_admin.DescribeAccountAssignmentDeletionStatus({
  "InstanceArn": null,
  "AccountAssignmentDeletionRequestId": null
}, context)
```

#### Input
* input `object`
  * AccountAssignmentDeletionRequestId **required**
  * InstanceArn **required**

#### Output
* output [DescribeAccountAssignmentDeletionStatusResponse](#describeaccountassignmentdeletionstatusresponse)

### DescribeInstanceAccessControlAttributeConfiguration



```js
amazonaws_sso_admin.DescribeInstanceAccessControlAttributeConfiguration({
  "InstanceArn": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**

#### Output
* output [DescribeInstanceAccessControlAttributeConfigurationResponse](#describeinstanceaccesscontrolattributeconfigurationresponse)

### DescribePermissionSet



```js
amazonaws_sso_admin.DescribePermissionSet({
  "InstanceArn": null,
  "PermissionSetArn": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**
  * PermissionSetArn **required**

#### Output
* output [DescribePermissionSetResponse](#describepermissionsetresponse)

### DescribePermissionSetProvisioningStatus



```js
amazonaws_sso_admin.DescribePermissionSetProvisioningStatus({
  "InstanceArn": null,
  "ProvisionPermissionSetRequestId": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**
  * ProvisionPermissionSetRequestId **required**

#### Output
* output [DescribePermissionSetProvisioningStatusResponse](#describepermissionsetprovisioningstatusresponse)

### DetachManagedPolicyFromPermissionSet



```js
amazonaws_sso_admin.DetachManagedPolicyFromPermissionSet({
  "InstanceArn": null,
  "PermissionSetArn": null,
  "ManagedPolicyArn": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**
  * ManagedPolicyArn **required**
  * PermissionSetArn **required**

#### Output
* output [DetachManagedPolicyFromPermissionSetResponse](#detachmanagedpolicyfrompermissionsetresponse)

### GetInlinePolicyForPermissionSet



```js
amazonaws_sso_admin.GetInlinePolicyForPermissionSet({
  "InstanceArn": null,
  "PermissionSetArn": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**
  * PermissionSetArn **required**

#### Output
* output [GetInlinePolicyForPermissionSetResponse](#getinlinepolicyforpermissionsetresponse)

### ListAccountAssignmentCreationStatus



```js
amazonaws_sso_admin.ListAccountAssignmentCreationStatus({
  "InstanceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * Status
  * InstanceArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListAccountAssignmentCreationStatusResponse](#listaccountassignmentcreationstatusresponse)

### ListAccountAssignmentDeletionStatus



```js
amazonaws_sso_admin.ListAccountAssignmentDeletionStatus({
  "InstanceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * Status
  * InstanceArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListAccountAssignmentDeletionStatusResponse](#listaccountassignmentdeletionstatusresponse)

### ListAccountAssignments



```js
amazonaws_sso_admin.ListAccountAssignments({
  "InstanceArn": null,
  "AccountId": null,
  "PermissionSetArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AccountId **required**
  * InstanceArn **required**
  * MaxResults
  * NextToken
  * PermissionSetArn **required**

#### Output
* output [ListAccountAssignmentsResponse](#listaccountassignmentsresponse)

### ListAccountsForProvisionedPermissionSet



```js
amazonaws_sso_admin.ListAccountsForProvisionedPermissionSet({
  "InstanceArn": null,
  "PermissionSetArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * InstanceArn **required**
  * MaxResults
  * NextToken
  * PermissionSetArn **required**
  * ProvisioningStatus

#### Output
* output [ListAccountsForProvisionedPermissionSetResponse](#listaccountsforprovisionedpermissionsetresponse)

### ListInstances



```js
amazonaws_sso_admin.ListInstances({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListInstancesResponse](#listinstancesresponse)

### ListManagedPoliciesInPermissionSet



```js
amazonaws_sso_admin.ListManagedPoliciesInPermissionSet({
  "InstanceArn": null,
  "PermissionSetArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * InstanceArn **required**
  * MaxResults
  * NextToken
  * PermissionSetArn **required**

#### Output
* output [ListManagedPoliciesInPermissionSetResponse](#listmanagedpoliciesinpermissionsetresponse)

### ListPermissionSetProvisioningStatus



```js
amazonaws_sso_admin.ListPermissionSetProvisioningStatus({
  "InstanceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * Status
  * InstanceArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListPermissionSetProvisioningStatusResponse](#listpermissionsetprovisioningstatusresponse)

### ListPermissionSets



```js
amazonaws_sso_admin.ListPermissionSets({
  "InstanceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * InstanceArn **required**
  * MaxResults
  * NextToken

#### Output
* output [ListPermissionSetsResponse](#listpermissionsetsresponse)

### ListPermissionSetsProvisionedToAccount



```js
amazonaws_sso_admin.ListPermissionSetsProvisionedToAccount({
  "InstanceArn": null,
  "AccountId": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AccountId **required**
  * InstanceArn **required**
  * MaxResults
  * NextToken
  * ProvisioningStatus

#### Output
* output [ListPermissionSetsProvisionedToAccountResponse](#listpermissionsetsprovisionedtoaccountresponse)

### ListTagsForResource



```js
amazonaws_sso_admin.ListTagsForResource({
  "InstanceArn": null,
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * InstanceArn **required**
  * NextToken
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### ProvisionPermissionSet



```js
amazonaws_sso_admin.ProvisionPermissionSet({
  "InstanceArn": null,
  "PermissionSetArn": null,
  "TargetType": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**
  * PermissionSetArn **required**
  * TargetId
  * TargetType **required**

#### Output
* output [ProvisionPermissionSetResponse](#provisionpermissionsetresponse)

### PutInlinePolicyToPermissionSet



```js
amazonaws_sso_admin.PutInlinePolicyToPermissionSet({
  "InstanceArn": null,
  "PermissionSetArn": null,
  "InlinePolicy": null
}, context)
```

#### Input
* input `object`
  * InlinePolicy **required**
  * InstanceArn **required**
  * PermissionSetArn **required**

#### Output
* output [PutInlinePolicyToPermissionSetResponse](#putinlinepolicytopermissionsetresponse)

### TagResource



```js
amazonaws_sso_admin.TagResource({
  "InstanceArn": null,
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_sso_admin.UntagResource({
  "InstanceArn": null,
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * InstanceArn **required**
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateInstanceAccessControlAttributeConfiguration



```js
amazonaws_sso_admin.UpdateInstanceAccessControlAttributeConfiguration({
  "InstanceArn": null,
  "InstanceAccessControlAttributeConfiguration": null
}, context)
```

#### Input
* input `object`
  * InstanceAccessControlAttributeConfiguration **required**
    * AccessControlAttributes **required**
      * items [AccessControlAttribute](#accesscontrolattribute)
  * InstanceArn **required**

#### Output
* output [UpdateInstanceAccessControlAttributeConfigurationResponse](#updateinstanceaccesscontrolattributeconfigurationresponse)

### UpdatePermissionSet



```js
amazonaws_sso_admin.UpdatePermissionSet({
  "InstanceArn": null,
  "PermissionSetArn": null
}, context)
```

#### Input
* input `object`
  * Description
  * InstanceArn **required**
  * PermissionSetArn **required**
  * RelayState
  * SessionDuration

#### Output
* output [UpdatePermissionSetResponse](#updatepermissionsetresponse)



## Definitions

### AccessControlAttribute
* AccessControlAttribute `object`: These are AWS SSO identity store attributes that you can configure for use in attributes-based access control (ABAC). You can create permission policies that determine who can access your AWS resources based upon the configured attribute value(s). When you enable ABAC and specify AccessControlAttributes, AWS SSO passes the attribute(s) value of the authenticated user into IAM for use in policy evaluation.
  * Key **required**
  * Value **required**
    * Source **required**
      * items [AccessControlAttributeValueSource](#accesscontrolattributevaluesource)

### AccessControlAttributeKey
* AccessControlAttributeKey `string`

### AccessControlAttributeList
* AccessControlAttributeList `array`
  * items [AccessControlAttribute](#accesscontrolattribute)

### AccessControlAttributeValue
* AccessControlAttributeValue `object`: The value used for mapping a specified attribute to an identity source.
  * Source **required**
    * items [AccessControlAttributeValueSource](#accesscontrolattributevaluesource)

### AccessControlAttributeValueSource
* AccessControlAttributeValueSource `string`

### AccessControlAttributeValueSourceList
* AccessControlAttributeValueSourceList `array`
  * items [AccessControlAttributeValueSource](#accesscontrolattributevaluesource)

### AccessDeniedException


### AccountAssignment
* AccountAssignment `object`: <p>The assignment that indicates a principal's limited access to a specified AWS account with a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in AWS SSO.</p> </note>
  * AccountId
  * PermissionSetArn
  * PrincipalId
  * PrincipalType

### AccountAssignmentList
* AccountAssignmentList `array`
  * items [AccountAssignment](#accountassignment)

### AccountAssignmentOperationStatus
* AccountAssignmentOperationStatus `object`: The status of the creation or deletion operation of an assignment that a principal needs to access an account.
  * CreatedDate
  * FailureReason
  * PermissionSetArn
  * PrincipalId
  * PrincipalType
  * RequestId
  * Status
  * TargetId
  * TargetType

### AccountAssignmentOperationStatusList
* AccountAssignmentOperationStatusList `array`
  * items [AccountAssignmentOperationStatusMetadata](#accountassignmentoperationstatusmetadata)

### AccountAssignmentOperationStatusMetadata
* AccountAssignmentOperationStatusMetadata `object`: Provides information about the <a>AccountAssignment</a> creation request.
  * CreatedDate
  * RequestId
  * Status

### AccountId
* AccountId `string`

### AccountList
* AccountList `array`
  * items [AccountId](#accountid)

### AttachManagedPolicyToPermissionSetRequest
* AttachManagedPolicyToPermissionSetRequest `object`
  * InstanceArn **required**
  * ManagedPolicyArn **required**
  * PermissionSetArn **required**

### AttachManagedPolicyToPermissionSetResponse
* AttachManagedPolicyToPermissionSetResponse `object`

### AttachedManagedPolicy
* AttachedManagedPolicy `object`: A structure that stores the details of the IAM managed policy.
  * Arn
  * Name

### AttachedManagedPolicyList
* AttachedManagedPolicyList `array`
  * items [AttachedManagedPolicy](#attachedmanagedpolicy)

### ConflictException


### CreateAccountAssignmentRequest
* CreateAccountAssignmentRequest `object`
  * InstanceArn **required**
  * PermissionSetArn **required**
  * PrincipalId **required**
  * PrincipalType **required**
  * TargetId **required**
  * TargetType **required**

### CreateAccountAssignmentResponse
* CreateAccountAssignmentResponse `object`
  * AccountAssignmentCreationStatus
    * CreatedDate
    * FailureReason
    * PermissionSetArn
    * PrincipalId
    * PrincipalType
    * RequestId
    * Status
    * TargetId
    * TargetType

### CreateInstanceAccessControlAttributeConfigurationRequest
* CreateInstanceAccessControlAttributeConfigurationRequest `object`
  * InstanceAccessControlAttributeConfiguration **required**
    * AccessControlAttributes **required**
      * items [AccessControlAttribute](#accesscontrolattribute)
  * InstanceArn **required**

### CreateInstanceAccessControlAttributeConfigurationResponse
* CreateInstanceAccessControlAttributeConfigurationResponse `object`

### CreatePermissionSetRequest
* CreatePermissionSetRequest `object`
  * Description
  * InstanceArn **required**
  * Name **required**
  * RelayState
  * SessionDuration
  * Tags
    * items [Tag](#tag)

### CreatePermissionSetResponse
* CreatePermissionSetResponse `object`
  * PermissionSet
    * CreatedDate
    * Description
    * Name
    * PermissionSetArn
    * RelayState
    * SessionDuration

### Date
* Date `string`

### DeleteAccountAssignmentRequest
* DeleteAccountAssignmentRequest `object`
  * InstanceArn **required**
  * PermissionSetArn **required**
  * PrincipalId **required**
  * PrincipalType **required**
  * TargetId **required**
  * TargetType **required**

### DeleteAccountAssignmentResponse
* DeleteAccountAssignmentResponse `object`
  * AccountAssignmentDeletionStatus
    * CreatedDate
    * FailureReason
    * PermissionSetArn
    * PrincipalId
    * PrincipalType
    * RequestId
    * Status
    * TargetId
    * TargetType

### DeleteInlinePolicyFromPermissionSetRequest
* DeleteInlinePolicyFromPermissionSetRequest `object`
  * InstanceArn **required**
  * PermissionSetArn **required**

### DeleteInlinePolicyFromPermissionSetResponse
* DeleteInlinePolicyFromPermissionSetResponse `object`

### DeleteInstanceAccessControlAttributeConfigurationRequest
* DeleteInstanceAccessControlAttributeConfigurationRequest `object`
  * InstanceArn **required**

### DeleteInstanceAccessControlAttributeConfigurationResponse
* DeleteInstanceAccessControlAttributeConfigurationResponse `object`

### DeletePermissionSetRequest
* DeletePermissionSetRequest `object`
  * InstanceArn **required**
  * PermissionSetArn **required**

### DeletePermissionSetResponse
* DeletePermissionSetResponse `object`

### DescribeAccountAssignmentCreationStatusRequest
* DescribeAccountAssignmentCreationStatusRequest `object`
  * AccountAssignmentCreationRequestId **required**
  * InstanceArn **required**

### DescribeAccountAssignmentCreationStatusResponse
* DescribeAccountAssignmentCreationStatusResponse `object`
  * AccountAssignmentCreationStatus
    * CreatedDate
    * FailureReason
    * PermissionSetArn
    * PrincipalId
    * PrincipalType
    * RequestId
    * Status
    * TargetId
    * TargetType

### DescribeAccountAssignmentDeletionStatusRequest
* DescribeAccountAssignmentDeletionStatusRequest `object`
  * AccountAssignmentDeletionRequestId **required**
  * InstanceArn **required**

### DescribeAccountAssignmentDeletionStatusResponse
* DescribeAccountAssignmentDeletionStatusResponse `object`
  * AccountAssignmentDeletionStatus
    * CreatedDate
    * FailureReason
    * PermissionSetArn
    * PrincipalId
    * PrincipalType
    * RequestId
    * Status
    * TargetId
    * TargetType

### DescribeInstanceAccessControlAttributeConfigurationRequest
* DescribeInstanceAccessControlAttributeConfigurationRequest `object`
  * InstanceArn **required**

### DescribeInstanceAccessControlAttributeConfigurationResponse
* DescribeInstanceAccessControlAttributeConfigurationResponse `object`
  * InstanceAccessControlAttributeConfiguration
    * AccessControlAttributes **required**
      * items [AccessControlAttribute](#accesscontrolattribute)
  * Status
  * StatusReason

### DescribePermissionSetProvisioningStatusRequest
* DescribePermissionSetProvisioningStatusRequest `object`
  * InstanceArn **required**
  * ProvisionPermissionSetRequestId **required**

### DescribePermissionSetProvisioningStatusResponse
* DescribePermissionSetProvisioningStatusResponse `object`
  * PermissionSetProvisioningStatus
    * AccountId
    * CreatedDate
    * FailureReason
    * PermissionSetArn
    * RequestId
    * Status

### DescribePermissionSetRequest
* DescribePermissionSetRequest `object`
  * InstanceArn **required**
  * PermissionSetArn **required**

### DescribePermissionSetResponse
* DescribePermissionSetResponse `object`
  * PermissionSet
    * CreatedDate
    * Description
    * Name
    * PermissionSetArn
    * RelayState
    * SessionDuration

### DetachManagedPolicyFromPermissionSetRequest
* DetachManagedPolicyFromPermissionSetRequest `object`
  * InstanceArn **required**
  * ManagedPolicyArn **required**
  * PermissionSetArn **required**

### DetachManagedPolicyFromPermissionSetResponse
* DetachManagedPolicyFromPermissionSetResponse `object`

### Duration
* Duration `string`

### GeneralArn
* GeneralArn `string`

### GetInlinePolicyForPermissionSetRequest
* GetInlinePolicyForPermissionSetRequest `object`
  * InstanceArn **required**
  * PermissionSetArn **required**

### GetInlinePolicyForPermissionSetResponse
* GetInlinePolicyForPermissionSetResponse `object`
  * InlinePolicy

### Id
* Id `string`

### InstanceAccessControlAttributeConfiguration
* InstanceAccessControlAttributeConfiguration `object`: Specifies the attributes to add to your attribute-based access control (ABAC) configuration.
  * AccessControlAttributes **required**
    * items [AccessControlAttribute](#accesscontrolattribute)

### InstanceAccessControlAttributeConfigurationStatus
* InstanceAccessControlAttributeConfigurationStatus `string` (values: ENABLED, CREATION_IN_PROGRESS, CREATION_FAILED)

### InstanceAccessControlAttributeConfigurationStatusReason
* InstanceAccessControlAttributeConfigurationStatusReason `string`

### InstanceArn
* InstanceArn `string`

### InstanceList
* InstanceList `array`
  * items [InstanceMetadata](#instancemetadata)

### InstanceMetadata
* InstanceMetadata `object`: Provides information about the SSO instance.
  * IdentityStoreId
  * InstanceArn

### InternalServerException


### ListAccountAssignmentCreationStatusRequest
* ListAccountAssignmentCreationStatusRequest `object`
  * Filter
    * Status
  * InstanceArn **required**
  * MaxResults
  * NextToken

### ListAccountAssignmentCreationStatusResponse
* ListAccountAssignmentCreationStatusResponse `object`
  * AccountAssignmentsCreationStatus
    * items [AccountAssignmentOperationStatusMetadata](#accountassignmentoperationstatusmetadata)
  * NextToken

### ListAccountAssignmentDeletionStatusRequest
* ListAccountAssignmentDeletionStatusRequest `object`
  * Filter
    * Status
  * InstanceArn **required**
  * MaxResults
  * NextToken

### ListAccountAssignmentDeletionStatusResponse
* ListAccountAssignmentDeletionStatusResponse `object`
  * AccountAssignmentsDeletionStatus
    * items [AccountAssignmentOperationStatusMetadata](#accountassignmentoperationstatusmetadata)
  * NextToken

### ListAccountAssignmentsRequest
* ListAccountAssignmentsRequest `object`
  * AccountId **required**
  * InstanceArn **required**
  * MaxResults
  * NextToken
  * PermissionSetArn **required**

### ListAccountAssignmentsResponse
* ListAccountAssignmentsResponse `object`
  * AccountAssignments
    * items [AccountAssignment](#accountassignment)
  * NextToken

### ListAccountsForProvisionedPermissionSetRequest
* ListAccountsForProvisionedPermissionSetRequest `object`
  * InstanceArn **required**
  * MaxResults
  * NextToken
  * PermissionSetArn **required**
  * ProvisioningStatus

### ListAccountsForProvisionedPermissionSetResponse
* ListAccountsForProvisionedPermissionSetResponse `object`
  * AccountIds
    * items [AccountId](#accountid)
  * NextToken

### ListInstancesRequest
* ListInstancesRequest `object`
  * MaxResults
  * NextToken

### ListInstancesResponse
* ListInstancesResponse `object`
  * Instances
    * items [InstanceMetadata](#instancemetadata)
  * NextToken

### ListManagedPoliciesInPermissionSetRequest
* ListManagedPoliciesInPermissionSetRequest `object`
  * InstanceArn **required**
  * MaxResults
  * NextToken
  * PermissionSetArn **required**

### ListManagedPoliciesInPermissionSetResponse
* ListManagedPoliciesInPermissionSetResponse `object`
  * AttachedManagedPolicies
    * items [AttachedManagedPolicy](#attachedmanagedpolicy)
  * NextToken

### ListPermissionSetProvisioningStatusRequest
* ListPermissionSetProvisioningStatusRequest `object`
  * Filter
    * Status
  * InstanceArn **required**
  * MaxResults
  * NextToken

### ListPermissionSetProvisioningStatusResponse
* ListPermissionSetProvisioningStatusResponse `object`
  * NextToken
  * PermissionSetsProvisioningStatus
    * items [PermissionSetProvisioningStatusMetadata](#permissionsetprovisioningstatusmetadata)

### ListPermissionSetsProvisionedToAccountRequest
* ListPermissionSetsProvisionedToAccountRequest `object`
  * AccountId **required**
  * InstanceArn **required**
  * MaxResults
  * NextToken
  * ProvisioningStatus

### ListPermissionSetsProvisionedToAccountResponse
* ListPermissionSetsProvisionedToAccountResponse `object`
  * NextToken
  * PermissionSets
    * items [PermissionSetArn](#permissionsetarn)

### ListPermissionSetsRequest
* ListPermissionSetsRequest `object`
  * InstanceArn **required**
  * MaxResults
  * NextToken

### ListPermissionSetsResponse
* ListPermissionSetsResponse `object`
  * NextToken
  * PermissionSets
    * items [PermissionSetArn](#permissionsetarn)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * InstanceArn **required**
  * NextToken
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### ManagedPolicyArn
* ManagedPolicyArn `string`

### MaxResults
* MaxResults `integer`

### Name
* Name `string`

### OperationStatusFilter
* OperationStatusFilter `object`: Filters he operation status list based on the passed attribute value.
  * Status

### PermissionSet
* PermissionSet `object`: An entity that contains IAM policies.
  * CreatedDate
  * Description
  * Name
  * PermissionSetArn
  * RelayState
  * SessionDuration

### PermissionSetArn
* PermissionSetArn `string`

### PermissionSetDescription
* PermissionSetDescription `string`

### PermissionSetList
* PermissionSetList `array`
  * items [PermissionSetArn](#permissionsetarn)

### PermissionSetName
* PermissionSetName `string`

### PermissionSetPolicyDocument
* PermissionSetPolicyDocument `string`

### PermissionSetProvisioningStatus
* PermissionSetProvisioningStatus `object`: A structure that is used to provide the status of the provisioning operation for a specified permission set.
  * AccountId
  * CreatedDate
  * FailureReason
  * PermissionSetArn
  * RequestId
  * Status

### PermissionSetProvisioningStatusList
* PermissionSetProvisioningStatusList `array`
  * items [PermissionSetProvisioningStatusMetadata](#permissionsetprovisioningstatusmetadata)

### PermissionSetProvisioningStatusMetadata
* PermissionSetProvisioningStatusMetadata `object`: Provides information about the permission set provisioning status.
  * CreatedDate
  * RequestId
  * Status

### PrincipalId
* PrincipalId `string`

### PrincipalType
* PrincipalType `string` (values: USER, GROUP)

### ProvisionPermissionSetRequest
* ProvisionPermissionSetRequest `object`
  * InstanceArn **required**
  * PermissionSetArn **required**
  * TargetId
  * TargetType **required**

### ProvisionPermissionSetResponse
* ProvisionPermissionSetResponse `object`
  * PermissionSetProvisioningStatus
    * AccountId
    * CreatedDate
    * FailureReason
    * PermissionSetArn
    * RequestId
    * Status

### ProvisionTargetType
* ProvisionTargetType `string` (values: AWS_ACCOUNT, ALL_PROVISIONED_ACCOUNTS)

### ProvisioningStatus
* ProvisioningStatus `string` (values: LATEST_PERMISSION_SET_PROVISIONED, LATEST_PERMISSION_SET_NOT_PROVISIONED)

### PutInlinePolicyToPermissionSetRequest
* PutInlinePolicyToPermissionSetRequest `object`
  * InlinePolicy **required**
  * InstanceArn **required**
  * PermissionSetArn **required**

### PutInlinePolicyToPermissionSetResponse
* PutInlinePolicyToPermissionSetResponse `object`

### Reason
* Reason `string`

### RelayState
* RelayState `string`

### ResourceNotFoundException


### ServiceQuotaExceededException


### StatusValues
* StatusValues `string` (values: IN_PROGRESS, FAILED, SUCCEEDED)

### Tag
* Tag `object`: A set of key-value pairs that are used to manage the resource. Tags can only be applied to permission sets and cannot be applied to corresponding roles that AWS SSO creates in AWS accounts.
  * Key
  * Value

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagResourceRequest
* TagResourceRequest `object`
  * InstanceArn **required**
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TargetId
* TargetId `string`

### TargetType
* TargetType `string` (values: AWS_ACCOUNT)

### ThrottlingException


### Token
* Token `string`

### UUId
* UUId `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * InstanceArn **required**
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateInstanceAccessControlAttributeConfigurationRequest
* UpdateInstanceAccessControlAttributeConfigurationRequest `object`
  * InstanceAccessControlAttributeConfiguration **required**
    * AccessControlAttributes **required**
      * items [AccessControlAttribute](#accesscontrolattribute)
  * InstanceArn **required**

### UpdateInstanceAccessControlAttributeConfigurationResponse
* UpdateInstanceAccessControlAttributeConfigurationResponse `object`

### UpdatePermissionSetRequest
* UpdatePermissionSetRequest `object`
  * Description
  * InstanceArn **required**
  * PermissionSetArn **required**
  * RelayState
  * SessionDuration

### UpdatePermissionSetResponse
* UpdatePermissionSetResponse `object`

### ValidationException



