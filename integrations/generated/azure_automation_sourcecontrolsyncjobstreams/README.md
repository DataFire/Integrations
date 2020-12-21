# @datafire/azure_automation_sourcecontrolsyncjobstreams

Client library for AutomationManagement

## Installation and Usage
```bash
npm install --save @datafire/azure_automation_sourcecontrolsyncjobstreams
```
```js
let azure_automation_sourcecontrolsyncjobstreams = require('@datafire/azure_automation_sourcecontrolsyncjobstreams').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### SourceControlSyncJobStreams_ListBySyncJob
Retrieve a list of sync job streams identified by sync job id.


```js
azure_automation_sourcecontrolsyncjobstreams.SourceControlSyncJobStreams_ListBySyncJob({
  "resourceGroupName": "",
  "automationAccountName": "",
  "sourceControlName": "",
  "sourceControlSyncJobId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * sourceControlName **required** `string`: The source control name.
  * sourceControlSyncJobId **required** `string`: The source control sync job id.
  * $filter `string`: The filter to apply on the operation.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SourceControlSyncJobStreamsListBySyncJob](#sourcecontrolsyncjobstreamslistbysyncjob)

### SourceControlSyncJobStreams_Get
Retrieve a sync job stream identified by stream id.


```js
azure_automation_sourcecontrolsyncjobstreams.SourceControlSyncJobStreams_Get({
  "resourceGroupName": "",
  "automationAccountName": "",
  "sourceControlName": "",
  "sourceControlSyncJobId": "",
  "streamId": "",
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * automationAccountName **required** `string`: The name of the automation account.
  * sourceControlName **required** `string`: The source control name.
  * sourceControlSyncJobId **required** `string`: The source control sync job id.
  * streamId **required** `string`: The id of the sync job stream.
  * subscriptionId **required** `string`: Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * api-version **required** `string`: Client Api Version.

#### Output
* output [SourceControlSyncJobStreamById](#sourcecontrolsyncjobstreambyid)



## Definitions

### SourceControlSyncJobStream
* SourceControlSyncJobStream `object`: Definition of the source control sync job stream.
  * id `string`: Resource id.
  * properties [SourceControlSyncJobStreamProperties](#sourcecontrolsyncjobstreamproperties)

### SourceControlSyncJobStreamById
* SourceControlSyncJobStreamById `object`: Definition of the source control sync job stream by id.
  * id `string`: Resource id.
  * properties [SourceControlSyncJobStreamByIdProperties](#sourcecontrolsyncjobstreambyidproperties)

### SourceControlSyncJobStreamByIdProperties
* SourceControlSyncJobStreamByIdProperties `object`: Definition of source control sync job stream by id properties.
  * sourceControlSyncJobStreamId `string`: The sync job stream id.
  * streamText `string`: The text of the sync job stream.
  * streamType `string` (values: Error, Output): The type of the sync job stream.
  * summary `string`: The summary of the sync job stream.
  * time `string`: The time of the sync job stream.
  * value `object`: The values of the job stream.

### SourceControlSyncJobStreamProperties
* SourceControlSyncJobStreamProperties `object`: Definition of source control sync job stream properties.
  * sourceControlSyncJobStreamId `string`: The sync job stream id.
  * streamType `string` (values: Error, Output): The type of the sync job stream.
  * summary `string`: The summary of the sync job stream.
  * time `string`: The time of the sync job stream.

### SourceControlSyncJobStreamsListBySyncJob
* SourceControlSyncJobStreamsListBySyncJob `object`: The response model for the list source control sync job streams operation.
  * nextLink `string`: The next link.
  * value `array`: The list of source control sync job streams.
    * items [SourceControlSyncJobStream](#sourcecontrolsyncjobstream)


