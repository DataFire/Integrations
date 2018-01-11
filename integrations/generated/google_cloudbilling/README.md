# @datafire/google_cloudbilling

Client library for Google Cloud Billing

## Installation and Usage
```bash
npm install --save @datafire/google_cloudbilling
```
```js
let google_cloudbilling = require('@datafire/google_cloudbilling').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_cloudbilling.services.list({}).then(data => {
  console.log(data);
})
```

## Description

Allows developers to manage billing for their Google Cloud Platform projects
    programmatically.

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_cloudbilling.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_cloudbilling.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### billingAccounts.list
Lists the billing accounts that the current authenticated user
[owns](https://support.google.com/cloud/answer/4430947).


```js
google_cloudbilling.billingAccounts.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Requested page size. The maximum page size is 100; this is also the
  * pageToken `string`: A token identifying a page of results to return. This should be a
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListBillingAccountsResponse](#listbillingaccountsresponse)

### services.list
Lists all public cloud services.


```js
google_cloudbilling.services.list({}, context)
```

#### Input
* input `object`
  * pageSize `integer`: Requested page size. Defaults to 5000.
  * pageToken `string`: A token identifying a page of results to return. This should be a
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListServicesResponse](#listservicesresponse)

### billingAccounts.get
Gets information about a billing account. The current authenticated user
must be an [owner of the billing
account](https://support.google.com/cloud/answer/4430947).


```js
google_cloudbilling.billingAccounts.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the billing account to retrieve. For example,
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [BillingAccount](#billingaccount)

### projects.getBillingInfo
Gets the billing information for a project. The current authenticated user
must have [permission to view the
project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
).


```js
google_cloudbilling.projects.getBillingInfo({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the project for which billing information is
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ProjectBillingInfo](#projectbillinginfo)

### projects.updateBillingInfo
Sets or updates the billing account associated with a project. You specify
the new billing account by setting the `billing_account_name` in the
`ProjectBillingInfo` resource to the resource name of a billing account.
Associating a project with an open billing account enables billing on the
project and allows charges for resource usage. If the project already had a
billing account, this method changes the billing account used for resource
usage charges.

*Note:* Incurred charges that have not yet been reported in the transaction
history of the Google Cloud Console may be billed to the new billing
account, even if the charge occurred before the new billing account was
assigned to the project.

The current authenticated user must have ownership privileges for both the
[project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
) and the [billing
account](https://support.google.com/cloud/answer/4430947).

You can disable billing on the project by setting the
`billing_account_name` field to empty. This action disassociates the
current billing account from the project. Any billable activity of your
in-use services will stop, and your application could stop functioning as
expected. Any unbilled charges to date will be billed to the previously
associated account. The current authenticated user must be either an owner
of the project or an owner of the billing account for the project.

Note that associating a project with a *closed* billing account will have
much the same effect as disabling billing on the project: any paid
resources used by the project will be shut down. Thus, unless you wish to
disable billing, you should always call this method with the name of an
*open* billing account.


```js
google_cloudbilling.projects.updateBillingInfo({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the project associated with the billing information
  * body [ProjectBillingInfo](#projectbillinginfo)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ProjectBillingInfo](#projectbillinginfo)

### billingAccounts.projects.list
Lists the projects associated with a billing account. The current
authenticated user must be an [owner of the billing
account](https://support.google.com/cloud/answer/4430947).


```js
google_cloudbilling.billingAccounts.projects.list({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: The resource name of the billing account associated with the projects that
  * pageSize `integer`: Requested page size. The maximum page size is 100; this is also the
  * pageToken `string`: A token identifying a page of results to be returned. This should be a
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListProjectBillingInfoResponse](#listprojectbillinginforesponse)

### services.skus.list
Lists all publicly available SKUs for a given cloud service.


```js
google_cloudbilling.services.skus.list({
  "parent": ""
}, context)
```

#### Input
* input `object`
  * currencyCode `string`: The ISO 4217 currency code for the pricing info in the response proto.
  * endTime `string`: Optional exclusive end time of the time range for which the pricing
  * pageSize `integer`: Requested page size. Defaults to 5000.
  * pageToken `string`: A token identifying a page of results to return. This should be a
  * parent **required** `string`: The name of the service.
  * startTime `string`: Optional inclusive start time of the time range for which the pricing
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListSkusResponse](#listskusresponse)



## Definitions

### AggregationInfo
* AggregationInfo `object`: Represents the aggregation level and interval for pricing of a single SKU.
  * aggregationCount `integer`: The number of intervals to aggregate over.
  * aggregationInterval `string` (values: AGGREGATION_INTERVAL_UNSPECIFIED, DAILY, MONTHLY)
  * aggregationLevel `string` (values: AGGREGATION_LEVEL_UNSPECIFIED, ACCOUNT, PROJECT)

### BillingAccount
* BillingAccount `object`: A billing account in [Google Cloud
  * displayName `string`: The display name given to the billing account, such as `My Billing
  * name `string`: The resource name of the billing account. The resource name has the form
  * open `boolean`: True if the billing account is open, and will therefore be charged for any

### Category
* Category `object`: Represents the category hierarchy of a SKU.
  * resourceFamily `string`: The type of product the SKU refers to.
  * resourceGroup `string`: A group classification for related SKUs.
  * serviceDisplayName `string`: The display name of the service this SKU belongs to.
  * usageType `string`: Represents how the SKU is consumed.

### ListBillingAccountsResponse
* ListBillingAccountsResponse `object`: Response message for `ListBillingAccounts`.
  * billingAccounts `array`: A list of billing accounts.
    * items [BillingAccount](#billingaccount)
  * nextPageToken `string`: A token to retrieve the next page of results. To retrieve the next page,

### ListProjectBillingInfoResponse
* ListProjectBillingInfoResponse `object`: Request message for `ListProjectBillingInfoResponse`.
  * nextPageToken `string`: A token to retrieve the next page of results. To retrieve the next page,
  * projectBillingInfo `array`: A list of `ProjectBillingInfo` resources representing the projects
    * items [ProjectBillingInfo](#projectbillinginfo)

### ListServicesResponse
* ListServicesResponse `object`: Response message for `ListServices`.
  * nextPageToken `string`: A token to retrieve the next page of results. To retrieve the next page,
  * services `array`: A list of services.
    * items [Service](#service)

### ListSkusResponse
* ListSkusResponse `object`: Response message for `ListSkus`.
  * nextPageToken `string`: A token to retrieve the next page of results. To retrieve the next page,
  * skus `array`: The list of public SKUs of the given service.
    * items [Sku](#sku)

### Money
* Money `object`: Represents an amount of money with its currency type.
  * currencyCode `string`: The 3-letter currency code defined in ISO 4217.
  * nanos `integer`: Number of nano (10^-9) units of the amount.
  * units `string`: The whole units of the amount.

### PricingExpression
* PricingExpression `object`: Expresses a mathematical pricing formula. For Example:-
  * baseUnit `string`: The base unit for the SKU which is the unit used in usage exports.
  * baseUnitConversionFactor `number`: Conversion factor for converting from price per usage_unit to price per
  * baseUnitDescription `string`: The base unit in human readable form.
  * displayQuantity `number`: The recommended quantity of units for displaying pricing info. When
  * tieredRates `array`: The list of tiered rates for this pricing. The total cost is computed by
    * items [TierRate](#tierrate)
  * usageUnit `string`: The short hand for unit of usage this pricing is specified in.
  * usageUnitDescription `string`: The unit of usage in human readable form.

### PricingInfo
* PricingInfo `object`: Represents the pricing information for a SKU at a single point of time.
  * aggregationInfo [AggregationInfo](#aggregationinfo)
  * currencyConversionRate `number`: Conversion rate for currency conversion, from USD to the currency specified
  * effectiveTime `string`: The timestamp from which this pricing was effective.
  * pricingExpression [PricingExpression](#pricingexpression)
  * summary `string`: An optional human readable summary of the pricing information, has a

### ProjectBillingInfo
* ProjectBillingInfo `object`: Encapsulation of billing information for a Cloud Console project. A project
  * billingAccountName `string`: The resource name of the billing account associated with the project, if
  * billingEnabled `boolean`: True if the project is associated with an open billing account, to which
  * name `string`: The resource name for the `ProjectBillingInfo`; has the form
  * projectId `string`: The ID of the project that this `ProjectBillingInfo` represents, such as

### Service
* Service `object`: Encapsulates a single service in Google Cloud Platform.
  * displayName `string`: A human readable display name for this service.
  * name `string`: The resource name for the service.
  * serviceId `string`: The identifier for the service.

### Sku
* Sku `object`: Encapsulates a single SKU in Google Cloud Platform
  * category [Category](#category)
  * description `string`: A human readable description of the SKU, has a maximum length of 256
  * name `string`: The resource name for the SKU.
  * pricingInfo `array`: A timeline of pricing info for this SKU in chronological order.
    * items [PricingInfo](#pricinginfo)
  * serviceProviderName `string`: Identifies the service provider.
  * serviceRegions `array`: List of service regions this SKU is offered at.
    * items `string`
  * skuId `string`: The identifier for the SKU.

### TierRate
* TierRate `object`: The price rate indicating starting usage and its corresponding price.
  * startUsageAmount `number`: Usage is priced at this rate only after this amount.
  * unitPrice [Money](#money)


