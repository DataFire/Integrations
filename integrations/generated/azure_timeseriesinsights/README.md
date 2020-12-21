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

.then(data => {
  console.log(data);
});
```

## Description

Time Series Insights environment data plane client for PAYG (Preview L1 SKU) environments.

## Actions

### Query_GetAvailability
Returns the time range and distribution of event count over the event timestamp ($ts). This API can be used to provide landing experience of navigating to the environment.


```js
azure_timeseriesinsights.Query_GetAvailability({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * storeType `string`: For the environments with warm store enabled, the query can be executed either on the 'WarmStore' or 'ColdStore'. This parameter in the query defines which store the query should be executed on. If not defined, the query will be executed on the cold store.
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [AvailabilityResponse](#availabilityresponse)

### Query_GetEventSchema
Returns environment event schema for a given search span. Event schema is a set of property definitions. Event schema may not be contain all persisted properties when there are too many properties.


```js
azure_timeseriesinsights.Query_GetEventSchema({
  "api-version": "",
  "parameters": {
    "searchSpan": {
      "from": "",
      "to": ""
    }
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * storeType `string`: For the environments with warm store enabled, the query can be executed either on the 'WarmStore' or 'ColdStore'. This parameter in the query defines which store the query should be executed on. If not defined, the query will be executed on the cold store.
  * parameters **required** [GetEventSchemaRequest](#geteventschemarequest)
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [EventSchema](#eventschema)

### TimeSeriesHierarchies_Get
Returns time series hierarchies definitions in pages.


```js
azure_timeseriesinsights.TimeSeriesHierarchies_Get({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * x-ms-continuation `string`: Continuation token from previous page of results to retrieve the next page of the results in calls that support pagination. To get the first page results, specify null continuation token as parameter value. Returned continuation token is null if all results have been returned, and there is no next page of results.
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [GetHierarchiesPage](#gethierarchiespage)

### TimeSeriesHierarchies_ExecuteBatch
Executes a batch get, create, update, delete operation on multiple time series hierarchy definitions.


```js
azure_timeseriesinsights.TimeSeriesHierarchies_ExecuteBatch({
  "api-version": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * parameters **required** [HierarchiesBatchRequest](#hierarchiesbatchrequest)
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [HierarchiesBatchResponse](#hierarchiesbatchresponse)

### TimeSeriesInstances_Get
Gets time series instances in pages.


```js
azure_timeseriesinsights.TimeSeriesInstances_Get({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * x-ms-continuation `string`: Continuation token from previous page of results to retrieve the next page of the results in calls that support pagination. To get the first page results, specify null continuation token as parameter value. Returned continuation token is null if all results have been returned, and there is no next page of results.
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [GetInstancesPage](#getinstancespage)

### TimeSeriesInstances_ExecuteBatch
Executes a batch get, create, update, delete operation on multiple time series instances.


```js
azure_timeseriesinsights.TimeSeriesInstances_ExecuteBatch({
  "api-version": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * parameters **required** [InstancesBatchRequest](#instancesbatchrequest)
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [InstancesBatchResponse](#instancesbatchresponse)

### TimeSeriesInstances_Search
Partial list of hits on search for time series instances based on instance attributes.


```js
azure_timeseriesinsights.TimeSeriesInstances_Search({
  "api-version": "",
  "parameters": {
    "searchString": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * x-ms-continuation `string`: Continuation token from previous page of results to retrieve the next page of the results in calls that support pagination. To get the first page results, specify null continuation token as parameter value. Returned continuation token is null if all results have been returned, and there is no next page of results.
  * parameters **required** [SearchInstancesRequest](#searchinstancesrequest)
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [SearchInstancesResponsePage](#searchinstancesresponsepage)

### TimeSeriesInstances_Suggest
Suggests keywords based on time series instance attributes to be later used in Search Instances.


```js
azure_timeseriesinsights.TimeSeriesInstances_Suggest({
  "api-version": "",
  "parameters": {
    "searchString": ""
  }
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * parameters **required** [InstancesSuggestRequest](#instancessuggestrequest)
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [InstancesSuggestResponse](#instancessuggestresponse)

### ModelSettings_Get
Returns the model settings which includes model display name, Time Series ID properties and default type ID. Every pay-as-you-go environment has a model that is automatically created.


```js
azure_timeseriesinsights.ModelSettings_Get({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [ModelSettingsResponse](#modelsettingsresponse)

### ModelSettings_Update
Updates time series model settings - either the model name or default type ID.


```js
azure_timeseriesinsights.ModelSettings_Update({
  "api-version": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * parameters **required** [UpdateModelSettingsRequest](#updatemodelsettingsrequest)
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [ModelSettingsResponse](#modelsettingsresponse)

### Query_Execute
Executes Time Series Query in pages of results - Get Events, Get Series or Aggregate Series.


```js
azure_timeseriesinsights.Query_Execute({
  "api-version": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * storeType `string`: For the environments with warm store enabled, the query can be executed either on the 'WarmStore' or 'ColdStore'. This parameter in the query defines which store the query should be executed on. If not defined, the query will be executed on the cold store.
  * x-ms-continuation `string`: Continuation token from previous page of results to retrieve the next page of the results in calls that support pagination. To get the first page results, specify null continuation token as parameter value. Returned continuation token is null if all results have been returned, and there is no next page of results.
  * parameters **required** [QueryRequest](#queryrequest)
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [QueryResultPage](#queryresultpage)

### TimeSeriesTypes_Get
Gets time series types in pages.


```js
azure_timeseriesinsights.TimeSeriesTypes_Get({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * x-ms-continuation `string`: Continuation token from previous page of results to retrieve the next page of the results in calls that support pagination. To get the first page results, specify null continuation token as parameter value. Returned continuation token is null if all results have been returned, and there is no next page of results.
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [GetTypesPage](#gettypespage)

### TimeSeriesTypes_ExecuteBatch
Executes a batch get, create, update, delete operation on multiple time series types.


```js
azure_timeseriesinsights.TimeSeriesTypes_ExecuteBatch({
  "api-version": "",
  "parameters": {}
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: Version of the API to be used with the client request. Currently supported version is "2018-11-01-preview".
  * parameters **required** [TypesBatchRequest](#typesbatchrequest)
  * x-ms-client-request-id `string`: Optional client request ID. Service records this value. Allows the service to trace operation across services, and allows the customer to contact support regarding a particular request.
  * x-ms-client-session-id `string`: Optional client session ID. Service records this value. Allows the service to trace a group of related operations across services, and allows the customer to contact support regarding a particular group of requests.

#### Output
* output [TypesBatchResponse](#typesbatchresponse)



## Definitions

### AggregateSeries
* AggregateSeries `object`: Aggregate Series query. Allows to calculate an aggregated time series from events for a given Time Series ID and search span.
  * filter [Tsx](#tsx)
  * inlineVariables `object`: This allows the user the optionally define inline-variables apart from the ones already defined in the model. When the inline variable names have the same name as the model, the inline variable definition takes precedence. Can be null.
  * interval **required** `string`: Interval size is specified in ISO-8601 duration format. All intervals are the same size. One month is always converted to 30 days, and one year is always 365 days. Examples: 1 minute is "PT1M", 1 millisecond is "PT0.001S". For more information, see https://www.w3.org/TR/xmlschema-2/#duration
  * projectedVariables `array`: This allows the user to optionally select the variables that needs to be projected. When it is null or not set, all the variables from inlineVariables and model are returned. Can be null.
    * items `string`
  * searchSpan **required** [DateTimeRange](#datetimerange)
  * timeSeriesId **required** [TimeSeriesId](#timeseriesid)

### AggregateVariable
* AggregateVariable: Aggregate variable represents any aggregation calculation. Aggregate Variables does not support interpolation.
  * filter [Tsx](#tsx)
  * kind **required** `string`: Allowed "kind" values are - "numeric" or "aggregate". While "numeric" allows you to specify value of the reconstructed signal and the expression to aggregate them, the "aggregate" kind lets you directly aggregate on the event properties without specifying value.
  * aggregation [Tsx](#tsx)

### Availability
* Availability `object`: Event availability information when environment contains events. Contains time range of events and approximate distribution of events over time.
  * intervalSize `string`: Interval size for the returned distribution of the events. Returned interval is selected to return a reasonable number of points. All intervals are the same size. On the wire interval is specified in ISO-8601 duration format. One month is always converted to 30 days, and one year is always 365 days. Examples: 1 minute is "PT1M", 1 millisecond is "PT0.001S". For more information, see https://www.w3.org/TR/xmlschema-2/#duration
  * range [DateTimeRange](#datetimerange)

### AvailabilityResponse
* AvailabilityResponse `object`: Response of Get Availability operation. When environment has no data, availability property is null.
  * availability [Availability](#availability)

### CategoricalVariable
* CategoricalVariable: Categorical variable represents signal that needs to be analyzed based on the count or duration of occurrence of limited set of defined values.
  * filter [Tsx](#tsx)
  * kind **required** `string`: Allowed "kind" values are - "numeric" or "aggregate". While "numeric" allows you to specify value of the reconstructed signal and the expression to aggregate them, the "aggregate" kind lets you directly aggregate on the event properties without specifying value.
  * categories `array`
    * items [TimeSeriesAggregateCategory](#timeseriesaggregatecategory)
  * defaultCategory [TimeSeriesDefaultCategory](#timeseriesdefaultcategory)
  * interpolation [Interpolation](#interpolation)
  * value [Tsx](#tsx)

### DateTimeRange
* DateTimeRange `object`: The range of time. Cannot be null or negative.
  * from **required** `string`: Start timestamp of the time range. Start timestamp is inclusive when used in time series query requests. Events that have this timestamp are included.
  * to **required** `string`: End timestamp of the time range. End timestamp is exclusive when used in time series query requests. Events that match this timestamp are excluded. Note that end timestamp is inclusive when returned by Get Availability (meaning that there is an event with this exact "to" timestamp).

### EventProperty
* EventProperty `object`: Property of an event that is either stored or computed. Properties are identified by both name and type. Different events can have properties with same name, but different type.
  * name `string`: The name of the property.
  * type [PropertyType](#propertytype)

### EventSchema
* EventSchema `object`: Event schema of all events within a given search span. Event schema is a set of property definitions. Properties are identified by both name and type. Different events can have properties with same name, but different type. Event schema may not be contain all persisted properties when there are too many properties.
  * properties `array`: A set of property definitions. When environment has no data, the returned array is empty.
    * items [EventProperty](#eventproperty)

### GetEventSchemaRequest
* GetEventSchemaRequest `object`: Request to get the event schema of all events within a given search span.
  * searchSpan **required** [DateTimeRange](#datetimerange)

### GetEvents
* GetEvents `object`: Get Events query. Allows to retrieve raw events for a given Time Series ID and search span.
  * filter [Tsx](#tsx)
  * projectedProperties `array`: Projected properties is an array of properties which you want to project. These properties must appear in the events; otherwise, they are not returned.
    * items [EventProperty](#eventproperty)
  * searchSpan **required** [DateTimeRange](#datetimerange)
  * take `integer`: Maximum number of property values in the whole response set, not the maximum number of property values per page. Defaults to 10,000 when not set. Maximum value of take can be 250,000.
  * timeSeriesId **required** [TimeSeriesId](#timeseriesid)

### GetHierarchiesPage
* GetHierarchiesPage: Partial list of time series hierarchies returned in a single request.
  * continuationToken `string`: If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in "x-ms-continuation" HTTP header.
  * hierarchies `array`: Partial list of time series hierarchies returned in a single request. Can be empty if server was unable to fill the page in this request, or there is no more objects when continuation token is null.
    * items [TimeSeriesHierarchy](#timeserieshierarchy)

### GetInstancesPage
* GetInstancesPage: Partial list of time series instances returned in a single request.
  * continuationToken `string`: If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in "x-ms-continuation" HTTP header.
  * instances `array`: Partial list of time series instances returned in a single request. Can be empty if server was unable to fill the page in this request, or there is no more objects when continuation token is null.
    * items [TimeSeriesInstance](#timeseriesinstance)

### GetSeries
* GetSeries `object`: Get Series query. Allows to retrieve time series of calculated variable values from events for a given Time Series ID and search span.
  * filter [Tsx](#tsx)
  * inlineVariables `object`: Optional inline variables apart from the ones already defined in the time series type in the model. When the inline variable name is the same name as in the model, the inline variable definition takes precedence. Can be null.
  * projectedVariables `array`: Selected variables that needs to be projected in the query result. When it is null or not set, all the variables from inlineVariables and time series type in the model are returned. Can be null.
    * items `string`
  * searchSpan **required** [DateTimeRange](#datetimerange)
  * take `integer`: Maximum number of property values in the whole response set, not the maximum number of property values per page. Defaults to 10,000 when not set. Maximum value of take can be 250,000.
  * timeSeriesId **required** [TimeSeriesId](#timeseriesid)

### GetTypesPage
* GetTypesPage: Partial list of time series types returned in a single request.
  * continuationToken `string`: If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in "x-ms-continuation" HTTP header.
  * types `array`: Partial list of time series types returned in a single request. Can be empty if server was unable to fill the page with more types in this request, or there is no more types when continuation token is null.
    * items [TimeSeriesType](#timeseriestype)

### HierarchiesBatchRequest
* HierarchiesBatchRequest `object`: Request to perform a single operation on a batch of hierarchies. Exactly one of "get", "put" or "delete" must be set.
  * delete [HierarchiesRequestBatchGetDelete](#hierarchiesrequestbatchgetdelete)
  * get [HierarchiesRequestBatchGetDelete](#hierarchiesrequestbatchgetdelete)
  * put `array`: "put" should be set while creating or updating hierarchies.
    * items [TimeSeriesHierarchy](#timeserieshierarchy)

### HierarchiesBatchResponse
* HierarchiesBatchResponse `object`: Response of a single operation on a batch of time series hierarchies. Only one of "get", "put" or "delete" will be set.
  * delete `array`: List of error objects corresponding by position to the "delete" array in the request - null when the operation is successful.
    * items [TsiErrorBody](#tsierrorbody)
  * get `array`: List of hierarchy or error objects corresponding by position to the "get" array in the request. Hierarchy object is set when operation is successful and error object is set when operation is unsuccessful.
    * items [TimeSeriesHierarchyOrError](#timeserieshierarchyorerror)
  * put `array`: List of hierarchy or error object corresponding by position to the "put" array in the request. Hierarchy object is set when operation is successful and error object is set when operation is unsuccessful.
    * items [TimeSeriesHierarchyOrError](#timeserieshierarchyorerror)

### HierarchiesExpandParameter
* HierarchiesExpandParameter `object`: Definition of whether to expand hierarchy nodes in the same search instances call.
  * kind `string` (values: UntilChildren, OneLevel): Kind of the expansion of hierarchy nodes. When it is set to 'UntilChildren', the hierarchy nodes are expanded recursively until there is more than one child. When it is set to 'OneLevel', the hierarchies are expanded only at the single level matching path search instances parameter. Optional, default is 'UntilChildren'.

### HierarchiesRequestBatchGetDelete
* HierarchiesRequestBatchGetDelete `object`: Request to get or delete multiple time series hierarchies. Exactly one of "hierarchyIds" or "names" must be set.
  * hierarchyIds `array`: List of hierarchy IDs.
    * items `string`
  * names `array`: List of hierarchy names.
    * items `string`

### HierarchiesSortParameter
* HierarchiesSortParameter `object`: Definition of sorting of hierarchy nodes.
  * by `string` (values: CumulativeInstanceCount, Name): Value to use for hierarchy node sorting. When it is set to 'CumulativeInstanceCount', the returned hierarchies are sorted based on the total instances belonging to the hierarchy node and its child hierarchy nodes. When it is set to 'Name', the returned hierarchies are sorted based on the hierarchy name. Optional, default is 'CumulativeInstanceCount'.

### HierarchyHit
* HierarchyHit `object`: The hierarchy node which contains the instances matching the query based on the input. May be empty or null.
  * cumulativeInstanceCount `integer`: Total number of instances that belong to this node and it's subtrees matching the query.
  * hierarchyNodes [SearchHierarchyNodesResponse](#searchhierarchynodesresponse)
  * name `string`: Name of the hierarchy node. May be empty, cannot be null.

### InstanceHit
* InstanceHit `object`: Time series instance that is returned by instances search call. Returned instance matched the search request and contains highlighted text to be displayed to the user if it is set to 'true'.
  * hierarchyIds `array`: List of time series hierarchy IDs that time series instance which matched the search request belongs to. Cannot be used to lookup hierarchies. May be null.
    * items `string`
  * highlights `object`: Highlighted text of time series instance to be displayed to the user. Highlighting inserts <hit> and </hit> tags in the portions of text that matched the search string. Do not use any of the highlighted properties to do further API calls.
    * description `string`: Highlighted description of time series instance. May be null.
    * hierarchyIds `array`: List of highlighted time series hierarchy IDs that time series instance belongs to. Cannot be used to lookup hierarchies. May be null.
      * items `string`
    * hierarchyNames `array`: List of highlighted time series hierarchy names that time series instance belongs to. Cannot be used to lookup hierarchies. May be null.
      * items `string`
    * instanceFieldNames `array`: List of highlighted time series instance field names. May be null.
      * items `string`
    * instanceFieldValues `array`: List of highlighted time series instance field values. May be null.
      * items `string`
    * name `string`: Highlighted name of time series instance. May be null.
    * timeSeriesId `array`: List of highlighted string values of Time Series ID for displaying. Cannot be used to lookup instance.
      * items `string`
    * typeName `string`: Highlighted time series type name that this instance belongs to.
  * name `string`: Name of the time series instance that matched the search request. May be null.
  * timeSeriesId [TimeSeriesId](#timeseriesid)
  * typeId `string`: Represents the type that time series instance which matched the search request belongs to. Never null.

### InstanceOrError
* InstanceOrError `object`: Result of a batch operation on a particular time series instance. Instance object is set when operation is successful (except put operation) and error object is set when operation is unsuccessful.
  * error [TsiErrorBody](#tsierrorbody)
  * instance [TimeSeriesInstance](#timeseriesinstance)

### InstancesBatchRequest
* InstancesBatchRequest `object`: Request to perform a single operation on a batch of instances. Exactly one of "get", "put", "update" or "delete" must be set.
  * delete [InstancesRequestBatchGetOrDelete](#instancesrequestbatchgetordelete)
  * get [InstancesRequestBatchGetOrDelete](#instancesrequestbatchgetordelete)
  * put `array`: Time series instances to be created or updated.
    * items [TimeSeriesInstance](#timeseriesinstance)
  * update `array`: Time series instances to be updated onlRequest to perform a single operation on a batch of instances. y. If instance does not exist, an error is returned.
    * items [TimeSeriesInstance](#timeseriesinstance)

### InstancesBatchResponse
* InstancesBatchResponse `object`: Response of a single operation on a batch of instances. Only one of "get", "put", "update" or "delete" will be set based on the request.
  * delete `array`: List of error objects corresponding by position to the "delete" array in the request. Null means the instance has been deleted, or did not exist. Error object is set when operation is unsuccessful (e.g. when there are events associated with this time series instance).
    * items [TsiErrorBody](#tsierrorbody)
  * get `array`: List of instance or error objects corresponding by position to the "get" array in the request. Instance object is set when operation is successful and error object is set when operation is unsuccessful.
    * items [InstanceOrError](#instanceorerror)
  * put `array`: List of error objects corresponding by position to the "put" array in the request. Error object is set when operation is unsuccessful.
    * items [InstanceOrError](#instanceorerror)
  * update `array`: List of error objects corresponding by position to the "update" array in the request. Instance object is set when operation is successful and error object is set when operation is unsuccessful.
    * items [InstanceOrError](#instanceorerror)

### InstancesRequestBatchGetOrDelete
* InstancesRequestBatchGetOrDelete `object`: Request to get or delete instances by time series IDs or time series names. Exactly one of "timeSeriesIds" or "names" must be set.
  * names `array`: List of names of the time series instances to return or delete.
    * items `string`
  * timeSeriesIds `array`: List of time series IDs of the time series instances to return or delete.
    * items [TimeSeriesId](#timeseriesid)

### InstancesSearchStringSuggestion
* InstancesSearchStringSuggestion `object`: Suggested search string to be used for further search for time series instances.
  * highlightedSearchString `string`: Highlighted suggested search string to be displayed to the user. Highlighting inserts <hit> and </hit> tags in the portions of text that matched the search string. Do not use highlighted search string to do further search calls.
  * searchString `string`: Suggested search string. Can be used for further search for time series instances.

### InstancesSortParameter
* InstancesSortParameter `object`: Definition of how time series instances are sorted before being returned by search instances call.
  * by `string` (values: Rank, DisplayName): Value to use for sorting of the time series instances before being returned by search instances call. When it is set to 'Rank', the returned instances are sorted based on the relevance. When it is set to 'DisplayName', the returned results are sorted based on the display name. Display name is the name of the instance if it exists, otherwise, display name is the time series ID. Default is 'Rank'.

### InstancesSuggestRequest
* InstancesSuggestRequest `object`: Request to get search string suggestions for time series instances search based on prefix text.
  * searchString **required** `string`: Search string for which suggestions are required. Empty is allowed, but not null.
  * take `integer`: Maximum number of suggestions expected in the result. Defaults to 10 when not set.

### InstancesSuggestResponse
* InstancesSuggestResponse `object`: Response of getting suggestions for search for time series instances.
  * suggestions `array`: List of instance suggestions for searching time series models.
    * items [InstancesSearchStringSuggestion](#instancessearchstringsuggestion)

### Interpolation
* Interpolation `object`: The interpolation operation to be performed on the raw data points. Currently, only sampling of interpolated time series is allowed. Allowed aggregate function - eg: left($value). Can be null if no interpolation needs to be applied.
  * boundary `object`: The time range to the left and right of the search span to be used for Interpolation. This is helpful in scenarios where the data points are missing close to the start or end of the input search span. Can be null.
    * span `string`
  * kind `string` (values: Linear, Step): The type of interpolation technique : "Linear" or "Step".

### ModelSettingsResponse
* ModelSettingsResponse `object`: Response containing full time series model settings which include model name, Time Series ID properties and default type ID.
  * modelSettings [TimeSeriesModelSettings](#timeseriesmodelsettings)

### NumericVariable
* NumericVariable: Numeric variable represents a single continuous numeric signal that can be reconstructed using interpolation.
  * filter [Tsx](#tsx)
  * kind **required** `string`: Allowed "kind" values are - "numeric" or "aggregate". While "numeric" allows you to specify value of the reconstructed signal and the expression to aggregate them, the "aggregate" kind lets you directly aggregate on the event properties without specifying value.
  * aggregation [Tsx](#tsx)
  * interpolation [Interpolation](#interpolation)
  * value [Tsx](#tsx)

### PagedResponse
* PagedResponse `object`: Partial result that has continuation token to fetch the next partial result.
  * continuationToken `string`: If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in "x-ms-continuation" HTTP header.

### PropertyType
* PropertyType `string` (values: Bool, DateTime, Double, String, TimeSpan, Long): The type of the property that is either stored in events or computed by a calculation.

### PropertyValues
* PropertyValues: Values of a single property corresponding to the timestamps. May contain nulls. Type of values matches the type of property.
  * name `string`: The name of the property.
  * type [PropertyType](#propertytype)
  * values `array`: Values of a single property corresponding to the timestamps. May contain nulls. Type of values matches the type of property.

### QueryRequest
* QueryRequest `object`: Request to execute a time series query over events. Exactly one of "getEvents", "getSeries" or "aggregateSeries" must be set.
  * aggregateSeries [AggregateSeries](#aggregateseries)
  * getEvents [GetEvents](#getevents)
  * getSeries [GetSeries](#getseries)

### QueryResultPage
* QueryResultPage: A single page of query results. If query has not finished yet, a page will have continuation token set. In this case, to get the next page of results, send the same request again with continuation token parameter. If query has completed, the continuation token is null. It is also possible to get an empty page with only continuation token set when no query results have been computed yet. If paging has completed (continuation token is null), then timestamps and properties may be empty if there is no data to return.
  * continuationToken `string`: If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in "x-ms-continuation" HTTP header.
  * progress `number`: Approximate progress of the query in percentage. It can be between 0 and 100. When the continuation token in the response is null, the progress is expected to be 100.
  * properties `array`: Collection of time series properties and values for each of the timestamps.  Can be null if server was unable to fill the page in this request, or can be empty if there are no more objects when continuation token is null.
    * items [PropertyValues](#propertyvalues)
  * timestamps `array`: The timestamps of the values of the time series. If an aggregation over intervals is used, timestamps represent the start of corresponding intervals. If events are retrieved, timestamps are values of timestamp $ts property of events. Can be null if server was unable to fill the page in this request, or can be empty if there are no more objects when continuation token is null.
    * items `string`

### SearchHierarchyNodesResponse
* SearchHierarchyNodesResponse `object`: The hierarchy nodes which contains the instances matching the query based on the input. May be empty or null.
  * continuationToken `string`: If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in "x-ms-continuation" HTTP header.
  * hitCount `integer`: Total number of hierarchy nodes which contains the instances matching the query based on the input.
  * hits `array`: The list of hierarchy nodes which contains the instances matching the query based on the input. May be empty.
    * items [HierarchyHit](#hierarchyhit)

### SearchInstancesHierarchiesParameters
* SearchInstancesHierarchiesParameters `object`: Parameter of how to return time series instance hierarchies by search instances call.
  * expand [HierarchiesExpandParameter](#hierarchiesexpandparameter)
  * pageSize `integer`: Maximum number of hierarchies in the same level to return in the same page. Optional, default is 10 when not set. Range is from 1 to 100. If there are results beyond the page size, the continuation token can be used to fetch the next page.
  * sort [HierarchiesSortParameter](#hierarchiessortparameter)

### SearchInstancesParameters
* SearchInstancesParameters `object`: Parameters of how to return time series instances by search instances call.
  * highlights `boolean`: Definition of highlighted search results or not. When it is set to 'true', the highlighted search results are returned. When it is set to 'false', the highlighted search results are not returned. Default is 'true'.
  * pageSize `integer`: Maximum number of instances expected in each page of the result. Defaults to 10 when not set. Ranges from 1 to 100. If there are results beyond the page size, the user can use the continuation token to fetch the next page.
  * recursive `boolean`: Definition of which instances are returned. When recursive is set to 'true', all instances that have the path that starts with path the path parameter are returned. When recursive is set to 'false', only instances that have the path that exactly matches the path parameter are returned. Using recursive search allows to implement search user experience, while using non-recursive search allows to implement navigation experience. Optional, default is 'true'.
  * sort [InstancesSortParameter](#instancessortparameter)

### SearchInstancesRequest
* SearchInstancesRequest `object`: Request to execute a search query against time series instances and return matching time series instances.
  * hierarchies [SearchInstancesHierarchiesParameters](#searchinstanceshierarchiesparameters)
  * instances [SearchInstancesParameters](#searchinstancesparameters)
  * path `array`: Filter on hierarchy path of time series instances. Path is represented as array of string path segments. First element should be hierarchy name. Example: ["Location", "California"]. Optional, case sensitive, never empty and can be null.
    * items `string`
  * searchString **required** `string`: Query search string that will be matched to the attributes of time series instances. Example: "floor 100". Case-insensitive, must be present, but can be empty string.

### SearchInstancesResponse
* SearchInstancesResponse `object`: The instances matching the query based on the input. May be empty or null.
  * continuationToken `string`: If returned, this means that current results represent a partial result. Continuation token allows to get the next page of results. To get the next page of query results, send the same request with continuation token parameter in "x-ms-continuation" HTTP header.
  * hitCount `integer`: Total number of instances matching the query based on the input.
  * hits `array`: The list of instances matching the query based on the input. May be empty.
    * items [InstanceHit](#instancehit)

### SearchInstancesResponsePage
* SearchInstancesResponsePage `object`: Single page of the search results.
  * hierarchyNodes [SearchHierarchyNodesResponse](#searchhierarchynodesresponse)
  * instances [SearchInstancesResponse](#searchinstancesresponse)

### TimeSeriesAggregateCategory
* TimeSeriesAggregateCategory `object`: Category used in categorical variables. A category is defined by 'label' and the 'values' that are assigned this label.
  * label **required** `string`: The name of the category which will be used in constructing the output variable names.
  * values **required** `array`: The list of values that a category maps to. Can be either a unique list of string or list of long.
    * items `object`

### TimeSeriesDefaultCategory
* TimeSeriesDefaultCategory `object`: Represents the default category.
  * label **required** `string`: The name of the default category which will be assigned to the values that does not match any of those that are defined in the 'categories'.

### TimeSeriesHierarchy
* TimeSeriesHierarchy `object`: Time series hierarchy organizes time series instances into a tree.
  * id `string`: Unique hierarchy identifier that is a immutable GUID. Can be null while creating hierarchy objects and then server generates the id, not null on get and delete operations.
  * name **required** `string`: User-given unique name for the type. It is mutable and not null.
  * source **required** `object`: Definition of how time series hierarchy tree levels are created.
    * instanceFieldNames `array`: List of instance field names that must be set in all time series instances that belong to this hierarchy. The order of the instance fields defines the levels in the hierarchy.
      * items `string`

### TimeSeriesHierarchyOrError
* TimeSeriesHierarchyOrError `object`: Result of a batch operation on a particular time series hierarchy. Hierarchy is set when operation is successful and error object is set when operation is unsuccessful.
  * error [TsiErrorBody](#tsierrorbody)
  * hierarchy [TimeSeriesHierarchy](#timeserieshierarchy)

### TimeSeriesId
* TimeSeriesId `array`: A single Time Series ID value that is an array of primitive values that uniquely identifies a time series instance (e.g. a single device). Note that a single Time Series ID can be composite if multiple properties are specified as Time Series ID at environment creation time. The position and type of values must match Time Series ID properties specified on the environment and returned by Get Model Setting API. Cannot be empty.

### TimeSeriesIdProperties
* TimeSeriesIdProperties `array`: Time series ID properties defined during environment creation.
  * items [TimeSeriesIdProperty](#timeseriesidproperty)

### TimeSeriesIdProperty
* TimeSeriesIdProperty `object`: A definition of a single property that can be used in time series ID properties defined during environment creation.
  * name `string`: The name of the property.
  * type `string` (values: String): The type of the property. Currently, only "String" is supported.

### TimeSeriesInstance
* TimeSeriesInstance `object`: Time series instances are the time series themselves. In most cases, the deviceId or assetId is the unique identifier of the asset in the environment. Instances have descriptive information associated with them called instance fields. At a minimum, instance fields include hierarchy information. They can also include useful, descriptive data like the manufacturer, operator, or the last service date.
  * description `string`: This optional field contains description about the instance.
  * hierarchyIds `array`: Set of time series hierarchy IDs that the instance belong to. May be null.
    * items `string`
  * instanceFields `object`: Set of key-value pairs that contain user-defined instance properties. May be null.
  * name `string`: Optional name of the instance which is unique in an environment. Names acts as a mutable alias or display name of the time series instance. Mutable, may be null.
  * timeSeriesId **required** [TimeSeriesId](#timeseriesid)
  * typeId **required** `string`: This represents the type that this instance belongs to. Never null.

### TimeSeriesModelSettings
* TimeSeriesModelSettings `object`: Time series model settings including model name, Time Series ID properties and default type ID.
  * defaultTypeId `string`: Default type ID of the model that new time series instances will automatically belong to.
  * name `string`: Time series model display name which is shown in the UX. Examples: "Temperature Sensors", "MyDevices".
  * timeSeriesIdProperties [TimeSeriesIdProperties](#timeseriesidproperties)

### TimeSeriesType
* TimeSeriesType `object`: Time series type defines variables or formulas for doing computation on events associated with time series instances. Each time series instance is associated with exactly one type. A type can have one or more variables. For example, a time series instance might be of type Temperature Sensor, which consists of the variables avg temperature, min temperature, and max temperature.
  * description `string`: Description of the type. May be null.
  * id `string`: Unique type identifier that is immutable. Can be null on create or update requests, and then server generates the ID. Not null on get and delete operations.
  * name **required** `string`: User-given unique name for the type. Mutable, not null.

### TimeSeriesTypeOrError
* TimeSeriesTypeOrError `object`: Result of a batch operation on a particular time series type. Type object is set when operation is successful and error object is set when operation is unsuccessful.
  * error [TsiErrorBody](#tsierrorbody)
  * timeSeriesType [TimeSeriesType](#timeseriestype)

### TsiError
* TsiError `object`: Information about an API error.
  * error [TsiErrorBody](#tsierrorbody)

### TsiErrorBody
* TsiErrorBody `object`: A particular API error with an error code and a message.
  * code `string`: Language-independent, human-readable string that defines a service-specific error code. This code serves as a more specific indicator for the HTTP error code specified in the response. Can be used to programmatically handle specific error cases.
  * details `array`: Contains additional error information. May be null.
    * items [TsiErrorDetails](#tsierrordetails)
  * innerError [TsiErrorBody](#tsierrorbody)
  * message `string`: Human-readable, language-independent representation of the error. It is intended as an aid to developers and is not suitable for exposure to end users.
  * target `string`: Target of the particular error (for example, the name of the property in error). May be null.

### TsiErrorDetails
* TsiErrorDetails `object`: Additional error information.
  * code `string`: Language-independent, human-readable string that defines a service-specific error code. This code serves as a more specific indicator for the HTTP error code specified in the response. Can be used to programmatically handle specific error cases.
  * message `string`: Human-readable, language-independent representation of the error. It is intended as an aid to developers and is not suitable for exposure to end users.

### Tsx
* Tsx `object`: Time series expression (TSX) written as a single string. Examples: "$event.Status.String='Good'", "avg($event.Temperature)". Refer to the documentation on how to write time series expressions.
  * tsx **required** `string`: Time series expression (TSX) written as a single string. Examples: "$event.Status.String='Good'", "avg($event.Temperature)". Refer to the documentation on how to write time series expressions.

### TypesBatchRequest
* TypesBatchRequest `object`: Request to perform a single operation on a batch of time series types. Exactly one of "get", "put" or "delete" must be set.
  * delete [TypesRequestBatchGetOrDelete](#typesrequestbatchgetordelete)
  * get [TypesRequestBatchGetOrDelete](#typesrequestbatchgetordelete)
  * put `array`: Definition of what time series types to update or create.
    * items [TimeSeriesType](#timeseriestype)

### TypesBatchResponse
* TypesBatchResponse `object`: Response of a single operation on a batch of time series types. Exactly one of "get", "put" or "delete" will be set.
  * delete `array`: List of error objects corresponding by position to the "delete" array in the request - null when the operation is successful.
    * items [TsiErrorBody](#tsierrorbody)
  * get `array`: List of types or error objects corresponding by position to the "get" array in the request. Type object is set when operation is successful and error object is set when operation is unsuccessful.
    * items [TimeSeriesTypeOrError](#timeseriestypeorerror)
  * put `array`: List of types or error objects corresponding by position to the "put" array in the request. Type object is set when operation is successful and error object is set when operation is unsuccessful.
    * items [TimeSeriesTypeOrError](#timeseriestypeorerror)

### TypesRequestBatchGetOrDelete
* TypesRequestBatchGetOrDelete `object`: Request to get or delete time series types by IDs or type names. Exactly one of "typeIds" or "names" must be set.
  * names `array`: List of names of time series types to return or delete.
    * items `string`
  * typeIds `array`: List of IDs of time series types to return or delete.
    * items `string`

### UpdateModelSettingsRequest
* UpdateModelSettingsRequest `object`: Request to update model settings. One of "name" or "defaultTypeId" must be set.
  * defaultTypeId `string`: Default type id of the model that new instances will automatically belong to.
  * name `string`: Model display name which is shown in the UX and mutable by the user. Initial value is "DefaultModel".

### Variable
* Variable `object`: Variables are named calculations over values from the events. Time Series Insights variable definitions contain formula and computation rules. Variables are stored in the type definition in Time Series Model and can be provided inline via Query APIs to override the stored definition.
  * filter [Tsx](#tsx)
  * kind **required** `string`: Allowed "kind" values are - "numeric" or "aggregate". While "numeric" allows you to specify value of the reconstructed signal and the expression to aggregate them, the "aggregate" kind lets you directly aggregate on the event properties without specifying value.


