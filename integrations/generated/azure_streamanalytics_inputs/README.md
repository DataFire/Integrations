# @datafire/azure_streamanalytics_inputs

Client library for StreamAnalyticsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_streamanalytics_inputs
```
```js
let azure_streamanalytics_inputs = require('@datafire/azure_streamanalytics_inputs').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_streamanalytics_inputs.Inputs_ListByStreamingJob({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": ""
}).then(data => {
  console.log(data);
});
```

## Description



## Actions

### Inputs_ListByStreamingJob
Lists all of the inputs under the specified streaming job.


```js
azure_streamanalytics_inputs.Inputs_ListByStreamingJob({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * $select `string`: The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or “*” to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.

#### Output
* output [InputListResult](#inputlistresult)

### Inputs_Delete
Deletes an input from the streaming job.


```js
azure_streamanalytics_inputs.Inputs_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "inputName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * inputName **required** `string`: The name of the input.

#### Output
*Output schema unknown*

### Inputs_Get
Gets details about the specified input.


```js
azure_streamanalytics_inputs.Inputs_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "inputName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * inputName **required** `string`: The name of the input.

#### Output
* output [Input](#input)

### Inputs_Update
Updates an existing input under an existing streaming job. This can be used to partially update (ie. update one or two properties) an input without affecting the rest the job or input definition.


```js
azure_streamanalytics_inputs.Inputs_Update({
  "input": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "inputName": ""
}, context)
```

#### Input
* input `object`
  * input **required** [Input](#input)
  * If-Match `string`: The ETag of the input. Omit this value to always overwrite the current input. Specify the last-seen ETag value to prevent accidentally overwritting concurrent changes.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * inputName **required** `string`: The name of the input.

#### Output
* output [Input](#input)

### Inputs_CreateOrReplace
Creates an input or replaces an already existing input under an existing streaming job.


```js
azure_streamanalytics_inputs.Inputs_CreateOrReplace({
  "input": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "inputName": ""
}, context)
```

#### Input
* input `object`
  * input **required** [Input](#input)
  * If-Match `string`: The ETag of the input. Omit this value to always overwrite the current input. Specify the last-seen ETag value to prevent accidentally overwritting concurrent changes.
  * If-None-Match `string`: Set to '*' to allow a new input to be created, but to prevent updating an existing input. Other values will result in a 412 Pre-condition Failed response.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * inputName **required** `string`: The name of the input.

#### Output
* output [Input](#input)

### Inputs_Test
Tests whether an input’s datasource is reachable and usable by the Azure Stream Analytics service.


```js
azure_streamanalytics_inputs.Inputs_Test({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "inputName": ""
}, context)
```

#### Input
* input `object`
  * input [Input](#input)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * inputName **required** `string`: The name of the input.

#### Output
* output [ResourceTestStatus](#resourceteststatus)



## Definitions

### AvroSerialization
* AvroSerialization `object`: Describes how data from an input is serialized or how data is serialized when written to an output in Avro format.
  * properties [AvroSerializationProperties](#avroserializationproperties)
  * type `string`: Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.

### AvroSerializationProperties
* AvroSerializationProperties `object`: The properties that are associated with the Avro serialization type.

### BlobDataSourceProperties
* BlobDataSourceProperties `object`: The properties that are associated with a blob data source.
  * container `string`: The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
  * dateFormat `string`: The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
  * pathPattern `string`: The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
  * storageAccounts `array`: A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
    * items [StorageAccount](#storageaccount)
  * timeFormat `string`: The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.

### BlobReferenceInputDataSource
* BlobReferenceInputDataSource `object`: Describes a blob input data source that contains reference data.
  * properties [BlobReferenceInputDataSourceProperties](#blobreferenceinputdatasourceproperties)
  * type `string`: Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.

### BlobReferenceInputDataSourceProperties
* BlobReferenceInputDataSourceProperties `object`: The properties that are associated with a blob input containing reference data.
  * container `string`: The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
  * dateFormat `string`: The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
  * pathPattern `string`: The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
  * storageAccounts `array`: A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
    * items [StorageAccount](#storageaccount)
  * timeFormat `string`: The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.

### BlobStreamInputDataSource
* BlobStreamInputDataSource `object`: Describes a blob input data source that contains stream data.
  * properties [BlobStreamInputDataSourceProperties](#blobstreaminputdatasourceproperties)
  * type `string`: Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.

### BlobStreamInputDataSourceProperties
* BlobStreamInputDataSourceProperties `object`: The properties that are associated with a blob input containing stream data.
  * sourcePartitionCount `integer`: The partition count of the blob input data source. Range 1 - 256.
  * container `string`: The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
  * dateFormat `string`: The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
  * pathPattern `string`: The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
  * storageAccounts `array`: A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
    * items [StorageAccount](#storageaccount)
  * timeFormat `string`: The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.

### CsvSerialization
* CsvSerialization `object`: Describes how data from an input is serialized or how data is serialized when written to an output in CSV format.
  * properties [CsvSerializationProperties](#csvserializationproperties)
  * type `string`: Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.

### CsvSerializationProperties
* CsvSerializationProperties `object`: The properties that are associated with the CSV serialization type.
  * encoding [Encoding](#encoding)
  * fieldDelimiter `string`: Specifies the delimiter that will be used to separate comma-separated value (CSV) records. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a list of supported values. Required on PUT (CreateOrReplace) requests.

### DiagnosticCondition
* DiagnosticCondition `object`: Condition applicable to the resource, or to the job overall, that warrant customer attention.
  * code `string`: The opaque diagnostic code.
  * message `string`: The human-readable message describing the condition in detail. Localized in the Accept-Language of the client request.
  * since `string`: The UTC timestamp of when the condition started. Customers should be able to find a corresponding event in the ops log around this time.

### Diagnostics
* Diagnostics `object`: Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
  * conditions `array`: A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention.
    * items [DiagnosticCondition](#diagnosticcondition)

### Encoding
* Encoding `string` (values: UTF8): Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output.

### ErrorResponse
* ErrorResponse `object`: Describes the error that occurred.
  * code `string`: Error code associated with the error that occurred.
  * message `string`: Describes the error in detail.

### EventHubDataSourceProperties
* EventHubDataSourceProperties `object`: The common properties that are associated with Event Hub data sources.
  * eventHubName `string`: The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
  * serviceBusNamespace `string`: The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyKey `string`: The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyName `string`: The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.

### EventHubStreamInputDataSource
* EventHubStreamInputDataSource `object`: Describes an Event Hub input data source that contains stream data.
  * properties [EventHubStreamInputDataSourceProperties](#eventhubstreaminputdatasourceproperties)
  * type `string`: Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.

### EventHubStreamInputDataSourceProperties
* EventHubStreamInputDataSourceProperties `object`: The properties that are associated with a Event Hub input containing stream data.
  * consumerGroupName `string`: The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group.
  * eventHubName `string`: The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
  * serviceBusNamespace `string`: The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyKey `string`: The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyName `string`: The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.

### Input
* Input `object`: An input object, containing all information associated with the named input. All inputs are contained under a streaming job.
  * properties [InputProperties](#inputproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### InputListResult
* InputListResult `object`: Object containing a list of inputs under a streaming job.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: A list of inputs under a streaming job. Populated by a 'List' operation.
    * items [Input](#input)

### InputProperties
* InputProperties `object`: The properties that are associated with an input.
  * diagnostics [Diagnostics](#diagnostics)
  * etag `string`: The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
  * serialization [Serialization](#serialization)
  * type `string`: Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.

### IoTHubStreamInputDataSource
* IoTHubStreamInputDataSource `object`: Describes an IoT Hub input data source that contains stream data.
  * properties [IoTHubStreamInputDataSourceProperties](#iothubstreaminputdatasourceproperties)
  * type `string`: Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.

### IoTHubStreamInputDataSourceProperties
* IoTHubStreamInputDataSourceProperties `object`: The properties that are associated with a IoT Hub input containing stream data.
  * consumerGroupName `string`: The name of an IoT Hub Consumer Group that should be used to read events from the IoT Hub. If not specified, the input uses the Iot Hub’s default consumer group.
  * endpoint `string`: The IoT Hub endpoint to connect to (ie. messages/events, messages/operationsMonitoringEvents, etc.).
  * iotHubNamespace `string`: The name or the URI of the IoT Hub. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyKey `string`: The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyName `string`: The shared access policy name for the IoT Hub. This policy must contain at least the Service connect permission. Required on PUT (CreateOrReplace) requests.

### JsonOutputSerializationFormat
* JsonOutputSerializationFormat `string` (values: LineSeparated, Array): Specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects.

### JsonSerialization
* JsonSerialization `object`: Describes how data from an input is serialized or how data is serialized when written to an output in JSON format.
  * properties [JsonSerializationProperties](#jsonserializationproperties)
  * type `string`: Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.

### JsonSerializationProperties
* JsonSerializationProperties `object`: The properties that are associated with the JSON serialization type.
  * encoding [Encoding](#encoding)
  * format [JsonOutputSerializationFormat](#jsonoutputserializationformat)

### ReferenceInputDataSource
* ReferenceInputDataSource `object`: Describes an input data source that contains reference data.
  * type `string`: Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests.

### ReferenceInputProperties
* ReferenceInputProperties `object`: The properties that are associated with an input containing reference data.
  * datasource [ReferenceInputDataSource](#referenceinputdatasource)
  * diagnostics [Diagnostics](#diagnostics)
  * etag `string`: The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
  * serialization [Serialization](#serialization)
  * type `string`: Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.

### ResourceTestStatus
* ResourceTestStatus `object`: Describes the status of the test operation along with error information, if applicable.
  * error [ErrorResponse](#errorresponse)
  * status `string`: The status of the test operation.

### Serialization
* Serialization `object`: Describes how data from an input is serialized or how data is serialized when written to an output.
  * type `string`: Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.

### ServiceBusDataSourceProperties
* ServiceBusDataSourceProperties `object`: The common properties that are associated with Service Bus data sources (Queues, Topics, Event Hubs, etc.).
  * serviceBusNamespace `string`: The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyKey `string`: The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyName `string`: The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.

### StorageAccount
* StorageAccount `object`: The properties that are associated with an Azure Storage account
  * accountKey `string`: The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
  * accountName `string`: The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.

### StreamInputDataSource
* StreamInputDataSource `object`: Describes an input data source that contains stream data.
  * type `string`: Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests.

### StreamInputProperties
* StreamInputProperties `object`: The properties that are associated with an input containing stream data.
  * datasource [StreamInputDataSource](#streaminputdatasource)
  * diagnostics [Diagnostics](#diagnostics)
  * etag `string`: The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
  * serialization [Serialization](#serialization)
  * type `string`: Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests.

### SubResource
* SubResource `object`: The base sub-resource model definition.
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type


