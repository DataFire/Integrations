# @datafire/azure_streamanalytics_outputs

Client library for StreamAnalyticsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_streamanalytics_outputs
```
```js
let azure_streamanalytics_outputs = require('@datafire/azure_streamanalytics_outputs').create({
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

### Outputs_ListByStreamingJob
Lists all of the outputs under the specified streaming job.


```js
azure_streamanalytics_outputs.Outputs_ListByStreamingJob({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": ""
}, context)
```

#### Input
* input `object`
  * $select `string`: The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or "*" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.

#### Output
* output [OutputListResult](#outputlistresult)

### Outputs_Delete
Deletes an output from the streaming job.


```js
azure_streamanalytics_outputs.Outputs_Delete({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "outputName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * outputName **required** `string`: The name of the output.

#### Output
*Output schema unknown*

### Outputs_Get
Gets details about the specified output.


```js
azure_streamanalytics_outputs.Outputs_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "outputName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * outputName **required** `string`: The name of the output.

#### Output
* output [Output](#output)

### Outputs_Update
Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.


```js
azure_streamanalytics_outputs.Outputs_Update({
  "output": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "outputName": ""
}, context)
```

#### Input
* input `object`
  * output **required** [Output](#output)
  * If-Match `string`: The ETag of the output. Omit this value to always overwrite the current output. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * outputName **required** `string`: The name of the output.

#### Output
* output [Output](#output)

### Outputs_CreateOrReplace
Creates an output or replaces an already existing output under an existing streaming job.


```js
azure_streamanalytics_outputs.Outputs_CreateOrReplace({
  "output": null,
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "outputName": ""
}, context)
```

#### Input
* input `object`
  * output **required** [Output](#output)
  * If-Match `string`: The ETag of the output. Omit this value to always overwrite the current output. Specify the last-seen ETag value to prevent accidentally overwriting concurrent changes.
  * If-None-Match `string`: Set to '*' to allow a new output to be created, but to prevent updating an existing output. Other values will result in a 412 Pre-condition Failed response.
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * outputName **required** `string`: The name of the output.

#### Output
* output [Output](#output)

### Outputs_Test
Tests whether an output’s datasource is reachable and usable by the Azure Stream Analytics service.


```js
azure_streamanalytics_outputs.Outputs_Test({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "jobName": "",
  "outputName": ""
}, context)
```

#### Input
* input `object`
  * output [Output](#output)
  * api-version **required** `string`: Client Api Version.
  * subscriptionId **required** `string`: GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
  * resourceGroupName **required** `string`: The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
  * jobName **required** `string`: The name of the streaming job.
  * outputName **required** `string`: The name of the output.

#### Output
* output `object`: Describes the status of the test operation along with error information, if applicable.
  * error `object`: Describes the error that occurred.
    * code `string`: Error code associated with the error that occurred.
    * message `string`: Describes the error in detail.
  * status `string`: The status of the test operation.



## Definitions

### AzureDataLakeStoreOutputDataSource
* AzureDataLakeStoreOutputDataSource `object`: Describes an Azure Data Lake Store output data source.
  * properties [AzureDataLakeStoreOutputDataSourceProperties](#azuredatalakestoreoutputdatasourceproperties)
  * type `string`: Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### AzureDataLakeStoreOutputDataSourceProperties
* AzureDataLakeStoreOutputDataSourceProperties `object`: The properties that are associated with an Azure Data Lake Store.
  * accountName `string`: The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests.
  * dateFormat `string`: The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead.
  * filePathPrefix `string`: The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests.
  * tenantId `string`: The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests.
  * timeFormat `string`: The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead.
  * refreshToken `string`: A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
  * tokenUserDisplayName `string`: The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
  * tokenUserPrincipalName `string`: The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.

### AzureSqlDatabaseDataSourceProperties
* AzureSqlDatabaseDataSourceProperties `object`: The properties that are associated with an Azure SQL database data source.
  * database `string`: The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
  * password `string`: The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
  * server `string`: The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
  * table `string`: The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
  * user `string`: The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.

### AzureSqlDatabaseOutputDataSource
* AzureSqlDatabaseOutputDataSource `object`: Describes an Azure SQL database output data source.
  * properties [AzureSqlDatabaseOutputDataSourceProperties](#azuresqldatabaseoutputdatasourceproperties)
  * type `string`: Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### AzureSqlDatabaseOutputDataSourceProperties
* AzureSqlDatabaseOutputDataSourceProperties `object`: The properties that are associated with an Azure SQL database output.
  * database `string`: The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests.
  * password `string`: The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.
  * server `string`: The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests.
  * table `string`: The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests.
  * user `string`: The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests.

### AzureTableOutputDataSource
* AzureTableOutputDataSource `object`: Describes an Azure Table output data source.
  * properties [AzureTableOutputDataSourceProperties](#azuretableoutputdatasourceproperties)
  * type `string`: Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### AzureTableOutputDataSourceProperties
* AzureTableOutputDataSourceProperties `object`: The properties that are associated with an Azure Table output.
  * accountKey `string`: The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
  * accountName `string`: The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
  * batchSize `integer`: The number of rows to write to the Azure Table at a time.
  * columnsToRemove `array`: If specified, each item in the array is the name of a column to remove (if present) from output event entities.
    * items `string`
  * partitionKey `string`: This element indicates the name of a column from the SELECT statement in the query that will be used as the partition key for the Azure Table. Required on PUT (CreateOrReplace) requests.
  * rowKey `string`: This element indicates the name of a column from the SELECT statement in the query that will be used as the row key for the Azure Table. Required on PUT (CreateOrReplace) requests.
  * table `string`: The name of the Azure Table. Required on PUT (CreateOrReplace) requests.

### BlobOutputDataSource
* BlobOutputDataSource `object`: Describes a blob output data source.
  * properties [BlobOutputDataSourceProperties](#bloboutputdatasourceproperties)
  * type `string`: Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### BlobOutputDataSourceProperties
* BlobOutputDataSourceProperties `object`: The properties that are associated with a blob output.
  * container `string`: The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests.
  * dateFormat `string`: The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead.
  * pathPattern `string`: The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example.
  * storageAccounts `array`: A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests.
    * items `object`: The properties that are associated with an Azure Storage account
      * accountKey `string`: The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests.
      * accountName `string`: The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests.
  * timeFormat `string`: The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead.

### DocumentDbOutputDataSource
* DocumentDbOutputDataSource `object`: Describes a DocumentDB output data source.
  * properties [DocumentDbOutputDataSourceProperties](#documentdboutputdatasourceproperties)
  * type `string`: Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### DocumentDbOutputDataSourceProperties
* DocumentDbOutputDataSourceProperties `object`: The properties that are associated with a DocumentDB output.
  * accountId `string`: The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests.
  * accountKey `string`: The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests.
  * collectionNamePattern `string`: The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section of https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for more information. Required on PUT (CreateOrReplace) requests.
  * database `string`: The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests.
  * documentId `string`: The name of the field in output events used to specify the primary key which insert or update operations are based on.
  * partitionKey `string`: The name of the field in output events used to specify the key for partitioning output across collections. If 'collectionNamePattern' contains the {partition} token, this property is required to be specified.

### EventHubOutputDataSource
* EventHubOutputDataSource `object`: Describes an Event Hub output data source.
  * properties [EventHubOutputDataSourceProperties](#eventhuboutputdatasourceproperties)
  * type `string`: Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### EventHubOutputDataSourceProperties
* EventHubOutputDataSourceProperties `object`: The properties that are associated with an Event Hub output.
  * partitionKey `string`: The key/column that is used to determine to which partition to send event data.
  * eventHubName `string`: The name of the Event Hub. Required on PUT (CreateOrReplace) requests.
  * serviceBusNamespace `string`: The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyKey `string`: The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyName `string`: The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.

### OAuthBasedDataSourceProperties
* OAuthBasedDataSourceProperties `object`: The properties that are associated with data sources that use OAuth as their authentication model.
  * refreshToken `string`: A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
  * tokenUserDisplayName `string`: The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
  * tokenUserPrincipalName `string`: The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.

### Output
* Output `object`: An output object, containing all information associated with the named output. All outputs are contained under a streaming job.
  * properties [OutputProperties](#outputproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### OutputDataSource
* OutputDataSource `object`: Describes the data source that output will be written to.
  * type `string`: Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### OutputListResult
* OutputListResult `object`: Object containing a list of outputs under a streaming job.
  * nextLink `string`: The link (url) to the next page of results.
  * value `array`: A list of outputs under a streaming job. Populated by a 'List' operation.
    * items [Output](#output)

### OutputProperties
* OutputProperties `object`: The properties that are associated with an output.
  * datasource [OutputDataSource](#outputdatasource)
  * diagnostics `object`: Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention.
    * conditions `array`: A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention.
      * items `object`: Condition applicable to the resource, or to the job overall, that warrant customer attention.
        * code `string`: The opaque diagnostic code.
        * message `string`: The human-readable message describing the condition in detail. Localized in the Accept-Language of the client request.
        * since `string`: The UTC timestamp of when the condition started. Customers should be able to find a corresponding event in the ops log around this time.
  * etag `string`: The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
  * serialization `object`: Describes how data from an input is serialized or how data is serialized when written to an output.
    * type `string`: Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests.

### PowerBIOutputDataSource
* PowerBIOutputDataSource `object`: Describes a Power BI output data source.
  * properties [PowerBIOutputDataSourceProperties](#powerbioutputdatasourceproperties)
  * type `string`: Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### PowerBIOutputDataSourceProperties
* PowerBIOutputDataSourceProperties `object`: The properties that are associated with a Power BI output.
  * dataset `string`: The name of the Power BI dataset. Required on PUT (CreateOrReplace) requests.
  * groupId `string`: The ID of the Power BI group.
  * groupName `string`: The name of the Power BI group. Use this property to help remember which specific Power BI group id was used.
  * table `string`: The name of the Power BI table under the specified dataset. Required on PUT (CreateOrReplace) requests.
  * refreshToken `string`: A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests.
  * tokenUserDisplayName `string`: The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.
  * tokenUserPrincipalName `string`: The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token.

### ServiceBusQueueOutputDataSource
* ServiceBusQueueOutputDataSource `object`: Describes a Service Bus Queue output data source.
  * properties [ServiceBusQueueOutputDataSourceProperties](#servicebusqueueoutputdatasourceproperties)
  * type `string`: Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### ServiceBusQueueOutputDataSourceProperties
* ServiceBusQueueOutputDataSourceProperties `object`: The properties that are associated with a Service Bus Queue output.
  * propertyColumns `array`: A string array of the names of output columns to be attached to Service Bus messages as custom properties.
    * items `string`
  * queueName `string`: The name of the Service Bus Queue. Required on PUT (CreateOrReplace) requests.
  * serviceBusNamespace `string`: The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyKey `string`: The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyName `string`: The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.

### ServiceBusTopicOutputDataSource
* ServiceBusTopicOutputDataSource `object`: Describes a Service Bus Topic output data source.
  * properties [ServiceBusTopicOutputDataSourceProperties](#servicebustopicoutputdatasourceproperties)
  * type `string`: Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests.

### ServiceBusTopicOutputDataSourceProperties
* ServiceBusTopicOutputDataSourceProperties `object`: The properties that are associated with a Service Bus Topic output.
  * propertyColumns `array`: A string array of the names of output columns to be attached to Service Bus messages as custom properties.
    * items `string`
  * topicName `string`: The name of the Service Bus Topic. Required on PUT (CreateOrReplace) requests.
  * serviceBusNamespace `string`: The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyKey `string`: The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests.
  * sharedAccessPolicyName `string`: The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests.

### SubResource
* SubResource `object`: The base sub-resource model definition.
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type


