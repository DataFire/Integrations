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

.then(data => {
  console.log(data);
});
```

## Description

<p>The Cost Explorer API enables you to programmatically query your cost and usage data. You can query for aggregated data such as total monthly costs or total daily usage. You can also query for granular data, such as the number of daily write operations for Amazon DynamoDB database tables in your production environment. </p> <p>Service Endpoint</p> <p>The Cost Explorer API provides the following endpoint:</p> <ul> <li> <p> <code>https://ce.us-east-1.amazonaws.com</code> </p> </li> </ul> <p>For information about costs associated with the Cost Explorer API, see <a href="http://aws.amazon.com/aws-cost-management/pricing/">AWS Cost Management Pricing</a>.</p>

## Actions

### CreateAnomalyMonitor



```js
amazonaws_ce.CreateAnomalyMonitor({
  "AnomalyMonitor": null
}, context)
```

#### Input
* input `object`
  * AnomalyMonitor **required**
    * CreationDate
    * DimensionalValueCount
    * LastEvaluatedDate
    * LastUpdatedDate
    * MonitorArn
    * MonitorDimension
    * MonitorName **required**
    * MonitorSpecification [Expression](#expression)
    * MonitorType **required**

#### Output
* output [CreateAnomalyMonitorResponse](#createanomalymonitorresponse)

### CreateAnomalySubscription



```js
amazonaws_ce.CreateAnomalySubscription({
  "AnomalySubscription": null
}, context)
```

#### Input
* input `object`
  * AnomalySubscription **required**
    * AccountId
    * Frequency **required**
    * MonitorArnList **required**
      * items [Arn](#arn)
    * Subscribers **required**
      * items [Subscriber](#subscriber)
    * SubscriptionArn
    * SubscriptionName **required**
    * Threshold **required**

#### Output
* output [CreateAnomalySubscriptionResponse](#createanomalysubscriptionresponse)

### CreateCostCategoryDefinition



```js
amazonaws_ce.CreateCostCategoryDefinition({
  "Name": "",
  "RuleVersion": "",
  "Rules": null
}, context)
```

#### Input
* input `object`
  * Name **required** [CostCategoryName](#costcategoryname)
  * RuleVersion **required** [CostCategoryRuleVersion](#costcategoryruleversion)
  * Rules **required**
    * items [CostCategoryRule](#costcategoryrule)

#### Output
* output [CreateCostCategoryDefinitionResponse](#createcostcategorydefinitionresponse)

### DeleteAnomalyMonitor



```js
amazonaws_ce.DeleteAnomalyMonitor({
  "MonitorArn": null
}, context)
```

#### Input
* input `object`
  * MonitorArn **required**

#### Output
* output [DeleteAnomalyMonitorResponse](#deleteanomalymonitorresponse)

### DeleteAnomalySubscription



```js
amazonaws_ce.DeleteAnomalySubscription({
  "SubscriptionArn": null
}, context)
```

#### Input
* input `object`
  * SubscriptionArn **required**

#### Output
* output [DeleteAnomalySubscriptionResponse](#deleteanomalysubscriptionresponse)

### DeleteCostCategoryDefinition



```js
amazonaws_ce.DeleteCostCategoryDefinition({
  "CostCategoryArn": null
}, context)
```

#### Input
* input `object`
  * CostCategoryArn **required**

#### Output
* output [DeleteCostCategoryDefinitionResponse](#deletecostcategorydefinitionresponse)

### DescribeCostCategoryDefinition



```js
amazonaws_ce.DescribeCostCategoryDefinition({
  "CostCategoryArn": null
}, context)
```

#### Input
* input `object`
  * CostCategoryArn **required**
  * EffectiveOn

#### Output
* output [DescribeCostCategoryDefinitionResponse](#describecostcategorydefinitionresponse)

### GetAnomalies



```js
amazonaws_ce.GetAnomalies({
  "DateInterval": null
}, context)
```

#### Input
* input `object`
  * DateInterval **required**
    * EndDate
    * StartDate **required**
  * Feedback
  * MaxResults
  * MonitorArn
  * NextPageToken
  * TotalImpact
    * EndValue
    * NumericOperator **required**
    * StartValue **required**

#### Output
* output [GetAnomaliesResponse](#getanomaliesresponse)

### GetAnomalyMonitors



```js
amazonaws_ce.GetAnomalyMonitors({}, context)
```

#### Input
* input `object`
  * MaxResults
  * MonitorArnList
    * items [Value](#value)
  * NextPageToken

#### Output
* output [GetAnomalyMonitorsResponse](#getanomalymonitorsresponse)

### GetAnomalySubscriptions



```js
amazonaws_ce.GetAnomalySubscriptions({}, context)
```

#### Input
* input `object`
  * MaxResults
  * MonitorArn
  * NextPageToken
  * SubscriptionArnList
    * items [Value](#value)

#### Output
* output [GetAnomalySubscriptionsResponse](#getanomalysubscriptionsresponse)

### GetCostAndUsage



```js
amazonaws_ce.GetCostAndUsage({
  "TimePeriod": null,
  "Metrics": null
}, context)
```

#### Input
* input `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity
  * GroupBy
    * items [GroupDefinition](#groupdefinition)
  * Metrics **required**
    * items [MetricName](#metricname)
  * NextPageToken
  * TimePeriod **required**
    * End **required**
    * Start **required**

#### Output
* output [GetCostAndUsageResponse](#getcostandusageresponse)

### GetCostAndUsageWithResources



```js
amazonaws_ce.GetCostAndUsageWithResources({
  "TimePeriod": null,
  "Filter": null
}, context)
```

#### Input
* input `object`
  * Filter **required**
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity
  * GroupBy
    * items [GroupDefinition](#groupdefinition)
  * Metrics
    * items [MetricName](#metricname)
  * NextPageToken
  * TimePeriod **required**
    * End **required**
    * Start **required**

#### Output
* output [GetCostAndUsageWithResourcesResponse](#getcostandusagewithresourcesresponse)

### GetCostForecast



```js
amazonaws_ce.GetCostForecast({
  "TimePeriod": null,
  "Metric": null,
  "Granularity": null
}, context)
```

#### Input
* input `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity **required**
  * Metric **required**
  * PredictionIntervalLevel
  * TimePeriod **required**
    * End **required**
    * Start **required**

#### Output
* output [GetCostForecastResponse](#getcostforecastresponse)

### GetDimensionValues



```js
amazonaws_ce.GetDimensionValues({
  "TimePeriod": null,
  "Dimension": null
}, context)
```

#### Input
* input `object`
  * Context
  * Dimension **required**
  * NextPageToken
  * SearchString
  * TimePeriod **required**
    * End **required**
    * Start **required**

#### Output
* output [GetDimensionValuesResponse](#getdimensionvaluesresponse)

### GetReservationCoverage



```js
amazonaws_ce.GetReservationCoverage({
  "TimePeriod": null
}, context)
```

#### Input
* input `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity
  * GroupBy
    * items [GroupDefinition](#groupdefinition)
  * Metrics
    * items [MetricName](#metricname)
  * NextPageToken
  * TimePeriod **required**
    * End **required**
    * Start **required**

#### Output
* output [GetReservationCoverageResponse](#getreservationcoverageresponse)

### GetReservationPurchaseRecommendation



```js
amazonaws_ce.GetReservationPurchaseRecommendation({
  "Service": null
}, context)
```

#### Input
* input `object`
  * AccountId
  * AccountScope
  * LookbackPeriodInDays
  * NextPageToken
  * PageSize
  * PaymentOption
  * Service **required**
  * ServiceSpecification
    * EC2Specification
      * OfferingClass
  * TermInYears

#### Output
* output [GetReservationPurchaseRecommendationResponse](#getreservationpurchaserecommendationresponse)

### GetReservationUtilization



```js
amazonaws_ce.GetReservationUtilization({
  "TimePeriod": null
}, context)
```

#### Input
* input `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity
  * GroupBy
    * items [GroupDefinition](#groupdefinition)
  * NextPageToken
  * TimePeriod **required**
    * End **required**
    * Start **required**

#### Output
* output [GetReservationUtilizationResponse](#getreservationutilizationresponse)

### GetRightsizingRecommendation



```js
amazonaws_ce.GetRightsizingRecommendation({
  "Service": null
}, context)
```

#### Input
* input `object`
  * Configuration
    * BenefitsConsidered **required**
    * RecommendationTarget **required**
  * Filter [Expression](#expression)
  * NextPageToken
  * PageSize
  * Service **required**

#### Output
* output [GetRightsizingRecommendationResponse](#getrightsizingrecommendationresponse)

### GetSavingsPlansCoverage



```js
amazonaws_ce.GetSavingsPlansCoverage({
  "TimePeriod": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity
  * GroupBy
    * items [GroupDefinition](#groupdefinition)
  * MaxResults
  * Metrics
    * items [MetricName](#metricname)
  * NextToken
  * TimePeriod **required**
    * End **required**
    * Start **required**

#### Output
* output [GetSavingsPlansCoverageResponse](#getsavingsplanscoverageresponse)

### GetSavingsPlansPurchaseRecommendation



```js
amazonaws_ce.GetSavingsPlansPurchaseRecommendation({
  "SavingsPlansType": null,
  "TermInYears": null,
  "PaymentOption": null,
  "LookbackPeriodInDays": null
}, context)
```

#### Input
* input `object`
  * AccountScope
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * LookbackPeriodInDays **required**
  * NextPageToken
  * PageSize
  * PaymentOption **required**
  * SavingsPlansType **required**
  * TermInYears **required**

#### Output
* output [GetSavingsPlansPurchaseRecommendationResponse](#getsavingsplanspurchaserecommendationresponse)

### GetSavingsPlansUtilization



```js
amazonaws_ce.GetSavingsPlansUtilization({
  "TimePeriod": null
}, context)
```

#### Input
* input `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity
  * TimePeriod **required**
    * End **required**
    * Start **required**

#### Output
* output [GetSavingsPlansUtilizationResponse](#getsavingsplansutilizationresponse)

### GetSavingsPlansUtilizationDetails



```js
amazonaws_ce.GetSavingsPlansUtilizationDetails({
  "TimePeriod": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * MaxResults
  * NextToken
  * TimePeriod **required**
    * End **required**
    * Start **required**

#### Output
* output [GetSavingsPlansUtilizationDetailsResponse](#getsavingsplansutilizationdetailsresponse)

### GetTags



```js
amazonaws_ce.GetTags({
  "TimePeriod": null
}, context)
```

#### Input
* input `object`
  * NextPageToken
  * SearchString
  * TagKey
  * TimePeriod **required**
    * End **required**
    * Start **required**

#### Output
* output [GetTagsResponse](#gettagsresponse)

### GetUsageForecast



```js
amazonaws_ce.GetUsageForecast({
  "TimePeriod": null,
  "Metric": null,
  "Granularity": null
}, context)
```

#### Input
* input `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity **required**
  * Metric **required**
  * PredictionIntervalLevel
  * TimePeriod **required**
    * End **required**
    * Start **required**

#### Output
* output [GetUsageForecastResponse](#getusageforecastresponse)

### ListCostCategoryDefinitions



```js
amazonaws_ce.ListCostCategoryDefinitions({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * EffectiveOn
  * MaxResults
  * NextToken

#### Output
* output [ListCostCategoryDefinitionsResponse](#listcostcategorydefinitionsresponse)

### ProvideAnomalyFeedback



```js
amazonaws_ce.ProvideAnomalyFeedback({
  "AnomalyId": null,
  "Feedback": null
}, context)
```

#### Input
* input `object`
  * AnomalyId **required**
  * Feedback **required**

#### Output
* output [ProvideAnomalyFeedbackResponse](#provideanomalyfeedbackresponse)

### UpdateAnomalyMonitor



```js
amazonaws_ce.UpdateAnomalyMonitor({
  "MonitorArn": null
}, context)
```

#### Input
* input `object`
  * MonitorArn **required**
  * MonitorName

#### Output
* output [UpdateAnomalyMonitorResponse](#updateanomalymonitorresponse)

### UpdateAnomalySubscription



```js
amazonaws_ce.UpdateAnomalySubscription({
  "SubscriptionArn": null
}, context)
```

#### Input
* input `object`
  * Frequency
  * MonitorArnList
    * items [Arn](#arn)
  * Subscribers
    * items [Subscriber](#subscriber)
  * SubscriptionArn **required**
  * SubscriptionName
  * Threshold

#### Output
* output [UpdateAnomalySubscriptionResponse](#updateanomalysubscriptionresponse)

### UpdateCostCategoryDefinition



```js
amazonaws_ce.UpdateCostCategoryDefinition({
  "CostCategoryArn": null,
  "RuleVersion": "",
  "Rules": null
}, context)
```

#### Input
* input `object`
  * CostCategoryArn **required**
  * RuleVersion **required** [CostCategoryRuleVersion](#costcategoryruleversion)
  * Rules **required**
    * items [CostCategoryRule](#costcategoryrule)

#### Output
* output [UpdateCostCategoryDefinitionResponse](#updatecostcategorydefinitionresponse)



## Definitions

### AccountScope
* AccountScope `string` (values: PAYER, LINKED)

### AmortizedRecurringFee
* AmortizedRecurringFee `string`

### AmortizedUpfrontFee
* AmortizedUpfrontFee `string`

### Anomalies
* Anomalies `array`
  * items [Anomaly](#anomaly)

### Anomaly
* Anomaly `object`:  An unusual cost pattern. This consists of the detailed metadata and the current status of the anomaly object. 
  * AnomalyEndDate
  * AnomalyId **required**
  * AnomalyScore **required**
    * CurrentScore **required**
    * MaxScore **required**
  * AnomalyStartDate
  * DimensionValue
  * Feedback
  * Impact **required**
    * MaxImpact **required**
    * TotalImpact
  * MonitorArn **required**
  * RootCauses
    * items [RootCause](#rootcause)

### AnomalyDateInterval
* AnomalyDateInterval `object`:  The time period for an anomaly. 
  * EndDate
  * StartDate **required**

### AnomalyFeedbackType
* AnomalyFeedbackType `string` (values: YES, NO, PLANNED_ACTIVITY)

### AnomalyMonitor
* AnomalyMonitor `object`:  This object continuously inspects your account's cost data for anomalies, based on <code>MonitorType</code> and <code>MonitorSpecification</code>. The content consists of detailed metadata and the current status of the monitor object. 
  * CreationDate
  * DimensionalValueCount
  * LastEvaluatedDate
  * LastUpdatedDate
  * MonitorArn
  * MonitorDimension
  * MonitorName **required**
  * MonitorSpecification [Expression](#expression)
  * MonitorType **required**

### AnomalyMonitors
* AnomalyMonitors `array`
  * items [AnomalyMonitor](#anomalymonitor)

### AnomalyScore
* AnomalyScore `object`:  Quantifies the anomaly. The higher score means that it is more anomalous. 
  * CurrentScore **required**
  * MaxScore **required**

### AnomalySubscription
* AnomalySubscription `object`:  The association between a monitor, threshold, and list of subscribers used to deliver notifications about anomalies detected by a monitor that exceeds a threshold. The content consists of the detailed metadata and the current status of the <code>AnomalySubscription</code> object. 
  * AccountId
  * Frequency **required**
  * MonitorArnList **required**
    * items [Arn](#arn)
  * Subscribers **required**
    * items [Subscriber](#subscriber)
  * SubscriptionArn
  * SubscriptionName **required**
  * Threshold **required**

### AnomalySubscriptionFrequency
* AnomalySubscriptionFrequency `string` (values: DAILY, IMMEDIATE, WEEKLY)

### AnomalySubscriptions
* AnomalySubscriptions `array`
  * items [AnomalySubscription](#anomalysubscription)

### Arn
* Arn `string`

### AttributeType
* AttributeType `string`

### AttributeValue
* AttributeValue `string`

### Attributes
* Attributes `object`

### BillExpirationException


### Context
* Context `string` (values: COST_AND_USAGE, RESERVATIONS, SAVINGS_PLANS)

### CostCategory
* CostCategory `object`: The structure of Cost Categories. This includes detailed metadata and the set of rules for the <code>CostCategory</code> object.
  * CostCategoryArn **required**
  * EffectiveEnd
  * EffectiveStart **required**
  * Name **required** [CostCategoryName](#costcategoryname)
  * ProcessingStatus
    * items [CostCategoryProcessingStatus](#costcategoryprocessingstatus)
  * RuleVersion **required** [CostCategoryRuleVersion](#costcategoryruleversion)
  * Rules **required**
    * items [CostCategoryRule](#costcategoryrule)

### CostCategoryMaxResults
* CostCategoryMaxResults `integer`

### CostCategoryName
* CostCategoryName `string`: The unique name of the Cost Category.

### CostCategoryProcessingStatus
* CostCategoryProcessingStatus `object`:  The list of processing statuses for Cost Management products for a specific cost category. 
  * Component
  * Status

### CostCategoryProcessingStatusList
* CostCategoryProcessingStatusList `array`
  * items [CostCategoryProcessingStatus](#costcategoryprocessingstatus)

### CostCategoryReference
* CostCategoryReference `object`: <p>A reference to a Cost Category containing only enough information to identify the Cost Category.</p> <p>You can use this information to retrieve the full Cost Category information using <code>DescribeCostCategory</code>.</p>
  * CostCategoryArn
  * EffectiveEnd
  * EffectiveStart
  * Name [CostCategoryName](#costcategoryname)
  * NumberOfRules
  * ProcessingStatus
    * items [CostCategoryProcessingStatus](#costcategoryprocessingstatus)
  * Values
    * items [CostCategoryValue](#costcategoryvalue)

### CostCategoryReferencesList
* CostCategoryReferencesList `array`
  * items [CostCategoryReference](#costcategoryreference)

### CostCategoryRule
* CostCategoryRule `object`: Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value.
  * Rule **required**
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Value **required** [CostCategoryValue](#costcategoryvalue)

### CostCategoryRuleVersion
* CostCategoryRuleVersion `string` (values: CostCategoryExpression.v1): The rule schema version in this particular Cost Category.

### CostCategoryRulesList
* CostCategoryRulesList `array`
  * items [CostCategoryRule](#costcategoryrule)

### CostCategoryStatus
* CostCategoryStatus `string` (values: PROCESSING, APPLIED)

### CostCategoryStatusComponent
* CostCategoryStatusComponent `string` (values: COST_EXPLORER)

### CostCategoryValue
* CostCategoryValue `string`: The value a line item will be categorized as, if it matches the rule.

### CostCategoryValues
* CostCategoryValues `object`: The Cost Categories values used for filtering the costs.
  * Key [CostCategoryName](#costcategoryname)
  * MatchOptions
    * items [MatchOption](#matchoption)
  * Values
    * items [Value](#value)

### CostCategoryValuesList
* CostCategoryValuesList `array`
  * items [CostCategoryValue](#costcategoryvalue)

### Coverage
* Coverage `object`: The amount of instance usage that a reservation covered.
  * CoverageCost
    * OnDemandCost
  * CoverageHours
    * CoverageHoursPercentage
    * OnDemandHours
    * ReservedHours
    * TotalRunningHours
  * CoverageNormalizedUnits
    * CoverageNormalizedUnitsPercentage
    * OnDemandNormalizedUnits
    * ReservedNormalizedUnits
    * TotalRunningNormalizedUnits

### CoverageByTime
* CoverageByTime `object`: Reservation coverage for a specified period, in hours.
  * Groups
    * items [ReservationCoverageGroup](#reservationcoveragegroup)
  * TimePeriod
    * End **required**
    * Start **required**
  * Total
    * CoverageCost
      * OnDemandCost
    * CoverageHours
      * CoverageHoursPercentage
      * OnDemandHours
      * ReservedHours
      * TotalRunningHours
    * CoverageNormalizedUnits
      * CoverageNormalizedUnitsPercentage
      * OnDemandNormalizedUnits
      * ReservedNormalizedUnits
      * TotalRunningNormalizedUnits

### CoverageCost
* CoverageCost `object`: How much it costs to run an instance.
  * OnDemandCost

### CoverageHours
* CoverageHours `object`: How long a running instance either used a reservation or was On-Demand.
  * CoverageHoursPercentage
  * OnDemandHours
  * ReservedHours
  * TotalRunningHours

### CoverageHoursPercentage
* CoverageHoursPercentage `string`

### CoverageNormalizedUnits
* CoverageNormalizedUnits `object`: <p>The amount of instance usage, in normalized units. Normalized units enable you to see your EC2 usage for multiple sizes of instances in a uniform way. For example, suppose you run an xlarge instance and a 2xlarge instance. If you run both instances for the same amount of time, the 2xlarge instance uses twice as much of your reservation as the xlarge instance, even though both instances show only one instance-hour. Using normalized units instead of instance-hours, the xlarge instance used 8 normalized units, and the 2xlarge instance used 16 normalized units.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved Instances</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux Instances</i>.</p>
  * CoverageNormalizedUnitsPercentage
  * OnDemandNormalizedUnits
  * ReservedNormalizedUnits
  * TotalRunningNormalizedUnits

### CoverageNormalizedUnitsPercentage
* CoverageNormalizedUnitsPercentage `string`

### CoveragesByTime
* CoveragesByTime `array`
  * items [CoverageByTime](#coveragebytime)

### CreateAnomalyMonitorRequest
* CreateAnomalyMonitorRequest `object`
  * AnomalyMonitor **required**
    * CreationDate
    * DimensionalValueCount
    * LastEvaluatedDate
    * LastUpdatedDate
    * MonitorArn
    * MonitorDimension
    * MonitorName **required**
    * MonitorSpecification [Expression](#expression)
    * MonitorType **required**

### CreateAnomalyMonitorResponse
* CreateAnomalyMonitorResponse `object`
  * MonitorArn **required**

### CreateAnomalySubscriptionRequest
* CreateAnomalySubscriptionRequest `object`
  * AnomalySubscription **required**
    * AccountId
    * Frequency **required**
    * MonitorArnList **required**
      * items [Arn](#arn)
    * Subscribers **required**
      * items [Subscriber](#subscriber)
    * SubscriptionArn
    * SubscriptionName **required**
    * Threshold **required**

### CreateAnomalySubscriptionResponse
* CreateAnomalySubscriptionResponse `object`
  * SubscriptionArn **required**

### CreateCostCategoryDefinitionRequest
* CreateCostCategoryDefinitionRequest `object`
  * Name **required** [CostCategoryName](#costcategoryname)
  * RuleVersion **required** [CostCategoryRuleVersion](#costcategoryruleversion)
  * Rules **required**
    * items [CostCategoryRule](#costcategoryrule)

### CreateCostCategoryDefinitionResponse
* CreateCostCategoryDefinitionResponse `object`
  * CostCategoryArn
  * EffectiveStart

### CurrentInstance
* CurrentInstance `object`: Context about the current instance.
  * CurrencyCode
  * InstanceName
  * MonthlyCost
  * OnDemandHoursInLookbackPeriod
  * ReservationCoveredHoursInLookbackPeriod
  * ResourceDetails
    * EC2ResourceDetails
      * HourlyOnDemandRate
      * InstanceType
      * Memory
      * NetworkPerformance
      * Platform
      * Region
      * Sku
      * Storage
      * Vcpu
  * ResourceId
  * ResourceUtilization
    * EC2ResourceUtilization
      * EBSResourceUtilization
        * EbsReadBytesPerSecond
        * EbsReadOpsPerSecond
        * EbsWriteBytesPerSecond
        * EbsWriteOpsPerSecond
      * MaxCpuUtilizationPercentage
      * MaxMemoryUtilizationPercentage
      * MaxStorageUtilizationPercentage
  * SavingsPlansCoveredHoursInLookbackPeriod
  * Tags
    * items [TagValues](#tagvalues)
  * TotalRunningHoursInLookbackPeriod

### DataUnavailableException


### DateInterval
* DateInterval `object`: The time period that you want the usage and costs for. 
  * End **required**
  * Start **required**

### DeleteAnomalyMonitorRequest
* DeleteAnomalyMonitorRequest `object`
  * MonitorArn **required**

### DeleteAnomalyMonitorResponse
* DeleteAnomalyMonitorResponse `object`

### DeleteAnomalySubscriptionRequest
* DeleteAnomalySubscriptionRequest `object`
  * SubscriptionArn **required**

### DeleteAnomalySubscriptionResponse
* DeleteAnomalySubscriptionResponse `object`

### DeleteCostCategoryDefinitionRequest
* DeleteCostCategoryDefinitionRequest `object`
  * CostCategoryArn **required**

### DeleteCostCategoryDefinitionResponse
* DeleteCostCategoryDefinitionResponse `object`
  * CostCategoryArn
  * EffectiveEnd

### DescribeCostCategoryDefinitionRequest
* DescribeCostCategoryDefinitionRequest `object`
  * CostCategoryArn **required**
  * EffectiveOn

### DescribeCostCategoryDefinitionResponse
* DescribeCostCategoryDefinitionResponse `object`
  * CostCategory [CostCategory](#costcategory)

### Dimension
* Dimension `string` (values: AZ, INSTANCE_TYPE, LINKED_ACCOUNT, LINKED_ACCOUNT_NAME, OPERATION, PURCHASE_TYPE, REGION, SERVICE, SERVICE_CODE, USAGE_TYPE, USAGE_TYPE_GROUP, RECORD_TYPE, OPERATING_SYSTEM, TENANCY, SCOPE, PLATFORM, SUBSCRIPTION_ID, LEGAL_ENTITY_NAME, DEPLOYMENT_OPTION, DATABASE_ENGINE, CACHE_ENGINE, INSTANCE_TYPE_FAMILY, BILLING_ENTITY, RESERVATION_ID, RESOURCE_ID, RIGHTSIZING_TYPE, SAVINGS_PLANS_TYPE, SAVINGS_PLAN_ARN, PAYMENT_OPTION)

### DimensionValues
* DimensionValues `object`: The metadata that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.
  * Key
  * MatchOptions
    * items [MatchOption](#matchoption)
  * Values
    * items [Value](#value)

### DimensionValuesWithAttributes
* DimensionValuesWithAttributes `object`: The metadata of a specific type that you can use to filter and group your results. You can use <code>GetDimensionValues</code> to find specific values.
  * Attributes
  * Value

### DimensionValuesWithAttributesList
* DimensionValuesWithAttributesList `array`
  * items [DimensionValuesWithAttributes](#dimensionvalueswithattributes)

### EBSResourceUtilization
* EBSResourceUtilization `object`:  The EBS field that contains a list of EBS metrics associated with the current instance. 
  * EbsReadBytesPerSecond
  * EbsReadOpsPerSecond
  * EbsWriteBytesPerSecond
  * EbsWriteOpsPerSecond

### EC2InstanceDetails
* EC2InstanceDetails `object`: Details about the Amazon EC2 instances that AWS recommends that you purchase.
  * AvailabilityZone
  * CurrentGeneration
  * Family
  * InstanceType
  * Platform
  * Region
  * SizeFlexEligible
  * Tenancy

### EC2ResourceDetails
* EC2ResourceDetails `object`:  Details on the Amazon EC2 Resource.
  * HourlyOnDemandRate
  * InstanceType
  * Memory
  * NetworkPerformance
  * Platform
  * Region
  * Sku
  * Storage
  * Vcpu

### EC2ResourceUtilization
* EC2ResourceUtilization `object`:  Utilization metrics of the instance. 
  * EBSResourceUtilization
    * EbsReadBytesPerSecond
    * EbsReadOpsPerSecond
    * EbsWriteBytesPerSecond
    * EbsWriteOpsPerSecond
  * MaxCpuUtilizationPercentage
  * MaxMemoryUtilizationPercentage
  * MaxStorageUtilizationPercentage

### EC2Specification
* EC2Specification `object`: The Amazon EC2 hardware specifications that you want AWS to provide recommendations for.
  * OfferingClass

### ESInstanceDetails
* ESInstanceDetails `object`: Details about the Amazon ES instances that AWS recommends that you purchase.
  * CurrentGeneration
  * InstanceClass
  * InstanceSize
  * Region
  * SizeFlexEligible

### ElastiCacheInstanceDetails
* ElastiCacheInstanceDetails `object`: Details about the Amazon ElastiCache instances that AWS recommends that you purchase.
  * CurrentGeneration
  * Family
  * NodeType
  * ProductDescription
  * Region
  * SizeFlexEligible

### Entity
* Entity `string`

### Estimated
* Estimated `boolean`

### Expression
* Expression `object`: <p>Use <code>Expression</code> to filter by cost or by usage. There are two patterns: </p> <ul> <li> <p>Simple dimension values - You can set the dimension name and values for the filters that you plan to use. For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>. The <code>Expression</code> example looks like:</p> <p> <code>{ "Dimensions": { "Key": "REGION", "Values": [ "us-east-1", “us-west-1” ] } }</code> </p> <p>The list of dimension values are OR'd together to retrieve cost or usage data. You can create <code>Expression</code> and <code>DimensionValues</code> objects using either <code>with*</code> methods or <code>set*</code> methods in multiple lines. </p> </li> <li> <p>Compound dimension values with logical operations - You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. This allows you to filter on more advanced options. For example, you can filter on <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>. The <code>Expression</code> for that looks like this:</p> <p> <code>{ "And": [ {"Or": [ {"Dimensions": { "Key": "REGION", "Values": [ "us-east-1", "us-west-1" ] }}, {"Tags": { "Key": "TagName", "Values": ["Value1"] } } ]}, {"Not": {"Dimensions": { "Key": "USAGE_TYPE", "Values": ["DataTransfer"] }}} ] } </code> </p> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error.</p> </note> <p> <code> { "And": [ ... ], "DimensionValues": { "Dimension": "USAGE_TYPE", "Values": [ "DataTransfer" ] } } </code> </p> </li> </ul> <note> <p>For <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT is not supported. OR is not supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> </note>
  * And
    * items [Expression](#expression)
  * CostCategories
    * Key [CostCategoryName](#costcategoryname)
    * MatchOptions
      * items [MatchOption](#matchoption)
    * Values
      * items [Value](#value)
  * Dimensions
    * Key
    * MatchOptions
      * items [MatchOption](#matchoption)
    * Values
      * items [Value](#value)
  * Not
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Or
    * items [Expression](#expression)
  * Tags
    * Key
    * MatchOptions
      * items [MatchOption](#matchoption)
    * Values
      * items [Value](#value)

### Expressions
* Expressions `array`
  * items [Expression](#expression)

### ForecastResult
* ForecastResult `object`: The forecast created for your query.
  * MeanValue
  * PredictionIntervalLowerBound
  * PredictionIntervalUpperBound
  * TimePeriod
    * End **required**
    * Start **required**

### ForecastResultsByTime
* ForecastResultsByTime `array`
  * items [ForecastResult](#forecastresult)

### GenericBoolean
* GenericBoolean `boolean`

### GenericDouble
* GenericDouble `number`

### GenericString
* GenericString `string`

### GetAnomaliesRequest
* GetAnomaliesRequest `object`
  * DateInterval **required**
    * EndDate
    * StartDate **required**
  * Feedback
  * MaxResults
  * MonitorArn
  * NextPageToken
  * TotalImpact
    * EndValue
    * NumericOperator **required**
    * StartValue **required**

### GetAnomaliesResponse
* GetAnomaliesResponse `object`
  * Anomalies **required**
    * items [Anomaly](#anomaly)
  * NextPageToken

### GetAnomalyMonitorsRequest
* GetAnomalyMonitorsRequest `object`
  * MaxResults
  * MonitorArnList
    * items [Value](#value)
  * NextPageToken

### GetAnomalyMonitorsResponse
* GetAnomalyMonitorsResponse `object`
  * AnomalyMonitors **required**
    * items [AnomalyMonitor](#anomalymonitor)
  * NextPageToken

### GetAnomalySubscriptionsRequest
* GetAnomalySubscriptionsRequest `object`
  * MaxResults
  * MonitorArn
  * NextPageToken
  * SubscriptionArnList
    * items [Value](#value)

### GetAnomalySubscriptionsResponse
* GetAnomalySubscriptionsResponse `object`
  * AnomalySubscriptions **required**
    * items [AnomalySubscription](#anomalysubscription)
  * NextPageToken

### GetCostAndUsageRequest
* GetCostAndUsageRequest `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity
  * GroupBy
    * items [GroupDefinition](#groupdefinition)
  * Metrics **required**
    * items [MetricName](#metricname)
  * NextPageToken
  * TimePeriod **required**
    * End **required**
    * Start **required**

### GetCostAndUsageResponse
* GetCostAndUsageResponse `object`
  * GroupDefinitions
    * items [GroupDefinition](#groupdefinition)
  * NextPageToken
  * ResultsByTime
    * items [ResultByTime](#resultbytime)

### GetCostAndUsageWithResourcesRequest
* GetCostAndUsageWithResourcesRequest `object`
  * Filter **required**
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity
  * GroupBy
    * items [GroupDefinition](#groupdefinition)
  * Metrics
    * items [MetricName](#metricname)
  * NextPageToken
  * TimePeriod **required**
    * End **required**
    * Start **required**

### GetCostAndUsageWithResourcesResponse
* GetCostAndUsageWithResourcesResponse `object`
  * GroupDefinitions
    * items [GroupDefinition](#groupdefinition)
  * NextPageToken
  * ResultsByTime
    * items [ResultByTime](#resultbytime)

### GetCostForecastRequest
* GetCostForecastRequest `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity **required**
  * Metric **required**
  * PredictionIntervalLevel
  * TimePeriod **required**
    * End **required**
    * Start **required**

### GetCostForecastResponse
* GetCostForecastResponse `object`
  * ForecastResultsByTime
    * items [ForecastResult](#forecastresult)
  * Total
    * Amount
    * Unit

### GetDimensionValuesRequest
* GetDimensionValuesRequest `object`
  * Context
  * Dimension **required**
  * NextPageToken
  * SearchString
  * TimePeriod **required**
    * End **required**
    * Start **required**

### GetDimensionValuesResponse
* GetDimensionValuesResponse `object`
  * DimensionValues **required**
    * items [DimensionValuesWithAttributes](#dimensionvalueswithattributes)
  * NextPageToken
  * ReturnSize **required**
  * TotalSize **required**

### GetReservationCoverageRequest
* GetReservationCoverageRequest `object`: You can use the following request parameters to query for how much of your instance usage a reservation covered.
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity
  * GroupBy
    * items [GroupDefinition](#groupdefinition)
  * Metrics
    * items [MetricName](#metricname)
  * NextPageToken
  * TimePeriod **required**
    * End **required**
    * Start **required**

### GetReservationCoverageResponse
* GetReservationCoverageResponse `object`
  * CoveragesByTime **required**
    * items [CoverageByTime](#coveragebytime)
  * NextPageToken
  * Total
    * CoverageCost
      * OnDemandCost
    * CoverageHours
      * CoverageHoursPercentage
      * OnDemandHours
      * ReservedHours
      * TotalRunningHours
    * CoverageNormalizedUnits
      * CoverageNormalizedUnitsPercentage
      * OnDemandNormalizedUnits
      * ReservedNormalizedUnits
      * TotalRunningNormalizedUnits

### GetReservationPurchaseRecommendationRequest
* GetReservationPurchaseRecommendationRequest `object`
  * AccountId
  * AccountScope
  * LookbackPeriodInDays
  * NextPageToken
  * PageSize
  * PaymentOption
  * Service **required**
  * ServiceSpecification
    * EC2Specification
      * OfferingClass
  * TermInYears

### GetReservationPurchaseRecommendationResponse
* GetReservationPurchaseRecommendationResponse `object`
  * Metadata
    * GenerationTimestamp
    * RecommendationId
  * NextPageToken
  * Recommendations
    * items [ReservationPurchaseRecommendation](#reservationpurchaserecommendation)

### GetReservationUtilizationRequest
* GetReservationUtilizationRequest `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity
  * GroupBy
    * items [GroupDefinition](#groupdefinition)
  * NextPageToken
  * TimePeriod **required**
    * End **required**
    * Start **required**

### GetReservationUtilizationResponse
* GetReservationUtilizationResponse `object`
  * NextPageToken
  * Total
    * AmortizedRecurringFee
    * AmortizedUpfrontFee
    * NetRISavings
    * OnDemandCostOfRIHoursUsed
    * PurchasedHours
    * PurchasedUnits
    * TotalActualHours
    * TotalActualUnits
    * TotalAmortizedFee
    * TotalPotentialRISavings
    * UnusedHours
    * UnusedUnits
    * UtilizationPercentage
    * UtilizationPercentageInUnits
  * UtilizationsByTime **required**
    * items [UtilizationByTime](#utilizationbytime)

### GetRightsizingRecommendationRequest
* GetRightsizingRecommendationRequest `object`
  * Configuration
    * BenefitsConsidered **required**
    * RecommendationTarget **required**
  * Filter [Expression](#expression)
  * NextPageToken
  * PageSize
  * Service **required**

### GetRightsizingRecommendationResponse
* GetRightsizingRecommendationResponse `object`
  * Configuration
    * BenefitsConsidered **required**
    * RecommendationTarget **required**
  * Metadata
    * GenerationTimestamp
    * LookbackPeriodInDays
    * RecommendationId
  * NextPageToken
  * RightsizingRecommendations
    * items [RightsizingRecommendation](#rightsizingrecommendation)
  * Summary
    * EstimatedTotalMonthlySavingsAmount
    * SavingsCurrencyCode
    * SavingsPercentage
    * TotalRecommendationCount

### GetSavingsPlansCoverageRequest
* GetSavingsPlansCoverageRequest `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity
  * GroupBy
    * items [GroupDefinition](#groupdefinition)
  * MaxResults
  * Metrics
    * items [MetricName](#metricname)
  * NextToken
  * TimePeriod **required**
    * End **required**
    * Start **required**

### GetSavingsPlansCoverageResponse
* GetSavingsPlansCoverageResponse `object`
  * NextToken
  * SavingsPlansCoverages **required**
    * items [SavingsPlansCoverage](#savingsplanscoverage)

### GetSavingsPlansPurchaseRecommendationRequest
* GetSavingsPlansPurchaseRecommendationRequest `object`
  * AccountScope
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * LookbackPeriodInDays **required**
  * NextPageToken
  * PageSize
  * PaymentOption **required**
  * SavingsPlansType **required**
  * TermInYears **required**

### GetSavingsPlansPurchaseRecommendationResponse
* GetSavingsPlansPurchaseRecommendationResponse `object`
  * Metadata
    * AdditionalMetadata
    * GenerationTimestamp
    * RecommendationId
  * NextPageToken
  * SavingsPlansPurchaseRecommendation
    * AccountScope
    * LookbackPeriodInDays
    * PaymentOption
    * SavingsPlansPurchaseRecommendationDetails
      * items [SavingsPlansPurchaseRecommendationDetail](#savingsplanspurchaserecommendationdetail)
    * SavingsPlansPurchaseRecommendationSummary
      * CurrencyCode
      * CurrentOnDemandSpend
      * DailyCommitmentToPurchase
      * EstimatedMonthlySavingsAmount
      * EstimatedOnDemandCostWithCurrentCommitment
      * EstimatedROI
      * EstimatedSavingsAmount
      * EstimatedSavingsPercentage
      * EstimatedTotalCost
      * HourlyCommitmentToPurchase
      * TotalRecommendationCount
    * SavingsPlansType
    * TermInYears

### GetSavingsPlansUtilizationDetailsRequest
* GetSavingsPlansUtilizationDetailsRequest `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * MaxResults
  * NextToken
  * TimePeriod **required**
    * End **required**
    * Start **required**

### GetSavingsPlansUtilizationDetailsResponse
* GetSavingsPlansUtilizationDetailsResponse `object`
  * NextToken
  * SavingsPlansUtilizationDetails **required**
    * items [SavingsPlansUtilizationDetail](#savingsplansutilizationdetail)
  * TimePeriod **required** [DateInterval](#dateinterval)
  * Total
    * AmortizedCommitment
      * AmortizedRecurringCommitment
      * AmortizedUpfrontCommitment
      * TotalAmortizedCommitment
    * Savings
      * NetSavings
      * OnDemandCostEquivalent
    * Utilization **required**
      * TotalCommitment
      * UnusedCommitment
      * UsedCommitment
      * UtilizationPercentage

### GetSavingsPlansUtilizationRequest
* GetSavingsPlansUtilizationRequest `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity
  * TimePeriod **required**
    * End **required**
    * Start **required**

### GetSavingsPlansUtilizationResponse
* GetSavingsPlansUtilizationResponse `object`
  * SavingsPlansUtilizationsByTime
    * items [SavingsPlansUtilizationByTime](#savingsplansutilizationbytime)
  * Total **required**
    * AmortizedCommitment
      * AmortizedRecurringCommitment
      * AmortizedUpfrontCommitment
      * TotalAmortizedCommitment
    * Savings
      * NetSavings
      * OnDemandCostEquivalent
    * Utilization **required**
      * TotalCommitment
      * UnusedCommitment
      * UsedCommitment
      * UtilizationPercentage

### GetTagsRequest
* GetTagsRequest `object`
  * NextPageToken
  * SearchString
  * TagKey
  * TimePeriod **required**
    * End **required**
    * Start **required**

### GetTagsResponse
* GetTagsResponse `object`
  * NextPageToken
  * ReturnSize **required**
  * Tags **required**
    * items [Entity](#entity)
  * TotalSize **required**

### GetUsageForecastRequest
* GetUsageForecastRequest `object`
  * Filter
    * And
      * items [Expression](#expression)
    * CostCategories
      * Key [CostCategoryName](#costcategoryname)
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Dimensions
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
    * Not
      * And
        * items [Expression](#expression)
      * CostCategories
        * Key [CostCategoryName](#costcategoryname)
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Dimensions
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
      * Not
        * And
          * items [Expression](#expression)
        * CostCategories
          * Key [CostCategoryName](#costcategoryname)
          * MatchOptions
          * Values
        * Dimensions
          * Key
          * MatchOptions
          * Values
        * Not
          * And
          * CostCategories
          * Dimensions
          * Not
          * Or
          * Tags
        * Or
          * items [Expression](#expression)
        * Tags
          * Key
          * MatchOptions
          * Values
      * Or
        * items [Expression](#expression)
      * Tags
        * Key
        * MatchOptions
          * items [MatchOption](#matchoption)
        * Values
          * items [Value](#value)
    * Or
      * items [Expression](#expression)
    * Tags
      * Key
      * MatchOptions
        * items [MatchOption](#matchoption)
      * Values
        * items [Value](#value)
  * Granularity **required**
  * Metric **required**
  * PredictionIntervalLevel
  * TimePeriod **required**
    * End **required**
    * Start **required**

### GetUsageForecastResponse
* GetUsageForecastResponse `object`
  * ForecastResultsByTime
    * items [ForecastResult](#forecastresult)
  * Total
    * Amount
    * Unit

### Granularity
* Granularity `string` (values: DAILY, MONTHLY, HOURLY)

### Group
* Group `object`: One level of grouped data in the results.
  * Keys
    * items [Key](#key)
  * Metrics

### GroupDefinition
* GroupDefinition `object`: Represents a group when you specify a group by criteria or in the response to a query with a specific grouping.
  * Key
  * Type

### GroupDefinitionKey
* GroupDefinitionKey `string`

### GroupDefinitionType
* GroupDefinitionType `string` (values: DIMENSION, TAG, COST_CATEGORY)

### GroupDefinitions
* GroupDefinitions `array`
  * items [GroupDefinition](#groupdefinition)

### Groups
* Groups `array`
  * items [Group](#group)

### Impact
* Impact `object`:  The anomaly's dollar value. 
  * MaxImpact **required**
  * TotalImpact

### InstanceDetails
* InstanceDetails `object`: Details about the instances that AWS recommends that you purchase.
  * EC2InstanceDetails
    * AvailabilityZone
    * CurrentGeneration
    * Family
    * InstanceType
    * Platform
    * Region
    * SizeFlexEligible
    * Tenancy
  * ESInstanceDetails
    * CurrentGeneration
    * InstanceClass
    * InstanceSize
    * Region
    * SizeFlexEligible
  * ElastiCacheInstanceDetails
    * CurrentGeneration
    * Family
    * NodeType
    * ProductDescription
    * Region
    * SizeFlexEligible
  * RDSInstanceDetails
    * CurrentGeneration
    * DatabaseEdition
    * DatabaseEngine
    * DeploymentOption
    * Family
    * InstanceType
    * LicenseModel
    * Region
    * SizeFlexEligible
  * RedshiftInstanceDetails
    * CurrentGeneration
    * Family
    * NodeType
    * Region
    * SizeFlexEligible

### InvalidNextTokenException


### Key
* Key `string`

### Keys
* Keys `array`
  * items [Key](#key)

### LimitExceededException


### ListCostCategoryDefinitionsRequest
* ListCostCategoryDefinitionsRequest `object`
  * EffectiveOn
  * MaxResults
  * NextToken

### ListCostCategoryDefinitionsResponse
* ListCostCategoryDefinitionsResponse `object`
  * CostCategoryReferences
    * items [CostCategoryReference](#costcategoryreference)
  * NextToken

### LookbackPeriodInDays
* LookbackPeriodInDays `string` (values: SEVEN_DAYS, THIRTY_DAYS, SIXTY_DAYS)

### MatchOption
* MatchOption `string` (values: EQUALS, STARTS_WITH, ENDS_WITH, CONTAINS, CASE_SENSITIVE, CASE_INSENSITIVE)

### MatchOptions
* MatchOptions `array`
  * items [MatchOption](#matchoption)

### MaxResults
* MaxResults `integer`

### Metric
* Metric `string` (values: BLENDED_COST, UNBLENDED_COST, AMORTIZED_COST, NET_UNBLENDED_COST, NET_AMORTIZED_COST, USAGE_QUANTITY, NORMALIZED_USAGE_AMOUNT)

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
  * Amount
  * Unit

### Metrics
* Metrics `object`

### ModifyRecommendationDetail
* ModifyRecommendationDetail `object`:  Details on the modification recommendation.
  * TargetInstances
    * items [TargetInstance](#targetinstance)

### MonitorArnList
* MonitorArnList `array`
  * items [Arn](#arn)

### MonitorDimension
* MonitorDimension `string` (values: SERVICE)

### MonitorType
* MonitorType `string` (values: DIMENSIONAL, CUSTOM)

### NetRISavings
* NetRISavings `string`

### NextPageToken
* NextPageToken `string`

### NonNegativeInteger
* NonNegativeInteger `integer`

### NullableNonNegativeDouble
* NullableNonNegativeDouble `number`

### NumericOperator
* NumericOperator `string` (values: EQUAL, GREATER_THAN_OR_EQUAL, LESS_THAN_OR_EQUAL, GREATER_THAN, LESS_THAN, BETWEEN)

### OfferingClass
* OfferingClass `string` (values: STANDARD, CONVERTIBLE)

### OnDemandCost
* OnDemandCost `string`

### OnDemandCostOfRIHoursUsed
* OnDemandCostOfRIHoursUsed `string`

### OnDemandHours
* OnDemandHours `string`

### OnDemandNormalizedUnits
* OnDemandNormalizedUnits `string`

### PageSize
* PageSize `integer`

### PaymentOption
* PaymentOption `string` (values: NO_UPFRONT, PARTIAL_UPFRONT, ALL_UPFRONT, LIGHT_UTILIZATION, MEDIUM_UTILIZATION, HEAVY_UTILIZATION)

### PredictionIntervalLevel
* PredictionIntervalLevel `integer`

### ProvideAnomalyFeedbackRequest
* ProvideAnomalyFeedbackRequest `object`
  * AnomalyId **required**
  * Feedback **required**

### ProvideAnomalyFeedbackResponse
* ProvideAnomalyFeedbackResponse `object`
  * AnomalyId **required**

### PurchasedHours
* PurchasedHours `string`

### PurchasedUnits
* PurchasedUnits `string`

### RDSInstanceDetails
* RDSInstanceDetails `object`: Details about the Amazon RDS instances that AWS recommends that you purchase.
  * CurrentGeneration
  * DatabaseEdition
  * DatabaseEngine
  * DeploymentOption
  * Family
  * InstanceType
  * LicenseModel
  * Region
  * SizeFlexEligible

### RecommendationTarget
* RecommendationTarget `string` (values: SAME_INSTANCE_FAMILY, CROSS_INSTANCE_FAMILY)

### RedshiftInstanceDetails
* RedshiftInstanceDetails `object`: Details about the Amazon Redshift instances that AWS recommends that you purchase.
  * CurrentGeneration
  * Family
  * NodeType
  * Region
  * SizeFlexEligible

### RequestChangedException


### ReservationAggregates
* ReservationAggregates `object`: The aggregated numbers for your reservation usage.
  * AmortizedRecurringFee
  * AmortizedUpfrontFee
  * NetRISavings
  * OnDemandCostOfRIHoursUsed
  * PurchasedHours
  * PurchasedUnits
  * TotalActualHours
  * TotalActualUnits
  * TotalAmortizedFee
  * TotalPotentialRISavings
  * UnusedHours
  * UnusedUnits
  * UtilizationPercentage
  * UtilizationPercentageInUnits

### ReservationCoverageGroup
* ReservationCoverageGroup `object`: A group of reservations that share a set of attributes.
  * Attributes
  * Coverage
    * CoverageCost
      * OnDemandCost
    * CoverageHours
      * CoverageHoursPercentage
      * OnDemandHours
      * ReservedHours
      * TotalRunningHours
    * CoverageNormalizedUnits
      * CoverageNormalizedUnitsPercentage
      * OnDemandNormalizedUnits
      * ReservedNormalizedUnits
      * TotalRunningNormalizedUnits

### ReservationCoverageGroups
* ReservationCoverageGroups `array`
  * items [ReservationCoverageGroup](#reservationcoveragegroup)

### ReservationGroupKey
* ReservationGroupKey `string`

### ReservationGroupValue
* ReservationGroupValue `string`

### ReservationPurchaseRecommendation
* ReservationPurchaseRecommendation `object`: A specific reservation that AWS recommends for purchase.
  * AccountScope
  * LookbackPeriodInDays
  * PaymentOption
  * RecommendationDetails
    * items [ReservationPurchaseRecommendationDetail](#reservationpurchaserecommendationdetail)
  * RecommendationSummary
    * CurrencyCode
    * TotalEstimatedMonthlySavingsAmount
    * TotalEstimatedMonthlySavingsPercentage
  * ServiceSpecification
    * EC2Specification
      * OfferingClass
  * TermInYears

### ReservationPurchaseRecommendationDetail
* ReservationPurchaseRecommendationDetail `object`: Details about your recommended reservation purchase.
  * AccountId
  * AverageNormalizedUnitsUsedPerHour
  * AverageNumberOfInstancesUsedPerHour
  * AverageUtilization
  * CurrencyCode
  * EstimatedBreakEvenInMonths
  * EstimatedMonthlyOnDemandCost
  * EstimatedMonthlySavingsAmount
  * EstimatedMonthlySavingsPercentage
  * EstimatedReservationCostForLookbackPeriod
  * InstanceDetails
    * EC2InstanceDetails
      * AvailabilityZone
      * CurrentGeneration
      * Family
      * InstanceType
      * Platform
      * Region
      * SizeFlexEligible
      * Tenancy
    * ESInstanceDetails
      * CurrentGeneration
      * InstanceClass
      * InstanceSize
      * Region
      * SizeFlexEligible
    * ElastiCacheInstanceDetails
      * CurrentGeneration
      * Family
      * NodeType
      * ProductDescription
      * Region
      * SizeFlexEligible
    * RDSInstanceDetails
      * CurrentGeneration
      * DatabaseEdition
      * DatabaseEngine
      * DeploymentOption
      * Family
      * InstanceType
      * LicenseModel
      * Region
      * SizeFlexEligible
    * RedshiftInstanceDetails
      * CurrentGeneration
      * Family
      * NodeType
      * Region
      * SizeFlexEligible
  * MaximumNormalizedUnitsUsedPerHour
  * MaximumNumberOfInstancesUsedPerHour
  * MinimumNormalizedUnitsUsedPerHour
  * MinimumNumberOfInstancesUsedPerHour
  * RecommendedNormalizedUnitsToPurchase
  * RecommendedNumberOfInstancesToPurchase
  * RecurringStandardMonthlyCost
  * UpfrontCost

### ReservationPurchaseRecommendationDetails
* ReservationPurchaseRecommendationDetails `array`
  * items [ReservationPurchaseRecommendationDetail](#reservationpurchaserecommendationdetail)

### ReservationPurchaseRecommendationMetadata
* ReservationPurchaseRecommendationMetadata `object`: Information about this specific recommendation, such as the timestamp for when AWS made a specific recommendation.
  * GenerationTimestamp
  * RecommendationId

### ReservationPurchaseRecommendationSummary
* ReservationPurchaseRecommendationSummary `object`: A summary about this recommendation, such as the currency code, the amount that AWS estimates that you could save, and the total amount of reservation to purchase.
  * CurrencyCode
  * TotalEstimatedMonthlySavingsAmount
  * TotalEstimatedMonthlySavingsPercentage

### ReservationPurchaseRecommendations
* ReservationPurchaseRecommendations `array`
  * items [ReservationPurchaseRecommendation](#reservationpurchaserecommendation)

### ReservationUtilizationGroup
* ReservationUtilizationGroup `object`: A group of reservations that share a set of attributes.
  * Attributes
  * Key
  * Utilization
    * AmortizedRecurringFee
    * AmortizedUpfrontFee
    * NetRISavings
    * OnDemandCostOfRIHoursUsed
    * PurchasedHours
    * PurchasedUnits
    * TotalActualHours
    * TotalActualUnits
    * TotalAmortizedFee
    * TotalPotentialRISavings
    * UnusedHours
    * UnusedUnits
    * UtilizationPercentage
    * UtilizationPercentageInUnits
  * Value

### ReservationUtilizationGroups
* ReservationUtilizationGroups `array`
  * items [ReservationUtilizationGroup](#reservationutilizationgroup)

### ReservedHours
* ReservedHours `string`

### ReservedNormalizedUnits
* ReservedNormalizedUnits `string`

### ResourceDetails
* ResourceDetails `object`: Details on the resource.
  * EC2ResourceDetails
    * HourlyOnDemandRate
    * InstanceType
    * Memory
    * NetworkPerformance
    * Platform
    * Region
    * Sku
    * Storage
    * Vcpu

### ResourceNotFoundException


### ResourceUtilization
* ResourceUtilization `object`: Resource utilization of current resource. 
  * EC2ResourceUtilization
    * EBSResourceUtilization
      * EbsReadBytesPerSecond
      * EbsReadOpsPerSecond
      * EbsWriteBytesPerSecond
      * EbsWriteOpsPerSecond
    * MaxCpuUtilizationPercentage
    * MaxMemoryUtilizationPercentage
    * MaxStorageUtilizationPercentage

### ResultByTime
* ResultByTime `object`: The result that is associated with a time period.
  * Estimated
  * Groups
    * items [Group](#group)
  * TimePeriod
    * End **required**
    * Start **required**
  * Total

### ResultsByTime
* ResultsByTime `array`
  * items [ResultByTime](#resultbytime)

### RightsizingRecommendation
* RightsizingRecommendation `object`: Recommendations to rightsize resources.
  * AccountId
  * CurrentInstance
    * CurrencyCode
    * InstanceName
    * MonthlyCost
    * OnDemandHoursInLookbackPeriod
    * ReservationCoveredHoursInLookbackPeriod
    * ResourceDetails
      * EC2ResourceDetails
        * HourlyOnDemandRate
        * InstanceType
        * Memory
        * NetworkPerformance
        * Platform
        * Region
        * Sku
        * Storage
        * Vcpu
    * ResourceId
    * ResourceUtilization
      * EC2ResourceUtilization
        * EBSResourceUtilization
          * EbsReadBytesPerSecond
          * EbsReadOpsPerSecond
          * EbsWriteBytesPerSecond
          * EbsWriteOpsPerSecond
        * MaxCpuUtilizationPercentage
        * MaxMemoryUtilizationPercentage
        * MaxStorageUtilizationPercentage
    * SavingsPlansCoveredHoursInLookbackPeriod
    * Tags
      * items [TagValues](#tagvalues)
    * TotalRunningHoursInLookbackPeriod
  * ModifyRecommendationDetail
    * TargetInstances
      * items [TargetInstance](#targetinstance)
  * RightsizingType
  * TerminateRecommendationDetail
    * CurrencyCode
    * EstimatedMonthlySavings

### RightsizingRecommendationConfiguration
* RightsizingRecommendationConfiguration `object`:  Enables you to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings associated with recommendations with consideration of existing Savings Plans or RI benefits, or neither. 
  * BenefitsConsidered **required**
  * RecommendationTarget **required**

### RightsizingRecommendationList
* RightsizingRecommendationList `array`
  * items [RightsizingRecommendation](#rightsizingrecommendation)

### RightsizingRecommendationMetadata
* RightsizingRecommendationMetadata `object`: Metadata for this recommendation set.
  * GenerationTimestamp
  * LookbackPeriodInDays
  * RecommendationId

### RightsizingRecommendationSummary
* RightsizingRecommendationSummary `object`:  Summary of rightsizing recommendations 
  * EstimatedTotalMonthlySavingsAmount
  * SavingsCurrencyCode
  * SavingsPercentage
  * TotalRecommendationCount

### RightsizingType
* RightsizingType `string` (values: TERMINATE, MODIFY)

### RootCause
* RootCause `object`:  The combination of AWS service, linked account, Region, and usage type where a cost anomaly is observed. 
  * LinkedAccount
  * Region
  * Service
  * UsageType

### RootCauses
* RootCauses `array`
  * items [RootCause](#rootcause)

### SavingsPlanArn
* SavingsPlanArn `string`

### SavingsPlansAmortizedCommitment
* SavingsPlansAmortizedCommitment `object`: The amortized amount of Savings Plans purchased in a specific account during a specific time interval.
  * AmortizedRecurringCommitment
  * AmortizedUpfrontCommitment
  * TotalAmortizedCommitment

### SavingsPlansCoverage
* SavingsPlansCoverage `object`: The amount of Savings Plans eligible usage that is covered by Savings Plans. All calculations consider the On-Demand equivalent of your Savings Plans usage.
  * Attributes
  * Coverage
    * CoveragePercentage
    * OnDemandCost
    * SpendCoveredBySavingsPlans
    * TotalCost
  * TimePeriod [DateInterval](#dateinterval)

### SavingsPlansCoverageData
* SavingsPlansCoverageData `object`: Specific coverage percentage, On-Demand costs, and spend covered by Savings Plans, and total Savings Plans costs for an account.
  * CoveragePercentage
  * OnDemandCost
  * SpendCoveredBySavingsPlans
  * TotalCost

### SavingsPlansCoverages
* SavingsPlansCoverages `array`
  * items [SavingsPlansCoverage](#savingsplanscoverage)

### SavingsPlansDetails
* SavingsPlansDetails `object`: Attribute details on a specific Savings Plan.
  * InstanceFamily
  * OfferingId
  * Region

### SavingsPlansPurchaseRecommendation
* SavingsPlansPurchaseRecommendation `object`: Contains your request parameters, Savings Plan Recommendations Summary, and Details.
  * AccountScope
  * LookbackPeriodInDays
  * PaymentOption
  * SavingsPlansPurchaseRecommendationDetails
    * items [SavingsPlansPurchaseRecommendationDetail](#savingsplanspurchaserecommendationdetail)
  * SavingsPlansPurchaseRecommendationSummary
    * CurrencyCode
    * CurrentOnDemandSpend
    * DailyCommitmentToPurchase
    * EstimatedMonthlySavingsAmount
    * EstimatedOnDemandCostWithCurrentCommitment
    * EstimatedROI
    * EstimatedSavingsAmount
    * EstimatedSavingsPercentage
    * EstimatedTotalCost
    * HourlyCommitmentToPurchase
    * TotalRecommendationCount
  * SavingsPlansType
  * TermInYears

### SavingsPlansPurchaseRecommendationDetail
* SavingsPlansPurchaseRecommendationDetail `object`: Details for your recommended Savings Plans.
  * AccountId
  * CurrencyCode
  * CurrentAverageHourlyOnDemandSpend
  * CurrentMaximumHourlyOnDemandSpend
  * CurrentMinimumHourlyOnDemandSpend
  * EstimatedAverageUtilization
  * EstimatedMonthlySavingsAmount
  * EstimatedOnDemandCost
  * EstimatedOnDemandCostWithCurrentCommitment
  * EstimatedROI
  * EstimatedSPCost
  * EstimatedSavingsAmount
  * EstimatedSavingsPercentage
  * HourlyCommitmentToPurchase
  * SavingsPlansDetails
    * InstanceFamily
    * OfferingId
    * Region
  * UpfrontCost

### SavingsPlansPurchaseRecommendationDetailList
* SavingsPlansPurchaseRecommendationDetailList `array`
  * items [SavingsPlansPurchaseRecommendationDetail](#savingsplanspurchaserecommendationdetail)

### SavingsPlansPurchaseRecommendationMetadata
* SavingsPlansPurchaseRecommendationMetadata `object`: Metadata about your Savings Plans Purchase Recommendations.
  * AdditionalMetadata
  * GenerationTimestamp
  * RecommendationId

### SavingsPlansPurchaseRecommendationSummary
* SavingsPlansPurchaseRecommendationSummary `object`: Summary metrics for your Savings Plans Purchase Recommendations.
  * CurrencyCode
  * CurrentOnDemandSpend
  * DailyCommitmentToPurchase
  * EstimatedMonthlySavingsAmount
  * EstimatedOnDemandCostWithCurrentCommitment
  * EstimatedROI
  * EstimatedSavingsAmount
  * EstimatedSavingsPercentage
  * EstimatedTotalCost
  * HourlyCommitmentToPurchase
  * TotalRecommendationCount

### SavingsPlansSavings
* SavingsPlansSavings `object`: The amount of savings you're accumulating, against the public On-Demand rate of the usage accrued in an account.
  * NetSavings
  * OnDemandCostEquivalent

### SavingsPlansUtilization
* SavingsPlansUtilization `object`: The measurement of how well you are using your existing Savings Plans.
  * TotalCommitment
  * UnusedCommitment
  * UsedCommitment
  * UtilizationPercentage

### SavingsPlansUtilizationAggregates
* SavingsPlansUtilizationAggregates `object`: The aggregated utilization metrics for your Savings Plans usage.
  * AmortizedCommitment
    * AmortizedRecurringCommitment
    * AmortizedUpfrontCommitment
    * TotalAmortizedCommitment
  * Savings
    * NetSavings
    * OnDemandCostEquivalent
  * Utilization **required**
    * TotalCommitment
    * UnusedCommitment
    * UsedCommitment
    * UtilizationPercentage

### SavingsPlansUtilizationByTime
* SavingsPlansUtilizationByTime `object`: The amount of Savings Plans utilization, in hours.
  * AmortizedCommitment
    * AmortizedRecurringCommitment
    * AmortizedUpfrontCommitment
    * TotalAmortizedCommitment
  * Savings
    * NetSavings
    * OnDemandCostEquivalent
  * TimePeriod **required** [DateInterval](#dateinterval)
  * Utilization **required**
    * TotalCommitment
    * UnusedCommitment
    * UsedCommitment
    * UtilizationPercentage

### SavingsPlansUtilizationDetail
* SavingsPlansUtilizationDetail `object`: A single daily or monthly Savings Plans utilization rate, and details for your account. A management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> to determine the possible dimension values. 
  * AmortizedCommitment
    * AmortizedRecurringCommitment
    * AmortizedUpfrontCommitment
    * TotalAmortizedCommitment
  * Attributes
  * Savings
    * NetSavings
    * OnDemandCostEquivalent
  * SavingsPlanArn
  * Utilization
    * TotalCommitment
    * UnusedCommitment
    * UsedCommitment
    * UtilizationPercentage

### SavingsPlansUtilizationDetails
* SavingsPlansUtilizationDetails `array`
  * items [SavingsPlansUtilizationDetail](#savingsplansutilizationdetail)

### SavingsPlansUtilizationsByTime
* SavingsPlansUtilizationsByTime `array`
  * items [SavingsPlansUtilizationByTime](#savingsplansutilizationbytime)

### SearchString
* SearchString `string`

### ServiceQuotaExceededException


### ServiceSpecification
* ServiceSpecification `object`: Hardware specifications for the service that you want recommendations for.
  * EC2Specification
    * OfferingClass

### Subscriber
* Subscriber `object`:  The recipient of <code>AnomalySubscription</code> notifications. 
  * Address
  * Status
  * Type

### SubscriberAddress
* SubscriberAddress `string`

### SubscriberStatus
* SubscriberStatus `string` (values: CONFIRMED, DECLINED)

### SubscriberType
* SubscriberType `string` (values: EMAIL, SNS)

### Subscribers
* Subscribers `array`
  * items [Subscriber](#subscriber)

### SupportedSavingsPlansType
* SupportedSavingsPlansType `string` (values: COMPUTE_SP, EC2_INSTANCE_SP)

### TagKey
* TagKey `string`

### TagList
* TagList `array`
  * items [Entity](#entity)

### TagValues
* TagValues `object`: The values that are available for a tag.
  * Key
  * MatchOptions
    * items [MatchOption](#matchoption)
  * Values
    * items [Value](#value)

### TagValuesList
* TagValuesList `array`
  * items [TagValues](#tagvalues)

### TargetInstance
* TargetInstance `object`:  Details on recommended instance.
  * CurrencyCode
  * DefaultTargetInstance
  * EstimatedMonthlyCost
  * EstimatedMonthlySavings
  * ExpectedResourceUtilization
    * EC2ResourceUtilization
      * EBSResourceUtilization
        * EbsReadBytesPerSecond
        * EbsReadOpsPerSecond
        * EbsWriteBytesPerSecond
        * EbsWriteOpsPerSecond
      * MaxCpuUtilizationPercentage
      * MaxMemoryUtilizationPercentage
      * MaxStorageUtilizationPercentage
  * ResourceDetails
    * EC2ResourceDetails
      * HourlyOnDemandRate
      * InstanceType
      * Memory
      * NetworkPerformance
      * Platform
      * Region
      * Sku
      * Storage
      * Vcpu

### TargetInstancesList
* TargetInstancesList `array`
  * items [TargetInstance](#targetinstance)

### TermInYears
* TermInYears `string` (values: ONE_YEAR, THREE_YEARS)

### TerminateRecommendationDetail
* TerminateRecommendationDetail `object`:  Details on termination recommendation. 
  * CurrencyCode
  * EstimatedMonthlySavings

### TotalActualHours
* TotalActualHours `string`

### TotalActualUnits
* TotalActualUnits `string`

### TotalAmortizedFee
* TotalAmortizedFee `string`

### TotalImpactFilter
* TotalImpactFilter `object`:  Filters cost anomalies based on the total impact. 
  * EndValue
  * NumericOperator **required**
  * StartValue **required**

### TotalPotentialRISavings
* TotalPotentialRISavings `string`

### TotalRunningHours
* TotalRunningHours `string`

### TotalRunningNormalizedUnits
* TotalRunningNormalizedUnits `string`

### UnknownMonitorException


### UnknownSubscriptionException


### UnresolvableUsageUnitException


### UnusedHours
* UnusedHours `string`

### UnusedUnits
* UnusedUnits `string`

### UpdateAnomalyMonitorRequest
* UpdateAnomalyMonitorRequest `object`
  * MonitorArn **required**
  * MonitorName

### UpdateAnomalyMonitorResponse
* UpdateAnomalyMonitorResponse `object`
  * MonitorArn **required**

### UpdateAnomalySubscriptionRequest
* UpdateAnomalySubscriptionRequest `object`
  * Frequency
  * MonitorArnList
    * items [Arn](#arn)
  * Subscribers
    * items [Subscriber](#subscriber)
  * SubscriptionArn **required**
  * SubscriptionName
  * Threshold

### UpdateAnomalySubscriptionResponse
* UpdateAnomalySubscriptionResponse `object`
  * SubscriptionArn **required**

### UpdateCostCategoryDefinitionRequest
* UpdateCostCategoryDefinitionRequest `object`
  * CostCategoryArn **required**
  * RuleVersion **required** [CostCategoryRuleVersion](#costcategoryruleversion)
  * Rules **required**
    * items [CostCategoryRule](#costcategoryrule)

### UpdateCostCategoryDefinitionResponse
* UpdateCostCategoryDefinitionResponse `object`
  * CostCategoryArn
  * EffectiveStart

### UtilizationByTime
* UtilizationByTime `object`: The amount of utilization, in hours.
  * Groups
    * items [ReservationUtilizationGroup](#reservationutilizationgroup)
  * TimePeriod
    * End **required**
    * Start **required**
  * Total
    * AmortizedRecurringFee
    * AmortizedUpfrontFee
    * NetRISavings
    * OnDemandCostOfRIHoursUsed
    * PurchasedHours
    * PurchasedUnits
    * TotalActualHours
    * TotalActualUnits
    * TotalAmortizedFee
    * TotalPotentialRISavings
    * UnusedHours
    * UnusedUnits
    * UtilizationPercentage
    * UtilizationPercentageInUnits

### UtilizationPercentage
* UtilizationPercentage `string`

### UtilizationPercentageInUnits
* UtilizationPercentageInUnits `string`

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

### ZonedDateTime
* ZonedDateTime `string`: The time period that you want the usage and costs for.


