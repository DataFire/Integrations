# @datafire/amazonaws_workspaces

Client library for Amazon WorkSpaces

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_workspaces
```
```js
let amazonaws_workspaces = require('@datafire/amazonaws_workspaces').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon WorkSpaces Service</fullname> <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows and Amazon Linux desktops for your users.</p>

## Actions

### AssociateConnectionAlias



```js
amazonaws_workspaces.AssociateConnectionAlias({
  "AliasId": null,
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * AliasId **required**
  * ResourceId **required**

#### Output
* output [AssociateConnectionAliasResult](#associateconnectionaliasresult)

### AssociateIpGroups



```js
amazonaws_workspaces.AssociateIpGroups({
  "DirectoryId": null,
  "GroupIds": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * GroupIds **required**
    * items [IpGroupId](#ipgroupid)

#### Output
* output [AssociateIpGroupsResult](#associateipgroupsresult)

### AuthorizeIpRules



```js
amazonaws_workspaces.AuthorizeIpRules({
  "GroupId": null,
  "UserRules": null
}, context)
```

#### Input
* input `object`
  * GroupId **required**
  * UserRules **required**
    * items [IpRuleItem](#ipruleitem)

#### Output
* output [AuthorizeIpRulesResult](#authorizeiprulesresult)

### CopyWorkspaceImage



```js
amazonaws_workspaces.CopyWorkspaceImage({
  "Name": null,
  "SourceImageId": null,
  "SourceRegion": null
}, context)
```

#### Input
* input `object`
  * Description
  * Name **required**
  * SourceImageId **required**
  * SourceRegion **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CopyWorkspaceImageResult](#copyworkspaceimageresult)

### CreateConnectionAlias



```js
amazonaws_workspaces.CreateConnectionAlias({
  "ConnectionString": null
}, context)
```

#### Input
* input `object`
  * ConnectionString **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateConnectionAliasResult](#createconnectionaliasresult)

### CreateIpGroup



```js
amazonaws_workspaces.CreateIpGroup({
  "GroupName": null
}, context)
```

#### Input
* input `object`
  * GroupDesc
  * GroupName **required**
  * Tags
    * items [Tag](#tag)
  * UserRules
    * items [IpRuleItem](#ipruleitem)

#### Output
* output [CreateIpGroupResult](#createipgroupresult)

### CreateTags



```js
amazonaws_workspaces.CreateTags({
  "ResourceId": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [CreateTagsResult](#createtagsresult)

### CreateWorkspaces



```js
amazonaws_workspaces.CreateWorkspaces({
  "Workspaces": null
}, context)
```

#### Input
* input `object`
  * Workspaces **required**
    * items [WorkspaceRequest](#workspacerequest)

#### Output
* output [CreateWorkspacesResult](#createworkspacesresult)

### DeleteConnectionAlias



```js
amazonaws_workspaces.DeleteConnectionAlias({
  "AliasId": null
}, context)
```

#### Input
* input `object`
  * AliasId **required**

#### Output
* output [DeleteConnectionAliasResult](#deleteconnectionaliasresult)

### DeleteIpGroup



```js
amazonaws_workspaces.DeleteIpGroup({
  "GroupId": null
}, context)
```

#### Input
* input `object`
  * GroupId **required**

#### Output
* output [DeleteIpGroupResult](#deleteipgroupresult)

### DeleteTags



```js
amazonaws_workspaces.DeleteTags({
  "ResourceId": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * TagKeys **required**
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [DeleteTagsResult](#deletetagsresult)

### DeleteWorkspaceImage



```js
amazonaws_workspaces.DeleteWorkspaceImage({
  "ImageId": null
}, context)
```

#### Input
* input `object`
  * ImageId **required**

#### Output
* output [DeleteWorkspaceImageResult](#deleteworkspaceimageresult)

### DeregisterWorkspaceDirectory



```js
amazonaws_workspaces.DeregisterWorkspaceDirectory({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**

#### Output
* output [DeregisterWorkspaceDirectoryResult](#deregisterworkspacedirectoryresult)

### DescribeAccount



```js
amazonaws_workspaces.DescribeAccount({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAccountResult](#describeaccountresult)

### DescribeAccountModifications



```js
amazonaws_workspaces.DescribeAccountModifications({}, context)
```

#### Input
* input `object`
  * NextToken

#### Output
* output [DescribeAccountModificationsResult](#describeaccountmodificationsresult)

### DescribeClientProperties



```js
amazonaws_workspaces.DescribeClientProperties({
  "ResourceIds": null
}, context)
```

#### Input
* input `object`
  * ResourceIds **required**
    * items [NonEmptyString](#nonemptystring)

#### Output
* output [DescribeClientPropertiesResult](#describeclientpropertiesresult)

### DescribeConnectionAliasPermissions



```js
amazonaws_workspaces.DescribeConnectionAliasPermissions({
  "AliasId": null
}, context)
```

#### Input
* input `object`
  * AliasId **required**
  * MaxResults
  * NextToken

#### Output
* output [DescribeConnectionAliasPermissionsResult](#describeconnectionaliaspermissionsresult)

### DescribeConnectionAliases



```js
amazonaws_workspaces.DescribeConnectionAliases({}, context)
```

#### Input
* input `object`
  * AliasIds
    * items [ConnectionAliasId](#connectionaliasid)
  * Limit
  * NextToken
  * ResourceId

#### Output
* output [DescribeConnectionAliasesResult](#describeconnectionaliasesresult)

### DescribeIpGroups



```js
amazonaws_workspaces.DescribeIpGroups({}, context)
```

#### Input
* input `object`
  * GroupIds
    * items [IpGroupId](#ipgroupid)
  * MaxResults
  * NextToken

#### Output
* output [DescribeIpGroupsResult](#describeipgroupsresult)

### DescribeTags



```js
amazonaws_workspaces.DescribeTags({
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**

#### Output
* output [DescribeTagsResult](#describetagsresult)

### DescribeWorkspaceBundles



```js
amazonaws_workspaces.DescribeWorkspaceBundles({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * BundleIds
    * items [BundleId](#bundleid)
  * NextToken
  * Owner

#### Output
* output [DescribeWorkspaceBundlesResult](#describeworkspacebundlesresult)

### DescribeWorkspaceDirectories



```js
amazonaws_workspaces.DescribeWorkspaceDirectories({}, context)
```

#### Input
* input `object`
  * NextToken `string`
  * DirectoryIds
    * items [DirectoryId](#directoryid)
  * Limit
  * NextToken

#### Output
* output [DescribeWorkspaceDirectoriesResult](#describeworkspacedirectoriesresult)

### DescribeWorkspaceImagePermissions



```js
amazonaws_workspaces.DescribeWorkspaceImagePermissions({
  "ImageId": null
}, context)
```

#### Input
* input `object`
  * ImageId **required**
  * MaxResults
  * NextToken

#### Output
* output [DescribeWorkspaceImagePermissionsResult](#describeworkspaceimagepermissionsresult)

### DescribeWorkspaceImages



```js
amazonaws_workspaces.DescribeWorkspaceImages({}, context)
```

#### Input
* input `object`
  * ImageIds
    * items [WorkspaceImageId](#workspaceimageid)
  * ImageType
  * MaxResults
  * NextToken

#### Output
* output [DescribeWorkspaceImagesResult](#describeworkspaceimagesresult)

### DescribeWorkspaceSnapshots



```js
amazonaws_workspaces.DescribeWorkspaceSnapshots({
  "WorkspaceId": null
}, context)
```

#### Input
* input `object`
  * WorkspaceId **required**

#### Output
* output [DescribeWorkspaceSnapshotsResult](#describeworkspacesnapshotsresult)

### DescribeWorkspaces



```js
amazonaws_workspaces.DescribeWorkspaces({}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * BundleId
  * DirectoryId
  * Limit
  * NextToken
  * UserName
  * WorkspaceIds
    * items [WorkspaceId](#workspaceid)

#### Output
* output [DescribeWorkspacesResult](#describeworkspacesresult)

### DescribeWorkspacesConnectionStatus



```js
amazonaws_workspaces.DescribeWorkspacesConnectionStatus({}, context)
```

#### Input
* input `object`
  * NextToken
  * WorkspaceIds
    * items [WorkspaceId](#workspaceid)

#### Output
* output [DescribeWorkspacesConnectionStatusResult](#describeworkspacesconnectionstatusresult)

### DisassociateConnectionAlias



```js
amazonaws_workspaces.DisassociateConnectionAlias({
  "AliasId": null
}, context)
```

#### Input
* input `object`
  * AliasId **required**

#### Output
* output [DisassociateConnectionAliasResult](#disassociateconnectionaliasresult)

### DisassociateIpGroups



```js
amazonaws_workspaces.DisassociateIpGroups({
  "DirectoryId": null,
  "GroupIds": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * GroupIds **required**
    * items [IpGroupId](#ipgroupid)

#### Output
* output [DisassociateIpGroupsResult](#disassociateipgroupsresult)

### ImportWorkspaceImage



```js
amazonaws_workspaces.ImportWorkspaceImage({
  "Ec2ImageId": null,
  "IngestionProcess": null,
  "ImageName": null,
  "ImageDescription": null
}, context)
```

#### Input
* input `object`
  * Applications
    * items [Application](#application)
  * Ec2ImageId **required**
  * ImageDescription **required**
  * ImageName **required**
  * IngestionProcess **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [ImportWorkspaceImageResult](#importworkspaceimageresult)

### ListAvailableManagementCidrRanges



```js
amazonaws_workspaces.ListAvailableManagementCidrRanges({
  "ManagementCidrRangeConstraint": null
}, context)
```

#### Input
* input `object`
  * ManagementCidrRangeConstraint **required**
  * MaxResults
  * NextToken

#### Output
* output [ListAvailableManagementCidrRangesResult](#listavailablemanagementcidrrangesresult)

### MigrateWorkspace



```js
amazonaws_workspaces.MigrateWorkspace({
  "SourceWorkspaceId": null,
  "BundleId": null
}, context)
```

#### Input
* input `object`
  * BundleId **required**
  * SourceWorkspaceId **required**

#### Output
* output [MigrateWorkspaceResult](#migrateworkspaceresult)

### ModifyAccount



```js
amazonaws_workspaces.ModifyAccount({}, context)
```

#### Input
* input `object`
  * DedicatedTenancyManagementCidrRange
  * DedicatedTenancySupport

#### Output
* output [ModifyAccountResult](#modifyaccountresult)

### ModifyClientProperties



```js
amazonaws_workspaces.ModifyClientProperties({
  "ResourceId": null,
  "ClientProperties": null
}, context)
```

#### Input
* input `object`
  * ClientProperties **required**
    * ReconnectEnabled
  * ResourceId **required**

#### Output
* output [ModifyClientPropertiesResult](#modifyclientpropertiesresult)

### ModifySelfservicePermissions



```js
amazonaws_workspaces.ModifySelfservicePermissions({
  "ResourceId": null,
  "SelfservicePermissions": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * SelfservicePermissions **required**
    * ChangeComputeType
    * IncreaseVolumeSize
    * RebuildWorkspace
    * RestartWorkspace
    * SwitchRunningMode

#### Output
* output [ModifySelfservicePermissionsResult](#modifyselfservicepermissionsresult)

### ModifyWorkspaceAccessProperties



```js
amazonaws_workspaces.ModifyWorkspaceAccessProperties({
  "ResourceId": null,
  "WorkspaceAccessProperties": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * WorkspaceAccessProperties **required**
    * DeviceTypeAndroid
    * DeviceTypeChromeOs
    * DeviceTypeIos
    * DeviceTypeOsx
    * DeviceTypeWeb
    * DeviceTypeWindows
    * DeviceTypeZeroClient

#### Output
* output [ModifyWorkspaceAccessPropertiesResult](#modifyworkspaceaccesspropertiesresult)

### ModifyWorkspaceCreationProperties



```js
amazonaws_workspaces.ModifyWorkspaceCreationProperties({
  "ResourceId": null,
  "WorkspaceCreationProperties": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * WorkspaceCreationProperties **required**
    * CustomSecurityGroupId
    * DefaultOu
    * EnableInternetAccess
    * EnableMaintenanceMode
    * EnableWorkDocs
    * UserEnabledAsLocalAdministrator

#### Output
* output [ModifyWorkspaceCreationPropertiesResult](#modifyworkspacecreationpropertiesresult)

### ModifyWorkspaceProperties



```js
amazonaws_workspaces.ModifyWorkspaceProperties({
  "WorkspaceId": null,
  "WorkspaceProperties": null
}, context)
```

#### Input
* input `object`
  * WorkspaceId **required**
  * WorkspaceProperties **required**
    * ComputeTypeName
    * RootVolumeSizeGib
    * RunningMode
    * RunningModeAutoStopTimeoutInMinutes
    * UserVolumeSizeGib

#### Output
* output [ModifyWorkspacePropertiesResult](#modifyworkspacepropertiesresult)

### ModifyWorkspaceState



```js
amazonaws_workspaces.ModifyWorkspaceState({
  "WorkspaceId": null,
  "WorkspaceState": null
}, context)
```

#### Input
* input `object`
  * WorkspaceId **required**
  * WorkspaceState **required**

#### Output
* output [ModifyWorkspaceStateResult](#modifyworkspacestateresult)

### RebootWorkspaces



```js
amazonaws_workspaces.RebootWorkspaces({
  "RebootWorkspaceRequests": null
}, context)
```

#### Input
* input `object`
  * RebootWorkspaceRequests **required**
    * items [RebootRequest](#rebootrequest)

#### Output
* output [RebootWorkspacesResult](#rebootworkspacesresult)

### RebuildWorkspaces



```js
amazonaws_workspaces.RebuildWorkspaces({
  "RebuildWorkspaceRequests": null
}, context)
```

#### Input
* input `object`
  * RebuildWorkspaceRequests **required**
    * items [RebuildRequest](#rebuildrequest)

#### Output
* output [RebuildWorkspacesResult](#rebuildworkspacesresult)

### RegisterWorkspaceDirectory



```js
amazonaws_workspaces.RegisterWorkspaceDirectory({
  "DirectoryId": null,
  "EnableWorkDocs": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * EnableSelfService
  * EnableWorkDocs **required**
  * SubnetIds
    * items [SubnetId](#subnetid)
  * Tags
    * items [Tag](#tag)
  * Tenancy

#### Output
* output [RegisterWorkspaceDirectoryResult](#registerworkspacedirectoryresult)

### RestoreWorkspace



```js
amazonaws_workspaces.RestoreWorkspace({
  "WorkspaceId": null
}, context)
```

#### Input
* input `object`
  * WorkspaceId **required**

#### Output
* output [RestoreWorkspaceResult](#restoreworkspaceresult)

### RevokeIpRules



```js
amazonaws_workspaces.RevokeIpRules({
  "GroupId": null,
  "UserRules": null
}, context)
```

#### Input
* input `object`
  * GroupId **required**
  * UserRules **required**
    * items [IpRule](#iprule)

#### Output
* output [RevokeIpRulesResult](#revokeiprulesresult)

### StartWorkspaces



```js
amazonaws_workspaces.StartWorkspaces({
  "StartWorkspaceRequests": null
}, context)
```

#### Input
* input `object`
  * StartWorkspaceRequests **required**
    * items [StartRequest](#startrequest)

#### Output
* output [StartWorkspacesResult](#startworkspacesresult)

### StopWorkspaces



```js
amazonaws_workspaces.StopWorkspaces({
  "StopWorkspaceRequests": null
}, context)
```

#### Input
* input `object`
  * StopWorkspaceRequests **required**
    * items [StopRequest](#stoprequest)

#### Output
* output [StopWorkspacesResult](#stopworkspacesresult)

### TerminateWorkspaces



```js
amazonaws_workspaces.TerminateWorkspaces({
  "TerminateWorkspaceRequests": null
}, context)
```

#### Input
* input `object`
  * TerminateWorkspaceRequests **required**
    * items [TerminateRequest](#terminaterequest)

#### Output
* output [TerminateWorkspacesResult](#terminateworkspacesresult)

### UpdateConnectionAliasPermission



```js
amazonaws_workspaces.UpdateConnectionAliasPermission({
  "AliasId": null,
  "ConnectionAliasPermission": null
}, context)
```

#### Input
* input `object`
  * AliasId **required**
  * ConnectionAliasPermission **required**
    * AllowAssociation **required**
    * SharedAccountId **required**

#### Output
* output [UpdateConnectionAliasPermissionResult](#updateconnectionaliaspermissionresult)

### UpdateRulesOfIpGroup



```js
amazonaws_workspaces.UpdateRulesOfIpGroup({
  "GroupId": null,
  "UserRules": null
}, context)
```

#### Input
* input `object`
  * GroupId **required**
  * UserRules **required**
    * items [IpRuleItem](#ipruleitem)

#### Output
* output [UpdateRulesOfIpGroupResult](#updaterulesofipgroupresult)

### UpdateWorkspaceImagePermission



```js
amazonaws_workspaces.UpdateWorkspaceImagePermission({
  "ImageId": null,
  "AllowCopyImage": null,
  "SharedAccountId": null
}, context)
```

#### Input
* input `object`
  * AllowCopyImage **required**
  * ImageId **required**
  * SharedAccountId **required**

#### Output
* output [UpdateWorkspaceImagePermissionResult](#updateworkspaceimagepermissionresult)



## Definitions

### ARN
* ARN `string`

### AccessDeniedException


### AccessPropertyValue
* AccessPropertyValue `string` (values: ALLOW, DENY)

### AccountModification
* AccountModification `object`: Describes a modification to the configuration of Bring Your Own License (BYOL) for the specified account. 
  * DedicatedTenancyManagementCidrRange
  * DedicatedTenancySupport
  * ErrorCode
  * ErrorMessage
  * ModificationState
  * StartTime

### AccountModificationList
* AccountModificationList `array`
  * items [AccountModification](#accountmodification)

### Alias
* Alias `string`

### Application
* Application `string` (values: Microsoft_Office_2016, Microsoft_Office_2019)

### ApplicationList
* ApplicationList `array`
  * items [Application](#application)

### AssociateConnectionAliasRequest
* AssociateConnectionAliasRequest `object`
  * AliasId **required**
  * ResourceId **required**

### AssociateConnectionAliasResult
* AssociateConnectionAliasResult `object`
  * ConnectionIdentifier

### AssociateIpGroupsRequest
* AssociateIpGroupsRequest `object`
  * DirectoryId **required**
  * GroupIds **required**
    * items [IpGroupId](#ipgroupid)

### AssociateIpGroupsResult
* AssociateIpGroupsResult `object`

### AssociationStatus
* AssociationStatus `string` (values: NOT_ASSOCIATED, ASSOCIATED_WITH_OWNER_ACCOUNT, ASSOCIATED_WITH_SHARED_ACCOUNT, PENDING_ASSOCIATION, PENDING_DISASSOCIATION)

### AuthorizeIpRulesRequest
* AuthorizeIpRulesRequest `object`
  * GroupId **required**
  * UserRules **required**
    * items [IpRuleItem](#ipruleitem)

### AuthorizeIpRulesResult
* AuthorizeIpRulesResult `object`

### AwsAccount
* AwsAccount `string`

### BooleanObject
* BooleanObject `boolean`

### BundleId
* BundleId `string`

### BundleIdList
* BundleIdList `array`
  * items [BundleId](#bundleid)

### BundleList
* BundleList `array`
  * items [WorkspaceBundle](#workspacebundle)

### BundleOwner
* BundleOwner `string`

### ClientProperties
* ClientProperties `object`: Describes an Amazon WorkSpaces client.
  * ReconnectEnabled

### ClientPropertiesList
* ClientPropertiesList `array`
  * items [ClientPropertiesResult](#clientpropertiesresult)

### ClientPropertiesResult
* ClientPropertiesResult `object`: Information about the Amazon WorkSpaces client.
  * ClientProperties
    * ReconnectEnabled
  * ResourceId

### Compute
* Compute `string` (values: VALUE, STANDARD, PERFORMANCE, POWER, GRAPHICS, POWERPRO, GRAPHICSPRO)

### ComputeType
* ComputeType `object`: Describes the compute type.
  * Name

### ComputerName
* ComputerName `string`

### ConnectionAlias
* ConnectionAlias `object`: Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
  * AliasId
  * Associations
    * items [ConnectionAliasAssociation](#connectionaliasassociation)
  * ConnectionString
  * OwnerAccountId
  * State

### ConnectionAliasAssociation
* ConnectionAliasAssociation `object`: Describes a connection alias association that is used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
  * AssociatedAccountId
  * AssociationStatus
  * ConnectionIdentifier
  * ResourceId

### ConnectionAliasAssociationList
* ConnectionAliasAssociationList `array`
  * items [ConnectionAliasAssociation](#connectionaliasassociation)

### ConnectionAliasId
* ConnectionAliasId `string`

### ConnectionAliasIdList
* ConnectionAliasIdList `array`
  * items [ConnectionAliasId](#connectionaliasid)

### ConnectionAliasList
* ConnectionAliasList `array`
  * items [ConnectionAlias](#connectionalias)

### ConnectionAliasPermission
* ConnectionAliasPermission `object`: Describes the permissions for a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
  * AllowAssociation **required**
  * SharedAccountId **required**

### ConnectionAliasPermissions
* ConnectionAliasPermissions `array`
  * items [ConnectionAliasPermission](#connectionaliaspermission)

### ConnectionAliasState
* ConnectionAliasState `string` (values: CREATING, CREATED, DELETING)

### ConnectionIdentifier
* ConnectionIdentifier `string`

### ConnectionState
* ConnectionState `string` (values: CONNECTED, DISCONNECTED, UNKNOWN)

### ConnectionString
* ConnectionString `string`

### CopyWorkspaceImageRequest
* CopyWorkspaceImageRequest `object`
  * Description
  * Name **required**
  * SourceImageId **required**
  * SourceRegion **required**
  * Tags
    * items [Tag](#tag)

### CopyWorkspaceImageResult
* CopyWorkspaceImageResult `object`
  * ImageId

### CreateConnectionAliasRequest
* CreateConnectionAliasRequest `object`
  * ConnectionString **required**
  * Tags
    * items [Tag](#tag)

### CreateConnectionAliasResult
* CreateConnectionAliasResult `object`
  * AliasId

### CreateIpGroupRequest
* CreateIpGroupRequest `object`
  * GroupDesc
  * GroupName **required**
  * Tags
    * items [Tag](#tag)
  * UserRules
    * items [IpRuleItem](#ipruleitem)

### CreateIpGroupResult
* CreateIpGroupResult `object`
  * GroupId

### CreateTagsRequest
* CreateTagsRequest `object`
  * ResourceId **required**
  * Tags **required**
    * items [Tag](#tag)

### CreateTagsResult
* CreateTagsResult `object`

### CreateWorkspacesRequest
* CreateWorkspacesRequest `object`
  * Workspaces **required**
    * items [WorkspaceRequest](#workspacerequest)

### CreateWorkspacesResult
* CreateWorkspacesResult `object`
  * FailedRequests
    * items [FailedCreateWorkspaceRequest](#failedcreateworkspacerequest)
  * PendingRequests
    * items [Workspace](#workspace)

### DedicatedTenancyCidrRangeList
* DedicatedTenancyCidrRangeList `array`
  * items [DedicatedTenancyManagementCidrRange](#dedicatedtenancymanagementcidrrange)

### DedicatedTenancyManagementCidrRange
* DedicatedTenancyManagementCidrRange `string`

### DedicatedTenancyModificationStateEnum
* DedicatedTenancyModificationStateEnum `string` (values: PENDING, COMPLETED, FAILED)

### DedicatedTenancySupportEnum
* DedicatedTenancySupportEnum `string` (values: ENABLED)

### DedicatedTenancySupportResultEnum
* DedicatedTenancySupportResultEnum `string` (values: ENABLED, DISABLED)

### DefaultOu
* DefaultOu `string`

### DefaultWorkspaceCreationProperties
* DefaultWorkspaceCreationProperties `object`: Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.
  * CustomSecurityGroupId
  * DefaultOu
  * EnableInternetAccess
  * EnableMaintenanceMode
  * EnableWorkDocs
  * UserEnabledAsLocalAdministrator

### DeleteConnectionAliasRequest
* DeleteConnectionAliasRequest `object`
  * AliasId **required**

### DeleteConnectionAliasResult
* DeleteConnectionAliasResult `object`

### DeleteIpGroupRequest
* DeleteIpGroupRequest `object`
  * GroupId **required**

### DeleteIpGroupResult
* DeleteIpGroupResult `object`

### DeleteTagsRequest
* DeleteTagsRequest `object`
  * ResourceId **required**
  * TagKeys **required**
    * items [NonEmptyString](#nonemptystring)

### DeleteTagsResult
* DeleteTagsResult `object`

### DeleteWorkspaceImageRequest
* DeleteWorkspaceImageRequest `object`
  * ImageId **required**

### DeleteWorkspaceImageResult
* DeleteWorkspaceImageResult `object`

### DeregisterWorkspaceDirectoryRequest
* DeregisterWorkspaceDirectoryRequest `object`
  * DirectoryId **required**

### DeregisterWorkspaceDirectoryResult
* DeregisterWorkspaceDirectoryResult `object`

### DescribeAccountModificationsRequest
* DescribeAccountModificationsRequest `object`
  * NextToken

### DescribeAccountModificationsResult
* DescribeAccountModificationsResult `object`
  * AccountModifications
    * items [AccountModification](#accountmodification)
  * NextToken

### DescribeAccountRequest
* DescribeAccountRequest `object`

### DescribeAccountResult
* DescribeAccountResult `object`
  * DedicatedTenancyManagementCidrRange
  * DedicatedTenancySupport

### DescribeClientPropertiesRequest
* DescribeClientPropertiesRequest `object`
  * ResourceIds **required**
    * items [NonEmptyString](#nonemptystring)

### DescribeClientPropertiesResult
* DescribeClientPropertiesResult `object`
  * ClientPropertiesList
    * items [ClientPropertiesResult](#clientpropertiesresult)

### DescribeConnectionAliasPermissionsRequest
* DescribeConnectionAliasPermissionsRequest `object`
  * AliasId **required**
  * MaxResults
  * NextToken

### DescribeConnectionAliasPermissionsResult
* DescribeConnectionAliasPermissionsResult `object`
  * AliasId
  * ConnectionAliasPermissions
    * items [ConnectionAliasPermission](#connectionaliaspermission)
  * NextToken

### DescribeConnectionAliasesRequest
* DescribeConnectionAliasesRequest `object`
  * AliasIds
    * items [ConnectionAliasId](#connectionaliasid)
  * Limit
  * NextToken
  * ResourceId

### DescribeConnectionAliasesResult
* DescribeConnectionAliasesResult `object`
  * ConnectionAliases
    * items [ConnectionAlias](#connectionalias)
  * NextToken

### DescribeIpGroupsRequest
* DescribeIpGroupsRequest `object`
  * GroupIds
    * items [IpGroupId](#ipgroupid)
  * MaxResults
  * NextToken

### DescribeIpGroupsResult
* DescribeIpGroupsResult `object`
  * NextToken
  * Result
    * items [WorkspacesIpGroup](#workspacesipgroup)

### DescribeTagsRequest
* DescribeTagsRequest `object`
  * ResourceId **required**

### DescribeTagsResult
* DescribeTagsResult `object`
  * TagList
    * items [Tag](#tag)

### DescribeWorkspaceBundlesRequest
* DescribeWorkspaceBundlesRequest `object`
  * BundleIds
    * items [BundleId](#bundleid)
  * NextToken
  * Owner

### DescribeWorkspaceBundlesResult
* DescribeWorkspaceBundlesResult `object`
  * Bundles
    * items [WorkspaceBundle](#workspacebundle)
  * NextToken

### DescribeWorkspaceDirectoriesRequest
* DescribeWorkspaceDirectoriesRequest `object`
  * DirectoryIds
    * items [DirectoryId](#directoryid)
  * Limit
  * NextToken

### DescribeWorkspaceDirectoriesResult
* DescribeWorkspaceDirectoriesResult `object`
  * Directories
    * items [WorkspaceDirectory](#workspacedirectory)
  * NextToken

### DescribeWorkspaceImagePermissionsRequest
* DescribeWorkspaceImagePermissionsRequest `object`
  * ImageId **required**
  * MaxResults
  * NextToken

### DescribeWorkspaceImagePermissionsResult
* DescribeWorkspaceImagePermissionsResult `object`
  * ImageId
  * ImagePermissions
    * items [ImagePermission](#imagepermission)
  * NextToken

### DescribeWorkspaceImagesRequest
* DescribeWorkspaceImagesRequest `object`
  * ImageIds
    * items [WorkspaceImageId](#workspaceimageid)
  * ImageType
  * MaxResults
  * NextToken

### DescribeWorkspaceImagesResult
* DescribeWorkspaceImagesResult `object`
  * Images
    * items [WorkspaceImage](#workspaceimage)
  * NextToken

### DescribeWorkspaceSnapshotsRequest
* DescribeWorkspaceSnapshotsRequest `object`
  * WorkspaceId **required**

### DescribeWorkspaceSnapshotsResult
* DescribeWorkspaceSnapshotsResult `object`
  * RebuildSnapshots
    * items [Snapshot](#snapshot)
  * RestoreSnapshots
    * items [Snapshot](#snapshot)

### DescribeWorkspacesConnectionStatusRequest
* DescribeWorkspacesConnectionStatusRequest `object`
  * NextToken
  * WorkspaceIds
    * items [WorkspaceId](#workspaceid)

### DescribeWorkspacesConnectionStatusResult
* DescribeWorkspacesConnectionStatusResult `object`
  * NextToken
  * WorkspacesConnectionStatus
    * items [WorkspaceConnectionStatus](#workspaceconnectionstatus)

### DescribeWorkspacesRequest
* DescribeWorkspacesRequest `object`
  * BundleId
  * DirectoryId
  * Limit
  * NextToken
  * UserName
  * WorkspaceIds
    * items [WorkspaceId](#workspaceid)

### DescribeWorkspacesResult
* DescribeWorkspacesResult `object`
  * NextToken
  * Workspaces
    * items [Workspace](#workspace)

### Description
* Description `string`

### DirectoryId
* DirectoryId `string`

### DirectoryIdList
* DirectoryIdList `array`
  * items [DirectoryId](#directoryid)

### DirectoryList
* DirectoryList `array`
  * items [WorkspaceDirectory](#workspacedirectory)

### DirectoryName
* DirectoryName `string`

### DisassociateConnectionAliasRequest
* DisassociateConnectionAliasRequest `object`
  * AliasId **required**

### DisassociateConnectionAliasResult
* DisassociateConnectionAliasResult `object`

### DisassociateIpGroupsRequest
* DisassociateIpGroupsRequest `object`
  * DirectoryId **required**
  * GroupIds **required**
    * items [IpGroupId](#ipgroupid)

### DisassociateIpGroupsResult
* DisassociateIpGroupsResult `object`

### DnsIpAddresses
* DnsIpAddresses `array`
  * items [IpAddress](#ipaddress)

### Ec2ImageId
* Ec2ImageId `string`

### ErrorType
* ErrorType `string`

### FailedCreateWorkspaceRequest
* FailedCreateWorkspaceRequest `object`: Describes a WorkSpace that cannot be created.
  * ErrorCode
  * ErrorMessage
  * WorkspaceRequest
    * BundleId **required**
    * DirectoryId **required**
    * RootVolumeEncryptionEnabled
    * Tags
      * items [Tag](#tag)
    * UserName **required**
    * UserVolumeEncryptionEnabled
    * VolumeEncryptionKey
    * WorkspaceProperties
      * ComputeTypeName
      * RootVolumeSizeGib
      * RunningMode
      * RunningModeAutoStopTimeoutInMinutes
      * UserVolumeSizeGib

### FailedCreateWorkspaceRequests
* FailedCreateWorkspaceRequests `array`
  * items [FailedCreateWorkspaceRequest](#failedcreateworkspacerequest)

### FailedRebootWorkspaceRequests
* FailedRebootWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedRebuildWorkspaceRequests
* FailedRebuildWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedStartWorkspaceRequests
* FailedStartWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedStopWorkspaceRequests
* FailedStopWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedTerminateWorkspaceRequests
* FailedTerminateWorkspaceRequests `array`
  * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### FailedWorkspaceChangeRequest
* FailedWorkspaceChangeRequest `object`: Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).
  * ErrorCode
  * ErrorMessage
  * WorkspaceId

### ImagePermission
* ImagePermission `object`: Describes the AWS accounts that have been granted permission to use a shared image. For more information about sharing images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/share-custom-image.html"> Share or Unshare a Custom WorkSpaces Image</a>.
  * SharedAccountId

### ImagePermissions
* ImagePermissions `array`
  * items [ImagePermission](#imagepermission)

### ImageType
* ImageType `string` (values: OWNED, SHARED)

### ImportWorkspaceImageRequest
* ImportWorkspaceImageRequest `object`
  * Applications
    * items [Application](#application)
  * Ec2ImageId **required**
  * ImageDescription **required**
  * ImageName **required**
  * IngestionProcess **required**
  * Tags
    * items [Tag](#tag)

### ImportWorkspaceImageResult
* ImportWorkspaceImageResult `object`
  * ImageId

### InvalidParameterValuesException


### InvalidResourceStateException


### IpAddress
* IpAddress `string`

### IpGroupDesc
* IpGroupDesc `string`

### IpGroupId
* IpGroupId `string`

### IpGroupIdList
* IpGroupIdList `array`
  * items [IpGroupId](#ipgroupid)

### IpGroupName
* IpGroupName `string`

### IpRevokedRuleList
* IpRevokedRuleList `array`
  * items [IpRule](#iprule)

### IpRule
* IpRule `string`

### IpRuleDesc
* IpRuleDesc `string`

### IpRuleItem
* IpRuleItem `object`: Describes a rule for an IP access control group.
  * ipRule
  * ruleDesc

### IpRuleList
* IpRuleList `array`
  * items [IpRuleItem](#ipruleitem)

### Limit
* Limit `integer`

### ListAvailableManagementCidrRangesRequest
* ListAvailableManagementCidrRangesRequest `object`
  * ManagementCidrRangeConstraint **required**
  * MaxResults
  * NextToken

### ListAvailableManagementCidrRangesResult
* ListAvailableManagementCidrRangesResult `object`
  * ManagementCidrRanges
    * items [DedicatedTenancyManagementCidrRange](#dedicatedtenancymanagementcidrrange)
  * NextToken

### ManagementCidrRangeConstraint
* ManagementCidrRangeConstraint `string`

### ManagementCidrRangeMaxResults
* ManagementCidrRangeMaxResults `integer`

### MigrateWorkspaceRequest
* MigrateWorkspaceRequest `object`
  * BundleId **required**
  * SourceWorkspaceId **required**

### MigrateWorkspaceResult
* MigrateWorkspaceResult `object`
  * SourceWorkspaceId
  * TargetWorkspaceId

### ModificationResourceEnum
* ModificationResourceEnum `string` (values: ROOT_VOLUME, USER_VOLUME, COMPUTE_TYPE)

### ModificationState
* ModificationState `object`: Describes a WorkSpace modification.
  * Resource
  * State

### ModificationStateEnum
* ModificationStateEnum `string` (values: UPDATE_INITIATED, UPDATE_IN_PROGRESS)

### ModificationStateList
* ModificationStateList `array`
  * items [ModificationState](#modificationstate)

### ModifyAccountRequest
* ModifyAccountRequest `object`
  * DedicatedTenancyManagementCidrRange
  * DedicatedTenancySupport

### ModifyAccountResult
* ModifyAccountResult `object`

### ModifyClientPropertiesRequest
* ModifyClientPropertiesRequest `object`
  * ClientProperties **required**
    * ReconnectEnabled
  * ResourceId **required**

### ModifyClientPropertiesResult
* ModifyClientPropertiesResult `object`

### ModifySelfservicePermissionsRequest
* ModifySelfservicePermissionsRequest `object`
  * ResourceId **required**
  * SelfservicePermissions **required**
    * ChangeComputeType
    * IncreaseVolumeSize
    * RebuildWorkspace
    * RestartWorkspace
    * SwitchRunningMode

### ModifySelfservicePermissionsResult
* ModifySelfservicePermissionsResult `object`

### ModifyWorkspaceAccessPropertiesRequest
* ModifyWorkspaceAccessPropertiesRequest `object`
  * ResourceId **required**
  * WorkspaceAccessProperties **required**
    * DeviceTypeAndroid
    * DeviceTypeChromeOs
    * DeviceTypeIos
    * DeviceTypeOsx
    * DeviceTypeWeb
    * DeviceTypeWindows
    * DeviceTypeZeroClient

### ModifyWorkspaceAccessPropertiesResult
* ModifyWorkspaceAccessPropertiesResult `object`

### ModifyWorkspaceCreationPropertiesRequest
* ModifyWorkspaceCreationPropertiesRequest `object`
  * ResourceId **required**
  * WorkspaceCreationProperties **required**
    * CustomSecurityGroupId
    * DefaultOu
    * EnableInternetAccess
    * EnableMaintenanceMode
    * EnableWorkDocs
    * UserEnabledAsLocalAdministrator

### ModifyWorkspaceCreationPropertiesResult
* ModifyWorkspaceCreationPropertiesResult `object`

### ModifyWorkspacePropertiesRequest
* ModifyWorkspacePropertiesRequest `object`
  * WorkspaceId **required**
  * WorkspaceProperties **required**
    * ComputeTypeName
    * RootVolumeSizeGib
    * RunningMode
    * RunningModeAutoStopTimeoutInMinutes
    * UserVolumeSizeGib

### ModifyWorkspacePropertiesResult
* ModifyWorkspacePropertiesResult `object`

### ModifyWorkspaceStateRequest
* ModifyWorkspaceStateRequest `object`
  * WorkspaceId **required**
  * WorkspaceState **required**

### ModifyWorkspaceStateResult
* ModifyWorkspaceStateResult `object`

### NonEmptyString
* NonEmptyString `string`

### OperatingSystem
* OperatingSystem `object`: The operating system that the image is running.
  * Type

### OperatingSystemType
* OperatingSystemType `string` (values: WINDOWS, LINUX)

### OperationInProgressException


### OperationNotSupportedException


### PaginationToken
* PaginationToken `string`

### RebootRequest
* RebootRequest `object`: Describes the information used to reboot a WorkSpace.
  * WorkspaceId **required**

### RebootWorkspaceRequests
* RebootWorkspaceRequests `array`
  * items [RebootRequest](#rebootrequest)

### RebootWorkspacesRequest
* RebootWorkspacesRequest `object`
  * RebootWorkspaceRequests **required**
    * items [RebootRequest](#rebootrequest)

### RebootWorkspacesResult
* RebootWorkspacesResult `object`
  * FailedRequests
    * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### RebuildRequest
* RebuildRequest `object`: Describes the information used to rebuild a WorkSpace.
  * WorkspaceId **required**

### RebuildWorkspaceRequests
* RebuildWorkspaceRequests `array`
  * items [RebuildRequest](#rebuildrequest)

### RebuildWorkspacesRequest
* RebuildWorkspacesRequest `object`
  * RebuildWorkspaceRequests **required**
    * items [RebuildRequest](#rebuildrequest)

### RebuildWorkspacesResult
* RebuildWorkspacesResult `object`
  * FailedRequests
    * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### ReconnectEnum
* ReconnectEnum `string` (values: ENABLED, DISABLED)

### Region
* Region `string`

### RegisterWorkspaceDirectoryRequest
* RegisterWorkspaceDirectoryRequest `object`
  * DirectoryId **required**
  * EnableSelfService
  * EnableWorkDocs **required**
  * SubnetIds
    * items [SubnetId](#subnetid)
  * Tags
    * items [Tag](#tag)
  * Tenancy

### RegisterWorkspaceDirectoryResult
* RegisterWorkspaceDirectoryResult `object`

### RegistrationCode
* RegistrationCode `string`

### ResourceAlreadyExistsException


### ResourceAssociatedException


### ResourceCreationFailedException


### ResourceIdList
* ResourceIdList `array`
  * items [NonEmptyString](#nonemptystring)

### ResourceLimitExceededException


### ResourceNotFoundException


### ResourceUnavailableException


### RestoreWorkspaceRequest
* RestoreWorkspaceRequest `object`
  * WorkspaceId **required**

### RestoreWorkspaceResult
* RestoreWorkspaceResult `object`

### RevokeIpRulesRequest
* RevokeIpRulesRequest `object`
  * GroupId **required**
  * UserRules **required**
    * items [IpRule](#iprule)

### RevokeIpRulesResult
* RevokeIpRulesResult `object`

### RootStorage
* RootStorage `object`: Describes the root volume for a WorkSpace bundle.
  * Capacity

### RootVolumeSizeGib
* RootVolumeSizeGib `integer`

### RunningMode
* RunningMode `string` (values: AUTO_STOP, ALWAYS_ON)

### RunningModeAutoStopTimeoutInMinutes
* RunningModeAutoStopTimeoutInMinutes `integer`

### SecurityGroupId
* SecurityGroupId `string`

### SelfservicePermissions
* SelfservicePermissions `object`: Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
  * ChangeComputeType
  * IncreaseVolumeSize
  * RebuildWorkspace
  * RestartWorkspace
  * SwitchRunningMode

### Snapshot
* Snapshot `object`: Describes a snapshot.
  * SnapshotTime

### SnapshotList
* SnapshotList `array`
  * items [Snapshot](#snapshot)

### StartRequest
* StartRequest `object`: Information used to start a WorkSpace.
  * WorkspaceId

### StartWorkspaceRequests
* StartWorkspaceRequests `array`
  * items [StartRequest](#startrequest)

### StartWorkspacesRequest
* StartWorkspacesRequest `object`
  * StartWorkspaceRequests **required**
    * items [StartRequest](#startrequest)

### StartWorkspacesResult
* StartWorkspacesResult `object`
  * FailedRequests
    * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### StopRequest
* StopRequest `object`: Describes the information used to stop a WorkSpace.
  * WorkspaceId

### StopWorkspaceRequests
* StopWorkspaceRequests `array`
  * items [StopRequest](#stoprequest)

### StopWorkspacesRequest
* StopWorkspacesRequest `object`
  * StopWorkspaceRequests **required**
    * items [StopRequest](#stoprequest)

### StopWorkspacesResult
* StopWorkspacesResult `object`
  * FailedRequests
    * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### SubnetId
* SubnetId `string`

### SubnetIds
* SubnetIds `array`
  * items [SubnetId](#subnetid)

### Tag
* Tag `object`: Describes a tag.
  * Key **required**
  * Value

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [NonEmptyString](#nonemptystring)

### TagList
* TagList `array`
  * items [Tag](#tag)

### TagValue
* TagValue `string`

### TargetWorkspaceState
* TargetWorkspaceState `string` (values: AVAILABLE, ADMIN_MAINTENANCE)

### Tenancy
* Tenancy `string` (values: DEDICATED, SHARED)

### TerminateRequest
* TerminateRequest `object`: Describes the information used to terminate a WorkSpace.
  * WorkspaceId **required**

### TerminateWorkspaceRequests
* TerminateWorkspaceRequests `array`
  * items [TerminateRequest](#terminaterequest)

### TerminateWorkspacesRequest
* TerminateWorkspacesRequest `object`
  * TerminateWorkspaceRequests **required**
    * items [TerminateRequest](#terminaterequest)

### TerminateWorkspacesResult
* TerminateWorkspacesResult `object`
  * FailedRequests
    * items [FailedWorkspaceChangeRequest](#failedworkspacechangerequest)

### Timestamp
* Timestamp `string`

### UnsupportedNetworkConfigurationException


### UnsupportedWorkspaceConfigurationException


### UpdateConnectionAliasPermissionRequest
* UpdateConnectionAliasPermissionRequest `object`
  * AliasId **required**
  * ConnectionAliasPermission **required**
    * AllowAssociation **required**
    * SharedAccountId **required**

### UpdateConnectionAliasPermissionResult
* UpdateConnectionAliasPermissionResult `object`

### UpdateRulesOfIpGroupRequest
* UpdateRulesOfIpGroupRequest `object`
  * GroupId **required**
  * UserRules **required**
    * items [IpRuleItem](#ipruleitem)

### UpdateRulesOfIpGroupResult
* UpdateRulesOfIpGroupResult `object`

### UpdateWorkspaceImagePermissionRequest
* UpdateWorkspaceImagePermissionRequest `object`
  * AllowCopyImage **required**
  * ImageId **required**
  * SharedAccountId **required**

### UpdateWorkspaceImagePermissionResult
* UpdateWorkspaceImagePermissionResult `object`

### UserName
* UserName `string`

### UserStorage
* UserStorage `object`: Describes the user storage for a WorkSpace bundle.
  * Capacity

### UserVolumeSizeGib
* UserVolumeSizeGib `integer`

### VolumeEncryptionKey
* VolumeEncryptionKey `string`

### Workspace
* Workspace `object`: Describes a WorkSpace.
  * BundleId
  * ComputerName
  * DirectoryId
  * ErrorCode
  * ErrorMessage
  * IpAddress
  * ModificationStates
    * items [ModificationState](#modificationstate)
  * RootVolumeEncryptionEnabled
  * State
  * SubnetId
  * UserName
  * UserVolumeEncryptionEnabled
  * VolumeEncryptionKey
  * WorkspaceId
  * WorkspaceProperties
    * ComputeTypeName
    * RootVolumeSizeGib
    * RunningMode
    * RunningModeAutoStopTimeoutInMinutes
    * UserVolumeSizeGib

### WorkspaceAccessProperties
* WorkspaceAccessProperties `object`: The device types and operating systems that can be used to access a WorkSpace. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-network-requirements.html">Amazon WorkSpaces Client Network Requirements</a>.
  * DeviceTypeAndroid
  * DeviceTypeChromeOs
  * DeviceTypeIos
  * DeviceTypeOsx
  * DeviceTypeWeb
  * DeviceTypeWindows
  * DeviceTypeZeroClient

### WorkspaceBundle
* WorkspaceBundle `object`: Describes a WorkSpace bundle.
  * BundleId
  * ComputeType
    * Name
  * Description
  * ImageId
  * LastUpdatedTime
  * Name
  * Owner
  * RootStorage
    * Capacity
  * UserStorage
    * Capacity

### WorkspaceConnectionStatus
* WorkspaceConnectionStatus `object`: Describes the connection status of a WorkSpace.
  * ConnectionState
  * ConnectionStateCheckTimestamp
  * LastKnownUserConnectionTimestamp
  * WorkspaceId

### WorkspaceConnectionStatusList
* WorkspaceConnectionStatusList `array`
  * items [WorkspaceConnectionStatus](#workspaceconnectionstatus)

### WorkspaceCreationProperties
* WorkspaceCreationProperties `object`: Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>. 
  * CustomSecurityGroupId
  * DefaultOu
  * EnableInternetAccess
  * EnableMaintenanceMode
  * EnableWorkDocs
  * UserEnabledAsLocalAdministrator

### WorkspaceDirectory
* WorkspaceDirectory `object`: Describes a directory that is used with Amazon WorkSpaces.
  * Alias
  * CustomerUserName
  * DirectoryId
  * DirectoryName
  * DirectoryType
  * DnsIpAddresses
    * items [IpAddress](#ipaddress)
  * IamRoleId
  * RegistrationCode
  * SelfservicePermissions
    * ChangeComputeType
    * IncreaseVolumeSize
    * RebuildWorkspace
    * RestartWorkspace
    * SwitchRunningMode
  * State
  * SubnetIds
    * items [SubnetId](#subnetid)
  * Tenancy
  * WorkspaceAccessProperties
    * DeviceTypeAndroid
    * DeviceTypeChromeOs
    * DeviceTypeIos
    * DeviceTypeOsx
    * DeviceTypeWeb
    * DeviceTypeWindows
    * DeviceTypeZeroClient
  * WorkspaceCreationProperties
    * CustomSecurityGroupId
    * DefaultOu
    * EnableInternetAccess
    * EnableMaintenanceMode
    * EnableWorkDocs
    * UserEnabledAsLocalAdministrator
  * WorkspaceSecurityGroupId
  * ipGroupIds
    * items [IpGroupId](#ipgroupid)

### WorkspaceDirectoryState
* WorkspaceDirectoryState `string` (values: REGISTERING, REGISTERED, DEREGISTERING, DEREGISTERED, ERROR)

### WorkspaceDirectoryType
* WorkspaceDirectoryType `string` (values: SIMPLE_AD, AD_CONNECTOR)

### WorkspaceErrorCode
* WorkspaceErrorCode `string`

### WorkspaceId
* WorkspaceId `string`

### WorkspaceIdList
* WorkspaceIdList `array`
  * items [WorkspaceId](#workspaceid)

### WorkspaceImage
* WorkspaceImage `object`: Describes a WorkSpace image.
  * Created
  * Description
  * ErrorCode
  * ErrorMessage
  * ImageId
  * Name
  * OperatingSystem
    * Type
  * OwnerAccountId
  * RequiredTenancy
  * State

### WorkspaceImageDescription
* WorkspaceImageDescription `string`

### WorkspaceImageErrorCode
* WorkspaceImageErrorCode `string`

### WorkspaceImageId
* WorkspaceImageId `string`

### WorkspaceImageIdList
* WorkspaceImageIdList `array`
  * items [WorkspaceImageId](#workspaceimageid)

### WorkspaceImageIngestionProcess
* WorkspaceImageIngestionProcess `string` (values: BYOL_REGULAR, BYOL_GRAPHICS, BYOL_GRAPHICSPRO, BYOL_REGULAR_WSP)

### WorkspaceImageList
* WorkspaceImageList `array`
  * items [WorkspaceImage](#workspaceimage)

### WorkspaceImageName
* WorkspaceImageName `string`

### WorkspaceImageRequiredTenancy
* WorkspaceImageRequiredTenancy `string` (values: DEFAULT, DEDICATED)

### WorkspaceImageState
* WorkspaceImageState `string` (values: AVAILABLE, PENDING, ERROR)

### WorkspaceList
* WorkspaceList `array`
  * items [Workspace](#workspace)

### WorkspaceProperties
* WorkspaceProperties `object`: Describes a WorkSpace.
  * ComputeTypeName
  * RootVolumeSizeGib
  * RunningMode
  * RunningModeAutoStopTimeoutInMinutes
  * UserVolumeSizeGib

### WorkspaceRequest
* WorkspaceRequest `object`: Describes the information used to create a WorkSpace.
  * BundleId **required**
  * DirectoryId **required**
  * RootVolumeEncryptionEnabled
  * Tags
    * items [Tag](#tag)
  * UserName **required**
  * UserVolumeEncryptionEnabled
  * VolumeEncryptionKey
  * WorkspaceProperties
    * ComputeTypeName
    * RootVolumeSizeGib
    * RunningMode
    * RunningModeAutoStopTimeoutInMinutes
    * UserVolumeSizeGib

### WorkspaceRequestList
* WorkspaceRequestList `array`
  * items [WorkspaceRequest](#workspacerequest)

### WorkspaceState
* WorkspaceState `string` (values: PENDING, AVAILABLE, IMPAIRED, UNHEALTHY, REBOOTING, STARTING, REBUILDING, RESTORING, MAINTENANCE, ADMIN_MAINTENANCE, TERMINATING, TERMINATED, SUSPENDED, UPDATING, STOPPING, STOPPED, ERROR)

### WorkspacesDefaultRoleNotFoundException


### WorkspacesIpGroup
* WorkspacesIpGroup `object`: Describes an IP access control group.
  * groupDesc
  * groupId
  * groupName
  * userRules
    * items [IpRuleItem](#ipruleitem)

### WorkspacesIpGroupsList
* WorkspacesIpGroupsList `array`
  * items [WorkspacesIpGroup](#workspacesipgroup)


