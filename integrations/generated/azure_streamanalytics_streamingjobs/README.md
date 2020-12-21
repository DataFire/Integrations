# @datafire/azure_streamanalytics_streamingjobs

Client library for StreamAnalyticsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_streamanalytics_streamingjobs
```
```js
let azure_streamanalytics_streamingjobs = require('@datafire/azure_streamanalytics_streamingjobs').create({
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

### Operations_List
Lists all of the available Stream Analytics related operations.


```js
azure_streamanalytics_streamingjobs.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.

#### Output
* output [OperationListResult](#operationlistresult)

### StreamingJobs_List
Lists all of the streaming jobs in the given subscription.


```js
azure_streamanalytics_streamingjobs.StreamingJobs_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $expand `string`: The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

#### Output
* output [StreamingJobListResult](#streamingjoblistresult)

### StreamingJobs_ListByResourceGroup
Lists all of the streaming jobs in the specified resource group.


```js
azure_streamanalytics_streamingjobs.StreamingJobs_ListByResourceGroup({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": ""
}, context)
```

#### Input
* input `object`
  * $expand `string`: The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.

#### Output
* output [StreamingJobListResult](#streamingjoblistresult)

### StreamingJobs_Delete
Deletes a streaming job.


```js
azure_streamanalytics_streamingjobs.StreamingJobs_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.

#### Output
*Output schema unknown*

### StreamingJobs_Get
Gets details about the specified streaming job.


```js
azure_streamanalytics_streamingjobs.StreamingJobs_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * $expand `string`: The $expand OData query parameter. This is a comma-separated list of additional streaming job properties to include in the response, beyond the default set returned when this parameter is absent. The default set is all streaming job properties other than 'inputs', 'transformation', 'outputs', and 'functions'.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.

#### Output
* output [StreamingJob](#streamingjob)

### StreamingJobs_Update
Updates an existing streaming job. This can be used to partially update (ie. update one or two properties) a streaming job without affecting the rest the job definition.


```js
azure_streamanalytics_streamingjobs.StreamingJobs_Update({
  "streamingJob": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * streamingJob **required** [StreamingJob](#streamingjob)
  * If-Match `string`: The ETag of the streaming job. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.

#### Output
* output [StreamingJob](#streamingjob)

### StreamingJobs_CreateOrReplace
Creates a streaming job or replaces an already existing streaming job.


```js
azure_streamanalytics_streamingjobs.StreamingJobs_CreateOrReplace({
  "streamingJob": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * streamingJob **required** [StreamingJob](#streamingjob)
  * If-Match `string`: The ETag of the streaming job. Omit this value to always overwrite the current record set. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
  * If-None-Match `string`: Set to '*' to allow a new streaming job to be created, but to prevent updating an existing record set. Other values will result in a 412 Pre-condition Failed response.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.

#### Output
* output [StreamingJob](#streamingjob)

### StreamingJobs_Start
Starts a streaming job. Once a job is started it will start processing input events and produce output.


```js
azure_streamanalytics_streamingjobs.StreamingJobs_Start({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * startJobParameters [StartStreamingJobParameters](#startstreamingjobparameters)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.

#### Output
*Output schema unknown*

### StreamingJobs_Stop
Stops a running streaming job. This will cause a running streaming job to stop processing input events and producing output.


```js
azure_streamanalytics_streamingjobs.StreamingJobs_Stop({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.

#### Output
*Output schema unknown*



## Definitions

### CompatibilityLevel
* CompatibilityLevel `string` (values: 1.0): Controls certain runtime behaviors of the streaming job.

### EventsOutOfOrderPolicy
* EventsOutOfOrderPolicy `string` (values: Adjust, Drop): Indicates the policy to apply to events that arrive out of order in the input event stream.

### Operation
* Operation `object`: A Stream Analytics REST API operation
  * display `object`: Contains the localized display information for this particular operation / action.
    * description `string`: The localized friendly description for the operation.
    * operation `string`: The localized friendly name for the operation.
    * provider `string`: The localized friendly form of the resource provider name.
    * resource `string`: The localized friendly form of the resource type related to this action/operation.
  * name `string`: The name of the operation being performed on this particular object.

### OperationListResult
* OperationListResult `object`: Result of the request to list Stream Analytics operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Stream Analytics operations supported by the Microsoft.StreamAnalytics resource provider.
    * items [Operation](#operation)

### OutputErrorPolicy
* OutputErrorPolicy `string` (values: Stop, Drop): Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size).

### OutputStartMode
* OutputStartMode `string` (values: JobStartTime, CustomTime, LastOutputEventTime): Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time.

### Resource
* Resource `object`: The base resource model definition.
  * id `string`: Resource Id
  * location `string`: Resource location. Required on PUT (CreateOrReplace) requests.
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### Sku
* Sku `object`: The properties that are associated with a SKU.
  * name `string` (values: Standard): The name of the SKU. Required on PUT (CreateOrReplace) requests.

### StartStreamingJobParameters
* StartStreamingJobParameters `object`: Parameters supplied to the Start Streaming Job operation.
  * outputStartMode [OutputStartMode](#outputstartmode)
  * outputStartTime `string`: Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime.

### StreamingJob
* StreamingJob `object`: A streaming job object, containing all information associated with the named streaming job.
  * properties [StreamingJobProperties](#streamingjobproperties)
  * id `string`: Resource Id
  * location `string`: Resource location. Required on PUT (CreateOrReplace) requests.
  * name `string`: Resource name
  * tags `object`: Resource tags
  * type `string`: Resource type

### StreamingJobListResult
* StreamingJobListResult `object`: Object containing a list of streaming jobs.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: A list of streaming jobs. Populated by a 'List' operation.
    * items [StreamingJob](#streamingjob)

### StreamingJobProperties
* StreamingJobProperties `object`: The properties that are associated with a streaming job.
  * compatibilityLevel [CompatibilityLevel](#compatibilitylevel)
  * createdDate `string`: Value is an ISO-8601 formatted UTC timestamp indicating when the streaming job was created.
  * dataLocale `string`: The data locale of the stream analytics job. Value should be the name of a supported .NET Culture from the set https://msdn.microsoft.com/en-us/library/system.globalization.culturetypes(v=vs.110).aspx. Defaults to 'en-US' if none specified.
  * etag `string`: The current entity tag for the streaming job. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
  * eventsLateArrivalMaxDelayInSeconds `integer`: The maximum tolerable delay in seconds where events arriving late could be included.  Supported range is -1 to 1814399 (20.23:59:59 days) and -1 is used to specify wait indefinitely. If the property is absent, it is interpreted to have a value of -1.
  * eventsOutOfOrderMaxDelayInSeconds `integer`: The maximum tolerable delay in seconds where out-of-order events can be adjusted to be back in order.
  * eventsOutOfOrderPolicy [EventsOutOfOrderPolicy](#eventsoutoforderpolicy)
  * functions `array`: A list of one or more functions for the streaming job. The name property for each function is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual transformation.
    * items `object`: A function object, containing all information associated with the named function. All functions are contained under a streaming job.
      * properties `object`: The properties that are associated with a function.
        * etag `string`: The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
        * type `string`: Indicates the type of function.
      * id `string`: Resource Id
      * name `string`: Resource name
      * type `string`: Resource type
  * inputs `array`: A list of one or more inputs to the streaming job. The name property for each input is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual input.
    * items `object`: An input object, containing all information associated with the named input. All inputs are contained under a streaming job.
      * properties `object`: The properties that are associated with an input.
        * diagnostics `object`: Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
          * conditions `array`: A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention.
        * etag `string`: The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
        * serialization `object`: Describes how data from an input is serialized or how data is serialized when written to an output.
          * type `string`: Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
        * type `string`: Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.
      * id `string`: Resource Id
      * name `string`: Resource name
      * type `string`: Resource type
  * jobId `string`: A GUID uniquely identifying the streaming job. This GUID is generated upon creation of the streaming job.
  * jobState `string`: Describes the state of the streaming job.
  * lastOutputEventTime `string`: Value is either an ISO-8601 formatted timestamp indicating the last output event time of the streaming job or null indicating that output has not yet been produced. In case of multiple outputs or multiple streams, this shows the latest value in that set.
  * outputErrorPolicy [OutputErrorPolicy](#outputerrorpolicy)
  * outputStartMode [OutputStartMode](#outputstartmode)
  * outputStartTime `string`: Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime.
  * outputs `array`: A list of one or more outputs for the streaming job. The name property for each output is required when specifying this property in a PUT request. This property cannot be modify via a PATCH operation. You must use the PATCH API available for the individual output.
    * items `object`: An output object, containing all information associated with the named output. All outputs are contained under a streaming job.
      * properties `object`: The properties that are associated with an output.
        * datasource `object`: Describes the data source that output will be written to.
          * type `string`: Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.
        * diagnostics `object`: Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
          * conditions `array`: A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention.
        * etag `string`: The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
        * serialization `object`: Describes how data from an input is serialized or how data is serialized when written to an output.
          * type `string`: Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.
      * id `string`: Resource Id
      * name `string`: Resource name
      * type `string`: Resource type
  * provisioningState `string`: Describes the provisioning status of the streaming job.
  * sku [Sku](#sku)
  * transformation `object`: A transformation object, containing all information associated with the named transformation. All transformations are contained under a streaming job.
    * properties `object`: The properties that are associated with a transformation.
      * etag `string`: The current entity tag for the transformation. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
      * query `string`: Specifies the query that will be run in the streaming job. You can learn more about the Stream Analytics Query Language (SAQL) here: https://msdn.microsoft.com/library/azure/dn834998 . Required on PUT (CreateOrReplace) requests.
      * streamingUnits `integer`: Specifies the number of streaming units that the streaming job uses.
    * id `string`: Resource Id
    * name `string`: Resource name
    * type `string`: Resource type


