# @datafire/amazonaws_appstream2

Client library for Amazon AppStream

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_appstream2
```
```js
let amazonaws_appstream2 = require('@datafire/amazonaws_appstream2').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_appstream2.AssociateFleet({
  "FleetName": "",
  "StackName": ""
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon AppStream 2.0</fullname> <p>You can use Amazon AppStream 2.0 to stream desktop applications to any device running a web browser, without rewriting them.</p>

## Actions

### AssociateFleet



```js
amazonaws_appstream2.AssociateFleet({
  "FleetName": "",
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * FleetName **required** [String](#string)
  * StackName **required** [String](#string)

#### Output
* output [AssociateFleetResult](#associatefleetresult)

### CopyImage



```js
amazonaws_appstream2.CopyImage({
  "SourceImageName": "",
  "DestinationImageName": "",
  "DestinationRegion": ""
}, context)
```

#### Input
* input `object`
  * DestinationImageDescription [Description](#description)
  * DestinationImageName **required** [Name](#name)
  * DestinationRegion **required** [RegionName](#regionname)
  * SourceImageName **required** [Name](#name)

#### Output
* output [CopyImageResponse](#copyimageresponse)

### CreateDirectoryConfig



```js
amazonaws_appstream2.CreateDirectoryConfig({
  "DirectoryName": "",
  "OrganizationalUnitDistinguishedNames": [],
  "ServiceAccountCredentials": {
    "AccountName": "",
    "AccountPassword": ""
  }
}, context)
```

#### Input
* input `object`
  * DirectoryName **required** [DirectoryName](#directoryname)
  * OrganizationalUnitDistinguishedNames **required** [OrganizationalUnitDistinguishedNamesList](#organizationalunitdistinguishednameslist)
  * ServiceAccountCredentials **required** [ServiceAccountCredentials](#serviceaccountcredentials)

#### Output
* output [CreateDirectoryConfigResult](#createdirectoryconfigresult)

### CreateFleet



```js
amazonaws_appstream2.CreateFleet({
  "Name": "",
  "ImageName": "",
  "InstanceType": "",
  "ComputeCapacity": {
    "DesiredInstances": 0
  }
}, context)
```

#### Input
* input `object`
  * ComputeCapacity **required** [ComputeCapacity](#computecapacity)
  * Description [Description](#description)
  * DisconnectTimeoutInSeconds [Integer](#integer)
  * DisplayName [DisplayName](#displayname)
  * DomainJoinInfo [DomainJoinInfo](#domainjoininfo)
  * EnableDefaultInternetAccess [BooleanObject](#booleanobject)
  * FleetType [FleetType](#fleettype)
  * ImageName **required** [String](#string)
  * InstanceType **required** [String](#string)
  * MaxUserDurationInSeconds [Integer](#integer)
  * Name **required** [Name](#name)
  * VpcConfig [VpcConfig](#vpcconfig)

#### Output
* output [CreateFleetResult](#createfleetresult)

### CreateImageBuilder



```js
amazonaws_appstream2.CreateImageBuilder({
  "Name": "",
  "ImageName": "",
  "InstanceType": ""
}, context)
```

#### Input
* input `object`
  * AppstreamAgentVersion [AppstreamAgentVersion](#appstreamagentversion)
  * Description [Description](#description)
  * DisplayName [DisplayName](#displayname)
  * DomainJoinInfo [DomainJoinInfo](#domainjoininfo)
  * EnableDefaultInternetAccess [BooleanObject](#booleanobject)
  * ImageName **required** [String](#string)
  * InstanceType **required** [String](#string)
  * Name **required** [Name](#name)
  * VpcConfig [VpcConfig](#vpcconfig)

#### Output
* output [CreateImageBuilderResult](#createimagebuilderresult)

### CreateImageBuilderStreamingURL



```js
amazonaws_appstream2.CreateImageBuilderStreamingURL({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [String](#string)
  * Validity [Long](#long)

#### Output
* output [CreateImageBuilderStreamingURLResult](#createimagebuilderstreamingurlresult)

### CreateStack



```js
amazonaws_appstream2.CreateStack({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Description [Description](#description)
  * DisplayName [DisplayName](#displayname)
  * FeedbackURL [FeedbackURL](#feedbackurl)
  * Name **required** [String](#string)
  * RedirectURL [RedirectURL](#redirecturl)
  * StorageConnectors [StorageConnectorList](#storageconnectorlist)
  * UserSettings [UserSettingList](#usersettinglist)

#### Output
* output [CreateStackResult](#createstackresult)

### CreateStreamingURL



```js
amazonaws_appstream2.CreateStreamingURL({
  "StackName": "",
  "FleetName": "",
  "UserId": ""
}, context)
```

#### Input
* input `object`
  * ApplicationId [String](#string)
  * FleetName **required** [String](#string)
  * SessionContext [String](#string)
  * StackName **required** [String](#string)
  * UserId **required** [StreamingUrlUserId](#streamingurluserid)
  * Validity [Long](#long)

#### Output
* output [CreateStreamingURLResult](#createstreamingurlresult)

### DeleteDirectoryConfig



```js
amazonaws_appstream2.DeleteDirectoryConfig({
  "DirectoryName": ""
}, context)
```

#### Input
* input `object`
  * DirectoryName **required** [DirectoryName](#directoryname)

#### Output
* output [DeleteDirectoryConfigResult](#deletedirectoryconfigresult)

### DeleteFleet



```js
amazonaws_appstream2.DeleteFleet({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [String](#string)

#### Output
* output [DeleteFleetResult](#deletefleetresult)

### DeleteImage



```js
amazonaws_appstream2.DeleteImage({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [Name](#name)

#### Output
* output [DeleteImageResult](#deleteimageresult)

### DeleteImageBuilder



```js
amazonaws_appstream2.DeleteImageBuilder({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [Name](#name)

#### Output
* output [DeleteImageBuilderResult](#deleteimagebuilderresult)

### DeleteStack



```js
amazonaws_appstream2.DeleteStack({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [String](#string)

#### Output
* output [DeleteStackResult](#deletestackresult)

### DescribeDirectoryConfigs



```js
amazonaws_appstream2.DescribeDirectoryConfigs({}, context)
```

#### Input
* input `object`
  * DirectoryNames [DirectoryNameList](#directorynamelist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

#### Output
* output [DescribeDirectoryConfigsResult](#describedirectoryconfigsresult)

### DescribeFleets



```js
amazonaws_appstream2.DescribeFleets({}, context)
```

#### Input
* input `object`
  * Names [StringList](#stringlist)
  * NextToken [String](#string)

#### Output
* output [DescribeFleetsResult](#describefleetsresult)

### DescribeImageBuilders



```js
amazonaws_appstream2.DescribeImageBuilders({}, context)
```

#### Input
* input `object`
  * MaxResults [Integer](#integer)
  * Names [StringList](#stringlist)
  * NextToken [String](#string)

#### Output
* output [DescribeImageBuildersResult](#describeimagebuildersresult)

### DescribeImages



```js
amazonaws_appstream2.DescribeImages({}, context)
```

#### Input
* input `object`
  * Names [StringList](#stringlist)

#### Output
* output [DescribeImagesResult](#describeimagesresult)

### DescribeSessions



```js
amazonaws_appstream2.DescribeSessions({
  "StackName": "",
  "FleetName": ""
}, context)
```

#### Input
* input `object`
  * AuthenticationType [AuthenticationType](#authenticationtype)
  * FleetName **required** [String](#string)
  * Limit [Integer](#integer)
  * NextToken [String](#string)
  * StackName **required** [String](#string)
  * UserId [UserId](#userid)

#### Output
* output [DescribeSessionsResult](#describesessionsresult)

### DescribeStacks



```js
amazonaws_appstream2.DescribeStacks({}, context)
```

#### Input
* input `object`
  * Names [StringList](#stringlist)
  * NextToken [String](#string)

#### Output
* output [DescribeStacksResult](#describestacksresult)

### DisassociateFleet



```js
amazonaws_appstream2.DisassociateFleet({
  "FleetName": "",
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * FleetName **required** [String](#string)
  * StackName **required** [String](#string)

#### Output
* output [DisassociateFleetResult](#disassociatefleetresult)

### ExpireSession



```js
amazonaws_appstream2.ExpireSession({
  "SessionId": ""
}, context)
```

#### Input
* input `object`
  * SessionId **required** [String](#string)

#### Output
* output [ExpireSessionResult](#expiresessionresult)

### ListAssociatedFleets



```js
amazonaws_appstream2.ListAssociatedFleets({
  "StackName": ""
}, context)
```

#### Input
* input `object`
  * NextToken [String](#string)
  * StackName **required** [String](#string)

#### Output
* output [ListAssociatedFleetsResult](#listassociatedfleetsresult)

### ListAssociatedStacks



```js
amazonaws_appstream2.ListAssociatedStacks({
  "FleetName": ""
}, context)
```

#### Input
* input `object`
  * FleetName **required** [String](#string)
  * NextToken [String](#string)

#### Output
* output [ListAssociatedStacksResult](#listassociatedstacksresult)

### ListTagsForResource



```js
amazonaws_appstream2.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [Arn](#arn)

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### StartFleet



```js
amazonaws_appstream2.StartFleet({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [String](#string)

#### Output
* output [StartFleetResult](#startfleetresult)

### StartImageBuilder



```js
amazonaws_appstream2.StartImageBuilder({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AppstreamAgentVersion [AppstreamAgentVersion](#appstreamagentversion)
  * Name **required** [String](#string)

#### Output
* output [StartImageBuilderResult](#startimagebuilderresult)

### StopFleet



```js
amazonaws_appstream2.StopFleet({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [String](#string)

#### Output
* output [StopFleetResult](#stopfleetresult)

### StopImageBuilder



```js
amazonaws_appstream2.StopImageBuilder({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * Name **required** [String](#string)

#### Output
* output [StopImageBuilderResult](#stopimagebuilderresult)

### TagResource



```js
amazonaws_appstream2.TagResource({
  "ResourceArn": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [Arn](#arn)
  * Tags **required** [Tags](#tags)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_appstream2.UntagResource({
  "ResourceArn": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceArn **required** [Arn](#arn)
  * TagKeys **required** [TagKeyList](#tagkeylist)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateDirectoryConfig



```js
amazonaws_appstream2.UpdateDirectoryConfig({
  "DirectoryName": ""
}, context)
```

#### Input
* input `object`
  * DirectoryName **required** [DirectoryName](#directoryname)
  * OrganizationalUnitDistinguishedNames [OrganizationalUnitDistinguishedNamesList](#organizationalunitdistinguishednameslist)
  * ServiceAccountCredentials [ServiceAccountCredentials](#serviceaccountcredentials)

#### Output
* output [UpdateDirectoryConfigResult](#updatedirectoryconfigresult)

### UpdateFleet



```js
amazonaws_appstream2.UpdateFleet({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AttributesToDelete [FleetAttributes](#fleetattributes)
  * ComputeCapacity [ComputeCapacity](#computecapacity)
  * DeleteVpcConfig [Boolean](#boolean)
  * Description [Description](#description)
  * DisconnectTimeoutInSeconds [Integer](#integer)
  * DisplayName [DisplayName](#displayname)
  * DomainJoinInfo [DomainJoinInfo](#domainjoininfo)
  * EnableDefaultInternetAccess [BooleanObject](#booleanobject)
  * ImageName [String](#string)
  * InstanceType [String](#string)
  * MaxUserDurationInSeconds [Integer](#integer)
  * Name **required** [String](#string)
  * VpcConfig [VpcConfig](#vpcconfig)

#### Output
* output [UpdateFleetResult](#updatefleetresult)

### UpdateStack



```js
amazonaws_appstream2.UpdateStack({
  "Name": ""
}, context)
```

#### Input
* input `object`
  * AttributesToDelete [StackAttributes](#stackattributes)
  * DeleteStorageConnectors [Boolean](#boolean)
  * Description [Description](#description)
  * DisplayName [DisplayName](#displayname)
  * FeedbackURL [FeedbackURL](#feedbackurl)
  * Name **required** [String](#string)
  * RedirectURL [RedirectURL](#redirecturl)
  * StorageConnectors [StorageConnectorList](#storageconnectorlist)
  * UserSettings [UserSettingList](#usersettinglist)

#### Output
* output [UpdateStackResult](#updatestackresult)



## Definitions

### AccountName
* AccountName `string`

### AccountPassword
* AccountPassword `string`

### Action
* Action `string` (values: CLIPBOARD_COPY_FROM_LOCAL_DEVICE, CLIPBOARD_COPY_TO_LOCAL_DEVICE, FILE_UPLOAD, FILE_DOWNLOAD, PRINTING_TO_LOCAL_DEVICE)

### Application
* Application `object`: Describes an application in the application catalog.
  * DisplayName [String](#string)
  * Enabled [Boolean](#boolean)
  * IconURL [String](#string)
  * LaunchParameters [String](#string)
  * LaunchPath [String](#string)
  * Metadata [Metadata](#metadata)
  * Name [String](#string)

### Applications
* Applications `array`
  * items [Application](#application)

### AppstreamAgentVersion
* AppstreamAgentVersion `string`

### Arn
* Arn `string`

### AssociateFleetRequest
* AssociateFleetRequest `object`
  * FleetName **required** [String](#string)
  * StackName **required** [String](#string)

### AssociateFleetResult
* AssociateFleetResult `object`

### AuthenticationType
* AuthenticationType `string` (values: API, SAML, USERPOOL)

### Boolean
* Boolean `boolean`

### BooleanObject
* BooleanObject `boolean`

### ComputeCapacity
* ComputeCapacity `object`: Describes the capacity for a fleet.
  * DesiredInstances **required** [Integer](#integer)

### ComputeCapacityStatus
* ComputeCapacityStatus `object`: Describes the capacity status for a fleet.
  * Available [Integer](#integer)
  * Desired **required** [Integer](#integer)
  * InUse [Integer](#integer)
  * Running [Integer](#integer)

### ConcurrentModificationException
* ConcurrentModificationException `object`: An API error occurred. Wait a few minutes and try again.
  * Message [ErrorMessage](#errormessage)

### CopyImageRequest
* CopyImageRequest `object`
  * DestinationImageDescription [Description](#description)
  * DestinationImageName **required** [Name](#name)
  * DestinationRegion **required** [RegionName](#regionname)
  * SourceImageName **required** [Name](#name)

### CopyImageResponse
* CopyImageResponse `object`
  * DestinationImageName [Name](#name)

### CreateDirectoryConfigRequest
* CreateDirectoryConfigRequest `object`
  * DirectoryName **required** [DirectoryName](#directoryname)
  * OrganizationalUnitDistinguishedNames **required** [OrganizationalUnitDistinguishedNamesList](#organizationalunitdistinguishednameslist)
  * ServiceAccountCredentials **required** [ServiceAccountCredentials](#serviceaccountcredentials)

### CreateDirectoryConfigResult
* CreateDirectoryConfigResult `object`
  * DirectoryConfig [DirectoryConfig](#directoryconfig)

### CreateFleetRequest
* CreateFleetRequest `object`
  * ComputeCapacity **required** [ComputeCapacity](#computecapacity)
  * Description [Description](#description)
  * DisconnectTimeoutInSeconds [Integer](#integer)
  * DisplayName [DisplayName](#displayname)
  * DomainJoinInfo [DomainJoinInfo](#domainjoininfo)
  * EnableDefaultInternetAccess [BooleanObject](#booleanobject)
  * FleetType [FleetType](#fleettype)
  * ImageName **required** [String](#string)
  * InstanceType **required** [String](#string)
  * MaxUserDurationInSeconds [Integer](#integer)
  * Name **required** [Name](#name)
  * VpcConfig [VpcConfig](#vpcconfig)

### CreateFleetResult
* CreateFleetResult `object`
  * Fleet [Fleet](#fleet)

### CreateImageBuilderRequest
* CreateImageBuilderRequest `object`
  * AppstreamAgentVersion [AppstreamAgentVersion](#appstreamagentversion)
  * Description [Description](#description)
  * DisplayName [DisplayName](#displayname)
  * DomainJoinInfo [DomainJoinInfo](#domainjoininfo)
  * EnableDefaultInternetAccess [BooleanObject](#booleanobject)
  * ImageName **required** [String](#string)
  * InstanceType **required** [String](#string)
  * Name **required** [Name](#name)
  * VpcConfig [VpcConfig](#vpcconfig)

### CreateImageBuilderResult
* CreateImageBuilderResult `object`
  * ImageBuilder [ImageBuilder](#imagebuilder)

### CreateImageBuilderStreamingURLRequest
* CreateImageBuilderStreamingURLRequest `object`
  * Name **required** [String](#string)
  * Validity [Long](#long)

### CreateImageBuilderStreamingURLResult
* CreateImageBuilderStreamingURLResult `object`
  * Expires [Timestamp](#timestamp)
  * StreamingURL [String](#string)

### CreateStackRequest
* CreateStackRequest `object`
  * Description [Description](#description)
  * DisplayName [DisplayName](#displayname)
  * FeedbackURL [FeedbackURL](#feedbackurl)
  * Name **required** [String](#string)
  * RedirectURL [RedirectURL](#redirecturl)
  * StorageConnectors [StorageConnectorList](#storageconnectorlist)
  * UserSettings [UserSettingList](#usersettinglist)

### CreateStackResult
* CreateStackResult `object`
  * Stack [Stack](#stack)

### CreateStreamingURLRequest
* CreateStreamingURLRequest `object`
  * ApplicationId [String](#string)
  * FleetName **required** [String](#string)
  * SessionContext [String](#string)
  * StackName **required** [String](#string)
  * UserId **required** [StreamingUrlUserId](#streamingurluserid)
  * Validity [Long](#long)

### CreateStreamingURLResult
* CreateStreamingURLResult `object`
  * Expires [Timestamp](#timestamp)
  * StreamingURL [String](#string)

### DeleteDirectoryConfigRequest
* DeleteDirectoryConfigRequest `object`
  * DirectoryName **required** [DirectoryName](#directoryname)

### DeleteDirectoryConfigResult
* DeleteDirectoryConfigResult `object`

### DeleteFleetRequest
* DeleteFleetRequest `object`
  * Name **required** [String](#string)

### DeleteFleetResult
* DeleteFleetResult `object`

### DeleteImageBuilderRequest
* DeleteImageBuilderRequest `object`
  * Name **required** [Name](#name)

### DeleteImageBuilderResult
* DeleteImageBuilderResult `object`
  * ImageBuilder [ImageBuilder](#imagebuilder)

### DeleteImageRequest
* DeleteImageRequest `object`
  * Name **required** [Name](#name)

### DeleteImageResult
* DeleteImageResult `object`
  * Image [Image](#image)

### DeleteStackRequest
* DeleteStackRequest `object`
  * Name **required** [String](#string)

### DeleteStackResult
* DeleteStackResult `object`

### DescribeDirectoryConfigsRequest
* DescribeDirectoryConfigsRequest `object`
  * DirectoryNames [DirectoryNameList](#directorynamelist)
  * MaxResults [Integer](#integer)
  * NextToken [String](#string)

### DescribeDirectoryConfigsResult
* DescribeDirectoryConfigsResult `object`
  * DirectoryConfigs [DirectoryConfigList](#directoryconfiglist)
  * NextToken [String](#string)

### DescribeFleetsRequest
* DescribeFleetsRequest `object`
  * Names [StringList](#stringlist)
  * NextToken [String](#string)

### DescribeFleetsResult
* DescribeFleetsResult `object`
  * Fleets [FleetList](#fleetlist)
  * NextToken [String](#string)

### DescribeImageBuildersRequest
* DescribeImageBuildersRequest `object`
  * MaxResults [Integer](#integer)
  * Names [StringList](#stringlist)
  * NextToken [String](#string)

### DescribeImageBuildersResult
* DescribeImageBuildersResult `object`
  * ImageBuilders [ImageBuilderList](#imagebuilderlist)
  * NextToken [String](#string)

### DescribeImagesRequest
* DescribeImagesRequest `object`
  * Names [StringList](#stringlist)

### DescribeImagesResult
* DescribeImagesResult `object`
  * Images [ImageList](#imagelist)

### DescribeSessionsRequest
* DescribeSessionsRequest `object`
  * AuthenticationType [AuthenticationType](#authenticationtype)
  * FleetName **required** [String](#string)
  * Limit [Integer](#integer)
  * NextToken [String](#string)
  * StackName **required** [String](#string)
  * UserId [UserId](#userid)

### DescribeSessionsResult
* DescribeSessionsResult `object`
  * NextToken [String](#string)
  * Sessions [SessionList](#sessionlist)

### DescribeStacksRequest
* DescribeStacksRequest `object`
  * Names [StringList](#stringlist)
  * NextToken [String](#string)

### DescribeStacksResult
* DescribeStacksResult `object`
  * NextToken [String](#string)
  * Stacks [StackList](#stacklist)

### Description
* Description `string`

### DirectoryConfig
* DirectoryConfig `object`: Configuration information for the directory used to join domains.
  * CreatedTime [Timestamp](#timestamp)
  * DirectoryName **required** [DirectoryName](#directoryname)
  * OrganizationalUnitDistinguishedNames [OrganizationalUnitDistinguishedNamesList](#organizationalunitdistinguishednameslist)
  * ServiceAccountCredentials [ServiceAccountCredentials](#serviceaccountcredentials)

### DirectoryConfigList
* DirectoryConfigList `array`
  * items [DirectoryConfig](#directoryconfig)

### DirectoryName
* DirectoryName `string`

### DirectoryNameList
* DirectoryNameList `array`
  * items [DirectoryName](#directoryname)

### DisassociateFleetRequest
* DisassociateFleetRequest `object`
  * FleetName **required** [String](#string)
  * StackName **required** [String](#string)

### DisassociateFleetResult
* DisassociateFleetResult `object`

### DisplayName
* DisplayName `string`

### Domain
* Domain `string`: GSuite domain for GDrive integration.

### DomainJoinInfo
* DomainJoinInfo `object`: Contains the information needed to join a Microsoft Active Directory domain.
  * DirectoryName [DirectoryName](#directoryname)
  * OrganizationalUnitDistinguishedName [OrganizationalUnitDistinguishedName](#organizationalunitdistinguishedname)

### DomainList
* DomainList `array`
  * items [Domain](#domain)

### ErrorMessage
* ErrorMessage `string`: The error message in the exception.

### ExpireSessionRequest
* ExpireSessionRequest `object`
  * SessionId **required** [String](#string)

### ExpireSessionResult
* ExpireSessionResult `object`

### FeedbackURL
* FeedbackURL `string`

### Fleet
* Fleet `object`: Contains the parameters for a fleet.
  * Arn **required** [Arn](#arn)
  * ComputeCapacityStatus **required** [ComputeCapacityStatus](#computecapacitystatus)
  * CreatedTime [Timestamp](#timestamp)
  * Description [String](#string)
  * DisconnectTimeoutInSeconds [Integer](#integer)
  * DisplayName [String](#string)
  * DomainJoinInfo [DomainJoinInfo](#domainjoininfo)
  * EnableDefaultInternetAccess [BooleanObject](#booleanobject)
  * FleetErrors [FleetErrors](#fleeterrors)
  * FleetType [FleetType](#fleettype)
  * ImageName **required** [String](#string)
  * InstanceType **required** [String](#string)
  * MaxUserDurationInSeconds [Integer](#integer)
  * Name **required** [String](#string)
  * State **required** [FleetState](#fleetstate)
  * VpcConfig [VpcConfig](#vpcconfig)

### FleetAttribute
* FleetAttribute `string` (values: VPC_CONFIGURATION, VPC_CONFIGURATION_SECURITY_GROUP_IDS, DOMAIN_JOIN_INFO): The fleet attribute.

### FleetAttributes
* FleetAttributes `array`: The fleet attributes.
  * items [FleetAttribute](#fleetattribute)

### FleetError
* FleetError `object`: Describes a fleet error.
  * ErrorCode [FleetErrorCode](#fleeterrorcode)
  * ErrorMessage [String](#string)

### FleetErrorCode
* FleetErrorCode `string` (values: IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION, IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION, IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION, NETWORK_INTERFACE_LIMIT_EXCEEDED, INTERNAL_SERVICE_ERROR, IAM_SERVICE_ROLE_IS_MISSING, SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION, SUBNET_NOT_FOUND, IMAGE_NOT_FOUND, INVALID_SUBNET_CONFIGURATION, SECURITY_GROUPS_NOT_FOUND, IGW_NOT_ATTACHED, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION, DOMAIN_JOIN_ERROR_FILE_NOT_FOUND, DOMAIN_JOIN_ERROR_ACCESS_DENIED, DOMAIN_JOIN_ERROR_LOGON_FAILURE, DOMAIN_JOIN_ERROR_INVALID_PARAMETER, DOMAIN_JOIN_ERROR_MORE_DATA, DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN, DOMAIN_JOIN_ERROR_NOT_SUPPORTED, DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME, DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED, DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED, DOMAIN_JOIN_NERR_PASSWORD_EXPIRED, DOMAIN_JOIN_INTERNAL_SERVICE_ERROR)

### FleetErrors
* FleetErrors `array`
  * items [FleetError](#fleeterror)

### FleetList
* FleetList `array`: The fleets.
  * items [Fleet](#fleet)

### FleetState
* FleetState `string` (values: STARTING, RUNNING, STOPPING, STOPPED)

### FleetType
* FleetType `string` (values: ALWAYS_ON, ON_DEMAND)

### Image
* Image `object`: Describes an image.
  * Applications [Applications](#applications)
  * AppstreamAgentVersion [AppstreamAgentVersion](#appstreamagentversion)
  * Arn [Arn](#arn)
  * BaseImageArn [Arn](#arn)
  * CreatedTime [Timestamp](#timestamp)
  * Description [String](#string)
  * DisplayName [String](#string)
  * ImageBuilderSupported [Boolean](#boolean)
  * Name **required** [String](#string)
  * Platform [PlatformType](#platformtype)
  * PublicBaseImageReleasedDate [Timestamp](#timestamp)
  * State [ImageState](#imagestate)
  * StateChangeReason [ImageStateChangeReason](#imagestatechangereason)
  * Visibility [VisibilityType](#visibilitytype)

### ImageBuilder
* ImageBuilder `object`: Describes a streaming instance used for editing an image. New images are created from a snapshot through an image builder.
  * AppstreamAgentVersion [AppstreamAgentVersion](#appstreamagentversion)
  * Arn [Arn](#arn)
  * CreatedTime [Timestamp](#timestamp)
  * Description [String](#string)
  * DisplayName [String](#string)
  * DomainJoinInfo [DomainJoinInfo](#domainjoininfo)
  * EnableDefaultInternetAccess [BooleanObject](#booleanobject)
  * ImageArn [Arn](#arn)
  * ImageBuilderErrors [ResourceErrors](#resourceerrors)
  * InstanceType [String](#string)
  * Name **required** [String](#string)
  * Platform [PlatformType](#platformtype)
  * State [ImageBuilderState](#imagebuilderstate)
  * StateChangeReason [ImageBuilderStateChangeReason](#imagebuilderstatechangereason)
  * VpcConfig [VpcConfig](#vpcconfig)

### ImageBuilderList
* ImageBuilderList `array`
  * items [ImageBuilder](#imagebuilder)

### ImageBuilderState
* ImageBuilderState `string` (values: PENDING, UPDATING_AGENT, RUNNING, STOPPING, STOPPED, REBOOTING, SNAPSHOTTING, DELETING, FAILED)

### ImageBuilderStateChangeReason
* ImageBuilderStateChangeReason `object`: Describes the reason why the last image builder state change occurred.
  * Code [ImageBuilderStateChangeReasonCode](#imagebuilderstatechangereasoncode)
  * Message [String](#string)

### ImageBuilderStateChangeReasonCode
* ImageBuilderStateChangeReasonCode `string` (values: INTERNAL_ERROR, IMAGE_UNAVAILABLE)

### ImageList
* ImageList `array`
  * items [Image](#image)

### ImageState
* ImageState `string` (values: PENDING, AVAILABLE, FAILED, COPYING, DELETING)

### ImageStateChangeReason
* ImageStateChangeReason `object`: Describes the reason why the last image state change occurred.
  * Code [ImageStateChangeReasonCode](#imagestatechangereasoncode)
  * Message [String](#string)

### ImageStateChangeReasonCode
* ImageStateChangeReasonCode `string` (values: INTERNAL_ERROR, IMAGE_BUILDER_NOT_AVAILABLE, IMAGE_COPY_FAILURE)

### IncompatibleImageException
* IncompatibleImageException `object`: The image does not support storage connectors.
  * Message [ErrorMessage](#errormessage)

### Integer
* Integer `integer`

### InvalidAccountStatusException
* InvalidAccountStatusException `object`: The resource cannot be created because your AWS account is suspended. For assistance, contact AWS Support. 
  * Message [ErrorMessage](#errormessage)

### InvalidParameterCombinationException
* InvalidParameterCombinationException `object`: Indicates an incorrect combination of parameters, or a missing parameter.
  * Message [ErrorMessage](#errormessage)

### InvalidRoleException
* InvalidRoleException `object`: The specified role is invalid.
  * Message [ErrorMessage](#errormessage)

### LimitExceededException
* LimitExceededException `object`: The requested limit exceeds the permitted limit for an account.
  * Message [ErrorMessage](#errormessage)

### ListAssociatedFleetsRequest
* ListAssociatedFleetsRequest `object`
  * NextToken [String](#string)
  * StackName **required** [String](#string)

### ListAssociatedFleetsResult
* ListAssociatedFleetsResult `object`
  * Names [StringList](#stringlist)
  * NextToken [String](#string)

### ListAssociatedStacksRequest
* ListAssociatedStacksRequest `object`
  * FleetName **required** [String](#string)
  * NextToken [String](#string)

### ListAssociatedStacksResult
* ListAssociatedStacksResult `object`
  * Names [StringList](#stringlist)
  * NextToken [String](#string)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceArn **required** [Arn](#arn)

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags [Tags](#tags)

### Long
* Long `integer`

### Metadata
* Metadata `array`
  * items `object`
    * key [String](#string)
    * value [String](#string)

### Name
* Name `string`

### OperationNotPermittedException
* OperationNotPermittedException `object`: The attempted operation is not permitted.
  * Message [ErrorMessage](#errormessage)

### OrganizationalUnitDistinguishedName
* OrganizationalUnitDistinguishedName `string`

### OrganizationalUnitDistinguishedNamesList
* OrganizationalUnitDistinguishedNamesList `array`
  * items [OrganizationalUnitDistinguishedName](#organizationalunitdistinguishedname)

### Permission
* Permission `string` (values: ENABLED, DISABLED)

### PlatformType
* PlatformType `string` (values: WINDOWS)

### RedirectURL
* RedirectURL `string`

### RegionName
* RegionName `string`

### ResourceAlreadyExistsException
* ResourceAlreadyExistsException `object`: The specified resource already exists.
  * Message [ErrorMessage](#errormessage)

### ResourceError
* ResourceError `object`: Describes a resource error.
  * ErrorCode [FleetErrorCode](#fleeterrorcode)
  * ErrorMessage [String](#string)
  * ErrorTimestamp [Timestamp](#timestamp)

### ResourceErrors
* ResourceErrors `array`
  * items [ResourceError](#resourceerror)

### ResourceIdentifier
* ResourceIdentifier `string`: The ARN of the resource.

### ResourceInUseException
* ResourceInUseException `object`: The specified resource is in use.
  * Message [ErrorMessage](#errormessage)

### ResourceNotAvailableException
* ResourceNotAvailableException `object`: The specified resource exists and is not in use, but isn't available.
  * Message [ErrorMessage](#errormessage)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The specified resource was not found.
  * Message [ErrorMessage](#errormessage)

### SecurityGroupIdList
* SecurityGroupIdList `array`: The security group IDs.
  * items [String](#string)

### ServiceAccountCredentials
* ServiceAccountCredentials `object`: Describes the credentials for the service account used by the streaming instance to connect to the directory.
  * AccountName **required** [AccountName](#accountname)
  * AccountPassword **required** [AccountPassword](#accountpassword)

### Session
* Session `object`: Describes a streaming session.
  * AuthenticationType [AuthenticationType](#authenticationtype)
  * FleetName **required** [String](#string)
  * Id **required** [String](#string)
  * StackName **required** [String](#string)
  * State **required** [SessionState](#sessionstate)
  * UserId **required** [UserId](#userid)

### SessionList
* SessionList `array`: List of sessions.
  * items [Session](#session)

### SessionState
* SessionState `string` (values: ACTIVE, PENDING, EXPIRED): Possible values for the state of a streaming session.

### Stack
* Stack `object`: Describes a stack.
  * Arn [Arn](#arn)
  * CreatedTime [Timestamp](#timestamp)
  * Description [String](#string)
  * DisplayName [String](#string)
  * FeedbackURL [FeedbackURL](#feedbackurl)
  * Name **required** [String](#string)
  * RedirectURL [RedirectURL](#redirecturl)
  * StackErrors [StackErrors](#stackerrors)
  * StorageConnectors [StorageConnectorList](#storageconnectorlist)
  * UserSettings [UserSettingList](#usersettinglist)

### StackAttribute
* StackAttribute `string` (values: STORAGE_CONNECTORS, STORAGE_CONNECTOR_HOMEFOLDERS, STORAGE_CONNECTOR_GOOGLE_DRIVE, REDIRECT_URL, FEEDBACK_URL, THEME_NAME, USER_SETTINGS)

### StackAttributes
* StackAttributes `array`
  * items [StackAttribute](#stackattribute)

### StackError
* StackError `object`: Describes a stack error.
  * ErrorCode [StackErrorCode](#stackerrorcode)
  * ErrorMessage [String](#string)

### StackErrorCode
* StackErrorCode `string` (values: STORAGE_CONNECTOR_ERROR, INTERNAL_SERVICE_ERROR)

### StackErrors
* StackErrors `array`: The stack errors.
  * items [StackError](#stackerror)

### StackList
* StackList `array`: The stacks.
  * items [Stack](#stack)

### StartFleetRequest
* StartFleetRequest `object`
  * Name **required** [String](#string)

### StartFleetResult
* StartFleetResult `object`

### StartImageBuilderRequest
* StartImageBuilderRequest `object`
  * AppstreamAgentVersion [AppstreamAgentVersion](#appstreamagentversion)
  * Name **required** [String](#string)

### StartImageBuilderResult
* StartImageBuilderResult `object`
  * ImageBuilder [ImageBuilder](#imagebuilder)

### StopFleetRequest
* StopFleetRequest `object`
  * Name **required** [String](#string)

### StopFleetResult
* StopFleetResult `object`

### StopImageBuilderRequest
* StopImageBuilderRequest `object`
  * Name **required** [String](#string)

### StopImageBuilderResult
* StopImageBuilderResult `object`
  * ImageBuilder [ImageBuilder](#imagebuilder)

### StorageConnector
* StorageConnector `object`: Describes a connector to enable persistent storage for users.
  * ConnectorType **required** [StorageConnectorType](#storageconnectortype)
  * Domains [DomainList](#domainlist)
  * ResourceIdentifier [ResourceIdentifier](#resourceidentifier)

### StorageConnectorList
* StorageConnectorList `array`: The storage connectors.
  * items [StorageConnector](#storageconnector)

### StorageConnectorType
* StorageConnectorType `string` (values: HOMEFOLDERS, GOOGLE_DRIVE): The type of storage connector.

### StreamingUrlUserId
* StreamingUrlUserId `string`

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### SubnetIdList
* SubnetIdList `array`: The subnet IDs.
  * items [String](#string)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceArn **required** [Arn](#arn)
  * Tags **required** [Tags](#tags)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items `object`
    * key [TagKey](#tagkey)
    * value [TagValue](#tagvalue)

### Timestamp
* Timestamp `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required** [Arn](#arn)
  * TagKeys **required** [TagKeyList](#tagkeylist)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateDirectoryConfigRequest
* UpdateDirectoryConfigRequest `object`
  * DirectoryName **required** [DirectoryName](#directoryname)
  * OrganizationalUnitDistinguishedNames [OrganizationalUnitDistinguishedNamesList](#organizationalunitdistinguishednameslist)
  * ServiceAccountCredentials [ServiceAccountCredentials](#serviceaccountcredentials)

### UpdateDirectoryConfigResult
* UpdateDirectoryConfigResult `object`
  * DirectoryConfig [DirectoryConfig](#directoryconfig)

### UpdateFleetRequest
* UpdateFleetRequest `object`
  * AttributesToDelete [FleetAttributes](#fleetattributes)
  * ComputeCapacity [ComputeCapacity](#computecapacity)
  * DeleteVpcConfig [Boolean](#boolean)
  * Description [Description](#description)
  * DisconnectTimeoutInSeconds [Integer](#integer)
  * DisplayName [DisplayName](#displayname)
  * DomainJoinInfo [DomainJoinInfo](#domainjoininfo)
  * EnableDefaultInternetAccess [BooleanObject](#booleanobject)
  * ImageName [String](#string)
  * InstanceType [String](#string)
  * MaxUserDurationInSeconds [Integer](#integer)
  * Name **required** [String](#string)
  * VpcConfig [VpcConfig](#vpcconfig)

### UpdateFleetResult
* UpdateFleetResult `object`
  * Fleet [Fleet](#fleet)

### UpdateStackRequest
* UpdateStackRequest `object`
  * AttributesToDelete [StackAttributes](#stackattributes)
  * DeleteStorageConnectors [Boolean](#boolean)
  * Description [Description](#description)
  * DisplayName [DisplayName](#displayname)
  * FeedbackURL [FeedbackURL](#feedbackurl)
  * Name **required** [String](#string)
  * RedirectURL [RedirectURL](#redirecturl)
  * StorageConnectors [StorageConnectorList](#storageconnectorlist)
  * UserSettings [UserSettingList](#usersettinglist)

### UpdateStackResult
* UpdateStackResult `object`
  * Stack [Stack](#stack)

### UserId
* UserId `string`

### UserSetting
* UserSetting `object`: Describes an action and whether the action is enabled or disabled for users during their streaming sessions.
  * Action **required** [Action](#action)
  * Permission **required** [Permission](#permission)

### UserSettingList
* UserSettingList `array`
  * items [UserSetting](#usersetting)

### VisibilityType
* VisibilityType `string` (values: PUBLIC, PRIVATE)

### VpcConfig
* VpcConfig `object`: Describes VPC configuration information.
  * SecurityGroupIds [SecurityGroupIdList](#securitygroupidlist)
  * SubnetIds [SubnetIdList](#subnetidlist)


