# @datafire/google_partners

Client library for Google Partners

## Installation and Usage
```bash
npm install --save @datafire/google_partners
```
```js
let google_partners = require('@datafire/google_partners').create();

google_partners.users.updateProfile({}).then(data => {
  console.log(data);
})
```

## Description

Searches certified companies and creates contact leads with them, and also audits the usage of clients.

## Actions

### analytics.list
Lists analytics data for a user's associated company.
Should only be called within the context of an authorized logged in user.


```js
google_partners.analytics.list({}, context)
```

#### Input
* input `object`
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * pageToken `string`: A token identifying a page of results that the server returns.
  * pageSize `integer`: Requested page size. Server may return fewer analytics than requested.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [ListAnalyticsResponse](#listanalyticsresponse)

### clientMessages.log
Logs a generic message from the client, such as
`Failed to render component`, `Profile page is running slow`,
`More than 500 users have accessed this result.`, etc.


```js
google_partners.clientMessages.log({}, context)
```

#### Input
* input `object`
  * body [LogMessageRequest](#logmessagerequest)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [LogMessageResponse](#logmessageresponse)

### companies.list
Lists companies.


```js
google_partners.companies.list({}, context)
```

#### Input
* input `object`
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * pageToken `string`: A token identifying a page of results that the server returns.
  * companyName `string`: Company name to search for.
  * industries `array`: List of industries the company can help with.
  * websiteUrl `string`: Website URL that will help to find a better matched company.
  * gpsMotivations `array`: List of reasons for using Google Partner Search to get companies.
  * languageCodes `array`: List of language codes that company can support. Only primary language
  * pageSize `integer`: Requested page size. Server may return fewer companies than requested.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * orderBy `string`: How to order addresses within the returned companies. Currently, only
  * specializations `array`: List of specializations that the returned agencies should provide. If this
  * maxMonthlyBudget.currencyCode `string`: The 3-letter currency code defined in ISO 4217.
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * minMonthlyBudget.currencyCode `string`: The 3-letter currency code defined in ISO 4217.
  * view `string` (values: COMPANY_VIEW_UNSPECIFIED, CV_GOOGLE_PARTNER_SEARCH): The view of the `Company` resource to be returned. This must not be
  * requestMetadata.locale `string`: Locale to use for the current request.
  * address `string`: The address to use when searching for companies.
  * minMonthlyBudget.units `string`: The whole units of the amount.
  * maxMonthlyBudget.nanos `integer`: Number of nano (10^-9) units of the amount.
  * services `array`: List of services that the returned agencies should provide. If this is
  * maxMonthlyBudget.units `string`: The whole units of the amount.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * minMonthlyBudget.nanos `integer`: Number of nano (10^-9) units of the amount.
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [ListCompaniesResponse](#listcompaniesresponse)

### updateCompanies
Update company.
Should only be called within the context of an authorized logged in user.


```js
google_partners.updateCompanies({}, context)
```

#### Input
* input `object`
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * updateMask `string`: Standard field mask for the set of fields to be updated.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * body [Company](#company)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [Company](#company)

### companies.get
Gets a company.


```js
google_partners.companies.get({
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: The ID of the company to retrieve.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * currencyCode `string`: If the company's budget is in a different currency code than this one, then
  * orderBy `string`: How to order addresses within the returned company. Currently, only
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * view `string` (values: COMPANY_VIEW_UNSPECIFIED, CV_GOOGLE_PARTNER_SEARCH): The view of `Company` resource to be returned. This must not be
  * requestMetadata.locale `string`: Locale to use for the current request.
  * address `string`: The address to use for sorting the company's addresses by proximity.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [GetCompanyResponse](#getcompanyresponse)

### companies.leads.create
Creates an advertiser lead for the given company ID.


```js
google_partners.companies.leads.create({
  "companyId": ""
}, context)
```

#### Input
* input `object`
  * companyId **required** `string`: The ID of the company to contact.
  * body [CreateLeadRequest](#createleadrequest)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [CreateLeadResponse](#createleadresponse)

### exams.getToken
Gets an Exam Token for a Partner's user to take an exam in the Exams System


```js
google_partners.exams.getToken({
  "examType": ""
}, context)
```

#### Input
* input `object`
  * examType **required** `string` (values: CERTIFICATION_EXAM_TYPE_UNSPECIFIED, CET_ADWORDS_FUNDAMENTALS, CET_ADWORDS_ADVANCED_SEARCH, CET_ADWORDS_ADVANCED_DISPLAY, CET_VIDEO_ADS, CET_DOUBLECLICK, CET_ANALYTICS, CET_SHOPPING, CET_MOBILE, CET_DIGITAL_SALES, CET_MOBILE_SITES): The exam type we are requesting a token for.
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [ExamToken](#examtoken)

### leads.list
Lists advertiser leads for a user's associated company.
Should only be called within the context of an authorized logged in user.


```js
google_partners.leads.list({}, context)
```

#### Input
* input `object`
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * orderBy `string`: How to order Leads. Currently, only `create_time`
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * pageToken `string`: A token identifying a page of results that the server returns.
  * pageSize `integer`: Requested page size. Server may return fewer leads than requested.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [ListLeadsResponse](#listleadsresponse)

### updateLeads
Updates the specified lead.


```js
google_partners.updateLeads({}, context)
```

#### Input
* input `object`
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * updateMask `string`: Standard field mask for the set of fields to be updated.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * body [Lead](#lead)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [Lead](#lead)

### offers.list
Lists the Offers available for the current user


```js
google_partners.offers.list({}, context)
```

#### Input
* input `object`
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [ListOffersResponse](#listoffersresponse)

### offers.history.list
Lists the Historical Offers for the current user (or user's entire company)


```js
google_partners.offers.history.list({}, context)
```

#### Input
* input `object`
  * pageToken `string`: Token to retrieve a specific page.
  * pageSize `integer`: Maximum number of rows to return per page.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * entireCompany `boolean`: if true, show history for the entire company.  Requires user to be admin.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * orderBy `string`: Comma-separated list of fields to order by, e.g.: "foo,bar,baz".
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [ListOffersHistoryResponse](#listoffershistoryresponse)

### getPartnersstatus
Gets Partners Status of the logged in user's agency.
Should only be called if the logged in user is the admin of the agency.


```js
google_partners.getPartnersstatus({}, context)
```

#### Input
* input `object`
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [GetPartnersStatusResponse](#getpartnersstatusresponse)

### userEvents.log
Logs a user event.


```js
google_partners.userEvents.log({}, context)
```

#### Input
* input `object`
  * body [LogUserEventRequest](#logusereventrequest)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [LogUserEventResponse](#logusereventresponse)

### userStates.list
Lists states for current user.


```js
google_partners.userStates.list({}, context)
```

#### Input
* input `object`
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [ListUserStatesResponse](#listuserstatesresponse)

### users.updateProfile
Updates a user's profile. A user can only update their own profile and
should only be called within the context of a logged in user.


```js
google_partners.users.updateProfile({}, context)
```

#### Input
* input `object`
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * body [UserProfile](#userprofile)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [UserProfile](#userprofile)

### users.get
Gets a user.


```js
google_partners.users.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Identifier of the user. Can be set to <code>me</code> to mean the currently
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * userView `string` (values: BASIC, PROFILE, PUBLIC_PROFILE): Specifies what parts of the user information to return.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [User](#user)

### users.deleteCompanyRelation
Deletes a user's company relation. Unaffiliaites the user from a company.


```js
google_partners.users.deleteCompanyRelation({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The ID of the user. Can be set to <code>me</code> to mean
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [Empty](#empty)

### users.createCompanyRelation
Creates a user's company relation. Affiliates the user to a company.


```js
google_partners.users.createCompanyRelation({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: The ID of the user. Can be set to <code>me</code> to mean
  * requestMetadata.userOverrides.userId `string`: Logged-in user ID to impersonate instead of the user's ID.
  * requestMetadata.partnersSessionId `string`: Google Partners session ID.
  * requestMetadata.trafficSource.trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * requestMetadata.locale `string`: Locale to use for the current request.
  * requestMetadata.userOverrides.ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * requestMetadata.experimentIds `array`: Experiment IDs the current request belongs to.
  * requestMetadata.trafficSource.trafficSubId `string`: Second level identifier to indicate where the traffic comes from.
  * body [CompanyRelation](#companyrelation)
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * alt `string` (values: json, media, proto): Data format for response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * access_token `string`: OAuth access token.

#### Output
* output [CompanyRelation](#companyrelation)



## Definitions

### AdWordsManagerAccountInfo
* AdWordsManagerAccountInfo `object`: Information about a particular AdWords Manager Account.
  * customerName `string`: Name of the customer this account represents.
  * id `string`: The AdWords Manager Account id.

### Analytics
* Analytics `object`: Analytics data for a `Company` within a single day.
  * contacts [AnalyticsDataPoint](#analyticsdatapoint)
  * eventDate [Date](#date)
  * profileViews [AnalyticsDataPoint](#analyticsdatapoint)
  * searchViews [AnalyticsDataPoint](#analyticsdatapoint)

### AnalyticsDataPoint
* AnalyticsDataPoint `object`: Details of the analytics events for a `Company` within a single day.
  * eventCount `integer`: Number of times the type of event occurred.
  * eventLocations `array`: Location information of where these events occurred.
    * items [LatLng](#latlng)

### AnalyticsSummary
* AnalyticsSummary `object`: Analytics aggregated data for a `Company` for a given date range.
  * contactsCount `integer`: Aggregated number of times users contacted the `Company`
  * profileViewsCount `integer`: Aggregated number of profile views for the `Company` for given date range.
  * searchViewsCount `integer`: Aggregated number of times users saw the `Company`

### AvailableOffer
* AvailableOffer `object`: Available Offers to be distributed.
  * available `integer`: The number of codes for this offer that are available for distribution.
  * countryOfferInfos `array`: Offer info by country.
    * items [CountryOfferInfo](#countryofferinfo)
  * description `string`: Description of the offer.
  * id `string`: ID of this offer.
  * maxAccountAge `integer`: The maximum age of an account [in days] to be eligible.
  * name `string`: Name of the offer.
  * offerLevel `string` (values: OFFER_LEVEL_UNSPECIFIED, OFFER_LEVEL_DENY_PROBLEM, OFFER_LEVEL_DENY_CONTRACT, OFFER_LEVEL_MANUAL, OFFER_LEVEL_LIMIT_0, OFFER_LEVEL_LIMIT_5, OFFER_LEVEL_LIMIT_15, OFFER_LEVEL_LIMIT_50): Level of this offer.
  * offerType `string` (values: OFFER_TYPE_UNSPECIFIED, OFFER_TYPE_SPEND_X_GET_Y, OFFER_TYPE_VIDEO, OFFER_TYPE_SPEND_MATCH): Type of offer.
  * qualifiedCustomer `array`: Customers who qualify for this offer.
    * items [OfferCustomer](#offercustomer)
  * qualifiedCustomersComplete `boolean`: Whether or not the list of qualified customers is definitely complete.
  * showSpecialOfferCopy `boolean`: Should special text be shown on the offers page.
  * terms `string`: Terms of the offer.

### Certification
* Certification `object`: A user's information on a specific certification.
  * achieved `boolean`: Whether this certification has been achieved.
  * certificationType `string` (values: CERTIFICATION_TYPE_UNSPECIFIED, CT_ADWORDS, CT_YOUTUBE, CT_VIDEOADS, CT_ANALYTICS, CT_DOUBLECLICK, CT_SHOPPING, CT_MOBILE, CT_DIGITAL_SALES, CT_ADWORDS_SEARCH, CT_ADWORDS_DISPLAY, CT_MOBILE_SITES): The type of certification, the area of expertise.
  * expiration `string`: Date this certification is due to expire.
  * lastAchieved `string`: The date the user last achieved certification.
  * warning `boolean`: Whether this certification is in the state of warning.

### CertificationExamStatus
* CertificationExamStatus `object`: Status for a Google Partners certification exam.
  * numberUsersPass `integer`: The number of people who have passed the certification exam.
  * type `string` (values: CERTIFICATION_EXAM_TYPE_UNSPECIFIED, CET_ADWORDS_FUNDAMENTALS, CET_ADWORDS_ADVANCED_SEARCH, CET_ADWORDS_ADVANCED_DISPLAY, CET_VIDEO_ADS, CET_DOUBLECLICK, CET_ANALYTICS, CET_SHOPPING, CET_MOBILE, CET_DIGITAL_SALES, CET_MOBILE_SITES): The type of certification exam.

### CertificationStatus
* CertificationStatus `object`: Google Partners certification status.
  * examStatuses `array`: List of certification exam statuses.
    * items [CertificationExamStatus](#certificationexamstatus)
  * isCertified `boolean`: Whether certification is passing.
  * type `string` (values: CERTIFICATION_TYPE_UNSPECIFIED, CT_ADWORDS, CT_YOUTUBE, CT_VIDEOADS, CT_ANALYTICS, CT_DOUBLECLICK, CT_SHOPPING, CT_MOBILE, CT_DIGITAL_SALES, CT_ADWORDS_SEARCH, CT_ADWORDS_DISPLAY, CT_MOBILE_SITES): The type of the certification.
  * userCount `integer`: Number of people who are certified,

### Company
* Company `object`: A company resource in the Google Partners API. Once certified, it qualifies
  * additionalWebsites `array`: URL of the company's additional websites used to verify the dynamic badges.
    * items `string`
  * autoApprovalEmailDomains `array`: Email domains that allow users with a matching email address to get
    * items `string`
  * badgeTier `string` (values: BADGE_TIER_NONE, BADGE_TIER_REGULAR, BADGE_TIER_PREMIER): Partner badge tier
  * certificationStatuses `array`: The list of Google Partners certification statuses for the company.
    * items [CertificationStatus](#certificationstatus)
  * companyTypes `array`: Company type labels listed on the company's profile.
    * items `string` (values: COMPANY_TYPE_UNSPECIFIED, FULL_SERVICE_AGENCY, MEDIA_AGENCY, CREATIVE_AGENCY, CDIGITAL_AGENCY, SEM_SEO, PERFORMANCE_MARKETING, ADVERTISING_TOOL_DEVELOPMENT, PR, SELF_MANAGED, RESELLER)
  * convertedMinMonthlyBudget [Money](#money)
  * id `string`: The ID of the company.
  * industries `array`: Industries the company can help with.
    * items `string` (values: INDUSTRY_UNSPECIFIED, I_AUTOMOTIVE, I_BUSINESS_TO_BUSINESS, I_CONSUMER_PACKAGED_GOODS, I_EDUCATION, I_FINANCE, I_HEALTHCARE, I_MEDIA_AND_ENTERTAINMENT, I_RETAIL, I_TECHNOLOGY, I_TRAVEL)
  * localizedInfos `array`: The list of localized info for the company.
    * items [LocalizedCompanyInfo](#localizedcompanyinfo)
  * locations `array`: The list of all company locations.
    * items [Location](#location)
  * name `string`: The name of the company.
  * originalMinMonthlyBudget [Money](#money)
  * primaryAdwordsManagerAccountId `string`: The Primary AdWords Manager Account id.
  * primaryLanguageCode `string`: The primary language code of the company, as defined by
  * primaryLocation [Location](#location)
  * profileStatus `string` (values: COMPANY_PROFILE_STATUS_UNSPECIFIED, HIDDEN, PUBLISHED, SEARCHABLE): The public viewability status of the company's profile.
  * publicProfile [PublicProfile](#publicprofile)
  * ranks `array`: Information related to the ranking of the company within the list of
    * items [Rank](#rank)
  * services `array`: Services the company can help with.
    * items `string` (values: SERVICE_UNSPECIFIED, S_ADVANCED_ADWORDS_SUPPORT, S_ADVERTISING_ON_GOOGLE, S_AN_ENHANCED_WEBSITE, S_AN_ONLINE_MARKETING_PLAN, S_MOBILE_AND_VIDEO_ADS, S_MOBILE_WEBSITE_SERVICES)
  * specializationStatus `array`: The list of Google Partners specialization statuses for the company.
    * items [SpecializationStatus](#specializationstatus)
  * websiteUrl `string`: URL of the company's website.

### CompanyRelation
* CompanyRelation `object`: A CompanyRelation resource representing information about a user's
  * address `string`: The primary address for this company.
  * badgeTier `string` (values: BADGE_TIER_NONE, BADGE_TIER_REGULAR, BADGE_TIER_PREMIER): Whether the company is a Partner.
  * companyAdmin `boolean`: Indicates if the user is an admin for this company.
  * companyId `string`: The ID of the company. There may be no id if this is a
  * creationTime `string`: The timestamp of when affiliation was requested.
  * internalCompanyId `string`: The internal company ID.
  * isPending `boolean`: The flag that indicates if the company is pending verification.
  * logoUrl `string`: A URL to a profile photo, e.g. a G+ profile photo.
  * managerAccount `string`: The AdWords manager account # associated this company.
  * name `string`: The name (in the company's primary language) for the company.
  * phoneNumber `string`: The phone number for the company's primary address.
  * primaryAddress [Location](#location)
  * primaryCountryCode `string`: The primary country code of the company.
  * primaryLanguageCode `string`: The primary language code of the company.
  * resolvedTimestamp `string`: The timestamp when the user was approved.
  * segment `array`: The segment the company is classified as.
    * items `string` (values: COMPANY_SEGMENT_UNKNOWN, COMPANY_SEGMENT_NAL, COMPANY_SEGMENT_PSP, COMPANY_SEGMENT_PPSP)
  * specializationStatus `array`: The list of Google Partners specialization statuses for the company.
    * items [SpecializationStatus](#specializationstatus)
  * state `string` (values: USER_COMPANY_REATION_STATE_NONE_SPECIFIED, USER_COMPANY_RELATION_STATE_AWAIT_EMAIL, USER_COMPANY_RELATION_STATE_AWAIT_ADMIN, USER_COMPANY_RELATION_STATE_APPROVED): The state of relationship, in terms of approvals.
  * website `string`: The website URL for this company.

### CountryOfferInfo
* CountryOfferInfo `object`: Offer info by country.
  * getYAmount `string`: (localized) Get Y amount for that country's offer.
  * offerCountryCode `string`: Country code for which offer codes may be requested.
  * offerType `string` (values: OFFER_TYPE_UNSPECIFIED, OFFER_TYPE_SPEND_X_GET_Y, OFFER_TYPE_VIDEO, OFFER_TYPE_SPEND_MATCH): Type of offer country is eligible for.
  * spendXAmount `string`: (localized) Spend X amount for that country's offer.

### CreateLeadRequest
* CreateLeadRequest `object`: Request message for CreateLead.
  * lead [Lead](#lead)
  * recaptchaChallenge [RecaptchaChallenge](#recaptchachallenge)
  * requestMetadata [RequestMetadata](#requestmetadata)

### CreateLeadResponse
* CreateLeadResponse `object`: Response message for CreateLead.
  * lead [Lead](#lead)
  * recaptchaStatus `string` (values: RECAPTCHA_STATUS_UNSPECIFIED, RS_NOT_NEEDED, RS_PASSED, RS_FAILED): The outcome of <a href="https://www.google.com/recaptcha/">reCaptcha</a>
  * responseMetadata [ResponseMetadata](#responsemetadata)

### Date
* Date `object`: Represents a whole calendar date, e.g. date of birth. The time of day and
  * day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month, or 0
  * month `integer`: Month of year. Must be from 1 to 12.
  * year `integer`: Year of date. Must be from 1 to 9999, or 0 if specifying a date without

### DebugInfo
* DebugInfo `object`: Debug information about this request.
  * serverInfo `string`: Info about the server that serviced this request.
  * serverTraceInfo `string`: Server-side debug stack trace.
  * serviceUrl `string`: URL of the service that handled this request.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### EventData
* EventData `object`: Key value data pair for an event.
  * key `string` (values: EVENT_DATA_TYPE_UNSPECIFIED, ACTION, AGENCY_ID, AGENCY_NAME, AGENCY_PHONE_NUMBER, AGENCY_WEBSITE, BUDGET, CENTER_POINT, CERTIFICATION, COMMENT, COUNTRY, CURRENCY, CURRENTLY_VIEWED_AGENCY_ID, DISTANCE, DISTANCE_TYPE, EXAM, HISTORY_TOKEN, ID, INDUSTRY, INSIGHT_TAG, LANGUAGE, LOCATION, MARKETING_OPT_IN, QUERY, SEARCH_START_INDEX, SERVICE, SHOW_VOW, SOLUTION, TRAFFIC_SOURCE_ID, TRAFFIC_SUB_ID, VIEW_PORT, WEBSITE, DETAILS, EXPERIMENT_ID, GPS_MOTIVATION, URL, ELEMENT_FOCUS, PROGRESS): Data type.
  * values `array`: Data values.
    * items `string`

### ExamStatus
* ExamStatus `object`: A user's information on a specific exam.
  * examType `string` (values: CERTIFICATION_EXAM_TYPE_UNSPECIFIED, CET_ADWORDS_FUNDAMENTALS, CET_ADWORDS_ADVANCED_SEARCH, CET_ADWORDS_ADVANCED_DISPLAY, CET_VIDEO_ADS, CET_DOUBLECLICK, CET_ANALYTICS, CET_SHOPPING, CET_MOBILE, CET_DIGITAL_SALES, CET_MOBILE_SITES): The type of the exam.
  * expiration `string`: Date this exam is due to expire.
  * lastPassed `string`: The date the user last passed this exam.
  * passed `boolean`: Whether this exam has been passed and not expired.
  * taken `string`: The date the user last taken this exam.
  * warning `boolean`: Whether this exam is in the state of warning.

### ExamToken
* ExamToken `object`: A token that allows a user to take an exam.
  * examId `string`: The id of the exam the token is for.
  * examType `string` (values: CERTIFICATION_EXAM_TYPE_UNSPECIFIED, CET_ADWORDS_FUNDAMENTALS, CET_ADWORDS_ADVANCED_SEARCH, CET_ADWORDS_ADVANCED_DISPLAY, CET_VIDEO_ADS, CET_DOUBLECLICK, CET_ANALYTICS, CET_SHOPPING, CET_MOBILE, CET_DIGITAL_SALES, CET_MOBILE_SITES): The type of the exam the token belongs to.
  * token `string`: The token, only present if the user has access to the exam.

### GetCompanyResponse
* GetCompanyResponse `object`: Response message for GetCompany.
  * company [Company](#company)
  * responseMetadata [ResponseMetadata](#responsemetadata)

### GetPartnersStatusResponse
* GetPartnersStatusResponse `object`: Response message for
  * responseMetadata [ResponseMetadata](#responsemetadata)

### HistoricalOffer
* HistoricalOffer `object`: Historical information about a Google Partners Offer.
  * adwordsUrl `string`: Client's AdWords page URL.
  * clientEmail `string`: Email address for client.
  * clientId `string`: ID of client.
  * clientName `string`: Name of the client.
  * creationTime `string`: Time offer was first created.
  * expirationTime `string`: Time this offer expires.
  * lastModifiedTime `string`: Time last action was taken.
  * offerCode `string`: Offer code.
  * offerCountryCode `string`: Country Code for the offer country.
  * offerType `string` (values: OFFER_TYPE_UNSPECIFIED, OFFER_TYPE_SPEND_X_GET_Y, OFFER_TYPE_VIDEO, OFFER_TYPE_SPEND_MATCH): Type of offer.
  * senderName `string`: Name (First + Last) of the partners user to whom the incentive is allocated.
  * status `string` (values: OFFER_STATUS_UNSPECIFIED, OFFER_STATUS_DISTRIBUTED, OFFER_STATUS_REDEEMED, OFFER_STATUS_AWARDED, OFFER_STATUS_EXPIRED): Status of the offer.

### LatLng
* LatLng `object`: An object representing a latitude/longitude pair. This is expressed as a pair
  * latitude `number`: The latitude in degrees. It must be in the range [-90.0, +90.0].
  * longitude `number`: The longitude in degrees. It must be in the range [-180.0, +180.0].

### Lead
* Lead `object`: A lead resource that represents an advertiser contact for a `Company`. These
  * adwordsCustomerId `string`: The AdWords Customer ID of the lead.
  * comments `string`: Comments lead source gave.
  * createTime `string`: Timestamp of when this lead was created.
  * email `string`: Email address of lead source.
  * familyName `string`: Last name of lead source.
  * givenName `string`: First name of lead source.
  * gpsMotivations `array`: List of reasons for using Google Partner Search and creating a lead.
    * items `string` (values: GPS_MOTIVATION_UNSPECIFIED, GPSM_HELP_WITH_ADVERTISING, GPSM_HELP_WITH_WEBSITE, GPSM_NO_WEBSITE)
  * id `string`: ID of the lead.
  * languageCode `string`: Language code of the lead's language preference, as defined by
  * marketingOptIn `boolean`: Whether or not the lead signed up for marketing emails
  * minMonthlyBudget [Money](#money)
  * phoneNumber `string`: Phone number of lead source.
  * state `string` (values: LEAD_STATE_UNSPECIFIED, LEAD, CONTACTED, CLIENT, OTHER): The lead's state in relation to the company.
  * type `string` (values: LEAD_TYPE_UNSPECIFIED, LT_GPS): Type of lead.
  * websiteUrl `string`: Website URL of lead source.

### ListAnalyticsResponse
* ListAnalyticsResponse `object`: Response message for
  * analytics `array`: The list of analytics.
    * items [Analytics](#analytics)
  * analyticsSummary [AnalyticsSummary](#analyticssummary)
  * nextPageToken `string`: A token to retrieve next page of results.
  * responseMetadata [ResponseMetadata](#responsemetadata)

### ListCompaniesResponse
* ListCompaniesResponse `object`: Response message for
  * companies `array`: The list of companies.
    * items [Company](#company)
  * nextPageToken `string`: A token to retrieve next page of results.
  * responseMetadata [ResponseMetadata](#responsemetadata)

### ListLeadsResponse
* ListLeadsResponse `object`: Response message for ListLeads.
  * leads `array`: The list of leads.
    * items [Lead](#lead)
  * nextPageToken `string`: A token to retrieve next page of results.
  * responseMetadata [ResponseMetadata](#responsemetadata)
  * totalSize `integer`: The total count of leads for the given company.

### ListOffersHistoryResponse
* ListOffersHistoryResponse `object`: Response for ListOfferHistory.
  * canShowEntireCompany `boolean`: True if the user has the option to show entire company history.
  * nextPageToken `string`: Supply this token in a ListOffersHistoryRequest to retrieve the next page.
  * offers `array`: Historical offers meeting request.
    * items [HistoricalOffer](#historicaloffer)
  * responseMetadata [ResponseMetadata](#responsemetadata)
  * showingEntireCompany `boolean`: True if this response is showing entire company history.
  * totalResults `integer`: Number of results across all pages.

### ListOffersResponse
* ListOffersResponse `object`: Response for ListOffer.
  * availableOffers `array`: Available Offers to be distributed.
    * items [AvailableOffer](#availableoffer)
  * noOfferReason `string` (values: NO_OFFER_REASON_UNSPECIFIED, NO_OFFER_REASON_NO_MCC, NO_OFFER_REASON_LIMIT_REACHED, NO_OFFER_REASON_INELIGIBLE): Reason why no Offers are available.
  * responseMetadata [ResponseMetadata](#responsemetadata)

### ListUserStatesResponse
* ListUserStatesResponse `object`: Response message for
  * responseMetadata [ResponseMetadata](#responsemetadata)
  * userStates `array`: User's states.
    * items `string` (values: USER_STATE_UNSPECIFIED, US_REQUIRES_RECAPTCHA_FOR_GPS_CONTACT)

### LocalizedCompanyInfo
* LocalizedCompanyInfo `object`: The localized company information.
  * countryCodes `array`: List of country codes for the localized company info.
    * items `string`
  * displayName `string`: Localized display name.
  * languageCode `string`: Language code of the localized company info, as defined by
  * overview `string`: Localized brief description that the company uses to advertise themselves.

### Location
* Location `object`: A location with address and geographic coordinates. May optionally contain a
  * address `string`: The single string version of the address.
  * addressLine `array`: The following address lines represent the most specific part of any
    * items `string`
  * administrativeArea `string`: Top-level administrative subdivision of this country.
  * dependentLocality `string`: Dependent locality or sublocality. Used for UK dependent localities, or
  * languageCode `string`: Language code of the address. Should be in BCP 47 format.
  * latLng [LatLng](#latlng)
  * locality `string`: Generally refers to the city/town portion of an address.
  * postalCode `string`: Values are frequently alphanumeric.
  * regionCode `string`: CLDR (Common Locale Data Repository) region code .
  * sortingCode `string`: Use of this code is very country-specific, but will refer to a secondary

### LogMessageRequest
* LogMessageRequest `object`: Request message for
  * clientInfo `object`: Map of client info, such as URL, browser navigator, browser platform, etc.
  * details `string`: Details about the client message.
  * level `string` (values: MESSAGE_LEVEL_UNSPECIFIED, ML_FINE, ML_INFO, ML_WARNING, ML_SEVERE): Message level of client message.
  * requestMetadata [RequestMetadata](#requestmetadata)

### LogMessageResponse
* LogMessageResponse `object`: Response message for
  * responseMetadata [ResponseMetadata](#responsemetadata)

### LogUserEventRequest
* LogUserEventRequest `object`: Request message for
  * eventAction `string` (values: EVENT_ACTION_UNSPECIFIED, SMB_CLICKED_FIND_A_PARTNER_BUTTON_BOTTOM, SMB_CLICKED_FIND_A_PARTNER_BUTTON_TOP, AGENCY_CLICKED_JOIN_NOW_BUTTON_BOTTOM, AGENCY_CLICKED_JOIN_NOW_BUTTON_TOP, SMB_CANCELED_PARTNER_CONTACT_FORM, SMB_CLICKED_CONTACT_A_PARTNER, SMB_COMPLETED_PARTNER_CONTACT_FORM, SMB_ENTERED_EMAIL_IN_CONTACT_PARTNER_FORM, SMB_ENTERED_NAME_IN_CONTACT_PARTNER_FORM, SMB_ENTERED_PHONE_IN_CONTACT_PARTNER_FORM, SMB_FAILED_RECAPTCHA_IN_CONTACT_PARTNER_FORM, PARTNER_VIEWED_BY_SMB, SMB_CANCELED_PARTNER_CONTACT_FORM_ON_GPS, SMB_CHANGED_A_SEARCH_PARAMETER_TOP, SMB_CLICKED_CONTACT_A_PARTNER_ON_GPS, SMB_CLICKED_SHOW_MORE_PARTNERS_BUTTON_BOTTOM, SMB_COMPLETED_PARTNER_CONTACT_FORM_ON_GPS, SMB_NO_PARTNERS_AVAILABLE_WITH_SEARCH_CRITERIA, SMB_PERFORMED_SEARCH_ON_GPS, SMB_VIEWED_A_PARTNER_ON_GPS, SMB_CANCELED_PARTNER_CONTACT_FORM_ON_PROFILE_PAGE, SMB_CLICKED_CONTACT_A_PARTNER_ON_PROFILE_PAGE, SMB_CLICKED_PARTNER_WEBSITE, SMB_COMPLETED_PARTNER_CONTACT_FORM_ON_PROFILE_PAGE, SMB_VIEWED_A_PARTNER_PROFILE, AGENCY_CLICKED_ACCEPT_TOS_BUTTON, AGENCY_CHANGED_TOS_COUNTRY, AGENCY_ADDED_ADDRESS_IN_MY_PROFILE_PORTAL, AGENCY_ADDED_PHONE_NUMBER_IN_MY_PROFILE_PORTAL, AGENCY_CHANGED_PRIMARY_ACCOUNT_ASSOCIATION, AGENCY_CHANGED_PRIMARY_COUNTRY_ASSOCIATION, AGENCY_CLICKED_AFFILIATE_BUTTON_IN_MY_PROFILE_IN_PORTAL, AGENCY_CLICKED_GIVE_EDIT_ACCESS_IN_MY_PROFILE_PORTAL, AGENCY_CLICKED_LOG_OUT_IN_MY_PROFILE_PORTAL, AGENCY_CLICKED_MY_PROFILE_LEFT_NAV_IN_PORTAL, AGENCY_CLICKED_SAVE_AND_CONTINUE_AT_BOT_OF_COMPLETE_PROFILE, AGENCY_CLICKED_UNAFFILIATE_IN_MY_PROFILE_PORTAL, AGENCY_FILLED_OUT_COMP_AFFILIATION_IN_MY_PROFILE_PORTAL, AGENCY_SUCCESSFULLY_CONNECTED_WITH_COMPANY_IN_MY_PROFILE, AGENCY_CLICKED_CREATE_MCC_IN_MY_PROFILE_PORTAL, AGENCY_DIDNT_HAVE_AN_MCC_ASSOCIATED_ON_COMPLETE_PROFILE, AGENCY_HAD_AN_MCC_ASSOCIATED_ON_COMPLETE_PROFILE, AGENCY_ADDED_JOB_FUNCTION_IN_MY_PROFILE_PORTAL, AGENCY_LOOKED_AT_JOB_FUNCTION_DROP_DOWN, AGENCY_SELECTED_ACCOUNT_MANAGER_AS_JOB_FUNCTION, AGENCY_SELECTED_ACCOUNT_PLANNER_AS_JOB_FUNCTION, AGENCY_SELECTED_ANALYTICS_AS_JOB_FUNCTION, AGENCY_SELECTED_CREATIVE_AS_JOB_FUNCTION, AGENCY_SELECTED_MEDIA_BUYER_AS_JOB_FUNCTION, AGENCY_SELECTED_MEDIA_PLANNER_AS_JOB_FUNCTION, AGENCY_SELECTED_OTHER_AS_JOB_FUNCTION, AGENCY_SELECTED_PRODUCTION_AS_JOB_FUNCTION, AGENCY_SELECTED_SEO_AS_JOB_FUNCTION, AGENCY_SELECTED_SALES_REP_AS_JOB_FUNCTION, AGENCY_SELECTED_SEARCH_SPECIALIST_AS_JOB_FUNCTION, AGENCY_ADDED_CHANNELS_IN_MY_PROFILE_PORTAL, AGENCY_LOOKED_AT_ADD_CHANNEL_DROP_DOWN, AGENCY_SELECTED_CROSS_CHANNEL_FROM_ADD_CHANNEL, AGENCY_SELECTED_DISPLAY_FROM_ADD_CHANNEL, AGENCY_SELECTED_MOBILE_FROM_ADD_CHANNEL, AGENCY_SELECTED_SEARCH_FROM_ADD_CHANNEL, AGENCY_SELECTED_SOCIAL_FROM_ADD_CHANNEL, AGENCY_SELECTED_TOOLS_FROM_ADD_CHANNEL, AGENCY_SELECTED_YOUTUBE_FROM_ADD_CHANNEL, AGENCY_ADDED_INDUSTRIES_IN_MY_PROFILE_PORTAL, AGENCY_CHANGED_ADD_INDUSTRIES_DROP_DOWN, AGENCY_ADDED_MARKETS_IN_MY_PROFILE_PORTAL, AGENCY_CHANGED_ADD_MARKETS_DROP_DOWN, AGENCY_CHECKED_RECIEVE_MAIL_PROMOTIONS_MYPROFILE, AGENCY_CHECKED_RECIEVE_MAIL_PROMOTIONS_SIGNUP, AGENCY_SELECTED_OPT_IN_BETA_TESTS_AND_MKT_RESEARCH, AGENCY_SELECTED_OPT_IN_BETA_TESTS_IN_MY_PROFILE_PORTAL, AGENCY_SELECTED_OPT_IN_NEWS_IN_MY_PROFILE_PORTAL, AGENCY_SELECTED_OPT_IN_NEWS_INVITATIONS_AND_PROMOS, AGENCY_SELECTED_OPT_IN_PERFORMANCE_SUG_IN_MY_PROFILE_PORTAL, AGENCY_SELECTED_OPT_IN_PERFORMANCE_SUGGESTIONS, AGENCY_SELECTED_OPT_IN_SELECT_ALL_EMAIL_NOTIFICATIONS, AGENCY_SELECTED_SELECT_ALL_OPT_INS_IN_MY_PROFILE_PORTAL, AGENCY_CLICKED_BACK_BUTTON_ON_CONNECT_WITH_COMPANY, AGENCY_CLICKED_CONTINUE_TO_OVERVIEW_ON_CONNECT_WITH_COMPANY, AGECNY_CLICKED_CREATE_MCC_CONNECT_WITH_COMPANY_NOT_FOUND, AGECNY_CLICKED_GIVE_EDIT_ACCESS_CONNECT_WITH_COMPANY_NOT_FOUND, AGECNY_CLICKED_LOG_OUT_CONNECT_WITH_COMPANY_NOT_FOUND, AGENCY_CLICKED_SKIP_FOR_NOW_ON_CONNECT_WITH_COMPANY_PAGE, AGENCY_CLOSED_CONNECTED_TO_COMPANY_X_BUTTON_WRONG_COMPANY, AGENCY_COMPLETED_FIELD_CONNECT_WITH_COMPANY, AGECNY_FOUND_COMPANY_TO_CONNECT_WITH, AGENCY_SUCCESSFULLY_CREATED_COMPANY, AGENCY_ADDED_NEW_COMPANY_LOCATION, AGENCY_CLICKED_COMMUNITY_JOIN_NOW_LINK_IN_PORTAL_NOTIFICATIONS, AGENCY_CLICKED_CONNECT_TO_COMPANY_LINK_IN_PORTAL_NOTIFICATIONS, AGENCY_CLICKED_GET_CERTIFIED_LINK_IN_PORTAL_NOTIFICATIONS, AGENCY_CLICKED_GET_VIDEO_ADS_CERTIFIED_LINK_IN_PORTAL_NOTIFICATIONS, AGENCY_CLICKED_LINK_TO_MCC_LINK_IN_PORTAL_NOTIFICATIONS, AGENCY_CLICKED_INSIGHT_CONTENT_IN_PORTAL, AGENCY_CLICKED_INSIGHTS_VIEW_NOW_PITCH_DECKS_IN_PORTAL, AGENCY_CLICKED_INSIGHTS_LEFT_NAV_IN_PORTAL, AGENCY_CLICKED_INSIGHTS_UPLOAD_CONTENT, AGENCY_CLICKED_INSIGHTS_VIEWED_DEPRECATED, AGENCY_CLICKED_COMMUNITY_LEFT_NAV_IN_PORTAL, AGENCY_CLICKED_JOIN_COMMUNITY_BUTTON_COMMUNITY_PORTAL, AGENCY_CLICKED_CERTIFICATIONS_LEFT_NAV_IN_PORTAL, AGENCY_CLICKED_CERTIFICATIONS_PRODUCT_LEFT_NAV_IN_PORTAL, AGENCY_CLICKED_PARTNER_STATUS_LEFT_NAV_IN_PORTAL, AGENCY_CLICKED_PARTNER_STATUS_PRODUCT_LEFT_NAV_IN_PORTAL, AGENCY_CLICKED_OFFERS_LEFT_NAV_IN_PORTAL, AGENCY_CLICKED_SEND_BUTTON_ON_OFFERS_PAGE, AGENCY_CLICKED_EXAM_DETAILS_ON_CERT_ADWORDS_PAGE, AGENCY_CLICKED_SEE_EXAMS_CERTIFICATION_MAIN_PAGE, AGENCY_CLICKED_TAKE_EXAM_ON_CERT_EXAM_PAGE, AGENCY_OPENED_LAST_ADMIN_DIALOG, AGENCY_OPENED_DIALOG_WITH_NO_USERS, AGENCY_PROMOTED_USER_TO_ADMIN, AGENCY_UNAFFILIATED, AGENCY_CHANGED_ROLES, SMB_CLICKED_COMPANY_NAME_LINK_TO_PROFILE, SMB_VIEWED_ADWORDS_CERTIFICATE, SMB_VIEWED_ADWORDS_SEARCH_CERTIFICATE, SMB_VIEWED_ADWORDS_DISPLAY_CERTIFICATE, SMB_CLICKED_ADWORDS_CERTIFICATE_HELP_ICON, SMB_VIEWED_ANALYTICS_CERTIFICATE, SMB_VIEWED_DOUBLECLICK_CERTIFICATE, SMB_VIEWED_MOBILE_SITES_CERTIFICATE, SMB_VIEWED_VIDEO_ADS_CERTIFICATE, SMB_VIEWED_SHOPPING_CERTIFICATE, SMB_CLICKED_VIDEO_ADS_CERTIFICATE_HELP_ICON, SMB_VIEWED_DIGITAL_SALES_CERTIFICATE, CLICKED_HELP_AT_BOTTOM, CLICKED_HELP_AT_TOP, CLIENT_ERROR, AGENCY_CLICKED_LEFT_NAV_STORIES, CLICKED, SMB_VIEWED_MOBILE_CERTIFICATE, AGENCY_FAILED_COMPANY_VERIFICATION, VISITED_LANDING, VISITED_GPS, VISITED_AGENCY_PORTAL, CANCELLED_INDIVIDUAL_SIGN_UP, CANCELLED_COMPANY_SIGN_UP, AGENCY_CLICKED_SIGN_IN_BUTTON_TOP, AGENCY_CLICKED_SAVE_AND_CONTINUE_AT_BOT_OF_INCOMPLETE_PROFILE, AGENCY_UNSELECTED_OPT_IN_NEWS_INVITATIONS_AND_PROMOS, AGENCY_UNSELECTED_OPT_IN_BETA_TESTS_AND_MKT_RESEARCH, AGENCY_UNSELECTED_OPT_IN_PERFORMANCE_SUGGESTIONS, AGENCY_SELECTED_OPT_OUT_UNSELECT_ALL_EMAIL_NOTIFICATIONS, AGENCY_LINKED_INDIVIDUAL_MCC, AGENCY_SUGGESTED_TO_USER, AGENCY_IGNORED_SUGGESTED_AGENCIES_AND_SEARCHED, AGENCY_PICKED_SUGGESTED_AGENCY, AGENCY_SEARCHED_FOR_AGENCIES, AGENCY_PICKED_SEARCHED_AGENCY, AGENCY_DISMISSED_AFFILIATION_WIDGET, AGENCY_CLICKED_INSIGHTS_DOWNLOAD_CONTENT, AGENCY_PROGRESS_INSIGHTS_VIEW_CONTENT, AGENCY_CLICKED_CANCEL_ACCEPT_TOS_BUTTON, SMB_ENTERED_WEBSITE_IN_CONTACT_PARTNER_FORM, AGENCY_SELECTED_OPT_IN_AFA_MIGRATION, AGENCY_SELECTED_OPT_OUT_AFA_MIGRATION): The action that occurred.
  * eventCategory `string` (values: EVENT_CATEGORY_UNSPECIFIED, GOOGLE_PARTNER_SEARCH, GOOGLE_PARTNER_SIGNUP_FLOW, GOOGLE_PARTNER_PORTAL, GOOGLE_PARTNER_PORTAL_MY_PROFILE, GOOGLE_PARTNER_PORTAL_CERTIFICATIONS, GOOGLE_PARTNER_PORTAL_COMMUNITY, GOOGLE_PARTNER_PORTAL_INSIGHTS, GOOGLE_PARTNER_PORTAL_CLIENTS, GOOGLE_PARTNER_PUBLIC_USER_PROFILE, GOOGLE_PARTNER_PANEL, GOOGLE_PARTNER_PORTAL_LAST_ADMIN_DIALOG, GOOGLE_PARTNER_CLIENT, GOOGLE_PARTNER_PORTAL_COMPANY_PROFILE, EXTERNAL_LINKS, GOOGLE_PARTNER_LANDING): The category the action belongs to.
  * eventDatas `array`: List of event data for the event.
    * items [EventData](#eventdata)
  * eventScope `string` (values: EVENT_SCOPE_UNSPECIFIED, VISITOR, SESSION, PAGE): The scope of the event.
  * lead [Lead](#lead)
  * requestMetadata [RequestMetadata](#requestmetadata)
  * url `string`: The URL where the event occurred.

### LogUserEventResponse
* LogUserEventResponse `object`: Response message for
  * responseMetadata [ResponseMetadata](#responsemetadata)

### Money
* Money `object`: Represents an amount of money with its currency type.
  * currencyCode `string`: The 3-letter currency code defined in ISO 4217.
  * nanos `integer`: Number of nano (10^-9) units of the amount.
  * units `string`: The whole units of the amount.

### OfferCustomer
* OfferCustomer `object`: Customers qualified for an offer.
  * adwordsUrl `string`: URL to the customer's AdWords page.
  * countryCode `string`: Country code of the customer.
  * creationTime `string`: Time the customer was created.
  * eligibilityDaysLeft `integer`: Days the customer is still eligible.
  * externalCid `string`: External CID for the customer.
  * getYAmount `string`: Formatted Get Y amount with currency code.
  * name `string`: Name of the customer.
  * offerType `string` (values: OFFER_TYPE_UNSPECIFIED, OFFER_TYPE_SPEND_X_GET_Y, OFFER_TYPE_VIDEO, OFFER_TYPE_SPEND_MATCH): Type of the offer
  * spendXAmount `string`: Formatted Spend X amount with currency code.

### OptIns
* OptIns `object`: A set of opt-ins for a user.
  * marketComm `boolean`: An opt-in about receiving email from Partners marketing teams. Includes
  * performanceSuggestions `boolean`: An opt-in about receiving email with customized AdWords campaign management
  * phoneContact `boolean`: An opt-in to allow recieivng phone calls about their Partners account.
  * physicalMail `boolean`: An opt-in to receive special promotional gifts and material in the mail.
  * specialOffers `boolean`: An opt-in about receiving email regarding new features and products.

### PublicProfile
* PublicProfile `object`: Basic information from a public profile.
  * displayImageUrl `string`: The URL to the main display image of the public profile. Being deprecated.
  * displayName `string`: The display name of the public profile.
  * id `string`: The ID which can be used to retrieve more details about the public profile.
  * profileImage `string`: The URL to the main profile image of the public profile.
  * url `string`: The URL of the public profile.

### Rank
* Rank `object`: Information related to ranking of results.
  * type `string` (values: RANK_TYPE_UNSPECIFIED, RT_FINAL_SCORE): The type of rank.
  * value `number`: The numerical value of the rank.

### RecaptchaChallenge
* RecaptchaChallenge `object`: <a href="https://www.google.com/recaptcha/">reCaptcha</a> challenge info.
  * id `string`: The ID of the reCaptcha challenge.
  * response `string`: The response to the reCaptcha challenge.

### RequestMetadata
* RequestMetadata `object`: Common data that is in each API request.
  * experimentIds `array`: Experiment IDs the current request belongs to.
    * items `string`
  * locale `string`: Locale to use for the current request.
  * partnersSessionId `string`: Google Partners session ID.
  * trafficSource [TrafficSource](#trafficsource)
  * userOverrides [UserOverrides](#useroverrides)

### ResponseMetadata
* ResponseMetadata `object`: Common data that is in each API response.
  * debugInfo [DebugInfo](#debuginfo)

### SpecializationStatus
* SpecializationStatus `object`: Agency specialization status
  * badgeSpecialization `string` (values: BADGE_SPECIALIZATION_UNKNOWN, BADGE_SPECIALIZATION_ADWORDS_SEARCH, BADGE_SPECIALIZATION_ADWORDS_DISPLAY, BADGE_SPECIALIZATION_ADWORDS_MOBILE, BADGE_SPECIALIZATION_ADWORDS_VIDEO, BADGE_SPECIALIZATION_ADWORDS_SHOPPING): The specialization this status is for.
  * badgeSpecializationState `string` (values: BADGE_SPECIALIZATION_STATE_UNKNOWN, BADGE_SPECIALIZATION_STATE_PASSED, BADGE_SPECIALIZATION_STATE_NOT_PASSED, BADGE_SPECIALIZATION_STATE_IN_GRACE): State of agency specialization.

### TrafficSource
* TrafficSource `object`: Source of traffic for the current request.
  * trafficSourceId `string`: Identifier to indicate where the traffic comes from.
  * trafficSubId `string`: Second level identifier to indicate where the traffic comes from.

### User
* User `object`: A resource representing a user of the Partners platform.
  * availableAdwordsManagerAccounts `array`: This is the list of AdWords Manager Accounts the user has edit access to.
    * items [AdWordsManagerAccountInfo](#adwordsmanageraccountinfo)
  * certificationStatus `array`: The list of achieved certifications. These are calculated based on exam
    * items [Certification](#certification)
  * company [CompanyRelation](#companyrelation)
  * companyVerificationEmail `string`: The email address used by the user used for company verification.
  * examStatus `array`: The list of exams the user ever taken. For each type of exam, only one
    * items [ExamStatus](#examstatus)
  * id `string`: The ID of the user.
  * internalId `string`: The internal user ID.
  * lastAccessTime `string`: The most recent time the user interacted with the Partners site.
  * primaryEmails `array`: The list of emails the user has access to/can select as primary.
    * items `string`
  * profile [UserProfile](#userprofile)
  * publicProfile [PublicProfile](#publicprofile)

### UserOverrides
* UserOverrides `object`: Values to use instead of the user's respective defaults. These are only
  * ipAddress `string`: IP address to use instead of the user's geo-located IP address.
  * userId `string`: Logged-in user ID to impersonate instead of the user's ID.

### UserProfile
* UserProfile `object`: The profile information of a Partners user.
  * address [Location](#location)
  * adwordsManagerAccount `string`: If the user has edit access to multiple accounts, the user can choose the
  * channels `array`: A list of ids representing which channels the user selected they were in.
    * items `string`
  * emailAddress `string`: The email address the user has selected on the Partners site as primary.
  * emailOptIns [OptIns](#optins)
  * familyName `string`: The user's family name.
  * givenName `string`: The user's given name.
  * industries `array`: A list of ids representing which industries the user selected.
    * items `string`
  * jobFunctions `array`: A list of ids represnting which job categories the user selected.
    * items `string`
  * languages `array`: The list of languages this user understands.
    * items `string`
  * markets `array`: A list of ids representing which markets the user was interested in.
    * items `string`
  * migrateToAfa `boolean`: Whether or not to migrate the user's exam data to Academy for Ads.
  * phoneNumber `string`: The user's phone number.
  * primaryCountryCode `string`: The user's primary country, an ISO 2-character code.
  * profilePublic `boolean`: Whether the user's public profile is visible to anyone with the URL.


