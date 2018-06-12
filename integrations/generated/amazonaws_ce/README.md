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

<p>The Cost Explorer API allows you to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data, such as the number of daily write operations for Amazon DynamoDB database tables in your production environment. </p> <p>Service Endpoint</p> <p>The Cost Explorer API provides the following endpoint:</p> <ul> <li> <p>https://ce.us-east-1.amazonaws.com</p> </li> </ul> <p>For information about costs associated with the Cost Explorer API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">AWS Cost Management Pricing</a>.</p>

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

### GetReservationCoverage



```js
amazonaws_ce.GetReservationCoverage({
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
* output [GetReservationCoverageResponse](#getreservationcoverageresponse)

### GetReservationPurchaseRecommendation



```js
amazonaws_ce.GetReservationPurchaseRecommendation({
  "Service": ""
}, context)
```

#### Input
* input `object`
  * AccountId [GenericString](#genericstring)
  * AccountScope [AccountScope](#accountscope)
  * LookbackPeriodInDays [LookbackPeriodInDays](#lookbackperiodindays)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * PageSize [NonNegativeInteger](#nonnegativeinteger)
  * PaymentOption [PaymentOption](#paymentoption)
  * Service **required** [GenericString](#genericstring)
  * ServiceSpecification [ServiceSpecification](#servicespecification)
  * TermInYears [TermInYears](#terminyears)

#### Output
* output [GetReservationPurchaseRecommendationResponse](#getreservationpurchaserecommendationresponse)

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

### AccountScope
* AccountScope `string` (values: PAYER)

### AmortizedRecurringFee
* AmortizedRecurringFee `string`

### AmortizedUpfrontFee
* AmortizedUpfrontFee `string`

### AttributeType
* AttributeType `string`

### AttributeValue
* AttributeValue `string`

### Attributes
* Attributes `array`
  * items `object`
    * key [AttributeType](#attributetype)
    * value [AttributeValue](#attributevalue)

### BillExpirationException
* BillExpirationException `object`: The requested report expired. Update the date interval and try again.
  * Message [ErrorMessage](#errormessage)

### Context
* Context `string` (values: COST_AND_USAGE, RESERVATIONS)

### Coverage
* Coverage `object`: The amount of instance usage that a reservation covered.
  * CoverageHours [CoverageHours](#coveragehours)

### CoverageByTime
* CoverageByTime `object`: Reservation coverage for a specified period, in hours.
  * Groups [ReservationCoverageGroups](#reservationcoveragegroups)
  * TimePeriod [DateInterval](#dateinterval)
  * Total [Coverage](#coverage)

### CoverageHours
* CoverageHours `object`: How long a running instance either used a reservation or was On-Demand.
  * CoverageHoursPercentage [CoverageHoursPercentage](#coveragehourspercentage)
  * OnDemandHours [OnDemandHours](#ondemandhours)
  * ReservedHours [ReservedHours](#reservedhours)
  * TotalRunningHours [TotalRunningHours](#totalrunninghours)

### CoverageHoursPercentage
* CoverageHoursPercentage `string`

### CoveragesByTime
* CoveragesByTime `array`
  * items [CoverageByTime](#coveragebytime)

### DataUnavailableException
* DataUnavailableException `object`: The requested data is unavailable.
  * Message [ErrorMessage](#errormessage)

### DateInterval
* DateInterval `object`: The time period that you want the usage and costs for. 
  * End **required** [YearMonthDay](#yearmonthday)
  * Start **required** [YearMonthDay](#yearmonthday)

### Dimension
* Dimension `string` (values: AZ, INSTANCE_TYPE, LINKED_ACCOUNT, OPERATION, PURCHASE_TYPE, REGION, SERVICE, USAGE_TYPE, USAGE_TYPE_GROUP, RECORD_TYPE, OPERATING_SYSTEM, TENANCY, SCOPE, PLATFORM, SUBSCRIPTION_ID, LEGAL_ENTITY_NAME, DEPLOYMENT_OPTION, DATABASE_ENGINE, CACHE_ENGINE, INSTANCE_TYPE_FAMILY)

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

### EC2InstanceDetails
* EC2InstanceDetails `object`: Details about the EC2 instances that AWS recommends that you purchase.
  * AvailabilityZone [GenericString](#genericstring)
  * CurrentGeneration [GenericBoolean](#genericboolean)
  * Family [GenericString](#genericstring)
  * InstanceType [GenericString](#genericstring)
  * Platform [GenericString](#genericstring)
  * Region [GenericString](#genericstring)
  * SizeFlexEligible [GenericBoolean](#genericboolean)
  * Tenancy [GenericString](#genericstring)

### EC2Specification
* EC2Specification `object`: The EC2 hardware specifications that you want AWS to provide recommendations for.
  * OfferingClass [OfferingClass](#offeringclass)

### Entity
* Entity `string`

### ErrorMessage
* ErrorMessage `string`

### Estimated
* Estimated `boolean`

### Expression
* Expression `object`: <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>INSTANCE_TYPE==m4.xlarge OR INSTANCE_TYPE==c4.large</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "Dimensions": { "Key": "INSTANCE_TYPE", "Values": [ "m4.xlarge", “c4.large” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((INSTANCE_TYPE == m4.large OR INSTANCE_TYPE == m3.large) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "INSTANCE_TYPE", "Values": [ "m4.x.large", "c4.large" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul>
  * And [Expressions](#expressions)
  * Dimensions [DimensionValues](#dimensionvalues)
  * Not [Expression](#expression)
  * Or [Expressions](#expressions)
  * Tags [TagValues](#tagvalues)

### Expressions
* Expressions `array`
  * items [Expression](#expression)

### GenericBoolean
* GenericBoolean `boolean`

### GenericString
* GenericString `string`

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

### GetReservationCoverageRequest
* GetReservationCoverageRequest `object`: You can use the following request parameters to query for how much of your instance usage is covered by a reservation.
  * Filter [Expression](#expression)
  * Granularity [Granularity](#granularity)
  * GroupBy [GroupDefinitions](#groupdefinitions)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * TimePeriod **required** [DateInterval](#dateinterval)

### GetReservationCoverageResponse
* GetReservationCoverageResponse `object`
  * CoveragesByTime **required** [CoveragesByTime](#coveragesbytime)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * Total [Coverage](#coverage)

### GetReservationPurchaseRecommendationRequest
* GetReservationPurchaseRecommendationRequest `object`
  * AccountId [GenericString](#genericstring)
  * AccountScope [AccountScope](#accountscope)
  * LookbackPeriodInDays [LookbackPeriodInDays](#lookbackperiodindays)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * PageSize [NonNegativeInteger](#nonnegativeinteger)
  * PaymentOption [PaymentOption](#paymentoption)
  * Service **required** [GenericString](#genericstring)
  * ServiceSpecification [ServiceSpecification](#servicespecification)
  * TermInYears [TermInYears](#terminyears)

### GetReservationPurchaseRecommendationResponse
* GetReservationPurchaseRecommendationResponse `object`
  * Metadata [ReservationPurchaseRecommendationMetadata](#reservationpurchaserecommendationmetadata)
  * NextPageToken [NextPageToken](#nextpagetoken)
  * Recommendations [ReservationPurchaseRecommendations](#reservationpurchaserecommendations)

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

### InstanceDetails
* InstanceDetails `object`: Details about the instances that AWS recommends that you purchase.
  * EC2InstanceDetails [EC2InstanceDetails](#ec2instancedetails)
  * RDSInstanceDetails [RDSInstanceDetails](#rdsinstancedetails)

### InvalidNextTokenException
* InvalidNextTokenException `object`: The pagination token is invalid. Try again without a pagination token.
  * Message [ErrorMessage](#errormessage)

### Key
* Key `string`

### Keys
* Keys `array`
  * items [Key](#key)

### LimitExceededException
* LimitExceededException `object`: You made too many calls in a short period of time. Try again later.
  * Message [ErrorMessage](#errormessage)

### LookbackPeriodInDays
* LookbackPeriodInDays `string` (values: SEVEN_DAYS, THIRTY_DAYS, SIXTY_DAYS)

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

### NetRISavings
* NetRISavings `string`

### NextPageToken
* NextPageToken `string`

### NonNegativeInteger
* NonNegativeInteger `integer`

### OfferingClass
* OfferingClass `string` (values: STANDARD, CONVERTIBLE)

### OnDemandCostOfRIHoursUsed
* OnDemandCostOfRIHoursUsed `string`

### OnDemandHours
* OnDemandHours `string`

### PageSize
* PageSize `integer`

### PaymentOption
* PaymentOption `string` (values: NO_UPFRONT, PARTIAL_UPFRONT, ALL_UPFRONT)

### PurchasedHours
* PurchasedHours `string`

### RDSInstanceDetails
* RDSInstanceDetails `object`: Details about the RDS instances that AWS recommends that you purchase.
  * CurrentGeneration [GenericBoolean](#genericboolean)
  * DatabaseEngine [GenericString](#genericstring)
  * DeploymentOption [GenericString](#genericstring)
  * Family [GenericString](#genericstring)
  * InstanceType [GenericString](#genericstring)
  * LicenseModel [GenericString](#genericstring)
  * Region [GenericString](#genericstring)
  * SizeFlexEligible [GenericBoolean](#genericboolean)

### RequestChangedException
* RequestChangedException `object`: Your request parameters changed between pages. Try again with the old parameters or without a pagination token.
  * Message [ErrorMessage](#errormessage)

### ReservationAggregates
* ReservationAggregates `object`: The aggregated numbers for your RI usage.
  * AmortizedRecurringFee [AmortizedRecurringFee](#amortizedrecurringfee)
  * AmortizedUpfrontFee [AmortizedUpfrontFee](#amortizedupfrontfee)
  * NetRISavings [NetRISavings](#netrisavings)
  * OnDemandCostOfRIHoursUsed [OnDemandCostOfRIHoursUsed](#ondemandcostofrihoursused)
  * PurchasedHours [PurchasedHours](#purchasedhours)
  * TotalActualHours [TotalActualHours](#totalactualhours)
  * TotalAmortizedFee [TotalAmortizedFee](#totalamortizedfee)
  * TotalPotentialRISavings [TotalPotentialRISavings](#totalpotentialrisavings)
  * UnusedHours [UnusedHours](#unusedhours)
  * UtilizationPercentage [UtilizationPercentage](#utilizationpercentage)

### ReservationCoverageGroup
* ReservationCoverageGroup `object`: A group of reservations that share a set of attributes.
  * Attributes [Attributes](#attributes)
  * Coverage [Coverage](#coverage)

### ReservationCoverageGroups
* ReservationCoverageGroups `array`
  * items [ReservationCoverageGroup](#reservationcoveragegroup)

### ReservationGroupKey
* ReservationGroupKey `string`

### ReservationGroupValue
* ReservationGroupValue `string`

### ReservationPurchaseRecommendation
* ReservationPurchaseRecommendation `object`: A specific reservation that AWS recommends for purchase.
  * AccountScope [AccountScope](#accountscope)
  * LookbackPeriodInDays [LookbackPeriodInDays](#lookbackperiodindays)
  * PaymentOption [PaymentOption](#paymentoption)
  * RecommendationDetails [ReservationPurchaseRecommendationDetails](#reservationpurchaserecommendationdetails)
  * RecommendationSummary [ReservationPurchaseRecommendationSummary](#reservationpurchaserecommendationsummary)
  * ServiceSpecification [ServiceSpecification](#servicespecification)
  * TermInYears [TermInYears](#terminyears)

### ReservationPurchaseRecommendationDetail
* ReservationPurchaseRecommendationDetail `object`: Details about your recommended reservation purchase.
  * AverageNormalizedUnitsUsedPerHour [GenericString](#genericstring)
  * AverageNumberOfInstancesUsedPerHour [GenericString](#genericstring)
  * AverageUtilization [GenericString](#genericstring)
  * CurrencyCode [GenericString](#genericstring)
  * EstimatedBreakEvenInMonths [GenericString](#genericstring)
  * EstimatedMonthlyOnDemandCost [GenericString](#genericstring)
  * EstimatedMonthlySavingsAmount [GenericString](#genericstring)
  * EstimatedMonthlySavingsPercentage [GenericString](#genericstring)
  * EstimatedReservationCostForLookbackPeriod [GenericString](#genericstring)
  * InstanceDetails [InstanceDetails](#instancedetails)
  * MaximumNormalizedUnitsUsedPerHour [GenericString](#genericstring)
  * MaximumNumberOfInstancesUsedPerHour [GenericString](#genericstring)
  * MinimumNormalizedUnitsUsedPerHour [GenericString](#genericstring)
  * MinimumNumberOfInstancesUsedPerHour [GenericString](#genericstring)
  * RecommendedNormalizedUnitsToPurchase [GenericString](#genericstring)
  * RecommendedNumberOfInstancesToPurchase [GenericString](#genericstring)
  * RecurringStandardMonthlyCost [GenericString](#genericstring)
  * UpfrontCost [GenericString](#genericstring)

### ReservationPurchaseRecommendationDetails
* ReservationPurchaseRecommendationDetails `array`
  * items [ReservationPurchaseRecommendationDetail](#reservationpurchaserecommendationdetail)

### ReservationPurchaseRecommendationMetadata
* ReservationPurchaseRecommendationMetadata `object`: Information about this specific recommendation, such as the time stamp for when AWS made a specific recommendation.
  * GenerationTimestamp [GenericString](#genericstring)
  * RecommendationId [GenericString](#genericstring)

### ReservationPurchaseRecommendationSummary
* ReservationPurchaseRecommendationSummary `object`: A summary about this recommendation, such as the currency code, the amount that AWS estimates you could save, and the total amount of reservation to purchase.
  * CurrencyCode [GenericString](#genericstring)
  * TotalEstimatedMonthlySavingsAmount [GenericString](#genericstring)
  * TotalEstimatedMonthlySavingsPercentage [GenericString](#genericstring)

### ReservationPurchaseRecommendations
* ReservationPurchaseRecommendations `array`
  * items [ReservationPurchaseRecommendation](#reservationpurchaserecommendation)

### ReservationUtilizationGroup
* ReservationUtilizationGroup `object`: A group of RIs that share a set of attributes.
  * Attributes [Attributes](#attributes)
  * Key [ReservationGroupKey](#reservationgroupkey)
  * Utilization [ReservationAggregates](#reservationaggregates)
  * Value [ReservationGroupValue](#reservationgroupvalue)

### ReservationUtilizationGroups
* ReservationUtilizationGroups `array`
  * items [ReservationUtilizationGroup](#reservationutilizationgroup)

### ReservedHours
* ReservedHours `string`

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

### ServiceSpecification
* ServiceSpecification `object`: Hardware specifications for the service that you want recommendations for.
  * EC2Specification [EC2Specification](#ec2specification)

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [Entity](#entity)

### TagValues
* TagValues `object`: The values that are available for a tag.
  * Key [TagKey](#tagkey)
  * Values [Values](#values)

### TermInYears
* TermInYears `string` (values: ONE_YEAR, THREE_YEARS)

### TotalActualHours
* TotalActualHours `string`

### TotalAmortizedFee
* TotalAmortizedFee `string`

### TotalPotentialRISavings
* TotalPotentialRISavings `string`

### TotalRunningHours
* TotalRunningHours `string`

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


