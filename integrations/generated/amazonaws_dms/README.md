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
* DynamoDbSettings (object) - <p/>
* EndpointIdentifier (string) **required**
* EndpointType (string) **required**
* EngineName (string) **required**
* ExtraConnectionAttributes (string)
* KmsKeyId (string)
* MongoDbSettings (object) - <p/>
* Password (string)
* Port (integer)
* S3Settings (object) - <p/>
* ServerName (string)
* SslMode (string)
* Tags (array)
* Username (string)

### CreateEventSubscription



```js
amazonaws_dms.CreateEventSubscription({
  "SubscriptionName": "",
  "SnsTopicArn": ""
}, context)
```

#### Parameters
* Enabled (boolean)
* EventCategories (array)
* SnsTopicArn (string) **required**
* SourceIds (array)
* SourceType (string)
* SubscriptionName (string) **required**
* Tags (array)

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

### DeleteEventSubscription



```js
amazonaws_dms.DeleteEventSubscription({
  "SubscriptionName": ""
}, context)
```

#### Parameters
* SubscriptionName (string) **required**

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
* MaxRecords (string)
* Marker (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeConnections



```js
amazonaws_dms.DescribeConnections({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeEndpointTypes



```js
amazonaws_dms.DescribeEndpointTypes({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeEndpoints



```js
amazonaws_dms.DescribeEndpoints({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeEventCategories



```js
amazonaws_dms.DescribeEventCategories({}, context)
```

#### Parameters
* Filters (array)
* SourceType (string)

### DescribeEventSubscriptions



```js
amazonaws_dms.DescribeEventSubscriptions({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)
* SubscriptionName (string)

### DescribeEvents



```js
amazonaws_dms.DescribeEvents({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Duration (integer)
* EndTime (string)
* EventCategories (array)
* Filters (array)
* Marker (string)
* MaxRecords (integer)
* SourceIdentifier (string)
* SourceType (string)
* StartTime (string)

### DescribeOrderableReplicationInstances



```js
amazonaws_dms.DescribeOrderableReplicationInstances({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
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
* MaxRecords (string)
* Marker (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeReplicationSubnetGroups



```js
amazonaws_dms.DescribeReplicationSubnetGroups({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
* Filters (array)
* Marker (string)
* MaxRecords (integer)

### DescribeReplicationTasks



```js
amazonaws_dms.DescribeReplicationTasks({}, context)
```

#### Parameters
* MaxRecords (string)
* Marker (string)
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
* MaxRecords (string)
* Marker (string)
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
* MaxRecords (string)
* Marker (string)
* Filters (array)
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
* Tags (array)

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
* DynamoDbSettings (object) - <p/>
* EndpointArn (string) **required**
* EndpointIdentifier (string)
* EndpointType (string)
* EngineName (string)
* ExtraConnectionAttributes (string)
* MongoDbSettings (object) - <p/>
* Password (string)
* Port (integer)
* S3Settings (object) - <p/>
* ServerName (string)
* SslMode (string)
* Username (string)

### ModifyEventSubscription



```js
amazonaws_dms.ModifyEventSubscription({
  "SubscriptionName": ""
}, context)
```

#### Parameters
* Enabled (boolean)
* EventCategories (array)
* SnsTopicArn (string)
* SourceType (string)
* SubscriptionName (string) **required**

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

### ReloadTables



```js
amazonaws_dms.ReloadTables({
  "ReplicationTaskArn": "",
  "TablesToReload": []
}, context)
```

#### Parameters
* ReplicationTaskArn (string) **required**
* TablesToReload (array) **required**

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

