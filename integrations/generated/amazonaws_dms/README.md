# @datafire/amazonaws_dms

Client library for AWS Database Migration Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_dms
```

```js
let datafire = require('datafire');
let amazonaws_dms = require('@datafire/amazonaws_dms').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_dms.AddTagsToResource({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Database Migration Service</fullname> <p>AWS Database Migration Service (AWS DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL.</p> <p>For more information about AWS DMS, see the AWS DMS user guide at <a href="http://docs.aws.amazon.com/dms/latest/userguide/Welcome.html"> What Is AWS Database Migration Service? </a> </p>

## Actions
### AddTagsToResource



```js
amazonaws_dms.AddTagsToResource({
  "ResourceArn": "",
  "Tags": []
}, context)
```

#### Parameters
* ResourceArn (string) **required**
* Tags (array) **required**

### CreateEndpoint



```js
amazonaws_dms.CreateEndpoint({
  "EndpointIdentifier": "",
  "EndpointType": "",
  "EngineName": ""
}, context)
```

#### Parameters
* CertificateArn (string)
* DatabaseName (string)
* EndpointIdentifier (string) **required**
* EndpointType (string) **required**
* EngineName (string) **required**
* ExtraConnectionAttributes (string)
* KmsKeyId (string)
* Password (string)
* Port (integer)
* ServerName (string)
* SslMode (string)
* Tags (array)
* Username (string)

### CreateReplicationInstance



```js
amazonaws_dms.CreateReplicationInstance({
  "ReplicationInstanceIdentifier": "",
  "ReplicationInstanceClass": ""
}, context)
```

#### Parameters
* AllocatedStorage (integer)
* AutoMinorVersionUpgrade (boolean)
* AvailabilityZone (string)
* EngineVersion (string)
* KmsKeyId (string)
* MultiAZ (boolean)
* PreferredMaintenanceWindow (string)
* PubliclyAccessible (boolean)
* ReplicationInstanceClass (string) **required**
* ReplicationInstanceIdentifier (string) **required**
* ReplicationSubnetGroupIdentifier (string)
* Tags (array)
* VpcSecurityGroupIds (array)

### CreateReplicationSubnetGroup



```js
amazonaws_dms.CreateReplicationSubnetGroup({
  "ReplicationSubnetGroupIdentifier": "",
  "ReplicationSubnetGroupDescription": "",
  "SubnetIds": []
}, context)
```

#### Parameters
* ReplicationSubnetGroupDescription (string) **required**
* ReplicationSubnetGroupIdentifier (string) **required**
* SubnetIds (array) **required**
* Tags (array)

### CreateReplicationTask



```js
amazonaws_dms.CreateReplicationTask({
  "ReplicationTaskIdentifier": "",
  "SourceEndpointArn": "",
  "TargetEndpointArn": "",
  "ReplicationInstanceArn": "",
  "MigrationType": "",
  "TableMappings": ""
}, context)
```

#### Parameters
* CdcStartTime (string)
* MigrationType (string) **required**
* ReplicationInstanceArn (string) **required**
* ReplicationTaskIdentifier (string) **required**
* ReplicationTaskSettings (string)
* SourceEndpointArn (string) **required**
* TableMappings (string) **required**
* Tags (array)
* TargetEndpointArn (string) **required**

### DeleteCertificate



```js
amazonaws_dms.DeleteCertificate({
  "CertificateArn": ""
}, context)
```

#### Parameters
* CertificateArn (string) **required**

### DeleteEndpoint



```js
amazonaws_dms.DeleteEndpoint({
  "EndpointArn": ""
}, context)
```

#### Parameters
* EndpointArn (string) **required**

### DeleteReplicationInstance



```js
amazonaws_dms.DeleteReplicationInstance({
  "ReplicationInstanceArn": ""
}, context)
```

#### Parameters
* ReplicationInstanceArn (string) **required**

### DeleteReplicationSubnetGroup



```js
amazonaws_dms.DeleteReplicationSubnetGroup({
  "ReplicationSubnetGroupIdentifier": ""
}, context)
```

#### Parameters
* ReplicationSubnetGroupIdentifier (string) **required**

### DeleteReplicationTask



```js
amazonaws_dms.DeleteReplicationTask({
  "ReplicationTaskArn": ""
}, context)
```

#### Parameters
* ReplicationTaskArn (string) **required**

### DescribeAccountAttributes



```js
amazonaws_dms.DescribeAccountAttributes({}, context)
```

#### Parameters
*This action has no parameters*

### DescribeCertificates



```js
amazonaws_dms.DescribeCertificates({}, context)
```

#### Parameters
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeConnections



```js
amazonaws_dms.DescribeConnections({}, context)
```

#### Parameters
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeEndpointTypes



```js
amazonaws_dms.DescribeEndpointTypes({}, context)
```

#### Parameters
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeEndpoints



```js
amazonaws_dms.DescribeEndpoints({}, context)
```

#### Parameters
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeOrderableReplicationInstances



```js
amazonaws_dms.DescribeOrderableReplicationInstances({}, context)
```

#### Parameters
* Marker (string)
* MaxRecords (integer)

### DescribeRefreshSchemasStatus



```js
amazonaws_dms.DescribeRefreshSchemasStatus({
  "EndpointArn": ""
}, context)
```

#### Parameters
* EndpointArn (string) **required**

### DescribeReplicationInstances



```js
amazonaws_dms.DescribeReplicationInstances({}, context)
```

#### Parameters
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeReplicationSubnetGroups



```js
amazonaws_dms.DescribeReplicationSubnetGroups({}, context)
```

#### Parameters
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeReplicationTasks



```js
amazonaws_dms.DescribeReplicationTasks({}, context)
```

#### Parameters
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeSchemas



```js
amazonaws_dms.DescribeSchemas({
  "EndpointArn": ""
}, context)
```

#### Parameters
* EndpointArn (string) **required**
* Marker (string)
* MaxRecords (integer)

### DescribeTableStatistics



```js
amazonaws_dms.DescribeTableStatistics({
  "ReplicationTaskArn": ""
}, context)
```

#### Parameters
* Marker (string)
* MaxRecords (integer)
* ReplicationTaskArn (string) **required**

### ImportCertificate



```js
amazonaws_dms.ImportCertificate({
  "CertificateIdentifier": ""
}, context)
```

#### Parameters
* CertificateIdentifier (string) **required**
* CertificatePem (string)
* CertificateWallet (string)

### ListTagsForResource



```js
amazonaws_dms.ListTagsForResource({
  "ResourceArn": ""
}, context)
```

#### Parameters
* ResourceArn (string) **required**

### ModifyEndpoint



```js
amazonaws_dms.ModifyEndpoint({
  "EndpointArn": ""
}, context)
```

#### Parameters
* CertificateArn (string)
* DatabaseName (string)
* EndpointArn (string) **required**
* EndpointIdentifier (string)
* EndpointType (string)
* EngineName (string)
* ExtraConnectionAttributes (string)
* Password (string)
* Port (integer)
* ServerName (string)
* SslMode (string)
* Username (string)

### ModifyReplicationInstance



```js
amazonaws_dms.ModifyReplicationInstance({
  "ReplicationInstanceArn": ""
}, context)
```

#### Parameters
* AllocatedStorage (integer)
* AllowMajorVersionUpgrade (boolean)
* ApplyImmediately (boolean)
* AutoMinorVersionUpgrade (boolean)
* EngineVersion (string)
* MultiAZ (boolean)
* PreferredMaintenanceWindow (string)
* ReplicationInstanceArn (string) **required**
* ReplicationInstanceClass (string)
* ReplicationInstanceIdentifier (string)
* VpcSecurityGroupIds (array)

### ModifyReplicationSubnetGroup



```js
amazonaws_dms.ModifyReplicationSubnetGroup({
  "ReplicationSubnetGroupIdentifier": "",
  "SubnetIds": []
}, context)
```

#### Parameters
* ReplicationSubnetGroupDescription (string)
* ReplicationSubnetGroupIdentifier (string) **required**
* SubnetIds (array) **required**

### ModifyReplicationTask



```js
amazonaws_dms.ModifyReplicationTask({
  "ReplicationTaskArn": ""
}, context)
```

#### Parameters
* CdcStartTime (string)
* MigrationType (string)
* ReplicationTaskArn (string) **required**
* ReplicationTaskIdentifier (string)
* ReplicationTaskSettings (string)
* TableMappings (string)

### RefreshSchemas



```js
amazonaws_dms.RefreshSchemas({
  "EndpointArn": "",
  "ReplicationInstanceArn": ""
}, context)
```

#### Parameters
* EndpointArn (string) **required**
* ReplicationInstanceArn (string) **required**

### RemoveTagsFromResource



```js
amazonaws_dms.RemoveTagsFromResource({
  "ResourceArn": "",
  "TagKeys": []
}, context)
```

#### Parameters
* ResourceArn (string) **required**
* TagKeys (array) **required**

### StartReplicationTask



```js
amazonaws_dms.StartReplicationTask({
  "ReplicationTaskArn": "",
  "StartReplicationTaskType": ""
}, context)
```

#### Parameters
* CdcStartTime (string)
* ReplicationTaskArn (string) **required**
* StartReplicationTaskType (string) **required**

### StopReplicationTask



```js
amazonaws_dms.StopReplicationTask({
  "ReplicationTaskArn": ""
}, context)
```

#### Parameters
* ReplicationTaskArn (string) **required**

### TestConnection



```js
amazonaws_dms.TestConnection({
  "ReplicationInstanceArn": "",
  "EndpointArn": ""
}, context)
```

#### Parameters
* EndpointArn (string) **required**
* ReplicationInstanceArn (string) **required**

