# @datafire/azure_security_iotsecuritysolutionanalytics

Client library for Security Center

## Installation and Usage
```bash
npm install --save @datafire/azure_security_iotsecuritysolutionanalytics
```
```js
let azure_security_iotsecuritysolutionanalytics = require('@datafire/azure_security_iotsecuritysolutionanalytics').create({
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

API spec for Microsoft.Security (Azure Security Center) resource provider

## Actions

### IotSecuritySolutionAnalytics_List
Use this method to get IoT security Analytics metrics in an array.


```js
azure_security_iotsecuritysolutionanalytics.IotSecuritySolutionAnalytics_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * solutionName **required** `string`: The name of the IoT Security solution.

#### Output
* output [IoTSecuritySolutionAnalyticsModelList](#iotsecuritysolutionanalyticsmodellist)

### IotSecuritySolutionAnalytics_Get
Use this method to get IoT Security Analytics metrics.


```js
azure_security_iotsecuritysolutionanalytics.IotSecuritySolutionAnalytics_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * solutionName **required** `string`: The name of the IoT Security solution.

#### Output
* output [IoTSecuritySolutionAnalyticsModel](#iotsecuritysolutionanalyticsmodel)

### IotSecuritySolutionsAnalyticsAggregatedAlert_List
Use this method to get the aggregated alert list of yours IoT Security solution.


```js
azure_security_iotsecuritysolutionanalytics.IotSecuritySolutionsAnalyticsAggregatedAlert_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * solutionName **required** `string`: The name of the IoT Security solution.
  * $top `integer`: Number of results to retrieve.

#### Output
* output [IoTSecurityAggregatedAlertList](#iotsecurityaggregatedalertlist)

### IotSecuritySolutionsAnalyticsAggregatedAlert_Get
Use this method to get a single the aggregated alert of yours IoT Security solution. This aggregation is performed by alert name.


```js
azure_security_iotsecuritysolutionanalytics.IotSecuritySolutionsAnalyticsAggregatedAlert_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": "",
  "aggregatedAlertName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * solutionName **required** `string`: The name of the IoT Security solution.
  * aggregatedAlertName **required** `string`: Identifier of the aggregated alert.

#### Output
* output [IoTSecurityAggregatedAlert](#iotsecurityaggregatedalert)

### IotSecuritySolutionsAnalyticsAggregatedAlert_Dismiss
Use this method to dismiss an aggregated IoT Security Solution Alert.


```js
azure_security_iotsecuritysolutionanalytics.IotSecuritySolutionsAnalyticsAggregatedAlert_Dismiss({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": "",
  "aggregatedAlertName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * solutionName **required** `string`: The name of the IoT Security solution.
  * aggregatedAlertName **required** `string`: Identifier of the aggregated alert.

#### Output
*Output schema unknown*

### IotSecuritySolutionsAnalyticsRecommendation_List
Use this method to get the list of aggregated security analytics recommendations of yours IoT Security solution.


```js
azure_security_iotsecuritysolutionanalytics.IotSecuritySolutionsAnalyticsRecommendation_List({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * solutionName **required** `string`: The name of the IoT Security solution.
  * $top `integer`: Number of results to retrieve.

#### Output
* output [IoTSecurityAggregatedRecommendationList](#iotsecurityaggregatedrecommendationlist)

### IotSecuritySolutionsAnalyticsRecommendation_Get
Use this method to get the aggregated security analytics recommendation of yours IoT Security solution. This aggregation is performed by recommendation name.


```js
azure_security_iotsecuritysolutionanalytics.IotSecuritySolutionsAnalyticsRecommendation_Get({
  "api-version": "",
  "subscriptionId": "",
  "resourceGroupName": "",
  "solutionName": "",
  "aggregatedRecommendationName": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`: API version for the operation
  * subscriptionId **required** `string`: Azure subscription ID
  * resourceGroupName **required** `string`: The name of the resource group within the user's subscription. The name is case insensitive.
  * solutionName **required** `string`: The name of the IoT Security solution.
  * aggregatedRecommendationName **required** `string`: Name of the recommendation aggregated for this query.

#### Output
* output [IoTSecurityAggregatedRecommendation](#iotsecurityaggregatedrecommendation)



## Definitions

### IoTSecurityAggregatedAlert
* IoTSecurityAggregatedAlert `object`: Security Solution Aggregated Alert information
  * properties [IoTSecurityAggregatedAlertProperties](#iotsecurityaggregatedalertproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * tags `object`: Resource tags

### IoTSecurityAggregatedAlertList
* IoTSecurityAggregatedAlertList `object`: List of IoT Security solution aggregated alert data.
  * nextLink `string`: When there is too much alert data for one page, use this URI to fetch the next page.
  * value **required** `array`: List of aggregated alerts data.
    * items [IoTSecurityAggregatedAlert](#iotsecurityaggregatedalert)

### IoTSecurityAggregatedAlertProperties
* IoTSecurityAggregatedAlertProperties `object`: IoT Security solution aggregated alert details.
  * actionTaken `string`: IoT Security solution alert response.
  * aggregatedDateUtc `string`: Date of detection.
  * alertDisplayName `string`: Display name of the alert type.
  * alertType `string`: Name of the alert type.
  * count `integer`: Number of alerts occurrences within the aggregated time window.
  * description `string`: Description of the suspected vulnerability and meaning.
  * effectedResourceType `string`: Azure resource ID of the resource that received the alerts.
  * logAnalyticsQuery `string`: Log analytics query for getting the list of affected devices/alerts.
  * remediationSteps `string`: Recommended steps for remediation.
  * reportedSeverity `string` (values: Informational, Low, Medium, High): Assessed alert severity.
  * systemSource `string`: The type of the alerted resource (Azure, Non-Azure).
  * topDevicesList `array`: 10 devices with the highest number of occurrences of this alert type, on this day.
    * items `object`
      * alertsCount `integer`: Number of alerts raised for this device.
      * deviceId `string`: Name of the device.
      * lastOccurrence `string`: Most recent time this alert was raised for this device, on this day.
  * vendorName `string`: Name of the organization that raised the alert.

### IoTSecurityAggregatedRecommendation
* IoTSecurityAggregatedRecommendation `object`: IoT Security solution recommendation information.
  * properties [IoTSecurityAggregatedRecommendationProperties](#iotsecurityaggregatedrecommendationproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type
  * tags `object`: Resource tags

### IoTSecurityAggregatedRecommendationList
* IoTSecurityAggregatedRecommendationList `object`: List of IoT Security solution aggregated recommendations.
  * nextLink `string`: When there is too much alert data for one page, use this URI to fetch the next page.
  * value **required** `array`: List of aggregated recommendations data.
    * items [IoTSecurityAggregatedRecommendation](#iotsecurityaggregatedrecommendation)

### IoTSecurityAggregatedRecommendationProperties
* IoTSecurityAggregatedRecommendationProperties `object`: IoT Security solution aggregated recommendation information
  * description `string`: Description of the suspected vulnerability and meaning.
  * detectedBy `string`: Name of the organization that made the recommendation.
  * healthyDevices `integer`: Number of healthy devices within the IoT Security solution.
  * logAnalyticsQuery `string`: Log analytics query for getting the list of affected devices/alerts.
  * recommendationDisplayName `string`: Display name of the recommendation type.
  * recommendationName `string`: Name of the recommendation.
  * recommendationTypeId `string`: Recommendation-type GUID.
  * remediationSteps `string`: Recommended steps for remediation
  * reportedSeverity `string` (values: Informational, Low, Medium, High): Assessed recommendation severity.
  * unhealthyDeviceCount `integer`: Number of unhealthy devices within the IoT Security solution.

### IoTSecurityAlertedDevice
* IoTSecurityAlertedDevice `object`: Statistical information about the number of alerts per device during last set number of days.
  * alertsCount `integer`: Number of alerts raised for this device.
  * deviceId `string`: Device identifier.

### IoTSecurityAlertedDevicesList
* IoTSecurityAlertedDevicesList `array`: List of devices with open alerts including the count of alerts per device.
  * items [IoTSecurityAlertedDevice](#iotsecurityalerteddevice)

### IoTSecurityDeviceAlert
* IoTSecurityDeviceAlert `object`: Statistical information about the number of alerts per alert type during last set number of days
  * alertDisplayName `string`: Display name of the alert
  * alertsCount `integer`: Number of alerts raised for this alert type.
  * reportedSeverity `string` (values: Informational, Low, Medium, High): Assessed Alert severity.

### IoTSecurityDeviceAlertsList
* IoTSecurityDeviceAlertsList `array`: List of alerts with the count of raised alerts
  * items [IoTSecurityDeviceAlert](#iotsecuritydevicealert)

### IoTSecurityDeviceRecommendation
* IoTSecurityDeviceRecommendation `object`: Statistical information about the number of recommendations per device, per recommendation type.
  * devicesCount `integer`: Number of devices with this recommendation.
  * recommendationDisplayName `string`: Display name of the recommendation.
  * reportedSeverity `string` (values: Informational, Low, Medium, High): Assessed recommendation severity.

### IoTSecurityDeviceRecommendationsList
* IoTSecurityDeviceRecommendationsList `array`: List of aggregated recommendation data, per recommendation type, per device.
  * items [IoTSecurityDeviceRecommendation](#iotsecuritydevicerecommendation)

### IoTSecuritySolutionAnalyticsModel
* IoTSecuritySolutionAnalyticsModel `object`: Security analytics of your IoT Security solution
  * properties [IoTSecuritySolutionAnalyticsModelProperties](#iotsecuritysolutionanalyticsmodelproperties)
  * id `string`: Resource Id
  * name `string`: Resource name
  * type `string`: Resource type

### IoTSecuritySolutionAnalyticsModelList
* IoTSecuritySolutionAnalyticsModelList `object`: List of Security analytics of your IoT Security solution
  * nextLink `string`: When there is too much alert data for one page, use this URI to fetch the next page.
  * value **required** `array`: List of Security analytics of your IoT Security solution
    * items [IoTSecuritySolutionAnalyticsModel](#iotsecuritysolutionanalyticsmodel)

### IoTSecuritySolutionAnalyticsModelProperties
* IoTSecuritySolutionAnalyticsModelProperties `object`: Security analytics properties of your IoT Security solution
  * devicesMetrics `array`: List of device metrics by the aggregation date.
    * items `object`
      * date `string`: Aggregation of IoT Security solution device alert metrics by date.
      * devicesMetrics [IoTSeverityMetrics](#iotseveritymetrics)
  * metrics [IoTSeverityMetrics](#iotseveritymetrics)
  * mostPrevalentDeviceAlerts [IoTSecurityDeviceAlertsList](#iotsecuritydevicealertslist)
  * mostPrevalentDeviceRecommendations [IoTSecurityDeviceRecommendationsList](#iotsecuritydevicerecommendationslist)
  * topAlertedDevices [IoTSecurityAlertedDevicesList](#iotsecurityalerteddeviceslist)
  * unhealthyDeviceCount `integer`: Number of unhealthy devices within your IoT Security solution.

### IoTSeverityMetrics
* IoTSeverityMetrics `object`: IoT Security solution analytics severity metrics.
  * high `integer`: Count of high severity alerts/recommendations.
  * low `integer`: Count of low severity alerts/recommendations.
  * medium `integer`: Count of medium severity alerts/recommendations.

### TagsResource
* TagsResource `object`: A container holding only the Tags for a resource, allowing the user to update the tags.
  * tags `object`: Resource tags


