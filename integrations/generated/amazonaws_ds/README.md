# @datafire/amazonaws_ds

Client library for AWS Directory Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_ds
```
```js
let amazonaws_ds = require('@datafire/amazonaws_ds').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Directory Service</fullname> <p>AWS Directory Service is a web service that makes it easy for you to setup and run directories in the AWS cloud, or connect your AWS resources with an existing on-premises Microsoft Active Directory. This guide provides detailed information about AWS Directory Service operations, data types, parameters, and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS Directory Service and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

## Actions

### AcceptSharedDirectory



```js
amazonaws_ds.AcceptSharedDirectory({
  "SharedDirectoryId": null
}, context)
```

#### Input
* input `object`
  * SharedDirectoryId **required**

#### Output
* output [AcceptSharedDirectoryResult](#acceptshareddirectoryresult)

### AddIpRoutes



```js
amazonaws_ds.AddIpRoutes({
  "DirectoryId": null,
  "IpRoutes": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * IpRoutes **required**
    * items [IpRoute](#iproute)
  * UpdateSecurityGroupForDirectoryControllers

#### Output
* output [AddIpRoutesResult](#addiproutesresult)

### AddRegion



```js
amazonaws_ds.AddRegion({
  "DirectoryId": null,
  "RegionName": null,
  "VPCSettings": {
    "VpcId": null,
    "SubnetIds": null
  }
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * RegionName **required**
  * VPCSettings **required** [DirectoryVpcSettings](#directoryvpcsettings)

#### Output
* output [AddRegionResult](#addregionresult)

### AddTagsToResource



```js
amazonaws_ds.AddTagsToResource({
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
* output [AddTagsToResourceResult](#addtagstoresourceresult)

### CancelSchemaExtension



```js
amazonaws_ds.CancelSchemaExtension({
  "DirectoryId": null,
  "SchemaExtensionId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * SchemaExtensionId **required**

#### Output
* output [CancelSchemaExtensionResult](#cancelschemaextensionresult)

### ConnectDirectory



```js
amazonaws_ds.ConnectDirectory({
  "Name": null,
  "Password": null,
  "Size": null,
  "ConnectSettings": null
}, context)
```

#### Input
* input `object`
  * ConnectSettings **required**
    * CustomerDnsIps **required**
      * items [IpAddr](#ipaddr)
    * CustomerUserName **required**
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * VpcId **required**
  * Description
  * Name **required**
  * Password **required**
  * ShortName
  * Size **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [ConnectDirectoryResult](#connectdirectoryresult)

### CreateAlias



```js
amazonaws_ds.CreateAlias({
  "DirectoryId": null,
  "Alias": null
}, context)
```

#### Input
* input `object`
  * Alias **required**
  * DirectoryId **required**

#### Output
* output [CreateAliasResult](#createaliasresult)

### CreateComputer



```js
amazonaws_ds.CreateComputer({
  "DirectoryId": null,
  "ComputerName": null,
  "Password": null
}, context)
```

#### Input
* input `object`
  * ComputerAttributes
    * items [Attribute](#attribute)
  * ComputerName **required**
  * DirectoryId **required**
  * OrganizationalUnitDistinguishedName
  * Password **required**

#### Output
* output [CreateComputerResult](#createcomputerresult)

### CreateConditionalForwarder



```js
amazonaws_ds.CreateConditionalForwarder({
  "DirectoryId": null,
  "RemoteDomainName": null,
  "DnsIpAddrs": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * DnsIpAddrs **required**
    * items [IpAddr](#ipaddr)
  * RemoteDomainName **required**

#### Output
* output [CreateConditionalForwarderResult](#createconditionalforwarderresult)

### CreateDirectory



```js
amazonaws_ds.CreateDirectory({
  "Name": null,
  "Password": null,
  "Size": null
}, context)
```

#### Input
* input `object`
  * Description
  * Name **required**
  * Password **required**
  * ShortName
  * Size **required**
  * Tags
    * items [Tag](#tag)
  * VpcSettings
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * VpcId **required**

#### Output
* output [CreateDirectoryResult](#createdirectoryresult)

### CreateLogSubscription



```js
amazonaws_ds.CreateLogSubscription({
  "DirectoryId": null,
  "LogGroupName": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * LogGroupName **required**

#### Output
* output [CreateLogSubscriptionResult](#createlogsubscriptionresult)

### CreateMicrosoftAD



```js
amazonaws_ds.CreateMicrosoftAD({
  "Name": null,
  "Password": null,
  "VpcSettings": null
}, context)
```

#### Input
* input `object`
  * Description
  * Edition
  * Name **required**
  * Password **required**
  * ShortName
  * Tags
    * items [Tag](#tag)
  * VpcSettings **required**
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * VpcId **required**

#### Output
* output [CreateMicrosoftADResult](#createmicrosoftadresult)

### CreateSnapshot



```js
amazonaws_ds.CreateSnapshot({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * Name

#### Output
* output [CreateSnapshotResult](#createsnapshotresult)

### CreateTrust



```js
amazonaws_ds.CreateTrust({
  "DirectoryId": null,
  "RemoteDomainName": null,
  "TrustPassword": null,
  "TrustDirection": null
}, context)
```

#### Input
* input `object`
  * ConditionalForwarderIpAddrs
    * items [IpAddr](#ipaddr)
  * DirectoryId **required**
  * RemoteDomainName **required**
  * SelectiveAuth
  * TrustDirection **required**
  * TrustPassword **required**
  * TrustType

#### Output
* output [CreateTrustResult](#createtrustresult)

### DeleteConditionalForwarder



```js
amazonaws_ds.DeleteConditionalForwarder({
  "DirectoryId": null,
  "RemoteDomainName": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * RemoteDomainName **required**

#### Output
* output [DeleteConditionalForwarderResult](#deleteconditionalforwarderresult)

### DeleteDirectory



```js
amazonaws_ds.DeleteDirectory({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**

#### Output
* output [DeleteDirectoryResult](#deletedirectoryresult)

### DeleteLogSubscription



```js
amazonaws_ds.DeleteLogSubscription({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**

#### Output
* output [DeleteLogSubscriptionResult](#deletelogsubscriptionresult)

### DeleteSnapshot



```js
amazonaws_ds.DeleteSnapshot({
  "SnapshotId": null
}, context)
```

#### Input
* input `object`
  * SnapshotId **required**

#### Output
* output [DeleteSnapshotResult](#deletesnapshotresult)

### DeleteTrust



```js
amazonaws_ds.DeleteTrust({
  "TrustId": null
}, context)
```

#### Input
* input `object`
  * DeleteAssociatedConditionalForwarder
  * TrustId **required**

#### Output
* output [DeleteTrustResult](#deletetrustresult)

### DeregisterCertificate



```js
amazonaws_ds.DeregisterCertificate({
  "DirectoryId": null,
  "CertificateId": null
}, context)
```

#### Input
* input `object`
  * CertificateId **required**
  * DirectoryId **required**

#### Output
* output [DeregisterCertificateResult](#deregistercertificateresult)

### DeregisterEventTopic



```js
amazonaws_ds.DeregisterEventTopic({
  "DirectoryId": null,
  "TopicName": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * TopicName **required**

#### Output
* output [DeregisterEventTopicResult](#deregistereventtopicresult)

### DescribeCertificate



```js
amazonaws_ds.DescribeCertificate({
  "DirectoryId": null,
  "CertificateId": null
}, context)
```

#### Input
* input `object`
  * CertificateId **required**
  * DirectoryId **required**

#### Output
* output [DescribeCertificateResult](#describecertificateresult)

### DescribeConditionalForwarders



```js
amazonaws_ds.DescribeConditionalForwarders({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * RemoteDomainNames
    * items [RemoteDomainName](#remotedomainname)

#### Output
* output [DescribeConditionalForwardersResult](#describeconditionalforwardersresult)

### DescribeDirectories



```js
amazonaws_ds.DescribeDirectories({}, context)
```

#### Input
* input `object`
  * DirectoryIds
    * items [DirectoryId](#directoryid)
  * Limit
  * NextToken

#### Output
* output [DescribeDirectoriesResult](#describedirectoriesresult)

### DescribeDomainControllers



```js
amazonaws_ds.DescribeDomainControllers({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * DirectoryId **required**
  * DomainControllerIds
    * items [DomainControllerId](#domaincontrollerid)
  * Limit
  * NextToken

#### Output
* output [DescribeDomainControllersResult](#describedomaincontrollersresult)

### DescribeEventTopics



```js
amazonaws_ds.DescribeEventTopics({}, context)
```

#### Input
* input `object`
  * DirectoryId
  * TopicNames
    * items [TopicName](#topicname)

#### Output
* output [DescribeEventTopicsResult](#describeeventtopicsresult)

### DescribeLDAPSSettings



```js
amazonaws_ds.DescribeLDAPSSettings({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * Limit
  * NextToken
  * Type

#### Output
* output [DescribeLDAPSSettingsResult](#describeldapssettingsresult)

### DescribeRegions



```js
amazonaws_ds.DescribeRegions({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * NextToken
  * RegionName

#### Output
* output [DescribeRegionsResult](#describeregionsresult)

### DescribeSharedDirectories



```js
amazonaws_ds.DescribeSharedDirectories({
  "OwnerDirectoryId": null
}, context)
```

#### Input
* input `object`
  * Limit
  * NextToken
  * OwnerDirectoryId **required**
  * SharedDirectoryIds
    * items [DirectoryId](#directoryid)

#### Output
* output [DescribeSharedDirectoriesResult](#describeshareddirectoriesresult)

### DescribeSnapshots



```js
amazonaws_ds.DescribeSnapshots({}, context)
```

#### Input
* input `object`
  * DirectoryId
  * Limit
  * NextToken
  * SnapshotIds
    * items [SnapshotId](#snapshotid)

#### Output
* output [DescribeSnapshotsResult](#describesnapshotsresult)

### DescribeTrusts



```js
amazonaws_ds.DescribeTrusts({}, context)
```

#### Input
* input `object`
  * DirectoryId
  * Limit
  * NextToken
  * TrustIds
    * items [TrustId](#trustid)

#### Output
* output [DescribeTrustsResult](#describetrustsresult)

### DisableClientAuthentication



```js
amazonaws_ds.DisableClientAuthentication({
  "DirectoryId": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * Type **required**

#### Output
* output [DisableClientAuthenticationResult](#disableclientauthenticationresult)

### DisableLDAPS



```js
amazonaws_ds.DisableLDAPS({
  "DirectoryId": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * Type **required**

#### Output
* output [DisableLDAPSResult](#disableldapsresult)

### DisableRadius



```js
amazonaws_ds.DisableRadius({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**

#### Output
* output [DisableRadiusResult](#disableradiusresult)

### DisableSso



```js
amazonaws_ds.DisableSso({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * Password
  * UserName

#### Output
* output [DisableSsoResult](#disablessoresult)

### EnableClientAuthentication



```js
amazonaws_ds.EnableClientAuthentication({
  "DirectoryId": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * Type **required**

#### Output
* output [EnableClientAuthenticationResult](#enableclientauthenticationresult)

### EnableLDAPS



```js
amazonaws_ds.EnableLDAPS({
  "DirectoryId": null,
  "Type": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * Type **required**

#### Output
* output [EnableLDAPSResult](#enableldapsresult)

### EnableRadius



```js
amazonaws_ds.EnableRadius({
  "DirectoryId": null,
  "RadiusSettings": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * RadiusSettings **required**
    * AuthenticationProtocol
    * DisplayLabel
    * RadiusPort
    * RadiusRetries
    * RadiusServers
      * items [Server](#server)
    * RadiusTimeout
    * SharedSecret
    * UseSameUsername

#### Output
* output [EnableRadiusResult](#enableradiusresult)

### EnableSso



```js
amazonaws_ds.EnableSso({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * Password
  * UserName

#### Output
* output [EnableSsoResult](#enablessoresult)

### GetDirectoryLimits



```js
amazonaws_ds.GetDirectoryLimits({}, context)
```

#### Input
* input `object`

#### Output
* output [GetDirectoryLimitsResult](#getdirectorylimitsresult)

### GetSnapshotLimits



```js
amazonaws_ds.GetSnapshotLimits({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**

#### Output
* output [GetSnapshotLimitsResult](#getsnapshotlimitsresult)

### ListCertificates



```js
amazonaws_ds.ListCertificates({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * Limit
  * NextToken

#### Output
* output [ListCertificatesResult](#listcertificatesresult)

### ListIpRoutes



```js
amazonaws_ds.ListIpRoutes({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * Limit
  * NextToken

#### Output
* output [ListIpRoutesResult](#listiproutesresult)

### ListLogSubscriptions



```js
amazonaws_ds.ListLogSubscriptions({}, context)
```

#### Input
* input `object`
  * DirectoryId
  * Limit
  * NextToken

#### Output
* output [ListLogSubscriptionsResult](#listlogsubscriptionsresult)

### ListSchemaExtensions



```js
amazonaws_ds.ListSchemaExtensions({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * Limit
  * NextToken

#### Output
* output [ListSchemaExtensionsResult](#listschemaextensionsresult)

### ListTagsForResource



```js
amazonaws_ds.ListTagsForResource({
  "ResourceId": null
}, context)
```

#### Input
* input `object`
  * Limit
  * NextToken
  * ResourceId **required**

#### Output
* output [ListTagsForResourceResult](#listtagsforresourceresult)

### RegisterCertificate



```js
amazonaws_ds.RegisterCertificate({
  "DirectoryId": null,
  "CertificateData": null
}, context)
```

#### Input
* input `object`
  * CertificateData **required**
  * ClientCertAuthSettings
    * OCSPUrl
  * DirectoryId **required**
  * Type

#### Output
* output [RegisterCertificateResult](#registercertificateresult)

### RegisterEventTopic



```js
amazonaws_ds.RegisterEventTopic({
  "DirectoryId": null,
  "TopicName": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * TopicName **required**

#### Output
* output [RegisterEventTopicResult](#registereventtopicresult)

### RejectSharedDirectory



```js
amazonaws_ds.RejectSharedDirectory({
  "SharedDirectoryId": null
}, context)
```

#### Input
* input `object`
  * SharedDirectoryId **required**

#### Output
* output [RejectSharedDirectoryResult](#rejectshareddirectoryresult)

### RemoveIpRoutes



```js
amazonaws_ds.RemoveIpRoutes({
  "DirectoryId": null,
  "CidrIps": null
}, context)
```

#### Input
* input `object`
  * CidrIps **required**
    * items [CidrIp](#cidrip)
  * DirectoryId **required**

#### Output
* output [RemoveIpRoutesResult](#removeiproutesresult)

### RemoveRegion



```js
amazonaws_ds.RemoveRegion({
  "DirectoryId": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**

#### Output
* output [RemoveRegionResult](#removeregionresult)

### RemoveTagsFromResource



```js
amazonaws_ds.RemoveTagsFromResource({
  "ResourceId": null,
  "TagKeys": null
}, context)
```

#### Input
* input `object`
  * ResourceId **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

#### Output
* output [RemoveTagsFromResourceResult](#removetagsfromresourceresult)

### ResetUserPassword



```js
amazonaws_ds.ResetUserPassword({
  "DirectoryId": null,
  "UserName": null,
  "NewPassword": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * NewPassword **required**
  * UserName **required**

#### Output
* output [ResetUserPasswordResult](#resetuserpasswordresult)

### RestoreFromSnapshot



```js
amazonaws_ds.RestoreFromSnapshot({
  "SnapshotId": null
}, context)
```

#### Input
* input `object`
  * SnapshotId **required**

#### Output
* output [RestoreFromSnapshotResult](#restorefromsnapshotresult)

### ShareDirectory



```js
amazonaws_ds.ShareDirectory({
  "DirectoryId": null,
  "ShareTarget": null,
  "ShareMethod": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * ShareMethod **required**
  * ShareNotes
  * ShareTarget **required**
    * Id **required**
    * Type **required**

#### Output
* output [ShareDirectoryResult](#sharedirectoryresult)

### StartSchemaExtension



```js
amazonaws_ds.StartSchemaExtension({
  "DirectoryId": null,
  "CreateSnapshotBeforeSchemaExtension": null,
  "LdifContent": null,
  "Description": null
}, context)
```

#### Input
* input `object`
  * CreateSnapshotBeforeSchemaExtension **required**
  * Description **required**
  * DirectoryId **required**
  * LdifContent **required**

#### Output
* output [StartSchemaExtensionResult](#startschemaextensionresult)

### UnshareDirectory



```js
amazonaws_ds.UnshareDirectory({
  "DirectoryId": null,
  "UnshareTarget": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * UnshareTarget **required**
    * Id **required**
    * Type **required**

#### Output
* output [UnshareDirectoryResult](#unsharedirectoryresult)

### UpdateConditionalForwarder



```js
amazonaws_ds.UpdateConditionalForwarder({
  "DirectoryId": null,
  "RemoteDomainName": null,
  "DnsIpAddrs": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * DnsIpAddrs **required**
    * items [IpAddr](#ipaddr)
  * RemoteDomainName **required**

#### Output
* output [UpdateConditionalForwarderResult](#updateconditionalforwarderresult)

### UpdateNumberOfDomainControllers



```js
amazonaws_ds.UpdateNumberOfDomainControllers({
  "DirectoryId": null,
  "DesiredNumber": null
}, context)
```

#### Input
* input `object`
  * DesiredNumber **required**
  * DirectoryId **required**

#### Output
* output [UpdateNumberOfDomainControllersResult](#updatenumberofdomaincontrollersresult)

### UpdateRadius



```js
amazonaws_ds.UpdateRadius({
  "DirectoryId": null,
  "RadiusSettings": null
}, context)
```

#### Input
* input `object`
  * DirectoryId **required**
  * RadiusSettings **required**
    * AuthenticationProtocol
    * DisplayLabel
    * RadiusPort
    * RadiusRetries
    * RadiusServers
      * items [Server](#server)
    * RadiusTimeout
    * SharedSecret
    * UseSameUsername

#### Output
* output [UpdateRadiusResult](#updateradiusresult)

### UpdateTrust



```js
amazonaws_ds.UpdateTrust({
  "TrustId": null
}, context)
```

#### Input
* input `object`
  * SelectiveAuth
  * TrustId **required**

#### Output
* output [UpdateTrustResult](#updatetrustresult)

### VerifyTrust



```js
amazonaws_ds.VerifyTrust({
  "TrustId": null
}, context)
```

#### Input
* input `object`
  * TrustId **required**

#### Output
* output [VerifyTrustResult](#verifytrustresult)



## Definitions

### AcceptSharedDirectoryRequest
* AcceptSharedDirectoryRequest `object`
  * SharedDirectoryId **required**

### AcceptSharedDirectoryResult
* AcceptSharedDirectoryResult `object`
  * SharedDirectory
    * CreatedDateTime
    * LastUpdatedDateTime
    * OwnerAccountId
    * OwnerDirectoryId
    * ShareMethod
    * ShareNotes
    * ShareStatus
    * SharedAccountId
    * SharedDirectoryId

### AccessDeniedException


### AccessUrl
* AccessUrl `string`

### AddIpRoutesRequest
* AddIpRoutesRequest `object`
  * DirectoryId **required**
  * IpRoutes **required**
    * items [IpRoute](#iproute)
  * UpdateSecurityGroupForDirectoryControllers

### AddIpRoutesResult
* AddIpRoutesResult `object`

### AddRegionRequest
* AddRegionRequest `object`
  * DirectoryId **required**
  * RegionName **required**
  * VPCSettings **required** [DirectoryVpcSettings](#directoryvpcsettings)

### AddRegionResult
* AddRegionResult `object`

### AddTagsToResourceRequest
* AddTagsToResourceRequest `object`
  * ResourceId **required**
  * Tags **required**
    * items [Tag](#tag)

### AddTagsToResourceResult
* AddTagsToResourceResult `object`

### AddedDateTime
* AddedDateTime `string`

### AdditionalRegions
* AdditionalRegions `array`
  * items [RegionName](#regionname)

### AliasName
* AliasName `string`

### Attribute
* Attribute `object`: Represents a named directory attribute.
  * Name
  * Value

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `string`

### Attributes
* Attributes `array`
  * items [Attribute](#attribute)

### AuthenticationFailedException


### AvailabilityZone
* AvailabilityZone `string`

### AvailabilityZones
* AvailabilityZones `array`
  * items [AvailabilityZone](#availabilityzone)

### CancelSchemaExtensionRequest
* CancelSchemaExtensionRequest `object`
  * DirectoryId **required**
  * SchemaExtensionId **required**

### CancelSchemaExtensionResult
* CancelSchemaExtensionResult `object`

### Certificate
* Certificate `object`: Information about the certificate.
  * CertificateId
  * ClientCertAuthSettings
    * OCSPUrl
  * CommonName
  * ExpiryDateTime
  * RegisteredDateTime
  * State
  * StateReason
  * Type

### CertificateAlreadyExistsException


### CertificateCN
* CertificateCN `string`

### CertificateData
* CertificateData `string`

### CertificateDoesNotExistException


### CertificateExpiryDateTime
* CertificateExpiryDateTime `string`

### CertificateId
* CertificateId `string`

### CertificateInUseException


### CertificateInfo
* CertificateInfo `object`: Contains general information about a certificate.
  * CertificateId
  * CommonName
  * ExpiryDateTime
  * State
  * Type

### CertificateLimitExceededException


### CertificateRegisteredDateTime
* CertificateRegisteredDateTime `string`

### CertificateState
* CertificateState `string` (values: Registering, Registered, RegisterFailed, Deregistering, Deregistered, DeregisterFailed)

### CertificateStateReason
* CertificateStateReason `string`

### CertificateType
* CertificateType `string` (values: ClientCertAuth, ClientLDAPS)

### CertificatesInfo
* CertificatesInfo `array`
  * items [CertificateInfo](#certificateinfo)

### CidrIp
* CidrIp `string`

### CidrIps
* CidrIps `array`
  * items [CidrIp](#cidrip)

### ClientAuthenticationType
* ClientAuthenticationType `string` (values: SmartCard)

### ClientCertAuthSettings
* ClientCertAuthSettings `object`: Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations. 
  * OCSPUrl

### ClientException


### CloudOnlyDirectoriesLimitReached
* CloudOnlyDirectoriesLimitReached `boolean`

### Computer
* Computer `object`: Contains information about a computer account in a directory.
  * ComputerAttributes
    * items [Attribute](#attribute)
  * ComputerId
  * ComputerName

### ComputerName
* ComputerName `string`

### ComputerPassword
* ComputerPassword `string`

### ConditionalForwarder
* ConditionalForwarder `object`: Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.
  * DnsIpAddrs
    * items [IpAddr](#ipaddr)
  * RemoteDomainName
  * ReplicationScope

### ConditionalForwarders
* ConditionalForwarders `array`
  * items [ConditionalForwarder](#conditionalforwarder)

### ConnectDirectoryRequest
* ConnectDirectoryRequest `object`: Contains the inputs for the <a>ConnectDirectory</a> operation.
  * ConnectSettings **required**
    * CustomerDnsIps **required**
      * items [IpAddr](#ipaddr)
    * CustomerUserName **required**
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * VpcId **required**
  * Description
  * Name **required**
  * Password **required**
  * ShortName
  * Size **required**
  * Tags
    * items [Tag](#tag)

### ConnectDirectoryResult
* ConnectDirectoryResult `object`: Contains the results of the <a>ConnectDirectory</a> operation.
  * DirectoryId

### ConnectPassword
* ConnectPassword `string`

### ConnectedDirectoriesLimitReached
* ConnectedDirectoriesLimitReached `boolean`

### CreateAliasRequest
* CreateAliasRequest `object`: Contains the inputs for the <a>CreateAlias</a> operation.
  * Alias **required**
  * DirectoryId **required**

### CreateAliasResult
* CreateAliasResult `object`: Contains the results of the <a>CreateAlias</a> operation.
  * Alias
  * DirectoryId

### CreateComputerRequest
* CreateComputerRequest `object`: Contains the inputs for the <a>CreateComputer</a> operation.
  * ComputerAttributes
    * items [Attribute](#attribute)
  * ComputerName **required**
  * DirectoryId **required**
  * OrganizationalUnitDistinguishedName
  * Password **required**

### CreateComputerResult
* CreateComputerResult `object`: Contains the results for the <a>CreateComputer</a> operation.
  * Computer
    * ComputerAttributes
      * items [Attribute](#attribute)
    * ComputerId
    * ComputerName

### CreateConditionalForwarderRequest
* CreateConditionalForwarderRequest `object`: Initiates the creation of a conditional forwarder for your AWS Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain.
  * DirectoryId **required**
  * DnsIpAddrs **required**
    * items [IpAddr](#ipaddr)
  * RemoteDomainName **required**

### CreateConditionalForwarderResult
* CreateConditionalForwarderResult `object`: The result of a CreateConditinalForwarder request.

### CreateDirectoryRequest
* CreateDirectoryRequest `object`: Contains the inputs for the <a>CreateDirectory</a> operation. 
  * Description
  * Name **required**
  * Password **required**
  * ShortName
  * Size **required**
  * Tags
    * items [Tag](#tag)
  * VpcSettings
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * VpcId **required**

### CreateDirectoryResult
* CreateDirectoryResult `object`: Contains the results of the <a>CreateDirectory</a> operation.
  * DirectoryId

### CreateLogSubscriptionRequest
* CreateLogSubscriptionRequest `object`
  * DirectoryId **required**
  * LogGroupName **required**

### CreateLogSubscriptionResult
* CreateLogSubscriptionResult `object`

### CreateMicrosoftADRequest
* CreateMicrosoftADRequest `object`: Creates an AWS Managed Microsoft AD directory.
  * Description
  * Edition
  * Name **required**
  * Password **required**
  * ShortName
  * Tags
    * items [Tag](#tag)
  * VpcSettings **required**
    * SubnetIds **required**
      * items [SubnetId](#subnetid)
    * VpcId **required**

### CreateMicrosoftADResult
* CreateMicrosoftADResult `object`: Result of a CreateMicrosoftAD request.
  * DirectoryId

### CreateSnapshotBeforeSchemaExtension
* CreateSnapshotBeforeSchemaExtension `boolean`

### CreateSnapshotRequest
* CreateSnapshotRequest `object`: Contains the inputs for the <a>CreateSnapshot</a> operation.
  * DirectoryId **required**
  * Name

### CreateSnapshotResult
* CreateSnapshotResult `object`: Contains the results of the <a>CreateSnapshot</a> operation.
  * SnapshotId

### CreateTrustRequest
* CreateTrustRequest `object`: <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your AWS Managed Microsoft AD directory, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the AWS side of a trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p>
  * ConditionalForwarderIpAddrs
    * items [IpAddr](#ipaddr)
  * DirectoryId **required**
  * RemoteDomainName **required**
  * SelectiveAuth
  * TrustDirection **required**
  * TrustPassword **required**
  * TrustType

### CreateTrustResult
* CreateTrustResult `object`: The result of a CreateTrust request.
  * TrustId

### CreatedDateTime
* CreatedDateTime `string`

### CustomerId
* CustomerId `string`

### CustomerUserName
* CustomerUserName `string`

### DeleteAssociatedConditionalForwarder
* DeleteAssociatedConditionalForwarder `boolean`

### DeleteConditionalForwarderRequest
* DeleteConditionalForwarderRequest `object`: Deletes a conditional forwarder.
  * DirectoryId **required**
  * RemoteDomainName **required**

### DeleteConditionalForwarderResult
* DeleteConditionalForwarderResult `object`: The result of a DeleteConditionalForwarder request.

### DeleteDirectoryRequest
* DeleteDirectoryRequest `object`: Contains the inputs for the <a>DeleteDirectory</a> operation.
  * DirectoryId **required**

### DeleteDirectoryResult
* DeleteDirectoryResult `object`: Contains the results of the <a>DeleteDirectory</a> operation.
  * DirectoryId

### DeleteLogSubscriptionRequest
* DeleteLogSubscriptionRequest `object`
  * DirectoryId **required**

### DeleteLogSubscriptionResult
* DeleteLogSubscriptionResult `object`

### DeleteSnapshotRequest
* DeleteSnapshotRequest `object`: Contains the inputs for the <a>DeleteSnapshot</a> operation.
  * SnapshotId **required**

### DeleteSnapshotResult
* DeleteSnapshotResult `object`: Contains the results of the <a>DeleteSnapshot</a> operation.
  * SnapshotId

### DeleteTrustRequest
* DeleteTrustRequest `object`: Deletes the local side of an existing trust relationship between the AWS Managed Microsoft AD directory and the external domain.
  * DeleteAssociatedConditionalForwarder
  * TrustId **required**

### DeleteTrustResult
* DeleteTrustResult `object`: The result of a DeleteTrust request.
  * TrustId

### DeregisterCertificateRequest
* DeregisterCertificateRequest `object`
  * CertificateId **required**
  * DirectoryId **required**

### DeregisterCertificateResult
* DeregisterCertificateResult `object`

### DeregisterEventTopicRequest
* DeregisterEventTopicRequest `object`: Removes the specified directory as a publisher to the specified SNS topic.
  * DirectoryId **required**
  * TopicName **required**

### DeregisterEventTopicResult
* DeregisterEventTopicResult `object`: The result of a DeregisterEventTopic request.

### DescribeCertificateRequest
* DescribeCertificateRequest `object`
  * CertificateId **required**
  * DirectoryId **required**

### DescribeCertificateResult
* DescribeCertificateResult `object`
  * Certificate
    * CertificateId
    * ClientCertAuthSettings
      * OCSPUrl
    * CommonName
    * ExpiryDateTime
    * RegisteredDateTime
    * State
    * StateReason
    * Type

### DescribeConditionalForwardersRequest
* DescribeConditionalForwardersRequest `object`: Describes a conditional forwarder.
  * DirectoryId **required**
  * RemoteDomainNames
    * items [RemoteDomainName](#remotedomainname)

### DescribeConditionalForwardersResult
* DescribeConditionalForwardersResult `object`: The result of a DescribeConditionalForwarder request.
  * ConditionalForwarders
    * items [ConditionalForwarder](#conditionalforwarder)

### DescribeDirectoriesRequest
* DescribeDirectoriesRequest `object`: Contains the inputs for the <a>DescribeDirectories</a> operation.
  * DirectoryIds
    * items [DirectoryId](#directoryid)
  * Limit
  * NextToken

### DescribeDirectoriesResult
* DescribeDirectoriesResult `object`: Contains the results of the <a>DescribeDirectories</a> operation.
  * DirectoryDescriptions
    * items [DirectoryDescription](#directorydescription)
  * NextToken

### DescribeDomainControllersRequest
* DescribeDomainControllersRequest `object`
  * DirectoryId **required**
  * DomainControllerIds
    * items [DomainControllerId](#domaincontrollerid)
  * Limit
  * NextToken

### DescribeDomainControllersResult
* DescribeDomainControllersResult `object`
  * DomainControllers
    * items [DomainController](#domaincontroller)
  * NextToken

### DescribeEventTopicsRequest
* DescribeEventTopicsRequest `object`: Describes event topics.
  * DirectoryId
  * TopicNames
    * items [TopicName](#topicname)

### DescribeEventTopicsResult
* DescribeEventTopicsResult `object`: The result of a DescribeEventTopic request.
  * EventTopics
    * items [EventTopic](#eventtopic)

### DescribeLDAPSSettingsRequest
* DescribeLDAPSSettingsRequest `object`
  * DirectoryId **required**
  * Limit
  * NextToken
  * Type

### DescribeLDAPSSettingsResult
* DescribeLDAPSSettingsResult `object`
  * LDAPSSettingsInfo
    * items [LDAPSSettingInfo](#ldapssettinginfo)
  * NextToken

### DescribeRegionsRequest
* DescribeRegionsRequest `object`
  * DirectoryId **required**
  * NextToken
  * RegionName

### DescribeRegionsResult
* DescribeRegionsResult `object`
  * NextToken
  * RegionsDescription
    * items [RegionDescription](#regiondescription)

### DescribeSharedDirectoriesRequest
* DescribeSharedDirectoriesRequest `object`
  * Limit
  * NextToken
  * OwnerDirectoryId **required**
  * SharedDirectoryIds
    * items [DirectoryId](#directoryid)

### DescribeSharedDirectoriesResult
* DescribeSharedDirectoriesResult `object`
  * NextToken
  * SharedDirectories
    * items [SharedDirectory](#shareddirectory)

### DescribeSnapshotsRequest
* DescribeSnapshotsRequest `object`: Contains the inputs for the <a>DescribeSnapshots</a> operation.
  * DirectoryId
  * Limit
  * NextToken
  * SnapshotIds
    * items [SnapshotId](#snapshotid)

### DescribeSnapshotsResult
* DescribeSnapshotsResult `object`: Contains the results of the <a>DescribeSnapshots</a> operation.
  * NextToken
  * Snapshots
    * items [Snapshot](#snapshot)

### DescribeTrustsRequest
* DescribeTrustsRequest `object`: Describes the trust relationships for a particular AWS Managed Microsoft AD directory. If no input parameters are are provided, such as directory ID or trust ID, this request describes all the trust relationships.
  * DirectoryId
  * Limit
  * NextToken
  * TrustIds
    * items [TrustId](#trustid)

### DescribeTrustsResult
* DescribeTrustsResult `object`: The result of a DescribeTrust request.
  * NextToken
  * Trusts
    * items [Trust](#trust)

### Description
* Description `string`

### DesiredNumberOfDomainControllers
* DesiredNumberOfDomainControllers `integer`

### DirectoryAlreadyInRegionException


### DirectoryAlreadySharedException


### DirectoryConnectSettings
* DirectoryConnectSettings `object`: Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.
  * CustomerDnsIps **required**
    * items [IpAddr](#ipaddr)
  * CustomerUserName **required**
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * VpcId **required**

### DirectoryConnectSettingsDescription
* DirectoryConnectSettingsDescription `object`: Contains information about an AD Connector directory.
  * AvailabilityZones
    * items [AvailabilityZone](#availabilityzone)
  * ConnectIps
    * items [IpAddr](#ipaddr)
  * CustomerUserName
  * SecurityGroupId
  * SubnetIds
    * items [SubnetId](#subnetid)
  * VpcId

### DirectoryDescription
* DirectoryDescription `object`: Contains information about an AWS Directory Service directory.
  * AccessUrl
  * Alias
  * ConnectSettings
    * AvailabilityZones
      * items [AvailabilityZone](#availabilityzone)
    * ConnectIps
      * items [IpAddr](#ipaddr)
    * CustomerUserName
    * SecurityGroupId
    * SubnetIds
      * items [SubnetId](#subnetid)
    * VpcId
  * Description
  * DesiredNumberOfDomainControllers
  * DirectoryId
  * DnsIpAddrs
    * items [IpAddr](#ipaddr)
  * Edition
  * LaunchTime
  * Name
  * OwnerDirectoryDescription
    * AccountId
    * DirectoryId
    * DnsIpAddrs
      * items [IpAddr](#ipaddr)
    * RadiusSettings
      * AuthenticationProtocol
      * DisplayLabel
      * RadiusPort
      * RadiusRetries
      * RadiusServers
        * items [Server](#server)
      * RadiusTimeout
      * SharedSecret
      * UseSameUsername
    * RadiusStatus
    * VpcSettings
      * AvailabilityZones
        * items [AvailabilityZone](#availabilityzone)
      * SecurityGroupId
      * SubnetIds
        * items [SubnetId](#subnetid)
      * VpcId
  * RadiusSettings
    * AuthenticationProtocol
    * DisplayLabel
    * RadiusPort
    * RadiusRetries
    * RadiusServers
      * items [Server](#server)
    * RadiusTimeout
    * SharedSecret
    * UseSameUsername
  * RadiusStatus
  * RegionsInfo
    * AdditionalRegions
      * items [RegionName](#regionname)
    * PrimaryRegion
  * ShareMethod
  * ShareNotes
  * ShareStatus
  * ShortName
  * Size
  * SsoEnabled
  * Stage
  * StageLastUpdatedDateTime
  * StageReason
  * Type
  * VpcSettings
    * AvailabilityZones
      * items [AvailabilityZone](#availabilityzone)
    * SecurityGroupId
    * SubnetIds
      * items [SubnetId](#subnetid)
    * VpcId

### DirectoryDescriptions
* DirectoryDescriptions `array`: A list of directory descriptions.
  * items [DirectoryDescription](#directorydescription)

### DirectoryDoesNotExistException


### DirectoryEdition
* DirectoryEdition `string` (values: Enterprise, Standard)

### DirectoryId
* DirectoryId `string`

### DirectoryIds
* DirectoryIds `array`: A list of directory identifiers.
  * items [DirectoryId](#directoryid)

### DirectoryLimitExceededException


### DirectoryLimits
* DirectoryLimits `object`: Contains directory limit information for a Region.
  * CloudOnlyDirectoriesCurrentCount
  * CloudOnlyDirectoriesLimit
  * CloudOnlyDirectoriesLimitReached
  * CloudOnlyMicrosoftADCurrentCount
  * CloudOnlyMicrosoftADLimit
  * CloudOnlyMicrosoftADLimitReached
  * ConnectedDirectoriesCurrentCount
  * ConnectedDirectoriesLimit
  * ConnectedDirectoriesLimitReached

### DirectoryName
* DirectoryName `string`

### DirectoryNotSharedException


### DirectoryShortName
* DirectoryShortName `string`

### DirectorySize
* DirectorySize `string` (values: Small, Large)

### DirectoryStage
* DirectoryStage `string` (values: Requested, Creating, Created, Active, Inoperable, Impaired, Restoring, RestoreFailed, Deleting, Deleted, Failed)

### DirectoryType
* DirectoryType `string` (values: SimpleAD, ADConnector, MicrosoftAD, SharedMicrosoftAD)

### DirectoryUnavailableException


### DirectoryVpcSettings
* DirectoryVpcSettings `object`: Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
  * SubnetIds **required**
    * items [SubnetId](#subnetid)
  * VpcId **required**

### DirectoryVpcSettingsDescription
* DirectoryVpcSettingsDescription `object`: Contains information about the directory.
  * AvailabilityZones
    * items [AvailabilityZone](#availabilityzone)
  * SecurityGroupId
  * SubnetIds
    * items [SubnetId](#subnetid)
  * VpcId

### DisableClientAuthenticationRequest
* DisableClientAuthenticationRequest `object`
  * DirectoryId **required**
  * Type **required**

### DisableClientAuthenticationResult
* DisableClientAuthenticationResult `object`

### DisableLDAPSRequest
* DisableLDAPSRequest `object`
  * DirectoryId **required**
  * Type **required**

### DisableLDAPSResult
* DisableLDAPSResult `object`

### DisableRadiusRequest
* DisableRadiusRequest `object`: Contains the inputs for the <a>DisableRadius</a> operation.
  * DirectoryId **required**

### DisableRadiusResult
* DisableRadiusResult `object`: Contains the results of the <a>DisableRadius</a> operation.

### DisableSsoRequest
* DisableSsoRequest `object`: Contains the inputs for the <a>DisableSso</a> operation.
  * DirectoryId **required**
  * Password
  * UserName

### DisableSsoResult
* DisableSsoResult `object`: Contains the results of the <a>DisableSso</a> operation.

### DnsIpAddrs
* DnsIpAddrs `array`
  * items [IpAddr](#ipaddr)

### DomainController
* DomainController `object`: Contains information about the domain controllers for a specified directory.
  * AvailabilityZone
  * DirectoryId
  * DnsIpAddr
  * DomainControllerId
  * LaunchTime
  * Status
  * StatusLastUpdatedDateTime
  * StatusReason
  * SubnetId
  * VpcId

### DomainControllerId
* DomainControllerId `string`

### DomainControllerIds
* DomainControllerIds `array`
  * items [DomainControllerId](#domaincontrollerid)

### DomainControllerLimitExceededException


### DomainControllerStatus
* DomainControllerStatus `string` (values: Creating, Active, Impaired, Restoring, Deleting, Deleted, Failed)

### DomainControllerStatusReason
* DomainControllerStatusReason `string`

### DomainControllers
* DomainControllers `array`
  * items [DomainController](#domaincontroller)

### EnableClientAuthenticationRequest
* EnableClientAuthenticationRequest `object`
  * DirectoryId **required**
  * Type **required**

### EnableClientAuthenticationResult
* EnableClientAuthenticationResult `object`

### EnableLDAPSRequest
* EnableLDAPSRequest `object`
  * DirectoryId **required**
  * Type **required**

### EnableLDAPSResult
* EnableLDAPSResult `object`

### EnableRadiusRequest
* EnableRadiusRequest `object`: Contains the inputs for the <a>EnableRadius</a> operation.
  * DirectoryId **required**
  * RadiusSettings **required**
    * AuthenticationProtocol
    * DisplayLabel
    * RadiusPort
    * RadiusRetries
    * RadiusServers
      * items [Server](#server)
    * RadiusTimeout
    * SharedSecret
    * UseSameUsername

### EnableRadiusResult
* EnableRadiusResult `object`: Contains the results of the <a>EnableRadius</a> operation.

### EnableSsoRequest
* EnableSsoRequest `object`: Contains the inputs for the <a>EnableSso</a> operation.
  * DirectoryId **required**
  * Password
  * UserName

### EnableSsoResult
* EnableSsoResult `object`: Contains the results of the <a>EnableSso</a> operation.

### EndDateTime
* EndDateTime `string`

### EntityAlreadyExistsException


### EntityDoesNotExistException


### EventTopic
* EventTopic `object`: Information about SNS topic and AWS Directory Service directory associations.
  * CreatedDateTime
  * DirectoryId
  * Status
  * TopicArn
  * TopicName

### EventTopics
* EventTopics `array`
  * items [EventTopic](#eventtopic)

### GetDirectoryLimitsRequest
* GetDirectoryLimitsRequest `object`: Contains the inputs for the <a>GetDirectoryLimits</a> operation.

### GetDirectoryLimitsResult
* GetDirectoryLimitsResult `object`: Contains the results of the <a>GetDirectoryLimits</a> operation.
  * DirectoryLimits
    * CloudOnlyDirectoriesCurrentCount
    * CloudOnlyDirectoriesLimit
    * CloudOnlyDirectoriesLimitReached
    * CloudOnlyMicrosoftADCurrentCount
    * CloudOnlyMicrosoftADLimit
    * CloudOnlyMicrosoftADLimitReached
    * ConnectedDirectoriesCurrentCount
    * ConnectedDirectoriesLimit
    * ConnectedDirectoriesLimitReached

### GetSnapshotLimitsRequest
* GetSnapshotLimitsRequest `object`: Contains the inputs for the <a>GetSnapshotLimits</a> operation.
  * DirectoryId **required**

### GetSnapshotLimitsResult
* GetSnapshotLimitsResult `object`: Contains the results of the <a>GetSnapshotLimits</a> operation.
  * SnapshotLimits
    * ManualSnapshotsCurrentCount
    * ManualSnapshotsLimit
    * ManualSnapshotsLimitReached

### InsufficientPermissionsException


### InvalidCertificateException


### InvalidClientAuthStatusException


### InvalidLDAPSStatusException


### InvalidNextTokenException


### InvalidParameterException


### InvalidPasswordException


### InvalidTargetException


### IpAddr
* IpAddr `string`

### IpAddrs
* IpAddrs `array`
  * items [IpAddr](#ipaddr)

### IpRoute
* IpRoute `object`: IP address block. This is often the address block of the DNS server used for your on-premises domain. 
  * CidrIp
  * Description

### IpRouteInfo
* IpRouteInfo `object`: Information about one or more IP address blocks.
  * AddedDateTime
  * CidrIp
  * Description
  * DirectoryId
  * IpRouteStatusMsg
  * IpRouteStatusReason

### IpRouteLimitExceededException


### IpRouteStatusMsg
* IpRouteStatusMsg `string` (values: Adding, Added, Removing, Removed, AddFailed, RemoveFailed)

### IpRouteStatusReason
* IpRouteStatusReason `string`

### IpRoutes
* IpRoutes `array`
  * items [IpRoute](#iproute)

### IpRoutesInfo
* IpRoutesInfo `array`
  * items [IpRouteInfo](#iprouteinfo)

### LDAPSSettingInfo
* LDAPSSettingInfo `object`: Contains general information about the LDAPS settings.
  * LDAPSStatus
  * LDAPSStatusReason
  * LastUpdatedDateTime

### LDAPSSettingsInfo
* LDAPSSettingsInfo `array`
  * items [LDAPSSettingInfo](#ldapssettinginfo)

### LDAPSStatus
* LDAPSStatus `string` (values: Enabling, Enabled, EnableFailed, Disabled)

### LDAPSStatusReason
* LDAPSStatusReason `string`

### LDAPSType
* LDAPSType `string` (values: Client)

### LastUpdatedDateTime
* LastUpdatedDateTime `string`

### LaunchTime
* LaunchTime `string`

### LdifContent
* LdifContent `string`

### Limit
* Limit `integer`

### ListCertificatesRequest
* ListCertificatesRequest `object`
  * DirectoryId **required**
  * Limit
  * NextToken

### ListCertificatesResult
* ListCertificatesResult `object`
  * CertificatesInfo
    * items [CertificateInfo](#certificateinfo)
  * NextToken

### ListIpRoutesRequest
* ListIpRoutesRequest `object`
  * DirectoryId **required**
  * Limit
  * NextToken

### ListIpRoutesResult
* ListIpRoutesResult `object`
  * IpRoutesInfo
    * items [IpRouteInfo](#iprouteinfo)
  * NextToken

### ListLogSubscriptionsRequest
* ListLogSubscriptionsRequest `object`
  * DirectoryId
  * Limit
  * NextToken

### ListLogSubscriptionsResult
* ListLogSubscriptionsResult `object`
  * LogSubscriptions
    * items [LogSubscription](#logsubscription)
  * NextToken

### ListSchemaExtensionsRequest
* ListSchemaExtensionsRequest `object`
  * DirectoryId **required**
  * Limit
  * NextToken

### ListSchemaExtensionsResult
* ListSchemaExtensionsResult `object`
  * NextToken
  * SchemaExtensionsInfo
    * items [SchemaExtensionInfo](#schemaextensioninfo)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * Limit
  * NextToken
  * ResourceId **required**

### ListTagsForResourceResult
* ListTagsForResourceResult `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### LogGroupName
* LogGroupName `string`

### LogSubscription
* LogSubscription `object`: Represents a log subscription, which tracks real-time data from a chosen log group to a specified destination.
  * DirectoryId
  * LogGroupName
  * SubscriptionCreatedDateTime

### LogSubscriptions
* LogSubscriptions `array`
  * items [LogSubscription](#logsubscription)

### ManualSnapshotsLimitReached
* ManualSnapshotsLimitReached `boolean`

### NextToken
* NextToken `string`

### NoAvailableCertificateException


### Notes
* Notes `string`

### OCSPUrl
* OCSPUrl `string`

### OrganizationalUnitDN
* OrganizationalUnitDN `string`

### OrganizationsException


### OwnerDirectoryDescription
* OwnerDirectoryDescription `object`: Describes the directory owner account details that have been shared to the directory consumer account.
  * AccountId
  * DirectoryId
  * DnsIpAddrs
    * items [IpAddr](#ipaddr)
  * RadiusSettings
    * AuthenticationProtocol
    * DisplayLabel
    * RadiusPort
    * RadiusRetries
    * RadiusServers
      * items [Server](#server)
    * RadiusTimeout
    * SharedSecret
    * UseSameUsername
  * RadiusStatus
  * VpcSettings
    * AvailabilityZones
      * items [AvailabilityZone](#availabilityzone)
    * SecurityGroupId
    * SubnetIds
      * items [SubnetId](#subnetid)
    * VpcId

### PageLimit
* PageLimit `integer`

### Password
* Password `string`

### PortNumber
* PortNumber `integer`

### RadiusAuthenticationProtocol
* RadiusAuthenticationProtocol `string` (values: PAP, CHAP, MS-CHAPv1, MS-CHAPv2)

### RadiusDisplayLabel
* RadiusDisplayLabel `string`

### RadiusRetries
* RadiusRetries `integer`

### RadiusSettings
* RadiusSettings `object`: Contains information about a Remote Authentication Dial In User Service (RADIUS) server.
  * AuthenticationProtocol
  * DisplayLabel
  * RadiusPort
  * RadiusRetries
  * RadiusServers
    * items [Server](#server)
  * RadiusTimeout
  * SharedSecret
  * UseSameUsername

### RadiusSharedSecret
* RadiusSharedSecret `string`

### RadiusStatus
* RadiusStatus `string` (values: Creating, Completed, Failed)

### RadiusTimeout
* RadiusTimeout `integer`

### RegionDescription
* RegionDescription `object`: The replicated Region information for a directory.
  * DesiredNumberOfDomainControllers
  * DirectoryId
  * LastUpdatedDateTime
  * LaunchTime
  * RegionName
  * RegionType
  * Status
  * StatusLastUpdatedDateTime
  * VpcSettings [DirectoryVpcSettings](#directoryvpcsettings)

### RegionLimitExceededException


### RegionName
* RegionName `string`

### RegionType
* RegionType `string` (values: Primary, Additional)

### RegionsDescription
* RegionsDescription `array`
  * items [RegionDescription](#regiondescription)

### RegionsInfo
* RegionsInfo `object`: Provides information about the Regions that are configured for multi-Region replication.
  * AdditionalRegions
    * items [RegionName](#regionname)
  * PrimaryRegion

### RegisterCertificateRequest
* RegisterCertificateRequest `object`
  * CertificateData **required**
  * ClientCertAuthSettings
    * OCSPUrl
  * DirectoryId **required**
  * Type

### RegisterCertificateResult
* RegisterCertificateResult `object`
  * CertificateId

### RegisterEventTopicRequest
* RegisterEventTopicRequest `object`: Registers a new event topic.
  * DirectoryId **required**
  * TopicName **required**

### RegisterEventTopicResult
* RegisterEventTopicResult `object`: The result of a RegisterEventTopic request.

### RejectSharedDirectoryRequest
* RejectSharedDirectoryRequest `object`
  * SharedDirectoryId **required**

### RejectSharedDirectoryResult
* RejectSharedDirectoryResult `object`
  * SharedDirectoryId

### RemoteDomainName
* RemoteDomainName `string`

### RemoteDomainNames
* RemoteDomainNames `array`
  * items [RemoteDomainName](#remotedomainname)

### RemoveIpRoutesRequest
* RemoveIpRoutesRequest `object`
  * CidrIps **required**
    * items [CidrIp](#cidrip)
  * DirectoryId **required**

### RemoveIpRoutesResult
* RemoveIpRoutesResult `object`

### RemoveRegionRequest
* RemoveRegionRequest `object`
  * DirectoryId **required**

### RemoveRegionResult
* RemoveRegionResult `object`

### RemoveTagsFromResourceRequest
* RemoveTagsFromResourceRequest `object`
  * ResourceId **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### RemoveTagsFromResourceResult
* RemoveTagsFromResourceResult `object`

### ReplicationScope
* ReplicationScope `string` (values: Domain)

### RequestId
* RequestId `string`: The AWS request identifier.

### ResetUserPasswordRequest
* ResetUserPasswordRequest `object`
  * DirectoryId **required**
  * NewPassword **required**
  * UserName **required**

### ResetUserPasswordResult
* ResetUserPasswordResult `object`

### ResourceId
* ResourceId `string`

### RestoreFromSnapshotRequest
* RestoreFromSnapshotRequest `object`: An object representing the inputs for the <a>RestoreFromSnapshot</a> operation.
  * SnapshotId **required**

### RestoreFromSnapshotResult
* RestoreFromSnapshotResult `object`: Contains the results of the <a>RestoreFromSnapshot</a> operation.

### SID
* SID `string`

### SchemaExtensionId
* SchemaExtensionId `string`

### SchemaExtensionInfo
* SchemaExtensionInfo `object`: Information about a schema extension.
  * Description
  * DirectoryId
  * EndDateTime
  * SchemaExtensionId
  * SchemaExtensionStatus
  * SchemaExtensionStatusReason
  * StartDateTime

### SchemaExtensionStatus
* SchemaExtensionStatus `string` (values: Initializing, CreatingSnapshot, UpdatingSchema, Replicating, CancelInProgress, RollbackInProgress, Cancelled, Failed, Completed)

### SchemaExtensionStatusReason
* SchemaExtensionStatusReason `string`

### SchemaExtensionsInfo
* SchemaExtensionsInfo `array`
  * items [SchemaExtensionInfo](#schemaextensioninfo)

### SecurityGroupId
* SecurityGroupId `string`

### SelectiveAuth
* SelectiveAuth `string` (values: Enabled, Disabled)

### Server
* Server `string`

### Servers
* Servers `array`
  * items [Server](#server)

### ServiceException


### ShareDirectoryRequest
* ShareDirectoryRequest `object`
  * DirectoryId **required**
  * ShareMethod **required**
  * ShareNotes
  * ShareTarget **required**
    * Id **required**
    * Type **required**

### ShareDirectoryResult
* ShareDirectoryResult `object`
  * SharedDirectoryId

### ShareLimitExceededException


### ShareMethod
* ShareMethod `string` (values: ORGANIZATIONS, HANDSHAKE)

### ShareStatus
* ShareStatus `string` (values: Shared, PendingAcceptance, Rejected, Rejecting, RejectFailed, Sharing, ShareFailed, Deleted, Deleting)

### ShareTarget
* ShareTarget `object`: Identifier that contains details about the directory consumer account.
  * Id **required**
  * Type **required**

### SharedDirectories
* SharedDirectories `array`
  * items [SharedDirectory](#shareddirectory)

### SharedDirectory
* SharedDirectory `object`: Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted.
  * CreatedDateTime
  * LastUpdatedDateTime
  * OwnerAccountId
  * OwnerDirectoryId
  * ShareMethod
  * ShareNotes
  * ShareStatus
  * SharedAccountId
  * SharedDirectoryId

### Snapshot
* Snapshot `object`: Describes a directory snapshot.
  * DirectoryId
  * Name
  * SnapshotId
  * StartTime
  * Status
  * Type

### SnapshotId
* SnapshotId `string`

### SnapshotIds
* SnapshotIds `array`: A list of directory snapshot identifiers.
  * items [SnapshotId](#snapshotid)

### SnapshotLimitExceededException


### SnapshotLimits
* SnapshotLimits `object`: Contains manual snapshot limit information for a directory.
  * ManualSnapshotsCurrentCount
  * ManualSnapshotsLimit
  * ManualSnapshotsLimitReached

### SnapshotName
* SnapshotName `string`

### SnapshotStatus
* SnapshotStatus `string` (values: Creating, Completed, Failed)

### SnapshotType
* SnapshotType `string` (values: Auto, Manual)

### Snapshots
* Snapshots `array`: A list of descriptions of directory snapshots.
  * items [Snapshot](#snapshot)

### SsoEnabled
* SsoEnabled `boolean`

### StageReason
* StageReason `string`

### StartDateTime
* StartDateTime `string`

### StartSchemaExtensionRequest
* StartSchemaExtensionRequest `object`
  * CreateSnapshotBeforeSchemaExtension **required**
  * Description **required**
  * DirectoryId **required**
  * LdifContent **required**

### StartSchemaExtensionResult
* StartSchemaExtensionResult `object`
  * SchemaExtensionId

### StartTime
* StartTime `string`

### StateLastUpdatedDateTime
* StateLastUpdatedDateTime `string`

### SubnetId
* SubnetId `string`

### SubnetIds
* SubnetIds `array`
  * items [SubnetId](#subnetid)

### SubscriptionCreatedDateTime
* SubscriptionCreatedDateTime `string`

### Tag
* Tag `object`: Metadata assigned to a directory consisting of a key-value pair.
  * Key **required**
  * Value **required**

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagLimitExceededException


### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

### TargetId
* TargetId `string`

### TargetType
* TargetType `string` (values: ACCOUNT)

### TopicArn
* TopicArn `string`

### TopicName
* TopicName `string`

### TopicNames
* TopicNames `array`
  * items [TopicName](#topicname)

### TopicStatus
* TopicStatus `string` (values: Registered, Topic not found, Failed, Deleted)

### Trust
* Trust `object`: Describes a trust relationship between an AWS Managed Microsoft AD directory and an external domain.
  * CreatedDateTime
  * DirectoryId
  * LastUpdatedDateTime
  * RemoteDomainName
  * SelectiveAuth
  * StateLastUpdatedDateTime
  * TrustDirection
  * TrustId
  * TrustState
  * TrustStateReason
  * TrustType

### TrustDirection
* TrustDirection `string` (values: One-Way: Outgoing, One-Way: Incoming, Two-Way)

### TrustId
* TrustId `string`

### TrustIds
* TrustIds `array`
  * items [TrustId](#trustid)

### TrustPassword
* TrustPassword `string`

### TrustState
* TrustState `string` (values: Creating, Created, Verifying, VerifyFailed, Verified, Updating, UpdateFailed, Updated, Deleting, Deleted, Failed)

### TrustStateReason
* TrustStateReason `string`

### TrustType
* TrustType `string` (values: Forest, External)

### Trusts
* Trusts `array`
  * items [Trust](#trust)

### UnshareDirectoryRequest
* UnshareDirectoryRequest `object`
  * DirectoryId **required**
  * UnshareTarget **required**
    * Id **required**
    * Type **required**

### UnshareDirectoryResult
* UnshareDirectoryResult `object`
  * SharedDirectoryId

### UnshareTarget
* UnshareTarget `object`: Identifier that contains details about the directory consumer account with whom the directory is being unshared.
  * Id **required**
  * Type **required**

### UnsupportedOperationException


### UpdateConditionalForwarderRequest
* UpdateConditionalForwarderRequest `object`: Updates a conditional forwarder.
  * DirectoryId **required**
  * DnsIpAddrs **required**
    * items [IpAddr](#ipaddr)
  * RemoteDomainName **required**

### UpdateConditionalForwarderResult
* UpdateConditionalForwarderResult `object`: The result of an UpdateConditionalForwarder request.

### UpdateNumberOfDomainControllersRequest
* UpdateNumberOfDomainControllersRequest `object`
  * DesiredNumber **required**
  * DirectoryId **required**

### UpdateNumberOfDomainControllersResult
* UpdateNumberOfDomainControllersResult `object`

### UpdateRadiusRequest
* UpdateRadiusRequest `object`: Contains the inputs for the <a>UpdateRadius</a> operation.
  * DirectoryId **required**
  * RadiusSettings **required**
    * AuthenticationProtocol
    * DisplayLabel
    * RadiusPort
    * RadiusRetries
    * RadiusServers
      * items [Server](#server)
    * RadiusTimeout
    * SharedSecret
    * UseSameUsername

### UpdateRadiusResult
* UpdateRadiusResult `object`: Contains the results of the <a>UpdateRadius</a> operation.

### UpdateSecurityGroupForDirectoryControllers
* UpdateSecurityGroupForDirectoryControllers `boolean`

### UpdateTrustRequest
* UpdateTrustRequest `object`
  * SelectiveAuth
  * TrustId **required**

### UpdateTrustResult
* UpdateTrustResult `object`
  * RequestId [RequestId](#requestid)
  * TrustId

### UseSameUsername
* UseSameUsername `boolean`

### UserDoesNotExistException


### UserName
* UserName `string`

### UserPassword
* UserPassword `string`

### VerifyTrustRequest
* VerifyTrustRequest `object`: Initiates the verification of an existing trust relationship between an AWS Managed Microsoft AD directory and an external domain.
  * TrustId **required**

### VerifyTrustResult
* VerifyTrustResult `object`: Result of a VerifyTrust request.
  * TrustId

### VpcId
* VpcId `string`


