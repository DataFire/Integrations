# @datafire/google_localservices

Client library for Local Services API

## Installation and Usage
```bash
npm install --save @datafire/google_localservices
```
```js
let google_localservices = require('@datafire/google_localservices').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### localservices.accountReports.search
Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.


```js
google_localservices.localservices.accountReports.search({}, context)
```

#### Input
* input `object`
  * endDate.day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * endDate.month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * endDate.year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  * pageSize `integer`: The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional.
  * pageToken `string`: The `next_page_token` value returned from a previous request to SearchAccountReports that indicates where listing should continue. Optional.
  * query `string`: A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Account Report for Manager with id 123. | Required.
  * startDate.day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * startDate.month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * startDate.year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse](#googleadshomeserviceslocalservicesv1searchaccountreportsresponse)

### localservices.detailedLeadReports.search
Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.


```js
google_localservices.localservices.detailedLeadReports.search({}, context)
```

#### Input
* input `object`
  * endDate.day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * endDate.month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * endDate.year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  * pageSize `integer`: The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional.
  * pageToken `string`: The `next_page_token` value returned from a previous request to SearchDetailedLeadReports that indicates where listing should continue. Optional.
  * query `string`: A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Detailed Lead Report for Manager with id | | | 123. | Required.
  * startDate.day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * startDate.month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * startDate.year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse](#googleadshomeserviceslocalservicesv1searchdetailedleadreportsresponse)



## Definitions

### GoogleAdsHomeservicesLocalservicesV1AccountReport
* GoogleAdsHomeservicesLocalservicesV1AccountReport `object`: An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range.
  * accountId `string`: Unique identifier of the GLS account.
  * aggregatorInfo [GoogleAdsHomeservicesLocalservicesV1AggregatorInfo](#googleadshomeserviceslocalservicesv1aggregatorinfo)
  * averageFiveStarRating `number`: Average review rating score from 1-5 stars.
  * averageWeeklyBudget `number`: Average weekly budget in the currency code of the account.
  * businessName `string`: Business name of the account.
  * currencyCode `string`: Currency code of the account.
  * currentPeriodChargedLeads `string`: Number of charged leads the account received in current specified period.
  * currentPeriodConnectedPhoneCalls `string`: Number of connected phone calls (duration over 30s) in current specified period.
  * currentPeriodPhoneCalls `string`: Number of phone calls in current specified period, including both connected and unconnected calls.
  * currentPeriodTotalCost `number`: Total cost of the account in current specified period in the account's specified currency.
  * phoneLeadResponsiveness `number`: Phone lead responsiveness of the account for the past 90 days from current date. This is computed by taking the total number of connected calls from charged phone leads and dividing by the total number of calls received.
  * previousPeriodChargedLeads `string`: Number of charged leads the account received in previous specified period.
  * previousPeriodConnectedPhoneCalls `string`: Number of connected phone calls (duration over 30s) in previous specified period.
  * previousPeriodPhoneCalls `string`: Number of phone calls in previous specified period, including both connected and unconnected calls.
  * previousPeriodTotalCost `number`: Total cost of the account in previous specified period in the account's specified currency.
  * totalReview `integer`: Total number of reviews the account has up to current date.

### GoogleAdsHomeservicesLocalservicesV1AggregatorInfo
* GoogleAdsHomeservicesLocalservicesV1AggregatorInfo `object`: Conatiner for aggregator specific information if lead is for an aggregator GLS account.
  * aggregatorProviderId `string`: Provider id (listed in aggregator system) which maps to a account id in GLS system.

### GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport
* GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport `object`: A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.
  * accountId `string`: Identifies account that received the lead.
  * aggregatorInfo [GoogleAdsHomeservicesLocalservicesV1AggregatorInfo](#googleadshomeserviceslocalservicesv1aggregatorinfo)
  * businessName `string`: Business name associated to the account.
  * chargeStatus `string` (values: CHARGE_STATUS_UNSPECIFIED, CHARGED, NOT_CHARGED): Whether the lead has been charged.
  * currencyCode `string`: Currency code.
  * disputeStatus `string`: Dispute status related to the lead.
  * geo `string`: Location of the associated account's home city.
  * leadCategory `string`: Lead category (e.g. hvac, plumber)
  * leadCreationTimestamp `string`: Timestamp of when the lead was created.
  * leadId `string`: Unique identifier of a Detailed Lead Report.
  * leadPrice `number`: Price of the lead (available only after it has been charged).
  * leadType `string` (values: LEAD_TYPE_UNSPECIFIED, MESSAGE, PHONE_CALL): Lead type.
  * messageLead [GoogleAdsHomeservicesLocalservicesV1MessageLead](#googleadshomeserviceslocalservicesv1messagelead)
  * phoneLead [GoogleAdsHomeservicesLocalservicesV1PhoneLead](#googleadshomeserviceslocalservicesv1phonelead)
  * timezone [GoogleTypeTimeZone](#googletypetimezone)

### GoogleAdsHomeservicesLocalservicesV1MessageLead
* GoogleAdsHomeservicesLocalservicesV1MessageLead `object`: Container for message lead specific information.
  * consumerPhoneNumber `string`: Consumer phone number associated with the message lead.
  * customerName `string`: Name of the customer who created the lead.
  * jobType `string`: The job type of the specified lead.
  * postalCode `string`: The postal code of the customer who created the lead.

### GoogleAdsHomeservicesLocalservicesV1PhoneLead
* GoogleAdsHomeservicesLocalservicesV1PhoneLead `object`: Container for phone lead specific information.
  * chargedCallTimestamp `string`: Timestamp of the phone call which resulted in a charged phone lead.
  * chargedConnectedCallDurationSeconds `string`: Duration of the charged phone call in seconds.
  * consumerPhoneNumber `string`: Consumer phone number associated with the phone lead.

### GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse
* GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse `object`: A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
  * accountReports `array`: List of account reports which maps 1:1 to a particular linked GLS account.
    * items [GoogleAdsHomeservicesLocalservicesV1AccountReport](#googleadshomeserviceslocalservicesv1accountreport)
  * nextPageToken `string`: Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set.

### GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse
* GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse `object`: A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.
  * detailedLeadReports `array`: List of detailed lead reports uniquely identified by external lead id.
    * items [GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport](#googleadshomeserviceslocalservicesv1detailedleadreport)
  * nextPageToken `string`: Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set.

### GoogleTypeTimeZone
* GoogleTypeTimeZone `object`: Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
  * id `string`: IANA Time Zone Database time zone, e.g. "America/New_York".
  * version `string`: Optional. IANA Time Zone Database version number, e.g. "2019a".


