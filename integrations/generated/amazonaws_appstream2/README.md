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

.then(data => {
  console.log(data);
});
```

## Description

<fullname>Amazon AppStream 2.0</fullname> <p>This is the <i>Amazon AppStream 2.0 API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p> <note> <p>You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p> </note> <p>To learn more about AppStream 2.0, see the following resources:</p> <ul> <li> <p> <a href="http://aws.amazon.com/appstream2">Amazon AppStream 2.0 product page</a> </p> </li> <li> <p> <a href="http://aws.amazon.com/documentation/appstream2">Amazon AppStream 2.0 documentation</a> </p> </li> </ul>

## Actions

### AssociateFleet



```js
amazonaws_appstream2.AssociateFleet({
  "FleetName": null,
  "StackName": null
}, context)
```

#### Input
* input `object`
  * FleetName **required**
  * StackName **required**

#### Output
* output [AssociateFleetResult](#associatefleetresult)

### BatchAssociateUserStack



```js
amazonaws_appstream2.BatchAssociateUserStack({
  "UserStackAssociations": null
}, context)
```

#### Input
* input `object`
  * UserStackAssociations **required**
    * items [UserStackAssociation](#userstackassociation)

#### Output
* output [BatchAssociateUserStackResult](#batchassociateuserstackresult)

### BatchDisassociateUserStack



```js
amazonaws_appstream2.BatchDisassociateUserStack({
  "UserStackAssociations": null
}, context)
```

#### Input
* input `object`
  * UserStackAssociations **required**
    * items [UserStackAssociation](#userstackassociation)

#### Output
* output [BatchDisassociateUserStackResult](#batchdisassociateuserstackresult)

### CopyImage



```js
amazonaws_appstream2.CopyImage({
  "SourceImageName": null,
  "DestinationImageName": null,
  "DestinationRegion": null
}, context)
```

#### Input
* input `object`
  * DestinationImageDescription
  * DestinationImageName **required**
  * DestinationRegion **required**
  * SourceImageName **required**

#### Output
* output [CopyImageResponse](#copyimageresponse)

### CreateDirectoryConfig



```js
amazonaws_appstream2.CreateDirectoryConfig({
  "DirectoryName": null,
  "OrganizationalUnitDistinguishedNames": null
}, context)
```

#### Input
* input `object`
  * DirectoryName **required**
  * OrganizationalUnitDistinguishedNames **required**
    * items [OrganizationalUnitDistinguishedName](#organizationalunitdistinguishedname)
  * ServiceAccountCredentials
    * AccountName **required**
    * AccountPassword **required**

#### Output
* output [CreateDirectoryConfigResult](#createdirectoryconfigresult)

### CreateFleet



```js
amazonaws_appstream2.CreateFleet({
  "Name": null,
  "InstanceType": null,
  "ComputeCapacity": null
}, context)
```

#### Input
* input `object`
  * ComputeCapacity **required**
    * DesiredInstances **required**
  * Description
  * DisconnectTimeoutInSeconds
  * DisplayName
  * DomainJoinInfo
    * DirectoryName
    * OrganizationalUnitDistinguishedName
  * EnableDefaultInternetAccess
  * FleetType
  * IamRoleArn
  * IdleDisconnectTimeoutInSeconds
  * ImageArn
  * ImageName
  * InstanceType **required**
  * MaxUserDurationInSeconds
  * Name **required**
  * StreamView
  * Tags
  * VpcConfig
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)

#### Output
* output [CreateFleetResult](#createfleetresult)

### CreateImageBuilder



```js
amazonaws_appstream2.CreateImageBuilder({
  "Name": null,
  "InstanceType": null
}, context)
```

#### Input
* input `object`
  * AccessEndpoints
    * items [AccessEndpoint](#accessendpoint)
  * AppstreamAgentVersion
  * Description
  * DisplayName
  * DomainJoinInfo
    * DirectoryName
    * OrganizationalUnitDistinguishedName
  * EnableDefaultInternetAccess
  * IamRoleArn
  * ImageArn
  * ImageName
  * InstanceType **required**
  * Name **required**
  * Tags
  * VpcConfig
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)

#### Output
* output [CreateImageBuilderResult](#createimagebuilderresult)

### CreateImageBuilderStreamingURL



```js
amazonaws_appstream2.CreateImageBuilderStreamingURL({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * Validity

#### Output
* output [CreateImageBuilderStreamingURLResult](#createimagebuilderstreamingurlresult)

### CreateStack



```js
amazonaws_appstream2.CreateStack({
  "Name": null
}, context)
```

#### Input
* input `object`
  * AccessEndpoints
    * items [AccessEndpoint](#accessendpoint)
  * ApplicationSettings
    * Enabled **required**
    * SettingsGroup
  * Description
  * DisplayName
  * EmbedHostDomains
    * items [EmbedHostDomain](#embedhostdomain)
  * FeedbackURL
  * Name **required**
  * RedirectURL
  * StorageConnectors
    * items [StorageConnector](#storageconnector)
  * Tags
  * UserSettings
    * items [UserSetting](#usersetting)

#### Output
* output [CreateStackResult](#createstackresult)

### CreateStreamingURL



```js
amazonaws_appstream2.CreateStreamingURL({
  "StackName": null,
  "FleetName": null,
  "UserId": null
}, context)
```

#### Input
* input `object`
  * ApplicationId
  * FleetName **required**
  * SessionContext
  * StackName **required**
  * UserId **required**
  * Validity

#### Output
* output [CreateStreamingURLResult](#createstreamingurlresult)

### CreateUsageReportSubscription



```js
amazonaws_appstream2.CreateUsageReportSubscription({}, context)
```

#### Input
* input `object`

#### Output
* output [CreateUsageReportSubscriptionResult](#createusagereportsubscriptionresult)

### CreateUser



```js
amazonaws_appstream2.CreateUser({
  "UserName": null,
  "AuthenticationType": null
}, context)
```

#### Input
* input `object`
  * AuthenticationType **required**
  * FirstName
  * LastName
  * MessageAction
  * UserName **required**

#### Output
* output [CreateUserResult](#createuserresult)

### DeleteDirectoryConfig



```js
amazonaws_appstream2.DeleteDirectoryConfig({
  "DirectoryName": null
}, context)
```

#### Input
* input `object`
  * DirectoryName **required**

#### Output
* output [DeleteDirectoryConfigResult](#deletedirectoryconfigresult)

### DeleteFleet



```js
amazonaws_appstream2.DeleteFleet({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteFleetResult](#deletefleetresult)

### DeleteImage



```js
amazonaws_appstream2.DeleteImage({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteImageResult](#deleteimageresult)

### DeleteImageBuilder



```js
amazonaws_appstream2.DeleteImageBuilder({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteImageBuilderResult](#deleteimagebuilderresult)

### DeleteImagePermissions



```js
amazonaws_appstream2.DeleteImagePermissions({
  "Name": null,
  "SharedAccountId": null
}, context)
```

#### Input
* input `object`
  * Name **required**
  * SharedAccountId **required**

#### Output
* output [DeleteImagePermissionsResult](#deleteimagepermissionsresult)

### DeleteStack



```js
amazonaws_appstream2.DeleteStack({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [DeleteStackResult](#deletestackresult)

### DeleteUsageReportSubscription



```js
amazonaws_appstream2.DeleteUsageReportSubscription({}, context)
```

#### Input
* input `object`

#### Output
* output [DeleteUsageReportSubscriptionResult](#deleteusagereportsubscriptionresult)

### DeleteUser



```js
amazonaws_appstream2.DeleteUser({
  "UserName": null,
  "AuthenticationType": null
}, context)
```

#### Input
* input `object`
  * AuthenticationType **required**
  * UserName **required**

#### Output
* output [DeleteUserResult](#deleteuserresult)

### DescribeDirectoryConfigs



```js
amazonaws_appstream2.DescribeDirectoryConfigs({}, context)
```

#### Input
* input `object`
  * DirectoryNames
    * items [DirectoryName](#directoryname)
  * MaxResults
  * NextToken

#### Output
* output [DescribeDirectoryConfigsResult](#describedirectoryconfigsresult)

### DescribeFleets



```js
amazonaws_appstream2.DescribeFleets({}, context)
```

#### Input
* input `object`
  * Names
    * items [String](#string)
  * NextToken

#### Output
* output [DescribeFleetsResult](#describefleetsresult)

### DescribeImageBuilders



```js
amazonaws_appstream2.DescribeImageBuilders({}, context)
```

#### Input
* input `object`
  * MaxResults
  * Names
    * items [String](#string)
  * NextToken

#### Output
* output [DescribeImageBuildersResult](#describeimagebuildersresult)

### DescribeImagePermissions



```js
amazonaws_appstream2.DescribeImagePermissions({
  "Name": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * Name **required**
  * NextToken
  * SharedAwsAccountIds
    * items [AwsAccountId](#awsaccountid)

#### Output
* output [DescribeImagePermissionsResult](#describeimagepermissionsresult)

### DescribeImages



```js
amazonaws_appstream2.DescribeImages({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Arns
    * items [Arn](#arn)
  * MaxResults
  * Names
    * items [String](#string)
  * NextToken
  * Type

#### Output
* output [DescribeImagesResult](#describeimagesresult)

### DescribeSessions



```js
amazonaws_appstream2.DescribeSessions({
  "StackName": null,
  "FleetName": null
}, context)
```

#### Input
* input `object`
  * AuthenticationType
  * FleetName **required**
  * Limit
  * NextToken
  * StackName **required**
  * UserId

#### Output
* output [DescribeSessionsResult](#describesessionsresult)

### DescribeStacks



```js
amazonaws_appstream2.DescribeStacks({}, context)
```

#### Input
* input `object`
  * Names
    * items [String](#string)
  * NextToken

#### Output
* output [DescribeStacksResult](#describestacksresult)

### DescribeUsageReportSubscriptions



```js
amazonaws_appstream2.DescribeUsageReportSubscriptions({}, context)
```

#### Input
* input `object`
  * MaxResults
  * NextToken

#### Output
* output [DescribeUsageReportSubscriptionsResult](#describeusagereportsubscriptionsresult)

### DescribeUserStackAssociations



```js
amazonaws_appstream2.DescribeUserStackAssociations({}, context)
```

#### Input
* input `object`
  * AuthenticationType
  * MaxResults
  * NextToken
  * StackName
  * UserName

#### Output
* output [DescribeUserStackAssociationsResult](#describeuserstackassociationsresult)

### DescribeUsers



```js
amazonaws_appstream2.DescribeUsers({
  "AuthenticationType": null
}, context)
```

#### Input
* input `object`
  * AuthenticationType **required**
  * MaxResults
  * NextToken

#### Output
* output [DescribeUsersResult](#describeusersresult)

### DisableUser



```js
amazonaws_appstream2.DisableUser({
  "UserName": null,
  "AuthenticationType": null
}, context)
```

#### Input
* input `object`
  * AuthenticationType **required**
  * UserName **required**

#### Output
* output [DisableUserResult](#disableuserresult)

### DisassociateFleet



```js
amazonaws_appstream2.DisassociateFleet({
  "FleetName": null,
  "StackName": null
}, context)
```

#### Input
* input `object`
  * FleetName **required**
  * StackName **required**

#### Output
* output [DisassociateFleetResult](#disassociatefleetresult)

### EnableUser



```js
amazonaws_appstream2.EnableUser({
  "UserName": null,
  "AuthenticationType": null
}, context)
```

#### Input
* input `object`
  * AuthenticationType **required**
  * UserName **required**

#### Output
* output [EnableUserResult](#enableuserresult)

### ExpireSession



```js
amazonaws_appstream2.ExpireSession({
  "SessionId": null
}, context)
```

#### Input
* input `object`
  * SessionId **required**

#### Output
* output [ExpireSessionResult](#expiresessionresult)

### ListAssociatedFleets



```js
amazonaws_appstream2.ListAssociatedFleets({
  "StackName": null
}, context)
```

#### Input
* input `object`
  * NextToken
  * StackName **required**

#### Output
* output [ListAssociatedFleetsResult](#listassociatedfleetsresult)

### ListAssociatedStacks



```js
amazonaws_appstream2.ListAssociatedStacks({
  "FleetName": null
}, context)
```

#### Input
* input `object`
  * FleetName **required**
  * NextToken

#### Output
* output [ListAssociatedStacksResult](#listassociatedstacksresult)

### ListTagsForResource



```js
amazonaws_appstream2.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### StartFleet



```js
amazonaws_appstream2.StartFleet({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [StartFleetResult](#startfleetresult)

### StartImageBuilder



```js
amazonaws_appstream2.StartImageBuilder({
  "Name": null
}, context)
```

#### Input
* input `object`
  * AppstreamAgentVersion
  * Name **required**

#### Output
* output [StartImageBuilderResult](#startimagebuilderresult)

### StopFleet



```js
amazonaws_appstream2.StopFleet({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [StopFleetResult](#stopfleetresult)

### StopImageBuilder



```js
amazonaws_appstream2.StopImageBuilder({
  "Name": null
}, context)
```

#### Input
* input `object`
  * Name **required**

#### Output
* output [StopImageBuilderResult](#stopimagebuilderresult)

### TagResource



```js
amazonaws_appstream2.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_appstream2.UntagResource({
  "ResourceArn": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [UntagResourceResponse](#untagresourceresponse)

### UpdateDirectoryConfig



```js
amazonaws_appstream2.UpdateDirectoryConfig({
  "DirectoryName": null
}, context)
```

#### Input
* input `object`
  * DirectoryName **required**
  * OrganizationalUnitDistinguishedNames
    * items [OrganizationalUnitDistinguishedName](#organizationalunitdistinguishedname)
  * ServiceAccountCredentials
    * AccountName **required**
    * AccountPassword **required**

#### Output
* output [UpdateDirectoryConfigResult](#updatedirectoryconfigresult)

### UpdateFleet



```js
amazonaws_appstream2.UpdateFleet({}, context)
```

#### Input
* input `object`
  * AttributesToDelete
    * items [FleetAttribute](#fleetattribute)
  * ComputeCapacity
    * DesiredInstances **required**
  * DeleteVpcConfig
  * Description
  * DisconnectTimeoutInSeconds
  * DisplayName
  * DomainJoinInfo
    * DirectoryName
    * OrganizationalUnitDistinguishedName
  * EnableDefaultInternetAccess
  * IamRoleArn
  * IdleDisconnectTimeoutInSeconds
  * ImageArn
  * ImageName
  * InstanceType
  * MaxUserDurationInSeconds
  * Name
  * StreamView
  * VpcConfig
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)

#### Output
* output [UpdateFleetResult](#updatefleetresult)

### UpdateImagePermissions



```js
amazonaws_appstream2.UpdateImagePermissions({
  "Name": null,
  "SharedAccountId": null,
  "ImagePermissions": null
}, context)
```

#### Input
* input `object`
  * ImagePermissions **required**
    * allowFleet
    * allowImageBuilder
  * Name **required**
  * SharedAccountId **required**

#### Output
* output [UpdateImagePermissionsResult](#updateimagepermissionsresult)

### UpdateStack



```js
amazonaws_appstream2.UpdateStack({
  "Name": null
}, context)
```

#### Input
* input `object`
  * AccessEndpoints
    * items [AccessEndpoint](#accessendpoint)
  * ApplicationSettings
    * Enabled **required**
    * SettingsGroup
  * AttributesToDelete
    * items [StackAttribute](#stackattribute)
  * DeleteStorageConnectors
  * Description
  * DisplayName
  * EmbedHostDomains
    * items [EmbedHostDomain](#embedhostdomain)
  * FeedbackURL
  * Name **required**
  * RedirectURL
  * StorageConnectors
    * items [StorageConnector](#storageconnector)
  * UserSettings
    * items [UserSetting](#usersetting)

#### Output
* output [UpdateStackResult](#updatestackresult)



## Definitions

### AccessEndpoint
* AccessEndpoint `object`: Describes an interface VPC endpoint (interface endpoint) that lets you create a private connection between the virtual private cloud (VPC) that you specify and AppStream 2.0. When you specify an interface endpoint for a stack, users of the stack can connect to AppStream 2.0 only through that endpoint. When you specify an interface endpoint for an image builder, administrators can connect to the image builder only through that endpoint.
  * EndpointType **required**
  * VpceId

### AccessEndpointList
* AccessEndpointList `array`
  * items [AccessEndpoint](#accessendpoint)

### AccessEndpointType
* AccessEndpointType `string` (values: STREAMING)

### AccountName
* AccountName `string`

### AccountPassword
* AccountPassword `string`

### Action
* Action `string` (values: CLIPBOARD_COPY_FROM_LOCAL_DEVICE, CLIPBOARD_COPY_TO_LOCAL_DEVICE, FILE_UPLOAD, FILE_DOWNLOAD, PRINTING_TO_LOCAL_DEVICE)

### Application
* Application `object`: Describes an application in the application catalog.
  * DisplayName
  * Enabled
  * IconURL
  * LaunchParameters
  * LaunchPath
  * Metadata
  * Name

### ApplicationSettings
* ApplicationSettings `object`: The persistent application settings for users of a stack.
  * Enabled **required**
  * SettingsGroup

### ApplicationSettingsResponse
* ApplicationSettingsResponse `object`: Describes the persistent application settings for users of a stack.
  * Enabled
  * S3BucketName
  * SettingsGroup

### Applications
* Applications `array`
  * items [Application](#application)

### AppstreamAgentVersion
* AppstreamAgentVersion `string`

### Arn
* Arn `string`

### ArnList
* ArnList `array`
  * items [Arn](#arn)

### AssociateFleetRequest
* AssociateFleetRequest `object`
  * FleetName **required**
  * StackName **required**

### AssociateFleetResult
* AssociateFleetResult `object`

### AuthenticationType
* AuthenticationType `string` (values: API, SAML, USERPOOL)

### AwsAccountId
* AwsAccountId `string`

### AwsAccountIdList
* AwsAccountIdList `array`
  * items [AwsAccountId](#awsaccountid)

### BatchAssociateUserStackRequest
* BatchAssociateUserStackRequest `object`
  * UserStackAssociations **required**
    * items [UserStackAssociation](#userstackassociation)

### BatchAssociateUserStackResult
* BatchAssociateUserStackResult `object`
  * errors
    * items [UserStackAssociationError](#userstackassociationerror)

### BatchDisassociateUserStackRequest
* BatchDisassociateUserStackRequest `object`
  * UserStackAssociations **required**
    * items [UserStackAssociation](#userstackassociation)

### BatchDisassociateUserStackResult
* BatchDisassociateUserStackResult `object`
  * errors
    * items [UserStackAssociationError](#userstackassociationerror)

### Boolean
* Boolean `boolean`

### BooleanObject
* BooleanObject `boolean`

### ComputeCapacity
* ComputeCapacity `object`: Describes the capacity for a fleet.
  * DesiredInstances **required**

### ComputeCapacityStatus
* ComputeCapacityStatus `object`: Describes the capacity status for a fleet.
  * Available
  * Desired **required**
  * InUse
  * Running

### ConcurrentModificationException


### CopyImageRequest
* CopyImageRequest `object`
  * DestinationImageDescription
  * DestinationImageName **required**
  * DestinationRegion **required**
  * SourceImageName **required**

### CopyImageResponse
* CopyImageResponse `object`
  * DestinationImageName

### CreateDirectoryConfigRequest
* CreateDirectoryConfigRequest `object`
  * DirectoryName **required**
  * OrganizationalUnitDistinguishedNames **required**
    * items [OrganizationalUnitDistinguishedName](#organizationalunitdistinguishedname)
  * ServiceAccountCredentials
    * AccountName **required**
    * AccountPassword **required**

### CreateDirectoryConfigResult
* CreateDirectoryConfigResult `object`
  * DirectoryConfig
    * CreatedTime
    * DirectoryName **required**
    * OrganizationalUnitDistinguishedNames
      * items [OrganizationalUnitDistinguishedName](#organizationalunitdistinguishedname)
    * ServiceAccountCredentials
      * AccountName **required**
      * AccountPassword **required**

### CreateFleetRequest
* CreateFleetRequest `object`
  * ComputeCapacity **required**
    * DesiredInstances **required**
  * Description
  * DisconnectTimeoutInSeconds
  * DisplayName
  * DomainJoinInfo
    * DirectoryName
    * OrganizationalUnitDistinguishedName
  * EnableDefaultInternetAccess
  * FleetType
  * IamRoleArn
  * IdleDisconnectTimeoutInSeconds
  * ImageArn
  * ImageName
  * InstanceType **required**
  * MaxUserDurationInSeconds
  * Name **required**
  * StreamView
  * Tags
  * VpcConfig
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)

### CreateFleetResult
* CreateFleetResult `object`
  * Fleet
    * Arn **required**
    * ComputeCapacityStatus **required**
      * Available
      * Desired **required**
      * InUse
      * Running
    * CreatedTime
    * Description
    * DisconnectTimeoutInSeconds
    * DisplayName
    * DomainJoinInfo
      * DirectoryName
      * OrganizationalUnitDistinguishedName
    * EnableDefaultInternetAccess
    * FleetErrors
      * items [FleetError](#fleeterror)
    * FleetType
    * IamRoleArn
    * IdleDisconnectTimeoutInSeconds
    * ImageArn
    * ImageName
    * InstanceType **required**
    * MaxUserDurationInSeconds
    * Name **required**
    * State **required**
    * StreamView
    * VpcConfig
      * SecurityGroupIds
        * items [String](#string)
      * SubnetIds
        * items [String](#string)

### CreateImageBuilderRequest
* CreateImageBuilderRequest `object`
  * AccessEndpoints
    * items [AccessEndpoint](#accessendpoint)
  * AppstreamAgentVersion
  * Description
  * DisplayName
  * DomainJoinInfo
    * DirectoryName
    * OrganizationalUnitDistinguishedName
  * EnableDefaultInternetAccess
  * IamRoleArn
  * ImageArn
  * ImageName
  * InstanceType **required**
  * Name **required**
  * Tags
  * VpcConfig
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)

### CreateImageBuilderResult
* CreateImageBuilderResult `object`
  * ImageBuilder
    * AccessEndpoints
      * items [AccessEndpoint](#accessendpoint)
    * AppstreamAgentVersion
    * Arn
    * CreatedTime
    * Description
    * DisplayName
    * DomainJoinInfo
      * DirectoryName
      * OrganizationalUnitDistinguishedName
    * EnableDefaultInternetAccess
    * IamRoleArn
    * ImageArn
    * ImageBuilderErrors
      * items [ResourceError](#resourceerror)
    * InstanceType
    * Name **required**
    * NetworkAccessConfiguration [NetworkAccessConfiguration](#networkaccessconfiguration)
    * Platform
    * State
    * StateChangeReason
      * Code
      * Message
    * VpcConfig
      * SecurityGroupIds
        * items [String](#string)
      * SubnetIds
        * items [String](#string)

### CreateImageBuilderStreamingURLRequest
* CreateImageBuilderStreamingURLRequest `object`
  * Name **required**
  * Validity

### CreateImageBuilderStreamingURLResult
* CreateImageBuilderStreamingURLResult `object`
  * Expires
  * StreamingURL

### CreateStackRequest
* CreateStackRequest `object`
  * AccessEndpoints
    * items [AccessEndpoint](#accessendpoint)
  * ApplicationSettings
    * Enabled **required**
    * SettingsGroup
  * Description
  * DisplayName
  * EmbedHostDomains
    * items [EmbedHostDomain](#embedhostdomain)
  * FeedbackURL
  * Name **required**
  * RedirectURL
  * StorageConnectors
    * items [StorageConnector](#storageconnector)
  * Tags
  * UserSettings
    * items [UserSetting](#usersetting)

### CreateStackResult
* CreateStackResult `object`
  * Stack
    * AccessEndpoints
      * items [AccessEndpoint](#accessendpoint)
    * ApplicationSettings
      * Enabled
      * S3BucketName
      * SettingsGroup
    * Arn
    * CreatedTime
    * Description
    * DisplayName
    * EmbedHostDomains
      * items [EmbedHostDomain](#embedhostdomain)
    * FeedbackURL
    * Name **required**
    * RedirectURL
    * StackErrors
      * items [StackError](#stackerror)
    * StorageConnectors
      * items [StorageConnector](#storageconnector)
    * UserSettings
      * items [UserSetting](#usersetting)

### CreateStreamingURLRequest
* CreateStreamingURLRequest `object`
  * ApplicationId
  * FleetName **required**
  * SessionContext
  * StackName **required**
  * UserId **required**
  * Validity

### CreateStreamingURLResult
* CreateStreamingURLResult `object`
  * Expires
  * StreamingURL

### CreateUsageReportSubscriptionRequest
* CreateUsageReportSubscriptionRequest `object`

### CreateUsageReportSubscriptionResult
* CreateUsageReportSubscriptionResult `object`
  * S3BucketName
  * Schedule

### CreateUserRequest
* CreateUserRequest `object`
  * AuthenticationType **required**
  * FirstName
  * LastName
  * MessageAction
  * UserName **required**

### CreateUserResult
* CreateUserResult `object`

### DeleteDirectoryConfigRequest
* DeleteDirectoryConfigRequest `object`
  * DirectoryName **required**

### DeleteDirectoryConfigResult
* DeleteDirectoryConfigResult `object`

### DeleteFleetRequest
* DeleteFleetRequest `object`
  * Name **required**

### DeleteFleetResult
* DeleteFleetResult `object`

### DeleteImageBuilderRequest
* DeleteImageBuilderRequest `object`
  * Name **required**

### DeleteImageBuilderResult
* DeleteImageBuilderResult `object`
  * ImageBuilder
    * AccessEndpoints
      * items [AccessEndpoint](#accessendpoint)
    * AppstreamAgentVersion
    * Arn
    * CreatedTime
    * Description
    * DisplayName
    * DomainJoinInfo
      * DirectoryName
      * OrganizationalUnitDistinguishedName
    * EnableDefaultInternetAccess
    * IamRoleArn
    * ImageArn
    * ImageBuilderErrors
      * items [ResourceError](#resourceerror)
    * InstanceType
    * Name **required**
    * NetworkAccessConfiguration [NetworkAccessConfiguration](#networkaccessconfiguration)
    * Platform
    * State
    * StateChangeReason
      * Code
      * Message
    * VpcConfig
      * SecurityGroupIds
        * items [String](#string)
      * SubnetIds
        * items [String](#string)

### DeleteImagePermissionsRequest
* DeleteImagePermissionsRequest `object`
  * Name **required**
  * SharedAccountId **required**

### DeleteImagePermissionsResult
* DeleteImagePermissionsResult `object`

### DeleteImageRequest
* DeleteImageRequest `object`
  * Name **required**

### DeleteImageResult
* DeleteImageResult `object`
  * Image
    * Applications
      * items [Application](#application)
    * AppstreamAgentVersion
    * Arn
    * BaseImageArn
    * CreatedTime
    * Description
    * DisplayName
    * ImageBuilderName
    * ImageBuilderSupported
    * ImagePermissions
      * allowFleet
      * allowImageBuilder
    * Name **required**
    * Platform
    * PublicBaseImageReleasedDate
    * State
    * StateChangeReason
      * Code
      * Message
    * Visibility

### DeleteStackRequest
* DeleteStackRequest `object`
  * Name **required**

### DeleteStackResult
* DeleteStackResult `object`

### DeleteUsageReportSubscriptionRequest
* DeleteUsageReportSubscriptionRequest `object`

### DeleteUsageReportSubscriptionResult
* DeleteUsageReportSubscriptionResult `object`

### DeleteUserRequest
* DeleteUserRequest `object`
  * AuthenticationType **required**
  * UserName **required**

### DeleteUserResult
* DeleteUserResult `object`

### DescribeDirectoryConfigsRequest
* DescribeDirectoryConfigsRequest `object`
  * DirectoryNames
    * items [DirectoryName](#directoryname)
  * MaxResults
  * NextToken

### DescribeDirectoryConfigsResult
* DescribeDirectoryConfigsResult `object`
  * DirectoryConfigs
    * items [DirectoryConfig](#directoryconfig)
  * NextToken

### DescribeFleetsRequest
* DescribeFleetsRequest `object`
  * Names
    * items [String](#string)
  * NextToken

### DescribeFleetsResult
* DescribeFleetsResult `object`
  * Fleets
    * items [Fleet](#fleet)
  * NextToken

### DescribeImageBuildersRequest
* DescribeImageBuildersRequest `object`
  * MaxResults
  * Names
    * items [String](#string)
  * NextToken

### DescribeImageBuildersResult
* DescribeImageBuildersResult `object`
  * ImageBuilders
    * items [ImageBuilder](#imagebuilder)
  * NextToken

### DescribeImagePermissionsRequest
* DescribeImagePermissionsRequest `object`
  * MaxResults
  * Name **required**
  * NextToken
  * SharedAwsAccountIds
    * items [AwsAccountId](#awsaccountid)

### DescribeImagePermissionsResult
* DescribeImagePermissionsResult `object`
  * Name
  * NextToken
  * SharedImagePermissionsList
    * items [SharedImagePermissions](#sharedimagepermissions)

### DescribeImagesMaxResults
* DescribeImagesMaxResults `integer`

### DescribeImagesRequest
* DescribeImagesRequest `object`
  * Arns
    * items [Arn](#arn)
  * MaxResults
  * Names
    * items [String](#string)
  * NextToken
  * Type

### DescribeImagesResult
* DescribeImagesResult `object`
  * Images
    * items [Image](#image)
  * NextToken

### DescribeSessionsRequest
* DescribeSessionsRequest `object`
  * AuthenticationType
  * FleetName **required**
  * Limit
  * NextToken
  * StackName **required**
  * UserId

### DescribeSessionsResult
* DescribeSessionsResult `object`
  * NextToken
  * Sessions
    * items [Session](#session)

### DescribeStacksRequest
* DescribeStacksRequest `object`
  * Names
    * items [String](#string)
  * NextToken

### DescribeStacksResult
* DescribeStacksResult `object`
  * NextToken
  * Stacks
    * items [Stack](#stack)

### DescribeUsageReportSubscriptionsRequest
* DescribeUsageReportSubscriptionsRequest `object`
  * MaxResults
  * NextToken

### DescribeUsageReportSubscriptionsResult
* DescribeUsageReportSubscriptionsResult `object`
  * NextToken
  * UsageReportSubscriptions
    * items [UsageReportSubscription](#usagereportsubscription)

### DescribeUserStackAssociationsRequest
* DescribeUserStackAssociationsRequest `object`
  * AuthenticationType
  * MaxResults
  * NextToken
  * StackName
  * UserName

### DescribeUserStackAssociationsResult
* DescribeUserStackAssociationsResult `object`
  * NextToken
  * UserStackAssociations
    * items [UserStackAssociation](#userstackassociation)

### DescribeUsersRequest
* DescribeUsersRequest `object`
  * AuthenticationType **required**
  * MaxResults
  * NextToken

### DescribeUsersResult
* DescribeUsersResult `object`
  * NextToken
  * Users
    * items [User](#user)

### Description
* Description `string`

### DirectoryConfig
* DirectoryConfig `object`: Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
  * CreatedTime
  * DirectoryName **required**
  * OrganizationalUnitDistinguishedNames
    * items [OrganizationalUnitDistinguishedName](#organizationalunitdistinguishedname)
  * ServiceAccountCredentials
    * AccountName **required**
    * AccountPassword **required**

### DirectoryConfigList
* DirectoryConfigList `array`
  * items [DirectoryConfig](#directoryconfig)

### DirectoryName
* DirectoryName `string`

### DirectoryNameList
* DirectoryNameList `array`
  * items [DirectoryName](#directoryname)

### DisableUserRequest
* DisableUserRequest `object`
  * AuthenticationType **required**
  * UserName **required**

### DisableUserResult
* DisableUserResult `object`

### DisassociateFleetRequest
* DisassociateFleetRequest `object`
  * FleetName **required**
  * StackName **required**

### DisassociateFleetResult
* DisassociateFleetResult `object`

### DisplayName
* DisplayName `string`

### Domain
* Domain `string`: GSuite domain for GDrive integration.

### DomainJoinInfo
* DomainJoinInfo `object`: Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
  * DirectoryName
  * OrganizationalUnitDistinguishedName

### DomainList
* DomainList `array`
  * items [Domain](#domain)

### EmbedHostDomain
* EmbedHostDomain `string`: Specifies a valid domain that can embed AppStream. Valid examples include: ["testorigin.tt--com", "testingorigin.com.us", "test.com.us"] Invalid examples include: ["test,com", ".com", "h*llo.com". ""]

### EmbedHostDomains
* EmbedHostDomains `array`
  * items [EmbedHostDomain](#embedhostdomain)

### EnableUserRequest
* EnableUserRequest `object`
  * AuthenticationType **required**
  * UserName **required**

### EnableUserResult
* EnableUserResult `object`

### ExpireSessionRequest
* ExpireSessionRequest `object`
  * SessionId **required**

### ExpireSessionResult
* ExpireSessionResult `object`

### FeedbackURL
* FeedbackURL `string`

### Fleet
* Fleet `object`: Describes a fleet.
  * Arn **required**
  * ComputeCapacityStatus **required**
    * Available
    * Desired **required**
    * InUse
    * Running
  * CreatedTime
  * Description
  * DisconnectTimeoutInSeconds
  * DisplayName
  * DomainJoinInfo
    * DirectoryName
    * OrganizationalUnitDistinguishedName
  * EnableDefaultInternetAccess
  * FleetErrors
    * items [FleetError](#fleeterror)
  * FleetType
  * IamRoleArn
  * IdleDisconnectTimeoutInSeconds
  * ImageArn
  * ImageName
  * InstanceType **required**
  * MaxUserDurationInSeconds
  * Name **required**
  * State **required**
  * StreamView
  * VpcConfig
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)

### FleetAttribute
* FleetAttribute `string` (values: VPC_CONFIGURATION, VPC_CONFIGURATION_SECURITY_GROUP_IDS, DOMAIN_JOIN_INFO, IAM_ROLE_ARN): The fleet attribute.

### FleetAttributes
* FleetAttributes `array`: The fleet attributes.
  * items [FleetAttribute](#fleetattribute)

### FleetError
* FleetError `object`: Describes a fleet error.
  * ErrorCode
  * ErrorMessage

### FleetErrorCode
* FleetErrorCode `string` (values: IAM_SERVICE_ROLE_MISSING_ENI_DESCRIBE_ACTION, IAM_SERVICE_ROLE_MISSING_ENI_CREATE_ACTION, IAM_SERVICE_ROLE_MISSING_ENI_DELETE_ACTION, NETWORK_INTERFACE_LIMIT_EXCEEDED, INTERNAL_SERVICE_ERROR, IAM_SERVICE_ROLE_IS_MISSING, MACHINE_ROLE_IS_MISSING, STS_DISABLED_IN_REGION, SUBNET_HAS_INSUFFICIENT_IP_ADDRESSES, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SUBNET_ACTION, SUBNET_NOT_FOUND, IMAGE_NOT_FOUND, INVALID_SUBNET_CONFIGURATION, SECURITY_GROUPS_NOT_FOUND, IGW_NOT_ATTACHED, IAM_SERVICE_ROLE_MISSING_DESCRIBE_SECURITY_GROUPS_ACTION, DOMAIN_JOIN_ERROR_FILE_NOT_FOUND, DOMAIN_JOIN_ERROR_ACCESS_DENIED, DOMAIN_JOIN_ERROR_LOGON_FAILURE, DOMAIN_JOIN_ERROR_INVALID_PARAMETER, DOMAIN_JOIN_ERROR_MORE_DATA, DOMAIN_JOIN_ERROR_NO_SUCH_DOMAIN, DOMAIN_JOIN_ERROR_NOT_SUPPORTED, DOMAIN_JOIN_NERR_INVALID_WORKGROUP_NAME, DOMAIN_JOIN_NERR_WORKSTATION_NOT_STARTED, DOMAIN_JOIN_ERROR_DS_MACHINE_ACCOUNT_QUOTA_EXCEEDED, DOMAIN_JOIN_NERR_PASSWORD_EXPIRED, DOMAIN_JOIN_INTERNAL_SERVICE_ERROR)

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
  * Applications
    * items [Application](#application)
  * AppstreamAgentVersion
  * Arn
  * BaseImageArn
  * CreatedTime
  * Description
  * DisplayName
  * ImageBuilderName
  * ImageBuilderSupported
  * ImagePermissions
    * allowFleet
    * allowImageBuilder
  * Name **required**
  * Platform
  * PublicBaseImageReleasedDate
  * State
  * StateChangeReason
    * Code
    * Message
  * Visibility

### ImageBuilder
* ImageBuilder `object`: Describes a virtual machine that is used to create an image. 
  * AccessEndpoints
    * items [AccessEndpoint](#accessendpoint)
  * AppstreamAgentVersion
  * Arn
  * CreatedTime
  * Description
  * DisplayName
  * DomainJoinInfo
    * DirectoryName
    * OrganizationalUnitDistinguishedName
  * EnableDefaultInternetAccess
  * IamRoleArn
  * ImageArn
  * ImageBuilderErrors
    * items [ResourceError](#resourceerror)
  * InstanceType
  * Name **required**
  * NetworkAccessConfiguration [NetworkAccessConfiguration](#networkaccessconfiguration)
  * Platform
  * State
  * StateChangeReason
    * Code
    * Message
  * VpcConfig
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)

### ImageBuilderList
* ImageBuilderList `array`
  * items [ImageBuilder](#imagebuilder)

### ImageBuilderState
* ImageBuilderState `string` (values: PENDING, UPDATING_AGENT, RUNNING, STOPPING, STOPPED, REBOOTING, SNAPSHOTTING, DELETING, FAILED)

### ImageBuilderStateChangeReason
* ImageBuilderStateChangeReason `object`: Describes the reason why the last image builder state change occurred.
  * Code
  * Message

### ImageBuilderStateChangeReasonCode
* ImageBuilderStateChangeReasonCode `string` (values: INTERNAL_ERROR, IMAGE_UNAVAILABLE)

### ImageList
* ImageList `array`
  * items [Image](#image)

### ImagePermissions
* ImagePermissions `object`: Describes the permissions for an image. 
  * allowFleet
  * allowImageBuilder

### ImageState
* ImageState `string` (values: PENDING, AVAILABLE, FAILED, COPYING, DELETING)

### ImageStateChangeReason
* ImageStateChangeReason `object`: Describes the reason why the last image state change occurred.
  * Code
  * Message

### ImageStateChangeReasonCode
* ImageStateChangeReasonCode `string` (values: INTERNAL_ERROR, IMAGE_BUILDER_NOT_AVAILABLE, IMAGE_COPY_FAILURE)

### IncompatibleImageException


### Integer
* Integer `integer`

### InvalidAccountStatusException


### InvalidParameterCombinationException


### InvalidRoleException


### LastReportGenerationExecutionError
* LastReportGenerationExecutionError `object`: Describes the error that is returned when a usage report can't be generated.
  * ErrorCode
  * ErrorMessage

### LastReportGenerationExecutionErrors
* LastReportGenerationExecutionErrors `array`
  * items [LastReportGenerationExecutionError](#lastreportgenerationexecutionerror)

### LimitExceededException


### ListAssociatedFleetsRequest
* ListAssociatedFleetsRequest `object`
  * NextToken
  * StackName **required**

### ListAssociatedFleetsResult
* ListAssociatedFleetsResult `object`
  * Names
    * items [String](#string)
  * NextToken

### ListAssociatedStacksRequest
* ListAssociatedStacksRequest `object`
  * FleetName **required**
  * NextToken

### ListAssociatedStacksResult
* ListAssociatedStacksResult `object`
  * Names
    * items [String](#string)
  * NextToken

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * Tags

### Long
* Long `integer`

### MaxResults
* MaxResults `integer`

### MessageAction
* MessageAction `string` (values: SUPPRESS, RESEND)

### Metadata
* Metadata `object`

### Name
* Name `string`

### NetworkAccessConfiguration
* NetworkAccessConfiguration `object`: Describes the network details of the fleet or image builder instance.
  * EniId
  * EniPrivateIpAddress

### OperationNotPermittedException


### OrganizationalUnitDistinguishedName
* OrganizationalUnitDistinguishedName `string`

### OrganizationalUnitDistinguishedNamesList
* OrganizationalUnitDistinguishedNamesList `array`
  * items [OrganizationalUnitDistinguishedName](#organizationalunitdistinguishedname)

### Permission
* Permission `string` (values: ENABLED, DISABLED)

### PlatformType
* PlatformType `string` (values: WINDOWS, WINDOWS_SERVER_2016, WINDOWS_SERVER_2019)

### RedirectURL
* RedirectURL `string`

### RegionName
* RegionName `string`

### RequestLimitExceededException


### ResourceAlreadyExistsException


### ResourceError
* ResourceError `object`: Describes a resource error.
  * ErrorCode
  * ErrorMessage
  * ErrorTimestamp

### ResourceErrors
* ResourceErrors `array`
  * items [ResourceError](#resourceerror)

### ResourceIdentifier
* ResourceIdentifier `string`: The ARN of the resource.

### ResourceInUseException


### ResourceNotAvailableException


### ResourceNotFoundException


### SecurityGroupIdList
* SecurityGroupIdList `array`: The security group identifiers.
  * items [String](#string)

### ServiceAccountCredentials
* ServiceAccountCredentials `object`: Describes the credentials for the service account used by the fleet or image builder to connect to the directory.
  * AccountName **required**
  * AccountPassword **required**

### Session
* Session `object`: Describes a streaming session.
  * AuthenticationType
  * ConnectionState
  * FleetName **required**
  * Id **required**
  * MaxExpirationTime
  * NetworkAccessConfiguration
    * EniId
    * EniPrivateIpAddress
  * StackName **required**
  * StartTime
  * State **required**
  * UserId **required**

### SessionConnectionState
* SessionConnectionState `string` (values: CONNECTED, NOT_CONNECTED)

### SessionList
* SessionList `array`: List of sessions.
  * items [Session](#session)

### SessionState
* SessionState `string` (values: ACTIVE, PENDING, EXPIRED): Possible values for the state of a streaming session.

### SettingsGroup
* SettingsGroup `string`

### SharedImagePermissions
* SharedImagePermissions `object`: Describes the permissions that are available to the specified AWS account for a shared image.
  * imagePermissions **required**
    * allowFleet
    * allowImageBuilder
  * sharedAccountId **required**

### SharedImagePermissionsList
* SharedImagePermissionsList `array`
  * items [SharedImagePermissions](#sharedimagepermissions)

### Stack
* Stack `object`: Describes a stack.
  * AccessEndpoints
    * items [AccessEndpoint](#accessendpoint)
  * ApplicationSettings
    * Enabled
    * S3BucketName
    * SettingsGroup
  * Arn
  * CreatedTime
  * Description
  * DisplayName
  * EmbedHostDomains
    * items [EmbedHostDomain](#embedhostdomain)
  * FeedbackURL
  * Name **required**
  * RedirectURL
  * StackErrors
    * items [StackError](#stackerror)
  * StorageConnectors
    * items [StorageConnector](#storageconnector)
  * UserSettings
    * items [UserSetting](#usersetting)

### StackAttribute
* StackAttribute `string` (values: STORAGE_CONNECTORS, STORAGE_CONNECTOR_HOMEFOLDERS, STORAGE_CONNECTOR_GOOGLE_DRIVE, STORAGE_CONNECTOR_ONE_DRIVE, REDIRECT_URL, FEEDBACK_URL, THEME_NAME, USER_SETTINGS, EMBED_HOST_DOMAINS, IAM_ROLE_ARN, ACCESS_ENDPOINTS)

### StackAttributes
* StackAttributes `array`
  * items [StackAttribute](#stackattribute)

### StackError
* StackError `object`: Describes a stack error.
  * ErrorCode
  * ErrorMessage

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
  * Name **required**

### StartFleetResult
* StartFleetResult `object`

### StartImageBuilderRequest
* StartImageBuilderRequest `object`
  * AppstreamAgentVersion
  * Name **required**

### StartImageBuilderResult
* StartImageBuilderResult `object`
  * ImageBuilder
    * AccessEndpoints
      * items [AccessEndpoint](#accessendpoint)
    * AppstreamAgentVersion
    * Arn
    * CreatedTime
    * Description
    * DisplayName
    * DomainJoinInfo
      * DirectoryName
      * OrganizationalUnitDistinguishedName
    * EnableDefaultInternetAccess
    * IamRoleArn
    * ImageArn
    * ImageBuilderErrors
      * items [ResourceError](#resourceerror)
    * InstanceType
    * Name **required**
    * NetworkAccessConfiguration [NetworkAccessConfiguration](#networkaccessconfiguration)
    * Platform
    * State
    * StateChangeReason
      * Code
      * Message
    * VpcConfig
      * SecurityGroupIds
        * items [String](#string)
      * SubnetIds
        * items [String](#string)

### StopFleetRequest
* StopFleetRequest `object`
  * Name **required**

### StopFleetResult
* StopFleetResult `object`

### StopImageBuilderRequest
* StopImageBuilderRequest `object`
  * Name **required**

### StopImageBuilderResult
* StopImageBuilderResult `object`
  * ImageBuilder
    * AccessEndpoints
      * items [AccessEndpoint](#accessendpoint)
    * AppstreamAgentVersion
    * Arn
    * CreatedTime
    * Description
    * DisplayName
    * DomainJoinInfo
      * DirectoryName
      * OrganizationalUnitDistinguishedName
    * EnableDefaultInternetAccess
    * IamRoleArn
    * ImageArn
    * ImageBuilderErrors
      * items [ResourceError](#resourceerror)
    * InstanceType
    * Name **required**
    * NetworkAccessConfiguration [NetworkAccessConfiguration](#networkaccessconfiguration)
    * Platform
    * State
    * StateChangeReason
      * Code
      * Message
    * VpcConfig
      * SecurityGroupIds
        * items [String](#string)
      * SubnetIds
        * items [String](#string)

### StorageConnector
* StorageConnector `object`: Describes a connector that enables persistent storage for users.
  * ConnectorType **required**
  * Domains
    * items [Domain](#domain)
  * ResourceIdentifier

### StorageConnectorList
* StorageConnectorList `array`: The storage connectors.
  * items [StorageConnector](#storageconnector)

### StorageConnectorType
* StorageConnectorType `string` (values: HOMEFOLDERS, GOOGLE_DRIVE, ONE_DRIVE): The type of storage connector.

### StreamView
* StreamView `string` (values: APP, DESKTOP)

### StreamingUrlUserId
* StreamingUrlUserId `string`

### String
* String `string`

### StringList
* StringList `array`
  * items [String](#string)

### SubnetIdList
* SubnetIdList `array`: The subnet identifiers.
  * items [String](#string)

### TagKey
* TagKey `string`

### TagKeyList
* TagKeyList `array`
  * items [TagKey](#tagkey)

### TagResourceRequest
* TagResourceRequest `object`
  * ResourceArn **required**
  * Tags **required**

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### Tags
* Tags `object`

### Timestamp
* Timestamp `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateDirectoryConfigRequest
* UpdateDirectoryConfigRequest `object`
  * DirectoryName **required**
  * OrganizationalUnitDistinguishedNames
    * items [OrganizationalUnitDistinguishedName](#organizationalunitdistinguishedname)
  * ServiceAccountCredentials
    * AccountName **required**
    * AccountPassword **required**

### UpdateDirectoryConfigResult
* UpdateDirectoryConfigResult `object`
  * DirectoryConfig
    * CreatedTime
    * DirectoryName **required**
    * OrganizationalUnitDistinguishedNames
      * items [OrganizationalUnitDistinguishedName](#organizationalunitdistinguishedname)
    * ServiceAccountCredentials
      * AccountName **required**
      * AccountPassword **required**

### UpdateFleetRequest
* UpdateFleetRequest `object`
  * AttributesToDelete
    * items [FleetAttribute](#fleetattribute)
  * ComputeCapacity
    * DesiredInstances **required**
  * DeleteVpcConfig
  * Description
  * DisconnectTimeoutInSeconds
  * DisplayName
  * DomainJoinInfo
    * DirectoryName
    * OrganizationalUnitDistinguishedName
  * EnableDefaultInternetAccess
  * IamRoleArn
  * IdleDisconnectTimeoutInSeconds
  * ImageArn
  * ImageName
  * InstanceType
  * MaxUserDurationInSeconds
  * Name
  * StreamView
  * VpcConfig
    * SecurityGroupIds
      * items [String](#string)
    * SubnetIds
      * items [String](#string)

### UpdateFleetResult
* UpdateFleetResult `object`
  * Fleet
    * Arn **required**
    * ComputeCapacityStatus **required**
      * Available
      * Desired **required**
      * InUse
      * Running
    * CreatedTime
    * Description
    * DisconnectTimeoutInSeconds
    * DisplayName
    * DomainJoinInfo
      * DirectoryName
      * OrganizationalUnitDistinguishedName
    * EnableDefaultInternetAccess
    * FleetErrors
      * items [FleetError](#fleeterror)
    * FleetType
    * IamRoleArn
    * IdleDisconnectTimeoutInSeconds
    * ImageArn
    * ImageName
    * InstanceType **required**
    * MaxUserDurationInSeconds
    * Name **required**
    * State **required**
    * StreamView
    * VpcConfig
      * SecurityGroupIds
        * items [String](#string)
      * SubnetIds
        * items [String](#string)

### UpdateImagePermissionsRequest
* UpdateImagePermissionsRequest `object`
  * ImagePermissions **required**
    * allowFleet
    * allowImageBuilder
  * Name **required**
  * SharedAccountId **required**

### UpdateImagePermissionsResult
* UpdateImagePermissionsResult `object`

### UpdateStackRequest
* UpdateStackRequest `object`
  * AccessEndpoints
    * items [AccessEndpoint](#accessendpoint)
  * ApplicationSettings
    * Enabled **required**
    * SettingsGroup
  * AttributesToDelete
    * items [StackAttribute](#stackattribute)
  * DeleteStorageConnectors
  * Description
  * DisplayName
  * EmbedHostDomains
    * items [EmbedHostDomain](#embedhostdomain)
  * FeedbackURL
  * Name **required**
  * RedirectURL
  * StorageConnectors
    * items [StorageConnector](#storageconnector)
  * UserSettings
    * items [UserSetting](#usersetting)

### UpdateStackResult
* UpdateStackResult `object`
  * Stack
    * AccessEndpoints
      * items [AccessEndpoint](#accessendpoint)
    * ApplicationSettings
      * Enabled
      * S3BucketName
      * SettingsGroup
    * Arn
    * CreatedTime
    * Description
    * DisplayName
    * EmbedHostDomains
      * items [EmbedHostDomain](#embedhostdomain)
    * FeedbackURL
    * Name **required**
    * RedirectURL
    * StackErrors
      * items [StackError](#stackerror)
    * StorageConnectors
      * items [StorageConnector](#storageconnector)
    * UserSettings
      * items [UserSetting](#usersetting)

### UsageReportExecutionErrorCode
* UsageReportExecutionErrorCode `string` (values: RESOURCE_NOT_FOUND, ACCESS_DENIED, INTERNAL_SERVICE_ERROR)

### UsageReportSchedule
* UsageReportSchedule `string` (values: DAILY)

### UsageReportSubscription
* UsageReportSubscription `object`: Describes information about the usage report subscription.
  * LastGeneratedReportDate
  * S3BucketName
  * Schedule
  * SubscriptionErrors
    * items [LastReportGenerationExecutionError](#lastreportgenerationexecutionerror)

### UsageReportSubscriptionList
* UsageReportSubscriptionList `array`
  * items [UsageReportSubscription](#usagereportsubscription)

### User
* User `object`: Describes a user in the user pool.
  * Arn
  * AuthenticationType **required**
  * CreatedTime
  * Enabled
  * FirstName
  * LastName
  * Status
  * UserName

### UserAttributeValue
* UserAttributeValue `string`

### UserId
* UserId `string`

### UserList
* UserList `array`
  * items [User](#user)

### UserSetting
* UserSetting `object`: Describes an action and whether the action is enabled or disabled for users during their streaming sessions.
  * Action **required**
  * Permission **required**

### UserSettingList
* UserSettingList `array`
  * items [UserSetting](#usersetting)

### UserStackAssociation
* UserStackAssociation `object`: Describes a user in the user pool and the associated stack.
  * AuthenticationType **required**
  * SendEmailNotification
  * StackName **required**
  * UserName **required**

### UserStackAssociationError
* UserStackAssociationError `object`: Describes the error that is returned when a user can’t be associated with or disassociated from a stack. 
  * ErrorCode
  * ErrorMessage
  * UserStackAssociation
    * AuthenticationType **required**
    * SendEmailNotification
    * StackName **required**
    * UserName **required**

### UserStackAssociationErrorCode
* UserStackAssociationErrorCode `string` (values: STACK_NOT_FOUND, USER_NAME_NOT_FOUND, DIRECTORY_NOT_FOUND, INTERNAL_ERROR)

### UserStackAssociationErrorList
* UserStackAssociationErrorList `array`
  * items [UserStackAssociationError](#userstackassociationerror)

### UserStackAssociationList
* UserStackAssociationList `array`
  * items [UserStackAssociation](#userstackassociation)

### Username
* Username `string`

### VisibilityType
* VisibilityType `string` (values: PUBLIC, PRIVATE, SHARED)

### VpcConfig
* VpcConfig `object`: Describes VPC configuration information for fleets and image builders.
  * SecurityGroupIds
    * items [String](#string)
  * SubnetIds
    * items [String](#string)


