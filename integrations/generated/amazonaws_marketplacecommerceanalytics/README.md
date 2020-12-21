# @datafire/amazonaws_marketplacecommerceanalytics

Client library for AWS Marketplace Commerce Analytics

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_marketplacecommerceanalytics
```
```js
let amazonaws_marketplacecommerceanalytics = require('@datafire/amazonaws_marketplacecommerceanalytics').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Provides AWS Marketplace business intelligence data on-demand.

## Actions

### GenerateDataSet



```js
amazonaws_marketplacecommerceanalytics.GenerateDataSet({
  "dataSetType": null,
  "dataSetPublicationDate": null,
  "roleNameArn": null,
  "destinationS3BucketName": null,
  "snsTopicArn": null
}, context)
```

#### Input
* input `object`
  * customerDefinedValues
  * dataSetPublicationDate **required**
  * dataSetType **required**
  * destinationS3BucketName **required**
  * destinationS3Prefix
  * roleNameArn **required**
  * snsTopicArn **required**

#### Output
* output [GenerateDataSetResult](#generatedatasetresult)

### StartSupportDataExport



```js
amazonaws_marketplacecommerceanalytics.StartSupportDataExport({
  "dataSetType": null,
  "fromDate": null,
  "roleNameArn": null,
  "destinationS3BucketName": null,
  "snsTopicArn": null
}, context)
```

#### Input
* input `object`
  * customerDefinedValues
  * dataSetType **required**
  * destinationS3BucketName **required**
  * destinationS3Prefix
  * fromDate **required**
  * roleNameArn **required**
  * snsTopicArn **required**

#### Output
* output [StartSupportDataExportResult](#startsupportdataexportresult)



## Definitions

### CustomerDefinedValues
* CustomerDefinedValues `object`

### DataSetPublicationDate
* DataSetPublicationDate `string`

### DataSetRequestId
* DataSetRequestId `string`

### DataSetType
* DataSetType `string` (values: customer_subscriber_hourly_monthly_subscriptions, customer_subscriber_annual_subscriptions, daily_business_usage_by_instance_type, daily_business_fees, daily_business_free_trial_conversions, daily_business_new_instances, daily_business_new_product_subscribers, daily_business_canceled_product_subscribers, monthly_revenue_billing_and_revenue_data, monthly_revenue_annual_subscriptions, monthly_revenue_field_demonstration_usage, monthly_revenue_flexible_payment_schedule, disbursed_amount_by_product, disbursed_amount_by_product_with_uncollected_funds, disbursed_amount_by_instance_hours, disbursed_amount_by_customer_geo, disbursed_amount_by_age_of_uncollected_funds, disbursed_amount_by_age_of_disbursed_funds, disbursed_amount_by_age_of_past_due_funds, disbursed_amount_by_uncollected_funds_breakdown, customer_profile_by_industry, customer_profile_by_revenue, customer_profile_by_geography, sales_compensation_billed_revenue, us_sales_and_use_tax_records)

### DestinationS3BucketName
* DestinationS3BucketName `string`

### DestinationS3Prefix
* DestinationS3Prefix `string`

### FromDate
* FromDate `string`

### GenerateDataSetRequest
* GenerateDataSetRequest `object`: Container for the parameters to the GenerateDataSet operation.
  * customerDefinedValues
  * dataSetPublicationDate **required**
  * dataSetType **required**
  * destinationS3BucketName **required**
  * destinationS3Prefix
  * roleNameArn **required**
  * snsTopicArn **required**

### GenerateDataSetResult
* GenerateDataSetResult `object`: Container for the result of the GenerateDataSet operation.
  * dataSetRequestId

### MarketplaceCommerceAnalyticsException


### OptionalKey
* OptionalKey `string`

### OptionalValue
* OptionalValue `string`

### RoleNameArn
* RoleNameArn `string`

### SnsTopicArn
* SnsTopicArn `string`

### StartSupportDataExportRequest
* StartSupportDataExportRequest `object`: Container for the parameters to the StartSupportDataExport operation.
  * customerDefinedValues
  * dataSetType **required**
  * destinationS3BucketName **required**
  * destinationS3Prefix
  * fromDate **required**
  * roleNameArn **required**
  * snsTopicArn **required**

### StartSupportDataExportResult
* StartSupportDataExportResult `object`: Container for the result of the StartSupportDataExport operation.
  * dataSetRequestId

### SupportDataSetType
* SupportDataSetType `string` (values: customer_support_contacts_data, test_customer_support_contacts_data)


