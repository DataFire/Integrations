# @datafire/amazonaws_dms

Client library for AWS Database Migration Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_dms
```

```js
let datafire = require('datafire');
let amazonaws_dms = require('@datafire/amazonaws_dms').actions;
let context = new datafire.Context();

amazonaws_dms.AddTagsToResource({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Database Migration Service</fullname> <p>AWS Database Migration Service (AWS DMS) can migrate your data to and from the most widely used commercial and open-source databases such as Oracle, PostgreSQL, Microsoft SQL Server, Amazon Redshift, MariaDB, Amazon Aurora, MySQL, and SAP Adaptive Server Enterprise (ASE). The service supports homogeneous migrations such as Oracle to Oracle, as well as heterogeneous migrations between different database platforms, such as Oracle to MySQL or SQL Server to PostgreSQL.</p> <p>For more information about AWS DMS, see the AWS DMS user guide at <a href="http://docs.aws.amazon.com/dms/latest/userguide/Welcome.html"> What Is AWS Database Migration Service? </a> </p>

## Actions
### AddTagsToResource



```js
amazonaws_dms.AddTagsToResource({}, context)
```

#### Parameters

### CreateEndpoint



```js
amazonaws_dms.CreateEndpoint({}, context)
```

#### Parameters

### CreateReplicationInstance



```js
amazonaws_dms.CreateReplicationInstance({}, context)
```

#### Parameters

### CreateReplicationSubnetGroup



```js
amazonaws_dms.CreateReplicationSubnetGroup({}, context)
```

#### Parameters

### CreateReplicationTask



```js
amazonaws_dms.CreateReplicationTask({}, context)
```

#### Parameters

### DeleteCertificate



```js
amazonaws_dms.DeleteCertificate({}, context)
```

#### Parameters

### DeleteEndpoint



```js
amazonaws_dms.DeleteEndpoint({}, context)
```

#### Parameters

### DeleteReplicationInstance



```js
amazonaws_dms.DeleteReplicationInstance({}, context)
```

#### Parameters

### DeleteReplicationSubnetGroup



```js
amazonaws_dms.DeleteReplicationSubnetGroup({}, context)
```

#### Parameters

### DeleteReplicationTask



```js
amazonaws_dms.DeleteReplicationTask({}, context)
```

#### Parameters

### DescribeAccountAttributes



```js
amazonaws_dms.DescribeAccountAttributes({}, context)
```

#### Parameters

### DescribeCertificates



```js
amazonaws_dms.DescribeCertificates({}, context)
```

#### Parameters

### DescribeConnections



```js
amazonaws_dms.DescribeConnections({}, context)
```

#### Parameters

### DescribeEndpointTypes



```js
amazonaws_dms.DescribeEndpointTypes({}, context)
```

#### Parameters

### DescribeEndpoints



```js
amazonaws_dms.DescribeEndpoints({}, context)
```

#### Parameters

### DescribeOrderableReplicationInstances



```js
amazonaws_dms.DescribeOrderableReplicationInstances({}, context)
```

#### Parameters

### DescribeRefreshSchemasStatus



```js
amazonaws_dms.DescribeRefreshSchemasStatus({}, context)
```

#### Parameters

### DescribeReplicationInstances



```js
amazonaws_dms.DescribeReplicationInstances({}, context)
```

#### Parameters

### DescribeReplicationSubnetGroups



```js
amazonaws_dms.DescribeReplicationSubnetGroups({}, context)
```

#### Parameters

### DescribeReplicationTasks



```js
amazonaws_dms.DescribeReplicationTasks({}, context)
```

#### Parameters

### DescribeSchemas



```js
amazonaws_dms.DescribeSchemas({}, context)
```

#### Parameters

### DescribeTableStatistics



```js
amazonaws_dms.DescribeTableStatistics({}, context)
```

#### Parameters

### ImportCertificate



```js
amazonaws_dms.ImportCertificate({}, context)
```

#### Parameters

### ListTagsForResource



```js
amazonaws_dms.ListTagsForResource({}, context)
```

#### Parameters

### ModifyEndpoint



```js
amazonaws_dms.ModifyEndpoint({}, context)
```

#### Parameters

### ModifyReplicationInstance



```js
amazonaws_dms.ModifyReplicationInstance({}, context)
```

#### Parameters

### ModifyReplicationSubnetGroup



```js
amazonaws_dms.ModifyReplicationSubnetGroup({}, context)
```

#### Parameters

### ModifyReplicationTask



```js
amazonaws_dms.ModifyReplicationTask({}, context)
```

#### Parameters

### RefreshSchemas



```js
amazonaws_dms.RefreshSchemas({}, context)
```

#### Parameters

### RemoveTagsFromResource



```js
amazonaws_dms.RemoveTagsFromResource({}, context)
```

#### Parameters

### StartReplicationTask



```js
amazonaws_dms.StartReplicationTask({}, context)
```

#### Parameters

### StopReplicationTask



```js
amazonaws_dms.StopReplicationTask({}, context)
```

#### Parameters

### TestConnection



```js
amazonaws_dms.TestConnection({}, context)
```

#### Parameters

