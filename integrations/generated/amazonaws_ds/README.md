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

amazonaws_ds.AddIpRoutes({
  "DirectoryId": "",
  "IpRoutes": []
}).then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS Directory Service</fullname> <p>AWS Directory Service is a web service that makes it easy for you to setup and run directories in the AWS cloud, or connect your AWS resources with an existing on-premises Microsoft Active Directory. This guide provides detailed information about AWS Directory Service operations, data types, parameters, and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p> <note> <p>AWS provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, etc.). The SDKs provide a convenient way to create programmatic access to AWS Directory Service and other AWS services. For more information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>

## Actions

### AddIpRoutes



```js
amazonaws_ds.AddIpRoutes({
  "DirectoryId": "",
  "IpRoutes": []
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * IpRoutes **required** [IpRoutes](#iproutes)
  * UpdateSecurityGroupForDirectoryControllers [UpdateSecurityGroupForDirectoryControllers](#updatesecuritygroupfordirectorycontrollers)

#### Output
* output [AddIpRoutesResult](#addiproutesresult)

### AddTagsToResource



```js
amazonaws_ds.AddTagsToResource({
  "ResourceId": "",
  "Tags": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * Tags **required** [Tags](#tags)

#### Output
* output [AddTagsToResourceResult](#addtagstoresourceresult)

### CancelSchemaExtension



```js
amazonaws_ds.CancelSchemaExtension({
  "DirectoryId": "",
  "SchemaExtensionId": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * SchemaExtensionId **required** [SchemaExtensionId](#schemaextensionid)

#### Output
* output [CancelSchemaExtensionResult](#cancelschemaextensionresult)

### ConnectDirectory



```js
amazonaws_ds.ConnectDirectory({
  "Name": "",
  "Password": "",
  "Size": "",
  "ConnectSettings": {
    "VpcId": "",
    "SubnetIds": [],
    "CustomerDnsIps": [],
    "CustomerUserName": ""
  }
}, context)
```

#### Input
* input `object`
  * ConnectSettings **required** [DirectoryConnectSettings](#directoryconnectsettings)
  * Description [Description](#description)
  * Name **required** [DirectoryName](#directoryname)
  * Password **required** [ConnectPassword](#connectpassword)
  * ShortName [DirectoryShortName](#directoryshortname)
  * Size **required** [DirectorySize](#directorysize)

#### Output
* output [ConnectDirectoryResult](#connectdirectoryresult)

### CreateAlias



```js
amazonaws_ds.CreateAlias({
  "DirectoryId": "",
  "Alias": ""
}, context)
```

#### Input
* input `object`
  * Alias **required** [AliasName](#aliasname)
  * DirectoryId **required** [DirectoryId](#directoryid)

#### Output
* output [CreateAliasResult](#createaliasresult)

### CreateComputer



```js
amazonaws_ds.CreateComputer({
  "DirectoryId": "",
  "ComputerName": "",
  "Password": ""
}, context)
```

#### Input
* input `object`
  * ComputerAttributes [Attributes](#attributes)
  * ComputerName **required** [ComputerName](#computername)
  * DirectoryId **required** [DirectoryId](#directoryid)
  * OrganizationalUnitDistinguishedName [OrganizationalUnitDN](#organizationalunitdn)
  * Password **required** [ComputerPassword](#computerpassword)

#### Output
* output [CreateComputerResult](#createcomputerresult)

### CreateConditionalForwarder



```js
amazonaws_ds.CreateConditionalForwarder({
  "DirectoryId": "",
  "RemoteDomainName": "",
  "DnsIpAddrs": []
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * DnsIpAddrs **required** [DnsIpAddrs](#dnsipaddrs)
  * RemoteDomainName **required** [RemoteDomainName](#remotedomainname)

#### Output
* output [CreateConditionalForwarderResult](#createconditionalforwarderresult)

### CreateDirectory



```js
amazonaws_ds.CreateDirectory({
  "Name": "",
  "Password": "",
  "Size": ""
}, context)
```

#### Input
* input `object`
  * Description [Description](#description)
  * Name **required** [DirectoryName](#directoryname)
  * Password **required** [Password](#password)
  * ShortName [DirectoryShortName](#directoryshortname)
  * Size **required** [DirectorySize](#directorysize)
  * VpcSettings [DirectoryVpcSettings](#directoryvpcsettings)

#### Output
* output [CreateDirectoryResult](#createdirectoryresult)

### CreateMicrosoftAD



```js
amazonaws_ds.CreateMicrosoftAD({
  "Name": "",
  "Password": "",
  "VpcSettings": {
    "VpcId": "",
    "SubnetIds": []
  }
}, context)
```

#### Input
* input `object`
  * Description [Description](#description)
  * Edition [DirectoryEdition](#directoryedition)
  * Name **required** [DirectoryName](#directoryname)
  * Password **required** [Password](#password)
  * ShortName [DirectoryShortName](#directoryshortname)
  * VpcSettings **required** [DirectoryVpcSettings](#directoryvpcsettings)

#### Output
* output [CreateMicrosoftADResult](#createmicrosoftadresult)

### CreateSnapshot



```js
amazonaws_ds.CreateSnapshot({
  "DirectoryId": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * Name [SnapshotName](#snapshotname)

#### Output
* output [CreateSnapshotResult](#createsnapshotresult)

### CreateTrust



```js
amazonaws_ds.CreateTrust({
  "DirectoryId": "",
  "RemoteDomainName": "",
  "TrustPassword": "",
  "TrustDirection": ""
}, context)
```

#### Input
* input `object`
  * ConditionalForwarderIpAddrs [DnsIpAddrs](#dnsipaddrs)
  * DirectoryId **required** [DirectoryId](#directoryid)
  * RemoteDomainName **required** [RemoteDomainName](#remotedomainname)
  * TrustDirection **required** [TrustDirection](#trustdirection)
  * TrustPassword **required** [TrustPassword](#trustpassword)
  * TrustType [TrustType](#trusttype)

#### Output
* output [CreateTrustResult](#createtrustresult)

### DeleteConditionalForwarder



```js
amazonaws_ds.DeleteConditionalForwarder({
  "DirectoryId": "",
  "RemoteDomainName": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * RemoteDomainName **required** [RemoteDomainName](#remotedomainname)

#### Output
* output [DeleteConditionalForwarderResult](#deleteconditionalforwarderresult)

### DeleteDirectory



```js
amazonaws_ds.DeleteDirectory({
  "DirectoryId": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)

#### Output
* output [DeleteDirectoryResult](#deletedirectoryresult)

### DeleteSnapshot



```js
amazonaws_ds.DeleteSnapshot({
  "SnapshotId": ""
}, context)
```

#### Input
* input `object`
  * SnapshotId **required** [SnapshotId](#snapshotid)

#### Output
* output [DeleteSnapshotResult](#deletesnapshotresult)

### DeleteTrust



```js
amazonaws_ds.DeleteTrust({
  "TrustId": ""
}, context)
```

#### Input
* input `object`
  * DeleteAssociatedConditionalForwarder [DeleteAssociatedConditionalForwarder](#deleteassociatedconditionalforwarder)
  * TrustId **required** [TrustId](#trustid)

#### Output
* output [DeleteTrustResult](#deletetrustresult)

### DeregisterEventTopic



```js
amazonaws_ds.DeregisterEventTopic({
  "DirectoryId": "",
  "TopicName": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * TopicName **required** [TopicName](#topicname)

#### Output
* output [DeregisterEventTopicResult](#deregistereventtopicresult)

### DescribeConditionalForwarders



```js
amazonaws_ds.DescribeConditionalForwarders({
  "DirectoryId": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * RemoteDomainNames [RemoteDomainNames](#remotedomainnames)

#### Output
* output [DescribeConditionalForwardersResult](#describeconditionalforwardersresult)

### DescribeDirectories



```js
amazonaws_ds.DescribeDirectories({}, context)
```

#### Input
* input `object`
  * DirectoryIds [DirectoryIds](#directoryids)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeDirectoriesResult](#describedirectoriesresult)

### DescribeDomainControllers



```js
amazonaws_ds.DescribeDomainControllers({
  "DirectoryId": ""
}, context)
```

#### Input
* input `object`
  * Limit `string`
  * NextToken `string`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * DomainControllerIds [DomainControllerIds](#domaincontrollerids)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [DescribeDomainControllersResult](#describedomaincontrollersresult)

### DescribeEventTopics



```js
amazonaws_ds.DescribeEventTopics({}, context)
```

#### Input
* input `object`
  * DirectoryId [DirectoryId](#directoryid)
  * TopicNames [TopicNames](#topicnames)

#### Output
* output [DescribeEventTopicsResult](#describeeventtopicsresult)

### DescribeSnapshots



```js
amazonaws_ds.DescribeSnapshots({}, context)
```

#### Input
* input `object`
  * DirectoryId [DirectoryId](#directoryid)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)
  * SnapshotIds [SnapshotIds](#snapshotids)

#### Output
* output [DescribeSnapshotsResult](#describesnapshotsresult)

### DescribeTrusts



```js
amazonaws_ds.DescribeTrusts({}, context)
```

#### Input
* input `object`
  * DirectoryId [DirectoryId](#directoryid)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)
  * TrustIds [TrustIds](#trustids)

#### Output
* output [DescribeTrustsResult](#describetrustsresult)

### DisableRadius



```js
amazonaws_ds.DisableRadius({
  "DirectoryId": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)

#### Output
* output [DisableRadiusResult](#disableradiusresult)

### DisableSso



```js
amazonaws_ds.DisableSso({
  "DirectoryId": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * Password [ConnectPassword](#connectpassword)
  * UserName [UserName](#username)

#### Output
* output [DisableSsoResult](#disablessoresult)

### EnableRadius



```js
amazonaws_ds.EnableRadius({
  "DirectoryId": "",
  "RadiusSettings": {}
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * RadiusSettings **required** [RadiusSettings](#radiussettings)

#### Output
* output [EnableRadiusResult](#enableradiusresult)

### EnableSso



```js
amazonaws_ds.EnableSso({
  "DirectoryId": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * Password [ConnectPassword](#connectpassword)
  * UserName [UserName](#username)

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
  "DirectoryId": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)

#### Output
* output [GetSnapshotLimitsResult](#getsnapshotlimitsresult)

### ListIpRoutes



```js
amazonaws_ds.ListIpRoutes({
  "DirectoryId": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListIpRoutesResult](#listiproutesresult)

### ListSchemaExtensions



```js
amazonaws_ds.ListSchemaExtensions({
  "DirectoryId": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)

#### Output
* output [ListSchemaExtensionsResult](#listschemaextensionsresult)

### ListTagsForResource



```js
amazonaws_ds.ListTagsForResource({
  "ResourceId": ""
}, context)
```

#### Input
* input `object`
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)
  * ResourceId **required** [ResourceId](#resourceid)

#### Output
* output [ListTagsForResourceResult](#listtagsforresourceresult)

### RegisterEventTopic



```js
amazonaws_ds.RegisterEventTopic({
  "DirectoryId": "",
  "TopicName": ""
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * TopicName **required** [TopicName](#topicname)

#### Output
* output [RegisterEventTopicResult](#registereventtopicresult)

### RemoveIpRoutes



```js
amazonaws_ds.RemoveIpRoutes({
  "DirectoryId": "",
  "CidrIps": []
}, context)
```

#### Input
* input `object`
  * CidrIps **required** [CidrIps](#cidrips)
  * DirectoryId **required** [DirectoryId](#directoryid)

#### Output
* output [RemoveIpRoutesResult](#removeiproutesresult)

### RemoveTagsFromResource



```js
amazonaws_ds.RemoveTagsFromResource({
  "ResourceId": "",
  "TagKeys": []
}, context)
```

#### Input
* input `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * TagKeys **required** [TagKeys](#tagkeys)

#### Output
* output [RemoveTagsFromResourceResult](#removetagsfromresourceresult)

### RestoreFromSnapshot



```js
amazonaws_ds.RestoreFromSnapshot({
  "SnapshotId": ""
}, context)
```

#### Input
* input `object`
  * SnapshotId **required** [SnapshotId](#snapshotid)

#### Output
* output [RestoreFromSnapshotResult](#restorefromsnapshotresult)

### StartSchemaExtension



```js
amazonaws_ds.StartSchemaExtension({
  "DirectoryId": "",
  "CreateSnapshotBeforeSchemaExtension": true,
  "LdifContent": "",
  "Description": ""
}, context)
```

#### Input
* input `object`
  * CreateSnapshotBeforeSchemaExtension **required** [CreateSnapshotBeforeSchemaExtension](#createsnapshotbeforeschemaextension)
  * Description **required** [Description](#description)
  * DirectoryId **required** [DirectoryId](#directoryid)
  * LdifContent **required** [LdifContent](#ldifcontent)

#### Output
* output [StartSchemaExtensionResult](#startschemaextensionresult)

### UpdateConditionalForwarder



```js
amazonaws_ds.UpdateConditionalForwarder({
  "DirectoryId": "",
  "RemoteDomainName": "",
  "DnsIpAddrs": []
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * DnsIpAddrs **required** [DnsIpAddrs](#dnsipaddrs)
  * RemoteDomainName **required** [RemoteDomainName](#remotedomainname)

#### Output
* output [UpdateConditionalForwarderResult](#updateconditionalforwarderresult)

### UpdateNumberOfDomainControllers



```js
amazonaws_ds.UpdateNumberOfDomainControllers({
  "DirectoryId": "",
  "DesiredNumber": 0
}, context)
```

#### Input
* input `object`
  * DesiredNumber **required** [DesiredNumberOfDomainControllers](#desirednumberofdomaincontrollers)
  * DirectoryId **required** [DirectoryId](#directoryid)

#### Output
* output [UpdateNumberOfDomainControllersResult](#updatenumberofdomaincontrollersresult)

### UpdateRadius



```js
amazonaws_ds.UpdateRadius({
  "DirectoryId": "",
  "RadiusSettings": {}
}, context)
```

#### Input
* input `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * RadiusSettings **required** [RadiusSettings](#radiussettings)

#### Output
* output [UpdateRadiusResult](#updateradiusresult)

### VerifyTrust



```js
amazonaws_ds.VerifyTrust({
  "TrustId": ""
}, context)
```

#### Input
* input `object`
  * TrustId **required** [TrustId](#trustid)

#### Output
* output [VerifyTrustResult](#verifytrustresult)



## Definitions

### AccessUrl
* AccessUrl `string`

### AddIpRoutesRequest
* AddIpRoutesRequest `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * IpRoutes **required** [IpRoutes](#iproutes)
  * UpdateSecurityGroupForDirectoryControllers [UpdateSecurityGroupForDirectoryControllers](#updatesecuritygroupfordirectorycontrollers)

### AddIpRoutesResult
* AddIpRoutesResult `object`

### AddTagsToResourceRequest
* AddTagsToResourceRequest `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * Tags **required** [Tags](#tags)

### AddTagsToResourceResult
* AddTagsToResourceResult `object`

### AddedDateTime
* AddedDateTime `string`

### AliasName
* AliasName `string`

### Attribute
* Attribute `object`: Represents a named directory attribute.
  * Name [AttributeName](#attributename)
  * Value [AttributeValue](#attributevalue)

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `string`

### Attributes
* Attributes `array`
  * items [Attribute](#attribute)

### AuthenticationFailedException
* AuthenticationFailedException `object`: An authentication error occurred.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### AvailabilityZone
* AvailabilityZone `string`

### AvailabilityZones
* AvailabilityZones `array`
  * items [AvailabilityZone](#availabilityzone)

### CancelSchemaExtensionRequest
* CancelSchemaExtensionRequest `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * SchemaExtensionId **required** [SchemaExtensionId](#schemaextensionid)

### CancelSchemaExtensionResult
* CancelSchemaExtensionResult `object`

### CidrIp
* CidrIp `string`

### CidrIps
* CidrIps `array`
  * items [CidrIp](#cidrip)

### ClientException
* ClientException `object`: A client exception has occurred.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### CloudOnlyDirectoriesLimitReached
* CloudOnlyDirectoriesLimitReached `boolean`

### Computer
* Computer `object`: Contains information about a computer account in a directory.
  * ComputerAttributes [Attributes](#attributes)
  * ComputerId [SID](#sid)
  * ComputerName [ComputerName](#computername)

### ComputerName
* ComputerName `string`

### ComputerPassword
* ComputerPassword `string`

### ConditionalForwarder
* ConditionalForwarder `object`: Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.
  * DnsIpAddrs [DnsIpAddrs](#dnsipaddrs)
  * RemoteDomainName [RemoteDomainName](#remotedomainname)
  * ReplicationScope [ReplicationScope](#replicationscope)

### ConditionalForwarders
* ConditionalForwarders `array`
  * items [ConditionalForwarder](#conditionalforwarder)

### ConnectDirectoryRequest
* ConnectDirectoryRequest `object`: Contains the inputs for the <a>ConnectDirectory</a> operation.
  * ConnectSettings **required** [DirectoryConnectSettings](#directoryconnectsettings)
  * Description [Description](#description)
  * Name **required** [DirectoryName](#directoryname)
  * Password **required** [ConnectPassword](#connectpassword)
  * ShortName [DirectoryShortName](#directoryshortname)
  * Size **required** [DirectorySize](#directorysize)

### ConnectDirectoryResult
* ConnectDirectoryResult `object`: Contains the results of the <a>ConnectDirectory</a> operation.
  * DirectoryId [DirectoryId](#directoryid)

### ConnectPassword
* ConnectPassword `string`

### ConnectedDirectoriesLimitReached
* ConnectedDirectoriesLimitReached `boolean`

### CreateAliasRequest
* CreateAliasRequest `object`: Contains the inputs for the <a>CreateAlias</a> operation.
  * Alias **required** [AliasName](#aliasname)
  * DirectoryId **required** [DirectoryId](#directoryid)

### CreateAliasResult
* CreateAliasResult `object`: Contains the results of the <a>CreateAlias</a> operation.
  * Alias [AliasName](#aliasname)
  * DirectoryId [DirectoryId](#directoryid)

### CreateComputerRequest
* CreateComputerRequest `object`: Contains the inputs for the <a>CreateComputer</a> operation.
  * ComputerAttributes [Attributes](#attributes)
  * ComputerName **required** [ComputerName](#computername)
  * DirectoryId **required** [DirectoryId](#directoryid)
  * OrganizationalUnitDistinguishedName [OrganizationalUnitDN](#organizationalunitdn)
  * Password **required** [ComputerPassword](#computerpassword)

### CreateComputerResult
* CreateComputerResult `object`: Contains the results for the <a>CreateComputer</a> operation.
  * Computer [Computer](#computer)

### CreateConditionalForwarderRequest
* CreateConditionalForwarderRequest `object`: Initiates the creation of a conditional forwarder for your AWS Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain.
  * DirectoryId **required** [DirectoryId](#directoryid)
  * DnsIpAddrs **required** [DnsIpAddrs](#dnsipaddrs)
  * RemoteDomainName **required** [RemoteDomainName](#remotedomainname)

### CreateConditionalForwarderResult
* CreateConditionalForwarderResult `object`: The result of a CreateConditinalForwarder request.

### CreateDirectoryRequest
* CreateDirectoryRequest `object`: Contains the inputs for the <a>CreateDirectory</a> operation. 
  * Description [Description](#description)
  * Name **required** [DirectoryName](#directoryname)
  * Password **required** [Password](#password)
  * ShortName [DirectoryShortName](#directoryshortname)
  * Size **required** [DirectorySize](#directorysize)
  * VpcSettings [DirectoryVpcSettings](#directoryvpcsettings)

### CreateDirectoryResult
* CreateDirectoryResult `object`: Contains the results of the <a>CreateDirectory</a> operation.
  * DirectoryId [DirectoryId](#directoryid)

### CreateMicrosoftADRequest
* CreateMicrosoftADRequest `object`: Creates a Microsoft AD in the AWS cloud.
  * Description [Description](#description)
  * Edition [DirectoryEdition](#directoryedition)
  * Name **required** [DirectoryName](#directoryname)
  * Password **required** [Password](#password)
  * ShortName [DirectoryShortName](#directoryshortname)
  * VpcSettings **required** [DirectoryVpcSettings](#directoryvpcsettings)

### CreateMicrosoftADResult
* CreateMicrosoftADResult `object`: Result of a CreateMicrosoftAD request.
  * DirectoryId [DirectoryId](#directoryid)

### CreateSnapshotBeforeSchemaExtension
* CreateSnapshotBeforeSchemaExtension `boolean`

### CreateSnapshotRequest
* CreateSnapshotRequest `object`: Contains the inputs for the <a>CreateSnapshot</a> operation.
  * DirectoryId **required** [DirectoryId](#directoryid)
  * Name [SnapshotName](#snapshotname)

### CreateSnapshotResult
* CreateSnapshotResult `object`: Contains the results of the <a>CreateSnapshot</a> operation.
  * SnapshotId [SnapshotId](#snapshotid)

### CreateTrustRequest
* CreateTrustRequest `object`: <p>AWS Directory Service for Microsoft Active Directory allows you to configure trust relationships. For example, you can establish a trust between your Microsoft AD in the AWS cloud, and your existing on-premises Microsoft Active Directory. This would allow you to provide users and groups access to resources in either domain, with a single set of credentials.</p> <p>This action initiates the creation of the AWS side of a trust relationship between a Microsoft AD in the AWS cloud and an external domain.</p>
  * ConditionalForwarderIpAddrs [DnsIpAddrs](#dnsipaddrs)
  * DirectoryId **required** [DirectoryId](#directoryid)
  * RemoteDomainName **required** [RemoteDomainName](#remotedomainname)
  * TrustDirection **required** [TrustDirection](#trustdirection)
  * TrustPassword **required** [TrustPassword](#trustpassword)
  * TrustType [TrustType](#trusttype)

### CreateTrustResult
* CreateTrustResult `object`: The result of a CreateTrust request.
  * TrustId [TrustId](#trustid)

### CreatedDateTime
* CreatedDateTime `string`

### DeleteAssociatedConditionalForwarder
* DeleteAssociatedConditionalForwarder `boolean`

### DeleteConditionalForwarderRequest
* DeleteConditionalForwarderRequest `object`: Deletes a conditional forwarder.
  * DirectoryId **required** [DirectoryId](#directoryid)
  * RemoteDomainName **required** [RemoteDomainName](#remotedomainname)

### DeleteConditionalForwarderResult
* DeleteConditionalForwarderResult `object`: The result of a DeleteConditionalForwarder request.

### DeleteDirectoryRequest
* DeleteDirectoryRequest `object`: Contains the inputs for the <a>DeleteDirectory</a> operation.
  * DirectoryId **required** [DirectoryId](#directoryid)

### DeleteDirectoryResult
* DeleteDirectoryResult `object`: Contains the results of the <a>DeleteDirectory</a> operation.
  * DirectoryId [DirectoryId](#directoryid)

### DeleteSnapshotRequest
* DeleteSnapshotRequest `object`: Contains the inputs for the <a>DeleteSnapshot</a> operation.
  * SnapshotId **required** [SnapshotId](#snapshotid)

### DeleteSnapshotResult
* DeleteSnapshotResult `object`: Contains the results of the <a>DeleteSnapshot</a> operation.
  * SnapshotId [SnapshotId](#snapshotid)

### DeleteTrustRequest
* DeleteTrustRequest `object`: Deletes the local side of an existing trust relationship between the Microsoft AD in the AWS cloud and the external domain.
  * DeleteAssociatedConditionalForwarder [DeleteAssociatedConditionalForwarder](#deleteassociatedconditionalforwarder)
  * TrustId **required** [TrustId](#trustid)

### DeleteTrustResult
* DeleteTrustResult `object`: The result of a DeleteTrust request.
  * TrustId [TrustId](#trustid)

### DeregisterEventTopicRequest
* DeregisterEventTopicRequest `object`: Removes the specified directory as a publisher to the specified SNS topic.
  * DirectoryId **required** [DirectoryId](#directoryid)
  * TopicName **required** [TopicName](#topicname)

### DeregisterEventTopicResult
* DeregisterEventTopicResult `object`: The result of a DeregisterEventTopic request.

### DescribeConditionalForwardersRequest
* DescribeConditionalForwardersRequest `object`: Describes a conditional forwarder.
  * DirectoryId **required** [DirectoryId](#directoryid)
  * RemoteDomainNames [RemoteDomainNames](#remotedomainnames)

### DescribeConditionalForwardersResult
* DescribeConditionalForwardersResult `object`: The result of a DescribeConditionalForwarder request.
  * ConditionalForwarders [ConditionalForwarders](#conditionalforwarders)

### DescribeDirectoriesRequest
* DescribeDirectoriesRequest `object`: Contains the inputs for the <a>DescribeDirectories</a> operation.
  * DirectoryIds [DirectoryIds](#directoryids)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)

### DescribeDirectoriesResult
* DescribeDirectoriesResult `object`: Contains the results of the <a>DescribeDirectories</a> operation.
  * DirectoryDescriptions [DirectoryDescriptions](#directorydescriptions)
  * NextToken [NextToken](#nexttoken)

### DescribeDomainControllersRequest
* DescribeDomainControllersRequest `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * DomainControllerIds [DomainControllerIds](#domaincontrollerids)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)

### DescribeDomainControllersResult
* DescribeDomainControllersResult `object`
  * DomainControllers [DomainControllers](#domaincontrollers)
  * NextToken [NextToken](#nexttoken)

### DescribeEventTopicsRequest
* DescribeEventTopicsRequest `object`: Describes event topics.
  * DirectoryId [DirectoryId](#directoryid)
  * TopicNames [TopicNames](#topicnames)

### DescribeEventTopicsResult
* DescribeEventTopicsResult `object`: The result of a DescribeEventTopic request.
  * EventTopics [EventTopics](#eventtopics)

### DescribeSnapshotsRequest
* DescribeSnapshotsRequest `object`: Contains the inputs for the <a>DescribeSnapshots</a> operation.
  * DirectoryId [DirectoryId](#directoryid)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)
  * SnapshotIds [SnapshotIds](#snapshotids)

### DescribeSnapshotsResult
* DescribeSnapshotsResult `object`: Contains the results of the <a>DescribeSnapshots</a> operation.
  * NextToken [NextToken](#nexttoken)
  * Snapshots [Snapshots](#snapshots)

### DescribeTrustsRequest
* DescribeTrustsRequest `object`: Describes the trust relationships for a particular Microsoft AD in the AWS cloud. If no input parameters are are provided, such as directory ID or trust ID, this request describes all the trust relationships.
  * DirectoryId [DirectoryId](#directoryid)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)
  * TrustIds [TrustIds](#trustids)

### DescribeTrustsResult
* DescribeTrustsResult `object`: The result of a DescribeTrust request.
  * NextToken [NextToken](#nexttoken)
  * Trusts [Trusts](#trusts)

### Description
* Description `string`

### DesiredNumberOfDomainControllers
* DesiredNumberOfDomainControllers `integer`

### DirectoryConnectSettings
* DirectoryConnectSettings `object`: Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.
  * CustomerDnsIps **required** [DnsIpAddrs](#dnsipaddrs)
  * CustomerUserName **required** [UserName](#username)
  * SubnetIds **required** [SubnetIds](#subnetids)
  * VpcId **required** [VpcId](#vpcid)

### DirectoryConnectSettingsDescription
* DirectoryConnectSettingsDescription `object`: Contains information about an AD Connector directory.
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * ConnectIps [IpAddrs](#ipaddrs)
  * CustomerUserName [UserName](#username)
  * SecurityGroupId [SecurityGroupId](#securitygroupid)
  * SubnetIds [SubnetIds](#subnetids)
  * VpcId [VpcId](#vpcid)

### DirectoryDescription
* DirectoryDescription `object`: Contains information about an AWS Directory Service directory.
  * AccessUrl [AccessUrl](#accessurl)
  * Alias [AliasName](#aliasname)
  * ConnectSettings [DirectoryConnectSettingsDescription](#directoryconnectsettingsdescription)
  * Description [Description](#description)
  * DesiredNumberOfDomainControllers [DesiredNumberOfDomainControllers](#desirednumberofdomaincontrollers)
  * DirectoryId [DirectoryId](#directoryid)
  * DnsIpAddrs [DnsIpAddrs](#dnsipaddrs)
  * Edition [DirectoryEdition](#directoryedition)
  * LaunchTime [LaunchTime](#launchtime)
  * Name [DirectoryName](#directoryname)
  * RadiusSettings [RadiusSettings](#radiussettings)
  * RadiusStatus [RadiusStatus](#radiusstatus)
  * ShortName [DirectoryShortName](#directoryshortname)
  * Size [DirectorySize](#directorysize)
  * SsoEnabled [SsoEnabled](#ssoenabled)
  * Stage [DirectoryStage](#directorystage)
  * StageLastUpdatedDateTime [LastUpdatedDateTime](#lastupdateddatetime)
  * StageReason [StageReason](#stagereason)
  * Type [DirectoryType](#directorytype)
  * VpcSettings [DirectoryVpcSettingsDescription](#directoryvpcsettingsdescription)

### DirectoryDescriptions
* DirectoryDescriptions `array`: A list of directory descriptions.
  * items [DirectoryDescription](#directorydescription)

### DirectoryEdition
* DirectoryEdition `string` (values: Enterprise, Standard)

### DirectoryId
* DirectoryId `string`

### DirectoryIds
* DirectoryIds `array`: A list of directory identifiers.
  * items [DirectoryId](#directoryid)

### DirectoryLimitExceededException
* DirectoryLimitExceededException `object`: The maximum number of directories in the region has been reached. You can use the <a>GetDirectoryLimits</a> operation to determine your directory limits in the region.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### DirectoryLimits
* DirectoryLimits `object`: Contains directory limit information for a region.
  * CloudOnlyDirectoriesCurrentCount [Limit](#limit)
  * CloudOnlyDirectoriesLimit [Limit](#limit)
  * CloudOnlyDirectoriesLimitReached [CloudOnlyDirectoriesLimitReached](#cloudonlydirectorieslimitreached)
  * CloudOnlyMicrosoftADCurrentCount [Limit](#limit)
  * CloudOnlyMicrosoftADLimit [Limit](#limit)
  * CloudOnlyMicrosoftADLimitReached [CloudOnlyDirectoriesLimitReached](#cloudonlydirectorieslimitreached)
  * ConnectedDirectoriesCurrentCount [Limit](#limit)
  * ConnectedDirectoriesLimit [Limit](#limit)
  * ConnectedDirectoriesLimitReached [ConnectedDirectoriesLimitReached](#connecteddirectorieslimitreached)

### DirectoryName
* DirectoryName `string`

### DirectoryShortName
* DirectoryShortName `string`

### DirectorySize
* DirectorySize `string` (values: Small, Large)

### DirectoryStage
* DirectoryStage `string` (values: Requested, Creating, Created, Active, Inoperable, Impaired, Restoring, RestoreFailed, Deleting, Deleted, Failed)

### DirectoryType
* DirectoryType `string` (values: SimpleAD, ADConnector, MicrosoftAD)

### DirectoryUnavailableException
* DirectoryUnavailableException `object`: The specified directory is unavailable or could not be found.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### DirectoryVpcSettings
* DirectoryVpcSettings `object`: Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.
  * SubnetIds **required** [SubnetIds](#subnetids)
  * VpcId **required** [VpcId](#vpcid)

### DirectoryVpcSettingsDescription
* DirectoryVpcSettingsDescription `object`: Contains information about the directory.
  * AvailabilityZones [AvailabilityZones](#availabilityzones)
  * SecurityGroupId [SecurityGroupId](#securitygroupid)
  * SubnetIds [SubnetIds](#subnetids)
  * VpcId [VpcId](#vpcid)

### DisableRadiusRequest
* DisableRadiusRequest `object`: Contains the inputs for the <a>DisableRadius</a> operation.
  * DirectoryId **required** [DirectoryId](#directoryid)

### DisableRadiusResult
* DisableRadiusResult `object`: Contains the results of the <a>DisableRadius</a> operation.

### DisableSsoRequest
* DisableSsoRequest `object`: Contains the inputs for the <a>DisableSso</a> operation.
  * DirectoryId **required** [DirectoryId](#directoryid)
  * Password [ConnectPassword](#connectpassword)
  * UserName [UserName](#username)

### DisableSsoResult
* DisableSsoResult `object`: Contains the results of the <a>DisableSso</a> operation.

### DnsIpAddrs
* DnsIpAddrs `array`
  * items [IpAddr](#ipaddr)

### DomainController
* DomainController `object`: Contains information about the domain controllers for a specified directory.
  * AvailabilityZone [AvailabilityZone](#availabilityzone)
  * DirectoryId [DirectoryId](#directoryid)
  * DnsIpAddr [IpAddr](#ipaddr)
  * DomainControllerId [DomainControllerId](#domaincontrollerid)
  * LaunchTime [LaunchTime](#launchtime)
  * Status [DomainControllerStatus](#domaincontrollerstatus)
  * StatusLastUpdatedDateTime [LastUpdatedDateTime](#lastupdateddatetime)
  * StatusReason [DomainControllerStatusReason](#domaincontrollerstatusreason)
  * SubnetId [SubnetId](#subnetid)
  * VpcId [VpcId](#vpcid)

### DomainControllerId
* DomainControllerId `string`

### DomainControllerIds
* DomainControllerIds `array`
  * items [DomainControllerId](#domaincontrollerid)

### DomainControllerLimitExceededException
* DomainControllerLimitExceededException `object`: The maximum allowed number of domain controllers per directory was exceeded. The default limit per directory is 20 domain controllers.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### DomainControllerStatus
* DomainControllerStatus `string` (values: Creating, Active, Impaired, Restoring, Deleting, Deleted, Failed)

### DomainControllerStatusReason
* DomainControllerStatusReason `string`

### DomainControllers
* DomainControllers `array`
  * items [DomainController](#domaincontroller)

### EnableRadiusRequest
* EnableRadiusRequest `object`: Contains the inputs for the <a>EnableRadius</a> operation.
  * DirectoryId **required** [DirectoryId](#directoryid)
  * RadiusSettings **required** [RadiusSettings](#radiussettings)

### EnableRadiusResult
* EnableRadiusResult `object`: Contains the results of the <a>EnableRadius</a> operation.

### EnableSsoRequest
* EnableSsoRequest `object`: Contains the inputs for the <a>EnableSso</a> operation.
  * DirectoryId **required** [DirectoryId](#directoryid)
  * Password [ConnectPassword](#connectpassword)
  * UserName [UserName](#username)

### EnableSsoResult
* EnableSsoResult `object`: Contains the results of the <a>EnableSso</a> operation.

### EndDateTime
* EndDateTime `string`

### EntityAlreadyExistsException
* EntityAlreadyExistsException `object`: The specified entity already exists.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### EntityDoesNotExistException
* EntityDoesNotExistException `object`: The specified entity could not be found.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### EventTopic
* EventTopic `object`: Information about SNS topic and AWS Directory Service directory associations.
  * CreatedDateTime [CreatedDateTime](#createddatetime)
  * DirectoryId [DirectoryId](#directoryid)
  * Status [TopicStatus](#topicstatus)
  * TopicArn [TopicArn](#topicarn)
  * TopicName [TopicName](#topicname)

### EventTopics
* EventTopics `array`
  * items [EventTopic](#eventtopic)

### ExceptionMessage
* ExceptionMessage `string`: The descriptive message for the exception.

### GetDirectoryLimitsRequest
* GetDirectoryLimitsRequest `object`: Contains the inputs for the <a>GetDirectoryLimits</a> operation.

### GetDirectoryLimitsResult
* GetDirectoryLimitsResult `object`: Contains the results of the <a>GetDirectoryLimits</a> operation.
  * DirectoryLimits [DirectoryLimits](#directorylimits)

### GetSnapshotLimitsRequest
* GetSnapshotLimitsRequest `object`: Contains the inputs for the <a>GetSnapshotLimits</a> operation.
  * DirectoryId **required** [DirectoryId](#directoryid)

### GetSnapshotLimitsResult
* GetSnapshotLimitsResult `object`: Contains the results of the <a>GetSnapshotLimits</a> operation.
  * SnapshotLimits [SnapshotLimits](#snapshotlimits)

### InsufficientPermissionsException
* InsufficientPermissionsException `object`: The account does not have sufficient permission to perform the operation.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### InvalidNextTokenException
* InvalidNextTokenException `object`: The <i>NextToken</i> value is not valid.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### InvalidParameterException
* InvalidParameterException `object`: One or more parameters are not valid.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### IpAddr
* IpAddr `string`

### IpAddrs
* IpAddrs `array`
  * items [IpAddr](#ipaddr)

### IpRoute
* IpRoute `object`: IP address block. This is often the address block of the DNS server used for your on-premises domain. 
  * CidrIp [CidrIp](#cidrip)
  * Description [Description](#description)

### IpRouteInfo
* IpRouteInfo `object`: Information about one or more IP address blocks.
  * AddedDateTime [AddedDateTime](#addeddatetime)
  * CidrIp [CidrIp](#cidrip)
  * Description [Description](#description)
  * DirectoryId [DirectoryId](#directoryid)
  * IpRouteStatusMsg [IpRouteStatusMsg](#iproutestatusmsg)
  * IpRouteStatusReason [IpRouteStatusReason](#iproutestatusreason)

### IpRouteLimitExceededException
* IpRouteLimitExceededException `object`: The maximum allowed number of IP addresses was exceeded. The default limit is 100 IP address blocks.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

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

### LastUpdatedDateTime
* LastUpdatedDateTime `string`

### LaunchTime
* LaunchTime `string`

### LdifContent
* LdifContent `string`

### Limit
* Limit `integer`

### ListIpRoutesRequest
* ListIpRoutesRequest `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)

### ListIpRoutesResult
* ListIpRoutesResult `object`
  * IpRoutesInfo [IpRoutesInfo](#iproutesinfo)
  * NextToken [NextToken](#nexttoken)

### ListSchemaExtensionsRequest
* ListSchemaExtensionsRequest `object`
  * DirectoryId **required** [DirectoryId](#directoryid)
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)

### ListSchemaExtensionsResult
* ListSchemaExtensionsResult `object`
  * NextToken [NextToken](#nexttoken)
  * SchemaExtensionsInfo [SchemaExtensionsInfo](#schemaextensionsinfo)

### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * Limit [Limit](#limit)
  * NextToken [NextToken](#nexttoken)
  * ResourceId **required** [ResourceId](#resourceid)

### ListTagsForResourceResult
* ListTagsForResourceResult `object`
  * NextToken [NextToken](#nexttoken)
  * Tags [Tags](#tags)

### ManualSnapshotsLimitReached
* ManualSnapshotsLimitReached `boolean`

### NextToken
* NextToken `string`

### OrganizationalUnitDN
* OrganizationalUnitDN `string`

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
  * AuthenticationProtocol [RadiusAuthenticationProtocol](#radiusauthenticationprotocol)
  * DisplayLabel [RadiusDisplayLabel](#radiusdisplaylabel)
  * RadiusPort [PortNumber](#portnumber)
  * RadiusRetries [RadiusRetries](#radiusretries)
  * RadiusServers [Servers](#servers)
  * RadiusTimeout [RadiusTimeout](#radiustimeout)
  * SharedSecret [RadiusSharedSecret](#radiussharedsecret)
  * UseSameUsername [UseSameUsername](#usesameusername)

### RadiusSharedSecret
* RadiusSharedSecret `string`

### RadiusStatus
* RadiusStatus `string` (values: Creating, Completed, Failed)

### RadiusTimeout
* RadiusTimeout `integer`

### RegisterEventTopicRequest
* RegisterEventTopicRequest `object`: Registers a new event topic.
  * DirectoryId **required** [DirectoryId](#directoryid)
  * TopicName **required** [TopicName](#topicname)

### RegisterEventTopicResult
* RegisterEventTopicResult `object`: The result of a RegisterEventTopic request.

### RemoteDomainName
* RemoteDomainName `string`

### RemoteDomainNames
* RemoteDomainNames `array`
  * items [RemoteDomainName](#remotedomainname)

### RemoveIpRoutesRequest
* RemoveIpRoutesRequest `object`
  * CidrIps **required** [CidrIps](#cidrips)
  * DirectoryId **required** [DirectoryId](#directoryid)

### RemoveIpRoutesResult
* RemoveIpRoutesResult `object`

### RemoveTagsFromResourceRequest
* RemoveTagsFromResourceRequest `object`
  * ResourceId **required** [ResourceId](#resourceid)
  * TagKeys **required** [TagKeys](#tagkeys)

### RemoveTagsFromResourceResult
* RemoveTagsFromResourceResult `object`

### ReplicationScope
* ReplicationScope `string` (values: Domain)

### RequestId
* RequestId `string`: The AWS request identifier.

### ResourceId
* ResourceId `string`

### RestoreFromSnapshotRequest
* RestoreFromSnapshotRequest `object`: An object representing the inputs for the <a>RestoreFromSnapshot</a> operation.
  * SnapshotId **required** [SnapshotId](#snapshotid)

### RestoreFromSnapshotResult
* RestoreFromSnapshotResult `object`: Contains the results of the <a>RestoreFromSnapshot</a> operation.

### SID
* SID `string`

### SchemaExtensionId
* SchemaExtensionId `string`

### SchemaExtensionInfo
* SchemaExtensionInfo `object`: Information about a schema extension.
  * Description [Description](#description)
  * DirectoryId [DirectoryId](#directoryid)
  * EndDateTime [EndDateTime](#enddatetime)
  * SchemaExtensionId [SchemaExtensionId](#schemaextensionid)
  * SchemaExtensionStatus [SchemaExtensionStatus](#schemaextensionstatus)
  * SchemaExtensionStatusReason [SchemaExtensionStatusReason](#schemaextensionstatusreason)
  * StartDateTime [StartDateTime](#startdatetime)

### SchemaExtensionStatus
* SchemaExtensionStatus `string` (values: Initializing, CreatingSnapshot, UpdatingSchema, Replicating, CancelInProgress, RollbackInProgress, Cancelled, Failed, Completed)

### SchemaExtensionStatusReason
* SchemaExtensionStatusReason `string`

### SchemaExtensionsInfo
* SchemaExtensionsInfo `array`
  * items [SchemaExtensionInfo](#schemaextensioninfo)

### SecurityGroupId
* SecurityGroupId `string`

### Server
* Server `string`

### Servers
* Servers `array`
  * items [Server](#server)

### ServiceException
* ServiceException `object`: An exception has occurred in AWS Directory Service.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### Snapshot
* Snapshot `object`: Describes a directory snapshot.
  * DirectoryId [DirectoryId](#directoryid)
  * Name [SnapshotName](#snapshotname)
  * SnapshotId [SnapshotId](#snapshotid)
  * StartTime [StartTime](#starttime)
  * Status [SnapshotStatus](#snapshotstatus)
  * Type [SnapshotType](#snapshottype)

### SnapshotId
* SnapshotId `string`

### SnapshotIds
* SnapshotIds `array`: A list of directory snapshot identifiers.
  * items [SnapshotId](#snapshotid)

### SnapshotLimitExceededException
* SnapshotLimitExceededException `object`: The maximum number of manual snapshots for the directory has been reached. You can use the <a>GetSnapshotLimits</a> operation to determine the snapshot limits for a directory.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### SnapshotLimits
* SnapshotLimits `object`: Contains manual snapshot limit information for a directory.
  * ManualSnapshotsCurrentCount [Limit](#limit)
  * ManualSnapshotsLimit [Limit](#limit)
  * ManualSnapshotsLimitReached [ManualSnapshotsLimitReached](#manualsnapshotslimitreached)

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
  * CreateSnapshotBeforeSchemaExtension **required** [CreateSnapshotBeforeSchemaExtension](#createsnapshotbeforeschemaextension)
  * Description **required** [Description](#description)
  * DirectoryId **required** [DirectoryId](#directoryid)
  * LdifContent **required** [LdifContent](#ldifcontent)

### StartSchemaExtensionResult
* StartSchemaExtensionResult `object`
  * SchemaExtensionId [SchemaExtensionId](#schemaextensionid)

### StartTime
* StartTime `string`

### StateLastUpdatedDateTime
* StateLastUpdatedDateTime `string`

### SubnetId
* SubnetId `string`

### SubnetIds
* SubnetIds `array`
  * items [SubnetId](#subnetid)

### Tag
* Tag `object`: Metadata assigned to a directory consisting of a key-value pair.
  * Key **required** [TagKey](#tagkey)
  * Value **required** [TagValue](#tagvalue)

### TagKey
* TagKey `string`

### TagKeys
* TagKeys `array`
  * items [TagKey](#tagkey)

### TagLimitExceededException
* TagLimitExceededException `object`: The maximum allowed number of tags was exceeded.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### TagValue
* TagValue `string`

### Tags
* Tags `array`
  * items [Tag](#tag)

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
* Trust `object`: Describes a trust relationship between an Microsoft AD in the AWS cloud and an external domain.
  * CreatedDateTime [CreatedDateTime](#createddatetime)
  * DirectoryId [DirectoryId](#directoryid)
  * LastUpdatedDateTime [LastUpdatedDateTime](#lastupdateddatetime)
  * RemoteDomainName [RemoteDomainName](#remotedomainname)
  * StateLastUpdatedDateTime [StateLastUpdatedDateTime](#statelastupdateddatetime)
  * TrustDirection [TrustDirection](#trustdirection)
  * TrustId [TrustId](#trustid)
  * TrustState [TrustState](#truststate)
  * TrustStateReason [TrustStateReason](#truststatereason)
  * TrustType [TrustType](#trusttype)

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
* TrustState `string` (values: Creating, Created, Verifying, VerifyFailed, Verified, Deleting, Deleted, Failed)

### TrustStateReason
* TrustStateReason `string`

### TrustType
* TrustType `string` (values: Forest)

### Trusts
* Trusts `array`
  * items [Trust](#trust)

### UnsupportedOperationException
* UnsupportedOperationException `object`: The operation is not supported.
  * Message [ExceptionMessage](#exceptionmessage)
  * RequestId [RequestId](#requestid)

### UpdateConditionalForwarderRequest
* UpdateConditionalForwarderRequest `object`: Updates a conditional forwarder.
  * DirectoryId **required** [DirectoryId](#directoryid)
  * DnsIpAddrs **required** [DnsIpAddrs](#dnsipaddrs)
  * RemoteDomainName **required** [RemoteDomainName](#remotedomainname)

### UpdateConditionalForwarderResult
* UpdateConditionalForwarderResult `object`: The result of an UpdateConditionalForwarder request.

### UpdateNumberOfDomainControllersRequest
* UpdateNumberOfDomainControllersRequest `object`
  * DesiredNumber **required** [DesiredNumberOfDomainControllers](#desirednumberofdomaincontrollers)
  * DirectoryId **required** [DirectoryId](#directoryid)

### UpdateNumberOfDomainControllersResult
* UpdateNumberOfDomainControllersResult `object`

### UpdateRadiusRequest
* UpdateRadiusRequest `object`: Contains the inputs for the <a>UpdateRadius</a> operation.
  * DirectoryId **required** [DirectoryId](#directoryid)
  * RadiusSettings **required** [RadiusSettings](#radiussettings)

### UpdateRadiusResult
* UpdateRadiusResult `object`: Contains the results of the <a>UpdateRadius</a> operation.

### UpdateSecurityGroupForDirectoryControllers
* UpdateSecurityGroupForDirectoryControllers `boolean`

### UseSameUsername
* UseSameUsername `boolean`

### UserName
* UserName `string`

### VerifyTrustRequest
* VerifyTrustRequest `object`: Initiates the verification of an existing trust relationship between a Microsoft AD in the AWS cloud and an external domain.
  * TrustId **required** [TrustId](#trustid)

### VerifyTrustResult
* VerifyTrustResult `object`: Result of a VerifyTrust request.
  * TrustId [TrustId](#trustid)

### VpcId
* VpcId `string`


