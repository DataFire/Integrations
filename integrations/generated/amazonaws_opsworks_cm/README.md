# @datafire/amazonaws_opsworks_cm

Client library for AWS OpsWorks CM

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_opsworks_cm
```
```js
let amazonaws_opsworks_cm = require('@datafire/amazonaws_opsworks_cm').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<fullname>AWS OpsWorks CM</fullname> <p>AWS OpsWorks for configuration management (CM) is a service that runs and manages configuration management servers. You can use AWS OpsWorks CM to create and manage AWS OpsWorks for Chef Automate and AWS OpsWorks for Puppet Enterprise servers, and add or remove nodes for the servers to manage.</p> <p> <b>Glossary of terms</b> </p> <ul> <li> <p> <b>Server</b>: A configuration management server that can be highly-available. The configuration management server runs on an Amazon Elastic Compute Cloud (EC2) instance, and may use various other AWS services, such as Amazon Relational Database Service (RDS) and Elastic Load Balancing. A server is a generic abstraction over the configuration manager that you want to use, much like Amazon RDS. In AWS OpsWorks CM, you do not start or stop servers. After you create servers, they continue to run until they are deleted.</p> </li> <li> <p> <b>Engine</b>: The engine is the specific configuration manager that you want to use. Valid values in this release include <code>ChefAutomate</code> and <code>Puppet</code>.</p> </li> <li> <p> <b>Backup</b>: This is an application-level backup of the data that the configuration manager stores. AWS OpsWorks CM creates an S3 bucket for backups when you launch the first server. A backup maintains a snapshot of a server's configuration-related attributes at the time the backup starts.</p> </li> <li> <p> <b>Events</b>: Events are always related to a server. Events are written during server creation, when health checks run, when backups are created, when system maintenance is performed, etc. When you delete a server, the server's events are also deleted.</p> </li> <li> <p> <b>Account attributes</b>: Every account has attributes that are assigned in the AWS OpsWorks CM database. These attributes store information about configuration limits (servers, backups, etc.) and your customer account. </p> </li> </ul> <p> <b>Endpoints</b> </p> <p>AWS OpsWorks CM supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Your servers can only be accessed or managed within the endpoint in which they are created.</p> <ul> <li> <p>opsworks-cm.us-east-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-east-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-west-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-west-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.ap-northeast-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.ap-southeast-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.ap-southeast-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.eu-central-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.eu-west-1.amazonaws.com</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/opsworks-service.html">AWS OpsWorks endpoints and quotas</a> in the AWS General Reference.</p> <p> <b>Throttling limits</b> </p> <p>All API operations allow for five requests per second with a burst of 10 requests per second.</p>

## Actions

### AssociateNode



```js
amazonaws_opsworks_cm.AssociateNode({
  "ServerName": null,
  "NodeName": null,
  "EngineAttributes": null
}, context)
```

