# @datafire/amazonaws_sms

Client library for AWS Server Migration Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_sms
```

```js
let datafire = require('datafire');
let amazonaws_sms = require('@datafire/amazonaws_sms').create();

amazonaws_sms.CreateReplicationJob({}).then(data => {
  console.log(data);
})
```

## Description
Amazon Server Migration Service automates the process of migrating servers to EC2.

## Actions
### CreateReplicationJob



```js
amazonaws_sms.CreateReplicationJob({
  "serverId": "",
  "seedReplicationTime": "",
  "frequency": 0
}, context)
```

#### Parameters
* description (string) - The description for a Replication Job/Run.
* frequency (integer) **required** - Interval between Replication Runs. This value is specified in hours, and represents the time between consecutive Replication Runs.
* licenseType (string) - The license type to be used for the Amazon Machine Image (AMI) created after a successful ReplicationRun.
* roleName (string) - Name of service role in customer's account to be used by SMS service.
* seedReplicationTime (string) **required** - Timestamp of an operation
* serverId (string) **required** - Unique Identifier for a server

### DeleteReplicationJob



```js
amazonaws_sms.DeleteReplicationJob({
  "replicationJobId": ""
}, context)
```

#### Parameters
* replicationJobId (string) **required** - The unique identifier for a Replication Job.

### DeleteServerCatalog



```js
amazonaws_sms.DeleteServerCatalog({}, context)
```

#### Parameters
*This action has no parameters*

### DisassociateConnector



```js
amazonaws_sms.DisassociateConnector({
  "connectorId": ""
}, context)
```

#### Parameters
* connectorId (string) **required** - Unique Identifier for Connector

### GetConnectors



```js
amazonaws_sms.GetConnectors({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* maxResults (integer) - The maximum number of results to return in one API call. If left empty, this will default to 50.
* nextToken (string) - Pagination token to pass as input to API call

### GetReplicationJobs



```js
amazonaws_sms.GetReplicationJobs({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* maxResults (integer) - The maximum number of results to return in one API call. If left empty, this will default to 50.
* nextToken (string) - Pagination token to pass as input to API call
* replicationJobId (string) - The unique identifier for a Replication Job.

### GetReplicationRuns



```js
amazonaws_sms.GetReplicationRuns({
  "replicationJobId": ""
}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* maxResults (integer) - The maximum number of results to return in one API call. If left empty, this will default to 50.
* nextToken (string) - Pagination token to pass as input to API call
* replicationJobId (string) **required** - The unique identifier for a Replication Job.

### GetServers



```js
amazonaws_sms.GetServers({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)
* maxResults (integer) - The maximum number of results to return in one API call. If left empty, this will default to 50.
* nextToken (string) - Pagination token to pass as input to API call

### ImportServerCatalog



```js
amazonaws_sms.ImportServerCatalog({}, context)
```

#### Parameters
*This action has no parameters*

### StartOnDemandReplicationRun



```js
amazonaws_sms.StartOnDemandReplicationRun({
  "replicationJobId": ""
}, context)
```

#### Parameters
* description (string) - The description for a Replication Job/Run.
* replicationJobId (string) **required** - The unique identifier for a Replication Job.

### UpdateReplicationJob



```js
amazonaws_sms.UpdateReplicationJob({
  "replicationJobId": ""
}, context)
```

#### Parameters
* description (string) - The description for a Replication Job/Run.
* frequency (integer) - Interval between Replication Runs. This value is specified in hours, and represents the time between consecutive Replication Runs.
* licenseType (string) - The license type to be used for the Amazon Machine Image (AMI) created after a successful ReplicationRun.
* nextReplicationRunStartTime (string) - Timestamp of an operation
* replicationJobId (string) **required** - The unique identifier for a Replication Job.
* roleName (string) - Name of service role in customer's account to be used by SMS service.

