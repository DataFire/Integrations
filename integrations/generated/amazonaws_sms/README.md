# @datafire/amazonaws_sms

Client library for AWS Server Migration Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_sms
```

```js
let datafire = require('datafire');
let amazonaws_sms = require('@datafire/amazonaws_sms').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_sms: account,
  }
})

amazonaws_sms.CreateReplicationJob({}, context).then(data => {
  console.log(data);
})
```

## Description
Amazon Server Migration Service automates the process of migrating servers to EC2.

## Actions
### CreateReplicationJob
The CreateReplicationJob API is used to create a ReplicationJob to replicate a server on AWS. Call this API to first create a ReplicationJob, which will then schedule periodic ReplicationRuns to replicate your server to AWS. Each ReplicationRun will result in the creation of an AWS AMI.


```js
amazonaws_sms.CreateReplicationJob({
  "body": {
    "serverId": "",
    "seedReplicationTime": "",
    "frequency": 0
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteReplicationJob
The DeleteReplicationJob API is used to delete a ReplicationJob, resulting in no further ReplicationRuns. This will delete the contents of the S3 bucket used to store SMS artifacts, but will not delete any AMIs created by the SMS service.


```js
amazonaws_sms.DeleteReplicationJob({
  "body": {
    "replicationJobId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteServerCatalog
The DeleteServerCatalog API clears all servers from your server catalog. This means that these servers will no longer be accessible to the Server Migration Service.


```js
amazonaws_sms.DeleteServerCatalog({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DisassociateConnector
The DisassociateConnector API will disassociate a connector from the Server Migration Service, rendering it unavailable to support replication jobs.


```js
amazonaws_sms.DisassociateConnector({
  "body": {
    "connectorId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetConnectors
The GetConnectors API returns a list of connectors that are registered with the Server Migration Service.


```js
amazonaws_sms.GetConnectors({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* maxResults (string) - Pagination limit
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetReplicationJobs
The GetReplicationJobs API will return all of your ReplicationJobs and their details. This API returns a paginated list, that may be consecutively called with nextToken to retrieve all ReplicationJobs.


```js
amazonaws_sms.GetReplicationJobs({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* maxResults (string) - Pagination limit
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetReplicationRuns
The GetReplicationRuns API will return all ReplicationRuns for a given ReplicationJob. This API returns a paginated list, that may be consecutively called with nextToken to retrieve all ReplicationRuns for a ReplicationJob.


```js
amazonaws_sms.GetReplicationRuns({
  "body": {
    "replicationJobId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* maxResults (string) - Pagination limit
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### GetServers
The GetServers API returns a list of all servers in your server catalog. For this call to succeed, you must previously have called ImportServerCatalog.


```js
amazonaws_sms.GetServers({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* maxResults (string) - Pagination limit
* nextToken (string) - Pagination token
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ImportServerCatalog
The ImportServerCatalog API is used to gather the complete list of on-premises servers on your premises. This API call requires connectors to be installed and monitoring all servers you would like imported. This API call returns immediately, but may take some time to retrieve all of the servers.


```js
amazonaws_sms.ImportServerCatalog({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### StartOnDemandReplicationRun
The StartOnDemandReplicationRun API is used to start a ReplicationRun on demand (in addition to those that are scheduled based on your frequency). This ReplicationRun will start immediately. StartOnDemandReplicationRun is subject to limits on how many on demand ReplicationRuns you may call per 24-hour period.


```js
amazonaws_sms.StartOnDemandReplicationRun({
  "body": {
    "replicationJobId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateReplicationJob
The UpdateReplicationJob API is used to change the settings of your existing ReplicationJob created using CreateReplicationJob. Calling this API will affect the next scheduled ReplicationRun.


```js
amazonaws_sms.UpdateReplicationJob({
  "body": {
    "replicationJobId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

