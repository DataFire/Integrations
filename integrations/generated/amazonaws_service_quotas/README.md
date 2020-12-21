# @datafire/amazonaws_service_quotas

Client library for Service Quotas

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_service_quotas
```
```js
let amazonaws_service_quotas = require('@datafire/amazonaws_service_quotas').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p> Service Quotas is a web service that you can use to manage many of your AWS service quotas. Quotas, also referred to as limits, are the maximum values for a resource, item, or operation. This guide provide descriptions of the Service Quotas actions that you can call from an API. For the Service Quotas user guide, which explains how to use Service Quotas from the console, see <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">What is Service Quotas</a>. </p> <note> <p>AWS provides SDKs that consist of libraries and sample code for programming languages and platforms (Java, Ruby, .NET, iOS, Android, etc...,). The SDKs provide a convenient way to create programmatic access to Service Quotas and AWS. For information about the AWS SDKs, including how to download and install them, see the <a href="https://docs.aws.amazon.com/aws.amazon.com/tools">Tools for Amazon Web Services</a> page.</p> </note>

## Actions

### AssociateServiceQuotaTemplate



```js
amazonaws_service_quotas.AssociateServiceQuotaTemplate({}, context)
```

#### Input
* input `object`

#### Output
* output [AssociateServiceQuotaTemplateResponse](#associateservicequotatemplateresponse)

### DeleteServiceQuotaIncreaseRequestFromTemplate



```js
amazonaws_service_quotas.DeleteServiceQuotaIncreaseRequestFromTemplate({
  "ServiceCode": null,
  "QuotaCode": null,
  "AwsRegion": null
}, context)
```

#### Input
* input `object`
  * AwsRegion **required**
  * QuotaCode **required**
  * ServiceCode **required**

#### Output
* output [DeleteServiceQuotaIncreaseRequestFromTemplateResponse](#deleteservicequotaincreaserequestfromtemplateresponse)

### DisassociateServiceQuotaTemplate



```js
amazonaws_service_quotas.DisassociateServiceQuotaTemplate({}, context)
```

#### Input
* input `object`

#### Output
* output [DisassociateServiceQuotaTemplateResponse](#disassociateservicequotatemplateresponse)

### GetAWSDefaultServiceQuota



```js
amazonaws_service_quotas.GetAWSDefaultServiceQuota({
  "ServiceCode": null,
  "QuotaCode": null
}, context)
```

#### Input
* input `object`
  * QuotaCode **required**
  * ServiceCode **required**

#### Output
* output [GetAWSDefaultServiceQuotaResponse](#getawsdefaultservicequotaresponse)

### GetAssociationForServiceQuotaTemplate



```js
amazonaws_service_quotas.GetAssociationForServiceQuotaTemplate({}, context)
```

#### Input
* input `object`

#### Output
* output [GetAssociationForServiceQuotaTemplateResponse](#getassociationforservicequotatemplateresponse)

### GetRequestedServiceQuotaChange



```js
amazonaws_service_quotas.GetRequestedServiceQuotaChange({
  "RequestId": null
}, context)
```

#### Input
* input `object`
  * RequestId **required**

#### Output
* output [GetRequestedServiceQuotaChangeResponse](#getrequestedservicequotachangeresponse)

### GetServiceQuota



```js
amazonaws_service_quotas.GetServiceQuota({
  "ServiceCode": null,
  "QuotaCode": null
}, context)
```

#### Input
* input `object`
  * QuotaCode **required**
  * ServiceCode **required**

#### Output
* output [GetServiceQuotaResponse](#getservicequotaresponse)

### GetServiceQuotaIncreaseRequestFromTemplate



```js
amazonaws_service_quotas.GetServiceQuotaIncreaseRequestFromTemplate({
  "ServiceCode": null,
  "QuotaCode": null,
  "AwsRegion": null
}, context)
```

#### Input
* input `object`
  * AwsRegion **required**
  * QuotaCode **required**
  * ServiceCode **required**

#### Output
* output [GetServiceQuotaIncreaseRequestFromTemplateResponse](#getservicequotaincreaserequestfromtemplateresponse)

### ListAWSDefaultServiceQuotas



```js
amazonaws_service_quotas.ListAWSDefaultServiceQuotas({
  "ServiceCode": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ServiceCode **required**

#### Output
* output [ListAWSDefaultServiceQuotasResponse](#listawsdefaultservicequotasresponse)

### ListRequestedServiceQuotaChangeHistory



```js
amazonaws_service_quotas.ListRequestedServiceQuotaChangeHistory({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ServiceCode
  * Status

#### Output
* output [ListRequestedServiceQuotaChangeHistoryResponse](#listrequestedservicequotachangehistoryresponse)

### ListRequestedServiceQuotaChangeHistoryByQuota



```js
amazonaws_service_quotas.ListRequestedServiceQuotaChangeHistoryByQuota({
  "ServiceCode": null,
  "QuotaCode": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * QuotaCode **required**
  * ServiceCode **required**
  * Status

#### Output
* output [ListRequestedServiceQuotaChangeHistoryByQuotaResponse](#listrequestedservicequotachangehistorybyquotaresponse)

### ListServiceQuotaIncreaseRequestsInTemplate



```js
amazonaws_service_quotas.ListServiceQuotaIncreaseRequestsInTemplate({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * AwsRegion
  * MaxResults
  * NextToken
  * ServiceCode

#### Output
* output [ListServiceQuotaIncreaseRequestsInTemplateResponse](#listservicequotaincreaserequestsintemplateresponse)

### ListServiceQuotas



```js
amazonaws_service_quotas.ListServiceQuotas({
  "ServiceCode": null
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken
  * ServiceCode **required**

#### Output
* output [ListServiceQuotasResponse](#listservicequotasresponse)

### ListServices



```js
amazonaws_service_quotas.ListServices({}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * MaxResults
  * NextToken

#### Output
* output [ListServicesResponse](#listservicesresponse)

### PutServiceQuotaIncreaseRequestIntoTemplate



```js
amazonaws_service_quotas.PutServiceQuotaIncreaseRequestIntoTemplate({
  "QuotaCode": null,
  "ServiceCode": null,
  "AwsRegion": null,
  "DesiredValue": null
}, context)
```

#### Input
* input `object`
  * AwsRegion **required**
  * DesiredValue **required**
  * QuotaCode **required**
  * ServiceCode **required**

#### Output
* output [PutServiceQuotaIncreaseRequestIntoTemplateResponse](#putservicequotaincreaserequestintotemplateresponse)

### RequestServiceQuotaIncrease



```js
amazonaws_service_quotas.RequestServiceQuotaIncrease({
  "ServiceCode": null,
  "QuotaCode": null,
  "DesiredValue": null
}, context)
```

#### Input
* input `object`
  * DesiredValue **required**
  * QuotaCode **required**
  * ServiceCode **required**

#### Output
* output [RequestServiceQuotaIncreaseResponse](#requestservicequotaincreaseresponse)



## Definitions

### AWSServiceAccessNotEnabledException


### AccessDeniedException


### AssociateServiceQuotaTemplateRequest
* AssociateServiceQuotaTemplateRequest `object`

### AssociateServiceQuotaTemplateResponse
* AssociateServiceQuotaTemplateResponse `object`

### AwsRegion
* AwsRegion `string`

### CustomerServiceEngagementId
* CustomerServiceEngagementId `string`

### DateTime
* DateTime `string`

### DeleteServiceQuotaIncreaseRequestFromTemplateRequest
* DeleteServiceQuotaIncreaseRequestFromTemplateRequest `object`
  * AwsRegion **required**
  * QuotaCode **required**
  * ServiceCode **required**

### DeleteServiceQuotaIncreaseRequestFromTemplateResponse
* DeleteServiceQuotaIncreaseRequestFromTemplateResponse `object`

### DependencyAccessDeniedException


### DisassociateServiceQuotaTemplateRequest
* DisassociateServiceQuotaTemplateRequest `object`

### DisassociateServiceQuotaTemplateResponse
* DisassociateServiceQuotaTemplateResponse `object`

### ErrorCode
* ErrorCode `string` (values: DEPENDENCY_ACCESS_DENIED_ERROR, DEPENDENCY_THROTTLING_ERROR, DEPENDENCY_SERVICE_ERROR, SERVICE_QUOTA_NOT_AVAILABLE_ERROR)

### ErrorMessage
* ErrorMessage `string`

### ErrorReason
* ErrorReason `object`: Returns an error that explains why the action did not succeed.
  * ErrorCode
  * ErrorMessage

### GetAWSDefaultServiceQuotaRequest
* GetAWSDefaultServiceQuotaRequest `object`
  * QuotaCode **required**
  * ServiceCode **required**

### GetAWSDefaultServiceQuotaResponse
* GetAWSDefaultServiceQuotaResponse `object`
  * Quota
    * Adjustable
    * ErrorReason
      * ErrorCode
      * ErrorMessage
    * GlobalQuota
    * Period
      * PeriodUnit
      * PeriodValue
    * QuotaArn
    * QuotaCode
    * QuotaName
    * ServiceCode
    * ServiceName
    * Unit
    * UsageMetric
      * MetricDimensions
      * MetricName
      * MetricNamespace
      * MetricStatisticRecommendation
    * Value

### GetAssociationForServiceQuotaTemplateRequest
* GetAssociationForServiceQuotaTemplateRequest `object`

### GetAssociationForServiceQuotaTemplateResponse
* GetAssociationForServiceQuotaTemplateResponse `object`
  * ServiceQuotaTemplateAssociationStatus

### GetRequestedServiceQuotaChangeRequest
* GetRequestedServiceQuotaChangeRequest `object`
  * RequestId **required**

### GetRequestedServiceQuotaChangeResponse
* GetRequestedServiceQuotaChangeResponse `object`
  * RequestedQuota
    * CaseId
    * Created
    * DesiredValue
    * GlobalQuota
    * Id
    * LastUpdated
    * QuotaArn
    * QuotaCode
    * QuotaName
    * Requester
    * ServiceCode
    * ServiceName
    * Status
    * Unit

### GetServiceQuotaIncreaseRequestFromTemplateRequest
* GetServiceQuotaIncreaseRequestFromTemplateRequest `object`
  * AwsRegion **required**
  * QuotaCode **required**
  * ServiceCode **required**

### GetServiceQuotaIncreaseRequestFromTemplateResponse
* GetServiceQuotaIncreaseRequestFromTemplateResponse `object`
  * ServiceQuotaIncreaseRequestInTemplate
    * AwsRegion
    * DesiredValue
    * GlobalQuota
    * QuotaCode
    * QuotaName
    * ServiceCode
    * ServiceName
    * Unit

### GetServiceQuotaRequest
* GetServiceQuotaRequest `object`
  * QuotaCode **required**
  * ServiceCode **required**

### GetServiceQuotaResponse
* GetServiceQuotaResponse `object`
  * Quota
    * Adjustable
    * ErrorReason
      * ErrorCode
      * ErrorMessage
    * GlobalQuota
    * Period
      * PeriodUnit
      * PeriodValue
    * QuotaArn
    * QuotaCode
    * QuotaName
    * ServiceCode
    * ServiceName
    * Unit
    * UsageMetric
      * MetricDimensions
      * MetricName
      * MetricNamespace
      * MetricStatisticRecommendation
    * Value

### GlobalQuota
* GlobalQuota `boolean`

### IllegalArgumentException


### InvalidPaginationTokenException


### InvalidResourceStateException


### ListAWSDefaultServiceQuotasRequest
* ListAWSDefaultServiceQuotasRequest `object`
  * MaxResults
  * NextToken
  * ServiceCode **required**

### ListAWSDefaultServiceQuotasResponse
* ListAWSDefaultServiceQuotasResponse `object`
  * NextToken
  * Quotas
    * items [ServiceQuota](#servicequota)

### ListRequestedServiceQuotaChangeHistoryByQuotaRequest
* ListRequestedServiceQuotaChangeHistoryByQuotaRequest `object`
  * MaxResults
  * NextToken
  * QuotaCode **required**
  * ServiceCode **required**
  * Status

### ListRequestedServiceQuotaChangeHistoryByQuotaResponse
* ListRequestedServiceQuotaChangeHistoryByQuotaResponse `object`
  * NextToken
  * RequestedQuotas
    * items [RequestedServiceQuotaChange](#requestedservicequotachange)

### ListRequestedServiceQuotaChangeHistoryRequest
* ListRequestedServiceQuotaChangeHistoryRequest `object`
  * MaxResults
  * NextToken
  * ServiceCode
  * Status

### ListRequestedServiceQuotaChangeHistoryResponse
* ListRequestedServiceQuotaChangeHistoryResponse `object`
  * NextToken
  * RequestedQuotas
    * items [RequestedServiceQuotaChange](#requestedservicequotachange)

### ListServiceQuotaIncreaseRequestsInTemplateRequest
* ListServiceQuotaIncreaseRequestsInTemplateRequest `object`
  * AwsRegion
  * MaxResults
  * NextToken
  * ServiceCode

### ListServiceQuotaIncreaseRequestsInTemplateResponse
* ListServiceQuotaIncreaseRequestsInTemplateResponse `object`
  * NextToken
  * ServiceQuotaIncreaseRequestInTemplateList
    * items [ServiceQuotaIncreaseRequestInTemplate](#servicequotaincreaserequestintemplate)

### ListServiceQuotasRequest
* ListServiceQuotasRequest `object`
  * MaxResults
  * NextToken
  * ServiceCode **required**

### ListServiceQuotasResponse
* ListServiceQuotasResponse `object`
  * NextToken
  * Quotas
    * items [ServiceQuota](#servicequota)

### ListServicesRequest
* ListServicesRequest `object`
  * MaxResults
  * NextToken

### ListServicesResponse
* ListServicesResponse `object`
  * NextToken
  * Services
    * items [ServiceInfo](#serviceinfo)

### MaxResults
* MaxResults `integer`

### MetricDimensionName
* MetricDimensionName `string`

### MetricDimensionValue
* MetricDimensionValue `string`

### MetricDimensionsMapDefinition
* MetricDimensionsMapDefinition `object`

### MetricInfo
* MetricInfo `object`: A structure that uses CloudWatch metrics to gather data about the service quota.
  * MetricDimensions
  * MetricName
  * MetricNamespace
  * MetricStatisticRecommendation

### NextToken
* NextToken `string`

### NoAvailableOrganizationException


### NoSuchResourceException


### OrganizationNotInAllFeaturesModeException


### PeriodUnit
* PeriodUnit `string` (values: MICROSECOND, MILLISECOND, SECOND, MINUTE, HOUR, DAY, WEEK)

### PeriodValue
* PeriodValue `integer`

### PutServiceQuotaIncreaseRequestIntoTemplateRequest
* PutServiceQuotaIncreaseRequestIntoTemplateRequest `object`
  * AwsRegion **required**
  * DesiredValue **required**
  * QuotaCode **required**
  * ServiceCode **required**

### PutServiceQuotaIncreaseRequestIntoTemplateResponse
* PutServiceQuotaIncreaseRequestIntoTemplateResponse `object`
  * ServiceQuotaIncreaseRequestInTemplate
    * AwsRegion
    * DesiredValue
    * GlobalQuota
    * QuotaCode
    * QuotaName
    * ServiceCode
    * ServiceName
    * Unit

### QuotaAdjustable
* QuotaAdjustable `boolean`

### QuotaArn
* QuotaArn `string`

### QuotaCode
* QuotaCode `string`

### QuotaExceededException


### QuotaMetricName
* QuotaMetricName `string`

### QuotaMetricNamespace
* QuotaMetricNamespace `string`

### QuotaName
* QuotaName `string`

### QuotaPeriod
* QuotaPeriod `object`: A structure that contains information about the quota period.
  * PeriodUnit
  * PeriodValue

### QuotaUnit
* QuotaUnit `string`

### QuotaValue
* QuotaValue `number`

### RequestId
* RequestId `string`

### RequestServiceQuotaIncreaseRequest
* RequestServiceQuotaIncreaseRequest `object`
  * DesiredValue **required**
  * QuotaCode **required**
  * ServiceCode **required**

### RequestServiceQuotaIncreaseResponse
* RequestServiceQuotaIncreaseResponse `object`
  * RequestedQuota
    * CaseId
    * Created
    * DesiredValue
    * GlobalQuota
    * Id
    * LastUpdated
    * QuotaArn
    * QuotaCode
    * QuotaName
    * Requester
    * ServiceCode
    * ServiceName
    * Status
    * Unit

### RequestStatus
* RequestStatus `string` (values: PENDING, CASE_OPENED, APPROVED, DENIED, CASE_CLOSED)

### RequestedServiceQuotaChange
* RequestedServiceQuotaChange `object`: A structure that contains information about a requested change for a quota.
  * CaseId
  * Created
  * DesiredValue
  * GlobalQuota
  * Id
  * LastUpdated
  * QuotaArn
  * QuotaCode
  * QuotaName
  * Requester
  * ServiceCode
  * ServiceName
  * Status
  * Unit

### RequestedServiceQuotaChangeHistoryListDefinition
* RequestedServiceQuotaChangeHistoryListDefinition `array`
  * items [RequestedServiceQuotaChange](#requestedservicequotachange)

### Requester
* Requester `string`

### ResourceAlreadyExistsException


### ServiceCode
* ServiceCode `string`

### ServiceException


### ServiceInfo
* ServiceInfo `object`: A structure that contains the <code>ServiceName</code> and <code>ServiceCode</code>. It does not include all details of the service quota. To get those values, use the <a>ListServiceQuotas</a> operation. 
  * ServiceCode
  * ServiceName

### ServiceInfoListDefinition
* ServiceInfoListDefinition `array`
  * items [ServiceInfo](#serviceinfo)

### ServiceName
* ServiceName `string`

### ServiceQuota
* ServiceQuota `object`: A structure that contains the full set of details that define the service quota.
  * Adjustable
  * ErrorReason
    * ErrorCode
    * ErrorMessage
  * GlobalQuota
  * Period
    * PeriodUnit
    * PeriodValue
  * QuotaArn
  * QuotaCode
  * QuotaName
  * ServiceCode
  * ServiceName
  * Unit
  * UsageMetric
    * MetricDimensions
    * MetricName
    * MetricNamespace
    * MetricStatisticRecommendation
  * Value

### ServiceQuotaIncreaseRequestInTemplate
* ServiceQuotaIncreaseRequestInTemplate `object`: A structure that contains information about one service quota increase request.
  * AwsRegion
  * DesiredValue
  * GlobalQuota
  * QuotaCode
  * QuotaName
  * ServiceCode
  * ServiceName
  * Unit

### ServiceQuotaIncreaseRequestInTemplateList
* ServiceQuotaIncreaseRequestInTemplateList `array`
  * items [ServiceQuotaIncreaseRequestInTemplate](#servicequotaincreaserequestintemplate)

### ServiceQuotaListDefinition
* ServiceQuotaListDefinition `array`
  * items [ServiceQuota](#servicequota)

### ServiceQuotaTemplateAssociationStatus
* ServiceQuotaTemplateAssociationStatus `string` (values: ASSOCIATED, DISASSOCIATED)

### ServiceQuotaTemplateNotInUseException


### Statistic
* Statistic `string`

### TemplatesNotAvailableInRegionException


### TooManyRequestsException



