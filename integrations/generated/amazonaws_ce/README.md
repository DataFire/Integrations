# @datafire/amazonaws_ce

Client library for AWS Cost Explorer Service

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_ce
```
```js
let amazonaws_ce = require('@datafire/amazonaws_ce').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

amazonaws_ce.GetCostAndUsage({}).then(data => {
  console.log(data);
});
```

## Description

<p>The Cost Explorer API allows you to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data, such as the number of daily write operations for DynamoDB database tables in your production environment. </p> <p>Service Endpoint</p> <p>The Cost Explorer API provides the following endpoint:</p> <ul> <li> <p>https://ce.us-east-1.amazonaws.com</p> </li> </ul>

## Actions

### GetCostAndUsage



```js
amazonaws_ce.GetCostAndUsage({}, context)
```

#### Input
* input `object`
  * Filter [Expression](#expression)
  * Granularity [Granularity](#granularity)
  * GroupBy [GroupDefinitions](#groupdefinitions)
  * Metrics [MetricNames](#metricnames)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * TimePeriod [DateInterval](#dateinterval)

#### Output
* output [GetCostAndUsageResponse](#getcostandusageresponse)

### GetDimensionValues



```js
amazonaws_ce.GetDimensionValues({
  "TimePeriod": {
    "Start": "",
    "End": ""
  },
  "Dimension": ""
}, context)
```

#### Input
* input `object`
  * Context [Context](#context)
  * Dimension **required** [Dimension](#dimension)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * SearchString [SearchString](#searchstring)
  * TimePeriod **required** [DateInterval](#dateinterval)

#### Output
* output [GetDimensionValuesResponse](#getdimensionvaluesresponse)

### GetReservationUtilization



```js
amazonaws_ce.GetReservationUtilization({
  "TimePeriod": {
    "Start": "",
    "End": ""
  }
}, context)
```

#### Input
* input `object`
  * Filter [Expression](#expression)
  * Granularity [Granularity](#granularity)
  * GroupBy [GroupDefinitions](#groupdefinitions)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * TimePeriod **required** [DateInterval](#dateinterval)

#### Output
* output [GetReservationUtilizationResponse](#getreservationutilizationresponse)

### GetTags



```js
amazonaws_ce.GetTags({
  "TimePeriod": {
    "Start": "",
    "End": ""
  }
}, context)
```

#### Input
* input `object`
  * NextPageToken [NextPageToken](#nextpagetoken)
  * SearchString [SearchString](#searchstring)
  * TagKey [TagKey](#tagkey)
  * TimePeriod **required** [DateInterval](#dateinterval)

#### Output
* output [GetTagsResponse](#gettagsresponse)



## Definitions

### AttributeType
* AttributeType `string`

### AttributeValue
* AttributeValue `string`

### Attributes
* Attributes `array`
  * items `object`
    * key [AttributeType](#attributetype)
    * value [AttributeValue](#attributevalue)

### Context
* Context `string` (values: COST_AND_USAGE, RESERVATIONS)

### DateInterval
* DateInterval `object`: The time period that you want the usage and costs for. 
  * End **required** [YearMonthDay](#yearmonthday)
  * Start **required** [YearMonthDay](#yearmonthday)

### Dimension
* Dimension `string` (values: AZ, INSTANCE_TYPE, LINKED_ACCOUNT, OPERATION, PURCHASE_TYPE, REGION, SERVICE, USAGE_TYPE, USAGE_TYPE_GROUP, RECORD_TYPE, OPERATING_SYSTEM, TENANCY, SCOPE, PLATFORM, SUBSCRIPTION_ID)

### DimensionValues
* DimensionValues `object`: The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.
  * Key [Dimension](#dimension)
  * Values [Values](#values)

### DimensionValuesWithAttributes
* DimensionValuesWithAttributes `object`: The metadata of a specific type that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.
  * Attributes [Attributes](#attributes)
  * Value [Value](#value)

### DimensionValuesWithAttributesList
* DimensionValuesWithAttributesList `array`
  * items [DimensionValuesWithAttributes](#dimensionvalueswithattributes)

### Entity
* Entity `string`

### ErrorMessage
* ErrorMessage `string`

### Estimated
* Estimated `boolean`

### Expression
* Expression `object`: <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>InstanceType==m4.xlarge OR InstanceType==c4.large</code>. The <code>Expression</code> for that looks like this.</p> <p> <code>{ "Dimensions": { "Key": "InstanceType", "Values": [ "m4.xlarge", “c4.large” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((InstanceType == m4.large OR InstanceType == m3.large) OR (Tag.Type == Type1)) AND (UsageType != DataTransfer)</code>. The <code>Expression</code> for that looks like this.</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "InstanceType", "Values": [ "m4.x.large", "c4.large" ] }}, {"Tag": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"dimensions": { "Key": "UsageType", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an Expression object that will create an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "UsageType", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul>
  * And [Expressions](#expressions)
  * Dimensions [DimensionValues](#dimensionvalues)
  * Not [Expression](#expression)
  * Or [Expressions](#expressions)
  * Tags [TagValues](#tagvalues)

### Expressions
* Expressions `array`
  * items [Expression](#expression)

### GetCostAndUsageRequest
* GetCostAndUsageRequest `object`
  * Filter [Expression](#expression)
  * Granularity [Granularity](#granularity)
  * GroupBy [GroupDefinitions](#groupdefinitions)
  * Metrics [MetricNames](#metricnames)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * TimePeriod [DateInterval](#dateinterval)

### GetCostAndUsageResponse
* GetCostAndUsageResponse `object`
  * GroupDefinitions [GroupDefinitions](#groupdefinitions)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * ResultsByTime [ResultsByTime](#resultsbytime)

### GetDimensionValuesRequest
* GetDimensionValuesRequest `object`
  * Context [Context](#context)
  * Dimension **required** [Dimension](#dimension)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * SearchString [SearchString](#searchstring)
  * TimePeriod **required** [DateInterval](#dateinterval)

### GetDimensionValuesResponse
* GetDimensionValuesResponse `object`
  * DimensionValues **required** [DimensionValuesWithAttributesList](#dimensionvalueswithattributeslist)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * ReturnSize **required** [PageSize](#pagesize)
  * TotalSize **required** [PageSize](#pagesize)

### GetReservationUtilizationRequest
* GetReservationUtilizationRequest `object`
  * Filter [Expression](#expression)
  * Granularity [Granularity](#granularity)
  * GroupBy [GroupDefinitions](#groupdefinitions)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * TimePeriod **required** [DateInterval](#dateinterval)

### GetReservationUtilizationResponse
* GetReservationUtilizationResponse `object`
  * NextPageToken [NextPageToken](#nextpagetoken)
  * Total [ReservationAggregates](#reservationaggregates)
  * UtilizationsByTime **required** [UtilizationsByTime](#utilizationsbytime)

### GetTagsRequest
* GetTagsRequest `object`
  * NextPageToken [NextPageToken](#nextpagetoken)
  * SearchString [SearchString](#searchstring)
  * TagKey [TagKey](#tagkey)
  * TimePeriod **required** [DateInterval](#dateinterval)

### GetTagsResponse
* GetTagsResponse `object`
  * NextPageToken [NextPageToken](#nextpagetoken)
  * ReturnSize **required** [PageSize](#pagesize)
  * Tags **required** [TagList](#taglist)
  * TotalSize **required** [PageSize](#pagesize)

### Granularity
* Granularity `string` (values: DAILY, MONTHLY)

### Group
* Group `object`: One level of grouped data within the results.
  * Keys [Keys](#keys)
  * Metrics [Metrics](#metrics)

### GroupDefinition
* GroupDefinition `object`: Represents a group when you specify a group by criteria, or in the response to a query with a specific grouping.
  * Key [GroupDefinitionKey](#groupdefinitionkey)
  * Type [GroupDefinitionType](#groupdefinitiontype)

### GroupDefinitionKey
* GroupDefinitionKey `string`

### GroupDefinitionType
* GroupDefinitionType `string` (values: DIMENSION, TAG)

### GroupDefinitions
* GroupDefinitions `array`
  * items [GroupDefinition](#groupdefinition)

### Groups
* Groups `array`
  * items [Group](#group)

### Key
* Key `string`

### Keys
* Keys `array`
  * items [Key](#key)

### LimitExceededException
* LimitExceededException `object`: You made too many calls in a short period of time. Try again later.
  * Message [ErrorMessage](#errormessage)

### MetricAmount
* MetricAmount `string`

### MetricName
* MetricName `string`

### MetricNames
* MetricNames `array`
  * items [MetricName](#metricname)

### MetricUnit
* MetricUnit `string`

### MetricValue
* MetricValue `object`: The aggregated value for a metric.
  * Amount [MetricAmount](#metricamount)
  * Unit [MetricUnit](#metricunit)

### Metrics
* Metrics `array`
  * items `object`
    * key [MetricName](#metricname)
    * value [MetricValue](#metricvalue)

### NextPageToken
* NextPageToken `string`

### PageSize
* PageSize `integer`

### PurchasedHours
* PurchasedHours `string`

### ReservationAggregates
* ReservationAggregates `object`: The aggregated numbers for your RI usage.
  * PurchasedHours [PurchasedHours](#purchasedhours)
  * TotalActualHours [TotalActualHours](#totalactualhours)
  * UnusedHours [UnusedHours](#unusedhours)
  * UtilizationPercentage [UtilizationPercentage](#utilizationpercentage)

### ReservationGroupKey
* ReservationGroupKey `string`

### ReservationGroupValue
* ReservationGroupValue `string`

### ReservationUtilizationGroup
* ReservationUtilizationGroup `object`: A group of RIs that share a set of attributes.
  * Attributes [Attributes](#attributes)
  * Key [ReservationGroupKey](#reservationgroupkey)
  * Utilization [ReservationAggregates](#reservationaggregates)
  * Value [ReservationGroupValue](#reservationgroupvalue)

### ReservationUtilizationGroups
* ReservationUtilizationGroups `array`
  * items [ReservationUtilizationGroup](#reservationutilizationgroup)

### ResultByTime
* ResultByTime `object`: The result that is associated with a time period.
  * Estimated [Estimated](#estimated)
  * Groups [Groups](#groups)
  * TimePeriod [DateInterval](#dateinterval)
  * Total [Metrics](#metrics)

### ResultsByTime
* ResultsByTime `array`
  * items [ResultByTime](#resultbytime)

### SearchString
* SearchString `string`

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [Entity](#entity)

### TagValues
* TagValues `object`: The values that are available for a tag.
  * Key [TagKey](#tagkey)
  * Values [Values](#values)

### TotalActualHours
* TotalActualHours `string`

### UnusedHours
* UnusedHours `string`

### UtilizationByTime
* UtilizationByTime `object`: The amount of utilization, in hours.
  * Groups [ReservationUtilizationGroups](#reservationutilizationgroups)
  * TimePeriod [DateInterval](#dateinterval)
  * Total [ReservationAggregates](#reservationaggregates)

### UtilizationPercentage
* UtilizationPercentage `string`

### UtilizationsByTime
* UtilizationsByTime `array`
  * items [UtilizationByTime](#utilizationbytime)

### Value
* Value `string`

### Values
* Values `array`
  * items [Value](#value)

### YearMonthDay
* YearMonthDay `string`


