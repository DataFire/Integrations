# @datafire/azure_arm_scheduler

Client library for SchedulerManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_scheduler
```
```js
let azure_arm_scheduler = require('@datafire/azure_arm_scheduler').create();

azure_arm_scheduler.JobCollections_ListBySubscription({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### JobCollections_ListBySubscription
Gets all job collections under specified subscription.


```js
azure_arm_scheduler.JobCollections_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * api-version **required** `string`: The API version.

#### Output
* output [JobCollectionListResult](#jobcollectionlistresult)

### JobCollections_ListByResourceGroup
Gets all job collections under specified resource group.


```js
azure_arm_scheduler.JobCollections_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * api-version **required** `string`: The API version.

#### Output
* output [JobCollectionListResult](#jobcollectionlistresult)

### JobCollections_Delete
Deletes a job collection.


```js
azure_arm_scheduler.JobCollections_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### JobCollections_Get
Gets a job collection.


```js
azure_arm_scheduler.JobCollections_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * api-version **required** `string`: The API version.

#### Output
* output [JobCollectionDefinition](#jobcollectiondefinition)

### JobCollections_Patch
Patches an existing job collection.


```js
azure_arm_scheduler.JobCollections_Patch({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": "",
  "jobCollection": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * api-version **required** `string`: The API version.
  * jobCollection **required** [JobCollectionDefinition](#jobcollectiondefinition)

#### Output
* output [JobCollectionDefinition](#jobcollectiondefinition)

### JobCollections_CreateOrUpdate
Provisions a new job collection or updates an existing job collection.


```js
azure_arm_scheduler.JobCollections_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": "",
  "jobCollection": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * api-version **required** `string`: The API version.
  * jobCollection **required** [JobCollectionDefinition](#jobcollectiondefinition)

#### Output
* output [JobCollectionDefinition](#jobcollectiondefinition)

### JobCollections_Disable
Disables all of the jobs in the job collection.


```js
azure_arm_scheduler.JobCollections_Disable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### JobCollections_Enable
Enables all of the jobs in the job collection.


```js
azure_arm_scheduler.JobCollections_Enable({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Jobs_List
Lists all jobs under the specified job collection.


```js
azure_arm_scheduler.Jobs_List({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * api-version **required** `string`: The API version.
  * $top `integer`: The number of jobs to request, in the of range of [1..100].
  * $skip `integer`: The (0-based) index of the job history list from which to begin requesting entries.
  * $filter `string`: The filter to apply on the job state.

#### Output
* output [JobListResult](#joblistresult)

### Jobs_Delete
Deletes a job.


```js
azure_arm_scheduler.Jobs_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * jobName **required** `string`: The job name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*

### Jobs_Get
Gets a job.


```js
azure_arm_scheduler.Jobs_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * jobName **required** `string`: The job name.
  * api-version **required** `string`: The API version.

#### Output
* output [JobDefinition](#jobdefinition)

### Jobs_Patch
Patches an existing job.


```js
azure_arm_scheduler.Jobs_Patch({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "jobName": "",
  "api-version": "",
  "job": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * jobName **required** `string`: The job name.
  * api-version **required** `string`: The API version.
  * job **required** [JobDefinition](#jobdefinition)

#### Output
* output [JobDefinition](#jobdefinition)

### Jobs_CreateOrUpdate
Provisions a new job or updates an existing job.


```js
azure_arm_scheduler.Jobs_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "jobName": "",
  "api-version": "",
  "job": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * jobName **required** `string`: The job name.
  * api-version **required** `string`: The API version.
  * job **required** [JobDefinition](#jobdefinition)

#### Output
* output [JobDefinition](#jobdefinition)

### Jobs_ListJobHistory
Lists job history.


```js
azure_arm_scheduler.Jobs_ListJobHistory({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * jobName **required** `string`: The job name.
  * api-version **required** `string`: The API version.
  * $top `integer`: the number of job history to request, in the of range of [1..100].
  * $skip `integer`: The (0-based) index of the job history list from which to begin requesting entries.
  * $filter `string`: The filter to apply on the job state.

#### Output
* output [JobHistoryListResult](#jobhistorylistresult)

### Jobs_Run
Runs a job.


```js
azure_arm_scheduler.Jobs_Run({
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobCollectionName": "",
  "jobName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The subscription id.
  * resourceGroupName **required** `string`: The resource group name.
  * jobCollectionName **required** `string`: The job collection name.
  * jobName **required** `string`: The job name.
  * api-version **required** `string`: The API version.

#### Output
*Output schema unknown*



## Definitions

### BasicAuthentication
* BasicAuthentication `object`
  * password `string`: Gets or sets the password, return value will always be empty.
  * username `string`: Gets or sets the username.
  * type `string` (values: NotSpecified, ClientCertificate, ActiveDirectoryOAuth, Basic): Gets or sets the HTTP authentication type.

### ClientCertAuthentication
* ClientCertAuthentication `object`
  * certificateExpirationDate `string`: Gets or sets the certificate expiration date.
  * certificateSubjectName `string`: Gets or sets the certificate subject name.
  * certificateThumbprint `string`: Gets or sets the certificate thumbprint.
  * password `string`: Gets or sets the certificate password, return value will always be empty.
  * pfx `string`: Gets or sets the pfx certificate. Accepts certification in base64 encoding, return value will always be empty.
  * type `string` (values: NotSpecified, ClientCertificate, ActiveDirectoryOAuth, Basic): Gets or sets the HTTP authentication type.

### HttpAuthentication
* HttpAuthentication `object`
  * type `string` (values: NotSpecified, ClientCertificate, ActiveDirectoryOAuth, Basic): Gets or sets the HTTP authentication type.

### HttpRequest
* HttpRequest `object`
  * authentication [HttpAuthentication](#httpauthentication)
  * body `string`: Gets or sets the request body.
  * headers `object`: Gets or sets the headers.
  * method `string`: Gets or sets the method of the request.
  * uri `string`: Gets or sets the URI of the request.

### JobAction
* JobAction `object`
  * errorAction [JobErrorAction](#joberroraction)
  * queueMessage [StorageQueueMessage](#storagequeuemessage)
  * request [HttpRequest](#httprequest)
  * retryPolicy [RetryPolicy](#retrypolicy)
  * serviceBusQueueMessage [ServiceBusQueueMessage](#servicebusqueuemessage)
  * serviceBusTopicMessage [ServiceBusTopicMessage](#servicebustopicmessage)
  * type `string` (values: Http, Https, StorageQueue, ServiceBusQueue, ServiceBusTopic): Gets or sets the job action type.

### JobCollectionDefinition
* JobCollectionDefinition `object`
  * id `string`: Gets the job collection resource identifier.
  * location `string`: Gets or sets the storage account location.
  * name `string`: Gets or sets the job collection resource name.
  * properties [JobCollectionProperties](#jobcollectionproperties)
  * tags `object`: Gets or sets the tags.
  * type `string`: Gets the job collection resource type.

### JobCollectionListResult
* JobCollectionListResult `object`
  * nextLink `string`: Gets or sets the URL to get the next set of job collections.
  * value `array`: Gets the job collections.
    * items [JobCollectionDefinition](#jobcollectiondefinition)

### JobCollectionProperties
* JobCollectionProperties `object`
  * quota [JobCollectionQuota](#jobcollectionquota)
  * sku [Sku](#sku)
  * state `string` (values: Enabled, Disabled, Suspended, Deleted): Gets or sets the state.

### JobCollectionQuota
* JobCollectionQuota `object`
  * maxJobCount `integer`: Gets or set the maximum job count.
  * maxJobOccurrence `integer`: Gets or sets the maximum job occurrence.
  * maxRecurrence [JobMaxRecurrence](#jobmaxrecurrence)

### JobDefinition
* JobDefinition `object`
  * id `string`: Gets the job resource identifier.
  * name `string`: Gets the job resource name.
  * properties [JobProperties](#jobproperties)
  * type `string`: Gets the job resource type.

### JobErrorAction
* JobErrorAction `object`
  * queueMessage [StorageQueueMessage](#storagequeuemessage)
  * request [HttpRequest](#httprequest)
  * retryPolicy [RetryPolicy](#retrypolicy)
  * serviceBusQueueMessage [ServiceBusQueueMessage](#servicebusqueuemessage)
  * serviceBusTopicMessage [ServiceBusTopicMessage](#servicebustopicmessage)
  * type `string` (values: Http, Https, StorageQueue, ServiceBusQueue, ServiceBusTopic): Gets or sets the job error action type.

### JobExecutionStatus
* JobExecutionStatus `string` (values: Completed, Failed, Postponed): Gets the job execution status.

### JobHistoryDefinition
* JobHistoryDefinition `object`
  * id `string`: Gets the job history identifier.
  * name `string`: Gets the job history name.
  * properties [JobHistoryDefinitionProperties](#jobhistorydefinitionproperties)
  * type `string`: Gets the job history resource type.

### JobHistoryDefinitionProperties
* JobHistoryDefinitionProperties `object`
  * actionName `string` (values: MainAction, ErrorAction): Gets the job history action name.
  * endTime `string`: Gets the end time for this job.
  * expectedExecutionTime `string`: Gets the expected execution time for this job.
  * message `string`: Gets the message for the job history.
  * repeatCount `integer`: Gets the repeat count for the job.
  * retryCount `integer`: Gets the retry count for job.
  * startTime `string`: Gets the start time for this job.
  * status [JobExecutionStatus](#jobexecutionstatus)

### JobHistoryFilter
* JobHistoryFilter `object`
  * status [JobExecutionStatus](#jobexecutionstatus)

### JobHistoryListResult
* JobHistoryListResult `object`
  * nextLink `string`: Gets or sets the URL to get the next set of job histories.
  * value `array`: Gets or sets the job histories under job.
    * items [JobHistoryDefinition](#jobhistorydefinition)

### JobListResult
* JobListResult `object`
  * nextLink `string`: Gets or sets the URL to get the next set of jobs.
  * value `array`: Gets or sets all jobs under job collection.
    * items [JobDefinition](#jobdefinition)

### JobMaxRecurrence
* JobMaxRecurrence `object`
  * frequency `string` (values: Minute, Hour, Day, Week, Month): Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
  * interval `integer`: Gets or sets the interval between retries.

### JobProperties
* JobProperties `object`
  * action [JobAction](#jobaction)
  * recurrence [JobRecurrence](#jobrecurrence)
  * startTime `string`: Gets or sets the job start time.
  * state [JobState](#jobstate)
  * status [JobStatus](#jobstatus)

### JobRecurrence
* JobRecurrence `object`
  * count `integer`: Gets or sets the maximum number of times that the job should run.
  * endTime `string`: Gets or sets the time at which the job will complete.
  * frequency `string` (values: Minute, Hour, Day, Week, Month): Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
  * interval `integer`: Gets or sets the interval between retries.
  * schedule [JobRecurrenceSchedule](#jobrecurrenceschedule)

### JobRecurrenceSchedule
* JobRecurrenceSchedule `object`
  * hours `array`: Gets or sets the hours of the day that the job should execute at.
    * items `integer`
  * minutes `array`: Gets or sets the minutes of the hour that the job should execute at.
    * items `integer`
  * monthDays `array`: Gets or sets the days of the month that the job should execute on. Must be between 1 and 31.
    * items `integer`
  * monthlyOccurrences `array`: Gets or sets the occurrences of days within a month.
    * items [JobRecurrenceScheduleMonthlyOccurrence](#jobrecurrenceschedulemonthlyoccurrence)
  * weekDays `array`: Gets or sets the days of the week that the job should execute on.
    * items `string` (values: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday)

### JobRecurrenceScheduleMonthlyOccurrence
* JobRecurrenceScheduleMonthlyOccurrence `object`
  * Occurrence `integer`: Gets or sets the occurrence. Must be between -5 and 5.
  * day `string` (values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday): Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.

### JobState
* JobState `string` (values: Enabled, Disabled, Faulted, Completed): Gets or set the job state.

### JobStateFilter
* JobStateFilter `object`
  * state [JobState](#jobstate)

### JobStatus
* JobStatus `object`
  * executionCount `integer`: Gets the number of times this job has executed.
  * failureCount `integer`: Gets the number of times this job has failed.
  * faultedCount `integer`: Gets the number of faulted occurrences (occurrences that were retried and failed as many times as the retry policy states).
  * lastExecutionTime `string`: Gets the time the last occurrence executed in ISO-8601 format.  Could be empty if job has not run yet.
  * nextExecutionTime `string`: Gets the time of the next occurrence in ISO-8601 format. Could be empty if the job is completed.

### OAuthAuthentication
* OAuthAuthentication `object`
  * audience `string`: Gets or sets the audience.
  * clientId `string`: Gets or sets the client identifier.
  * secret `string`: Gets or sets the secret, return value will always be empty.
  * tenant `string`: Gets or sets the tenant.
  * type `string` (values: NotSpecified, ClientCertificate, ActiveDirectoryOAuth, Basic): Gets or sets the HTTP authentication type.

### RecurrenceFrequency
* RecurrenceFrequency `string` (values: Minute, Hour, Day, Week, Month): Gets or sets the frequency of recurrence (minute, hour, day, week, month).

### RetryPolicy
* RetryPolicy `object`
  * retryCount `integer`: Gets or sets the number of times a retry should be attempted.
  * retryInterval `string`: Gets or sets the retry interval between retries, specify duration in ISO 8601 format.
  * retryType `string` (values: None, Fixed): Gets or sets the retry strategy to be used.

### ServiceBusAuthentication
* ServiceBusAuthentication `object`
  * sasKey `string`: Gets or sets the SAS key.
  * sasKeyName `string`: Gets or sets the SAS key name.
  * type `string` (values: NotSpecified, SharedAccessKey): Gets or sets the authentication type.

### ServiceBusBrokeredMessageProperties
* ServiceBusBrokeredMessageProperties `object`
  * contentType `string`: Gets or sets the content type.
  * correlationId `string`: Gets or sets the correlation ID.
  * forcePersistence `boolean`: Gets or sets the force persistence.
  * label `string`: Gets or sets the label.
  * messageId `string`: Gets or sets the message ID.
  * partitionKey `string`: Gets or sets the partition key.
  * replyTo `string`: Gets or sets the reply to.
  * replyToSessionId `string`: Gets or sets the reply to session ID.
  * scheduledEnqueueTimeUtc `string`: Gets or sets the scheduled enqueue time UTC.
  * sessionId `string`: Gets or sets the session ID.
  * timeToLive `string`: Gets or sets the time to live.
  * to `string`: Gets or sets the to.
  * viaPartitionKey `string`: Gets or sets the via partition key.

### ServiceBusMessage
* ServiceBusMessage `object`
  * authentication [ServiceBusAuthentication](#servicebusauthentication)
  * brokeredMessageProperties [ServiceBusBrokeredMessageProperties](#servicebusbrokeredmessageproperties)
  * customMessageProperties `object`: Gets or sets the custom message properties.
  * message `string`: Gets or sets the message.
  * namespace `string`: Gets or sets the namespace.
  * transportType `string` (values: NotSpecified, NetMessaging, AMQP): Gets or sets the transport type.

### ServiceBusQueueMessage
* ServiceBusQueueMessage `object`
  * queueName `string`: Gets or sets the queue name.
  * authentication [ServiceBusAuthentication](#servicebusauthentication)
  * brokeredMessageProperties [ServiceBusBrokeredMessageProperties](#servicebusbrokeredmessageproperties)
  * customMessageProperties `object`: Gets or sets the custom message properties.
  * message `string`: Gets or sets the message.
  * namespace `string`: Gets or sets the namespace.
  * transportType `string` (values: NotSpecified, NetMessaging, AMQP): Gets or sets the transport type.

### ServiceBusTopicMessage
* ServiceBusTopicMessage `object`
  * topicPath `string`: Gets or sets the topic path.
  * authentication [ServiceBusAuthentication](#servicebusauthentication)
  * brokeredMessageProperties [ServiceBusBrokeredMessageProperties](#servicebusbrokeredmessageproperties)
  * customMessageProperties `object`: Gets or sets the custom message properties.
  * message `string`: Gets or sets the message.
  * namespace `string`: Gets or sets the namespace.
  * transportType `string` (values: NotSpecified, NetMessaging, AMQP): Gets or sets the transport type.

### Sku
* Sku `object`
  * name `string` (values: Standard, Free, P10Premium, P20Premium): Gets or set the SKU.

### StorageQueueMessage
* StorageQueueMessage `object`
  * message `string`: Gets or sets the message.
  * queueName `string`: Gets or sets the queue name.
  * sasToken `string`: Gets or sets the SAS key.
  * storageAccount `string`: Gets or sets the storage account name.


