# @datafire/amazonaws_dms

Client library for AWS Database Migration Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_dms
```

```js
let datafire = require('datafire');
let amazonaws_dms = require('@datafire/amazonaws_dms').create();

amazonaws_dms.AddTagsToResource({}).then(data => {
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


### CreateEndpoint



```js
amazonaws_dms.CreateEndpoint({}, context)
```


### CreateReplicationInstance



```js
amazonaws_dms.CreateReplicationInstance({}, context)
```


### CreateReplicationSubnetGroup



```js
amazonaws_dms.CreateReplicationSubnetGroup({}, context)
```


### CreateReplicationTask



```js
amazonaws_dms.CreateReplicationTask({}, context)
```


### DeleteCertificate



```js
amazonaws_dms.DeleteCertificate({}, context)
```


### DeleteEndpoint



```js
amazonaws_dms.DeleteEndpoint({}, context)
```


### DeleteReplicationInstance



```js
amazonaws_dms.DeleteReplicationInstance({}, context)
```


### DeleteReplicationSubnetGroup



```js
amazonaws_dms.DeleteReplicationSubnetGroup({}, context)
```


### DeleteReplicationTask



```js
amazonaws_dms.DeleteReplicationTask({}, context)
```


### DescribeAccountAttributes



```js
amazonaws_dms.DescribeAccountAttributes({}, context)
```


### DescribeCertificates



```js
amazonaws_dms.DescribeCertificates({}, context)
```


### DescribeConnections



```js
amazonaws_dms.DescribeConnections({}, context)
```


### DescribeEndpointTypes



```js
amazonaws_dms.DescribeEndpointTypes({}, context)
```


### DescribeEndpoints



```js
amazonaws_dms.DescribeEndpoints({}, context)
```


### DescribeOrderableReplicationInstances



```js
amazonaws_dms.DescribeOrderableReplicationInstances({}, context)
```


### DescribeRefreshSchemasStatus



```js
amazonaws_dms.DescribeRefreshSchemasStatus({}, context)
```


### DescribeReplicationInstances



```js
amazonaws_dms.DescribeReplicationInstances({}, context)
```


### DescribeReplicationSubnetGroups



```js
amazonaws_dms.DescribeReplicationSubnetGroups({}, context)
```


### DescribeReplicationTasks



```js
amazonaws_dms.DescribeReplicationTasks({}, context)
```


### DescribeSchemas



```js
amazonaws_dms.DescribeSchemas({}, context)
```


### DescribeTableStatistics



```js
amazonaws_dms.DescribeTableStatistics({}, context)
```


### ImportCertificate



```js
amazonaws_dms.ImportCertificate({}, context)
```


### ListTagsForResource



```js
amazonaws_dms.ListTagsForResource({}, context)
```


### ModifyEndpoint



```js
amazonaws_dms.ModifyEndpoint({}, context)
```


### ModifyReplicationInstance



```js
amazonaws_dms.ModifyReplicationInstance({}, context)
```


### ModifyReplicationSubnetGroup



```js
amazonaws_dms.ModifyReplicationSubnetGroup({}, context)
```


### ModifyReplicationTask



```js
amazonaws_dms.ModifyReplicationTask({}, context)
```


### RefreshSchemas



```js
amazonaws_dms.RefreshSchemas({}, context)
```


### RemoveTagsFromResource



```js
amazonaws_dms.RemoveTagsFromResource({}, context)
```


### StartReplicationTask



```js
amazonaws_dms.StartReplicationTask({}, context)
```


### StopReplicationTask



```js
amazonaws_dms.StopReplicationTask({}, context)
```


### TestConnection



```js
amazonaws_dms.TestConnection({}, context)
```


