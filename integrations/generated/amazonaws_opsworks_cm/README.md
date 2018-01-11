# @datafire/amazonaws_opsworks_cm

Client library for AWS OpsWorks for Chef Automate

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

amazonaws_opsworks_cm.AssociateNode({}).then(data => {
  console.log(data);
})
```

## Description

<fullname>AWS OpsWorks for Chef Automate</fullname> <p> AWS OpsWorks for Chef Automate is a service that runs and manages configuration management servers. </p> <p> <b>Glossary of terms</b> </p> <ul> <li> <p> <b>Server</b>: A configuration management server that can be highly-available. The configuration manager runs on your instances by using various AWS services, such as Amazon Elastic Compute Cloud (EC2), and potentially Amazon Relational Database Service (RDS). A server is a generic abstraction over the configuration manager that you want to use, much like Amazon RDS. In AWS OpsWorks for Chef Automate, you do not start or stop servers. After you create servers, they continue to run until they are deleted.</p> </li> <li> <p> <b>Engine</b>: The specific configuration manager that you want to use (such as <code>Chef</code>) is the engine.</p> </li> <li> <p> <b>Backup</b>: This is an application-level backup of the data that the configuration manager stores. A backup creates a .tar.gz file that is stored in an Amazon Simple Storage Service (S3) bucket in your account. AWS OpsWorks for Chef Automate creates the S3 bucket when you launch the first instance. A backup maintains a snapshot of all of a server's important attributes at the time of the backup.</p> </li> <li> <p> <b>Events</b>: Events are always related to a server. Events are written during server creation, when health checks run, when backups are created, etc. When you delete a server, the server's events are also deleted.</p> </li> <li> <p> <b>AccountAttributes</b>: Every account has attributes that are assigned in the AWS OpsWorks for Chef Automate database. These attributes store information about configuration limits (servers, backups, etc.) and your customer account. </p> </li> </ul> <p> <b>Endpoints</b> </p> <p>AWS OpsWorks for Chef Automate supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Chef servers can only be accessed or managed within the endpoint in which they are created.</p> <ul> <li> <p>opsworks-cm.us-east-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-west-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.eu-west-1.amazonaws.com</p> </li> </ul> <p> <b>Throttling limits</b> </p> <p>All API operations allow for five requests per second with a burst of 10 requests per second.</p>

## Actions

### AssociateNode



```js
amazonaws_opsworks_cm.AssociateNode({
  "ServerName": "",
  "NodeName": "",
  "EngineAttributes": []
}, context)
```

#### Input
* input `object`
  * EngineAttributes **required** [EngineAttributes](#engineattributes)
  * NodeName **required** [NodeName](#nodename)
  * ServerName **required** [ServerName](#servername)

#### Output
* output [AssociateNodeResponse](#associatenoderesponse)

### CreateBackup



```js
amazonaws_opsworks_cm.CreateBackup({
  "ServerName": ""
}, context)
```

#### Input
* input `object`
  * Description [String](#string)
  * ServerName **required** [ServerName](#servername)

#### Output
* output [CreateBackupResponse](#createbackupresponse)

### CreateServer



```js
amazonaws_opsworks_cm.CreateServer({
  "ServerName": "",
  "InstanceProfileArn": "",
  "InstanceType": "",
  "ServiceRoleArn": ""
}, context)
```

#### Input
* input `object`
  * AssociatePublicIpAddress [Boolean](#boolean)
  * BackupId [BackupId](#backupid)
  * BackupRetentionCount [BackupRetentionCountDefinition](#backupretentioncountdefinition)
  * DisableAutomatedBackup [Boolean](#boolean)
  * Engine [String](#string)
  * EngineAttributes [EngineAttributes](#engineattributes)
  * EngineModel [String](#string)
  * EngineVersion [String](#string)
  * InstanceProfileArn **required** [InstanceProfileArn](#instanceprofilearn)
  * InstanceType **required** [String](#string)
  * KeyPair [KeyPair](#keypair)
  * PreferredBackupWindow [TimeWindowDefinition](#timewindowdefinition)
  * PreferredMaintenanceWindow [TimeWindowDefinition](#timewindowdefinition)
  * SecurityGroupIds [Strings](#strings)
  * ServerName **required** [ServerName](#servername)
  * ServiceRoleArn **required** [ServiceRoleArn](#servicerolearn)
  * SubnetIds [Strings](#strings)

#### Output
* output [CreateServerResponse](#createserverresponse)

### DeleteBackup



```js
amazonaws_opsworks_cm.DeleteBackup({
  "BackupId": ""
}, context)
```

#### Input
* input `object`
  * BackupId **required** [BackupId](#backupid)

#### Output
* output [DeleteBackupResponse](#deletebackupresponse)

### DeleteServer



```js
amazonaws_opsworks_cm.DeleteServer({
  "ServerName": ""
}, context)
```

#### Input
* input `object`
  * ServerName **required** [ServerName](#servername)

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
  * BackupId [BackupId](#backupid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ServerName [ServerName](#servername)

#### Output
* output [DescribeBackupsResponse](#describebackupsresponse)

### DescribeEvents



```js
amazonaws_opsworks_cm.DescribeEvents({
  "ServerName": ""
}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ServerName **required** [ServerName](#servername)

#### Output
* output [DescribeEventsResponse](#describeeventsresponse)

### DescribeNodeAssociationStatus



```js
amazonaws_opsworks_cm.DescribeNodeAssociationStatus({
  "NodeAssociationStatusToken": "",
  "ServerName": ""
}, context)
```

#### Input
* input `object`
  * NodeAssociationStatusToken **required** [NodeAssociationStatusToken](#nodeassociationstatustoken)
  * ServerName **required** [ServerName](#servername)

#### Output
* output [DescribeNodeAssociationStatusResponse](#describenodeassociationstatusresponse)

### DescribeServers



```js
amazonaws_opsworks_cm.DescribeServers({}, context)
```

#### Input
* input `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ServerName [ServerName](#servername)

#### Output
* output [DescribeServersResponse](#describeserversresponse)

### DisassociateNode



```js
amazonaws_opsworks_cm.DisassociateNode({
  "ServerName": "",
  "NodeName": ""
}, context)
```

#### Input
* input `object`
  * EngineAttributes [EngineAttributes](#engineattributes)
  * NodeName **required** [NodeName](#nodename)
  * ServerName **required** [ServerName](#servername)

#### Output
* output [DisassociateNodeResponse](#disassociatenoderesponse)

### RestoreServer



```js
amazonaws_opsworks_cm.RestoreServer({
  "BackupId": "",
  "ServerName": ""
}, context)
```

#### Input
* input `object`
  * BackupId **required** [BackupId](#backupid)
  * InstanceType [String](#string)
  * KeyPair [KeyPair](#keypair)
  * ServerName **required** [ServerName](#servername)

#### Output
* output [RestoreServerResponse](#restoreserverresponse)

### StartMaintenance



```js
amazonaws_opsworks_cm.StartMaintenance({
  "ServerName": ""
}, context)
```

#### Input
* input `object`
  * EngineAttributes [EngineAttributes](#engineattributes)
  * ServerName **required** [ServerName](#servername)

#### Output
* output [StartMaintenanceResponse](#startmaintenanceresponse)

### UpdateServer



```js
amazonaws_opsworks_cm.UpdateServer({
  "ServerName": ""
}, context)
```

#### Input
* input `object`
  * BackupRetentionCount [Integer](#integer)
  * DisableAutomatedBackup [Boolean](#boolean)
  * PreferredBackupWindow [TimeWindowDefinition](#timewindowdefinition)
  * PreferredMaintenanceWindow [TimeWindowDefinition](#timewindowdefinition)
  * ServerName **required** [ServerName](#servername)

#### Output
* output [UpdateServerResponse](#updateserverresponse)

### UpdateServerEngineAttributes



```js
amazonaws_opsworks_cm.UpdateServerEngineAttributes({
  "ServerName": "",
  "AttributeName": ""
}, context)
```

#### Input
* input `object`
  * AttributeName **required** [AttributeName](#attributename)
  * AttributeValue [AttributeValue](#attributevalue)
  * ServerName **required** [ServerName](#servername)

#### Output
* output [UpdateServerEngineAttributesResponse](#updateserverengineattributesresponse)



## Definitions

### AccountAttribute
* AccountAttribute `object`: Stores account attributes. 
  * Maximum [Integer](#integer)
  * Name [String](#string)
  * Used [Integer](#integer)

### AccountAttributes
* AccountAttributes `array`:  A list of individual account attributes. 
  * items [AccountAttribute](#accountattribute)

### AssociateNodeRequest
* AssociateNodeRequest `object`
  * EngineAttributes **required** [EngineAttributes](#engineattributes)
  * NodeName **required** [NodeName](#nodename)
  * ServerName **required** [ServerName](#servername)

### AssociateNodeResponse
* AssociateNodeResponse `object`
  * NodeAssociationStatusToken [NodeAssociationStatusToken](#nodeassociationstatustoken)

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `string`

### Backup
* Backup `object`: Describes a single backup. 
  * BackupArn [String](#string)
  * BackupId [BackupId](#backupid)
  * BackupType [BackupType](#backuptype)
  * CreatedAt [Timestamp](#timestamp)
  * Description [String](#string)
  * Engine [String](#string)
  * EngineModel [String](#string)
  * EngineVersion [String](#string)
  * InstanceProfileArn [String](#string)
  * InstanceType [String](#string)
  * KeyPair [String](#string)
  * PreferredBackupWindow [TimeWindowDefinition](#timewindowdefinition)
  * PreferredMaintenanceWindow [TimeWindowDefinition](#timewindowdefinition)
  * S3DataSize [Integer](#integer)
  * S3DataUrl [String](#string)
  * S3LogUrl [String](#string)
  * SecurityGroupIds [Strings](#strings)
  * ServerName [ServerName](#servername)
  * ServiceRoleArn [String](#string)
  * Status [BackupStatus](#backupstatus)
  * StatusDescription [String](#string)
  * SubnetIds [Strings](#strings)
  * ToolsVersion [String](#string)
  * UserArn [String](#string)

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
  * Description [String](#string)
  * ServerName **required** [ServerName](#servername)

### CreateBackupResponse
* CreateBackupResponse `object`
  * Backup [Backup](#backup)

### CreateServerRequest
* CreateServerRequest `object`
  * AssociatePublicIpAddress [Boolean](#boolean)
  * BackupId [BackupId](#backupid)
  * BackupRetentionCount [BackupRetentionCountDefinition](#backupretentioncountdefinition)
  * DisableAutomatedBackup [Boolean](#boolean)
  * Engine [String](#string)
  * EngineAttributes [EngineAttributes](#engineattributes)
  * EngineModel [String](#string)
  * EngineVersion [String](#string)
  * InstanceProfileArn **required** [InstanceProfileArn](#instanceprofilearn)
  * InstanceType **required** [String](#string)
  * KeyPair [KeyPair](#keypair)
  * PreferredBackupWindow [TimeWindowDefinition](#timewindowdefinition)
  * PreferredMaintenanceWindow [TimeWindowDefinition](#timewindowdefinition)
  * SecurityGroupIds [Strings](#strings)
  * ServerName **required** [ServerName](#servername)
  * ServiceRoleArn **required** [ServiceRoleArn](#servicerolearn)
  * SubnetIds [Strings](#strings)

### CreateServerResponse
* CreateServerResponse `object`
  * Server [Server](#server)

### DeleteBackupRequest
* DeleteBackupRequest `object`
  * BackupId **required** [BackupId](#backupid)

### DeleteBackupResponse
* DeleteBackupResponse `object`

### DeleteServerRequest
* DeleteServerRequest `object`
  * ServerName **required** [ServerName](#servername)

### DeleteServerResponse
* DeleteServerResponse `object`

### DescribeAccountAttributesRequest
* DescribeAccountAttributesRequest `object`

### DescribeAccountAttributesResponse
* DescribeAccountAttributesResponse `object`
  * Attributes [AccountAttributes](#accountattributes)

### DescribeBackupsRequest
* DescribeBackupsRequest `object`
  * BackupId [BackupId](#backupid)
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ServerName [ServerName](#servername)

### DescribeBackupsResponse
* DescribeBackupsResponse `object`
  * Backups [Backups](#backups)
  * NextToken [String](#string)

### DescribeEventsRequest
* DescribeEventsRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ServerName **required** [ServerName](#servername)

### DescribeEventsResponse
* DescribeEventsResponse `object`
  * NextToken [String](#string)
  * ServerEvents [ServerEvents](#serverevents)

### DescribeNodeAssociationStatusRequest
* DescribeNodeAssociationStatusRequest `object`
  * NodeAssociationStatusToken **required** [NodeAssociationStatusToken](#nodeassociationstatustoken)
  * ServerName **required** [ServerName](#servername)

### DescribeNodeAssociationStatusResponse
* DescribeNodeAssociationStatusResponse `object`
  * EngineAttributes [EngineAttributes](#engineattributes)
  * NodeAssociationStatus [NodeAssociationStatus](#nodeassociationstatus)

### DescribeServersRequest
* DescribeServersRequest `object`
  * MaxResults [MaxResults](#maxresults)
  * NextToken [NextToken](#nexttoken)
  * ServerName [ServerName](#servername)

### DescribeServersResponse
* DescribeServersResponse `object`
  * NextToken [String](#string)
  * Servers [Servers](#servers)

### DisassociateNodeRequest
* DisassociateNodeRequest `object`
  * EngineAttributes [EngineAttributes](#engineattributes)
  * NodeName **required** [NodeName](#nodename)
  * ServerName **required** [ServerName](#servername)

### DisassociateNodeResponse
* DisassociateNodeResponse `object`
  * NodeAssociationStatusToken [NodeAssociationStatusToken](#nodeassociationstatustoken)

### EngineAttribute
* EngineAttribute `object`: A name and value pair that is specific to the engine of the server. 
  * Name [EngineAttributeName](#engineattributename)
  * Value [EngineAttributeValue](#engineattributevalue)

### EngineAttributeName
* EngineAttributeName `string`

### EngineAttributeValue
* EngineAttributeValue `string`

### EngineAttributes
* EngineAttributes `array`
  * items [EngineAttribute](#engineattribute)

### InstanceProfileArn
* InstanceProfileArn `string`

### Integer
* Integer `integer`

### InvalidNextTokenException
* InvalidNextTokenException `object`: This occurs when the provided nextToken is not valid. 
  * Message [String](#string)

### InvalidStateException
* InvalidStateException `object`: The resource is in a state that does not allow you to perform a specified action. 
  * Message [String](#string)

### KeyPair
* KeyPair `string`

### LimitExceededException
* LimitExceededException `object`: The limit of servers or backups has been reached. 
  * Message [String](#string)

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
* NodeName `string`: The node name that is used by <code>chef-client</code> for a new node. For more information, see the <a href="http://docs.aws.amazon.com/https:/docs.chef.io/nodes.html#about-node-names">Chef Documentation</a>. 

### ResourceAlreadyExistsException
* ResourceAlreadyExistsException `object`: The requested resource cannot be created because it already exists. 
  * Message [String](#string)

### ResourceNotFoundException
* ResourceNotFoundException `object`: The requested resource does not exist, or access was denied. 
  * Message [String](#string)

### RestoreServerRequest
* RestoreServerRequest `object`
  * BackupId **required** [BackupId](#backupid)
  * InstanceType [String](#string)
  * KeyPair [KeyPair](#keypair)
  * ServerName **required** [ServerName](#servername)

### RestoreServerResponse
* RestoreServerResponse `object`

### Server
* Server `object`: Describes a configuration management server. 
  * AssociatePublicIpAddress [Boolean](#boolean)
  * BackupRetentionCount [Integer](#integer)
  * CloudFormationStackArn [String](#string)
  * CreatedAt [Timestamp](#timestamp)
  * DisableAutomatedBackup [Boolean](#boolean)
  * Endpoint [String](#string)
  * Engine [String](#string)
  * EngineAttributes [EngineAttributes](#engineattributes)
  * EngineModel [String](#string)
  * EngineVersion [String](#string)
  * InstanceProfileArn [String](#string)
  * InstanceType [String](#string)
  * KeyPair [String](#string)
  * MaintenanceStatus [MaintenanceStatus](#maintenancestatus)
  * PreferredBackupWindow [TimeWindowDefinition](#timewindowdefinition)
  * PreferredMaintenanceWindow [TimeWindowDefinition](#timewindowdefinition)
  * SecurityGroupIds [Strings](#strings)
  * ServerArn [String](#string)
  * ServerName [String](#string)
  * ServiceRoleArn [String](#string)
  * Status [ServerStatus](#serverstatus)
  * StatusReason [String](#string)
  * SubnetIds [Strings](#strings)

### ServerEvent
* ServerEvent `object`: An event that is related to the server, such as the start of maintenance or backup. 
  * CreatedAt [Timestamp](#timestamp)
  * LogUrl [String](#string)
  * Message [String](#string)
  * ServerName [String](#string)

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
  * EngineAttributes [EngineAttributes](#engineattributes)
  * ServerName **required** [ServerName](#servername)

### StartMaintenanceResponse
* StartMaintenanceResponse `object`
  * Server [Server](#server)

### String
* String `string`

### Strings
* Strings `array`
  * items [String](#string)

### TimeWindowDefinition
* TimeWindowDefinition `string`: <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>

### Timestamp
* Timestamp `string`

### UpdateServerEngineAttributesRequest
* UpdateServerEngineAttributesRequest `object`
  * AttributeName **required** [AttributeName](#attributename)
  * AttributeValue [AttributeValue](#attributevalue)
  * ServerName **required** [ServerName](#servername)

### UpdateServerEngineAttributesResponse
* UpdateServerEngineAttributesResponse `object`
  * Server [Server](#server)

### UpdateServerRequest
* UpdateServerRequest `object`
  * BackupRetentionCount [Integer](#integer)
  * DisableAutomatedBackup [Boolean](#boolean)
  * PreferredBackupWindow [TimeWindowDefinition](#timewindowdefinition)
  * PreferredMaintenanceWindow [TimeWindowDefinition](#timewindowdefinition)
  * ServerName **required** [ServerName](#servername)

### UpdateServerResponse
* UpdateServerResponse `object`
  * Server [Server](#server)

### ValidationException
* ValidationException `object`: One or more of the provided request parameters are not valid. 
  * Message [String](#string)