#### Input
* input `object`
  * EngineAttributes **required**
    * items [EngineAttribute](#engineattribute)
  * NodeName **required**
  * ServerName **required**

#### Output
* output [AssociateNodeResponse](#associatenoderesponse)

### CreateBackup



```js
amazonaws_opsworks_cm.CreateBackup({
  "ServerName": null
}, context)
```

#### Input
* input `object`
  * Description
  * ServerName **required**
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateBackupResponse](#createbackupresponse)

### CreateServer



```js
amazonaws_opsworks_cm.CreateServer({
  "Engine": null,
  "ServerName": null,
  "InstanceProfileArn": null,
  "InstanceType": null,
  "ServiceRoleArn": null
}, context)
```

#### Input
* input `object`
  * AssociatePublicIpAddress
  * BackupId
  * BackupRetentionCount
  * CustomCertificate
  * CustomDomain
  * CustomPrivateKey
  * DisableAutomatedBackup
  * Engine **required**
  * EngineAttributes
    * items [EngineAttribute](#engineattribute)
  * EngineModel
  * EngineVersion
  * InstanceProfileArn **required**
  * InstanceType **required**
  * KeyPair
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * SecurityGroupIds
    * items [String](#string)
  * ServerName **required**
  * ServiceRoleArn **required**
  * SubnetIds
    * items [String](#string)
  * Tags
    * items [Tag](#tag)

#### Output
* output [CreateServerResponse](#createserverresponse)

### DeleteBackup



```js
amazonaws_opsworks_cm.DeleteBackup({
  "BackupId": null
}, context)
```

#### Input
* input `object`
  * BackupId **required**

#### Output
* output [DeleteBackupResponse](#deletebackupresponse)

### DeleteServer



```js
amazonaws_opsworks_cm.DeleteServer({
  "ServerName": null
}, context)
```

#### Input
* input `object`
  * ServerName **required**

#### Output
* output [DeleteServerResponse](#deleteserverresponse)

### DescribeAccountAttributes



```js
amazonaws_opsworks_cm.DescribeAccountAttributes({}, context)
```

#### Input
* input `object`

#### Output
* output [DescribeAccountAttributesResponse](#describeaccountattributesresponse)

### DescribeBackups



```js
amazonaws_opsworks_cm.DescribeBackups({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * BackupId
  * MaxResults
  * NextToken
  * ServerName

#### Output
* output [DescribeBackupsResponse](#describebackupsresponse)

### DescribeEvents



```js
amazonaws_opsworks_cm.DescribeEvents({
  "ServerName": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ServerName **required**

#### Output
* output [DescribeEventsResponse](#describeeventsresponse)

### DescribeNodeAssociationStatus



```js
amazonaws_opsworks_cm.DescribeNodeAssociationStatus({
  "NodeAssociationStatusToken": null,
  "ServerName": null
}, context)
```

#### Input
* input `object`
  * NodeAssociationStatusToken **required**
  * ServerName **required**

#### Output
* output [DescribeNodeAssociationStatusResponse](#describenodeassociationstatusresponse)

### DescribeServers



```js
amazonaws_opsworks_cm.DescribeServers({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ServerName

#### Output
* output [DescribeServersResponse](#describeserversresponse)

### DisassociateNode



```js
amazonaws_opsworks_cm.DisassociateNode({
  "ServerName": null,
  "NodeName": null
}, context)
```

#### Input
* input `object`
  * EngineAttributes
    * items [EngineAttribute](#engineattribute)
  * NodeName **required**
  * ServerName **required**

#### Output
* output [DisassociateNodeResponse](#disassociatenoderesponse)

### ExportServerEngineAttribute



```js
amazonaws_opsworks_cm.ExportServerEngineAttribute({
  "ExportAttributeName": null,
  "ServerName": null
}, context)
```

#### Input
* input `object`
  * ExportAttributeName **required**
  * InputAttributes
    * items [EngineAttribute](#engineattribute)
  * ServerName **required**

#### Output
* output [ExportServerEngineAttributeResponse](#exportserverengineattributeresponse)

### ListTagsForResource



```js
amazonaws_opsworks_cm.ListTagsForResource({
  "ResourceArn": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ResourceArn **required**

#### Output
* output [ListTagsForResourceResponse](#listtagsforresourceresponse)

### RestoreServer



```js
amazonaws_opsworks_cm.RestoreServer({
  "BackupId": null,
  "ServerName": null
}, context)
```

#### Input
* input `object`
  * BackupId **required**
  * InstanceType
  * KeyPair
  * ServerName **required**

#### Output
* output [RestoreServerResponse](#restoreserverresponse)

### StartMaintenance



```js
amazonaws_opsworks_cm.StartMaintenance({
  "ServerName": null
}, context)
```

#### Input
* input `object`
  * EngineAttributes
    * items [EngineAttribute](#engineattribute)
  * ServerName **required**

#### Output
* output [StartMaintenanceResponse](#startmaintenanceresponse)

### TagResource



```js
amazonaws_opsworks_cm.TagResource({
  "ResourceArn": null,
  "Tags": null
}, context)
```

#### Input
* input `object`
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

#### Output
* output [TagResourceResponse](#tagresourceresponse)

### UntagResource



```js
amazonaws_opsworks_cm.UntagResource({
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

### UpdateServer



```js
amazonaws_opsworks_cm.UpdateServer({
  "ServerName": null
}, context)
```

#### Input
* input `object`
  * BackupRetentionCount
  * DisableAutomatedBackup
  * PreferredBackupWindow [TimeWindowDefinition](#timewindowdefinition)
  * PreferredMaintenanceWindow [TimeWindowDefinition](#timewindowdefinition)
  * ServerName **required**

#### Output
* output [UpdateServerResponse](#updateserverresponse)

### UpdateServerEngineAttributes



```js
amazonaws_opsworks_cm.UpdateServerEngineAttributes({
  "ServerName": null,
  "AttributeName": null
}, context)
```

#### Input
* input `object`
  * AttributeName **required**
  * AttributeValue
  * ServerName **required**

#### Output
* output [UpdateServerEngineAttributesResponse](#updateserverengineattributesresponse)



## Definitions

### AWSOpsWorksCMResourceArn
* AWSOpsWorksCMResourceArn `string`

### AccountAttribute
* AccountAttribute `object`: Stores account attributes. 
  * Maximum
  * Name
  * Used

### AccountAttributes
* AccountAttributes `array`:  A list of individual account attributes. 
  * items [AccountAttribute](#accountattribute)

### AssociateNodeRequest
* AssociateNodeRequest `object`
  * EngineAttributes **required**
    * items [EngineAttribute](#engineattribute)
  * NodeName **required**
  * ServerName **required**

### AssociateNodeResponse
* AssociateNodeResponse `object`
  * NodeAssociationStatusToken

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `string`

### Backup
* Backup `object`: Describes a single backup. 
  * BackupArn
  * BackupId
  * BackupType
  * CreatedAt
  * Description
  * Engine
  * EngineModel
  * EngineVersion
  * InstanceProfileArn
  * InstanceType
  * KeyPair
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * S3DataSize
  * S3DataUrl
  * S3LogUrl
  * SecurityGroupIds
    * items [String](#string)
  * ServerName
  * ServiceRoleArn
  * Status
  * StatusDescription
  * SubnetIds
    * items [String](#string)
  * ToolsVersion
  * UserArn

### BackupId
* BackupId `string`

### BackupRetentionCountDefinition
* BackupRetentionCountDefinition `integer`

### BackupStatus
* BackupStatus `string` (values: IN_PROGRESS, OK, FAILED, DELETING)

### BackupType
* BackupType `string` (values: AUTOMATED, MANUAL)

### Backups
* Backups `array`
  * items [Backup](#backup)

### Boolean
* Boolean `boolean`

### CreateBackupRequest
* CreateBackupRequest `object`
  * Description
  * ServerName **required**
  * Tags
    * items [Tag](#tag)

### CreateBackupResponse
* CreateBackupResponse `object`
  * Backup
    * BackupArn
    * BackupId
    * BackupType
    * CreatedAt
    * Description
    * Engine
    * EngineModel
    * EngineVersion
    * InstanceProfileArn
    * InstanceType
    * KeyPair
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * S3DataSize
    * S3DataUrl
    * S3LogUrl
    * SecurityGroupIds
      * items [String](#string)
    * ServerName
    * ServiceRoleArn
    * Status
    * StatusDescription
    * SubnetIds
      * items [String](#string)
    * ToolsVersion
    * UserArn

### CreateServerRequest
* CreateServerRequest `object`
  * AssociatePublicIpAddress
  * BackupId
  * BackupRetentionCount
  * CustomCertificate
  * CustomDomain
  * CustomPrivateKey
  * DisableAutomatedBackup
  * Engine **required**
  * EngineAttributes
    * items [EngineAttribute](#engineattribute)
  * EngineModel
  * EngineVersion
  * InstanceProfileArn **required**
  * InstanceType **required**
  * KeyPair
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * SecurityGroupIds
    * items [String](#string)
  * ServerName **required**
  * ServiceRoleArn **required**
  * SubnetIds
    * items [String](#string)
  * Tags
    * items [Tag](#tag)

### CreateServerResponse
* CreateServerResponse `object`
  * Server
    * AssociatePublicIpAddress
    * BackupRetentionCount
    * CloudFormationStackArn
    * CreatedAt
    * CustomDomain
    * DisableAutomatedBackup
    * Endpoint
    * Engine
    * EngineAttributes
      * items [EngineAttribute](#engineattribute)
    * EngineModel
    * EngineVersion
    * InstanceProfileArn
    * InstanceType
    * KeyPair
    * MaintenanceStatus
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * SecurityGroupIds
      * items [String](#string)
    * ServerArn
    * ServerName
    * ServiceRoleArn
    * Status
    * StatusReason
    * SubnetIds
      * items [String](#string)

### CustomCertificate
* CustomCertificate `string`

### CustomDomain
* CustomDomain `string`

### CustomPrivateKey
* CustomPrivateKey `string`

### DeleteBackupRequest
* DeleteBackupRequest `object`
  * BackupId **required**

### DeleteBackupResponse
* DeleteBackupResponse `object`

### DeleteServerRequest
* DeleteServerRequest `object`
  * ServerName **required**

### DeleteServerResponse
* DeleteServerResponse `object`

### DescribeAccountAttributesRequest
* DescribeAccountAttributesRequest `object`

### DescribeAccountAttributesResponse
* DescribeAccountAttributesResponse `object`
  * Attributes
    * items [AccountAttribute](#accountattribute)

### DescribeBackupsRequest
* DescribeBackupsRequest `object`
  * BackupId
  * MaxResults
  * NextToken
  * ServerName

### DescribeBackupsResponse
* DescribeBackupsResponse `object`
  * Backups
    * items [Backup](#backup)
  * NextToken

### DescribeEventsRequest
* DescribeEventsRequest `object`
  * MaxResults
  * NextToken
  * ServerName **required**

### DescribeEventsResponse
* DescribeEventsResponse `object`
  * NextToken
  * ServerEvents
    * items [ServerEvent](#serverevent)

### DescribeNodeAssociationStatusRequest
* DescribeNodeAssociationStatusRequest `object`
  * NodeAssociationStatusToken **required**
  * ServerName **required**

### DescribeNodeAssociationStatusResponse
* DescribeNodeAssociationStatusResponse `object`
  * EngineAttributes
    * items [EngineAttribute](#engineattribute)
  * NodeAssociationStatus

### DescribeServersRequest
* DescribeServersRequest `object`
  * MaxResults
  * NextToken
  * ServerName

### DescribeServersResponse
* DescribeServersResponse `object`
  * NextToken
  * Servers
    * items [Server](#server)

### DisassociateNodeRequest
* DisassociateNodeRequest `object`
  * EngineAttributes
    * items [EngineAttribute](#engineattribute)
  * NodeName **required**
  * ServerName **required**

### DisassociateNodeResponse
* DisassociateNodeResponse `object`
  * NodeAssociationStatusToken

### EngineAttribute
* EngineAttribute `object`: A name and value pair that is specific to the engine of the server. 
  * Name
  * Value

### EngineAttributeName
* EngineAttributeName `string`

### EngineAttributeValue
* EngineAttributeValue `string`

### EngineAttributes
* EngineAttributes `array`
  * items [EngineAttribute](#engineattribute)

### ExportServerEngineAttributeRequest
* ExportServerEngineAttributeRequest `object`
  * ExportAttributeName **required**
  * InputAttributes
    * items [EngineAttribute](#engineattribute)
  * ServerName **required**

### ExportServerEngineAttributeResponse
* ExportServerEngineAttributeResponse `object`
  * EngineAttribute
    * Name
    * Value
  * ServerName

### InstanceProfileArn
* InstanceProfileArn `string`

### Integer
* Integer `integer`

### InvalidNextTokenException


### InvalidStateException


### KeyPair
* KeyPair `string`

### LimitExceededException


### ListTagsForResourceRequest
* ListTagsForResourceRequest `object`
  * MaxResults
  * NextToken
  * ResourceArn **required**

### ListTagsForResourceResponse
* ListTagsForResourceResponse `object`
  * NextToken
  * Tags
    * items [Tag](#tag)

### MaintenanceStatus
* MaintenanceStatus `string` (values: SUCCESS, FAILED)

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### NodeAssociationStatus
* NodeAssociationStatus `string` (values: SUCCESS, FAILED, IN_PROGRESS): <p>The status of the association or disassociation request. </p> <p class="title"> <b>Possible values:</b> </p> <ul> <li> <p> <code>SUCCESS</code>: The association or disassociation succeeded. </p> </li> <li> <p> <code>FAILED</code>: The association or disassociation failed. </p> </li> <li> <p> <code>IN_PROGRESS</code>: The association or disassociation is still in progress. </p> </li> </ul>

### NodeAssociationStatusToken
* NodeAssociationStatusToken `string`

### NodeName
* NodeName `string`: The node name that is used by <code>chef-client</code> or <code>puppet-agent</code>for a new node. We recommend to use a unique FQDN as hostname. For more information, see the <a href="https://docs.aws.amazon.com/https:/docs.chef.io/nodes.html#about-node-names">Chef</a> or <a href="https://docs.aws.amazon.com/https:/docs.puppet.com/puppet/4.10/man/agent.html">Puppet</a> documentation. 

### ResourceAlreadyExistsException


### ResourceNotFoundException


### RestoreServerRequest
* RestoreServerRequest `object`
  * BackupId **required**
  * InstanceType
  * KeyPair
  * ServerName **required**

### RestoreServerResponse
* RestoreServerResponse `object`

### Server
* Server `object`: Describes a configuration management server. 
  * AssociatePublicIpAddress
  * BackupRetentionCount
  * CloudFormationStackArn
  * CreatedAt
  * CustomDomain
  * DisableAutomatedBackup
  * Endpoint
  * Engine
  * EngineAttributes
    * items [EngineAttribute](#engineattribute)
  * EngineModel
  * EngineVersion
  * InstanceProfileArn
  * InstanceType
  * KeyPair
  * MaintenanceStatus
  * PreferredBackupWindow
  * PreferredMaintenanceWindow
  * SecurityGroupIds
    * items [String](#string)
  * ServerArn
  * ServerName
  * ServiceRoleArn
  * Status
  * StatusReason
  * SubnetIds
    * items [String](#string)

### ServerEvent
* ServerEvent `object`: An event that is related to the server, such as the start of maintenance or backup. 
  * CreatedAt
  * LogUrl
  * Message
  * ServerName

### ServerEvents
* ServerEvents `array`
  * items [ServerEvent](#serverevent)

### ServerName
* ServerName `string`

### ServerStatus
* ServerStatus `string` (values: BACKING_UP, CONNECTION_LOST, CREATING, DELETING, MODIFYING, FAILED, HEALTHY, RUNNING, RESTORING, SETUP, UNDER_MAINTENANCE, UNHEALTHY, TERMINATED)

### Servers
* Servers `array`
  * items [Server](#server)

### ServiceRoleArn
* ServiceRoleArn `string`

### StartMaintenanceRequest
* StartMaintenanceRequest `object`
  * EngineAttributes
    * items [EngineAttribute](#engineattribute)
  * ServerName **required**

### StartMaintenanceResponse
* StartMaintenanceResponse `object`
  * Server
    * AssociatePublicIpAddress
    * BackupRetentionCount
    * CloudFormationStackArn
    * CreatedAt
    * CustomDomain
    * DisableAutomatedBackup
    * Endpoint
    * Engine
    * EngineAttributes
      * items [EngineAttribute](#engineattribute)
    * EngineModel
    * EngineVersion
    * InstanceProfileArn
    * InstanceType
    * KeyPair
    * MaintenanceStatus
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * SecurityGroupIds
      * items [String](#string)
    * ServerArn
    * ServerName
    * ServiceRoleArn
    * Status
    * StatusReason
    * SubnetIds
      * items [String](#string)

### String
* String `string`

### Strings
* Strings `array`
  * items [String](#string)

### Tag
* Tag `object`: A map that contains tag keys and tag values to attach to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server. Leading and trailing white spaces are trimmed from both the key and value. A maximum of 50 user-applied tags is allowed for tag-supported AWS OpsWorks-CM resources.
  * Key **required**
  * Value **required**

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
  * ResourceArn **required**
  * Tags **required**
    * items [Tag](#tag)

### TagResourceResponse
* TagResourceResponse `object`

### TagValue
* TagValue `string`

### TimeWindowDefinition
* TimeWindowDefinition `string`: <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>

### Timestamp
* Timestamp `string`

### UntagResourceRequest
* UntagResourceRequest `object`
  * ResourceArn **required**
  * TagKeys **required**
    * items [TagKey](#tagkey)

### UntagResourceResponse
* UntagResourceResponse `object`

### UpdateServerEngineAttributesRequest
* UpdateServerEngineAttributesRequest `object`
  * AttributeName **required**
  * AttributeValue
  * ServerName **required**

### UpdateServerEngineAttributesResponse
* UpdateServerEngineAttributesResponse `object`
  * Server
    * AssociatePublicIpAddress
    * BackupRetentionCount
    * CloudFormationStackArn
    * CreatedAt
    * CustomDomain
    * DisableAutomatedBackup
    * Endpoint
    * Engine
    * EngineAttributes
      * items [EngineAttribute](#engineattribute)
    * EngineModel
    * EngineVersion
    * InstanceProfileArn
    * InstanceType
    * KeyPair
    * MaintenanceStatus
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * SecurityGroupIds
      * items [String](#string)
    * ServerArn
    * ServerName
    * ServiceRoleArn
    * Status
    * StatusReason
    * SubnetIds
      * items [String](#string)

### UpdateServerRequest
* UpdateServerRequest `object`
  * BackupRetentionCount
  * DisableAutomatedBackup
  * PreferredBackupWindow [TimeWindowDefinition](#timewindowdefinition)
  * PreferredMaintenanceWindow [TimeWindowDefinition](#timewindowdefinition)
  * ServerName **required**

### UpdateServerResponse
* UpdateServerResponse `object`
  * Server
    * AssociatePublicIpAddress
    * BackupRetentionCount
    * CloudFormationStackArn
    * CreatedAt
    * CustomDomain
    * DisableAutomatedBackup
    * Endpoint
    * Engine
    * EngineAttributes
      * items [EngineAttribute](#engineattribute)
    * EngineModel
    * EngineVersion
    * InstanceProfileArn
    * InstanceType
    * KeyPair
    * MaintenanceStatus
    * PreferredBackupWindow
    * PreferredMaintenanceWindow
    * SecurityGroupIds
      * items [String](#string)
    * ServerArn
    * ServerName
    * ServiceRoleArn
    * Status
    * StatusReason
    * SubnetIds
      * items [String](#string)

### ValidationException



