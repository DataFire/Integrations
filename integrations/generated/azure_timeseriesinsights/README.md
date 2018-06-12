# @datafire/azure_timeseriesinsights

Client library for TimeSeriesInsightsClient

## Installation and Usage
```bash
npm install --save @datafire/azure_timeseriesinsights
```
```js
let azure_timeseriesinsights = require('@datafire/azure_timeseriesinsights').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

azure_timeseriesinsights.Operations_List({
  "api-version": ""
}).then(data => {
  console.log(data);
});
```

## Description

Time Series Insights client

## Actions

### Operations_List
Lists all of the available Time Series Insights related operations.


```js
azure_timeseriesinsights.Operations_List({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [OperationListResult](#operationlistresult)

### Environments_ListBySubscription
Lists all the available environments within a subscription, irrespective of the resource groups.


```js
azure_timeseriesinsights.Environments_ListBySubscription({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EnvironmentListResponse](#environmentlistresponse)

### Environments_ListByResourceGroup
Lists all the available environments associated with the subscription and within the specified resource group.


```js
azure_timeseriesinsights.Environments_ListByResourceGroup({
  "subscriptionId": "",
  "resourceGroupName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EnvironmentListResponse](#environmentlistresponse)

### Environments_Delete
Deletes the environment with the specified name in the specified subscription and resource group.


```js
azure_timeseriesinsights.Environments_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### Environments_Get
Gets the environment with the specified name in the specified subscription and resource group.


```js
azure_timeseriesinsights.Environments_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * $expand `string`: Setting $expand=status will include the status of the internal services of the environment in the Time Series Insights service.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EnvironmentResource](#environmentresource)

### Environments_Update
Updates the environment with the specified name in the specified subscription and resource group.


```js
azure_timeseriesinsights.Environments_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "environmentUpdateParameters": {},
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * environmentUpdateParameters **required** [EnvironmentUpdateParameters](#environmentupdateparameters)
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EnvironmentResource](#environmentresource)

### Environments_CreateOrUpdate
Create or update an environment in the specified subscription and resource group.


```js
azure_timeseriesinsights.Environments_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: Name of the environment
  * api-version **required** `string`: Version of the API to be used with the client request.
  * parameters **required** [EnvironmentCreateOrUpdateParameters](#environmentcreateorupdateparameters)

#### Output
* output [EnvironmentResource](#environmentresource)

### AccessPolicies_ListByEnvironment
Lists all the available access policies associated with the environment.


```js
azure_timeseriesinsights.AccessPolicies_ListByEnvironment({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [AccessPolicyListResponse](#accesspolicylistresponse)

### AccessPolicies_Delete
Deletes the access policy with the specified name in the specified subscription, resource group, and environment


```js
azure_timeseriesinsights.AccessPolicies_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "accessPolicyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * accessPolicyName **required** `string`: The name of the Time Series Insights access policy associated with the specified environment.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### AccessPolicies_Get
Gets the access policy with the specified name in the specified environment.


```js
azure_timeseriesinsights.AccessPolicies_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "accessPolicyName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * accessPolicyName **required** `string`: The name of the Time Series Insights access policy associated with the specified environment.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [AccessPolicyResource](#accesspolicyresource)

### AccessPolicies_Update
Updates the access policy with the specified name in the specified subscription, resource group, and environment.


```js
azure_timeseriesinsights.AccessPolicies_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "accessPolicyName": "",
  "api-version": "",
  "accessPolicyUpdateParameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * accessPolicyName **required** `string`: The name of the Time Series Insights access policy associated with the specified environment.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * accessPolicyUpdateParameters **required** [AccessPolicyUpdateParameters](#accesspolicyupdateparameters)

#### Output
* output [AccessPolicyResource](#accesspolicyresource)

### AccessPolicies_CreateOrUpdate
Create or update an access policy in the specified environment.


```js
azure_timeseriesinsights.AccessPolicies_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "accessPolicyName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * accessPolicyName **required** `string`: Name of the access policy.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * parameters **required** [AccessPolicyCreateOrUpdateParameters](#accesspolicycreateorupdateparameters)

#### Output
* output [AccessPolicyResource](#accesspolicyresource)

### EventSources_ListByEnvironment
Lists all the available event sources associated with the subscription and within the specified resource group and environment.


```js
azure_timeseriesinsights.EventSources_ListByEnvironment({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSourceListResponse](#eventsourcelistresponse)

### EventSources_Delete
Deletes the event source with the specified name in the specified subscription, resource group, and environment


```js
azure_timeseriesinsights.EventSources_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "eventSourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * eventSourceName **required** `string`: The name of the Time Series Insights event source associated with the specified environment.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### EventSources_Get
Gets the event source with the specified name in the specified environment.


```js
azure_timeseriesinsights.EventSources_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "eventSourceName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * eventSourceName **required** `string`: The name of the Time Series Insights event source associated with the specified environment.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [EventSourceResource](#eventsourceresource)

### EventSources_Update
Updates the event source with the specified name in the specified subscription, resource group, and environment.


```js
azure_timeseriesinsights.EventSources_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "eventSourceName": "",
  "api-version": "",
  "eventSourceUpdateParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * eventSourceName **required** `string`: The name of the Time Series Insights event source associated with the specified environment.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * eventSourceUpdateParameters **required** [EventSourceUpdateParameters](#eventsourceupdateparameters)

#### Output
* output [EventSourceResource](#eventsourceresource)

### EventSources_CreateOrUpdate
Create or update an event source under the specified environment.


```js
azure_timeseriesinsights.EventSources_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "eventSourceName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * eventSourceName **required** `string`: Name of the event source.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * parameters **required** [EventSourceCreateOrUpdateParameters](#eventsourcecreateorupdateparameters)

#### Output
* output [EventSourceResource](#eventsourceresource)

### ReferenceDataSets_ListByEnvironment
Lists all the available reference data sets associated with the subscription and within the specified resource group and environment.


```js
azure_timeseriesinsights.ReferenceDataSets_ListByEnvironment({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ReferenceDataSetListResponse](#referencedatasetlistresponse)

### ReferenceDataSets_Delete
Deletes the reference data set with the specified name in the specified subscription, resource group, and environment


```js
azure_timeseriesinsights.ReferenceDataSets_Delete({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "referenceDataSetName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * referenceDataSetName **required** `string`: The name of the Time Series Insights reference data set associated with the specified environment.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
*Output schema unknown*

### ReferenceDataSets_Get
Gets the reference data set with the specified name in the specified environment.


```js
azure_timeseriesinsights.ReferenceDataSets_Get({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "referenceDataSetName": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * referenceDataSetName **required** `string`: The name of the Time Series Insights reference data set associated with the specified environment.
  * api-version **required** `string`: Version of the API to be used with the client request.

#### Output
* output [ReferenceDataSetResource](#referencedatasetresource)

### ReferenceDataSets_Update
Updates the reference data set with the specified name in the specified subscription, resource group, and environment.


```js
azure_timeseriesinsights.ReferenceDataSets_Update({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "referenceDataSetName": "",
  "api-version": "",
  "referenceDataSetUpdateParameters": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * referenceDataSetName **required** `string`: The name of the Time Series Insights reference data set associated with the specified environment.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * referenceDataSetUpdateParameters **required** [ReferenceDataSetUpdateParameters](#referencedatasetupdateparameters)

#### Output
* output [ReferenceDataSetResource](#referencedatasetresource)

### ReferenceDataSets_CreateOrUpdate
Create or update a reference data set in the specified environment.


```js
azure_timeseriesinsights.ReferenceDataSets_CreateOrUpdate({
  "subscriptionId": "",
  "resourceGroupName": "",
  "environmentName": "",
  "referenceDataSetName": "",
  "api-version": "",
  "parameters": null
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure Subscription ID.
  * resourceGroupName **required** `string`: Name of an Azure Resource group.
  * environmentName **required** `string`: The name of the Time Series Insights environment associated with the specified resource group.
  * referenceDataSetName **required** `string`: Name of the reference data set.
  * api-version **required** `string`: Version of the API to be used with the client request.
  * parameters **required** [ReferenceDataSetCreateOrUpdateParameters](#referencedatasetcreateorupdateparameters)

#### Output
* output [ReferenceDataSetResource](#referencedatasetresource)



## Definitions

### AccessPolicyCreateOrUpdateParameters
* AccessPolicyCreateOrUpdateParameters `object`
  * properties **required** [AccessPolicyResourceProperties](#accesspolicyresourceproperties)

### AccessPolicyListResponse
* AccessPolicyListResponse `object`: The response of the List access policies operation.
  * value `array`: Result of the List access policies operation.
    * items [AccessPolicyResource](#accesspolicyresource)

### AccessPolicyMutableProperties
* AccessPolicyMutableProperties `object`: An object that represents a set of mutable access policy resource properties.
  * description `string`: An description of the access policy.
  * roles `array`: The list of roles the principal is assigned on the environment.
    * items `string` (values: Reader, Contributor): A role defining the data plane operations that a principal can perform on a Time Series Insights client.

### AccessPolicyResource
* AccessPolicyResource `object`: An access policy is used to grant users and applications access to the environment. Roles are assigned to service principals in Azure Active Directory. These roles define the actions the principal can perform through the Time Series Insights data plane APIs.
  * properties [AccessPolicyResourceProperties](#accesspolicyresourceproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### AccessPolicyResourceProperties
* AccessPolicyResourceProperties `object`
  * description `string`: An description of the access policy.
  * principalObjectId `string`: The objectId of the principal in Azure Active Directory.
  * roles `array`: The list of roles the principal is assigned on the environment.
    * items `string` (values: Reader, Contributor): A role defining the data plane operations that a principal can perform on a Time Series Insights client.

### AccessPolicyUpdateParameters
* AccessPolicyUpdateParameters `object`
  * properties [AccessPolicyMutableProperties](#accesspolicymutableproperties)

### AzureEventSourceProperties
* AzureEventSourceProperties `object`: Properties of an event source that reads events from an event broker in Azure.
  * eventSourceResourceId **required** `string`: The resource id of the event source in Azure Resource Manager.
  * timestampPropertyName `string`: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
  * creationTime `string`: The time the resource was created.
  * provisioningState [ProvisioningState](#provisioningstate)

### CloudError
* CloudError `object`: Contains information about an API error.
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`: Describes a particular API error with an error code and a message.
  * code `string`: An error code that describes the error condition more precisely than an HTTP status code. Can be used to programatically handle specific error cases.
  * details `array`: Contains nested errors that are related to this error.
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`: A message that describes the error in detail and provides debugging information.
  * target `string`: The target of the particular error (for example, the name of the property in error).

### CreateOrUpdateTrackedResourceProperties
* CreateOrUpdateTrackedResourceProperties `object`: Properties required to create any resource tracked by Azure Resource Manager.
  * location **required** `string`: The location of the resource.
  * tags `object`: Key-value pairs of additional properties for the resource.

### EnvironmentCreateOrUpdateParameters
* EnvironmentCreateOrUpdateParameters `object`: Parameters supplied to the CreateOrUpdate Environment operation.
  * properties **required** [EnvironmentCreationProperties](#environmentcreationproperties)
  * sku **required** [Sku](#sku)
  * location **required** `string`: The location of the resource.
  * tags `object`: Key-value pairs of additional properties for the resource.

### EnvironmentCreationProperties
* EnvironmentCreationProperties `object`: Properties used to create an environment.
  * dataRetentionTime **required** `string`: ISO8601 timespan specifying the minimum number of days the environment's events will be available for query.
  * partitionKeyProperties `array`: The list of partition keys according to which the data in the environment will be ordered.
    * items [PartitionKeyProperty](#partitionkeyproperty)
  * storageLimitExceededBehavior `string` (values: PurgeOldData, PauseIngress): The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.

### EnvironmentListResponse
* EnvironmentListResponse `object`: The response of the List Environments operation.
  * value `array`: Result of the List Environments operation.
    * items [EnvironmentResource](#environmentresource)

### EnvironmentMutableProperties
* EnvironmentMutableProperties `object`: An object that represents a set of mutable environment resource properties.
  * dataRetentionTime `string`: ISO8601 timespan specifying the minimum number of days the environment's events will be available for query.
  * partitionKeyProperties `array`: The list of event properties which will be used to partition data in the environment.
    * items [PartitionKeyProperty](#partitionkeyproperty)
  * storageLimitExceededBehavior `string` (values: PurgeOldData, PauseIngress): The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.

### EnvironmentResource
* EnvironmentResource `object`: An environment is a set of time-series data avaliable for query, and is the top level Azure Time Series Insights resource.
  * properties [EnvironmentResourceProperties](#environmentresourceproperties)
  * sku [Sku](#sku)
  * location **required** `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### EnvironmentResourceProperties
* EnvironmentResourceProperties `object`: Properties of the environment.
  * dataAccessFqdn `string`: The fully qualified domain name used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
  * dataAccessId `string`: An id used to access the environment data, e.g. to query the environment's events or upload reference data for the environment.
  * status [EnvironmentStatus](#environmentstatus)
  * dataRetentionTime **required** `string`: ISO8601 timespan specifying the minimum number of days the environment's events will be available for query.
  * partitionKeyProperties `array`: The list of partition keys according to which the data in the environment will be ordered.
    * items [PartitionKeyProperty](#partitionkeyproperty)
  * storageLimitExceededBehavior `string` (values: PurgeOldData, PauseIngress): The behavior the Time Series Insights service should take when the environment's capacity has been exceeded. If "PauseIngress" is specified, new events will not be read from the event source. If "PurgeOldData" is specified, new events will continue to be read and old events will be deleted from the environment. The default behavior is PurgeOldData.
  * creationTime `string`: The time the resource was created.
  * provisioningState [ProvisioningState](#provisioningstate)

### EnvironmentStateDetails
* EnvironmentStateDetails `object`: An object that contains the details about an environment's state.
  * code `string`: Contains the code that represents the reason of an environment being in a particular state. Can be used to programatically handle specific cases.
  * message `string`: A message that describes the state in detail.

### EnvironmentStatus
* EnvironmentStatus `object`: An object that represents the status of the environment, and its internal state in the Time Series Insights service.
  * ingress [IngressEnvironmentStatus](#ingressenvironmentstatus)

### EnvironmentUpdateParameters
* EnvironmentUpdateParameters `object`: Parameters supplied to the Update Environment operation.
  * properties [EnvironmentMutableProperties](#environmentmutableproperties)
  * sku [Sku](#sku)
  * tags `object`: Key-value pairs of additional properties for the environment.

### EventHubEventSourceCommonProperties
* EventHubEventSourceCommonProperties `object`: Properties of the EventHub event source.
  * consumerGroupName **required** `string`: The name of the event hub's consumer group that holds the partitions from which events will be read.
  * eventHubName **required** `string`: The name of the event hub.
  * keyName **required** `string`: The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant 'Listen' permissions to the event hub.
  * serviceBusNamespace **required** `string`: The name of the service bus that contains the event hub.
  * eventSourceResourceId **required** `string`: The resource id of the event source in Azure Resource Manager.
  * timestampPropertyName `string`: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
  * creationTime `string`: The time the resource was created.
  * provisioningState [ProvisioningState](#provisioningstate)

### EventHubEventSourceCreateOrUpdateParameters
* EventHubEventSourceCreateOrUpdateParameters `object`: Parameters supplied to the Create or Update Event Source operation for an EventHub event source.
  * properties **required** [EventHubEventSourceCreationProperties](#eventhubeventsourcecreationproperties)
  * kind **required** `string` (values: Microsoft.EventHub, Microsoft.IoTHub): The kind of the event source.
  * location **required** `string`: The location of the resource.
  * tags `object`: Key-value pairs of additional properties for the resource.

### EventHubEventSourceCreationProperties
* EventHubEventSourceCreationProperties `object`: Properties of the EventHub event source that are required on create or update requests.
  * sharedAccessKey **required** `string`: The value of the shared access key that grants the Time Series Insights service read access to the event hub. This property is not shown in event source responses.
  * consumerGroupName **required** `string`: The name of the event hub's consumer group that holds the partitions from which events will be read.
  * eventHubName **required** `string`: The name of the event hub.
  * keyName **required** `string`: The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant 'Listen' permissions to the event hub.
  * serviceBusNamespace **required** `string`: The name of the service bus that contains the event hub.
  * eventSourceResourceId **required** `string`: The resource id of the event source in Azure Resource Manager.
  * timestampPropertyName `string`: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
  * creationTime `string`: The time the resource was created.
  * provisioningState [ProvisioningState](#provisioningstate)

### EventHubEventSourceMutableProperties
* EventHubEventSourceMutableProperties `object`: An object that represents a set of mutable EventHub event source resource properties.
  * sharedAccessKey `string`: The value of the shared access key that grants the Time Series Insights service read access to the event hub. This property is not shown in event source responses.
  * localTimestamp [LocalTimestamp](#localtimestamp)
  * timestampPropertyName `string`: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.

### EventHubEventSourceResource
* EventHubEventSourceResource `object`: An event source that receives its data from an Azure EventHub.
  * properties **required** [EventHubEventSourceResourceProperties](#eventhubeventsourceresourceproperties)
  * kind **required** `string` (values: Microsoft.EventHub, Microsoft.IoTHub): The kind of the event source.
  * location **required** `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### EventHubEventSourceResourceProperties
* EventHubEventSourceResourceProperties: Properties of the EventHub event source resource.
  * consumerGroupName **required** `string`: The name of the event hub's consumer group that holds the partitions from which events will be read.
  * eventHubName **required** `string`: The name of the event hub.
  * keyName **required** `string`: The name of the SAS key that grants the Time Series Insights service access to the event hub. The shared access policies for this key must grant 'Listen' permissions to the event hub.
  * serviceBusNamespace **required** `string`: The name of the service bus that contains the event hub.
  * eventSourceResourceId **required** `string`: The resource id of the event source in Azure Resource Manager.
  * timestampPropertyName `string`: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
  * creationTime `string`: The time the resource was created.
  * provisioningState [ProvisioningState](#provisioningstate)

### EventHubEventSourceUpdateParameters
* EventHubEventSourceUpdateParameters `object`: Parameters supplied to the Update Event Source operation to update an EventHub event source.
  * properties [EventHubEventSourceMutableProperties](#eventhubeventsourcemutableproperties)
  * tags `object`: Key-value pairs of additional properties for the event source.

### EventSourceCommonProperties
* EventSourceCommonProperties `object`: Properties of the event source.
  * timestampPropertyName `string`: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
  * creationTime `string`: The time the resource was created.
  * provisioningState [ProvisioningState](#provisioningstate)

### EventSourceCreateOrUpdateParameters
* EventSourceCreateOrUpdateParameters `object`: Parameters supplied to the Create or Update Event Source operation.
  * kind **required** `string` (values: Microsoft.EventHub, Microsoft.IoTHub): The kind of the event source.
  * location **required** `string`: The location of the resource.
  * tags `object`: Key-value pairs of additional properties for the resource.

### EventSourceListResponse
* EventSourceListResponse `object`: The response of the List EventSources operation.
  * value `array`: Result of the List EventSources operation.
    * items [EventSourceResource](#eventsourceresource)

### EventSourceMutableProperties
* EventSourceMutableProperties `object`: An object that represents a set of mutable event source resource properties.
  * localTimestamp [LocalTimestamp](#localtimestamp)
  * timestampPropertyName `string`: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.

### EventSourceResource
* EventSourceResource `object`: An environment receives data from one or more event sources. Each event source has associated connection info that allows the Time Series Insights ingress pipeline to connect to and pull data from the event source
  * kind **required** `string` (values: Microsoft.EventHub, Microsoft.IoTHub): The kind of the event source.
  * location **required** `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### EventSourceUpdateParameters
* EventSourceUpdateParameters `object`: Parameters supplied to the Update Event Source operation.
  * tags `object`: Key-value pairs of additional properties for the event source.

### IngressEnvironmentStatus
* IngressEnvironmentStatus `object`: An object that represents the status of ingress on an environment.
  * state `string` (values: Disabled, Ready, Running, Paused, Unknown): This string represents the state of ingress operations on an environment. It can be "Disabled", "Ready", "Running", "Paused" or "Unknown"
  * stateDetails [EnvironmentStateDetails](#environmentstatedetails)

### IoTHubEventSourceCommonProperties
* IoTHubEventSourceCommonProperties `object`: Properties of the IoTHub event source.
  * consumerGroupName **required** `string`: The name of the iot hub's consumer group that holds the partitions from which events will be read.
  * iotHubName **required** `string`: The name of the iot hub.
  * keyName **required** `string`: The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub.
  * eventSourceResourceId **required** `string`: The resource id of the event source in Azure Resource Manager.
  * timestampPropertyName `string`: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
  * creationTime `string`: The time the resource was created.
  * provisioningState [ProvisioningState](#provisioningstate)

### IoTHubEventSourceCreateOrUpdateParameters
* IoTHubEventSourceCreateOrUpdateParameters `object`: Parameters supplied to the Create or Update Event Source operation for an IoTHub event source.
  * properties **required** [IoTHubEventSourceCreationProperties](#iothubeventsourcecreationproperties)
  * kind **required** `string` (values: Microsoft.EventHub, Microsoft.IoTHub): The kind of the event source.
  * location **required** `string`: The location of the resource.
  * tags `object`: Key-value pairs of additional properties for the resource.

### IoTHubEventSourceCreationProperties
* IoTHubEventSourceCreationProperties `object`: Properties of the IoTHub event source that are required on create or update requests.
  * sharedAccessKey **required** `string`: The value of the Shared Access Policy key that grants the Time Series Insights service read access to the iot hub. This property is not shown in event source responses.
  * consumerGroupName **required** `string`: The name of the iot hub's consumer group that holds the partitions from which events will be read.
  * iotHubName **required** `string`: The name of the iot hub.
  * keyName **required** `string`: The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub.
  * eventSourceResourceId **required** `string`: The resource id of the event source in Azure Resource Manager.
  * timestampPropertyName `string`: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
  * creationTime `string`: The time the resource was created.
  * provisioningState [ProvisioningState](#provisioningstate)

### IoTHubEventSourceMutableProperties
* IoTHubEventSourceMutableProperties `object`: An object that represents a set of mutable IoTHub event source resource properties.
  * sharedAccessKey `string`: The value of the shared access key that grants the Time Series Insights service read access to the iot hub. This property is not shown in event source responses.
  * localTimestamp [LocalTimestamp](#localtimestamp)
  * timestampPropertyName `string`: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.

### IoTHubEventSourceResource
* IoTHubEventSourceResource `object`: An event source that receives its data from an Azure IoTHub.
  * properties **required** [IoTHubEventSourceResourceProperties](#iothubeventsourceresourceproperties)
  * kind **required** `string` (values: Microsoft.EventHub, Microsoft.IoTHub): The kind of the event source.
  * location **required** `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### IoTHubEventSourceResourceProperties
* IoTHubEventSourceResourceProperties: Properties of the IoTHub event source resource.
  * consumerGroupName **required** `string`: The name of the iot hub's consumer group that holds the partitions from which events will be read.
  * iotHubName **required** `string`: The name of the iot hub.
  * keyName **required** `string`: The name of the Shared Access Policy key that grants the Time Series Insights service access to the iot hub. This shared access policy key must grant 'service connect' permissions to the iot hub.
  * eventSourceResourceId **required** `string`: The resource id of the event source in Azure Resource Manager.
  * timestampPropertyName `string`: The event property that will be used as the event source's timestamp. If a value isn't specified for timestampPropertyName, or if null or empty-string is specified, the event creation time will be used.
  * creationTime `string`: The time the resource was created.
  * provisioningState [ProvisioningState](#provisioningstate)

### IoTHubEventSourceUpdateParameters
* IoTHubEventSourceUpdateParameters `object`: Parameters supplied to the Update Event Source operation to update an IoTHub event source.
  * properties [IoTHubEventSourceMutableProperties](#iothubeventsourcemutableproperties)
  * tags `object`: Key-value pairs of additional properties for the event source.

### LocalTimestamp
* LocalTimestamp `object`: An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.
  * format `string` (values: Embedded, Iana, TimeSpan): An enum that represents the format of the local timestamp property that needs to be set.
  * timeZoneOffset `object`: An object that represents the offset information for the local timestamp format specified. Should not be specified for LocalTimestampFormat - Embedded.
    * propertyName `string`: The event property that will be contain the offset information to calculate the local timestamp. When the LocalTimestampFormat is Iana, the property name will contain the name of the column which contains IANA Timezone Name (eg: Americas/Los Angeles). When LocalTimestampFormat is Timespan, it contains the name of property which contains values representing the offset (eg: P1D or 1.00:00:00)

### Operation
* Operation `object`: A Time Series Insights REST API operation
  * display `object`: Contains the localized display information for this particular operation / action.
    * description `string`: The localized friendly description for the operation.
    * operation `string`: The localized friendly name for the operation.
    * provider `string`: The localized friendly form of the resource provider name.
    * resource `string`: The localized friendly form of the resource type related to this action/operation.
  * name `string`: The name of the operation being performed on this particular object.

### OperationListResult
* OperationListResult `object`: Result of the request to list Time Series Insights operations. It contains a list of operations and a URL link to get the next set of results.
  * nextLink `string`: URL to get the next set of operation list results if there are any.
  * value `array`: List of Time Series Insights operations supported by the Microsoft.TimeSeriesInsights resource provider.
    * items [Operation](#operation)

### PartitionKeyProperty
* PartitionKeyProperty `object`: The structure of the property that a partition key can have. An environment can have multiple such properties.
  * name `string`: The name of the property.
  * type `string` (values: String): The type of the property.

### ProvisioningState
* ProvisioningState `string` (values: Accepted, Creating, Updating, Succeeded, Failed, Deleting): Provisioning state of the resource.

### ReferenceDataSetCreateOrUpdateParameters
* ReferenceDataSetCreateOrUpdateParameters `object`
  * properties **required** [ReferenceDataSetCreationProperties](#referencedatasetcreationproperties)
  * location **required** `string`: The location of the resource.
  * tags `object`: Key-value pairs of additional properties for the resource.

### ReferenceDataSetCreationProperties
* ReferenceDataSetCreationProperties `object`: Properties used to create a reference data set.
  * dataStringComparisonBehavior `string` (values: Ordinal, OrdinalIgnoreCase): The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used.
  * keyProperties **required** `array`: The list of key properties for the reference data set.
    * items [ReferenceDataSetKeyProperty](#referencedatasetkeyproperty)

### ReferenceDataSetKeyProperty
* ReferenceDataSetKeyProperty `object`: A key property for the reference data set. A reference data set can have multiple key properties.
  * name `string`: The name of the key property.
  * type `string` (values: String, Double, Bool, DateTime): The type of the key property.

### ReferenceDataSetListResponse
* ReferenceDataSetListResponse `object`: The response of the List Reference Data Sets operation.
  * value `array`: Result of the List Reference Data Sets operation.
    * items [ReferenceDataSetResource](#referencedatasetresource)

### ReferenceDataSetResource
* ReferenceDataSetResource `object`: A reference data set provides metadata about the events in an environment. Metadata in the reference data set will be joined with events as they are read from event sources. The metadata that makes up the reference data set is uploaded or modified through the Time Series Insights data plane APIs.
  * properties [ReferenceDataSetResourceProperties](#referencedatasetresourceproperties)
  * location **required** `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### ReferenceDataSetResourceProperties
* ReferenceDataSetResourceProperties: Properties of the reference data set.
  * dataStringComparisonBehavior `string` (values: Ordinal, OrdinalIgnoreCase): The reference data set key comparison behavior can be set using this property. By default, the value is 'Ordinal' - which means case sensitive key comparison will be performed while joining reference data with events or while adding new reference data. When 'OrdinalIgnoreCase' is set, case insensitive comparison will be used.
  * keyProperties **required** `array`: The list of key properties for the reference data set.
    * items [ReferenceDataSetKeyProperty](#referencedatasetkeyproperty)
  * creationTime `string`: The time the resource was created.
  * provisioningState [ProvisioningState](#provisioningstate)

### ReferenceDataSetUpdateParameters
* ReferenceDataSetUpdateParameters `object`: Parameters supplied to the Update Reference Data Set operation.
  * tags `object`: Key-value pairs of additional properties for the reference data set.

### Resource
* Resource `object`: Time Series Insights resource
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### ResourceProperties
* ResourceProperties `object`: Properties that are common to all tracked resources.
  * creationTime `string`: The time the resource was created.
  * provisioningState [ProvisioningState](#provisioningstate)

### Sku
* Sku `object`: The sku determines the capacity of the environment, the SLA (in queries-per-minute and total capacity), and the billing rate.
  * capacity **required** `integer`: The capacity of the sku. This value can be changed to support scale out of environments after they have been created.
  * name **required** `string` (values: S1, S2): The name of this SKU.

### TrackedResource
* TrackedResource `object`: Time Series Insights resource that is tracked by Azure Resource Manager.
  * location **required** `string`: Resource location
  * tags `object`: Resource tags
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type


