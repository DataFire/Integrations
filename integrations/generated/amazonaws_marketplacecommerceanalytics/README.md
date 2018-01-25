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

amazonaws_marketplacecommerceanalytics.GenerateDataSet({
  "dataSetType": "",
  "dataSetPublicationDate": "",
  "roleNameArn": "",
  "destinationS3BucketName": "",
  "snsTopicArn": ""
}).then(data => {
  console.log(data);
});
```

## Description

Provides AWS Marketplace business intelligence data on-demand.

## Actions

### GenerateDataSet



```js
amazonaws_marketplacecommerceanalytics.GenerateDataSet({
  "dataSetType": "",
  "dataSetPublicationDate": "",
  "roleNameArn": "",
  "destinationS3BucketName": "",
  "snsTopicArn": ""
}, context)
```

#### Input
* input `object`
  * customerDefinedValues [CustomerDefinedValues](#customerdefinedvalues)
  * dataSetPublicationDate **required** [DataSetPublicationDate](#datasetpublicationdate)
  * dataSetType **required** [DataSetType](#datasettype)
  * destinationS3BucketName **required** [DestinationS3BucketName](#destinations3bucketname)
  * destinationS3Prefix [DestinationS3Prefix](#destinations3prefix)
  * roleNameArn **required** [RoleNameArn](#rolenamearn)
  * snsTopicArn **required** [SnsTopicArn](#snstopicarn)

#### Output
* output [GenerateDataSetResult](#generatedatasetresult)

### StartSupportDataExport



```js
amazonaws_marketplacecommerceanalytics.StartSupportDataExport({
  "dataSetType": "",
  "fromDate": "",
  "roleNameArn": "",
  "destinationS3BucketName": "",
  "snsTopicArn": ""
}, context)
```

#### Input
* input `object`
  * customerDefinedValues [CustomerDefinedValues](#customerdefinedvalues)
  * dataSetType **required** [SupportDataSetType](#supportdatasettype)
  * destinationS3BucketName **required** [DestinationS3BucketName](#destinations3bucketname)
  * destinationS3Prefix [DestinationS3Prefix](#destinations3prefix)
  * fromDate **required** [FromDate](#fromdate)
  * roleNameArn **required** [RoleNameArn](#rolenamearn)
  * snsTopicArn **required** [SnsTopicArn](#snstopicarn)

#### Output
* output [StartSupportDataExportResult](#startsupportdataexportresult)



## Definitions

### CustomerDefinedValues
* CustomerDefinedValues `array`
  * items `object`
    * key [OptionalKey](#optionalkey)
    * value [OptionalValue](#optionalvalue)

### DataSetPublicationDate
* DataSetPublicationDate `string`

### DataSetRequestId
* DataSetRequestId `string`

### DataSetType
* DataSetType `string` (values: customer_subscriber_hourly_monthly_subscriptions, customer_subscriber_annual_subscriptions, daily_business_usage_by_instance_type, daily_business_fees, daily_business_free_trial_conversions, daily_business_new_instances, daily_business_new_product_subscribers, daily_business_canceled_product_subscribers, monthly_revenue_billing_and_revenue_data, monthly_revenue_annual_subscriptions, disbursed_amount_by_product, disbursed_amount_by_product_with_uncollected_funds, disbursed_amount_by_instance_hours, disbursed_amount_by_customer_geo, disbursed_amount_by_age_of_uncollected_funds, disbursed_amount_by_age_of_disbursed_funds, customer_profile_by_industry, customer_profile_by_revenue, customer_profile_by_geography, sales_compensation_billed_revenue, us_sales_and_use_tax_records)

### DestinationS3BucketName
* DestinationS3BucketName `string`

### DestinationS3Prefix
* DestinationS3Prefix `string`

### ExceptionMessage
* ExceptionMessage `string`

### FromDate
* FromDate `string`

### GenerateDataSetRequest
* GenerateDataSetRequest `object`: Container for the parameters to the GenerateDataSet operation.
  * customerDefinedValues [CustomerDefinedValues](#customerdefinedvalues)
  * dataSetPublicationDate **required** [DataSetPublicationDate](#datasetpublicationdate)
  * dataSetType **required** [DataSetType](#datasettype)
  * destinationS3BucketName **required** [DestinationS3BucketName](#destinations3bucketname)
  * destinationS3Prefix [DestinationS3Prefix](#destinations3prefix)
  * roleNameArn **required** [RoleNameArn](#rolenamearn)
  * snsTopicArn **required** [SnsTopicArn](#snstopicarn)

### GenerateDataSetResult
* GenerateDataSetResult `object`: Container for the result of the GenerateDataSet operation.
  * dataSetRequestId [DataSetRequestId](#datasetrequestid)

### MarketplaceCommerceAnalyticsException
* MarketplaceCommerceAnalyticsException `object`: This exception is thrown when an internal service error occurs.
  * message [ExceptionMessage](#exceptionmessage)

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
  * customerDefinedValues [CustomerDefinedValues](#customerdefinedvalues)
  * dataSetType **required** [SupportDataSetType](#supportdatasettype)
  * destinationS3BucketName **required** [DestinationS3BucketName](#destinations3bucketname)
  * destinationS3Prefix [DestinationS3Prefix](#destinations3prefix)
  * fromDate **required** [FromDate](#fromdate)
  * roleNameArn **required** [RoleNameArn](#rolenamearn)
  * snsTopicArn **required** [SnsTopicArn](#snstopicarn)

### StartSupportDataExportResult
* StartSupportDataExportResult `object`: Container for the result of the StartSupportDataExport operation.
  * dataSetRequestId [DataSetRequestId](#datasetrequestid)

### SupportDataSetType
* SupportDataSetType `string` (values: customer_support_contacts_data, test_customer_support_contacts_data)


