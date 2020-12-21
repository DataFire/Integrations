# @datafire/azure_reservations_quota

Client library for Azure Reservation

## Installation and Usage
```bash
npm install --save @datafire/azure_reservations_quota
```
```js
let azure_reservations_quota = require('@datafire/azure_reservations_quota').create({
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

Microsoft Azure Quota Resource Provider.

## Actions

### AutoQuotaIncrease_GetProperties
Gets the Auto Quota Increase enrollment details for the specified subscription.


```js
azure_reservations_quota.AutoQuotaIncrease_GetProperties({
  "subscriptionId": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription id.
  * api-version **required** `string`: Api version.

#### Output
* output [AutoQuotaIncreaseDetail](#autoquotaincreasedetail)

### AutoQuotaIncrease_Create
Sets the Auto Quota Increase enrollment properties for the specified subscription.


```js
azure_reservations_quota.AutoQuotaIncrease_Create({
  "subscriptionId": "",
  "api-version": "",
  "autoQuotaIncreaseRequest": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription id.
  * api-version **required** `string`: Api version.
  * autoQuotaIncreaseRequest **required** [AutoQuotaIncreaseDetail](#autoquotaincreasedetail)

#### Output
* output [AutoQuotaIncreaseDetail](#autoquotaincreasedetail)

### Quotas_listStatus
This API gets the current quota limits and usages for the resource provider for the specified location. This response can be used to submit quotaRequests.


```js
azure_reservations_quota.Quotas_listStatus({
  "subscriptionId": "",
  "providerId": "",
  "location": "",
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription id.
  * providerId **required** `string`: Azure resource Provider id.
  * location **required** `string`: Azure region.
  * api-version **required** `string`: Api version.

#### Output
* output [QuotaLimits](#quotalimits)

### Quota_listStatus
This API gets the current quota limit and usages for the specific resource for resource provider for the specified location. This response can be used to submit quotaRequests.


```js
azure_reservations_quota.Quota_listStatus({
  "subscriptionId": "",
  "providerId": "",
  "location": "",
  "api-version": "",
  "resourceName": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription id.
  * providerId **required** `string`: Azure resource Provider id.
  * location **required** `string`: Azure region.
  * api-version **required** `string`: Api version.
  * resourceName **required** `string`: The Resource name for the specific resource provider, such as SKU name for Microsoft.Compute, pool for Microsoft.Batch.

#### Output
* output [CurrentQuotaLimitBase](#currentquotalimitbase)

### QuotaRequest_Update
Submits Quota change request for a resource provider for the specified location for the specific resource in the parameter. To use, first make a Get request to get quota information. This information consists of a list of resources and information regarding those resources. For all the resources in that list which require an update to their quotas, update their limit fields in the response from the Get request to their new values. Then, submit this updated JSON object to this quota request API. This will update the quota to the values specified. The location header in the response will be used to track the status of the quota request. Please check the provisioningState field in the response.


```js
azure_reservations_quota.QuotaRequest_Update({
  "subscriptionId": "",
  "providerId": "",
  "location": "",
  "resourceName": "",
  "api-version": "",
  "createQuotaRequest": {},
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription id.
  * providerId **required** `string`: Azure resource Provider id.
  * location **required** `string`: Azure region.
  * resourceName **required** `string`: The Resource name for the specific resource provider, such as SKU name for Microsoft.Compute, pool for Microsoft.Batch.
  * api-version **required** `string`: Api version.
  * createQuotaRequest **required** [CurrentQuotaLimitBase](#currentquotalimitbase)
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.

#### Output
* output [QuotaRequestOneResourceSubmitResponse](#quotarequestoneresourcesubmitresponse)

### QuotaRequest_Create
Submits Quota change request for a resource provider for the specified location for the specific resource in the parameter. To use, first make a Get request to get quota information. This information consists of a list of resources and information regarding those resources. For all the resources in that list which require an update to their quotas, update their limit fields in the response from the Get request to their new values. Then, submit this updated JSON object to this quota request API. This will update the quota to the values specified. The location header in the response will be used to track the status of the quota request. Please check the provisioningState field in the response.


```js
azure_reservations_quota.QuotaRequest_Create({
  "subscriptionId": "",
  "providerId": "",
  "location": "",
  "resourceName": "",
  "api-version": "",
  "createQuotaRequest": {},
  "If-Match": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription id.
  * providerId **required** `string`: Azure resource Provider id.
  * location **required** `string`: Azure region.
  * resourceName **required** `string`: The Resource name for the specific resource provider, such as SKU name for Microsoft.Compute, pool for Microsoft.Batch.
  * api-version **required** `string`: Api version.
  * createQuotaRequest **required** [CurrentQuotaLimitBase](#currentquotalimitbase)
  * If-Match **required** `string`: ETag of the Entity. ETag should match the current entity state from the header response of the GET request or it should be * for unconditional update.

#### Output
* output [QuotaRequestOneResourceSubmitResponse](#quotarequestoneresourcesubmitresponse)

### QuotaRequests_ListStatus
For the specified location and Resource provider gets the current quota requests under the subscription over the time period of one year ago from now to one year back. oData filter can be used to select quota requests.


```js
azure_reservations_quota.QuotaRequests_ListStatus({
  "subscriptionId": "",
  "api-version": "",
  "providerId": "",
  "location": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription id.
  * api-version **required** `string`: Api version.
  * providerId **required** `string`: Azure resource Provider id.
  * location **required** `string`: Azure region.
  * $filter `string`: | Field                    | Supported operators  
  * $top `integer`: Number of records to return.
  * $skiptoken `string`: Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls

#### Output
* output [QuotaRequestDetailsList](#quotarequestdetailslist)

### QuotaRequests_GetStatus
Gets the QuotaRequest details and status by the quota requestId for the resources for the resource provider at a specific location. The requestId is returned as response to the Put requests for serviceLimits.


```js
azure_reservations_quota.QuotaRequests_GetStatus({
  "subscriptionId": "",
  "api-version": "",
  "providerId": "",
  "location": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: Azure subscription id.
  * api-version **required** `string`: Api version.
  * providerId **required** `string`: Azure resource Provider id.
  * location **required** `string`: Azure region.
  * id **required** `string`: Quota Request id.

#### Output
* output [QuotaRequestDetails](#quotarequestdetails)



## Definitions

### Actions
* Actions `object`: The actions for auto quota increase.
  * emailActions `object`: The email actions for auto quota increase.
    * value `array`: The list of email actions.
      * items [EmailAction](#emailaction)
  * phoneActions `object`: The phone actions for auto quota increase.
    * value `array`: The list of phone actions.
      * items [PhoneAction](#phoneaction)

### AqiState
* AqiState `string` (values: enabled, disabled): The Auto quota increase state.

### AutoQuotaIncreaseDetail
* AutoQuotaIncreaseDetail `object`: Auto Quota Increase settings.
  * id `string`: The subscription Id.
  * name `string`: The name of the auto quota increase.
  * properties [autoQuotaIncreaseSettings](#autoquotaincreasesettings)
  * type `string`: The type of the resource

### ContactMethod
* ContactMethod `string` (values: Email, Phone): The contact method.

### CreateGenericQuotaRequestParameters
* CreateGenericQuotaRequestParameters `object`: Quota change requests information.
  * value `array`: Quota change requests.
    * items [CurrentQuotaLimitBase](#currentquotalimitbase)

### CurrentQuotaLimit
* CurrentQuotaLimit `object`: Quota limits.
  * properties [QuotaRequestStatusDetails](#quotarequeststatusdetails)
  * quotaInformation [CurrentQuotaLimitBase](#currentquotalimitbase)

### CurrentQuotaLimitBase
* CurrentQuotaLimitBase `object`: Quota limits.
  * currentValue `integer`: The current resource usages information.
  * limit `integer`: The quota limit.
  * name `object`: Name of the resource provide by the resource Provider. Please use this name property for quotaRequests.
    * localizedValue `string`: Resource display name.
    * value `string`: Resource name.
  * properties `object`: Additional properties for the specific resource provider.
  * quotaPeriod `string`: The quota period over which the usage values are summarized, such as - P1D (Per one day), PT1M (Per one minute), PT1S (Per one second). This parameter is optional because, for some resources like compute, the period doesn’t matter.
  * resourceType [ResourceTypesName](#resourcetypesname)
  * unit `string`:  The units of the limit, such as - Count, Bytes, etc. Use the unit field provided in the Get quota response.

### EmailAction
* EmailAction `object`: Email Action.
  * emailAddress `string`: The email address for the action.

### EmailActions
* EmailActions `object`: The email actions.
  * value `array`: The list of actions based on the success or failure of automatic quota increase action.
    * items [EmailAction](#emailaction)

### ExceptionResponse
* ExceptionResponse `object`: The api error.
  * error [ServiceError](#serviceerror)

### OnFailure
* OnFailure [Actions](#actions)

### OnSuccess
* OnSuccess [Actions](#actions)

### PhoneAction
* PhoneAction `object`: Phone Action.
  * phoneNumber `string`: The phone number for the action.
  * preferredChannel [ContactMethod](#contactmethod)

### QuotaLimits
* QuotaLimits `object`: Quota limits.
  * nextLink `string`: The uri to fetch the next page of quota limits. When there are no more pages, this is null.
  * value `array`: List of Quota limits.
    * items [CurrentQuotaLimitBase](#currentquotalimitbase)

### QuotaLimitsResponse
* QuotaLimitsResponse `object`: Quota limits request response.
  * nextLink `string`: The uri to fetch the next page of quota limits. When there are no more pages, this is null.
  * value `array`: List of Quota limits with the quota request status.
    * items [CurrentQuotaLimit](#currentquotalimit)

### QuotaRequestDetails
* QuotaRequestDetails `object`: The details of the quota Request.
  * id `string`: The quota request Id.
  * name `string`: The name of the quota request.
  * properties [QuotaRequestProperties](#quotarequestproperties)
  * type `string`: Type of resource. "Microsoft.Capacity/ServiceLimits"

### QuotaRequestDetailsList
* QuotaRequestDetailsList `object`: Quota requests information.
  * nextLink `string`: The uri to fetch the next page of quota limits. When there are no more pages, this is null.
  * value `array`: The quota Requests.
    * items [QuotaRequestDetails](#quotarequestdetails)

### QuotaRequestOneResourceSubmitResponse
* QuotaRequestOneResourceSubmitResponse `object`: Quota submit request response
  * id `string`: The quota request Id.
  * name `string`: The name of the quota request.
  * properties [quotaRequestOneResourceProperties](#quotarequestoneresourceproperties)
  * type `string`: Type of resource. "Microsoft.Capacity/ServiceLimits"

### QuotaRequestProperties
* QuotaRequestProperties `object`: The details of quota request.
  * message `string`: User friendly status message.
  * provisioningState [QuotaRequestState](#quotarequeststate)
  * requestSubmitTime `string`: The quota request submit time. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
  * value `array`: The quotaRequests.
    * items [SubRequest](#subrequest)

### QuotaRequestState
* QuotaRequestState `string` (values: Accepted, Invalid, Succeeded, Failed, InProgress): The quota request status.

### QuotaRequestStatusDetails
* QuotaRequestStatusDetails `object`: The quota request status details.
  * message `string`: A user friendly message.
  * provisioningState [QuotaRequestState](#quotarequeststate)

### QuotaRequestSubmitResponse
* QuotaRequestSubmitResponse `object`: Quota submit request response
  * id `string`: The quota request Id.
  * name `string`: The name of the quota request.
  * properties [QuotaRequestProperties](#quotarequestproperties)
  * type `string`: Type of resource. "Microsoft.Capacity/serviceLimits"

### QuotaRequestSubmitResponse201
* QuotaRequestSubmitResponse201 `object`: The quota request submit response with request id.
  * id `string`: The quota request id. Please use the requestId to check the request status.
  * name `string`: The operation Id
  * properties [QuotaRequestStatusDetails](#quotarequeststatusdetails)
  * type `string`: The resource type

### ResourceTypesName
* ResourceTypesName `string` (values: standard, dedicated, shared, serviceSpecific): The resource types.

### ServiceError
* ServiceError `object`: The api error details.
  * code `string`: The error code.
  * details `array`: The list of error details.
    * items [ServiceErrorDetail](#serviceerrordetail)
  * message `string`: The error message.

### ServiceErrorDetail
* ServiceErrorDetail `object`: The error details.
  * code `string`: The error code.
  * message `string`: The error message.

### SeverityTypes
* SeverityTypes `string` (values: Critical, Moderate, Minimal): The Severity types.

### SubRequest
* SubRequest `object`: The sub-request submitted with the quota request.
  * limit `integer`: The Resource limit.
  * message `string`: User friendly status message.
  * name `object`: The Resource name.
    * localizedValue `string`: Resource display name.
    * value `string`: Resource name.
  * provisioningState [QuotaRequestState](#quotarequeststate)
  * resourceType `string`: Resource type for which the quota check was made.
  * subRequestId `string`: Sub request id for individual request.
  * unit `string`:  The units of the limit, such as - Count, Bytes, etc. Use the unit field provided in the Get quota response.

### SupportContactTypes
* SupportContactTypes `string` (values: email, phone, chat): The support contact types.

### SupportRequestAction
* SupportRequestAction `object`: The SupportRequest action.
  * alternateEmailAddresses `array`: The alternate email address of the recipient.
    * items `string`: The email recipients.
  * autoQuotaIncreaseState [AqiState](#aqistate)
  * country `string`: The country of the recipient.
  * firstName `string`: The first name of the recipient.
  * lastName `string`: The last name of the recipient.
  * phoneNumber `string`: The phone number of the recipient.
  * preferredContactMethod [ContactMethod](#contactmethod)
  * primaryEmailAddress `string`: The primary email addresses of the recipients.
  * severity [SeverityTypes](#severitytypes)
  * supportLanguage `string`: The support language.

### aqiSettings
* aqiSettings `object`: Settings for auto quota increase.
  * autoQuotaIncreaseState [AqiState](#aqistate)

### autoQuotaIncreaseSettings
* autoQuotaIncreaseSettings `object`: Actions for auto quota increase.
  * onFailure [OnFailure](#onfailure)
  * onSuccess [OnSuccess](#onsuccess)
  * settings [aqiSettings](#aqisettings)
  * supportTicketAction [SupportRequestAction](#supportrequestaction)

### quotaRequestOneResourceProperties
* quotaRequestOneResourceProperties `object`: The details of quota request.
  * message `string`: User friendly status message.
  * properties [CurrentQuotaLimitBase](#currentquotalimitbase)
  * provisioningState [QuotaRequestState](#quotarequeststate)
  * requestSubmitTime `string`: The quota request submit time. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.


