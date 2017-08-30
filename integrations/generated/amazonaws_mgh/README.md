# @datafire/amazonaws_mgh

Client library for AWS Migration Hub

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_mgh
```

```js
let datafire = require('datafire');
let amazonaws_mgh = require('@datafire/amazonaws_mgh').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_mgh.AssociateCreatedArtifact({}).then(data => {
  console.log(data);
})
```

## Description
<p/>

## Actions
### AssociateCreatedArtifact



```js
amazonaws_mgh.AssociateCreatedArtifact({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "CreatedArtifact": {
    "Name": ""
  }
}, context)
```

#### Parameters
* CreatedArtifact (object) **required** - An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.).
* DryRun (boolean)
* MigrationTaskName (string) **required**
* ProgressUpdateStream (string) **required**

### AssociateDiscoveredResource



```js
amazonaws_mgh.AssociateDiscoveredResource({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "DiscoveredResource": {
    "ConfigurationId": ""
  }
}, context)
```

#### Parameters
* DiscoveredResource (object) **required** - Object representing the on-premises resource being migrated.
* DryRun (boolean)
* MigrationTaskName (string) **required**
* ProgressUpdateStream (string) **required**

### CreateProgressUpdateStream



```js
amazonaws_mgh.CreateProgressUpdateStream({
  "ProgressUpdateStreamName": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* ProgressUpdateStreamName (string) **required**

### DeleteProgressUpdateStream



```js
amazonaws_mgh.DeleteProgressUpdateStream({
  "ProgressUpdateStreamName": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* ProgressUpdateStreamName (string) **required**

### DescribeApplicationState



```js
amazonaws_mgh.DescribeApplicationState({
  "ApplicationId": ""
}, context)
```

#### Parameters
* ApplicationId (string) **required**

### DescribeMigrationTask



```js
amazonaws_mgh.DescribeMigrationTask({
  "ProgressUpdateStream": "",
  "MigrationTaskName": ""
}, context)
```

#### Parameters
* MigrationTaskName (string) **required**
* ProgressUpdateStream (string) **required**

### DisassociateCreatedArtifact



```js
amazonaws_mgh.DisassociateCreatedArtifact({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "CreatedArtifactName": ""
}, context)
```

#### Parameters
* CreatedArtifactName (string) **required**
* DryRun (boolean)
* MigrationTaskName (string) **required**
* ProgressUpdateStream (string) **required**

### DisassociateDiscoveredResource



```js
amazonaws_mgh.DisassociateDiscoveredResource({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "ConfigurationId": ""
}, context)
```

#### Parameters
* ConfigurationId (string) **required**
* DryRun (boolean)
* MigrationTaskName (string) **required**
* ProgressUpdateStream (string) **required**

### ImportMigrationTask



```js
amazonaws_mgh.ImportMigrationTask({
  "ProgressUpdateStream": "",
  "MigrationTaskName": ""
}, context)
```

#### Parameters
* DryRun (boolean)
* MigrationTaskName (string) **required**
* ProgressUpdateStream (string) **required**

### ListCreatedArtifacts



```js
amazonaws_mgh.ListCreatedArtifacts({
  "ProgressUpdateStream": "",
  "MigrationTaskName": ""
}, context)
```

#### Parameters
* MaxResults (integer)
* MigrationTaskName (string) **required**
* NextToken (string)
* ProgressUpdateStream (string) **required**

### ListDiscoveredResources



```js
amazonaws_mgh.ListDiscoveredResources({
  "ProgressUpdateStream": "",
  "MigrationTaskName": ""
}, context)
```

#### Parameters
* MaxResults (integer)
* MigrationTaskName (string) **required**
* NextToken (string)
* ProgressUpdateStream (string) **required**

### ListMigrationTasks



```js
amazonaws_mgh.ListMigrationTasks({}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)
* ResourceName (string)

### ListProgressUpdateStreams



```js
amazonaws_mgh.ListProgressUpdateStreams({}, context)
```

#### Parameters
* MaxResults (integer)
* NextToken (string)

### NotifyApplicationState



```js
amazonaws_mgh.NotifyApplicationState({
  "ApplicationId": "",
  "Status": ""
}, context)
```

#### Parameters
* ApplicationId (string) **required**
* DryRun (boolean)
* Status (string) **required**

### NotifyMigrationTaskState



```js
amazonaws_mgh.NotifyMigrationTaskState({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "Task": {
    "Status": ""
  },
  "UpdateDateTime": "",
  "NextUpdateSeconds": 0
}, context)
```

#### Parameters
* DryRun (boolean)
* MigrationTaskName (string) **required**
* NextUpdateSeconds (integer) **required**
* ProgressUpdateStream (string) **required**
* Task (object) **required** - Task object encapsulating task information.
* UpdateDateTime (string) **required**

### PutResourceAttributes



```js
amazonaws_mgh.PutResourceAttributes({
  "ProgressUpdateStream": "",
  "MigrationTaskName": "",
  "ResourceAttributeList": []
}, context)
```

#### Parameters
* DryRun (boolean)
* MigrationTaskName (string) **required**
* ProgressUpdateStream (string) **required**
* ResourceAttributeList (array) **required**

