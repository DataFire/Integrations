# @datafire/amazonaws_opsworks_cm

Client library for AWS OpsWorks for Chef Automate

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_opsworks_cm
```

```js
let datafire = require('datafire');
let amazonaws_opsworks_cm = require('@datafire/amazonaws_opsworks_cm').create();

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

#### Parameters
* EngineAttributes (array) **required**
* NodeName (string) **required** - The node name that is used by <code>chef-client</code> for a new node. For more information, see the <a href="http://docs.aws.amazon.com/https:/docs.chef.io/nodes.html#about-node-names">Chef Documentation</a>. 
* ServerName (string) **required**

### CreateBackup



```js
amazonaws_opsworks_cm.CreateBackup({
  "ServerName": ""
}, context)
```

#### Parameters
* Description (string)
* ServerName (string) **required**

### CreateServer



```js
amazonaws_opsworks_cm.CreateServer({
  "ServerName": "",
  "InstanceProfileArn": "",
  "InstanceType": "",
  "ServiceRoleArn": ""
}, context)
```

#### Parameters
* AssociatePublicIpAddress (boolean)
* BackupId (string)
* BackupRetentionCount (integer)
* DisableAutomatedBackup (boolean)
* Engine (string)
* EngineAttributes (array)
* EngineModel (string)
* EngineVersion (string)
* InstanceProfileArn (string) **required**
* InstanceType (string) **required**
* KeyPair (string)
* PreferredBackupWindow (string) - <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
* PreferredMaintenanceWindow (string) - <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
* SecurityGroupIds (array)
* ServerName (string) **required**
* ServiceRoleArn (string) **required**
* SubnetIds (array)

### DeleteBackup



```js
amazonaws_opsworks_cm.DeleteBackup({
  "BackupId": ""
}, context)
```

#### Parameters
* BackupId (string) **required**

### DeleteServer



```js
amazonaws_opsworks_cm.DeleteServer({
  "ServerName": ""
}, context)
```

#### Parameters
* ServerName (string) **required**

### DescribeAccountAttributes



```js
amazonaws_opsworks_cm.DescribeAccountAttributes({}, context)
```

#### Parameters
*This action has no parameters*

### DescribeBackups



```js
amazonaws_opsworks_cm.DescribeBackups({}, context)
```

#### Parameters
* BackupId (string)
* MaxResults (integer)
* NextToken (string)
* ServerName (string)

### DescribeEvents



```js
amazonaws_opsworks_cm.DescribeEvents({
  "ServerName": ""
}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* ServerName (string) **required**

### DescribeNodeAssociationStatus



```js
amazonaws_opsworks_cm.DescribeNodeAssociationStatus({
  "NodeAssociationStatusToken": "",
  "ServerName": ""
}, context)
```

#### Parameters
* NodeAssociationStatusToken (string) **required**
* ServerName (string) **required**

### DescribeServers



```js
amazonaws_opsworks_cm.DescribeServers({}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* ServerName (string)

### DisassociateNode



```js
amazonaws_opsworks_cm.DisassociateNode({
  "ServerName": "",
  "NodeName": ""
}, context)
```

#### Parameters
* EngineAttributes (array)
* NodeName (string) **required** - The node name that is used by <code>chef-client</code> for a new node. For more information, see the <a href="http://docs.aws.amazon.com/https:/docs.chef.io/nodes.html#about-node-names">Chef Documentation</a>. 
* ServerName (string) **required**

### RestoreServer



```js
amazonaws_opsworks_cm.RestoreServer({
  "BackupId": "",
  "ServerName": ""
}, context)
```

#### Parameters
* BackupId (string) **required**
* InstanceType (string)
* KeyPair (string)
* ServerName (string) **required**

### StartMaintenance



```js
amazonaws_opsworks_cm.StartMaintenance({
  "ServerName": ""
}, context)
```

#### Parameters
* ServerName (string) **required**

### UpdateServer



```js
amazonaws_opsworks_cm.UpdateServer({
  "ServerName": ""
}, context)
```

#### Parameters
* BackupRetentionCount (integer)
* DisableAutomatedBackup (boolean)
* PreferredBackupWindow (string) - <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
* PreferredMaintenanceWindow (string) - <p> <code>DDD:HH:MM</code> (weekly start time) or <code>HH:MM</code> (daily start time). </p> <p> Time windows always use coordinated universal time (UTC). Valid strings for day of week (<code>DDD</code>) are: <code>Mon</code>, <code>Tue</code>, <code>Wed</code>, <code>Thr</code>, <code>Fri</code>, <code>Sat</code>, or <code>Sun</code>.</p>
* ServerName (string) **required**

### UpdateServerEngineAttributes



```js
amazonaws_opsworks_cm.UpdateServerEngineAttributes({
  "ServerName": "",
  "AttributeName": ""
}, context)
```

#### Parameters
* AttributeName (string) **required**
* AttributeValue (string)
* ServerName (string) **required**

