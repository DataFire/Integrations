# @datafire/amazonaws_sms

Client library for AWS Server Migration Service

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_sms
```

```js
let datafire = require('datafire');
let amazonaws_sms = require('@datafire/amazonaws_sms').actions;
let context = new datafire.Context();

amazonaws_sms.CreateReplicationJob({}, context).then(data => {
  console.log(data);
})
```

## Description
Amazon Server Migration Service automates the process of migrating servers to EC2.

## Actions
### CreateReplicationJob



```js
amazonaws_sms.CreateReplicationJob({}, context)
```

#### Parameters

### DeleteReplicationJob



```js
amazonaws_sms.DeleteReplicationJob({}, context)
```

#### Parameters

### DeleteServerCatalog



```js
amazonaws_sms.DeleteServerCatalog({}, context)
```

#### Parameters

### DisassociateConnector



```js
amazonaws_sms.DisassociateConnector({}, context)
```

#### Parameters

### GetConnectors



```js
amazonaws_sms.GetConnectors({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### GetReplicationJobs



```js
amazonaws_sms.GetReplicationJobs({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### GetReplicationRuns



```js
amazonaws_sms.GetReplicationRuns({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### GetServers



```js
amazonaws_sms.GetServers({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### ImportServerCatalog



```js
amazonaws_sms.ImportServerCatalog({}, context)
```

#### Parameters

### StartOnDemandReplicationRun



```js
amazonaws_sms.StartOnDemandReplicationRun({}, context)
```

#### Parameters

### UpdateReplicationJob



```js
amazonaws_sms.UpdateReplicationJob({}, context)
```

#### Parameters

